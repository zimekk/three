(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[93],{8093:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var n=r(2784),a=r(2955),c=r(3361),o=r(7539),i=r(248),s=r(9557),l=r(7345),u=r(8790);const f=l[0];function m(e,t){(0,n.useEffect)((()=>{const r=({key:r})=>-1!==e.indexOf(r)&&t(!0),n=({key:r})=>-1!==e.indexOf(r)&&t(!1);return window.addEventListener("keydown",r),window.addEventListener("keyup",n),()=>{window.removeEventListener("keydown",r),window.removeEventListener("keyup",n)}}),[])}function d({position:e=[0,-1,0],...t}){const[r]=(0,i.xK)((()=>({material:{friction:.5},rotation:[-Math.PI/2,0,0],position:e,...t})));return n.createElement("mesh",{ref:r,receiveShadow:!0},n.createElement("planeBufferGeometry",{attach:"geometry",args:[10,10]}),n.createElement("meshLambertMaterial",{attach:"material",color:f[1]}))}function w({position:e=[0,5,0],...t}){const{camera:r}=(0,c.Ky)(),o=function(){const e=(0,n.useRef)({forward:!1,backward:!1,left:!1,right:!1,brake:!1,reset:!1});return m(["ArrowUp","w"],(t=>e.current.forward=t)),m(["ArrowDown","s"],(t=>e.current.backward=t)),m(["ArrowLeft","a"],(t=>e.current.left=t)),m(["ArrowRight","d"],(t=>e.current.right=t)),m([" ","Shift"],(t=>e.current.brake=t)),m(["r"],(t=>e.current.reset=t)),e}(),[l,u]=(0,n.useState)(!1),[{pos:d},w]=(0,s.q_)((()=>({pos:[0,0,0],config:s.vc.molasses}))),[p,h]=(0,i.EJ)((()=>({mass:1,material:{friction:.002},rotation:[.4,.2,.5],position:e,...t})));return(0,c.xQ)((({clock:{elapsedTime:e}})=>{(o.current.forward||o.current.backward||o.current.left||o.current.right||o.current.brake)&&h.applyForce([o.current.left?-5:o.current.right?5:0,o.current.brake?15:0,o.current.forward?-5:o.current.backward?5:0],[0,0,0]),w.start({pos:(({x:e,y:t,z:r})=>[e,t,r])(p.current.position)}),r.lookAt((([e,t,r])=>new a.Vector3(e,t,r))(d.get()))})),n.createElement("mesh",{ref:p,receiveShadow:!0,castShadow:!0,onClick:e=>(e.stopPropagation(),u(!l))},n.createElement("boxBufferGeometry",{attach:"geometry"}),n.createElement("meshLambertMaterial",{attach:"material",color:l?f[3]:f[4]}))}function p(){return n.createElement("section",{className:u.Z.Demo},n.createElement(c.Xz,{gl:{alpha:!1},camera:{position:[-1,2,5],fov:50}},n.createElement(o.z,null),n.createElement("hemisphereLight",{intensity:.35}),n.createElement("spotLight",{position:[10,10,10],angle:.3,penumbra:1,intensity:2,castShadow:!0}),n.createElement(i.wI,null,n.createElement(d,null),n.createElement(w,null))))}},7345:e=>{"use strict";e.exports=JSON.parse('[["#69d2e7","#a7dbd8","#e0e4cc","#f38630","#fa6900"],["#fe4365","#fc9d9a","#f9cdad","#c8c8a9","#83af9b"]]')}}]);