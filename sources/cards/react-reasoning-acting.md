# 资料卡片

- 标题：ReAct: Synergizing Reasoning and Acting in Language Models
- 作者：Shunyu Yao、Jeffrey Zhao、Dian Yu 等
- 类型：论文 / Agent 方法
- 发布时间：2022-10-06
- 核验日期：2026-07-10
- 链接：https://arxiv.org/abs/2210.03629
- 可信度：A（论文原文；实验环境与生产 Agent 有明显差异）
- 对应专题：Agent 工程、Context 工程
- 推荐阶段：进阶

## 一句话价值

ReAct 给出了“推理轨迹与环境动作交错”的清晰范式，是理解 Agent 为什么需要观察、更新计划和保存 trace 的基础资料。

## 方法与结果

- 方法让模型交错生成 reasoning trace 和任务动作，通过外部知识源或环境获取新观察。
- 论文在 HotpotQA、FEVER、ALFWorld 和 WebShop 等任务上比较了 ReAct 与只推理或只行动的方法。
- 摘要报告 ReAct 在 ALFWorld 和 WebShop 上相对相关基线分别取得 34% 和 10% 的绝对成功率提升。

## 这份资料能支撑什么

- 可以支撑：Agent 的每一步需要围绕观察更新下一步动作，而不是一次生成完整计划后盲目执行。
- 可以支撑：trace 对调试计划更新和异常处理有价值。
- 不能直接支撑：公开 benchmark 的成功率可以外推到企业工具链。
- 不能直接支撑：暴露完整自然语言推理是生产可观察性的必要条件。

## 工程迁移

- 使用结构化的 `plan / action / observation / decision` 事件替代不可控的长推理文本。
- 为工具失败、空结果和权限拒绝定义显式恢复路径。
- 关联场景：[Agent 任务执行器](../../scenarios/agent-task-runner.md)、[企业 Agent 运营](../../scenarios/enterprise-agent-operations.md)

## 注意事项

- 生产 trace 应记录可审计决策和工具结果，不要求保存或展示模型私有推理。
- ReAct 是方法起点，不包含企业权限、回滚、成本预算和人工接管的完整实现。
