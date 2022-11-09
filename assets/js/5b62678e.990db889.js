"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[8165],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=r,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return t?a.createElement(m,o(o({ref:n},c),{},{components:t})):a.createElement(m,o({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(7294),r=t(6010);const i="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>f});var a=t(7462),r=t(7294),i=t(6010),o=t(2389),l=t(7392),u=t(7094),s=t(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var n,t;const{lazy:o,block:d,defaultValue:f,values:m,groupId:v,className:b}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:g.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),y=(0,l.l)(h,((e,n)=>e.value===n.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===f?f:null!=(n=null!=f?f:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:x}=(0,u.U)(),[w,O]=(0,r.useState)(k),F=[],{blockElementScrollPositionUntilNextRender:P}=(0,s.o5)();if(null!=v){const e=N[v];null!=e&&e!==w&&h.some((n=>n.value===e))&&O(e)}const C=e=>{const n=e.currentTarget,t=F.indexOf(n),a=h[t].value;a!==w&&(P(n),O(a),null!=v&&x(v,String(a)))},T=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var a;const n=F.indexOf(e.currentTarget)+1;t=null!=(a=F[n])?a:F[0];break}case"ArrowLeft":{var r;const n=F.indexOf(e.currentTarget)-1;t=null!=(r=F[n])?r:F[F.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},b)},h.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>F.push(e),onKeyDown:T,onFocus:C,onClick:C},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),o?(0,r.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function f(e){const n=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},8413:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=t(7462),r=(t(7294),t(3905)),i=t(5488),o=t(5162);const l={id:"function-provider-spi",title:"Function Provider SPI"},u=void 0,s={unversionedId:"reference/developer-guide/function-provider-spi",id:"version-1.11/reference/developer-guide/function-provider-spi",title:"Function Provider SPI",description:"Functions can be invoked in expressions and unary tests. The engine includes some predefined built-in functions.",source:"@site/versioned_docs/version-1.11/reference/developer-guide/function-provider-spi.md",sourceDirName:"reference/developer-guide",slug:"/reference/developer-guide/function-provider-spi",permalink:"/feel-scala/docs/1.11/reference/developer-guide/function-provider-spi",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/versioned_docs/version-1.11/reference/developer-guide/function-provider-spi.md",tags:[],version:"1.11",frontMatter:{id:"function-provider-spi",title:"Function Provider SPI"},sidebar:"version-1.11/Reference",previous:{title:"Context Functions",permalink:"/feel-scala/docs/1.11/reference/builtin-functions/feel-built-in-functions-context"},next:{title:"Value Mapper SPI",permalink:"/feel-scala/docs/1.11/reference/developer-guide/value-mapper-spi"}},c={},p=[{value:"Register the Function",id:"register-the-function",level:2}],d={toc:p};function f(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Functions can be invoked in expressions and unary tests. The engine includes some predefined built-in functions."),(0,r.kt)("p",null,"Own functions can be defined in two ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"declaring them in an expression (e.g. a context)"),(0,r.kt)("li",{parentName:"ul"},"via the function provider SPI")),(0,r.kt)("p",null,"Using the SPI, the function can be implemented in Scala/Java and is not limited by FEEL. So, it's possible to use language features or libraries.  "),(0,r.kt)(i.Z,{defaultValue:"scala",values:[{label:"Scala",value:"scala"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"scala",mdxType:"TabItem"},(0,r.kt)("p",null,"Create a sub-class of ",(0,r.kt)("inlineCode",{parentName:"p"},"org.camunda.feel.context.CustomFunctionProvider")," and implement the method ",(0,r.kt)("inlineCode",{parentName:"p"},"getFunction()")," which returns the function for the given name. If a function can have different parameters (i.e. different parameter count) then override ",(0,r.kt)("inlineCode",{parentName:"p"},"getFunctions()")," instead."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'class CustomScalaFunctionProvider extends CustomFunctionProvider {\n\n  def getFunction(name: String): Option[ValFunction] = functions.get(name)\n\n  def functionNames: Iterable[String] = functions.keys\n\n  val functions: Map[String, ValFunction] = Map(\n    "incr" -> ValFunction(\n      params = List("x"),\n      invoke = { case List(ValNumber(x)) => ValNumber(x + 1) }\n    )\n  )\n\n}\n')),(0,r.kt)("p",null,"The function must be of type ",(0,r.kt)("inlineCode",{parentName:"p"},"ValFunction"),". It contains"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"params")," - list of the named parameters of the function"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"invoke")," - business logic as function which takes the arguments and returns the result. The order of the arguments is defined by the parameter list.  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hasVarArgs")," - if ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," the function can have variable arguments for the last parameter. The last argument is of type list. "))),(0,r.kt)(o.Z,{value:"java",mdxType:"TabItem"},"Using Java, create a sub-class of `org.camunda.feel.context.JavaFunctionProvider` instead. It is equal to the Scala one but uses more Java-like classes.",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class CustomJavaFunctionProvider extends JavaFunctionProvider\n{\n    private static final Map<String, JavaFunction> functions = new HashMap<>();\n\n    static {\n    \n        final JavaFunction function = new JavaFunction(Arrays.asList("x"), args -> {\n            final ValNumber arg = (ValNumber) args.get(0);\n\n            int x = arg.value().intValue();\n\n            return new ValNumber(BigDecimal.valueOf(x - 1));\n        });\n\n        functions.put("decr", function);\n    }\n\n    @Override\n    public Optional<JavaFunction> resolveFunction(String functionName)\n    {\n      return Optional.ofNullable(functions.get(functionName));\n    }\n \n    @Override\n    public Collection<String> getFunctionNames() {\n      return functions.keySet();\n    }\n\n}\n')))),(0,r.kt)("h2",{id:"register-the-function"},"Register the Function"),(0,r.kt)("p",null,"Depending how the FEEL engine is used, the function provider can be passed directly on creation, or is loaded via Java ServiceLoader mechanism. "),(0,r.kt)("p",null,"In the second case, create a new file ",(0,r.kt)("inlineCode",{parentName:"p"},"org.camunda.feel.context.CustomFunctionProvider")," in the folder ",(0,r.kt)("inlineCode",{parentName:"p"},"META-INF/services/"),". It must contain all function providers by their full qualified name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"org.camunda.feel.example.context.CustomScalaFunctionProvider\norg.camunda.feel.example.context.CustomJavaFunctionProvider\n")))}f.isMDXComponent=!0}}]);