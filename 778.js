(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[778],{4115:(e,t,n)=>{"use strict";n.d(t,{m:()=>i});var a=n(2955),r=n(3361);const o=e=>e===Object(e)&&!Array.isArray(e)&&"function"!=typeof e;function i(e){const t=(0,r.U2)(a.TextureLoader,o(e)?Object.values(e):e);if(o(e)){const n=Object.keys(e),a={};return n.forEach((e=>Object.assign(a,{[e]:t[n.indexOf(e)]}))),a}return t}i.preload=e=>r.U2.preload(a.TextureLoader,e)},3778:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>b});var a=n(2784),r=n(3361),o=n(2955),i=n(5654),s=n(5721);const c=a.forwardRef((({makeDefault:e,manual:t,...n},o)=>{const c=(0,r.Ky)((({set:e})=>e)),u=(0,r.Ky)((({camera:e})=>e)),l=(0,r.Ky)((({size:e})=>e)),m=a.useRef();return a.useLayoutEffect((()=>{const{current:e}=m;e&&!t&&(e.aspect=l.width/l.height,e.updateProjectionMatrix())}),[l,n]),a.useLayoutEffect((()=>{if(e&&m.current){const e=u;return c((()=>({camera:m.current}))),()=>c((()=>({camera:e})))}}),[u,m,e,c]),a.createElement("perspectiveCamera",(0,i.Z)({ref:(0,s.Z)([m,o])},n))}));var u=n(2467);let l=0;const m=(0,u.Z)((e=>(o.DefaultLoadingManager.onStart=(t,n,a)=>{e({active:!0,item:t,loaded:n,total:a,progress:(n-l)/(a-l)*100})},o.DefaultLoadingManager.onLoad=()=>{e({active:!1})},o.DefaultLoadingManager.onError=t=>e((e=>({errors:[...e.errors,t]}))),o.DefaultLoadingManager.onProgress=(t,n,a)=>{n===a&&(l=a),e({active:!0,item:t,loaded:n,total:a,progress:(n-l)/(a-l)*100||100})},{errors:[],active:!1,progress:0,item:"",loaded:0,total:0}))),p=e=>`Loading ${e}%`;function f({containerStyles:e,innerStyles:t,barStyles:n,dataStyles:r,dataInterpolation:o=p,initialState:i=(e=>e)}){const{active:s,progress:c}=m(),u=a.useRef(0),l=a.useRef(0),f=a.useRef(null),[h,g]=a.useState(i(s));a.useEffect((()=>{let e;return s!==h&&(e=setTimeout((()=>g(s)),300)),()=>clearTimeout(e)}),[h,s]);const v=a.useCallback((()=>{f.current&&(u.current+=(c-u.current)/2,(u.current>.95*c||100===c)&&(u.current=c),f.current.innerText=o(u.current),u.current<c&&(l.current=requestAnimationFrame(v)))}),[o,c]);return a.useEffect((()=>(v(),()=>cancelAnimationFrame(l.current))),[v]),h?a.createElement("div",{style:{...d.container,opacity:s?1:0,...e}},a.createElement("div",null,a.createElement("div",{style:{...d.inner,...t}},a.createElement("div",{style:{...d.bar,transform:`scaleX(${c/100})`,...n}}),a.createElement("span",{ref:f,style:{...d.data,...r}})))):null}const d={container:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"#171717",display:"flex",alignItems:"center",justifyContent:"center",transition:"opacity 300ms ease",zIndex:1e3},inner:{width:100,height:3,background:"#272727",textAlign:"center"},bar:{height:3,width:"100%",background:"white",transition:"transform 200ms",transformOrigin:"left center"},data:{display:"inline-block",position:"relative",fontVariantNumeric:"tabular-nums",marginTop:"0.8em",color:"#f0f0f0",fontSize:"0.6em",fontFamily:'-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", "Helvetica Neue", Helvetica, Arial, Roboto, Ubuntu, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',whiteSpace:"nowrap"}};var h=n(7539),g=n(4115),v=n(8790);function b(){return a.createElement("section",{className:v.Z.Demo},a.createElement(r.Xz,null,a.createElement(a.Suspense,{fallback:null},a.createElement("group",null,a.createElement(y,null)),a.createElement("ambientLight",null)),a.createElement(c,{position:[.5,.5,.5],near:.01,far:1e3,makeDefault:!0}),a.createElement(h.z,{screenSpacePanning:!1})),a.createElement(f,null))}function y(){const e=(0,g.m)(n(3255).Z);e.encoding=o.sRGBEncoding,e.wrapS=o.RepeatWrapping,e.wrapT=o.RepeatWrapping,e.anisotropy=16;const t=(0,g.m)(n(6794).Z);return t.encoding=o.sRGBEncoding,t.wrapS=o.RepeatWrapping,t.wrapT=o.RepeatWrapping,t.anisotropy=16,a.createElement("mesh",{position:[0,0,0],rotation:[-Math.PI/2,0,0],scale:[1/1024,1/1024,1/1024]},a.createElement("planeBufferGeometry",{args:[1024,1024,256,256]}),a.createElement("shaderMaterial",{uniforms:{bumpTexture:{value:e},bumpScale:{value:50},terrainTexture:{value:t}},vertexShader:'\n// Uniforms are data that are shared between shaders\n// The contain data that are uniform across the entire frame.\n// The heightmap and scaling constant for each point are uniforms in this respect.\n\n// A uniform to contain the heightmap image\nuniform sampler2D bumpTexture;\n// A uniform to contain the scaling constant\nuniform float bumpScale;\n\n// Varyings are variables whose values are decided in the vertext shader\n// But whose values are then needed in the fragment shader\n\n// A variable to store the height of the point\nvarying float vAmount;\n// The UV mapping coordinates of a vertex\nvarying vec2 vUV;\n\nvoid main()\n{\n    // The "coordinates" in UV mapping representation\n    vUV = uv;\n\n    // The heightmap data at those coordinates\n    vec4 bumpData = texture2D(bumpTexture, uv);\n\n    // height map is grayscale, so it doesn\'t matter if you use r, g, or b.\n    vAmount = bumpData.r;\n\n    // move the position along the normal\n    vec3 newPosition = position + normal * bumpScale * vAmount;\n\n    // Compute the position of the vertex using a standard formula\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);\n}\n',fragmentShader:"\n// A uniform fot the terrain texture image\nuniform sampler2D terrainTexture;\n\n// Get the varyings from the vertex shader\nvarying vec2 vUV;\n// vAmount isn't really used, but could be if necessary\nvarying float vAmount;\n\nvoid main()\n{\n    // Get the color of the fragment from the texture map\n    // at that coordinate in the UV mapping\n    gl_FragColor = texture2D(terrainTexture, vUV);\n}\n",side:o.DoubleSide}))}},6794:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"83745453ec5771b59998885663182c77.png"},3255:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"4e40045d0b1f188db9b5c661548a8ebe.png"},5721:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=function(e){return function(t){e.forEach((function(e){"function"==typeof e?e(t):null!=e&&(e.current=t)}))}}}}]);