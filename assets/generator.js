const pools = {
  audience: [
    "solo founders",
    "busy creators",
    "small agencies",
    "indie hackers",
    "teachers",
    "local businesses",
    "remote teams",
    "newsletter writers"
  ],
  niches: [
    "customer support",
    "content planning",
    "developer workflows",
    "lead generation",
    "online learning",
    "personal productivity",
    "social media research",
    "sales enablement"
  ],
  formats: [
    "dashboard",
    "browser extension",
    "chat assistant",
    "template library",
    "daily email",
    "API wrapper",
    "notion-style workspace",
    "mobile companion"
  ],
  tones: [
    "practical",
    "playful",
    "premium",
    "minimal",
    "bold",
    "friendly"
  ],
  verbs: [
    "Summarize",
    "Rewrite",
    "Compare",
    "Brainstorm",
    "Audit",
    "Plan",
    "Score",
    "Transform"
  ],
  assets: [
    "landing pages",
    "YouTube scripts",
    "sales emails",
    "product ideas",
    "customer interviews",
    "blog outlines",
    "ad angles",
    "research notes"
  ],
  names: [
    "Spark",
    "Loop",
    "Pilot",
    "Forge",
    "Nest",
    "Pulse",
    "Atlas",
    "Studio",
    "Craft",
    "Signal"
  ]
};

const generatorMeta = {
  "ai-idea": {
    cta: "Generate another AI idea",
    resultLabel: "AI project idea",
    toolLinks: [
      ["Best AI Coding Tools", "https://www.topaitools4u.site/ai-coding-tools"],
      ["Best AI Writing Tools", "https://www.topaitools4u.site/ai-writing-tools"],
      ["Best AI Productivity Tools", "https://www.topaitools4u.site/ai-productivity-tools"]
    ]
  },
  prompt: {
    cta: "Generate another prompt",
    resultLabel: "Prompt",
    toolLinks: [
      ["Best ChatGPT Tools", "https://www.topaitools4u.site/chatgpt-tools"],
      ["Best AI Writing Tools", "https://www.topaitools4u.site/ai-writing-tools"],
      ["Best AI Research Tools", "https://www.topaitools4u.site/ai-research-tools"]
    ]
  },
  saas: {
    cta: "Generate another SaaS idea",
    resultLabel: "SaaS idea",
    toolLinks: [
      ["Best AI Website Builders", "https://www.topaitools4u.site/ai-website-builders"],
      ["Best AI Coding Tools", "https://www.topaitools4u.site/ai-coding-tools"],
      ["Best AI Marketing Tools", "https://www.topaitools4u.site/ai-marketing-tools"]
    ]
  },
  name: {
    cta: "Generate another name",
    resultLabel: "Business name",
    toolLinks: [
      ["Best AI Logo Generators", "https://www.topaitools4u.site/ai-logo-generators"],
      ["Best AI Brand Tools", "https://www.topaitools4u.site/ai-branding-tools"],
      ["Best AI Website Builders", "https://www.topaitools4u.site/ai-website-builders"]
    ]
  },
  blog: {
    cta: "Generate another title",
    resultLabel: "Blog title",
    toolLinks: [
      ["Best AI SEO Tools", "https://www.topaitools4u.site/ai-seo-tools"],
      ["Best AI Writing Tools", "https://www.topaitools4u.site/ai-writing-tools"],
      ["Best AI Content Tools", "https://www.topaitools4u.site/ai-content-tools"]
    ]
  }
};

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function titleCase(value) {
  return value.replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, "&#96;");
}

function getControlValue(id, fallback) {
  const node = document.getElementById(id);
  return node && node.value ? node.value : fallback;
}

function buildIdea() {
  const audience = getControlValue("audience", pick(pools.audience));
  const niche = getControlValue("niche", pick(pools.niches));
  const format = getControlValue("format", pick(pools.formats));
  const name = `${titleCase(pick(pools.names))}${titleCase(niche.split(" ")[0])}`;

  return {
    title: `${name}: AI ${format} for ${audience}`,
    sections: [
      ["Target user", `Designed for ${audience} who need faster decisions in ${niche}.`],
      ["Core promise", `Turn messy inputs into clear next steps, drafts, and tool recommendations in under five minutes.`],
      ["MVP features", ["Input wizard", "AI-generated action plan", "Exportable checklist", "Recommended tools from TopAITools4U"]],
      ["Monetization", "Free generator plus paid templates, affiliate tool listings, and a $9/month pro workspace."]
    ]
  };
}

function buildPrompt() {
  const tone = getControlValue("tone", pick(pools.tones));
  const asset = getControlValue("asset", pick(pools.assets));
  const verb = pick(pools.verbs);

  return {
    title: `${verb} ${asset} like a ${tone} strategist`,
    sections: [
      ["Copy-ready prompt", `Act as a ${tone} AI strategist. ${verb} my ${asset}. Ask up to 3 clarifying questions, then produce a structured output with priorities, examples, and next actions.`],
      ["Best for", `Use this when you need a fast first draft for ${asset} without starting from a blank page.`],
      ["Upgrade path", "Compare specialized AI tools on TopAITools4U when you need a dedicated workflow."]
    ]
  };
}

function buildSaas() {
  const audience = getControlValue("audience", pick(pools.audience));
  const niche = getControlValue("niche", pick(pools.niches));
  const format = getControlValue("format", pick(pools.formats));

  return {
    title: `${titleCase(niche)} Copilot for ${titleCase(audience)}`,
    sections: [
      ["One-liner", `A lightweight ${format} that helps ${audience} automate ${niche} workflows with AI.`],
      ["MVP scope", ["One guided intake form", "Three generated outputs", "Saved history", "Affiliate recommendations for related AI tools"]],
      ["First customers", `Start with ${audience} already searching for templates, checklists, and tool comparisons.`],
      ["SEO angle", `Target keywords like "AI tools for ${niche}" and "best ${niche} AI software".`]
    ]
  };
}

function buildName() {
  const tone = getControlValue("tone", pick(pools.tones));
  const niche = getControlValue("niche", pick(pools.niches));
  const base = pick(pools.names);
  const suffix = pick(["AI", "HQ", "Lab", "Kit", "Flow", "Base", "Works", "Desk"]);

  return {
    title: `${base}${suffix}`,
    sections: [
      ["Positioning", `A ${tone} name for an AI product in ${niche}.`],
      ["Tagline", `${titleCase(niche)} made faster with AI.`],
      ["Domain ideas", [`try${base.toLowerCase()}${suffix.toLowerCase()}.com`, `${base.toLowerCase()}${suffix.toLowerCase()}.ai`, `${base.toLowerCase()}-${suffix.toLowerCase()}.com`]],
      ["Next step", "Use TopAITools4U to compare logo, website, and copywriting tools for the brand."]
    ]
  };
}

function buildBlog() {
  const audience = getControlValue("audience", pick(pools.audience));
  const niche = getControlValue("niche", pick(pools.niches));
  const angle = pick(["Best", "Free", "Simple", "Practical", "Beginner-Friendly", "High-ROI"]);

  return {
    title: `${angle} AI Tools for ${titleCase(niche)} in 2026`,
    sections: [
      ["Search intent", `${audience} looking for AI software, comparisons, and quick recommendations.`],
      ["Outline", ["Problem overview", "Tool shortlist", "Comparison table", "Use cases", "FAQ"]],
      ["Internal links", "Link to a RandomAI generator for ideation and a TopAITools4U list for tool discovery."],
      ["CTA", `Invite readers to generate a ${niche} workflow and then browse recommended tools.`]
    ]
  };
}

function renderResult(result) {
  const container = document.getElementById("result");
  if (!container) return;

  const sections = result.sections.map(([label, value]) => {
    const body = Array.isArray(value)
      ? `<ul>${value.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`
      : `<p>${escapeHtml(value)}</p>`;
    return `<div class="result-section"><strong>${escapeHtml(label)}</strong>${body}</div>`;
  }).join("");

  container.innerHTML = `<h3>${escapeHtml(result.title)}</h3>${sections}`;
}

function copyResult() {
  const result = document.getElementById("result") || document.getElementById("promptOutput");
  if (!result) return;
  const text = result.innerText.trim();
  const button = document.getElementById("copyResult");
  const previous = button ? button.textContent : "";
  const setStatus = (label) => {
    if (!button) return;
    button.textContent = label;
    setTimeout(() => {
      button.textContent = previous;
    }, 1400);
  };
  const fallbackCopy = () => {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.left = "-999px";
    document.body.appendChild(area);
    area.select();
    const copied = document.execCommand("copy");
    area.remove();
    setStatus(copied ? "Copied" : "Select text to copy");
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => setStatus("Copied")).catch(fallbackCopy);
    return;
  }

  fallbackCopy();
}

function buildBlogOutlinePrompt() {
  const topic = getControlValue("topic", "AI writing tools for bloggers");
  const audience = getControlValue("audience", "solo bloggers and content creators");
  const keyword = getControlValue("keyword", "best AI writing tools");
  const tone = getControlValue("tone", "practical");
  const length = getControlValue("length", "1500 words");

  return `You are an expert SEO content strategist.

Create a detailed blog post outline for the topic: ${topic}

Target audience: ${audience}
Main keyword: ${keyword}
Tone: ${tone}
Target length: ${length}

The outline should include:
- A compelling H1 title that naturally includes the main keyword
- A short search intent summary
- 5 to 7 H2 sections with 2 to 4 H3 subsections where useful
- Key talking points for each section
- Suggested examples, comparisons, or data points to include
- A practical introduction hook
- A conclusion with a clear call to action
- 5 FAQ questions that match likely Google searches

Make the outline skimmable, useful, and ready for a writer to turn into a complete article.`;
}

function initPromptTemplate() {
  const root = document.querySelector("[data-prompt-template]");
  if (!root) return;
  const output = document.getElementById("promptOutput");
  const generate = () => {
    if (!output) return;
    output.textContent = buildBlogOutlinePrompt();
  };

  ["topic", "audience", "keyword", "tone", "length"].forEach((id) => {
    document.getElementById(id)?.addEventListener("input", generate);
    document.getElementById(id)?.addEventListener("change", generate);
  });
  document.getElementById("generatePrompt")?.addEventListener("click", generate);
  document.getElementById("copyPrompt")?.addEventListener("click", copyResult);
  generate();
}

function initGenerator() {
  const root = document.querySelector("[data-generator]");
  if (!root) return;
  const type = root.dataset.generator;
  const builders = {
    "ai-idea": buildIdea,
    prompt: buildPrompt,
    saas: buildSaas,
    name: buildName,
    blog: buildBlog
  };
  const builder = builders[type] || buildIdea;
  const meta = generatorMeta[type] || generatorMeta["ai-idea"];
  const generate = () => renderResult(builder());

  document.getElementById("generate")?.addEventListener("click", generate);
  document.getElementById("copyResult")?.addEventListener("click", copyResult);
  document.getElementById("generateLabel")?.replaceChildren(document.createTextNode(meta.cta));

  const toolList = document.getElementById("toolLinks");
  if (toolList) {
    toolList.innerHTML = meta.toolLinks.map(([label, href]) => `<a href="${escapeAttribute(href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a>`).join("");
  }

  generate();
}

document.addEventListener("DOMContentLoaded", () => {
  initGenerator();
  initPromptTemplate();
});
