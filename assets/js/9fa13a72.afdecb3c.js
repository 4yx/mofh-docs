"use strict";(self.webpackChunkhtdocs=self.webpackChunkhtdocs||[]).push([[991],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,y=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(y,s(s({ref:t},p),{},{components:n})):r.createElement(y,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2694:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={},c="Connecting With MySQL",l={unversionedId:"mysql-databases/connect-mysql",id:"mysql-databases/connect-mysql",title:"Connecting With MySQL",description:"Many of the world\u2019s largest and fastest-growing organizations, including Facebook, Twitter, Booking, and Verizon, power their high-volume Web sites, business-critical systems, and packaged software to save time and money rely on MySQL.",source:"@site/docs/mysql-databases/connect-mysql.md",sourceDirName:"mysql-databases",slug:"/mysql-databases/connect-mysql",permalink:"/mysql-databases/connect-mysql",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Common MySQL Errors",permalink:"/mysql-databases/common-mysql-errors"},next:{title:"Connect To MySQL Externally",permalink:"/mysql-databases/external-mysql-connect"}},p={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connecting-with-mysql"},"Connecting With MySQL"),(0,o.kt)("p",null,"Many of the world\u2019s largest and fastest-growing organizations, including ",(0,o.kt)("a",{parentName:"p",href:"https://www.facebook.com/"},"Facebook"),", ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/"},"Twitter"),", ",(0,o.kt)("a",{parentName:"p",href:"https://booking.com/"},"Booking"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://www.verizon.com/"},"Verizon"),", power their high-volume Web sites, business-critical systems, and packaged software to save time and money rely on MySQL."),(0,o.kt)("p",null,"MySQL is probably the easiest way to get started in your web developer journey. We believe in that too! That\u2019s why we offer MySQL databases on free hosting."),(0,o.kt)("p",null,"To get started, you need to log in to the control panel (preferably via the client area) and head over to the MySQL databases section."),(0,o.kt)("p",null,"You can choose your favourite database name and click on the create button. Boom your database is created and available for use."),(0,o.kt)("p",null,"PHP is the most common coding language that is used to connect to MySQL databases to build web applications! You can create a ",(0,o.kt)("inlineCode",{parentName:"p"},"connect.php")," file in your file manager and use the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n//All These Credentials Are Found In The Client Area\n\n$hostname = 'sqlXXX.crwth.net'; \n$username = 'crwth_XXXXXXXX';\n$password  = 'ABCD1234!@#$'; \n$database  = 'crwth_XXXXXXXX_dbname'; \n\n$connect = mysqli_connect($hostname, $username, $password, $database);\nif(!$connect){\n    echo 'Oops! Connection failed!'}\n?>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": Many applications replace the database hostname field with ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost")," or hide it altogether. You must use the MySQL hostname exactly as it appears under your MySQL Information (client area)."),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost")," will not work here as we create a loop for every account to a specific database server."))}d.isMDXComponent=!0}}]);