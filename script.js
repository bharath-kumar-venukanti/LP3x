/* =====================================================================
   Bharath — JavaScript Portfolio
   script.js

   Renders the program cards from programs-data.js, wires up search and
   filtering, and runs each program in a sandboxed console so the output
   appears right inside the card.
   ===================================================================== */
(function () {
  "use strict";

  /* ------------------------------------------------------------------
     Edit these three links to point at your own profiles.
     ------------------------------------------------------------------ */
  const CONFIG = {
    name: "Bharath",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    email: "you@example.com",
  };

  const CATEGORY_COLORS = {
    fundamentals: "#4f8cff",
    operators: "#22d3a6",
    loops: "#a78bfa",
    arrays: "#f59e0b",
    objects: "#ec4899",
    functions: "#06b6d4",
    strings: "#10b981",
    callbacks: "#f97316",
    promises: "#8b5cf6",
    async: "#ef4444",
  };

  const TIMER_CAP_MS = 400; // demo timers run fast so output appears quickly

  const programs = window.PROGRAMS || [];
  const categories = window.CATEGORIES || [];
  const categoryOrder = categories.map((c) => c.id);
  const categoryLabel = Object.fromEntries(categories.map((c) => [c.id, c.label]));

  const $ = (sel) => document.querySelector(sel);

  /* ==================================================================
     1. Config + theme
     ================================================================== */
  function applyConfig() {
    const map = {
      heroGithub: CONFIG.github,
      heroLinkedin: CONFIG.linkedin,
      footerGithub: CONFIG.github,
      footerLinkedin: CONFIG.linkedin,
      footerEmail: "mailto:" + CONFIG.email,
    };
    Object.entries(map).forEach(([id, href]) => {
      const el = document.getElementById(id);
      if (el) el.href = href;
    });
  }

  function initTheme() {
    const root = document.documentElement;
    const saved = safeGet("portfolio-theme");
    if (saved === "light" || saved === "dark") root.dataset.theme = saved;

    const toggle = $("#themeToggle");
    toggle.addEventListener("click", () => {
      const next = root.dataset.theme === "light" ? "dark" : "light";
      root.dataset.theme = next;
      safeSet("portfolio-theme", next);
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", next === "light" ? "#f6f8fc" : "#0b1020");
    });
  }

  function safeGet(key) {
    try { return localStorage.getItem(key); } catch { return null; }
  }
  function safeSet(key, value) {
    try { localStorage.setItem(key, value); } catch { /* ignore */ }
  }

  /* ==================================================================
     2. Stats + hero counters
     ================================================================== */
  function renderStats() {
    const totalLines = programs.reduce((sum, p) => sum + (p.lines || 0), 0);
    const runnable = programs.filter((p) => p.runnable).length;

    setText("heroCount", programs.length);
    setText("totalCount", programs.length);
    setText("statPrograms", programs.length);
    setText("statCategories", categories.length);
    setText("statLines", totalLines.toLocaleString());
    setText("statRunnable", runnable);
    setText("year", new Date().getFullYear());
  }

  function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  /* ==================================================================
     3. Category chips
     ================================================================== */
  const state = { category: "all", query: "" };

  function renderChips() {
    const wrap = $("#categoryChips");
    const counts = {};
    programs.forEach((p) => { counts[p.category] = (counts[p.category] || 0) + 1; });

    const build = (id, label, count) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip" + (id === state.category ? " is-active" : "");
      btn.dataset.category = id;
      btn.innerHTML = label + '<span class="chip__n">' + count + "</span>";
      btn.addEventListener("click", () => {
        state.category = id;
        wrap.querySelectorAll(".chip").forEach((c) => c.classList.toggle("is-active", c === btn));
        applyFilter();
      });
      return btn;
    };

    wrap.innerHTML = "";
    wrap.appendChild(build("all", "All", programs.length));
    categoryOrder.forEach((id) => wrap.appendChild(build(id, categoryLabel[id], counts[id] || 0)));
  }

  /* ==================================================================
     4. Cards
     ================================================================== */
  const cardRefs = [];

  function createCard(program) {
    const color = CATEGORY_COLORS[program.category] || "var(--accent)";

    const card = document.createElement("article");
    card.className = "card";

    // header
    const top = document.createElement("div");
    top.className = "card__top";

    const title = document.createElement("h3");
    title.className = "card__title";
    title.textContent = program.title;

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = categoryLabel[program.category] || program.category;
    badge.style.background = hexA(color, 0.14);
    badge.style.color = color;
    badge.style.borderColor = hexA(color, 0.4);

    top.append(title, badge);
    card.appendChild(top);

    // description
    const desc = document.createElement("p");
    desc.className = "card__desc";
    desc.textContent = program.description;
    card.appendChild(desc);

    // tags
    const tags = document.createElement("div");
    tags.className = "card__tags";
    (program.tags || []).forEach((t) => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = t;
      tags.appendChild(tag);
    });
    card.appendChild(tags);

    // file path
    const file = document.createElement("p");
    file.className = "card__file";
    file.textContent = program.file;
    card.appendChild(file);

    // actions
    const actions = document.createElement("div");
    actions.className = "card__actions";

    const runBtn = document.createElement("button");
    runBtn.type = "button";
    runBtn.className = "act act--run" + (program.runnable ? "" : " act--disabled");
    runBtn.innerHTML =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l12-7.5-12-7.5Z"/></svg>Run';
    if (!program.runnable) {
      runBtn.disabled = true;
      runBtn.title = program.note || "This program can only run in Node.js.";
    }

    const codeBtn = document.createElement("button");
    codeBtn.type = "button";
    codeBtn.className = "act";
    codeBtn.setAttribute("aria-expanded", "false");
    codeBtn.innerHTML =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 6-5 6 5 6M16 6l5 6-5 6"/></svg>Code';

    actions.append(runBtn, codeBtn);
    card.appendChild(actions);

    // code panel
    const codePanel = document.createElement("div");
    codePanel.className = "panel panel--code";

    const codeBar = document.createElement("div");
    codeBar.className = "panel__bar";
    codeBar.innerHTML =
      '<span class="dotrow"><i class="dot dot--r"></i><i class="dot dot--y"></i><i class="dot dot--g"></i></span>' +
      '<span class="label">' + escapeHtml(baseName(program.file)) + "</span>";

    const copyBtn = document.createElement("button");
    copyBtn.type = "button";
    copyBtn.className = "copy-btn";
    copyBtn.textContent = "Copy";
    codeBar.appendChild(copyBtn);

    const pre = document.createElement("pre");
    const code = document.createElement("code");
    code.className = "language-javascript";
    pre.appendChild(code);
    codePanel.append(codeBar, pre);

    // console panel
    const consolePanel = document.createElement("div");
    consolePanel.className = "panel panel--console";

    const consoleBar = document.createElement("div");
    consoleBar.className = "panel__bar";
    consoleBar.innerHTML =
      '<span class="dotrow"><i class="dot dot--r"></i><i class="dot dot--y"></i><i class="dot dot--g"></i></span>';
    const label = document.createElement("span");
    label.className = "label";
    label.textContent = "console";
    const status = document.createElement("span");
    status.className = "console-status";
    status.textContent = program.runnable ? "ready" : "node only";
    consoleBar.append(label, status);
    const out = document.createElement("pre");
    out.className = "console-out";
    consolePanel.append(consoleBar, out);

    card.append(codePanel, consolePanel);

    // ---- behaviour ----
    let highlighted = false;
    codeBtn.addEventListener("click", () => {
      const open = codePanel.classList.toggle("is-open");
      codeBtn.setAttribute("aria-expanded", String(open));
      if (open && !highlighted) {
        code.textContent = program.code;
        highlight(code);
        highlighted = true;
      }
    });

    copyBtn.addEventListener("click", () => copyText(program.code, copyBtn));

    runBtn.addEventListener("click", () => {
      consolePanel.classList.add("is-open");
      executeProgram(program, out, status, runBtn);
    });

    return card;
  }

  function renderCards() {
    const grid = $("#cards");
    const frag = document.createDocumentFragment();
    programs.forEach((program) => {
      const el = createCard(program);
      frag.appendChild(el);
      cardRefs.push({
        el,
        program,
        haystack: [
          program.title,
          program.description,
          (program.tags || []).join(" "),
          categoryLabel[program.category] || "",
          program.file,
          program.code,
        ].join(" ").toLowerCase(),
      });
    });
    grid.appendChild(frag);
  }

  /* ==================================================================
     5. Search + filter
     ================================================================== */
  function applyFilter() {
    const q = state.query.trim().toLowerCase();
    let visible = 0;
    cardRefs.forEach((ref) => {
      const inCategory = state.category === "all" || ref.program.category === state.category;
      const inSearch = !q || ref.haystack.includes(q);
      const show = inCategory && inSearch;
      ref.el.hidden = !show;
      if (show) visible++;
    });
    setText("visibleCount", visible);
    $("#emptyState").hidden = visible !== 0;
  }

  function initSearch() {
    const input = $("#searchInput");
    const clear = $("#searchClear");

    let t;
    input.addEventListener("input", () => {
      clear.hidden = !input.value;
      clearTimeout(t);
      t = setTimeout(() => {
        state.query = input.value;
        applyFilter();
      }, 90);
    });

    clear.addEventListener("click", () => {
      input.value = "";
      state.query = "";
      clear.hidden = true;
      applyFilter();
      input.focus();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "/" && document.activeElement !== input) {
        e.preventDefault();
        input.focus();
      }
    });
  }

  /* ==================================================================
     6. The run engine
     ================================================================== */
  const activeTimers = new Map(); // program.id -> Set<number>

  function clearTimers(id) {
    const set = activeTimers.get(id);
    if (!set) return;
    set.forEach((t) => { window.clearTimeout(t); window.clearInterval(t); });
    set.clear();
  }

  function fmt(value, depth) {
    depth = depth || 0;
    if (value === null) return "null";
    if (value === undefined) return "undefined";
    const t = typeof value;
    if (t === "string") return depth === 0 ? value : "'" + value + "'";
    if (t === "number" || t === "boolean") return String(value);
    if (t === "bigint") return value + "n";
    if (t === "symbol") return value.toString();
    if (t === "function") return "[Function: " + (value.name || "anonymous") + "]";
    if (value instanceof Error) return value.stack || value.name + ": " + value.message;
    if (value instanceof Date) return value.toISOString();
    if (Array.isArray(value)) {
      if (depth > 3) return "[Array]";
      return "[ " + value.map((v) => fmt(v, depth + 1)).join(", ") + " ]";
    }
    if (depth > 3) return "[Object]";
    const keys = Object.keys(value);
    if (!keys.length) return "{}";
    return "{ " + keys.map((k) => k + ": " + fmt(value[k], depth + 1)).join(", ") + " }";
  }

  function createConsole(outEl) {
    function line(text, cls) {
      const el = document.createElement("span");
      el.className = "console-line" + (cls ? " console--" + cls : "");
      el.textContent = text;
      outEl.appendChild(el);
      outEl.scrollTop = outEl.scrollHeight;
      return el;
    }
    return {
      log: (...a) => line(a.map((v) => fmt(v)).join(" ")),
      info: (...a) => line(a.map((v) => fmt(v)).join(" "), "info"),
      warn: (...a) => line(a.map((v) => fmt(v)).join(" "), "warn"),
      error: (...a) => line(a.map((v) => fmt(v)).join(" "), "error"),
      debug: (...a) => line(a.map((v) => fmt(v)).join(" "), "meta"),
      table: (...a) => line(a.map((v) => fmt(v)).join(" ")),
      note: (text, cls) => line(text, cls || "meta"),
      raw: (text) => {
        let last = outEl.lastElementChild;
        if (!last) last = line("", "meta");
        last.textContent += text;
        outEl.scrollTop = outEl.scrollHeight;
      },
    };
  }

  function executeProgram(program, outEl, statusEl, runBtn) {
    clearTimers(program.id);
    outEl.innerHTML = "";
    runBtn.classList.add("is-running");
    statusEl.innerHTML = '<span class="spinner"></span>running…';

    const csl = createConsole(outEl);
    const timers = new Set();
    activeTimers.set(program.id, timers);

    let pending = 0;
    let intervals = 0;
    let finished = false;

    const settle = () => {
      if (finished) return;
      if (pending === 0 && intervals === 0) {
        finished = true;
        runBtn.classList.remove("is-running");
        statusEl.textContent = "finished";
      }
    };

    const later = (fn) => window.setTimeout(fn, 80); // let microtasks flush first

    const cappedTimeout = (fn, ms, ...args) => {
      const delay = Math.min(Number(ms) || 0, TIMER_CAP_MS);
      pending++;
      const id = window.setTimeout(() => {
        timers.delete(id);
        pending--;
        try {
          if (typeof fn === "function") fn(...args);
          else csl.note("setTimeout was given a non-function", "warn");
        } catch (err) {
          csl.error(err);
        }
        later(settle);
      }, delay);
      timers.add(id);
      return id;
    };

    const cappedInterval = (fn, ms, ...args) => {
      const delay = Math.min(Number(ms) || 200, TIMER_CAP_MS) || 200;
      intervals++;
      const id = window.setInterval(() => {
        try { fn(...args); } catch (err) { csl.error(err); }
      }, delay);
      timers.add(id);
      return id;
    };

    const cappedClearTimeout = (id) => {
      if (timers.has(id)) { timers.delete(id); pending = Math.max(0, pending - 1); }
      window.clearTimeout(id);
      window.clearInterval(id);
    };

    const processShim = {
      stdout: { write: (s) => csl.raw(String(s)) },
      stderr: { write: (s) => csl.raw(String(s)) },
      env: {},
      argv: [],
    };

    try {
      // No "use strict" here on purpose: we want the same non-strict semantics
      // the files have when run with `node file.js`.
      const factory = new Function(
        "console", "process", "setTimeout", "setInterval", "clearTimeout", "clearInterval",
        program.code
      );
      factory(csl, processShim, cappedTimeout, cappedInterval, cappedClearTimeout, cappedClearTimeout);
      later(settle);
    } catch (err) {
      finished = true;
      runBtn.classList.remove("is-running");
      statusEl.textContent = "error";
      csl.error(err);
    }
  }

  /* ==================================================================
     7. Small helpers
     ================================================================== */
  function highlight(codeEl) {
    if (window.Prism && window.Prism.languages && window.Prism.languages.javascript) {
      try {
        const html = window.Prism.highlight(
          codeEl.textContent,
          window.Prism.languages.javascript,
          "javascript"
        );
        codeEl.innerHTML = html;
      } catch (e) { /* keep plain text */ }
    }
  }

  function copyText(text, btn) {
    const done = () => {
      const original = btn.textContent;
      btn.textContent = "Copied!";
      btn.classList.add("is-copied");
      setTimeout(() => { btn.textContent = original; btn.classList.remove("is-copied"); }, 1400);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(fallback);
    } else {
      fallback();
    }
    function fallback() {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); done(); } catch (e) { /* ignore */ }
      document.body.removeChild(ta);
    }
  }

  function baseName(path) {
    return String(path).split(/[\\/]/).pop();
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));
  }

  function hexA(hex, alpha) {
    if (hex.charAt(0) !== "#") return hex;
    const a = Math.round(Math.min(Math.max(alpha, 0), 1) * 255).toString(16).padStart(2, "0");
    return hex + a;
  }

  /* ==================================================================
     8. Page chrome: reveal, progress, back-to-top
     ================================================================== */
  // Entrance animations are CSS-only (visible by default). This just removes
  // the animation class once it has had time to finish, so content can never
  // be left hidden if a browser skips the animation.
  function initEntrance() {
    window.setTimeout(() => {
      document.querySelectorAll(".anim").forEach((el) => el.classList.remove("anim"));
    }, 1400);
  }

  function initChrome() {
    const progress = $("#scrollProgress");
    const toTop = $("#toTop");

    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        const pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
        progress.style.width = pct + "%";
        toTop.classList.toggle("is-visible", doc.scrollTop > 500);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ==================================================================
     9. Boot
     ================================================================== */
  function init() {
    applyConfig();
    initTheme();
    renderStats();
    renderChips();
    renderCards();
    initSearch();
    initEntrance();
    initChrome();
    applyFilter();

    if (!programs.length) {
      $("#emptyState").hidden = false;
      $("#emptyState").textContent = "No programs found. Did programs-data.js load?";
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
