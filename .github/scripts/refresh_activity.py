"""Build the last 365 days of a public GitHub contribution calendar."""

import argparse
import json
import re
import time
from datetime import date, datetime, timedelta, timezone
from html.parser import HTMLParser
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import quote, urlencode
from urllib.request import Request, urlopen


COUNT_TEXT = re.compile(r"(No|[0-9]+(?:,[0-9]{3})*) contributions? on .+")


class CalendarParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.cells = {}
        self.tips = {}
        self.current_tip = None
        self.tip_text = []

    def handle_starttag(self, tag, attrs):
        fields = dict(attrs)
        if tag == "td" and "data-date" in fields:
            cell_id = fields["id"]
            if cell_id in self.cells:
                raise ValueError(f"Duplicate contribution cell: {cell_id}")
            day = date.fromisoformat(fields["data-date"])
            level = int(fields["data-level"])
            if not 0 <= level <= 4:
                raise ValueError(f"Unexpected contribution level on {day}: {level}")
            self.cells[cell_id] = (day, level)
        elif tag == "tool-tip" and fields.get("for"):
            self.current_tip = fields["for"]
            self.tip_text = []

    def handle_data(self, data):
        if self.current_tip is not None:
            self.tip_text.append(data)

    def handle_endtag(self, tag):
        if tag == "tool-tip" and self.current_tip is not None:
            if self.current_tip in self.tips:
                raise ValueError(f"Duplicate tooltip: {self.current_tip}")
            self.tips[self.current_tip] = " ".join("".join(self.tip_text).split())
            self.current_tip = None

    def counts(self, start, end):
        records = {}
        for cell_id, (day, level) in self.cells.items():
            if not start <= day <= end:
                continue
            match = COUNT_TEXT.fullmatch(self.tips.get(cell_id, ""))
            if match is None:
                raise ValueError(f"Missing or unrecognized contribution count on {day}")
            value = match.group(1)
            count = 0 if value == "No" else int(value.replace(",", ""))
            if (count == 0) != (level == 0):
                raise ValueError(f"Contribution count and color level disagree on {day}")
            if day in records:
                raise ValueError(f"Duplicate contribution date: {day}")
            records[day] = [day.isoformat(), count, level]
        return records


def fetch_year(user, year, as_of):
    query = urlencode({
        "from": f"{year}-01-01",
        "to": min(date(year, 12, 31), as_of).isoformat(),
    })
    url = f"https://github.com/users/{quote(user, safe='')}/contributions?{query}"
    request = Request(url, headers={
        "Accept": "text/html",
        "Accept-Language": "en-US",
        "User-Agent": "Gallery-Contribution-Calendar/1.0",
    })
    for attempt in range(3):
        try:
            with urlopen(request, timeout=20) as response:
                if response.headers.get_content_type() != "text/html":
                    raise ValueError("GitHub returned an unexpected calendar format")
                return response.read().decode("utf-8")
        except (URLError, TimeoutError) as error:
            if isinstance(error, HTTPError) and error.code not in (429, 500, 502, 503, 504):
                raise
            if attempt == 2:
                raise
            time.sleep(2 ** (attempt + 1))


def snapshot(user, as_of):
    start = as_of - timedelta(days=364)
    records = {}
    for year in range(start.year, as_of.year + 1):
        parser = CalendarParser()
        parser.feed(fetch_year(user, year, as_of))
        parser.close()
        year_start = max(date(year, 1, 1), start)
        year_end = min(date(year, 12, 31), as_of)
        records.update(parser.counts(year_start, year_end))

    dates = [start + timedelta(days=offset) for offset in range(365)]
    missing = [day for day in dates if day not in records]
    if missing:
        raise ValueError(f"Incomplete calendar; {len(missing)} dates missing, first {missing[0]}")
    return {"asOf": as_of.isoformat(), "days": [records[day] for day in dates]}


def main():
    cli = argparse.ArgumentParser(description=__doc__)
    cli.add_argument("--user", default="veritas123-s")
    cli.add_argument("--output", type=Path, required=True)
    args = cli.parse_args()
    data = snapshot(args.user, datetime.now(timezone.utc).date())
    args.output.write_text(json.dumps(data, separators=(",", ":")) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
