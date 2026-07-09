# 企业 Context / RAG · 最小样例包

对应场景：[enterprise-context-rag-operations.md](../../enterprise-context-rag-operations.md)

## 输入样例

| sample_id | question | allowed_sources | forbidden_sources |
| --- | --- | --- | --- |
| er-01 | 上海办公室报销餐费上限是多少？ | HR-报销制度-上海-v3 | HR-报销制度-北京-v2（过期/错地域） |
| er-02 | 客户 A 上次投诉结论是什么？ | 工单#4821、SLA-标准版 | 客户 B 工单 |
| er-03 | 支付模块的重试逻辑在哪？ | payments/retry.ts、相关测试 | 未审查的草稿设计文档 |
| er-04 | 当前公开价是否含实施服务？ | 价格政策-2026Q2 | 销售个人笔记 |
| er-05 | 某公告里的营收同比是多少？ | 公司公告原文 | 二手媒体转述 |

## 期望输出要点

| sample_id | expected_behavior |
| --- | --- |
| er-01 | 答案带来源版本与生效日期；错地域制度不得入上下文 |
| er-02 | 仅使用客户 A 资料；隐私字段脱敏 |
| er-03 | 引用具体文件；建议需开发复核，不直接合并 |
| er-04 | 价格结论必须引用官方价格政策 |
| er-05 | 事实与观点分离；二手报道不得当一手事实 |

## 失败模式样例

| failure_id | sample_id | failure_type | bad_output_signal |
| --- | --- | --- | --- |
| rf-01 | er-01 | 过期/错版本引用 | 引用已废止制度 |
| rf-02 | er-02 | 权限污染 | 混入其他客户上下文 |
| rf-03 | er-04 | 无依据回答 | 未引用却给出价格承诺 |
| rf-04 | er-05 | 来源降级 | 把媒体报道当公告原文 |

## 基线表头（本场景）

沿用共用附录，并增加：`citation_hit`、`stale_blocked`、`permission_blocked`、`unsupported_answer`。
