"use strict"; (self.webpackChunkhtdocs = self.webpackChunkhtdocs || []).push([[483], { 3905: function (e, n, t) { t.d(n, { Zo: function () { return d }, kt: function () { return p } }); var r = t(7294); function o(e, n, t) { return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e } function a(e, n) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(e); n && (r = r.filter((function (n) { return Object.getOwnPropertyDescriptor(e, n).enumerable }))), t.push.apply(t, r) } return t } function i(e) { for (var n = 1; n < arguments.length; n++) { var t = null != arguments[n] ? arguments[n] : {}; n % 2 ? a(Object(t), !0).forEach((function (n) { o(e, n, t[n]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach((function (n) { Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n)) })) } return e } function s(e, n) { if (null == e) return {}; var t, r, o = function (e, n) { if (null == e) return {}; var t, r, o = {}, a = Object.keys(e); for (r = 0; r < a.length; r++)t = a[r], n.indexOf(t) >= 0 || (o[t] = e[t]); return o }(e, n); if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e); for (r = 0; r < a.length; r++)t = a[r], n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]) } return o } var u = r.createContext({}), l = function (e) { var n = r.useContext(u), t = n; return e && (t = "function" == typeof e ? e(n) : i(i({}, n), e)), t }, d = function (e) { var n = l(e.components); return r.createElement(u.Provider, { value: n }, e.children) }, c = { inlineCode: "code", wrapper: function (e) { var n = e.children; return r.createElement(r.Fragment, {}, n) } }, m = r.forwardRef((function (e, n) { var t = e.components, o = e.mdxType, a = e.originalType, u = e.parentName, d = s(e, ["components", "mdxType", "originalType", "parentName"]), m = l(t), p = o, f = m["".concat(u, ".").concat(p)] || m[p] || c[p] || a; return t ? r.createElement(f, i(i({ ref: n }, d), {}, { components: t })) : r.createElement(f, i({ ref: n }, d)) })); function p(e, n) { var t = arguments, o = n && n.mdxType; if ("string" == typeof e || o) { var a = t.length, i = new Array(a); i[0] = m; var s = {}; for (var u in n) hasOwnProperty.call(n, u) && (s[u] = n[u]); s.originalType = e, s.mdxType = "string" == typeof e ? e : o, i[1] = s; for (var l = 2; l < a; l++)i[l] = t[l]; return r.createElement.apply(null, i) } return r.createElement.apply(null, t) } m.displayName = "MDXCreateElement" }, 6462: function (e, n, t) { t.r(n), t.d(n, { assets: function () { return d }, contentTitle: function () { return u }, default: function () { return p }, frontMatter: function () { return s }, metadata: function () { return l }, toc: function () { return c } }); var r = t(7462), o = t(3366), a = (t(7294), t(3905)), i = ["components"], s = {}, u = "DNS Query Refused", l = { unversionedId: "domains-and-dns/dns-query-refused", id: "domains-and-dns/dns-query-refused", title: "DNS Query Refused", description: "If you want to use your custom domain with PleasantFree, you first need to point the domain to PleasantFree by changing the nameservers at your domain registrar. Read More", source: "@site/docs/domains-and-dns/dns-query-refused.md", sourceDirName: "domains-and-dns", slug: "/domains-and-dns/dns-query-refused", permalink: "/domains-and-dns/dns-query-refused", draft: !1, tags: [], version: "current", frontMatter: {}, sidebar: "tutorialSidebar", previous: { title: "What Is DNS Propagation", permalink: "/domains-and-dns/dns-propagation" }, next: { title: "Removing An Existing Domain", permalink: "/domains-and-dns/remove-domain" } }, d = {}, c = [{ value: "Any Solution?", id: "any-solution", level: 2 }], m = { toc: c }; function p(e) { var n = e.components, t = (0, o.Z)(e, i); return (0, a.kt)("wrapper", (0, r.Z)({}, m, t, { components: n, mdxType: "MDXLayout" }), (0, a.kt)("h1", { id: "dns-query-refused" }, "DNS Query Refused"), (0, a.kt)("p", null, "If you want to use your custom domain with PleasantFree, you first need to point the domain to PleasantFree by changing the nameservers at your domain registrar. ", (0, a.kt)("a", { parentName: "p", href: "https://docs.pleasantfree.com/domains-and-dns/use-custom-domain" }, "Read More")), (0, a.kt)("p", null, "Some registrars may show an error like this when trying to change the DNS nameservers:"), (0, a.kt)("blockquote", null, (0, a.kt)("p", { parentName: "blockquote" }, "DNS Query Refused")), (0, a.kt)("p", null, "OR"), (0, a.kt)("blockquote", null, (0, a.kt)("p", { parentName: "blockquote" }, "Rejected Search")), (0, a.kt)("p", null, "To fix this in most cases, you need to contact your registrar and tell them that nameservers must be set first before verification."), (0, a.kt)("h1", { id: "culprit-of-this-issue" }, "Culprit Of This Issue?"), (0, a.kt)("p", null, "Whenever you want to add a custom domain to your PleasantFree account, we need to verify the domain, which can be only done by changing the domain nameservers first."), (0, a.kt)("p", null, "Some registrars search for your domain records on the nameservers. This will always fail because we create those DNS records for your domain after verifying your domain name."), (0, a.kt)("h2", { id: "any-solution" }, "Any Solution?"), (0, a.kt)("p", null, "Sorry to break it to you but, we really don\u2019t have an alternate solution to verify your domain name."), (0, a.kt)("p", null, "But, we were indeed able to identify some domain extensions whose registrars do implement these checks."), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, (0, a.kt)("inlineCode", { parentName: "li" }, ".com.br")), (0, a.kt)("li", { parentName: "ul" }, (0, a.kt)("inlineCode", { parentName: "li" }, ".de")), (0, a.kt)("li", { parentName: "ul" }, (0, a.kt)("inlineCode", { parentName: "li" }, ".dk")), (0, a.kt)("li", { parentName: "ul" }, (0, a.kt)("inlineCode", { parentName: "li" }, ".hu")), (0, a.kt)("li", { parentName: "ul" }, (0, a.kt)("inlineCode", { parentName: "li" }, ".it"))), (0, a.kt)("p", null, "If you have a domain with one of the above domain extensions which you intent to use with PleasantFree, please consider changing the domain extension or getting a refund if you are eligible")) } p.isMDXComponent = !0 } }]);