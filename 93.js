(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[93],{93:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>h});var n=a(784),r=a(803),c=a(16),o=a(248),l=a(491),i=a(345),s=a(790);function m(e){const[t]=(0,o.xK)((()=>({rotation:[-Math.PI/2,0,0],...e})));return n.createElement("mesh",{ref:t,receiveShadow:!0},n.createElement("planeBufferGeometry",{attach:"geometry",args:[1009,1e3]}),n.createElement("shadowMaterial",{attach:"material",color:"#171717"}))}function u({position:e=[0,5,0],...t}){const{gl:a,camera:c}=(0,r.Ky)(),[i]=(0,o.EJ)((()=>({mass:1,rotation:[.4,.2,.5],position:e,...t})));return n.createElement(l.a.mesh,{receiveShadow:!0,castShadow:!0,ref:i},n.createElement("boxBufferGeometry",{attach:"geometry"}),n.createElement("meshLambertMaterial",{attach:"material",color:"hotpink"}))}function h(){const[e,t]=(0,n.useState)({x:4,y:0,z:-3});return(0,n.useEffect)((()=>{let e;return function t(){e=requestAnimationFrame(t)}(),()=>cancelAnimationFrame(e)}),[]),i[1],n.createElement("section",{className:s.Z.Demo},n.createElement(r.Xz,{shadowMap:!0,gl:{alpha:!1},camera:{position:[-1,2,5],fov:50}},n.createElement(c.z,null),n.createElement("color",{attach:"background",args:["lightblue"]}),n.createElement("hemisphereLight",{intensity:.35}),n.createElement("spotLight",{position:[10,10,10],angle:.3,penumbra:1,intensity:2,castShadow:!0}),n.createElement(o.wI,null,n.createElement(m,null),n.createElement(u,null),n.createElement(u,{position:[0,10,-2]}),n.createElement(u,{position:Object.values(e)}))))}},345:e=>{"use strict";e.exports=JSON.parse('[0,["#fe4365","#fc9d9a","#f9cdad","#c8c8a9","#83af9b"]]')}}]);