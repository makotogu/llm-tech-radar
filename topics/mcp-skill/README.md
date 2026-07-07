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

## 适用场景

- 给 Agent 接入公司内部数据库、知识库、Issue 系统、CI 系统。
- 把重复任务封装成 Skill，例如代码审查、文档生成、评测报告。
- 在多模型、多客户端环境中复用同一组工具和资源。

## 边界与风险

- MCP 解决连接标准，不自动解决工具安全和数据治理。
- Tool schema 和描述质量决定模型能否正确调用。
- Skill 过宽会变成不可维护的大包，过窄则失去复用价值。

## 最小实践场景

- 输入：一个需要查询资料并调用内部工具的任务。
- 输出：工具注册清单、权限边界、调用记录和最终结果。
- 流程：定义工具、声明权限、暴露资源、模型选择调用、记录 trace。
- 验收标准：工具可发现、参数明确、敏感操作需要确认、调用可审计。

实践入口：[scenarios/mcp-skill-tool-workflow.md](../../scenarios/mcp-skill-tool-workflow.md)

## 后续追踪项

- MCP server registry、远程 MCP、安全 tunnel 的发展。
- Skill 的文件结构、触发规则和版本管理方式。
- 工具投毒、越权调用、数据外泄的防护模式。
