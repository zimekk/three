(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[448],{476:(e,t,a)=>{"use strict";a.d(t,{a:()=>p});var n=a(194),r=a(308),c=a(799),i=a(997),o=a(955);let l=e=>e(),s=()=>performance.now();function m(e,t){const a=e.findIndex(t);return a<0?e.length:a}const h=["primitive"].concat(Object.keys(o).filter((e=>/^[A-Z]/.test(e))).map((e=>e[0].toLowerCase()+e.slice(1)))),u=new class{constructor(e){let t=!0,a=!1,n=0,r=[],i=[],o=0;const h=new Set,u=new Set,p=new Set,d=e=>r.indexOf(e)<0&&r.splice(m(r,(t=>t.priority>e.priority)),0,e),f=()=>{if(!t){e(f);try{y()}catch(e){console.error(e)}}},g=()=>{t&&(t=!1,0==n&&(n=s(),e(f)))},E=[];this.setTimeout=(e,t)=>{const a=s()+t,n=()=>{const e=E.findIndex((e=>e.cancel==n));e>=0&&E.splice(e,1)},r=m(E,(e=>e.time>a)),c={time:a,handler:e,cancel:n};return E.splice(r,0,c),g(),c};const y=this.advance=()=>{const e=s();if(h.size&&(h.forEach(d),h.clear()),E.length&&l((()=>{const t=m(E,(t=>t.time>e));E.splice(0,t).forEach((e=>e.handler()))})),e>n){const t=Math.min(64,e-n);n=e,l((()=>{if(r.length){const e=i;for(let a=0;a<r.length;a++){const n=r[a];o=n.priority,n.idle||(c.OH.willAdvance(n),n.advance(t),n.idle||e.push(n))}o=0,i=r,i.length=0,r=e}(0,c.bl)(u,e),p.size&&(a=!0,(0,c.bl)(p,e),a=!1)}))}};this.start=e=>{o>e.priority?h.add(e):(d(e),g())},this.onFrame=e=>{u.add(e),g()},this.onWrite=e=>{a?e(n):p.add(e)}}}((()=>(0,n.z6)()));(0,n.gy)((()=>(u.advance(),!0))),r.OH.assign({createStringInterpolator:c.qS,colors:c.O9,frameLoop:u});const p=(0,i.Ld)(h,{applyAnimatedValues:n.nH}).animated},448:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>h});var n=a(784),r=a(194),c=a(539),i=a(248),o=a(476),l=a(790);function s(e){const[t]=(0,i.xK)((()=>({rotation:[-Math.PI/2,0,0],...e})));return n.createElement("mesh",{ref:t,receiveShadow:!0},n.createElement("planeBufferGeometry",{attach:"geometry",args:[1009,1e3]}),n.createElement("shadowMaterial",{attach:"material",color:"#171717"}))}function m({position:e=[0,5,0],...t}){const{gl:a,camera:c}=(0,r.Ky)(),[l]=(0,i.EJ)((()=>({mass:1,rotation:[.4,.2,.5],position:e,...t})));return n.createElement(o.a.mesh,{receiveShadow:!0,castShadow:!0,ref:l},n.createElement("boxBufferGeometry",{attach:"geometry"}),n.createElement("meshLambertMaterial",{attach:"material",color:"hotpink"}))}function h(){const[e,t]=(0,n.useState)({x:0,y:0,z:0});return(0,n.useEffect)((()=>{let e,t=Date.now(),a=0;return function n(){let r=(Date.now()-t)/1e3;t=Date.now(),a=1/r,e=requestAnimationFrame(n)}(),()=>cancelAnimationFrame(e)}),[]),n.createElement("section",{className:l.Z.Demo},n.createElement("div",{className:l.Z.Range},n.createElement("input",{type:"range",min:"-10",max:"10",value:e.x,onChange:e=>t((t=>({...t,x:e.target.value})))})," ",n.createElement("input",{type:"range",min:"-10",max:"10",value:e.y,onChange:e=>t((t=>({...t,y:e.target.value})))})," ",n.createElement("input",{type:"range",min:"-10",max:"10",value:e.z,onChange:e=>t((t=>({...t,z:e.target.value})))})," ",JSON.stringify(e)),n.createElement(r.Xz,{shadowMap:!0,gl:{alpha:!1},camera:{position:[-1,2,5],fov:50}},n.createElement(c.z,null),n.createElement("color",{attach:"background",args:["lightblue"]}),n.createElement("hemisphereLight",{intensity:.35}),n.createElement("spotLight",{position:[10,10,10],angle:.3,penumbra:1,intensity:2,castShadow:!0}),n.createElement(i.wI,null,n.createElement(s,null),n.createElement(m,{position:Object.values(e)}))))}}}]);