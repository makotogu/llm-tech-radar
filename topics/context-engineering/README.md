# Context 工程

## 定义

Context 工程是围绕“模型本次调用应该看见什么”进行设计的工程实践，包含上下文来源选择、检索、排序、压缩、缓存、引用、过期和安全隔离。

## 要解决的问题

- 信息缺失：模型没有任务所需事实、状态、历史或工具结果。
- 信息过载：上下文窗口被低价值内容占满，关键证据被稀释。
- 信息污染：用户输入、外部网页、工具结果和系统指令边界不清。

## 关键概念

| 概念 | 解释 | 需要避免的误解 |
| --- | --- | --- |
| Context source | 文件、检索结果、历史、工具输出、用户输入等来源 | 所有来源可信度相同 |
| Ranking | 决定哪些信息优先进入上下文 | 只按关键词命中排序 |
| Compaction | 压缩历史或材料，保留任务相关信息 | 压缩后不保留证据链 |
| Prompt caching | 复用稳定上下文以降低成本和延迟 | 把易变内容错误缓存 |
| Citation | 输出中标明信息来源 | 引用不能替代事实核验 |

## 演进时间线

| 时间 | 事件 | 判断 |
| --- | --- | --- |
| 2020 | RAG 提供检索增强生成范式 | Context 从 prompt 内文本扩展到外部知识 |
| 2023-2024 | 长上下文模型、向量数据库和工具调用普及 | 上下文治理成为工程瓶颈 |
| 2025-2026 | Agent 和 MCP 生态扩大 | Context 需要跨工具、跨会话、跨权限管理 |

## 代表资料

| 类型 | 名称 | 链接 | 为什么重要 |
| --- | --- | --- | --- |
| 论文 | Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks | https://arxiv.org/abs/2005.11401 | RAG 基础资料 |
| 官方文档 | OpenAI Compaction | https://developers.openai.com/api/docs/guides/compaction | 上下文压缩策略入口 |
| 官方文档 | OpenAI Prompt caching | https://developers.openai.com/api/docs/guides/prompt-caching | 长上下文成本和延迟优化入口 |
| 官方文档 | OpenAI Using tools | https://developers.openai.com/api/docs/guides/tools | 工具结果进入上下文的基础接口 |

## 适用场景

- RAG 知识助手。
- 代码库问答和变更分析。
- 长任务 Agent 的历史状态管理。
- 多工具工作流中的证据装配。

## 边界与风险

- 检索召回不足会让模型“自信地补空白”。
- 压缩策略错误会丢失关键约束。
- 外部内容必须和系统指令隔离，避免 prompt injection。

## 最小实践场景

- 输入：用户问题、知识库文档、会话历史、工具结果。
- 输出：带引用的回答和本次上下文装配清单。
- 流程：解析问题、召回候选、排序、压缩、组装、回答、引用。
- 验收标准：关键事实有来源，低相关材料不进入上下文，超预算时有降级策略。

实践入口：[scenarios/context-assembly-rag.md](../../scenarios/context-assembly-rag.md)

## 后续追踪项

- 长上下文模型对 RAG 的替代和互补关系。
- Context compaction、memory、cache 的工程分层。
- 工具输出和外部网页内容的安全隔离模式。
