// Preserve the static introduction before the machine mounts its interface.
window.randomaiDiscoveryGuide=document.getElementById('discovery-guide');
/* Follow the browser language on first visit; explicit choices take precedence. */
(() => {
 const copy = {
"第一次来？三步开出小惊喜":"Your first capsule, in three little steps",
"投一枚币":"Insert a coin",
"点一下「投入灵感币」，免费领一份好奇心。":"Tap “Insert coin” to start. The coins are free.",
"转一转":"Turn the crank",
"点「转动手柄」，等小扭蛋滚出来。":"Tap “Turn crank” and watch a capsule roll out.",
"打开看看":"Open your surprise",
"点「打开扭蛋」，认识新工具。喜欢就去试试，玩完点「收起惊喜」继续扭。":"Tap “Open capsule” to meet your tool. Try it out, then tap “Put prize away” for another draw.",
"还有一点小好奇？":"A few more curious questions",
"扭蛋抽完了怎么办？":"What if the machine runs out?",
"点一下「补充扭蛋」，小机器就又装满啦。已经收集的小玩具也可以点开，回看当时遇到的工具。":"Tap “Refill” to fill the machine again. You can also tap a collected toy to revisit the tool from that draw.",
"我做的产品，也能住进扭蛋里吗？":"Can my product join the capsule machine?",
"当然欢迎来敲门！先到 TopAITools4U 填写产品资料，按页面提示在自己的网站添加并验证徽章，再提交审核。审核通过并收录的产品会随产品库更新进入随机抽取范围；不会保证每次都被抽到哦。":"We would love to hear about it! Submit your product details on TopAITools4U, add and verify its badge on your website, then send it for review. Approved listings join the random selection as the catalog updates. Each draw is random, so placement is not guaranteed.",
"带我的产品来报到 ↗":"Submit my product ↗",

 "装好好奇心，准备开扭":"FOLLOW YOUR CURIOSITY",
 "下一颗，藏着什么小惊喜？":"Your next capsule. A new possibility.",
 "欢迎来到 RandomAI 的 AI 扭蛋小铺！投一枚免费灵感币，转一转手柄，再打开扭蛋——今天会和哪个 AI 工具碰个面呢？":"RandomAI is a free random AI tool generator. Insert a coin, turn the crank, and discover something worth trying.",
 "先偷看几颗扭蛋……":"A few possibilities inside",
 "脑袋里冒出一个问号？让它帮你找找答案。":"Ask something you have always wondered about.",
 "接住你的灵光一闪，变成一份 PPT。":"Turn a little idea into a presentation.",
 "把今天的心情，哼成一首小曲。":"Give an ordinary day its own soundtrack.",
 "这只是小小一角。下一颗是谁？打开才揭晓！":"Examples from the discovery pool. Your next draw is a surprise.",
 "小小扭蛋里，都装了些什么？":"What goes into a capsule?",
 "会写作的、会编程的、会画画的、会做音乐的……各种 AI 工具都藏在扭蛋里等你发现。每颗都附有小介绍和官网入口，遇到喜欢的，就去试试吧！":"The pool brings together AI tools for different kinds of tasks, each with a short introduction and an official website link.",
 "灵感币免费，放心扭。工具是否需要注册或付费，记得去官网看一眼哦。":"Drawing a capsule is free. Individual tools may require an account or paid plan.",
 "心里已经有想找的工具啦？":"Have a task in mind?",
 "去 TopAITools4U 逛逛 ↗":"Find your tool on TopAITools4U ↗",

 'Random AI · AI 盲盒':'Random AI · AI Capsule Machine',
 'Random AI 首页':'Random AI home',
 '浏览全部 AI ↗':'Browse all AI ↗',
 '一点好奇心，换一个新发现':'A little curiosity. A new discovery.',
 '今天，会遇见什么 AI？':'What AI will you discover today?',
 '投一枚灵感币，转动手柄，打开你的 AI 盲盒。':'Insert a free coin, turn the crank, and open your AI capsule.',
 '投入灵感币':'Insert coin','转动手柄':'Turn crank','打开扭蛋':'Open capsule','收起惊喜':'Put prize away','补充扭蛋':'Refill',
 '手绘抖动':'Hand-drawn wobble','机身颜色':'Body colour','视角 · 拖动机器可旋转':'View · drag to rotate','初始视角':'Reset view','自动旋转':'Turntable',
 '灵感币 · 免费':'Coins · free','机内扭蛋':'Capsules left','已收集':'Collected',
 '芥末黄':'Mustard','番茄红':'Tomato','薄荷绿':'Mint','钴蓝':'Cobalt','樱花粉':'Blush',
 '免费灵感币，仅用于互动体验。':'Coins are free and for play only.',
 '探索完整产品库：':'Explore the full directory: ', '扭蛋机基于 ':'Machine by ',
 '你发现了 · ':'You discovered · ','试试这个：':'Try this: ',
 '在 TopAITools4U 查看详情 ↗':'View details on TopAITools4U ↗',
 '体验产品 ↗':'Try this tool ↗','去 TopAITools4U 探索更多 ↗':'Explore more on TopAITools4U ↗',
 '将在官网体验；注册与收费规则以产品官网为准。':'Opens the official website. Sign-up and pricing depend on the tool.',
 '已投入灵感币，请转动手柄':'A coin is already in. Turn the crank.',
 '扭蛋已空，请先补充':'No capsules left. Refill the machine first.',
 '请先打开并收起当前扭蛋':'Open and put away your current capsule first.',
 '先投入一枚免费灵感币':'Insert a free coin first.',
 '已收起惊喜，继续发现下一个 AI':'Prize put away. Discover another AI!',
 '先转动手柄，获取一颗扭蛋':'Turn the crank to get a capsule first.',
 '扭蛋已打开，可以体验或收起':'Already open. Try the tool or put your prize away.',
 '先打开扭蛋，再收起惊喜':'Open a capsule before putting the prize away.',
 '扭蛋已补充，继续探索吧':'Machine refilled. Keep exploring!',
 'AI 扭蛋机。拖动空白处旋转，方向键调整视角；也可使用上方操作按钮。':'AI capsule machine. Drag the empty area to rotate, use arrow keys to adjust the view, or use the action buttons.',
 '缩小':'Zoom out','重置缩放':'Reset zoom','放大':'Zoom in',
 '转动手柄，获取一颗扭蛋':'Turn the crank to get a capsule',
 '这里空空的，先投币再转动手柄':'Empty — insert a coin and turn the crank',
 '扭蛋已售空':'Sold out'
 };
 const browserLanguage=(navigator.languages?.[0] || navigator.language || 'en').toLowerCase();
 let lang=browserLanguage.startsWith('zh')?'zh':'en';
 try{const saved=localStorage.getItem('randomai-language');if(saved==='en'||saved==='zh')lang=saved;}catch{}
 if(window.RANDOMAI_TOPIC)lang=location.pathname.startsWith('/zh/')?'zh':'en';
 const t=key=>lang==='en'?(copy[key]??key):key;
 window.I18N={get lang(){return lang;},t,set(value){if(!['en','zh'].includes(value))return;if(window.RANDOMAI_TOPIC&&value!==lang){try{localStorage.setItem('randomai-language',value);}catch{}location.assign((value==='zh'?'/zh/':'/')+window.RANDOMAI_TOPIC_SLUG+'/');return;}lang=value;try{localStorage.setItem('randomai-language',lang);}catch{}document.dispatchEvent(new Event('languagechange'));}};
 document.documentElement.lang=lang==='zh'?'zh-CN':'en';
})();
