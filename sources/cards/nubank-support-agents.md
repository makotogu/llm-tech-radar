# 资料卡片

- 标题：Building Customer Support AI Agents at 100M-User Scale
- 作者：Aman Gupta 等 11 位作者
- 类型：论文 / 生产案例
- 发布时间：2026-06-07
- 最新版本：v2，2026-06-13
- 核验日期：2026-07-10
- 链接：https://arxiv.org/abs/2606.08867
- 可信度：A/B（论文原文与生产案例；业务指标来自单一组织）
- 对应专题：Agent 工程、Harness 工程、Context 工程
- 推荐阶段：进阶

## 一句话价值

展示大规模客服 Agent 如何把上下文、人工迭代、LLM judge 和线上指标放进同一套运营系统，而不是只演示单次对话效果。

## 系统范围与结果

- 论文描述 Nubank 面向 1 亿以上用户构建客服 Agent 的统一框架，连接上下文工程、人工 Prompt 迭代、LLM judge 和线上验证。
- 结果覆盖卡片配送、债务管理、额度支持、卡片管理和产品解释五类生产部署。
- 卡片配送部署的 A/B 测试报告 AI transactional NPS 提升 37 个百分点、自助服务率提升 29 个百分点；这些数字只属于该部署和基线。
- 论文强调离线模拟指标与线上结果的相关性，但并不意味着所有离线指标都会预测生产收益。

## 这份资料能支撑什么

- 可以支撑：生产 Agent 需要离线评测、人工校准和线上业务指标三条证据链。
- 可以支撑：评测流水线质量会直接影响迭代速度。
- 不能直接支撑：客服 Agent 在任何企业都能获得相同 NPS 或自助率提升。
- 不能直接支撑：LLM judge 可以脱离人工一致性检查独立运行。

## 工程启发

- 可实践点：为企业客服试点建立“样例集 + 引用要求 + 升级条件 + 线上差评回流”。
- 可评测点：一次解决率、升级召回、幻觉率、人工一致率。
- 可复用模式：离线回归集与线上反馈闭环共用失败标签。

## 迁移到仓库实践

- 专题：[Agent 工程](../../topics/agent-engineering/README.md)、[Harness 工程](../../topics/harness-engineering/README.md)
- 场景：[企业 Agent 运营](../../scenarios/enterprise-agent-operations.md)、[企业 Eval Harness](../../scenarios/enterprise-evaluation-harness.md)
- 实验：[Eval Harness](../../labs/eval-harness/README.md)

## 注意事项

- 适用边界：面向大规模客服，不等于所有企业内部助手都要同等复杂度。
- 过时风险：具体模型与工具栈会变化，保留的是评测与运营结构。
- 需要二次核验的点：论文中的指标口径是否可映射到本企业工单系统字段。
- 复核建议：保留业务基线、样例覆盖和人工接管条件，不把论文中的业务提升数字设为内部 KPI。
