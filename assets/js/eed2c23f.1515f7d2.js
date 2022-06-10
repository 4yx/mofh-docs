"use strict";(self.webpackChunkhtdocs=self.webpackChunkhtdocs||[]).push([[420],{3905:function(e,t,i){i.d(t,{Zo:function(){return c},kt:function(){return f}});var a=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,o=function(e,t){if(null==e)return{};var i,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(i),f=o,h=p["".concat(s,".").concat(f)]||p[f]||u[f]||r;return i?a.createElement(h,n(n({ref:t},c),{},{components:i})):a.createElement(h,n({ref:t},c))}));function f(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,n=new Array(r);n[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,n[1]=l;for(var d=2;d<r;d++)n[d]=i[d];return a.createElement.apply(null,n)}return a.createElement.apply(null,i)}p.displayName="MDXCreateElement"},7292:function(e,t,i){i.r(t),i.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var a=i(7462),o=i(3366),r=(i(7294),i(3905)),n=["components"],l={description:"You have successfully uploaded a file, and then notice that it has disappeared. What could have caused this?"},s="Files Deleted After Uploading",d={unversionedId:"files-and-ftp/files-deleted-automatically",id:"files-and-ftp/files-deleted-automatically",title:"Files Deleted After Uploading",description:"You have successfully uploaded a file, and then notice that it has disappeared. What could have caused this?",source:"@site/docs/files-and-ftp/files-deleted-automatically.md",sourceDirName:"files-and-ftp",slug:"/files-and-ftp/files-deleted-automatically",permalink:"/files-and-ftp/files-deleted-automatically",draft:!1,tags:[],version:"current",frontMatter:{description:"You have successfully uploaded a file, and then notice that it has disappeared. What could have caused this?"},sidebar:"tutorialSidebar",previous:{title:"Max Limit For Files",permalink:"/files-and-ftp/file-max-limits"},next:{title:"How To Procure FileZilla Logs",permalink:"/files-and-ftp/filezilla-logs"}},c={},u=[{value:"You don&#39;t have a <code>htdocs</code> folder.",id:"you-dont-have-a-htdocs-folder",level:2},{value:"The file type you&#39;re trying to upload is not allowed.",id:"the-file-type-youre-trying-to-upload-is-not-allowed",level:2},{value:"Malware may be present in the file(s).",id:"malware-may-be-present-in-the-files",level:2},{value:"The file exceeds the size limit.",id:"the-file-exceeds-the-size-limit",level:2},{value:"Suggestions to reduce HTML and PHP file sizes",id:"suggestions-to-reduce-html-and-php-file-sizes",level:2},{value:"Suggestions to reduce other filetype sizes",id:"suggestions-to-reduce-other-filetype-sizes",level:2},{value:"Suggestions to reduce the <code>.htaccess</code> file size",id:"suggestions-to-reduce-the-htaccess-file-size",level:2},{value:"References",id:"references",level:2}],p={toc:u};function f(e){var t=e.components,i=(0,o.Z)(e,n);return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"files-deleted-after-uploading"},"Files Deleted After Uploading"),(0,r.kt)("p",null,"You have successfully uploaded a file, and then notice that it has diappeared. What could have caused this?",(0,r.kt)("br",{parentName:"p"}),"\n","This article may contain affiliate links to external websites."),(0,r.kt)("h2",{id:"you-dont-have-a-htdocs-folder"},"You don't have a ",(0,r.kt)("inlineCode",{parentName:"h2"},"htdocs")," folder."),(0,r.kt)("p",null,"You must upload all of your website files to the ",(0,r.kt)("inlineCode",{parentName:"p"},"htdocs")," folder that is specific for the domain, this may be ",(0,r.kt)("inlineCode",{parentName:"p"},"/htdocs/"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"/yourdomain.com/htdocs/"),", etc.\nYou can't upload file outside of the ",(0,r.kt)("inlineCode",{parentName:"p"},"htdocs")," folder for security reasons. However, you can upload them in subdirectories in the ",(0,r.kt)("inlineCode",{parentName:"p"},"htdocs")," folder. If you try to upload a file/directory via FTP or create a file/directory via PHP, and the file/directory is outside of the permitted locations described above, you will either have an error thrown or the file/directory will be immediately removed."),(0,r.kt)("h2",{id:"the-file-type-youre-trying-to-upload-is-not-allowed"},"The file type you're trying to upload is not allowed."),(0,r.kt)("p",null,"For various reasons, including but not limited to security and fair usage, various filetypes, such as .exe, .pdf, as well as others, are prohibited. However, website file(types) are allowed. These can include: .html, .php, .js, .css, .jpg, .png, etc."),(0,r.kt)("p",null,"If you would like to make a file available for downloading, we ask that you do so through an external service dedicated to file sharing, such as Box.\nIf you would like to include a video on your site, we also ask that you make it available through an external service dedicated to video hosting, such as Vimeo."),(0,r.kt)("h2",{id:"malware-may-be-present-in-the-files"},"Malware may be present in the file(s)."),(0,r.kt)("p",null,"We have a script immediately executed after you upload a file. This script checks for malware. If the script finds malware in a file, the file is immediately deleted."),(0,r.kt)("h2",{id:"the-file-exceeds-the-size-limit"},"The file exceeds the ",(0,r.kt)("a",{parentName:"h2",href:"file-max-limits"},"size limit"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"suggestions-to-reduce-html-and-php-file-sizes"},"Suggestions to reduce HTML and PHP file sizes"),(0,r.kt)("p",null,"If you are finding that your PHP and HTML files are too big, we have some tips on how to reduce their size:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If your file has a lot of embedded CSS or JavaScript, you may want to consider making those their own respective files."),(0,r.kt)("li",{parentName:"ul"},"If your page has a lot of dynamic or static data, consider moving it to separate files or into a MySQL database. Note that databases must be acccessed with PHP."),(0,r.kt)("li",{parentName:"ul"},"If the PHP file contains a lot of lines, you may want to group different parts and ",(0,r.kt)("inlineCode",{parentName:"li"},"include")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"require")," them from a separate file.")),(0,r.kt)("h2",{id:"suggestions-to-reduce-other-filetype-sizes"},"Suggestions to reduce other filetype sizes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To upload an archive (.zip, .rar, .tar.*z), unarchive the file locally on your computer and upload the unarchived files via FTP. "),(0,r.kt)("li",{parentName:"ul"},"Using better encoding or better compression can also lower media file sizes. "),(0,r.kt)("li",{parentName:"ul"},"For non-html items, such as images, we recommend CDN or static hosting from a dedicated service, such as JSdelivr (text) or Statically (images).")),(0,r.kt)("h2",{id:"suggestions-to-reduce-the-htaccess-file-size"},"Suggestions to reduce the ",(0,r.kt)("inlineCode",{parentName:"h2"},".htaccess")," file size"),(0,r.kt)("p",null,"Large ",(0,r.kt)("inlineCode",{parentName:"p"},".htaccess")," files have a negative impact on server speed because it takes Apache longer to parse. Below are some scenarios and solutions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You want to block bots from accessing your site.")),(0,r.kt)("p",null,"Parsing User Agents is an effective way to block bots, but we already have a security security system to deny access to bots. We recommend removeing ",(0,r.kt)("inlineCode",{parentName:"p"},".htaccess")," code which does this."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You want to limit prevent access from certain countries/areas.")),(0,r.kt)("p",null,"While this is possible in the ",(0,r.kt)("inlineCode",{parentName:"p"},".htaccess"),", we do not recommend it. It can create a very large file. We recommend moving the blocking code to PHP code, where you can have easier control, a larger file type, and debugging is easier and more leanient. However, Ip blocking can become hard and potentially problematic."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You have many ",(0,r.kt)("inlineCode",{parentName:"li"},"RewriteRule"),"s.")),(0,r.kt)("p",null,"While ",(0,r.kt)("inlineCode",{parentName:"p"},"RewriteRule"),"s are handy, using more than 10 can become hard to manage and can potentially slow your site. URL routing is handled within PHP in lots of frameworks, and we highly recommend this option. We recommend using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/steampixel/simplePHPRouter"},(0,r.kt)("inlineCode",{parentName:"a"},"steampixel/simplePHPRouter")," (github.com)")," for this."),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u201cWhy Are My Files Being Removed after They\u2019ve Been Uploaded? - ProFreeHost.\u201d Profreehost.com, ",(0,r.kt)("a",{parentName:"p",href:"https://profreehost.com/support/files-and-directories/files-removed-after-upload"},"https://profreehost.com/support/files-and-directories/files-removed-after-upload"),". Accessed 29 Jan. 2022.")))}f.isMDXComponent=!0}}]);