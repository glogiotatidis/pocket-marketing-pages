(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [11],
  {
    SFd4: function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return u;
      }),
        r.d(t, "a", function () {
          return a;
        });
      var n = r("jmJ3"),
        i = r("mjZG"),
        o = r("PtkQ"),
        c = r("QY1H");
      function u(e, t) {
        Object(n.loadSnowplow)("snowplow"),
          snowplow("newTracker", "sp", i.m, i.n),
          snowplow("enableActivityTracking", i.o, i.p),
          snowplow("enableLinkClickTracking"),
          snowplow("enableFormTracking");
        var r = [Object(c.h)(e, t), c.c];
        snowplow("addGlobalContexts", r);
      }
      var a = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          r = new URL(e);
        return t ? o.b : i.r.includes(r.hostname) ? o.b : o.a;
      };
    },
    fr1g: function (e, t, r) {
      "use strict";
      r.d(t, "e", function () {
        return w;
      }),
        r.d(t, "c", function () {
          return m;
        }),
        r.d(t, "d", function () {
          return y;
        }),
        r.d(t, "a", function () {
          return g;
        }),
        r.d(t, "b", function () {
          return h;
        });
      var n = r("o0o1"),
        i = r.n(n),
        o = r("rePB"),
        c = r("5rFJ"),
        u = r("NOLZ"),
        a = r("QY1H"),
        l = r("PtkQ"),
        d = r("1aGY"),
        v = i.a.mark(_),
        s = i.a.mark(x),
        b = i.a.mark(k),
        p = i.a.mark(P);
      function f(e, t) {
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
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(r), !0).forEach(function (t) {
                Object(o.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : f(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var j = { globalContexts: [] },
        w = function () {
          return { type: u.N };
        },
        m = function (e, t, r, n) {
          return {
            type: u.L,
            destination: e,
            trigger: t,
            position: r,
            item: n,
          };
        },
        y = function (e, t, r, n) {
          return {
            type: u.M,
            component: e,
            requirement: t,
            position: r,
            item: n,
          };
        },
        g = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : j,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case u.K:
              var r = t.globalContexts;
              return O(O({}, e), {}, { globalContexts: r });
            default:
              return e;
          }
        },
        h = [
          Object(c.d)(u.N, _),
          Object(c.c)(u.L, k),
          Object(c.c)(u.M, P),
          Object(c.d)(u.cb, x),
        ];
      function _() {
        return i.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(d.c)();
              case 2:
              case "end":
                return e.stop();
            }
        }, v);
      }
      function x(e) {
        var t, r, n, o;
        return i.a.wrap(function (c) {
          for (;;)
            switch ((c.prev = c.next)) {
              case 0:
                (t = e.variants), (c.t0 = i.a.keys(t));
              case 2:
                if ((c.t1 = c.t0()).done) {
                  c.next = 10;
                  break;
                }
                return (
                  (r = c.t1.value),
                  (n = Object(l.k)()),
                  (o = Object(a.e)(r, t[r])),
                  (c.next = 8),
                  Object(d.b)(n, [o])
                );
              case 8:
                c.next = 2;
                break;
              case 10:
              case "end":
                return c.stop();
            }
        }, s);
      }
      function k(e) {
        var t, r, n, o, c, u, v, s;
        return i.a.wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                return (
                  (t = e.destination),
                  (r = e.trigger),
                  (n = e.position),
                  (o = e.item),
                  (c = Object(l.h)(t, r)),
                  (u = Object(a.d)(
                    null === o || void 0 === o ? void 0 : o.save_url,
                    null === o || void 0 === o ? void 0 : o.resolved_id
                  )),
                  (v = Object(a.g)({
                    type: a.b,
                    hierarchy: 0,
                    identifier: "web-discover-card",
                    index: n,
                  })),
                  (s = [u, v]),
                  (i.next = 7),
                  Object(d.b)(c, s)
                );
              case 7:
              case "end":
                return i.stop();
            }
        }, b);
      }
      function P(e) {
        var t, r, n, o, c, u, v, s;
        return i.a.wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                return (
                  (t = e.component),
                  (r = e.requirement),
                  (n = e.position),
                  (o = e.item),
                  (c = Object(l.j)(t, r)),
                  (u = Object(a.d)(
                    null === o || void 0 === o ? void 0 : o.save_url,
                    null === o || void 0 === o ? void 0 : o.resolved_id
                  )),
                  (v = Object(a.g)({
                    type: a.b,
                    hierarchy: 0,
                    identifier: "web-discover-card",
                    index: n,
                  })),
                  (s = [u, v]),
                  (i.next = 7),
                  Object(d.b)(c, s)
                );
              case 7:
              case "end":
                return i.stop();
            }
        }, p);
      }
    },
    gZI1: function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return O;
      }),
        r.d(t, "c", function () {
          return w;
        }),
        r.d(t, "d", function () {
          return y;
        }),
        r.d(t, "a", function () {
          return _;
        });
      var n = r("o0o1"),
        i = r.n(n),
        o = r("rePB"),
        c = r("mjZG"),
        u = r("WHGu"),
        a = r("5rFJ"),
        l = r("34em"),
        d = r("Gq/i"),
        v = r("NOLZ"),
        s = i.a.mark(g),
        b = i.a.mark(h);
      function p(e, t) {
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
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(r), !0).forEach(function (t) {
                Object(o.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : p(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var O = function (e) {
          return { type: v.s, hydrated: e };
        },
        j = {},
        w = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : j,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case v.s:
              var r = t.hydrated;
              return f(f({}, e), r);
            case v.u:
              var n = t.id;
              return m(e, n, "saving");
            case v.v:
              var i = t.id;
              return m(e, i, "saved");
            case v.t:
              var o = t.id;
              return m(e, o, "unsaved");
            case v.y:
              var c = t.id;
              return m(e, c, "unsaved");
            case v.w:
              var u = t.id;
              return m(e, u, "saved");
            default:
              return e;
          }
        };
      function m(e, t, r) {
        var n = f(f({}, e[t]), {}, { save_status: r });
        return f(f({}, e), {}, Object(o.a)({}, t, n));
      }
      var y = [Object(a.c)(v.u, g), Object(a.c)(v.x, h)];
      function g(e) {
        var t, r, n, o;
        return i.a.wrap(
          function (i) {
            for (;;)
              switch ((i.prev = i.next)) {
                case 0:
                  return (
                    (i.prev = 0),
                    (t = e.url),
                    (r = e.id),
                    (n = e.analytics),
                    (i.next = 4),
                    Object(l.a)(t, n)
                  );
                case 4:
                  if (
                    1 ===
                    (null === (o = i.sent) || void 0 === o ? void 0 : o.status)
                  ) {
                    i.next = 7;
                    break;
                  }
                  throw new Error("Unable to save");
                case 7:
                  return (i.next = 9), Object(a.b)({ type: v.v, id: r });
                case 9:
                  i.next = 15;
                  break;
                case 11:
                  return (
                    (i.prev = 11),
                    (i.t0 = i.catch(0)),
                    (i.next = 15),
                    Object(a.b)({ type: v.t, error: i.t0 })
                  );
                case 15:
                case "end":
                  return i.stop();
              }
          },
          s,
          null,
          [[0, 11]]
        );
      }
      function h(e) {
        var t, r;
        return i.a.wrap(
          function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (n.prev = 0), (t = e.id), (n.next = 4), Object(d.a)(t);
                case 4:
                  if (
                    1 ===
                    (null === (r = n.sent) || void 0 === r ? void 0 : r.status)
                  ) {
                    n.next = 7;
                    break;
                  }
                  throw new Error("Unable to remove item");
                case 7:
                  return (n.next = 9), Object(a.b)({ type: v.y, id: t });
                case 9:
                  n.next = 15;
                  break;
                case 11:
                  return (
                    (n.prev = 11),
                    (n.t0 = n.catch(0)),
                    (n.next = 15),
                    Object(a.b)({ type: v.w, error: n.t0 })
                  );
                case 15:
                case "end":
                  return n.stop();
              }
          },
          b,
          null,
          [[0, 11]]
        );
      }
      function _(e) {
        return e.map(function (e) {
          var t;
          return {
            resolved_id:
              null === (t = e.item) || void 0 === t ? void 0 : t.resolved_id,
            title: x(e),
            thumbnail: k(e),
            publisher: P(e),
            excerpt: D(e),
            save_url: G(e),
            open_url: E(e),
            read_time: L(e),
            syndicated: N(e),
            save_status: "unsaved",
          };
        });
      }
      function x(e) {
        var t = e.item,
          r = e.curated_info;
        return (
          (null === r || void 0 === r ? void 0 : r.title) ||
          (null === t || void 0 === t ? void 0 : t.title) ||
          (null === t || void 0 === t ? void 0 : t.resolved_title) ||
          (null === t || void 0 === t ? void 0 : t.given_title) ||
          (null === t || void 0 === t ? void 0 : t.display_url) ||
          null
        );
      }
      function k(e) {
        var t,
          r,
          n = e.item,
          i = e.curated_info,
          o =
            (null === i || void 0 === i ? void 0 : i.image_src) ||
            (null === n || void 0 === n ? void 0 : n.top_image_url) ||
            (null === n || void 0 === n
              ? void 0
              : null === (t = n.images) || void 0 === t
              ? void 0
              : null === (r = t[Object.keys(n.images)[0]]) || void 0 === r
              ? void 0
              : r.src) ||
            null;
        return o ? Object(u.c)(o) : null;
      }
      function P(e) {
        var t,
          r,
          n,
          i = e.item,
          o = E({ item: i }),
          c = Object(u.b)(o);
        return (
          (null === i || void 0 === i
            ? void 0
            : null === (t = i.syndicated_article) || void 0 === t
            ? void 0
            : null === (r = t.publisher) || void 0 === r
            ? void 0
            : r.name) ||
          (null === i || void 0 === i
            ? void 0
            : null === (n = i.domain_metadata) || void 0 === n
            ? void 0
            : n.name) ||
          (null === i || void 0 === i ? void 0 : i.domain) ||
          c ||
          null
        );
      }
      function D(e) {
        var t = e.item,
          r = e.curated_info;
        return (
          (null === r || void 0 === r ? void 0 : r.excerpt) ||
          (null === t || void 0 === t ? void 0 : t.excerpt) ||
          null
        );
      }
      function E(e) {
        var t = e.item;
        return (
          e.redirect_url ||
          (null === t || void 0 === t ? void 0 : t.given_url) ||
          (null === t || void 0 === t ? void 0 : t.resolved_url) ||
          null
        );
      }
      function G(e) {
        var t = e.item;
        return (
          (null === t || void 0 === t ? void 0 : t.given_url) ||
          (null === t || void 0 === t ? void 0 : t.resolved_url) ||
          null
        );
      }
      function L(e) {
        var t,
          r = e.item;
        return (
          (null === r || void 0 === r ? void 0 : r.time_to_read) ||
          (!!(t = null === r || void 0 === r ? void 0 : r.word_count) &&
            Math.ceil(parseInt(t, 10) / c.k)) ||
          null
        );
      }
      function N(e) {
        var t = e.item;
        return !!t && "syndicated_article" in t;
      }
    },
  },
]);
//# sourceMappingURL=49eebf15f62038bb885094f3670753acc328db52.dba119b9ee00db27a19c.js.map
