"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[2807],{5478:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7294),o=n(9669),l=n.n(o),s=n(7462),r=n(5671),i=n(3746);const u=e=>{let{children:t,onChange:n,language:o}=e;const l=(0,a.useRef)(null),[u,c]=(0,a.useState)(t),p=(0,a.useCallback)((e=>{const t=e.slice(0,-1);c(t),n(t)}),[]);return(0,r.Y)(l,p,{indentation:2}),a.createElement(i.ZP,(0,s.Z)({},i.lG,{code:u,language:o}),(e=>{let{className:t,style:n,tokens:o,getTokenProps:s}=e;return a.createElement("pre",{className:t,style:n,ref:l},o.map(((e,t)=>a.createElement(a.Fragment,{key:t},e.filter((e=>!e.empty)).map(((e,t)=>a.createElement("span",s({token:e,key:t})))),"\n"))))}))};var c=n(9537);const p=e=>{let{defaultExpression:t,feelContext:n,metadata:o,onResultCallback:s,onErrorCallback:r}=e;n&&(n=JSON.stringify(JSON.parse(n),null,2));const[i,p]=a.useState(t),[d,m]=a.useState(n),[g,f]=a.useState("<click 'Evaluate' to see the result of the expression>"),[h,k]=a.useState(null),v=/^.+(?<line>\d+):(?<position>\d+).+$/gm,E=/^.+at position (?<position>\d+)$/gm;function y(e){f(null),k(e),r&&r(e)}return a.createElement("div",null,a.createElement("h2",null,"Expression"),a.createElement(u,{onChange:p,language:"js"},i),n&&a.createElement("div",null,a.createElement("h2",null,"Context"),a.createElement("i",null,"A JSON document that is used to resolve ",a.createElement("strong",null,"variables")," ","in the expression."),a.createElement(u,{onChange:m,language:"json"},d)),a.createElement("button",{onClick:function(){try{f("<evaluating the expression...>");!function(e){l().post("https://feel-service.camunda.com/process/start",{expression:i,context:e,metadata:{...o}},{headers:{accept:"*/*","content-type":"application/json"}}).then((e=>{var t;if(null!=e&&null!=(t=e.data)&&t.error){var n,a;const t=e.data.error,o=v.exec(t);y({message:t,line:null==o||null==(n=o.groups)?void 0:n.line,position:null==o||null==(a=o.groups)?void 0:a.position})}else!function(e){k(null),f(e),s&&s(e)}(JSON.stringify(e.data.result))}))}(n?JSON.parse(d):{})}catch(t){var e;const n=E.exec(t.message);y({message:"failed to parse context: "+t.message,position:null==n||null==(e=n.groups)?void 0:e.position})}},className:"button button--primary button--lg"},"Evaluate"),a.createElement("br",null),a.createElement("br",null),a.createElement("h2",null,"Result"),a.createElement(c.Z,{title:(()=>{const e=null!=h&&h.line?" on line "+h.line:"",t=null!=h&&h.position?" at position "+h.position:"";return h&&"Error"+e+t})(),language:"json"},g||(null==h?void 0:h.message)))}},9190:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>g});var a,o=n(7462),l=n(1880),s=(n(7294),n(3905)),r=n(5478),i=n(6518),u=n.n(i);const c={id:"tutorial",title:"The quest begins"},p=void 0,d={unversionedId:"tutorial/tutorial",id:"version-1.15/tutorial/tutorial",title:"The quest begins",description:"The tutorial is created as part of our Camunda Summer Hack Days project 2022.",source:"@site/versioned_docs/version-1.15/tutorial/tutorial.mdx",sourceDirName:"tutorial",slug:"/tutorial/",permalink:"/feel-scala/docs/1.15/tutorial/",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/versioned_docs/version-1.15/tutorial/tutorial.mdx",tags:[],version:"1.15",frontMatter:{id:"tutorial",title:"The quest begins"},sidebar:"version-1.15/Tutorial",next:{title:"1.1 Numeric expressions",permalink:"/feel-scala/docs/1.15/tutorial/tutorial-1-1"}},m={},g=[],f={toc:g};function h(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,o.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{title:"Work in progress",type:"danger"},(0,s.kt)("p",{parentName:"admonition"},"The tutorial is created as part of our Camunda Summer Hack Days project 2022."),(0,s.kt)("p",{parentName:"admonition"},"It may be incomplete, wrong, or broken. But stay tuned for updates!")),(0,s.kt)("p",null,"Welcome to our tutorial. \ud83d\udc4b"),(0,s.kt)("p",null,"We'll do our best to guide you through the different capabilities\nof ",(0,s.kt)("a",{parentName:"p",href:"/feel-scala/docs/next/reference/what-is-feel"},"FEEL")," and hopefully make the\nprocess fun. \ud83c\udf89"),(0,s.kt)("p",null,'We are enlisting you to help us guide our friend "Zee" to complete a quest from Spain \ud83c\uddea\ud83c\uddf8 to Berlin\n\ud83c\udde9\ud83c\uddea in time for CamundaCon (2022). With the use of FEEL we\'ll be able to help in the journey.'),(0,s.kt)("p",null,'Before we start, let\'s say "Hi" to Zee:'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Zee",src:n(5710).Z,width:"262",height:"393"})),(0,s.kt)("p",null,"Use the interactive editor below to evaluate the\n",(0,s.kt)("a",{parentName:"p",href:"/feel-scala/docs/next/reference/language-guide/feel-expressions-introduction"},"FEEL expression")," and greet Zee."),(0,s.kt)(r.Z,{defaultExpression:u()(a||(a=(0,l.Z)(['\n    "Hello Zee"\n    ']))),metadata:{page:"tutorial-the-quest-begins"},mdxType:"LiveFeel"}),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"FEEL is an expression language. Compared to script languages or other complex programming\nlanguages, an expression language evaluates only a single expression.")),(0,s.kt)("p",null,"Zee is happy to have you on board. So, let the journey begin. \ud83d\ude80"))}h.isMDXComponent=!0},5710:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/zee-44d8dee753af98307526e73c84032a2d.png"}}]);