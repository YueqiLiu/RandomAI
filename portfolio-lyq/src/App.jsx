import { useEffect, useState } from 'react';

const assetUrl = (name) => `${import.meta.env.BASE_URL}assets/${name}`;
const featureNote = ['Small steps.', 'Steady progress.'];

const copy = {
  zh: {
    title: '刘跃琪 — 增长产品经理 / Portfolio',
    description: '刘跃琪的作品集：增长产品、AI 工具与独立项目。',
    home: '刘跃琪，回到首页',
    navLabel: '主要导航',
    nav: ['关于', '项目', '方法', '联系'],
    portraitLabel: '刘跃琪的个人照片，悬停或触摸可查看彩色',
    displayName: '刘跃琪',
    heroRole: ['增长产品经理'],
    heroIntro: <>构建有价值的产品。<br/>创造可衡量的成果。</>,
    heroCta: '聊聊合作',
    socialNavLabel: '我的社交媒体与社区',
    redditCommunity: 'Reddit 社区',
    socialHeading: '社交与社区',
    viewWork: '查看项目',
    contactMe: '联系我',
    aboutTitle: ['在产品与增长之间，', '把可能性变成结果。'],
    aboutBody: [
      '我是一名增长产品经理，拥有 4.5 年互联网产品与增长经验，聚焦 AI 建站、跨境 SaaS 与 TikTok 电商数据产品。',
      '我关心的是整个过程：从用户如何发现产品，到他们为何留下、如何获得价值，以及产品怎样持续成长。',
    ],
    experienceLink: '了解我的经历',
    metricIndex: 'AutoCoder / Google 索引页',
    metricUsers: 'FastMoss / 月活用户',
    metricConversion: 'Shoplus / 首页注册转化率',
    featureEyebrow: 'ROUTUNE / 从想法到 App',
    featureTitle: ['让每一次练习，', '都更有方向。'],
    featureSubheading: '从产品规划，到 iOS App 的最终实现。',
    featureBody: 'Routune 是我从规划到实现的鼓手练习 App，帮助练习者制定计划、专注计时、记录过程并追踪进步。',
    featureCta: '了解 Routune',
    featureAlt: 'Routune App 的练习进度界面',
    workTitle: ['有想法，', '也有可以验证的结果。'],
    workBody: '从职业项目到独立构建的产品，每一段经历都在回答同一个问题：怎样让体验与增长彼此推动？',
    approachTitle: ['清晰的思考，', '可执行的下一步。'],
    approachBody: '增长是产品价值被看见、被理解、被持续使用的过程。',
    experienceTitle: ['一路走来，', '持续构建。'],
    experienceBody: '跨境电商、数据产品、AI 工具与全球化增长，构成我看待产品问题的不同视角。',
    roles: ['海外增长产品', '美区产品增长负责人', '产品经理', '建站产品助理'],
    education: ['南安普顿大学 · 信息系统管理硕士', '朴茨茅斯大学 · 国际贸易与商务交流本科'],
    contactIntro: '有产品、增长或 AI 方向的想法？',
    emailButton: '发邮件给我',
    backToTop: 'BACK TO TOP',
    routuneTodayAlt: 'Routune 今日练习界面',
    routuneProgressAlt: 'Routune 练习进度界面',
  },
  en: {
    title: 'Yueqi Liu — Growth Product Manager / Portfolio',
    description: 'Yueqi Liu’s portfolio: growth products, AI tools, and independent projects.',
    home: 'Yueqi Liu, back to top',
    navLabel: 'Main navigation',
    nav: ['About', 'Work', 'Method', 'Contact'],
    portraitLabel: 'Portrait of Yueqi Liu; hover or touch to reveal color',
    displayName: 'Yueqi Liu',
    heroRole: ['Growth Product', 'Manager'],
    heroIntro: <>Building useful products.<br/>Creating measurable impact.</>,
    heroCta: 'Let’s connect',
    socialNavLabel: 'My social profiles and community',
    redditCommunity: 'Reddit community',
    socialHeading: 'ELSEWHERE',
    viewWork: 'View work',
    contactMe: 'Get in touch',
    aboutTitle: ['Turning ideas into', 'measurable impact.'],
    aboutBody: [
      'I’m a growth product manager with 4.5 years of experience across AI website builders, cross-border SaaS, and TikTok commerce data products.',
      'I care about the whole journey: how people discover a product, why they stay, where they find value, and how the product continues to grow.',
    ],
    experienceLink: 'Explore my experience',
    metricIndex: 'AutoCoder / Google indexed pages',
    metricUsers: 'FastMoss / monthly active users',
    metricConversion: 'Shoplus / homepage sign-up conversion',
    featureEyebrow: 'ROUTUNE / FROM IDEA TO APP',
    featureTitle: ['Practice', 'with purpose.'],
    featureSubheading: 'From product planning to iOS implementation.',
    featureBody: 'Routune is a drum-practice app I planned and built end to end. It helps drummers plan sessions, focus with a timer, log their work, and track progress.',
    featureCta: 'View Routune',
    featureAlt: 'Routune app practice progress screen',
    workTitle: ['Thoughtful ideas.', 'Measurable results.'],
    workBody: 'From work with product teams to products I built independently, each project asks the same question: how can experience and growth reinforce each other?',
    approachTitle: ['Clear thinking.', 'Actionable next steps.'],
    approachBody: 'Growth is the process of helping people discover, understand, and keep using a product’s value.',
    experienceTitle: ['A journey of', 'continuous building.'],
    experienceBody: 'Cross-border commerce, data products, AI tools, and global growth shape the way I approach product problems.',
    roles: ['International Growth Product', 'US Product Growth Lead', 'Product Manager', 'Website Product Assistant'],
    education: ['University of Southampton · MSc Information Systems Management', 'University of Portsmouth · BA International Trade and Business Communication'],
    contactIntro: 'Have an idea in product, growth, or AI?',
    emailButton: 'Email me',
    backToTop: 'BACK TO TOP',
    routuneTodayAlt: 'Routune today’s practice screen',
    routuneProgressAlt: 'Routune practice progress screen',
  },
};

const projects = [
  {
    number: '01', name: 'AutoCoder', date: { zh: '2026 — 至今', en: '2026 — Present' },
    url: 'https://www.autocoder.cc/',
    copy: {
      zh: { category: 'AI 建站 / 海外增长', headline: '让好的产品，被更多人发现。', description: '规划多语言页面与官网信息架构，推动技术 SEO、数据埋点及转化归因建设，让搜索流量与产品激活形成闭环。', facts: ['Google 索引页 15 → 450', 'DR 18 → 44', '新账户单周注册 +49.4%'], urlText: '访问产品' },
      en: { category: 'AI Website Builder / Global Growth', headline: 'Helping great products get discovered.', description: 'Planned multilingual pages and site architecture, then advanced technical SEO, analytics, and attribution to connect search discovery with product activation.', facts: ['Google indexed pages 15 → 450', 'Domain Rating 18 → 44', 'New-account sign-ups +49.4% in one week'], urlText: 'Visit product' },
    },
  },
  {
    number: '02', name: 'FastMoss', date: { zh: '2024 — 2026', en: '2024 — 2026' },
    url: 'https://www.fastmoss.com/',
    copy: {
      zh: { category: 'TikTok 电商 / AI 产品', headline: '让数据洞察，成为下一步行动。', description: '负责美区产品增长与商业化，从数据分析延伸到 AI 内容工具与 Agent 工作流，持续优化试用与订阅体验。', facts: ['月活用户 50万+', 'AI 功能渗透率 60%+', '7 日试用续费率 30.28%'], urlText: '访问产品' },
      en: { category: 'TikTok Commerce / AI Products', headline: 'Turning insight into the next move.', description: 'Led US product growth and monetization, expanding from analytics into AI content tools and agent workflows while improving trial and subscription experiences.', facts: ['500K+ monthly active users', '60%+ AI feature adoption', '30.28% renewal after a 7-day trial'], urlText: 'Visit product' },
    },
  },
  {
    number: '03', name: 'TopAITools4U', date: { zh: '独立项目', en: 'Independent Project' },
    url: 'https://www.topaitools4u.site/', secondary: 'https://www.reddit.com/r/TopAITools4U/',
    copy: {
      zh: { category: '个人项目 / AI 工具发现', headline: '从具体任务出发，找到真正有用的 AI 工具。', description: '独立搭建 AI 工具目录，连接任务搜索、分类、对比、技能与提示词生成器；同时经营 Reddit 社区，让讨论与目录相互补充。', facts: ['任务导向搜索', '工具对比与内容', 'Reddit 社区'], urlText: '访问网站', secondaryText: '浏览社区' },
      en: { category: 'AI Tool Discovery / Community', headline: 'Find useful AI tools by starting with the task.', description: 'Built an AI tool directory independently, bringing together task-based search, categories, comparisons, skills, and prompt generation. I also run a Reddit community alongside it.', facts: ['Task-based discovery', 'Tool comparisons and content', 'Reddit community'], urlText: 'Visit website', secondaryText: 'Explore community' },
    },
  },
  {
    number: '04', name: 'Routune', date: { zh: '独立项目', en: 'Independent Project' },
    url: 'https://testflight.apple.com/join/FbFGdmvp',
    copy: {
      zh: { category: '个人项目 / iOS App', headline: '让每一次练习，都看得见进步。', description: '从产品规划到最终实现的鼓手练习 App：练习计划、计时、训练记录、复盘和进度追踪，构成完整的日常练习闭环。', facts: ['产品规划与交互设计', 'iOS App 实现', '练习与进度闭环'], urlText: '加入 TestFlight 测试' },
      en: { category: 'Drum Practice / iOS App', headline: 'Make every practice session count.', description: 'A drum-practice app I planned and built end to end. Plans, timers, session logs, reviews, and progress tracking form a complete daily practice loop.', facts: ['Product planning and interaction design', 'iOS app implementation', 'Practice-to-progress loop'], urlText: 'Join the TestFlight beta' },
    },
  },
];

const process = [
  { number: '01', en: 'Discover', zh: { title: '发现问题', description: '从用户路径、行为数据与业务目标出发，找出真正值得解决的摩擦。' }, english: { title: 'Discover', description: 'Use user journeys, behavior data, and business goals to find friction worth solving.' } },
  { number: '02', en: 'Shape', zh: { title: '设计系统', description: '把信息架构、产品体验、内容与渠道串成可执行的增长系统。' }, english: { title: 'Shape', description: 'Connect information architecture, product experience, content, and channels into an actionable growth system.' } },
  { number: '03', en: 'Validate', zh: { title: '快速验证', description: '以 MVP、埋点和实验尽早验证假设，再决定投入的方向。' }, english: { title: 'Validate', description: 'Test assumptions early with MVPs, instrumentation, and experiments before committing more resources.' } },
  { number: '04', en: 'Evolve', zh: { title: '持续迭代', description: '让反馈、数据与产品判断回到同一个循环，持续改善结果。' }, english: { title: 'Evolve', description: 'Bring feedback, data, and product judgment into one loop to keep improving outcomes.' } },
];

function initialLanguage() {
  const query = new URLSearchParams(window.location.search).get('lang');
  if (query === 'en' || query === 'zh') return query;
  try { return window.localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'zh'; }
  catch { return 'zh'; }
}

function Label({ number, children }) {
  return <div className="label reveal"><span>{number} /</span><span>{children}</span></div>;
}

function SectionTitle({ lines }) {
  return <>{lines[0]}<br/><em>{lines[1]}</em></>;
}

function Project({ item, language, t }) {
  const details = item.copy[language];
  return <article className="project reveal" id={item.name.toLowerCase()}>
    <div className="project-meta"><span>{item.number} / SELECTED WORK</span><span>{item.date[language]}</span></div>
    <div className="project-grid">
      <div><span className="overline">{details.category}</span><h3>{item.name}</h3><p className="project-headline">{details.headline}</p></div>
      <div className="project-info"><p>{details.description}</p><ul>{details.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul><div className="project-links"><a href={item.url} target="_blank" rel="noreferrer">{details.urlText} ↗</a>{item.secondary && <a href={item.secondary} target="_blank" rel="noreferrer">{details.secondaryText} ↗</a>}</div></div>
    </div>
    {item.name === 'Routune' && <div className="routune-card"><div><span className="overline">ROUTUNE / A PERSONAL PROJECT</span><strong>Practice<br/><em>with purpose.</em></strong></div><div className="routune-screens"><img src={assetUrl('routune-today.jpeg')} alt={t.routuneTodayAlt}/><img src={assetUrl(language === 'en' ? 'routune-progress-en.jpeg' : 'routune-progress.png')} alt={t.routuneProgressAlt}/></div></div>}
  </article>;
}

function Portrait({ label }) {
  const [spotlight, setSpotlight] = useState(false);
  const moveSpotlight = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--spotlight-x', `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty('--spotlight-y', `${event.clientY - bounds.top}px`);
  };

  return <button type="button" className={`portrait-frame${spotlight ? ' is-spotlight-active' : ''}`} aria-label={label}
    onPointerEnter={(event) => { moveSpotlight(event); setSpotlight(true); }}
    onPointerMove={moveSpotlight}
    onPointerLeave={() => setSpotlight(false)}
    onPointerDown={(event) => { moveSpotlight(event); setSpotlight(true); }}
    onPointerUp={(event) => { if (event.pointerType === 'touch') setSpotlight(false); }}
    onPointerCancel={() => setSpotlight(false)}
    onFocus={() => setSpotlight(true)}
    onBlur={() => setSpotlight(false)}>
    <img className="portrait-mono" src={assetUrl('portrait-cutout.png')} alt="" aria-hidden="true"/>
    <img className="portrait-color" src={assetUrl('portrait-cutout.png')} alt="" aria-hidden="true"/>
  </button>;
}

export function App() {
  const [language, setLanguage] = useState(initialLanguage);
  const [expanded, setExpanded] = useState(0);
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.title = t.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.description);
    try { window.localStorage.setItem('portfolio-language', language); } catch { /* Storage may be unavailable. */ }
  }, [language, t]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const revealItems = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -45px 0px' });
    revealItems.forEach((item) => observer.observe(item));
    document.documentElement.classList.add('motion-ready');
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('motion-ready');
    };
  }, []);

  const changeLanguage = (next) => {
    if (next === language) return;
    const url = new URL(window.location.href);
    url.searchParams.set('lang', next);
    window.history.replaceState(null, '', url);
    setLanguage(next);
  };

  return <main className={`portfolio portfolio-${language}`}>
    <section className="hero portrait-hero" id="top">
      <header className="header wrap">
        <div className="header-identity"><a className="monogram" href="#top" aria-label={t.home}>LYQ<sup>®</sup></a><div className="language-switch" role="group" aria-label={language === 'zh' ? '语言选择' : 'Language selection'}><button type="button" lang="zh-CN" aria-pressed={language === 'zh'} onClick={() => changeLanguage('zh')}>中</button><span aria-hidden="true">/</span><button type="button" lang="en" aria-pressed={language === 'en'} onClick={() => changeLanguage('en')}>EN</button></div></div>
        <nav aria-label={t.navLabel}>{['about', 'work', 'approach', 'contact'].map((id, index) => <a key={id} href={`#${id}`}>{t.nav[index]}</a>)}</nav>
        <a className="header-mail" href="mailto:lyueqi1019@gmail.com">LET'S TALK</a>
      </header>
      <div className="portrait-stage wrap">
        <p className="stage-label">PORTFOLIO / 2026</p>
        <div className="hero-visual">
          <Portrait label={t.portraitLabel}/>
          <div className="name-backdrop" aria-hidden="true">YUEQI&nbsp; LIU</div>
          <div className="name-front">{t.displayName}<span>GROWTH PRODUCT MANAGER</span></div>
        </div>
        <div className="portrait-side portrait-side-left hero-intro">
          <h1 className="hero-role">{t.heroRole.map((line) => <span key={line}>{line}</span>)}</h1>
          <p>{t.heroIntro}</p>
          <a className="hero-cta" href="mailto:lyueqi1019@gmail.com"><span>{t.heroCta}</span><img src={assetUrl('arrow-up-right.svg')} width="19" height="19" alt="" aria-hidden="true"/></a>
        </div>
        <nav className="portrait-side portrait-side-right hero-socials" aria-label={t.socialNavLabel}>
          <span className="hero-social-label">{t.socialHeading}</span>
          <a className="social-link" href="https://x.com/TopAITools4U" target="_blank" rel="noopener noreferrer" aria-label="X · TopAITools4U">
            <img className="social-icon" src={assetUrl('social-x.svg')} width="21" height="21" alt="" aria-hidden="true"/>
            <span>X</span>
            <img className="social-arrow" src={assetUrl('arrow-up-right.svg')} width="17" height="17" alt="" aria-hidden="true"/>
          </a>
          <a className="social-link" href="https://www.reddit.com/r/TopAITools4U/" target="_blank" rel="noopener noreferrer" aria-label={`${t.redditCommunity} · r/TopAITools4U`}>
            <img className="social-icon" src={assetUrl('social-reddit.svg')} width="23" height="23" alt="" aria-hidden="true"/>
            <span>r/TopAITools4U</span>
            <img className="social-arrow" src={assetUrl('arrow-up-right.svg')} width="17" height="17" alt="" aria-hidden="true"/>
          </a>
        </nav>
        <div className="hero-page-index">01 / 06</div>
      </div>
    </section>

    <section className="about dark wrap" id="about"><Label number="01">ABOUT ME</Label><div className="intro reveal"><h2><SectionTitle lines={t.aboutTitle}/></h2><div>{t.aboutBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<a className="underlink" href="#experience">{t.experienceLink} ↘</a></div></div><div className="metrics reveal"><div><strong>15 <em>→</em> 450</strong><span>{t.metricIndex}</span></div><div><strong>{language === 'zh' ? '50万+' : '500K+'}</strong><span>{t.metricUsers}</span></div><div><strong>2% <em>→</em> 8%</strong><span>{t.metricConversion}</span></div></div></section>

    <section className="featured dark wrap" id="featured"><Label number="02">FEATURED PROJECT</Label><div className="featured-meta reveal"><span>INDEPENDENT PRODUCT / 2026</span><span>PRODUCT STRATEGY · EXPERIENCE · EXECUTION</span></div><div className="feature-panel reveal" style={{ backgroundImage: `url(${assetUrl('featured-botanical-shadow.jpg')})` }}><div className="feature-copy"><span className="overline">{t.featureEyebrow}</span><h2><SectionTitle lines={t.featureTitle}/></h2><p className="feature-subheading">{t.featureSubheading}</p><p className="feature-description">{t.featureBody}</p><a className="underlink" href="#routune">{t.featureCta} ↗</a></div><div className="feature-art"><img className="feature-screen" src={assetUrl(language === 'en' ? 'routune-progress-en.jpeg' : 'routune-progress.png')} alt={t.featureAlt} width="1242" height="2688" loading="lazy"/><p className="feature-note" lang="en"><span>{featureNote[0]}</span><span>{featureNote[1]}</span></p></div></div></section>

    <section className="projects light wrap" id="work"><Label number="03">SELECTED WORK</Label><div className="section-intro reveal"><h2><SectionTitle lines={t.workTitle}/></h2><p>{t.workBody}</p></div><div className="projects-list">{projects.map((item) => <Project key={item.name} item={item} language={language} t={t}/>)}</div></section>

    <section className="approach dark wrap" id="approach"><Label number="04">HOW I WORK</Label><div className="section-intro reveal"><h2><SectionTitle lines={t.approachTitle}/></h2><p>{t.approachBody}</p></div><div className="process-list">{process.map((step, index) => { const details = language === 'zh' ? step.zh : step.english; return <button type="button" className="process-row reveal" key={step.number} onClick={() => setExpanded(expanded === index ? -1 : index)} aria-expanded={expanded === index}><span>{step.number}</span><span><strong>{details.title}</strong>{language === 'zh' && <small>{step.en}</small>}{expanded === index && <p>{details.description}</p>}</span><span className="plus">{expanded === index ? '−' : '+'}</span></button>; })}</div></section>

    <section className="experience light wrap" id="experience"><Label number="05">EXPERIENCE</Label><div className="section-intro reveal"><h2><SectionTitle lines={t.experienceTitle}/></h2><p>{t.experienceBody}</p></div><div className="timeline"><div className="reveal"><span>{language === 'zh' ? '2026.03 — 至今' : 'Mar 2026 — Present'}</span><strong>AutoCoder.cc</strong><p>{t.roles[0]}</p></div><div className="reveal"><span>{language === 'zh' ? '2024.03 — 2026.03' : 'Mar 2024 — Mar 2026'}</span><strong>FastMoss</strong><p>{t.roles[1]}</p></div><div className="reveal"><span>{language === 'zh' ? '2022.05 — 2023.12' : 'May 2022 — Dec 2023'}</span><strong>{language === 'zh' ? 'Shoplus / 至真科技' : 'Shoplus / Zhizhen Technology'}</strong><p>{t.roles[2]}</p></div><div className="reveal"><span>{language === 'zh' ? '2021.12 — 2022.05' : 'Dec 2021 — May 2022'}</span><strong>{language === 'zh' ? '兰汀芷岸' : 'Lanting Zhian'}</strong><p>{t.roles[3]}</p></div></div><div className="education reveal"><span>EDUCATION</span><p>{t.education[0]}</p><p>{t.education[1]}</p></div></section>

    <section className="contact dark wrap" id="contact"><Label number="06">LET'S CONNECT</Label><div className="contact-body reveal"><p>{t.contactIntro}</p><h2>Great work<br/><em>starts here.</em></h2><a className="contact-button" href="mailto:lyueqi1019@gmail.com">{t.emailButton} ↗</a></div><footer><a className="monogram" href="#top" aria-label={t.home}>LYQ<sup>®</sup></a><div><a href="https://www.topaitools4u.site/" target="_blank" rel="noreferrer">TopAITools4U</a><a href="https://www.reddit.com/r/TopAITools4U/" target="_blank" rel="noreferrer">Reddit Community</a></div><a href="#top">{t.backToTop} ↑</a><small>© 2026 {t.displayName}</small></footer></section>
  </main>;
}
