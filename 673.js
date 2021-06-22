(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[673],{2800:(e,t,n)=>{"use strict";n.d(t,{q:()=>l});var a=n(7560),r=n(2784),o=n(1119),i=n(2955);class c extends i.Mesh{constructor(){super(new i.BoxGeometry(1,1,1),c.material)}}function s(e,t,n=new i.Vector3){const a=Math.PI*(e-.5),r=2*Math.PI*(t-.5);return n.x=Math.cos(r),n.y=Math.sin(a),n.z=Math.sin(r),n}(0,o.Z)(c,"SkyShader",{uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new i.Vector3},up:{value:new i.Vector3(0,1,0)}},vertexShader:["uniform vec3 sunPosition;","uniform float rayleigh;","uniform float turbidity;","uniform float mieCoefficient;","uniform vec3 up;","varying vec3 vWorldPosition;","varying vec3 vSunDirection;","varying float vSunfade;","varying vec3 vBetaR;","varying vec3 vBetaM;","varying float vSunE;","const float e = 2.71828182845904523536028747135266249775724709369995957;","const float pi = 3.141592653589793238462643383279502884197169;","const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );","const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );","const float v = 4.0;","const vec3 K = vec3( 0.686, 0.678, 0.666 );","const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );","const float cutoffAngle = 1.6110731556870734;","const float steepness = 1.5;","const float EE = 1000.0;","float sunIntensity( float zenithAngleCos ) {","\tzenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );","\treturn EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );","}","vec3 totalMie( float T ) {","\tfloat c = ( 0.2 * T ) * 10E-18;","\treturn 0.434 * c * MieConst;","}","void main() {","\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );","\tvWorldPosition = worldPosition.xyz;","\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","\tgl_Position.z = gl_Position.w;","\tvSunDirection = normalize( sunPosition );","\tvSunE = sunIntensity( dot( vSunDirection, up ) );","\tvSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );","\tfloat rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );","\tvBetaR = totalRayleigh * rayleighCoefficient;","\tvBetaM = totalMie( turbidity ) * mieCoefficient;","}"].join("\n"),fragmentShader:["varying vec3 vWorldPosition;","varying vec3 vSunDirection;","varying float vSunfade;","varying vec3 vBetaR;","varying vec3 vBetaM;","varying float vSunE;","uniform float mieDirectionalG;","uniform vec3 up;","const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );","const float pi = 3.141592653589793238462643383279502884197169;","const float n = 1.0003;","const float N = 2.545E25;","const float rayleighZenithLength = 8.4E3;","const float mieZenithLength = 1.25E3;","const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;","const float THREE_OVER_SIXTEENPI = 0.05968310365946075;","const float ONE_OVER_FOURPI = 0.07957747154594767;","float rayleighPhase( float cosTheta ) {","\treturn THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );","}","float hgPhase( float cosTheta, float g ) {","\tfloat g2 = pow( g, 2.0 );","\tfloat inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );","\treturn ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );","}","void main() {","\tvec3 direction = normalize( vWorldPosition - cameraPos );","\tfloat zenithAngle = acos( max( 0.0, dot( up, direction ) ) );","\tfloat inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );","\tfloat sR = rayleighZenithLength * inverse;","\tfloat sM = mieZenithLength * inverse;","\tvec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );","\tfloat cosTheta = dot( direction, vSunDirection );","\tfloat rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );","\tvec3 betaRTheta = vBetaR * rPhase;","\tfloat mPhase = hgPhase( cosTheta, mieDirectionalG );","\tvec3 betaMTheta = vBetaM * mPhase;","\tvec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );","\tLin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );","\tfloat theta = acos( direction.y ); // elevation --\x3e y-axis, [-pi/2, pi/2]","\tfloat phi = atan( direction.z, direction.x ); // azimuth --\x3e x-axis [-pi/2, pi/2]","\tvec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );","\tvec3 L0 = vec3( 0.1 ) * Fex;","\tfloat sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );","\tL0 += ( vSunE * 19000.0 * Fex ) * sundisk;","\tvec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );","\tvec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );","\tgl_FragColor = vec4( retColor, 1.0 );","#include <tonemapping_fragment>","#include <encodings_fragment>","}"].join("\n")}),(0,o.Z)(c,"material",new i.ShaderMaterial({name:"SkyShader",fragmentShader:c.SkyShader.fragmentShader,vertexShader:c.SkyShader.vertexShader,uniforms:i.UniformsUtils.clone(c.SkyShader.uniforms),side:i.BackSide,depthWrite:!1}));const l=r.forwardRef((({inclination:e=0,azimuth:t=.25,distance:n=100,mieCoefficient:o=.005,mieDirectionalG:l=.8,rayleigh:u=1,turbidity:m=2,sunPosition:d=s(e,t),...f},v)=>{const h=r.useMemo((()=>(new i.Vector3).setScalar(n)),[n]),[p]=r.useState((()=>new c));return r.createElement("primitive",(0,a.Z)({dispose:void 0,object:p,ref:v,"material-uniforms-mieCoefficient-value":o,"material-uniforms-mieDirectionalG-value":l,"material-uniforms-rayleigh-value":u,"material-uniforms-sunPosition-value":d,"material-uniforms-turbidity-value":m,scale:h},f))}))},6506:(e,t,n)=>{"use strict";n.d(t,{t:()=>s});var a=n(2784),r=n(3361),o=n(2955);class i extends o.ShaderMaterial{constructor(){super({uniforms:{time:{value:0},fade:{value:1}},vertexShader:"\n      uniform float time;\n      attribute float size;\n      varying vec3 vColor;\n      void main() {\n        vColor = color;\n        vec4 mvPosition = modelViewMatrix * vec4(position, 0.5);\n        gl_PointSize = size * (30.0 / -mvPosition.z) * (3.0 + sin(mvPosition.x + 2.0 * time + 100.0));\n        gl_Position = projectionMatrix * mvPosition;\n      }",fragmentShader:"\n      uniform sampler2D pointTexture;\n      uniform float fade;\n      varying vec3 vColor;\n      void main() {\n        float opacity = 1.0;\n        if (fade == 1.0) {\n          float d = distance(gl_PointCoord, vec2(0.5, 0.5));\n          opacity = 1.0 / (1.0 + exp(16.0 * (d - 0.25)));\n        }\n        gl_FragColor = vec4(vColor, opacity);\n      }"})}}const c=e=>(new o.Vector3).setFromSpherical(new o.Spherical(e,Math.acos(1-2*Math.random()),2*Math.random()*Math.PI)),s=a.forwardRef((({radius:e=100,depth:t=50,count:n=5e3,saturation:s=0,factor:l=4,fade:u=!1},m)=>{const d=a.useRef(),[f,v,h]=a.useMemo((()=>{const a=[],r=[],i=Array.from({length:n},(()=>(.5+.5*Math.random())*l)),u=new o.Color;let m=e+t;const d=t/n;for(let e=0;e<n;e++)m-=d*Math.random(),a.push(...c(m).toArray()),u.setHSL(e/n,s,.9),r.push(u.r,u.g,u.b);return[new Float32Array(a),new Float32Array(r),new Float32Array(i)]}),[n,t,l,e,s]);(0,r.xQ)((e=>d.current&&(d.current.uniforms.time.value=e.clock.getElapsedTime())));const[p]=a.useState((()=>new i));return a.createElement("points",{ref:m},a.createElement("bufferGeometry",{attach:"geometry"},a.createElement("bufferAttribute",{attachObject:["attributes","position"],args:[f,3]}),a.createElement("bufferAttribute",{attachObject:["attributes","color"],args:[v,3]}),a.createElement("bufferAttribute",{attachObject:["attributes","size"],args:[h,1]})),a.createElement("primitive",{dispose:void 0,ref:d,object:p,attach:"material",blending:o.AdditiveBlending,"uniforms-fade-value":u,transparent:!0,vertexColors:!0}))}))},5848:(e,t,n)=>{"use strict";n.d(t,{v:()=>i});var a=n(2784),r=n(2955),o=n(3361);function i(e,t){const n=a.useRef(),i=t||n,[c]=a.useState((()=>new r.AnimationMixer(void 0))),s=a.useRef({}),[l]=a.useState((()=>{let t={};return e.forEach((e=>Object.defineProperty(t,e.name,{enumerable:!0,get(){if(i.current)return s.current[e.name]||(s.current[e.name]=c.clipAction(e,i.current))}}))),{ref:i,clips:e,actions:t,names:e.map((e=>e.name)),mixer:c}}));return(0,o.xQ)(((e,t)=>c.update(t))),a.useEffect((()=>{const e=i.current;return()=>{s.current={},Object.values(l.actions).forEach((t=>{e&&c.uncacheAction(t,e)}))}}),[e]),l}},673:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>z});var a=n(2955),r=n(2784),o=n(9557),i=n(3361),c=n(6727),s=n(5848),l=n(2800),u=n(6506),m=n(7539),d=n(248),f=n(7345),v=n(1281),h=n(8790);const p=f[0];function g(e,t){return Math.random()*(t-e)+e}const E={KeyW:"forward",KeyS:"backward",KeyA:"left",KeyD:"right",ArrowUp:"forward",ArrowDown:"backward",ArrowLeft:"left",ArrowRight:"right",Space:"jump"},y=new a.Vector3,w=new a.Vector3,S=new a.Vector3;function b({...e}){const{camera:t}=(0,i.Ky)(),{axes:l,buttons:u}=(()=>{const[e,t]=(0,r.useState)(null),[n,a]=(0,r.useState)([...Array(4)].reduce(((e,t,n)=>Object.assign(e,{[n]:0})),{})),[o,c]=(0,r.useState)([...Array(16)].reduce(((e,t,n)=>Object.assign(e,{[n]:0})),{}));return(0,r.useEffect)((()=>{if("GamepadEvent"in window){const e=e=>{t(e.gamepad.index)},n=e=>{t(null)};return window.addEventListener("gamepadconnected",e),window.addEventListener("gamepaddisconnected",n),()=>{window.removeEventListener("gamepadconnected",e),window.removeEventListener("gamepaddisconnected",n)}}{const e=setInterval((()=>{const e=navigator.getGamepads();for(let t=0;t<e.length;t++)e[t]&&e[t].index in controllers.current&&(controllers.current[e[t].index]=e[t])}),500);return()=>{clearInterval(e)}}}),[]),(0,i.xQ)((()=>{if(null!==e){const t=navigator.getGamepads().item(e);a((e=>t.axes.map((e=>Math.abs(e)>.2?e:0)).reduce(((e,t,n)=>e[n]===t?e:{...e,[n]:t}),e))),c((e=>t.buttons.reduce(((e,t,n)=>e[n]===t.value?e:{...e,[n]:t.value}),e)))}})),{axes:n,buttons:o}})(),{forward:m,backward:f,left:v,right:h,jump:p}=(()=>{const[e,t]=(0,r.useState)({forward:!1,backward:!1,left:!1,right:!1,jump:!1});return(0,r.useEffect)((()=>{const e=e=>t((t=>({...t,[E[e.code]]:!0}))),n=e=>t((t=>({...t,[E[e.code]]:!1})));return document.addEventListener("keydown",e),document.addEventListener("keyup",n),()=>{document.removeEventListener("keydown",e),document.removeEventListener("keyup",n)}}),[]),e})(),[g,b]=(0,r.useState)("idle"),[x,M]=(0,d.Eo)((()=>({args:1,mass:1,position:[1.2,5,-1],...e}))),[{targetPosition:P,cameraPosition:A},C]=(0,o.q_)((()=>({targetPosition:[0,0,0],cameraPosition:[0,0,0],config:o.vc.molasses}))),{scene:R,animations:k}=(0,c.L)(n(396).Z),{ref:L,mixer:_,names:z,actions:T,clips:j}=(0,s.v)(k),D=(0,r.useRef)([0,0,0]);return(0,r.useEffect)((()=>{M.velocity.subscribe((e=>D.current=e))}),[]),(0,r.useEffect)((()=>{const e=e=>{b((e.action.getClip().name.includes("jump"),"idle"))};return _.addEventListener("finished",e),()=>{_.removeEventListener("finished",e)}}),[_]),(0,r.useEffect)((()=>{if(g){const e=1;return T[g]?.reset().fadeIn(e).setLoop(["run","idle"].includes(g)?a.LoopRepeat:a.LoopOnce).play(),()=>{T[g]?.fadeOut(e)}}}),[T,g]),(0,i.xQ)((e=>{e.clock.getElapsedTime(),t.lookAt(...P.get()),t.position.set(...A.get()),x.current.getWorldPosition(L.current.position),C.start({targetPosition:(({x:e,y:t,z:n},a=1)=>[e,t+a,n])(L.current?.position),cameraPosition:(({x:e,y:t,z:n},{y:a},r=-10,o=3)=>[e+Math.sin(a)*r,t+o,n+Math.cos(a)*r])(L.current?.position,L.current?.rotation)}),L.current.rotation.y+=(Number(v)-Number(h)-l[0])*Math.PI/30,w.set(0,0,Number(m)-Number(f)-l[1]),y.subVectors(w,S).normalize().multiplyScalar(5).applyEuler(L.current.rotation),M.velocity.set(y.x,D.current[1],y.z),p&&Math.abs(D.current[1].toFixed(2))<.05&&M.velocity.set(D.current[0],10,D.current[2]),m&&b("run"),f&&b("idle"),v&&b("stand_up_left"),h&&b("stand_up_right")})),r.createElement("group",null,r.createElement("mesh",{ref:x}),r.createElement("primitive",{ref:L,object:R}),";")}function x(e){const[t]=(0,d.xK)((()=>({rotation:[-Math.PI/2,0,0],...e}))),n=(0,i.U2)(a.TextureLoader,v.Z);return n.wrapS=n.wrapT=a.RepeatWrapping,n.repeat.set(240,240),r.createElement("mesh",{ref:t,receiveShadow:!0},r.createElement("planeGeometry",{args:[100,100]}),r.createElement("meshStandardMaterial",{map:n,color:"green"}))}function M(e){const[t]=(0,d.EJ)((()=>({...e})));return r.createElement("mesh",{ref:t,receiveShadow:!0},r.createElement("boxGeometry",{args:[10,.1,9]}),r.createElement("meshStandardMaterial",{color:2435369}))}function P({height:e,...t}){const[n]=(0,d.EJ)((()=>({...t})));return r.createElement("mesh",{ref:n,receiveShadow:!0},r.createElement("boxGeometry",{args:[.98,e,.98]}),r.createElement("meshStandardMaterial",{color:8553090}))}function A({height:e,...t}){const[n]=(0,d.EJ)((()=>({...t})));return r.createElement("mesh",{ref:n,receiveShadow:!0},r.createElement("boxGeometry",{args:[1.98,e,.18]}),r.createElement("meshStandardMaterial",{color:8553090}))}function C({...e}){return r.createElement("group",e,[...Array(10)].reduce(((e,t,n)=>e.concat([...Array(2)].map(((e,t)=>[n-4.5,t+1])))),[]).map((([e,t],n)=>r.createElement(P,{key:n,height:.2,position:[e,.1,t]}))),[...Array(5)].map(((e,t)=>[2*t-4,.4])).map((([e,t],n)=>r.createElement(A,{key:n,height:.2,position:[e,.1,t]}))))}function R({...e}){const t=g(4,8),[n]=(0,d.EJ)((()=>({...e})));return r.createElement("group",{position:[0,t/2,0]},r.createElement("mesh",{ref:n,receiveShadow:!0},r.createElement("boxGeometry",{args:[2.48,t,1.98]}),r.createElement("meshStandardMaterial",{color:p[Math.round(g(0,p.length-1))]})))}function k({...e}){return r.createElement("group",e,[...Array(4)].map(((e,t)=>[2.5*t-3.75,3.5])).map((([e,t],n)=>r.createElement(R,{key:n,position:[e,0,t]}))))}function L({...e}){return r.createElement("group",e,r.createElement("pointLight",{castShadow:!0,intensity:.3,position:[0,3,0]}),r.createElement("mesh",{position:[0,3,0]},r.createElement("sphereGeometry",{args:[.25]}),r.createElement("meshStandardMaterial",{color:16580049,metalness:.75,roughness:0,emissive:new a.Color(16775375),emissiveIntensity:1,transparent:!0,opacity:.95})),r.createElement("mesh",{position:[0,1.5,0]},r.createElement("cylinderGeometry",{args:[.05,.05,3,5]}),r.createElement("meshStandardMaterial",{color:4210752})))}function _({...e}){return r.createElement("group",e,[...Array(4)].map(((e,t)=>[2*t-3,.75])).map((([e,t],n)=>r.createElement(L,{key:n,position:[e,0,t]}))))}function z(){return r.createElement("section",{className:h.Z.Demo},r.createElement(i.Xz,{shadows:!0,gl:{alpha:!1},camera:{fov:35,position:[5,10,-15]}},r.createElement(l.q,null),r.createElement(u.t,{radius:100,depth:50,count:5e3,factor:4,saturation:0,fade:!0}),r.createElement("ambientLight",{intensity:.01}),r.createElement(d.wI,{gravity:[0,-30,0]},r.createElement(d.cG,{scale:1.1,color:"black"},r.createElement(r.Suspense,{fallback:"loading..."},r.createElement(x,null),r.createElement(M,null),r.createElement(C,null),r.createElement(k,null),r.createElement(_,null),r.createElement(b,null)))),r.createElement(m.z,null)))}},1281:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"eb5fc8ebf9c7a590fb3977d00d47e6ff.jpg"},396:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"9708dd1a24262f8bfe2dd7fd8e3b3914.glb"},7345:e=>{"use strict";e.exports=JSON.parse('[["#69d2e7","#a7dbd8","#e0e4cc","#f38630","#fa6900"],["#fe4365","#fc9d9a","#f9cdad","#c8c8a9","#83af9b"]]')}}]);