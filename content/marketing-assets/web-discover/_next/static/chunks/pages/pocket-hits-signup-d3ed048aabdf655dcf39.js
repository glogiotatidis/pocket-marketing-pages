_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [30],
  {
    "+RUi": function (e, t, n) {
      "use strict";
      t.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/rainbow-reader.aba2056017c7c71ba2e42361a4314fcc.svg";
    },
    "45bC": function (e, t, n) {
      "use strict";
      t.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/logo-guardian.74f039115fe9a5f6a326ee1f8c8c91cd.png";
    },
    "4NU4": function (e, t, n) {
      "use strict";
      var a = n("q1tI"),
        i = n.n(a),
        r = n("8Kt/"),
        c = n.n(r),
        s = n("UrOR"),
        o = n("Xdly"),
        l = n("wx14"),
        u = n("sUIV"),
        b = n("WHGu"),
        p = n("mjZG"),
        d = i.a.createElement;
      function m(e) {
        var t = e.url,
          n = e.title,
          a = e.description,
          r = e.image,
          c = e.type;
        if (!t || !n || !a) return null;
        var s = r ? "summary_large_image" : "summary",
          o = c || "website",
          m = r ? Object(b.c)(r, { width: 1200 }) : null;
        return d(
          i.a.Fragment,
          null,
          d(
            "meta",
            Object(l.a)(
              { name: "description", content: a },
              Object(u.testIdAttribute)("meta-description")
            )
          ),
          d(
            "meta",
            Object(l.a)(
              { name: "x-pocket-override-excerpt", content: a },
              Object(u.testIdAttribute)("pkt-description")
            )
          ),
          d(
            "meta",
            Object(l.a)(
              { itemProp: "name", content: n },
              Object(u.testIdAttribute)("itemprop-name")
            )
          ),
          d(
            "meta",
            Object(l.a)(
              { itemProp: "description", content: a },
              Object(u.testIdAttribute)("itemprop-description")
            )
          ),
          r
            ? d(
                "meta",
                Object(l.a)(
                  { itemProp: "image", content: m },
                  Object(u.testIdAttribute)("itemprop-image")
                )
              )
            : null,
          d(
            "meta",
            Object(l.a)(
              { name: "twitter:card", content: s },
              Object(u.testIdAttribute)("twitter-card")
            )
          ),
          d(
            "meta",
            Object(l.a)(
              { name: "twitter:url", content: t },
              Object(u.testIdAttribute)("twitter-url")
            )
          ),
          d(
            "meta",
            Object(l.a)(
              { name: "twitter:title", content: n },
              Object(u.testIdAttribute)("twitter-title")
            )
          ),
          d(
            "meta",
            Object(l.a)(
              { name: "twitter:description", content: a },
              Object(u.testIdAttribute)("twitter-description")
            )
          ),
          d(
            "meta",
            Object(l.a)(
              { name: "twitter:site", content: "@pocket" },
              Object(u.testIdAttribute)("twitter-site")
            )
          ),
          r
            ? d(
                "meta",
                Object(l.a)(
                  { name: "twitter:image", content: m },
                  Object(u.testIdAttribute)("twitter-image")
                )
              )
            : null,
          d(
            "meta",
            Object(l.a)(
              { property: "fb:app_id", content: p.h },
              Object(u.testIdAttribute)("fb-app_id")
            )
          ),
          d(
            "meta",
            Object(l.a)(
              { property: "og:type", content: o },
              Object(u.testIdAttribute)("og-type")
            )
          ),
          d(
            "meta",
            Object(l.a)(
              { property: "og:url", content: t },
              Object(u.testIdAttribute)("og-url")
            )
          ),
          d(
            "meta",
            Object(l.a)(
              { property: "og:title", content: n },
              Object(u.testIdAttribute)("og-title")
            )
          ),
          d(
            "meta",
            Object(l.a)(
              { property: "og:description", content: a },
              Object(u.testIdAttribute)("og-description")
            )
          ),
          d(
            "meta",
            Object(l.a)(
              { property: "og:site_name", content: "Pocket" },
              Object(u.testIdAttribute)("og-site_name")
            )
          ),
          r
            ? d(
                "meta",
                Object(l.a)(
                  { property: "og:image", content: m },
                  Object(u.testIdAttribute)("og-image")
                )
              )
            : null
        );
      }
      var g = n("W6kq"),
        f = i.a.createElement,
        h = {
          "de-DE": "Deutsch",
          en: "English",
          "es-ES": "Espa\xf1ol (de Espa\xf1a)",
          "es-LA": "Espa\xf1ol (de Am\xe9rica Latina)",
          "fr-CA": "Fran\xe7ais (Canada)",
          "fr-FR": "Fran\xe7ais (France)",
          "it-IT": "Italiano",
          "ja-JP": "\u65e5\u672c\u8a9e",
          "ko-KR": "\ud55c\uad6d\uc5b4",
          "nl-NL": "Nederlands",
          "pl-PL": "Polski",
          "pt-BR": "Portugu\xeas (do Brasil)",
          "pt-PT": "Portugu\xeas (Europeu)",
          "ru-RU": "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
          "zh-CN": "\u4e2d\u6587\uff08\u7c21\u9ad4\u5b57\uff09",
          "zh-TW": "\u6b63\u9ad4\u4e2d\u6587 (\u7e41\u9ad4)",
        };
      function k(e) {
        var t = e.url,
          n = e.showCanonical;
        if (!t) return null;
        var a = new URL(t),
          r = a.origin,
          c = a.pathname,
          s = g.i18n.options,
          o = null === s || void 0 === s ? void 0 : s.allLanguages,
          b =
            null === o || void 0 === o
              ? void 0
              : o.find(function (e) {
                  return e === c.split("/")[1];
                }),
          p = c.replace("/" + b, "");
        return f(
          i.a.Fragment,
          null,
          n
            ? f(
                "link",
                Object(l.a)(
                  { rel: "canonical", href: r + "/" + b + p },
                  Object(u.testIdAttribute)("link-canonical")
                )
              )
            : null,
          f(
            "link",
            Object(l.a)(
              { rel: "alternate", hrefLang: "x-default", href: r + p },
              Object(u.testIdAttribute)("hreflang-x-default")
            )
          ),
          o.map(function (e) {
            return f(
              "link",
              Object(l.a)(
                {
                  rel: "alternate",
                  hrefLang: e,
                  href: r + "/" + e + p,
                  title: h[e],
                  key: "".concat(e),
                },
                Object(u.testIdAttribute)("hreflang-".concat(e))
              )
            );
          })
        );
      }
      k.defaultProps = { showCanonical: !0 };
      var v = i.a.createElement;
      function O(e) {
        var t = e.metaData,
          n = e.children,
          a = e.title,
          r = void 0 === a ? "Pocket" : a,
          l = e.canonical,
          u = e.renderHreflangLinks,
          b = e.selectedNavLink,
          p = e.isFullWidthLayout,
          d = e.hasFooterColorBorder,
          g =
            (null === t || void 0 === t ? void 0 : t.description) &&
            (null === t || void 0 === t ? void 0 : t.title);
        return v(
          i.a.Fragment,
          null,
          v(
            c.a,
            null,
            v("title", null, r),
            v("link", {
              rel: "icon",
              type: "image/x-icon",
              href: "/favicon.ico",
            }),
            l ? v("link", { rel: "canonical", href: l }) : null,
            u
              ? v(k, {
                  url: null === t || void 0 === t ? void 0 : t.url,
                  showCanonical: void 0 === l,
                })
              : null,
            g ? v(m, t) : null
          ),
          v(o.a, { selectedLink: b }),
          p ? n : v(s.u, null, n),
          v(s.l, { hasColorBorder: d })
        );
      }
      O.defaultProps = {
        selectedNavLink: void 0,
        renderHreflangLinks: !1,
        isFullWidthLayout: !1,
        hasFooterColorBorder: !1,
      };
      t.a = O;
    },
    "4cuu": function (e, t, n) {
      "use strict";
      t.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/logo-mentalFloss.06006c57b9c4bbeb44c0e0b6950f1f05.png";
    },
    "5i2K": function (e, t, n) {
      "use strict";
      (function (e) {
        n.d(t, "a", function () {
          return Y;
        });
        var a = n("wx14"),
          i = n("q1tI"),
          r = n.n(i),
          c = n("/MKj"),
          s = (n("40A7"), n("TSYQ")),
          o = n.n(s),
          l = n("8Kt/"),
          u = n.n(l),
          b = n("sUIV"),
          p = n("4NU4"),
          d = n("UrOR"),
          m = n("Q3KZ"),
          g = n("gjIV"),
          f = n("8K+i"),
          h = n("Z4hQ"),
          k = n("G4z+"),
          v = n("w/UP"),
          O = n("rJe6"),
          j = n("H0Ei"),
          w = n("+RUi"),
          x = n("xs9+"),
          y = n("MHHx"),
          _ = n("vsCm"),
          E = n("SVee"),
          S = n("G8M/"),
          I = n("4cuu"),
          P = n("AuvZ"),
          A = n("rhgJ"),
          N = n("9BKm"),
          F = n("azIq"),
          L = n("g/p1"),
          H = n("Nh05"),
          M = n("ZxZo"),
          T = n("Jrzl"),
          z = n("IBkr"),
          D = n("45bC"),
          C = n("HzB2"),
          B = r.a.createElement,
          R = "w6e6b6j",
          U = "cptc9ry",
          q = "f1bb9er5",
          G = "f18v8ptf",
          K = "fqhndfk",
          J = "f10l73jj",
          V = "h12czhxt",
          W = "m5uv60d",
          Z = "rd982ym",
          Q = "t1ukjtfp";
        function Y(t) {
          var n = t.language,
            s = void 0 === n ? "en" : n,
            l = Object(c.b)(),
            Y = Object(c.c)(function (e) {
              return e.pocketHits.signupRequestState;
            }),
            X = Object(c.c)(function (e) {
              return e.pocketHits.signupError;
            }),
            $ = Object(i.useState)(),
            ee = $[0],
            te = $[1],
            ne = "pending" === Y,
            ae = "success" === Y,
            ie = C[s];
          function re(e) {
            Object(g.b)(e);
          }
          function ce(e, t, n, a) {
            te(e),
              Object(g.c)(e),
              l(Object(m.c)(t, n, "explore-signup", "marketing", s, a));
          }
          function se(e) {
            Object(g.d)(e);
          }
          return (
            Object(i.useEffect)(function () {
              Object(g.f)();
            }, []),
            Object(i.useEffect)(
              function () {
                "success" === Y
                  ? (function (t) {
                      e && e.scrollTo && e.scrollTo(0, 0);
                      Object(g.e)(t);
                    })(ee)
                  : "failure" === Y && se(ee);
              },
              [Y, ee]
            ),
            B(
              r.a.Fragment,
              null,
              B(
                u.a,
                null,
                B("link", {
                  rel: "alternate",
                  hreflang: "x-default",
                  href: "https://getpocket.com/en/explore/pocket-hits-signup/",
                }),
                B("link", {
                  rel: "alternate",
                  hreflang: "en",
                  href: "https://getpocket.com/en/explore/pocket-hits-signup/",
                  title: "English",
                }),
                B("link", {
                  rel: "alternate",
                  hreflang: "de",
                  href: "https://getpocket.com/de/explore/pocket-hits-signup/",
                  title: "Deutsch",
                })
              ),
              B(
                "div",
                { className: R },
                B(
                  p.a,
                  {
                    title: ie.title,
                    metaData: {
                      url: ie.canonical,
                      description: ie.metaDescription,
                      image: "en" === s ? "".concat(O.a) : null,
                      title: ie.title,
                    },
                    canonical: ie.canonical,
                    selectedNavLink: null,
                    isFullWidthLayout: !0,
                  },
                  B(
                    h.a,
                    Object(a.a)(
                      {
                        language: s,
                        contentMap: {
                          de: B(
                            d.b,
                            { className: Q },
                            B("span", {
                              dangerouslySetInnerHTML: { __html: ie.topbar },
                            })
                          ),
                        },
                      },
                      Object(b.testIdAttribute)("top-bar")
                    )
                  ),
                  B(
                    d.u,
                    null,
                    B(
                      "div",
                      { className: U },
                      ae
                        ? B(
                            r.a.Fragment,
                            null,
                            B(
                              "h1",
                              Object(b.testIdAttribute)("success-message"),
                              ie.isSuccessful.headline
                            ),
                            B(
                              "h3",
                              { className: "h6" },
                              ie.isSuccessful.subheadline
                            ),
                            B(
                              "div",
                              { className: W },
                              B("img", { src: j.a, alt: "" }),
                              ie.isSuccessful.buttonLabel
                                ? B(
                                    d.c,
                                    {
                                      variant: "emphasized",
                                      href:
                                        "/explore/must-reads?utm_source=de-pocket-hits-signup-confirmation",
                                    },
                                    ie.isSuccessful.buttonLabel
                                  )
                                : null
                            )
                          )
                        : B(
                            r.a.Fragment,
                            null,
                            B(
                              "h1",
                              { className: "h3" },
                              ie.beforeSubmit.headline
                            ),
                            B(
                              "h3",
                              { className: "h6" },
                              ie.beforeSubmit.subheadline
                            ),
                            B(
                              "div",
                              { className: q },
                              B(
                                f.a,
                                Object(a.a)(
                                  {
                                    instanceId: "top",
                                    isProcessing: "top" === ee && ne,
                                    onFocus: re,
                                    onCheckboxChecked: function (e) {
                                      Object(g.a)(e);
                                    },
                                    onValidSubmit: ce,
                                    onValidationError: se,
                                    errorMessage:
                                      "top" === ee && X
                                        ? ie.defaultError
                                        : null,
                                    displayErrorInline: !0,
                                    buttonVariant: "emphasized",
                                    inputLabel:
                                      ie.topEmailSignupForm.inputLabel,
                                    buttonLabel:
                                      ie.topEmailSignupForm.buttonLabel,
                                    invalidEmailError:
                                      ie.topEmailSignupForm.invalidEmailError,
                                    buttonLabelProcessing:
                                      ie.topEmailSignupForm
                                        .buttonLabelProcessing,
                                    showCheckbox: "de" === s,
                                    checkboxLabel:
                                      ie.topEmailSignupForm.checkboxLabel,
                                  },
                                  Object(b.testIdAttribute)("email-form")
                                )
                              ),
                              B(
                                "div",
                                { className: G },
                                B(
                                  h.a,
                                  Object(a.a)(
                                    {
                                      language: s,
                                      contentMap: {
                                        de: B(
                                          i.Fragment,
                                          null,
                                          B("span", null),
                                          B(
                                            "span",
                                            { className: J },
                                            B(
                                              "a",
                                              {
                                                href: "/privacy",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                              },
                                              ie.formSubtext.privacy
                                            ),
                                            B("span", null, "\xb7"),
                                            B(
                                              "a",
                                              {
                                                href: "/tos",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                              },
                                              ie.formSubtext.terms
                                            )
                                          )
                                        ),
                                        en: B(
                                          i.Fragment,
                                          null,
                                          B(
                                            "span",
                                            { className: K },
                                            ie.formSubtext.subtext,
                                            B(
                                              "a",
                                              {
                                                href:
                                                  "https://getpocket.com/explore/pocket-hits",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                              },
                                              ie.formSubtext.linkText,
                                              B(d.a, {
                                                className: "arrow-icon",
                                              })
                                            )
                                          ),
                                          B(
                                            "span",
                                            { className: J },
                                            B(
                                              "a",
                                              {
                                                href: "/privacy",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                              },
                                              ie.formSubtext.privacy
                                            ),
                                            B("span", null, "\xb7"),
                                            B(
                                              "a",
                                              {
                                                href: "/tos",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                              },
                                              ie.formSubtext.terms
                                            )
                                          )
                                        ),
                                      },
                                    },
                                    Object(b.testIdAttribute)("form-subtext")
                                  )
                                )
                              )
                            ),
                            B(
                              h.a,
                              Object(a.a)(
                                {
                                  language: s,
                                  contentMap: {
                                    de: " ",
                                    en: B("img", {
                                      src: w.a,
                                      className: V,
                                      alt: "",
                                    }),
                                  },
                                },
                                Object(b.testIdAttribute)("hero-image")
                              )
                            )
                          ),
                      B(
                        h.a,
                        Object(a.a)(
                          {
                            language: s,
                            contentMap: {
                              de: B(v.a, {
                                topics: [
                                  "Wissenschaft",
                                  "Technologie",
                                  "Gesundheit",
                                  "Kultur",
                                  "Pers\xf6nliche Weiterentwicklung",
                                  "Politik",
                                  "Nachrichten",
                                  "Reisen",
                                  "\xdcberraschende Themen",
                                ],
                              }),
                            },
                          },
                          Object(b.testIdAttribute)("topic-list")
                        )
                      ),
                      B(
                        h.a,
                        Object(a.a)(
                          {
                            language: s,
                            contentMap: {
                              de: " ",
                              en: B(
                                r.a.Fragment,
                                null,
                                B(
                                  "h6",
                                  { className: o()(Z, "color-amber") },
                                  ie.publisherHeadline
                                ),
                                B(k.a, {
                                  publishers: [
                                    { name: "Popular Science", path: x.a },
                                    { name: "Citylab", path: y.a },
                                    { name: "Nautilus", path: _.a },
                                    { name: "Outside", path: E.a },
                                    { name: "The Atlantic", path: S.a },
                                    { name: "Mental Floss", path: I.a },
                                    { name: "Texas Monthly", path: P.a },
                                    { name: "Saveur", path: A.a },
                                    { name: "Narratively", path: N.a },
                                    { name: "Atlas Obscura", path: F.a },
                                    {
                                      name: "Harvard Business Review",
                                      path: L.a,
                                    },
                                    { name: "Kiplinger", path: H.a },
                                    { name: "Fast Company", path: M.a },
                                    { name: "Inc.", path: T.a },
                                    { name: "Quartz", path: z.a },
                                    { name: "The Guardian", path: D.a },
                                  ],
                                })
                              ),
                            },
                          },
                          Object(b.testIdAttribute)("publisher-grid")
                        )
                      ),
                      B(
                        h.a,
                        Object(a.a)(
                          {
                            language: s,
                            contentMap: {
                              de: " ",
                              en: B(
                                r.a.Fragment,
                                null,
                                ae
                                  ? null
                                  : B(
                                      r.a.Fragment,
                                      null,
                                      B(
                                        "h6",
                                        { className: Z },
                                        ie.bottomEmailSignupForm.headline
                                      ),
                                      B(f.a, {
                                        instanceId: "bottom",
                                        isProcessing: "bottom" === ee && ne,
                                        onFocus: re,
                                        onValidSubmit: ce,
                                        onValidationError: se,
                                        errorMessage:
                                          "bottom" === ee && X
                                            ? ie.topEmailSignupForm.defaultError
                                            : null,
                                        buttonVariant: "emphasized",
                                      })
                                    )
                              ),
                            },
                          },
                          Object(b.testIdAttribute)("bottom-form")
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        }
        n("y1/5");
      }.call(this, n("yLpj")));
    },
    "9BKm": function (e, t, n) {
      "use strict";
      t.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/logo-narratively.2bad2936c51eb8ff8ee0373ce5d84cce.png";
    },
    AuvZ: function (e, t, n) {
      "use strict";
      t.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/logo-texasMonthly.3e6a266d1f86c6168b17c3f0ff5cc9e6.png";
    },
    FFrl: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("5i2K");
      (a.a.getInitialProps = function (e) {
        return {
          language: e.res.get("x-pocket-lang"),
          namespacesRequired: ["common"],
        };
      }),
        (t.default = a.a);
    },
    "G4z+": function (e, t, n) {
      "use strict";
      var a = n("q1tI"),
        i = n.n(a),
        r = (n("40A7"), n("UrOR"), i.a.createElement),
        c = "pkmh4gb";
      (t.a = function (e) {
        var t = e.publishers;
        return r(
          "div",
          { className: c },
          t.map(function (e) {
            return r("img", {
              src: e.path,
              alt: e.name,
              key: "publisher-logo-".concat(e.name),
            });
          })
        );
      }),
        n("Hiy6");
    },
    "G8M/": function (e, t, n) {
      "use strict";
      t.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/logo-theAtlantic.e677bedd3e236707befe860fd6222307.png";
    },
    H0Ei: function (e, t, n) {
      "use strict";
      t.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/book-library.bd5662d6b73071aa9230cad144aedcfa.svg";
    },
    HzB2: function (e) {
      e.exports = JSON.parse(
        '{"en":{"title":"Pocket: Pocket Hits Newsletter Signup","metaDescription":"Get Pocket\u2019s newsletter and you\u2019ll see fascinating articles of depth, substance and insight \u2014 in both German and English \u2014 selected from trusted sources.","canonical":"https://getpocket.com/en/explore/pocket-hits-signup/","topbar":"","beforeSubmit":{"headline":"Your guide to the most fascinating articles from top\xa0publications.","subheadline":"Join millions of Pocket Hits subscribers and get inspired with our daily\xa0newsletter."},"isSuccessful":{"headline":"Done! Great reads are on the\xa0way.","subheadline":"Get ready for a daily dose of the best stories from around the\xa0web.","buttonLabel":"Discover Must-Read Articles"},"defaultError":"Oops! Something went wrong.","topEmailSignupForm":{"inputLabel":"Your email address","buttonLabel":"Subscribe","checkboxLabel":"Stay updated on Pocket news, launches, surveys, and\xa0more.","invalidEmailError":"Invalid email address","buttonLabelProcessing":"Working on it \u2026"},"formSubtext":{"subtext":"Not sure yet? ","linkText":"See an example","privacy":"Privacy","terms":"Terms"},"publisherHeadline":"See stories from publishers like these","bottomEmailSignupForm":{"headline":"Sign up for Pocket Hits"}},"de":{"title":"Pocket: Registrierung f\xfcr Pocket Hits Newsletter (auf Deutsch)","metaDescription":"Hol dir den Newsletter von Pocket. Darin findest du ausgew\xe4hlte faszinierende und aufschlussreiche Artikel mit Tiefgang und Substanz aus verl\xe4sslichen Quellen \u2013 auf Deutsch und Englisch.","canonical":"https://getpocket.com/de/explore/pocket-hits-signup/","topbar":"Pocket geh\xf6rt zu <strong>Firefox</strong>","beforeSubmit":{"headline":"Lass dir lesenswerte Artikel direkt in die Inbox\xa0liefern","subheadline":"Abonniere den montags bis freitags verschickten Newsletter von Pocket. Darin findest du ausgew\xe4hlte faszinierende und aufschlussreiche Artikel mit Tiefgang und Substanz aus verl\xe4sslichen Quellen \u2013 auf Deutsch und\xa0Englisch."},"isSuccessful":{"headline":"N\xe4chster Schritt: Im Posteingang\xa0nachsehen","subheadline":"Wir haben dir eine E-Mail zur Best\xe4tigung deines Abonnements geschickt. Klicke auf die Schaltfl\xe4che in der E-Mail und schon kann es\xa0losgehen.","buttonLabel":null},"defaultError":"Hoppla! Da ist etwas schiefgegangen.","topEmailSignupForm":{"inputLabel":"Deine E-Mail-Adresse","buttonLabel":"Abonnieren","checkboxLabel":"Ich m\xf6chte auch Nachrichten  zu Neuigkeiten, Einf\xfchrungen, Umfragen und mehr von Pocket\xa0erhalten.","invalidEmailError":"Ung\xfcltige E-Mail-Adresse","buttonLabelProcessing":"Wir arbeiten dran \u2026"},"formSubtext":{"subtext":"","linkText":"","privacy":"Datenschutz","terms":"AGB"},"publisherHeadline":"","bottomEmailSignupForm":{"headline":""}}}'
      );
    },
    IBkr: function (e, t, n) {
      "use strict";
      t.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/logo-quartz.b647cb6b1cce5cfa2e766e524a2157cb.png";
    },
    Jrzl: function (e, t, n) {
      "use strict";
      t.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/logo-inc.7e05124dad0248f3dfed4d7993bb6f93.png";
    },
    MHHx: function (e, t, n) {
      "use strict";
      t.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/logo-cityLab.9e0bd36a41f15352795a0c3e7906a3c0.png";
    },
    Nh05: function (e, t, n) {
      "use strict";
      t.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/logo-kiplinger.bacab81b790801d10328fa384eecdd9e.png";
    },
    SVee: function (e, t, n) {
      "use strict";
      t.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/logo-outside.caceae38dae39eb0fd97561adb9ec329.png";
    },
    Z4hQ: function (e, t, n) {
      "use strict";
      var a = n("q1tI"),
        i = n.n(a),
        r = n("17x9"),
        c = n.n(r),
        s = i.a.createElement,
        o = "en";
      function l(e) {
        var t = e.language,
          n = e.contentMap;
        return s(i.a.Fragment, null, n[t] || n[o] || null);
      }
      (l.propTypes = {
        language: c.a.string,
        contentMap: c.a.object.isRequired,
      }),
        (t.a = l);
    },
    ZxZo: function (e, t, n) {
      "use strict";
      t.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/logo-fastCompany.dc82b0f70987ae89c48b72e5afbe1e09.png";
    },
    azIq: function (e, t, n) {
      "use strict";
      t.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/logo-atlasObscura.fea07c0cee36b47a9a0cf376e595403d.png";
    },
    "g/p1": function (e, t, n) {
      "use strict";
      t.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/logo-harvardReview.360ae92253c542ffac123b7debd61870.png";
    },
    gjIV: function (e, t, n) {
      "use strict";
      (function (e) {
        n.d(t, "f", function () {
          return l;
        }),
          n.d(t, "b", function () {
            return u;
          }),
          n.d(t, "a", function () {
            return b;
          }),
          n.d(t, "c", function () {
            return p;
          }),
          n.d(t, "e", function () {
            return d;
          }),
          n.d(t, "d", function () {
            return m;
          });
        var a = n("rePB"),
          i = n("AvZB"),
          r = n("0b+E");
        function c(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            t &&
              (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, a);
          }
          return n;
        }
        function s(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? c(Object(n), !0).forEach(function (t) {
                  Object(a.a)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : c(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        var o = {
          view: "web",
          section: "syndicated",
          page: e.location ? e.location.pathname : null,
        };
        function l() {
          Object(i.a)(s(s({}, o), {}, { type_id: "view" }));
        }
        function u(e) {
          Object(i.a)(
            s(
              s({}, o),
              {},
              {
                identifier: "newsletter_email_focus",
                type_id: "click",
                extra_content: e,
              }
            )
          );
        }
        function b(e) {
          Object(i.a)(
            s(
              s({}, o),
              {},
              {
                identifier: "newsletter_email_checkbox",
                type_id: "click",
                extra_content: e,
              }
            )
          );
        }
        function p(e) {
          Object(i.a)(
            s(
              s({}, o),
              {},
              {
                identifier: "newsletter_email_submit",
                type_id: "click",
                extra_content: e,
              }
            )
          );
        }
        function d(e) {
          Object(i.a)(
            s(
              s({}, o),
              {},
              {
                identifier: "newsletter_email_success",
                type_id: "interact",
                extra_content: e,
              }
            )
          ),
            r.a.event({
              category: "Marketing page",
              action: "Newsletter Signup",
              label: "Pocket Hits",
              value: 1,
              nonInteraction: !1,
            });
        }
        function m(e) {
          Object(i.a)(
            s(
              s({}, o),
              {},
              {
                identifier: "newsletter_email_error",
                type_id: "interact",
                extra_content: e,
              }
            )
          );
        }
      }.call(this, n("yLpj")));
    },
    ir3n: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/pocket-hits-signup",
        function () {
          return n("FFrl");
        },
      ]);
    },
    rJe6: function (e, t, n) {
      "use strict";
      t.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/rainbow-lady.70369ab30df5a2227c4688f2530dd59c.png";
    },
    rhgJ: function (e, t, n) {
      "use strict";
      t.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/logo-saveur.b8f157917ff7e05dc121a97178ce1d0a.png";
    },
    vsCm: function (e, t, n) {
      "use strict";
      t.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/logo-nautilus.502dac97876417c33fa1fd816dbe1be7.png";
    },
    "w/UP": function (e, t, n) {
      "use strict";
      var a = n("q1tI"),
        i = n.n(a),
        r = (n("40A7"), n("TSYQ")),
        c = n.n(r),
        s = i.a.createElement,
        o = "tuf6ktc";
      function l(e) {
        var t = e.topics,
          n = e.showTopBorder;
        return s(
          "ul",
          { className: c()(o, { "visible-top-border": n }) },
          t.map(function (e) {
            return s("li", { key: "topic-list-".concat(e) }, e);
          })
        );
      }
      (l.defaultProps = { showTopBorder: !0 }), (t.a = l), n("J/Tq");
    },
    "xs9+": function (e, t, n) {
      "use strict";
      t.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/logo-popularScience.6e42c72d2b519374f8890658fe6017c8.png";
    },
  },
  [["ir3n", 2, 3, 4, 1, 5, 7, 8, 13, 0]],
]);
//# sourceMappingURL=pocket-hits-signup-d3ed048aabdf655dcf39.js.map
