import{I as p,U as R,V as S,s as T,W as U}from"./index.8dfb2907.js";const f=[];function x(e,t){return{subscribe:b(e,t).subscribe}}function b(e,t=p){let n;const o=new Set;function a(s){if(T(e,s)&&(e=s,n)){const u=!f.length;for(const l of o)l[1](),f.push(l,e);if(u){for(let l=0;l<f.length;l+=2)f[l][0](f[l+1]);f.length=0}}}function i(s){a(s(e))}function r(s,u=p){const l=[s,u];return o.add(l),o.size===1&&(n=t(a)||p),s(e),()=>{o.delete(l),o.size===0&&(n(),n=null)}}return{set:a,update:i,subscribe:r}}function Y(e,t,n){const o=!Array.isArray(e),a=o?[e]:e,i=t.length<2;return x(n,r=>{let s=!1;const u=[];let l=0,_=p;const h=()=>{if(l)return;_();const c=t(o?u[0]:u,r);i?r(c):_=U(c)?c:p},E=a.map((c,g)=>R(c,I=>{u[g]=I,l&=~(1<<g),s&&h()},()=>{l|=1<<g}));return s=!0,h(),function(){S(E),_()}})}var m;const O=((m=globalThis.__sveltekit_nc6zpw)==null?void 0:m.base)??"";var w;const L=((w=globalThis.__sveltekit_nc6zpw)==null?void 0:w.assets)??O,N="1683952199266",j="sveltekit:snapshot",q="sveltekit:scroll",K="sveltekit:index",k={tap:1,hover:2,viewport:3,eager:4,off:-1};function $(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function C(){return{x:pageXOffset,y:pageYOffset}}function d(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const v={...k,"":k.hover};function A(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function D(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=A(e)}}function G(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,a=!n||!!o||z(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:a,target:o,download:i}}function W(e){let t=null,n=null,o=null,a=null,i=null,r=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=d(s,"preload-code")),a===null&&(a=d(s,"preload-data")),t===null&&(t=d(s,"keepfocus")),n===null&&(n=d(s,"noscroll")),i===null&&(i=d(s,"reload")),r===null&&(r=d(s,"replacestate")),s=A(s);return{preload_code:v[o??"off"],preload_data:v[a??"off"],keep_focus:t==="off"?!1:t===""?!0:null,noscroll:n==="off"?!1:n===""?!0:null,reload:i==="off"?!1:i===""?!0:null,replace_state:r==="off"?!1:r===""?!0:null}}function y(e){const t=b(e);let n=!0;function o(){n=!0,t.update(r=>r)}function a(r){n=!1,t.set(r)}function i(r){let s;return t.subscribe(u=>{(s===void 0||n&&u!==s)&&r(s=u)})}return{notify:o,set:a,subscribe:i}}function V(){const{set:e,subscribe:t}=b(!1);let n;async function o(){clearTimeout(n);try{const a=await fetch(`${L}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const r=(await a.json()).version!==N;return r&&(e(!0),clearTimeout(n)),r}catch{return!1}}return{subscribe:t,check:o}}function z(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function X(e){e.client}const B={url:y({}),page:y({}),navigating:b(null),updated:V()};export{K as I,k as P,q as S,j as a,G as b,W as c,C as d,O as e,D as f,$ as g,X as h,z as i,Y as j,x as r,B as s,b as w};
