(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9943:function(e,t,r){Promise.resolve().then(r.t.bind(r,1520,23)),Promise.resolve().then(r.t.bind(r,2778,23)),Promise.resolve().then(r.bind(r,6707)),Promise.resolve().then(r.bind(r,1468))},9205:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var o=r(2265);let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let s=(0,o.forwardRef)((e,t)=>{let{color:r="currentColor",size:n=24,strokeWidth:s=2,absoluteStrokeWidth:c,className:i="",children:u,iconNode:d,...m}=e;return(0,o.createElement)("svg",{ref:t,...l,width:n,height:n,stroke:r,strokeWidth:c?24*Number(s)/Number(n):s,className:a("lucide",i),...m},[...d.map(e=>{let[t,r]=e;return(0,o.createElement)(t,r)}),...Array.isArray(u)?u:[u]])}),c=(e,t)=>{let r=(0,o.forwardRef)((r,l)=>{let{className:c,...i}=r;return(0,o.createElement)(s,{ref:l,iconNode:t,className:a("lucide-".concat(n(e)),c),...i})});return r.displayName="".concat(e),r}},6707:function(e,t,r){"use strict";var o=r(7437),n=r(2265);let a=()=>({id:Math.random(),top:"".concat(100*Math.random(),"%"),left:"".concat(100*Math.random(),"%"),animationDuration:"".concat(5*Math.random()+5,"s")});t.default=()=>{let[e,t]=(0,n.useState)([]);return(0,n.useEffect)(()=>{let e=setInterval(()=>{let e=a();t(t=>[...t.slice(-14),e])},1e3);return()=>clearInterval(e)},[]),(0,o.jsx)("div",{className:"fixed top-0 left-0 w-full h-full -z-10 overflow-hidden",children:e.map(e=>(0,o.jsx)("div",{className:"absolute roudned-full w-[10px] h-[10px] bg-firefly-radial",style:{top:e.top,left:e.left,animation:"move ".concat(e.animationDuration," infinite alternate")}},e.id))})}},1468:function(e,t,r){"use strict";r.d(t,{default:function(){return d}});var o=r(7437),n=r(9415),a=r(9205);let l=(0,a.Z)("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]),s=(0,a.Z)("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);var c=r(2265),i=r(4887);let u=e=>{let{onClose:t,toggle:r}=e;return(0,i.createPortal)((0,o.jsx)("div",{className:"fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center",children:(0,o.jsxs)("div",{className:"bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] py-8 px-6 xs:px-10 sm:px-16 rounded shadow-glass-inset text-center space-y-8 ",children:[(0,o.jsx)("p",{className:"font-light",children:"Would you like to play the background music?"}),(0,o.jsxs)("div",{className:"flex items-center justify-center space-x-4",children:[(0,o.jsx)("button",{onClick:r,className:"px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded mr-2",children:"Yes"}),(0,o.jsx)("button",{onClick:t,className:"px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded",children:"No"})]})]})}),document.getElementById("my-modal"))};var d=()=>{let e=(0,c.useRef)(null),[t,r]=(0,c.useState)(!1),[a,i]=(0,c.useState)(!1),d=(0,c.useCallback)(()=>{"true"!==localStorage.getItem("musicConsent")||t||(e.current.play(),r(!0)),["click","keydown","touchstart"].forEach(e=>document.removeEventListener(e,d))},[t]);(0,c.useEffect)(()=>{let e=localStorage.getItem("musicConsent"),t=localStorage.getItem("consentTime");e&&t&&new Date(t).getTime()+2592e5>new Date?(r("true"===e),"true"===e&&["click","keydown","touchstart"].forEach(e=>document.addEventListener(e,d))):i(!0)},[d]);let m=()=>{let o=!t;r(o),o?e.current.play():e.current.pause(),localStorage.setItem("musicConsent",String(o)),localStorage.setItem("consentTime",new Date().toISOString()),i(!1)};return(0,o.jsxs)("div",{className:"fixed top-4 right-2.5 xs:right-4 z-50 group",children:[a&&(0,o.jsx)(u,{onClose:()=>i(!1),toggle:m}),(0,o.jsxs)("audio",{ref:e,loop:!0,children:[(0,o.jsx)("source",{src:"/audio/birds-forest-sounds.mp3",type:"audio/mpeg"}),"Your browser does not support the audio element."]}),(0,o.jsx)(n.E.button,{onClick:m,initial:{scale:0},animate:{scale:1},transition:{delay:1},className:"w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 custom-bg","aria-label":"Sound control button",name:"Sound control button",children:t?(0,o.jsx)(l,{className:"w-full h-full text-foreground group-hover:text-accent",strokeWidth:1.5}):(0,o.jsx)(s,{className:"w-full h-full text-foreground group-hover:text-accent",strokeWidth:1.5})})]})}},2778:function(){},1520:function(e){e.exports={style:{fontFamily:"'__Inter_d65c78', '__Inter_Fallback_d65c78'",fontStyle:"normal"},className:"__className_d65c78",variable:"__variable_d65c78"}}},function(e){e.O(0,[446,415,971,117,744],function(){return e(e.s=9943)}),_N_E=e.O()}]);