"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[8810],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),c=l,k=s["".concat(u,".").concat(c)]||s[c]||d[c]||i;return n?a.createElement(k,r(r({ref:t},m),{},{components:n})):a.createElement(k,r({ref:t},m))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const i={id:"feel-data-types",title:"Data Types"},r=void 0,o={unversionedId:"reference/language-guide/feel-data-types",id:"version-1.13/reference/language-guide/feel-data-types",title:"Data Types",description:"A value can have one of the following types.",source:"@site/versioned_docs/version-1.13/reference/language-guide/feel-data-types.md",sourceDirName:"reference/language-guide",slug:"/reference/language-guide/feel-data-types",permalink:"/feel-scala/docs/1.13/reference/language-guide/feel-data-types",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/versioned_docs/version-1.13/reference/language-guide/feel-data-types.md",tags:[],version:"1.13",frontMatter:{id:"feel-data-types",title:"Data Types"},sidebar:"version-1.13/Reference",previous:{title:"What is FEEL?",permalink:"/feel-scala/docs/1.13/reference/"},next:{title:"Unary-Tests",permalink:"/feel-scala/docs/1.13/reference/language-guide/feel-unary-tests"}},u={},p=[{value:"Null",id:"null",level:3},{value:"Number",id:"number",level:3},{value:"String",id:"string",level:3},{value:"Boolean",id:"boolean",level:3},{value:"Date",id:"date",level:3},{value:"Time",id:"time",level:3},{value:"Date-Time",id:"date-time",level:3},{value:"Day-Time-Duration",id:"day-time-duration",level:3},{value:"Year-Month-Duration",id:"year-month-duration",level:3},{value:"List",id:"list",level:3},{value:"Context",id:"context",level:3}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A value can have one of the following types."),(0,l.kt)("h3",{id:"null"},"Null"),(0,l.kt)("p",null,"Nothing, null or nil (i.e. the value is not present)."),(0,l.kt)("p",null,"Some operations/functions return ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," if an argument in not valid or types doesn't match."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Java Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"null"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"null\n")),(0,l.kt)("h3",{id:"number"},"Number"),(0,l.kt)("p",null,"A whole or floating point number."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"not-a-number (NaN), positive/negative infinity are represented as ",(0,l.kt)("inlineCode",{parentName:"li"},"null")),(0,l.kt)("li",{parentName:"ul"},"Java Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"java.math.BigDecimal"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"1\n2.3\n.4\n")),(0,l.kt)("h3",{id:"string"},"String"),(0,l.kt)("p",null,"A sequence of characters enclosed in double quotes ",(0,l.kt)("inlineCode",{parentName:"p"},'"'),". The sequence can also contain escaped characters starting with ",(0,l.kt)("inlineCode",{parentName:"p"},"\\")," (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"\\'"),", ",(0,l.kt)("inlineCode",{parentName:"p"},'\\"'),", ",(0,l.kt)("inlineCode",{parentName:"p"},"\\\\"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"\\n"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"\\r"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"\\t"),", unicode like ",(0,l.kt)("inlineCode",{parentName:"p"},"\\u269D")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"\\U101EF"),")."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Java Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"java.lang.String"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'"valid"\n')),(0,l.kt)("h3",{id:"boolean"},"Boolean"),(0,l.kt)("p",null,"A boolean value. It is either true or false. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Java Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"java.lang.Boolean"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"true\nfalse\n")),(0,l.kt)("h3",{id:"date"},"Date"),(0,l.kt)("p",null,"A date value without a time component."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Format: ",(0,l.kt)("inlineCode",{parentName:"li"},"yyyy-MM-dd"),"."),(0,l.kt)("li",{parentName:"ul"},"Java Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"java.time.LocalDate"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'date("2017-03-10")\n')),(0,l.kt)("h3",{id:"time"},"Time"),(0,l.kt)("p",null,"A local or zoned time. The time can have an offset or time zone id."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Format: ",(0,l.kt)("inlineCode",{parentName:"li"},"HH:mm:ss")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"HH:mm:ss+/-HH:mm")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"HH:mm:ss@ZoneId")),(0,l.kt)("li",{parentName:"ul"},"Java Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"java.time.LocalTime")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"java.time.OffsetTime"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'time("11:45:30") \ntime("13:30")\n\ntime("11:45:30+02:00")\n\ntime("10:31:10@Europe/Paris")\n')),(0,l.kt)("h3",{id:"date-time"},"Date-Time"),(0,l.kt)("p",null,"A date with a local or zoned time component. The time can have an offset or time zone id."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Format: ",(0,l.kt)("inlineCode",{parentName:"li"},"yyyy-MM-dd'T'HH:mm:ss")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"yyyy-MM-dd'T'HH:mm:ss+/-HH:mm")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"yyyy-MM-dd'T'HH:mm:ss@ZoneId")),(0,l.kt)("li",{parentName:"ul"},"Java Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"java.time.LocalDateTime")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"java.time.DateTime"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'date and time("2015-09-18T10:31:10")\n\ndate and time("2015-09-18T10:31:10+01:00")\n\ndate and time("2015-09-18T10:31:10@Europe/Paris")\n')),(0,l.kt)("h3",{id:"day-time-duration"},"Day-Time-Duration"),(0,l.kt)("p",null,"A duration based on seconds. It can contain days, hours, minutes and seconds."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Format: ",(0,l.kt)("inlineCode",{parentName:"li"},"PxDTxHxMxS")),(0,l.kt)("li",{parentName:"ul"},"Java Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"java.time.Duration"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'duration("P4D")\nduration("PT2H")\nduration("PT30M")\nduration("P1DT6H")\n')),(0,l.kt)("h3",{id:"year-month-duration"},"Year-Month-Duration"),(0,l.kt)("p",null,"A duration based on the calendar. It can contain years and months."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Format: ",(0,l.kt)("inlineCode",{parentName:"li"},"PxYxM")),(0,l.kt)("li",{parentName:"ul"},"Java Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"java.time.Period"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'duration("P2Y")\nduration("P6M")\nduration("P1Y6M")\n')),(0,l.kt)("h3",{id:"list"},"List"),(0,l.kt)("p",null,"A list of elements. Can be empty."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Java Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"java.util.List"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'[]\n[1,2,3]\n["a","b"]\n\n[["list"], "of", [["lists"]]]\n')),(0,l.kt)("h3",{id:"context"},"Context"),(0,l.kt)("p",null,"A list of key-value-pairs. Can be empty."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Java Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"java.util.Map"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'{}\n{"a": 1}\n{"b": 2, "c": "valid"}\n\n{"nested": {"d": 3}}\n')))}d.isMDXComponent=!0}}]);