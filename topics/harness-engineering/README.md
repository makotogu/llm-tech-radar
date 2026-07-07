# Harness 工程

## 定义

Harness 工程是围绕 LLM 系统建立测试、评测、对比、回归、trace 和报告的工程实践。它让 Prompt、Context、Agent 和 Loop 的改动可以被量化和复现。

## 要解决的问题

- 改动不可比较：换模型、改 prompt、调上下文后不知道是否真的变好。
- 失败不可定位：只看最终答案，无法知道错误来自检索、工具、模型还是评测器。
- 质量不可回归：没有固定样例集、评测器和基线。

## 关键概念

| 概念 | 解释 | 需要避免的误解 |
| --- | --- | --- |
| Eval dataset | 固定输入、期望行为和元数据 | 只用几个成功 demo 当测试集 |
| Grader | 自动或人工评测器 | 把模型裁判当成绝对真值 |
| Baseline | 用于比较的历史版本或策略 | 每次实验都换评测口径 |
| Trace | 过程级记录 | 只保存最终分数 |
| Regression gate | 阻止质量下降进入主线的门槛 | 单一平均分覆盖关键失败 |

## 演进时间线

| 时间 | 事件 | 判断 |
| --- | --- | --- |
| 2023 | OpenAI Evals、HELM 等评测框架被广泛关注 | LLM 评测从 benchmark 扩展到应用行为 |
| 2024-2025 | Agent 和 RAG 生产化推动过程评测 | 只评最终答案不足以定位问题 |
| 2026 | Harness 成为 LLM 应用迭代基础设施 | 没有 Harness 的系统难以持续改进 |

## 代表资料

| 类型 | 名称 | 链接 | 为什么重要 |
| --- | --- | --- | --- |
| 官方文档 | OpenAI Evals | https://developers.openai.com/api/docs/guides/evals | 评测、grader 和实验管理入口 |
| 开源项目 | OpenAI Evals GitHub | https://github.com/openai/evals | 可查看评测框架和 benchmark registry |
| 论文/框架 | DSPy | https://arxiv.org/abs/2310.03714 | 将指标和优化接入 LM pipeline |

## 适用场景

- Prompt 版本对比。
- RAG 检索策略回归。
- Agent 工具调用成功率和失败模式分析。
- Loop 自动修正是否真的提升质量。

## 边界与风险

- 评测集过小会误导方向。
- LLM-as-judge 必须有抽样人工复核。
- Harness 自身也需要版本化，否则结果不可比较。

## 最小实践场景

- 输入：同一批任务样例和两个候选策略。
- 输出：分数、失败分类、trace 和推荐结论。
- 流程：加载样例、运行策略、记录 trace、grader 评分、生成报告。
- 验收标准：可重复运行、能定位失败来源、能解释选择哪个策略。

实践入口：[scenarios/eval-harness.md](../../scenarios/eval-harness.md)

## 后续追踪项

- Agent 过程评测标准。
- 自动 grader 与人工评审的组合方式。
- trace、成本、延迟与质量指标的统一报告格式。
