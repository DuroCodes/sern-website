import"./Tabs.astro_astro_type_script_index_0_lang.CCIyraCc.js";class T extends HTMLElement{constructor(){super();const e=this.querySelector("select");e&&e.addEventListener("change",r=>{r.currentTarget instanceof HTMLSelectElement&&(window.location.pathname=r.currentTarget.value)})}}customElements.define("starlight-lang-select",T);const L="modulepreload",w=function(n){return"/"+n},p={},x=function(e,r,s){let l=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=i?.nonce||i?.getAttribute("nonce");l=Promise.all(r.map(c=>{if(c=w(c),c in p)return;p[c]=!0;const d=c.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const t=document.createElement("link");if(t.rel=d?"stylesheet":L,d||(t.as="script",t.crossOrigin=""),t.href=c,o&&t.setAttribute("nonce",o),document.head.appendChild(t),d)return new Promise((u,a)=>{t.addEventListener("load",u),t.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${c}`)))})}))}return l.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},H={appId:"AA9S5J9NYT",apiKey:"ccfe6abc4d12ac6f882565a9d0caafb1",indexName:"sern"};class C extends HTMLElement{constructor(){super(),window.addEventListener("DOMContentLoaded",async()=>{const{default:e}=await x(()=>import("./index.qv16JarW.js"),[]),r={...H,container:"sl-doc-search"};try{const s=JSON.parse(this.dataset.translations||"{}");Object.assign(r,s)}catch{}e(r)})}}customElements.define("sl-doc-search",C);class M extends HTMLElement{constructor(){super(),this.btn=this.querySelector("button"),this.btn.addEventListener("click",()=>this.toggleExpanded());const e=this.closest("nav");e&&e.addEventListener("keyup",r=>this.closeOnEscape(r))}setExpanded(e){this.setAttribute("aria-expanded",String(e)),document.body.toggleAttribute("data-mobile-menu-expanded",e)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(e){e.code==="Escape"&&(this.setExpanded(!1),this.btn.focus())}}customElements.define("starlight-menu-button",M);const k="_top";class E extends HTMLElement{constructor(){super(),this._current=this.querySelector('a[aria-current="true"]'),this.minH=parseInt(this.dataset.minH||"2",10),this.maxH=parseInt(this.dataset.maxH||"3",10);const e=[...this.querySelectorAll("a")],r=t=>{if(t instanceof HTMLHeadingElement){if(t.id===k)return!0;const u=t.tagName[1];if(u){const a=parseInt(u,10);if(a>=this.minH&&a<=this.maxH)return!0}}return!1},s=t=>{if(!t)return null;const u=t;for(;t;){if(r(t))return t;for(t=t.previousElementSibling;t?.lastElementChild;)t=t.lastElementChild;const a=s(t);if(a)return a}return s(u.parentElement)},l=t=>{for(const{isIntersecting:u,target:a}of t){if(!u)continue;const g=s(a);if(!g)continue;const f=e.find(b=>b.hash==="#"+encodeURIComponent(g.id));if(f){this.current=f;break}}},i=document.querySelectorAll("main [id], main [id] ~ *, main .content > *");let o;const c=()=>{o&&o.disconnect(),o=new IntersectionObserver(l,{rootMargin:this.getRootMargin()}),i.forEach(t=>o.observe(t))};c();const d=window.requestIdleCallback||(t=>setTimeout(t,1));let h;window.addEventListener("resize",()=>{o&&o.disconnect(),clearTimeout(h),h=setTimeout(()=>d(c),200)})}set current(e){e!==this._current&&(this._current&&this._current.removeAttribute("aria-current"),e.setAttribute("aria-current","true"),this._current=e)}getRootMargin(){const e=document.querySelector("header")?.getBoundingClientRect().height||0,r=this.querySelector("summary")?.getBoundingClientRect().height||0,s=e+r+32,l=s+53,i=document.documentElement.clientHeight;return`-${s}px 0% ${l-i}px`}}customElements.define("starlight-toc",E);class q extends E{set current(e){super.current=e;const r=this.querySelector(".display-current");r&&(r.textContent=e.textContent)}constructor(){super();const e=this.querySelector("details");if(!e)return;const r=()=>{e.open=!1};e.querySelectorAll("a").forEach(s=>{s.addEventListener("click",r)}),window.addEventListener("click",s=>{e.contains(s.target)||r()}),window.addEventListener("keydown",s=>{if(s.key==="Escape"&&e.open){const l=e.contains(document.activeElement);if(r(),l){const i=e.querySelector("summary");i&&i.focus()}}})}}customElements.define("mobile-starlight-toc",q);const S="starlight-theme",v=n=>n==="auto"||n==="dark"||n==="light"?n:"auto",y=()=>v(typeof localStorage<"u"&&localStorage.getItem(S));function _(n){typeof localStorage<"u"&&localStorage.setItem(S,n==="light"||n==="dark"?n:"")}const A=()=>matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";function m(n){StarlightThemeProvider.updatePickers(n),document.documentElement.dataset.theme=n==="auto"?A():n,_(n)}matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{y()==="auto"&&m("auto")});class I extends HTMLElement{constructor(){super(),m(y()),this.querySelector("select")?.addEventListener("change",e=>{e.currentTarget instanceof HTMLSelectElement&&m(v(e.currentTarget.value))})}}customElements.define("starlight-theme-select",I);