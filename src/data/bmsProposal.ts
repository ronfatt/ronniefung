export interface BMSFeature {
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface BMSArchitectureRole {
  role: string;
  title: string;
  badge: string;
  highlights: string[];
}

export interface BMSPhase {
  phase: string;
  title: string;
  scope: string;
}

export const bmsProposalData = {
  header: {
    badge: "PLATFORM CONCEPT PROPOSAL · 商业落地案",
    title: "BMS · 身心灵导师聚合平台",
    coreStatement: "将不同导师的专业，连接成一条完整的用户旅程。",
    subStatement: "从「不知道找谁」，到「清晰知道下一步怎么走」。",
    summary:
      "BMS 汇聚约 8–10 位来自命理、心灵成长、塔罗与能量实践等不同领域的导师。我为 BMS 提出的战略方向：不做冰冷的黄页目录，而是建立一个以用户真实需求为入口、导师专业体验化、三端闭环运转的商业级身心灵聚合生态平台。",
  },

  // 4 Core Value Pillars
  pillars: [
    {
      id: "01",
      title: "从用户的真实困扰开始",
      tag: "用户入口重塑",
      desc: "用户未必了解流派理论，但深知自己的痛点。平台以关系困扰、方向迷茫、情绪内耗为入口，经由轻量自测与反思练习，厘清当下焦点再匹配导师。",
      metric: "直击痛点 · 降维认知门槛",
    },
    {
      id: "02",
      title: "让专业成为可以体验的内容",
      tag: "知识产品化",
      desc: "把老师深奥的理论转化为轻量体验：自测问答 · 主题反思卡 · 引导冥想音频 · 入门课程 · 线上工作坊。用户先尝到甜头，自然向往深度个案服务。",
      metric: "体验建立信任 · 高效转化",
    },
    {
      id: "03",
      title: "让推荐有依据，预约更顺畅",
      tag: "智能匹配与履约",
      desc: "按用户诉求、交流偏好、语言时区智能匹配，并透明告知「为何推荐这位老师」。统一主页呈现资质背景、服务流程、公开定价与可用日历，消除顾虑。",
      metric: "决策透明 · 极速成单",
    },
    {
      id: "04",
      title: "具备持续运营的三端闭环",
      tag: "商业飞轮",
      desc: "用户端自测预约、导师端排班履约、BMS 平台端统揽内容抽成与品控。沉淀私域用户资产与测试数据，构建 ChatGPT 无法复刻的壁垒生态。",
      metric: "资产沉淀 · 自主商业变现",
    },
  ],

  // Tripartite System Roles (三端业务闭环)
  roles: [
    {
      role: "CLIENT SIDE",
      title: "用户端 · 探索与成长",
      badge: "轻量入口 · 信任达成",
      items: [
        "困扰与需求自测诊断",
        "轻量互动体验（反思卡/冥想）",
        "透明化导师推荐与对比",
        "无缝日历预约与安全支付",
        "个人咨询档案与成长足迹",
      ],
    },
    {
      role: "MENTOR PORTAL",
      title: "导师端 · 专业与履约",
      badge: "降本增效 · 专注服务",
      items: [
        "专业资质与理论流派展示",
        "服务项目与课程定价管理",
        "智能可用时间排班与日历同步",
        "个案咨询订单与用户画像前置",
        "自动化服务交付与收入对账",
      ],
    },
    {
      role: "BMS HQ SYSTEM",
      title: "BMS 平台端 · 运营与资产",
      badge: "品牌壁垒 · 商业分账",
      items: [
        "8-10 位入驻导师统一品控审核",
        "内容库与全域体验工具资产管理",
        "平台级佣金分账与财务结算",
        "用户需求大数据与热点趋势看板",
        "统一沉淀 BMS 私域品牌资产",
      ],
    },
  ],

  // Ronnie's Planning & Architecture Role
  ronnieRole: [
    { step: "01", name: "品牌定位与服务整合", desc: "提炼 BMS 聚合平台心智与统一调性" },
    { step: "02", name: "用户旅程全局设计", desc: "规划从困惑入口到深度复购全链路" },
    { step: "03", name: "导师知识结构化", desc: "把 8-10 位老师经验提炼为标准模块" },
    { step: "04", name: "互动体验数字化", desc: "设计自测、反思卡、轻量工具原型" },
    { step: "05", name: "三端系统工程架构", desc: "设计用户/导师/管理端高可用架构" },
    { step: "06", name: "上线与商业变现规划", desc: "制定 MVP 分步落地与运营推广方案" },
  ],

  // 3-Stage Phased Roadmap (落地路径)
  roadmap: [
    {
      phase: "PHASE 01",
      title: "需求入口 + 导师展示 + 预约闭环",
      desc: "迅速上线核心 MVP：建立需求诊断器、8-10 位导师标准化档案页、日历排班与支付闭环，首跑验证商业模式。",
    },
    {
      phase: "PHASE 02",
      title: "扩展互动体验 + 课程工作坊",
      desc: "上线主题反思卡、引导冥想音频工具库、小班工作坊与联名活动，大幅提升平台停留时间与自裂变引流。",
    },
    {
      phase: "PHASE 03",
      title: "会员订阅体系 + 持续陪伴生态",
      desc: "根据真实用户数据与复购偏好，推出年度心力成长会员、AI 随身导师伴学与线下高端私享圈。",
    },
  ],

  closingTakeaway:
    "“从品牌如何被理解，到用户如何进入、体验与预约，再到导师与团队如何高效履约——我为 BMS 打造的不是一份纸上构想，而是一套可以直接落地、持续盈利的商业平台级系统。”",
};
