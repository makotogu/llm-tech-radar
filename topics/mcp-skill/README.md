# MCP + Skill

## 定义

MCP 是连接模型应用与外部工具、资源和数据源的开放协议。Skill 是把可复用工作流、领域知识、脚本和操作约定封装成可发现能力包的工程方式。两者共同解决“模型如何可靠调用外部能力”的问题。

## 要解决的问题

- 工具接入碎片化：每个应用都要重新集成数据库、文件、API 和服务。
- 能力不可复用：提示词、脚本、流程和领域知识散落在项目中。
- 权限边界不清：模型能调用什么、何时需要审批、如何审计不明确。

## 关键概念

| 概念 | 解释 | 需要避免的误解 |
| --- | --- | --- |
| MCP host/client/server | Host 承载模型体验，client 连接 server，server 暴露资源和工具 | 把 MCP 当成模型本身 |
| Tool | 可调用动作，通常有输入 schema 和执行结果 | 工具描述模糊导致误调用 |
| Resource | 可读取的外部上下文 | 资源不等于可信事实 |
| Skill | 可复用任务能力包 | Skill 不是普通 README，需要有清晰触发和执行约定 |
| Permission | 调用前后的权限控制和审计 | 只靠模型自觉遵守权限 |

## 演进时间线

| 时间 | 事件 | 判断 |
| --- | --- | --- |
| 2024 | MCP 进入开发者视野 | 工具连接开始标准化 |
| 2025-2026 | 多家 AI 产品和 IDE 开始支持 MCP 类能力 | 工具生态和权限治理成为差异点 |
| 2026 | Skill 形态在 Agent 工具链中更常见 | 复用单位从单个 tool 扩展到工作流能力 |

## 代表资料

| 类型 | 名称 | 链接 | 为什么重要 |
| --- | --- | --- | --- |
| 官方规范 | Model Context Protocol introduction | https://modelcontextprotocol.io/docs/getting-started/intro | MCP 官方概念入口 |
| 官方文档 | OpenAI MCP and Connectors | https://developers.openai.com/api/docs/guides/tools-connectors-mcp | OpenAI 生态中的 MCP 接入说明 |
| 官方文档 | OpenAI Skills | https://developers.openai.com/api/docs/guides/tools-skills | Skill 能力包的官方入口 |
| 开源组织 | Model Context Protocol GitHub organization | https://github.com/modelcontextprotocol | SDK、规范和示例代码入口 |

## 内容摘取

- MCP 的价值在于把外部工具和资源暴露成标准化接口，让不同 Host 能以相似方式发现和调用能力。
- Tool 需要清楚的输入 schema、能力描述、返回结构和失败语义；描述越模糊，模型越容易误调用。
- Resource 负责提供可读上下文，但资源内容仍然需要可信度、权限和来源标记。
- Skill 是比单个工具更大的复用单位，可以封装流程、领域约定、脚本、模板和检查清单。
- 权限控制不能只靠提示词，敏感操作需要运行时审批、审计日志和最小权限设计。
- MCP 与 Skill 最适合沉淀“重复出现、步骤明确、可以审计”的工作流。

## 场景与用途

| 场景 | 用途说明 | 重点产物 |
| --- | --- | --- |
| 内部知识库接入 | 让模型读取公司文档、规范、FAQ 和项目资料 | Resource 清单、权限说明、引用规则 |
| Issue/PR 工作流 | 查询 Issue、读取 PR、整理 review 意见或生成变更摘要 | Tool schema、审计日志、失败处理 |
| CI/CD 辅助 | 查询构建状态、读取日志、定位失败、生成修复建议 | 只读工具、日志摘要、人工确认点 |
| 数据查询助手 | 通过受控工具查询指标、表结构或业务数据 | 查询模板、脱敏规则、权限边界 |
| 文档生产 Skill | 封装报告、周报、设计文档、复盘模板和检查流程 | Skill 触发规则、模板、验收清单 |
| 代码审查 Skill | 复用代码 review 规则、风险分类和输出格式 | 评审 rubric、示例、输出合同 |
| 多客户端复用 | 在 IDE、桌面助手、网页 Agent 中复用同一能力 | Server 配置、版本策略、兼容约定 |
| 审批流工具接入 | 将请假、采购、报销等审批动作暴露为受控工具 | 工具 schema、审批状态、审计日志 |
| 设计系统 Skill | 封装组件规范、文案规则、可访问性检查和截图验收 | 组件清单、检查规则、验收报告 |
| 安全扫描工具链 | 接入 SAST、依赖漏洞和密钥扫描结果，生成修复建议 | 扫描结果、风险等级、修复清单 |
| 数据同步运维 Skill | 固化跨系统数据同步检查、补偿和回滚流程 | Runbook、确认点、回滚步骤 |

## 边界与风险

- MCP 解决连接标准，不自动解决工具安全和数据治理。
- Tool schema 和描述质量决定模型能否正确调用。
- Skill 过宽会变成不可维护的大包，过窄则失去复用价值。

## 最小实践场景

- 实验目标：把一个重复任务拆成 MCP 工具和 Skill 说明，验证模型能正确发现、选择和调用能力。
- 实验材料：准备 2 个只读工具、1 个需要确认的写操作工具、1 份资源文档和 3 个任务样例。
- 实验步骤：定义工具 schema；写清工具描述和权限；编写 Skill 触发条件；执行样例任务；记录调用顺序和结果。
- 记录方式：保存工具注册清单、输入参数、返回结果、审批记录、失败样例和最终产物。
- 验收标准：工具可发现、参数明确、敏感操作需要确认、调用可审计；至少 3 个样例中没有误用高风险工具。

企业试点入口：[scenarios/enterprise-mcp-tool-operations.md](../../scenarios/enterprise-mcp-tool-operations.md)
基础练习入口：[scenarios/mcp-skill-tool-workflow.md](../../scenarios/mcp-skill-tool-workflow.md)
方案集入口：[scenarios/enterprise-practice-playbook.md](../../scenarios/enterprise-practice-playbook.md)

## 证据链与当前判断

| 证据 | 支撑的判断 | 边界 |
| --- | --- | --- |
| [MCP Introduction](https://modelcontextprotocol.io/docs/getting-started/intro) | MCP 统一客户端、服务端、工具和资源的连接模型 | 连接标准不等于业务工作流标准 |
| [MCP Security Best Practices](../../sources/cards/mcp-security-best-practices.md) | 授权、凭证、会话和本地服务都属于信任边界 | 必须结合具体 IAM 与网络架构 |
| [OWASP LLM Top 10](../../sources/cards/owasp-llm-top10.md) | 工具越权、注入和供应链风险需要进入上线门禁 | 风险清单不能替代威胁建模 |

当前判断：Tool 负责单一可审计能力，Skill 负责编排和验收，MCP 负责连接协议；三者不应混成一个不可解释的大工具。当前有 [基础练习场景](../../scenarios/mcp-skill-tool-workflow.md)，但还没有可运行 Lab；缺口是实现两个只读工具、一个审批写工具和完整审计记录。

## 后续追踪项

- MCP server registry、远程 MCP、安全 tunnel 的发展。
- Skill 的文件结构、触发规则和版本管理方式。
- 工具投毒、越权调用、数据外泄的防护模式。
