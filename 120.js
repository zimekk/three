(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[120],{6506:(t,e,r)=>{"use strict";r.d(e,{t:()=>u});var n=r(2784),a=r(3747),o=r(2955);class i extends o.ShaderMaterial{constructor(){super({uniforms:{time:{value:0},fade:{value:1}},vertexShader:"\n      uniform float time;\n      attribute float size;\n      varying vec3 vColor;\n      void main() {\n        vColor = color;\n        vec4 mvPosition = modelViewMatrix * vec4(position, 0.5);\n        gl_PointSize = size * (30.0 / -mvPosition.z) * (3.0 + sin(mvPosition.x + 2.0 * time + 100.0));\n        gl_Position = projectionMatrix * mvPosition;\n      }",fragmentShader:"\n      uniform sampler2D pointTexture;\n      uniform float fade;\n      varying vec3 vColor;\n      void main() {\n        float opacity = 1.0;\n        if (fade == 1.0) {\n          float d = distance(gl_PointCoord, vec2(0.5, 0.5));\n          opacity = 1.0 / (1.0 + exp(16.0 * (d - 0.25)));\n        }\n        gl_FragColor = vec4(vColor, opacity);\n      }"})}}const l=t=>(new o.Vector3).setFromSpherical(new o.Spherical(t,Math.acos(1-2*Math.random()),2*Math.random()*Math.PI)),u=n.forwardRef((({radius:t=100,depth:e=50,count:r=5e3,saturation:u=0,factor:s=4,fade:c=!1},f)=>{const d=n.useRef(),[h,m,v]=n.useMemo((()=>{const n=[],a=[],i=Array.from({length:r},(()=>(.5+.5*Math.random())*s)),c=new o.Color;let f=t+e;const d=e/r;for(let t=0;t<r;t++)f-=d*Math.random(),n.push(...l(f).toArray()),c.setHSL(t/r,u,.9),a.push(c.r,c.g,c.b);return[new Float32Array(n),new Float32Array(a),new Float32Array(i)]}),[r,e,s,t,u]);(0,a.xQ)((t=>d.current&&(d.current.uniforms.time.value=t.clock.getElapsedTime())));const[p]=n.useState((()=>new i));return n.createElement("points",{ref:f},n.createElement("bufferGeometry",{attach:"geometry"},n.createElement("bufferAttribute",{attachObject:["attributes","position"],args:[h,3]}),n.createElement("bufferAttribute",{attachObject:["attributes","color"],args:[m,3]}),n.createElement("bufferAttribute",{attachObject:["attributes","size"],args:[v,1]})),n.createElement("primitive",{dispose:void 0,ref:d,object:p,attach:"material",blending:o.AdditiveBlending,"uniforms-fade-value":c,transparent:!0,vertexColors:!0}))}))},7120:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>h});var n=r(2955),a=r(2784),o=r(3747),i=r(6506),l=r(7539),u=r(3468),s=r.n(u),c=r(3139);function f(t){var e=t.position,r=t.rotation,i=t.grid,l=i.width,u=i.height,s=i.sep,c=t.colorOfXYZT,f=t.zOfXYT,d=t.anim,h=d.init,m=d.update,v=h,p=(0,a.useMemo)((function(){for(var t=[],e=[],r=[],n=0;n<u;n++)for(var a=0;a<l;a++){var o=s*(a-(l-1)/2),i=s*(n-(u-1)/2),d=f(o,i,v);t.push(o,i,d);var h=c(o,i,d,v);e.push(h.r,h.g,h.b),r.push(0,0,1)}return{positions:new Float32Array(t),colors:new Float32Array(e),normals:new Float32Array(r)}}),[l,u,s,f,c,v]),b=p.positions,w=p.colors,y=p.normals,M=(0,a.useMemo)((function(){for(var t=[],e=0,r=0;r<u-1;r++){for(var n=0;n<l-1;n++)t.push(e,e+1,e+l+1),t.push(e+l+1,e+l,e),e++;e++}return new Uint16Array(t)}),[l,u]),g=(0,a.useRef)(),E=(0,a.useRef)();return(0,o.xQ)((function(){v=m(v);for(var t=g.current.array,e=E.current.array,r=0,n=0;n<u;n++)for(var a=0;a<l;a++){t[r+2]=f(t[r],t[r+1],v);var o=c(t[r],t[r+1],t[r+2],v);e[r]=o.r,e[r+1]=o.g,e[r+2]=o.b,r+=3}g.current.needsUpdate=!0,E.current.needsUpdate=!0})),a.createElement("mesh",{position:e,rotation:r},a.createElement("bufferGeometry",null,a.createElement("bufferAttribute",{ref:g,attachObject:["attributes","position"],array:b,count:b.length/3,itemSize:3}),a.createElement("bufferAttribute",{ref:E,attachObject:["attributes","color"],array:w,count:w.length/3,itemSize:3}),a.createElement("bufferAttribute",{attachObject:["attributes","normal"],array:y,count:y.length/3,itemSize:3}),a.createElement("bufferAttribute",{attach:"index",array:M,count:M.length})),a.createElement("meshStandardMaterial",{vertexColors:!0,side:n.DoubleSide,wireframe:!1}))}function d(){var t=Math.floor(Math.random()*Math.pow(2,16));return s().seed(t),a.createElement(f,{position:[0,0,0],rotation:[-Math.PI/2,0,0],grid:{width:100,height:100,sep:.2},zOfXYT:function(t,e,r){return function(t,e,r){for(var n=1,a=1,o=0,i=0;i<20;i++)o+=n*(0,u.perlin3)(t*a*.125,e*a*.125,r),n*=.6,a*=2;return o}(t,e,r)},colorOfXYZT:function(t,e,r,n){return{r,g:r/5,b:Math.sqrt(Math.pow(t,2)+Math.pow(e,2))/75}},anim:{init:0,update:function(t){return t+.002}}})}function h(){return a.createElement("section",{className:c.Z.Section},a.createElement(o.Xz,{camera:{position:[0,2,10],fov:75}},a.createElement("ambientLight",null),a.createElement(i.t,{radius:300,depth:60,count:1e3,factor:7,saturation:0,fade:!0}),a.createElement(l.z,{enableZoom:!0,enablePan:!0,enableRotate:!0,zoomSpeed:.6,panSpeed:.5,rotateSpeed:.4}),a.createElement(d,null)))}},3468:t=>{var e={};function r(t,e,r){this.x=t,this.y=e,this.z=r}r.prototype.dot2=function(t,e){return this.x*t+this.y*e},r.prototype.dot3=function(t,e,r){return this.x*t+this.y*e+this.z*r};var n=[new r(1,1,0),new r(-1,1,0),new r(1,-1,0),new r(-1,-1,0),new r(1,0,1),new r(-1,0,1),new r(1,0,-1),new r(-1,0,-1),new r(0,1,1),new r(0,-1,1),new r(0,1,-1),new r(0,-1,-1)],a=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],o=new Array(512),i=new Array(512);e.seed=function(t){t>0&&t<1&&(t*=65536),(t=Math.floor(t))<256&&(t|=t<<8);for(var e=0;e<256;e++){var r;r=1&e?a[e]^255&t:a[e]^t>>8&255,o[e]=o[e+256]=r,i[e]=i[e+256]=n[r%12]}},e.seed(0);var l=.5*(Math.sqrt(3)-1),u=(3-Math.sqrt(3))/6,s=1/6;function c(t){return t*t*t*(t*(6*t-15)+10)}function f(t,e,r){return(1-r)*t+r*e}e.simplex2=function(t,e){var r,n,a=(t+e)*l,s=Math.floor(t+a),c=Math.floor(e+a),f=(s+c)*u,d=t-s+f,h=e-c+f;d>h?(r=1,n=0):(r=0,n=1);var m=d-r+u,v=h-n+u,p=d-1+2*u,b=h-1+2*u,w=i[(s&=255)+o[c&=255]],y=i[s+r+o[c+n]],M=i[s+1+o[c+1]],g=.5-d*d-h*h,E=.5-m*m-v*v,A=.5-p*p-b*b;return 70*((g<0?0:(g*=g)*g*w.dot2(d,h))+(E<0?0:(E*=E)*E*y.dot2(m,v))+(A<0?0:(A*=A)*A*M.dot2(p,b)))},e.simplex3=function(t,e,r){var n,a,l,u,c,f,d=.3333333333333333*(t+e+r),h=Math.floor(t+d),m=Math.floor(e+d),v=Math.floor(r+d),p=(h+m+v)*s,b=t-h+p,w=e-m+p,y=r-v+p;b>=w?w>=y?(n=1,a=0,l=0,u=1,c=1,f=0):b>=y?(n=1,a=0,l=0,u=1,c=0,f=1):(n=0,a=0,l=1,u=1,c=0,f=1):w<y?(n=0,a=0,l=1,u=0,c=1,f=1):b<y?(n=0,a=1,l=0,u=0,c=1,f=1):(n=0,a=1,l=0,u=1,c=1,f=0);var M=b-n+s,g=w-a+s,E=y-l+s,A=b-u+2*s,S=w-c+2*s,x=y-f+2*s,z=b-1+.5,O=w-1+.5,C=y-1+.5,P=i[(h&=255)+o[(m&=255)+o[v&=255]]],j=i[h+n+o[m+a+o[v+l]]],F=i[h+u+o[m+c+o[v+f]]],T=i[h+1+o[m+1+o[v+1]]],_=.6-b*b-w*w-y*y,k=.6-M*M-g*g-E*E,Q=.6-A*A-S*S-x*x,V=.6-z*z-O*O-C*C;return 32*((_<0?0:(_*=_)*_*P.dot3(b,w,y))+(k<0?0:(k*=k)*k*j.dot3(M,g,E))+(Q<0?0:(Q*=Q)*Q*F.dot3(A,S,x))+(V<0?0:(V*=V)*V*T.dot3(z,O,C)))},e.perlin2=function(t,e){var r=Math.floor(t),n=Math.floor(e);t-=r,e-=n;var a=i[(r&=255)+o[n&=255]].dot2(t,e),l=i[r+o[n+1]].dot2(t,e-1),u=i[r+1+o[n]].dot2(t-1,e),s=i[r+1+o[n+1]].dot2(t-1,e-1),d=c(t);return f(f(a,u,d),f(l,s,d),c(e))},e.perlin3=function(t,e,r){var n=Math.floor(t),a=Math.floor(e),l=Math.floor(r);t-=n,e-=a,r-=l;var u=i[(n&=255)+o[(a&=255)+o[l&=255]]].dot3(t,e,r),s=i[n+o[a+o[l+1]]].dot3(t,e,r-1),d=i[n+o[a+1+o[l]]].dot3(t,e-1,r),h=i[n+o[a+1+o[l+1]]].dot3(t,e-1,r-1),m=i[n+1+o[a+o[l]]].dot3(t-1,e,r),v=i[n+1+o[a+o[l+1]]].dot3(t-1,e,r-1),p=i[n+1+o[a+1+o[l]]].dot3(t-1,e-1,r),b=i[n+1+o[a+1+o[l+1]]].dot3(t-1,e-1,r-1),w=c(t),y=c(e),M=c(r);return f(f(f(u,m,w),f(s,v,w),M),f(f(d,p,w),f(h,b,w),M),y)},t.exports=e},7932:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>l});var n=r(9601),a=r.n(n),o=r(2609),i=r.n(o)()(a());i.push([t.id,".OFTHYmcQoihyWjiVVqhQ{width:100%;height:100%;background:#000}",""]),i.locals={Section:"OFTHYmcQoihyWjiVVqhQ"};const l=i},3139:(t,e,r)=>{"use strict";r.d(e,{Z:()=>M});var n=r(6062),a=r.n(n),o=r(4036),i=r.n(o),l=r(6793),u=r.n(l),s=r(7892),c=r.n(s),f=r(1173),d=r.n(f),h=r(2464),m=r.n(h),v=r(7932),p={};p.styleTagTransform=m(),p.setAttributes=c(),p.insert=u().bind(null,"head"),p.domAPI=i(),p.insertStyleElement=d();var b=a()(v.default,p);if(!v.default.locals||t.hot.invalidate){var w=!v.default.locals,y=w?v:v.default.locals;t.hot.accept(7932,(e=>{v=r(7932),function(t,e,r){if(!t&&e||t&&!e)return!1;var n;for(n in t)if((!r||"default"!==n)&&t[n]!==e[n])return!1;for(n in e)if(!(r&&"default"===n||t[n]))return!1;return!0}(y,w?v:v.default.locals,w)?(y=w?v:v.default.locals,b(v.default)):t.hot.invalidate()}))}t.hot.dispose((function(){b()}));const M=v.default&&v.default.locals?v.default.locals:void 0}}]);