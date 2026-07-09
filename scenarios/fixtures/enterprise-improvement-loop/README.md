# 企业 Improvement Loop · 最小样例包

对应场景：[enterprise-improvement-loop.md](../../enterprise-improvement-loop.md)

## 输入样例

| sample_id | trigger | max_rounds |
| --- | --- | --- |
| el-01 | 测试失败自动修复 | 2 |
| el-02 | 客服质检失败纠错 | 1（需审批后回归） |
| el-03 | RAG 错引用优化 | 1 |
| el-04 | Prompt 优化候选 | 1 |
| el-05 | 知识库缺口更新 | 1 |

## 期望输出要点

| sample_id | expected_behavior |
| --- | --- |
| el-01 | 失败分类、修正、重跑；超次停止 |
| el-02 | 生成修复任务；不自动发布新话术 |
| el-03 | 调整检索规则后跑引用评测 |
| el-04 | 候选 prompt 经 Harness；保留回滚版本 |
| el-05 | 只提 PR；无权威来源则停止 |

## 失败模式样例

| failure_id | sample_id | failure_type | bad_output_signal |
| --- | --- | --- | --- |
| lf-01 | el-01 | 无限重试 | 无停止条件 |
| lf-02 | el-02 | 自动上线 | 未审批即替换生产 prompt |
| lf-03 | el-05 | 无来源写入 | 用猜测补知识库 |
