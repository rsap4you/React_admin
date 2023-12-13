"use strict";(self.webpackChunkemilus=self.webpackChunkemilus||[]).push([[386],{44955:(t,e,a)=>{a.d(e,{Z:()=>i});a(72791);var s=a(2649),r=a(80184);const n=t=>(0,r.jsx)(s.C,{...t,className:"ant-avatar-".concat(t.type),children:t.text}),i=t=>{const{name:e,suffix:a,subTitle:s,id:i,type:o,src:m,icon:c,size:l,shape:d,gap:p,text:g,onNameClick:x}=t;return(0,r.jsxs)("div",{className:"avatar-status d-flex align-items-center",children:[n({icon:c,src:m,type:o,size:l,shape:d,gap:p,text:g}),(0,r.jsxs)("div",{className:"ml-2",children:[(0,r.jsxs)("div",{children:[x?(0,r.jsx)("div",{onClick:()=>x({name:e,subTitle:s,src:m,id:i}),className:"avatar-status-name clickable",children:e}):(0,r.jsx)("div",{className:"avatar-status-name",children:e}),(0,r.jsx)("span",{children:a})]}),(0,r.jsx)("div",{className:"text-muted avatar-status-subtitle",children:s})]})]})}},40872:(t,e,a)=>{a.d(e,{Z:()=>m});a(72791);var s=a(32385),r=a(56014),n=a(75033),i=a(80184);const o=t=>(0,i.jsx)(s.Z,{overlay:t.menu,placement:t.placement,trigger:["click"],children:(0,i.jsx)("div",{className:"ellipsis-dropdown",children:(0,i.jsx)(n.Z,{})})});o.defaultProps={trigger:"click",placement:"bottomRight",menu:(0,i.jsx)(r.Z,{})};const m=o},68470:(t,e,a)=>{a.d(e,{Z:()=>n});a(72791);var s=a(80184);const r=t=>{const{children:e,className:a,alignItems:r,justifyContent:n,mobileFlex:i,flexDirection:o}=t;return(0,s.jsx)("div",{className:"".concat(i?"d-flex":"d-md-flex"," ").concat(a," ").concat(o?"flex-"+o:""," ").concat(r?"align-items-"+r:""," ").concat(n?"justify-content-"+n:""),children:e})};r.defaultProps={mobileFlex:!0,flexDirection:"row",className:""};const n=r},70606:(t,e,a)=>{a.d(e,{Z:()=>p});var s=a(72791),r=a(43110),n=a(68885),i=a(2703),o=a(96324),m=a(80184);const{useBreakpoint:c}=r.ZP,l=t=>{const{sideContent:e,sideContentWidth:a=250,border:s}=t;return(0,m.jsx)("div",{className:"side-content ".concat(s?"with-border":""),style:{width:"".concat(a,"px")},children:e})},d=t=>{const{sideContent:e,visible:a,onSideContentClose:s}=t;return(0,m.jsx)(n.Z,{width:320,placement:"left",closable:!1,onClose:s,open:a,bodyStyle:{paddingLeft:0,paddingRight:0},children:(0,m.jsx)("div",{className:"h-100",children:e})})},p=t=>{const{mainContent:e,pageHeader:a,sideContentGutter:r=!0}=t,n=!i.Z.getBreakPoint(c()).includes("lg"),[p,g]=(0,s.useState)(!1);return(0,m.jsxs)("div",{className:"inner-app-layout",children:[n?(0,m.jsx)(d,{open:p,onSideContentClose:t=>{g(!1)},...t}):(0,m.jsx)(l,{...t}),(0,m.jsxs)("div",{className:"main-content ".concat(a?"has-page-header":""," ").concat(r?"gutter":"no-gutter"),children:[n?(0,m.jsx)("div",{className:"font-size-lg mb-3 ".concat(r?"":"pt-3 px-3"),children:(0,m.jsx)(o.Z,{onClick:()=>{g(!0)}})}):null,e]})]})}},2703:(t,e,a)=>{a.d(e,{Z:()=>s});const s=class{static getNameInitial(t){let e=t.match(/\b\w/g)||[];return((e.shift()||"")+(e.pop()||"")).toUpperCase()}static getRouteInfo(t,e){if(t.path===e)return t;let a;for(let s in t)if(t.hasOwnProperty(s)&&"object"===typeof t[s]&&(a=this.getRouteInfo(t[s],e),a))return a;return a}static getColorContrast(t){if(!t)return"dark";const e=parseInt(r(t).substring(0,2),16);const a=function(t){return parseInt(r(t).substring(2,4),16)}(t),s=function(t){return parseInt(r(t).substring(4,6),16)}(t);function r(t){return"#"===t.charAt(0)?t.substring(1,7):t}return(299*e+587*a+114*s)/1e3>130?"dark":"light"}static shadeColor(t,e){let a=parseInt(t.substring(1,3),16),s=parseInt(t.substring(3,5),16),r=parseInt(t.substring(5,7),16);a=parseInt(a*(100+e)/100),s=parseInt(s*(100+e)/100),r=parseInt(r*(100+e)/100),a=a<255?a:255,s=s<255?s:255,r=r<255?r:255;const n=1===a.toString(16).length?"0".concat(a.toString(16)):a.toString(16),i=1===s.toString(16).length?"0".concat(s.toString(16)):s.toString(16),o=1===r.toString(16).length?"0".concat(r.toString(16)):r.toString(16);return"#".concat(n).concat(i).concat(o)}static rgbaToHex(t){const e=t=>t.replace(/^\s+|\s+$/gm,""),a=t.substring(t.indexOf("(")).split(","),s=parseInt(e(a[0].substring(1)),10),r=parseInt(e(a[1]),10),n=parseInt(e(a[2]),10),i=parseFloat(e(a[3].substring(0,a[3].length-1))).toFixed(2),o=[s.toString(16),r.toString(16),n.toString(16),Math.round(255*i).toString(16).substring(0,2)];return o.forEach((function(t,e){1===t.length&&(o[e]="0"+t)})),"#".concat(o.join(""))}static getSignNum(t,e,a){return t>0?e:t<0?a:null}static antdTableSorter(t,e,a){return"number"===typeof t[a]&&"number"===typeof e[a]?t[a]-e[a]:"string"===typeof t[a]&&"string"===typeof e[a]?(t=t[a].toLowerCase())>(e=e[a].toLowerCase())?-1:e>t?1:0:void 0}static filterArray(t,e,a){let s=t;return t&&(s=t.filter((t=>t[e]===a))),s}static deleteArrayRow(t,e,a){let s=t;return t&&(s=t.filter((t=>t[e]!==a))),s}static wildCardSearch(t,e){return t=t.filter((t=>(t=>{for(let a in t)if(null!=t[a]&&-1!==t[a].toString().toUpperCase().indexOf(e.toString().toUpperCase()))return!0})(t)))}static getBreakPoint(t){let e=[];for(const a in t)if(t.hasOwnProperty(a)){t[a]&&e.push(a)}return e}}},66386:(t,e,a)=>{a.r(e),a.d(e,{default:()=>H});var s=a(72791),r=a(70606),n=a(57689);const i=JSON.parse('[{"id":1,"name":"Eileen Horton","avatar":"/img/avatars/thumb-1.jpg","unread":3,"time":"4:16PM","msg":[{"avatar":"/img/avatars/thumb-1.jpg","text":"Hey, Bro...","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Hey","from":"me","time":"","msgType":"text"},{"avatar":"","text":"","from":"","time":"7:57PM","msgType":"date"},{"avatar":"/img/avatars/thumb-1.jpg","text":"Did you check out our latest product?","from":"opposite","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-1.jpg","text":"Its awesome!","from":"opposite","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-1.jpg","text":"You would probably love it","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Wow, that was cool!","from":"me","time":"","msgType":"text"}]},{"id":2,"name":"Terrance Moreno","avatar":"/img/avatars/thumb-2.jpg","time":"18/04/2020","unread":2,"msg":[{"avatar":"","text":"","from":"","time":"7:57PM","msgType":"date"},{"avatar":"/img/avatars/thumb-2.jpg","text":"Hello Jason ","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Hello, how are you ","from":"me","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-2.jpg","text":"Remember our previous discussion?","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Yeah, sure!","from":"me","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-2.jpg","text":"This is the finalize version.","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Application-United.pdf","from":"opposite","time":"","msgType":"file"},{"avatar":"","text":"Okay! Thank you","from":"me","time":"","msgType":"text"}]},{"id":3,"name":"Ron Vargas","avatar":"/img/avatars/thumb-3.jpg","time":"17/04/2020","unread":5,"msg":[{"avatar":"","text":"","from":"","time":"7:57PM","msgType":"date"},{"avatar":"/img/avatars/thumb-3.jpg","text":"Your great aunt just passed away. LOL","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Why is that funny?","from":"me","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-3.jpg","text":"Its not funny at all","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Why do you think funny?","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"LOL mean laughing out loud","from":"me","time":"","msgType":"text"},{"avatar":"","text":"","from":"","time":"7:59PM","msgType":"date"},{"avatar":"/img/avatars/thumb-3.jpg","text":"OMG! I send that to everyone","from":"opposite","time":"","msgType":"text"}]},{"id":4,"name":"Luke Cook","avatar":"/img/avatars/thumb-4.jpg","time":"14/04/2020","unread":0,"msg":[{"avatar":"","text":"","from":"","time":"8:08PM","msgType":"date"},{"avatar":"/img/avatars/thumb-4.jpg","text":"Dude are you ready to party?","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Umm who are you","from":"me","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-4.jpg","text":"Oh sorry wrong chat","from":"opposite","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-4.jpg","text":"Bye","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"...but I wan to party","from":"me","time":"","msgType":"text"}]},{"id":5,"name":"Tara Fletcher","avatar":"/img/avatars/thumb-7.jpg","time":"21/03/2020","unread":0,"msg":[{"avatar":"/img/avatars/thumb-7.jpg","text":"Oh yeah? well I enjoy a nice steak. how about you?","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"We\u2019 d have steak and ice cream three times every day!","from":"me","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-7.jpg","text":"I eat all the steak and chicken too, even bacon","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"That was great!","from":"me","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-7.jpg","text":"yeah you said that already","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Dynamic structure can absorb shock.","from":"me","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-7.jpg","text":"yes it can. I know about that as a bodybuilder","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"The strongest man in the world is blowing up a hot water bottle.","from":"me","time":"","msgType":"text"}]}]');var o=a(56014),m=a(2649),c=a(91333),l=a(97484),d=a(80940),p=a(87309),g=a(29529),x=a(70522),u=a(82622),h=a(68692),v=a(81117),f=a(43500),j=a(13097),y=a(79335),b=a(68470),T=a(40872),N=a(80184);const C=()=>(0,N.jsxs)(o.Z,{children:[(0,N.jsxs)(o.Z.Item,{children:[(0,N.jsx)(g.Z,{}),(0,N.jsx)("span",{children:"User Info"})]},"0"),(0,N.jsxs)(o.Z.Item,{children:[(0,N.jsx)(x.Z,{}),(0,N.jsx)("span",{children:"Mute Chat"})]},"1"),(0,N.jsx)(o.Z.Divider,{}),(0,N.jsxs)(o.Z.Item,{children:[(0,N.jsx)(u.Z,{}),(0,N.jsx)("span",{children:"Delete Chat"})]},"3")]}),w=()=>{const t=(0,s.useRef)(),e=(0,s.useRef)(),a=(0,n.UO)(),[r,o]=(0,s.useState)({}),[g,x]=(0,s.useState)([]),{id:u}=a,w=t=>{switch(t.msgType){case"text":return(0,N.jsx)("span",{children:t.text});case"image":return(0,N.jsx)("img",{src:t.text,alt:t.text});case"file":return(0,N.jsxs)(b.Z,{alignItems:"center",className:"msg-file",children:[(0,N.jsx)(h.Z,{className:"font-size-md"}),(0,N.jsx)("span",{className:"ml-2 font-weight-semibold text-link pointer",children:(0,N.jsx)("u",{children:t.text})})]});default:return null}},Z=e=>{if(e.newMsg){const a={avatar:"",from:"me",msgType:"text",text:e.newMsg,time:""};t.current.setFieldsValue({newMsg:""}),x([...g,a])}},k=t=>{t.preventDefault()};(0,s.useEffect)((()=>{(t=>{const e=i.filter((e=>e.id===t));o(e[0]),x(e[0].msg)})(parseInt(parseInt(u))),e.current.scrollToBottom()}),[u]);return(0,N.jsxs)("div",{className:"chat-content",children:[(I=r.name,(0,N.jsxs)("div",{className:"chat-content-header",children:[(0,N.jsx)("h4",{className:"mb-0",children:I}),(0,N.jsx)("div",{children:(0,N.jsx)(T.Z,{menu:C})})]})),((t,a)=>(0,N.jsx)("div",{className:"chat-content-body",children:(0,N.jsx)(y.$B,{ref:e,autoHide:!0,children:t.map(((t,e)=>(0,N.jsxs)("div",{className:"msg ".concat("date"===t.msgType?"datetime":""," ").concat("opposite"===t.from?"msg-recipient":"me"===t.from?"msg-sent":""),children:[t.avatar?(0,N.jsx)("div",{className:"mr-2",children:(0,N.jsx)(m.C,{src:t.avatar})}):null,t.text?(0,N.jsx)("div",{className:"bubble ".concat(t.avatar?"":"ml-5"),children:(0,N.jsx)("div",{className:"bubble-wrapper",children:w(t)})}):null,"date"===t.msgType?(0,N.jsx)(c.Z,{children:t.time}):null]},"msg-".concat(a,"-").concat(e))))})}))(g,a.id),(0,N.jsx)("div",{className:"chat-content-footer",children:(0,N.jsx)(l.Z,{name:"msgInput",ref:t,onFinish:Z,className:"w-100",children:(0,N.jsx)(l.Z.Item,{name:"newMsg",className:"mb-0",children:(0,N.jsx)(d.Z,{autoComplete:"off",placeholder:"Type a message...",suffix:(0,N.jsxs)("div",{className:"d-flex align-items-center",children:[(0,N.jsx)("a",{href:"/#",className:"text-dark font-size-lg mr-3",onClick:k,children:(0,N.jsx)(v.Z,{})}),(0,N.jsx)("a",{href:"/#",className:"text-dark font-size-lg mr-3",onClick:k,children:(0,N.jsx)(f.Z,{})}),(0,N.jsx)(p.Z,{shape:"circle",type:"primary",size:"small",onClick:Z,htmlType:"submit",children:(0,N.jsx)(j.Z,{})})]})})})})})]});var I},Z=()=>(0,N.jsx)("div",{className:"chat-content-empty",children:(0,N.jsxs)("div",{className:"text-center",children:[(0,N.jsx)("img",{src:"/img/others/img-11.png",alt:"Start a Conversation"}),(0,N.jsx)("h1",{className:"font-weight-light",children:"Start a conversation"})]})}),k=()=>(0,N.jsxs)(n.Z5,{children:[(0,N.jsx)(n.AW,{path:":id",element:(0,N.jsx)(w,{})}),(0,N.jsx)(n.AW,{path:"/",element:(0,N.jsx)(Z,{})})]});var I=a(75594),S=a(44955);const M="#3e82f7",P=[M,"#04d182","#ff6b72","#ffc107","#a461d8","#fa8c16","#17bcff"];var O=a(11730);const z=()=>{const[t,e]=(0,s.useState)(i),a=(0,n.TH)();let r=(0,n.s0)();const o=parseInt(a.pathname.match(/\/([^/]+)\/?$/)[1]);return(0,N.jsxs)("div",{className:"chat-menu",children:[(0,N.jsx)("div",{className:"chat-menu-toolbar",children:(0,N.jsx)(d.Z,{placeholder:"Search",onChange:t=>{const a=t.target.value,s=i.filter((t=>""===a?t:t.name.toLowerCase().includes(a)));e(s)},prefix:(0,N.jsx)(O.Z,{className:"font-size-lg mr-2"})})}),(0,N.jsx)("div",{className:"chat-menu-list",children:t.map(((a,s)=>(0,N.jsxs)("div",{onClick:()=>(a=>{const s=t.map((t=>(t.id===a&&(t.unread=0),t)));e(s),r("".concat(a))})(a.id),className:"chat-menu-list-item ".concat(s===t.length-1?"last":""," ").concat(a.id===o?"selected":""),children:[(0,N.jsx)(S.Z,{src:a.avatar,name:a.name,subTitle:a.msg[a.msg.length-1].text}),(0,N.jsxs)("div",{className:"text-right",children:[(0,N.jsx)("div",{className:"chat-menu-list-item-time",children:a.time}),0===a.unread?(0,N.jsx)("span",{}):(0,N.jsx)(I.Z,{count:a.unread,style:{backgroundColor:M}})]})]},"chat-item-".concat(a.id))))})]})},H=t=>(0,N.jsx)("div",{className:"chat",children:(0,N.jsx)(r.Z,{sideContent:(0,N.jsx)(z,{...t}),mainContent:(0,N.jsx)(k,{...t}),sideContentWidth:450,sideContentGutter:!1,border:!0})})}}]);
//# sourceMappingURL=386.35a413a0.chunk.js.map