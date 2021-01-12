(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [18],
  {
    "+/vd": function (t, e, r) {
      "use strict";
      e.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/diamond.bc1c50a3c866950ea93d35da20c99aa6.gif";
    },
    "+pky": function (t, e, r) {
      "use strict";
      e.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/internet-save-button-dark-mode.c5f82e8ed2d1bffdf5d6eebbdb702e7b.svg";
    },
    "2qu3": function (t, e, r) {
      "use strict";
      var n = r("lSNA"),
        a = r("lwsE"),
        i = r("W8MJ");
      function o(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? o(Object(r), !0).forEach(function (e) {
                n(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function s(t, e) {
        var r;
        if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (r = (function (t, e) {
              if (!t) return;
              if ("string" === typeof t) return u(t, e);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === r && t.constructor && (r = t.constructor.name);
              if ("Map" === r || "Set" === r) return Array.from(t);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return u(t, e);
            })(t)) ||
            (e && t && "number" === typeof t.length)
          ) {
            r && (t = r);
            var n = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return n >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[n++] };
              },
              e: function (t) {
                throw t;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          o = !0,
          c = !1;
        return {
          s: function () {
            r = t[Symbol.iterator]();
          },
          n: function () {
            var t = r.next();
            return (o = t.done), t;
          },
          e: function (t) {
            (c = !0), (i = t);
          },
          f: function () {
            try {
              o || null == r.return || r.return();
            } finally {
              if (c) throw i;
            }
          },
        };
      }
      function u(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      (e.__esModule = !0), (e.default = void 0);
      var l,
        d = (l = r("q1tI")) && l.__esModule ? l : { default: l },
        f = r("8L3h"),
        p = r("jwwS");
      var b = [],
        m = [],
        g = !1;
      function h(t) {
        var e = t(),
          r = { loading: !0, loaded: null, error: null };
        return (
          (r.promise = e
            .then(function (t) {
              return (r.loading = !1), (r.loaded = t), t;
            })
            .catch(function (t) {
              throw ((r.loading = !1), (r.error = t), t);
            })),
          r
        );
      }
      function v(t) {
        var e = { loading: !1, loaded: {}, error: null },
          r = [];
        try {
          Object.keys(t).forEach(function (n) {
            var a = h(t[n]);
            a.loading
              ? (e.loading = !0)
              : ((e.loaded[n] = a.loaded), (e.error = a.error)),
              r.push(a.promise),
              a.promise
                .then(function (t) {
                  e.loaded[n] = t;
                })
                .catch(function (t) {
                  e.error = t;
                });
          });
        } catch (n) {
          e.error = n;
        }
        return (
          (e.promise = Promise.all(r)
            .then(function (t) {
              return (e.loading = !1), t;
            })
            .catch(function (t) {
              throw ((e.loading = !1), t);
            })),
          e
        );
      }
      function y(t, e) {
        return d.default.createElement(
          (function (t) {
            return t && t.__esModule ? t.default : t;
          })(t),
          e
        );
      }
      function O(t, e) {
        var r = Object.assign(
            {
              loader: null,
              loading: null,
              delay: 200,
              timeout: null,
              render: y,
              webpack: null,
              modules: null,
            },
            e
          ),
          n = null;
        function a() {
          if (!n) {
            var e = new j(t, r);
            n = {
              getCurrentValue: e.getCurrentValue.bind(e),
              subscribe: e.subscribe.bind(e),
              retry: e.retry.bind(e),
              promise: e.promise.bind(e),
            };
          }
          return n.promise();
        }
        if (!g && "function" === typeof r.webpack) {
          var i = r.webpack();
          m.push(function (t) {
            var e,
              r = s(i);
            try {
              for (r.s(); !(e = r.n()).done; ) {
                var n = e.value;
                if (-1 !== t.indexOf(n)) return a();
              }
            } catch (o) {
              r.e(o);
            } finally {
              r.f();
            }
          });
        }
        var o = function (t, e) {
          a();
          var i = d.default.useContext(p.LoadableContext),
            o = (0, f.useSubscription)(n);
          return (
            d.default.useImperativeHandle(
              e,
              function () {
                return { retry: n.retry };
              },
              []
            ),
            i &&
              Array.isArray(r.modules) &&
              r.modules.forEach(function (t) {
                i(t);
              }),
            d.default.useMemo(
              function () {
                return o.loading || o.error
                  ? d.default.createElement(r.loading, {
                      isLoading: o.loading,
                      pastDelay: o.pastDelay,
                      timedOut: o.timedOut,
                      error: o.error,
                      retry: n.retry,
                    })
                  : o.loaded
                  ? r.render(o.loaded, t)
                  : null;
              },
              [t, o]
            )
          );
        };
        return (
          (o.preload = function () {
            return a();
          }),
          (o.displayName = "LoadableComponent"),
          d.default.forwardRef(o)
        );
      }
      var j = (function () {
        function t(e, r) {
          a(this, t),
            (this._loadFn = e),
            (this._opts = r),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
        return (
          i(t, [
            {
              key: "promise",
              value: function () {
                return this._res.promise;
              },
            },
            {
              key: "retry",
              value: function () {
                var t = this;
                this._clearTimeouts(),
                  (this._res = this._loadFn(this._opts.loader)),
                  (this._state = { pastDelay: !1, timedOut: !1 });
                var e = this._res,
                  r = this._opts;
                e.loading &&
                  ("number" === typeof r.delay &&
                    (0 === r.delay
                      ? (this._state.pastDelay = !0)
                      : (this._delay = setTimeout(function () {
                          t._update({ pastDelay: !0 });
                        }, r.delay))),
                  "number" === typeof r.timeout &&
                    (this._timeout = setTimeout(function () {
                      t._update({ timedOut: !0 });
                    }, r.timeout))),
                  this._res.promise
                    .then(function () {
                      t._update({}), t._clearTimeouts();
                    })
                    .catch(function (e) {
                      t._update({}), t._clearTimeouts();
                    }),
                  this._update({});
              },
            },
            {
              key: "_update",
              value: function (t) {
                (this._state = c(
                  c({}, this._state),
                  {},
                  {
                    error: this._res.error,
                    loaded: this._res.loaded,
                    loading: this._res.loading,
                  },
                  t
                )),
                  this._callbacks.forEach(function (t) {
                    return t();
                  });
              },
            },
            {
              key: "_clearTimeouts",
              value: function () {
                clearTimeout(this._delay), clearTimeout(this._timeout);
              },
            },
            {
              key: "getCurrentValue",
              value: function () {
                return this._state;
              },
            },
            {
              key: "subscribe",
              value: function (t) {
                var e = this;
                return (
                  this._callbacks.add(t),
                  function () {
                    e._callbacks.delete(t);
                  }
                );
              },
            },
          ]),
          t
        );
      })();
      function w(t) {
        return O(h, t);
      }
      function _(t, e) {
        for (var r = []; t.length; ) {
          var n = t.pop();
          r.push(n(e));
        }
        return Promise.all(r).then(function () {
          if (t.length) return _(t, e);
        });
      }
      (w.Map = function (t) {
        if ("function" !== typeof t.render)
          throw new Error(
            "LoadableMap requires a `render(loaded, props)` function"
          );
        return O(v, t);
      }),
        (w.preloadAll = function () {
          return new Promise(function (t, e) {
            _(b).then(t, e);
          });
        }),
        (w.preloadReady = function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return new Promise(function (e) {
            var r = function () {
              return (g = !0), e();
            };
            _(m, t).then(r, r);
          });
        }),
        (window.__NEXT_PRELOADREADY = w.preloadReady);
      var k = w;
      e.default = k;
    },
    "4NU4": function (t, e, r) {
      "use strict";
      var n = r("q1tI"),
        a = r.n(n),
        i = r("8Kt/"),
        o = r.n(i),
        c = r("UrOR"),
        s = r("Xdly"),
        u = r("wx14"),
        l = r("sUIV"),
        d = r("WHGu"),
        f = r("mjZG"),
        p = a.a.createElement;
      function b(t) {
        var e = t.url,
          r = t.title,
          n = t.description,
          i = t.image,
          o = t.type;
        if (!e || !r || !n) return null;
        var c = i ? "summary_large_image" : "summary",
          s = o || "website",
          b = i ? Object(d.c)(i, { width: 1200 }) : null;
        return p(
          a.a.Fragment,
          null,
          p(
            "meta",
            Object(u.a)(
              { name: "description", content: n },
              Object(l.testIdAttribute)("meta-description")
            )
          ),
          p(
            "meta",
            Object(u.a)(
              { name: "x-pocket-override-excerpt", content: n },
              Object(l.testIdAttribute)("pkt-description")
            )
          ),
          p(
            "meta",
            Object(u.a)(
              { itemProp: "name", content: r },
              Object(l.testIdAttribute)("itemprop-name")
            )
          ),
          p(
            "meta",
            Object(u.a)(
              { itemProp: "description", content: n },
              Object(l.testIdAttribute)("itemprop-description")
            )
          ),
          i
            ? p(
                "meta",
                Object(u.a)(
                  { itemProp: "image", content: b },
                  Object(l.testIdAttribute)("itemprop-image")
                )
              )
            : null,
          p(
            "meta",
            Object(u.a)(
              { name: "twitter:card", content: c },
              Object(l.testIdAttribute)("twitter-card")
            )
          ),
          p(
            "meta",
            Object(u.a)(
              { name: "twitter:url", content: e },
              Object(l.testIdAttribute)("twitter-url")
            )
          ),
          p(
            "meta",
            Object(u.a)(
              { name: "twitter:title", content: r },
              Object(l.testIdAttribute)("twitter-title")
            )
          ),
          p(
            "meta",
            Object(u.a)(
              { name: "twitter:description", content: n },
              Object(l.testIdAttribute)("twitter-description")
            )
          ),
          p(
            "meta",
            Object(u.a)(
              { name: "twitter:site", content: "@pocket" },
              Object(l.testIdAttribute)("twitter-site")
            )
          ),
          i
            ? p(
                "meta",
                Object(u.a)(
                  { name: "twitter:image", content: b },
                  Object(l.testIdAttribute)("twitter-image")
                )
              )
            : null,
          p(
            "meta",
            Object(u.a)(
              { property: "fb:app_id", content: f.h },
              Object(l.testIdAttribute)("fb-app_id")
            )
          ),
          p(
            "meta",
            Object(u.a)(
              { property: "og:type", content: s },
              Object(l.testIdAttribute)("og-type")
            )
          ),
          p(
            "meta",
            Object(u.a)(
              { property: "og:url", content: e },
              Object(l.testIdAttribute)("og-url")
            )
          ),
          p(
            "meta",
            Object(u.a)(
              { property: "og:title", content: r },
              Object(l.testIdAttribute)("og-title")
            )
          ),
          p(
            "meta",
            Object(u.a)(
              { property: "og:description", content: n },
              Object(l.testIdAttribute)("og-description")
            )
          ),
          p(
            "meta",
            Object(u.a)(
              { property: "og:site_name", content: "Pocket" },
              Object(l.testIdAttribute)("og-site_name")
            )
          ),
          i
            ? p(
                "meta",
                Object(u.a)(
                  { property: "og:image", content: b },
                  Object(l.testIdAttribute)("og-image")
                )
              )
            : null
        );
      }
      var m = r("W6kq"),
        g = a.a.createElement,
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
      function v(t) {
        var e = t.url,
          r = t.showCanonical;
        if (!e) return null;
        var n = new URL(e),
          i = n.origin,
          o = n.pathname,
          c = m.i18n.options,
          s = null === c || void 0 === c ? void 0 : c.allLanguages,
          d =
            null === s || void 0 === s
              ? void 0
              : s.find(function (t) {
                  return t === o.split("/")[1];
                }),
          f = o.replace("/" + d, "");
        return g(
          a.a.Fragment,
          null,
          r
            ? g(
                "link",
                Object(u.a)(
                  { rel: "canonical", href: i + "/" + d + f },
                  Object(l.testIdAttribute)("link-canonical")
                )
              )
            : null,
          g(
            "link",
            Object(u.a)(
              { rel: "alternate", hrefLang: "x-default", href: i + f },
              Object(l.testIdAttribute)("hreflang-x-default")
            )
          ),
          s.map(function (t) {
            return g(
              "link",
              Object(u.a)(
                {
                  rel: "alternate",
                  hrefLang: t,
                  href: i + "/" + t + f,
                  title: h[t],
                  key: "".concat(t),
                },
                Object(l.testIdAttribute)("hreflang-".concat(t))
              )
            );
          })
        );
      }
      v.defaultProps = { showCanonical: !0 };
      var y = a.a.createElement;
      function O(t) {
        var e = t.metaData,
          r = t.children,
          n = t.title,
          i = void 0 === n ? "Pocket" : n,
          u = t.canonical,
          l = t.renderHreflangLinks,
          d = t.selectedNavLink,
          f = t.isFullWidthLayout,
          p = t.hasFooterColorBorder,
          m =
            (null === e || void 0 === e ? void 0 : e.description) &&
            (null === e || void 0 === e ? void 0 : e.title);
        return y(
          a.a.Fragment,
          null,
          y(
            o.a,
            null,
            y("title", null, i),
            y("link", {
              rel: "icon",
              type: "image/x-icon",
              href: "/favicon.ico",
            }),
            u ? y("link", { rel: "canonical", href: u }) : null,
            l
              ? y(v, {
                  url: null === e || void 0 === e ? void 0 : e.url,
                  showCanonical: void 0 === u,
                })
              : null,
            m ? y(b, e) : null
          ),
          y(s.a, { selectedLink: d }),
          f ? r : y(c.u, null, r),
          y(c.l, { hasColorBorder: p })
        );
      }
      O.defaultProps = {
        selectedNavLink: void 0,
        renderHreflangLinks: !1,
        isFullWidthLayout: !1,
        hasFooterColorBorder: !1,
      };
      e.a = O;
    },
    "8WFz": function (t, e, r) {
      "use strict";
      e.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/article-image-009.173fb2c10f4dfaedae0ef16e5ef30d76.png";
    },
    Bkcs: function (t, e, r) {
      "use strict";
      e.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/floating-items.3ca83a7a7847b8fc54d794ed258483b7.jpg";
    },
    BsWD: function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return a;
      });
      var n = r("a3WO");
      function a(t, e) {
        if (t) {
          if ("string" === typeof t) return Object(n.a)(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === r && t.constructor && (r = t.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(t)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? Object(n.a)(t, e)
              : void 0
          );
        }
      }
    },
    DW7O: function (t, e, r) {
      "use strict";
      e.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/features-phone-dark-mode.b2f41158d8416ff38ddf002172628249.png";
    },
    "EB+g": function (t, e, r) {
      "use strict";
      e.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/article-image-007.a615d84ce409da86434ee75993bbf4cd.png";
    },
    Ff2n: function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return a;
      });
      var n = r("zLVn");
      function a(t, e) {
        if (null == t) return {};
        var r,
          a,
          i = Object(n.a)(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (a = 0; a < o.length; a++)
            (r = o[a]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (i[r] = t[r]));
        }
        return i;
      }
    },
    "HaE+": function (t, e, r) {
      "use strict";
      function n(t, e, r, n, a, i, o) {
        try {
          var c = t[i](o),
            s = c.value;
        } catch (u) {
          return void r(u);
        }
        c.done ? e(s) : Promise.resolve(s).then(n, a);
      }
      function a(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (a, i) {
            var o = t.apply(e, r);
            function c(t) {
              n(o, a, i, c, s, "next", t);
            }
            function s(t) {
              n(o, a, i, c, s, "throw", t);
            }
            c(void 0);
          });
        };
      }
      r.d(e, "a", function () {
        return a;
      });
    },
    IJI7: function (t, e, r) {
      "use strict";
      var n = r("wx14"),
        a = r("ODXe"),
        i = r("Ff2n"),
        o = r("q1tI"),
        c = r.n(o),
        s = (r("40A7"), r("UrOR"), r("TSYQ")),
        u = r.n(s),
        l = r("sUIV"),
        d = c.a.createElement,
        f = c.a.forwardRef(function (t, e) {
          var r = t.srcLight,
            o = t.srcDark,
            c = t.srcSepia,
            s = t.alt,
            f = t.useWrapper,
            p = t.className,
            b = Object(i.a)(t, [
              "srcLight",
              "srcDark",
              "srcSepia",
              "alt",
              "useWrapper",
              "className",
            ]),
            m = { light: r, dark: o, sepia: c },
            g = Object.entries(m).map(function (t) {
              var r = Object(a.a)(t, 2),
                i = r[0],
                o = r[1];
              return o
                ? d(
                    "img",
                    Object(n.a)(
                      {
                        src: o,
                        alt: s,
                        className: u()("tirolbu", p, i),
                        key: "themed-img-".concat(i),
                        ref: e,
                      },
                      b,
                      Object(l.testIdAttribute)("themed-img-".concat(i))
                    )
                  )
                : null;
            });
          return f
            ? d(
                "figure",
                Object(n.a)(
                  { role: "group" },
                  Object(l.testIdAttribute)("figure-wrapper")
                ),
                g
              )
            : g;
        });
      (f.defaultProps = {
        srcLight: null,
        srcDark: null,
        srcSepia: null,
        alt: "",
        useWrapper: !0,
        className: null,
      }),
        (e.a = f),
        r("M5TL");
    },
    "K2U/": function (t, e, r) {
      "use strict";
      e.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/article-image-010.e2aa77d227583e3bb4c7fb2aa3ded9b7.png";
    },
    M5TL: function (t, e, r) {},
    ODXe: function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return a;
      });
      var n = r("BsWD");
      function a(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) {
              var r = [],
                n = !0,
                a = !1,
                i = void 0;
              try {
                for (
                  var o, c = t[Symbol.iterator]();
                  !(n = (o = c.next()).done) &&
                  (r.push(o.value), !e || r.length !== e);
                  n = !0
                );
              } catch (s) {
                (a = !0), (i = s);
              } finally {
                try {
                  n || null == c.return || c.return();
                } finally {
                  if (a) throw i;
                }
              }
              return r;
            }
          })(t, e) ||
          Object(n.a)(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    PVSN: function (t, e, r) {
      "use strict";
      e.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/article-image-002.9130df10d66437293988fa867b604d09.png";
    },
    QITn: function (t, e, r) {
      "use strict";
      e.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/article-image-003.86b6433d3a86e1d2ddfec6be0a11e3b8.png";
    },
    QrEV: function (t, e, r) {
      "use strict";
      e.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/internet-save-button.ef8b9e03cc561fe33f68bdf0db61c5fe.svg";
    },
    R162: function (t, e, r) {
      "use strict";
      e.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/article-image-006.a5a66d3d48daabd532910a77c803164e.png";
    },
    Te0E: function (t, e, r) {
      "use strict";
      e.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/article-image-008.7668bb04875ba3f9ad9207f502a300d7.png";
    },
    VUXQ: function (t, e, r) {
      "use strict";
      e.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/private-nook.adda9d99ef9f132c9d613f520e300fea.png";
    },
    a3WO: function (t, e, r) {
      "use strict";
      function n(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      r.d(e, "a", function () {
        return n;
      });
    },
    a6RD: function (t, e, r) {
      "use strict";
      var n = r("lSNA");
      function a(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function i(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? a(Object(r), !0).forEach(function (e) {
                n(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      (e.__esModule = !0),
        (e.noSSR = l),
        (e.default = function (t, e) {
          var r = c.default,
            n = {
              loading: function (t) {
                t.error, t.isLoading;
                return t.pastDelay, null;
              },
            };
          t instanceof Promise
            ? (n.loader = function () {
                return t;
              })
            : "function" === typeof t
            ? (n.loader = t)
            : "object" === typeof t && (n = i(i({}, n), t));
          if (
            ((n = i(i({}, n), e)),
            "object" === typeof t &&
              !(t instanceof Promise) &&
              (t.render &&
                (n.render = function (e, r) {
                  return t.render(r, e);
                }),
              t.modules))
          ) {
            r = c.default.Map;
            var a = {},
              o = t.modules();
            Object.keys(o).forEach(function (t) {
              var e = o[t];
              "function" !== typeof e.then
                ? (a[t] = e)
                : (a[t] = function () {
                    return e.then(function (t) {
                      return t.default || t;
                    });
                  });
            }),
              (n.loader = a);
          }
          n.loadableGenerated &&
            delete (n = i(i({}, n), n.loadableGenerated)).loadableGenerated;
          if ("boolean" === typeof n.ssr) {
            if (!n.ssr) return delete n.ssr, l(r, n);
            delete n.ssr;
          }
          return r(n);
        });
      var o = s(r("q1tI")),
        c = s(r("2qu3"));
      function s(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var u = !1;
      function l(t, e) {
        if ((delete e.webpack, delete e.modules, !u)) return t(e);
        var r = e.loading;
        return function () {
          return o.default.createElement(r, {
            error: null,
            isLoading: !0,
            pastDelay: !1,
            timedOut: !1,
          });
        };
      }
    },
    b0eP: function (t, e, r) {
      "use strict";
      e.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/features-phone.6f0f4c65c5892b24aa553e79b07dd444.png";
    },
    gHaj: function (t, e, r) {
      "use strict";
      e.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/article-image-005.feedfd70881810237caf35c3a217dd97.png";
    },
    iXCb: function (t, e, r) {
      "use strict";
      e.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/article-image-001.50ea6b0ff22a9ae71e6418fbb8f667b3.png";
    },
    jwwS: function (t, e, r) {
      "use strict";
      var n;
      (e.__esModule = !0), (e.LoadableContext = void 0);
      var a = ((n = r("q1tI")) && n.__esModule
        ? n
        : { default: n }
      ).default.createContext(null);
      e.LoadableContext = a;
    },
    mRj1: function (t, e, r) {
      "use strict";
      e.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/article-image-011.e94886cb062ab65dd07423a4792f79ac.png";
    },
    p7AD: function (t, e, r) {
      "use strict";
      e.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/article-image-012.985af25ce13959b770f0b7106473a2f1.png";
    },
    r1pi: function (t, e, r) {
      "use strict";
      e.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/private-nook-dark-mode.569aab973233b1b6cc932927c0d9416e.png";
    },
    tf0k: function (t, e, r) {
      "use strict";
      e.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/article-image-013.0e4c17ac4464971173d9854edf75b78c.png";
    },
    uRIL: function (t, e, r) {
      "use strict";
      e.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/article-image-004.bda888b2018bf4a5e5778b3563835ae5.png";
    },
    vT4N: function (t, e, r) {
      "use strict";
      e.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/article-image-014.bfe7f160b97078d99341af542d0e29e7.png";
    },
  },
]);
//# sourceMappingURL=e8b54cb4c060789b20d6f9877a61a99849d6200b.9ecfc4161b71b69a76cf.js.map
