(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[539],{7539:(e,t,n)=>{"use strict";n.d(t,{z:()=>l});var o=n(5654),a=n(2784),i=n(4194),c=n(8784),s=n(2955);class r extends s.EventDispatcher{constructor(e,t){super(),(0,c.Z)(this,"object",void 0),(0,c.Z)(this,"domElement",void 0),(0,c.Z)(this,"enabled",!0),(0,c.Z)(this,"target",new s.Vector3),(0,c.Z)(this,"minDistance",0),(0,c.Z)(this,"maxDistance",1/0),(0,c.Z)(this,"minZoom",0),(0,c.Z)(this,"maxZoom",1/0),(0,c.Z)(this,"minPolarAngle",0),(0,c.Z)(this,"maxPolarAngle",Math.PI),(0,c.Z)(this,"minAzimuthAngle",-1/0),(0,c.Z)(this,"maxAzimuthAngle",1/0),(0,c.Z)(this,"enableDamping",!1),(0,c.Z)(this,"dampingFactor",.05),(0,c.Z)(this,"enableZoom",!0),(0,c.Z)(this,"zoomSpeed",1),(0,c.Z)(this,"enableRotate",!0),(0,c.Z)(this,"rotateSpeed",1),(0,c.Z)(this,"enablePan",!0),(0,c.Z)(this,"panSpeed",1),(0,c.Z)(this,"screenSpacePanning",!0),(0,c.Z)(this,"keyPanSpeed",7),(0,c.Z)(this,"autoRotate",!1),(0,c.Z)(this,"autoRotateSpeed",2),(0,c.Z)(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),(0,c.Z)(this,"mouseButtons",{LEFT:s.MOUSE.ROTATE,MIDDLE:s.MOUSE.DOLLY,RIGHT:s.MOUSE.PAN}),(0,c.Z)(this,"touches",{ONE:s.TOUCH.ROTATE,TWO:s.TOUCH.DOLLY_PAN}),(0,c.Z)(this,"target0",void 0),(0,c.Z)(this,"position0",void 0),(0,c.Z)(this,"zoom0",void 0),(0,c.Z)(this,"_domElementKeyEvents",null),(0,c.Z)(this,"getPolarAngle",void 0),(0,c.Z)(this,"getAzimuthalAngle",void 0),(0,c.Z)(this,"listenToKeyEvents",void 0),(0,c.Z)(this,"saveState",void 0),(0,c.Z)(this,"reset",void 0),(0,c.Z)(this,"update",void 0),(0,c.Z)(this,"connect",void 0),(0,c.Z)(this,"dispose",void 0),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object instanceof s.PerspectiveCamera?this.object.zoom:1,this.getPolarAngle=()=>m.phi,this.getAzimuthalAngle=()=>m.theta,this.listenToKeyEvents=e=>{e.addEventListener("keydown",F),this._domElementKeyEvents=e},this.saveState=()=>{n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object instanceof s.PerspectiveCamera?n.object.zoom:1},this.reset=()=>{n.target.copy(n.target0),n.object.position.copy(n.position0),n.object instanceof s.PerspectiveCamera&&(n.object.zoom=n.zoom0,n.object.updateProjectionMatrix()),n.dispatchEvent(o),n.update(),l=r.NONE},this.update=(()=>{const t=new s.Vector3,a=(new s.Quaternion).setFromUnitVectors(e.up,new s.Vector3(0,1,0)),i=a.clone().invert(),c=new s.Vector3,E=new s.Quaternion,v=2*Math.PI;return function(){const e=n.object.position;t.copy(e).sub(n.target),t.applyQuaternion(a),m.setFromVector3(t),n.autoRotate&&l===r.NONE&&A(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(m.theta+=h.theta*n.dampingFactor,m.phi+=h.phi*n.dampingFactor):(m.theta+=h.theta,m.phi+=h.phi);let s=n.minAzimuthAngle,f=n.maxAzimuthAngle;return isFinite(s)&&isFinite(f)&&(s<-Math.PI?s+=v:s>Math.PI&&(s-=v),f<-Math.PI?f+=v:f>Math.PI&&(f-=v),m.theta=s<=f?Math.max(s,Math.min(f,m.theta)):m.theta>(s+f)/2?Math.max(s,m.theta):Math.min(f,m.theta)),m.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,m.phi)),m.makeSafe(),m.radius*=p,m.radius=Math.max(n.minDistance,Math.min(n.maxDistance,m.radius)),!0===n.enableDamping?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),t.setFromSpherical(m),t.applyQuaternion(i),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(h.theta*=1-n.dampingFactor,h.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(h.set(0,0,0),d.set(0,0,0)),p=1,!!(b||c.distanceToSquared(n.object.position)>u||8*(1-E.dot(n.object.quaternion))>u)&&(n.dispatchEvent(o),c.copy(n.object.position),E.copy(n.object.quaternion),b=!1,!0)}})(),this.connect=e=>{e===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),n.domElement=e,n.domElement.addEventListener("contextmenu",W),n.domElement.addEventListener("pointerdown",V),n.domElement.addEventListener("wheel",I),n.domElement.addEventListener("touchstart",K),n.domElement.addEventListener("touchend",B),n.domElement.addEventListener("touchmove",G)},this.dispose=()=>{var e,t,o,a,i,c,s,r;null===(e=n.domElement)||void 0===e||e.removeEventListener("contextmenu",W),null===(t=n.domElement)||void 0===t||t.removeEventListener("pointerdown",V),null===(o=n.domElement)||void 0===o||o.removeEventListener("wheel",I),null===(a=n.domElement)||void 0===a||a.removeEventListener("touchstart",K),null===(i=n.domElement)||void 0===i||i.removeEventListener("touchend",B),null===(c=n.domElement)||void 0===c||c.removeEventListener("touchmove",G),null===(s=n.domElement)||void 0===s||s.ownerDocument.removeEventListener("pointermove",z),null===(r=n.domElement)||void 0===r||r.ownerDocument.removeEventListener("pointerup",X),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",F)};const n=this,o={type:"change"},a={type:"start"},i={type:"end"},r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=r.NONE;const u=1e-6,m=new s.Spherical,h=new s.Spherical;let p=1;const d=new s.Vector3;let b=!1;const E=new s.Vector2,v=new s.Vector2,f=new s.Vector2,g=new s.Vector2,O=new s.Vector2,y=new s.Vector2,T=new s.Vector2,P=new s.Vector2,w=new s.Vector2;function Z(){return Math.pow(.95,n.zoomSpeed)}function A(e){h.theta-=e}function L(e){h.phi-=e}const j=(()=>{const e=new s.Vector3;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),d.add(e)}})(),N=(()=>{const e=new s.Vector3;return function(t,o){!0===n.screenSpacePanning?e.setFromMatrixColumn(o,1):(e.setFromMatrixColumn(o,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),d.add(e)}})(),M=(()=>{const e=new s.Vector3;return function(t,o){const a=n.domElement;if(a&&n.object instanceof s.PerspectiveCamera&&n.object.isPerspectiveCamera){const i=n.object.position;e.copy(i).sub(n.target);let c=e.length();c*=Math.tan(n.object.fov/2*Math.PI/180),j(2*t*c/a.clientHeight,n.object.matrix),N(2*o*c/a.clientHeight,n.object.matrix)}else a&&n.object instanceof s.OrthographicCamera&&n.object.isOrthographicCamera?(j(t*(n.object.right-n.object.left)/n.object.zoom/a.clientWidth,n.object.matrix),N(o*(n.object.top-n.object.bottom)/n.object.zoom/a.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function D(e){n.object instanceof s.PerspectiveCamera&&n.object.isPerspectiveCamera?p/=e:n.object instanceof s.OrthographicCamera&&n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),b=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(e){n.object instanceof s.PerspectiveCamera&&n.object.isPerspectiveCamera?p*=e:n.object instanceof s.OrthographicCamera&&n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),b=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function C(e){E.set(e.clientX,e.clientY)}function R(e){g.set(e.clientX,e.clientY)}function S(e){if(1==e.touches.length)E.set(e.touches[0].pageX,e.touches[0].pageY);else{const t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);E.set(t,n)}}function Y(e){if(1==e.touches.length)g.set(e.touches[0].pageX,e.touches[0].pageY);else{const t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);g.set(t,n)}}function x(e){const t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,o=Math.sqrt(t*t+n*n);T.set(0,o)}function H(e){if(1==e.touches.length)v.set(e.touches[0].pageX,e.touches[0].pageY);else{const t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);v.set(t,n)}f.subVectors(v,E).multiplyScalar(n.rotateSpeed);const t=n.domElement;t&&(A(2*Math.PI*f.x/t.clientHeight),L(2*Math.PI*f.y/t.clientHeight)),E.copy(v)}function _(e){if(1==e.touches.length)O.set(e.touches[0].pageX,e.touches[0].pageY);else{const t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);O.set(t,n)}y.subVectors(O,g).multiplyScalar(n.panSpeed),M(y.x,y.y),g.copy(O)}function U(e){const t=e.touches[0].pageX-e.touches[1].pageX,o=e.touches[0].pageY-e.touches[1].pageY,a=Math.sqrt(t*t+o*o);P.set(0,a),w.set(0,Math.pow(P.y/T.y,n.zoomSpeed)),D(w.y),T.copy(P)}function V(e){if(!1!==n.enabled)switch(e.pointerType){case"mouse":case"pen":!function(e){var t;let o;switch(e.preventDefault(),null!==(t=n.domElement)&&void 0!==t&&t.focus?n.domElement.focus():window.focus(),e.button){case 0:o=n.mouseButtons.LEFT;break;case 1:o=n.mouseButtons.MIDDLE;break;case 2:o=n.mouseButtons.RIGHT;break;default:o=-1}switch(o){case s.MOUSE.DOLLY:if(!1===n.enableZoom)return;!function(e){T.set(e.clientX,e.clientY)}(e),l=r.DOLLY;break;case s.MOUSE.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;R(e),l=r.PAN}else{if(!1===n.enableRotate)return;C(e),l=r.ROTATE}break;case s.MOUSE.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;C(e),l=r.ROTATE}else{if(!1===n.enablePan)return;R(e),l=r.PAN}break;default:l=r.NONE}var i,c;l!==r.NONE&&(null===(i=n.domElement)||void 0===i||i.ownerDocument.addEventListener("pointermove",z),null===(c=n.domElement)||void 0===c||c.ownerDocument.addEventListener("pointerup",X),n.dispatchEvent(a))}(e)}}function z(e){if(!1!==n.enabled)switch(e.pointerType){case"mouse":case"pen":!function(e){if(!1!==n.enabled)switch(e.preventDefault(),l){case r.ROTATE:if(!1===n.enableRotate)return;!function(e){v.set(e.clientX,e.clientY),f.subVectors(v,E).multiplyScalar(n.rotateSpeed);const t=n.domElement;t&&(A(2*Math.PI*f.x/t.clientHeight),L(2*Math.PI*f.y/t.clientHeight)),E.copy(v),n.update()}(e);break;case r.DOLLY:if(!1===n.enableZoom)return;!function(e){P.set(e.clientX,e.clientY),w.subVectors(P,T),w.y>0?D(Z()):w.y<0&&k(Z()),T.copy(P),n.update()}(e);break;case r.PAN:if(!1===n.enablePan)return;!function(e){O.set(e.clientX,e.clientY),y.subVectors(O,g).multiplyScalar(n.panSpeed),M(y.x,y.y),g.copy(O),n.update()}(e)}}(e)}}function X(e){switch(e.pointerType){case"mouse":case"pen":null===(t=n.domElement)||void 0===t||t.ownerDocument.removeEventListener("pointermove",z),null===(o=n.domElement)||void 0===o||o.ownerDocument.removeEventListener("pointerup",X),!1!==n.enabled&&(n.dispatchEvent(i),l=r.NONE)}var t,o}function I(e){!1===n.enabled||!1===n.enableZoom||l!==r.NONE&&l!==r.ROTATE||(e.preventDefault(),n.dispatchEvent(a),function(e){e.deltaY<0?k(Z()):e.deltaY>0&&D(Z()),n.update()}(e),n.dispatchEvent(i))}function F(e){!1!==n.enabled&&!1!==n.enablePan&&function(e){let t=!1;switch(e.code){case n.keys.UP:M(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:M(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:M(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:M(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}(e)}function K(e){if(!1!==n.enabled){switch(e.preventDefault(),e.touches.length){case 1:switch(n.touches.ONE){case s.TOUCH.ROTATE:if(!1===n.enableRotate)return;S(e),l=r.TOUCH_ROTATE;break;case s.TOUCH.PAN:if(!1===n.enablePan)return;Y(e),l=r.TOUCH_PAN;break;default:l=r.NONE}break;case 2:switch(n.touches.TWO){case s.TOUCH.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&x(e),n.enablePan&&Y(e)}(e),l=r.TOUCH_DOLLY_PAN;break;case s.TOUCH.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&x(e),n.enableRotate&&S(e)}(e),l=r.TOUCH_DOLLY_ROTATE;break;default:l=r.NONE}break;default:l=r.NONE}l!==r.NONE&&n.dispatchEvent(a)}}function G(e){if(!1!==n.enabled)switch(e.preventDefault(),l){case r.TOUCH_ROTATE:if(!1===n.enableRotate)return;H(e),n.update();break;case r.TOUCH_PAN:if(!1===n.enablePan)return;_(e),n.update();break;case r.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&U(e),n.enablePan&&_(e)}(e),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&U(e),n.enableRotate&&H(e)}(e),n.update();break;default:l=r.NONE}}function B(){!1!==n.enabled&&(n.dispatchEvent(i),l=r.NONE)}function W(e){!1!==n.enabled&&e.preventDefault()}void 0!==t&&this.connect(t),this.update()}}const l=a.forwardRef((({camera:e,regress:t,enableDamping:n=!0,...c},s)=>{const l=(0,i.Ky)((({invalidate:e})=>e)),u=(0,i.Ky)((({camera:e})=>e)),m=(0,i.Ky)((({gl:e})=>e)),h=(0,i.Ky)((({performance:e})=>e)),p=e||u,d=a.useMemo((()=>new r(p)),[p]);return(0,i.xQ)((()=>d.update())),a.useEffect((()=>{const e=()=>{l(),t&&h.regress()};return d.connect(m.domElement),d.addEventListener("change",e),()=>{d.removeEventListener("change",e),d.dispose()}}),[t,d,l]),a.createElement("primitive",(0,o.Z)({ref:s,object:d,enableDamping:n},c))}))}}]);