(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[600],{600:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>w});var a=n(784),r=n(803),o=n(373),c=n(16),i=n(870),l=n(116),s=n(491),m=n(62),u=n.n(m),p=n(501);u()(p.Z,{insert:"head",singleton:!1});const f=p.Z.locals||{};function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function g(e){const t=(0,a.useRef)(),o=(0,r.U2)(i.v,n(502).Z),c=(0,r.U2)(l.L,n(676).Z,(e=>{o.preload(),e.setMaterials(o)}));return(0,r.xQ)((e=>{const n=e.clock.getElapsedTime();t.current&&(t.current.rotation.y=Math.sin(n/1)+3)})),a.createElement("primitive",h({ref:t,object:c},e))}function d({parameter:e,...t}){const n=(0,a.useRef)(),{scene:c}=(0,o.L)("boy.gltf");return(0,r.xQ)((e=>{const t=e.clock.getElapsedTime();n.current&&(n.current.rotation.y=Math.sin(t+2)+3)})),a.createElement("primitive",h({ref:n,object:c},t))}function E({parameter:e,...t}){const n=(0,a.useRef)(),{scene:c}=(0,o.L)("car.gltf");return(0,r.xQ)((t=>{t.clock.getElapsedTime(),n.current&&(Object.assign(n.current.position,e),n.current.rotation.y+=.01)})),a.createElement("primitive",h({ref:n,object:c},t))}function v({parameter:e,...t}){const n=(0,a.useRef)(),{scene:c}=(0,o.L)("dog.gltf");return(0,r.xQ)((e=>{const t=e.clock.getElapsedTime();n.current&&(n.current.rotation.y=Math.sin(2*t)+3)})),a.createElement("primitive",h({ref:n,object:c},t))}function b(e){const[t]=(0,s.u)((()=>({rotation:[-Math.PI/2,0,0],...e})));return a.createElement("mesh",{ref:t,receiveShadow:!0},a.createElement("planeBufferGeometry",{attach:"geometry",args:[1009,1e3]}),a.createElement("shadowMaterial",{attach:"material",color:"#171717"}))}function y(e){const[t]=(0,s.a)((()=>({mass:1,position:[0,5,0],rotation:[.4,.2,.5],...e})));return a.createElement("mesh",{receiveShadow:!0,castShadow:!0,ref:t},a.createElement("boxBufferGeometry",{attach:"geometry"}),a.createElement("meshLambertMaterial",{attach:"material",color:"hotpink"}))}function w(){const e=(0,a.useRef)(null),[t,n]=(0,a.useState)({x:4,y:0,z:-3});return(0,a.useEffect)((()=>{let t,n=Date.now(),a=0;return function r(){let o=(Date.now()-n)/1e3;n=Date.now(),a=1/o,e.current.innerText=`fps ${a.toFixed()}`,t=requestAnimationFrame(r)}(),()=>cancelAnimationFrame(t)}),[]),a.createElement("section",{className:f.App},a.createElement("h1",null,"Three"),a.createElement("div",{className:f.Range},a.createElement("input",{type:"range",min:"-10",max:"10",value:t.x,onChange:e=>n((t=>({...t,x:e.target.value})))})," ",a.createElement("input",{type:"range",min:"-10",max:"10",value:t.y,onChange:e=>n((t=>({...t,y:e.target.value})))})," ",a.createElement("input",{type:"range",min:"-10",max:"10",value:t.z,onChange:e=>n((t=>({...t,z:e.target.value})))})," ",JSON.stringify(t)),a.createElement("div",{ref:e,className:f.Fps}),a.createElement(r.Xz,{shadowMap:!0,gl:{alpha:!1},camera:{position:[-1,2,5],fov:50}},a.createElement(a.Suspense,{fallback:"loading..."},a.createElement(d,{position:[2,0,-1],rotation:[0,3.5,0],scale:[.1,.1,.1],parameter:t}),a.createElement(E,{position:Object.values(t),rotation:[0,3.5,0],scale:[.1,.1,.1],parameter:t}),a.createElement(v,{position:[2,0,0],rotation:[0,3.5,0],scale:[.1,.1,.1],parameter:t}),a.createElement(g,{position:[-.8,0,-1],rotation:[0,3.5,0]})),a.createElement(c.z,null),a.createElement("color",{attach:"background",args:["lightblue"]}),a.createElement("hemisphereLight",{intensity:.35}),a.createElement("spotLight",{position:[10,10,10],angle:.3,penumbra:1,intensity:2,castShadow:!0}),a.createElement(s.P,null,a.createElement(b,null),a.createElement(y,null),a.createElement(y,{position:[0,10,-2]}),a.createElement(y,{position:[0,20,-2]}))))}},501:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(609),r=n.n(a)()((function(e){return e[1]}));r.push([e.id,"html,body{position:relative;height:100%;margin:0}body>div{width:100%;height:100%}._3M_RZdIoVCWxkPboB-GoWL{width:100%;height:100%}._29vMwfPw2faR6tr1XUO-Uw{position:absolute;top:1em;right:1em}",""]),r.locals={App:"_3M_RZdIoVCWxkPboB-GoWL",Fps:"_29vMwfPw2faR6tr1XUO-Uw"};const o=r},502:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"f67a390d4ff6ddaa1ce5436a0d471cc6.mtl"},676:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"2395df1a45e70c30ae55e3f138879ffc.obj"}}]);