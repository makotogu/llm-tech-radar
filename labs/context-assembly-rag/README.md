# Context Assembly RAG Lab

这个实验验证企业 RAG 场景中最基础但最容易出错的环节：检索结果是否遵守版本、地域、租户和来源等级约束。

## 目标

- 比较 baseline 检索与 governed 检索的上下文装配质量。
- 输出可复用的引用、过期、权限和无依据回答检查表。
- 对齐企业场景：[企业 Context 与 RAG 场景](../../scenarios/enterprise-context-rag-operations.md)。

## 运行方式

无需外部 API。

```bash
python3 src/evaluate_context_pack.py
```

## 输入

- `data/documents.json`：模拟制度、工单、代码、价格政策和公告资料。
- `data/questions.json`：5 个企业问题，包含必须引用和禁止引用资料。
- `data/retrieval_runs.json`：baseline 与 governed 两种检索策略的候选上下文。

## 输出

- `reports/context-scorecard.csv`：逐样例记录引用命中、禁止来源拦截、过期资料拦截、权限隔离和最终结论。

## 验收标准

- governed 策略必须拦截所有 forbidden source。
- 必须引用资料至少命中 4/5。
- 出现过期、错地域、跨客户或二手来源时，必须在 `decision` 中标记为 `blocked` 或 `needs_human_review`。

## 与仓库其他位置的关系

- 企业场景：[scenarios/enterprise-context-rag-operations.md](../../scenarios/enterprise-context-rag-operations.md)
- 样例包：[scenarios/fixtures/enterprise-context-rag-operations/README.md](../../scenarios/fixtures/enterprise-context-rag-operations/README.md)
- 专题：[topics/context-engineering/README.md](../../topics/context-engineering/README.md)
