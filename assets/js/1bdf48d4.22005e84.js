"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[3436],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=c(t),d=a,m=f["".concat(i,".").concat(d)]||f[d]||u[d]||l;return t?r.createElement(m,s(s({ref:n},p),{},{components:t})):r.createElement(m,s({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,s=new Array(l);s[0]=f;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1460:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const l={id:"feel-context-expressions",title:"Context expressions",description:"This document outlines context expressions and examples."},s=void 0,o={unversionedId:"reference/language-guide/feel-context-expressions",id:"reference/language-guide/feel-context-expressions",title:"Context expressions",description:"This document outlines context expressions and examples.",source:"@site/docs/reference/language-guide/feel-context-expressions.md",sourceDirName:"reference/language-guide",slug:"/reference/language-guide/feel-context-expressions",permalink:"/feel-scala/docs/next/reference/language-guide/feel-context-expressions",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/docs/reference/language-guide/feel-context-expressions.md",tags:[],version:"current",frontMatter:{id:"feel-context-expressions",title:"Context expressions",description:"This document outlines context expressions and examples."},sidebar:"Reference",previous:{title:"List expressions",permalink:"/feel-scala/docs/next/reference/language-guide/feel-list-expressions"},next:{title:"Temporal expressions",permalink:"/feel-scala/docs/next/reference/language-guide/feel-temporal-expressions"}},i={},c=[{value:"Literal",id:"literal",level:3},{value:"Get entry/path",id:"get-entrypath",level:3},{value:"Filter",id:"filter",level:3},{value:"Projection",id:"projection",level:3}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"literal"},"Literal"),(0,a.kt)("p",null,"Creates a new context with the given entries. Each entry has a key and a value. The key is either a\nname or a string. The value can be any type."),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/feel-scala/docs/next/reference/language-guide/feel-variables#variable-names"},"naming conventions")," for valid key names."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n  a: 1,\n  b: 2\n}\n// {a:1, b:2}\n\n{\n  "a": 1,\n  "b": 2\n}\n// {a:1, b:2}\n')),(0,a.kt)("p",null,"Inside the context, the previous entries can be accessed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  a: 2,\n  b: a * 2\n}\n// {a:2, b:4}\n")),(0,a.kt)("p",null,"A context value can embed other context values."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  a: 1,\n  b: {\n    c: 2\n  }\n}\n// {a:1, b:{c:2}}\n")),(0,a.kt)("h3",{id:"get-entrypath"},"Get entry/path"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"a.b\n")),(0,a.kt)("p",null,"Accesses the entry with the key ",(0,a.kt)("inlineCode",{parentName:"p"},"b")," of the context ",(0,a.kt)("inlineCode",{parentName:"p"},"a"),". The path is separated by ",(0,a.kt)("inlineCode",{parentName:"p"},"."),"."),(0,a.kt)("p",null,"If the value of the entry ",(0,a.kt)("inlineCode",{parentName:"p"},"b")," is also a context, the path can be chained (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"a.b.c"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  a: 2\n}.a\n// 2\n\n{\n  a: {\n    b: 3\n  }\n}.a\n// {b: 3}\n\n{\n  a: {\n    b: 3\n  }\n}.a.b\n// 3\n")),(0,a.kt)("h3",{id:"filter"},"Filter"),(0,a.kt)("p",null,"Filters a list of context elements. It is a special kind of the ",(0,a.kt)("a",{parentName:"p",href:"feel-list-expressions#filter"},"filter expression")," for lists.  "),(0,a.kt)("p",null,"While filtering, the entries of the current context element can be accessed by their key."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'[ \n  {\n    a: "p1", \n    b: 5\n  },  \n  {\n    a: "p2", \n    b: 10\n  } \n][b > 7] \n// {a: "p2", b: 10}\n')),(0,a.kt)("h3",{id:"projection"},"Projection"),(0,a.kt)("p",null,"Extracts the entries of a list of context elements by a given key (i.e. a projection). It returns a\nlist containing the values of the context elements for the given key."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'[\n  {\n    a: "p1",\n    b: 5\n  },\n  {\n    a: "p2",\n    b: 10\n  }\n].a     \n// ["p1", "p2"]\n')))}u.isMDXComponent=!0}}]);