(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[445],{8445:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});var r=n(2784);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var o,i=o||(o={});i.Pop="POP",i.Push="PUSH",i.Replace="REPLACE";function c(e){e.preventDefault(),e.returnValue=""}function l(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter((function(e){return e!==t}))}},call:function(t){e.forEach((function(e){return e&&e(t)}))}}}const s=function(e){function t(){var e=u.location,t=f.state||{};return[t.idx,{pathname:e.pathname,search:e.search,hash:e.hash,state:t.usr||null,key:t.key||"default"}]}function n(e){if("string"==typeof e)var t=e;else{t=e.pathname;var n=e.search;t=(void 0===t?"/":t)+(void 0===n?"":n)+(void 0===(e=e.hash)?"":e)}return t}function r(e,t){void 0===t&&(t=null);var n=a,r=p;if("string"==typeof e){var o={};if(e){var i=e.indexOf("#");0<=i&&(o.hash=e.substr(i),e=e.substr(0,i)),0<=(i=e.indexOf("?"))&&(o.search=e.substr(i),e=e.substr(0,i)),e&&(o.pathname=e)}e=o}return n({},r,{},e,{state:t,key:Math.random().toString(36).substr(2,8)})}function i(e){h=e,e=t(),v=e[0],p=e[1],m.call({action:h,location:p})}function s(e){f.go(e)}void 0===e&&(e={});var u=void 0===(e=e.window)?document.defaultView:e,f=u.history,d=null;u.addEventListener("popstate",(function(){if(d)b.call(d),d=null;else{var e=o.Pop,n=t(),r=n[0];if(n=n[1],b.length){if(null!=r){var a=v-r;a&&(d={action:e,location:n,retry:function(){s(-1*a)}},s(a))}}else i(e)}}));var h=o.Pop,v=(e=t())[0],p=e[1],m=l(),b=l();return null==v&&(v=0,f.replaceState(a({},f.state,{idx:v}),"")),{get action(){return h},get location(){return p},createHref:n,push:function e(t,a){var c=o.Push,l=r(t,a);if(!b.length||(b.call({action:c,location:l,retry:function(){e(t,a)}}),0)){var s=[{usr:l.state,key:l.key,idx:v+1},n(l)];l=s[0],s=s[1];try{f.pushState(l,"",s)}catch(e){u.location.assign(s)}i(c)}},replace:function e(t,a){var c=o.Replace,l=r(t,a);b.length&&(b.call({action:c,location:l,retry:function(){e(t,a)}}),1)||(l=[{usr:l.state,key:l.key,idx:v},n(l)],f.replaceState(l[0],"",l[1]),i(c))},go:s,back:function(){s(-1)},forward:function(){s(1)},listen:function(e){return m.push(e)},block:function(e){var t=b.push(e);return 1===b.length&&u.addEventListener("beforeunload",c),function(){t(),b.length||u.removeEventListener("beforeunload",c)}}}}();var u=n(8790);const f=()=>r.createElement("span",null,"Loading..."),d={"game-1":(0,r.lazy)((()=>Promise.all([n.e(986),n.e(727),n.e(539),n.e(248),n.e(557),n.e(485)]).then(n.bind(n,8485)))),"game-2":(0,r.lazy)((()=>Promise.all([n.e(986),n.e(248),n.e(258)]).then(n.bind(n,9258)))),"game-3":(0,r.lazy)((()=>Promise.all([n.e(986),n.e(727),n.e(539),n.e(248),n.e(981)]).then(n.bind(n,1981)))),"game-4":(0,r.lazy)((()=>Promise.all([n.e(986),n.e(727),n.e(539),n.e(777),n.e(615)]).then(n.bind(n,2615)))),"demo-1":(0,r.lazy)((()=>Promise.all([n.e(986),n.e(539),n.e(778)]).then(n.bind(n,3778)))),"demo-2":(0,r.lazy)((()=>Promise.all([n.e(986),n.e(727),n.e(557),n.e(705)]).then(n.bind(n,1705)))),"demo-3":(0,r.lazy)((()=>Promise.all([n.e(986),n.e(727),n.e(539),n.e(248),n.e(557),n.e(515)]).then(n.bind(n,2515))))},h=e=>{const[t,n=Object.keys(d)[0]]=decodeURI(e.hash).match(/^#(.+)/)||[];return n},v=function(){const e=(0,r.useRef)(null),[t,n]=(0,r.useState)(h(s.location));(0,r.useEffect)((()=>s.listen((({location:e,action:t,...r})=>n(h(e)))))),(0,r.useEffect)((()=>{let t,n=Date.now(),r=0;return function a(){let o=(Date.now()-n)/1e3;n=Date.now(),r=1/o,e.current.innerText=`fps ${r.toFixed()}`,t=requestAnimationFrame(a)}(),()=>cancelAnimationFrame(t)}),[]);const a=d[t]||null;return r.createElement("section",{className:u.Z.App},r.createElement("h1",{className:u.Z.Nav},"Three",Object.keys(d).map((e=>r.createElement("a",{key:e,href:`#${e}`},e))),"[",t,"]"),r.createElement("div",{ref:e,className:u.Z.Fps}),r.createElement(r.Suspense,{fallback:r.createElement(f,null)},r.createElement(a,null)))}},4501:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(2609),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,"html,body{position:relative;height:100%;margin:0}body>div{width:100%;height:100%}._3M_RZdIoVCWxkPboB-GoWL{width:100%;height:100%}._3uKXUyBw7-MSWH_XENKsbH{width:100%;height:100%}._29vMwfPw2faR6tr1XUO-Uw{position:absolute;top:1em;right:1em}._20hivCKAlBhW9KTCXETcVy a{margin:1em}",""]),a.locals={App:"_3M_RZdIoVCWxkPboB-GoWL",Demo:"_3uKXUyBw7-MSWH_XENKsbH",Fps:"_29vMwfPw2faR6tr1XUO-Uw",Nav:"_20hivCKAlBhW9KTCXETcVy"};const o=a},2609:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&a[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},8790:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(6062),a=n.n(r),o=n(4501);a()(o.Z,{insert:"head",singleton:!1});const i=o.Z.locals||{}},6062:(e,t,n)=>{"use strict";var r,a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function i(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],a=0;a<e.length;a++){var c=e[a],l=t.base?c[0]+t.base:c[0],s=n[l]||0,u="".concat(l," ").concat(s);n[l]=s+1;var f=i(u),d={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(o[f].references++,o[f].updater(d)):o.push({identifier:u,updater:p(d,t),references:1}),r.push(u)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var s,u=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function f(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function d(e,t,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,v=0;function p(e,t){var n,r,a;if(t.singleton){var o=v++;n=h||(h=l(t)),r=f.bind(null,n,o,!1),a=f.bind(null,n,o,!0)}else n=l(t),r=d.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=i(n[r]);o[a].references--}for(var l=c(e,t),s=0;s<n.length;s++){var u=i(n[s]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}n=l}}}}}]);