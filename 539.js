"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[539],{7539:(e,t,n)=>{n.d(t,{z:()=>m});var o=n(7896),a=n(3747),i=n(2784),r=n(6666),c=n(2955);const s=(e,t)=>(e%t+t)%t;class l extends c.EventDispatcher{constructor(e,t){super(),(0,r.Z)(this,"object",void 0),(0,r.Z)(this,"domElement",void 0),(0,r.Z)(this,"enabled",!0),(0,r.Z)(this,"target",new c.Vector3),(0,r.Z)(this,"minDistance",0),(0,r.Z)(this,"maxDistance",1/0),(0,r.Z)(this,"minZoom",0),(0,r.Z)(this,"maxZoom",1/0),(0,r.Z)(this,"minPolarAngle",0),(0,r.Z)(this,"maxPolarAngle",Math.PI),(0,r.Z)(this,"minAzimuthAngle",-1/0),(0,r.Z)(this,"maxAzimuthAngle",1/0),(0,r.Z)(this,"enableDamping",!1),(0,r.Z)(this,"dampingFactor",.05),(0,r.Z)(this,"enableZoom",!0),(0,r.Z)(this,"zoomSpeed",1),(0,r.Z)(this,"enableRotate",!0),(0,r.Z)(this,"rotateSpeed",1),(0,r.Z)(this,"enablePan",!0),(0,r.Z)(this,"panSpeed",1),(0,r.Z)(this,"screenSpacePanning",!0),(0,r.Z)(this,"keyPanSpeed",7),(0,r.Z)(this,"autoRotate",!1),(0,r.Z)(this,"autoRotateSpeed",2),(0,r.Z)(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),(0,r.Z)(this,"mouseButtons",{LEFT:c.MOUSE.ROTATE,MIDDLE:c.MOUSE.DOLLY,RIGHT:c.MOUSE.PAN}),(0,r.Z)(this,"touches",{ONE:c.TOUCH.ROTATE,TWO:c.TOUCH.DOLLY_PAN}),(0,r.Z)(this,"target0",void 0),(0,r.Z)(this,"position0",void 0),(0,r.Z)(this,"zoom0",void 0),(0,r.Z)(this,"_domElementKeyEvents",null),(0,r.Z)(this,"getPolarAngle",void 0),(0,r.Z)(this,"getAzimuthalAngle",void 0),(0,r.Z)(this,"setPolarAngle",void 0),(0,r.Z)(this,"setAzimuthalAngle",void 0),(0,r.Z)(this,"getDistance",void 0),(0,r.Z)(this,"listenToKeyEvents",void 0),(0,r.Z)(this,"saveState",void 0),(0,r.Z)(this,"reset",void 0),(0,r.Z)(this,"update",void 0),(0,r.Z)(this,"connect",void 0),(0,r.Z)(this,"dispose",void 0),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object instanceof c.PerspectiveCamera?this.object.zoom:1,this.getPolarAngle=()=>p.phi,this.getAzimuthalAngle=()=>p.theta,this.setPolarAngle=e=>{let t=s(e,2*Math.PI),o=p.phi;o<0&&(o+=2*Math.PI),t<0&&(t+=2*Math.PI);let a=Math.abs(t-o);2*Math.PI-a<a&&(t<o?t+=2*Math.PI:o+=2*Math.PI),d.phi=t-o,n.update()},this.setAzimuthalAngle=e=>{let t=s(e,2*Math.PI),o=p.theta;o<0&&(o+=2*Math.PI),t<0&&(t+=2*Math.PI);let a=Math.abs(t-o);2*Math.PI-a<a&&(t<o?t+=2*Math.PI:o+=2*Math.PI),d.theta=t-o,n.update()},this.getDistance=()=>n.object.position.distanceTo(n.target),this.listenToKeyEvents=e=>{e.addEventListener("keydown",W),this._domElementKeyEvents=e},this.saveState=()=>{n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object instanceof c.PerspectiveCamera?n.object.zoom:1},this.reset=()=>{n.target.copy(n.target0),n.object.position.copy(n.position0),n.object instanceof c.PerspectiveCamera&&(n.object.zoom=n.zoom0,n.object.updateProjectionMatrix()),n.dispatchEvent(o),n.update(),m=l.NONE},this.update=(()=>{const t=new c.Vector3,a=(new c.Quaternion).setFromUnitVectors(e.up,new c.Vector3(0,1,0)),i=a.clone().invert(),r=new c.Vector3,s=new c.Quaternion,E=2*Math.PI;return function(){const e=n.object.position;t.copy(e).sub(n.target),t.applyQuaternion(a),p.setFromVector3(t),n.autoRotate&&m===l.NONE&&L(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(p.theta+=d.theta*n.dampingFactor,p.phi+=d.phi*n.dampingFactor):(p.theta+=d.theta,p.phi+=d.phi);let c=n.minAzimuthAngle,f=n.maxAzimuthAngle;return isFinite(c)&&isFinite(f)&&(c<-Math.PI?c+=E:c>Math.PI&&(c-=E),f<-Math.PI?f+=E:f>Math.PI&&(f-=E),p.theta=c<=f?Math.max(c,Math.min(f,p.theta)):p.theta>(c+f)/2?Math.max(c,p.theta):Math.min(f,p.theta)),p.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,p.phi)),p.makeSafe(),p.radius*=u,p.radius=Math.max(n.minDistance,Math.min(n.maxDistance,p.radius)),!0===n.enableDamping?n.target.addScaledVector(b,n.dampingFactor):n.target.add(b),t.setFromSpherical(p),t.applyQuaternion(i),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(d.theta*=1-n.dampingFactor,d.phi*=1-n.dampingFactor,b.multiplyScalar(1-n.dampingFactor)):(d.set(0,0,0),b.set(0,0,0)),u=1,!!(g||r.distanceToSquared(n.object.position)>h||8*(1-s.dot(n.object.quaternion))>h)&&(n.dispatchEvent(o),r.copy(n.object.position),s.copy(n.object.quaternion),g=!1,!0)}})(),this.connect=e=>{e===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),n.domElement=e,n.domElement.style.touchAction="none",n.domElement.addEventListener("contextmenu",q),n.domElement.addEventListener("pointerdown",X),n.domElement.addEventListener("pointercancel",G),n.domElement.addEventListener("wheel",B)},this.dispose=()=>{var e,t,o,a,i,r;null===(e=n.domElement)||void 0===e||e.removeEventListener("contextmenu",q),null===(t=n.domElement)||void 0===t||t.removeEventListener("pointerdown",X),null===(o=n.domElement)||void 0===o||o.removeEventListener("pointercancel",G),null===(a=n.domElement)||void 0===a||a.removeEventListener("wheel",B),null===(i=n.domElement)||void 0===i||i.ownerDocument.removeEventListener("pointermove",F),null===(r=n.domElement)||void 0===r||r.ownerDocument.removeEventListener("pointerup",K),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",W)};const n=this,o={type:"change"},a={type:"start"},i={type:"end"},l={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let m=l.NONE;const h=1e-6,p=new c.Spherical,d=new c.Spherical;let u=1;const b=new c.Vector3;let g=!1;const E=new c.Vector2,f=new c.Vector2,v=new c.Vector2,O=new c.Vector2,P=new c.Vector2,y=new c.Vector2,T=new c.Vector2,A=new c.Vector2,Z=new c.Vector2,w=[],M={};function j(){return Math.pow(.95,n.zoomSpeed)}function L(e){d.theta-=e}function N(e){d.phi-=e}const k=(()=>{const e=new c.Vector3;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),b.add(e)}})(),C=(()=>{const e=new c.Vector3;return function(t,o){!0===n.screenSpacePanning?e.setFromMatrixColumn(o,1):(e.setFromMatrixColumn(o,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),b.add(e)}})(),D=(()=>{const e=new c.Vector3;return function(t,o){const a=n.domElement;if(a&&n.object instanceof c.PerspectiveCamera&&n.object.isPerspectiveCamera){const i=n.object.position;e.copy(i).sub(n.target);let r=e.length();r*=Math.tan(n.object.fov/2*Math.PI/180),k(2*t*r/a.clientHeight,n.object.matrix),C(2*o*r/a.clientHeight,n.object.matrix)}else a&&n.object instanceof c.OrthographicCamera&&n.object.isOrthographicCamera?(k(t*(n.object.right-n.object.left)/n.object.zoom/a.clientWidth,n.object.matrix),C(o*(n.object.top-n.object.bottom)/n.object.zoom/a.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function I(e){n.object instanceof c.PerspectiveCamera&&n.object.isPerspectiveCamera?u/=e:n.object instanceof c.OrthographicCamera&&n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),g=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function R(e){n.object instanceof c.PerspectiveCamera&&n.object.isPerspectiveCamera?u*=e:n.object instanceof c.OrthographicCamera&&n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),g=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function S(e){E.set(e.clientX,e.clientY)}function x(e){O.set(e.clientX,e.clientY)}function Y(){if(1==w.length)E.set(w[0].pageX,w[0].pageY);else{const e=.5*(w[0].pageX+w[1].pageX),t=.5*(w[0].pageY+w[1].pageY);E.set(e,t)}}function H(){if(1==w.length)O.set(w[0].pageX,w[0].pageY);else{const e=.5*(w[0].pageX+w[1].pageX),t=.5*(w[0].pageY+w[1].pageY);O.set(e,t)}}function _(){const e=w[0].pageX-w[1].pageX,t=w[0].pageY-w[1].pageY,n=Math.sqrt(e*e+t*t);T.set(0,n)}function U(e){if(1==w.length)f.set(e.pageX,e.pageY);else{const t=$(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);f.set(n,o)}v.subVectors(f,E).multiplyScalar(n.rotateSpeed);const t=n.domElement;t&&(L(2*Math.PI*v.x/t.clientHeight),N(2*Math.PI*v.y/t.clientHeight)),E.copy(f)}function z(e){if(1==w.length)P.set(e.pageX,e.pageY);else{const t=$(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);P.set(n,o)}y.subVectors(P,O).multiplyScalar(n.panSpeed),D(y.x,y.y),O.copy(P)}function V(e){const t=$(e),o=e.pageX-t.x,a=e.pageY-t.y,i=Math.sqrt(o*o+a*a);A.set(0,i),Z.set(0,Math.pow(A.y/T.y,n.zoomSpeed)),I(Z.y),T.copy(A)}function X(e){var t,o;!1!==n.enabled&&(0===w.length&&(null===(t=n.domElement)||void 0===t||t.ownerDocument.addEventListener("pointermove",F),null===(o=n.domElement)||void 0===o||o.ownerDocument.addEventListener("pointerup",K)),function(e){w.push(e)}(e),"touch"===e.pointerType?function(e){switch(J(e),w.length){case 1:switch(n.touches.ONE){case c.TOUCH.ROTATE:if(!1===n.enableRotate)return;Y(),m=l.TOUCH_ROTATE;break;case c.TOUCH.PAN:if(!1===n.enablePan)return;H(),m=l.TOUCH_PAN;break;default:m=l.NONE}break;case 2:switch(n.touches.TWO){case c.TOUCH.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&_(),n.enablePan&&H(),m=l.TOUCH_DOLLY_PAN;break;case c.TOUCH.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&_(),n.enableRotate&&Y(),m=l.TOUCH_DOLLY_ROTATE;break;default:m=l.NONE}break;default:m=l.NONE}m!==l.NONE&&n.dispatchEvent(a)}(e):function(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case c.MOUSE.DOLLY:if(!1===n.enableZoom)return;!function(e){T.set(e.clientX,e.clientY)}(e),m=l.DOLLY;break;case c.MOUSE.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;x(e),m=l.PAN}else{if(!1===n.enableRotate)return;S(e),m=l.ROTATE}break;case c.MOUSE.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;S(e),m=l.ROTATE}else{if(!1===n.enablePan)return;x(e),m=l.PAN}break;default:m=l.NONE}m!==l.NONE&&n.dispatchEvent(a)}(e))}function F(e){!1!==n.enabled&&("touch"===e.pointerType?function(e){switch(J(e),m){case l.TOUCH_ROTATE:if(!1===n.enableRotate)return;U(e),n.update();break;case l.TOUCH_PAN:if(!1===n.enablePan)return;z(e),n.update();break;case l.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&V(e),n.enablePan&&z(e)}(e),n.update();break;case l.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&V(e),n.enableRotate&&U(e)}(e),n.update();break;default:m=l.NONE}}(e):function(e){if(!1!==n.enabled)switch(m){case l.ROTATE:if(!1===n.enableRotate)return;!function(e){f.set(e.clientX,e.clientY),v.subVectors(f,E).multiplyScalar(n.rotateSpeed);const t=n.domElement;t&&(L(2*Math.PI*v.x/t.clientHeight),N(2*Math.PI*v.y/t.clientHeight)),E.copy(f),n.update()}(e);break;case l.DOLLY:if(!1===n.enableZoom)return;!function(e){A.set(e.clientX,e.clientY),Z.subVectors(A,T),Z.y>0?I(j()):Z.y<0&&R(j()),T.copy(A),n.update()}(e);break;case l.PAN:if(!1===n.enablePan)return;!function(e){P.set(e.clientX,e.clientY),y.subVectors(P,O).multiplyScalar(n.panSpeed),D(y.x,y.y),O.copy(P),n.update()}(e)}}(e))}function K(e){var t,o;!1!==n.enabled&&(e.pointerType,n.dispatchEvent(i),m=l.NONE,Q(e),0===w.length&&(null===(t=n.domElement)||void 0===t||t.ownerDocument.removeEventListener("pointermove",F),null===(o=n.domElement)||void 0===o||o.ownerDocument.removeEventListener("pointerup",K)))}function G(e){Q(e)}function B(e){!1===n.enabled||!1===n.enableZoom||m!==l.NONE&&m!==l.ROTATE||(e.preventDefault(),n.dispatchEvent(a),function(e){e.deltaY<0?R(j()):e.deltaY>0&&I(j()),n.update()}(e),n.dispatchEvent(i))}function W(e){!1!==n.enabled&&!1!==n.enablePan&&function(e){let t=!1;switch(e.code){case n.keys.UP:D(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:D(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:D(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:D(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}(e)}function q(e){!1!==n.enabled&&e.preventDefault()}function Q(e){delete M[e.pointerId];for(let t=0;t<w.length;t++)if(w[t].pointerId==e.pointerId)return void w.splice(t,1)}function J(e){let t=M[e.pointerId];void 0===t&&(t=new c.Vector2,M[e.pointerId]=t),t.set(e.pageX,e.pageY)}function $(e){const t=e.pointerId===w[0].pointerId?w[1]:w[0];return M[t.pointerId]}void 0!==t&&this.connect(t),this.update()}}const m=i.forwardRef((({makeDefault:e,camera:t,regress:n,domElement:r,enableDamping:c=!0,onChange:s,onStart:m,onEnd:h,...p},d)=>{const u=(0,a.Ky)((({invalidate:e})=>e)),b=(0,a.Ky)((({camera:e})=>e)),g=(0,a.Ky)((({gl:e})=>e)),E=(0,a.Ky)((({events:e})=>e)),f=(0,a.Ky)((({set:e})=>e)),v=(0,a.Ky)((({get:e})=>e)),O=(0,a.Ky)((({performance:e})=>e)),P=t||b,y=r||("boolean"!=typeof E.connected?E.connected:g.domElement),T=i.useMemo((()=>new l(P)),[P]);return(0,a.xQ)((()=>{T.enabled&&T.update()})),i.useEffect((()=>{const e=e=>{u(),n&&O.regress(),s&&s(e)};return T.connect(y),T.addEventListener("change",e),m&&T.addEventListener("start",m),h&&T.addEventListener("end",h),()=>{T.removeEventListener("change",e),m&&T.removeEventListener("start",m),h&&T.removeEventListener("end",h),T.dispose()}}),[y,s,m,h,n,T,u]),i.useEffect((()=>{if(e){const e=v().controls;return f({controls:T}),()=>f({controls:e})}}),[e,T]),i.createElement("primitive",(0,o.Z)({ref:d,object:T,enableDamping:c},p))}))},6666:(e,t,n)=>{function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:()=>o})}}]);