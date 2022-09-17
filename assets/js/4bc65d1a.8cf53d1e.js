"use strict"; (self.webpackChunkhtdocs = self.webpackChunkhtdocs || []).push([[172], { 3905: function (e, t, r) { r.d(t, { Zo: function () { return u }, kt: function () { return m } }); var o = r(7294); function n(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e } function a(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); t && (o = o.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, o) } return r } function s(e) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {}; t % 2 ? a(Object(r), !0).forEach((function (t) { n(e, t, r[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) })) } return e } function i(e, t) { if (null == e) return {}; var r, o, n = function (e, t) { if (null == e) return {}; var r, o, n = {}, a = Object.keys(e); for (o = 0; o < a.length; o++)r = a[o], t.indexOf(r) >= 0 || (n[r] = e[r]); return n }(e, t); if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e); for (o = 0; o < a.length; o++)r = a[o], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]) } return n } var l = o.createContext({}), c = function (e) { var t = o.useContext(l), r = t; return e && (r = "function" == typeof e ? e(t) : s(s({}, t), e)), r }, u = function (e) { var t = c(e.components); return o.createElement(l.Provider, { value: t }, e.children) }, p = { inlineCode: "code", wrapper: function (e) { var t = e.children; return o.createElement(o.Fragment, {}, t) } }, d = o.forwardRef((function (e, t) { var r = e.components, n = e.mdxType, a = e.originalType, l = e.parentName, u = i(e, ["components", "mdxType", "originalType", "parentName"]), d = c(r), m = n, h = d["".concat(l, ".").concat(m)] || d[m] || p[m] || a; return r ? o.createElement(h, s(s({ ref: t }, u), {}, { components: r })) : o.createElement(h, s({ ref: t }, u)) })); function m(e, t) { var r = arguments, n = t && t.mdxType; if ("string" == typeof e || n) { var a = r.length, s = new Array(a); s[0] = d; var i = {}; for (var l in t) hasOwnProperty.call(t, l) && (i[l] = t[l]); i.originalType = e, i.mdxType = "string" == typeof e ? e : n, s[1] = i; for (var c = 2; c < a; c++)s[c] = r[c]; return o.createElement.apply(null, s) } return o.createElement.apply(null, r) } d.displayName = "MDXCreateElement" }, 3834: function (e, t, r) { r.r(t), r.d(t, { assets: function () { return u }, contentTitle: function () { return l }, default: function () { return m }, frontMatter: function () { return i }, metadata: function () { return c }, toc: function () { return p } }); var o = r(7462), n = r(3366), a = (r(7294), r(3905)), s = ["components"], i = {}, l = "Common MySQL Errors", c = { unversionedId: "mysql-databases/common-mysql-errors", id: "mysql-databases/common-mysql-errors", title: "Common MySQL Errors", description: "MySQL is the first choice of PHP developers. As an open source Relational Database Management System (RDBMS) that uses SQL language, MySQL database helps to automate data retrieving and provide great support in PHP MySQL web application development.", source: "@site/docs/mysql-databases/common-mysql-errors.md", sourceDirName: "mysql-databases", slug: "/mysql-databases/common-mysql-errors", permalink: "/mysql-databases/common-mysql-errors", draft: !1, tags: [], version: "current", frontMatter: {}, sidebar: "tutorialSidebar", previous: { title: "How To Procure FileZilla Logs", permalink: "/files-and-ftp/filezilla-logs" }, next: { title: "Connecting With MySQL", permalink: "/mysql-databases/connect-mysql" } }, u = {}, p = [{ value: "Errors", id: "errors", level: 2 }, { value: "How to Fix ?", id: "how-to-fix-", level: 2 }, { value: "Access denied", id: "access-denied", level: 3 }, { value: "Lost connection to MySQL server", id: "lost-connection-to-mysql-server", level: 3 }, { value: "The table is full", id: "the-table-is-full", level: 3 }, { value: "Table tbl_name doesn\u2019t exist", id: "table-tbl_name-doesnt-exist", level: 3 }, { value: "Tips to Avoid Errors", id: "tips-to-avoid-errors", level: 2 }, { value: "Be sure you are using your hosting account password", id: "be-sure-you-are-using-your-hosting-account-password", level: 3 }, { value: "You weren\u2019t able to fix the error ?", id: "you-werent-able-to-fix-the-error-", level: 3 }], d = { toc: p }; function m(e) { var t = e.components, r = (0, n.Z)(e, s); return (0, a.kt)("wrapper", (0, o.Z)({}, d, r, { components: t, mdxType: "MDXLayout" }), (0, a.kt)("h1", { id: "common-mysql-errors" }, "Common MySQL Errors"), (0, a.kt)("p", null, "MySQL is the first choice of PHP developers. As an open source Relational Database Management System (RDBMS) that uses SQL language, MySQL database helps to automate data retrieving and provide great support in PHP MySQL web application development."), (0, a.kt)("h2", { id: "errors" }, "Errors"), (0, a.kt)("p", null, "Errors are Unintentional mistakes, In fact every human usually makes more mistakes than a computer (reports)."), (0, a.kt)("h2", { id: "how-to-fix-" }, "How to Fix ?"), (0, a.kt)("p", null, "Sometimes we try fixing the errors ourselves but instead make the issue more  hard to be fixed. But don't worry, have a look at some common error messages and reasons which might've cause the error to be triggered."), (0, a.kt)("h3", { id: "access-denied" }, "Access denied"), (0, a.kt)("p", null, "The Error message looks like \u2018Access denied for user\nwpxbe_12345678\u2019@\u2018195.163.0.*\u2019 (using password: YES)` ."), (0, a.kt)("p", null, "Which means that the ", (0, a.kt)("inlineCode", { parentName: "p" }, "You don't have access to the database name")), (0, a.kt)("h3", { id: "lost-connection-to-mysql-server" }, "Lost connection to MySQL server"), (0, a.kt)("p", null, "Network conditions should be checked if this is a frequent error. If an error message like \u201cLost connection to MySQL server\u201d appears while querying the database, it is certain that the error has occurred because of network connection issues."), (0, a.kt)("h3", { id: "the-table-is-full" }, "The table is full"), (0, a.kt)("p", null, "Which either means that you have hit the inode or disk limit or the database limit."), (0, a.kt)("h3", { id: "table-tbl_name-doesnt-exist" }, "Table tbl_name doesn\u2019t exist"), (0, a.kt)("p", null, "In some cases, the user may be referring to the table incorrectly. It is possible because the MySQL server uses directories and files for storing database tables. Depending upon the operating system file management, the database and table names can be case sensitive."), (0, a.kt)("h2", { id: "tips-to-avoid-errors" }, "Tips to Avoid Errors"), (0, a.kt)("h3", { id: "be-sure-you-are-using-your-hosting-account-password" }, "Be sure you are using your hosting account password"), (0, a.kt)("p", null, "The most common issue is that people are not using the right database password. You should use the ", (0, a.kt)("strong", { parentName: "p" }, "hosting account password"), " in your script configuration."), (0, a.kt)("p", null, "Important: the hosting account password ", (0, a.kt)("strong", { parentName: "p" }, "is not your client area password"), "! The hosting account password is randomly generated when you create an account, and you can find or change it in your ", (0, a.kt)("a", { parentName: "p", href: "https://app.pleasantfree.com/accounts" }, "client area "), "(click the account in the accounts list)."), (0, a.kt)("h3", { id: "you-werent-able-to-fix-the-error-" }, "You weren\u2019t able to fix the error ?"), (0, a.kt)("p", null, "This is  why the community is here! Open a ", (0, a.kt)("a", { parentName: "p", href: "https://forum.pleasantfree.com/" }, "new topic"), " don\u2019t forget to explain your issue clearly so that you can get help from the community quickly and continue your mission \ud83d\ude09.")) } m.isMDXComponent = !0 } }]);