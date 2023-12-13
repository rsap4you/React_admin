"use strict";(self.webpackChunkemilus=self.webpackChunkemilus||[]).push([[105],{2703:(e,t,n)=>{n.d(t,{Z:()=>r});const r=class{static getNameInitial(e){let t=e.match(/\b\w/g)||[];return((t.shift()||"")+(t.pop()||"")).toUpperCase()}static getRouteInfo(e,t){if(e.path===t)return e;let n;for(let r in e)if(e.hasOwnProperty(r)&&"object"===typeof e[r]&&(n=this.getRouteInfo(e[r],t),n))return n;return n}static getColorContrast(e){if(!e)return"dark";const t=parseInt(a(e).substring(0,2),16);const n=function(e){return parseInt(a(e).substring(2,4),16)}(e),r=function(e){return parseInt(a(e).substring(4,6),16)}(e);function a(e){return"#"===e.charAt(0)?e.substring(1,7):e}return(299*t+587*n+114*r)/1e3>130?"dark":"light"}static shadeColor(e,t){let n=parseInt(e.substring(1,3),16),r=parseInt(e.substring(3,5),16),a=parseInt(e.substring(5,7),16);n=parseInt(n*(100+t)/100),r=parseInt(r*(100+t)/100),a=parseInt(a*(100+t)/100),n=n<255?n:255,r=r<255?r:255,a=a<255?a:255;const o=1===n.toString(16).length?"0".concat(n.toString(16)):n.toString(16),s=1===r.toString(16).length?"0".concat(r.toString(16)):r.toString(16),c=1===a.toString(16).length?"0".concat(a.toString(16)):a.toString(16);return"#".concat(o).concat(s).concat(c)}static rgbaToHex(e){const t=e=>e.replace(/^\s+|\s+$/gm,""),n=e.substring(e.indexOf("(")).split(","),r=parseInt(t(n[0].substring(1)),10),a=parseInt(t(n[1]),10),o=parseInt(t(n[2]),10),s=parseFloat(t(n[3].substring(0,n[3].length-1))).toFixed(2),c=[r.toString(16),a.toString(16),o.toString(16),Math.round(255*s).toString(16).substring(0,2)];return c.forEach((function(e,t){1===e.length&&(c[t]="0"+e)})),"#".concat(c.join(""))}static getSignNum(e,t,n){return e>0?t:e<0?n:null}static antdTableSorter(e,t,n){return"number"===typeof e[n]&&"number"===typeof t[n]?e[n]-t[n]:"string"===typeof e[n]&&"string"===typeof t[n]?(e=e[n].toLowerCase())>(t=t[n].toLowerCase())?-1:t>e?1:0:void 0}static filterArray(e,t,n){let r=e;return e&&(r=e.filter((e=>e[t]===n))),r}static deleteArrayRow(e,t,n){let r=e;return e&&(r=e.filter((e=>e[t]!==n))),r}static wildCardSearch(e,t){return e=e.filter((e=>(e=>{for(let n in e)if(null!=e[n]&&-1!==e[n].toString().toUpperCase().indexOf(t.toString().toUpperCase()))return!0})(e)))}static getBreakPoint(e){let t=[];for(const n in e)if(e.hasOwnProperty(n)){e[n]&&t.push(n)}return t}}},64105:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});n(72791);var r=n(43110),a=n(2730),o=n(66106),s=n(30914),c=n(75594),i=n(87309);const l=[{image:"/img/others/img-1.png",price:"0",duration:"/ forever",plan:"Startup",features:["200 MB of Spaces","Unlimited Bandwidth","5 Add on Domains","Free Microsoft Office 365","Smart Sync","24/7 Support","1 Cloud Power"]},{image:"/img/others/img-2.png",price:"20",duration:"/ per month",plan:"Standard",features:["500 MB of Spaces","Unlimited Bandwidth","10 Add on Domains","Free Microsoft Office 365","Smart Sync","24/7 Support","5 Cloud Power"]},{image:"/img/others/img-3.png",price:"48",duration:"/ per month",plan:"Premium",features:["Unlimited of Spaces","Unlimited Bandwidth","Unlimited Add on Domains","Free Microsoft Office 365","Smart Sync","24/7 Support","Unlimited Cloud Power"]}];var u=n(2703),d=n(80184);const{useBreakpoint:f}=r.ZP,p=()=>{const e=!u.Z.getBreakPoint(f()).includes("lg"),t=l.length;return console.log("isMobile",e),(0,d.jsx)(a.Z,{children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsxs)("div",{className:"text-center mb-4",children:[(0,d.jsx)("h2",{className:"font-weight-semibold",children:"Pick a base plan"}),(0,d.jsx)(o.Z,{type:"flex",justify:"center",children:(0,d.jsx)(s.Z,{sm:24,md:12,lg:8,children:(0,d.jsx)("p",{children:"Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission."})})})]}),(0,d.jsx)(o.Z,{children:l.map(((n,r)=>(0,d.jsx)(s.Z,{xs:24,sm:24,md:24/t,lg:24/t,className:t===r+1||e?"":"border-right",children:(0,d.jsxs)("div",{className:"p-3",children:[(0,d.jsxs)("div",{className:"text-center",children:[(0,d.jsx)("img",{className:"img-fluid",src:n.image,alt:""}),(0,d.jsxs)("h1",{className:"display-4 mt-4",children:[(0,d.jsx)("span",{className:"font-size-md d-inline-block mr-1",style:{transform:"translate(0px, -17px)"},children:"$"}),(0,d.jsx)("span",{children:n.price})]}),(0,d.jsx)("p",{className:"mb-0",children:n.duration})]}),(0,d.jsx)("div",{className:"mt-4",children:(0,d.jsx)("h2",{className:"text-center font-weight-semibold",children:n.plan})}),(0,d.jsx)("div",{className:"d-flex justify-content-center mt-3",children:(0,d.jsx)("div",{children:n.features.map(((e,t)=>(0,d.jsxs)("p",{children:[(0,d.jsx)(c.Z,{color:"blue"}),(0,d.jsx)("span",{children:e})]},"pricing-feature-".concat(t))))})}),(0,d.jsx)("div",{className:"mt-3 text-center",children:(0,d.jsx)(i.Z,{type:"default",children:"Get Started"})})]})},"price-column-".concat(r))))}),(0,d.jsx)("div",{className:"mt-5 pt-lg-4",children:(0,d.jsx)("h1",{className:"text-center font-weight-light",children:"Frequently Asked Questions"})}),(0,d.jsxs)(o.Z,{gutter:60,className:"mt-5",children:[(0,d.jsxs)(s.Z,{sm:24,md:12,lg:12,children:[(0,d.jsxs)("div",{className:"mb-5",children:[(0,d.jsx)("h3",{className:"font-weight-semibold",children:"Is it expensive?"}),(0,d.jsx)("p",{children:"Twitch tail in permanent irritation poop on grasses, drink water out of the faucet, plays league of legends have my breakfast spaghetti yarn. Taco cat backwards spells taco cat stick butt in face."})]}),(0,d.jsxs)("div",{className:"mb-5",children:[(0,d.jsx)("h3",{className:"font-weight-semibold",children:"Is it secure?"}),(0,d.jsx)("p",{children:"Splice the main brace Jolly Roger me hogshead prow red ensign ye swing the lead log ho. Handsomely spanker dance the hempen jig pinnace overhaul crimp tack booty rigging lateen sail. Sea Legs boatswain hempen halter provost bilge rat ballast maroon man-of-war bowsprit Chain Shot."})]})]}),(0,d.jsxs)(s.Z,{sm:24,md:12,lg:12,children:[(0,d.jsxs)("div",{className:"mb-5",children:[(0,d.jsx)("h3",{className:"font-weight-semibold",children:"How to start?"}),(0,d.jsx)("p",{children:"Purr like an angel nap all day, for poop on grasses for chase after silly colored fish toys around the house stares at human while pushing stuff off a table or i heard this rumor where the humans are our owners."})]}),(0,d.jsxs)("div",{className:"mb-5",children:[(0,d.jsx)("h3",{className:"font-weight-semibold",children:"Is there any discount?"}),(0,d.jsx)("p",{children:"Cry louder at reflection. More napping, more napping all the napping is exhausting toilet paper attack claws fluff everywhere meow miao french ciao litterbox."})]})]})]})]})})}},54466:(e,t,n)=>{n.d(t,{E:()=>a,Y:()=>o});var r=n(79393),a=(0,r.b)("success","processing","error","default","warning"),o=(0,r.b)("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime")},19911:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(29439),a=n(72791),o=n(96096);const s=function(){var e=a.useState(!1),t=(0,r.Z)(e,2),n=t[0],s=t[1];return a.useEffect((function(){s((0,o.fk)())}),[]),n}},19581:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(29439),a=n(72791);function o(){var e=a.useReducer((function(e){return e+1}),0);return(0,r.Z)(e,2)[1]}},96096:(e,t,n)=>{n.d(t,{fk:()=>s,jD:()=>o});var r,a=n(14937),o=function(){return(0,a.Z)()&&window.document.documentElement},s=function(){if(!o())return!1;if(void 0!==r)return r;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),r=1===e.scrollHeight,document.body.removeChild(e),r}},75594:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(4942),a=n(71002),o=n(87462),s=n(81694),c=n.n(s),i=n(15207),l=n(72791),u=n(71929),d=n(61113),f=n(54466);function p(e){return-1!==f.Y.indexOf(e)}const m=function(e){var t,n=e.className,a=e.prefixCls,s=e.style,i=e.color,d=e.children,f=e.text,m=e.placement,h=void 0===m?"end":m,g=l.useContext(u.E_),v=g.getPrefixCls,b=g.direction,x=v("ribbon",a),y=p(i),Z=c()(x,"".concat(x,"-placement-").concat(h),(t={},(0,r.Z)(t,"".concat(x,"-rtl"),"rtl"===b),(0,r.Z)(t,"".concat(x,"-color-").concat(i),y),t),n),w={},j={};return i&&!y&&(w.background=i,j.color=i),l.createElement("div",{className:"".concat(x,"-wrapper")},d,l.createElement("div",{className:Z,style:(0,o.Z)((0,o.Z)({},w),s)},l.createElement("span",{className:"".concat(x,"-text")},f),l.createElement("div",{className:"".concat(x,"-corner"),style:j})))};var h=n(29439);function g(e){var t,n=e.prefixCls,r=e.value,a=e.current,o=e.offset,s=void 0===o?0:o;return s&&(t={position:"absolute",top:"".concat(s,"00%"),left:0}),l.createElement("span",{style:t,className:c()("".concat(n,"-only-unit"),{current:a})},r)}function v(e,t,n){for(var r=e,a=0;(r+10)%10!==t;)r+=n,a+=n;return a}function b(e){var t,n,r=e.prefixCls,a=e.count,s=e.value,c=Number(s),i=Math.abs(a),u=l.useState(c),d=(0,h.Z)(u,2),f=d[0],p=d[1],m=l.useState(i),b=(0,h.Z)(m,2),x=b[0],y=b[1],Z=function(){p(c),y(i)};if(l.useEffect((function(){var e=setTimeout((function(){Z()}),1e3);return function(){clearTimeout(e)}}),[c]),f===c||Number.isNaN(c)||Number.isNaN(f))t=[l.createElement(g,(0,o.Z)({},e,{key:c,current:!0}))],n={transition:"none"};else{t=[];for(var w=c+10,j=[],N=c;N<=w;N+=1)j.push(N);var C=j.findIndex((function(e){return e%10===f}));t=j.map((function(t,n){var r=t%10;return l.createElement(g,(0,o.Z)({},e,{key:t,value:r,offset:n-C,current:n===C}))})),n={transform:"translateY(".concat(-v(f,c,x<i?1:-1),"00%)")}}return l.createElement("span",{className:"".concat(r,"-only"),style:n,onTransitionEnd:Z},t)}var x=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const y=function(e){var t=e.prefixCls,n=e.count,r=e.className,a=e.motionClassName,s=e.style,i=e.title,f=e.show,p=e.component,m=void 0===p?"sup":p,h=e.children,g=x(e,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),v=(0,l.useContext(u.E_).getPrefixCls)("scroll-number",t),y=(0,o.Z)((0,o.Z)({},g),{"data-show":f,style:s,className:c()(v,r,a),title:i}),Z=n;if(n&&Number(n)%1===0){var w=String(n).split("");Z=w.map((function(e,t){return l.createElement(b,{prefixCls:v,count:Number(n),value:e,key:w.length-t})}))}return s&&s.borderColor&&(y.style=(0,o.Z)((0,o.Z)({},s),{boxShadow:"0 0 0 1px ".concat(s.borderColor," inset")})),h?(0,d.Tm)(h,(function(e){return{className:c()("".concat(v,"-custom-component"),null===e||void 0===e?void 0:e.className,a)}})):l.createElement(m,y,Z)};var Z=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},w=function(e){var t,n,s=e.prefixCls,f=e.scrollNumberPrefixCls,m=e.children,h=e.status,g=e.text,v=e.color,b=e.count,x=void 0===b?null:b,w=e.overflowCount,j=void 0===w?99:w,N=e.dot,C=void 0!==N&&N,S=e.size,O=void 0===S?"default":S,E=e.title,P=e.offset,k=e.style,I=e.className,R=e.showZero,A=void 0!==R&&R,T=Z(e,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","showZero"]),M=l.useContext(u.E_),B=M.getPrefixCls,U=M.direction,F=B("badge",s),D=x>j?"".concat(j,"+"):x,G=null!==h&&void 0!==h||null!==v&&void 0!==v,L="0"===D||0===D,_=C&&!L,z=_?"":D,H=(0,l.useMemo)((function(){return(null===z||void 0===z||""===z||L&&!A)&&!_}),[z,L,A,_]),Y=(0,l.useRef)(x);H||(Y.current=x);var $=Y.current,W=(0,l.useRef)(z);H||(W.current=z);var q=W.current,J=(0,l.useRef)(_);H||(J.current=_);var Q=(0,l.useMemo)((function(){if(!P)return(0,o.Z)({},k);var e={marginTop:P[1]};return"rtl"===U?e.left=parseInt(P[0],10):e.right=-parseInt(P[0],10),(0,o.Z)((0,o.Z)({},e),k)}),[U,P,k]),K=null!==E&&void 0!==E?E:"string"===typeof $||"number"===typeof $?$:void 0,V=H||!g?null:l.createElement("span",{className:"".concat(F,"-status-text")},g),X=$&&"object"===(0,a.Z)($)?(0,d.Tm)($,(function(e){return{style:(0,o.Z)((0,o.Z)({},Q),e.style)}})):void 0,ee=c()((t={},(0,r.Z)(t,"".concat(F,"-status-dot"),G),(0,r.Z)(t,"".concat(F,"-status-").concat(h),!!h),(0,r.Z)(t,"".concat(F,"-status-").concat(v),p(v)),t)),te={};v&&!p(v)&&(te.background=v);var ne=c()(F,(n={},(0,r.Z)(n,"".concat(F,"-status"),G),(0,r.Z)(n,"".concat(F,"-not-a-wrapper"),!m),(0,r.Z)(n,"".concat(F,"-rtl"),"rtl"===U),n),I);if(!m&&G){var re=Q.color;return l.createElement("span",(0,o.Z)({},T,{className:ne,style:Q}),l.createElement("span",{className:ee,style:te}),g&&l.createElement("span",{style:{color:re},className:"".concat(F,"-status-text")},g))}return l.createElement("span",(0,o.Z)({},T,{className:ne}),m,l.createElement(i.Z,{visible:!H,motionName:"".concat(F,"-zoom"),motionAppear:!1,motionDeadline:1e3},(function(e){var t,n=e.className,a=B("scroll-number",f),s=J.current,i=c()((t={},(0,r.Z)(t,"".concat(F,"-dot"),s),(0,r.Z)(t,"".concat(F,"-count"),!s),(0,r.Z)(t,"".concat(F,"-count-sm"),"small"===O),(0,r.Z)(t,"".concat(F,"-multiple-words"),!s&&q&&q.toString().length>1),(0,r.Z)(t,"".concat(F,"-status-").concat(h),!!h),(0,r.Z)(t,"".concat(F,"-status-").concat(v),p(v)),t)),u=(0,o.Z)({},Q);return v&&!p(v)&&((u=u||{}).background=v),l.createElement(y,{prefixCls:a,show:!H,motionClassName:n,className:i,count:q,title:K,style:u,key:"scrollNumber"},X)})),V)};w.Ribbon=m;const j=w},30914:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(89752).Z},79426:(e,t,n)=>{n.d(t,{Z:()=>r});const r=(0,n(72791).createContext)({})},89752:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(4942),a=n(87462),o=n(71002),s=n(81694),c=n.n(s),i=n(72791),l=n(71929),u=n(79426),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var f=["xs","sm","md","lg","xl","xxl"];const p=i.forwardRef((function(e,t){var n,s=i.useContext(l.E_),p=s.getPrefixCls,m=s.direction,h=i.useContext(u.Z),g=h.gutter,v=h.wrap,b=h.supportFlexGap,x=e.prefixCls,y=e.span,Z=e.order,w=e.offset,j=e.push,N=e.pull,C=e.className,S=e.children,O=e.flex,E=e.style,P=d(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),k=p("col",x),I={};f.forEach((function(t){var n,s={},c=e[t];"number"===typeof c?s.span=c:"object"===(0,o.Z)(c)&&(s=c||{}),delete P[t],I=(0,a.Z)((0,a.Z)({},I),(n={},(0,r.Z)(n,"".concat(k,"-").concat(t,"-").concat(s.span),void 0!==s.span),(0,r.Z)(n,"".concat(k,"-").concat(t,"-order-").concat(s.order),s.order||0===s.order),(0,r.Z)(n,"".concat(k,"-").concat(t,"-offset-").concat(s.offset),s.offset||0===s.offset),(0,r.Z)(n,"".concat(k,"-").concat(t,"-push-").concat(s.push),s.push||0===s.push),(0,r.Z)(n,"".concat(k,"-").concat(t,"-pull-").concat(s.pull),s.pull||0===s.pull),(0,r.Z)(n,"".concat(k,"-rtl"),"rtl"===m),n))}));var R=c()(k,(n={},(0,r.Z)(n,"".concat(k,"-").concat(y),void 0!==y),(0,r.Z)(n,"".concat(k,"-order-").concat(Z),Z),(0,r.Z)(n,"".concat(k,"-offset-").concat(w),w),(0,r.Z)(n,"".concat(k,"-push-").concat(j),j),(0,r.Z)(n,"".concat(k,"-pull-").concat(N),N),n),C,I),A={};if(g&&g[0]>0){var T=g[0]/2;A.paddingLeft=T,A.paddingRight=T}if(g&&g[1]>0&&!b){var M=g[1]/2;A.paddingTop=M,A.paddingBottom=M}return O&&(A.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(O),!1!==v||A.minWidth||(A.minWidth=0)),i.createElement("div",(0,a.Z)({},P,{style:(0,a.Z)((0,a.Z)({},A),E),className:R,ref:t}),S)}))},52832:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(72791),a=n(19581),o=n(78295);const s=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=(0,r.useRef)({}),n=(0,a.Z)();return(0,r.useEffect)((function(){var r=o.ZP.subscribe((function(r){t.current=r,e&&n()}));return function(){return o.ZP.unsubscribe(r)}}),[]),t.current}},43110:(e,t,n)=>{n.d(t,{ZP:()=>a});var r=n(52832);const a={useBreakpoint:function(){return(0,r.Z)()}}},37545:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(87462),a=n(4942),o=n(71002),s=n(29439),c=n(81694),i=n.n(c),l=n(72791),u=n(71929),d=n(19911),f=n(78295),p=n(79393),m=n(79426),h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};(0,p.b)("top","middle","bottom","stretch"),(0,p.b)("start","end","center","space-around","space-between","space-evenly");const g=l.forwardRef((function(e,t){var n,c=e.prefixCls,p=e.justify,g=e.align,v=e.className,b=e.style,x=e.children,y=e.gutter,Z=void 0===y?0:y,w=e.wrap,j=h(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),N=l.useContext(u.E_),C=N.getPrefixCls,S=N.direction,O=l.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),E=(0,s.Z)(O,2),P=E[0],k=E[1],I=(0,d.Z)(),R=l.useRef(Z);l.useEffect((function(){var e=f.ZP.subscribe((function(e){var t=R.current||0;(!Array.isArray(t)&&"object"===(0,o.Z)(t)||Array.isArray(t)&&("object"===(0,o.Z)(t[0])||"object"===(0,o.Z)(t[1])))&&k(e)}));return function(){return f.ZP.unsubscribe(e)}}),[]);var A=C("row",c),T=function(){var e=[void 0,void 0];return(Array.isArray(Z)?Z:[Z,void 0]).forEach((function(t,n){if("object"===(0,o.Z)(t))for(var r=0;r<f.c4.length;r++){var a=f.c4[r];if(P[a]&&void 0!==t[a]){e[n]=t[a];break}}else e[n]=t})),e}(),M=i()(A,(n={},(0,a.Z)(n,"".concat(A,"-no-wrap"),!1===w),(0,a.Z)(n,"".concat(A,"-").concat(p),p),(0,a.Z)(n,"".concat(A,"-").concat(g),g),(0,a.Z)(n,"".concat(A,"-rtl"),"rtl"===S),n),v),B={},U=null!=T[0]&&T[0]>0?T[0]/-2:void 0,F=null!=T[1]&&T[1]>0?T[1]/-2:void 0;if(U&&(B.marginLeft=U,B.marginRight=U),I){var D=(0,s.Z)(T,2);B.rowGap=D[1]}else F&&(B.marginTop=F,B.marginBottom=F);var G=(0,s.Z)(T,2),L=G[0],_=G[1],z=l.useMemo((function(){return{gutter:[L,_],wrap:w,supportFlexGap:I}}),[L,_,w,I]);return l.createElement(m.Z.Provider,{value:z},l.createElement("div",(0,r.Z)({},j,{className:M,style:(0,r.Z)((0,r.Z)({},B),b),ref:t}),x))}))},66106:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(37545).Z}}]);
//# sourceMappingURL=105.e048ace6.chunk.js.map