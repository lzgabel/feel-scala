"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[884],{4863:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7462),l=a(7294),r=a(5671),s=a(3746);const o=e=>{let{children:t,onChange:a,language:o}=e;const i=(0,l.useRef)(null),[c,u]=(0,l.useState)(t),p=(0,l.useCallback)((e=>{const t=e.slice(0,-1);u(t),a(t)}),[]);return(0,r.Y)(i,p,{indentation:2}),l.createElement(s.ZP,(0,n.Z)({},s.lG,{code:c,language:o}),(e=>{let{className:t,style:a,tokens:n,getTokenProps:r}=e;return l.createElement("pre",{className:t,style:a,ref:i},n.map(((e,t)=>l.createElement(l.Fragment,{key:t},e.filter((e=>!e.empty)).map(((e,t)=>l.createElement("span",r({token:e,key:t})))),"\n"))))}))}},4294:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(9669),r=a.n(l),s=a(4863),o=a(9537);const i=e=>{let{defaultExpression:t,feelContext:a,metadata:l,onResultCallback:i,onErrorCallback:c}=e;a&&(a=JSON.stringify(JSON.parse(a),null,2));const[u,p]=n.useState(t),[d,h]=n.useState(a),[m,g]=n.useState("<click 'Evaluate' to see the result of the expression>"),[f,k]=n.useState(null),v=/^.+(?<line>\d+):(?<position>\d+).+$/gm,x=/^.+at position (?<position>\d+)$/gm;function E(e){g(null),k(e),c&&c(e)}return n.createElement("div",null,n.createElement("h2",null,"Expression"),n.createElement(s.Z,{onChange:p,language:"js"},u),a&&n.createElement("div",null,n.createElement("h2",null,"Context"),n.createElement("i",null,"A JSON document that is used to resolve ",n.createElement("strong",null,"variables")," ","in the expression."),n.createElement(s.Z,{onChange:h,language:"json"},d)),n.createElement("button",{onClick:function(){try{g("<evaluating the expression...>");!function(e){r().post("https://feel.upgradingdave.com/api/v1/feel/evaluate",{expression:u,context:e,metadata:{...l}},{headers:{accept:"*/*","content-type":"application/json"}}).then((e=>{var t;if(null!=e&&null!=(t=e.data)&&t.error){var a,n;const t=e.data.error,l=v.exec(t);E({message:t,line:null==l||null==(a=l.groups)?void 0:a.line,position:null==l||null==(n=l.groups)?void 0:n.position})}else!function(e){k(null),g(e),i&&i(e)}(JSON.stringify(e.data.result))}))}(a?JSON.parse(d):{})}catch(t){var e;const a=x.exec(t.message);E({message:"failed to parse context: "+t.message,position:null==a||null==(e=a.groups)?void 0:e.position})}},className:"button button--primary button--lg"},"Evaluate"),n.createElement("br",null),n.createElement("br",null),n.createElement("h2",null,"Result"),n.createElement(o.Z,{title:(()=>{const e=null!=f&&f.line?" on line "+f.line:"",t=null!=f&&f.position?" at position "+f.position:"";return f&&"Error"+e+t})(),language:"json"},m||(null==f?void 0:f.message)))}},175:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>f,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var n,l=a(7462),r=a(1880),s=(a(7294),a(3905)),o=a(4294),i=a(6518),c=a.n(i);const u={id:"chapter-2",title:"Chapter 2"},p=void 0,d={unversionedId:"learn/challenge/chapter-2",id:"learn/challenge/chapter-2",title:"Chapter 2",description:"Once Zee arrived to Pamplona, a mystical creature appearedsnake: The Hydra was a",source:"@site/docs/learn/challenge/chapter-2.mdx",sourceDirName:"learn/challenge",slug:"/learn/challenge/chapter-2",permalink:"/feel-scala/docs/next/learn/challenge/chapter-2",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/docs/learn/challenge/chapter-2.mdx",tags:[],version:"current",frontMatter:{id:"chapter-2",title:"Chapter 2"},sidebar:"Learn",previous:{title:"Chapter 1",permalink:"/feel-scala/docs/next/learn/challenge/chapter-1"},next:{title:"Chapter 3",permalink:"/feel-scala/docs/next/learn/challenge/chapter-3"}},h={},m=[],g={toc:m};function f(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,l.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Once Zee arrived to Pamplona, a mystical creature appeared: Lerna's Hydra. \ud83d\udc0d The Hydra was a\none-headed monster that when it's head was cut off, 2 more heads would grew in its place."),(0,s.kt)("p",null,"Zee reached for a sword \ud83d\udde1\ufe0f and cut off the head of the beast. As a result 2 more\nappeared. \ud83d\ude31 Zee cut both heads off again, which doubled to 4. How many heads would the beast\nhave after cutting them for 5 times?"),(0,s.kt)("p",null,"We could try to represent this in a multiplication like this: ",(0,s.kt)("inlineCode",{parentName:"p"},"2*2*2*2*2"),", but we can leverage\n",(0,s.kt)("a",{parentName:"p",href:"/feel-scala/docs/next/reference/language-guide/feel-numeric-expressions#exponentiation"},"exponentiation")," and\nrepresent it like the following expression:"),(0,s.kt)(o.Z,{defaultExpression:c()(n||(n=(0,r.Z)(["\n    // use exponentiation to represent the multiplications\n    2*2*2*2*2"]))),feelContext:'{"base": 2, "exponent": 5}',metadata:{page:"challenge-2"},mdxType:"LiveFeel"}),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Solution"),(0,s.kt)("div",null,(0,s.kt)("div",null,"By the 5th time, there were 32 heads and no apparent way out, thankfully the heads started fighting with each other and Zee was able to escape."),(0,s.kt)("br",null),(0,s.kt)("pre",{title:"Expression"},"base ** exponent"))))}f.isMDXComponent=!0}}]);