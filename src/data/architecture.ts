export interface ArchitectureLayer {
  step: string;
  phase: string;
  englishPhase: string;
  badge: string;
  title: string;
  subtitle: string;
  workModules: {
    name: string;
    description: string;
    techTags: string[];
  }[];
  complexityHighlights: string[];
  deliverable: string;
}

export const architectureBlueprint: ArchitectureLayer[] = [
  {
    step: "01",
    phase: "认知与经验提取层",
    englishPhase: "Cognitive Extraction & Knowledge Mining",
    badge: "经验工程化",
    title: "老师隐性心智解构",
    subtitle: "把深藏在老师直觉里的‘只可意会’，翻译为机器能够读懂的结构化规则。",
    workModules: [
      {
        name: "深度个案思维反推 (Case Deconstruction)",
        description: "提取老师过去数十个经典研判案例，反向推导‘为什么这样断’的心智判断链条。",
        techTags: ["思维链抽取", "案例拓扑图", "经验逆向工程"],
      },
      {
        name: "流派规则树与逻辑梳理 (Rule Structuring)",
        description: "剥离晦涩口诀，把生克、旺衰、神煞、格局等整理为严谨的分级决策树。",
        techTags: ["排盘定局逻辑", "阴阳五行规则库", "多流派权重配置"],
      },
      {
        name: "神圣防线与安全护栏 (Ethical Guardrails)",
        description: "设定法律合规、非封建迷信、正念心理引导与极端情绪识别的安全红线规则。",
        techTags: ["合规过滤", "负向情绪预警", "心理疏导兜底机制"],
      },
    ],
    complexityHighlights: [
      "不是录几段音就完事，而是建立独一无二的流派规则拓扑矩阵",
      "解决‘为什么不同老师看同一个盘会有不同切入点’的认知建模难题",
    ],
    deliverable: "《老师独家流派知识图谱与判定规则蓝图》",
  },
  {
    step: "02",
    phase: "数据清洗与私有向量层",
    englishPhase: "Private RAG & Data Engineering",
    badge: "知识库壁垒",
    title: "私有化向量数据库搭建",
    subtitle: "彻底杜绝通用大模型的胡言乱语，锁死在老师专属教材与案例文献内。",
    workModules: [
      {
        name: "多模态数据清洗分块 (Chunking & Embedding)",
        description: "对数十万字讲义、手稿、视频录音文字进行语义分块与高保真元数据标记。",
        techTags: ["语义分块算法", "高维向量嵌入", "元数据标注"],
      },
      {
        name: "私有向量数据库构建 (Private Vector DB)",
        description: "私有化存储与检索系统，数据完全归老师所有，杜绝商业机密与知识外泄。",
        techTags: ["Milvus / Pinecone", "向量相似度匹配", "私有隔离存储"],
      },
      {
        name: "防幻觉锁定引擎 (Anti-Hallucination Pipeline)",
        description: "采用双重检索重排（Rerank）与依据溯源校验，保证输出的每一句话皆有典籍可考。",
        techTags: ["Hybrid Search", "交叉重排模型", "引用溯源校验"],
      },
    ],
    complexityHighlights: [
      "玄学术语在通用模型中错误率高达 70%，必须深度工程化解决术语语义偏差",
      "实现古汉语断句、通假字与流派专有名词的高精准语义检索",
    ],
    deliverable: "《老师私有化向量知识库与防幻觉检索系统》",
  },
  {
    step: "03",
    phase: "算法排盘与推理引擎层",
    englishPhase: "Deterministic Algorithms & Multi-Agent Engine",
    badge: "硬核算力",
    title: "确定性算力 × AI 推理链编排",
    subtitle: "传统数学算法排盘（零误差）+ 大模型高情商深度转译（高共情）。",
    workModules: [
      {
        name: "天文时空排盘数学引擎 (Astronomical Calculation)",
        description: "真太阳时换算、二十四节气精确到秒、九宫飞星、时家奇门定局纯代码数学算力库。",
        techTags: ["天文算法库", "纯确定性运算", "毫秒级排盘引擎"],
      },
      {
        name: "多智能体协同流水线 (Multi-Agent Swarm)",
        description: "排盘分析 Agent + 情绪共情 Agent + 商业决策 Agent + 审核校准 Agent 链式串联运作。",
        techTags: ["Agent 编排", "动态提示词流水线", "上下文记忆池"],
      },
      {
        name: "老师灵魂口癖微调 (Master Persona Tuning)",
        description: "学习老师特有的说话节奏、口头禅、鼓励方式与断语风格，让人感受原汁原味的老师陪伴。",
        techTags: ["Few-Shot 调优", "拟人化风格模型", "语气语感校准"],
      },
    ],
    complexityHighlights: [
      "把枯燥冰冷的算命打分，升级为富有温度、洞察犀利的人生战略私董会级别对话",
      "实现数学排盘逻辑 100% 确定性与大模型语义表达 100% 灵动性的完美契合",
    ],
    deliverable: "《高精度排盘引擎与老师专属 AI 推理智能体》",
  },
  {
    step: "04",
    phase: "交互体验与现代前端层",
    englishPhase: "Modern Web App & Tactile UI/UX",
    badge: "顶尖审美",
    title: "现代化高颜值轻应用开发",
    subtitle: "告别廉价土味算命模板。采用苹果级当代极简东方美学，打造移动端即开即用体验。",
    workModules: [
      {
        name: "东方极简当代视觉工程 (Contemporary Aesthetic)",
        description: "高级米白、墨玉绿与香槟金质感，融合微交互动效与视觉化能量雷达/罗盘。",
        techTags: ["Next.js 14", "Tailwind CSS", "Framer Motion 动效"],
      },
      {
        name: "流式极速响应架构 (Streaming Output)",
        description: "字斟句酌的流式逐字打字机效果，多端极速加载，首屏渲染控制在 0.6 秒内。",
        techTags: ["Server-Sent Events", "边缘计算 (Edge)", "全端自适应响应"],
      },
      {
        name: "社交引流裂变微互动 (Viral Mechanics)",
        description: "测算完成自动生成带老师个人微信与二维码的极美海报，驱动学员自发朋友圈裂变。",
        techTags: ["动态 Canvas 海报生成", "微信生态无缝分享", "裂变漏斗监控"],
      },
    ],
    complexityHighlights: [
      "专为手机端大字号阅读与投影仪投屏优化，让年轻一代与高净值客户一眼惊艳",
      "免下载、免安装，微信内即开即测，转化率提升 400% 以上",
    ],
    deliverable: "《全端响应式 Web App 前端系统与社交裂变引擎》",
  },
  {
    step: "05",
    phase: "商业变现与私域漏斗层",
    englishPhase: "Monetization & Conversion Funnel",
    badge: "商业闭环",
    title: "阶梯式变现与私域转化系统",
    subtitle: "不只是做个 App，而是为老师搭建可持续盈利、源源不断筛选高净值客户的数字漏斗。",
    workModules: [
      {
        name: "阶梯式产品矩阵搭建 (Tiered Funnel)",
        description: "免费引流测算 → 99 元轻量报告 → 999 元深度运势全书 → 1对1高客单咨询 → 传承弟子班。",
        techTags: ["全链路转化模型", "付费墙动态解锁", "阶梯式 SKU 规划"],
      },
      {
        name: "自动化支付与履约中心 (Auto-Fulfillment)",
        description: "用户付款后秒级出具数十页高端图文 PDF 报告，自动发送邮件与微信通知，零人工成本。",
        techTags: ["Stripe / 微信支付", "自动化 PDF 渲染排版", "自动履约流水线"],
      },
      {
        name: "客户画像深度沉淀 (Metaphysics CRM)",
        description: "收集并结构化沉淀客户生辰、号码、关切痛点与消费意向，让老师咨询前已对客户了如指掌。",
        techTags: ["客户智能 CRM", "线索高意向度评分", "咨询预约排期系统"],
      },
    ],
    complexityHighlights: [
      "帮老师从‘每天重复解盘 10 小时’的体力消耗中解脱，让系统 24 小时自动收款与交付",
      "AI 提前过滤并预审客户问题，老师只出马成交最后 10% 最优质的高客单",
    ],
    deliverable: "《自动化商业变现漏斗、支付履约中心与私域 CRM 资产》",
  },
  {
    step: "06",
    phase: "企业级部署与运维安全层",
    englishPhase: "Enterprise Cloud & Security Architecture",
    badge: "永续护航",
    title: "独立私有化部署与知识资产确权",
    subtitle: "知识库代码完全私有，绑定老师独立域名，安全防攻击、防泄密，陪伴老师基业长青。",
    workModules: [
      {
        name: "独立域名与品牌私有化 (White-Label Deployment)",
        description: "绑定老师独立域名（如 mastername.com），品牌 Logo 与版权全归老师独享。",
        techTags: ["独立域名与 SSL", "全白标定制", "全球 CDN 加速"],
      },
      {
        name: "核心数据加密与防盗刷 (IP & Rate Limit Security)",
        description: "接口防抓包、反爬虫防护、用户并发频率控制与敏感数据不可逆加密。",
        techTags: ["防爬虫安全机制", "API 速率限制", "数据防泄漏加密"],
      },
      {
        name: "持续演进与增量学习系统 (Continuous Learning Loop)",
        description: "后台记录客户高频提问与老师最新实战案例，知识库每月增量更新，系统越用越准。",
        techTags: ["增量知识注入", "模型回测微调", "持续运维技术支持"],
      },
    ],
    complexityHighlights: [
      "老师拥有 100% 知识产权与数据所有权，不依附于任何第三方平台的封号风险",
      "企业级高可用弹性架构，从容应对几万人同时涌入的爆款测算流量",
    ],
    deliverable: "《独立私有云平台、知识产权确权文档与长期运维支持保障》",
  },
];
