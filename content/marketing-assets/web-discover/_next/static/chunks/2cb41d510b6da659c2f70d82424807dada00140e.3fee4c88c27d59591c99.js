(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [9],
  {
    "/a9y": function (t, e, n) {
      "use strict";
      var r = n("lwsE"),
        a = n("W8MJ"),
        i = n("7W2i"),
        o = n("a1gu"),
        c = n("Nsbk");
      function u(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = c(t);
          if (e) {
            var a = c(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return o(this, n);
        };
      }
      var s = n("TqRt");
      (e.__esModule = !0), (e.default = void 0);
      var l = s(n("q1tI")),
        f = s(n("8Kt/")),
        d = {
          400: "Bad Request",
          404: "This page could not be found",
          405: "Method Not Allowed",
          500: "Internal Server Error",
        };
      function p(t) {
        var e = t.res,
          n = t.err;
        return {
          statusCode: e && e.statusCode ? e.statusCode : n ? n.statusCode : 404,
        };
      }
      var b = (function (t) {
        i(n, t);
        var e = u(n);
        function n() {
          return r(this, n), e.apply(this, arguments);
        }
        return (
          a(n, [
            {
              key: "render",
              value: function () {
                var t = this.props.statusCode,
                  e =
                    this.props.title ||
                    d[t] ||
                    "An unexpected error has occurred";
                return l.default.createElement(
                  "div",
                  { style: h.error },
                  l.default.createElement(
                    f.default,
                    null,
                    l.default.createElement("title", null, t, ": ", e)
                  ),
                  l.default.createElement(
                    "div",
                    null,
                    l.default.createElement("style", {
                      dangerouslySetInnerHTML: { __html: "body { margin: 0 }" },
                    }),
                    t
                      ? l.default.createElement("h1", { style: h.h1 }, t)
                      : null,
                    l.default.createElement(
                      "div",
                      { style: h.desc },
                      l.default.createElement("h2", { style: h.h2 }, e, ".")
                    )
                  )
                );
              },
            },
          ]),
          n
        );
      })(l.default.Component);
      (e.default = b),
        (b.displayName = "ErrorPage"),
        (b.getInitialProps = p),
        (b.origGetInitialProps = p);
      var h = {
        error: {
          color: "#000",
          background: "#fff",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
          height: "100vh",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        },
        desc: {
          display: "inline-block",
          textAlign: "left",
          lineHeight: "49px",
          height: "49px",
          verticalAlign: "middle",
        },
        h1: {
          display: "inline-block",
          borderRight: "1px solid rgba(0, 0, 0,.3)",
          margin: 0,
          marginRight: "20px",
          padding: "10px 23px 10px 0",
          fontSize: "24px",
          fontWeight: 500,
          verticalAlign: "top",
        },
        h2: {
          fontSize: "14px",
          fontWeight: "normal",
          lineHeight: "inherit",
          margin: 0,
          padding: 0,
        },
      };
    },
    "1aGY": function (t, e, n) {
      "use strict";
      (function (t) {
        n.d(e, "b", function () {
          return r;
        }),
          n.d(e, "c", function () {
            return a;
          }),
          n.d(e, "a", function () {
            return i;
          });
        var r = function (e) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [];
            try {
              t.snowplow("trackSelfDescribingEvent", e, n);
            } catch (r) {
              console.warn("snowplow library is not available");
            }
          },
          a = function () {
            try {
              t.snowplow("trackPageView");
            } catch (e) {
              console.warn("snowplow library is not available");
            }
          },
          i = function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "1-0-0";
            return "iglu:"
              .concat("com.pocket", "/")
              .concat(t, "/jsonschema/")
              .concat(e);
          };
      }.call(this, n("yLpj")));
    },
    "34em": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return c;
      });
      var r = n("rePB"),
        a = n("2XjZ");
      function i(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function o(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? i(Object(n), !0).forEach(function (e) {
                Object(r.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var c = function (t, e) {
        return Object(a.b)({
          path: "/send",
          data: { actions: [o({ action: "add", url: t }, e)] },
        });
      };
    },
    BsWD: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return a;
      });
      var r = n("a3WO");
      function a(t, e) {
        if (t) {
          if ("string" === typeof t) return Object(r.a)(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? Object(r.a)(t, e)
              : void 0
          );
        }
      }
    },
    D7nt: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.SNOWPLOW_SCRIPT_URL = void 0);
      e.SNOWPLOW_SCRIPT_URL =
        "https://assets.getpocket.com/web-utilities/public/static/sp.js";
    },
    "Gq/i": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return a;
      });
      var r = n("2XjZ"),
        a = function (t) {
          return Object(r.b)({
            path: "/send",
            data: { actions: [{ action: "delete", item_id: t }] },
          });
        };
    },
    IxLO: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return d;
      }),
        n.d(e, "c", function () {
          return b;
        }),
        n.d(e, "d", function () {
          return h;
        }),
        n.d(e, "a", function () {
          return m;
        });
      var r = n("o0o1"),
        a = n.n(r),
        i = n("HaE+"),
        o = n("rePB"),
        c = n("WHGu"),
        u = n("NOLZ"),
        s = n("Jzha");
      function l(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function f(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(n), !0).forEach(function (e) {
                Object(o.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var d = function (t) {
          return { type: u.O, hydrated: t };
        },
        p = { activeTopic: "", topicsByName: {} },
        b = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : p,
            e = arguments.length > 1 ? arguments[1] : void 0;
          switch (e.type) {
            case u.O:
              var n = e.hydrated;
              return f(f({}, t), n);
            case u.P:
              var r = e.topic;
              return f(f({}, t), {}, { activeTopic: r });
            default:
              return t;
          }
        },
        h = [];
      function m() {
        return v.apply(this, arguments);
      }
      function v() {
        return (v = Object(i.a)(
          a.a.mark(function t() {
            var e, n, r;
            return a.a.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.prev = 0), (t.next = 3), Object(s.b)();
                    case 3:
                      return (
                        (e = t.sent),
                        (n = e.topics),
                        (r = Object(c.a)(n, "topic_slug")),
                        t.abrupt("return", r)
                      );
                    case 9:
                      (t.prev = 9),
                        (t.t0 = t.catch(0)),
                        console.log("topic-pages.topic-list.state", t.t0);
                    case 12:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[0, 9]]
            );
          })
        )).apply(this, arguments);
      }
    },
    Jzha: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return i;
        });
      var r = n("2XjZ");
      function a(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20;
        return Object(r.a)({
          path: "/discover/topics/",
          data: { topics: t, curated_count: e, algorithmic_count: n },
        });
      }
      function i() {
        return Object(r.a)({ path: "/discover/topicList/" });
      }
    },
    KQm4: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var r = n("a3WO");
      var a = n("BsWD");
      function i(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Object(r.a)(t);
          })(t) ||
          (function (t) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t))
              return Array.from(t);
          })(t) ||
          Object(a.a)(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    ODXe: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return a;
      });
      var r = n("BsWD");
      function a(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) {
              var n = [],
                r = !0,
                a = !1,
                i = void 0;
              try {
                for (
                  var o, c = t[Symbol.iterator]();
                  !(r = (o = c.next()).done) &&
                  (n.push(o.value), !e || n.length !== e);
                  r = !0
                );
              } catch (u) {
                (a = !0), (i = u);
              } finally {
                try {
                  r || null == c.return || c.return();
                } finally {
                  if (a) throw i;
                }
              }
              return n;
            }
          })(t, e) ||
          Object(r.a)(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    PtkQ: function (t, e, n) {
      "use strict";
      n.d(e, "i", function () {
        return c;
      }),
        n.d(e, "d", function () {
          return o;
        }),
        n.d(e, "e", function () {
          return i;
        }),
        n.d(e, "h", function () {
          return d;
        }),
        n.d(e, "c", function () {
          return s;
        }),
        n.d(e, "b", function () {
          return l;
        }),
        n.d(e, "a", function () {
          return f;
        }),
        n.d(e, "j", function () {
          return m;
        }),
        n.d(e, "f", function () {
          return b;
        }),
        n.d(e, "g", function () {
          return h;
        }),
        n.d(e, "k", function () {
          return y;
        });
      var r = n("1aGY"),
        a = Object(r.a)("engagement"),
        i = "save",
        o = "report",
        c = function (t) {
          return { schema: a, data: { type: t } };
        },
        u = Object(r.a)("content_open"),
        s = "click",
        l = "internal",
        f = "external",
        d = function (t, e) {
          return { schema: u, data: { destination: t, trigger: e } };
        },
        p = Object(r.a)("impression"),
        b = "card",
        h = "viewable",
        m = function (t, e) {
          return { schema: p, data: { component: t, requirement: e } };
        },
        v = Object(r.a)("variant_enroll"),
        y = function () {
          return { schema: v, data: {} };
        };
    },
    QY1H: function (t, e, n) {
      "use strict";
      n.d(e, "c", function () {
        return c;
      }),
        n.d(e, "d", function () {
          return s;
        }),
        n.d(e, "e", function () {
          return f;
        }),
        n.d(e, "f", function () {
          return b;
        }),
        n.d(e, "g", function () {
          return y;
        }),
        n.d(e, "a", function () {
          return m;
        }),
        n.d(e, "b", function () {
          return v;
        }),
        n.d(e, "h", function () {
          return O;
        });
      var r = n("mjZG"),
        a = n("1aGY"),
        i = Object(a.a)("api_user"),
        o = function (t) {
          return { schema: i, data: { api_id: t } };
        },
        c = o(r.b),
        u = Object(a.a)("content"),
        s = function (t, e) {
          return { schema: u, data: { item_id: parseInt(e, 10), url: t } };
        },
        l = Object(a.a)("feature_flag"),
        f = function (t, e) {
          return { schema: l, data: { name: t, variant: e } };
        },
        d = n("WHGu"),
        p = Object(a.a)("report"),
        b = function (t, e) {
          var n = Object(d.d)({ comment: e, reason: t });
          return { schema: p, data: n };
        },
        h = Object(a.a)("ui"),
        m = "button",
        v = "card",
        y = function (t) {
          var e = t.type,
            n = t.componentDetail,
            r = t.hierarchy,
            a = t.identifier,
            i = t.label,
            o = t.index,
            c = t.value;
          return {
            schema: h,
            data: Object(d.d)({
              type: e,
              component_detail: n,
              hierarchy: r,
              identifier: a,
              label: i,
              index: o,
              value: c,
            }),
          };
        },
        g = Object(a.a)("user"),
        O = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            e = arguments.length > 1 ? arguments[1] : void 0,
            n = t ? { hashed_user_id: t, hashed_guid: e } : { hashed_guid: e };
          return { schema: g, data: n };
        };
    },
    URMD: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n("o0o1"),
        a = n.n(r),
        i = n("HaE+"),
        o = n("q1tI"),
        c = n.n(o),
        u = n("eomm"),
        s = n.n(u),
        l = n("gtzJ"),
        f = n("uPCh"),
        d = c.a.createElement,
        p = function (t) {
          var e = t.statusCode,
            n = t.hasGetInitialPropsRun,
            r = t.err;
          return !n && r && l.a(r), d(f.a, { statusCode: e });
        };
      (p.getInitialProps = (function () {
        var t = Object(i.a)(
          a.a.mark(function t(e) {
            var n, r, i, o;
            return a.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (n = e.res),
                      (r = e.err),
                      (i = e.asPath),
                      (t.next = 3),
                      s.a.getInitialProps({ res: n, err: r })
                    );
                  case 3:
                    if (
                      (((o = t.sent).hasGetInitialPropsRun = !0),
                      (o.namespacesRequired = ["common"]),
                      !n)
                    ) {
                      t.next = 14;
                      break;
                    }
                    if (404 !== n.statusCode) {
                      t.next = 9;
                      break;
                    }
                    return t.abrupt("return", {
                      statusCode: 404,
                      namespacesRequired: ["common"],
                    });
                  case 9:
                    if (!r) {
                      t.next = 12;
                      break;
                    }
                    return l.a(r), t.abrupt("return", o);
                  case 12:
                    t.next = 17;
                    break;
                  case 14:
                    if (!r) {
                      t.next = 17;
                      break;
                    }
                    return l.a(r), t.abrupt("return", o);
                  case 17:
                    return (
                      l.a(
                        new s.a(
                          "_error.js getInitialProps missing data at path: ".concat(
                            i
                          )
                        )
                      ),
                      t.abrupt("return", o)
                    );
                  case 19:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
        return function (e) {
          return t.apply(this, arguments);
        };
      })()),
        (e.default = p);
    },
    Yxwx: function (t, e, n) {},
    a3WO: function (t, e, n) {
      "use strict";
      function r(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    eomm: function (t, e, n) {
      t.exports = n("/a9y");
    },
    jLdW: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.injectInlineScript = e.injectLibScript = void 0);
      const r = (t, e, n = null, r = !0) => {
        const a = document.createElement("script");
        return (
          t && (a.src = t),
          e && (a.text = e),
          n &&
            n.forEach((t) => {
              a.setAttribute(t.name, t.value);
            }),
          (a.async = r),
          document.body.appendChild(a),
          () => {
            document.body.removeChild(a);
          }
        );
      };
      e.injectLibScript = (t, e = null, n = !0) => {
        if (!t)
          throw new Error("useLibScript() missing required parameter: url");
        r(t, null, e, n);
      };
      e.injectInlineScript = (t = null, e = !0) => {
        if (!t)
          throw new Error(
            "useInlineScript() missing required parameter: scriptContent"
          );
        r(null, t, null, e);
      };
    },
    jmJ3: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.loadSnowplow = function (t) {
          (0, r.injectInlineScript)(
            `;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];\n    p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)\n    };p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;\n    n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script","${a.SNOWPLOW_SCRIPT_URL}","${t}"));`
          );
        });
      var r = n("jLdW"),
        a = n("D7nt");
    },
    uPCh: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return d;
      });
      var r = n("q1tI"),
        a = n.n(r),
        i = n("/MKj"),
        o = n("8Kt/"),
        c = n.n(o),
        u = (n("40A7"), n("UrOR")),
        s = n("Xdly"),
        l = a.a.createElement,
        f = "pihkvnv";
      function d(t) {
        var e = t.statusCode,
          n = Object(i.c)(function (t) {
            return !!t.user.auth;
          });
        return l(
          a.a.Fragment,
          null,
          l(
            c.a,
            null,
            l("title", null, "Error"),
            l("link", {
              rel: "icon",
              type: "image/x-icon",
              href: "/favicon.ico",
            }),
            l(
              "style",
              null,
              "\n          body, html { height: 100%; }\n          #__next { display: flex; flex-direction: column; height: 100%; }\n        "
            )
          ),
          l(s.a, { isLoggedIn: n }),
          l(u.u, { className: f }, l(u.i, { statusCode: parseInt(e, 10) })),
          l(u.l, null)
        );
      }
      (d.defaultProps = { statusCode: null }), n("Yxwx");
    },
  },
]);
//# sourceMappingURL=2cb41d510b6da659c2f70d82424807dada00140e.3fee4c88c27d59591c99.js.map
