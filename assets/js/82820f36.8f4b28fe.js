"use strict"; (self.webpackChunkhtdocs = self.webpackChunkhtdocs || []).push([[340], { 3905: (e, t, a) => { a.d(t, { Zo: () => c, kt: () => d }); var r = a(7294); function n(e, t, a) { return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e } function o(e, t) { var a = Object.keys(e); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(e); t && (r = r.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), a.push.apply(a, r) } return a } function i(e) { for (var t = 1; t < arguments.length; t++) { var a = null != arguments[t] ? arguments[t] : {}; t % 2 ? o(Object(a), !0).forEach((function (t) { n(e, t, a[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t)) })) } return e } function s(e, t) { if (null == e) return {}; var a, r, n = function (e, t) { if (null == e) return {}; var a, r, n = {}, o = Object.keys(e); for (r = 0; r < o.length; r++)a = o[r], t.indexOf(a) >= 0 || (n[a] = e[a]); return n }(e, t); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); for (r = 0; r < o.length; r++)a = o[r], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]) } return n } var l = r.createContext({}), p = function (e) { var t = r.useContext(l), a = t; return e && (a = "function" == typeof e ? e(t) : i(i({}, t), e)), a }, c = function (e) { var t = p(e.components); return r.createElement(l.Provider, { value: t }, e.children) }, u = { inlineCode: "code", wrapper: function (e) { var t = e.children; return r.createElement(r.Fragment, {}, t) } }, m = r.forwardRef((function (e, t) { var a = e.components, n = e.mdxType, o = e.originalType, l = e.parentName, c = s(e, ["components", "mdxType", "originalType", "parentName"]), m = p(a), d = n, b = m["".concat(l, ".").concat(d)] || m[d] || u[d] || o; return a ? r.createElement(b, i(i({ ref: t }, c), {}, { components: a })) : r.createElement(b, i({ ref: t }, c)) })); function d(e, t) { var a = arguments, n = t && t.mdxType; if ("string" == typeof e || n) { var o = a.length, i = new Array(o); i[0] = m; var s = {}; for (var l in t) hasOwnProperty.call(t, l) && (s[l] = t[l]); s.originalType = e, s.mdxType = "string" == typeof e ? e : n, i[1] = s; for (var p = 2; p < o; p++)i[p] = a[p]; return r.createElement.apply(null, i) } return r.createElement.apply(null, a) } m.displayName = "MDXCreateElement" }, 7197: (e, t, a) => { a.r(t), a.d(t, { assets: () => l, contentTitle: () => i, default: () => u, frontMatter: () => o, metadata: () => s, toc: () => p }); var r = a(7462), n = (a(7294), a(3905)); const o = { description: "To begin importing a MySQL Database, first create a new database and setup your script to leverage it before you can use a database backup." }, i = "Import A MySQL Database", s = { unversionedId: "mysql-databases/import-mysql-db", id: "mysql-databases/import-mysql-db", title: "Import A MySQL Database", description: "To begin importing a MySQL Database, first create a new database and setup your script to leverage it before you can use a database backup.", source: "@site/docs/mysql-databases/import-mysql-db.md", sourceDirName: "mysql-databases", slug: "/mysql-databases/import-mysql-db", permalink: "/mysql-databases/import-mysql-db", draft: !1, tags: [], version: "current", frontMatter: { description: "To begin importing a MySQL Database, first create a new database and setup your script to leverage it before you can use a database backup." }, sidebar: "tutorialSidebar", previous: { title: "Connect To MySQL Externally", permalink: "/mysql-databases/external-mysql-connect" }, next: { title: "Create CNAME Records For SSL", permalink: "/ssl-and-security/create-cname-records" } }, l = {}, p = [], c = { toc: p }; function u(e) { let { components: t, ...a } = e; return (0, n.kt)("wrapper", (0, r.Z)({}, c, a, { components: t, mdxType: "MDXLayout" }), (0, n.kt)("h1", { id: "import-a-mysql-database" }, "Import A MySQL Database"), (0, n.kt)("p", null, "To begin importing a MySQL Database, first create a new database and setup your script to leverage it before you can use a database backup. The database must then be imported:"), (0, n.kt)("ol", null, (0, n.kt)("li", { parentName: "ol" }, "Go to the control panel and log in."), (0, n.kt)("li", { parentName: "ol" }, "Navigate to phpMyAdmin."), (0, n.kt)("li", { parentName: "ol" }, "Select the new database from the drop-down menu and click ", (0, n.kt)("kbd", null, "Connect Now"), "."), (0, n.kt)("li", { parentName: "ol" }, "In the top bar, select Import."), (0, n.kt)("li", { parentName: "ol" }, "Click Go after selecting the database backup file to import.")), (0, n.kt)("p", null, (0, n.kt)("strong", { parentName: "p" }, "Note"), ": The max ", (0, n.kt)("inlineCode", { parentName: "p" }, ".sql"), " file you can upload it limited to a file size of 10 MB. Instead, you may use a software like BigDump to get around this. ", (0, n.kt)("a", { parentName: "p", href: "https://www.ozerov.de/bigdump/" }, "BigDump"), " can break down a large database export into smaller batches and upload them one by one.")) } u.isMDXComponent = !0 } }]);