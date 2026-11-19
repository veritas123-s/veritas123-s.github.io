const projects = [
  {
    "id": "multiagent",
    "number": "14",
    "title": "多 Agent · 科研工作流探索",
    "category": "research",
    "categoryLabel": "医学科研",
    "status": "探索中",
    "cover": "research",
    "description": "正在探索多 Agent 协作在科研工作流自动化中的可行性。",
    "intro": "尝试把不同任务与视角引入科研工作流，探索多 Agent 协作能否改善资料整理、写作与核验过程。",
    "work": [
      "探索科研任务的拆分、协作与结果交接。",
      "关注来源核对、独立审查与人工判断之间的关系。",
      "持续评估可追溯性、成本与真实工作流中的适用边界。"
    ],
    "note": "目前处于可行性探索阶段，不将角色设计或自动化运行等同于科研质量已获验证。",
    "links": [],
    "tags": [
      "Multi-agent",
      "Research automation",
      "Feasibility study"
    ]
  },
  {
    "id": "medstack",
    "number": "02",
    "title": "Medstack · 医栈通",
    "category": "product",
    "categoryLabel": "数字产品",
    "status": "公开发行",
    "cover": "medstack",
    "description": "整合课表、项目与校园快讯。新版源码加入本机助手，可批量安排任务和日程，也可整批撤销。",
    "intro": "面向医学学习与个人工作流的跨平台工作台。由 AI·VERITAS、Hades 的早期版本持续演进为 Medstack。",
    "work": [
      "在同一工作台管理课表、项目、任务和知识资料。",
      "公开版 6.3.5 提供 Windows、Android 和两种架构的 macOS 安装包。",
      "6.3.7 本机助手支持批量创建项目、任务和日程，再按批次撤销。"
    ],
    "note": "6.3.7 本机助手已在 Windows 验证。公开下载的安装包版本为 6.3.5。",
    "links": [
      [
        "公开发行版",
        "https://github.com/veritas123-s/Medstack-Program/releases/tag/v6.3.5"
      ],
      [
        "本机助手源码",
        "https://github.com/veritas123-s/Medstack-Program/commit/8eb0724a48c6dfeb94e13d6585e9c4ed141bfa2a"
      ]
    ],
    "tags": [
      "React",
      "Electron",
      "Android",
      "AI workflow"
    ]
  },
  {
    "id": "shanhai",
    "number": "09",
    "title": "山海有回声",
    "category": "practice",
    "categoryLabel": "公共实践",
    "status": "已上线",
    "cover": "shanhai",
    "image": "assets/shanhai.png",
    "description": "连接博医实践、人物故事与公共表达的数字档案网站。",
    "intro": "将博医实践的内容与故事组织为可浏览的网站，支持实践展示与交流。",
    "work": [
      "保留实践故事、展示资料和原有编号路径。",
      "整理“山海回响 · 电波企划”播客与嘉宾介绍。",
      "提供公开资料范围内的“问山海”入口。"
    ],
    "note": "网站已有上线记录。现场网络及真实微信设备的使用体验仍需单独验收。",
    "links": [
      [
        "访问网站",
        "https://veritas123-s.github.io/Boyi_SHSMU/"
      ]
    ],
    "tags": [
      "Boyi",
      "Web",
      "Storytelling"
    ]
  },
  {
    "id": "path",
    "number": "10",
    "title": "PATH · 医途配方",
    "category": "product",
    "categoryLabel": "数字产品",
    "status": "已上线",
    "cover": "path",
    "description": "用医学情境与 16 种类型，探索自己可能喜欢的医学职业路径。",
    "intro": "面向医学学生的互动职业探索体验。通过情境选择呈现临床、科研、医学 AI 等路径。",
    "work": [
      "24 道情境题与 4 道补充题，组成完整探索流程。",
      "16 型结果、角色视觉与人物资料。",
      "每次有效完成均给出一个确定类型，并支持答案修改与结果打印。"
    ],
    "note": "属于职业探索工具，量表信效度尚未验证。特别鸣谢：25级学术实践中心。",
    "links": [
      [
        "体验医途配方",
        "https://veritas123-s.github.io/Boyi_SHSMU/explore/"
      ]
    ],
    "tags": [
      "Interactive",
      "Career exploration",
      "16 types"
    ]
  },
  {
    "id": "liuan",
    "number": "11",
    "title": "博医 · 六安宣教原型",
    "category": "practice",
    "categoryLabel": "公共实践",
    "status": "原型已上线",
    "cover": "practice",
    "description": "围绕生命健康与社会责任，探索多校参与的线上宣教体验。",
    "intro": "服务于博医与六安宣教共建讨论的独立网站原型，延续既有网站排版，构建新的内容与交互。",
    "work": [
      "独立开发与原网站隔离的演示原型。",
      "将课程内容与互动问答组织为两条体验线。",
      "公开发布白名单运行文件，保留独立源码管理。"
    ],
    "note": "当前为演示原型。合作单位、正式课程内容授权与医学、史实、教学审核仍需落实。",
    "links": [
      [
        "查看原型",
        "https://veritas123-s.github.io/Boyi_Liuan_Preview/"
      ]
    ],
    "tags": [
      "Education",
      "Prototype",
      "Public engagement"
    ]
  },
  {
    "id": "clinical",
    "number": "07",
    "title": "临床交叉研究",
    "category": "research",
    "categoryLabel": "医学科研",
    "status": "研究与学习",
    "cover": "research",
    "description": "在九院眼科参与科研训练，作为第一负责人主持大学生创新训练计划科研创新类项目。",
    "intro": "在上海交通大学医学院附属第九人民医院眼科参与科研训练。自 2026 年 10 月起，作为第一负责人主持大学生创新训练计划科研创新类项目。",
    "work": [
      "处理与解读单细胞和空间转录组数据。",
      "参与动物实验、样本取材与组织处理。",
      "协调项目中的实验与数据分析进度。"
    ],
    "note": "大学生创新训练计划项目进行中。",
    "links": [],
    "tags": [
      "Ophthalmology",
      "Rheumatology",
      "Nuclear medicine"
    ]
  },
  {
    "id": "imaging",
    "number": "12",
    "title": "影像与转化研究",
    "category": "research",
    "categoryLabel": "医学科研",
    "status": "持续推进",
    "cover": "research",
    "description": "从临床观察出发，理解影像、机制与转化之间的联系。",
    "intro": "关注核医学与临床研究的联系，持续开展文献阅读、方法学习与研究写作。",
    "work": [
      "梳理影像与转化研究中的方法和证据。",
      "整理文献、研究问题与写作材料。"
    ],
    "note": "持续推进中的研究与学习。",
    "links": [],
    "tags": [
      "Imaging",
      "Translation",
      "Evidence"
    ]
  },
  {
    "id": "omics",
    "number": "13",
    "title": "组学与计算分析",
    "category": "research",
    "categoryLabel": "医学科研",
    "status": "分析实践",
    "cover": "research",
    "description": "通过数据、方法与证据，探索临床研究的另一种视角。",
    "intro": "围绕临床问题学习组学分析与计算方法，关注结果的可复现性及解释边界。",
    "work": [
      "学习数据整理、质量控制与表达分析。",
      "比较不同数据与方法的证据。",
      "记录分析过程、参数和研究解释。"
    ],
    "note": "组学与计算方法实践。",
    "links": [],
    "tags": [
      "Computational medicine",
      "Data analysis",
      "Reproducibility"
    ]
  },
  {
    "id": "poseidon",
    "number": "15",
    "title": "Poseidon · 工具型助手",
    "category": "product",
    "categoryLabel": "数字产品",
    "status": "已集成工作台",
    "cover": "product",
    "description": "把自然语言请求连接到工作台中的受控工具与可检查结果。",
    "intro": "Medstack 中的助手实践，围绕自然语言、工具调用与任务管理建立清晰的操作流程。",
    "work": [
      "连接模型请求与工作台工具。",
      "支持工具结果回传、取消与执行边界。",
      "将生成的任务内容组织为可核对的工作流。"
    ],
    "note": "Poseidon 与本机助手同属 Medstack，详情见医栈通项目。",
    "links": [
      [
        "所属项目",
        "https://github.com/veritas123-s/Medstack-Program"
      ]
    ],
    "tags": [
      "Pi agent",
      "Tool calling",
      "Personal workflow"
    ]
  },
  {
    "id": "daily",
    "number": "16",
    "title": "每日助手 · 提醒工作流",
    "category": "product",
    "categoryLabel": "数字产品",
    "status": "已搭建",
    "cover": "product",
    "description": "围绕学习、任务与阅读，搭建定时摘要和个人提醒流程。",
    "intro": "连接本地记录、云端摘要与个人提醒渠道，探索减少重复整理的日常工作方式。",
    "work": [
      "整理早晚摘要与任务提醒规则。",
      "结合最近有效快照组织离线时的摘要。",
      "保留运行记录、送达状态与失败边界。"
    ],
    "note": "已搭建与历史运行记录不等于每次提醒均实时送达。本页不展示私人日程或提醒明细。",
    "links": [],
    "tags": [
      "Automation",
      "Scheduling",
      "Personal workflow"
    ]
  },
  {
    "id": "literature",
    "number": "17",
    "title": "文献雷达 · 阅读工作流",
    "category": "research",
    "categoryLabel": "医学科研",
    "status": "工作流实践",
    "cover": "research",
    "description": "把文献发现、题录整理与精读提示组织成可追溯的流程。",
    "intro": "围绕科研主题建立文献检索、题录管理与阅读辅助的工作流。",
    "work": [
      "探索定向文献发现与来源整理。",
      "使用 Zotero 组织题录和文献材料。",
      "围绕分子探针与疾病机制准备精读提示。"
    ],
    "note": "展示工作流实践，不把下载、摘要或自动整理视为已完成的全文理解。",
    "links": [],
    "tags": [
      "Zotero",
      "Literature",
      "Reading"
    ]
  },
  {
    "id": "medtrix",
    "number": "08",
    "title": "医+X · 交叉学科创新协会",
    "category": "practice",
    "categoryLabel": "公共实践",
    "status": "协会运营",
    "cover": "practice",
    "description": "担任医学院“医+X”交叉学科创新协会会长，统筹协会运营、跨学科项目策划与医工交流活动。",
    "intro": "协会面向有跨学科兴趣的医学生。从筹备阶段的团委汇报，到后续的运营与选题，围绕医学生如何参与医工项目开展工作。",
    "work": [
      "组织医工交叉主题活动。",
      "协调跨学科项目的选题与策划。",
      "整理协会方案并制作公开汇报材料。"
    ],
    "note": "公开汇报材料记录了协会筹备期的方案与设想。",
    "links": [
      [
        "筹备期汇报",
        "https://veritas123-s.github.io/yijiax-pages/"
      ]
    ],
    "tags": [
      "医工交叉",
      "学生组织"
    ]
  },
  {
    "id": "extraction",
    "number": "18",
    "title": "PDF · 化合物信息提取",
    "category": "experiment",
    "categoryLabel": "学习实验",
    "status": "既往项目",
    "cover": "experiment",
    "description": "探索从论文 PDF 提取化合物信息，并保留来源与核对环节。",
    "intro": "针对科研资料中的重复整理需求，探索论文 PDF 信息抽取与结构化导出。",
    "work": [
      "提取化合物名称及相关字段。",
      "组织分块处理、去重与来源页追踪。",
      "将无法确认的信息留给人工核对。"
    ],
    "note": "既往工具探索。名称、CAS 与 SMILES 等字段仍需来源核对，不能将模型猜测当作验证结果。",
    "links": [],
    "tags": [
      "Python",
      "PDF",
      "Structured data"
    ]
  },
  {
    "id": "mnist",
    "number": "19",
    "title": "MNIST · 手写数字识别",
    "category": "experiment",
    "categoryLabel": "学习实验",
    "status": "学习项目",
    "cover": "experiment",
    "description": "从训练数据到外部图片，理解机器学习中的真实分布差异。",
    "intro": "以手写数字识别为入口，学习模型训练、输入处理与外部数据测试。",
    "work": [
      "完成基础模型训练与图片识别探索。",
      "检查反色、裁剪、居中与归一化的影响。",
      "比较训练数据与外部图片的域偏移问题。"
    ],
    "note": "不展示未核验的准确率数字，也不将训练集表现当作外部泛化能力。",
    "links": [],
    "tags": [
      "Python",
      "MNIST",
      "Machine learning"
    ]
  },
  {
    "id": "focus",
    "number": "20",
    "title": "国策树 · 番茄钟探索",
    "category": "experiment",
    "categoryLabel": "学习实验",
    "status": "早期原型",
    "cover": "experiment",
    "description": "尝试用可视化路径组织专注与任务，记录早期交互设计实验。",
    "intro": "使用 React、Vite 与 React Flow 探索可视化任务结构和番茄钟体验的早期原型。",
    "work": [
      "尝试树状任务与专注流程的结合。",
      "练习前端组件、状态与交互组织。",
      "记录依赖兼容与实现过程中遇到的问题。"
    ],
    "note": "早期探索项目，未作为成熟产品发行。",
    "links": [],
    "tags": [
      "React",
      "React Flow",
      "Prototype"
    ]
  },
  {
    "id": "medical-language",
    "number": "01",
    "title": "经验与凝视",
    "category": "research",
    "categoryLabel": "哲学与医学人文",
    "status": "研究札记",
    "description": "浅谈现代临床语言的形成、断裂与弥合。",
    "intro": "从患者经验向临床知识的转译出发，考察医学语言的形成、断裂与弥合。",
    "work": [
      "从福柯《临床医学的诞生》讨论苦痛与症状的关系。",
      "考察病历、医患沟通与临床知识的符号机制。",
      "讨论叙事医学、科普与 AI 的影响。"
    ],
    "note": "《经验与凝视》 · 研究札记。",
    "links": [
      [
        "阅读原文",
        "articles/clinical-language.html"
      ]
    ],
    "tags": [
      "Medical humanities",
      "Linguistics",
      "Semiotics"
    ],
    "featured": true,
    "summary": "以福柯《临床医学的诞生》为线索，文章考察症状、病历与临床凝视如何将患者的生活经验转译为可比较、可积累的医学知识。专业语言在提高疾病可知性的同时，也可能压缩患者的主体性与意义表达，形成医患之间的语言与符号断裂。文章进一步讨论叙事医学、医学科普与 AI 的翻译作用，主张通过倾听、解释和共同决策缩小鸿沟，并强调沟通中的知识边界与临床责任。"
  },
  {
    "id": "oct-course",
    "title": "OCT 视网膜疾病识别与转诊分流",
    "category": "experiment",
    "categoryLabel": "课程复现",
    "status": "已完成",
    "description": "用 R 复现公开 OCT 图像的四分类实验，并考察模型在优先转诊时会漏掉或误报哪些图像。",
    "intro": "以 Kermany 等人发表于 2018 年的研究为起点，在公开视网膜光学相干断层扫描（OCT）图像上重建分类与转诊分流流程。",
    "work": [
      "按患者编号和重复图像分组，再划分训练、验证和测试集。",
      "用冻结的 Inception-v3 提取特征，在 R 中训练分类器，并与采用 L2 正则化的多项逻辑回归比较。",
      "在留出的 1,000 张图像上，四分类准确率为 87.8%。优先转诊阈值由验证集选定，在测试集中漏分 2 张、误报 131 张。"
    ],
    "note": "结果来自本次课程复现的公开数据测试集。转诊分流的临床效用仍需前瞻性研究评估。",
    "links": [
      [
        "原研究论文",
        "https://doi.org/10.1016/j.cell.2018.02.010"
      ],
      [
        "原始数据",
        "https://doi.org/10.17632/rscbjbr9sj.3"
      ]
    ],
    "tags": [
      "OCT",
      "迁移学习",
      "R"
    ],
    "number": "03"
  },
  {
    "id": "boyi-cloud",
    "title": "博医云",
    "category": "practice",
    "categoryLabel": "公共实践",
    "status": "已上线",
    "description": "把博医计划的实践记录、学员故事、文章和播客整理在一起，访客也可向云伴提问，查找站内公开资料。",
    "intro": "从博医计划的快闪展示网站延伸出博医云，为访客保留公开的实践与作品入口，也为成员提供日常学习空间。",
    "work": [
      "整理实践项目、人物与历届资料，建立博医五期独立介绍页。",
      "接入云伴问答，按访客的问题查找已公开的博医资料。",
      "为成员提供学习组工作台和课堂课件分享。2026 年 11 月完成 Windows 部署包与运维手册。"
    ],
    "note": "网站公开内容可直接浏览，成员学习空间需登录。",
    "links": [
      [
        "访问博医云",
        "https://122.51.44.155/boyi-preview/"
      ],
      [
        "博医五期",
        "https://122.51.44.155/boyi-preview/window/cohort/"
      ]
    ],
    "tags": [
      "荣昶·博医",
      "社会实践",
      "数字档案"
    ],
    "number": "04"
  },
  {
    "id": "statistics-canvas",
    "title": "统计画布 · OCT 与转录组",
    "category": "experiment",
    "categoryLabel": "学习实验",
    "status": "可在线体验",
    "description": "选择两个指标，观察数据点在旋转与白化过程中怎样移动，直观理解协方差和马氏距离。",
    "intro": "同一张画布可以切换 OCT 统计数据和四组组织转录组数据，把矩阵计算的每一步对应到散点图上的坐标变化。",
    "work": [
      "在 OCT 模式中选择指标，在转录组模式中搜索基因、切换组织和参照组。",
      "逐步查看协方差矩阵的乘法、坐标轴的旋转，以及白化前后的点云。",
      "对照变换前后的坐标和马氏距离，可下载数值再计算。"
    ],
    "note": "转录组模式保留原始计数和标准化表达值，供教学和方法探索。",
    "links": [
      [
        "打开统计画布",
        "https://veritas123-s.github.io/OCT-Statistics-Lab/"
      ]
    ],
    "tags": [
      "协方差",
      "白化",
      "马氏距离"
    ],
    "number": "05"
  },
  {
    "id": "biomatrix",
    "title": "BioMatrix · 生信分析工作台",
    "category": "product",
    "categoryLabel": "数字产品",
    "status": "可登录使用",
    "description": "按基因或通路分析表达数据，每张结果图都可连同数据和 R 代码一起导出。",
    "intro": "面向需要自己选基因、调配色和重画结果图的使用者。上传表达矩阵、分组文件或差异分析表后，工作台根据输入类型列出可运行的分析。",
    "work": [
      "可指定基因、通路与配色，生成表达或富集分析图。",
      "逐图下载图片、作图数据和 R 脚本，在独立 R 会话中复画。",
      "远程用户分别登录自己的工作空间，计算由运行工作台的主机执行。"
    ],
    "note": "远程分析需要已开通的账号和在线主机。",
    "links": [
      [
        "项目说明",
        "https://github.com/veritas123-s/biomatrix-remote"
      ]
    ],
    "tags": [
      "转录组",
      "R",
      "可复现分析"
    ],
    "number": "06"
  }
];
projects.sort((a,b)=>Number(a.number)-Number(b.number));
const grid=document.getElementById('project-grid');
const escapeHTML=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function renderCover(p){if(p.featured)return `<div class="cover cover-essay"><img src="assets/experience-gaze-cover.png" alt="经验与凝视封面：纸页、凝视与语言的转译" width="1672" height="941" loading="lazy"></div>`;if(p.id==='medtrix')return `<img class="association-mark" src="assets/yijiax.jpg" alt="医+X 创协标识" width="640" height="640" loading="lazy">`;if(p.cover==='medstack')return `<div class="cover cover-medstack"><img src="assets/medstack.png" alt="Medstack 标志" width="65" height="65" loading="lazy"><div><span class="cover-title">Medstack</span><div class="cover-sub">个人工作台</div></div></div>`;if(p.image)return `<div class="cover cover-${p.cover}"><img class="screenshot" src="${p.image}" alt="${p.title}网站截图" width="1440" height="900" loading="lazy"></div>`;return '';}
grid.innerHTML=projects.map(p=>`<article id="project-${p.id}" class="project-card${p.featured?' project-card-featured':''}" data-category="${p.category}">${p.featured?'<p class="featured-label">主要作品 · 哲学与医学人文</p>':''}${renderCover(p)}<div class="card-top"><h3 class="card-title">${p.title}</h3><span class="status">${p.status}</span></div><p class="card-desc">${p.description}</p>${p.summary?`<p class="card-summary"><span class="abstract-label">摘要</span>${escapeHTML(p.summary)}</p>`:''}<div class="card-bottom"><span class="card-category">${p.number} / ${p.categoryLabel}</span><div class="card-actions">${p.links.length?`<a class="project-link" href="${p.links[0][1]}" target="_blank" rel="noopener noreferrer">${escapeHTML(p.links[0][0])}</a>`:''}<button class="details-button" data-project="${p.id}" aria-label="查看${p.title}项目详情">详情</button></div></div></article>`).join('');
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',active)});const filter=button.dataset.filter;let count=0;document.querySelectorAll('.project-card').forEach(card=>{card.hidden=filter!=='all'&&card.dataset.category!==filter;if(!card.hidden)count++});document.querySelector('.result-count').textContent=`${count} 个项目`}));
const dialog=document.getElementById('project-dialog');let opener;
grid.addEventListener('click',event=>{const button=event.target.closest('[data-project]');if(!button)return;const p=projects.find(p=>p.id===button.dataset.project);opener=button;document.getElementById('detail-content').innerHTML=`<div class="detail-tags">${p.number} / ${p.categoryLabel} · ${p.status}</div><h2 id="detail-title">${p.title}</h2><p>${p.intro}</p>${p.image?`<img class="detail-image" src="${p.image}" alt="${p.title}网站截图">`:''}<h3>项目内容</h3><ul>${p.work.map(x=>`<li>${escapeHTML(x)}</li>`).join('')}</ul><div class="interest-tags">${p.tags.map(x=>`<span>${escapeHTML(x)}</span>`).join('')}</div><p class="detail-note">${p.note}</p><div class="detail-links">${p.links.map(([label,url])=>`<a class="pill primary" href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`).join('')}</div>`;dialog.showModal();dialog.scrollTop=0;document.body.classList.add('dialog-open')});
document.getElementById('close-dialog').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');opener?.focus()});


function revealLinkedProject() {
  const card = document.getElementById(location.hash.slice(1));
  if (card?.classList.contains('project-card') && card.hidden) {
    document.querySelector('[data-filter="all"]').click();
    card.scrollIntoView();
  }
}
window.addEventListener('hashchange', revealLinkedProject);
revealLinkedProject();
