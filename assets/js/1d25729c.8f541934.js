"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[9740],{4863:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7462),l=n(7294),o=n(5671),i=n(3746);const r=e=>{let{children:t,onChange:n,language:r}=e;const s=(0,l.useRef)(null),[u,c]=(0,l.useState)(t),d=(0,l.useCallback)((e=>{const t=e.slice(0,-1);c(t),n(t)}),[]);return(0,o.Y)(s,d,{indentation:2}),l.createElement(i.ZP,(0,a.Z)({},i.lG,{code:u,language:r}),(e=>{let{className:t,style:n,tokens:a,getTokenProps:o}=e;return l.createElement("pre",{className:t,style:n,ref:s},a.map(((e,t)=>l.createElement(l.Fragment,{key:t},e.filter((e=>!e.empty)).map(((e,t)=>l.createElement("span",o({token:e,key:t})))),"\n"))))}))}},4294:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),l=n(9669),o=n.n(l),i=n(4863),r=n(9537);const s=e=>{let{defaultExpression:t,feelContext:n,metadata:l,onResultCallback:s,onErrorCallback:u}=e;n&&(n=JSON.stringify(JSON.parse(n),null,2));const[c,d]=a.useState(t),[p,m]=a.useState(n),[g,f]=a.useState("<click 'Evaluate' to see the result of the expression>"),[h,k]=a.useState(null),v=/^.+(?<line>\d+):(?<position>\d+).+$/gm,y=/^.+at position (?<position>\d+)$/gm;function E(e){f(null),k(e),u&&u(e)}return a.createElement("div",null,a.createElement("h2",null,"Expression"),a.createElement(i.Z,{onChange:d,language:"js"},c),n&&a.createElement("div",null,a.createElement("h2",null,"Context"),a.createElement("i",null,"A JSON document that is used to resolve ",a.createElement("strong",null,"variables")," ","in the expression."),a.createElement(i.Z,{onChange:m,language:"json"},p)),a.createElement("button",{onClick:function(){try{f("<evaluating the expression...>");!function(e){o().post("https://feel.upgradingdave.com/api/v1/feel/evaluate",{expression:c,context:e,metadata:{...l}},{headers:{accept:"*/*","content-type":"application/json"}}).then((e=>{var t;if(null!=e&&null!=(t=e.data)&&t.error){var n,a;const t=e.data.error,l=v.exec(t);E({message:t,line:null==l||null==(n=l.groups)?void 0:n.line,position:null==l||null==(a=l.groups)?void 0:a.position})}else!function(e){k(null),f(e),s&&s(e)}(JSON.stringify(e.data.result))}))}(n?JSON.parse(p):{})}catch(t){var e;const n=y.exec(t.message);E({message:"failed to parse context: "+t.message,position:null==n||null==(e=n.groups)?void 0:e.position})}},className:"button button--primary button--lg"},"Evaluate"),a.createElement("br",null),a.createElement("br",null),a.createElement("h2",null,"Result"),a.createElement(r.Z,{title:(()=>{const e=null!=h&&h.line?" on line "+h.line:"",t=null!=h&&h.position?" at position "+h.position:"";return h&&"Error"+e+t})(),language:"json"},g||(null==h?void 0:h.message)))}},9440:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>g});var a,l=n(7462),o=n(1880),i=(n(7294),n(3905)),r=n(4294),s=n(6518),u=n.n(s);const c={id:"tutorial-3-2",title:"3.2 Temporal functions"},d=void 0,p={unversionedId:"tutorial/tutorial-3-2",id:"version-1.15/tutorial/tutorial-3-2",title:"3.2 Temporal functions",description:"Since Zee has 11 days to reach the CamundaCon, Zee decides to stay a bit longer in Cologne. For",source:"@site/versioned_docs/version-1.15/tutorial/tutorial-3-2.mdx",sourceDirName:"tutorial",slug:"/tutorial/tutorial-3-2",permalink:"/feel-scala/docs/1.15/tutorial/tutorial-3-2",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/versioned_docs/version-1.15/tutorial/tutorial-3-2.mdx",tags:[],version:"1.15",frontMatter:{id:"tutorial-3-2",title:"3.2 Temporal functions"},sidebar:"version-1.15/Tutorial",previous:{title:"3.1 Temporal expressions",permalink:"/feel-scala/docs/1.15/tutorial/tutorial-3-1"},next:{title:"4.1 Final Stop: Lists expressions",permalink:"/feel-scala/docs/1.15/tutorial/tutorial-4-1"}},m={},g=[],f={toc:g};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,l.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Since Zee has 11 days to reach the CamundaCon, Zee decides to stay a bit longer in Cologne. \ud83c\udde9\ud83c\uddea For\nthe last trip, Zee wants to take a train \ud83d\ude85 to Berlin."),(0,i.kt)("p",null,"On the train schedule, there is a special train that leaves Cologne on each Monday morning. Zee\nlooks at the calendar but is unsure about the current weekday."),(0,i.kt)("p",null,"Can you help him? Use\n",(0,i.kt)("a",{parentName:"p",href:"/feel-scala/docs/next/reference/builtin-functions/feel-built-in-functions-temporal"},"temporal functions")," to resolve the\ncurrent weekday."),(0,i.kt)(r.Z,{defaultExpression:u()(a||(a=(0,o.Z)(["\n    // use a function to get the weekday of the current date\n    date(targetDate)"]))),feelContext:'{"targetDate": "2022-10-05", "remainingTime": "P11D"}',metadata:{page:"tutorial-3-2"},mdxType:"LiveFeel"}),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Solution"),(0,i.kt)("div",null,(0,i.kt)("div",null,"It is Saturday. Zee can stay the weekend in Cologne."),(0,i.kt)("br",null),(0,i.kt)("pre",{title:"Expression"},"day of week(date(targetDate) - duration(remainingTime))"))))}h.isMDXComponent=!0}}]);