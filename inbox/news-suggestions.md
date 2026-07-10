# 新闻建议收件箱

这里记录人提供的 LLM 新闻建议。收件箱只负责保留线索和处理状态，不直接产出结论；有价值的内容需要沉淀到 `sources/`、`topics/`、`scenarios/` 或 `labs/`。

## 处理状态

- `待核验`：已收到建议，但还没有确认来源和重要性。
- `已沉淀`：已经进入资料索引、专题、实践场景或实验。
- `待补资料`：方向有价值，但缺少一手来源或关键上下文。
- `暂不收录`：当前不符合仓库主题、可信度不足或价值不明确。
- `持续追踪`：需要等待后续发布、实践反馈或更多证据。

## 建议列表

| 标题 | 链接 | 建议人/来源 | 建议理由 | 可信度 | 对应专题 | 状态 | 处理动作 | 沉淀位置 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LLM 工程主线整理 | 当前仓库首版整理 | 人工初始化 | 建立 Prompt、Context、MCP/Skill、Agent、Harness、Loop 的初始沉淀框架 | B | 全部主线 | 已沉淀 | 已拆分为专题、资料索引和实践场景 | `topics/`、`sources/README.md`、`scenarios/` |
| Nubank 大规模客服 Agent 案例 | https://arxiv.org/abs/2606.08867 | 人工建议 / 论文原文 | 案例同时提供上下文、人工迭代、LLM judge、五类生产部署和线上业务指标 | A | Agent、Harness、Context | 已沉淀 | 核验论文版本和指标边界，补证据卡并映射场景与实验 | [证据卡](../sources/cards/nubank-support-agents.md)、[Agent 专题](../topics/agent-engineering/README.md)、[企业 Agent 场景](../scenarios/enterprise-agent-operations.md)、[Eval Lab](../labs/eval-harness/README.md) |
| Case-aware 企业 RAG 评测 | https://arxiv.org/abs/2602.20379 | 人工建议 / 论文原文 | 单轮 QA 指标无法覆盖 case、workflow 和严重失败，需要验证可迁移的评测结构 | A | Context、Harness | 已沉淀 | 核验八维评测、严重度评分和适用边界，接入 RAG 场景与两个 Lab | [证据卡](../sources/cards/case-aware-rag-evaluation.md)、[Harness 专题](../topics/harness-engineering/README.md)、[企业 Eval 场景](../scenarios/enterprise-evaluation-harness.md)、[Context Lab](../labs/context-assembly-rag/README.md) |
| GitHub Copilot 提效对照实验 | https://arxiv.org/abs/2302.06590 | 人工建议 / 论文原文 | 为“效率提升”提供可复核的受控实验设计，同时暴露外推边界 | A | Prompt、Harness | 已沉淀 | 核验实验任务和 55.8% 结果范围，转成内部试点评测结构 | [证据卡](../sources/cards/github-copilot-productivity.md)、[Prompt 专题](../topics/prompt-engineering/README.md)、[企业 Prompt 场景](../scenarios/enterprise-prompt-operations.md) |

## 待处理队列

| 线索 | 当前状态 | 卡点 | 下一步 |
| --- | --- | --- | --- |
| Anthropic Agent eval 工程经验 | 待核验 | 需要区分厂商工程经验、可重复方法和产品相关建议 | 从 [漏收候选](../gaps/missed-news.md) 核验后决定是否建立证据卡 |
