(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{145:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),u=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=u(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,s=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return n?r.a.createElement(s,c(c({ref:t},o),{},{components:n})):r.a.createElement(s,c({ref:t},o))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<i;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(145)),l={id:"feel-built-in-functions-conversion",title:"Conversion Functions"},c={unversionedId:"reference/builtin-functions/feel-built-in-functions-conversion",id:"reference/builtin-functions/feel-built-in-functions-conversion",isDocsHomePage:!1,title:"Conversion Functions",description:"Convert a value into a different type.",source:"@site/docs/reference/builtin-functions/feel-built-in-functions-conversion.md",slug:"/reference/builtin-functions/feel-built-in-functions-conversion",permalink:"/feel-scala/docs/reference/builtin-functions/feel-built-in-functions-conversion",editUrl:"https://github.com/camunda/feel-scala/edit/master/docs/docs/reference/builtin-functions/feel-built-in-functions-conversion.md",version:"current",sidebar:"Reference",previous:{title:"Expressions",permalink:"/feel-scala/docs/reference/language-guide/feel-expression"},next:{title:"Boolean Functions",permalink:"/feel-scala/docs/reference/builtin-functions/feel-built-in-functions-boolean"}},b=[{value:"date()",id:"date",children:[]},{value:"time()",id:"time",children:[]},{value:"date and time()",id:"date-and-time",children:[]},{value:"duration()",id:"duration",children:[]},{value:"years and months duration()",id:"years-and-months-duration",children:[]},{value:"number()",id:"number",children:[]},{value:"string()",id:"string",children:[]}],o={toc:b};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Convert a value into a different type."),Object(i.b)("h2",{id:"date"},"date()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"parameters:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"from"),": string / date-time"),Object(i.b)("li",{parentName:"ul"},"or ",Object(i.b)("inlineCode",{parentName:"li"},"year"),", ",Object(i.b)("inlineCode",{parentName:"li"},"month"),", ",Object(i.b)("inlineCode",{parentName:"li"},"day"),": number "))),Object(i.b)("li",{parentName:"ul"},"result: date")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'date(birthday) \n// date("2018-04-29")\n\ndate(date and time("2012-12-25T11:00:00"))\n// date("2012-12-25")\n\ndate(2012, 12, 25)\n// date("2012-12-25")\n')),Object(i.b)("h2",{id:"time"},"time()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"parameters:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"from"),": string / date-time"),Object(i.b)("li",{parentName:"ul"},"or ",Object(i.b)("inlineCode",{parentName:"li"},"hour"),", ",Object(i.b)("inlineCode",{parentName:"li"},"minute"),", ",Object(i.b)("inlineCode",{parentName:"li"},"second"),": number ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"(optional) ",Object(i.b)("inlineCode",{parentName:"li"},"offset"),": day-time-duration"))))),Object(i.b)("li",{parentName:"ul"},"result: time")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'time(lunchTime) \n// time("12:00:00")\n\ntime(date and time("2012-12-25T11:00:00"))\n// time("11:00:00")\n\ntime(23, 59, 0)\n// time("23:59:00")\n\ntime(14, 30, 0, duration("PT1H"))\n// time("15:30:00")\n')),Object(i.b)("h2",{id:"date-and-time"},"date and time()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"parameters:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"date"),": date / date-time"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"time"),": time"),Object(i.b)("li",{parentName:"ul"},"or ",Object(i.b)("inlineCode",{parentName:"li"},"from"),": string "))),Object(i.b)("li",{parentName:"ul"},"result: date-time")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'date and time(date("2012-12-24"),time("T23:59:00")) \n// date and time("2012-12-24T23:59:00")\n\ndate and time(date and time("2012-12-25T11:00:00"),time("T23:59:00"))\n// date and time("2012-12-25T23:59:00")\n\ndate and time(birthday) \n// date and time("2018-04-29T009:30:00")\n')),Object(i.b)("h2",{id:"duration"},"duration()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"parameters:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"from"),": string"))),Object(i.b)("li",{parentName:"ul"},"result: day-time-duration or year-month-duration")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'duration(weekDays)\n// duration("P5D")\n\nduration(age)\n// duration("P32Y")\n')),Object(i.b)("h2",{id:"years-and-months-duration"},"years and months duration()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"parameters:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"from"),": date"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"to"),": date"))),Object(i.b)("li",{parentName:"ul"},"result: year-month-duration")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'years and months duration(date("2011-12-22"), date("2013-08-24"))\n// duration("P1Y8M")\n')),Object(i.b)("h2",{id:"number"},"number()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"parameters:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"from"),": string"))),Object(i.b)("li",{parentName:"ul"},"result: number")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'number("1500.5") \n// 1500.5\n')),Object(i.b)("h2",{id:"string"},"string()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"parameters:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"from"),": any"))),Object(i.b)("li",{parentName:"ul"},"result: string")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'string(1.1) \n// "1.1"\n\nstring(date("2012-12-25"))\n// "2012-12-25"\n')))}u.isMDXComponent=!0}}]);