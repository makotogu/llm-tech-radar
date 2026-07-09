# 企业 Prompt 运营场景

这份文档把 Prompt 工程从“写提示词”提升为企业可运营流程：有需求入口、样例集、版本、评审、灰度和回归数据。

## 适用边界

- 适合：客服话术、销售邮件、合同摘要、制度问答、报销说明、HR 筛选说明。
- 不适合：没有样例集、没有质量负责人、无法人工复核的高风险自动决策。
- 关键判断：Prompt 是否能被版本化、评测和回滚。

## 资料地址

| 资料 | 地址 | 用途 |
| --- | --- | --- |
| OpenAI Prompt engineering | https://developers.openai.com/api/docs/guides/prompt-engineering | 作为提示词结构、示例、格式约束和模型行为调优的基础参考 |
| Anthropic Prompt engineering overview | https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview | 用于补充企业场景里的明确指令、示例、角色和不确定性处理 |
| OpenAI Evals cookbook | https://developers.openai.com/cookbook/examples/evaluation/getting_started_with_openai_evals | 把 Prompt 改动纳入可重复评测，而不是靠主观体验判断 |
| GitHub Copilot productivity paper | https://arxiv.org/abs/2302.06590 | 作为研发场景里“效率提升必须实测”的案例材料 |
| GitHub Copilot productivity card | ../sources/cards/github-copilot-productivity.md | 用资料卡方式沉淀实验方法、指标边界和注意事项 |

## 场景 1：客服答复标准化

| 项目 | 操作方案 |
| --- | --- |
| 业务流程 | 从历史工单抽取高频问题，按退款、物流、账户、投诉、升级五类建立样例集 |
| Prompt 结构 | 固定为“问题分类、可答内容、依据引用、禁止承诺、升级条件、最终答复” |
| 数据口径 | 记录人工平均处理时长、一次解决率、质检通过率、升级召回率、错误承诺次数 |
| 验收方式 | 每次 Prompt 变更跑 100-300 条脱敏工单，质检通过率不低于人工基线，错误承诺为 0 |
| 资料支撑 | OpenAI Prompt engineering + OpenAI Evals cookbook |
| 风险控制 | 投诉、赔付、法律风险、情绪激烈的工单必须转人工 |

## 场景 2：销售邮件生成

| 项目 | 操作方案 |
| --- | --- |
| 业务流程 | CRM 中选择客户行业、阶段、上一轮沟通记录和产品资料，生成邮件草稿 |
| Prompt 结构 | 固定为“客户背景、邮件目标、可引用事实、禁止使用内容、语气、行动按钮” |
| 数据口径 | 邮件撰写时长、销售修改比例、回复率、预约率、事实错误率 |
| 验收方式 | 先对 50-100 封历史邮件做离线重放，再进入单团队灰度 |
| 资料支撑 | Anthropic Prompt engineering overview + OpenAI Prompt engineering |
| 风险控制 | 禁止虚构案例、价格、折扣、交付周期和客户背书 |

## 场景 3：合同条款摘要

| 项目 | 操作方案 |
| --- | --- |
| 业务流程 | 对标准合同抽取付款、交付、违约、保密、终止、管辖等固定字段 |
| Prompt 结构 | 输出字段、原文引用、风险等级、缺失字段、需要法务确认的问题 |
| 数据口径 | 字段召回率、摘要准确率、法务复核时间、非标准条款标红率 |
| 验收方式 | 用历史已审合同建立 golden set，字段召回率和关键风险召回率单独统计 |
| 资料支撑 | OpenAI Evals cookbook，用于设计字段级和风险级评测 |
| 风险控制 | 不输出法律意见；非标准条款、金额异常、违约条款必须人工复核 |

## 场景 4：HR 简历初筛说明

| 项目 | 操作方案 |
| --- | --- |
| 业务流程 | 模型只生成岗位匹配证据和待确认问题，不给自动淘汰结论 |
| Prompt 结构 | 固定为“岗位要求、简历证据、缺口、待面试确认点、不能使用的敏感因素” |
| 数据口径 | 证据命中率、面试官认可率、复核一致率、公平性抽检结果 |
| 验收方式 | 对过去岗位样例离线回放，比较人工筛选记录和模型证据说明 |
| 资料支撑 | NIST AI Risk Management Framework：https://www.nist.gov/itl/ai-risk-management-framework |
| 风险控制 | 不使用年龄、性别、地域、婚育等敏感特征；保留人工决策 |

## 场景 5：财务报销说明生成

| 项目 | 操作方案 |
| --- | --- |
| 业务流程 | 根据报销制度和票据字段生成缺失材料、违规原因和补交建议 |
| Prompt 结构 | 固定为“制度条款、票据字段、缺失材料、退回理由、可补交动作” |
| 数据口径 | 退回率、二次提交通过率、审核时长、规则命中准确率 |
| 验收方式 | 先在只读模式生成说明，审核员确认后再展示给员工 |
| 资料支撑 | OpenAI Prompt engineering + 企业内部报销制度版本库 |
| 风险控制 | 金额异常、重复票据、高风险供应商走规则系统或人工审核 |

## 最小数据表

| 字段 | 说明 |
| --- | --- |
| prompt_version | Prompt 版本号，必须能回滚 |
| sample_id | 脱敏样例 ID |
| business_label | 工单、邮件、合同、简历、报销等业务标签 |
| expected_behavior | 人工定义的期望行为或字段 |
| model_output | 模型输出 |
| reviewer_score | 人工质检分 |
| failure_type | 幻觉、漏字段、错引用、越权承诺、语气问题、升级失败 |
| decision | 上线、灰度、继续观察、回滚 |

## 样例包与门禁

- 最小样例包：[fixtures/enterprise-prompt-operations/README.md](fixtures/enterprise-prompt-operations/README.md)
- 基线 / 门禁 / 回滚：[fixtures/shared/baseline-gate-rollback.md](fixtures/shared/baseline-gate-rollback.md)
- 可复现实验：[labs/prompt-review-workflow](../labs/prompt-review-workflow/)
