# 资料卡片

- 标题：OWASP Top 10 for LLM Applications
- 类型：官方项目
- 发布时间：持续更新
- 核验日期：2026-07-10
- 链接：https://owasp.org/www-project-top-10-for-large-language-model-applications/
- 维护者：OWASP GenAI Security Project
- 可信度：A（开放安全项目；具体控制仍需结合本地威胁模型）
- 对应专题：治理/安全、MCP + Skill、Prompt 工程
- 推荐阶段：入门到进阶

## 一句话价值

为企业 LLM 上线提供可勾选的风险清单，覆盖提示注入、敏感信息泄露、过度代理和供应链风险。

## 框架用途

- Top 10 用于整理 LLM 应用中的主要风险类别，帮助团队建立威胁建模和上线检查入口。
- 清单覆盖提示注入、敏感信息泄露、供应链风险、输出处理和 excessive agency 等问题。
- 清单描述风险类别和缓解方向，不提供可直接复制的完整企业控制矩阵。

## 这份资料能支撑什么

- 可以支撑：提示注入、工具权限、输出处理和供应链必须进入上线门禁。
- 可以支撑：业务正确率通过不能代表系统达到安全上线条件。
- 不能直接支撑：完成 Top 10 勾选就等同于通过安全审计。
- 不能直接支撑：所有风险在不同业务、数据和工具权限下具有相同优先级。

## 工程启发

- 可实践点：把 OWASP 条目映射到企业治理场景的上线门禁表。
- 可评测点：注入拦截率、越权拦截率、敏感字段泄露抽检。
- 可复用模式：每个试点立项时附一张风险登记表。

## 迁移到仓库实践

- 专题：[Prompt 工程](../../topics/prompt-engineering/README.md)、[MCP + Skill](../../topics/mcp-skill/README.md)
- 场景：[企业治理与安全](../../scenarios/enterprise-governance-safety.md)、[企业 MCP 与工具接入](../../scenarios/enterprise-mcp-tool-operations.md)
- 门禁：[基线、门禁与回滚](../../scenarios/fixtures/shared/baseline-gate-rollback.md)

## 注意事项

- 适用边界：清单是起点，不能替代具体威胁建模。
- 过时风险：条目会随生态更新，需定期回看官方页面。
- 需要二次核验的点：本企业实际暴露面（工具、数据、客户沟通）对应哪些条目。
- 复核建议：按具体数据流和工具动作做威胁建模，并为每项风险记录 owner、验证方式和残余风险。
