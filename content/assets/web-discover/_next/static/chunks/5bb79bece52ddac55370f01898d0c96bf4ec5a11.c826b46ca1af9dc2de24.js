(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [15],
  {
    "/Vjk": function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return x;
      }),
        n.d(t, "c", function () {
          return E;
        }),
        n.d(t, "f", function () {
          return _;
        }),
        n.d(t, "d", function () {
          return D;
        }),
        n.d(t, "e", function () {
          return T;
        }),
        n.d(t, "a", function () {
          return I;
        });
      var r = n("o0o1"),
        i = n.n(r),
        o = n("rePB"),
        a = n("5rFJ"),
        s = n("NOLZ"),
        u = n("HaE+"),
        c = n("6FLb"),
        f =
          (n("2XjZ"),
          "\n  query GetArticleBySlug($slug: String) {\n    getArticleBySlug(slug: $slug) {\n      items {\n        id\n        legacyId\n        originalItemId\n        itemId\n        status\n        slug\n        showAds\n        publisherUrl\n        authorNames\n        expiresAt\n        contentId\n        localeLanguage\n        localeCountry\n        title\n        excerpt\n        publishedAt\n        publisherId\n        mainImage\n        iabTopCategory\n        iabSubCategory\n        curationCategory\n        content {\n          content\n        }\n        publisher {\n          id\n          legacyId\n          name\n          recommendationName\n          url\n          showAuthors\n          attributeCanonicalToPublisher\n          showArticleCta\n          appearedOnDomain\n          logo {\n            name\n            url\n          }\n          logoWide {\n            name\n            url\n          }\n          logoWideBlack {\n            name\n            url\n          }\n          articleCta {\n            url\n            text\n            leadIn\n          }\n        }\n      }\n    }\n  }\n"),
        l = n("mjZG"),
        p = n("vcXL"),
        d = n.n(p);
      function h(e) {
        return y.apply(this, arguments);
      }
      function y() {
        return (y = Object(u.a)(
          i.a.mark(function e(t) {
            var n, r, o, a;
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = { slug: t }),
                      (r = l.d),
                      (o = { "x-api-key": l.c }),
                      (a = new c.GraphQLClient(r, { headers: o })),
                      (e.next = 6),
                      a
                        .request(f, n)
                        .then(function (e) {
                          return e.getArticleBySlug;
                        })
                        .catch(function (e) {
                          return console.error(e);
                        })
                    );
                  case 6:
                    return e.abrupt("return", e.sent);
                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function v() {
        return (v = Object(u.a)(
          i.a.mark(function e(t) {
            var n, r;
            return i.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        d()(
                          "http://".concat(t, "/mockAPI/article/random")
                        ).then(function (e) {
                          return e.json();
                        })
                      );
                    case 3:
                      return (
                        (n = e.sent), (r = n.title), e.abrupt("return", h(r))
                      );
                    case 8:
                      throw (
                        ((e.prev = 8),
                        (e.t0 = e.catch(0)),
                        new Error("All the things have gone wrong"))
                      );
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 8]]
            );
          })
        )).apply(this, arguments);
      }
      var b = n("34em"),
        m = n("Gq/i"),
        g = i.a.mark(P),
        O = i.a.mark(A);
      function w(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? w(Object(n), !0).forEach(function (t) {
                Object(o.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : w(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var x = function (e) {
          return { type: s.d, hydrated: e };
        },
        E = function (e) {
          return { type: s.f, url: e };
        },
        _ = function (e) {
          return { type: s.i, id: e };
        },
        S = { articleData: {}, saveStatus: "unsaved" },
        D = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : S,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case s.d:
              var n = t.hydrated;
              return j(j({}, e), n);
            case s.f:
              return j(j({}, e), {}, { saveStatus: "saving" });
            case s.g:
              return j(j({}, e), {}, { saveStatus: "saved" });
            case s.e:
            case s.j:
              return j(j({}, e), {}, { saveStatus: "unsaved" });
            case s.h:
              return j(j({}, e), {}, { saveStatus: "saved" });
            default:
              return e;
          }
        },
        T = [Object(a.c)(s.f, P), Object(a.c)(s.i, A)];
      function P(e) {
        var t, n;
        return i.a.wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (t = e.url), (r.prev = 1), (r.next = 4), Object(b.a)(t)
                  );
                case 4:
                  if (
                    1 ===
                    (null === (n = r.sent) || void 0 === n ? void 0 : n.status)
                  ) {
                    r.next = 7;
                    break;
                  }
                  throw new Error("Unable to save");
                case 7:
                  return (r.next = 9), Object(a.b)({ type: s.g });
                case 9:
                  r.next = 15;
                  break;
                case 11:
                  return (
                    (r.prev = 11),
                    (r.t0 = r.catch(1)),
                    (r.next = 15),
                    Object(a.b)({ type: s.e, error: r.t0 })
                  );
                case 15:
                case "end":
                  return r.stop();
              }
          },
          g,
          null,
          [[1, 11]]
        );
      }
      function A(e) {
        var t, n;
        return i.a.wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (t = e.id), (r.prev = 1), (r.next = 4), Object(m.a)(t);
                case 4:
                  if (
                    1 ===
                    (null === (n = r.sent) || void 0 === n ? void 0 : n.status)
                  ) {
                    r.next = 7;
                    break;
                  }
                  throw new Error("Unable to remove item");
                case 7:
                  return (r.next = 9), Object(a.b)({ type: s.j });
                case 9:
                  r.next = 15;
                  break;
                case 11:
                  return (
                    (r.prev = 11),
                    (r.t0 = r.catch(1)),
                    (r.next = 15),
                    Object(a.b)({ type: s.h, error: r.t0 })
                  );
                case 15:
                case "end":
                  return r.stop();
              }
          },
          O,
          null,
          [[1, 11]]
        );
      }
      function k(e) {
        return (function (e) {
          return v.apply(this, arguments);
        })(e);
      }
      function I(e) {
        var t = e.baseUrl,
          n = e.slug;
        return "random" === n
          ? k(t)
          : (function (e) {
              return h(e);
            })(n);
      }
    },
    "6FLb": function (e, t, n) {
      "use strict";
      var r =
          (this && this.__assign) ||
          function () {
            return (r =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }).apply(this, arguments);
          },
        i =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, o) {
              function a(e) {
                try {
                  u(r.next(e));
                } catch (t) {
                  o(t);
                }
              }
              function s(e) {
                try {
                  u(r.throw(e));
                } catch (t) {
                  o(t);
                }
              }
              function u(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, s);
              }
              u((r = r.apply(e, t || [])).next());
            });
          },
        o =
          (this && this.__generator) ||
          function (e, t) {
            var n,
              r,
              i,
              o,
              a = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: s(0), throw: s(1), return: s(2) }),
              "function" === typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function s(o) {
              return function (s) {
                return (function (o) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; a; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (i =
                            2 & o[0]
                              ? r.return
                              : o[0]
                              ? r.throw || ((i = r.return) && i.call(r), 0)
                              : r.next) &&
                          !(i = i.call(r, o[1])).done)
                      )
                        return i;
                      switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                        case 0:
                        case 1:
                          i = o;
                          break;
                        case 4:
                          return a.label++, { value: o[1], done: !1 };
                        case 5:
                          a.label++, (r = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (
                            !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                            (6 === o[0] || 2 === o[0])
                          ) {
                            a = 0;
                            continue;
                          }
                          if (
                            3 === o[0] &&
                            (!i || (o[1] > i[0] && o[1] < i[3]))
                          ) {
                            a.label = o[1];
                            break;
                          }
                          if (6 === o[0] && a.label < i[1]) {
                            (a.label = i[1]), (i = o);
                            break;
                          }
                          if (i && a.label < i[2]) {
                            (a.label = i[2]), a.ops.push(o);
                            break;
                          }
                          i[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      o = t.call(e, a);
                    } catch (s) {
                      (o = [6, s]), (r = 0);
                    } finally {
                      n = i = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, s]);
              };
            }
          },
        a =
          (this && this.__rest) ||
          function (e, t) {
            var n = {};
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                t.indexOf(r) < 0 &&
                (n[r] = e[r]);
            if (
              null != e &&
              "function" === typeof Object.getOwnPropertySymbols
            ) {
              var i = 0;
              for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                t.indexOf(r[i]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                  (n[r[i]] = e[r[i]]);
            }
            return n;
          },
        s =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.gql = t.request = t.rawRequest = t.GraphQLClient = void 0);
      var u = s(n("XWHH")),
        c = n("dQau"),
        f = n("E7DV"),
        l = n("E7DV");
      Object.defineProperty(t, "ClientError", {
        enumerable: !0,
        get: function () {
          return l.ClientError;
        },
      });
      var p = (function () {
        function e(e, t) {
          (this.url = e), (this.options = t || {});
        }
        return (
          (e.prototype.rawRequest = function (e, t) {
            return i(this, void 0, void 0, function () {
              var n, i, s, c, l, p, d, y, v;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      (n = this.options),
                      (i = n.headers),
                      (s = a(n, ["headers"])),
                      (c = JSON.stringify({
                        query: e,
                        variables: t || void 0,
                      })),
                      [
                        4,
                        u.default(
                          this.url,
                          r(
                            {
                              method: "POST",
                              headers: r(
                                { "Content-Type": "application/json" },
                                i
                              ),
                              body: c,
                            },
                            s
                          )
                        ),
                      ]
                    );
                  case 1:
                    return [4, h((l = o.sent()))];
                  case 2:
                    if (((p = o.sent()), l.ok && !p.errors && p.data))
                      return (
                        (d = l.headers),
                        (y = l.status),
                        [2, r(r({}, p), { headers: d, status: y })]
                      );
                    throw (
                      ((v = "string" === typeof p ? { error: p } : p),
                      new f.ClientError(
                        r(r({}, v), { status: l.status, headers: l.headers }),
                        { query: e, variables: t }
                      ))
                    );
                }
              });
            });
          }),
          (e.prototype.request = function (e, t) {
            return i(this, void 0, void 0, function () {
              var n, i, s, l, p, d, y, v;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      (n = this.options),
                      (i = n.headers),
                      (s = a(n, ["headers"])),
                      (l = (function (e) {
                        return "string" === typeof e ? e : c.print(e);
                      })(e)),
                      (p = JSON.stringify({
                        query: l,
                        variables: t || void 0,
                      })),
                      [
                        4,
                        u.default(
                          this.url,
                          r(
                            {
                              method: "POST",
                              headers: r(
                                { "Content-Type": "application/json" },
                                i
                              ),
                              body: p,
                            },
                            s
                          )
                        ),
                      ]
                    );
                  case 1:
                    return [4, h((d = o.sent()))];
                  case 2:
                    if (((y = o.sent()), d.ok && !y.errors && y.data))
                      return [2, y.data];
                    throw (
                      ((v = "string" === typeof y ? { error: y } : y),
                      new f.ClientError(r(r({}, v), { status: d.status }), {
                        query: l,
                        variables: t,
                      }))
                    );
                }
              });
            });
          }),
          (e.prototype.setHeaders = function (e) {
            return (this.options.headers = e), this;
          }),
          (e.prototype.setHeader = function (e, t) {
            var n,
              r = this.options.headers;
            return (
              r ? (r[e] = t) : (this.options.headers = (((n = {})[e] = t), n)),
              this
            );
          }),
          e
        );
      })();
      function d(e, t, n) {
        return i(this, void 0, void 0, function () {
          return o(this, function (r) {
            return [2, new p(e).request(t, n)];
          });
        });
      }
      function h(e) {
        var t = e.headers.get("Content-Type");
        return t && t.startsWith("application/json") ? e.json() : e.text();
      }
      (t.GraphQLClient = p),
        (t.rawRequest = function (e, t, n) {
          return i(this, void 0, void 0, function () {
            return o(this, function (r) {
              return [2, new p(e).rawRequest(t, n)];
            });
          });
        }),
        (t.request = d),
        (t.default = d),
        (t.gql = function (e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
          return e.reduce(function (e, n, r) {
            return "" + e + n + (r in t ? t[r] : "");
          }, "");
        });
    },
    E7DV: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function r() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ClientError = void 0);
      var i = (function (e) {
        function t(n, r) {
          var i = this,
            o =
              t.extractMessage(n) +
              ": " +
              JSON.stringify({ response: n, request: r });
          return (
            (i = e.call(this, o) || this),
            Object.setPrototypeOf(i, t.prototype),
            (i.response = n),
            (i.request = r),
            "function" === typeof Error.captureStackTrace &&
              Error.captureStackTrace(i, t),
            i
          );
        }
        return (
          r(t, e),
          (t.extractMessage = function (e) {
            try {
              return e.errors[0].message;
            } catch (t) {
              return "GraphQL Error (Code: " + e.status + ")";
            }
          }),
          t
        );
      })(Error);
      t.ClientError = i;
    },
    FlfC: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return y;
      }),
        n.d(t, "a", function () {
          return v;
        }),
        n.d(t, "c", function () {
          return m;
        }),
        n.d(t, "d", function () {
          return g;
        });
      var r = n("o0o1"),
        i = n.n(r),
        o = n("rePB"),
        a = n("5rFJ"),
        s = n("NOLZ"),
        u = n("2XjZ"),
        c = function (e) {
          return Object(u.a)({
            path: "/recit/module/syndicated_publisher/".concat(e),
          });
        },
        f = function (e) {
          return Object(u.a)({
            path: "/recit/module/syndicated_article/".concat(e),
          });
        },
        l = (n("34em"), n("Gq/i"), i.a.mark(O)),
        p = i.a.mark(w);
      function d(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                Object(o.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var y = function (e) {
          return { type: s.G, itemId: e };
        },
        v = function (e) {
          return { type: s.D, itemId: e };
        },
        b = {
          publisherRecs: [],
          publisherRecId: null,
          publisherRecModel: null,
          pocketRecs: [],
          pocketRecId: null,
          pocketRecModel: null,
        },
        m = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : b,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case s.H:
              var n = t.response,
                r = n.recommendations,
                i = n.rec_id,
                o = n.model;
              return h(
                h({}, e),
                {},
                { publisherRecs: r, publisherRecId: i, publisherRecModel: o }
              );
            case s.E:
              var a = t.response,
                u = a.recommendations,
                c = a.rec_id,
                f = a.model;
              return h(
                h({}, e),
                {},
                { pocketRecs: u, pocketRecId: c, pocketRecModel: f }
              );
            default:
              return e;
          }
        },
        g = [Object(a.d)(s.G, O), Object(a.d)(s.D, w)];
      function O(e) {
        var t, n;
        return i.a.wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (t = e.itemId), (r.prev = 1), (r.next = 4), c(t);
                case 4:
                  return (
                    (n = r.sent),
                    (r.next = 7),
                    Object(a.b)({ type: s.H, response: n })
                  );
                case 7:
                  r.next = 13;
                  break;
                case 9:
                  return (
                    (r.prev = 9),
                    (r.t0 = r.catch(1)),
                    (r.next = 13),
                    Object(a.b)({ type: s.F, error: r.t0 })
                  );
                case 13:
                case "end":
                  return r.stop();
              }
          },
          l,
          null,
          [[1, 9]]
        );
      }
      function w(e) {
        var t, n;
        return i.a.wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (t = e.itemId), (r.prev = 1), (r.next = 4), f(t);
                case 4:
                  return (
                    (n = r.sent),
                    (r.next = 7),
                    Object(a.b)({ type: s.E, response: n })
                  );
                case 7:
                  r.next = 13;
                  break;
                case 9:
                  return (
                    (r.prev = 9),
                    (r.t0 = r.catch(1)),
                    (r.next = 13),
                    Object(a.b)({ type: s.C, error: r.t0 })
                  );
                case 13:
                case "end":
                  return r.stop();
              }
          },
          p,
          null,
          [[1, 9]]
        );
      }
    },
    IYBn: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "injectLibScript", {
          enumerable: !0,
          get: function () {
            return u.injectLibScript;
          },
        }),
        Object.defineProperty(t, "injectInlineScript", {
          enumerable: !0,
          get: function () {
            return u.injectInlineScript;
          },
        }),
        (t.legacyAnalytics = t.analytics = t.request = t.urlWithPocketRedirect = t.testUtils = void 0);
      var r = f(n("sUIV"));
      t.testUtils = r;
      var i = f(n("hYMJ"));
      t.urlWithPocketRedirect = i;
      var o = f(n("cvCm"));
      t.request = o;
      var a = f(n("jmJ3"));
      t.analytics = a;
      var s = f(n("JXy6"));
      t.legacyAnalytics = s;
      var u = n("jLdW");
      function c() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function f(e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" !== typeof e && "function" !== typeof e))
          return { default: e };
        var t = c();
        if (t && t.has(e)) return t.get(e);
        var n = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var o = r ? Object.getOwnPropertyDescriptor(e, i) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(n, i, o)
              : (n[i] = e[i]);
          }
        return (n.default = e), t && t.set(e, n), n;
      }
    },
    QpGI: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var r = n("bba9"),
        i = Object(r.storageFactory)(function () {
          return localStorage;
        });
      Object(r.storageFactory)(function () {
        return sessionStorage;
      });
    },
    XWHH: function (e, t) {
      var n = (function (e) {
        function t() {
          (this.fetch = !1), (this.DOMException = e.DOMException);
        }
        return (t.prototype = e), new t();
      })("undefined" !== typeof self ? self : this);
      !(function (e) {
        !(function (t) {
          var n = {
            searchParams: "URLSearchParams" in e,
            iterable: "Symbol" in e && "iterator" in Symbol,
            blob:
              "FileReader" in e &&
              "Blob" in e &&
              (function () {
                try {
                  return new Blob(), !0;
                } catch (e) {
                  return !1;
                }
              })(),
            formData: "FormData" in e,
            arrayBuffer: "ArrayBuffer" in e,
          };
          if (n.arrayBuffer)
            var r = [
                "[object Int8Array]",
                "[object Uint8Array]",
                "[object Uint8ClampedArray]",
                "[object Int16Array]",
                "[object Uint16Array]",
                "[object Int32Array]",
                "[object Uint32Array]",
                "[object Float32Array]",
                "[object Float64Array]",
              ],
              i =
                ArrayBuffer.isView ||
                function (e) {
                  return e && r.indexOf(Object.prototype.toString.call(e)) > -1;
                };
          function o(e) {
            if (
              ("string" !== typeof e && (e = String(e)),
              /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))
            )
              throw new TypeError("Invalid character in header field name");
            return e.toLowerCase();
          }
          function a(e) {
            return "string" !== typeof e && (e = String(e)), e;
          }
          function s(e) {
            var t = {
              next: function () {
                var t = e.shift();
                return { done: void 0 === t, value: t };
              },
            };
            return (
              n.iterable &&
                (t[Symbol.iterator] = function () {
                  return t;
                }),
              t
            );
          }
          function u(e) {
            (this.map = {}),
              e instanceof u
                ? e.forEach(function (e, t) {
                    this.append(t, e);
                  }, this)
                : Array.isArray(e)
                ? e.forEach(function (e) {
                    this.append(e[0], e[1]);
                  }, this)
                : e &&
                  Object.getOwnPropertyNames(e).forEach(function (t) {
                    this.append(t, e[t]);
                  }, this);
          }
          function c(e) {
            if (e.bodyUsed)
              return Promise.reject(new TypeError("Already read"));
            e.bodyUsed = !0;
          }
          function f(e) {
            return new Promise(function (t, n) {
              (e.onload = function () {
                t(e.result);
              }),
                (e.onerror = function () {
                  n(e.error);
                });
            });
          }
          function l(e) {
            var t = new FileReader(),
              n = f(t);
            return t.readAsArrayBuffer(e), n;
          }
          function p(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer;
          }
          function d() {
            return (
              (this.bodyUsed = !1),
              (this._initBody = function (e) {
                var t;
                (this._bodyInit = e),
                  e
                    ? "string" === typeof e
                      ? (this._bodyText = e)
                      : n.blob && Blob.prototype.isPrototypeOf(e)
                      ? (this._bodyBlob = e)
                      : n.formData && FormData.prototype.isPrototypeOf(e)
                      ? (this._bodyFormData = e)
                      : n.searchParams &&
                        URLSearchParams.prototype.isPrototypeOf(e)
                      ? (this._bodyText = e.toString())
                      : n.arrayBuffer &&
                        n.blob &&
                        (t = e) &&
                        DataView.prototype.isPrototypeOf(t)
                      ? ((this._bodyArrayBuffer = p(e.buffer)),
                        (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                      : n.arrayBuffer &&
                        (ArrayBuffer.prototype.isPrototypeOf(e) || i(e))
                      ? (this._bodyArrayBuffer = p(e))
                      : (this._bodyText = e = Object.prototype.toString.call(e))
                    : (this._bodyText = ""),
                  this.headers.get("content-type") ||
                    ("string" === typeof e
                      ? this.headers.set(
                          "content-type",
                          "text/plain;charset=UTF-8"
                        )
                      : this._bodyBlob && this._bodyBlob.type
                      ? this.headers.set("content-type", this._bodyBlob.type)
                      : n.searchParams &&
                        URLSearchParams.prototype.isPrototypeOf(e) &&
                        this.headers.set(
                          "content-type",
                          "application/x-www-form-urlencoded;charset=UTF-8"
                        ));
              }),
              n.blob &&
                ((this.blob = function () {
                  var e = c(this);
                  if (e) return e;
                  if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                  if (this._bodyArrayBuffer)
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                  if (this._bodyFormData)
                    throw new Error("could not read FormData body as blob");
                  return Promise.resolve(new Blob([this._bodyText]));
                }),
                (this.arrayBuffer = function () {
                  return this._bodyArrayBuffer
                    ? c(this) || Promise.resolve(this._bodyArrayBuffer)
                    : this.blob().then(l);
                })),
              (this.text = function () {
                var e = c(this);
                if (e) return e;
                if (this._bodyBlob)
                  return (function (e) {
                    var t = new FileReader(),
                      n = f(t);
                    return t.readAsText(e), n;
                  })(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(
                    (function (e) {
                      for (
                        var t = new Uint8Array(e),
                          n = new Array(t.length),
                          r = 0;
                        r < t.length;
                        r++
                      )
                        n[r] = String.fromCharCode(t[r]);
                      return n.join("");
                    })(this._bodyArrayBuffer)
                  );
                if (this._bodyFormData)
                  throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText);
              }),
              n.formData &&
                (this.formData = function () {
                  return this.text().then(v);
                }),
              (this.json = function () {
                return this.text().then(JSON.parse);
              }),
              this
            );
          }
          (u.prototype.append = function (e, t) {
            (e = o(e)), (t = a(t));
            var n = this.map[e];
            this.map[e] = n ? n + ", " + t : t;
          }),
            (u.prototype.delete = function (e) {
              delete this.map[o(e)];
            }),
            (u.prototype.get = function (e) {
              return (e = o(e)), this.has(e) ? this.map[e] : null;
            }),
            (u.prototype.has = function (e) {
              return this.map.hasOwnProperty(o(e));
            }),
            (u.prototype.set = function (e, t) {
              this.map[o(e)] = a(t);
            }),
            (u.prototype.forEach = function (e, t) {
              for (var n in this.map)
                this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
            }),
            (u.prototype.keys = function () {
              var e = [];
              return (
                this.forEach(function (t, n) {
                  e.push(n);
                }),
                s(e)
              );
            }),
            (u.prototype.values = function () {
              var e = [];
              return (
                this.forEach(function (t) {
                  e.push(t);
                }),
                s(e)
              );
            }),
            (u.prototype.entries = function () {
              var e = [];
              return (
                this.forEach(function (t, n) {
                  e.push([n, t]);
                }),
                s(e)
              );
            }),
            n.iterable && (u.prototype[Symbol.iterator] = u.prototype.entries);
          var h = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
          function y(e, t) {
            var n = (t = t || {}).body;
            if (e instanceof y) {
              if (e.bodyUsed) throw new TypeError("Already read");
              (this.url = e.url),
                (this.credentials = e.credentials),
                t.headers || (this.headers = new u(e.headers)),
                (this.method = e.method),
                (this.mode = e.mode),
                (this.signal = e.signal),
                n ||
                  null == e._bodyInit ||
                  ((n = e._bodyInit), (e.bodyUsed = !0));
            } else this.url = String(e);
            if (
              ((this.credentials =
                t.credentials || this.credentials || "same-origin"),
              (!t.headers && this.headers) || (this.headers = new u(t.headers)),
              (this.method = (function (e) {
                var t = e.toUpperCase();
                return h.indexOf(t) > -1 ? t : e;
              })(t.method || this.method || "GET")),
              (this.mode = t.mode || this.mode || null),
              (this.signal = t.signal || this.signal),
              (this.referrer = null),
              ("GET" === this.method || "HEAD" === this.method) && n)
            )
              throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(n);
          }
          function v(e) {
            var t = new FormData();
            return (
              e
                .trim()
                .split("&")
                .forEach(function (e) {
                  if (e) {
                    var n = e.split("="),
                      r = n.shift().replace(/\+/g, " "),
                      i = n.join("=").replace(/\+/g, " ");
                    t.append(decodeURIComponent(r), decodeURIComponent(i));
                  }
                }),
              t
            );
          }
          function b(e) {
            var t = new u();
            return (
              e
                .replace(/\r?\n[\t ]+/g, " ")
                .split(/\r?\n/)
                .forEach(function (e) {
                  var n = e.split(":"),
                    r = n.shift().trim();
                  if (r) {
                    var i = n.join(":").trim();
                    t.append(r, i);
                  }
                }),
              t
            );
          }
          function m(e, t) {
            t || (t = {}),
              (this.type = "default"),
              (this.status = void 0 === t.status ? 200 : t.status),
              (this.ok = this.status >= 200 && this.status < 300),
              (this.statusText = "statusText" in t ? t.statusText : "OK"),
              (this.headers = new u(t.headers)),
              (this.url = t.url || ""),
              this._initBody(e);
          }
          (y.prototype.clone = function () {
            return new y(this, { body: this._bodyInit });
          }),
            d.call(y.prototype),
            d.call(m.prototype),
            (m.prototype.clone = function () {
              return new m(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new u(this.headers),
                url: this.url,
              });
            }),
            (m.error = function () {
              var e = new m(null, { status: 0, statusText: "" });
              return (e.type = "error"), e;
            });
          var g = [301, 302, 303, 307, 308];
          (m.redirect = function (e, t) {
            if (-1 === g.indexOf(t))
              throw new RangeError("Invalid status code");
            return new m(null, { status: t, headers: { location: e } });
          }),
            (t.DOMException = e.DOMException);
          try {
            new t.DOMException();
          } catch (w) {
            (t.DOMException = function (e, t) {
              (this.message = e), (this.name = t);
              var n = Error(e);
              this.stack = n.stack;
            }),
              (t.DOMException.prototype = Object.create(Error.prototype)),
              (t.DOMException.prototype.constructor = t.DOMException);
          }
          function O(e, r) {
            return new Promise(function (i, o) {
              var a = new y(e, r);
              if (a.signal && a.signal.aborted)
                return o(new t.DOMException("Aborted", "AbortError"));
              var s = new XMLHttpRequest();
              function u() {
                s.abort();
              }
              (s.onload = function () {
                var e = {
                  status: s.status,
                  statusText: s.statusText,
                  headers: b(s.getAllResponseHeaders() || ""),
                };
                e.url =
                  "responseURL" in s
                    ? s.responseURL
                    : e.headers.get("X-Request-URL");
                var t = "response" in s ? s.response : s.responseText;
                i(new m(t, e));
              }),
                (s.onerror = function () {
                  o(new TypeError("Network request failed"));
                }),
                (s.ontimeout = function () {
                  o(new TypeError("Network request failed"));
                }),
                (s.onabort = function () {
                  o(new t.DOMException("Aborted", "AbortError"));
                }),
                s.open(a.method, a.url, !0),
                "include" === a.credentials
                  ? (s.withCredentials = !0)
                  : "omit" === a.credentials && (s.withCredentials = !1),
                "responseType" in s && n.blob && (s.responseType = "blob"),
                a.headers.forEach(function (e, t) {
                  s.setRequestHeader(t, e);
                }),
                a.signal &&
                  (a.signal.addEventListener("abort", u),
                  (s.onreadystatechange = function () {
                    4 === s.readyState &&
                      a.signal.removeEventListener("abort", u);
                  })),
                s.send("undefined" === typeof a._bodyInit ? null : a._bodyInit);
            });
          }
          (O.polyfill = !0),
            e.fetch ||
              ((e.fetch = O),
              (e.Headers = u),
              (e.Request = y),
              (e.Response = m)),
            (t.Headers = u),
            (t.Request = y),
            (t.Response = m),
            (t.fetch = O);
        })({});
      })(n),
        delete n.fetch.polyfill,
        ((t = n.fetch).default = n.fetch),
        (t.fetch = n.fetch),
        (t.Headers = n.Headers),
        (t.Request = n.Request),
        (t.Response = n.Response),
        (e.exports = t);
    },
    bba9: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.storageFactory = void 0),
        (t.storageFactory = function (e) {
          var t = {};
          function n() {
            try {
              var t = "__some_random_key_you_are_not_going_to_use__";
              return e().setItem(t, t), e().removeItem(t), !0;
            } catch (n) {
              return !1;
            }
          }
          return {
            getItem: function (r) {
              return n() ? e().getItem(r) : t.hasOwnProperty(r) ? t[r] : null;
            },
            setItem: function (r, i) {
              n() ? e().setItem(r, i) : (t[r] = String(i));
            },
            removeItem: function (r) {
              n() ? e().removeItem(r) : delete t[r];
            },
            clear: function () {
              n() ? e().clear() : (t = {});
            },
            key: function (r) {
              return n() ? e().key(r) : Object.keys(t)[r] || null;
            },
            get length() {
              return n() ? e().length : Object.keys(t).length;
            },
          };
        });
    },
    dQau: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "print", function () {
          return d;
        });
      var r =
        "function" === typeof Symbol && "function" === typeof Symbol.for
          ? Symbol.for("nodejs.util.inspect.custom")
          : void 0;
      function i(e) {
        return (i =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      var o = 10,
        a = 2;
      function s(e, t) {
        switch (i(e)) {
          case "string":
            return JSON.stringify(e);
          case "function":
            return e.name ? "[function ".concat(e.name, "]") : "[function]";
          case "object":
            return null === e
              ? "null"
              : (function (e, t) {
                  if (-1 !== t.indexOf(e)) return "[Circular]";
                  var n = [].concat(t, [e]),
                    i = (function (e) {
                      var t = e[String(r)];
                      if ("function" === typeof t) return t;
                      if ("function" === typeof e.inspect) return e.inspect;
                    })(e);
                  if (void 0 !== i) {
                    var u = i.call(e);
                    if (u !== e) return "string" === typeof u ? u : s(u, n);
                  } else if (Array.isArray(e))
                    return (function (e, t) {
                      if (0 === e.length) return "[]";
                      if (t.length > a) return "[Array]";
                      for (
                        var n = Math.min(o, e.length),
                          r = e.length - n,
                          i = [],
                          u = 0;
                        u < n;
                        ++u
                      )
                        i.push(s(e[u], t));
                      1 === r
                        ? i.push("... 1 more item")
                        : r > 1 && i.push("... ".concat(r, " more items"));
                      return "[" + i.join(", ") + "]";
                    })(e, n);
                  return (function (e, t) {
                    var n = Object.keys(e);
                    if (0 === n.length) return "{}";
                    if (t.length > a)
                      return (
                        "[" +
                        (function (e) {
                          var t = Object.prototype.toString
                            .call(e)
                            .replace(/^\[object /, "")
                            .replace(/]$/, "");
                          if (
                            "Object" === t &&
                            "function" === typeof e.constructor
                          ) {
                            var n = e.constructor.name;
                            if ("string" === typeof n && "" !== n) return n;
                          }
                          return t;
                        })(e) +
                        "]"
                      );
                    return (
                      "{ " +
                      n
                        .map(function (n) {
                          return n + ": " + s(e[n], t);
                        })
                        .join(", ") +
                      " }"
                    );
                  })(e, n);
                })(e, t);
          default:
            return String(e);
        }
      }
      function u(e) {
        var t = e.prototype.toJSON;
        "function" === typeof t ||
          (function (e, t) {
            if (!Boolean(e))
              throw new Error(
                null != t ? t : "Unexpected invariant triggered."
              );
          })(0),
          (e.prototype.inspect = t),
          r && (e.prototype[r] = t);
      }
      function c(e) {
        return null != e && "string" === typeof e.kind;
      }
      u(
        (function () {
          function e(e, t, n) {
            (this.start = e.start),
              (this.end = t.end),
              (this.startToken = e),
              (this.endToken = t),
              (this.source = n);
          }
          return (
            (e.prototype.toJSON = function () {
              return { start: this.start, end: this.end };
            }),
            e
          );
        })()
      ),
        u(
          (function () {
            function e(e, t, n, r, i, o, a) {
              (this.kind = e),
                (this.start = t),
                (this.end = n),
                (this.line = r),
                (this.column = i),
                (this.value = a),
                (this.prev = o),
                (this.next = null);
            }
            return (
              (e.prototype.toJSON = function () {
                return {
                  kind: this.kind,
                  value: this.value,
                  line: this.line,
                  column: this.column,
                };
              }),
              e
            );
          })()
        );
      var f = {
          Name: [],
          Document: ["definitions"],
          OperationDefinition: [
            "name",
            "variableDefinitions",
            "directives",
            "selectionSet",
          ],
          VariableDefinition: [
            "variable",
            "type",
            "defaultValue",
            "directives",
          ],
          Variable: ["name"],
          SelectionSet: ["selections"],
          Field: ["alias", "name", "arguments", "directives", "selectionSet"],
          Argument: ["name", "value"],
          FragmentSpread: ["name", "directives"],
          InlineFragment: ["typeCondition", "directives", "selectionSet"],
          FragmentDefinition: [
            "name",
            "variableDefinitions",
            "typeCondition",
            "directives",
            "selectionSet",
          ],
          IntValue: [],
          FloatValue: [],
          StringValue: [],
          BooleanValue: [],
          NullValue: [],
          EnumValue: [],
          ListValue: ["values"],
          ObjectValue: ["fields"],
          ObjectField: ["name", "value"],
          Directive: ["name", "arguments"],
          NamedType: ["name"],
          ListType: ["type"],
          NonNullType: ["type"],
          SchemaDefinition: ["description", "directives", "operationTypes"],
          OperationTypeDefinition: ["type"],
          ScalarTypeDefinition: ["description", "name", "directives"],
          ObjectTypeDefinition: [
            "description",
            "name",
            "interfaces",
            "directives",
            "fields",
          ],
          FieldDefinition: [
            "description",
            "name",
            "arguments",
            "type",
            "directives",
          ],
          InputValueDefinition: [
            "description",
            "name",
            "type",
            "defaultValue",
            "directives",
          ],
          InterfaceTypeDefinition: [
            "description",
            "name",
            "interfaces",
            "directives",
            "fields",
          ],
          UnionTypeDefinition: ["description", "name", "directives", "types"],
          EnumTypeDefinition: ["description", "name", "directives", "values"],
          EnumValueDefinition: ["description", "name", "directives"],
          InputObjectTypeDefinition: [
            "description",
            "name",
            "directives",
            "fields",
          ],
          DirectiveDefinition: [
            "description",
            "name",
            "arguments",
            "locations",
          ],
          SchemaExtension: ["directives", "operationTypes"],
          ScalarTypeExtension: ["name", "directives"],
          ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
          InterfaceTypeExtension: [
            "name",
            "interfaces",
            "directives",
            "fields",
          ],
          UnionTypeExtension: ["name", "directives", "types"],
          EnumTypeExtension: ["name", "directives", "values"],
          InputObjectTypeExtension: ["name", "directives", "fields"],
        },
        l = Object.freeze({});
      function p(e, t, n) {
        var r = e[t];
        if (r) {
          if (!n && "function" === typeof r) return r;
          var i = n ? r.leave : r.enter;
          if ("function" === typeof i) return i;
        } else {
          var o = n ? e.leave : e.enter;
          if (o) {
            if ("function" === typeof o) return o;
            var a = o[t];
            if ("function" === typeof a) return a;
          }
        }
      }
      function d(e) {
        return (function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : f,
            r = void 0,
            i = Array.isArray(e),
            o = [e],
            a = -1,
            u = [],
            d = void 0,
            h = void 0,
            y = void 0,
            v = [],
            b = [],
            m = e;
          do {
            var g = ++a === o.length,
              O = g && 0 !== u.length;
            if (g) {
              if (
                ((h = 0 === b.length ? void 0 : v[v.length - 1]),
                (d = y),
                (y = b.pop()),
                O)
              ) {
                if (i) d = d.slice();
                else {
                  for (
                    var w = {}, j = 0, x = Object.keys(d);
                    j < x.length;
                    j++
                  ) {
                    var E = x[j];
                    w[E] = d[E];
                  }
                  d = w;
                }
                for (var _ = 0, S = 0; S < u.length; S++) {
                  var D = u[S][0],
                    T = u[S][1];
                  i && (D -= _),
                    i && null === T ? (d.splice(D, 1), _++) : (d[D] = T);
                }
              }
              (a = r.index),
                (o = r.keys),
                (u = r.edits),
                (i = r.inArray),
                (r = r.prev);
            } else {
              if (
                ((h = y ? (i ? a : o[a]) : void 0),
                null === (d = y ? y[h] : m) || void 0 === d)
              )
                continue;
              y && v.push(h);
            }
            var P,
              A = void 0;
            if (!Array.isArray(d)) {
              if (!c(d))
                throw new Error("Invalid AST Node: ".concat(s(d, []), "."));
              var k = p(t, d.kind, g);
              if (k) {
                if ((A = k.call(t, d, h, y, v, b)) === l) break;
                if (!1 === A) {
                  if (!g) {
                    v.pop();
                    continue;
                  }
                } else if (void 0 !== A && (u.push([h, A]), !g)) {
                  if (!c(A)) {
                    v.pop();
                    continue;
                  }
                  d = A;
                }
              }
            }
            if ((void 0 === A && O && u.push([h, d]), g)) v.pop();
            else
              (r = { inArray: i, index: a, keys: o, edits: u, prev: r }),
                (o = (i = Array.isArray(d))
                  ? d
                  : null !== (P = n[d.kind]) && void 0 !== P
                  ? P
                  : []),
                (a = -1),
                (u = []),
                y && b.push(y),
                (y = d);
          } while (void 0 !== r);
          return 0 !== u.length && (m = u[u.length - 1][1]), m;
        })(e, { leave: h });
      }
      var h = {
        Name: function (e) {
          return e.value;
        },
        Variable: function (e) {
          return "$" + e.name;
        },
        Document: function (e) {
          return v(e.definitions, "\n\n") + "\n";
        },
        OperationDefinition: function (e) {
          var t = e.operation,
            n = e.name,
            r = m("(", v(e.variableDefinitions, ", "), ")"),
            i = v(e.directives, " "),
            o = e.selectionSet;
          return n || i || r || "query" !== t
            ? v([t, v([n, r]), i, o], " ")
            : o;
        },
        VariableDefinition: function (e) {
          var t = e.variable,
            n = e.type,
            r = e.defaultValue,
            i = e.directives;
          return t + ": " + n + m(" = ", r) + m(" ", v(i, " "));
        },
        SelectionSet: function (e) {
          return b(e.selections);
        },
        Field: function (e) {
          var t = e.alias,
            n = e.name,
            r = e.arguments,
            i = e.directives,
            o = e.selectionSet;
          return v(
            [m("", t, ": ") + n + m("(", v(r, ", "), ")"), v(i, " "), o],
            " "
          );
        },
        Argument: function (e) {
          return e.name + ": " + e.value;
        },
        FragmentSpread: function (e) {
          return "..." + e.name + m(" ", v(e.directives, " "));
        },
        InlineFragment: function (e) {
          var t = e.typeCondition,
            n = e.directives,
            r = e.selectionSet;
          return v(["...", m("on ", t), v(n, " "), r], " ");
        },
        FragmentDefinition: function (e) {
          var t = e.name,
            n = e.typeCondition,
            r = e.variableDefinitions,
            i = e.directives,
            o = e.selectionSet;
          return (
            "fragment ".concat(t).concat(m("(", v(r, ", "), ")"), " ") +
            "on ".concat(n, " ").concat(m("", v(i, " "), " ")) +
            o
          );
        },
        IntValue: function (e) {
          return e.value;
        },
        FloatValue: function (e) {
          return e.value;
        },
        StringValue: function (e, t) {
          var n = e.value;
          return e.block
            ? (function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "",
                  n =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  r = -1 === e.indexOf("\n"),
                  i = " " === e[0] || "\t" === e[0],
                  o = '"' === e[e.length - 1],
                  a = "\\" === e[e.length - 1],
                  s = !r || o || a || n,
                  u = "";
                return (
                  !s || (r && i) || (u += "\n" + t),
                  (u += t ? e.replace(/\n/g, "\n" + t) : e),
                  s && (u += "\n"),
                  '"""' + u.replace(/"""/g, '\\"""') + '"""'
                );
              })(n, "description" === t ? "" : "  ")
            : JSON.stringify(n);
        },
        BooleanValue: function (e) {
          return e.value ? "true" : "false";
        },
        NullValue: function () {
          return "null";
        },
        EnumValue: function (e) {
          return e.value;
        },
        ListValue: function (e) {
          return "[" + v(e.values, ", ") + "]";
        },
        ObjectValue: function (e) {
          return "{" + v(e.fields, ", ") + "}";
        },
        ObjectField: function (e) {
          return e.name + ": " + e.value;
        },
        Directive: function (e) {
          return "@" + e.name + m("(", v(e.arguments, ", "), ")");
        },
        NamedType: function (e) {
          return e.name;
        },
        ListType: function (e) {
          return "[" + e.type + "]";
        },
        NonNullType: function (e) {
          return e.type + "!";
        },
        SchemaDefinition: y(function (e) {
          var t = e.directives,
            n = e.operationTypes;
          return v(["schema", v(t, " "), b(n)], " ");
        }),
        OperationTypeDefinition: function (e) {
          return e.operation + ": " + e.type;
        },
        ScalarTypeDefinition: y(function (e) {
          return v(["scalar", e.name, v(e.directives, " ")], " ");
        }),
        ObjectTypeDefinition: y(function (e) {
          var t = e.name,
            n = e.interfaces,
            r = e.directives,
            i = e.fields;
          return v(
            ["type", t, m("implements ", v(n, " & ")), v(r, " "), b(i)],
            " "
          );
        }),
        FieldDefinition: y(function (e) {
          var t = e.name,
            n = e.arguments,
            r = e.type,
            i = e.directives;
          return (
            t +
            (w(n) ? m("(\n", g(v(n, "\n")), "\n)") : m("(", v(n, ", "), ")")) +
            ": " +
            r +
            m(" ", v(i, " "))
          );
        }),
        InputValueDefinition: y(function (e) {
          var t = e.name,
            n = e.type,
            r = e.defaultValue,
            i = e.directives;
          return v([t + ": " + n, m("= ", r), v(i, " ")], " ");
        }),
        InterfaceTypeDefinition: y(function (e) {
          var t = e.name,
            n = e.interfaces,
            r = e.directives,
            i = e.fields;
          return v(
            ["interface", t, m("implements ", v(n, " & ")), v(r, " "), b(i)],
            " "
          );
        }),
        UnionTypeDefinition: y(function (e) {
          var t = e.name,
            n = e.directives,
            r = e.types;
          return v(
            [
              "union",
              t,
              v(n, " "),
              r && 0 !== r.length ? "= " + v(r, " | ") : "",
            ],
            " "
          );
        }),
        EnumTypeDefinition: y(function (e) {
          var t = e.name,
            n = e.directives,
            r = e.values;
          return v(["enum", t, v(n, " "), b(r)], " ");
        }),
        EnumValueDefinition: y(function (e) {
          return v([e.name, v(e.directives, " ")], " ");
        }),
        InputObjectTypeDefinition: y(function (e) {
          var t = e.name,
            n = e.directives,
            r = e.fields;
          return v(["input", t, v(n, " "), b(r)], " ");
        }),
        DirectiveDefinition: y(function (e) {
          var t = e.name,
            n = e.arguments,
            r = e.repeatable,
            i = e.locations;
          return (
            "directive @" +
            t +
            (w(n) ? m("(\n", g(v(n, "\n")), "\n)") : m("(", v(n, ", "), ")")) +
            (r ? " repeatable" : "") +
            " on " +
            v(i, " | ")
          );
        }),
        SchemaExtension: function (e) {
          var t = e.directives,
            n = e.operationTypes;
          return v(["extend schema", v(t, " "), b(n)], " ");
        },
        ScalarTypeExtension: function (e) {
          return v(["extend scalar", e.name, v(e.directives, " ")], " ");
        },
        ObjectTypeExtension: function (e) {
          var t = e.name,
            n = e.interfaces,
            r = e.directives,
            i = e.fields;
          return v(
            ["extend type", t, m("implements ", v(n, " & ")), v(r, " "), b(i)],
            " "
          );
        },
        InterfaceTypeExtension: function (e) {
          var t = e.name,
            n = e.interfaces,
            r = e.directives,
            i = e.fields;
          return v(
            [
              "extend interface",
              t,
              m("implements ", v(n, " & ")),
              v(r, " "),
              b(i),
            ],
            " "
          );
        },
        UnionTypeExtension: function (e) {
          var t = e.name,
            n = e.directives,
            r = e.types;
          return v(
            [
              "extend union",
              t,
              v(n, " "),
              r && 0 !== r.length ? "= " + v(r, " | ") : "",
            ],
            " "
          );
        },
        EnumTypeExtension: function (e) {
          var t = e.name,
            n = e.directives,
            r = e.values;
          return v(["extend enum", t, v(n, " "), b(r)], " ");
        },
        InputObjectTypeExtension: function (e) {
          var t = e.name,
            n = e.directives,
            r = e.fields;
          return v(["extend input", t, v(n, " "), b(r)], " ");
        },
      };
      function y(e) {
        return function (t) {
          return v([t.description, e(t)], "\n");
        };
      }
      function v(e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return null !==
          (t =
            null === e || void 0 === e
              ? void 0
              : e
                  .filter(function (e) {
                    return e;
                  })
                  .join(n)) && void 0 !== t
          ? t
          : "";
      }
      function b(e) {
        return e && 0 !== e.length ? "{\n" + g(v(e, "\n")) + "\n}" : "";
      }
      function m(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return t ? e + t + n : "";
      }
      function g(e) {
        return e && "  " + e.replace(/\n/g, "\n  ");
      }
      function O(e) {
        return -1 !== e.indexOf("\n");
      }
      function w(e) {
        return e && e.some(O);
      }
    },
    hYMJ: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.urlWithPocketRedirect = function (e) {
          return `https://getpocket.com/redirect?url=${encodeURIComponent(e)}`;
        });
    },
  },
]);
//# sourceMappingURL=5bb79bece52ddac55370f01898d0c96bf4ec5a11.c826b46ca1af9dc2de24.js.map
