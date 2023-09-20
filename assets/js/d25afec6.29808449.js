"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[6273],{4863:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7462),l=n(7294),o=n(5671),r=n(3746);const s=e=>{let{children:t,onChange:n,language:s}=e;const i=(0,l.useRef)(null),[u,c]=(0,l.useState)(t),p=(0,l.useCallback)((e=>{const t=e.slice(0,-1);c(t),n(t)}),[]);return(0,o.Y)(i,p,{indentation:2}),l.createElement(r.ZP,(0,a.Z)({},r.lG,{code:u,language:s}),(e=>{let{className:t,style:n,tokens:a,getTokenProps:o}=e;return l.createElement("pre",{className:t,style:n,ref:i},a.map(((e,t)=>l.createElement(l.Fragment,{key:t},e.filter((e=>!e.empty)).map(((e,t)=>l.createElement("span",o({token:e,key:t})))),"\n"))))}))}},4294:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),l=n(9669),o=n.n(l),r=n(4863),s=n(9537);const i=e=>{let{defaultExpression:t,feelContext:n,metadata:l,onResultCallback:i,onErrorCallback:u}=e;n&&(n=JSON.stringify(JSON.parse(n),null,2));const[c,p]=a.useState(t),[d,h]=a.useState(n),[m,g]=a.useState("<click 'Evaluate' to see the result of the expression>"),[f,k]=a.useState(null),v=/^.+(?<line>\d+):(?<position>\d+).+$/gm,C=/^.+at position (?<position>\d+)$/gm;function E(e){g(null),k(e),u&&u(e)}return a.createElement("div",null,a.createElement("h2",null,"Expression"),a.createElement(r.Z,{onChange:p,language:"js"},c),n&&a.createElement("div",null,a.createElement("h2",null,"Context"),a.createElement("i",null,"A JSON document that is used to resolve ",a.createElement("strong",null,"variables")," ","in the expression."),a.createElement(r.Z,{onChange:h,language:"json"},d)),a.createElement("button",{onClick:function(){try{g("<evaluating the expression...>");!function(e){o().post("https://feel.upgradingdave.com/api/v1/feel/evaluate",{expression:c,context:e,metadata:{...l}},{headers:{accept:"*/*","content-type":"application/json"}}).then((e=>{var t;if(null!=e&&null!=(t=e.data)&&t.error){var n,a;const t=e.data.error,l=v.exec(t);E({message:t,line:null==l||null==(n=l.groups)?void 0:n.line,position:null==l||null==(a=l.groups)?void 0:a.position})}else!function(e){k(null),g(e),i&&i(e)}(JSON.stringify(e.data.result))}))}(n?JSON.parse(d):{})}catch(t){var e;const n=C.exec(t.message);E({message:"failed to parse context: "+t.message,position:null==n||null==(e=n.groups)?void 0:e.position})}},className:"button button--primary button--lg"},"Evaluate"),a.createElement("br",null),a.createElement("br",null),a.createElement("h2",null,"Result"),a.createElement(s.Z,{title:(()=>{const e=null!=f&&f.line?" on line "+f.line:"",t=null!=f&&f.position?" at position "+f.position:"";return f&&"Error"+e+t})(),language:"json"},m||(null==f?void 0:f.message)))}},3154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var a,l=n(7462),o=n(1880),r=(n(7294),n(3905)),s=n(4294),i=n(6518),u=n.n(i);const c={id:"chapter-6",title:"Chapter 6"},p=void 0,d={unversionedId:"learn/challenge/chapter-6",id:"version-1.16/learn/challenge/chapter-6",title:"Chapter 6",description:"Zee took a short rest and continued walking to CamundaCon. On the road, he passed mountains,",source:"@site/versioned_docs/version-1.16/learn/challenge/chapter-6.mdx",sourceDirName:"learn/challenge",slug:"/learn/challenge/chapter-6",permalink:"/feel-scala/docs/1.16/learn/challenge/chapter-6",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/versioned_docs/version-1.16/learn/challenge/chapter-6.mdx",tags:[],version:"1.16",frontMatter:{id:"chapter-6",title:"Chapter 6"},sidebar:"Learn",previous:{title:"Chapter 5",permalink:"/feel-scala/docs/1.16/learn/challenge/chapter-5"}},h={},m=[],g={toc:m};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Zee took a short rest and continued walking to CamundaCon. \ud83c\udde9\ud83c\uddea On the road, he passed mountains,\nfields, and woods. \u26f0\ufe0f \ud83c\udf33 After a few days, he realized that he walked in cycles.\n\ud83d\ude35 Unsure about right way, he looks at the trail markers. \ud83d\udfe5\n\ud83d\udd35 \ud83d\udd36"),(0,r.kt)("p",null,"Can you help him to choose the right way to Berlin?"),(0,r.kt)(s.Z,{defaultExpression:u()(a||(a=(0,o.Z)(["\n    // use list operators and return the right route\n    routes"]))),feelContext:'{"routes": [ {"route":"red", "stops":["Cologne", "Frankfurt", "Nuremberg", "Munich"]}, {"route":"blue", "stops":["Cologne", "Paderborn", "Hanover", "Berlin"]}, {"route":"yellow", "stops":["Cologne", "M\xfcnster", "Bremen", "Hamburg"]}]}',metadata:{page:"challenge-6"},mdxType:"LiveFeel"}),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Solution"),(0,r.kt)("div",null,(0,r.kt)("div",null,"Zee follows the blue route and reaches CamundaCon just-in-time. He is happy to be there and meet the community."),(0,r.kt)("br",null),(0,r.kt)("pre",{title:"Expression"},'routes["Berlin" in stops][1].route'))))}f.isMDXComponent=!0}}]);