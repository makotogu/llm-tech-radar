# Loop 工程

## 定义

Loop 工程是设计“执行、观察、反馈、修正、再执行”的闭环系统。它关注的不只是单次回答质量，而是系统如何利用 trace、评测结果、用户反馈和环境反馈持续改进。

## 要解决的问题

- 一次生成无法满足复杂任务，需要迭代修正。
- Agent 执行中会遇到错误，需要从反馈中恢复。
- 改进过程如果没有停止条件和质量门槛，会造成成本失控或错误放大。

## 关键概念

| 概念 | 解释 | 需要避免的误解 |
| --- | --- | --- |
| Feedback signal | 来自测试、工具、用户、环境或模型评审的反馈 | 所有反馈都同等可靠 |
| Repair action | 基于反馈进行重试、改 prompt、改上下文或改工具调用 | 盲目重试 |
| Memory | 保存对后续尝试有价值的经验 | 把所有历史都塞回上下文 |
| Stop condition | 何时停止自动循环 | 无限循环直到看起来成功 |
| Quality gate | 进入下一阶段前的最低质量门槛 | 没有回滚路径 |

## 演进时间线

| 时间 | 事件 | 判断 |
| --- | --- | --- |
| 2023 | Reflexion、Self-Refine 等工作提出语言反馈闭环 | 测试时改进成为重要方向 |
| 2023-2024 | DSPy 将指标和优化接入 LM pipeline | Loop 从手动调参走向系统化优化 |
| 2025-2026 | Agent trace、eval 和自动修复结合 | Loop 工程进入生产工具链 |

## 代表资料

| 类型 | 名称 | 链接 | 为什么重要 |
| --- | --- | --- | --- |
| 论文 | Reflexion | https://arxiv.org/abs/2303.11366 | 使用语言反馈和 episodic memory 改善后续尝试 |
| 论文 | Self-Refine | https://arxiv.org/abs/2303.17651 | 生成、反馈、精修循环的代表性方法 |
| 论文/框架 | DSPy | https://arxiv.org/abs/2310.03714 | 用指标驱动 pipeline 优化 |
| 官方 Cookbook | Build an Agent Improvement Loop with Traces, Evals, and Codex | https://developers.openai.com/cookbook/examples/agents_sdk/agent_improvement_loop | 将 trace、eval 和 Codex 连接成改进循环的官方示例 |

## 适用场景

- 代码生成后的测试失败自动修复。
- RAG 答案质量低时自动调整检索和上下文。
- Agent 工具调用失败后的诊断和重试。
- Prompt 版本通过 Harness 结果自动候选优化。

## 边界与风险

- 自动循环必须有预算、次数和质量门槛。
- 反馈错误会让系统越改越差。
- 高风险动作应在 Loop 中设置人工确认点。

## 最小实践场景

- 输入：初始任务、执行结果、失败反馈。
- 输出：修正计划、下一轮执行结果、是否停止的判断。
- 流程：执行、记录 trace、评测、归因、修正、重试、停止或升级人工。
- 验收标准：失败能被分类，重试次数受控，最终结果优于单次执行。

实践入口：[scenarios/improvement-loop.md](../../scenarios/improvement-loop.md)

## 后续追踪项

- Loop 中哪些步骤适合自动化，哪些必须人工确认。
- 如何把 loop 产物沉淀为 Skill、测试集或知识库。
- 自动修正对成本、延迟和安全的影响。
