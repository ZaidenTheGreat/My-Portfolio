(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5807:e=>{"use strict";e.exports=require("module")},5315:e=>{"use strict";e.exports=require("path")},7360:e=>{"use strict";e.exports=require("url")},5378:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>s.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>h,tree:()=>c}),a(3668),a(6067),a(5866);var n=a(3191),o=a(8716),r=a(7922),s=a.n(r),i=a(5231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);a.d(t,l);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,3668)),"C:\\Users\\ZAY\\Desktop\\site\\src\\app\\page.js"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,6067)),"C:\\Users\\ZAY\\Desktop\\site\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\ZAY\\Desktop\\site\\src\\app\\page.js"],u="/page",m={require:a,loadChunk:()=>Promise.resolve()},h=new n.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},2115:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,2994,23)),Promise.resolve().then(a.t.bind(a,6114,23)),Promise.resolve().then(a.t.bind(a,9727,23)),Promise.resolve().then(a.t.bind(a,9671,23)),Promise.resolve().then(a.t.bind(a,1868,23)),Promise.resolve().then(a.t.bind(a,4759,23))},9631:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,2481,23)),Promise.resolve().then(a.bind(a,933)),Promise.resolve().then(a.bind(a,6618)),Promise.resolve().then(a.bind(a,4204)),Promise.resolve().then(a.bind(a,9963)),Promise.resolve().then(a.bind(a,4744))},793:(e,t,a)=>{Promise.resolve().then(a.bind(a,6467)),Promise.resolve().then(a.bind(a,5446))},6467:(e,t,a)=>{"use strict";a.d(t,{default:()=>s});var n=a(326),o=a(7577);let r=()=>({id:Math.random(),top:`${100*Math.random()}%`,left:`${100*Math.random()}%`,animationDuration:`${5*Math.random()+5}s`}),s=()=>{let[e,t]=(0,o.useState)([]);return(0,o.useEffect)(()=>{let e=setInterval(()=>{let e=r();t(t=>[...t.slice(-14),e])},1e3);return()=>clearInterval(e)},[]),n.jsx("div",{className:"fixed top-0 left-0 w-full h-full -z-10 overflow-hidden",children:e.map(e=>n.jsx("div",{className:"absolute roudned-full w-[10px] h-[10px] bg-firefly-radial",style:{top:e.top,left:e.left,animation:`move ${e.animationDuration} infinite alternate`}},e.id))})}},4744:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var n=a(326),o=a(1734),r=a(8052),s=a(1135),i=a(7577);let l=({children:e,className:t})=>(0,n.jsxs)(r.Xz,{className:(0,s.Z)("w-screen h-screen -z-10 relative",t),shadows:!1,dpr:[1,2],children:[n.jsx(i.Suspense,{fallback:null,children:e}),n.jsx(o.qA,{preset:"sunset"})]})},5446:(e,t,a)=>{"use strict";a.d(t,{default:()=>d});var n=a(326),o=a(9170),r=a(9145),s=a(5128),i=a(7577),l=a(962);let c=({onClose:e,toggle:t})=>(0,l.createPortal)(n.jsx("div",{className:"fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center",children:(0,n.jsxs)("div",{className:"bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] py-8 px-6 xs:px-10 sm:px-16 rounded shadow-glass-inset text-center space-y-8 ",children:[n.jsx("p",{className:"font-light",children:"Would you like to play the background music?"}),(0,n.jsxs)("div",{className:"flex items-center justify-center space-x-4",children:[n.jsx("button",{onClick:t,className:"px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded mr-2",children:"Yes"}),n.jsx("button",{onClick:e,className:"px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded",children:"No"})]})]})}),document.getElementById("my-modal")),d=()=>{let e=(0,i.useRef)(null),[t,a]=(0,i.useState)(!1),[l,d]=(0,i.useState)(!1),u=(0,i.useCallback)(()=>{"true"!==localStorage.getItem("musicConsent")||t||(e.current.play(),a(!0)),["click","keydown","touchstart"].forEach(e=>document.removeEventListener(e,u))},[t]);(0,i.useEffect)(()=>{let e=localStorage.getItem("musicConsent"),t=localStorage.getItem("consentTime");e&&t&&new Date(t).getTime()+2592e5>new Date?(a("true"===e),"true"===e&&["click","keydown","touchstart"].forEach(e=>document.addEventListener(e,u))):d(!0)},[u]);let m=()=>{let n=!t;a(n),n?e.current.play():e.current.pause(),localStorage.setItem("musicConsent",String(n)),localStorage.setItem("consentTime",new Date().toISOString()),d(!1)};return(0,n.jsxs)("div",{className:"fixed top-4 right-2.5 xs:right-4 z-50 group",children:[l&&n.jsx(c,{onClose:()=>d(!1),toggle:m}),(0,n.jsxs)("audio",{ref:e,loop:!0,children:[n.jsx("source",{src:"/audio/birds-forest-sounds.mp3",type:"audio/mpeg"}),"Your browser does not support the audio element."]}),n.jsx(o.E.button,{onClick:m,initial:{scale:0},animate:{scale:1},transition:{delay:1},className:"w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 custom-bg","aria-label":"Sound control button",name:"Sound control button",children:t?n.jsx(r.Z,{className:"w-full h-full text-foreground group-hover:text-accent",strokeWidth:1.5}):n.jsx(s.Z,{className:"w-full h-full text-foreground group-hover:text-accent",strokeWidth:1.5})})]})}},4204:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Scene:()=>j,default:()=>w});var n=a(326),o=a(7577),r=a(649),s=a(8052),i=a(838),l=a(5353),c=a(5797);let d=e=>"function"==typeof e,u=o.forwardRef(({envMap:e,resolution:t=256,frames:a=1/0,makeDefault:n,children:s,...i},u)=>{let m=(0,r.D)(({set:e})=>e),h=(0,r.D)(({camera:e})=>e),p=(0,r.D)(({size:e})=>e),b=o.useRef(null);o.useImperativeHandle(u,()=>b.current,[]);let f=o.useRef(null),g=function(e,t,a){let n=(0,r.D)(e=>e.size),s=(0,r.D)(e=>e.viewport),i="number"==typeof e?e:n.width*s.dpr,l=n.height*s.dpr,{samples:d=0,depth:u,...m}=("number"==typeof e?void 0:e)||{},h=o.useMemo(()=>{let e=new c.WebGLRenderTarget(i,l,{minFilter:c.LinearFilter,magFilter:c.LinearFilter,type:c.HalfFloatType,...m});return u&&(e.depthTexture=new c.DepthTexture(i,l,c.FloatType)),e.samples=d,e},[]);return o.useLayoutEffect(()=>{h.setSize(i,l),d&&(h.samples=d)},[d,h,i,l]),o.useEffect(()=>()=>h.dispose(),[]),h}(t);o.useLayoutEffect(()=>{i.manual||(b.current.aspect=p.width/p.height)},[p,i]),o.useLayoutEffect(()=>{b.current.updateProjectionMatrix()});let x=0,y=null,v=d(s);return(0,r.F)(t=>{v&&(a===1/0||x<a)&&(f.current.visible=!1,t.gl.setRenderTarget(g),y=t.scene.background,e&&(t.scene.background=e),t.gl.render(t.scene,b.current),t.scene.background=y,t.gl.setRenderTarget(null),f.current.visible=!0,x++)}),o.useLayoutEffect(()=>{if(n)return m(()=>({camera:b.current})),()=>m(()=>({camera:h}))},[b,n,m]),o.createElement(o.Fragment,null,o.createElement("perspectiveCamera",(0,l.Z)({ref:b},i),!v&&s),o.createElement("group",{ref:f},v&&s(g.texture)))});var m=Object.defineProperty,h=(e,t,a)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t,a)=>(h(e,"symbol"!=typeof t?t+"":t,a),a);let b=new c.Ray,f=new c.Plane,g=Math.cos(Math.PI/180*70),x=(e,t)=>(e%t+t)%t;class y extends c.EventDispatcher{constructor(e,t){super(),p(this,"object"),p(this,"domElement"),p(this,"enabled",!0),p(this,"target",new c.Vector3),p(this,"minDistance",0),p(this,"maxDistance",1/0),p(this,"minZoom",0),p(this,"maxZoom",1/0),p(this,"minPolarAngle",0),p(this,"maxPolarAngle",Math.PI),p(this,"minAzimuthAngle",-1/0),p(this,"maxAzimuthAngle",1/0),p(this,"enableDamping",!1),p(this,"dampingFactor",.05),p(this,"enableZoom",!0),p(this,"zoomSpeed",1),p(this,"enableRotate",!0),p(this,"rotateSpeed",1),p(this,"enablePan",!0),p(this,"panSpeed",1),p(this,"screenSpacePanning",!0),p(this,"keyPanSpeed",7),p(this,"zoomToCursor",!1),p(this,"autoRotate",!1),p(this,"autoRotateSpeed",2),p(this,"reverseOrbit",!1),p(this,"reverseHorizontalOrbit",!1),p(this,"reverseVerticalOrbit",!1),p(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),p(this,"mouseButtons",{LEFT:c.MOUSE.ROTATE,MIDDLE:c.MOUSE.DOLLY,RIGHT:c.MOUSE.PAN}),p(this,"touches",{ONE:c.TOUCH.ROTATE,TWO:c.TOUCH.DOLLY_PAN}),p(this,"target0"),p(this,"position0"),p(this,"zoom0"),p(this,"_domElementKeyEvents",null),p(this,"getPolarAngle"),p(this,"getAzimuthalAngle"),p(this,"setPolarAngle"),p(this,"setAzimuthalAngle"),p(this,"getDistance"),p(this,"getZoomScale"),p(this,"listenToKeyEvents"),p(this,"stopListenToKeyEvents"),p(this,"saveState"),p(this,"reset"),p(this,"update"),p(this,"connect"),p(this,"dispose"),p(this,"dollyIn"),p(this,"dollyOut"),p(this,"getScale"),p(this,"setScale"),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>d.phi,this.getAzimuthalAngle=()=>d.theta,this.setPolarAngle=e=>{let t=x(e,2*Math.PI),n=d.phi;n<0&&(n+=2*Math.PI),t<0&&(t+=2*Math.PI);let o=Math.abs(t-n);2*Math.PI-o<o&&(t<n?t+=2*Math.PI:n+=2*Math.PI),u.phi=t-n,a.update()},this.setAzimuthalAngle=e=>{let t=x(e,2*Math.PI),n=d.theta;n<0&&(n+=2*Math.PI),t<0&&(t+=2*Math.PI);let o=Math.abs(t-n);2*Math.PI-o<o&&(t<n?t+=2*Math.PI:n+=2*Math.PI),u.theta=t-n,a.update()},this.getDistance=()=>a.object.position.distanceTo(a.target),this.listenToKeyEvents=e=>{e.addEventListener("keydown",ee),this._domElementKeyEvents=e},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",ee),this._domElementKeyEvents=null},this.saveState=()=>{a.target0.copy(a.target),a.position0.copy(a.object.position),a.zoom0=a.object.zoom},this.reset=()=>{a.target.copy(a.target0),a.object.position.copy(a.position0),a.object.zoom=a.zoom0,a.object.updateProjectionMatrix(),a.dispatchEvent(n),a.update(),i=s.NONE},this.update=(()=>{let t=new c.Vector3,o=new c.Vector3(0,1,0),r=new c.Quaternion().setFromUnitVectors(e.up,o),p=r.clone().invert(),x=new c.Vector3,y=new c.Quaternion,v=2*Math.PI;return function(){let w=a.object.position;r.setFromUnitVectors(e.up,o),p.copy(r).invert(),t.copy(w).sub(a.target),t.applyQuaternion(r),d.setFromVector3(t),a.autoRotate&&i===s.NONE&&D(2*Math.PI/60/60*a.autoRotateSpeed),a.enableDamping?(d.theta+=u.theta*a.dampingFactor,d.phi+=u.phi*a.dampingFactor):(d.theta+=u.theta,d.phi+=u.phi);let j=a.minAzimuthAngle,E=a.maxAzimuthAngle;isFinite(j)&&isFinite(E)&&(j<-Math.PI?j+=v:j>Math.PI&&(j-=v),E<-Math.PI?E+=v:E>Math.PI&&(E-=v),j<=E?d.theta=Math.max(j,Math.min(E,d.theta)):d.theta=d.theta>(j+E)/2?Math.max(j,d.theta):Math.min(E,d.theta)),d.phi=Math.max(a.minPolarAngle,Math.min(a.maxPolarAngle,d.phi)),d.makeSafe(),!0===a.enableDamping?a.target.addScaledVector(h,a.dampingFactor):a.target.add(h),a.zoomToCursor&&N||a.object.isOrthographicCamera?d.radius=U(d.radius):d.radius=U(d.radius*m),t.setFromSpherical(d),t.applyQuaternion(p),w.copy(a.target).add(t),a.object.matrixAutoUpdate||a.object.updateMatrix(),a.object.lookAt(a.target),!0===a.enableDamping?(u.theta*=1-a.dampingFactor,u.phi*=1-a.dampingFactor,h.multiplyScalar(1-a.dampingFactor)):(u.set(0,0,0),h.set(0,0,0));let k=!1;if(a.zoomToCursor&&N){let n=null;if(a.object instanceof c.PerspectiveCamera&&a.object.isPerspectiveCamera){let e=t.length();n=U(e*m);let o=e-n;a.object.position.addScaledVector(O,o),a.object.updateMatrixWorld()}else if(a.object.isOrthographicCamera){let e=new c.Vector3(S.x,S.y,0);e.unproject(a.object),a.object.zoom=Math.max(a.minZoom,Math.min(a.maxZoom,a.object.zoom/m)),a.object.updateProjectionMatrix(),k=!0;let o=new c.Vector3(S.x,S.y,0);o.unproject(a.object),a.object.position.sub(o).add(e),a.object.updateMatrixWorld(),n=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),a.zoomToCursor=!1;null!==n&&(a.screenSpacePanning?a.target.set(0,0,-1).transformDirection(a.object.matrix).multiplyScalar(n).add(a.object.position):(b.origin.copy(a.object.position),b.direction.set(0,0,-1).transformDirection(a.object.matrix),Math.abs(a.object.up.dot(b.direction))<g?e.lookAt(a.target):(f.setFromNormalAndCoplanarPoint(a.object.up,a.target),b.intersectPlane(f,a.target))))}else a.object instanceof c.OrthographicCamera&&a.object.isOrthographicCamera&&(k=1!==m)&&(a.object.zoom=Math.max(a.minZoom,Math.min(a.maxZoom,a.object.zoom/m)),a.object.updateProjectionMatrix());return m=1,N=!1,!!(k||x.distanceToSquared(a.object.position)>l||8*(1-y.dot(a.object.quaternion))>l)&&(a.dispatchEvent(n),x.copy(a.object.position),y.copy(a.object.quaternion),k=!1,!0)}})(),this.connect=e=>{a.domElement=e,a.domElement.style.touchAction="none",a.domElement.addEventListener("contextmenu",et),a.domElement.addEventListener("pointerdown",B),a.domElement.addEventListener("pointercancel",Q),a.domElement.addEventListener("wheel",J)},this.dispose=()=>{var e,t,n,o,r,s;a.domElement&&(a.domElement.style.touchAction="auto"),null==(e=a.domElement)||e.removeEventListener("contextmenu",et),null==(t=a.domElement)||t.removeEventListener("pointerdown",B),null==(n=a.domElement)||n.removeEventListener("pointercancel",Q),null==(o=a.domElement)||o.removeEventListener("wheel",J),null==(r=a.domElement)||r.ownerDocument.removeEventListener("pointermove",$),null==(s=a.domElement)||s.ownerDocument.removeEventListener("pointerup",Q),null!==a._domElementKeyEvents&&a._domElementKeyEvents.removeEventListener("keydown",ee)};let a=this,n={type:"change"},o={type:"start"},r={type:"end"},s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},i=s.NONE,l=1e-6,d=new c.Spherical,u=new c.Spherical,m=1,h=new c.Vector3,y=new c.Vector2,v=new c.Vector2,w=new c.Vector2,j=new c.Vector2,E=new c.Vector2,k=new c.Vector2,P=new c.Vector2,T=new c.Vector2,M=new c.Vector2,O=new c.Vector3,S=new c.Vector2,N=!1,A=[],C={};function L(){return Math.pow(.95,a.zoomSpeed)}function D(e){a.reverseOrbit||a.reverseHorizontalOrbit?u.theta+=e:u.theta-=e}function _(e){a.reverseOrbit||a.reverseVerticalOrbit?u.phi+=e:u.phi-=e}let z=(()=>{let e=new c.Vector3;return function(t,a){e.setFromMatrixColumn(a,0),e.multiplyScalar(-t),h.add(e)}})(),I=(()=>{let e=new c.Vector3;return function(t,n){!0===a.screenSpacePanning?e.setFromMatrixColumn(n,1):(e.setFromMatrixColumn(n,0),e.crossVectors(a.object.up,e)),e.multiplyScalar(t),h.add(e)}})(),R=(()=>{let e=new c.Vector3;return function(t,n){let o=a.domElement;if(o&&a.object instanceof c.PerspectiveCamera&&a.object.isPerspectiveCamera){let r=a.object.position;e.copy(r).sub(a.target);let s=e.length();z(2*t*(s*=Math.tan(a.object.fov/2*Math.PI/180))/o.clientHeight,a.object.matrix),I(2*n*s/o.clientHeight,a.object.matrix)}else o&&a.object instanceof c.OrthographicCamera&&a.object.isOrthographicCamera?(z(t*(a.object.right-a.object.left)/a.object.zoom/o.clientWidth,a.object.matrix),I(n*(a.object.top-a.object.bottom)/a.object.zoom/o.clientHeight,a.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),a.enablePan=!1)}})();function Z(e){a.object instanceof c.PerspectiveCamera&&a.object.isPerspectiveCamera||a.object instanceof c.OrthographicCamera&&a.object.isOrthographicCamera?m=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),a.enableZoom=!1)}function Y(e){if(!a.zoomToCursor||!a.domElement)return;N=!0;let t=a.domElement.getBoundingClientRect(),n=e.clientX-t.left,o=e.clientY-t.top,r=t.width,s=t.height;S.x=n/r*2-1,S.y=-(o/s*2)+1,O.set(S.x,S.y,1).unproject(a.object).sub(a.object.position).normalize()}function U(e){return Math.max(a.minDistance,Math.min(a.maxDistance,e))}function H(e){y.set(e.clientX,e.clientY)}function F(e){j.set(e.clientX,e.clientY)}function V(){if(1==A.length)y.set(A[0].pageX,A[0].pageY);else{let e=.5*(A[0].pageX+A[1].pageX),t=.5*(A[0].pageY+A[1].pageY);y.set(e,t)}}function X(){if(1==A.length)j.set(A[0].pageX,A[0].pageY);else{let e=.5*(A[0].pageX+A[1].pageX),t=.5*(A[0].pageY+A[1].pageY);j.set(e,t)}}function W(){let e=A[0].pageX-A[1].pageX,t=A[0].pageY-A[1].pageY;P.set(0,Math.sqrt(e*e+t*t))}function q(e){if(1==A.length)v.set(e.pageX,e.pageY);else{let t=en(e),a=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);v.set(a,n)}w.subVectors(v,y).multiplyScalar(a.rotateSpeed);let t=a.domElement;t&&(D(2*Math.PI*w.x/t.clientHeight),_(2*Math.PI*w.y/t.clientHeight)),y.copy(v)}function G(e){if(1==A.length)E.set(e.pageX,e.pageY);else{let t=en(e),a=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);E.set(a,n)}k.subVectors(E,j).multiplyScalar(a.panSpeed),R(k.x,k.y),j.copy(E)}function K(e){var t;let n=en(e),o=e.pageX-n.x,r=e.pageY-n.y;T.set(0,Math.sqrt(o*o+r*r)),M.set(0,Math.pow(T.y/P.y,a.zoomSpeed)),t=M.y,Z(m/t),P.copy(T)}function B(e){var t,n;!1!==a.enabled&&(0===A.length&&(null==(t=a.domElement)||t.ownerDocument.addEventListener("pointermove",$),null==(n=a.domElement)||n.ownerDocument.addEventListener("pointerup",Q)),A.push(e),"touch"===e.pointerType?function(e){switch(ea(e),A.length){case 1:switch(a.touches.ONE){case c.TOUCH.ROTATE:if(!1===a.enableRotate)return;V(),i=s.TOUCH_ROTATE;break;case c.TOUCH.PAN:if(!1===a.enablePan)return;X(),i=s.TOUCH_PAN;break;default:i=s.NONE}break;case 2:switch(a.touches.TWO){case c.TOUCH.DOLLY_PAN:if(!1===a.enableZoom&&!1===a.enablePan)return;a.enableZoom&&W(),a.enablePan&&X(),i=s.TOUCH_DOLLY_PAN;break;case c.TOUCH.DOLLY_ROTATE:if(!1===a.enableZoom&&!1===a.enableRotate)return;a.enableZoom&&W(),a.enableRotate&&V(),i=s.TOUCH_DOLLY_ROTATE;break;default:i=s.NONE}break;default:i=s.NONE}i!==s.NONE&&a.dispatchEvent(o)}(e):function(e){let t;switch(e.button){case 0:t=a.mouseButtons.LEFT;break;case 1:t=a.mouseButtons.MIDDLE;break;case 2:t=a.mouseButtons.RIGHT;break;default:t=-1}switch(t){case c.MOUSE.DOLLY:if(!1===a.enableZoom)return;Y(e),P.set(e.clientX,e.clientY),i=s.DOLLY;break;case c.MOUSE.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===a.enablePan)return;F(e),i=s.PAN}else{if(!1===a.enableRotate)return;H(e),i=s.ROTATE}break;case c.MOUSE.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===a.enableRotate)return;H(e),i=s.ROTATE}else{if(!1===a.enablePan)return;F(e),i=s.PAN}break;default:i=s.NONE}i!==s.NONE&&a.dispatchEvent(o)}(e))}function $(e){!1!==a.enabled&&("touch"===e.pointerType?function(e){switch(ea(e),i){case s.TOUCH_ROTATE:if(!1===a.enableRotate)return;q(e),a.update();break;case s.TOUCH_PAN:if(!1===a.enablePan)return;G(e),a.update();break;case s.TOUCH_DOLLY_PAN:if(!1===a.enableZoom&&!1===a.enablePan)return;a.enableZoom&&K(e),a.enablePan&&G(e),a.update();break;case s.TOUCH_DOLLY_ROTATE:if(!1===a.enableZoom&&!1===a.enableRotate)return;a.enableZoom&&K(e),a.enableRotate&&q(e),a.update();break;default:i=s.NONE}}(e):function(e){if(!1!==a.enabled)switch(i){case s.ROTATE:if(!1===a.enableRotate)return;!function(e){v.set(e.clientX,e.clientY),w.subVectors(v,y).multiplyScalar(a.rotateSpeed);let t=a.domElement;t&&(D(2*Math.PI*w.x/t.clientHeight),_(2*Math.PI*w.y/t.clientHeight)),y.copy(v),a.update()}(e);break;case s.DOLLY:var t,n;if(!1===a.enableZoom)return;(T.set(e.clientX,e.clientY),M.subVectors(T,P),M.y>0)?(t=L(),Z(m/t)):M.y<0&&(n=L(),Z(m*n)),P.copy(T),a.update();break;case s.PAN:if(!1===a.enablePan)return;E.set(e.clientX,e.clientY),k.subVectors(E,j).multiplyScalar(a.panSpeed),R(k.x,k.y),j.copy(E),a.update()}}(e))}function Q(e){var t,n,o;(function(e){delete C[e.pointerId];for(let t=0;t<A.length;t++)if(A[t].pointerId==e.pointerId){A.splice(t,1);return}})(e),0===A.length&&(null==(t=a.domElement)||t.releasePointerCapture(e.pointerId),null==(n=a.domElement)||n.ownerDocument.removeEventListener("pointermove",$),null==(o=a.domElement)||o.ownerDocument.removeEventListener("pointerup",Q)),a.dispatchEvent(r),i=s.NONE}function J(e){if(!1!==a.enabled&&!1!==a.enableZoom&&(i===s.NONE||i===s.ROTATE)){var t,n;e.preventDefault(),a.dispatchEvent(o),(Y(e),e.deltaY<0)?(t=L(),Z(m*t)):e.deltaY>0&&(n=L(),Z(m/n)),a.update(),a.dispatchEvent(r)}}function ee(e){!1!==a.enabled&&!1!==a.enablePan&&function(e){let t=!1;switch(e.code){case a.keys.UP:R(0,a.keyPanSpeed),t=!0;break;case a.keys.BOTTOM:R(0,-a.keyPanSpeed),t=!0;break;case a.keys.LEFT:R(a.keyPanSpeed,0),t=!0;break;case a.keys.RIGHT:R(-a.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),a.update())}(e)}function et(e){!1!==a.enabled&&e.preventDefault()}function ea(e){let t=C[e.pointerId];void 0===t&&(t=new c.Vector2,C[e.pointerId]=t),t.set(e.pageX,e.pageY)}function en(e){return C[(e.pointerId===A[0].pointerId?A[1]:A[0]).pointerId]}this.dollyIn=(e=L())=>{Z(m*e),a.update()},this.dollyOut=(e=L())=>{Z(m/e),a.update()},this.getScale=()=>m,this.setScale=e=>{Z(e),a.update()},this.getZoomScale=()=>L(),void 0!==t&&this.connect(t),this.update()}}let v=o.forwardRef(({makeDefault:e,camera:t,regress:a,domElement:n,enableDamping:s=!0,keyEvents:i=!1,onChange:c,onStart:d,onEnd:u,...m},h)=>{let p=(0,r.D)(e=>e.invalidate),b=(0,r.D)(e=>e.camera),f=(0,r.D)(e=>e.gl),g=(0,r.D)(e=>e.events),x=(0,r.D)(e=>e.setEvents),v=(0,r.D)(e=>e.set),w=(0,r.D)(e=>e.get),j=(0,r.D)(e=>e.performance),E=t||b,k=n||g.connected||f.domElement,P=o.useMemo(()=>new y(E),[E]);return(0,r.F)(()=>{P.enabled&&P.update()},-1),o.useEffect(()=>(i&&P.connect(!0===i?k:i),P.connect(k),()=>void P.dispose()),[i,k,a,P,p]),o.useEffect(()=>{let e=e=>{p(),a&&j.regress(),c&&c(e)},t=e=>{d&&d(e)},n=e=>{u&&u(e)};return P.addEventListener("change",e),P.addEventListener("start",t),P.addEventListener("end",n),()=>{P.removeEventListener("start",t),P.removeEventListener("end",n),P.removeEventListener("change",e)}},[c,d,u,P,p,x]),o.useEffect(()=>{if(e){let e=w().controls;return v({controls:P}),()=>v({controls:e})}},[e,P]),o.createElement("primitive",(0,l.Z)({ref:h,object:P,enableDamping:s},m))});function w(e){let{nodes:t,materials:a}=(0,i.L)("/models/me-transformed.glb"),s=(0,o.useRef)();return(0,r.F)((e,t)=>{s.current&&(s.current.position.y=-7+.5*Math.sin(1*e.clock.elapsedTime))}),(0,n.jsxs)("group",{...e,ref:s,position:[1,1,1],scale:[2,2,2],dispose:null,children:[n.jsx("mesh",{name:"inner001",castShadow:!0,receiveShadow:!0,geometry:t.inner001.geometry,material:a["Wolf3D_Outfit_Top.005"],position:[0,0,0],scale:1}),n.jsx("mesh",{name:"jacket001",castShadow:!0,receiveShadow:!0,geometry:t.jacket001.geometry,material:a["Wolf3D_Outfit_Top.004"],position:[0,0,0],scale:1}),n.jsx("mesh",{name:"face001",castShadow:!0,receiveShadow:!0,geometry:t.face001.geometry,material:a["face.002"],position:[0,0,0],scale:1}),(0,n.jsxs)("group",{name:"headphone001",position:[0,0,0],scale:1,children:[n.jsx("mesh",{name:"Cylinder009_Material002_0001",castShadow:!0,receiveShadow:!0,geometry:t.Cylinder009_Material002_0001.geometry,material:a["Material.012"]}),n.jsx("mesh",{name:"Cylinder009_Material002_0001_1",castShadow:!0,receiveShadow:!0,geometry:t.Cylinder009_Material002_0001_1.geometry,material:a["Material.013"]})]}),n.jsx("mesh",{name:"shoes001",castShadow:!0,receiveShadow:!0,geometry:t.shoes001.geometry,material:a.shoes,position:[0,0,0],scale:1}),n.jsx("mesh",{name:"Pant001",castShadow:!0,receiveShadow:!0,geometry:t.Pant001.geometry,material:a["Wolf3D_Outfit_Bottom.003"],position:[0,0,0],scale:1}),n.jsx("mesh",{name:"eyes001",castShadow:!0,receiveShadow:!0,geometry:t.eyes001.geometry,material:a["Material.015"],position:[0,0,0],scale:1}),n.jsx("mesh",{name:"hair001",castShadow:!0,receiveShadow:!0,geometry:t.hair001.geometry,material:a["Material.014"],position:[0,0,0],scale:1}),n.jsx("mesh",{name:"Body001",castShadow:!0,receiveShadow:!0,geometry:t.Body001.geometry,material:a["face.001"],position:[0,0,0],scale:1}),n.jsx("mesh",{name:"Mac-Book",castShadow:!0,receiveShadow:!0,geometry:t["Mac-Book"].geometry,material:a["mac book"],position:[0,0,0],scale:1}),n.jsx("mesh",{name:"cloud",castShadow:!0,receiveShadow:!0,geometry:t.cloud.geometry,material:a["7_-nimbus_0_0_0"],position:[0,0,0],scale:1})]})}function j(){return(0,n.jsxs)(s.Xz,{children:[n.jsx("ambientLight",{intensity:.5}),n.jsx("directionalLight",{position:[10,10,10],intensity:1}),n.jsx(u,{makeDefault:!0,position:[0,2,5],fov:75,near:.1,far:1e3}),n.jsx(w,{}),n.jsx(v,{})]})}i.L.preload("/models/me-transformed.glb")},9963:(e,t,a)=>{"use strict";a.d(t,{default:()=>P});var n=a(326);let o=[{label:"Home",link:"/",icon:"home",newTab:!1},{label:"About",link:"/about",icon:"about",newTab:!1},{label:"Projects",link:"/projects",icon:"projects",newTab:!1},{label:"Contact",link:"/contact",icon:"contact",newTab:!1},{label:"Github",link:"https://www.github.com/zaidenthegreat",icon:"github",newTab:!0},{label:"LinkedIn",link:"https://www.linkedin.com/in/zaiden-patterson-62b981300/",icon:"linkedin",newTab:!0},{label:"X",link:"https://x.com/ZaidenOnX",icon:"twitter",newTab:!0},{label:"Resume",link:"/resume.pdf",icon:"resume",newTab:!0}];var r=a(7577),s=a(9798),i=a(2881);let l=(0,i.Z)("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),c=(0,i.Z)("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]),d=(0,i.Z)("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),u=(0,i.Z)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]),m=(0,i.Z)("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]),h=(0,i.Z)("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),p=(0,i.Z)("NotebookText",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M9.5 8h5",key:"11mslq"}],["path",{d:"M9.5 12H16",key:"ktog6x"}],["path",{d:"M9.5 16H14",key:"p1seyn"}]]);var b=a(434);let f=()=>{let[e,t]=(0,r.useState)();return(0,r.useEffect)(()=>{function e(){t(window.innerWidth)}return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e},g=({children:e})=>{let t=f();return n.jsx(n.Fragment,{children:e({size:t})})};var x=a(1135),y=a(9170);let v=e=>{switch(e){case"home":default:return n.jsx(s.Z,{className:"w-full h-auto",strokeWidth:1.5});case"about":return n.jsx(l,{className:"w-full h-auto",strokeWidth:1.5});case"projects":return n.jsx(c,{className:"w-full h-auto",strokeWidth:1.5});case"contact":return n.jsx(d,{className:"w-full h-auto",strokeWidth:1.5});case"github":return n.jsx(u,{className:"w-full h-auto",strokeWidth:1.5});case"linkedin":return n.jsx(m,{className:"w-full h-auto",strokeWidth:1.5});case"twitter":return n.jsx(h,{className:"w-full h-auto",strokeWidth:1.5});case"resume":return n.jsx(p,{className:"w-full h-auto",strokeWidth:1.5})}},w={hidden:{scale:0},show:{scale:1}},j=(0,y.E)(b.default),E=({x:e,y:t,label:a,link:o,icon:r,newTab:s,labelDirection:i="right"})=>n.jsx(g,{children:({size:l})=>l&&l>=480?n.jsx("div",{className:"absolute cursor-pointer z-50",style:{transform:`translate(${e}, ${t})`},children:n.jsx(j,{variants:w,href:o,target:s?"_blank":"_self",className:"text-foreground  rounded-full flex items-center justify-center custom-bg ","aria-label":a,name:a,prefetch:!1,scroll:!1,children:(0,n.jsxs)("span",{className:"relative  w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent",children:[v(r),n.jsx("span",{className:"peer bg-transparent absolute top-0 left-0 w-full h-full"}),n.jsx("span",{className:"absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap",children:a})]})})}):n.jsx("div",{className:"w-fit cursor-pointer z-50",children:n.jsx(j,{variants:w,href:o,target:s?"_blank":"_self",className:"text-foreground  rounded-full flex items-center justify-center custom-bg ","aria-label":a,name:a,prefetch:!1,scroll:!1,children:(0,n.jsxs)("span",{className:"relative  w-10 h-10  xs:w-14 xs:h-14 p-2.5 xs:p-4 hover:text-accent",children:[v(r),n.jsx("span",{className:"peer bg-transparent absolute top-0 left-0 w-full h-full"}),n.jsx("span",{className:(0,x.Z)("absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap","left"===i?"right-full left-auto":""),children:a})]})})})}),k={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.3}}},P=()=>{let e=360/o.length,t=f(),a=t>=1024,r=t>=768;return n.jsx("div",{className:"w-full fixed h-screen flex items-center justify-center",children:n.jsx(g,{children:({size:t})=>t&&t>=480?n.jsx(y.E.div,{variants:k,initial:"hidden",animate:"show",className:"w-max flex items-center justify-center relative hover:pause animate-spin-slow group",children:o.map((t,o)=>{let s=o*e*Math.PI/180,i=a?"calc(20vw - 1rem)":r?"calc(30vw - 1rem)":"calc(40vw - 1rem)",l=`calc(${i}*${Math.cos(s)})`,c=`calc(${i}*${Math.sin(s)})`;return n.jsx(E,{x:l,y:c,...t},t.label)})}):(0,n.jsxs)(n.Fragment,{children:[n.jsx(y.E.div,{variants:k,initial:"hidden",animate:"show",className:"w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 item-start xs:items-center justify-center relative  group xs:hidden",children:o.slice(0,o.length/2).map(e=>n.jsx(E,{x:0,y:0,...e},e.label))}),n.jsx(y.E.div,{variants:k,initial:"hidden",animate:"show",className:"w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-end xs:items-center justify-center relative group xs:hidden",children:o.slice(o.length/2,o.length).map(e=>n.jsx(E,{x:0,y:0,...e,labelDirection:"left"},e.label))})]})})})}},6067:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u,metadata:()=>d});var n=a(9510),o=a(66),r=a.n(o);a(5023);var s=a(5761),i=a(8570);let l=(0,i.createProxy)(String.raw`C:\Users\ZAY\Desktop\site\src\components\FireFliesBackground.jsx#default`),c=(0,i.createProxy)(String.raw`C:\Users\ZAY\Desktop\site\src\components\Sound.jsx#default`),d={title:{template:"Next.js Portfolio Created with Three.js and Tailwind CSS | %s | Zaiden Patterson",default:"Next.js Portfolio Created with Three.js and Tailwind CSS by Zaiden Patterson"},description:"A unique creative portfolio designed by ZaidenPAtterson with cutting-edge technologies like Next.js, Tailwind CSS, Three.js, and Framer Motion. Experience the art of modern web development firsthand."};function u({children:e}){return n.jsx("html",{lang:"en",children:(0,n.jsxs)("body",{className:(0,s.Z)(r().variable,"bg-background text-foreground font-inter"),children:[e,n.jsx(l,{}),n.jsx(c,{}),n.jsx("div",{id:"my-modal"})]})})}},3668:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var n=a(9510),o=a(7710),r=a(2955);let s=(0,a(8570).createProxy)(String.raw`C:\Users\ZAY\Desktop\site\src\components\navigation\index.jsx#default`),i=(0,a(8318).default)(()=>a.e(330).then(a.bind(a,8330)),{loadableGenerated:{modules:["app\\page.js -> @/components/models/Wizard"]},ssr:!1});function l(){return(0,n.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between relative",children:[n.jsx(o.default,{priority:!0,sizes:"100vw",src:"/background/home-background.png",alt:"background-image",fill:!0,className:"-z-50 w-full h-full object-cover object-center opacity-50"}),(0,n.jsxs)("div",{className:"w-full h-screen",children:[n.jsx(s,{}),n.jsx(r.Z,{children:n.jsx(i,{})})]})]})}},2955:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});let n=(0,a(8570).createProxy)(String.raw`C:\Users\ZAY\Desktop\site\src\components\RenderModel.jsx#default`)},3881:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});var n=a(6621);let o=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,n.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),n=t.X(0,[948,595,525,200,838],()=>a(5378));module.exports=n})();