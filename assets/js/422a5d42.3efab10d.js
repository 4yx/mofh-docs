"use strict";(self.webpackChunkhtdocs=self.webpackChunkhtdocs||[]).push([[483],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(n),p=o,f=m["".concat(u,".").concat(p)]||m[p]||c[p]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6462:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={description:"If you want to use your custom domain with PleasantFree, you first need to point the domain to PleasantFree by changing the nameservers at your domain registrar."},u="DNS Query Refused",l={unversionedId:"domains-and-dns/dns-query-refused",id:"domains-and-dns/dns-query-refused",title:"DNS Query Refused",description:"If you want to use your custom domain with PleasantFree, you first need to point the domain to PleasantFree by changing the nameservers at your domain registrar.",source:"@site/docs/domains-and-dns/dns-query-refused.md",sourceDirName:"domains-and-dns",slug:"/domains-and-dns/dns-query-refused",permalink:"/domains-and-dns/dns-query-refused",draft:!1,tags:[],version:"current",frontMatter:{description:"If you want to use your custom domain with PleasantFree, you first need to point the domain to PleasantFree by changing the nameservers at your domain registrar."},sidebar:"tutorialSidebar",previous:{title:"What Is DNS Propagation",permalink:"/domains-and-dns/dns-propagation"},next:{title:"Removing An Existing Domain",permalink:"/domains-and-dns/remove-domain"}},d={},c=[{value:"Any Solution?",id:"any-solution",level:2}],m={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dns-query-refused"},"DNS Query Refused"),(0,a.kt)("p",null,"If you want to use your custom domain with PleasantFree, you first need to point the domain to PleasantFree by changing the nameservers at your domain registrar. ",(0,a.kt)("a",{parentName:"p",href:"https://docs.pleasantfree.com/domains-and-dns/use-custom-domain"},"Read More")),(0,a.kt)("p",null,"Some registrars may show an error like this when trying to change the DNS nameservers:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"DNS Query Refused")),(0,a.kt)("p",null,"OR"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rejected Search")),(0,a.kt)("p",null,"To fix this in most cases, you need to contact your registrar and tell them that nameservers must be set first before verification."),(0,a.kt)("h1",{id:"culprit-of-this-issue"},"Culprit Of This Issue?"),(0,a.kt)("p",null,"Whenever you want to add a custom domain to your PleasantFree account, we need to verify the domain, which can be only done by changing the domain nameservers first."),(0,a.kt)("p",null,"Some registrars search for your domain records on the nameservers. This will always fail because we create those DNS records for your domain after verifying your domain name."),(0,a.kt)("h2",{id:"any-solution"},"Any Solution?"),(0,a.kt)("p",null,"Sorry to break it to you but, we really don\u2019t have an alternate solution to verify your domain name."),(0,a.kt)("p",null,"But, we were indeed able to identify some domain extensions whose registrars do implement these checks."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".com.br")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".de")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".dk")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".hu")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".it"))),(0,a.kt)("p",null,"If you have a domain with one of the above domain extensions which you intent to use with PleasantFree, please consider changing the domain extension or getting a refund if you are eligible"))}p.isMDXComponent=!0}}]);