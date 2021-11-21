"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[35],{6506:(e,t,a)=>{a.d(t,{t:()=>c});var r=a(2784),n=a(3747),o=a(2955);class i extends o.ShaderMaterial{constructor(){super({uniforms:{time:{value:0},fade:{value:1}},vertexShader:"\n      uniform float time;\n      attribute float size;\n      varying vec3 vColor;\n      void main() {\n        vColor = color;\n        vec4 mvPosition = modelViewMatrix * vec4(position, 0.5);\n        gl_PointSize = size * (30.0 / -mvPosition.z) * (3.0 + sin(mvPosition.x + 2.0 * time + 100.0));\n        gl_Position = projectionMatrix * mvPosition;\n      }",fragmentShader:"\n      uniform sampler2D pointTexture;\n      uniform float fade;\n      varying vec3 vColor;\n      void main() {\n        float opacity = 1.0;\n        if (fade == 1.0) {\n          float d = distance(gl_PointCoord, vec2(0.5, 0.5));\n          opacity = 1.0 / (1.0 + exp(16.0 * (d - 0.25)));\n        }\n        gl_FragColor = vec4(vColor, opacity);\n      }"})}}const l=e=>(new o.Vector3).setFromSpherical(new o.Spherical(e,Math.acos(1-2*Math.random()),2*Math.random()*Math.PI)),c=r.forwardRef((({radius:e=100,depth:t=50,count:a=5e3,saturation:c=0,factor:s=4,fade:u=!1},d)=>{const f=r.useRef(),[m,p,h]=r.useMemo((()=>{const r=[],n=[],i=Array.from({length:a},(()=>(.5+.5*Math.random())*s)),u=new o.Color;let d=e+t;const f=t/a;for(let e=0;e<a;e++)d-=f*Math.random(),r.push(...l(d).toArray()),u.setHSL(e/a,c,.9),n.push(u.r,u.g,u.b);return[new Float32Array(r),new Float32Array(n),new Float32Array(i)]}),[a,t,s,e,c]);(0,n.xQ)((e=>f.current&&(f.current.uniforms.time.value=e.clock.getElapsedTime())));const[v]=r.useState((()=>new i));return r.createElement("points",{ref:d},r.createElement("bufferGeometry",{attach:"geometry"},r.createElement("bufferAttribute",{attachObject:["attributes","position"],args:[m,3]}),r.createElement("bufferAttribute",{attachObject:["attributes","color"],args:[p,3]}),r.createElement("bufferAttribute",{attachObject:["attributes","size"],args:[h,1]})),r.createElement("primitive",{dispose:void 0,ref:f,object:v,attach:"material",blending:o.AdditiveBlending,"uniforms-fade-value":u,transparent:!0,vertexColors:!0}))}))},8035:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var r=a(2955),n=a(2784),o=a(3747),i=a(6506),l=a(7539),c=a(1267);const s=a.p+"54672c1f3ba121d804700bd6e76a8135.jpg",u=a.p+"930cf2e99bc548140c2954ce3e4d11b7.jpg",d=a.p+"7b4efa59933b470e3776b60fd85d0da4.jpg",f=a.p+"08fcd80007fae8fc71706e2cabd46453.jpg";function m(){const[e,t,a,c]=(0,o.U2)(r.TextureLoader,[s,u,d,f]),m=(0,n.useRef)(),p=(0,n.useRef)();return(0,o.xQ)((({clock:e})=>{const t=e.getElapsedTime();m.current.rotation.y=t/24,p.current.rotation.y=t/24})),n.createElement(n.Fragment,null,n.createElement("ambientLight",{intensity:.1}),n.createElement("pointLight",{color:"#f6f3ea",position:[2,0,5],intensity:1.2}),n.createElement(i.t,{radius:300,depth:60,count:1e3,factor:7,saturation:0,fade:!0}),n.createElement("mesh",{ref:p,position:[0,0,3]},n.createElement("sphereGeometry",{args:[1.005,32,32]}),n.createElement("meshPhongMaterial",{map:c,opacity:.4,depthWrite:!0,transparent:!0,side:r.DoubleSide})),n.createElement("mesh",{ref:m,position:[0,0,3]},n.createElement("sphereGeometry",{args:[1,32,32]}),n.createElement("meshPhongMaterial",{specularMap:a}),n.createElement("meshStandardMaterial",{map:e,normalMap:t,metalness:.4,roughness:.7}),n.createElement(l.z,{enableZoom:!0,enablePan:!0,enableRotate:!0,zoomSpeed:.6,panSpeed:.5,rotateSpeed:.4})))}function p(){return n.useRef(),n.createElement("section",{className:c.Z.Section},n.createElement(o.Xz,null,n.createElement(n.Suspense,{fallback:null},n.createElement(m,null))))}},2237:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var r=a(9601),n=a.n(r),o=a(2609),i=a.n(o)()(n());i.push([e.id,"._B4SH7T5oHgPpXF9rQYi{width:100%;height:100%;background:#000}",""]),i.locals={Section:"_B4SH7T5oHgPpXF9rQYi"};const l=i},1267:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(6062),n=a.n(r),o=a(4036),i=a.n(o),l=a(6793),c=a.n(l),s=a(7892),u=a.n(s),d=a(1173),f=a.n(d),m=a(2464),p=a.n(m),h=a(2237),v={};v.styleTagTransform=p(),v.setAttributes=u(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=f();var b=n()(h.default,v);if(!h.default.locals||e.hot.invalidate){var g=!h.default.locals,E=g?h:h.default.locals;e.hot.accept(2237,(t=>{h=a(2237),function(e,t,a){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!a||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(a&&"default"===r||e[r]))return!1;return!0}(E,g?h:h.default.locals,g)?(E=g?h:h.default.locals,b(h.default)):e.hot.invalidate()}))}e.hot.dispose((function(){b()}));const y=h.default&&h.default.locals?h.default.locals:void 0}}]);