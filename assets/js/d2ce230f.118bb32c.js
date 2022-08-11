"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[8442],{4863:(e,t,s)=>{s.d(t,{Z:()=>i});var a=s(7462),n=s(7294),r=s(5671),l=s(3746);const i=e=>{let{children:t,onChange:s}=e;const i=(0,n.useRef)(null),[o,c]=(0,n.useState)(t),u=(0,n.useCallback)((e=>{const t=e.slice(0,-1);c(t),s(t)}),[]);return(0,r.Y)(i,u,{indentation:2}),n.createElement(l.ZP,(0,a.Z)({},l.lG,{code:o,language:"js"}),(e=>{let{className:t,style:s,tokens:a,getTokenProps:r}=e;return n.createElement("pre",{className:t,style:s,ref:i},a.map(((e,t)=>n.createElement(n.Fragment,{key:t},e.filter((e=>!e.empty)).map(((e,t)=>n.createElement("span",r({token:e,key:t})))),"\n"))))}))}},3163:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>S,frontMatter:()=>x,metadata:()=>g,toc:()=>N});var a=s(7462),n=s(7294),r=s(3905),l=s(9669),i=s.n(l),o=s(4863);const c=s.p+"assets/images/envelope-f87a5f40af8a589b3ce20a1d6d1461e7.png",u={position:"relative",textAlign:"left",color:"black"},d={position:"absolute",top:"10px",left:"16px"},m={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"};class p extends n.Component{constructor(e){super(e)}render(){return n.createElement("div",{style:u},n.createElement("img",{src:c}),n.createElement("div",{style:d},"Camundonaut",n.createElement("br",null),"Camunda Services GmbH",n.createElement("br",null),"Zossener Str. 55",n.createElement("br",null),"10961 Berlin",n.createElement("br",null),"Germany"),n.createElement("div",{style:m},this.props.addressName,n.createElement("br",null),"Camunda Inc.",n.createElement("br",null),"INDUSTRY Denver",n.createElement("br",null),"3001 Brighton Blvd, Suite 450",n.createElement("br",null),"Denver, CO 80216",n.createElement("br",null),"USA"))}}const h=p,f={firstName:"?",middleName:"?",lastName:"?",address:{company:"Camunda Inc.",country:"USA",building:"INDUSTRY Denver",street:"3001 Brighton Blvd, Suite 450",cityStateZip:"Denver, CO 80216"}};class E extends n.Component{constructor(e){super(e),this.state={expression:'firstName + " " + lastName',context:JSON.stringify(f,null,2),result:{addressName:""}},this.debounce=this.debounce.bind(this),this.evaluate=this.evaluate.bind(this),this.setContext=this.setContext.bind(this),this.setExpression=this.setExpression.bind(this),this.setResult=this.setResult.bind(this)}debounce(e,t){var s=this;let a;return void 0===t&&(t=700),function(){for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];clearTimeout(a),a=setTimeout((()=>{e.apply(s,r)}),t)}}evaluate(e,t,s){i().post("http://34.138.73.115/process/start",{expression:e,context:JSON.parse(t),metadata:{user:"foo"}},{headers:{accept:"*/*","content-type":"application/json"}}).then((e=>{let t=this.state.result;t[s]=JSON.stringify(e.data),this.setResult(t)}))}setContext(){return this.debounce((e=>{this.setState({context:e}),this.evaluate(this.state.expression,e,"addressName")}))}setExpression(){return this.debounce((e=>{this.setState({expression:e}),this.evaluate(e,this.state.context,"addressName")}))}setResult(e){this.setState({result:e})}componentDidMount(){this.evaluate(this.state.expression,this.state.context,"addressName")}render(){return n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("p",null,"Before he left on on his quest, Camundonaut promised to keep in touch with his friends. He wants to send them each a letter. Luckily, he can use FEEL String functions to save time.")),n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6"},n.createElement("h5",{style:{textAlign:"left"}},"Help Camundonaut to send a letter by entering the first and last name of someone you know:"),n.createElement(o.Z,{onChange:this.setContext()},this.state.context)),n.createElement("div",{className:"col col--6"},n.createElement("h5",null,"In FEEL, you can concatenate strings easily. Feel free to experiment:"),n.createElement(o.Z,{onChange:this.setExpression()},this.state.expression))),n.createElement("div",{className:"row"},n.createElement(h,{addressName:this.state.result.addressName.replaceAll('"',"")})))}}const v=E,x={id:"tutorial-2-1",title:"Tutorial 2.1: Strings"},b=void 0,g={unversionedId:"tutorial/tutorial-2-1",id:"tutorial/tutorial-2-1",title:"Tutorial 2.1: Strings",description:"",source:"@site/docs/tutorial/tutorial-2-1.mdx",sourceDirName:"tutorial",slug:"/tutorial/tutorial-2-1",permalink:"/feel-scala/docs/tutorial/tutorial-2-1",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/master/docs/docs/tutorial/tutorial-2-1.mdx",tags:[],version:"current",frontMatter:{id:"tutorial-2-1",title:"Tutorial 2.1: Strings"},sidebar:"Tutorial",previous:{title:"Introduction",permalink:"/feel-scala/docs/tutorial/tutorial-2"},next:{title:"Tutorial Playground",permalink:"/feel-scala/docs/tutorial/tutorial-playground"}},y={},N=[],C={toc:N};function S(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},C,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(v,{mdxType:"EnvelopeAddress"}))}S.isMDXComponent=!0}}]);