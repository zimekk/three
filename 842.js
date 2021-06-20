(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[842],{2800:(e,t,n)=>{"use strict";n.d(t,{q:()=>l});var r=n(7560),a=n(2784),o=n(1119),i=n(2955);class c extends i.Mesh{constructor(){super(new i.BoxGeometry(1,1,1),c.material)}}function s(e,t,n=new i.Vector3){const r=Math.PI*(e-.5),a=2*Math.PI*(t-.5);return n.x=Math.cos(a),n.y=Math.sin(r),n.z=Math.sin(a),n}(0,o.Z)(c,"SkyShader",{uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new i.Vector3},up:{value:new i.Vector3(0,1,0)}},vertexShader:["uniform vec3 sunPosition;","uniform float rayleigh;","uniform float turbidity;","uniform float mieCoefficient;","uniform vec3 up;","varying vec3 vWorldPosition;","varying vec3 vSunDirection;","varying float vSunfade;","varying vec3 vBetaR;","varying vec3 vBetaM;","varying float vSunE;","const float e = 2.71828182845904523536028747135266249775724709369995957;","const float pi = 3.141592653589793238462643383279502884197169;","const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );","const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );","const float v = 4.0;","const vec3 K = vec3( 0.686, 0.678, 0.666 );","const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );","const float cutoffAngle = 1.6110731556870734;","const float steepness = 1.5;","const float EE = 1000.0;","float sunIntensity( float zenithAngleCos ) {","\tzenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );","\treturn EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );","}","vec3 totalMie( float T ) {","\tfloat c = ( 0.2 * T ) * 10E-18;","\treturn 0.434 * c * MieConst;","}","void main() {","\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );","\tvWorldPosition = worldPosition.xyz;","\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","\tgl_Position.z = gl_Position.w;","\tvSunDirection = normalize( sunPosition );","\tvSunE = sunIntensity( dot( vSunDirection, up ) );","\tvSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );","\tfloat rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );","\tvBetaR = totalRayleigh * rayleighCoefficient;","\tvBetaM = totalMie( turbidity ) * mieCoefficient;","}"].join("\n"),fragmentShader:["varying vec3 vWorldPosition;","varying vec3 vSunDirection;","varying float vSunfade;","varying vec3 vBetaR;","varying vec3 vBetaM;","varying float vSunE;","uniform float mieDirectionalG;","uniform vec3 up;","const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );","const float pi = 3.141592653589793238462643383279502884197169;","const float n = 1.0003;","const float N = 2.545E25;","const float rayleighZenithLength = 8.4E3;","const float mieZenithLength = 1.25E3;","const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;","const float THREE_OVER_SIXTEENPI = 0.05968310365946075;","const float ONE_OVER_FOURPI = 0.07957747154594767;","float rayleighPhase( float cosTheta ) {","\treturn THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );","}","float hgPhase( float cosTheta, float g ) {","\tfloat g2 = pow( g, 2.0 );","\tfloat inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );","\treturn ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );","}","void main() {","\tvec3 direction = normalize( vWorldPosition - cameraPos );","\tfloat zenithAngle = acos( max( 0.0, dot( up, direction ) ) );","\tfloat inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );","\tfloat sR = rayleighZenithLength * inverse;","\tfloat sM = mieZenithLength * inverse;","\tvec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );","\tfloat cosTheta = dot( direction, vSunDirection );","\tfloat rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );","\tvec3 betaRTheta = vBetaR * rPhase;","\tfloat mPhase = hgPhase( cosTheta, mieDirectionalG );","\tvec3 betaMTheta = vBetaM * mPhase;","\tvec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );","\tLin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );","\tfloat theta = acos( direction.y ); // elevation --\x3e y-axis, [-pi/2, pi/2]","\tfloat phi = atan( direction.z, direction.x ); // azimuth --\x3e x-axis [-pi/2, pi/2]","\tvec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );","\tvec3 L0 = vec3( 0.1 ) * Fex;","\tfloat sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );","\tL0 += ( vSunE * 19000.0 * Fex ) * sundisk;","\tvec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );","\tvec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );","\tgl_FragColor = vec4( retColor, 1.0 );","#include <tonemapping_fragment>","#include <encodings_fragment>","}"].join("\n")}),(0,o.Z)(c,"material",new i.ShaderMaterial({name:"SkyShader",fragmentShader:c.SkyShader.fragmentShader,vertexShader:c.SkyShader.vertexShader,uniforms:i.UniformsUtils.clone(c.SkyShader.uniforms),side:i.BackSide,depthWrite:!1}));const l=a.forwardRef((({inclination:e=0,azimuth:t=.25,distance:n=100,mieCoefficient:o=.005,mieDirectionalG:l=.8,rayleigh:u=1,turbidity:m=2,sunPosition:d=s(e,t),...f},v)=>{const h=a.useMemo((()=>(new i.Vector3).setScalar(n)),[n]),[p]=a.useState((()=>new c));return a.createElement("primitive",(0,r.Z)({dispose:void 0,object:p,ref:v,"material-uniforms-mieCoefficient-value":o,"material-uniforms-mieDirectionalG-value":l,"material-uniforms-rayleigh-value":u,"material-uniforms-sunPosition-value":d,"material-uniforms-turbidity-value":m,scale:h},f))}))},5848:(e,t,n)=>{"use strict";n.d(t,{v:()=>i});var r=n(2784),a=n(2955),o=n(3361);function i(e,t){const n=r.useRef(),i=t||n,[c]=r.useState((()=>new a.AnimationMixer(void 0))),s=r.useRef({}),[l]=r.useState((()=>{let t={};return e.forEach((e=>Object.defineProperty(t,e.name,{enumerable:!0,get(){if(i.current)return s.current[e.name]||(s.current[e.name]=c.clipAction(e,i.current))}}))),{ref:i,clips:e,actions:t,names:e.map((e=>e.name)),mixer:c}}));return(0,o.xQ)(((e,t)=>c.update(t))),r.useEffect((()=>{const e=i.current;return()=>{s.current={},Object.values(l.actions).forEach((t=>{e&&c.uncacheAction(t,e)}))}}),[e]),l}},2842:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>O});var r=n(2955),a=n(2784),o=n(9557),i=n(3361);class c extends r.ShaderMaterial{constructor(){super({uniforms:{time:{value:0},fade:{value:1}},vertexShader:"\n      uniform float time;\n      attribute float size;\n      varying vec3 vColor;\n      void main() {\n        vColor = color;\n        vec4 mvPosition = modelViewMatrix * vec4(position, 0.5);\n        gl_PointSize = size * (30.0 / -mvPosition.z) * (3.0 + sin(mvPosition.x + 2.0 * time + 100.0));\n        gl_Position = projectionMatrix * mvPosition;\n      }",fragmentShader:"\n      uniform sampler2D pointTexture;\n      uniform float fade;\n      varying vec3 vColor;\n      void main() {\n        float opacity = 1.0;\n        if (fade == 1.0) {\n          float d = distance(gl_PointCoord, vec2(0.5, 0.5));\n          opacity = 1.0 / (1.0 + exp(16.0 * (d - 0.25)));\n        }\n        gl_FragColor = vec4(vColor, opacity);\n      }"})}}const s=e=>(new r.Vector3).setFromSpherical(new r.Spherical(e,Math.acos(1-2*Math.random()),2*Math.random()*Math.PI)),l=a.forwardRef((({radius:e=100,depth:t=50,count:n=5e3,saturation:o=0,factor:l=4,fade:u=!1},m)=>{const d=a.useRef(),[f,v,h]=a.useMemo((()=>{const a=[],i=[],c=Array.from({length:n},(()=>(.5+.5*Math.random())*l)),u=new r.Color;let m=e+t;const d=t/n;for(let e=0;e<n;e++)m-=d*Math.random(),a.push(...s(m).toArray()),u.setHSL(e/n,o,.9),i.push(u.r,u.g,u.b);return[new Float32Array(a),new Float32Array(i),new Float32Array(c)]}),[n,t,l,e,o]);(0,i.xQ)((e=>d.current&&(d.current.uniforms.time.value=e.clock.getElapsedTime())));const[p]=a.useState((()=>new c));return a.createElement("points",{ref:m},a.createElement("bufferGeometry",{attach:"geometry"},a.createElement("bufferAttribute",{attachObject:["attributes","position"],args:[f,3]}),a.createElement("bufferAttribute",{attachObject:["attributes","color"],args:[v,3]}),a.createElement("bufferAttribute",{attachObject:["attributes","size"],args:[h,1]})),a.createElement("primitive",{dispose:void 0,ref:d,object:p,attach:"material",blending:r.AdditiveBlending,"uniforms-fade-value":u,transparent:!0,vertexColors:!0}))}));var u=n(6727),m=n(5848),d=n(2800),f=n(7539),v=n(248),h=n(7345),p=n(1281),g=n(8790);const E=h[0];function y(e,t){return Math.random()*(t-e)+e}const w={KeyW:"forward",KeyS:"backward",KeyA:"left",KeyD:"right",ArrowUp:"forward",ArrowDown:"backward",ArrowLeft:"left",ArrowRight:"right",Space:"jump"},S=new r.Vector3,b=new r.Vector3,x=new r.Vector3;function M({...e}){const{camera:t}=(0,i.Ky)(),{axes:c,buttons:s}=(()=>{const[e,t]=(0,a.useState)(null),[n,r]=(0,a.useState)([...Array(4)].reduce(((e,t,n)=>Object.assign(e,{[n]:0})),{})),[o,c]=(0,a.useState)([...Array(16)].reduce(((e,t,n)=>Object.assign(e,{[n]:0})),{}));return(0,a.useEffect)((()=>{if("GamepadEvent"in window){const e=e=>{t(e.gamepad.index)},n=e=>{t(null)};return window.addEventListener("gamepadconnected",e),window.addEventListener("gamepaddisconnected",n),()=>{window.removeEventListener("gamepadconnected",e),window.removeEventListener("gamepaddisconnected",n)}}{const e=setInterval((()=>{const e=navigator.getGamepads();for(let t=0;t<e.length;t++)e[t]&&e[t].index in controllers.current&&(controllers.current[e[t].index]=e[t])}),500);return()=>{clearInterval(e)}}}),[]),(0,i.xQ)((()=>{if(null!==e){const t=navigator.getGamepads().item(e);r((e=>t.axes.map((e=>Math.abs(e)>.2?e:0)).reduce(((e,t,n)=>e[n]===t?e:{...e,[n]:t}),e))),c((e=>t.buttons.reduce(((e,t,n)=>e[n]===t.value?e:{...e,[n]:t.value}),e)))}})),{axes:n,buttons:o}})(),{forward:l,backward:d,left:f,right:h,jump:p}=(()=>{const[e,t]=(0,a.useState)({forward:!1,backward:!1,left:!1,right:!1,jump:!1});return(0,a.useEffect)((()=>{const e=e=>t((t=>({...t,[w[e.code]]:!0}))),n=e=>t((t=>({...t,[w[e.code]]:!1})));return document.addEventListener("keydown",e),document.addEventListener("keyup",n),()=>{document.removeEventListener("keydown",e),document.removeEventListener("keyup",n)}}),[]),e})(),[g,E]=(0,a.useState)("idle"),[y,M]=(0,v.Eo)((()=>({mass:1,position:[1.2,5,-1],...e}))),[{targetPosition:P,cameraPosition:A},C]=(0,o.q_)((()=>({targetPosition:[0,0,0],cameraPosition:[0,0,0],config:o.vc.molasses}))),{scene:k,animations:R}=(0,u.L)(n(396).Z),{ref:L,mixer:z,names:_,actions:T,clips:G}=(0,m.v)(R),I=(0,a.useRef)([0,0,0]);return(0,a.useEffect)((()=>{M.velocity.subscribe((e=>I.current=e))}),[]),(0,a.useEffect)((()=>{const e=e=>{E((e.action.getClip().name.includes("jump"),"idle"))};return z.addEventListener("finished",e),()=>{z.removeEventListener("finished",e)}}),[z]),(0,a.useEffect)((()=>{if(g){const e=1;return T[g]?.reset().fadeIn(e).setLoop(["run","idle"].includes(g)?r.LoopRepeat:r.LoopOnce).play(),()=>{T[g]?.fadeOut(e)}}}),[T,g]),(0,i.xQ)((e=>{e.clock.getElapsedTime(),t.lookAt(...P.get()),t.position.set(...A.get()),y.current&&C.start({targetPosition:(({x:e,y:t,z:n},r=1)=>[e,t+r,n])(y.current?.position),cameraPosition:(({x:e,y:t,z:n},{y:r},a=-10,o=3)=>[e+Math.sin(r)*a,t+o,n+Math.cos(r)*a])(y.current?.position,L.current?.rotation)}),L.current.position.copy(y.current.position),L.current.rotation.y+=(Number(f)-Number(h)-c[0])*Math.PI/30,b.set(0,0,Number(l)-Number(d)-c[1]),S.subVectors(b,x).normalize().multiplyScalar(5).applyEuler(L.current.rotation),M.velocity.set(S.x,I.current[1],S.z),p&&Math.abs(I.current[1].toFixed(2))<.05&&M.velocity.set(I.current[0],10,I.current[2]),l&&E("run"),d&&E("idle"),f&&E("stand_up_left"),h&&E("stand_up_right")})),a.createElement("group",null,a.createElement("mesh",{ref:y}),a.createElement("primitive",{ref:L,object:k}),";")}function P(e){const[t]=(0,v.xK)((()=>({rotation:[-Math.PI/2,0,0],...e}))),n=(0,i.U2)(r.TextureLoader,p.Z);return n.wrapS=n.wrapT=r.RepeatWrapping,n.repeat.set(240,240),a.createElement("mesh",{ref:t,receiveShadow:!0},a.createElement("planeGeometry",{args:[100,100]}),a.createElement("meshStandardMaterial",{map:n,color:"green"}))}function A(e){const[t]=(0,v.EJ)((()=>({...e})));return a.createElement("mesh",{ref:t,receiveShadow:!0},a.createElement("boxGeometry",{args:[10,.1,9]}),a.createElement("meshStandardMaterial",{color:2435369}))}function C({height:e,...t}){const[n]=(0,v.EJ)((()=>({...t})));return a.createElement("mesh",{ref:n,receiveShadow:!0},a.createElement("boxGeometry",{args:[.98,e,.98]}),a.createElement("meshStandardMaterial",{color:8553090}))}function k({height:e,...t}){const[n]=(0,v.EJ)((()=>({...t})));return a.createElement("mesh",{ref:n,receiveShadow:!0},a.createElement("boxGeometry",{args:[1.98,e,.18]}),a.createElement("meshStandardMaterial",{color:8553090}))}function R({...e}){return a.createElement("group",e,[...Array(10)].reduce(((e,t,n)=>e.concat([...Array(2)].map(((e,t)=>[n-4.5,t+1])))),[]).map((([e,t],n)=>a.createElement(C,{key:n,height:.2,position:[e,.1,t]}))),[...Array(5)].map(((e,t)=>[2*t-4,.4])).map((([e,t],n)=>a.createElement(k,{key:n,height:.2,position:[e,.1,t]}))))}function L({...e}){const t=y(4,8),[n]=(0,v.EJ)((()=>({...e})));return a.createElement("group",{position:[0,t/2,0]},a.createElement("mesh",{ref:n,receiveShadow:!0},a.createElement("boxGeometry",{args:[2.48,t,1.98]}),a.createElement("meshStandardMaterial",{color:E[Math.round(y(0,E.length-1))]})))}function z({...e}){return a.createElement("group",e,[...Array(4)].map(((e,t)=>[2.5*t-3.75,3.5])).map((([e,t],n)=>a.createElement(L,{key:n,position:[e,0,t]}))))}function _({height:e,...t}){const[n]=(0,v.Yz)((()=>({position:[0,e/2,0],...t})));return a.createElement("mesh",{ref:n,receiveShadow:!0},a.createElement("cylinderGeometry",{args:[.1,.2,e,5]}),a.createElement("meshStandardMaterial",{color:E[Math.round(y(0,E.length-1))]}))}function T({color:e,height:t,...n}){const r=y(-.5,.5),o=t+y(-.5,.25),i=y(-.5,.5),[c]=(0,v.Eo)((()=>({position:[r,o,i],rotation:[y(0,.5*Math.PI),y(0,.5*Math.PI),0],...n})));return a.createElement("mesh",{ref:c,receiveShadow:!0},a.createElement("icosahedronGeometry",{args:[y(t/12,t/4)]}),a.createElement("meshStandardMaterial",{color:e}))}function G({...e}){const t=y(4,6),n=E[Math.round(y(0,E.length-1))];return a.createElement("group",e,a.createElement(_,{height:t}),[...Array(5)].map(((e,r)=>a.createElement(T,{key:r,color:n,height:t}))))}function I({...e}){return a.createElement("group",e,[...Array(5)].map(((e,t)=>[2*t-y(3.8,4.2),.75])).map((([e,t],n)=>a.createElement(G,{key:n,position:[e,0,t]}))))}function j({...e}){return a.createElement("group",e,a.createElement("pointLight",{castShadow:!0,intensity:.3,position:[0,3,0]}),a.createElement("mesh",{position:[0,3,0]},a.createElement("sphereGeometry",{args:[.25]}),a.createElement("meshStandardMaterial",{color:16580049,metalness:.75,roughness:0,emissive:new r.Color(16775375),emissiveIntensity:1,transparent:!0,opacity:.95})),a.createElement("mesh",{position:[0,1.5,0]},a.createElement("cylinderGeometry",{args:[.05,.05,3,5]}),a.createElement("meshStandardMaterial",{color:4210752})))}function D({...e}){return a.createElement("group",e,[...Array(4)].map(((e,t)=>[2*t-3,.75])).map((([e,t],n)=>a.createElement(j,{key:n,position:[e,0,t]}))))}function O(){return a.createElement("section",{className:g.Z.Demo},a.createElement(i.Xz,{shadows:!0,gl:{alpha:!1},camera:{fov:35,position:[5,10,-15]}},a.createElement(d.q,null),a.createElement(l,{radius:100,depth:50,count:5e3,factor:4,saturation:0,fade:!0}),a.createElement("ambientLight",{intensity:.01}),a.createElement(v.wI,{gravity:[0,-30,0]},a.createElement(v.cG,{scale:1.1,color:"black"},a.createElement(a.Suspense,{fallback:"loading..."},a.createElement(P,null),a.createElement(A,null),a.createElement(R,null),a.createElement(z,null),a.createElement(I,null),a.createElement(D,null),a.createElement(M,null)))),a.createElement(f.z,null)))}new r.Vector3(0,1,0)},1281:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"eb5fc8ebf9c7a590fb3977d00d47e6ff.jpg"},396:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"9708dd1a24262f8bfe2dd7fd8e3b3914.glb"},7345:e=>{"use strict";e.exports=JSON.parse('[["#69d2e7","#a7dbd8","#e0e4cc","#f38630","#fa6900"],["#fe4365","#fc9d9a","#f9cdad","#c8c8a9","#83af9b"]]')}}]);