"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[673],{2800:(e,t,n)=>{n.d(t,{q:()=>l});var r=n(7896),o=n(2784),a=n(6666),i=n(2955);class c extends i.Mesh{constructor(){super(new i.BoxGeometry(1,1,1),c.material)}}function u(e,t,n=new i.Vector3){const r=Math.PI*(e-.5),o=2*Math.PI*(t-.5);return n.x=Math.cos(o),n.y=Math.sin(r),n.z=Math.sin(o),n}(0,a.Z)(c,"SkyShader",{uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new i.Vector3},up:{value:new i.Vector3(0,1,0)}},vertexShader:["uniform vec3 sunPosition;","uniform float rayleigh;","uniform float turbidity;","uniform float mieCoefficient;","uniform vec3 up;","varying vec3 vWorldPosition;","varying vec3 vSunDirection;","varying float vSunfade;","varying vec3 vBetaR;","varying vec3 vBetaM;","varying float vSunE;","const float e = 2.71828182845904523536028747135266249775724709369995957;","const float pi = 3.141592653589793238462643383279502884197169;","const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );","const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );","const float v = 4.0;","const vec3 K = vec3( 0.686, 0.678, 0.666 );","const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );","const float cutoffAngle = 1.6110731556870734;","const float steepness = 1.5;","const float EE = 1000.0;","float sunIntensity( float zenithAngleCos ) {","\tzenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );","\treturn EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );","}","vec3 totalMie( float T ) {","\tfloat c = ( 0.2 * T ) * 10E-18;","\treturn 0.434 * c * MieConst;","}","void main() {","\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );","\tvWorldPosition = worldPosition.xyz;","\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","\tgl_Position.z = gl_Position.w;","\tvSunDirection = normalize( sunPosition );","\tvSunE = sunIntensity( dot( vSunDirection, up ) );","\tvSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );","\tfloat rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );","\tvBetaR = totalRayleigh * rayleighCoefficient;","\tvBetaM = totalMie( turbidity ) * mieCoefficient;","}"].join("\n"),fragmentShader:["varying vec3 vWorldPosition;","varying vec3 vSunDirection;","varying float vSunfade;","varying vec3 vBetaR;","varying vec3 vBetaM;","varying float vSunE;","uniform float mieDirectionalG;","uniform vec3 up;","const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );","const float pi = 3.141592653589793238462643383279502884197169;","const float n = 1.0003;","const float N = 2.545E25;","const float rayleighZenithLength = 8.4E3;","const float mieZenithLength = 1.25E3;","const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;","const float THREE_OVER_SIXTEENPI = 0.05968310365946075;","const float ONE_OVER_FOURPI = 0.07957747154594767;","float rayleighPhase( float cosTheta ) {","\treturn THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );","}","float hgPhase( float cosTheta, float g ) {","\tfloat g2 = pow( g, 2.0 );","\tfloat inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );","\treturn ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );","}","void main() {","\tvec3 direction = normalize( vWorldPosition - cameraPos );","\tfloat zenithAngle = acos( max( 0.0, dot( up, direction ) ) );","\tfloat inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );","\tfloat sR = rayleighZenithLength * inverse;","\tfloat sM = mieZenithLength * inverse;","\tvec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );","\tfloat cosTheta = dot( direction, vSunDirection );","\tfloat rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );","\tvec3 betaRTheta = vBetaR * rPhase;","\tfloat mPhase = hgPhase( cosTheta, mieDirectionalG );","\tvec3 betaMTheta = vBetaM * mPhase;","\tvec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );","\tLin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );","\tfloat theta = acos( direction.y ); // elevation --\x3e y-axis, [-pi/2, pi/2]","\tfloat phi = atan( direction.z, direction.x ); // azimuth --\x3e x-axis [-pi/2, pi/2]","\tvec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );","\tvec3 L0 = vec3( 0.1 ) * Fex;","\tfloat sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );","\tL0 += ( vSunE * 19000.0 * Fex ) * sundisk;","\tvec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );","\tvec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );","\tgl_FragColor = vec4( retColor, 1.0 );","#include <tonemapping_fragment>","#include <encodings_fragment>","}"].join("\n")}),(0,a.Z)(c,"material",new i.ShaderMaterial({name:"SkyShader",fragmentShader:c.SkyShader.fragmentShader,vertexShader:c.SkyShader.vertexShader,uniforms:i.UniformsUtils.clone(c.SkyShader.uniforms),side:i.BackSide,depthWrite:!1}));const l=o.forwardRef((({inclination:e=.6,azimuth:t=.1,distance:n=1e3,mieCoefficient:a=.005,mieDirectionalG:l=.8,rayleigh:s=.5,turbidity:f=10,sunPosition:m=u(e,t),...v},d)=>{const p=o.useMemo((()=>(new i.Vector3).setScalar(n)),[n]),[h]=o.useState((()=>new c));return o.createElement("primitive",(0,r.Z)({dispose:void 0,object:h,ref:d,"material-uniforms-mieCoefficient-value":a,"material-uniforms-mieDirectionalG-value":l,"material-uniforms-rayleigh-value":s,"material-uniforms-sunPosition-value":m,"material-uniforms-turbidity-value":f,scale:p},v))}))},6506:(e,t,n)=>{n.d(t,{t:()=>u});var r=n(2784),o=n(3747),a=n(2955);class i extends a.ShaderMaterial{constructor(){super({uniforms:{time:{value:0},fade:{value:1}},vertexShader:"\n      uniform float time;\n      attribute float size;\n      varying vec3 vColor;\n      void main() {\n        vColor = color;\n        vec4 mvPosition = modelViewMatrix * vec4(position, 0.5);\n        gl_PointSize = size * (30.0 / -mvPosition.z) * (3.0 + sin(mvPosition.x + 2.0 * time + 100.0));\n        gl_Position = projectionMatrix * mvPosition;\n      }",fragmentShader:"\n      uniform sampler2D pointTexture;\n      uniform float fade;\n      varying vec3 vColor;\n      void main() {\n        float opacity = 1.0;\n        if (fade == 1.0) {\n          float d = distance(gl_PointCoord, vec2(0.5, 0.5));\n          opacity = 1.0 / (1.0 + exp(16.0 * (d - 0.25)));\n        }\n        gl_FragColor = vec4(vColor, opacity);\n      }"})}}const c=e=>(new a.Vector3).setFromSpherical(new a.Spherical(e,Math.acos(1-2*Math.random()),2*Math.random()*Math.PI)),u=r.forwardRef((({radius:e=100,depth:t=50,count:n=5e3,saturation:u=0,factor:l=4,fade:s=!1},f)=>{const m=r.useRef(),[v,d,p]=r.useMemo((()=>{const r=[],o=[],i=Array.from({length:n},(()=>(.5+.5*Math.random())*l)),s=new a.Color;let f=e+t;const m=t/n;for(let e=0;e<n;e++)f-=m*Math.random(),r.push(...c(f).toArray()),s.setHSL(e/n,u,.9),o.push(s.r,s.g,s.b);return[new Float32Array(r),new Float32Array(o),new Float32Array(i)]}),[n,t,l,e,u]);(0,o.xQ)((e=>m.current&&(m.current.uniforms.time.value=e.clock.getElapsedTime())));const[h]=r.useState((()=>new i));return r.createElement("points",{ref:f},r.createElement("bufferGeometry",{attach:"geometry"},r.createElement("bufferAttribute",{attachObject:["attributes","position"],args:[v,3]}),r.createElement("bufferAttribute",{attachObject:["attributes","color"],args:[d,3]}),r.createElement("bufferAttribute",{attachObject:["attributes","size"],args:[p,1]})),r.createElement("primitive",{dispose:void 0,ref:m,object:h,attach:"material",blending:a.AdditiveBlending,"uniforms-fade-value":s,transparent:!0,vertexColors:!0}))}))},5848:(e,t,n)=>{n.d(t,{v:()=>i});var r=n(2784),o=n(2955),a=n(3747);function i(e,t){const n=r.useRef(),[i]=r.useState((()=>t?t instanceof o.Object3D?{current:t}:t:n)),[c]=r.useState((()=>new o.AnimationMixer(void 0))),u=r.useRef({}),[l]=r.useState((()=>{const t={};return e.forEach((e=>Object.defineProperty(t,e.name,{enumerable:!0,get(){if(i.current)return u.current[e.name]||(u.current[e.name]=c.clipAction(e,i.current))}}))),{ref:i,clips:e,actions:t,names:e.map((e=>e.name)),mixer:c}}));return(0,a.xQ)(((e,t)=>c.update(t))),r.useEffect((()=>{const e=i.current;return()=>{u.current={},Object.values(l.actions).forEach((t=>{e&&c.uncacheAction(t,e)}))}}),[e]),l}},673:(e,t,n)=>{n.r(t),n.d(t,{default:()=>K});var r=n(2955),o=n(2784),a=n(9557),i=n(3747),c=n(6727),u=n(5848),l=n(2800),s=n(6506),f=n(7539),m=n(248),v=n(918),d=n(1281),p=n(8790);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}var g=["height"],y=["height"];function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function E(e){if(null==e)throw new TypeError("Cannot destructure "+e)}function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S.apply(this,arguments)}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){P(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==h(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===h(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||j(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,c=[],u=!0,l=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw o}}return c}}(e,t)||j(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var C=v[0];function k(e,t){return Math.random()*(t-e)+e}var R={KeyW:"forward",KeyS:"backward",KeyA:"left",KeyD:"right",ArrowUp:"forward",ArrowDown:"backward",ArrowLeft:"left",ArrowRight:"right",Space:"jump"},L=new r.Vector3,T=new r.Vector3,z=new r.Vector3;function _(e){var t,l,s,f=S({},(E(e),e)),v=(0,i.Ky)().camera,d=function(){var e=O((0,o.useState)(null),2),t=e[0],n=e[1],r=O((0,o.useState)(M(Array(4)).reduce((function(e,t,n){return Object.assign(e,P({},n,0))}),{})),2),a=r[0],c=r[1],u=O((0,o.useState)(M(Array(16)).reduce((function(e,t,n){return Object.assign(e,P({},n,0))}),{})),2),l=u[0],s=u[1];return(0,o.useEffect)((function(){if("GamepadEvent"in window){var e=function(e){n(e.gamepad.index)},t=function(e){n(null)};return window.addEventListener("gamepadconnected",e),window.addEventListener("gamepaddisconnected",t),function(){window.removeEventListener("gamepadconnected",e),window.removeEventListener("gamepaddisconnected",t)}}var r=setInterval((function(){for(var e=navigator.getGamepads(),t=0;t<e.length;t++)e[t]&&e[t].index in controllers.current&&(controllers.current[e[t].index]=e[t])}),500);return function(){clearInterval(r)}}),[]),(0,i.xQ)((function(){if(null!==t){var e=navigator.getGamepads().item(t);c((function(t){return e.axes.map((function(e){return Math.abs(e)>.2?e:0})).reduce((function(e,t,n){return e[n]===t?e:x(x({},e),{},P({},n,t))}),t)})),s((function(t){return e.buttons.reduce((function(e,t,n){return e[n]===t.value?e:x(x({},e),{},P({},n,t.value))}),t)}))}})),{axes:a,buttons:l}}(),p=d.axes,h=(d.buttons,l=(t=O((0,o.useState)({forward:!1,backward:!1,left:!1,right:!1,jump:!1}),2))[0],s=t[1],(0,o.useEffect)((function(){var e=function(e){return s((function(t){return x(x({},t),{},P({},R[e.code],!0))}))},t=function(e){return s((function(t){return x(x({},t),{},P({},R[e.code],!1))}))};return document.addEventListener("keydown",e),document.addEventListener("keyup",t),function(){document.removeEventListener("keydown",e),document.removeEventListener("keyup",t)}}),[]),l),g=h.forward,y=h.backward,b=h.left,w=h.right,j=h.jump,A=O((0,o.useState)("idle"),2),C=A[0],k=A[1],_=O((0,m.Eo)((function(){return x({args:1,mass:1,position:[1.2,5,-1]},f)})),2),I=_[0],D=_[1],G=O((0,a.useSpring)((function(){return{targetPosition:[0,0,0],cameraPosition:[0,0,0],config:a.config.molasses}})),2),B=G[0],V=B.targetPosition,F=B.cameraPosition,Z=G[1],N=(0,c.L)(n(396).Z),W=N.scene,K=N.animations,U=(0,u.v)(K),J=U.ref,Q=U.mixer,H=(U.names,U.actions),X=(U.clips,(0,o.useRef)([0,0,0]));return(0,o.useEffect)((function(){D.velocity.subscribe((function(e){return X.current=e}))}),[]),(0,o.useEffect)((function(){var e=function(e){k((e.action.getClip().name.includes("jump"),"idle"))};return Q.addEventListener("finished",e),function(){Q.removeEventListener("finished",e)}}),[Q]),(0,o.useEffect)((function(){var e;if(C)return null===(e=H[C])||void 0===e||e.reset().fadeIn(1).setLoop(["run","idle"].includes(C)?r.LoopRepeat:r.LoopOnce).play(),function(){var e;null===(e=H[C])||void 0===e||e.fadeOut(1)}}),[H,C]),(0,i.xQ)((function(e){var t,n,r,o;e.clock.getElapsedTime(),v.lookAt.apply(v,M(V.get())),(t=v.position).set.apply(t,M(F.get())),I.current.getWorldPosition(J.current.position),Z.start({targetPosition:function(e){var t=e.x,n=e.y,r=e.z,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return[t,n+o,r]}(null===(n=J.current)||void 0===n?void 0:n.position),cameraPosition:function(e,t){var n=e.x,r=e.y,o=e.z,a=t.y,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-10,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3;return[n+Math.sin(a)*i,r+c,o+Math.cos(a)*i]}(null===(r=J.current)||void 0===r?void 0:r.position,null===(o=J.current)||void 0===o?void 0:o.rotation)}),J.current.rotation.y+=(Number(b)-Number(w)-p[0])*Math.PI/30,T.set(0,0,Number(g)-Number(y)-p[1]),L.subVectors(T,z).normalize().multiplyScalar(5).applyEuler(J.current.rotation),D.velocity.set(L.x,X.current[1],L.z),j&&Math.abs(X.current[1].toFixed(2))<.05&&D.velocity.set(X.current[0],10,X.current[2]),g&&k("run"),y&&k("idle"),b&&k("stand_up_left"),w&&k("stand_up_right")})),o.createElement("group",null,o.createElement("mesh",{ref:I}),o.createElement("primitive",{ref:J,object:W}),";")}function I(e){var t=O((0,m.xK)((function(){return x({rotation:[-Math.PI/2,0,0]},e)})),1)[0],n=(0,i.U2)(r.TextureLoader,d.Z);return n.wrapS=n.wrapT=r.RepeatWrapping,n.repeat.set(240,240),o.createElement("mesh",{ref:t,receiveShadow:!0},o.createElement("planeGeometry",{args:[100,100]}),o.createElement("meshStandardMaterial",{map:n,color:"green"}))}function D(e){var t=O((0,m.EJ)((function(){return x({},e)})),1)[0];return o.createElement("mesh",{ref:t,receiveShadow:!0},o.createElement("boxGeometry",{args:[10,.1,9]}),o.createElement("meshStandardMaterial",{color:2435369}))}function G(e){var t=e.height,n=b(e,g),r=O((0,m.EJ)((function(){return x({},n)})),1)[0];return o.createElement("mesh",{ref:r,receiveShadow:!0},o.createElement("boxGeometry",{args:[.98,t,.98]}),o.createElement("meshStandardMaterial",{color:8553090}))}function B(e){var t=e.height,n=b(e,y),r=O((0,m.EJ)((function(){return x({},n)})),1)[0];return o.createElement("mesh",{ref:r,receiveShadow:!0},o.createElement("boxGeometry",{args:[1.98,t,.18]}),o.createElement("meshStandardMaterial",{color:8553090}))}function V(e){var t=S({},(E(e),e));return o.createElement("group",t,M(Array(10)).reduce((function(e,t,n){return e.concat(M(Array(2)).map((function(e,t){return[n-4.5,t+1]})))}),[]).map((function(e,t){var n=O(e,2),r=n[0],a=n[1];return o.createElement(G,{key:t,height:.2,position:[r,.1,a]})})),M(Array(5)).map((function(e,t){return[2*t-4,.4]})).map((function(e,t){var n=O(e,2),r=n[0],a=n[1];return o.createElement(B,{key:t,height:.2,position:[r,.1,a]})})))}function F(e){var t=S({},(E(e),e)),n=k(4,8),r=O((0,m.EJ)((function(){return x({},t)})),1)[0];return o.createElement("group",{position:[0,n/2,0]},o.createElement("mesh",{ref:r,receiveShadow:!0},o.createElement("boxGeometry",{args:[2.48,n,1.98]}),o.createElement("meshStandardMaterial",{color:C[Math.round(k(0,C.length-1))]})))}function Z(e){var t=S({},(E(e),e));return o.createElement("group",t,M(Array(4)).map((function(e,t){return[2.5*t-3.75,3.5]})).map((function(e,t){var n=O(e,2),r=n[0],a=n[1];return o.createElement(F,{key:t,position:[r,0,a]})})))}function N(e){var t=S({},(E(e),e));return o.createElement("group",t,o.createElement("pointLight",{castShadow:!0,intensity:.3,position:[0,3,0]}),o.createElement("mesh",{position:[0,3,0]},o.createElement("sphereGeometry",{args:[.25]}),o.createElement("meshStandardMaterial",{color:16580049,metalness:.75,roughness:0,emissive:new r.Color(16775375),emissiveIntensity:1,transparent:!0,opacity:.95})),o.createElement("mesh",{position:[0,1.5,0]},o.createElement("cylinderGeometry",{args:[.05,.05,3,5]}),o.createElement("meshStandardMaterial",{color:4210752})))}function W(e){var t=S({},(E(e),e));return o.createElement("group",t,M(Array(4)).map((function(e,t){return[2*t-3,.75]})).map((function(e,t){var n=O(e,2),r=n[0],a=n[1];return o.createElement(N,{key:t,position:[r,0,a]})})))}function K(){return o.createElement("section",{className:p.Z.Demo},o.createElement(i.Xz,{shadows:!0,gl:{alpha:!1},camera:{fov:35,position:[5,10,-15]}},o.createElement(l.q,null),o.createElement(s.t,{radius:100,depth:50,count:5e3,factor:4,saturation:0,fade:!0}),o.createElement("ambientLight",{intensity:.01}),o.createElement(m.wI,{gravity:[0,-30,0]},o.createElement(m.cG,{scale:1.1,color:"black"},o.createElement(o.Suspense,{fallback:"loading..."},o.createElement(I,null),o.createElement(D,null),o.createElement(V,null),o.createElement(Z,null),o.createElement(W,null),o.createElement(_,null)))),o.createElement(f.z,null)))}},1281:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"eb5fc8ebf9c7a590fb3977d00d47e6ff.jpg"},396:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"9708dd1a24262f8bfe2dd7fd8e3b3914.glb"},918:e=>{e.exports=JSON.parse('[["#69d2e7","#a7dbd8","#e0e4cc","#f38630","#fa6900"],["#fe4365","#fc9d9a","#f9cdad","#c8c8a9","#83af9b"]]')}}]);