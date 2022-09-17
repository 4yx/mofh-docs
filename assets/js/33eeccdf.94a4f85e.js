"use strict"; (self.webpackChunkhtdocs = self.webpackChunkhtdocs || []).push([[929], { 3905: function (e, t, n) { n.d(t, { Zo: function () { return u }, kt: function () { return f } }); var r = n(7294); function o(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } function a(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(e); t && (r = r.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r) } return n } function i(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {}; t % 2 ? a(Object(n), !0).forEach((function (t) { o(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e } function s(e, t) { if (null == e) return {}; var n, r, o = function (e, t) { if (null == e) return {}; var n, r, o = {}, a = Object.keys(e); for (r = 0; r < a.length; r++)n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]); return o }(e, t); if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e); for (r = 0; r < a.length; r++)n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]) } return o } var p = r.createContext({}), c = function (e) { var t = r.useContext(p), n = t; return e && (n = "function" == typeof e ? e(t) : i(i({}, t), e)), n }, u = function (e) { var t = c(e.components); return r.createElement(p.Provider, { value: t }, e.children) }, d = { inlineCode: "code", wrapper: function (e) { var t = e.children; return r.createElement(r.Fragment, {}, t) } }, l = r.forwardRef((function (e, t) { var n = e.components, o = e.mdxType, a = e.originalType, p = e.parentName, u = s(e, ["components", "mdxType", "originalType", "parentName"]), l = c(n), f = o, m = l["".concat(p, ".").concat(f)] || l[f] || d[f] || a; return n ? r.createElement(m, i(i({ ref: t }, u), {}, { components: n })) : r.createElement(m, i({ ref: t }, u)) })); function f(e, t) { var n = arguments, o = t && t.mdxType; if ("string" == typeof e || o) { var a = n.length, i = new Array(a); i[0] = l; var s = {}; for (var p in t) hasOwnProperty.call(t, p) && (s[p] = t[p]); s.originalType = e, s.mdxType = "string" == typeof e ? e : o, i[1] = s; for (var c = 2; c < a; c++)i[c] = n[c]; return r.createElement.apply(null, i) } return r.createElement.apply(null, n) } l.displayName = "MDXCreateElement" }, 9013: function (e, t, n) { n.r(t), n.d(t, { assets: function () { return u }, contentTitle: function () { return p }, default: function () { return f }, frontMatter: function () { return s }, metadata: function () { return c }, toc: function () { return d } }); var r = n(7462), o = n(3366), a = (n(7294), n(3905)), i = ["components"], s = { description: "DNS propagation is the time frame it takes for DNS changes to be updated across the Internet." }, p = "What Is DNS Propagation", c = { unversionedId: "domains-and-dns/dns-propagation", id: "domains-and-dns/dns-propagation", title: "What Is DNS Propagation", description: "DNS propagation is the time frame it takes for DNS changes to be updated across the Internet.", source: "@site/docs/domains-and-dns/dns-propagation.md", sourceDirName: "domains-and-dns", slug: "/domains-and-dns/dns-propagation", permalink: "/domains-and-dns/dns-propagation", draft: !1, tags: [], version: "current", frontMatter: { description: "DNS propagation is the time frame it takes for DNS changes to be updated across the Internet." }, sidebar: "tutorialSidebar", previous: { title: "Upgraded Hosting Account", permalink: "/account-management/upgraded-account" }, next: { title: "DNS Query Refused", permalink: "/domains-and-dns/dns-query-refused" } }, u = {}, d = [{ value: "The Problem", id: "the-problem", level: 2 }], l = { toc: d }; function f(e) { var t = e.components, n = (0, o.Z)(e, i); return (0, a.kt)("wrapper", (0, r.Z)({}, l, n, { components: t, mdxType: "MDXLayout" }), (0, a.kt)("h1", { id: "what-is-dns-propagation" }, "What Is DNS Propagation"), (0, a.kt)("p", null, "DNS propagation is the time frame it takes for DNS changes to be updated across the Internet. "), (0, a.kt)("p", null, "A change to a DNS record ", "\u2013", " for example, changing the IP address defined for a specific hostname ", "\u2013", " can take up to 72 hours to propagate worldwide, although it typically takes a few hours, or even a few seconds. "), (0, a.kt)("p", null, "For many modern use cases, these DNS propagation times are inconvenient, or simply unacceptable."), (0, a.kt)("h2", { id: "the-problem" }, "The Problem"), (0, a.kt)("p", null, "The problem with DNS propagation is that it is only as strong as its weakest link. There is a huge, global chain of DNS servers and local DNS resolvers, and as long as one element in the chain insists on retaining its old DNS information, propagation won\u2019t be complete."), (0, a.kt)("p", null, "Propagation is a hard problem, but you\u2019d be surprised ", "\u2013", " with next-generation DNS infrastructure, DNS propagation time can be reduced from days or hours to just a few seconds. ", (0, a.kt)("a", { parentName: "p", href: "https://ns1.com/resources/dns-propagation" }, "Read More at NS1.com"), ".")) } f.isMDXComponent = !0 } }]);