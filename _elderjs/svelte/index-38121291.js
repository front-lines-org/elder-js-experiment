function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function i(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function a(t,n,e,o){if(t){const r=u(t,n,e,o);return t[0](r)}}function u(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function l(t,n,e,o,r,i,s){const c=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,i);if(c){const r=u(n,e,o,s);t.p(r,c)}}function f(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function d(t,n){const e={};n=new Set(n);for(const o in t)n.has(o)||"$"===o[0]||(e[o]=t[o]);return e}function h(n){return n&&i(n.destroy)?n.destroy:t}let p,_=!1;function m(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function g(t,n){_?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const n=t.childNodes,e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let t=0;t<n.length;t++){const i=m(1,r+1,(t=>n[e[t]].claim_order),n[t].claim_order)-1;o[t]=e[i]+1;const s=i+1;e[s]=t,r=Math.max(s,r)}const i=[],s=[];let c=n.length-1;for(let t=e[r]+1;0!=t;t=o[t-1]){for(i.push(n[t-1]);c>=t;c--)s.push(n[c]);c--}for(;c>=0;c--)s.push(n[c]);i.reverse(),s.sort(((t,n)=>t.claim_order-n.claim_order));for(let n=0,e=0;n<s.length;n++){for(;e<i.length&&s[n].claim_order>=i[e].claim_order;)e++;const o=e<i.length?i[e]:null;t.insertBefore(s[n],o)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),n!==t.actual_end_child?t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling):n.parentNode!==t&&t.appendChild(n)}function $(t,n,e){_&&!e?g(t,n):(n.parentNode!==t||e&&n.nextSibling!==e)&&t.insertBefore(n,e||null)}function y(t){t.parentNode.removeChild(t)}function b(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function x(t){return document.createElement(t)}function w(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function k(){return v(" ")}function E(){return v("")}function T(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function A(t){return function(n){return n.preventDefault(),t.call(this,n)}}function N(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function M(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function S(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in n)null==n[o]?t.removeAttribute(o):"style"===o?t.style.cssText=n[o]:"__value"===o?t.value=t[o]=n[o]:e[o]&&e[o].set?t[o]=n[o]:M(t,o,n[o])}function j(t){return Array.from(t.childNodes)}function L(t,n,e,o,r=!1){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0});const i=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const i=t[o];if(n(i))return e(i),t.splice(o,1),r||(t.claim_info.last_index=o),i}for(let o=t.claim_info.last_index-1;o>=0;o--){const i=t[o];if(n(i))return e(i),t.splice(o,1),r?t.claim_info.last_index--:t.claim_info.last_index=o,i}return o()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function O(t,n,e,o){return L(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o?w(n):x(n)))}function C(t,n){return L(t,(t=>3===t.nodeType),(t=>{t.data=""+n}),(()=>v(n)),!0)}function P(t){return C(t," ")}function B(t,n,e){for(let o=e;o<t.length;o+=1){const e=t[o];if(8===e.nodeType&&e.textContent.trim()===n)return o}return t.length}function D(t){const n=B(t,"HTML_TAG_START",0),e=B(t,"HTML_TAG_END",n);if(n===e)return new I;const o=t.splice(n,e+1);return y(o[0]),y(o[o.length-1]),new I(o.slice(1,o.length-1))}function H(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function G(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}class I{constructor(t){this.e=this.n=null,this.l=t}m(t,n,e=null){this.e||(this.e=x(n.nodeName),this.t=n,this.l?this.n=this.l:this.h(t)),this.i(e)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)$(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(y)}}function q(t){p=t}function z(){if(!p)throw new Error("Function called outside component initialization");return p}function F(t){z().$$.on_mount.push(t)}function R(t){z().$$.on_destroy.push(t)}function J(t,n){z().$$.context.set(t,n)}function K(t){return z().$$.context.get(t)}function Q(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t.call(this,n)))}const U=[],V=[],W=[],X=[],Y=Promise.resolve();let Z=!1;function tt(t){W.push(t)}function nt(t){X.push(t)}let et=!1;const ot=new Set;function rt(){if(!et){et=!0;do{for(let t=0;t<U.length;t+=1){const n=U[t];q(n),it(n.$$)}for(q(null),U.length=0;V.length;)V.pop()();for(let t=0;t<W.length;t+=1){const n=W[t];ot.has(n)||(ot.add(n),n())}W.length=0}while(U.length);for(;X.length;)X.pop()();Z=!1,et=!1,ot.clear()}}function it(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(tt)}}const st=new Set;let ct;function at(){ct={r:0,c:[],p:ct}}function ut(){ct.r||r(ct.c),ct=ct.p}function lt(t,n){t&&t.i&&(st.delete(t),t.i(n))}function ft(t,n,e,o){if(t&&t.o){if(st.has(t))return;st.add(t),ct.c.push((()=>{st.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}const dt="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function ht(t,n){ft(t,1,1,(()=>{n.delete(t.key)}))}function pt(t,n,e,o,r,i,s,c,a,u,l,f){let d=t.length,h=i.length,p=d;const _={};for(;p--;)_[t[p].key]=p;const m=[],g=new Map,$=new Map;for(p=h;p--;){const t=f(r,i,p),c=e(t);let a=s.get(c);a?o&&a.p(t,n):(a=u(c,t),a.c()),g.set(c,m[p]=a),c in _&&$.set(c,Math.abs(p-_[c]))}const y=new Set,b=new Set;function x(t){lt(t,1),t.m(c,l),s.set(t.key,t),l=t.first,h--}for(;d&&h;){const n=m[h-1],e=t[d-1],o=n.key,r=e.key;n===e?(l=n.first,d--,h--):g.has(r)?!s.has(o)||y.has(o)?x(n):b.has(r)?d--:$.get(o)>$.get(r)?(b.add(o),x(n)):(y.add(r),d--):(a(e,s),d--)}for(;d--;){const n=t[d];g.has(n.key)||a(n,s)}for(;h;)x(m[h-1]);return m}function _t(t,n){const e={},o={},r={$$scope:1};let i=t.length;for(;i--;){const s=t[i],c=n[i];if(c){for(const t in s)t in c||(o[t]=1);for(const t in c)r[t]||(e[t]=c[t],r[t]=1);t[i]=c}else for(const t in s)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function mt(t){return"object"==typeof t&&null!==t?t:{}}function gt(t,n,e){const o=t.$$.props[n];void 0!==o&&(t.$$.bound[o]=e,e(t.$$.ctx[o]))}function $t(t){t&&t.c()}function yt(t,n){t&&t.l(n)}function bt(t,n,o,s){const{fragment:c,on_mount:a,on_destroy:u,after_update:l}=t.$$;c&&c.m(n,o),s||tt((()=>{const n=a.map(e).filter(i);u?u.push(...n):r(n),t.$$.on_mount=[]})),l.forEach(tt)}function xt(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function wt(t,n){-1===t.$$.dirty[0]&&(U.push(t),Z||(Z=!0,Y.then(rt)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function vt(n,e,i,s,c,a,u=[-1]){const l=p;q(n);const f=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:e.context||[]),callbacks:o(),dirty:u,skip_bound:!1};let d=!1;if(f.ctx=i?i(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return f.ctx&&c(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),d&&wt(n,t)),e})):[],f.update(),d=!0,r(f.before_update),f.fragment=!!s&&s(f.ctx),e.target){if(e.hydrate){_=!0;const t=j(e.target);f.fragment&&f.fragment.l(t),t.forEach(y)}else f.fragment&&f.fragment.c();e.intro&&lt(n.$$.fragment),bt(n,e.target,e.anchor,e.customElement),_=!1,rt()}q(l)}class kt{$destroy(){xt(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{N as $,_t as A,i as B,lt as C,ft as D,r as E,d as F,z as G,I as H,f as I,V as J,$t as K,yt as L,bt as M,mt as N,at as O,xt as P,ut as Q,K as R,kt as S,J as T,T as U,pt as V,ht as W,gt as X,nt as Y,Q as Z,A as _,$ as a,dt as a0,R as a1,c as a2,x as b,D as c,y as d,E as e,O as f,j as g,C as h,vt as i,M as j,g as k,H as l,k as m,P as n,G as o,t as p,w as q,b as r,s,v as t,F as u,a as v,n as w,S as x,h as y,l as z};
