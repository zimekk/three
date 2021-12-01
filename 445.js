"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[445],{8445:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var a=n(2784);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,a=arguments[t];for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}var o,i=o||(o={});i.Pop="POP",i.Push="PUSH",i.Replace="REPLACE";function l(e){e.preventDefault(),e.returnValue=""}function s(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter((function(e){return e!==t}))}},call:function(t){e.forEach((function(e){return e&&e(t)}))}}}const c=function(e){function t(){var e=u.location,t=f.state||{};return[t.idx,{pathname:e.pathname,search:e.search,hash:e.hash,state:t.usr||null,key:t.key||"default"}]}function n(e){if("string"==typeof e)var t=e;else{t=e.pathname;var n=e.search;t=(void 0===t?"/":t)+(void 0===n?"":n)+(void 0===(e=e.hash)?"":e)}return t}function a(e,t){void 0===t&&(t=null);var n=r,a={pathname:m.pathname,hash:"",search:""};if("string"==typeof e){var o={};if(e){var i=e.indexOf("#");0<=i&&(o.hash=e.substr(i),e=e.substr(0,i)),0<=(i=e.indexOf("?"))&&(o.search=e.substr(i),e=e.substr(0,i)),e&&(o.pathname=e)}e=o}return n(a,e,{state:t,key:Math.random().toString(36).substr(2,8)})}function i(e){h=e,e=t(),p=e[0],m=e[1],v.call({action:h,location:m})}function c(e){f.go(e)}void 0===e&&(e={});var u=void 0===(e=e.window)?document.defaultView:e,f=u.history,d=null;u.addEventListener("popstate",(function(){if(d)y.call(d),d=null;else{var e=o.Pop,n=t(),a=n[0];if(n=n[1],y.length){if(null!=a){var r=p-a;r&&(d={action:e,location:n,retry:function(){c(-1*r)}},c(r))}}else i(e)}}));var h=o.Pop,p=(e=t())[0],m=e[1],v=s(),y=s();return null==p&&(p=0,f.replaceState(r({},f.state,{idx:p}),"")),{get action(){return h},get location(){return m},createHref:n,push:function e(t,r){var l=o.Push,s=a(t,r);if(!y.length||(y.call({action:l,location:s,retry:function(){e(t,r)}}),0)){var c=[{usr:s.state,key:s.key,idx:p+1},n(s)];s=c[0],c=c[1];try{f.pushState(s,"",c)}catch(e){u.location.assign(c)}i(l)}},replace:function e(t,r){var l=o.Replace,s=a(t,r);y.length&&(y.call({action:l,location:s,retry:function(){e(t,r)}}),1)||(s=[{usr:s.state,key:s.key,idx:p},n(s)],f.replaceState(s[0],"",s[1]),i(l))},go:c,back:function(){c(-1)},forward:function(){c(1)},listen:function(e){return v.push(e)},block:function(e){var t=y.push(e);return 1===y.length&&u.addEventListener("beforeunload",l),function(){t(),y.length||u.removeEventListener("beforeunload",l)}}}}();var u=n(8790);const f=()=>a.createElement("span",null,"Loading..."),d={earth:(0,a.lazy)((()=>Promise.all([n.e(980),n.e(539),n.e(35)]).then(n.bind(n,8035)))),landscape:(0,a.lazy)((()=>Promise.all([n.e(980),n.e(539),n.e(120)]).then(n.bind(n,7120)))),ripple:(0,a.lazy)((()=>Promise.all([n.e(980),n.e(539),n.e(909)]).then(n.bind(n,4909)))),"game-1":(0,a.lazy)((()=>Promise.all([n.e(980),n.e(539),n.e(727),n.e(248),n.e(557),n.e(485)]).then(n.bind(n,8485)))),"game-2":(0,a.lazy)((()=>Promise.all([n.e(980),n.e(727),n.e(248),n.e(922)]).then(n.bind(n,8922)))),"game-3":(0,a.lazy)((()=>Promise.all([n.e(980),n.e(539),n.e(727),n.e(248),n.e(981)]).then(n.bind(n,1981)))),"game-4":(0,a.lazy)((()=>Promise.all([n.e(980),n.e(539),n.e(727),n.e(273),n.e(827)]).then(n.bind(n,4827)))),"demo-1":(0,a.lazy)((()=>Promise.all([n.e(980),n.e(539),n.e(778)]).then(n.bind(n,3778)))),"demo-2":(0,a.lazy)((()=>Promise.all([n.e(980),n.e(539),n.e(248),n.e(557),n.e(93)]).then(n.bind(n,8093)))),"demo-3":(0,a.lazy)((()=>Promise.all([n.e(980),n.e(539),n.e(727),n.e(248),n.e(557),n.e(746)]).then(n.bind(n,746)))),"demo-4":(0,a.lazy)((()=>Promise.all([n.e(980),n.e(727),n.e(557),n.e(376)]).then(n.bind(n,9376)))),"demo-5":(0,a.lazy)((()=>Promise.all([n.e(980),n.e(539),n.e(727),n.e(248),n.e(557),n.e(673)]).then(n.bind(n,673)))),"demo-6":(0,a.lazy)((()=>Promise.all([n.e(980),n.e(539),n.e(181)]).then(n.bind(n,7181)))),"demo-7":(0,a.lazy)((()=>Promise.all([n.e(980),n.e(539),n.e(727),n.e(248),n.e(557),n.e(501)]).then(n.bind(n,3501)))),gamepad:(0,a.lazy)((()=>n.e(664).then(n.bind(n,5664))))},h=e=>{const[t,n=Object.keys(d)[0]]=decodeURI(e.hash).match(/^#(.+)/)||[];return n},p=function(){const e=(0,a.useRef)(null),[t,n]=(0,a.useState)(h(c.location));(0,a.useEffect)((()=>c.listen((({location:e,action:t,...a})=>n(h(e)))))),(0,a.useEffect)((()=>{let t,n=Date.now(),a=0;return function r(){let o=(Date.now()-n)/1e3;n=Date.now(),a=1/o,e.current.innerText=`fps ${a.toFixed()}`,t=requestAnimationFrame(r)}(),()=>cancelAnimationFrame(t)}),[]);const r=d[t]||null;return a.createElement("section",{className:u.Z.App},a.createElement("h1",{className:u.Z.Nav},"Three",Object.keys(d).map((e=>a.createElement("a",{key:e,href:`#${e}`},e))),"[",t,"]"),a.createElement("div",{ref:e,className:u.Z.Fps}),a.createElement(a.Suspense,{fallback:a.createElement(f,null)},a.createElement(r,null)))}},4501:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var a=n(9601),r=n.n(a),o=n(2609),i=n.n(o)()(r());i.push([e.id,"html,body{position:relative;height:100%;margin:0}body>div{width:100%;height:100%}.IMqMrT2eGOGeFiLbCAGg{width:100%;height:100%}.n937gRgybt0EaYY8TBxv{width:100%;height:100%}.zz5ICnB7SLpEJfXQbAcs{position:absolute;top:1em;right:1em}.MYAvfs8GETQAsfO1R7He a{margin:1em}",""]),i.locals={App:"IMqMrT2eGOGeFiLbCAGg",Demo:"n937gRgybt0EaYY8TBxv",Fps:"zz5ICnB7SLpEJfXQbAcs",Nav:"MYAvfs8GETQAsfO1R7He"};const l=i},2609:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(i[s]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);a&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},9601:e=>{e.exports=function(e){return e[1]}},8790:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(6062),r=n.n(a),o=n(4036),i=n.n(o),l=n(6793),s=n.n(l),c=n(7892),u=n.n(c),f=n(1173),d=n.n(f),h=n(2464),p=n.n(h),m=n(4501),v={};v.styleTagTransform=p(),v.setAttributes=u(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=d();var y=r()(m.default,v);if(!m.default.locals||e.hot.invalidate){var b=!m.default.locals,g=b?m:m.default.locals;e.hot.accept(4501,(t=>{m=n(4501),function(e,t,n){if(!e&&t||e&&!t)return!1;var a;for(a in e)if((!n||"default"!==a)&&e[a]!==t[a])return!1;for(a in t)if(!(n&&"default"===a||e[a]))return!1;return!0}(g,b?m:m.default.locals,b)?(g=b?m:m.default.locals,y(m.default)):e.hot.invalidate()}))}e.hot.dispose((function(){y()}));const E=m.default&&m.default.locals?m.default.locals:void 0},6062:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var o={},i=[],l=0;l<e.length;l++){var s=e[l],c=a.base?s[0]+a.base:s[0],u=o[c]||0,f="".concat(c," ").concat(u);o[c]=u+1;var d=n(f),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)t[d].references++,t[d].updater(h);else{var p=r(h,a);a.byIndex=l,t.splice(l,0,{identifier:f,updater:p,references:1})}i.push(f)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var l=n(o[i]);t[l].references--}for(var s=a(e,r),c=0;c<o.length;c++){var u=n(o[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}o=s}}},6793:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},1173:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},7892:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},4036:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},2464:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}}]);