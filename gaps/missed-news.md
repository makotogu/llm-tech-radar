# 漏收新闻候选

这里记录可能遗漏的重要 LLM 新闻。漏收候选不是结论，只是“可能需要补收的线索 + 需要核验的问题”。候选新闻必须经过人工核验后，才能进入 `inbox/`、`sources/`、`topics/`、`scenarios/` 或 `labs/`。

## 检查清单

| 来源类型 | 候选新闻 | 需要核验的问题 | 下一步 |
| --- | --- | --- | --- |
| 官方发布 |  | 是否有 OpenAI、Anthropic、Google、Meta、Mistral 等官方发布未收录 | 人工检查后补充候选 |
| 模型/产品更新 |  | 是否有重要模型、API、IDE、Agent 产品更新未收录 | 人工检查后补充候选 |
| 重要论文 |  | 是否有 Agent、Context、Harness、RAG、评测、安全方向论文未收录 | 人工检查后补充候选 |
| 开源项目 |  | 是否有 MCP、Agent 框架、评测框架、上下文工程项目未收录 | 人工检查后补充候选 |
| 工程博客 |  | 是否有带 trace、指标、架构或复盘的一线工程文章未收录 | 人工检查后补充候选 |
| 评测基准 |  | 是否有新 benchmark、leaderboard 或评测方法更新未收录 | 人工检查后补充候选 |
| 安全事件 |  | 是否有工具调用、MCP、prompt injection、数据泄露相关事件未收录 | 人工检查后补充候选 |
| 行业实践案例 |  | 是否有企业落地 Agent、RAG、评测或自动化工作流案例未收录 | 人工检查后补充候选 |

## 巡检记录

即使本周无候选，也记录「已检查 / 无新增」，避免清单空转。

| 日期 | 检查人 | 范围 | 结果 | 备注 |
| --- | --- | --- | --- | --- |
| 2026-07-09 | 仓库维护 | 安全资料、生产案例、评测框架 | 已检查；已将 MCP Security、OWASP Prompt Injection、间接注入论文、HELM、安全最佳实践等补入 sources | 无新增 gaps 候选；后续按周续写 |
| 2026-07-10 | 仓库维护 | 官方工程博客、Agent 协议、Context、Harness、治理框架 | 发现 5 条需要进一步核验的工程线索；NIST AI 600-1 已直接核验并沉淀 | 候选只记录问题，不作为仓库结论 |

## 候选记录

| 候选新闻 | 来源线索 | 可能相关专题 | 需要核验的问题 | 状态 |
| --- | --- | --- | --- | --- |
| Building effective agents | https://www.anthropic.com/engineering/building-effective-agents | Agent、Harness | “workflow 与 agent”的划分是否能稳定映射到本仓库 L1-L5；文中的客户经验有哪些可复核证据，哪些只是厂商经验 | 待核验 |
| Demystifying evals for AI agents | https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents | Agent、Harness | 多轮 Agent eval 的 grader 组合、任务集构造和人工校准方法能否转成 Eval Lab 样例 | 待核验 |
| Agent2Agent Protocol（A2A） | https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/ | MCP + Skill、Agent | A2A 与 MCP 的职责边界、当前规范归属、生产成熟度和安全模型分别是什么 | 持续追踪 |
| Effective context engineering for AI agents | https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents | Context、Agent | “最小高信号上下文”、compaction、just-in-time retrieval 的建议有哪些可量化验收方法 | 待核验 |
| Harness design for long-running application development | https://www.anthropic.com/engineering/harness-design-long-running-apps | Harness、Loop、Agent | planner / generator / evaluator 结构的收益来自哪些可复核实验；哪些结论只适用于长周期软件开发 | 待核验 |
