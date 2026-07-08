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

## 统一验收维度

- 正确性：输出是否解决任务。
- 可复现性：同一输入和版本能否得到可比较结果。
- 可观察性：是否记录中间决策、上下文、工具调用和评测结果。
- 安全性：是否处理权限、敏感数据和人工确认。
- 成本/时延：是否有预算、停止条件和降级策略。
- 数据支撑：是否有基线、样例来源、指标口径和上线前后对比。
