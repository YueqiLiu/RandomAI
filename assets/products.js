/* Editorial Chinese copy is reused where available; the published catalog is authoritative. */
let AI_PRODUCTS = [
 {id:'canva',name:'Canva',category:'设计',description:'从一个想法开始，制作海报、演示文稿和社交图片。',play:'为你最喜欢的一部电影做一张海报。',url:'https://www.canva.com/'},
 {id:'perplexity',name:'Perplexity',category:'搜索与研究',description:'用自然语言提问，探索附带来源的答案。',play:'挑一个好奇的问题，看看答案背后的资料。',url:'https://www.perplexity.ai/'},
 {id:'gamma',name:'Gamma',category:'演示文稿',description:'把想法整理成适合展示和分享的内容。',play:'把一个旅行计划变成一份小演示。',url:'https://gamma.app/'},
 {id:'suno',name:'Suno',category:'音乐创作',description:'用文字描述灵感，探索 AI 音乐创作。',play:'给一个平凡的周末写一首主题曲。',url:'https://suno.com/'},
 {id:'removebg',name:'remove.bg',category:'图片处理',description:'移除图片背景，让照片更方便用于设计。',play:'把一张宠物照片变成贴纸素材。',url:'https://www.remove.bg/'},
 {id:'elevenlabs',name:'ElevenLabs',category:'语音',description:'探索文本转语音和音频创作工具。',play:'把你写的一段小故事读出来。',url:'https://elevenlabs.io/'},
 {id:'notion',name:'Notion',category:'效率与笔记',description:'在同一个工作空间中整理文档、知识和想法。',play:'把凌乱的灵感整理成一个行动清单。',url:'https://www.notion.so/'},
 {id:'runway',name:'Runway',category:'视频创作',description:'探索 AI 图像与视频创作。',play:'让一张静态风景拥有电影般的运动。',url:'https://runwayml.com/'}
];
let productBag=[];
function chooseProduct(){if(!productBag.length){productBag=[...AI_PRODUCTS];for(let i=productBag.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[productBag[i],productBag[j]]=[productBag[j],productBag[i]];}}return productBag.pop();}
function saveDiscovery(product){try{const a=JSON.parse(localStorage.getItem('randomai-discoveries')||'[]');if(!a.some(p=>p.id===product.id)){a.push(product);localStorage.setItem('randomai-discoveries',JSON.stringify(a));}}catch{}}
// English editorial text pairs with the Chinese seed fields above.
const PRODUCT_EN = {
 canva:['Design','Turn an idea into posters, presentations, and social images.','Make a poster for your favourite film.'],
 perplexity:['Search & research','Ask questions in natural language and explore answers with sources.','Pick a question you are curious about and follow its sources.'],
 gamma:['Presentations','Shape your ideas into content you can present and share.','Turn a travel plan into a short presentation.'],
 suno:['Music','Describe an idea and explore AI music creation.','Write a theme song for an ordinary weekend.'],
 removebg:['Image editing','Remove an image background and make your photo ready for a design.','Turn a pet photo into material for a sticker.'],
 elevenlabs:['Voice','Explore text-to-speech and audio creation tools.','Bring a short story you wrote to life as audio.'],
 notion:['Notes & productivity','Organise documents, knowledge, and ideas in one workspace.','Turn scattered ideas into an action list.'],
 runway:['Video','Explore AI tools for creating images and videos.','Give a still landscape a cinematic sense of movement.']
};
for(const p of AI_PRODUCTS){const [category,description,play]=PRODUCT_EN[p.id];p.en={category,description,play};}

const editorialTranslations=new Map(AI_PRODUCTS.map(product=>[product.id,product]));
const CATEGORY_ZH={'Design':'设计','Search':'搜索','Research':'研究','Productivity':'效率','Writing':'写作','Video':'视频','Audio':'音频','Music':'音乐','AI Coding':'AI 编程','Coding':'编程','Image':'图像','Automation':'自动化','Marketing':'营销','Education':'教育','Presentations':'演示文稿','Website Builder':'网站搭建','Entertainment':'娱乐','Lifestyle':'生活','AI Tool':'AI 工具'};
function normalizeCatalog(payload){
 if(!payload || !Array.isArray(payload.tools))throw new Error('Invalid catalog');
 const products=[],seen=new Set();
 for(const tool of payload.tools){
  if(!tool || typeof tool.slug!=='string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(tool.slug) || seen.has(tool.slug))continue;
  if(typeof tool.name!=='string' || !tool.name.trim() || typeof tool.description!=='string' || !tool.description.trim())continue;
  let url;try{url=new URL(tool.website);if(!['https:','http:'].includes(url.protocol)||url.username||url.password)continue;}catch{continue;}
  const category=typeof tool.category==='string'&&tool.category.trim()?tool.category.trim():'AI Tool';
  const editorial=editorialTranslations.get(tool.slug);
  const description=tool.description.trim();
  products.push({id:tool.slug,name:tool.name.trim(),category:editorial?.category || category.split(' · ').map(part=>CATEGORY_ZH[part]||part).join(' · '),description:editorial?.description || description,play:editorial?.play || '用这个工具完成一个你感兴趣的小任务。',url:url.href,detailUrl:'https://www.topaitools4u.site/tools/'+tool.slug,pricing:typeof tool.pricing==='string'?tool.pricing:'',en:{category,description,play:editorial?.en.play || 'Try this tool on a small task you are curious about.'}});
  seen.add(tool.slug);
 }
 if(!products.length)throw new Error('Empty catalog');
 return products;
}
let catalogSignature='';
function applyCatalog(payload){
 const products=normalizeCatalog(payload);const signature=JSON.stringify(products);
 if(signature!==catalogSignature){AI_PRODUCTS=products;productBag=[];catalogSignature=signature;}
 return products.length;
}
try{applyCatalog(window.RANDOM_AI_CATALOG);}catch{ /* Existing editorial seed remains usable. */ }
let syncingCatalog=false,lastCatalogAttempt=0;
async function refreshCatalog(){
 if(syncingCatalog)return;syncingCatalog=true;lastCatalogAttempt=Date.now();
 try{
  const response=await fetch('/api/catalog',{signal:AbortSignal.timeout(10000)});
  if(!response.ok)throw new Error('Catalog request failed');
  applyCatalog(await response.json());
 }catch{ /* Keep the last valid catalog, including the bundled snapshot. */ }
 finally{syncingCatalog=false;}
}
refreshCatalog();
setInterval(()=>{if(!document.hidden)refreshCatalog();},300000);
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&Date.now()-lastCatalogAttempt>=300000)refreshCatalog();});

// Small experiments describe a way to evaluate a tool, without promising capabilities.
function discoveryExperiment(product){
 const category=product.en?.category || product.category || '';
 const recipes=[
  [/Presentations/i,'把周末出游的三个安排，整理成一份小演示。','Turn three weekend plans into a short presentation.','从熟悉的内容开始，看看它做出的结构和版式合不合你心意。','A familiar topic makes it easy to judge the structure and layout.'],
  [/Coding|Developer|App Builder|Website Builder|UI Builder/i,'挑一个小功能，比如待办清单，看看它能怎样帮上忙。','Pick a tiny feature, such as a to-do list, and explore how it can help.','拿一个小需求试手，更容易看出它能帮你省下哪一步。','A small feature helps you see which part of your workflow it could simplify.'],
  [/Music|Audio|Voice/i,'准备两句自己的文字，试试它提供的声音创作功能。','Bring two lines of your own text and explore its audio features.','文字变成声音，会不会带来不一样的感觉？亲耳听听就知道。','Hear whether a new sound gives your idea a different feel.'],
  [/Video/i,'挑一个十秒钟的小故事，试试它能帮你完成哪一步。','Choose a ten-second story and try one step with this tool.','先做一小段，看看效果和操作方式是不是你喜欢的。','A short experiment lets you judge the result and the workflow.'],
  [/Design|Image/i,'拿一张自己的照片或一个小想法，试做一份视觉素材。','Bring a photo or a small idea and try making a visual asset.','用自己的素材试一试，比看示例更容易找到喜欢的效果。','Your own material makes the result easier to judge than a demo.'],
  [/Search|Research/i,'挑一个你好奇的问题，看看它提供了哪些资料和线索。','Explore a question you are curious about and inspect the material it offers.','从一个小问题出发，也许能找到平时没注意到的新线索。','One small question can reveal a lead you might otherwise miss.'],
  [/Writing/i,'拿一小段自己的文字，看看它能怎样帮你打磨。','Bring a short paragraph of your own and explore how it can help refine it.','前后对照读一遍，看看它有没有接住你想表达的意思。','Compare before and after to see whether it preserves what you wanted to say.'],
  [/Education/i,'选一个正在学的知识点，试试它适合怎样陪你学习。','Choose a topic you are learning and explore how it could support you.','用熟悉的知识点试手，更容易判断它的讲解适不适合你。','A familiar topic helps you judge whether its approach suits you.']
 ];
 const recipe=recipes.find(([pattern])=>pattern.test(category));
 return {play:recipe?.[1] || '带上一个手头的小需求，先试试它最主要的功能。',playEn:recipe?.[2] || 'Bring a small task and try its main feature.',reason:recipe?.[3] || '先花几分钟玩一玩，看看它能不能给你的日常多一点便利或灵感。',reasonEn:recipe?.[4] || 'A few minutes with a real task can show whether it adds convenience or inspiration.'};
}
