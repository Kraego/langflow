"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[7368],{7533:(e,t,n)=>{n.d(t,{A:()=>i});var s=n(6540),o=n(1122),a=n(6025),r=n(4848);const i=e=>{let{alt:t,sources:n,style:i}=e;const[c,l]=(0,s.useState)(!1),d=e=>{"Escape"===e.key&&l(!1)};(0,s.useEffect)((()=>(c?document.addEventListener("keydown",d):document.removeEventListener("keydown",d),()=>{document.removeEventListener("keydown",d)})),[c]);return(0,r.jsx)("div",{className:"zoomable-image "+(c?"fullscreen":""),onClick:()=>{l(!c)},style:{width:"50%",margin:"0 auto",display:"flex",justifyContent:"center",...i},children:(0,r.jsx)(o.A,{className:"zoomable-image-inner",alt:t,sources:{light:(0,a.Ay)(n.light),dark:(0,a.Ay)(n.dark)}})})}},1441:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>u});n(6540);var s=n(4848),o=n(8453),a=(n(1122),n(6025),n(7533),n(3554)),r=n.n(a),i=n(7293);const c={},l="Chat Memory",d={id:"examples/chat-memory",title:"Chat Memory",description:"This page may contain outdated information. It will be updated as soon as possible.",source:"@site/docs/examples/chat-memory.mdx",sourceDirName:"examples",slug:"/examples/chat-memory",permalink:"/examples/chat-memory",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},m={},u=[];function h(e){const t=Object.assign({h1:"h1",p:"p",strong:"strong"},(0,o.RP)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"chat-memory",children:"Chat Memory"}),"\n",(0,s.jsx)(i.A,{type:"warning",title:"warning",children:(0,s.jsx)(t.p,{children:"This page may contain outdated information. It will be updated as soon as possible."})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Chat Memory"})," component restores previous messages given a Session ID, which can be any string."]}),"\n",(0,s.jsxs)(t.p,{children:["This component is available under the ",(0,s.jsx)(t.strong,{children:"Helpers"})," tab of the Langflow sidebar."]}),"\n",(0,s.jsx)("div",{style:{marginBottom:"20px",display:"flex",justifyContent:"center"},children:(0,s.jsx)(r(),{playing:!0,controls:!0,url:"/videos/chat_memory.mp4"})})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,o.RP)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}},8453:(e,t,n)=>{n.d(t,{RP:()=>a,xA:()=>i});var s=n(6540);const o=s.createContext({});function a(e){const t=s.useContext(o);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||r:a(e),s.createElement(o.Provider,{value:i},t)}}}]);