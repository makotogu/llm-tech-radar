# 实践场景

实践场景用于把资料阅读转成可复现的工程练习。每个场景都要明确目标、输入、输出、流程和验收标准。

**企业试点负责人请先读** [企业级 LLM 实践方案集](enterprise-practice-playbook.md)，按风险等级选题后再进入细分文档。

样例包、基线表头与门禁见 [fixtures/](fixtures/shared/baseline-gate-rollback.md)。

## 企业试点场景

| 场景 | 对应专题 | 风险等级 | 目标 |
| --- | --- | --- | --- |
| [企业级 LLM 实践方案集](enterprise-practice-playbook.md) | 全部专题 | 选型入口 | 按风险与数据就绪度选题，定义指标口径 |
| [企业 Prompt 运营场景](enterprise-prompt-operations.md) | Prompt 工程 | L1 | 把客服、销售、合同、HR、财务等 Prompt 变更纳入版本、评测和灰度 |
| [企业 Context 与 RAG 场景](enterprise-context-rag-operations.md) | Context 工程 | L2 | 建立带来源、版本、权限和引用评测的企业知识问答方案 |
| [企业 MCP 与工具接入场景](enterprise-mcp-tool-operations.md) | MCP + Skill | L3 | 设计工单、CRM、指标、发布、文档工具的权限和审计方案 |
| [企业 Agent 运营场景](enterprise-agent-operations.md) | Agent 工程 | L4 | 设计缺陷修复、运维诊断、数据分析、客户成功等可接管 Agent 流程 |
| [企业 Eval Harness 场景](enterprise-evaluation-harness.md) | Harness 工程 | L1–L5 | 为客服、RAG、Agent、模型替换和 LLM-as-judge 建立回归评测 |
| [企业 Improvement Loop 场景](enterprise-improvement-loop.md) | Loop 工程 | L5 | 把失败样例转成 Prompt、RAG、知识库和工具流程的可控改进循环 |
| [企业治理与安全场景](enterprise-governance-safety.md) | 治理/安全 | 全等级 | 补齐上线门禁、提示注入、供应商风险、敏感数据和人工接管 |

## 基础练习场景

| 场景 | 对应专题 | 目标 |
| --- | --- | --- |
| [Prompt 评审工作流](prompt-review-workflow.md) | Prompt 工程 | 把模糊需求转成可执行 prompt 和评审标准 |
| [Context 装配 RAG](context-assembly-rag.md) | Context 工程 | 设计多来源上下文的检索、排序、压缩和引用流程 |
| [MCP + Skill 工具工作流](mcp-skill-tool-workflow.md) | MCP + Skill | 描述工具注册、权限控制和调用审计 |
| [Agent 任务执行器](agent-task-runner.md) | Agent 工程 | 构建计划、工具调用、状态和失败恢复流程 |
| [Eval Harness](eval-harness.md) | Harness 工程 | 比较 Prompt、Context 或 Agent 策略的质量 |
| [Improvement Loop](improvement-loop.md) | Loop 工程 | 设计执行、反馈、修正、再执行的闭环 |

## 统一验收维度

- 正确性：输出是否解决任务。
- 可复现性：同一输入和版本能否得到可比较结果。
- 可观察性：是否记录中间决策、上下文、工具调用和评测结果。
- 安全性：是否处理权限、敏感数据和人工确认。
- 成本/时延：是否有预算、停止条件和降级策略。
- 数据支撑：是否有基线、样例来源、指标口径和上线前后对比。

## 关键节点扩展场景

这些场景补充在各专题的“场景与用途”中，用于帮助读者把关键节点映射到更多企业和产品实践。

| 技术节点 | 新增场景方向 |
| --- | --- |
| Prompt 工程 | 风险提示与拒答设计、多语言本地化改写、表单填写辅助、会议行动项生成 |
| Context 工程 | 多租户知识隔离、时效性敏感问答、多模态资料装配、上下文预算优化 |
| MCP + Skill | 审批流工具接入、设计系统 Skill、安全扫描工具链、数据同步运维 Skill |
| Agent 工程 | 数据迁移助理、依赖升级 Agent、采购比价 Agent、合规检查 Agent |
| Harness 工程 | 安全红队评测、多语言质量评测、成本延迟基准测试、数据漂移监测 |
| Loop 工程 | Grader 校准循环、成本优化循环、安全策略修复循环、数据标注改进循环 |
