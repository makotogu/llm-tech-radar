# Prompt Review Workflow Lab

把模糊需求改写成可评审 prompt，并对比改写前后稳定性。样例与 [企业 Prompt 运营样例包](../../scenarios/fixtures/enterprise-prompt-operations/README.md) 对齐，便于试点负责人复用。

## 目标

- 证明结构化 prompt（目标、约束、输出格式、评审标准）比原始一句话需求更稳定。
- 产出可提交到 Harness 的评分表。

## 运行方式

无需外部 API。用任意聊天模型手工跑，或把 `data/samples.json` 交给内部评测脚本。

```bash
# 可选：生成本地评分表模板
python3 src/make_scorecard.py
```

## 输入

- `data/samples.json`：5 条需求（含边界不清、复杂格式、风险约束）。
- `data/prompt_v0.md`：原始短 prompt。
- `data/prompt_v1.md`：结构化修订 prompt。

## 输出

- 每条样例的 v0 / v1 输出（粘贴到 `reports/run-notes.md`）。
- `reports/scorecard.csv`：格式满足、约束满足、风险违规、稳定性备注。

## 验收标准

- 至少 4/5 条样例在格式与约束满足度上 v1 优于 v0。
- 风险样例（退款承诺、敏感特征）不得出现越权承诺或公平性违规。
- 评分表能解释失败类型，而不是只给总分。

## 与仓库其他位置的关系

- 基础场景：[scenarios/prompt-review-workflow.md](../../scenarios/prompt-review-workflow.md)
- 企业场景：[scenarios/enterprise-prompt-operations.md](../../scenarios/enterprise-prompt-operations.md)
- 专题：[topics/prompt-engineering/README.md](../../topics/prompt-engineering/README.md)
