const documents = Array.isArray(window.CONTENT_INDEX) ? window.CONTENT_INDEX : [];
const topics = Array.isArray(window.TOPIC_INDEX) ? window.TOPIC_INDEX : [];

const typeNames = {
  all: "全部",
  topic: "专题",
  source: "资料",
  scenario: "场景",
  lab: "实验",
  queue: "线索",
  guide: "指南",
  template: "模板"
};

const allowedTypes = new Set(["all", "topic", "source", "scenario", "lab", "queue"]);
const allowedRisks = new Set(["all", "L1", "L2", "L3", "L4", "L5", "gate"]);
const state = {
  type: "all",
  topic: "all",
  risk: "all",
  query: "",
  currentPath: "",
  libraryScrollY: 0
};

const libraryView = document.querySelector("#library-view");
const readerView = document.querySelector("#reader-view");
const siteHeader = document.querySelector("#site-header");
const siteFooter = document.querySelector("#site-footer");
const repositoryState = document.querySelector("#repository-state");
const recentList = document.querySelector("#recent-list");
const topicGrid = document.querySelector("#topic-grid");
const evidenceList = document.querySelector("#evidence-list");
const labList = document.querySelector("#lab-list");
const documentList = document.querySelector("#document-list");
const visibleCount = document.querySelector("#visible-count");
const activeQuery = document.querySelector("#active-query");
const searchInput = document.querySelector("#search-input");
const clearSearch = document.querySelector("#clear-search");
const typeTabs = document.querySelectorAll("[data-type]");
const topicSelect = document.querySelector("#topic-select");
const riskSelect = document.querySelector("#risk-select");
const riskSelectLabel = document.querySelector("#risk-select-label");
const readerBack = document.querySelector("#reader-back");
const readerMeta = document.querySelector("#reader-meta");
const readerTitle = document.querySelector("#reader-title");
const readerSourceLink = document.querySelector("#reader-source-link");
const readerRawLink = document.querySelector("#reader-raw-link");
const readerToc = document.querySelector("#reader-toc");
const readerContent = document.querySelector("#reader-content");
const relatedList = document.querySelector("#related-list");

let readerRequestId = 0;

function normalize(value) {
  return String(value || "").toLowerCase().trim();
}

function formatDate(value) {
  if (!value) return "未标注";
  const parts = value.split("-");
  return parts.length === 3 ? `${parts[1]}.${parts[2]}` : value;
}

function formatFullDate(value) {
  return value ? value.replaceAll("-", ".") : "未标注";
}

function topicName(topicId) {
  return topics.find((topic) => topic.id === topicId)?.shortTitle || topicId;
}

function sourceName(doc) {
  if (!doc.sourceUrl) return typeNames[doc.type] || "仓库内容";
  try {
    const host = new URL(doc.sourceUrl).hostname.replace(/^www\./, "");
    const knownHosts = {
      "arxiv.org": "arXiv",
      "nist.gov": "NIST",
      "developers.openai.com": "OpenAI",
      "modelcontextprotocol.io": "MCP",
      "owasp.org": "OWASP"
    };
    return knownHosts[host] || host;
  } catch (_error) {
    return "原始来源";
  }
}

function sortByRecent(a, b) {
  return b.updatedAt.localeCompare(a.updatedAt) || (a.featuredRank ?? 999) - (b.featuredRank ?? 999);
}

function renderRepositoryState() {
  const sourceCount = documents.filter((doc) => doc.type === "source" && doc.sourceUrl).length;
  const labCount = documents.filter((doc) => doc.type === "lab" && doc.path !== "labs/README.md").length;
  const lastUpdated = documents.reduce((latest, doc) => doc.updatedAt > latest ? doc.updatedAt : latest, "");
  const items = [
    [topics.length, "主题"],
    [sourceCount, "证据卡"],
    [labCount, "实验"],
    [formatFullDate(lastUpdated), "最后更新"]
  ];
  repositoryState.innerHTML = items.map(([value, label]) => `
    <span class="state-item">
      <strong>${escapeHtml(value)}</strong>
      <span>${escapeHtml(label)}</span>
    </span>
  `).join("");
}

function renderRecent() {
  const recent = documents
    .filter((doc) => ["topic", "source", "scenario", "lab", "queue"].includes(doc.type))
    .sort(sortByRecent)
    .slice(0, 5);

  recentList.innerHTML = recent.map((doc, index) => `
    <button class="editorial-row" type="button" data-doc-path="${escapeAttribute(doc.path)}" style="--delay:${index * 34}ms">
      <span class="editorial-date">${escapeHtml(formatDate(doc.updatedAt))}</span>
      <span class="editorial-type">${escapeHtml(typeNames[doc.type])}</span>
      <span class="editorial-title">${escapeHtml(doc.title)}</span>
      <span class="editorial-source">${escapeHtml(sourceName(doc))}</span>
      <span class="row-arrow" aria-hidden="true">→</span>
    </button>
  `).join("");
}

function renderTopicGrid() {
  topicGrid.innerHTML = topics.map((topic) => {
    const count = documents.filter((doc) => doc.topics.includes(topic.id)).length;
    return `
      <button class="topic-entry" type="button" data-topic-filter="${escapeAttribute(topic.id)}">
        <span>
          <strong>${escapeHtml(topic.shortTitle)}</strong>
          <p>${escapeHtml(topic.description)}</p>
        </span>
        <span class="topic-count">${count} 条</span>
        <span class="topic-route">查看关联内容 →</span>
      </button>
    `;
  }).join("");
}

function renderCompactLists() {
  const evidence = documents
    .filter((doc) => doc.type === "source" && doc.sourceUrl)
    .sort((a, b) => (a.featuredRank ?? 999) - (b.featuredRank ?? 999))
    .slice(0, 4);
  const labs = documents
    .filter((doc) => doc.type === "lab" && doc.path !== "labs/README.md")
    .sort((a, b) => (a.featuredRank ?? 999) - (b.featuredRank ?? 999));

  evidenceList.innerHTML = evidence.map(renderCompactRow).join("");
  labList.innerHTML = labs.map(renderCompactRow).join("");
}

function renderCompactRow(doc) {
  const firstTopic = doc.topics[0] ? topicName(doc.topics[0]) : typeNames[doc.type];
  return `
    <button class="compact-row" type="button" data-doc-path="${escapeAttribute(doc.path)}">
      <span class="compact-copy">
        <span class="compact-title">${escapeHtml(doc.title)}</span>
        <small>${escapeHtml(doc.summary)}</small>
      </span>
      <span class="compact-topic">${escapeHtml(firstTopic)}</span>
      <span class="row-arrow" aria-hidden="true">→</span>
    </button>
  `;
}

function populateTopicSelect() {
  topicSelect.insertAdjacentHTML("beforeend", topics.map((topic) => `
    <option value="${escapeAttribute(topic.id)}">${escapeHtml(topic.shortTitle)}</option>
  `).join(""));
}

function matchesDocument(doc) {
  if (state.type !== "all" && doc.type !== state.type) return false;
  if (state.topic !== "all" && !doc.topics.includes(state.topic)) return false;
  if (state.type === "scenario" && state.risk !== "all" && !doc.risk.includes(state.risk)) return false;

  const query = normalize(state.query);
  if (!query) return true;
  const haystack = normalize([
    doc.title,
    doc.summary,
    doc.path,
    typeNames[doc.type],
    ...doc.topics.map(topicName),
    doc.sourceUrl || ""
  ].join(" "));
  return haystack.includes(query);
}

function relevance(doc) {
  const query = normalize(state.query);
  if (!query) return 10;
  const title = normalize(doc.title);
  if (title.startsWith(query)) return 0;
  if (title.includes(query)) return 1;
  if (doc.topics.some((topic) => normalize(topicName(topic)).includes(query))) return 2;
  return 3;
}

function sortDocuments(docs) {
  const typeRank = { topic: 0, source: 1, scenario: 2, lab: 3, queue: 4, guide: 5, template: 6 };
  return [...docs].sort((a, b) =>
    relevance(a) - relevance(b) ||
    (typeRank[a.type] ?? 9) - (typeRank[b.type] ?? 9) ||
    (a.featuredRank ?? 999) - (b.featuredRank ?? 999) ||
    a.title.localeCompare(b.title, "zh-CN")
  );
}

function renderLibrary() {
  const visible = sortDocuments(documents.filter(matchesDocument));
  visibleCount.textContent = String(visible.length);
  updateFilterControls();
  updateActiveQuery();

  if (!visible.length) {
    documentList.innerHTML = '<p class="empty-state">没有匹配的内容。可以清除搜索或切换主题。</p>';
    return;
  }

  documentList.innerHTML = visible.map((doc, index) => `
    <button class="document-row" type="button" data-doc-path="${escapeAttribute(doc.path)}" style="--delay:${Math.min(index, 12) * 24}ms">
      <span class="row-type">${escapeHtml(typeNames[doc.type] || "内容")}</span>
      <span class="row-copy">
        <span class="row-title">${escapeHtml(doc.title)}</span>
        <span class="row-summary">${escapeHtml(doc.summary)}</span>
      </span>
      <span class="row-topics">${doc.topics.slice(0, 3).map((topic) => `<span class="row-topic">${escapeHtml(topicName(topic))}</span>`).join("")}</span>
      <span class="row-date">${escapeHtml(formatFullDate(doc.updatedAt))}</span>
      <span class="row-arrow" aria-hidden="true">→</span>
    </button>
  `).join("");
}

function updateFilterControls() {
  typeTabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.type === state.type));
  topicSelect.value = state.topic;
  riskSelect.value = state.risk;
  riskSelectLabel.hidden = state.type !== "scenario";
  clearSearch.hidden = !state.query;
}

function updateActiveQuery() {
  const parts = [typeNames[state.type] || "全部"];
  if (state.topic !== "all") parts.push(topicName(state.topic));
  if (state.type === "scenario" && state.risk !== "all") parts.push(state.risk === "gate" ? "治理门禁" : state.risk);
  if (state.query) parts.push(`“${state.query}”`);
  activeQuery.textContent = parts.join(" · ");
}

function setType(type, options = {}) {
  state.type = allowedTypes.has(type) ? type : "all";
  if (state.type !== "scenario") state.risk = "all";
  renderLibrary();
  syncFiltersToUrl();
  if (options.scroll) scrollToLibrary();
}

function setTopic(topic, options = {}) {
  state.topic = topics.some((item) => item.id === topic) ? topic : "all";
  renderLibrary();
  syncFiltersToUrl();
  if (options.scroll) scrollToLibrary();
}

function scrollToLibrary() {
  document.querySelector("#library").scrollIntoView({ behavior: "smooth", block: "start" });
}

function syncFiltersToUrl() {
  const url = new URL(window.location.href);
  url.searchParams.delete("doc");
  setOptionalParam(url, "type", state.type, "all");
  setOptionalParam(url, "topic", state.topic, "all");
  setOptionalParam(url, "risk", state.type === "scenario" ? state.risk : "all", "all");
  setOptionalParam(url, "q", state.query, "");
  window.history.replaceState({ library: true }, "", url);
}

function setOptionalParam(url, key, value, defaultValue) {
  if (!value || value === defaultValue) url.searchParams.delete(key);
  else url.searchParams.set(key, value);
}

function readFiltersFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const type = params.get("type") || "all";
  const topic = params.get("topic") || "all";
  const risk = params.get("risk") || "all";
  state.type = allowedTypes.has(type) ? type : "all";
  state.topic = topics.some((item) => item.id === topic) ? topic : "all";
  state.risk = allowedRisks.has(risk) && state.type === "scenario" ? risk : "all";
  state.query = params.get("q") || "";
  searchInput.value = state.query;
}

async function openDocument(path, options = {}) {
  const doc = findDocument(path);
  if (!doc) return;

  const requestId = ++readerRequestId;
  if (readerView.hidden) state.libraryScrollY = window.scrollY || 0;
  state.currentPath = doc.path;
  libraryView.hidden = true;
  readerView.hidden = false;
  siteHeader.hidden = true;
  siteFooter.hidden = true;
  document.body.classList.add("reading");
  document.title = `${doc.title} · LLM 工程知识库`;

  readerMeta.textContent = buildReaderMeta(doc);
  readerTitle.textContent = doc.title;
  readerRawLink.href = doc.path;
  if (doc.sourceUrl) {
    readerSourceLink.href = doc.sourceUrl;
    readerSourceLink.hidden = false;
  } else {
    readerSourceLink.hidden = true;
  }
  readerContent.innerHTML = '<p class="empty-state">正在加载正文…</p>';
  readerToc.innerHTML = "";
  renderRelated(doc);
  window.scrollTo({ top: 0, behavior: "auto" });

  if (options.push !== false) {
    const url = new URL(window.location.href);
    url.searchParams.set("doc", doc.path);
    window.history.pushState({ reader: true, path: doc.path }, "", url);
  }

  try {
    const response = await fetch(doc.path, { cache: "no-cache" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const markdown = await response.text();
    if (requestId !== readerRequestId) return;
    const rendered = renderMarkdown(markdown, doc.path);
    readerContent.innerHTML = rendered.html;
    renderToc(rendered.headings);
  } catch (_error) {
    if (requestId !== readerRequestId) return;
    readerContent.innerHTML = `
      <h1>无法加载正文</h1>
      <p>当前环境不能直接读取这个 Markdown 文件。</p>
      <p><a href="${escapeAttribute(doc.path)}" target="_blank" rel="noreferrer">打开源文件</a></p>
    `;
  }
}

function buildReaderMeta(doc) {
  const parts = [typeNames[doc.type] || "内容", `更新 ${formatFullDate(doc.updatedAt)}`];
  if (doc.verifiedAt) parts.push(`核验 ${formatFullDate(doc.verifiedAt)}`);
  return parts.join(" · ");
}

function showLibrary() {
  const wasReading = Boolean(state.currentPath);
  ++readerRequestId;
  state.currentPath = "";
  readerView.hidden = true;
  libraryView.hidden = false;
  siteHeader.hidden = false;
  siteFooter.hidden = false;
  document.body.classList.remove("reading");
  document.title = "LLM 工程知识库";
  if (wasReading) window.scrollTo({ top: state.libraryScrollY, behavior: "auto" });
}

function closeReader() {
  if (window.history.state?.reader) {
    window.history.back();
    return;
  }
  const url = new URL(window.location.href);
  url.searchParams.delete("doc");
  window.history.replaceState({ library: true }, "", url);
  showLibrary();
}

function renderRelated(doc) {
  const related = documents
    .filter((item) => item.path !== doc.path && item.topics.some((topic) => doc.topics.includes(topic)))
    .map((item) => ({
      item,
      score: item.topics.filter((topic) => doc.topics.includes(topic)).length
    }))
    .sort((a, b) => b.score - a.score || (a.item.featuredRank ?? 999) - (b.item.featuredRank ?? 999))
    .slice(0, 4);

  relatedList.innerHTML = related.length
    ? related.map(({ item }) => `<button type="button" data-doc-path="${escapeAttribute(item.path)}">${escapeHtml(item.title)}</button>`).join("")
    : '<p class="empty-state">暂无关联内容。</p>';
}

function renderToc(headings) {
  if (!headings.length) {
    readerToc.hidden = true;
    return;
  }
  readerToc.hidden = false;
  readerToc.innerHTML = headings.map((heading) => `
    <a href="#${escapeAttribute(heading.id)}" data-level="${heading.level}">${escapeHtml(heading.text)}</a>
  `).join("");
}

function findDocument(path) {
  const normalizedPath = normalizeDocumentPath(path);
  return documents.find((doc) => normalizeDocumentPath(doc.path) === normalizedPath);
}

function normalizeDocumentPath(path) {
  const clean = String(path || "")
    .split("#", 1)[0]
    .split("?", 1)[0]
    .replace(/^\.\/+/, "")
    .replace(/^\/+/, "");
  if (!clean) return "";
  if (clean.endsWith("/")) return `${clean}README.md`;
  return clean;
}

function renderMarkdown(markdown, sourcePath) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const headings = [];
  const slugCounts = new Map();
  let html = "";
  let paragraph = [];
  let listItems = [];
  let listType = "";
  let tableRows = [];
  let quoteLines = [];
  let inCode = false;
  let codeLines = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    html += `<p>${formatInline(paragraph.join(" "), sourcePath)}</p>`;
    paragraph = [];
  };

  const flushList = () => {
    if (!listItems.length) return;
    html += `<${listType}>${listItems.map((item) => `<li>${formatInline(item, sourcePath)}</li>`).join("")}</${listType}>`;
    listItems = [];
    listType = "";
  };

  const flushTable = () => {
    if (!tableRows.length) return;
    const parsedRows = tableRows.map(parseTableRow);
    const rows = parsedRows.filter((row) => !row.every((cell) => /^:?-{3,}:?$/.test(cell.replace(/\s/g, ""))));
    const [head, ...body] = rows;
    if (head) {
      html += '<div class="table-wrap"><table><thead><tr>';
      html += head.map((cell) => `<th>${formatInline(cell, sourcePath)}</th>`).join("");
      html += "</tr></thead><tbody>";
      html += body.map((row) => `<tr>${row.map((cell) => `<td>${formatInline(cell, sourcePath)}</td>`).join("")}</tr>`).join("");
      html += "</tbody></table></div>";
    }
    tableRows = [];
  };

  const flushQuote = () => {
    if (!quoteLines.length) return;
    html += `<blockquote>${formatInline(quoteLines.join(" "), sourcePath)}</blockquote>`;
    quoteLines = [];
  };

  const flushCode = () => {
    html += `<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`;
    codeLines = [];
  };

  const flushTextBlocks = () => {
    flushParagraph();
    flushList();
    flushTable();
    flushQuote();
  };

  for (const line of lines) {
    if (line.startsWith("```")) {
      if (inCode) {
        flushCode();
        inCode = false;
      } else {
        flushTextBlocks();
        inCode = true;
      }
      continue;
    }

    if (inCode) {
      codeLines.push(line);
      continue;
    }

    if (!line.trim()) {
      flushTextBlocks();
      continue;
    }

    if (/^\s*\|.+\|\s*$/.test(line)) {
      flushParagraph();
      flushList();
      flushQuote();
      tableRows.push(line.trim());
      continue;
    }

    flushTable();

    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      flushList();
      flushQuote();
      const level = heading[1].length;
      const text = stripInlineMarkdown(heading[2]);
      const id = uniqueSlug(text, slugCounts);
      html += `<h${level} id="${escapeAttribute(id)}">${formatInline(heading[2], sourcePath)}</h${level}>`;
      if (level >= 2) headings.push({ level, id, text });
      continue;
    }

    if (/^\s*([-*_])(?:\s*\1){2,}\s*$/.test(line)) {
      flushParagraph();
      flushList();
      flushQuote();
      html += "<hr>";
      continue;
    }

    const quote = line.match(/^>\s?(.*)$/);
    if (quote) {
      flushParagraph();
      flushList();
      quoteLines.push(quote[1]);
      continue;
    }

    flushQuote();

    const unordered = line.match(/^\s*[-*]\s+(.+)$/);
    if (unordered) {
      flushParagraph();
      if (listType && listType !== "ul") flushList();
      listType = "ul";
      listItems.push(unordered[1]);
      continue;
    }

    const ordered = line.match(/^\s*\d+\.\s+(.+)$/);
    if (ordered) {
      flushParagraph();
      if (listType && listType !== "ol") flushList();
      listType = "ol";
      listItems.push(ordered[1]);
      continue;
    }

    flushList();
    paragraph.push(line.trim());
  }

  flushTextBlocks();
  if (inCode) flushCode();
  return { html, headings };
}

function parseTableRow(row) {
  return row.replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim());
}

function stripInlineMarkdown(value) {
  return String(value)
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`~]/g, "")
    .trim();
}

function uniqueSlug(value, counts) {
  const base = String(value)
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .trim()
    .replace(/\s+/g, "-") || "section";
  const count = counts.get(base) || 0;
  counts.set(base, count + 1);
  return count ? `${base}-${count + 1}` : base;
}

function formatInline(value, sourcePath) {
  const tokens = [];
  const token = (html) => {
    const marker = `TOKENPLACEHOLDER${tokens.length}END`;
    tokens.push([marker, html]);
    return marker;
  };

  let output = String(value)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, label, href) => token(renderLink(label, href, sourcePath)))
    .replace(/`([^`]+)`/g, (_match, code) => token(`<code>${escapeHtml(code)}</code>`));

  output = escapeHtml(output)
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[\s>])(https?:\/\/[^\s<]+)/g, (_match, prefix, href) => {
      return `${prefix}<a href="${escapeAttribute(href)}" target="_blank" rel="noreferrer">${href}</a>`;
    });

  tokens.forEach(([marker, html]) => {
    output = output.replace(marker, html);
  });
  return output;
}

function renderLink(label, href, sourcePath) {
  if (/^(https?:|mailto:)/i.test(href)) {
    return `<a href="${escapeAttribute(href)}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a>`;
  }

  const resolved = resolveInternalPath(href, sourcePath);
  if (!resolved) return `<a href="${escapeAttribute(href)}">${escapeHtml(label)}</a>`;
  const doc = findDocument(resolved);
  if (doc) {
    const url = new URL(window.location.href);
    url.searchParams.set("doc", doc.path);
    return `<a href="${escapeAttribute(url.pathname + url.search)}" data-doc-path="${escapeAttribute(doc.path)}">${escapeHtml(label)}</a>`;
  }
  return `<a href="${escapeAttribute(resolved)}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a>`;
}

function resolveInternalPath(href, sourcePath) {
  if (!href || href.startsWith("#") || /^[a-z][a-z0-9+.-]*:/i.test(href)) return "";
  const pageBase = new URL(".", window.location.href);
  const sourceUrl = new URL(sourcePath, pageBase);
  const resolved = new URL(href, sourceUrl);
  if (resolved.origin !== window.location.origin || !resolved.pathname.startsWith(pageBase.pathname)) return "";
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

function renderFromLocation() {
  readFiltersFromUrl();
  renderLibrary();
  const path = new URLSearchParams(window.location.search).get("doc");
  if (path && findDocument(path)) openDocument(path, { push: false });
  else showLibrary();
}

typeTabs.forEach((tab) => {
  tab.addEventListener("click", () => setType(tab.dataset.type));
});

topicSelect.addEventListener("change", (event) => setTopic(event.target.value));

riskSelect.addEventListener("change", (event) => {
  state.risk = allowedRisks.has(event.target.value) ? event.target.value : "all";
  renderLibrary();
  syncFiltersToUrl();
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  renderLibrary();
  syncFiltersToUrl();
});

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    scrollToLibrary();
  }
});

clearSearch.addEventListener("click", () => {
  state.query = "";
  searchInput.value = "";
  renderLibrary();
  syncFiltersToUrl();
  searchInput.focus();
});

readerBack.addEventListener("click", closeReader);

document.addEventListener("click", (event) => {
  const docLink = event.target.closest("[data-doc-path]");
  if (docLink) {
    event.preventDefault();
    openDocument(docLink.dataset.docPath);
    return;
  }

  const topicLink = event.target.closest("[data-topic-filter]");
  if (topicLink) {
    state.type = "all";
    state.risk = "all";
    setTopic(topicLink.dataset.topicFilter, { scroll: true });
    return;
  }

  const typeShortcut = event.target.closest("[data-type-shortcut]");
  if (typeShortcut) {
    setType(typeShortcut.dataset.typeShortcut, { scroll: true });
    return;
  }

  if (event.target.closest("[data-show-all]")) {
    state.topic = "all";
    state.query = "";
    searchInput.value = "";
    setType("all", { scroll: true });
  }
});

window.addEventListener("popstate", renderFromLocation);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !readerView.hidden) closeReader();
});

populateTopicSelect();
renderRepositoryState();
renderRecent();
renderTopicGrid();
renderCompactLists();
renderFromLocation();
