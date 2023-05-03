"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[1743],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),o=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=o(e.components);return l.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=o(n),k=a,d=c["".concat(p,".").concat(k)]||c[k]||m[k]||i;return n?l.createElement(d,s(s({ref:t},u),{},{components:n})):l.createElement(d,s({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=c;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var o=2;o<i;o++)s[o]=n[o];return l.createElement.apply(null,s)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3242:(e,t,n)=>{n.d(t,{Z:()=>a});var l=n(7294);const a=()=>l.createElement("p",null,l.createElement("span",{style:{backgroundColor:"#FC5D0D",borderRadius:"7px",color:"#fff",padding:"0.2rem",marginRight:"0.5rem"},title:"This feature is not part of the official DMN standard. It is an extension from Camunda's implementation."},"Camunda Extension"))},6439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var l=n(7462),a=(n(7294),n(3905)),i=n(3242);const s={id:"feel-built-in-functions-list",title:"List functions",description:"This document outlines built-in list functions and examples."},r=void 0,p={unversionedId:"reference/builtin-functions/feel-built-in-functions-list",id:"reference/builtin-functions/feel-built-in-functions-list",title:"List functions",description:"This document outlines built-in list functions and examples.",source:"@site/docs/reference/builtin-functions/feel-built-in-functions-list.md",sourceDirName:"reference/builtin-functions",slug:"/reference/builtin-functions/feel-built-in-functions-list",permalink:"/feel-scala/docs/next/reference/builtin-functions/feel-built-in-functions-list",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/docs/reference/builtin-functions/feel-built-in-functions-list.md",tags:[],version:"current",frontMatter:{id:"feel-built-in-functions-list",title:"List functions",description:"This document outlines built-in list functions and examples."},sidebar:"Reference",previous:{title:"Numeric functions",permalink:"/feel-scala/docs/next/reference/builtin-functions/feel-built-in-functions-numeric"},next:{title:"Context functions",permalink:"/feel-scala/docs/next/reference/builtin-functions/feel-built-in-functions-context"}},o={},u=[{value:"list contains(list, element)",id:"list-containslist-element",level:2},{value:"count(list)",id:"countlist",level:2},{value:"min(list)",id:"minlist",level:2},{value:"max(list)",id:"maxlist",level:2},{value:"sum(list)",id:"sumlist",level:2},{value:"product(list)",id:"productlist",level:2},{value:"mean(list)",id:"meanlist",level:2},{value:"median(list)",id:"medianlist",level:2},{value:"stddev(list)",id:"stddevlist",level:2},{value:"mode(list)",id:"modelist",level:2},{value:"all(list)",id:"alllist",level:2},{value:"any(list)",id:"anylist",level:2},{value:"sublist(list, start position)",id:"sublistlist-start-position",level:2},{value:"sublist(list, start position, length)",id:"sublistlist-start-position-length",level:2},{value:"append(list, items)",id:"appendlist-items",level:2},{value:"concatenate(lists)",id:"concatenatelists",level:2},{value:"insert before(list, position, newItem)",id:"insert-beforelist-position-newitem",level:2},{value:"remove(list, position)",id:"removelist-position",level:2},{value:"reverse(list)",id:"reverselist",level:2},{value:"index of(list, match)",id:"index-oflist-match",level:2},{value:"union(list)",id:"unionlist",level:2},{value:"distinct values(list)",id:"distinct-valueslist",level:2},{value:"flatten(list)",id:"flattenlist",level:2},{value:"sort(list, precedes)",id:"sortlist-precedes",level:2},{value:"string join(list)",id:"string-joinlist",level:2},{value:"string join(list, delimiter)",id:"string-joinlist-delimiter",level:2},{value:"string join(list, delimiter, prefix, suffix)",id:"string-joinlist-delimiter-prefix-suffix",level:2}],m={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"list-containslist-element"},"list contains(list, element)"),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if the given list contains the element. Otherwise, returns ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"list contains(list: list, element: Any): boolean\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"list contains([1,2,3], 2) \n// true\n")),(0,a.kt)("h2",{id:"countlist"},"count(list)"),(0,a.kt)("p",null,"Returns the number of elements of the given list."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"count(list: list): number\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"count([1,2,3]) \n// 3\n")),(0,a.kt)("h2",{id:"minlist"},"min(list)"),(0,a.kt)("p",null,"Returns the minimum of the given list."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"min(list: list): Any\n")),(0,a.kt)("p",null,"All elements in ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," should have the same type and be comparable. "),(0,a.kt)("p",null,"The parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," can be passed as a list or as a sequence of elements."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"min([1,2,3]) \n// 1\n\nmin(1,2,3) \n// 1\n")),(0,a.kt)("h2",{id:"maxlist"},"max(list)"),(0,a.kt)("p",null,"Returns the maximum of the given list."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"max(list: list): Any\n")),(0,a.kt)("p",null,"All elements in ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," should have the same type and be comparable."),(0,a.kt)("p",null,"The parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," can be passed as a list or as a sequence of elements."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"max([1,2,3]) \n// 3\n\nmax(1,2,3) \n// 3\n")),(0,a.kt)("h2",{id:"sumlist"},"sum(list)"),(0,a.kt)("p",null,"Returns the sum of the given list of numbers."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"sum(list: list<number>): number\n")),(0,a.kt)("p",null,"The parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," can be passed as a list or as a sequence of elements."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"sum([1,2,3]) \n// 6\n\nsum(1,2,3) \n// 6\n")),(0,a.kt)("h2",{id:"productlist"},"product(list)"),(0,a.kt)("p",null,"Returns the product of the given list of numbers."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"product(list: list<number>): number\n")),(0,a.kt)("p",null,"The parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," can be passed as a list or as a sequence of elements."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"product([2, 3, 4])\n// 24\n\nproduct(2, 3, 4)\n// 24\n")),(0,a.kt)("h2",{id:"meanlist"},"mean(list)"),(0,a.kt)("p",null,"Returns the arithmetic mean (i.e. average) of the given list of numbers."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"mean(list: list<number>): number\n")),(0,a.kt)("p",null,"The parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," can be passed as a list or as a sequence of elements."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"mean([1,2,3])\n// 2\n\nmean(1,2,3)\n// 2\n")),(0,a.kt)("h2",{id:"medianlist"},"median(list)"),(0,a.kt)("p",null,"Returns the median element of the given list of numbers."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"median(list: list<number>): number\n")),(0,a.kt)("p",null,"The parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," can be passed as a list or as a sequence of elements."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"median(8, 2, 5, 3, 4)\n// 4\n\nmedian([6, 1, 2, 3]) \n// 2.5\n")),(0,a.kt)("h2",{id:"stddevlist"},"stddev(list)"),(0,a.kt)("p",null,"Returns the standard deviation of the given list of numbers."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"stddev(list: list<number>): number\n")),(0,a.kt)("p",null,"The parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," can be passed as a list or as a sequence of elements."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"stddev(2, 4, 7, 5)\n// 2.0816659994661326\n\nstddev([2, 4, 7, 5])\n// 2.0816659994661326\n")),(0,a.kt)("h2",{id:"modelist"},"mode(list)"),(0,a.kt)("p",null,"Returns the mode of the given list of numbers."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"mode(list: list<number>): number\n")),(0,a.kt)("p",null,"The parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," can be passed as a list or as a sequence of elements."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"mode(6, 3, 9, 6, 6) \n// [6]\n\nmode([6, 1, 9, 6, 1]) \n// [1, 6]\n")),(0,a.kt)("h2",{id:"alllist"},"all(list)"),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," if any element of the given list is ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),". Otherwise, returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("p",null,"If the given list is empty, it returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"all(list: list<boolean>): boolean\n")),(0,a.kt)("p",null,"The parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," can be passed as a list or as a sequence of elements."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"and([true,false])\n// false\n\nand(false,null,true)\n// false\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The function ",(0,a.kt)("inlineCode",{parentName:"p"},"all()")," replaced the previous function ",(0,a.kt)("inlineCode",{parentName:"p"},"and()"),". The previous function is deprecated and\nshould not be used anymore.")),(0,a.kt)("h2",{id:"anylist"},"any(list)"),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if any element of the given list is ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". Otherwise, returns ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,"If the given list is empty, it returns ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"any(list: list<boolean>): boolean\n")),(0,a.kt)("p",null,"The parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," can be passed as a list or as a sequence of elements."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"or([false,true])\n// true\n\nor(false,null,true)\n// true\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The function ",(0,a.kt)("inlineCode",{parentName:"p"},"any()")," replaced the previous function ",(0,a.kt)("inlineCode",{parentName:"p"},"or()"),". The previous function is deprecated and\nshould not be used anymore.")),(0,a.kt)("h2",{id:"sublistlist-start-position"},"sublist(list, start position)"),(0,a.kt)("p",null,"Returns a partial list of the given value starting at ",(0,a.kt)("inlineCode",{parentName:"p"},"start position"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"sublist(list: list, start position: number): list\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"start position")," starts at the index ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),". The last position is ",(0,a.kt)("inlineCode",{parentName:"p"},"-1"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"sublist([1,2,3], 2)\n// [2,3]\n")),(0,a.kt)("h2",{id:"sublistlist-start-position-length"},"sublist(list, start position, length)"),(0,a.kt)("p",null,"Returns a partial list of the given value starting at ",(0,a.kt)("inlineCode",{parentName:"p"},"start position"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"sublist(list: list, start position: number, length: number): list\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"start position")," starts at the index ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),". The last position is ",(0,a.kt)("inlineCode",{parentName:"p"},"-1"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"sublist([1,2,3], 1, 2)\n// [1,2]\n")),(0,a.kt)("h2",{id:"appendlist-items"},"append(list, items)"),(0,a.kt)("p",null,"Returns the given list with all ",(0,a.kt)("inlineCode",{parentName:"p"},"items")," appended."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"append(list: list, items: Any): list\n")),(0,a.kt)("p",null,"The parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"items")," can be a single element or a sequence of elements."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"append([1], 2, 3)\n// [1,2,3]\n")),(0,a.kt)("h2",{id:"concatenatelists"},"concatenate(lists)"),(0,a.kt)("p",null,"Returns a list that includes all elements of the given lists."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"concatenate(lists: list): list\n")),(0,a.kt)("p",null,"The parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"lists")," is a sequence of lists."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"concatenate([1,2],[3]) \n// [1,2,3]\n\nconcatenate([1],[2],[3])\n// [1,2,3]\n")),(0,a.kt)("h2",{id:"insert-beforelist-position-newitem"},"insert before(list, position, newItem)"),(0,a.kt)("p",null,"Returns the given list with ",(0,a.kt)("inlineCode",{parentName:"p"},"newItem")," inserted at ",(0,a.kt)("inlineCode",{parentName:"p"},"position"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"insert before(list: list, position: number, newItem: Any): list\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"position")," starts at the index ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),". The last position is ",(0,a.kt)("inlineCode",{parentName:"p"},"-1"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"insert before([1,3],1,2) \n// [1,2,3]\n")),(0,a.kt)("h2",{id:"removelist-position"},"remove(list, position)"),(0,a.kt)("p",null,"Returns the given list without the element at ",(0,a.kt)("inlineCode",{parentName:"p"},"position"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"remove(list: list, position: number): list\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"position")," starts at the index ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),". The last position is ",(0,a.kt)("inlineCode",{parentName:"p"},"-1"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"remove([1,2,3], 2) \n// [1,3]\n")),(0,a.kt)("h2",{id:"reverselist"},"reverse(list)"),(0,a.kt)("p",null,"Returns the given list in revered order."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"reverse(list: list): list\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"reverse([1,2,3]) \n// [3,2,1]\n")),(0,a.kt)("h2",{id:"index-oflist-match"},"index of(list, match)"),(0,a.kt)("p",null,"Returns an ascending list of positions containing ",(0,a.kt)("inlineCode",{parentName:"p"},"match"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"index of(list: list, match: Any): list<number>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"index of([1,2,3,2],2) \n// [2,4]\n")),(0,a.kt)("h2",{id:"unionlist"},"union(list)"),(0,a.kt)("p",null,"Returns a list that includes all elements of the given lists without duplicates."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"union(list: list): list\n")),(0,a.kt)("p",null,"The parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," is a sequence of lists."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"union([1,2],[2,3])\n// [1,2,3]\n")),(0,a.kt)("h2",{id:"distinct-valueslist"},"distinct values(list)"),(0,a.kt)("p",null,"Returns the given list without duplicates."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"distinct values(list: list): list\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"distinct values([1,2,3,2,1])\n// [1,2,3]\n")),(0,a.kt)("h2",{id:"flattenlist"},"flatten(list)"),(0,a.kt)("p",null,"Returns a list that includes all elements of the given list without nested lists. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"flatten(list: list): list\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"flatten([[1,2],[[3]], 4])\n// [1,2,3,4]\n")),(0,a.kt)("h2",{id:"sortlist-precedes"},"sort(list, precedes)"),(0,a.kt)("p",null,"Returns the given list sorted by the ",(0,a.kt)("inlineCode",{parentName:"p"},"precedes")," function."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"sort(list: list, precedes: function<(Any, Any) -> boolean>): list\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"sort(list: [3,1,4,5,2], precedes: function(x,y) x < y) \n// [1,2,3,4,5]\n")),(0,a.kt)("h2",{id:"string-joinlist"},"string join(list)"),(0,a.kt)("p",null,"Joins a list of strings into a single string. This is similar to\nJava's ",(0,a.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/stream/Collectors.html#joining(java.lang.CharSequence,java.lang.CharSequence,java.lang.CharSequence)"},"joining"),"\nfunction."),(0,a.kt)("p",null,"If an item of the list is ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),", the item is ignored for the result string. If an item is\nneither a string nor ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),", the function returns ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," instead of a string."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"string join(list: list<string>): string\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'string join(["a","b","c"])\n// "abc"\n\nstring join(["a",null,"c"])\n// "ac"\n\nstring join([])\n// ""\n')),(0,a.kt)("h2",{id:"string-joinlist-delimiter"},"string join(list, delimiter)"),(0,a.kt)("p",null,"Joins a list of strings into a single string. This is similar to\nJava's ",(0,a.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/stream/Collectors.html#joining(java.lang.CharSequence,java.lang.CharSequence,java.lang.CharSequence)"},"joining"),"\nfunction."),(0,a.kt)("p",null,"If an item of the list is ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),", the item is ignored for the result string. If an item is\nneither a string nor ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),", the function returns ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," instead of a string."),(0,a.kt)("p",null,"The resulting string contains a ",(0,a.kt)("inlineCode",{parentName:"p"},"delimiter")," between each element."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"string join(list: list<string>, delimiter: string): string\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'string join(["a"], "X")\n// "a"\n\nstring join(["a","b","c"], ", ")\n// "a, b, c"\n')),(0,a.kt)("h2",{id:"string-joinlist-delimiter-prefix-suffix"},"string join(list, delimiter, prefix, suffix)"),(0,a.kt)(i.Z,{mdxType:"MarkerCamundaExtension"}),(0,a.kt)("p",null,"Joins a list of strings into a single string. This is similar to\nJava's ",(0,a.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/stream/Collectors.html#joining(java.lang.CharSequence,java.lang.CharSequence,java.lang.CharSequence)"},"joining"),"\nfunction."),(0,a.kt)("p",null,"If an item of the list is ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),", the item is ignored for the result string. If an item is\nneither a string nor ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),", the function returns ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," instead of a string."),(0,a.kt)("p",null,"The resulting string starts with ",(0,a.kt)("inlineCode",{parentName:"p"},"prefix"),", contains a ",(0,a.kt)("inlineCode",{parentName:"p"},"delimiter")," between each element, and ends\nwith ",(0,a.kt)("inlineCode",{parentName:"p"},"suffix"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"string join(list: list<string>, delimiter: string, prefix: string, suffix: string): string\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'string join(["a","b","c"], ", ", "[", "]")\n// "[a, b, c]"\n')))}c.isMDXComponent=!0}}]);