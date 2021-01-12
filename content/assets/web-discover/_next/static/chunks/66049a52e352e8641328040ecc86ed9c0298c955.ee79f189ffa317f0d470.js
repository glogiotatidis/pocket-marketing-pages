(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [16],
  {
    "514G": function (e, r, t) {
      "use strict";
      t.d(r, "e", function () {
        return N;
      }),
        t.d(r, "b", function () {
          return S;
        }),
        t.d(r, "d", function () {
          return _;
        }),
        t.d(r, "f", function () {
          return E;
        }),
        t.d(r, "g", function () {
          return P;
        }),
        t.d(r, "c", function () {
          return A;
        }),
        t.d(r, "a", function () {
          return D;
        });
      var n = t("HaE+"),
        a = t("o0o1"),
        c = t.n(a),
        s = t("rePB"),
        o = t("5rFJ"),
        u = t("NOLZ"),
        i = t("cr+I"),
        p = t.n(i),
        f = t("mjZG"),
        l = t("2XjZ"),
        b = t("vcXL"),
        d = t.n(b),
        y = (function () {
          var e = Object(n.a)(
            c.a.mark(function e() {
              return c.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        Object(l.a)({ path: "/guid" }).then(function (e) {
                          return e.guid;
                        })
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        j = function (e) {
          var r = { hash: "9dJDjsla49la", consumer_key: f.g, enable_cors: 1 },
            t = p.a.stringify(r),
            n = "".concat(f.a, "/getuser?").concat(t);
          return d()(n, {
            method: "GET",
            credentials: "include",
            headers: { Cookie: e, Origin: "https://getpocket.com" },
          })
            .then(g)
            .then(O)
            .then(function (e) {
              return e.json();
            });
        },
        m = function () {
          return Object(l.b)({
            path: "/getuser",
            data: { hash: "9dJDjsla49la" },
          });
        };
      function g(e) {
        return e.ok ? e : Promise.reject(e);
      }
      function O(e) {
        return e.headers.get("x-error") ? Promise.reject(e) : e;
      }
      var h = t("WHGu"),
        v = c.a.mark(I),
        k = c.a.mark($);
      function x(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function w(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? x(Object(t), !0).forEach(function (r) {
                Object(s.a)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      var F = { auth: !1, sess_guid: null },
        N = function (e) {
          return { type: u.Y, hydrate: e };
        },
        S = function () {
          return { type: u.W };
        },
        _ = function (e) {
          return { type: u.I, sess_guid: e };
        },
        E = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : F,
            r = arguments.length > 1 ? arguments[1] : void 0;
          switch (r.type) {
            case u.Y:
              var t = r.hydrate;
              return w(w(w({}, e), t), {}, { auth: !0 });
            case u.ab:
              var n = r.user;
              return w(w(w({}, e), n), {}, { auth: !0 });
            case u.X:
              return w(w({}, e), {}, { auth: !1 });
            case u.I:
              var a = r.sess_guid;
              return w(w({}, e), {}, { sess_guid: a });
            default:
              return e;
          }
        },
        P = [Object(o.d)(u.Z, I), Object(o.d)(u.W, $)];
      function I() {
        var e, r;
        return c.a.wrap(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.prev = 0), (t.next = 3), D();
                case 3:
                  return (e = t.sent), (t.next = 6), A();
                case 6:
                  if (((r = t.sent), !e)) {
                    t.next = 10;
                    break;
                  }
                  return (
                    (t.next = 10), Object(o.b)({ type: u.J, sess_guid: e })
                  );
                case 10:
                  if (!r) {
                    t.next = 14;
                    break;
                  }
                  return (t.next = 13), Object(o.b)({ type: u.ab, user: r });
                case 13:
                  return t.abrupt("return", t.sent);
                case 14:
                  return (
                    (t.next = 16),
                    Object(o.b)({ type: u.X, error: "User not authenticated" })
                  );
                case 16:
                  t.next = 22;
                  break;
                case 18:
                  return (
                    (t.prev = 18),
                    (t.t0 = t.catch(0)),
                    (t.next = 22),
                    Object(o.b)({ type: u.X, error: t.t0 })
                  );
                case 22:
                case "end":
                  return t.stop();
              }
          },
          v,
          null,
          [[0, 18]]
        );
      }
      function $() {
        var e, r;
        return c.a.wrap(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.prev = 0), (t.next = 3), m();
                case 3:
                  if (((e = t.sent), !(r = e.user))) {
                    t.next = 9;
                    break;
                  }
                  return (t.next = 8), Object(o.b)({ type: u.ab, user: r });
                case 8:
                  return t.abrupt("return", t.sent);
                case 9:
                  return (
                    (t.next = 11),
                    Object(o.b)({ type: u.X, error: "User not authenticated" })
                  );
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  return (
                    (t.prev = 13),
                    (t.t0 = t.catch(0)),
                    (t.next = 17),
                    Object(o.b)({ type: u.X, error: t.t0 })
                  );
                case 17:
                case "end":
                  return t.stop();
              }
          },
          k,
          null,
          [[0, 13]]
        );
      }
      function A(e) {
        return X.apply(this, arguments);
      }
      function X() {
        return (X = Object(n.a)(
          c.a.mark(function e(r) {
            var t, n;
            return c.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), j(r);
                    case 3:
                      return (t = e.sent), (n = t.user), e.abrupt("return", n);
                    case 8:
                      return (
                        (e.prev = 8),
                        (e.t0 = e.catch(0)),
                        e.abrupt("return", !1)
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
      function D(e, r) {
        return J.apply(this, arguments);
      }
      function J() {
        return (J = Object(n.a)(
          c.a.mark(function e(r, t) {
            var n, a;
            return c.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((n = Object(h.f)("sess_guid", r)), (e.t0 = n), e.t0)) {
                      e.next = 6;
                      break;
                    }
                    return (e.next = 5), y();
                  case 5:
                    e.t0 = e.sent;
                  case 6:
                    return (
                      (a = e.t0),
                      n ||
                        t.cookie("sess_guid", a, {
                          domain: "getpocket.com",
                          samesite: "lax",
                          expires: "Wed, 24-Aug-2033 19:33:21 GMT",
                          path: "/",
                          maxAge: 47304e4,
                          httpOnly: !0,
                        }),
                      e.abrupt("return", a)
                    );
                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
    },
    "cr+I": function (e, r, t) {
      "use strict";
      const n = t("ZFOp"),
        a = t("8jRI"),
        c = t("8yz6");
      function s(e) {
        if ("string" !== typeof e || 1 !== e.length)
          throw new TypeError(
            "arrayFormatSeparator must be single character string"
          );
      }
      function o(e, r) {
        return r.encode ? (r.strict ? n(e) : encodeURIComponent(e)) : e;
      }
      function u(e, r) {
        return r.decode ? a(e) : e;
      }
      function i(e) {
        const r = e.indexOf("#");
        return -1 !== r && (e = e.slice(0, r)), e;
      }
      function p(e) {
        const r = (e = i(e)).indexOf("?");
        return -1 === r ? "" : e.slice(r + 1);
      }
      function f(e, r) {
        return (
          r.parseNumbers &&
          !Number.isNaN(Number(e)) &&
          "string" === typeof e &&
          "" !== e.trim()
            ? (e = Number(e))
            : !r.parseBooleans ||
              null === e ||
              ("true" !== e.toLowerCase() && "false" !== e.toLowerCase()) ||
              (e = "true" === e.toLowerCase()),
          e
        );
      }
      function l(e, r) {
        s(
          (r = Object.assign(
            {
              decode: !0,
              sort: !0,
              arrayFormat: "none",
              arrayFormatSeparator: ",",
              parseNumbers: !1,
              parseBooleans: !1,
            },
            r
          )).arrayFormatSeparator
        );
        const t = (function (e) {
            let r;
            switch (e.arrayFormat) {
              case "index":
                return (e, t, n) => {
                  (r = /\[(\d*)\]$/.exec(e)),
                    (e = e.replace(/\[\d*\]$/, "")),
                    r
                      ? (void 0 === n[e] && (n[e] = {}), (n[e][r[1]] = t))
                      : (n[e] = t);
                };
              case "bracket":
                return (e, t, n) => {
                  (r = /(\[\])$/.exec(e)),
                    (e = e.replace(/\[\]$/, "")),
                    r
                      ? void 0 !== n[e]
                        ? (n[e] = [].concat(n[e], t))
                        : (n[e] = [t])
                      : (n[e] = t);
                };
              case "comma":
              case "separator":
                return (r, t, n) => {
                  const a =
                    "string" === typeof t &&
                    t.split("").indexOf(e.arrayFormatSeparator) > -1
                      ? t.split(e.arrayFormatSeparator).map((r) => u(r, e))
                      : null === t
                      ? t
                      : u(t, e);
                  n[r] = a;
                };
              default:
                return (e, r, t) => {
                  void 0 !== t[e] ? (t[e] = [].concat(t[e], r)) : (t[e] = r);
                };
            }
          })(r),
          n = Object.create(null);
        if ("string" !== typeof e) return n;
        if (!(e = e.trim().replace(/^[?#&]/, ""))) return n;
        for (const a of e.split("&")) {
          let [e, s] = c(r.decode ? a.replace(/\+/g, " ") : a, "=");
          (s =
            void 0 === s
              ? null
              : ["comma", "separator"].includes(r.arrayFormat)
              ? s
              : u(s, r)),
            t(u(e, r), s, n);
        }
        for (const a of Object.keys(n)) {
          const e = n[a];
          if ("object" === typeof e && null !== e)
            for (const t of Object.keys(e)) e[t] = f(e[t], r);
          else n[a] = f(e, r);
        }
        return !1 === r.sort
          ? n
          : (!0 === r.sort
              ? Object.keys(n).sort()
              : Object.keys(n).sort(r.sort)
            ).reduce((e, r) => {
              const t = n[r];
              return (
                Boolean(t) && "object" === typeof t && !Array.isArray(t)
                  ? (e[r] = (function e(r) {
                      return Array.isArray(r)
                        ? r.sort()
                        : "object" === typeof r
                        ? e(Object.keys(r))
                            .sort((e, r) => Number(e) - Number(r))
                            .map((e) => r[e])
                        : r;
                    })(t))
                  : (e[r] = t),
                e
              );
            }, Object.create(null));
      }
      (r.extract = p),
        (r.parse = l),
        (r.stringify = (e, r) => {
          if (!e) return "";
          s(
            (r = Object.assign(
              {
                encode: !0,
                strict: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
              },
              r
            )).arrayFormatSeparator
          );
          const t = (t) =>
              (r.skipNull && ((e) => null === e || void 0 === e)(e[t])) ||
              (r.skipEmptyString && "" === e[t]),
            n = (function (e) {
              switch (e.arrayFormat) {
                case "index":
                  return (r) => (t, n) => {
                    const a = t.length;
                    return void 0 === n ||
                      (e.skipNull && null === n) ||
                      (e.skipEmptyString && "" === n)
                      ? t
                      : null === n
                      ? [...t, [o(r, e), "[", a, "]"].join("")]
                      : [...t, [o(r, e), "[", o(a, e), "]=", o(n, e)].join("")];
                  };
                case "bracket":
                  return (r) => (t, n) =>
                    void 0 === n ||
                    (e.skipNull && null === n) ||
                    (e.skipEmptyString && "" === n)
                      ? t
                      : null === n
                      ? [...t, [o(r, e), "[]"].join("")]
                      : [...t, [o(r, e), "[]=", o(n, e)].join("")];
                case "comma":
                case "separator":
                  return (r) => (t, n) =>
                    null === n || void 0 === n || 0 === n.length
                      ? t
                      : 0 === t.length
                      ? [[o(r, e), "=", o(n, e)].join("")]
                      : [[t, o(n, e)].join(e.arrayFormatSeparator)];
                default:
                  return (r) => (t, n) =>
                    void 0 === n ||
                    (e.skipNull && null === n) ||
                    (e.skipEmptyString && "" === n)
                      ? t
                      : null === n
                      ? [...t, o(r, e)]
                      : [...t, [o(r, e), "=", o(n, e)].join("")];
              }
            })(r),
            a = {};
          for (const s of Object.keys(e)) t(s) || (a[s] = e[s]);
          const c = Object.keys(a);
          return (
            !1 !== r.sort && c.sort(r.sort),
            c
              .map((t) => {
                const a = e[t];
                return void 0 === a
                  ? ""
                  : null === a
                  ? o(t, r)
                  : Array.isArray(a)
                  ? a.reduce(n(t), []).join("&")
                  : o(t, r) + "=" + o(a, r);
              })
              .filter((e) => e.length > 0)
              .join("&")
          );
        }),
        (r.parseUrl = (e, r) => {
          r = Object.assign({ decode: !0 }, r);
          const [t, n] = c(e, "#");
          return Object.assign(
            { url: t.split("?")[0] || "", query: l(p(e), r) },
            r && r.parseFragmentIdentifier && n
              ? { fragmentIdentifier: u(n, r) }
              : {}
          );
        }),
        (r.stringifyUrl = (e, t) => {
          t = Object.assign({ encode: !0, strict: !0 }, t);
          const n = i(e.url).split("?")[0] || "",
            a = r.extract(e.url),
            c = r.parse(a, { sort: !1 }),
            s = Object.assign(c, e.query);
          let u = r.stringify(s, t);
          u && (u = `?${u}`);
          let p = (function (e) {
            let r = "";
            const t = e.indexOf("#");
            return -1 !== t && (r = e.slice(t)), r;
          })(e.url);
          return (
            e.fragmentIdentifier && (p = `#${o(e.fragmentIdentifier, t)}`),
            `${n}${u}${p}`
          );
        });
    },
  },
]);
//# sourceMappingURL=66049a52e352e8641328040ecc86ed9c0298c955.ee79f189ffa317f0d470.js.map
