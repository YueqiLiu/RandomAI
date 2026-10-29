/* Initial editorial seed. Replace this array from the TopAITools4U catalog export.
   No live synchronization is claimed; no invented detail-page URLs. */
const AI_PRODUCTS = [
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
