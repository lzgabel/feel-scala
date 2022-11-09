"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[7780],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(n),c=r,k=p["".concat(u,".").concat(c)]||p[c]||d[c]||i;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={id:"feel-built-in-functions-conversion",title:"Conversion Functions"},l=void 0,o={unversionedId:"reference/builtin-functions/feel-built-in-functions-conversion",id:"version-1.13/reference/builtin-functions/feel-built-in-functions-conversion",title:"Conversion Functions",description:"Convert a value into a different type.",source:"@site/versioned_docs/version-1.13/reference/builtin-functions/feel-built-in-functions-conversion.md",sourceDirName:"reference/builtin-functions",slug:"/reference/builtin-functions/feel-built-in-functions-conversion",permalink:"/feel-scala/docs/1.13/reference/builtin-functions/feel-built-in-functions-conversion",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/versioned_docs/version-1.13/reference/builtin-functions/feel-built-in-functions-conversion.md",tags:[],version:"1.13",frontMatter:{id:"feel-built-in-functions-conversion",title:"Conversion Functions"},sidebar:"version-1.13/Reference",previous:{title:"Expressions",permalink:"/feel-scala/docs/1.13/reference/language-guide/feel-expression"},next:{title:"Boolean Functions",permalink:"/feel-scala/docs/1.13/reference/builtin-functions/feel-built-in-functions-boolean"}},u={},s=[{value:"date()",id:"date",level:2},{value:"time()",id:"time",level:2},{value:"date and time()",id:"date-and-time",level:2},{value:"duration()",id:"duration",level:2},{value:"years and months duration()",id:"years-and-months-duration",level:2},{value:"number()",id:"number",level:2},{value:"string()",id:"string",level:2},{value:"context()",id:"context",level:2}],m={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Convert a value into a different type."),(0,r.kt)("h2",{id:"date"},"date()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"parameters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"from"),": string / date-time"),(0,r.kt)("li",{parentName:"ul"},"or ",(0,r.kt)("inlineCode",{parentName:"li"},"year"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"month"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"day"),": number "))),(0,r.kt)("li",{parentName:"ul"},"result: date")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'date(birthday) \n// date("2018-04-29")\n\ndate(date and time("2012-12-25T11:00:00"))\n// date("2012-12-25")\n\ndate(2012, 12, 25)\n// date("2012-12-25")\n')),(0,r.kt)("h2",{id:"time"},"time()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"parameters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"from"),": string / date-time"),(0,r.kt)("li",{parentName:"ul"},"or ",(0,r.kt)("inlineCode",{parentName:"li"},"hour"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"minute"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"second"),": number ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"(optional) ",(0,r.kt)("inlineCode",{parentName:"li"},"offset"),": day-time-duration"))))),(0,r.kt)("li",{parentName:"ul"},"result: time")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'time(lunchTime) \n// time("12:00:00")\n\ntime(date and time("2012-12-25T11:00:00"))\n// time("11:00:00")\n\ntime(23, 59, 0)\n// time("23:59:00")\n\ntime(14, 30, 0, duration("PT1H"))\n// time("15:30:00")\n')),(0,r.kt)("h2",{id:"date-and-time"},"date and time()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"parameters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"date"),": date / date-time"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"time"),": time"),(0,r.kt)("li",{parentName:"ul"},"or ",(0,r.kt)("inlineCode",{parentName:"li"},"from"),": string "))),(0,r.kt)("li",{parentName:"ul"},"result: date-time")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'date and time(date("2012-12-24"),time("T23:59:00")) \n// date and time("2012-12-24T23:59:00")\n\ndate and time(date and time("2012-12-25T11:00:00"),time("T23:59:00"))\n// date and time("2012-12-25T23:59:00")\n\ndate and time(birthday) \n// date and time("2018-04-29T009:30:00")\n')),(0,r.kt)("h2",{id:"duration"},"duration()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"parameters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"from"),": string"))),(0,r.kt)("li",{parentName:"ul"},"result: day-time-duration or year-month-duration")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'duration(weekDays)\n// duration("P5D")\n\nduration(age)\n// duration("P32Y")\n')),(0,r.kt)("h2",{id:"years-and-months-duration"},"years and months duration()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"parameters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"from"),": date"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"to"),": date"))),(0,r.kt)("li",{parentName:"ul"},"result: year-month-duration")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'years and months duration(date("2011-12-22"), date("2013-08-24"))\n// duration("P1Y8M")\n')),(0,r.kt)("h2",{id:"number"},"number()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"parameters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"from"),": string"))),(0,r.kt)("li",{parentName:"ul"},"result: number")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'number("1500.5") \n// 1500.5\n')),(0,r.kt)("h2",{id:"string"},"string()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"parameters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"from"),": any"))),(0,r.kt)("li",{parentName:"ul"},"result: string")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'string(1.1) \n// "1.1"\n\nstring(date("2012-12-25"))\n// "2012-12-25"\n')),(0,r.kt)("h2",{id:"context"},"context()"),(0,r.kt)("p",null,"Constructs a context of the given list of key-value pairs. It is the reverse function to ",(0,r.kt)("a",{parentName:"p",href:"/feel-scala/docs/1.13/reference/builtin-functions/feel-built-in-functions-context#get-entries"},"get entries()"),"."),(0,r.kt)("p",null,"Each key-value pair must be a context with two entries: ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),". The entry with name ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," must have a value of the type ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,r.kt)("p",null,"It might override context entries if the keys are equal. The entries are overridden in the same order as the contexts in the given list.    "),(0,r.kt)("p",null,"Returns ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," if one of the entries is not a context, or if a context doesn't contain the required entries."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"parameters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"entries"),": list of contexts "))),(0,r.kt)("li",{parentName:"ul"},"result: context  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'context([{"key":"a", "value":1}, {"key":"b", "value":2}])\n// {a:1, b:2}\n')))}d.isMDXComponent=!0}}]);