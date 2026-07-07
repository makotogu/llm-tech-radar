# LLM Tech Radar

这个仓库用于按时间节点追踪 LLM 热点技术，目标是把“看到热点”变成“理解脉络、验证价值、形成实践能力”。

首批追踪主线：

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
├── timeline/        # 月度技术雷达和重大事件
├── topics/          # 技术专题：定义、资料、场景、后续追踪
├── sources/         # 一手资料索引：论文、官方文档、开源项目、发布记录
├── scenarios/       # 实践场景：目标、流程、输入输出、验收方式
├── labs/            # 后续可运行实验、demo、评测脚本
└── templates/       # 月度快照、专题、资料卡片、场景模板
```

## 推荐阅读路径

1. 先读 [timeline/2026-07.md](timeline/2026-07.md)，建立当前技术雷达视图。
2. 按自己的工作场景选择一个专题，例如先读 Prompt 工程或 Context 工程。
3. 到 [sources/README.md](sources/README.md) 查看对应一手资料。
4. 到 [scenarios/README.md](scenarios/README.md) 选择一个实践场景，把理解落到流程、输入输出和验收标准。
5. 后续在 `labs/` 中补充可运行实验。

## 更新规则

- 默认每月新增一个 `timeline/YYYY-MM.md`。
- 重大事件可以先进入当月文件的“事件记录”，月底再沉淀判断。
- 所有资料优先记录一手来源：论文、官方文档、官方工程博客、项目仓库、产品发布记录。
- 每条资料必须说明“为什么重要”，避免只堆链接。
- 每个专题只保留长期有效的结构性内容，短期热点放在时间线中。

## 资料可信度分层

| 等级 | 来源类型 | 用法 |
| --- | --- | --- |
| A | 论文、官方文档、官方规范、项目仓库 | 可作为技术定义和实践依据 |
| B | 厂商工程博客、维护者文章、会议演讲 | 可作为趋势判断和工程经验 |
| C | 社区文章、媒体报道、二手总结 | 只作为线索，需要回到 A/B 来源核验 |

## 当前默认

- 语言：中文为主，保留常见英文技术名词。
- 节奏：月度快照。
- 形态：研究资料 + 工程实践。
- 首版重点：结构、资料索引、实践场景，`labs/` 后续逐步加入可运行实验。
