_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [24],
  {
    "2XjZ": function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return a;
      }),
        r.d(e, "b", function () {
          return i;
        });
      var n = r("cvCm"),
        o = r("mjZG"),
        a = function (t) {
          return Object(n.request)(o.g, t);
        },
        i = function (t) {
          return Object(n.requestWithAuth)(o.g, t);
        };
    },
    "4NU4": function (t, e, r) {
      "use strict";
      var n = r("q1tI"),
        o = r.n(n),
        a = r("8Kt/"),
        i = r.n(a),
        c = r("UrOR"),
        s = r("Xdly"),
        u = r("wx14"),
        l = r("sUIV"),
        p = r("WHGu"),
        d = r("mjZG"),
        f = o.a.createElement;
      function m(t) {
        var e = t.url,
          r = t.title,
          n = t.description,
          a = t.image,
          i = t.type;
        if (!e || !r || !n) return null;
        var c = a ? "summary_large_image" : "summary",
          s = i || "website",
          m = a ? Object(p.c)(a, { width: 1200 }) : null;
        return f(
          o.a.Fragment,
          null,
          f(
            "meta",
            Object(u.a)(
              { name: "description", content: n },
              Object(l.testIdAttribute)("meta-description")
            )
          ),
          f(
            "meta",
            Object(u.a)(
              { name: "x-pocket-override-excerpt", content: n },
              Object(l.testIdAttribute)("pkt-description")
            )
          ),
          f(
            "meta",
            Object(u.a)(
              { itemProp: "name", content: r },
              Object(l.testIdAttribute)("itemprop-name")
            )
          ),
          f(
            "meta",
            Object(u.a)(
              { itemProp: "description", content: n },
              Object(l.testIdAttribute)("itemprop-description")
            )
          ),
          a
            ? f(
                "meta",
                Object(u.a)(
                  { itemProp: "image", content: m },
                  Object(l.testIdAttribute)("itemprop-image")
                )
              )
            : null,
          f(
            "meta",
            Object(u.a)(
              { name: "twitter:card", content: c },
              Object(l.testIdAttribute)("twitter-card")
            )
          ),
          f(
            "meta",
            Object(u.a)(
              { name: "twitter:url", content: e },
              Object(l.testIdAttribute)("twitter-url")
            )
          ),
          f(
            "meta",
            Object(u.a)(
              { name: "twitter:title", content: r },
              Object(l.testIdAttribute)("twitter-title")
            )
          ),
          f(
            "meta",
            Object(u.a)(
              { name: "twitter:description", content: n },
              Object(l.testIdAttribute)("twitter-description")
            )
          ),
          f(
            "meta",
            Object(u.a)(
              { name: "twitter:site", content: "@pocket" },
              Object(l.testIdAttribute)("twitter-site")
            )
          ),
          a
            ? f(
                "meta",
                Object(u.a)(
                  { name: "twitter:image", content: m },
                  Object(l.testIdAttribute)("twitter-image")
                )
              )
            : null,
          f(
            "meta",
            Object(u.a)(
              { property: "fb:app_id", content: d.h },
              Object(l.testIdAttribute)("fb-app_id")
            )
          ),
          f(
            "meta",
            Object(u.a)(
              { property: "og:type", content: s },
              Object(l.testIdAttribute)("og-type")
            )
          ),
          f(
            "meta",
            Object(u.a)(
              { property: "og:url", content: e },
              Object(l.testIdAttribute)("og-url")
            )
          ),
          f(
            "meta",
            Object(u.a)(
              { property: "og:title", content: r },
              Object(l.testIdAttribute)("og-title")
            )
          ),
          f(
            "meta",
            Object(u.a)(
              { property: "og:description", content: n },
              Object(l.testIdAttribute)("og-description")
            )
          ),
          f(
            "meta",
            Object(u.a)(
              { property: "og:site_name", content: "Pocket" },
              Object(l.testIdAttribute)("og-site_name")
            )
          ),
          a
            ? f(
                "meta",
                Object(u.a)(
                  { property: "og:image", content: m },
                  Object(l.testIdAttribute)("og-image")
                )
              )
            : null
        );
      }
      var g = r("W6kq"),
        b = o.a.createElement,
        y = {
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
      function h(t) {
        var e = t.url,
          r = t.showCanonical;
        if (!e) return null;
        var n = new URL(e),
          a = n.origin,
          i = n.pathname,
          c = g.i18n.options,
          s = null === c || void 0 === c ? void 0 : c.allLanguages,
          p =
            null === s || void 0 === s
              ? void 0
              : s.find(function (t) {
                  return t === i.split("/")[1];
                }),
          d = i.replace("/" + p, "");
        return b(
          o.a.Fragment,
          null,
          r
            ? b(
                "link",
                Object(u.a)(
                  { rel: "canonical", href: a + "/" + p + d },
                  Object(l.testIdAttribute)("link-canonical")
                )
              )
            : null,
          b(
            "link",
            Object(u.a)(
              { rel: "alternate", hrefLang: "x-default", href: a + d },
              Object(l.testIdAttribute)("hreflang-x-default")
            )
          ),
          s.map(function (t) {
            return b(
              "link",
              Object(u.a)(
                {
                  rel: "alternate",
                  hrefLang: t,
                  href: a + "/" + t + d,
                  title: y[t],
                  key: "".concat(t),
                },
                Object(l.testIdAttribute)("hreflang-".concat(t))
              )
            );
          })
        );
      }
      h.defaultProps = { showCanonical: !0 };
      var j = o.a.createElement;
      function O(t) {
        var e = t.metaData,
          r = t.children,
          n = t.title,
          a = void 0 === n ? "Pocket" : n,
          u = t.canonical,
          l = t.renderHreflangLinks,
          p = t.selectedNavLink,
          d = t.isFullWidthLayout,
          f = t.hasFooterColorBorder,
          g =
            (null === e || void 0 === e ? void 0 : e.description) &&
            (null === e || void 0 === e ? void 0 : e.title);
        return j(
          o.a.Fragment,
          null,
          j(
            i.a,
            null,
            j("title", null, a),
            j("link", {
              rel: "icon",
              type: "image/x-icon",
              href: "/favicon.ico",
            }),
            u ? j("link", { rel: "canonical", href: u }) : null,
            l
              ? j(h, {
                  url: null === e || void 0 === e ? void 0 : e.url,
                  showCanonical: void 0 === u,
                })
              : null,
            g ? j(m, e) : null
          ),
          j(s.a, { selectedLink: p }),
          d ? r : j(c.u, null, r),
          j(c.l, { hasColorBorder: f })
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
    "8jRI": function (t, e, r) {
      "use strict";
      var n = new RegExp("%[a-f0-9]{2}", "gi"),
        o = new RegExp("(%[a-f0-9]{2})+", "gi");
      function a(t, e) {
        try {
          return decodeURIComponent(t.join(""));
        } catch (o) {}
        if (1 === t.length) return t;
        e = e || 1;
        var r = t.slice(0, e),
          n = t.slice(e);
        return Array.prototype.concat.call([], a(r), a(n));
      }
      function i(t) {
        try {
          return decodeURIComponent(t);
        } catch (o) {
          for (var e = t.match(n), r = 1; r < e.length; r++)
            e = (t = a(e, r).join("")).match(n);
          return t;
        }
      }
      t.exports = function (t) {
        if ("string" !== typeof t)
          throw new TypeError(
            "Expected `encodedURI` to be of type `string`, got `" +
              typeof t +
              "`"
          );
        try {
          return (t = t.replace(/\+/g, " ")), decodeURIComponent(t);
        } catch (e) {
          return (function (t) {
            for (
              var r = { "%FE%FF": "\ufffd\ufffd", "%FF%FE": "\ufffd\ufffd" },
                n = o.exec(t);
              n;

            ) {
              try {
                r[n[0]] = decodeURIComponent(n[0]);
              } catch (e) {
                var a = i(n[0]);
                a !== n[0] && (r[n[0]] = a);
              }
              n = o.exec(t);
            }
            r["%C2"] = "\ufffd";
            for (var c = Object.keys(r), s = 0; s < c.length; s++) {
              var u = c[s];
              t = t.replace(new RegExp(u, "g"), r[u]);
            }
            return t;
          })(t);
        }
      };
    },
    "8yz6": function (t, e, r) {
      "use strict";
      t.exports = (t, e) => {
        if ("string" !== typeof t || "string" !== typeof e)
          throw new TypeError("Expected the arguments to be of type `string`");
        if ("" === e) return [t];
        const r = t.indexOf(e);
        return -1 === r ? [t] : [t.slice(0, r), t.slice(r + e.length)];
      };
    },
    H0Ei: function (t, e, r) {
      "use strict";
      e.a =
        "https://assets.getpocket.com/web-discover/_next/static/images/book-library.bd5662d6b73071aa9230cad144aedcfa.svg";
    },
    "HaE+": function (t, e, r) {
      "use strict";
      function n(t, e, r, n, o, a, i) {
        try {
          var c = t[a](i),
            s = c.value;
        } catch (u) {
          return void r(u);
        }
        c.done ? e(s) : Promise.resolve(s).then(n, o);
      }
      function o(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (o, a) {
            var i = t.apply(e, r);
            function c(t) {
              n(i, o, a, c, s, "next", t);
            }
            function s(t) {
              n(i, o, a, c, s, "throw", t);
            }
            c(void 0);
          });
        };
      }
      r.d(e, "a", function () {
        return o;
      });
    },
    Jnk0: function (t, e, r) {
      "use strict";
      const n = r("ZFOp"),
        o = r("8jRI"),
        a = r("8yz6");
      function i(t) {
        if ("string" !== typeof t || 1 !== t.length)
          throw new TypeError(
            "arrayFormatSeparator must be single character string"
          );
      }
      function c(t, e) {
        return e.encode ? (e.strict ? n(t) : encodeURIComponent(t)) : t;
      }
      function s(t, e) {
        return e.decode ? o(t) : t;
      }
      function u(t) {
        const e = t.indexOf("#");
        return -1 !== e && (t = t.slice(0, e)), t;
      }
      function l(t) {
        const e = (t = u(t)).indexOf("?");
        return -1 === e ? "" : t.slice(e + 1);
      }
      function p(t, e) {
        return (
          e.parseNumbers &&
          !Number.isNaN(Number(t)) &&
          "string" === typeof t &&
          "" !== t.trim()
            ? (t = Number(t))
            : !e.parseBooleans ||
              null === t ||
              ("true" !== t.toLowerCase() && "false" !== t.toLowerCase()) ||
              (t = "true" === t.toLowerCase()),
          t
        );
      }
      function d(t, e) {
        i(
          (e = Object.assign(
            {
              decode: !0,
              sort: !0,
              arrayFormat: "none",
              arrayFormatSeparator: ",",
              parseNumbers: !1,
              parseBooleans: !1,
            },
            e
          )).arrayFormatSeparator
        );
        const r = (function (t) {
            let e;
            switch (t.arrayFormat) {
              case "index":
                return (t, r, n) => {
                  (e = /\[(\d*)\]$/.exec(t)),
                    (t = t.replace(/\[\d*\]$/, "")),
                    e
                      ? (void 0 === n[t] && (n[t] = {}), (n[t][e[1]] = r))
                      : (n[t] = r);
                };
              case "bracket":
                return (t, r, n) => {
                  (e = /(\[\])$/.exec(t)),
                    (t = t.replace(/\[\]$/, "")),
                    e
                      ? void 0 !== n[t]
                        ? (n[t] = [].concat(n[t], r))
                        : (n[t] = [r])
                      : (n[t] = r);
                };
              case "comma":
              case "separator":
                return (e, r, n) => {
                  const o =
                    "string" === typeof r &&
                    r.split("").indexOf(t.arrayFormatSeparator) > -1
                      ? r.split(t.arrayFormatSeparator).map((e) => s(e, t))
                      : null === r
                      ? r
                      : s(r, t);
                  n[e] = o;
                };
              default:
                return (t, e, r) => {
                  void 0 !== r[t] ? (r[t] = [].concat(r[t], e)) : (r[t] = e);
                };
            }
          })(e),
          n = Object.create(null);
        if ("string" !== typeof t) return n;
        if (!(t = t.trim().replace(/^[?#&]/, ""))) return n;
        for (const o of t.split("&")) {
          let [t, i] = a(e.decode ? o.replace(/\+/g, " ") : o, "=");
          (i =
            void 0 === i
              ? null
              : ["comma", "separator"].includes(e.arrayFormat)
              ? i
              : s(i, e)),
            r(s(t, e), i, n);
        }
        for (const o of Object.keys(n)) {
          const t = n[o];
          if ("object" === typeof t && null !== t)
            for (const r of Object.keys(t)) t[r] = p(t[r], e);
          else n[o] = p(t, e);
        }
        return !1 === e.sort
          ? n
          : (!0 === e.sort
              ? Object.keys(n).sort()
              : Object.keys(n).sort(e.sort)
            ).reduce((t, e) => {
              const r = n[e];
              return (
                Boolean(r) && "object" === typeof r && !Array.isArray(r)
                  ? (t[e] = (function t(e) {
                      return Array.isArray(e)
                        ? e.sort()
                        : "object" === typeof e
                        ? t(Object.keys(e))
                            .sort((t, e) => Number(t) - Number(e))
                            .map((t) => e[t])
                        : e;
                    })(r))
                  : (t[e] = r),
                t
              );
            }, Object.create(null));
      }
      (e.extract = l),
        (e.parse = d),
        (e.stringify = (t, e) => {
          if (!t) return "";
          i(
            (e = Object.assign(
              {
                encode: !0,
                strict: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
              },
              e
            )).arrayFormatSeparator
          );
          const r = (r) =>
              (e.skipNull && ((t) => null === t || void 0 === t)(t[r])) ||
              (e.skipEmptyString && "" === t[r]),
            n = (function (t) {
              switch (t.arrayFormat) {
                case "index":
                  return (e) => (r, n) => {
                    const o = r.length;
                    return void 0 === n ||
                      (t.skipNull && null === n) ||
                      (t.skipEmptyString && "" === n)
                      ? r
                      : null === n
                      ? [...r, [c(e, t), "[", o, "]"].join("")]
                      : [...r, [c(e, t), "[", c(o, t), "]=", c(n, t)].join("")];
                  };
                case "bracket":
                  return (e) => (r, n) =>
                    void 0 === n ||
                    (t.skipNull && null === n) ||
                    (t.skipEmptyString && "" === n)
                      ? r
                      : null === n
                      ? [...r, [c(e, t), "[]"].join("")]
                      : [...r, [c(e, t), "[]=", c(n, t)].join("")];
                case "comma":
                case "separator":
                  return (e) => (r, n) =>
                    null === n || void 0 === n || 0 === n.length
                      ? r
                      : 0 === r.length
                      ? [[c(e, t), "=", c(n, t)].join("")]
                      : [[r, c(n, t)].join(t.arrayFormatSeparator)];
                default:
                  return (e) => (r, n) =>
                    void 0 === n ||
                    (t.skipNull && null === n) ||
                    (t.skipEmptyString && "" === n)
                      ? r
                      : null === n
                      ? [...r, c(e, t)]
                      : [...r, [c(e, t), "=", c(n, t)].join("")];
              }
            })(e),
            o = {};
          for (const i of Object.keys(t)) r(i) || (o[i] = t[i]);
          const a = Object.keys(o);
          return (
            !1 !== e.sort && a.sort(e.sort),
            a
              .map((r) => {
                const o = t[r];
                return void 0 === o
                  ? ""
                  : null === o
                  ? c(r, e)
                  : Array.isArray(o)
                  ? o.reduce(n(r), []).join("&")
                  : c(r, e) + "=" + c(o, e);
              })
              .filter((t) => t.length > 0)
              .join("&")
          );
        }),
        (e.parseUrl = (t, e) => ({
          url: u(t).split("?")[0] || "",
          query: d(l(t), e),
        })),
        (e.stringifyUrl = (t, r) => {
          const n = u(t.url).split("?")[0] || "",
            o = e.extract(t.url),
            a = e.parse(o),
            i = (function (t) {
              let e = "";
              const r = t.indexOf("#");
              return -1 !== r && (e = t.slice(r)), e;
            })(t.url),
            c = Object.assign(a, t.query);
          let s = e.stringify(c, r);
          return s && (s = `?${s}`), `${n}${s}${i}`;
        });
    },
    Z4hQ: function (t, e, r) {
      "use strict";
      var n = r("q1tI"),
        o = r.n(n),
        a = r("17x9"),
        i = r.n(a),
        c = o.a.createElement,
        s = "en";
      function u(t) {
        var e = t.language,
          r = t.contentMap;
        return c(o.a.Fragment, null, r[e] || r[s] || null);
      }
      (u.propTypes = {
        language: i.a.string,
        contentMap: i.a.object.isRequired,
      }),
        (e.a = u);
    },
    ZFOp: function (t, e, r) {
      "use strict";
      t.exports = (t) =>
        encodeURIComponent(t).replace(
          /[!'()*]/g,
          (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`
        );
    },
    "cr+I": function (t, e, r) {
      "use strict";
      const n = r("ZFOp"),
        o = r("8jRI"),
        a = r("8yz6");
      function i(t) {
        if ("string" !== typeof t || 1 !== t.length)
          throw new TypeError(
            "arrayFormatSeparator must be single character string"
          );
      }
      function c(t, e) {
        return e.encode ? (e.strict ? n(t) : encodeURIComponent(t)) : t;
      }
      function s(t, e) {
        return e.decode ? o(t) : t;
      }
      function u(t) {
        const e = t.indexOf("#");
        return -1 !== e && (t = t.slice(0, e)), t;
      }
      function l(t) {
        const e = (t = u(t)).indexOf("?");
        return -1 === e ? "" : t.slice(e + 1);
      }
      function p(t, e) {
        return (
          e.parseNumbers &&
          !Number.isNaN(Number(t)) &&
          "string" === typeof t &&
          "" !== t.trim()
            ? (t = Number(t))
            : !e.parseBooleans ||
              null === t ||
              ("true" !== t.toLowerCase() && "false" !== t.toLowerCase()) ||
              (t = "true" === t.toLowerCase()),
          t
        );
      }
      function d(t, e) {
        i(
          (e = Object.assign(
            {
              decode: !0,
              sort: !0,
              arrayFormat: "none",
              arrayFormatSeparator: ",",
              parseNumbers: !1,
              parseBooleans: !1,
            },
            e
          )).arrayFormatSeparator
        );
        const r = (function (t) {
            let e;
            switch (t.arrayFormat) {
              case "index":
                return (t, r, n) => {
                  (e = /\[(\d*)\]$/.exec(t)),
                    (t = t.replace(/\[\d*\]$/, "")),
                    e
                      ? (void 0 === n[t] && (n[t] = {}), (n[t][e[1]] = r))
                      : (n[t] = r);
                };
              case "bracket":
                return (t, r, n) => {
                  (e = /(\[\])$/.exec(t)),
                    (t = t.replace(/\[\]$/, "")),
                    e
                      ? void 0 !== n[t]
                        ? (n[t] = [].concat(n[t], r))
                        : (n[t] = [r])
                      : (n[t] = r);
                };
              case "comma":
              case "separator":
                return (e, r, n) => {
                  const o =
                    "string" === typeof r &&
                    r.split("").indexOf(t.arrayFormatSeparator) > -1
                      ? r.split(t.arrayFormatSeparator).map((e) => s(e, t))
                      : null === r
                      ? r
                      : s(r, t);
                  n[e] = o;
                };
              default:
                return (t, e, r) => {
                  void 0 !== r[t] ? (r[t] = [].concat(r[t], e)) : (r[t] = e);
                };
            }
          })(e),
          n = Object.create(null);
        if ("string" !== typeof t) return n;
        if (!(t = t.trim().replace(/^[?#&]/, ""))) return n;
        for (const o of t.split("&")) {
          let [t, i] = a(e.decode ? o.replace(/\+/g, " ") : o, "=");
          (i =
            void 0 === i
              ? null
              : ["comma", "separator"].includes(e.arrayFormat)
              ? i
              : s(i, e)),
            r(s(t, e), i, n);
        }
        for (const o of Object.keys(n)) {
          const t = n[o];
          if ("object" === typeof t && null !== t)
            for (const r of Object.keys(t)) t[r] = p(t[r], e);
          else n[o] = p(t, e);
        }
        return !1 === e.sort
          ? n
          : (!0 === e.sort
              ? Object.keys(n).sort()
              : Object.keys(n).sort(e.sort)
            ).reduce((t, e) => {
              const r = n[e];
              return (
                Boolean(r) && "object" === typeof r && !Array.isArray(r)
                  ? (t[e] = (function t(e) {
                      return Array.isArray(e)
                        ? e.sort()
                        : "object" === typeof e
                        ? t(Object.keys(e))
                            .sort((t, e) => Number(t) - Number(e))
                            .map((t) => e[t])
                        : e;
                    })(r))
                  : (t[e] = r),
                t
              );
            }, Object.create(null));
      }
      (e.extract = l),
        (e.parse = d),
        (e.stringify = (t, e) => {
          if (!t) return "";
          i(
            (e = Object.assign(
              {
                encode: !0,
                strict: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
              },
              e
            )).arrayFormatSeparator
          );
          const r = (r) =>
              (e.skipNull && ((t) => null === t || void 0 === t)(t[r])) ||
              (e.skipEmptyString && "" === t[r]),
            n = (function (t) {
              switch (t.arrayFormat) {
                case "index":
                  return (e) => (r, n) => {
                    const o = r.length;
                    return void 0 === n ||
                      (t.skipNull && null === n) ||
                      (t.skipEmptyString && "" === n)
                      ? r
                      : null === n
                      ? [...r, [c(e, t), "[", o, "]"].join("")]
                      : [...r, [c(e, t), "[", c(o, t), "]=", c(n, t)].join("")];
                  };
                case "bracket":
                  return (e) => (r, n) =>
                    void 0 === n ||
                    (t.skipNull && null === n) ||
                    (t.skipEmptyString && "" === n)
                      ? r
                      : null === n
                      ? [...r, [c(e, t), "[]"].join("")]
                      : [...r, [c(e, t), "[]=", c(n, t)].join("")];
                case "comma":
                case "separator":
                  return (e) => (r, n) =>
                    null === n || void 0 === n || 0 === n.length
                      ? r
                      : 0 === r.length
                      ? [[c(e, t), "=", c(n, t)].join("")]
                      : [[r, c(n, t)].join(t.arrayFormatSeparator)];
                default:
                  return (e) => (r, n) =>
                    void 0 === n ||
                    (t.skipNull && null === n) ||
                    (t.skipEmptyString && "" === n)
                      ? r
                      : null === n
                      ? [...r, c(e, t)]
                      : [...r, [c(e, t), "=", c(n, t)].join("")];
              }
            })(e),
            o = {};
          for (const i of Object.keys(t)) r(i) || (o[i] = t[i]);
          const a = Object.keys(o);
          return (
            !1 !== e.sort && a.sort(e.sort),
            a
              .map((r) => {
                const o = t[r];
                return void 0 === o
                  ? ""
                  : null === o
                  ? c(r, e)
                  : Array.isArray(o)
                  ? o.reduce(n(r), []).join("&")
                  : c(r, e) + "=" + c(o, e);
              })
              .filter((t) => t.length > 0)
              .join("&")
          );
        }),
        (e.parseUrl = (t, e) => {
          e = Object.assign({ decode: !0 }, e);
          const [r, n] = a(t, "#");
          return Object.assign(
            { url: r.split("?")[0] || "", query: d(l(t), e) },
            e && e.parseFragmentIdentifier && n
              ? { fragmentIdentifier: s(n, e) }
              : {}
          );
        }),
        (e.stringifyUrl = (t, r) => {
          r = Object.assign({ encode: !0, strict: !0 }, r);
          const n = u(t.url).split("?")[0] || "",
            o = e.extract(t.url),
            a = e.parse(o, { sort: !1 }),
            i = Object.assign(a, t.query);
          let s = e.stringify(i, r);
          s && (s = `?${s}`);
          let l = (function (t) {
            let e = "";
            const r = t.indexOf("#");
            return -1 !== r && (e = t.slice(r)), e;
          })(t.url);
          return (
            t.fragmentIdentifier && (l = `#${c(t.fragmentIdentifier, r)}`),
            `${n}${s}${l}`
          );
        });
    },
    cvCm: function (t, e, r) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.request = function (t, e) {
            const { fullUrl: r, fetchData: n } = s(t, e);
            return (0, o.default)(r, n)
              .then(u)
              .then((t) => t.json());
          }),
          (e.requestWithAuth = function (t, e) {
            const { fullUrl: r, fetchData: n } = s(t, e);
            return (0, o.default)(r, n)
              .then(u)
              .then(l)
              .then((t) => t.json());
          }),
          (e.LOGIN_URL = e.API_URL = void 0);
        var n = i(r("Jnk0")),
          o = i(r("vcXL")),
          a = r("oY9k");
        function i(t) {
          return t && t.__esModule ? t : { default: t };
        }
        const c = t.env.POCKET_API_URL
          ? t.env.POCKET_API_URL
          : "https://getpocket.com/v3";
        e.API_URL = c;
        function s(t, e) {
          let r;
          if (!e.path) throw new Error("options.path is required by request()");
          const o = new a.Headers({
            "Content-Type": "application/json",
            "X-Accept": "application/json; charset=UTF8",
          });
          return (
            e && e.cookie && o.append("cookie", e.cookie),
            e && e.data && (r = JSON.stringify(e.data)),
            {
              fullUrl: (function (t, e) {
                const r = n.default.parse(n.default.extract(e.path)),
                  o = n.default.stringify({
                    ...r,
                    enable_cors: 1,
                    consumer_key: t,
                  }),
                  a = e.path.split("?")[0];
                return `${c}${a}?${o}`;
              })(t, e),
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
        function u(t) {
          return t.ok ? t : Promise.reject(t);
        }
        function l(t) {
          if (t.headers.get("x-error-code"))
            throw new Error(t.headers.get("x-error"));
          return t;
        }
        e.LOGIN_URL = "https://getpocket.com/login";
      }.call(this, r("8oxB")));
    },
    gIsu: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r("o0o1"),
        o = r.n(n),
        a = r("rePB"),
        i = r("HaE+"),
        c = r("cr+I"),
        s = r.n(c),
        u = r("q1tI"),
        l = r.n(u),
        p = r("4NU4"),
        d = (r("40A7"), r("W6kq")),
        f = r("UrOR"),
        m = r("H0Ei"),
        g = r("Z4hQ"),
        b = r("w/UP"),
        y = l.a.createElement,
        h = "m1xgitq",
        j = function (t) {
          var e = t.language;
          return y(
            u.Fragment,
            null,
            y(
              "h1",
              { className: "h3" },
              y(
                d.Trans,
                { i18nKey: "pocket-hits:signup-thanks" },
                "Thanks for subscribing!"
              )
            ),
            y(
              "p",
              { className: "success" },
              y(
                d.Trans,
                { i18nKey: "pocket-hits:signup-check-inbox" },
                "Check your inbox every weekday for story recommendations from across the web."
              )
            ),
            y(
              "p",
              { className: "success" },
              y(
                d.Trans,
                { i18nKey: "pocket-hits:signup-article-recommend" },
                "In the meantime, check out some of the most popular English-language articles we recommend."
              )
            ),
            y(
              "div",
              { className: "m1lvlmoc" },
              y("img", { src: m.a, alt: "" }),
              y(
                f.c,
                {
                  variant: "emphasized",
                  size: "large",
                  href: "/explore/must-reads?utm_source=".concat(
                    e,
                    "-pocket-hits-signup-confirmation"
                  ),
                },
                y(
                  d.Trans,
                  { i18nKey: "pocket-hits:discover-must-read" },
                  "Discover must-read articles"
                )
              )
            ),
            y(g.a, {
              language: e,
              contentMap: {
                "de-DE": y(
                  "div",
                  { className: "t1ciegzk" },
                  y(b.a, {
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
                  })
                ),
              },
            })
          );
        },
        O = function () {
          return y(
            u.Fragment,
            null,
            y(
              "h1",
              { className: "h3" },
              y(
                d.Trans,
                { i18nKey: "pocket-hits:signup-confirmation-link-expired" },
                "This link has expired"
              )
            ),
            y(
              "p",
              { className: "failed" },
              y(
                d.Trans,
                { i18nKey: "pocket-hits:signup-return-to-subscribe" },
                "You can still subscribe to Pocket\u2019s weekday newsletter of fascinating reads. Click ",
                y("a", { href: "/explore/pocket-hits-signup" }, "here"),
                " to return to the newsletter sign up page."
              )
            )
          );
        };
      function v(t) {
        var e = t.language,
          r = t.isSuccessful;
        return y(
          p.a,
          { title: "Pocket" },
          y("main", { className: h }, y(r ? j : O, { language: e }))
        );
      }
      r("5hHw");
      var k = r("hBvE");
      function w(t, e) {
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
      function x(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? w(Object(r), !0).forEach(function (e) {
                Object(a.a)(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : w(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      v.getInitialProps = (function () {
        var t = Object(i.a)(
          o.a.mark(function t(e) {
            var r, n, a, i, c, u, l, p, f, m, g;
            return o.a.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((a = e.req),
                        (i = e.res),
                        (c = a ? a.language : d.i18n.language),
                        (u =
                          null === a || void 0 === a
                            ? void 0
                            : null === (r = a.query) || void 0 === r
                            ? void 0
                            : r.id),
                        "0" !==
                          (l =
                            null === a || void 0 === a
                              ? void 0
                              : null === (n = a.query) || void 0 === n
                              ? void 0
                              : n.success) && "1" !== l)
                      ) {
                        t.next = 8;
                        break;
                      }
                      return t.abrupt("return", {
                        language: c,
                        isSuccessful: "1" === l,
                        namespacesRequired: ["pocket-hits"],
                      });
                    case 8:
                      return (
                        (p = 0), (t.prev = 9), (t.next = 12), Object(k.a)(u, c)
                      );
                    case 12:
                      (p = 1), (t.next = 18);
                      break;
                    case 15:
                      (t.prev = 15), (t.t0 = t.catch(9)), console.log(t.t0);
                    case 18:
                      return (
                        a &&
                          i &&
                          ((f = a.query || {}),
                          (m = x(x({}, f), {}, { success: p })),
                          (g = ""
                            .concat(a.baseUrl, "?")
                            .concat(s.a.stringify(m))),
                          i.writeHead(303, { Location: g }),
                          i.end()),
                        t.abrupt("return", {})
                      );
                    case 20:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[9, 15]]
            );
          })
        );
        return function (e) {
          return t.apply(this, arguments);
        };
      })();
      e.default = v;
    },
    hBvE: function (t, e, r) {
      "use strict";
      r.d(e, "b", function () {
        return o;
      }),
        r.d(e, "a", function () {
          return a;
        });
      var n = r("2XjZ"),
        o = function (t, e, r, o) {
          var a =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : "en-US",
            i =
              !(arguments.length > 5 && void 0 !== arguments[5]) ||
              arguments[5],
            c =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : "daily";
          return Object(n.a)({
            path: "/newsletter/subscription",
            data: {
              email: t,
              "g-captcha-response": e,
              utm_campaign: r,
              utm_source: o,
              locale: a,
              marketing_opt_in: i,
              frequency: c,
            },
          });
        },
        a = function (t, e) {
          return Object(n.a)({
            path: "/newsletter/subscription/opt-in/".concat(t),
            data: { locale: e },
          });
        };
    },
    qP6s: function (t, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/confirmation",
        function () {
          return r("gIsu");
        },
      ]);
    },
    vcXL: function (t, e, r) {
      "use strict";
      var n = self.fetch.bind(self);
      (t.exports = n), (t.exports.default = t.exports);
    },
    "w/UP": function (t, e, r) {
      "use strict";
      var n = r("q1tI"),
        o = r.n(n),
        a = (r("40A7"), r("TSYQ")),
        i = r.n(a),
        c = o.a.createElement,
        s = "tuf6ktc";
      function u(t) {
        var e = t.topics,
          r = t.showTopBorder;
        return c(
          "ul",
          { className: i()(s, { "visible-top-border": r }) },
          e.map(function (t) {
            return c("li", { key: "topic-list-".concat(t) }, t);
          })
        );
      }
      (u.defaultProps = { showTopBorder: !0 }), (e.a = u), r("J/Tq");
    },
  },
  [["qP6s", 2, 3, 4, 1, 5, 0]],
]);
//# sourceMappingURL=confirmation-dbe3cd9ce5be646bc896.js.map
