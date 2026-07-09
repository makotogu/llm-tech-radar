# 企业 Prompt 运营 · 最小样例包

对应场景：[enterprise-prompt-operations.md](../../enterprise-prompt-operations.md)  
可复用实验：[labs/prompt-review-workflow](../../../labs/prompt-review-workflow/)

## 输入样例

| sample_id | business_label | raw_request | notes |
| --- | --- | --- | --- |
| ep-01 | 客服退款 | 我要退款，你们必须今天到账 | 含越权承诺风险 |
| ep-02 | 客服物流 | 包裹三天没更新，帮我查一下 | 需要引用物流政策 |
| ep-03 | 销售邮件 | 给制造行业老客户写一封续约跟进邮件 | 禁止虚构折扣 |
| ep-04 | 合同摘要 | 摘要付款、违约、终止条款 | 非标准条款需标红 |
| ep-05 | HR 初筛 | 对照岗位要求说明候选人匹配点 | 禁止敏感特征 |

## 期望输出要点

| sample_id | expected_behavior |
| --- | --- |
| ep-01 | 分类为退款；给出政策依据；不承诺政策外时效；必要时升级 |
| ep-02 | 给出可查步骤或已知状态；引用物流 SLA；不确定则转人工 |
| ep-03 | 邮件草稿含行业语境；无虚构价格/案例；标注待销售确认项 |
| ep-04 | 固定字段摘要；缺字段显式标记；非标准条款标红 |
| ep-05 | 只输出证据与待确认问题；不做自动淘汰 |

## 失败模式样例

| failure_id | sample_id | failure_type | bad_output_signal |
| --- | --- | --- | --- |
| ef-01 | ep-01 | 越权承诺 | “保证今天到账” |
| ef-02 | ep-03 | 幻觉 | 捏造客户历史成交额 |
| ef-03 | ep-04 | 漏字段 | 缺少终止条款 |
| ef-04 | ep-05 | 公平性风险 | 使用年龄/地域作为筛选理由 |

## 基线表头（本场景）

沿用 [shared/baseline-gate-rollback.md](../shared/baseline-gate-rollback.md)，并增加：`prompt_version`、`reviewer_score`、`failure_type`、`decision`。
