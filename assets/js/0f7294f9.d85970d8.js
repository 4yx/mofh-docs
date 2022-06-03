"use strict";(self.webpackChunkhtdocs=self.webpackChunkhtdocs||[]).push([[173],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,b=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return n?a.createElement(b,i(i({ref:t},c),{},{components:n})):a.createElement(b,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2401:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={description:"Learn how to migrate your website from your previous host to your new hosting account."},u="Migrate Your Website",l={unversionedId:"getting-started/migrate-your-website",id:"getting-started/migrate-your-website",title:"Migrate Your Website",description:"Learn how to migrate your website from your previous host to your new hosting account.",source:"@site/docs/getting-started/migrate-your-website.md",sourceDirName:"getting-started",slug:"/getting-started/migrate-your-website",permalink:"/getting-started/migrate-your-website",draft:!1,tags:[],version:"current",frontMatter:{description:"Learn how to migrate your website from your previous host to your new hosting account."},sidebar:"tutorialSidebar",previous:{title:"How To Procure FileZilla Logs",permalink:"/files-and-ftp/filezilla-logs"},next:{title:"New Web Hosting Account",permalink:"/getting-started/new-web-hosting-account"}},c={},p=[],d={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"migrate-your-website"},"Migrate Your Website"),(0,o.kt)("p",null,"If the website you build doesn't use MySQL databases, migrating your website is pretty easy. All you need to do is upload all the files into the ",(0,o.kt)("inlineCode",{parentName:"p"},"htdocs")," folder using an FTP client or the online file manager."),(0,o.kt)("p",null,"If your website is based on PHP, be sure to edit any configurations where domains names, etc. are specified and edit them with the new values as required."),(0,o.kt)("p",null,"If your website uses MySQL databases, you should first migrate the database contents over to free hosting servers and then update the connection credentials, else you will be popped up with a million errors."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Backup the database on the old host. If your current provider has a MySQL backup tool - use it. Usually, you can log in to phpMyAdmin, select your database and click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Export")," tab. Choose Save as file and select ",(0,o.kt)("inlineCode",{parentName:"p"},"gzipped"),". Download of your database backup should start afterward.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a database on your PleasantFree hosting account. Before you can restore a database backup, you will need to create a database on our system. Enter your website\u2019s Control Panel and click on the MySQL Databases. You can create a new database there. Pay close attention to the database name and hostname, as you'll need them later.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Importing database data to our server. Once the database is created, enter our phpMyAdmin (the icon for the tool is located in Control Panel). Once inside, click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Import")," tab, browse to the backup file of your database (like ",(0,o.kt)("inlineCode",{parentName:"p"},"dbname.sql.gz"),") and click Go. Database restoration procedure will begin. Please be patient, as it can take quite a lot of time to complete if your backup size is large.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Updating configuration files. Now, when the database is restored, you will need to open the configuration file (WordPress will have a ",(0,o.kt)("inlineCode",{parentName:"p"},"wp-config.php")," file) of your PHP script and update database host, database name, database username and database password values. The database hostname, database name and database username can be found in your control panel. The database password can be found in the client area. Note: we do not use ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost")," as the MySQL hostname, the right value should look like ",(0,o.kt)("inlineCode",{parentName:"p"},"sql123.crwth.com"),"."))))}f.isMDXComponent=!0}}]);