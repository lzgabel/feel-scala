(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(3),l=n(7),r=(n(0),n(145)),i={id:"feel-data-types",title:"Data Types"},c={unversionedId:"reference/language-guide/feel-data-types",id:"version-1.11/reference/language-guide/feel-data-types",isDocsHomePage:!1,title:"Data Types",description:"A value can have one of the following types.",source:"@site/versioned_docs/version-1.11/reference/language-guide/feel-data-types.md",slug:"/reference/language-guide/feel-data-types",permalink:"/feel-scala/docs/1.11/reference/language-guide/feel-data-types",editUrl:"https://github.com/camunda/feel-scala/edit/master/docs/versioned_docs/version-1.11/reference/language-guide/feel-data-types.md",version:"1.11",sidebar:"version-1.11/Reference",previous:{title:"What is FEEL?",permalink:"/feel-scala/docs/1.11/reference/"},next:{title:"Unary-Tests",permalink:"/feel-scala/docs/1.11/reference/language-guide/feel-unary-tests"}},b=[{value:"Null",id:"null",children:[]},{value:"Number",id:"number",children:[]},{value:"String",id:"string",children:[]},{value:"Boolean",id:"boolean",children:[]},{value:"Date",id:"date",children:[]},{value:"Time",id:"time",children:[]},{value:"Date-Time",id:"date-time",children:[]},{value:"Day-Time-Duration",id:"day-time-duration",children:[]},{value:"Year-Month-Duration",id:"year-month-duration",children:[]},{value:"List",id:"list",children:[]},{value:"Context",id:"context",children:[]}],o={toc:b};function u(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A value can have one of the following types."),Object(r.b)("h3",{id:"null"},"Null"),Object(r.b)("p",null,"Nothing, null or nil (i.e. the value is not present)."),Object(r.b)("p",null,"Some operations/functions return ",Object(r.b)("inlineCode",{parentName:"p"},"null")," if an argument in not valid or types doesn't match."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Java Type: ",Object(r.b)("inlineCode",{parentName:"li"},"null"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"null\n")),Object(r.b)("h3",{id:"number"},"Number"),Object(r.b)("p",null,"A whole or floating point number."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"not-a-number (NaN), positive/negative infinity are represented as ",Object(r.b)("inlineCode",{parentName:"li"},"null")),Object(r.b)("li",{parentName:"ul"},"Java Type: ",Object(r.b)("inlineCode",{parentName:"li"},"java.math.BigDecimal"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"1\n2.3\n.4\n")),Object(r.b)("h3",{id:"string"},"String"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Java Type: ",Object(r.b)("inlineCode",{parentName:"li"},"java.lang.String"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'"valid"\n')),Object(r.b)("h3",{id:"boolean"},"Boolean"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Java Type: ",Object(r.b)("inlineCode",{parentName:"li"},"java.lang.Boolean"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"true\nfalse\n")),Object(r.b)("h3",{id:"date"},"Date"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Format: ",Object(r.b)("inlineCode",{parentName:"li"},"yyyy-MM-dd"),"."),Object(r.b)("li",{parentName:"ul"},"Java Type: ",Object(r.b)("inlineCode",{parentName:"li"},"java.time.LocalDate"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'date("2017-03-10")\n')),Object(r.b)("h3",{id:"time"},"Time"),Object(r.b)("p",null,"A local or zoned time. The time can have an offset or time zone id."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Format: ",Object(r.b)("inlineCode",{parentName:"li"},"HH:mm:ss")," / ",Object(r.b)("inlineCode",{parentName:"li"},"HH:mm:ss+/-HH:mm")," / ",Object(r.b)("inlineCode",{parentName:"li"},"HH:mm:ss@ZoneId")),Object(r.b)("li",{parentName:"ul"},"Java Type: ",Object(r.b)("inlineCode",{parentName:"li"},"java.time.LocalTime")," / ",Object(r.b)("inlineCode",{parentName:"li"},"java.time.OffsetTime"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'time("11:45:30") \ntime("13:30")\n\ntime("11:45:30+02:00")\n\ntime("10:31:10@Europe/Paris")\n')),Object(r.b)("h3",{id:"date-time"},"Date-Time"),Object(r.b)("p",null,"A date with a local or zoned time component. The time can have an offset or time zone id."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Format: ",Object(r.b)("inlineCode",{parentName:"li"},"yyyy-MM-dd'T'HH:mm:ss")," / ",Object(r.b)("inlineCode",{parentName:"li"},"yyyy-MM-dd'T'HH:mm:ss+/-HH:mm")," / ",Object(r.b)("inlineCode",{parentName:"li"},"yyyy-MM-dd'T'HH:mm:ss@ZoneId")),Object(r.b)("li",{parentName:"ul"},"Java Type: ",Object(r.b)("inlineCode",{parentName:"li"},"java.time.LocalDateTime")," / ",Object(r.b)("inlineCode",{parentName:"li"},"java.time.DateTime"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'date and time("2015-09-18T10:31:10")\n\ndate and time("2015-09-18T10:31:10+01:00")\n\ndate and time("2015-09-18T10:31:10@Europe/Paris")\n')),Object(r.b)("h3",{id:"day-time-duration"},"Day-Time-Duration"),Object(r.b)("p",null,"A duration based on seconds. It can contain days, hours, minutes and seconds."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Format: ",Object(r.b)("inlineCode",{parentName:"li"},"PxDTxHxMxS")),Object(r.b)("li",{parentName:"ul"},"Java Type: ",Object(r.b)("inlineCode",{parentName:"li"},"java.time.Duration"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'duration("P4D")\nduration("PT2H")\nduration("PT30M")\nduration("P1DT6H")\n')),Object(r.b)("h3",{id:"year-month-duration"},"Year-Month-Duration"),Object(r.b)("p",null,"A duration based on the calendar. It can contain years and months."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Format: ",Object(r.b)("inlineCode",{parentName:"li"},"PxYxM")),Object(r.b)("li",{parentName:"ul"},"Java Type: ",Object(r.b)("inlineCode",{parentName:"li"},"java.time.Period"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'duration("P2Y")\nduration("P6M")\nduration("P1Y6M")\n')),Object(r.b)("h3",{id:"list"},"List"),Object(r.b)("p",null,"A list of elements. Can be empty."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Java Type: ",Object(r.b)("inlineCode",{parentName:"li"},"java.util.List"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'[]\n[1,2,3]\n["a","b"]\n\n[["list"], "of", [["lists"]]]\n')),Object(r.b)("h3",{id:"context"},"Context"),Object(r.b)("p",null,"A list of key-value-pairs. Can be empty."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Java Type: ",Object(r.b)("inlineCode",{parentName:"li"},"java.util.Map"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{}\n{"a": 1}\n{"b": 2, "c": "valid"}\n\n{"nested": {"d": 3}}\n')))}u.isMDXComponent=!0},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=l.a.createContext({}),u=function(e){var t=l.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return l.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,s=d["".concat(i,".").concat(m)]||d[m]||p[m]||r;return n?l.a.createElement(s,c(c({ref:t},o),{},{components:n})):l.a.createElement(s,c({ref:t},o))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var o=2;o<r;o++)i[o]=n[o];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);