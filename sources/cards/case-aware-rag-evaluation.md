# 资料卡片

- 标题：Case-Aware LLM-as-a-Judge Evaluation for Enterprise-Scale RAG Systems
- 类型：论文 / 企业 RAG 评测方法
- 发布时间：2026-02-23
- 核验日期：2026-07-09
- 链接：https://arxiv.org/abs/2602.20379
- 对应专题：Harness 工程、Context 工程
- 推荐阶段：进阶

## 一句话价值

这份资料把企业 RAG 评测从单轮问答扩展到 case-based workflow，更贴近技术支持、IT 运维和多轮处理场景。

## 核心内容

- 要点 1：企业 RAG 常需要识别 case、版本、错误码、工单状态和处理流程。
- 要点 2：论文提出按检索质量、grounding、答案效用、case/workflow 对齐等维度评估。
- 要点 3：severity-aware scoring 可减少平均分掩盖关键失败的问题。

## 工程启发

- 可实践点：为 RAG 评测增加 case_id、workflow_step、severity、required_evidence 字段。
- 可评测点：case 识别准确率、workflow 对齐、部分解决率、严重失败数。
- 可复用模式：评测报告必须显示高风险失败，不只显示平均分。

## 注意事项

- 适用边界：更适合多轮技术支持或运维工单，不一定适合简单 FAQ。
- 过时风险：LLM-as-judge 需要持续校准，不能替代人工抽检。
- 需要二次核验的点：本企业是否有足够历史 case 和人工标注样例。
