"use strict"; (self.webpackChunkhtdocs = self.webpackChunkhtdocs || []).push([[671], { 3905: function (e, t, n) { n.d(t, { Zo: function () { return u }, kt: function () { return d } }); var r = n(7294); function o(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } function a(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(e); t && (r = r.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r) } return n } function i(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {}; t % 2 ? a(Object(n), !0).forEach((function (t) { o(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e } function s(e, t) { if (null == e) return {}; var n, r, o = function (e, t) { if (null == e) return {}; var n, r, o = {}, a = Object.keys(e); for (r = 0; r < a.length; r++)n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]); return o }(e, t); if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e); for (r = 0; r < a.length; r++)n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]) } return o } var l = r.createContext({}), c = function (e) { var t = r.useContext(l), n = t; return e && (n = "function" == typeof e ? e(t) : i(i({}, t), e)), n }, u = function (e) { var t = c(e.components); return r.createElement(l.Provider, { value: t }, e.children) }, p = { inlineCode: "code", wrapper: function (e) { var t = e.children; return r.createElement(r.Fragment, {}, t) } }, f = r.forwardRef((function (e, t) { var n = e.components, o = e.mdxType, a = e.originalType, l = e.parentName, u = s(e, ["components", "mdxType", "originalType", "parentName"]), f = c(n), d = o, m = f["".concat(l, ".").concat(d)] || f[d] || p[d] || a; return n ? r.createElement(m, i(i({ ref: t }, u), {}, { components: n })) : r.createElement(m, i({ ref: t }, u)) })); function d(e, t) { var n = arguments, o = t && t.mdxType; if ("string" == typeof e || o) { var a = n.length, i = new Array(a); i[0] = f; var s = {}; for (var l in t) hasOwnProperty.call(t, l) && (s[l] = t[l]); s.originalType = e, s.mdxType = "string" == typeof e ? e : o, i[1] = s; for (var c = 2; c < a; c++)i[c] = n[c]; return r.createElement.apply(null, i) } return r.createElement.apply(null, n) } f.displayName = "MDXCreateElement" }, 9256: function (e, t, n) { n.r(t), n.d(t, { assets: function () { return u }, contentTitle: function () { return l }, default: function () { return d }, frontMatter: function () { return s }, metadata: function () { return c }, toc: function () { return p } }); var r = n(7462), o = n(3366), a = (n(7294), n(3905)), i = ["components"], s = { slug: "/", sidebar_position: 1 }, l = "Knowledge Base", c = { unversionedId: "intro", id: "intro", title: "Knowledge Base", description: "Welcome to the PleasantFree Knowledge Base. This knowledge base is filled with articles detailing many common operations and common issues. If you need any help with your hosting, this is the place to start!", source: "@site/docs/intro.md", sourceDirName: ".", slug: "/", permalink: "/", draft: !1, tags: [], version: "current", sidebarPosition: 1, frontMatter: { slug: "/", sidebar_position: 1 }, sidebar: "tutorialSidebar", next: { title: "Delete PleasantFree Profile", permalink: "/account-management/delete-profile" } }, u = {}, p = [{ value: "How can I get help", id: "how-can-i-get-help", level: 2 }, { value: "How can I contact support", id: "how-can-i-contact-support", level: 2 }], f = { toc: p }; function d(e) { var t = e.components, n = (0, o.Z)(e, i); return (0, a.kt)("wrapper", (0, r.Z)({}, f, n, { components: t, mdxType: "MDXLayout" }), (0, a.kt)("h1", { id: "knowledge-base" }, "Knowledge Base"), (0, a.kt)("p", null, "Welcome to the PleasantFree Knowledge Base. This knowledge base is filled with articles detailing many common operations and common issues. If you need any help with your hosting, this is the place to start!"), (0, a.kt)("h2", { id: "how-can-i-get-help" }, "How can I get help"), (0, a.kt)("p", null, "If you want to get help quickly, here is a good process to follow:"), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "Check the knowledge base first. Many common questions have been answered there already. Try using the search bar in the top right corner!"), (0, a.kt)("li", { parentName: "ul" }, "Search our ", (0, a.kt)("a", { parentName: "li", href: "https://forum.pleasantfree.com/" }, "community forum"), ". Thousands of questions have been asked and answered there already, so maybe you can find an answer there already!"), (0, a.kt)("li", { parentName: "ul" }, "Create a new topic on our ", (0, a.kt)("a", { parentName: "li", href: "https://forum.pleasantfree.com/" }, "community forum"), " and ask your question there. Please be sure to be specific in your message, and include relevant details like account usernames, URLs and exact error messages.")), (0, a.kt)("h2", { id: "how-can-i-contact-support" }, "How can I contact support"), (0, a.kt)("p", null, "Please note that PleasantFree does not provide any one-on-one technical support for free hosting."), (0, a.kt)("p", null, "If you would like to have one-on-one technical support, please consider upgrading your account to ", (0, a.kt)("a", { parentName: "p", href: "https://pleasantfree.com/go/ifastnet" }, "premium hosting"), ".")) } d.isMDXComponent = !0 } }]);