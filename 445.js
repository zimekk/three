"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[445],{8445:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var r,a=n(2784);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(r||(r={}));var i="beforeunload";function u(e){e.preventDefault(),e.returnValue=""}function c(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter((function(e){return e!==t}))}},call:function(t){e.forEach((function(e){return e&&e(t)}))}}}var l=function(e){void 0===e&&(e={});var t=e.window,n=void 0===t?document.defaultView:t,a=n.history;function l(){var e=n.location,t=e.pathname,r=e.search,o=e.hash,i=a.state||{};return[i.idx,{pathname:t,search:r,hash:o,state:i.usr||null,key:i.key||"default"}]}var s=null;n.addEventListener("popstate",(function(){if(s)m.call(s),s=null;else{var e=r.Pop,t=l(),n=t[0],a=t[1];if(m.length){if(null!=n){var o=p-n;o&&(s={action:e,location:a,retry:function(){w(-1*o)}},w(o))}}else P(e)}}));var f=r.Pop,d=l(),p=d[0],h=d[1],v=c(),m=c();function y(e){return"string"==typeof e?e:(n=(t=e).pathname,r=void 0===n?"/":n,a=t.search,o=void 0===a?"":a,i=t.hash,u=void 0===i?"":i,o&&"?"!==o&&(r+="?"===o.charAt(0)?o:"?"+o),u&&"#"!==u&&(r+="#"===u.charAt(0)?u:"#"+u),r);var t,n,r,a,o,i,u}function b(e,t){return void 0===t&&(t=null),o({pathname:h.pathname,hash:"",search:""},"string"==typeof e?function(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}(e):e,{state:t,key:Math.random().toString(36).substr(2,8)})}function g(e,t){return[{usr:e.state,key:e.key,idx:t},y(e)]}function E(e,t,n){return!m.length||(m.call({action:e,location:t,retry:n}),!1)}function P(e){f=e;var t=l();p=t[0],h=t[1],v.call({action:f,location:h})}function w(e){a.go(e)}return null==p&&(p=0,a.replaceState(o({},a.state,{idx:p}),"")),{get action(){return f},get location(){return h},createHref:y,push:function e(t,o){var i=r.Push,u=b(t,o);if(E(i,u,(function(){e(t,o)}))){var c=g(u,p+1),l=c[0],s=c[1];try{a.pushState(l,"",s)}catch(e){n.location.assign(s)}P(i)}},replace:function e(t,n){var o=r.Replace,i=b(t,n);if(E(o,i,(function(){e(t,n)}))){var u=g(i,p),c=u[0],l=u[1];a.replaceState(c,"",l),P(o)}},go:w,back:function(){w(-1)},forward:function(){w(1)},listen:function(e){return v.push(e)},block:function(e){var t=m.push(e);return 1===m.length&&n.addEventListener(i,u),function(){t(),m.length||n.removeEventListener(i,u)}}}}(),s=n(8790),f=["location","action"];function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){u=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(u)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var h=function(){return a.createElement("span",null,"Loading...")},v={earth:(0,a.lazy)((function(){return Promise.all([n.e(980),n.e(539),n.e(35)]).then(n.bind(n,8035))})),landscape:(0,a.lazy)((function(){return Promise.all([n.e(980),n.e(539),n.e(120)]).then(n.bind(n,7120))})),ripple:(0,a.lazy)((function(){return Promise.all([n.e(980),n.e(539),n.e(909)]).then(n.bind(n,4909))})),"game-1":(0,a.lazy)((function(){return Promise.all([n.e(980),n.e(539),n.e(727),n.e(248),n.e(557),n.e(485)]).then(n.bind(n,8485))})),"game-2":(0,a.lazy)((function(){return Promise.all([n.e(980),n.e(727),n.e(248),n.e(922)]).then(n.bind(n,8922))})),"game-3":(0,a.lazy)((function(){return Promise.all([n.e(980),n.e(539),n.e(727),n.e(248),n.e(981)]).then(n.bind(n,1981))})),"game-4":(0,a.lazy)((function(){return Promise.all([n.e(980),n.e(539),n.e(727),n.e(273),n.e(827)]).then(n.bind(n,4827))})),"demo-1":(0,a.lazy)((function(){return Promise.all([n.e(980),n.e(539),n.e(778)]).then(n.bind(n,3778))})),"demo-2":(0,a.lazy)((function(){return Promise.all([n.e(980),n.e(539),n.e(248),n.e(557),n.e(93)]).then(n.bind(n,8093))})),"demo-3":(0,a.lazy)((function(){return Promise.all([n.e(980),n.e(539),n.e(727),n.e(248),n.e(557),n.e(746)]).then(n.bind(n,746))})),"demo-4":(0,a.lazy)((function(){return Promise.all([n.e(980),n.e(727),n.e(557),n.e(376)]).then(n.bind(n,9376))})),"demo-5":(0,a.lazy)((function(){return Promise.all([n.e(980),n.e(539),n.e(727),n.e(248),n.e(557),n.e(673)]).then(n.bind(n,673))})),"demo-6":(0,a.lazy)((function(){return Promise.all([n.e(980),n.e(539),n.e(181)]).then(n.bind(n,7181))})),"demo-7":(0,a.lazy)((function(){return Promise.all([n.e(980),n.e(539),n.e(727),n.e(248),n.e(557),n.e(501)]).then(n.bind(n,3501))})),gamepad:(0,a.lazy)((function(){return n.e(664).then(n.bind(n,5664))}))},m=function(e){var t=d(decodeURI(e.hash).match(/^#(.+)/)||[],2),n=(t[0],t[1]);return void 0===n?Object.keys(v)[0]:n};const y=function(){var e=(0,a.useRef)(null),t=d((0,a.useState)(m(l.location)),2),n=t[0],r=t[1];(0,a.useEffect)((function(){return l.listen((function(e){var t=e.location;return e.action,function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}}(e,f),r(m(t))}))})),(0,a.useEffect)((function(){var t=void 0,n=Date.now(),r=0;return function a(){var o=(Date.now()-n)/1e3;n=Date.now(),r=1/o,e.current.innerText="fps ".concat(r.toFixed()),t=requestAnimationFrame(a)}(),function(){return cancelAnimationFrame(t)}}),[]);var o=v[n]||null;return a.createElement("section",{className:s.Z.App},a.createElement("h1",{className:s.Z.Nav},"Three",Object.keys(v).map((function(e){return a.createElement("a",{key:e,href:"#".concat(e)},e)})),"[",n,"]"),a.createElement("div",{ref:e,className:s.Z.Fps}),a.createElement(a.Suspense,{fallback:a.createElement(h,null)},a.createElement(o,null)))}},4501:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(9601),a=n.n(r),o=n(2609),i=n.n(o)()(a());i.push([e.id,"html,body{position:relative;height:100%;margin:0}body>div{width:100%;height:100%}.IMqMrT2eGOGeFiLbCAGg{width:100%;height:100%}.n937gRgybt0EaYY8TBxv{width:100%;height:100%}.zz5ICnB7SLpEJfXQbAcs{position:absolute;top:1em;right:1em}.MYAvfs8GETQAsfO1R7He a{margin:1em}",""]),i.locals={App:"IMqMrT2eGOGeFiLbCAGg",Demo:"n937gRgybt0EaYY8TBxv",Fps:"zz5ICnB7SLpEJfXQbAcs",Nav:"MYAvfs8GETQAsfO1R7He"};const u=i},2609:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var u=0;u<this.length;u++){var c=this[u][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&i[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),t.push(s))}},t}},9601:e=>{e.exports=function(e){return e[1]}},8790:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(6062),a=n.n(r),o=n(4036),i=n.n(o),u=n(6793),c=n.n(u),l=n(7892),s=n.n(l),f=n(1173),d=n.n(f),p=n(2464),h=n.n(p),v=n(4501),m={};m.styleTagTransform=h(),m.setAttributes=s(),m.insert=c().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=d();var y=a()(v.default,m);if(!v.default.locals||e.hot.invalidate){var b=!v.default.locals,g=b?v:v.default.locals;e.hot.accept(4501,(t=>{v=n(4501),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(g,b?v:v.default.locals,b)?(g=b?v:v.default.locals,y(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){y()}));const E=v.default&&v.default.locals?v.default.locals:void 0},6062:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],u=0;u<e.length;u++){var c=e[u],l=r.base?c[0]+r.base:c[0],s=o[l]||0,f="".concat(l," ").concat(s);o[l]=s+1;var d=n(f),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(p);else{var h=a(p,r);r.byIndex=u,t.splice(u,0,{identifier:f,updater:h,references:1})}i.push(f)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var u=n(o[i]);t[u].references--}for(var c=r(e,a),l=0;l<o.length;l++){var s=n(o[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}o=c}}},6793:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},1173:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},7892:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},4036:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},2464:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}}]);