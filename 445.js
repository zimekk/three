(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[445],{8445:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});var r=n(2784);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var i,o=i||(i={});o.Pop="POP",o.Push="PUSH",o.Replace="REPLACE";function l(e){e.preventDefault(),e.returnValue=""}function s(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter((function(e){return e!==t}))}},call:function(t){e.forEach((function(e){return e&&e(t)}))}}}const u=function(e){function t(){var e=c.location,t=f.state||{};return[t.idx,{pathname:e.pathname,search:e.search,hash:e.hash,state:t.usr||null,key:t.key||"default"}]}function n(e){if("string"==typeof e)var t=e;else{t=e.pathname;var n=e.search;t=(void 0===t?"/":t)+(void 0===n?"":n)+(void 0===(e=e.hash)?"":e)}return t}function r(e,t){void 0===t&&(t=null);var n=a,r=m;if("string"==typeof e){var i={};if(e){var o=e.indexOf("#");0<=o&&(i.hash=e.substr(o),e=e.substr(0,o)),0<=(o=e.indexOf("?"))&&(i.search=e.substr(o),e=e.substr(0,o)),e&&(i.pathname=e)}e=i}return n({},r,{},e,{state:t,key:Math.random().toString(36).substr(2,8)})}function o(e){h=e,e=t(),p=e[0],m=e[1],v.call({action:h,location:m})}function u(e){f.go(e)}void 0===e&&(e={});var c=void 0===(e=e.window)?document.defaultView:e,f=c.history,d=null;c.addEventListener("popstate",(function(){if(d)b.call(d),d=null;else{var e=i.Pop,n=t(),r=n[0];if(n=n[1],b.length){if(null!=r){var a=p-r;a&&(d={action:e,location:n,retry:function(){u(-1*a)}},u(a))}}else o(e)}}));var h=i.Pop,p=(e=t())[0],m=e[1],v=s(),b=s();return null==p&&(p=0,f.replaceState(a({},f.state,{idx:p}),"")),{get action(){return h},get location(){return m},createHref:n,push:function e(t,a){var l=i.Push,s=r(t,a);if(!b.length||(b.call({action:l,location:s,retry:function(){e(t,a)}}),0)){var u=[{usr:s.state,key:s.key,idx:p+1},n(s)];s=u[0],u=u[1];try{f.pushState(s,"",u)}catch(e){c.location.assign(u)}o(l)}},replace:function e(t,a){var l=i.Replace,s=r(t,a);b.length&&(b.call({action:l,location:s,retry:function(){e(t,a)}}),1)||(s=[{usr:s.state,key:s.key,idx:p},n(s)],f.replaceState(s[0],"",s[1]),o(l))},go:u,back:function(){u(-1)},forward:function(){u(1)},listen:function(e){return v.push(e)},block:function(e){var t=b.push(e);return 1===b.length&&c.addEventListener("beforeunload",l),function(){t(),b.length||c.removeEventListener("beforeunload",l)}}}}();var c=n(8790);const f=()=>r.createElement("span",null,"Loading..."),d={"game-1":(0,r.lazy)((()=>Promise.all([n.e(380),n.e(539),n.e(727),n.e(248),n.e(461),n.e(928),n.e(485)]).then(n.bind(n,8485)))),"game-2":(0,r.lazy)((()=>Promise.all([n.e(380),n.e(727),n.e(248),n.e(652)]).then(n.bind(n,5652)))),"game-3":(0,r.lazy)((()=>Promise.all([n.e(380),n.e(539),n.e(727),n.e(248),n.e(981)]).then(n.bind(n,1981)))),"game-4":(0,r.lazy)((()=>Promise.all([n.e(380),n.e(539),n.e(727),n.e(777),n.e(827)]).then(n.bind(n,4827)))),"demo-1":(0,r.lazy)((()=>Promise.all([n.e(380),n.e(539),n.e(778)]).then(n.bind(n,3778)))),"demo-2":(0,r.lazy)((()=>Promise.all([n.e(380),n.e(539),n.e(248),n.e(461),n.e(928),n.e(93)]).then(n.bind(n,8093)))),"demo-3":(0,r.lazy)((()=>Promise.all([n.e(380),n.e(539),n.e(727),n.e(248),n.e(461),n.e(314),n.e(220)]).then(n.bind(n,6220)))),"demo-4":(0,r.lazy)((()=>Promise.all([n.e(380),n.e(727),n.e(461),n.e(928),n.e(314),n.e(376)]).then(n.bind(n,9376)))),"demo-5":(0,r.lazy)((()=>Promise.all([n.e(380),n.e(539),n.e(727),n.e(248),n.e(461),n.e(928),n.e(673)]).then(n.bind(n,673)))),"demo-6":(0,r.lazy)((()=>Promise.all([n.e(380),n.e(539),n.e(181)]).then(n.bind(n,7181)))),"demo-7":(0,r.lazy)((()=>Promise.all([n.e(380),n.e(539),n.e(727),n.e(248),n.e(461),n.e(928),n.e(501)]).then(n.bind(n,3501)))),gamepad:(0,r.lazy)((()=>n.e(664).then(n.bind(n,5664))))},h=e=>{const[t,n=Object.keys(d)[0]]=decodeURI(e.hash).match(/^#(.+)/)||[];return n},p=function(){const e=(0,r.useRef)(null),[t,n]=(0,r.useState)(h(u.location));(0,r.useEffect)((()=>u.listen((({location:e,action:t,...r})=>n(h(e)))))),(0,r.useEffect)((()=>{let t,n=Date.now(),r=0;return function a(){let i=(Date.now()-n)/1e3;n=Date.now(),r=1/i,e.current.innerText=`fps ${r.toFixed()}`,t=requestAnimationFrame(a)}(),()=>cancelAnimationFrame(t)}),[]);const a=d[t]||null;return r.createElement("section",{className:c.Z.App},r.createElement("h1",{className:c.Z.Nav},"Three",Object.keys(d).map((e=>r.createElement("a",{key:e,href:`#${e}`},e))),"[",t,"]"),r.createElement("div",{ref:e,className:c.Z.Fps}),r.createElement(r.Suspense,{fallback:r.createElement(f,null)},r.createElement(a,null)))}},4501:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var r=n(2609),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,"html,body{position:relative;height:100%;margin:0}body>div{width:100%;height:100%}._3M_RZdIoVCWxkPboB-GoWL{width:100%;height:100%}._3uKXUyBw7-MSWH_XENKsbH{width:100%;height:100%}._29vMwfPw2faR6tr1XUO-Uw{position:absolute;top:1em;right:1em}._20hivCKAlBhW9KTCXETcVy a{margin:1em}",""]),a.locals={App:"_3M_RZdIoVCWxkPboB-GoWL",Demo:"_3uKXUyBw7-MSWH_XENKsbH",Fps:"_29vMwfPw2faR6tr1XUO-Uw",Nav:"_20hivCKAlBhW9KTCXETcVy"};const i=a},2609:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&a[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},8790:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var r=n(6062),a=n.n(r),i=n(4036),o=n.n(i),l=n(6793),s=n.n(l),u=n(7892),c=n.n(u),f=n(1173),d=n.n(f),h=n(2464),p=n.n(h),m=n(4501),v={};v.styleTagTransform=p(),v.setAttributes=c(),v.insert=s().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=d();var b=a()(m.default,v);if(!m.default.locals||e.hot.invalidate){var y=!m.default.locals,g=y?m:m.default.locals;e.hot.accept(4501,(t=>{m=n(4501),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(g,y?m:m.default.locals,y)?(g=y?m:m.default.locals,b(m.default)):e.hot.invalidate()}))}e.hot.dispose((function(){b()}));const w=m.default&&m.default.locals?m.default.locals:void 0},6062:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},o=[],l=0;l<e.length;l++){var s=e[l],u=r.base?s[0]+r.base:s[0],c=i[u]||0,f="".concat(u," ").concat(c);i[u]=c+1;var d=n(f),h={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(t[d].references++,t[d].updater(h)):t.push({identifier:f,updater:a(h,r),references:1}),o.push(f)}return o}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var l=n(i[o]);t[l].references--}for(var s=r(e,a),u=0;u<i.length;u++){var c=n(i[u]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}i=s}}},6793:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},1173:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},7892:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},4036:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,a=n.media,i=n.sourceMap;a?e.setAttribute("media",a):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},2464:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}}]);