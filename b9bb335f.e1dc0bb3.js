(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{114:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return b})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return o}));var r=t(3),l=t(7),a=(t(0),t(145)),i={id:"feel-built-in-functions-numeric",title:"Numeric Functions"},b={unversionedId:"reference/builtin-functions/feel-built-in-functions-numeric",id:"version-1.11/reference/builtin-functions/feel-built-in-functions-numeric",isDocsHomePage:!1,title:"Numeric Functions",description:"decimal()",source:"@site/versioned_docs/version-1.11/reference/builtin-functions/feel-built-in-functions-numeric.md",slug:"/reference/builtin-functions/feel-built-in-functions-numeric",permalink:"/feel-scala/docs/1.11/reference/builtin-functions/feel-built-in-functions-numeric",editUrl:"https://github.com/camunda/feel-scala/edit/master/docs/versioned_docs/version-1.11/reference/builtin-functions/feel-built-in-functions-numeric.md",version:"1.11",sidebar:"version-1.11/Reference",previous:{title:"String Functions",permalink:"/feel-scala/docs/1.11/reference/builtin-functions/feel-built-in-functions-string"},next:{title:"List Functions",permalink:"/feel-scala/docs/1.11/reference/builtin-functions/feel-built-in-functions-list"}},c=[{value:"decimal()",id:"decimal",children:[]},{value:"floor()",id:"floor",children:[]},{value:"ceiling()",id:"ceiling",children:[]},{value:"abs()",id:"abs",children:[]},{value:"modulo()",id:"modulo",children:[]},{value:"sqrt()",id:"sqrt",children:[]},{value:"log()",id:"log",children:[]},{value:"exp()",id:"exp",children:[]},{value:"odd()",id:"odd",children:[]},{value:"even()",id:"even",children:[]}],u={toc:c};function o(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"decimal"},"decimal()"),Object(a.b)("p",null,"Round the given number at the given scale using the given rounding mode. If no rounding mode is passed in then it uses ",Object(a.b)("inlineCode",{parentName:"p"},"HALF_EVEN")," as default. "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"parameters:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"n"),": number"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"scale"),": number"))),Object(a.b)("li",{parentName:"ul"},"result: number")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"decimal(1/3, 2)\n// .33\n\ndecimal(1.5, 0) \n// 2\n")),Object(a.b)("h2",{id:"floor"},"floor()"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"parameters:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"n"),": number"))),Object(a.b)("li",{parentName:"ul"},"result: number")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"floor(1.5)\n// 1\n\nfloor(-1.5)\n// -2\n")),Object(a.b)("h2",{id:"ceiling"},"ceiling()"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"parameters:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"n"),": number"))),Object(a.b)("li",{parentName:"ul"},"result: number")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"ceiling(1.5)\n// 2\n\nfloor(-1.5)\n// -1\n")),Object(a.b)("h2",{id:"abs"},"abs()"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"parameters:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"number"),": number"))),Object(a.b)("li",{parentName:"ul"},"result: number")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"abs(10)\n// 10\n\nabs(-10)\n// 10\n")),Object(a.b)("h2",{id:"modulo"},"modulo()"),Object(a.b)("p",null,"Returns the remainder of the division of dividend by divisor."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"parameters:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"dividend"),": number"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"divisor"),": number"))),Object(a.b)("li",{parentName:"ul"},"result: number")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"modulo(12, 5)\n// 2\n")),Object(a.b)("h2",{id:"sqrt"},"sqrt()"),Object(a.b)("p",null,"Returns the square root."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"parameters:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"number"),": number"))),Object(a.b)("li",{parentName:"ul"},"result: number")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"sqrt(16)\n// 4\n")),Object(a.b)("h2",{id:"log"},"log()"),Object(a.b)("p",null,"Returns the natural logarithm (base e) of the number."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"parameters:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"number"),": number"))),Object(a.b)("li",{parentName:"ul"},"result: number")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"log(10)\n// 2.302585092994046\n")),Object(a.b)("h2",{id:"exp"},"exp()"),Object(a.b)("p",null,"Returns the Euler\u2019s number e raised to the power of number ."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"parameters:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"number"),": number"))),Object(a.b)("li",{parentName:"ul"},"result: number")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"exp(5)\n// 148.4131591025766\n")),Object(a.b)("h2",{id:"odd"},"odd()"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"parameters:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"number"),": number"))),Object(a.b)("li",{parentName:"ul"},"result: boolean")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"odd(5)\n// true\n")),Object(a.b)("h2",{id:"even"},"even()"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"parameters:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"number"),": number"))),Object(a.b)("li",{parentName:"ul"},"result: boolean")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"odd(5)\n// false\n")))}o.isMDXComponent=!0},145:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return d}));var r=t(0),l=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=l.a.createContext({}),o=function(e){var n=l.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},m=function(e){var n=o(e.components);return l.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},s=l.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=o(t),s=r,d=m["".concat(i,".").concat(s)]||m[s]||p[s]||a;return t?l.a.createElement(d,b(b({ref:n},u),{},{components:t})):l.a.createElement(d,b({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=s;var b={};for(var c in n)hasOwnProperty.call(n,c)&&(b[c]=n[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,i[1]=b;for(var u=2;u<a;u++)i[u]=t[u];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);