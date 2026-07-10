# 企业治理与安全场景

治理文档用于补齐企业落地时最容易被忽略的部分：权限、数据、审计、供应商风险和上线门禁。

## 适用边界

- 适合：任何会接入企业数据、工具、客户沟通或内部决策流的 LLM 系统。
- 不适合：只做个人学习、不接触真实数据、不进入业务流程的实验。
- 关键判断：上线前是否能说明数据来源、权限边界、失败责任和回滚路径。

## 资料地址

| 资料 | 地址 | 用途 |
| --- | --- | --- |
| OWASP Top 10 for LLM Applications | https://owasp.org/www-project-top-10-for-large-language-model-applications/ | 建立 LLM 应用安全风险清单 |
| NIST AI Risk Management Framework | https://www.nist.gov/itl/ai-risk-management-framework | 建立治理、测量、管理和风险沟通框架 |
| OpenAI Safety best practices | https://developers.openai.com/api/docs/guides/safety-best-practices | 参考安全检查、分层防护和上线前控制 |
| OpenAI Enterprise privacy | https://openai.com/enterprise-privacy/ | 作为供应商数据控制、访问控制、保留和合规承诺的核验入口之一，实际企业使用还需核验合同条款 |
| NIST AI 600-1 证据卡 | ../sources/cards/nist-ai-rmf-genai.md | 将生成式 AI 风险连接到组织责任、测量证据和处置流程 |
| OWASP LLM Top 10 证据卡 | ../sources/cards/owasp-llm-top10.md | 区分风险清单、具体威胁建模和安全审计 |
| MCP Security 证据卡 | ../sources/cards/mcp-security-best-practices.md | 补充工具授权、凭证流和本地 server 风险 |

## 场景 1：LLM 应用上线门禁

| 项目 | 操作方案 |
| --- | --- |
| 检查范围 | 数据来源、权限、提示注入、输出风险、人工接管、评测报告、回滚方案 |
| 门禁方式 | 低风险走清单审批，高风险走安全、法务、业务 owner 联合审批 |
| 数据口径 | 门禁覆盖率、阻断问题数、上线后回滚次数、未授权数据访问次数 |
| 验收方式 | 每个上线系统必须有风险登记表和评测报告 |
| 资料支撑 | OWASP Top 10 for LLM Applications + NIST AI RMF |
| 风险控制 | 没有评测和回滚方案不得上线 |

## 场景 2：提示注入防护

| 项目 | 操作方案 |
| --- | --- |
| 检查范围 | 用户输入、检索文档、工具返回、网页内容、邮件内容 |
| 防护方式 | 数据与指令分离，工具权限最小化，敏感动作审批，拒绝外部内容改写系统指令 |
| 数据口径 | 攻击样例通过率、越权工具调用拦截率、敏感信息泄露次数 |
| 验收方式 | 建立 prompt injection 红队样例集，上线前必须通过 |
| 资料支撑 | OWASP Top 10 for LLM Applications |
| 风险控制 | 高风险工具不暴露给未通过安全评测的 Agent |

## 场景 3：供应商与模型替换风险

| 项目 | 操作方案 |
| --- | --- |
| 检查范围 | 模型服务 SLA、数据保留、地区合规、价格、限流、模型退役和替换策略 |
| 防护方式 | 关键流程保留降级方案；高风险业务保留人工路径或备用模型 |
| 数据口径 | 供应商故障时长、降级触发次数、模型替换回归失败率、成本波动 |
| 验收方式 | 每季度做一次模型替换或供应商不可用演练 |
| 资料支撑 | NIST AI RMF |
| 风险控制 | 不能把关键业务完全绑定到单一供应商且无人工 fallback |

## 场景 4：敏感数据处理

| 项目 | 操作方案 |
| --- | --- |
| 检查范围 | 客户隐私、员工信息、合同、财务、源代码、访问日志 |
| 防护方式 | 数据分级、脱敏、最小必要上下文、访问审计、保留周期控制 |
| 数据口径 | 敏感字段泄露次数、越权访问拦截率、脱敏覆盖率、审计日志完整率 |
| 验收方式 | 选真实字段做脱敏回放，确认检索和输出都不泄露 |
| 资料支撑 | OWASP Top 10 for LLM Applications + 企业内部数据分类标准 |
| 风险控制 | 不允许将未脱敏高敏数据放入低权限模型上下文 |

## 场景 5：人工接管与责任归属

| 项目 | 操作方案 |
| --- | --- |
| 检查范围 | 哪些动作模型可建议，哪些动作必须人工确认，哪些动作禁止模型参与 |
| 防护方式 | 为退款、合同、招聘、生产变更、客户承诺等动作设置人工 checkpoint |
| 数据口径 | 人工接管率、误接管率、漏接管率、审批耗时、事故归因完整率 |
| 验收方式 | 通过事故演练检查系统能否停止、解释和转交人工 |
| 资料支撑 | NIST AI RMF + OpenAI Safety best practices |
| 风险控制 | 不允许模型成为无法追责的最终决策者 |

## 风险登记最小字段

| 字段 | 说明 |
| --- | --- |
| system_name | LLM 系统名称 |
| data_class | 数据分级 |
| user_group | 使用人群 |
| allowed_actions | 允许动作 |
| blocked_actions | 禁止动作 |
| approval_owner | 审批负责人 |
| eval_report | 上线前评测报告 |
| fallback | 降级或人工接管方案 |
| review_cycle | 复审周期 |

## 样例包与门禁

- 最小样例包：[fixtures/enterprise-governance-safety/README.md](fixtures/enterprise-governance-safety/README.md)
- 基线 / 门禁 / 回滚：[fixtures/shared/baseline-gate-rollback.md](fixtures/shared/baseline-gate-rollback.md)
