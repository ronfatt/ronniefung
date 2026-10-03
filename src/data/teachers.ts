export interface TeacherType {
  id: string;
  name: string;
  tagline: string;
  ronnieRole: string;
  iconName: string;
  focusKeywords: string[];
  deliverables: string[];
}

export const teacherTypes: TeacherType[] = [
  {
    id: "mingli",
    name: "命理",
    tagline: "八字 · 紫微 · 占星 · 命运密码",
    ronnieRole: "你负责看懂人的命盘，我负责让更多人看懂你的价值。",
    iconName: "Compass",
    focusKeywords: ["十神逻辑拆解", "命理咨询漏斗", "AI 自动化八字报告", "学员交互测试"],
    deliverables: [
      "复杂命理逻辑转换为可执行算法/Prompt",
      "生成千人千面的专业命理分析报告",
      "打造老师专属的命理知识库与 AI 分身",
    ],
  },
  {
    id: "fengshui",
    name: "风水",
    tagline: "阳宅 · 峦头 · 理气 · 环境布局",
    ronnieRole: "你负责判断空间，我负责把你的判断逻辑，变成用户看得懂的系统。",
    iconName: "Home",
    focusKeywords: ["户型图交互识别", "风水顾问 AI Hub", "企业与居家布局知识库", "视觉化空间报告"],
    deliverables: [
      "风水空间布局判定逻辑梳理",
      "移动端交互式空间风水自测工具",
      "高端企业与私人风水品牌视觉与案例包装",
    ],
  },
  {
    id: "numerology",
    name: "数字学",
    tagline: "生命密码 · 手机号码 · 易经数字 · 能量矩阵",
    ronnieRole: "你负责解读数字能量，我负责把原本模糊的分析，变成更有结构的体验与高转化产品。",
    iconName: "Binary",
    focusKeywords: ["数字排盘自动化", "号码能量评分算法", "数字学品牌化与轻课系统", "珠宝/产品结合"],
    deliverables: [
      "从手工算号到 1 秒即时生成排盘系统",
      "把数字理论落地为实体或衍生产品概念（如当年 VISIBER 模式）",
      "自动化引流测算与裂变 Web App",
    ],
  },
  {
    id: "healing",
    name: "心灵疗愈",
    tagline: "声音 · 颂钵 · 观想 · 潜意识卡牌 · 能量疗愈",
    ronnieRole: "你负责陪伴人的内在，我负责把体验设计成可以持续发生的产品。",
    iconName: "HeartPulse",
    focusKeywords: ["冥想引导流程设计", "OH Card 线上交互", "情绪能量状态评估", "疗愈空间与会员体系"],
    deliverables: [
      "线下疗愈空间概念、音乐与视觉全案策划",
      "潜意识探索卡牌与互动式情绪测评系统",
      "长期陪伴式社群与数字化会员体系",
    ],
  },
  {
    id: "religion",
    name: "宗教文化",
    tagline: "佛教 · 道家 · 经典文献 · 功德建庙 · 传统修持",
    ronnieRole: "你负责守护经典的庄严，我负责用现代品牌与数字叙事让年轻人产生敬意与共鸣。",
    iconName: "Scroll",
    focusKeywords: ["大型项目策划", "寺庙建塔百万筹款", "经典通俗化表达", "青年共鸣传播"],
    deliverables: [
      "尊重传统戒律下的现代品牌化与传播策略",
      "大型公益、筹款与建塔全案内容策划（100万+操盘经验）",
      "庄严且符合当代美学的文化衍生体验",
    ],
  },
  {
    id: "mentor",
    name: "课程导师",
    tagline: "多年讲师 · 私域弟子 · 知识博主 · 培训机构",
    ronnieRole: "你负责输出毕生所学，我负责帮你搭建闭环的内容资产与老师专属 AI 分身。",
    iconName: "GraduationCap",
    focusKeywords: ["知识库 RAG 搭建", "老师 24 小时 AI 分身", "阶梯式课程架构", "咨询成交系统"],
    deliverables: [
      "数十年讲义、录音、案例文档系统化结构整理",
      "训练回答口吻完全匹配老师的个人 AI Agent",
      "从低客单引流到高客单传承弟子的商业转化漏斗",
    ],
  },
];
