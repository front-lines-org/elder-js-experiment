import{S as t,i as e,s,e as r,t as a,a as l,c as n,b as i,g as o,d as m,f as c,h as g,k as f,l as h,m as u,n as p,H as d,o as b,p as x}from"../index-c5a217f5.js";function k(t){let e,s,l=t[0].frontmatter.excerpt+"";return{c(){e=r("p"),s=a(l)},l(t){e=n(t,"P",{});var r=i(e);s=o(r,l),r.forEach(m)},m(t,r){f(t,e,r),h(e,s)},p(t,e){1&e&&l!==(l=t[0].frontmatter.excerpt+"")&&u(s,l)},d(t){t&&m(e)}}}function v(t){let e,s,r=t[1].images.picture(`/images/${t[0].frontmatter.img}`,{maxWidth:2e3,class:"",alt:"",ignoreCssString:!1})+"";return{c(){e=new d(!1),s=b(),this.h()},l(t){e=x(t,!1),s=b(),this.h()},h(){e.a=s},m(t,a){e.m(r,t,a),f(t,s,a)},p(t,s){3&s&&r!==(r=t[1].images.picture(`/images/${t[0].frontmatter.img}`,{maxWidth:2e3,class:"",alt:"",ignoreCssString:!1})+"")&&e.p(r)},d(t){t&&m(s),t&&e.d()}}}function $(t){let e,s,d,b,x,$,E,S=t[0].frontmatter.title+"",A=t[0].frontmatter.excerpt&&k(t),C=t[0].frontmatter.img&&v(t);return{c(){e=r("a"),s=r("a"),d=a(S),x=l(),A&&A.c(),$=l(),C&&C.c(),this.h()},l(t){e=n(t,"A",{href:!0,class:!0});var r=i(e);s=n(r,"A",{class:!0,href:!0});var a=i(s);d=o(a,S),a.forEach(m),x=c(r),A&&A.l(r),$=c(r),C&&C.l(r),r.forEach(m),this.h()},h(){g(s,"class","text-black font-black"),g(s,"href",b=t[1].permalinks.blog({slug:t[0].slug})),g(e,"href",E=t[1].permalinks.blog({slug:t[0].slug})),g(e,"class","hover:underline")},m(t,r){f(t,e,r),h(e,s),h(s,d),h(e,x),A&&A.m(e,null),h(e,$),C&&C.m(e,null)},p(t,[r]){1&r&&S!==(S=t[0].frontmatter.title+"")&&u(d,S),3&r&&b!==(b=t[1].permalinks.blog({slug:t[0].slug}))&&g(s,"href",b),t[0].frontmatter.excerpt?A?A.p(t,r):(A=k(t),A.c(),A.m(e,$)):A&&(A.d(1),A=null),t[0].frontmatter.img?C?C.p(t,r):(C=v(t),C.c(),C.m(e,null)):C&&(C.d(1),C=null),3&r&&E!==(E=t[1].permalinks.blog({slug:t[0].slug}))&&g(e,"href",E)},i:p,o:p,d(t){t&&m(e),A&&A.d(),C&&C.d()}}}function E(t,e,s){let{blog:r}=e,{helpers:a}=e;return t.$$set=t=>{"blog"in t&&s(0,r=t.blog),"helpers"in t&&s(1,a=t.helpers)},[r,a]}class S extends t{constructor(t){super(),e(this,t,E,$,s,{blog:0,helpers:1})}}export{S as default};
