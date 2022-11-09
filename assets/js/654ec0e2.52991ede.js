"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[9377],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(o,".").concat(d)]||m[d]||u[d]||s;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<s;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const s={id:"list-samples",title:"List Samples"},l=void 0,i={unversionedId:"samples/list-samples",id:"samples/list-samples",title:"List Samples",description:"Filter a List and Return the First Element",source:"@site/docs/samples/list-samples.md",sourceDirName:"samples",slug:"/samples/list-samples",permalink:"/feel-scala/docs/samples/list-samples",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/docs/samples/list-samples.md",tags:[],version:"current",frontMatter:{id:"list-samples",title:"List Samples"},sidebar:"Samples",previous:{title:"Temporal Samples",permalink:"/feel-scala/docs/samples/temporal-samples"},next:{title:"Context Samples",permalink:"/feel-scala/docs/samples/context-samples"}},o={},p=[{value:"Filter a List and Return the First Element",id:"filter-a-list-and-return-the-first-element",level:2},{value:"Group a List",id:"group-a-list",level:2},{value:"Merge two Lists",id:"merge-two-lists",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"filter-a-list-and-return-the-first-element"},"Filter a List and Return the First Element"),(0,a.kt)("p",null,'Return the first packaging element which unit is "Palette".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'(data.attribute.packaging[unit = "Palette"])[1]\n')),(0,a.kt)("h2",{id:"group-a-list"},"Group a List"),(0,a.kt)("p",null,"Group the given list of invoices by their person. "),(0,a.kt)("p",null,"Each invoice has a person. The persons are extracted from the invoices and are used as a filter for the list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"for p in distinct values(invoices.person) return invoices[person = p]\n")),(0,a.kt)("p",null,"Input:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{"invoices":[\n  {"id":1, "person":"A", "amount": 10},\n  {"id":2, "person":"A", "amount": 20},\n  {"id":3, "person":"A", "amount": 30},\n  {"id":4, "person":"A", "amount": 40},\n  {"id":5, "person":"B", "amount": 15},\n  {"id":6, "person":"B", "amount": 25}\n]}\n')),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'[\n  [\n    {"id":1, "person":"A", "amount": 10},\n    {"id":2, "person":"A", "amount": 20},\n    {"id":3, "person":"A", "amount": 30},\n    {"id":4, "person":"A", "amount": 40}\n  ],\n  [\n    {"id":5, "person":"B", "amount": 15},\n    {"id":6, "person":"B", "amount": 25}\n  ]\n]\n')),(0,a.kt)("h2",{id:"merge-two-lists"},"Merge two Lists"),(0,a.kt)("p",null,'Merge two given lists. Each list contains context values with the same structure. Each context has\nan entry "id" that identifies the value.'),(0,a.kt)("p",null,"The result is a list that contains all context values grouped by the identifier."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"}," {\n   ids: union(x.files.id,y.files.id),\n   getById: function (files,fileId) \n     if (count(files[id=fileId]) > 0) \n     then files[id=fileId][1] \n     else {},\n   merge: for id in ids return put all(getById(x.files, id), getById(y.files, id))\n }.merge\n")),(0,a.kt)("p",null,"Input:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "x": {"files": [\n    {"id":1, "content":"a"},\n    {"id":2, "content":"b"}\n  ]},\n  "y": {"files": [\n    {"id":1, "content":"a2"},\n    {"id":3, "content":"c"}\n  ]} \n }\n')),(0,a.kt)("p",null,"Output: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'[\n  {"id":1, "content":"a2"},\n  {"id":2, "content":"b"},\n  {"id":3, "content":"c"}\n]\n')))}u.isMDXComponent=!0}}]);