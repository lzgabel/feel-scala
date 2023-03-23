"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[3305],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),u=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return i.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return t?i.createElement(m,a(a({ref:n},s),{},{components:t})):i.createElement(m,a({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<o;u++)a[u]=t[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4534:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var i=t(7462),r=(t(7294),t(3905));const o={id:"feel-built-in-functions-introduction",title:"Introduction",description:"FEEL includes many built-in functions. These functions can be invoked in expressions and unary-tests."},a=void 0,c={unversionedId:"reference/builtin-functions/feel-built-in-functions-introduction",id:"version-1.15/reference/builtin-functions/feel-built-in-functions-introduction",title:"Introduction",description:"FEEL includes many built-in functions. These functions can be invoked in expressions and unary-tests.",source:"@site/versioned_docs/version-1.15/reference/builtin-functions/feel-built-in-functions-introduction.md",sourceDirName:"reference/builtin-functions",slug:"/reference/builtin-functions/feel-built-in-functions-introduction",permalink:"/feel-scala/docs/1.15/reference/builtin-functions/feel-built-in-functions-introduction",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/versioned_docs/version-1.15/reference/builtin-functions/feel-built-in-functions-introduction.md",tags:[],version:"1.15",frontMatter:{id:"feel-built-in-functions-introduction",title:"Introduction",description:"FEEL includes many built-in functions. These functions can be invoked in expressions and unary-tests."},sidebar:"version-1.15/Reference",previous:{title:"Functions",permalink:"/feel-scala/docs/1.15/reference/language-guide/feel-functions"},next:{title:"Conversion functions",permalink:"/feel-scala/docs/1.15/reference/builtin-functions/feel-built-in-functions-conversion"}},l={},u=[],s={toc:u};function f(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"FEEL includes many built-in functions. These functions can be invoked\nin ",(0,r.kt)("a",{parentName:"p",href:"/feel-scala/docs/1.15/reference/language-guide/feel-expressions-introduction"},"expressions"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"/feel-scala/docs/1.15/reference/language-guide/feel-unary-tests"},"unary-tests"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'contains("me@camunda.com", ".com")\n// invoke function with positional arguments\n\ncontains(string: "me@camunda.com", match: ".de")\n// invoke function with named arguments\n')),(0,r.kt)("p",null,"Read more about functions ",(0,r.kt)("a",{parentName:"p",href:"/feel-scala/docs/1.15/reference/language-guide/feel-functions#invocation"},"here"),"."),(0,r.kt)("p",null,"This section is split into functions based on their primary operational data type:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/feel-scala/docs/1.15/reference/builtin-functions/feel-built-in-functions-boolean"},"Boolean")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/feel-scala/docs/1.15/reference/builtin-functions/feel-built-in-functions-string"},"String")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/feel-scala/docs/1.15/reference/builtin-functions/feel-built-in-functions-numeric"},"Numeric")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/feel-scala/docs/1.15/reference/builtin-functions/feel-built-in-functions-list"},"List")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/feel-scala/docs/1.15/reference/builtin-functions/feel-built-in-functions-context"},"Context")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/feel-scala/docs/1.15/reference/builtin-functions/feel-built-in-functions-temporal"},"Temporal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/feel-scala/docs/1.15/reference/builtin-functions/feel-built-in-functions-range"},"Range"))),(0,r.kt)("p",null,"Additionally, there are ",(0,r.kt)("a",{parentName:"p",href:"/feel-scala/docs/1.15/reference/builtin-functions/feel-built-in-functions-conversion"},"conversion")," functions that allow\nyou to construct new values of a data type (factory functions)."))}f.isMDXComponent=!0}}]);