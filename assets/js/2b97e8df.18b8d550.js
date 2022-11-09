"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[2549],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>m});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?t.createElement(f,l(l({ref:n},u),{},{components:r})):t.createElement(f,l({ref:n},u))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5475:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=r(7462),i=(r(7294),r(3905));const a={id:"feel-numeric-expressions",title:"Numeric expressions",description:"This document outlines numeric expressions and examples."},l=void 0,o={unversionedId:"reference/language-guide/feel-numeric-expressions",id:"reference/language-guide/feel-numeric-expressions",title:"Numeric expressions",description:"This document outlines numeric expressions and examples.",source:"@site/docs/reference/language-guide/feel-numeric-expressions.md",sourceDirName:"reference/language-guide",slug:"/reference/language-guide/feel-numeric-expressions",permalink:"/feel-scala/docs/reference/language-guide/feel-numeric-expressions",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/docs/reference/language-guide/feel-numeric-expressions.md",tags:[],version:"current",frontMatter:{id:"feel-numeric-expressions",title:"Numeric expressions",description:"This document outlines numeric expressions and examples."},sidebar:"Reference",previous:{title:"String expressions",permalink:"/feel-scala/docs/reference/language-guide/feel-string-expressions"},next:{title:"List expressions",permalink:"/feel-scala/docs/reference/language-guide/feel-list-expressions"}},s={},c=[{value:"Literal",id:"literal",level:3},{value:"Addition",id:"addition",level:3},{value:"Subtraction",id:"subtraction",level:3},{value:"Multiplication",id:"multiplication",level:3},{value:"Division",id:"division",level:3},{value:"Exponentiation",id:"exponentiation",level:3}],u={toc:c};function p(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"literal"},"Literal"),(0,i.kt)("p",null,"Creates a new numeric value. Leading zeros are valid."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"1\n\n0.5\n.5\n\n-2 \n\n01\n\n-0002\n")),(0,i.kt)("h3",{id:"addition"},"Addition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"2 + 3\n// 5\n")),(0,i.kt)("h3",{id:"subtraction"},"Subtraction"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"5 - 3\n// 2\n")),(0,i.kt)("h3",{id:"multiplication"},"Multiplication"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"5 * 3        \n// 15\n")),(0,i.kt)("h3",{id:"division"},"Division"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"6 / 2  \n// 3\n")),(0,i.kt)("h3",{id:"exponentiation"},"Exponentiation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"2 ** 3   \n// 8\n")))}p.isMDXComponent=!0}}]);