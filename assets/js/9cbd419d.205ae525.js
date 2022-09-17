"use strict"; (self.webpackChunkhtdocs = self.webpackChunkhtdocs || []).push([[177], { 3905: (e, t, r) => { r.d(t, { Zo: () => u, kt: () => m }); var n = r(7294); function a(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e } function o(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); t && (n = n.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n) } return r } function i(e) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {}; t % 2 ? o(Object(r), !0).forEach((function (t) { a(e, t, r[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) })) } return e } function s(e, t) { if (null == e) return {}; var r, n, a = function (e, t) { if (null == e) return {}; var r, n, a = {}, o = Object.keys(e); for (n = 0; n < o.length; n++)r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]); return a }(e, t); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); for (n = 0; n < o.length; n++)r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]) } return a } var c = n.createContext({}), l = function (e) { var t = n.useContext(c), r = t; return e && (r = "function" == typeof e ? e(t) : i(i({}, t), e)), r }, u = function (e) { var t = l(e.components); return n.createElement(c.Provider, { value: t }, e.children) }, p = { inlineCode: "code", wrapper: function (e) { var t = e.children; return n.createElement(n.Fragment, {}, t) } }, f = n.forwardRef((function (e, t) { var r = e.components, a = e.mdxType, o = e.originalType, c = e.parentName, u = s(e, ["components", "mdxType", "originalType", "parentName"]), f = l(r), m = a, d = f["".concat(c, ".").concat(m)] || f[m] || p[m] || o; return r ? n.createElement(d, i(i({ ref: t }, u), {}, { components: r })) : n.createElement(d, i({ ref: t }, u)) })); function m(e, t) { var r = arguments, a = t && t.mdxType; if ("string" == typeof e || a) { var o = r.length, i = new Array(o); i[0] = f; var s = {}; for (var c in t) hasOwnProperty.call(t, c) && (s[c] = t[c]); s.originalType = e, s.mdxType = "string" == typeof e ? e : a, i[1] = s; for (var l = 2; l < o; l++)i[l] = r[l]; return n.createElement.apply(null, i) } return n.createElement.apply(null, r) } f.displayName = "MDXCreateElement" }, 1271: (e, t, r) => { r.r(t), r.d(t, { assets: () => c, contentTitle: () => i, default: () => p, frontMatter: () => o, metadata: () => s, toc: () => l }); var n = r(7462), a = (r(7294), r(3905)); const o = { description: "A BotNet suspension refers to attacks launched from a free web hosting account. Hosting such attacks is illegal under the law." }, i = "What's A BotNet Attack", s = { unversionedId: "fair-usage-limits/botnet-attack", id: "fair-usage-limits/botnet-attack", title: "What's A BotNet Attack", description: "A BotNet suspension refers to attacks launched from a free web hosting account. Hosting such attacks is illegal under the law.", source: "@site/docs/fair-usage-limits/botnet-attack.md", sourceDirName: "fair-usage-limits", slug: "/fair-usage-limits/botnet-attack", permalink: "/fair-usage-limits/botnet-attack", draft: !1, tags: [], version: "current", frontMatter: { description: "A BotNet suspension refers to attacks launched from a free web hosting account. Hosting such attacks is illegal under the law." }, sidebar: "tutorialSidebar", previous: { title: "Use Your Own Domain", permalink: "/domains-and-dns/use-custom-domain" }, next: { title: "What\u2019s The CPU Limit", permalink: "/fair-usage-limits/cpu-limit" } }, c = {}, l = [], u = { toc: l }; function p(e) { let { components: t, ...r } = e; return (0, a.kt)("wrapper", (0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }), (0, a.kt)("h1", { id: "whats-a-botnet-attack" }, "What's A BotNet Attack"), (0, a.kt)("p", null, "A BotNet suspension refers to attacks launched from a free web hosting account. Hosting such attacks is illegal under the law."), (0, a.kt)("p", null, "We reserve the right to suspend accounts that host such activities. We do this to protect our services from legal challenges and abuse. ", (0, a.kt)("a", { parentName: "p", href: "https://en.wikipedia.org/wiki/Botnet" }, "Read More \u2197"))) } p.isMDXComponent = !0 } }]);