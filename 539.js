(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[539],{1119:(e,t,n)=>{"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:()=>o})},7539:(e,t,n)=>{"use strict";n.d(t,{z:()=>h});var o=n(7560),a=n(2784),i=n(3361),s=n(1119),c=n(2955);const r=(e,t)=>(e%t+t)%t;class l extends c.EventDispatcher{constructor(e,t){super(),(0,s.Z)(this,"object",void 0),(0,s.Z)(this,"domElement",void 0),(0,s.Z)(this,"enabled",!0),(0,s.Z)(this,"target",new c.Vector3),(0,s.Z)(this,"minDistance",0),(0,s.Z)(this,"maxDistance",1/0),(0,s.Z)(this,"minZoom",0),(0,s.Z)(this,"maxZoom",1/0),(0,s.Z)(this,"minPolarAngle",0),(0,s.Z)(this,"maxPolarAngle",Math.PI),(0,s.Z)(this,"minAzimuthAngle",-1/0),(0,s.Z)(this,"maxAzimuthAngle",1/0),(0,s.Z)(this,"enableDamping",!1),(0,s.Z)(this,"dampingFactor",.05),(0,s.Z)(this,"enableZoom",!0),(0,s.Z)(this,"zoomSpeed",1),(0,s.Z)(this,"enableRotate",!0),(0,s.Z)(this,"rotateSpeed",1),(0,s.Z)(this,"enablePan",!0),(0,s.Z)(this,"panSpeed",1),(0,s.Z)(this,"screenSpacePanning",!0),(0,s.Z)(this,"keyPanSpeed",7),(0,s.Z)(this,"autoRotate",!1),(0,s.Z)(this,"autoRotateSpeed",2),(0,s.Z)(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),(0,s.Z)(this,"mouseButtons",{LEFT:c.MOUSE.ROTATE,MIDDLE:c.MOUSE.DOLLY,RIGHT:c.MOUSE.PAN}),(0,s.Z)(this,"touches",{ONE:c.TOUCH.ROTATE,TWO:c.TOUCH.DOLLY_PAN}),(0,s.Z)(this,"target0",void 0),(0,s.Z)(this,"position0",void 0),(0,s.Z)(this,"zoom0",void 0),(0,s.Z)(this,"_domElementKeyEvents",null),(0,s.Z)(this,"getPolarAngle",void 0),(0,s.Z)(this,"getAzimuthalAngle",void 0),(0,s.Z)(this,"setPolarAngle",void 0),(0,s.Z)(this,"setAzimuthalAngle",void 0),(0,s.Z)(this,"listenToKeyEvents",void 0),(0,s.Z)(this,"saveState",void 0),(0,s.Z)(this,"reset",void 0),(0,s.Z)(this,"update",void 0),(0,s.Z)(this,"connect",void 0),(0,s.Z)(this,"dispose",void 0),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object instanceof c.PerspectiveCamera?this.object.zoom:1,this.getPolarAngle=()=>m.phi,this.getAzimuthalAngle=()=>m.theta,this.setPolarAngle=e=>{let t=r(e,2*Math.PI),o=m.phi;o<0&&(o+=2*Math.PI),t<0&&(t+=2*Math.PI);let a=Math.abs(t-o);2*Math.PI-a<a&&(t<o?t+=2*Math.PI:o+=2*Math.PI),p.phi=t-o,n.update()},this.setAzimuthalAngle=e=>{let t=r(e,2*Math.PI),o=m.theta;o<0&&(o+=2*Math.PI),t<0&&(t+=2*Math.PI);let a=Math.abs(t-o);2*Math.PI-a<a&&(t<o?t+=2*Math.PI:o+=2*Math.PI),p.theta=t-o,n.update()},this.listenToKeyEvents=e=>{e.addEventListener("keydown",K),this._domElementKeyEvents=e},this.saveState=()=>{n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object instanceof c.PerspectiveCamera?n.object.zoom:1},this.reset=()=>{n.target.copy(n.target0),n.object.position.copy(n.position0),n.object instanceof c.PerspectiveCamera&&(n.object.zoom=n.zoom0,n.object.updateProjectionMatrix()),n.dispatchEvent(o),n.update(),h=l.NONE},this.update=(()=>{const t=new c.Vector3,a=(new c.Quaternion).setFromUnitVectors(e.up,new c.Vector3(0,1,0)),i=a.clone().invert(),s=new c.Vector3,r=new c.Quaternion,g=2*Math.PI;return function(){const e=n.object.position;t.copy(e).sub(n.target),t.applyQuaternion(a),m.setFromVector3(t),n.autoRotate&&h===l.NONE&&M(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(m.theta+=p.theta*n.dampingFactor,m.phi+=p.phi*n.dampingFactor):(m.theta+=p.theta,m.phi+=p.phi);let c=n.minAzimuthAngle,v=n.maxAzimuthAngle;return isFinite(c)&&isFinite(v)&&(c<-Math.PI?c+=g:c>Math.PI&&(c-=g),v<-Math.PI?v+=g:v>Math.PI&&(v-=g),m.theta=c<=v?Math.max(c,Math.min(v,m.theta)):m.theta>(c+v)/2?Math.max(c,m.theta):Math.min(v,m.theta)),m.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,m.phi)),m.makeSafe(),m.radius*=d,m.radius=Math.max(n.minDistance,Math.min(n.maxDistance,m.radius)),!0===n.enableDamping?n.target.addScaledVector(b,n.dampingFactor):n.target.add(b),t.setFromSpherical(m),t.applyQuaternion(i),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(p.theta*=1-n.dampingFactor,p.phi*=1-n.dampingFactor,b.multiplyScalar(1-n.dampingFactor)):(p.set(0,0,0),b.set(0,0,0)),d=1,!!(E||s.distanceToSquared(n.object.position)>u||8*(1-r.dot(n.object.quaternion))>u)&&(n.dispatchEvent(o),s.copy(n.object.position),r.copy(n.object.quaternion),E=!1,!0)}})(),this.connect=e=>{e===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),n.domElement=e,n.domElement.addEventListener("contextmenu",q),n.domElement.addEventListener("pointerdown",z),n.domElement.addEventListener("wheel",F),n.domElement.addEventListener("touchstart",G),n.domElement.addEventListener("touchend",W),n.domElement.addEventListener("touchmove",B)},this.dispose=()=>{var e,t,o,a,i,s,c,r;null===(e=n.domElement)||void 0===e||e.removeEventListener("contextmenu",q),null===(t=n.domElement)||void 0===t||t.removeEventListener("pointerdown",z),null===(o=n.domElement)||void 0===o||o.removeEventListener("wheel",F),null===(a=n.domElement)||void 0===a||a.removeEventListener("touchstart",G),null===(i=n.domElement)||void 0===i||i.removeEventListener("touchend",W),null===(s=n.domElement)||void 0===s||s.removeEventListener("touchmove",B),null===(c=n.domElement)||void 0===c||c.ownerDocument.removeEventListener("pointermove",V),null===(r=n.domElement)||void 0===r||r.ownerDocument.removeEventListener("pointerup",X),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",K)};const n=this,o={type:"change"},a={type:"start"},i={type:"end"},l={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let h=l.NONE;const u=1e-6,m=new c.Spherical,p=new c.Spherical;let d=1;const b=new c.Vector3;let E=!1;const g=new c.Vector2,v=new c.Vector2,f=new c.Vector2,O=new c.Vector2,P=new c.Vector2,y=new c.Vector2,T=new c.Vector2,w=new c.Vector2,A=new c.Vector2;function Z(){return Math.pow(.95,n.zoomSpeed)}function M(e){p.theta-=e}function j(e){p.phi-=e}const L=(()=>{const e=new c.Vector3;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),b.add(e)}})(),N=(()=>{const e=new c.Vector3;return function(t,o){!0===n.screenSpacePanning?e.setFromMatrixColumn(o,1):(e.setFromMatrixColumn(o,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),b.add(e)}})(),k=(()=>{const e=new c.Vector3;return function(t,o){const a=n.domElement;if(a&&n.object instanceof c.PerspectiveCamera&&n.object.isPerspectiveCamera){const i=n.object.position;e.copy(i).sub(n.target);let s=e.length();s*=Math.tan(n.object.fov/2*Math.PI/180),L(2*t*s/a.clientHeight,n.object.matrix),N(2*o*s/a.clientHeight,n.object.matrix)}else a&&n.object instanceof c.OrthographicCamera&&n.object.isOrthographicCamera?(L(t*(n.object.right-n.object.left)/n.object.zoom/a.clientWidth,n.object.matrix),N(o*(n.object.top-n.object.bottom)/n.object.zoom/a.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function C(e){n.object instanceof c.PerspectiveCamera&&n.object.isPerspectiveCamera?d/=e:n.object instanceof c.OrthographicCamera&&n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),E=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function D(e){n.object instanceof c.PerspectiveCamera&&n.object.isPerspectiveCamera?d*=e:n.object instanceof c.OrthographicCamera&&n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),E=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function R(e){g.set(e.clientX,e.clientY)}function S(e){O.set(e.clientX,e.clientY)}function Y(e){if(1==e.touches.length)g.set(e.touches[0].pageX,e.touches[0].pageY);else{const t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);g.set(t,n)}}function x(e){if(1==e.touches.length)O.set(e.touches[0].pageX,e.touches[0].pageY);else{const t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);O.set(t,n)}}function I(e){const t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,o=Math.sqrt(t*t+n*n);T.set(0,o)}function H(e){if(1==e.touches.length)v.set(e.touches[0].pageX,e.touches[0].pageY);else{const t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);v.set(t,n)}f.subVectors(v,g).multiplyScalar(n.rotateSpeed);const t=n.domElement;t&&(M(2*Math.PI*f.x/t.clientHeight),j(2*Math.PI*f.y/t.clientHeight)),g.copy(v)}function _(e){if(1==e.touches.length)P.set(e.touches[0].pageX,e.touches[0].pageY);else{const t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);P.set(t,n)}y.subVectors(P,O).multiplyScalar(n.panSpeed),k(y.x,y.y),O.copy(P)}function U(e){const t=e.touches[0].pageX-e.touches[1].pageX,o=e.touches[0].pageY-e.touches[1].pageY,a=Math.sqrt(t*t+o*o);w.set(0,a),A.set(0,Math.pow(w.y/T.y,n.zoomSpeed)),C(A.y),T.copy(w)}function z(e){if(!1!==n.enabled)switch(e.pointerType){case"mouse":case"pen":!function(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case c.MOUSE.DOLLY:if(!1===n.enableZoom)return;!function(e){T.set(e.clientX,e.clientY)}(e),h=l.DOLLY;break;case c.MOUSE.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;S(e),h=l.PAN}else{if(!1===n.enableRotate)return;R(e),h=l.ROTATE}break;case c.MOUSE.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;R(e),h=l.ROTATE}else{if(!1===n.enablePan)return;S(e),h=l.PAN}break;default:h=l.NONE}var o,i;h!==l.NONE&&(null===(o=n.domElement)||void 0===o||o.ownerDocument.addEventListener("pointermove",V),null===(i=n.domElement)||void 0===i||i.ownerDocument.addEventListener("pointerup",X),n.dispatchEvent(a))}(e)}}function V(e){if(!1!==n.enabled)switch(e.pointerType){case"mouse":case"pen":!function(e){if(!1!==n.enabled)switch(h){case l.ROTATE:if(!1===n.enableRotate)return;!function(e){v.set(e.clientX,e.clientY),f.subVectors(v,g).multiplyScalar(n.rotateSpeed);const t=n.domElement;t&&(M(2*Math.PI*f.x/t.clientHeight),j(2*Math.PI*f.y/t.clientHeight)),g.copy(v),n.update()}(e);break;case l.DOLLY:if(!1===n.enableZoom)return;!function(e){w.set(e.clientX,e.clientY),A.subVectors(w,T),A.y>0?C(Z()):A.y<0&&D(Z()),T.copy(w),n.update()}(e);break;case l.PAN:if(!1===n.enablePan)return;!function(e){P.set(e.clientX,e.clientY),y.subVectors(P,O).multiplyScalar(n.panSpeed),k(y.x,y.y),O.copy(P),n.update()}(e)}}(e)}}function X(e){switch(e.pointerType){case"mouse":case"pen":null===(t=n.domElement)||void 0===t||t.ownerDocument.removeEventListener("pointermove",V),null===(o=n.domElement)||void 0===o||o.ownerDocument.removeEventListener("pointerup",X),!1!==n.enabled&&(n.dispatchEvent(i),h=l.NONE)}var t,o}function F(e){!1===n.enabled||!1===n.enableZoom||h!==l.NONE&&h!==l.ROTATE||(e.preventDefault(),n.dispatchEvent(a),function(e){e.deltaY<0?D(Z()):e.deltaY>0&&C(Z()),n.update()}(e),n.dispatchEvent(i))}function K(e){!1!==n.enabled&&!1!==n.enablePan&&function(e){let t=!1;switch(e.code){case n.keys.UP:k(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:k(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:k(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:k(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}(e)}function G(e){if(!1!==n.enabled){switch(e.preventDefault(),e.touches.length){case 1:switch(n.touches.ONE){case c.TOUCH.ROTATE:if(!1===n.enableRotate)return;Y(e),h=l.TOUCH_ROTATE;break;case c.TOUCH.PAN:if(!1===n.enablePan)return;x(e),h=l.TOUCH_PAN;break;default:h=l.NONE}break;case 2:switch(n.touches.TWO){case c.TOUCH.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&I(e),n.enablePan&&x(e)}(e),h=l.TOUCH_DOLLY_PAN;break;case c.TOUCH.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&I(e),n.enableRotate&&Y(e)}(e),h=l.TOUCH_DOLLY_ROTATE;break;default:h=l.NONE}break;default:h=l.NONE}h!==l.NONE&&n.dispatchEvent(a)}}function B(e){if(!1!==n.enabled)switch(e.preventDefault(),h){case l.TOUCH_ROTATE:if(!1===n.enableRotate)return;H(e),n.update();break;case l.TOUCH_PAN:if(!1===n.enablePan)return;_(e),n.update();break;case l.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&U(e),n.enablePan&&_(e)}(e),n.update();break;case l.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&U(e),n.enableRotate&&H(e)}(e),n.update();break;default:h=l.NONE}}function W(){!1!==n.enabled&&(n.dispatchEvent(i),h=l.NONE)}function q(e){!1!==n.enabled&&e.preventDefault()}void 0!==t&&this.connect(t),this.update()}}const h=a.forwardRef((({camera:e,regress:t,enableDamping:n=!0,...s},c)=>{const r=(0,i.Ky)((({invalidate:e})=>e)),h=(0,i.Ky)((({camera:e})=>e)),u=(0,i.Ky)((({gl:e})=>e)),m=(0,i.Ky)((({performance:e})=>e)),p=e||h,d=a.useMemo((()=>new l(p)),[p]);return(0,i.xQ)((()=>{d.enabled&&d.update()})),a.useEffect((()=>{const e=()=>{r(),t&&m.regress()};return d.connect(u.domElement),d.addEventListener("change",e),()=>{d.removeEventListener("change",e),d.dispose()}}),[t,d,r]),a.createElement("primitive",(0,o.Z)({ref:c,object:d,enableDamping:n},s))}))}}]);