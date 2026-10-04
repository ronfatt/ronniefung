export interface ComparisonDimension {
  id: string;
  number: string;
  title: string;
  tagline: string;
  genericAI: {
    label: string;
    points: string[];
    summary: string;
  };
  customPlatform: {
    label: string;
    points: string[];
    summary: string;
  };
}

export const whyNotChatGPTData = {
  sectionBadge: "THE CORE DISTINCTION · 关键差异",
  mainHeading: "为什么不是直接用 ChatGPT？",
  subHeading: "通用型 AI vs 老师专属知识系统",
  leadParagraph:
    "现在很多人习惯把八字、命盘、姓名、数字或风水问题直接丢进 ChatGPT、Gemini、DeepSeek 或豆包。它们确实很方便，但它们本质上是“什么都懂一点”的通用型 AI。而我做的，是为某一位老师、某一套理论体系、某一种闭环服务流程量身打造的专业系统。",
  
  dimensions: [
    {
      id: "source",
      number: "01",
      title: "知识来源与流派纯正度",
      tagline: "网络碎片杂烩 vs 老师独家研判体系",
      genericAI: {
        label: "通用 AI (ChatGPT / DeepSeek)",
        points: [
          "基于全网抓取的公开泛知识，流派混杂冲突",
          "同一命盘换个提示词，可能引用截然相反的典籍论点",
          "“听起来头头是道”，但充斥术语拼凑与逻辑幻觉",
        ],
        summary: "它回答的是“全网通常怎么说”，无法代表老师的独门心法。",
      },
      customPlatform: {
        label: "老师专属系统 (Custom Metaphysics Platform)",
        points: [
          "锁死在老师数十年的经典实战案例与授课讲义",
          "严谨梳理出老师认可的生克制化与流派规则树",
          "构建私有高维向量库，输出必有文献典籍与实战出处",
        ],
        summary: "系统回答的永远是：“这位老师在实战中会怎么研判”。",
      },
    },
    {
      id: "architecture",
      number: "02",
      title: "运行机制：Prompt 聊天 vs 系统工程",
      tagline: "单次即兴聊天 vs 9层闭环工程架构",
      genericAI: {
        label: "通用 AI (ChatGPT / DeepSeek)",
        points: [
          "极简链路：用户输入问题 → AI 单次即兴补全回答",
          "纯依赖提示词工程（Prompt），无法进行复杂天文时间数学计算",
          "缺乏时空节气换算，八字排盘经常出现错干支、错节气的硬伤",
        ],
        summary: "停留在“问答闲聊”，无法承担严谨的命理测算任务。",
      },
      customPlatform: {
        label: "老师专属系统 (Custom Metaphysics Platform)",
        points: [
          "确定性算力：天文真太阳时换算与节气秒级排盘纯代码引擎",
          "多智能体流水线：排盘引擎 → 规则决策树 → 向量检索 → 报告渲染",
          "AI 只是其中的转译层，前后由严密的算法和产品逻辑护航",
        ],
        summary: "真正重要的是：AI 前面的数学规则，和 AI 后面的产品逻辑。",
      },
    },
    {
      id: "consistency",
      number: "03",
      title: "结果稳定性与信任度",
      tagline: "随机不确定性 vs 可重复、可解释、可追踪",
      genericAI: {
        label: "通用 AI (ChatGPT / DeepSeek)",
        points: [
          "同一位用户今天问和明天换种问法问，给出的结论可能大相径庭",
          "大模型的内在概率采样机制导致结论存在随机漂移",
          "对于严肃的人生决策与命理咨询，结果不一致直接摧毁用户信任",
        ],
        summary: "聊天娱乐无所谓，但商业测算绝不能把不确定性给客户。",
      },
      customPlatform: {
        label: "老师专属系统 (Custom Metaphysics Platform)",
        points: [
          "固定排盘算法、固定判定条件、固定分析权重层级",
          "严苛的防幻觉对齐引擎与交叉重排溯源校验",
          "同一生辰或问题无论何时输入，均保证核心断语的逻辑一致",
        ],
        summary: "赋予结果最高标准的：可重复性、可解释性与可追踪性。",
      },
    },
    {
      id: "journey",
      number: "04",
      title: "商业深度：单句回答 vs 咨询履约全旅程",
      tagline: "聊天机器人 vs 数字化客户旅程 (Digital Consultation Journey)",
      genericAI: {
        label: "通用 AI (ChatGPT / DeepSeek)",
        points: [
          "停留在单薄断语：“你的命盘显示你个性比较敏感……”",
          "对话结束即流失，没有任何客户沉淀与商业转化动作",
          "无法自动生成数十页可印刷级别的图文 PDF 全书报告",
        ],
        summary: "只是一个孤立的回答工具，无法为老师创造商业流水。",
      },
      customPlatform: {
        label: "老师专属系统 (Custom Metaphysics Platform)",
        points: [
          "测算分析 → 痛点诊断 → 自动沉淀客户 CRM 生辰画像",
          "秒级出具图文并茂的 30+ 页专属运势战略报告",
          "动态付费漏斗：免费轻测 → 99元解锁 → 自动化引流到老师 1对1 咨询",
        ],
        summary: "不是聊天机器人，而是一整套 24 小时自动收款与履约的商业系统。",
      },
    },
    {
      id: "assets",
      number: "05",
      title: "资产归属与品牌护城河",
      tagline: "替别人做嫁衣 vs 沉淀老师自己的独门数字资产",
      genericAI: {
        label: "通用 AI (ChatGPT / DeepSeek)",
        points: [
          "如果只是叫学员去用 ChatGPT，最终培养的是 ChatGPT 的使用习惯",
          "老师的理论与客户数据完全暴露在第三方平台，存在封号断联风险",
          "没有沉淀任何属于老师自己的私域用户池与技术资产",
        ],
        summary: "替平台贡献了数据与流量，自己却什么都没留下来。",
      },
      customPlatform: {
        label: "老师专属系统 (Custom Metaphysics Platform)",
        points: [
          "绑定老师独立域名，全白标定制，100% 拥有知识产权与数据归属",
          "每一次测算、报告、案例与学员互动，都化作私域数据与模型资产",
          "未来可持续训练升级出真正的“老师数字孪生 AI 分身”",
        ],
        summary: "从单个老师的脑力体力劳动，沉淀为生生不息的百年数字资产。",
      },
    },
  ] as ComparisonDimension[],

  keyContrast: {
    title: "最本质的语言对比",
    genericExample: "“八字一般可以这样理解：你的五行缺水，今年运势可能会有一些变动……”",
    customExample: "“根据老师的独家理论体系、你的完整排盘与历史记录，结合当前时空大运，你当下最核心需要聚焦的是这 3 个战略突破口……”",
    tagline: "这就是【泛泛的 AI 回答】与【专属的 AI 商业系统】之间的鸿沟。",
  },

  oneLineSummary: {
    part1: "ChatGPT 是一个聪明的通用助手。",
    part2: "我为你做的是一个可以真正经营、累积、优化和商业化的专业平台。",
  },

  finalVision: {
    line1: "未来不是比谁会不会用 ChatGPT，",
    line2: "而是谁能够把自己的知识，做成 ChatGPT 无法替代的系统。",
  },
};
