"use strict";(self.webpackChunkemilus=self.webpackChunkemilus||[]).push([[824],{44955:(t,e,a)=>{a.d(e,{Z:()=>i});a(72791);var r=a(2649),n=a(80184);const s=t=>(0,n.jsx)(r.C,{...t,className:"ant-avatar-".concat(t.type),children:t.text}),i=t=>{const{name:e,suffix:a,subTitle:r,id:i,type:d,src:l,icon:o,size:c,shape:m,gap:u,text:p,onNameClick:g}=t;return(0,n.jsxs)("div",{className:"avatar-status d-flex align-items-center",children:[s({icon:o,src:l,type:d,size:c,shape:m,gap:u,text:p}),(0,n.jsxs)("div",{className:"ml-2",children:[(0,n.jsxs)("div",{children:[g?(0,n.jsx)("div",{onClick:()=>g({name:e,subTitle:r,src:l,id:i}),className:"avatar-status-name clickable",children:e}):(0,n.jsx)("div",{className:"avatar-status-name",children:e}),(0,n.jsx)("span",{children:a})]}),(0,n.jsx)("div",{className:"text-muted avatar-status-subtitle",children:r})]})]})}},40872:(t,e,a)=>{a.d(e,{Z:()=>l});a(72791);var r=a(32385),n=a(56014),s=a(75033),i=a(80184);const d=t=>(0,i.jsx)(r.Z,{overlay:t.menu,placement:t.placement,trigger:["click"],children:(0,i.jsx)("div",{className:"ellipsis-dropdown",children:(0,i.jsx)(s.Z,{})})});d.defaultProps={trigger:"click",placement:"bottomRight",menu:(0,i.jsx)(n.Z,{})};const l=d},68470:(t,e,a)=>{a.d(e,{Z:()=>s});a(72791);var r=a(80184);const n=t=>{const{children:e,className:a,alignItems:n,justifyContent:s,mobileFlex:i,flexDirection:d}=t;return(0,r.jsx)("div",{className:"".concat(i?"d-flex":"d-md-flex"," ").concat(a," ").concat(d?"flex-"+d:""," ").concat(n?"align-items-"+n:""," ").concat(s?"justify-content-"+s:""),children:e})};n.defaultProps={mobileFlex:!0,flexDirection:"row",className:""};const s=n},2703:(t,e,a)=>{a.d(e,{Z:()=>r});const r=class{static getNameInitial(t){let e=t.match(/\b\w/g)||[];return((e.shift()||"")+(e.pop()||"")).toUpperCase()}static getRouteInfo(t,e){if(t.path===e)return t;let a;for(let r in t)if(t.hasOwnProperty(r)&&"object"===typeof t[r]&&(a=this.getRouteInfo(t[r],e),a))return a;return a}static getColorContrast(t){if(!t)return"dark";const e=parseInt(n(t).substring(0,2),16);const a=function(t){return parseInt(n(t).substring(2,4),16)}(t),r=function(t){return parseInt(n(t).substring(4,6),16)}(t);function n(t){return"#"===t.charAt(0)?t.substring(1,7):t}return(299*e+587*a+114*r)/1e3>130?"dark":"light"}static shadeColor(t,e){let a=parseInt(t.substring(1,3),16),r=parseInt(t.substring(3,5),16),n=parseInt(t.substring(5,7),16);a=parseInt(a*(100+e)/100),r=parseInt(r*(100+e)/100),n=parseInt(n*(100+e)/100),a=a<255?a:255,r=r<255?r:255,n=n<255?n:255;const s=1===a.toString(16).length?"0".concat(a.toString(16)):a.toString(16),i=1===r.toString(16).length?"0".concat(r.toString(16)):r.toString(16),d=1===n.toString(16).length?"0".concat(n.toString(16)):n.toString(16);return"#".concat(s).concat(i).concat(d)}static rgbaToHex(t){const e=t=>t.replace(/^\s+|\s+$/gm,""),a=t.substring(t.indexOf("(")).split(","),r=parseInt(e(a[0].substring(1)),10),n=parseInt(e(a[1]),10),s=parseInt(e(a[2]),10),i=parseFloat(e(a[3].substring(0,a[3].length-1))).toFixed(2),d=[r.toString(16),n.toString(16),s.toString(16),Math.round(255*i).toString(16).substring(0,2)];return d.forEach((function(t,e){1===t.length&&(d[e]="0"+t)})),"#".concat(d.join(""))}static getSignNum(t,e,a){return t>0?e:t<0?a:null}static antdTableSorter(t,e,a){return"number"===typeof t[a]&&"number"===typeof e[a]?t[a]-e[a]:"string"===typeof t[a]&&"string"===typeof e[a]?(t=t[a].toLowerCase())>(e=e[a].toLowerCase())?-1:e>t?1:0:void 0}static filterArray(t,e,a){let r=t;return t&&(r=t.filter((t=>t[e]===a))),r}static deleteArrayRow(t,e,a){let r=t;return t&&(r=t.filter((t=>t[e]!==a))),r}static wildCardSearch(t,e){return t=t.filter((t=>(t=>{for(let a in t)if(null!=t[a]&&-1!==t[a].toString().toUpperCase().indexOf(e.toString().toUpperCase()))return!0})(t)))}static getBreakPoint(t){let e=[];for(const a in t)if(t.hasOwnProperty(a)){t[a]&&e.push(a)}return e}}},43824:(t,e,a)=>{a.r(e),a.d(e,{default:()=>R});var r=a(72791),n=a(83734),s=a(56014),i=a(47528),d=a(75594),l=a(2730),o=a(80940),c=a(87309),m=a(80553);const u=JSON.parse('[{"id":"#5331","name":"Eileen Horton","image":"/img/avatars/thumb-1.jpg","date":1573430400,"amount":677,"paymentStatus":"Paid","orderStatus":"Ready"},{"id":"#5328","name":"Terrance Moreno","image":"/img/avatars/thumb-2.jpg","date":1572393600,"amount":1328.35,"paymentStatus":"Paid","orderStatus":"Ready"},{"id":"#5321","name":"Ron Vargas","image":"/img/avatars/thumb-3.jpg","date":1593949805,"amount":629,"paymentStatus":"Paid","orderStatus":"Shipped"},{"id":"#5287","name":"Luke Cook","image":"/img/avatars/thumb-4.jpg","date":1579132800,"amount":25.9,"paymentStatus":"Paid","orderStatus":"Shipped"},{"id":"#5351","name":"Joyce Freeman","image":"/img/avatars/thumb-5.jpg","date":1591286400,"amount":817.5,"paymentStatus":"Pending","orderStatus":"Ready"},{"id":"#5285","name":"Samantha Phillips","image":"/img/avatars/thumb-6.jpg","date":1591459200,"amount":47.9,"paymentStatus":"Paid","orderStatus":"Shipped"},{"id":"#5290","name":"Tara Fletcher","image":"/img/avatars/thumb-7.jpg","date":1591459200,"amount":300,"paymentStatus":"Pending","orderStatus":"Ready"},{"id":"#5337","name":"Frederick Adams","image":"/img/avatars/thumb-8.jpg","date":1589644800,"amount":730,"paymentStatus":"Expired","orderStatus":"Ready"},{"id":"#5297","name":"Carolyn Hanson","image":"/img/avatars/thumb-9.jpg","date":1590508800,"amount":827,"paymentStatus":"Paid","orderStatus":"Shipped"},{"id":"#5298","name":"Brittany Hale","image":"/img/avatars/thumb-10.jpg","date":1590336000,"amount":1866,"paymentStatus":"Paid","orderStatus":"Shipped"},{"id":"#5301","name":"Lloyd Obrien","image":"/img/avatars/thumb-11.jpg","date":1593532800,"amount":269,"paymentStatus":"Paid","orderStatus":"Shipped"},{"id":"#5304","name":"Gabriella May","image":"/img/avatars/thumb-12.jpg","date":1593619200,"amount":180,"paymentStatus":"Paid","orderStatus":"Shipped"}]');var p=a(24215),g=a(31549),h=a(11730),x=a(1413);const S={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM514.1 580.1l-61.8-102.4c-2.2-3.6-6.1-5.8-10.3-5.8h-38.4c-2.3 0-4.5.6-6.4 1.9-5.6 3.5-7.3 10.9-3.7 16.6l82.3 130.4-83.4 132.8a12.04 12.04 0 0010.2 18.4h34.5c4.2 0 8-2.2 10.2-5.7L510 664.8l62.3 101.4c2.2 3.6 6.1 5.7 10.2 5.7H620c2.3 0 4.5-.7 6.5-1.9 5.6-3.6 7.2-11 3.6-16.6l-84-130.4 85.3-132.5a12.04 12.04 0 00-10.1-18.5h-35.7c-4.2 0-8.1 2.2-10.3 5.8l-61.2 102.3z"}}]},name:"file-excel",theme:"outlined"};var j=a(8711),f=function(t,e){return r.createElement(j.Z,(0,x.Z)((0,x.Z)({},t),{},{ref:e,icon:S}))};f.displayName="FileExcelOutlined";const y=r.forwardRef(f);var b=a(44955),v=a(40872),Z=a(68470),I=a(30948),N=a(72426),w=a.n(N);var P=a(2703),C=a(80184);const{Option:k}=n.Z,T=["Paid","Pending","Expired"],R=()=>{const[t,e]=(0,r.useState)(u),[a,x]=(0,r.useState)([]),[S,j]=(0,r.useState)([]),f=[{title:"ID",dataIndex:"id"},{title:"Product",dataIndex:"name",render:(t,e)=>(0,C.jsx)("div",{className:"d-flex",children:(0,C.jsx)(b.Z,{size:30,src:e.image,name:e.name})}),sorter:(t,e)=>P.Z.antdTableSorter(t,e,"name")},{title:"Date",dataIndex:"date",render:(t,e)=>(0,C.jsx)("span",{children:w().unix(e.date).format("DD-MM-YYYY")}),sorter:(t,e)=>P.Z.antdTableSorter(t,e,"date")},{title:"Order status",dataIndex:"orderStatus",render:(t,e)=>{return(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(i.Z,{color:(a=e.orderStatus,"Ready"===a?"blue":"Shipped"===a?"cyan":""),children:e.orderStatus})});var a},sorter:(t,e)=>P.Z.antdTableSorter(t,e,"orderStatus")},{title:"Payment status",dataIndex:"paymentStatus",render:(t,e)=>{return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(d.Z,{status:(a=e.paymentStatus,"Paid"===a?"success":"Pending"===a?"warning":"Expired"===a?"error":"")}),(0,C.jsx)("span",{children:e.paymentStatus})]});var a},sorter:(t,e)=>P.Z.antdTableSorter(t,e,"paymentStatus")},{title:"Total",dataIndex:"amount",render:(t,e)=>(0,C.jsx)("span",{className:"font-weight-semibold",children:(0,C.jsx)(I.Z,{displayType:"text",value:(Math.round(100*e.amount)/100).toFixed(2),prefix:"$",thousandSeparator:!0})}),sorter:(t,e)=>P.Z.antdTableSorter(t,e,"amount")},{title:"",dataIndex:"actions",render:(t,e)=>(0,C.jsx)("div",{className:"text-right",children:(0,C.jsx)(v.Z,{menu:(0,C.jsxs)(s.Z,{children:[(0,C.jsx)(s.Z.Item,{children:(0,C.jsxs)(Z.Z,{alignItems:"center",children:[(0,C.jsx)(p.Z,{}),(0,C.jsx)("span",{className:"ml-2",children:"View Details"})]})}),(0,C.jsx)(s.Z.Item,{children:(0,C.jsxs)(Z.Z,{alignItems:"center",children:[(0,C.jsx)(g.Z,{}),(0,C.jsx)("span",{className:"ml-2",children:"Add to remark"})]})})]})})})}],N={onChange:(t,e)=>{x(e),j(t)}};return(0,C.jsxs)(l.Z,{children:[(0,C.jsxs)(Z.Z,{alignItems:"center",justifyContent:"between",mobileFlex:!1,children:[(0,C.jsxs)(Z.Z,{className:"mb-1",mobileFlex:!1,children:[(0,C.jsx)("div",{className:"mr-md-3 mb-3",children:(0,C.jsx)(o.Z,{placeholder:"Search",prefix:(0,C.jsx)(h.Z,{}),onChange:a=>(a=>{const r=a.currentTarget.value,n=a.currentTarget.value?t:u,s=P.Z.wildCardSearch(n,r);e(s),j([])})(a)})}),(0,C.jsx)("div",{className:"mb-3",children:(0,C.jsxs)(n.Z,{defaultValue:"All",className:"w-100",style:{minWidth:180},onChange:t=>{if("All"!==t){const a="paymentStatus",r=P.Z.filterArray(u,a,t);e(r)}else e(u)},placeholder:"Status",children:[(0,C.jsx)(k,{value:"All",children:"All payment "}),T.map((t=>(0,C.jsx)(k,{value:t,children:t},t)))]})})]}),(0,C.jsx)("div",{children:(0,C.jsx)(c.Z,{type:"primary",icon:(0,C.jsx)(y,{}),block:!0,children:"Export All"})})]}),(0,C.jsx)("div",{className:"table-responsive",children:(0,C.jsx)(m.Z,{columns:f,dataSource:t,rowKey:"id",rowSelection:{selectedRowKeys:S,type:"checkbox",preserveSelectedRowKeys:!1,...N}})})]})}}}]);
//# sourceMappingURL=824.60e35854.chunk.js.map