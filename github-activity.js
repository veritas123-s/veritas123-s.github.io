(() => {
  const localURL = './activity-data.json';
  const upstreamURL = 'https://raw.githubusercontent.com/veritas123-s/veritas123-s.github.io/activity-data/activity-data.json';
  const dayMilliseconds = 86400000;
  const panel = document.getElementById('activity-panel');
  const calendar = document.getElementById('activity-calendar');
  const viewport = document.getElementById('activity-scroll');
  const dateNote = document.getElementById('activity-date');
  const selection = document.getElementById('activity-selection');
  const numberFormat = new Intl.NumberFormat('zh-CN');
  const fullDateFormat = new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric', month: 'long', day: 'numeric', weekday: 'long', timeZone: 'UTC'
  });
  let displayed;
  let selectedButton;
  let buttons = [];

  function validSnapshot(data) {
    if (!Array.isArray(data?.days) || data.days.length !== 365 ||
        data.asOf !== data.days[364]?.[0]) return false;
    let previousTime;
    for (const entry of data.days) {
      if (!Array.isArray(entry) || entry.length !== 3) return false;
      const [date, count, level] = entry;
      if (typeof date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
          !Number.isSafeInteger(count) || count < 0 || !Number.isInteger(level) || level < 0 || level > 4 ||
          (count === 0) !== (level === 0)) return false;
      const time = Date.parse(date + 'T00:00:00Z');
      if (!Number.isFinite(time) || new Date(time).toISOString().slice(0, 10) !== date ||
          (previousTime !== undefined && time - previousTime !== dayMilliseconds)) return false;
      previousTime = time;
    }
    return true;
  }

  function selectDay(button) {
    if (selectedButton && selectedButton !== button) {
      selectedButton.tabIndex = -1;
      selectedButton.setAttribute('aria-pressed', 'false');
    }
    button.tabIndex = 0;
    button.setAttribute('aria-pressed', 'true');
    selection.textContent = button.title;
    selectedButton = button;
  }

  function showSnapshot(data) {
    const oldDate = selectedButton?.dataset.date;
    const useLatest = !oldDate || oldDate === displayed.asOf;
    const hadFocus = calendar.contains(document.activeElement);
    const wasAtEnd = !displayed || viewport.scrollLeft >= viewport.scrollWidth - viewport.clientWidth - 3;
    const previousScroll = viewport.scrollLeft;
    const start = new Date(data.days[0][0] + 'T00:00:00Z');
    const firstRow = (start.getUTCDay() + 6) % 7;
    const weeks = Math.ceil((firstRow + data.days.length) / 7);
    const contents = document.createDocumentFragment();
    const newButtons = [];
    let total = 0;
    let active = 0;
    let recent = 0;
    let previousMonthWeek = -3;
    data.days.forEach(([date, count, level], index) => {
      const timestamp = new Date(date + 'T00:00:00Z');
      const position = firstRow + index;
      const week = Math.floor(position / 7);
      const firstOfMonth = timestamp.getUTCDate() === 1;
      if ((firstOfMonth || (index === 0 && timestamp.getUTCDate() <= 18)) && week - previousMonthWeek >= 2) {
        const label = document.createElement('span');
        label.className = 'activity-month';
        label.setAttribute('aria-hidden', 'true');
        label.style.gridColumn = String(week + 1);
        if (week === weeks - 1) label.style.justifySelf = 'end';
        label.textContent = String(timestamp.getUTCMonth() + 1) + '月';
        contents.append(label);
        previousMonthWeek = week;
      }
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'activity-day';
      button.tabIndex = -1;
      button.dataset.date = date;
      button.dataset.index = String(index);
      button.dataset.level = String(level);
      button.style.gridColumn = String(week + 1);
      button.style.gridRow = String(position % 7 + 2);
      button.title = fullDateFormat.format(timestamp) + ' · ' + numberFormat.format(count) + ' 次贡献';
      button.setAttribute('aria-label', button.title);
      button.setAttribute('aria-pressed', 'false');
      contents.append(button);
      newButtons.push(button);
      total += count;
      if (count > 0) active++;
      if (index >= data.days.length - 30) recent += count;
    });
    calendar.style.setProperty('--weeks', String(weeks));
    calendar.replaceChildren(contents);
    buttons = newButtons;
    document.getElementById('activity-total').textContent = numberFormat.format(total);
    document.getElementById('activity-active').textContent = numberFormat.format(active);
    document.getElementById('activity-recent').textContent = numberFormat.format(recent);
    dateNote.textContent = '统计区间 ' + data.days[0][0] + ' 至 ' + data.asOf + '，按 GitHub 账户贡献记录计算。';
    panel.hidden = false;
    const selectionToKeep = !useLatest && buttons.find(button => button.dataset.date === oldDate);
    selectDay(selectionToKeep || buttons[buttons.length - 1]);
    viewport.scrollLeft = wasAtEnd ? viewport.scrollWidth : previousScroll;
    if (hadFocus) selectedButton.focus({preventScroll: true});
    displayed = data;
  }

  calendar.addEventListener('click', event => {
    const button = event.target.closest('.activity-day');
    if (button) selectDay(button);
  });
  calendar.addEventListener('keydown', event => {
    const button = event.target.closest('.activity-day');
    if (!button) return;
    const index = Number(button.dataset.index);
    const destinations = {
      ArrowLeft: index - 7, ArrowRight: index + 7, ArrowUp: index - 1,
      ArrowDown: index + 1, Home: 0, End: buttons.length - 1
    };
    if (!Object.hasOwn(destinations, event.key)) return;
    event.preventDefault();
    const next = buttons[Math.max(0, Math.min(buttons.length - 1, destinations[event.key]))];
    selectDay(next);
    next.focus({preventScroll: true});
    const bounds = viewport.getBoundingClientRect();
    const cell = next.getBoundingClientRect();
    if (cell.left < bounds.left) viewport.scrollLeft += cell.left - bounds.left - 2;
    if (cell.right > bounds.right) viewport.scrollLeft += cell.right - bounds.right + 2;
  });

  async function loadSnapshot(url) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    try {
      const response = await fetch(url, {signal: controller.signal, cache: 'no-cache', credentials: 'omit'});
      if (!response.ok) return;
      const data = await response.json();
      if (validSnapshot(data) && (!displayed || data.asOf > displayed.asOf ||
          (data.asOf === displayed.asOf && url === upstreamURL))) showSnapshot(data);
    } catch {
      // The other source can still supply the calendar while this one is unavailable.
    } finally {
      clearTimeout(timeout);
    }
  }

  Promise.all([loadSnapshot(localURL), loadSnapshot(upstreamURL)]).then(() => {
    if (!displayed) dateNote.textContent = '贡献数据暂时无法读取。可前往 GitHub 查看原始记录。';
  });
})();
