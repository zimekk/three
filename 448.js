(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[448],{448:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var n=a(784),r=a(181),l=a(442),o=a(248),c=a(981),m=a(790);function i(e){const[t]=(0,o.xK)((()=>({rotation:[-Math.PI/2,0,0],...e})));return n.createElement("mesh",{ref:t,receiveShadow:!0},n.createElement("planeBufferGeometry",{attach:"geometry",args:[1009,1e3]}),n.createElement("shadowMaterial",{attach:"material",color:"#171717"}))}function s({position:e=[0,5,0],...t}){const{gl:a,camera:l}=(0,r.Ky)(),[m]=(0,o.EJ)((()=>({mass:1,rotation:[.4,.2,.5],position:e,...t})));return n.createElement(c.a.mesh,{receiveShadow:!0,castShadow:!0,ref:m},n.createElement("boxBufferGeometry",{attach:"geometry"}),n.createElement("meshLambertMaterial",{attach:"material",color:"hotpink"}))}function u(){const[e,t]=(0,n.useState)({x:0,y:0,z:0});return(0,n.useEffect)((()=>{let e,t=Date.now(),a=0;return function n(){let r=(Date.now()-t)/1e3;t=Date.now(),a=1/r,e=requestAnimationFrame(n)}(),()=>cancelAnimationFrame(e)}),[]),n.createElement("section",{className:m.Z.Demo},n.createElement("div",{className:m.Z.Range},n.createElement("input",{type:"range",min:"-10",max:"10",value:e.x,onChange:e=>t((t=>({...t,x:e.target.value})))})," ",n.createElement("input",{type:"range",min:"-10",max:"10",value:e.y,onChange:e=>t((t=>({...t,y:e.target.value})))})," ",n.createElement("input",{type:"range",min:"-10",max:"10",value:e.z,onChange:e=>t((t=>({...t,z:e.target.value})))})," ",JSON.stringify(e)),n.createElement(r.Xz,{shadowMap:!0,gl:{alpha:!1},camera:{position:[-1,2,5],fov:50}},n.createElement(l.z,null),n.createElement("color",{attach:"background",args:["lightblue"]}),n.createElement("hemisphereLight",{intensity:.35}),n.createElement("spotLight",{position:[10,10,10],angle:.3,penumbra:1,intensity:2,castShadow:!0}),n.createElement(o.wI,null,n.createElement(i,null),n.createElement(s,{position:Object.values(e)}))))}}}]);