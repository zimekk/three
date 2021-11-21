"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[981],{8185:(e,t,r)=>{r.d(t,{q:()=>c});var a=r(2784),n=r(3747),o=r(2955);class s extends o.DataTextureLoader{constructor(e){super(e),this.type=o.UnsignedByteType}parse(e){const t=function(e,t){switch(e){case 1:console.error("THREE.RGBELoader Read Error: "+(t||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(t||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(t||""));break;default:console.error("THREE.RGBELoader: Error: "+(t||""))}return-1},r=function(e,t,r){t=t||1024;let a=e.pos,n=-1,o=0,s="",i=String.fromCharCode.apply(null,new Uint16Array(e.subarray(a,a+128)));for(;0>(n=i.indexOf("\n"))&&o<t&&a<e.byteLength;)s+=i,o+=i.length,a+=128,i+=String.fromCharCode.apply(null,new Uint16Array(e.subarray(a,a+128)));return-1<n&&(!1!==r&&(e.pos+=o+n+1),s+i.slice(0,n))},a=function(e,t,r,a){const n=e[t+3],o=Math.pow(2,n-128)/255;r[a+0]=e[t+0]*o,r[a+1]=e[t+1]*o,r[a+2]=e[t+2]*o},n=function(e,t,r,a){const n=e[t+3],s=Math.pow(2,n-128)/255;r[a+0]=o.DataUtils.toHalfFloat(e[t+0]*s),r[a+1]=o.DataUtils.toHalfFloat(e[t+1]*s),r[a+2]=o.DataUtils.toHalfFloat(e[t+2]*s)},s=new Uint8Array(e);s.pos=0;const i=function(e){const a=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,n=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,o=/^\s*FORMAT=(\S+)\s*$/,s=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,i={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let l,c;if(e.pos>=e.byteLength||!(l=r(e)))return t(1,"no header found");if(!(c=l.match(/^#\?(\S+)/)))return t(3,"bad initial token");for(i.valid|=1,i.programtype=c[1],i.string+=l+"\n";l=r(e),!1!==l;)if(i.string+=l+"\n","#"!==l.charAt(0)){if((c=l.match(a))&&(i.gamma=parseFloat(c[1],10)),(c=l.match(n))&&(i.exposure=parseFloat(c[1],10)),(c=l.match(o))&&(i.valid|=2,i.format=c[1]),(c=l.match(s))&&(i.valid|=4,i.height=parseInt(c[1],10),i.width=parseInt(c[2],10)),2&i.valid&&4&i.valid)break}else i.comments+=l+"\n";return 2&i.valid?4&i.valid?i:t(3,"missing image size specifier"):t(3,"missing format specifier")}(s);if(-1!==i){const e=i.width,r=i.height,l=function(e,r,a){const n=r;if(n<8||n>32767||2!==e[0]||2!==e[1]||128&e[2])return new Uint8Array(e);if(n!==(e[2]<<8|e[3]))return t(3,"wrong scanline width");const o=new Uint8Array(4*r*a);if(!o.length)return t(4,"unable to allocate buffer space");let s=0,i=0;const l=4*n,c=new Uint8Array(4),m=new Uint8Array(l);let d=a;for(;d>0&&i<e.byteLength;){if(i+4>e.byteLength)return t(1);if(c[0]=e[i++],c[1]=e[i++],c[2]=e[i++],c[3]=e[i++],2!=c[0]||2!=c[1]||(c[2]<<8|c[3])!=n)return t(3,"bad rgbe scanline format");let r,a=0;for(;a<l&&i<e.byteLength;){r=e[i++];const n=r>128;if(n&&(r-=128),0===r||a+r>l)return t(3,"bad scanline data");if(n){const t=e[i++];for(let e=0;e<r;e++)m[a++]=t}else m.set(e.subarray(i,i+r),a),a+=r,i+=r}const h=n;for(let e=0;e<h;e++){let t=0;o[s]=m[e+t],t+=n,o[s+1]=m[e+t],t+=n,o[s+2]=m[e+t],t+=n,o[s+3]=m[e+t],s+=4}d--}return o}(s.subarray(s.pos),e,r);if(-1!==l){let t,s,c,m;switch(this.type){case o.UnsignedByteType:t=l,s=o.RGBEFormat,c=o.UnsignedByteType;break;case o.FloatType:m=l.length/4*3;const e=new Float32Array(m);for(let t=0;t<m;t++)a(l,4*t,e,3*t);t=e,s=o.RGBFormat,c=o.FloatType;break;case o.HalfFloatType:m=l.length/4*3;const r=new Uint16Array(m);for(let e=0;e<m;e++)n(l,4*e,r,3*e);t=r,s=o.RGBFormat,c=o.HalfFloatType;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type)}return{width:e,height:r,data:t,header:i.string,gamma:i.gamma,exposure:i.exposure,format:s,type:c}}}return null}setDataType(e){return this.type=e,this}load(e,t,r,a){return super.load(e,(function(e,r){switch(e.type){case o.UnsignedByteType:e.encoding=o.RGBEEncoding,e.minFilter=o.NearestFilter,e.magFilter=o.NearestFilter,e.generateMipmaps=!1,e.flipY=!0;break;case o.FloatType:case o.HalfFloatType:e.encoding=o.LinearEncoding,e.minFilter=o.LinearFilter,e.magFilter=o.LinearFilter,e.generateMipmaps=!1,e.flipY=!0}t&&t(e,r)}),r,a)}}var i=r(357);const l={sunset:"venice_sunset_1k.hdr",dawn:"kiara_1_dawn_1k.hdr",night:"dikhololo_night_1k.hdr",warehouse:"empty_warehouse_01_1k.hdr",forest:"forest_slope_1k.hdr",apartment:"lebombo_1k.hdr",studio:"studio_small_03_1k.hdr",city:"potsdamer_platz_1k.hdr",park:"rooitou_park_1k.hdr",lobby:"st_fagans_interior_1k.hdr"};function c({background:e=!1,files:t=["/px.png","/nx.png","/py.png","/ny.png","/pz.png","/nz.png"],path:r="",preset:c,scene:m,extensions:d}){if(c){if(!(c in l))throw new Error("Preset must be one of: "+Object.keys(l).join(", "));t=l[c],r="https://rawcdn.githack.com/pmndrs/drei-assets/aa3600359ba664d546d05821bcbca42013587df2/hdri/"}const h=(0,n.Ky)((({scene:e})=>e)),u=(0,n.Ky)((({gl:e})=>e)),g=Array.isArray(t),p=g?o.CubeTextureLoader:s,f=(0,n.U2)(p,g?[t]:t,(e=>{e.setPath(r),d&&d(e)})),y=g?f[0]:f,E=(0,i.G)((()=>new Promise((e=>{const t=new o.PMREMGenerator(u),r=function(e,t,r){return r?(t.compileEquirectangularShader(),t.fromCubemap(e).texture):t.fromEquirectangular(e).texture}(y,t,g);t.dispose(),e(r)}))),y);return a.useLayoutEffect((()=>{const t=m?m.background:h.background,r=m?m.environment:h.environment;return m?(m.environment=E,e&&(m.background=E)):(h.environment=E,e&&(h.background=E)),()=>{m?(m.environment=r,m.background=t):(h.environment=r,h.background=t),i.G.clear(y),E.dispose()}}),[E,e,m]),null}},1981:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var a=r(2784),n=r(3747),o=r(248),s=r(8185),i=r(7539),l=r(6727);l.L.preload(r(8154).Z);const c=(0,a.forwardRef)((({args:e=[1.7,1,4],mass:t=500,...n},s)=>{const{nodes:i,materials:c}=(0,l.L)(r(8154).Z),[,m]=(0,o.EJ)((()=>({mass:t,args:e,allowSleep:!1,onCollide:e=>console.log("bonk",e.body.userData),...n})),s);return a.createElement("mesh",{ref:s,api:m},a.createElement("group",{position:[0,-.6,0]},a.createElement("mesh",{castShadow:!0,material:c["Black paint"],geometry:i.chassis_1.geometry}),a.createElement("mesh",{castShadow:!0,material:c.Rubber,geometry:i.chassis_2.geometry}),a.createElement("mesh",{castShadow:!0,material:c.Paint,geometry:i.chassis_3.geometry}),a.createElement("mesh",{castShadow:!0,material:c.Underbody,geometry:i.chassis_4.geometry}),a.createElement("mesh",{castShadow:!0,material:c.Chrom,geometry:i.chassis_5.geometry}),a.createElement("mesh",{castShadow:!0,material:c["Interior (dark)"],geometry:i.chassis_6.geometry}),a.createElement("mesh",{castShadow:!0,material:c["Interior (light)"],geometry:i.chassis_7.geometry}),a.createElement("mesh",{castShadow:!0,material:c.Reflector,geometry:i.chassis_8.geometry}),a.createElement("mesh",{material:c.Glass,geometry:i.chassis_9.geometry,"material-transparent":!1,"material-color":"black"}),a.createElement("mesh",{castShadow:!0,material:c.Steel,geometry:i.chassis_10.geometry}),a.createElement("mesh",{castShadow:!0,material:c["Black plastic"],geometry:i.chassis_11.geometry}),a.createElement("mesh",{material:c.Headlight,geometry:i.chassis_12.geometry}),a.createElement("mesh",{castShadow:!0,material:c["Reverse lights"],geometry:i.chassis_13.geometry}),a.createElement("mesh",{castShadow:!0,material:c["Orange plastic"],geometry:i.chassis_14.geometry}),a.createElement("mesh",{castShadow:!0,material:c["Tail lights"],geometry:i.chassis_15.geometry}),a.createElement("mesh",{castShadow:!0,material:c["License Plate"],geometry:i.chassis_16.geometry})))}));l.L.preload(r(5461).Z);const m=(0,a.forwardRef)((({radius:e=.7,leftSide:t,...n},s)=>{const{nodes:i,materials:c}=(0,l.L)(r(5461).Z);return(0,o.Yz)((()=>({mass:1,type:"Kinematic",material:"wheel",collisionFilterGroup:0,args:[e,e,.5,16],...n})),s),a.createElement("mesh",{ref:s},a.createElement("mesh",{rotation:[0,0,(t?1:-1)*Math.PI/2]},a.createElement("mesh",{material:c.Rubber,geometry:i.wheel_1.geometry}),a.createElement("mesh",{material:c.Steel,geometry:i.wheel_2.geometry}),a.createElement("mesh",{material:c.Chrom,geometry:i.wheel_3.geometry})))})),d=function({radius:e=.7,width:t=1.2,height:r=-.04,front:s=1.3,back:i=-1.15,steer:l=.5,force:d=1500,maxBrake:u=50,...g}){const p=(0,a.useRef)(),f=(0,a.useRef)(),y=(0,a.useRef)(),E=(0,a.useRef)(),w=(0,a.useRef)(),b=function(){const e=(0,a.useRef)({forward:!1,backward:!1,left:!1,right:!1,brake:!1,reset:!1});return h(["ArrowUp","w"],(t=>e.current.forward=t)),h(["ArrowDown","s"],(t=>e.current.backward=t)),h(["ArrowLeft","a"],(t=>e.current.left=t)),h(["ArrowRight","d"],(t=>e.current.right=t)),h([" "],(t=>e.current.brake=t)),h(["r"],(t=>e.current.reset=t)),e}(),k={radius:e,directionLocal:[0,-1,0],suspensionStiffness:30,suspensionRestLength:.3,maxSuspensionForce:1e4,maxSuspensionTravel:.3,dampingRelaxation:10,dampingCompression:4.4,axleLocal:[-1,0,0],directionLocal:[0,-1,0],chassisConnectionPointLocal:[1,0,1],useCustomSlidingRotationalSpeed:!0,customSlidingRotationalSpeed:-30,frictionSlip:2},_={...k,isFrontWheel:!0,chassisConnectionPointLocal:[-t/2,r,s]},S={...k,isFrontWheel:!0,chassisConnectionPointLocal:[t/2,r,s]},R={...k,isFrontWheel:!1,chassisConnectionPointLocal:[-t/2,r,i]},L={...k,isFrontWheel:!1,chassisConnectionPointLocal:[t/2,r,i]},[v,F]=(0,o.b6)((()=>({chassisBody:p,wheels:[f,y,E,w],wheelInfos:[_,S,R,L],indexForwardAxis:2,indexRightAxis:0,indexUpAxis:1})));return(0,a.useEffect)((()=>{p.current.api.velocity.subscribe((e=>null)),F.sliding.subscribe((e=>console.log("sliding",e)))}),[]),(0,n.xQ)((()=>{const{forward:e,backward:t,left:r,right:a,brake:n,reset:o}=b.current;for(let r=2;r<4;r++)F.applyEngineForce(e||t?d*(e&&!t?-1:1):0,2);for(let e=0;e<2;e++)F.setSteeringValue(r||a?l*(r&&!a?1:-1):0,e);for(let e=2;e<4;e++)F.setBrake(n?u:0,e);o&&(p.current.api.position.set(0,.5,0),p.current.api.velocity.set(0,0,0),p.current.api.angularVelocity.set(0,.5,0),p.current.api.rotation.set(0,-Math.PI/4,0))})),a.createElement("group",{ref:v,position:[0,-.4,0]},a.createElement(c,{ref:p,rotation:g.rotation,position:g.position,angularVelocity:g.angularVelocity}),a.createElement(m,{ref:f,radius:e,leftSide:!0}),a.createElement(m,{ref:y,radius:e}),a.createElement(m,{ref:E,radius:e,leftSide:!0}),a.createElement(m,{ref:w,radius:e}))};function h(e,t){(0,a.useEffect)((()=>{const r=({key:r})=>-1!==e.indexOf(r)&&t(!0),a=({key:r})=>-1!==e.indexOf(r)&&t(!1);return window.addEventListener("keydown",r),window.addEventListener("keyup",a),()=>{window.removeEventListener("keydown",r),window.removeEventListener("keyup",a)}}),[])}var u=r(8790);function g(e){const[t]=(0,o.xK)((()=>({type:"Static",material:"ground",...e})));return a.createElement("group",{ref:t},a.createElement("mesh",{receiveShadow:!0},a.createElement("planeGeometry",{args:[100,100]}),a.createElement("meshStandardMaterial",{color:"#303030"})))}function p(e){const t=[.7,.7,5,16],[r]=(0,o.Yz)((()=>({mass:10,args:t,...e})));return a.createElement("mesh",{ref:r,castShadow:!0},a.createElement("cylinderBufferGeometry",{args:t}),a.createElement("meshNormalMaterial",null))}const f=()=>a.createElement("section",{className:u.Z.Demo},a.createElement(n.Xz,{shadows:!0,camera:{position:[0,5,15],fov:50}},a.createElement("fog",{attach:"fog",args:["#171720",10,50]}),a.createElement("color",{attach:"background",args:["#171720"]}),a.createElement("ambientLight",{intensity:.1}),a.createElement("spotLight",{position:[10,10,10],angle:.5,intensity:1,castShadow:!0,penumbra:1}),a.createElement(o.wI,{broadphase:"SAP",contactEquationRelaxation:4,friction:.001,allowSleep:!0},a.createElement(g,{rotation:[-Math.PI/2,0,0],userData:{id:"floor"}}),a.createElement(d,{position:[0,2,0],rotation:[0,-Math.PI/4,0],angularVelocity:[0,.5,0],wheelRadius:.3}),a.createElement(p,{position:[-5,2.5,-5],userData:{id:"pillar-1"}}),a.createElement(p,{position:[0,2.5,-5],userData:{id:"pillar-2"}}),a.createElement(p,{position:[5,2.5,-5],userData:{id:"pillar-3"}})),a.createElement(a.Suspense,{fallback:null},a.createElement(s.q,{preset:"night"})),a.createElement(i.z,null)),a.createElement("div",{style:{position:"absolute",top:20,left:50,color:"white",fontSize:"1.2em"}},a.createElement("pre",null,"* WASD to drive, space to brake",a.createElement("br",null),"r to reset")))},8154:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"45cbce2b57a70e71e96bca9312261aea.glb"},5461:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"d7a0342f226ae8907164bdc41f944e53.glb"}}]);