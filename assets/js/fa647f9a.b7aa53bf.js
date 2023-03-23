"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[2066],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=o(n),k=a,g=c["".concat(u,".").concat(k)]||c[k]||m[k]||l;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3242:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294);const a=()=>r.createElement("p",null,r.createElement("span",{style:{backgroundColor:"#FC5D0D",borderRadius:"7px",color:"#fff",padding:"0.2rem",marginRight:"0.5rem"},title:"This feature is not part of the official DMN standard. It is an extension from Camunda's implementation."},"Camunda Extension"))},3504:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),l=n(3242);const i={id:"feel-built-in-functions-string",title:"String functions",description:"This document outlines built-in string functions and examples."},s=void 0,u={unversionedId:"reference/builtin-functions/feel-built-in-functions-string",id:"version-1.15/reference/builtin-functions/feel-built-in-functions-string",title:"String functions",description:"This document outlines built-in string functions and examples.",source:"@site/versioned_docs/version-1.15/reference/builtin-functions/feel-built-in-functions-string.md",sourceDirName:"reference/builtin-functions",slug:"/reference/builtin-functions/feel-built-in-functions-string",permalink:"/feel-scala/docs/1.15/reference/builtin-functions/feel-built-in-functions-string",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/versioned_docs/version-1.15/reference/builtin-functions/feel-built-in-functions-string.md",tags:[],version:"1.15",frontMatter:{id:"feel-built-in-functions-string",title:"String functions",description:"This document outlines built-in string functions and examples."},sidebar:"version-1.15/Reference",previous:{title:"Boolean functions",permalink:"/feel-scala/docs/1.15/reference/builtin-functions/feel-built-in-functions-boolean"},next:{title:"Numeric functions",permalink:"/feel-scala/docs/1.15/reference/builtin-functions/feel-built-in-functions-numeric"}},o={},p=[{value:"substring()",id:"substring",level:2},{value:"string length()",id:"string-length",level:2},{value:"upper case()",id:"upper-case",level:2},{value:"lower case()",id:"lower-case",level:2},{value:"substring before()",id:"substring-before",level:2},{value:"substring after()",id:"substring-after",level:2},{value:"contains()",id:"contains",level:2},{value:"starts with()",id:"starts-with",level:2},{value:"ends with()",id:"ends-with",level:2},{value:"matches()",id:"matches",level:2},{value:"replace()",id:"replace",level:2},{value:"split()",id:"split",level:2},{value:"extract()",id:"extract",level:2}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"substring"},"substring()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string"),": string"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"start position"),": number"),(0,a.kt)("li",{parentName:"ul"},"(optional) ",(0,a.kt)("inlineCode",{parentName:"li"},"length"),": number"))),(0,a.kt)("li",{parentName:"ul"},"result: string")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'substring("foobar",3) \n// "obar"\n\nsubstring("foobar",3,3) \n// "oba"\n')),(0,a.kt)("h2",{id:"string-length"},"string length()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string"),": string"))),(0,a.kt)("li",{parentName:"ul"},"result: number")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'string length("foo") \n// 3\n')),(0,a.kt)("h2",{id:"upper-case"},"upper case()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string"),": string"))),(0,a.kt)("li",{parentName:"ul"},"result: string")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'upper case("aBc4") \n// "ABC4"\n')),(0,a.kt)("h2",{id:"lower-case"},"lower case()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string"),": string"))),(0,a.kt)("li",{parentName:"ul"},"result: string")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'lower case("aBc4") \n// "abc4"\n')),(0,a.kt)("h2",{id:"substring-before"},"substring before()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string"),": string"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"match"),": string"))),(0,a.kt)("li",{parentName:"ul"},"result: string")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'substring before("foobar", "bar") \n// "foo"\n')),(0,a.kt)("h2",{id:"substring-after"},"substring after()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string"),": string"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"match"),": string"))),(0,a.kt)("li",{parentName:"ul"},"result: string")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'substring after("foobar", "ob") \n// "ar"\n')),(0,a.kt)("h2",{id:"contains"},"contains()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string"),": string"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"match"),": string"))),(0,a.kt)("li",{parentName:"ul"},"result: boolean")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'contains("foobar", "of") \n// false\n')),(0,a.kt)("h2",{id:"starts-with"},"starts with()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"input"),": string"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"match"),": string"))),(0,a.kt)("li",{parentName:"ul"},"result: boolean")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'starts with("foobar", "fo") \n// true\n')),(0,a.kt)("h2",{id:"ends-with"},"ends with()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"input"),": string"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"match"),": string"))),(0,a.kt)("li",{parentName:"ul"},"result: boolean")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'ends with("foobar", "r") \n// true\n')),(0,a.kt)("h2",{id:"matches"},"matches()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"input"),": string"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pattern"),": string (regular expression)"))),(0,a.kt)("li",{parentName:"ul"},"result: boolean")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'matches("foobar", "^fo*bar") \n// true\n')),(0,a.kt)("h2",{id:"replace"},"replace()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"input"),": string"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pattern"),": string (regular expression)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"replacement"),": string (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"$1")," returns the first match group)"),(0,a.kt)("li",{parentName:"ul"},"(optional) ",(0,a.kt)("inlineCode",{parentName:"li"},"flags"),': string ("s", "m", "i", "x")'))),(0,a.kt)("li",{parentName:"ul"},"result: string")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'replace("abcd", "(ab)|(a)", "[1=$1][2=$2]")\n// "[1=ab][2=]cd"\n\nreplace("0123456789", "(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3")\n// "(012) 345-6789"\n')),(0,a.kt)("h2",{id:"split"},"split()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string"),": string"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"delimiter"),": string (regular expression)"))),(0,a.kt)("li",{parentName:"ul"},"result: list of strings")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'split("John Doe", "\\s" ) \n// ["John", "Doe"]\n\nsplit("a;b;c;;", ";")\n// ["a", "b", "c", "", ""]\n')),(0,a.kt)("h2",{id:"extract"},"extract()"),(0,a.kt)(l.Z,{mdxType:"MarkerCamundaExtension"}),(0,a.kt)("p",null,"Returns all matches of the pattern in the given string. Returns an empty list if the pattern doesn't\nmatch."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string"),": string"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pattern"),": string (regular expression)"))),(0,a.kt)("li",{parentName:"ul"},"result: list of strings")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'extract("references are 1234, 1256, 1378", "12[0-9]*")\n// ["1234","1256"]\n')))}c.isMDXComponent=!0}}]);