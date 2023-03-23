"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[5394],{5478:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7294),o=n(9669),l=n.n(o),r=n(7462),s=n(5671),i=n(3746);const u=e=>{let{children:t,onChange:n,language:o}=e;const l=(0,a.useRef)(null),[u,c]=(0,a.useState)(t),d=(0,a.useCallback)((e=>{const t=e.slice(0,-1);c(t),n(t)}),[]);return(0,s.Y)(l,d,{indentation:2}),a.createElement(i.ZP,(0,r.Z)({},i.lG,{code:u,language:o}),(e=>{let{className:t,style:n,tokens:o,getTokenProps:r}=e;return a.createElement("pre",{className:t,style:n,ref:l},o.map(((e,t)=>a.createElement(a.Fragment,{key:t},e.filter((e=>!e.empty)).map(((e,t)=>a.createElement("span",r({token:e,key:t})))),"\n"))))}))};var c=n(9537);const d=e=>{let{defaultExpression:t,feelContext:n,metadata:o,onResultCallback:r,onErrorCallback:s}=e;n&&(n=JSON.stringify(JSON.parse(n),null,2));const[i,d]=a.useState(t),[p,m]=a.useState(n),[g,f]=a.useState("<click 'Evaluate' to see the result of the expression>"),[y,E]=a.useState(null),v=/^.+(?<line>\d+):(?<position>\d+).+$/gm,k=/^.+at position (?<position>\d+)$/gm;function x(e){f(null),E(e),s&&s(e)}return a.createElement("div",null,a.createElement("h2",null,"Expression"),a.createElement(u,{onChange:d,language:"js"},i),n&&a.createElement("div",null,a.createElement("h2",null,"Context"),a.createElement("i",null,"A JSON document that is used to resolve ",a.createElement("strong",null,"variables")," ","in the expression."),a.createElement(u,{onChange:m,language:"json"},p)),a.createElement("button",{onClick:function(){try{!function(e){l().post("https://feel-service.camunda.com/process/start",{expression:i,context:e,metadata:{...o}},{headers:{accept:"*/*","content-type":"application/json"}}).then((e=>{var t;if(null!=e&&null!=(t=e.data)&&t.error){var n,a;const t=e.data.error,o=v.exec(t);x({message:t,line:null==o||null==(n=o.groups)?void 0:n.line,position:null==o||null==(a=o.groups)?void 0:a.position})}else!function(e){E(null),f(e),r&&r(e)}(JSON.stringify(e.data.result))}))}(n?JSON.parse(p):{})}catch(t){var e;const n=k.exec(t.message);x({message:"failed to parse context: "+t.message,position:null==n||null==(e=n.groups)?void 0:e.position})}},className:"button button--primary button--lg"},"Evaluate"),a.createElement("br",null),a.createElement("br",null),a.createElement("h2",null,"Result"),a.createElement(c.Z,{title:(()=>{const e=null!=y&&y.line?" on line "+y.line:"",t=null!=y&&y.position?" at position "+y.position:"";return y&&"Error"+e+t})(),language:"json"},g||(null==y?void 0:y.message)))}},6805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>y,frontMatter:()=>c,metadata:()=>p,toc:()=>g});var a,o=n(7462),l=n(1880),r=(n(7294),n(3905)),s=n(5478),i=n(6518),u=n.n(i);const c={id:"playground",title:"Playground for FEEL expressions"},d=void 0,p={unversionedId:"playground/playground",id:"version-1.16/playground/playground",title:"Playground for FEEL expressions",description:"The playground is created as part of our Camunda Summer Hack Days project 2022.",source:"@site/versioned_docs/version-1.16/playground/playground.mdx",sourceDirName:"playground",slug:"/playground/",permalink:"/feel-scala/docs/playground/",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/versioned_docs/version-1.16/playground/playground.mdx",tags:[],version:"1.16",frontMatter:{id:"playground",title:"Playground for FEEL expressions"},sidebar:"Playground"},m={},g=[],f={toc:g};function y(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Work in progress",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"The playground is created as part of our Camunda Summer Hack Days project 2022."),(0,r.kt)("p",{parentName:"admonition"},"It may be broken. But stay tuned for updates!")),(0,r.kt)("p",null,"Use the interactive editor below to evaluate\n",(0,r.kt)("a",{parentName:"p",href:"/feel-scala/docs/next/reference/language-guide/feel-expressions-introduction"},"FEEL expressions"),"."),(0,r.kt)(s.Z,{defaultExpression:u()(a||(a=(0,l.Z)(["\n      3 + x"]))),feelContext:'{"x": 5}',metadata:{page:"tutorial-playground"},mdxType:"LiveFeel"}))}y.isMDXComponent=!0}}]);