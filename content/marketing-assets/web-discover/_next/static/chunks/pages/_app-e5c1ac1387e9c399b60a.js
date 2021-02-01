_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [21],
  {
    0: function (t, e, n) {
      n("GcxT"), (t.exports = n("nOHt"));
    },
    "6PXS": function (t, e, n) {
      "use strict";
      (function (t) {
        n.d(e, "b", function () {
          return c;
        }),
          n.d(e, "e", function () {
            return s;
          }),
          n.d(e, "d", function () {
            return p;
          }),
          n.d(e, "c", function () {
            return h;
          }),
          n.d(e, "a", function () {
            return v;
          });
        n("mrSG");
        var r = n("9AQC"),
          o = n("wCA9"),
          i = n("9/Zf"),
          a = n("+924");
        function c(t, e, n) {
          if (e in t) {
            var r = t[e],
              o = n(r);
            if ("function" === typeof o)
              try {
                (o.prototype = o.prototype || {}),
                  Object.defineProperties(o, {
                    __sentry_original__: { enumerable: !1, value: r },
                  });
              } catch (i) {}
            t[e] = o;
          }
        }
        function s(t) {
          return Object.keys(t)
            .map(function (e) {
              return encodeURIComponent(e) + "=" + encodeURIComponent(t[e]);
            })
            .join("&");
        }
        function u(t) {
          if (Object(r.d)(t)) {
            var e = t,
              n = { message: e.message, name: e.name, stack: e.stack };
            for (var o in e)
              Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
            return n;
          }
          if (Object(r.f)(t)) {
            var a = t,
              c = {};
            c.type = a.type;
            try {
              c.target = Object(r.c)(a.target)
                ? Object(i.h)(a.target)
                : Object.prototype.toString.call(a.target);
            } catch (s) {
              c.target = "<unknown>";
            }
            try {
              c.currentTarget = Object(r.c)(a.currentTarget)
                ? Object(i.h)(a.currentTarget)
                : Object.prototype.toString.call(a.currentTarget);
            } catch (s) {
              c.currentTarget = "<unknown>";
            }
            for (var o in ("undefined" !== typeof CustomEvent &&
              Object(r.g)(t, CustomEvent) &&
              (c.detail = a.detail),
            a))
              Object.prototype.hasOwnProperty.call(a, o) && (c[o] = a);
            return c;
          }
          return t;
        }
        function l(t) {
          return (function (t) {
            return ~-encodeURI(t).split(/%..|./).length;
          })(JSON.stringify(t));
        }
        function p(t, e, n) {
          void 0 === e && (e = 3), void 0 === n && (n = 102400);
          var r = h(t, e);
          return l(r) > n ? p(t, e - 1, n) : r;
        }
        function f(e, n) {
          return "domain" === n && e && "object" === typeof e && e._events
            ? "[Domain]"
            : "domainEmitter" === n
            ? "[DomainEmitter]"
            : "undefined" !== typeof t && e === t
            ? "[Global]"
            : "undefined" !== typeof window && e === window
            ? "[Window]"
            : "undefined" !== typeof document && e === document
            ? "[Document]"
            : Object(r.l)(e)
            ? "[SyntheticEvent]"
            : "number" === typeof e && e !== e
            ? "[NaN]"
            : void 0 === e
            ? "[undefined]"
            : "function" === typeof e
            ? "[Function: " + Object(i.e)(e) + "]"
            : e;
        }
        function d(t, e, n, i) {
          if (
            (void 0 === n && (n = 1 / 0),
            void 0 === i && (i = new o.a()),
            0 === n)
          )
            return (function (t) {
              var e = Object.prototype.toString.call(t);
              if ("string" === typeof t) return t;
              if ("[object Object]" === e) return "[Object]";
              if ("[object Array]" === e) return "[Array]";
              var n = f(t);
              return Object(r.i)(n) ? n : e;
            })(e);
          if (null !== e && void 0 !== e && "function" === typeof e.toJSON)
            return e.toJSON();
          var a = f(e, t);
          if (Object(r.i)(a)) return a;
          var c = u(e),
            s = Array.isArray(e) ? [] : {};
          if (i.memoize(e)) return "[Circular ~]";
          for (var l in c)
            Object.prototype.hasOwnProperty.call(c, l) &&
              (s[l] = d(l, c[l], n - 1, i));
          return i.unmemoize(e), s;
        }
        function h(t, e) {
          try {
            return JSON.parse(
              JSON.stringify(t, function (t, n) {
                return d(t, n, e);
              })
            );
          } catch (n) {
            return "**non-serializable**";
          }
        }
        function v(t, e) {
          void 0 === e && (e = 40);
          var n = Object.keys(u(t));
          if ((n.sort(), !n.length)) return "[object has no keys]";
          if (n[0].length >= e) return Object(a.d)(n[0], e);
          for (var r = n.length; r > 0; r--) {
            var o = n.slice(0, r).join(", ");
            if (!(o.length > e)) return r === n.length ? o : Object(a.d)(o, e);
          }
          return "";
        }
      }.call(this, n("yLpj")));
    },
    GcxT: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n("IlR1");
        },
      ]);
    },
    IlR1: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = {};
      n.r(r),
        n.d(r, "FunctionToString", function () {
          return he;
        }),
        n.d(r, "InboundFilters", function () {
          return je;
        });
      var o = n("o0o1"),
        i = n.n(o),
        a = n("rePB"),
        c = n("HaE+"),
        s = n("wx14"),
        u = (n("idLb"), n("q1tI")),
        l = n.n(u),
        p = (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(e, n);
          };
          return function (e, n) {
            function r() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })(),
        f = function () {
          return (f =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        },
        d = function (t, e, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(t) {
              try {
                s(r.next(t));
              } catch (e) {
                i(e);
              }
            }
            function c(t) {
              try {
                s(r.throw(t));
              } catch (e) {
                i(e);
              }
            }
            function s(t) {
              var e;
              t.done
                ? o(t.value)
                : ((e = t.value),
                  e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      })).then(a, c);
            }
            s((r = r.apply(t, e || [])).next());
          });
        },
        h = function (t, e) {
          var n,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: c(0), throw: c(1), return: c(2) }),
            "function" === typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function c(i) {
            return function (c) {
              return (function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                          (6 === i[0] || 2 === i[0])
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = e.call(t, a);
                  } catch (c) {
                    (i = [6, c]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, c]);
            };
          }
        },
        v = function (t, e) {
          var n = {};
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
              e.indexOf(r) < 0 &&
              (n[r] = t[r]);
          if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(t); o < r.length; o++)
              e.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, r[o]) &&
                (n[r[o]] = t[r[o]]);
          }
          return n;
        },
        b = {
          storeKey: "__NEXT_REDUX_STORE__",
          debug: !1,
          serializeState: function (t) {
            return t;
          },
          deserializeState: function (t) {
            return t;
          },
        },
        y = n("8YN3"),
        m = n("zLVn"),
        g = n("uP1p"),
        O = n("hqqJ"),
        _ = n("ANjH");
      function j() {
        var t = {};
        return (
          (t.promise = new Promise(function (e, n) {
            (t.resolve = e), (t.reject = n);
          })),
          t
        );
      }
      var w = j,
        E = (n("sesW"), []),
        k = 0;
      function x(t) {
        try {
          I(), t();
        } finally {
          T();
        }
      }
      function S(t) {
        E.push(t), k || (I(), D());
      }
      function P(t) {
        try {
          return I(), t();
        } finally {
          D();
        }
      }
      function I() {
        k++;
      }
      function T() {
        k--;
      }
      function D() {
        var t;
        for (T(); !k && void 0 !== (t = E.shift()); ) x(t);
      }
      var R = function (t) {
          return function (e) {
            return t.some(function (t) {
              return F(t)(e);
            });
          };
        },
        U = function (t) {
          return function (e) {
            return t(e);
          };
        },
        C = function (t) {
          return function (e) {
            return e.type === String(t);
          };
        },
        N = function (t) {
          return function (e) {
            return e.type === t;
          };
        },
        A = function () {
          return O.G;
        };
      function F(t) {
        var e =
          "*" === t
            ? A
            : Object(g.k)(t)
            ? C
            : Object(g.a)(t)
            ? R
            : Object(g.l)(t)
            ? C
            : Object(g.d)(t)
            ? U
            : Object(g.m)(t)
            ? N
            : null;
        if (null === e) throw new Error("invalid pattern: " + t);
        return e(t);
      }
      var M = { type: y.b },
        B = function (t) {
          return t && t.type === y.b;
        };
      function q(t) {
        void 0 === t && (t = Object(O.A)());
        var e = !1,
          n = [];
        return {
          take: function (r) {
            e && t.isEmpty()
              ? r(M)
              : t.isEmpty()
              ? (n.push(r),
                (r.cancel = function () {
                  Object(O.N)(n, r);
                }))
              : r(t.take());
          },
          put: function (r) {
            if (!e) {
              if (0 === n.length) return t.put(r);
              n.shift()(r);
            }
          },
          flush: function (n) {
            e && t.isEmpty() ? n(M) : n(t.flush());
          },
          close: function () {
            if (!e) {
              e = !0;
              var t = n;
              n = [];
              for (var r = 0, o = t.length; r < o; r++) {
                (0, t[r])(M);
              }
            }
          },
        };
      }
      function L() {
        var t = (function () {
            var t,
              e = !1,
              n = [],
              r = n,
              o = function () {
                r === n && (r = n.slice());
              },
              i = function () {
                e = !0;
                var t = (n = r);
                (r = []),
                  t.forEach(function (t) {
                    t(M);
                  });
              };
            return (
              ((t = {})[y.e] = !0),
              (t.put = function (t) {
                if (!e)
                  if (B(t)) i();
                  else
                    for (var o = (n = r), a = 0, c = o.length; a < c; a++) {
                      var s = o[a];
                      s[y.d](t) && (s.cancel(), s(t));
                    }
              }),
              (t.take = function (t, n) {
                void 0 === n && (n = A),
                  e
                    ? t(M)
                    : ((t[y.d] = n),
                      o(),
                      r.push(t),
                      (t.cancel = Object(O.K)(function () {
                        o(), Object(O.N)(r, t);
                      })));
              }),
              (t.close = i),
              t
            );
          })(),
          e = t.put;
        return (
          (t.put = function (t) {
            t[y.f]
              ? e(t)
              : S(function () {
                  e(t);
                });
          }),
          t
        );
      }
      var H = 0,
        W = 1,
        G = 2,
        X = 3;
      function z(t, e) {
        var n = t[y.a];
        Object(g.d)(n) && (e.cancel = n),
          t.then(e, function (t) {
            e(t, !0);
          });
      }
      var K,
        J = 0,
        $ = function () {
          return ++J;
        };
      function V(t) {
        t.isRunning() && t.cancel();
      }
      var Z =
        (((K = {})[O.r] = function (t, e, n) {
          var r = e.channel,
            o = void 0 === r ? t.channel : r,
            i = e.pattern,
            a = e.maybe,
            c = function (t) {
              t instanceof Error ? n(t, !0) : !B(t) || a ? n(t) : n(y.k);
            };
          try {
            o.take(c, Object(g.g)(i) ? F(i) : null);
          } catch (s) {
            return void n(s, !0);
          }
          n.cancel = c.cancel;
        }),
        (K[O.n] = function (t, e, n) {
          var r = e.channel,
            o = e.action,
            i = e.resolve;
          S(function () {
            var e;
            try {
              e = (r ? r.put : t.dispatch)(o);
            } catch (a) {
              return void n(a, !0);
            }
            i && Object(g.j)(e) ? z(e, n) : n(e);
          });
        }),
        (K[O.a] = function (t, e, n, r) {
          var o = r.digestEffect,
            i = J,
            a = Object.keys(e);
          if (0 !== a.length) {
            var c = Object(O.H)(e, n);
            a.forEach(function (t) {
              o(e[t], i, c[t], t);
            });
          } else n(Object(g.a)(e) ? [] : {});
        }),
        (K[O.p] = function (t, e, n, r) {
          var o = r.digestEffect,
            i = J,
            a = Object.keys(e),
            c = Object(g.a)(e) ? Object(O.I)(a.length) : {},
            s = {},
            u = !1;
          a.forEach(function (t) {
            var e = function (e, r) {
              u ||
                (r || Object(O.O)(e)
                  ? (n.cancel(), n(e, r))
                  : (n.cancel(), (u = !0), (c[t] = e), n(c)));
            };
            (e.cancel = O.P), (s[t] = e);
          }),
            (n.cancel = function () {
              u ||
                ((u = !0),
                a.forEach(function (t) {
                  return s[t].cancel();
                }));
            }),
            a.forEach(function (t) {
              u || o(e[t], i, s[t], t);
            });
        }),
        (K[O.c] = function (t, e, n, r) {
          var o = e.context,
            i = e.fn,
            a = e.args,
            c = r.task;
          try {
            var s = i.apply(o, a);
            if (Object(g.j)(s)) return void z(s, n);
            if (Object(g.e)(s))
              return void st(t, s, c.context, J, Object(O.F)(i), !1, n);
            n(s);
          } catch (u) {
            n(u, !0);
          }
        }),
        (K[O.w] = function (t, e, n) {
          var r = e.context,
            o = e.fn,
            i = e.args;
          try {
            var a = function (t, e) {
              Object(g.n)(t) ? n(e) : n(t, !0);
            };
            o.apply(r, i.concat(a)), a.cancel && (n.cancel = a.cancel);
          } catch (c) {
            n(c, !0);
          }
        }),
        (K[O.f] = function (t, e, n, r) {
          var o = e.context,
            i = e.fn,
            a = e.args,
            c = e.detached,
            s = r.task,
            u = (function (t) {
              var e = t.context,
                n = t.fn,
                r = t.args;
              try {
                var o = n.apply(e, r);
                if (Object(g.e)(o)) return o;
                var i = !1;
                return Object(O.M)(function (t) {
                  return i
                    ? { value: t, done: !0 }
                    : ((i = !0), { value: o, done: !Object(g.j)(o) });
                });
              } catch (a) {
                return Object(O.M)(function () {
                  throw a;
                });
              }
            })({ context: o, fn: i, args: a }),
            l = (function (t, e) {
              return t.isSagaIterator ? { name: t.meta.name } : Object(O.F)(e);
            })(u, i);
          P(function () {
            var e = st(t, u, s.context, J, l, c, void 0);
            c
              ? n(e)
              : e.isRunning()
              ? (s.queue.addTask(e), n(e))
              : e.isAborted()
              ? s.queue.abort(e.error())
              : n(e);
          });
        }),
        (K[O.h] = function (t, e, n, r) {
          var o = r.task,
            i = function (t, e) {
              if (t.isRunning()) {
                var n = { task: o, cb: e };
                (e.cancel = function () {
                  t.isRunning() && Object(O.N)(t.joiners, n);
                }),
                  t.joiners.push(n);
              } else t.isAborted() ? e(t.error(), !0) : e(t.result());
            };
          if (Object(g.a)(e)) {
            if (0 === e.length) return void n([]);
            var a = Object(O.H)(e, n);
            e.forEach(function (t, e) {
              i(t, a[e]);
            });
          } else i(e, n);
        }),
        (K[O.x] = function (t, e, n, r) {
          var o = r.task;
          e === y.h ? V(o) : Object(g.a)(e) ? e.forEach(V) : V(e), n();
        }),
        (K[O.q] = function (t, e, n) {
          var r = e.selector,
            o = e.args;
          try {
            n(r.apply(void 0, [t.getState()].concat(o)));
          } catch (i) {
            n(i, !0);
          }
        }),
        (K[O.z] = function (t, e, n) {
          var r = e.pattern,
            o = q(e.buffer),
            i = F(r),
            a = function e(n) {
              B(n) || t.channel.take(e, i), o.put(n);
            },
            c = o.close;
          (o.close = function () {
            a.cancel(), c();
          }),
            t.channel.take(a, i),
            n(o);
        }),
        (K[O.B] = function (t, e, n, r) {
          n(r.task.isCancelled());
        }),
        (K[O.C] = function (t, e, n) {
          e.flush(n);
        }),
        (K[O.g] = function (t, e, n, r) {
          n(r.task.context[e]);
        }),
        (K[O.D] = function (t, e, n, r) {
          var o = r.task;
          Object(O.L)(o.context, e), n();
        }),
        K);
      function Q(t, e) {
        return t + "?" + e;
      }
      function Y(t) {
        var e = t.name,
          n = t.location;
        return n ? e + "  " + Q(n.fileName, n.lineNumber) : e;
      }
      function tt(t) {
        var e = Object(O.Q)(function (t) {
          return t.cancelledTasks;
        }, t);
        return e.length
          ? ["Tasks cancelled due to error:"].concat(e).join("\n")
          : "";
      }
      var et = null,
        nt = [],
        rt = function (t) {
          (t.crashedEffect = et), nt.push(t);
        },
        ot = function () {
          (et = null), (nt.length = 0);
        },
        it = function (t) {
          et = t;
        },
        at = function () {
          var t = nt[0],
            e = nt.slice(1),
            n = t.crashedEffect
              ? (function (t) {
                  var e = Object(O.R)(t);
                  return e ? e.code + "  " + Q(e.fileName, e.lineNumber) : "";
                })(t.crashedEffect)
              : null;
          return [
            "The above error occurred in task " +
              Y(t.meta) +
              (n ? " \n when executing effect " + n : ""),
          ]
            .concat(
              e.map(function (t) {
                return "    created by " + Y(t.meta);
              }),
              [tt(nt)]
            )
            .join("\n");
        };
      function ct(t, e, n, r, o, i, a) {
        var c;
        void 0 === a && (a = O.P);
        var s,
          u,
          l = H,
          p = null,
          f = [],
          d = Object.create(n),
          h = (function (t, e, n) {
            var r,
              o = [],
              i = !1;
            function a(t) {
              e(), s(), n(t, !0);
            }
            function c(e) {
              o.push(e),
                (e.cont = function (c, s) {
                  i ||
                    (Object(O.N)(o, e),
                    (e.cont = O.P),
                    s
                      ? a(c)
                      : (e === t && (r = c), o.length || ((i = !0), n(r))));
                });
            }
            function s() {
              i ||
                ((i = !0),
                o.forEach(function (t) {
                  (t.cont = O.P), t.cancel();
                }),
                (o = []));
            }
            return (
              c(t),
              {
                addTask: c,
                cancelAll: s,
                abort: a,
                getTasks: function () {
                  return o;
                },
              }
            );
          })(
            e,
            function () {
              f.push.apply(
                f,
                h.getTasks().map(function (t) {
                  return t.meta.name;
                })
              );
            },
            v
          );
        function v(e, n) {
          if (n) {
            if (((l = G), rt({ meta: o, cancelledTasks: f }), b.isRoot)) {
              var r = at();
              ot(), t.onError(e, { sagaStack: r });
            }
            (u = e), p && p.reject(e);
          } else
            e === y.j ? (l = W) : l !== W && (l = X),
              (s = e),
              p && p.resolve(e);
          b.cont(e, n),
            b.joiners.forEach(function (t) {
              t.cb(e, n);
            }),
            (b.joiners = null);
        }
        var b =
          (((c = {})[y.i] = !0),
          (c.id = r),
          (c.meta = o),
          (c.isRoot = i),
          (c.context = d),
          (c.joiners = []),
          (c.queue = h),
          (c.cancel = function () {
            l === H && ((l = W), h.cancelAll(), v(y.j, !1));
          }),
          (c.cont = a),
          (c.end = v),
          (c.setContext = function (t) {
            Object(O.L)(d, t);
          }),
          (c.toPromise = function () {
            return p
              ? p.promise
              : ((p = w()),
                l === G ? p.reject(u) : l !== H && p.resolve(s),
                p.promise);
          }),
          (c.isRunning = function () {
            return l === H;
          }),
          (c.isCancelled = function () {
            return l === W || (l === H && e.status === W);
          }),
          (c.isAborted = function () {
            return l === G;
          }),
          (c.result = function () {
            return s;
          }),
          (c.error = function () {
            return u;
          }),
          c);
        return b;
      }
      function st(t, e, n, r, o, i, a) {
        var c = t.finalizeRunEffect(function (e, n, r) {
          if (Object(g.j)(e)) z(e, r);
          else if (Object(g.e)(e)) st(t, e, u.context, n, o, !1, r);
          else if (e && e[y.c]) {
            (0, Z[e.type])(t, e.payload, r, l);
          } else r(e);
        });
        p.cancel = O.P;
        var s = {
            meta: o,
            cancel: function () {
              s.status === H && ((s.status = W), p(y.j));
            },
            status: H,
          },
          u = ct(t, s, n, r, o, i, a),
          l = { task: u, digestEffect: f };
        return a && (a.cancel = u.cancel), p(), u;
        function p(t, n) {
          try {
            var o;
            n
              ? ((o = e.throw(t)), ot())
              : Object(O.S)(t)
              ? ((s.status = W),
                p.cancel(),
                (o = Object(g.d)(e.return)
                  ? e.return(y.j)
                  : { done: !0, value: y.j }))
              : (o = Object(O.T)(t)
                  ? Object(g.d)(e.return)
                    ? e.return()
                    : { done: !0 }
                  : e.next(t)),
              o.done
                ? (s.status !== W && (s.status = X), s.cont(o.value))
                : f(o.value, r, p);
          } catch (i) {
            if (s.status === W) throw i;
            (s.status = G), s.cont(i, !0);
          }
        }
        function f(e, n, r, o) {
          void 0 === o && (o = "");
          var i,
            a = $();
          function s(n, o) {
            i ||
              ((i = !0),
              (r.cancel = O.P),
              t.sagaMonitor &&
                (o
                  ? t.sagaMonitor.effectRejected(a, n)
                  : t.sagaMonitor.effectResolved(a, n)),
              o && it(e),
              r(n, o));
          }
          t.sagaMonitor &&
            t.sagaMonitor.effectTriggered({
              effectId: a,
              parentEffectId: n,
              label: o,
              effect: e,
            }),
            (s.cancel = O.P),
            (r.cancel = function () {
              i ||
                ((i = !0),
                s.cancel(),
                (s.cancel = O.P),
                t.sagaMonitor && t.sagaMonitor.effectCancelled(a));
            }),
            c(e, a, s);
        }
      }
      function ut(t, e) {
        var n = t.channel,
          r = void 0 === n ? L() : n,
          o = t.dispatch,
          i = t.getState,
          a = t.context,
          c = void 0 === a ? {} : a,
          s = t.sagaMonitor,
          u = t.effectMiddlewares,
          l = t.onError,
          p = void 0 === l ? O.b : l;
        for (
          var f = arguments.length, d = new Array(f > 2 ? f - 2 : 0), h = 2;
          h < f;
          h++
        )
          d[h - 2] = arguments[h];
        var v = e.apply(void 0, d);
        var b,
          y = $();
        if (
          (s &&
            ((s.rootSagaStarted = s.rootSagaStarted || O.P),
            (s.effectTriggered = s.effectTriggered || O.P),
            (s.effectResolved = s.effectResolved || O.P),
            (s.effectRejected = s.effectRejected || O.P),
            (s.effectCancelled = s.effectCancelled || O.P),
            (s.actionDispatched = s.actionDispatched || O.P),
            s.rootSagaStarted({ effectId: y, saga: e, args: d })),
          u)
        ) {
          var m = _.d.apply(void 0, u);
          b = function (t) {
            return function (e, n, r) {
              return m(function (e) {
                return t(e, n, r);
              })(e);
            };
          };
        } else b = O.e;
        var g = {
          channel: r,
          dispatch: Object(O.d)(o),
          getState: i,
          sagaMonitor: s,
          onError: p,
          finalizeRunEffect: b,
        };
        return P(function () {
          var t = st(g, v, c, y, Object(O.F)(e), !0, void 0);
          return s && s.effectResolved(y, t), t;
        });
      }
      var lt = function (t) {
        var e,
          n = void 0 === t ? {} : t,
          r = n.context,
          o = void 0 === r ? {} : r,
          i = n.channel,
          a = void 0 === i ? L() : i,
          c = n.sagaMonitor,
          u = Object(m.a)(n, ["context", "channel", "sagaMonitor"]);
        function l(t) {
          var n = t.getState,
            r = t.dispatch;
          return (
            (e = ut.bind(
              null,
              Object(s.a)({}, u, {
                context: o,
                channel: a,
                dispatch: r,
                getState: n,
                sagaMonitor: c,
              })
            )),
            function (t) {
              return function (e) {
                c && c.actionDispatched && c.actionDispatched(e);
                var n = t(e);
                return a.put(e), n;
              };
            }
          );
        }
        return (
          (l.run = function () {
            return e.apply(void 0, arguments);
          }),
          (l.setContext = function (t) {
            Object(O.L)(o, t);
          }),
          l
        );
      };
      function pt(t, e, n, r, o, i, a) {
        try {
          var c = t[i](a),
            s = c.value;
        } catch (u) {
          return void n(u);
        }
        c.done ? e(s) : Promise.resolve(s).then(r, o);
      }
      function ft(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function dt(t) {
        return (dt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function ht(t, e) {
        return (ht =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function vt(t, e) {
        return !e || ("object" !== typeof e && "function" !== typeof e)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      var bt = function (t) {
          var e,
            n,
            r,
            o = (function (e) {
              function n() {
                return (
                  (function (t, e) {
                    if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, n),
                  vt(this, dt(n).apply(this, arguments))
                );
              }
              var r, o, a;
              return (
                (function (t, e) {
                  if ("function" !== typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: { value: t, writable: !0, configurable: !0 },
                  })),
                    e && ht(t, e);
                })(n, e),
                (r = n),
                (o = [
                  {
                    key: "render",
                    value: function () {
                      return l.a.createElement(t, this.props);
                    },
                  },
                ]),
                (a = [
                  {
                    key: "getInitialProps",
                    value: (function () {
                      var e,
                        n =
                          ((e = i.a.mark(function e(n) {
                            var r, o, a, c;
                            return i.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        ((r = n.ctx),
                                        (o = r.isServer),
                                        (a = r.store),
                                        (c = {}),
                                        !t.getInitialProps)
                                      ) {
                                        e.next = 6;
                                        break;
                                      }
                                      return (e.next = 5), t.getInitialProps(n);
                                    case 5:
                                      c = e.sent;
                                    case 6:
                                      if (!o) {
                                        e.next = 10;
                                        break;
                                      }
                                      return (
                                        a.dispatch(M),
                                        (e.next = 10),
                                        a.sagaTask.toPromise()
                                      );
                                    case 10:
                                      return e.abrupt("return", c);
                                    case 11:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this
                            );
                          })),
                          function () {
                            var t = this,
                              n = arguments;
                            return new Promise(function (r, o) {
                              var i = e.apply(t, n);
                              function a(t) {
                                pt(i, r, o, a, c, "next", t);
                              }
                              function c(t) {
                                pt(i, r, o, a, c, "throw", t);
                              }
                              a(void 0);
                            });
                          });
                      return function (t) {
                        return n.apply(this, arguments);
                      };
                    })(),
                  },
                ]),
                o && ft(r.prototype, o),
                a && ft(r, a),
                n
              );
            })(u.Component);
          return (
            (e = o),
            (n = "displayName"),
            (r = "withReduxSaga(".concat(
              t.displayName || t.name || "BaseComponent",
              ")"
            )),
            n in e
              ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[n] = r),
            o
          );
        },
        yt = n("/MKj"),
        mt = n("KQm4"),
        gt = n("5rFJ"),
        Ot = n("NOLZ");
      function _t(t, e) {
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
      function jt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? _t(Object(n), !0).forEach(function (e) {
                Object(a.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : _t(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var wt = { served: 0, rendered: 0, devMode: !1 },
        Et = function () {
          return { type: Ot.a };
        },
        kt = [],
        xt = n("fr1g"),
        St = n("514G"),
        Pt = n("6FLb"),
        It = n("mjZG"),
        Tt =
          "\n  query GetUnleashAssignments($sessionId: String!, $userId: String, $appName: String) {\n    getUnleashAssignments(context: {\n      sessionId: $sessionId\n      userId: $userId,\n      appName: $appName\n    }){\n      assignments {\n        name\n        assigned\n        variant\n        payload\n      }\n    }\n  }\n";
      function Dt(t, e, n) {
        return Rt.apply(this, arguments);
      }
      function Rt() {
        return (Rt = Object(c.a)(
          i.a.mark(function t(e, n, r) {
            var o, a, c;
            return i.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (o = { sessionId: e, userId: n, appName: r }),
                      (a = It.q),
                      (c = new Pt.GraphQLClient(a)),
                      (t.next = 5),
                      c
                        .request(Tt, o)
                        .then(function (t) {
                          return t.getUnleashAssignments;
                        })
                        .catch(function (t) {
                          return console.error(t);
                        })
                    );
                  case 5:
                    return t.abrupt("return", t.sent);
                  case 6:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var Ut = n("WHGu");
      function Ct(t, e) {
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
      function Nt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Ct(Object(n), !0).forEach(function (e) {
                Object(a.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Ct(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var At = {},
        Ft = function (t) {
          return { type: Ot.r, flag: t };
        },
        Mt = [];
      function Bt() {
        return qt.apply(this, arguments);
      }
      function qt() {
        return (qt = Object(c.a)(
          i.a.mark(function t() {
            var e,
              n,
              r,
              o,
              a,
              c = arguments;
            return i.a.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (e = c.length > 0 && void 0 !== c[0] ? c[0] : {}),
                        (n = c.length > 1 ? c[1] : void 0),
                        (t.prev = 2),
                        (r = e.user_id),
                        (t.next = 6),
                        Dt(n, r, "web-discover")
                      );
                    case 6:
                      return (o = t.sent), (a = Lt(o)), t.abrupt("return", a);
                    case 11:
                      (t.prev = 11), (t.t0 = t.catch(2)), console.log(t.t0);
                    case 14:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[2, 11]]
            );
          })
        )).apply(this, arguments);
      }
      function Lt(t) {
        return Ht.apply(this, arguments);
      }
      function Ht() {
        return (Ht = Object(c.a)(
          i.a.mark(function t(e) {
            var n, r;
            return i.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (e.assignments) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt("return", {});
                  case 2:
                    return (
                      (n = /(temp|perm)\.web\.client\..+/i),
                      (r = e.assignments.map(function (t) {
                        return !!n.test(t.name) && t;
                      })),
                      t.abrupt("return", Object(Ut.a)(r, "name"))
                    );
                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var Wt = n("sO2H"),
        Gt = n("IxLO"),
        Xt = n("aOfi"),
        zt = n("Q3KZ"),
        Kt = n("/Vjk"),
        Jt = n("gZI1"),
        $t = n("FlfC"),
        Vt = n("QpGI"),
        Zt = i.a.mark(re);
      function Qt(t, e) {
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
      function Yt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Qt(Object(n), !0).forEach(function (e) {
                Object(a.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Qt(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var te = function (t, e) {
          return { type: Ot.db, flag: t, variant: e };
        },
        ee = { _allVariants: {} },
        ne = [Object(gt.c)(Ot.bb, re)];
      function re(t) {
        var e, n;
        return i.a.wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return (
                  (e = t.list),
                  (n = Object.keys(e).reduce(function (t, n) {
                    var r = Vt.a.getItem(n);
                    if (e[n].includes(r))
                      return Yt(Yt({}, t), {}, Object(a.a)({}, n, r));
                    var o = e[n][Math.floor(Math.random() * e[n].length)];
                    return (
                      Vt.a.setItem(n, o),
                      Yt(Yt({}, t), {}, Object(a.a)({}, n, o))
                    );
                  }, {})),
                  (r.next = 4),
                  Object(gt.b)({ type: Ot.cb, variants: n, list: e })
                );
              case 4:
              case "end":
                return r.stop();
            }
        }, Zt);
      }
      var oe = i.a.mark(le);
      function ie(t, e) {
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
      function ae(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ie(Object(n), !0).forEach(function (e) {
                Object(a.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : ie(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var ce = {
          explore: Wt.a,
          topic: Xt.e,
          pocketHits: zt.a,
          syndicatedArticle: Kt.d,
        },
        se = {
          app: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : wt,
              e = arguments.length > 1 ? arguments[1] : void 0;
            switch (e.type) {
              case Ot.c:
                var n = e.served;
                return jt(jt({}, t), {}, { served: n });
              case Ot.b:
                var r = e.rendered;
                return jt(jt({}, t), {}, { rendered: r });
              case Ot.a:
                var o = t.devMode;
                return jt(jt({}, t), {}, { devMode: !o });
              default:
                return t;
            }
          },
          features: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : At,
              e = arguments.length > 1 ? arguments[1] : void 0;
            switch (e.type) {
              case Ot.q:
                var n = e.hydrate;
                return Nt(Nt({}, t), n);
              case Ot.r:
                var r,
                  o = e.flag,
                  i = null === (r = t[o]) || void 0 === r ? void 0 : r.assigned;
                return Nt(Nt({}, t), {}, Object(a.a)({}, o, { assigned: !i }));
              default:
                return t;
            }
          },
          topicList: Gt.c,
          user: St.f,
          items: Jt.c,
          recit: $t.c,
          variants: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : ee,
              e = arguments.length > 1 ? arguments[1] : void 0;
            switch (e.type) {
              case Ot.cb:
                var n = e.variants,
                  r = e.list,
                  o = Yt(Yt({}, t._allVariants), r);
                return Yt(Yt(Yt({}, t), n), {}, { _allVariants: o });
              case Ot.db:
                var i = e.flag,
                  c = e.variant;
                return (
                  Vt.a.setItem(i, c), Yt(Yt({}, t), {}, Object(a.a)({}, i, c))
                );
              default:
                return t;
            }
          },
          snowplow: xt.a,
        },
        ue = Object(_.c)(ae(ae({}, ce), se));
      function le() {
        return i.a.wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (t.next = 2),
                  Object(gt.a)(
                    [].concat(
                      Object(mt.a)(kt),
                      Object(mt.a)(Mt),
                      Object(mt.a)(St.g),
                      Object(mt.a)(Jt.d),
                      Object(mt.a)(Wt.b),
                      Object(mt.a)(Gt.d),
                      Object(mt.a)(Xt.f),
                      Object(mt.a)(zt.b),
                      Object(mt.a)(Kt.e),
                      Object(mt.a)($t.d),
                      Object(mt.a)(ne),
                      Object(mt.a)(xt.b)
                    )
                  )
                );
              case 2:
              case "end":
                return t.stop();
            }
        }, oe);
      }
      var pe,
        fe = function (t, e) {
          var n = e.isServer,
            r = e.req,
            o = void 0 === r ? null : r,
            i = lt(),
            a = _.d,
            c = Object(_.e)(ue, t, a(Object(_.a)(i)));
          return (!o && n) || (c.sagaTask = i.run(le)), c;
        },
        de = n("UrOR"),
        he = (function () {
          function t() {
            this.name = t.id;
          }
          return (
            (t.prototype.setupOnce = function () {
              (pe = Function.prototype.toString),
                (Function.prototype.toString = function () {
                  for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                  var n = this.__sentry_original__ || this;
                  return pe.apply(n, t);
                });
            }),
            (t.id = "FunctionToString"),
            t
          );
        })(),
        ve = n("mrSG"),
        be = n("KjyA"),
        ye = n("lW6c"),
        me = n("8LbN"),
        ge = n("9/Zf"),
        Oe = n("+924"),
        _e = [
          /^Script error\.?$/,
          /^Javascript error: Script error\.? on line 0$/,
        ],
        je = (function () {
          function t(e) {
            void 0 === e && (e = {}), (this._options = e), (this.name = t.id);
          }
          return (
            (t.prototype.setupOnce = function () {
              Object(be.b)(function (e) {
                var n = Object(ye.a)();
                if (!n) return e;
                var r = n.getIntegration(t);
                if (r) {
                  var o = n.getClient(),
                    i = o ? o.getOptions() : {},
                    a = r._mergeOptions(i);
                  if (r._shouldDropEvent(e, a)) return null;
                }
                return e;
              });
            }),
            (t.prototype._shouldDropEvent = function (t, e) {
              return this._isSentryError(t, e)
                ? (me.a.warn(
                    "Event dropped due to being internal Sentry Error.\nEvent: " +
                      Object(ge.d)(t)
                  ),
                  !0)
                : this._isIgnoredError(t, e)
                ? (me.a.warn(
                    "Event dropped due to being matched by `ignoreErrors` option.\nEvent: " +
                      Object(ge.d)(t)
                  ),
                  !0)
                : this._isDeniedUrl(t, e)
                ? (me.a.warn(
                    "Event dropped due to being matched by `denyUrls` option.\nEvent: " +
                      Object(ge.d)(t) +
                      ".\nUrl: " +
                      this._getEventFilterUrl(t)
                  ),
                  !0)
                : !this._isAllowedUrl(t, e) &&
                  (me.a.warn(
                    "Event dropped due to not being matched by `allowUrls` option.\nEvent: " +
                      Object(ge.d)(t) +
                      ".\nUrl: " +
                      this._getEventFilterUrl(t)
                  ),
                  !0);
            }),
            (t.prototype._isSentryError = function (t, e) {
              if (!e.ignoreInternal) return !1;
              try {
                return (
                  (t &&
                    t.exception &&
                    t.exception.values &&
                    t.exception.values[0] &&
                    "SentryError" === t.exception.values[0].type) ||
                  !1
                );
              } catch (n) {
                return !1;
              }
            }),
            (t.prototype._isIgnoredError = function (t, e) {
              return (
                !(!e.ignoreErrors || !e.ignoreErrors.length) &&
                this._getPossibleEventMessages(t).some(function (t) {
                  return e.ignoreErrors.some(function (e) {
                    return Object(Oe.a)(t, e);
                  });
                })
              );
            }),
            (t.prototype._isDeniedUrl = function (t, e) {
              if (!e.denyUrls || !e.denyUrls.length) return !1;
              var n = this._getEventFilterUrl(t);
              return (
                !!n &&
                e.denyUrls.some(function (t) {
                  return Object(Oe.a)(n, t);
                })
              );
            }),
            (t.prototype._isAllowedUrl = function (t, e) {
              if (!e.allowUrls || !e.allowUrls.length) return !0;
              var n = this._getEventFilterUrl(t);
              return (
                !n ||
                e.allowUrls.some(function (t) {
                  return Object(Oe.a)(n, t);
                })
              );
            }),
            (t.prototype._mergeOptions = function (t) {
              return (
                void 0 === t && (t = {}),
                {
                  allowUrls: ve.d(
                    this._options.whitelistUrls || [],
                    this._options.allowUrls || [],
                    t.whitelistUrls || [],
                    t.allowUrls || []
                  ),
                  denyUrls: ve.d(
                    this._options.blacklistUrls || [],
                    this._options.denyUrls || [],
                    t.blacklistUrls || [],
                    t.denyUrls || []
                  ),
                  ignoreErrors: ve.d(
                    this._options.ignoreErrors || [],
                    t.ignoreErrors || [],
                    _e
                  ),
                  ignoreInternal:
                    "undefined" === typeof this._options.ignoreInternal ||
                    this._options.ignoreInternal,
                }
              );
            }),
            (t.prototype._getPossibleEventMessages = function (t) {
              if (t.message) return [t.message];
              if (t.exception)
                try {
                  var e = (t.exception.values && t.exception.values[0]) || {},
                    n = e.type,
                    r = void 0 === n ? "" : n,
                    o = e.value,
                    i = void 0 === o ? "" : o;
                  return ["" + i, r + ": " + i];
                } catch (a) {
                  return (
                    me.a.error(
                      "Cannot extract message for event " + Object(ge.d)(t)
                    ),
                    []
                  );
                }
              return [];
            }),
            (t.prototype._getEventFilterUrl = function (t) {
              try {
                if (t.stacktrace) {
                  var e = t.stacktrace.frames;
                  return (e && e[e.length - 1].filename) || null;
                }
                if (t.exception) {
                  var n =
                    t.exception.values &&
                    t.exception.values[0].stacktrace &&
                    t.exception.values[0].stacktrace.frames;
                  return (n && n[n.length - 1].filename) || null;
                }
                return null;
              } catch (r) {
                return (
                  me.a.error("Cannot extract url for event " + Object(ge.d)(t)),
                  null
                );
              }
            }),
            (t.id = "InboundFilters"),
            t
          );
        })();
      var we = n("HR75"),
        Ee =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array
            ? function (t, e) {
                return (t.__proto__ = e), t;
              }
            : function (t, e) {
                for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
                return t;
              });
      var ke = (function (t) {
          function e(e) {
            var n = this.constructor,
              r = t.call(this, e) || this;
            return (
              (r.message = e),
              (r.name = n.prototype.constructor.name),
              Ee(r, n.prototype),
              r
            );
          }
          return ve.b(e, t), e;
        })(Error),
        xe = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w\.-]+)(?::(\d+))?\/(.+)/,
        Se = (function () {
          function t(t) {
            "string" === typeof t
              ? this._fromString(t)
              : this._fromComponents(t),
              this._validate();
          }
          return (
            (t.prototype.toString = function (t) {
              void 0 === t && (t = !1);
              var e = this,
                n = e.host,
                r = e.path,
                o = e.pass,
                i = e.port,
                a = e.projectId;
              return (
                e.protocol +
                "://" +
                e.user +
                (t && o ? ":" + o : "") +
                "@" +
                n +
                (i ? ":" + i : "") +
                "/" +
                (r ? r + "/" : r) +
                a
              );
            }),
            (t.prototype._fromString = function (t) {
              var e = xe.exec(t);
              if (!e) throw new ke("Invalid Dsn");
              var n = ve.c(e.slice(1), 6),
                r = n[0],
                o = n[1],
                i = n[2],
                a = void 0 === i ? "" : i,
                c = n[3],
                s = n[4],
                u = void 0 === s ? "" : s,
                l = "",
                p = n[5],
                f = p.split("/");
              if (
                (f.length > 1 &&
                  ((l = f.slice(0, -1).join("/")), (p = f.pop())),
                p)
              ) {
                var d = p.match(/^\d+/);
                d && (p = d[0]);
              }
              this._fromComponents({
                host: c,
                pass: a,
                path: l,
                projectId: p,
                port: u,
                protocol: r,
                user: o,
              });
            }),
            (t.prototype._fromComponents = function (t) {
              (this.protocol = t.protocol),
                (this.user = t.user),
                (this.pass = t.pass || ""),
                (this.host = t.host),
                (this.port = t.port || ""),
                (this.path = t.path || ""),
                (this.projectId = t.projectId);
            }),
            (t.prototype._validate = function () {
              var t = this;
              if (
                (["protocol", "user", "host", "projectId"].forEach(function (
                  e
                ) {
                  if (!t[e]) throw new ke("Invalid Dsn: " + e + " missing");
                }),
                !this.projectId.match(/^\d+$/))
              )
                throw new ke(
                  "Invalid Dsn: Invalid projectId " + this.projectId
                );
              if ("http" !== this.protocol && "https" !== this.protocol)
                throw new ke("Invalid Dsn: Invalid protocol " + this.protocol);
              if (this.port && isNaN(parseInt(this.port, 10)))
                throw new ke("Invalid Dsn: Invalid port " + this.port);
            }),
            t
          );
        })(),
        Pe = n("9AQC"),
        Ie = n("6PXS"),
        Te = [];
      function De(t) {
        var e = {};
        return (
          (function (t) {
            var e =
                (t.defaultIntegrations && ve.d(t.defaultIntegrations)) || [],
              n = t.integrations,
              r = [];
            if (Array.isArray(n)) {
              var o = n.map(function (t) {
                  return t.name;
                }),
                i = [];
              e.forEach(function (t) {
                -1 === o.indexOf(t.name) &&
                  -1 === i.indexOf(t.name) &&
                  (r.push(t), i.push(t.name));
              }),
                n.forEach(function (t) {
                  -1 === i.indexOf(t.name) && (r.push(t), i.push(t.name));
                });
            } else
              "function" === typeof n
                ? ((r = n(e)), (r = Array.isArray(r) ? r : [r]))
                : (r = ve.d(e));
            var a = r.map(function (t) {
              return t.name;
            });
            return (
              -1 !== a.indexOf("Debug") &&
                r.push.apply(r, ve.d(r.splice(a.indexOf("Debug"), 1))),
              r
            );
          })(t).forEach(function (t) {
            (e[t.name] = t),
              (function (t) {
                -1 === Te.indexOf(t.name) &&
                  (t.setupOnce(be.b, ye.a),
                  Te.push(t.name),
                  me.a.log("Integration installed: " + t.name));
              })(t);
          }),
          e
        );
      }
      var Re,
        Ue = (function () {
          function t(t, e) {
            (this._integrations = {}),
              (this._processing = !1),
              (this._backend = new t(e)),
              (this._options = e),
              e.dsn && (this._dsn = new Se(e.dsn));
          }
          return (
            (t.prototype.captureException = function (t, e, n) {
              var r = this,
                o = e && e.event_id;
              return (
                (this._processing = !0),
                this._getBackend()
                  .eventFromException(t, e)
                  .then(function (t) {
                    o = r.captureEvent(t, e, n);
                  }),
                o
              );
            }),
            (t.prototype.captureMessage = function (t, e, n, r) {
              var o = this,
                i = n && n.event_id;
              return (
                (this._processing = !0),
                (Object(Pe.i)(t)
                  ? this._getBackend().eventFromMessage("" + t, e, n)
                  : this._getBackend().eventFromException(t, n)
                ).then(function (t) {
                  i = o.captureEvent(t, n, r);
                }),
                i
              );
            }),
            (t.prototype.captureEvent = function (t, e, n) {
              var r = this,
                o = e && e.event_id;
              return (
                (this._processing = !0),
                this._processEvent(t, e, n)
                  .then(function (t) {
                    (o = t && t.event_id), (r._processing = !1);
                  })
                  .then(null, function (t) {
                    me.a.error(t), (r._processing = !1);
                  }),
                o
              );
            }),
            (t.prototype.getDsn = function () {
              return this._dsn;
            }),
            (t.prototype.getOptions = function () {
              return this._options;
            }),
            (t.prototype.flush = function (t) {
              var e = this;
              return this._isClientProcessing(t).then(function (n) {
                return (
                  clearInterval(n.interval),
                  e
                    ._getBackend()
                    .getTransport()
                    .close(t)
                    .then(function (t) {
                      return n.ready && t;
                    })
                );
              });
            }),
            (t.prototype.close = function (t) {
              var e = this;
              return this.flush(t).then(function (t) {
                return (e.getOptions().enabled = !1), t;
              });
            }),
            (t.prototype.setupIntegrations = function () {
              this._isEnabled() && (this._integrations = De(this._options));
            }),
            (t.prototype.getIntegration = function (t) {
              try {
                return this._integrations[t.id] || null;
              } catch (e) {
                return (
                  me.a.warn(
                    "Cannot retrieve integration " +
                      t.id +
                      " from the current Client"
                  ),
                  null
                );
              }
            }),
            (t.prototype._isClientProcessing = function (t) {
              var e = this;
              return new we.a(function (n) {
                var r = 0,
                  o = 0;
                clearInterval(o),
                  (o = setInterval(function () {
                    e._processing
                      ? ((r += 1), t && r >= t && n({ interval: o, ready: !1 }))
                      : n({ interval: o, ready: !0 });
                  }, 1));
              });
            }),
            (t.prototype._getBackend = function () {
              return this._backend;
            }),
            (t.prototype._isEnabled = function () {
              return !1 !== this.getOptions().enabled && void 0 !== this._dsn;
            }),
            (t.prototype._prepareEvent = function (t, e, n) {
              var r = this,
                o = this.getOptions().normalizeDepth,
                i = void 0 === o ? 3 : o,
                a = ve.a({}, t, {
                  event_id:
                    t.event_id ||
                    (n && n.event_id ? n.event_id : Object(ge.m)()),
                  timestamp: t.timestamp || Object(ge.l)(),
                });
              this._applyClientOptions(a), this._applyIntegrationsMetadata(a);
              var c = e;
              n &&
                n.captureContext &&
                (c = be.a.clone(c).update(n.captureContext));
              var s = we.a.resolve(a);
              return (
                c && (s = c.applyToEvent(a, n)),
                s.then(function (t) {
                  return "number" === typeof i && i > 0
                    ? r._normalizeEvent(t, i)
                    : t;
                })
              );
            }),
            (t.prototype._normalizeEvent = function (t, e) {
              if (!t) return null;
              var n = ve.a(
                {},
                t,
                t.breadcrumbs && {
                  breadcrumbs: t.breadcrumbs.map(function (t) {
                    return ve.a(
                      {},
                      t,
                      t.data && { data: Object(Ie.c)(t.data, e) }
                    );
                  }),
                },
                t.user && { user: Object(Ie.c)(t.user, e) },
                t.contexts && { contexts: Object(Ie.c)(t.contexts, e) },
                t.extra && { extra: Object(Ie.c)(t.extra, e) }
              );
              return (
                t.contexts &&
                  t.contexts.trace &&
                  (n.contexts.trace = t.contexts.trace),
                n
              );
            }),
            (t.prototype._applyClientOptions = function (t) {
              var e = this.getOptions(),
                n = e.environment,
                r = e.release,
                o = e.dist,
                i = e.maxValueLength,
                a = void 0 === i ? 250 : i;
              void 0 === t.environment && void 0 !== n && (t.environment = n),
                void 0 === t.release && void 0 !== r && (t.release = r),
                void 0 === t.dist && void 0 !== o && (t.dist = o),
                t.message && (t.message = Object(Oe.d)(t.message, a));
              var c =
                t.exception && t.exception.values && t.exception.values[0];
              c && c.value && (c.value = Object(Oe.d)(c.value, a));
              var s = t.request;
              s && s.url && (s.url = Object(Oe.d)(s.url, a));
            }),
            (t.prototype._applyIntegrationsMetadata = function (t) {
              var e = t.sdk,
                n = Object.keys(this._integrations);
              e && n.length > 0 && (e.integrations = n);
            }),
            (t.prototype._sendEvent = function (t) {
              this._getBackend().sendEvent(t);
            }),
            (t.prototype._processEvent = function (t, e, n) {
              var r = this,
                o = this.getOptions(),
                i = o.beforeSend,
                a = o.sampleRate;
              if (!this._isEnabled())
                return we.a.reject("SDK not enabled, will not send event.");
              var c = "transaction" === t.type;
              return !c && "number" === typeof a && Math.random() > a
                ? we.a.reject(
                    "This event has been sampled, will not send event."
                  )
                : new we.a(function (o, a) {
                    r._prepareEvent(t, n, e)
                      .then(function (t) {
                        if (null !== t) {
                          var n = t;
                          if (
                            (e && e.data && !0 === e.data.__sentry__) ||
                            !i ||
                            c
                          )
                            return r._sendEvent(n), void o(n);
                          var s = i(t, e);
                          if ("undefined" === typeof s)
                            me.a.error(
                              "`beforeSend` method has to return `null` or a valid event."
                            );
                          else if (Object(Pe.m)(s))
                            r._handleAsyncBeforeSend(s, o, a);
                          else {
                            if (null === (n = s))
                              return (
                                me.a.log(
                                  "`beforeSend` returned `null`, will not send event."
                                ),
                                void o(null)
                              );
                            r._sendEvent(n), o(n);
                          }
                        } else a("An event processor returned null, will not send event.");
                      })
                      .then(null, function (t) {
                        r.captureException(t, {
                          data: { __sentry__: !0 },
                          originalException: t,
                        }),
                          a(
                            "Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " +
                              t
                          );
                      });
                  });
            }),
            (t.prototype._handleAsyncBeforeSend = function (t, e, n) {
              var r = this;
              t.then(function (t) {
                null !== t
                  ? (r._sendEvent(t), e(t))
                  : n("`beforeSend` returned `null`, will not send event.");
              }).then(null, function (t) {
                n("beforeSend rejected with " + t);
              });
            }),
            t
          );
        })();
      !(function (t) {
        (t.Unknown = "unknown"),
          (t.Skipped = "skipped"),
          (t.Success = "success"),
          (t.RateLimit = "rate_limit"),
          (t.Invalid = "invalid"),
          (t.Failed = "failed");
      })(Re || (Re = {})),
        (function (t) {
          t.fromHttpCode = function (e) {
            return e >= 200 && e < 300
              ? t.Success
              : 429 === e
              ? t.RateLimit
              : e >= 400 && e < 500
              ? t.Invalid
              : e >= 500
              ? t.Failed
              : t.Unknown;
          };
        })(Re || (Re = {}));
      var Ce,
        Ne = (function () {
          function t() {}
          return (
            (t.prototype.sendEvent = function (t) {
              return we.a.resolve({
                reason:
                  "NoopTransport: Event has been skipped because no Dsn is configured.",
                status: Re.Skipped,
              });
            }),
            (t.prototype.close = function (t) {
              return we.a.resolve(!0);
            }),
            t
          );
        })(),
        Ae = (function () {
          function t(t) {
            (this._options = t),
              this._options.dsn ||
                me.a.warn("No DSN provided, backend will not do anything."),
              (this._transport = this._setupTransport());
          }
          return (
            (t.prototype._setupTransport = function () {
              return new Ne();
            }),
            (t.prototype.eventFromException = function (t, e) {
              throw new ke(
                "Backend has to implement `eventFromException` method"
              );
            }),
            (t.prototype.eventFromMessage = function (t, e, n) {
              throw new ke(
                "Backend has to implement `eventFromMessage` method"
              );
            }),
            (t.prototype.sendEvent = function (t) {
              this._transport.sendEvent(t).then(null, function (t) {
                me.a.error("Error while sending event: " + t);
              });
            }),
            (t.prototype.getTransport = function () {
              return this._transport;
            }),
            t
          );
        })();
      function Fe() {
        if (!("fetch" in Object(ge.f)())) return !1;
        try {
          return new Headers(), new Request(""), new Response(), !0;
        } catch (t) {
          return !1;
        }
      }
      function Me(t) {
        return (
          t &&
          /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
        );
      }
      function Be() {
        if (!Fe()) return !1;
        try {
          return new Request("_", { referrerPolicy: "origin" }), !0;
        } catch (t) {
          return !1;
        }
      }
      !(function (t) {
        (t.Fatal = "fatal"),
          (t.Error = "error"),
          (t.Warning = "warning"),
          (t.Log = "log"),
          (t.Info = "info"),
          (t.Debug = "debug"),
          (t.Critical = "critical");
      })(Ce || (Ce = {})),
        (function (t) {
          t.fromString = function (e) {
            switch (e) {
              case "debug":
                return t.Debug;
              case "info":
                return t.Info;
              case "warn":
              case "warning":
                return t.Warning;
              case "error":
                return t.Error;
              case "fatal":
                return t.Fatal;
              case "critical":
                return t.Critical;
              case "log":
              default:
                return t.Log;
            }
          };
        })(Ce || (Ce = {}));
      var qe = "?",
        Le = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        He = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i,
        We = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        Ge = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        Xe = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        ze = /Minified React error #\d+;/i;
      function Ke(t) {
        var e = null,
          n = 0;
        t &&
          ("number" === typeof t.framesToPop
            ? (n = t.framesToPop)
            : ze.test(t.message) && (n = 1));
        try {
          if (
            (e = (function (t) {
              if (!t || !t.stacktrace) return null;
              for (
                var e,
                  n = t.stacktrace,
                  r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
                  o = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i,
                  i = n.split("\n"),
                  a = [],
                  c = 0;
                c < i.length;
                c += 2
              ) {
                var s = null;
                (e = r.exec(i[c]))
                  ? (s = {
                      url: e[2],
                      func: e[3],
                      args: [],
                      line: +e[1],
                      column: null,
                    })
                  : (e = o.exec(i[c])) &&
                    (s = {
                      url: e[6],
                      func: e[3] || e[4],
                      args: e[5] ? e[5].split(",") : [],
                      line: +e[1],
                      column: +e[2],
                    }),
                  s && (!s.func && s.line && (s.func = qe), a.push(s));
              }
              if (!a.length) return null;
              return { message: $e(t), name: t.name, stack: a };
            })(t))
          )
            return Je(e, n);
        } catch (r) {}
        try {
          if (
            (e = (function (t) {
              if (!t || !t.stack) return null;
              for (
                var e, n, r, o = [], i = t.stack.split("\n"), a = 0;
                a < i.length;
                ++a
              ) {
                if ((n = Le.exec(i[a]))) {
                  var c = n[2] && 0 === n[2].indexOf("native");
                  n[2] &&
                    0 === n[2].indexOf("eval") &&
                    (e = Xe.exec(n[2])) &&
                    ((n[2] = e[1]), (n[3] = e[2]), (n[4] = e[3])),
                    (r = {
                      url:
                        n[2] && 0 === n[2].indexOf("address at ")
                          ? n[2].substr("address at ".length)
                          : n[2],
                      func: n[1] || qe,
                      args: c ? [n[2]] : [],
                      line: n[3] ? +n[3] : null,
                      column: n[4] ? +n[4] : null,
                    });
                } else if ((n = We.exec(i[a])))
                  r = {
                    url: n[2],
                    func: n[1] || qe,
                    args: [],
                    line: +n[3],
                    column: n[4] ? +n[4] : null,
                  };
                else {
                  if (!(n = He.exec(i[a]))) continue;
                  n[3] && n[3].indexOf(" > eval") > -1 && (e = Ge.exec(n[3]))
                    ? ((n[1] = n[1] || "eval"),
                      (n[3] = e[1]),
                      (n[4] = e[2]),
                      (n[5] = ""))
                    : 0 !== a ||
                      n[5] ||
                      void 0 === t.columnNumber ||
                      (o[0].column = t.columnNumber + 1),
                    (r = {
                      url: n[3],
                      func: n[1] || qe,
                      args: n[2] ? n[2].split(",") : [],
                      line: n[4] ? +n[4] : null,
                      column: n[5] ? +n[5] : null,
                    });
                }
                !r.func && r.line && (r.func = qe), o.push(r);
              }
              if (!o.length) return null;
              return { message: $e(t), name: t.name, stack: o };
            })(t))
          )
            return Je(e, n);
        } catch (r) {}
        return { message: $e(t), name: t && t.name, stack: [], failed: !0 };
      }
      function Je(t, e) {
        try {
          return ve.a({}, t, { stack: t.stack.slice(e) });
        } catch (n) {
          return t;
        }
      }
      function $e(t) {
        var e = t && t.message;
        return e
          ? e.error && "string" === typeof e.error.message
            ? e.error.message
            : e
          : "No error message";
      }
      var Ve = 50;
      function Ze(t) {
        var e = Ye(t.stack),
          n = { type: t.name, value: t.message };
        return (
          e && e.length && (n.stacktrace = { frames: e }),
          void 0 === n.type &&
            "" === n.value &&
            (n.value = "Unrecoverable error caught"),
          n
        );
      }
      function Qe(t) {
        return { exception: { values: [Ze(t)] } };
      }
      function Ye(t) {
        if (!t || !t.length) return [];
        var e = t,
          n = e[0].func || "",
          r = e[e.length - 1].func || "";
        return (
          (-1 === n.indexOf("captureMessage") &&
            -1 === n.indexOf("captureException")) ||
            (e = e.slice(1)),
          -1 !== r.indexOf("sentryWrapped") && (e = e.slice(0, -1)),
          e
            .slice(0, Ve)
            .map(function (t) {
              return {
                colno: null === t.column ? void 0 : t.column,
                filename: t.url || e[0].url,
                function: t.func || "?",
                in_app: !0,
                lineno: null === t.line ? void 0 : t.line,
              };
            })
            .reverse()
        );
      }
      function tn(t, e, n) {
        var r;
        if ((void 0 === n && (n = {}), Object(Pe.e)(t) && t.error))
          return (r = Qe(Ke((t = t.error))));
        if (Object(Pe.a)(t) || Object(Pe.b)(t)) {
          var o = t,
            i = o.name || (Object(Pe.a)(o) ? "DOMError" : "DOMException"),
            a = o.message ? i + ": " + o.message : i;
          return (r = en(a, e, n)), Object(ge.b)(r, a), r;
        }
        return Object(Pe.d)(t)
          ? (r = Qe(Ke(t)))
          : Object(Pe.h)(t) || Object(Pe.f)(t)
          ? ((r = (function (t, e, n) {
              var r = {
                exception: {
                  values: [
                    {
                      type: Object(Pe.f)(t)
                        ? t.constructor.name
                        : n
                        ? "UnhandledRejection"
                        : "Error",
                      value:
                        "Non-Error " +
                        (n ? "promise rejection" : "exception") +
                        " captured with keys: " +
                        Object(Ie.a)(t),
                    },
                  ],
                },
                extra: { __serialized__: Object(Ie.d)(t) },
              };
              if (e) {
                var o = Ye(Ke(e).stack);
                r.stacktrace = { frames: o };
              }
              return r;
            })(t, e, n.rejection)),
            Object(ge.a)(r, { synthetic: !0 }),
            r)
          : ((r = en(t, e, n)),
            Object(ge.b)(r, "" + t, void 0),
            Object(ge.a)(r, { synthetic: !0 }),
            r);
      }
      function en(t, e, n) {
        void 0 === n && (n = {});
        var r = { message: t };
        if (n.attachStacktrace && e) {
          var o = Ye(Ke(e).stack);
          r.stacktrace = { frames: o };
        }
        return r;
      }
      function nn(t, e) {
        var n = "transaction" === t.type,
          r = {
            body: JSON.stringify(t),
            url: n
              ? e.getEnvelopeEndpointWithUrlEncodedAuth()
              : e.getStoreEndpointWithUrlEncodedAuth(),
          };
        if (n) {
          var o =
            JSON.stringify({
              event_id: t.event_id,
              sent_at: new Date(1e3 * Object(ge.l)()).toISOString(),
            }) +
            "\n" +
            JSON.stringify({ type: t.type }) +
            "\n" +
            r.body;
          r.body = o;
        }
        return r;
      }
      var rn = (function () {
          function t(t) {
            (this.dsn = t), (this._dsnObject = new Se(t));
          }
          return (
            (t.prototype.getDsn = function () {
              return this._dsnObject;
            }),
            (t.prototype.getBaseApiEndpoint = function () {
              var t = this._dsnObject,
                e = t.protocol ? t.protocol + ":" : "",
                n = t.port ? ":" + t.port : "";
              return (
                e + "//" + t.host + n + (t.path ? "/" + t.path : "") + "/api/"
              );
            }),
            (t.prototype.getStoreEndpoint = function () {
              return this._getIngestEndpoint("store");
            }),
            (t.prototype._getEnvelopeEndpoint = function () {
              return this._getIngestEndpoint("envelope");
            }),
            (t.prototype._getIngestEndpoint = function (t) {
              return (
                "" +
                this.getBaseApiEndpoint() +
                this._dsnObject.projectId +
                "/" +
                t +
                "/"
              );
            }),
            (t.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
              return this.getStoreEndpoint() + "?" + this._encodedAuth();
            }),
            (t.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function () {
              return this._getEnvelopeEndpoint() + "?" + this._encodedAuth();
            }),
            (t.prototype._encodedAuth = function () {
              var t = { sentry_key: this._dsnObject.user, sentry_version: "7" };
              return Object(Ie.e)(t);
            }),
            (t.prototype.getStoreEndpointPath = function () {
              var t = this._dsnObject;
              return (
                (t.path ? "/" + t.path : "") + "/api/" + t.projectId + "/store/"
              );
            }),
            (t.prototype.getRequestHeaders = function (t, e) {
              var n = this._dsnObject,
                r = ["Sentry sentry_version=7"];
              return (
                r.push("sentry_client=" + t + "/" + e),
                r.push("sentry_key=" + n.user),
                n.pass && r.push("sentry_secret=" + n.pass),
                {
                  "Content-Type": "application/json",
                  "X-Sentry-Auth": r.join(", "),
                }
              );
            }),
            (t.prototype.getReportDialogEndpoint = function (t) {
              void 0 === t && (t = {});
              var e = this._dsnObject,
                n = this.getBaseApiEndpoint() + "embed/error-page/",
                r = [];
              for (var o in (r.push("dsn=" + e.toString()), t))
                if ("user" === o) {
                  if (!t.user) continue;
                  t.user.name &&
                    r.push("name=" + encodeURIComponent(t.user.name)),
                    t.user.email &&
                      r.push("email=" + encodeURIComponent(t.user.email));
                } else
                  r.push(
                    encodeURIComponent(o) + "=" + encodeURIComponent(t[o])
                  );
              return r.length ? n + "?" + r.join("&") : n;
            }),
            t
          );
        })(),
        on = (function () {
          function t(t) {
            (this._limit = t), (this._buffer = []);
          }
          return (
            (t.prototype.isReady = function () {
              return void 0 === this._limit || this.length() < this._limit;
            }),
            (t.prototype.add = function (t) {
              var e = this;
              return this.isReady()
                ? (-1 === this._buffer.indexOf(t) && this._buffer.push(t),
                  t
                    .then(function () {
                      return e.remove(t);
                    })
                    .then(null, function () {
                      return e.remove(t).then(null, function () {});
                    }),
                  t)
                : we.a.reject(
                    new ke("Not adding Promise due to buffer limit reached.")
                  );
            }),
            (t.prototype.remove = function (t) {
              return this._buffer.splice(this._buffer.indexOf(t), 1)[0];
            }),
            (t.prototype.length = function () {
              return this._buffer.length;
            }),
            (t.prototype.drain = function (t) {
              var e = this;
              return new we.a(function (n) {
                var r = setTimeout(function () {
                  t && t > 0 && n(!1);
                }, t);
                we.a
                  .all(e._buffer)
                  .then(function () {
                    clearTimeout(r), n(!0);
                  })
                  .then(null, function () {
                    n(!0);
                  });
              });
            }),
            t
          );
        })(),
        an = (function () {
          function t(t) {
            (this.options = t),
              (this._buffer = new on(30)),
              (this._api = new rn(this.options.dsn)),
              (this.url = this._api.getStoreEndpointWithUrlEncodedAuth());
          }
          return (
            (t.prototype.sendEvent = function (t) {
              throw new ke(
                "Transport Class has to implement `sendEvent` method"
              );
            }),
            (t.prototype.close = function (t) {
              return this._buffer.drain(t);
            }),
            t
          );
        })(),
        cn = Object(ge.f)(),
        sn = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e._disabledUntil = new Date(Date.now())), e;
          }
          return (
            ve.b(e, t),
            (e.prototype.sendEvent = function (t) {
              var e = this;
              if (new Date(Date.now()) < this._disabledUntil)
                return Promise.reject({
                  event: t,
                  reason:
                    "Transport locked till " +
                    this._disabledUntil +
                    " due to too many requests.",
                  status: 429,
                });
              var n = nn(t, this._api),
                r = {
                  body: n.body,
                  method: "POST",
                  referrerPolicy: Be() ? "origin" : "",
                };
              return (
                void 0 !== this.options.fetchParameters &&
                  Object.assign(r, this.options.fetchParameters),
                void 0 !== this.options.headers &&
                  (r.headers = this.options.headers),
                this._buffer.add(
                  new we.a(function (t, o) {
                    cn.fetch(n.url, r)
                      .then(function (n) {
                        var r = Re.fromHttpCode(n.status);
                        if (r !== Re.Success) {
                          if (r === Re.RateLimit) {
                            var i = Date.now();
                            (e._disabledUntil = new Date(
                              i + Object(ge.j)(i, n.headers.get("Retry-After"))
                            )),
                              me.a.warn(
                                "Too many requests, backing off till: " +
                                  e._disabledUntil
                              );
                          }
                          o(n);
                        } else t({ status: r });
                      })
                      .catch(o);
                  })
                )
              );
            }),
            e
          );
        })(an),
        un = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e._disabledUntil = new Date(Date.now())), e;
          }
          return (
            ve.b(e, t),
            (e.prototype.sendEvent = function (t) {
              var e = this;
              if (new Date(Date.now()) < this._disabledUntil)
                return Promise.reject({
                  event: t,
                  reason:
                    "Transport locked till " +
                    this._disabledUntil +
                    " due to too many requests.",
                  status: 429,
                });
              var n = nn(t, this._api);
              return this._buffer.add(
                new we.a(function (t, r) {
                  var o = new XMLHttpRequest();
                  for (var i in ((o.onreadystatechange = function () {
                    if (4 === o.readyState) {
                      var n = Re.fromHttpCode(o.status);
                      if (n !== Re.Success) {
                        if (n === Re.RateLimit) {
                          var i = Date.now();
                          (e._disabledUntil = new Date(
                            i +
                              Object(ge.j)(
                                i,
                                o.getResponseHeader("Retry-After")
                              )
                          )),
                            me.a.warn(
                              "Too many requests, backing off till: " +
                                e._disabledUntil
                            );
                        }
                        r(o);
                      } else t({ status: n });
                    }
                  }),
                  o.open("POST", n.url),
                  e.options.headers))
                    e.options.headers.hasOwnProperty(i) &&
                      o.setRequestHeader(i, e.options.headers[i]);
                  o.send(n.body);
                })
              );
            }),
            e
          );
        })(an),
        ln = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            ve.b(e, t),
            (e.prototype._setupTransport = function () {
              if (!this._options.dsn)
                return t.prototype._setupTransport.call(this);
              var e = ve.a({}, this._options.transportOptions, {
                dsn: this._options.dsn,
              });
              return this._options.transport
                ? new this._options.transport(e)
                : Fe()
                ? new sn(e)
                : new un(e);
            }),
            (e.prototype.eventFromException = function (t, e) {
              return (function (t, e, n) {
                var r = tn(e, (n && n.syntheticException) || void 0, {
                  attachStacktrace: t.attachStacktrace,
                });
                return (
                  Object(ge.a)(r, { handled: !0, type: "generic" }),
                  (r.level = Ce.Error),
                  n && n.event_id && (r.event_id = n.event_id),
                  we.a.resolve(r)
                );
              })(this._options, t, e);
            }),
            (e.prototype.eventFromMessage = function (t, e, n) {
              return (
                void 0 === e && (e = Ce.Info),
                (function (t, e, n, r) {
                  void 0 === n && (n = Ce.Info);
                  var o = en(e, (r && r.syntheticException) || void 0, {
                    attachStacktrace: t.attachStacktrace,
                  });
                  return (
                    (o.level = n),
                    r && r.event_id && (o.event_id = r.event_id),
                    we.a.resolve(o)
                  );
                })(this._options, t, e, n)
              );
            }),
            e
          );
        })(Ae),
        pn = n("gtzJ"),
        fn = 0;
      function dn() {
        return fn > 0;
      }
      function hn() {
        (fn += 1),
          setTimeout(function () {
            fn -= 1;
          });
      }
      function vn(t, e, n) {
        if ((void 0 === e && (e = {}), "function" !== typeof t)) return t;
        try {
          if (t.__sentry__) return t;
          if (t.__sentry_wrapped__) return t.__sentry_wrapped__;
        } catch (i) {
          return t;
        }
        var r = function () {
          var r = Array.prototype.slice.call(arguments);
          try {
            n && "function" === typeof n && n.apply(this, arguments);
            var o = r.map(function (t) {
              return vn(t, e);
            });
            return t.handleEvent
              ? t.handleEvent.apply(this, o)
              : t.apply(this, o);
          } catch (i) {
            throw (
              (hn(),
              Object(pn.c)(function (t) {
                t.addEventProcessor(function (t) {
                  var n = ve.a({}, t);
                  return (
                    e.mechanism &&
                      (Object(ge.b)(n, void 0, void 0),
                      Object(ge.a)(n, e.mechanism)),
                    (n.extra = ve.a({}, n.extra, { arguments: r })),
                    n
                  );
                }),
                  Object(pn.a)(i);
              }),
              i)
            );
          }
        };
        try {
          for (var o in t)
            Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o]);
        } catch (a) {}
        (t.prototype = t.prototype || {}),
          (r.prototype = t.prototype),
          Object.defineProperty(t, "__sentry_wrapped__", {
            enumerable: !1,
            value: r,
          }),
          Object.defineProperties(r, {
            __sentry__: { enumerable: !1, value: !0 },
            __sentry_original__: { enumerable: !1, value: t },
          });
        try {
          Object.getOwnPropertyDescriptor(r, "name").configurable &&
            Object.defineProperty(r, "name", {
              get: function () {
                return t.name;
              },
            });
        } catch (a) {}
        return r;
      }
      function bn(t) {
        if ((void 0 === t && (t = {}), t.eventId))
          if (t.dsn) {
            var e = document.createElement("script");
            (e.async = !0),
              (e.src = new rn(t.dsn).getReportDialogEndpoint(t)),
              t.onLoad && (e.onload = t.onLoad),
              (document.head || document.body).appendChild(e);
          } else me.a.error("Missing dsn option in showReportDialog call");
        else me.a.error("Missing eventId option in showReportDialog call");
      }
      var yn,
        mn = Object(ge.f)(),
        gn = {},
        On = {};
      function _n(t) {
        if (!On[t])
          switch (((On[t] = !0), t)) {
            case "console":
              !(function () {
                if (!("console" in mn)) return;
                ["debug", "info", "warn", "error", "log", "assert"].forEach(
                  function (t) {
                    t in mn.console &&
                      Object(Ie.b)(mn.console, t, function (e) {
                        return function () {
                          for (var n = [], r = 0; r < arguments.length; r++)
                            n[r] = arguments[r];
                          wn("console", { args: n, level: t }),
                            e &&
                              Function.prototype.apply.call(e, mn.console, n);
                        };
                      });
                  }
                );
              })();
              break;
            case "dom":
              !(function () {
                if (!("document" in mn)) return;
                mn.document.addEventListener(
                  "click",
                  Tn("click", wn.bind(null, "dom")),
                  !1
                ),
                  mn.document.addEventListener(
                    "keypress",
                    Dn(wn.bind(null, "dom")),
                    !1
                  ),
                  ["EventTarget", "Node"].forEach(function (t) {
                    var e = mn[t] && mn[t].prototype;
                    e &&
                      e.hasOwnProperty &&
                      e.hasOwnProperty("addEventListener") &&
                      (Object(Ie.b)(e, "addEventListener", function (t) {
                        return function (e, n, r) {
                          return (
                            n && n.handleEvent
                              ? ("click" === e &&
                                  Object(Ie.b)(n, "handleEvent", function (t) {
                                    return function (e) {
                                      return (
                                        Tn("click", wn.bind(null, "dom"))(e),
                                        t.call(this, e)
                                      );
                                    };
                                  }),
                                "keypress" === e &&
                                  Object(Ie.b)(n, "handleEvent", function (t) {
                                    return function (e) {
                                      return (
                                        Dn(wn.bind(null, "dom"))(e),
                                        t.call(this, e)
                                      );
                                    };
                                  }))
                              : ("click" === e &&
                                  Tn("click", wn.bind(null, "dom"), !0)(this),
                                "keypress" === e &&
                                  Dn(wn.bind(null, "dom"))(this)),
                            t.call(this, e, n, r)
                          );
                        };
                      }),
                      Object(Ie.b)(e, "removeEventListener", function (t) {
                        return function (e, n, r) {
                          try {
                            t.call(this, e, n.__sentry_wrapped__, r);
                          } catch (o) {}
                          return t.call(this, e, n, r);
                        };
                      }));
                  });
              })();
              break;
            case "xhr":
              !(function () {
                if (!("XMLHttpRequest" in mn)) return;
                var t = XMLHttpRequest.prototype;
                Object(Ie.b)(t, "open", function (t) {
                  return function () {
                    for (var e = [], n = 0; n < arguments.length; n++)
                      e[n] = arguments[n];
                    var r = this,
                      o = e[1];
                    (r.__sentry_xhr__ = {
                      method: Object(Pe.k)(e[0]) ? e[0].toUpperCase() : e[0],
                      url: e[1],
                    }),
                      Object(Pe.k)(o) &&
                        "POST" === r.__sentry_xhr__.method &&
                        o.match(/sentry_key/) &&
                        (r.__sentry_own_request__ = !0);
                    var i = function () {
                      if (4 === r.readyState) {
                        try {
                          r.__sentry_xhr__ &&
                            (r.__sentry_xhr__.status_code = r.status);
                        } catch (t) {}
                        wn("xhr", {
                          args: e,
                          endTimestamp: Date.now(),
                          startTimestamp: Date.now(),
                          xhr: r,
                        });
                      }
                    };
                    return (
                      "onreadystatechange" in r &&
                      "function" === typeof r.onreadystatechange
                        ? Object(Ie.b)(r, "onreadystatechange", function (t) {
                            return function () {
                              for (var e = [], n = 0; n < arguments.length; n++)
                                e[n] = arguments[n];
                              return i(), t.apply(r, e);
                            };
                          })
                        : r.addEventListener("readystatechange", i),
                      t.apply(r, e)
                    );
                  };
                }),
                  Object(Ie.b)(t, "send", function (t) {
                    return function () {
                      for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                      return (
                        wn("xhr", {
                          args: e,
                          startTimestamp: Date.now(),
                          xhr: this,
                        }),
                        t.apply(this, e)
                      );
                    };
                  });
              })();
              break;
            case "fetch":
              !(function () {
                if (
                  !(function () {
                    if (!Fe()) return !1;
                    var t = Object(ge.f)();
                    if (Me(t.fetch)) return !0;
                    var e = !1,
                      n = t.document;
                    if (n && "function" === typeof n.createElement)
                      try {
                        var r = n.createElement("iframe");
                        (r.hidden = !0),
                          n.head.appendChild(r),
                          r.contentWindow &&
                            r.contentWindow.fetch &&
                            (e = Me(r.contentWindow.fetch)),
                          n.head.removeChild(r);
                      } catch (o) {
                        me.a.warn(
                          "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
                          o
                        );
                      }
                    return e;
                  })()
                )
                  return;
                Object(Ie.b)(mn, "fetch", function (t) {
                  return function () {
                    for (var e = [], n = 0; n < arguments.length; n++)
                      e[n] = arguments[n];
                    var r = {
                      args: e,
                      fetchData: { method: En(e), url: kn(e) },
                      startTimestamp: Date.now(),
                    };
                    return (
                      wn("fetch", ve.a({}, r)),
                      t.apply(mn, e).then(
                        function (t) {
                          return (
                            wn(
                              "fetch",
                              ve.a({}, r, {
                                endTimestamp: Date.now(),
                                response: t,
                              })
                            ),
                            t
                          );
                        },
                        function (t) {
                          throw (
                            (wn(
                              "fetch",
                              ve.a({}, r, {
                                endTimestamp: Date.now(),
                                error: t,
                              })
                            ),
                            t)
                          );
                        }
                      )
                    );
                  };
                });
              })();
              break;
            case "history":
              !(function () {
                if (
                  !(function () {
                    var t = Object(ge.f)(),
                      e = t.chrome,
                      n = e && e.app && e.app.runtime,
                      r =
                        "history" in t &&
                        !!t.history.pushState &&
                        !!t.history.replaceState;
                    return !n && r;
                  })()
                )
                  return;
                var t = mn.onpopstate;
                function e(t) {
                  return function () {
                    for (var e = [], n = 0; n < arguments.length; n++)
                      e[n] = arguments[n];
                    var r = e.length > 2 ? e[2] : void 0;
                    if (r) {
                      var o = yn,
                        i = String(r);
                      (yn = i), wn("history", { from: o, to: i });
                    }
                    return t.apply(this, e);
                  };
                }
                (mn.onpopstate = function () {
                  for (var e = [], n = 0; n < arguments.length; n++)
                    e[n] = arguments[n];
                  var r = mn.location.href,
                    o = yn;
                  if (((yn = r), wn("history", { from: o, to: r }), t))
                    return t.apply(this, e);
                }),
                  Object(Ie.b)(mn.history, "pushState", e),
                  Object(Ie.b)(mn.history, "replaceState", e);
              })();
              break;
            case "error":
              (Rn = mn.onerror),
                (mn.onerror = function (t, e, n, r, o) {
                  return (
                    wn("error", {
                      column: r,
                      error: o,
                      line: n,
                      msg: t,
                      url: e,
                    }),
                    !!Rn && Rn.apply(this, arguments)
                  );
                });
              break;
            case "unhandledrejection":
              (Un = mn.onunhandledrejection),
                (mn.onunhandledrejection = function (t) {
                  return (
                    wn("unhandledrejection", t),
                    !Un || Un.apply(this, arguments)
                  );
                });
              break;
            default:
              me.a.warn("unknown instrumentation type:", t);
          }
      }
      function jn(t) {
        t &&
          "string" === typeof t.type &&
          "function" === typeof t.callback &&
          ((gn[t.type] = gn[t.type] || []),
          gn[t.type].push(t.callback),
          _n(t.type));
      }
      function wn(t, e) {
        var n, r;
        if (t && gn[t])
          try {
            for (
              var o = ve.e(gn[t] || []), i = o.next();
              !i.done;
              i = o.next()
            ) {
              var a = i.value;
              try {
                a(e);
              } catch (c) {
                me.a.error(
                  "Error while triggering instrumentation handler.\nType: " +
                    t +
                    "\nName: " +
                    Object(ge.e)(a) +
                    "\nError: " +
                    c
                );
              }
            }
          } catch (s) {
            n = { error: s };
          } finally {
            try {
              i && !i.done && (r = o.return) && r.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
      }
      function En(t) {
        return (
          void 0 === t && (t = []),
          "Request" in mn && Object(Pe.g)(t[0], Request) && t[0].method
            ? String(t[0].method).toUpperCase()
            : t[1] && t[1].method
            ? String(t[1].method).toUpperCase()
            : "GET"
        );
      }
      function kn(t) {
        return (
          void 0 === t && (t = []),
          "string" === typeof t[0]
            ? t[0]
            : "Request" in mn && Object(Pe.g)(t[0], Request)
            ? t[0].url
            : String(t[0])
        );
      }
      var xn,
        Sn,
        Pn = 1e3,
        In = 0;
      function Tn(t, e, n) {
        return (
          void 0 === n && (n = !1),
          function (r) {
            (xn = void 0),
              r &&
                Sn !== r &&
                ((Sn = r),
                In && clearTimeout(In),
                n
                  ? (In = setTimeout(function () {
                      e({ event: r, name: t });
                    }))
                  : e({ event: r, name: t }));
          }
        );
      }
      function Dn(t) {
        return function (e) {
          var n;
          try {
            n = e.target;
          } catch (o) {
            return;
          }
          var r = n && n.tagName;
          r &&
            ("INPUT" === r || "TEXTAREA" === r || n.isContentEditable) &&
            (xn || Tn("input", t)(e),
            clearTimeout(xn),
            (xn = setTimeout(function () {
              xn = void 0;
            }, Pn)));
        };
      }
      var Rn = null;
      var Un = null;
      var Cn = (function () {
          function t(e) {
            (this.name = t.id),
              (this._options = ve.a(
                {
                  console: !0,
                  dom: !0,
                  fetch: !0,
                  history: !0,
                  sentry: !0,
                  xhr: !0,
                },
                e
              ));
          }
          return (
            (t.prototype.addSentryBreadcrumb = function (t) {
              this._options.sentry &&
                Object(ye.a)().addBreadcrumb(
                  {
                    category:
                      "sentry." +
                      ("transaction" === t.type ? "transaction" : "event"),
                    event_id: t.event_id,
                    level: t.level,
                    message: Object(ge.d)(t),
                  },
                  { event: t }
                );
            }),
            (t.prototype._consoleBreadcrumb = function (t) {
              var e = {
                category: "console",
                data: { arguments: t.args, logger: "console" },
                level: Ce.fromString(t.level),
                message: Object(Oe.b)(t.args, " "),
              };
              if ("assert" === t.level) {
                if (!1 !== t.args[0]) return;
                (e.message =
                  "Assertion failed: " +
                  (Object(Oe.b)(t.args.slice(1), " ") || "console.assert")),
                  (e.data.arguments = t.args.slice(1));
              }
              Object(ye.a)().addBreadcrumb(e, {
                input: t.args,
                level: t.level,
              });
            }),
            (t.prototype._domBreadcrumb = function (t) {
              var e;
              try {
                e = t.event.target
                  ? Object(ge.h)(t.event.target)
                  : Object(ge.h)(t.event);
              } catch (n) {
                e = "<unknown>";
              }
              0 !== e.length &&
                Object(ye.a)().addBreadcrumb(
                  { category: "ui." + t.name, message: e },
                  { event: t.event, name: t.name }
                );
            }),
            (t.prototype._xhrBreadcrumb = function (t) {
              if (t.endTimestamp) {
                if (t.xhr.__sentry_own_request__) return;
                Object(ye.a)().addBreadcrumb(
                  { category: "xhr", data: t.xhr.__sentry_xhr__, type: "http" },
                  { xhr: t.xhr }
                );
              } else;
            }),
            (t.prototype._fetchBreadcrumb = function (t) {
              t.endTimestamp &&
                ((t.fetchData.url.match(/sentry_key/) &&
                  "POST" === t.fetchData.method) ||
                  (t.error
                    ? Object(ye.a)().addBreadcrumb(
                        {
                          category: "fetch",
                          data: t.fetchData,
                          level: Ce.Error,
                          type: "http",
                        },
                        { data: t.error, input: t.args }
                      )
                    : Object(ye.a)().addBreadcrumb(
                        {
                          category: "fetch",
                          data: ve.a({}, t.fetchData, {
                            status_code: t.response.status,
                          }),
                          type: "http",
                        },
                        { input: t.args, response: t.response }
                      )));
            }),
            (t.prototype._historyBreadcrumb = function (t) {
              var e = Object(ge.f)(),
                n = t.from,
                r = t.to,
                o = Object(ge.k)(e.location.href),
                i = Object(ge.k)(n),
                a = Object(ge.k)(r);
              i.path || (i = o),
                o.protocol === a.protocol &&
                  o.host === a.host &&
                  (r = a.relative),
                o.protocol === i.protocol &&
                  o.host === i.host &&
                  (n = i.relative),
                Object(ye.a)().addBreadcrumb({
                  category: "navigation",
                  data: { from: n, to: r },
                });
            }),
            (t.prototype.setupOnce = function () {
              var t = this;
              this._options.console &&
                jn({
                  callback: function () {
                    for (var e = [], n = 0; n < arguments.length; n++)
                      e[n] = arguments[n];
                    t._consoleBreadcrumb.apply(t, ve.d(e));
                  },
                  type: "console",
                }),
                this._options.dom &&
                  jn({
                    callback: function () {
                      for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                      t._domBreadcrumb.apply(t, ve.d(e));
                    },
                    type: "dom",
                  }),
                this._options.xhr &&
                  jn({
                    callback: function () {
                      for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                      t._xhrBreadcrumb.apply(t, ve.d(e));
                    },
                    type: "xhr",
                  }),
                this._options.fetch &&
                  jn({
                    callback: function () {
                      for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                      t._fetchBreadcrumb.apply(t, ve.d(e));
                    },
                    type: "fetch",
                  }),
                this._options.history &&
                  jn({
                    callback: function () {
                      for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                      t._historyBreadcrumb.apply(t, ve.d(e));
                    },
                    type: "history",
                  });
            }),
            (t.id = "Breadcrumbs"),
            t
          );
        })(),
        Nn = (function (t) {
          function e(e) {
            return void 0 === e && (e = {}), t.call(this, ln, e) || this;
          }
          return (
            ve.b(e, t),
            (e.prototype._prepareEvent = function (e, n, r) {
              return (
                (e.platform = e.platform || "javascript"),
                (e.sdk = ve.a({}, e.sdk, {
                  name: "sentry.javascript.browser",
                  packages: ve.d((e.sdk && e.sdk.packages) || [], [
                    { name: "npm:@sentry/browser", version: "5.20.1" },
                  ]),
                  version: "5.20.1",
                })),
                t.prototype._prepareEvent.call(this, e, n, r)
              );
            }),
            (e.prototype._sendEvent = function (e) {
              var n = this.getIntegration(Cn);
              n && n.addSentryBreadcrumb(e),
                t.prototype._sendEvent.call(this, e);
            }),
            (e.prototype.showReportDialog = function (t) {
              void 0 === t && (t = {}),
                Object(ge.f)().document &&
                  (this._isEnabled()
                    ? bn(ve.a({}, t, { dsn: t.dsn || this.getDsn() }))
                    : me.a.error(
                        "Trying to call showReportDialog with Sentry Client disabled"
                      ));
            }),
            e
          );
        })(Ue),
        An = [
          "EventTarget",
          "Window",
          "Node",
          "ApplicationCache",
          "AudioTrackList",
          "ChannelMergerNode",
          "CryptoOperation",
          "EventSource",
          "FileReader",
          "HTMLUnknownElement",
          "IDBDatabase",
          "IDBRequest",
          "IDBTransaction",
          "KeyOperation",
          "MediaController",
          "MessagePort",
          "ModalWindow",
          "Notification",
          "SVGElementInstance",
          "Screen",
          "TextTrack",
          "TextTrackCue",
          "TextTrackList",
          "WebSocket",
          "WebSocketWorker",
          "Worker",
          "XMLHttpRequest",
          "XMLHttpRequestEventTarget",
          "XMLHttpRequestUpload",
        ],
        Fn = (function () {
          function t(e) {
            (this.name = t.id),
              (this._options = ve.a(
                {
                  XMLHttpRequest: !0,
                  eventTarget: !0,
                  requestAnimationFrame: !0,
                  setInterval: !0,
                  setTimeout: !0,
                },
                e
              ));
          }
          return (
            (t.prototype._wrapTimeFunction = function (t) {
              return function () {
                for (var e = [], n = 0; n < arguments.length; n++)
                  e[n] = arguments[n];
                var r = e[0];
                return (
                  (e[0] = vn(r, {
                    mechanism: {
                      data: { function: Object(ge.e)(t) },
                      handled: !0,
                      type: "instrument",
                    },
                  })),
                  t.apply(this, e)
                );
              };
            }),
            (t.prototype._wrapRAF = function (t) {
              return function (e) {
                return t.call(
                  this,
                  vn(e, {
                    mechanism: {
                      data: {
                        function: "requestAnimationFrame",
                        handler: Object(ge.e)(t),
                      },
                      handled: !0,
                      type: "instrument",
                    },
                  })
                );
              };
            }),
            (t.prototype._wrapEventTarget = function (t) {
              var e = Object(ge.f)(),
                n = e[t] && e[t].prototype;
              n &&
                n.hasOwnProperty &&
                n.hasOwnProperty("addEventListener") &&
                (Object(Ie.b)(n, "addEventListener", function (e) {
                  return function (n, r, o) {
                    try {
                      "function" === typeof r.handleEvent &&
                        (r.handleEvent = vn(r.handleEvent.bind(r), {
                          mechanism: {
                            data: {
                              function: "handleEvent",
                              handler: Object(ge.e)(r),
                              target: t,
                            },
                            handled: !0,
                            type: "instrument",
                          },
                        }));
                    } catch (i) {}
                    return e.call(
                      this,
                      n,
                      vn(r, {
                        mechanism: {
                          data: {
                            function: "addEventListener",
                            handler: Object(ge.e)(r),
                            target: t,
                          },
                          handled: !0,
                          type: "instrument",
                        },
                      }),
                      o
                    );
                  };
                }),
                Object(Ie.b)(n, "removeEventListener", function (t) {
                  return function (e, n, r) {
                    try {
                      t.call(this, e, n.__sentry_wrapped__, r);
                    } catch (o) {}
                    return t.call(this, e, n, r);
                  };
                }));
            }),
            (t.prototype._wrapXHR = function (t) {
              return function () {
                for (var e = [], n = 0; n < arguments.length; n++)
                  e[n] = arguments[n];
                var r = this,
                  o = ["onload", "onerror", "onprogress", "onreadystatechange"];
                return (
                  o.forEach(function (t) {
                    t in r &&
                      "function" === typeof r[t] &&
                      Object(Ie.b)(r, t, function (e) {
                        var n = {
                          mechanism: {
                            data: { function: t, handler: Object(ge.e)(e) },
                            handled: !0,
                            type: "instrument",
                          },
                        };
                        return (
                          e.__sentry_original__ &&
                            (n.mechanism.data.handler = Object(ge.e)(
                              e.__sentry_original__
                            )),
                          vn(e, n)
                        );
                      });
                  }),
                  t.apply(this, e)
                );
              };
            }),
            (t.prototype.setupOnce = function () {
              var t = Object(ge.f)();
              (this._options.setTimeout &&
                Object(Ie.b)(
                  t,
                  "setTimeout",
                  this._wrapTimeFunction.bind(this)
                ),
              this._options.setInterval &&
                Object(Ie.b)(
                  t,
                  "setInterval",
                  this._wrapTimeFunction.bind(this)
                ),
              this._options.requestAnimationFrame &&
                Object(Ie.b)(
                  t,
                  "requestAnimationFrame",
                  this._wrapRAF.bind(this)
                ),
              this._options.XMLHttpRequest &&
                "XMLHttpRequest" in t &&
                Object(Ie.b)(
                  XMLHttpRequest.prototype,
                  "send",
                  this._wrapXHR.bind(this)
                ),
              this._options.eventTarget) &&
                (Array.isArray(this._options.eventTarget)
                  ? this._options.eventTarget
                  : An
                ).forEach(this._wrapEventTarget.bind(this));
            }),
            (t.id = "TryCatch"),
            t
          );
        })(),
        Mn = (function () {
          function t(e) {
            (this.name = t.id),
              (this._onErrorHandlerInstalled = !1),
              (this._onUnhandledRejectionHandlerInstalled = !1),
              (this._options = ve.a(
                { onerror: !0, onunhandledrejection: !0 },
                e
              ));
          }
          return (
            (t.prototype.setupOnce = function () {
              (Error.stackTraceLimit = 50),
                this._options.onerror &&
                  (me.a.log("Global Handler attached: onerror"),
                  this._installGlobalOnErrorHandler()),
                this._options.onunhandledrejection &&
                  (me.a.log("Global Handler attached: onunhandledrejection"),
                  this._installGlobalOnUnhandledRejectionHandler());
            }),
            (t.prototype._installGlobalOnErrorHandler = function () {
              var e = this;
              this._onErrorHandlerInstalled ||
                (jn({
                  callback: function (n) {
                    var r = n.error,
                      o = Object(ye.a)(),
                      i = o.getIntegration(t),
                      a = r && !0 === r.__sentry_own_request__;
                    if (i && !dn() && !a) {
                      var c = o.getClient(),
                        s = Object(Pe.i)(r)
                          ? e._eventFromIncompleteOnError(
                              n.msg,
                              n.url,
                              n.line,
                              n.column
                            )
                          : e._enhanceEventWithInitialFrame(
                              tn(r, void 0, {
                                attachStacktrace:
                                  c && c.getOptions().attachStacktrace,
                                rejection: !1,
                              }),
                              n.url,
                              n.line,
                              n.column
                            );
                      Object(ge.a)(s, { handled: !1, type: "onerror" }),
                        o.captureEvent(s, { originalException: r });
                    }
                  },
                  type: "error",
                }),
                (this._onErrorHandlerInstalled = !0));
            }),
            (t.prototype._installGlobalOnUnhandledRejectionHandler = function () {
              var e = this;
              this._onUnhandledRejectionHandlerInstalled ||
                (jn({
                  callback: function (n) {
                    var r = n;
                    try {
                      "reason" in n
                        ? (r = n.reason)
                        : "detail" in n &&
                          "reason" in n.detail &&
                          (r = n.detail.reason);
                    } catch (u) {}
                    var o = Object(ye.a)(),
                      i = o.getIntegration(t),
                      a = r && !0 === r.__sentry_own_request__;
                    if (!i || dn() || a) return !0;
                    var c = o.getClient(),
                      s = Object(Pe.i)(r)
                        ? e._eventFromIncompleteRejection(r)
                        : tn(r, void 0, {
                            attachStacktrace:
                              c && c.getOptions().attachStacktrace,
                            rejection: !0,
                          });
                    (s.level = Ce.Error),
                      Object(ge.a)(s, {
                        handled: !1,
                        type: "onunhandledrejection",
                      }),
                      o.captureEvent(s, { originalException: r });
                  },
                  type: "unhandledrejection",
                }),
                (this._onUnhandledRejectionHandlerInstalled = !0));
            }),
            (t.prototype._eventFromIncompleteOnError = function (t, e, n, r) {
              var o,
                i = Object(Pe.e)(t) ? t.message : t;
              if (Object(Pe.k)(i)) {
                var a = i.match(
                  /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i
                );
                a && ((o = a[1]), (i = a[2]));
              }
              var c = {
                exception: { values: [{ type: o || "Error", value: i }] },
              };
              return this._enhanceEventWithInitialFrame(c, e, n, r);
            }),
            (t.prototype._eventFromIncompleteRejection = function (t) {
              return {
                exception: {
                  values: [
                    {
                      type: "UnhandledRejection",
                      value:
                        "Non-Error promise rejection captured with value: " + t,
                    },
                  ],
                },
              };
            }),
            (t.prototype._enhanceEventWithInitialFrame = function (t, e, n, r) {
              (t.exception = t.exception || {}),
                (t.exception.values = t.exception.values || []),
                (t.exception.values[0] = t.exception.values[0] || {}),
                (t.exception.values[0].stacktrace =
                  t.exception.values[0].stacktrace || {}),
                (t.exception.values[0].stacktrace.frames =
                  t.exception.values[0].stacktrace.frames || []);
              var o = isNaN(parseInt(r, 10)) ? void 0 : r,
                i = isNaN(parseInt(n, 10)) ? void 0 : n,
                a = Object(Pe.k)(e) && e.length > 0 ? e : Object(ge.g)();
              return (
                0 === t.exception.values[0].stacktrace.frames.length &&
                  t.exception.values[0].stacktrace.frames.push({
                    colno: o,
                    filename: a,
                    function: "?",
                    in_app: !0,
                    lineno: i,
                  }),
                t
              );
            }),
            (t.id = "GlobalHandlers"),
            t
          );
        })(),
        Bn = "cause",
        qn = 5,
        Ln = (function () {
          function t(e) {
            void 0 === e && (e = {}),
              (this.name = t.id),
              (this._key = e.key || Bn),
              (this._limit = e.limit || qn);
          }
          return (
            (t.prototype.setupOnce = function () {
              Object(be.b)(function (e, n) {
                var r = Object(ye.a)().getIntegration(t);
                return r ? r._handler(e, n) : e;
              });
            }),
            (t.prototype._handler = function (t, e) {
              if (
                !t.exception ||
                !t.exception.values ||
                !e ||
                !Object(Pe.g)(e.originalException, Error)
              )
                return t;
              var n = this._walkErrorTree(e.originalException, this._key);
              return (t.exception.values = ve.d(n, t.exception.values)), t;
            }),
            (t.prototype._walkErrorTree = function (t, e, n) {
              if (
                (void 0 === n && (n = []),
                !Object(Pe.g)(t[e], Error) || n.length + 1 >= this._limit)
              )
                return n;
              var r = Ze(Ke(t[e]));
              return this._walkErrorTree(t[e], e, ve.d([r], n));
            }),
            (t.id = "LinkedErrors"),
            t
          );
        })(),
        Hn = Object(ge.f)(),
        Wn = (function () {
          function t() {
            this.name = t.id;
          }
          return (
            (t.prototype.setupOnce = function () {
              Object(be.b)(function (e) {
                if (Object(ye.a)().getIntegration(t)) {
                  if (!Hn.navigator || !Hn.location) return e;
                  var n = e.request || {};
                  return (
                    (n.url = n.url || Hn.location.href),
                    (n.headers = n.headers || {}),
                    (n.headers["User-Agent"] = Hn.navigator.userAgent),
                    ve.a({}, e, { request: n })
                  );
                }
                return e;
              });
            }),
            (t.id = "UserAgent"),
            t
          );
        })(),
        Gn = [
          new r.InboundFilters(),
          new r.FunctionToString(),
          new Fn(),
          new Cn(),
          new Mn(),
          new Ln(),
          new Wn(),
        ];
      var Xn = {
          dsn: "https://7fa485182fa5414391f8bd15951852b4@sentry.io/5175308",
          ignoreErrors: [
            /SecurityError: Blocked a frame with origin/,
            "UnhandledRejection: Non-Error promise rejection captured with value: Timeout",
            "TypeError: Failed to fetch",
            "TypeError: NetworkError when attempting to fetch resource.",
            "can't access dead object",
          ],
          integrations: [
            new ((function () {
              function t() {
                this.name = t.id;
              }
              return (
                (t.prototype.setupOnce = function (e, n) {
                  e(function (e) {
                    var r = n().getIntegration(t);
                    if (r) {
                      try {
                        if (r._shouldDropEvent(e, r._previousEvent))
                          return null;
                      } catch (o) {
                        return (r._previousEvent = e);
                      }
                      return (r._previousEvent = e);
                    }
                    return e;
                  });
                }),
                (t.prototype._shouldDropEvent = function (t, e) {
                  return (
                    !!e &&
                    (!!this._isSameMessageEvent(t, e) ||
                      !!this._isSameExceptionEvent(t, e))
                  );
                }),
                (t.prototype._isSameMessageEvent = function (t, e) {
                  var n = t.message,
                    r = e.message;
                  return (
                    !(!n && !r) &&
                    !((n && !r) || (!n && r)) &&
                    n === r &&
                    !!this._isSameFingerprint(t, e) &&
                    !!this._isSameStacktrace(t, e)
                  );
                }),
                (t.prototype._getFramesFromEvent = function (t) {
                  var e = t.exception;
                  if (e)
                    try {
                      return e.values[0].stacktrace.frames;
                    } catch (n) {
                      return;
                    }
                  else if (t.stacktrace) return t.stacktrace.frames;
                }),
                (t.prototype._isSameStacktrace = function (t, e) {
                  var n = this._getFramesFromEvent(t),
                    r = this._getFramesFromEvent(e);
                  if (!n && !r) return !0;
                  if ((n && !r) || (!n && r)) return !1;
                  if (((n = n), (r = r).length !== n.length)) return !1;
                  for (var o = 0; o < r.length; o++) {
                    var i = r[o],
                      a = n[o];
                    if (
                      i.filename !== a.filename ||
                      i.lineno !== a.lineno ||
                      i.colno !== a.colno ||
                      i.function !== a.function
                    )
                      return !1;
                  }
                  return !0;
                }),
                (t.prototype._getExceptionFromEvent = function (t) {
                  return (
                    t.exception && t.exception.values && t.exception.values[0]
                  );
                }),
                (t.prototype._isSameExceptionEvent = function (t, e) {
                  var n = this._getExceptionFromEvent(e),
                    r = this._getExceptionFromEvent(t);
                  return (
                    !(!n || !r) &&
                    n.type === r.type &&
                    n.value === r.value &&
                    !!this._isSameFingerprint(t, e) &&
                    !!this._isSameStacktrace(t, e)
                  );
                }),
                (t.prototype._isSameFingerprint = function (t, e) {
                  var n = t.fingerprint,
                    r = e.fingerprint;
                  if (!n && !r) return !0;
                  if ((n && !r) || (!n && r)) return !1;
                  (n = n), (r = r);
                  try {
                    return !(n.join("") !== r.join(""));
                  } catch (o) {
                    return !1;
                  }
                }),
                (t.id = "Dedupe"),
                t
              );
            })())(),
          ],
          whitelistUrls: ["assets.getpocket.com/web-discover"],
          release: "61de8ff7ce9135a880e3cfaf294f72cc62a3c2d3",
          environment: "Production",
        },
        zn = n("0b+E"),
        Kn = n("SFd4");
      function Jn() {
        return (Jn = Object(c.a)(
          i.a.mark(function t() {
            return i.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (!window) {
                      t.next = 5;
                      break;
                    }
                    if ("undefined" !== typeof window.IntersectionObserver) {
                      t.next = 5;
                      break;
                    }
                    return (
                      console.log("Loading Intersection Observer"),
                      (t.next = 5),
                      n.e(37).then(n.t.bind(null, "Wr5T", 7))
                    );
                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var $n = n("IYBn");
      var Vn = n("W6kq"),
        Zn = n("imBb"),
        Qn = n.n(Zn),
        Yn = l.a.createElement;
      function tr() {
        var t = Object(yt.c)(function (t) {
            return t.features;
          }),
          e = Object.keys(t);
        return e.length
          ? Yn(
              dr,
              { title: "Features" },
              e.map(function (t) {
                return Yn(er, { feature: t, key: t });
              })
            )
          : null;
      }
      function er(t) {
        var e = t.feature,
          n = Object(yt.b)(),
          r = Object(yt.c)(function (t) {
            return t.features[e].assigned;
          });
        return Yn(
          "div",
          null,
          Yn("input", {
            type: "checkbox",
            id: e,
            checked: r,
            onChange: function () {
              return n(Ft(e));
            },
          }),
          Yn("label", { htmlFor: e }, e)
        );
      }
      var nr = n("ODXe"),
        rr = l.a.createElement;
      function or() {
        var t = Object(Vn.useTranslation)().i18n,
          e = t.options,
          n = t.language,
          r = null === e || void 0 === e ? void 0 : e.allLanguages,
          o = l.a.useState(n),
          a = Object(nr.a)(o, 2),
          s = a[0],
          u = a[1],
          p = (function () {
            var e = Object(c.a)(
              i.a.mark(function e(n) {
                var r;
                return i.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = n.currentTarget.value),
                            (e.prev = 1),
                            (e.next = 4),
                            t.changeLanguage(r)
                          );
                        case 4:
                          u(r), (e.next = 10);
                          break;
                        case 7:
                          (e.prev = 7), (e.t0 = e.catch(1)), console.warn(e.t0);
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 7]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return r.length
          ? rr(
              dr,
              { title: "Languages", collapsed: !0 },
              rr(
                "select",
                { onChange: p, value: s },
                r.map(function (t) {
                  return rr("option", { key: t, value: t }, t);
                })
              )
            )
          : null;
      }
      n("40A7");
      var ir = l.a.createElement,
        ar = "v1czn2jc";
      function cr() {
        var t = Object(yt.c)(function (t) {
          var e;
          return null === (e = t.variants) || void 0 === e
            ? void 0
            : e._allVariants;
        });
        if (!t) return null;
        var e = Object.keys(t);
        return e.length
          ? ir(
              "div",
              { className: ar },
              ir(
                dr,
                { title: "Variants" },
                e.map(function (e) {
                  return ir(sr, { key: e, title: e, list: t[e] });
                }),
                ir(
                  "button",
                  {
                    onClick: function () {
                      return (
                        e.forEach(function (t) {
                          return Vt.a.removeItem(t);
                        }),
                        window.location.reload(),
                        !1
                      );
                    },
                  },
                  "reset variants"
                )
              )
            )
          : null;
      }
      function sr(t) {
        var e = t.title,
          n = t.list,
          r = Object(yt.b)(),
          o = Object(yt.c)(function (t) {
            return t.variants[e];
          });
        return ir(
          u.Fragment,
          null,
          ir("label", { htmlFor: e }, e),
          ir(
            "select",
            {
              id: e,
              onChange: function (t) {
                var n = t.currentTarget.value;
                r(te(e, n));
              },
              value: o,
            },
            n.map(function (t) {
              return ir("option", { key: t, value: t }, t);
            })
          )
        );
      }
      n("E/eq");
      var ur = l.a.createElement;
      function lr() {
        return ur(dr, { title: "Colors", collapsed: !0 }, ur(de.f, null));
      }
      var pr = l.a.createElement,
        fr = "d1idball";
      function dr(t) {
        var e = t.title,
          n = t.collapsed,
          r = t.children,
          o = Object(u.useState)(n),
          i = o[0],
          a = o[1];
        return pr(
          "div",
          null,
          pr(
            "h6",
            {
              className: "san",
              onClick: function () {
                return a(!i);
              },
            },
            e,
            pr(i ? de.e : de.d, null)
          ),
          i ? null : r
        );
      }
      function hr() {
        var t = Object(yt.b)(),
          e = Object(yt.c)(function (t) {
            return t.app.devMode;
          }),
          n = function () {
            return t(Et());
          };
        return (
          Object(u.useEffect)(function () {
            return (
              Qn.a.bind("q a", n),
              function () {
                return Qn.a.unbind("q a");
              }
            );
          }, []),
          e
            ? pr(
                "div",
                { className: fr },
                pr(tr, null),
                pr(cr, null),
                pr(or, null),
                pr(lr, null)
              )
            : null
        );
      }
      n("0VAw");
      var vr = n("URMD"),
        br = l.a.createElement;
      function yr(t, e) {
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
      function mr(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? yr(Object(n), !0).forEach(function (e) {
                Object(a.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : yr(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var gr = !1;
      function Or(t) {
        var e = t.Component,
          n = t.pageProps,
          r = t.store,
          o = t.err;
        return (
          Object(u.useEffect)(function () {
            var t = r.dispatch,
              e = r.getState().user,
              o = e.user_id,
              i = e.sess_guid;
            !(function () {
              Jn.apply(this, arguments);
            })(),
              gr && t(Object(St.b)()),
              Object(Kn.b)(o, i),
              t(Object(xt.e)());
            var a = n.path;
            zn.a.initialize(It.i),
              zn.a.pageview(a),
              Object($n.injectLibScript)(
                "//a.omappapi.com/app/js/api.min.js",
                [
                  { name: "data-account", value: 58246 },
                  { name: "data-user", value: 51753 },
                ],
                !0
              );
          }, []),
          br(
            yt.a,
            { store: r },
            br(
              de.D,
              null,
              gr ? br(hr, null) : null,
              br(e, Object(s.a)({}, n, { err: o }))
            )
          )
        );
      }
      !(function (t) {
        if (
          (void 0 === t && (t = {}),
          void 0 === t.defaultIntegrations && (t.defaultIntegrations = Gn),
          void 0 === t.release)
        ) {
          var e = Object(ge.f)();
          e.SENTRY_RELEASE &&
            e.SENTRY_RELEASE.id &&
            (t.release = e.SENTRY_RELEASE.id);
        }
        !(function (t, e) {
          !0 === e.debug && me.a.enable();
          var n = Object(ye.a)(),
            r = new t(e);
          n.bindClient(r);
        })(Nn, t);
      })(Xn),
        (Or.getInitialProps = (function () {
          var t = Object(c.a)(
            i.a.mark(function t(e) {
              var n, r, o, a, c, s, u, l, p, f, d, h, v, b;
              return i.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((o = e.Component), (a = e.ctx), o !== vr.default)) {
                        t.next = 3;
                        break;
                      }
                      return t.abrupt("return", { pageProps: {} });
                    case 3:
                      return (
                        (c = a.req),
                        (s = a.res),
                        (u = a.store),
                        (l =
                          c.protocol + "://" + c.get("host") + c.originalUrl),
                        (p = c.originalUrl),
                        (f =
                          null === a || void 0 === a
                            ? void 0
                            : null === (n = a.req) || void 0 === n
                            ? void 0
                            : null === (r = n.headers) || void 0 === r
                            ? void 0
                            : r.cookie),
                        (t.next = 9),
                        Object(St.c)(f)
                      );
                    case 9:
                      return (
                        (d = t.sent) && u.dispatch(Object(St.e)(d)),
                        (t.next = 13),
                        Object(St.a)(f, s)
                      );
                    case 13:
                      return (
                        (h = t.sent) && u.dispatch(Object(St.d)(h)),
                        (t.next = 17),
                        Bt(d, h)
                      );
                    case 17:
                      if (
                        ((v = t.sent) &&
                          u.dispatch(((i = v), { type: Ot.q, hydrate: i })),
                        !o.getInitialProps)
                      ) {
                        t.next = 25;
                        break;
                      }
                      return (t.next = 22), o.getInitialProps(a, d, h, v);
                    case 22:
                      (t.t0 = t.sent), (t.next = 26);
                      break;
                    case 25:
                      t.t0 = {};
                    case 26:
                      return (
                        (b = t.t0),
                        t.abrupt("return", {
                          pageProps: mr(mr({}, b), {}, { url: l, path: p }),
                        })
                      );
                    case 28:
                    case "end":
                      return t.stop();
                  }
                var i;
              }, t);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })());
      e.default = (function (t, e) {
        var n = f(f({}, b), e),
          r = "undefined" === typeof window,
          o = function (o) {
            var i = o.initialState,
              a = o.ctx,
              c = n.storeKey,
              s = function () {
                return t(
                  n.deserializeState(i),
                  f(f(f({}, a), e), { isServer: r })
                );
              };
            return r ? s() : (c in window || (window[c] = s()), window[c]);
          };
        return function (t) {
          var e;
          return (
            ((e = (function (e) {
              function r(t, r) {
                var i = e.call(this, t, r) || this,
                  a = t.initialState;
                return (
                  n.debug &&
                    console.log(
                      "4. WrappedApp.render created new store with initialState",
                      a
                    ),
                  (i.store = o({ ctx: r.ctx, initialState: a })),
                  i
                );
              }
              return (
                p(r, e),
                (r.prototype.render = function () {
                  var e = this.props,
                    n = e.initialProps,
                    r =
                      (e.initialState, v(e, ["initialProps", "initialState"]));
                  return u.createElement(t, f({}, r, n, { store: this.store }));
                }),
                r
              );
            })(u.Component)).displayName =
              "withRedux(" + (t.displayName || t.name || "App") + ")"),
            (e.getInitialProps = function (e) {
              return d(void 0, void 0, void 0, function () {
                var i, a;
                return h(this, function (c) {
                  switch (c.label) {
                    case 0:
                      if (!e) throw new Error("No app context");
                      if (!e.ctx) throw new Error("No page context");
                      return (
                        (i = o({ ctx: e.ctx })),
                        n.debug &&
                          console.log(
                            "1. WrappedApp.getInitialProps wrapper got the store with state",
                            i.getState()
                          ),
                        (e.ctx.store = i),
                        (e.ctx.isServer = r),
                        (a = {}),
                        "getInitialProps" in t
                          ? [4, t.getInitialProps.call(t, e)]
                          : [3, 2]
                      );
                    case 1:
                      (a = c.sent()), (c.label = 2);
                    case 2:
                      return (
                        n.debug &&
                          console.log(
                            "3. WrappedApp.getInitialProps has store state",
                            i.getState()
                          ),
                        [
                          2,
                          {
                            isServer: r,
                            initialState: r
                              ? n.serializeState(i.getState())
                              : i.getState(),
                            initialProps: a,
                          },
                        ]
                      );
                  }
                });
              });
            }),
            e
          );
        };
      })(fe)(bt(Object(Vn.appWithTranslation)(Or)));
    },
    N3Vr: function (t, e, n) {
      "use strict";
      (function (t) {
        n.d(e, "d", function () {
          return d;
        }),
          n.d(e, "b", function () {
            return h;
          }),
          n.d(e, "c", function () {
            return v;
          }),
          n.d(e, "f", function () {
            return b;
          }),
          n.d(e, "a", function () {
            return y;
          }),
          n.d(e, "e", function () {
            return m;
          });
        var r,
          o,
          i,
          a,
          c = n("rePB"),
          s = n("AvZB");
        function u(t, e) {
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
        function l(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? u(Object(n), !0).forEach(function (e) {
                  Object(c.a)(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : u(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        var p =
            null === (r = t) || void 0 === r
              ? void 0
              : null === (o = r.location) || void 0 === o
              ? void 0
              : o.pathname.match(/\/explore\/(.*)(\?.*)?/),
          f = {
            view: "web",
            section: "topics",
            page:
              null === (i = t) || void 0 === i
                ? void 0
                : null === (a = i.location) || void 0 === a
                ? void 0
                : a.pathname,
            extra_content: !!p && p[1],
          };
        function d() {
          Object(s.a)(l(l({}, f), {}, { type_id: "view" }));
        }
        function h(t) {
          Object(s.a)(
            l(l({}, f), {}, { cxt_item_position: t, type_id: "view" })
          );
        }
        function v(t) {
          Object(s.a)(
            l(
              l({}, f),
              {},
              {
                identifier: "click_item",
                type_id: "click",
                cxt_item_position: t,
              }
            )
          );
        }
        function b(t) {
          Object(s.a)(
            l(
              l({}, f),
              {},
              {
                cxt_item_position: t,
                identifier: "click_save",
                type_id: "click",
              }
            )
          );
        }
        function y(t) {
          return l(l({}, f), {}, { cxt_item_position: t });
        }
        function m(t, e, n) {
          var r,
            o = Number.isInteger(e) ? e + 1 : void 0;
          switch (n) {
            case "right-rail-topics":
              r = 1;
              break;
            case "page-bottom-topics":
              r = 2;
          }
          Object(s.a)(
            l(
              l({}, f),
              {},
              {
                identifier: "click_topic",
                type_id: "click",
                extra_int_data: r,
                cxt_item_position: o,
                extra_content: t,
              }
            )
          );
        }
      }.call(this, n("yLpj")));
    },
    aOfi: function (t, e, n) {
      "use strict";
      n.d(e, "c", function () {
        return _;
      }),
        n.d(e, "d", function () {
          return j;
        }),
        n.d(e, "g", function () {
          return w;
        }),
        n.d(e, "e", function () {
          return k;
        }),
        n.d(e, "f", function () {
          return x;
        }),
        n.d(e, "b", function () {
          return D;
        }),
        n.d(e, "a", function () {
          return U;
        });
      var r = n("KQm4"),
        o = n("HaE+"),
        i = n("o0o1"),
        a = n.n(i),
        c = n("rePB"),
        s = n("5rFJ"),
        u = n("Jzha"),
        l = n("2XjZ");
      function p(t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20;
        return Object(l.a)({
          path: "/discover/search",
          data: { q: t, count: e },
        });
      }
      var f = n("N3Vr"),
        d = n("gZI1"),
        h = n("WHGu"),
        v = n("NOLZ"),
        b = a.a.mark(S),
        y = a.a.mark(P),
        m = a.a.mark(I);
      function g(t, e) {
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
      function O(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? g(Object(n), !0).forEach(function (e) {
                Object(c.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : g(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var _ = function (t) {
          return { type: v.T, hydrated: t };
        },
        j = function (t, e, n) {
          return { type: v.U, id: t, url: e, position: n };
        },
        w = function (t) {
          return { type: v.V, id: t };
        },
        E = { searchItems: [], curatedItems: [], algorithmicItems: [] },
        k = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : E,
            e = arguments.length > 1 ? arguments[1] : void 0;
          switch (e.type) {
            case v.S:
              var n = e.items,
                r = e.itemsById;
              return O(O({}, t), {}, { items: n, itemsById: r });
            case v.Q:
              var o = e.error;
              return O(O({}, t), {}, { error: o });
            case v.T:
              var i = e.hydrated;
              return O(O({}, t), i);
            default:
              return t;
          }
        },
        x = [Object(s.d)(v.R, S), Object(s.c)(v.U, P), Object(s.c)(v.V, I)];
      function S() {
        var t, e, n;
        return a.a.wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (r.prev = 0), (r.next = 3), D();
                case 3:
                  return (
                    (t = r.sent),
                    (e = t.items),
                    (n = t.itemsById),
                    (r.next = 8),
                    Object(s.b)({ type: v.S, items: e, itemsById: n })
                  );
                case 8:
                  r.next = 14;
                  break;
                case 10:
                  return (
                    (r.prev = 10),
                    (r.t0 = r.catch(0)),
                    (r.next = 14),
                    Object(s.b)({ type: v.Q, error: r.t0 })
                  );
                case 14:
                case "end":
                  return r.stop();
              }
          },
          b,
          null,
          [[0, 10]]
        );
      }
      function P(t) {
        var e, n, r, o;
        return a.a.wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                return (
                  (e = t.url),
                  (n = t.id),
                  (r = t.position),
                  (o = Object(f.a)(r)),
                  (i.next = 4),
                  Object(s.b)({ type: v.u, id: n, url: e, analytics: o })
                );
              case 4:
              case "end":
                return i.stop();
            }
        }, y);
      }
      function I(t) {
        var e;
        return a.a.wrap(function (n) {
          for (;;)
            switch ((n.prev = n.next)) {
              case 0:
                return (
                  (e = t.id), (n.next = 3), Object(s.b)({ type: v.x, id: e })
                );
              case 3:
              case "end":
                return n.stop();
            }
        }, m);
      }
      var T = function (t) {
        return t.resolved_id;
      };
      function D(t, e) {
        return R.apply(this, arguments);
      }
      function R() {
        return (R = Object(o.a)(
          a.a.mark(function t(e, n) {
            var o, i, c, s, l, p, f, v, b, y, m, g, O;
            return a.a.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((t.prev = 0), !n)) {
                        t.next = 7;
                        break;
                      }
                      return (t.next = 4), Object(u.a)(e, 30, 0);
                    case 4:
                      (t.t0 = t.sent), (t.next = 10);
                      break;
                    case 7:
                      return (t.next = 9), Object(u.a)(e, 5, 25);
                    case 9:
                      t.t0 = t.sent;
                    case 10:
                      return (
                        (o = t.t0),
                        (i = o.curated),
                        (c = void 0 === i ? [] : i),
                        (t.next = 14),
                        Object(d.a)(c)
                      );
                    case 14:
                      return (
                        (s = t.sent),
                        (l = s.map(T)),
                        (p = Object(r.a)(new Set(l))),
                        (f = Object(h.a)(s, "resolved_id")),
                        (v = o.algorithmic),
                        (b = void 0 === v ? [] : v),
                        (t.next = 21),
                        Object(d.a)(b)
                      );
                    case 21:
                      return (
                        (y = t.sent),
                        (m = y.map(T)),
                        (g = Object(r.a)(new Set(m))),
                        (O = Object(h.a)(y, "resolved_id")),
                        t.abrupt("return", {
                          curatedItems: p,
                          curatedItemsById: f,
                          algorithmicItems: g,
                          algorithmicItemsById: O,
                        })
                      );
                    case 28:
                      return (
                        (t.prev = 28),
                        (t.t1 = t.catch(0)),
                        console.log("topic-pages.topic-data.state", t.t1),
                        t.abrupt("return", !1)
                      );
                    case 32:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[0, 28]]
            );
          })
        )).apply(this, arguments);
      }
      function U(t) {
        return C.apply(this, arguments);
      }
      function C() {
        return (C = Object(o.a)(
          a.a.mark(function t(e) {
            var n, o, i, c, s, u, l;
            return a.a.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.prev = 0), (t.next = 3), p(e);
                    case 3:
                      return (
                        (n = t.sent),
                        (o = n.results),
                        (i = void 0 === o ? [] : o),
                        (t.next = 7),
                        Object(d.a)(i)
                      );
                    case 7:
                      return (
                        (c = t.sent),
                        (s = c.map(T)),
                        (u = Object(r.a)(new Set(s))),
                        (l = Object(h.a)(c, "resolved_id")),
                        t.abrupt("return", {
                          searchItems: u,
                          searchItemsById: l,
                        })
                      );
                    case 14:
                      return (
                        (t.prev = 14),
                        (t.t0 = t.catch(0)),
                        console.log("topic-pages.topic-data.state", t.t0),
                        t.abrupt("return", !1)
                      );
                    case 18:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[0, 14]]
            );
          })
        )).apply(this, arguments);
      }
    },
    imBb: function (t, e, n) {
      var r;
      !(function (o, i, a) {
        if (o) {
          for (
            var c,
              s = {
                8: "backspace",
                9: "tab",
                13: "enter",
                16: "shift",
                17: "ctrl",
                18: "alt",
                20: "capslock",
                27: "esc",
                32: "space",
                33: "pageup",
                34: "pagedown",
                35: "end",
                36: "home",
                37: "left",
                38: "up",
                39: "right",
                40: "down",
                45: "ins",
                46: "del",
                91: "meta",
                93: "meta",
                224: "meta",
              },
              u = {
                106: "*",
                107: "+",
                109: "-",
                110: ".",
                111: "/",
                186: ";",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'",
              },
              l = {
                "~": "`",
                "!": "1",
                "@": "2",
                "#": "3",
                $: "4",
                "%": "5",
                "^": "6",
                "&": "7",
                "*": "8",
                "(": "9",
                ")": "0",
                _: "-",
                "+": "=",
                ":": ";",
                '"': "'",
                "<": ",",
                ">": ".",
                "?": "/",
                "|": "\\",
              },
              p = {
                option: "alt",
                command: "meta",
                return: "enter",
                escape: "esc",
                plus: "+",
                mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform)
                  ? "meta"
                  : "ctrl",
              },
              f = 1;
            f < 20;
            ++f
          )
            s[111 + f] = "f" + f;
          for (f = 0; f <= 9; ++f) s[f + 96] = f.toString();
          (m.prototype.bind = function (t, e, n) {
            return (
              (t = t instanceof Array ? t : [t]),
              this._bindMultiple.call(this, t, e, n),
              this
            );
          }),
            (m.prototype.unbind = function (t, e) {
              return this.bind.call(this, t, function () {}, e);
            }),
            (m.prototype.trigger = function (t, e) {
              return (
                this._directMap[t + ":" + e] &&
                  this._directMap[t + ":" + e]({}, t),
                this
              );
            }),
            (m.prototype.reset = function () {
              return (this._callbacks = {}), (this._directMap = {}), this;
            }),
            (m.prototype.stopCallback = function (t, e) {
              if ((" " + e.className + " ").indexOf(" mousetrap ") > -1)
                return !1;
              if (
                (function t(e, n) {
                  return (
                    null !== e && e !== i && (e === n || t(e.parentNode, n))
                  );
                })(e, this.target)
              )
                return !1;
              if ("composedPath" in t && "function" === typeof t.composedPath) {
                var n = t.composedPath()[0];
                n !== t.target && (e = n);
              }
              return (
                "INPUT" == e.tagName ||
                "SELECT" == e.tagName ||
                "TEXTAREA" == e.tagName ||
                e.isContentEditable
              );
            }),
            (m.prototype.handleKey = function () {
              var t = this;
              return t._handleKey.apply(t, arguments);
            }),
            (m.addKeycodes = function (t) {
              for (var e in t) t.hasOwnProperty(e) && (s[e] = t[e]);
              c = null;
            }),
            (m.init = function () {
              var t = m(i);
              for (var e in t)
                "_" !== e.charAt(0) &&
                  (m[e] = (function (e) {
                    return function () {
                      return t[e].apply(t, arguments);
                    };
                  })(e));
            }),
            m.init(),
            (o.Mousetrap = m),
            t.exports && (t.exports = m),
            void 0 ===
              (r = function () {
                return m;
              }.call(e, n, e, t)) || (t.exports = r);
        }
        function d(t, e, n) {
          t.addEventListener
            ? t.addEventListener(e, n, !1)
            : t.attachEvent("on" + e, n);
        }
        function h(t) {
          if ("keypress" == t.type) {
            var e = String.fromCharCode(t.which);
            return t.shiftKey || (e = e.toLowerCase()), e;
          }
          return s[t.which]
            ? s[t.which]
            : u[t.which]
            ? u[t.which]
            : String.fromCharCode(t.which).toLowerCase();
        }
        function v(t) {
          return "shift" == t || "ctrl" == t || "alt" == t || "meta" == t;
        }
        function b(t, e, n) {
          return (
            n ||
              (n = (function () {
                if (!c)
                  for (var t in ((c = {}), s))
                    (t > 95 && t < 112) ||
                      (s.hasOwnProperty(t) && (c[s[t]] = t));
                return c;
              })()[t]
                ? "keydown"
                : "keypress"),
            "keypress" == n && e.length && (n = "keydown"),
            n
          );
        }
        function y(t, e) {
          var n,
            r,
            o,
            i = [];
          for (
            n = (function (t) {
              return "+" === t
                ? ["+"]
                : (t = t.replace(/\+{2}/g, "+plus")).split("+");
            })(t),
              o = 0;
            o < n.length;
            ++o
          )
            (r = n[o]),
              p[r] && (r = p[r]),
              e && "keypress" != e && l[r] && ((r = l[r]), i.push("shift")),
              v(r) && i.push(r);
          return { key: r, modifiers: i, action: (e = b(r, i, e)) };
        }
        function m(t) {
          var e = this;
          if (((t = t || i), !(e instanceof m))) return new m(t);
          (e.target = t), (e._callbacks = {}), (e._directMap = {});
          var n,
            r = {},
            o = !1,
            a = !1,
            c = !1;
          function s(t) {
            t = t || {};
            var e,
              n = !1;
            for (e in r) t[e] ? (n = !0) : (r[e] = 0);
            n || (c = !1);
          }
          function u(t, n, o, i, a, c) {
            var s,
              u,
              l,
              p,
              f = [],
              d = o.type;
            if (!e._callbacks[t]) return [];
            for (
              "keyup" == d && v(t) && (n = [t]), s = 0;
              s < e._callbacks[t].length;
              ++s
            )
              if (
                ((u = e._callbacks[t][s]),
                (i || !u.seq || r[u.seq] == u.level) &&
                  d == u.action &&
                  (("keypress" == d && !o.metaKey && !o.ctrlKey) ||
                    ((l = n),
                    (p = u.modifiers),
                    l.sort().join(",") === p.sort().join(","))))
              ) {
                var h = !i && u.combo == a,
                  b = i && u.seq == i && u.level == c;
                (h || b) && e._callbacks[t].splice(s, 1), f.push(u);
              }
            return f;
          }
          function l(t, n, r, o) {
            e.stopCallback(n, n.target || n.srcElement, r, o) ||
              (!1 === t(n, r) &&
                ((function (t) {
                  t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
                })(n),
                (function (t) {
                  t.stopPropagation
                    ? t.stopPropagation()
                    : (t.cancelBubble = !0);
                })(n)));
          }
          function p(t) {
            "number" !== typeof t.which && (t.which = t.keyCode);
            var n = h(t);
            n &&
              ("keyup" != t.type || o !== n
                ? e.handleKey(
                    n,
                    (function (t) {
                      var e = [];
                      return (
                        t.shiftKey && e.push("shift"),
                        t.altKey && e.push("alt"),
                        t.ctrlKey && e.push("ctrl"),
                        t.metaKey && e.push("meta"),
                        e
                      );
                    })(t),
                    t
                  )
                : (o = !1));
          }
          function f(t, e, i, a) {
            function u(e) {
              return function () {
                (c = e), ++r[t], clearTimeout(n), (n = setTimeout(s, 1e3));
              };
            }
            function p(e) {
              l(i, e, t), "keyup" !== a && (o = h(e)), setTimeout(s, 10);
            }
            r[t] = 0;
            for (var f = 0; f < e.length; ++f) {
              var d = f + 1 === e.length ? p : u(a || y(e[f + 1]).action);
              b(e[f], d, a, t, f);
            }
          }
          function b(t, n, r, o, i) {
            e._directMap[t + ":" + r] = n;
            var a,
              c = (t = t.replace(/\s+/g, " ")).split(" ");
            c.length > 1
              ? f(t, c, n, r)
              : ((a = y(t, r)),
                (e._callbacks[a.key] = e._callbacks[a.key] || []),
                u(a.key, a.modifiers, { type: a.action }, o, t, i),
                e._callbacks[a.key][o ? "unshift" : "push"]({
                  callback: n,
                  modifiers: a.modifiers,
                  action: a.action,
                  seq: o,
                  level: i,
                  combo: t,
                }));
          }
          (e._handleKey = function (t, e, n) {
            var r,
              o = u(t, e, n),
              i = {},
              p = 0,
              f = !1;
            for (r = 0; r < o.length; ++r)
              o[r].seq && (p = Math.max(p, o[r].level));
            for (r = 0; r < o.length; ++r)
              if (o[r].seq) {
                if (o[r].level != p) continue;
                (f = !0),
                  (i[o[r].seq] = 1),
                  l(o[r].callback, n, o[r].combo, o[r].seq);
              } else f || l(o[r].callback, n, o[r].combo);
            var d = "keypress" == n.type && a;
            n.type != c || v(t) || d || s(i), (a = f && "keydown" == n.type);
          }),
            (e._bindMultiple = function (t, e, n) {
              for (var r = 0; r < t.length; ++r) b(t[r], e, n);
            }),
            d(t, "keypress", p),
            d(t, "keydown", p),
            d(t, "keyup", p);
        }
      })(
        "undefined" !== typeof window ? window : null,
        "undefined" !== typeof window ? document : null
      );
    },
    lh8U: function (t, e, n) {
      "use strict";
      n.d(e, "j", function () {
        return u;
      }),
        n.d(e, "i", function () {
          return l;
        }),
        n.d(e, "a", function () {
          return p;
        }),
        n.d(e, "o", function () {
          return f;
        }),
        n.d(e, "h", function () {
          return d;
        }),
        n.d(e, "n", function () {
          return h;
        }),
        n.d(e, "b", function () {
          return v;
        }),
        n.d(e, "c", function () {
          return b;
        }),
        n.d(e, "d", function () {
          return y;
        }),
        n.d(e, "f", function () {
          return m;
        }),
        n.d(e, "e", function () {
          return g;
        }),
        n.d(e, "g", function () {
          return O;
        }),
        n.d(e, "m", function () {
          return _;
        }),
        n.d(e, "l", function () {
          return j;
        }),
        n.d(e, "k", function () {
          return w;
        });
      var r = n("rePB"),
        o = n("0b+E"),
        i = n("AvZB");
      function a(t, e) {
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
      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? a(Object(n), !0).forEach(function (e) {
                Object(r.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var s = { view: "web", section: "explore", page: "/explore/" };
      function u() {
        Object(i.a)(c(c({}, s), {}, { type_id: "view" }));
      }
      function l(t) {
        Object(i.a)(
          c(
            c({}, s),
            {},
            { identifier: "click_item", type_id: "click", cxt_item_position: t }
          )
        );
      }
      function p(t) {
        return c(c({}, s), {}, { cxt_item_position: t });
      }
      function f(t) {
        Object(i.a)(
          c(
            c({}, s),
            {},
            { cxt_item_position: t, identifier: "click_save", type_id: "click" }
          )
        );
      }
      function d(t) {
        Object(i.a)(c(c({}, s), {}, { cxt_item_position: t, type_id: "view" }));
      }
      function h(t, e, n) {
        var r,
          o = Number.isInteger(e) ? e + 1 : void 0;
        switch (n) {
          case "page-top-topics":
            r = 1;
            break;
          case "page-bottom-topics":
            r = 2;
        }
        Object(i.a)(
          c(
            c({}, s),
            {},
            {
              identifier: "click_topic",
              type_id: "click",
              extra_int_data: r,
              cxt_item_position: o,
              extra_content: t,
            }
          )
        );
      }
      function v(t) {
        Object(i.a)(
          c(
            c({}, s),
            {},
            {
              action: "pv_wt",
              identifier: "newsletter_email",
              type_id: "view",
              extra_content: t,
            }
          )
        );
      }
      function b(t) {
        Object(i.a)(
          c(
            c({}, s),
            {},
            {
              action: "pv_wt",
              identifier: "newsletter_email_focus",
              type_id: "click",
              extra_content: t,
            }
          )
        );
      }
      function y(t) {
        Object(i.a)(
          c(
            c({}, s),
            {},
            {
              action: "pv_wt",
              identifier: "newsletter_email_submit",
              type_id: "click",
              extra_content: t,
            }
          )
        );
      }
      function m(t) {
        Object(i.a)(
          c(
            c({}, s),
            {},
            {
              action: "pv_wt",
              identifier: "newsletter_email_success",
              type_id: "interact",
              extra_content: t,
            }
          )
        ),
          o.a.event({
            category: "Explore",
            action: "Newsletter Signup",
            label: "Pocket Hits",
            value: 1,
            nonInteraction: !1,
          });
      }
      function g(t) {
        Object(i.a)(
          c(
            c({}, s),
            {},
            {
              action: "pv_wt",
              identifier: "newsletter_email_error_submission",
              type_id: "interact",
              extra_content: t,
            }
          )
        );
      }
      function O(t) {
        Object(i.a)(
          c(
            c({}, s),
            {},
            {
              action: "pv_wt",
              identifier: "newsletter_email_error_validation",
              type_id: "interact",
              extra_content: t,
            }
          )
        );
      }
      function _() {
        Object(i.a)(
          c(
            c({}, s),
            {},
            {
              action: "pv_wt",
              identifier: "signup_callout_impression",
              type_id: "view",
            }
          )
        );
      }
      function j() {
        Object(i.a)(
          c(
            c({}, s),
            {},
            {
              action: "pv_wt",
              identifier: "signup_callout_dismiss",
              type_id: "click",
            }
          )
        );
      }
      function w() {
        Object(i.a)(
          c(
            c({}, s),
            {},
            {
              action: "pv_wt",
              identifier: "signup_callout_complete",
              type_id: "click",
            }
          )
        );
      }
    },
    sO2H: function (t, e, n) {
      "use strict";
      n.d(e, "d", function () {
        return g;
      }),
        n.d(e, "e", function () {
          return O;
        }),
        n.d(e, "f", function () {
          return _;
        }),
        n.d(e, "a", function () {
          return w;
        }),
        n.d(e, "b", function () {
          return E;
        }),
        n.d(e, "c", function () {
          return P;
        });
      var r = n("HaE+"),
        o = n("o0o1"),
        i = n.n(o),
        a = n("rePB"),
        c = n("5rFJ"),
        s = n("2XjZ"),
        u = function () {
          return Object(s.a)({ path: "/discover", data: { count: 20 } });
        },
        l = n("lh8U"),
        p = n("gZI1"),
        f = n("WHGu"),
        d = n("NOLZ"),
        h = i.a.mark(k),
        v = i.a.mark(x),
        b = i.a.mark(S);
      function y(t, e) {
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
      function m(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? y(Object(n), !0).forEach(function (e) {
                Object(a.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : y(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var g = function (t) {
          return { type: d.n, hydrated: t };
        },
        O = function (t, e, n) {
          return { type: d.o, id: t, url: e, position: n };
        },
        _ = function (t) {
          return { type: d.p, id: t };
        },
        j = { items: [], itemsById: {} },
        w = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : j,
            e = arguments.length > 1 ? arguments[1] : void 0;
          switch (e.type) {
            case d.m:
              var n = e.items,
                r = e.itemsById;
              return m(m({}, t), {}, { items: n, itemsById: r });
            case d.k:
              var o = e.error;
              return m(m({}, t), {}, { error: o });
            case d.n:
              var i = e.hydrated;
              return m(m({}, t), i);
            default:
              return t;
          }
        },
        E = [Object(c.d)(d.l, k), Object(c.c)(d.o, x), Object(c.c)(d.p, S)];
      function k() {
        var t, e, n;
        return i.a.wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (r.prev = 0), (r.next = 3), P();
                case 3:
                  return (
                    (t = r.sent),
                    (e = t.items),
                    (n = t.itemsById),
                    (r.next = 8),
                    Object(c.b)({ type: d.m, items: e, itemsById: n })
                  );
                case 8:
                  r.next = 14;
                  break;
                case 10:
                  return (
                    (r.prev = 10),
                    (r.t0 = r.catch(0)),
                    (r.next = 14),
                    Object(c.b)({ type: d.k, error: r.t0 })
                  );
                case 14:
                case "end":
                  return r.stop();
              }
          },
          h,
          null,
          [[0, 10]]
        );
      }
      function x(t) {
        var e, n, r, o;
        return i.a.wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                return (
                  (e = t.url),
                  (n = t.id),
                  (r = t.position),
                  (o = Object(l.a)(r)),
                  (i.next = 4),
                  Object(c.b)({ type: d.u, id: n, url: e, analytics: o })
                );
              case 4:
              case "end":
                return i.stop();
            }
        }, v);
      }
      function S(t) {
        var e;
        return i.a.wrap(function (n) {
          for (;;)
            switch ((n.prev = n.next)) {
              case 0:
                return (
                  (e = t.id), (n.next = 3), Object(c.b)({ type: d.x, id: e })
                );
              case 3:
              case "end":
                return n.stop();
            }
        }, b);
      }
      function P() {
        return I.apply(this, arguments);
      }
      function I() {
        return (I = Object(r.a)(
          i.a.mark(function t() {
            var e, n, r, o;
            return i.a.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.prev = 0), (t.next = 3), u();
                    case 3:
                      return (e = t.sent), (t.next = 6), Object(p.a)(e.feed);
                    case 6:
                      return (
                        (n = t.sent),
                        (r = n.map(function (t) {
                          return t.resolved_id;
                        })),
                        (o = Object(f.a)(n, "resolved_id")),
                        t.abrupt("return", { items: r, itemsById: o })
                      );
                    case 12:
                      (t.prev = 12),
                        (t.t0 = t.catch(0)),
                        console.log("explore.state", t.t0);
                    case 15:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[0, 12]]
            );
          })
        )).apply(this, arguments);
      }
    },
    wCA9: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var r = (function () {
        function t() {
          (this._hasWeakSet = "function" === typeof WeakSet),
            (this._inner = this._hasWeakSet ? new WeakSet() : []);
        }
        return (
          (t.prototype.memoize = function (t) {
            if (this._hasWeakSet)
              return !!this._inner.has(t) || (this._inner.add(t), !1);
            for (var e = 0; e < this._inner.length; e++) {
              if (this._inner[e] === t) return !0;
            }
            return this._inner.push(t), !1;
          }),
          (t.prototype.unmemoize = function (t) {
            if (this._hasWeakSet) this._inner.delete(t);
            else
              for (var e = 0; e < this._inner.length; e++)
                if (this._inner[e] === t) {
                  this._inner.splice(e, 1);
                  break;
                }
          }),
          t
        );
      })();
    },
  },
  [[0, 2, 3, 4, 1, 5, 6, 7, 8, 9, 11, 15, 16, 0]],
]);
//# sourceMappingURL=_app-e5c1ac1387e9c399b60a.js.map
