(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{145:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,O=u["".concat(l,".").concat(d)]||u[d]||s[d]||i;return n?r.a.createElement(O,c(c({ref:t},o),{},{components:n})):r.a.createElement(O,c({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<i;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(145)),l={id:"feel-unary-tests",title:"Unary-Tests"},c={unversionedId:"reference/language-guide/feel-unary-tests",id:"reference/language-guide/feel-unary-tests",isDocsHomePage:!1,title:"Unary-Tests",description:"Unary-Tests can be used only for input entries of a decision table. They are a special kind of expression with additional operators. The operators get the value of the input expression implicitly as the first argument.",source:"@site/docs/reference/language-guide/feel-unary-tests.md",slug:"/reference/language-guide/feel-unary-tests",permalink:"/feel-scala/docs/reference/language-guide/feel-unary-tests",editUrl:"https://github.com/camunda/feel-scala/edit/master/docs/docs/reference/language-guide/feel-unary-tests.md",version:"current",sidebar:"Reference",previous:{title:"Data Types",permalink:"/feel-scala/docs/reference/language-guide/feel-data-types"},next:{title:"Expressions",permalink:"/feel-scala/docs/reference/language-guide/feel-expression"}},b=[{value:"Comparison",id:"comparison",children:[]},{value:"Interval",id:"interval",children:[]},{value:"Disjunction",id:"disjunction",children:[]},{value:"Negation",id:"negation",children:[]},{value:"Expression",id:"expression",children:[]}],o={toc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Unary-Tests can be used only for input entries of a decision table. They are a special kind of expression with additional operators. The operators get the value of the input expression implicitly as the first argument. "),Object(i.b)("p",null,"The result of the expression must be either ",Object(i.b)("inlineCode",{parentName:"p"},"true")," or ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"."),Object(i.b)("p",null,"An unary-tests expression is ",Object(i.b)("inlineCode",{parentName:"p"},"true")," if one of the following conditions is fulfilled:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the expression evaluates to ",Object(i.b)("inlineCode",{parentName:"li"},"true")," when the input value is applied to it"),Object(i.b)("li",{parentName:"ul"},"the expression evaluates to a list and the input value is equal to at least one of the values in that list"),Object(i.b)("li",{parentName:"ul"},"the expression evaluates to a value and the input value is equal to that value ")),Object(i.b)("h3",{id:"comparison"},"Comparison"),Object(i.b)("p",null,"Compare the input value to ",Object(i.b)("inlineCode",{parentName:"p"},"x"),"."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"operator"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"symbol"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"example"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"equal to"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"(none)"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},'"valid"'))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"less than"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"<")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"< 10"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"less than or equal"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"<=")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"<= 10"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"greater than"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},">")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"> 10"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"greater than or equal"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},">=")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},">= 10"))))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"less than/greater than are only supported for: ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"number"),Object(i.b)("li",{parentName:"ul"},"date"),Object(i.b)("li",{parentName:"ul"},"time"),Object(i.b)("li",{parentName:"ul"},"date-time"),Object(i.b)("li",{parentName:"ul"},"year-month-duration"),Object(i.b)("li",{parentName:"ul"},"day-time-duration ")))),Object(i.b)("h3",{id:"interval"},"Interval"),Object(i.b)("p",null,"Test if the input value is within the interval ",Object(i.b)("inlineCode",{parentName:"p"},"x")," and ",Object(i.b)("inlineCode",{parentName:"p"},"y"),"."),Object(i.b)("p",null,"An interval can be open ",Object(i.b)("inlineCode",{parentName:"p"},"(x..y)")," / ",Object(i.b)("inlineCode",{parentName:"p"},"]x..y[")," or closed ",Object(i.b)("inlineCode",{parentName:"p"},"[x..y]"),". If the interval is open then the value is not included."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"(2..5)\n// input > 2 and input < 5\n\n[2..5]\n// input >= 2 and input <= 5\n\n(2..5]\n// input > 2 and input <= 5\n")),Object(i.b)("h3",{id:"disjunction"},"Disjunction"),Object(i.b)("p",null,"Test if at least of the expressions is ",Object(i.b)("inlineCode",{parentName:"p"},"true"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"2, 3, 4\n// input = 2 or input = 3 or input = 4\n\n< 10, > 50\n// input < 10 or input > 50\n")),Object(i.b)("h3",{id:"negation"},"Negation"),Object(i.b)("p",null,"Test if the expression is ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'not("valid")\n// input != "valid"\n\nnot(2, 3)             \n// input != 2 and input != 3 \n')),Object(i.b)("h3",{id:"expression"},"Expression"),Object(i.b)("p",null,"It is also possible to use a boolean ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"feel-expression"}),"expression")," instead of an operator. For example, invoking a built-in function."),Object(i.b)("p",null,"The input value can be accessed by the special variable ",Object(i.b)("inlineCode",{parentName:"p"},"?"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'ends with(?, "@camunda.com")\n// test if the input value (string) ends with "@camunda.com"\n\nlist contains(?, "invalid")\n// test if the input value (list) contains "invalid"\n')))}p.isMDXComponent=!0}}]);