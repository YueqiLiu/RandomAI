/* Follow the browser language on first visit; explicit choices take precedence. */
(() => {
 const copy = {
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
 const t=key=>lang==='en'?(copy[key]??key):key;
 window.I18N={get lang(){return lang;},t,set(value){if(!['en','zh'].includes(value))return;lang=value;try{localStorage.setItem('randomai-language',lang);}catch{}document.dispatchEvent(new Event('languagechange'));}};
 document.documentElement.lang=lang==='zh'?'zh-CN':'en';
})();
