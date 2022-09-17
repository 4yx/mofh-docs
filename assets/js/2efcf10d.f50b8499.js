"use strict"; (self.webpackChunkhtdocs = self.webpackChunkhtdocs || []).push([[652], { 3905: function (e, t, n) { n.d(t, { Zo: function () { return u }, kt: function () { return d } }); var r = n(7294); function o(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } function i(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(e); t && (r = r.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r) } return n } function a(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {}; t % 2 ? i(Object(n), !0).forEach((function (t) { o(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e } function l(e, t) { if (null == e) return {}; var n, r, o = function (e, t) { if (null == e) return {}; var n, r, o = {}, i = Object.keys(e); for (r = 0; r < i.length; r++)n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]); return o }(e, t); if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(e); for (r = 0; r < i.length; r++)n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]) } return o } var s = r.createContext({}), c = function (e) { var t = r.useContext(s), n = t; return e && (n = "function" == typeof e ? e(t) : a(a({}, t), e)), n }, u = function (e) { var t = c(e.components); return r.createElement(s.Provider, { value: t }, e.children) }, p = { inlineCode: "code", wrapper: function (e) { var t = e.children; return r.createElement(r.Fragment, {}, t) } }, f = r.forwardRef((function (e, t) { var n = e.components, o = e.mdxType, i = e.originalType, s = e.parentName, u = l(e, ["components", "mdxType", "originalType", "parentName"]), f = c(n), d = o, y = f["".concat(s, ".").concat(d)] || f[d] || p[d] || i; return n ? r.createElement(y, a(a({ ref: t }, u), {}, { components: n })) : r.createElement(y, a({ ref: t }, u)) })); function d(e, t) { var n = arguments, o = t && t.mdxType; if ("string" == typeof e || o) { var i = n.length, a = new Array(i); a[0] = f; var l = {}; for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]); l.originalType = e, l.mdxType = "string" == typeof e ? e : o, a[1] = l; for (var c = 2; c < i; c++)a[c] = n[c]; return r.createElement.apply(null, a) } return r.createElement.apply(null, n) } f.displayName = "MDXCreateElement" }, 1938: function (e, t, n) { n.r(t), n.d(t, { assets: function () { return u }, contentTitle: function () { return s }, default: function () { return d }, frontMatter: function () { return l }, metadata: function () { return c }, toc: function () { return p } }); var r = n(7462), o = n(3366), i = (n(7294), n(3905)), a = ["components"], l = { description: "Now at this point, you may/should install the certificate on your account to secure your website from hackers ASAP!" }, s = "Installing Free SSL Certificate", c = { unversionedId: "ssl-and-security/install-ssl-certificate", id: "ssl-and-security/install-ssl-certificate", title: "Installing Free SSL Certificate", description: "Now at this point, you may/should install the certificate on your account to secure your website from hackers ASAP!", source: "@site/docs/ssl-and-security/install-ssl-certificate.md", sourceDirName: "ssl-and-security", slug: "/ssl-and-security/install-ssl-certificate", permalink: "/ssl-and-security/install-ssl-certificate", draft: !1, tags: [], version: "current", frontMatter: { description: "Now at this point, you may/should install the certificate on your account to secure your website from hackers ASAP!" }, sidebar: "tutorialSidebar", previous: { title: "Forcing Web Traffic To Use HTTPS", permalink: "/ssl-and-security/force-https-traffic" }, next: { title: "Verify In Google Search Console", permalink: "/websites-and-php/google-search-console" } }, u = {}, p = [], f = { toc: p }; function d(e) { var t = e.components, n = (0, o.Z)(e, a); return (0, i.kt)("wrapper", (0, r.Z)({}, f, n, { components: t, mdxType: "MDXLayout" }), (0, i.kt)("h1", { id: "installing-free-ssl-certificate" }, "Installing Free SSL Certificate"), (0, i.kt)("p", null, "So just got your SSL certificate from our ", (0, i.kt)("a", { parentName: "p", href: "https://app.pleasantfree.com/sslCerts" }, "Free SSL Tool"), " ? That sounds cool and we\u2019d love to get feedback on our tool to constantly improve our product for you!"), (0, i.kt)("p", null, "Now at this point, you may/should install the certificate on your account to secure your website from hackers ASAP! This guide walks you through the steps to get it done, like literally in a jiffy."), (0, i.kt)("p", null, "To do this, you need to log in to your client area and get into your control panel. Then hover over to the ", (0, i.kt)("kbd", null, "SSL/TLS"), " section and choose your domain. And then note these things when uploading the keys."), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "When uploading the certificate and private key, there are lines at the top and bottom like ", (0, i.kt)("inlineCode", { parentName: "li" }, "--- BEGIN PRIVATE KEY ---"), " or ", (0, i.kt)("inlineCode", { parentName: "li" }, "--- BEGIN CERTIFICATE ---"), " and ", (0, i.kt)("inlineCode", { parentName: "li" }, "--- END PRIVATE KEY ---"), " OR ", (0, i.kt)("inlineCode", { parentName: "li" }, "--- END CERTIFICATE ---"), ". These lines must also be included when uploading the private key and certificate."), (0, i.kt)("li", { parentName: "ul" }, "The SSL/TLS tool only supports uploading 2048 bits private keys. Some tools may generate 4096 bits of private keys, but those cannot be uploaded here. If you have 4096 bits key, you will have to generate a new private key and certificate."), (0, i.kt)("li", { parentName: "ul" }, "The CSR box may be empty or contain old data. The CSR is only used to get the SSL certificate and is useless afterwards. You don\u2019t need to create or upload a CSR to get SSL on your site."))) } d.isMDXComponent = !0 } }]);