(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[557],{461:(t,e,n)=>{"use strict";n.d(e,{rS:()=>f,eC:()=>d,iG:()=>l,Ld:()=>w,ys:()=>o,sb:()=>g,He:()=>u,f3:()=>a});var s=n(312),i=n(784);const r=Symbol.for("Animated:node"),o=t=>t&&t[r],a=(t,e)=>(0,s.dE)(t,r,e),u=t=>t&&t[r]&&t[r].getPayload();class c{constructor(){a(this,this)}getPayload(){return this.payload||[]}}class l extends c{constructor(t){super(),this.done=!0,this.durationProgress=0,this._value=t,s.is.num(this._value)&&(this.lastPosition=this._value)}static create(t){return new l(t)}getPayload(){return[this]}getValue(){return this._value}setValue(t,e){return s.is.num(t)&&(this.lastPosition=t,e&&(t=Math.round(t/e)*e,this.done&&(this.lastPosition=t))),this._value!==t&&(this._value=t,!0)}reset(){const{done:t}=this;this.done=!1,s.is.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,t&&(this.lastVelocity=null),this.v0=null)}}class d extends l{constructor(t){super(0),this._string=null,this._toString=(0,s.mD)({output:[t,t]})}static create(t){return new d(t)}getValue(){let t=this._string;return null==t?this._string=this._toString(this._value):t}setValue(t){if(s.is.str(t)){if(t==this._string)return!1;this._string=t,this._value=1}else{if(!super.setValue(t))return!1;this._string=null}return!0}reset(t){t&&(this._toString=(0,s.mD)({output:[this.getValue(),t]})),this._value=0,super.reset()}}const h={dependencies:null};class f extends c{constructor(t){super(),this.source=t,this.setValue(t)}getValue(t){const e={};return(0,s.rU)(this.source,((n,i)=>{var o;(o=n)&&o[r]===o?e[i]=n.getValue(t):(0,s.j$)(n)?e[i]=(0,s.je)(n):t||(e[i]=n)})),e}setValue(t){this.source=t,this.payload=this._makePayload(t)}reset(){this.payload&&(0,s.S6)(this.payload,(t=>t.reset()))}_makePayload(t){if(t){const e=new Set;return(0,s.rU)(t,this._addToPayload,e),Array.from(e)}}_addToPayload(t){h.dependencies&&(0,s.j$)(t)&&h.dependencies.add(t);const e=u(t);e&&(0,s.S6)(e,(t=>this.add(t)))}}class p extends f{constructor(t){super(t)}static create(t){return new p(t)}getValue(){return this.source.map((t=>t.getValue()))}setValue(t){const e=this.getPayload();return t.length==e.length?e.some(((e,n)=>e.setValue(t[n]))):(super.setValue(t.map(m)),!0)}}function m(t){return((0,s.Df)(t)?d:l).create(t)}function g(t){const e=o(t);return e?e.constructor:s.is.arr(t)?p:(0,s.Df)(t)?d:l}function y(){return(y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t}).apply(this,arguments)}const v=(t,e)=>{const n=!s.is.fun(t)||t.prototype&&t.prototype.isReactComponent;return(0,i.forwardRef)(((r,o)=>{const a=(0,i.useRef)(null),u=n&&(0,i.useCallback)((t=>{a.current=function(t,e){return t&&(s.is.fun(t)?t(e):t.current=e),e}(o,t)}),[o]),[c,l]=function(t,e){const n=new Set;return h.dependencies=n,t.style&&(t=y({},t,{style:e.createAnimatedStyle(t.style)})),t=new f(t),h.dependencies=null,[t,n]}(r,e),d=(0,s.NW)(),p=()=>{const t=a.current;n&&!t||!1===(!!t&&e.applyAnimatedValues(t,c.getValue(!0)))&&d()},m=new _(p,l),g=(0,i.useRef)();(0,s.bt)((()=>{const t=g.current;g.current=m,(0,s.S6)(l,(t=>(0,s.UI)(t,m))),t&&((0,s.S6)(t.deps,(e=>(0,s.iL)(e,t))),s.Wn.cancel(t.update))})),(0,i.useEffect)(p,[]),(0,s.tf)((()=>()=>{const t=g.current;(0,s.S6)(t.deps,(e=>(0,s.iL)(e,t)))}));const v=e.getComponentProps(c.getValue());return i.createElement(t,y({},v,{ref:u}))}))};class _{constructor(t,e){this.update=t,this.deps=e}eventObserved(t){"change"==t.type&&s.Wn.write(this.update)}}const b=Symbol.for("AnimatedComponent"),w=(t,{applyAnimatedValues:e=(()=>!1),createAnimatedStyle:n=(t=>new f(t)),getComponentProps:i=(t=>t)}={})=>{const r={applyAnimatedValues:e,createAnimatedStyle:n,getComponentProps:i},o=t=>{const e=S(t)||"Anonymous";return(t=s.is.str(t)?o[t]||(o[t]=v(t,r)):t[b]||(t[b]=v(t,r))).displayName=`Animated(${e})`,t};return(0,s.rU)(t,((e,n)=>{s.is.arr(t)&&(n=S(e)),o[n]=o(e)})),{animated:o}},S=t=>s.is.str(t)?t:t&&s.is.str(t.displayName)?t.displayName:s.is.fun(t)&&t.name||null},557:(t,e,n)=>{"use strict";n.d(e,{OH:()=>s.OH,vc:()=>w,q_:()=>gt});var s=n(312),i=n(784),r=n(461);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t}).apply(this,arguments)}function a(t,...e){return s.is.fun(t)?t(...e):t}const u=(t,e)=>!0===t||!!(e&&t&&(s.is.fun(t)?t(e):(0,s.qo)(t).includes(e))),c=(t,e)=>s.is.obj(t)?e&&t[e]:t,l=(t,e)=>!0===t.default?t[e]:t.default?t.default[e]:void 0,d=t=>t,h=(t,e=d)=>{let n=f;t.default&&!0!==t.default&&(t=t.default,n=Object.keys(t));const i={};for(const r of n){const n=e(t[r],r);s.is.und(n)||(i[r]=n)}return i},f=["config","onProps","onStart","onChange","onPause","onResume","onRest"],p={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function m(t){const e=function(t){const e={};let n=0;if((0,s.rU)(t,((t,s)=>{p[s]||(e[s]=t,n++)})),n)return e}(t);if(e){const n={to:e};return(0,s.rU)(t,((t,s)=>s in e||(n[s]=t))),n}return o({},t)}function g(t){return t=(0,s.je)(t),s.is.arr(t)?t.map(g):(0,s.Df)(t)?s.OH.createStringInterpolator({range:[0,1],output:[t,t]})(1):t}function y(t){for(const e in t)return!0;return!1}function v(t){return s.is.fun(t)||s.is.arr(t)&&s.is.obj(t[0])}function _(t,e){var n;null==(n=t.ref)||n.delete(t),null==e||e.delete(t)}function b(t,e){var n;e&&t.ref!==e&&(null==(n=t.ref)||n.delete(t),e.add(t),t.ref=e)}const w={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}},S=o({},w.default,{mass:1,damping:1,easing:t=>t,clamp:!1});class P{constructor(){this.velocity=0,Object.assign(this,S)}}function k(t,e){if(s.is.und(e.decay)){const n=!s.is.und(e.tension)||!s.is.und(e.friction);!n&&s.is.und(e.frequency)&&s.is.und(e.damping)&&s.is.und(e.mass)||(t.duration=void 0,t.decay=void 0),n&&(t.frequency=void 0)}else t.duration=void 0}const j=[];class A{constructor(){this.changed=!1,this.values=j,this.toValues=null,this.fromValues=j,this.config=new P,this.immediate=!1}}function I(t,{key:e,props:n,defaultProps:i,state:r,actions:c}){return new Promise(((l,d)=>{var h;let f,p,m=u(null!=(h=n.cancel)?h:null==i?void 0:i.cancel,e);if(m)v();else{s.is.und(n.pause)||(r.paused=u(n.pause,e));let t=null==i?void 0:i.pause;!0!==t&&(t=r.paused||u(t,e)),f=a(n.delay||0,e),t?(r.resumeQueue.add(y),c.pause()):(c.resume(),y())}function g(){r.resumeQueue.add(y),r.timeouts.delete(p),p.cancel(),f=p.time-s.Wn.now()}function y(){f>0?(p=s.Wn.setTimeout(v,f),r.pauseQueue.add(g),r.timeouts.add(p)):v()}function v(){r.pauseQueue.delete(g),r.timeouts.delete(p),t<=(r.cancelId||0)&&(m=!0);try{c.start(o({},n,{callId:t,cancel:m}),l)}catch(t){d(t)}}}))}const q=(t,e)=>1==e.length?e[0]:e.some((t=>t.cancelled))?V(t.get()):e.every((t=>t.noop))?O(t.get()):C(t.get(),e.every((t=>t.finished))),O=t=>({value:t,noop:!0,finished:!0,cancelled:!1}),C=(t,e,n=!1)=>({value:t,finished:e,cancelled:n}),V=t=>({value:t,cancelled:!0,finished:!1});function x(t,e,n,i){const{callId:r,parentId:a,onRest:u}=e,{asyncTo:c,promise:l}=n;return a||t!==c||e.reset?n.promise=(async()=>{n.asyncId=r,n.asyncTo=t;const d=h(e,((t,e)=>"onRest"===e?void 0:t));let f,p;const m=new Promise(((t,e)=>(f=t,p=e))),g=t=>{const e=r<=(n.cancelId||0)&&V(i)||r!==n.asyncId&&C(i,!1);if(e)throw t.result=e,p(t),t},y=(t,e)=>{const a=new E,u=new U;return(async()=>{if(s.OH.skipAnimation)throw R(n),u.result=C(i,!1),p(u),u;g(a);const c=s.is.obj(t)?o({},t):o({},e,{to:t});c.parentId=r,(0,s.rU)(d,((t,e)=>{s.is.und(c[e])&&(c[e]=t)}));const l=await i.start(c);return g(a),n.paused&&await new Promise((t=>{n.resumeQueue.add(t)})),l})()};let v;if(s.OH.skipAnimation)return R(n),C(i,!1);try{let e;e=s.is.arr(t)?(async t=>{for(const e of t)await y(e)})(t):Promise.resolve(t(y,i.stop.bind(i))),await Promise.all([e.then(f),m]),v=C(i.get(),!0,!1)}catch(t){if(t instanceof E)v=t.result;else{if(!(t instanceof U))throw t;v=t.result}}finally{r==n.asyncId&&(n.asyncId=a,n.asyncTo=a?c:void 0,n.promise=a?l:void 0)}return s.is.fun(u)&&s.Wn.batchedUpdates((()=>{u(v,i,i.item)})),v})():l}function R(t,e){(0,s.yl)(t.timeouts,(t=>t.cancel())),t.pauseQueue.clear(),t.resumeQueue.clear(),t.asyncId=t.asyncTo=t.promise=void 0,e&&(t.cancelId=e)}class E extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}}class U extends Error{constructor(){super("SkipAnimationSignal")}}const T=t=>t instanceof M;let $=1;class M extends s.B0{constructor(...t){super(...t),this.id=$++,this._priority=0}get priority(){return this._priority}set priority(t){this._priority!=t&&(this._priority=t,this._onPriorityChange(t))}get(){const t=(0,r.ys)(this);return t&&t.getValue()}to(...t){return s.OH.to(this,t)}interpolate(...t){return(0,s.LW)(),s.OH.to(this,t)}toJSON(){return this.get()}observerAdded(t){1==t&&this._attach()}observerRemoved(t){0==t&&this._detach()}_attach(){}_detach(){}_onChange(t,e=!1){(0,s.k0)(this,{type:"change",parent:this,value:t,idle:e})}_onPriorityChange(t){this.idle||s.fT.sort(this),(0,s.k0)(this,{type:"priority",parent:this,priority:t})}}const F=Symbol.for("SpringPhase"),z=t=>(1&t[F])>0,W=t=>(2&t[F])>0,D=t=>(4&t[F])>0,H=(t,e)=>e?t[F]|=3:t[F]&=-3,N=(t,e)=>e?t[F]|=4:t[F]&=-5;class Q extends M{constructor(t,e){if(super(),this.animation=new A,this.defaultProps={},this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!s.is.und(t)||!s.is.und(e)){const n=s.is.obj(t)?o({},t):o({},e,{from:t});s.is.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(W(this)||this._state.asyncTo)||D(this)}get goal(){return(0,s.je)(this.animation.to)}get velocity(){const t=(0,r.ys)(this);return t instanceof r.iG?t.lastVelocity||0:t.getPayload().map((t=>t.lastVelocity||0))}get hasAnimated(){return z(this)}get isAnimating(){return W(this)}get isPaused(){return D(this)}advance(t){let e=!0,n=!1;const i=this.animation;let{config:o,toValues:a}=i;const u=(0,r.He)(i.to);!u&&(0,s.j$)(i.to)&&(a=(0,s.qo)((0,s.je)(i.to))),i.values.forEach(((c,l)=>{if(c.done)return;const d=c.constructor==r.eC?1:u?u[l].lastPosition:a[l];let h=i.immediate,f=d;if(!h){if(f=c.lastPosition,o.tension<=0)return void(c.done=!0);let e=c.elapsedTime+=t;const n=i.fromValues[l],r=null!=c.v0?c.v0:c.v0=s.is.arr(o.velocity)?o.velocity[l]:o.velocity;let a;if(s.is.und(o.duration))if(o.decay){const t=!0===o.decay?.998:o.decay,s=Math.exp(-(1-t)*e);f=n+r/(1-t)*(1-s),h=Math.abs(c.lastPosition-f)<.1,a=r*s}else{a=null==c.lastVelocity?r:c.lastVelocity;const e=o.precision||(n==d?.005:Math.min(1,.001*Math.abs(d-n))),i=o.restVelocity||e/10,u=o.clamp?0:o.bounce,l=!s.is.und(u),p=n==d?c.v0>0:n<d;let m,g=!1;const y=1,v=Math.ceil(t/y);for(let t=0;t<v&&(m=Math.abs(a)>i,m||(h=Math.abs(d-f)<=e,!h));++t)l&&(g=f==d||f>d==p,g&&(a=-a*u,f=d)),a+=(1e-6*-o.tension*(f-d)+.001*-o.friction*a)/o.mass*y,f+=a*y}else{let s=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,c.durationProgress>0&&(c.elapsedTime=o.duration*c.durationProgress,e=c.elapsedTime+=t)),s=(o.progress||0)+e/this._memoizedDuration,s=s>1?1:s<0?0:s,c.durationProgress=s),f=n+o.easing(s)*(d-n),a=(f-c.lastPosition)/t,h=1==s}c.lastVelocity=a,Number.isNaN(f)&&(console.warn("Got NaN while animating:",this),h=!0)}u&&!u[l].done&&(h=!1),h?c.done=!0:e=!1,c.setValue(f,o.round)&&(n=!0)}));const c=(0,r.ys)(this),l=c.getValue();if(e){const t=(0,s.je)(i.to);l===t&&!n||o.decay?n&&o.decay&&this._onChange(l):(c.setValue(t),this._onChange(t)),this._stop()}else n&&this._onChange(l)}set(t){return s.Wn.batchedUpdates((()=>{this._stop(),this._focus(t),this._set(t)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(W(this)){const{to:t,config:e}=this.animation;s.Wn.batchedUpdates((()=>{this._onStart(),e.decay||this._set(t,!1),this._stop()}))}return this}update(t){return(this.queue||(this.queue=[])).push(t),this}start(t,e){let n;return s.is.und(t)?(n=this.queue||[],this.queue=[]):n=[s.is.obj(t)?t:o({},e,{to:t})],Promise.all(n.map((t=>this._update(t)))).then((t=>q(this,t)))}stop(t){const{to:e}=this.animation;return this._focus(this.get()),R(this._state,t&&this._lastCallId),s.Wn.batchedUpdates((()=>this._stop(e,t))),this}reset(){this._update({reset:!0})}eventObserved(t){"change"==t.type?this._start():"priority"==t.type&&(this.priority=t.priority+1)}_prepareNode(t){const e=this.key||"";let{to:n,from:i}=t;n=s.is.obj(n)?n[e]:n,(null==n||v(n))&&(n=void 0),i=s.is.obj(i)?i[e]:i,null==i&&(i=void 0);const o={to:n,from:i};return z(this)||(t.reverse&&([n,i]=[i,n]),i=(0,s.je)(i),s.is.und(i)?(0,r.ys)(this)||this._set(n):this._set(i)),o}_update(t,e){let n=o({},t);const{key:i,defaultProps:r}=this;n.default&&Object.assign(r,h(n,((t,e)=>/^on/.test(e)?c(t,i):t))),Y(this,n,"onProps"),K(this,"onProps",n,this);const a=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const u=this._state;return I(++this._lastCallId,{key:i,props:n,defaultProps:r,state:u,actions:{pause:()=>{D(this)||(N(this,!0),(0,s.bl)(u.pauseQueue),K(this,"onPause",C(this,L(this,this.animation.to)),this))},resume:()=>{D(this)&&(N(this,!1),W(this)&&this._resume(),(0,s.bl)(u.resumeQueue),K(this,"onResume",C(this,L(this,this.animation.to)),this))},start:this._merge.bind(this,a)}}).then((t=>{if(n.loop&&t.finished&&(!e||!t.noop)){const t=X(n);if(t)return this._update(t,!0)}return t}))}_merge(t,e,n){if(e.cancel)return this.stop(!0),n(V(this));const i=!s.is.und(t.to),c=!s.is.und(t.from);if(i||c){if(!(e.callId>this._lastToId))return n(V(this));this._lastToId=e.callId}const{key:l,defaultProps:d,animation:h}=this,{to:f,from:p}=h;let{to:m=f,from:y=p}=t;!c||i||e.default&&!s.is.und(m)||(m=y),e.reverse&&([m,y]=[y,m]);const _=!(0,s.Xy)(y,p);_&&(h.from=y),y=(0,s.je)(y);const b=!(0,s.Xy)(m,f);b&&this._focus(m);const w=v(e.to),{config:P}=h,{decay:j,velocity:A}=P;(i||c)&&(P.velocity=0),e.config&&!w&&function(t,e,n){n&&(k(n=o({},n),e),e=o({},n,e)),k(t,e),Object.assign(t,e);for(const e in S)null==t[e]&&(t[e]=S[e]);let{mass:i,frequency:r,damping:a}=t;s.is.und(r)||(r<.01&&(r=.01),a<0&&(a=0),t.tension=Math.pow(2*Math.PI/r,2)*i,t.friction=4*Math.PI*a*i/r)}(P,a(e.config,l),e.config!==d.config?a(d.config,l):void 0);let I=(0,r.ys)(this);if(!I||s.is.und(m))return n(C(this,!0));const q=s.is.und(e.reset)?c&&!e.default:!s.is.und(y)&&u(e.reset,l),R=q?y:this.get(),E=g(m),U=s.is.num(E)||s.is.arr(E)||(0,s.Df)(E),T=!w&&(!U||u(d.immediate||e.immediate,l));if(b){const t=(0,r.sb)(m);if(t!==I.constructor){if(!T)throw Error(`Cannot animate between ${I.constructor.name} and ${t.name}, as the "to" prop suggests`);I=this._set(E)}}const $=I.constructor;let M=(0,s.j$)(m),F=!1;if(!M){const t=q||!z(this)&&_;(b||t)&&(F=(0,s.Xy)(g(R),E),M=!F),((0,s.Xy)(h.immediate,T)||T)&&(0,s.Xy)(P.decay,j)&&(0,s.Xy)(P.velocity,A)||(M=!0)}if(F&&W(this)&&(h.changed&&!q?M=!0:M||this._stop(f)),!w&&((M||(0,s.j$)(f))&&(h.values=I.getPayload(),h.toValues=(0,s.j$)(m)?null:$==r.eC?[1]:(0,s.qo)(E)),h.immediate!=T&&(h.immediate=T,T||q||this._set(f)),M)){const{onRest:t}=h;(0,s.S6)(J,(t=>Y(this,e,t)));const i=C(this,L(this,f));(0,s.bl)(this._pendingCalls,i),this._pendingCalls.add(n),h.changed&&s.Wn.batchedUpdates((()=>{h.changed=!q,null==t||t(i,this),q?a(d.onRest,i):null==h.onStart||h.onStart(i,this)}))}q&&this._set(R),w?n(x(e.to,e,this._state,this)):M?this._start():W(this)&&!b?this._pendingCalls.add(n):n(O(R))}_focus(t){const e=this.animation;t!==e.to&&((0,s.Ll)(this)&&this._detach(),e.to=t,(0,s.Ll)(this)&&this._attach())}_attach(){let t=0;const{to:e}=this.animation;(0,s.j$)(e)&&((0,s.UI)(e,this),T(e)&&(t=e.priority+1)),this.priority=t}_detach(){const{to:t}=this.animation;(0,s.j$)(t)&&(0,s.iL)(t,this)}_set(t,e=!0){const n=(0,s.je)(t);if(!s.is.und(n)){const t=(0,r.ys)(this);if(!t||!(0,s.Xy)(n,t.getValue())){const i=(0,r.sb)(n);t&&t.constructor==i?t.setValue(n):(0,r.f3)(this,i.create(n)),t&&s.Wn.batchedUpdates((()=>{this._onChange(n,e)}))}}return(0,r.ys)(this)}_onStart(){const t=this.animation;t.changed||(t.changed=!0,K(this,"onStart",C(this,L(this,t.to)),this))}_onChange(t,e){e||(this._onStart(),a(this.animation.onChange,t,this)),a(this.defaultProps.onChange,t,this),super._onChange(t,e)}_start(){const t=this.animation;(0,r.ys)(this).reset((0,s.je)(t.to)),t.immediate||(t.fromValues=t.values.map((t=>t.lastPosition))),W(this)||(H(this,!0),D(this)||this._resume())}_resume(){s.OH.skipAnimation?this.finish():s.fT.start(this)}_stop(t,e){if(W(this)){H(this,!1);const n=this.animation;(0,s.S6)(n.values,(t=>{t.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),(0,s.k0)(this,{type:"idle",parent:this});const i=e?V(this.get()):C(this.get(),L(this,null!=t?t:n.to));(0,s.bl)(this._pendingCalls,i),n.changed&&(n.changed=!1,K(this,"onRest",i,this))}}}function L(t,e){const n=g(e),i=g(t.get());return(0,s.Xy)(i,n)}function X(t,e=t.loop,n=t.to){let s=a(e);if(s){const i=!0!==s&&m(s),r=(i||t).reverse,a=!i||i.reset;return Z(o({},t,{loop:e,default:!1,pause:void 0,to:!r||v(n)?n:void 0,from:a?t.from:void 0,reset:a},i))}}function Z(t){const{to:e,from:n}=t=m(t),i=new Set;return s.is.obj(e)&&G(e,i),s.is.obj(n)&&G(n,i),t.keys=i.size?Array.from(i):null,t}function B(t){const e=Z(t);return s.is.und(e.default)&&(e.default=h(e)),e}function G(t,e){(0,s.rU)(t,((t,n)=>null!=t&&e.add(n)))}const J=["onStart","onRest","onChange","onPause","onResume"];function Y(t,e,n){t.animation[n]=e[n]!==l(e,n)?c(e[n],t.key):void 0}function K(t,e,...n){var s,i,r,o;null==(s=(i=t.animation)[e])||s.call(i,...n),null==(r=(o=t.defaultProps)[e])||r.call(o,...n)}const tt=["onStart","onChange","onRest"];let et=1;class nt{constructor(t,e){this.id=et++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),e&&(this._flush=e),t&&this.start(o({default:!0},t))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((t=>t.idle))}get item(){return this._item}set item(t){this._item=t}get(){const t={};return this.each(((e,n)=>t[n]=e.get())),t}set(t){for(const e in t){const n=t[e];s.is.und(n)||this.springs[e].set(n)}}update(t){return t&&this.queue.push(Z(t)),this}start(t){let{queue:e}=this;return t?e=(0,s.qo)(t).map(Z):this.queue=[],this._flush?this._flush(this,e):(ct(this,e),st(this,e))}stop(t,e){if(t!==!!t&&(e=t),e){const n=this.springs;(0,s.S6)((0,s.qo)(e),(e=>n[e].stop(!!t)))}else R(this._state,this._lastAsyncId),this.each((e=>e.stop(!!t)));return this}pause(t){if(s.is.und(t))this.start({pause:!0});else{const e=this.springs;(0,s.S6)((0,s.qo)(t),(t=>e[t].pause()))}return this}resume(t){if(s.is.und(t))this.start({pause:!1});else{const e=this.springs;(0,s.S6)((0,s.qo)(t),(t=>e[t].resume()))}return this}each(t){(0,s.rU)(this.springs,t)}_onFrame(){const{onStart:t,onChange:e,onRest:n}=this._events,i=this._active.size>0,r=this._changed.size>0;(i&&!this._started||r&&!this._started)&&(this._started=!0,(0,s.yl)(t,(([t,e])=>{e.value=this.get(),t(e,this,this._item)})));const o=!i&&this._started,a=r||o&&n.size?this.get():null;r&&e.size&&(0,s.yl)(e,(([t,e])=>{e.value=a,t(e,this,this._item)})),o&&(this._started=!1,(0,s.yl)(n,(([t,e])=>{e.value=a,t(e,this,this._item)})))}eventObserved(t){if("change"==t.type)this._changed.add(t.parent),t.idle||this._active.add(t.parent);else{if("idle"!=t.type)return;this._active.delete(t.parent)}s.Wn.onFrame(this._onFrame)}}function st(t,e){return Promise.all(e.map((e=>it(t,e)))).then((e=>q(t,e)))}async function it(t,e,n){const{keys:i,to:r,from:o,loop:a,onRest:u,onResolve:c}=e,d=s.is.obj(e.default)&&e.default;a&&(e.loop=!1),!1===r&&(e.to=null),!1===o&&(e.from=null);const h=s.is.arr(r)||s.is.fun(r)?r:void 0;h?(e.to=void 0,e.onRest=void 0,d&&(d.onRest=void 0)):(0,s.S6)(tt,(n=>{const i=e[n];if(s.is.fun(i)){const s=t._events[n];e[n]=({finished:t,cancelled:e})=>{const n=s.get(i);n?(t||(n.finished=!1),e&&(n.cancelled=!0)):s.set(i,{value:null,finished:t||!1,cancelled:e||!1})},d&&(d[n]=e[n])}}));const f=t._state;e.pause===!f.paused?(f.paused=e.pause,(0,s.bl)(e.pause?f.pauseQueue:f.resumeQueue)):f.paused&&(e.pause=!0);const p=(i||Object.keys(t.springs)).map((n=>t.springs[n].start(e))),m=!0===e.cancel||!0===l(e,"cancel");(h||m&&f.asyncId)&&p.push(I(++t._lastAsyncId,{props:e,state:f,actions:{pause:s.ZT,resume:s.ZT,start(e,n){m?(R(f,t._lastAsyncId),n(V(t))):(e.onRest=u,n(x(h,e,f,t)))}}})),f.paused&&await new Promise((t=>{f.resumeQueue.add(t)}));const g=q(t,await Promise.all(p));if(a&&g.finished&&(!n||!g.noop)){const n=X(e,a,r);if(n)return ct(t,[n]),it(t,n,!0)}return c&&s.Wn.batchedUpdates((()=>c(g,t,t.item))),g}function rt(t,e){const n=o({},t.springs);return e&&(0,s.S6)((0,s.qo)(e),(t=>{s.is.und(t.keys)&&(t=Z(t)),s.is.obj(t.to)||(t=o({},t,{to:void 0})),ut(n,t,(t=>at(t)))})),ot(t,n),n}function ot(t,e){(0,s.rU)(e,((e,n)=>{t.springs[n]||(t.springs[n]=e,(0,s.UI)(e,t))}))}function at(t,e){const n=new Q;return n.key=t,e&&(0,s.UI)(n,e),n}function ut(t,e,n){e.keys&&(0,s.S6)(e.keys,(s=>{(t[s]||(t[s]=n(s)))._prepareNode(e)}))}function ct(t,e){(0,s.S6)(e,(e=>{ut(t.springs,e,(e=>at(e,t)))}))}const lt=t=>{let{children:e}=t,n=function(t,e){if(null==t)return{};var n,s,i={},r=Object.keys(t);for(s=0;s<r.length;s++)n=r[s],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,["children"]);const r=(0,i.useContext)(dt),o=n.pause||!!r.pause,a=n.immediate||!!r.immediate;n=(0,s.Pr)((()=>({pause:o,immediate:a})),[o,a]);const{Provider:u}=dt;return i.createElement(u,{value:n},e)},dt=(ht=lt,ft={},Object.assign(ht,i.createContext(ft)),ht.Provider._context=ht,ht.Consumer._context=ht,ht);var ht,ft;lt.Provider=dt.Provider,lt.Consumer=dt.Consumer;const pt=()=>{const t=[],e=function(e){(0,s.ZR)();const i=[];return(0,s.S6)(t,((t,r)=>{if(s.is.und(e))i.push(t.start());else{const s=n(e,t,r);s&&i.push(t.start(s))}})),i};e.current=t,e.add=function(e){t.includes(e)||t.push(e)},e.delete=function(e){const n=t.indexOf(e);~n&&t.splice(n,1)},e.pause=function(){return(0,s.S6)(t,(t=>t.pause(...arguments))),this},e.resume=function(){return(0,s.S6)(t,(t=>t.resume(...arguments))),this},e.set=function(e){(0,s.S6)(t,(t=>t.set(e)))},e.start=function(e){const n=[];return(0,s.S6)(t,((t,i)=>{if(s.is.und(e))n.push(t.start());else{const s=this._getProps(e,t,i);s&&n.push(t.start(s))}})),n},e.stop=function(){return(0,s.S6)(t,(t=>t.stop(...arguments))),this},e.update=function(e){return(0,s.S6)(t,((t,n)=>t.update(this._getProps(e,t,n)))),this};const n=function(t,e,n){return s.is.fun(t)?t(n,e):t};return e._getProps=n,e};function mt(t,e,n){const r=s.is.fun(e)&&e;r&&!n&&(n=[]);const a=(0,i.useMemo)((()=>r||3==arguments.length?pt():void 0),[]),u=(0,i.useRef)(0),c=(0,s.NW)(),l=(0,i.useMemo)((()=>({ctrls:[],queue:[],flush(t,e){const n=rt(t,e);return u.current>0&&!l.queue.length&&!Object.keys(n).some((e=>!t.springs[e]))?st(t,e):new Promise((s=>{ot(t,n),l.queue.push((()=>{s(st(t,e))})),c()}))}})),[]),d=(0,i.useRef)([...l.ctrls]),h=[],f=(0,s.zH)(t)||0,p=d.current.slice(t,f);function m(t,n){for(let s=t;s<n;s++){const t=d.current[s]||(d.current[s]=new nt(null,l.flush)),n=r?r(s,t):e[s];n&&(h[s]=B(n))}}(0,i.useMemo)((()=>{d.current.length=t,m(f,t)}),[t]),(0,i.useMemo)((()=>{m(0,Math.min(f,t))}),n);const g=d.current.map(((t,e)=>rt(t,h[e]))),v=(0,i.useContext)(lt),w=(0,s.zH)(v),S=v!==w&&y(v);(0,s.bt)((()=>{u.current++,l.ctrls=d.current;const{queue:t}=l;t.length&&(l.queue=[],(0,s.S6)(t,(t=>t()))),(0,s.S6)(p,(t=>{_(t,a),t.stop(!0)})),(0,s.S6)(d.current,((t,e)=>{null==a||a.add(t),S&&t.start({default:v});const n=h[e];n&&(b(t,n.ref),t.ref?t.queue.push(n):t.start(n))}))})),(0,s.tf)((()=>()=>{(0,s.S6)(l.ctrls,(t=>t.stop(!0)))}));const P=g.map((t=>o({},t)));return a?[P,a]:P}function gt(t,e){const n=s.is.fun(t),[[i],r]=mt(1,n?t:[t],n?e||[]:e);return n||2==arguments.length?[i,r]:i}let yt;!function(t){t.MOUNT="mount",t.ENTER="enter",t.UPDATE="update",t.LEAVE="leave"}(yt||(yt={}));class vt extends M{constructor(t,e){super(),this.idle=!0,this._active=new Set,this.source=t,this.calc=(0,s.mD)(...e);const n=this._get(),i=(0,r.sb)(n);(0,r.f3)(this,i.create(n))}advance(t){const e=this._get(),n=this.get();(0,s.Xy)(e,n)||((0,r.ys)(this).setValue(e),this._onChange(e,this.idle)),!this.idle&&bt(this._active)&&wt(this)}_get(){const t=s.is.arr(this.source)?this.source.map(s.je):(0,s.qo)((0,s.je)(this.source));return this.calc(...t)}_start(){this.idle&&!bt(this._active)&&(this.idle=!1,(0,s.S6)((0,r.He)(this),(t=>{t.done=!1})),s.OH.skipAnimation?(s.Wn.batchedUpdates((()=>this.advance())),wt(this)):s.fT.start(this))}_attach(){let t=1;(0,s.S6)((0,s.qo)(this.source),(e=>{(0,s.j$)(e)&&(0,s.UI)(e,this),T(e)&&(e.idle||this._active.add(e),t=Math.max(t,e.priority+1))})),this.priority=t,this._start()}_detach(){(0,s.S6)((0,s.qo)(this.source),(t=>{(0,s.j$)(t)&&(0,s.iL)(t,this)})),this._active.clear(),wt(this)}eventObserved(t){"change"==t.type?t.idle?this.advance():(this._active.add(t.parent),this._start()):"idle"==t.type?this._active.delete(t.parent):"priority"==t.type&&(this.priority=(0,s.qo)(this.source).reduce(((t,e)=>Math.max(t,(T(e)?e.priority:0)+1)),0))}}function _t(t){return!1!==t.idle}function bt(t){return!t.size||Array.from(t).every(_t)}function wt(t){t.idle||(t.idle=!0,(0,s.S6)((0,r.He)(t),(t=>{t.done=!0})),(0,s.k0)(t,{type:"idle",parent:t}))}s.OH.assign({createStringInterpolator:s.qS,to:(t,e)=>new vt(t,e)}),s.fT.advance},312:(t,e,n)=>{"use strict";n.d(e,{B0:()=>_t,OH:()=>T,UI:()=>wt,k0:()=>vt,O9:()=>L,mD:()=>dt,qS:()=>Ot,dE:()=>P,ZR:()=>Ut,LW:()=>Rt,S6:()=>A,rU:()=>I,yl:()=>O,bl:()=>C,fT:()=>W,Ll:()=>yt,je:()=>gt,j$:()=>mt,is:()=>k,Df:()=>Tt,Xy:()=>j,ZT:()=>S,Wn:()=>i,iL:()=>St,qo:()=>q,NW:()=>Ft,bt:()=>Ht,Pr:()=>Wt,tf:()=>$t,zH:()=>Dt});let s=v();const i=t=>p(t,s);let r=v();i.write=t=>p(t,r);let o=v();i.onStart=t=>p(t,o);let a=v();i.onFrame=t=>p(t,a);let u=v();i.onFinish=t=>p(t,u);let c=[];i.setTimeout=(t,e)=>{let n=i.now()+e,s=()=>{let t=c.findIndex((t=>t.cancel==s));~t&&c.splice(t,1),b.count-=~t?1:0},r={time:n,handler:t,cancel:s};return c.splice(l(n),0,r),b.count+=1,m(),r};let l=t=>~(~c.findIndex((e=>e.time>t))||~c.length);i.cancel=t=>{s.delete(t),r.delete(t)},i.sync=t=>{f=!0,i.batchedUpdates(t),f=!1},i.throttle=t=>{let e;function n(){try{t(...e)}finally{e=null}}function s(...t){e=t,i.onStart(n)}return s.handler=t,s.cancel=()=>{o.delete(n),e=null},s};let d="undefined"!=typeof window?window.requestAnimationFrame:()=>{};i.use=t=>d=t,i.now="undefined"!=typeof performance?()=>performance.now():Date.now,i.batchedUpdates=t=>t(),i.catch=console.error;let h=-1,f=!1;function p(t,e){f?(e.delete(t),t(0)):(e.add(t),m())}function m(){h<0&&(h=0,d(g))}function g(){~h&&(d(g),i.batchedUpdates(y))}function y(){let t=h;h=i.now();let e=l(h);e&&(_(c.splice(0,e),(t=>t.handler())),b.count-=e),o.flush(),s.flush(t?Math.min(64,h-t):16.667),a.flush(),r.flush(),u.flush()}function v(){let t=new Set,e=t;return{add(n){b.count+=e!=t||t.has(n)?0:1,t.add(n)},delete:n=>(b.count-=e==t&&t.has(n)?1:0,t.delete(n)),flush(n){e.size&&(t=new Set,b.count-=e.size,_(e,(e=>e(n)&&t.add(e))),b.count+=t.size,e=t)}}}function _(t,e){t.forEach((t=>{try{e(t)}catch(t){i.catch(t)}}))}const b={count:0,clear(){h=-1,c=[],o=v(),s=v(),a=v(),r=v(),u=v(),b.count=0}};var w=n(784);function S(){}const P=(t,e,n)=>Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0}),k={arr:Array.isArray,obj:t=>!!t&&"Object"===t.constructor.name,fun:t=>"function"==typeof t,str:t=>"string"==typeof t,num:t=>"number"==typeof t,und:t=>void 0===t};function j(t,e){if(k.arr(t)){if(!k.arr(e)||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}return t===e}const A=(t,e)=>t.forEach(e);function I(t,e,n){for(const s in t)e.call(n,t[s],s)}const q=t=>k.und(t)?[]:k.arr(t)?t:[t];function O(t,e){if(t.size){const n=Array.from(t);t.clear(),A(n,e)}}const C=(t,...e)=>O(t,(t=>t(...e)));let V,x,R=null,E=!1,U=S;var T=Object.freeze({__proto__:null,get createStringInterpolator(){return V},get to(){return x},get colors(){return R},get skipAnimation(){return E},get willAdvance(){return U},assign:t=>{t.to&&(x=t.to),t.now&&(i.now=t.now),void 0!==t.colors&&(R=t.colors),null!=t.skipAnimation&&(E=t.skipAnimation),t.createStringInterpolator&&(V=t.createStringInterpolator),t.requestAnimationFrame&&i.use(t.requestAnimationFrame),t.batchedUpdates&&(i.batchedUpdates=t.batchedUpdates),t.willAdvance&&(U=t.willAdvance)}});const $=new Set;let M=[],F=[],z=0;const W={get idle(){return!$.size&&!M.length},start(t){z>t.priority?($.add(t),i.onStart(D)):(H(t),i(Q))},advance:Q,sort(t){if(z)i.onFrame((()=>W.sort(t)));else{const e=M.indexOf(t);~e&&(M.splice(e,1),N(t))}},clear(){M=[],$.clear()}};function D(){$.forEach(H),$.clear(),i(Q)}function H(t){M.includes(t)||N(t)}function N(t){M.splice(function(e,n){const s=e.findIndex((e=>e.priority>t.priority));return s<0?e.length:s}(M),0,t)}function Q(t){const e=F;for(let n=0;n<M.length;n++){const s=M[n];z=s.priority,s.idle||(U(s),s.advance(t),s.idle||e.push(s))}return z=0,F=M,F.length=0,M=e,M.length>0}const L={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},X="[-+]?\\d*\\.?\\d+",Z=X+"%";function B(...t){return"\\(\\s*("+t.join(")\\s*,\\s*(")+")\\s*\\)"}const G=new RegExp("rgb"+B(X,X,X)),J=new RegExp("rgba"+B(X,X,X,X)),Y=new RegExp("hsl"+B(X,Z,Z)),K=new RegExp("hsla"+B(X,Z,Z,X)),tt=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,et=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,nt=/^#([0-9a-fA-F]{6})$/,st=/^#([0-9a-fA-F]{8})$/;function it(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function rt(t,e,n){const s=n<.5?n*(1+e):n+e-n*e,i=2*n-s,r=it(i,s,t+1/3),o=it(i,s,t),a=it(i,s,t-1/3);return Math.round(255*r)<<24|Math.round(255*o)<<16|Math.round(255*a)<<8}function ot(t){const e=parseInt(t,10);return e<0?0:e>255?255:e}function at(t){return(parseFloat(t)%360+360)%360/360}function ut(t){const e=parseFloat(t);return e<0?0:e>1?255:Math.round(255*e)}function ct(t){const e=parseFloat(t);return e<0?0:e>100?1:e/100}function lt(t){let e=function(t){let e;return"number"==typeof t?t>>>0===t&&t>=0&&t<=4294967295?t:null:(e=nt.exec(t))?parseInt(e[1]+"ff",16)>>>0:R&&void 0!==R[t]?R[t]:(e=G.exec(t))?(ot(e[1])<<24|ot(e[2])<<16|ot(e[3])<<8|255)>>>0:(e=J.exec(t))?(ot(e[1])<<24|ot(e[2])<<16|ot(e[3])<<8|ut(e[4]))>>>0:(e=tt.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+"ff",16)>>>0:(e=st.exec(t))?parseInt(e[1],16)>>>0:(e=et.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+e[4]+e[4],16)>>>0:(e=Y.exec(t))?(255|rt(at(e[1]),ct(e[2]),ct(e[3])))>>>0:(e=K.exec(t))?(rt(at(e[1]),ct(e[2]),ct(e[3]))|ut(e[4]))>>>0:null}(t);return null===e?t:(e=e||0,`rgba(${(4278190080&e)>>>24}, ${(16711680&e)>>>16}, ${(65280&e)>>>8}, ${(255&e)/255})`)}const dt=(t,e,n)=>{if(k.fun(t))return t;if(k.arr(t))return dt({range:t,output:e,extrapolate:n});if(k.str(t.output[0]))return V(t);const s=t,i=s.output,r=s.range||[0,1],o=s.extrapolateLeft||s.extrapolate||"extend",a=s.extrapolateRight||s.extrapolate||"extend",u=s.easing||(t=>t);return t=>{const e=function(t,e){for(var n=1;n<e.length-1&&!(e[n]>=t);++n);return n-1}(t,r);return function(t,e,n,s,i,r,o,a,u){let c=u?u(t):t;if(c<e){if("identity"===o)return c;"clamp"===o&&(c=e)}if(c>n){if("identity"===a)return c;"clamp"===a&&(c=n)}return s===i?s:e===n?t<=e?s:i:(e===-1/0?c=-c:n===1/0?c-=e:c=(c-e)/(n-e),c=r(c),s===-1/0?c=-c:i===1/0?c+=s:c=c*(i-s)+s,c)}(t,r[e],r[e+1],i[e],i[e+1],u,o,a,s.map)}};function ht(){return(ht=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t}).apply(this,arguments)}const ft=Symbol.for("FluidValue.get"),pt=Symbol.for("FluidValue.observers"),mt=t=>Boolean(t&&t[ft]),gt=t=>t&&t[ft]?t[ft]():t,yt=t=>t[pt]||null;function vt(t,e){let n=t[pt];n&&n.forEach((t=>{!function(t,e){t.eventObserved?t.eventObserved(e):t(e)}(t,e)}))}class _t{constructor(t){if(!t&&!(t=this.get))throw Error("Unknown getter");bt(this,t)}}const bt=(t,e)=>Pt(t,ft,e);function wt(t,e){if(t[ft]){let n=t[pt];n||Pt(t,pt,n=new Set),n.has(e)||(n.add(e),t.observerAdded&&t.observerAdded(n.size,e))}return e}function St(t,e){let n=t[pt];if(n&&n.has(e)){const s=n.size-1;s?n.delete(e):t[pt]=null,t.observerRemoved&&t.observerRemoved(s,e)}}const Pt=(t,e,n)=>Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0}),kt=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,jt=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;let At;const It=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,qt=(t,e,n,s,i)=>`rgba(${Math.round(e)}, ${Math.round(n)}, ${Math.round(s)}, ${i})`,Ot=t=>{At||(At=R?new RegExp(`(${Object.keys(R).join("|")})(?!\\w)`,"g"):/^\b$/);const e=t.output.map((t=>gt(t).replace(jt,lt).replace(At,lt))),n=e.map((t=>t.match(kt).map(Number))),s=n[0].map(((t,e)=>n.map((t=>{if(!(e in t))throw Error('The arity of each "output" value must be equal');return t[e]})))).map((e=>dt(ht({},t,{output:e}))));return t=>{let n=0;return e[0].replace(kt,(()=>String(s[n++](t)))).replace(It,qt)}},Ct="react-spring: ",Vt=t=>{const e=t;let n=!1;if("function"!=typeof e)throw new TypeError(`${Ct}once requires a function parameter`);return(...t)=>{n||(e(...t),n=!0)}},xt=Vt(console.warn);function Rt(){xt(`${Ct}The "interpolate" function is deprecated in v9 (use "to" instead)`)}const Et=Vt(console.warn);function Ut(){Et(`${Ct}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)}function Tt(t){return k.str(t)&&("#"==t[0]||/\d/.test(t)||t in(R||{}))}const $t=t=>(0,w.useEffect)(t,Mt),Mt=[];function Ft(){const t=(0,w.useState)()[1],e=(0,w.useState)(zt)[0];return $t(e.unmount),()=>{e.current&&t({})}}function zt(){const t={current:!0,unmount:()=>()=>{t.current=!1}};return t}function Wt(t,e){const[n]=(0,w.useState)((()=>({inputs:e,result:t()}))),s=(0,w.useRef)(),i=s.current;let r=i;return r?Boolean(e&&r.inputs&&function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}(e,r.inputs))||(r={inputs:e,result:t()}):r=n,(0,w.useEffect)((()=>{s.current=r,i==n&&(n.inputs=n.result=void 0)}),[r]),r.result}function Dt(t){const e=(0,w.useRef)();return(0,w.useEffect)((()=>{e.current=t})),e.current}const Ht="undefined"!=typeof window&&window.document&&window.document.createElement?w.useLayoutEffect:w.useEffect}}]);