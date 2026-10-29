/* Random AI product layer — keeps Colorfigures' original animation state machine. */
const productSection=document.createElement('section');productSection.id='product';productSection.hidden=true;productSection.setAttribute('aria-live','polite');
document.querySelector('.controls').before(productSection);
const footer=document.createElement('footer');footer.className='site-footer';
footer.innerHTML=`<div class="footer-main"><div class="footer-directory"><span class="footer-eyebrow" data-i18n="探索完整产品库："></span><a href="https://www.topaitools4u.site/tools?utm_source=randomai&utm_medium=referral&utm_campaign=footer" target="_blank" rel="noopener noreferrer">TopAITools4U <span aria-hidden="true">↗</span></a></div></div><div class="footer-meta"><span data-i18n="免费灵感币，仅用于互动体验。"></span><span class="footer-credit"><span data-i18n="扭蛋机基于 "></span><a href="https://april-zhu.com/colorfigures" target="_blank" rel="noopener noreferrer">Colorfigures · April Zhu</a><span aria-hidden="true"> / </span><a href="/assets/vendor/colorfigures/LICENSE.txt">MIT</a></span></div>`;
document.body.append(footer);
const css=document.createElement('link');css.rel='stylesheet';css.href='/assets/gashapon.css';document.head.append(css);
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
 const name=document.createElement('h2');name.textContent=p.name;
 const desc=document.createElement('p');desc.textContent=content.description;
 const play=document.createElement('p');play.className='play';play.textContent=tr('试试这个：')+content.play;
 const links=document.createElement('div');links.className='product-links';
 const visit=document.createElement('a');visit.className='visit';visit.href=toolReferralUrl(p.url);visit.target='_blank';visit.rel='noopener noreferrer';visit.textContent=tr('体验产品 ↗');
 const more=document.createElement('a');const detail=new URL(p.detailUrl || 'https://www.topaitools4u.site/tools');detail.searchParams.set('utm_source','randomai');detail.searchParams.set('utm_medium','referral');detail.searchParams.set('utm_campaign','capsule');more.href=detail.href;more.target='_blank';more.rel='noopener noreferrer';more.textContent=tr(p.detailUrl?'在 TopAITools4U 查看详情 ↗':'去 TopAITools4U 探索更多 ↗');
 links.append(visit,more);const note=document.createElement('small');note.textContent=tr('将在官网体验；注册与收费规则以产品官网为准。');
 productSection.append(label,name,desc,play,links,note);
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
 document.title=tr('Random AI · AI 盲盒');
 document.querySelector('meta[name="description"]').content=I18N.lang==='en'?'Insert a free coin, turn the crank, and discover an AI tool. Explore a playful capsule machine with five colours and interactive rotation.':'投入一枚免费灵感币，转动手柄，打开 AI 盲盒。支持五种机身颜色和交互式旋转。';
 document.querySelectorAll('[data-i18n]').forEach(el=>{el.textContent=tr(el.dataset.i18n);});
 document.querySelectorAll('[data-i18n-aria]').forEach(el=>{el.setAttribute('aria-label',tr(el.getAttribute('data-i18n-aria')));if(el.classList.contains('sw'))el.title=el.getAttribute('aria-label');});
 languageLabel.textContent=I18N.lang==='en'?'Language':'语言';
 triggerLabel.textContent=I18N.lang==='en'?'English':'简体中文';
 languageOptions.forEach(option=>option.setAttribute('aria-checked',option.dataset.language===I18N.lang));
 const toast=document.getElementById('toast');if(toast)toast.classList.remove('show');
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
