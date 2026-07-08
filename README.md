# LLM 知识仓库

这个仓库用于沉淀 LLM 相关知识：接收人提供的新闻建议，发现遗漏的重要线索，核验来源，并把有价值的内容整理成长期可读的资料索引、专题说明、实践场景和实验记录。

仓库不按月报组织，也不追求定期生成趋势总结。时间只作为资料属性保留，核心结构是知识对象和处理流程。

首批沉淀主线：

| 技术节点 | 关注问题 | 入口 |
| --- | --- | --- |
| Prompt 工程 | 如何把任务、约束、示例和评审标准表达清楚 | [topics/prompt-engineering](topics/prompt-engineering/README.md) |
| Context 工程 | 如何选择、组织、压缩和更新模型可见上下文 | [topics/context-engineering](topics/context-engineering/README.md) |
| MCP + Skill | 如何把外部工具、资源和可复用技能接入模型工作流 | [topics/mcp-skill](topics/mcp-skill/README.md) |
| Agent 工程 | 如何构建能规划、调用工具、保存状态和恢复失败的系统 | [topics/agent-engineering](topics/agent-engineering/README.md) |
| Harness 工程 | 如何评测、对比、回归和观察 LLM 系统 | [topics/harness-engineering](topics/harness-engineering/README.md) |
| Loop 工程 | 如何设计执行、反馈、修正、再执行的闭环 | [topics/loop-engineering](topics/loop-engineering/README.md) |

## 仓库结构

```text
.
├── README.md
├── index.html       # GitHub Pages 手机阅读入口
├── assets/          # 页面样式和交互脚本
├── inbox/           # 人工新闻建议收件箱
├── gaps/            # 漏收新闻候选和人工检查清单
├── topics/          # 技术专题：定义、资料、场景、长期判断
├── sources/         # 一手资料索引：论文、官方文档、开源项目、发布记录
├── scenarios/       # 实践场景：目标、流程、输入输出、验收方式
├── labs/            # 后续可运行实验、demo、评测脚本
└── templates/       # 新闻建议、漏收候选、专题、资料卡片、场景模板
```

## 主流程

1. 收到人工新闻建议后，先记录到 [inbox/news-suggestions.md](inbox/news-suggestions.md)。
2. 对建议做来源核验、可信度分层、主题归类和影响判断。
3. 对已确认有价值的线索，至少沉淀到一个知识位置：`sources/README.md`、`topics/*/README.md`、`scenarios/*.md` 或 `labs/`。
4. 发现疑似漏收新闻时，先记录到 [gaps/missed-news.md](gaps/missed-news.md)，只写“候选新闻 + 需要核验的问题”。
5. 漏收候选经过人工核验后，转入新闻建议收件箱或直接沉淀到对应知识位置。

## 推荐阅读路径

1. 在 GitHub Pages 上打开 `index.html`，用手机浏览目录并阅读 Markdown 正文。
2. 到 [sources/README.md](sources/README.md) 查看已经确认的一手资料。
3. 按自己的工作场景选择一个专题，例如先读 Prompt 工程或 Context 工程。
4. 到 [scenarios/README.md](scenarios/README.md) 选择一个实践场景；企业试点先读 [企业级 LLM 实践方案集](scenarios/enterprise-practice-playbook.md)，再进入对应的细分实践文档。
5. 查看 [inbox/news-suggestions.md](inbox/news-suggestions.md) 和 [gaps/missed-news.md](gaps/missed-news.md)，了解仍在处理的人工建议和漏收候选。

## 更新规则

- 人工建议先进入 `inbox/news-suggestions.md`，不直接写入长期专题。
- 新闻建议状态固定为：`待核验`、`已沉淀`、`待补资料`、`暂不收录`、`持续追踪`。
- 所有资料优先记录一手来源：论文、官方文档、官方工程博客、项目仓库、产品发布记录。
- 每条资料必须说明“为什么重要”，避免只堆链接。
- 每条正式沉淀必须至少落到一个知识位置：资料索引、专题、实践场景或实验记录。
- 每个专题只保留长期有效的结构性内容，短期热点和待核验线索留在收件箱。
- 漏收检查采用人工清单，不引入自动抓取脚本；漏收结果只能作为候选线索，不能直接写成结论。
- 不新增月度文件，不维护月报，不把时间线作为主导航。

## 资料可信度分层

| 等级 | 来源类型 | 用法 |
| --- | --- | --- |
| A | 论文、官方文档、官方规范、项目仓库 | 可作为技术定义和实践依据 |
| B | 厂商工程博客、维护者文章、会议演讲 | 可作为趋势判断和工程经验 |
| C | 社区文章、媒体报道、二手总结 | 只作为线索，需要回到 A/B 来源核验 |

## 当前默认

- 语言：中文为主，保留常见英文技术名词。
- 节奏：持续维护，不按月报组织。
- 形态：人工新闻建议 + 来源核验 + 知识沉淀 + 漏收检查。
- 首版重点：结构、资料索引、实践场景，`labs/` 后续逐步加入可运行实验。
