"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[8991],{2614:(e,o,t)=>{t.r(o),t.d(o,{CH:()=>h,assets:()=>d,chCodeConfig:()=>u,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>a,toc:()=>p});t(6540);var n=t(4848),r=t(8453),c=t(4754),i=t(7293);const s={},l="How to Contribute?",a={id:"contributing/how-contribute",title:"How to Contribute?",description:"This page may contain outdated information. It will be updated as soon as possible.",source:"@site/docs/contributing/how-contribute.mdx",sourceDirName:"contributing",slug:"/contributing/how-contribute",permalink:"/contributing/how-contribute",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Telemetry",permalink:"/contributing/telemetry"},next:{title:"GitHub Issues",permalink:"/contributing/github-issues"}},d={},h={annotations:c.hk,Code:c.Cy},u={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},p=[{value:"Local development",id:"local-development",level:2},{value:"Run locally",id:"run-locally",level:2},{value:"Docker compose",id:"docker-compose",level:2},{value:"Documentation",id:"documentation",level:2}];function g(e){const o=Object.assign({h1:"h1",p:"p",a:"a",hr:"hr",h2:"h2",code:"code",ul:"ul",li:"li"},(0,r.RP)(),e.components);return h||f("CH",!1),h.Code||f("CH.Code",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n","\n","\n",(0,n.jsx)(o.h1,{id:"how-to-contribute",children:"How to Contribute?"}),"\n",(0,n.jsx)(i.A,{type:"warning",title:"warning",children:(0,n.jsx)(o.p,{children:"This page may contain outdated information. It will be updated as soon as possible."})}),"\n",(0,n.jsxs)(o.p,{children:["\ud83d\udc4b Hello there! We welcome contributions from developers of all levels to our open-source project on ",(0,n.jsx)(o.a,{href:"https://github.com/langflow-ai/langflow",children:"GitHub"}),". If you'd like to contribute, please check our contributing guidelines and help make Langflow more accessible."]}),"\n",(0,n.jsx)(o.p,{children:"As an open-source project in a rapidly developing field, we are extremely open\nto contributions, whether in the form of a new feature, improved infra, or better documentation."}),"\n",(0,n.jsxs)(o.p,{children:["To contribute to this project, please follow a ",(0,n.jsx)(o.a,{href:"https://docs.github.com/en/get-started/quickstart/contributing-to-projects",children:'"fork and pull request"'})," workflow."]}),"\n",(0,n.jsx)(o.p,{children:"Please do not try to push directly to this repo unless you are a maintainer."}),"\n",(0,n.jsx)(o.hr,{}),"\n",(0,n.jsx)(o.h2,{id:"local-development",children:"Local development"}),"\n",(0,n.jsx)(o.p,{children:"You can develop Langflow using docker compose, or locally."}),"\n",(0,n.jsxs)(o.p,{children:["We provide a ",(0,n.jsx)(o.code,{children:".vscode/launch.json"})," file for debugging the backend in VSCode, which is a lot faster than using docker compose."]}),"\n",(0,n.jsx)(o.p,{children:"Setting up hooks:"}),"\n",(0,n.jsx)(h.Code,{codeConfig:u,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"make ",props:{style:{color:"#FFA657"}}},{content:"init",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,n.jsxs)(o.p,{children:["This will install the pre-commit hooks, which will run ",(0,n.jsx)(o.code,{children:"make format"})," on every commit."]}),"\n",(0,n.jsxs)(o.p,{children:["It is advised to run ",(0,n.jsx)(o.code,{children:"make lint"})," before pushing to the repository."]}),"\n",(0,n.jsx)(o.hr,{}),"\n",(0,n.jsx)(o.h2,{id:"run-locally",children:"Run locally"}),"\n",(0,n.jsx)(o.p,{children:"Langflow can run locally by cloning the repository and installing the dependencies. We recommend using a virtual environment to isolate the dependencies from your system."}),"\n",(0,n.jsx)(o.p,{children:"Before you start, make sure you have the following installed:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Poetry (>=1.4)"}),"\n",(0,n.jsx)(o.li,{children:"Node.js"}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Then, in the root folder, install the dependencies and start the development server for the backend:"}),"\n",(0,n.jsx)(h.Code,{codeConfig:u,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"make ",props:{style:{color:"#FFA657"}}},{content:"backend",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,n.jsx)(o.p,{children:"And the frontend:"}),"\n",(0,n.jsx)(h.Code,{codeConfig:u,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"make ",props:{style:{color:"#FFA657"}}},{content:"frontend",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,n.jsx)(o.hr,{}),"\n",(0,n.jsx)(o.h2,{id:"docker-compose",children:"Docker compose"}),"\n",(0,n.jsxs)(o.p,{children:["The following snippet will run the backend and frontend in separate containers. The frontend will be available at ",(0,n.jsx)(o.code,{children:"localhost:3000"})," and the backend at ",(0,n.jsx)(o.code,{children:"localhost:7860"}),"."]}),"\n",(0,n.jsx)(h.Code,{codeConfig:u,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"docker ",props:{style:{color:"#FFA657"}}},{content:"compose up ",props:{style:{color:"#A5D6FF"}}},{content:"--build",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"# or",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"make ",props:{style:{color:"#FFA657"}}},{content:"dev build=",props:{style:{color:"#A5D6FF"}}},{content:"1",props:{style:{color:"#79C0FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,n.jsx)(o.hr,{}),"\n",(0,n.jsx)(o.h2,{id:"documentation",children:"Documentation"}),"\n",(0,n.jsxs)(o.p,{children:["The documentation is built using ",(0,n.jsx)(o.a,{href:"https://docusaurus.io/",children:"Docusaurus"}),". To run the documentation locally, run the following commands:"]}),"\n",(0,n.jsx)(h.Code,{codeConfig:u,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"cd ",props:{style:{color:"#79C0FF"}}},{content:"docs",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"npm ",props:{style:{color:"#FFA657"}}},{content:"install",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"npm ",props:{style:{color:"#FFA657"}}},{content:"run start",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,n.jsxs)(o.p,{children:["The documentation will be available at ",(0,n.jsx)(o.code,{children:"localhost:3000"})," and all the files are located in the ",(0,n.jsx)(o.code,{children:"docs/docs"})," folder.\nOnce you are done with your changes, you can create a Pull Request to the ",(0,n.jsx)(o.code,{children:"main"})," branch."]})]})}const b=function(e={}){const{wrapper:o}=Object.assign({},(0,r.RP)(),e.components);return o?(0,n.jsx)(o,Object.assign({},e,{children:(0,n.jsx)(g,e)})):g(e)};function f(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);