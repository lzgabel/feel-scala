(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),l=n(7),r=(n(0),n(145)),b={id:"feel-built-in-functions-list",title:"List Functions"},i={unversionedId:"reference/builtin-functions/feel-built-in-functions-list",id:"reference/builtin-functions/feel-built-in-functions-list",isDocsHomePage:!1,title:"List Functions",description:"list contains()",source:"@site/docs/reference/builtin-functions/feel-built-in-functions-list.md",slug:"/reference/builtin-functions/feel-built-in-functions-list",permalink:"/feel-scala/docs/reference/builtin-functions/feel-built-in-functions-list",editUrl:"https://github.com/camunda/feel-scala/edit/master/docs/docs/reference/builtin-functions/feel-built-in-functions-list.md",version:"current",sidebar:"Reference",previous:{title:"Numeric Functions",permalink:"/feel-scala/docs/reference/builtin-functions/feel-built-in-functions-numeric"},next:{title:"Context Functions",permalink:"/feel-scala/docs/reference/builtin-functions/feel-built-in-functions-context"}},c=[{value:"list contains()",id:"list-contains",children:[]},{value:"count()",id:"count",children:[]},{value:"min()",id:"min",children:[]},{value:"max()",id:"max",children:[]},{value:"sum()",id:"sum",children:[]},{value:"product()",id:"product",children:[]},{value:"mean()",id:"mean",children:[]},{value:"median()",id:"median",children:[]},{value:"stddev()",id:"stddev",children:[]},{value:"mode()",id:"mode",children:[]},{value:"and() / all()",id:"and--all",children:[]},{value:"or() / any()",id:"or--any",children:[]},{value:"sublist()",id:"sublist",children:[]},{value:"append()",id:"append",children:[]},{value:"concatenate()",id:"concatenate",children:[]},{value:"insert before()",id:"insert-before",children:[]},{value:"remove()",id:"remove",children:[]},{value:"reverse()",id:"reverse",children:[]},{value:"index of()",id:"index-of",children:[]},{value:"union()",id:"union",children:[]},{value:"distinct values()",id:"distinct-values",children:[]},{value:"flatten()",id:"flatten",children:[]},{value:"sort()",id:"sort",children:[]}],u={toc:c};function s(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"list-contains"},"list contains()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"parameters:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"list"),": list"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"element"),": any"))),Object(r.b)("li",{parentName:"ul"},"result: boolean")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"list contains([1,2,3], 2) \n// true\n")),Object(r.b)("h2",{id:"count"},"count()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"parameters:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"list"),": list"))),Object(r.b)("li",{parentName:"ul"},"result: number")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"count([1,2,3]) \n// 3\n")),Object(r.b)("h2",{id:"min"},"min()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"parameters:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"list"),": list of numbers"),Object(r.b)("li",{parentName:"ul"},"or numbers as varargs"))),Object(r.b)("li",{parentName:"ul"},"result: number")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"min([1,2,3]) \n// 1\n\nmin(1,2,3) \n// 1\n")),Object(r.b)("h2",{id:"max"},"max()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"parameters:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"list"),": list of numbers"),Object(r.b)("li",{parentName:"ul"},"or numbers as varargs"))),Object(r.b)("li",{parentName:"ul"},"result: number")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"min([1,2,3]) \n// 3\n\nmin(1,2,3) \n// 3\n")),Object(r.b)("h2",{id:"sum"},"sum()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"parameters:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"list"),": list of numbers"),Object(r.b)("li",{parentName:"ul"},"or numbers as varargs"))),Object(r.b)("li",{parentName:"ul"},"result: number")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"min([1,2,3]) \n// 6\n\nmin(1,2,3) \n// 6\n")),Object(r.b)("h2",{id:"product"},"product()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"parameters:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"list"),": list of numbers"),Object(r.b)("li",{parentName:"ul"},"or numbers as varargs"))),Object(r.b)("li",{parentName:"ul"},"result: number")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"product([2, 3, 4])\n// 24\n\nproduct(2, 3, 4)\n// 24\n")),Object(r.b)("h2",{id:"mean"},"mean()"),Object(r.b)("p",null,"Returns the arithmetic mean (i.e. average)."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"parameters:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"list"),": list of numbers"),Object(r.b)("li",{parentName:"ul"},"or numbers as varargs"))),Object(r.b)("li",{parentName:"ul"},"result: number")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"mean([1,2,3])\n// 2\n\nmean(1,2,3)\n// 2\n")),Object(r.b)("h2",{id:"median"},"median()"),Object(r.b)("p",null,"Returns the median element of the list of numbers."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"parameters:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"list"),": list of numbers"),Object(r.b)("li",{parentName:"ul"},"or numbers as varargs"))),Object(r.b)("li",{parentName:"ul"},"result: number")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"median(8, 2, 5, 3, 4)\n// 4\n\nmedian([6, 1, 2, 3]) \n// 2.5\n")),Object(r.b)("h2",{id:"stddev"},"stddev()"),Object(r.b)("p",null,"Returns the standard deviation."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"parameters:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"list"),": list of numbers"),Object(r.b)("li",{parentName:"ul"},"or numbers as varargs"))),Object(r.b)("li",{parentName:"ul"},"result: number")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"stddev(2, 4, 7, 5)\n// 2.0816659994661326\n\nstddev([2, 4, 7, 5])\n// 2.0816659994661326\n")),Object(r.b)("h2",{id:"mode"},"mode()"),Object(r.b)("p",null,"Returns the mode of the list of numbers."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"parameters:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"list"),": list of numbers"),Object(r.b)("li",{parentName:"ul"},"or numbers as varargs"))),Object(r.b)("li",{parentName:"ul"},"result: list of numbers")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"mode(6, 3, 9, 6, 6) \n// [6]\n\nmode([6, 1, 9, 6, 1]) \n// [1, 6]\n")),Object(r.b)("h2",{id:"and--all"},"and() / all()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"parameters:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"list"),": list of booleans"),Object(r.b)("li",{parentName:"ul"},"or booleans as varargs"))),Object(r.b)("li",{parentName:"ul"},"result: boolean")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"and([true,false])\n// false\n\nand(false,null,true)\n// false\n")),Object(r.b)("h2",{id:"or--any"},"or() / any()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"parameters:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"list"),": list of booleans"),Object(r.b)("li",{parentName:"ul"},"or booleans as varargs"))),Object(r.b)("li",{parentName:"ul"},"result: boolean")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"or([false,true])\n// true\n\nor(false,null,true)\n// true\n")),Object(r.b)("h2",{id:"sublist"},"sublist()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"parameters:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"list"),": list"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"start position"),": number"),Object(r.b)("li",{parentName:"ul"},"(optional) ",Object(r.b)("inlineCode",{parentName:"li"},"length"),": number"))),Object(r.b)("li",{parentName:"ul"},"result: list")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"sublist([1,2,3], 2)\n// [2,3]\n\nsublist([1,2,3], 1, 2)\n// [1,2]\n")),Object(r.b)("h2",{id:"append"},"append()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"parameters:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"list"),": list"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"items"),": elements as varargs"))),Object(r.b)("li",{parentName:"ul"},"result: list")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"append([1], 2, 3)\n// [1,2,3]\n")),Object(r.b)("h2",{id:"concatenate"},"concatenate()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"parameters:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"lists"),": lists as varargs"))),Object(r.b)("li",{parentName:"ul"},"result: list")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"concatenate([1,2],[3]) \n// [1,2,3]\n\nconcatenate([1],[2],[3])\n// [1,2,3]\n")),Object(r.b)("h2",{id:"insert-before"},"insert before()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"parameters:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"list"),": list"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"position"),": number"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"newItem"),": any"))),Object(r.b)("li",{parentName:"ul"},"result: list")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"insert before([1,3],1,2) \n// [1,2,3]\n")),Object(r.b)("h2",{id:"remove"},"remove()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"parameters:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"list"),": list"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"position"),": number"))),Object(r.b)("li",{parentName:"ul"},"result: list")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"remove([1,2,3], 2) \n// [1,3]\n")),Object(r.b)("h2",{id:"reverse"},"reverse()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"parameters:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"list"),": list"))),Object(r.b)("li",{parentName:"ul"},"result: list")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"reverse([1,2,3]) \n// [3,2,1]\n")),Object(r.b)("h2",{id:"index-of"},"index of()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"parameters:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"list"),": list"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"match"),": any"))),Object(r.b)("li",{parentName:"ul"},"result: list of numbers")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"index of([1,2,3,2],2) \n// [2,4]\n")),Object(r.b)("h2",{id:"union"},"union()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"parameters:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"lists"),": lists as varargs"))),Object(r.b)("li",{parentName:"ul"},"result: list")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"union([1,2],[2,3])\n// [1,2,3]\n")),Object(r.b)("h2",{id:"distinct-values"},"distinct values()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"parameters:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"list"),": list"))),Object(r.b)("li",{parentName:"ul"},"result: list")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"distinct values([1,2,3,2,1])\n// [1,2,3]\n")),Object(r.b)("h2",{id:"flatten"},"flatten()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"parameters:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"list"),": list"))),Object(r.b)("li",{parentName:"ul"},"result: list")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"flatten([[1,2],[[3]], 4])\n// [1,2,3,4]\n")),Object(r.b)("h2",{id:"sort"},"sort()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"parameters:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"list"),": list "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"precedes"),": function with two arguments and boolean result"))),Object(r.b)("li",{parentName:"ul"},"result: list")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"sort(list: [3,1,4,5,2], precedes: function(x,y) x < y) \n// [1,2,3,4,5]\n")))}s.isMDXComponent=!0},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return o}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=l.a.createContext({}),s=function(e){var t=l.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return l.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},j=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,b=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),j=a,o=m["".concat(b,".").concat(j)]||m[j]||p[j]||r;return n?l.a.createElement(o,i(i({ref:t},u),{},{components:n})):l.a.createElement(o,i({ref:t},u))}));function o(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,b=new Array(r);b[0]=j;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var u=2;u<r;u++)b[u]=n[u];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);