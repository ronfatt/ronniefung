export interface MethodStep {
  step: string;
  name: string;
  sub: string;
  desc: string;
  phase: "经验提炼" | "系统架构" | "AI 转化" | "商业闭环";
}

export const methodSteps: MethodStep[] = [
  {
    step: "01",
    name: "老师经验",
    sub: "Deep Experience",
    desc: "老师脑海中数十年的实战个案、直觉判断与非结构化领悟。",
    phase: "经验提炼",
  },
  {
    step: "02",
    name: "知识整理",
    sub: "Knowledge Curation",
    desc: "将口头经验、零散课件、手写笔记转化为系统化知识分类树。",
    phase: "经验提炼",
  },
  {
    step: "03",
    name: "规则拆解",
    sub: "Rule Deconstruction",
    desc: "剥离晦涩术语，提取真正起效的判别原则、五行生克与定局条件。",
    phase: "系统架构",
  },
  {
    step: "04",
    name: "用户问题设计",
    sub: "Query Design",
    desc: "设计符合当代普通人痛点与困惑的交互式问题，避免生硬问答。",
    phase: "系统架构",
  },
  {
    step: "05",
    name: "分析逻辑",
    sub: "Analytical Logic",
    desc: "构建类似老师心智思考链（Chain of Thought）的分级决策树。",
    phase: "系统架构",
  },
  {
    step: "06",
    name: "AI 知识库",
    sub: "Knowledge Base (RAG)",
    desc: "私有化向量数据库注入，锁定专有流派，杜绝通用 AI 胡言乱语。",
    phase: "AI 转化",
  },
  {
    step: "07",
    name: "Web App / Agent",
    sub: "Interactive Product",
    desc: "打造响应迅速、界面高端、体验流畅的现代化应用与专属助手。",
    phase: "AI 转化",
  },
  {
    step: "08",
    name: "用户体验",
    sub: "User Experience",
    desc: "兼具东方审美与现代交互，让用户在几分钟内感到震撼与价值。",
    phase: "商业闭环",
  },
  {
    step: "09",
    name: "老师咨询 / 服务",
    sub: "High-Ticket Delivery",
    desc: "AI 筛选高意向优质客户，无缝导流至老师高客单个案与闭环传承。",
    phase: "商业闭环",
  },
];

export const whoIAmCards = [
  {
    number: "01",
    title: "品牌定位",
    english: "Brand Positioning",
    desc: "找到老师真正独特的价值与受众心智切入点，而不是只写‘大师’‘几十年经验’这种同质化文案。",
    accent: "定位清晰",
  },
  {
    number: "02",
    title: "理论整理",
    english: "Theory Structuring",
    desc: "把复杂命理、数字、八字、风水与老师的个人绝活，整理成清晰、可传授、可阅读的模块化架构。",
    accent: "架构清晰",
  },
  {
    number: "03",
    title: "产品化",
    english: "Productization",
    desc: "把知识转化成高价值课程、标准化咨询流程、自动化深度报告、会员产品与持续复购的服务。",
    accent: "交付清晰",
  },
  {
    number: "04",
    title: "数字化",
    english: "Digitalization",
    desc: "把传统口传心授的知识做成现代化 Web App、移动端互动测试、分析工具与学员管理系统。",
    accent: "资产沉淀",
  },
  {
    number: "05",
    title: "AI 化",
    english: "AI Transformation",
    desc: "建立专属私有 AI 知识库、分析逻辑树、智能问答系统与老师 24 小时陪伴学员的专属 AI 分身。",
    accent: "未来永续",
  },
];

export const targetPartners = [
  {
    number: "01",
    title: "经验丰富，但未系统化",
    desc: "你已经有 10–30 年沉淀与丰富个案，但绝大部分宝贵心得依然只存在脑里或零散笔记中。",
    tag: "知识沉淀",
  },
  {
    number: "02",
    title: "有独特理论，不知如何产品化",
    desc: "你有自己验证有效的研判方法，但不知如何整理成课程体系、测算工具或标准化服务产品。",
    tag: "产品孵化",
  },
  {
    number: "03",
    title: "想做属于自己的 App",
    desc: "看到市面上粗糙生硬的算命软件，你想做符合自己流派与高端审美的 Web App，却苦于没有科技桥梁。",
    tag: "科技落地",
  },
  {
    number: "04",
    title: "想建立专属 AI 老师 / AI 分身",
    desc: "希望让学生和客户可以 24 小时随时调用你的知识库，既能为你分担大量日常答疑，又能扩展影响力。",
    tag: "AI 资产",
  },
  {
    number: "05",
    title: "不想只困在 1 对 1 消耗中",
    desc: "体力和时间有限，不想一辈子仅靠一对一咨询换取收入，渴望把毕生经验转化为能传承给下一代的数字资产。",
    tag: "持续传承",
  },
];

export const possibleProductsList = [
  {
    id: "p1",
    name: "AI 命理分析师",
    category: "AI 智能体",
    desc: "根据八字格局与五行旺衰，自动生成千字洞察与生活策略。",
  },
  {
    id: "p2",
    name: "AI 风水顾问",
    category: "AI 智能体",
    desc: "根据户型图与坐向，智能识别空间吉凶并输出软装调理建议。",
  },
  {
    id: "p3",
    name: "AI 数字分析",
    category: "算法引擎",
    desc: "将手机号、生日密码进行即时九宫排盘与磁场转化评估。",
  },
  {
    id: "p4",
    name: "AI 奇门助手",
    category: "决策工具",
    desc: "一键起局定局，转译吉凶象数为清晰的商业谈判与行动指引。",
  },
  {
    id: "p5",
    name: "AI 八字报告",
    category: "交付产品",
    desc: "数分钟内自动编排数十页图文并茂、排版高级的终身运势全书。",
  },
  {
    id: "p6",
    name: "AI 姓名系统",
    category: "交付产品",
    desc: "音律、字义、数理与生辰平衡的一站式智能起名与改名建议。",
  },
  {
    id: "p7",
    name: "会员平台",
    category: "商业平台",
    desc: "集课件视频、互动社区、专属测算权限于一体的品牌私域。",
  },
  {
    id: "p8",
    name: "线上课程",
    category: "知识变现",
    desc: "阶梯式由浅入深的录播与训练营体系，附带自动化作业批改系统。",
  },
  {
    id: "p9",
    name: "知识库 (RAG)",
    category: "核心数据",
    desc: "老师独门案例与古籍资料的私有化向量数据库，随时检索复用。",
  },
  {
    id: "p10",
    name: "Web App",
    category: "交互前端",
    desc: "适配手机与平板的轻量化现代应用，无须下载、即点即用即传播。",
  },
  {
    id: "p11",
    name: "老师 AI 分身",
    category: "品牌代言",
    desc: "具备老师说话风格、断语习惯与神髓的拟人化 24h 智能导师。",
  },
  {
    id: "p12",
    name: "客户咨询系统",
    category: "转化漏斗",
    desc: "自动收集生辰信息、预诊痛点、出具初步诊断，让高客单水到渠成。",
  },
];
