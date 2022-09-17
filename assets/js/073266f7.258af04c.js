"use strict"; (self.webpackChunkhtdocs = self.webpackChunkhtdocs || []).push([[834], { 3905: function (e, t, n) { n.d(t, { Zo: function () { return p }, kt: function () { return h } }); var r = n(7294); function o(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } function a(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(e); t && (r = r.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r) } return n } function s(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {}; t % 2 ? a(Object(n), !0).forEach((function (t) { o(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e } function i(e, t) { if (null == e) return {}; var n, r, o = function (e, t) { if (null == e) return {}; var n, r, o = {}, a = Object.keys(e); for (r = 0; r < a.length; r++)n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]); return o }(e, t); if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e); for (r = 0; r < a.length; r++)n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]) } return o } var c = r.createContext({}), l = function (e) { var t = r.useContext(c), n = t; return e && (n = "function" == typeof e ? e(t) : s(s({}, t), e)), n }, p = function (e) { var t = l(e.components); return r.createElement(c.Provider, { value: t }, e.children) }, u = { inlineCode: "code", wrapper: function (e) { var t = e.children; return r.createElement(r.Fragment, {}, t) } }, f = r.forwardRef((function (e, t) { var n = e.components, o = e.mdxType, a = e.originalType, c = e.parentName, p = i(e, ["components", "mdxType", "originalType", "parentName"]), f = l(n), h = o, d = f["".concat(c, ".").concat(h)] || f[h] || u[h] || a; return n ? r.createElement(d, s(s({ ref: t }, p), {}, { components: n })) : r.createElement(d, s({ ref: t }, p)) })); function h(e, t) { var n = arguments, o = t && t.mdxType; if ("string" == typeof e || o) { var a = n.length, s = new Array(a); s[0] = f; var i = {}; for (var c in t) hasOwnProperty.call(t, c) && (i[c] = t[c]); i.originalType = e, i.mdxType = "string" == typeof e ? e : o, s[1] = i; for (var l = 2; l < a; l++)s[l] = n[l]; return r.createElement.apply(null, s) } return r.createElement.apply(null, n) } f.displayName = "MDXCreateElement" }, 570: function (e, t, n) { n.r(t), n.d(t, { assets: function () { return p }, contentTitle: function () { return c }, default: function () { return h }, frontMatter: function () { return i }, metadata: function () { return l }, toc: function () { return u } }); var r = n(7462), o = n(3366), a = (n(7294), n(3905)), s = ["components"], i = { description: "PleasantFree is a free web hosting, which also means that we have some restrictions for accounts that could theoretically lead to abuse." }, c = "MCrypt Extension Not Installed", l = { unversionedId: "websites-and-php/mcrypt-extension", id: "websites-and-php/mcrypt-extension", title: "MCrypt Extension Not Installed", description: "PleasantFree is a free web hosting, which also means that we have some restrictions for accounts that could theoretically lead to abuse.", source: "@site/docs/websites-and-php/mcrypt-extension.md", sourceDirName: "websites-and-php", slug: "/websites-and-php/mcrypt-extension", permalink: "/websites-and-php/mcrypt-extension", draft: !1, tags: [], version: "current", frontMatter: { description: "PleasantFree is a free web hosting, which also means that we have some restrictions for accounts that could theoretically lead to abuse." }, sidebar: "tutorialSidebar", previous: { title: "Verify In Google Search Console", permalink: "/websites-and-php/google-search-console" }, next: { title: "Why Is My Memory Exhausted", permalink: "/websites-and-php/memory-exhausted" } }, p = {}, u = [], f = { toc: u }; function h(e) { var t = e.components, n = (0, o.Z)(e, s); return (0, a.kt)("wrapper", (0, r.Z)({}, f, n, { components: t, mdxType: "MDXLayout" }), (0, a.kt)("h1", { id: "mcrypt-extension-not-installed" }, "MCrypt Extension Not Installed"), (0, a.kt)("p", null, "PleasantFree is a free web hosting, which also means that we have some restrictions for accounts that could theoretically lead to abuse. This article may contain affiliate links to external websites."), (0, a.kt)("p", null, "One such restriction is the ", (0, a.kt)("inlineCode", { parentName: "p" }, "mcrypt"), " extension. Even though it is a popular extension in use by some of the top-notch-developers, it uses a lot of server resources for a single process, which we cannot afford for all users."), (0, a.kt)("p", null, "If you are desperately in need of this extension, please consider upgrading to ", (0, a.kt)("a", { parentName: "p", href: "https://pleasantfree.com/terms-of-service" }, "premium hosting (pleasnatfree.com)"), " where you can choose whatever extensions you feel!")) } h.isMDXComponent = !0 } }]);