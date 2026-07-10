# 资料卡片

- 标题：The Impact of AI on Developer Productivity: Evidence from GitHub Copilot
- 作者：Sida Peng、Eirini Kalliamvakou、Peter Cihon、Mert Demirer
- 类型：论文 / 对照实验
- 发布时间：2023-02-13
- 核验日期：2026-07-10
- 链接：https://arxiv.org/abs/2302.06590
- 可信度：A（论文原文；结论适用范围受实验任务限制）
- 对应专题：Prompt 工程、Harness 工程、Agent 工程
- 推荐阶段：入门到进阶

## 一句话价值

这是一份少见的带对照实验设计的研发提效资料，适合提醒企业不要只用主观体感判断 LLM 工具价值。

## 研究设计与结果

- 研究把受试开发者分为可使用和不可使用 GitHub Copilot 的两组，要求尽快完成同一个 JavaScript HTTP server 任务。
- 论文摘要报告，使用 Copilot 的实验组完成任务速度比对照组快 55.8%。
- 研究观察到不同人群间存在异质性效果，但没有证明所有语言、仓库规模和研发阶段都能获得同样收益。

## 这份资料能支撑什么

- 可以支撑：研发效率试点应该使用固定任务、对照组和可验证的完成条件。
- 可以支撑：完成时间之外，还要保留测试结果和人工复核，防止“更快”掩盖质量下降。
- 不能直接支撑：企业复杂代码库的长期交付效率必然提升 55.8%。
- 不能直接支撑：工具对架构设计、线上缺陷和团队协作的影响。

## 工程启发

- 可实践点：为研发助手试点建立对照组、固定任务、完成时间、正确性和复核记录。
- 可评测点：任务完成时间、测试通过率、人工修改比例、缺陷复开率。
- 可复用模式：把“效率提升”拆成质量、速度、返工和风险四个维度。

## 迁移到仓库实践

- 专题：[Prompt 工程](../../topics/prompt-engineering/README.md)、[Harness 工程](../../topics/harness-engineering/README.md)
- 场景：[企业 Prompt 运营](../../scenarios/enterprise-prompt-operations.md)、[企业 Eval Harness](../../scenarios/enterprise-evaluation-harness.md)
- 实验：[Prompt Review Workflow](../../labs/prompt-review-workflow/README.md)、[Eval Harness](../../labs/eval-harness/README.md)

## 注意事项

- 适用边界：任务是受控编程实验，不代表复杂企业代码库里的长期效果。
- 过时风险：工具能力和模型能力已变化，但对照实验方法仍有价值。
- 需要二次核验的点：企业内部任务难度、代码审查标准和缺陷率是否可比。
- 复核建议：在内部样例中按任务类型、开发经验和代码库熟悉度分层，不复用论文中的单一提升比例作为目标值。
