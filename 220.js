(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[220],{3314:(e,t,s)=>{"use strict";s.d(t,{a:()=>p});var r=s(3361),a=s(9557),i=s(2312),n=s(9461),o=s(2955);let c=e=>e(),l=()=>performance.now();function h(e,t){const s=e.findIndex(t);return s<0?e.length:s}const u=["primitive"].concat(Object.keys(o).filter((e=>/^[A-Z]/.test(e))).map((e=>e[0].toLowerCase()+e.slice(1)))),m=new class{constructor(e){let t=!0,s=!1,r=0,a=[],n=[],o=0;const u=new Set,m=new Set,p=new Set,d=e=>a.indexOf(e)<0&&a.splice(h(a,(t=>t.priority>e.priority)),0,e),f=()=>{if(!t){e(f);try{y()}catch(e){console.error(e)}}},g=()=>{t&&(t=!1,0==r&&(r=l(),e(f)))},b=[];this.setTimeout=(e,t)=>{const s=l()+t,r=()=>{const e=b.findIndex((e=>e.cancel==r));e>=0&&b.splice(e,1)},a=h(b,(e=>e.time>s)),i={time:s,handler:e,cancel:r};return b.splice(a,0,i),g(),i};const y=this.advance=()=>{const e=l();if(u.size&&(u.forEach(d),u.clear()),b.length&&c((()=>{const t=h(b,(t=>t.time>e));b.splice(0,t).forEach((e=>e.handler()))})),e>r){const t=Math.min(64,e-r);r=e,c((()=>{if(a.length){const e=n;for(let s=0;s<a.length;s++){const r=a[s];o=r.priority,r.idle||(i.OH.willAdvance(r),r.advance(t),r.idle||e.push(r))}o=0,n=a,n.length=0,a=e}(0,i.bl)(m,e),p.size&&(s=!0,(0,i.bl)(p,e),s=!1)}))}};this.start=e=>{o>e.priority?u.add(e):(d(e),g())},this.onFrame=e=>{m.add(e),g()},this.onWrite=e=>{s?e(r):p.add(e)}}}((()=>(0,r.z6)()));(0,r.gy)((()=>(m.advance(),!0))),a.OH.assign({createStringInterpolator:i.qS,colors:i.O9,frameLoop:m});const p=(0,n.Ld)(u,{applyAnimatedValues:r.nH}).animated},6220:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>z});var r=s(2955),a=s(2784),i=s(3361),n=s(6727),o=s(7539);class c extends r.Loader{constructor(e){super(e)}load(e,t,s,a){const i=this,n=""===this.path?r.LoaderUtils.extractUrlBase(e):this.path,o=new r.FileLoader(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,(function(s){try{t(i.parse(s,n))}catch(t){a?a(t):console.error(t),i.manager.itemError(e)}}),s,a)}setMaterialOptions(e){return this.materialOptions=e,this}parse(e,t){const s=e.split("\n");let r={};const a=/\s+/,i={};for(let e=0;e<s.length;e++){let t=s[e];if(t=t.trim(),0===t.length||"#"===t.charAt(0))continue;const n=t.indexOf(" ");let o=n>=0?t.substring(0,n):t;o=o.toLowerCase();let c=n>=0?t.substring(n+1):"";if(c=c.trim(),"newmtl"===o)r={name:c},i[c]=r;else if("ka"===o||"kd"===o||"ks"===o||"ke"===o){const e=c.split(a,3);r[o]=[parseFloat(e[0]),parseFloat(e[1]),parseFloat(e[2])]}else r[o]=c}const n=new l(this.resourcePath||t,this.materialOptions);return n.setCrossOrigin(this.crossOrigin),n.setManager(this.manager),n.setMaterials(i),n}}class l{constructor(e="",t={}){this.baseUrl=e,this.options=t,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=void 0!==this.options.side?this.options.side:r.FrontSide,this.wrap=void 0!==this.options.wrap?this.options.wrap:r.RepeatWrapping}setCrossOrigin(e){return this.crossOrigin=e,this}setManager(e){this.manager=e}setMaterials(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(e){if(!this.options)return e;const t={};for(const s in e){const r=e[s],a={};t[s]=a;for(const e in r){let t=!0,s=r[e];const i=e.toLowerCase();switch(i){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(s=[s[0]/255,s[1]/255,s[2]/255]),this.options&&this.options.ignoreZeroRGBs&&0===s[0]&&0===s[1]&&0===s[2]&&(t=!1)}t&&(a[i]=s)}}return t}preload(){for(const e in this.materialsInfo)this.create(e)}getIndex(e){return this.nameLookup[e]}getAsArray(){let e=0;for(const t in this.materialsInfo)this.materialsArray[e]=this.create(t),this.nameLookup[t]=e,e++;return this.materialsArray}create(e){return void 0===this.materials[e]&&this.createMaterial_(e),this.materials[e]}createMaterial_(e){const t=this,s=this.materialsInfo[e],a={name:e,side:this.side};function i(e,s){if(a[e])return;const r=t.getTextureParams(s,a),i=t.loadTexture((n=t.baseUrl,"string"!=typeof(o=r.url)||""===o?"":/^https?:\/\//i.test(o)?o:n+o));var n,o;i.repeat.copy(r.scale),i.offset.copy(r.offset),i.wrapS=t.wrap,i.wrapT=t.wrap,a[e]=i}for(const e in s){const t=s[e];let n;if(""!==t)switch(e.toLowerCase()){case"kd":a.color=(new r.Color).fromArray(t);break;case"ks":a.specular=(new r.Color).fromArray(t);break;case"ke":a.emissive=(new r.Color).fromArray(t);break;case"map_kd":i("map",t);break;case"map_ks":i("specularMap",t);break;case"map_ke":i("emissiveMap",t);break;case"norm":i("normalMap",t);break;case"map_bump":case"bump":i("bumpMap",t);break;case"map_d":i("alphaMap",t),a.transparent=!0;break;case"ns":a.shininess=parseFloat(t);break;case"d":n=parseFloat(t),n<1&&(a.opacity=n,a.transparent=!0);break;case"tr":n=parseFloat(t),this.options&&this.options.invertTrProperty&&(n=1-n),n>0&&(a.opacity=1-n,a.transparent=!0)}}return this.materials[e]=new r.MeshPhongMaterial(a),this.materials[e]}getTextureParams(e,t){const s={scale:new r.Vector2(1,1),offset:new r.Vector2(0,0)},a=e.split(/\s+/);let i;return i=a.indexOf("-bm"),i>=0&&(t.bumpScale=parseFloat(a[i+1]),a.splice(i,2)),i=a.indexOf("-s"),i>=0&&(s.scale.set(parseFloat(a[i+1]),parseFloat(a[i+2])),a.splice(i,4)),i=a.indexOf("-o"),i>=0&&(s.offset.set(parseFloat(a[i+1]),parseFloat(a[i+2])),a.splice(i,4)),s.url=a.join(" ").trim(),s}loadTexture(e,t,s,a,i){const n=void 0!==this.manager?this.manager:r.DefaultLoadingManager;let o=n.getHandler(e);null===o&&(o=new r.TextureLoader(n)),o.setCrossOrigin&&o.setCrossOrigin(this.crossOrigin);const c=o.load(e,s,a,i);return void 0!==t&&(c.mapping=t),c}}const h=/^[og]\s*(.+)?/,u=/^mtllib /,m=/^usemtl /,p=/^usemap /,d=new r.Vector3,f=new r.Vector3,g=new r.Vector3,b=new r.Vector3,y=new r.Vector3;function v(){const e={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&!1===this.object.fromDeclaration)return this.object.name=e,void(this.object.fromDeclaration=!1!==t);const s=this.object&&"function"==typeof this.object.currentMaterial?this.object.currentMaterial():void 0;if(this.object&&"function"==typeof this.object._finalize&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:!1!==t,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(e,t){const s=this._finalize(!1);s&&(s.inherited||s.groupCount<=0)&&this.materials.splice(s.index,1);const r={index:this.materials.length,name:e||"",mtllib:Array.isArray(t)&&t.length>0?t[t.length-1]:"",smooth:void 0!==s?s.smooth:this.smooth,groupStart:void 0!==s?s.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(e){const t={index:"number"==typeof e?e:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return t.clone=this.clone.bind(t),t}};return this.materials.push(r),r},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(e){const t=this.currentMaterial();if(t&&-1===t.groupEnd&&(t.groupEnd=this.geometry.vertices.length/3,t.groupCount=t.groupEnd-t.groupStart,t.inherited=!1),e&&this.materials.length>1)for(let e=this.materials.length-1;e>=0;e--)this.materials[e].groupCount<=0&&this.materials.splice(e,1);return e&&0===this.materials.length&&this.materials.push({name:"",smooth:this.smooth}),t}},s&&s.name&&"function"==typeof s.clone){const e=s.clone(0);e.inherited=!0,this.object.materials.push(e)}this.objects.push(this.object)},finalize:function(){this.object&&"function"==typeof this.object._finalize&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const s=parseInt(e,10);return 3*(s>=0?s-1:s+t/3)},parseNormalIndex:function(e,t){const s=parseInt(e,10);return 3*(s>=0?s-1:s+t/3)},parseUVIndex:function(e,t){const s=parseInt(e,10);return 2*(s>=0?s-1:s+t/2)},addVertex:function(e,t,s){const r=this.vertices,a=this.object.geometry.vertices;a.push(r[e+0],r[e+1],r[e+2]),a.push(r[t+0],r[t+1],r[t+2]),a.push(r[s+0],r[s+1],r[s+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,s){const r=this.normals,a=this.object.geometry.normals;a.push(r[e+0],r[e+1],r[e+2]),a.push(r[t+0],r[t+1],r[t+2]),a.push(r[s+0],r[s+1],r[s+2])},addFaceNormal:function(e,t,s){const r=this.vertices,a=this.object.geometry.normals;d.fromArray(r,e),f.fromArray(r,t),g.fromArray(r,s),y.subVectors(g,f),b.subVectors(d,f),y.cross(b),y.normalize(),a.push(y.x,y.y,y.z),a.push(y.x,y.y,y.z),a.push(y.x,y.y,y.z)},addColor:function(e,t,s){const r=this.colors,a=this.object.geometry.colors;void 0!==r[e]&&a.push(r[e+0],r[e+1],r[e+2]),void 0!==r[t]&&a.push(r[t+0],r[t+1],r[t+2]),void 0!==r[s]&&a.push(r[s+0],r[s+1],r[s+2])},addUV:function(e,t,s){const r=this.uvs,a=this.object.geometry.uvs;a.push(r[e+0],r[e+1]),a.push(r[t+0],r[t+1]),a.push(r[s+0],r[s+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,s,r,a,i,n,o,c){const l=this.vertices.length;let h=this.parseVertexIndex(e,l),u=this.parseVertexIndex(t,l),m=this.parseVertexIndex(s,l);if(this.addVertex(h,u,m),this.addColor(h,u,m),void 0!==n&&""!==n){const e=this.normals.length;h=this.parseNormalIndex(n,e),u=this.parseNormalIndex(o,e),m=this.parseNormalIndex(c,e),this.addNormal(h,u,m)}else this.addFaceNormal(h,u,m);if(void 0!==r&&""!==r){const e=this.uvs.length;h=this.parseUVIndex(r,e),u=this.parseUVIndex(a,e),m=this.parseUVIndex(i,e),this.addUV(h,u,m),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let s=0,r=e.length;s<r;s++){const r=this.parseVertexIndex(e[s],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const s=this.vertices.length,r=this.uvs.length;for(let t=0,r=e.length;t<r;t++)this.addVertexLine(this.parseVertexIndex(e[t],s));for(let e=0,s=t.length;e<s;e++)this.addUVLine(this.parseUVIndex(t[e],r))}};return e.startObject("",!1),e}class w extends r.Loader{constructor(e){super(e),this.materials=null}load(e,t,s,a){const i=this,n=new r.FileLoader(this.manager);n.setPath(this.path),n.setRequestHeader(this.requestHeader),n.setWithCredentials(this.withCredentials),n.load(e,(function(s){try{t(i.parse(s))}catch(t){a?a(t):console.error(t),i.manager.itemError(e)}}),s,a)}setMaterials(e){return this.materials=e,this}parse(e){const t=new v;-1!==e.indexOf("\r\n")&&(e=e.replace(/\r\n/g,"\n")),-1!==e.indexOf("\\\n")&&(e=e.replace(/\\\n/g,""));const s=e.split("\n");let a="",i="",n=0,o=[];const c="function"==typeof"".trimLeft;for(let e=0,r=s.length;e<r;e++)if(a=s[e],a=c?a.trimLeft():a.trim(),n=a.length,0!==n&&(i=a.charAt(0),"#"!==i))if("v"===i){const e=a.split(/\s+/);switch(e[0]){case"v":t.vertices.push(parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])),e.length>=7?t.colors.push(parseFloat(e[4]),parseFloat(e[5]),parseFloat(e[6])):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]));break;case"vt":t.uvs.push(parseFloat(e[1]),parseFloat(e[2]))}}else if("f"===i){const e=a.substr(1).trim().split(/\s+/),s=[];for(let t=0,r=e.length;t<r;t++){const r=e[t];if(r.length>0){const e=r.split("/");s.push(e)}}const r=s[0];for(let e=1,a=s.length-1;e<a;e++){const a=s[e],i=s[e+1];t.addFace(r[0],a[0],i[0],r[1],a[1],i[1],r[2],a[2],i[2])}}else if("l"===i){const e=a.substring(1).trim().split(" ");let s=[];const r=[];if(-1===a.indexOf("/"))s=e;else for(let t=0,a=e.length;t<a;t++){const a=e[t].split("/");""!==a[0]&&s.push(a[0]),""!==a[1]&&r.push(a[1])}t.addLineGeometry(s,r)}else if("p"===i){const e=a.substr(1).trim().split(" ");t.addPointGeometry(e)}else if(null!==(o=h.exec(a))){const e=(" "+o[0].substr(1).trim()).substr(1);t.startObject(e)}else if(m.test(a))t.object.startMaterial(a.substring(7).trim(),t.materialLibraries);else if(u.test(a))t.materialLibraries.push(a.substring(7).trim());else if(p.test(a))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if("s"===i){if(o=a.split(" "),o.length>1){const e=o[1].trim().toLowerCase();t.object.smooth="0"!==e&&"off"!==e}else t.object.smooth=!0;const e=t.object.currentMaterial();e&&(e.smooth=t.object.smooth)}else{if("\0"===a)continue;console.warn('THREE.OBJLoader: Unexpected line: "'+a+'"')}t.finalize();const l=new r.Group;if(l.materialLibraries=[].concat(t.materialLibraries),!0==!(1===t.objects.length&&0===t.objects[0].geometry.vertices.length))for(let e=0,s=t.objects.length;e<s;e++){const s=t.objects[e],a=s.geometry,i=s.materials,n="Line"===a.type,o="Points"===a.type;let c=!1;if(0===a.vertices.length)continue;const h=new r.BufferGeometry;h.setAttribute("position",new r.Float32BufferAttribute(a.vertices,3)),a.normals.length>0&&h.setAttribute("normal",new r.Float32BufferAttribute(a.normals,3)),a.colors.length>0&&(c=!0,h.setAttribute("color",new r.Float32BufferAttribute(a.colors,3))),!0===a.hasUVIndices&&h.setAttribute("uv",new r.Float32BufferAttribute(a.uvs,2));const u=[];for(let e=0,s=i.length;e<s;e++){const s=i[e],a=s.name+"_"+s.smooth+"_"+c;let l=t.materials[a];if(null!==this.materials)if(l=this.materials.create(s.name),!n||!l||l instanceof r.LineBasicMaterial){if(o&&l&&!(l instanceof r.PointsMaterial)){const e=new r.PointsMaterial({size:10,sizeAttenuation:!1});r.Material.prototype.copy.call(e,l),e.color.copy(l.color),e.map=l.map,l=e}}else{const e=new r.LineBasicMaterial;r.Material.prototype.copy.call(e,l),e.color.copy(l.color),l=e}void 0===l&&(l=n?new r.LineBasicMaterial:o?new r.PointsMaterial({size:1,sizeAttenuation:!1}):new r.MeshPhongMaterial,l.name=s.name,l.flatShading=!s.smooth,l.vertexColors=c,t.materials[a]=l),u.push(l)}let m;if(u.length>1){for(let e=0,t=i.length;e<t;e++){const t=i[e];h.addGroup(t.groupStart,t.groupCount,e)}m=n?new r.LineSegments(h,u):o?new r.Points(h,u):new r.Mesh(h,u)}else m=n?new r.LineSegments(h,u[0]):o?new r.Points(h,u[0]):new r.Mesh(h,u[0]);m.name=s.name,l.add(m)}else if(t.vertices.length>0){const e=new r.PointsMaterial({size:1,sizeAttenuation:!1}),s=new r.BufferGeometry;s.setAttribute("position",new r.Float32BufferAttribute(t.vertices,3)),t.colors.length>0&&void 0!==t.colors[0]&&(s.setAttribute("color",new r.Float32BufferAttribute(t.colors,3)),e.vertexColors=!0);const a=new r.Points(s,e);l.add(a)}return l}}var x=s(248),E=s(3314),j=s(7345),M=s(8790);function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(this,arguments)}function k(e){const t=(0,a.useRef)(),r=(0,i.U2)(c,s(3502).Z),n=(0,i.U2)(w,s(7676).Z,(e=>{r.preload(),e.setMaterials(r)}));return(0,i.xQ)((e=>{const s=e.clock.getElapsedTime();t.current&&(t.current.rotation.y=Math.sin(s/1)+3)})),a.createElement("primitive",L({ref:t,object:n},e))}function F({parameter:e,...t}){const s=(0,a.useRef)(),{scene:r}=(0,n.L)("boy.gltf");return(0,i.xQ)((e=>{const t=e.clock.getElapsedTime();s.current&&(s.current.rotation.y=Math.sin(t+2)+3)})),a.createElement("primitive",L({ref:s,object:r},t))}function A({parameter:e,...t}){const s=(0,a.useRef)(),{scene:r}=(0,n.L)("car.gltf");return(0,i.xQ)((t=>{t.clock.getElapsedTime(),s.current&&(Object.assign(s.current.position,e),s.current.rotation.y+=.01)})),a.createElement(E.a.primitive,L({ref:s,object:r},t))}function O({parameter:e,...t}){const s=(0,a.useRef)(),{scene:r}=(0,n.L)("dog.gltf");return(0,i.xQ)((e=>{const t=e.clock.getElapsedTime();s.current&&(s.current.rotation.y=Math.sin(2*t)+3)})),a.createElement("primitive",L({ref:s,object:r},t))}function V(e){const[t]=(0,x.xK)((()=>({rotation:[-Math.PI/2,0,0],...e})));return a.createElement("mesh",{ref:t,receiveShadow:!0},a.createElement("planeBufferGeometry",{attach:"geometry",args:[1009,1e3]}),a.createElement("shadowMaterial",{attach:"material",color:"#171717"}))}function C({position:e=[0,5,0],...t}){const{gl:s,camera:r}=(0,i.Ky)(),[n]=(0,x.EJ)((()=>({mass:1,rotation:[.4,.2,.5],position:e,...t})));return a.createElement(E.a.mesh,{receiveShadow:!0,castShadow:!0,ref:n},a.createElement("boxBufferGeometry",{attach:"geometry"}),a.createElement("meshLambertMaterial",{attach:"material",color:"hotpink"}))}function I(){const e=[1,1,1],[t,s]=(0,x.EJ)((()=>({mass:1,position:[5,5,0],args:e,isKinematic:!0})));return(0,i.xQ)((e=>{const t=e.clock.getElapsedTime();s.position.set(5*Math.sin(2*t)+5,5,5*Math.cos(2*t)),s.rotation.set(Math.sin(6*t),Math.cos(6*t),0)})),a.createElement("mesh",{ref:t,castShadow:!0,receiveShadow:!0},a.createElement("boxBufferGeometry",{attach:"geometry",args:e}),a.createElement("meshLambertMaterial",{attach:"material",color:"white",side:r.DoubleSide}))}function z(){const[e,t]=(0,a.useState)({x:4,y:0,z:-3});return(0,a.useEffect)((()=>{let e;return function t(){e=requestAnimationFrame(t)}(),()=>cancelAnimationFrame(e)}),[]),j[1],a.createElement("section",{className:M.Z.Demo},a.createElement("div",{className:M.Z.Range},a.createElement("input",{type:"range",min:"-10",max:"10",value:e.x,onChange:e=>t((t=>({...t,x:e.target.value})))})," ",a.createElement("input",{type:"range",min:"-10",max:"10",value:e.y,onChange:e=>t((t=>({...t,y:e.target.value})))})," ",a.createElement("input",{type:"range",min:"-10",max:"10",value:e.z,onChange:e=>t((t=>({...t,z:e.target.value})))})," ",JSON.stringify(e)),a.createElement(i.Xz,{shadowMap:!0,gl:{alpha:!1},camera:{position:[-1,2,5],fov:50}},a.createElement(a.Suspense,{fallback:"loading..."},a.createElement(F,{position:[2,0,-1],rotation:[0,3.5,0],scale:[.1,.1,.1],parameter:e}),a.createElement(A,{position:Object.values(e),rotation:[0,3.5,0],scale:[.1,.1,.1],parameter:e}),a.createElement(O,{position:[2,0,0],rotation:[0,3.5,0],scale:[.1,.1,.1],parameter:e}),a.createElement(k,{position:[-.8,0,-1],rotation:[0,3.5,0]})),a.createElement(o.z,null),a.createElement("color",{attach:"background",args:["lightblue"]}),a.createElement("hemisphereLight",{intensity:.35}),a.createElement("spotLight",{position:[10,10,10],angle:.3,penumbra:1,intensity:2,castShadow:!0}),a.createElement(x.wI,null,a.createElement(V,null),a.createElement(C,null),a.createElement(C,{position:[0,10,-2]}),a.createElement(C,{position:Object.values(e)}),a.createElement(I,null))))}},3502:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});const r=s.p+"f67a390d4ff6ddaa1ce5436a0d471cc6.mtl"},7676:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});const r=s.p+"2395df1a45e70c30ae55e3f138879ffc.obj"},7345:e=>{"use strict";e.exports=JSON.parse('[["#69d2e7","#a7dbd8","#e0e4cc","#f38630","#fa6900"],["#fe4365","#fc9d9a","#f9cdad","#c8c8a9","#83af9b"]]')}}]);