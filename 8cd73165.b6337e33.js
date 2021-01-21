(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{101:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return m}));var a=t(3),r=t(7),o=(t(0),t(145)),l=t(150),i=t(151),c={id:"value-mapper-spi",title:"Value Mapper SPI"},u={unversionedId:"reference/developer-guide/value-mapper-spi",id:"version-1.10/reference/developer-guide/value-mapper-spi",isDocsHomePage:!1,title:"Value Mapper SPI",description:"The value mapper is used while evaluating expressions and unary tests to",source:"@site/versioned_docs/version-1.10/reference/developer-guide/value-mapper-spi.md",slug:"/reference/developer-guide/value-mapper-spi",permalink:"/feel-scala/docs/1.10/reference/developer-guide/value-mapper-spi",editUrl:"https://github.com/camunda/feel-scala/edit/master/docs/versioned_docs/version-1.10/reference/developer-guide/value-mapper-spi.md",version:"1.10",sidebar:"version-1.10/Reference",previous:{title:"Function Provider SPI",permalink:"/feel-scala/docs/1.10/reference/developer-guide/function-provider-spi"}},p=[{value:"Register the Value Mapper",id:"register-the-value-mapper",children:[]}],s={toc:p};function m(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The value mapper is used while evaluating expressions and unary tests to"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"transform a variable into a FEEL data type (e.g. when it is referenced in an expression ",Object(o.b)("inlineCode",{parentName:"li"},"x + 1"),")"),Object(o.b)("li",{parentName:"ul"},"transform the result of the expression or unary tests from a FEEL data type into a common data type (e.g. to String or BigDecimal/Long)")),Object(o.b)("p",null,"Using the SPI, the transformation can be customized to support more/custom data types, or changing the data type of the result."),Object(o.b)(l.a,{defaultValue:"scala",values:[{label:"Scala",value:"scala"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"scala",mdxType:"TabItem"},Object(o.b)("p",null,"Create a sub-class of ",Object(o.b)("inlineCode",{parentName:"p"},"org.camunda.feel.spi.CustomValueMapper"),". Implement the method ",Object(o.b)("inlineCode",{parentName:"p"},"toVal()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"unpackVal()")," to transform the object. Set the ",Object(o.b)("inlineCode",{parentName:"p"},"priority")," of the value mapper to define the precedence compared to the other mappers. "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"class MyValueMapper extends CustomValueMapper {\n\n  override def toVal(x: Any, innerValueMapper: Any => Val): Option[Val] = x match {\n    case c: Custom => Some(ValString(c.getName))\n    case _ => None\n  }\n\n  override def unpackVal(value: Val, innerValueMapper: Val => Any): Option[Any] = value match {\n    case ValNumber(number) => Some(number.doubleValue) // map BigDecimal to Double\n    case _ => None\n  }\n    \n  override val priority: Int = 1\n\n}\n"))),Object(o.b)(i.a,{value:"java",mdxType:"TabItem"},Object(o.b)("p",null,"Using Java, create a sub-class of ",Object(o.b)("inlineCode",{parentName:"p"},"org.camunda.feel.spi.JavaCustomValueMapper"),". It is basically equal to the Scala one but with Java instead of Scala types."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public class CustomJavaValueMapper extends JavaCustomValueMapper {\n\n  @Override\n  public Optional<Val> toValue(Object x, Function<Object, Val> innerValueMapper) {\n    if (x instanceof Custom) {\n      final Custom c = (Custom) x;\n      return Optional.of(new ValString(c.getName()));\n\n    } else {\n      return Optional.empty();\n    }\n  }\n\n  @Override\n  public Optional<Object> unpackValue(Val value, Function<Val, Object> innerValueMapper) {\n    if (value instanceof ValNumber) {\n      final ValNumber number = (ValNumber) value;\n      return Optional.of(number.value().doubleValue()); // map BigDecimal to Double\n\n    } else {\n      return Optional.empty();\n    }\n  }\n\n  @Override\n  public int priority() {\n    return 1;\n  }\n}\n")))),Object(o.b)("h2",{id:"register-the-value-mapper"},"Register the Value Mapper"),Object(o.b)("p",null,"Depending how the FEEL engine is used, the value mapper can be passed directly on creation, or is loaded via Java ServiceLoader mechanism. "),Object(o.b)("p",null,"In the second case, create a new file ",Object(o.b)("inlineCode",{parentName:"p"},"org.camunda.feel.spi.CustomValueMapper")," in the folder ",Object(o.b)("inlineCode",{parentName:"p"},"META-INF/services/"),". It must contain the full qualified name of the value mapper."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"org.camunda.feel.example.spi.MyValueMapper\n")))}m.isMDXComponent=!0},145:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r.a.createContext({}),p=function(e){var n=r.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(t),b=a,d=s["".concat(l,".").concat(b)]||s[b]||m[b]||o;return t?r.a.createElement(d,i(i({ref:n},u),{},{components:t})):r.a.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=b;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},146:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},148:function(e,n,t){"use strict";var a=t(0),r=t(149);n.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},149:function(e,n,t){"use strict";var a=t(0),r=Object(a.createContext)(void 0);n.a=r},150:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(148),l=t(146),i=t(54),c=t.n(i),u=37,p=39;n.a=function(e){var n=e.lazy,t=e.block,i=e.defaultValue,s=e.values,m=e.groupId,b=e.className,d=Object(o.a)(),f=d.tabGroupChoices,v=d.setTabGroupChoices,O=Object(a.useState)(i),y=O[0],g=O[1],j=a.Children.toArray(e.children);if(null!=m){var h=f[m];null!=h&&h!==y&&s.some((function(e){return e.value===h}))&&g(h)}var V=function(e){g(e),null!=m&&v(m,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t},b)},s.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===n,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case p:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case u:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(N,e.target,e)},onFocus:function(){return V(n)},onClick:function(){V(n)}},t)}))),n?Object(a.cloneElement)(j.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==y})}))))}},151:function(e,n,t){"use strict";var a=t(3),r=t(0),o=t.n(r);n.a=function(e){var n=e.children,t=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:r}),n)}}}]);