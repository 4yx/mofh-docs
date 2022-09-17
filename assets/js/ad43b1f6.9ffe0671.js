"use strict"; (self.webpackChunkhtdocs = self.webpackChunkhtdocs || []).push([[308], { 3905: (e, t, o) => { o.d(t, { Zo: () => u, kt: () => d }); var r = o(7294); function n(e, t, o) { return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e } function a(e, t) { var o = Object.keys(e); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(e); t && (r = r.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), o.push.apply(o, r) } return o } function l(e) { for (var t = 1; t < arguments.length; t++) { var o = null != arguments[t] ? arguments[t] : {}; t % 2 ? a(Object(o), !0).forEach((function (t) { n(e, t, o[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : a(Object(o)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t)) })) } return e } function i(e, t) { if (null == e) return {}; var o, r, n = function (e, t) { if (null == e) return {}; var o, r, n = {}, a = Object.keys(e); for (r = 0; r < a.length; r++)o = a[r], t.indexOf(o) >= 0 || (n[o] = e[o]); return n }(e, t); if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e); for (r = 0; r < a.length; r++)o = a[r], t.indexOf(o) >= 0 || Object.prototype.propertyIsEnumerable.call(e, o) && (n[o] = e[o]) } return n } var s = r.createContext({}), p = function (e) { var t = r.useContext(s), o = t; return e && (o = "function" == typeof e ? e(t) : l(l({}, t), e)), o }, u = function (e) { var t = p(e.components); return r.createElement(s.Provider, { value: t }, e.children) }, c = { inlineCode: "code", wrapper: function (e) { var t = e.children; return r.createElement(r.Fragment, {}, t) } }, h = r.forwardRef((function (e, t) { var o = e.components, n = e.mdxType, a = e.originalType, s = e.parentName, u = i(e, ["components", "mdxType", "originalType", "parentName"]), h = p(o), d = n, y = h["".concat(s, ".").concat(d)] || h[d] || c[d] || a; return o ? r.createElement(y, l(l({ ref: t }, u), {}, { components: o })) : r.createElement(y, l({ ref: t }, u)) })); function d(e, t) { var o = arguments, n = t && t.mdxType; if ("string" == typeof e || n) { var a = o.length, l = new Array(a); l[0] = h; var i = {}; for (var s in t) hasOwnProperty.call(t, s) && (i[s] = t[s]); i.originalType = e, i.mdxType = "string" == typeof e ? e : n, l[1] = i; for (var p = 2; p < a; p++)l[p] = o[p]; return r.createElement.apply(null, l) } return r.createElement.apply(null, o) } h.displayName = "MDXCreateElement" }, 7926: (e, t, o) => { o.r(t), o.d(t, { assets: () => s, contentTitle: () => l, default: () => c, frontMatter: () => a, metadata: () => i, toc: () => p }); var r = o(7462), n = (o(7294), o(3905)); const a = { description: "The Google Search Console is a useful tool to help you learn about how your website is crawled by Google." }, l = "Verify In Google Search Console", i = { unversionedId: "websites-and-php/google-search-console", id: "websites-and-php/google-search-console", title: "Verify In Google Search Console", description: "The Google Search Console is a useful tool to help you learn about how your website is crawled by Google.", source: "@site/docs/websites-and-php/google-search-console.md", sourceDirName: "websites-and-php", slug: "/websites-and-php/google-search-console", permalink: "/websites-and-php/google-search-console", draft: !1, tags: [], version: "current", frontMatter: { description: "The Google Search Console is a useful tool to help you learn about how your website is crawled by Google." }, sidebar: "tutorialSidebar", previous: { title: "Installing Free SSL Certificate", permalink: "/ssl-and-security/install-ssl-certificate" }, next: { title: "MCrypt Extension Not Installed", permalink: "/websites-and-php/mcrypt-extension" } }, s = {}, p = [{ value: "Whether to use a URL-prefix property or Domain property", id: "whether-to-use-a-url-prefix-property-or-domain-property", level: 2 }, { value: "Make sure your website base URL is consistent", id: "make-sure-your-website-base-url-is-consistent", level: 2 }, { value: "Adding your website to Google Search Console", id: "adding-your-website-to-google-search-console", level: 2 }], u = { toc: p }; function c(e) { let { components: t, ...o } = e; return (0, n.kt)("wrapper", (0, r.Z)({}, u, o, { components: t, mdxType: "MDXLayout" }), (0, n.kt)("h1", { id: "verify-in-google-search-console" }, "Verify In Google Search Console"), (0, n.kt)("p", null, "The Google Search Console is a useful tool to help you learn about how your website is crawled by Google and to make changes to how Google indexes your website."), (0, n.kt)("p", null, "To see this information, you need to sign up for the Google Search Console and add your website."), (0, n.kt)("h2", { id: "whether-to-use-a-url-prefix-property-or-domain-property" }, "Whether to use a URL-prefix property or Domain property"), (0, n.kt)("p", null, "Google Search Console has two ways to add a website: you can use a URL-prefix property or Domain property."), (0, n.kt)("p", null, "Domain property is the most powerful. However, to verify your domain name as a domain property, you need to set a TXT record on your domain. "), (0, n.kt)("p", null, "Unfortunately, it is not possible to create TXT records when using PleasantFree nameservers. If you use third party nameservers on your domain (such as Cloudflare), you can use this option."), (0, n.kt)("p", null, "If you're using PleasantFree nameservers, you can use a URL property instead. This only requires a website verification, which can be done on any (sub) domain and any nameservers."), (0, n.kt)("h2", { id: "make-sure-your-website-base-url-is-consistent" }, "Make sure your website base URL is consistent"), (0, n.kt)("p", null, "If you have a domain name ", (0, n.kt)("inlineCode", { parentName: "p" }, "example.com"), " and have SSL set up on your domain, then all the following URLs will serve the same content:"), (0, n.kt)("ul", null, (0, n.kt)("li", { parentName: "ul" }, (0, n.kt)("a", { parentName: "li", href: "http://example.com" }, "http://example.com")), (0, n.kt)("li", { parentName: "ul" }, (0, n.kt)("a", { parentName: "li", href: "http://www.example.com" }, "http://www.example.com")), (0, n.kt)("li", { parentName: "ul" }, (0, n.kt)("a", { parentName: "li", href: "https://example.com" }, "https://example.com")), (0, n.kt)("li", { parentName: "ul" }, (0, n.kt)("a", { parentName: "li", href: "https://www.example.com" }, "https://www.example.com"))), (0, n.kt)("p", null, "In order to get correct stats in Google Search Console (and generally improve your site's SEO), you should make sure you are redirecting all of the URLs above to a single URL (either with our without HTTPS and with our without www)."), (0, n.kt)("p", null, "There are multiple ways to do this. If your website has a Website URL option, that should first be configured to the right URL. This may also fix the redirects."), (0, n.kt)("p", null, "You can also use ", (0, n.kt)("inlineCode", { parentName: "p" }, ".htaccess"), " rules to enforce the redirects. You can find example .htaccess snippets by searching the web."), (0, n.kt)("h2", { id: "adding-your-website-to-google-search-console" }, "Adding your website to Google Search Console"), (0, n.kt)("p", null, "To add your website as a URL-prefix property, you can do the following:"), (0, n.kt)("ol", null, (0, n.kt)("li", { parentName: "ol" }, "Go to ", (0, n.kt)("a", { parentName: "li", href: "https://search.google.com/search-console" }, "Google Search Console"), " and sign in with your Google account."), (0, n.kt)("li", { parentName: "ol" }, 'Click "Add property" and choose the type "URL prefix".'), (0, n.kt)("li", { parentName: "ol" }, "Enter website base URL, including ", (0, n.kt)("inlineCode", { parentName: "li" }, "http://"), " or ", (0, n.kt)("inlineCode", { parentName: "li" }, "https://"), " and optionally the ", (0, n.kt)("inlineCode", { parentName: "li" }, "www"), " subdomain."), (0, n.kt)("li", { parentName: "ol" }, "Choose verification method HTML file."), (0, n.kt)("li", { parentName: "ol" }, "Download the HTML File to your computer."), (0, n.kt)("li", { parentName: "ol" }, "Open a file manager or FTP client connected to your hosting account, and navigate to your website folder."), (0, n.kt)("li", { parentName: "ol" }, "Upload the HTML file you just download to the ", (0, n.kt)("inlineCode", { parentName: "li" }, "htdocs"), " folder."), (0, n.kt)("li", { parentName: "ol" }, 'Click the "Verify" button to complete the verification.')), (0, n.kt)("p", null, "The above steps are all you need to verify your website on the GSC.")) } c.isMDXComponent = !0 } }]);