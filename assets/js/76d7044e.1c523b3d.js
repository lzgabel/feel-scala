"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[5173],{5478:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7294),l=n(9669),s=n.n(l),o=n(7462),r=n(5671),i=n(3746);const u=e=>{let{children:t,onChange:n,language:l}=e;const s=(0,a.useRef)(null),[u,c]=(0,a.useState)(t),d=(0,a.useCallback)((e=>{const t=e.slice(0,-1);c(t),n(t)}),[]);return(0,r.Y)(s,d,{indentation:2}),a.createElement(i.ZP,(0,o.Z)({},i.lG,{code:u,language:l}),(e=>{let{className:t,style:n,tokens:l,getTokenProps:o}=e;return a.createElement("pre",{className:t,style:n,ref:s},l.map(((e,t)=>a.createElement(a.Fragment,{key:t},e.filter((e=>!e.empty)).map(((e,t)=>a.createElement("span",o({token:e,key:t})))),"\n"))))}))};var c=n(9537);const d=e=>{let{defaultExpression:t,feelContext:n,metadata:l,onResultCallback:o,onErrorCallback:r}=e;n&&(n=JSON.stringify(JSON.parse(n),null,2));const[i,d]=a.useState(t),[p,m]=a.useState(n),[f,g]=a.useState("<click 'Evaluate' to see the result of the expression>"),[h,v]=a.useState(null),k=/^.+(?<line>\d+):(?<position>\d+).+$/gm,E=/^.+at position (?<position>\d+)$/gm;function x(e){g(null),v(e),r&&r(e)}return a.createElement("div",null,a.createElement("h2",null,"Expression"),a.createElement(u,{onChange:d,language:"js"},i),n&&a.createElement("div",null,a.createElement("h2",null,"Context"),a.createElement("i",null,"A JSON document that is used to resolve ",a.createElement("strong",null,"variables")," ","in the expression."),a.createElement(u,{onChange:m,language:"json"},p)),a.createElement("button",{onClick:function(){try{g("<evaluating the expression...>");!function(e){s().post("https://feel-service.camunda.com/process/start",{expression:i,context:e,metadata:{...l}},{headers:{accept:"*/*","content-type":"application/json"}}).then((e=>{var t;if(null!=e&&null!=(t=e.data)&&t.error){var n,a;const t=e.data.error,l=k.exec(t);x({message:t,line:null==l||null==(n=l.groups)?void 0:n.line,position:null==l||null==(a=l.groups)?void 0:a.position})}else!function(e){v(null),g(e),o&&o(e)}(JSON.stringify(e.data.result))}))}(n?JSON.parse(p):{})}catch(t){var e;const n=E.exec(t.message);x({message:"failed to parse context: "+t.message,position:null==n||null==(e=n.groups)?void 0:e.position})}},className:"button button--primary button--lg"},"Evaluate"),a.createElement("br",null),a.createElement("br",null),a.createElement("h2",null,"Result"),a.createElement(c.Z,{title:(()=>{const e=null!=h&&h.line?" on line "+h.line:"",t=null!=h&&h.position?" at position "+h.position:"";return h&&"Error"+e+t})(),language:"json"},f||(null==h?void 0:h.message)))}},7805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>f});var a,l=n(7462),s=n(1880),o=(n(7294),n(3905)),r=n(5478),i=n(6518),u=n.n(i);const c={id:"tutorial-1-1",title:"1.1 Numeric expressions"},d=void 0,p={unversionedId:"tutorial/tutorial-1-1",id:"version-1.15/tutorial/tutorial-1-1",title:"1.1 Numeric expressions",description:"Let's start our quest. FEEL allows you to use basic",source:"@site/versioned_docs/version-1.15/tutorial/tutorial-1-1.mdx",sourceDirName:"tutorial",slug:"/tutorial/tutorial-1-1",permalink:"/feel-scala/docs/1.15/tutorial/tutorial-1-1",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/versioned_docs/version-1.15/tutorial/tutorial-1-1.mdx",tags:[],version:"1.15",frontMatter:{id:"tutorial-1-1",title:"1.1 Numeric expressions"},sidebar:"version-1.15/Tutorial",previous:{title:"The quest begins",permalink:"/feel-scala/docs/1.15/tutorial/"},next:{title:"1.2 More numeric expressions",permalink:"/feel-scala/docs/1.15/tutorial/tutorial-1-2"}},m={},f=[],g={toc:f};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,l.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Let's start our quest. \ud83d\udea9 FEEL allows you to use basic\n",(0,o.kt)("a",{parentName:"p",href:"/feel-scala/docs/next/reference/language-guide/feel-numeric-expressions"},"numeric calculations")," like addition,\nsubtraction and multiplication to name a few. Our friend arrived in Spain by boat, specifically\nCadiz. The goal is to reach Pamplona (which is 1,030.8 kms away)."),(0,o.kt)("p",null,"As part of the quest, Zee received magical items \u2728 and decided to use The Boots of Hermes\n\ud83d\udc5e, which give its wearer a speed of 48.2 kms/hour."),(0,o.kt)("p",null,"Using numeric operators, how many hours would it take to get there? Consider resting for 30 minutes\nevery 5 hours. Let's also round up the number for total resting time by using a\n",(0,o.kt)("a",{parentName:"p",href:"/feel-scala/docs/next/reference/builtin-functions/feel-built-in-functions-numeric"},"numeric function"),"."),(0,o.kt)(r.Z,{defaultExpression:u()(a||(a=(0,s.Z)(["\n      // change formula considering resting time plus total time\n      round up(distance / speed, 0)"]))),feelContext:'{"distance": 1030.8, "speed": 48.2, "restInHrs": 0.5, "restInterval": 5}',metadata:{page:"tutorial-1-1"},mdxType:"LiveFeel"}),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Solution"),(0,o.kt)("div",null,(0,o.kt)("div",null,"It would take Zee 24 hours to complete the trip."),(0,o.kt)("br",null),(0,o.kt)("pre",{title:"Expression"},"round up(restInHrs * (distance / speed) / restInterval + distance / speed, 0)"))))}h.isMDXComponent=!0}}]);