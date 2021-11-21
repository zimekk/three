"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[827],{4827:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var c=n(2955),a=n(2784),r=n(3747),o=n(6727),l=n(5848),i=n(1832),s=n(8185),d=n(3448),u=n(1822),f=n(7539),p=n(2452);function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},m.apply(this,arguments)}const h=new c.Vector3;function b({...e}){const t=(0,a.useRef)(),{scene:s,animations:d}=(0,o.L)(n(544).Z),{ref:u,mixer:f,names:p,actions:b,clips:g}=(0,l.v)(d);return(0,a.useEffect)((()=>{b?.propellerAction.play(),b?.elevatorAction.play(),b?.elevatorAction.setLoop(c.LoopPingPong),b?.rudderAction.play(),b?.rudderAction.setLoop(c.LoopPingPong)})),(0,r.xQ)((e=>{const n=e.clock.getElapsedTime();t.current.getWorldPosition(h),e.camera.lookAt(h),t.current.rotation.x=c.MathUtils.lerp(t.current.rotation.x,Math.cos(n/1)/4,.1),t.current.rotation.y=c.MathUtils.lerp(t.current.rotation.y,Math.sin(n/2)/8,.1),t.current.rotation.z=c.MathUtils.lerp(t.current.rotation.z,Math.sin(n/4)/8,.1),t.current.position.y=c.MathUtils.lerp(t.current.position.y,Math.sin(n)/3,.1)})),a.createElement("group",{ref:t},a.createElement("primitive",m({ref:u,object:s,scale:[.1,.1,.1]},e)),";",a.createElement(i.V,{url:n(3105).Z}))}const g={maxYaw:.01,maxPitch:.05,maxRoll:.05,yawFrequency:.8,pitchFrequency:.8,rollFrequency:.8};function y(){const e=a.useRef();return a.createElement("section",{className:p.Z.Demo},a.createElement(r.Xz,null,a.createElement(a.Suspense,{fallback:null},a.createElement(s.q,{background:!0,files:[n(9224).Z,n(2987).Z,n(5369).Z,n(5162).Z,n(7505).Z,n(5140).Z]}),a.createElement(d.Z,{width:10,length:2,position:[-10,5,5]}),a.createElement(d.Z,{width:15,length:2,position:[10,-10,-5]}),a.createElement(b,null),a.createElement(u.i,m({},g,{ref:e,additive:!0}))),a.createElement("ambientLight",{intensity:.2}),a.createElement("pointLight",{castShadow:!0,intensity:1,position:[100,10,100]}),a.createElement(f.z,{screenSpacePanning:!1})))}},8354:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var c=n(2609),a=n.n(c)()((function(e){return e[1]}));a.push([e.id,"._2gm_cyOqPcG-FIY2wyZ35H{width:100%;height:100%}",""]),a.locals={Demo:"_2gm_cyOqPcG-FIY2wyZ35H"};const r=a},2987:(e,t,n)=>{n.d(t,{Z:()=>c});const c=n.p+"9b4777bd2fc47791c353ccc4c0ffc5e4.jpg"},5162:(e,t,n)=>{n.d(t,{Z:()=>c});const c=n.p+"ec565aea0d1cc5c2eb7cda1187fd74d4.jpg"},5140:(e,t,n)=>{n.d(t,{Z:()=>c});const c=n.p+"205ac32341619ab3b7eb32f64daa9519.jpg"},3105:(e,t,n)=>{n.d(t,{Z:()=>c});const c=n.p+"195440513f066c6513b71a2282d6cc89.mp3"},544:(e,t,n)=>{n.d(t,{Z:()=>c});const c=n.p+"466d62303e0cf87d8c12c44d4d68b7e7.glb"},9224:(e,t,n)=>{n.d(t,{Z:()=>c});const c=n.p+"cc161d80749a20f80140ecf03cf8e1f4.jpg"},5369:(e,t,n)=>{n.d(t,{Z:()=>c});const c=n.p+"4c73b76b8e8932475975b0086fe648d1.jpg"},7505:(e,t,n)=>{n.d(t,{Z:()=>c});const c=n.p+"c78ff81beb19294778f92d6638d48f0e.jpg"},2452:(e,t,n)=>{n.d(t,{Z:()=>v});var c=n(6062),a=n.n(c),r=n(4036),o=n.n(r),l=n(6793),i=n.n(l),s=n(7892),d=n.n(s),u=n(1173),f=n.n(u),p=n(2464),m=n.n(p),h=n(8354),b={};b.styleTagTransform=m(),b.setAttributes=d(),b.insert=i().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=f();var g=a()(h.default,b);if(!h.default.locals||e.hot.invalidate){var y=!h.default.locals,Z=y?h:h.default.locals;e.hot.accept(8354,(t=>{h=n(8354),function(e,t,n){if(!e&&t||e&&!t)return!1;var c;for(c in e)if((!n||"default"!==c)&&e[c]!==t[c])return!1;for(c in t)if(!(n&&"default"===c||e[c]))return!1;return!0}(Z,y?h:h.default.locals,y)?(Z=y?h:h.default.locals,g(h.default)):e.hot.invalidate()}))}e.hot.dispose((function(){g()}));const v=h.default&&h.default.locals?h.default.locals:void 0}}]);