const fs=require('fs'),vm=require('vm'),assert=require('assert');
const config=fs.readFileSync('assets/category-config.js','utf8'),products=fs.readFileSync('assets/products.js','utf8');
const snapshot=JSON.parse(fs.readFileSync('assets/catalog-snapshot.json'));
for(const slug of ['ai-video-tools','ai-image-tools','ai-coding-tools','ai-presentation-tools',null]){
 const c={window:{RANDOM_AI_CATALOG:snapshot},location:{pathname:slug?'/'+slug+'/':'/'},URL,localStorage:{getItem:()=>null,setItem(){}},fetch:async()=>({ok:false}),AbortSignal,setInterval(){},document:{addEventListener(){}},console};vm.createContext(c);vm.runInContext(config,c);vm.runInContext(products,c);
 const result=vm.runInContext('({count:AI_PRODUCTS.length,draws:Array.from({length:AI_PRODUCTS.length},()=>chooseProduct().id)})',c);
 assert.equal(new Set(result.draws).size,result.count);
 if(slug){assert.equal(result.count,c.window.RANDOMAI_TOPIC.ids.length);assert(result.draws.every(id=>c.window.RANDOMAI_TOPIC.ids.includes(id)));const before=result.count;try{vm.runInContext('applyCatalog({tools:[]})',c)}catch{}assert.equal(vm.runInContext('AI_PRODUCTS.length',c),before);}
 else assert.equal(result.count,220);
 console.log(slug||'homepage',result.count,'unique draws: PASS');
}
