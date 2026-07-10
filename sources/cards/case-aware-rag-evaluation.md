# 资料卡片

- 标题：Case-Aware LLM-as-a-Judge Evaluation for Enterprise-Scale RAG Systems
- 作者：Mukul Chhabra、Luigi Medrano、Arush Verma
- 类型：论文 / 企业 RAG 评测方法
- 发布时间：2026-02-23
- 核验日期：2026-07-10
- 链接：https://arxiv.org/abs/2602.20379
- 可信度：A（论文原文；方法仍需在本地数据上校准）
- 对应专题：Harness 工程、Context 工程
- 推荐阶段：进阶

## 一句话价值

这份资料把企业 RAG 评测从单轮问答扩展到 case-based workflow，更贴近技术支持、IT 运维和多轮处理场景。

## 方法与结果

- 方法面向技术支持和 IT 运维等多轮 case workflow，把错误码、版本和处理步骤纳入评测上下文。
- 框架逐轮评估八个运营维度，区分检索质量、grounding、答案效用、精度完整性以及 case/workflow 对齐。
- 严重度感知评分用于降低平均分膨胀，并让关键失败在报告中保持可见。
- 作者比较了两个 instruction-tuned 模型在长短 workflow 上的表现；论文说明该方法能暴露通用代理指标没有清晰呈现的取舍。

## 这份资料能支撑什么

- 可以支撑：多轮企业 RAG 不能只用单轮 QA 正确率评测。
- 可以支撑：评测输出需要保留 case、workflow step、严重度和失败类型。
- 不能直接支撑：LLM-as-a-judge 分数天然可靠或能替代人工标注。
- 不能直接支撑：论文的八个维度无需调整即可用于所有企业流程。

## 工程启发

- 可实践点：为 RAG 评测增加 case_id、workflow_step、severity、required_evidence 字段。
- 可评测点：case 识别准确率、workflow 对齐、部分解决率、严重失败数。
- 可复用模式：评测报告必须显示高风险失败，不只显示平均分。

## 迁移到仓库实践

- 专题：[Context 工程](../../topics/context-engineering/README.md)、[Harness 工程](../../topics/harness-engineering/README.md)
- 场景：[企业 Context 与 RAG](../../scenarios/enterprise-context-rag-operations.md)、[企业 Eval Harness](../../scenarios/enterprise-evaluation-harness.md)
- 实验：[Context Assembly RAG](../../labs/context-assembly-rag/README.md)、[Eval Harness](../../labs/eval-harness/README.md)

## 注意事项

- 适用边界：更适合多轮技术支持或运维工单，不一定适合简单 FAQ。
- 过时风险：LLM-as-judge 需要持续校准，不能替代人工抽检。
- 需要二次核验的点：本企业是否有足够历史 case 和人工标注样例。
- 复核建议：先用人工双标样例校准 judge，再决定哪些维度可以自动化回归。
