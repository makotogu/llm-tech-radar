# 企业 Eval Harness · 最小样例包

对应场景：[enterprise-evaluation-harness.md](../../enterprise-evaluation-harness.md)

## 输入样例

| sample_id | eval_type | focus |
| --- | --- | --- |
| eh-01 | 客服回归 | 退款升级召回 |
| eh-02 | RAG 引用 | 必须引用 / 禁止引用文档 |
| eh-03 | 工具调用 | 多步任务参数与恢复 |
| eh-04 | 模型替换 | 同集比较质量/成本/延迟 |
| eh-05 | LLM-as-judge 校准 | 与人工一致率 |

## 期望输出要点

| sample_id | expected_behavior |
| --- | --- |
| eh-01 | 分数 + 失败分类；高风险类单独门槛 |
| eh-02 | 引用准确率与无依据回答率可解释 |
| eh-03 | 不把高危工具失败淹没在平均分里 |
| eh-04 | 不只看总分，保留高价值客户切片 |
| eh-05 | 报告偏差类型；关键决策不单靠模型裁判 |

## 失败模式样例

| failure_id | sample_id | failure_type | bad_output_signal |
| --- | --- | --- | --- |
| hf-01 | eh-01 | 平均分掩盖 | 总分上升但升级召回下降 |
| hf-02 | eh-05 | 裁判漂移 | 未校准就用于上线门禁 |
