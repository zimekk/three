(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[485],{8485:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>v});var n=r(2955),a=r(2784),o=r(4194),s=r(248),c=r(6727),i=r(7539),l=r(9557);function u(e){const[t,r]=(0,a.useState)(!1);function n({key:t}){t===e&&r(!0)}const o=({key:t})=>{t===e&&r(!1)};return(0,a.useEffect)((()=>(window.addEventListener("keydown",n),window.addEventListener("keyup",o),()=>{window.removeEventListener("keydown",n),window.removeEventListener("keyup",o)})),[]),t}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const p=r(9117).Z;function f(e){const t=(0,a.useRef)(),{nodes:r,materials:n}=(0,c.L)(p);return a.createElement("group",m({ref:t},e,{dispose:null}),a.createElement("mesh",{geometry:r.Cube.geometry,material:n.Material,position:[-.01,0,0],scale:[4.24,.32,3.88]}),a.createElement("mesh",{geometry:r["Grass_Seamless_Texture_#1417"].geometry,material:n["Grass Seamless Texture #1417"],position:[-.51,.73,0]}))}c.L.preload(p);var w=r(8790);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const h=({position:{x:e,y:t,z:r}},n=1)=>[e,t+n,r];function y(e){const[t]=(0,s.xK)((()=>({rotation:[-Math.PI/2,0,0],...e})));return a.createElement("mesh",{ref:t,receiveShadow:!0},a.createElement("planeBufferGeometry",{attach:"geometry",args:[15,15]}),a.createElement("shadowMaterial",{attach:"material",color:"#171717"}))}function E({parameter:e,...t}){const[r,i]=(0,a.useState)(0),[m,p]=(0,s.EJ)((()=>({mass:1,position:[0,3,0],isKinematic:!0}))),f=({position:{x:e,y:t,z:n}},a=3,o=3)=>[e+Math.sin(r)*a,t+o,n+Math.cos(r)*a];Object.assign(window,{ref:m,api:p});const{gl:w,camera:y}=(0,o.Ky)(),{scene:E}=(0,c.L)("boy.gltf"),[{pos:v,cam:d},b]=(0,l.q_)((()=>({pos:[0,0,0],cam:[0,0,0],config:l.vc.molasses}))),A={ArrowUp:u("ArrowUp"),ArrowDown:u("ArrowDown"),ArrowLeft:u("ArrowLeft"),ArrowRight:u("ArrowRight"),Space:u(" ")};return(0,a.useEffect)((()=>{if(A.ArrowUp){const{position:{x:e,y:t,z:n}}=m.current;p.position.set(e-Math.sin(r),t,n-Math.cos(r))}b({pos:h(m.current),cam:f(m.current)})}),[A.ArrowUp]),(0,a.useEffect)((()=>{if(A.ArrowDown){const{position:{x:e,y:t,z:n}}=m.current;p.position.set(e+Math.sin(r),t,n+Math.cos(r))}b({pos:h(m.current),cam:f(m.current)})}),[A.ArrowDown]),(0,a.useEffect)((()=>{A.ArrowLeft&&i((e=>{return t=e+Math.PI/4,p.rotation.set(0,t,0),t;var t}))}),[A.ArrowLeft]),(0,a.useEffect)((()=>{A.ArrowRight&&i((e=>{return t=e-Math.PI/4,p.rotation.set(0,t,0),t;var t}))}),[A.ArrowRight]),(0,a.useEffect)((()=>{A.Space&&p.velocity.set(0,4,0)}),[A.Space]),(0,o.xQ)((({clock:e})=>{e.getElapsedTime();const[t,r,a]=v.get();y.lookAt(new n.Vector3(t,2,a)),y.position.set(...d.get())})),a.createElement("primitive",g({ref:m,object:E},t))}function v(){const[e,t]=(0,a.useState)({x:4,y:0,z:-3});return a.createElement("section",{className:w.Z.Demo},a.createElement("div",{className:w.Z.Range},a.createElement("input",{type:"range",min:"-10",max:"10",value:e.x,onChange:e=>t((t=>({...t,x:e.target.value})))})," ",a.createElement("input",{type:"range",min:"-10",max:"10",value:e.y,onChange:e=>t((t=>({...t,y:e.target.value})))})," ",a.createElement("input",{type:"range",min:"-10",max:"10",value:e.z,onChange:e=>t((t=>({...t,z:e.target.value})))})," ",JSON.stringify(e)),a.createElement(o.Xz,{shadowMap:!0,gl:{alpha:!1},camera:{position:[-1,2,5],fov:50}},a.createElement(a.Suspense,{fallback:"loading..."},a.createElement(f,{scale:1}),a.createElement(s.wI,null,a.createElement(y,null),a.createElement(E,{position:[0,1,0],scale:[.1,.1,.1]}))),a.createElement(i.z,null),a.createElement("color",{attach:"background",args:["lightblue"]}),a.createElement("hemisphereLight",{intensity:.35}),a.createElement("spotLight",{position:[10,10,10],angle:.3,penumbra:1,intensity:2,castShadow:!0})))}},9117:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r.p+"b8fdafb76c28e03b126e8898a130387f.gltf"}}]);