# 实践场景

实践场景用于把资料阅读转成可复现的工程练习。每个场景都要明确目标、输入、输出、流程和验收标准。

| 场景 | 对应专题 | 目标 |
| --- | --- | --- |
| [Prompt 评审工作流](prompt-review-workflow.md) | Prompt 工程 | 把模糊需求转成可执行 prompt 和评审标准 |
| [Context 装配 RAG](context-assembly-rag.md) | Context 工程 | 设计多来源上下文的检索、排序、压缩和引用流程 |
| [MCP + Skill 工具工作流](mcp-skill-tool-workflow.md) | MCP + Skill | 描述工具注册、权限控制和调用审计 |
| [Agent 任务执行器](agent-task-runner.md) | Agent 工程 | 构建计划、工具调用、状态和失败恢复流程 |
| [Eval Harness](eval-harness.md) | Harness 工程 | 比较 Prompt、Context 或 Agent 策略的质量 |
| [Improvement Loop](improvement-loop.md) | Loop 工程 | 设计执行、反馈、修正、再执行的闭环 |
| [企业级 LLM 实践方案集](enterprise-practice-playbook.md) | 全部专题 | 把六个大节点转成可试点、可采集数据、可验收的企业操作方案 |
| [企业 Prompt 运营场景](enterprise-prompt-operations.md) | Prompt 工程 | 把客服、销售、合同、HR、财务等 Prompt 变更纳入版本、评测和灰度 |
| [企业 Context 与 RAG 场景](enterprise-context-rag-operations.md) | Context 工程 | 建立带来源、版本、权限和引用评测的企业知识问答方案 |
| [企业 MCP 与工具接入场景](enterprise-mcp-tool-operations.md) | MCP + Skill | 设计工单、CRM、指标、发布、文档工具的权限和审计方案 |
| [企业 Agent 运营场景](enterprise-agent-operations.md) | Agent 工程 | 设计缺陷修复、运维诊断、数据分析、客户成功等可接管 Agent 流程 |
| [企业 Eval Harness 场景](enterprise-evaluation-harness.md) | Harness 工程 | 为客服、RAG、Agent、模型替换和 LLM-as-judge 建立回归评测 |
| [企业 Improvement Loop 场景](enterprise-improvement-loop.md) | Loop 工程 | 把失败样例转成 Prompt、RAG、知识库和工具流程的可控改进循环 |
| [企业治理与安全场景](enterprise-governance-safety.md) | 治理/安全 | 补齐上线门禁、提示注入、供应商风险、敏感数据和人工接管 |

## 统一验收维度

- 正确性：输出是否解决任务。
- 可复现性：同一输入和版本能否得到可比较结果。
- 可观察性：是否记录中间决策、上下文、工具调用和评测结果。
- 安全性：是否处理权限、敏感数据和人工确认。
- 成本/时延：是否有预算、停止条件和降级策略。
- 数据支撑：是否有基线、样例来源、指标口径和上线前后对比。
