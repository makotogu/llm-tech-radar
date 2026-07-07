# Prompt 工程

## 定义

Prompt 工程是把任务目标、上下文、约束、示例、输出格式和评审标准组织成模型可执行指令的工程实践。它不是“写一句神奇提示词”，而是把人类意图转成可重复、可评估、可迭代的接口。

## 要解决的问题

- 任务表达不清：模型不知道目标、受众、边界和优先级。
- 输出不可控：格式、语气、长度、证据要求和失败处理没有约束。
- 迭代不可复现：没有样例、失败记录和评测标准，改 prompt 只能凭感觉。

## 关键概念

| 概念 | 解释 | 需要避免的误解 |
| --- | --- | --- |
| Instruction | 明确模型要做什么、不要做什么 | 把背景材料当成指令 |
| Context | 本次任务可用的信息 | 上下文越多越好 |
| Few-shot example | 用样例约束输出模式 | 样例质量低于任务说明 |
| Output contract | 结构、字段、格式和质量门槛 | 只写“请输出 JSON”但不定义 schema |
| Critic rubric | 用于评审输出的标准 | 只依赖主观满意度 |

## 演进时间线

| 时间 | 事件 | 判断 |
| --- | --- | --- |
| 2020-2022 | few-shot、chain-of-thought 等 prompting 方法广泛传播 | Prompt 成为释放模型能力的主要入口 |
| 2023 | 结构化输出、工具调用和 RAG 普及 | Prompt 从文本技巧进入系统接口设计 |
| 2024-2026 | Agent、长上下文和评测框架普及 | Prompt 需要和 Context、Harness、Loop 一起设计 |

## 代表资料

| 类型 | 名称 | 链接 | 为什么重要 |
| --- | --- | --- | --- |
| 官方文档 | OpenAI Prompt engineering | https://developers.openai.com/api/docs/guides/prompt-engineering | OpenAI 官方 prompt 设计入口 |
| 官方文档 | Anthropic Prompt engineering overview | https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview | 补充 Claude 生态的提示词设计方法 |
| 开源/论文 | DSPy | https://arxiv.org/abs/2310.03714 | 代表从手写 prompt 走向可优化 LM pipeline 的方向 |

## 适用场景

- 需要稳定输出结构的总结、抽取、分类、生成任务。
- 需要多人协作维护的业务提示词库。
- 需要把 prompt 改动纳入评测和回归的生产系统。

## 边界与风险

- Prompt 不能弥补错误数据、缺失上下文或不可靠工具。
- 复杂任务不应只堆长 prompt，需要拆成 Context、Agent 和 Harness 问题。
- Prompt 中混入未隔离的用户输入会增加 prompt injection 风险。

## 最小实践场景

- 输入：用户的一段模糊需求。
- 输出：澄清后的任务说明、输出格式、评审标准和最终回答。
- 流程：需求澄清、约束提取、生成草稿、自评审、修订。
- 验收标准：输出满足格式、没有遗漏关键约束、能解释取舍。

实践入口：[scenarios/prompt-review-workflow.md](../../scenarios/prompt-review-workflow.md)

## 后续追踪项

- 模型官方 prompt guidance 的变化。
- 结构化输出、JSON schema、tool calling 对 prompt 形态的影响。
- Prompt 自动优化与人工评审的边界。
