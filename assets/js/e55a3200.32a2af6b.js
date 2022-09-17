"use strict"; (self.webpackChunkhtdocs = self.webpackChunkhtdocs || []).push([[967], { 3905: function (e, t, r) { r.d(t, { Zo: function () { return p }, kt: function () { return l } }); var n = r(7294); function o(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e } function a(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); t && (n = n.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n) } return r } function i(e) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {}; t % 2 ? a(Object(r), !0).forEach((function (t) { o(e, t, r[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) })) } return e } function u(e, t) { if (null == e) return {}; var r, n, o = function (e, t) { if (null == e) return {}; var r, n, o = {}, a = Object.keys(e); for (n = 0; n < a.length; n++)r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]); return o }(e, t); if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e); for (n = 0; n < a.length; n++)r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]) } return o } var c = n.createContext({}), s = function (e) { var t = n.useContext(c), r = t; return e && (r = "function" == typeof e ? e(t) : i(i({}, t), e)), r }, p = function (e) { var t = s(e.components); return n.createElement(c.Provider, { value: t }, e.children) }, m = { inlineCode: "code", wrapper: function (e) { var t = e.children; return n.createElement(n.Fragment, {}, t) } }, d = n.forwardRef((function (e, t) { var r = e.components, o = e.mdxType, a = e.originalType, c = e.parentName, p = u(e, ["components", "mdxType", "originalType", "parentName"]), d = s(r), l = o, g = d["".concat(c, ".").concat(l)] || d[l] || m[l] || a; return r ? n.createElement(g, i(i({ ref: t }, p), {}, { components: r })) : n.createElement(g, i({ ref: t }, p)) })); function l(e, t) { var r = arguments, o = t && t.mdxType; if ("string" == typeof e || o) { var a = r.length, i = new Array(a); i[0] = d; var u = {}; for (var c in t) hasOwnProperty.call(t, c) && (u[c] = t[c]); u.originalType = e, u.mdxType = "string" == typeof e ? e : o, i[1] = u; for (var s = 2; s < a; s++)i[s] = r[s]; return n.createElement.apply(null, i) } return n.createElement.apply(null, r) } d.displayName = "MDXCreateElement" }, 2984: function (e, t, r) { r.r(t), r.d(t, { assets: function () { return p }, contentTitle: function () { return c }, default: function () { return l }, frontMatter: function () { return u }, metadata: function () { return s }, toc: function () { return m } }); var n = r(7462), o = r(3366), a = (r(7294), r(3905)), i = ["components"], u = { description: "Did you upgrade your free hosting account to a premium package? Cool! Now, take some time to get the maximum of your upgrade." }, c = "Upgraded Hosting Account", s = { unversionedId: "account-management/upgraded-account", id: "account-management/upgraded-account", title: "Upgraded Hosting Account", description: "Did you upgrade your free hosting account to a premium package? Cool! Now, take some time to get the maximum of your upgrade.", source: "@site/docs/account-management/upgraded-account.md", sourceDirName: "account-management", slug: "/account-management/upgraded-account", permalink: "/account-management/upgraded-account", draft: !1, tags: [], version: "current", frontMatter: { description: "Did you upgrade your free hosting account to a premium package? Cool! Now, take some time to get the maximum of your upgrade." }, sidebar: "tutorialSidebar", previous: { title: "Suspended For Inactivity", permalink: "/account-management/suspended-for-inactivity" }, next: { title: "What Is DNS Propagation", permalink: "/domains-and-dns/dns-propagation" } }, p = {}, m = [{ value: "An iFastNet Customer", id: "an-ifastnet-customer", level: 2 }, { value: "Migrate your website", id: "migrate-your-website", level: 2 }], d = { toc: m }; function l(e) { var t = e.components, r = (0, o.Z)(e, i); return (0, a.kt)("wrapper", (0, n.Z)({}, d, r, { components: t, mdxType: "MDXLayout" }), (0, a.kt)("h1", { id: "upgraded-hosting-account" }, "Upgraded Hosting Account"), (0, a.kt)("p", null, "Did you upgrade your free hosting account to a premium package? Cool! Now, take some time to get the maximum of your upgrade."), (0, a.kt)("h2", { id: "an-ifastnet-customer" }, "An iFastNet Customer"), (0, a.kt)("p", null, "We (PleasantFree) provide free web hosting services which are powered and sponsored by iFastNet LTD. We do not provide any sort of premium services."), (0, a.kt)("p", null, "If you have any questions regarding premium hosting, be it how to use it, the status of your order, basic questions or even get help with your code, you can directly get in touch with their customer-friendly support representatives at ", (0, a.kt)("a", { parentName: "p", href: "https://support.ifastnet.com/" }, "support.ifastnet.com"), "."), (0, a.kt)("p", null, "You need to create a separate account for accessing the ticket system. Ticketing systme logins are not linked either to our login or iFastNet's billing systems."), (0, a.kt)("h2", { id: "migrate-your-website" }, "Migrate your website"), (0, a.kt)("p", null, "To migrate your website, you need to create a ticket and ask iFastNet to migrate your website from free hosting servers to premium hosting servers, keeping your domain name still intact as before. Make sure mention details of your free hosting account such as its username. Also provide your invoice number from iFastNet's billing service.")) } l.isMDXComponent = !0 } }]);