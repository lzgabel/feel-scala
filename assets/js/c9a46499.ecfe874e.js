"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[63],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=p(t),d=s,y=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return t?r.createElement(y,i(i({ref:n},c),{},{components:t})):r.createElement(y,i({ref:n},c))}));function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,i=new Array(a);i[0]=f;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2188:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=t(7462),s=(t(7294),t(3905));const a={id:"what-is-feel",title:"What is FEEL?",slug:"/reference/"},i=void 0,o={unversionedId:"reference/what-is-feel",id:"version-1.12/reference/what-is-feel",title:"What is FEEL?",description:"FEEL (Friendly Enough Expression Language) is a part of the DMN specification of the OMG. It is designed to write expressions for decision tables and literal expressions in a simple way what can easily understand by business professionals and developers.",source:"@site/versioned_docs/version-1.12/reference/what-is-feel.md",sourceDirName:"reference",slug:"/reference/",permalink:"/feel-scala/docs/1.12/reference/",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/versioned_docs/version-1.12/reference/what-is-feel.md",tags:[],version:"1.12",frontMatter:{id:"what-is-feel",title:"What is FEEL?",slug:"/reference/"},sidebar:"version-1.12/Reference",next:{title:"Data Types",permalink:"/feel-scala/docs/1.12/reference/language-guide/feel-data-types"}},l={},p=[{value:"Unary Tests vs. Expression",id:"unary-tests-vs-expression",level:2},{value:"Unary Tests",id:"unary-tests",level:3},{value:"Expression",id:"expression",level:3}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"FEEL (Friendly Enough Expression Language) is a part of the ",(0,s.kt)("a",{parentName:"p",href:"http://www.omg.org/spec/DMN/"},"DMN specification")," of the OMG. It is designed to write expressions for decision tables and literal expressions in a simple way what can easily understand by business professionals and developers."),(0,s.kt)("h2",{id:"unary-tests-vs-expression"},"Unary Tests vs. Expression"),(0,s.kt)("p",null,"FEEL has two entry points: unary-tests and expressions. "),(0,s.kt)("h3",{id:"unary-tests"},"Unary Tests"),(0,s.kt)("p",null,"Unary-Tests can be used only for input entries of a decision table. They are a special kind of expression with a different grammar. The expression gets the value of the input expression implicitly as the first argument. The result of the expression must be either ",(0,s.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,s.kt)("p",null,"Examples:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'< 7                                                 \n// input less than 7\n\nnot(2,4)                                            \n// input is not 2 or 4\n\n[date("2015-09-17")..date("2015-09-19")]            \n// input is between \'2015-09-17\' and \'2015-09-19\'\n\n<= duration("P1D")                                  \n// input is less or equal one day    \n')),(0,s.kt)("h3",{id:"expression"},"Expression"),(0,s.kt)("p",null,"Expressions can be used everywhere, e.g. in a decision table as input expression or output entry. An expression takes no implicit arguments like unary-tests."),(0,s.kt)("p",null,"Examples:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'applicant.monthly.income * 12                                           \n\nif applicant.maritalStatus in ("M","S") then "valid" else "not valid"    \n\nsum( [applicant.monthly.repayments, applicant.monthly.expenses] )        \n\nsum( credit_history[record_date > date("2011-01-01")].weight )           \n\nsome ch in credit_history satisfies ch.event = "bankruptcy"      \n')))}u.isMDXComponent=!0}}]);