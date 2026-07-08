# 企业 MCP 与工具接入场景

MCP 和工具调用的核心问题不是“能不能连上系统”，而是权限、审计、审批、失败恢复和最小暴露面。

## 适用边界

- 适合：工单系统、CRM、指标系统、文档系统、发布系统、只读数据查询。
- 不适合：没有权限模型、没有审计日志、工具副作用不可逆的生产操作。
- 关键判断：每个工具是否能解释“谁、在什么上下文、因为什么理由调用了什么”。

## 资料地址

| 资料 | 地址 | 用途 |
| --- | --- | --- |
| MCP introduction | https://modelcontextprotocol.io/docs/getting-started/intro | 理解 MCP 作为 AI 应用连接外部系统的开放标准 |
| OpenAI Using tools | https://developers.openai.com/api/docs/guides/tools | 参考工具、函数调用、MCP、Skills 等能力的统一入口 |
| OpenAI MCP and Connectors | https://developers.openai.com/api/docs/guides/tools-connectors-mcp | 参考远程 MCP 和连接器接入方式 |
| OWASP Top 10 for LLM Applications | https://owasp.org/www-project-top-10-for-large-language-model-applications/ | 作为工具越权、提示注入、敏感信息泄露的风险清单 |

## 场景 1：工单系统 MCP 接入

| 项目 | 操作方案 |
| --- | --- |
| 工具范围 | search_ticket、get_ticket、append_comment、suggest_status_change |
| 权限设计 | 查询按用户所属团队过滤；状态变更只生成建议，不直接执行 |
| 数据口径 | 工具调用成功率、参数错误率、越权拦截次数、人工审批覆盖率、回滚次数 |
| 验收方式 | 用 50 条历史工单模拟查询、评论和状态建议，检查权限和审计日志 |
| 资料支撑 | MCP introduction + OpenAI Using tools |
| 风险控制 | 状态变更必须记录模型建议、人工确认人和变更前后状态 |

## 场景 2：CRM 客户资料读取工具

| 项目 | 操作方案 |
| --- | --- |
| 工具范围 | get_account_summary、list_recent_interactions、get_contract_summary |
| 权限设计 | 按销售归属、客户等级和字段敏感度控制；默认只读 |
| 数据口径 | 字段命中率、无权限访问拦截率、敏感字段泄露次数、销售查资料时长 |
| 验收方式 | 设计越权访问样例，包括跨区域客户、高敏合同、离职销售账号 |
| 资料支撑 | OWASP Top 10 for LLM Applications |
| 风险控制 | 私密字段脱敏；所有客户资料访问进入审计日志 |

## 场景 3：指标查询 Skill

| 项目 | 操作方案 |
| --- | --- |
| 工具范围 | query_metric、explain_metric_definition、render_chart |
| 权限设计 | 只读数据源；指标口径由数据团队维护；高成本查询限流 |
| 数据口径 | 查询复用率、口径一致率、SQL 审核通过率、查询成本、临时取数等待时间 |
| 验收方式 | 选 GMV、活跃用户、留存、转化率等指标做口径一致性回放 |
| 资料支撑 | OpenAI Using tools + 企业内部指标字典 |
| 风险控制 | 禁止自由拼接生产 SQL；敏感字段脱敏；超过成本预算停止 |

## 场景 4：发布检查 Skill

| 项目 | 操作方案 |
| --- | --- |
| 工具范围 | read_ci_status、read_change_ticket、read_monitoring_dashboard、check_rollback_doc |
| 权限设计 | 发布前只读检查；阻断条件由发布负责人确认 |
| 数据口径 | 检查项覆盖率、失败阻断率、遗漏检查项数量、回滚资料完整性 |
| 验收方式 | 用过去 10 次发布记录回放，检查模型是否能发现缺失变更单、失败 CI、缺少回滚方案 |
| 资料支撑 | OpenAI Using tools |
| 风险控制 | 模型不能绕过发布门禁；高风险发布必须人工审批 |

## 场景 5：文档生成 Skill

| 项目 | 操作方案 |
| --- | --- |
| 工具范围 | load_template、fetch_project_status、fetch_issue_summary、render_doc |
| 权限设计 | 只读取项目数据和模板；生成文档必须标记来源和未确认假设 |
| 数据口径 | 文档准备时长、模板字段完整率、人工修改比例、错误引用次数 |
| 验收方式 | 让项目经理用 4 周真实周报回放，比较人工周报和生成初稿 |
| 资料支撑 | OpenAI Skills：https://developers.openai.com/api/docs/guides/tools-skills |
| 风险控制 | 文档不能自动发送给客户；外部材料必须人工确认 |

## 最小工具审计表

| 字段 | 说明 |
| --- | --- |
| run_id | 一次任务执行 ID |
| user_id | 发起用户 |
| tool_name | 工具名称 |
| tool_scope | 只读、建议、写入、审批后写入 |
| input_args | 工具参数，敏感字段脱敏 |
| policy_decision | 允许、拒绝、需要审批 |
| result_summary | 工具返回摘要 |
| human_approval | 审批人和审批时间 |
| failure_type | 权限失败、参数失败、系统失败、模型误判 |
