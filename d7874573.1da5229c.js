(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{129:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),s=t(7),a=(t(0),t(145)),i={id:"what-is-feel",title:"What is FEEL?",slug:"/reference/"},o={unversionedId:"reference/what-is-feel",id:"version-1.11/reference/what-is-feel",isDocsHomePage:!1,title:"What is FEEL?",description:"FEEL (Friendly Enough Expression Language) is a part of the DMN specification of the OMG. It is designed to write expressions for decision tables and literal expressions in a simple way what can easily understand by business professionals and developers.",source:"@site/versioned_docs/version-1.11/reference/what-is-feel.md",slug:"/reference/",permalink:"/feel-scala/docs/1.11/reference/",editUrl:"https://github.com/camunda/feel-scala/edit/master/docs/versioned_docs/version-1.11/reference/what-is-feel.md",version:"1.11",sidebar:"version-1.11/Reference",next:{title:"Data Types",permalink:"/feel-scala/docs/1.11/reference/language-guide/feel-data-types"}},c=[{value:"Unary Tests vs. Expression",id:"unary-tests-vs-expression",children:[{value:"Unary Tests",id:"unary-tests",children:[]},{value:"Expression",id:"expression",children:[]}]}],p={toc:c};function l(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"FEEL (Friendly Enough Expression Language) is a part of the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.omg.org/spec/DMN/"}),"DMN specification")," of the OMG. It is designed to write expressions for decision tables and literal expressions in a simple way what can easily understand by business professionals and developers."),Object(a.b)("h2",{id:"unary-tests-vs-expression"},"Unary Tests vs. Expression"),Object(a.b)("p",null,"FEEL has two entry points: unary-tests and expressions. "),Object(a.b)("h3",{id:"unary-tests"},"Unary Tests"),Object(a.b)("p",null,"Unary-Tests can be used only for input entries of a decision table. They are a special kind of expression with a different grammar. The expression gets the value of the input expression implicitly as the first argument. The result of the expression must be either ",Object(a.b)("inlineCode",{parentName:"p"},"true")," or ",Object(a.b)("inlineCode",{parentName:"p"},"false"),"."),Object(a.b)("p",null,"Examples:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'< 7                                                 \n// input less than 7\n\nnot(2,4)                                            \n// input is not 2 or 4\n\n[date("2015-09-17")..date("2015-09-19")]            \n// input is between \'2015-09-17\' and \'2015-09-19\'\n\n<= duration("P1D")                                  \n// input is less or equal one day    \n')),Object(a.b)("h3",{id:"expression"},"Expression"),Object(a.b)("p",null,"Expressions can be used everywhere, e.g. in a decision table as input expression or output entry. An expression takes no implicit arguments like unary-tests."),Object(a.b)("p",null,"Examples:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'applicant.monthly.income * 12                                           \n\nif applicant.maritalStatus in ("M","S") then "valid" else "not valid"    \n\nsum( [applicant.monthly.repayments, applicant.monthly.expenses] )        \n\nsum( credit_history[record_date > date("2011-01-01")].weight )           \n\nsome ch in credit_history satisfies ch.event = "bankruptcy"      \n')))}l.isMDXComponent=!0},145:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),s=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=s.a.createContext({}),l=function(e){var n=s.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return s.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return s.a.createElement(s.a.Fragment,{},n)}},f=s.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),f=r,b=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return t?s.a.createElement(b,o(o({ref:n},p),{},{components:t})):s.a.createElement(b,o({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<a;p++)i[p]=t[p];return s.a.createElement.apply(null,i)}return s.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);