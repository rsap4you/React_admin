"use strict";(self.webpackChunkemilus=self.webpackChunkemilus||[]).push([[54],{44955:(e,t,a)=>{a.d(t,{Z:()=>i});a(72791);var s=a(2649),r=a(80184);const n=e=>(0,r.jsx)(s.C,{...e,className:"ant-avatar-".concat(e.type),children:e.text}),i=e=>{const{name:t,suffix:a,subTitle:s,id:i,type:c,src:o,icon:l,size:d,shape:m,gap:g,text:h,onNameClick:u}=e;return(0,r.jsxs)("div",{className:"avatar-status d-flex align-items-center",children:[n({icon:l,src:o,type:c,size:d,shape:m,gap:g,text:h}),(0,r.jsxs)("div",{className:"ml-2",children:[(0,r.jsxs)("div",{children:[u?(0,r.jsx)("div",{onClick:()=>u({name:t,subTitle:s,src:o,id:i}),className:"avatar-status-name clickable",children:t}):(0,r.jsx)("div",{className:"avatar-status-name",children:t}),(0,r.jsx)("span",{children:a})]}),(0,r.jsx)("div",{className:"text-muted avatar-status-subtitle",children:s})]})]})}},40872:(e,t,a)=>{a.d(t,{Z:()=>o});a(72791);var s=a(32385),r=a(56014),n=a(75033),i=a(80184);const c=e=>(0,i.jsx)(s.Z,{overlay:e.menu,placement:e.placement,trigger:["click"],children:(0,i.jsx)("div",{className:"ellipsis-dropdown",children:(0,i.jsx)(n.Z,{})})});c.defaultProps={trigger:"click",placement:"bottomRight",menu:(0,i.jsx)(r.Z,{})};const o=c},68470:(e,t,a)=>{a.d(t,{Z:()=>n});a(72791);var s=a(80184);const r=e=>{const{children:t,className:a,alignItems:r,justifyContent:n,mobileFlex:i,flexDirection:c}=e;return(0,s.jsx)("div",{className:"".concat(i?"d-flex":"d-md-flex"," ").concat(a," ").concat(c?"flex-"+c:""," ").concat(r?"align-items-"+r:""," ").concat(n?"justify-content-"+n:""),children:t})};r.defaultProps={mobileFlex:!0,flexDirection:"row",className:""};const n=r},2703:(e,t,a)=>{a.d(t,{Z:()=>s});const s=class{static getNameInitial(e){let t=e.match(/\b\w/g)||[];return((t.shift()||"")+(t.pop()||"")).toUpperCase()}static getRouteInfo(e,t){if(e.path===t)return e;let a;for(let s in e)if(e.hasOwnProperty(s)&&"object"===typeof e[s]&&(a=this.getRouteInfo(e[s],t),a))return a;return a}static getColorContrast(e){if(!e)return"dark";const t=parseInt(r(e).substring(0,2),16);const a=function(e){return parseInt(r(e).substring(2,4),16)}(e),s=function(e){return parseInt(r(e).substring(4,6),16)}(e);function r(e){return"#"===e.charAt(0)?e.substring(1,7):e}return(299*t+587*a+114*s)/1e3>130?"dark":"light"}static shadeColor(e,t){let a=parseInt(e.substring(1,3),16),s=parseInt(e.substring(3,5),16),r=parseInt(e.substring(5,7),16);a=parseInt(a*(100+t)/100),s=parseInt(s*(100+t)/100),r=parseInt(r*(100+t)/100),a=a<255?a:255,s=s<255?s:255,r=r<255?r:255;const n=1===a.toString(16).length?"0".concat(a.toString(16)):a.toString(16),i=1===s.toString(16).length?"0".concat(s.toString(16)):s.toString(16),c=1===r.toString(16).length?"0".concat(r.toString(16)):r.toString(16);return"#".concat(n).concat(i).concat(c)}static rgbaToHex(e){const t=e=>e.replace(/^\s+|\s+$/gm,""),a=e.substring(e.indexOf("(")).split(","),s=parseInt(t(a[0].substring(1)),10),r=parseInt(t(a[1]),10),n=parseInt(t(a[2]),10),i=parseFloat(t(a[3].substring(0,a[3].length-1))).toFixed(2),c=[s.toString(16),r.toString(16),n.toString(16),Math.round(255*i).toString(16).substring(0,2)];return c.forEach((function(e,t){1===e.length&&(c[t]="0"+e)})),"#".concat(c.join(""))}static getSignNum(e,t,a){return e>0?t:e<0?a:null}static antdTableSorter(e,t,a){return"number"===typeof e[a]&&"number"===typeof t[a]?e[a]-t[a]:"string"===typeof e[a]&&"string"===typeof t[a]?(e=e[a].toLowerCase())>(t=t[a].toLowerCase())?-1:t>e?1:0:void 0}static filterArray(e,t,a){let s=e;return e&&(s=e.filter((e=>e[t]===a))),s}static deleteArrayRow(e,t,a){let s=e;return e&&(s=e.filter((e=>e[t]!==a))),s}static wildCardSearch(e,t){return e=e.filter((e=>(e=>{for(let a in e)if(null!=e[a]&&-1!==e[a].toString().toUpperCase().indexOf(t.toString().toUpperCase()))return!0})(e)))}static getBreakPoint(e){let t=[];for(const a in e)if(e.hasOwnProperty(a)){e[a]&&t.push(a)}return t}}},37054:(e,t,a)=>{a.r(t),a.d(t,{default:()=>I});var s=a(72791),r=a(83734),n=a(75594),i=a(56014),c=a(2730),o=a(80940),l=a(87309),d=a(80553),m=a(16846),g=a(24215),h=a(82622),u=a(11730),p=a(31549),x=a(44955),j=a(40872),b=a(68470),f=a(30948),v=a(57689),y=a(2703),k=a(80184);const{Option:S}=r.Z,Z=["Cloths","Bags","Shoes","Watches","Devices"],I=()=>{const e=(0,v.s0)(),[t,a]=(0,s.useState)(m),[I,C]=(0,s.useState)([]),[w,N]=(0,s.useState)([]),A=t=>{e("/app/apps/ecommerce/edit-product/".concat(t.id))},B=e=>{let s=t;I.length>1?I.forEach((e=>{s=y.Z.deleteArrayRow(s,"id",e.id),a(s),C([])})):(s=y.Z.deleteArrayRow(s,"id",e.id),a(s))},T=[{title:"ID",dataIndex:"id"},{title:"Product",dataIndex:"name",render:(e,t)=>(0,k.jsx)("div",{className:"d-flex",children:(0,k.jsx)(x.Z,{size:60,type:"square",src:t.image,name:t.name})}),sorter:(e,t)=>y.Z.antdTableSorter(e,t,"name")},{title:"Category",dataIndex:"category",sorter:(e,t)=>y.Z.antdTableSorter(e,t,"category")},{title:"Price",dataIndex:"price",render:e=>(0,k.jsx)("div",{children:(0,k.jsx)(f.Z,{displayType:"text",value:(Math.round(100*e)/100).toFixed(2),prefix:"$",thousandSeparator:!0})}),sorter:(e,t)=>y.Z.antdTableSorter(e,t,"price")},{title:"Stock",dataIndex:"stock",sorter:(e,t)=>y.Z.antdTableSorter(e,t,"stock")},{title:"Status",dataIndex:"stock",render:e=>{return(0,k.jsx)(b.Z,{alignItems:"center",children:(t=e,t>=10?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(n.Z,{status:"success"}),(0,k.jsx)("span",{children:"In Stock"})]}):t<10&&t>0?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(n.Z,{status:"warning"}),(0,k.jsx)("span",{children:"Limited Stock"})]}):0===t?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(n.Z,{status:"error"}),(0,k.jsx)("span",{children:"Out of Stock"})]}):null)});var t},sorter:(e,t)=>y.Z.antdTableSorter(e,t,"stock")},{title:"",dataIndex:"actions",render:(e,t)=>{return(0,k.jsx)("div",{className:"text-right",children:(0,k.jsx)(j.Z,{menu:(a=t,(0,k.jsxs)(i.Z,{children:[(0,k.jsx)(i.Z.Item,{onClick:()=>A(a),children:(0,k.jsxs)(b.Z,{alignItems:"center",children:[(0,k.jsx)(g.Z,{}),(0,k.jsx)("span",{className:"ml-2",children:"View Details"})]})}),(0,k.jsx)(i.Z.Item,{onClick:()=>B(a),children:(0,k.jsxs)(b.Z,{alignItems:"center",children:[(0,k.jsx)(h.Z,{}),(0,k.jsx)("span",{className:"ml-2",children:I.length>0?"Delete (".concat(I.length,")"):"Delete"})]})})]}))})});var a}}],D={onChange:(e,t)=>{C(t),N(e)}};return(0,k.jsxs)(c.Z,{children:[(0,k.jsxs)(b.Z,{alignItems:"center",justifyContent:"between",mobileFlex:!1,children:[(0,k.jsxs)(b.Z,{className:"mb-1",mobileFlex:!1,children:[(0,k.jsx)("div",{className:"mr-md-3 mb-3",children:(0,k.jsx)(o.Z,{placeholder:"Search",prefix:(0,k.jsx)(u.Z,{}),onChange:e=>(e=>{const s=e.currentTarget.value,r=e.currentTarget.value?t:m,n=y.Z.wildCardSearch(r,s);a(n),N([])})(e)})}),(0,k.jsx)("div",{className:"mb-3",children:(0,k.jsxs)(r.Z,{defaultValue:"All",className:"w-100",style:{minWidth:180},onChange:e=>{if("All"!==e){const t="category",s=y.Z.filterArray(m,t,e);a(s)}else a(m)},placeholder:"Category",children:[(0,k.jsx)(S,{value:"All",children:"All"}),Z.map((e=>(0,k.jsx)(S,{value:e,children:e},e)))]})})]}),(0,k.jsx)("div",{children:(0,k.jsx)(l.Z,{onClick:()=>{e("/app/apps/ecommerce/add-product")},type:"primary",icon:(0,k.jsx)(p.Z,{}),block:!0,children:"Add product"})})]}),(0,k.jsx)("div",{className:"table-responsive",children:(0,k.jsx)(d.Z,{columns:T,dataSource:t,rowKey:"id",rowSelection:{selectedRowKeys:w,type:"checkbox",preserveSelectedRowKeys:!1,...D}})})]})}},82622:(e,t,a)=>{a.d(t,{Z:()=>o});var s=a(1413),r=a(72791);const n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"};var i=a(8711),c=function(e,t){return r.createElement(i.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:t,icon:n}))};c.displayName="DeleteOutlined";const o=r.forwardRef(c)},16846:e=>{e.exports=JSON.parse('[{"id":12,"name":"Blue Jacket","image":"/img/thumbs/thumb-7.jpg","category":"Cloths","price":77,"stock":46},{"id":13,"name":"White Backpack","image":"/img/thumbs/thumb-8.jpg","category":"Bags","price":139,"stock":28},{"id":14,"name":"Black Sneaker","image":"/img/thumbs/thumb-9.jpg","category":"Shoes","price":99,"stock":52},{"id":15,"name":"Gray Hoodies","image":"/img/thumbs/thumb-10.jpg","category":"Cloths","price":68,"stock":92},{"id":16,"name":"Blue Backpack","image":"/img/thumbs/thumb-11.jpg","category":"Bags","price":70,"stock":0},{"id":17,"name":"White Sneaker","image":"/img/thumbs/thumb-12.jpg","category":"Shoes","price":29,"stock":18},{"id":18,"name":"Strip Analog Watch","image":"/img/thumbs/thumb-13.jpg","category":"Watches","price":389,"stock":7},{"id":19,"name":"Red Beat Headphone","image":"/img/thumbs/thumb-14.jpg","category":"Devices","price":86,"stock":0},{"id":20,"name":"Apple Macbook Pro","image":"/img/thumbs/thumb-15.jpg","category":"Devices","price":1599,"stock":27},{"id":21,"name":"Bronze Analog Watch","image":"/img/thumbs/thumb-16.jpg","category":"Watches","price":729,"stock":6},{"id":22,"name":"Apple Watch","image":"/img/thumbs/thumb-17.jpg","category":"Devices","price":388,"stock":51},{"id":23,"name":"Antique Analog Watch","image":"/img/thumbs/thumb-18.jpg","category":"Watches","price":599,"stock":30}]')}}]);
//# sourceMappingURL=54.fb0147f8.chunk.js.map