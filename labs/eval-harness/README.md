# Eval Harness Lab

这个实验把企业 Eval Harness 场景转成最小可运行评分流程：用固定样例比较 baseline 与 guarded 两个候选系统。

## 目标

- 建立统一样例、候选输出、评分字段和失败类型。
- 避免只看总分，单独暴露高风险样例失败。
- 对齐企业场景：[企业 Eval Harness 场景](../../scenarios/enterprise-evaluation-harness.md)。

## 运行方式

无需外部 API。

```bash
python3 src/score_eval_cases.py
```

## 输入

- `data/eval_cases.json`：客服回归、RAG 引用、工具调用、模型替换、LLM-as-judge 校准。
- `data/candidate_outputs.json`：两个候选系统的固定评测结果。

## 输出

- `reports/eval-scorecard.csv`：逐样例评分。
- `reports/eval-summary.csv`：按候选系统汇总质量、风险和高风险失败。

## 验收标准

- guarded 候选不能有高风险失败。
- 任一候选总分上升但高风险失败增加时，不允许推荐上线。
- 每个失败必须有 `failure_type`，不能只写“效果不好”。

## 与仓库其他位置的关系

- 企业场景：[scenarios/enterprise-evaluation-harness.md](../../scenarios/enterprise-evaluation-harness.md)
- 样例包：[scenarios/fixtures/enterprise-evaluation-harness/README.md](../../scenarios/fixtures/enterprise-evaluation-harness/README.md)
- 专题：[topics/harness-engineering/README.md](../../topics/harness-engineering/README.md)
