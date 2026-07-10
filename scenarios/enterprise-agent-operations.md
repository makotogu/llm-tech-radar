# 企业 Agent 运营场景

企业 Agent 不是“让模型自动干活”，而是把多步任务拆成可观察、可接管、可评测、可回滚的执行流程。

## 适用边界

- 适合：缺陷修复、运维诊断、数据分析、知识库维护、客户成功行动计划。
- 不适合：目标不明确、工具权限不清、失败不可恢复、没有人工审批的生产变更。
- 关键判断：Agent 每一步是否能留下可审计 trace。

## 资料地址

| 资料 | 地址 | 用途 |
| --- | --- | --- |
| OpenAI Agents SDK | https://developers.openai.com/api/docs/guides/agents | 参考 Agent 定义、工具、状态、guardrails、trace 和评测入口 |
| ReAct paper | https://arxiv.org/abs/2210.03629 | 参考 reasoning 与 action 交替的任务执行范式 |
| Reflexion paper | https://arxiv.org/abs/2303.11366 | 参考失败反馈和后续尝试改进 |
| OWASP Top 10 for LLM Applications | https://owasp.org/www-project-top-10-for-large-language-model-applications/ | 约束 excessive agency、数据泄露、提示注入等风险 |
| ReAct 证据卡 | ../sources/cards/react-reasoning-acting.md | 把论文方法转换为结构化 action、observation 和恢复记录 |
| Nubank 客服 Agent 证据卡 | ../sources/cards/nubank-support-agents.md | 区分生产案例事实、可迁移结构和不可外推业务指标 |

## 场景 1：缺陷修复 Agent

| 项目 | 操作方案 |
| --- | --- |
| 输入 | Bug 描述、日志、相关代码、复现步骤、测试命令 |
| Agent 流程 | 生成修复计划，定位文件，修改分支，运行测试，记录失败，最多两轮修复 |
| 数据口径 | 平均修复时长、测试通过率、人工修改比例、缺陷复开率、引入新失败数量 |
| 验收方式 | 选择 20 个历史低中风险缺陷做离线回放，不允许直接合并 |
| 资料支撑 | OpenAI Agents SDK + ReAct paper |
| 风险控制 | 只能在分支提交；安全、支付、权限模块必须人工 review |

## 场景 2：运维诊断 Agent

| 项目 | 操作方案 |
| --- | --- |
| 输入 | 告警、日志、指标、最近变更、运行手册、依赖拓扑 |
| Agent 流程 | 输出假设，读取证据，排除假设，给出处置建议和升级条件 |
| 数据口径 | MTTA、MTTR、定位准确率、建议采纳率、误报率、人工接管率 |
| 验收方式 | 用历史事故复盘回放，检查是否能定位到真实根因或正确升级 |
| 资料支撑 | ReAct paper + OpenAI Agents SDK |
| 风险控制 | 重启、扩容、回滚等生产动作只生成建议，执行需要人工确认 |

## 场景 3：数据分析 Agent

| 项目 | 操作方案 |
| --- | --- |
| 输入 | 业务问题、指标字典、授权数据源、历史报表、分析模板 |
| Agent 流程 | 生成分析计划，查询数据，画图，解释指标变化，列出假设和限制 |
| 数据口径 | 查询可复现率、口径错误率、结论采纳率、返工率、交付周期 |
| 验收方式 | 每个结论必须能追溯到查询、数据时间窗和指标口径 |
| 资料支撑 | OpenAI Using tools：https://developers.openai.com/api/docs/guides/tools |
| 风险控制 | 生产库只读；敏感字段脱敏；结论不得越过数据证据 |

## 场景 4：客户成功 Agent

| 项目 | 操作方案 |
| --- | --- |
| 输入 | 客户使用数据、工单、续约时间、合同摘要、客户沟通记录 |
| Agent 流程 | 生成健康度解释、风险原因、下一步行动、需要人工确认的信息 |
| 数据口径 | 风险识别准确率、客户经理准备时长、续约风险发现率、行动项完成率 |
| 验收方式 | 对过去续约客户回放，比较模型风险判断与实际流失或续约结果 |
| 资料支撑 | Nubank customer support agents paper：https://arxiv.org/abs/2606.08867 |
| 风险控制 | 不自动发送客户沟通；高价值客户行动计划必须经理确认 |

## 场景 5：知识库维护 Agent

| 项目 | 操作方案 |
| --- | --- |
| 输入 | 新增文档、重复工单、搜索无结果、用户差评、过期制度提醒 |
| Agent 流程 | 识别知识缺口，生成更新建议，提出 PR，附来源和修改原因 |
| 数据口径 | 更新建议采纳率、过期条目下降、重复咨询下降、错误更新回滚次数 |
| 验收方式 | PR 需要知识库 owner 审核，合并后进入回归问答集 |
| 资料支撑 | Reflexion paper + OpenAI Agents SDK |
| 风险控制 | 不直接覆盖正式文档；引用和变更原因必须完整 |

## Agent trace 最小字段

| 字段 | 说明 |
| --- | --- |
| run_id | Agent 执行 ID |
| goal | 本次任务目标 |
| plan | 初始计划 |
| step | 当前步骤 |
| tool_calls | 工具调用和结果 |
| evidence | 支撑结论的证据 |
| human_checkpoint | 人工确认点 |
| failure | 失败原因 |
| final_decision | 完成、转人工、回滚、继续追踪 |

## 样例包与门禁

- 最小样例包：[fixtures/enterprise-agent-operations/README.md](fixtures/enterprise-agent-operations/README.md)
- 基线 / 门禁 / 回滚：[fixtures/shared/baseline-gate-rollback.md](fixtures/shared/baseline-gate-rollback.md)
