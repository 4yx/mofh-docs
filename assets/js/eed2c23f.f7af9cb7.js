"use strict"; (self.webpackChunkhtdocs = self.webpackChunkhtdocs || []).push([[420], { 3905: (e, t, a) => { a.d(t, { Zo: () => c, kt: () => h }); var i = a(7294); function o(e, t, a) { return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e } function n(e, t) { var a = Object.keys(e); if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(e); t && (i = i.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), a.push.apply(a, i) } return a } function l(e) { for (var t = 1; t < arguments.length; t++) { var a = null != arguments[t] ? arguments[t] : {}; t % 2 ? n(Object(a), !0).forEach((function (t) { o(e, t, a[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : n(Object(a)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t)) })) } return e } function r(e, t) { if (null == e) return {}; var a, i, o = function (e, t) { if (null == e) return {}; var a, i, o = {}, n = Object.keys(e); for (i = 0; i < n.length; i++)a = n[i], t.indexOf(a) >= 0 || (o[a] = e[a]); return o }(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (i = 0; i < n.length; i++)a = n[i], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (o[a] = e[a]) } return o } var s = i.createContext({}), d = function (e) { var t = i.useContext(s), a = t; return e && (a = "function" == typeof e ? e(t) : l(l({}, t), e)), a }, c = function (e) { var t = d(e.components); return i.createElement(s.Provider, { value: t }, e.children) }, u = { inlineCode: "code", wrapper: function (e) { var t = e.children; return i.createElement(i.Fragment, {}, t) } }, p = i.forwardRef((function (e, t) { var a = e.components, o = e.mdxType, n = e.originalType, s = e.parentName, c = r(e, ["components", "mdxType", "originalType", "parentName"]), p = d(a), h = o, f = p["".concat(s, ".").concat(h)] || p[h] || u[h] || n; return a ? i.createElement(f, l(l({ ref: t }, c), {}, { components: a })) : i.createElement(f, l({ ref: t }, c)) })); function h(e, t) { var a = arguments, o = t && t.mdxType; if ("string" == typeof e || o) { var n = a.length, l = new Array(n); l[0] = p; var r = {}; for (var s in t) hasOwnProperty.call(t, s) && (r[s] = t[s]); r.originalType = e, r.mdxType = "string" == typeof e ? e : o, l[1] = r; for (var d = 2; d < n; d++)l[d] = a[d]; return i.createElement.apply(null, l) } return i.createElement.apply(null, a) } p.displayName = "MDXCreateElement" }, 3346: (e, t, a) => { a.r(t), a.d(t, { assets: () => s, contentTitle: () => l, default: () => u, frontMatter: () => n, metadata: () => r, toc: () => d }); var i = a(7462), o = (a(7294), a(3905)); const n = { description: "You have successfully uploaded a file, and then notice that it has disappeared. What could have caused this?" }, l = "Files Deleted After Uploading", r = { unversionedId: "files-and-ftp/files-deleted-automatically", id: "files-and-ftp/files-deleted-automatically", title: "Files Deleted After Uploading", description: "You have successfully uploaded a file, and then notice that it has disappeared. What could have caused this?", source: "@site/docs/files-and-ftp/files-deleted-automatically.md", sourceDirName: "files-and-ftp", slug: "/files-and-ftp/files-deleted-automatically", permalink: "/files-and-ftp/files-deleted-automatically", draft: !1, tags: [], version: "current", frontMatter: { description: "You have successfully uploaded a file, and then notice that it has disappeared. What could have caused this?" }, sidebar: "tutorialSidebar", previous: { title: "Max Limit For Files/Uploads", permalink: "/files-and-ftp/file-max-limits" }, next: { title: "How To Procure FileZilla Logs", permalink: "/files-and-ftp/filezilla-logs" } }, s = {}, d = [], c = { toc: d }; function u(e) { let { components: t, ...a } = e; return (0, o.kt)("wrapper", (0, i.Z)({}, c, a, { components: t, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "files-deleted-after-uploading" }, "Files Deleted After Uploading"), (0, o.kt)("p", null, "You have successfully uploaded a file, and then notice that it has disappeared. What could have caused this?"), (0, o.kt)("h1", { id: "you-dont-have-a-htdocs-folder" }, "You don\u2019t have a ", (0, o.kt)("inlineCode", { parentName: "h1" }, "htdocs"), " folder."), (0, o.kt)("p", null, "You must upload all of your website files to the ", (0, o.kt)("inlineCode", { parentName: "p" }, "htdocs"), " folder that is specific for the domain, this may be ", (0, o.kt)("inlineCode", { parentName: "p" }, "/htdocs/"), ", ", (0, o.kt)("inlineCode", { parentName: "p" }, "/yourdomain.com/htdocs/"), ", etc.\nYou can\u2019t upload files outside of the ", (0, o.kt)("inlineCode", { parentName: "p" }, "htdocs"), " folder for security reasons. However, you can upload them in subdirectories in the ", (0, o.kt)("inlineCode", { parentName: "p" }, "htdocs"), " folder. If you try to upload a file/directory via FTP or create a file/directory via PHP, and the file/directory is outside of the permitted locations described above, you will either have an error thrown or the file/directory will be immediately removed."), (0, o.kt)("h1", { id: "the-file-type-youre-trying-to-upload-is-not-allowed" }, "The file type you\u2019re trying to upload is not allowed."), (0, o.kt)("p", null, "For various reasons, including but not limited to security and fair usage, various filetypes, such as .exe, .pdf, as well as others, are prohibited. However, website file(types) are allowed. These can include: ", (0, o.kt)("inlineCode", { parentName: "p" }, ".html"), ", ", (0, o.kt)("inlineCode", { parentName: "p" }, ".php"), ", ", (0, o.kt)("inlineCode", { parentName: "p" }, ".js"), ", ", (0, o.kt)("inlineCode", { parentName: "p" }, ".css"), ", ", (0, o.kt)("inlineCode", { parentName: "p" }, ".jpg"), ", ", (0, o.kt)("inlineCode", { parentName: "p" }, ".png"), ", etc."), (0, o.kt)("p", null, "If you would like to make a file available for download, we ask that you do so through an external service dedicated to file sharing, such as Google Drive.\nIf you would like to include a video on your site, we also ask that you make it available through an external service dedicated to video hosting, such as YouTube."), (0, o.kt)("h1", { id: "malware-may-be-present-in-the-files" }, "Malware may be present in the file(s)."), (0, o.kt)("p", null, "We have a script immediately executed after you upload a file. This script checks for malware. If the script finds malware in a file, the file is immediately deleted."), (0, o.kt)("h1", { id: "the-file-exceeds-the-size-limit" }, "The file exceeds the size limit."), (0, o.kt)("p", null, "We limit the file size on our servers to ensure that everyone\u2019s content can load quickly. Files that exceed the upload size are automatically removed.\nFile size restrictions by type are as follows:"), (0, o.kt)("ul", null, (0, o.kt)("li", { parentName: "ul" }, "HTML/PHP/plaintext files are limited to 1 MB."), (0, o.kt)("li", { parentName: "ul" }, "Expanding on the above, ", (0, o.kt)("inlineCode", { parentName: "li" }, ".htaccess"), " files are limited to 10 kB."), (0, o.kt)("li", { parentName: "ul" }, "All other files, such as images, are limited to 10 MB.")), (0, o.kt)("p", null, "These file size restrictions apply to all files, no matter how your site acquires the file. PHP ", (0, o.kt)("inlineCode", { parentName: "p" }, "$_FILES"), " uploads are subject to the above regulations."), (0, o.kt)("h1", { id: "suggestions-to-reduce-html-and-php-file-sizes" }, "Suggestions to reduce HTML and PHP file sizes"), (0, o.kt)("p", null, "If you are finding that your PHP and HTML files are too big, we have some tips on how to reduce their size:"), (0, o.kt)("ul", null, (0, o.kt)("li", { parentName: "ul" }, "If your file has a lot of embedded CSS or JavaScript, you may want to consider making those their own respective files."), (0, o.kt)("li", { parentName: "ul" }, "If your page has a lot of dynamic or static data, consider moving it to separate files or into a MySQL database. Note that databases must be accessed with PHP."), (0, o.kt)("li", { parentName: "ul" }, "If the PHP file contains a lot of lines, you may want to group different parts and ", (0, o.kt)("inlineCode", { parentName: "li" }, "include"), " or ", (0, o.kt)("inlineCode", { parentName: "li" }, "require"), " them from a separate file.")), (0, o.kt)("h1", { id: "suggestions-to-reduce-other-filetype-sizes" }, "Suggestions to reduce other filetype sizes"), (0, o.kt)("ul", null, (0, o.kt)("li", { parentName: "ul" }, "To upload an archive (.zip, .rar, .tar.*z), unarchive the file locally on your computer and upload the unarchived files via FTP."), (0, o.kt)("li", { parentName: "ul" }, "Using better encoding or better compression can also lower media file sizes."), (0, o.kt)("li", { parentName: "ul" }, "For non-HTML items, such as images, we recommend CDN or static hosting from a dedicated service, such as JSdelivr (text) or Statically (images).")), (0, o.kt)("h1", { id: "suggestions-to-reduce-the-htaccess-file-size" }, "Suggestions to reduce the ", (0, o.kt)("inlineCode", { parentName: "h1" }, ".htaccess"), " file size"), (0, o.kt)("p", null, "Large ", (0, o.kt)("inlineCode", { parentName: "p" }, ".htaccess"), " files harm server speed because it takes Apache longer to parse. Below are some scenarios and solutions."), (0, o.kt)("ul", null, (0, o.kt)("li", { parentName: "ul" }, "You want to block bots from accessing your site.")), (0, o.kt)("p", null, "Parsing User Agents is an effective way to block bots, but we already have a security system to deny access to bots. We recommend removing the ", (0, o.kt)("inlineCode", { parentName: "p" }, ".htaccess"), " code that does this."), (0, o.kt)("ul", null, (0, o.kt)("li", { parentName: "ul" }, "You want to limit prevent access from certain countries/areas.")), (0, o.kt)("p", null, "While this is possible in the ", (0, o.kt)("inlineCode", { parentName: "p" }, ".htaccess"), ", we do not recommend it. It can create a very large file. We recommend moving the blocking code to PHP code, where you can have easier control, a larger file type, and debugging is easier and more lenient. However, Ip blocking can become hard and potentially problematic."), (0, o.kt)("ul", null, (0, o.kt)("li", { parentName: "ul" }, "You have many ", (0, o.kt)("inlineCode", { parentName: "li" }, "RewriteRule"), "s.")), (0, o.kt)("p", null, "While ", (0, o.kt)("inlineCode", { parentName: "p" }, "RewriteRule"), "s are handy, using more than 10 can become hard to manage and can potentially slow your site. URL routing is handled within PHP in lots of frameworks, and we highly recommend this option.")) } u.isMDXComponent = !0 } }]);