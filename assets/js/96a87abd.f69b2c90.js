"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[7240],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(t),d=a,g=c["".concat(i,".").concat(d)]||c[d]||m[d]||l;return t?r.createElement(g,u(u({ref:n},p),{},{components:t})):r.createElement(g,u({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,u=new Array(l);u[0]=c;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var s=2;s<l;s++)u[s]=t[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3242:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(7294);const a=()=>r.createElement("p",null,r.createElement("span",{style:{backgroundColor:"#FC5D0D",borderRadius:"7px",color:"#fff",padding:"0.2rem",marginRight:"0.5rem"},title:"This feature is not part of the official DMN standard. It is an extension from Camunda's implementation."},"Camunda Extension"))},8684:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>u,metadata:()=>i,toc:()=>p});var r=t(7462),a=(t(7294),t(3905)),l=t(3242);const u={id:"feel-built-in-functions-numeric",title:"Numeric functions",description:"This document outlines built-in numeric functions and examples."},o=void 0,i={unversionedId:"reference/builtin-functions/feel-built-in-functions-numeric",id:"version-1.16/reference/builtin-functions/feel-built-in-functions-numeric",title:"Numeric functions",description:"This document outlines built-in numeric functions and examples.",source:"@site/versioned_docs/version-1.16/reference/builtin-functions/feel-built-in-functions-numeric.md",sourceDirName:"reference/builtin-functions",slug:"/reference/builtin-functions/feel-built-in-functions-numeric",permalink:"/feel-scala/docs/1.16/reference/builtin-functions/feel-built-in-functions-numeric",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/versioned_docs/version-1.16/reference/builtin-functions/feel-built-in-functions-numeric.md",tags:[],version:"1.16",frontMatter:{id:"feel-built-in-functions-numeric",title:"Numeric functions",description:"This document outlines built-in numeric functions and examples."},sidebar:"Reference",previous:{title:"String functions",permalink:"/feel-scala/docs/1.16/reference/builtin-functions/feel-built-in-functions-string"},next:{title:"List functions",permalink:"/feel-scala/docs/1.16/reference/builtin-functions/feel-built-in-functions-list"}},s={},p=[{value:"decimal(n, scale)",id:"decimaln-scale",level:2},{value:"floor(n)",id:"floorn",level:2},{value:"floor(n, scale)",id:"floorn-scale",level:2},{value:"ceiling(n)",id:"ceilingn",level:2},{value:"ceiling(n, scale)",id:"ceilingn-scale",level:2},{value:"round up(n, scale)",id:"round-upn-scale",level:2},{value:"round down(n, scale)",id:"round-downn-scale",level:2},{value:"round half up(n, scale)",id:"round-half-upn-scale",level:2},{value:"round half down(n, scale)",id:"round-half-downn-scale",level:2},{value:"abs(number)",id:"absnumber",level:2},{value:"modulo(dividend, divisor)",id:"modulodividend-divisor",level:2},{value:"sqrt(number)",id:"sqrtnumber",level:2},{value:"log(number)",id:"lognumber",level:2},{value:"exp(number)",id:"expnumber",level:2},{value:"odd(number)",id:"oddnumber",level:2},{value:"even(number)",id:"evennumber",level:2},{value:"random number()",id:"random-number",level:2}],m={toc:p};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"decimaln-scale"},"decimal(n, scale)"),(0,a.kt)("p",null,"Rounds the given value at the given scale."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"decimal(n: number, scale: number): number\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"decimal(1/3, 2)\n// .33\n\ndecimal(1.5, 0) \n// 2\n")),(0,a.kt)("h2",{id:"floorn"},"floor(n)"),(0,a.kt)("p",null,"Rounds the given value with rounding mode flooring."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"floor(n: number): number\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"floor(1.5)\n// 1\n\nfloor(-1.5)\n// -2\n")),(0,a.kt)("h2",{id:"floorn-scale"},"floor(n, scale)"),(0,a.kt)("p",null,"Rounds the given value with rounding mode flooring at the given scale."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"floor(n: number, scale: number): number\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"floor(-1.56, 1)\n// -1.6\n")),(0,a.kt)("h2",{id:"ceilingn"},"ceiling(n)"),(0,a.kt)("p",null,"Rounds the given value with rounding mode ceiling."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"ceiling(n: number): number\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"ceiling(1.5)\n// 2\n\nceiling(-1.5)\n// -1\n")),(0,a.kt)("h2",{id:"ceilingn-scale"},"ceiling(n, scale)"),(0,a.kt)("p",null,"Rounds the given value with rounding mode ceiling at the given scale."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"ceiling(n: number, scale: number): number\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"ceiling(-1.56, 1)\n// -1.5\n")),(0,a.kt)("h2",{id:"round-upn-scale"},"round up(n, scale)"),(0,a.kt)("p",null,"Rounds the given value with the rounding mode round-up at the given scale."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"round up(n: number, scale: number): number\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"round up(5.5, 0) \n// 6\n\nround up(-5.5, 0)\n// -6\n\nround up(1.121, 2)\n// 1.13\n\nround up(-1.126, 2)\n// -1.13\n")),(0,a.kt)("h2",{id:"round-downn-scale"},"round down(n, scale)"),(0,a.kt)("p",null,"Rounds the given value with the rounding mode round-down at the given scale."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"round down(n: number, scale: number): number\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"round down(5.5, 0)\n// 5\n\nround down (-5.5, 0)\n// -5\n\nround down (1.121, 2)\n// 1.12\n\nround down (-1.126, 2)\n// -1.12\n")),(0,a.kt)("h2",{id:"round-half-upn-scale"},"round half up(n, scale)"),(0,a.kt)("p",null,"Rounds the given value with the rounding mode round-half-up at the given scale."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"round half up(n: number, scale: number): number\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"round half up(5.5, 0)\n// 6\n\nround half up(-5.5, 0)\n// -6\n\nround half up(1.121, 2) \n// 1.12\n\nround half up(-1.126, 2)\n// -1.13\n")),(0,a.kt)("h2",{id:"round-half-downn-scale"},"round half down(n, scale)"),(0,a.kt)("p",null,"Rounds the given value with the rounding mode round-half-down at the given scale."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"round half down(n: number, scale: number): number\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"round half down (5.5, 0)\n// 5\n\nround half down (-5.5, 0)\n// -5\n\nround half down (1.121, 2)\n// 1.12\n\nround half down (-1.126, 2)\n// -1.13\n")),(0,a.kt)("h2",{id:"absnumber"},"abs(number)"),(0,a.kt)("p",null,"Returns the absolute value of the given numeric value."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"abs(number: number): number\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"abs(10)\n// 10\n\nabs(-10)\n// 10\n")),(0,a.kt)("h2",{id:"modulodividend-divisor"},"modulo(dividend, divisor)"),(0,a.kt)("p",null,"Returns the remainder of the division of dividend by divisor."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"modulo(dividend: number, divisor: number): number\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"modulo(12, 5)\n// 2\n")),(0,a.kt)("h2",{id:"sqrtnumber"},"sqrt(number)"),(0,a.kt)("p",null,"Returns the square root of the given value."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"sqrt(number: number): number\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"sqrt(16)\n// 4\n")),(0,a.kt)("h2",{id:"lognumber"},"log(number)"),(0,a.kt)("p",null,"Returns the natural logarithm (base e) of the given value."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"log(number: number): number\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"log(10)\n// 2.302585092994046\n")),(0,a.kt)("h2",{id:"expnumber"},"exp(number)"),(0,a.kt)("p",null,"Returns the Euler\u2019s number e raised to the power of the given number."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"exp(number: number): number\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"exp(5)\n// 148.4131591025766\n")),(0,a.kt)("h2",{id:"oddnumber"},"odd(number)"),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if the given value is odd. Otherwise, returns ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"odd(number: number): boolean\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"odd(5)\n// true\n\nodd(2)\n// false\n")),(0,a.kt)("h2",{id:"evennumber"},"even(number)"),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if the given is even. Otherwise, returns ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"even(number: number): boolean\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"even(5)\n// false\n\neven(2)\n// true\n")),(0,a.kt)("h2",{id:"random-number"},"random number()"),(0,a.kt)(l.Z,{mdxType:"MarkerCamundaExtension"}),(0,a.kt)("p",null,"Returns a random number between ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),". "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"random number(): number\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"random number()\n// 0.9701618132579795\n")))}c.isMDXComponent=!0}}]);