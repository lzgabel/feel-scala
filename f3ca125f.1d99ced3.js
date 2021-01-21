(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),o=(n(0),n(145)),c={id:"feel-built-in-functions-context",title:"Context Functions"},a={unversionedId:"reference/builtin-functions/feel-built-in-functions-context",id:"version-1.12/reference/builtin-functions/feel-built-in-functions-context",isDocsHomePage:!1,title:"Context Functions",description:"get value()",source:"@site/versioned_docs/version-1.12/reference/builtin-functions/feel-built-in-functions-context.md",slug:"/reference/builtin-functions/feel-built-in-functions-context",permalink:"/feel-scala/docs/1.12/reference/builtin-functions/feel-built-in-functions-context",editUrl:"https://github.com/camunda/feel-scala/edit/master/docs/versioned_docs/version-1.12/reference/builtin-functions/feel-built-in-functions-context.md",version:"1.12",sidebar:"version-1.12/Reference",previous:{title:"List Functions",permalink:"/feel-scala/docs/1.12/reference/builtin-functions/feel-built-in-functions-list"},next:{title:"Temporal Functions",permalink:"/feel-scala/docs/1.12/reference/builtin-functions/feel-built-in-functions-temporal"}},l=[{value:"get value()",id:"get-value",children:[]},{value:"get entries()",id:"get-entries",children:[]}],u={toc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"get-value"},"get value()"),Object(o.b)("p",null,"Returns the value of the context entry with the given key."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"parameters:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"context"),": context"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"key"),": string"))),Object(o.b)("li",{parentName:"ul"},"result: any")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'get value({foo: 123}, "foo") \n// 123\n')),Object(o.b)("h2",{id:"get-entries"},"get entries()"),Object(o.b)("p",null,"Returns the entries of the context as list of key-value-pairs."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"parameters:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"context"),": context"))),Object(o.b)("li",{parentName:"ul"},'result: list of context which contains two entries for "key" and "value"')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'get entries({foo: 123})\n// [{key: "foo", value: 123}]\n')))}s.isMDXComponent=!0},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),p=r,m=f["".concat(c,".").concat(p)]||f[p]||b[p]||o;return n?i.a.createElement(m,a(a({ref:t},u),{},{components:n})):i.a.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var u=2;u<o;u++)c[u]=n[u];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);