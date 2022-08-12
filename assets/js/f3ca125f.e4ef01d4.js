"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[2913],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||l;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const l={id:"feel-built-in-functions-context",title:"Context Functions"},o=void 0,a={unversionedId:"reference/builtin-functions/feel-built-in-functions-context",id:"version-1.12/reference/builtin-functions/feel-built-in-functions-context",title:"Context Functions",description:"get value()",source:"@site/versioned_docs/version-1.12/reference/builtin-functions/feel-built-in-functions-context.md",sourceDirName:"reference/builtin-functions",slug:"/reference/builtin-functions/feel-built-in-functions-context",permalink:"/feel-scala/docs/1.12/reference/builtin-functions/feel-built-in-functions-context",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/master/docs/versioned_docs/version-1.12/reference/builtin-functions/feel-built-in-functions-context.md",tags:[],version:"1.12",frontMatter:{id:"feel-built-in-functions-context",title:"Context Functions"},sidebar:"version-1.12/Reference",previous:{title:"List Functions",permalink:"/feel-scala/docs/1.12/reference/builtin-functions/feel-built-in-functions-list"},next:{title:"Temporal Functions",permalink:"/feel-scala/docs/1.12/reference/builtin-functions/feel-built-in-functions-temporal"}},c={},u=[{value:"get value()",id:"get-value",level:2},{value:"get entries()",id:"get-entries",level:2}],s={toc:u};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-value"},"get value()"),(0,i.kt)("p",null,"Returns the value of the context entry with the given key."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"context"),": context"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key"),": string"))),(0,i.kt)("li",{parentName:"ul"},"result: any")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'get value({foo: 123}, "foo") \n// 123\n')),(0,i.kt)("h2",{id:"get-entries"},"get entries()"),(0,i.kt)("p",null,"Returns the entries of the context as list of key-value-pairs."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"context"),": context"))),(0,i.kt)("li",{parentName:"ul"},'result: list of context which contains two entries for "key" and "value"')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'get entries({foo: 123})\n// [{key: "foo", value: 123}]\n')))}f.isMDXComponent=!0}}]);