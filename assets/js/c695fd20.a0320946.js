"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[5482],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var l=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=l.createContext({}),m=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=m(e.components);return l.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},c=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=m(t),d=r,k=c["".concat(o,".").concat(d)]||c[d]||p[d]||a;return t?l.createElement(k,i(i({ref:n},s),{},{components:t})):l.createElement(k,i({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=c;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var m=2;m<a;m++)i[m]=t[m];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4775:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>m});var l=t(7462),r=(t(7294),t(3905));const a={id:"feel-built-in-functions-numeric",title:"Numeric Functions"},i=void 0,u={unversionedId:"reference/builtin-functions/feel-built-in-functions-numeric",id:"version-1.10/reference/builtin-functions/feel-built-in-functions-numeric",title:"Numeric Functions",description:"decimal()",source:"@site/versioned_docs/version-1.10/reference/builtin-functions/feel-built-in-functions-numeric.md",sourceDirName:"reference/builtin-functions",slug:"/reference/builtin-functions/feel-built-in-functions-numeric",permalink:"/feel-scala/docs/1.10/reference/builtin-functions/feel-built-in-functions-numeric",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/versioned_docs/version-1.10/reference/builtin-functions/feel-built-in-functions-numeric.md",tags:[],version:"1.10",frontMatter:{id:"feel-built-in-functions-numeric",title:"Numeric Functions"},sidebar:"version-1.10/Reference",previous:{title:"String Functions",permalink:"/feel-scala/docs/1.10/reference/builtin-functions/feel-built-in-functions-string"},next:{title:"List Functions",permalink:"/feel-scala/docs/1.10/reference/builtin-functions/feel-built-in-functions-list"}},o={},m=[{value:"decimal()",id:"decimal",level:2},{value:"floor()",id:"floor",level:2},{value:"ceiling()",id:"ceiling",level:2},{value:"abs()",id:"abs",level:2},{value:"modulo()",id:"modulo",level:2},{value:"sqrt()",id:"sqrt",level:2},{value:"log()",id:"log",level:2},{value:"exp()",id:"exp",level:2},{value:"odd()",id:"odd",level:2},{value:"even()",id:"even",level:2}],s={toc:m};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,l.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"decimal"},"decimal()"),(0,r.kt)("p",null,"Round the given number at the given scale using the given rounding mode. If no rounding mode is passed in then it uses ",(0,r.kt)("inlineCode",{parentName:"p"},"HALF_EVEN")," as default. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"parameters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n"),": number"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scale"),": number"))),(0,r.kt)("li",{parentName:"ul"},"result: number")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"decimal(1/3, 2)\n// .33\n\ndecimal(1.5, 0) \n// 2\n")),(0,r.kt)("h2",{id:"floor"},"floor()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"parameters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n"),": number"))),(0,r.kt)("li",{parentName:"ul"},"result: number")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"floor(1.5)\n// 1\n\nfloor(-1.5)\n// -2\n")),(0,r.kt)("h2",{id:"ceiling"},"ceiling()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"parameters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n"),": number"))),(0,r.kt)("li",{parentName:"ul"},"result: number")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"ceiling(1.5)\n// 2\n\nfloor(-1.5)\n// -1\n")),(0,r.kt)("h2",{id:"abs"},"abs()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"parameters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"number"),": number"))),(0,r.kt)("li",{parentName:"ul"},"result: number")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"abs(10)\n// 10\n\nabs(-10)\n// 10\n")),(0,r.kt)("h2",{id:"modulo"},"modulo()"),(0,r.kt)("p",null,"Returns the remainder of the division of dividend by divisor."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"parameters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dividend"),": number"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"divisor"),": number"))),(0,r.kt)("li",{parentName:"ul"},"result: number")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"modulo(12, 5)\n// 2\n")),(0,r.kt)("h2",{id:"sqrt"},"sqrt()"),(0,r.kt)("p",null,"Returns the square root."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"parameters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"number"),": number"))),(0,r.kt)("li",{parentName:"ul"},"result: number")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"sqrt(16)\n// 4\n")),(0,r.kt)("h2",{id:"log"},"log()"),(0,r.kt)("p",null,"Returns the natural logarithm (base e) of the number."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"parameters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"number"),": number"))),(0,r.kt)("li",{parentName:"ul"},"result: number")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"log(10)\n// 2.302585092994046\n")),(0,r.kt)("h2",{id:"exp"},"exp()"),(0,r.kt)("p",null,"Returns the Euler\u2019s number e raised to the power of number ."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"parameters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"number"),": number"))),(0,r.kt)("li",{parentName:"ul"},"result: number")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"exp(5)\n// 148.4131591025766\n")),(0,r.kt)("h2",{id:"odd"},"odd()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"parameters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"number"),": number"))),(0,r.kt)("li",{parentName:"ul"},"result: boolean")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"odd(5)\n// true\n")),(0,r.kt)("h2",{id:"even"},"even()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"parameters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"number"),": number"))),(0,r.kt)("li",{parentName:"ul"},"result: boolean")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"odd(5)\n// false\n")))}p.isMDXComponent=!0}}]);