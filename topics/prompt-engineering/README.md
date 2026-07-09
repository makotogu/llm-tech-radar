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

## 内容摘取

- Prompt 是任务接口：它要明确目标、受众、边界、优先级和不做什么，而不是只给一句泛化请求。
- 好的 prompt 通常由任务说明、可用上下文、输出格式、质量标准、示例和失败处理组成。
- 结构化输出需要把字段、类型、缺省值、错误处理和不确定性表达写清楚，不能只要求“输出 JSON”。
- Few-shot 示例的作用是约束模式和边界，低质量示例会比没有示例更危险。
- Prompt 需要和评测绑定：没有固定样例和评审标准，就无法判断改动是优化还是偶然变化。
- 随着 tool calling、RAG 和 Agent 普及，Prompt 更像系统边界说明，需要和 Context、Harness、Loop 一起设计。

## 场景与用途

| 场景 | 用途说明 | 重点产物 |
| --- | --- | --- |
| 需求澄清 | 把一句模糊请求转成目标、约束、受众、输出格式和验收标准 | 任务说明、澄清问题、最终 prompt |
| 信息抽取 | 从文章、客服记录、合同或日志中抽取结构化字段 | 字段 schema、缺失值规则、置信度说明 |
| 内容生成 | 生成邮件、报告、说明文、FAQ、脚本等业务文本 | 风格约束、目标读者、禁用表达、示例 |
| 分类与路由 | 判断问题类别、优先级、负责人或后续工作流 | 标签集合、判定规则、边界样例 |
| 代码辅助 | 让模型生成、解释、重构或评审代码 | 输入上下文、输出格式、测试要求 |
| Prompt 评审 | 检查提示词是否遗漏约束、是否容易被误解、是否可评测 | 评审 rubric、失败样例、修订建议 |
| 多人维护 | 让团队用一致格式维护提示词库，减少隐性经验 | 模板、版本记录、变更理由 |
| 风险提示与拒答设计 | 对医疗、金融、法务等高风险请求设计安全边界、替代建议和升级话术 | 风险分类、拒答模板、升级条件 |
| 多语言本地化改写 | 在保持事实和品牌口径一致的前提下改写多语言内容 | 术语表、风格指南、对照样例 |
| 表单填写辅助 | 根据用户材料生成表单字段草稿，并标记缺失或不确定信息 | 字段映射、缺失值说明、人工确认清单 |
| 会议行动项生成 | 从会议记录中提取责任人、截止日期、依赖和风险 | 行动项列表、待确认问题、跟进模板 |

## 边界与风险

- Prompt 不能弥补错误数据、缺失上下文或不可靠工具。
- 复杂任务不应只堆长 prompt，需要拆成 Context、Agent 和 Harness 问题。
- Prompt 中混入未隔离的用户输入会增加 prompt injection 风险。

## 最小实践场景

- 实验目标：把同一个模糊需求改写成可复用 prompt，并证明改写后输出更稳定。
- 实验材料：准备 5 条用户需求，其中至少包含 2 条边界不清、1 条格式要求复杂、1 条存在风险约束的需求。
- 实验步骤：先用原始需求直接生成结果；再补充目标、上下文、输出格式、示例和评审标准；最后对比两轮输出。
- 记录方式：记录原始 prompt、修订 prompt、输出差异、失败样例、人工评分和修订理由。
- 验收标准：修订后输出满足格式，没有遗漏关键约束，能解释取舍；至少 4/5 个样例比原始 prompt 更稳定。

企业试点入口：[scenarios/enterprise-prompt-operations.md](../../scenarios/enterprise-prompt-operations.md)
基础练习入口：[scenarios/prompt-review-workflow.md](../../scenarios/prompt-review-workflow.md)
可复现实验：[labs/prompt-review-workflow](../../labs/prompt-review-workflow/README.md)
方案集入口：[scenarios/enterprise-practice-playbook.md](../../scenarios/enterprise-practice-playbook.md)

## 后续追踪项

- 模型官方 prompt guidance 的变化。
- 结构化输出、JSON schema、tool calling 对 prompt 形态的影响。
- Prompt 自动优化与人工评审的边界。
