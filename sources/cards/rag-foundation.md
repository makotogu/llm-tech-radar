# 资料卡片

- 标题：Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks
- 作者：Patrick Lewis、Ethan Perez、Aleksandra Piktus 等
- 类型：论文 / RAG 基础方法
- 发布时间：2020-05-22
- 核验日期：2026-07-10
- 链接：https://arxiv.org/abs/2005.11401
- 可信度：A（论文原文；原始架构不等同于当前企业 RAG 产品）
- 对应专题：Context 工程
- 推荐阶段：入门到进阶

## 一句话价值

论文系统化连接参数化模型与外部非参数知识，为理解“检索后生成、知识可更新和来源可追溯”提供基础概念。

## 方法与结果

- 论文将 seq2seq 模型与 Wikipedia dense vector index 连接，比较生成序列共享检索段落和逐 token 使用不同段落的两种方式。
- 实验覆盖多种知识密集型 NLP 任务，并与参数化模型及 retrieve-and-extract 架构比较。
- 论文报告 RAG 在多个开放域问答任务上取得当时的领先结果，并生成更具体、多样和事实化的文本。

## 这份资料能支撑什么

- 可以支撑：需要更新和追溯的知识不应只依赖模型参数记忆。
- 可以支撑：检索、上下文组织和生成需要作为一条系统链路评测。
- 不能直接支撑：向量检索是所有企业知识问题的最佳方案。
- 不能直接支撑：检索到相关段落就能保证回答正确或引用准确。

## 工程迁移

- 为每个进入上下文的文档保存来源、版本、权限和入选原因。
- 把“检索命中”和“回答有依据”作为不同指标。
- 关联实验：[Context Assembly RAG](../../labs/context-assembly-rag/README.md)
- 关联场景：[企业 Context 与 RAG](../../scenarios/enterprise-context-rag-operations.md)

## 注意事项

- 企业 RAG 还需要处理访问控制、过期内容、结构化数据和多轮 case，超出原论文实验范围。
- 具体模型与索引技术已经演进，长期保留的是参数化与外部知识协作的系统边界。
