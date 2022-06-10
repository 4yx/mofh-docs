"use strict";(self.webpackChunkhtdocs=self.webpackChunkhtdocs||[]).push([[172],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(h,s(s({ref:t},u),{},{components:r})):n.createElement(h,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8097:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],i={description:"MySQL is the first choice of PHP developers. An open-source Relational Database Management System (RDBMS) that uses SQL language."},l="Common MySQL Errors",c={unversionedId:"mysql-databases/common-mysql-errors",id:"mysql-databases/common-mysql-errors",title:"Common MySQL Errors",description:"MySQL is the first choice of PHP developers. An open-source Relational Database Management System (RDBMS) that uses SQL language.",source:"@site/docs/mysql-databases/common-mysql-errors.md",sourceDirName:"mysql-databases",slug:"/mysql-databases/common-mysql-errors",permalink:"/mysql-databases/common-mysql-errors",draft:!1,tags:[],version:"current",frontMatter:{description:"MySQL is the first choice of PHP developers. An open-source Relational Database Management System (RDBMS) that uses SQL language."},sidebar:"tutorialSidebar",previous:{title:"The Welcome Page",permalink:"/getting-started/the-welcome-page"},next:{title:"Connecting With MySQL",permalink:"/mysql-databases/connect-mysql"}},u={},p=[{value:"Access denied",id:"access-denied",level:2},{value:"Lost connection to MySQL server",id:"lost-connection-to-mysql-server",level:2},{value:"The table is full",id:"the-table-is-full",level:2},{value:"Table <code>tbl_name</code> doesn\u2019t exist",id:"table-tbl_name-doesnt-exist",level:2},{value:"Be sure you are using your hosting account password",id:"be-sure-you-are-using-your-hosting-account-password",level:2},{value:"You weren\u2019t able to fix the error?",id:"you-werent-able-to-fix-the-error",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"common-mysql-errors"},"Common MySQL Errors"),(0,o.kt)("p",null,"MariaDB is the first choice of PHP developers. As an open-source Relational Database Management System (RDBMS) that uses SQL language, MariaDB database helps to automate data retrieving and provides great support in PHP MySQL web application development. As no human is perfext, mistakes can be made along the way. This article will help you to understand the common MySQL errors and how to fix them."),(0,o.kt)("h2",{id:"access-denied"},"Access denied"),(0,o.kt)("p",null,"This error message can look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Access denied for user 'cwrt_12345678'@'192.168.%' (using password: YES)\n")),(0,o.kt)("p",null,"This means that you don't have access to the database. Usually, this can be fixed by ensuring that all credentials are correct and that the databse exists."),(0,o.kt)("h2",{id:"lost-connection-to-mysql-server"},"Lost connection to MySQL server"),(0,o.kt)("p",null,"Network conditions should be checked if this is a frequent error. If an error message like \u201cLost connection to MySQL server\u201d appears while querying the database, it is certain that the error has occurred because of network connection issues. If you do see this error, please report it on the ",(0,o.kt)("a",{parentName:"p",href:"https://forum.pleasantfree.com/"},"community forum"),"."),(0,o.kt)("h2",{id:"the-table-is-full"},"The table is full"),(0,o.kt)("p",null,"This means that you have hit either the ",(0,o.kt)("a",{parentName:"p",href:"/fair-usage-limits/inode-limit"},"inode"),", ",(0,o.kt)("a",{parentName:"p",href:"/files-and-ftp/disk-quota-exceeded"},"disk"),", or ",(0,o.kt)("a",{parentName:"p",href:"/fair-usage-limits/mysql-limit"},"database")," limit. Because, after all, the database is just a file which takes up space in your Hosting Account."),(0,o.kt)("p",null,'To "fix" this, try following some steps in our ',(0,o.kt)("a",{parentName:"p",href:"/files-and-ftp/disk-quota-exceeded"},'"Disk Quota Exceeded" article'),"."),(0,o.kt)("h2",{id:"table-tbl_name-doesnt-exist"},"Table ",(0,o.kt)("inlineCode",{parentName:"h2"},"tbl_name")," doesn\u2019t exist"),(0,o.kt)("p",null,"In some cases, you may be referring to the table incorrectly. This is possible because the MySQL server uses directories and files for storing database tables. Depending upon the operating system file management, the database and table names can be case sensitive."),(0,o.kt)("p",null,"Fixing this issue is quite easy: ensure the table exists in the database and that the table name is correct in your code."),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"tips-to-avoid-errors"},"Tips to Avoid Errors"),(0,o.kt)("h2",{id:"be-sure-you-are-using-your-hosting-account-password"},"Be sure you are using your hosting account password"),(0,o.kt)("p",null,"The most common issue is that you are not using the right password. You should use the ",(0,o.kt)("strong",{parentName:"p"},"hosting account password")," in your script configuration."),(0,o.kt)("p",null,"The hosting account password ",(0,o.kt)("strong",{parentName:"p"},"is not your Client Area password"),"! The hosting account password is randomly generated when you create an account, and you can find or change it in your ",(0,o.kt)("a",{parentName:"p",href:"https://app.pleasantfree.com/accounts"},"Client Area")," (click the Manage button in the card for the account)."),(0,o.kt)("h2",{id:"you-werent-able-to-fix-the-error"},"You weren\u2019t able to fix the error?"),(0,o.kt)("p",null,"This is why the ",(0,o.kt)("a",{parentName:"p",href:"https://forum.pleasantfree.com"},"Community Forum")," is here! Open a new topic and don\u2019t forget to explain your issue clearly so that you can get help from the community quickly and continue your mission."))}m.isMDXComponent=!0}}]);