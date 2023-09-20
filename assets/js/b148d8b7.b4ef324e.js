"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[470],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>d});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=n.createContext({}),p=function(e){var a=n.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},s=function(e){var a=p(e.components);return n.createElement(u.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,v=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return t?n.createElement(v,o(o({ref:a},s),{},{components:t})):n.createElement(v,o({ref:a},s))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var u in a)hasOwnProperty.call(a,u)&&(i[u]=a[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(7294),r=t(6010);const l="tabItem_Ymn6";function o(e){let{children:a,hidden:t,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>d});var n=t(7462),r=t(7294),l=t(6010),o=t(2389),i=t(7392),u=t(7094),p=t(2466);const s="tabList__CuJ",c="tabItem_LNqP";function m(e){var a,t;const{lazy:o,block:m,defaultValue:d,values:v,groupId:f,className:b}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=v?v:h.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),y=(0,i.l)(g,((e,a)=>e.value===a.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===d?d:null!=(a=null!=d?d:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?a:h[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:V,setTabGroupChoices:O}=(0,u.U)(),[N,C]=(0,r.useState)(k),E=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=f){const e=V[f];null!=e&&e!==N&&g.some((a=>a.value===e))&&C(e)}const x=e=>{const a=e.currentTarget,t=E.indexOf(a),n=g[t].value;n!==N&&(w(a),C(n),null!=f&&O(f,String(n)))},T=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{var n;const a=E.indexOf(e.currentTarget)+1;t=null!=(n=E[a])?n:E[0];break}case"ArrowLeft":{var r;const a=E.indexOf(e.currentTarget)-1;t=null!=(r=E[a])?r:E[E.length-1];break}}null==(a=t)||a.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},b)},g.map((e=>{let{value:a,label:t,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===a?0:-1,"aria-selected":N===a,key:a,ref:e=>E.push(e),onKeyDown:T,onFocus:x,onClick:x},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":N===a})}),null!=t?t:a)}))),o?(0,r.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==N})))))}function d(e){const a=(0,o.Z)();return r.createElement(m,(0,n.Z)({key:String(a)},e))}},2166:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=t(7462),r=(t(7294),t(3905)),l=t(5488),o=t(5162);const i={id:"value-mapper-spi",title:"Value Mapper SPI"},u=void 0,p={unversionedId:"reference/developer-guide/value-mapper-spi",id:"version-1.17/reference/developer-guide/value-mapper-spi",title:"Value Mapper SPI",description:"The value mapper is used while evaluating expressions and unary tests to",source:"@site/versioned_docs/version-1.17/reference/developer-guide/value-mapper-spi.md",sourceDirName:"reference/developer-guide",slug:"/reference/developer-guide/value-mapper-spi",permalink:"/feel-scala/docs/reference/developer-guide/value-mapper-spi",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/versioned_docs/version-1.17/reference/developer-guide/value-mapper-spi.md",tags:[],version:"1.17",frontMatter:{id:"value-mapper-spi",title:"Value Mapper SPI"},sidebar:"Reference",previous:{title:"Function Provider SPI",permalink:"/feel-scala/docs/reference/developer-guide/function-provider-spi"},next:{title:"Clock SPI",permalink:"/feel-scala/docs/reference/developer-guide/clock-spi"}},s={},c=[{value:"Implement a Value Mapper",id:"implement-a-value-mapper",level:2},{value:"Register a Value Mapper",id:"register-a-value-mapper",level:2}],m={toc:c};function d(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The value mapper is used while evaluating expressions and unary tests to"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"transform a variable into a FEEL data type (e.g. when it is referenced in an expression ",(0,r.kt)("inlineCode",{parentName:"li"},"x + 1"),")"),(0,r.kt)("li",{parentName:"ul"},"transform the result of the expression or unary tests from a FEEL data type into a common data type (e.g. to String or BigDecimal/Long)")),(0,r.kt)("p",null,"Using the SPI, the transformation can be customized to support more/custom data types, or changing the data type of the result."),(0,r.kt)("h2",{id:"implement-a-value-mapper"},"Implement a Value Mapper"),(0,r.kt)(l.Z,{defaultValue:"scala",values:[{label:"Scala",value:"scala"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"scala",mdxType:"TabItem"},(0,r.kt)("p",null,"Create a sub-class of ",(0,r.kt)("inlineCode",{parentName:"p"},"org.camunda.feel.valuemapper.CustomValueMapper"),". Implement the method ",(0,r.kt)("inlineCode",{parentName:"p"},"toVal()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"unpackVal()")," to transform the object. Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"priority")," of the value mapper to define the precedence compared to the other mappers. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"class MyValueMapper extends CustomValueMapper {\n\n  override def toVal(x: Any, innerValueMapper: Any => Val): Option[Val] = x match {\n    case c: Custom => Some(ValString(c.getName))\n    case _ => None\n  }\n\n  override def unpackVal(value: Val, innerValueMapper: Val => Any): Option[Any] = value match {\n    case ValNumber(number) => Some(number.doubleValue) // map BigDecimal to Double\n    case _ => None\n  }\n    \n  override val priority: Int = 1\n\n}\n"))),(0,r.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("p",null,"Using Java, create a sub-class of ",(0,r.kt)("inlineCode",{parentName:"p"},"org.camunda.feel.valuemapper.JavaCustomValueMapper"),". It is basically equal to the Scala one but with Java instead of Scala types."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class CustomJavaValueMapper extends JavaCustomValueMapper {\n\n  @Override\n  public Optional<Val> toValue(Object x, Function<Object, Val> innerValueMapper) {\n    if (x instanceof Custom) {\n      final Custom c = (Custom) x;\n      return Optional.of(new ValString(c.getName()));\n\n    } else {\n      return Optional.empty();\n    }\n  }\n\n  @Override\n  public Optional<Object> unpackValue(Val value, Function<Val, Object> innerValueMapper) {\n    if (value instanceof ValNumber) {\n      final ValNumber number = (ValNumber) value;\n      return Optional.of(number.value().doubleValue()); // map BigDecimal to Double\n\n    } else {\n      return Optional.empty();\n    }\n  }\n\n  @Override\n  public int priority() {\n    return 1;\n  }\n}\n")))),(0,r.kt)("h2",{id:"register-a-value-mapper"},"Register a Value Mapper"),(0,r.kt)("p",null,"Depending on how the FEEL engine is used, the value mapper can be passed directly on creation, or is loaded via Java ServiceLoader mechanism. "),(0,r.kt)("p",null,"In the second case, create a new file ",(0,r.kt)("inlineCode",{parentName:"p"},"org.camunda.feel.valuemapper.CustomValueMapper")," in the folder ",(0,r.kt)("inlineCode",{parentName:"p"},"META-INF/services/"),". It must contain the full qualified name of the value mapper."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"org.camunda.feel.example.valuemapper.MyValueMapper\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The FEEL engine contains a built-in value mapper ",(0,r.kt)("inlineCode",{parentName:"p"},"org.camunda.feel.impl.JavaValueMapper")," to transform the result of an expression into a Java type, for example, to a ",(0,r.kt)("inlineCode",{parentName:"p"},"java.util.List")," or a ",(0,r.kt)("inlineCode",{parentName:"p"},"java.util.Map"),". This is useful if the FEEL engine is called from Java code.")))}d.isMDXComponent=!0}}]);