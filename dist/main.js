(()=>{"use strict";var n={402:(n,e,t)=>{t.d(e,{Z:()=>A});var r=t(537),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(378),t.b),l=i()(o()),u=s()(d);l.push([n.id,`* {\n    font-family: 'Courier New', Courier, monospace;\n    color: #f9fafb;\n    --highlight-color:#a1a1aa;\n    --menu-bar-color: #1f2937;\n    --content-color:#1f2937;\n    --footer-color: #1f2937;\n}\n\nhtml,\nbody {\n    display: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n#content {\n    min-height: 100vh;\n    display: grid;\n    grid-template: auto 1fr auto/auto;\n    background: linear-gradient(-45deg, #030712, #111827)\n}\n\n.menu-bar {\n    display: grid;\n    grid-template: auto/1fr 1fr;\n    align-items: center;\n    padding: 2em;\n    background-color: var(--menu-bar-color);\n}\n\n.menu-bar .menu-logo {\n    grid-area: 1/1/-1/2;\n    justify-self: left;\n}\n\n.menu-bar .right-menu {\n    grid-area: 1/2/-1/-1;\n    justify-self: right;\n\n    display: flex;\n    flex-direction: row;\n    gap: 1em;\n}\n\n.menu-item {\n    cursor: pointer;\n}\n\n.menu-item:hover {\n    color:var(--highlight-color);\n    transition: all 0.2s ease;\n}\n\n.main-content-container {\n    justify-self: center;\n    align-self: center;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.page-content-container {\n    display: flex;\n    max-width: 50%;\n    min-width: 600px;\n    padding: 2em;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    gap: 2em;\n    background-color: var(--content-color);\n    border-radius: 2em;\n    border-color: transparent;\n}\n\n.page-content-container .restaurant-image {\n    width: 500px;\n    height: 500px;\n    background: url(${u});\n    border: 1px solid #4b5563;\n    border-radius: 2em;\n}\n\n.page-content-container .headline {\n    font-weight: 700;\n    font-size: x-large;\n}\n\n.page-content-container .description {\n    font-style: italic;\n    font-weight: 600;\n}\n\n.footer {\n    padding: 1em;\n    background-color: var(--footer-color);\n    color: #6b7280;\n    font-style: italic;\n    font-weight: 300;\n}`,"",{version:3,sources:["webpack://./src/css/style.css"],names:[],mappings:"AAAA;IACI,8CAA8C;IAC9C,cAAc;IACd,yBAAyB;IACzB,yBAAyB;IACzB,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;;IAEI,mBAAmB;IACnB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,iCAAiC;IACjC;AACJ;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,YAAY;IACZ,uCAAuC;AAC3C;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;IACpB,mBAAmB;;IAEnB,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,4BAA4B;IAC5B,yBAAyB;AAC7B;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;;IAElB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,gBAAgB;IAChB,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,8BAA8B;IAC9B,QAAQ;IACR,sCAAsC;IACtC,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mDAA+C;IAC/C,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,qCAAqC;IACrC,cAAc;IACd,kBAAkB;IAClB,gBAAgB;AACpB",sourcesContent:["* {\n    font-family: 'Courier New', Courier, monospace;\n    color: #f9fafb;\n    --highlight-color:#a1a1aa;\n    --menu-bar-color: #1f2937;\n    --content-color:#1f2937;\n    --footer-color: #1f2937;\n}\n\nhtml,\nbody {\n    display: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n#content {\n    min-height: 100vh;\n    display: grid;\n    grid-template: auto 1fr auto/auto;\n    background: linear-gradient(-45deg, #030712, #111827)\n}\n\n.menu-bar {\n    display: grid;\n    grid-template: auto/1fr 1fr;\n    align-items: center;\n    padding: 2em;\n    background-color: var(--menu-bar-color);\n}\n\n.menu-bar .menu-logo {\n    grid-area: 1/1/-1/2;\n    justify-self: left;\n}\n\n.menu-bar .right-menu {\n    grid-area: 1/2/-1/-1;\n    justify-self: right;\n\n    display: flex;\n    flex-direction: row;\n    gap: 1em;\n}\n\n.menu-item {\n    cursor: pointer;\n}\n\n.menu-item:hover {\n    color:var(--highlight-color);\n    transition: all 0.2s ease;\n}\n\n.main-content-container {\n    justify-self: center;\n    align-self: center;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.page-content-container {\n    display: flex;\n    max-width: 50%;\n    min-width: 600px;\n    padding: 2em;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    gap: 2em;\n    background-color: var(--content-color);\n    border-radius: 2em;\n    border-color: transparent;\n}\n\n.page-content-container .restaurant-image {\n    width: 500px;\n    height: 500px;\n    background: url(\"../assets/img/restaurant.jpg\");\n    border: 1px solid #4b5563;\n    border-radius: 2em;\n}\n\n.page-content-container .headline {\n    font-weight: 700;\n    font-size: x-large;\n}\n\n.page-content-container .description {\n    font-style: italic;\n    font-weight: 600;\n}\n\n.footer {\n    padding: 1em;\n    background-color: var(--footer-color);\n    color: #6b7280;\n    font-style: italic;\n    font-weight: 300;\n}"],sourceRoot:""}]);const A=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var A=t(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==A)e[A].references++,e[A].updater(p);else{var m=o(p,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},378:(n,e,t)=>{n.exports=t.p+"d35e0147af3eb1d6b80c.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),A=t.n(u),p=t(402),m={};m.styleTagTransform=A(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;const f=["Home","About"],g=function(){const n=document.createElement("div");n.classList.add("headline"),n.textContent="Test headline";const e=document.createElement("div");e.classList.add("restaurant-image");const t=document.createElement("div");t.classList.add("description"),t.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus repudiandae molestias earum quibusdam quasi id omnis suscipit pariatur si";const r=document.createElement("div");return r.classList.add("page-content-container"),r.appendChild(n),r.appendChild(e),r.appendChild(t),{container:r}}(),C=function(){const n=document.createElement("div");n.classList.add("headline"),n.textContent="About us";const e=document.createElement("div");e.classList.add("description"),e.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus repudiandae molestias earum quibusdam quasi id omnis suscipit pariatur si";const t=document.createElement("div");return t.classList.add("page-content-container"),t.appendChild(n),t.appendChild(e),{container:t}}();function h(n){document.querySelector(".main-content-container").innerHTML="",document.querySelector(".main-content-container").appendChild(n.container)}(function(n){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("main-content-container"),t.appendChild(n),t.appendChild(n),e.appendChild(function(){const n=document.createElement("div");n.classList.add("menu-logo"),n.textContent="Logo";const e=document.createElement("div");e.classList.add("right-menu");for(let n=0;n<f.length;n++){const t=document.createElement("div");t.classList.add("menu-item"),t.setAttribute("data-menu-type",f[n]),t.textContent=f[n],e.appendChild(t)}const t=document.createElement("div");return t.classList.add("menu-bar"),t.appendChild(n),t.appendChild(e),{menuBar:t}}().menuBar),e.appendChild(t),e.appendChild(function(){const n=document.createElement("div");n.classList.add("image-reference"),n.textContent="https://www.pinterest.com/pin/357825132884937079/";const e=document.createElement("div");return e.classList.add("footer"),e.appendChild(n),{footer:e}}().footer)})(g.container),function(){const n=Array.from(document.querySelectorAll(".menu-item"));for(let e=0;e<n.length;e++){const t=n[e];"Home"===t.getAttribute("data-menu-type")&&t.addEventListener("click",(n=>{h(g)})),"About"===t.getAttribute("data-menu-type")&&t.addEventListener("click",(n=>{h(C)}))}}()})()})();
//# sourceMappingURL=main.js.map