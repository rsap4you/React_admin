"use strict";(self.webpackChunkemilus=self.webpackChunkemilus||[]).push([[648,934],{95942:(e,t,o)=>{o.r(t),o.d(t,{Invoice:()=>h,default:()=>y});var n=o(72791),r=o(1413);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M820 436h-40c-4.4 0-8 3.6-8 8v40c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-40c0-4.4-3.6-8-8-8zm32-104H732V120c0-4.4-3.6-8-8-8H300c-4.4 0-8 3.6-8 8v212H172c-44.2 0-80 35.8-80 80v328c0 17.7 14.3 32 32 32h168v132c0 4.4 3.6 8 8 8h424c4.4 0 8-3.6 8-8V772h168c17.7 0 32-14.3 32-32V412c0-44.2-35.8-80-80-80zM360 180h304v152H360V180zm304 664H360V568h304v276zm200-140H732V500H292v204H160V412c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4 12 12v292z"}}]},name:"printer",theme:"outlined"};var s=o(8711),i=function(e,t){return n.createElement(s.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:a}))};i.displayName="PrinterOutlined";const l=n.forwardRef(i);var c=o(80553),p=o(2730),d=o(87309);const f=[{key:"1",product:"Samsung Galaxy S20+",quantity:2,price:899},{key:"2",product:"SonicGear Evo 9 BTMI Speaker",quantity:1,price:199},{key:"3",product:"Sharp Aquos 40-Inch Easy Smart LED TV",quantity:1,price:977}];var u=o(30948),m=o(80184);const{Column:v}=c.Z;class h extends n.Component{total(){let e=0;return f.forEach((t=>{e+=t.price})),e}render(){return(0,m.jsx)("div",{className:"container",children:(0,m.jsxs)(p.Z,{children:[(0,m.jsxs)("div",{className:"d-md-flex justify-content-md-between",children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("img",{src:"/img/logo.png",alt:"",style:{width:"100px"}}),(0,m.jsx)("address",{children:(0,m.jsxs)("p",{children:[(0,m.jsx)("span",{className:"font-weight-semibold text-dark font-size-md",children:"Emilus, Inc."}),(0,m.jsx)("br",{}),(0,m.jsx)("span",{children:"9498 Harvard Street"}),(0,m.jsx)("br",{}),(0,m.jsx)("span",{children:"Fairfield, Chicago Town 06824"}),(0,m.jsx)("br",{}),(0,m.jsx)("abbr",{className:"text-dark",title:"Phone",children:"Phone:"}),(0,m.jsx)("span",{children:"(123) 456-7890"})]})})]}),(0,m.jsxs)("div",{className:"mt-3 text-right",children:[(0,m.jsx)("h2",{className:"mb-1 font-weight-semibold",children:"Invoice #9972"}),(0,m.jsx)("p",{children:"25/7/2018"}),(0,m.jsx)("address",{children:(0,m.jsxs)("p",{children:[(0,m.jsx)("span",{className:"font-weight-semibold text-dark font-size-md",children:"Genting Holdings."}),(0,m.jsx)("br",{}),(0,m.jsx)("span",{children:"8626 Maiden Dr. "}),(0,m.jsx)("br",{}),(0,m.jsx)("span",{children:"Niagara Falls, New York 14304"})]})})]})]}),(0,m.jsxs)("div",{className:"mt-4",children:[(0,m.jsxs)(c.Z,{dataSource:f,pagination:!1,className:"mb-5",children:[(0,m.jsx)(v,{title:"No.",dataIndex:"key"},"key"),(0,m.jsx)(v,{title:"Product",dataIndex:"product"},"product"),(0,m.jsx)(v,{title:"Quantity",dataIndex:"quantity"},"quantity"),(0,m.jsx)(v,{title:"Price",render:e=>(0,m.jsx)(u.Z,{displayType:"text",value:(Math.round(100*e.price)/100).toFixed(2),prefix:"$",thousandSeparator:!0})},"price"),(0,m.jsx)(v,{title:"Total",render:e=>(0,m.jsx)(u.Z,{displayType:"text",value:(Math.round(e.price*e.quantity*100)/100).toFixed(2),prefix:"$",thousandSeparator:!0})},"total")]}),(0,m.jsx)("div",{className:"d-flex justify-content-end",children:(0,m.jsxs)("div",{className:"text-right ",children:[(0,m.jsxs)("div",{className:"border-bottom",children:[(0,m.jsxs)("p",{className:"mb-2",children:[(0,m.jsx)("span",{children:"Sub - Total amount: "}),(0,m.jsx)(u.Z,{displayType:"text",value:(Math.round(100*this.total())/100).toFixed(2),prefix:"$",thousandSeparator:!0})]}),(0,m.jsxs)("p",{children:["vat (10%) : ",(Math.round(this.total()/100*10*100)/100).toFixed(2)]})]}),(0,m.jsxs)("h2",{className:"font-weight-semibold mt-3",children:[(0,m.jsx)("span",{className:"mr-1",children:"Grand Total: "}),(0,m.jsx)(u.Z,{displayType:"text",value:(Math.round(100*this.total())/100-this.total()/100*10).toFixed(2),prefix:"$",thousandSeparator:!0})]})]})}),(0,m.jsx)("p",{className:"mt-5",children:(0,m.jsx)("small",{children:"In exceptional circumstances, Financial Services can provide an urgent manually processed special cheque. Note, however, that urgent special cheques should be requested only on an emergency basis as manually produced cheques involve duplication of effort and considerable staff resources. Requests need to be supported by a letter explaining the circumstances to justify the special cheque payment"})})]}),(0,m.jsx)("hr",{className:"d-print-none"}),(0,m.jsx)("div",{className:"text-right d-print-none",children:(0,m.jsxs)(d.Z,{type:"primary",onClick:()=>window.print(),children:[(0,m.jsx)(l,{type:"printer"}),(0,m.jsx)("span",{className:"ml-1",children:"Print"})]})})]})})}}const y=h},54466:(e,t,o)=>{o.d(t,{E:()=>r,Y:()=>a});var n=o(79393),r=(0,n.b)("success","processing","error","default","warning"),a=(0,n.b)("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime")},19581:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(29439),r=o(72791);function a(){var e=r.useReducer((function(e){return e+1}),0);return(0,n.Z)(e,2)[1]}},89631:(e,t,o)=>{o.d(t,{Z:()=>c});var n=o(87462),r=o(1961),a={adjustX:1,adjustY:1},s={adjustX:0,adjustY:0},i=[0,0];function l(e){return"boolean"===typeof e?e?a:s:(0,n.Z)((0,n.Z)({},s),e)}function c(e){var t=e.arrowWidth,o=void 0===t?4:t,a=e.horizontalArrowShift,s=void 0===a?16:a,c=e.verticalArrowShift,p=void 0===c?8:c,d=e.autoAdjustOverflow,f=e.arrowPointAtCenter,u={left:{points:["cr","cl"],offset:[-4,0]},right:{points:["cl","cr"],offset:[4,0]},top:{points:["bc","tc"],offset:[0,-4]},bottom:{points:["tc","bc"],offset:[0,4]},topLeft:{points:["bl","tc"],offset:[-(s+o),-4]},leftTop:{points:["tr","cl"],offset:[-4,-(p+o)]},topRight:{points:["br","tc"],offset:[s+o,-4]},rightTop:{points:["tl","cr"],offset:[4,-(p+o)]},bottomRight:{points:["tr","bc"],offset:[s+o,4]},rightBottom:{points:["bl","cr"],offset:[4,p+o]},bottomLeft:{points:["tl","bc"],offset:[-(s+o),4]},leftBottom:{points:["br","cl"],offset:[-4,p+o]}};return Object.keys(u).forEach((function(e){u[e]=f?(0,n.Z)((0,n.Z)({},u[e]),{overflow:l(d),targetOffset:i}):(0,n.Z)((0,n.Z)({},r.C[e]),{overflow:l(d)}),u[e].ignoreShake=!0})),u}},35945:(e,t,o)=>{o.d(t,{Z:()=>T});var n=o(4942),r=o(29439),a=o(87462),s=o(81694),i=o.n(s),l=o(71002),c=o(1413),p=o(45987),d=o(72791),f=o(40034),u=o(1961);function m(e){var t=e.showArrow,o=e.arrowContent,n=e.children,r=e.prefixCls,a=e.id,s=e.overlayInnerStyle,l=e.className,c=e.style;return d.createElement("div",{className:i()("".concat(r,"-content"),l),style:c},!1!==t&&d.createElement("div",{className:"".concat(r,"-arrow"),key:"arrow"},o),d.createElement("div",{className:"".concat(r,"-inner"),id:a,role:"tooltip",style:s},"function"===typeof n?n():n))}var v=function(e,t){var o=e.overlayClassName,n=e.trigger,r=void 0===n?["hover"]:n,s=e.mouseEnterDelay,i=void 0===s?0:s,v=e.mouseLeaveDelay,h=void 0===v?.1:v,y=e.overlayStyle,b=e.prefixCls,g=void 0===b?"rc-tooltip":b,x=e.children,j=e.onVisibleChange,w=e.afterVisibleChange,N=e.transitionName,C=e.animation,Z=e.motion,O=e.placement,T=void 0===O?"right":O,k=e.align,S=void 0===k?{}:k,E=e.destroyTooltipOnHide,P=void 0!==E&&E,V=e.defaultVisible,A=e.getTooltipContainer,I=e.overlayInnerStyle,D=e.arrowContent,H=e.overlay,R=e.id,q=e.showArrow,L=(0,p.Z)(e,["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow"]),M=(0,d.useRef)(null);(0,d.useImperativeHandle)(t,(function(){return M.current}));var z=(0,c.Z)({},L);"visible"in e&&(z.popupVisible=e.visible);var _=!1,B=!1;if("boolean"===typeof P)_=P;else if(P&&"object"===(0,l.Z)(P)){var F=P.keepParent;_=!0===F,B=!1===F}return d.createElement(f.Z,(0,a.Z)({popupClassName:o,prefixCls:g,popup:function(){return d.createElement(m,{showArrow:q,arrowContent:D,key:"content",prefixCls:g,id:R,overlayInnerStyle:I},H)},action:r,builtinPlacements:u.C,popupPlacement:T,ref:M,popupAlign:S,getPopupContainer:A,onPopupVisibleChange:j,afterPopupVisibleChange:w,popupTransitionName:N,popupAnimation:C,popupMotion:Z,defaultPopupVisible:V,destroyPopupOnHide:_,autoDestroy:B,mouseLeaveDelay:h,popupStyle:y,mouseEnterDelay:i},z),x)};const h=(0,d.forwardRef)(v);var y=o(75179),b=o(71929),g=o(54466),x=o(29464),j=o(89631),w=o(61113),N=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o},C=new RegExp("^(".concat(g.Y.join("|"),")(-inverse)?$"));function Z(e,t){var o=e.type;if((!0===o.__ANT_BUTTON||"button"===e.type)&&e.props.disabled||!0===o.__ANT_SWITCH&&(e.props.disabled||e.props.loading)||!0===o.__ANT_RADIO&&e.props.disabled){var n=function(e,t){var o={},n=(0,a.Z)({},e);return t.forEach((function(t){e&&t in e&&(o[t]=e[t],delete n[t])})),{picked:o,omitted:n}}(e.props.style,["position","left","right","top","bottom","float","display","zIndex"]),r=n.picked,s=n.omitted,l=(0,a.Z)((0,a.Z)({display:"inline-block"},r),{cursor:"not-allowed",width:e.props.block?"100%":void 0}),c=(0,a.Z)((0,a.Z)({},s),{pointerEvents:"none"}),p=(0,w.Tm)(e,{style:c,className:null});return d.createElement("span",{style:l,className:i()(e.props.className,"".concat(t,"-disabled-compatible-wrapper"))},p)}return e}var O=d.forwardRef((function(e,t){var o,s=d.useContext(b.E_),l=s.getPopupContainer,c=s.getPrefixCls,p=s.direction;var f=(0,y.Z)(!1,{value:void 0!==e.open?e.open:e.visible,defaultValue:void 0!==e.defaultOpen?e.defaultOpen:e.defaultVisible}),u=(0,r.Z)(f,2),m=u[0],v=u[1],g=function(){var t=e.title,o=e.overlay;return!t&&!o&&0!==t},O=function(){var t=e.builtinPlacements,o=e.arrowPointAtCenter,n=void 0!==o&&o,r=e.autoAdjustOverflow,a=void 0===r||r;return t||(0,j.Z)({arrowPointAtCenter:n,autoAdjustOverflow:a})},T=e.getPopupContainer,k=e.placement,S=void 0===k?"top":k,E=e.mouseEnterDelay,P=void 0===E?.1:E,V=e.mouseLeaveDelay,A=void 0===V?.1:V,I=N(e,["getPopupContainer","placement","mouseEnterDelay","mouseLeaveDelay"]),D=e.prefixCls,H=e.openClassName,R=e.getTooltipContainer,q=e.overlayClassName,L=e.color,M=e.overlayInnerStyle,z=e.children,_=c("tooltip",D),B=c(),F=m;"open"in e||"visible"in e||!g()||(F=!1);var Y=Z((0,w.l$)(z)&&!(0,w.M2)(z)?z:d.createElement("span",null,z),_),$=Y.props,G=$.className&&"string"!==typeof $.className?$.className:i()($.className,(0,n.Z)({},H||"".concat(_,"-open"),!0)),X=i()(q,(o={},(0,n.Z)(o,"".concat(_,"-rtl"),"rtl"===p),(0,n.Z)(o,"".concat(_,"-").concat(L),L&&C.test(L)),o)),W=M,Q={};return L&&!C.test(L)&&(W=(0,a.Z)((0,a.Z)({},M),{background:L}),Q={"--antd-arrow-background-color":L}),d.createElement(h,(0,a.Z)({},I,{placement:S,mouseEnterDelay:P,mouseLeaveDelay:A,prefixCls:_,overlayClassName:X,getTooltipContainer:T||R||l,ref:t,builtinPlacements:O(),overlay:function(){var t=e.title,o=e.overlay;return 0===t?t:o||t||""}(),visible:F,onVisibleChange:function(t){var o,n;v(!g()&&t),g()||(null===(o=e.onOpenChange)||void 0===o||o.call(e,t),null===(n=e.onVisibleChange)||void 0===n||n.call(e,t))},onPopupAlign:function(e,t){var o=O(),n=Object.keys(o).find((function(e){var n,r;return o[e].points[0]===(null===(n=t.points)||void 0===n?void 0:n[0])&&o[e].points[1]===(null===(r=t.points)||void 0===r?void 0:r[1])}));if(n){var r=e.getBoundingClientRect(),a={top:"50%",left:"50%"};["top","Bottom"].includes(n)?a.top="".concat(r.height-t.offset[1],"px"):["Top","bottom"].includes(n)&&(a.top="".concat(-t.offset[1],"px")),["left","Right"].includes(n)?a.left="".concat(r.width-t.offset[0],"px"):["right","Left"].includes(n)&&(a.left="".concat(-t.offset[0],"px")),e.style.transformOrigin="".concat(a.left," ").concat(a.top)}},overlayInnerStyle:W,arrowContent:d.createElement("span",{className:"".concat(_,"-arrow-content"),style:Q}),motion:{motionName:(0,x.mL)(B,"zoom-big-fast",e.transitionName),motionDeadline:1e3}}),F?(0,w.Tm)(Y,{className:G}):Y)}));const T=O},1961:(e,t,o)=>{o.d(t,{C:()=>a});var n={adjustX:1,adjustY:1},r=[0,0],a={left:{points:["cr","cl"],overflow:n,offset:[-4,0],targetOffset:r},right:{points:["cl","cr"],overflow:n,offset:[4,0],targetOffset:r},top:{points:["bc","tc"],overflow:n,offset:[0,-4],targetOffset:r},bottom:{points:["tc","bc"],overflow:n,offset:[0,4],targetOffset:r},topLeft:{points:["bl","tl"],overflow:n,offset:[0,-4],targetOffset:r},leftTop:{points:["tr","tl"],overflow:n,offset:[-4,0],targetOffset:r},topRight:{points:["br","tr"],overflow:n,offset:[0,-4],targetOffset:r},rightTop:{points:["tl","tr"],overflow:n,offset:[4,0],targetOffset:r},bottomRight:{points:["tr","br"],overflow:n,offset:[0,4],targetOffset:r},rightBottom:{points:["bl","br"],overflow:n,offset:[4,0],targetOffset:r},bottomLeft:{points:["tl","bl"],overflow:n,offset:[0,4],targetOffset:r},leftBottom:{points:["br","bl"],overflow:n,offset:[-4,0],targetOffset:r}}}}]);
//# sourceMappingURL=648.abf145f0.chunk.js.map