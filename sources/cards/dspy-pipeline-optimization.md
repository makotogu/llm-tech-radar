# 资料卡片

- 标题：DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines
- 作者：Omar Khattab、Arnav Singhvi、Paridhi Maheshwari 等
- 类型：论文 / 开源框架
- 发布时间：2023-10-05
- 核验日期：2026-07-10
- 链接：https://arxiv.org/abs/2310.03714
- 项目：https://github.com/stanfordnlp/dspy
- 可信度：A（论文与开源项目；论文效果依赖任务和指标）
- 对应专题：Harness 工程、Loop 工程、Prompt 工程
- 推荐阶段：进阶

## 一句话价值

DSPy 把 LM pipeline、可优化参数和任务指标连接起来，说明 Prompt 与工作流优化可以变成可重复实验，而不是依赖人工试词。

## 方法与结果

- DSPy 用声明式模块表达 LM pipeline，并由 compiler 根据给定 metric 优化示例、提示或其他参数。
- 论文案例覆盖数学题、多跳检索、复杂问答和 Agent loop。
- 摘要报告多个任务上相对标准 few-shot prompting 的明显提升，但这些比例属于特定模型、数据和实验设置。

## 这份资料能支撑什么

- 可以支撑：优化前必须先定义数据集、指标和可比较运行方式。
- 可以支撑：Prompt、检索和 pipeline 策略可以使用同一 Harness 做候选比较。
- 不能直接支撑：自动优化一定优于领域专家设计。
- 不能直接支撑：离线 metric 提升会自动转化为线上业务收益。

## 工程迁移

- 把候选策略、固定样例、grader 和 scorecard 作为独立资产版本化。
- 限制优化轮数和预算，并对高风险失败设置硬门禁。
- 关联实验：[Eval Harness](../../labs/eval-harness/README.md)
- 关联场景：[企业 Improvement Loop](../../scenarios/enterprise-improvement-loop.md)

## 注意事项

- 指标设计错误时，优化器会稳定地放大错误目标。
- 模型和数据变化后需要重新验证，不应长期复用一次编译结果。
