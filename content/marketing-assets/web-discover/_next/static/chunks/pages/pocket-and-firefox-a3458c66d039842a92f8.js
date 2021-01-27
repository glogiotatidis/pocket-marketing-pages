_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [29, 38, 39],
  {
    "+mir": function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/pocket-and-firefox",
        function () {
          return r("BK+a");
        },
      ]);
    },
    "7wBY": function (e, t, r) {
      "use strict";
      var n = r("q1tI"),
        o = n.useLayoutEffect;
      t.a = o;
    },
    "8jRI": function (e, t, r) {
      "use strict";
      var n = new RegExp("%[a-f0-9]{2}", "gi"),
        o = new RegExp("(%[a-f0-9]{2})+", "gi");
      function a(e, t) {
        try {
          return decodeURIComponent(e.join(""));
        } catch (o) {}
        if (1 === e.length) return e;
        t = t || 1;
        var r = e.slice(0, t),
          n = e.slice(t);
        return Array.prototype.concat.call([], a(r), a(n));
      }
      function i(e) {
        try {
          return decodeURIComponent(e);
        } catch (o) {
          for (var t = e.match(n), r = 1; r < t.length; r++)
            t = (e = a(t, r).join("")).match(n);
          return e;
        }
      }
      e.exports = function (e) {
        if ("string" !== typeof e)
          throw new TypeError(
            "Expected `encodedURI` to be of type `string`, got `" +
              typeof e +
              "`"
          );
        try {
          return (e = e.replace(/\+/g, " ")), decodeURIComponent(e);
        } catch (t) {
          return (function (e) {
            for (
              var r = { "%FE%FF": "\ufffd\ufffd", "%FF%FE": "\ufffd\ufffd" },
                n = o.exec(e);
              n;

            ) {
              try {
                r[n[0]] = decodeURIComponent(n[0]);
              } catch (t) {
                var a = i(n[0]);
                a !== n[0] && (r[n[0]] = a);
              }
              n = o.exec(e);
            }
            r["%C2"] = "\ufffd";
            for (var c = Object.keys(r), s = 0; s < c.length; s++) {
              var u = c[s];
              e = e.replace(new RegExp(u, "g"), r[u]);
            }
            return e;
          })(e);
        }
      };
    },
    "8yz6": function (e, t, r) {
      "use strict";
      e.exports = (e, t) => {
        if ("string" !== typeof e || "string" !== typeof t)
          throw new TypeError("Expected the arguments to be of type `string`");
        if ("" === t) return [e];
        const r = e.indexOf(t);
        return -1 === r ? [e] : [e.slice(0, r), e.slice(r + t.length)];
      };
    },
    AvZB: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return a;
      });
      var n = r("JXy6"),
        o = r("mjZG"),
        a = function (e) {
          return Object(n.track)(o.g, e);
        };
    },
    "BK+a": function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r("o0o1"),
        o = r.n(n),
        a = r("HaE+"),
        i = r("q1tI"),
        c = r.n(i),
        s = r("/MKj"),
        u = r("7wBY"),
        l = r("4NU4"),
        f = (r("40A7"), r("UrOR")),
        p = r("RPuf"),
        d = r("TSYQ"),
        y = r.n(d),
        g = r("a6RD"),
        m = r.n(g),
        h = r("8Kt/"),
        k = r.n(h),
        v = r("IJI7"),
        b = r("W6kq"),
        w = r("VUXQ"),
        x = r("r1pi"),
        j = r("b0eP"),
        _ = r("DW7O"),
        O = r("QrEV"),
        P = r("+pky"),
        N = r("+/vd"),
        T = r("Bkcs"),
        E = r("iXCb"),
        F = r("PVSN"),
        I = r("QITn"),
        R = r("uRIL"),
        C = r("gHaj"),
        U = r("R162"),
        K = r("EB+g"),
        L = r("Te0E"),
        A = r("8WFz"),
        S = r("K2U/"),
        B = r("mRj1"),
        q = r("p7AD"),
        D = r("tf0k"),
        $ = r("vT4N"),
        z = c.a.createElement,
        H = m()(
          function () {
            return Promise.all([r.e(10), r.e(0)]).then(r.bind(null, "Wkk8"));
          },
          {
            loading: function () {
              return z("div", { style: { paddingTop: "60%" } });
            },
            loadableGenerated: {
              webpack: function () {
                return ["Wkk8"];
              },
              modules: ["../../components/animation/my-list-demo"],
            },
          }
        ),
        J = m()(
          function () {
            return Promise.all([r.e(10), r.e(0)]).then(r.bind(null, "cB0E"));
          },
          {
            loading: function () {
              return z("div", { style: { paddingTop: "60%" } });
            },
            loadableGenerated: {
              webpack: function () {
                return ["cB0E"];
              },
              modules: ["../../components/animation/article-carousel"],
            },
          }
        ),
        M = "c3zx000",
        W = "mtgur01",
        X = "h12jtata",
        G = "d1tr48og",
        Y = "rqdaps4",
        Q = "r126eps0",
        Z = "szb0j83",
        V = "s1173wk6",
        ee = "gyi2ghv";
      function te(e) {
        var t = e.language,
          r = e.url,
          n = Object(s.c)(function (e) {
            return e.user.auth;
          }),
          o = Object(s.c)(function (e) {
            var t;
            return (
              1 ===
                parseInt(
                  null === e || void 0 === e
                    ? void 0
                    : null === (t = e.user) || void 0 === t
                    ? void 0
                    : t.premium_status,
                  10
                ) || !1
            );
          }),
          a = b.i18n.language ? b.i18n.language : t,
          d = Object(i.useState)(!0),
          g = d[0],
          m = d[1],
          h = Object(b.useTranslation)().t,
          te = h(
            "pocket-and-firefox:meta-description",
            "Pocket is built into Firefox to let you save articles from across the web and read them in a quiet, private space. Learn more and start building your library."
          ),
          re = h(
            "pocket-and-firefox:meta-title",
            "Build a personal library of fascinating reads with Pocket for Firefox"
          ),
          ne = h("pocket-and-firefox:pocket-for-firefox", "Pocket for Firefox"),
          oe = h(
            "pocket-and-firefox:web-page-saving-to-pocket",
            "Web page saving to Pocket library. Illustration."
          ),
          ae = h(
            "pocket-and-firefox:hand-holding-web-page",
            "Hand holding a web page. Illustration."
          ),
          ie = h(
            "pocket-and-firefox:mobile-app-screen",
            "Mobile app screen with headphones. Illustration."
          ),
          ce = { description: te, title: re, image: "".concat(T.a), url: r };
        Object(i.useEffect)(function () {
          Object(p.f)();
        }, []),
          Object(u.a)(
            function () {
              m("en" === a);
            },
            [a]
          );
        var se = function () {
          return z(
            "section",
            { className: y()(Z, M, g ? null : "international") },
            z(
              "div",
              null,
              z(
                "h2",
                null,
                z(
                  b.Trans,
                  { i18nKey: "pocket-and-firefox:save-button-for-internet" },
                  "Your save button for the internet"
                )
              ),
              z(
                "p",
                null,
                z(
                  b.Trans,
                  { i18nKey: "pocket-and-firefox:click-save-wherever-you-are" },
                  "Click the ",
                  z(f.z, {
                    className: "save-icon",
                    id: "save-icon",
                    title: "save icon",
                  }),
                  " button in Firefox anytime you see something you\u2019d like to save, wherever you are online. It\u2019ll go straight to your list in Pocket, ready for you to dig into when you\u2019re free."
                )
              )
            ),
            z(v.a, { srcLight: O.a, srcDark: P.a, srcSepia: O.a, alt: oe })
          );
        };
        return z(
          c.a.Fragment,
          null,
          z(k.a, null, z("meta", { name: "robots", content: "noindex" })),
          z(
            l.a,
            { title: ne, metaData: ce, renderHreflangLinks: !0 },
            z(
              "main",
              { className: W },
              z(
                "section",
                { className: y()(X, M) },
                z(
                  "h1",
                  null,
                  z(
                    b.Trans,
                    { i18nKey: "pocket-and-firefox:pocket-for-firefox" },
                    "Pocket for Firefox"
                  )
                ),
                z(
                  "h2",
                  { className: "h1" },
                  z(
                    b.Trans,
                    { i18nKey: "pocket-and-firefox:personal-library" },
                    "Build your personal library of fascinating reads."
                  )
                ),
                z(
                  "p",
                  null,
                  z(
                    b.Trans,
                    { i18nKey: "pocket-and-firefox:save-across-web" },
                    "Included inside Firefox, the ",
                    z(f.z, {
                      className: "save-icon",
                      id: "save-icon-top",
                      title: "save icon",
                    }),
                    " button lets you save articles from across the web and read them in a quiet, private space."
                  )
                ),
                z(H, { className: "my-list-demo", showFirefoxLogo: !0 }),
                z(
                  "div",
                  { className: "button-wrapper" },
                  z(
                    f.c,
                    {
                      id: "upper-activate-ff",
                      variant: "emphasized",
                      size: "large",
                      onClick: p.g,
                      href:
                        "/ff_signup?s=fflearnmore&utm_medium=referral&utm_source=pocket&utm_campaign=landing-page&utm_content=page-button",
                    },
                    z(f.k, null),
                    z(
                      b.Trans,
                      {
                        i18nKey:
                          "pocket-and-firefox:activate-pocket-in-firefox",
                      },
                      "Activate Pocket in Firefox"
                    )
                  )
                ),
                n
                  ? null
                  : z(
                      "span",
                      { className: "more-options" },
                      z(
                        "a",
                        {
                          href: "/signup",
                          id: "upper-more-ways",
                          onClick: p.i,
                        },
                        z(
                          b.Trans,
                          {
                            i18nKey: "pocket-and-firefox:more-ways-to-sign-up",
                          },
                          "More ways to sign up"
                        )
                      )
                    )
              ),
              g
                ? z(
                    "section",
                    { className: G },
                    z(
                      "h2",
                      null,
                      "Get thought-provoking article recommendations"
                    ),
                    z(
                      "p",
                      null,
                      "In addition to saving stories from all over, you can also dig into the latest articles we're recommending in Pocket. Our editors find seriously interesting stuff \u2014 stories that dig deep into a subject, offer a new perspective, or make you\xa0think."
                    ),
                    z(
                      f.c,
                      {
                        id: "upper-discover",
                        variant: "secondary",
                        href: "/explore",
                        onClick: p.h,
                      },
                      "Discover stories in Pocket"
                    )
                  )
                : se(),
              z(
                "section",
                { className: y()(Y, M) },
                z(
                  "div",
                  null,
                  z(
                    "h2",
                    null,
                    z(
                      b.Trans,
                      {
                        i18nKey: "pocket-and-firefox:your-private-reading-nook",
                      },
                      "Your private reading nook"
                    )
                  ),
                  z(
                    "p",
                    null,
                    z(
                      b.Trans,
                      {
                        i18nKey:
                          "pocket-and-firefox:pocket-strips-away-distractions",
                      },
                      "When you\u2019re ready to dig into what you\u2019ve saved, Pocket provides a quiet, calm space that\u2019s perfect for reading. It strips away all the distractions of the internet \u2014 like flashing banners and pop-ups \u2014 so you can really focus."
                    )
                  )
                ),
                z(v.a, { srcLight: w.a, srcDark: x.a, srcSepia: w.a, alt: ae })
              ),
              z(
                "section",
                { className: y()(Q, M) },
                z(
                  "figure",
                  null,
                  z(v.a, {
                    srcLight: j.a,
                    srcDark: _.a,
                    srcSepia: j.a,
                    alt: ie,
                  }),
                  z(
                    "figcaption",
                    null,
                    z(
                      "ul",
                      null,
                      z(
                        "li",
                        { className: "listen" },
                        z(
                          b.Trans,
                          { i18nKey: "pocket-and-firefox:listen" },
                          "Listen"
                        )
                      ),
                      z(
                        "li",
                        { className: "highlights" },
                        z(
                          b.Trans,
                          { i18nKey: "pocket-and-firefox:highlights" },
                          "Highlights"
                        )
                      ),
                      z(
                        "li",
                        { className: "tags" },
                        z(
                          b.Trans,
                          { i18nKey: "pocket-and-firefox:tags" },
                          "Tags"
                        )
                      )
                    )
                  )
                ),
                z(
                  "div",
                  null,
                  z(
                    "h2",
                    null,
                    z(
                      b.Trans,
                      {
                        i18nKey:
                          "pocket-and-firefox:special-features-for-focused-reading",
                      },
                      "Special features for focused reading"
                    )
                  ),
                  z(
                    "p",
                    null,
                    z(
                      b.Trans,
                      {
                        i18nKey:
                          "pocket-and-firefox:use-the-pocket-app-features",
                      },
                      "Use the Pocket app to listen to stories with our audio playback option. Customize how you see stories in Pocket with dark mode and font options. Keep track of your saves with tags, and preserve important passages with highlights. You can even read offline."
                    )
                  )
                )
              ),
              g ? se() : z("hr", null),
              z(
                "section",
                { className: y()(V, !g && n ? "authenticated" : null) },
                z(J, {
                  className: "article-carousel",
                  images: [
                    E.a,
                    F.a,
                    I.a,
                    R.a,
                    C.a,
                    U.a,
                    K.a,
                    L.a,
                    A.a,
                    S.a,
                    B.a,
                    q.a,
                    D.a,
                    $.a,
                  ],
                }),
                z(
                  "h2",
                  { className: "h1" },
                  z(
                    b.Trans,
                    {
                      i18nKey: "pocket-and-firefox:start-your-personal-library",
                    },
                    "Start building your personal library now."
                  )
                ),
                z(
                  "div",
                  { className: "cta-wrapper" },
                  z(
                    f.c,
                    {
                      id: "lower-activate-ff",
                      variant: "emphasized",
                      size: "large",
                      onClick: p.a,
                      href:
                        "/ff_signup?s=fflearnmore&utm_medium=referral&utm_source=pocket&utm_campaign=landing-page&utm_content=page-button",
                    },
                    z(f.k, null),
                    z(
                      b.Trans,
                      {
                        i18nKey:
                          "pocket-and-firefox:activate-pocket-in-firefox",
                      },
                      "Activate Pocket in Firefox"
                    )
                  ),
                  g
                    ? z(
                        f.c,
                        {
                          id: "lower-discover",
                          variant: "secondary",
                          size: "large",
                          onClick: p.b,
                          href: "/explore",
                        },
                        "Discover stories in Pocket"
                      )
                    : null,
                  g || n
                    ? null
                    : z(
                        f.c,
                        {
                          id: "lower-login",
                          variant: "secondary",
                          size: "large",
                          onClick: p.c,
                          href: "/login",
                        },
                        z(b.Trans, { i18nKey: "common:log-in" }, "Log in")
                      ),
                  n
                    ? null
                    : z(
                        "span",
                        { className: "more-options" },
                        z(
                          "a",
                          {
                            id: "lower-more-ways",
                            href: "/signup",
                            onClick: p.d,
                          },
                          z(
                            b.Trans,
                            {
                              i18nKey:
                                "pocket-and-firefox:more-ways-to-sign-up",
                            },
                            "More ways to sign up"
                          )
                        )
                      )
                )
              ),
              o
                ? null
                : z(
                    "a",
                    {
                      href: "/premium",
                      id: "lower-premium",
                      className: ee,
                      onClick: p.e,
                    },
                    z(
                      "div",
                      { className: M },
                      z("img", { src: N.a, alt: "" }),
                      z(
                        "p",
                        null,
                        z(
                          b.Trans,
                          {
                            i18nKey:
                              "pocket-and-firefox:get-pocket-premium-for-features",
                          },
                          "Ready for the ultimate Pocket experience? Get ",
                          z("span", null, "Pocket Premium"),
                          " and you\u2019ll have access to our full array of features, including a personal, backed-up copy of everything you save."
                        )
                      )
                    )
                  )
            )
          )
        );
      }
      r("4+wJ");
      var re = r("WHGu");
      te.getInitialProps = (function () {
        var e = Object(a.a)(
          o.a.mark(function e(t, r) {
            var n, a, i;
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((n = t.req), (a = t.res), !r)) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt(
                      "return",
                      Object(re.h)(a, "https://app.getpocket.com", 307)
                    );
                  case 3:
                    return (
                      (i = n ? n.language : b.i18n.language),
                      e.abrupt("return", {
                        language: i,
                        namespacesRequired: ["pocket-and-firefox"],
                      })
                    );
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t, r) {
          return e.apply(this, arguments);
        };
      })();
      t.default = te;
    },
    Hvtb: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = Object.prototype,
        o = n.toString,
        a = n.hasOwnProperty,
        i = "[object Object]",
        c = "[object Array]";
      function s(e, t) {
        return null != e ? e + "[" + t + "]" : t;
      }
      t.flatten = function e(t, r, n) {
        var u = o.call(t);
        if (void 0 === n)
          if (u === i) n = {};
          else {
            if (u !== c) return;
            n = [];
          }
        for (var l in t)
          if (a.call(t, l)) {
            var f = t[l];
            if (null != f)
              switch (o.call(f)) {
                case c:
                case i:
                  e(f, s(r, l), n);
                  break;
                default:
                  n[s(r, l)] = f;
              }
          }
        return n;
      };
    },
    JXy6: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.track = function (e, t) {
          let r;
          t &&
            (Array.isArray(t)
              ? (r = { actions: t })
              : "object" === typeof t && (r = { actions: [t] }));
          const a = { path: o, data: r };
          return (0, n.sendBeacon)(e, a);
        }),
        (t.gtagTrack = function () {});
      var n = r("pQdH");
      const o = "/pv";
    },
    Jnk0: function (e, t, r) {
      "use strict";
      const n = r("ZFOp"),
        o = r("8jRI"),
        a = r("8yz6");
      function i(e) {
        if ("string" !== typeof e || 1 !== e.length)
          throw new TypeError(
            "arrayFormatSeparator must be single character string"
          );
      }
      function c(e, t) {
        return t.encode ? (t.strict ? n(e) : encodeURIComponent(e)) : e;
      }
      function s(e, t) {
        return t.decode ? o(e) : e;
      }
      function u(e) {
        const t = e.indexOf("#");
        return -1 !== t && (e = e.slice(0, t)), e;
      }
      function l(e) {
        const t = (e = u(e)).indexOf("?");
        return -1 === t ? "" : e.slice(t + 1);
      }
      function f(e, t) {
        return (
          t.parseNumbers &&
          !Number.isNaN(Number(e)) &&
          "string" === typeof e &&
          "" !== e.trim()
            ? (e = Number(e))
            : !t.parseBooleans ||
              null === e ||
              ("true" !== e.toLowerCase() && "false" !== e.toLowerCase()) ||
              (e = "true" === e.toLowerCase()),
          e
        );
      }
      function p(e, t) {
        i(
          (t = Object.assign(
            {
              decode: !0,
              sort: !0,
              arrayFormat: "none",
              arrayFormatSeparator: ",",
              parseNumbers: !1,
              parseBooleans: !1,
            },
            t
          )).arrayFormatSeparator
        );
        const r = (function (e) {
            let t;
            switch (e.arrayFormat) {
              case "index":
                return (e, r, n) => {
                  (t = /\[(\d*)\]$/.exec(e)),
                    (e = e.replace(/\[\d*\]$/, "")),
                    t
                      ? (void 0 === n[e] && (n[e] = {}), (n[e][t[1]] = r))
                      : (n[e] = r);
                };
              case "bracket":
                return (e, r, n) => {
                  (t = /(\[\])$/.exec(e)),
                    (e = e.replace(/\[\]$/, "")),
                    t
                      ? void 0 !== n[e]
                        ? (n[e] = [].concat(n[e], r))
                        : (n[e] = [r])
                      : (n[e] = r);
                };
              case "comma":
              case "separator":
                return (t, r, n) => {
                  const o =
                    "string" === typeof r &&
                    r.split("").indexOf(e.arrayFormatSeparator) > -1
                      ? r.split(e.arrayFormatSeparator).map((t) => s(t, e))
                      : null === r
                      ? r
                      : s(r, e);
                  n[t] = o;
                };
              default:
                return (e, t, r) => {
                  void 0 !== r[e] ? (r[e] = [].concat(r[e], t)) : (r[e] = t);
                };
            }
          })(t),
          n = Object.create(null);
        if ("string" !== typeof e) return n;
        if (!(e = e.trim().replace(/^[?#&]/, ""))) return n;
        for (const o of e.split("&")) {
          let [e, i] = a(t.decode ? o.replace(/\+/g, " ") : o, "=");
          (i =
            void 0 === i
              ? null
              : ["comma", "separator"].includes(t.arrayFormat)
              ? i
              : s(i, t)),
            r(s(e, t), i, n);
        }
        for (const o of Object.keys(n)) {
          const e = n[o];
          if ("object" === typeof e && null !== e)
            for (const r of Object.keys(e)) e[r] = f(e[r], t);
          else n[o] = f(e, t);
        }
        return !1 === t.sort
          ? n
          : (!0 === t.sort
              ? Object.keys(n).sort()
              : Object.keys(n).sort(t.sort)
            ).reduce((e, t) => {
              const r = n[t];
              return (
                Boolean(r) && "object" === typeof r && !Array.isArray(r)
                  ? (e[t] = (function e(t) {
                      return Array.isArray(t)
                        ? t.sort()
                        : "object" === typeof t
                        ? e(Object.keys(t))
                            .sort((e, t) => Number(e) - Number(t))
                            .map((e) => t[e])
                        : t;
                    })(r))
                  : (e[t] = r),
                e
              );
            }, Object.create(null));
      }
      (t.extract = l),
        (t.parse = p),
        (t.stringify = (e, t) => {
          if (!e) return "";
          i(
            (t = Object.assign(
              {
                encode: !0,
                strict: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
              },
              t
            )).arrayFormatSeparator
          );
          const r = (r) =>
              (t.skipNull && ((e) => null === e || void 0 === e)(e[r])) ||
              (t.skipEmptyString && "" === e[r]),
            n = (function (e) {
              switch (e.arrayFormat) {
                case "index":
                  return (t) => (r, n) => {
                    const o = r.length;
                    return void 0 === n ||
                      (e.skipNull && null === n) ||
                      (e.skipEmptyString && "" === n)
                      ? r
                      : null === n
                      ? [...r, [c(t, e), "[", o, "]"].join("")]
                      : [...r, [c(t, e), "[", c(o, e), "]=", c(n, e)].join("")];
                  };
                case "bracket":
                  return (t) => (r, n) =>
                    void 0 === n ||
                    (e.skipNull && null === n) ||
                    (e.skipEmptyString && "" === n)
                      ? r
                      : null === n
                      ? [...r, [c(t, e), "[]"].join("")]
                      : [...r, [c(t, e), "[]=", c(n, e)].join("")];
                case "comma":
                case "separator":
                  return (t) => (r, n) =>
                    null === n || void 0 === n || 0 === n.length
                      ? r
                      : 0 === r.length
                      ? [[c(t, e), "=", c(n, e)].join("")]
                      : [[r, c(n, e)].join(e.arrayFormatSeparator)];
                default:
                  return (t) => (r, n) =>
                    void 0 === n ||
                    (e.skipNull && null === n) ||
                    (e.skipEmptyString && "" === n)
                      ? r
                      : null === n
                      ? [...r, c(t, e)]
                      : [...r, [c(t, e), "=", c(n, e)].join("")];
              }
            })(t),
            o = {};
          for (const i of Object.keys(e)) r(i) || (o[i] = e[i]);
          const a = Object.keys(o);
          return (
            !1 !== t.sort && a.sort(t.sort),
            a
              .map((r) => {
                const o = e[r];
                return void 0 === o
                  ? ""
                  : null === o
                  ? c(r, t)
                  : Array.isArray(o)
                  ? o.reduce(n(r), []).join("&")
                  : c(r, t) + "=" + c(o, t);
              })
              .filter((e) => e.length > 0)
              .join("&")
          );
        }),
        (t.parseUrl = (e, t) => ({
          url: u(e).split("?")[0] || "",
          query: p(l(e), t),
        })),
        (t.stringifyUrl = (e, r) => {
          const n = u(e.url).split("?")[0] || "",
            o = t.extract(e.url),
            a = t.parse(o),
            i = (function (e) {
              let t = "";
              const r = e.indexOf("#");
              return -1 !== r && (t = e.slice(r)), t;
            })(e.url),
            c = Object.assign(a, e.query);
          let s = t.stringify(c, r);
          return s && (s = `?${s}`), `${n}${s}${i}`;
        });
    },
    RPuf: function (e, t, r) {
      "use strict";
      (function (e) {
        r.d(t, "f", function () {
          return s;
        }),
          r.d(t, "g", function () {
            return u;
          }),
          r.d(t, "a", function () {
            return l;
          }),
          r.d(t, "i", function () {
            return f;
          }),
          r.d(t, "d", function () {
            return p;
          }),
          r.d(t, "h", function () {
            return d;
          }),
          r.d(t, "b", function () {
            return y;
          }),
          r.d(t, "c", function () {
            return g;
          }),
          r.d(t, "e", function () {
            return m;
          });
        var n = r("rePB"),
          o = r("AvZB");
        function a(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function i(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? a(Object(r), !0).forEach(function (t) {
                  Object(n.a)(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : a(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
          }
          return e;
        }
        var c = {
          action: "pv_wt",
          view: "web",
          section: "core",
          page: e.location ? e.location.pathname : null,
        };
        function s() {
          Object(o.a)(i(i({}, c), {}, { type_id: "view" }));
        }
        function u() {
          Object(o.a)(
            i(
              i({}, c),
              {},
              {
                identifier: "click_fxa_signup",
                type_id: "click",
                extra_content: "upper",
              }
            )
          );
        }
        function l() {
          Object(o.a)(
            i(
              i({}, c),
              {},
              {
                identifier: "click_fxa_signup",
                type_id: "click",
                extra_content: "lower",
              }
            )
          );
        }
        function f() {
          Object(o.a)(
            i(
              i({}, c),
              {},
              {
                identifier: "click_other_signup",
                type_id: "click",
                extra_content: "upper",
              }
            )
          );
        }
        function p() {
          Object(o.a)(
            i(
              i({}, c),
              {},
              {
                identifier: "click_other_signup",
                type_id: "click",
                extra_content: "lower",
              }
            )
          );
        }
        function d() {
          Object(o.a)(
            i(
              i({}, c),
              {},
              {
                identifier: "click_discover",
                type_id: "click",
                extra_content: "upper",
              }
            )
          );
        }
        function y() {
          Object(o.a)(
            i(
              i({}, c),
              {},
              {
                identifier: "click_discover",
                type_id: "click",
                extra_content: "lower",
              }
            )
          );
        }
        function g() {
          Object(o.a)(
            i(
              i({}, c),
              {},
              {
                identifier: "click_login",
                type_id: "click",
                extra_content: "lower",
              }
            )
          );
        }
        function m() {
          Object(o.a)(
            i(
              i({}, c),
              {},
              {
                identifier: "click_premium",
                type_id: "click",
                extra_content: "lower",
              }
            )
          );
        }
      }.call(this, r("yLpj")));
    },
    ZFOp: function (e, t, r) {
      "use strict";
      e.exports = (e) =>
        encodeURIComponent(e).replace(
          /[!'()*]/g,
          (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`
        );
    },
    cvCm: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.request = function (e, t) {
            const { fullUrl: r, fetchData: n } = s(e, t);
            return (0, o.default)(r, n)
              .then(u)
              .then((e) => e.json());
          }),
          (t.requestWithAuth = function (e, t) {
            const { fullUrl: r, fetchData: n } = s(e, t);
            return (0, o.default)(r, n)
              .then(u)
              .then(l)
              .then((e) => e.json());
          }),
          (t.LOGIN_URL = t.API_URL = void 0);
        var n = i(r("Jnk0")),
          o = i(r("vcXL")),
          a = r("oY9k");
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        const c = e.env.POCKET_API_URL
          ? e.env.POCKET_API_URL
          : "https://getpocket.com/v3";
        t.API_URL = c;
        function s(e, t) {
          let r;
          if (!t.path) throw new Error("options.path is required by request()");
          const o = new a.Headers({
            "Content-Type": "application/json",
            "X-Accept": "application/json; charset=UTF8",
          });
          return (
            t && t.cookie && o.append("cookie", t.cookie),
            t && t.data && (r = JSON.stringify(t.data)),
            {
              fullUrl: (function (e, t) {
                const r = n.default.parse(n.default.extract(t.path)),
                  o = n.default.stringify({
                    ...r,
                    enable_cors: 1,
                    consumer_key: e,
                  }),
                  a = t.path.split("?")[0];
                return `${c}${a}?${o}`;
              })(e, t),
              fetchData: {
                body: r,
                cache: "no-cache",
                headers: o,
                method: "POST",
                credentials: "include",
              },
            }
          );
        }
        function u(e) {
          return e.ok ? e : Promise.reject(e);
        }
        function l(e) {
          if (e.headers.get("x-error-code"))
            throw new Error(e.headers.get("x-error"));
          return e;
        }
        t.LOGIN_URL = "https://getpocket.com/login";
      }.call(this, r("8oxB")));
    },
    pQdH: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.sendBeacon = function (e, t) {
            var r;
            if (!(null === t || void 0 === t ? void 0 : t.path))
              throw new Error("options.path is required by request()");
            if (
              !(null === (r = navigator) || void 0 === r
                ? void 0
                : r.sendBeacon)
            )
              return s(e, t);
            const n = u(e, t);
            navigator.sendBeacon(n);
          }),
          (t.buildBeaconUrl = u),
          (t.API_URL = void 0);
        var n,
          o = (n = r("Jnk0")) && n.__esModule ? n : { default: n },
          a = r("Hvtb"),
          i = r("cvCm");
        const c = e.env.POCKET_API_URL
          ? e.env.POCKET_API_URL
          : "https://getpocket.com/v3";
        t.API_URL = c;
        const s = async function (e, t) {
          await (0, i.request)(e, t);
        };
        function u(e, t) {
          const r =
              (0, a.flatten)(null === t || void 0 === t ? void 0 : t.data) ||
              {},
            n = o.default.parse(o.default.extract(t.path)),
            i = o.default.stringify(
              { ...n, ...r, consumer_key: e },
              { arrayFormat: "bracket" }
            ),
            s = t.path.split("?")[0];
          return `${c}${s}?${i}`;
        }
      }.call(this, r("8oxB")));
    },
    vcXL: function (e, t, r) {
      "use strict";
      var n = self.fetch.bind(self);
      (e.exports = n), (e.exports.default = e.exports);
    },
  },
  [["+mir", 2, 3, 4, 1, 5, 18, 0]],
]);
//# sourceMappingURL=pocket-and-firefox-a3458c66d039842a92f8.js.map
