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

## 内容摘取

- Harness 是 LLM 系统的实验台：固定输入、版本、评测器、指标和报告，才能比较改动效果。
- Eval dataset 不只是题目集合，还应该包含任务类型、难度、期望行为、禁区、元数据和人工解释。
- Grader 可以是规则、人工、模型裁判或组合；模型裁判必须抽样复核，不能当绝对真值。
- Trace 让失败可定位：同一个低分可能来自检索、prompt、工具、模型、后处理或评测器。
- Baseline 是比较的锚点；没有基线，分数变化没有意义。
- Regression gate 要覆盖关键失败模式，不能只看平均分，否则高风险样例会被稀释。

## 场景与用途

| 场景 | 用途说明 | 重点产物 |
| --- | --- | --- |
| Prompt 版本对比 | 比较两个 prompt 在同一批样例上的正确率、格式和稳定性 | 样例集、分数、失败分类 |
| RAG 策略回归 | 比较召回、排序、压缩策略对引用正确性的影响 | 检索指标、引用命中、错误分析 |
| Agent 过程评测 | 统计计划质量、工具调用成功率、失败恢复和人工接管 | Trace、步骤分数、恢复率 |
| 模型迁移评估 | 换模型前比较成本、延迟、质量和风险样例表现 | 基线报告、迁移建议 |
| Grader 校准 | 比较规则评分、人工评分和 LLM-as-judge 的一致性 | 抽样复核、一致率、偏差说明 |
| 回归门禁 | 在合并前阻止高风险样例质量下降 | 阈值、阻断规则、例外记录 |
| 线上反馈复盘 | 把用户反馈转化为新样例，补齐评测集盲区 | 反馈样例、标签、修复验证 |
| 安全红队评测 | 固定越权、注入、敏感信息和违规建议样例 | 攻击样例、拒答率、绕过案例 |
| 多语言质量评测 | 比较不同语言输入下的准确性、风格和格式稳定性 | 语言覆盖表、人工评分、一致性报告 |
| 成本延迟基准测试 | 在相同任务集上记录模型、检索和工具链成本延迟 | 成本表、延迟分布、优化建议 |
| 数据漂移监测 | 定期比较线上输入分布与评测集覆盖差异 | 分布报告、新样例候选、补集计划 |

## 边界与风险

- 评测集过小会误导方向。
- LLM-as-judge 必须有抽样人工复核。
- Harness 自身也需要版本化，否则结果不可比较。

## 最小实践场景

- 实验目标：比较两个候选策略，并输出可复现的分数、失败分类和推荐结论。
- 实验材料：准备 20 条任务样例、2 个候选 prompt 或 RAG 策略、1 个规则 grader、1 份人工复核表。
- 实验步骤：固定版本和参数；分别运行两个策略；记录 trace；自动评分；抽样人工复核；生成报告。
- 记录方式：保存输入样例、输出、评分、trace、成本、延迟、失败标签和推荐理由。
- 验收标准：实验可重复运行；能定位失败来源；能解释选择哪个策略；关键失败样例不能被平均分掩盖。

企业试点入口：[scenarios/enterprise-evaluation-harness.md](../../scenarios/enterprise-evaluation-harness.md)
基础练习入口：[scenarios/eval-harness.md](../../scenarios/eval-harness.md)
方案集入口：[scenarios/enterprise-practice-playbook.md](../../scenarios/enterprise-practice-playbook.md)

## 证据链与当前判断

| 证据 | 支撑的判断 | 边界 |
| --- | --- | --- |
| [OpenAI Evals](../../sources/cards/openai-evals.md) | 数据集、grader、候选和运行结果需要独立版本化 | 产品 API 会持续变化 |
| [Case-aware RAG 评测](../../sources/cards/case-aware-rag-evaluation.md) | 平均分必须补充 workflow 和严重失败视图 | 评测维度需要本地校准 |
| [Nubank 客服 Agent](../../sources/cards/nubank-support-agents.md) | 离线指标需要与人工一致性和线上指标连接 | 相关性不代表所有指标都有预测力 |
| [DSPy](../../sources/cards/dspy-pipeline-optimization.md) | Harness 可以驱动候选 pipeline 优化 | 错误 metric 会放大错误目标 |

当前判断：Harness 是所有 Prompt、RAG、工具和 Agent 变更的共同质量接口。报告至少同时展示逐样例结果、关键失败、成本和延迟。当前 [Eval Harness Lab](../../labs/eval-harness/README.md) 已能比较候选；下一步需要加入人工复核一致率和安全硬门禁。

## 后续追踪项

- Agent 过程评测标准。
- 自动 grader 与人工评审的组合方式。
- trace、成本、延迟与质量指标的统一报告格式。
