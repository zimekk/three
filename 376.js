"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[376],{3314:(e,t,r)=>{r.d(t,{a:()=>u});var n=r(3747),a=r(9557),o=r(5488),s=r(9461),i=r(2955);const l=["primitive"].concat(Object.keys(i).filter((e=>/^[A-Z]/.test(e))).map((e=>e[0].toLowerCase()+e.slice(1))));a.Globals.assign({createStringInterpolator:o.qS,colors:o.O9,frameLoop:"demand"}),(0,n.gy)((()=>{o.Wn.advance()}));const u=(0,s.Ld)(l,{applyAnimatedValues:n.nH}).animated},8185:(e,t,r)=>{r.d(t,{q:()=>u});var n=r(2784),a=r(3747),o=r(2955);class s extends o.DataTextureLoader{constructor(e){super(e),this.type=o.UnsignedByteType}parse(e){const t=function(e,t){switch(e){case 1:console.error("THREE.RGBELoader Read Error: "+(t||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(t||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(t||""));break;default:console.error("THREE.RGBELoader: Error: "+(t||""))}return-1},r=function(e,t,r){t=t||1024;let n=e.pos,a=-1,o=0,s="",i=String.fromCharCode.apply(null,new Uint16Array(e.subarray(n,n+128)));for(;0>(a=i.indexOf("\n"))&&o<t&&n<e.byteLength;)s+=i,o+=i.length,n+=128,i+=String.fromCharCode.apply(null,new Uint16Array(e.subarray(n,n+128)));return-1<a&&(!1!==r&&(e.pos+=o+a+1),s+i.slice(0,a))},n=function(e,t,r,n){const a=e[t+3],o=Math.pow(2,a-128)/255;r[n+0]=e[t+0]*o,r[n+1]=e[t+1]*o,r[n+2]=e[t+2]*o},a=function(e,t,r,n){const a=e[t+3],s=Math.pow(2,a-128)/255;r[n+0]=o.DataUtils.toHalfFloat(e[t+0]*s),r[n+1]=o.DataUtils.toHalfFloat(e[t+1]*s),r[n+2]=o.DataUtils.toHalfFloat(e[t+2]*s)},s=new Uint8Array(e);s.pos=0;const i=function(e){const n=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,a=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,o=/^\s*FORMAT=(\S+)\s*$/,s=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,i={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let l,u;if(e.pos>=e.byteLength||!(l=r(e)))return t(1,"no header found");if(!(u=l.match(/^#\?(\S+)/)))return t(3,"bad initial token");for(i.valid|=1,i.programtype=u[1],i.string+=l+"\n";l=r(e),!1!==l;)if(i.string+=l+"\n","#"!==l.charAt(0)){if((u=l.match(n))&&(i.gamma=parseFloat(u[1],10)),(u=l.match(a))&&(i.exposure=parseFloat(u[1],10)),(u=l.match(o))&&(i.valid|=2,i.format=u[1]),(u=l.match(s))&&(i.valid|=4,i.height=parseInt(u[1],10),i.width=parseInt(u[2],10)),2&i.valid&&4&i.valid)break}else i.comments+=l+"\n";return 2&i.valid?4&i.valid?i:t(3,"missing image size specifier"):t(3,"missing format specifier")}(s);if(-1!==i){const e=i.width,r=i.height,l=function(e,r,n){const a=r;if(a<8||a>32767||2!==e[0]||2!==e[1]||128&e[2])return new Uint8Array(e);if(a!==(e[2]<<8|e[3]))return t(3,"wrong scanline width");const o=new Uint8Array(4*r*n);if(!o.length)return t(4,"unable to allocate buffer space");let s=0,i=0;const l=4*a,u=new Uint8Array(4),c=new Uint8Array(l);let d=n;for(;d>0&&i<e.byteLength;){if(i+4>e.byteLength)return t(1);if(u[0]=e[i++],u[1]=e[i++],u[2]=e[i++],u[3]=e[i++],2!=u[0]||2!=u[1]||(u[2]<<8|u[3])!=a)return t(3,"bad rgbe scanline format");let r,n=0;for(;n<l&&i<e.byteLength;){r=e[i++];const a=r>128;if(a&&(r-=128),0===r||n+r>l)return t(3,"bad scanline data");if(a){const t=e[i++];for(let e=0;e<r;e++)c[n++]=t}else c.set(e.subarray(i,i+r),n),n+=r,i+=r}const p=a;for(let e=0;e<p;e++){let t=0;o[s]=c[e+t],t+=a,o[s+1]=c[e+t],t+=a,o[s+2]=c[e+t],t+=a,o[s+3]=c[e+t],s+=4}d--}return o}(s.subarray(s.pos),e,r);if(-1!==l){let t,s,u,c;switch(this.type){case o.UnsignedByteType:t=l,s=o.RGBEFormat,u=o.UnsignedByteType;break;case o.FloatType:c=l.length/4*3;const e=new Float32Array(c);for(let t=0;t<c;t++)n(l,4*t,e,3*t);t=e,s=o.RGBFormat,u=o.FloatType;break;case o.HalfFloatType:c=l.length/4*3;const r=new Uint16Array(c);for(let e=0;e<c;e++)a(l,4*e,r,3*e);t=r,s=o.RGBFormat,u=o.HalfFloatType;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type)}return{width:e,height:r,data:t,header:i.string,gamma:i.gamma,exposure:i.exposure,format:s,type:u}}}return null}setDataType(e){return this.type=e,this}load(e,t,r,n){return super.load(e,(function(e,r){switch(e.type){case o.UnsignedByteType:e.encoding=o.RGBEEncoding,e.minFilter=o.NearestFilter,e.magFilter=o.NearestFilter,e.generateMipmaps=!1,e.flipY=!0;break;case o.FloatType:case o.HalfFloatType:e.encoding=o.LinearEncoding,e.minFilter=o.LinearFilter,e.magFilter=o.LinearFilter,e.generateMipmaps=!1,e.flipY=!0}t&&t(e,r)}),r,n)}}var i=r(357);const l={sunset:"venice_sunset_1k.hdr",dawn:"kiara_1_dawn_1k.hdr",night:"dikhololo_night_1k.hdr",warehouse:"empty_warehouse_01_1k.hdr",forest:"forest_slope_1k.hdr",apartment:"lebombo_1k.hdr",studio:"studio_small_03_1k.hdr",city:"potsdamer_platz_1k.hdr",park:"rooitou_park_1k.hdr",lobby:"st_fagans_interior_1k.hdr"};function u({background:e=!1,files:t=["/px.png","/nx.png","/py.png","/ny.png","/pz.png","/nz.png"],path:r="",preset:u,scene:c,extensions:d}){if(u){if(!(u in l))throw new Error("Preset must be one of: "+Object.keys(l).join(", "));t=l[u],r="https://rawcdn.githack.com/pmndrs/drei-assets/aa3600359ba664d546d05821bcbca42013587df2/hdri/"}const p=(0,a.Ky)((({scene:e})=>e)),m=(0,a.Ky)((({gl:e})=>e)),f=Array.isArray(t),v=f?o.CubeTextureLoader:s,h=(0,a.U2)(v,f?[t]:t,(e=>{e.setPath(r),d&&d(e)})),g=f?h[0]:h,y=(0,i.G)((()=>new Promise((e=>{const t=new o.PMREMGenerator(m),r=function(e,t,r){return r?(t.compileEquirectangularShader(),t.fromCubemap(e).texture):t.fromEquirectangular(e).texture}(g,t,f);t.dispose(),e(r)}))),g);return n.useLayoutEffect((()=>{const t=c?c.background:p.background,r=c?c.environment:p.environment;return c?(c.environment=y,e&&(c.background=y)):(p.environment=y,e&&(p.background=y)),()=>{c?(c.environment=r,c.background=t):(p.environment=r,p.background=t),i.G.clear(g),y.dispose()}}),[y,e,c]),null}},9376:(e,t,r)=>{r.r(t),r.d(t,{default:()=>j});var n=r(2955),a=r(2784),o=r(3747),s=r(7896);const i={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:"\n      varying vec2 vUv;\n\n      void main() {\n\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n      }\n  ",fragmentShader:"\n    uniform sampler2D tDiffuse;\n    uniform float h;\n\n    varying vec2 vUv;\n\n    void main() {\n\n    \tvec4 sum = vec4( 0.0 );\n\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;\n\n    \tgl_FragColor = sum;\n\n    }\n  "},l={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:"\n    varying vec2 vUv;\n\n    void main() {\n\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n    }\n  ",fragmentShader:"\n  \n  uniform sampler2D tDiffuse;\n  uniform float v;\n\n  varying vec2 vUv;\n\n  void main() {\n\n    vec4 sum = vec4( 0.0 );\n\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;\n\n    gl_FragColor = sum;\n\n  }\n  "},u=a.forwardRef((({scale:e,frames:t=1/0,opacity:r=1,width:u=1,height:c=1,blur:d=1,far:p=10,resolution:m=256,...f},v)=>{const h=(0,o.Ky)((({scene:e})=>e)),g=(0,o.Ky)((({gl:e})=>e)),y=a.useRef();u*=Array.isArray(e)?e[0]:e||1,c*=Array.isArray(e)?e[1]:e||1;const[b,x,k,U,w,E,D]=a.useMemo((()=>{const e=new n.WebGLRenderTarget(m,m),t=new n.WebGLRenderTarget(m,m);t.texture.generateMipmaps=e.texture.generateMipmaps=!1;const r=new n.PlaneBufferGeometry(u,c).rotateX(Math.PI/2),a=new n.Mesh(r),o=new n.MeshDepthMaterial;o.depthTest=o.depthWrite=!1,o.onBeforeCompile=e=>e.fragmentShader=e.fragmentShader.replace("1.0 - fragCoordZ ), opacity );","0.0 ), ( 1.0 - fragCoordZ ) * 1.0 );");const s=new n.ShaderMaterial(i),d=new n.ShaderMaterial(l);return d.depthTest=s.depthTest=!1,[e,r,o,a,s,d,t]}),[m,u,c,e]);let M=0;return(0,o.xQ)((()=>{if(y.current&&(t===1/0||M<t)){const e=h.background;h.background=null,h.overrideMaterial=k,g.setRenderTarget(b),g.render(h,y.current),h.overrideMaterial=null,U.material=w,U.material.uniforms.tDiffuse.value=b.texture,w.uniforms.h.value=d/256,g.setRenderTarget(D),g.render(U,y.current),U.material=E,U.material.uniforms.tDiffuse.value=D.texture,E.uniforms.v.value=d/256,g.setRenderTarget(b),g.render(U,y.current),g.setRenderTarget(null),h.background=e,M++}})),a.createElement("group",(0,s.Z)({"rotation-x":Math.PI/2},f,{ref:v}),a.createElement("mesh",{geometry:x,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},a.createElement("meshBasicMaterial",{map:b.texture,transparent:!0,opacity:r})),a.createElement("orthographicCamera",{ref:y,args:[-u/2,u/2,c/2,-c/2,0,p]}))}));var c=r(6727),d=r(8185),p=r(9557),m=r(3314),f=r(9832),v=r(5488),h=r(9461);function g(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}const y=["style","children","scrollTop","scrollLeft"],b=/^--/;function x(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||b.test(e)||U.hasOwnProperty(e)&&U[e]?(""+t).trim():t+"px"}const k={};let U={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const w=["Webkit","Ms","Moz","O"];U=Object.keys(U).reduce(((e,t)=>(w.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),U);const E=["x","y","z"],D=/^(matrix|translate|scale|rotate|skew)/,M=/^(translate)/,_=/^(rotate|skew)/,T=(e,t)=>v.is.num(e)&&0!==e?e+t:e,S=(e,t)=>v.is.arr(e)?e.every((e=>S(e,t))):v.is.num(e)?e===t:parseFloat(e)===t;class R extends h.rS{constructor(e){let{x:t,y:r,z:n}=e,a=g(e,E);const o=[],s=[];(t||r||n)&&(o.push([t||0,r||0,n||0]),s.push((e=>[`translate3d(${e.map((e=>T(e,"px"))).join(",")})`,S(e,0)]))),(0,v.rU)(a,((e,t)=>{if("transform"===t)o.push([e||""]),s.push((e=>[e,""===e]));else if(D.test(t)){if(delete a[t],v.is.und(e))return;const r=M.test(t)?"px":_.test(t)?"deg":"";o.push((0,v.qo)(e)),s.push("rotate3d"===t?([e,t,n,a])=>[`rotate3d(${e},${t},${n},${T(a,r)})`,S(a,0)]:e=>[`${t}(${e.map((e=>T(e,r))).join(",")})`,S(e,t.startsWith("scale")?1:0)])}})),o.length&&(a.transform=new C(o,s)),super(a)}}class C extends v.B0{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return(0,v.S6)(this.inputs,((r,n)=>{const a=(0,v.je)(r[0]),[o,s]=this.transforms[n](v.is.arr(a)?a:r.map(v.je));e+=" "+o,t=t&&s})),t?"none":e}observerAdded(e){1==e&&(0,v.S6)(this.inputs,(e=>(0,v.S6)(e,(e=>(0,v.j$)(e)&&(0,v.UI)(e,this)))))}observerRemoved(e){0==e&&(0,v.S6)(this.inputs,(e=>(0,v.S6)(e,(e=>(0,v.j$)(e)&&(0,v.iL)(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),(0,v.k0)(this,e)}}const L=["scrollTop","scrollLeft"];p.Globals.assign({batchedUpdates:f.unstable_batchedUpdates,createStringInterpolator:v.qS,colors:v.O9});const A=(0,h.Ld)(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,n=t,{style:a,children:o,scrollTop:s,scrollLeft:i}=n,l=g(n,y),u=Object.values(l),c=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:k[t]||(k[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in a)if(a.hasOwnProperty(t)){const r=x(t,a[t]);b.test(t)?e.style.setProperty(t,r):e.style[t]=r}c.forEach(((t,r)=>{e.setAttribute(t,u[r])})),void 0!==s&&(e.scrollTop=s),void 0!==i&&(e.scrollLeft=i)},createAnimatedStyle:e=>new R(e),getComponentProps:e=>g(e,L)}).animated;var F=r(6432);function O(){return O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},O.apply(this,arguments)}const P=new n.Vector3;function G({open:e,hinge:t,...s}){const i=(0,a.useRef)(),{nodes:l,materials:u}=(0,c.L)(r(3094).Z),[d,p]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{document.body.style.cursor=d?"pointer":"auto"}),[d]),(0,o.xQ)((t=>{const r=t.clock.getElapsedTime();t.camera.position.lerp(P.set(0,0,e?-24:-32),.1),t.camera.lookAt(0,0,0),i.current.rotation.x=n.MathUtils.lerp(i.current.rotation.x,e?Math.cos(r/2)/8+.25:0,.1),i.current.rotation.y=n.MathUtils.lerp(i.current.rotation.y,e?Math.sin(r/4)/4:0,.1),i.current.rotation.z=n.MathUtils.lerp(i.current.rotation.z,e?Math.sin(r/4)/4:0,.1),i.current.position.y=n.MathUtils.lerp(i.current.position.y,e?(-2+Math.sin(r))/3:-4.3,.1)})),a.createElement("group",O({ref:i},s,{onPointerOver:e=>(e.stopPropagation(),p(!0)),onPointerOut:e=>p(!1),dispose:null}),a.createElement(m.a.group,{"rotation-x":t,position:[0,-.04,.41]},a.createElement("group",{position:[0,2.96,-.13],rotation:[Math.PI/2,0,0]},a.createElement("mesh",{material:u.aluminium,geometry:l.Cube008.geometry}),a.createElement("mesh",{material:u["matte.001"],geometry:l.Cube008_1.geometry}),a.createElement("mesh",{material:u["screen.001"],geometry:l.Cube008_2.geometry}))),a.createElement("mesh",{material:u.keys,geometry:l.keyboard.geometry,position:[1.79,0,3.45]}),a.createElement("group",{position:[0,-.1,3.39]},a.createElement("mesh",{material:u.aluminium,geometry:l.Cube002.geometry}),a.createElement("mesh",{material:u.trackpad,geometry:l.Cube002_1.geometry})),a.createElement("mesh",{material:u.touchbar,geometry:l.touchbar.geometry,position:[0,-.03,1.2]}))}function j(){const[e,t]=(0,a.useState)(!1),r=(0,p.useSpring)({open:Number(e)});return a.createElement(A.main,{className:F.Z.Main,style:{background:r.open.to([0,1],["#f0f0f0","#d25578"])}},a.createElement(A.h1,{className:F.Z.Title,style:{opacity:r.open.to([0,1],[1,0]),transform:r.open.to((e=>`translate3d(-50%,${50*e-100}px,0)`))}},"hello"),a.createElement(o.Xz,{dpr:[1,2],camera:{position:[0,0,0],fov:35}},a.createElement(m.a.pointLight,{position:[10,10,10],intensity:1.5,color:r.open.to([0,1],["#f0f0f0","#d25578"])}),a.createElement(a.Suspense,{fallback:null},a.createElement("group",{rotation:[0,Math.PI,0],onClick:r=>(r.stopPropagation(),t(!e))},a.createElement(G,{open:e,hinge:r.open.to([0,1],[1.575,-.425])})),a.createElement(d.q,{preset:"city"})),a.createElement(u,{"rotation-x":Math.PI/2,position:[0,-4.5,0],opacity:.4,width:20,height:20,blur:2,far:4.5})))}},7831:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r(9601),a=r.n(n),o=r(2609),s=r.n(o)()(a());s.push([e.id,".n_aHC6PVTDLkMYR5behe{height:100%}.n_aHC6PVTDLkMYR5behe .W8BMyXtvxSLU_txj6216{margin:0;padding:0;position:absolute;top:50%;left:50%;transform:translate3d(-50%, -50%, 0);font-weight:600;font-size:8em;letter-spacing:-0.075em;white-space:nowrap}",""]),s.locals={Main:"n_aHC6PVTDLkMYR5behe",Title:"W8BMyXtvxSLU_txj6216"};const i=s},3094:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"a5715f0d5ef8c6951eb3e5bc236501a2.glb"},6432:(e,t,r)=>{r.d(t,{Z:()=>x});var n=r(6062),a=r.n(n),o=r(4036),s=r.n(o),i=r(6793),l=r.n(i),u=r(7892),c=r.n(u),d=r(1173),p=r.n(d),m=r(2464),f=r.n(m),v=r(7831),h={};h.styleTagTransform=f(),h.setAttributes=c(),h.insert=l().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=p();var g=a()(v.default,h);if(!v.default.locals||e.hot.invalidate){var y=!v.default.locals,b=y?v:v.default.locals;e.hot.accept(7831,(t=>{v=r(7831),function(e,t,r){if(!e&&t||e&&!t)return!1;var n;for(n in e)if((!r||"default"!==n)&&e[n]!==t[n])return!1;for(n in t)if(!(r&&"default"===n||e[n]))return!1;return!0}(b,y?v:v.default.locals,y)?(b=y?v:v.default.locals,g(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){g()}));const x=v.default&&v.default.locals?v.default.locals:void 0}}]);