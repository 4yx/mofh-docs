"use strict";(self.webpackChunkhtdocs=self.webpackChunkhtdocs||[]).push([[340],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(a),d=n,b=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return a?r.createElement(b,i(i({ref:t},p),{},{components:a})):r.createElement(b,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3288:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],s={description:"To begin importing a MySQL Database, first create a new database and setup your script to leverage it before you can use a database backup."},c="Import A MySQL Database",l={unversionedId:"mysql-databases/import-mysql-db",id:"mysql-databases/import-mysql-db",title:"Import A MySQL Database",description:"To begin importing a MySQL Database, first create a new database and setup your script to leverage it before you can use a database backup.",source:"@site/docs/mysql-databases/import-mysql-db.md",sourceDirName:"mysql-databases",slug:"/mysql-databases/import-mysql-db",permalink:"/mysql-databases/import-mysql-db",draft:!1,tags:[],version:"current",frontMatter:{description:"To begin importing a MySQL Database, first create a new database and setup your script to leverage it before you can use a database backup."},sidebar:"tutorialSidebar",previous:{title:"Connect To MySQL Externally",permalink:"/mysql-databases/external-mysql-connect"},next:{title:"Create CNAME Records For SSL",permalink:"/ssl-and-security/create-cname-records"}},p={},u=[],m={toc:u};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"import-a-mysql-database"},"Import A MySQL Database"),(0,o.kt)("p",null,"To begin importing a MySQL Database, first create a new database and setup your script to leverage it before you can use a database backup. The database must then be imported:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the control panel and log in."),(0,o.kt)("li",{parentName:"ol"},"Navigate to phpMyAdmin."),(0,o.kt)("li",{parentName:"ol"},"Select the new database from the drop-down menu and click ",(0,o.kt)("kbd",null,"Connect Now"),"."),(0,o.kt)("li",{parentName:"ol"},"In the top bar, select Import."),(0,o.kt)("li",{parentName:"ol"},"Click Go after selecting the database backup file to import.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": The max ",(0,o.kt)("inlineCode",{parentName:"p"},".sql")," file you can upload it limited to a file size of 10 MB. Instead, you may use a software like BigDump to get around this. ",(0,o.kt)("a",{parentName:"p",href:"https://www.ozerov.de/bigdump/"},"BigDump")," can break down a large database export into smaller batches and upload them one by one."))}d.isMDXComponent=!0}}]);