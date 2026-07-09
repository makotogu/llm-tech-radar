# 资料索引

记录规则：优先一手来源；每条资料记录类型、发布时间、链接、重要性、适合阶段，以及对应专题与场景，形成 sources ↔ topics ↔ scenarios 三角索引。最后核验日期：2026-07-09。

高价值单篇可另见 [cards/](cards/)。

## 官方文档

| 主题 | 资料 | 类型 | 发布时间 | 链接 | 为什么重要 | 阶段 | 对应专题 | 对应场景 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Prompt 工程 | OpenAI Prompt engineering | 官方文档 | 持续更新 | https://developers.openai.com/api/docs/guides/prompt-engineering | OpenAI 对提示词结构、指令、示例和模型行为调优的官方入口 | 入门到进阶 | Prompt 工程 | 企业 Prompt 运营、Prompt 评审工作流 |
| Prompt 工程 | Anthropic Prompt engineering overview | 官方文档 | 持续更新 | https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview | 从 Claude 生态补充提示词设计、评测和迭代视角 | 入门到进阶 | Prompt 工程 | 企业 Prompt 运营 |
| Context 工程 | OpenAI Compaction | 官方文档 | 持续更新 | https://developers.openai.com/api/docs/guides/compaction | 上下文窗口有限时，理解压缩和保留策略的入口 | 进阶 | Context 工程 | 企业 Context 与 RAG、Context 装配 RAG |
| Context 工程 | OpenAI Prompt caching | 官方文档 | 持续更新 | https://developers.openai.com/api/docs/guides/prompt-caching | 长上下文和重复上下文的成本、延迟优化参考 | 进阶 | Context 工程 | 企业 Context 与 RAG |
| Context 工程 | OpenAI File search | 官方文档 | 持续更新 | https://developers.openai.com/api/docs/guides/file-search | 参考企业文件检索、向量存储和引用回答的实现入口 | 进阶 | Context 工程 | 企业 Context 与 RAG |
| Context 工程 | Google Cloud RAG Engine overview | 官方文档 | 持续更新 | https://cloud.google.com/vertex-ai/generative-ai/docs/rag-overview | 参考企业级 RAG Engine 的索引、检索和管理设计 | 进阶 | Context 工程 | 企业 Context 与 RAG |
| MCP + Skill | Model Context Protocol introduction | 官方规范文档 | 持续更新 | https://modelcontextprotocol.io/docs/getting-started/intro | MCP 的概念、架构和客户端/服务器模型的官方入口 | 入门 | MCP + Skill | 企业 MCP 与工具接入 |
| MCP + Skill | OpenAI MCP and Connectors | 官方文档 | 持续更新 | https://developers.openai.com/api/docs/guides/tools-connectors-mcp | 理解 OpenAI 生态中如何接入 MCP 工具和连接器 | 进阶 | MCP + Skill | 企业 MCP 与工具接入 |
| MCP + Skill | OpenAI Skills | 官方文档 | 持续更新 | https://developers.openai.com/api/docs/guides/tools-skills | 理解可复用技能包如何封装流程、工具和知识 | 进阶 | MCP + Skill | 企业 MCP 与工具接入 |
| MCP + Skill | MCP Security Best Practices | 官方规范 | 持续更新 | https://modelcontextprotocol.io/specification/draft/basic/security_best_practices | 约束 MCP 权限、信任边界、提示注入与工具投毒风险 | 进阶 | MCP + Skill、治理/安全 | 企业 MCP、企业治理与安全 |
| Agent 工程 | OpenAI Agents SDK | 官方文档 | 持续更新 | https://openai.github.io/openai-agents-python/ | Agent 定义、运行、编排、guardrails 和 observability 的工程入口 | 进阶 | Agent 工程 | 企业 Agent 运营、Agent 任务执行器 |
| Agent 工程 | OpenAI Using tools | 官方文档 | 持续更新 | https://developers.openai.com/api/docs/guides/tools | Agent 调用外部能力的基础接口和设计约束 | 入门到进阶 | Agent 工程、MCP + Skill | 企业 Agent 运营 |
| Harness 工程 | OpenAI Evals | 官方文档 | 持续更新 | https://developers.openai.com/api/docs/guides/evals | 建立评测、grader、回归和实验比较的官方入口 | 进阶 | Harness 工程 | 企业 Eval Harness、Eval Harness |
| Harness 工程 | Google Gen AI evaluation service | 官方文档 | 持续更新 | https://cloud.google.com/vertex-ai/generative-ai/docs/models/evaluation-overview | 参考企业评测中的 dataset、metrics、rubric-based 和 computation-based metrics | 进阶 | Harness 工程 | 企业 Eval Harness |
| 安全治理 | OWASP Top 10 for LLM Applications | 官方项目 | 持续更新 | https://owasp.org/www-project-top-10-for-large-language-model-applications/ | 建立提示注入、越权工具调用、敏感信息泄露等风险检查清单 | 入门到进阶 | 治理/安全 | 企业治理与安全 |
| 安全治理 | NIST AI Risk Management Framework | 官方框架 | 持续更新 | https://www.nist.gov/itl/ai-risk-management-framework | 建立企业 AI 治理、测量、管理和风险沟通框架 | 进阶 | 治理/安全 | 企业治理与安全 |
| 安全治理 | OpenAI Safety best practices | 官方文档 | 持续更新 | https://developers.openai.com/api/docs/guides/safety-best-practices | 参考分层防护、上线前控制和安全检查清单 | 入门到进阶 | 治理/安全 | 企业治理与安全 |
| 安全治理 | OWASP LLM Prompt Injection Prevention Cheat Sheet | 官方项目 | 持续更新 | https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html | 把提示注入从概念落到输入隔离、输出过滤和工具权限控制 | 进阶 | 治理/安全、Prompt 工程 | 企业治理与安全 |

## 论文

| 主题 | 资料 | 类型 | 发布时间 | 链接 | 为什么重要 | 阶段 | 对应专题 | 对应场景 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Context 工程 | Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks | 论文 | 2020-05-22 | https://arxiv.org/abs/2005.11401 | RAG 方向的基础论文之一，是理解检索增强上下文的起点 | 入门到进阶 | Context 工程 | 企业 Context 与 RAG、Context 装配 RAG |
| Agent 工程 | ReAct: Synergizing Reasoning and Acting in Language Models | 论文 | 2022-10-06 | https://arxiv.org/abs/2210.03629 | 把 reasoning trace 与 action 交错，是很多 Agent 工作流的思想源头 | 进阶 | Agent 工程 | 企业 Agent 运营 |
| Loop 工程 | Reflexion: Language Agents with Verbal Reinforcement Learning | 论文 | 2023-03-20 | https://arxiv.org/abs/2303.11366 | 通过语言反馈和 episodic memory 改善后续尝试，是 Agent 自我改进循环的代表 | 进阶 | Loop 工程 | 企业 Improvement Loop |
| Loop 工程 | Self-Refine: Iterative Refinement with Self-Feedback | 论文 | 2023-03-30 | https://arxiv.org/abs/2303.17651 | 用生成、反馈、精修三段式表达测试时迭代改进 | 进阶 | Loop 工程 | 企业 Improvement Loop、Improvement Loop |
| Harness/Loop 工程 | DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines | 论文 | 2023-10-05 | https://arxiv.org/abs/2310.03714 | 将 LM pipeline、指标和优化连接起来，是从手写 prompt 走向可优化系统的重要资料 | 进阶 | Harness 工程、Loop 工程 | 企业 Eval Harness、企业 Improvement Loop |
| 企业客服 Agent | Building Customer Support AI Agents at 100M-User Scale | 论文 | 2026-06-07 | https://arxiv.org/abs/2606.08867 | 展示大规模客服 Agent 如何结合上下文、人工迭代、LLM judge 和线上指标 | 进阶 | Agent 工程、Harness 工程 | 企业 Agent 运营、企业 Eval Harness |
| 研发效率 | The Impact of AI on Developer Productivity: Evidence from GitHub Copilot | 论文 | 2023-02-13 | https://arxiv.org/abs/2302.06590 | 作为研发提效场景里“必须有对照和指标”的实证材料 | 入门到进阶 | Prompt 工程、Harness 工程 | 企业 Prompt 运营 |
| 安全治理 | Not what you've signed up for: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection | 论文 | 2023-02-23 | https://arxiv.org/abs/2302.12173 | 间接提示注入的代表性研究，说明工具结果和网页内容不可默认信任 | 进阶 | 治理/安全、Context 工程 | 企业治理与安全、企业 MCP |

## 开源项目与评测

| 主题 | 项目 | 类型 | 链接 | 为什么重要 | 阶段 | 对应专题 | 对应场景 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MCP + Skill | Model Context Protocol GitHub organization | 开源组织 | https://github.com/modelcontextprotocol | MCP 规范、SDK 和示例实现的主要代码入口 | 入门到进阶 | MCP + Skill | 企业 MCP 与工具接入 |
| Harness 工程 | OpenAI Evals | 开源项目 | https://github.com/openai/evals | LLM 和 LLM 系统评测框架与 benchmark registry | 进阶 | Harness 工程 | 企业 Eval Harness |
| Harness/Loop 工程 | DSPy | 开源项目 | https://github.com/stanfordnlp/dspy | 用程序结构和优化器替代脆弱 prompt 模板的代表框架 | 进阶 | Harness 工程、Loop 工程 | 企业 Improvement Loop |
| Harness/RAG 工程 | Ragas | 开源项目/文档 | https://docs.ragas.io/en/stable/ | 参考 RAG 场景的 faithfulness、context precision/recall 等评测思路 | 进阶 | Harness 工程、Context 工程 | 企业 Eval Harness、企业 Context 与 RAG |
| Harness 工程 | LangSmith evaluation concepts | 产品文档 | https://docs.langchain.com/langsmith/evaluation-concepts | 参考 dataset、experiment、evaluator 和 trace 的组织方式 | 进阶 | Harness 工程 | 企业 Eval Harness |
| Harness 工程 | HELM | 开源评测 | https://crfm.stanford.edu/helm/ | 多场景、多指标的模型评测框架，适合理解 benchmark 组织方式 | 进阶 | Harness 工程 | 企业 Eval Harness |

## 工程博客与生产案例

| 主题 | 资料 | 类型 | 发布时间 | 链接 | 为什么重要 | 阶段 | 对应专题 | 对应场景 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 生产案例 | Building Customer Support AI Agents at 100M-User Scale | 论文/案例 | 2026-06-07 | https://arxiv.org/abs/2606.08867 | 带规模、评测和线上指标的客服 Agent 案例，见 [cards/nubank-support-agents.md](cards/nubank-support-agents.md) | 进阶 | Agent、Harness、Context | 企业 Agent、企业 Eval Harness |
| 安全治理 | Anthropic: Mitigating prompt injection | 工程博客 | 持续更新 | https://docs.anthropic.com/en/docs/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks | 厂商侧对越狱与注入防护的工程建议，需与 OWASP/NIST 交叉核验 | 进阶 | 治理/安全 | 企业治理与安全 |
| 安全治理 | OpenAI: Prompt injections and tool use | 官方安全说明 | 持续更新 | https://developers.openai.com/api/docs/guides/safety-best-practices | 工具调用场景下的注入与权限风险入口 | 进阶 | 治理/安全、MCP + Skill | 企业 MCP、企业治理与安全 |

## 待补充

- 重要产品发布：按月记录到 inbox/gaps，核验后再进入本索引，不直接混入长期专题。
- 更多带 trace、指标、架构图或失败复盘的一线工程文章。
- 新 benchmark / leaderboard 更新后，优先补进 Harness 对应场景。
