import type { Locale, ProfileContent } from '../types/profile'

export const profileContent: Record<Locale, ProfileContent> = {
  zh: {
    meta: {
      documentTitle: '贾博深 | AI 产品经理个人品牌门户',
      siteTitle: 'Jia Boshen',
      menuOpen: '菜单',
      menuClose: '关闭',
      localeToggle: 'EN',
      localeAriaLabel: '切换到英文',
    },
    nav: [
      { label: '关于我', href: '#hero' },
      { label: '岗位匹配', href: '#fit' },
      { label: '实习项目', href: '#experience' },
      { label: 'AI 构建过程', href: '#process' },
      { label: '教育与奖项', href: '#education' },
      { label: '能力矩阵', href: '#skills' },
      { label: '联系我', href: '#contact' },
    ],
    hero: {
      eyebrow: 'Inspire 2026 AI 产品经理挑战',
      name: '贾博深',
      role: 'AI 产品经理候选人',
      tagline:
        '聚焦 AI 产品落地，我能够把需求拆解、Prompt 迭代与效果评测串成可交付的产品闭环。',
      location: '宁夏理工学院 · 软件工程（东北大学联合培养）',
      ctaPrimary: '查看实习成果',
      ctaSecondary: '查看 AI 构建过程',
      panelTitle: '我能带来的可量化结果',
      focusPoints: [
        '把复杂 AI 能力翻译为业务可理解、工程可执行的产品方案。',
        '围绕成本、效果、效率建立指标体系，快速做出 MVP 取舍。',
        '跨 PM / 研发协作推进交付，兼顾产品体验与上线效率。',
      ],
      heroStats: ['GPA 4.0（前 3%）', '国家奖学金 x2', '40+ 奖项与竞赛经历'],
    },
    fit: {
      header: {
        title: '我与岗位的匹配度',
        subtitle:
          '围绕岗位考核的三个核心维度：AI 辅助能力、产品思维与审美、快速迭代能力。',
      },
      items: [
        {
          title: 'AI 辅助执行力',
          detail:
            '熟练使用 Cursor、Codex、Claude Code 等 AI 工具，通过明确 Prompt 驱动产品构建和验证。',
        },
        {
          title: '产品思维与体验审美',
          detail:
            '从用户场景、信息架构到交互细节统一考虑，确保页面逻辑清晰且体验顺畅。',
        },
        {
          title: 'MVP 快速迭代能力',
          detail:
            '持续采用 MVP -> V1 -> V2 迭代方式，以数据反馈驱动方案优化并快速稳定上线。',
        },
      ],
    },
    experiences: {
      header: {
        title: '实习经历与关键成果',
        subtitle: '围绕“AI 产品落地”和“结果导向”展开，突出量化数据与业务价值。',
      },
      items: [
        {
          company: '北京智谱华章科技股份有限公司',
          role: 'PE（AI 产品经理方向）',
          period: '2025.11 - 2026.02',
          background:
            '参与多模态 Agent 商业化交付，支持 5 个头部互联网客户项目。',
          highlights: [
            '负责 OpenClaw 与 Claude Skill 场景验证，沉淀可复用 skill 模板和评测框架。',
            '重构“日报 Agent”架构，采用主分 Agent 并行处理替代串行逻辑，显著降低长文处理消耗。',
            '基于 GLM4.5V 设计“ASR + 时间切片采样”视频拆条流程，经过 8 轮 Prompt 迭代降低复杂场景幻觉。',
            '使用 LangChain 搭建图文自动生成工作流，在保证质量前提下优化模型与 Prompt 组合。',
          ],
          metrics: ['Token 消耗 -61%', '链路成本 -34%', '服务 5 个头部客户项目'],
        },
        {
          company: '北京华顺信安科技有限公司',
          role: '产品经理',
          period: '2025.08 - 2025.11',
          background:
            '服务 FOBrain 网络资产攻击面管理平台，负责漏洞管理与域名管理核心模块。',
          highlights: [
            '主导域名管理模块从输入、处理到输出全流程设计并撰写 PRD。',
            '重构漏洞管理信息架构与交互流程，细化漏洞类型与状态。',
            '组织 30+ 次问题修复和迭代，推动用户反馈快速闭环。',
            '组织 5 场 Cursor 实战培训，提升团队需求文档与方案输出效率。',
          ],
          metrics: ['管理企业域名资产 40 万+', '核心功能使用率 +10%', '用户满意度 +15%'],
        },
        {
          company: '河南垒鼓喧文化传媒有限公司',
          role: '产品经理助理',
          period: '2025.04 - 2025.06',
          background:
            '深度参与“创客”小程序迭代，独立负责“选题推荐”模块完整上线流程。',
          highlights: [
            '执行 20+ 场深度访谈并设计发放 500+ 份有效问卷，使用 Kano 模型排序需求优先级。',
            '参与 PRD 撰写并使用 Axure 输出高保真交互原型，推动研发协作与如期上线。',
            '持续跟踪竞品与行业趋势，输出周期性分析报告支撑版本决策。',
          ],
          metrics: ['20+ 用户深访', '500+ 有效问卷', '核心模块按期上线'],
        },
      ],
    },
    process: {
      header: {
        title: 'AI Build Process',
        subtitle:
          '将“Prompt 驱动开发”显式化，展示我如何从想法到可运行页面快速迭代。',
      },
      intro:
        '本页面通过 AI 辅助方式完成，从结构定义到视觉打磨均采用“先可用、再可感知、再可讲述”的三阶段迭代。',
      steps: [
        {
          phase: 'MVP · 信息骨架',
          goal: '在最短时间搭建可浏览页面，确保核心信息完整可读。',
          promptStrategy:
            '先明确固定模块与数据结构，再要求 AI 生成 React 组件骨架和双语内容承载模型。',
          result: '完成单页可用版本，打通导航、锚点、核心文案。',
        },
        {
          phase: 'V1 · 结构与叙事',
          goal: '强化岗位匹配表达，突出 AI 产品落地成果。',
          promptStrategy:
            '围绕“岗位考点 -> 简历证据 -> 页面模块”反向约束文案和信息层级。',
          result: '形成 Why Me、Experience、Process 三段式主叙事，量化指标可快速抓取。',
        },
        {
          phase: 'V2 · 体验与审美',
          goal: '提升视觉完成度与交互流畅度，兼顾性能与可访问性。',
          promptStrategy:
            '增加渐变背景、滚动动效、卡片微交互，并加入 reduced-motion 兼容策略。',
          result: '获得更强展示质感与可感知“产品判断力”的最终版本。',
        },
      ],
    },
    education: {
      header: {
        title: '教育经历与校园实践',
        subtitle: '计算机基础 + 开源社区协作，为 AI 产品实践提供坚实底层能力。',
      },
      details: {
        school: '宁夏理工学院 · 计算机学院',
        major: '软件工程（东北大学联合培养）',
        period: '2022.09 - 2026.06',
        gpa: 'GPA 4.0（前 3%）',
        honors: [
          '国家奖学金（2024、2025）',
          'APMCM 数学建模大赛三等奖',
          '累计获得 40 余项奖项与荣誉',
        ],
        campus: [
          'Linux 用户组初创成员，长期参与 CS 课程学习与分享。',
          '协办安同开源社区、RISC-V、华为 HSD 校园行等活动。',
          '持续输出 Agent 与产品实践复盘，小红书账号累计点赞 1000+。',
        ],
      },
    },
    skills: {
      header: {
        title: '能力矩阵',
        subtitle:
          '产品、AI、数据与工程协作能力并重，能够从业务到实现形成闭环推动。',
      },
      groups: [
        {
          title: 'Product',
          items: ['PRD 撰写', '需求拆解', 'Axure 10', 'Figma', 'Kano 分析', '竞品分析'],
        },
        {
          title: 'AI & Agent',
          items: [
            'OpenClaw',
            'Claude Skills',
            'MCP',
            'Coze',
            'Dify',
            'LangChain',
            'Prompt 迭代',
          ],
        },
        {
          title: 'Data & Engineering',
          items: ['SQL', 'Python', 'Java', '实验评测设计', '流程自动化'],
        },
        {
          title: 'Collaboration',
          items: ['Cursor', 'Codex', 'Claude Code', '跨团队沟通', '项目推进与复盘'],
        },
      ],
    },
    contact: {
      header: {
        title: '期待共同打造下一代 AI 产品',
        subtitle: '感谢阅读，期待在下一轮面试中进一步展示我的产品判断和执行能力。',
      },
      cta: '如果你希望我现场演示 Prompt 到原型的迭代过程，我可以在面试中实时完成。',
      detail: {
        phone: '+86 183-3987-1162',
        email: '1938921378@qq.com',
        githubLabel: 'GitHub（HellowJasper）',
        githubUrl: 'https://github.com/HellowJasper',
        availability: '可在 48 小时内完成额外作业迭代与更新。',
      },
    },
    footerNote: '基于 React + Vite 构建 | Inspire 2026 AI PM 挑战作品',
  },
  en: {
    meta: {
      documentTitle: 'Jia Boshen | AI Product Manager Portfolio',
      siteTitle: 'Jia Boshen',
      menuOpen: 'Menu',
      menuClose: 'Close',
      localeToggle: '中',
      localeAriaLabel: 'Switch to Chinese',
    },
    nav: [
      { label: 'About', href: '#hero' },
      { label: 'Role Fit', href: '#fit' },
      { label: 'Experience', href: '#experience' },
      { label: 'AI Build Process', href: '#process' },
      { label: 'Education', href: '#education' },
      { label: 'Skills', href: '#skills' },
      { label: 'Contact', href: '#contact' },
    ],
    hero: {
      eyebrow: 'Inspire 2026 AI Product Manager Challenge',
      name: 'Jia Boshen',
      role: 'AI Product Manager Candidate',
      tagline:
        'I turn AI capabilities into deliverable products by connecting requirement breakdown, prompt iteration, and measurable evaluation.',
      location:
        'Ningxia Institute of Science and Technology · Software Engineering (Joint Program with Northeastern University)',
      ctaPrimary: 'View Internship Results',
      ctaSecondary: 'See AI Build Process',
      panelTitle: 'Quantifiable outcomes I can deliver',
      focusPoints: [
        'Translate complex AI capability into business-ready and engineering-ready product plans.',
        'Drive MVP prioritization through cost, quality, and efficiency metrics.',
        'Collaborate across PM and engineering to speed up delivery without sacrificing UX.',
      ],
      heroStats: ['GPA 4.0 (Top 3%)', 'National Scholarship x2', '40+ awards and honors'],
    },
    fit: {
      header: {
        title: 'Why Me for Inspire',
        subtitle:
          'Aligned with three key evaluation dimensions: AI-assisted execution, product thinking, and rapid iteration.',
      },
      items: [
        {
          title: 'AI-Assisted Execution',
          detail:
            'Hands-on with Cursor, Codex, and Claude Code. I use precise prompts to transform ideas into working interfaces quickly.',
        },
        {
          title: 'Product Thinking + UX Taste',
          detail:
            'I design from user scenario to information architecture and interaction details to keep products clear and intuitive.',
        },
        {
          title: 'Fast Iteration from MVP',
          detail:
            'I run an MVP -> V1 -> V2 loop with measurable feedback, improving both product quality and delivery speed.',
        },
      ],
    },
    experiences: {
      header: {
        title: 'Internships and Impact',
        subtitle:
          'Focused on AI product implementation and measurable business value across multiple teams and projects.',
      },
      items: [
        {
          company: 'Beijing Zhipu Huazhang Technology Co., Ltd.',
          role: 'PE (AI Product Management Track)',
          period: 'Nov 2025 - Feb 2026',
          background:
            'Contributed to multimodal agent commercialization and supported five top-tier internet client projects.',
          highlights: [
            'Validated OpenClaw and Claude Skill in real business scenarios and built reusable templates and evaluation criteria.',
            'Redesigned the Daily Report Agent into a multi-agent parallel workflow to replace heavy serial processing.',
            'Built a GLM4.5V video clipping workflow with ASR + time-slice sampling and reduced hallucinations through eight prompt iterations.',
            'Implemented an auto content generation pipeline via LangChain with optimized model and prompt strategy.',
          ],
          metrics: ['Token consumption -61%', 'Workflow cost -34%', 'Supported 5 key client projects'],
        },
        {
          company: 'Beijing Huashun XinAn Technology Co., Ltd.',
          role: 'Product Manager',
          period: 'Aug 2025 - Nov 2025',
          background:
            'Improved FOBrain attack surface management platform, covering domain and vulnerability core modules.',
          highlights: [
            'Designed domain management end-to-end flow and delivered full PRD documentation.',
            'Refactored vulnerability module IA and interaction by redefining vulnerability types and statuses.',
            'Led 30+ bug fixes and quick iteration cycles based on customer feedback.',
            'Organized five Cursor training sessions to improve team output efficiency and spec quality.',
          ],
          metrics: ['Managed 400k+ domain assets', 'Core feature usage +10%', 'User satisfaction +15%'],
        },
        {
          company: 'Henan Leiguxuan Cultural Media Co., Ltd.',
          role: 'Assistant Product Manager',
          period: 'Apr 2025 - Jun 2025',
          background:
            'Participated in mini-program iteration and owned the topic recommendation module end-to-end.',
          highlights: [
            'Conducted 20+ in-depth interviews and delivered 500+ valid questionnaires, then prioritized needs via Kano model.',
            'Co-wrote PRD and produced high-fidelity Axure prototypes to align engineering delivery.',
            'Tracked competitors and industry trends through regular analysis reports for roadmap decisions.',
          ],
          metrics: ['20+ user interviews', '500+ valid surveys', 'On-time module launch'],
        },
      ],
    },
    process: {
      header: {
        title: 'AI Build Process',
        subtitle:
          'A transparent prompt-driven workflow showing how I iterate from concept to a polished portfolio site.',
      },
      intro:
        'This site was built with AI assistance in three phases: make it work first, make it feel clear next, then make it interview-ready.',
      steps: [
        {
          phase: 'MVP · Core Structure',
          goal: 'Build a usable page quickly with complete core information.',
          promptStrategy:
            'Defined fixed modules and typed data schema first, then generated React component skeletons and bilingual support.',
          result: 'Delivered a working single-page version with navigation, anchors, and complete key content.',
        },
        {
          phase: 'V1 · Narrative Alignment',
          goal: 'Strengthen role-fit storytelling around AI product delivery.',
          promptStrategy:
            'Mapped role requirements to resume evidence, then constrained copy and hierarchy based on that map.',
          result: 'Formed a clear three-part narrative: Why Me, Experience, and AI Process with visible metrics.',
        },
        {
          phase: 'V2 · UX and Aesthetics',
          goal: 'Improve visual quality and interaction smoothness while keeping accessibility.',
          promptStrategy:
            'Added animated gradient background, reveal transitions, hover micro-interactions, and reduced-motion fallback.',
          result: 'Final version demonstrates both execution speed and product judgment quality.',
        },
      ],
    },
    education: {
      header: {
        title: 'Education and Campus Practice',
        subtitle:
          'Technical foundation plus open-source community participation, supporting strong AI product execution.',
      },
      details: {
        school: 'Ningxia Institute of Science and Technology, School of Computer Science',
        major: 'Software Engineering (Joint Program with Northeastern University)',
        period: 'Sep 2022 - Jun 2026',
        gpa: 'GPA 4.0 (Top 3%)',
        honors: [
          'National Scholarship (2024, 2025)',
          'Third Prize, APMCM Mathematical Modeling Competition',
          '40+ total awards and recognitions',
        ],
        campus: [
          'Founding member of Linux User Group and active participant in CS learning communities.',
          'Co-organized open-source and campus tech events including Antong community, RISC-V, and Huawei HSD.',
          'Continuously shared Agent and product retrospectives, with 1000+ likes on Xiaohongshu content.',
        ],
      },
    },
    skills: {
      header: {
        title: 'Skill Matrix',
        subtitle:
          'Balanced strength in product, AI, data, and engineering collaboration to drive ideas into delivered results.',
      },
      groups: [
        {
          title: 'Product',
          items: ['PRD writing', 'Requirement breakdown', 'Axure 10', 'Figma', 'Kano analysis', 'Competitor analysis'],
        },
        {
          title: 'AI & Agent',
          items: [
            'OpenClaw',
            'Claude Skills',
            'MCP',
            'Coze',
            'Dify',
            'LangChain',
            'Prompt iteration',
          ],
        },
        {
          title: 'Data & Engineering',
          items: ['SQL', 'Python', 'Java', 'Evaluation design', 'Workflow automation'],
        },
        {
          title: 'Collaboration',
          items: ['Cursor', 'Codex', 'Claude Code', 'Cross-team communication', 'Project delivery and retrospectives'],
        },
      ],
    },
    contact: {
      header: {
        title: 'Let us build the next AI product together',
        subtitle:
          'Thanks for reading. I would love to show my product judgment and execution depth in the next interview round.',
      },
      cta: 'I can also live-demo a prompt-to-prototype workflow during the interview.',
      detail: {
        phone: '+86 183-3987-1162',
        email: '1938921378@qq.com',
        githubLabel: 'GitHub (HellowJasper)',
        githubUrl: 'https://github.com/HellowJasper',
        availability: 'Available for additional assignment iteration within 48 hours.',
      },
    },
    footerNote: 'Built with React + Vite | Designed for the Inspire 2026 AI PM Challenge',
  },
}
