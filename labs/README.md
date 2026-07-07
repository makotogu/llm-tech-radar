# Labs

这里放后续可运行实验、demo、评测脚本和结果报告。首版先保留结构，不放未验证代码。

## 推荐实验顺序

1. `prompt-review-workflow/`：提示词需求澄清、输出约束和评审。
2. `context-assembly-rag/`：多来源上下文装配、压缩和引用。
3. `agent-tool-runner/`：带工具调用、状态记录和失败恢复的任务型 Agent。
4. `eval-harness/`：对 Prompt、Context 和 Agent 策略做回归评测。
5. `improvement-loop/`：用 trace 与 eval 结果驱动下一轮修正。

## 每个实验建议包含

- `README.md`：实验目标、运行方式、输入输出、验收标准。
- `data/`：小型样例数据或链接说明。
- `src/`：最小可运行实现。
- `reports/`：实验记录、指标、截图或 trace。

## 进入 Labs 的条件

- 有明确问题和验收标准。
- 能在本地复现，或者清楚说明依赖的外部服务。
- 输出能被 Harness 复用或比较。
