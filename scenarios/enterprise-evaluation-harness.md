# 企业 Eval Harness 场景

Harness 的目标是让 Prompt、RAG、Agent 和工具调用变更都能被比较、回归和解释。

## 适用边界

- 适合：客服机器人、RAG 引用、模型替换、工具调用、LLM-as-judge、线上反馈闭环。
- 不适合：只有少量主观样例、没有业务标签、没有失败分类的评测。
- 关键判断：评测是否能解释“为什么通过或失败”，而不只是一个总分。

## 资料地址

| 资料 | 地址 | 用途 |
| --- | --- | --- |
| OpenAI Evals | https://developers.openai.com/api/docs/guides/evals | 创建 eval、测试数据和 grader 的官方入口 |
| OpenAI Evals GitHub | https://github.com/openai/evals | 参考开源评测框架和 benchmark registry |
| Google Gen AI evaluation service | https://cloud.google.com/vertex-ai/generative-ai/docs/models/evaluation-overview | 参考数据集、指标、rubric-based 和 computation-based metrics |
| LangSmith evaluation concepts | https://docs.langchain.com/langsmith/evaluation-concepts | 参考 trace、dataset、experiment 和 evaluator 组织方式 |
| Ragas | https://docs.ragas.io/en/stable/ | 参考 RAG 场景下的 faithfulness、context precision/recall 等评测思路 |
| Case-aware RAG evaluation paper | https://arxiv.org/abs/2602.20379 | 参考企业 RAG 中 case、workflow、severity 与 LLM-as-judge 的评测结构 |
| GitHub Copilot productivity study | https://arxiv.org/abs/2302.06590 | 参考研发提效场景如何用对照实验和任务边界定义指标 |

## 场景 1：客服机器人回归集

| 项目 | 操作方案 |
| --- | --- |
| 样例来源 | 真实工单脱敏抽样，覆盖高频问题、投诉、退款、账号、拒答和升级 |
| 评测方式 | 同时评分类、答复、引用、升级、拒答；高风险类别单独设门槛 |
| 数据口径 | 正确率、升级召回率、拒答准确率、幻觉率、人工质检分 |
| 验收方式 | 每次 Prompt、知识库或模型更新前跑固定集；失败样例进入修复队列 |
| 资料支撑 | OpenAI Evals + Google Gen AI evaluation service |
| 风险控制 | 不能用平均分掩盖投诉和赔付类失败 |

## 场景 2：RAG 引用评测

| 项目 | 操作方案 |
| --- | --- |
| 样例来源 | 问题、标准答案、必须引用文档、禁止引用文档、冲突文档 |
| 评测方式 | 评估答案正确性、引用准确率、证据覆盖率、无依据回答率 |
| 数据口径 | faithfulness、context precision、context recall、过期引用率、错引用率 |
| 验收方式 | 对每个知识库版本跑同一套问题，比较切片、召回和排序策略 |
| 资料支撑 | Ragas + Google RAG Engine overview |
| 风险控制 | 没有证据时必须回答不确定，不允许补全事实 |

## 场景 3：Agent 工具调用评测

| 项目 | 操作方案 |
| --- | --- |
| 样例来源 | 多步任务脚本，包括权限失败、参数缺失、工具超时、需要审批等分支 |
| 评测方式 | 评工具选择、参数、失败恢复、停止条件、人工接管和最终产物 |
| 数据口径 | 工具调用成功率、参数错误率、错误恢复率、人工接管率、越权拦截率 |
| 验收方式 | 高风险工具单独评测，不和只读工具混算 |
| 资料支撑 | OpenAI Agents SDK + LangSmith evaluation concepts |
| 风险控制 | 任何写操作都要有审批路径和回滚记录 |

## 场景 4：模型替换评估

| 项目 | 操作方案 |
| --- | --- |
| 样例来源 | 线上高价值样例、失败样例、边界样例、低频高风险样例 |
| 评测方式 | 同一输入、同一上下文、同一 grader 下比较新旧模型 |
| 数据口径 | 质量分、成本、延迟、风险样例通过率、输出格式稳定性 |
| 验收方式 | 总分不能下降，高风险样例必须全部通过，成本和延迟有明确上限 |
| 资料支撑 | OpenAI Evals + Google Gen AI evaluation service |
| 风险控制 | 不只看平均表现；关键业务按标签分层看结果 |

## 场景 5：LLM-as-judge 校准

| 项目 | 操作方案 |
| --- | --- |
| 样例来源 | 人工标注样例，覆盖好、中、差和争议边界 |
| 评测方式 | 先比较模型裁判与人工裁判一致率，再分析偏差类型 |
| 数据口径 | 一致率、偏差类型、置信区间、人工复审命中率 |
| 验收方式 | 模型裁判只用于筛选和辅助分析，不作为关键业务唯一裁判 |
| 资料支撑 | Google Gen AI evaluation service 的 rubric-based metrics |
| 风险控制 | 高风险输出必须人工抽检；裁判 prompt 也要版本化 |

## 评测记录最小字段

| 字段 | 说明 |
| --- | --- |
| eval_id | 评测 ID |
| dataset_version | 样例集版本 |
| system_version | Prompt、模型、检索、工具版本 |
| label | 业务标签和风险标签 |
| expected | 期望答案、字段、引用或动作 |
| actual | 实际输出 |
| score | 分数或通过/失败 |
| failure_type | 失败类型 |
| owner_action | 修 Prompt、补资料、改检索、改工具、回滚 |

## 样例包与门禁

- 最小样例包：[fixtures/enterprise-evaluation-harness/README.md](fixtures/enterprise-evaluation-harness/README.md)
- 基线 / 门禁 / 回滚：[fixtures/shared/baseline-gate-rollback.md](fixtures/shared/baseline-gate-rollback.md)
