# 资料索引

记录规则：优先一手来源；每条资料记录类型、发布时间、链接、重要性和适合阶段。核验日期为 2026-07-07。

## 官方文档

| 主题 | 资料 | 类型 | 发布时间 | 链接 | 为什么重要 | 阶段 |
| --- | --- | --- | --- | --- | --- | --- |
| Prompt 工程 | OpenAI Prompt engineering | 官方文档 | 持续更新 | https://developers.openai.com/api/docs/guides/prompt-engineering | OpenAI 对提示词结构、指令、示例和模型行为调优的官方入口 | 入门到进阶 |
| Prompt 工程 | Anthropic Prompt engineering overview | 官方文档 | 持续更新 | https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview | 从 Claude 生态补充提示词设计、评测和迭代视角 | 入门到进阶 |
| Context 工程 | OpenAI Compaction | 官方文档 | 持续更新 | https://developers.openai.com/api/docs/guides/compaction | 上下文窗口有限时，理解压缩和保留策略的入口 | 进阶 |
| Context 工程 | OpenAI Prompt caching | 官方文档 | 持续更新 | https://developers.openai.com/api/docs/guides/prompt-caching | 长上下文和重复上下文的成本、延迟优化参考 | 进阶 |
| MCP + Skill | Model Context Protocol introduction | 官方规范文档 | 持续更新 | https://modelcontextprotocol.io/docs/getting-started/intro | MCP 的概念、架构和客户端/服务器模型的官方入口 | 入门 |
| MCP + Skill | OpenAI MCP and Connectors | 官方文档 | 持续更新 | https://developers.openai.com/api/docs/guides/tools-connectors-mcp | 理解 OpenAI 生态中如何接入 MCP 工具和连接器 | 进阶 |
| MCP + Skill | OpenAI Skills | 官方文档 | 持续更新 | https://developers.openai.com/api/docs/guides/tools-skills | 理解可复用技能包如何封装流程、工具和知识 | 进阶 |
| Agent 工程 | OpenAI Agents SDK | 官方文档 | 持续更新 | https://openai.github.io/openai-agents-python/ | Agent 定义、运行、编排、guardrails 和 observability 的工程入口 | 进阶 |
| Agent 工程 | OpenAI Using tools | 官方文档 | 持续更新 | https://developers.openai.com/api/docs/guides/tools | Agent 调用外部能力的基础接口和设计约束 | 入门到进阶 |
| Harness 工程 | OpenAI Evals | 官方文档 | 持续更新 | https://developers.openai.com/api/docs/guides/evals | 建立评测、grader、回归和实验比较的官方入口 | 进阶 |

## 论文

| 主题 | 资料 | 类型 | 发布时间 | 链接 | 为什么重要 | 阶段 |
| --- | --- | --- | --- | --- | --- | --- |
| Context 工程 | Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks | 论文 | 2020-05-22 | https://arxiv.org/abs/2005.11401 | RAG 方向的基础论文之一，是理解检索增强上下文的起点 | 入门到进阶 |
| Agent 工程 | ReAct: Synergizing Reasoning and Acting in Language Models | 论文 | 2022-10-06 | https://arxiv.org/abs/2210.03629 | 把 reasoning trace 与 action 交错，是很多 Agent 工作流的思想源头 | 进阶 |
| Loop 工程 | Reflexion: Language Agents with Verbal Reinforcement Learning | 论文 | 2023-03-20 | https://arxiv.org/abs/2303.11366 | 通过语言反馈和 episodic memory 改善后续尝试，是 Agent 自我改进循环的代表 | 进阶 |
| Loop 工程 | Self-Refine: Iterative Refinement with Self-Feedback | 论文 | 2023-03-30 | https://arxiv.org/abs/2303.17651 | 用生成、反馈、精修三段式表达测试时迭代改进 | 进阶 |
| Harness/Loop 工程 | DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines | 论文 | 2023-10-05 | https://arxiv.org/abs/2310.03714 | 将 LM pipeline、指标和优化连接起来，是从手写 prompt 走向可优化系统的重要资料 | 进阶 |

## 开源项目

| 主题 | 项目 | 类型 | 链接 | 为什么重要 | 阶段 |
| --- | --- | --- | --- | --- | --- |
| MCP + Skill | Model Context Protocol GitHub organization | 开源组织 | https://github.com/modelcontextprotocol | MCP 规范、SDK 和示例实现的主要代码入口 | 入门到进阶 |
| Harness 工程 | OpenAI Evals | 开源项目 | https://github.com/openai/evals | LLM 和 LLM 系统评测框架与 benchmark registry | 进阶 |
| Harness/Loop 工程 | DSPy | 开源项目 | https://github.com/stanfordnlp/dspy | 用程序结构和优化器替代脆弱 prompt 模板的代表框架 | 进阶 |

## 待补充

- 重要产品发布：按月记录，不直接混入长期专题。
- 安全资料：尤其是工具调用、MCP 权限、prompt injection、数据泄露。
- 生产案例：优先选择有 trace、指标、架构图或失败复盘的工程文章。
