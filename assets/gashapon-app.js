/* Random AI product layer — keeps Colorfigures' original animation state machine. */
const productSection=document.createElement('section');productSection.id='product';productSection.hidden=true;productSection.setAttribute('aria-live','polite');
document.querySelector('.controls').before(productSection);
// Keep the same crawlable introduction node, after the machine and any revealed product.
const discoveryGuide=window.randomaiDiscoveryGuide;
if(discoveryGuide) document.querySelector('.controls').after(discoveryGuide);
// Every page shares the same topic menu and footer navigation.
const relatedNavigation=discoveryGuide?.querySelector('.category-nav');
let topicMenu=null;
if(relatedNavigation){
 const navigation=relatedNavigation.cloneNode(true);
 navigation.querySelector('.category-nav-heading')?.remove();
 navigation.className='header-topic-links';
 topicMenu=document.createElement('details');topicMenu.className='header-topic-menu';
 const trigger=document.createElement('summary');trigger.className='header-topic-trigger';
 topicMenu.append(trigger,navigation);
 const header=document.querySelector('.brandbar');
 const actions=document.createElement('div');actions.className='header-actions';
 actions.append(topicMenu,header.lastElementChild);header.append(actions);
 document.addEventListener('pointerdown',event=>{if(!topicMenu.contains(event.target))topicMenu.open=false;});
 topicMenu.addEventListener('keydown',event=>{if(event.key==='Escape'){event.stopPropagation();topicMenu.open=false;trigger.focus();}});
 topicMenu.addEventListener('focusout',event=>{if(!topicMenu.contains(event.relatedTarget))topicMenu.open=false;});
}
const footer=document.createElement('footer');footer.className='site-footer';
footer.innerHTML=`<div class="footer-main"><div class="footer-directory"><span class="footer-eyebrow" data-i18n="探索完整产品库："></span><a href="https://www.topaitools4u.site/tools?utm_source=randomai&utm_medium=referral&utm_campaign=footer" target="_blank" rel="noopener noreferrer">TopAITools4U <span aria-hidden="true">↗</span></a></div></div><div class="footer-meta"><span data-i18n="免费灵感币，仅用于互动体验。"></span><span class="footer-credit"><span data-i18n="扭蛋机基于 "></span><a href="https://april-zhu.com/colorfigures" target="_blank" rel="noopener noreferrer">Colorfigures · April Zhu</a><span aria-hidden="true"> / </span><a href="/assets/vendor/colorfigures/LICENSE.txt">MIT</a></span></div>`;
if(relatedNavigation)footer.querySelector('.footer-meta').before(relatedNavigation);
document.body.append(footer);
const css=document.createElement('link');css.rel='stylesheet';css.href='/assets/gashapon.css?v=discovery-faces-1';document.head.append(css);
let shown=null;
const tr=key=>I18N.t(key);
function toolReferralUrl(value){
 const url=new URL(value);
 url.searchParams.set('ref','randomai.top');
 return url.href;
}

window.renderProduct=state=>{
 const p=state.reviewProduct || (state.out && state.out.open>=1 && state.out.product);
 if(!p){productSection.hidden=true;shown=null;return;}if(shown===p && productSection.dataset.lang===I18N.lang)return;shown=p;productSection.dataset.lang=I18N.lang;productSection.hidden=false;
 productSection.replaceChildren();
 const content=I18N.lang==='en' ? p.en : p;
 const label=document.createElement('p');label.className='product-kicker';label.textContent=tr('你发现了 · ')+content.category;
 const name=document.createElement('h2');name.className='product-title';
 const draw=state.reviewProduct ? state.collected[state.reviewIndex] : state.out;
 if(draw && !draw.discoveryFace)draw.discoveryFace=1+Math.floor(Math.random()*6);
 const icon=document.createElement('img');icon.className='product-capsule-icon';
 icon.src='/assets/brand/discovery-faces/face-'+(draw?.discoveryFace || 1)+'.svg';
 icon.alt='';icon.setAttribute('aria-hidden','true');icon.width=36;icon.height=36;
 const titleText=document.createElement('span');titleText.textContent=p.name;
 name.append(icon,titleText);
 const experiment=discoveryExperiment(p);
 const facts=document.createElement('div');facts.className='product-facts';
 const en=I18N.lang==='en';
 const task=p.id && editorialTranslations.has(p.id)?content.play:(en?experiment.playEn:experiment.play);
 for(const [heading,text] of [
  [en?'What it does':'它有什么本领？',content.description],
  [en?'Try a little task':'先玩个小任务',task],
  [en?'Why give it a go?':'为什么值得试试？',en?experiment.reasonEn:experiment.reason]
 ]){
  const item=document.createElement('div');item.className='product-fact';
  const title=document.createElement('h3');title.textContent=heading;
  const body=document.createElement('p');body.textContent=text;
  item.append(title,body);
  if(facts.children.length===0){
   item.classList.add('product-summary');
   if(text.length>280){
    body.classList.add('is-collapsed');
    const toggle=document.createElement('button');toggle.type='button';toggle.className='description-toggle';
    toggle.setAttribute('aria-expanded','false');body.id='product-description';toggle.setAttribute('aria-controls',body.id);
    toggle.textContent=en?'Read more':'展开看看';
    toggle.addEventListener('click',()=>{const expanded=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(expanded));body.classList.toggle('is-collapsed',!expanded);toggle.textContent=expanded?(en?'Show less':'收起来'):(en?'Read more':'展开看看');});
    item.append(toggle);
   }
  }
  facts.append(item);
 }
 const links=document.createElement('div');links.className='product-links';
 const visit=document.createElement('a');visit.className='visit';visit.href=toolReferralUrl(p.url);visit.target='_blank';visit.rel='noopener noreferrer';visit.textContent=tr('体验产品 ↗');
 const more=document.createElement('a');const detail=new URL(p.detailUrl || 'https://www.topaitools4u.site/tools');detail.searchParams.set('utm_source','randomai');detail.searchParams.set('utm_medium','referral');detail.searchParams.set('utm_campaign','capsule');more.href=detail.href;more.target='_blank';more.rel='noopener noreferrer';more.textContent=tr(p.detailUrl?'在 TopAITools4U 查看详情 ↗':'去 TopAITools4U 探索更多 ↗');
 links.append(visit,more);const note=document.createElement('small');note.textContent=tr('将在官网体验；注册与收费规则以产品官网为准。');
 productSection.append(label,name,facts,links,note);
};
document.getElementById('fig').setAttribute('tabindex','0');document.getElementById('fig').setAttribute('data-i18n-aria','AI 扭蛋机。拖动空白处旋转，方向键调整视角；也可使用上方操作按钮。');
UI.render();
// Pointer interaction should not frame the entire illustration; keyboard focus stays visible.
const machineFigure = document.getElementById('fig');
machineFigure.addEventListener('pointerdown', () => {
 machineFigure.setAttribute('data-pointer-focus', 'true');
}, { capture: true });
document.addEventListener('keydown', () => {
 machineFigure.removeAttribute('data-pointer-focus');
}, { capture: true });

// Switching language only updates copy: the current capsule and animation are preserved.
const languagePicker=document.createElement('div');languagePicker.className='language-picker';
const languageLabel=document.createElement('span');languageLabel.id='language-label';
const languageControl=document.createElement('div');languageControl.className='language-control';
const languageTrigger=document.createElement('button');languageTrigger.type='button';languageTrigger.className='language-trigger';languageTrigger.id='language-trigger';
languageTrigger.setAttribute('aria-haspopup','menu');languageTrigger.setAttribute('aria-expanded','false');languageTrigger.setAttribute('aria-controls','language-menu');
const triggerLabel=document.createElement('span');triggerLabel.id='language-value';
languageTrigger.setAttribute('aria-labelledby','language-label language-value');
const chevron=document.createElement('span');chevron.className='language-chevron';chevron.setAttribute('aria-hidden','true');languageTrigger.append(triggerLabel,chevron);
const languageMenu=document.createElement('div');languageMenu.id='language-menu';languageMenu.className='language-menu';languageMenu.setAttribute('role','menu');languageMenu.setAttribute('aria-labelledby','language-label');languageMenu.hidden=true;
const languageOptions=[];
for(const [language,label,code] of [['en','English','EN'],['zh','简体中文','ZH']]){
 const option=document.createElement('button');option.type='button';option.className='language-option';option.dataset.language=language;option.setAttribute('role','menuitemradio');option.lang=language==='en'?'en':'zh-CN';
 const indicator=document.createElement('span');indicator.className='language-radio';indicator.setAttribute('aria-hidden','true');
 const name=document.createElement('span');name.textContent=label;
 const abbreviation=document.createElement('span');abbreviation.className='language-code';abbreviation.textContent=code;abbreviation.setAttribute('aria-hidden','true');
 option.append(indicator,name,abbreviation);option.addEventListener('click',()=>{I18N.set(language);closeLanguageMenu(true);});languageMenu.append(option);languageOptions.push(option);
}
function closeLanguageMenu(restoreFocus=false){languageMenu.hidden=true;languageTrigger.setAttribute('aria-expanded','false');if(restoreFocus)languageTrigger.focus();}
function openLanguageMenu(edge){languageMenu.hidden=false;languageTrigger.setAttribute('aria-expanded','true');const index=edge==='first'?0:edge==='last'?languageOptions.length-1:languageOptions.findIndex(option=>option.dataset.language===I18N.lang);languageOptions[Math.max(0,index)].focus();}
languageTrigger.addEventListener('click',()=>languageMenu.hidden?openLanguageMenu():closeLanguageMenu());
languageTrigger.addEventListener('keydown',event=>{if(['ArrowDown','ArrowUp'].includes(event.key)){event.preventDefault();event.stopPropagation();openLanguageMenu(event.key==='ArrowDown'?'first':'last');}});
languageMenu.addEventListener('keydown',event=>{
 const index=languageOptions.indexOf(document.activeElement);
 if(['ArrowDown','ArrowUp','Home','End'].includes(event.key)){event.preventDefault();event.stopPropagation();const next=event.key==='Home'?0:event.key==='End'?languageOptions.length-1:(index+(event.key==='ArrowDown'?1:-1)+languageOptions.length)%languageOptions.length;languageOptions[next].focus();}
 if(event.key==='Escape'){event.preventDefault();event.stopPropagation();closeLanguageMenu(true);}
 if(event.key==='Tab')closeLanguageMenu();
});
document.addEventListener('pointerdown',event=>{if(!languagePicker.contains(event.target))closeLanguageMenu();});
languagePicker.addEventListener('focusout',event=>{if(!languagePicker.contains(event.relatedTarget))closeLanguageMenu();});
languageControl.append(languageTrigger,languageMenu);languagePicker.append(languageLabel,languageControl);footer.querySelector('.footer-main').append(languagePicker);
function applyLanguage(){
 document.documentElement.lang=I18N.lang==='en'?'en':'zh-CN';
 document.title='Random AI Tool Generator – Discover Something New | RandomAI';
 document.querySelector('meta[name="description"]').content=I18N.lang==='en'?'Insert a free coin, turn the crank, and discover an AI tool. Explore a playful capsule machine with five colours and interactive rotation.':'投入一枚免费灵感币，转动手柄，打开 AI 盲盒。支持五种机身颜色和交互式旋转。';
 document.querySelectorAll('[data-i18n]').forEach(el=>{
  // The static guide already contains English: retain it as a safe fallback.
  if(el.closest('#discovery-guide') && !el.hasAttribute('data-copy-en'))el.dataset.copyEn=el.textContent;
  const translated=tr(el.dataset.i18n);
  el.textContent=I18N.lang==='en' && translated===el.dataset.i18n && el.hasAttribute('data-copy-en')?el.dataset.copyEn:translated;
 });
 document.querySelectorAll('[data-i18n-aria]').forEach(el=>{el.setAttribute('aria-label',tr(el.getAttribute('data-i18n-aria')));if(el.classList.contains('sw'))el.title=el.getAttribute('aria-label');});
 if(topicMenu){topicMenu.querySelector('summary').textContent=I18N.lang==='zh'?'主题扭蛋机':'Explore topics';topicMenu.querySelector('nav').setAttribute('aria-label',I18N.lang==='zh'?'主题扭蛋机':'Topic capsule machines');}
 const relatedHeading=document.querySelector('.category-nav-heading');if(relatedHeading)relatedHeading.textContent=I18N.lang==='zh'?'探索其他主题扭蛋机':'Explore more capsule machines';
 document.querySelectorAll('.category-nav a, .header-topic-links a').forEach(link=>{
  const slug=link.getAttribute('href').split('/').filter(Boolean).pop();const topic=window.RANDOMAI_TOPICS?.[slug];
  if(topic){link.textContent=topic[I18N.lang].name;link.href=(I18N.lang==='zh'?'/zh/':'/')+slug+'/';}
  else if(link.getAttribute('href')==='/')link.textContent=I18N.lang==='zh'?'全部 AI 工具':'All AI tools';
  if((topic&&slug===window.RANDOMAI_TOPIC_SLUG)||(!topic&&!window.RANDOMAI_TOPIC))link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');
 });
 languageLabel.textContent=I18N.lang==='en'?'Language':'语言';
 triggerLabel.textContent=I18N.lang==='en'?'English':'简体中文';
 languageOptions.forEach(option=>option.setAttribute('aria-checked',option.dataset.language===I18N.lang));
 const toast=document.getElementById('toast');if(toast)toast.classList.remove('show');
 if(window.RANDOMAI_TOPIC){
  const topic=window.RANDOMAI_TOPIC[I18N.lang];
  document.title=topic.title;document.querySelector('meta[name="description"]').content=topic.description;
  const heading=document.querySelector('.intro h1');heading.removeAttribute('data-i18n');heading.textContent=topic.headline;
  const subtitle=document.querySelector('.intro p:last-child');subtitle.removeAttribute('data-i18n');subtitle.textContent=topic.description;
 }
 UI.drawStats();shown=null;window.renderProduct(UI.st);
}
document.addEventListener('languagechange',applyLanguage);applyLanguage();

// Collected toys retain the product from that exact draw, even when toy types repeat.
document.getElementById('stats').addEventListener('click',event=>{
 const button=event.target.closest('[data-collection-index]');if(!button)return;
 const index=Number(button.dataset.collectionIndex);const entry=UI.st.collected[index];
 if(!entry?.product)return;
 UI.st.reviewIndex=index;UI.st.reviewProduct=entry.product;
 UI.drawStats();window.renderProduct(UI.st);
 productSection.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'nearest'});
});
