const documents = [
  {
    title: "Lab：Prompt 评审工作流",
    path: "labs/prompt-review-workflow/README.md",
    risk: ["lab", "L1"],
    category: "scenario",
    label: "实验",
    summary: "对比原始与结构化 prompt 的最小可复现实验，对齐企业 Prompt 样例。"
  },
  {
    title: "Lab：Context Assembly RAG",
    path: "labs/context-assembly-rag/README.md",
    risk: ["lab", "L2"],
    category: "scenario",
    label: "实验",
    summary: "比较 baseline 与 governed 检索，检查引用、过期、权限和来源等级。"
  },
  {
    title: "Lab：Eval Harness",
    path: "labs/eval-harness/README.md",
    risk: ["lab", "L1", "L2", "L3", "L4", "L5"],
    category: "scenario",
    label: "实验",
    summary: "用固定样例比较候选系统，输出逐样例 scorecard 与候选汇总。"
  },
  {
    title: "贡献指南",
    path: "CONTRIBUTING.md",
    category: "source",
    label: "入口",
    summary: "线索如何进 inbox、可信度分层、已沉淀完成定义与 PR 检查清单。"
  },
  {
    title: "资料卡片：大规模客服 Agent",
    path: "sources/cards/nubank-support-agents.md",
    risk: ["proof", "L4"],
    category: "source",
    label: "资料",
    summary: "100M 用户规模客服 Agent 的评测、上下文与线上指标案例。"
  },
  {
    title: "资料卡片：OWASP LLM Top 10",
    path: "sources/cards/owasp-llm-top10.md",
    risk: ["proof", "gate"],
    category: "source",
    label: "资料",
    summary: "企业 LLM 上线风险清单与门禁映射入口。"
  },
  {
    title: "资料卡片：GitHub Copilot 提效实验",
    path: "sources/cards/github-copilot-productivity.md",
    risk: ["proof", "L1"],
    category: "source",
    label: "资料",
    summary: "带对照实验的研发提效资料，用于设计企业内部效率评测。"
  },
  {
    title: "资料卡片：企业 RAG 内容设计",
    path: "sources/cards/enterprise-rag-content-design.md",
    risk: ["proof", "L2"],
    category: "source",
    label: "资料",
    summary: "说明企业 RAG 效果受知识库内容设计、文档结构和人工评测影响。"
  },
  {
    title: "资料卡片：Case-aware RAG 评测",
    path: "sources/cards/case-aware-rag-evaluation.md",
    risk: ["proof", "L2"],
    category: "source",
    label: "资料",
    summary: "把 RAG 评测扩展到 case、workflow 与严重度评分。"
  },
  {
    title: "仓库说明",
    path: "README.md",
    category: "source",
    label: "入口",
    summary: "默认读者为企业试点负责人；含单一入口路径、主流程与可信度分层。"
  },
  {
    title: "新闻建议收件箱",
    path: "inbox/news-suggestions.md",
    category: "queue",
    label: "线索",
    summary: "记录人提供的新闻建议、处理状态和沉淀位置。"
  },
  {
    title: "漏收新闻候选",
    path: "gaps/missed-news.md",
    category: "queue",
    label: "漏收",
    summary: "记录疑似遗漏的重要新闻和需要核验的问题。"
  },
  {
    title: "资料索引",
    path: "sources/README.md",
    category: "source",
    label: "资料",
    summary: "一手资料、论文、官方文档、开源项目和重要性说明。"
  },
  {
    title: "Prompt 工程",
    path: "topics/prompt-engineering/README.md",
    category: "topic",
    label: "专题",
    summary: "任务、约束、示例、输出格式和评审标准的工程化实践。"
  },
  {
    title: "Context 工程",
    path: "topics/context-engineering/README.md",
    category: "topic",
    label: "专题",
    summary: "选择、组织、压缩和更新模型可见上下文。"
  },
  {
    title: "MCP + Skill",
    path: "topics/mcp-skill/README.md",
    category: "topic",
    label: "专题",
    summary: "把外部工具、资源和可复用技能接入模型工作流。"
  },
  {
    title: "Agent 工程",
    path: "topics/agent-engineering/README.md",
    category: "topic",
    label: "专题",
    summary: "围绕目标规划、调用工具、保存状态和恢复失败。"
  },
  {
    title: "Harness 工程",
    path: "topics/harness-engineering/README.md",
    category: "topic",
    label: "专题",
    summary: "评测、对比、回归、trace 和报告基础设施。"
  },
  {
    title: "Loop 工程",
    path: "topics/loop-engineering/README.md",
    category: "topic",
    label: "专题",
    summary: "执行、反馈、修正、再执行的闭环设计。"
  },
  {
    title: "实践场景总览",
    path: "scenarios/README.md",
    pilot: true,
    risk: ["all"],
    category: "scenario",
    label: "场景",
    summary: "把知识转化为流程、输入输出和验收标准。"
  },
  {
    title: "企业级实践方案集",
    path: "scenarios/enterprise-practice-playbook.md",
    pilot: true,
    risk: ["all", "L1", "L2", "L3", "L4", "L5", "gate"],
    category: "scenario",
    label: "企业",
    summary: "按 L1–L5 风险选题，定义指标口径；细节见企业细分文档。"
  },
  {
    title: "企业 Prompt 运营场景",
    path: "scenarios/enterprise-prompt-operations.md",
    pilot: true,
    risk: ["L1"],
    category: "scenario",
    label: "企业",
    summary: "客服、销售、合同、HR、财务等 Prompt 变更的版本、评测和灰度方案。"
  },
  {
    title: "企业 Context 与 RAG 场景",
    path: "scenarios/enterprise-context-rag-operations.md",
    pilot: true,
    risk: ["L2"],
    category: "scenario",
    label: "企业",
    summary: "制度问答、售后工单、研发代码库、销售知识和投研资料的来源化上下文方案。"
  },
  {
    title: "企业 MCP 与工具接入场景",
    path: "scenarios/enterprise-mcp-tool-operations.md",
    pilot: true,
    risk: ["L3"],
    category: "scenario",
    label: "企业",
    summary: "工单、CRM、指标、发布、文档工具的权限、审计和审批设计。"
  },
  {
    title: "企业 Agent 运营场景",
    path: "scenarios/enterprise-agent-operations.md",
    pilot: true,
    risk: ["L4"],
    category: "scenario",
    label: "企业",
    summary: "缺陷修复、运维诊断、数据分析、客户成功和知识库维护的可接管 Agent 流程。"
  },
  {
    title: "企业 Eval Harness 场景",
    path: "scenarios/enterprise-evaluation-harness.md",
    pilot: true,
    risk: ["L1", "L2", "L3", "L4", "L5"],
    category: "scenario",
    label: "企业",
    summary: "客服回归、RAG 引用、工具调用、模型替换和模型裁判的评测方案。"
  },
  {
    title: "企业 Improvement Loop 场景",
    path: "scenarios/enterprise-improvement-loop.md",
    pilot: true,
    risk: ["L5"],
    category: "scenario",
    label: "企业",
    summary: "把失败样例转成 Prompt、RAG、知识库和工具流程的可控改进循环。"
  },
  {
    title: "企业治理与安全场景",
    path: "scenarios/enterprise-governance-safety.md",
    pilot: true,
    risk: ["gate", "L1", "L2", "L3", "L4", "L5"],
    category: "scenario",
    label: "治理",
    summary: "上线门禁、提示注入、供应商风险、敏感数据和人工接管的治理方案。"
  },
  {
    title: "Prompt 评审工作流",
    path: "scenarios/prompt-review-workflow.md",
    category: "scenario",
    label: "场景",
    summary: "评审和改进提示词结构、失败样例与输出验收标准。"
  },
  {
    title: "Context 装配 RAG",
    path: "scenarios/context-assembly-rag.md",
    category: "scenario",
    label: "场景",
    summary: "围绕检索、压缩、排序和引用规则构建上下文。"
  },
  {
    title: "MCP / Skill / Tool 工作流",
    path: "scenarios/mcp-skill-tool-workflow.md",
    category: "scenario",
    label: "场景",
    summary: "设计工具接入、权限边界和可复用技能。"
  },
  {
    title: "Agent 任务执行器",
    path: "scenarios/agent-task-runner.md",
    category: "scenario",
    label: "场景",
    summary: "长任务中的规划、执行、状态、失败恢复和人工接管。"
  },
  {
    title: "Eval Harness",
    path: "scenarios/eval-harness.md",
    category: "scenario",
    label: "场景",
    summary: "建立测试集、评测器、回归基线和可比较报告。"
  },
  {
    title: "Improvement Loop",
    path: "scenarios/improvement-loop.md",
    category: "scenario",
    label: "场景",
    summary: "把反馈转化为可控的系统改进循环。"
  },
  {
    title: "Labs 说明",
    path: "labs/README.md",
    category: "scenario",
    label: "实验",
    summary: "后续可运行实验、demo、评测脚本和报告约定。"
  },
  {
    title: "资料卡片模板",
    path: "templates/source-card-template.md",
    category: "template",
    label: "模板",
    summary: "记录单份资料的价值、核心内容、工程启发和注意事项。"
  },
  {
    title: "新闻建议模板",
    path: "templates/news-suggestion-template.md",
    category: "template",
    label: "模板",
    summary: "规范新闻建议的核验问题、处理动作和后续追踪。"
  },
  {
    title: "漏收候选模板",
    path: "templates/missed-news-template.md",
    category: "template",
    label: "模板",
    summary: "记录疑似漏收新闻的来源线索和待核验问题。"
  },
  {
    title: "专题模板",
    path: "templates/topic-template.md",
    category: "template",
    label: "模板",
    summary: "创建新专题时使用的定义、资料、边界和实践结构。"
  },
  {
    title: "场景模板",
    path: "templates/scenario-template.md",
    category: "template",
    label: "模板",
    summary: "创建新实践场景时使用的目标、流程、输入输出和验收结构。"
  }
];

const categoryNames = {
  topic: "专题",
  source: "资料",
  scenario: "场景",
  queue: "线索",
  template: "模板",
  enterprise: "企业试点"
};

const state = {
  filter: "enterprise",
  risk: "all",
  query: "",
  currentPath: ""
};

const list = document.querySelector("#doc-list");
const search = document.querySelector("#search-input");
const tabs = document.querySelectorAll("[data-filter]");
const reader = document.querySelector("#reader");
const readerTitle = document.querySelector("#reader-title");
const readerCategory = document.querySelector("#reader-category");
const readerContent = document.querySelector("#reader-content");
const rawLink = document.querySelector("#raw-link");
const riskTabs = document.querySelectorAll("[data-risk]");
const visibleCount = document.querySelector("#visible-count");
const activeFilterCopy = document.querySelector("#active-filter-copy");

function normalize(value) {
  return value.toLowerCase().trim();
}

function isEnterpriseDoc(doc) {
  return Boolean(doc.pilot) || doc.label === "企业" || doc.label === "治理" || /enterprise-/i.test(doc.path);
}

function isLabDoc(doc) {
  return doc.label === "实验" || doc.path.startsWith("labs/");
}

function isProofDoc(doc) {
  return doc.path.startsWith("sources/cards/");
}

function isBasicScenario(doc) {
  return doc.category === "scenario" && !isEnterpriseDoc(doc) && doc.path !== "scenarios/README.md" && doc.path !== "labs/README.md";
}

function matchesDocument(doc) {
  let matchesFilter = false;
  if (state.filter === "enterprise") {
    matchesFilter = isEnterpriseDoc(doc) || isLabDoc(doc) || isProofDoc(doc) || doc.path === "scenarios/README.md" || doc.path === "scenarios/enterprise-practice-playbook.md";
  } else if (state.filter === "lab") {
    matchesFilter = isLabDoc(doc);
  } else if (state.filter === "proof") {
    matchesFilter = isProofDoc(doc);
  } else if (state.filter === "scenario") {
    matchesFilter = isBasicScenario(doc);
  } else if (state.filter === "more") {
    matchesFilter = doc.category === "queue" || doc.category === "template" || doc.path === "labs/README.md";
  } else if (state.filter === "all") {
    matchesFilter = true;
  } else {
    matchesFilter = doc.category === state.filter;
  }
  const haystack = normalize(`${doc.title} ${doc.summary} ${doc.label} ${doc.path}`);
  return matchesFilter && matchesRisk(doc) && haystack.includes(normalize(state.query));
}

function matchesRisk(doc) {
  if (state.risk === "all") return true;
  const risks = Array.isArray(doc.risk) ? doc.risk : [];
  if (state.risk === "gate") return risks.includes("gate") || doc.label === "治理";
  return risks.includes(state.risk);
}

function sortDocuments(docs) {
  const rank = (doc) => {
    if (doc.path.includes("enterprise-practice-playbook")) return 0;
    if (isEnterpriseDoc(doc)) return 1;
    if (isLabDoc(doc)) return 2;
    if (isProofDoc(doc)) return 3;
    if (doc.path === "scenarios/README.md") return 4;
    if (doc.category === "topic") return 5;
    if (doc.category === "source") return 6;
    return 5;
  };
  return [...docs].sort((a, b) => rank(a) - rank(b) || a.title.localeCompare(b.title, "zh"));
}

function renderList() {
  const visibleDocs = sortDocuments(documents.filter(matchesDocument));

  if (!visibleDocs.length) {
    list.innerHTML = '<p class="empty-state">没有匹配的文档。</p>';
    updateStatus(0);
    return;
  }

  list.innerHTML = visibleDocs.map((doc, index) => `
    <button class="doc-item" type="button" data-path="${escapeAttribute(doc.path)}" style="--delay:${index * 24}ms">
      <span>
        <span class="doc-title">
          ${escapeHtml(doc.title)}
          <span class="doc-tag">${escapeHtml(doc.label)}</span>
        </span>
        <span class="doc-meta">${escapeHtml(doc.summary)}</span>
      </span>
      <span class="doc-arrow" aria-hidden="true">→</span>
    </button>
  `).join("");
  updateStatus(visibleDocs.length);
}

function setFilter(filter) {
  state.filter = filter;
  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.filter === filter);
  });
  renderList();
}

function setRisk(risk) {
  state.risk = risk;
  riskTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.risk === risk);
  });
  renderList();
}

function updateStatus(count) {
  const filterName = document.querySelector(`[data-filter="${state.filter}"]`)?.textContent || "文档";
  const riskName = document.querySelector(`[data-risk="${state.risk}"]`)?.textContent || "全部风险";
  if (visibleCount) visibleCount.textContent = `${count} 篇`;
  if (activeFilterCopy) activeFilterCopy.textContent = `${filterName} · ${riskName}`;
}

async function openDocument(path, options = {}) {
  const doc = findDocument(path);
  if (!doc) return;

  state.currentPath = doc.path;
  readerTitle.textContent = doc.title;
  readerCategory.textContent = categoryNames[doc.category] || "文档";
  rawLink.href = doc.path;
  readerContent.innerHTML = '<p class="empty-state">正在加载正文...</p>';
  reader.classList.add("open");
  reader.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  try {
    const response = await fetch(doc.path, { cache: "no-cache" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const markdown = await response.text();
    readerContent.innerHTML = renderMarkdown(markdown, doc.path);
    readerContent.scrollTop = 0;
    if (options.updateUrl !== false) {
      const url = new URL(window.location.href);
      url.searchParams.set("doc", doc.path);
      window.history.replaceState(null, "", url);
    }
  } catch (error) {
    readerContent.innerHTML = `
      <p>无法直接加载这个 Markdown 文件。GitHub Pages 上通常可以正常读取；如果你正在用 file:// 打开页面，请改用本地静态服务器。</p>
      <p><a href="${escapeAttribute(doc.path)}" target="_blank" rel="noreferrer">打开源文件</a></p>
    `;
  }
}

function closeReader() {
  reader.classList.remove("open");
  reader.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  state.currentPath = "";
  const url = new URL(window.location.href);
  url.searchParams.delete("doc");
  window.history.replaceState(null, "", url);
}

function findDocument(path) {
  const normalized = normalizeDocumentPath(path);
  return documents.find((item) => normalizeDocumentPath(item.path) === normalized);
}

function normalizeDocumentPath(path) {
  const clean = String(path || "")
    .split("#", 1)[0]
    .split("?", 1)[0]
    .replace(/^\.\/+/, "")
    .replace(/^\/+/, "");

  if (!clean) return "";
  if (clean.endsWith("/")) return `${clean}README.md`;
  if (!clean.endsWith(".md") && documents.some((doc) => doc.path === `${clean}/README.md`)) {
    return `${clean}/README.md`;
  }
  return clean;
}

function renderMarkdown(markdown, sourcePath) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  let html = "";
  let paragraph = [];
  let listItems = [];
  let tableRows = [];
  let inCode = false;
  let codeLines = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      html += `<p>${formatInline(paragraph.join(" "), sourcePath)}</p>`;
      paragraph = [];
    }
  };

  const flushList = () => {
    if (listItems.length) {
      html += `<ul>${listItems.map((item) => `<li>${formatInline(item, sourcePath)}</li>`).join("")}</ul>`;
      listItems = [];
    }
  };

  const flushTable = () => {
    if (tableRows.length) {
      const rows = tableRows.filter((row) => !/^\|\s*-+/.test(row));
      const [head, ...body] = rows.map(parseTableRow);
      if (head) {
        html += "<table><thead><tr>";
        html += head.map((cell) => `<th>${formatInline(cell, sourcePath)}</th>`).join("");
        html += "</tr></thead><tbody>";
        html += body.map((row) => `<tr>${row.map((cell) => `<td>${formatInline(cell, sourcePath)}</td>`).join("")}</tr>`).join("");
        html += "</tbody></table>";
      }
      tableRows = [];
    }
  };

  const flushCode = () => {
    html += `<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`;
    codeLines = [];
  };

  for (const line of lines) {
    if (line.startsWith("```")) {
      if (inCode) {
        flushCode();
        inCode = false;
      } else {
        flushParagraph();
        flushList();
        flushTable();
        inCode = true;
      }
      continue;
    }

    if (inCode) {
      codeLines.push(line);
      continue;
    }

    if (!line.trim()) {
      flushParagraph();
      flushList();
      flushTable();
      continue;
    }

    if (/^\|.+\|$/.test(line.trim())) {
      flushParagraph();
      flushList();
      tableRows.push(line.trim());
      continue;
    }

    flushTable();

    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      flushList();
      const level = heading[1].length;
      html += `<h${level}>${formatInline(heading[2], sourcePath)}</h${level}>`;
      continue;
    }

    const item = line.match(/^\s*[-*]\s+(.+)$/);
    if (item) {
      flushParagraph();
      listItems.push(item[1]);
      continue;
    }

    const orderedItem = line.match(/^\s*\d+\.\s+(.+)$/);
    if (orderedItem) {
      flushParagraph();
      listItems.push(orderedItem[1]);
      continue;
    }

    paragraph.push(line.trim());
  }

  flushParagraph();
  flushList();
  flushTable();
  if (inCode) flushCode();

  return html;
}

function parseTableRow(row) {
  return row.replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim());
}

function formatInline(value, sourcePath) {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, label, href) => {
      return renderLink(label, href, sourcePath);
    })
    .replace(/(^|[\s>])(https?:\/\/[^\s<]+)/g, (_match, prefix, href) => {
      return `${prefix}<a href="${escapeAttribute(href)}" target="_blank" rel="noreferrer">${href}</a>`;
    });
}

function renderLink(label, href, sourcePath) {
  const resolved = resolveInternalPath(href, sourcePath);
  if (!resolved) {
    return `<a href="${escapeAttribute(href)}" target="_blank" rel="noreferrer">${label}</a>`;
  }

  const doc = findDocument(resolved);
  if (doc) {
    const url = new URL(window.location.href);
    url.searchParams.set("doc", doc.path);
    return `<a href="${escapeAttribute(url.pathname + url.search + url.hash)}" data-doc-path="${escapeAttribute(doc.path)}">${label}</a>`;
  }

  return `<a href="${escapeAttribute(resolved)}" target="_blank" rel="noreferrer">${label}</a>`;
}

function resolveInternalPath(href, sourcePath) {
  if (!href || href.startsWith("#") || /^[a-z][a-z0-9+.-]*:/i.test(href)) {
    return "";
  }

  const pageBase = new URL(".", window.location.href);
  const sourceUrl = new URL(sourcePath, pageBase);
  const resolved = new URL(href, sourceUrl);

  if (resolved.origin !== window.location.origin || !resolved.pathname.startsWith(pageBase.pathname)) {
    return "";
  }

  return decodeURIComponent(resolved.pathname.slice(pageBase.pathname.length));
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/'/g, "&#039;");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => setFilter(tab.dataset.filter));
});

riskTabs.forEach((tab) => {
  tab.addEventListener("click", () => setRisk(tab.dataset.risk));
});

search.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderList();
});

list.addEventListener("click", (event) => {
  const item = event.target.closest("[data-path]");
  if (item) openDocument(item.dataset.path);
});

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[data-doc-path]");
  if (!link) return;
  event.preventDefault();
  openDocument(link.dataset.docPath);
});

document.querySelectorAll("[data-close-reader]").forEach((button) => {
  button.addEventListener("click", closeReader);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeReader();
});

renderList();

const initialDoc = new URLSearchParams(window.location.search).get("doc");
if (initialDoc && findDocument(initialDoc)) {
  window.setTimeout(() => openDocument(initialDoc, { updateUrl: false }), 0);
}
