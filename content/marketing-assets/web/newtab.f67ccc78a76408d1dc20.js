!(function (t) {
  var e = {};
  function i(r) {
    if (e[r]) return e[r].exports;
    var a = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(a.exports, a, a.exports, i), (a.l = !0), a.exports;
  }
  (i.m = t),
    (i.c = e),
    (i.d = function (t, e, r) {
      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (i.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (i.t = function (t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (i.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          i.d(
            r,
            a,
            function (e) {
              return t[e];
            }.bind(null, a)
          );
      return r;
    }),
    (i.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return i.d(e, "a", e), e;
    }),
    (i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.p = "//assets.getpocket.com/web/"),
    i((i.s = 1677));
})({
  0: function (t, e, i) {
    "use strict";
    t.exports = i(91);
  },
  108: function (t, e, i) {
    "use strict";
    i(109);
  },
  109: function (t, e, i) {
    var r = i(110);
    "string" == typeof r && (r = [[t.i, r, ""]]);
    var a = { hmr: !0, transform: void 0, insertInto: void 0 };
    i(15)(r, a);
    r.locals && (t.exports = r.locals);
  },
  11: function (t, e) {
    function i(t, e) {
      for (var i = 0; i < e.length; i++) {
        var r = e[i];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    t.exports = function (t, e, r) {
      return e && i(t.prototype, e), r && i(t, r), t;
    };
  },
  110: function (t, e, i) {},
  1159: function (t, e, i) {
    var r = i(1160);
    "string" == typeof r && (r = [[t.i, r, ""]]);
    var a = { hmr: !0, transform: void 0, insertInto: void 0 };
    i(15)(r, a);
    r.locals && (t.exports = r.locals);
  },
  1160: function (t, e, i) {},
  1161: function (t, e, i) {},
  1162: function (t, e) {
    (function (e) {
      t.exports = e;
    }.call(this, {}));
  },
  12: function (t, e) {
    t.exports = function (t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    };
  },
  126: function (t, e, i) {
    "use strict";
    i(127);
  },
  127: function (t, e, i) {
    var r = i(128);
    "string" == typeof r && (r = [[t.i, r, ""]]);
    var a = { hmr: !0, transform: void 0, insertInto: void 0 };
    i(15)(r, a);
    r.locals && (t.exports = r.locals);
  },
  128: function (t, e, i) {},
  134: function (t, e) {
    t.exports = function (t) {
      if (!t.webpackPolyfill) {
        var e = Object.create(t);
        e.children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
              return e.l;
            },
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
              return e.i;
            },
          }),
          Object.defineProperty(e, "exports", { enumerable: !0 }),
          (e.webpackPolyfill = 1);
      }
      return e;
    };
  },
  15: function (t, e, i) {
    var r,
      a,
      s = {},
      n =
        ((r = function () {
          return window && document && document.all && !window.atob;
        }),
        function () {
          return void 0 === a && (a = r.apply(this, arguments)), a;
        }),
      o = function (t, e) {
        return e ? e.querySelector(t) : document.querySelector(t);
      },
      h = (function (t) {
        var e = {};
        return function (t, i) {
          if ("function" == typeof t) return t();
          if (void 0 === e[t]) {
            var r = o.call(this, t, i);
            if (
              window.HTMLIFrameElement &&
              r instanceof window.HTMLIFrameElement
            )
              try {
                r = r.contentDocument.head;
              } catch (t) {
                r = null;
              }
            e[t] = r;
          }
          return e[t];
        };
      })(),
      p = null,
      l = 0,
      m = [],
      c = i(59);
    function f(t, e) {
      for (var i = 0; i < t.length; i++) {
        var r = t[i],
          a = s[r.id];
        if (a) {
          a.refs++;
          for (var n = 0; n < a.parts.length; n++) a.parts[n](r.parts[n]);
          for (; n < r.parts.length; n++) a.parts.push(v(r.parts[n], e));
        } else {
          var o = [];
          for (n = 0; n < r.parts.length; n++) o.push(v(r.parts[n], e));
          s[r.id] = { id: r.id, refs: 1, parts: o };
        }
      }
    }
    function d(t, e) {
      for (var i = [], r = {}, a = 0; a < t.length; a++) {
        var s = t[a],
          n = e.base ? s[0] + e.base : s[0],
          o = { css: s[1], media: s[2], sourceMap: s[3] };
        r[n] ? r[n].parts.push(o) : i.push((r[n] = { id: n, parts: [o] }));
      }
      return i;
    }
    function u(t, e) {
      var i = h(t.insertInto);
      if (!i)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
        );
      var r = m[m.length - 1];
      if ("top" === t.insertAt)
        r
          ? r.nextSibling
            ? i.insertBefore(e, r.nextSibling)
            : i.appendChild(e)
          : i.insertBefore(e, i.firstChild),
          m.push(e);
      else if ("bottom" === t.insertAt) i.appendChild(e);
      else {
        if ("object" != typeof t.insertAt || !t.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
          );
        var a = h(t.insertAt.before, i);
        i.insertBefore(e, a);
      }
    }
    function y(t) {
      if (null === t.parentNode) return !1;
      t.parentNode.removeChild(t);
      var e = m.indexOf(t);
      e >= 0 && m.splice(e, 1);
    }
    function g(t) {
      var e = document.createElement("style");
      if (
        (void 0 === t.attrs.type && (t.attrs.type = "text/css"),
        void 0 === t.attrs.nonce)
      ) {
        var r = (function () {
          0;
          return i.nc;
        })();
        r && (t.attrs.nonce = r);
      }
      return x(e, t.attrs), u(t, e), e;
    }
    function x(t, e) {
      Object.keys(e).forEach(function (i) {
        t.setAttribute(i, e[i]);
      });
    }
    function v(t, e) {
      var i, r, a, s;
      if (e.transform && t.css) {
        if (
          !(s =
            "function" == typeof e.transform
              ? e.transform(t.css)
              : e.transform.default(t.css))
        )
          return function () {};
        t.css = s;
      }
      if (e.singleton) {
        var n = l++;
        (i = p || (p = g(e))),
          (r = E.bind(null, i, n, !1)),
          (a = E.bind(null, i, n, !0));
      } else
        t.sourceMap &&
        "function" == typeof URL &&
        "function" == typeof URL.createObjectURL &&
        "function" == typeof URL.revokeObjectURL &&
        "function" == typeof Blob &&
        "function" == typeof btoa
          ? ((i = (function (t) {
              var e = document.createElement("link");
              return (
                void 0 === t.attrs.type && (t.attrs.type = "text/css"),
                (t.attrs.rel = "stylesheet"),
                x(e, t.attrs),
                u(t, e),
                e
              );
            })(e)),
            (r = P.bind(null, i, e)),
            (a = function () {
              y(i), i.href && URL.revokeObjectURL(i.href);
            }))
          : ((i = g(e)),
            (r = S.bind(null, i)),
            (a = function () {
              y(i);
            }));
      return (
        r(t),
        function (e) {
          if (e) {
            if (
              e.css === t.css &&
              e.media === t.media &&
              e.sourceMap === t.sourceMap
            )
              return;
            r((t = e));
          } else a();
        }
      );
    }
    t.exports = function (t, e) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
        throw new Error(
          "The style-loader cannot be used in a non-browser environment"
        );
      ((e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}),
        e.singleton || "boolean" == typeof e.singleton || (e.singleton = n()),
        e.insertInto || (e.insertInto = "head"),
        e.insertAt || (e.insertAt = "bottom");
      var i = d(t, e);
      return (
        f(i, e),
        function (t) {
          for (var r = [], a = 0; a < i.length; a++) {
            var n = i[a];
            (o = s[n.id]).refs--, r.push(o);
          }
          t && f(d(t, e), e);
          for (a = 0; a < r.length; a++) {
            var o;
            if (0 === (o = r[a]).refs) {
              for (var h = 0; h < o.parts.length; h++) o.parts[h]();
              delete s[o.id];
            }
          }
        }
      );
    };
    var k,
      b =
        ((k = []),
        function (t, e) {
          return (k[t] = e), k.filter(Boolean).join("\n");
        });
    function E(t, e, i, r) {
      var a = i ? "" : r.css;
      if (t.styleSheet) t.styleSheet.cssText = b(e, a);
      else {
        var s = document.createTextNode(a),
          n = t.childNodes;
        n[e] && t.removeChild(n[e]),
          n.length ? t.insertBefore(s, n[e]) : t.appendChild(s);
      }
    }
    function S(t, e) {
      var i = e.css,
        r = e.media;
      if ((r && t.setAttribute("media", r), t.styleSheet))
        t.styleSheet.cssText = i;
      else {
        for (; t.firstChild; ) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(i));
      }
    }
    function P(t, e, i) {
      var r = i.css,
        a = i.sourceMap,
        s = void 0 === e.convertToAbsoluteUrls && a;
      (e.convertToAbsoluteUrls || s) && (r = c(r)),
        a &&
          (r +=
            "\n/*# sourceMappingURL=data:application/json;base64," +
            btoa(unescape(encodeURIComponent(JSON.stringify(a)))) +
            " */");
      var n = new Blob([r], { type: "text/css" }),
        o = t.href;
      (t.href = URL.createObjectURL(n)), o && URL.revokeObjectURL(o);
    }
  },
  1677: function (t, e, i) {
    "use strict";
    i.r(e);
    i(108), i(126), i(1159), i(573), i(574);
    var r = i(4),
      a = i.n(r),
      s = i(11),
      n = i.n(s),
      o = i(8),
      h = i.n(o),
      p = i(7),
      l = i.n(p),
      m = i(9),
      c = i.n(m),
      f = i(0),
      d = i.n(f),
      u = {
        v: "5.5.7",
        fr: 30,
        ip: 0,
        op: 140,
        w: 770,
        h: 400,
        nm: "_long-loop",
        ddd: 0,
        assets: [],
        layers: [
          {
            ddd: 0,
            ind: 1,
            ty: 4,
            nm: "Shape Layer 14",
            sr: 1,
            ks: {
              o: { a: 0, k: 100, ix: 11 },
              r: { a: 0, k: 17, ix: 10 },
              p: { a: 0, k: [639, 126, 0], ix: 2 },
              a: { a: 0, k: [0, 0, 0], ix: 1 },
              s: { a: 0, k: [16, 16, 100], ix: 6 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [411.844, -107.031],
                          [291.844, -7.031],
                          [-0.156, 108.969],
                          [-276.156, 0.969],
                          [-404.156, -99.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 15",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 1,
                    ty: "sh",
                    ix: 2,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [175.844, -235.031],
                          [155.844, -183.031],
                          [-0.156, -143.031],
                          [-164.156, -187.031],
                          [-192.156, -243.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 14",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 2,
                    ty: "sh",
                    ix: 3,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-168.156, -191.031],
                          [-284.156, -15.031],
                          [-12.156, 508.969],
                          [283.844, -11.031],
                          [159.844, -187.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 13",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 3,
                    ty: "sh",
                    ix: 4,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [474, -181],
                          [574, -221],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 8",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 4,
                    ty: "sh",
                    ix: 5,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-614, -201],
                          [-486, -141],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 9",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 5,
                    ty: "sh",
                    ix: 6,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [482, -277],
                          [406, -213],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 7",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 6,
                    ty: "sh",
                    ix: 7,
                    ks: { a: 0, k: { i: [], o: [], v: [], c: !1 }, ix: 2 },
                    nm: "Path 5",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 7,
                    ty: "sh",
                    ix: 8,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-456.156, -231.031],
                          [-412.156, -175.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 12",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 8,
                    ty: "sh",
                    ix: 9,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-4.156, -319.031],
                          [-188.156, -247.031],
                          [-420.156, -103.031],
                          [-8.156, 504.969],
                          [415.844, -107.031],
                          [175.844, -247.031],
                        ],
                        c: !0,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 9,
                    ty: "sh",
                    ix: 10,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [3.844, -139.031],
                          [-4.156, 504.969],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 16",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 10,
                    ty: "sh",
                    ix: 11,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-556.156, -111.031],
                          [-472.156, -95.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 17",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 11,
                    ty: "sh",
                    ix: 12,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [483.844, -127.031],
                          [551.844, -99.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 18",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ty: "st",
                    c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                    o: { a: 0, k: 100, ix: 4 },
                    w: { a: 0, k: 22, ix: 5 },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: !1,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [2.156, 2.031], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                  },
                ],
                nm: "Shape 1",
                np: 13,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: !1,
              },
            ],
            ip: 130,
            op: 140,
            st: 65,
            bm: 0,
          },
          {
            ddd: 0,
            ind: 2,
            ty: 4,
            nm: "Shape Layer 15",
            sr: 1,
            ks: {
              o: { a: 0, k: 100, ix: 11 },
              r: { a: 0, k: 17, ix: 10 },
              p: { a: 0, k: [639, 126, 0], ix: 2 },
              a: { a: 0, k: [0, 0, 0], ix: 1 },
              s: { a: 0, k: [16, 16, 100], ix: 6 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [486, -101],
                          [610, -109],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 8",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 1,
                    ty: "sh",
                    ix: 2,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-614, -101],
                          [-486, -85],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 9",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 2,
                    ty: "sh",
                    ix: 3,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [510, -273],
                          [458, -217],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 7",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 3,
                    ty: "sh",
                    ix: 4,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-126, -125],
                          [-206, 35],
                          [-6, 503],
                          [206, 35],
                          [122, -133],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 6",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 4,
                    ty: "sh",
                    ix: 5,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-254, -237],
                          [-122, -133],
                          [126, -133],
                          [262, -245],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 4",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 5,
                    ty: "sh",
                    ix: 6,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-386, -89],
                          [-198, 47],
                          [218, 35],
                          [382, -89],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 2",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 6,
                    ty: "sh",
                    ix: 7,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-134, -325],
                          [-246, -253],
                          [-394, -89],
                          [-6, 515],
                          [394, -89],
                          [278, -241],
                          [126, -325],
                        ],
                        c: !0,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 7,
                    ty: "sh",
                    ix: 8,
                    ks: { a: 0, k: { i: [], o: [], v: [], c: !1 }, ix: 2 },
                    nm: "Path 5",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 8,
                    ty: "sh",
                    ix: 9,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-528.156, 64.969],
                          [-452.156, 8.969],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 10",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 9,
                    ty: "sh",
                    ix: 10,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [447.844, 16.969],
                          [539.844, 76.969],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 11",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 10,
                    ty: "sh",
                    ix: 11,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-544.156, -239.031],
                          [-452.156, -183.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 12",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ty: "st",
                    c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                    o: { a: 0, k: 100, ix: 4 },
                    w: { a: 0, k: 22, ix: 5 },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: !1,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [2.156, 2.031], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                  },
                ],
                nm: "Shape 1",
                np: 12,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: !1,
              },
            ],
            ip: 120,
            op: 130,
            st: 65,
            bm: 0,
          },
          {
            ddd: 0,
            ind: 3,
            ty: 4,
            nm: "Shape Layer 12",
            sr: 1,
            ks: {
              o: { a: 0, k: 100, ix: 11 },
              r: { a: 0, k: 17, ix: 10 },
              p: { a: 0, k: [639, 126, 0], ix: 2 },
              a: { a: 0, k: [0, 0, 0], ix: 1 },
              s: { a: 0, k: [16, 16, 100], ix: 6 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [411.844, -107.031],
                          [285.844, -9.031],
                          [-0.156, 108.969],
                          [-280.156, -12.031],
                          [-418.156, -104.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 15",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 1,
                    ty: "sh",
                    ix: 2,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [175.844, -235.031],
                          [155.844, -183.031],
                          [3.844, -91.031],
                          [-164.156, -187.031],
                          [-192.156, -243.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 14",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 2,
                    ty: "sh",
                    ix: 3,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-168.156, -191.031],
                          [-284.156, -15.031],
                          [-0.156, 512.969],
                          [283.844, -11.031],
                          [159.844, -187.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 13",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 3,
                    ty: "sh",
                    ix: 4,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [430, -193],
                          [526, -241],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 8",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 4,
                    ty: "sh",
                    ix: 5,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-546, -217],
                          [-442, -153],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 9",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 5,
                    ty: "sh",
                    ix: 6,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [474, -33],
                          [442, -57],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 7",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 6,
                    ty: "sh",
                    ix: 7,
                    ks: { a: 0, k: { i: [], o: [], v: [], c: !1 }, ix: 2 },
                    nm: "Path 5",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 7,
                    ty: "sh",
                    ix: 8,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-528.156, -75.031],
                          [-464.156, -87.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 10",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 8,
                    ty: "sh",
                    ix: 9,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [475.844, -123.031],
                          [523.844, -139.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 11",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 9,
                    ty: "sh",
                    ix: 10,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-468.156, -3.031],
                          [-432.156, -19.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 12",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 10,
                    ty: "sh",
                    ix: 11,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-4.156, -319.031],
                          [-188.156, -247.031],
                          [-420.156, -103.031],
                          [-8.156, 504.969],
                          [415.844, -107.031],
                          [175.844, -247.031],
                        ],
                        c: !0,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 11,
                    ty: "sh",
                    ix: 12,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [3.844, -92.031],
                          [-8.156, 512.969],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 16",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ty: "st",
                    c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                    o: { a: 0, k: 100, ix: 4 },
                    w: { a: 0, k: 22, ix: 5 },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: !1,
                  },
                  {
                    ty: "gr",
                    it: [
                      {
                        ty: "st",
                        c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                        o: { a: 0, k: 100, ix: 4 },
                        w: { a: 0, k: 2, ix: 5 },
                        lc: 1,
                        lj: 1,
                        ml: 4,
                        bm: 0,
                        nm: "Stroke 1",
                        mn: "ADBE Vector Graphic - Stroke",
                        hd: !1,
                      },
                      {
                        ty: "tr",
                        p: { a: 0, k: [0, 0], ix: 2 },
                        a: { a: 0, k: [0, 0], ix: 1 },
                        s: { a: 0, k: [100, 100], ix: 3 },
                        r: { a: 0, k: 0, ix: 6 },
                        o: { a: 0, k: 100, ix: 7 },
                        sk: { a: 0, k: 0, ix: 4 },
                        sa: { a: 0, k: 0, ix: 5 },
                        nm: "Transform",
                      },
                    ],
                    nm: "Shape 2",
                    np: 2,
                    cix: 2,
                    bm: 0,
                    ix: 14,
                    mn: "ADBE Vector Group",
                    hd: !1,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [2.156, 2.031], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                  },
                ],
                nm: "Shape 1",
                np: 14,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: !1,
              },
            ],
            ip: 111,
            op: 120,
            st: 50,
            bm: 0,
          },
          {
            ddd: 0,
            ind: 4,
            ty: 4,
            nm: "Shape Layer 11",
            sr: 1,
            ks: {
              o: { a: 0, k: 100, ix: 11 },
              r: { a: 0, k: 17, ix: 10 },
              p: { a: 0, k: [639, 126, 0], ix: 2 },
              a: { a: 0, k: [0, 0, 0], ix: 1 },
              s: { a: 0, k: [16, 16, 100], ix: 6 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [411.844, -107.031],
                          [291.844, -7.031],
                          [-0.156, 108.969],
                          [-276.156, 0.969],
                          [-404.156, -99.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 15",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 1,
                    ty: "sh",
                    ix: 2,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [175.844, -235.031],
                          [155.844, -183.031],
                          [-0.156, -143.031],
                          [-164.156, -187.031],
                          [-192.156, -243.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 14",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 2,
                    ty: "sh",
                    ix: 3,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-168.156, -191.031],
                          [-284.156, -15.031],
                          [-12.156, 508.969],
                          [283.844, -11.031],
                          [159.844, -187.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 13",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 3,
                    ty: "sh",
                    ix: 4,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [474, -181],
                          [574, -221],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 8",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 4,
                    ty: "sh",
                    ix: 5,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-614, -201],
                          [-486, -141],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 9",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 5,
                    ty: "sh",
                    ix: 6,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [482, -277],
                          [406, -213],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 7",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 6,
                    ty: "sh",
                    ix: 7,
                    ks: { a: 0, k: { i: [], o: [], v: [], c: !1 }, ix: 2 },
                    nm: "Path 5",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 7,
                    ty: "sh",
                    ix: 8,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-456.156, -231.031],
                          [-412.156, -175.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 12",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 8,
                    ty: "sh",
                    ix: 9,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-4.156, -319.031],
                          [-188.156, -247.031],
                          [-420.156, -103.031],
                          [-8.156, 504.969],
                          [415.844, -107.031],
                          [175.844, -247.031],
                        ],
                        c: !0,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 9,
                    ty: "sh",
                    ix: 10,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [3.844, -139.031],
                          [-4.156, 504.969],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 16",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 10,
                    ty: "sh",
                    ix: 11,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-556.156, -111.031],
                          [-472.156, -95.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 17",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 11,
                    ty: "sh",
                    ix: 12,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [483.844, -127.031],
                          [551.844, -99.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 18",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ty: "st",
                    c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                    o: { a: 0, k: 100, ix: 4 },
                    w: { a: 0, k: 22, ix: 5 },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: !1,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [2.156, 2.031], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                  },
                ],
                nm: "Shape 1",
                np: 13,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: !1,
              },
            ],
            ip: 90,
            op: 100,
            st: 25,
            bm: 0,
          },
          {
            ddd: 0,
            ind: 5,
            ty: 4,
            nm: "Shape Layer 10",
            sr: 1,
            ks: {
              o: { a: 0, k: 100, ix: 11 },
              r: { a: 0, k: 17, ix: 10 },
              p: { a: 0, k: [639, 126, 0], ix: 2 },
              a: { a: 0, k: [0, 0, 0], ix: 1 },
              s: { a: 0, k: [16, 16, 100], ix: 6 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [486, -101],
                          [610, -109],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 8",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 1,
                    ty: "sh",
                    ix: 2,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-614, -101],
                          [-486, -85],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 9",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 2,
                    ty: "sh",
                    ix: 3,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [510, -273],
                          [458, -217],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 7",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 3,
                    ty: "sh",
                    ix: 4,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-126, -125],
                          [-206, 35],
                          [-6, 503],
                          [206, 35],
                          [122, -133],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 6",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 4,
                    ty: "sh",
                    ix: 5,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-254, -237],
                          [-122, -133],
                          [126, -133],
                          [262, -245],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 4",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 5,
                    ty: "sh",
                    ix: 6,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-386, -89],
                          [-198, 47],
                          [218, 35],
                          [382, -89],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 2",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 6,
                    ty: "sh",
                    ix: 7,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-134, -325],
                          [-246, -253],
                          [-394, -89],
                          [-6, 515],
                          [394, -89],
                          [278, -241],
                          [126, -325],
                        ],
                        c: !0,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 7,
                    ty: "sh",
                    ix: 8,
                    ks: { a: 0, k: { i: [], o: [], v: [], c: !1 }, ix: 2 },
                    nm: "Path 5",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 8,
                    ty: "sh",
                    ix: 9,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-528.156, 64.969],
                          [-452.156, 8.969],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 10",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 9,
                    ty: "sh",
                    ix: 10,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [447.844, 16.969],
                          [539.844, 76.969],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 11",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 10,
                    ty: "sh",
                    ix: 11,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-544.156, -239.031],
                          [-452.156, -183.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 12",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ty: "st",
                    c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                    o: { a: 0, k: 100, ix: 4 },
                    w: { a: 0, k: 22, ix: 5 },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: !1,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [2.156, 2.031], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                  },
                ],
                nm: "Shape 1",
                np: 12,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: !1,
              },
            ],
            ip: 100,
            op: 111,
            st: 45,
            bm: 0,
          },
          {
            ddd: 0,
            ind: 6,
            ty: 4,
            nm: "Shape Layer 9",
            sr: 1,
            ks: {
              o: { a: 0, k: 100, ix: 11 },
              r: { a: 0, k: 17, ix: 10 },
              p: { a: 0, k: [639, 126, 0], ix: 2 },
              a: { a: 0, k: [0, 0, 0], ix: 1 },
              s: { a: 0, k: [16, 16, 100], ix: 6 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [486, -101],
                          [610, -109],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 8",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 1,
                    ty: "sh",
                    ix: 2,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-614, -101],
                          [-486, -85],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 9",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 2,
                    ty: "sh",
                    ix: 3,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [510, -273],
                          [458, -217],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 7",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 3,
                    ty: "sh",
                    ix: 4,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-126, -125],
                          [-206, 35],
                          [-6, 503],
                          [206, 35],
                          [122, -133],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 6",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 4,
                    ty: "sh",
                    ix: 5,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-254, -237],
                          [-122, -133],
                          [126, -133],
                          [262, -245],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 4",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 5,
                    ty: "sh",
                    ix: 6,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-386, -89],
                          [-198, 47],
                          [218, 35],
                          [382, -89],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 2",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 6,
                    ty: "sh",
                    ix: 7,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-134, -325],
                          [-246, -253],
                          [-394, -89],
                          [-6, 515],
                          [394, -89],
                          [278, -241],
                          [126, -325],
                        ],
                        c: !0,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 7,
                    ty: "sh",
                    ix: 8,
                    ks: { a: 0, k: { i: [], o: [], v: [], c: !1 }, ix: 2 },
                    nm: "Path 5",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 8,
                    ty: "sh",
                    ix: 9,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-528.156, 64.969],
                          [-452.156, 8.969],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 10",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 9,
                    ty: "sh",
                    ix: 10,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [447.844, 16.969],
                          [539.844, 76.969],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 11",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 10,
                    ty: "sh",
                    ix: 11,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-544.156, -239.031],
                          [-452.156, -183.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 12",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ty: "st",
                    c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                    o: { a: 0, k: 100, ix: 4 },
                    w: { a: 0, k: 22, ix: 5 },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: !1,
                  },
                  {
                    ty: "gr",
                    it: [
                      {
                        ind: 0,
                        ty: "sh",
                        ix: 1,
                        ks: {
                          a: 0,
                          k: {
                            i: [
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [-614, -101],
                              [-486, -85],
                            ],
                            c: !1,
                          },
                          ix: 2,
                        },
                        nm: "Path 1",
                        mn: "ADBE Vector Shape - Group",
                        hd: !1,
                      },
                      {
                        ty: "st",
                        c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                        o: { a: 0, k: 100, ix: 4 },
                        w: { a: 0, k: 2, ix: 5 },
                        lc: 1,
                        lj: 1,
                        ml: 4,
                        bm: 0,
                        nm: "Stroke 1",
                        mn: "ADBE Vector Graphic - Stroke",
                        hd: !1,
                      },
                      {
                        ty: "tr",
                        p: { a: 0, k: [0, 0], ix: 2 },
                        a: { a: 0, k: [0, 0], ix: 1 },
                        s: { a: 0, k: [100, 100], ix: 3 },
                        r: { a: 0, k: 0, ix: 6 },
                        o: { a: 0, k: 100, ix: 7 },
                        sk: { a: 0, k: 0, ix: 4 },
                        sa: { a: 0, k: 0, ix: 5 },
                        nm: "Transform",
                      },
                    ],
                    nm: "Shape 2",
                    np: 3,
                    cix: 2,
                    bm: 0,
                    ix: 14,
                    mn: "ADBE Vector Group",
                    hd: !1,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [2.156, 2.031], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                  },
                ],
                nm: "Shape 1",
                np: 14,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: !1,
              },
            ],
            ip: 81,
            op: 90,
            st: 20,
            bm: 0,
          },
          {
            ddd: 0,
            ind: 7,
            ty: 4,
            nm: "Shape Layer 8",
            sr: 1,
            ks: {
              o: { a: 0, k: 100, ix: 11 },
              r: { a: 0, k: 17, ix: 10 },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.167, y: 0.167 },
                    t: 0,
                    s: [639, 126, 0],
                    to: [0, -8.333, 0],
                    ti: [0, 0, 0],
                  },
                  {
                    i: { x: 0.833, y: 0.833 },
                    o: { x: 0.6, y: 0 },
                    t: 16,
                    s: [639, 76, 0],
                    to: [0, 0, 0],
                    ti: [0, -8.333, 0],
                  },
                  { t: 29.1796875, s: [639, 126, 0] },
                ],
                ix: 2,
              },
              a: { a: 0, k: [0, 0, 0], ix: 1 },
              s: { a: 0, k: [16, 16, 100], ix: 6 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [411.844, -107.031],
                          [285.844, -9.031],
                          [-0.156, 108.969],
                          [-280.156, -12.031],
                          [-418.156, -104.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 15",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 1,
                    ty: "sh",
                    ix: 2,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [175.844, -235.031],
                          [155.844, -183.031],
                          [3.844, -91.031],
                          [-164.156, -187.031],
                          [-192.156, -243.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 14",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 2,
                    ty: "sh",
                    ix: 3,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-168.156, -191.031],
                          [-284.156, -15.031],
                          [-0.156, 512.969],
                          [283.844, -11.031],
                          [159.844, -187.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 13",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 3,
                    ty: "sh",
                    ix: 4,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [430, -193],
                          [526, -241],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 8",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 4,
                    ty: "sh",
                    ix: 5,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-546, -217],
                          [-442, -153],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 9",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 5,
                    ty: "sh",
                    ix: 6,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [474, -33],
                          [442, -57],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 7",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 6,
                    ty: "sh",
                    ix: 7,
                    ks: { a: 0, k: { i: [], o: [], v: [], c: !1 }, ix: 2 },
                    nm: "Path 5",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 7,
                    ty: "sh",
                    ix: 8,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-528.156, -75.031],
                          [-464.156, -87.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 10",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 8,
                    ty: "sh",
                    ix: 9,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [475.844, -123.031],
                          [523.844, -139.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 11",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 9,
                    ty: "sh",
                    ix: 10,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-468.156, -3.031],
                          [-432.156, -19.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 12",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 10,
                    ty: "sh",
                    ix: 11,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-4.156, -319.031],
                          [-188.156, -247.031],
                          [-420.156, -103.031],
                          [-8.156, 504.969],
                          [415.844, -107.031],
                          [175.844, -247.031],
                        ],
                        c: !0,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 11,
                    ty: "sh",
                    ix: 12,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [3.844, -92.031],
                          [-8.156, 512.969],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 16",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ty: "st",
                    c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                    o: { a: 0, k: 100, ix: 4 },
                    w: { a: 0, k: 22, ix: 5 },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: !1,
                  },
                  {
                    ty: "gr",
                    it: [
                      {
                        ty: "st",
                        c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                        o: { a: 0, k: 100, ix: 4 },
                        w: { a: 0, k: 2, ix: 5 },
                        lc: 1,
                        lj: 1,
                        ml: 4,
                        bm: 0,
                        nm: "Stroke 1",
                        mn: "ADBE Vector Graphic - Stroke",
                        hd: !1,
                      },
                      {
                        ty: "tr",
                        p: { a: 0, k: [0, 0], ix: 2 },
                        a: { a: 0, k: [0, 0], ix: 1 },
                        s: { a: 0, k: [100, 100], ix: 3 },
                        r: { a: 0, k: 0, ix: 6 },
                        o: { a: 0, k: 100, ix: 7 },
                        sk: { a: 0, k: 0, ix: 4 },
                        sa: { a: 0, k: 0, ix: 5 },
                        nm: "Transform",
                      },
                    ],
                    nm: "Shape 2",
                    np: 2,
                    cix: 2,
                    bm: 0,
                    ix: 14,
                    mn: "ADBE Vector Group",
                    hd: !1,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [2.156, 2.031], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                  },
                ],
                nm: "Shape 1",
                np: 14,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: !1,
              },
            ],
            ip: 70,
            op: 81,
            st: 30,
            bm: 0,
          },
          {
            ddd: 0,
            ind: 8,
            ty: 4,
            nm: "Shape Layer 7",
            sr: 1,
            ks: {
              o: { a: 0, k: 100, ix: 11 },
              r: { a: 0, k: 17, ix: 10 },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.167, y: 0.167 },
                    t: 0,
                    s: [639, 126, 0],
                    to: [0, -8.333, 0],
                    ti: [0, 0, 0],
                  },
                  {
                    i: { x: 0.833, y: 0.833 },
                    o: { x: 0.6, y: 0 },
                    t: 16,
                    s: [639, 76, 0],
                    to: [0, 0, 0],
                    ti: [0, -8.333, 0],
                  },
                  { t: 30, s: [639, 126, 0] },
                ],
                ix: 2,
              },
              a: { a: 0, k: [0, 0, 0], ix: 1 },
              s: { a: 0, k: [16, 16, 100], ix: 6 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [411.844, -107.031],
                          [291.844, -7.031],
                          [-0.156, 108.969],
                          [-276.156, 0.969],
                          [-404.156, -99.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 15",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 1,
                    ty: "sh",
                    ix: 2,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [175.844, -235.031],
                          [155.844, -183.031],
                          [-0.156, -143.031],
                          [-164.156, -187.031],
                          [-192.156, -243.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 14",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 2,
                    ty: "sh",
                    ix: 3,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-168.156, -191.031],
                          [-284.156, -15.031],
                          [-12.156, 508.969],
                          [283.844, -11.031],
                          [159.844, -187.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 13",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 3,
                    ty: "sh",
                    ix: 4,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [474, -181],
                          [574, -221],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 8",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 4,
                    ty: "sh",
                    ix: 5,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-614, -201],
                          [-486, -141],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 9",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 5,
                    ty: "sh",
                    ix: 6,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [482, -277],
                          [406, -213],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 7",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 6,
                    ty: "sh",
                    ix: 7,
                    ks: { a: 0, k: { i: [], o: [], v: [], c: !1 }, ix: 2 },
                    nm: "Path 5",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 7,
                    ty: "sh",
                    ix: 8,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-456.156, -231.031],
                          [-412.156, -175.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 12",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 8,
                    ty: "sh",
                    ix: 9,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-4.156, -319.031],
                          [-188.156, -247.031],
                          [-420.156, -103.031],
                          [-8.156, 504.969],
                          [415.844, -107.031],
                          [175.844, -247.031],
                        ],
                        c: !0,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 9,
                    ty: "sh",
                    ix: 10,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [3.844, -139.031],
                          [-4.156, 504.969],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 16",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 10,
                    ty: "sh",
                    ix: 11,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-556.156, -111.031],
                          [-472.156, -95.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 17",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 11,
                    ty: "sh",
                    ix: 12,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [483.844, -127.031],
                          [551.844, -99.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 18",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ty: "st",
                    c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                    o: { a: 0, k: 100, ix: 4 },
                    w: { a: 0, k: 22, ix: 5 },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: !1,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [2.156, 2.031], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                  },
                ],
                nm: "Shape 1",
                np: 13,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: !1,
              },
            ],
            ip: 50,
            op: 60,
            st: 10,
            bm: 0,
          },
          {
            ddd: 0,
            ind: 9,
            ty: 4,
            nm: "Shape Layer 6",
            sr: 1,
            ks: {
              o: { a: 0, k: 100, ix: 11 },
              r: { a: 0, k: 17, ix: 10 },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.167, y: 0.167 },
                    t: 0,
                    s: [639, 126, 0],
                    to: [0, -8.333, 0],
                    ti: [0, 0, 0],
                  },
                  {
                    i: { x: 0.833, y: 0.833 },
                    o: { x: 0.6, y: 0 },
                    t: 16,
                    s: [639, 76, 0],
                    to: [0, 0, 0],
                    ti: [0, -8.333, 0],
                  },
                  { t: 30, s: [639, 126, 0] },
                ],
                ix: 2,
              },
              a: { a: 0, k: [0, 0, 0], ix: 1 },
              s: { a: 0, k: [16, 16, 100], ix: 6 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [486, -101],
                          [610, -109],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 8",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 1,
                    ty: "sh",
                    ix: 2,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-614, -101],
                          [-486, -85],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 9",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 2,
                    ty: "sh",
                    ix: 3,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [510, -273],
                          [458, -217],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 7",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 3,
                    ty: "sh",
                    ix: 4,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-126, -125],
                          [-206, 35],
                          [-6, 503],
                          [206, 35],
                          [122, -133],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 6",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 4,
                    ty: "sh",
                    ix: 5,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-254, -237],
                          [-122, -133],
                          [126, -133],
                          [262, -245],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 4",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 5,
                    ty: "sh",
                    ix: 6,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-386, -89],
                          [-198, 47],
                          [218, 35],
                          [382, -89],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 2",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 6,
                    ty: "sh",
                    ix: 7,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-134, -325],
                          [-246, -253],
                          [-394, -89],
                          [-6, 515],
                          [394, -89],
                          [278, -241],
                          [126, -325],
                        ],
                        c: !0,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 7,
                    ty: "sh",
                    ix: 8,
                    ks: { a: 0, k: { i: [], o: [], v: [], c: !1 }, ix: 2 },
                    nm: "Path 5",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 8,
                    ty: "sh",
                    ix: 9,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-528.156, 64.969],
                          [-452.156, 8.969],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 10",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 9,
                    ty: "sh",
                    ix: 10,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [447.844, 16.969],
                          [539.844, 76.969],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 11",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 10,
                    ty: "sh",
                    ix: 11,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-544.156, -239.031],
                          [-452.156, -183.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 12",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ty: "st",
                    c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                    o: { a: 0, k: 100, ix: 4 },
                    w: { a: 0, k: 22, ix: 5 },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: !1,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [2.156, 2.031], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                  },
                ],
                nm: "Shape 1",
                np: 12,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: !1,
              },
            ],
            ip: 60,
            op: 70,
            st: 20,
            bm: 0,
          },
          {
            ddd: 0,
            ind: 10,
            ty: 4,
            nm: "Shape Layer 5",
            sr: 1,
            ks: {
              o: { a: 0, k: 100, ix: 11 },
              r: { a: 0, k: 17, ix: 10 },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.167, y: 0.167 },
                    t: 0,
                    s: [639, 126, 0],
                    to: [0, -8.333, 0],
                    ti: [0, 0, 0],
                  },
                  {
                    i: { x: 0.833, y: 0.833 },
                    o: { x: 0.6, y: 0 },
                    t: 16,
                    s: [639, 76, 0],
                    to: [0, 0, 0],
                    ti: [0, -8.333, 0],
                  },
                  { t: 30, s: [639, 126, 0] },
                ],
                ix: 2,
              },
              a: { a: 0, k: [0, 0, 0], ix: 1 },
              s: { a: 0, k: [16, 16, 100], ix: 6 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [486, -101],
                          [610, -109],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 8",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 1,
                    ty: "sh",
                    ix: 2,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-614, -101],
                          [-486, -85],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 9",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 2,
                    ty: "sh",
                    ix: 3,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [510, -273],
                          [458, -217],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 7",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 3,
                    ty: "sh",
                    ix: 4,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-126, -125],
                          [-206, 35],
                          [-6, 503],
                          [206, 35],
                          [122, -133],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 6",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 4,
                    ty: "sh",
                    ix: 5,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-254, -237],
                          [-122, -133],
                          [126, -133],
                          [262, -245],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 4",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 5,
                    ty: "sh",
                    ix: 6,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-386, -89],
                          [-198, 47],
                          [218, 35],
                          [382, -89],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 2",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 6,
                    ty: "sh",
                    ix: 7,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-134, -325],
                          [-246, -253],
                          [-394, -89],
                          [-6, 515],
                          [394, -89],
                          [278, -241],
                          [126, -325],
                        ],
                        c: !0,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 7,
                    ty: "sh",
                    ix: 8,
                    ks: { a: 0, k: { i: [], o: [], v: [], c: !1 }, ix: 2 },
                    nm: "Path 5",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 8,
                    ty: "sh",
                    ix: 9,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-528.156, 64.969],
                          [-452.156, 8.969],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 10",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 9,
                    ty: "sh",
                    ix: 10,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [447.844, 16.969],
                          [539.844, 76.969],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 11",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 10,
                    ty: "sh",
                    ix: 11,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-544.156, -239.031],
                          [-452.156, -183.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 12",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ty: "st",
                    c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                    o: { a: 0, k: 100, ix: 4 },
                    w: { a: 0, k: 22, ix: 5 },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: !1,
                  },
                  {
                    ty: "gr",
                    it: [
                      {
                        ind: 0,
                        ty: "sh",
                        ix: 1,
                        ks: {
                          a: 0,
                          k: {
                            i: [
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [-614, -101],
                              [-486, -85],
                            ],
                            c: !1,
                          },
                          ix: 2,
                        },
                        nm: "Path 1",
                        mn: "ADBE Vector Shape - Group",
                        hd: !1,
                      },
                      {
                        ty: "st",
                        c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                        o: { a: 0, k: 100, ix: 4 },
                        w: { a: 0, k: 2, ix: 5 },
                        lc: 1,
                        lj: 1,
                        ml: 4,
                        bm: 0,
                        nm: "Stroke 1",
                        mn: "ADBE Vector Graphic - Stroke",
                        hd: !1,
                      },
                      {
                        ty: "tr",
                        p: { a: 0, k: [0, 0], ix: 2 },
                        a: { a: 0, k: [0, 0], ix: 1 },
                        s: { a: 0, k: [100, 100], ix: 3 },
                        r: { a: 0, k: 0, ix: 6 },
                        o: { a: 0, k: 100, ix: 7 },
                        sk: { a: 0, k: 0, ix: 4 },
                        sa: { a: 0, k: 0, ix: 5 },
                        nm: "Transform",
                      },
                    ],
                    nm: "Shape 2",
                    np: 3,
                    cix: 2,
                    bm: 0,
                    ix: 14,
                    mn: "ADBE Vector Group",
                    hd: !1,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [2.156, 2.031], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                  },
                ],
                nm: "Shape 1",
                np: 14,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: !1,
              },
            ],
            ip: 40,
            op: 50,
            st: 0,
            bm: 0,
          },
          {
            ddd: 0,
            ind: 11,
            ty: 4,
            nm: "Shape Layer 4",
            sr: 1,
            ks: {
              o: { a: 0, k: 100, ix: 11 },
              r: { a: 0, k: 17, ix: 10 },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.167, y: 0.167 },
                    t: 0,
                    s: [639, 126, 0],
                    to: [0, -8.333, 0],
                    ti: [0, 0, 0],
                  },
                  {
                    i: { x: 0.833, y: 0.833 },
                    o: { x: 0.6, y: 0 },
                    t: 16,
                    s: [639, 76, 0],
                    to: [0, 0, 0],
                    ti: [0, -8.333, 0],
                  },
                  { t: 29.1796875, s: [639, 126, 0] },
                ],
                ix: 2,
              },
              a: { a: 0, k: [0, 0, 0], ix: 1 },
              s: { a: 0, k: [16, 16, 100], ix: 6 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [411.844, -107.031],
                          [285.844, -9.031],
                          [-0.156, 108.969],
                          [-280.156, -12.031],
                          [-418.156, -104.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 15",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 1,
                    ty: "sh",
                    ix: 2,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [175.844, -235.031],
                          [155.844, -183.031],
                          [3.844, -91.031],
                          [-164.156, -187.031],
                          [-192.156, -243.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 14",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 2,
                    ty: "sh",
                    ix: 3,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-168.156, -191.031],
                          [-284.156, -15.031],
                          [-0.156, 512.969],
                          [283.844, -11.031],
                          [159.844, -187.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 13",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 3,
                    ty: "sh",
                    ix: 4,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [430, -193],
                          [526, -241],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 8",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 4,
                    ty: "sh",
                    ix: 5,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-546, -217],
                          [-442, -153],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 9",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 5,
                    ty: "sh",
                    ix: 6,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [474, -33],
                          [442, -57],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 7",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 6,
                    ty: "sh",
                    ix: 7,
                    ks: { a: 0, k: { i: [], o: [], v: [], c: !1 }, ix: 2 },
                    nm: "Path 5",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 7,
                    ty: "sh",
                    ix: 8,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-528.156, -75.031],
                          [-464.156, -87.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 10",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 8,
                    ty: "sh",
                    ix: 9,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [475.844, -123.031],
                          [523.844, -139.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 11",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 9,
                    ty: "sh",
                    ix: 10,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-468.156, -3.031],
                          [-432.156, -19.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 12",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 10,
                    ty: "sh",
                    ix: 11,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-4.156, -319.031],
                          [-188.156, -247.031],
                          [-420.156, -103.031],
                          [-8.156, 504.969],
                          [415.844, -107.031],
                          [175.844, -247.031],
                        ],
                        c: !0,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 11,
                    ty: "sh",
                    ix: 12,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [3.844, -92.031],
                          [-8.156, 512.969],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 16",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ty: "st",
                    c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                    o: { a: 0, k: 100, ix: 4 },
                    w: { a: 0, k: 22, ix: 5 },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: !1,
                  },
                  {
                    ty: "gr",
                    it: [
                      {
                        ty: "st",
                        c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                        o: { a: 0, k: 100, ix: 4 },
                        w: { a: 0, k: 2, ix: 5 },
                        lc: 1,
                        lj: 1,
                        ml: 4,
                        bm: 0,
                        nm: "Stroke 1",
                        mn: "ADBE Vector Graphic - Stroke",
                        hd: !1,
                      },
                      {
                        ty: "tr",
                        p: { a: 0, k: [0, 0], ix: 2 },
                        a: { a: 0, k: [0, 0], ix: 1 },
                        s: { a: 0, k: [100, 100], ix: 3 },
                        r: { a: 0, k: 0, ix: 6 },
                        o: { a: 0, k: 100, ix: 7 },
                        sk: { a: 0, k: 0, ix: 4 },
                        sa: { a: 0, k: 0, ix: 5 },
                        nm: "Transform",
                      },
                    ],
                    nm: "Shape 2",
                    np: 2,
                    cix: 2,
                    bm: 0,
                    ix: 14,
                    mn: "ADBE Vector Group",
                    hd: !1,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [2.156, 2.031], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                  },
                ],
                nm: "Shape 1",
                np: 14,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: !1,
              },
            ],
            ip: 30,
            op: 40,
            st: 30,
            bm: 0,
          },
          {
            ddd: 0,
            ind: 12,
            ty: 4,
            nm: "Shape Layer 2",
            sr: 1,
            ks: {
              o: { a: 0, k: 100, ix: 11 },
              r: { a: 0, k: 17, ix: 10 },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.167, y: 0.167 },
                    t: 0,
                    s: [639, 126, 0],
                    to: [0, -8.333, 0],
                    ti: [0, 0, 0],
                  },
                  {
                    i: { x: 0.833, y: 0.833 },
                    o: { x: 0.6, y: 0 },
                    t: 16,
                    s: [639, 76, 0],
                    to: [0, 0, 0],
                    ti: [0, -8.333, 0],
                  },
                  { t: 30, s: [639, 126, 0] },
                ],
                ix: 2,
              },
              a: { a: 0, k: [0, 0, 0], ix: 1 },
              s: { a: 0, k: [16, 16, 100], ix: 6 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [411.844, -107.031],
                          [291.844, -7.031],
                          [-0.156, 108.969],
                          [-276.156, 0.969],
                          [-404.156, -99.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 15",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 1,
                    ty: "sh",
                    ix: 2,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [175.844, -235.031],
                          [155.844, -183.031],
                          [-0.156, -143.031],
                          [-164.156, -187.031],
                          [-192.156, -243.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 14",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 2,
                    ty: "sh",
                    ix: 3,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-168.156, -191.031],
                          [-284.156, -15.031],
                          [-12.156, 508.969],
                          [283.844, -11.031],
                          [159.844, -187.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 13",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 3,
                    ty: "sh",
                    ix: 4,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [474, -181],
                          [574, -221],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 8",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 4,
                    ty: "sh",
                    ix: 5,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-614, -201],
                          [-486, -141],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 9",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 5,
                    ty: "sh",
                    ix: 6,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [482, -277],
                          [406, -213],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 7",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 6,
                    ty: "sh",
                    ix: 7,
                    ks: { a: 0, k: { i: [], o: [], v: [], c: !1 }, ix: 2 },
                    nm: "Path 5",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 7,
                    ty: "sh",
                    ix: 8,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-456.156, -231.031],
                          [-412.156, -175.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 12",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 8,
                    ty: "sh",
                    ix: 9,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-4.156, -319.031],
                          [-188.156, -247.031],
                          [-420.156, -103.031],
                          [-8.156, 504.969],
                          [415.844, -107.031],
                          [175.844, -247.031],
                        ],
                        c: !0,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 9,
                    ty: "sh",
                    ix: 10,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [3.844, -139.031],
                          [-4.156, 504.969],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 16",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 10,
                    ty: "sh",
                    ix: 11,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-556.156, -111.031],
                          [-472.156, -95.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 17",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 11,
                    ty: "sh",
                    ix: 12,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [483.844, -127.031],
                          [551.844, -99.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 18",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ty: "st",
                    c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                    o: { a: 0, k: 100, ix: 4 },
                    w: { a: 0, k: 22, ix: 5 },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: !1,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [2.156, 2.031], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                  },
                ],
                nm: "Shape 1",
                np: 13,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: !1,
              },
            ],
            ip: 10,
            op: 20,
            st: 10,
            bm: 0,
          },
          {
            ddd: 0,
            ind: 13,
            ty: 4,
            nm: "Shape Layer 3",
            sr: 1,
            ks: {
              o: { a: 0, k: 100, ix: 11 },
              r: { a: 0, k: 17, ix: 10 },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.167, y: 0.167 },
                    t: 0,
                    s: [639, 126, 0],
                    to: [0, -8.333, 0],
                    ti: [0, 0, 0],
                  },
                  {
                    i: { x: 0.833, y: 0.833 },
                    o: { x: 0.6, y: 0 },
                    t: 16,
                    s: [639, 76, 0],
                    to: [0, 0, 0],
                    ti: [0, -8.333, 0],
                  },
                  { t: 30, s: [639, 126, 0] },
                ],
                ix: 2,
              },
              a: { a: 0, k: [0, 0, 0], ix: 1 },
              s: { a: 0, k: [16, 16, 100], ix: 6 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [486, -101],
                          [610, -109],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 8",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 1,
                    ty: "sh",
                    ix: 2,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-614, -101],
                          [-486, -85],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 9",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 2,
                    ty: "sh",
                    ix: 3,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [510, -273],
                          [458, -217],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 7",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 3,
                    ty: "sh",
                    ix: 4,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-126, -125],
                          [-206, 35],
                          [-6, 503],
                          [206, 35],
                          [122, -133],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 6",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 4,
                    ty: "sh",
                    ix: 5,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-254, -237],
                          [-122, -133],
                          [126, -133],
                          [262, -245],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 4",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 5,
                    ty: "sh",
                    ix: 6,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-386, -89],
                          [-198, 47],
                          [218, 35],
                          [382, -89],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 2",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 6,
                    ty: "sh",
                    ix: 7,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-134, -325],
                          [-246, -253],
                          [-394, -89],
                          [-6, 515],
                          [394, -89],
                          [278, -241],
                          [126, -325],
                        ],
                        c: !0,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 7,
                    ty: "sh",
                    ix: 8,
                    ks: { a: 0, k: { i: [], o: [], v: [], c: !1 }, ix: 2 },
                    nm: "Path 5",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 8,
                    ty: "sh",
                    ix: 9,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-528.156, 64.969],
                          [-452.156, 8.969],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 10",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 9,
                    ty: "sh",
                    ix: 10,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [447.844, 16.969],
                          [539.844, 76.969],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 11",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 10,
                    ty: "sh",
                    ix: 11,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-544.156, -239.031],
                          [-452.156, -183.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 12",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ty: "st",
                    c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                    o: { a: 0, k: 100, ix: 4 },
                    w: { a: 0, k: 22, ix: 5 },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: !1,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [2.156, 2.031], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                  },
                ],
                nm: "Shape 1",
                np: 12,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: !1,
              },
            ],
            ip: 20,
            op: 30,
            st: 20,
            bm: 0,
          },
          {
            ddd: 0,
            ind: 14,
            ty: 4,
            nm: "Shape Layer 1",
            sr: 1,
            ks: {
              o: { a: 0, k: 100, ix: 11 },
              r: { a: 0, k: 17, ix: 10 },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.167, y: 0.167 },
                    t: 0,
                    s: [639, 126, 0],
                    to: [0, -8.333, 0],
                    ti: [0, 0, 0],
                  },
                  {
                    i: { x: 0.833, y: 0.833 },
                    o: { x: 0.6, y: 0 },
                    t: 16,
                    s: [639, 76, 0],
                    to: [0, 0, 0],
                    ti: [0, -8.333, 0],
                  },
                  { t: 30, s: [639, 126, 0] },
                ],
                ix: 2,
              },
              a: { a: 0, k: [0, 0, 0], ix: 1 },
              s: { a: 0, k: [16, 16, 100], ix: 6 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [486, -101],
                          [610, -109],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 8",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 1,
                    ty: "sh",
                    ix: 2,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-614, -101],
                          [-486, -85],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 9",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 2,
                    ty: "sh",
                    ix: 3,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [510, -273],
                          [458, -217],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 7",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 3,
                    ty: "sh",
                    ix: 4,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-126, -125],
                          [-206, 35],
                          [-6, 503],
                          [206, 35],
                          [122, -133],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 6",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 4,
                    ty: "sh",
                    ix: 5,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-254, -237],
                          [-122, -133],
                          [126, -133],
                          [262, -245],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 4",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 5,
                    ty: "sh",
                    ix: 6,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-386, -89],
                          [-198, 47],
                          [218, 35],
                          [382, -89],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 2",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 6,
                    ty: "sh",
                    ix: 7,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-134, -325],
                          [-246, -253],
                          [-394, -89],
                          [-6, 515],
                          [394, -89],
                          [278, -241],
                          [126, -325],
                        ],
                        c: !0,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 7,
                    ty: "sh",
                    ix: 8,
                    ks: { a: 0, k: { i: [], o: [], v: [], c: !1 }, ix: 2 },
                    nm: "Path 5",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 8,
                    ty: "sh",
                    ix: 9,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-528.156, 64.969],
                          [-452.156, 8.969],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 10",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 9,
                    ty: "sh",
                    ix: 10,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [447.844, 16.969],
                          [539.844, 76.969],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 11",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ind: 10,
                    ty: "sh",
                    ix: 11,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-544.156, -239.031],
                          [-452.156, -183.031],
                        ],
                        c: !1,
                      },
                      ix: 2,
                    },
                    nm: "Path 12",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ty: "st",
                    c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                    o: { a: 0, k: 100, ix: 4 },
                    w: { a: 0, k: 22, ix: 5 },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: !1,
                  },
                  {
                    ty: "gr",
                    it: [
                      {
                        ind: 0,
                        ty: "sh",
                        ix: 1,
                        ks: {
                          a: 0,
                          k: {
                            i: [
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [-614, -101],
                              [-486, -85],
                            ],
                            c: !1,
                          },
                          ix: 2,
                        },
                        nm: "Path 1",
                        mn: "ADBE Vector Shape - Group",
                        hd: !1,
                      },
                      {
                        ty: "st",
                        c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                        o: { a: 0, k: 100, ix: 4 },
                        w: { a: 0, k: 2, ix: 5 },
                        lc: 1,
                        lj: 1,
                        ml: 4,
                        bm: 0,
                        nm: "Stroke 1",
                        mn: "ADBE Vector Graphic - Stroke",
                        hd: !1,
                      },
                      {
                        ty: "tr",
                        p: { a: 0, k: [0, 0], ix: 2 },
                        a: { a: 0, k: [0, 0], ix: 1 },
                        s: { a: 0, k: [100, 100], ix: 3 },
                        r: { a: 0, k: 0, ix: 6 },
                        o: { a: 0, k: 100, ix: 7 },
                        sk: { a: 0, k: 0, ix: 4 },
                        sa: { a: 0, k: 0, ix: 5 },
                        nm: "Transform",
                      },
                    ],
                    nm: "Shape 2",
                    np: 3,
                    cix: 2,
                    bm: 0,
                    ix: 14,
                    mn: "ADBE Vector Group",
                    hd: !1,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [2.156, 2.031], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                  },
                ],
                nm: "Shape 1",
                np: 14,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: !1,
              },
            ],
            ip: 0,
            op: 10,
            st: 0,
            bm: 0,
          },
          {
            ddd: 0,
            ind: 15,
            ty: 4,
            nm: "hand basket",
            sr: 1,
            ks: {
              o: { a: 0, k: 100, ix: 11 },
              r: { a: 0, k: 0, ix: 10 },
              p: { a: 0, k: [241.991, 248.882, 0], ix: 2 },
              a: { a: 0, k: [447.491, 117.378, 0], ix: 1 },
              s: { a: 0, k: [100, 100, 100], ix: 6 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ty: "gr",
                    it: [
                      {
                        ty: "gr",
                        it: [
                          {
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                              a: 0,
                              k: {
                                i: [
                                  [0, 0],
                                  [0, 0],
                                ],
                                o: [
                                  [0, 0],
                                  [0, 0],
                                ],
                                v: [
                                  [-8.891, -13.714],
                                  [8.891, 13.714],
                                ],
                                c: !1,
                              },
                              ix: 2,
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1,
                          },
                          {
                            ty: "st",
                            c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                            o: { a: 0, k: 100, ix: 4 },
                            w: { a: 0, k: 3, ix: 5 },
                            lc: 2,
                            lj: 2,
                            bm: 0,
                            nm: "Stroke 1",
                            mn: "ADBE Vector Graphic - Stroke",
                            hd: !1,
                          },
                          {
                            ty: "tr",
                            p: { a: 0, k: [643.553, 142.975], ix: 2 },
                            a: { a: 0, k: [0, 0], ix: 1 },
                            s: { a: 0, k: [100, 100], ix: 3 },
                            r: { a: 0, k: 0, ix: 6 },
                            o: { a: 0, k: 100, ix: 7 },
                            sk: { a: 0, k: 0, ix: 4 },
                            sa: { a: 0, k: 0, ix: 5 },
                            nm: "Transform",
                          },
                        ],
                        nm: "Group 20",
                        np: 2,
                        cix: 2,
                        bm: 0,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1,
                      },
                      {
                        ty: "gr",
                        it: [
                          {
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                              a: 0,
                              k: {
                                i: [
                                  [0, 0],
                                  [-1.969, -1.568],
                                  [8.372, 14.14],
                                  [0, 0],
                                  [-10.232, -18.828],
                                ],
                                o: [
                                  [1.497, 1.442],
                                  [11.906, 9.488],
                                  [-8.372, -14.139],
                                  [-14.14, -18.939],
                                  [0, 0],
                                ],
                                v: [
                                  [-3.024, 17.553],
                                  [2.14, 22.046],
                                  [20.93, 9.209],
                                  [5.117, -12.596],
                                  [-19.07, -7.162],
                                ],
                                c: !1,
                              },
                              ix: 2,
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1,
                          },
                          {
                            ty: "st",
                            c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                            o: { a: 0, k: 100, ix: 4 },
                            w: { a: 0, k: 3, ix: 5 },
                            lc: 2,
                            lj: 2,
                            bm: 0,
                            nm: "Stroke 1",
                            mn: "ADBE Vector Graphic - Stroke",
                            hd: !1,
                          },
                          {
                            ty: "tr",
                            p: { a: 0, k: [655.111, 138.326], ix: 2 },
                            a: { a: 0, k: [0, 0], ix: 1 },
                            s: { a: 0, k: [100, 100], ix: 3 },
                            r: { a: 0, k: 0, ix: 6 },
                            o: { a: 0, k: 100, ix: 7 },
                            sk: { a: 0, k: 0, ix: 4 },
                            sa: { a: 0, k: 0, ix: 5 },
                            nm: "Transform",
                          },
                        ],
                        nm: "Group 23",
                        np: 2,
                        cix: 2,
                        bm: 0,
                        ix: 2,
                        mn: "ADBE Vector Group",
                        hd: !1,
                      },
                      {
                        ty: "gr",
                        it: [
                          {
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                              a: 0,
                              k: {
                                i: [
                                  [0, 0],
                                  [4.356, 11.64],
                                  [0.254, 0.491],
                                ],
                                o: [
                                  [9.719, 13.611],
                                  [-0.178, -0.476],
                                  [0, 0],
                                ],
                                v: [
                                  [-13.669, -3.529],
                                  [9.313, -8.632],
                                  [8.667, -10.083],
                                ],
                                c: !1,
                              },
                              ix: 2,
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1,
                          },
                          {
                            ty: "st",
                            c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                            o: { a: 0, k: 100, ix: 4 },
                            w: { a: 0, k: 3, ix: 5 },
                            lc: 2,
                            lj: 2,
                            bm: 0,
                            nm: "Stroke 1",
                            mn: "ADBE Vector Graphic - Stroke",
                            hd: !1,
                          },
                          {
                            ty: "tr",
                            p: { a: 0, k: [642.574, 165.018], ix: 2 },
                            a: { a: 0, k: [0, 0], ix: 1 },
                            s: { a: 0, k: [100, 100], ix: 3 },
                            r: { a: 0, k: 0, ix: 6 },
                            o: { a: 0, k: 100, ix: 7 },
                            sk: { a: 0, k: 0, ix: 4 },
                            sa: { a: 0, k: 0, ix: 5 },
                            nm: "Transform",
                          },
                        ],
                        nm: "Group 24",
                        np: 2,
                        cix: 2,
                        bm: 0,
                        ix: 3,
                        mn: "ADBE Vector Group",
                        hd: !1,
                      },
                      {
                        ty: "gr",
                        it: [
                          {
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                              a: 0,
                              k: {
                                i: [
                                  [0, 0],
                                  [-8.15, -23.384],
                                ],
                                o: [
                                  [-12.278, -16.559],
                                  [0, 0],
                                ],
                                v: [
                                  [19.098, 8.286],
                                  [-10.948, 11.692],
                                ],
                                c: !1,
                              },
                              ix: 2,
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1,
                          },
                          {
                            ty: "st",
                            c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                            o: { a: 0, k: 100, ix: 4 },
                            w: { a: 0, k: 3, ix: 5 },
                            lc: 2,
                            lj: 2,
                            bm: 0,
                            nm: "Stroke 1",
                            mn: "ADBE Vector Graphic - Stroke",
                            hd: !1,
                          },
                          {
                            ty: "tr",
                            p: { a: 0, k: [616.943, 122.878], ix: 2 },
                            a: { a: 0, k: [0, 0], ix: 1 },
                            s: { a: 0, k: [100, 100], ix: 3 },
                            r: { a: 0, k: 0, ix: 6 },
                            o: { a: 0, k: 100, ix: 7 },
                            sk: { a: 0, k: 0, ix: 4 },
                            sa: { a: 0, k: 0, ix: 5 },
                            nm: "Transform",
                          },
                        ],
                        nm: "Group 25",
                        np: 2,
                        cix: 2,
                        bm: 0,
                        ix: 4,
                        mn: "ADBE Vector Group",
                        hd: !1,
                      },
                      {
                        ty: "gr",
                        it: [
                          {
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                              a: 0,
                              k: {
                                i: [
                                  [7.441, 12.278],
                                  [-12.02, -11.729],
                                  [-9.116, -10.746],
                                  [10.791, 4.838],
                                ],
                                o: [
                                  [-6.66, -10.989],
                                  [12.534, 12.228],
                                  [8.453, 9.963],
                                  [-10.79, -4.837],
                                ],
                                v: [
                                  [-22.663, -4.813],
                                  [-6.85, -18.136],
                                  [20.871, 13.12],
                                  [6.359, 25.027],
                                ],
                                c: !0,
                              },
                              ix: 2,
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1,
                          },
                          {
                            ty: "st",
                            c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                            o: { a: 0, k: 100, ix: 4 },
                            w: { a: 0, k: 3, ix: 5 },
                            lc: 2,
                            lj: 2,
                            bm: 0,
                            nm: "Stroke 1",
                            mn: "ADBE Vector Graphic - Stroke",
                            hd: !1,
                          },
                          {
                            ty: "tr",
                            p: { a: 0, k: [607.542, 147.812], ix: 2 },
                            a: { a: 0, k: [0, 0], ix: 1 },
                            s: { a: 0, k: [100, 100], ix: 3 },
                            r: { a: 0, k: 0, ix: 6 },
                            o: { a: 0, k: 100, ix: 7 },
                            sk: { a: 0, k: 0, ix: 4 },
                            sa: { a: 0, k: 0, ix: 5 },
                            nm: "Transform",
                          },
                        ],
                        nm: "Group 26",
                        np: 2,
                        cix: 2,
                        bm: 0,
                        ix: 5,
                        mn: "ADBE Vector Group",
                        hd: !1,
                      },
                      {
                        ty: "gr",
                        it: [
                          {
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                              a: 0,
                              k: {
                                i: [
                                  [-10.232, -18.828],
                                  [-8.15, -23.384],
                                  [-0.001, -0.002],
                                  [2.048, 1.667],
                                  [-6.66, -10.989],
                                  [-10.791, -4.837],
                                  [6.139, 11.534],
                                  [0.654, 1.095],
                                  [-1.219, -1.707],
                                  [6.247, 12.339],
                                  [-2.289, -1.823],
                                  [8.372, 14.14],
                                  [0, 0],
                                ],
                                o: [
                                  [-12.278, -16.559],
                                  [0.001, 0.003],
                                  [-1.835, -1.608],
                                  [-13.022, -10.605],
                                  [7.441, 12.278],
                                  [10.79, 4.838],
                                  [-0.606, -1.139],
                                  [1.301, 0.975],
                                  [10.048, 14.074],
                                  [1.666, 1.664],
                                  [11.906, 9.488],
                                  [-8.372, -14.14],
                                  [-14.14, -18.938],
                                ],
                                v: [
                                  [4.725, -11.07],
                                  [-24.82, -7.664],
                                  [-24.817, -7.656],
                                  [-30.624, -12.558],
                                  [-46.437, 0.765],
                                  [-17.414, 30.604],
                                  [-2.902, 18.698],
                                  [-4.799, 15.356],
                                  [-1.011, 19.255],
                                  [20.059, 12.945],
                                  [25.935, 18.139],
                                  [44.725, 5.302],
                                  [28.912, -16.504],
                                ],
                                c: !0,
                              },
                              ix: 2,
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1,
                          },
                          {
                            ty: "fl",
                            c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
                            o: { a: 0, k: 100, ix: 5 },
                            r: 1,
                            bm: 0,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1,
                          },
                          {
                            ty: "tr",
                            p: { a: 0, k: [631.054, 142.234], ix: 2 },
                            a: { a: 0, k: [0, 0], ix: 1 },
                            s: { a: 0, k: [100, 100], ix: 3 },
                            r: { a: 0, k: 0, ix: 6 },
                            o: { a: 0, k: 100, ix: 7 },
                            sk: { a: 0, k: 0, ix: 4 },
                            sa: { a: 0, k: 0, ix: 5 },
                            nm: "Transform",
                          },
                        ],
                        nm: "hand fill",
                        np: 2,
                        cix: 2,
                        bm: 0,
                        ix: 6,
                        mn: "ADBE Vector Group",
                        hd: !1,
                      },
                      {
                        ty: "tr",
                        p: { a: 0, k: [630.623, 144.213], ix: 2 },
                        a: { a: 0, k: [630.623, 144.213], ix: 1 },
                        s: { a: 0, k: [100, 100], ix: 3 },
                        r: { a: 0, k: -2, ix: 6 },
                        o: { a: 0, k: 100, ix: 7 },
                        sk: { a: 0, k: 0, ix: 4 },
                        sa: { a: 0, k: 0, ix: 5 },
                        nm: "Transform",
                      },
                    ],
                    nm: "hand",
                    np: 6,
                    cix: 2,
                    bm: 0,
                    ix: 1,
                    mn: "ADBE Vector Group",
                    hd: !1,
                  },
                  {
                    ty: "gr",
                    it: [
                      {
                        ty: "gr",
                        it: [
                          {
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                              a: 0,
                              k: {
                                i: [
                                  [0, 0],
                                  [-23.163, 13.117],
                                  [0, 0],
                                ],
                                o: [
                                  [0, 0],
                                  [23.163, -13.116],
                                  [0, 0],
                                ],
                                v: [
                                  [-37.676, 14.74],
                                  [-5.534, 7.144],
                                  [37.676, -20.261],
                                ],
                                c: !1,
                              },
                              ix: 2,
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1,
                          },
                          {
                            ty: "st",
                            c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                            o: { a: 0, k: 100, ix: 4 },
                            w: { a: 0, k: 3, ix: 5 },
                            lc: 2,
                            lj: 2,
                            bm: 0,
                            nm: "Stroke 1",
                            mn: "ADBE Vector Graphic - Stroke",
                            hd: !1,
                          },
                          {
                            ty: "tr",
                            p: { a: 0, k: [802.877, 198.345], ix: 2 },
                            a: { a: 0, k: [0, 0], ix: 1 },
                            s: { a: 0, k: [100, 100], ix: 3 },
                            r: { a: 0, k: 0, ix: 6 },
                            o: { a: 0, k: 100, ix: 7 },
                            sk: { a: 0, k: 0, ix: 4 },
                            sa: { a: 0, k: 0, ix: 5 },
                            nm: "Transform",
                          },
                        ],
                        nm: "Group 10",
                        np: 2,
                        cix: 2,
                        bm: 0,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: !1,
                      },
                      {
                        ty: "gr",
                        it: [
                          {
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                              a: 0,
                              k: {
                                i: [
                                  [0, 0],
                                  [-28.433, 15.628],
                                  [0, 0],
                                  [10.326, -11.163],
                                  [9.767, 0],
                                  [15.907, 19.256],
                                  [0, 0],
                                ],
                                o: [
                                  [0, 0],
                                  [28.434, -15.628],
                                  [-0.781, 14.505],
                                  [-10.326, 11.164],
                                  [-9.768, 0],
                                  [-15.907, -19.256],
                                  [0, 0],
                                ],
                                v: [
                                  [-43.224, 7.565],
                                  [9.85, -3.175],
                                  [59.99, -40.36],
                                  [29.458, 23.336],
                                  [-3.298, 40.36],
                                  [-39.698, 12.732],
                                  [-59.991, -33.474],
                                ],
                                c: !1,
                              },
                              ix: 2,
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1,
                          },
                          {
                            ty: "st",
                            c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                            o: { a: 0, k: 100, ix: 4 },
                            w: { a: 0, k: 3, ix: 5 },
                            lc: 2,
                            lj: 2,
                            bm: 0,
                            nm: "Stroke 1",
                            mn: "ADBE Vector Graphic - Stroke",
                            hd: !1,
                          },
                          {
                            ty: "tr",
                            p: { a: 0, k: [792.548, 186.897], ix: 2 },
                            a: { a: 0, k: [0, 0], ix: 1 },
                            s: { a: 0, k: [100, 100], ix: 3 },
                            r: { a: 0, k: 0, ix: 6 },
                            o: { a: 0, k: 100, ix: 7 },
                            sk: { a: 0, k: 0, ix: 4 },
                            sa: { a: 0, k: 0, ix: 5 },
                            nm: "Transform",
                          },
                        ],
                        nm: "Group 11",
                        np: 2,
                        cix: 2,
                        bm: 0,
                        ix: 2,
                        mn: "ADBE Vector Group",
                        hd: !1,
                      },
                      {
                        ty: "gr",
                        it: [
                          {
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                              a: 0,
                              k: {
                                i: [
                                  [0, 0],
                                  [-23.163, 16.772],
                                ],
                                o: [
                                  [0, 0],
                                  [0, 0],
                                ],
                                v: [
                                  [-21.11, 7.042],
                                  [21.11, -8.386],
                                ],
                                c: !1,
                              },
                              ix: 2,
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1,
                          },
                          {
                            ty: "st",
                            c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                            o: { a: 0, k: 100, ix: 4 },
                            w: { a: 0, k: 3, ix: 5 },
                            lc: 2,
                            lj: 2,
                            bm: 0,
                            nm: "Stroke 1",
                            mn: "ADBE Vector Graphic - Stroke",
                            hd: !1,
                          },
                          {
                            ty: "tr",
                            p: { a: 0, k: [761.721, 172.042], ix: 2 },
                            a: { a: 0, k: [0, 0], ix: 1 },
                            s: { a: 0, k: [100, 100], ix: 3 },
                            r: { a: 0, k: 0, ix: 6 },
                            o: { a: 0, k: 100, ix: 7 },
                            sk: { a: 0, k: 0, ix: 4 },
                            sa: { a: 0, k: 0, ix: 5 },
                            nm: "Transform",
                          },
                        ],
                        nm: "Group 12",
                        np: 2,
                        cix: 2,
                        bm: 0,
                        ix: 3,
                        mn: "ADBE Vector Group",
                        hd: !1,
                      },
                      {
                        ty: "gr",
                        it: [
                          {
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                              a: 0,
                              k: {
                                i: [
                                  [0, 0],
                                  [-8.093, -5.024],
                                  [0, 0],
                                ],
                                o: [
                                  [0, 0],
                                  [8.093, 5.023],
                                  [0, 0],
                                ],
                                v: [
                                  [-11.136, -8.607],
                                  [0.299, 2.524],
                                  [11.136, 8.607],
                                ],
                                c: !1,
                              },
                              ix: 2,
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1,
                          },
                          {
                            ty: "st",
                            c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                            o: { a: 0, k: 100, ix: 4 },
                            w: { a: 0, k: 3, ix: 5 },
                            lc: 2,
                            lj: 2,
                            bm: 0,
                            nm: "Stroke 1",
                            mn: "ADBE Vector Graphic - Stroke",
                            hd: !1,
                          },
                          {
                            ty: "tr",
                            p: { a: 0, k: [829.416, 169.477], ix: 2 },
                            a: { a: 0, k: [0, 0], ix: 1 },
                            s: { a: 0, k: [100, 100], ix: 3 },
                            r: { a: 0, k: 0, ix: 6 },
                            o: { a: 0, k: 100, ix: 7 },
                            sk: { a: 0, k: 0, ix: 4 },
                            sa: { a: 0, k: 0, ix: 5 },
                            nm: "Transform",
                          },
                        ],
                        nm: "Group 13",
                        np: 2,
                        cix: 2,
                        bm: 0,
                        ix: 4,
                        mn: "ADBE Vector Group",
                        hd: !1,
                      },
                      {
                        ty: "gr",
                        it: [
                          {
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                              a: 0,
                              k: {
                                i: [
                                  [0, 0],
                                  [-14.233, -7.256],
                                  [0, 0],
                                ],
                                o: [
                                  [0, 0],
                                  [14.233, 7.256],
                                  [0, 0],
                                ],
                                v: [
                                  [-20.489, -15.378],
                                  [1.351, 6.033],
                                  [20.49, 15.378],
                                ],
                                c: !1,
                              },
                              ix: 2,
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1,
                          },
                          {
                            ty: "st",
                            c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                            o: { a: 0, k: 100, ix: 4 },
                            w: { a: 0, k: 3, ix: 5 },
                            lc: 2,
                            lj: 2,
                            bm: 0,
                            nm: "Stroke 1",
                            mn: "ADBE Vector Graphic - Stroke",
                            hd: !1,
                          },
                          {
                            ty: "tr",
                            p: { a: 0, k: [811.62, 179.084], ix: 2 },
                            a: { a: 0, k: [0, 0], ix: 1 },
                            s: { a: 0, k: [100, 100], ix: 3 },
                            r: { a: 0, k: 0, ix: 6 },
                            o: { a: 0, k: 100, ix: 7 },
                            sk: { a: 0, k: 0, ix: 4 },
                            sa: { a: 0, k: 0, ix: 5 },
                            nm: "Transform",
                          },
                        ],
                        nm: "Group 14",
                        np: 2,
                        cix: 2,
                        bm: 0,
                        ix: 5,
                        mn: "ADBE Vector Group",
                        hd: !1,
                      },
                      {
                        ty: "gr",
                        it: [
                          {
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                              a: 0,
                              k: {
                                i: [
                                  [0, 0],
                                  [-19.256, -12],
                                  [0, 0],
                                ],
                                o: [
                                  [0, 0],
                                  [19.256, 12],
                                  [0, 0],
                                ],
                                v: [
                                  [-29.64, -22.888],
                                  [8.313, 10.888],
                                  [29.639, 21.051],
                                ],
                                c: !1,
                              },
                              ix: 2,
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1,
                          },
                          {
                            ty: "st",
                            c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                            o: { a: 0, k: 100, ix: 4 },
                            w: { a: 0, k: 3, ix: 5 },
                            lc: 2,
                            lj: 2,
                            bm: 0,
                            nm: "Stroke 1",
                            mn: "ADBE Vector Graphic - Stroke",
                            hd: !1,
                          },
                          {
                            ty: "tr",
                            p: { a: 0, k: [792.936, 187.345], ix: 2 },
                            a: { a: 0, k: [0, 0], ix: 1 },
                            s: { a: 0, k: [100, 100], ix: 3 },
                            r: { a: 0, k: 0, ix: 6 },
                            o: { a: 0, k: 100, ix: 7 },
                            sk: { a: 0, k: 0, ix: 4 },
                            sa: { a: 0, k: 0, ix: 5 },
                            nm: "Transform",
                          },
                        ],
                        nm: "Group 15",
                        np: 2,
                        cix: 2,
                        bm: 0,
                        ix: 6,
                        mn: "ADBE Vector Group",
                        hd: !1,
                      },
                      {
                        ty: "gr",
                        it: [
                          {
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                              a: 0,
                              k: {
                                i: [
                                  [0, 0],
                                  [-23.72, -20.094],
                                  [0, 0],
                                ],
                                o: [
                                  [0, 0],
                                  [23.721, 20.092],
                                  [0, 0],
                                ],
                                v: [
                                  [-34.666, -30.996],
                                  [-3.721, 7.226],
                                  [34.666, 30.996],
                                ],
                                c: !1,
                              },
                              ix: 2,
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1,
                          },
                          {
                            ty: "st",
                            c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                            o: { a: 0, k: 100, ix: 4 },
                            w: { a: 0, k: 3, ix: 5 },
                            lc: 2,
                            lj: 2,
                            bm: 0,
                            nm: "Stroke 1",
                            mn: "ADBE Vector Graphic - Stroke",
                            hd: !1,
                          },
                          {
                            ty: "tr",
                            p: { a: 0, k: [774.273, 189.334], ix: 2 },
                            a: { a: 0, k: [0, 0], ix: 1 },
                            s: { a: 0, k: [100, 100], ix: 3 },
                            r: { a: 0, k: 0, ix: 6 },
                            o: { a: 0, k: 100, ix: 7 },
                            sk: { a: 0, k: 0, ix: 4 },
                            sa: { a: 0, k: 0, ix: 5 },
                            nm: "Transform",
                          },
                        ],
                        nm: "Group 16",
                        np: 2,
                        cix: 2,
                        bm: 0,
                        ix: 7,
                        mn: "ADBE Vector Group",
                        hd: !1,
                      },
                      {
                        ty: "gr",
                        it: [
                          {
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                              a: 0,
                              k: {
                                i: [
                                  [-1.191, -6.784],
                                  [-39.008, 0.755],
                                  [1.191, 6.783],
                                  [33.749, -2.908],
                                ],
                                o: [
                                  [1.706, 9.702],
                                  [28.496, -0.551],
                                  [-1.193, -6.784],
                                  [-28.265, 2.435],
                                ],
                                v: [
                                  [-53.32, 3.778],
                                  [0.372, 13.359],
                                  [53.32, -4.632],
                                  [-3.945, -11.206],
                                ],
                                c: !0,
                              },
                              ix: 2,
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1,
                          },
                          {
                            ty: "st",
                            c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                            o: { a: 0, k: 100, ix: 4 },
                            w: { a: 0, k: 3, ix: 5 },
                            lc: 2,
                            lj: 2,
                            bm: 0,
                            nm: "Stroke 1",
                            mn: "ADBE Vector Graphic - Stroke",
                            hd: !1,
                          },
                          {
                            ty: "tr",
                            p: { a: 0, k: [792.073, 142.309], ix: 2 },
                            a: { a: 0, k: [0, 0], ix: 1 },
                            s: { a: 0, k: [100, 100], ix: 3 },
                            r: { a: 0, k: 0, ix: 6 },
                            o: { a: 0, k: 100, ix: 7 },
                            sk: { a: 0, k: 0, ix: 4 },
                            sa: { a: 0, k: 0, ix: 5 },
                            nm: "Transform",
                          },
                        ],
                        nm: "Group 21",
                        np: 2,
                        cix: 2,
                        bm: 0,
                        ix: 8,
                        mn: "ADBE Vector Group",
                        hd: !1,
                      },
                      {
                        ty: "gr",
                        it: [
                          {
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                              a: 0,
                              k: {
                                i: [
                                  [0, -11.209],
                                  [-47.369, 0],
                                  [0, 11.209],
                                  [40.259, -1.865],
                                ],
                                o: [
                                  [0, 16.033],
                                  [33.754, 0],
                                  [0, -11.209],
                                  [-33.717, 1.562],
                                ],
                                v: [
                                  [-63.525, 0.932],
                                  [-2.409, 21.228],
                                  [63.525, -3.686],
                                  [-2.409, -19.363],
                                ],
                                c: !0,
                              },
                              ix: 2,
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1,
                          },
                          {
                            ty: "st",
                            c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                            o: { a: 0, k: 100, ix: 4 },
                            w: { a: 0, k: 3, ix: 5 },
                            lc: 2,
                            lj: 2,
                            bm: 0,
                            nm: "Stroke 1",
                            mn: "ADBE Vector Graphic - Stroke",
                            hd: !1,
                          },
                          {
                            ty: "tr",
                            p: { a: 0, k: [793.54, 142.478], ix: 2 },
                            a: { a: 0, k: [0, 0], ix: 1 },
                            s: { a: 0, k: [100, 100], ix: 3 },
                            r: { a: 0, k: 0, ix: 6 },
                            o: { a: 0, k: 100, ix: 7 },
                            sk: { a: 0, k: 0, ix: 4 },
                            sa: { a: 0, k: 0, ix: 5 },
                            nm: "Transform",
                          },
                        ],
                        nm: "Group 22",
                        np: 2,
                        cix: 2,
                        bm: 0,
                        ix: 9,
                        mn: "ADBE Vector Group",
                        hd: !1,
                      },
                      {
                        ty: "gr",
                        it: [
                          {
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                              a: 0,
                              k: {
                                i: [
                                  [0, 0],
                                  [33.922, 2.341],
                                  [0, -4.179],
                                  [-3.871, -0.15],
                                  [0, 0],
                                ],
                                o: [
                                  [-1.95, 1.573],
                                  [-4.168, -0.288],
                                  [0, 3.873],
                                  [0, 0],
                                  [0, 0],
                                ],
                                v: [
                                  [88.023, -0.365],
                                  [-80.32, -10.309],
                                  [-88.023, -3.115],
                                  [-81.091, 4.09],
                                  [86.88, 10.597],
                                ],
                                c: !1,
                              },
                              ix: 2,
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: !1,
                          },
                          {
                            ty: "st",
                            c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                            o: { a: 0, k: 100, ix: 4 },
                            w: { a: 0, k: 3, ix: 5 },
                            lc: 2,
                            lj: 2,
                            bm: 0,
                            nm: "Stroke 1",
                            mn: "ADBE Vector Graphic - Stroke",
                            hd: !1,
                          },
                          {
                            ty: "fl",
                            c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
                            o: { a: 0, k: 100, ix: 5 },
                            r: 1,
                            bm: 0,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: !1,
                          },
                          {
                            ty: "tr",
                            p: { a: 0, k: [643.134, 139.089], ix: 2 },
                            a: { a: 0, k: [0, 0], ix: 1 },
                            s: { a: 0, k: [100, 100], ix: 3 },
                            r: { a: 0, k: 0, ix: 6 },
                            o: { a: 0, k: 100, ix: 7 },
                            sk: { a: 0, k: 0, ix: 4 },
                            sa: { a: 0, k: 0, ix: 5 },
                            nm: "Transform",
                          },
                        ],
                        nm: "Group 30",
                        np: 3,
                        cix: 2,
                        bm: 0,
                        ix: 10,
                        mn: "ADBE Vector Group",
                        hd: !1,
                      },
                      {
                        ty: "tr",
                        p: { a: 0, k: [792.548, 186.897], ix: 2 },
                        a: { a: 0, k: [792.548, 186.897], ix: 1 },
                        s: { a: 0, k: [100, 100], ix: 3 },
                        r: { a: 0, k: 0, ix: 6 },
                        o: { a: 0, k: 100, ix: 7 },
                        sk: { a: 0, k: 0, ix: 4 },
                        sa: { a: 0, k: 0, ix: 5 },
                        nm: "Transform",
                      },
                    ],
                    nm: "basket",
                    np: 10,
                    cix: 2,
                    bm: 0,
                    ix: 2,
                    mn: "ADBE Vector Group",
                    hd: !1,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [706.088, 170.815], ix: 2 },
                    a: { a: 0, k: [706.088, 170.815], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: {
                      a: 1,
                      k: [
                        {
                          i: { x: [0.667], y: [1] },
                          o: { x: [0.333], y: [0] },
                          t: 0,
                          s: [2],
                        },
                        {
                          i: { x: [0.667], y: [1] },
                          o: { x: [0.333], y: [0] },
                          t: 10,
                          s: [-1],
                        },
                        { t: 20, s: [2] },
                      ],
                      ix: 6,
                    },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                  },
                ],
                nm: "hand + basket",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: !1,
              },
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 1,
                      k: [
                        {
                          i: { x: 0.667, y: 1 },
                          o: { x: 0.167, y: 0.167 },
                          t: 0,
                          s: [
                            {
                              i: [
                                [0, 0],
                                [-88.655, 0.278],
                                [-74.261, -8.715],
                                [-49.935, 0.209],
                                [-60.86, -6.06],
                                [-74.192, -6.006],
                                [-70.516, 0.328],
                                [-28.713, -21.034],
                                [-15.335, -2.992],
                                [-2.853, 0.346],
                                [16.185, -20.651],
                              ],
                              o: [
                                [0, 0],
                                [69.335, -0.217],
                                [15.972, 1.874],
                                [61.16, -0.256],
                                [74.526, 7.421],
                                [70.768, 5.729],
                                [38.899, -0.181],
                                [13.285, 9.732],
                                [13.313, 2.598],
                                [6.14, -0.744],
                                [0, 0],
                              ],
                              v: [
                                [-922.515, -87.396],
                                [-779.85, 3.068],
                                [-579.254, -61.434],
                                [-437.288, -13.608],
                                [-260.515, -62.771],
                                [-55.538, 23.386],
                                [150.573, -29.146],
                                [254.167, 23.544],
                                [302.734, 41.872],
                                [329.398, 44.378],
                                [339.329, 65.146],
                              ],
                              c: !1,
                            },
                          ],
                        },
                        {
                          t: 20,
                          s: [
                            {
                              i: [
                                [-76, 6.462],
                                [-56.358, -0.822],
                                [-62.875, -5.378],
                                [-74.809, -6.022],
                                [-70.45, 0.974],
                                [-21.5, -15.962],
                                [-5.975, -1.515],
                                [-5.977, -0.909],
                                [-3.095, -0.11],
                                [-2.138, 0.259],
                                [16.185, -20.651],
                              ],
                              o: [
                                [38, 1.537],
                                [63.098, 0.92],
                                [74.848, 6.403],
                                [69.525, 5.596],
                                [39.484, -0.546],
                                [16.504, 12.253],
                                [5.975, 1.515],
                                [4.069, 0.619],
                                [1.565, 0.055],
                                [6.14, -0.744],
                                [0, 0],
                              ],
                              v: [
                                [-610.515, -66.687],
                                [-451.85, -8.223],
                                [-261.253, -62.725],
                                [-55.476, 23.413],
                                [150.423, -29.062],
                                [253.985, 23.313],
                                [302.636, 41.836],
                                [315.166, 43.825],
                                [324.205, 44.304],
                                [329.398, 44.378],
                                [339.329, 65.146],
                              ],
                              c: !1,
                            },
                          ],
                          h: 1,
                        },
                      ],
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ty: "st",
                    c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                    o: { a: 0, k: 100, ix: 4 },
                    w: { a: 0, k: 3, ix: 5 },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: !1,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [363.014, 72.646], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                  },
                ],
                nm: "arm top",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 2,
                mn: "ADBE Vector Group",
                hd: !1,
              },
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 1,
                      k: [
                        {
                          i: { x: 0.667, y: 1 },
                          o: { x: 0.167, y: 0.167 },
                          t: 0,
                          s: [
                            {
                              i: [
                                [0, 0],
                                [-72.592, -2.425],
                                [-54.558, -3.528],
                                [-60.475, 2.957],
                                [-59.664, -0.372],
                                [-83.29, -4.382],
                                [-84.278, -63.93],
                              ],
                              o: [
                                [0, 0],
                                [72.592, 2.425],
                                [54.558, 3.528],
                                [59.594, -2.914],
                                [83.403, 0.52],
                                [86.074, 4.528],
                                [0, 0],
                              ],
                              v: [
                                [-876.575, -33.855],
                                [-730.542, 43.192],
                                [-548.508, -15.911],
                                [-374.673, 36.772],
                                [-209.617, -32.483],
                                [29.456, 39.171],
                                [288.445, -3.601],
                              ],
                              c: !1,
                            },
                          ],
                        },
                        {
                          t: 20,
                          s: [
                            {
                              i: [
                                [-82.326, -6.167],
                                [-63.898, 1.446],
                                [-61.308, -0.182],
                                [-83.58, -4.537],
                                [-71.716, -4.289],
                                [-34.007, -15.341],
                                [-32.525, 6.1],
                              ],
                              o: [
                                [54.112, 4.053],
                                [61.292, -1.387],
                                [84.546, 0.251],
                                [85.385, 4.635],
                                [31.897, 2.889],
                                [3.574, 1.612],
                                [0, 0],
                              ],
                              v: [
                                [-565.033, -21.316],
                                [-381.973, 35.726],
                                [-210.441, -32.35],
                                [29.591, 38.68],
                                [237.939, -23.432],
                                [309.447, 6.932],
                                [360.444, 7.341],
                              ],
                              c: !1,
                            },
                          ],
                          h: 1,
                        },
                      ],
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ty: "st",
                    c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                    o: { a: 0, k: 100, ix: 4 },
                    w: { a: 0, k: 3, ix: 5 },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: !1,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [301.45, 133.879], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: -0.099, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                  },
                ],
                nm: "arm bottom",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 3,
                mn: "ADBE Vector Group",
                hd: !1,
              },
            ],
            ip: 0,
            op: 142,
            st: 0,
            bm: 0,
          },
          {
            ddd: 0,
            ind: 16,
            ty: 4,
            nm: "diamonds animation",
            sr: 1,
            ks: {
              o: { a: 0, k: 100, ix: 11 },
              r: { a: 0, k: 0, ix: 10 },
              p: { a: 0, k: [221.991, 252.882, 0], ix: 2 },
              a: { a: 0, k: [447.491, 117.378, 0], ix: 1 },
              s: { a: 0, k: [100, 100, 100], ix: 6 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ty: "gr",
                    it: [
                      {
                        ind: 0,
                        ty: "sh",
                        ix: 1,
                        ks: {
                          a: 0,
                          k: {
                            i: [[0, 0]],
                            o: [[0, 0]],
                            v: [[765.875, 101.718]],
                            c: !1,
                          },
                          ix: 2,
                        },
                        nm: "Path 1",
                        mn: "ADBE Vector Shape - Group",
                        hd: !1,
                      },
                      {
                        ty: "st",
                        c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                        o: { a: 0, k: 100, ix: 4 },
                        w: { a: 0, k: 2, ix: 5 },
                        lc: 1,
                        lj: 1,
                        ml: 4,
                        bm: 0,
                        nm: "Stroke 1",
                        mn: "ADBE Vector Graphic - Stroke",
                        hd: !1,
                      },
                      {
                        ty: "fl",
                        c: { a: 0, k: [0, 0, 0, 1], ix: 4 },
                        o: { a: 0, k: 100, ix: 5 },
                        r: 1,
                        bm: 0,
                        nm: "Fill 1",
                        mn: "ADBE Vector Graphic - Fill",
                        hd: !1,
                      },
                      {
                        ty: "tr",
                        p: { a: 0, k: [0, 0], ix: 2 },
                        a: { a: 0, k: [0, 0], ix: 1 },
                        s: { a: 0, k: [100, 100], ix: 3 },
                        r: { a: 0, k: 0, ix: 6 },
                        o: { a: 0, k: 100, ix: 7 },
                        sk: { a: 0, k: 0, ix: 4 },
                        sa: { a: 0, k: 0, ix: 5 },
                        nm: "Transform",
                      },
                    ],
                    nm: "Shape 1",
                    np: 3,
                    cix: 2,
                    bm: 0,
                    ix: 1,
                    mn: "ADBE Vector Group",
                    hd: !1,
                  },
                  {
                    ty: "gr",
                    it: [
                      {
                        ind: 0,
                        ty: "sh",
                        ix: 1,
                        ks: {
                          a: 0,
                          k: {
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, -0.13],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0.04, 0.15],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0.04, 0.12],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [-0.099, -0.14],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [30.26, -20.836],
                              [15.68, -17.245],
                              [17.78, 29.995],
                              [16.82, 33.914],
                              [14.863, 34.454],
                              [12.72, -16.576],
                              [-9.761, -11.796],
                              [14.8, 30.454],
                              [14.98, 34.484],
                              [12.52, 32.475],
                              [12.51, 32.465],
                              [-12.66, -10.826],
                              [-29.4, -1.766],
                              [-30.66, -2.785],
                              [-30.171, -4.755],
                              [-13.61, -13.725],
                              [-13.82, -29.116],
                              [-12.33, -30.105],
                              [-10.89, -30.505],
                              [-10.83, -30.125],
                              [-10.62, -14.685],
                              [11.65, -19.426],
                              [2.079, -33.646],
                              [1.88, -34.086],
                              [3.32, -34.484],
                              [5.23, -34.355],
                              [5.23, -34.345],
                              [14.8, -20.125],
                              [29.239, -23.676],
                              [30.659, -22.484],
                            ],
                            c: !0,
                          },
                          ix: 2,
                        },
                        nm: "Path 1",
                        mn: "ADBE Vector Shape - Group",
                        hd: !1,
                      },
                      {
                        ty: "fl",
                        c: { a: 0, k: [0, 0, 0, 1], ix: 4 },
                        o: { a: 0, k: 100, ix: 5 },
                        r: 1,
                        bm: 0,
                        nm: "Fill 1",
                        mn: "ADBE Vector Graphic - Fill",
                        hd: !1,
                      },
                      {
                        ty: "tr",
                        p: { a: 0, k: [737.44, 65.673], ix: 2 },
                        a: { a: 0, k: [0, 0], ix: 1 },
                        s: { a: 0, k: [100, 100], ix: 3 },
                        r: { a: 0, k: 0, ix: 6 },
                        o: { a: 0, k: 100, ix: 7 },
                        sk: { a: 0, k: 0, ix: 4 },
                        sa: { a: 0, k: 0, ix: 5 },
                        nm: "Transform",
                      },
                    ],
                    nm: "diamond lines",
                    np: 2,
                    cix: 2,
                    bm: 0,
                    ix: 2,
                    mn: "ADBE Vector Group",
                    hd: !1,
                  },
                  {
                    ty: "gr",
                    it: [
                      {
                        ind: 0,
                        ty: "sh",
                        ix: 1,
                        ks: {
                          a: 0,
                          k: {
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [7.29, -25.415],
                              [-5.19, 25.415],
                              [-7.29, -21.825],
                            ],
                            c: !0,
                          },
                          ix: 2,
                        },
                        nm: "Path 1",
                        mn: "ADBE Vector Shape - Group",
                        hd: !1,
                      },
                      {
                        ty: "fl",
                        c: {
                          a: 0,
                          k: [0.576470947266, 0.854902020623, 0.83529399797, 1],
                          ix: 4,
                        },
                        o: { a: 0, k: 100, ix: 5 },
                        r: 1,
                        bm: 0,
                        nm: "Fill 1",
                        mn: "ADBE Vector Graphic - Fill",
                        hd: !1,
                      },
                      {
                        ty: "tr",
                        p: { a: 0, k: [760.41, 70.253], ix: 2 },
                        a: { a: 0, k: [0, 0], ix: 1 },
                        s: { a: 0, k: [100, 100], ix: 3 },
                        r: { a: 0, k: 0, ix: 6 },
                        o: { a: 0, k: 100, ix: 7 },
                        sk: { a: 0, k: 0, ix: 4 },
                        sa: { a: 0, k: 0, ix: 5 },
                        nm: "Transform",
                      },
                    ],
                    nm: "diamond blue",
                    np: 2,
                    cix: 2,
                    bm: 0,
                    ix: 3,
                    mn: "ADBE Vector Group",
                    hd: !1,
                  },
                  {
                    ty: "gr",
                    it: [
                      {
                        ind: 0,
                        ty: "sh",
                        ix: 1,
                        ks: {
                          a: 0,
                          k: {
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [12.281, 23.515],
                              [-12.281, -18.735],
                              [10.201, -23.515],
                            ],
                            c: !0,
                          },
                          ix: 2,
                        },
                        nm: "Path 1",
                        mn: "ADBE Vector Shape - Group",
                        hd: !1,
                      },
                      {
                        ty: "fl",
                        c: {
                          a: 0,
                          k: [0.576470947266, 0.854902020623, 0.83529399797, 1],
                          ix: 4,
                        },
                        o: { a: 0, k: 100, ix: 5 },
                        r: 1,
                        bm: 0,
                        nm: "Fill 1",
                        mn: "ADBE Vector Graphic - Fill",
                        hd: !1,
                      },
                      {
                        ty: "tr",
                        p: { a: 0, k: [739.96, 72.613], ix: 2 },
                        a: { a: 0, k: [0, 0], ix: 1 },
                        s: { a: 0, k: [100, 100], ix: 3 },
                        r: { a: 0, k: 0, ix: 6 },
                        o: { a: 0, k: 100, ix: 7 },
                        sk: { a: 0, k: 0, ix: 4 },
                        sa: { a: 0, k: 0, ix: 5 },
                        nm: "Transform",
                      },
                    ],
                    nm: "diamond blue 2",
                    np: 2,
                    cix: 2,
                    bm: 0,
                    ix: 4,
                    mn: "ADBE Vector Group",
                    hd: !1,
                  },
                  {
                    ty: "gr",
                    it: [
                      {
                        ind: 0,
                        ty: "sh",
                        ix: 1,
                        ks: {
                          a: 0,
                          k: {
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [12.005, 3.56],
                              [-2.434, 7.11],
                              [-12.005, -7.11],
                              [0.245, -6.25],
                            ],
                            c: !0,
                          },
                          ix: 2,
                        },
                        nm: "Path 1",
                        mn: "ADBE Vector Shape - Group",
                        hd: !1,
                      },
                      {
                        ty: "fl",
                        c: {
                          a: 0,
                          k: [0.576470947266, 0.854902020623, 0.83529399797, 1],
                          ix: 4,
                        },
                        o: { a: 0, k: 100, ix: 5 },
                        r: 1,
                        bm: 0,
                        nm: "Fill 1",
                        mn: "ADBE Vector Graphic - Fill",
                        hd: !1,
                      },
                      {
                        ty: "tr",
                        p: { a: 0, k: [754.675, 38.438], ix: 2 },
                        a: { a: 0, k: [0, 0], ix: 1 },
                        s: { a: 0, k: [100, 100], ix: 3 },
                        r: { a: 0, k: 0, ix: 6 },
                        o: { a: 0, k: 100, ix: 7 },
                        sk: { a: 0, k: 0, ix: 4 },
                        sa: { a: 0, k: 0, ix: 5 },
                        nm: "Transform",
                      },
                    ],
                    nm: "diamond blue 3",
                    np: 2,
                    cix: 2,
                    bm: 0,
                    ix: 5,
                    mn: "ADBE Vector Group",
                    hd: !1,
                  },
                  {
                    ty: "gr",
                    it: [
                      {
                        ind: 0,
                        ty: "sh",
                        ix: 1,
                        ks: {
                          a: 0,
                          k: {
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0.04, 0.12],
                              [0, 0],
                              [-0.1, -0.14],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, -0.13],
                              [0, 0],
                              [0.041, 0.15],
                              [0, 0],
                            ],
                            v: [
                              [11.27, 4.96],
                              [-11, 9.7],
                              [-11.209, -5.74],
                              [-11.27, -6.12],
                              [1.5, -9.7],
                              [1.7, -9.26],
                            ],
                            c: !0,
                          },
                          ix: 2,
                        },
                        nm: "Path 1",
                        mn: "ADBE Vector Shape - Group",
                        hd: !1,
                      },
                      {
                        ty: "fl",
                        c: {
                          a: 0,
                          k: [0.576470947266, 0.854902020623, 0.83529399797, 1],
                          ix: 4,
                        },
                        o: { a: 0, k: 100, ix: 5 },
                        r: 1,
                        bm: 0,
                        nm: "Fill 1",
                        mn: "ADBE Vector Graphic - Fill",
                        hd: !1,
                      },
                      {
                        ty: "tr",
                        p: { a: 0, k: [737.82, 41.288], ix: 2 },
                        a: { a: 0, k: [0, 0], ix: 1 },
                        s: { a: 0, k: [100, 100], ix: 3 },
                        r: { a: 0, k: 0, ix: 6 },
                        o: { a: 0, k: 100, ix: 7 },
                        sk: { a: 0, k: 0, ix: 4 },
                        sa: { a: 0, k: 0, ix: 5 },
                        nm: "Transform",
                      },
                    ],
                    nm: "diamond blue 4",
                    np: 2,
                    cix: 2,
                    bm: 0,
                    ix: 6,
                    mn: "ADBE Vector Group",
                    hd: !1,
                  },
                  {
                    ty: "gr",
                    it: [
                      {
                        ind: 0,
                        ty: "sh",
                        ix: 1,
                        ks: {
                          a: 0,
                          k: {
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [20.955, 21.645],
                              [-20.955, -12.584],
                              [-4.215, -21.645],
                            ],
                            c: !0,
                          },
                          ix: 2,
                        },
                        nm: "Path 1",
                        mn: "ADBE Vector Shape - Group",
                        hd: !1,
                      },
                      {
                        ty: "fl",
                        c: {
                          a: 0,
                          k: [0.576470947266, 0.854902020623, 0.83529399797, 1],
                          ix: 4,
                        },
                        o: { a: 0, k: 100, ix: 5 },
                        r: 1,
                        bm: 0,
                        nm: "Fill 1",
                        mn: "ADBE Vector Graphic - Fill",
                        hd: !1,
                      },
                      {
                        ty: "tr",
                        p: { a: 0, k: [728.995, 76.493], ix: 2 },
                        a: { a: 0, k: [0, 0], ix: 1 },
                        s: { a: 0, k: [100, 100], ix: 3 },
                        r: { a: 0, k: 0, ix: 6 },
                        o: { a: 0, k: 100, ix: 7 },
                        sk: { a: 0, k: 0, ix: 4 },
                        sa: { a: 0, k: 0, ix: 5 },
                        nm: "Transform",
                      },
                    ],
                    nm: "diamond blue 5",
                    np: 2,
                    cix: 2,
                    bm: 0,
                    ix: 7,
                    mn: "ADBE Vector Group",
                    hd: !1,
                  },
                  {
                    ty: "gr",
                    it: [
                      {
                        ind: 0,
                        ty: "sh",
                        ix: 1,
                        ks: {
                          a: 0,
                          k: {
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [8.281, 3.21],
                              [-8.281, 12.18],
                              [-4.281, -3.949],
                              [8.07, -12.18],
                            ],
                            c: !0,
                          },
                          ix: 2,
                        },
                        nm: "Path 1",
                        mn: "ADBE Vector Shape - Group",
                        hd: !1,
                      },
                      {
                        ty: "fl",
                        c: {
                          a: 0,
                          k: [0.576470947266, 0.854902020623, 0.83529399797, 1],
                          ix: 4,
                        },
                        o: { a: 0, k: 100, ix: 5 },
                        r: 1,
                        bm: 0,
                        nm: "Fill 1",
                        mn: "ADBE Vector Graphic - Fill",
                        hd: !1,
                      },
                      {
                        ty: "tr",
                        p: { a: 0, k: [715.55, 48.738], ix: 2 },
                        a: { a: 0, k: [0, 0], ix: 1 },
                        s: { a: 0, k: [100, 100], ix: 3 },
                        r: { a: 0, k: 0, ix: 6 },
                        o: { a: 0, k: 100, ix: 7 },
                        sk: { a: 0, k: 0, ix: 4 },
                        sa: { a: 0, k: 0, ix: 5 },
                        nm: "Transform",
                      },
                    ],
                    nm: "blue diamond",
                    np: 2,
                    cix: 2,
                    bm: 0,
                    ix: 8,
                    mn: "ADBE Vector Group",
                    hd: !1,
                  },
                  {
                    ty: "tr",
                    p: {
                      a: 1,
                      k: [
                        {
                          i: { x: 0.667, y: 1 },
                          o: { x: 0.167, y: 0.167 },
                          t: 4.905,
                          s: [737.44, 65.673],
                          to: [0, -5.5],
                          ti: [0, 0],
                        },
                        {
                          i: { x: 0.833, y: 0.833 },
                          o: { x: 0.333, y: 0 },
                          t: 16.008,
                          s: [737.44, 32.673],
                          to: [0, 0],
                          ti: [0, -5.5],
                        },
                        { t: 26, s: [737.44, 65.673] },
                      ],
                      ix: 2,
                    },
                    a: { a: 0, k: [737.44, 65.673], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                  },
                ],
                nm: "little diamond 1",
                np: 8,
                cix: 2,
                bm: 0,
                ix: 3,
                mn: "ADBE Vector Group",
                hd: !1,
              },
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [0, 0],
                          [5.582, -10.52],
                          [-5.581, 3.35],
                          [-5.581, 3.154],
                          [5.861, -0.285],
                        ],
                        o: [
                          [-1.396, -0.279],
                          [-5.581, 10.52],
                          [5.582, -3.348],
                          [5.581, -3.154],
                          [0, 0],
                        ],
                        v: [
                          [3.21, -10.55],
                          [-9.35, -2.093],
                          [-5.441, 9.263],
                          [3.21, -2.093],
                          [9.07, -10.836],
                        ],
                        c: !0,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ty: "st",
                    c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                    o: { a: 0, k: 100, ix: 4 },
                    w: { a: 0, k: 3, ix: 5 },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: !1,
                  },
                  {
                    ty: "tr",
                    p: {
                      a: 1,
                      k: [
                        {
                          i: { x: 0.667, y: 1 },
                          o: { x: 0.167, y: 0.167 },
                          t: 3.5,
                          s: [872.552, 90.458],
                          to: [0, -4],
                          ti: [0, 0],
                        },
                        {
                          i: { x: 0.833, y: 0.833 },
                          o: { x: 0.333, y: 0 },
                          t: 13.477,
                          s: [872.552, 66.458],
                          to: [0, 0],
                          ti: [0, -4],
                        },
                        { t: 23, s: [872.552, 90.458] },
                      ],
                      ix: 2,
                    },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                  },
                ],
                nm: "splotch outline",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 4,
                mn: "ADBE Vector Group",
                hd: !1,
              },
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [3.069, -1.674],
                          [-5.022, -4.465],
                          [3.071, 6.419],
                        ],
                        o: [
                          [0, 0],
                          [5.024, 4.466],
                          [-3.069, -6.419],
                        ],
                        v: [
                          [-5.721, -6.838],
                          [-3.769, 4.046],
                          [5.719, 0.697],
                        ],
                        c: !0,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ty: "st",
                    c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                    o: { a: 0, k: 100, ix: 4 },
                    w: { a: 0, k: 3, ix: 5 },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: !1,
                  },
                  {
                    ty: "fl",
                    c: { a: 0, k: [0, 0, 0, 1], ix: 4 },
                    o: { a: 0, k: 100, ix: 5 },
                    r: 1,
                    bm: 0,
                    nm: "Fill 1",
                    mn: "ADBE Vector Graphic - Fill",
                    hd: !1,
                  },
                  {
                    ty: "tr",
                    p: {
                      a: 1,
                      k: [
                        {
                          i: { x: 0.595, y: 0.122 },
                          o: { x: 0.167, y: 0.167 },
                          t: 1.596,
                          s: [802.507, 88.699],
                          to: [0, -0.678],
                          ti: [0, 1.424],
                        },
                        {
                          i: { x: 0.689, y: 1 },
                          o: { x: 0.248, y: 0.268 },
                          t: 3.5,
                          s: [802.507, 85.459],
                          to: [0, -6.969],
                          ti: [0, 0],
                        },
                        {
                          i: { x: 0.833, y: 0.833 },
                          o: { x: 0.333, y: 0 },
                          t: 12.5,
                          s: [802.507, 54.699],
                          to: [0, 0],
                          ti: [0, -5.127],
                        },
                        {
                          i: { x: 0.595, y: 0.581 },
                          o: { x: 0.167, y: 0.167 },
                          t: 21.548,
                          s: [802.507, 88.699],
                          to: [0, 5.127],
                          ti: [0, 1.424],
                        },
                        { t: 23.5, s: [802.507, 85.459] },
                      ],
                      ix: 2,
                    },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                  },
                ],
                nm: "splotch fill",
                np: 3,
                cix: 2,
                bm: 0,
                ix: 5,
                mn: "ADBE Vector Group",
                hd: !1,
              },
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [3.163, 1.954],
                          [-1.395, -10.047],
                          [-1.951, 7.256],
                          [5.303, 1.116],
                        ],
                        o: [
                          [-1.278, -0.789],
                          [1.396, 10.046],
                          [1.95, -7.255],
                          [-5.302, -1.116],
                        ],
                        v: [
                          [-2.198, -13.559],
                          [-8.338, -1],
                          [2.549, 7.092],
                          [4.43, -6.396],
                        ],
                        c: !0,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: !1,
                  },
                  {
                    ty: "st",
                    c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
                    o: { a: 0, k: 100, ix: 4 },
                    w: { a: 0, k: 3, ix: 5 },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: !1,
                  },
                  {
                    ty: "tr",
                    p: {
                      a: 1,
                      k: [
                        {
                          i: { x: 0.667, y: 1 },
                          o: { x: 0.167, y: 0.167 },
                          t: 3.5,
                          s: [675.635, 40.444],
                          to: [0, -4],
                          ti: [0, 0],
                        },
                        {
                          i: { x: 0.833, y: 0.833 },
                          o: { x: 0.296, y: 0 },
                          t: 13.477,
                          s: [675.635, 16.444],
                          to: [0, 0],
                          ti: [0, -2.123],
                        },
                        { t: 23.5, s: [675.635, 40.444] },
                      ],
                      ix: 2,
                    },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                  },
                ],
                nm: "splotch outline",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 6,
                mn: "ADBE Vector Group",
                hd: !1,
              },
            ],
            ip: 0,
            op: 143,
            st: 0,
            bm: 0,
          },
        ],
        markers: [],
      };
    function y(t) {
      return {
        container: document.getElementById(t),
        renderer: "svg",
        loop: !0,
        autoplay: !0,
        animationData: u,
      };
    }
    f.Component;
    window.addEventListener("load", function (t) {
      if (document.body.classList.contains("firefox-browser-newtab")) {
        var e = y("newtab-animation");
        lottie.loadAnimation(e);
      }
    });
  },
  4: function (t, e) {
    t.exports = function (t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    };
  },
  44: function (t, e) {
    function i(t) {
      return (i =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function r(e) {
      return (
        "function" == typeof Symbol && "symbol" === i(Symbol.iterator)
          ? (t.exports = r = function (t) {
              return i(t);
            })
          : (t.exports = r = function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : i(t);
            }),
        r(e)
      );
    }
    t.exports = r;
  },
  49: function (t, e) {
    function i(e, r) {
      return (
        (t.exports = i =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          }),
        i(e, r)
      );
    }
    t.exports = i;
  },
  54: function (t, e, i) {
    "use strict";
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var r =
        Object.getOwnPropertySymbols,
      a = Object.prototype.hasOwnProperty,
      s = Object.prototype.propertyIsEnumerable;
    function n(t) {
      if (null == t)
        throw new TypeError(
          "Object.assign cannot be called with null or undefined"
        );
      return Object(t);
    }
    t.exports = (function () {
      try {
        if (!Object.assign) return !1;
        var t = new String("abc");
        if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0]))
          return !1;
        for (var e = {}, i = 0; i < 10; i++)
          e["_" + String.fromCharCode(i)] = i;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(e)
            .map(function (t) {
              return e[t];
            })
            .join("")
        )
          return !1;
        var r = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function (t) {
            r[t] = t;
          }),
          "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        );
      } catch (t) {
        return !1;
      }
    })()
      ? Object.assign
      : function (t, e) {
          for (var i, o, h = n(t), p = 1; p < arguments.length; p++) {
            for (var l in (i = Object(arguments[p])))
              a.call(i, l) && (h[l] = i[l]);
            if (r) {
              o = r(i);
              for (var m = 0; m < o.length; m++)
                s.call(i, o[m]) && (h[o[m]] = i[o[m]]);
            }
          }
          return h;
        };
  },
  573: function (t, e, i) {
    var r = i(1161);
    "string" == typeof r && (r = [[t.i, r, ""]]);
    var a = { hmr: !0, transform: void 0, insertInto: void 0 };
    i(15)(r, a);
    r.locals && (t.exports = r.locals);
  },
  574: function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    (function (module) {
      var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          44
        ),
        _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__
        ),
        a,
        b;
      "undefined" != typeof navigator &&
        ((a = window || {}),
        (b = function b(window) {
          var svgNS = "http://www.w3.org/2000/svg",
            locationHref = "",
            initialDefaultFrame = -999999,
            subframeEnabled = !0,
            expressionsPlugin,
            isSafari = /^((?!chrome|android).)*safari/i.test(
              navigator.userAgent
            ),
            cachedColors = {},
            bm_rounder = Math.round,
            bm_rnd,
            bm_pow = Math.pow,
            bm_sqrt = Math.sqrt,
            bm_abs = Math.abs,
            bm_floor = Math.floor,
            bm_max = Math.max,
            bm_min = Math.min,
            blitter = 10,
            BMMath = {};
          function ProjectInterface() {
            return {};
          }
          !(function () {
            var t,
              e = [
                "abs",
                "acos",
                "acosh",
                "asin",
                "asinh",
                "atan",
                "atanh",
                "atan2",
                "ceil",
                "cbrt",
                "expm1",
                "clz32",
                "cos",
                "cosh",
                "exp",
                "floor",
                "fround",
                "hypot",
                "imul",
                "log",
                "log1p",
                "log2",
                "log10",
                "max",
                "min",
                "pow",
                "random",
                "round",
                "sign",
                "sin",
                "sinh",
                "sqrt",
                "tan",
                "tanh",
                "trunc",
                "E",
                "LN10",
                "LN2",
                "LOG10E",
                "LOG2E",
                "PI",
                "SQRT1_2",
                "SQRT2",
              ],
              i = e.length;
            for (t = 0; t < i; t += 1) BMMath[e[t]] = Math[e[t]];
          })(),
            (BMMath.random = Math.random),
            (BMMath.abs = function (t) {
              if (
                "object" ===
                  _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(
                    t
                  ) &&
                t.length
              ) {
                var e,
                  i = createSizedArray(t.length),
                  r = t.length;
                for (e = 0; e < r; e += 1) i[e] = Math.abs(t[e]);
                return i;
              }
              return Math.abs(t);
            });
          var defaultCurveSegments = 150,
            degToRads = Math.PI / 180,
            roundCorner = 0.5519;
          function roundValues(t) {
            bm_rnd = t
              ? Math.round
              : function (t) {
                  return t;
                };
          }
          function styleDiv(t) {
            (t.style.position = "absolute"),
              (t.style.top = 0),
              (t.style.left = 0),
              (t.style.display = "block"),
              (t.style.transformOrigin = t.style.webkitTransformOrigin = "0 0"),
              (t.style.backfaceVisibility = t.style.webkitBackfaceVisibility =
                "visible"),
              (t.style.transformStyle = t.style.webkitTransformStyle = t.style.mozTransformStyle =
                "preserve-3d");
          }
          function BMEnterFrameEvent(t, e, i, r) {
            (this.type = t),
              (this.currentTime = e),
              (this.totalTime = i),
              (this.direction = r < 0 ? -1 : 1);
          }
          function BMCompleteEvent(t, e) {
            (this.type = t), (this.direction = e < 0 ? -1 : 1);
          }
          function BMCompleteLoopEvent(t, e, i, r) {
            (this.type = t),
              (this.currentLoop = i),
              (this.totalLoops = e),
              (this.direction = r < 0 ? -1 : 1);
          }
          function BMSegmentStartEvent(t, e, i) {
            (this.type = t), (this.firstFrame = e), (this.totalFrames = i);
          }
          function BMDestroyEvent(t, e) {
            (this.type = t), (this.target = e);
          }
          roundValues(!1);
          var createElementID =
              ((D = 0),
              function () {
                return "__lottie_element_" + ++D;
              }),
            D;
          function HSVtoRGB(t, e, i) {
            var r, a, s, n, o, h, p, l;
            switch (
              ((h = i * (1 - e)),
              (p = i * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e)),
              (l = i * (1 - (1 - o) * e)),
              n % 6)
            ) {
              case 0:
                (r = i), (a = l), (s = h);
                break;
              case 1:
                (r = p), (a = i), (s = h);
                break;
              case 2:
                (r = h), (a = i), (s = l);
                break;
              case 3:
                (r = h), (a = p), (s = i);
                break;
              case 4:
                (r = l), (a = h), (s = i);
                break;
              case 5:
                (r = i), (a = h), (s = p);
            }
            return [r, a, s];
          }
          function RGBtoHSV(t, e, i) {
            var r,
              a = Math.max(t, e, i),
              s = Math.min(t, e, i),
              n = a - s,
              o = 0 === a ? 0 : n / a,
              h = a / 255;
            switch (a) {
              case s:
                r = 0;
                break;
              case t:
                (r = e - i + n * (e < i ? 6 : 0)), (r /= 6 * n);
                break;
              case e:
                (r = i - t + 2 * n), (r /= 6 * n);
                break;
              case i:
                (r = t - e + 4 * n), (r /= 6 * n);
            }
            return [r, o, h];
          }
          function addSaturationToRGB(t, e) {
            var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return (
              (i[1] += e),
              1 < i[1] ? (i[1] = 1) : i[1] <= 0 && (i[1] = 0),
              HSVtoRGB(i[0], i[1], i[2])
            );
          }
          function addBrightnessToRGB(t, e) {
            var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return (
              (i[2] += e),
              1 < i[2] ? (i[2] = 1) : i[2] < 0 && (i[2] = 0),
              HSVtoRGB(i[0], i[1], i[2])
            );
          }
          function addHueToRGB(t, e) {
            var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return (
              (i[0] += e / 360),
              1 < i[0] ? (i[0] -= 1) : i[0] < 0 && (i[0] += 1),
              HSVtoRGB(i[0], i[1], i[2])
            );
          }
          var rgbToHex = (function () {
            var t,
              e,
              i = [];
            for (t = 0; t < 256; t += 1)
              (e = t.toString(16)), (i[t] = 1 == e.length ? "0" + e : e);
            return function (t, e, r) {
              return (
                t < 0 && (t = 0),
                e < 0 && (e = 0),
                r < 0 && (r = 0),
                "#" + i[t] + i[e] + i[r]
              );
            };
          })();
          function BaseEvent() {}
          BaseEvent.prototype = {
            triggerEvent: function (t, e) {
              if (this._cbs[t])
                for (var i = this._cbs[t].length, r = 0; r < i; r++)
                  this._cbs[t][r](e);
            },
            addEventListener: function (t, e) {
              return (
                this._cbs[t] || (this._cbs[t] = []),
                this._cbs[t].push(e),
                function () {
                  this.removeEventListener(t, e);
                }.bind(this)
              );
            },
            removeEventListener: function (t, e) {
              if (e) {
                if (this._cbs[t]) {
                  for (var i = 0, r = this._cbs[t].length; i < r; )
                    this._cbs[t][i] === e &&
                      (this._cbs[t].splice(i, 1), (i -= 1), (r -= 1)),
                      (i += 1);
                  this._cbs[t].length || (this._cbs[t] = null);
                }
              } else this._cbs[t] = null;
            },
          };
          var createTypedArray =
            "function" == typeof Uint8ClampedArray &&
            "function" == typeof Float32Array
              ? function (t, e) {
                  return "float32" === t
                    ? new Float32Array(e)
                    : "int16" === t
                    ? new Int16Array(e)
                    : "uint8c" === t
                    ? new Uint8ClampedArray(e)
                    : void 0;
                }
              : function (t, e) {
                  var i,
                    r = 0,
                    a = [];
                  switch (t) {
                    case "int16":
                    case "uint8c":
                      i = 1;
                      break;
                    default:
                      i = 1.1;
                  }
                  for (r = 0; r < e; r += 1) a.push(i);
                  return a;
                };
          function createSizedArray(t) {
            return Array.apply(null, { length: t });
          }
          function createNS(t) {
            return document.createElementNS(svgNS, t);
          }
          function createTag(t) {
            return document.createElement(t);
          }
          function DynamicPropertyContainer() {}
          DynamicPropertyContainer.prototype = {
            addDynamicProperty: function (t) {
              -1 === this.dynamicProperties.indexOf(t) &&
                (this.dynamicProperties.push(t),
                this.container.addDynamicProperty(this),
                (this._isAnimated = !0));
            },
            iterateDynamicProperties: function () {
              this._mdf = !1;
              var t,
                e = this.dynamicProperties.length;
              for (t = 0; t < e; t += 1)
                this.dynamicProperties[t].getValue(),
                  this.dynamicProperties[t]._mdf && (this._mdf = !0);
            },
            initDynamicPropertyContainer: function (t) {
              (this.container = t),
                (this.dynamicProperties = []),
                (this._mdf = !1),
                (this._isAnimated = !1);
            },
          };
          var getBlendMode =
              ((Ma = {
                0: "source-over",
                1: "multiply",
                2: "screen",
                3: "overlay",
                4: "darken",
                5: "lighten",
                6: "color-dodge",
                7: "color-burn",
                8: "hard-light",
                9: "soft-light",
                10: "difference",
                11: "exclusion",
                12: "hue",
                13: "saturation",
                14: "color",
                15: "luminosity",
              }),
              function (t) {
                return Ma[t] || "";
              }),
            Ma,
            Matrix = (function () {
              var t = Math.cos,
                e = Math.sin,
                i = Math.tan,
                r = Math.round;
              function a() {
                return (
                  (this.props[0] = 1),
                  (this.props[1] = 0),
                  (this.props[2] = 0),
                  (this.props[3] = 0),
                  (this.props[4] = 0),
                  (this.props[5] = 1),
                  (this.props[6] = 0),
                  (this.props[7] = 0),
                  (this.props[8] = 0),
                  (this.props[9] = 0),
                  (this.props[10] = 1),
                  (this.props[11] = 0),
                  (this.props[12] = 0),
                  (this.props[13] = 0),
                  (this.props[14] = 0),
                  (this.props[15] = 1),
                  this
                );
              }
              function s(i) {
                if (0 === i) return this;
                var r = t(i),
                  a = e(i);
                return this._t(r, -a, 0, 0, a, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
              }
              function n(i) {
                if (0 === i) return this;
                var r = t(i),
                  a = e(i);
                return this._t(1, 0, 0, 0, 0, r, -a, 0, 0, a, r, 0, 0, 0, 0, 1);
              }
              function o(i) {
                if (0 === i) return this;
                var r = t(i),
                  a = e(i);
                return this._t(r, 0, a, 0, 0, 1, 0, 0, -a, 0, r, 0, 0, 0, 0, 1);
              }
              function h(i) {
                if (0 === i) return this;
                var r = t(i),
                  a = e(i);
                return this._t(r, -a, 0, 0, a, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
              }
              function p(t, e) {
                return this._t(1, e, t, 1, 0, 0);
              }
              function l(t, e) {
                return this.shear(i(t), i(e));
              }
              function m(r, a) {
                var s = t(a),
                  n = e(a);
                return this._t(s, n, 0, 0, -n, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                  ._t(1, 0, 0, 0, i(r), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                  ._t(s, -n, 0, 0, n, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
              }
              function c(t, e, i) {
                return (
                  i || 0 === i || (i = 1),
                  1 === t && 1 === e && 1 === i
                    ? this
                    : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1)
                );
              }
              function f(t, e, i, r, a, s, n, o, h, p, l, m, c, f, d, u) {
                return (
                  (this.props[0] = t),
                  (this.props[1] = e),
                  (this.props[2] = i),
                  (this.props[3] = r),
                  (this.props[4] = a),
                  (this.props[5] = s),
                  (this.props[6] = n),
                  (this.props[7] = o),
                  (this.props[8] = h),
                  (this.props[9] = p),
                  (this.props[10] = l),
                  (this.props[11] = m),
                  (this.props[12] = c),
                  (this.props[13] = f),
                  (this.props[14] = d),
                  (this.props[15] = u),
                  this
                );
              }
              function d(t, e, i) {
                return (
                  (i = i || 0),
                  0 !== t || 0 !== e || 0 !== i
                    ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1)
                    : this
                );
              }
              function u(t, e, i, r, a, s, n, o, h, p, l, m, c, f, d, u) {
                var y = this.props;
                if (
                  1 === t &&
                  0 === e &&
                  0 === i &&
                  0 === r &&
                  0 === a &&
                  1 === s &&
                  0 === n &&
                  0 === o &&
                  0 === h &&
                  0 === p &&
                  1 === l &&
                  0 === m
                )
                  return (
                    (y[12] = y[12] * t + y[15] * c),
                    (y[13] = y[13] * s + y[15] * f),
                    (y[14] = y[14] * l + y[15] * d),
                    (y[15] = y[15] * u),
                    (this._identityCalculated = !1),
                    this
                  );
                var g = y[0],
                  x = y[1],
                  v = y[2],
                  k = y[3],
                  b = y[4],
                  E = y[5],
                  S = y[6],
                  P = y[7],
                  A = y[8],
                  _ = y[9],
                  D = y[10],
                  C = y[11],
                  T = y[12],
                  M = y[13],
                  w = y[14],
                  V = y[15];
                return (
                  (y[0] = g * t + x * a + v * h + k * c),
                  (y[1] = g * e + x * s + v * p + k * f),
                  (y[2] = g * i + x * n + v * l + k * d),
                  (y[3] = g * r + x * o + v * m + k * u),
                  (y[4] = b * t + E * a + S * h + P * c),
                  (y[5] = b * e + E * s + S * p + P * f),
                  (y[6] = b * i + E * n + S * l + P * d),
                  (y[7] = b * r + E * o + S * m + P * u),
                  (y[8] = A * t + _ * a + D * h + C * c),
                  (y[9] = A * e + _ * s + D * p + C * f),
                  (y[10] = A * i + _ * n + D * l + C * d),
                  (y[11] = A * r + _ * o + D * m + C * u),
                  (y[12] = T * t + M * a + w * h + V * c),
                  (y[13] = T * e + M * s + w * p + V * f),
                  (y[14] = T * i + M * n + w * l + V * d),
                  (y[15] = T * r + M * o + w * m + V * u),
                  (this._identityCalculated = !1),
                  this
                );
              }
              function y() {
                return (
                  this._identityCalculated ||
                    ((this._identity = !(
                      1 !== this.props[0] ||
                      0 !== this.props[1] ||
                      0 !== this.props[2] ||
                      0 !== this.props[3] ||
                      0 !== this.props[4] ||
                      1 !== this.props[5] ||
                      0 !== this.props[6] ||
                      0 !== this.props[7] ||
                      0 !== this.props[8] ||
                      0 !== this.props[9] ||
                      1 !== this.props[10] ||
                      0 !== this.props[11] ||
                      0 !== this.props[12] ||
                      0 !== this.props[13] ||
                      0 !== this.props[14] ||
                      1 !== this.props[15]
                    )),
                    (this._identityCalculated = !0)),
                  this._identity
                );
              }
              function g(t) {
                for (var e = 0; e < 16; ) {
                  if (t.props[e] !== this.props[e]) return !1;
                  e += 1;
                }
                return !0;
              }
              function x(t) {
                var e;
                for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
              }
              function v(t) {
                var e;
                for (e = 0; e < 16; e += 1) this.props[e] = t[e];
              }
              function k(t, e, i) {
                return {
                  x:
                    t * this.props[0] +
                    e * this.props[4] +
                    i * this.props[8] +
                    this.props[12],
                  y:
                    t * this.props[1] +
                    e * this.props[5] +
                    i * this.props[9] +
                    this.props[13],
                  z:
                    t * this.props[2] +
                    e * this.props[6] +
                    i * this.props[10] +
                    this.props[14],
                };
              }
              function b(t, e, i) {
                return (
                  t * this.props[0] +
                  e * this.props[4] +
                  i * this.props[8] +
                  this.props[12]
                );
              }
              function E(t, e, i) {
                return (
                  t * this.props[1] +
                  e * this.props[5] +
                  i * this.props[9] +
                  this.props[13]
                );
              }
              function S(t, e, i) {
                return (
                  t * this.props[2] +
                  e * this.props[6] +
                  i * this.props[10] +
                  this.props[14]
                );
              }
              function P(t) {
                var e =
                    this.props[0] * this.props[5] -
                    this.props[1] * this.props[4],
                  i = this.props[5] / e,
                  r = -this.props[1] / e,
                  a = -this.props[4] / e,
                  s = this.props[0] / e,
                  n =
                    (this.props[4] * this.props[13] -
                      this.props[5] * this.props[12]) /
                    e,
                  o =
                    -(
                      this.props[0] * this.props[13] -
                      this.props[1] * this.props[12]
                    ) / e;
                return [t[0] * i + t[1] * a + n, t[0] * r + t[1] * s + o, 0];
              }
              function A(t) {
                var e,
                  i = t.length,
                  r = [];
                for (e = 0; e < i; e += 1) r[e] = P(t[e]);
                return r;
              }
              function _(t, e, i) {
                var r = createTypedArray("float32", 6);
                if (this.isIdentity())
                  (r[0] = t[0]),
                    (r[1] = t[1]),
                    (r[2] = e[0]),
                    (r[3] = e[1]),
                    (r[4] = i[0]),
                    (r[5] = i[1]);
                else {
                  var a = this.props[0],
                    s = this.props[1],
                    n = this.props[4],
                    o = this.props[5],
                    h = this.props[12],
                    p = this.props[13];
                  (r[0] = t[0] * a + t[1] * n + h),
                    (r[1] = t[0] * s + t[1] * o + p),
                    (r[2] = e[0] * a + e[1] * n + h),
                    (r[3] = e[0] * s + e[1] * o + p),
                    (r[4] = i[0] * a + i[1] * n + h),
                    (r[5] = i[0] * s + i[1] * o + p);
                }
                return r;
              }
              function D(t, e, i) {
                return this.isIdentity()
                  ? [t, e, i]
                  : [
                      t * this.props[0] +
                        e * this.props[4] +
                        i * this.props[8] +
                        this.props[12],
                      t * this.props[1] +
                        e * this.props[5] +
                        i * this.props[9] +
                        this.props[13],
                      t * this.props[2] +
                        e * this.props[6] +
                        i * this.props[10] +
                        this.props[14],
                    ];
              }
              function C(t, e) {
                if (this.isIdentity()) return t + "," + e;
                var i = this.props;
                return (
                  Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 +
                  "," +
                  Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100
                );
              }
              function T() {
                for (var t = 0, e = this.props, i = "matrix3d("; t < 16; )
                  (i += r(1e4 * e[t]) / 1e4),
                    (i += 15 === t ? ")" : ","),
                    (t += 1);
                return i;
              }
              function M(t) {
                return (t < 1e-6 && 0 < t) || (-1e-6 < t && t < 0)
                  ? r(1e4 * t) / 1e4
                  : t;
              }
              function w() {
                var t = this.props;
                return (
                  "matrix(" +
                  M(t[0]) +
                  "," +
                  M(t[1]) +
                  "," +
                  M(t[4]) +
                  "," +
                  M(t[5]) +
                  "," +
                  M(t[12]) +
                  "," +
                  M(t[13]) +
                  ")"
                );
              }
              return function () {
                (this.reset = a),
                  (this.rotate = s),
                  (this.rotateX = n),
                  (this.rotateY = o),
                  (this.rotateZ = h),
                  (this.skew = l),
                  (this.skewFromAxis = m),
                  (this.shear = p),
                  (this.scale = c),
                  (this.setTransform = f),
                  (this.translate = d),
                  (this.transform = u),
                  (this.applyToPoint = k),
                  (this.applyToX = b),
                  (this.applyToY = E),
                  (this.applyToZ = S),
                  (this.applyToPointArray = D),
                  (this.applyToTriplePoints = _),
                  (this.applyToPointStringified = C),
                  (this.toCSS = T),
                  (this.to2dCSS = w),
                  (this.clone = x),
                  (this.cloneFromProps = v),
                  (this.equals = g),
                  (this.inversePoints = A),
                  (this.inversePoint = P),
                  (this._t = this.transform),
                  (this.isIdentity = y),
                  (this._identity = !0),
                  (this._identityCalculated = !1),
                  (this.props = createTypedArray("float32", 16)),
                  this.reset();
              };
            })();
          !(function (t, e) {
            var i,
              r = this,
              a = 256,
              s = "random",
              n = e.pow(a, 6),
              o = e.pow(2, 52),
              h = 2 * o,
              p = a - 1;
            function l(t) {
              var e,
                i = t.length,
                r = this,
                s = 0,
                n = (r.i = r.j = 0),
                o = (r.S = []);
              for (i || (t = [i++]); s < a; ) o[s] = s++;
              for (s = 0; s < a; s++)
                (o[s] = o[(n = p & (n + t[s % i] + (e = o[s])))]), (o[n] = e);
              r.g = function (t) {
                for (var e, i = 0, s = r.i, n = r.j, o = r.S; t--; )
                  (e = o[(s = p & (s + 1))]),
                    (i =
                      i * a +
                      o[p & ((o[s] = o[(n = p & (n + e))]) + (o[n] = e))]);
                return (r.i = s), (r.j = n), i;
              };
            }
            function m(t, e) {
              return (e.i = t.i), (e.j = t.j), (e.S = t.S.slice()), e;
            }
            function c(t, e) {
              for (var i, r = t + "", a = 0; a < r.length; )
                e[p & a] = p & ((i ^= 19 * e[p & a]) + r.charCodeAt(a++));
              return f(e);
            }
            function f(t) {
              return String.fromCharCode.apply(0, t);
            }
            (e["seed" + s] = function (p, d, u) {
              var y = [],
                g = c(
                  (function t(e, i) {
                    var r,
                      a = [],
                      s = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(
                        e
                      );
                    if (i && "object" == s)
                      for (r in e)
                        try {
                          a.push(t(e[r], i - 1));
                        } catch (t) {}
                    return a.length ? a : "string" == s ? e : e + "\0";
                  })(
                    (d = !0 === d ? { entropy: !0 } : d || {}).entropy
                      ? [p, f(t)]
                      : null === p
                      ? (function () {
                          try {
                            i;
                            var e = new Uint8Array(a);
                            return (
                              (r.crypto || r.msCrypto).getRandomValues(e), f(e)
                            );
                          } catch (e) {
                            var s = r.navigator,
                              n = s && s.plugins;
                            return [+new Date(), r, n, r.screen, f(t)];
                          }
                        })()
                      : p,
                    3
                  ),
                  y
                ),
                x = new l(y),
                v = function () {
                  for (var t = x.g(6), e = n, i = 0; t < o; )
                    (t = (t + i) * a), (e *= a), (i = x.g(1));
                  for (; h <= t; ) (t /= 2), (e /= 2), (i >>>= 1);
                  return (t + i) / e;
                };
              return (
                (v.int32 = function () {
                  return 0 | x.g(4);
                }),
                (v.quick = function () {
                  return x.g(4) / 4294967296;
                }),
                (v.double = v),
                c(f(x.S), t),
                (
                  d.pass ||
                  u ||
                  function (t, i, r, a) {
                    return (
                      a &&
                        (a.S && m(a, x),
                        (t.state = function () {
                          return m(x, {});
                        })),
                      r ? ((e[s] = t), i) : t
                    );
                  }
                )(v, g, "global" in d ? d.global : this == e, d.state)
              );
            }),
              c(e.random(), t);
          })([], BMMath);
          var BezierFactory = (function () {
            var t = {
                getBezierEasing: function (t, i, r, a, s) {
                  var n =
                    s ||
                    ("bez_" + t + "_" + i + "_" + r + "_" + a).replace(
                      /\./g,
                      "p"
                    );
                  if (e[n]) return e[n];
                  var o = new l([t, i, r, a]);
                  return (e[n] = o);
                },
              },
              e = {},
              i = 11,
              r = 1 / (i - 1),
              a = "function" == typeof Float32Array;
            function s(t, e) {
              return 1 - 3 * e + 3 * t;
            }
            function n(t, e) {
              return 3 * e - 6 * t;
            }
            function o(t) {
              return 3 * t;
            }
            function h(t, e, i) {
              return ((s(e, i) * t + n(e, i)) * t + o(e)) * t;
            }
            function p(t, e, i) {
              return 3 * s(e, i) * t * t + 2 * n(e, i) * t + o(e);
            }
            function l(t) {
              (this._p = t),
                (this._mSampleValues = a ? new Float32Array(i) : new Array(i)),
                (this._precomputed = !1),
                (this.get = this.get.bind(this));
            }
            return (
              (l.prototype = {
                get: function (t) {
                  var e = this._p[0],
                    i = this._p[1],
                    r = this._p[2],
                    a = this._p[3];
                  return (
                    this._precomputed || this._precompute(),
                    e === i && r === a
                      ? t
                      : 0 === t
                      ? 0
                      : 1 === t
                      ? 1
                      : h(this._getTForX(t), i, a)
                  );
                },
                _precompute: function () {
                  var t = this._p[0],
                    e = this._p[1],
                    i = this._p[2],
                    r = this._p[3];
                  (this._precomputed = !0),
                    (t === e && i === r) || this._calcSampleValues();
                },
                _calcSampleValues: function () {
                  for (var t = this._p[0], e = this._p[2], a = 0; a < i; ++a)
                    this._mSampleValues[a] = h(a * r, t, e);
                },
                _getTForX: function (t) {
                  for (
                    var e = this._p[0],
                      a = this._p[2],
                      s = this._mSampleValues,
                      n = 0,
                      o = 1,
                      l = i - 1;
                    o !== l && s[o] <= t;
                    ++o
                  )
                    n += r;
                  var m = n + ((t - s[--o]) / (s[o + 1] - s[o])) * r,
                    c = p(m, e, a);
                  return 0.001 <= c
                    ? (function (t, e, i, r) {
                        for (var a = 0; a < 4; ++a) {
                          var s = p(e, i, r);
                          if (0 === s) return e;
                          e -= (h(e, i, r) - t) / s;
                        }
                        return e;
                      })(t, m, e, a)
                    : 0 === c
                    ? m
                    : (function (t, e, i, r, a) {
                        for (
                          var s, n, o = 0;
                          0 < (s = h((n = e + (i - e) / 2), r, a) - t)
                            ? (i = n)
                            : (e = n),
                            1e-7 < Math.abs(s) && ++o < 10;

                        );
                        return n;
                      })(t, n, n + r, e, a);
                },
              }),
              t
            );
          })();
          function extendPrototype(t, e) {
            var i,
              r,
              a = t.length;
            for (i = 0; i < a; i += 1)
              for (var s in (r = t[i].prototype))
                r.hasOwnProperty(s) && (e.prototype[s] = r[s]);
          }
          function getDescriptor(t, e) {
            return Object.getOwnPropertyDescriptor(t, e);
          }
          function createProxyFunction(t) {
            function e() {}
            return (e.prototype = t), e;
          }
          function bezFunction() {
            function t(t, e, i, r, a, s) {
              var n = t * r + e * a + i * s - a * r - s * t - i * e;
              return -0.001 < n && n < 0.001;
            }
            Math;
            var e = function (t, e, i, r) {
              var a,
                s,
                n,
                o,
                h,
                p,
                l = defaultCurveSegments,
                m = 0,
                c = [],
                f = [],
                d = bezier_length_pool.newElement();
              for (n = i.length, a = 0; a < l; a += 1) {
                for (h = a / (l - 1), s = p = 0; s < n; s += 1)
                  (o =
                    bm_pow(1 - h, 3) * t[s] +
                    3 * bm_pow(1 - h, 2) * h * i[s] +
                    3 * (1 - h) * bm_pow(h, 2) * r[s] +
                    bm_pow(h, 3) * e[s]),
                    (c[s] = o),
                    null !== f[s] && (p += bm_pow(c[s] - f[s], 2)),
                    (f[s] = c[s]);
                p && (m += p = bm_sqrt(p)),
                  (d.percents[a] = h),
                  (d.lengths[a] = m);
              }
              return (d.addedLength = m), d;
            };
            function i(t) {
              (this.segmentLength = 0), (this.points = new Array(t));
            }
            function r(t, e) {
              (this.partialLength = t), (this.point = e);
            }
            var a,
              s =
                ((a = {}),
                function (e, s, n, o) {
                  var h = (
                    e[0] +
                    "_" +
                    e[1] +
                    "_" +
                    s[0] +
                    "_" +
                    s[1] +
                    "_" +
                    n[0] +
                    "_" +
                    n[1] +
                    "_" +
                    o[0] +
                    "_" +
                    o[1]
                  ).replace(/\./g, "p");
                  if (!a[h]) {
                    var p,
                      l,
                      m,
                      c,
                      f,
                      d,
                      u,
                      y = defaultCurveSegments,
                      g = 0,
                      x = null;
                    2 === e.length &&
                      (e[0] != s[0] || e[1] != s[1]) &&
                      t(e[0], e[1], s[0], s[1], e[0] + n[0], e[1] + n[1]) &&
                      t(e[0], e[1], s[0], s[1], s[0] + o[0], s[1] + o[1]) &&
                      (y = 2);
                    var v = new i(y);
                    for (m = n.length, p = 0; p < y; p += 1) {
                      for (
                        u = createSizedArray(m), f = p / (y - 1), l = d = 0;
                        l < m;
                        l += 1
                      )
                        (c =
                          bm_pow(1 - f, 3) * e[l] +
                          3 * bm_pow(1 - f, 2) * f * (e[l] + n[l]) +
                          3 * (1 - f) * bm_pow(f, 2) * (s[l] + o[l]) +
                          bm_pow(f, 3) * s[l]),
                          (u[l] = c),
                          null !== x && (d += bm_pow(u[l] - x[l], 2));
                      (g += d = bm_sqrt(d)),
                        (v.points[p] = new r(d, u)),
                        (x = u);
                    }
                    (v.segmentLength = g), (a[h] = v);
                  }
                  return a[h];
                });
            function n(t, e) {
              var i = e.percents,
                r = e.lengths,
                a = i.length,
                s = bm_floor((a - 1) * t),
                n = t * e.addedLength,
                o = 0;
              if (s === a - 1 || 0 === s || n === r[s]) return i[s];
              for (var h = r[s] > n ? -1 : 1, p = !0; p; )
                if (
                  (r[s] <= n && r[s + 1] > n
                    ? ((o = (n - r[s]) / (r[s + 1] - r[s])), (p = !1))
                    : (s += h),
                  s < 0 || a - 1 <= s)
                ) {
                  if (s === a - 1) return i[s];
                  p = !1;
                }
              return i[s] + (i[s + 1] - i[s]) * o;
            }
            var o = createTypedArray("float32", 8);
            return {
              getSegmentsLength: function (t) {
                var i,
                  r = segments_length_pool.newElement(),
                  a = t.c,
                  s = t.v,
                  n = t.o,
                  o = t.i,
                  h = t._length,
                  p = r.lengths,
                  l = 0;
                for (i = 0; i < h - 1; i += 1)
                  (p[i] = e(s[i], s[i + 1], n[i], o[i + 1])),
                    (l += p[i].addedLength);
                return (
                  a &&
                    h &&
                    ((p[i] = e(s[i], s[0], n[i], o[0])),
                    (l += p[i].addedLength)),
                  (r.totalLength = l),
                  r
                );
              },
              getNewSegment: function (t, e, i, r, a, s, h) {
                var p,
                  l = n((a = a < 0 ? 0 : 1 < a ? 1 : a), h),
                  m = n((s = 1 < s ? 1 : s), h),
                  c = t.length,
                  f = 1 - l,
                  d = 1 - m,
                  u = f * f * f,
                  y = l * f * f * 3,
                  g = l * l * f * 3,
                  x = l * l * l,
                  v = f * f * d,
                  k = l * f * d + f * l * d + f * f * m,
                  b = l * l * d + f * l * m + l * f * m,
                  E = l * l * m,
                  S = f * d * d,
                  P = l * d * d + f * m * d + f * d * m,
                  A = l * m * d + f * m * m + l * d * m,
                  _ = l * m * m,
                  D = d * d * d,
                  C = m * d * d + d * m * d + d * d * m,
                  T = m * m * d + d * m * m + m * d * m,
                  M = m * m * m;
                for (p = 0; p < c; p += 1)
                  (o[4 * p] =
                    Math.round(
                      1e3 * (u * t[p] + y * i[p] + g * r[p] + x * e[p])
                    ) / 1e3),
                    (o[4 * p + 1] =
                      Math.round(
                        1e3 * (v * t[p] + k * i[p] + b * r[p] + E * e[p])
                      ) / 1e3),
                    (o[4 * p + 2] =
                      Math.round(
                        1e3 * (S * t[p] + P * i[p] + A * r[p] + _ * e[p])
                      ) / 1e3),
                    (o[4 * p + 3] =
                      Math.round(
                        1e3 * (D * t[p] + C * i[p] + T * r[p] + M * e[p])
                      ) / 1e3);
                return o;
              },
              getPointInSegment: function (t, e, i, r, a, s) {
                var o = n(a, s),
                  h = 1 - o;
                return [
                  Math.round(
                    1e3 *
                      (h * h * h * t[0] +
                        (o * h * h + h * o * h + h * h * o) * i[0] +
                        (o * o * h + h * o * o + o * h * o) * r[0] +
                        o * o * o * e[0])
                  ) / 1e3,
                  Math.round(
                    1e3 *
                      (h * h * h * t[1] +
                        (o * h * h + h * o * h + h * h * o) * i[1] +
                        (o * o * h + h * o * o + o * h * o) * r[1] +
                        o * o * o * e[1])
                  ) / 1e3,
                ];
              },
              buildBezierData: s,
              pointOnLine2D: t,
              pointOnLine3D: function (e, i, r, a, s, n, o, h, p) {
                if (0 === r && 0 === n && 0 === p) return t(e, i, a, s, o, h);
                var l,
                  m = Math.sqrt(
                    Math.pow(a - e, 2) + Math.pow(s - i, 2) + Math.pow(n - r, 2)
                  ),
                  c = Math.sqrt(
                    Math.pow(o - e, 2) + Math.pow(h - i, 2) + Math.pow(p - r, 2)
                  ),
                  f = Math.sqrt(
                    Math.pow(o - a, 2) + Math.pow(h - s, 2) + Math.pow(p - n, 2)
                  );
                return (
                  -1e-4 <
                    (l =
                      c < m
                        ? f < m
                          ? m - c - f
                          : f - c - m
                        : c < f
                        ? f - c - m
                        : c - m - f) && l < 1e-4
                );
              },
            };
          }
          !(function () {
            for (
              var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0;
              i < e.length && !window.requestAnimationFrame;
              ++i
            )
              (window.requestAnimationFrame =
                window[e[i] + "RequestAnimationFrame"]),
                (window.cancelAnimationFrame =
                  window[e[i] + "CancelAnimationFrame"] ||
                  window[e[i] + "CancelRequestAnimationFrame"]);
            window.requestAnimationFrame ||
              (window.requestAnimationFrame = function (e, i) {
                var r = new Date().getTime(),
                  a = Math.max(0, 16 - (r - t)),
                  s = setTimeout(function () {
                    e(r + a);
                  }, a);
                return (t = r + a), s;
              }),
              window.cancelAnimationFrame ||
                (window.cancelAnimationFrame = function (t) {
                  clearTimeout(t);
                });
          })();
          var bez = bezFunction();
          function dataFunctionManager() {
            function t(t, e) {
              for (var i = 0, r = e.length; i < r; ) {
                if (e[i].id === t)
                  return e[i].layers.__used
                    ? JSON.parse(JSON.stringify(e[i].layers))
                    : ((e[i].layers.__used = !0), e[i].layers);
                i += 1;
              }
            }
            function e(t) {
              var r, a, s;
              for (r = t.length - 1; 0 <= r; r -= 1)
                if ("sh" == t[r].ty)
                  if (t[r].ks.k.i) i(t[r].ks.k);
                  else
                    for (s = t[r].ks.k.length, a = 0; a < s; a += 1)
                      t[r].ks.k[a].s && i(t[r].ks.k[a].s[0]),
                        t[r].ks.k[a].e && i(t[r].ks.k[a].e[0]);
                else "gr" == t[r].ty && e(t[r].it);
            }
            function i(t) {
              var e,
                i = t.i.length;
              for (e = 0; e < i; e += 1)
                (t.i[e][0] += t.v[e][0]),
                  (t.i[e][1] += t.v[e][1]),
                  (t.o[e][0] += t.v[e][0]),
                  (t.o[e][1] += t.v[e][1]);
            }
            function r(t, e) {
              var i = e ? e.split(".") : [100, 100, 100];
              return (
                t[0] > i[0] ||
                (!(i[0] > t[0]) &&
                  (t[1] > i[1] ||
                    (!(i[1] > t[1]) &&
                      (t[2] > i[2] || (!(i[2] > t[2]) && void 0)))))
              );
            }
            var a,
              s = (function () {
                var t = [4, 4, 14];
                function e(t) {
                  var e,
                    i,
                    r,
                    a = t.length;
                  for (e = 0; e < a; e += 1)
                    5 === t[e].ty &&
                      ((r = (i = t[e]).t.d), (i.t.d = { k: [{ s: r, t: 0 }] }));
                }
                return function (i) {
                  if (r(t, i.v) && (e(i.layers), i.assets)) {
                    var a,
                      s = i.assets.length;
                    for (a = 0; a < s; a += 1)
                      i.assets[a].layers && e(i.assets[a].layers);
                  }
                };
              })(),
              n =
                ((a = [4, 7, 99]),
                function (t) {
                  if (t.chars && !r(a, t.v)) {
                    var e,
                      s,
                      n,
                      o,
                      h,
                      p = t.chars.length;
                    for (e = 0; e < p; e += 1)
                      if (t.chars[e].data && t.chars[e].data.shapes)
                        for (
                          n = (h = t.chars[e].data.shapes[0].it).length, s = 0;
                          s < n;
                          s += 1
                        )
                          (o = h[s].ks.k).__converted ||
                            (i(h[s].ks.k), (o.__converted = !0));
                  }
                }),
              o = (function () {
                var t = [4, 1, 9];
                function e(t) {
                  var i,
                    r,
                    a,
                    s = t.length;
                  for (i = 0; i < s; i += 1)
                    if ("gr" === t[i].ty) e(t[i].it);
                    else if ("fl" === t[i].ty || "st" === t[i].ty)
                      if (t[i].c.k && t[i].c.k[0].i)
                        for (a = t[i].c.k.length, r = 0; r < a; r += 1)
                          t[i].c.k[r].s &&
                            ((t[i].c.k[r].s[0] /= 255),
                            (t[i].c.k[r].s[1] /= 255),
                            (t[i].c.k[r].s[2] /= 255),
                            (t[i].c.k[r].s[3] /= 255)),
                            t[i].c.k[r].e &&
                              ((t[i].c.k[r].e[0] /= 255),
                              (t[i].c.k[r].e[1] /= 255),
                              (t[i].c.k[r].e[2] /= 255),
                              (t[i].c.k[r].e[3] /= 255));
                      else
                        (t[i].c.k[0] /= 255),
                          (t[i].c.k[1] /= 255),
                          (t[i].c.k[2] /= 255),
                          (t[i].c.k[3] /= 255);
                }
                function i(t) {
                  var i,
                    r = t.length;
                  for (i = 0; i < r; i += 1) 4 === t[i].ty && e(t[i].shapes);
                }
                return function (e) {
                  if (r(t, e.v) && (i(e.layers), e.assets)) {
                    var a,
                      s = e.assets.length;
                    for (a = 0; a < s; a += 1)
                      e.assets[a].layers && i(e.assets[a].layers);
                  }
                };
              })(),
              h = (function () {
                var t = [4, 4, 18];
                function e(t) {
                  var i, r, a;
                  for (i = t.length - 1; 0 <= i; i -= 1)
                    if ("sh" == t[i].ty)
                      if (t[i].ks.k.i) t[i].ks.k.c = t[i].closed;
                      else
                        for (a = t[i].ks.k.length, r = 0; r < a; r += 1)
                          t[i].ks.k[r].s && (t[i].ks.k[r].s[0].c = t[i].closed),
                            t[i].ks.k[r].e &&
                              (t[i].ks.k[r].e[0].c = t[i].closed);
                    else "gr" == t[i].ty && e(t[i].it);
                }
                function i(t) {
                  var i,
                    r,
                    a,
                    s,
                    n,
                    o,
                    h = t.length;
                  for (r = 0; r < h; r += 1) {
                    if ((i = t[r]).hasMask) {
                      var p = i.masksProperties;
                      for (s = p.length, a = 0; a < s; a += 1)
                        if (p[a].pt.k.i) p[a].pt.k.c = p[a].cl;
                        else
                          for (o = p[a].pt.k.length, n = 0; n < o; n += 1)
                            p[a].pt.k[n].s && (p[a].pt.k[n].s[0].c = p[a].cl),
                              p[a].pt.k[n].e && (p[a].pt.k[n].e[0].c = p[a].cl);
                    }
                    4 === i.ty && e(i.shapes);
                  }
                }
                return function (e) {
                  if (r(t, e.v) && (i(e.layers), e.assets)) {
                    var a,
                      s = e.assets.length;
                    for (a = 0; a < s; a += 1)
                      e.assets[a].layers && i(e.assets[a].layers);
                  }
                };
              })(),
              p = {
                completeData: function (r, a) {
                  r.__complete ||
                    (o(r),
                    s(r),
                    n(r),
                    h(r),
                    (function r(a, s, n) {
                      var o,
                        h,
                        p,
                        l,
                        m,
                        c,
                        f,
                        d = a.length;
                      for (h = 0; h < d; h += 1)
                        if ("ks" in (o = a[h]) && !o.completed) {
                          if (
                            ((o.completed = !0),
                            o.tt && (a[h - 1].td = o.tt),
                            o.hasMask)
                          ) {
                            var u = o.masksProperties;
                            for (l = u.length, p = 0; p < l; p += 1)
                              if (u[p].pt.k.i) i(u[p].pt.k);
                              else
                                for (c = u[p].pt.k.length, m = 0; m < c; m += 1)
                                  u[p].pt.k[m].s && i(u[p].pt.k[m].s[0]),
                                    u[p].pt.k[m].e && i(u[p].pt.k[m].e[0]);
                          }
                          0 === o.ty
                            ? ((o.layers = t(o.refId, s)), r(o.layers, s, n))
                            : 4 === o.ty
                            ? e(o.shapes)
                            : 5 == o.ty &&
                              (0 !== (f = o).t.a.length ||
                                "m" in f.t.p ||
                                (f.singleShape = !0));
                        }
                    })(r.layers, r.assets, a),
                    (r.__complete = !0));
                },
              };
            return p;
          }
          var dataManager = dataFunctionManager(),
            FontManager = (function () {
              var t = { w: 0, size: 0, shapes: [] },
                e = [];
              function i(t, e) {
                var i = createTag("span");
                i.style.fontFamily = e;
                var r = createTag("span");
                (r.innerHTML = "giItT1WQy@!-/#"),
                  (i.style.position = "absolute"),
                  (i.style.left = "-10000px"),
                  (i.style.top = "-10000px"),
                  (i.style.fontSize = "300px"),
                  (i.style.fontVariant = "normal"),
                  (i.style.fontStyle = "normal"),
                  (i.style.fontWeight = "normal"),
                  (i.style.letterSpacing = "0"),
                  i.appendChild(r),
                  document.body.appendChild(i);
                var a = r.offsetWidth;
                return (
                  (r.style.fontFamily = t + ", " + e),
                  { node: r, w: a, parent: i }
                );
              }
              e = e.concat([
                2304,
                2305,
                2306,
                2307,
                2362,
                2363,
                2364,
                2364,
                2366,
                2367,
                2368,
                2369,
                2370,
                2371,
                2372,
                2373,
                2374,
                2375,
                2376,
                2377,
                2378,
                2379,
                2380,
                2381,
                2382,
                2383,
                2387,
                2388,
                2389,
                2390,
                2391,
                2402,
                2403,
              ]);
              var r = function () {
                (this.fonts = []),
                  (this.chars = null),
                  (this.typekitLoaded = 0),
                  (this.isLoaded = !1),
                  (this.initTime = Date.now());
              };
              return (
                (r.getCombinedCharacterCodes = function () {
                  return e;
                }),
                (r.prototype.addChars = function (t) {
                  if (t) {
                    this.chars || (this.chars = []);
                    var e,
                      i,
                      r,
                      a = t.length,
                      s = this.chars.length;
                    for (e = 0; e < a; e += 1) {
                      for (i = 0, r = !1; i < s; )
                        this.chars[i].style === t[e].style &&
                          this.chars[i].fFamily === t[e].fFamily &&
                          this.chars[i].ch === t[e].ch &&
                          (r = !0),
                          (i += 1);
                      r || (this.chars.push(t[e]), (s += 1));
                    }
                  }
                }),
                (r.prototype.addFonts = function (t, e) {
                  if (t) {
                    if (this.chars)
                      return (this.isLoaded = !0), void (this.fonts = t.list);
                    var r,
                      a,
                      s,
                      n,
                      o = t.list,
                      h = o.length,
                      p = h;
                    for (r = 0; r < h; r += 1) {
                      var l,
                        m,
                        c = !0;
                      if (
                        ((o[r].loaded = !1),
                        (o[r].monoCase = i(o[r].fFamily, "monospace")),
                        (o[r].sansCase = i(o[r].fFamily, "sans-serif")),
                        o[r].fPath)
                      ) {
                        if ("p" === o[r].fOrigin || 3 === o[r].origin) {
                          if (
                            (0 <
                              (l = document.querySelectorAll(
                                'style[f-forigin="p"][f-family="' +
                                  o[r].fFamily +
                                  '"], style[f-origin="3"][f-family="' +
                                  o[r].fFamily +
                                  '"]'
                              )).length && (c = !1),
                            c)
                          ) {
                            var f = createTag("style");
                            f.setAttribute("f-forigin", o[r].fOrigin),
                              f.setAttribute("f-origin", o[r].origin),
                              f.setAttribute("f-family", o[r].fFamily),
                              (f.type = "text/css"),
                              (f.innerHTML =
                                "@font-face {font-family: " +
                                o[r].fFamily +
                                "; font-style: normal; src: url('" +
                                o[r].fPath +
                                "');}"),
                              e.appendChild(f);
                          }
                        } else if ("g" === o[r].fOrigin || 1 === o[r].origin) {
                          for (
                            l = document.querySelectorAll(
                              'link[f-forigin="g"], link[f-origin="1"]'
                            ),
                              m = 0;
                            m < l.length;
                            m++
                          )
                            -1 !== l[m].href.indexOf(o[r].fPath) && (c = !1);
                          if (c) {
                            var d = createTag("link");
                            d.setAttribute("f-forigin", o[r].fOrigin),
                              d.setAttribute("f-origin", o[r].origin),
                              (d.type = "text/css"),
                              (d.rel = "stylesheet"),
                              (d.href = o[r].fPath),
                              document.body.appendChild(d);
                          }
                        } else if ("t" === o[r].fOrigin || 2 === o[r].origin) {
                          for (
                            l = document.querySelectorAll(
                              'script[f-forigin="t"], script[f-origin="2"]'
                            ),
                              m = 0;
                            m < l.length;
                            m++
                          )
                            o[r].fPath === l[m].src && (c = !1);
                          if (c) {
                            var u = createTag("link");
                            u.setAttribute("f-forigin", o[r].fOrigin),
                              u.setAttribute("f-origin", o[r].origin),
                              u.setAttribute("rel", "stylesheet"),
                              u.setAttribute("href", o[r].fPath),
                              e.appendChild(u);
                          }
                        }
                      } else (o[r].loaded = !0), (p -= 1);
                      (o[r].helper =
                        ((a = e),
                        (s = o[r]),
                        (n = void 0),
                        ((n = createNS("text")).style.fontSize = "100px"),
                        n.setAttribute("font-family", s.fFamily),
                        n.setAttribute("font-style", s.fStyle),
                        n.setAttribute("font-weight", s.fWeight),
                        (n.textContent = "1"),
                        s.fClass
                          ? ((n.style.fontFamily = "inherit"),
                            n.setAttribute("class", s.fClass))
                          : (n.style.fontFamily = s.fFamily),
                        a.appendChild(n),
                        (createTag("canvas").getContext("2d").font =
                          s.fWeight + " " + s.fStyle + " 100px " + s.fFamily),
                        n)),
                        (o[r].cache = {}),
                        this.fonts.push(o[r]);
                    }
                    0 === p
                      ? (this.isLoaded = !0)
                      : setTimeout(this.checkLoadedFonts.bind(this), 100);
                  } else this.isLoaded = !0;
                }),
                (r.prototype.getCharData = function (e, i, r) {
                  for (var a = 0, s = this.chars.length; a < s; ) {
                    if (
                      this.chars[a].ch === e &&
                      this.chars[a].style === i &&
                      this.chars[a].fFamily === r
                    )
                      return this.chars[a];
                    a += 1;
                  }
                  return (
                    (("string" == typeof e && 13 !== e.charCodeAt(0)) || !e) &&
                      console &&
                      console.warn &&
                      console.warn(
                        "Missing character from exported characters list: ",
                        e,
                        i,
                        r
                      ),
                    t
                  );
                }),
                (r.prototype.getFontByName = function (t) {
                  for (var e = 0, i = this.fonts.length; e < i; ) {
                    if (this.fonts[e].fName === t) return this.fonts[e];
                    e += 1;
                  }
                  return this.fonts[0];
                }),
                (r.prototype.measureText = function (t, e, i) {
                  var r = this.getFontByName(e),
                    a = t.charCodeAt(0);
                  if (!r.cache[a + 1]) {
                    var s = r.helper;
                    if (" " === t) {
                      s.textContent = "|" + t + "|";
                      var n = s.getComputedTextLength();
                      s.textContent = "||";
                      var o = s.getComputedTextLength();
                      r.cache[a + 1] = (n - o) / 100;
                    } else
                      (s.textContent = t),
                        (r.cache[a + 1] = s.getComputedTextLength() / 100);
                  }
                  return r.cache[a + 1] * i;
                }),
                (r.prototype.checkLoadedFonts = function () {
                  var t,
                    e,
                    i,
                    r = this.fonts.length,
                    a = r;
                  for (t = 0; t < r; t += 1)
                    this.fonts[t].loaded
                      ? (a -= 1)
                      : "n" === this.fonts[t].fOrigin ||
                        0 === this.fonts[t].origin
                      ? (this.fonts[t].loaded = !0)
                      : ((e = this.fonts[t].monoCase.node),
                        (i = this.fonts[t].monoCase.w),
                        e.offsetWidth !== i
                          ? ((a -= 1), (this.fonts[t].loaded = !0))
                          : ((e = this.fonts[t].sansCase.node),
                            (i = this.fonts[t].sansCase.w),
                            e.offsetWidth !== i &&
                              ((a -= 1), (this.fonts[t].loaded = !0))),
                        this.fonts[t].loaded &&
                          (this.fonts[t].sansCase.parent.parentNode.removeChild(
                            this.fonts[t].sansCase.parent
                          ),
                          this.fonts[t].monoCase.parent.parentNode.removeChild(
                            this.fonts[t].monoCase.parent
                          )));
                  0 !== a && Date.now() - this.initTime < 5e3
                    ? setTimeout(this.checkLoadedFonts.bind(this), 20)
                    : setTimeout(
                        function () {
                          this.isLoaded = !0;
                        }.bind(this),
                        0
                      );
                }),
                (r.prototype.loaded = function () {
                  return this.isLoaded;
                }),
                r
              );
            })(),
            PropertyFactory = (function () {
              var t = initialDefaultFrame,
                e = Math.abs;
              function i(t, e) {
                var i,
                  a = this.offsetTime;
                "multidimensional" === this.propType &&
                  (i = createTypedArray("float32", this.pv.length));
                for (
                  var s,
                    n,
                    o,
                    h,
                    p,
                    l,
                    m,
                    c,
                    f = e.lastIndex,
                    d = f,
                    u = this.keyframes.length - 1,
                    y = !0;
                  y;

                ) {
                  if (
                    ((s = this.keyframes[d]),
                    (n = this.keyframes[d + 1]),
                    d === u - 1 && t >= n.t - a)
                  ) {
                    s.h && (s = n), (f = 0);
                    break;
                  }
                  if (n.t - a > t) {
                    f = d;
                    break;
                  }
                  d < u - 1 ? (d += 1) : ((f = 0), (y = !1));
                }
                var g,
                  x,
                  v,
                  k,
                  b,
                  E,
                  S,
                  P,
                  A,
                  _,
                  D = n.t - a,
                  C = s.t - a;
                if (s.to) {
                  s.bezierData ||
                    (s.bezierData = bez.buildBezierData(
                      s.s,
                      n.s || s.e,
                      s.to,
                      s.ti
                    ));
                  var T = s.bezierData;
                  if (D <= t || t < C) {
                    var M = D <= t ? T.points.length - 1 : 0;
                    for (h = T.points[M].point.length, o = 0; o < h; o += 1)
                      i[o] = T.points[M].point[o];
                  } else {
                    s.__fnct
                      ? (c = s.__fnct)
                      : ((c = BezierFactory.getBezierEasing(
                          s.o.x,
                          s.o.y,
                          s.i.x,
                          s.i.y,
                          s.n
                        ).get),
                        (s.__fnct = c)),
                      (p = c((t - C) / (D - C)));
                    var w,
                      V = T.segmentLength * p,
                      B =
                        e.lastFrame < t && e._lastKeyframeIndex === d
                          ? e._lastAddedLength
                          : 0;
                    for (
                      m =
                        e.lastFrame < t && e._lastKeyframeIndex === d
                          ? e._lastPoint
                          : 0,
                        y = !0,
                        l = T.points.length;
                      y;

                    ) {
                      if (
                        ((B += T.points[m].partialLength),
                        0 === V || 0 === p || m === T.points.length - 1)
                      ) {
                        for (h = T.points[m].point.length, o = 0; o < h; o += 1)
                          i[o] = T.points[m].point[o];
                        break;
                      }
                      if (B <= V && V < B + T.points[m + 1].partialLength) {
                        for (
                          w = (V - B) / T.points[m + 1].partialLength,
                            h = T.points[m].point.length,
                            o = 0;
                          o < h;
                          o += 1
                        )
                          i[o] =
                            T.points[m].point[o] +
                            (T.points[m + 1].point[o] - T.points[m].point[o]) *
                              w;
                        break;
                      }
                      m < l - 1 ? (m += 1) : (y = !1);
                    }
                    (e._lastPoint = m),
                      (e._lastAddedLength = B - T.points[m].partialLength),
                      (e._lastKeyframeIndex = d);
                  }
                } else {
                  var F, I, G, R, L;
                  if (
                    ((u = s.s.length), (g = n.s || s.e), this.sh && 1 !== s.h)
                  )
                    if (D <= t) (i[0] = g[0]), (i[1] = g[1]), (i[2] = g[2]);
                    else if (t <= C)
                      (i[0] = s.s[0]), (i[1] = s.s[1]), (i[2] = s.s[2]);
                    else {
                      (x = i),
                        (k = (v = (function (t, e, i) {
                          var r,
                            a,
                            s,
                            n,
                            o,
                            h = [],
                            p = t[0],
                            l = t[1],
                            m = t[2],
                            c = t[3],
                            f = e[0],
                            d = e[1],
                            u = e[2],
                            y = e[3];
                          return (
                            (a = p * f + l * d + m * u + c * y) < 0 &&
                              ((a = -a),
                              (f = -f),
                              (d = -d),
                              (u = -u),
                              (y = -y)),
                            (o =
                              1e-6 < 1 - a
                                ? ((r = Math.acos(a)),
                                  (s = Math.sin(r)),
                                  (n = Math.sin((1 - i) * r) / s),
                                  Math.sin(i * r) / s)
                                : ((n = 1 - i), i)),
                            (h[0] = n * p + o * f),
                            (h[1] = n * l + o * d),
                            (h[2] = n * m + o * u),
                            (h[3] = n * c + o * y),
                            h
                          );
                        })(r(s.s), r(g), (t - C) / (D - C)))[0]),
                        (b = v[1]),
                        (E = v[2]),
                        (S = v[3]),
                        (P = Math.atan2(
                          2 * b * S - 2 * k * E,
                          1 - 2 * b * b - 2 * E * E
                        )),
                        (A = Math.asin(2 * k * b + 2 * E * S)),
                        (_ = Math.atan2(
                          2 * k * S - 2 * b * E,
                          1 - 2 * k * k - 2 * E * E
                        )),
                        (x[0] = P / degToRads),
                        (x[1] = A / degToRads),
                        (x[2] = _ / degToRads);
                    }
                  else
                    for (d = 0; d < u; d += 1)
                      1 !== s.h &&
                        (p =
                          D <= t
                            ? 1
                            : t < C
                            ? 0
                            : (s.o.x.constructor === Array
                                ? (s.__fnct || (s.__fnct = []),
                                  s.__fnct[d]
                                    ? (c = s.__fnct[d])
                                    : ((F =
                                        void 0 === s.o.x[d]
                                          ? s.o.x[0]
                                          : s.o.x[d]),
                                      (I =
                                        void 0 === s.o.y[d]
                                          ? s.o.y[0]
                                          : s.o.y[d]),
                                      (G =
                                        void 0 === s.i.x[d]
                                          ? s.i.x[0]
                                          : s.i.x[d]),
                                      (R =
                                        void 0 === s.i.y[d]
                                          ? s.i.y[0]
                                          : s.i.y[d]),
                                      (c = BezierFactory.getBezierEasing(
                                        F,
                                        I,
                                        G,
                                        R
                                      ).get),
                                      (s.__fnct[d] = c)))
                                : s.__fnct
                                ? (c = s.__fnct)
                                : ((F = s.o.x),
                                  (I = s.o.y),
                                  (G = s.i.x),
                                  (R = s.i.y),
                                  (c = BezierFactory.getBezierEasing(F, I, G, R)
                                    .get),
                                  (s.__fnct = c)),
                              c((t - C) / (D - C)))),
                        (g = n.s || s.e),
                        (L = 1 === s.h ? s.s[d] : s.s[d] + (g[d] - s.s[d]) * p),
                        1 === u ? (i = L) : (i[d] = L);
                }
                return (e.lastIndex = f), i;
              }
              function r(t) {
                var e = t[0] * degToRads,
                  i = t[1] * degToRads,
                  r = t[2] * degToRads,
                  a = Math.cos(e / 2),
                  s = Math.cos(i / 2),
                  n = Math.cos(r / 2),
                  o = Math.sin(e / 2),
                  h = Math.sin(i / 2),
                  p = Math.sin(r / 2);
                return [
                  o * h * n + a * s * p,
                  o * s * n + a * h * p,
                  a * h * n - o * s * p,
                  a * s * n - o * h * p,
                ];
              }
              function a() {
                var e = this.comp.renderedFrame - this.offsetTime,
                  i = this.keyframes[0].t - this.offsetTime,
                  r =
                    this.keyframes[this.keyframes.length - 1].t -
                    this.offsetTime;
                if (
                  !(
                    e === this._caching.lastFrame ||
                    (this._caching.lastFrame !== t &&
                      ((this._caching.lastFrame >= r && r <= e) ||
                        (this._caching.lastFrame < i && e < i)))
                  )
                ) {
                  this._caching.lastFrame >= e &&
                    ((this._caching._lastKeyframeIndex = -1),
                    (this._caching.lastIndex = 0));
                  var a = this.interpolateValue(e, this._caching);
                  this.pv = a;
                }
                return (this._caching.lastFrame = e), this.pv;
              }
              function s(t) {
                var i;
                if ("unidimensional" === this.propType)
                  (i = t * this.mult),
                    1e-5 < e(this.v - i) && ((this.v = i), (this._mdf = !0));
                else
                  for (var r = 0, a = this.v.length; r < a; )
                    (i = t[r] * this.mult),
                      1e-5 < e(this.v[r] - i) &&
                        ((this.v[r] = i), (this._mdf = !0)),
                      (r += 1);
              }
              function n() {
                if (
                  this.elem.globalData.frameId !== this.frameId &&
                  this.effectsSequence.length
                )
                  if (this.lock) this.setVValue(this.pv);
                  else {
                    (this.lock = !0), (this._mdf = this._isFirstFrame);
                    var t,
                      e = this.effectsSequence.length,
                      i = this.kf ? this.pv : this.data.k;
                    for (t = 0; t < e; t += 1) i = this.effectsSequence[t](i);
                    this.setVValue(i),
                      (this._isFirstFrame = !1),
                      (this.lock = !1),
                      (this.frameId = this.elem.globalData.frameId);
                  }
              }
              function o(t) {
                this.effectsSequence.push(t),
                  this.container.addDynamicProperty(this);
              }
              function h(t, e, i, r) {
                (this.propType = "unidimensional"),
                  (this.mult = i || 1),
                  (this.data = e),
                  (this.v = i ? e.k * i : e.k),
                  (this.pv = e.k),
                  (this._mdf = !1),
                  (this.elem = t),
                  (this.container = r),
                  (this.comp = t.comp),
                  (this.k = !1),
                  (this.kf = !1),
                  (this.vel = 0),
                  (this.effectsSequence = []),
                  (this._isFirstFrame = !0),
                  (this.getValue = n),
                  (this.setVValue = s),
                  (this.addEffect = o);
              }
              function p(t, e, i, r) {
                (this.propType = "multidimensional"),
                  (this.mult = i || 1),
                  (this.data = e),
                  (this._mdf = !1),
                  (this.elem = t),
                  (this.container = r),
                  (this.comp = t.comp),
                  (this.k = !1),
                  (this.kf = !1),
                  (this.frameId = -1);
                var a,
                  h = e.k.length;
                for (
                  this.v = createTypedArray("float32", h),
                    this.pv = createTypedArray("float32", h),
                    createTypedArray("float32", h),
                    this.vel = createTypedArray("float32", h),
                    a = 0;
                  a < h;
                  a += 1
                )
                  (this.v[a] = e.k[a] * this.mult), (this.pv[a] = e.k[a]);
                (this._isFirstFrame = !0),
                  (this.effectsSequence = []),
                  (this.getValue = n),
                  (this.setVValue = s),
                  (this.addEffect = o);
              }
              function l(e, r, h, p) {
                (this.propType = "unidimensional"),
                  (this.keyframes = r.k),
                  (this.offsetTime = e.data.st),
                  (this.frameId = -1),
                  (this._caching = {
                    lastFrame: t,
                    lastIndex: 0,
                    value: 0,
                    _lastKeyframeIndex: -1,
                  }),
                  (this.k = !0),
                  (this.kf = !0),
                  (this.data = r),
                  (this.mult = h || 1),
                  (this.elem = e),
                  (this.container = p),
                  (this.comp = e.comp),
                  (this.v = t),
                  (this.pv = t),
                  (this._isFirstFrame = !0),
                  (this.getValue = n),
                  (this.setVValue = s),
                  (this.interpolateValue = i),
                  (this.effectsSequence = [a.bind(this)]),
                  (this.addEffect = o);
              }
              function m(e, r, h, p) {
                this.propType = "multidimensional";
                var l,
                  m,
                  c,
                  f,
                  d,
                  u = r.k.length;
                for (l = 0; l < u - 1; l += 1)
                  r.k[l].to &&
                    r.k[l].s &&
                    r.k[l].e &&
                    ((m = r.k[l].s),
                    (c = r.k[l].e),
                    (f = r.k[l].to),
                    (d = r.k[l].ti),
                    ((2 === m.length &&
                      (m[0] !== c[0] || m[1] !== c[1]) &&
                      bez.pointOnLine2D(
                        m[0],
                        m[1],
                        c[0],
                        c[1],
                        m[0] + f[0],
                        m[1] + f[1]
                      ) &&
                      bez.pointOnLine2D(
                        m[0],
                        m[1],
                        c[0],
                        c[1],
                        c[0] + d[0],
                        c[1] + d[1]
                      )) ||
                      (3 === m.length &&
                        (m[0] !== c[0] || m[1] !== c[1] || m[2] !== c[2]) &&
                        bez.pointOnLine3D(
                          m[0],
                          m[1],
                          m[2],
                          c[0],
                          c[1],
                          c[2],
                          m[0] + f[0],
                          m[1] + f[1],
                          m[2] + f[2]
                        ) &&
                        bez.pointOnLine3D(
                          m[0],
                          m[1],
                          m[2],
                          c[0],
                          c[1],
                          c[2],
                          c[0] + d[0],
                          c[1] + d[1],
                          c[2] + d[2]
                        ))) &&
                      ((r.k[l].to = null), (r.k[l].ti = null)),
                    m[0] === c[0] &&
                      m[1] === c[1] &&
                      0 === f[0] &&
                      0 === f[1] &&
                      0 === d[0] &&
                      0 === d[1] &&
                      (2 === m.length ||
                        (m[2] === c[2] && 0 === f[2] && 0 === d[2])) &&
                      ((r.k[l].to = null), (r.k[l].ti = null)));
                (this.effectsSequence = [a.bind(this)]),
                  (this.keyframes = r.k),
                  (this.offsetTime = e.data.st),
                  (this.k = !0),
                  (this.kf = !0),
                  (this._isFirstFrame = !0),
                  (this.mult = h || 1),
                  (this.elem = e),
                  (this.container = p),
                  (this.comp = e.comp),
                  (this.getValue = n),
                  (this.setVValue = s),
                  (this.interpolateValue = i),
                  (this.frameId = -1);
                var y = r.k[0].s.length;
                for (
                  this.v = createTypedArray("float32", y),
                    this.pv = createTypedArray("float32", y),
                    l = 0;
                  l < y;
                  l += 1
                )
                  (this.v[l] = t), (this.pv[l] = t);
                (this._caching = {
                  lastFrame: t,
                  lastIndex: 0,
                  value: createTypedArray("float32", y),
                }),
                  (this.addEffect = o);
              }
              return {
                getProp: function (t, e, i, r, a) {
                  var s;
                  if (e.k.length)
                    if ("number" == typeof e.k[0]) s = new p(t, e, r, a);
                    else
                      switch (i) {
                        case 0:
                          s = new l(t, e, r, a);
                          break;
                        case 1:
                          s = new m(t, e, r, a);
                      }
                  else s = new h(t, e, r, a);
                  return s.effectsSequence.length && a.addDynamicProperty(s), s;
                },
              };
            })(),
            TransformPropertyFactory = (function () {
              function t(t, e, i) {
                if (
                  ((this.elem = t),
                  (this.frameId = -1),
                  (this.propType = "transform"),
                  (this.data = e),
                  (this.v = new Matrix()),
                  (this.pre = new Matrix()),
                  (this.appliedTransformations = 0),
                  this.initDynamicPropertyContainer(i || t),
                  e.p && e.p.s
                    ? ((this.px = PropertyFactory.getProp(
                        t,
                        e.p.x,
                        0,
                        0,
                        this
                      )),
                      (this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this)),
                      e.p.z &&
                        (this.pz = PropertyFactory.getProp(
                          t,
                          e.p.z,
                          0,
                          0,
                          this
                        )))
                    : (this.p = PropertyFactory.getProp(
                        t,
                        e.p || { k: [0, 0, 0] },
                        1,
                        0,
                        this
                      )),
                  e.rx)
                ) {
                  if (
                    ((this.rx = PropertyFactory.getProp(
                      t,
                      e.rx,
                      0,
                      degToRads,
                      this
                    )),
                    (this.ry = PropertyFactory.getProp(
                      t,
                      e.ry,
                      0,
                      degToRads,
                      this
                    )),
                    (this.rz = PropertyFactory.getProp(
                      t,
                      e.rz,
                      0,
                      degToRads,
                      this
                    )),
                    e.or.k[0].ti)
                  ) {
                    var r,
                      a = e.or.k.length;
                    for (r = 0; r < a; r += 1)
                      e.or.k[r].to = e.or.k[r].ti = null;
                  }
                  (this.or = PropertyFactory.getProp(
                    t,
                    e.or,
                    1,
                    degToRads,
                    this
                  )),
                    (this.or.sh = !0);
                } else
                  this.r = PropertyFactory.getProp(
                    t,
                    e.r || { k: 0 },
                    0,
                    degToRads,
                    this
                  );
                e.sk &&
                  ((this.sk = PropertyFactory.getProp(
                    t,
                    e.sk,
                    0,
                    degToRads,
                    this
                  )),
                  (this.sa = PropertyFactory.getProp(
                    t,
                    e.sa,
                    0,
                    degToRads,
                    this
                  ))),
                  (this.a = PropertyFactory.getProp(
                    t,
                    e.a || { k: [0, 0, 0] },
                    1,
                    0,
                    this
                  )),
                  (this.s = PropertyFactory.getProp(
                    t,
                    e.s || { k: [100, 100, 100] },
                    1,
                    0.01,
                    this
                  )),
                  e.o
                    ? (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, t))
                    : (this.o = { _mdf: !1, v: 1 }),
                  (this._isDirty = !0),
                  this.dynamicProperties.length || this.getValue(!0);
              }
              return (
                (t.prototype = {
                  applyToMatrix: function (t) {
                    var e = this._mdf;
                    this.iterateDynamicProperties(),
                      (this._mdf = this._mdf || e),
                      this.a &&
                        t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                      this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                      this.sk && t.skewFromAxis(-this.sk.v, this.sa.v),
                      this.r
                        ? t.rotate(-this.r.v)
                        : t
                            .rotateZ(-this.rz.v)
                            .rotateY(this.ry.v)
                            .rotateX(this.rx.v)
                            .rotateZ(-this.or.v[2])
                            .rotateY(this.or.v[1])
                            .rotateX(this.or.v[0]),
                      this.data.p.s
                        ? this.data.p.z
                          ? t.translate(this.px.v, this.py.v, -this.pz.v)
                          : t.translate(this.px.v, this.py.v, 0)
                        : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                  },
                  getValue: function (t) {
                    if (this.elem.globalData.frameId !== this.frameId) {
                      if (
                        (this._isDirty &&
                          (this.precalculateMatrix(), (this._isDirty = !1)),
                        this.iterateDynamicProperties(),
                        this._mdf || t)
                      ) {
                        if (
                          (this.v.cloneFromProps(this.pre.props),
                          this.appliedTransformations < 1 &&
                            this.v.translate(
                              -this.a.v[0],
                              -this.a.v[1],
                              this.a.v[2]
                            ),
                          this.appliedTransformations < 2 &&
                            this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                          this.sk &&
                            this.appliedTransformations < 3 &&
                            this.v.skewFromAxis(-this.sk.v, this.sa.v),
                          this.r && this.appliedTransformations < 4
                            ? this.v.rotate(-this.r.v)
                            : !this.r &&
                              this.appliedTransformations < 4 &&
                              this.v
                                .rotateZ(-this.rz.v)
                                .rotateY(this.ry.v)
                                .rotateX(this.rx.v)
                                .rotateZ(-this.or.v[2])
                                .rotateY(this.or.v[1])
                                .rotateX(this.or.v[0]),
                          this.autoOriented)
                        ) {
                          var e,
                            i,
                            r = this.elem.globalData.frameRate;
                          if (
                            this.p &&
                            this.p.keyframes &&
                            this.p.getValueAtTime
                          )
                            i =
                              this.p._caching.lastFrame + this.p.offsetTime <=
                              this.p.keyframes[0].t
                                ? ((e = this.p.getValueAtTime(
                                    (this.p.keyframes[0].t + 0.01) / r,
                                    0
                                  )),
                                  this.p.getValueAtTime(
                                    this.p.keyframes[0].t / r,
                                    0
                                  ))
                                : this.p._caching.lastFrame +
                                    this.p.offsetTime >=
                                  this.p.keyframes[this.p.keyframes.length - 1]
                                    .t
                                ? ((e = this.p.getValueAtTime(
                                    this.p.keyframes[
                                      this.p.keyframes.length - 1
                                    ].t / r,
                                    0
                                  )),
                                  this.p.getValueAtTime(
                                    (this.p.keyframes[
                                      this.p.keyframes.length - 1
                                    ].t -
                                      0.01) /
                                      r,
                                    0
                                  ))
                                : ((e = this.p.pv),
                                  this.p.getValueAtTime(
                                    (this.p._caching.lastFrame +
                                      this.p.offsetTime -
                                      0.01) /
                                      r,
                                    this.p.offsetTime
                                  ));
                          else if (
                            this.px &&
                            this.px.keyframes &&
                            this.py.keyframes &&
                            this.px.getValueAtTime &&
                            this.py.getValueAtTime
                          ) {
                            (e = []), (i = []);
                            var a = this.px,
                              s = this.py;
                            a._caching.lastFrame + a.offsetTime <=
                            a.keyframes[0].t
                              ? ((e[0] = a.getValueAtTime(
                                  (a.keyframes[0].t + 0.01) / r,
                                  0
                                )),
                                (e[1] = s.getValueAtTime(
                                  (s.keyframes[0].t + 0.01) / r,
                                  0
                                )),
                                (i[0] = a.getValueAtTime(
                                  a.keyframes[0].t / r,
                                  0
                                )),
                                (i[1] = s.getValueAtTime(
                                  s.keyframes[0].t / r,
                                  0
                                )))
                              : a._caching.lastFrame + a.offsetTime >=
                                a.keyframes[a.keyframes.length - 1].t
                              ? ((e[0] = a.getValueAtTime(
                                  a.keyframes[a.keyframes.length - 1].t / r,
                                  0
                                )),
                                (e[1] = s.getValueAtTime(
                                  s.keyframes[s.keyframes.length - 1].t / r,
                                  0
                                )),
                                (i[0] = a.getValueAtTime(
                                  (a.keyframes[a.keyframes.length - 1].t -
                                    0.01) /
                                    r,
                                  0
                                )),
                                (i[1] = s.getValueAtTime(
                                  (s.keyframes[s.keyframes.length - 1].t -
                                    0.01) /
                                    r,
                                  0
                                )))
                              : ((e = [a.pv, s.pv]),
                                (i[0] = a.getValueAtTime(
                                  (a._caching.lastFrame + a.offsetTime - 0.01) /
                                    r,
                                  a.offsetTime
                                )),
                                (i[1] = s.getValueAtTime(
                                  (s._caching.lastFrame + s.offsetTime - 0.01) /
                                    r,
                                  s.offsetTime
                                )));
                          }
                          this.v.rotate(-Math.atan2(e[1] - i[1], e[0] - i[0]));
                        }
                        this.data.p && this.data.p.s
                          ? this.data.p.z
                            ? this.v.translate(this.px.v, this.py.v, -this.pz.v)
                            : this.v.translate(this.px.v, this.py.v, 0)
                          : this.v.translate(
                              this.p.v[0],
                              this.p.v[1],
                              -this.p.v[2]
                            );
                      }
                      this.frameId = this.elem.globalData.frameId;
                    }
                  },
                  precalculateMatrix: function () {
                    if (
                      !this.a.k &&
                      (this.pre.translate(
                        -this.a.v[0],
                        -this.a.v[1],
                        this.a.v[2]
                      ),
                      (this.appliedTransformations = 1),
                      !this.s.effectsSequence.length)
                    ) {
                      if (
                        (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                        (this.appliedTransformations = 2),
                        this.sk)
                      ) {
                        if (
                          this.sk.effectsSequence.length ||
                          this.sa.effectsSequence.length
                        )
                          return;
                        this.pre.skewFromAxis(-this.sk.v, this.sa.v),
                          (this.appliedTransformations = 3);
                      }
                      if (this.r) {
                        if (this.r.effectsSequence.length) return;
                        this.pre.rotate(-this.r.v),
                          (this.appliedTransformations = 4);
                      } else
                        this.rz.effectsSequence.length ||
                          this.ry.effectsSequence.length ||
                          this.rx.effectsSequence.length ||
                          this.or.effectsSequence.length ||
                          (this.pre
                            .rotateZ(-this.rz.v)
                            .rotateY(this.ry.v)
                            .rotateX(this.rx.v)
                            .rotateZ(-this.or.v[2])
                            .rotateY(this.or.v[1])
                            .rotateX(this.or.v[0]),
                          (this.appliedTransformations = 4));
                    }
                  },
                  autoOrient: function () {},
                }),
                extendPrototype([DynamicPropertyContainer], t),
                (t.prototype.addDynamicProperty = function (t) {
                  this._addDynamicProperty(t),
                    this.elem.addDynamicProperty(t),
                    (this._isDirty = !0);
                }),
                (t.prototype._addDynamicProperty =
                  DynamicPropertyContainer.prototype.addDynamicProperty),
                {
                  getTransformProperty: function (e, i, r) {
                    return new t(e, i, r);
                  },
                }
              );
            })();
          function ShapePath() {
            (this.c = !1),
              (this._length = 0),
              (this._maxLength = 8),
              (this.v = createSizedArray(this._maxLength)),
              (this.o = createSizedArray(this._maxLength)),
              (this.i = createSizedArray(this._maxLength));
          }
          (ShapePath.prototype.setPathData = function (t, e) {
            (this.c = t), this.setLength(e);
            for (var i = 0; i < e; )
              (this.v[i] = point_pool.newElement()),
                (this.o[i] = point_pool.newElement()),
                (this.i[i] = point_pool.newElement()),
                (i += 1);
          }),
            (ShapePath.prototype.setLength = function (t) {
              for (; this._maxLength < t; ) this.doubleArrayLength();
              this._length = t;
            }),
            (ShapePath.prototype.doubleArrayLength = function () {
              (this.v = this.v.concat(createSizedArray(this._maxLength))),
                (this.i = this.i.concat(createSizedArray(this._maxLength))),
                (this.o = this.o.concat(createSizedArray(this._maxLength))),
                (this._maxLength *= 2);
            }),
            (ShapePath.prototype.setXYAt = function (t, e, i, r, a) {
              var s;
              switch (
                ((this._length = Math.max(this._length, r + 1)),
                this._length >= this._maxLength && this.doubleArrayLength(),
                i)
              ) {
                case "v":
                  s = this.v;
                  break;
                case "i":
                  s = this.i;
                  break;
                case "o":
                  s = this.o;
              }
              (!s[r] || (s[r] && !a)) && (s[r] = point_pool.newElement()),
                (s[r][0] = t),
                (s[r][1] = e);
            }),
            (ShapePath.prototype.setTripleAt = function (
              t,
              e,
              i,
              r,
              a,
              s,
              n,
              o
            ) {
              this.setXYAt(t, e, "v", n, o),
                this.setXYAt(i, r, "o", n, o),
                this.setXYAt(a, s, "i", n, o);
            }),
            (ShapePath.prototype.reverse = function () {
              var t = new ShapePath();
              t.setPathData(this.c, this._length);
              var e = this.v,
                i = this.o,
                r = this.i,
                a = 0;
              this.c &&
                (t.setTripleAt(
                  e[0][0],
                  e[0][1],
                  r[0][0],
                  r[0][1],
                  i[0][0],
                  i[0][1],
                  0,
                  !1
                ),
                (a = 1));
              var s,
                n = this._length - 1,
                o = this._length;
              for (s = a; s < o; s += 1)
                t.setTripleAt(
                  e[n][0],
                  e[n][1],
                  r[n][0],
                  r[n][1],
                  i[n][0],
                  i[n][1],
                  s,
                  !1
                ),
                  (n -= 1);
              return t;
            });
          var ShapePropertyFactory = (function () {
              var t = -999999;
              function e(t, e, i) {
                var r,
                  a,
                  s,
                  n,
                  o,
                  h,
                  p,
                  l,
                  m,
                  c = i.lastIndex,
                  f = this.keyframes;
                if (t < f[0].t - this.offsetTime)
                  (r = f[0].s[0]), (s = !0), (c = 0);
                else if (t >= f[f.length - 1].t - this.offsetTime)
                  (r = f[f.length - 1].s
                    ? f[f.length - 1].s[0]
                    : f[f.length - 2].e[0]),
                    (s = !0);
                else {
                  for (
                    var d, u, y = c, g = f.length - 1, x = !0;
                    x &&
                    ((d = f[y]), !((u = f[y + 1]).t - this.offsetTime > t));

                  )
                    y < g - 1 ? (y += 1) : (x = !1);
                  if (((c = y), !(s = 1 === d.h))) {
                    if (t >= u.t - this.offsetTime) l = 1;
                    else if (t < d.t - this.offsetTime) l = 0;
                    else {
                      var v;
                      d.__fnct
                        ? (v = d.__fnct)
                        : ((v = BezierFactory.getBezierEasing(
                            d.o.x,
                            d.o.y,
                            d.i.x,
                            d.i.y
                          ).get),
                          (d.__fnct = v)),
                        (l = v(
                          (t - (d.t - this.offsetTime)) /
                            (u.t - this.offsetTime - (d.t - this.offsetTime))
                        ));
                    }
                    a = u.s ? u.s[0] : d.e[0];
                  }
                  r = d.s[0];
                }
                for (
                  h = e._length, p = r.i[0].length, i.lastIndex = c, n = 0;
                  n < h;
                  n += 1
                )
                  for (o = 0; o < p; o += 1)
                    (m = s
                      ? r.i[n][o]
                      : r.i[n][o] + (a.i[n][o] - r.i[n][o]) * l),
                      (e.i[n][o] = m),
                      (m = s
                        ? r.o[n][o]
                        : r.o[n][o] + (a.o[n][o] - r.o[n][o]) * l),
                      (e.o[n][o] = m),
                      (m = s
                        ? r.v[n][o]
                        : r.v[n][o] + (a.v[n][o] - r.v[n][o]) * l),
                      (e.v[n][o] = m);
              }
              function i() {
                this.paths = this.localShapeCollection;
              }
              function r(t) {
                (function (t, e) {
                  if (t._length !== e._length || t.c !== e.c) return !1;
                  var i,
                    r = t._length;
                  for (i = 0; i < r; i += 1)
                    if (
                      t.v[i][0] !== e.v[i][0] ||
                      t.v[i][1] !== e.v[i][1] ||
                      t.o[i][0] !== e.o[i][0] ||
                      t.o[i][1] !== e.o[i][1] ||
                      t.i[i][0] !== e.i[i][0] ||
                      t.i[i][1] !== e.i[i][1]
                    )
                      return !1;
                  return !0;
                })(this.v, t) ||
                  ((this.v = shape_pool.clone(t)),
                  this.localShapeCollection.releaseShapes(),
                  this.localShapeCollection.addShape(this.v),
                  (this._mdf = !0),
                  (this.paths = this.localShapeCollection));
              }
              function a() {
                if (this.elem.globalData.frameId !== this.frameId)
                  if (this.effectsSequence.length)
                    if (this.lock) this.setVValue(this.pv);
                    else {
                      (this.lock = !0), (this._mdf = !1);
                      var t,
                        e = this.kf
                          ? this.pv
                          : this.data.ks
                          ? this.data.ks.k
                          : this.data.pt.k,
                        i = this.effectsSequence.length;
                      for (t = 0; t < i; t += 1) e = this.effectsSequence[t](e);
                      this.setVValue(e),
                        (this.lock = !1),
                        (this.frameId = this.elem.globalData.frameId);
                    }
                  else this._mdf = !1;
              }
              function s(t, e, r) {
                (this.propType = "shape"),
                  (this.comp = t.comp),
                  (this.container = t),
                  (this.elem = t),
                  (this.data = e),
                  (this.k = !1),
                  (this.kf = !1),
                  (this._mdf = !1);
                var a = 3 === r ? e.pt.k : e.ks.k;
                (this.v = shape_pool.clone(a)),
                  (this.pv = shape_pool.clone(this.v)),
                  (this.localShapeCollection = shapeCollection_pool.newShapeCollection()),
                  (this.paths = this.localShapeCollection),
                  this.paths.addShape(this.v),
                  (this.reset = i),
                  (this.effectsSequence = []);
              }
              function n(t) {
                this.effectsSequence.push(t),
                  this.container.addDynamicProperty(this);
              }
              function o(e, r, a) {
                (this.propType = "shape"),
                  (this.comp = e.comp),
                  (this.elem = e),
                  (this.container = e),
                  (this.offsetTime = e.data.st),
                  (this.keyframes = 3 === a ? r.pt.k : r.ks.k),
                  (this.k = !0),
                  (this.kf = !0);
                var s = this.keyframes[0].s[0].i.length;
                this.keyframes[0].s[0].i[0].length,
                  (this.v = shape_pool.newElement()),
                  this.v.setPathData(this.keyframes[0].s[0].c, s),
                  (this.pv = shape_pool.clone(this.v)),
                  (this.localShapeCollection = shapeCollection_pool.newShapeCollection()),
                  (this.paths = this.localShapeCollection),
                  this.paths.addShape(this.v),
                  (this.lastFrame = t),
                  (this.reset = i),
                  (this._caching = { lastFrame: t, lastIndex: 0 }),
                  (this.effectsSequence = [
                    function () {
                      var e = this.comp.renderedFrame - this.offsetTime,
                        i = this.keyframes[0].t - this.offsetTime,
                        r =
                          this.keyframes[this.keyframes.length - 1].t -
                          this.offsetTime,
                        a = this._caching.lastFrame;
                      return (
                        (a !== t && ((a < i && e < i) || (r < a && r < e))) ||
                          ((this._caching.lastIndex =
                            a < e ? this._caching.lastIndex : 0),
                          this.interpolateShape(e, this.pv, this._caching)),
                        (this._caching.lastFrame = e),
                        this.pv
                      );
                    }.bind(this),
                  ]);
              }
              (s.prototype.interpolateShape = e),
                (s.prototype.getValue = a),
                (s.prototype.setVValue = r),
                (s.prototype.addEffect = n),
                (o.prototype.getValue = a),
                (o.prototype.interpolateShape = e),
                (o.prototype.setVValue = r),
                (o.prototype.addEffect = n);
              var h = (function () {
                  var t = roundCorner;
                  function e(t, e) {
                    (this.v = shape_pool.newElement()),
                      this.v.setPathData(!0, 4),
                      (this.localShapeCollection = shapeCollection_pool.newShapeCollection()),
                      (this.paths = this.localShapeCollection),
                      this.localShapeCollection.addShape(this.v),
                      (this.d = e.d),
                      (this.elem = t),
                      (this.comp = t.comp),
                      (this.frameId = -1),
                      this.initDynamicPropertyContainer(t),
                      (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
                      (this.s = PropertyFactory.getProp(t, e.s, 1, 0, this)),
                      this.dynamicProperties.length
                        ? (this.k = !0)
                        : ((this.k = !1), this.convertEllToPath());
                  }
                  return (
                    (e.prototype = {
                      reset: i,
                      getValue: function () {
                        this.elem.globalData.frameId !== this.frameId &&
                          ((this.frameId = this.elem.globalData.frameId),
                          this.iterateDynamicProperties(),
                          this._mdf && this.convertEllToPath());
                      },
                      convertEllToPath: function () {
                        var e = this.p.v[0],
                          i = this.p.v[1],
                          r = this.s.v[0] / 2,
                          a = this.s.v[1] / 2,
                          s = 3 !== this.d,
                          n = this.v;
                        (n.v[0][0] = e),
                          (n.v[0][1] = i - a),
                          (n.v[1][0] = s ? e + r : e - r),
                          (n.v[1][1] = i),
                          (n.v[2][0] = e),
                          (n.v[2][1] = i + a),
                          (n.v[3][0] = s ? e - r : e + r),
                          (n.v[3][1] = i),
                          (n.i[0][0] = s ? e - r * t : e + r * t),
                          (n.i[0][1] = i - a),
                          (n.i[1][0] = s ? e + r : e - r),
                          (n.i[1][1] = i - a * t),
                          (n.i[2][0] = s ? e + r * t : e - r * t),
                          (n.i[2][1] = i + a),
                          (n.i[3][0] = s ? e - r : e + r),
                          (n.i[3][1] = i + a * t),
                          (n.o[0][0] = s ? e + r * t : e - r * t),
                          (n.o[0][1] = i - a),
                          (n.o[1][0] = s ? e + r : e - r),
                          (n.o[1][1] = i + a * t),
                          (n.o[2][0] = s ? e - r * t : e + r * t),
                          (n.o[2][1] = i + a),
                          (n.o[3][0] = s ? e - r : e + r),
                          (n.o[3][1] = i - a * t);
                      },
                    }),
                    extendPrototype([DynamicPropertyContainer], e),
                    e
                  );
                })(),
                p = (function () {
                  function t(t, e) {
                    (this.v = shape_pool.newElement()),
                      this.v.setPathData(!0, 0),
                      (this.elem = t),
                      (this.comp = t.comp),
                      (this.data = e),
                      (this.frameId = -1),
                      (this.d = e.d),
                      this.initDynamicPropertyContainer(t),
                      1 === e.sy
                        ? ((this.ir = PropertyFactory.getProp(
                            t,
                            e.ir,
                            0,
                            0,
                            this
                          )),
                          (this.is = PropertyFactory.getProp(
                            t,
                            e.is,
                            0,
                            0.01,
                            this
                          )),
                          (this.convertToPath = this.convertStarToPath))
                        : (this.convertToPath = this.convertPolygonToPath),
                      (this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this)),
                      (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
                      (this.r = PropertyFactory.getProp(
                        t,
                        e.r,
                        0,
                        degToRads,
                        this
                      )),
                      (this.or = PropertyFactory.getProp(t, e.or, 0, 0, this)),
                      (this.os = PropertyFactory.getProp(
                        t,
                        e.os,
                        0,
                        0.01,
                        this
                      )),
                      (this.localShapeCollection = shapeCollection_pool.newShapeCollection()),
                      this.localShapeCollection.addShape(this.v),
                      (this.paths = this.localShapeCollection),
                      this.dynamicProperties.length
                        ? (this.k = !0)
                        : ((this.k = !1), this.convertToPath());
                  }
                  return (
                    (t.prototype = {
                      reset: i,
                      getValue: function () {
                        this.elem.globalData.frameId !== this.frameId &&
                          ((this.frameId = this.elem.globalData.frameId),
                          this.iterateDynamicProperties(),
                          this._mdf && this.convertToPath());
                      },
                      convertStarToPath: function () {
                        var t,
                          e,
                          i,
                          r,
                          a = 2 * Math.floor(this.pt.v),
                          s = (2 * Math.PI) / a,
                          n = !0,
                          o = this.or.v,
                          h = this.ir.v,
                          p = this.os.v,
                          l = this.is.v,
                          m = (2 * Math.PI * o) / (2 * a),
                          c = (2 * Math.PI * h) / (2 * a),
                          f = -Math.PI / 2;
                        f += this.r.v;
                        var d = 3 === this.data.d ? -1 : 1;
                        for (t = this.v._length = 0; t < a; t += 1) {
                          (i = n ? p : l), (r = n ? m : c);
                          var u = (e = n ? o : h) * Math.cos(f),
                            y = e * Math.sin(f),
                            g =
                              0 === u && 0 === y
                                ? 0
                                : y / Math.sqrt(u * u + y * y),
                            x =
                              0 === u && 0 === y
                                ? 0
                                : -u / Math.sqrt(u * u + y * y);
                          (u += +this.p.v[0]),
                            (y += +this.p.v[1]),
                            this.v.setTripleAt(
                              u,
                              y,
                              u - g * r * i * d,
                              y - x * r * i * d,
                              u + g * r * i * d,
                              y + x * r * i * d,
                              t,
                              !0
                            ),
                            (n = !n),
                            (f += s * d);
                        }
                      },
                      convertPolygonToPath: function () {
                        var t,
                          e = Math.floor(this.pt.v),
                          i = (2 * Math.PI) / e,
                          r = this.or.v,
                          a = this.os.v,
                          s = (2 * Math.PI * r) / (4 * e),
                          n = -Math.PI / 2,
                          o = 3 === this.data.d ? -1 : 1;
                        for (
                          n += this.r.v, t = this.v._length = 0;
                          t < e;
                          t += 1
                        ) {
                          var h = r * Math.cos(n),
                            p = r * Math.sin(n),
                            l =
                              0 === h && 0 === p
                                ? 0
                                : p / Math.sqrt(h * h + p * p),
                            m =
                              0 === h && 0 === p
                                ? 0
                                : -h / Math.sqrt(h * h + p * p);
                          (h += +this.p.v[0]),
                            (p += +this.p.v[1]),
                            this.v.setTripleAt(
                              h,
                              p,
                              h - l * s * a * o,
                              p - m * s * a * o,
                              h + l * s * a * o,
                              p + m * s * a * o,
                              t,
                              !0
                            ),
                            (n += i * o);
                        }
                        (this.paths.length = 0), (this.paths[0] = this.v);
                      },
                    }),
                    extendPrototype([DynamicPropertyContainer], t),
                    t
                  );
                })(),
                l = (function () {
                  function t(t, e) {
                    (this.v = shape_pool.newElement()),
                      (this.v.c = !0),
                      (this.localShapeCollection = shapeCollection_pool.newShapeCollection()),
                      this.localShapeCollection.addShape(this.v),
                      (this.paths = this.localShapeCollection),
                      (this.elem = t),
                      (this.comp = t.comp),
                      (this.frameId = -1),
                      (this.d = e.d),
                      this.initDynamicPropertyContainer(t),
                      (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
                      (this.s = PropertyFactory.getProp(t, e.s, 1, 0, this)),
                      (this.r = PropertyFactory.getProp(t, e.r, 0, 0, this)),
                      this.dynamicProperties.length
                        ? (this.k = !0)
                        : ((this.k = !1), this.convertRectToPath());
                  }
                  return (
                    (t.prototype = {
                      convertRectToPath: function () {
                        var t = this.p.v[0],
                          e = this.p.v[1],
                          i = this.s.v[0] / 2,
                          r = this.s.v[1] / 2,
                          a = bm_min(i, r, this.r.v),
                          s = a * (1 - roundCorner);
                        (this.v._length = 0),
                          2 === this.d || 1 === this.d
                            ? (this.v.setTripleAt(
                                t + i,
                                e - r + a,
                                t + i,
                                e - r + a,
                                t + i,
                                e - r + s,
                                0,
                                !0
                              ),
                              this.v.setTripleAt(
                                t + i,
                                e + r - a,
                                t + i,
                                e + r - s,
                                t + i,
                                e + r - a,
                                1,
                                !0
                              ),
                              0 !== a
                                ? (this.v.setTripleAt(
                                    t + i - a,
                                    e + r,
                                    t + i - a,
                                    e + r,
                                    t + i - s,
                                    e + r,
                                    2,
                                    !0
                                  ),
                                  this.v.setTripleAt(
                                    t - i + a,
                                    e + r,
                                    t - i + s,
                                    e + r,
                                    t - i + a,
                                    e + r,
                                    3,
                                    !0
                                  ),
                                  this.v.setTripleAt(
                                    t - i,
                                    e + r - a,
                                    t - i,
                                    e + r - a,
                                    t - i,
                                    e + r - s,
                                    4,
                                    !0
                                  ),
                                  this.v.setTripleAt(
                                    t - i,
                                    e - r + a,
                                    t - i,
                                    e - r + s,
                                    t - i,
                                    e - r + a,
                                    5,
                                    !0
                                  ),
                                  this.v.setTripleAt(
                                    t - i + a,
                                    e - r,
                                    t - i + a,
                                    e - r,
                                    t - i + s,
                                    e - r,
                                    6,
                                    !0
                                  ),
                                  this.v.setTripleAt(
                                    t + i - a,
                                    e - r,
                                    t + i - s,
                                    e - r,
                                    t + i - a,
                                    e - r,
                                    7,
                                    !0
                                  ))
                                : (this.v.setTripleAt(
                                    t - i,
                                    e + r,
                                    t - i + s,
                                    e + r,
                                    t - i,
                                    e + r,
                                    2
                                  ),
                                  this.v.setTripleAt(
                                    t - i,
                                    e - r,
                                    t - i,
                                    e - r + s,
                                    t - i,
                                    e - r,
                                    3
                                  )))
                            : (this.v.setTripleAt(
                                t + i,
                                e - r + a,
                                t + i,
                                e - r + s,
                                t + i,
                                e - r + a,
                                0,
                                !0
                              ),
                              0 !== a
                                ? (this.v.setTripleAt(
                                    t + i - a,
                                    e - r,
                                    t + i - a,
                                    e - r,
                                    t + i - s,
                                    e - r,
                                    1,
                                    !0
                                  ),
                                  this.v.setTripleAt(
                                    t - i + a,
                                    e - r,
                                    t - i + s,
                                    e - r,
                                    t - i + a,
                                    e - r,
                                    2,
                                    !0
                                  ),
                                  this.v.setTripleAt(
                                    t - i,
                                    e - r + a,
                                    t - i,
                                    e - r + a,
                                    t - i,
                                    e - r + s,
                                    3,
                                    !0
                                  ),
                                  this.v.setTripleAt(
                                    t - i,
                                    e + r - a,
                                    t - i,
                                    e + r - s,
                                    t - i,
                                    e + r - a,
                                    4,
                                    !0
                                  ),
                                  this.v.setTripleAt(
                                    t - i + a,
                                    e + r,
                                    t - i + a,
                                    e + r,
                                    t - i + s,
                                    e + r,
                                    5,
                                    !0
                                  ),
                                  this.v.setTripleAt(
                                    t + i - a,
                                    e + r,
                                    t + i - s,
                                    e + r,
                                    t + i - a,
                                    e + r,
                                    6,
                                    !0
                                  ),
                                  this.v.setTripleAt(
                                    t + i,
                                    e + r - a,
                                    t + i,
                                    e + r - a,
                                    t + i,
                                    e + r - s,
                                    7,
                                    !0
                                  ))
                                : (this.v.setTripleAt(
                                    t - i,
                                    e - r,
                                    t - i + s,
                                    e - r,
                                    t - i,
                                    e - r,
                                    1,
                                    !0
                                  ),
                                  this.v.setTripleAt(
                                    t - i,
                                    e + r,
                                    t - i,
                                    e + r - s,
                                    t - i,
                                    e + r,
                                    2,
                                    !0
                                  ),
                                  this.v.setTripleAt(
                                    t + i,
                                    e + r,
                                    t + i - s,
                                    e + r,
                                    t + i,
                                    e + r,
                                    3,
                                    !0
                                  )));
                      },
                      getValue: function (t) {
                        this.elem.globalData.frameId !== this.frameId &&
                          ((this.frameId = this.elem.globalData.frameId),
                          this.iterateDynamicProperties(),
                          this._mdf && this.convertRectToPath());
                      },
                      reset: i,
                    }),
                    extendPrototype([DynamicPropertyContainer], t),
                    t
                  );
                })();
              return {
                getShapeProp: function (t, e, i) {
                  var r;
                  return (
                    3 === i || 4 === i
                      ? (r = (3 === i ? e.pt : e.ks).k.length
                          ? new o(t, e, i)
                          : new s(t, e, i))
                      : 5 === i
                      ? (r = new l(t, e))
                      : 6 === i
                      ? (r = new h(t, e))
                      : 7 === i && (r = new p(t, e)),
                    r.k && t.addDynamicProperty(r),
                    r
                  );
                },
                getConstructorFunction: function () {
                  return s;
                },
                getKeyframedConstructorFunction: function () {
                  return o;
                },
              };
            })(),
            ShapeModifiers =
              ((Tr = {}),
              (Ur = {}),
              (Tr.registerModifier = function (t, e) {
                Ur[t] || (Ur[t] = e);
              }),
              (Tr.getModifier = function (t, e, i) {
                return new Ur[t](e, i);
              }),
              Tr),
            Tr,
            Ur;
          function ShapeModifier() {}
          function TrimModifier() {}
          function RoundCornersModifier() {}
          function RepeaterModifier() {}
          function ShapeCollection() {
            (this._length = 0),
              (this._maxLength = 4),
              (this.shapes = createSizedArray(this._maxLength));
          }
          function DashProperty(t, e, i, r) {
            (this.elem = t),
              (this.frameId = -1),
              (this.dataProps = createSizedArray(e.length)),
              (this.renderer = i),
              (this.k = !1),
              (this.dashStr = ""),
              (this.dashArray = createTypedArray(
                "float32",
                e.length ? e.length - 1 : 0
              )),
              (this.dashoffset = createTypedArray("float32", 1)),
              this.initDynamicPropertyContainer(r);
            var a,
              s,
              n = e.length || 0;
            for (a = 0; a < n; a += 1)
              (s = PropertyFactory.getProp(t, e[a].v, 0, 0, this)),
                (this.k = s.k || this.k),
                (this.dataProps[a] = { n: e[a].n, p: s });
            this.k || this.getValue(!0), (this._isAnimated = this.k);
          }
          function GradientProperty(t, e, i) {
            (this.data = e), (this.c = createTypedArray("uint8c", 4 * e.p));
            var r = e.k.k[0].s
              ? e.k.k[0].s.length - 4 * e.p
              : e.k.k.length - 4 * e.p;
            (this.o = createTypedArray("float32", r)),
              (this._cmdf = !1),
              (this._omdf = !1),
              (this._collapsable = this.checkCollapsable()),
              (this._hasOpacity = r),
              this.initDynamicPropertyContainer(i),
              (this.prop = PropertyFactory.getProp(t, e.k, 1, null, this)),
              (this.k = this.prop.k),
              this.getValue(!0);
          }
          (ShapeModifier.prototype.initModifierProperties = function () {}),
            (ShapeModifier.prototype.addShapeToModifier = function () {}),
            (ShapeModifier.prototype.addShape = function (t) {
              if (!this.closed) {
                t.sh.container.addDynamicProperty(t.sh);
                var e = {
                  shape: t.sh,
                  data: t,
                  localShapeCollection: shapeCollection_pool.newShapeCollection(),
                };
                this.shapes.push(e),
                  this.addShapeToModifier(e),
                  this._isAnimated && t.setAsAnimated();
              }
            }),
            (ShapeModifier.prototype.init = function (t, e) {
              (this.shapes = []),
                (this.elem = t),
                this.initDynamicPropertyContainer(t),
                this.initModifierProperties(t, e),
                (this.frameId = initialDefaultFrame),
                (this.closed = !1),
                (this.k = !1),
                this.dynamicProperties.length
                  ? (this.k = !0)
                  : this.getValue(!0);
            }),
            (ShapeModifier.prototype.processKeys = function () {
              this.elem.globalData.frameId !== this.frameId &&
                ((this.frameId = this.elem.globalData.frameId),
                this.iterateDynamicProperties());
            }),
            extendPrototype([DynamicPropertyContainer], ShapeModifier),
            extendPrototype([ShapeModifier], TrimModifier),
            (TrimModifier.prototype.initModifierProperties = function (t, e) {
              (this.s = PropertyFactory.getProp(t, e.s, 0, 0.01, this)),
                (this.e = PropertyFactory.getProp(t, e.e, 0, 0.01, this)),
                (this.o = PropertyFactory.getProp(t, e.o, 0, 0, this)),
                (this.sValue = 0),
                (this.eValue = 0),
                (this.getValue = this.processKeys),
                (this.m = e.m),
                (this._isAnimated =
                  !!this.s.effectsSequence.length ||
                  !!this.e.effectsSequence.length ||
                  !!this.o.effectsSequence.length);
            }),
            (TrimModifier.prototype.addShapeToModifier = function (t) {
              t.pathsData = [];
            }),
            (TrimModifier.prototype.calculateShapeEdges = function (
              t,
              e,
              i,
              r,
              a
            ) {
              var s = [];
              e <= 1
                ? s.push({ s: t, e: e })
                : 1 <= t
                ? s.push({ s: t - 1, e: e - 1 })
                : (s.push({ s: t, e: 1 }), s.push({ s: 0, e: e - 1 }));
              var n,
                o,
                h = [],
                p = s.length;
              for (n = 0; n < p; n += 1) {
                var l, m;
                (o = s[n]).e * a < r ||
                  o.s * a > r + i ||
                  ((l = o.s * a <= r ? 0 : (o.s * a - r) / i),
                  (m = o.e * a >= r + i ? 1 : (o.e * a - r) / i),
                  h.push([l, m]));
              }
              return h.length || h.push([0, 0]), h;
            }),
            (TrimModifier.prototype.releasePathsData = function (t) {
              var e,
                i = t.length;
              for (e = 0; e < i; e += 1) segments_length_pool.release(t[e]);
              return (t.length = 0), t;
            }),
            (TrimModifier.prototype.processShapes = function (t) {
              var e, i, r;
              if (this._mdf || t) {
                var a = (this.o.v % 360) / 360;
                if (
                  (a < 0 && (a += 1),
                  (e = (1 < this.s.v ? 1 : this.s.v < 0 ? 0 : this.s.v) + a),
                  (i = (1 < this.e.v ? 1 : this.e.v < 0 ? 0 : this.e.v) + a) <
                    e)
                ) {
                  var s = e;
                  (e = i), (i = s);
                }
                (e = 1e-4 * Math.round(1e4 * e)),
                  (i = 1e-4 * Math.round(1e4 * i)),
                  (this.sValue = e),
                  (this.eValue = i);
              } else (e = this.sValue), (i = this.eValue);
              var n,
                o,
                h,
                p,
                l,
                m,
                c = this.shapes.length,
                f = 0;
              if (i === e)
                for (n = 0; n < c; n += 1)
                  this.shapes[n].localShapeCollection.releaseShapes(),
                    (this.shapes[n].shape._mdf = !0),
                    (this.shapes[n].shape.paths = this.shapes[
                      n
                    ].localShapeCollection);
              else if ((1 === i && 0 === e) || (0 === i && 1 === e)) {
                if (this._mdf)
                  for (n = 0; n < c; n += 1)
                    (this.shapes[n].pathsData.length = 0),
                      (this.shapes[n].shape._mdf = !0);
              } else {
                var d,
                  u,
                  y = [];
                for (n = 0; n < c; n += 1)
                  if (
                    (d = this.shapes[n]).shape._mdf ||
                    this._mdf ||
                    t ||
                    2 === this.m
                  ) {
                    if (
                      ((h = (r = d.shape.paths)._length),
                      (m = 0),
                      !d.shape._mdf && d.pathsData.length)
                    )
                      m = d.totalShapeLength;
                    else {
                      for (
                        p = this.releasePathsData(d.pathsData), o = 0;
                        o < h;
                        o += 1
                      )
                        (l = bez.getSegmentsLength(r.shapes[o])),
                          p.push(l),
                          (m += l.totalLength);
                      (d.totalShapeLength = m), (d.pathsData = p);
                    }
                    (f += m), (d.shape._mdf = !0);
                  } else d.shape.paths = d.localShapeCollection;
                var g,
                  x = e,
                  v = i,
                  k = 0;
                for (n = c - 1; 0 <= n; n -= 1)
                  if ((d = this.shapes[n]).shape._mdf) {
                    for (
                      (u = d.localShapeCollection).releaseShapes(),
                        2 === this.m && 1 < c
                          ? ((g = this.calculateShapeEdges(
                              e,
                              i,
                              d.totalShapeLength,
                              k,
                              f
                            )),
                            (k += d.totalShapeLength))
                          : (g = [[x, v]]),
                        h = g.length,
                        o = 0;
                      o < h;
                      o += 1
                    ) {
                      (x = g[o][0]),
                        (v = g[o][1]),
                        (y.length = 0),
                        v <= 1
                          ? y.push({
                              s: d.totalShapeLength * x,
                              e: d.totalShapeLength * v,
                            })
                          : 1 <= x
                          ? y.push({
                              s: d.totalShapeLength * (x - 1),
                              e: d.totalShapeLength * (v - 1),
                            })
                          : (y.push({
                              s: d.totalShapeLength * x,
                              e: d.totalShapeLength,
                            }),
                            y.push({ s: 0, e: d.totalShapeLength * (v - 1) }));
                      var b = this.addShapes(d, y[0]);
                      if (y[0].s !== y[0].e) {
                        if (1 < y.length)
                          if (
                            d.shape.paths.shapes[d.shape.paths._length - 1].c
                          ) {
                            var E = b.pop();
                            this.addPaths(b, u),
                              (b = this.addShapes(d, y[1], E));
                          } else
                            this.addPaths(b, u), (b = this.addShapes(d, y[1]));
                        this.addPaths(b, u);
                      }
                    }
                    d.shape.paths = u;
                  }
              }
            }),
            (TrimModifier.prototype.addPaths = function (t, e) {
              var i,
                r = t.length;
              for (i = 0; i < r; i += 1) e.addShape(t[i]);
            }),
            (TrimModifier.prototype.addSegment = function (
              t,
              e,
              i,
              r,
              a,
              s,
              n
            ) {
              a.setXYAt(e[0], e[1], "o", s),
                a.setXYAt(i[0], i[1], "i", s + 1),
                n && a.setXYAt(t[0], t[1], "v", s),
                a.setXYAt(r[0], r[1], "v", s + 1);
            }),
            (TrimModifier.prototype.addSegmentFromArray = function (
              t,
              e,
              i,
              r
            ) {
              e.setXYAt(t[1], t[5], "o", i),
                e.setXYAt(t[2], t[6], "i", i + 1),
                r && e.setXYAt(t[0], t[4], "v", i),
                e.setXYAt(t[3], t[7], "v", i + 1);
            }),
            (TrimModifier.prototype.addShapes = function (t, e, i) {
              var r,
                a,
                s,
                n,
                o,
                h,
                p,
                l,
                m = t.pathsData,
                c = t.shape.paths.shapes,
                f = t.shape.paths._length,
                d = 0,
                u = [],
                y = !0;
              for (
                l = i
                  ? ((o = i._length), i._length)
                  : ((i = shape_pool.newElement()), (o = 0)),
                  u.push(i),
                  r = 0;
                r < f;
                r += 1
              ) {
                for (
                  h = m[r].lengths,
                    i.c = c[r].c,
                    s = c[r].c ? h.length : h.length + 1,
                    a = 1;
                  a < s;
                  a += 1
                )
                  if (d + (n = h[a - 1]).addedLength < e.s)
                    (d += n.addedLength), (i.c = !1);
                  else {
                    if (d > e.e) {
                      i.c = !1;
                      break;
                    }
                    e.s <= d && e.e >= d + n.addedLength
                      ? (this.addSegment(
                          c[r].v[a - 1],
                          c[r].o[a - 1],
                          c[r].i[a],
                          c[r].v[a],
                          i,
                          o,
                          y
                        ),
                        (y = !1))
                      : ((p = bez.getNewSegment(
                          c[r].v[a - 1],
                          c[r].v[a],
                          c[r].o[a - 1],
                          c[r].i[a],
                          (e.s - d) / n.addedLength,
                          (e.e - d) / n.addedLength,
                          h[a - 1]
                        )),
                        this.addSegmentFromArray(p, i, o, y),
                        (y = !1),
                        (i.c = !1)),
                      (d += n.addedLength),
                      (o += 1);
                  }
                if (c[r].c && h.length) {
                  if (((n = h[a - 1]), d <= e.e)) {
                    var g = h[a - 1].addedLength;
                    e.s <= d && e.e >= d + g
                      ? (this.addSegment(
                          c[r].v[a - 1],
                          c[r].o[a - 1],
                          c[r].i[0],
                          c[r].v[0],
                          i,
                          o,
                          y
                        ),
                        (y = !1))
                      : ((p = bez.getNewSegment(
                          c[r].v[a - 1],
                          c[r].v[0],
                          c[r].o[a - 1],
                          c[r].i[0],
                          (e.s - d) / g,
                          (e.e - d) / g,
                          h[a - 1]
                        )),
                        this.addSegmentFromArray(p, i, o, y),
                        (y = !1),
                        (i.c = !1));
                  } else i.c = !1;
                  (d += n.addedLength), (o += 1);
                }
                if (
                  (i._length &&
                    (i.setXYAt(i.v[l][0], i.v[l][1], "i", l),
                    i.setXYAt(
                      i.v[i._length - 1][0],
                      i.v[i._length - 1][1],
                      "o",
                      i._length - 1
                    )),
                  d > e.e)
                )
                  break;
                r < f - 1 &&
                  ((i = shape_pool.newElement()), (y = !0), u.push(i), (o = 0));
              }
              return u;
            }),
            ShapeModifiers.registerModifier("tm", TrimModifier),
            extendPrototype([ShapeModifier], RoundCornersModifier),
            (RoundCornersModifier.prototype.initModifierProperties = function (
              t,
              e
            ) {
              (this.getValue = this.processKeys),
                (this.rd = PropertyFactory.getProp(t, e.r, 0, null, this)),
                (this._isAnimated = !!this.rd.effectsSequence.length);
            }),
            (RoundCornersModifier.prototype.processPath = function (t, e) {
              var i = shape_pool.newElement();
              i.c = t.c;
              var r,
                a,
                s,
                n,
                o,
                h,
                p,
                l,
                m,
                c,
                f,
                d,
                u,
                y = t._length,
                g = 0;
              for (r = 0; r < y; r += 1)
                (a = t.v[r]),
                  (n = t.o[r]),
                  (s = t.i[r]),
                  a[0] === n[0] &&
                  a[1] === n[1] &&
                  a[0] === s[0] &&
                  a[1] === s[1]
                    ? (0 !== r && r !== y - 1) || t.c
                      ? ((o = 0 === r ? t.v[y - 1] : t.v[r - 1]),
                        (p = (h = Math.sqrt(
                          Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2)
                        ))
                          ? Math.min(h / 2, e) / h
                          : 0),
                        (l = d = a[0] + (o[0] - a[0]) * p),
                        (m = u = a[1] - (a[1] - o[1]) * p),
                        (c = l - (l - a[0]) * roundCorner),
                        (f = m - (m - a[1]) * roundCorner),
                        i.setTripleAt(l, m, c, f, d, u, g),
                        (g += 1),
                        (o = r === y - 1 ? t.v[0] : t.v[r + 1]),
                        (p = (h = Math.sqrt(
                          Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2)
                        ))
                          ? Math.min(h / 2, e) / h
                          : 0),
                        (l = c = a[0] + (o[0] - a[0]) * p),
                        (m = f = a[1] + (o[1] - a[1]) * p),
                        (d = l - (l - a[0]) * roundCorner),
                        (u = m - (m - a[1]) * roundCorner),
                        i.setTripleAt(l, m, c, f, d, u, g))
                      : i.setTripleAt(a[0], a[1], n[0], n[1], s[0], s[1], g)
                    : i.setTripleAt(
                        t.v[r][0],
                        t.v[r][1],
                        t.o[r][0],
                        t.o[r][1],
                        t.i[r][0],
                        t.i[r][1],
                        g
                      ),
                  (g += 1);
              return i;
            }),
            (RoundCornersModifier.prototype.processShapes = function (t) {
              var e,
                i,
                r,
                a,
                s,
                n,
                o = this.shapes.length,
                h = this.rd.v;
              if (0 !== h)
                for (i = 0; i < o; i += 1) {
                  if (
                    ((s = this.shapes[i]).shape.paths,
                    (n = s.localShapeCollection),
                    s.shape._mdf || this._mdf || t)
                  )
                    for (
                      n.releaseShapes(),
                        s.shape._mdf = !0,
                        e = s.shape.paths.shapes,
                        a = s.shape.paths._length,
                        r = 0;
                      r < a;
                      r += 1
                    )
                      n.addShape(this.processPath(e[r], h));
                  s.shape.paths = s.localShapeCollection;
                }
              this.dynamicProperties.length || (this._mdf = !1);
            }),
            ShapeModifiers.registerModifier("rd", RoundCornersModifier),
            extendPrototype([ShapeModifier], RepeaterModifier),
            (RepeaterModifier.prototype.initModifierProperties = function (
              t,
              e
            ) {
              (this.getValue = this.processKeys),
                (this.c = PropertyFactory.getProp(t, e.c, 0, null, this)),
                (this.o = PropertyFactory.getProp(t, e.o, 0, null, this)),
                (this.tr = TransformPropertyFactory.getTransformProperty(
                  t,
                  e.tr,
                  this
                )),
                (this.so = PropertyFactory.getProp(t, e.tr.so, 0, 0.01, this)),
                (this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, 0.01, this)),
                (this.data = e),
                this.dynamicProperties.length || this.getValue(!0),
                (this._isAnimated = !!this.dynamicProperties.length),
                (this.pMatrix = new Matrix()),
                (this.rMatrix = new Matrix()),
                (this.sMatrix = new Matrix()),
                (this.tMatrix = new Matrix()),
                (this.matrix = new Matrix());
            }),
            (RepeaterModifier.prototype.applyTransforms = function (
              t,
              e,
              i,
              r,
              a,
              s
            ) {
              var n = s ? -1 : 1,
                o = r.s.v[0] + (1 - r.s.v[0]) * (1 - a),
                h = r.s.v[1] + (1 - r.s.v[1]) * (1 - a);
              t.translate(r.p.v[0] * n * a, r.p.v[1] * n * a, r.p.v[2]),
                e.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]),
                e.rotate(-r.r.v * n * a),
                e.translate(r.a.v[0], r.a.v[1], r.a.v[2]),
                i.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]),
                i.scale(s ? 1 / o : o, s ? 1 / h : h),
                i.translate(r.a.v[0], r.a.v[1], r.a.v[2]);
            }),
            (RepeaterModifier.prototype.init = function (t, e, i, r) {
              for (
                this.elem = t,
                  this.arr = e,
                  this.pos = i,
                  this.elemsData = r,
                  this._currentCopies = 0,
                  this._elements = [],
                  this._groups = [],
                  this.frameId = -1,
                  this.initDynamicPropertyContainer(t),
                  this.initModifierProperties(t, e[i]);
                0 < i;

              )
                (i -= 1), this._elements.unshift(e[i]);
              this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
            }),
            (RepeaterModifier.prototype.resetElements = function (t) {
              var e,
                i = t.length;
              for (e = 0; e < i; e += 1)
                (t[e]._processed = !1),
                  "gr" === t[e].ty && this.resetElements(t[e].it);
            }),
            (RepeaterModifier.prototype.cloneElements = function (t) {
              t.length;
              var e = JSON.parse(JSON.stringify(t));
              return this.resetElements(e), e;
            }),
            (RepeaterModifier.prototype.changeGroupRender = function (t, e) {
              var i,
                r = t.length;
              for (i = 0; i < r; i += 1)
                (t[i]._render = e),
                  "gr" === t[i].ty && this.changeGroupRender(t[i].it, e);
            }),
            (RepeaterModifier.prototype.processShapes = function (t) {
              var e, i, r, a, s;
              if (this._mdf || t) {
                var n,
                  o = Math.ceil(this.c.v);
                if (this._groups.length < o) {
                  for (; this._groups.length < o; ) {
                    var h = {
                      it: this.cloneElements(this._elements),
                      ty: "gr",
                    };
                    h.it.push({
                      a: { a: 0, ix: 1, k: [0, 0] },
                      nm: "Transform",
                      o: { a: 0, ix: 7, k: 100 },
                      p: { a: 0, ix: 2, k: [0, 0] },
                      r: {
                        a: 1,
                        ix: 6,
                        k: [
                          { s: 0, e: 0, t: 0 },
                          { s: 0, e: 0, t: 1 },
                        ],
                      },
                      s: { a: 0, ix: 3, k: [100, 100] },
                      sa: { a: 0, ix: 5, k: 0 },
                      sk: { a: 0, ix: 4, k: 0 },
                      ty: "tr",
                    }),
                      this.arr.splice(0, 0, h),
                      this._groups.splice(0, 0, h),
                      (this._currentCopies += 1);
                  }
                  this.elem.reloadShapes();
                }
                for (r = s = 0; r <= this._groups.length - 1; r += 1)
                  (n = s < o),
                    (this._groups[r]._render = n),
                    this.changeGroupRender(this._groups[r].it, n),
                    (s += 1);
                this._currentCopies = o;
                var p = this.o.v,
                  l = p % 1,
                  m = 0 < p ? Math.floor(p) : Math.ceil(p),
                  c = (this.tr.v.props, this.pMatrix.props),
                  f = this.rMatrix.props,
                  d = this.sMatrix.props;
                this.pMatrix.reset(),
                  this.rMatrix.reset(),
                  this.sMatrix.reset(),
                  this.tMatrix.reset(),
                  this.matrix.reset();
                var u,
                  y,
                  g = 0;
                if (0 < p) {
                  for (; g < m; )
                    this.applyTransforms(
                      this.pMatrix,
                      this.rMatrix,
                      this.sMatrix,
                      this.tr,
                      1,
                      !1
                    ),
                      (g += 1);
                  l &&
                    (this.applyTransforms(
                      this.pMatrix,
                      this.rMatrix,
                      this.sMatrix,
                      this.tr,
                      l,
                      !1
                    ),
                    (g += l));
                } else if (p < 0) {
                  for (; m < g; )
                    this.applyTransforms(
                      this.pMatrix,
                      this.rMatrix,
                      this.sMatrix,
                      this.tr,
                      1,
                      !0
                    ),
                      (g -= 1);
                  l &&
                    (this.applyTransforms(
                      this.pMatrix,
                      this.rMatrix,
                      this.sMatrix,
                      this.tr,
                      -l,
                      !0
                    ),
                    (g -= l));
                }
                for (
                  r = 1 === this.data.m ? 0 : this._currentCopies - 1,
                    a = 1 === this.data.m ? 1 : -1,
                    s = this._currentCopies;
                  s;

                ) {
                  if (
                    ((y = (i = (e = this.elemsData[r].it)[e.length - 1]
                      .transform.mProps.v.props).length),
                    (e[e.length - 1].transform.mProps._mdf = !0),
                    (e[e.length - 1].transform.op._mdf = !0),
                    (e[e.length - 1].transform.op.v =
                      this.so.v +
                      (this.eo.v - this.so.v) *
                        (r / (this._currentCopies - 1))),
                    0 !== g)
                  ) {
                    for (
                      ((0 !== r && 1 === a) ||
                        (r !== this._currentCopies - 1 && -1 === a)) &&
                        this.applyTransforms(
                          this.pMatrix,
                          this.rMatrix,
                          this.sMatrix,
                          this.tr,
                          1,
                          !1
                        ),
                        this.matrix.transform(
                          f[0],
                          f[1],
                          f[2],
                          f[3],
                          f[4],
                          f[5],
                          f[6],
                          f[7],
                          f[8],
                          f[9],
                          f[10],
                          f[11],
                          f[12],
                          f[13],
                          f[14],
                          f[15]
                        ),
                        this.matrix.transform(
                          d[0],
                          d[1],
                          d[2],
                          d[3],
                          d[4],
                          d[5],
                          d[6],
                          d[7],
                          d[8],
                          d[9],
                          d[10],
                          d[11],
                          d[12],
                          d[13],
                          d[14],
                          d[15]
                        ),
                        this.matrix.transform(
                          c[0],
                          c[1],
                          c[2],
                          c[3],
                          c[4],
                          c[5],
                          c[6],
                          c[7],
                          c[8],
                          c[9],
                          c[10],
                          c[11],
                          c[12],
                          c[13],
                          c[14],
                          c[15]
                        ),
                        u = 0;
                      u < y;
                      u += 1
                    )
                      i[u] = this.matrix.props[u];
                    this.matrix.reset();
                  } else
                    for (this.matrix.reset(), u = 0; u < y; u += 1)
                      i[u] = this.matrix.props[u];
                  (g += 1), (s -= 1), (r += a);
                }
              } else
                for (s = this._currentCopies, r = 0, a = 1; s; )
                  (i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps
                    .v.props),
                    (e[e.length - 1].transform.mProps._mdf = !1),
                    (e[e.length - 1].transform.op._mdf = !1),
                    (s -= 1),
                    (r += a);
            }),
            (RepeaterModifier.prototype.addShape = function () {}),
            ShapeModifiers.registerModifier("rp", RepeaterModifier),
            (ShapeCollection.prototype.addShape = function (t) {
              this._length === this._maxLength &&
                ((this.shapes = this.shapes.concat(
                  createSizedArray(this._maxLength)
                )),
                (this._maxLength *= 2)),
                (this.shapes[this._length] = t),
                (this._length += 1);
            }),
            (ShapeCollection.prototype.releaseShapes = function () {
              var t;
              for (t = 0; t < this._length; t += 1)
                shape_pool.release(this.shapes[t]);
              this._length = 0;
            }),
            (DashProperty.prototype.getValue = function (t) {
              if (
                (this.elem.globalData.frameId !== this.frameId || t) &&
                ((this.frameId = this.elem.globalData.frameId),
                this.iterateDynamicProperties(),
                (this._mdf = this._mdf || t),
                this._mdf)
              ) {
                var e = 0,
                  i = this.dataProps.length;
                for (
                  "svg" === this.renderer && (this.dashStr = ""), e = 0;
                  e < i;
                  e += 1
                )
                  "o" != this.dataProps[e].n
                    ? "svg" === this.renderer
                      ? (this.dashStr += " " + this.dataProps[e].p.v)
                      : (this.dashArray[e] = this.dataProps[e].p.v)
                    : (this.dashoffset[0] = this.dataProps[e].p.v);
              }
            }),
            extendPrototype([DynamicPropertyContainer], DashProperty),
            (GradientProperty.prototype.comparePoints = function (t, e) {
              for (var i = 0, r = this.o.length / 2; i < r; ) {
                if (0.01 < Math.abs(t[4 * i] - t[4 * e + 2 * i])) return !1;
                i += 1;
              }
              return !0;
            }),
            (GradientProperty.prototype.checkCollapsable = function () {
              if (this.o.length / 2 != this.c.length / 4) return !1;
              if (this.data.k.k[0].s)
                for (var t = 0, e = this.data.k.k.length; t < e; ) {
                  if (!this.comparePoints(this.data.k.k[t].s, this.data.p))
                    return !1;
                  t += 1;
                }
              else if (!this.comparePoints(this.data.k.k, this.data.p))
                return !1;
              return !0;
            }),
            (GradientProperty.prototype.getValue = function (t) {
              if (
                (this.prop.getValue(),
                (this._mdf = !1),
                (this._cmdf = !1),
                (this._omdf = !1),
                this.prop._mdf || t)
              ) {
                var e,
                  i,
                  r,
                  a = 4 * this.data.p;
                for (e = 0; e < a; e += 1)
                  (i = e % 4 == 0 ? 100 : 255),
                    (r = Math.round(this.prop.v[e] * i)),
                    this.c[e] !== r && ((this.c[e] = r), (this._cmdf = !t));
                if (this.o.length)
                  for (
                    a = this.prop.v.length, e = 4 * this.data.p;
                    e < a;
                    e += 1
                  )
                    (i = e % 2 == 0 ? 100 : 1),
                      (r =
                        e % 2 == 0
                          ? Math.round(100 * this.prop.v[e])
                          : this.prop.v[e]),
                      this.o[e - 4 * this.data.p] !== r &&
                        ((this.o[e - 4 * this.data.p] = r), (this._omdf = !t));
                this._mdf = !t;
              }
            }),
            extendPrototype([DynamicPropertyContainer], GradientProperty);
          var buildShapeString = function (t, e, i, r) {
              if (0 === e) return "";
              var a,
                s = t.o,
                n = t.i,
                o = t.v,
                h = " M" + r.applyToPointStringified(o[0][0], o[0][1]);
              for (a = 1; a < e; a += 1)
                h +=
                  " C" +
                  r.applyToPointStringified(s[a - 1][0], s[a - 1][1]) +
                  " " +
                  r.applyToPointStringified(n[a][0], n[a][1]) +
                  " " +
                  r.applyToPointStringified(o[a][0], o[a][1]);
              return (
                i &&
                  e &&
                  ((h +=
                    " C" +
                    r.applyToPointStringified(s[a - 1][0], s[a - 1][1]) +
                    " " +
                    r.applyToPointStringified(n[0][0], n[0][1]) +
                    " " +
                    r.applyToPointStringified(o[0][0], o[0][1])),
                  (h += "z")),
                h
              );
            },
            ImagePreloader = (function () {
              var t = (function () {
                var t = createTag("canvas");
                (t.width = 1), (t.height = 1);
                var e = t.getContext("2d");
                return (
                  (e.fillStyle = "rgba(0,0,0,0)"), e.fillRect(0, 0, 1, 1), t
                );
              })();
              function e() {
                (this.loadedAssets += 1),
                  this.loadedAssets === this.totalImages &&
                    this.imagesLoadedCb &&
                    this.imagesLoadedCb(null);
              }
              function i(e) {
                var i = (function (t, e, i) {
                    var r = "";
                    if (t.e) r = t.p;
                    else if (e) {
                      var a = t.p;
                      -1 !== a.indexOf("images/") && (a = a.split("/")[1]),
                        (r = e + a);
                    } else (r = i), (r += t.u ? t.u : ""), (r += t.p);
                    return r;
                  })(e, this.assetsPath, this.path),
                  r = createTag("img");
                (r.crossOrigin = "anonymous"),
                  r.addEventListener("load", this._imageLoaded.bind(this), !1),
                  r.addEventListener(
                    "error",
                    function () {
                      (a.img = t), this._imageLoaded();
                    }.bind(this),
                    !1
                  ),
                  (r.src = i);
                var a = { img: r, assetData: e };
                return a;
              }
              function r(t, e) {
                this.imagesLoadedCb = e;
                var i,
                  r = t.length;
                for (i = 0; i < r; i += 1)
                  t[i].layers ||
                    ((this.totalImages += 1),
                    this.images.push(this._createImageData(t[i])));
              }
              function a(t) {
                this.path = t || "";
              }
              function s(t) {
                this.assetsPath = t || "";
              }
              function n(t) {
                for (var e = 0, i = this.images.length; e < i; ) {
                  if (this.images[e].assetData === t) return this.images[e].img;
                  e += 1;
                }
              }
              function o() {
                (this.imagesLoadedCb = null), (this.images.length = 0);
              }
              function h() {
                return this.totalImages === this.loadedAssets;
              }
              return function () {
                (this.loadAssets = r),
                  (this.setAssetsPath = s),
                  (this.setPath = a),
                  (this.loaded = h),
                  (this.destroy = o),
                  (this.getImage = n),
                  (this._createImageData = i),
                  (this._imageLoaded = e),
                  (this.assetsPath = ""),
                  (this.path = ""),
                  (this.totalImages = 0),
                  (this.loadedAssets = 0),
                  (this.imagesLoadedCb = null),
                  (this.images = []);
              };
            })(),
            featureSupport =
              ((lw = { maskType: !0 }),
              (/MSIE 10/i.test(navigator.userAgent) ||
                /MSIE 9/i.test(navigator.userAgent) ||
                /rv:11.0/i.test(navigator.userAgent) ||
                /Edge\/\d./i.test(navigator.userAgent)) &&
                (lw.maskType = !1),
              lw),
            lw,
            filtersFactory =
              ((mw = {}),
              (mw.createFilter = function (t) {
                var e = createNS("filter");
                return (
                  e.setAttribute("id", t),
                  e.setAttribute("filterUnits", "objectBoundingBox"),
                  e.setAttribute("x", "0%"),
                  e.setAttribute("y", "0%"),
                  e.setAttribute("width", "100%"),
                  e.setAttribute("height", "100%"),
                  e
                );
              }),
              (mw.createAlphaToLuminanceFilter = function () {
                var t = createNS("feColorMatrix");
                return (
                  t.setAttribute("type", "matrix"),
                  t.setAttribute("color-interpolation-filters", "sRGB"),
                  t.setAttribute(
                    "values",
                    "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"
                  ),
                  t
                );
              }),
              mw),
            mw,
            assetLoader = (function () {
              function t(t) {
                return t.response &&
                  "object" ==
                    _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(
                      t.response
                    )
                  ? t.response
                  : t.response && "string" == typeof t.response
                  ? JSON.parse(t.response)
                  : t.responseText
                  ? JSON.parse(t.responseText)
                  : void 0;
              }
              return {
                load: function (e, i, r) {
                  var a,
                    s = new XMLHttpRequest();
                  s.open("GET", e, !0);
                  try {
                    s.responseType = "json";
                  } catch (e) {}
                  s.send(),
                    (s.onreadystatechange = function () {
                      if (4 == s.readyState)
                        if (200 == s.status) (a = t(s)), i(a);
                        else
                          try {
                            (a = t(s)), i(a);
                          } catch (t) {
                            r && r(t);
                          }
                    });
                },
              };
            })();
          function TextAnimatorProperty(t, e, i) {
            (this._isFirstFrame = !0),
              (this._hasMaskedPath = !1),
              (this._frameId = -1),
              (this._textData = t),
              (this._renderType = e),
              (this._elem = i),
              (this._animatorsData = createSizedArray(this._textData.a.length)),
              (this._pathData = {}),
              (this._moreOptions = { alignment: {} }),
              (this.renderedLetters = []),
              (this.lettersChangedFlag = !1),
              this.initDynamicPropertyContainer(i);
          }
          function TextAnimatorDataProperty(t, e, i) {
            var r = { propType: !1 },
              a = PropertyFactory.getProp,
              s = e.a;
            (this.a = {
              r: s.r ? a(t, s.r, 0, degToRads, i) : r,
              rx: s.rx ? a(t, s.rx, 0, degToRads, i) : r,
              ry: s.ry ? a(t, s.ry, 0, degToRads, i) : r,
              sk: s.sk ? a(t, s.sk, 0, degToRads, i) : r,
              sa: s.sa ? a(t, s.sa, 0, degToRads, i) : r,
              s: s.s ? a(t, s.s, 1, 0.01, i) : r,
              a: s.a ? a(t, s.a, 1, 0, i) : r,
              o: s.o ? a(t, s.o, 0, 0.01, i) : r,
              p: s.p ? a(t, s.p, 1, 0, i) : r,
              sw: s.sw ? a(t, s.sw, 0, 0, i) : r,
              sc: s.sc ? a(t, s.sc, 1, 0, i) : r,
              fc: s.fc ? a(t, s.fc, 1, 0, i) : r,
              fh: s.fh ? a(t, s.fh, 0, 0, i) : r,
              fs: s.fs ? a(t, s.fs, 0, 0.01, i) : r,
              fb: s.fb ? a(t, s.fb, 0, 0.01, i) : r,
              t: s.t ? a(t, s.t, 0, 0, i) : r,
            }),
              (this.s = TextSelectorProp.getTextSelectorProp(t, e.s, i)),
              (this.s.t = e.s.t);
          }
          function LetterProps(t, e, i, r, a, s) {
            (this.o = t),
              (this.sw = e),
              (this.sc = i),
              (this.fc = r),
              (this.m = a),
              (this.p = s),
              (this._mdf = { o: !0, sw: !!e, sc: !!i, fc: !!r, m: !0, p: !0 });
          }
          function TextProperty(t, e) {
            (this._frameId = initialDefaultFrame),
              (this.pv = ""),
              (this.v = ""),
              (this.kf = !1),
              (this._isFirstFrame = !0),
              (this._mdf = !1),
              (this.data = e),
              (this.elem = t),
              (this.comp = this.elem.comp),
              (this.keysIndex = 0),
              (this.canResize = !1),
              (this.minimumFontSize = 1),
              (this.effectsSequence = []),
              (this.currentData = {
                ascent: 0,
                boxWidth: this.defaultBoxWidth,
                f: "",
                fStyle: "",
                fWeight: "",
                fc: "",
                j: "",
                justifyOffset: "",
                l: [],
                lh: 0,
                lineWidths: [],
                ls: "",
                of: "",
                s: "",
                sc: "",
                sw: 0,
                t: 0,
                tr: 0,
                sz: 0,
                ps: null,
                fillColorAnim: !1,
                strokeColorAnim: !1,
                strokeWidthAnim: !1,
                yOffset: 0,
                finalSize: 0,
                finalText: [],
                finalLineHeight: 0,
                __complete: !1,
              }),
              this.copyData(this.currentData, this.data.d.k[0].s),
              this.searchProperty() || this.completeTextData(this.currentData);
          }
          (TextAnimatorProperty.prototype.searchProperties = function () {
            var t,
              e,
              i = this._textData.a.length,
              r = PropertyFactory.getProp;
            for (t = 0; t < i; t += 1)
              (e = this._textData.a[t]),
                (this._animatorsData[t] = new TextAnimatorDataProperty(
                  this._elem,
                  e,
                  this
                ));
            this._textData.p && "m" in this._textData.p
              ? ((this._pathData = {
                  f: r(this._elem, this._textData.p.f, 0, 0, this),
                  l: r(this._elem, this._textData.p.l, 0, 0, this),
                  r: this._textData.p.r,
                  m: this._elem.maskManager.getMaskProperty(this._textData.p.m),
                }),
                (this._hasMaskedPath = !0))
              : (this._hasMaskedPath = !1),
              (this._moreOptions.alignment = r(
                this._elem,
                this._textData.m.a,
                1,
                0,
                this
              ));
          }),
            (TextAnimatorProperty.prototype.getMeasures = function (t, e) {
              if (
                ((this.lettersChangedFlag = e),
                this._mdf ||
                  this._isFirstFrame ||
                  e ||
                  (this._hasMaskedPath && this._pathData.m._mdf))
              ) {
                this._isFirstFrame = !1;
                var i,
                  r,
                  a,
                  s,
                  n,
                  o,
                  h,
                  p,
                  l,
                  m,
                  c,
                  f,
                  d,
                  u,
                  y,
                  g,
                  x,
                  v,
                  k,
                  b = this._moreOptions.alignment.v,
                  E = this._animatorsData,
                  S = this._textData,
                  P = this.mHelper,
                  A = this._renderType,
                  _ = this.renderedLetters.length,
                  D = (this.data, t.l);
                if (this._hasMaskedPath) {
                  if (
                    ((k = this._pathData.m),
                    !this._pathData.n || this._pathData._mdf)
                  ) {
                    var C,
                      T = k.v;
                    for (
                      this._pathData.r && (T = T.reverse()),
                        n = { tLength: 0, segments: [] },
                        s = T._length - 1,
                        a = g = 0;
                      a < s;
                      a += 1
                    )
                      (C = bez.buildBezierData(
                        T.v[a],
                        T.v[a + 1],
                        [T.o[a][0] - T.v[a][0], T.o[a][1] - T.v[a][1]],
                        [
                          T.i[a + 1][0] - T.v[a + 1][0],
                          T.i[a + 1][1] - T.v[a + 1][1],
                        ]
                      )),
                        (n.tLength += C.segmentLength),
                        n.segments.push(C),
                        (g += C.segmentLength);
                    (a = s),
                      k.v.c &&
                        ((C = bez.buildBezierData(
                          T.v[a],
                          T.v[0],
                          [T.o[a][0] - T.v[a][0], T.o[a][1] - T.v[a][1]],
                          [T.i[0][0] - T.v[0][0], T.i[0][1] - T.v[0][1]]
                        )),
                        (n.tLength += C.segmentLength),
                        n.segments.push(C),
                        (g += C.segmentLength)),
                      (this._pathData.pi = n);
                  }
                  if (
                    ((n = this._pathData.pi),
                    (o = this._pathData.f.v),
                    (m = 1),
                    (l = !(p = c = 0)),
                    (u = n.segments),
                    o < 0 && k.v.c)
                  )
                    for (
                      n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength),
                        m = (d = u[(c = u.length - 1)].points).length - 1;
                      o < 0;

                    )
                      (o += d[m].partialLength),
                        (m -= 1) < 0 &&
                          (m = (d = u[(c -= 1)].points).length - 1);
                  (f = (d = u[c].points)[m - 1]),
                    (y = (h = d[m]).partialLength);
                }
                (s = D.length), (r = i = 0);
                var M,
                  w,
                  V,
                  B,
                  F = 1.2 * t.finalSize * 0.714,
                  I = !0;
                V = E.length;
                var G,
                  R,
                  L,
                  O,
                  N,
                  z,
                  j,
                  H,
                  q,
                  W,
                  U,
                  Y,
                  $,
                  K = -1,
                  X = o,
                  J = c,
                  Z = m,
                  Q = -1,
                  tt = "",
                  et = this.defaultPropsArray;
                if (2 === t.j || 1 === t.j) {
                  var it = 0,
                    rt = 0,
                    at = 2 === t.j ? -0.5 : -1,
                    st = 0,
                    nt = !0;
                  for (a = 0; a < s; a += 1)
                    if (D[a].n) {
                      for (it && (it += rt); st < a; )
                        (D[st].animatorJustifyOffset = it), (st += 1);
                      nt = !(it = 0);
                    } else {
                      for (w = 0; w < V; w += 1)
                        (M = E[w].a).t.propType &&
                          (nt && 2 === t.j && (rt += M.t.v * at),
                          (G = E[w].s.getMult(
                            D[a].anIndexes[w],
                            S.a[w].s.totalChars
                          )).length
                            ? (it += M.t.v * G[0] * at)
                            : (it += M.t.v * G * at));
                      nt = !1;
                    }
                  for (it && (it += rt); st < a; )
                    (D[st].animatorJustifyOffset = it), (st += 1);
                }
                for (a = 0; a < s; a += 1) {
                  if ((P.reset(), (N = 1), D[a].n))
                    (i = 0),
                      (r += t.yOffset),
                      (r += I ? 1 : 0),
                      (o = X),
                      (I = !1),
                      this._hasMaskedPath &&
                        ((m = Z),
                        (f = (d = u[(c = J)].points)[m - 1]),
                        (y = (h = d[m]).partialLength),
                        (p = 0)),
                      ($ = W = Y = tt = ""),
                      (et = this.defaultPropsArray);
                  else {
                    if (this._hasMaskedPath) {
                      if (Q !== D[a].line) {
                        switch (t.j) {
                          case 1:
                            o += g - t.lineWidths[D[a].line];
                            break;
                          case 2:
                            o += (g - t.lineWidths[D[a].line]) / 2;
                        }
                        Q = D[a].line;
                      }
                      K !== D[a].ind &&
                        (D[K] && (o += D[K].extra),
                        (o += D[a].an / 2),
                        (K = D[a].ind)),
                        (o += (b[0] * D[a].an) / 200);
                      var ot = 0;
                      for (w = 0; w < V; w += 1)
                        (M = E[w].a).p.propType &&
                          ((G = E[w].s.getMult(
                            D[a].anIndexes[w],
                            S.a[w].s.totalChars
                          )).length
                            ? (ot += M.p.v[0] * G[0])
                            : (ot += M.p.v[0] * G)),
                          M.a.propType &&
                            ((G = E[w].s.getMult(
                              D[a].anIndexes[w],
                              S.a[w].s.totalChars
                            )).length
                              ? (ot += M.a.v[0] * G[0])
                              : (ot += M.a.v[0] * G));
                      for (l = !0; l; )
                        o + ot <= p + y || !d
                          ? ((x = (o + ot - p) / h.partialLength),
                            (L = f.point[0] + (h.point[0] - f.point[0]) * x),
                            (O = f.point[1] + (h.point[1] - f.point[1]) * x),
                            P.translate(
                              (-b[0] * D[a].an) / 200,
                              (-b[1] * F) / 100
                            ),
                            (l = !1))
                          : d &&
                            ((p += h.partialLength),
                            (m += 1) >= d.length &&
                              ((m = 0),
                              (d = u[(c += 1)]
                                ? u[c].points
                                : k.v.c
                                ? u[(c = m = 0)].points
                                : ((p -= h.partialLength), null))),
                            d && ((f = h), (y = (h = d[m]).partialLength)));
                      (R = D[a].an / 2 - D[a].add), P.translate(-R, 0, 0);
                    } else
                      (R = D[a].an / 2 - D[a].add),
                        P.translate(-R, 0, 0),
                        P.translate(
                          (-b[0] * D[a].an) / 200,
                          (-b[1] * F) / 100,
                          0
                        );
                    for (D[a].l, w = 0; w < V; w += 1)
                      (M = E[w].a).t.propType &&
                        ((G = E[w].s.getMult(
                          D[a].anIndexes[w],
                          S.a[w].s.totalChars
                        )),
                        (0 === i && 0 === t.j) ||
                          (this._hasMaskedPath
                            ? G.length
                              ? (o += M.t.v * G[0])
                              : (o += M.t.v * G)
                            : G.length
                            ? (i += M.t.v * G[0])
                            : (i += M.t.v * G)));
                    for (
                      D[a].l,
                        t.strokeWidthAnim && (j = t.sw || 0),
                        t.strokeColorAnim &&
                          (z = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]),
                        t.fillColorAnim &&
                          t.fc &&
                          (H = [t.fc[0], t.fc[1], t.fc[2]]),
                        w = 0;
                      w < V;
                      w += 1
                    )
                      (M = E[w].a).a.propType &&
                        ((G = E[w].s.getMult(
                          D[a].anIndexes[w],
                          S.a[w].s.totalChars
                        )).length
                          ? P.translate(
                              -M.a.v[0] * G[0],
                              -M.a.v[1] * G[1],
                              M.a.v[2] * G[2]
                            )
                          : P.translate(
                              -M.a.v[0] * G,
                              -M.a.v[1] * G,
                              M.a.v[2] * G
                            ));
                    for (w = 0; w < V; w += 1)
                      (M = E[w].a).s.propType &&
                        ((G = E[w].s.getMult(
                          D[a].anIndexes[w],
                          S.a[w].s.totalChars
                        )).length
                          ? P.scale(
                              1 + (M.s.v[0] - 1) * G[0],
                              1 + (M.s.v[1] - 1) * G[1],
                              1
                            )
                          : P.scale(
                              1 + (M.s.v[0] - 1) * G,
                              1 + (M.s.v[1] - 1) * G,
                              1
                            ));
                    for (w = 0; w < V; w += 1) {
                      if (
                        ((M = E[w].a),
                        (G = E[w].s.getMult(
                          D[a].anIndexes[w],
                          S.a[w].s.totalChars
                        )),
                        M.sk.propType &&
                          (G.length
                            ? P.skewFromAxis(-M.sk.v * G[0], M.sa.v * G[1])
                            : P.skewFromAxis(-M.sk.v * G, M.sa.v * G)),
                        M.r.propType &&
                          (G.length
                            ? P.rotateZ(-M.r.v * G[2])
                            : P.rotateZ(-M.r.v * G)),
                        M.ry.propType &&
                          (G.length
                            ? P.rotateY(M.ry.v * G[1])
                            : P.rotateY(M.ry.v * G)),
                        M.rx.propType &&
                          (G.length
                            ? P.rotateX(M.rx.v * G[0])
                            : P.rotateX(M.rx.v * G)),
                        M.o.propType &&
                          (G.length
                            ? (N += (M.o.v * G[0] - N) * G[0])
                            : (N += (M.o.v * G - N) * G)),
                        t.strokeWidthAnim &&
                          M.sw.propType &&
                          (G.length ? (j += M.sw.v * G[0]) : (j += M.sw.v * G)),
                        t.strokeColorAnim && M.sc.propType)
                      )
                        for (q = 0; q < 3; q += 1)
                          G.length
                            ? (z[q] = z[q] + (M.sc.v[q] - z[q]) * G[0])
                            : (z[q] = z[q] + (M.sc.v[q] - z[q]) * G);
                      if (t.fillColorAnim && t.fc) {
                        if (M.fc.propType)
                          for (q = 0; q < 3; q += 1)
                            G.length
                              ? (H[q] = H[q] + (M.fc.v[q] - H[q]) * G[0])
                              : (H[q] = H[q] + (M.fc.v[q] - H[q]) * G);
                        M.fh.propType &&
                          (H = G.length
                            ? addHueToRGB(H, M.fh.v * G[0])
                            : addHueToRGB(H, M.fh.v * G)),
                          M.fs.propType &&
                            (H = G.length
                              ? addSaturationToRGB(H, M.fs.v * G[0])
                              : addSaturationToRGB(H, M.fs.v * G)),
                          M.fb.propType &&
                            (H = G.length
                              ? addBrightnessToRGB(H, M.fb.v * G[0])
                              : addBrightnessToRGB(H, M.fb.v * G));
                      }
                    }
                    for (w = 0; w < V; w += 1)
                      (M = E[w].a).p.propType &&
                        ((G = E[w].s.getMult(
                          D[a].anIndexes[w],
                          S.a[w].s.totalChars
                        )),
                        this._hasMaskedPath
                          ? G.length
                            ? P.translate(0, M.p.v[1] * G[0], -M.p.v[2] * G[1])
                            : P.translate(0, M.p.v[1] * G, -M.p.v[2] * G)
                          : G.length
                          ? P.translate(
                              M.p.v[0] * G[0],
                              M.p.v[1] * G[1],
                              -M.p.v[2] * G[2]
                            )
                          : P.translate(
                              M.p.v[0] * G,
                              M.p.v[1] * G,
                              -M.p.v[2] * G
                            ));
                    if (
                      (t.strokeWidthAnim && (W = j < 0 ? 0 : j),
                      t.strokeColorAnim &&
                        (U =
                          "rgb(" +
                          Math.round(255 * z[0]) +
                          "," +
                          Math.round(255 * z[1]) +
                          "," +
                          Math.round(255 * z[2]) +
                          ")"),
                      t.fillColorAnim &&
                        t.fc &&
                        (Y =
                          "rgb(" +
                          Math.round(255 * H[0]) +
                          "," +
                          Math.round(255 * H[1]) +
                          "," +
                          Math.round(255 * H[2]) +
                          ")"),
                      this._hasMaskedPath)
                    ) {
                      if (
                        (P.translate(0, -t.ls),
                        P.translate(0, (b[1] * F) / 100 + r, 0),
                        S.p.p)
                      ) {
                        v =
                          (h.point[1] - f.point[1]) / (h.point[0] - f.point[0]);
                        var ht = (180 * Math.atan(v)) / Math.PI;
                        h.point[0] < f.point[0] && (ht += 180),
                          P.rotate((-ht * Math.PI) / 180);
                      }
                      P.translate(L, O, 0),
                        (o -= (b[0] * D[a].an) / 200),
                        D[a + 1] &&
                          K !== D[a + 1].ind &&
                          ((o += D[a].an / 2),
                          (o += (t.tr / 1e3) * t.finalSize));
                    } else {
                      switch (
                        (P.translate(i, r, 0),
                        t.ps && P.translate(t.ps[0], t.ps[1] + t.ascent, 0),
                        t.j)
                      ) {
                        case 1:
                          P.translate(
                            D[a].animatorJustifyOffset +
                              t.justifyOffset +
                              (t.boxWidth - t.lineWidths[D[a].line]),
                            0,
                            0
                          );
                          break;
                        case 2:
                          P.translate(
                            D[a].animatorJustifyOffset +
                              t.justifyOffset +
                              (t.boxWidth - t.lineWidths[D[a].line]) / 2,
                            0,
                            0
                          );
                      }
                      P.translate(0, -t.ls),
                        P.translate(R, 0, 0),
                        P.translate(
                          (b[0] * D[a].an) / 200,
                          (b[1] * F) / 100,
                          0
                        ),
                        (i += D[a].l + (t.tr / 1e3) * t.finalSize);
                    }
                    "html" === A
                      ? (tt = P.toCSS())
                      : "svg" === A
                      ? (tt = P.to2dCSS())
                      : (et = [
                          P.props[0],
                          P.props[1],
                          P.props[2],
                          P.props[3],
                          P.props[4],
                          P.props[5],
                          P.props[6],
                          P.props[7],
                          P.props[8],
                          P.props[9],
                          P.props[10],
                          P.props[11],
                          P.props[12],
                          P.props[13],
                          P.props[14],
                          P.props[15],
                        ]),
                      ($ = N);
                  }
                  this.lettersChangedFlag =
                    _ <= a
                      ? ((B = new LetterProps($, W, U, Y, tt, et)),
                        this.renderedLetters.push(B),
                        (_ += 1),
                        !0)
                      : (B = this.renderedLetters[a]).update(
                          $,
                          W,
                          U,
                          Y,
                          tt,
                          et
                        ) || this.lettersChangedFlag;
                }
              }
            }),
            (TextAnimatorProperty.prototype.getValue = function () {
              this._elem.globalData.frameId !== this._frameId &&
                ((this._frameId = this._elem.globalData.frameId),
                this.iterateDynamicProperties());
            }),
            (TextAnimatorProperty.prototype.mHelper = new Matrix()),
            (TextAnimatorProperty.prototype.defaultPropsArray = []),
            extendPrototype([DynamicPropertyContainer], TextAnimatorProperty),
            (LetterProps.prototype.update = function (t, e, i, r, a, s) {
              (this._mdf.o = !1),
                (this._mdf.sw = !1),
                (this._mdf.sc = !1),
                (this._mdf.fc = !1),
                (this._mdf.m = !1);
              var n = (this._mdf.p = !1);
              return (
                this.o !== t && ((this.o = t), (n = this._mdf.o = !0)),
                this.sw !== e && ((this.sw = e), (n = this._mdf.sw = !0)),
                this.sc !== i && ((this.sc = i), (n = this._mdf.sc = !0)),
                this.fc !== r && ((this.fc = r), (n = this._mdf.fc = !0)),
                this.m !== a && ((this.m = a), (n = this._mdf.m = !0)),
                !s.length ||
                  (this.p[0] === s[0] &&
                    this.p[1] === s[1] &&
                    this.p[4] === s[4] &&
                    this.p[5] === s[5] &&
                    this.p[12] === s[12] &&
                    this.p[13] === s[13]) ||
                  ((this.p = s), (n = this._mdf.p = !0)),
                n
              );
            }),
            (TextProperty.prototype.defaultBoxWidth = [0, 0]),
            (TextProperty.prototype.copyData = function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
              return t;
            }),
            (TextProperty.prototype.setCurrentData = function (t) {
              t.__complete || this.completeTextData(t),
                (this.currentData = t),
                (this.currentData.boxWidth =
                  this.currentData.boxWidth || this.defaultBoxWidth),
                (this._mdf = !0);
            }),
            (TextProperty.prototype.searchProperty = function () {
              return this.searchKeyframes();
            }),
            (TextProperty.prototype.searchKeyframes = function () {
              return (
                (this.kf = 1 < this.data.d.k.length),
                this.kf && this.addEffect(this.getKeyframeValue.bind(this)),
                this.kf
              );
            }),
            (TextProperty.prototype.addEffect = function (t) {
              this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
            }),
            (TextProperty.prototype.getValue = function (t) {
              if (
                (this.elem.globalData.frameId !== this.frameId &&
                  this.effectsSequence.length) ||
                t
              ) {
                this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                var e = this.currentData,
                  i = this.keysIndex;
                if (this.lock) this.setCurrentData(this.currentData);
                else {
                  (this.lock = !0), (this._mdf = !1);
                  var r,
                    a = this.effectsSequence.length,
                    s = t || this.data.d.k[this.keysIndex].s;
                  for (r = 0; r < a; r += 1)
                    s =
                      i !== this.keysIndex
                        ? this.effectsSequence[r](s, s.t)
                        : this.effectsSequence[r](this.currentData, s.t);
                  e !== s && this.setCurrentData(s),
                    (this.pv = this.v = this.currentData),
                    (this.lock = !1),
                    (this.frameId = this.elem.globalData.frameId);
                }
              }
            }),
            (TextProperty.prototype.getKeyframeValue = function () {
              for (
                var t = this.data.d.k,
                  e = this.elem.comp.renderedFrame,
                  i = 0,
                  r = t.length;
                i <= r - 1 && (t[i].s, !(i === r - 1 || t[i + 1].t > e));

              )
                i += 1;
              return (
                this.keysIndex !== i && (this.keysIndex = i),
                this.data.d.k[this.keysIndex].s
              );
            }),
            (TextProperty.prototype.buildFinalText = function (t) {
              for (
                var e,
                  i = FontManager.getCombinedCharacterCodes(),
                  r = [],
                  a = 0,
                  s = t.length;
                a < s;

              )
                (e = t.charCodeAt(a)),
                  -1 !== i.indexOf(e)
                    ? (r[r.length - 1] += t.charAt(a))
                    : 55296 <= e &&
                      e <= 56319 &&
                      56320 <= (e = t.charCodeAt(a + 1)) &&
                      e <= 57343
                    ? (r.push(t.substr(a, 2)), ++a)
                    : r.push(t.charAt(a)),
                  (a += 1);
              return r;
            }),
            (TextProperty.prototype.completeTextData = function (t) {
              t.__complete = !0;
              var e,
                i,
                r,
                a,
                s,
                n,
                o,
                h = this.elem.globalData.fontManager,
                p = this.data,
                l = [],
                m = 0,
                c = p.m.g,
                f = 0,
                d = 0,
                u = 0,
                y = [],
                g = 0,
                x = 0,
                v = h.getFontByName(t.f),
                k = 0,
                b = v.fStyle ? v.fStyle.split(" ") : [],
                E = "normal",
                S = "normal";
              for (i = b.length, e = 0; e < i; e += 1)
                switch (b[e].toLowerCase()) {
                  case "italic":
                    S = "italic";
                    break;
                  case "bold":
                    E = "700";
                    break;
                  case "black":
                    E = "900";
                    break;
                  case "medium":
                    E = "500";
                    break;
                  case "regular":
                  case "normal":
                    E = "400";
                    break;
                  case "light":
                  case "thin":
                    E = "200";
                }
              (t.fWeight = v.fWeight || E),
                (t.fStyle = S),
                (t.finalSize = t.s),
                (t.finalText = this.buildFinalText(t.t)),
                (i = t.finalText.length),
                (t.finalLineHeight = t.lh);
              var P,
                A = (t.tr / 1e3) * t.finalSize;
              if (t.sz)
                for (var _, D, C = !0, T = t.sz[0], M = t.sz[1]; C; ) {
                  (g = _ = 0),
                    (i = (D = this.buildFinalText(t.t)).length),
                    (A = (t.tr / 1e3) * t.finalSize);
                  var w = -1;
                  for (e = 0; e < i; e += 1)
                    (P = D[e].charCodeAt(0)),
                      (r = !1),
                      " " === D[e]
                        ? (w = e)
                        : (13 !== P && 3 !== P) ||
                          ((r = !(g = 0)),
                          (_ += t.finalLineHeight || 1.2 * t.finalSize)),
                      T <
                        g +
                          (k = h.chars
                            ? ((o = h.getCharData(D[e], v.fStyle, v.fFamily)),
                              r ? 0 : (o.w * t.finalSize) / 100)
                            : h.measureText(D[e], t.f, t.finalSize)) &&
                      " " !== D[e]
                        ? (-1 === w ? (i += 1) : (e = w),
                          (_ += t.finalLineHeight || 1.2 * t.finalSize),
                          D.splice(e, w === e ? 1 : 0, "\r"),
                          (w = -1),
                          (g = 0))
                        : ((g += k), (g += A));
                  (_ += (v.ascent * t.finalSize) / 100),
                    this.canResize &&
                    t.finalSize > this.minimumFontSize &&
                    M < _
                      ? ((t.finalSize -= 1),
                        (t.finalLineHeight = (t.finalSize * t.lh) / t.s))
                      : ((t.finalText = D), (i = t.finalText.length), (C = !1));
                }
              g = -A;
              var V,
                B = (k = 0);
              for (e = 0; e < i; e += 1)
                if (
                  ((r = !1),
                  (P = (V = t.finalText[e]).charCodeAt(0)),
                  " " === V
                    ? (a = " ")
                    : 13 === P || 3 === P
                    ? ((B = 0),
                      y.push(g),
                      (x = x < g ? g : x),
                      (g = -2 * A),
                      (r = !(a = "")),
                      (u += 1))
                    : (a = t.finalText[e]),
                  (k = h.chars
                    ? ((o = h.getCharData(
                        V,
                        v.fStyle,
                        h.getFontByName(t.f).fFamily
                      )),
                      r ? 0 : (o.w * t.finalSize) / 100)
                    : h.measureText(a, t.f, t.finalSize)),
                  " " === V ? (B += k + A) : ((g += k + A + B), (B = 0)),
                  l.push({
                    l: k,
                    an: k,
                    add: f,
                    n: r,
                    anIndexes: [],
                    val: a,
                    line: u,
                    animatorJustifyOffset: 0,
                  }),
                  2 == c)
                ) {
                  if (((f += k), "" === a || " " === a || e === i - 1)) {
                    for (("" !== a && " " !== a) || (f -= k); d <= e; )
                      (l[d].an = f), (l[d].ind = m), (l[d].extra = k), (d += 1);
                    (m += 1), (f = 0);
                  }
                } else if (3 == c) {
                  if (((f += k), "" === a || e === i - 1)) {
                    for ("" === a && (f -= k); d <= e; )
                      (l[d].an = f), (l[d].ind = m), (l[d].extra = k), (d += 1);
                    (f = 0), (m += 1);
                  }
                } else (l[m].ind = m), (l[m].extra = 0), (m += 1);
              if (((t.l = l), (x = x < g ? g : x), y.push(g), t.sz))
                (t.boxWidth = t.sz[0]), (t.justifyOffset = 0);
              else
                switch (((t.boxWidth = x), t.j)) {
                  case 1:
                    t.justifyOffset = -t.boxWidth;
                    break;
                  case 2:
                    t.justifyOffset = -t.boxWidth / 2;
                    break;
                  default:
                    t.justifyOffset = 0;
                }
              t.lineWidths = y;
              var F,
                I,
                G = p.a;
              n = G.length;
              var R,
                L,
                O = [];
              for (s = 0; s < n; s += 1) {
                for (
                  (F = G[s]).a.sc && (t.strokeColorAnim = !0),
                    F.a.sw && (t.strokeWidthAnim = !0),
                    (F.a.fc || F.a.fh || F.a.fs || F.a.fb) &&
                      (t.fillColorAnim = !0),
                    L = 0,
                    R = F.s.b,
                    e = 0;
                  e < i;
                  e += 1
                )
                  ((I = l[e]).anIndexes[s] = L),
                    ((1 == R && "" !== I.val) ||
                      (2 == R && "" !== I.val && " " !== I.val) ||
                      (3 == R && (I.n || " " == I.val || e == i - 1)) ||
                      (4 == R && (I.n || e == i - 1))) &&
                      (1 === F.s.rn && O.push(L), (L += 1));
                p.a[s].s.totalChars = L;
                var N,
                  z = -1;
                if (1 === F.s.rn)
                  for (e = 0; e < i; e += 1)
                    z != (I = l[e]).anIndexes[s] &&
                      ((z = I.anIndexes[s]),
                      (N = O.splice(
                        Math.floor(Math.random() * O.length),
                        1
                      )[0])),
                      (I.anIndexes[s] = N);
              }
              (t.yOffset = t.finalLineHeight || 1.2 * t.finalSize),
                (t.ls = t.ls || 0),
                (t.ascent = (v.ascent * t.finalSize) / 100);
            }),
            (TextProperty.prototype.updateDocumentData = function (t, e) {
              e = void 0 === e ? this.keysIndex : e;
              var i = this.copyData({}, this.data.d.k[e].s);
              (i = this.copyData(i, t)),
                (this.data.d.k[e].s = i),
                this.recalculate(e),
                this.elem.addDynamicProperty(this);
            }),
            (TextProperty.prototype.recalculate = function (t) {
              var e = this.data.d.k[t].s;
              (e.__complete = !1),
                (this.keysIndex = 0),
                (this._isFirstFrame = !0),
                this.getValue(e);
            }),
            (TextProperty.prototype.canResizeFont = function (t) {
              (this.canResize = t),
                this.recalculate(this.keysIndex),
                this.elem.addDynamicProperty(this);
            }),
            (TextProperty.prototype.setMinimumFontSize = function (t) {
              (this.minimumFontSize = Math.floor(t) || 1),
                this.recalculate(this.keysIndex),
                this.elem.addDynamicProperty(this);
            });
          var TextSelectorProp = (function () {
              var t = Math.max,
                e = Math.min,
                i = Math.floor;
              function r(t, e) {
                (this._currentTextLength = -1),
                  (this.k = !1),
                  (this.data = e),
                  (this.elem = t),
                  (this.comp = t.comp),
                  (this.finalS = 0),
                  (this.finalE = 0),
                  this.initDynamicPropertyContainer(t),
                  (this.s = PropertyFactory.getProp(
                    t,
                    e.s || { k: 0 },
                    0,
                    0,
                    this
                  )),
                  (this.e =
                    "e" in e
                      ? PropertyFactory.getProp(t, e.e, 0, 0, this)
                      : { v: 100 }),
                  (this.o = PropertyFactory.getProp(
                    t,
                    e.o || { k: 0 },
                    0,
                    0,
                    this
                  )),
                  (this.xe = PropertyFactory.getProp(
                    t,
                    e.xe || { k: 0 },
                    0,
                    0,
                    this
                  )),
                  (this.ne = PropertyFactory.getProp(
                    t,
                    e.ne || { k: 0 },
                    0,
                    0,
                    this
                  )),
                  (this.a = PropertyFactory.getProp(t, e.a, 0, 0.01, this)),
                  this.dynamicProperties.length || this.getValue();
              }
              return (
                (r.prototype = {
                  getMult: function (r) {
                    this._currentTextLength !==
                      this.elem.textProperty.currentData.l.length &&
                      this.getValue();
                    var a = BezierFactory.getBezierEasing(
                        this.ne.v / 100,
                        0,
                        1 - this.xe.v / 100,
                        1
                      ).get,
                      s = 0,
                      n = this.finalS,
                      o = this.finalE,
                      h = this.data.sh;
                    if (2 == h)
                      s = a(
                        (s =
                          o === n
                            ? o <= r
                              ? 1
                              : 0
                            : t(0, e(0.5 / (o - n) + (r - n) / (o - n), 1)))
                      );
                    else if (3 == h)
                      s = a(
                        (s =
                          o === n
                            ? o <= r
                              ? 0
                              : 1
                            : 1 - t(0, e(0.5 / (o - n) + (r - n) / (o - n), 1)))
                      );
                    else if (4 == h)
                      o === n
                        ? (s = 0)
                        : (s = t(0, e(0.5 / (o - n) + (r - n) / (o - n), 1))) <
                          0.5
                        ? (s *= 2)
                        : (s = 1 - 2 * (s - 0.5)),
                        (s = a(s));
                    else if (5 == h) {
                      if (o === n) s = 0;
                      else {
                        var p = o - n,
                          l = -p / 2 + (r = e(t(0, r + 0.5 - n), o - n)),
                          m = p / 2;
                        s = Math.sqrt(1 - (l * l) / (m * m));
                      }
                      s = a(s);
                    } else
                      s =
                        6 == h
                          ? a(
                              (s =
                                o === n
                                  ? 0
                                  : ((r = e(t(0, r + 0.5 - n), o - n)),
                                    (1 +
                                      Math.cos(
                                        Math.PI + (2 * Math.PI * r) / (o - n)
                                      )) /
                                      2))
                            )
                          : (r >= i(n) &&
                              (s = r - n < 0 ? 1 - (n - r) : t(0, e(o - r, 1))),
                            a(s));
                    return s * this.a.v;
                  },
                  getValue: function (t) {
                    this.iterateDynamicProperties(),
                      (this._mdf = t || this._mdf),
                      (this._currentTextLength =
                        this.elem.textProperty.currentData.l.length || 0),
                      t &&
                        2 === this.data.r &&
                        (this.e.v = this._currentTextLength);
                    var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                      i = this.o.v / e,
                      r = this.s.v / e + i,
                      a = this.e.v / e + i;
                    if (a < r) {
                      var s = r;
                      (r = a), (a = s);
                    }
                    (this.finalS = r), (this.finalE = a);
                  },
                }),
                extendPrototype([DynamicPropertyContainer], r),
                {
                  getTextSelectorProp: function (t, e, i) {
                    return new r(t, e, i);
                  },
                }
              );
            })(),
            pool_factory = function (t, e, i, r) {
              var a = 0,
                s = t,
                n = createSizedArray(s);
              return {
                newElement: function () {
                  return a ? n[(a -= 1)] : e();
                },
                release: function (t) {
                  a === s && ((n = pooling.double(n)), (s *= 2)),
                    i && i(t),
                    (n[a] = t),
                    (a += 1);
                },
              };
            },
            pooling = {
              double: function (t) {
                return t.concat(createSizedArray(t.length));
              },
            },
            point_pool = pool_factory(8, function () {
              return createTypedArray("float32", 2);
            }),
            shape_pool =
              ((zA = pool_factory(
                4,
                function () {
                  return new ShapePath();
                },
                function (t) {
                  var e,
                    i = t._length;
                  for (e = 0; e < i; e += 1)
                    point_pool.release(t.v[e]),
                      point_pool.release(t.i[e]),
                      point_pool.release(t.o[e]),
                      (t.v[e] = null),
                      (t.i[e] = null),
                      (t.o[e] = null);
                  (t._length = 0), (t.c = !1);
                }
              )),
              (zA.clone = function (t) {
                var e,
                  i = zA.newElement(),
                  r = void 0 === t._length ? t.v.length : t._length;
                for (i.setLength(r), i.c = t.c, e = 0; e < r; e += 1)
                  i.setTripleAt(
                    t.v[e][0],
                    t.v[e][1],
                    t.o[e][0],
                    t.o[e][1],
                    t.i[e][0],
                    t.i[e][1],
                    e
                  );
                return i;
              }),
              zA),
            zA,
            shapeCollection_pool =
              ((IA = {
                newShapeCollection: function () {
                  return JA ? LA[(JA -= 1)] : new ShapeCollection();
                },
                release: function (t) {
                  var e,
                    i = t._length;
                  for (e = 0; e < i; e += 1) shape_pool.release(t.shapes[e]);
                  (t._length = 0),
                    JA === KA && ((LA = pooling.double(LA)), (KA *= 2)),
                    (LA[JA] = t),
                    (JA += 1);
                },
              }),
              (JA = 0),
              (KA = 4),
              (LA = createSizedArray(KA)),
              IA),
            IA,
            JA,
            KA,
            LA,
            segments_length_pool = pool_factory(
              8,
              function () {
                return { lengths: [], totalLength: 0 };
              },
              function (t) {
                var e,
                  i = t.lengths.length;
                for (e = 0; e < i; e += 1)
                  bezier_length_pool.release(t.lengths[e]);
                t.lengths.length = 0;
              }
            ),
            bezier_length_pool = pool_factory(8, function () {
              return {
                addedLength: 0,
                percents: createTypedArray("float32", defaultCurveSegments),
                lengths: createTypedArray("float32", defaultCurveSegments),
              };
            });
          function BaseRenderer() {}
          function SVGRenderer(t, e) {
            (this.animationItem = t),
              (this.layers = null),
              (this.renderedFrame = -1),
              (this.svgElement = createNS("svg"));
            var i = "";
            if (e && e.title) {
              var r = createNS("title"),
                a = createElementID();
              r.setAttribute("id", a),
                (r.textContent = e.title),
                this.svgElement.appendChild(r),
                (i += a);
            }
            if (e && e.description) {
              var s = createNS("desc"),
                n = createElementID();
              s.setAttribute("id", n),
                (s.textContent = e.description),
                this.svgElement.appendChild(s),
                (i += " " + n);
            }
            i && this.svgElement.setAttribute("aria-labelledby", i);
            var o = createNS("defs");
            this.svgElement.appendChild(o);
            var h = createNS("g");
            this.svgElement.appendChild(h),
              (this.layerElement = h),
              (this.renderConfig = {
                preserveAspectRatio:
                  (e && e.preserveAspectRatio) || "xMidYMid meet",
                imagePreserveAspectRatio:
                  (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
                progressiveLoad: (e && e.progressiveLoad) || !1,
                hideOnTransparent: !e || !1 !== e.hideOnTransparent,
                viewBoxOnly: (e && e.viewBoxOnly) || !1,
                viewBoxSize: (e && e.viewBoxSize) || !1,
                className: (e && e.className) || "",
              }),
              (this.globalData = {
                _mdf: !1,
                frameNum: -1,
                defs: o,
                renderConfig: this.renderConfig,
              }),
              (this.elements = []),
              (this.pendingElements = []),
              (this.destroyed = !1),
              (this.rendererType = "svg");
          }
          function CanvasRenderer(t, e) {
            (this.animationItem = t),
              (this.renderConfig = {
                clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                context: (e && e.context) || null,
                progressiveLoad: (e && e.progressiveLoad) || !1,
                preserveAspectRatio:
                  (e && e.preserveAspectRatio) || "xMidYMid meet",
                imagePreserveAspectRatio:
                  (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
                className: (e && e.className) || "",
              }),
              (this.renderConfig.dpr = (e && e.dpr) || 1),
              this.animationItem.wrapper &&
                (this.renderConfig.dpr =
                  (e && e.dpr) || window.devicePixelRatio || 1),
              (this.renderedFrame = -1),
              (this.globalData = {
                frameNum: -1,
                _mdf: !1,
                renderConfig: this.renderConfig,
                currentGlobalAlpha: -1,
              }),
              (this.contextData = new CVContextData()),
              (this.elements = []),
              (this.pendingElements = []),
              (this.transformMat = new Matrix()),
              (this.completeLayers = !1),
              (this.rendererType = "canvas");
          }
          function HybridRenderer(t, e) {
            (this.animationItem = t),
              (this.layers = null),
              (this.renderedFrame = -1),
              (this.renderConfig = {
                className: (e && e.className) || "",
                imagePreserveAspectRatio:
                  (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
                hideOnTransparent: !e || !1 !== e.hideOnTransparent,
              }),
              (this.globalData = {
                _mdf: !1,
                frameNum: -1,
                renderConfig: this.renderConfig,
              }),
              (this.pendingElements = []),
              (this.elements = []),
              (this.threeDElements = []),
              (this.destroyed = !1),
              (this.camera = null),
              (this.supports3d = !0),
              (this.rendererType = "html");
          }
          function MaskElement(t, e, i) {
            (this.data = t),
              (this.element = e),
              (this.globalData = i),
              (this.storedData = []),
              (this.masksProperties = this.data.masksProperties || []),
              (this.maskElement = null);
            var r,
              a = this.globalData.defs,
              s = this.masksProperties ? this.masksProperties.length : 0;
            (this.viewData = createSizedArray(s)), (this.solidPath = "");
            var n,
              o,
              h,
              p,
              l,
              m,
              c,
              f = this.masksProperties,
              d = 0,
              u = [],
              y = createElementID(),
              g = "clipPath",
              x = "clip-path";
            for (r = 0; r < s; r++)
              if (
                ((("a" !== f[r].mode && "n" !== f[r].mode) ||
                  f[r].inv ||
                  100 !== f[r].o.k ||
                  f[r].o.x) &&
                  (x = g = "mask"),
                ("s" != f[r].mode && "i" != f[r].mode) || 0 !== d
                  ? (p = null)
                  : ((p = createNS("rect")).setAttribute("fill", "#ffffff"),
                    p.setAttribute("width", this.element.comp.data.w || 0),
                    p.setAttribute("height", this.element.comp.data.h || 0),
                    u.push(p)),
                (n = createNS("path")),
                "n" != f[r].mode)
              ) {
                var v;
                if (
                  ((d += 1),
                  n.setAttribute(
                    "fill",
                    "s" === f[r].mode ? "#000000" : "#ffffff"
                  ),
                  n.setAttribute("clip-rule", "nonzero"),
                  0 !== f[r].x.k
                    ? ((x = g = "mask"),
                      (c = PropertyFactory.getProp(
                        this.element,
                        f[r].x,
                        0,
                        null,
                        this.element
                      )),
                      (v = createElementID()),
                      (l = createNS("filter")).setAttribute("id", v),
                      (m = createNS("feMorphology")).setAttribute(
                        "operator",
                        "erode"
                      ),
                      m.setAttribute("in", "SourceGraphic"),
                      m.setAttribute("radius", "0"),
                      l.appendChild(m),
                      a.appendChild(l),
                      n.setAttribute(
                        "stroke",
                        "s" === f[r].mode ? "#000000" : "#ffffff"
                      ))
                    : (c = m = null),
                  (this.storedData[r] = {
                    elem: n,
                    x: c,
                    expan: m,
                    lastPath: "",
                    lastOperator: "",
                    filterId: v,
                    lastRadius: 0,
                  }),
                  "i" == f[r].mode)
                ) {
                  h = u.length;
                  var k = createNS("g");
                  for (o = 0; o < h; o += 1) k.appendChild(u[o]);
                  var b = createNS("mask");
                  b.setAttribute("mask-type", "alpha"),
                    b.setAttribute("id", y + "_" + d),
                    b.appendChild(n),
                    a.appendChild(b),
                    k.setAttribute(
                      "mask",
                      "url(" + locationHref + "#" + y + "_" + d + ")"
                    ),
                    (u.length = 0),
                    u.push(k);
                } else u.push(n);
                f[r].inv &&
                  !this.solidPath &&
                  (this.solidPath = this.createLayerSolidPath()),
                  (this.viewData[r] = {
                    elem: n,
                    lastPath: "",
                    op: PropertyFactory.getProp(
                      this.element,
                      f[r].o,
                      0,
                      0.01,
                      this.element
                    ),
                    prop: ShapePropertyFactory.getShapeProp(
                      this.element,
                      f[r],
                      3
                    ),
                    invRect: p,
                  }),
                  this.viewData[r].prop.k ||
                    this.drawPath(
                      f[r],
                      this.viewData[r].prop.v,
                      this.viewData[r]
                    );
              } else
                (this.viewData[r] = {
                  op: PropertyFactory.getProp(
                    this.element,
                    f[r].o,
                    0,
                    0.01,
                    this.element
                  ),
                  prop: ShapePropertyFactory.getShapeProp(
                    this.element,
                    f[r],
                    3
                  ),
                  elem: n,
                  lastPath: "",
                }),
                  a.appendChild(n);
            for (
              this.maskElement = createNS(g), s = u.length, r = 0;
              r < s;
              r += 1
            )
              this.maskElement.appendChild(u[r]);
            0 < d &&
              (this.maskElement.setAttribute("id", y),
              this.element.maskedElement.setAttribute(
                x,
                "url(" + locationHref + "#" + y + ")"
              ),
              a.appendChild(this.maskElement)),
              this.viewData.length && this.element.addRenderableComponent(this);
          }
          function HierarchyElement() {}
          function FrameElement() {}
          function TransformElement() {}
          function RenderableElement() {}
          function RenderableDOMElement() {}
          function ProcessedElement(t, e) {
            (this.elem = t), (this.pos = e);
          }
          function SVGStyleData(t, e) {
            (this.data = t),
              (this.type = t.ty),
              (this.d = ""),
              (this.lvl = e),
              (this._mdf = !1),
              (this.closed = !0 === t.hd),
              (this.pElem = createNS("path")),
              (this.msElem = null);
          }
          function SVGShapeData(t, e, i) {
            (this.caches = []),
              (this.styles = []),
              (this.transformers = t),
              (this.lStr = ""),
              (this.sh = i),
              (this.lvl = e),
              (this._isAnimated = !!i.k);
            for (var r = 0, a = t.length; r < a; ) {
              if (t[r].mProps.dynamicProperties.length) {
                this._isAnimated = !0;
                break;
              }
              r += 1;
            }
          }
          function SVGTransformData(t, e, i) {
            (this.transform = { mProps: t, op: e, container: i }),
              (this.elements = []),
              (this._isAnimated =
                this.transform.mProps.dynamicProperties.length ||
                this.transform.op.effectsSequence.length);
          }
          function SVGStrokeStyleData(t, e, i) {
            this.initDynamicPropertyContainer(t),
              (this.getValue = this.iterateDynamicProperties),
              (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
              (this.w = PropertyFactory.getProp(t, e.w, 0, null, this)),
              (this.d = new DashProperty(t, e.d || {}, "svg", this)),
              (this.c = PropertyFactory.getProp(t, e.c, 1, 255, this)),
              (this.style = i),
              (this._isAnimated = !!this._isAnimated);
          }
          function SVGFillStyleData(t, e, i) {
            this.initDynamicPropertyContainer(t),
              (this.getValue = this.iterateDynamicProperties),
              (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
              (this.c = PropertyFactory.getProp(t, e.c, 1, 255, this)),
              (this.style = i);
          }
          function SVGGradientFillStyleData(t, e, i) {
            this.initDynamicPropertyContainer(t),
              (this.getValue = this.iterateDynamicProperties),
              this.initGradientData(t, e, i);
          }
          function SVGGradientStrokeStyleData(t, e, i) {
            this.initDynamicPropertyContainer(t),
              (this.getValue = this.iterateDynamicProperties),
              (this.w = PropertyFactory.getProp(t, e.w, 0, null, this)),
              (this.d = new DashProperty(t, e.d || {}, "svg", this)),
              this.initGradientData(t, e, i),
              (this._isAnimated = !!this._isAnimated);
          }
          function ShapeGroupData() {
            (this.it = []), (this.prevViewData = []), (this.gr = createNS("g"));
          }
          (BaseRenderer.prototype.checkLayers = function (t) {
            var e,
              i,
              r = this.layers.length;
            for (this.completeLayers = !0, e = r - 1; 0 <= e; e--)
              this.elements[e] ||
                ((i = this.layers[e]).ip - i.st <= t - this.layers[e].st &&
                  i.op - i.st > t - this.layers[e].st &&
                  this.buildItem(e)),
                (this.completeLayers =
                  !!this.elements[e] && this.completeLayers);
            this.checkPendingElements();
          }),
            (BaseRenderer.prototype.createItem = function (t) {
              switch (t.ty) {
                case 2:
                  return this.createImage(t);
                case 0:
                  return this.createComp(t);
                case 1:
                  return this.createSolid(t);
                case 3:
                  return this.createNull(t);
                case 4:
                  return this.createShape(t);
                case 5:
                  return this.createText(t);
                case 13:
                  return this.createCamera(t);
              }
              return this.createNull(t);
            }),
            (BaseRenderer.prototype.createCamera = function () {
              throw new Error(
                "You're using a 3d camera. Try the html renderer."
              );
            }),
            (BaseRenderer.prototype.buildAllItems = function () {
              var t,
                e = this.layers.length;
              for (t = 0; t < e; t += 1) this.buildItem(t);
              this.checkPendingElements();
            }),
            (BaseRenderer.prototype.includeLayers = function (t) {
              this.completeLayers = !1;
              var e,
                i,
                r = t.length,
                a = this.layers.length;
              for (e = 0; e < r; e += 1)
                for (i = 0; i < a; ) {
                  if (this.layers[i].id == t[e].id) {
                    this.layers[i] = t[e];
                    break;
                  }
                  i += 1;
                }
            }),
            (BaseRenderer.prototype.setProjectInterface = function (t) {
              this.globalData.projectInterface = t;
            }),
            (BaseRenderer.prototype.initItems = function () {
              this.globalData.progressiveLoad || this.buildAllItems();
            }),
            (BaseRenderer.prototype.buildElementParenting = function (t, e, i) {
              for (
                var r = this.elements, a = this.layers, s = 0, n = a.length;
                s < n;

              )
                a[s].ind == e &&
                  (r[s] && !0 !== r[s]
                    ? (i.push(r[s]),
                      r[s].setAsParent(),
                      void 0 !== a[s].parent
                        ? this.buildElementParenting(t, a[s].parent, i)
                        : t.setHierarchy(i))
                    : (this.buildItem(s), this.addPendingElement(t))),
                  (s += 1);
            }),
            (BaseRenderer.prototype.addPendingElement = function (t) {
              this.pendingElements.push(t);
            }),
            (BaseRenderer.prototype.searchExtraCompositions = function (t) {
              var e,
                i = t.length;
              for (e = 0; e < i; e += 1)
                if (t[e].xt) {
                  var r = this.createComp(t[e]);
                  r.initExpressions(),
                    this.globalData.projectInterface.registerComposition(r);
                }
            }),
            (BaseRenderer.prototype.setupGlobalData = function (t, e) {
              (this.globalData.fontManager = new FontManager()),
                this.globalData.fontManager.addChars(t.chars),
                this.globalData.fontManager.addFonts(t.fonts, e),
                (this.globalData.getAssetData = this.animationItem.getAssetData.bind(
                  this.animationItem
                )),
                (this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(
                  this.animationItem
                )),
                (this.globalData.imageLoader = this.animationItem.imagePreloader),
                (this.globalData.frameId = 0),
                (this.globalData.frameRate = t.fr),
                (this.globalData.nm = t.nm),
                (this.globalData.compSize = { w: t.w, h: t.h });
            }),
            extendPrototype([BaseRenderer], SVGRenderer),
            (SVGRenderer.prototype.createNull = function (t) {
              return new NullElement(t, this.globalData, this);
            }),
            (SVGRenderer.prototype.createShape = function (t) {
              return new SVGShapeElement(t, this.globalData, this);
            }),
            (SVGRenderer.prototype.createText = function (t) {
              return new SVGTextElement(t, this.globalData, this);
            }),
            (SVGRenderer.prototype.createImage = function (t) {
              return new IImageElement(t, this.globalData, this);
            }),
            (SVGRenderer.prototype.createComp = function (t) {
              return new SVGCompElement(t, this.globalData, this);
            }),
            (SVGRenderer.prototype.createSolid = function (t) {
              return new ISolidElement(t, this.globalData, this);
            }),
            (SVGRenderer.prototype.configAnimation = function (t) {
              this.svgElement.setAttribute(
                "xmlns",
                "http://www.w3.org/2000/svg"
              ),
                this.renderConfig.viewBoxSize
                  ? this.svgElement.setAttribute(
                      "viewBox",
                      this.renderConfig.viewBoxSize
                    )
                  : this.svgElement.setAttribute(
                      "viewBox",
                      "0 0 " + t.w + " " + t.h
                    ),
                this.renderConfig.viewBoxOnly ||
                  (this.svgElement.setAttribute("width", t.w),
                  this.svgElement.setAttribute("height", t.h),
                  (this.svgElement.style.width = "100%"),
                  (this.svgElement.style.height = "100%"),
                  (this.svgElement.style.transform = "translate3d(0,0,0)")),
                this.renderConfig.className &&
                  this.svgElement.setAttribute(
                    "class",
                    this.renderConfig.className
                  ),
                this.svgElement.setAttribute(
                  "preserveAspectRatio",
                  this.renderConfig.preserveAspectRatio
                ),
                this.animationItem.wrapper.appendChild(this.svgElement);
              var e = this.globalData.defs;
              this.setupGlobalData(t, e),
                (this.globalData.progressiveLoad = this.renderConfig.progressiveLoad),
                (this.data = t);
              var i = createNS("clipPath"),
                r = createNS("rect");
              r.setAttribute("width", t.w),
                r.setAttribute("height", t.h),
                r.setAttribute("x", 0),
                r.setAttribute("y", 0);
              var a = createElementID();
              i.setAttribute("id", a),
                i.appendChild(r),
                this.layerElement.setAttribute(
                  "clip-path",
                  "url(" + locationHref + "#" + a + ")"
                ),
                e.appendChild(i),
                (this.layers = t.layers),
                (this.elements = createSizedArray(t.layers.length));
            }),
            (SVGRenderer.prototype.destroy = function () {
              (this.animationItem.wrapper.innerHTML = ""),
                (this.layerElement = null),
                (this.globalData.defs = null);
              var t,
                e = this.layers ? this.layers.length : 0;
              for (t = 0; t < e; t++)
                this.elements[t] && this.elements[t].destroy();
              (this.elements.length = 0),
                (this.destroyed = !0),
                (this.animationItem = null);
            }),
            (SVGRenderer.prototype.updateContainerSize = function () {}),
            (SVGRenderer.prototype.buildItem = function (t) {
              var e = this.elements;
              if (!e[t] && 99 != this.layers[t].ty) {
                e[t] = !0;
                var i = this.createItem(this.layers[t]);
                (e[t] = i),
                  expressionsPlugin &&
                    (0 === this.layers[t].ty &&
                      this.globalData.projectInterface.registerComposition(i),
                    i.initExpressions()),
                  this.appendElementInPos(i, t),
                  this.layers[t].tt &&
                    (this.elements[t - 1] && !0 !== this.elements[t - 1]
                      ? i.setMatte(e[t - 1].layerId)
                      : (this.buildItem(t - 1), this.addPendingElement(i)));
              }
            }),
            (SVGRenderer.prototype.checkPendingElements = function () {
              for (; this.pendingElements.length; ) {
                var t = this.pendingElements.pop();
                if ((t.checkParenting(), t.data.tt))
                  for (var e = 0, i = this.elements.length; e < i; ) {
                    if (this.elements[e] === t) {
                      t.setMatte(this.elements[e - 1].layerId);
                      break;
                    }
                    e += 1;
                  }
              }
            }),
            (SVGRenderer.prototype.renderFrame = function (t) {
              if (this.renderedFrame !== t && !this.destroyed) {
                null === t
                  ? (t = this.renderedFrame)
                  : (this.renderedFrame = t),
                  (this.globalData.frameNum = t),
                  (this.globalData.frameId += 1),
                  (this.globalData.projectInterface.currentFrame = t),
                  (this.globalData._mdf = !1);
                var e,
                  i = this.layers.length;
                for (
                  this.completeLayers || this.checkLayers(t), e = i - 1;
                  0 <= e;
                  e--
                )
                  (this.completeLayers || this.elements[e]) &&
                    this.elements[e].prepareFrame(t - this.layers[e].st);
                if (this.globalData._mdf)
                  for (e = 0; e < i; e += 1)
                    (this.completeLayers || this.elements[e]) &&
                      this.elements[e].renderFrame();
              }
            }),
            (SVGRenderer.prototype.appendElementInPos = function (t, e) {
              var i = t.getBaseElement();
              if (i) {
                for (var r, a = 0; a < e; )
                  this.elements[a] &&
                    !0 !== this.elements[a] &&
                    this.elements[a].getBaseElement() &&
                    (r = this.elements[a].getBaseElement()),
                    (a += 1);
                r
                  ? this.layerElement.insertBefore(i, r)
                  : this.layerElement.appendChild(i);
              }
            }),
            (SVGRenderer.prototype.hide = function () {
              this.layerElement.style.display = "none";
            }),
            (SVGRenderer.prototype.show = function () {
              this.layerElement.style.display = "block";
            }),
            extendPrototype([BaseRenderer], CanvasRenderer),
            (CanvasRenderer.prototype.createShape = function (t) {
              return new CVShapeElement(t, this.globalData, this);
            }),
            (CanvasRenderer.prototype.createText = function (t) {
              return new CVTextElement(t, this.globalData, this);
            }),
            (CanvasRenderer.prototype.createImage = function (t) {
              return new CVImageElement(t, this.globalData, this);
            }),
            (CanvasRenderer.prototype.createComp = function (t) {
              return new CVCompElement(t, this.globalData, this);
            }),
            (CanvasRenderer.prototype.createSolid = function (t) {
              return new CVSolidElement(t, this.globalData, this);
            }),
            (CanvasRenderer.prototype.createNull =
              SVGRenderer.prototype.createNull),
            (CanvasRenderer.prototype.ctxTransform = function (t) {
              if (
                1 !== t[0] ||
                0 !== t[1] ||
                0 !== t[4] ||
                1 !== t[5] ||
                0 !== t[12] ||
                0 !== t[13]
              )
                if (this.renderConfig.clearCanvas) {
                  this.transformMat.cloneFromProps(t);
                  var e = this.contextData.cTr.props;
                  this.transformMat.transform(
                    e[0],
                    e[1],
                    e[2],
                    e[3],
                    e[4],
                    e[5],
                    e[6],
                    e[7],
                    e[8],
                    e[9],
                    e[10],
                    e[11],
                    e[12],
                    e[13],
                    e[14],
                    e[15]
                  ),
                    this.contextData.cTr.cloneFromProps(
                      this.transformMat.props
                    );
                  var i = this.contextData.cTr.props;
                  this.canvasContext.setTransform(
                    i[0],
                    i[1],
                    i[4],
                    i[5],
                    i[12],
                    i[13]
                  );
                } else
                  this.canvasContext.transform(
                    t[0],
                    t[1],
                    t[4],
                    t[5],
                    t[12],
                    t[13]
                  );
            }),
            (CanvasRenderer.prototype.ctxOpacity = function (t) {
              if (!this.renderConfig.clearCanvas)
                return (
                  (this.canvasContext.globalAlpha *= t < 0 ? 0 : t),
                  void (this.globalData.currentGlobalAlpha = this.contextData.cO)
                );
              (this.contextData.cO *= t < 0 ? 0 : t),
                this.globalData.currentGlobalAlpha !== this.contextData.cO &&
                  ((this.canvasContext.globalAlpha = this.contextData.cO),
                  (this.globalData.currentGlobalAlpha = this.contextData.cO));
            }),
            (CanvasRenderer.prototype.reset = function () {
              this.renderConfig.clearCanvas
                ? this.contextData.reset()
                : this.canvasContext.restore();
            }),
            (CanvasRenderer.prototype.save = function (t) {
              if (this.renderConfig.clearCanvas) {
                t && this.canvasContext.save();
                var e = this.contextData.cTr.props;
                this.contextData._length <= this.contextData.cArrPos &&
                  this.contextData.duplicate();
                var i,
                  r = this.contextData.saved[this.contextData.cArrPos];
                for (i = 0; i < 16; i += 1) r[i] = e[i];
                (this.contextData.savedOp[
                  this.contextData.cArrPos
                ] = this.contextData.cO),
                  (this.contextData.cArrPos += 1);
              } else this.canvasContext.save();
            }),
            (CanvasRenderer.prototype.restore = function (t) {
              if (this.renderConfig.clearCanvas) {
                t &&
                  (this.canvasContext.restore(),
                  (this.globalData.blendMode = "source-over")),
                  (this.contextData.cArrPos -= 1);
                var e,
                  i = this.contextData.saved[this.contextData.cArrPos],
                  r = this.contextData.cTr.props;
                for (e = 0; e < 16; e += 1) r[e] = i[e];
                this.canvasContext.setTransform(
                  i[0],
                  i[1],
                  i[4],
                  i[5],
                  i[12],
                  i[13]
                ),
                  (i = this.contextData.savedOp[this.contextData.cArrPos]),
                  (this.contextData.cO = i),
                  this.globalData.currentGlobalAlpha !== i &&
                    ((this.canvasContext.globalAlpha = i),
                    (this.globalData.currentGlobalAlpha = i));
              } else this.canvasContext.restore();
            }),
            (CanvasRenderer.prototype.configAnimation = function (t) {
              this.animationItem.wrapper
                ? ((this.animationItem.container = createTag("canvas")),
                  (this.animationItem.container.style.width = "100%"),
                  (this.animationItem.container.style.height = "100%"),
                  (this.animationItem.container.style.transformOrigin = this.animationItem.container.style.mozTransformOrigin = this.animationItem.container.style.webkitTransformOrigin = this.animationItem.container.style[
                    "-webkit-transform"
                  ] = "0px 0px 0px"),
                  this.animationItem.wrapper.appendChild(
                    this.animationItem.container
                  ),
                  (this.canvasContext = this.animationItem.container.getContext(
                    "2d"
                  )),
                  this.renderConfig.className &&
                    this.animationItem.container.setAttribute(
                      "class",
                      this.renderConfig.className
                    ))
                : (this.canvasContext = this.renderConfig.context),
                (this.data = t),
                (this.layers = t.layers),
                (this.transformCanvas = {
                  w: t.w,
                  h: t.h,
                  sx: 0,
                  sy: 0,
                  tx: 0,
                  ty: 0,
                }),
                this.setupGlobalData(t, document.body),
                (this.globalData.canvasContext = this.canvasContext),
                ((this.globalData.renderer = this).globalData.isDashed = !1),
                (this.globalData.progressiveLoad = this.renderConfig.progressiveLoad),
                (this.globalData.transformCanvas = this.transformCanvas),
                (this.elements = createSizedArray(t.layers.length)),
                this.updateContainerSize();
            }),
            (CanvasRenderer.prototype.updateContainerSize = function () {
              var t, e, i, r;
              if (
                (this.reset(),
                this.animationItem.wrapper && this.animationItem.container
                  ? ((t = this.animationItem.wrapper.offsetWidth),
                    (e = this.animationItem.wrapper.offsetHeight),
                    this.animationItem.container.setAttribute(
                      "width",
                      t * this.renderConfig.dpr
                    ),
                    this.animationItem.container.setAttribute(
                      "height",
                      e * this.renderConfig.dpr
                    ))
                  : ((t =
                      this.canvasContext.canvas.width * this.renderConfig.dpr),
                    (e =
                      this.canvasContext.canvas.height *
                      this.renderConfig.dpr)),
                -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") ||
                  -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice"))
              ) {
                var a = this.renderConfig.preserveAspectRatio.split(" "),
                  s = a[1] || "meet",
                  n = a[0] || "xMidYMid",
                  o = n.substr(0, 4),
                  h = n.substr(4);
                (i = t / e),
                  (r = this.transformCanvas.w / this.transformCanvas.h),
                  (this.transformCanvas.sy =
                    (i < r && "meet" === s) || (r < i && "slice" === s)
                      ? ((this.transformCanvas.sx =
                          t / (this.transformCanvas.w / this.renderConfig.dpr)),
                        t / (this.transformCanvas.w / this.renderConfig.dpr))
                      : ((this.transformCanvas.sx =
                          e / (this.transformCanvas.h / this.renderConfig.dpr)),
                        e / (this.transformCanvas.h / this.renderConfig.dpr))),
                  (this.transformCanvas.tx =
                    "xMid" === o &&
                    ((r < i && "meet" === s) || (i < r && "slice" === s))
                      ? ((t -
                          this.transformCanvas.w *
                            (e / this.transformCanvas.h)) /
                          2) *
                        this.renderConfig.dpr
                      : "xMax" === o &&
                        ((r < i && "meet" === s) || (i < r && "slice" === s))
                      ? (t -
                          this.transformCanvas.w *
                            (e / this.transformCanvas.h)) *
                        this.renderConfig.dpr
                      : 0),
                  (this.transformCanvas.ty =
                    "YMid" === h &&
                    ((i < r && "meet" === s) || (r < i && "slice" === s))
                      ? ((e -
                          this.transformCanvas.h *
                            (t / this.transformCanvas.w)) /
                          2) *
                        this.renderConfig.dpr
                      : "YMax" === h &&
                        ((i < r && "meet" === s) || (r < i && "slice" === s))
                      ? (e -
                          this.transformCanvas.h *
                            (t / this.transformCanvas.w)) *
                        this.renderConfig.dpr
                      : 0);
              } else
                "none" == this.renderConfig.preserveAspectRatio
                  ? ((this.transformCanvas.sx =
                      t / (this.transformCanvas.w / this.renderConfig.dpr)),
                    (this.transformCanvas.sy =
                      e / (this.transformCanvas.h / this.renderConfig.dpr)))
                  : ((this.transformCanvas.sx = this.renderConfig.dpr),
                    (this.transformCanvas.sy = this.renderConfig.dpr)),
                  (this.transformCanvas.tx = 0),
                  (this.transformCanvas.ty = 0);
              (this.transformCanvas.props = [
                this.transformCanvas.sx,
                0,
                0,
                0,
                0,
                this.transformCanvas.sy,
                0,
                0,
                0,
                0,
                1,
                0,
                this.transformCanvas.tx,
                this.transformCanvas.ty,
                0,
                1,
              ]),
                this.ctxTransform(this.transformCanvas.props),
                this.canvasContext.beginPath(),
                this.canvasContext.rect(
                  0,
                  0,
                  this.transformCanvas.w,
                  this.transformCanvas.h
                ),
                this.canvasContext.closePath(),
                this.canvasContext.clip(),
                this.renderFrame(this.renderedFrame, !0);
            }),
            (CanvasRenderer.prototype.destroy = function () {
              var t;
              for (
                this.renderConfig.clearCanvas &&
                  (this.animationItem.wrapper.innerHTML = ""),
                  t = (this.layers ? this.layers.length : 0) - 1;
                0 <= t;
                t -= 1
              )
                this.elements[t] && this.elements[t].destroy();
              (this.elements.length = 0),
                (this.globalData.canvasContext = null),
                (this.animationItem.container = null),
                (this.destroyed = !0);
            }),
            (CanvasRenderer.prototype.renderFrame = function (t, e) {
              if (
                (this.renderedFrame !== t ||
                  !0 !== this.renderConfig.clearCanvas ||
                  e) &&
                !this.destroyed &&
                -1 !== t
              ) {
                (this.renderedFrame = t),
                  (this.globalData.frameNum =
                    t - this.animationItem._isFirstFrame),
                  (this.globalData.frameId += 1),
                  (this.globalData._mdf = !this.renderConfig.clearCanvas || e),
                  (this.globalData.projectInterface.currentFrame = t);
                var i,
                  r = this.layers.length;
                for (
                  this.completeLayers || this.checkLayers(t), i = 0;
                  i < r;
                  i++
                )
                  (this.completeLayers || this.elements[i]) &&
                    this.elements[i].prepareFrame(t - this.layers[i].st);
                if (this.globalData._mdf) {
                  for (
                    !0 === this.renderConfig.clearCanvas
                      ? this.canvasContext.clearRect(
                          0,
                          0,
                          this.transformCanvas.w,
                          this.transformCanvas.h
                        )
                      : this.save(),
                      i = r - 1;
                    0 <= i;
                    i -= 1
                  )
                    (this.completeLayers || this.elements[i]) &&
                      this.elements[i].renderFrame();
                  !0 !== this.renderConfig.clearCanvas && this.restore();
                }
              }
            }),
            (CanvasRenderer.prototype.buildItem = function (t) {
              var e = this.elements;
              if (!e[t] && 99 != this.layers[t].ty) {
                var i = this.createItem(this.layers[t], this, this.globalData);
                (e[t] = i).initExpressions();
              }
            }),
            (CanvasRenderer.prototype.checkPendingElements = function () {
              for (; this.pendingElements.length; )
                this.pendingElements.pop().checkParenting();
            }),
            (CanvasRenderer.prototype.hide = function () {
              this.animationItem.container.style.display = "none";
            }),
            (CanvasRenderer.prototype.show = function () {
              this.animationItem.container.style.display = "block";
            }),
            extendPrototype([BaseRenderer], HybridRenderer),
            (HybridRenderer.prototype.buildItem =
              SVGRenderer.prototype.buildItem),
            (HybridRenderer.prototype.checkPendingElements = function () {
              for (; this.pendingElements.length; )
                this.pendingElements.pop().checkParenting();
            }),
            (HybridRenderer.prototype.appendElementInPos = function (t, e) {
              var i = t.getBaseElement();
              if (i) {
                var r = this.layers[e];
                if (r.ddd && this.supports3d) this.addTo3dContainer(i, e);
                else if (this.threeDElements) this.addTo3dContainer(i, e);
                else {
                  for (var a, s, n = 0; n < e; )
                    this.elements[n] &&
                      !0 !== this.elements[n] &&
                      this.elements[n].getBaseElement &&
                      ((s = this.elements[n]),
                      (a =
                        (this.layers[n].ddd
                          ? this.getThreeDContainerByPos(n)
                          : s.getBaseElement()) || a)),
                      (n += 1);
                  a
                    ? (r.ddd && this.supports3d) ||
                      this.layerElement.insertBefore(i, a)
                    : (r.ddd && this.supports3d) ||
                      this.layerElement.appendChild(i);
                }
              }
            }),
            (HybridRenderer.prototype.createShape = function (t) {
              return this.supports3d
                ? new HShapeElement(t, this.globalData, this)
                : new SVGShapeElement(t, this.globalData, this);
            }),
            (HybridRenderer.prototype.createText = function (t) {
              return this.supports3d
                ? new HTextElement(t, this.globalData, this)
                : new SVGTextElement(t, this.globalData, this);
            }),
            (HybridRenderer.prototype.createCamera = function (t) {
              return (
                (this.camera = new HCameraElement(t, this.globalData, this)),
                this.camera
              );
            }),
            (HybridRenderer.prototype.createImage = function (t) {
              return this.supports3d
                ? new HImageElement(t, this.globalData, this)
                : new IImageElement(t, this.globalData, this);
            }),
            (HybridRenderer.prototype.createComp = function (t) {
              return this.supports3d
                ? new HCompElement(t, this.globalData, this)
                : new SVGCompElement(t, this.globalData, this);
            }),
            (HybridRenderer.prototype.createSolid = function (t) {
              return this.supports3d
                ? new HSolidElement(t, this.globalData, this)
                : new ISolidElement(t, this.globalData, this);
            }),
            (HybridRenderer.prototype.createNull =
              SVGRenderer.prototype.createNull),
            (HybridRenderer.prototype.getThreeDContainerByPos = function (t) {
              for (var e = 0, i = this.threeDElements.length; e < i; ) {
                if (
                  this.threeDElements[e].startPos <= t &&
                  this.threeDElements[e].endPos >= t
                )
                  return this.threeDElements[e].perspectiveElem;
                e += 1;
              }
            }),
            (HybridRenderer.prototype.createThreeDContainer = function (t, e) {
              var i = createTag("div");
              styleDiv(i);
              var r = createTag("div");
              styleDiv(r),
                "3d" === e &&
                  ((i.style.width = this.globalData.compSize.w + "px"),
                  (i.style.height = this.globalData.compSize.h + "px"),
                  (i.style.transformOrigin = i.style.mozTransformOrigin = i.style.webkitTransformOrigin =
                    "50% 50%"),
                  (r.style.transform = r.style.webkitTransform =
                    "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)")),
                i.appendChild(r);
              var a = {
                container: r,
                perspectiveElem: i,
                startPos: t,
                endPos: t,
                type: e,
              };
              return this.threeDElements.push(a), a;
            }),
            (HybridRenderer.prototype.build3dContainers = function () {
              var t,
                e,
                i = this.layers.length,
                r = "";
              for (t = 0; t < i; t += 1)
                this.layers[t].ddd && 3 !== this.layers[t].ty
                  ? "3d" !== r &&
                    ((r = "3d"), (e = this.createThreeDContainer(t, "3d")))
                  : "2d" !== r &&
                    ((r = "2d"), (e = this.createThreeDContainer(t, "2d"))),
                  (e.endPos = Math.max(e.endPos, t));
              for (t = (i = this.threeDElements.length) - 1; 0 <= t; t--)
                this.resizerElem.appendChild(
                  this.threeDElements[t].perspectiveElem
                );
            }),
            (HybridRenderer.prototype.addTo3dContainer = function (t, e) {
              for (var i = 0, r = this.threeDElements.length; i < r; ) {
                if (e <= this.threeDElements[i].endPos) {
                  for (var a, s = this.threeDElements[i].startPos; s < e; )
                    this.elements[s] &&
                      this.elements[s].getBaseElement &&
                      (a = this.elements[s].getBaseElement()),
                      (s += 1);
                  a
                    ? this.threeDElements[i].container.insertBefore(t, a)
                    : this.threeDElements[i].container.appendChild(t);
                  break;
                }
                i += 1;
              }
            }),
            (HybridRenderer.prototype.configAnimation = function (t) {
              var e = createTag("div"),
                i = this.animationItem.wrapper;
              (e.style.width = t.w + "px"),
                (e.style.height = t.h + "px"),
                styleDiv((this.resizerElem = e)),
                (e.style.transformStyle = e.style.webkitTransformStyle = e.style.mozTransformStyle =
                  "flat"),
                this.renderConfig.className &&
                  e.setAttribute("class", this.renderConfig.className),
                i.appendChild(e),
                (e.style.overflow = "hidden");
              var r = createNS("svg");
              r.setAttribute("width", "1"),
                r.setAttribute("height", "1"),
                styleDiv(r),
                this.resizerElem.appendChild(r);
              var a = createNS("defs");
              r.appendChild(a),
                (this.data = t),
                this.setupGlobalData(t, r),
                (this.globalData.defs = a),
                (this.layers = t.layers),
                (this.layerElement = this.resizerElem),
                this.build3dContainers(),
                this.updateContainerSize();
            }),
            (HybridRenderer.prototype.destroy = function () {
              (this.animationItem.wrapper.innerHTML = ""),
                (this.animationItem.container = null),
                (this.globalData.defs = null);
              var t,
                e = this.layers ? this.layers.length : 0;
              for (t = 0; t < e; t++) this.elements[t].destroy();
              (this.elements.length = 0),
                (this.destroyed = !0),
                (this.animationItem = null);
            }),
            (HybridRenderer.prototype.updateContainerSize = function () {
              var t,
                e,
                i,
                r,
                a = this.animationItem.wrapper.offsetWidth,
                s = this.animationItem.wrapper.offsetHeight;
              (r =
                a / s < this.globalData.compSize.w / this.globalData.compSize.h
                  ? ((t = a / this.globalData.compSize.w),
                    (e = a / this.globalData.compSize.w),
                    (i = 0),
                    (s -
                      this.globalData.compSize.h *
                        (a / this.globalData.compSize.w)) /
                      2)
                  : ((t = s / this.globalData.compSize.h),
                    (e = s / this.globalData.compSize.h),
                    (i =
                      (a -
                        this.globalData.compSize.w *
                          (s / this.globalData.compSize.h)) /
                      2),
                    0)),
                (this.resizerElem.style.transform = this.resizerElem.style.webkitTransform =
                  "matrix3d(" +
                  t +
                  ",0,0,0,0," +
                  e +
                  ",0,0,0,0,1,0," +
                  i +
                  "," +
                  r +
                  ",0,1)");
            }),
            (HybridRenderer.prototype.renderFrame =
              SVGRenderer.prototype.renderFrame),
            (HybridRenderer.prototype.hide = function () {
              this.resizerElem.style.display = "none";
            }),
            (HybridRenderer.prototype.show = function () {
              this.resizerElem.style.display = "block";
            }),
            (HybridRenderer.prototype.initItems = function () {
              if ((this.buildAllItems(), this.camera)) this.camera.setup();
              else {
                var t,
                  e = this.globalData.compSize.w,
                  i = this.globalData.compSize.h,
                  r = this.threeDElements.length;
                for (t = 0; t < r; t += 1)
                  this.threeDElements[
                    t
                  ].perspectiveElem.style.perspective = this.threeDElements[
                    t
                  ].perspectiveElem.style.webkitPerspective =
                    Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)) + "px";
              }
            }),
            (HybridRenderer.prototype.searchExtraCompositions = function (t) {
              var e,
                i = t.length,
                r = createTag("div");
              for (e = 0; e < i; e += 1)
                if (t[e].xt) {
                  var a = this.createComp(t[e], r, this.globalData.comp, null);
                  a.initExpressions(),
                    this.globalData.projectInterface.registerComposition(a);
                }
            }),
            (MaskElement.prototype.getMaskProperty = function (t) {
              return this.viewData[t].prop;
            }),
            (MaskElement.prototype.renderFrame = function (t) {
              var e,
                i = this.element.finalTransform.mat,
                r = this.masksProperties.length;
              for (e = 0; e < r; e++)
                if (
                  ((this.viewData[e].prop._mdf || t) &&
                    this.drawPath(
                      this.masksProperties[e],
                      this.viewData[e].prop.v,
                      this.viewData[e]
                    ),
                  (this.viewData[e].op._mdf || t) &&
                    this.viewData[e].elem.setAttribute(
                      "fill-opacity",
                      this.viewData[e].op.v
                    ),
                  "n" !== this.masksProperties[e].mode &&
                    (this.viewData[e].invRect &&
                      (this.element.finalTransform.mProp._mdf || t) &&
                      (this.viewData[e].invRect.setAttribute("x", -i.props[12]),
                      this.viewData[e].invRect.setAttribute("y", -i.props[13])),
                    this.storedData[e].x && (this.storedData[e].x._mdf || t)))
                ) {
                  var a = this.storedData[e].expan;
                  this.storedData[e].x.v < 0
                    ? ("erode" !== this.storedData[e].lastOperator &&
                        ((this.storedData[e].lastOperator = "erode"),
                        this.storedData[e].elem.setAttribute(
                          "filter",
                          "url(" +
                            locationHref +
                            "#" +
                            this.storedData[e].filterId +
                            ")"
                        )),
                      a.setAttribute("radius", -this.storedData[e].x.v))
                    : ("dilate" !== this.storedData[e].lastOperator &&
                        ((this.storedData[e].lastOperator = "dilate"),
                        this.storedData[e].elem.setAttribute("filter", null)),
                      this.storedData[e].elem.setAttribute(
                        "stroke-width",
                        2 * this.storedData[e].x.v
                      ));
                }
            }),
            (MaskElement.prototype.getMaskelement = function () {
              return this.maskElement;
            }),
            (MaskElement.prototype.createLayerSolidPath = function () {
              var t = "M0,0 ";
              return (
                (t += " h" + this.globalData.compSize.w),
                (t += " v" + this.globalData.compSize.h),
                (t += " h-" + this.globalData.compSize.w) +
                  " v-" +
                  this.globalData.compSize.h +
                  " "
              );
            }),
            (MaskElement.prototype.drawPath = function (t, e, i) {
              var r,
                a,
                s = " M" + e.v[0][0] + "," + e.v[0][1];
              for (a = e._length, r = 1; r < a; r += 1)
                s +=
                  " C" +
                  e.o[r - 1][0] +
                  "," +
                  e.o[r - 1][1] +
                  " " +
                  e.i[r][0] +
                  "," +
                  e.i[r][1] +
                  " " +
                  e.v[r][0] +
                  "," +
                  e.v[r][1];
              if (
                (e.c &&
                  1 < a &&
                  (s +=
                    " C" +
                    e.o[r - 1][0] +
                    "," +
                    e.o[r - 1][1] +
                    " " +
                    e.i[0][0] +
                    "," +
                    e.i[0][1] +
                    " " +
                    e.v[0][0] +
                    "," +
                    e.v[0][1]),
                i.lastPath !== s)
              ) {
                var n = "";
                i.elem &&
                  (e.c && (n = t.inv ? this.solidPath + s : s),
                  i.elem.setAttribute("d", n)),
                  (i.lastPath = s);
              }
            }),
            (MaskElement.prototype.destroy = function () {
              (this.element = null),
                (this.globalData = null),
                (this.maskElement = null),
                (this.data = null),
                (this.masksProperties = null);
            }),
            (HierarchyElement.prototype = {
              initHierarchy: function () {
                (this.hierarchy = []),
                  (this._isParent = !1),
                  this.checkParenting();
              },
              setHierarchy: function (t) {
                this.hierarchy = t;
              },
              setAsParent: function () {
                this._isParent = !0;
              },
              checkParenting: function () {
                void 0 !== this.data.parent &&
                  this.comp.buildElementParenting(this, this.data.parent, []);
              },
            }),
            (FrameElement.prototype = {
              initFrame: function () {
                (this._isFirstFrame = !1),
                  (this.dynamicProperties = []),
                  (this._mdf = !1);
              },
              prepareProperties: function (t, e) {
                var i,
                  r = this.dynamicProperties.length;
                for (i = 0; i < r; i += 1)
                  (e ||
                    (this._isParent &&
                      "transform" === this.dynamicProperties[i].propType)) &&
                    (this.dynamicProperties[i].getValue(),
                    this.dynamicProperties[i]._mdf &&
                      ((this.globalData._mdf = !0), (this._mdf = !0)));
              },
              addDynamicProperty: function (t) {
                -1 === this.dynamicProperties.indexOf(t) &&
                  this.dynamicProperties.push(t);
              },
            }),
            (TransformElement.prototype = {
              initTransform: function () {
                (this.finalTransform = {
                  mProp: this.data.ks
                    ? TransformPropertyFactory.getTransformProperty(
                        this,
                        this.data.ks,
                        this
                      )
                    : { o: 0 },
                  _matMdf: !1,
                  _opMdf: !1,
                  mat: new Matrix(),
                }),
                  this.data.ao && (this.finalTransform.mProp.autoOriented = !0),
                  this.data.ty;
              },
              renderTransform: function () {
                if (
                  ((this.finalTransform._opMdf =
                    this.finalTransform.mProp.o._mdf || this._isFirstFrame),
                  (this.finalTransform._matMdf =
                    this.finalTransform.mProp._mdf || this._isFirstFrame),
                  this.hierarchy)
                ) {
                  var t,
                    e = this.finalTransform.mat,
                    i = 0,
                    r = this.hierarchy.length;
                  if (!this.finalTransform._matMdf)
                    for (; i < r; ) {
                      if (this.hierarchy[i].finalTransform.mProp._mdf) {
                        this.finalTransform._matMdf = !0;
                        break;
                      }
                      i += 1;
                    }
                  if (this.finalTransform._matMdf)
                    for (
                      t = this.finalTransform.mProp.v.props,
                        e.cloneFromProps(t),
                        i = 0;
                      i < r;
                      i += 1
                    )
                      (t = this.hierarchy[i].finalTransform.mProp.v.props),
                        e.transform(
                          t[0],
                          t[1],
                          t[2],
                          t[3],
                          t[4],
                          t[5],
                          t[6],
                          t[7],
                          t[8],
                          t[9],
                          t[10],
                          t[11],
                          t[12],
                          t[13],
                          t[14],
                          t[15]
                        );
                }
              },
              globalToLocal: function (t) {
                var e = [];
                e.push(this.finalTransform);
                for (var i = !0, r = this.comp; i; )
                  r.finalTransform
                    ? (r.data.hasMask && e.splice(0, 0, r.finalTransform),
                      (r = r.comp))
                    : (i = !1);
                var a,
                  s,
                  n = e.length;
                for (a = 0; a < n; a += 1)
                  (s = e[a].mat.applyToPointArray(0, 0, 0)),
                    (t = [t[0] - s[0], t[1] - s[1], 0]);
                return t;
              },
              mHelper: new Matrix(),
            }),
            (RenderableElement.prototype = {
              initRenderable: function () {
                (this.isInRange = !1),
                  (this.hidden = !1),
                  (this.isTransparent = !1),
                  (this.renderableComponents = []);
              },
              addRenderableComponent: function (t) {
                -1 === this.renderableComponents.indexOf(t) &&
                  this.renderableComponents.push(t);
              },
              removeRenderableComponent: function (t) {
                -1 !== this.renderableComponents.indexOf(t) &&
                  this.renderableComponents.splice(
                    this.renderableComponents.indexOf(t),
                    1
                  );
              },
              prepareRenderableFrame: function (t) {
                this.checkLayerLimits(t);
              },
              checkTransparency: function () {
                this.finalTransform.mProp.o.v <= 0
                  ? !this.isTransparent &&
                    this.globalData.renderConfig.hideOnTransparent &&
                    ((this.isTransparent = !0), this.hide())
                  : this.isTransparent &&
                    ((this.isTransparent = !1), this.show());
              },
              checkLayerLimits: function (t) {
                this.data.ip - this.data.st <= t &&
                this.data.op - this.data.st > t
                  ? !0 !== this.isInRange &&
                    ((this.globalData._mdf = !0),
                    (this._mdf = !0),
                    (this.isInRange = !0),
                    this.show())
                  : !1 !== this.isInRange &&
                    ((this.globalData._mdf = !0),
                    (this.isInRange = !1),
                    this.hide());
              },
              renderRenderable: function () {
                var t,
                  e = this.renderableComponents.length;
                for (t = 0; t < e; t += 1)
                  this.renderableComponents[t].renderFrame(this._isFirstFrame);
              },
              sourceRectAtTime: function () {
                return { top: 0, left: 0, width: 100, height: 100 };
              },
              getLayerSize: function () {
                return 5 === this.data.ty
                  ? {
                      w: this.data.textData.width,
                      h: this.data.textData.height,
                    }
                  : { w: this.data.width, h: this.data.height };
              },
            }),
            extendPrototype(
              [
                RenderableElement,
                createProxyFunction({
                  initElement: function (t, e, i) {
                    this.initFrame(),
                      this.initBaseData(t, e, i),
                      this.initTransform(t, e, i),
                      this.initHierarchy(),
                      this.initRenderable(),
                      this.initRendererElement(),
                      this.createContainerElements(),
                      this.createRenderableComponents(),
                      this.createContent(),
                      this.hide();
                  },
                  hide: function () {
                    this.hidden ||
                      (this.isInRange && !this.isTransparent) ||
                      (((this.baseElement || this.layerElement).style.display =
                        "none"),
                      (this.hidden = !0));
                  },
                  show: function () {
                    this.isInRange &&
                      !this.isTransparent &&
                      (this.data.hd ||
                        ((this.baseElement || this.layerElement).style.display =
                          "block"),
                      (this.hidden = !1),
                      (this._isFirstFrame = !0));
                  },
                  renderFrame: function () {
                    this.data.hd ||
                      this.hidden ||
                      (this.renderTransform(),
                      this.renderRenderable(),
                      this.renderElement(),
                      this.renderInnerContent(),
                      this._isFirstFrame && (this._isFirstFrame = !1));
                  },
                  renderInnerContent: function () {},
                  prepareFrame: function (t) {
                    (this._mdf = !1),
                      this.prepareRenderableFrame(t),
                      this.prepareProperties(t, this.isInRange),
                      this.checkTransparency();
                  },
                  destroy: function () {
                    (this.innerElem = null), this.destroyBaseElement();
                  },
                }),
              ],
              RenderableDOMElement
            ),
            (SVGStyleData.prototype.reset = function () {
              (this.d = ""), (this._mdf = !1);
            }),
            (SVGShapeData.prototype.setAsAnimated = function () {
              this._isAnimated = !0;
            }),
            extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData),
            extendPrototype([DynamicPropertyContainer], SVGFillStyleData),
            (SVGGradientFillStyleData.prototype.initGradientData = function (
              t,
              e,
              i
            ) {
              (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
                (this.s = PropertyFactory.getProp(t, e.s, 1, null, this)),
                (this.e = PropertyFactory.getProp(t, e.e, 1, null, this)),
                (this.h = PropertyFactory.getProp(
                  t,
                  e.h || { k: 0 },
                  0,
                  0.01,
                  this
                )),
                (this.a = PropertyFactory.getProp(
                  t,
                  e.a || { k: 0 },
                  0,
                  degToRads,
                  this
                )),
                (this.g = new GradientProperty(t, e.g, this)),
                (this.style = i),
                (this.stops = []),
                this.setGradientData(i.pElem, e),
                this.setGradientOpacity(e, i),
                (this._isAnimated = !!this._isAnimated);
            }),
            (SVGGradientFillStyleData.prototype.setGradientData = function (
              t,
              e
            ) {
              var i = createElementID(),
                r = createNS(1 === e.t ? "linearGradient" : "radialGradient");
              r.setAttribute("id", i),
                r.setAttribute("spreadMethod", "pad"),
                r.setAttribute("gradientUnits", "userSpaceOnUse");
              var a,
                s,
                n,
                o = [];
              for (n = 4 * e.g.p, s = 0; s < n; s += 4)
                (a = createNS("stop")), r.appendChild(a), o.push(a);
              t.setAttribute(
                "gf" === e.ty ? "fill" : "stroke",
                "url(" + locationHref + "#" + i + ")"
              ),
                (this.gf = r),
                (this.cst = o);
            }),
            (SVGGradientFillStyleData.prototype.setGradientOpacity = function (
              t,
              e
            ) {
              if (this.g._hasOpacity && !this.g._collapsable) {
                var i,
                  r,
                  a,
                  s = createNS("mask"),
                  n = createNS("path");
                s.appendChild(n);
                var o = createElementID(),
                  h = createElementID();
                s.setAttribute("id", h);
                var p = createNS(
                  1 === t.t ? "linearGradient" : "radialGradient"
                );
                p.setAttribute("id", o),
                  p.setAttribute("spreadMethod", "pad"),
                  p.setAttribute("gradientUnits", "userSpaceOnUse"),
                  (a = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length);
                var l = this.stops;
                for (r = 4 * t.g.p; r < a; r += 2)
                  (i = createNS("stop")).setAttribute(
                    "stop-color",
                    "rgb(255,255,255)"
                  ),
                    p.appendChild(i),
                    l.push(i);
                n.setAttribute(
                  "gf" === t.ty ? "fill" : "stroke",
                  "url(" + locationHref + "#" + o + ")"
                ),
                  (this.of = p),
                  (this.ms = s),
                  (this.ost = l),
                  (this.maskId = h),
                  (e.msElem = n);
              }
            }),
            extendPrototype(
              [DynamicPropertyContainer],
              SVGGradientFillStyleData
            ),
            extendPrototype(
              [SVGGradientFillStyleData, DynamicPropertyContainer],
              SVGGradientStrokeStyleData
            );
          var SVGElementsRenderer = (function () {
            var t = new Matrix(),
              e = new Matrix();
            function i(t, e, i) {
              (i || e.transform.op._mdf) &&
                e.transform.container.setAttribute("opacity", e.transform.op.v),
                (i || e.transform.mProps._mdf) &&
                  e.transform.container.setAttribute(
                    "transform",
                    e.transform.mProps.v.to2dCSS()
                  );
            }
            function r(i, r, a) {
              var s,
                n,
                o,
                h,
                p,
                l,
                m,
                c,
                f,
                d,
                u,
                y = r.styles.length,
                g = r.lvl;
              for (l = 0; l < y; l += 1) {
                if (((h = r.sh._mdf || a), r.styles[l].lvl < g)) {
                  for (
                    c = e.reset(),
                      d = g - r.styles[l].lvl,
                      u = r.transformers.length - 1;
                    !h && 0 < d;

                  )
                    (h = r.transformers[u].mProps._mdf || h), d--, u--;
                  if (h)
                    for (
                      d = g - r.styles[l].lvl, u = r.transformers.length - 1;
                      0 < d;

                    )
                      (f = r.transformers[u].mProps.v.props),
                        c.transform(
                          f[0],
                          f[1],
                          f[2],
                          f[3],
                          f[4],
                          f[5],
                          f[6],
                          f[7],
                          f[8],
                          f[9],
                          f[10],
                          f[11],
                          f[12],
                          f[13],
                          f[14],
                          f[15]
                        ),
                        d--,
                        u--;
                } else c = t;
                if (((n = (m = r.sh.paths)._length), h)) {
                  for (o = "", s = 0; s < n; s += 1)
                    (p = m.shapes[s]) &&
                      p._length &&
                      (o += buildShapeString(p, p._length, p.c, c));
                  r.caches[l] = o;
                } else o = r.caches[l];
                (r.styles[l].d += !0 === i.hd ? "" : o),
                  (r.styles[l]._mdf = h || r.styles[l]._mdf);
              }
            }
            function a(t, e, i) {
              var r = e.style;
              (e.c._mdf || i) &&
                r.pElem.setAttribute(
                  "fill",
                  "rgb(" +
                    bm_floor(e.c.v[0]) +
                    "," +
                    bm_floor(e.c.v[1]) +
                    "," +
                    bm_floor(e.c.v[2]) +
                    ")"
                ),
                (e.o._mdf || i) && r.pElem.setAttribute("fill-opacity", e.o.v);
            }
            function s(t, e, i) {
              n(t, e, i), o(t, e, i);
            }
            function n(t, e, i) {
              var r,
                a,
                s,
                n,
                o,
                h = e.gf,
                p = e.g._hasOpacity,
                l = e.s.v,
                m = e.e.v;
              if (e.o._mdf || i) {
                var c = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                e.style.pElem.setAttribute(c, e.o.v);
              }
              if (e.s._mdf || i) {
                var f = 1 === t.t ? "x1" : "cx",
                  d = "x1" === f ? "y1" : "cy";
                h.setAttribute(f, l[0]),
                  h.setAttribute(d, l[1]),
                  p &&
                    !e.g._collapsable &&
                    (e.of.setAttribute(f, l[0]), e.of.setAttribute(d, l[1]));
              }
              if (e.g._cmdf || i) {
                r = e.cst;
                var u = e.g.c;
                for (s = r.length, a = 0; a < s; a += 1)
                  (n = r[a]).setAttribute("offset", u[4 * a] + "%"),
                    n.setAttribute(
                      "stop-color",
                      "rgb(" +
                        u[4 * a + 1] +
                        "," +
                        u[4 * a + 2] +
                        "," +
                        u[4 * a + 3] +
                        ")"
                    );
              }
              if (p && (e.g._omdf || i)) {
                var y = e.g.o;
                for (
                  s = (r = e.g._collapsable ? e.cst : e.ost).length, a = 0;
                  a < s;
                  a += 1
                )
                  (n = r[a]),
                    e.g._collapsable ||
                      n.setAttribute("offset", y[2 * a] + "%"),
                    n.setAttribute("stop-opacity", y[2 * a + 1]);
              }
              if (1 === t.t)
                (e.e._mdf || i) &&
                  (h.setAttribute("x2", m[0]),
                  h.setAttribute("y2", m[1]),
                  p &&
                    !e.g._collapsable &&
                    (e.of.setAttribute("x2", m[0]),
                    e.of.setAttribute("y2", m[1])));
              else if (
                ((e.s._mdf || e.e._mdf || i) &&
                  ((o = Math.sqrt(
                    Math.pow(l[0] - m[0], 2) + Math.pow(l[1] - m[1], 2)
                  )),
                  h.setAttribute("r", o),
                  p && !e.g._collapsable && e.of.setAttribute("r", o)),
                e.e._mdf || e.h._mdf || e.a._mdf || i)
              ) {
                o ||
                  (o = Math.sqrt(
                    Math.pow(l[0] - m[0], 2) + Math.pow(l[1] - m[1], 2)
                  ));
                var g = Math.atan2(m[1] - l[1], m[0] - l[0]),
                  x = o * (1 <= e.h.v ? 0.99 : e.h.v <= -1 ? -0.99 : e.h.v),
                  v = Math.cos(g + e.a.v) * x + l[0],
                  k = Math.sin(g + e.a.v) * x + l[1];
                h.setAttribute("fx", v),
                  h.setAttribute("fy", k),
                  p &&
                    !e.g._collapsable &&
                    (e.of.setAttribute("fx", v), e.of.setAttribute("fy", k));
              }
            }
            function o(t, e, i) {
              var r = e.style,
                a = e.d;
              a &&
                (a._mdf || i) &&
                a.dashStr &&
                (r.pElem.setAttribute("stroke-dasharray", a.dashStr),
                r.pElem.setAttribute("stroke-dashoffset", a.dashoffset[0])),
                e.c &&
                  (e.c._mdf || i) &&
                  r.pElem.setAttribute(
                    "stroke",
                    "rgb(" +
                      bm_floor(e.c.v[0]) +
                      "," +
                      bm_floor(e.c.v[1]) +
                      "," +
                      bm_floor(e.c.v[2]) +
                      ")"
                  ),
                (e.o._mdf || i) &&
                  r.pElem.setAttribute("stroke-opacity", e.o.v),
                (e.w._mdf || i) &&
                  (r.pElem.setAttribute("stroke-width", e.w.v),
                  r.msElem && r.msElem.setAttribute("stroke-width", e.w.v));
            }
            return {
              createRenderFunction: function (t) {
                switch ((t.ty, t.ty)) {
                  case "fl":
                    return a;
                  case "gf":
                    return n;
                  case "gs":
                    return s;
                  case "st":
                    return o;
                  case "sh":
                  case "el":
                  case "rc":
                  case "sr":
                    return r;
                  case "tr":
                    return i;
                }
              },
            };
          })();
          function ShapeTransformManager() {
            (this.sequences = {}),
              (this.sequenceList = []),
              (this.transform_key_count = 0);
          }
          function CVShapeData(t, e, i, r) {
            (this.styledShapes = []), (this.tr = [0, 0, 0, 0, 0, 0]);
            var a = 4;
            "rc" == e.ty
              ? (a = 5)
              : "el" == e.ty
              ? (a = 6)
              : "sr" == e.ty && (a = 7),
              (this.sh = ShapePropertyFactory.getShapeProp(t, e, a, t));
            var s,
              n,
              o = i.length;
            for (s = 0; s < o; s += 1)
              i[s].closed ||
                ((n = {
                  transforms: r.addTransformSequence(i[s].transforms),
                  trNodes: [],
                }),
                this.styledShapes.push(n),
                i[s].elements.push(n));
          }
          function BaseElement() {}
          function NullElement(t, e, i) {
            this.initFrame(),
              this.initBaseData(t, e, i),
              this.initFrame(),
              this.initTransform(t, e, i),
              this.initHierarchy();
          }
          function SVGBaseElement() {}
          function IShapeElement() {}
          function ITextElement() {}
          function ICompElement() {}
          function IImageElement(t, e, i) {
            (this.assetData = e.getAssetData(t.refId)),
              this.initElement(t, e, i),
              (this.sourceRect = {
                top: 0,
                left: 0,
                width: this.assetData.w,
                height: this.assetData.h,
              });
          }
          function ISolidElement(t, e, i) {
            this.initElement(t, e, i);
          }
          function SVGCompElement(t, e, i) {
            (this.layers = t.layers),
              (this.supports3d = !0),
              (this.completeLayers = !1),
              (this.pendingElements = []),
              (this.elements = this.layers
                ? createSizedArray(this.layers.length)
                : []),
              this.initElement(t, e, i),
              (this.tm = t.tm
                ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
                : { _placeholder: !0 });
          }
          function SVGTextElement(t, e, i) {
            (this.textSpans = []),
              (this.renderType = "svg"),
              this.initElement(t, e, i);
          }
          function SVGShapeElement(t, e, i) {
            (this.shapes = []),
              (this.shapesData = t.shapes),
              (this.stylesList = []),
              (this.shapeModifiers = []),
              (this.itemsData = []),
              (this.processedElements = []),
              (this.animatedContents = []),
              this.initElement(t, e, i),
              (this.prevViewData = []);
          }
          function SVGTintFilter(t, e) {
            this.filterManager = e;
            var i = createNS("feColorMatrix");
            if (
              (i.setAttribute("type", "matrix"),
              i.setAttribute("color-interpolation-filters", "linearRGB"),
              i.setAttribute(
                "values",
                "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"
              ),
              i.setAttribute("result", "f1"),
              t.appendChild(i),
              (i = createNS("feColorMatrix")).setAttribute("type", "matrix"),
              i.setAttribute("color-interpolation-filters", "sRGB"),
              i.setAttribute(
                "values",
                "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
              ),
              i.setAttribute("result", "f2"),
              t.appendChild(i),
              (this.matrixFilter = i),
              100 !== e.effectElements[2].p.v || e.effectElements[2].p.k)
            ) {
              var r,
                a = createNS("feMerge");
              t.appendChild(a),
                (r = createNS("feMergeNode")).setAttribute(
                  "in",
                  "SourceGraphic"
                ),
                a.appendChild(r),
                (r = createNS("feMergeNode")).setAttribute("in", "f2"),
                a.appendChild(r);
            }
          }
          function SVGFillFilter(t, e) {
            this.filterManager = e;
            var i = createNS("feColorMatrix");
            i.setAttribute("type", "matrix"),
              i.setAttribute("color-interpolation-filters", "sRGB"),
              i.setAttribute(
                "values",
                "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
              ),
              t.appendChild(i),
              (this.matrixFilter = i);
          }
          function SVGGaussianBlurEffect(t, e) {
            t.setAttribute("x", "-100%"),
              t.setAttribute("y", "-100%"),
              t.setAttribute("width", "300%"),
              t.setAttribute("height", "300%"),
              (this.filterManager = e);
            var i = createNS("feGaussianBlur");
            t.appendChild(i), (this.feGaussianBlur = i);
          }
          function SVGStrokeEffect(t, e) {
            (this.initialized = !1),
              (this.filterManager = e),
              (this.elem = t),
              (this.paths = []);
          }
          function SVGTritoneFilter(t, e) {
            this.filterManager = e;
            var i = createNS("feColorMatrix");
            i.setAttribute("type", "matrix"),
              i.setAttribute("color-interpolation-filters", "linearRGB"),
              i.setAttribute(
                "values",
                "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"
              ),
              i.setAttribute("result", "f1"),
              t.appendChild(i);
            var r = createNS("feComponentTransfer");
            r.setAttribute("color-interpolation-filters", "sRGB"),
              t.appendChild(r),
              (this.matrixFilter = r);
            var a = createNS("feFuncR");
            a.setAttribute("type", "table"),
              r.appendChild(a),
              (this.feFuncR = a);
            var s = createNS("feFuncG");
            s.setAttribute("type", "table"),
              r.appendChild(s),
              (this.feFuncG = s);
            var n = createNS("feFuncB");
            n.setAttribute("type", "table"),
              r.appendChild(n),
              (this.feFuncB = n);
          }
          function SVGProLevelsFilter(t, e) {
            this.filterManager = e;
            var i = this.filterManager.effectElements,
              r = createNS("feComponentTransfer");
            (i[10].p.k ||
              0 !== i[10].p.v ||
              i[11].p.k ||
              1 !== i[11].p.v ||
              i[12].p.k ||
              1 !== i[12].p.v ||
              i[13].p.k ||
              0 !== i[13].p.v ||
              i[14].p.k ||
              1 !== i[14].p.v) &&
              (this.feFuncR = this.createFeFunc("feFuncR", r)),
              (i[17].p.k ||
                0 !== i[17].p.v ||
                i[18].p.k ||
                1 !== i[18].p.v ||
                i[19].p.k ||
                1 !== i[19].p.v ||
                i[20].p.k ||
                0 !== i[20].p.v ||
                i[21].p.k ||
                1 !== i[21].p.v) &&
                (this.feFuncG = this.createFeFunc("feFuncG", r)),
              (i[24].p.k ||
                0 !== i[24].p.v ||
                i[25].p.k ||
                1 !== i[25].p.v ||
                i[26].p.k ||
                1 !== i[26].p.v ||
                i[27].p.k ||
                0 !== i[27].p.v ||
                i[28].p.k ||
                1 !== i[28].p.v) &&
                (this.feFuncB = this.createFeFunc("feFuncB", r)),
              (i[31].p.k ||
                0 !== i[31].p.v ||
                i[32].p.k ||
                1 !== i[32].p.v ||
                i[33].p.k ||
                1 !== i[33].p.v ||
                i[34].p.k ||
                0 !== i[34].p.v ||
                i[35].p.k ||
                1 !== i[35].p.v) &&
                (this.feFuncA = this.createFeFunc("feFuncA", r)),
              (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) &&
                (r.setAttribute("color-interpolation-filters", "sRGB"),
                t.appendChild(r),
                (r = createNS("feComponentTransfer"))),
              (i[3].p.k ||
                0 !== i[3].p.v ||
                i[4].p.k ||
                1 !== i[4].p.v ||
                i[5].p.k ||
                1 !== i[5].p.v ||
                i[6].p.k ||
                0 !== i[6].p.v ||
                i[7].p.k ||
                1 !== i[7].p.v) &&
                (r.setAttribute("color-interpolation-filters", "sRGB"),
                t.appendChild(r),
                (this.feFuncRComposed = this.createFeFunc("feFuncR", r)),
                (this.feFuncGComposed = this.createFeFunc("feFuncG", r)),
                (this.feFuncBComposed = this.createFeFunc("feFuncB", r)));
          }
          function SVGDropShadowEffect(t, e) {
            t.setAttribute("x", "-100%"),
              t.setAttribute("y", "-100%"),
              t.setAttribute("width", "400%"),
              t.setAttribute("height", "400%"),
              (this.filterManager = e);
            var i = createNS("feGaussianBlur");
            i.setAttribute("in", "SourceAlpha"),
              i.setAttribute("result", "drop_shadow_1"),
              i.setAttribute("stdDeviation", "0"),
              (this.feGaussianBlur = i),
              t.appendChild(i);
            var r = createNS("feOffset");
            r.setAttribute("dx", "25"),
              r.setAttribute("dy", "0"),
              r.setAttribute("in", "drop_shadow_1"),
              r.setAttribute("result", "drop_shadow_2"),
              (this.feOffset = r),
              t.appendChild(r);
            var a = createNS("feFlood");
            a.setAttribute("flood-color", "#00ff00"),
              a.setAttribute("flood-opacity", "1"),
              a.setAttribute("result", "drop_shadow_3"),
              (this.feFlood = a),
              t.appendChild(a);
            var s = createNS("feComposite");
            s.setAttribute("in", "drop_shadow_3"),
              s.setAttribute("in2", "drop_shadow_2"),
              s.setAttribute("operator", "in"),
              s.setAttribute("result", "drop_shadow_4"),
              t.appendChild(s);
            var n,
              o = createNS("feMerge");
            t.appendChild(o),
              (n = createNS("feMergeNode")),
              o.appendChild(n),
              (n = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"),
              (this.feMergeNode = n),
              (this.feMerge = o),
              (this.originalNodeAdded = !1),
              o.appendChild(n);
          }
          (ShapeTransformManager.prototype = {
            addTransformSequence: function (t) {
              var e,
                i = t.length,
                r = "_";
              for (e = 0; e < i; e += 1) r += t[e].transform.key + "_";
              var a = this.sequences[r];
              return (
                a ||
                  ((a = {
                    transforms: [].concat(t),
                    finalTransform: new Matrix(),
                    _mdf: !1,
                  }),
                  (this.sequences[r] = a),
                  this.sequenceList.push(a)),
                a
              );
            },
            processSequence: function (t, e) {
              for (
                var i, r = 0, a = t.transforms.length, s = e;
                r < a && !e;

              ) {
                if (t.transforms[r].transform.mProps._mdf) {
                  s = !0;
                  break;
                }
                r += 1;
              }
              if (s)
                for (t.finalTransform.reset(), r = a - 1; 0 <= r; r -= 1)
                  (i = t.transforms[r].transform.mProps.v.props),
                    t.finalTransform.transform(
                      i[0],
                      i[1],
                      i[2],
                      i[3],
                      i[4],
                      i[5],
                      i[6],
                      i[7],
                      i[8],
                      i[9],
                      i[10],
                      i[11],
                      i[12],
                      i[13],
                      i[14],
                      i[15]
                    );
              t._mdf = s;
            },
            processSequences: function (t) {
              var e,
                i = this.sequenceList.length;
              for (e = 0; e < i; e += 1)
                this.processSequence(this.sequenceList[e], t);
            },
            getNewKey: function () {
              return "_" + this.transform_key_count++;
            },
          }),
            (CVShapeData.prototype.setAsAnimated =
              SVGShapeData.prototype.setAsAnimated),
            (BaseElement.prototype = {
              checkMasks: function () {
                if (!this.data.hasMask) return !1;
                for (var t = 0, e = this.data.masksProperties.length; t < e; ) {
                  if (
                    "n" !== this.data.masksProperties[t].mode &&
                    !1 !== this.data.masksProperties[t].cl
                  )
                    return !0;
                  t += 1;
                }
                return !1;
              },
              initExpressions: function () {
                (this.layerInterface = LayerExpressionInterface(this)),
                  this.data.hasMask &&
                    this.maskManager &&
                    this.layerInterface.registerMaskInterface(this.maskManager);
                var t = EffectsExpressionInterface.createEffectsInterface(
                  this,
                  this.layerInterface
                );
                this.layerInterface.registerEffectsInterface(t),
                  0 === this.data.ty || this.data.xt
                    ? (this.compInterface = CompExpressionInterface(this))
                    : 4 === this.data.ty
                    ? ((this.layerInterface.shapeInterface = ShapeExpressionInterface(
                        this.shapesData,
                        this.itemsData,
                        this.layerInterface
                      )),
                      (this.layerInterface.content = this.layerInterface.shapeInterface))
                    : 5 === this.data.ty &&
                      ((this.layerInterface.textInterface = TextExpressionInterface(
                        this
                      )),
                      (this.layerInterface.text = this.layerInterface.textInterface));
              },
              setBlendMode: function () {
                var t = getBlendMode(this.data.bm);
                (this.baseElement || this.layerElement).style[
                  "mix-blend-mode"
                ] = t;
              },
              initBaseData: function (t, e, i) {
                (this.globalData = e),
                  (this.comp = i),
                  (this.data = t),
                  (this.layerId = createElementID()),
                  this.data.sr || (this.data.sr = 1),
                  (this.effectsManager = new EffectsManager(
                    this.data,
                    this,
                    this.dynamicProperties
                  ));
              },
              getType: function () {
                return this.type;
              },
              sourceRectAtTime: function () {},
            }),
            (NullElement.prototype.prepareFrame = function (t) {
              this.prepareProperties(t, !0);
            }),
            (NullElement.prototype.renderFrame = function () {}),
            (NullElement.prototype.getBaseElement = function () {
              return null;
            }),
            (NullElement.prototype.destroy = function () {}),
            (NullElement.prototype.sourceRectAtTime = function () {}),
            (NullElement.prototype.hide = function () {}),
            extendPrototype(
              [BaseElement, TransformElement, HierarchyElement, FrameElement],
              NullElement
            ),
            (SVGBaseElement.prototype = {
              initRendererElement: function () {
                this.layerElement = createNS("g");
              },
              createContainerElements: function () {
                (this.matteElement = createNS("g")),
                  (this.transformedElement = this.layerElement),
                  (this.maskedElement = this.layerElement),
                  (this._sizeChanged = !1);
                var t,
                  e,
                  i,
                  r = null;
                if (this.data.td) {
                  if (3 == this.data.td || 1 == this.data.td) {
                    var a = createNS("mask");
                    a.setAttribute("id", this.layerId),
                      a.setAttribute(
                        "mask-type",
                        3 == this.data.td ? "luminance" : "alpha"
                      ),
                      a.appendChild(this.layerElement),
                      (r = a),
                      this.globalData.defs.appendChild(a),
                      featureSupport.maskType ||
                        1 != this.data.td ||
                        (a.setAttribute("mask-type", "luminance"),
                        (t = createElementID()),
                        (e = filtersFactory.createFilter(t)),
                        this.globalData.defs.appendChild(e),
                        e.appendChild(
                          filtersFactory.createAlphaToLuminanceFilter()
                        ),
                        (i = createNS("g")).appendChild(this.layerElement),
                        (r = i),
                        a.appendChild(i),
                        i.setAttribute(
                          "filter",
                          "url(" + locationHref + "#" + t + ")"
                        ));
                  } else if (2 == this.data.td) {
                    var s = createNS("mask");
                    s.setAttribute("id", this.layerId),
                      s.setAttribute("mask-type", "alpha");
                    var n = createNS("g");
                    s.appendChild(n),
                      (t = createElementID()),
                      (e = filtersFactory.createFilter(t));
                    var o = createNS("feComponentTransfer");
                    o.setAttribute("in", "SourceGraphic"), e.appendChild(o);
                    var h = createNS("feFuncA");
                    h.setAttribute("type", "table"),
                      h.setAttribute("tableValues", "1.0 0.0"),
                      o.appendChild(h),
                      this.globalData.defs.appendChild(e);
                    var p = createNS("rect");
                    p.setAttribute("width", this.comp.data.w),
                      p.setAttribute("height", this.comp.data.h),
                      p.setAttribute("x", "0"),
                      p.setAttribute("y", "0"),
                      p.setAttribute("fill", "#ffffff"),
                      p.setAttribute("opacity", "0"),
                      n.setAttribute(
                        "filter",
                        "url(" + locationHref + "#" + t + ")"
                      ),
                      n.appendChild(p),
                      n.appendChild(this.layerElement),
                      (r = n),
                      featureSupport.maskType ||
                        (s.setAttribute("mask-type", "luminance"),
                        e.appendChild(
                          filtersFactory.createAlphaToLuminanceFilter()
                        ),
                        (i = createNS("g")),
                        n.appendChild(p),
                        i.appendChild(this.layerElement),
                        (r = i),
                        n.appendChild(i)),
                      this.globalData.defs.appendChild(s);
                  }
                } else
                  this.data.tt
                    ? (this.matteElement.appendChild(this.layerElement),
                      (r = this.matteElement),
                      (this.baseElement = this.matteElement))
                    : (this.baseElement = this.layerElement);
                if (
                  (this.data.ln &&
                    this.layerElement.setAttribute("id", this.data.ln),
                  this.data.cl &&
                    this.layerElement.setAttribute("class", this.data.cl),
                  0 === this.data.ty && !this.data.hd)
                ) {
                  var l = createNS("clipPath"),
                    m = createNS("path");
                  m.setAttribute(
                    "d",
                    "M0,0 L" +
                      this.data.w +
                      ",0 L" +
                      this.data.w +
                      "," +
                      this.data.h +
                      " L0," +
                      this.data.h +
                      "z"
                  );
                  var c = createElementID();
                  if (
                    (l.setAttribute("id", c),
                    l.appendChild(m),
                    this.globalData.defs.appendChild(l),
                    this.checkMasks())
                  ) {
                    var f = createNS("g");
                    f.setAttribute(
                      "clip-path",
                      "url(" + locationHref + "#" + c + ")"
                    ),
                      f.appendChild(this.layerElement),
                      (this.transformedElement = f),
                      r
                        ? r.appendChild(this.transformedElement)
                        : (this.baseElement = this.transformedElement);
                  } else
                    this.layerElement.setAttribute(
                      "clip-path",
                      "url(" + locationHref + "#" + c + ")"
                    );
                }
                0 !== this.data.bm && this.setBlendMode();
              },
              renderElement: function () {
                this.finalTransform._matMdf &&
                  this.transformedElement.setAttribute(
                    "transform",
                    this.finalTransform.mat.to2dCSS()
                  ),
                  this.finalTransform._opMdf &&
                    this.transformedElement.setAttribute(
                      "opacity",
                      this.finalTransform.mProp.o.v
                    );
              },
              destroyBaseElement: function () {
                (this.layerElement = null),
                  (this.matteElement = null),
                  this.maskManager.destroy();
              },
              getBaseElement: function () {
                return this.data.hd ? null : this.baseElement;
              },
              createRenderableComponents: function () {
                (this.maskManager = new MaskElement(
                  this.data,
                  this,
                  this.globalData
                )),
                  (this.renderableEffectsManager = new SVGEffects(this));
              },
              setMatte: function (t) {
                this.matteElement &&
                  this.matteElement.setAttribute(
                    "mask",
                    "url(" + locationHref + "#" + t + ")"
                  );
              },
            }),
            (IShapeElement.prototype = {
              addShapeToModifiers: function (t) {
                var e,
                  i = this.shapeModifiers.length;
                for (e = 0; e < i; e += 1) this.shapeModifiers[e].addShape(t);
              },
              isShapeInAnimatedModifiers: function (t) {
                for (var e = this.shapeModifiers.length; 0 < e; )
                  if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
                return !1;
              },
              renderModifiers: function () {
                if (this.shapeModifiers.length) {
                  var t,
                    e = this.shapes.length;
                  for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                  for (t = (e = this.shapeModifiers.length) - 1; 0 <= t; t -= 1)
                    this.shapeModifiers[t].processShapes(this._isFirstFrame);
                }
              },
              lcEnum: { 1: "butt", 2: "round", 3: "square" },
              ljEnum: { 1: "miter", 2: "round", 3: "bevel" },
              searchProcessedElement: function (t) {
                for (
                  var e = this.processedElements, i = 0, r = e.length;
                  i < r;

                ) {
                  if (e[i].elem === t) return e[i].pos;
                  i += 1;
                }
                return 0;
              },
              addProcessedElement: function (t, e) {
                for (var i = this.processedElements, r = i.length; r; )
                  if (i[(r -= 1)].elem === t) return void (i[r].pos = e);
                i.push(new ProcessedElement(t, e));
              },
              prepareFrame: function (t) {
                this.prepareRenderableFrame(t),
                  this.prepareProperties(t, this.isInRange);
              },
            }),
            (ITextElement.prototype.initElement = function (t, e, i) {
              (this.lettersChangedFlag = !0),
                this.initFrame(),
                this.initBaseData(t, e, i),
                (this.textProperty = new TextProperty(
                  this,
                  t.t,
                  this.dynamicProperties
                )),
                (this.textAnimator = new TextAnimatorProperty(
                  t.t,
                  this.renderType,
                  this
                )),
                this.initTransform(t, e, i),
                this.initHierarchy(),
                this.initRenderable(),
                this.initRendererElement(),
                this.createContainerElements(),
                this.createRenderableComponents(),
                this.createContent(),
                this.hide(),
                this.textAnimator.searchProperties(this.dynamicProperties);
            }),
            (ITextElement.prototype.prepareFrame = function (t) {
              (this._mdf = !1),
                this.prepareRenderableFrame(t),
                this.prepareProperties(t, this.isInRange),
                (this.textProperty._mdf || this.textProperty._isFirstFrame) &&
                  (this.buildNewText(),
                  (this.textProperty._isFirstFrame = !1),
                  (this.textProperty._mdf = !1));
            }),
            (ITextElement.prototype.createPathShape = function (t, e) {
              var i,
                r,
                a = e.length,
                s = "";
              for (i = 0; i < a; i += 1)
                (r = e[i].ks.k), (s += buildShapeString(r, r.i.length, !0, t));
              return s;
            }),
            (ITextElement.prototype.updateDocumentData = function (t, e) {
              this.textProperty.updateDocumentData(t, e);
            }),
            (ITextElement.prototype.canResizeFont = function (t) {
              this.textProperty.canResizeFont(t);
            }),
            (ITextElement.prototype.setMinimumFontSize = function (t) {
              this.textProperty.setMinimumFontSize(t);
            }),
            (ITextElement.prototype.applyTextPropertiesToMatrix = function (
              t,
              e,
              i,
              r,
              a
            ) {
              switch (
                (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0),
                e.translate(0, -t.ls, 0),
                t.j)
              ) {
                case 1:
                  e.translate(
                    t.justifyOffset + (t.boxWidth - t.lineWidths[i]),
                    0,
                    0
                  );
                  break;
                case 2:
                  e.translate(
                    t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2,
                    0,
                    0
                  );
              }
              e.translate(r, a, 0);
            }),
            (ITextElement.prototype.buildColor = function (t) {
              return (
                "rgb(" +
                Math.round(255 * t[0]) +
                "," +
                Math.round(255 * t[1]) +
                "," +
                Math.round(255 * t[2]) +
                ")"
              );
            }),
            (ITextElement.prototype.emptyProp = new LetterProps()),
            (ITextElement.prototype.destroy = function () {}),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement,
              ],
              ICompElement
            ),
            (ICompElement.prototype.initElement = function (t, e, i) {
              this.initFrame(),
                this.initBaseData(t, e, i),
                this.initTransform(t, e, i),
                this.initRenderable(),
                this.initHierarchy(),
                this.initRendererElement(),
                this.createContainerElements(),
                this.createRenderableComponents(),
                (!this.data.xt && e.progressiveLoad) || this.buildAllItems(),
                this.hide();
            }),
            (ICompElement.prototype.prepareFrame = function (t) {
              if (
                ((this._mdf = !1),
                this.prepareRenderableFrame(t),
                this.prepareProperties(t, this.isInRange),
                this.isInRange || this.data.xt)
              ) {
                if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                else {
                  var e = this.tm.v;
                  e === this.data.op && (e = this.data.op - 1),
                    (this.renderedFrame = e);
                }
                var i,
                  r = this.elements.length;
                for (
                  this.completeLayers || this.checkLayers(this.renderedFrame),
                    i = r - 1;
                  0 <= i;
                  i -= 1
                )
                  (this.completeLayers || this.elements[i]) &&
                    (this.elements[i].prepareFrame(
                      this.renderedFrame - this.layers[i].st
                    ),
                    this.elements[i]._mdf && (this._mdf = !0));
              }
            }),
            (ICompElement.prototype.renderInnerContent = function () {
              var t,
                e = this.layers.length;
              for (t = 0; t < e; t += 1)
                (this.completeLayers || this.elements[t]) &&
                  this.elements[t].renderFrame();
            }),
            (ICompElement.prototype.setElements = function (t) {
              this.elements = t;
            }),
            (ICompElement.prototype.getElements = function () {
              return this.elements;
            }),
            (ICompElement.prototype.destroyElements = function () {
              var t,
                e = this.layers.length;
              for (t = 0; t < e; t += 1)
                this.elements[t] && this.elements[t].destroy();
            }),
            (ICompElement.prototype.destroy = function () {
              this.destroyElements(), this.destroyBaseElement();
            }),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                SVGBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement,
              ],
              IImageElement
            ),
            (IImageElement.prototype.createContent = function () {
              var t = this.globalData.getAssetsPath(this.assetData);
              (this.innerElem = createNS("image")),
                this.innerElem.setAttribute("width", this.assetData.w + "px"),
                this.innerElem.setAttribute("height", this.assetData.h + "px"),
                this.innerElem.setAttribute(
                  "preserveAspectRatio",
                  this.assetData.pr ||
                    this.globalData.renderConfig.imagePreserveAspectRatio
                ),
                this.innerElem.setAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  "href",
                  t
                ),
                this.layerElement.appendChild(this.innerElem);
            }),
            (IImageElement.prototype.sourceRectAtTime = function () {
              return this.sourceRect;
            }),
            extendPrototype([IImageElement], ISolidElement),
            (ISolidElement.prototype.createContent = function () {
              var t = createNS("rect");
              t.setAttribute("width", this.data.sw),
                t.setAttribute("height", this.data.sh),
                t.setAttribute("fill", this.data.sc),
                this.layerElement.appendChild(t);
            }),
            extendPrototype(
              [SVGRenderer, ICompElement, SVGBaseElement],
              SVGCompElement
            ),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                SVGBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement,
                ITextElement,
              ],
              SVGTextElement
            ),
            (SVGTextElement.prototype.createContent = function () {
              this.data.singleShape &&
                !this.globalData.fontManager.chars &&
                (this.textContainer = createNS("text"));
            }),
            (SVGTextElement.prototype.buildTextContents = function (t) {
              for (var e = 0, i = t.length, r = [], a = ""; e < i; )
                t[e] === String.fromCharCode(13) ||
                t[e] === String.fromCharCode(3)
                  ? (r.push(a), (a = ""))
                  : (a += t[e]),
                  (e += 1);
              return r.push(a), r;
            }),
            (SVGTextElement.prototype.buildNewText = function () {
              var t,
                e,
                i = this.textProperty.currentData;
              (this.renderedLetters = createSizedArray(i ? i.l.length : 0)),
                i.fc
                  ? this.layerElement.setAttribute(
                      "fill",
                      this.buildColor(i.fc)
                    )
                  : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"),
                i.sc &&
                  (this.layerElement.setAttribute(
                    "stroke",
                    this.buildColor(i.sc)
                  ),
                  this.layerElement.setAttribute("stroke-width", i.sw)),
                this.layerElement.setAttribute("font-size", i.finalSize);
              var r = this.globalData.fontManager.getFontByName(i.f);
              if (r.fClass) this.layerElement.setAttribute("class", r.fClass);
              else {
                this.layerElement.setAttribute("font-family", r.fFamily);
                var a = i.fWeight,
                  s = i.fStyle;
                this.layerElement.setAttribute("font-style", s),
                  this.layerElement.setAttribute("font-weight", a);
              }
              this.layerElement.setAttribute("aria-label", i.t);
              var n,
                o = i.l || [],
                h = !!this.globalData.fontManager.chars;
              e = o.length;
              var p,
                l = this.mHelper,
                m = "",
                c = this.data.singleShape,
                f = 0,
                d = 0,
                u = !0,
                y = (i.tr / 1e3) * i.finalSize;
              if (!c || h || i.sz) {
                var g,
                  x,
                  v = this.textSpans.length;
                for (t = 0; t < e; t += 1)
                  (h && c && 0 !== t) ||
                    ((n =
                      t < v
                        ? this.textSpans[t]
                        : createNS(h ? "path" : "text")),
                    v <= t &&
                      (n.setAttribute("stroke-linecap", "butt"),
                      n.setAttribute("stroke-linejoin", "round"),
                      n.setAttribute("stroke-miterlimit", "4"),
                      (this.textSpans[t] = n),
                      this.layerElement.appendChild(n)),
                    (n.style.display = "inherit")),
                    l.reset(),
                    l.scale(i.finalSize / 100, i.finalSize / 100),
                    c &&
                      (o[t].n &&
                        ((f = -y),
                        (d += i.yOffset),
                        (d += u ? 1 : 0),
                        (u = !1)),
                      this.applyTextPropertiesToMatrix(i, l, o[t].line, f, d),
                      (f += o[t].l || 0),
                      (f += y)),
                    h
                      ? ((p = (g =
                          ((x = this.globalData.fontManager.getCharData(
                            i.finalText[t],
                            r.fStyle,
                            this.globalData.fontManager.getFontByName(i.f)
                              .fFamily
                          )) &&
                            x.data) ||
                          {}).shapes
                          ? g.shapes[0].it
                          : []),
                        c
                          ? (m += this.createPathShape(l, p))
                          : n.setAttribute("d", this.createPathShape(l, p)))
                      : (c &&
                          n.setAttribute(
                            "transform",
                            "translate(" + l.props[12] + "," + l.props[13] + ")"
                          ),
                        (n.textContent = o[t].val),
                        n.setAttributeNS(
                          "http://www.w3.org/XML/1998/namespace",
                          "xml:space",
                          "preserve"
                        ));
                c && n && n.setAttribute("d", m);
              } else {
                var k = this.textContainer,
                  b = "start";
                switch (i.j) {
                  case 1:
                    b = "end";
                    break;
                  case 2:
                    b = "middle";
                }
                k.setAttribute("text-anchor", b),
                  k.setAttribute("letter-spacing", y);
                var E = this.buildTextContents(i.finalText);
                for (
                  e = E.length, d = i.ps ? i.ps[1] + i.ascent : 0, t = 0;
                  t < e;
                  t += 1
                )
                  ((n = this.textSpans[t] || createNS("tspan")).textContent =
                    E[t]),
                    n.setAttribute("x", 0),
                    n.setAttribute("y", d),
                    (n.style.display = "inherit"),
                    k.appendChild(n),
                    (this.textSpans[t] = n),
                    (d += i.finalLineHeight);
                this.layerElement.appendChild(k);
              }
              for (; t < this.textSpans.length; )
                (this.textSpans[t].style.display = "none"), (t += 1);
              this._sizeChanged = !0;
            }),
            (SVGTextElement.prototype.sourceRectAtTime = function (t) {
              if (
                (this.prepareFrame(this.comp.renderedFrame - this.data.st),
                this.renderInnerContent(),
                this._sizeChanged)
              ) {
                this._sizeChanged = !1;
                var e = this.layerElement.getBBox();
                this.bbox = {
                  top: e.y,
                  left: e.x,
                  width: e.width,
                  height: e.height,
                };
              }
              return this.bbox;
            }),
            (SVGTextElement.prototype.renderInnerContent = function () {
              if (
                !this.data.singleShape &&
                (this.textAnimator.getMeasures(
                  this.textProperty.currentData,
                  this.lettersChangedFlag
                ),
                this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)
              ) {
                var t, e;
                this._sizeChanged = !0;
                var i,
                  r,
                  a = this.textAnimator.renderedLetters,
                  s = this.textProperty.currentData.l;
                for (e = s.length, t = 0; t < e; t += 1)
                  s[t].n ||
                    ((i = a[t]),
                    (r = this.textSpans[t]),
                    i._mdf.m && r.setAttribute("transform", i.m),
                    i._mdf.o && r.setAttribute("opacity", i.o),
                    i._mdf.sw && r.setAttribute("stroke-width", i.sw),
                    i._mdf.sc && r.setAttribute("stroke", i.sc),
                    i._mdf.fc && r.setAttribute("fill", i.fc));
              }
            }),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                SVGBaseElement,
                IShapeElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement,
              ],
              SVGShapeElement
            ),
            (SVGShapeElement.prototype.initSecondaryElement = function () {}),
            (SVGShapeElement.prototype.identityMatrix = new Matrix()),
            (SVGShapeElement.prototype.buildExpressionInterface = function () {}),
            (SVGShapeElement.prototype.createContent = function () {
              this.searchShapes(
                this.shapesData,
                this.itemsData,
                this.prevViewData,
                this.layerElement,
                0,
                [],
                !0
              ),
                this.filterUniqueShapes();
            }),
            (SVGShapeElement.prototype.filterUniqueShapes = function () {
              var t,
                e,
                i,
                r,
                a = this.shapes.length,
                s = this.stylesList.length,
                n = [],
                o = !1;
              for (i = 0; i < s; i += 1) {
                for (
                  r = this.stylesList[i], o = !1, t = n.length = 0;
                  t < a;
                  t += 1
                )
                  -1 !== (e = this.shapes[t]).styles.indexOf(r) &&
                    (n.push(e), (o = e._isAnimated || o));
                1 < n.length && o && this.setShapesAsAnimated(n);
              }
            }),
            (SVGShapeElement.prototype.setShapesAsAnimated = function (t) {
              var e,
                i = t.length;
              for (e = 0; e < i; e += 1) t[e].setAsAnimated();
            }),
            (SVGShapeElement.prototype.createStyleElement = function (t, e) {
              var i,
                r = new SVGStyleData(t, e),
                a = r.pElem;
              return (
                "st" === t.ty
                  ? (i = new SVGStrokeStyleData(this, t, r))
                  : "fl" === t.ty
                  ? (i = new SVGFillStyleData(this, t, r))
                  : ("gf" !== t.ty && "gs" !== t.ty) ||
                    ((i = new ("gf" === t.ty
                      ? SVGGradientFillStyleData
                      : SVGGradientStrokeStyleData)(this, t, r)),
                    this.globalData.defs.appendChild(i.gf),
                    i.maskId &&
                      (this.globalData.defs.appendChild(i.ms),
                      this.globalData.defs.appendChild(i.of),
                      a.setAttribute(
                        "mask",
                        "url(" + locationHref + "#" + i.maskId + ")"
                      ))),
                ("st" !== t.ty && "gs" !== t.ty) ||
                  (a.setAttribute(
                    "stroke-linecap",
                    this.lcEnum[t.lc] || "round"
                  ),
                  a.setAttribute(
                    "stroke-linejoin",
                    this.ljEnum[t.lj] || "round"
                  ),
                  a.setAttribute("fill-opacity", "0"),
                  1 === t.lj && a.setAttribute("stroke-miterlimit", t.ml)),
                2 === t.r && a.setAttribute("fill-rule", "evenodd"),
                t.ln && a.setAttribute("id", t.ln),
                t.cl && a.setAttribute("class", t.cl),
                t.bm && (a.style["mix-blend-mode"] = getBlendMode(t.bm)),
                this.stylesList.push(r),
                this.addToAnimatedContents(t, i),
                i
              );
            }),
            (SVGShapeElement.prototype.createGroupElement = function (t) {
              var e = new ShapeGroupData();
              return (
                t.ln && e.gr.setAttribute("id", t.ln),
                t.cl && e.gr.setAttribute("class", t.cl),
                t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)),
                e
              );
            }),
            (SVGShapeElement.prototype.createTransformElement = function (
              t,
              e
            ) {
              var i = TransformPropertyFactory.getTransformProperty(
                  this,
                  t,
                  this
                ),
                r = new SVGTransformData(i, i.o, e);
              return this.addToAnimatedContents(t, r), r;
            }),
            (SVGShapeElement.prototype.createShapeElement = function (t, e, i) {
              var r = 4;
              "rc" === t.ty
                ? (r = 5)
                : "el" === t.ty
                ? (r = 6)
                : "sr" === t.ty && (r = 7);
              var a = new SVGShapeData(
                e,
                i,
                ShapePropertyFactory.getShapeProp(this, t, r, this)
              );
              return (
                this.shapes.push(a),
                this.addShapeToModifiers(a),
                this.addToAnimatedContents(t, a),
                a
              );
            }),
            (SVGShapeElement.prototype.addToAnimatedContents = function (t, e) {
              for (var i = 0, r = this.animatedContents.length; i < r; ) {
                if (this.animatedContents[i].element === e) return;
                i += 1;
              }
              this.animatedContents.push({
                fn: SVGElementsRenderer.createRenderFunction(t),
                element: e,
                data: t,
              });
            }),
            (SVGShapeElement.prototype.setElementStyles = function (t) {
              var e,
                i = t.styles,
                r = this.stylesList.length;
              for (e = 0; e < r; e += 1)
                this.stylesList[e].closed || i.push(this.stylesList[e]);
            }),
            (SVGShapeElement.prototype.reloadShapes = function () {
              this._isFirstFrame = !0;
              var t,
                e = this.itemsData.length;
              for (t = 0; t < e; t += 1)
                this.prevViewData[t] = this.itemsData[t];
              for (
                this.searchShapes(
                  this.shapesData,
                  this.itemsData,
                  this.prevViewData,
                  this.layerElement,
                  0,
                  [],
                  !0
                ),
                  this.filterUniqueShapes(),
                  e = this.dynamicProperties.length,
                  t = 0;
                t < e;
                t += 1
              )
                this.dynamicProperties[t].getValue();
              this.renderModifiers();
            }),
            (SVGShapeElement.prototype.searchShapes = function (
              t,
              e,
              i,
              r,
              a,
              s,
              n
            ) {
              var o,
                h,
                p,
                l,
                m,
                c,
                f = [].concat(s),
                d = t.length - 1,
                u = [],
                y = [];
              for (o = d; 0 <= o; o -= 1) {
                if (
                  ((c = this.searchProcessedElement(t[o]))
                    ? (e[o] = i[c - 1])
                    : (t[o]._render = n),
                  "fl" == t[o].ty ||
                    "st" == t[o].ty ||
                    "gf" == t[o].ty ||
                    "gs" == t[o].ty)
                )
                  c
                    ? (e[o].style.closed = !1)
                    : (e[o] = this.createStyleElement(t[o], a)),
                    t[o]._render && r.appendChild(e[o].style.pElem),
                    u.push(e[o].style);
                else if ("gr" == t[o].ty) {
                  if (c)
                    for (p = e[o].it.length, h = 0; h < p; h += 1)
                      e[o].prevViewData[h] = e[o].it[h];
                  else e[o] = this.createGroupElement(t[o]);
                  this.searchShapes(
                    t[o].it,
                    e[o].it,
                    e[o].prevViewData,
                    e[o].gr,
                    a + 1,
                    f,
                    n
                  ),
                    t[o]._render && r.appendChild(e[o].gr);
                } else
                  "tr" == t[o].ty
                    ? (c || (e[o] = this.createTransformElement(t[o], r)),
                      (l = e[o].transform),
                      f.push(l))
                    : "sh" == t[o].ty ||
                      "rc" == t[o].ty ||
                      "el" == t[o].ty ||
                      "sr" == t[o].ty
                    ? (c || (e[o] = this.createShapeElement(t[o], f, a)),
                      this.setElementStyles(e[o]))
                    : "tm" == t[o].ty || "rd" == t[o].ty || "ms" == t[o].ty
                    ? (c
                        ? ((m = e[o]).closed = !1)
                        : ((m = ShapeModifiers.getModifier(t[o].ty)).init(
                            this,
                            t[o]
                          ),
                          (e[o] = m),
                          this.shapeModifiers.push(m)),
                      y.push(m))
                    : "rp" == t[o].ty &&
                      (c
                        ? ((m = e[o]).closed = !0)
                        : ((m = ShapeModifiers.getModifier(t[o].ty)),
                          (e[o] = m).init(this, t, o, e),
                          this.shapeModifiers.push(m),
                          (n = !1)),
                      y.push(m));
                this.addProcessedElement(t[o], o + 1);
              }
              for (d = u.length, o = 0; o < d; o += 1) u[o].closed = !0;
              for (d = y.length, o = 0; o < d; o += 1) y[o].closed = !0;
            }),
            (SVGShapeElement.prototype.renderInnerContent = function () {
              this.renderModifiers();
              var t,
                e = this.stylesList.length;
              for (t = 0; t < e; t += 1) this.stylesList[t].reset();
              for (this.renderShape(), t = 0; t < e; t += 1)
                (this.stylesList[t]._mdf || this._isFirstFrame) &&
                  (this.stylesList[t].msElem &&
                    (this.stylesList[t].msElem.setAttribute(
                      "d",
                      this.stylesList[t].d
                    ),
                    (this.stylesList[t].d = "M0 0" + this.stylesList[t].d)),
                  this.stylesList[t].pElem.setAttribute(
                    "d",
                    this.stylesList[t].d || "M0 0"
                  ));
            }),
            (SVGShapeElement.prototype.renderShape = function () {
              var t,
                e,
                i = this.animatedContents.length;
              for (t = 0; t < i; t += 1)
                (e = this.animatedContents[t]),
                  (this._isFirstFrame || e.element._isAnimated) &&
                    !0 !== e.data &&
                    e.fn(e.data, e.element, this._isFirstFrame);
            }),
            (SVGShapeElement.prototype.destroy = function () {
              this.destroyBaseElement(),
                (this.shapesData = null),
                (this.itemsData = null);
            }),
            (SVGTintFilter.prototype.renderFrame = function (t) {
              if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v,
                  i = this.filterManager.effectElements[1].p.v,
                  r = this.filterManager.effectElements[2].p.v / 100;
                this.matrixFilter.setAttribute(
                  "values",
                  i[0] -
                    e[0] +
                    " 0 0 0 " +
                    e[0] +
                    " " +
                    (i[1] - e[1]) +
                    " 0 0 0 " +
                    e[1] +
                    " " +
                    (i[2] - e[2]) +
                    " 0 0 0 " +
                    e[2] +
                    " 0 0 0 " +
                    r +
                    " 0"
                );
              }
            }),
            (SVGFillFilter.prototype.renderFrame = function (t) {
              if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[2].p.v,
                  i = this.filterManager.effectElements[6].p.v;
                this.matrixFilter.setAttribute(
                  "values",
                  "0 0 0 0 " +
                    e[0] +
                    " 0 0 0 0 " +
                    e[1] +
                    " 0 0 0 0 " +
                    e[2] +
                    " 0 0 0 " +
                    i +
                    " 0"
                );
              }
            }),
            (SVGGaussianBlurEffect.prototype.renderFrame = function (t) {
              if (t || this.filterManager._mdf) {
                var e = 0.3 * this.filterManager.effectElements[0].p.v,
                  i = this.filterManager.effectElements[1].p.v,
                  r = 3 == i ? 0 : e,
                  a = 2 == i ? 0 : e;
                this.feGaussianBlur.setAttribute("stdDeviation", r + " " + a);
                var s =
                  1 == this.filterManager.effectElements[2].p.v
                    ? "wrap"
                    : "duplicate";
                this.feGaussianBlur.setAttribute("edgeMode", s);
              }
            }),
            (SVGStrokeEffect.prototype.initialize = function () {
              var t,
                e,
                i,
                r,
                a =
                  this.elem.layerElement.children ||
                  this.elem.layerElement.childNodes;
              for (
                1 === this.filterManager.effectElements[1].p.v
                  ? ((r = this.elem.maskManager.masksProperties.length),
                    (i = 0))
                  : (r =
                      1 + (i = this.filterManager.effectElements[0].p.v - 1)),
                  (e = createNS("g")).setAttribute("fill", "none"),
                  e.setAttribute("stroke-linecap", "round"),
                  e.setAttribute("stroke-dashoffset", 1);
                i < r;
                i += 1
              )
                (t = createNS("path")),
                  e.appendChild(t),
                  this.paths.push({ p: t, m: i });
              if (3 === this.filterManager.effectElements[10].p.v) {
                var s = createNS("mask"),
                  n = createElementID();
                s.setAttribute("id", n),
                  s.setAttribute("mask-type", "alpha"),
                  s.appendChild(e),
                  this.elem.globalData.defs.appendChild(s);
                var o = createNS("g");
                for (
                  o.setAttribute("mask", "url(" + locationHref + "#" + n + ")");
                  a[0];

                )
                  o.appendChild(a[0]);
                this.elem.layerElement.appendChild(o),
                  (this.masker = s),
                  e.setAttribute("stroke", "#fff");
              } else if (
                1 === this.filterManager.effectElements[10].p.v ||
                2 === this.filterManager.effectElements[10].p.v
              ) {
                if (2 === this.filterManager.effectElements[10].p.v)
                  for (
                    a =
                      this.elem.layerElement.children ||
                      this.elem.layerElement.childNodes;
                    a.length;

                  )
                    this.elem.layerElement.removeChild(a[0]);
                this.elem.layerElement.appendChild(e),
                  this.elem.layerElement.removeAttribute("mask"),
                  e.setAttribute("stroke", "#fff");
              }
              (this.initialized = !0), (this.pathMasker = e);
            }),
            (SVGStrokeEffect.prototype.renderFrame = function (t) {
              this.initialized || this.initialize();
              var e,
                i,
                r,
                a = this.paths.length;
              for (e = 0; e < a; e += 1)
                if (
                  -1 !== this.paths[e].m &&
                  ((i = this.elem.maskManager.viewData[this.paths[e].m]),
                  (r = this.paths[e].p),
                  (t || this.filterManager._mdf || i.prop._mdf) &&
                    r.setAttribute("d", i.lastPath),
                  t ||
                    this.filterManager.effectElements[9].p._mdf ||
                    this.filterManager.effectElements[4].p._mdf ||
                    this.filterManager.effectElements[7].p._mdf ||
                    this.filterManager.effectElements[8].p._mdf ||
                    i.prop._mdf)
                ) {
                  var s;
                  if (
                    0 !== this.filterManager.effectElements[7].p.v ||
                    100 !== this.filterManager.effectElements[8].p.v
                  ) {
                    var n =
                        Math.min(
                          this.filterManager.effectElements[7].p.v,
                          this.filterManager.effectElements[8].p.v
                        ) / 100,
                      o =
                        Math.max(
                          this.filterManager.effectElements[7].p.v,
                          this.filterManager.effectElements[8].p.v
                        ) / 100,
                      h = r.getTotalLength();
                    s = "0 0 0 " + h * n + " ";
                    var p,
                      l = h * (o - n),
                      m =
                        1 +
                        (2 *
                          this.filterManager.effectElements[4].p.v *
                          this.filterManager.effectElements[9].p.v) /
                          100,
                      c = Math.floor(l / m);
                    for (p = 0; p < c; p += 1)
                      s +=
                        "1 " +
                        (2 *
                          this.filterManager.effectElements[4].p.v *
                          this.filterManager.effectElements[9].p.v) /
                          100 +
                        " ";
                    s += "0 " + 10 * h + " 0 0";
                  } else
                    s =
                      "1 " +
                      (2 *
                        this.filterManager.effectElements[4].p.v *
                        this.filterManager.effectElements[9].p.v) /
                        100;
                  r.setAttribute("stroke-dasharray", s);
                }
              if (
                ((t || this.filterManager.effectElements[4].p._mdf) &&
                  this.pathMasker.setAttribute(
                    "stroke-width",
                    2 * this.filterManager.effectElements[4].p.v
                  ),
                (t || this.filterManager.effectElements[6].p._mdf) &&
                  this.pathMasker.setAttribute(
                    "opacity",
                    this.filterManager.effectElements[6].p.v
                  ),
                (1 === this.filterManager.effectElements[10].p.v ||
                  2 === this.filterManager.effectElements[10].p.v) &&
                  (t || this.filterManager.effectElements[3].p._mdf))
              ) {
                var f = this.filterManager.effectElements[3].p.v;
                this.pathMasker.setAttribute(
                  "stroke",
                  "rgb(" +
                    bm_floor(255 * f[0]) +
                    "," +
                    bm_floor(255 * f[1]) +
                    "," +
                    bm_floor(255 * f[2]) +
                    ")"
                );
              }
            }),
            (SVGTritoneFilter.prototype.renderFrame = function (t) {
              if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v,
                  i = this.filterManager.effectElements[1].p.v,
                  r = this.filterManager.effectElements[2].p.v,
                  a = r[0] + " " + i[0] + " " + e[0],
                  s = r[1] + " " + i[1] + " " + e[1],
                  n = r[2] + " " + i[2] + " " + e[2];
                this.feFuncR.setAttribute("tableValues", a),
                  this.feFuncG.setAttribute("tableValues", s),
                  this.feFuncB.setAttribute("tableValues", n);
              }
            }),
            (SVGProLevelsFilter.prototype.createFeFunc = function (t, e) {
              var i = createNS(t);
              return i.setAttribute("type", "table"), e.appendChild(i), i;
            }),
            (SVGProLevelsFilter.prototype.getTableValue = function (
              t,
              e,
              i,
              r,
              a
            ) {
              for (
                var s,
                  n,
                  o = 0,
                  h = Math.min(t, e),
                  p = Math.max(t, e),
                  l = Array.call(null, { length: 256 }),
                  m = 0,
                  c = a - r,
                  f = e - t;
                o <= 256;

              )
                (n =
                  (s = o / 256) <= h
                    ? f < 0
                      ? a
                      : r
                    : p <= s
                    ? f < 0
                      ? r
                      : a
                    : r + c * Math.pow((s - t) / f, 1 / i)),
                  (l[m++] = n),
                  (o += 256 / 255);
              return l.join(" ");
            }),
            (SVGProLevelsFilter.prototype.renderFrame = function (t) {
              if (t || this.filterManager._mdf) {
                var e,
                  i = this.filterManager.effectElements;
                this.feFuncRComposed &&
                  (t ||
                    i[3].p._mdf ||
                    i[4].p._mdf ||
                    i[5].p._mdf ||
                    i[6].p._mdf ||
                    i[7].p._mdf) &&
                  ((e = this.getTableValue(
                    i[3].p.v,
                    i[4].p.v,
                    i[5].p.v,
                    i[6].p.v,
                    i[7].p.v
                  )),
                  this.feFuncRComposed.setAttribute("tableValues", e),
                  this.feFuncGComposed.setAttribute("tableValues", e),
                  this.feFuncBComposed.setAttribute("tableValues", e)),
                  this.feFuncR &&
                    (t ||
                      i[10].p._mdf ||
                      i[11].p._mdf ||
                      i[12].p._mdf ||
                      i[13].p._mdf ||
                      i[14].p._mdf) &&
                    ((e = this.getTableValue(
                      i[10].p.v,
                      i[11].p.v,
                      i[12].p.v,
                      i[13].p.v,
                      i[14].p.v
                    )),
                    this.feFuncR.setAttribute("tableValues", e)),
                  this.feFuncG &&
                    (t ||
                      i[17].p._mdf ||
                      i[18].p._mdf ||
                      i[19].p._mdf ||
                      i[20].p._mdf ||
                      i[21].p._mdf) &&
                    ((e = this.getTableValue(
                      i[17].p.v,
                      i[18].p.v,
                      i[19].p.v,
                      i[20].p.v,
                      i[21].p.v
                    )),
                    this.feFuncG.setAttribute("tableValues", e)),
                  this.feFuncB &&
                    (t ||
                      i[24].p._mdf ||
                      i[25].p._mdf ||
                      i[26].p._mdf ||
                      i[27].p._mdf ||
                      i[28].p._mdf) &&
                    ((e = this.getTableValue(
                      i[24].p.v,
                      i[25].p.v,
                      i[26].p.v,
                      i[27].p.v,
                      i[28].p.v
                    )),
                    this.feFuncB.setAttribute("tableValues", e)),
                  this.feFuncA &&
                    (t ||
                      i[31].p._mdf ||
                      i[32].p._mdf ||
                      i[33].p._mdf ||
                      i[34].p._mdf ||
                      i[35].p._mdf) &&
                    ((e = this.getTableValue(
                      i[31].p.v,
                      i[32].p.v,
                      i[33].p.v,
                      i[34].p.v,
                      i[35].p.v
                    )),
                    this.feFuncA.setAttribute("tableValues", e));
              }
            }),
            (SVGDropShadowEffect.prototype.renderFrame = function (t) {
              if (t || this.filterManager._mdf) {
                if (
                  ((t || this.filterManager.effectElements[4].p._mdf) &&
                    this.feGaussianBlur.setAttribute(
                      "stdDeviation",
                      this.filterManager.effectElements[4].p.v / 4
                    ),
                  t || this.filterManager.effectElements[0].p._mdf)
                ) {
                  var e = this.filterManager.effectElements[0].p.v;
                  this.feFlood.setAttribute(
                    "flood-color",
                    rgbToHex(
                      Math.round(255 * e[0]),
                      Math.round(255 * e[1]),
                      Math.round(255 * e[2])
                    )
                  );
                }
                if (
                  ((t || this.filterManager.effectElements[1].p._mdf) &&
                    this.feFlood.setAttribute(
                      "flood-opacity",
                      this.filterManager.effectElements[1].p.v / 255
                    ),
                  t ||
                    this.filterManager.effectElements[2].p._mdf ||
                    this.filterManager.effectElements[3].p._mdf)
                ) {
                  var i = this.filterManager.effectElements[3].p.v,
                    r =
                      (this.filterManager.effectElements[2].p.v - 90) *
                      degToRads,
                    a = i * Math.cos(r),
                    s = i * Math.sin(r);
                  this.feOffset.setAttribute("dx", a),
                    this.feOffset.setAttribute("dy", s);
                }
              }
            });
          var _svgMatteSymbols = [];
          function SVGMatte3Effect(t, e, i) {
            (this.initialized = !1),
              (this.filterManager = e),
              (this.filterElem = t),
              ((this.elem = i).matteElement = createNS("g")),
              i.matteElement.appendChild(i.layerElement),
              i.matteElement.appendChild(i.transformedElement),
              (i.baseElement = i.matteElement);
          }
          function SVGEffects(t) {
            var e,
              i,
              r = t.data.ef ? t.data.ef.length : 0,
              a = createElementID(),
              s = filtersFactory.createFilter(a),
              n = 0;
            for (this.filters = [], e = 0; e < r; e += 1)
              (i = null),
                20 === t.data.ef[e].ty
                  ? ((n += 1),
                    (i = new SVGTintFilter(
                      s,
                      t.effectsManager.effectElements[e]
                    )))
                  : 21 === t.data.ef[e].ty
                  ? ((n += 1),
                    (i = new SVGFillFilter(
                      s,
                      t.effectsManager.effectElements[e]
                    )))
                  : 22 === t.data.ef[e].ty
                  ? (i = new SVGStrokeEffect(
                      t,
                      t.effectsManager.effectElements[e]
                    ))
                  : 23 === t.data.ef[e].ty
                  ? ((n += 1),
                    (i = new SVGTritoneFilter(
                      s,
                      t.effectsManager.effectElements[e]
                    )))
                  : 24 === t.data.ef[e].ty
                  ? ((n += 1),
                    (i = new SVGProLevelsFilter(
                      s,
                      t.effectsManager.effectElements[e]
                    )))
                  : 25 === t.data.ef[e].ty
                  ? ((n += 1),
                    (i = new SVGDropShadowEffect(
                      s,
                      t.effectsManager.effectElements[e]
                    )))
                  : 28 === t.data.ef[e].ty
                  ? (i = new SVGMatte3Effect(
                      s,
                      t.effectsManager.effectElements[e],
                      t
                    ))
                  : 29 === t.data.ef[e].ty &&
                    ((n += 1),
                    (i = new SVGGaussianBlurEffect(
                      s,
                      t.effectsManager.effectElements[e]
                    ))),
                i && this.filters.push(i);
            n &&
              (t.globalData.defs.appendChild(s),
              t.layerElement.setAttribute(
                "filter",
                "url(" + locationHref + "#" + a + ")"
              )),
              this.filters.length && t.addRenderableComponent(this);
          }
          function CVContextData() {
            var t;
            for (
              this.saved = [],
                this.cArrPos = 0,
                this.cTr = new Matrix(),
                this.cO = 1,
                this.savedOp = createTypedArray("float32", 15),
                t = 0;
              t < 15;
              t += 1
            )
              this.saved[t] = createTypedArray("float32", 16);
            this._length = 15;
          }
          function CVBaseElement() {}
          function CVImageElement(t, e, i) {
            (this.assetData = e.getAssetData(t.refId)),
              (this.img = e.imageLoader.getImage(this.assetData)),
              this.initElement(t, e, i);
          }
          function CVCompElement(t, e, i) {
            (this.completeLayers = !1),
              (this.layers = t.layers),
              (this.pendingElements = []),
              (this.elements = createSizedArray(this.layers.length)),
              this.initElement(t, e, i),
              (this.tm = t.tm
                ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
                : { _placeholder: !0 });
          }
          function CVMaskElement(t, e) {
            (this.data = t),
              (this.element = e),
              (this.masksProperties = this.data.masksProperties || []),
              (this.viewData = createSizedArray(this.masksProperties.length));
            var i,
              r = this.masksProperties.length,
              a = !1;
            for (i = 0; i < r; i++)
              "n" !== this.masksProperties[i].mode && (a = !0),
                (this.viewData[i] = ShapePropertyFactory.getShapeProp(
                  this.element,
                  this.masksProperties[i],
                  3
                ));
            (this.hasMasks = a) && this.element.addRenderableComponent(this);
          }
          function CVShapeElement(t, e, i) {
            (this.shapes = []),
              (this.shapesData = t.shapes),
              (this.stylesList = []),
              (this.itemsData = []),
              (this.prevViewData = []),
              (this.shapeModifiers = []),
              (this.processedElements = []),
              (this.transformsManager = new ShapeTransformManager()),
              this.initElement(t, e, i);
          }
          function CVSolidElement(t, e, i) {
            this.initElement(t, e, i);
          }
          function CVTextElement(t, e, i) {
            (this.textSpans = []),
              (this.yOffset = 0),
              (this.fillColorAnim = !1),
              (this.strokeColorAnim = !1),
              (this.strokeWidthAnim = !1),
              (this.stroke = !1),
              (this.fill = !1),
              (this.justifyOffset = 0),
              (this.currentRender = null),
              (this.renderType = "canvas"),
              (this.values = {
                fill: "rgba(0,0,0,0)",
                stroke: "rgba(0,0,0,0)",
                sWidth: 0,
                fValue: "",
              }),
              this.initElement(t, e, i);
          }
          function CVEffects() {}
          function HBaseElement(t, e, i) {}
          function HSolidElement(t, e, i) {
            this.initElement(t, e, i);
          }
          function HCompElement(t, e, i) {
            (this.layers = t.layers),
              (this.supports3d = !t.hasMask),
              (this.completeLayers = !1),
              (this.pendingElements = []),
              (this.elements = this.layers
                ? createSizedArray(this.layers.length)
                : []),
              this.initElement(t, e, i),
              (this.tm = t.tm
                ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
                : { _placeholder: !0 });
          }
          function HShapeElement(t, e, i) {
            (this.shapes = []),
              (this.shapesData = t.shapes),
              (this.stylesList = []),
              (this.shapeModifiers = []),
              (this.itemsData = []),
              (this.processedElements = []),
              (this.animatedContents = []),
              (this.shapesContainer = createNS("g")),
              this.initElement(t, e, i),
              (this.prevViewData = []),
              (this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 });
          }
          function HTextElement(t, e, i) {
            (this.textSpans = []),
              (this.textPaths = []),
              (this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 }),
              (this.renderType = "svg"),
              (this.isMasked = !1),
              this.initElement(t, e, i);
          }
          function HImageElement(t, e, i) {
            (this.assetData = e.getAssetData(t.refId)),
              this.initElement(t, e, i);
          }
          function HCameraElement(t, e, i) {
            this.initFrame(), this.initBaseData(t, e, i), this.initHierarchy();
            var r = PropertyFactory.getProp;
            if (
              ((this.pe = r(this, t.pe, 0, 0, this)),
              t.ks.p.s
                ? ((this.px = r(this, t.ks.p.x, 1, 0, this)),
                  (this.py = r(this, t.ks.p.y, 1, 0, this)),
                  (this.pz = r(this, t.ks.p.z, 1, 0, this)))
                : (this.p = r(this, t.ks.p, 1, 0, this)),
              t.ks.a && (this.a = r(this, t.ks.a, 1, 0, this)),
              t.ks.or.k.length && t.ks.or.k[0].to)
            ) {
              var a,
                s = t.ks.or.k.length;
              for (a = 0; a < s; a += 1)
                (t.ks.or.k[a].to = null), (t.ks.or.k[a].ti = null);
            }
            (this.or = r(this, t.ks.or, 1, degToRads, this)),
              (this.or.sh = !0),
              (this.rx = r(this, t.ks.rx, 0, degToRads, this)),
              (this.ry = r(this, t.ks.ry, 0, degToRads, this)),
              (this.rz = r(this, t.ks.rz, 0, degToRads, this)),
              (this.mat = new Matrix()),
              (this._prevMat = new Matrix()),
              (this._isFirstFrame = !0),
              (this.finalTransform = { mProp: this });
          }
          function HEffects() {}
          (SVGMatte3Effect.prototype.findSymbol = function (t) {
            for (var e = 0, i = _svgMatteSymbols.length; e < i; ) {
              if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
              e += 1;
            }
            return null;
          }),
            (SVGMatte3Effect.prototype.replaceInParent = function (t, e) {
              var i = t.layerElement.parentNode;
              if (i) {
                for (
                  var r, a = i.children, s = 0, n = a.length;
                  s < n && a[s] !== t.layerElement;

                )
                  s += 1;
                s <= n - 2 && (r = a[s + 1]);
                var o = createNS("use");
                o.setAttribute("href", "#" + e),
                  r ? i.insertBefore(o, r) : i.appendChild(o);
              }
            }),
            (SVGMatte3Effect.prototype.setElementAsMask = function (t, e) {
              if (!this.findSymbol(e)) {
                var i = createElementID(),
                  r = createNS("mask");
                r.setAttribute("id", e.layerId),
                  r.setAttribute("mask-type", "alpha"),
                  _svgMatteSymbols.push(e);
                var a = t.globalData.defs;
                a.appendChild(r);
                var s = createNS("symbol");
                s.setAttribute("id", i),
                  this.replaceInParent(e, i),
                  s.appendChild(e.layerElement),
                  a.appendChild(s);
                var n = createNS("use");
                n.setAttribute("href", "#" + i),
                  r.appendChild(n),
                  (e.data.hd = !1),
                  e.show();
              }
              t.setMatte(e.layerId);
            }),
            (SVGMatte3Effect.prototype.initialize = function () {
              for (
                var t = this.filterManager.effectElements[0].p.v,
                  e = this.elem.comp.elements,
                  i = 0,
                  r = e.length;
                i < r;

              )
                e[i] &&
                  e[i].data.ind === t &&
                  this.setElementAsMask(this.elem, e[i]),
                  (i += 1);
              this.initialized = !0;
            }),
            (SVGMatte3Effect.prototype.renderFrame = function () {
              this.initialized || this.initialize();
            }),
            (SVGEffects.prototype.renderFrame = function (t) {
              var e,
                i = this.filters.length;
              for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t);
            }),
            (CVContextData.prototype.duplicate = function () {
              var t = 2 * this._length,
                e = this.savedOp;
              (this.savedOp = createTypedArray("float32", t)),
                this.savedOp.set(e);
              var i = 0;
              for (i = this._length; i < t; i += 1)
                this.saved[i] = createTypedArray("float32", 16);
              this._length = t;
            }),
            (CVContextData.prototype.reset = function () {
              (this.cArrPos = 0), this.cTr.reset(), (this.cO = 1);
            }),
            (CVBaseElement.prototype = {
              createElements: function () {},
              initRendererElement: function () {},
              createContainerElements: function () {
                (this.canvasContext = this.globalData.canvasContext),
                  (this.renderableEffectsManager = new CVEffects(this));
              },
              createContent: function () {},
              setBlendMode: function () {
                var t = this.globalData;
                if (t.blendMode !== this.data.bm) {
                  t.blendMode = this.data.bm;
                  var e = getBlendMode(this.data.bm);
                  t.canvasContext.globalCompositeOperation = e;
                }
              },
              createRenderableComponents: function () {
                this.maskManager = new CVMaskElement(this.data, this);
              },
              hideElement: function () {
                this.hidden ||
                  (this.isInRange && !this.isTransparent) ||
                  (this.hidden = !0);
              },
              showElement: function () {
                this.isInRange &&
                  !this.isTransparent &&
                  ((this.hidden = !1),
                  (this._isFirstFrame = !0),
                  (this.maskManager._isFirstFrame = !0));
              },
              renderFrame: function () {
                this.hidden ||
                  this.data.hd ||
                  (this.renderTransform(),
                  this.renderRenderable(),
                  this.setBlendMode(),
                  this.globalData.renderer.save(),
                  this.globalData.renderer.ctxTransform(
                    this.finalTransform.mat.props
                  ),
                  this.globalData.renderer.ctxOpacity(
                    this.finalTransform.mProp.o.v
                  ),
                  this.renderInnerContent(),
                  this.globalData.renderer.restore(),
                  this.maskManager.hasMasks &&
                    this.globalData.renderer.restore(!0),
                  this._isFirstFrame && (this._isFirstFrame = !1));
              },
              destroy: function () {
                (this.canvasContext = null),
                  (this.data = null),
                  (this.globalData = null),
                  this.maskManager.destroy();
              },
              mHelper: new Matrix(),
            }),
            (CVBaseElement.prototype.hide =
              CVBaseElement.prototype.hideElement),
            (CVBaseElement.prototype.show =
              CVBaseElement.prototype.showElement),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                CVBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableElement,
              ],
              CVImageElement
            ),
            (CVImageElement.prototype.initElement =
              SVGShapeElement.prototype.initElement),
            (CVImageElement.prototype.prepareFrame =
              IImageElement.prototype.prepareFrame),
            (CVImageElement.prototype.createContent = function () {
              if (
                this.img.width &&
                (this.assetData.w !== this.img.width ||
                  this.assetData.h !== this.img.height)
              ) {
                var t = createTag("canvas");
                (t.width = this.assetData.w), (t.height = this.assetData.h);
                var e,
                  i,
                  r = t.getContext("2d"),
                  a = this.img.width,
                  s = this.img.height,
                  n = a / s,
                  o = this.assetData.w / this.assetData.h,
                  h =
                    this.assetData.pr ||
                    this.globalData.renderConfig.imagePreserveAspectRatio;
                (o < n && "xMidYMid slice" === h) ||
                (n < o && "xMidYMid slice" !== h)
                  ? (e = (i = s) * o)
                  : (i = (e = a) / o),
                  r.drawImage(
                    this.img,
                    (a - e) / 2,
                    (s - i) / 2,
                    e,
                    i,
                    0,
                    0,
                    this.assetData.w,
                    this.assetData.h
                  ),
                  (this.img = t);
              }
            }),
            (CVImageElement.prototype.renderInnerContent = function (t) {
              this.canvasContext.drawImage(this.img, 0, 0);
            }),
            (CVImageElement.prototype.destroy = function () {
              this.img = null;
            }),
            extendPrototype(
              [CanvasRenderer, ICompElement, CVBaseElement],
              CVCompElement
            ),
            (CVCompElement.prototype.renderInnerContent = function () {
              var t;
              for (t = this.layers.length - 1; 0 <= t; t -= 1)
                (this.completeLayers || this.elements[t]) &&
                  this.elements[t].renderFrame();
            }),
            (CVCompElement.prototype.destroy = function () {
              var t;
              for (t = this.layers.length - 1; 0 <= t; t -= 1)
                this.elements[t] && this.elements[t].destroy();
              (this.layers = null), (this.elements = null);
            }),
            (CVMaskElement.prototype.renderFrame = function () {
              if (this.hasMasks) {
                var t,
                  e,
                  i,
                  r,
                  a = this.element.finalTransform.mat,
                  s = this.element.canvasContext,
                  n = this.masksProperties.length;
                for (s.beginPath(), t = 0; t < n; t++)
                  if ("n" !== this.masksProperties[t].mode) {
                    this.masksProperties[t].inv &&
                      (s.moveTo(0, 0),
                      s.lineTo(this.element.globalData.compSize.w, 0),
                      s.lineTo(
                        this.element.globalData.compSize.w,
                        this.element.globalData.compSize.h
                      ),
                      s.lineTo(0, this.element.globalData.compSize.h),
                      s.lineTo(0, 0)),
                      (r = this.viewData[t].v),
                      (e = a.applyToPointArray(r.v[0][0], r.v[0][1], 0)),
                      s.moveTo(e[0], e[1]);
                    var o,
                      h = r._length;
                    for (o = 1; o < h; o++)
                      (i = a.applyToTriplePoints(r.o[o - 1], r.i[o], r.v[o])),
                        s.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
                    (i = a.applyToTriplePoints(r.o[o - 1], r.i[0], r.v[0])),
                      s.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
                  }
                this.element.globalData.renderer.save(!0), s.clip();
              }
            }),
            (CVMaskElement.prototype.getMaskProperty =
              MaskElement.prototype.getMaskProperty),
            (CVMaskElement.prototype.destroy = function () {
              this.element = null;
            }),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                CVBaseElement,
                IShapeElement,
                HierarchyElement,
                FrameElement,
                RenderableElement,
              ],
              CVShapeElement
            ),
            (CVShapeElement.prototype.initElement =
              RenderableDOMElement.prototype.initElement),
            (CVShapeElement.prototype.transformHelper = {
              opacity: 1,
              _opMdf: !1,
            }),
            (CVShapeElement.prototype.dashResetter = []),
            (CVShapeElement.prototype.createContent = function () {
              this.searchShapes(
                this.shapesData,
                this.itemsData,
                this.prevViewData,
                !0,
                []
              );
            }),
            (CVShapeElement.prototype.createStyleElement = function (t, e) {
              var i = {
                  data: t,
                  type: t.ty,
                  preTransforms: this.transformsManager.addTransformSequence(e),
                  transforms: [],
                  elements: [],
                  closed: !0 === t.hd,
                },
                r = {};
              if (
                ("fl" == t.ty || "st" == t.ty
                  ? ((r.c = PropertyFactory.getProp(this, t.c, 1, 255, this)),
                    r.c.k ||
                      (i.co =
                        "rgb(" +
                        bm_floor(r.c.v[0]) +
                        "," +
                        bm_floor(r.c.v[1]) +
                        "," +
                        bm_floor(r.c.v[2]) +
                        ")"))
                  : ("gf" !== t.ty && "gs" !== t.ty) ||
                    ((r.s = PropertyFactory.getProp(this, t.s, 1, null, this)),
                    (r.e = PropertyFactory.getProp(this, t.e, 1, null, this)),
                    (r.h = PropertyFactory.getProp(
                      this,
                      t.h || { k: 0 },
                      0,
                      0.01,
                      this
                    )),
                    (r.a = PropertyFactory.getProp(
                      this,
                      t.a || { k: 0 },
                      0,
                      degToRads,
                      this
                    )),
                    (r.g = new GradientProperty(this, t.g, this))),
                (r.o = PropertyFactory.getProp(this, t.o, 0, 0.01, this)),
                "st" == t.ty || "gs" == t.ty)
              ) {
                if (
                  ((i.lc = this.lcEnum[t.lc] || "round"),
                  (i.lj = this.ljEnum[t.lj] || "round"),
                  1 == t.lj && (i.ml = t.ml),
                  (r.w = PropertyFactory.getProp(this, t.w, 0, null, this)),
                  r.w.k || (i.wi = r.w.v),
                  t.d)
                ) {
                  var a = new DashProperty(this, t.d, "canvas", this);
                  (r.d = a),
                    r.d.k ||
                      ((i.da = r.d.dashArray), (i.do = r.d.dashoffset[0]));
                }
              } else i.r = 2 === t.r ? "evenodd" : "nonzero";
              return this.stylesList.push(i), (r.style = i), r;
            }),
            (CVShapeElement.prototype.createGroupElement = function (t) {
              return { it: [], prevViewData: [] };
            }),
            (CVShapeElement.prototype.createTransformElement = function (t) {
              return {
                transform: {
                  opacity: 1,
                  _opMdf: !1,
                  key: this.transformsManager.getNewKey(),
                  op: PropertyFactory.getProp(this, t.o, 0, 0.01, this),
                  mProps: TransformPropertyFactory.getTransformProperty(
                    this,
                    t,
                    this
                  ),
                },
              };
            }),
            (CVShapeElement.prototype.createShapeElement = function (t) {
              var e = new CVShapeData(
                this,
                t,
                this.stylesList,
                this.transformsManager
              );
              return this.shapes.push(e), this.addShapeToModifiers(e), e;
            }),
            (CVShapeElement.prototype.reloadShapes = function () {
              this._isFirstFrame = !0;
              var t,
                e = this.itemsData.length;
              for (t = 0; t < e; t += 1)
                this.prevViewData[t] = this.itemsData[t];
              for (
                this.searchShapes(
                  this.shapesData,
                  this.itemsData,
                  this.prevViewData,
                  !0,
                  []
                ),
                  e = this.dynamicProperties.length,
                  t = 0;
                t < e;
                t += 1
              )
                this.dynamicProperties[t].getValue();
              this.renderModifiers(),
                this.transformsManager.processSequences(this._isFirstFrame);
            }),
            (CVShapeElement.prototype.addTransformToStyleList = function (t) {
              var e,
                i = this.stylesList.length;
              for (e = 0; e < i; e += 1)
                this.stylesList[e].closed ||
                  this.stylesList[e].transforms.push(t);
            }),
            (CVShapeElement.prototype.removeTransformFromStyleList = function () {
              var t,
                e = this.stylesList.length;
              for (t = 0; t < e; t += 1)
                this.stylesList[t].closed ||
                  this.stylesList[t].transforms.pop();
            }),
            (CVShapeElement.prototype.closeStyles = function (t) {
              var e,
                i = t.length;
              for (e = 0; e < i; e += 1) t[e].closed = !0;
            }),
            (CVShapeElement.prototype.searchShapes = function (t, e, i, r, a) {
              var s,
                n,
                o,
                h,
                p,
                l,
                m = t.length - 1,
                c = [],
                f = [],
                d = [].concat(a);
              for (s = m; 0 <= s; s -= 1) {
                if (
                  ((h = this.searchProcessedElement(t[s]))
                    ? (e[s] = i[h - 1])
                    : (t[s]._shouldRender = r),
                  "fl" == t[s].ty ||
                    "st" == t[s].ty ||
                    "gf" == t[s].ty ||
                    "gs" == t[s].ty)
                )
                  h
                    ? (e[s].style.closed = !1)
                    : (e[s] = this.createStyleElement(t[s], d)),
                    c.push(e[s].style);
                else if ("gr" == t[s].ty) {
                  if (h)
                    for (o = e[s].it.length, n = 0; n < o; n += 1)
                      e[s].prevViewData[n] = e[s].it[n];
                  else e[s] = this.createGroupElement(t[s]);
                  this.searchShapes(t[s].it, e[s].it, e[s].prevViewData, r, d);
                } else
                  "tr" == t[s].ty
                    ? (h ||
                        ((l = this.createTransformElement(t[s])), (e[s] = l)),
                      d.push(e[s]),
                      this.addTransformToStyleList(e[s]))
                    : "sh" == t[s].ty ||
                      "rc" == t[s].ty ||
                      "el" == t[s].ty ||
                      "sr" == t[s].ty
                    ? h || (e[s] = this.createShapeElement(t[s]))
                    : "tm" == t[s].ty || "rd" == t[s].ty
                    ? (h
                        ? ((p = e[s]).closed = !1)
                        : ((p = ShapeModifiers.getModifier(t[s].ty)).init(
                            this,
                            t[s]
                          ),
                          (e[s] = p),
                          this.shapeModifiers.push(p)),
                      f.push(p))
                    : "rp" == t[s].ty &&
                      (h
                        ? ((p = e[s]).closed = !0)
                        : ((p = ShapeModifiers.getModifier(t[s].ty)),
                          (e[s] = p).init(this, t, s, e),
                          this.shapeModifiers.push(p),
                          (r = !1)),
                      f.push(p));
                this.addProcessedElement(t[s], s + 1);
              }
              for (
                this.removeTransformFromStyleList(),
                  this.closeStyles(c),
                  m = f.length,
                  s = 0;
                s < m;
                s += 1
              )
                f[s].closed = !0;
            }),
            (CVShapeElement.prototype.renderInnerContent = function () {
              (this.transformHelper.opacity = 1),
                (this.transformHelper._opMdf = !1),
                this.renderModifiers(),
                this.transformsManager.processSequences(this._isFirstFrame),
                this.renderShape(
                  this.transformHelper,
                  this.shapesData,
                  this.itemsData,
                  !0
                );
            }),
            (CVShapeElement.prototype.renderShapeTransform = function (t, e) {
              (t._opMdf || e.op._mdf || this._isFirstFrame) &&
                ((e.opacity = t.opacity),
                (e.opacity *= e.op.v),
                (e._opMdf = !0));
            }),
            (CVShapeElement.prototype.drawLayer = function () {
              var t,
                e,
                i,
                r,
                a,
                s,
                n,
                o,
                h,
                p = this.stylesList.length,
                l = this.globalData.renderer,
                m = this.globalData.canvasContext;
              for (t = 0; t < p; t += 1)
                if (
                  (("st" !== (o = (h = this.stylesList[t]).type) &&
                    "gs" !== o) ||
                    0 !== h.wi) &&
                  h.data._shouldRender &&
                  0 !== h.coOp &&
                  0 !== this.globalData.currentGlobalAlpha
                ) {
                  for (
                    l.save(),
                      s = h.elements,
                      "st" === o || "gs" === o
                        ? ((m.strokeStyle = "st" === o ? h.co : h.grd),
                          (m.lineWidth = h.wi),
                          (m.lineCap = h.lc),
                          (m.lineJoin = h.lj),
                          (m.miterLimit = h.ml || 0))
                        : (m.fillStyle = "fl" === o ? h.co : h.grd),
                      l.ctxOpacity(h.coOp),
                      "st" !== o && "gs" !== o && m.beginPath(),
                      l.ctxTransform(h.preTransforms.finalTransform.props),
                      i = s.length,
                      e = 0;
                    e < i;
                    e += 1
                  ) {
                    for (
                      ("st" !== o && "gs" !== o) ||
                        (m.beginPath(),
                        h.da &&
                          (m.setLineDash(h.da), (m.lineDashOffset = h.do))),
                        a = (n = s[e].trNodes).length,
                        r = 0;
                      r < a;
                      r += 1
                    )
                      "m" == n[r].t
                        ? m.moveTo(n[r].p[0], n[r].p[1])
                        : "c" == n[r].t
                        ? m.bezierCurveTo(
                            n[r].pts[0],
                            n[r].pts[1],
                            n[r].pts[2],
                            n[r].pts[3],
                            n[r].pts[4],
                            n[r].pts[5]
                          )
                        : m.closePath();
                    ("st" !== o && "gs" !== o) ||
                      (m.stroke(), h.da && m.setLineDash(this.dashResetter));
                  }
                  "st" !== o && "gs" !== o && m.fill(h.r), l.restore();
                }
            }),
            (CVShapeElement.prototype.renderShape = function (t, e, i, r) {
              var a, s;
              for (s = t, a = e.length - 1; 0 <= a; a -= 1)
                "tr" == e[a].ty
                  ? ((s = i[a].transform), this.renderShapeTransform(t, s))
                  : "sh" == e[a].ty ||
                    "el" == e[a].ty ||
                    "rc" == e[a].ty ||
                    "sr" == e[a].ty
                  ? this.renderPath(e[a], i[a])
                  : "fl" == e[a].ty
                  ? this.renderFill(e[a], i[a], s)
                  : "st" == e[a].ty
                  ? this.renderStroke(e[a], i[a], s)
                  : "gf" == e[a].ty || "gs" == e[a].ty
                  ? this.renderGradientFill(e[a], i[a], s)
                  : "gr" == e[a].ty
                  ? this.renderShape(s, e[a].it, i[a].it)
                  : e[a].ty;
              r && this.drawLayer();
            }),
            (CVShapeElement.prototype.renderStyledShape = function (t, e) {
              if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                var i,
                  r,
                  a,
                  s = t.trNodes,
                  n = e.paths,
                  o = n._length;
                s.length = 0;
                var h = t.transforms.finalTransform;
                for (a = 0; a < o; a += 1) {
                  var p = n.shapes[a];
                  if (p && p.v) {
                    for (r = p._length, i = 1; i < r; i += 1)
                      1 === i &&
                        s.push({
                          t: "m",
                          p: h.applyToPointArray(p.v[0][0], p.v[0][1], 0),
                        }),
                        s.push({
                          t: "c",
                          pts: h.applyToTriplePoints(
                            p.o[i - 1],
                            p.i[i],
                            p.v[i]
                          ),
                        });
                    1 === r &&
                      s.push({
                        t: "m",
                        p: h.applyToPointArray(p.v[0][0], p.v[0][1], 0),
                      }),
                      p.c &&
                        r &&
                        (s.push({
                          t: "c",
                          pts: h.applyToTriplePoints(
                            p.o[i - 1],
                            p.i[0],
                            p.v[0]
                          ),
                        }),
                        s.push({ t: "z" }));
                  }
                }
                t.trNodes = s;
              }
            }),
            (CVShapeElement.prototype.renderPath = function (t, e) {
              if (!0 !== t.hd && t._shouldRender) {
                var i,
                  r = e.styledShapes.length;
                for (i = 0; i < r; i += 1)
                  this.renderStyledShape(e.styledShapes[i], e.sh);
              }
            }),
            (CVShapeElement.prototype.renderFill = function (t, e, i) {
              var r = e.style;
              (e.c._mdf || this._isFirstFrame) &&
                (r.co =
                  "rgb(" +
                  bm_floor(e.c.v[0]) +
                  "," +
                  bm_floor(e.c.v[1]) +
                  "," +
                  bm_floor(e.c.v[2]) +
                  ")"),
                (e.o._mdf || i._opMdf || this._isFirstFrame) &&
                  (r.coOp = e.o.v * i.opacity);
            }),
            (CVShapeElement.prototype.renderGradientFill = function (t, e, i) {
              var r = e.style;
              if (
                !r.grd ||
                e.g._mdf ||
                e.s._mdf ||
                e.e._mdf ||
                (1 !== t.t && (e.h._mdf || e.a._mdf))
              ) {
                var a = this.globalData.canvasContext,
                  s = e.s.v,
                  n = e.e.v;
                if (1 === t.t)
                  c = a.createLinearGradient(s[0], s[1], n[0], n[1]);
                else
                  var o = Math.sqrt(
                      Math.pow(s[0] - n[0], 2) + Math.pow(s[1] - n[1], 2)
                    ),
                    h = Math.atan2(n[1] - s[1], n[0] - s[0]),
                    p = o * (1 <= e.h.v ? 0.99 : e.h.v <= -1 ? -0.99 : e.h.v),
                    l = Math.cos(h + e.a.v) * p + s[0],
                    m = Math.sin(h + e.a.v) * p + s[1],
                    c = a.createRadialGradient(l, m, 0, s[0], s[1], o);
                var f,
                  d = t.g.p,
                  u = e.g.c,
                  y = 1;
                for (f = 0; f < d; f += 1)
                  e.g._hasOpacity && e.g._collapsable && (y = e.g.o[2 * f + 1]),
                    c.addColorStop(
                      u[4 * f] / 100,
                      "rgba(" +
                        u[4 * f + 1] +
                        "," +
                        u[4 * f + 2] +
                        "," +
                        u[4 * f + 3] +
                        "," +
                        y +
                        ")"
                    );
                r.grd = c;
              }
              r.coOp = e.o.v * i.opacity;
            }),
            (CVShapeElement.prototype.renderStroke = function (t, e, i) {
              var r = e.style,
                a = e.d;
              a &&
                (a._mdf || this._isFirstFrame) &&
                ((r.da = a.dashArray), (r.do = a.dashoffset[0])),
                (e.c._mdf || this._isFirstFrame) &&
                  (r.co =
                    "rgb(" +
                    bm_floor(e.c.v[0]) +
                    "," +
                    bm_floor(e.c.v[1]) +
                    "," +
                    bm_floor(e.c.v[2]) +
                    ")"),
                (e.o._mdf || i._opMdf || this._isFirstFrame) &&
                  (r.coOp = e.o.v * i.opacity),
                (e.w._mdf || this._isFirstFrame) && (r.wi = e.w.v);
            }),
            (CVShapeElement.prototype.destroy = function () {
              (this.shapesData = null),
                (this.globalData = null),
                (this.canvasContext = null),
                (this.stylesList.length = 0),
                (this.itemsData.length = 0);
            }),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                CVBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableElement,
              ],
              CVSolidElement
            ),
            (CVSolidElement.prototype.initElement =
              SVGShapeElement.prototype.initElement),
            (CVSolidElement.prototype.prepareFrame =
              IImageElement.prototype.prepareFrame),
            (CVSolidElement.prototype.renderInnerContent = function () {
              var t = this.canvasContext;
              (t.fillStyle = this.data.sc),
                t.fillRect(0, 0, this.data.sw, this.data.sh);
            }),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                CVBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableElement,
                ITextElement,
              ],
              CVTextElement
            ),
            (CVTextElement.prototype.tHelper = createTag("canvas").getContext(
              "2d"
            )),
            (CVTextElement.prototype.buildNewText = function () {
              var t = this.textProperty.currentData;
              this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
              var e = !1;
              t.fc
                ? ((e = !0), (this.values.fill = this.buildColor(t.fc)))
                : (this.values.fill = "rgba(0,0,0,0)"),
                (this.fill = e);
              var i = !1;
              t.sc &&
                ((i = !0),
                (this.values.stroke = this.buildColor(t.sc)),
                (this.values.sWidth = t.sw));
              var r,
                a,
                s = this.globalData.fontManager.getFontByName(t.f),
                n = t.l,
                o = this.mHelper;
              (this.stroke = i),
                (this.values.fValue =
                  t.finalSize +
                  "px " +
                  this.globalData.fontManager.getFontByName(t.f).fFamily),
                (a = t.finalText.length);
              var h,
                p,
                l,
                m,
                c,
                f,
                d,
                u,
                y,
                g,
                x = this.data.singleShape,
                v = (t.tr / 1e3) * t.finalSize,
                k = 0,
                b = 0,
                E = !0,
                S = 0;
              for (r = 0; r < a; r += 1) {
                for (
                  p =
                    ((h = this.globalData.fontManager.getCharData(
                      t.finalText[r],
                      s.fStyle,
                      this.globalData.fontManager.getFontByName(t.f).fFamily
                    )) &&
                      h.data) ||
                    {},
                    o.reset(),
                    x &&
                      n[r].n &&
                      ((k = -v), (b += t.yOffset), (b += E ? 1 : 0), (E = !1)),
                    d = (c = p.shapes ? p.shapes[0].it : []).length,
                    o.scale(t.finalSize / 100, t.finalSize / 100),
                    x &&
                      this.applyTextPropertiesToMatrix(t, o, n[r].line, k, b),
                    y = createSizedArray(d),
                    f = 0;
                  f < d;
                  f += 1
                ) {
                  for (
                    m = c[f].ks.k.i.length, u = c[f].ks.k, g = [], l = 1;
                    l < m;
                    l += 1
                  )
                    1 == l &&
                      g.push(
                        o.applyToX(u.v[0][0], u.v[0][1], 0),
                        o.applyToY(u.v[0][0], u.v[0][1], 0)
                      ),
                      g.push(
                        o.applyToX(u.o[l - 1][0], u.o[l - 1][1], 0),
                        o.applyToY(u.o[l - 1][0], u.o[l - 1][1], 0),
                        o.applyToX(u.i[l][0], u.i[l][1], 0),
                        o.applyToY(u.i[l][0], u.i[l][1], 0),
                        o.applyToX(u.v[l][0], u.v[l][1], 0),
                        o.applyToY(u.v[l][0], u.v[l][1], 0)
                      );
                  g.push(
                    o.applyToX(u.o[l - 1][0], u.o[l - 1][1], 0),
                    o.applyToY(u.o[l - 1][0], u.o[l - 1][1], 0),
                    o.applyToX(u.i[0][0], u.i[0][1], 0),
                    o.applyToY(u.i[0][0], u.i[0][1], 0),
                    o.applyToX(u.v[0][0], u.v[0][1], 0),
                    o.applyToY(u.v[0][0], u.v[0][1], 0)
                  ),
                    (y[f] = g);
                }
                x && ((k += n[r].l), (k += v)),
                  this.textSpans[S]
                    ? (this.textSpans[S].elem = y)
                    : (this.textSpans[S] = { elem: y }),
                  (S += 1);
              }
            }),
            (CVTextElement.prototype.renderInnerContent = function () {
              var t,
                e,
                i,
                r,
                a,
                s,
                n = this.canvasContext;
              this.finalTransform.mat.props,
                (n.font = this.values.fValue),
                (n.lineCap = "butt"),
                (n.lineJoin = "miter"),
                (n.miterLimit = 4),
                this.data.singleShape ||
                  this.textAnimator.getMeasures(
                    this.textProperty.currentData,
                    this.lettersChangedFlag
                  );
              var o,
                h = this.textAnimator.renderedLetters,
                p = this.textProperty.currentData.l;
              e = p.length;
              var l,
                m,
                c = null,
                f = null,
                d = null;
              for (t = 0; t < e; t += 1)
                if (!p[t].n) {
                  if (
                    ((o = h[t]) &&
                      (this.globalData.renderer.save(),
                      this.globalData.renderer.ctxTransform(o.p),
                      this.globalData.renderer.ctxOpacity(o.o)),
                    this.fill)
                  ) {
                    for (
                      o && o.fc
                        ? c !== o.fc && ((c = o.fc), (n.fillStyle = o.fc))
                        : c !== this.values.fill &&
                          ((c = this.values.fill),
                          (n.fillStyle = this.values.fill)),
                        r = (l = this.textSpans[t].elem).length,
                        this.globalData.canvasContext.beginPath(),
                        i = 0;
                      i < r;
                      i += 1
                    )
                      for (
                        s = (m = l[i]).length,
                          this.globalData.canvasContext.moveTo(m[0], m[1]),
                          a = 2;
                        a < s;
                        a += 6
                      )
                        this.globalData.canvasContext.bezierCurveTo(
                          m[a],
                          m[a + 1],
                          m[a + 2],
                          m[a + 3],
                          m[a + 4],
                          m[a + 5]
                        );
                    this.globalData.canvasContext.closePath(),
                      this.globalData.canvasContext.fill();
                  }
                  if (this.stroke) {
                    for (
                      o && o.sw
                        ? d !== o.sw && ((d = o.sw), (n.lineWidth = o.sw))
                        : d !== this.values.sWidth &&
                          ((d = this.values.sWidth),
                          (n.lineWidth = this.values.sWidth)),
                        o && o.sc
                          ? f !== o.sc && ((f = o.sc), (n.strokeStyle = o.sc))
                          : f !== this.values.stroke &&
                            ((f = this.values.stroke),
                            (n.strokeStyle = this.values.stroke)),
                        r = (l = this.textSpans[t].elem).length,
                        this.globalData.canvasContext.beginPath(),
                        i = 0;
                      i < r;
                      i += 1
                    )
                      for (
                        s = (m = l[i]).length,
                          this.globalData.canvasContext.moveTo(m[0], m[1]),
                          a = 2;
                        a < s;
                        a += 6
                      )
                        this.globalData.canvasContext.bezierCurveTo(
                          m[a],
                          m[a + 1],
                          m[a + 2],
                          m[a + 3],
                          m[a + 4],
                          m[a + 5]
                        );
                    this.globalData.canvasContext.closePath(),
                      this.globalData.canvasContext.stroke();
                  }
                  o && this.globalData.renderer.restore();
                }
            }),
            (CVEffects.prototype.renderFrame = function () {}),
            (HBaseElement.prototype = {
              checkBlendMode: function () {},
              initRendererElement: function () {
                (this.baseElement = createTag(this.data.tg || "div")),
                  this.data.hasMask
                    ? ((this.svgElement = createNS("svg")),
                      (this.layerElement = createNS("g")),
                      (this.maskedElement = this.layerElement),
                      this.svgElement.appendChild(this.layerElement),
                      this.baseElement.appendChild(this.svgElement))
                    : (this.layerElement = this.baseElement),
                  styleDiv(this.baseElement);
              },
              createContainerElements: function () {
                (this.renderableEffectsManager = new CVEffects(this)),
                  (this.transformedElement = this.baseElement),
                  (this.maskedElement = this.layerElement),
                  this.data.ln &&
                    this.layerElement.setAttribute("id", this.data.ln),
                  this.data.cl &&
                    this.layerElement.setAttribute("class", this.data.cl),
                  0 !== this.data.bm && this.setBlendMode();
              },
              renderElement: function () {
                this.finalTransform._matMdf &&
                  (this.transformedElement.style.transform = this.transformedElement.style.webkitTransform = this.finalTransform.mat.toCSS()),
                  this.finalTransform._opMdf &&
                    (this.transformedElement.style.opacity = this.finalTransform.mProp.o.v);
              },
              renderFrame: function () {
                this.data.hd ||
                  this.hidden ||
                  (this.renderTransform(),
                  this.renderRenderable(),
                  this.renderElement(),
                  this.renderInnerContent(),
                  this._isFirstFrame && (this._isFirstFrame = !1));
              },
              destroy: function () {
                (this.layerElement = null),
                  (this.transformedElement = null),
                  this.matteElement && (this.matteElement = null),
                  this.maskManager &&
                    (this.maskManager.destroy(), (this.maskManager = null));
              },
              createRenderableComponents: function () {
                this.maskManager = new MaskElement(
                  this.data,
                  this,
                  this.globalData
                );
              },
              addEffects: function () {},
              setMatte: function () {},
            }),
            (HBaseElement.prototype.getBaseElement =
              SVGBaseElement.prototype.getBaseElement),
            (HBaseElement.prototype.destroyBaseElement =
              HBaseElement.prototype.destroy),
            (HBaseElement.prototype.buildElementParenting =
              HybridRenderer.prototype.buildElementParenting),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                HBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement,
              ],
              HSolidElement
            ),
            (HSolidElement.prototype.createContent = function () {
              var t;
              this.data.hasMask
                ? ((t = createNS("rect")).setAttribute("width", this.data.sw),
                  t.setAttribute("height", this.data.sh),
                  t.setAttribute("fill", this.data.sc),
                  this.svgElement.setAttribute("width", this.data.sw),
                  this.svgElement.setAttribute("height", this.data.sh))
                : (((t = createTag("div")).style.width = this.data.sw + "px"),
                  (t.style.height = this.data.sh + "px"),
                  (t.style.backgroundColor = this.data.sc)),
                this.layerElement.appendChild(t);
            }),
            extendPrototype(
              [HybridRenderer, ICompElement, HBaseElement],
              HCompElement
            ),
            (HCompElement.prototype._createBaseContainerElements =
              HCompElement.prototype.createContainerElements),
            (HCompElement.prototype.createContainerElements = function () {
              this._createBaseContainerElements(),
                this.data.hasMask
                  ? (this.svgElement.setAttribute("width", this.data.w),
                    this.svgElement.setAttribute("height", this.data.h),
                    (this.transformedElement = this.baseElement))
                  : (this.transformedElement = this.layerElement);
            }),
            (HCompElement.prototype.addTo3dContainer = function (t, e) {
              for (var i, r = 0; r < e; )
                this.elements[r] &&
                  this.elements[r].getBaseElement &&
                  (i = this.elements[r].getBaseElement()),
                  (r += 1);
              i
                ? this.layerElement.insertBefore(t, i)
                : this.layerElement.appendChild(t);
            }),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                HSolidElement,
                SVGShapeElement,
                HBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableElement,
              ],
              HShapeElement
            ),
            (HShapeElement.prototype._renderShapeFrame =
              HShapeElement.prototype.renderInnerContent),
            (HShapeElement.prototype.createContent = function () {
              var t;
              if (((this.baseElement.style.fontSize = 0), this.data.hasMask))
                this.layerElement.appendChild(this.shapesContainer),
                  (t = this.svgElement);
              else {
                t = createNS("svg");
                var e = this.comp.data
                  ? this.comp.data
                  : this.globalData.compSize;
                t.setAttribute("width", e.w),
                  t.setAttribute("height", e.h),
                  t.appendChild(this.shapesContainer),
                  this.layerElement.appendChild(t);
              }
              this.searchShapes(
                this.shapesData,
                this.itemsData,
                this.prevViewData,
                this.shapesContainer,
                0,
                [],
                !0
              ),
                this.filterUniqueShapes(),
                (this.shapeCont = t);
            }),
            (HShapeElement.prototype.getTransformedPoint = function (t, e) {
              var i,
                r = t.length;
              for (i = 0; i < r; i += 1)
                e = t[i].mProps.v.applyToPointArray(e[0], e[1], 0);
              return e;
            }),
            (HShapeElement.prototype.calculateShapeBoundingBox = function (
              t,
              e
            ) {
              var i,
                r,
                a,
                s,
                n,
                o = t.sh.v,
                h = t.transformers,
                p = o._length;
              if (!(p <= 1)) {
                for (i = 0; i < p - 1; i += 1)
                  (r = this.getTransformedPoint(h, o.v[i])),
                    (a = this.getTransformedPoint(h, o.o[i])),
                    (s = this.getTransformedPoint(h, o.i[i + 1])),
                    (n = this.getTransformedPoint(h, o.v[i + 1])),
                    this.checkBounds(r, a, s, n, e);
                o.c &&
                  ((r = this.getTransformedPoint(h, o.v[i])),
                  (a = this.getTransformedPoint(h, o.o[i])),
                  (s = this.getTransformedPoint(h, o.i[0])),
                  (n = this.getTransformedPoint(h, o.v[0])),
                  this.checkBounds(r, a, s, n, e));
              }
            }),
            (HShapeElement.prototype.checkBounds = function (t, e, i, r, a) {
              this.getBoundsOfCurve(t, e, i, r);
              var s = this.shapeBoundingBox;
              (a.x = bm_min(s.left, a.x)),
                (a.xMax = bm_max(s.right, a.xMax)),
                (a.y = bm_min(s.top, a.y)),
                (a.yMax = bm_max(s.bottom, a.yMax));
            }),
            (HShapeElement.prototype.shapeBoundingBox = {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }),
            (HShapeElement.prototype.tempBoundingBox = {
              x: 0,
              xMax: 0,
              y: 0,
              yMax: 0,
              width: 0,
              height: 0,
            }),
            (HShapeElement.prototype.getBoundsOfCurve = function (t, e, i, r) {
              for (
                var a,
                  s,
                  n,
                  o,
                  h,
                  p,
                  l,
                  m = [
                    [t[0], r[0]],
                    [t[1], r[1]],
                  ],
                  c = 0;
                c < 2;
                ++c
              )
                if (
                  ((s = 6 * t[c] - 12 * e[c] + 6 * i[c]),
                  (a = -3 * t[c] + 9 * e[c] - 9 * i[c] + 3 * r[c]),
                  (n = 3 * e[c] - 3 * t[c]),
                  (s |= 0),
                  (n |= 0),
                  0 != (a |= 0))
                )
                  (h = s * s - 4 * n * a) < 0 ||
                    (0 < (p = (-s + bm_sqrt(h)) / (2 * a)) &&
                      p < 1 &&
                      m[c].push(this.calculateF(p, t, e, i, r, c)),
                    0 < (l = (-s - bm_sqrt(h)) / (2 * a)) &&
                      l < 1 &&
                      m[c].push(this.calculateF(l, t, e, i, r, c)));
                else {
                  if (0 === s) continue;
                  0 < (o = -n / s) &&
                    o < 1 &&
                    m[c].push(this.calculateF(o, t, e, i, r, c));
                }
              (this.shapeBoundingBox.left = bm_min.apply(null, m[0])),
                (this.shapeBoundingBox.top = bm_min.apply(null, m[1])),
                (this.shapeBoundingBox.right = bm_max.apply(null, m[0])),
                (this.shapeBoundingBox.bottom = bm_max.apply(null, m[1]));
            }),
            (HShapeElement.prototype.calculateF = function (t, e, i, r, a, s) {
              return (
                bm_pow(1 - t, 3) * e[s] +
                3 * bm_pow(1 - t, 2) * t * i[s] +
                3 * (1 - t) * bm_pow(t, 2) * r[s] +
                bm_pow(t, 3) * a[s]
              );
            }),
            (HShapeElement.prototype.calculateBoundingBox = function (t, e) {
              var i,
                r = t.length;
              for (i = 0; i < r; i += 1)
                t[i] && t[i].sh
                  ? this.calculateShapeBoundingBox(t[i], e)
                  : t[i] && t[i].it && this.calculateBoundingBox(t[i].it, e);
            }),
            (HShapeElement.prototype.currentBoxContains = function (t) {
              return (
                this.currentBBox.x <= t.x &&
                this.currentBBox.y <= t.y &&
                this.currentBBox.width + this.currentBBox.x >= t.x + t.width &&
                this.currentBBox.height + this.currentBBox.y >= t.y + t.height
              );
            }),
            (HShapeElement.prototype.renderInnerContent = function () {
              if (
                (this._renderShapeFrame(),
                !this.hidden && (this._isFirstFrame || this._mdf))
              ) {
                var t = this.tempBoundingBox,
                  e = 999999;
                if (
                  ((t.x = e),
                  (t.xMax = -e),
                  (t.y = e),
                  (t.yMax = -e),
                  this.calculateBoundingBox(this.itemsData, t),
                  (t.width = t.xMax < t.x ? 0 : t.xMax - t.x),
                  (t.height = t.yMax < t.y ? 0 : t.yMax - t.y),
                  this.currentBoxContains(t))
                )
                  return;
                var i = !1;
                this.currentBBox.w !== t.width &&
                  ((this.currentBBox.w = t.width),
                  this.shapeCont.setAttribute("width", t.width),
                  (i = !0)),
                  this.currentBBox.h !== t.height &&
                    ((this.currentBBox.h = t.height),
                    this.shapeCont.setAttribute("height", t.height),
                    (i = !0)),
                  (i ||
                    this.currentBBox.x !== t.x ||
                    this.currentBBox.y !== t.y) &&
                    ((this.currentBBox.w = t.width),
                    (this.currentBBox.h = t.height),
                    (this.currentBBox.x = t.x),
                    (this.currentBBox.y = t.y),
                    this.shapeCont.setAttribute(
                      "viewBox",
                      this.currentBBox.x +
                        " " +
                        this.currentBBox.y +
                        " " +
                        this.currentBBox.w +
                        " " +
                        this.currentBBox.h
                    ),
                    (this.shapeCont.style.transform = this.shapeCont.style.webkitTransform =
                      "translate(" +
                      this.currentBBox.x +
                      "px," +
                      this.currentBBox.y +
                      "px)"));
              }
            }),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                HBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement,
                ITextElement,
              ],
              HTextElement
            ),
            (HTextElement.prototype.createContent = function () {
              if (((this.isMasked = this.checkMasks()), this.isMasked)) {
                (this.renderType = "svg"),
                  (this.compW = this.comp.data.w),
                  (this.compH = this.comp.data.h),
                  this.svgElement.setAttribute("width", this.compW),
                  this.svgElement.setAttribute("height", this.compH);
                var t = createNS("g");
                this.maskedElement.appendChild(t), (this.innerElem = t);
              } else
                (this.renderType = "html"),
                  (this.innerElem = this.layerElement);
              this.checkParenting();
            }),
            (HTextElement.prototype.buildNewText = function () {
              var t = this.textProperty.currentData;
              this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
              var e = this.innerElem.style;
              (e.color = e.fill = t.fc
                ? this.buildColor(t.fc)
                : "rgba(0,0,0,0)"),
                t.sc &&
                  ((e.stroke = this.buildColor(t.sc)),
                  (e.strokeWidth = t.sw + "px"));
              var i,
                r,
                a = this.globalData.fontManager.getFontByName(t.f);
              if (!this.globalData.fontManager.chars)
                if (
                  ((e.fontSize = t.finalSize + "px"),
                  (e.lineHeight = t.finalSize + "px"),
                  a.fClass)
                )
                  this.innerElem.className = a.fClass;
                else {
                  e.fontFamily = a.fFamily;
                  var s = t.fWeight,
                    n = t.fStyle;
                  (e.fontStyle = n), (e.fontWeight = s);
                }
              var o,
                h,
                p,
                l = t.l;
              r = l.length;
              var m,
                c = this.mHelper,
                f = "",
                d = 0;
              for (i = 0; i < r; i += 1) {
                if (
                  (this.globalData.fontManager.chars
                    ? (this.textPaths[d]
                        ? (o = this.textPaths[d])
                        : ((o = createNS("path")).setAttribute(
                            "stroke-linecap",
                            "butt"
                          ),
                          o.setAttribute("stroke-linejoin", "round"),
                          o.setAttribute("stroke-miterlimit", "4")),
                      this.isMasked ||
                        (this.textSpans[d]
                          ? (p = (h = this.textSpans[d]).children[0])
                          : (((h = createTag("div")).style.lineHeight = 0),
                            (p = createNS("svg")).appendChild(o),
                            styleDiv(h))))
                    : this.isMasked
                    ? (o = this.textPaths[d]
                        ? this.textPaths[d]
                        : createNS("text"))
                    : this.textSpans[d]
                    ? ((h = this.textSpans[d]), (o = this.textPaths[d]))
                    : (styleDiv((h = createTag("span"))),
                      styleDiv((o = createTag("span"))),
                      h.appendChild(o)),
                  this.globalData.fontManager.chars)
                ) {
                  var u,
                    y = this.globalData.fontManager.getCharData(
                      t.finalText[i],
                      a.fStyle,
                      this.globalData.fontManager.getFontByName(t.f).fFamily
                    );
                  if (
                    ((u = y ? y.data : null),
                    c.reset(),
                    u &&
                      u.shapes &&
                      ((m = u.shapes[0].it),
                      c.scale(t.finalSize / 100, t.finalSize / 100),
                      (f = this.createPathShape(c, m)),
                      o.setAttribute("d", f)),
                    this.isMasked)
                  )
                    this.innerElem.appendChild(o);
                  else {
                    if ((this.innerElem.appendChild(h), u && u.shapes)) {
                      document.body.appendChild(p);
                      var g = p.getBBox();
                      p.setAttribute("width", g.width + 2),
                        p.setAttribute("height", g.height + 2),
                        p.setAttribute(
                          "viewBox",
                          g.x -
                            1 +
                            " " +
                            (g.y - 1) +
                            " " +
                            (g.width + 2) +
                            " " +
                            (g.height + 2)
                        ),
                        (p.style.transform = p.style.webkitTransform =
                          "translate(" + (g.x - 1) + "px," + (g.y - 1) + "px)"),
                        (l[i].yOffset = g.y - 1);
                    } else
                      p.setAttribute("width", 1), p.setAttribute("height", 1);
                    h.appendChild(p);
                  }
                } else
                  (o.textContent = l[i].val),
                    o.setAttributeNS(
                      "http://www.w3.org/XML/1998/namespace",
                      "xml:space",
                      "preserve"
                    ),
                    this.isMasked
                      ? this.innerElem.appendChild(o)
                      : (this.innerElem.appendChild(h),
                        (o.style.transform = o.style.webkitTransform =
                          "translate3d(0," + -t.finalSize / 1.2 + "px,0)"));
                this.isMasked
                  ? (this.textSpans[d] = o)
                  : (this.textSpans[d] = h),
                  (this.textSpans[d].style.display = "block"),
                  (this.textPaths[d] = o),
                  (d += 1);
              }
              for (; d < this.textSpans.length; )
                (this.textSpans[d].style.display = "none"), (d += 1);
            }),
            (HTextElement.prototype.renderInnerContent = function () {
              if (this.data.singleShape) {
                if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                this.isMasked &&
                  this.finalTransform._matMdf &&
                  (this.svgElement.setAttribute(
                    "viewBox",
                    -this.finalTransform.mProp.p.v[0] +
                      " " +
                      -this.finalTransform.mProp.p.v[1] +
                      " " +
                      this.compW +
                      " " +
                      this.compH
                  ),
                  (this.svgElement.style.transform = this.svgElement.style.webkitTransform =
                    "translate(" +
                    -this.finalTransform.mProp.p.v[0] +
                    "px," +
                    -this.finalTransform.mProp.p.v[1] +
                    "px)"));
              }
              if (
                (this.textAnimator.getMeasures(
                  this.textProperty.currentData,
                  this.lettersChangedFlag
                ),
                this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)
              ) {
                var t,
                  e,
                  i,
                  r,
                  a,
                  s = 0,
                  n = this.textAnimator.renderedLetters,
                  o = this.textProperty.currentData.l;
                for (e = o.length, t = 0; t < e; t += 1)
                  o[t].n
                    ? (s += 1)
                    : ((r = this.textSpans[t]),
                      (a = this.textPaths[t]),
                      (i = n[s]),
                      (s += 1),
                      i._mdf.m &&
                        (this.isMasked
                          ? r.setAttribute("transform", i.m)
                          : (r.style.transform = r.style.webkitTransform =
                              i.m)),
                      (r.style.opacity = i.o),
                      i.sw && i._mdf.sw && a.setAttribute("stroke-width", i.sw),
                      i.sc && i._mdf.sc && a.setAttribute("stroke", i.sc),
                      i.fc &&
                        i._mdf.fc &&
                        (a.setAttribute("fill", i.fc), (a.style.color = i.fc)));
                if (
                  this.innerElem.getBBox &&
                  !this.hidden &&
                  (this._isFirstFrame || this._mdf)
                ) {
                  var h = this.innerElem.getBBox();
                  this.currentBBox.w !== h.width &&
                    ((this.currentBBox.w = h.width),
                    this.svgElement.setAttribute("width", h.width)),
                    this.currentBBox.h !== h.height &&
                      ((this.currentBBox.h = h.height),
                      this.svgElement.setAttribute("height", h.height)),
                    (this.currentBBox.w === h.width + 2 &&
                      this.currentBBox.h === h.height + 2 &&
                      this.currentBBox.x === h.x - 1 &&
                      this.currentBBox.y === h.y - 1) ||
                      ((this.currentBBox.w = h.width + 2),
                      (this.currentBBox.h = h.height + 2),
                      (this.currentBBox.x = h.x - 1),
                      (this.currentBBox.y = h.y - 1),
                      this.svgElement.setAttribute(
                        "viewBox",
                        this.currentBBox.x +
                          " " +
                          this.currentBBox.y +
                          " " +
                          this.currentBBox.w +
                          " " +
                          this.currentBBox.h
                      ),
                      (this.svgElement.style.transform = this.svgElement.style.webkitTransform =
                        "translate(" +
                        this.currentBBox.x +
                        "px," +
                        this.currentBBox.y +
                        "px)"));
                }
              }
            }),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                HBaseElement,
                HSolidElement,
                HierarchyElement,
                FrameElement,
                RenderableElement,
              ],
              HImageElement
            ),
            (HImageElement.prototype.createContent = function () {
              var t = this.globalData.getAssetsPath(this.assetData),
                e = new Image();
              this.data.hasMask
                ? ((this.imageElem = createNS("image")),
                  this.imageElem.setAttribute("width", this.assetData.w + "px"),
                  this.imageElem.setAttribute(
                    "height",
                    this.assetData.h + "px"
                  ),
                  this.imageElem.setAttributeNS(
                    "http://www.w3.org/1999/xlink",
                    "href",
                    t
                  ),
                  this.layerElement.appendChild(this.imageElem),
                  this.baseElement.setAttribute("width", this.assetData.w),
                  this.baseElement.setAttribute("height", this.assetData.h))
                : this.layerElement.appendChild(e),
                (e.src = t),
                this.data.ln &&
                  this.baseElement.setAttribute("id", this.data.ln);
            }),
            extendPrototype(
              [BaseElement, FrameElement, HierarchyElement],
              HCameraElement
            ),
            (HCameraElement.prototype.setup = function () {
              var t,
                e,
                i = this.comp.threeDElements.length;
              for (t = 0; t < i; t += 1)
                "3d" === (e = this.comp.threeDElements[t]).type &&
                  ((e.perspectiveElem.style.perspective = e.perspectiveElem.style.webkitPerspective =
                    this.pe.v + "px"),
                  (e.container.style.transformOrigin = e.container.style.mozTransformOrigin = e.container.style.webkitTransformOrigin =
                    "0px 0px 0px"),
                  (e.perspectiveElem.style.transform = e.perspectiveElem.style.webkitTransform =
                    "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"));
            }),
            (HCameraElement.prototype.createElements = function () {}),
            (HCameraElement.prototype.hide = function () {}),
            (HCameraElement.prototype.renderFrame = function () {
              var t,
                e,
                i = this._isFirstFrame;
              if (this.hierarchy)
                for (e = this.hierarchy.length, t = 0; t < e; t += 1)
                  i = this.hierarchy[t].finalTransform.mProp._mdf || i;
              if (
                i ||
                this.pe._mdf ||
                (this.p && this.p._mdf) ||
                (this.px && (this.px._mdf || this.py._mdf || this.pz._mdf)) ||
                this.rx._mdf ||
                this.ry._mdf ||
                this.rz._mdf ||
                this.or._mdf ||
                (this.a && this.a._mdf)
              ) {
                if ((this.mat.reset(), this.hierarchy))
                  for (t = e = this.hierarchy.length - 1; 0 <= t; t -= 1) {
                    var r = this.hierarchy[t].finalTransform.mProp;
                    this.mat.translate(-r.p.v[0], -r.p.v[1], r.p.v[2]),
                      this.mat
                        .rotateX(-r.or.v[0])
                        .rotateY(-r.or.v[1])
                        .rotateZ(r.or.v[2]),
                      this.mat
                        .rotateX(-r.rx.v)
                        .rotateY(-r.ry.v)
                        .rotateZ(r.rz.v),
                      this.mat.scale(1 / r.s.v[0], 1 / r.s.v[1], 1 / r.s.v[2]),
                      this.mat.translate(r.a.v[0], r.a.v[1], r.a.v[2]);
                  }
                if (
                  (this.p
                    ? this.mat.translate(
                        -this.p.v[0],
                        -this.p.v[1],
                        this.p.v[2]
                      )
                    : this.mat.translate(-this.px.v, -this.py.v, this.pz.v),
                  this.a)
                ) {
                  var a = [
                      this.p.v[0] - this.a.v[0],
                      this.p.v[1] - this.a.v[1],
                      this.p.v[2] - this.a.v[2],
                    ],
                    s = Math.sqrt(
                      Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2)
                    ),
                    n = [a[0] / s, a[1] / s, a[2] / s],
                    o = Math.sqrt(n[2] * n[2] + n[0] * n[0]),
                    h = Math.atan2(n[1], o),
                    p = Math.atan2(n[0], -n[2]);
                  this.mat.rotateY(p).rotateX(-h);
                }
                this.mat
                  .rotateX(-this.rx.v)
                  .rotateY(-this.ry.v)
                  .rotateZ(this.rz.v),
                  this.mat
                    .rotateX(-this.or.v[0])
                    .rotateY(-this.or.v[1])
                    .rotateZ(this.or.v[2]),
                  this.mat.translate(
                    this.globalData.compSize.w / 2,
                    this.globalData.compSize.h / 2,
                    0
                  ),
                  this.mat.translate(0, 0, this.pe.v);
                var l = !this._prevMat.equals(this.mat);
                if ((l || this.pe._mdf) && this.comp.threeDElements) {
                  var m;
                  for (
                    e = this.comp.threeDElements.length, t = 0;
                    t < e;
                    t += 1
                  )
                    "3d" === (m = this.comp.threeDElements[t]).type &&
                      (l &&
                        (m.container.style.transform = m.container.style.webkitTransform = this.mat.toCSS()),
                      this.pe._mdf &&
                        (m.perspectiveElem.style.perspective = m.perspectiveElem.style.webkitPerspective =
                          this.pe.v + "px"));
                  this.mat.clone(this._prevMat);
                }
              }
              this._isFirstFrame = !1;
            }),
            (HCameraElement.prototype.prepareFrame = function (t) {
              this.prepareProperties(t, !0);
            }),
            (HCameraElement.prototype.destroy = function () {}),
            (HCameraElement.prototype.getBaseElement = function () {
              return null;
            }),
            (HEffects.prototype.renderFrame = function () {});
          var animationManager = (function () {
              var t = {},
                e = [],
                i = 0,
                r = 0,
                a = 0,
                s = !0,
                n = !1;
              function o(t) {
                for (var i = 0, a = t.target; i < r; )
                  e[i].animation === a &&
                    (e.splice(i, 1), (i -= 1), (r -= 1), a.isPaused || l()),
                    (i += 1);
              }
              function h(t, i) {
                if (!t) return null;
                for (var a = 0; a < r; ) {
                  if (e[a].elem == t && null !== e[a].elem)
                    return e[a].animation;
                  a += 1;
                }
                var s = new AnimationItem();
                return m(s, t), s.setData(t, i), s;
              }
              function p() {
                (a += 1), d();
              }
              function l() {
                a -= 1;
              }
              function m(t, i) {
                t.addEventListener("destroy", o),
                  t.addEventListener("_active", p),
                  t.addEventListener("_idle", l),
                  e.push({ elem: i, animation: t }),
                  (r += 1);
              }
              function c(t) {
                var o,
                  h = t - i;
                for (o = 0; o < r; o += 1) e[o].animation.advanceTime(h);
                (i = t), a && !n ? window.requestAnimationFrame(c) : (s = !0);
              }
              function f(t) {
                (i = t), window.requestAnimationFrame(c);
              }
              function d() {
                !n && a && s && (window.requestAnimationFrame(f), (s = !1));
              }
              return (
                (t.registerAnimation = h),
                (t.loadAnimation = function (t) {
                  var e = new AnimationItem();
                  return m(e, null), e.setParams(t), e;
                }),
                (t.setSpeed = function (t, i) {
                  var a;
                  for (a = 0; a < r; a += 1) e[a].animation.setSpeed(t, i);
                }),
                (t.setDirection = function (t, i) {
                  var a;
                  for (a = 0; a < r; a += 1) e[a].animation.setDirection(t, i);
                }),
                (t.play = function (t) {
                  var i;
                  for (i = 0; i < r; i += 1) e[i].animation.play(t);
                }),
                (t.pause = function (t) {
                  var i;
                  for (i = 0; i < r; i += 1) e[i].animation.pause(t);
                }),
                (t.stop = function (t) {
                  var i;
                  for (i = 0; i < r; i += 1) e[i].animation.stop(t);
                }),
                (t.togglePause = function (t) {
                  var i;
                  for (i = 0; i < r; i += 1) e[i].animation.togglePause(t);
                }),
                (t.searchAnimations = function (t, e, i) {
                  var r,
                    a = [].concat(
                      [].slice.call(document.getElementsByClassName("lottie")),
                      [].slice.call(
                        document.getElementsByClassName("bodymovin")
                      )
                    ),
                    s = a.length;
                  for (r = 0; r < s; r += 1)
                    i && a[r].setAttribute("data-bm-type", i), h(a[r], t);
                  if (e && 0 === s) {
                    i || (i = "svg");
                    var n = document.getElementsByTagName("body")[0];
                    n.innerHTML = "";
                    var o = createTag("div");
                    (o.style.width = "100%"),
                      (o.style.height = "100%"),
                      o.setAttribute("data-bm-type", i),
                      n.appendChild(o),
                      h(o, t);
                  }
                }),
                (t.resize = function () {
                  var t;
                  for (t = 0; t < r; t += 1) e[t].animation.resize();
                }),
                (t.goToAndStop = function (t, i, a) {
                  var s;
                  for (s = 0; s < r; s += 1)
                    e[s].animation.goToAndStop(t, i, a);
                }),
                (t.destroy = function (t) {
                  var i;
                  for (i = r - 1; 0 <= i; i -= 1) e[i].animation.destroy(t);
                }),
                (t.freeze = function () {
                  n = !0;
                }),
                (t.unfreeze = function () {
                  (n = !1), d();
                }),
                (t.getRegisteredAnimations = function () {
                  var t,
                    i = e.length,
                    r = [];
                  for (t = 0; t < i; t += 1) r.push(e[t].animation);
                  return r;
                }),
                t
              );
            })(),
            AnimationItem = function () {
              (this._cbs = []),
                (this.name = ""),
                (this.path = ""),
                (this.isLoaded = !1),
                (this.currentFrame = 0),
                (this.currentRawFrame = 0),
                (this.totalFrames = 0),
                (this.frameRate = 0),
                (this.frameMult = 0),
                (this.playSpeed = 1),
                (this.playDirection = 1),
                (this.playCount = 0),
                (this.animationData = {}),
                (this.assets = []),
                (this.isPaused = !0),
                (this.autoplay = !1),
                (this.loop = !0),
                (this.renderer = null),
                (this.animationID = createElementID()),
                (this.assetsPath = ""),
                (this.timeCompleted = 0),
                (this.segmentPos = 0),
                (this.subframeEnabled = subframeEnabled),
                (this.segments = []),
                (this._idle = !0),
                (this._completedLoop = !1),
                (this.projectInterface = ProjectInterface()),
                (this.imagePreloader = new ImagePreloader());
            };
          extendPrototype([BaseEvent], AnimationItem),
            (AnimationItem.prototype.setParams = function (t) {
              t.context && (this.context = t.context),
                (t.wrapper || t.container) &&
                  (this.wrapper = t.wrapper || t.container);
              var e = t.animType ? t.animType : t.renderer ? t.renderer : "svg";
              switch (e) {
                case "canvas":
                  this.renderer = new CanvasRenderer(this, t.rendererSettings);
                  break;
                case "svg":
                  this.renderer = new SVGRenderer(this, t.rendererSettings);
                  break;
                default:
                  this.renderer = new HybridRenderer(this, t.rendererSettings);
              }
              this.renderer.setProjectInterface(this.projectInterface),
                (this.animType = e),
                "" === t.loop ||
                  null === t.loop ||
                  (!1 === t.loop
                    ? (this.loop = !1)
                    : !0 === t.loop
                    ? (this.loop = !0)
                    : (this.loop = parseInt(t.loop))),
                (this.autoplay = !("autoplay" in t) || t.autoplay),
                (this.name = t.name ? t.name : ""),
                (this.autoloadSegments =
                  !t.hasOwnProperty("autoloadSegments") || t.autoloadSegments),
                (this.assetsPath = t.assetsPath),
                t.animationData
                  ? this.configAnimation(t.animationData)
                  : t.path &&
                    ("json" != t.path.substr(-4) &&
                      ("/" != t.path.substr(-1, 1) && (t.path += "/"),
                      (t.path += "data.json")),
                    -1 != t.path.lastIndexOf("\\")
                      ? (this.path = t.path.substr(
                          0,
                          t.path.lastIndexOf("\\") + 1
                        ))
                      : (this.path = t.path.substr(
                          0,
                          t.path.lastIndexOf("/") + 1
                        )),
                    (this.fileName = t.path.substr(
                      t.path.lastIndexOf("/") + 1
                    )),
                    (this.fileName = this.fileName.substr(
                      0,
                      this.fileName.lastIndexOf(".json")
                    )),
                    assetLoader.load(
                      t.path,
                      this.configAnimation.bind(this),
                      function () {
                        this.trigger("data_failed");
                      }.bind(this)
                    ));
            }),
            (AnimationItem.prototype.setData = function (t, e) {
              var i = {
                  wrapper: t,
                  animationData: e
                    ? "object" ==
                      _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(
                        e
                      )
                      ? e
                      : JSON.parse(e)
                    : null,
                },
                r = t.attributes;
              (i.path = r.getNamedItem("data-animation-path")
                ? r.getNamedItem("data-animation-path").value
                : r.getNamedItem("data-bm-path")
                ? r.getNamedItem("data-bm-path").value
                : r.getNamedItem("bm-path")
                ? r.getNamedItem("bm-path").value
                : ""),
                (i.animType = r.getNamedItem("data-anim-type")
                  ? r.getNamedItem("data-anim-type").value
                  : r.getNamedItem("data-bm-type")
                  ? r.getNamedItem("data-bm-type").value
                  : r.getNamedItem("bm-type")
                  ? r.getNamedItem("bm-type").value
                  : r.getNamedItem("data-bm-renderer")
                  ? r.getNamedItem("data-bm-renderer").value
                  : r.getNamedItem("bm-renderer")
                  ? r.getNamedItem("bm-renderer").value
                  : "canvas");
              var a = r.getNamedItem("data-anim-loop")
                ? r.getNamedItem("data-anim-loop").value
                : r.getNamedItem("data-bm-loop")
                ? r.getNamedItem("data-bm-loop").value
                : r.getNamedItem("bm-loop")
                ? r.getNamedItem("bm-loop").value
                : "";
              "" === a ||
                (i.loop = "false" !== a && ("true" === a || parseInt(a)));
              var s = r.getNamedItem("data-anim-autoplay")
                ? r.getNamedItem("data-anim-autoplay").value
                : r.getNamedItem("data-bm-autoplay")
                ? r.getNamedItem("data-bm-autoplay").value
                : !r.getNamedItem("bm-autoplay") ||
                  r.getNamedItem("bm-autoplay").value;
              (i.autoplay = "false" !== s),
                (i.name = r.getNamedItem("data-name")
                  ? r.getNamedItem("data-name").value
                  : r.getNamedItem("data-bm-name")
                  ? r.getNamedItem("data-bm-name").value
                  : r.getNamedItem("bm-name")
                  ? r.getNamedItem("bm-name").value
                  : ""),
                "false" ===
                  (r.getNamedItem("data-anim-prerender")
                    ? r.getNamedItem("data-anim-prerender").value
                    : r.getNamedItem("data-bm-prerender")
                    ? r.getNamedItem("data-bm-prerender").value
                    : r.getNamedItem("bm-prerender")
                    ? r.getNamedItem("bm-prerender").value
                    : "") && (i.prerender = !1),
                this.setParams(i);
            }),
            (AnimationItem.prototype.includeLayers = function (t) {
              t.op > this.animationData.op &&
                ((this.animationData.op = t.op),
                (this.totalFrames = Math.floor(t.op - this.animationData.ip)));
              var e,
                i,
                r = this.animationData.layers,
                a = r.length,
                s = t.layers,
                n = s.length;
              for (i = 0; i < n; i += 1)
                for (e = 0; e < a; ) {
                  if (r[e].id == s[i].id) {
                    r[e] = s[i];
                    break;
                  }
                  e += 1;
                }
              if (
                ((t.chars || t.fonts) &&
                  (this.renderer.globalData.fontManager.addChars(t.chars),
                  this.renderer.globalData.fontManager.addFonts(
                    t.fonts,
                    this.renderer.globalData.defs
                  )),
                t.assets)
              )
                for (a = t.assets.length, e = 0; e < a; e += 1)
                  this.animationData.assets.push(t.assets[e]);
              (this.animationData.__complete = !1),
                dataManager.completeData(
                  this.animationData,
                  this.renderer.globalData.fontManager
                ),
                this.renderer.includeLayers(t.layers),
                expressionsPlugin && expressionsPlugin.initExpressions(this),
                this.loadNextSegment();
            }),
            (AnimationItem.prototype.loadNextSegment = function () {
              var t = this.animationData.segments;
              if (!t || 0 === t.length || !this.autoloadSegments)
                return (
                  this.trigger("data_ready"),
                  void (this.timeCompleted = this.totalFrames)
                );
              var e = t.shift();
              this.timeCompleted = e.time * this.frameRate;
              var i =
                this.path + this.fileName + "_" + this.segmentPos + ".json";
              (this.segmentPos += 1),
                assetLoader.load(
                  i,
                  this.includeLayers.bind(this),
                  function () {
                    this.trigger("data_failed");
                  }.bind(this)
                );
            }),
            (AnimationItem.prototype.loadSegments = function () {
              this.animationData.segments ||
                (this.timeCompleted = this.totalFrames),
                this.loadNextSegment();
            }),
            (AnimationItem.prototype.imagesLoaded = function () {
              this.trigger("loaded_images"), this.checkLoaded();
            }),
            (AnimationItem.prototype.preloadImages = function () {
              this.imagePreloader.setAssetsPath(this.assetsPath),
                this.imagePreloader.setPath(this.path),
                this.imagePreloader.loadAssets(
                  this.animationData.assets,
                  this.imagesLoaded.bind(this)
                );
            }),
            (AnimationItem.prototype.configAnimation = function (t) {
              this.renderer &&
                ((this.animationData = t),
                (this.totalFrames = Math.floor(
                  this.animationData.op - this.animationData.ip
                )),
                this.renderer.configAnimation(t),
                t.assets || (t.assets = []),
                this.renderer.searchExtraCompositions(t.assets),
                (this.assets = this.animationData.assets),
                (this.frameRate = this.animationData.fr),
                (this.firstFrame = Math.round(this.animationData.ip)),
                (this.frameMult = this.animationData.fr / 1e3),
                this.trigger("config_ready"),
                this.preloadImages(),
                this.loadSegments(),
                this.updaFrameModifier(),
                this.waitForFontsLoaded());
            }),
            (AnimationItem.prototype.waitForFontsLoaded = function () {
              this.renderer &&
                (this.renderer.globalData.fontManager.loaded()
                  ? this.checkLoaded()
                  : setTimeout(this.waitForFontsLoaded.bind(this), 20));
            }),
            (AnimationItem.prototype.checkLoaded = function () {
              this.isLoaded ||
                !this.renderer.globalData.fontManager.loaded() ||
                (!this.imagePreloader.loaded() &&
                  "canvas" === this.renderer.rendererType) ||
                ((this.isLoaded = !0),
                dataManager.completeData(
                  this.animationData,
                  this.renderer.globalData.fontManager
                ),
                expressionsPlugin && expressionsPlugin.initExpressions(this),
                this.renderer.initItems(),
                setTimeout(
                  function () {
                    this.trigger("DOMLoaded");
                  }.bind(this),
                  0
                ),
                this.gotoFrame(),
                this.autoplay && this.play());
            }),
            (AnimationItem.prototype.resize = function () {
              this.renderer.updateContainerSize();
            }),
            (AnimationItem.prototype.setSubframe = function (t) {
              this.subframeEnabled = !!t;
            }),
            (AnimationItem.prototype.gotoFrame = function () {
              (this.currentFrame = this.subframeEnabled
                ? this.currentRawFrame
                : ~~this.currentRawFrame),
                this.timeCompleted !== this.totalFrames &&
                  this.currentFrame > this.timeCompleted &&
                  (this.currentFrame = this.timeCompleted),
                this.trigger("enterFrame"),
                this.renderFrame();
            }),
            (AnimationItem.prototype.renderFrame = function () {
              !1 !== this.isLoaded &&
                this.renderer.renderFrame(this.currentFrame + this.firstFrame);
            }),
            (AnimationItem.prototype.play = function (t) {
              (t && this.name != t) ||
                (!0 === this.isPaused &&
                  ((this.isPaused = !1),
                  this._idle && ((this._idle = !1), this.trigger("_active"))));
            }),
            (AnimationItem.prototype.pause = function (t) {
              (t && this.name != t) ||
                (!1 === this.isPaused &&
                  ((this.isPaused = !0),
                  (this._idle = !0),
                  this.trigger("_idle")));
            }),
            (AnimationItem.prototype.togglePause = function (t) {
              (t && this.name != t) ||
                (!0 === this.isPaused ? this.play() : this.pause());
            }),
            (AnimationItem.prototype.stop = function (t) {
              (t && this.name != t) ||
                (this.pause(),
                (this.playCount = 0),
                (this._completedLoop = !1),
                this.setCurrentRawFrameValue(0));
            }),
            (AnimationItem.prototype.goToAndStop = function (t, e, i) {
              (i && this.name != i) ||
                (e
                  ? this.setCurrentRawFrameValue(t)
                  : this.setCurrentRawFrameValue(t * this.frameModifier),
                this.pause());
            }),
            (AnimationItem.prototype.goToAndPlay = function (t, e, i) {
              this.goToAndStop(t, e, i), this.play();
            }),
            (AnimationItem.prototype.advanceTime = function (t) {
              if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                var e = this.currentRawFrame + t * this.frameModifier,
                  i = !1;
                e >= this.totalFrames - 1 && 0 < this.frameModifier
                  ? this.loop && this.playCount !== this.loop
                    ? e >= this.totalFrames
                      ? ((this.playCount += 1),
                        this.checkSegments(e % this.totalFrames) ||
                          (this.setCurrentRawFrameValue(e % this.totalFrames),
                          (this._completedLoop = !0),
                          this.trigger("loopComplete")))
                      : this.setCurrentRawFrameValue(e)
                    : this.checkSegments(
                        e > this.totalFrames ? e % this.totalFrames : 0
                      ) || ((i = !0), (e = this.totalFrames - 1))
                  : e < 0
                  ? this.checkSegments(e % this.totalFrames) ||
                    (!this.loop || (this.playCount-- <= 0 && !0 !== this.loop)
                      ? ((i = !0), (e = 0))
                      : (this.setCurrentRawFrameValue(
                          this.totalFrames + (e % this.totalFrames)
                        ),
                        this._completedLoop
                          ? this.trigger("loopComplete")
                          : (this._completedLoop = !0)))
                  : this.setCurrentRawFrameValue(e),
                  i &&
                    (this.setCurrentRawFrameValue(e),
                    this.pause(),
                    this.trigger("complete"));
              }
            }),
            (AnimationItem.prototype.adjustSegment = function (t, e) {
              (this.playCount = 0),
                t[1] < t[0]
                  ? (0 < this.frameModifier &&
                      (this.playSpeed < 0
                        ? this.setSpeed(-this.playSpeed)
                        : this.setDirection(-1)),
                    (this.timeCompleted = this.totalFrames = t[0] - t[1]),
                    (this.firstFrame = t[1]),
                    this.setCurrentRawFrameValue(this.totalFrames - 0.001 - e))
                  : t[1] > t[0] &&
                    (this.frameModifier < 0 &&
                      (this.playSpeed < 0
                        ? this.setSpeed(-this.playSpeed)
                        : this.setDirection(1)),
                    (this.timeCompleted = this.totalFrames = t[1] - t[0]),
                    (this.firstFrame = t[0]),
                    this.setCurrentRawFrameValue(0.001 + e)),
                this.trigger("segmentStart");
            }),
            (AnimationItem.prototype.setSegment = function (t, e) {
              var i = -1;
              this.isPaused &&
                (this.currentRawFrame + this.firstFrame < t
                  ? (i = t)
                  : this.currentRawFrame + this.firstFrame > e && (i = e - t)),
                (this.firstFrame = t),
                (this.timeCompleted = this.totalFrames = e - t),
                -1 !== i && this.goToAndStop(i, !0);
            }),
            (AnimationItem.prototype.playSegments = function (t, e) {
              if (
                (e && (this.segments.length = 0),
                "object" ==
                  _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(
                    t[0]
                  ))
              ) {
                var i,
                  r = t.length;
                for (i = 0; i < r; i += 1) this.segments.push(t[i]);
              } else this.segments.push(t);
              this.segments.length &&
                e &&
                this.adjustSegment(this.segments.shift(), 0),
                this.isPaused && this.play();
            }),
            (AnimationItem.prototype.resetSegments = function (t) {
              (this.segments.length = 0),
                this.segments.push([
                  this.animationData.ip,
                  this.animationData.op,
                ]),
                t && this.checkSegments(0);
            }),
            (AnimationItem.prototype.checkSegments = function (t) {
              return (
                !!this.segments.length &&
                (this.adjustSegment(this.segments.shift(), t), !0)
              );
            }),
            (AnimationItem.prototype.destroy = function (t) {
              (t && this.name != t) ||
                !this.renderer ||
                (this.renderer.destroy(),
                this.imagePreloader.destroy(),
                this.trigger("destroy"),
                (this._cbs = null),
                (this.onEnterFrame = this.onLoopComplete = this.onComplete = this.onSegmentStart = this.onDestroy = null),
                (this.renderer = null));
            }),
            (AnimationItem.prototype.setCurrentRawFrameValue = function (t) {
              (this.currentRawFrame = t), this.gotoFrame();
            }),
            (AnimationItem.prototype.setSpeed = function (t) {
              (this.playSpeed = t), this.updaFrameModifier();
            }),
            (AnimationItem.prototype.setDirection = function (t) {
              (this.playDirection = t < 0 ? -1 : 1), this.updaFrameModifier();
            }),
            (AnimationItem.prototype.updaFrameModifier = function () {
              this.frameModifier =
                this.frameMult * this.playSpeed * this.playDirection;
            }),
            (AnimationItem.prototype.getPath = function () {
              return this.path;
            }),
            (AnimationItem.prototype.getAssetsPath = function (t) {
              var e = "";
              if (t.e) e = t.p;
              else if (this.assetsPath) {
                var i = t.p;
                -1 !== i.indexOf("images/") && (i = i.split("/")[1]),
                  (e = this.assetsPath + i);
              } else (e = this.path), (e += t.u ? t.u : ""), (e += t.p);
              return e;
            }),
            (AnimationItem.prototype.getAssetData = function (t) {
              for (var e = 0, i = this.assets.length; e < i; ) {
                if (t == this.assets[e].id) return this.assets[e];
                e += 1;
              }
            }),
            (AnimationItem.prototype.hide = function () {
              this.renderer.hide();
            }),
            (AnimationItem.prototype.show = function () {
              this.renderer.show();
            }),
            (AnimationItem.prototype.getDuration = function (t) {
              return t ? this.totalFrames : this.totalFrames / this.frameRate;
            }),
            (AnimationItem.prototype.trigger = function (t) {
              if (this._cbs && this._cbs[t])
                switch (t) {
                  case "enterFrame":
                    this.triggerEvent(
                      t,
                      new BMEnterFrameEvent(
                        t,
                        this.currentFrame,
                        this.totalFrames,
                        this.frameModifier
                      )
                    );
                    break;
                  case "loopComplete":
                    this.triggerEvent(
                      t,
                      new BMCompleteLoopEvent(
                        t,
                        this.loop,
                        this.playCount,
                        this.frameMult
                      )
                    );
                    break;
                  case "complete":
                    this.triggerEvent(
                      t,
                      new BMCompleteEvent(t, this.frameMult)
                    );
                    break;
                  case "segmentStart":
                    this.triggerEvent(
                      t,
                      new BMSegmentStartEvent(
                        t,
                        this.firstFrame,
                        this.totalFrames
                      )
                    );
                    break;
                  case "destroy":
                    this.triggerEvent(t, new BMDestroyEvent(t, this));
                    break;
                  default:
                    this.triggerEvent(t);
                }
              "enterFrame" === t &&
                this.onEnterFrame &&
                this.onEnterFrame.call(
                  this,
                  new BMEnterFrameEvent(
                    t,
                    this.currentFrame,
                    this.totalFrames,
                    this.frameMult
                  )
                ),
                "loopComplete" === t &&
                  this.onLoopComplete &&
                  this.onLoopComplete.call(
                    this,
                    new BMCompleteLoopEvent(
                      t,
                      this.loop,
                      this.playCount,
                      this.frameMult
                    )
                  ),
                "complete" === t &&
                  this.onComplete &&
                  this.onComplete.call(
                    this,
                    new BMCompleteEvent(t, this.frameMult)
                  ),
                "segmentStart" === t &&
                  this.onSegmentStart &&
                  this.onSegmentStart.call(
                    this,
                    new BMSegmentStartEvent(
                      t,
                      this.firstFrame,
                      this.totalFrames
                    )
                  ),
                "destroy" === t &&
                  this.onDestroy &&
                  this.onDestroy.call(this, new BMDestroyEvent(t, this));
            });
          var Expressions =
              ((oW = {}),
              (oW.initExpressions = function (t) {
                var e = 0,
                  i = [];
                (t.renderer.compInterface = CompExpressionInterface(
                  t.renderer
                )),
                  t.renderer.globalData.projectInterface.registerComposition(
                    t.renderer
                  ),
                  (t.renderer.globalData.pushExpression = function () {
                    e += 1;
                  }),
                  (t.renderer.globalData.popExpression = function () {
                    0 == (e -= 1) &&
                      (function () {
                        var t,
                          e = i.length;
                        for (t = 0; t < e; t += 1) i[t].release();
                        i.length = 0;
                      })();
                  }),
                  (t.renderer.globalData.registerExpressionProperty = function (
                    t
                  ) {
                    -1 === i.indexOf(t) && i.push(t);
                  });
              }),
              oW),
            oW;
          expressionsPlugin = Expressions;
          var ExpressionManager = (function () {
              var ob = {},
                Math = BMMath,
                window = null,
                document = null;
              function $bm_isInstanceOfArray(t) {
                return (
                  t.constructor === Array || t.constructor === Float32Array
                );
              }
              function isNumerable(t, e) {
                return (
                  "number" === t ||
                  "boolean" === t ||
                  "string" === t ||
                  e instanceof Number
                );
              }
              function $bm_neg(t) {
                var e = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(
                  t
                );
                if ("number" === e || "boolean" === e || t instanceof Number)
                  return -t;
                if ($bm_isInstanceOfArray(t)) {
                  var i,
                    r = t.length,
                    a = [];
                  for (i = 0; i < r; i += 1) a[i] = -t[i];
                  return a;
                }
                return t.propType ? t.v : void 0;
              }
              var easeInBez = BezierFactory.getBezierEasing(
                  0.333,
                  0,
                  0.833,
                  0.833,
                  "easeIn"
                ).get,
                easeOutBez = BezierFactory.getBezierEasing(
                  0.167,
                  0.167,
                  0.667,
                  1,
                  "easeOut"
                ).get,
                easeInOutBez = BezierFactory.getBezierEasing(
                  0.33,
                  0,
                  0.667,
                  1,
                  "easeInOut"
                ).get;
              function sum(t, e) {
                var i = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(
                    t
                  ),
                  r = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(
                    e
                  );
                if ("string" === i || "string" === r) return t + e;
                if (isNumerable(i, t) && isNumerable(r, e)) return t + e;
                if ($bm_isInstanceOfArray(t) && isNumerable(r, e))
                  return ((t = t.slice(0))[0] = t[0] + e), t;
                if (isNumerable(i, t) && $bm_isInstanceOfArray(e))
                  return ((e = e.slice(0))[0] = t + e[0]), e;
                if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                  for (
                    var a = 0, s = t.length, n = e.length, o = [];
                    a < s || a < n;

                  )
                    ("number" == typeof t[a] || t[a] instanceof Number) &&
                    ("number" == typeof e[a] || e[a] instanceof Number)
                      ? (o[a] = t[a] + e[a])
                      : (o[a] = void 0 === e[a] ? t[a] : t[a] || e[a]),
                      (a += 1);
                  return o;
                }
                return 0;
              }
              var add = sum;
              function sub(t, e) {
                var i = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(
                    t
                  ),
                  r = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(
                    e
                  );
                if (isNumerable(i, t) && isNumerable(r, e))
                  return (
                    "string" === i && (t = parseInt(t)),
                    "string" === r && (e = parseInt(e)),
                    t - e
                  );
                if ($bm_isInstanceOfArray(t) && isNumerable(r, e))
                  return ((t = t.slice(0))[0] = t[0] - e), t;
                if (isNumerable(i, t) && $bm_isInstanceOfArray(e))
                  return ((e = e.slice(0))[0] = t - e[0]), e;
                if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                  for (
                    var a = 0, s = t.length, n = e.length, o = [];
                    a < s || a < n;

                  )
                    ("number" == typeof t[a] || t[a] instanceof Number) &&
                    ("number" == typeof e[a] || e[a] instanceof Number)
                      ? (o[a] = t[a] - e[a])
                      : (o[a] = void 0 === e[a] ? t[a] : t[a] || e[a]),
                      (a += 1);
                  return o;
                }
                return 0;
              }
              function mul(t, e) {
                var i,
                  r,
                  a,
                  s = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(
                    t
                  ),
                  n = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(
                    e
                  );
                if (isNumerable(s, t) && isNumerable(n, e)) return t * e;
                if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                  for (
                    a = t.length, i = createTypedArray("float32", a), r = 0;
                    r < a;
                    r += 1
                  )
                    i[r] = t[r] * e;
                  return i;
                }
                if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
                  for (
                    a = e.length, i = createTypedArray("float32", a), r = 0;
                    r < a;
                    r += 1
                  )
                    i[r] = t * e[r];
                  return i;
                }
                return 0;
              }
              function div(t, e) {
                var i,
                  r,
                  a,
                  s = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(
                    t
                  ),
                  n = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(
                    e
                  );
                if (isNumerable(s, t) && isNumerable(n, e)) return t / e;
                if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                  for (
                    a = t.length, i = createTypedArray("float32", a), r = 0;
                    r < a;
                    r += 1
                  )
                    i[r] = t[r] / e;
                  return i;
                }
                if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
                  for (
                    a = e.length, i = createTypedArray("float32", a), r = 0;
                    r < a;
                    r += 1
                  )
                    i[r] = t / e[r];
                  return i;
                }
                return 0;
              }
              function mod(t, e) {
                return (
                  "string" == typeof t && (t = parseInt(t)),
                  "string" == typeof e && (e = parseInt(e)),
                  t % e
                );
              }
              var $bm_sum = sum,
                $bm_sub = sub,
                $bm_mul = mul,
                $bm_div = div,
                $bm_mod = mod;
              function clamp(t, e, i) {
                if (i < e) {
                  var r = i;
                  (i = e), (e = r);
                }
                return Math.min(Math.max(t, e), i);
              }
              function radiansToDegrees(t) {
                return t / degToRads;
              }
              var radians_to_degrees = radiansToDegrees;
              function degreesToRadians(t) {
                return t * degToRads;
              }
              var degrees_to_radians = radiansToDegrees,
                helperLengthArray = [0, 0, 0, 0, 0, 0];
              function length(t, e) {
                if ("number" == typeof t || t instanceof Number)
                  return (e = e || 0), Math.abs(t - e);
                e || (e = helperLengthArray);
                var i,
                  r = Math.min(t.length, e.length),
                  a = 0;
                for (i = 0; i < r; i += 1) a += Math.pow(e[i] - t[i], 2);
                return Math.sqrt(a);
              }
              function normalize(t) {
                return div(t, length(t));
              }
              function rgbToHsl(t) {
                var e,
                  i,
                  r = t[0],
                  a = t[1],
                  s = t[2],
                  n = Math.max(r, a, s),
                  o = Math.min(r, a, s),
                  h = (n + o) / 2;
                if (n == o) e = i = 0;
                else {
                  var p = n - o;
                  switch (((i = 0.5 < h ? p / (2 - n - o) : p / (n + o)), n)) {
                    case r:
                      e = (a - s) / p + (a < s ? 6 : 0);
                      break;
                    case a:
                      e = (s - r) / p + 2;
                      break;
                    case s:
                      e = (r - a) / p + 4;
                  }
                  e /= 6;
                }
                return [e, i, h, t[3]];
              }
              function hue2rgb(t, e, i) {
                return (
                  i < 0 && (i += 1),
                  1 < i && (i -= 1),
                  i < 1 / 6
                    ? t + 6 * (e - t) * i
                    : i < 0.5
                    ? e
                    : i < 2 / 3
                    ? t + (e - t) * (2 / 3 - i) * 6
                    : t
                );
              }
              function hslToRgb(t) {
                var e,
                  i,
                  r,
                  a = t[0],
                  s = t[1],
                  n = t[2];
                if (0 === s) e = i = r = n;
                else {
                  var o = n < 0.5 ? n * (1 + s) : n + s - n * s,
                    h = 2 * n - o;
                  (e = hue2rgb(h, o, a + 1 / 3)),
                    (i = hue2rgb(h, o, a)),
                    (r = hue2rgb(h, o, a - 1 / 3));
                }
                return [e, i, r, t[3]];
              }
              function linear(t, e, i, r, a) {
                if (
                  ((void 0 !== r && void 0 !== a) ||
                    ((r = e), (a = i), (e = 0), (i = 1)),
                  i < e)
                ) {
                  var s = i;
                  (i = e), (e = s);
                }
                if (t <= e) return r;
                if (i <= t) return a;
                var n = i === e ? 0 : (t - e) / (i - e);
                if (!r.length) return r + (a - r) * n;
                var o,
                  h = r.length,
                  p = createTypedArray("float32", h);
                for (o = 0; o < h; o += 1) p[o] = r[o] + (a[o] - r[o]) * n;
                return p;
              }
              function random(t, e) {
                if (
                  (void 0 === e &&
                    (void 0 === t
                      ? ((t = 0), (e = 1))
                      : ((e = t), (t = void 0))),
                  e.length)
                ) {
                  var i,
                    r = e.length;
                  t || (t = createTypedArray("float32", r));
                  var a = createTypedArray("float32", r),
                    s = BMMath.random();
                  for (i = 0; i < r; i += 1) a[i] = t[i] + s * (e[i] - t[i]);
                  return a;
                }
                return void 0 === t && (t = 0), t + BMMath.random() * (e - t);
              }
              function createPath(t, e, i, r) {
                var a,
                  s = t.length,
                  n = shape_pool.newElement();
                n.setPathData(!!r, s);
                var o,
                  h,
                  p = [0, 0];
                for (a = 0; a < s; a += 1)
                  (o = e && e[a] ? e[a] : p),
                    (h = i && i[a] ? i[a] : p),
                    n.setTripleAt(
                      t[a][0],
                      t[a][1],
                      h[0] + t[a][0],
                      h[1] + t[a][1],
                      o[0] + t[a][0],
                      o[1] + t[a][1],
                      a,
                      !0
                    );
                return n;
              }
              function initiateExpression(elem, data, property) {
                var val = data.x,
                  needsVelocity = /velocity(?![\w\d])/.test(val),
                  _needsRandom = -1 !== val.indexOf("random"),
                  elemType = elem.data.ty,
                  transform,
                  $bm_transform,
                  content,
                  effect,
                  thisProperty = property;
                (thisProperty.valueAtTime = thisProperty.getValueAtTime),
                  Object.defineProperty(thisProperty, "value", {
                    get: function () {
                      return thisProperty.v;
                    },
                  }),
                  (elem.comp.frameDuration =
                    1 / elem.comp.globalData.frameRate),
                  (elem.comp.displayStartTime = 0);
                var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                  outPoint = elem.data.op / elem.comp.globalData.frameRate,
                  width = elem.data.sw ? elem.data.sw : 0,
                  height = elem.data.sh ? elem.data.sh : 0,
                  name = elem.data.nm,
                  loopIn,
                  loop_in,
                  loopOut,
                  loop_out,
                  smooth,
                  toWorld,
                  fromWorld,
                  fromComp,
                  toComp,
                  fromCompToSurface,
                  position,
                  rotation,
                  anchorPoint,
                  scale,
                  thisLayer,
                  thisComp,
                  mask,
                  valueAtTime,
                  velocityAtTime,
                  __expression_functions = [],
                  scoped_bm_rt;
                if (data.xf) {
                  var i,
                    len = data.xf.length;
                  for (i = 0; i < len; i += 1)
                    __expression_functions[i] = eval(
                      "(function(){ return " + data.xf[i] + "}())"
                    );
                }
                var expression_function = eval(
                    "[function _expression_function(){" +
                      val +
                      ";scoped_bm_rt=$bm_rt}]"
                  )[0],
                  numKeys = property.kf ? data.k.length : 0,
                  active = !this.data || !0 !== this.data.hd,
                  wiggle = function (t, e) {
                    var i,
                      r,
                      a = this.pv.length ? this.pv.length : 1,
                      s = createTypedArray("float32", a),
                      n = Math.floor(5 * time);
                    for (r = i = 0; i < n; ) {
                      for (r = 0; r < a; r += 1)
                        s[r] += -e + 2 * e * BMMath.random();
                      i += 1;
                    }
                    var o = 5 * time,
                      h = o - Math.floor(o),
                      p = createTypedArray("float32", a);
                    if (1 < a) {
                      for (r = 0; r < a; r += 1)
                        p[r] =
                          this.pv[r] +
                          s[r] +
                          (-e + 2 * e * BMMath.random()) * h;
                      return p;
                    }
                    return this.pv + s[0] + (-e + 2 * e * BMMath.random()) * h;
                  }.bind(this);
                function loopInDuration(t, e) {
                  return loopIn(t, e, !0);
                }
                function loopOutDuration(t, e) {
                  return loopOut(t, e, !0);
                }
                thisProperty.loopIn &&
                  ((loopIn = thisProperty.loopIn.bind(thisProperty)),
                  (loop_in = loopIn)),
                  thisProperty.loopOut &&
                    ((loopOut = thisProperty.loopOut.bind(thisProperty)),
                    (loop_out = loopOut)),
                  thisProperty.smooth &&
                    (smooth = thisProperty.smooth.bind(thisProperty)),
                  this.getValueAtTime &&
                    (valueAtTime = this.getValueAtTime.bind(this)),
                  this.getVelocityAtTime &&
                    (velocityAtTime = this.getVelocityAtTime.bind(this));
                var comp = elem.comp.globalData.projectInterface.bind(
                    elem.comp.globalData.projectInterface
                  ),
                  time,
                  velocity,
                  value,
                  text,
                  textIndex,
                  textTotal,
                  selectorValue;
                function lookAt(t, e) {
                  var i = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                    r =
                      Math.atan2(i[0], Math.sqrt(i[1] * i[1] + i[2] * i[2])) /
                      degToRads;
                  return [-Math.atan2(i[1], i[2]) / degToRads, r, 0];
                }
                function easeOut(t, e, i, r, a) {
                  return applyEase(easeOutBez, t, e, i, r, a);
                }
                function easeIn(t, e, i, r, a) {
                  return applyEase(easeInBez, t, e, i, r, a);
                }
                function ease(t, e, i, r, a) {
                  return applyEase(easeInOutBez, t, e, i, r, a);
                }
                function applyEase(t, e, i, r, a, s) {
                  void 0 === a ? ((a = i), (s = r)) : (e = (e - i) / (r - i));
                  var n = t((e = 1 < e ? 1 : e < 0 ? 0 : e));
                  if ($bm_isInstanceOfArray(a)) {
                    var o,
                      h = a.length,
                      p = createTypedArray("float32", h);
                    for (o = 0; o < h; o += 1) p[o] = (s[o] - a[o]) * n + a[o];
                    return p;
                  }
                  return (s - a) * n + a;
                }
                function nearestKey(t) {
                  var e,
                    i,
                    r,
                    a = data.k.length;
                  if (data.k.length && "number" != typeof data.k[0])
                    if (
                      ((i = -1),
                      (t *= elem.comp.globalData.frameRate) < data.k[0].t)
                    )
                      (i = 1), (r = data.k[0].t);
                    else {
                      for (e = 0; e < a - 1; e += 1) {
                        if (t === data.k[e].t) {
                          (i = e + 1), (r = data.k[e].t);
                          break;
                        }
                        if (t > data.k[e].t && t < data.k[e + 1].t) {
                          r =
                            t - data.k[e].t > data.k[e + 1].t - t
                              ? ((i = e + 2), data.k[e + 1].t)
                              : ((i = e + 1), data.k[e].t);
                          break;
                        }
                      }
                      -1 === i && ((i = e + 1), (r = data.k[e].t));
                    }
                  else r = i = 0;
                  var s = {};
                  return (
                    (s.index = i),
                    (s.time = r / elem.comp.globalData.frameRate),
                    s
                  );
                }
                function key(t) {
                  var e, i, r;
                  if (!data.k.length || "number" == typeof data.k[0])
                    throw new Error(
                      "The property has no keyframe at index " + t
                    );
                  (t -= 1),
                    (e = {
                      time: data.k[t].t / elem.comp.globalData.frameRate,
                      value: [],
                    });
                  var a = data.k[t].hasOwnProperty("s")
                    ? data.k[t].s
                    : data.k[t - 1].e;
                  for (r = a.length, i = 0; i < r; i += 1)
                    (e[i] = a[i]), (e.value[i] = a[i]);
                  return e;
                }
                function framesToTime(t, e) {
                  return e || (e = elem.comp.globalData.frameRate), t / e;
                }
                function timeToFrames(t, e) {
                  return (
                    t || 0 === t || (t = time),
                    e || (e = elem.comp.globalData.frameRate),
                    t * e
                  );
                }
                function seedRandom(t) {
                  BMMath.seedrandom(randSeed + t);
                }
                function sourceRectAtTime() {
                  return elem.sourceRectAtTime();
                }
                function substring(t, e) {
                  return "string" == typeof value
                    ? void 0 === e
                      ? value.substring(t)
                      : value.substring(t, e)
                    : "";
                }
                function substr(t, e) {
                  return "string" == typeof value
                    ? void 0 === e
                      ? value.substr(t)
                      : value.substr(t, e)
                    : "";
                }
                var index = elem.data.ind,
                  hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                  parent,
                  randSeed = Math.floor(1e6 * Math.random()),
                  globalData = elem.globalData;
                function executeExpression(t) {
                  return (
                    (value = t),
                    _needsRandom && seedRandom(randSeed),
                    this.frameExpressionId === elem.globalData.frameId &&
                    "textSelector" !== this.propType
                      ? value
                      : ("textSelector" === this.propType &&
                          ((textIndex = this.textIndex),
                          (textTotal = this.textTotal),
                          (selectorValue = this.selectorValue)),
                        thisLayer ||
                          ((text = elem.layerInterface.text),
                          (thisLayer = elem.layerInterface),
                          (thisComp = elem.comp.compInterface),
                          (toWorld = thisLayer.toWorld.bind(thisLayer)),
                          (fromWorld = thisLayer.fromWorld.bind(thisLayer)),
                          (fromComp = thisLayer.fromComp.bind(thisLayer)),
                          (toComp = thisLayer.toComp.bind(thisLayer)),
                          (mask = thisLayer.mask
                            ? thisLayer.mask.bind(thisLayer)
                            : null),
                          (fromCompToSurface = fromComp)),
                        transform ||
                          ((transform = elem.layerInterface(
                            "ADBE Transform Group"
                          )),
                          ($bm_transform = transform) &&
                            (anchorPoint = transform.anchorPoint)),
                        4 !== elemType ||
                          content ||
                          (content = thisLayer("ADBE Root Vectors Group")),
                        effect || (effect = thisLayer(4)),
                        (hasParent = !(
                          !elem.hierarchy || !elem.hierarchy.length
                        )) &&
                          !parent &&
                          (parent = elem.hierarchy[0].layerInterface),
                        (time =
                          this.comp.renderedFrame /
                          this.comp.globalData.frameRate),
                        needsVelocity && (velocity = velocityAtTime(time)),
                        expression_function(),
                        (this.frameExpressionId = elem.globalData.frameId),
                        "shape" === scoped_bm_rt.propType &&
                          (scoped_bm_rt = scoped_bm_rt.v),
                        scoped_bm_rt)
                  );
                }
                return executeExpression;
              }
              return (ob.initiateExpression = initiateExpression), ob;
            })(),
            expressionHelpers = {
              searchExpressions: function (t, e, i) {
                e.x &&
                  ((i.k = !0),
                  (i.x = !0),
                  (i.initiateExpression = ExpressionManager.initiateExpression),
                  i.effectsSequence.push(
                    i.initiateExpression(t, e, i).bind(i)
                  ));
              },
              getSpeedAtTime: function (t) {
                var e = this.getValueAtTime(t),
                  i = this.getValueAtTime(t + -0.01),
                  r = 0;
                if (e.length) {
                  var a;
                  for (a = 0; a < e.length; a += 1)
                    r += Math.pow(i[a] - e[a], 2);
                  r = 100 * Math.sqrt(r);
                } else r = 0;
                return r;
              },
              getVelocityAtTime: function (t) {
                if (void 0 !== this.vel) return this.vel;
                var e,
                  i,
                  r = this.getValueAtTime(t),
                  a = this.getValueAtTime(t + -0.001);
                if (r.length)
                  for (
                    e = createTypedArray("float32", r.length), i = 0;
                    i < r.length;
                    i += 1
                  )
                    e[i] = (a[i] - r[i]) / -0.001;
                else e = (a - r) / -0.001;
                return e;
              },
              getValueAtTime: function (t) {
                return (
                  (t *= this.elem.globalData.frameRate),
                  (t -= this.offsetTime) !== this._cachingAtTime.lastFrame &&
                    ((this._cachingAtTime.lastIndex =
                      this._cachingAtTime.lastFrame < t
                        ? this._cachingAtTime.lastIndex
                        : 0),
                    (this._cachingAtTime.value = this.interpolateValue(
                      t,
                      this._cachingAtTime
                    )),
                    (this._cachingAtTime.lastFrame = t)),
                  this._cachingAtTime.value
                );
              },
              getStaticValueAtTime: function () {
                return this.pv;
              },
              setGroupProperty: function (t) {
                this.propertyGroup = t;
              },
            };
          !(function () {
            function t(t, e, i) {
              if (!this.k || !this.keyframes) return this.pv;
              t = t ? t.toLowerCase() : "";
              var r,
                a,
                s,
                n,
                o,
                h = this.comp.renderedFrame,
                p = this.keyframes,
                l = p[p.length - 1].t;
              if (h <= l) return this.pv;
              if (
                (i
                  ? (a =
                      l -
                      (r = e
                        ? Math.abs(l - elem.comp.globalData.frameRate * e)
                        : Math.max(0, l - this.elem.data.ip)))
                  : ((!e || e > p.length - 1) && (e = p.length - 1),
                    (r = l - (a = p[p.length - 1 - e].t))),
                "pingpong" === t)
              ) {
                if (Math.floor((h - a) / r) % 2 != 0)
                  return this.getValueAtTime(
                    (r - ((h - a) % r) + a) / this.comp.globalData.frameRate,
                    0
                  );
              } else {
                if ("offset" === t) {
                  var m = this.getValueAtTime(
                      a / this.comp.globalData.frameRate,
                      0
                    ),
                    c = this.getValueAtTime(
                      l / this.comp.globalData.frameRate,
                      0
                    ),
                    f = this.getValueAtTime(
                      (((h - a) % r) + a) / this.comp.globalData.frameRate,
                      0
                    ),
                    d = Math.floor((h - a) / r);
                  if (this.pv.length) {
                    for (
                      n = (o = new Array(m.length)).length, s = 0;
                      s < n;
                      s += 1
                    )
                      o[s] = (c[s] - m[s]) * d + f[s];
                    return o;
                  }
                  return (c - m) * d + f;
                }
                if ("continue" === t) {
                  var u = this.getValueAtTime(
                      l / this.comp.globalData.frameRate,
                      0
                    ),
                    y = this.getValueAtTime(
                      (l - 0.001) / this.comp.globalData.frameRate,
                      0
                    );
                  if (this.pv.length) {
                    for (
                      n = (o = new Array(u.length)).length, s = 0;
                      s < n;
                      s += 1
                    )
                      o[s] =
                        u[s] +
                        ((u[s] - y[s]) *
                          ((h - l) / this.comp.globalData.frameRate)) /
                          5e-4;
                    return o;
                  }
                  return u + ((h - l) / 0.001) * (u - y);
                }
              }
              return this.getValueAtTime(
                (((h - a) % r) + a) / this.comp.globalData.frameRate,
                0
              );
            }
            function e(t, e, i) {
              if (!this.k) return this.pv;
              t = t ? t.toLowerCase() : "";
              var r,
                a,
                s,
                n,
                o,
                h = this.comp.renderedFrame,
                p = this.keyframes,
                l = p[0].t;
              if (l <= h) return this.pv;
              if (
                (i
                  ? (a =
                      l +
                      (r = e
                        ? Math.abs(elem.comp.globalData.frameRate * e)
                        : Math.max(0, this.elem.data.op - l)))
                  : ((!e || e > p.length - 1) && (e = p.length - 1),
                    (r = (a = p[e].t) - l)),
                "pingpong" === t)
              ) {
                if (Math.floor((l - h) / r) % 2 == 0)
                  return this.getValueAtTime(
                    (((l - h) % r) + l) / this.comp.globalData.frameRate,
                    0
                  );
              } else {
                if ("offset" === t) {
                  var m = this.getValueAtTime(
                      l / this.comp.globalData.frameRate,
                      0
                    ),
                    c = this.getValueAtTime(
                      a / this.comp.globalData.frameRate,
                      0
                    ),
                    f = this.getValueAtTime(
                      (r - ((l - h) % r) + l) / this.comp.globalData.frameRate,
                      0
                    ),
                    d = Math.floor((l - h) / r) + 1;
                  if (this.pv.length) {
                    for (
                      n = (o = new Array(m.length)).length, s = 0;
                      s < n;
                      s += 1
                    )
                      o[s] = f[s] - (c[s] - m[s]) * d;
                    return o;
                  }
                  return f - (c - m) * d;
                }
                if ("continue" === t) {
                  var u = this.getValueAtTime(
                      l / this.comp.globalData.frameRate,
                      0
                    ),
                    y = this.getValueAtTime(
                      (l + 0.001) / this.comp.globalData.frameRate,
                      0
                    );
                  if (this.pv.length) {
                    for (
                      n = (o = new Array(u.length)).length, s = 0;
                      s < n;
                      s += 1
                    )
                      o[s] = u[s] + ((u[s] - y[s]) * (l - h)) / 0.001;
                    return o;
                  }
                  return u + ((u - y) * (l - h)) / 0.001;
                }
              }
              return this.getValueAtTime(
                (r - ((l - h) % r) + l) / this.comp.globalData.frameRate,
                0
              );
            }
            function i(t, e) {
              if (!this.k) return this.pv;
              if (((t = 0.5 * (t || 0.4)), (e = Math.floor(e || 5)) <= 1))
                return this.pv;
              var i,
                r,
                a = this.comp.renderedFrame / this.comp.globalData.frameRate,
                s = a - t,
                n = 1 < e ? (a + t - s) / (e - 1) : 1,
                o = 0,
                h = 0;
              for (
                i = this.pv.length
                  ? createTypedArray("float32", this.pv.length)
                  : 0;
                o < e;

              ) {
                if (((r = this.getValueAtTime(s + o * n)), this.pv.length))
                  for (h = 0; h < this.pv.length; h += 1) i[h] += r[h];
                else i += r;
                o += 1;
              }
              if (this.pv.length)
                for (h = 0; h < this.pv.length; h += 1) i[h] /= e;
              else i /= e;
              return i;
            }
            var r = TransformPropertyFactory.getTransformProperty;
            TransformPropertyFactory.getTransformProperty = function (t, e, i) {
              var a = r(t, e, i);
              return (
                a.dynamicProperties.length
                  ? (a.getValueAtTime = function (t) {
                      console.warn("Transform at time not supported");
                    }.bind(a))
                  : (a.getValueAtTime = function (t) {}.bind(a)),
                (a.setGroupProperty = expressionHelpers.setGroupProperty),
                a
              );
            };
            var a = PropertyFactory.getProp;
            PropertyFactory.getProp = function (r, s, n, o, h) {
              var p = a(r, s, n, o, h);
              p.kf
                ? (p.getValueAtTime = expressionHelpers.getValueAtTime.bind(p))
                : (p.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(
                    p
                  )),
                (p.setGroupProperty = expressionHelpers.setGroupProperty),
                (p.loopOut = t),
                (p.loopIn = e),
                (p.smooth = i),
                (p.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(
                  p
                )),
                (p.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(p)),
                (p.numKeys = 1 === s.a ? s.k.length : 0),
                (p.propertyIndex = s.ix);
              var l = 0;
              return (
                0 !== n &&
                  (l = createTypedArray(
                    "float32",
                    1 === s.a ? s.k[0].s.length : s.k.length
                  )),
                (p._cachingAtTime = {
                  lastFrame: initialDefaultFrame,
                  lastIndex: 0,
                  value: l,
                }),
                expressionHelpers.searchExpressions(r, s, p),
                p.k && h.addDynamicProperty(p),
                p
              );
            };
            var s = ShapePropertyFactory.getConstructorFunction(),
              n = ShapePropertyFactory.getKeyframedConstructorFunction();
            function o() {}
            (o.prototype = {
              vertices: function (t, e) {
                this.k && this.getValue();
                var i = this.v;
                void 0 !== e && (i = this.getValueAtTime(e, 0));
                var r,
                  a = i._length,
                  s = i[t],
                  n = i.v,
                  o = createSizedArray(a);
                for (r = 0; r < a; r += 1)
                  o[r] =
                    "i" === t || "o" === t
                      ? [s[r][0] - n[r][0], s[r][1] - n[r][1]]
                      : [s[r][0], s[r][1]];
                return o;
              },
              points: function (t) {
                return this.vertices("v", t);
              },
              inTangents: function (t) {
                return this.vertices("i", t);
              },
              outTangents: function (t) {
                return this.vertices("o", t);
              },
              isClosed: function () {
                return this.v.c;
              },
              pointOnPath: function (t, e) {
                var i = this.v;
                void 0 !== e && (i = this.getValueAtTime(e, 0)),
                  this._segmentsLength ||
                    (this._segmentsLength = bez.getSegmentsLength(i));
                for (
                  var r,
                    a = this._segmentsLength,
                    s = a.lengths,
                    n = a.totalLength * t,
                    o = 0,
                    h = s.length,
                    p = 0;
                  o < h;

                ) {
                  if (p + s[o].addedLength > n) {
                    var l = o,
                      m = i.c && o === h - 1 ? 0 : o + 1,
                      c = (n - p) / s[o].addedLength;
                    r = bez.getPointInSegment(
                      i.v[l],
                      i.v[m],
                      i.o[l],
                      i.i[m],
                      c,
                      s[o]
                    );
                    break;
                  }
                  (p += s[o].addedLength), (o += 1);
                }
                return (
                  r ||
                    (r = i.c
                      ? [i.v[0][0], i.v[0][1]]
                      : [i.v[i._length - 1][0], i.v[i._length - 1][1]]),
                  r
                );
              },
              vectorOnPath: function (t, e, i) {
                t = 1 == t ? (this.v.c ? 0 : 0.999) : t;
                var r = this.pointOnPath(t, e),
                  a = this.pointOnPath(t + 0.001, e),
                  s = a[0] - r[0],
                  n = a[1] - r[1],
                  o = Math.sqrt(Math.pow(s, 2) + Math.pow(n, 2));
                return 0 === o
                  ? [0, 0]
                  : "tangent" === i
                  ? [s / o, n / o]
                  : [-n / o, s / o];
              },
              tangentOnPath: function (t, e) {
                return this.vectorOnPath(t, e, "tangent");
              },
              normalOnPath: function (t, e) {
                return this.vectorOnPath(t, e, "normal");
              },
              setGroupProperty: expressionHelpers.setGroupProperty,
              getValueAtTime: expressionHelpers.getStaticValueAtTime,
            }),
              extendPrototype([o], s),
              extendPrototype([o], n),
              (n.prototype.getValueAtTime = function (t) {
                return (
                  this._cachingAtTime ||
                    (this._cachingAtTime = {
                      shapeValue: shape_pool.clone(this.pv),
                      lastIndex: 0,
                      lastTime: initialDefaultFrame,
                    }),
                  (t *= this.elem.globalData.frameRate),
                  (t -= this.offsetTime) !== this._cachingAtTime.lastTime &&
                    ((this._cachingAtTime.lastIndex =
                      this._cachingAtTime.lastTime < t
                        ? this._caching.lastIndex
                        : 0),
                    (this._cachingAtTime.lastTime = t),
                    this.interpolateShape(
                      t,
                      this._cachingAtTime.shapeValue,
                      this._cachingAtTime
                    )),
                  this._cachingAtTime.shapeValue
                );
              }),
              (n.prototype.initiateExpression =
                ExpressionManager.initiateExpression);
            var h = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function (t, e, i, r, a) {
              var s = h(t, e, i, r, a);
              return (
                (s.propertyIndex = e.ix),
                (s.lock = !1),
                3 === i
                  ? expressionHelpers.searchExpressions(t, e.pt, s)
                  : 4 === i && expressionHelpers.searchExpressions(t, e.ks, s),
                s.k && t.addDynamicProperty(s),
                s
              );
            };
          })(),
            (TextProperty.prototype.getExpressionValue = function (t, e) {
              var i = this.calculateExpression(e);
              if (t.t === i) return t;
              var r = {};
              return (
                this.copyData(r, t),
                (r.t = i.toString()),
                (r.__complete = !1),
                r
              );
            }),
            (TextProperty.prototype.searchProperty = function () {
              var t = this.searchKeyframes(),
                e = this.searchExpressions();
              return (this.kf = t || e), this.kf;
            }),
            (TextProperty.prototype.searchExpressions = function () {
              if (this.data.d.x)
                return (
                  (this.calculateExpression = ExpressionManager.initiateExpression.bind(
                    this
                  )(this.elem, this.data.d, this)),
                  this.addEffect(this.getExpressionValue.bind(this)),
                  !0
                );
            });
          var ShapeExpressionInterface = (function () {
              function t(t, m, c) {
                var f,
                  d = [],
                  u = t ? t.length : 0;
                for (f = 0; f < u; f += 1)
                  "gr" == t[f].ty
                    ? d.push(e(t[f], m[f], c))
                    : "fl" == t[f].ty
                    ? d.push(i(t[f], m[f], c))
                    : "st" == t[f].ty
                    ? d.push(r(t[f], m[f], c))
                    : "tm" == t[f].ty
                    ? d.push(a(t[f], m[f], c))
                    : "tr" == t[f].ty ||
                      ("el" == t[f].ty
                        ? d.push(s(t[f], m[f], c))
                        : "sr" == t[f].ty
                        ? d.push(n(t[f], m[f], c))
                        : "sh" == t[f].ty
                        ? d.push(l(t[f], m[f], c))
                        : "rc" == t[f].ty
                        ? d.push(o(t[f], m[f], c))
                        : "rd" == t[f].ty
                        ? d.push(h(t[f], m[f], c))
                        : "rp" == t[f].ty && d.push(p(t[f], m[f], c)));
                return d;
              }
              function e(e, i, r) {
                var a,
                  s,
                  n,
                  o,
                  h,
                  p = function t(e) {
                    switch (e) {
                      case "ADBE Vectors Group":
                      case "Contents":
                      case 2:
                        return t.content;
                      default:
                        return t.transform;
                    }
                  },
                  l =
                    ((a = e),
                    (s = i),
                    (n = p.propertyGroup = function (t) {
                      return 1 === t ? p : r(t - 1);
                    }),
                    ((h = function (t) {
                      for (var e = 0, i = o.length; e < i; ) {
                        if (
                          o[e]._name === t ||
                          o[e].mn === t ||
                          o[e].propertyIndex === t ||
                          o[e].ix === t ||
                          o[e].ind === t
                        )
                          return o[e];
                        e += 1;
                      }
                      if ("number" == typeof t) return o[t - 1];
                    }).propertyGroup = function (t) {
                      return 1 === t ? h : n(t - 1);
                    }),
                    (o = t(a.it, s.it, h.propertyGroup)),
                    (h.numProperties = o.length),
                    (h.propertyIndex = a.cix),
                    (h._name = a.nm),
                    h),
                  m = (function (t, e, i) {
                    function r(t) {
                      return 1 == t ? a : i(--t);
                    }
                    function a(e) {
                      return t.a.ix === e || "Anchor Point" === e
                        ? a.anchorPoint
                        : t.o.ix === e || "Opacity" === e
                        ? a.opacity
                        : t.p.ix === e || "Position" === e
                        ? a.position
                        : t.r.ix === e ||
                          "Rotation" === e ||
                          "ADBE Vector Rotation" === e
                        ? a.rotation
                        : t.s.ix === e || "Scale" === e
                        ? a.scale
                        : (t.sk && t.sk.ix === e) || "Skew" === e
                        ? a.skew
                        : (t.sa && t.sa.ix === e) || "Skew Axis" === e
                        ? a.skewAxis
                        : void 0;
                    }
                    return (
                      e.transform.mProps.o.setGroupProperty(r),
                      e.transform.mProps.p.setGroupProperty(r),
                      e.transform.mProps.a.setGroupProperty(r),
                      e.transform.mProps.s.setGroupProperty(r),
                      e.transform.mProps.r.setGroupProperty(r),
                      e.transform.mProps.sk &&
                        (e.transform.mProps.sk.setGroupProperty(r),
                        e.transform.mProps.sa.setGroupProperty(r)),
                      e.transform.op.setGroupProperty(r),
                      Object.defineProperties(a, {
                        opacity: {
                          get: ExpressionPropertyInterface(
                            e.transform.mProps.o
                          ),
                        },
                        position: {
                          get: ExpressionPropertyInterface(
                            e.transform.mProps.p
                          ),
                        },
                        anchorPoint: {
                          get: ExpressionPropertyInterface(
                            e.transform.mProps.a
                          ),
                        },
                        scale: {
                          get: ExpressionPropertyInterface(
                            e.transform.mProps.s
                          ),
                        },
                        rotation: {
                          get: ExpressionPropertyInterface(
                            e.transform.mProps.r
                          ),
                        },
                        skew: {
                          get: ExpressionPropertyInterface(
                            e.transform.mProps.sk
                          ),
                        },
                        skewAxis: {
                          get: ExpressionPropertyInterface(
                            e.transform.mProps.sa
                          ),
                        },
                        _name: { value: t.nm },
                      }),
                      (a.ty = "tr"),
                      (a.mn = t.mn),
                      (a.propertyGroup = i),
                      a
                    );
                  })(
                    e.it[e.it.length - 1],
                    i.it[i.it.length - 1],
                    p.propertyGroup
                  );
                return (
                  (p.content = l),
                  (p.transform = m),
                  Object.defineProperty(p, "_name", {
                    get: function () {
                      return e.nm;
                    },
                  }),
                  (p.numProperties = e.np),
                  (p.propertyIndex = e.ix),
                  (p.nm = e.nm),
                  (p.mn = e.mn),
                  p
                );
              }
              function i(t, e, i) {
                function r(t) {
                  return "Color" === t || "color" === t
                    ? r.color
                    : "Opacity" === t || "opacity" === t
                    ? r.opacity
                    : void 0;
                }
                return (
                  Object.defineProperties(r, {
                    color: { get: ExpressionPropertyInterface(e.c) },
                    opacity: { get: ExpressionPropertyInterface(e.o) },
                    _name: { value: t.nm },
                    mn: { value: t.mn },
                  }),
                  e.c.setGroupProperty(i),
                  e.o.setGroupProperty(i),
                  r
                );
              }
              function r(t, e, i) {
                function r(t) {
                  return 1 === t ? ob : i(t - 1);
                }
                function a(t) {
                  return 1 === t ? h : r(t - 1);
                }
                var s,
                  n,
                  o = t.d ? t.d.length : 0,
                  h = {};
                for (s = 0; s < o; s += 1)
                  (n = s),
                    Object.defineProperty(h, t.d[n].nm, {
                      get: ExpressionPropertyInterface(e.d.dataProps[n].p),
                    }),
                    e.d.dataProps[s].p.setGroupProperty(a);
                function p(t) {
                  return "Color" === t || "color" === t
                    ? p.color
                    : "Opacity" === t || "opacity" === t
                    ? p.opacity
                    : "Stroke Width" === t || "stroke width" === t
                    ? p.strokeWidth
                    : void 0;
                }
                return (
                  Object.defineProperties(p, {
                    color: { get: ExpressionPropertyInterface(e.c) },
                    opacity: { get: ExpressionPropertyInterface(e.o) },
                    strokeWidth: { get: ExpressionPropertyInterface(e.w) },
                    dash: {
                      get: function () {
                        return h;
                      },
                    },
                    _name: { value: t.nm },
                    mn: { value: t.mn },
                  }),
                  e.c.setGroupProperty(r),
                  e.o.setGroupProperty(r),
                  e.w.setGroupProperty(r),
                  p
                );
              }
              function a(t, e, i) {
                function r(t) {
                  return 1 == t ? a : i(--t);
                }
                function a(e) {
                  return e === t.e.ix || "End" === e || "end" === e
                    ? a.end
                    : e === t.s.ix
                    ? a.start
                    : e === t.o.ix
                    ? a.offset
                    : void 0;
                }
                return (
                  (a.propertyIndex = t.ix),
                  e.s.setGroupProperty(r),
                  e.e.setGroupProperty(r),
                  e.o.setGroupProperty(r),
                  (a.propertyIndex = t.ix),
                  (a.propertyGroup = i),
                  Object.defineProperties(a, {
                    start: { get: ExpressionPropertyInterface(e.s) },
                    end: { get: ExpressionPropertyInterface(e.e) },
                    offset: { get: ExpressionPropertyInterface(e.o) },
                    _name: { value: t.nm },
                  }),
                  (a.mn = t.mn),
                  a
                );
              }
              function s(t, e, i) {
                function r(t) {
                  return 1 == t ? s : i(--t);
                }
                s.propertyIndex = t.ix;
                var a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                function s(e) {
                  return t.p.ix === e
                    ? s.position
                    : t.s.ix === e
                    ? s.size
                    : void 0;
                }
                return (
                  a.s.setGroupProperty(r),
                  a.p.setGroupProperty(r),
                  Object.defineProperties(s, {
                    size: { get: ExpressionPropertyInterface(a.s) },
                    position: { get: ExpressionPropertyInterface(a.p) },
                    _name: { value: t.nm },
                  }),
                  (s.mn = t.mn),
                  s
                );
              }
              function n(t, e, i) {
                function r(t) {
                  return 1 == t ? s : i(--t);
                }
                var a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                function s(e) {
                  return t.p.ix === e
                    ? s.position
                    : t.r.ix === e
                    ? s.rotation
                    : t.pt.ix === e
                    ? s.points
                    : t.or.ix === e || "ADBE Vector Star Outer Radius" === e
                    ? s.outerRadius
                    : t.os.ix === e
                    ? s.outerRoundness
                    : !t.ir ||
                      (t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e)
                    ? t.is && t.is.ix === e
                      ? s.innerRoundness
                      : void 0
                    : s.innerRadius;
                }
                return (
                  (s.propertyIndex = t.ix),
                  a.or.setGroupProperty(r),
                  a.os.setGroupProperty(r),
                  a.pt.setGroupProperty(r),
                  a.p.setGroupProperty(r),
                  a.r.setGroupProperty(r),
                  t.ir && (a.ir.setGroupProperty(r), a.is.setGroupProperty(r)),
                  Object.defineProperties(s, {
                    position: { get: ExpressionPropertyInterface(a.p) },
                    rotation: { get: ExpressionPropertyInterface(a.r) },
                    points: { get: ExpressionPropertyInterface(a.pt) },
                    outerRadius: { get: ExpressionPropertyInterface(a.or) },
                    outerRoundness: { get: ExpressionPropertyInterface(a.os) },
                    innerRadius: { get: ExpressionPropertyInterface(a.ir) },
                    innerRoundness: { get: ExpressionPropertyInterface(a.is) },
                    _name: { value: t.nm },
                  }),
                  (s.mn = t.mn),
                  s
                );
              }
              function o(t, e, i) {
                function r(t) {
                  return 1 == t ? s : i(--t);
                }
                var a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                function s(e) {
                  return t.p.ix === e
                    ? s.position
                    : t.r.ix === e
                    ? s.roundness
                    : t.s.ix === e ||
                      "Size" === e ||
                      "ADBE Vector Rect Size" === e
                    ? s.size
                    : void 0;
                }
                return (
                  (s.propertyIndex = t.ix),
                  a.p.setGroupProperty(r),
                  a.s.setGroupProperty(r),
                  a.r.setGroupProperty(r),
                  Object.defineProperties(s, {
                    position: { get: ExpressionPropertyInterface(a.p) },
                    roundness: { get: ExpressionPropertyInterface(a.r) },
                    size: { get: ExpressionPropertyInterface(a.s) },
                    _name: { value: t.nm },
                  }),
                  (s.mn = t.mn),
                  s
                );
              }
              function h(t, e, i) {
                var r = e;
                function a(e) {
                  if (t.r.ix === e || "Round Corners 1" === e) return a.radius;
                }
                return (
                  (a.propertyIndex = t.ix),
                  r.rd.setGroupProperty(function (t) {
                    return 1 == t ? a : i(--t);
                  }),
                  Object.defineProperties(a, {
                    radius: { get: ExpressionPropertyInterface(r.rd) },
                    _name: { value: t.nm },
                  }),
                  (a.mn = t.mn),
                  a
                );
              }
              function p(t, e, i) {
                function r(t) {
                  return 1 == t ? s : i(--t);
                }
                var a = e;
                function s(e) {
                  return t.c.ix === e || "Copies" === e
                    ? s.copies
                    : t.o.ix === e || "Offset" === e
                    ? s.offset
                    : void 0;
                }
                return (
                  (s.propertyIndex = t.ix),
                  a.c.setGroupProperty(r),
                  a.o.setGroupProperty(r),
                  Object.defineProperties(s, {
                    copies: { get: ExpressionPropertyInterface(a.c) },
                    offset: { get: ExpressionPropertyInterface(a.o) },
                    _name: { value: t.nm },
                  }),
                  (s.mn = t.mn),
                  s
                );
              }
              function l(t, e, i) {
                var r = e.sh;
                function a(t) {
                  if (
                    "Shape" === t ||
                    "shape" === t ||
                    "Path" === t ||
                    "path" === t ||
                    "ADBE Vector Shape" === t ||
                    2 === t
                  )
                    return a.path;
                }
                return (
                  r.setGroupProperty(function (t) {
                    return 1 == t ? a : i(--t);
                  }),
                  Object.defineProperties(a, {
                    path: {
                      get: function () {
                        return r.k && r.getValue(), r;
                      },
                    },
                    shape: {
                      get: function () {
                        return r.k && r.getValue(), r;
                      },
                    },
                    _name: { value: t.nm },
                    ix: { value: t.ix },
                    propertyIndex: { value: t.ix },
                    mn: { value: t.mn },
                  }),
                  a
                );
              }
              return function (e, i, r) {
                var a;
                function s(t) {
                  if ("number" == typeof t) return a[t - 1];
                  for (var e = 0, i = a.length; e < i; ) {
                    if (a[e]._name === t) return a[e];
                    e += 1;
                  }
                }
                return (
                  (s.propertyGroup = r),
                  (a = t(e, i, s)),
                  (s.numProperties = a.length),
                  s
                );
              };
            })(),
            TextExpressionInterface = function (t) {
              var e;
              function i() {}
              return (
                Object.defineProperty(i, "sourceText", {
                  get: function () {
                    t.textProperty.getValue();
                    var i = t.textProperty.currentData.t;
                    return (
                      void 0 !== i &&
                        ((t.textProperty.currentData.t = void 0),
                        ((e = new String(i)).value = i || new String(i))),
                      e
                    );
                  },
                }),
                i
              );
            },
            LayerExpressionInterface = (function () {
              function t(t, e) {
                var i = new Matrix();
                if (
                  (i.reset(),
                  this._elem.finalTransform.mProp.applyToMatrix(i),
                  this._elem.hierarchy && this._elem.hierarchy.length)
                ) {
                  var r,
                    a = this._elem.hierarchy.length;
                  for (r = 0; r < a; r += 1)
                    this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(
                      i
                    );
                  return i.applyToPointArray(t[0], t[1], t[2] || 0);
                }
                return i.applyToPointArray(t[0], t[1], t[2] || 0);
              }
              function e(t, e) {
                var i = new Matrix();
                if (
                  (i.reset(),
                  this._elem.finalTransform.mProp.applyToMatrix(i),
                  this._elem.hierarchy && this._elem.hierarchy.length)
                ) {
                  var r,
                    a = this._elem.hierarchy.length;
                  for (r = 0; r < a; r += 1)
                    this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(
                      i
                    );
                  return i.inversePoint(t);
                }
                return i.inversePoint(t);
              }
              function i(t) {
                var e = new Matrix();
                if (
                  (e.reset(),
                  this._elem.finalTransform.mProp.applyToMatrix(e),
                  this._elem.hierarchy && this._elem.hierarchy.length)
                ) {
                  var i,
                    r = this._elem.hierarchy.length;
                  for (i = 0; i < r; i += 1)
                    this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(
                      e
                    );
                  return e.inversePoint(t);
                }
                return e.inversePoint(t);
              }
              function r() {
                return [1, 1, 1, 1];
              }
              return function (a) {
                var s;
                function n(t) {
                  switch (t) {
                    case "ADBE Root Vectors Group":
                    case "Contents":
                    case 2:
                      return n.shapeInterface;
                    case 1:
                    case 6:
                    case "Transform":
                    case "transform":
                    case "ADBE Transform Group":
                      return s;
                    case 4:
                    case "ADBE Effect Parade":
                    case "effects":
                    case "Effects":
                      return n.effect;
                  }
                }
                (n.toWorld = t),
                  (n.fromWorld = e),
                  (n.toComp = t),
                  (n.fromComp = i),
                  (n.sampleImage = r),
                  (n.sourceRectAtTime = a.sourceRectAtTime.bind(a));
                var o = getDescriptor(
                  (s = TransformExpressionInterface(
                    (n._elem = a).finalTransform.mProp
                  )),
                  "anchorPoint"
                );
                return (
                  Object.defineProperties(n, {
                    hasParent: {
                      get: function () {
                        return a.hierarchy.length;
                      },
                    },
                    parent: {
                      get: function () {
                        return a.hierarchy[0].layerInterface;
                      },
                    },
                    rotation: getDescriptor(s, "rotation"),
                    scale: getDescriptor(s, "scale"),
                    position: getDescriptor(s, "position"),
                    opacity: getDescriptor(s, "opacity"),
                    anchorPoint: o,
                    anchor_point: o,
                    transform: {
                      get: function () {
                        return s;
                      },
                    },
                    active: {
                      get: function () {
                        return a.isInRange;
                      },
                    },
                  }),
                  (n.startTime = a.data.st),
                  (n.index = a.data.ind),
                  (n.source = a.data.refId),
                  (n.height = 0 === a.data.ty ? a.data.h : 100),
                  (n.width = 0 === a.data.ty ? a.data.w : 100),
                  (n.inPoint = a.data.ip / a.comp.globalData.frameRate),
                  (n.outPoint = a.data.op / a.comp.globalData.frameRate),
                  (n._name = a.data.nm),
                  (n.registerMaskInterface = function (t) {
                    n.mask = new MaskManagerInterface(t, a);
                  }),
                  (n.registerEffectsInterface = function (t) {
                    n.effect = t;
                  }),
                  n
                );
              };
            })(),
            CompExpressionInterface = function (t) {
              function e(e) {
                for (var i = 0, r = t.layers.length; i < r; ) {
                  if (t.layers[i].nm === e || t.layers[i].ind === e)
                    return t.elements[i].layerInterface;
                  i += 1;
                }
                return null;
              }
              return (
                Object.defineProperty(e, "_name", { value: t.data.nm }),
                ((e.layer = e).pixelAspect = 1),
                (e.height = t.data.h || t.globalData.compSize.h),
                (e.width = t.data.w || t.globalData.compSize.w),
                (e.pixelAspect = 1),
                (e.frameDuration = 1 / t.globalData.frameRate),
                (e.displayStartTime = 0),
                (e.numLayers = t.layers.length),
                e
              );
            },
            TransformExpressionInterface = function (t) {
              function e(t) {
                switch (t) {
                  case "scale":
                  case "Scale":
                  case "ADBE Scale":
                  case 6:
                    return e.scale;
                  case "rotation":
                  case "Rotation":
                  case "ADBE Rotation":
                  case "ADBE Rotate Z":
                  case 10:
                    return e.rotation;
                  case "ADBE Rotate X":
                    return e.xRotation;
                  case "ADBE Rotate Y":
                    return e.yRotation;
                  case "position":
                  case "Position":
                  case "ADBE Position":
                  case 2:
                    return e.position;
                  case "ADBE Position_0":
                    return e.xPosition;
                  case "ADBE Position_1":
                    return e.yPosition;
                  case "ADBE Position_2":
                    return e.zPosition;
                  case "anchorPoint":
                  case "AnchorPoint":
                  case "Anchor Point":
                  case "ADBE AnchorPoint":
                  case 1:
                    return e.anchorPoint;
                  case "opacity":
                  case "Opacity":
                  case 11:
                    return e.opacity;
                }
              }
              if (
                (Object.defineProperty(e, "rotation", {
                  get: ExpressionPropertyInterface(t.r || t.rz),
                }),
                Object.defineProperty(e, "zRotation", {
                  get: ExpressionPropertyInterface(t.rz || t.r),
                }),
                Object.defineProperty(e, "xRotation", {
                  get: ExpressionPropertyInterface(t.rx),
                }),
                Object.defineProperty(e, "yRotation", {
                  get: ExpressionPropertyInterface(t.ry),
                }),
                Object.defineProperty(e, "scale", {
                  get: ExpressionPropertyInterface(t.s),
                }),
                t.p)
              )
                var i = ExpressionPropertyInterface(t.p);
              return (
                Object.defineProperty(e, "position", {
                  get: function () {
                    return t.p ? i() : [t.px.v, t.py.v, t.pz ? t.pz.v : 0];
                  },
                }),
                Object.defineProperty(e, "xPosition", {
                  get: ExpressionPropertyInterface(t.px),
                }),
                Object.defineProperty(e, "yPosition", {
                  get: ExpressionPropertyInterface(t.py),
                }),
                Object.defineProperty(e, "zPosition", {
                  get: ExpressionPropertyInterface(t.pz),
                }),
                Object.defineProperty(e, "anchorPoint", {
                  get: ExpressionPropertyInterface(t.a),
                }),
                Object.defineProperty(e, "opacity", {
                  get: ExpressionPropertyInterface(t.o),
                }),
                Object.defineProperty(e, "skew", {
                  get: ExpressionPropertyInterface(t.sk),
                }),
                Object.defineProperty(e, "skewAxis", {
                  get: ExpressionPropertyInterface(t.sa),
                }),
                Object.defineProperty(e, "orientation", {
                  get: ExpressionPropertyInterface(t.or),
                }),
                e
              );
            },
            ProjectInterface = (function () {
              function t(t) {
                this.compositions.push(t);
              }
              return function () {
                function e(t) {
                  for (var e = 0, i = this.compositions.length; e < i; ) {
                    if (
                      this.compositions[e].data &&
                      this.compositions[e].data.nm === t
                    )
                      return (
                        this.compositions[e].prepareFrame &&
                          this.compositions[e].data.xt &&
                          this.compositions[e].prepareFrame(this.currentFrame),
                        this.compositions[e].compInterface
                      );
                    e += 1;
                  }
                }
                return (
                  (e.compositions = []),
                  (e.currentFrame = 0),
                  (e.registerComposition = t),
                  e
                );
              };
            })(),
            EffectsExpressionInterface = (function () {
              function t(i, r, a, s) {
                var n,
                  o = [],
                  h = i.ef.length;
                for (n = 0; n < h; n += 1)
                  5 === i.ef[n].ty
                    ? o.push(
                        t(
                          i.ef[n],
                          r.effectElements[n],
                          r.effectElements[n].propertyGroup,
                          s
                        )
                      )
                    : o.push(e(r.effectElements[n], i.ef[n].ty, s, p));
                function p(t) {
                  return 1 === t ? l : a(t - 1);
                }
                var l = function (t) {
                  for (var e = i.ef, r = 0, a = e.length; r < a; ) {
                    if (t === e[r].nm || t === e[r].mn || t === e[r].ix)
                      return 5 === e[r].ty ? o[r] : o[r]();
                    r += 1;
                  }
                  return o[0]();
                };
                return (
                  (l.propertyGroup = p),
                  "ADBE Color Control" === i.mn &&
                    Object.defineProperty(l, "color", {
                      get: function () {
                        return o[0]();
                      },
                    }),
                  Object.defineProperty(l, "numProperties", {
                    get: function () {
                      return i.np;
                    },
                  }),
                  (l.active = l.enabled = 0 !== i.en),
                  l
                );
              }
              function e(t, e, i, r) {
                var a = ExpressionPropertyInterface(t.p);
                return (
                  t.p.setGroupProperty && t.p.setGroupProperty(r),
                  function () {
                    return 10 === e ? i.comp.compInterface(t.p.v) : a();
                  }
                );
              }
              return {
                createEffectsInterface: function (e, i) {
                  if (e.effectsManager) {
                    var r,
                      a = [],
                      s = e.data.ef,
                      n = e.effectsManager.effectElements.length;
                    for (r = 0; r < n; r += 1)
                      a.push(t(s[r], e.effectsManager.effectElements[r], i, e));
                    return function (t) {
                      for (
                        var i = e.data.ef || [], r = 0, s = i.length;
                        r < s;

                      ) {
                        if (t === i[r].nm || t === i[r].mn || t === i[r].ix)
                          return a[r];
                        r += 1;
                      }
                    };
                  }
                },
              };
            })(),
            MaskManagerInterface = (function () {
              function t(t, e) {
                (this._mask = t), (this._data = e);
              }
              return (
                Object.defineProperty(t.prototype, "maskPath", {
                  get: function () {
                    return (
                      this._mask.prop.k && this._mask.prop.getValue(),
                      this._mask.prop
                    );
                  },
                }),
                Object.defineProperty(t.prototype, "maskOpacity", {
                  get: function () {
                    return (
                      this._mask.op.k && this._mask.op.getValue(),
                      100 * this._mask.op.v
                    );
                  },
                }),
                function (e, i) {
                  var r,
                    a = createSizedArray(e.viewData.length),
                    s = e.viewData.length;
                  for (r = 0; r < s; r += 1)
                    a[r] = new t(e.viewData[r], e.masksProperties[r]);
                  return function (t) {
                    for (r = 0; r < s; ) {
                      if (e.masksProperties[r].nm === t) return a[r];
                      r += 1;
                    }
                  };
                }
              );
            })(),
            ExpressionPropertyInterface = (function () {
              var t = { pv: 0, v: 0, mult: 1 },
                e = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };
              function i(t, e, i) {
                Object.defineProperty(t, "velocity", {
                  get: function () {
                    return e.getVelocityAtTime(e.comp.currentFrame);
                  },
                }),
                  (t.numKeys = e.keyframes ? e.keyframes.length : 0),
                  (t.key = function (r) {
                    if (t.numKeys) {
                      var a;
                      a =
                        "s" in e.keyframes[r - 1]
                          ? e.keyframes[r - 1].s
                          : "e" in e.keyframes[r - 2]
                          ? e.keyframes[r - 2].e
                          : e.keyframes[r - 2].s;
                      var s =
                        "unidimensional" === i
                          ? new Number(a)
                          : Object.assign({}, a);
                      return (
                        (s.time =
                          e.keyframes[r - 1].t /
                          e.elem.comp.globalData.frameRate),
                        s
                      );
                    }
                    return 0;
                  }),
                  (t.valueAtTime = e.getValueAtTime),
                  (t.speedAtTime = e.getSpeedAtTime),
                  (t.velocityAtTime = e.getVelocityAtTime),
                  (t.propertyGroup = e.propertyGroup);
              }
              function r() {
                return t;
              }
              return function (a) {
                return a
                  ? "unidimensional" === a.propType
                    ? (function (e) {
                        (e && "pv" in e) || (e = t);
                        var r = 1 / e.mult,
                          a = e.pv * r,
                          s = new Number(a);
                        return (
                          (s.value = a),
                          i(s, e, "unidimensional"),
                          function () {
                            return (
                              e.k && e.getValue(),
                              (a = e.v * r),
                              s.value !== a &&
                                (((s = new Number(a)).value = a),
                                i(s, e, "unidimensional")),
                              s
                            );
                          }
                        );
                      })(a)
                    : (function (t) {
                        (t && "pv" in t) || (t = e);
                        var r = 1 / t.mult,
                          a = t.pv.length,
                          s = createTypedArray("float32", a),
                          n = createTypedArray("float32", a);
                        return (
                          (s.value = n),
                          i(s, t, "multidimensional"),
                          function () {
                            t.k && t.getValue();
                            for (var e = 0; e < a; e += 1)
                              s[e] = n[e] = t.v[e] * r;
                            return s;
                          }
                        );
                      })(a)
                  : r;
              };
            })(),
            Y4,
            Z4;
          function SliderEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
          }
          function AngleEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
          }
          function ColorEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, i);
          }
          function PointEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, i);
          }
          function LayerIndexEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
          }
          function MaskIndexEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
          }
          function CheckboxEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
          }
          function NoValueEffect() {
            this.p = {};
          }
          function EffectsManager() {}
          function EffectsManager(t, e) {
            var i = t.ef || [];
            this.effectElements = [];
            var r,
              a,
              s = i.length;
            for (r = 0; r < s; r++)
              (a = new GroupEffect(i[r], e)), this.effectElements.push(a);
          }
          function GroupEffect(t, e) {
            this.init(t, e);
          }
          (Y4 = (function () {
            function t(t, e) {
              return (
                (this.textIndex = t + 1),
                (this.textTotal = e),
                (this.v = this.getValue() * this.mult),
                this.v
              );
            }
            return function (e, i) {
              (this.pv = 1),
                (this.comp = e.comp),
                (this.elem = e),
                (this.mult = 0.01),
                (this.propType = "textSelector"),
                (this.textTotal = i.totalChars),
                (this.selectorValue = 100),
                (this.lastValue = [1, 1, 1]),
                (this.k = !0),
                (this.x = !0),
                (this.getValue = ExpressionManager.initiateExpression.bind(
                  this
                )(e, i, this)),
                (this.getMult = t),
                (this.getVelocityAtTime = expressionHelpers.getVelocityAtTime),
                this.kf
                  ? (this.getValueAtTime = expressionHelpers.getValueAtTime.bind(
                      this
                    ))
                  : (this.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(
                      this
                    )),
                (this.setGroupProperty = expressionHelpers.setGroupProperty);
            };
          })()),
            (Z4 = TextSelectorProp.getTextSelectorProp),
            (TextSelectorProp.getTextSelectorProp = function (t, e, i) {
              return 1 === e.t ? new Y4(t, e, i) : Z4(t, e, i);
            }),
            extendPrototype([DynamicPropertyContainer], GroupEffect),
            (GroupEffect.prototype.getValue =
              GroupEffect.prototype.iterateDynamicProperties),
            (GroupEffect.prototype.init = function (t, e) {
              (this.data = t),
                (this.effectElements = []),
                this.initDynamicPropertyContainer(e);
              var i,
                r,
                a = this.data.ef.length,
                s = this.data.ef;
              for (i = 0; i < a; i += 1) {
                switch (((r = null), s[i].ty)) {
                  case 0:
                    r = new SliderEffect(s[i], e, this);
                    break;
                  case 1:
                    r = new AngleEffect(s[i], e, this);
                    break;
                  case 2:
                    r = new ColorEffect(s[i], e, this);
                    break;
                  case 3:
                    r = new PointEffect(s[i], e, this);
                    break;
                  case 4:
                  case 7:
                    r = new CheckboxEffect(s[i], e, this);
                    break;
                  case 10:
                    r = new LayerIndexEffect(s[i], e, this);
                    break;
                  case 11:
                    r = new MaskIndexEffect(s[i], e, this);
                    break;
                  case 5:
                    r = new EffectsManager(s[i], e, this);
                    break;
                  default:
                    r = new NoValueEffect(s[i], e, this);
                }
                r && this.effectElements.push(r);
              }
            });
          var lottiejs = {},
            _isFrozen = !1;
          function setLocationHref(t) {
            locationHref = t;
          }
          function searchAnimations() {
            !0 === standalone
              ? animationManager.searchAnimations(
                  animationData,
                  standalone,
                  renderer
                )
              : animationManager.searchAnimations();
          }
          function setSubframeRendering(t) {
            subframeEnabled = t;
          }
          function loadAnimation(t) {
            return (
              !0 === standalone &&
                (t.animationData = JSON.parse(animationData)),
              animationManager.loadAnimation(t)
            );
          }
          function setQuality(t) {
            if ("string" == typeof t)
              switch (t) {
                case "high":
                  defaultCurveSegments = 200;
                  break;
                case "medium":
                  defaultCurveSegments = 50;
                  break;
                case "low":
                  defaultCurveSegments = 10;
              }
            else !isNaN(t) && 1 < t && (defaultCurveSegments = t);
            roundValues(!(50 <= defaultCurveSegments));
          }
          function inBrowser() {
            return "undefined" != typeof navigator;
          }
          function installPlugin(t, e) {
            "expressions" === t && (expressionsPlugin = e);
          }
          function getFactory(t) {
            switch (t) {
              case "propertyFactory":
                return PropertyFactory;
              case "shapePropertyFactory":
                return ShapePropertyFactory;
              case "matrix":
                return Matrix;
            }
          }
          function checkReady() {
            "complete" === document.readyState &&
              (clearInterval(readyStateCheckInterval), searchAnimations());
          }
          function getQueryVariable(t) {
            for (var e = queryString.split("&"), i = 0; i < e.length; i++) {
              var r = e[i].split("=");
              if (decodeURIComponent(r[0]) == t)
                return decodeURIComponent(r[1]);
            }
          }
          (lottiejs.play = animationManager.play),
            (lottiejs.pause = animationManager.pause),
            (lottiejs.setLocationHref = setLocationHref),
            (lottiejs.togglePause = animationManager.togglePause),
            (lottiejs.setSpeed = animationManager.setSpeed),
            (lottiejs.setDirection = animationManager.setDirection),
            (lottiejs.stop = animationManager.stop),
            (lottiejs.searchAnimations = searchAnimations),
            (lottiejs.registerAnimation = animationManager.registerAnimation),
            (lottiejs.loadAnimation = loadAnimation),
            (lottiejs.setSubframeRendering = setSubframeRendering),
            (lottiejs.resize = animationManager.resize),
            (lottiejs.goToAndStop = animationManager.goToAndStop),
            (lottiejs.destroy = animationManager.destroy),
            (lottiejs.setQuality = setQuality),
            (lottiejs.inBrowser = inBrowser),
            (lottiejs.installPlugin = installPlugin),
            (lottiejs.freeze = animationManager.freeze),
            (lottiejs.unfreeze = animationManager.unfreeze),
            (lottiejs.getRegisteredAnimations =
              animationManager.getRegisteredAnimations),
            (lottiejs.__getFactory = getFactory),
            (lottiejs.version = "5.5.7");
          var standalone = "__[STANDALONE]__",
            animationData = "__[ANIMATIONDATA]__",
            renderer = "";
          if (standalone) {
            var scripts = document.getElementsByTagName("script"),
              index = scripts.length - 1,
              myScript = scripts[index] || { src: "" },
              queryString = myScript.src.replace(/^[^\?]+\??/, "");
            renderer = getQueryVariable("renderer");
          }
          var readyStateCheckInterval = setInterval(checkReady, 100);
          return lottiejs;
        }),
        "function" == typeof define && __webpack_require__(1162)
          ? define(function () {
              return b(a);
            })
          : "object" ==
              _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(
                module
              ) && module.exports
          ? (module.exports = b(a))
          : ((a.lottie = b(a)), (a.bodymovin = a.lottie)));
    }.call(this, __webpack_require__(134)(module)));
  },
  59: function (t, e) {
    t.exports = function (t) {
      var e = "undefined" != typeof window && window.location;
      if (!e) throw new Error("fixUrls requires window.location");
      if (!t || "string" != typeof t) return t;
      var i = e.protocol + "//" + e.host,
        r = i + e.pathname.replace(/\/[^\/]*$/, "/");
      return t.replace(
        /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
        function (t, e) {
          var a,
            s = e
              .trim()
              .replace(/^"(.*)"$/, function (t, e) {
                return e;
              })
              .replace(/^'(.*)'$/, function (t, e) {
                return e;
              });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)
            ? t
            : ((a =
                0 === s.indexOf("//")
                  ? s
                  : 0 === s.indexOf("/")
                  ? i + s
                  : r + s.replace(/^\.\//, "")),
              "url(" + JSON.stringify(a) + ")");
        }
      );
    };
  },
  7: function (t, e) {
    function i(e) {
      return (
        (t.exports = i = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            }),
        i(e)
      );
    }
    t.exports = i;
  },
  8: function (t, e, i) {
    var r = i(44),
      a = i(12);
    t.exports = function (t, e) {
      return !e || ("object" !== r(e) && "function" != typeof e) ? a(t) : e;
    };
  },
  9: function (t, e, i) {
    var r = i(49);
    t.exports = function (t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, writable: !0, configurable: !0 },
      })),
        e && r(t, e);
    };
  },
  91: function (t, e, i) {
    "use strict";
    /** @license React v16.12.0
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r = i(54),
      a = "function" == typeof Symbol && Symbol.for,
      s = a ? Symbol.for("react.element") : 60103,
      n = a ? Symbol.for("react.portal") : 60106,
      o = a ? Symbol.for("react.fragment") : 60107,
      h = a ? Symbol.for("react.strict_mode") : 60108,
      p = a ? Symbol.for("react.profiler") : 60114,
      l = a ? Symbol.for("react.provider") : 60109,
      m = a ? Symbol.for("react.context") : 60110,
      c = a ? Symbol.for("react.forward_ref") : 60112,
      f = a ? Symbol.for("react.suspense") : 60113;
    a && Symbol.for("react.suspense_list");
    var d = a ? Symbol.for("react.memo") : 60115,
      u = a ? Symbol.for("react.lazy") : 60116;
    a && Symbol.for("react.fundamental"),
      a && Symbol.for("react.responder"),
      a && Symbol.for("react.scope");
    var y = "function" == typeof Symbol && Symbol.iterator;
    function g(t) {
      for (
        var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t,
          i = 1;
        i < arguments.length;
        i++
      )
        e += "&args[]=" + encodeURIComponent(arguments[i]);
      return (
        "Minified React error #" +
        t +
        "; visit " +
        e +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var x = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      v = {};
    function k(t, e, i) {
      (this.props = t),
        (this.context = e),
        (this.refs = v),
        (this.updater = i || x);
    }
    function b() {}
    function E(t, e, i) {
      (this.props = t),
        (this.context = e),
        (this.refs = v),
        (this.updater = i || x);
    }
    (k.prototype.isReactComponent = {}),
      (k.prototype.setState = function (t, e) {
        if ("object" != typeof t && "function" != typeof t && null != t)
          throw Error(g(85));
        this.updater.enqueueSetState(this, t, e, "setState");
      }),
      (k.prototype.forceUpdate = function (t) {
        this.updater.enqueueForceUpdate(this, t, "forceUpdate");
      }),
      (b.prototype = k.prototype);
    var S = (E.prototype = new b());
    (S.constructor = E), r(S, k.prototype), (S.isPureReactComponent = !0);
    var P = { current: null },
      A = { current: null },
      _ = Object.prototype.hasOwnProperty,
      D = { key: !0, ref: !0, __self: !0, __source: !0 };
    function C(t, e, i) {
      var r,
        a = {},
        n = null,
        o = null;
      if (null != e)
        for (r in (void 0 !== e.ref && (o = e.ref),
        void 0 !== e.key && (n = "" + e.key),
        e))
          _.call(e, r) && !D.hasOwnProperty(r) && (a[r] = e[r]);
      var h = arguments.length - 2;
      if (1 === h) a.children = i;
      else if (1 < h) {
        for (var p = Array(h), l = 0; l < h; l++) p[l] = arguments[l + 2];
        a.children = p;
      }
      if (t && t.defaultProps)
        for (r in (h = t.defaultProps)) void 0 === a[r] && (a[r] = h[r]);
      return {
        $$typeof: s,
        type: t,
        key: n,
        ref: o,
        props: a,
        _owner: A.current,
      };
    }
    function T(t) {
      return "object" == typeof t && null !== t && t.$$typeof === s;
    }
    var M = /\/+/g,
      w = [];
    function V(t, e, i, r) {
      if (w.length) {
        var a = w.pop();
        return (
          (a.result = t),
          (a.keyPrefix = e),
          (a.func = i),
          (a.context = r),
          (a.count = 0),
          a
        );
      }
      return { result: t, keyPrefix: e, func: i, context: r, count: 0 };
    }
    function B(t) {
      (t.result = null),
        (t.keyPrefix = null),
        (t.func = null),
        (t.context = null),
        (t.count = 0),
        10 > w.length && w.push(t);
    }
    function F(t, e, i) {
      return null == t
        ? 0
        : (function t(e, i, r, a) {
            var o = typeof e;
            ("undefined" !== o && "boolean" !== o) || (e = null);
            var h = !1;
            if (null === e) h = !0;
            else
              switch (o) {
                case "string":
                case "number":
                  h = !0;
                  break;
                case "object":
                  switch (e.$$typeof) {
                    case s:
                    case n:
                      h = !0;
                  }
              }
            if (h) return r(a, e, "" === i ? "." + I(e, 0) : i), 1;
            if (((h = 0), (i = "" === i ? "." : i + ":"), Array.isArray(e)))
              for (var p = 0; p < e.length; p++) {
                var l = i + I((o = e[p]), p);
                h += t(o, l, r, a);
              }
            else if (
              (null === e || "object" != typeof e
                ? (l = null)
                : (l =
                    "function" == typeof (l = (y && e[y]) || e["@@iterator"])
                      ? l
                      : null),
              "function" == typeof l)
            )
              for (e = l.call(e), p = 0; !(o = e.next()).done; )
                h += t((o = o.value), (l = i + I(o, p++)), r, a);
            else if ("object" === o)
              throw (
                ((r = "" + e),
                Error(
                  g(
                    31,
                    "[object Object]" === r
                      ? "object with keys {" + Object.keys(e).join(", ") + "}"
                      : r,
                    ""
                  )
                ))
              );
            return h;
          })(t, "", e, i);
    }
    function I(t, e) {
      return "object" == typeof t && null !== t && null != t.key
        ? (function (t) {
            var e = { "=": "=0", ":": "=2" };
            return (
              "$" +
              ("" + t).replace(/[=:]/g, function (t) {
                return e[t];
              })
            );
          })(t.key)
        : e.toString(36);
    }
    function G(t, e) {
      t.func.call(t.context, e, t.count++);
    }
    function R(t, e, i) {
      var r = t.result,
        a = t.keyPrefix;
      (t = t.func.call(t.context, e, t.count++)),
        Array.isArray(t)
          ? L(t, r, i, function (t) {
              return t;
            })
          : null != t &&
            (T(t) &&
              (t = (function (t, e) {
                return {
                  $$typeof: s,
                  type: t.type,
                  key: e,
                  ref: t.ref,
                  props: t.props,
                  _owner: t._owner,
                };
              })(
                t,
                a +
                  (!t.key || (e && e.key === t.key)
                    ? ""
                    : ("" + t.key).replace(M, "$&/") + "/") +
                  i
              )),
            r.push(t));
    }
    function L(t, e, i, r, a) {
      var s = "";
      null != i && (s = ("" + i).replace(M, "$&/") + "/"),
        F(t, R, (e = V(e, s, r, a))),
        B(e);
    }
    function O() {
      var t = P.current;
      if (null === t) throw Error(g(321));
      return t;
    }
    var N = {
        Children: {
          map: function (t, e, i) {
            if (null == t) return t;
            var r = [];
            return L(t, r, null, e, i), r;
          },
          forEach: function (t, e, i) {
            if (null == t) return t;
            F(t, G, (e = V(null, null, e, i))), B(e);
          },
          count: function (t) {
            return F(
              t,
              function () {
                return null;
              },
              null
            );
          },
          toArray: function (t) {
            var e = [];
            return (
              L(t, e, null, function (t) {
                return t;
              }),
              e
            );
          },
          only: function (t) {
            if (!T(t)) throw Error(g(143));
            return t;
          },
        },
        createRef: function () {
          return { current: null };
        },
        Component: k,
        PureComponent: E,
        createContext: function (t, e) {
          return (
            void 0 === e && (e = null),
            ((t = {
              $$typeof: m,
              _calculateChangedBits: e,
              _currentValue: t,
              _currentValue2: t,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
            }).Provider = { $$typeof: l, _context: t }),
            (t.Consumer = t)
          );
        },
        forwardRef: function (t) {
          return { $$typeof: c, render: t };
        },
        lazy: function (t) {
          return { $$typeof: u, _ctor: t, _status: -1, _result: null };
        },
        memo: function (t, e) {
          return { $$typeof: d, type: t, compare: void 0 === e ? null : e };
        },
        useCallback: function (t, e) {
          return O().useCallback(t, e);
        },
        useContext: function (t, e) {
          return O().useContext(t, e);
        },
        useEffect: function (t, e) {
          return O().useEffect(t, e);
        },
        useImperativeHandle: function (t, e, i) {
          return O().useImperativeHandle(t, e, i);
        },
        useDebugValue: function () {},
        useLayoutEffect: function (t, e) {
          return O().useLayoutEffect(t, e);
        },
        useMemo: function (t, e) {
          return O().useMemo(t, e);
        },
        useReducer: function (t, e, i) {
          return O().useReducer(t, e, i);
        },
        useRef: function (t) {
          return O().useRef(t);
        },
        useState: function (t) {
          return O().useState(t);
        },
        Fragment: o,
        Profiler: p,
        StrictMode: h,
        Suspense: f,
        createElement: C,
        cloneElement: function (t, e, i) {
          if (null == t) throw Error(g(267, t));
          var a = r({}, t.props),
            n = t.key,
            o = t.ref,
            h = t._owner;
          if (null != e) {
            if (
              (void 0 !== e.ref && ((o = e.ref), (h = A.current)),
              void 0 !== e.key && (n = "" + e.key),
              t.type && t.type.defaultProps)
            )
              var p = t.type.defaultProps;
            for (l in e)
              _.call(e, l) &&
                !D.hasOwnProperty(l) &&
                (a[l] = void 0 === e[l] && void 0 !== p ? p[l] : e[l]);
          }
          var l = arguments.length - 2;
          if (1 === l) a.children = i;
          else if (1 < l) {
            p = Array(l);
            for (var m = 0; m < l; m++) p[m] = arguments[m + 2];
            a.children = p;
          }
          return {
            $$typeof: s,
            type: t.type,
            key: n,
            ref: o,
            props: a,
            _owner: h,
          };
        },
        createFactory: function (t) {
          var e = C.bind(null, t);
          return (e.type = t), e;
        },
        isValidElement: T,
        version: "16.12.0",
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
          ReactCurrentDispatcher: P,
          ReactCurrentBatchConfig: { suspense: null },
          ReactCurrentOwner: A,
          IsSomeRendererActing: { current: !1 },
          assign: r,
        },
      },
      z = { default: N },
      j = (z && N) || z;
    t.exports = j.default || j;
  },
});
//# sourceMappingURL=newtab.f67ccc78a76408d1dc20.js.map
