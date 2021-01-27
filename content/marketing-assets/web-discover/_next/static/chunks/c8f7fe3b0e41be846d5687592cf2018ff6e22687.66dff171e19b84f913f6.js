(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [10],
  {
    "59lV": function (t, e, r) {},
    IMpf: function (t, e, r) {},
    KQm4: function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return s;
      });
      var n = r("a3WO");
      var i = r("BsWD");
      function s(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Object(n.a)(t);
          })(t) ||
          (function (t) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t))
              return Array.from(t);
          })(t) ||
          Object(i.a)(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    Sdyp: function (t, e, r) {
      !(function (t) {
        "use strict";
        var e,
          r,
          n,
          i,
          s,
          a,
          o,
          u,
          l,
          c,
          f,
          h,
          p,
          d,
          g,
          m,
          _,
          v,
          y,
          b,
          x,
          w,
          T,
          O,
          P,
          M = 1,
          k = [],
          S = [],
          C = Date.now,
          A = C(),
          L = 0,
          E = 1,
          R = function (t) {
            return t;
          },
          N = function () {
            return "undefined" !== typeof window;
          },
          D = function () {
            return e || (N() && (e = window.gsap) && e.registerPlugin && e);
          },
          z = function (t) {
            return !!~o.indexOf(t);
          },
          j = function (t, e) {
            return ~k.indexOf(t) && k[k.indexOf(t) + 1][e];
          },
          B = function (t, e) {
            var r = e.s,
              n = e.sc,
              i = S.indexOf(t),
              s = ~i
                ? S[i + 1]
                : j(t, r) ||
                  (z(t)
                    ? n
                    : function (e) {
                        return arguments.length ? (t[r] = e) : t[r];
                      });
            return !~i && S.push(t, s), s;
          },
          F = function (t) {
            return (
              j(t, "getBoundingClientRect") ||
              (z(t)
                ? function () {
                    return (
                      (zt.width = n.innerWidth), (zt.height = n.innerHeight), zt
                    );
                  }
                : function () {
                    return et(t);
                  })
            );
          },
          I = function (t, e) {
            var r = e.s,
              i = e.d2,
              o = e.d,
              u = e.a;
            return (r = "scroll" + i) && (u = j(t, r))
              ? u() - F(t)()[o]
              : z(t)
              ? Math.max(s[r], a[r]) -
                (n["inner" + i] || s["client" + i] || a["client" + i])
              : t[r] - t["offset" + i];
          },
          Y = function (t, e) {
            for (var r = 0; r < x.length; r += 3)
              (!e || ~e.indexOf(x[r + 1])) && t(x[r], x[r + 1], x[r + 2]);
          },
          X = function (t) {
            return "string" === typeof t;
          },
          U = function (t) {
            return "function" === typeof t;
          },
          q = function (t) {
            return "number" === typeof t;
          },
          V = function (t) {
            return "object" === typeof t;
          },
          W = function (t) {
            return U(t) && t();
          },
          G = function (t, e) {
            return function () {
              var r = W(t),
                n = W(e);
              return function () {
                W(r), W(n);
              };
            };
          },
          Q = Math.abs,
          H = "padding",
          Z = "px",
          $ = {
            s: "scrollLeft",
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: function (t) {
              return arguments.length
                ? n.scrollTo(t, J.sc())
                : n.pageXOffset ||
                    i.scrollLeft ||
                    s.scrollLeft ||
                    a.scrollLeft ||
                    0;
            },
          },
          J = {
            s: "scrollTop",
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: $,
            sc: function (t) {
              return arguments.length
                ? n.scrollTo($.sc(), t)
                : n.pageYOffset ||
                    i.scrollTop ||
                    s.scrollTop ||
                    a.scrollTop ||
                    0;
            },
          },
          K = function (t) {
            return n.getComputedStyle(t);
          },
          tt = function (t, e) {
            for (var r in e) r in t || (t[r] = e[r]);
            return t;
          },
          et = function (t, r) {
            var n =
                r &&
                "matrix(1, 0, 0, 1, 0, 0)" !== K(t)[_] &&
                e
                  .to(t, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0,
                  })
                  .progress(1),
              i = t.getBoundingClientRect();
            return n && n.progress(0).kill(), i;
          },
          rt = function (t, e) {
            var r = e.d2;
            return t["offset" + r] || t["client" + r] || 0;
          },
          nt = function (t, e, r, n) {
            return r.split(",").forEach(function (r) {
              return t(e, r, n);
            });
          },
          it = function (t, e, r) {
            return t.addEventListener(e, r, { passive: !0 });
          },
          st = function (t, e, r) {
            return t.removeEventListener(e, r);
          },
          at = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal",
          },
          ot = { toggleActions: "play", anticipatePin: 0 },
          ut = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
          lt = function (t, e) {
            if (X(t)) {
              var r = t.indexOf("="),
                n = ~r
                  ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1))
                  : 0;
              n &&
                (t.indexOf("%") > r && (n *= e / 100),
                (t = t.substr(0, r - 1))),
                (t =
                  n +
                  (t in ut
                    ? ut[t] * e
                    : ~t.indexOf("%")
                    ? (parseFloat(t) * e) / 100
                    : parseFloat(t) || 0));
            }
            return t;
          },
          ct = function (t, e, r, n, s, o, u) {
            var l = s.startColor,
              c = s.endColor,
              f = s.fontSize,
              h = s.indent,
              p = s.fontWeight,
              d = i.createElement("div"),
              g = z(r) || "fixed" === j(r, "pinType"),
              m = -1 !== t.indexOf("scroller"),
              _ = g ? a : r,
              v = -1 !== t.indexOf("start"),
              y = v ? l : c,
              b =
                "border-color:" +
                y +
                ";font-size:" +
                f +
                ";color:" +
                y +
                ";font-weight:" +
                p +
                ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            return (
              (b += "position:" + (m && g ? "fixed;" : "absolute;")),
              (m || !g) &&
                (b +=
                  (n === J ? "right" : "bottom") +
                  ":" +
                  (o + parseFloat(h)) +
                  "px;"),
              u &&
                (b +=
                  "box-sizing:border-box;text-align:left;width:" +
                  u.offsetWidth +
                  "px;"),
              (d._isStart = v),
              d.setAttribute("class", "gsap-marker-" + t),
              (d.style.cssText = b),
              (d.innerText = e || 0 === e ? t + "-" + e : t),
              _.insertBefore(d, _.children[0]),
              (d._offset = d["offset" + n.op.d2]),
              ft(d, 0, n, v),
              d
            );
          },
          ft = function (t, r, n, i) {
            var s = { display: "block" },
              a = n[i ? "os2" : "p2"],
              o = n[i ? "p2" : "os2"];
            (t._isFlipped = i),
              (s[n.a + "Percent"] = i ? -100 : 0),
              (s[n.a] = i ? 1 : 0),
              (s["border" + a + "Width"] = 1),
              (s["border" + o + "Width"] = 0),
              (s[n.p] = r),
              e.set(t, s);
          },
          ht = [],
          pt = {},
          dt = function () {
            return c || (c = l(Ct));
          },
          gt = function () {
            c || ((c = l(Ct)), L || wt("scrollStart"), (L = C()));
          },
          mt = function () {
            return !g && u.restart(!0);
          },
          _t = {},
          vt = [],
          yt = [],
          bt = function (t) {
            var r = e.ticker.frame,
              i = [],
              s = 0;
            if (P !== r || M) {
              for (Pt(); s < yt.length; s += 3)
                n.matchMedia(yt[s]).matches
                  ? i.push(s)
                  : Pt(1, yt[s]) || (U(yt[s + 2]) && yt[s + 2]());
              for (Ot(), s = 0; s < i.length; s++)
                (O = yt[i[s]]), (yt[i[s] + 2] = yt[i[s] + 1](t));
              (O = 0), Mt(0, 1), (P = r);
            }
          },
          xt = function t() {
            return st(It, "scrollEnd", t) || Mt(!0);
          },
          wt = function (t) {
            return (
              (_t[t] &&
                _t[t].map(function (t) {
                  return t();
                })) ||
              vt
            );
          },
          Tt = [],
          Ot = function (t) {
            for (var e = 0; e < Tt.length; e += 4)
              (t && Tt[e + 3] !== t) ||
                ((Tt[e].style.cssText = Tt[e + 1]), (Tt[e + 2].uncache = 1));
          },
          Pt = function (t, e) {
            var r;
            for (v = 0; v < ht.length; v++)
              (r = ht[v]),
                (e && r.media !== e) ||
                  (t
                    ? r.kill(1)
                    : (r.scroll.rec || (r.scroll.rec = r.scroll()),
                      r.revert()));
            Ot(e), e || wt("revert");
          },
          Mt = function (t, e) {
            if (!L || t) {
              var r = wt("refreshInit");
              for (w && It.sort(), e || Pt(), v = 0; v < ht.length; v++)
                ht[v].refresh();
              for (
                r.forEach(function (t) {
                  return t && t.render && t.render(-1);
                }),
                  v = ht.length;
                v--;

              )
                ht[v].scroll.rec = 0;
              wt("refresh");
            } else it(It, "scrollEnd", xt);
          },
          kt = 0,
          St = 1,
          Ct = function () {
            var t = ht.length,
              e = C(),
              r = e - A >= 50,
              n = t && ht[0].scroll();
            if (
              ((St = kt > n ? -1 : 1),
              (kt = n),
              r &&
                (L && !m && e - L > 200 && ((L = 0), wt("scrollEnd")),
                (p = A),
                (A = e)),
              St < 0)
            ) {
              for (v = t; v--; ) ht[v].update(0, r);
              St = 1;
            } else for (v = 0; v < t; v++) ht[v] && ht[v].update(0, r);
            c = 0;
          },
          At = [
            "left",
            "top",
            "bottom",
            "right",
            "marginBottom",
            "marginRight",
            "marginTop",
            "marginLeft",
            "display",
            "flexShrink",
            "float",
          ],
          Lt = At.concat([
            "width",
            "height",
            "boxSizing",
            "maxWidth",
            "maxHeight",
            "position",
            "margin",
            H,
            "paddingTop",
            "paddingRight",
            "paddingBottom",
            "paddingLeft",
          ]),
          Et = function (t, e, r, n) {
            if (t.parentNode !== e) {
              for (var i, s = At.length, a = e.style, o = t.style; s--; )
                a[(i = At[s])] = r[i];
              (a.position =
                "absolute" === r.position ? "absolute" : "relative"),
                "inline" === r.display && (a.display = "inline-block"),
                (o.bottom = o.right = "auto"),
                (a.overflow = "visible"),
                (a.boxSizing = "border-box"),
                (a.width = rt(t, $) + Z),
                (a.height = rt(t, J) + Z),
                (a.padding = o.margin = o.top = o.left = "0"),
                Nt(n),
                (o.width = r.width),
                (o.height = r.height),
                (o.padding = r.padding),
                t.parentNode.insertBefore(e, t),
                e.appendChild(t);
            }
          },
          Rt = /([A-Z])/g,
          Nt = function (t) {
            if (t)
              for (var e, r, n = t.t.style, i = t.length, s = 0; s < i; s += 2)
                (r = t[s + 1]),
                  (e = t[s]),
                  r
                    ? (n[e] = r)
                    : n[e] &&
                      n.removeProperty(e.replace(Rt, "-$1").toLowerCase());
          },
          Dt = function (t) {
            for (var e = Lt.length, r = t.style, n = [], i = 0; i < e; i++)
              n.push(Lt[i], r[Lt[i]]);
            return (n.t = t), n;
          },
          zt = { left: 0, top: 0 },
          jt = function (t, e, r, n, i, o, u, l, c, h, p, d) {
            if (
              (U(t) && (t = t(l)),
              X(t) &&
                "max" === t.substr(0, 3) &&
                (t = d + ("=" === t.charAt(4) ? lt("0" + t.substr(3), r) : 0)),
              q(t))
            )
              u && ft(u, r, n, !0);
            else {
              U(e) && (e = e(l));
              var g,
                m,
                _,
                v = f(e)[0] || a,
                y = et(v) || {},
                b = t.split(" ");
              (y && (y.left || y.top)) ||
                "none" !== K(v).display ||
                ((_ = v.style.display),
                (v.style.display = "block"),
                (y = et(v)),
                _ ? (v.style.display = _) : v.style.removeProperty("display")),
                (g = lt(b[0], y[n.d])),
                (m = lt(b[1] || "0", r)),
                (t = y[n.p] - c[n.p] - h + g + i - m),
                u && ft(u, m, n, r - m < 20 || (u._isStart && m > 20)),
                (r -= r - m);
            }
            if (o) {
              var x = t + r,
                w = o._isStart;
              (d = "scroll" + n.d2),
                ft(
                  o,
                  x,
                  n,
                  (w && x > 20) ||
                    (!w &&
                      (p ? Math.max(a[d], s[d]) : o.parentNode[d]) <= x + 1)
                ),
                p &&
                  ((c = et(u)),
                  p && (o.style[n.op.p] = c[n.op.p] - n.op.m - o._offset + Z));
            }
            return Math.round(t);
          },
          Bt = /(?:webkit|moz|length)/i,
          Ft = function (t, r) {
            var n,
              i = B(t, r),
              s = "_scroll" + r.p2;
            return (
              (t[s] = i),
              function r(a, o, u, l, c) {
                var f = r.tween,
                  h = o.onComplete,
                  p = {};
                return (
                  f && f.kill(),
                  (n = i()),
                  (o[s] = a),
                  (o.modifiers = p),
                  (p[s] = function (t) {
                    return (
                      Math.abs(i() - n) > 7
                        ? (f.kill(), (r.tween = 0), (t = i()))
                        : l && (t = u + l * f.ratio + c * f.ratio * f.ratio),
                      (n = Math.round(t))
                    );
                  }),
                  (o.onComplete = function () {
                    (r.tween = 0), h && h.call(f);
                  }),
                  (f = r.tween = e.to(t, o))
                );
              }
            );
          };
        $.op = J;
        var It = (function () {
          function t(n, i) {
            r ||
              t.register(e) ||
              console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
              this.init(n, i);
          }
          return (
            (t.prototype.init = function (r, o) {
              if (((this.progress = 0), this.vars && this.kill(1), E)) {
                var u,
                  l,
                  c,
                  d,
                  _,
                  y,
                  b,
                  x,
                  P,
                  S,
                  A,
                  N,
                  D,
                  Y,
                  W,
                  G,
                  nt,
                  ut,
                  ft,
                  dt,
                  _t,
                  vt,
                  yt,
                  bt,
                  wt,
                  Tt,
                  Ot,
                  Pt,
                  Mt,
                  kt,
                  Ct,
                  At,
                  Lt,
                  Rt,
                  It,
                  Yt,
                  Xt,
                  Ut,
                  qt,
                  Vt = (r = tt(
                    X(r) || q(r) || r.nodeType ? { trigger: r } : r,
                    ot
                  )).horizontal
                    ? $
                    : J,
                  Wt = r,
                  Gt = Wt.onUpdate,
                  Qt = Wt.toggleClass,
                  Ht = Wt.id,
                  Zt = Wt.onToggle,
                  $t = Wt.onRefresh,
                  Jt = Wt.scrub,
                  Kt = Wt.trigger,
                  te = Wt.pin,
                  ee = Wt.pinSpacing,
                  re = Wt.invalidateOnRefresh,
                  ne = Wt.anticipatePin,
                  ie = Wt.onScrubComplete,
                  se = Wt.onSnapComplete,
                  ae = Wt.once,
                  oe = Wt.snap,
                  ue = Wt.pinReparent,
                  le = !Jt && 0 !== Jt,
                  ce = f(r.scroller || n)[0],
                  fe = e.core.getCache(ce),
                  he = z(ce),
                  pe = he || "fixed" === j(ce, "pinType"),
                  de = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
                  ge = le && (ae ? "play" : r.toggleActions).split(" "),
                  me = "markers" in r ? r.markers : ot.markers,
                  _e = he
                    ? 0
                    : parseFloat(K(ce)["border" + Vt.p2 + "Width"]) || 0,
                  ve = this,
                  ye =
                    r.onRefreshInit &&
                    function () {
                      return r.onRefreshInit(ve);
                    },
                  be = (function (t, e, r) {
                    var i = r.d,
                      s = r.d2,
                      a = r.a;
                    return (a = j(t, "getBoundingClientRect"))
                      ? function () {
                          return a()[i];
                        }
                      : function () {
                          return (e ? n["inner" + s] : t["client" + s]) || 0;
                        };
                  })(ce, he, Vt),
                  xe = (function (t, e) {
                    return !e || ~k.indexOf(t)
                      ? F(t)
                      : function () {
                          return zt;
                        };
                  })(ce, he);
                (ve.media = O),
                  (ne *= 45),
                  ht.push(ve),
                  (ve.scroller = ce),
                  (ve.scroll = B(ce, Vt)),
                  (_ = ve.scroll()),
                  (ve.vars = r),
                  (o = o || r.animation),
                  "refreshPriority" in r && (w = 1),
                  (fe.tweenScroll = fe.tweenScroll || {
                    top: Ft(ce, J),
                    left: Ft(ce, $),
                  }),
                  (ve.tweenTo = u = fe.tweenScroll[Vt.p]),
                  o &&
                    ((o.vars.lazy = !1),
                    o._initted ||
                      (!1 !== o.vars.immediateRender &&
                        !1 !== r.immediateRender &&
                        o.render(0, !0, !0)),
                    (ve.animation = o.pause()),
                    (o.scrollTrigger = ve),
                    (Lt = q(Jt) && Jt) &&
                      (At = e.to(o, {
                        ease: "power3",
                        duration: Lt,
                        onComplete: function () {
                          return ie && ie(ve);
                        },
                      })),
                    (Mt = 0),
                    Ht || (Ht = o.vars.id)),
                  oe &&
                    (V(oe) || (oe = { snapTo: oe }),
                    e.set(he ? [a, s] : ce, { scrollBehavior: "auto" }),
                    (c = U(oe.snapTo)
                      ? oe.snapTo
                      : "labels" === oe.snapTo
                      ? (function (t) {
                          return function (r) {
                            var n,
                              i = [],
                              s = t.labels,
                              a = t.duration();
                            for (n in s) i.push(s[n] / a);
                            return e.utils.snap(i, r);
                          };
                        })(o)
                      : e.utils.snap(oe.snapTo)),
                    (Rt = oe.duration || { min: 0.1, max: 2 }),
                    (Rt = V(Rt) ? h(Rt.min, Rt.max) : h(Rt, Rt)),
                    (It = e
                      .delayedCall(oe.delay || Lt / 2 || 0.1, function () {
                        if (!L || (L === Ct && !m)) {
                          var t = o && !le ? o.totalProgress() : ve.progress,
                            e = ((t - kt) / (C() - p)) * 1e3 || 0,
                            r = (Q(e / 2) * e) / 0.185,
                            n = t + r,
                            i = h(0, 1, c(n, ve)),
                            s = i - t - r,
                            a = ve.scroll(),
                            l = Math.round(b + i * Y),
                            f = u.tween;
                          if (a <= x && a >= b) {
                            if (f && !f._initted) {
                              if (f.data <= Math.abs(l - a)) return;
                              f.kill();
                            }
                            u(
                              l,
                              {
                                duration: Rt(
                                  Q(
                                    (0.185 * Math.max(Q(n - t), Q(i - t))) /
                                      e /
                                      0.05 || 0
                                  )
                                ),
                                ease: oe.ease || "power3",
                                data: Math.abs(l - a),
                                onComplete: function () {
                                  (Mt = kt =
                                    o && !le ? o.totalProgress() : ve.progress),
                                    se && se(ve);
                                },
                              },
                              b + t * Y,
                              r * Y,
                              s * Y
                            );
                          }
                        } else It.restart(!0);
                      })
                      .pause())),
                  Ht && (pt[Ht] = ve),
                  (Kt = ve.trigger = f(Kt || te)[0]),
                  (te = !0 === te ? Kt : f(te)[0]),
                  X(Qt) && (Qt = { targets: Kt, className: Qt }),
                  te &&
                    (!1 === ee ||
                      "margin" === ee ||
                      (ee = "flex" !== K(te.parentNode).display && H),
                    (ve.pin = te),
                    !1 !== r.force3D && e.set(te, { force3D: !0 }),
                    (l = e.core.getCache(te)).spacer
                      ? (W = l.pinState)
                      : ((l.spacer = ut = i.createElement("div")),
                        ut.setAttribute(
                          "class",
                          "pin-spacer" + (Ht ? " pin-spacer-" + Ht : "")
                        ),
                        (l.pinState = W = Dt(te))),
                    (ve.spacer = ut = l.spacer),
                    (Pt = K(te)),
                    (bt = Pt[ee + Vt.os2]),
                    (dt = e.getProperty(te)),
                    (_t = e.quickSetter(te, Vt.a, Z)),
                    te.firstChild &&
                      !I(te, Vt) &&
                      (te.style.overflow = "hidden"),
                    Et(te, ut, Pt),
                    (nt = Dt(te))),
                  me &&
                    ((D = V(me) ? tt(me, at) : at),
                    (A = ct("scroller-start", Ht, ce, Vt, D, 0)),
                    (N = ct("scroller-end", Ht, ce, Vt, D, 0, A)),
                    (ft = A["offset" + Vt.op.d2]),
                    (P = ct("start", Ht, ce, Vt, D, ft)),
                    (S = ct("end", Ht, ce, Vt, D, ft)),
                    pe ||
                      (((qt = ce).style.position =
                        "absolute" === K(qt).position
                          ? "absolute"
                          : "relative"),
                      e.set([A, N], { force3D: !0 }),
                      (Tt = e.quickSetter(A, Vt.a, Z)),
                      (Ot = e.quickSetter(N, Vt.a, Z)))),
                  (ve.revert = function (t) {
                    var e = !1 !== t || !ve.enabled,
                      r = g;
                    e !== d &&
                      (e &&
                        ((Xt = Math.max(ve.scroll(), ve.scroll.rec || 0)),
                        (Yt = ve.progress),
                        (Ut = o && o.progress())),
                      P &&
                        [P, S, A, N].forEach(function (t) {
                          return (t.style.display = e ? "none" : "block");
                        }),
                      (g = 1),
                      ve.update(e),
                      (g = r),
                      te &&
                        (e
                          ? (function (t, e, r) {
                              if ((Nt(r), t.parentNode === e)) {
                                var n = e.parentNode;
                                n && (n.insertBefore(t, e), n.removeChild(e));
                              }
                            })(te, ut, W)
                          : Et(te, ut, K(te), wt)),
                      (d = e));
                  }),
                  (ve.refresh = function (n) {
                    if (!g && ve.enabled)
                      if (te && n && L) it(t, "scrollEnd", xt);
                      else {
                        (g = 1),
                          At && At.kill(),
                          re && o && o.progress(0).invalidate(),
                          d || ve.revert();
                        for (
                          var i,
                            s,
                            u,
                            l,
                            c,
                            f,
                            h,
                            p = be(),
                            m = xe(),
                            v = I(ce, Vt),
                            w = 0,
                            T = 0,
                            O = r.end,
                            M = r.endTrigger || Kt,
                            k = r.start || (te || !Kt ? "0 0" : "0 100%"),
                            C = (Kt && Math.max(0, ht.indexOf(ve))) || 0,
                            E = C;
                          E--;

                        )
                          (h = ht[E].pin) &&
                            (h === Kt || h === te) &&
                            ht[E].revert();
                        for (
                          b =
                            jt(
                              k,
                              Kt,
                              p,
                              Vt,
                              ve.scroll(),
                              P,
                              A,
                              ve,
                              m,
                              _e,
                              pe,
                              v
                            ) || (te ? -0.001 : 0),
                            U(O) && (O = O(ve)),
                            X(O) &&
                              !O.indexOf("+=") &&
                              (~O.indexOf(" ")
                                ? (O = (X(k) ? k.split(" ")[0] : "") + O)
                                : ((w = lt(O.substr(2), p)),
                                  (O = X(k) ? k : b + w),
                                  (M = Kt))),
                            x =
                              Math.max(
                                b,
                                jt(
                                  O || (M ? "100% 0" : v),
                                  M,
                                  p,
                                  Vt,
                                  ve.scroll() + w,
                                  S,
                                  N,
                                  ve,
                                  m,
                                  _e,
                                  pe,
                                  v
                                )
                              ) || -0.001,
                            Y = x - b || ((b -= 0.01) && 0.001),
                            w = 0,
                            E = C;
                          E--;

                        )
                          (h = (f = ht[E]).pin) &&
                            f.start - f._pinPush < b &&
                            ((i = f.end - f.start),
                            h === Kt && (w += i),
                            h === te && (T += i));
                        if (
                          ((b += w),
                          (x += w),
                          (ve._pinPush = T),
                          P &&
                            w &&
                            (((i = {})[Vt.a] = "+=" + w), e.set([P, S], i)),
                          te)
                        )
                          (i = K(te)),
                            (l = Vt === J),
                            (u = ve.scroll()),
                            (vt = parseFloat(dt(Vt.a)) + T),
                            Et(te, ut, i),
                            (nt = Dt(te)),
                            (s = et(te, !0)),
                            ee &&
                              (((wt = [ee + Vt.os2, Y + T + Z]).t = ut),
                              (E = ee === H ? rt(te, Vt) + Y + T : 0) &&
                                wt.push(Vt.d, E + Z),
                              Nt(wt),
                              pe && ve.scroll(Xt)),
                            pe &&
                              (((c = {
                                top: s.top + (l ? u - b : 0) + Z,
                                left: s.left + (l ? 0 : u - b) + Z,
                                boxSizing: "border-box",
                                position: "fixed",
                              }).width = c.maxWidth = Math.ceil(s.width) + Z),
                              (c.height = c.maxHeight =
                                Math.ceil(s.height) + Z),
                              (c.margin = c.marginTop = c.marginRight = c.marginBottom = c.marginLeft =
                                "0"),
                              (c.padding = i.padding),
                              (c.paddingTop = i.paddingTop),
                              (c.paddingRight = i.paddingRight),
                              (c.paddingBottom = i.paddingBottom),
                              (c.paddingLeft = i.paddingLeft),
                              (G = (function (t, e, r) {
                                for (
                                  var n, i = [], s = t.length, a = r ? 8 : 0;
                                  a < s;
                                  a += 2
                                )
                                  (n = t[a]),
                                    i.push(n, n in e ? e[n] : t[a + 1]);
                                return (i.t = t.t), i;
                              })(W, c, ue))),
                            o
                              ? (o.progress(1, !0),
                                (yt = dt(Vt.a) - vt + Y + T),
                                Y !== yt && G.splice(G.length - 2, 2),
                                o.progress(0, !0))
                              : (yt = Y);
                        else if (Kt && ve.scroll())
                          for (s = Kt.parentNode; s && s !== a; )
                            s._pinOffset &&
                              ((b -= s._pinOffset), (x -= s._pinOffset)),
                              (s = s.parentNode);
                        for (E = 0; E < C; E++)
                          (f = ht[E].pin) &&
                            (f === Kt || f === te) &&
                            ht[E].revert(!1);
                        (ve.start = b),
                          (ve.end = x),
                          (_ = y = ve.scroll()) < Xt && ve.scroll(Xt),
                          ve.revert(!1),
                          (g = 0),
                          Ut && le && o.progress(Ut, !0),
                          Yt !== ve.progress &&
                            (At && o.totalProgress(Yt, !0),
                            (ve.progress = Yt),
                            ve.update()),
                          te &&
                            ee &&
                            (ut._pinOffset = Math.round(ve.progress * yt)),
                          $t && $t(ve);
                      }
                  }),
                  (ve.getVelocity = function () {
                    return ((ve.scroll() - y) / (C() - p)) * 1e3 || 0;
                  }),
                  (ve.update = function (t, e) {
                    var r,
                      n,
                      i,
                      s,
                      l,
                      c = ve.scroll(),
                      h = t ? 0 : (c - b) / Y,
                      d = h < 0 ? 0 : h > 1 ? 1 : h || 0,
                      m = ve.progress;
                    if (
                      (e &&
                        ((y = _),
                        (_ = c),
                        oe &&
                          ((kt = Mt), (Mt = o && !le ? o.totalProgress() : d))),
                      ne &&
                        !d &&
                        te &&
                        !g &&
                        !M &&
                        L &&
                        b < c + ((c - y) / (C() - p)) * ne &&
                        (d = 1e-4),
                      d !== m && ve.enabled)
                    ) {
                      if (
                        ((s =
                          (l =
                            (r = ve.isActive = !!d && d < 1) !==
                            (!!m && m < 1)) || !!d !== !!m),
                        (ve.direction = d > m ? 1 : -1),
                        (ve.progress = d),
                        le ||
                          (!At || g || M
                            ? o && o.totalProgress(d, !!g)
                            : ((At.vars.totalProgress = d),
                              At.invalidate().restart())),
                        te)
                      )
                        if ((t && ee && (ut.style[ee + Vt.os2] = bt), pe)) {
                          if (s) {
                            if (
                              ((i =
                                !t && d > m && x + 1 > c && c + 1 >= I(ce, Vt)),
                              ue)
                            ) {
                              if (!g && (r || i)) {
                                var v = et(te, !0),
                                  w = c - b;
                                (te.style.top = v.top + (Vt === J ? w : 0) + Z),
                                  (te.style.left =
                                    v.left + (Vt === J ? 0 : w) + Z);
                              }
                              !(function (t, e) {
                                if (t.parentNode !== e) {
                                  var r,
                                    n,
                                    i = t.style;
                                  if (e === a)
                                    for (r in ((t._stOrig = i.cssText),
                                    (n = K(t))))
                                      +r ||
                                        Bt.test(r) ||
                                        !n[r] ||
                                        "string" !== typeof i[r] ||
                                        "0" === r ||
                                        (i[r] = n[r]);
                                  else i.cssText = t._stOrig;
                                  e.appendChild(t);
                                }
                              })(te, g || (!r && !i) ? ut : a);
                            }
                            Nt(r || i ? G : nt),
                              (yt !== Y && d < 1 && r) ||
                                _t(vt + (1 !== d || i ? 0 : yt));
                          }
                        } else _t(vt + yt * d);
                      !oe || u.tween || g || M || ((Ct = L), It.restart(!0)),
                        Qt &&
                          l &&
                          (!ae || r) &&
                          f(Qt.targets).forEach(function (t) {
                            return t.classList[r ? "add" : "remove"](
                              Qt.className
                            );
                          }),
                        Gt && !le && !t && Gt(ve),
                        s && !g
                          ? ((n = d && !m ? 0 : 1 === d ? 1 : 1 === m ? 2 : 3),
                            le &&
                              ((i =
                                (!l && "none" !== ge[n + 1] && ge[n + 1]) ||
                                ge[n]),
                              o &&
                                ("complete" === i || "reset" === i || i in o) &&
                                ("complete" === i
                                  ? o.pause().totalProgress(1)
                                  : "reset" === i
                                  ? o.restart(!0).pause()
                                  : o[i]()),
                              Gt && Gt(ve)),
                            (!l && T) ||
                              (Zt && l && Zt(ve),
                              de[n] && de[n](ve),
                              ae && (1 === d ? ve.kill(!1, 1) : (de[n] = 0)),
                              l || (de[(n = 1 === d ? 1 : 3)] && de[n](ve))))
                          : le && Gt && !g && Gt(ve);
                    }
                    Ot && (Tt(c + (A._isFlipped ? 1 : 0)), Ot(c));
                  }),
                  (ve.enable = function () {
                    ve.enabled ||
                      ((ve.enabled = !0),
                      it(ce, "resize", mt),
                      it(ce, "scroll", gt),
                      ye && it(t, "refreshInit", ye),
                      o && o.add
                        ? e.delayedCall(0.01, ve.refresh) &&
                          (Y = 0.01) &&
                          (b = x = 0)
                        : ve.refresh());
                  }),
                  (ve.disable = function (e, r) {
                    if (
                      ve.enabled &&
                      (!1 !== e && ve.revert(),
                      (ve.enabled = ve.isActive = !1),
                      r || (At && At.pause()),
                      (Xt = 0),
                      l && (l.uncache = 1),
                      ye && st(t, "refreshInit", ye),
                      It && (It.pause(), u.tween && u.tween.kill()),
                      !he)
                    ) {
                      for (var n = ht.length; n--; )
                        if (ht[n].scroller === ce && ht[n] !== ve) return;
                      st(ce, "resize", mt), st(ce, "scroll", gt);
                    }
                  }),
                  (ve.kill = function (t, e) {
                    ve.disable(t, e), Ht && delete pt[Ht];
                    var r = ht.indexOf(ve);
                    ht.splice(r, 1),
                      r === v && St > 0 && v--,
                      o &&
                        ((o.scrollTrigger = null),
                        t && o.render(-1),
                        (e && At) || o.kill()),
                      P &&
                        [P, S, A, N].forEach(function (t) {
                          return t.parentNode.removeChild(t);
                        }),
                      l && (l.uncache = 1);
                  }),
                  ve.enable();
              } else this.update = this.refresh = this.kill = R;
            }),
            (t.register = function (c) {
              if (
                !r &&
                ((e = c || D()),
                N() &&
                  window.document &&
                  ((n = window),
                  (i = document),
                  (s = i.documentElement),
                  (a = i.body)),
                e &&
                  ((f = e.utils.toArray),
                  (h = e.utils.clamp),
                  e.core.globals("ScrollTrigger", t),
                  a))
              ) {
                (l =
                  n.requestAnimationFrame ||
                  function (t) {
                    return setTimeout(t, 16);
                  }),
                  it(n, "mousewheel", gt),
                  (o = [n, i, s, a]),
                  it(i, "scroll", gt);
                var p,
                  g = a.style,
                  v = g.borderTop;
                (g.borderTop = "1px solid #000"),
                  (p = et(a)),
                  (J.m = Math.round(p.top + J.sc()) || 0),
                  ($.m = Math.round(p.left + $.sc()) || 0),
                  v ? (g.borderTop = v) : g.removeProperty("border-top"),
                  (d = setInterval(dt, 200)),
                  e.delayedCall(0.5, function () {
                    return (M = 0);
                  }),
                  it(i, "touchcancel", R),
                  it(a, "touchstart", R),
                  nt(it, i, "pointerdown,touchstart,mousedown", function () {
                    return (m = 1);
                  }),
                  nt(it, i, "pointerup,touchend,mouseup", function () {
                    return (m = 0);
                  }),
                  (_ = e.utils.checkPrefix("transform")),
                  Lt.push(_),
                  (r = C()),
                  (u = e.delayedCall(0.2, Mt).pause()),
                  (x = [
                    i,
                    "visibilitychange",
                    function () {
                      var t = n.innerWidth,
                        e = n.innerHeight;
                      i.hidden
                        ? ((y = t), (b = e))
                        : (y === t && b === e) || mt();
                    },
                    i,
                    "DOMContentLoaded",
                    Mt,
                    n,
                    "load",
                    function () {
                      return L || Mt();
                    },
                    n,
                    "resize",
                    mt,
                  ]),
                  Y(it);
              }
              return r;
            }),
            (t.defaults = function (t) {
              for (var e in t) ot[e] = t[e];
            }),
            (t.kill = function () {
              (E = 0),
                ht.slice(0).forEach(function (t) {
                  return t.kill(1);
                });
            }),
            (t.config = function (t) {
              "limitCallbacks" in t && (T = !!t.limitCallbacks);
              var e = t.syncInterval;
              (e && clearInterval(d)) || ((d = e) && setInterval(dt, e)),
                "autoRefreshEvents" in t &&
                  (Y(st) || Y(it, t.autoRefreshEvents || "none"));
            }),
            (t.scrollerProxy = function (t, e) {
              var r = f(t)[0];
              z(r) ? k.unshift(n, e, a, e, s, e) : k.unshift(r, e);
            }),
            (t.matchMedia = function (t) {
              var e, r, i, s, a;
              for (r in t)
                (i = yt.indexOf(r)),
                  (s = t[r]),
                  (O = r),
                  "all" === r
                    ? s()
                    : (e = n.matchMedia(r)) &&
                      (e.matches && (a = s()),
                      ~i
                        ? ((yt[i + 1] = G(yt[i + 1], s)),
                          (yt[i + 2] = G(yt[i + 2], a)))
                        : ((i = yt.length),
                          yt.push(r, s, a),
                          e.addListener
                            ? e.addListener(bt)
                            : e.addEventListener("change", bt))),
                  (O = 0);
              return yt;
            }),
            t
          );
        })();
        (It.version = "3.4.2"),
          (It.saveStyles = function (t) {
            return t
              ? f(t).forEach(function (t) {
                  var r = Tt.indexOf(t);
                  r >= 0 && Tt.splice(r, 4),
                    Tt.push(t, t.style.cssText, e.core.getCache(t), O);
                })
              : Tt;
          }),
          (It.revert = function (t, e) {
            return Pt(!t, e);
          }),
          (It.create = function (t, e) {
            return new It(t, e);
          }),
          (It.refresh = function (t) {
            return t ? mt() : Mt(!0);
          }),
          (It.update = Ct),
          (It.maxScroll = function (t, e) {
            return I(t, e ? $ : J);
          }),
          (It.getScrollFunc = function (t, e) {
            return B(f(t)[0], e ? $ : J);
          }),
          (It.getById = function (t) {
            return pt[t];
          }),
          (It.getAll = function () {
            return ht.slice(0);
          }),
          (It.isScrolling = function () {
            return !!L;
          }),
          (It.addEventListener = function (t, e) {
            var r = _t[t] || (_t[t] = []);
            ~r.indexOf(e) || r.push(e);
          }),
          (It.removeEventListener = function (t, e) {
            var r = _t[t],
              n = r && r.indexOf(e);
            n >= 0 && r.splice(n, 1);
          }),
          (It.batch = function (t, r) {
            var n,
              i = [],
              s = {},
              a = r.interval || 0.016,
              o = r.batchMax || 1e9,
              u = function (t, r) {
                var n = [],
                  i = [],
                  s = e
                    .delayedCall(a, function () {
                      r(n, i), (n = []), (i = []);
                    })
                    .pause();
                return function (t) {
                  n.length || s.restart(!0),
                    n.push(t.trigger),
                    i.push(t),
                    o <= n.length && s.progress(1);
                };
              };
            for (n in r)
              s[n] =
                "on" === n.substr(0, 2) && U(r[n]) && "onRefreshInit" !== n
                  ? u(0, r[n])
                  : r[n];
            return (
              U(o) &&
                ((o = o()),
                it(It, "refresh", function () {
                  return (o = r.batchMax());
                })),
              f(t).forEach(function (t) {
                var e = {};
                for (n in s) e[n] = s[n];
                (e.trigger = t), i.push(It.create(e));
              }),
              i
            );
          }),
          (It.sort = function (t) {
            return ht.sort(
              t ||
                function (t, e) {
                  return (
                    -1e6 * (t.vars.refreshPriority || 0) +
                    t.start -
                    (e.start + -1e6 * (e.vars.refreshPriority || 0))
                  );
                }
            );
          }),
          D() && e.registerPlugin(It),
          (t.ScrollTrigger = It),
          (t.default = It),
          Object.defineProperty(t, "__esModule", { value: !0 });
      })(e);
    },
    Wkk8: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r("KQm4"),
        i = r("rePB"),
        s = r("q1tI"),
        a = r.n(s),
        o = r("7wBY"),
        u = (r("40A7"), r("TSYQ")),
        l = r.n(u),
        c = r("pSoo"),
        f = r("YoU/"),
        h = r("z/o8"),
        p = r("kjtw"),
        d = r("Sdyp"),
        g =
          "https://assets.getpocket.com/web-discover/_next/static/images/firefox-browser-logo.46d7ba73e194da3d78cb1fca759962c7.svg",
        m =
          "https://assets.getpocket.com/web-discover/_next/static/images/save-button.ece2ba23904dda9c9e86de027d78d024.svg",
        _ =
          "https://assets.getpocket.com/web-discover/_next/static/images/saving-browser-list-001.3b4ac56005f84962fa201e1c1dfc11aa.png",
        v =
          "https://assets.getpocket.com/web-discover/_next/static/images/saving-browser-list-002.ba0f6cfaa2609af9d704635286dfdf5d.png",
        y =
          "https://assets.getpocket.com/web-discover/_next/static/images/saving-browser-list-003.1beeb89413c8c1aa54c319758f291262.png",
        b = a.a.createElement;
      function x(t, e) {
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
      function w(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? x(Object(r), !0).forEach(function (e) {
                Object(i.a)(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : x(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      h.a.registerPlugin(d.ScrollTrigger, p.MotionPathPlugin);
      var T = "m1yseqe5";
      function O(t) {
        var e = t.className,
          r = t.showFirefoxLogo,
          i = Object(c.a)(),
          a = Object(s.useRef)(),
          u = Object(s.useRef)(),
          p = Object(s.useRef)(),
          x = Object(s.useRef)([]),
          O = Object(s.useRef)(),
          P = Object(s.useRef)(),
          M = Object(s.useRef)(),
          k = Object(s.useRef)([]),
          S = Object(s.useRef)(),
          C = Object(s.useRef)(),
          A = Object(s.useRef)(),
          L = Object(s.useState)(),
          E = L[0],
          R = L[1],
          N = Object(s.useState)(null),
          D = N[0],
          z = N[1];
        return (
          Object(o.a)(function () {
            var t = { duration: { min: 6, max: 11 }, trigger: p.current },
              e = w(
                {
                  elements: [S.current],
                  xPercent: { min: -10, max: 10 },
                  yPercent: { min: -60, max: 60 },
                },
                t
              ),
              r = w(
                {
                  elements: [C.current],
                  xPercent: { min: -40, max: 5 },
                  yPercent: { min: -5, max: 50 },
                },
                t
              ),
              i = w(
                {
                  elements: [A.current],
                  xPercent: { min: -15, max: 8 },
                  yPercent: { min: -30, max: 40 },
                },
                t
              ),
              s = [].concat(
                Object(n.a)(Object(f.a)(e)),
                Object(n.a)(Object(f.a)(r)),
                Object(n.a)(Object(f.a)(i))
              );
            return (
              z(s),
              function () {
                s.forEach(function (t) {
                  t.kill();
                });
              }
            );
          }, []),
          Object(o.a)(function () {
            var t = h.a
              .timeline({
                scrollTrigger: {
                  trigger: p.current,
                  toggleActions: "play pause resume pause",
                },
                repeat: -1,
                repeatDelay: 2,
              })
              .set(O.current, { opacity: 1 })
              .add(
                (function (t, e, r, n) {
                  var i = "list-to-article";
                  return h.a
                    .timeline()
                    .add(i)
                    .to(
                      t,
                      {
                        yPercent: 200,
                        opacity: 0,
                        ease: "power2.in",
                        duration: 0.6,
                      },
                      i
                    )
                    .to(
                      e,
                      {
                        yPercent: 100,
                        opacity: 0,
                        stagger: 0.1,
                        ease: "power2.in",
                        rotation: 0.01,
                        force3D: !0,
                      },
                      i + "+=0.1"
                    )
                    .fromTo(
                      r,
                      { yPercent: -100 },
                      {
                        yPercent: -13,
                        height: "83%",
                        width: "100%",
                        rotation: 0.01,
                        force3D: !0,
                        ease: "power2.out",
                      },
                      i + "+=0.6"
                    )
                    .from(
                      n,
                      {
                        width: 0,
                        stagger: 0.2,
                        ease: "power2.out",
                        duration: 1.2,
                        clearProps: "width",
                      },
                      "<"
                    );
                })(u.current, x.current, M.current, k.current),
                "+=1"
              )
              .add(
                (function (t) {
                  return h.a
                    .timeline()
                    .to(t, {
                      scale: 1.25,
                      rotation: 0.01,
                      force3D: !0,
                      duration: 0.75,
                      ease: "back.out(1.4)",
                    })
                    .to(t, {
                      delay: 2,
                      scale: 0.4,
                      rotation: 0.01,
                      force3D: !0,
                      duration: 1,
                      ease: "power3.inOut",
                    });
                })(a.current),
                "+=1.5"
              )
              .add(
                (function (t, e, r, n, i) {
                  var s = "article-to-list";
                  return h.a
                    .timeline()
                    .add(s)
                    .set(r, { overflow: "visible" })
                    .set(t, { yPercent: -100, opacity: 0 })
                    .set(t[0], { visibility: "hidden" })
                    .set(e, { yPercent: -200, opacity: 0 })
                    .to(
                      n,
                      {
                        boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.12)",
                        rotation: 0.01,
                        force3D: !0,
                        duration: 0.6,
                        ease: "power3.in",
                      },
                      s
                    )
                    .to(
                      i,
                      {
                        padding: "0 3% 3% 3%",
                        duration: 0.6,
                        ease: "power3.in",
                      },
                      s
                    )
                    .to(
                      n,
                      {
                        width: "30.33%",
                        height: "73%",
                        ease: "power3.inOut",
                        duration: 1.35,
                      },
                      s
                    )
                    .to(
                      n,
                      {
                        motionPath: {
                          alignOrigin: [0.5, 0.5],
                          curviness: 2,
                          path: [
                            {
                              yPercent: -13,
                              xPercent: 0,
                              rotation: 0.01,
                              boxShadow: "0px 0px 4px rgba(0, 0, 0, 0)",
                            },
                            {
                              yPercent: -95,
                              xPercent: 30,
                              rotation: -20,
                              boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.12)",
                            },
                            {
                              yPercent: 0,
                              xPercent: 0,
                              rotation: 0.01,
                              boxShadow: "0px 0px 4px rgba(0, 0, 0, 0)",
                            },
                          ],
                        },
                        transformOrigin: "50% 50%",
                        duration: 2,
                        force3D: !0,
                        ease: "power3.inOut",
                      },
                      s
                    )
                    .to(
                      n,
                      {
                        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0)",
                        ease: "power3.out",
                        duration: 0.3,
                      },
                      ">-0.6"
                    )
                    .to(
                      i,
                      {
                        padding: "0px 0px 0px 0px",
                        ease: "power3.out",
                        duration: 0.3,
                      },
                      ">-0.3"
                    )
                    .to(
                      t,
                      {
                        yPercent: 0,
                        opacity: 1,
                        stagger: 0.1,
                        rotation: 0.01,
                        force3D: !0,
                        ease: "power3.out",
                      },
                      ">-0.4"
                    )
                    .to(
                      e,
                      {
                        yPercent: 0,
                        opacity: 1,
                        ease: "back.out(1.4)",
                        duration: 0.6,
                      },
                      ">"
                    );
                })(x.current, u.current, O.current, M.current, P.current),
                ">-2"
              );
            return (
              i && t.scrollTrigger.disable(),
              R(t),
              function () {
                t.kill();
              }
            );
          }, []),
          Object(s.useEffect)(
            function () {
              E && (i ? E.pause() : E.resume()),
                D &&
                  D.forEach(function (t) {
                    i ? t.pause() : t.resume();
                  }),
                d.ScrollTrigger.getAll().forEach(function (t) {
                  i ? t.disable() : t.enable();
                });
            },
            [i]
          ),
          b(
            "div",
            { className: l()(T, e) },
            b(
              "div",
              { className: "bg-shapes" },
              b("div", { className: "circle-a", ref: S }),
              b("div", { className: "rectangle-a", ref: C }),
              b("div", { className: "rectangle-b", ref: A })
            ),
            b("div", { className: "browser-ui" }),
            r
              ? b("img", { src: g, alt: "", className: "firefox-browser-logo" })
              : null,
            b(
              "svg",
              { viewBox: "0 0 200 20", className: "heading", ref: u },
              b("text", { x: "0", y: "15" }, "My List")
            ),
            b(
              "ul",
              { ref: p },
              [_, v, y].map(function (t, e) {
                return b(
                  "li",
                  {
                    key: e,
                    ref: function (t) {
                      return (x.current[e] = t);
                    },
                    className: "article",
                  },
                  b("img", { src: t, alt: "" }),
                  b(
                    "div",
                    { className: "copy-wrapper" },
                    b("span", null),
                    b("span", null),
                    b("span", null)
                  )
                );
              })
            ),
            b(
              "ul",
              { className: "overflow-wrapper", ref: O },
              b(
                "li",
                { ref: M, className: "article" },
                b("img", { src: _, alt: "" }),
                b(
                  "div",
                  { className: "copy-wrapper", ref: P },
                  b("span", {
                    ref: function (t) {
                      return (k.current[0] = t);
                    },
                  }),
                  b("span", {
                    ref: function (t) {
                      return (k.current[1] = t);
                    },
                  }),
                  b("span", {
                    ref: function (t) {
                      return (k.current[2] = t);
                    },
                  })
                )
              )
            ),
            b("img", { src: m, alt: "", className: "save-button", ref: a })
          )
        );
      }
      O.defaultProps = { className: null, showFirefoxLogo: !1 };
      e.default = O;
      r("59lV");
    },
    "YoU/": function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r("z/o8");
      function i(t) {
        var e = t.elements,
          r = t.yPercent,
          i = void 0 === r ? { min: 30, max: 30 } : r,
          s = t.xPercent,
          a = void 0 === s ? { min: 30, max: 30 } : s,
          o = t.duration,
          u = void 0 === o ? { min: 5, max: 8 } : o,
          l = t.trigger;
        return e
          ? e.map(function (t) {
              return n.a
                .timeline({
                  yoyo: !0,
                  repeat: -1,
                  scrollTrigger: {
                    trigger: l || t,
                    toggleActions: "play pause resume pause",
                  },
                })
                .to(t, {
                  yPercent: n.a.utils.random(i.min, i.max),
                  xPercent: n.a.utils.random(a.min, a.max),
                  duration: n.a.utils.random(u.min, u.max),
                  rotation: 0.01,
                  force3D: !0,
                  ease: "power3.inOut",
                });
            })
          : null;
      }
    },
    cB0E: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r("q1tI"),
        i = r.n(n),
        s = r("7wBY"),
        a = (r("40A7"), r("TSYQ")),
        o = r.n(a),
        u = (r("UrOR"), r("pSoo")),
        l = r("YoU/"),
        c = r("z/o8"),
        f = r("Sdyp"),
        h =
          "https://assets.getpocket.com/web-discover/_next/static/images/article-carousel-frame.7ce65f40b3d0b0a1bda7999e02ebd814.svg",
        p =
          "https://assets.getpocket.com/web-discover/_next/static/images/carousel-bottom.c1c2c9a5d3ecf2baf851df5ef0537c33.svg",
        d = i.a.createElement,
        g = 0.5;
      c.a.registerPlugin(f.ScrollTrigger);
      var m = "a9shds7";
      function _(t) {
        return c.a
          .timeline()
          .set(t, { zIndex: 0 })
          .fromTo(
            t,
            {
              yPercent: -10,
              scale: 0.45,
              opacity: 0,
              boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
            },
            {
              yPercent: 0,
              scale: 0.85,
              opacity: 1,
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              rotation: 0.01,
              force3D: !0,
              ease: "none",
            }
          )
          .set(t, { zIndex: 2 })
          .to(t, {
            scale: 1,
            yPercent: 100,
            boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.12)",
            ease: "none",
          })
          .to(t, {
            scale: 0.85,
            yPercent: 200,
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            ease: "none",
          })
          .to(t, {
            yPercent: 350,
            ease: "none",
            opacity: 0,
            clearProps: "all",
          });
      }
      function v(t) {
        var e = t.images,
          r = t.className,
          i = t.delay,
          a = t.duration,
          v = t.useIntro,
          y = Object(u.a)(),
          b = Object(n.useRef)([]),
          x = Object(n.useRef)(),
          w = Object(n.useRef)(),
          T = Object(n.useRef)(),
          O = Object(n.useRef)(),
          P = Object(n.useState)(!1),
          M = P[0],
          k = P[1],
          S = Object(n.useState)(null),
          C = S[0],
          A = S[1],
          L = Object(n.useState)("0"),
          E = L[0],
          R = L[1],
          N = Object(n.useState)(!0),
          D = N[0],
          z = N[1],
          j = Object(n.useState)(!v),
          B = j[0],
          F = j[1],
          I = Object(n.useState)(!1),
          Y = I[0],
          X = I[1],
          U = Object(n.useState)(null),
          q = U[0],
          V = U[1],
          W = Object(n.useState)(null),
          G = W[0],
          Q = W[1],
          H = Object(n.useState)(null),
          Z = H[0],
          $ = H[1];
        function J(t) {
          x.current &&
            (F(!0),
            V(!0),
            t.seek("0-=" + g).pause(),
            e.length < 4 && t.scrollTrigger.disable());
        }
        return (
          Object(s.a)(function () {
            var t = c.a.timeline({
              autoRemoveChildren: !0,
              smoothChildTiming: !0,
              scrollTrigger: {
                trigger: x.current,
                toggleActions: "none none none none",
                onToggle: function (t) {
                  var e = t.isActive;
                  x.current && k(e);
                },
              },
            });
            return (
              b.current.forEach(function (e, r) {
                t.add(_(e), "<" + g).addLabel(r);
              }),
              e.length < 4 || y || B ? J(t) : X(!0),
              Q(t),
              function () {
                t.kill();
              }
            );
          }, []),
          Object(n.useEffect)(
            function () {
              if (q && M && !y && !(e.length < 4))
                return (
                  z(!1),
                  A(
                    null === G || void 0 === G
                      ? void 0
                      : G.tweenTo(G.nextLabel(), {
                          delay: D ? 0 : i,
                          ease: 0 === i ? "none" : "power3.inOut",
                          duration: a,
                          onComplete: t,
                        })
                  ),
                  function () {
                    c.a.killTweensOf(G);
                  }
                );
              function t() {
                b.current[E] &&
                  (R(G.nextLabel()),
                  G.add(_(b.current[E]), "<" + g).addLabel(E));
              }
            },
            [M, q, E, y]
          ),
          Object(n.useEffect)(
            function () {
              q ||
                B ||
                (Y &&
                  M &&
                  !y &&
                  A(
                    null === G || void 0 === G
                      ? void 0
                      : G.tweenTo("0-=" + g, {
                          ease: 0 === i ? "none" : "power2.out",
                          duration: 0 === i ? 2 * a : 2,
                          onComplete: J,
                          onCompleteParams: [G],
                        })
                  ));
            },
            [Y, M, y]
          ),
          Object(n.useEffect)(function () {
            var t = {
                elements: [w.current, T.current, O.current],
                xPercent: { min: -17, max: 17 },
                yPercent: { min: -17, max: 17 },
                trigger: x.current,
              },
              e = Object(l.a)(t);
            return (
              $(e),
              function () {
                e.forEach(function (t) {
                  t.kill();
                });
              }
            );
          }, []),
          Object(n.useEffect)(
            function () {
              null === Z ||
                void 0 === Z ||
                Z.forEach(function (t) {
                  y ? t.pause() : t.resume();
                }),
                e.length < 4 ||
                  (null === f.ScrollTrigger ||
                    void 0 === f.ScrollTrigger ||
                    f.ScrollTrigger.getAll().forEach(function (t) {
                      y ? t.disable() : t.enable();
                    }),
                  null === C || void 0 === C || C.pause());
            },
            [y]
          ),
          d(
            "div",
            { className: o()(m, r) },
            d(
              "ul",
              { ref: x },
              e.map(function (t, e) {
                return d(
                  "li",
                  {
                    key: e,
                    ref: function (t) {
                      return (b.current[e] = t);
                    },
                  },
                  d("img", { src: h, alt: "" }),
                  d("img", { src: t, alt: "", className: "frame-image" })
                );
              })
            ),
            d(
              "div",
              { className: "shapes" },
              d("div", { className: "circle-a", ref: w }),
              d("div", { className: "circle-b", ref: T }),
              d("div", { className: "rectangle", ref: O })
            ),
            d("img", { src: p, alt: "", className: "bottom-frame" })
          )
        );
      }
      v.defaultProps = { className: null, delay: 2, duration: 1, useIntro: !0 };
      e.default = v;
      r("IMpf");
    },
    kjtw: function (t, e, r) {
      !(function (t) {
        "use strict";
        var e = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
          r = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
          n = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
          i = /(^[#\.][a-z]|[a-y][a-z])/i,
          s = Math.PI / 180,
          a = 180 / Math.PI,
          o = Math.sin,
          u = Math.cos,
          l = Math.abs,
          c = Math.sqrt,
          f = Math.atan2,
          h = 1e8,
          p = function (t) {
            return "string" === typeof t;
          },
          d = function (t) {
            return "number" === typeof t;
          },
          g = function (t) {
            return "undefined" === typeof t;
          },
          m = {},
          _ = {},
          v = function (t) {
            return Math.round(((t + h) % 1) * 1e5) / 1e5 || (t < 0 ? 0 : 1);
          },
          y = function (t) {
            return Math.round(1e5 * t) / 1e5 || 0;
          },
          b = function (t, e, r, n) {
            var i = t[e],
              s = 1 === n ? 6 : R(i, r, n);
            if (s && s + r + 2 < i.length)
              return (
                t.splice(e, 0, i.slice(0, r + s + 2)), i.splice(0, r + s), 1
              );
          },
          x = function (t, e) {
            var r = t.length;
            for (e || t.reverse(); r--; ) t[r].reversed || P(t[r]);
          },
          w = function (t, e) {
            return (
              (e.totalLength = t.totalLength),
              t.samples
                ? ((e.samples = t.samples.slice(0)),
                  (e.lookup = t.lookup.slice(0)),
                  (e.minLength = t.minLength),
                  (e.resolution = t.resolution))
                : (e.totalPoints = t.totalPoints),
              e
            );
          },
          T = function (t, e) {
            var r = t.length,
              n = t[r - 1] || [],
              i = n.length;
            e[0] === n[i - 2] &&
              e[1] === n[i - 1] &&
              ((e = n.concat(e.slice(2))), r--),
              (t[r] = e);
          };
        function O(t) {
          var e,
            r = (t = (p(t) && i.test(t) && document.querySelector(t)) || t)
              .getAttribute
              ? t
              : 0;
          return r && (t = t.getAttribute("d"))
            ? (r._gsPath || (r._gsPath = {}),
              (e = r._gsPath[t]) && !e._dirty ? e : (r._gsPath[t] = B(t)))
            : t
            ? p(t)
              ? B(t)
              : d(t[0])
              ? [t]
              : t
            : console.warn(
                "Expecting a <path> element or an SVG path data string"
              );
        }
        function P(t) {
          var e,
            r = 0;
          for (t.reverse(); r < t.length; r += 2)
            (e = t[r]), (t[r] = t[r + 1]), (t[r + 1] = e);
          t.reversed = !t.reversed;
        }
        var M = function (t, e) {
            var r,
              n = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
              ),
              i = [].slice.call(t.attributes),
              s = i.length;
            for (e = "," + e + ","; --s > -1; )
              (r = i[s].nodeName.toLowerCase()),
                e.indexOf("," + r + ",") < 0 &&
                  n.setAttributeNS(null, r, i[s].nodeValue);
            return n;
          },
          k = {
            rect: "rx,ry,x,y,width,height",
            circle: "r,cx,cy",
            ellipse: "rx,ry,cx,cy",
            line: "x1,x2,y1,y2",
          },
          S = function (t, e) {
            for (
              var r = e ? e.split(",") : [], n = {}, i = r.length;
              --i > -1;

            )
              n[r[i]] = +t.getAttribute(r[i]) || 0;
            return n;
          };
        function C(t, e, r) {
          var n,
            i = t[e],
            s = t[e + 2],
            o = t[e + 4];
          return (
            (i += (s - i) * r),
            (i += ((s += (o - s) * r) - i) * r),
            (n = s + (o + (t[e + 6] - o) * r - s) * r - i),
            (i = t[e + 1]),
            (i += ((s = t[e + 3]) - i) * r),
            (i += ((s += ((o = t[e + 5]) - s) * r) - i) * r),
            y(f(s + (o + (t[e + 7] - o) * r - s) * r - i, n) * a)
          );
        }
        function A(t, e, r) {
          g(r) && (r = 1);
          var n = (e = e || 0) > r,
            i = Math.max(0, ~~(l(r - e) - 1e-8));
          if (
            (n && ((n = r), (r = e), (e = n), (n = 1), (i -= i ? 1 : 0)),
            e < 0 || r < 0)
          ) {
            var s = 1 + ~~Math.min(e, r);
            (e += s), (r += s);
          }
          var a,
            o,
            u,
            c,
            f,
            h,
            p,
            d = (function (t) {
              for (var e = [], r = 0; r < t.length; r++)
                e[r] = w(t[r], t[r].slice(0));
              return w(t, e);
            })(t.totalLength ? t : E(t)),
            v = r > 1,
            y = N(d, e, m, !0),
            O = N(d, r, _),
            P = O.segment,
            M = y.segment,
            k = O.segIndex,
            S = y.segIndex,
            A = O.i,
            L = y.i,
            D = S === k,
            z = A === L && D,
            j = (D && L > A) || (z && y.t > O.t);
          if (v || i) {
            if (
              (b(d, S, L, y.t) &&
                ((a = 1),
                S++,
                z
                  ? j
                    ? (O.t /= y.t)
                    : ((O.t = (O.t - y.t) / (1 - y.t)), k++, (A = 0))
                  : S <= k + 1 && !j && (k++, D && (A -= L))),
              O.t
                ? b(d, k, A, O.t) && (j && a && S++, n && k++)
                : (k--, n && S--),
              (c = []),
              (h = 1 + (f = d.length) * i),
              (p = S),
              n)
            )
              for (h += (f - (k = (k || f) - 1) + S) % f, u = 0; u < h; u++)
                T(c, d[p]), (p = (p || f) - 1);
            else for (h += (f - S + k) % f, u = 0; u < h; u++) T(c, d[p++ % f]);
            d = c;
          } else if (((o = 1 === O.t ? 6 : R(P, A, O.t)), e !== r))
            for (
              a = R(M, L, z ? y.t / O.t : y.t),
                D && (o += a),
                P.splice(A + o + 2),
                (a || L) && M.splice(0, L + a),
                u = d.length;
              u--;

            )
              (u < S || u > k) && d.splice(u, 1);
          else
            (P.angle = C(P, A + o, 0)),
              (y = P[(A += o)]),
              (O = P[A + 1]),
              (P.length = P.totalLength = 0),
              (P.totalPoints = d.totalPoints = 8),
              P.push(y, O, y, O, y, O, y, O);
          return n && x(d, v || i), (d.totalLength = 0), d;
        }
        function L(t, e, r) {
          (e = e || 0), t.samples || ((t.samples = []), (t.lookup = []));
          var n,
            i,
            s,
            a,
            o,
            u,
            f,
            p,
            d,
            g,
            m,
            _,
            v,
            y,
            b,
            x,
            w,
            T = ~~t.resolution || 12,
            O = 1 / T,
            P = r ? e + 6 * r + 1 : t.length,
            M = t[e],
            k = t[e + 1],
            S = e ? (e / 6) * T : 0,
            C = t.samples,
            A = t.lookup,
            L = (e ? t.minLength : h) || h,
            E = C[S + r * T - 1],
            R = e ? C[S - 1] : 0;
          for (C.length = A.length = 0, i = e + 2; i < P; i += 6) {
            if (
              ((s = t[i + 4] - M),
              (a = t[i + 2] - M),
              (o = t[i] - M),
              (p = t[i + 5] - k),
              (d = t[i + 3] - k),
              (g = t[i + 1] - k),
              (u = f = m = _ = 0),
              l(s) < 1e-5 && l(p) < 1e-5 && l(o) + l(g) < 1e-5)
            )
              t.length > 8 && (t.splice(i, 6), (i -= 6), (P -= 6));
            else
              for (n = 1; n <= T; n++)
                (u =
                  f -
                  (f =
                    ((y = O * n) * y * s + 3 * (v = 1 - y) * (y * a + v * o)) *
                    y)),
                  (m = _ - (_ = (y * y * p + 3 * v * (y * d + v * g)) * y)),
                  (x = c(m * m + u * u)) < L && (L = x),
                  (R += x),
                  (C[S++] = R);
            (M += s), (k += p);
          }
          if (E) for (E -= R; S < C.length; S++) C[S] += E;
          if (C.length && L)
            for (
              t.totalLength = w = C[C.length - 1] || 0,
                t.minLength = L,
                x = b = 0,
                n = 0;
              n < w;
              n += L
            )
              A[x++] = C[b] < n ? ++b : b;
          else t.totalLength = C[0] = 0;
          return e ? R - C[e / 2 - 1] : R;
        }
        function E(t, e) {
          var r, n, i;
          for (i = r = n = 0; i < t.length; i++)
            (t[i].resolution = ~~e || 12), (n += t[i].length), (r += L(t[i]));
          return (t.totalPoints = n), (t.totalLength = r), t;
        }
        function R(t, e, r) {
          if (r <= 0 || r >= 1) return 0;
          var n = t[e],
            i = t[e + 1],
            s = t[e + 2],
            a = t[e + 3],
            o = t[e + 4],
            u = t[e + 5],
            l = n + (s - n) * r,
            c = s + (o - s) * r,
            f = i + (a - i) * r,
            h = a + (u - a) * r,
            p = l + (c - l) * r,
            d = f + (h - f) * r,
            g = o + (t[e + 6] - o) * r,
            m = u + (t[e + 7] - u) * r;
          return (
            (c += (g - c) * r),
            (h += (m - h) * r),
            t.splice(
              e + 2,
              4,
              y(l),
              y(f),
              y(p),
              y(d),
              y(p + (c - p) * r),
              y(d + (h - d) * r),
              y(c),
              y(h),
              y(g),
              y(m)
            ),
            t.samples &&
              t.samples.splice(
                ((e / 6) * t.resolution) | 0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ),
            6
          );
        }
        function N(t, e, r, n) {
          (r = r || {}), t.totalLength || E(t), (e < 0 || e > 1) && (e = v(e));
          var i,
            s,
            a,
            o,
            u,
            l,
            c,
            f = 0,
            h = t[0];
          if (t.length > 1) {
            for (
              a = t.totalLength * e, u = l = 0;
              (u += t[l++].totalLength) < a;

            )
              f = l;
            e = (a - (o = u - (h = t[f]).totalLength)) / (u - o) || 0;
          }
          return (
            (i = h.samples),
            (s = h.resolution),
            (a = h.totalLength * e),
            (o = (l = h.lookup[~~(a / h.minLength)] || 0) ? i[l - 1] : 0),
            (u = i[l]) < a && ((o = u), (u = i[++l])),
            (c = (1 / s) * ((a - o) / (u - o) + (l % s))),
            (l = 6 * ~~(l / s)),
            n &&
              1 === c &&
              (l + 6 < h.length
                ? ((l += 6), (c = 0))
                : f + 1 < t.length && ((l = c = 0), (h = t[++f]))),
            (r.t = c),
            (r.i = l),
            (r.path = t),
            (r.segment = h),
            (r.segIndex = f),
            r
          );
        }
        function D(t, e, r, n) {
          var i,
            s,
            a,
            o,
            u,
            l,
            c,
            f,
            h,
            p = t[0],
            d = n || {};
          if (((e < 0 || e > 1) && (e = v(e)), t.length > 1)) {
            for (
              a = t.totalLength * e, u = l = 0;
              (u += t[l++].totalLength) < a;

            )
              p = t[l];
            e = (a - (o = u - p.totalLength)) / (u - o) || 0;
          }
          return (
            (i = p.samples),
            (s = p.resolution),
            (a = p.totalLength * e),
            (o = (l = p.lookup[~~(a / p.minLength)] || 0) ? i[l - 1] : 0),
            (u = i[l]) < a && ((o = u), (u = i[++l])),
            (h = 1 - (c = (1 / s) * ((a - o) / (u - o) + (l % s)) || 0)),
            (f = p[(l = 6 * ~~(l / s))]),
            (d.x = y(
              (c * c * (p[l + 6] - f) +
                3 * h * (c * (p[l + 4] - f) + h * (p[l + 2] - f))) *
                c +
                f
            )),
            (d.y = y(
              (c * c * (p[l + 7] - (f = p[l + 1])) +
                3 * h * (c * (p[l + 5] - f) + h * (p[l + 3] - f))) *
                c +
                f
            )),
            r &&
              (d.angle = p.totalLength
                ? C(p, l, c >= 1 ? 1 - 1e-9 : c || 1e-9)
                : p.angle || 0),
            d
          );
        }
        function z(t, e, r, n, i, s, a) {
          for (var o, u, l, c, f, h = t.length; --h > -1; )
            for (u = (o = t[h]).length, l = 0; l < u; l += 2)
              (c = o[l]),
                (f = o[l + 1]),
                (o[l] = c * e + f * n + s),
                (o[l + 1] = c * r + f * i + a);
          return (t._dirty = 1), t;
        }
        function j(t, e, r, n, i, a, f, h, p) {
          if (t !== h || e !== p) {
            (r = l(r)), (n = l(n));
            var d = (i % 360) * s,
              g = u(d),
              m = o(d),
              _ = Math.PI,
              v = 2 * _,
              y = (t - h) / 2,
              b = (e - p) / 2,
              x = g * y + m * b,
              w = -m * y + g * b,
              T = x * x,
              O = w * w,
              P = T / (r * r) + O / (n * n);
            P > 1 && ((r = c(P) * r), (n = c(P) * n));
            var M = r * r,
              k = n * n,
              S = (M * k - M * O - k * T) / (M * O + k * T);
            S < 0 && (S = 0);
            var C = (a === f ? -1 : 1) * c(S),
              A = C * ((r * w) / n),
              L = C * ((-n * x) / r),
              E = (t + h) / 2 + (g * A - m * L),
              R = (e + p) / 2 + (m * A + g * L),
              N = (x - A) / r,
              D = (w - L) / n,
              z = (-x - A) / r,
              j = (-w - L) / n,
              B = N * N + D * D,
              F = (D < 0 ? -1 : 1) * Math.acos(N / c(B)),
              I =
                (N * j - D * z < 0 ? -1 : 1) *
                Math.acos((N * z + D * j) / c(B * (z * z + j * j)));
            isNaN(I) && (I = _),
              !f && I > 0 ? (I -= v) : f && I < 0 && (I += v),
              (F %= v),
              (I %= v);
            var Y,
              X = Math.ceil(l(I) / (v / 4)),
              U = [],
              q = I / X,
              V = ((4 / 3) * o(q / 2)) / (1 + u(q / 2)),
              W = g * r,
              G = m * r,
              Q = m * -n,
              H = g * n;
            for (Y = 0; Y < X; Y++)
              (x = u((i = F + Y * q))),
                (w = o(i)),
                (N = u((i += q))),
                (D = o(i)),
                U.push(x - V * w, w + V * x, N + V * D, D - V * N, N, D);
            for (Y = 0; Y < U.length; Y += 2)
              (x = U[Y]),
                (w = U[Y + 1]),
                (U[Y] = x * W + w * Q + E),
                (U[Y + 1] = x * G + w * H + R);
            return (U[Y - 2] = h), (U[Y - 1] = p), U;
          }
        }
        function B(t) {
          var r,
            i,
            s,
            a,
            o,
            u,
            c,
            f,
            h,
            p,
            d,
            g,
            m,
            _,
            v,
            y =
              (t + "")
                .replace(n, function (t) {
                  var e = +t;
                  return e < 1e-4 && e > -1e-4 ? 0 : e;
                })
                .match(e) || [],
            b = [],
            x = 0,
            w = 0,
            T = y.length,
            O = 0,
            P = "ERROR: malformed path: " + t,
            M = function (t, e, r, n) {
              (p = (r - t) / 3),
                (d = (n - e) / 3),
                c.push(t + p, e + d, r - p, n - d, r, n);
            };
          if (!t || !isNaN(y[0]) || isNaN(y[1])) return console.log(P), b;
          for (r = 0; r < T; r++)
            if (
              ((m = o),
              isNaN(y[r]) ? (u = (o = y[r].toUpperCase()) !== y[r]) : r--,
              (s = +y[r + 1]),
              (a = +y[r + 2]),
              u && ((s += x), (a += w)),
              r || ((f = s), (h = a)),
              "M" === o)
            )
              c && (c.length < 8 ? (b.length -= 1) : (O += c.length)),
                (x = f = s),
                (w = h = a),
                (c = [s, a]),
                b.push(c),
                (r += 2),
                (o = "L");
            else if ("C" === o)
              c || (c = [0, 0]),
                u || (x = w = 0),
                c.push(
                  s,
                  a,
                  x + 1 * y[r + 3],
                  w + 1 * y[r + 4],
                  (x += 1 * y[r + 5]),
                  (w += 1 * y[r + 6])
                ),
                (r += 6);
            else if ("S" === o)
              (p = x),
                (d = w),
                ("C" !== m && "S" !== m) ||
                  ((p += x - c[c.length - 4]), (d += w - c[c.length - 3])),
                u || (x = w = 0),
                c.push(p, d, s, a, (x += 1 * y[r + 3]), (w += 1 * y[r + 4])),
                (r += 4);
            else if ("Q" === o)
              (p = x + (2 / 3) * (s - x)),
                (d = w + (2 / 3) * (a - w)),
                u || (x = w = 0),
                (x += 1 * y[r + 3]),
                (w += 1 * y[r + 4]),
                c.push(
                  p,
                  d,
                  x + (2 / 3) * (s - x),
                  w + (2 / 3) * (a - w),
                  x,
                  w
                ),
                (r += 4);
            else if ("T" === o)
              (p = x - c[c.length - 4]),
                (d = w - c[c.length - 3]),
                c.push(
                  x + p,
                  w + d,
                  s + (2 / 3) * (x + 1.5 * p - s),
                  a + (2 / 3) * (w + 1.5 * d - a),
                  (x = s),
                  (w = a)
                ),
                (r += 2);
            else if ("H" === o) M(x, w, (x = s), w), (r += 1);
            else if ("V" === o) M(x, w, x, (w = s + (u ? w - x : 0))), (r += 1);
            else if ("L" === o || "Z" === o)
              "Z" === o && ((s = f), (a = h), (c.closed = !0)),
                ("L" === o || l(x - s) > 0.5 || l(w - a) > 0.5) &&
                  (M(x, w, s, a), "L" === o && (r += 2)),
                (x = s),
                (w = a);
            else if ("A" === o) {
              if (
                ((_ = y[r + 4]),
                (v = y[r + 5]),
                (p = y[r + 6]),
                (d = y[r + 7]),
                (i = 7),
                _.length > 1 &&
                  (_.length < 3
                    ? ((d = p), (p = v), i--)
                    : ((d = v), (p = _.substr(2)), (i -= 2)),
                  (v = _.charAt(1)),
                  (_ = _.charAt(0))),
                (g = j(
                  x,
                  w,
                  +y[r + 1],
                  +y[r + 2],
                  +y[r + 3],
                  +_,
                  +v,
                  (u ? x : 0) + 1 * p,
                  (u ? w : 0) + 1 * d
                )),
                (r += i),
                g)
              )
                for (i = 0; i < g.length; i++) c.push(g[i]);
              (x = c[c.length - 2]), (w = c[c.length - 1]);
            } else console.log(P);
          return (
            (r = c.length) < 6
              ? (b.pop(), (r = 0))
              : c[0] === c[r - 2] && c[1] === c[r - 1] && (c.closed = !0),
            (b.totalPoints = O + r),
            b
          );
        }
        function F(t, e) {
          void 0 === e && (e = 1);
          for (var r = t[0], n = 0, i = [r, n], s = 2; s < t.length; s += 2)
            i.push(r, n, t[s], (n = ((t[s] - r) * e) / 2), (r = t[s]), -n);
          return i;
        }
        function I(t, e, r) {
          var n,
            i,
            s,
            a,
            l,
            h,
            p,
            d,
            g,
            m,
            _,
            v,
            b,
            x,
            w = t.length - 2,
            T = +t[0],
            O = +t[1],
            P = +t[2],
            M = +t[3],
            k = [T, O, T, O],
            S = P - T,
            C = M - O,
            A = Math.abs(t[w] - T) < 0.001 && Math.abs(t[w + 1] - O) < 0.001;
          for (
            isNaN(r) && (r = Math.PI / 10),
              A &&
                (t.push(P, M),
                (P = T),
                (M = O),
                (T = t[w - 2]),
                (O = t[w - 1]),
                t.unshift(T, O),
                (w += 4)),
              e = e || 0 === e ? +e : 1,
              l = 2;
            l < w;
            l += 2
          )
            (n = T),
              (i = O),
              (T = P),
              (O = M),
              (v = (h = S) * h + (d = C) * d),
              (b =
                (S = (P = +t[l + 2]) - T) * S + (C = (M = +t[l + 3]) - O) * C),
              (x = (p = P - n) * p + (g = M - i) * g),
              (_ = ((s = Math.acos((v + b - x) / c(4 * v * b))) / Math.PI) * e),
              (m = c(v) * _),
              (_ *= c(b)),
              (T === n && O === i) ||
                (s > r
                  ? ((a = f(g, p)),
                    k.push(
                      y(T - u(a) * m),
                      y(O - o(a) * m),
                      y(T),
                      y(O),
                      y(T + u(a) * _),
                      y(O + o(a) * _)
                    ))
                  : ((a = f(d, h)),
                    k.push(y(T - u(a) * m), y(O - o(a) * m)),
                    (a = f(C, S)),
                    k.push(y(T), y(O), y(T + u(a) * _), y(O + o(a) * _))));
          return (
            k.push(y(P), y(M), y(P), y(M)),
            A && (k.splice(0, 6), (k.length = k.length - 6)),
            k
          );
        }
        function Y(t) {
          d(t[0]) && (t = [t]);
          var e,
            r,
            n,
            i,
            s = "",
            a = t.length;
          for (r = 0; r < a; r++) {
            for (
              i = t[r],
                s += "M" + y(i[0]) + "," + y(i[1]) + " C",
                e = i.length,
                n = 2;
              n < e;
              n++
            )
              s +=
                y(i[n++]) +
                "," +
                y(i[n++]) +
                " " +
                y(i[n++]) +
                "," +
                y(i[n++]) +
                " " +
                y(i[n++]) +
                "," +
                y(i[n]) +
                " ";
            i.closed && (s += "z");
          }
          return s;
        }
        var X,
          U,
          q,
          V,
          W,
          G,
          Q,
          H,
          Z = "transform",
          $ = Z + "Origin",
          J = function (t) {
            var e = t.ownerDocument || t;
            !(Z in t.style) &&
              "msTransform" in t.style &&
              ($ = (Z = "msTransform") + "Origin");
            for (; e.parentNode && (e = e.parentNode); );
            if (((U = window), (Q = new lt()), e)) {
              (X = e), (q = e.documentElement), (V = e.body);
              var r = e.createElement("div"),
                n = e.createElement("div");
              V.appendChild(r),
                r.appendChild(n),
                (r.style.position = "static"),
                (r.style[Z] = "translate3d(0,0,1px)"),
                (H = n.offsetParent !== r),
                V.removeChild(r);
            }
            return e;
          },
          K = function (t) {
            for (var e, r; t && t !== V; )
              (r = t._gsap) &&
                !r.scaleX &&
                !r.scaleY &&
                r.renderTransform &&
                ((r.scaleX = r.scaleY = 1e-4),
                r.renderTransform(1, r),
                e ? e.push(r) : (e = [r])),
                (t = t.parentNode);
            return e;
          },
          tt = [],
          et = [],
          rt = function () {
            return (
              U.pageYOffset || X.scrollTop || q.scrollTop || V.scrollTop || 0
            );
          },
          nt = function () {
            return (
              U.pageXOffset || X.scrollLeft || q.scrollLeft || V.scrollLeft || 0
            );
          },
          it = function (t) {
            return (
              t.ownerSVGElement ||
              ("svg" === (t.tagName + "").toLowerCase() ? t : null)
            );
          },
          st = function t(e) {
            return (
              "fixed" === U.getComputedStyle(e).position ||
              ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
            );
          },
          at = function t(e, r) {
            if (e.parentNode && (X || J(e))) {
              var n = it(e),
                i = n
                  ? n.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
                  : "http://www.w3.org/1999/xhtml",
                s = n ? (r ? "rect" : "g") : "div",
                a = 2 !== r ? 0 : 100,
                o = 3 === r ? 100 : 0,
                u = "position:absolute;display:block;pointer-events:none;",
                l = X.createElementNS
                  ? X.createElementNS(i.replace(/^https/, "http"), s)
                  : X.createElement(s);
              return (
                r &&
                  (n
                    ? (G || (G = t(e)),
                      l.setAttribute("width", 0.01),
                      l.setAttribute("height", 0.01),
                      l.setAttribute(
                        "transform",
                        "translate(" + a + "," + o + ")"
                      ),
                      G.appendChild(l))
                    : (W || ((W = t(e)).style.cssText = u),
                      (l.style.cssText =
                        u +
                        "width:0.1px;height:0.1px;top:" +
                        o +
                        "px;left:" +
                        a +
                        "px"),
                      W.appendChild(l))),
                l
              );
            }
            throw "Need document and parent.";
          },
          ot = function (t, e) {
            var r,
              n,
              i,
              s,
              a,
              o = it(t),
              u = t === o,
              l = o ? tt : et;
            if (t === U) return t;
            if (
              (l.length || l.push(at(t, 1), at(t, 2), at(t, 3)),
              (r = o ? G : W),
              o)
            )
              (i = u ? { x: 0, y: 0 } : t.getBBox()),
                (n = t.transform ? t.transform.baseVal : {}).numberOfItems
                  ? ((s =
                      (n =
                        n.numberOfItems > 1
                          ? (function (t) {
                              for (
                                var e = new lt(), r = 0;
                                r < t.numberOfItems;
                                r++
                              )
                                e.multiply(t.getItem(r).matrix);
                              return e;
                            })(n)
                          : n.getItem(0).matrix).a *
                        i.x +
                      n.c * i.y),
                    (a = n.b * i.x + n.d * i.y))
                  : ((n = Q), (s = i.x), (a = i.y)),
                e && "g" === t.tagName.toLowerCase() && (s = a = 0),
                r.setAttribute(
                  "transform",
                  "matrix(" +
                    n.a +
                    "," +
                    n.b +
                    "," +
                    n.c +
                    "," +
                    n.d +
                    "," +
                    (n.e + s) +
                    "," +
                    (n.f + a) +
                    ")"
                ),
                (u ? o : t.parentNode).appendChild(r);
            else {
              if (((s = a = 0), H))
                for (
                  n = t.offsetParent, i = t;
                  i && (i = i.parentNode) && i !== n && i.parentNode;

                )
                  (U.getComputedStyle(i)[Z] + "").length > 4 &&
                    ((s = i.offsetLeft), (a = i.offsetTop), (i = 0));
              ((i = r.style).top = t.offsetTop - a + "px"),
                (i.left = t.offsetLeft - s + "px"),
                (n = U.getComputedStyle(t)),
                (i[Z] = n[Z]),
                (i[$] = n[$]),
                (i.border = n.border),
                (i.borderLeftStyle = n.borderLeftStyle),
                (i.borderTopStyle = n.borderTopStyle),
                (i.borderLeftWidth = n.borderLeftWidth),
                (i.borderTopWidth = n.borderTopWidth),
                (i.position = "fixed" === n.position ? "fixed" : "absolute"),
                t.parentNode.appendChild(r);
            }
            return r;
          },
          ut = function (t, e, r, n, i, s, a) {
            return (
              (t.a = e),
              (t.b = r),
              (t.c = n),
              (t.d = i),
              (t.e = s),
              (t.f = a),
              t
            );
          },
          lt = (function () {
            function t(t, e, r, n, i, s) {
              void 0 === t && (t = 1),
                void 0 === e && (e = 0),
                void 0 === r && (r = 0),
                void 0 === n && (n = 1),
                void 0 === i && (i = 0),
                void 0 === s && (s = 0),
                ut(this, t, e, r, n, i, s);
            }
            var e = t.prototype;
            return (
              (e.inverse = function () {
                var t = this.a,
                  e = this.b,
                  r = this.c,
                  n = this.d,
                  i = this.e,
                  s = this.f,
                  a = t * n - e * r || 1e-10;
                return ut(
                  this,
                  n / a,
                  -e / a,
                  -r / a,
                  t / a,
                  (r * s - n * i) / a,
                  -(t * s - e * i) / a
                );
              }),
              (e.multiply = function (t) {
                var e = this.a,
                  r = this.b,
                  n = this.c,
                  i = this.d,
                  s = this.e,
                  a = this.f,
                  o = t.a,
                  u = t.c,
                  l = t.b,
                  c = t.d,
                  f = t.e,
                  h = t.f;
                return ut(
                  this,
                  o * e + l * n,
                  o * r + l * i,
                  u * e + c * n,
                  u * r + c * i,
                  s + f * e + h * n,
                  a + f * r + h * i
                );
              }),
              (e.clone = function () {
                return new t(this.a, this.b, this.c, this.d, this.e, this.f);
              }),
              (e.equals = function (t) {
                var e = this.a,
                  r = this.b,
                  n = this.c,
                  i = this.d,
                  s = this.e,
                  a = this.f;
                return (
                  e === t.a &&
                  r === t.b &&
                  n === t.c &&
                  i === t.d &&
                  s === t.e &&
                  a === t.f
                );
              }),
              (e.apply = function (t, e) {
                void 0 === e && (e = {});
                var r = t.x,
                  n = t.y,
                  i = this.a,
                  s = this.b,
                  a = this.c,
                  o = this.d,
                  u = this.e,
                  l = this.f;
                return (
                  (e.x = r * i + n * a + u || 0),
                  (e.y = r * s + n * o + l || 0),
                  e
                );
              }),
              t
            );
          })();
        function ct(t, e, r) {
          if (!t || !t.parentNode || (X || J(t)).documentElement === t)
            return new lt();
          var n = K(t.parentNode),
            i = it(t) ? tt : et,
            s = ot(t, r),
            a = i[0].getBoundingClientRect(),
            o = i[1].getBoundingClientRect(),
            u = i[2].getBoundingClientRect(),
            l = s.parentNode,
            c = st(t),
            f = new lt(
              (o.left - a.left) / 100,
              (o.top - a.top) / 100,
              (u.left - a.left) / 100,
              (u.top - a.top) / 100,
              a.left + (c ? 0 : nt()),
              a.top + (c ? 0 : rt())
            );
          if ((l.removeChild(s), n))
            for (a = n.length; a--; )
              ((o = n[a]).scaleX = o.scaleY = 0), o.renderTransform(1, o);
          return e ? f.inverse() : f;
        }
        var ft,
          ht,
          pt,
          dt,
          gt = ["x", "translateX", "left", "marginLeft"],
          mt = ["y", "translateY", "top", "marginTop"],
          _t = Math.PI / 180,
          vt = function (t, e, r, n) {
            for (var i = e.length, s = 2 === n ? 0 : n, a = 0; a < i; a++)
              (t[s] = parseFloat(e[a][r])), 2 === n && (t[s + 1] = 0), (s += 2);
            return t;
          },
          yt = function (t, e, r) {
            return parseFloat(t._gsap.get(t, e, r || "px")) || 0;
          },
          bt = function (t) {
            var e,
              r = t[0],
              n = t[1];
            for (e = 2; e < t.length; e += 2)
              (r = t[e] += r), (n = t[e + 1] += n);
          },
          xt = function (t, e, r, n, i, s, a) {
            return (
              "cubic" === a.type
                ? (e = [e])
                : (e.unshift(yt(r, n, a.unitX), i ? yt(r, i, a.unitY) : 0),
                  a.relative && bt(e),
                  (e = [(i ? I : F)(e, a.curviness)])),
              (e = s(Mt(e, r, a))),
              kt(t, r, n, e, "x", a.unitX),
              i && kt(t, r, i, e, "y", a.unitY),
              E(e, a.resolution || (0 === a.curviness ? 20 : 12))
            );
          },
          wt = function (t) {
            return t;
          },
          Tt = /[-+\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/g,
          Ot = function (t, e, r) {
            var n,
              i,
              s,
              a = ct(t);
            return (
              "svg" === (t.tagName + "").toLowerCase()
                ? ((i = (n = t.viewBox.baseVal).x),
                  (s = n.y),
                  n.width ||
                    (n = {
                      width: +t.getAttribute("width"),
                      height: +t.getAttribute("height"),
                    }))
                : ((n = e && t.getBBox && t.getBBox()), (i = s = 0)),
              e &&
                "auto" !== e &&
                ((i += e.push
                  ? e[0] * (n ? n.width : t.offsetWidth || 0)
                  : e.x),
                (s += e.push
                  ? e[1] * (n ? n.height : t.offsetHeight || 0)
                  : e.y)),
              r.apply(i || s ? a.apply({ x: i, y: s }) : { x: a.e, y: a.f })
            );
          },
          Pt = function (t, e, r, n) {
            var i,
              s = ct(t.parentNode, !0, !0),
              a = s.clone().multiply(ct(e)),
              o = Ot(t, r, s),
              u = Ot(e, n, s),
              l = u.x,
              c = u.y;
            return (
              (a.e = a.f = 0),
              "auto" === n &&
                e.getTotalLength &&
                "path" === e.tagName.toLowerCase() &&
                ((i = e.getAttribute("d").match(Tt) || []),
                (l += (i = a.apply({ x: +i[0], y: +i[1] })).x),
                (c += i.y)),
              (i ||
                (e.getBBox &&
                  t.getBBox &&
                  e.ownerSVGElement === t.ownerSVGElement)) &&
                ((l -= (i = a.apply(e.getBBox())).x), (c -= i.y)),
              (a.e = l - o.x),
              (a.f = c - o.y),
              a
            );
          },
          Mt = function (t, e, r) {
            var n,
              i,
              s,
              a = r.align,
              o = r.matrix,
              u = r.offsetX,
              l = r.offsetY,
              c = r.alignOrigin,
              f = t[0][0],
              h = t[0][1],
              p = yt(e, "x"),
              d = yt(e, "y");
            return t && t.length
              ? (a &&
                  ("self" === a || (n = dt(a)[0] || e) === e
                    ? z(t, 1, 0, 0, 1, p - f, d - h)
                    : (c && !1 !== c[2]
                        ? ft.set(e, {
                            transformOrigin:
                              100 * c[0] + "% " + 100 * c[1] + "%",
                          })
                        : (c = [
                            yt(e, "xPercent") / -100,
                            yt(e, "yPercent") / -100,
                          ]),
                      (s = (i = Pt(e, n, c, "auto")).apply({ x: f, y: h })),
                      z(
                        t,
                        i.a,
                        i.b,
                        i.c,
                        i.d,
                        p + i.e - (s.x - i.e),
                        d + i.f - (s.y - i.f)
                      ))),
                o
                  ? z(t, o.a, o.b, o.c, o.d, o.e, o.f)
                  : (u || l) && z(t, 1, 0, 0, 1, u || 0, l || 0),
                t)
              : O("M0,0L0,0");
          },
          kt = function (t, e, r, n, i, s) {
            var a = e._gsap,
              o = a.harness,
              u = o && o.aliases && o.aliases[r],
              l = u && u.indexOf(",") < 0 ? u : r,
              c = (t._pt = new ht(t._pt, e, l, 0, 0, wt, 0, a.set(e, l, t)));
            (c.u = pt(a.get(e, l, s)) || 0),
              (c.path = n),
              (c.pp = i),
              t._props.push(l);
          },
          St = {
            version: "3.4.2",
            name: "motionPath",
            register: function (t, e, r) {
              (pt = (ft = t).utils.getUnit), (dt = ft.utils.toArray), (ht = r);
            },
            init: function (t, e) {
              if (!ft)
                return (
                  console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),
                  !1
                );
              ("object" === typeof e && !e.style && e.path) ||
                (e = { path: e });
              var r,
                n,
                i,
                s,
                a,
                o,
                u = [],
                l = e.path,
                c = l[0],
                f = e.autoRotate,
                h =
                  ((a = e.start),
                  (o = "end" in e ? e.end : 1),
                  function (t) {
                    return a || 1 !== o ? A(t, a, o) : t;
                  });
              if (
                ((this.rawPaths = u),
                (this.target = t),
                (this.rotate = f || 0 === f) &&
                  ((this.rOffset = parseFloat(f) || 0),
                  (this.radians = !!e.useRadians),
                  (this.rProp = e.rotation || "rotation"),
                  (this.rSet = t._gsap.set(t, this.rProp, this)),
                  (this.ru = pt(t._gsap.get(t, this.rProp)) || 0)),
                !Array.isArray(l) || "closed" in l || "number" === typeof c)
              )
                E((r = h(Mt(O(e.path), t, e))), e.resolution),
                  u.push(r),
                  kt(this, t, e.x || "x", r, "x", e.unitX || "px"),
                  kt(this, t, e.y || "y", r, "y", e.unitY || "px");
              else {
                for (n in c)
                  ~gt.indexOf(n) ? (i = n) : ~mt.indexOf(n) && (s = n);
                for (n in (i && s
                  ? u.push(
                      xt(
                        this,
                        vt(vt([], l, i, 0), l, s, 1),
                        t,
                        e.x || i,
                        e.y || s,
                        h,
                        e
                      )
                    )
                  : (i = s = 0),
                c))
                  n !== i &&
                    n !== s &&
                    u.push(xt(this, vt([], l, n, 2), t, n, 0, h, e));
              }
            },
            render: function (t, e) {
              var r = e.rawPaths,
                n = r.length,
                i = e._pt;
              for (t > 1 ? (t = 1) : t < 0 && (t = 0); n--; )
                D(r[n], t, !n && e.rotate, r[n]);
              for (; i; )
                i.set(i.t, i.p, i.path[i.pp] + i.u, i.d, t), (i = i._next);
              e.rotate &&
                e.rSet(
                  e.target,
                  e.rProp,
                  r[0].angle * (e.radians ? _t : 1) + e.rOffset + e.ru,
                  e,
                  t
                );
            },
            getLength: function (t) {
              return E(O(t)).totalLength;
            },
            sliceRawPath: A,
            getRawPath: O,
            pointsToSegment: I,
            stringToRawPath: B,
            rawPathToString: Y,
            transformRawPath: z,
            getGlobalMatrix: ct,
            getPositionOnPath: D,
            cacheRawPathMeasurements: E,
            convertToPath: function (t, e) {
              return dt(t).map(function (t) {
                return (function (t, e) {
                  var n,
                    i,
                    s,
                    a,
                    o,
                    u,
                    l,
                    c,
                    f,
                    h,
                    p,
                    d,
                    g,
                    m,
                    _,
                    v,
                    y,
                    b,
                    x,
                    w,
                    T,
                    O,
                    P = t.tagName.toLowerCase(),
                    C = 0.552284749831;
                  return "path" !== P && t.getBBox
                    ? ((u = M(
                        t,
                        "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"
                      )),
                      (O = S(t, k[P])),
                      "rect" === P
                        ? ((a = O.rx),
                          (o = O.ry || a),
                          (i = O.x),
                          (s = O.y),
                          (h = O.width - 2 * a),
                          (p = O.height - 2 * o),
                          (n =
                            a || o
                              ? "M" +
                                (v = (m = (g = i + a) + h) + a) +
                                "," +
                                (b = s + o) +
                                " V" +
                                (x = b + p) +
                                " C" +
                                [
                                  v,
                                  (w = x + o * C),
                                  (_ = m + a * C),
                                  (T = x + o),
                                  m,
                                  T,
                                  m - (m - g) / 3,
                                  T,
                                  g + (m - g) / 3,
                                  T,
                                  g,
                                  T,
                                  (d = i + a * (1 - C)),
                                  T,
                                  i,
                                  w,
                                  i,
                                  x,
                                  i,
                                  x - (x - b) / 3,
                                  i,
                                  b + (x - b) / 3,
                                  i,
                                  b,
                                  i,
                                  (y = s + o * (1 - C)),
                                  d,
                                  s,
                                  g,
                                  s,
                                  g + (m - g) / 3,
                                  s,
                                  m - (m - g) / 3,
                                  s,
                                  m,
                                  s,
                                  _,
                                  s,
                                  v,
                                  y,
                                  v,
                                  b,
                                ].join(",") +
                                "z"
                              : "M" +
                                (i + h) +
                                "," +
                                s +
                                " v" +
                                p +
                                " h" +
                                -h +
                                " v" +
                                -p +
                                " h" +
                                h +
                                "z"))
                        : "circle" === P || "ellipse" === P
                        ? ("circle" === P
                            ? (c = (a = o = O.r) * C)
                            : ((a = O.rx), (c = (o = O.ry) * C)),
                          (n =
                            "M" +
                            ((i = O.cx) + a) +
                            "," +
                            (s = O.cy) +
                            " C" +
                            [
                              i + a,
                              s + c,
                              i + (l = a * C),
                              s + o,
                              i,
                              s + o,
                              i - l,
                              s + o,
                              i - a,
                              s + c,
                              i - a,
                              s,
                              i - a,
                              s - c,
                              i - l,
                              s - o,
                              i,
                              s - o,
                              i + l,
                              s - o,
                              i + a,
                              s - c,
                              i + a,
                              s,
                            ].join(",") +
                            "z"))
                        : "line" === P
                        ? (n =
                            "M" + O.x1 + "," + O.y1 + " L" + O.x2 + "," + O.y2)
                        : ("polyline" !== P && "polygon" !== P) ||
                          ((n =
                            "M" +
                            (i = (f =
                              (t.getAttribute("points") + "").match(r) ||
                              []).shift()) +
                            "," +
                            (s = f.shift()) +
                            " L" +
                            f.join(",")),
                          "polygon" === P && (n += "," + i + "," + s + "z")),
                      u.setAttribute("d", Y((u._gsRawPath = B(n)))),
                      e &&
                        t.parentNode &&
                        (t.parentNode.insertBefore(u, t),
                        t.parentNode.removeChild(t)),
                      u)
                    : t;
                })(t, !1 !== e);
              });
            },
            convertCoordinates: function (t, e, r) {
              var n = ct(e, !0, !0).multiply(ct(t));
              return r ? n.apply(r) : n;
            },
            getAlignMatrix: Pt,
            getRelativePosition: function (t, e, r, n) {
              var i = Pt(t, e, r, n);
              return { x: i.e, y: i.f };
            },
            arrayToRawPath: function (t, e) {
              var r = vt(
                vt([], t, (e = e || {}).x || "x", 0),
                t,
                e.y || "y",
                1
              );
              return (
                e.relative && bt(r),
                ["cubic" === e.type ? r : I(r, e.curviness)]
              );
            },
          };
        (ft ||
          ("undefined" !== typeof window &&
            (ft = window.gsap) &&
            ft.registerPlugin &&
            ft)) &&
          ft.registerPlugin(St),
          (t.MotionPathPlugin = St),
          (t.default = St),
          Object.defineProperty(t, "__esModule", { value: !0 });
      })(e);
    },
    pSoo: function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return a;
      });
      var n = r("q1tI"),
        i = "(prefers-reduced-motion: no-preference)",
        s = function () {
          return !window.matchMedia(i).matches;
        };
      function a() {
        var t = Object(n.useState)(s),
          e = t[0],
          r = t[1],
          a = function (t) {
            r(!t.matches);
          };
        return (
          Object(n.useEffect)(function () {
            var t = window.matchMedia(i);
            return (
              t.addListener(a),
              function () {
                t.removeListener(a);
              }
            );
          }, []),
          e
        );
      }
    },
    "z/o8": function (t, e, r) {
      "use strict";
      function n(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function i(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      }
      r.d(e, "a", function () {
        return on;
      });
      var s,
        a,
        o,
        u,
        l,
        c,
        f,
        h,
        p = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: { lineHeight: "" },
        },
        d = { duration: 0.5, overwrite: !1, delay: 0 },
        g = 1e-8,
        m = 2 * Math.PI,
        _ = m / 4,
        v = 0,
        y = Math.sqrt,
        b = Math.cos,
        x = Math.sin,
        w = function (t) {
          return "string" === typeof t;
        },
        T = function (t) {
          return "function" === typeof t;
        },
        O = function (t) {
          return "number" === typeof t;
        },
        P = function (t) {
          return "undefined" === typeof t;
        },
        M = function (t) {
          return "object" === typeof t;
        },
        k = function (t) {
          return !1 !== t;
        },
        S = function () {
          return "undefined" !== typeof window;
        },
        C = function (t) {
          return T(t) || w(t);
        },
        A = Array.isArray,
        L = /(?:-?\.?\d|\.)+/gi,
        E = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
        R = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        N = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
        D = /\(([^()]+)\)/i,
        z = /[+-]=-?[\.\d]+/,
        j = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
        B = {},
        F = {},
        I = function (t) {
          return (F = ht(t, B)) && He;
        },
        Y = function (t, e) {
          return console.warn(
            "Invalid property",
            t,
            "set to",
            e,
            "Missing plugin? gsap.registerPlugin()"
          );
        },
        X = function (t, e) {
          return !e && console.warn(t);
        },
        U = function (t, e) {
          return (t && (B[t] = e) && F && (F[t] = e)) || B;
        },
        q = function () {
          return 0;
        },
        V = {},
        W = [],
        G = {},
        Q = {},
        H = {},
        Z = 30,
        $ = [],
        J = "",
        K = function (t) {
          var e,
            r,
            n = t[0];
          if ((M(n) || T(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
            for (r = $.length; r-- && !$[r].targetTest(n); );
            e = $[r];
          }
          for (r = t.length; r--; )
            (t[r] && (t[r]._gsap || (t[r]._gsap = new be(t[r], e)))) ||
              t.splice(r, 1);
          return t;
        },
        tt = function (t) {
          return t._gsap || K(It(t))[0]._gsap;
        },
        et = function (t, e) {
          var r = t[e];
          return T(r) ? t[e]() : (P(r) && t.getAttribute(e)) || r;
        },
        rt = function (t, e) {
          return (t = t.split(",")).forEach(e) || t;
        },
        nt = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0;
        },
        it = function (t, e) {
          for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r; );
          return n < r;
        },
        st = function (t, e, r) {
          var n,
            i = O(t[1]),
            s = (i ? 2 : 1) + (e < 2 ? 0 : 1),
            a = t[s];
          if ((i && (a.duration = t[1]), (a.parent = r), e)) {
            for (n = a; r && !("immediateRender" in n); )
              (n = r.vars.defaults || {}), (r = k(r.vars.inherit) && r.parent);
            (a.immediateRender = k(n.immediateRender)),
              e < 2 ? (a.runBackwards = 1) : (a.startAt = t[s - 1]);
          }
          return a;
        },
        at = function () {
          var t,
            e,
            r = W.length,
            n = W.slice(0);
          for (G = {}, W.length = 0, t = 0; t < r; t++)
            (e = n[t]) &&
              e._lazy &&
              (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
        },
        ot = function (t, e, r, n) {
          W.length && at(), t.render(e, r, n), W.length && at();
        },
        ut = function (t) {
          var e = parseFloat(t);
          return (e || 0 === e) && (t + "").match(j).length < 2 ? e : t;
        },
        lt = function (t) {
          return t;
        },
        ct = function (t, e) {
          for (var r in e) r in t || (t[r] = e[r]);
          return t;
        },
        ft = function (t, e) {
          for (var r in e)
            r in t || "duration" === r || "ease" === r || (t[r] = e[r]);
        },
        ht = function (t, e) {
          for (var r in e) t[r] = e[r];
          return t;
        },
        pt = function t(e, r) {
          for (var n in r) e[n] = M(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n];
          return e;
        },
        dt = function (t, e) {
          var r,
            n = {};
          for (r in t) r in e || (n[r] = t[r]);
          return n;
        },
        gt = function (t) {
          var e = t.parent || s,
            r = t.keyframes ? ft : ct;
          if (k(t.inherit))
            for (; e; ) r(t, e.vars.defaults), (e = e.parent || e._dp);
          return t;
        },
        mt = function (t, e, r, n) {
          void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
          var i = e._prev,
            s = e._next;
          i ? (i._next = s) : t[r] === e && (t[r] = s),
            s ? (s._prev = i) : t[n] === e && (t[n] = i),
            (e._next = e._prev = e.parent = null);
        },
        _t = function (t, e) {
          t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
            (t._act = 0);
        },
        vt = function (t) {
          for (var e = t; e; ) (e._dirty = 1), (e = e.parent);
          return t;
        },
        yt = function (t) {
          for (var e = t.parent; e && e.parent; )
            (e._dirty = 1), e.totalDuration(), (e = e.parent);
          return t;
        },
        bt = function t(e) {
          return !e || (e._ts && t(e.parent));
        },
        xt = function (t) {
          return t._repeat
            ? wt(t._tTime, (t = t.duration() + t._rDelay)) * t
            : 0;
        },
        wt = function (t, e) {
          return (t /= e) && ~~t === t ? ~~t - 1 : ~~t;
        },
        Tt = function (t, e) {
          return (
            (t - e._start) * e._ts +
            (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
          );
        },
        Ot = function (t) {
          return (t._end = nt(
            t._start + (t._tDur / Math.abs(t._ts || t._rts || g) || 0)
          ));
        },
        Pt = function (t, e) {
          var r = t._dp;
          return (
            r &&
              r.smoothChildTiming &&
              t._ts &&
              ((t._start = nt(
                t._dp._time -
                  (t._ts > 0
                    ? e / t._ts
                    : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
              )),
              Ot(t),
              r._dirty || vt(r)),
            t
          );
        },
        Mt = function (t, e) {
          var r;
          if (
            ((e._time || (e._initted && !e._dur)) &&
              ((r = Tt(t.rawTime(), e)),
              (!e._dur || Dt(0, e.totalDuration(), r) - e._tTime > g) &&
                e.render(r, !0)),
            vt(t)._dp && t._initted && t._time >= t._dur && t._ts)
          ) {
            if (t._dur < t.duration())
              for (r = t; r._dp; )
                r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
            t._zTime = -g;
          }
        },
        kt = function (t, e, r, n) {
          return (
            e.parent && _t(e),
            (e._start = nt(r + e._delay)),
            (e._end = nt(
              e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
            )),
            (function (t, e, r, n, i) {
              void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
              var s,
                a = t[n];
              if (i) for (s = e[i]; a && a[i] > s; ) a = a._prev;
              a
                ? ((e._next = a._next), (a._next = e))
                : ((e._next = t[r]), (t[r] = e)),
                e._next ? (e._next._prev = e) : (t[n] = e),
                (e._prev = a),
                (e.parent = e._dp = t);
            })(t, e, "_first", "_last", t._sort ? "_start" : 0),
            (t._recent = e),
            n || Mt(t, e),
            t
          );
        },
        St = function (t, e) {
          return (
            (B.ScrollTrigger || Y("scrollTrigger", e)) &&
            B.ScrollTrigger.create(e, t)
          );
        },
        Ct = function (t, e, r, n) {
          return (
            ke(t, e),
            t._initted
              ? !r &&
                t._pt &&
                ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
                c !== oe.frame
                ? (W.push(t), (t._lazy = [e, n]), 1)
                : void 0
              : 1
          );
        },
        At = function (t, e, r) {
          var n = t._repeat,
            i = nt(e) || 0;
          return (
            (t._dur = i),
            (t._tDur = n
              ? n < 0
                ? 1e10
                : nt(i * (n + 1) + t._rDelay * n)
              : i),
            t._time > i &&
              ((t._time = i), (t._tTime = Math.min(t._tTime, t._tDur))),
            !r && vt(t.parent),
            t.parent && Ot(t),
            t
          );
        },
        Lt = function (t) {
          return t instanceof we ? vt(t) : At(t, t._dur);
        },
        Et = { _start: 0, endTime: q },
        Rt = function t(e, r) {
          var n,
            i,
            s = e.labels,
            a = e._recent || Et,
            o = e.duration() >= 1e8 ? a.endTime(!1) : e._dur;
          return w(r) && (isNaN(r) || r in s)
            ? "<" === (n = r.charAt(0)) || ">" === n
              ? ("<" === n ? a._start : a.endTime(a._repeat >= 0)) +
                (parseFloat(r.substr(1)) || 0)
              : (n = r.indexOf("=")) < 0
              ? (r in s || (s[r] = o), s[r])
              : ((i = +(r.charAt(n - 1) + r.substr(n + 1))),
                n > 1 ? t(e, r.substr(0, n - 1)) + i : o + i)
            : null == r
            ? o
            : +r;
        },
        Nt = function (t, e) {
          return t || 0 === t ? e(t) : e;
        },
        Dt = function (t, e, r) {
          return r < t ? t : r > e ? e : r;
        },
        zt = function (t) {
          return (t + "").substr((parseFloat(t) + "").length);
        },
        jt = [].slice,
        Bt = function (t, e) {
          return (
            t &&
            M(t) &&
            "length" in t &&
            ((!e && !t.length) || (t.length - 1 in t && M(t[0]))) &&
            !t.nodeType &&
            t !== a
          );
        },
        Ft = function (t, e, r) {
          return (
            void 0 === r && (r = []),
            t.forEach(function (t) {
              var n;
              return (w(t) && !e) || Bt(t, 1)
                ? (n = r).push.apply(n, It(t))
                : r.push(t);
            }) || r
          );
        },
        It = function (t, e) {
          return !w(t) || e || (!o && ue())
            ? A(t)
              ? Ft(t, e)
              : Bt(t)
              ? jt.call(t, 0)
              : t
              ? [t]
              : []
            : jt.call(u.querySelectorAll(t), 0);
        },
        Yt = function (t) {
          return t.sort(function () {
            return 0.5 - Math.random();
          });
        },
        Xt = function (t) {
          if (T(t)) return t;
          var e = M(t) ? t : { each: t },
            r = ge(e.ease),
            n = e.from || 0,
            i = parseFloat(e.base) || 0,
            s = {},
            a = n > 0 && n < 1,
            o = isNaN(n) || a,
            u = e.axis,
            l = n,
            c = n;
          return (
            w(n)
              ? (l = c = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
              : !a && o && ((l = n[0]), (c = n[1])),
            function (t, a, f) {
              var h,
                p,
                d,
                g,
                m,
                _,
                v,
                b,
                x,
                w = (f || e).length,
                T = s[w];
              if (!T) {
                if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) {
                  for (
                    v = -1e8;
                    v < (v = f[x++].getBoundingClientRect().left) && x < w;

                  );
                  x--;
                }
                for (
                  T = s[w] = [],
                    h = o ? Math.min(x, w) * l - 0.5 : n % x,
                    p = o ? (w * c) / x - 0.5 : (n / x) | 0,
                    v = 0,
                    b = 1e8,
                    _ = 0;
                  _ < w;
                  _++
                )
                  (d = (_ % x) - h),
                    (g = p - ((_ / x) | 0)),
                    (T[_] = m = u
                      ? Math.abs("y" === u ? g : d)
                      : y(d * d + g * g)),
                    m > v && (v = m),
                    m < b && (b = m);
                "random" === n && Yt(T),
                  (T.max = v - b),
                  (T.min = b),
                  (T.v = w =
                    (parseFloat(e.amount) ||
                      parseFloat(e.each) *
                        (x > w
                          ? w - 1
                          : u
                          ? "y" === u
                            ? w / x
                            : x
                          : Math.max(x, w / x)) ||
                      0) * ("edges" === n ? -1 : 1)),
                  (T.b = w < 0 ? i - w : i),
                  (T.u = zt(e.amount || e.each) || 0),
                  (r = r && w < 0 ? pe(r) : r);
              }
              return (
                (w = (T[t] - T.min) / T.max || 0),
                nt(T.b + (r ? r(w) : w) * T.v) + T.u
              );
            }
          );
        },
        Ut = function (t) {
          var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
          return function (r) {
            return (
              Math.floor(Math.round(parseFloat(r) / t) * t * e) / e +
              (O(r) ? 0 : zt(r))
            );
          };
        },
        qt = function (t, e) {
          var r,
            n,
            i = A(t);
          return (
            !i &&
              M(t) &&
              ((r = i = t.radius || 1e8),
              t.values
                ? ((t = It(t.values)), (n = !O(t[0])) && (r *= r))
                : (t = Ut(t.increment))),
            Nt(
              e,
              i
                ? T(t)
                  ? function (e) {
                      return (n = t(e)), Math.abs(n - e) <= r ? n : e;
                    }
                  : function (e) {
                      for (
                        var i,
                          s,
                          a = parseFloat(n ? e.x : e),
                          o = parseFloat(n ? e.y : 0),
                          u = 1e8,
                          l = 0,
                          c = t.length;
                        c--;

                      )
                        (i = n
                          ? (i = t[c].x - a) * i + (s = t[c].y - o) * s
                          : Math.abs(t[c] - a)) < u && ((u = i), (l = c));
                      return (
                        (l = !r || u <= r ? t[l] : e),
                        n || l === e || O(e) ? l : l + zt(e)
                      );
                    }
                : Ut(t)
            )
          );
        },
        Vt = function (t, e, r, n) {
          return Nt(A(t) ? !e : !0 === r ? !!(r = 0) : !n, function () {
            return A(t)
              ? t[~~(Math.random() * t.length)]
              : (r = r || 1e-5) &&
                  (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
                  Math.floor(
                    Math.round((t + Math.random() * (e - t)) / r) * r * n
                  ) / n;
          });
        },
        Wt = function (t, e, r) {
          return Nt(r, function (r) {
            return t[~~e(r)];
          });
        },
        Gt = function (t) {
          for (var e, r, n, i, s = 0, a = ""; ~(e = t.indexOf("random(", s)); )
            (n = t.indexOf(")", e)),
              (i = "[" === t.charAt(e + 7)),
              (r = t.substr(e + 7, n - e - 7).match(i ? j : L)),
              (a +=
                t.substr(s, e - s) + Vt(i ? r : +r[0], +r[1], +r[2] || 1e-5)),
              (s = n + 1);
          return a + t.substr(s, t.length - s);
        },
        Qt = function (t, e, r, n, i) {
          var s = e - t,
            a = n - r;
          return Nt(i, function (e) {
            return r + (((e - t) / s) * a || 0);
          });
        },
        Ht = function (t, e, r) {
          var n,
            i,
            s,
            a = t.labels,
            o = 1e8;
          for (n in a)
            (i = a[n] - e) < 0 === !!r &&
              i &&
              o > (i = Math.abs(i)) &&
              ((s = n), (o = i));
          return s;
        },
        Zt = function (t, e, r) {
          var n,
            i,
            s = t.vars,
            a = s[e];
          if (a)
            return (
              (n = s[e + "Params"]),
              (i = s.callbackScope || t),
              r && W.length && at(),
              n ? a.apply(i, n) : a.call(i)
            );
        },
        $t = function (t) {
          return _t(t), t.progress() < 1 && Zt(t, "onInterrupt"), t;
        },
        Jt = function (t) {
          var e = (t = (!t.name && t.default) || t).name,
            r = T(t),
            n =
              e && !r && t.init
                ? function () {
                    this._props = [];
                  }
                : t,
            i = {
              init: q,
              render: Ie,
              add: Pe,
              kill: Xe,
              modifier: Ye,
              rawVars: 0,
            },
            s = {
              targetTest: 0,
              get: 0,
              getSetter: ze,
              aliases: {},
              register: 0,
            };
          if ((ue(), t !== n)) {
            if (Q[e]) return;
            ct(n, ct(dt(t, i), s)),
              ht(n.prototype, ht(i, dt(t, s))),
              (Q[(n.prop = e)] = n),
              t.targetTest && ($.push(n), (V[e] = 1)),
              (e =
                ("css" === e
                  ? "CSS"
                  : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
          }
          U(e, n), t.register && t.register(He, n, Ve);
        },
        Kt = {
          aqua: [0, 255, 255],
          lime: [0, 255, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, 255],
          navy: [0, 0, 128],
          white: [255, 255, 255],
          olive: [128, 128, 0],
          yellow: [255, 255, 0],
          orange: [255, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [255, 0, 0],
          pink: [255, 192, 203],
          cyan: [0, 255, 255],
          transparent: [255, 255, 255, 0],
        },
        te = function (t, e, r) {
          return (
            (255 *
              (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1
                ? e + (r - e) * t * 6
                : t < 0.5
                ? r
                : 3 * t < 2
                ? e + (r - e) * (2 / 3 - t) * 6
                : e) +
              0.5) |
            0
          );
        },
        ee = function (t, e, r) {
          var n,
            i,
            s,
            a,
            o,
            u,
            l,
            c,
            f,
            h,
            p = t ? (O(t) ? [t >> 16, (t >> 8) & 255, 255 & t] : 0) : Kt.black;
          if (!p) {
            if (
              ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Kt[t])
            )
              p = Kt[t];
            else if ("#" === t.charAt(0))
              4 === t.length &&
                ((n = t.charAt(1)),
                (i = t.charAt(2)),
                (s = t.charAt(3)),
                (t = "#" + n + n + i + i + s + s)),
                (p = [
                  (t = parseInt(t.substr(1), 16)) >> 16,
                  (t >> 8) & 255,
                  255 & t,
                ]);
            else if ("hsl" === t.substr(0, 3))
              if (((p = h = t.match(L)), e)) {
                if (~t.indexOf("="))
                  return (p = t.match(E)), r && p.length < 4 && (p[3] = 1), p;
              } else
                (a = (+p[0] % 360) / 360),
                  (o = +p[1] / 100),
                  (n =
                    2 * (u = +p[2] / 100) -
                    (i = u <= 0.5 ? u * (o + 1) : u + o - u * o)),
                  p.length > 3 && (p[3] *= 1),
                  (p[0] = te(a + 1 / 3, n, i)),
                  (p[1] = te(a, n, i)),
                  (p[2] = te(a - 1 / 3, n, i));
            else p = t.match(L) || Kt.transparent;
            p = p.map(Number);
          }
          return (
            e &&
              !h &&
              ((n = p[0] / 255),
              (i = p[1] / 255),
              (s = p[2] / 255),
              (u = ((l = Math.max(n, i, s)) + (c = Math.min(n, i, s))) / 2),
              l === c
                ? (a = o = 0)
                : ((f = l - c),
                  (o = u > 0.5 ? f / (2 - l - c) : f / (l + c)),
                  (a =
                    l === n
                      ? (i - s) / f + (i < s ? 6 : 0)
                      : l === i
                      ? (s - n) / f + 2
                      : (n - i) / f + 4),
                  (a *= 60)),
              (p[0] = ~~(a + 0.5)),
              (p[1] = ~~(100 * o + 0.5)),
              (p[2] = ~~(100 * u + 0.5))),
            r && p.length < 4 && (p[3] = 1),
            p
          );
        },
        re = function (t) {
          var e = [],
            r = [],
            n = -1;
          return (
            t.split(ie).forEach(function (t) {
              var i = t.match(R) || [];
              e.push.apply(e, i), r.push((n += i.length + 1));
            }),
            (e.c = r),
            e
          );
        },
        ne = function (t, e, r) {
          var n,
            i,
            s,
            a,
            o = "",
            u = (t + o).match(ie),
            l = e ? "hsla(" : "rgba(",
            c = 0;
          if (!u) return t;
          if (
            ((u = u.map(function (t) {
              return (
                (t = ee(t, e, 1)) &&
                l +
                  (e
                    ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                    : t.join(",")) +
                  ")"
              );
            })),
            r && ((s = re(t)), (n = r.c).join(o) !== s.c.join(o)))
          )
            for (a = (i = t.replace(ie, "1").split(R)).length - 1; c < a; c++)
              o +=
                i[c] +
                (~n.indexOf(c)
                  ? u.shift() || l + "0,0,0,0)"
                  : (s.length ? s : u.length ? u : r).shift());
          if (!i)
            for (a = (i = t.split(ie)).length - 1; c < a; c++) o += i[c] + u[c];
          return o + i[a];
        },
        ie = (function () {
          var t,
            e =
              "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
          for (t in Kt) e += "|" + t + "\\b";
          return new RegExp(e + ")", "gi");
        })(),
        se = /hsl[a]?\(/,
        ae = function (t) {
          var e,
            r = t.join(" ");
          if (((ie.lastIndex = 0), ie.test(r)))
            return (
              (e = se.test(r)),
              (t[1] = ne(t[1], e)),
              (t[0] = ne(t[0], e, re(t[1]))),
              !0
            );
        },
        oe = (function () {
          var t,
            e,
            r,
            n,
            i = Date.now,
            s = 500,
            c = 33,
            f = i(),
            p = f,
            d = 1 / 240,
            m = d,
            _ = [],
            v = function r(a) {
              var o,
                u,
                l = i() - p,
                h = !0 === a;
              l > s && (f += l - c),
                (p += l),
                (n.time = (p - f) / 1e3),
                ((o = n.time - m) > 0 || h) &&
                  (n.frame++, (m += o + (o >= d ? 0.004 : d - o)), (u = 1)),
                h || (t = e(r)),
                u &&
                  _.forEach(function (t) {
                    return t(n.time, l, n.frame, a);
                  });
            };
          return (n = {
            time: 0,
            frame: 0,
            tick: function () {
              v(!0);
            },
            wake: function () {
              l &&
                (!o &&
                  S() &&
                  ((a = o = window),
                  (u = a.document || {}),
                  (B.gsap = He),
                  (a.gsapVersions || (a.gsapVersions = [])).push(He.version),
                  I(F || a.GreenSockGlobals || (!a.gsap && a) || {}),
                  (r = a.requestAnimationFrame)),
                t && n.sleep(),
                (e =
                  r ||
                  function (t) {
                    return setTimeout(t, (1e3 * (m - n.time) + 1) | 0);
                  }),
                (h = 1),
                v(2));
            },
            sleep: function () {
              (r ? a.cancelAnimationFrame : clearTimeout)(t), (h = 0), (e = q);
            },
            lagSmoothing: function (t, e) {
              (s = t || 1 / g), (c = Math.min(e, s, 0));
            },
            fps: function (t) {
              (d = 1 / (t || 240)), (m = n.time + d);
            },
            add: function (t) {
              _.indexOf(t) < 0 && _.push(t), ue();
            },
            remove: function (t) {
              var e;
              ~(e = _.indexOf(t)) && _.splice(e, 1);
            },
            _listeners: _,
          });
        })(),
        ue = function () {
          return !h && oe.wake();
        },
        le = {},
        ce = /^[\d.\-M][\d.\-,\s]/,
        fe = /["']/g,
        he = function (t) {
          for (
            var e,
              r,
              n,
              i = {},
              s = t.substr(1, t.length - 3).split(":"),
              a = s[0],
              o = 1,
              u = s.length;
            o < u;
            o++
          )
            (r = s[o]),
              (e = o !== u - 1 ? r.lastIndexOf(",") : r.length),
              (n = r.substr(0, e)),
              (i[a] = isNaN(n) ? n.replace(fe, "").trim() : +n),
              (a = r.substr(e + 1).trim());
          return i;
        },
        pe = function (t) {
          return function (e) {
            return 1 - t(1 - e);
          };
        },
        de = function t(e, r) {
          for (var n, i = e._first; i; )
            i instanceof we
              ? t(i, r)
              : !i.vars.yoyoEase ||
                (i._yoyo && i._repeat) ||
                i._yoyo === r ||
                (i.timeline
                  ? t(i.timeline, r)
                  : ((n = i._ease),
                    (i._ease = i._yEase),
                    (i._yEase = n),
                    (i._yoyo = r))),
              (i = i._next);
        },
        ge = function (t, e) {
          return (
            (t &&
              (T(t)
                ? t
                : le[t] ||
                  (function (t) {
                    var e = (t + "").split("("),
                      r = le[e[0]];
                    return r && e.length > 1 && r.config
                      ? r.config.apply(
                          null,
                          ~t.indexOf("{")
                            ? [he(e[1])]
                            : D.exec(t)[1].split(",").map(ut)
                        )
                      : le._CE && ce.test(t)
                      ? le._CE("", t)
                      : r;
                  })(t))) ||
            e
          );
        },
        me = function (t, e, r, n) {
          void 0 === r &&
            (r = function (t) {
              return 1 - e(1 - t);
            }),
            void 0 === n &&
              (n = function (t) {
                return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
              });
          var i,
            s = { easeIn: e, easeOut: r, easeInOut: n };
          return (
            rt(t, function (t) {
              for (var e in ((le[t] = B[t] = s),
              (le[(i = t.toLowerCase())] = r),
              s))
                le[
                  i +
                    ("easeIn" === e
                      ? ".in"
                      : "easeOut" === e
                      ? ".out"
                      : ".inOut")
                ] = le[t + "." + e] = s[e];
            }),
            s
          );
        },
        _e = function (t) {
          return function (e) {
            return e < 0.5
              ? (1 - t(1 - 2 * e)) / 2
              : 0.5 + t(2 * (e - 0.5)) / 2;
          };
        },
        ve = function t(e, r, n) {
          var i = r >= 1 ? r : 1,
            s = (n || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
            a = (s / m) * (Math.asin(1 / i) || 0),
            o = function (t) {
              return 1 === t
                ? 1
                : i * Math.pow(2, -10 * t) * x((t - a) * s) + 1;
            },
            u =
              "out" === e
                ? o
                : "in" === e
                ? function (t) {
                    return 1 - o(1 - t);
                  }
                : _e(o);
          return (
            (s = m / s),
            (u.config = function (r, n) {
              return t(e, r, n);
            }),
            u
          );
        },
        ye = function t(e, r) {
          void 0 === r && (r = 1.70158);
          var n = function (t) {
              return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
            },
            i =
              "out" === e
                ? n
                : "in" === e
                ? function (t) {
                    return 1 - n(1 - t);
                  }
                : _e(n);
          return (
            (i.config = function (r) {
              return t(e, r);
            }),
            i
          );
        };
      rt("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
        var r = e < 5 ? e + 1 : e;
        me(
          t + ",Power" + (r - 1),
          e
            ? function (t) {
                return Math.pow(t, r);
              }
            : function (t) {
                return t;
              },
          function (t) {
            return 1 - Math.pow(1 - t, r);
          },
          function (t) {
            return t < 0.5
              ? Math.pow(2 * t, r) / 2
              : 1 - Math.pow(2 * (1 - t), r) / 2;
          }
        );
      }),
        (le.Linear.easeNone = le.none = le.Linear.easeIn),
        me("Elastic", ve("in"), ve("out"), ve()),
        (function (t, e) {
          var r = 1 / e,
            n = function (n) {
              return n < r
                ? t * n * n
                : n < 0.7272727272727273
                ? t * Math.pow(n - 1.5 / e, 2) + 0.75
                : n < 0.9090909090909092
                ? t * (n -= 2.25 / e) * n + 0.9375
                : t * Math.pow(n - 2.625 / e, 2) + 0.984375;
            };
          me(
            "Bounce",
            function (t) {
              return 1 - n(1 - t);
            },
            n
          );
        })(7.5625, 2.75),
        me("Expo", function (t) {
          return t ? Math.pow(2, 10 * (t - 1)) : 0;
        }),
        me("Circ", function (t) {
          return -(y(1 - t * t) - 1);
        }),
        me("Sine", function (t) {
          return 1 === t ? 1 : 1 - b(t * _);
        }),
        me("Back", ye("in"), ye("out"), ye()),
        (le.SteppedEase = le.steps = B.SteppedEase = {
          config: function (t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
              n = t + (e ? 0 : 1),
              i = e ? 1 : 0,
              s = 1 - g;
            return function (t) {
              return (((n * Dt(0, s, t)) | 0) + i) * r;
            };
          },
        }),
        (d.ease = le["quad.out"]),
        rt(
          "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
          function (t) {
            return (J += t + "," + t + "Params,");
          }
        );
      var be = function (t, e) {
          (this.id = v++),
            (t._gsap = this),
            (this.target = t),
            (this.harness = e),
            (this.get = e ? e.get : et),
            (this.set = e ? e.getSetter : ze);
        },
        xe = (function () {
          function t(t, e) {
            var r = t.parent || s;
            (this.vars = t),
              (this._delay = +t.delay || 0),
              (this._repeat = t.repeat || 0) &&
                ((this._rDelay = t.repeatDelay || 0),
                (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
              (this._ts = 1),
              At(this, +t.duration, 1),
              (this.data = t.data),
              h || oe.wake(),
              r && kt(r, this, e || 0 === e ? e : r._time, 1),
              t.reversed && this.reverse(),
              t.paused && this.paused(!0);
          }
          var e = t.prototype;
          return (
            (e.delay = function (t) {
              return t || 0 === t
                ? (this.parent &&
                    this.parent.smoothChildTiming &&
                    this.startTime(this._start + t - this._delay),
                  (this._delay = t),
                  this)
                : this._delay;
            }),
            (e.duration = function (t) {
              return arguments.length
                ? this.totalDuration(
                    this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
                  )
                : this.totalDuration() && this._dur;
            }),
            (e.totalDuration = function (t) {
              if (!arguments.length) return this._tDur;
              this._dirty = 0;
              var e = this._time / this._dur || 0;
              return (
                At(
                  this,
                  this._repeat < 0
                    ? t
                    : (t - this._repeat * this._rDelay) / (this._repeat + 1)
                ),
                this._tTime ? Pt(this, e * t + xt(this)) : this
              );
            }),
            (e.totalTime = function (t, e) {
              if ((ue(), !arguments.length)) return this._tTime;
              var r = this._dp;
              if (r && r.smoothChildTiming && this._ts) {
                for (Pt(this, t); r.parent; )
                  r.parent._time !==
                    r._start +
                      (r._ts >= 0
                        ? r._tTime / r._ts
                        : (r.totalDuration() - r._tTime) / -r._ts) &&
                    r.totalTime(r._tTime, !0),
                    (r = r.parent);
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((this._ts > 0 && t < this._tDur) ||
                    (this._ts < 0 && t > 0) ||
                    (!this._tDur && !t)) &&
                  kt(this._dp, this, this._start - this._delay);
              }
              return (
                (this._tTime !== t ||
                  (!this._dur && !e) ||
                  (this._initted && Math.abs(this._zTime) === g) ||
                  (!t && !this._initted)) &&
                  (this._ts || (this._pTime = t), ot(this, t, e)),
                this
              );
            }),
            (e.time = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), t + xt(this)) % this._dur ||
                      (t ? this._dur : 0),
                    e
                  )
                : this._time;
            }),
            (e.totalProgress = function (t, e) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * t, e)
                : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.ratio;
            }),
            (e.progress = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    this.duration() *
                      (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                      xt(this),
                    e
                  )
                : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.ratio;
            }),
            (e.iteration = function (t, e) {
              var r = this.duration() + this._rDelay;
              return arguments.length
                ? this.totalTime(this._time + (t - 1) * r, e)
                : this._repeat
                ? wt(this._tTime, r) + 1
                : 1;
            }),
            (e.timeScale = function (t) {
              if (!arguments.length) return this._rts === -g ? 0 : this._rts;
              if (this._rts === t) return this;
              var e =
                this.parent && this._ts
                  ? Tt(this.parent._time, this)
                  : this._tTime;
              return (
                (this._rts = +t || 0),
                (this._ts = this._ps || t === -g ? 0 : this._rts),
                yt(this.totalTime(Dt(-this._delay, this._tDur, e), !0))
              );
            }),
            (e.paused = function (t) {
              return arguments.length
                ? (this._ps !== t &&
                    ((this._ps = t),
                    t
                      ? ((this._pTime =
                          this._tTime ||
                          Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (ue(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming
                            ? this.rawTime()
                            : this._tTime || this._pTime,
                          1 === this.progress() &&
                            (this._tTime -= g) &&
                            Math.abs(this._zTime) !== g
                        ))),
                  this)
                : this._ps;
            }),
            (e.startTime = function (t) {
              if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return (
                  e &&
                    (e._sort || !this.parent) &&
                    kt(e, this, t - this._delay),
                  this
                );
              }
              return this._start;
            }),
            (e.endTime = function (t) {
              return (
                this._start +
                (k(t) ? this.totalDuration() : this.duration()) /
                  Math.abs(this._ts)
              );
            }),
            (e.rawTime = function (t) {
              var e = this.parent || this._dp;
              return e
                ? t &&
                  (!this._ts ||
                    (this._repeat && this._time && this.totalProgress() < 1))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                  ? Tt(e.rawTime(t), this)
                  : this._tTime
                : this._tTime;
            }),
            (e.globalTime = function (t) {
              for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
                (r = e._start + r / (e._ts || 1)), (e = e._dp);
              return r;
            }),
            (e.repeat = function (t) {
              return arguments.length
                ? ((this._repeat = t), Lt(this))
                : this._repeat;
            }),
            (e.repeatDelay = function (t) {
              return arguments.length
                ? ((this._rDelay = t), Lt(this))
                : this._rDelay;
            }),
            (e.yoyo = function (t) {
              return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
            }),
            (e.seek = function (t, e) {
              return this.totalTime(Rt(this, t), k(e));
            }),
            (e.restart = function (t, e) {
              return this.play().totalTime(t ? -this._delay : 0, k(e));
            }),
            (e.play = function (t, e) {
              return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }),
            (e.reverse = function (t, e) {
              return (
                null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
              );
            }),
            (e.pause = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!0);
            }),
            (e.resume = function () {
              return this.paused(!1);
            }),
            (e.reversed = function (t) {
              return arguments.length
                ? (!!t !== this.reversed() &&
                    this.timeScale(-this._rts || (t ? -g : 0)),
                  this)
                : this._rts < 0;
            }),
            (e.invalidate = function () {
              return (this._initted = 0), (this._zTime = -g), this;
            }),
            (e.isActive = function () {
              var t,
                e = this.parent || this._dp,
                r = this._start;
              return !(
                e &&
                !(
                  this._ts &&
                  this._initted &&
                  e.isActive() &&
                  (t = e.rawTime(!0)) >= r &&
                  t < this.endTime(!0) - g
                )
              );
            }),
            (e.eventCallback = function (t, e, r) {
              var n = this.vars;
              return arguments.length > 1
                ? (e
                    ? ((n[t] = e),
                      r && (n[t + "Params"] = r),
                      "onUpdate" === t && (this._onUpdate = e))
                    : delete n[t],
                  this)
                : n[t];
            }),
            (e.then = function (t) {
              var e = this;
              return new Promise(function (r) {
                var n = T(t) ? t : lt,
                  i = function () {
                    var t = e.then;
                    (e.then = null),
                      T(n) && (n = n(e)) && (n.then || n === e) && (e.then = t),
                      r(n),
                      (e.then = t);
                  };
                (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
                (!e._tTime && e._ts < 0)
                  ? i()
                  : (e._prom = i);
              });
            }),
            (e.kill = function () {
              $t(this);
            }),
            t
          );
        })();
      ct(xe.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -g,
        _prom: 0,
        _ps: !1,
        _rts: 1,
      });
      var we = (function (t) {
        function e(e, r) {
          var i;
          return (
            void 0 === e && (e = {}),
            ((i = t.call(this, e, r) || this).labels = {}),
            (i.smoothChildTiming = !!e.smoothChildTiming),
            (i.autoRemoveChildren = !!e.autoRemoveChildren),
            (i._sort = k(e.sortChildren)),
            i.parent && Mt(i.parent, n(i)),
            e.scrollTrigger && St(n(i), e.scrollTrigger),
            i
          );
        }
        i(e, t);
        var r = e.prototype;
        return (
          (r.to = function (t, e, r) {
            return (
              new Le(
                t,
                st(arguments, 0, this),
                Rt(this, O(e) ? arguments[3] : r)
              ),
              this
            );
          }),
          (r.from = function (t, e, r) {
            return (
              new Le(
                t,
                st(arguments, 1, this),
                Rt(this, O(e) ? arguments[3] : r)
              ),
              this
            );
          }),
          (r.fromTo = function (t, e, r, n) {
            return (
              new Le(
                t,
                st(arguments, 2, this),
                Rt(this, O(e) ? arguments[4] : n)
              ),
              this
            );
          }),
          (r.set = function (t, e, r) {
            return (
              (e.duration = 0),
              (e.parent = this),
              gt(e).repeatDelay || (e.repeat = 0),
              (e.immediateRender = !!e.immediateRender),
              new Le(t, e, Rt(this, r), 1),
              this
            );
          }),
          (r.call = function (t, e, r) {
            return kt(this, Le.delayedCall(0, t, e), Rt(this, r));
          }),
          (r.staggerTo = function (t, e, r, n, i, s, a) {
            return (
              (r.duration = e),
              (r.stagger = r.stagger || n),
              (r.onComplete = s),
              (r.onCompleteParams = a),
              (r.parent = this),
              new Le(t, r, Rt(this, i)),
              this
            );
          }),
          (r.staggerFrom = function (t, e, r, n, i, s, a) {
            return (
              (r.runBackwards = 1),
              (gt(r).immediateRender = k(r.immediateRender)),
              this.staggerTo(t, e, r, n, i, s, a)
            );
          }),
          (r.staggerFromTo = function (t, e, r, n, i, s, a, o) {
            return (
              (n.startAt = r),
              (gt(n).immediateRender = k(n.immediateRender)),
              this.staggerTo(t, e, n, i, s, a, o)
            );
          }),
          (r.render = function (t, e, r) {
            var n,
              i,
              a,
              o,
              u,
              l,
              c,
              f,
              h,
              p,
              d,
              m,
              _ = this._time,
              v = this._dirty ? this.totalDuration() : this._tDur,
              y = this._dur,
              b = this !== s && t > v - g && t >= 0 ? v : t < g ? 0 : t,
              x = this._zTime < 0 !== t < 0 && (this._initted || !y);
            if (b !== this._tTime || r || x) {
              if (
                (_ !== this._time &&
                  y &&
                  ((b += this._time - _), (t += this._time - _)),
                (n = b),
                (h = this._start),
                (l = !(f = this._ts)),
                x && (y || (_ = this._zTime), (t || !e) && (this._zTime = t)),
                this._repeat &&
                  ((d = this._yoyo),
                  (u = y + this._rDelay),
                  ((n = nt(b % u)) > y || v === b) && (n = y),
                  (o = ~~(b / u)) && o === b / u && ((n = y), o--),
                  (p = wt(this._tTime, u)),
                  !_ && this._tTime && p !== o && (p = o),
                  d && 1 & o && ((n = y - n), (m = 1)),
                  o !== p && !this._lock))
              ) {
                var w = d && 1 & p,
                  T = w === (d && 1 & o);
                if (
                  (o < p && (w = !w),
                  (_ = w ? 0 : y),
                  (this._lock = 1),
                  (this.render(_ || (m ? 0 : nt(o * u)), e, !y)._lock = 0),
                  !e && this.parent && Zt(this, "onRepeat"),
                  this.vars.repeatRefresh &&
                    !m &&
                    (this.invalidate()._lock = 1),
                  _ !== this._time || l !== !this._ts)
                )
                  return this;
                if (
                  (T &&
                    ((this._lock = 2),
                    (_ = w ? y + 1e-4 : -1e-4),
                    this.render(_, !0),
                    this.vars.repeatRefresh && !m && this.invalidate()),
                  (this._lock = 0),
                  !this._ts && !l)
                )
                  return this;
                de(this, m);
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  (c = (function (t, e, r) {
                    var n;
                    if (r > e)
                      for (n = t._first; n && n._start <= r; ) {
                        if (!n._dur && "isPause" === n.data && n._start > e)
                          return n;
                        n = n._next;
                      }
                    else
                      for (n = t._last; n && n._start >= r; ) {
                        if (!n._dur && "isPause" === n.data && n._start < e)
                          return n;
                        n = n._prev;
                      }
                  })(this, nt(_), nt(n))) &&
                  (b -= n - (n = c._start)),
                (this._tTime = b),
                (this._time = n),
                (this._act = !f),
                this._initted ||
                  ((this._onUpdate = this.vars.onUpdate),
                  (this._initted = 1),
                  (this._zTime = t)),
                _ || !n || e || Zt(this, "onStart"),
                n >= _ && t >= 0)
              )
                for (i = this._first; i; ) {
                  if (
                    ((a = i._next),
                    (i._act || n >= i._start) && i._ts && c !== i)
                  ) {
                    if (i.parent !== this) return this.render(t, e, r);
                    if (
                      (i.render(
                        i._ts > 0
                          ? (n - i._start) * i._ts
                          : (i._dirty ? i.totalDuration() : i._tDur) +
                              (n - i._start) * i._ts,
                        e,
                        r
                      ),
                      n !== this._time || (!this._ts && !l))
                    ) {
                      (c = 0), a && (b += this._zTime = -g);
                      break;
                    }
                  }
                  i = a;
                }
              else {
                i = this._last;
                for (var O = t < 0 ? t : n; i; ) {
                  if (
                    ((a = i._prev), (i._act || O <= i._end) && i._ts && c !== i)
                  ) {
                    if (i.parent !== this) return this.render(t, e, r);
                    if (
                      (i.render(
                        i._ts > 0
                          ? (O - i._start) * i._ts
                          : (i._dirty ? i.totalDuration() : i._tDur) +
                              (O - i._start) * i._ts,
                        e,
                        r
                      ),
                      n !== this._time || (!this._ts && !l))
                    ) {
                      (c = 0), a && (b += this._zTime = O ? -g : g);
                      break;
                    }
                  }
                  i = a;
                }
              }
              if (
                c &&
                !e &&
                (this.pause(),
                (c.render(n >= _ ? 0 : -g)._zTime = n >= _ ? 1 : -1),
                this._ts)
              )
                return (this._start = h), Ot(this), this.render(t, e, r);
              this._onUpdate && !e && Zt(this, "onUpdate", !0),
                ((b === v && v >= this.totalDuration()) || (!b && _)) &&
                  ((h !== this._start && Math.abs(f) === Math.abs(this._ts)) ||
                    this._lock ||
                    ((t || !y) &&
                      ((b === v && this._ts > 0) || (!b && this._ts < 0)) &&
                      _t(this, 1),
                    e ||
                      (t < 0 && !_) ||
                      (!b && !_) ||
                      (Zt(
                        this,
                        b === v ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(b < v && this.timeScale() > 0) &&
                        this._prom())));
            }
            return this;
          }),
          (r.add = function (t, e) {
            var r = this;
            if ((O(e) || (e = Rt(this, e)), !(t instanceof xe))) {
              if (A(t))
                return (
                  t.forEach(function (t) {
                    return r.add(t, e);
                  }),
                  vt(this)
                );
              if (w(t)) return this.addLabel(t, e);
              if (!T(t)) return this;
              t = Le.delayedCall(0, t);
            }
            return this !== t ? kt(this, t, e) : this;
          }),
          (r.getChildren = function (t, e, r, n) {
            void 0 === t && (t = !0),
              void 0 === e && (e = !0),
              void 0 === r && (r = !0),
              void 0 === n && (n = -1e8);
            for (var i = [], s = this._first; s; )
              s._start >= n &&
                (s instanceof Le
                  ? e && i.push(s)
                  : (r && i.push(s),
                    t && i.push.apply(i, s.getChildren(!0, e, r)))),
                (s = s._next);
            return i;
          }),
          (r.getById = function (t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
              if (e[r].vars.id === t) return e[r];
          }),
          (r.remove = function (t) {
            return w(t)
              ? this.removeLabel(t)
              : T(t)
              ? this.killTweensOf(t)
              : (mt(this, t),
                t === this._recent && (this._recent = this._last),
                vt(this));
          }),
          (r.totalTime = function (e, r) {
            return arguments.length
              ? ((this._forcing = 1),
                !this._dp &&
                  this._ts &&
                  (this._start = nt(
                    oe.time -
                      (this._ts > 0
                        ? e / this._ts
                        : (this.totalDuration() - e) / -this._ts)
                  )),
                t.prototype.totalTime.call(this, e, r),
                (this._forcing = 0),
                this)
              : this._tTime;
          }),
          (r.addLabel = function (t, e) {
            return (this.labels[t] = Rt(this, e)), this;
          }),
          (r.removeLabel = function (t) {
            return delete this.labels[t], this;
          }),
          (r.addPause = function (t, e, r) {
            var n = Le.delayedCall(0, e || q, r);
            return (
              (n.data = "isPause"),
              (this._hasPause = 1),
              kt(this, n, Rt(this, t))
            );
          }),
          (r.removePause = function (t) {
            var e = this._first;
            for (t = Rt(this, t); e; )
              e._start === t && "isPause" === e.data && _t(e), (e = e._next);
          }),
          (r.killTweensOf = function (t, e, r) {
            for (var n = this.getTweensOf(t, r), i = n.length; i--; )
              Te !== n[i] && n[i].kill(t, e);
            return this;
          }),
          (r.getTweensOf = function (t, e) {
            for (var r, n = [], i = It(t), s = this._first, a = O(e); s; )
              s instanceof Le
                ? it(s._targets, i) &&
                  (a
                    ? (!Te || (s._initted && s._ts)) &&
                      s.globalTime(0) <= e &&
                      s.globalTime(s.totalDuration()) > e
                    : !e || s.isActive()) &&
                  n.push(s)
                : (r = s.getTweensOf(i, e)).length && n.push.apply(n, r),
                (s = s._next);
            return n;
          }),
          (r.tweenTo = function (t, e) {
            e = e || {};
            var r = this,
              n = Rt(r, t),
              i = e,
              s = i.startAt,
              a = i.onStart,
              o = i.onStartParams,
              u = Le.to(
                r,
                ct(e, {
                  ease: "none",
                  lazy: !1,
                  time: n,
                  duration:
                    e.duration ||
                    Math.abs(
                      (n - (s && "time" in s ? s.time : r._time)) /
                        r.timeScale()
                    ) ||
                    g,
                  onStart: function () {
                    r.pause();
                    var t =
                      e.duration || Math.abs((n - r._time) / r.timeScale());
                    u._dur !== t && At(u, t).render(u._time, !0, !0),
                      a && a.apply(u, o || []);
                  },
                })
              );
            return u;
          }),
          (r.tweenFromTo = function (t, e, r) {
            return this.tweenTo(e, ct({ startAt: { time: Rt(this, t) } }, r));
          }),
          (r.recent = function () {
            return this._recent;
          }),
          (r.nextLabel = function (t) {
            return void 0 === t && (t = this._time), Ht(this, Rt(this, t));
          }),
          (r.previousLabel = function (t) {
            return void 0 === t && (t = this._time), Ht(this, Rt(this, t), 1);
          }),
          (r.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.previousLabel(this._time + g);
          }),
          (r.shiftChildren = function (t, e, r) {
            void 0 === r && (r = 0);
            for (var n, i = this._first, s = this.labels; i; )
              i._start >= r && (i._start += t), (i = i._next);
            if (e) for (n in s) s[n] >= r && (s[n] += t);
            return vt(this);
          }),
          (r.invalidate = function () {
            var e = this._first;
            for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
            return t.prototype.invalidate.call(this);
          }),
          (r.clear = function (t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r; )
              (e = r._next), this.remove(r), (r = e);
            return (
              (this._time = this._tTime = this._pTime = 0),
              t && (this.labels = {}),
              vt(this)
            );
          }),
          (r.totalDuration = function (t) {
            var e,
              r,
              n,
              i,
              a = 0,
              o = this,
              u = o._last,
              l = 1e8;
            if (arguments.length)
              return o.timeScale(
                (o._repeat < 0 ? o.duration() : o.totalDuration()) /
                  (o.reversed() ? -t : t)
              );
            if (o._dirty) {
              for (i = o.parent; u; )
                (e = u._prev),
                  u._dirty && u.totalDuration(),
                  (n = u._start) > l && o._sort && u._ts && !o._lock
                    ? ((o._lock = 1), (kt(o, u, n - u._delay, 1)._lock = 0))
                    : (l = n),
                  n < 0 &&
                    u._ts &&
                    ((a -= n),
                    ((!i && !o._dp) || (i && i.smoothChildTiming)) &&
                      ((o._start += n / o._ts),
                      (o._time -= n),
                      (o._tTime -= n)),
                    o.shiftChildren(-n, !1, -Infinity),
                    (l = 0)),
                  (r = Ot(u)) > a && u._ts && (a = r),
                  (u = e);
              At(o, o === s && o._time > a ? o._time : a, 1), (o._dirty = 0);
            }
            return o._tDur;
          }),
          (e.updateRoot = function (t) {
            if ((s._ts && (ot(s, Tt(t, s)), (c = oe.frame)), oe.frame >= Z)) {
              Z += p.autoSleep || 120;
              var e = s._first;
              if ((!e || !e._ts) && p.autoSleep && oe._listeners.length < 2) {
                for (; e && !e._ts; ) e = e._next;
                e || oe.sleep();
              }
            }
          }),
          e
        );
      })(xe);
      ct(we.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
      var Te,
        Oe = function (t, e, r, n, i, s, a) {
          var o,
            u,
            l,
            c,
            f,
            h,
            p,
            d,
            g = new Ve(this._pt, t, e, 0, 1, Fe, null, i),
            m = 0,
            _ = 0;
          for (
            g.b = r,
              g.e = n,
              r += "",
              (p = ~(n += "").indexOf("random(")) && (n = Gt(n)),
              s && (s((d = [r, n]), t, e), (r = d[0]), (n = d[1])),
              u = r.match(N) || [];
            (o = N.exec(n));

          )
            (c = o[0]),
              (f = n.substring(m, o.index)),
              l ? (l = (l + 1) % 5) : "rgba(" === f.substr(-5) && (l = 1),
              c !== u[_++] &&
                ((h = parseFloat(u[_ - 1]) || 0),
                (g._pt = {
                  _next: g._pt,
                  p: f || 1 === _ ? f : ",",
                  s: h,
                  c:
                    "=" === c.charAt(1)
                      ? parseFloat(c.substr(2)) * ("-" === c.charAt(0) ? -1 : 1)
                      : parseFloat(c) - h,
                  m: l && l < 4 ? Math.round : 0,
                }),
                (m = N.lastIndex));
          return (
            (g.c = m < n.length ? n.substring(m, n.length) : ""),
            (g.fp = a),
            (z.test(n) || p) && (g.e = 0),
            (this._pt = g),
            g
          );
        },
        Pe = function (t, e, r, n, i, s, a, o, u) {
          T(n) && (n = n(i || 0, t, s));
          var l,
            c = t[e],
            f =
              "get" !== r
                ? r
                : T(c)
                ? u
                  ? t[
                      e.indexOf("set") || !T(t["get" + e.substr(3)])
                        ? e
                        : "get" + e.substr(3)
                    ](u)
                  : t[e]()
                : c,
            h = T(c) ? (u ? Ne : Re) : Ee;
          if (
            (w(n) &&
              (~n.indexOf("random(") && (n = Gt(n)),
              "=" === n.charAt(1) &&
                (n =
                  parseFloat(f) +
                  parseFloat(n.substr(2)) * ("-" === n.charAt(0) ? -1 : 1) +
                  (zt(f) || 0))),
            f !== n)
          )
            return isNaN(f * n)
              ? (!c && !(e in t) && Y(e, n),
                Oe.call(this, t, e, f, n, h, o || p.stringFilter, u))
              : ((l = new Ve(
                  this._pt,
                  t,
                  e,
                  +f || 0,
                  n - (f || 0),
                  "boolean" === typeof c ? Be : je,
                  0,
                  h
                )),
                u && (l.fp = u),
                a && l.modifier(a, this, t),
                (this._pt = l));
        },
        Me = function (t, e, r, n, i, s) {
          var a, o, u, l;
          if (
            Q[t] &&
            !1 !==
              (a = new Q[t]()).init(
                i,
                a.rawVars
                  ? e[t]
                  : (function (t, e, r, n, i) {
                      if (
                        (T(t) && (t = Se(t, i, e, r, n)),
                        !M(t) || (t.style && t.nodeType) || A(t))
                      )
                        return w(t) ? Se(t, i, e, r, n) : t;
                      var s,
                        a = {};
                      for (s in t) a[s] = Se(t[s], i, e, r, n);
                      return a;
                    })(e[t], n, i, s, r),
                r,
                n,
                s
              ) &&
            ((r._pt = o = new Ve(
              r._pt,
              i,
              t,
              0,
              1,
              a.render,
              a,
              0,
              a.priority
            )),
            r !== f)
          )
            for (
              u = r._ptLookup[r._targets.indexOf(i)], l = a._props.length;
              l--;

            )
              u[a._props[l]] = o;
          return a;
        },
        ke = function t(e, r) {
          var n,
            i,
            a,
            o,
            u,
            l,
            c,
            f,
            h,
            p,
            m,
            _,
            v,
            y = e.vars,
            b = y.ease,
            x = y.startAt,
            w = y.immediateRender,
            T = y.lazy,
            O = y.onUpdate,
            P = y.onUpdateParams,
            M = y.callbackScope,
            S = y.runBackwards,
            C = y.yoyoEase,
            A = y.keyframes,
            L = y.autoRevert,
            E = e._dur,
            R = e._startAt,
            N = e._targets,
            D = e.parent,
            z = D && "nested" === D.data ? D.parent._targets : N,
            j = "auto" === e._overwrite,
            B = e.timeline;
          if (
            (B && (!A || !b) && (b = "none"),
            (e._ease = ge(b, d.ease)),
            (e._yEase = C ? pe(ge(!0 === C ? b : C, d.ease)) : 0),
            C &&
              e._yoyo &&
              !e._repeat &&
              ((C = e._yEase), (e._yEase = e._ease), (e._ease = C)),
            !B)
          ) {
            if (
              ((_ = (f = N[0] ? tt(N[0]).harness : 0) && y[f.prop]),
              (n = dt(y, V)),
              R && R.render(-1, !0).kill(),
              x)
            ) {
              if (
                (_t(
                  (e._startAt = Le.set(
                    N,
                    ct(
                      {
                        data: "isStart",
                        overwrite: !1,
                        parent: D,
                        immediateRender: !0,
                        lazy: k(T),
                        startAt: null,
                        delay: 0,
                        onUpdate: O,
                        onUpdateParams: P,
                        callbackScope: M,
                        stagger: 0,
                      },
                      x
                    )
                  ))
                ),
                w)
              )
                if (r > 0) !L && (e._startAt = 0);
                else if (E && !(r < 0 && R)) return void (e._zTime = r);
            } else if (S && E)
              if (R) !L && (e._startAt = 0);
              else if (
                (r && (w = !1),
                (a = ct(
                  {
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: w && k(T),
                    immediateRender: w,
                    stagger: 0,
                    parent: D,
                  },
                  n
                )),
                _ && (a[f.prop] = _),
                _t((e._startAt = Le.set(N, a))),
                w)
              ) {
                if (!r) return;
              } else t(e._startAt, g);
            for (
              e._pt = 0, T = (E && k(T)) || (T && !E), i = 0;
              i < N.length;
              i++
            ) {
              if (
                ((c = (u = N[i])._gsap || K(N)[i]._gsap),
                (e._ptLookup[i] = p = {}),
                G[c.id] && at(),
                (m = z === N ? i : z.indexOf(u)),
                f &&
                  !1 !== (h = new f()).init(u, _ || n, e, m, z) &&
                  ((e._pt = o = new Ve(
                    e._pt,
                    u,
                    h.name,
                    0,
                    1,
                    h.render,
                    h,
                    0,
                    h.priority
                  )),
                  h._props.forEach(function (t) {
                    p[t] = o;
                  }),
                  h.priority && (l = 1)),
                !f || _)
              )
                for (a in n)
                  Q[a] && (h = Me(a, n, e, m, u, z))
                    ? h.priority && (l = 1)
                    : (p[a] = o = Pe.call(
                        e,
                        u,
                        a,
                        "get",
                        n[a],
                        m,
                        z,
                        0,
                        y.stringFilter
                      ));
              e._op && e._op[i] && e.kill(u, e._op[i]),
                j &&
                  e._pt &&
                  ((Te = e),
                  s.killTweensOf(u, p, e.globalTime(0)),
                  (v = !e.parent),
                  (Te = 0)),
                e._pt && T && (G[c.id] = 1);
            }
            l && qe(e), e._onInit && e._onInit(e);
          }
          (e._from = !B && !!y.runBackwards),
            (e._onUpdate = O),
            (e._initted = (!e._op || e._pt) && !v);
        },
        Se = function (t, e, r, n, i) {
          return T(t)
            ? t.call(e, r, n, i)
            : w(t) && ~t.indexOf("random(")
            ? Gt(t)
            : t;
        },
        Ce = J + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        Ae = (Ce + ",id,stagger,delay,duration,paused,scrollTrigger").split(
          ","
        ),
        Le = (function (t) {
          function e(e, r, i, a) {
            var o;
            "number" === typeof r && ((i.duration = r), (r = i), (i = null));
            var u,
              l,
              c,
              f,
              h,
              d,
              m,
              _,
              v = (o = t.call(this, a ? r : gt(r), i) || this).vars,
              y = v.duration,
              b = v.delay,
              x = v.immediateRender,
              w = v.stagger,
              T = v.overwrite,
              P = v.keyframes,
              S = v.defaults,
              L = v.scrollTrigger,
              E = v.yoyoEase,
              R = o.parent,
              N = (A(e) ? O(e[0]) : "length" in r) ? [e] : It(e);
            if (
              ((o._targets = N.length
                ? K(N)
                : X(
                    "GSAP target " + e + " not found. https://greensock.com",
                    !p.nullTargetWarn
                  ) || []),
              (o._ptLookup = []),
              (o._overwrite = T),
              P || w || C(y) || C(b))
            ) {
              if (
                ((r = o.vars),
                (u = o.timeline = new we({
                  data: "nested",
                  defaults: S || {},
                })).kill(),
                (u.parent = n(o)),
                P)
              )
                ct(u.vars.defaults, { ease: "none" }),
                  P.forEach(function (t) {
                    return u.to(N, t, ">");
                  });
              else {
                if (((f = N.length), (m = w ? Xt(w) : q), M(w)))
                  for (h in w) ~Ce.indexOf(h) && (_ || (_ = {}), (_[h] = w[h]));
                for (l = 0; l < f; l++) {
                  for (h in ((c = {}), r)) Ae.indexOf(h) < 0 && (c[h] = r[h]);
                  (c.stagger = 0),
                    E && (c.yoyoEase = E),
                    _ && ht(c, _),
                    (d = N[l]),
                    (c.duration = +Se(y, n(o), l, d, N)),
                    (c.delay = (+Se(b, n(o), l, d, N) || 0) - o._delay),
                    !w &&
                      1 === f &&
                      c.delay &&
                      ((o._delay = b = c.delay),
                      (o._start += b),
                      (c.delay = 0)),
                    u.to(d, c, m(l, d, N));
                }
                u.duration() ? (y = b = 0) : (o.timeline = 0);
              }
              y || o.duration((y = u.duration()));
            } else o.timeline = 0;
            return (
              !0 === T && ((Te = n(o)), s.killTweensOf(N), (Te = 0)),
              R && Mt(R, n(o)),
              (x ||
                (!y &&
                  !P &&
                  o._start === nt(R._time) &&
                  k(x) &&
                  bt(n(o)) &&
                  "nested" !== R.data)) &&
                ((o._tTime = -g), o.render(Math.max(0, -b))),
              L && St(n(o), L),
              o
            );
          }
          i(e, t);
          var r = e.prototype;
          return (
            (r.render = function (t, e, r) {
              var n,
                i,
                s,
                a,
                o,
                u,
                l,
                c,
                f,
                h = this._time,
                p = this._tDur,
                d = this._dur,
                m = t > p - g && t >= 0 ? p : t < g ? 0 : t;
              if (d) {
                if (
                  m !== this._tTime ||
                  !t ||
                  r ||
                  (this._startAt && this._zTime < 0 !== t < 0)
                ) {
                  if (((n = m), (c = this.timeline), this._repeat)) {
                    if (
                      ((a = d + this._rDelay),
                      ((n = nt(m % a)) > d || p === m) && (n = d),
                      (s = ~~(m / a)) && s === m / a && ((n = d), s--),
                      (u = this._yoyo && 1 & s) &&
                        ((f = this._yEase), (n = d - n)),
                      (o = wt(this._tTime, a)),
                      n === h && !r && this._initted)
                    )
                      return this;
                    s !== o &&
                      (c && this._yEase && de(c, u),
                      !this.vars.repeatRefresh ||
                        u ||
                        this._lock ||
                        ((this._lock = r = 1),
                        (this.render(nt(a * s), !0).invalidate()._lock = 0)));
                  }
                  if (!this._initted) {
                    if (Ct(this, t < 0 ? t : n, r, e))
                      return (this._tTime = 0), this;
                    if (d !== this._dur) return this.render(t, e, r);
                  }
                  for (
                    this._tTime = m,
                      this._time = n,
                      !this._act &&
                        this._ts &&
                        ((this._act = 1), (this._lazy = 0)),
                      this.ratio = l = (f || this._ease)(n / d),
                      this._from && (this.ratio = l = 1 - l),
                      n && !h && !e && Zt(this, "onStart"),
                      i = this._pt;
                    i;

                  )
                    i.r(l, i.d), (i = i._next);
                  (c &&
                    c.render(t < 0 ? t : !n && u ? -g : c._dur * l, e, r)) ||
                    (this._startAt && (this._zTime = t)),
                    this._onUpdate &&
                      !e &&
                      (t < 0 && this._startAt && this._startAt.render(t, !0, r),
                      Zt(this, "onUpdate")),
                    this._repeat &&
                      s !== o &&
                      this.vars.onRepeat &&
                      !e &&
                      this.parent &&
                      Zt(this, "onRepeat"),
                    (m !== this._tDur && m) ||
                      this._tTime !== m ||
                      (t < 0 &&
                        this._startAt &&
                        !this._onUpdate &&
                        this._startAt.render(t, !0, !0),
                      (t || !d) &&
                        ((m === this._tDur && this._ts > 0) ||
                          (!m && this._ts < 0)) &&
                        _t(this, 1),
                      e ||
                        (t < 0 && !h) ||
                        (!m && !h) ||
                        (Zt(
                          this,
                          m === p ? "onComplete" : "onReverseComplete",
                          !0
                        ),
                        this._prom &&
                          !(m < p && this.timeScale() > 0) &&
                          this._prom()));
                }
              } else
                !(function (t, e, r, n) {
                  var i,
                    s,
                    a = t.ratio,
                    o =
                      e < 0 ||
                      (!e && a && !t._start && t._zTime > g && !t._dp._lock) ||
                      t._ts < 0 ||
                      t._dp._ts < 0
                        ? 0
                        : 1,
                    u = t._rDelay,
                    l = 0;
                  if (
                    (u &&
                      t._repeat &&
                      ((l = Dt(0, t._tDur, e)),
                      wt(l, u) !== (s = wt(t._tTime, u)) &&
                        ((a = 1 - o),
                        t.vars.repeatRefresh && t._initted && t.invalidate())),
                    t._initted || !Ct(t, e, n, r))
                  )
                    if (o !== a || n || t._zTime === g || (!e && t._zTime)) {
                      for (
                        s = t._zTime,
                          t._zTime = e || (r ? g : 0),
                          r || (r = e && !s),
                          t.ratio = o,
                          t._from && (o = 1 - o),
                          t._time = 0,
                          t._tTime = l,
                          r || Zt(t, "onStart"),
                          i = t._pt;
                        i;

                      )
                        i.r(o, i.d), (i = i._next);
                      t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                        t._onUpdate && !r && Zt(t, "onUpdate"),
                        l && t._repeat && !r && t.parent && Zt(t, "onRepeat"),
                        (e >= t._tDur || e < 0) &&
                          t.ratio === o &&
                          (o && _t(t, 1),
                          r ||
                            (Zt(t, o ? "onComplete" : "onReverseComplete", !0),
                            t._prom && t._prom()));
                    } else t._zTime || (t._zTime = e);
                })(this, t, e, r);
              return this;
            }),
            (r.targets = function () {
              return this._targets;
            }),
            (r.invalidate = function () {
              return (
                (this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0),
                (this._ptLookup = []),
                this.timeline && this.timeline.invalidate(),
                t.prototype.invalidate.call(this)
              );
            }),
            (r.kill = function (t, e) {
              if (
                (void 0 === e && (e = "all"),
                !t && (!e || "all" === e) && ((this._lazy = 0), this.parent))
              )
                return $t(this);
              if (this.timeline) {
                var r = this.timeline.totalDuration();
                return (
                  this.timeline.killTweensOf(
                    t,
                    e,
                    Te && !0 !== Te.vars.overwrite
                  )._first || $t(this),
                  this.parent &&
                    r !== this.timeline.totalDuration() &&
                    At(this, (this._dur * this.timeline._tDur) / r),
                  this
                );
              }
              var n,
                i,
                s,
                a,
                o,
                u,
                l,
                c = this._targets,
                f = t ? It(t) : c,
                h = this._ptLookup,
                p = this._pt;
              if (
                (!e || "all" === e) &&
                (function (t, e) {
                  for (
                    var r = t.length, n = r === e.length;
                    n && r-- && t[r] === e[r];

                  );
                  return r < 0;
                })(c, f)
              )
                return "all" === e && (this._pt = 0), $t(this);
              for (
                n = this._op = this._op || [],
                  "all" !== e &&
                    (w(e) &&
                      ((o = {}),
                      rt(e, function (t) {
                        return (o[t] = 1);
                      }),
                      (e = o)),
                    (e = (function (t, e) {
                      var r,
                        n,
                        i,
                        s,
                        a = t[0] ? tt(t[0]).harness : 0,
                        o = a && a.aliases;
                      if (!o) return e;
                      for (n in ((r = ht({}, e)), o))
                        if ((n in r))
                          for (i = (s = o[n].split(",")).length; i--; )
                            r[s[i]] = r[n];
                      return r;
                    })(c, e))),
                  l = c.length;
                l--;

              )
                if (~f.indexOf(c[l]))
                  for (o in ((i = h[l]),
                  "all" === e
                    ? ((n[l] = e), (a = i), (s = {}))
                    : ((s = n[l] = n[l] || {}), (a = e)),
                  a))
                    (u = i && i[o]) &&
                      (("kill" in u.d && !0 !== u.d.kill(o)) ||
                        mt(this, u, "_pt"),
                      delete i[o]),
                      "all" !== s && (s[o] = 1);
              return this._initted && !this._pt && p && $t(this), this;
            }),
            (e.to = function (t, r) {
              return new e(t, r, arguments[2]);
            }),
            (e.from = function (t, r) {
              return new e(t, st(arguments, 1));
            }),
            (e.delayedCall = function (t, r, n, i) {
              return new e(r, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: r,
                onReverseComplete: r,
                onCompleteParams: n,
                onReverseCompleteParams: n,
                callbackScope: i,
              });
            }),
            (e.fromTo = function (t, r, n) {
              return new e(t, st(arguments, 2));
            }),
            (e.set = function (t, r) {
              return (
                (r.duration = 0), r.repeatDelay || (r.repeat = 0), new e(t, r)
              );
            }),
            (e.killTweensOf = function (t, e, r) {
              return s.killTweensOf(t, e, r);
            }),
            e
          );
        })(xe);
      ct(Le.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0,
      }),
        rt("staggerTo,staggerFrom,staggerFromTo", function (t) {
          Le[t] = function () {
            var e = new we(),
              r = jt.call(arguments, 0);
            return (
              r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
            );
          };
        });
      var Ee = function (t, e, r) {
          return (t[e] = r);
        },
        Re = function (t, e, r) {
          return t[e](r);
        },
        Ne = function (t, e, r, n) {
          return t[e](n.fp, r);
        },
        De = function (t, e, r) {
          return t.setAttribute(e, r);
        },
        ze = function (t, e) {
          return T(t[e]) ? Re : P(t[e]) && t.setAttribute ? De : Ee;
        },
        je = function (t, e) {
          return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
        },
        Be = function (t, e) {
          return e.set(e.t, e.p, !!(e.s + e.c * t), e);
        },
        Fe = function (t, e) {
          var r = e._pt,
            n = "";
          if (!t && e.b) n = e.b;
          else if (1 === t && e.e) n = e.e;
          else {
            for (; r; )
              (n =
                r.p +
                (r.m
                  ? r.m(r.s + r.c * t)
                  : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
                n),
                (r = r._next);
            n += e.c;
          }
          e.set(e.t, e.p, n, e);
        },
        Ie = function (t, e) {
          for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
        },
        Ye = function (t, e, r, n) {
          for (var i, s = this._pt; s; )
            (i = s._next), s.p === n && s.modifier(t, e, r), (s = i);
        },
        Xe = function (t) {
          for (var e, r, n = this._pt; n; )
            (r = n._next),
              (n.p === t && !n.op) || n.op === t
                ? mt(this, n, "_pt")
                : n.dep || (e = 1),
              (n = r);
          return !e;
        },
        Ue = function (t, e, r, n) {
          n.mSet(t, e, n.m.call(n.tween, r, n.mt), n);
        },
        qe = function (t) {
          for (var e, r, n, i, s = t._pt; s; ) {
            for (e = s._next, r = n; r && r.pr > s.pr; ) r = r._next;
            (s._prev = r ? r._prev : i) ? (s._prev._next = s) : (n = s),
              (s._next = r) ? (r._prev = s) : (i = s),
              (s = e);
          }
          t._pt = n;
        },
        Ve = (function () {
          function t(t, e, r, n, i, s, a, o, u) {
            (this.t = e),
              (this.s = n),
              (this.c = i),
              (this.p = r),
              (this.r = s || je),
              (this.d = a || this),
              (this.set = o || Ee),
              (this.pr = u || 0),
              (this._next = t),
              t && (t._prev = this);
          }
          return (
            (t.prototype.modifier = function (t, e, r) {
              (this.mSet = this.mSet || this.set),
                (this.set = Ue),
                (this.m = t),
                (this.mt = r),
                (this.tween = e);
            }),
            t
          );
        })();
      rt(
        J +
          "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
        function (t) {
          return (V[t] = 1);
        }
      ),
        (B.TweenMax = B.TweenLite = Le),
        (B.TimelineLite = B.TimelineMax = we),
        (s = new we({
          sortChildren: !1,
          defaults: d,
          autoRemoveChildren: !0,
          id: "root",
          smoothChildTiming: !0,
        })),
        (p.stringFilter = ae);
      var We = {
        registerPlugin: function () {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          e.forEach(function (t) {
            return Jt(t);
          });
        },
        timeline: function (t) {
          return new we(t);
        },
        getTweensOf: function (t, e) {
          return s.getTweensOf(t, e);
        },
        getProperty: function (t, e, r, n) {
          w(t) && (t = It(t)[0]);
          var i = tt(t || {}).get,
            s = r ? lt : ut;
          return (
            "native" === r && (r = ""),
            t
              ? e
                ? s(((Q[e] && Q[e].get) || i)(t, e, r, n))
                : function (e, r, n) {
                    return s(((Q[e] && Q[e].get) || i)(t, e, r, n));
                  }
              : t
          );
        },
        quickSetter: function (t, e, r) {
          if ((t = It(t)).length > 1) {
            var n = t.map(function (t) {
                return He.quickSetter(t, e, r);
              }),
              i = n.length;
            return function (t) {
              for (var e = i; e--; ) n[e](t);
            };
          }
          t = t[0] || {};
          var s = Q[e],
            a = tt(t),
            o = (a.harness && (a.harness.aliases || {})[e]) || e,
            u = s
              ? function (e) {
                  var n = new s();
                  (f._pt = 0),
                    n.init(t, r ? e + r : e, f, 0, [t]),
                    n.render(1, n),
                    f._pt && Ie(1, f);
                }
              : a.set(t, o);
          return s
            ? u
            : function (e) {
                return u(t, o, r ? e + r : e, a, 1);
              };
        },
        isTweening: function (t) {
          return s.getTweensOf(t, !0).length > 0;
        },
        defaults: function (t) {
          return t && t.ease && (t.ease = ge(t.ease, d.ease)), pt(d, t || {});
        },
        config: function (t) {
          return pt(p, t || {});
        },
        registerEffect: function (t) {
          var e = t.name,
            r = t.effect,
            n = t.plugins,
            i = t.defaults,
            s = t.extendTimeline;
          (n || "").split(",").forEach(function (t) {
            return (
              t && !Q[t] && !B[t] && X(e + " effect requires " + t + " plugin.")
            );
          }),
            (H[e] = function (t, e, n) {
              return r(It(t), ct(e || {}, i), n);
            }),
            s &&
              (we.prototype[e] = function (t, r, n) {
                return this.add(H[e](t, M(r) ? r : (n = r) && {}, this), n);
              });
        },
        registerEase: function (t, e) {
          le[t] = ge(e);
        },
        parseEase: function (t, e) {
          return arguments.length ? ge(t, e) : le;
        },
        getById: function (t) {
          return s.getById(t);
        },
        exportRoot: function (t, e) {
          void 0 === t && (t = {});
          var r,
            n,
            i = new we(t);
          for (
            i.smoothChildTiming = k(t.smoothChildTiming),
              s.remove(i),
              i._dp = 0,
              i._time = i._tTime = s._time,
              r = s._first;
            r;

          )
            (n = r._next),
              (!e &&
                !r._dur &&
                r instanceof Le &&
                r.vars.onComplete === r._targets[0]) ||
                kt(i, r, r._start - r._delay),
              (r = n);
          return kt(s, i, 0), i;
        },
        utils: {
          wrap: function t(e, r, n) {
            var i = r - e;
            return A(e)
              ? Wt(e, t(0, e.length), r)
              : Nt(n, function (t) {
                  return ((i + ((t - e) % i)) % i) + e;
                });
          },
          wrapYoyo: function t(e, r, n) {
            var i = r - e,
              s = 2 * i;
            return A(e)
              ? Wt(e, t(0, e.length - 1), r)
              : Nt(n, function (t) {
                  return (
                    e + ((t = (s + ((t - e) % s)) % s || 0) > i ? s - t : t)
                  );
                });
          },
          distribute: Xt,
          random: Vt,
          snap: qt,
          normalize: function (t, e, r) {
            return Qt(t, e, 0, 1, r);
          },
          getUnit: zt,
          clamp: function (t, e, r) {
            return Nt(r, function (r) {
              return Dt(t, e, r);
            });
          },
          splitColor: ee,
          toArray: It,
          mapRange: Qt,
          pipe: function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
              e[r] = arguments[r];
            return function (t) {
              return e.reduce(function (t, e) {
                return e(t);
              }, t);
            };
          },
          unitize: function (t, e) {
            return function (r) {
              return t(parseFloat(r)) + (e || zt(r));
            };
          },
          interpolate: function t(e, r, n, i) {
            var s = isNaN(e + r)
              ? 0
              : function (t) {
                  return (1 - t) * e + t * r;
                };
            if (!s) {
              var a,
                o,
                u,
                l,
                c,
                f = w(e),
                h = {};
              if ((!0 === n && (i = 1) && (n = null), f))
                (e = { p: e }), (r = { p: r });
              else if (A(e) && !A(r)) {
                for (u = [], l = e.length, c = l - 2, o = 1; o < l; o++)
                  u.push(t(e[o - 1], e[o]));
                l--,
                  (s = function (t) {
                    t *= l;
                    var e = Math.min(c, ~~t);
                    return u[e](t - e);
                  }),
                  (n = r);
              } else i || (e = ht(A(e) ? [] : {}, e));
              if (!u) {
                for (a in r) Pe.call(h, e, a, "get", r[a]);
                s = function (t) {
                  return Ie(t, h) || (f ? e.p : e);
                };
              }
            }
            return Nt(n, s);
          },
          shuffle: Yt,
        },
        install: I,
        effects: H,
        ticker: oe,
        updateRoot: we.updateRoot,
        plugins: Q,
        globalTimeline: s,
        core: {
          PropTween: Ve,
          globals: U,
          Tween: Le,
          Timeline: we,
          Animation: xe,
          getCache: tt,
          _removeLinkedListItem: mt,
        },
      };
      rt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
        return (We[t] = Le[t]);
      }),
        oe.add(we.updateRoot),
        (f = We.to({}, { duration: 0 }));
      var Ge = function (t, e) {
          for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
            r = r._next;
          return r;
        },
        Qe = function (t, e) {
          return {
            name: t,
            rawVars: 1,
            init: function (t, r, n) {
              n._onInit = function (t) {
                var n, i;
                if (
                  (w(r) &&
                    ((n = {}),
                    rt(r, function (t) {
                      return (n[t] = 1);
                    }),
                    (r = n)),
                  e)
                ) {
                  for (i in ((n = {}), r)) n[i] = e(r[i]);
                  r = n;
                }
                !(function (t, e) {
                  var r,
                    n,
                    i,
                    s = t._targets;
                  for (r in e)
                    for (n = s.length; n--; )
                      (i = t._ptLookup[n][r]) &&
                        (i = i.d) &&
                        (i._pt && (i = Ge(i, r)),
                        i && i.modifier && i.modifier(e[r], t, s[n], r));
                })(t, r);
              };
            },
          };
        },
        He =
          We.registerPlugin(
            {
              name: "attr",
              init: function (t, e, r, n, i) {
                var s, a;
                for (s in e)
                  (a = this.add(
                    t,
                    "setAttribute",
                    (t.getAttribute(s) || 0) + "",
                    e[s],
                    n,
                    i,
                    0,
                    0,
                    s
                  )) && (a.op = s),
                    this._props.push(s);
              },
            },
            {
              name: "endArray",
              init: function (t, e) {
                for (var r = e.length; r--; ) this.add(t, r, t[r] || 0, e[r]);
              },
            },
            Qe("roundProps", Ut),
            Qe("modifiers"),
            Qe("snap", qt)
          ) || We;
      (Le.version = we.version = He.version = "3.4.2"), (l = 1), S() && ue();
      le.Power0,
        le.Power1,
        le.Power2,
        le.Power3,
        le.Power4,
        le.Linear,
        le.Quad,
        le.Cubic,
        le.Quart,
        le.Quint,
        le.Strong,
        le.Elastic,
        le.Back,
        le.SteppedEase,
        le.Bounce,
        le.Sine,
        le.Expo,
        le.Circ;
      var Ze,
        $e,
        Je,
        Ke,
        tr,
        er,
        rr,
        nr,
        ir = {},
        sr = 180 / Math.PI,
        ar = Math.PI / 180,
        or = Math.atan2,
        ur = /([A-Z])/g,
        lr = /(?:left|right|width|margin|padding|x)/i,
        cr = /[\s,\(]\S/,
        fr = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity",
        },
        hr = function (t, e) {
          return e.set(
            e.t,
            e.p,
            Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e
          );
        },
        pr = function (t, e) {
          return e.set(
            e.t,
            e.p,
            1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e
          );
        },
        dr = function (t, e) {
          return e.set(
            e.t,
            e.p,
            t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
            e
          );
        },
        gr = function (t, e) {
          var r = e.s + e.c * t;
          e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
        },
        mr = function (t, e) {
          return e.set(e.t, e.p, t ? e.e : e.b, e);
        },
        _r = function (t, e) {
          return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
        },
        vr = function (t, e, r) {
          return (t.style[e] = r);
        },
        yr = function (t, e, r) {
          return t.style.setProperty(e, r);
        },
        br = function (t, e, r) {
          return (t._gsap[e] = r);
        },
        xr = function (t, e, r) {
          return (t._gsap.scaleX = t._gsap.scaleY = r);
        },
        wr = function (t, e, r, n, i) {
          var s = t._gsap;
          (s.scaleX = s.scaleY = r), s.renderTransform(i, s);
        },
        Tr = function (t, e, r, n, i) {
          var s = t._gsap;
          (s[e] = r), s.renderTransform(i, s);
        },
        Or = "transform",
        Pr = Or + "Origin",
        Mr = function (t, e) {
          var r = $e.createElementNS
            ? $e.createElementNS(
                (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
                t
              )
            : $e.createElement(t);
          return r.style ? r : $e.createElement(t);
        },
        kr = function t(e, r, n) {
          var i = getComputedStyle(e);
          return (
            i[r] ||
            i.getPropertyValue(r.replace(ur, "-$1").toLowerCase()) ||
            i.getPropertyValue(r) ||
            (!n && t(e, Cr(r) || r, 1)) ||
            ""
          );
        },
        Sr = "O,Moz,ms,Ms,Webkit".split(","),
        Cr = function (t, e, r) {
          var n = (e || tr).style,
            i = 5;
          if (t in n && !r) return t;
          for (
            t = t.charAt(0).toUpperCase() + t.substr(1);
            i-- && !(Sr[i] + t in n);

          );
          return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? Sr[i] : "") + t;
        },
        Ar = function () {
          "undefined" !== typeof window &&
            window.document &&
            ((Ze = window),
            ($e = Ze.document),
            (Je = $e.documentElement),
            (tr = Mr("div") || { style: {} }),
            (er = Mr("div")),
            (Or = Cr(Or)),
            (Pr = Or + "Origin"),
            (tr.style.cssText =
              "border-width:0;line-height:0;position:absolute;padding:0"),
            (nr = !!Cr("perspective")),
            (Ke = 1));
        },
        Lr = function t(e) {
          var r,
            n = Mr(
              "svg",
              (this.ownerSVGElement &&
                this.ownerSVGElement.getAttribute("xmlns")) ||
                "http://www.w3.org/2000/svg"
            ),
            i = this.parentNode,
            s = this.nextSibling,
            a = this.style.cssText;
          if (
            (Je.appendChild(n),
            n.appendChild(this),
            (this.style.display = "block"),
            e)
          )
            try {
              (r = this.getBBox()),
                (this._gsapBBox = this.getBBox),
                (this.getBBox = t);
            } catch (o) {}
          else this._gsapBBox && (r = this._gsapBBox());
          return (
            i && (s ? i.insertBefore(this, s) : i.appendChild(this)),
            Je.removeChild(n),
            (this.style.cssText = a),
            r
          );
        },
        Er = function (t, e) {
          for (var r = e.length; r--; )
            if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
        },
        Rr = function (t) {
          var e;
          try {
            e = t.getBBox();
          } catch (r) {
            e = Lr.call(t, !0);
          }
          return (
            (e && (e.width || e.height)) ||
              t.getBBox === Lr ||
              (e = Lr.call(t, !0)),
            !e || e.width || e.x || e.y
              ? e
              : {
                  x: +Er(t, ["x", "cx", "x1"]) || 0,
                  y: +Er(t, ["y", "cy", "y1"]) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        Nr = function (t) {
          return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !Rr(t));
        },
        Dr = function (t, e) {
          if (e) {
            var r = t.style;
            e in ir && e !== Pr && (e = Or),
              r.removeProperty
                ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                    (e = "-" + e),
                  r.removeProperty(e.replace(ur, "-$1").toLowerCase()))
                : r.removeAttribute(e);
          }
        },
        zr = function (t, e, r, n, i, s) {
          var a = new Ve(t._pt, e, r, 0, 1, s ? _r : mr);
          return (t._pt = a), (a.b = n), (a.e = i), t._props.push(r), a;
        },
        jr = { deg: 1, rad: 1, turn: 1 },
        Br = function t(e, r, n, i) {
          var s,
            a,
            o,
            u,
            l = parseFloat(n) || 0,
            c = (n + "").trim().substr((l + "").length) || "px",
            f = tr.style,
            h = lr.test(r),
            p = "svg" === e.tagName.toLowerCase(),
            d = (p ? "client" : "offset") + (h ? "Width" : "Height"),
            g = "px" === i,
            m = "%" === i;
          return i === c || !l || jr[i] || jr[c]
            ? l
            : ("px" !== c && !g && (l = t(e, r, n, "px")),
              (u = e.getCTM && Nr(e)),
              m && (ir[r] || ~r.indexOf("adius"))
                ? nt(
                    (l / (u ? e.getBBox()[h ? "width" : "height"] : e[d])) * 100
                  )
                : ((f[h ? "width" : "height"] = 100 + (g ? c : i)),
                  (a =
                    ~r.indexOf("adius") || ("em" === i && e.appendChild && !p)
                      ? e
                      : e.parentNode),
                  u && (a = (e.ownerSVGElement || {}).parentNode),
                  (a && a !== $e && a.appendChild) || (a = $e.body),
                  (o = a._gsap) && m && o.width && h && o.time === oe.time
                    ? nt((l / o.width) * 100)
                    : ((m || "%" === c) && (f.position = kr(e, "position")),
                      a === e && (f.position = "static"),
                      a.appendChild(tr),
                      (s = tr[d]),
                      a.removeChild(tr),
                      (f.position = "absolute"),
                      h &&
                        m &&
                        (((o = tt(a)).time = oe.time), (o.width = a[d])),
                      nt(g ? (s * l) / 100 : s && l ? (100 / s) * l : 0))));
        },
        Fr = function (t, e, r, n) {
          var i;
          return (
            Ke || Ar(),
            e in fr &&
              "transform" !== e &&
              ~(e = fr[e]).indexOf(",") &&
              (e = e.split(",")[0]),
            ir[e] && "transform" !== e
              ? ((i = $r(t, n)),
                (i =
                  "transformOrigin" !== e
                    ? i[e]
                    : Jr(kr(t, Pr)) + " " + i.zOrigin + "px"))
              : (!(i = t.style[e]) ||
                  "auto" === i ||
                  n ||
                  ~(i + "").indexOf("calc(")) &&
                (i =
                  (qr[e] && qr[e](t, e, r)) ||
                  kr(t, e) ||
                  et(t, e) ||
                  ("opacity" === e ? 1 : 0)),
            r && !~(i + "").indexOf(" ") ? Br(t, e, i, r) + r : i
          );
        },
        Ir = function (t, e, r, n) {
          if (!r || "none" === r) {
            var i = Cr(e, t, 1),
              s = i && kr(t, i, 1);
            s && s !== r
              ? ((e = i), (r = s))
              : "borderColor" === e && (r = kr(t, "borderTopColor"));
          }
          var a,
            o,
            u,
            l,
            c,
            f,
            h,
            d,
            g,
            m,
            _,
            v,
            y = new Ve(this._pt, t.style, e, 0, 1, Fe),
            b = 0,
            x = 0;
          if (
            ((y.b = r),
            (y.e = n),
            (r += ""),
            "auto" === (n += "") &&
              ((t.style[e] = n), (n = kr(t, e) || n), (t.style[e] = r)),
            ae((a = [r, n])),
            (n = a[1]),
            (u = (r = a[0]).match(R) || []),
            (n.match(R) || []).length)
          ) {
            for (; (o = R.exec(n)); )
              (h = o[0]),
                (g = n.substring(b, o.index)),
                c
                  ? (c = (c + 1) % 5)
                  : ("rgba(" !== g.substr(-5) && "hsla(" !== g.substr(-5)) ||
                    (c = 1),
                h !== (f = u[x++] || "") &&
                  ((l = parseFloat(f) || 0),
                  (_ = f.substr((l + "").length)),
                  (v = "=" === h.charAt(1) ? +(h.charAt(0) + "1") : 0) &&
                    (h = h.substr(2)),
                  (d = parseFloat(h)),
                  (m = h.substr((d + "").length)),
                  (b = R.lastIndex - m.length),
                  m ||
                    ((m = m || p.units[e] || _),
                    b === n.length && ((n += m), (y.e += m))),
                  _ !== m && (l = Br(t, e, f, m) || 0),
                  (y._pt = {
                    _next: y._pt,
                    p: g || 1 === x ? g : ",",
                    s: l,
                    c: v ? v * d : d - l,
                    m: c && c < 4 ? Math.round : 0,
                  }));
            y.c = b < n.length ? n.substring(b, n.length) : "";
          } else y.r = "display" === e && "none" === n ? _r : mr;
          return z.test(n) && (y.e = 0), (this._pt = y), y;
        },
        Yr = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%",
        },
        Xr = function (t) {
          var e = t.split(" "),
            r = e[0],
            n = e[1] || "50%";
          return (
            ("top" !== r && "bottom" !== r && "left" !== n && "right" !== n) ||
              ((t = r), (r = n), (n = t)),
            (e[0] = Yr[r] || r),
            (e[1] = Yr[n] || n),
            e.join(" ")
          );
        },
        Ur = function (t, e) {
          if (e.tween && e.tween._time === e.tween._dur) {
            var r,
              n,
              i,
              s = e.t,
              a = s.style,
              o = e.u,
              u = s._gsap;
            if ("all" === o || !0 === o) (a.cssText = ""), (n = 1);
            else
              for (i = (o = o.split(",")).length; --i > -1; )
                (r = o[i]),
                  ir[r] && ((n = 1), (r = "transformOrigin" === r ? Pr : Or)),
                  Dr(s, r);
            n &&
              (Dr(s, Or),
              u &&
                (u.svg && s.removeAttribute("transform"),
                $r(s, 1),
                (u.uncache = 1)));
          }
        },
        qr = {
          clearProps: function (t, e, r, n, i) {
            if ("isFromStart" !== i.data) {
              var s = (t._pt = new Ve(t._pt, e, r, 0, 0, Ur));
              return (
                (s.u = n), (s.pr = -10), (s.tween = i), t._props.push(r), 1
              );
            }
          },
        },
        Vr = [1, 0, 0, 1, 0, 0],
        Wr = {},
        Gr = function (t) {
          return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
        },
        Qr = function (t) {
          var e = kr(t, Or);
          return Gr(e) ? Vr : e.substr(7).match(E).map(nt);
        },
        Hr = function (t, e) {
          var r,
            n,
            i,
            s,
            a = t._gsap || tt(t),
            o = t.style,
            u = Qr(t);
          return a.svg && t.getAttribute("transform")
            ? "1,0,0,1,0,0" ===
              (u = [
                (i = t.transform.baseVal.consolidate().matrix).a,
                i.b,
                i.c,
                i.d,
                i.e,
                i.f,
              ]).join(",")
              ? Vr
              : u
            : (u !== Vr ||
                t.offsetParent ||
                t === Je ||
                a.svg ||
                ((i = o.display),
                (o.display = "block"),
                ((r = t.parentNode) && t.offsetParent) ||
                  ((s = 1), (n = t.nextSibling), Je.appendChild(t)),
                (u = Qr(t)),
                i ? (o.display = i) : Dr(t, "display"),
                s &&
                  (n
                    ? r.insertBefore(t, n)
                    : r
                    ? r.appendChild(t)
                    : Je.removeChild(t))),
              e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
        },
        Zr = function (t, e, r, n, i, s) {
          var a,
            o,
            u,
            l = t._gsap,
            c = i || Hr(t, !0),
            f = l.xOrigin || 0,
            h = l.yOrigin || 0,
            p = l.xOffset || 0,
            d = l.yOffset || 0,
            g = c[0],
            m = c[1],
            _ = c[2],
            v = c[3],
            y = c[4],
            b = c[5],
            x = e.split(" "),
            w = parseFloat(x[0]) || 0,
            T = parseFloat(x[1]) || 0;
          r
            ? c !== Vr &&
              (o = g * v - m * _) &&
              ((u = w * (-m / o) + T * (g / o) - (g * b - m * y) / o),
              (w = w * (v / o) + T * (-_ / o) + (_ * b - v * y) / o),
              (T = u))
            : ((w =
                (a = Rr(t)).x + (~x[0].indexOf("%") ? (w / 100) * a.width : w)),
              (T =
                a.y +
                (~(x[1] || x[0]).indexOf("%") ? (T / 100) * a.height : T))),
            n || (!1 !== n && l.smooth)
              ? ((y = w - f),
                (b = T - h),
                (l.xOffset = p + (y * g + b * _) - y),
                (l.yOffset = d + (y * m + b * v) - b))
              : (l.xOffset = l.yOffset = 0),
            (l.xOrigin = w),
            (l.yOrigin = T),
            (l.smooth = !!n),
            (l.origin = e),
            (l.originIsAbsolute = !!r),
            (t.style[Pr] = "0px 0px"),
            s &&
              (zr(s, l, "xOrigin", f, w),
              zr(s, l, "yOrigin", h, T),
              zr(s, l, "xOffset", p, l.xOffset),
              zr(s, l, "yOffset", d, l.yOffset)),
            t.setAttribute("data-svg-origin", w + " " + T);
        },
        $r = function (t, e) {
          var r = t._gsap || new be(t);
          if ("x" in r && !e && !r.uncache) return r;
          var n,
            i,
            s,
            a,
            o,
            u,
            l,
            c,
            f,
            h,
            d,
            g,
            m,
            _,
            v,
            y,
            b,
            x,
            w,
            T,
            O,
            P,
            M,
            k,
            S,
            C,
            A,
            L,
            E,
            R,
            N,
            D,
            z = t.style,
            j = r.scaleX < 0,
            B = kr(t, Pr) || "0";
          return (
            (n = i = s = u = l = c = f = h = d = 0),
            (a = o = 1),
            (r.svg = !(!t.getCTM || !Nr(t))),
            (_ = Hr(t, r.svg)),
            r.svg &&
              ((k = !r.uncache && t.getAttribute("data-svg-origin")),
              Zr(t, k || B, !!k || r.originIsAbsolute, !1 !== r.smooth, _)),
            (g = r.xOrigin || 0),
            (m = r.yOrigin || 0),
            _ !== Vr &&
              ((x = _[0]),
              (w = _[1]),
              (T = _[2]),
              (O = _[3]),
              (n = P = _[4]),
              (i = M = _[5]),
              6 === _.length
                ? ((a = Math.sqrt(x * x + w * w)),
                  (o = Math.sqrt(O * O + T * T)),
                  (u = x || w ? or(w, x) * sr : 0),
                  (f = T || O ? or(T, O) * sr + u : 0) &&
                    (o *= Math.cos(f * ar)),
                  r.svg &&
                    ((n -= g - (g * x + m * T)), (i -= m - (g * w + m * O))))
                : ((D = _[6]),
                  (R = _[7]),
                  (A = _[8]),
                  (L = _[9]),
                  (E = _[10]),
                  (N = _[11]),
                  (n = _[12]),
                  (i = _[13]),
                  (s = _[14]),
                  (l = (v = or(D, E)) * sr),
                  v &&
                    ((k = P * (y = Math.cos(-v)) + A * (b = Math.sin(-v))),
                    (S = M * y + L * b),
                    (C = D * y + E * b),
                    (A = P * -b + A * y),
                    (L = M * -b + L * y),
                    (E = D * -b + E * y),
                    (N = R * -b + N * y),
                    (P = k),
                    (M = S),
                    (D = C)),
                  (c = (v = or(-T, E)) * sr),
                  v &&
                    ((y = Math.cos(-v)),
                    (N = O * (b = Math.sin(-v)) + N * y),
                    (x = k = x * y - A * b),
                    (w = S = w * y - L * b),
                    (T = C = T * y - E * b)),
                  (u = (v = or(w, x)) * sr),
                  v &&
                    ((k = x * (y = Math.cos(v)) + w * (b = Math.sin(v))),
                    (S = P * y + M * b),
                    (w = w * y - x * b),
                    (M = M * y - P * b),
                    (x = k),
                    (P = S)),
                  l &&
                    Math.abs(l) + Math.abs(u) > 359.9 &&
                    ((l = u = 0), (c = 180 - c)),
                  (a = nt(Math.sqrt(x * x + w * w + T * T))),
                  (o = nt(Math.sqrt(M * M + D * D))),
                  (v = or(P, M)),
                  (f = Math.abs(v) > 2e-4 ? v * sr : 0),
                  (d = N ? 1 / (N < 0 ? -N : N) : 0)),
              r.svg &&
                ((k = t.getAttribute("transform")),
                (r.forceCSS =
                  t.setAttribute("transform", "") || !Gr(kr(t, Or))),
                k && t.setAttribute("transform", k))),
            Math.abs(f) > 90 &&
              Math.abs(f) < 270 &&
              (j
                ? ((a *= -1),
                  (f += u <= 0 ? 180 : -180),
                  (u += u <= 0 ? 180 : -180))
                : ((o *= -1), (f += f <= 0 ? 180 : -180))),
            (r.x =
              ((r.xPercent =
                n && Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0)
                ? 0
                : n) + "px"),
            (r.y =
              ((r.yPercent =
                i && Math.round(t.offsetHeight / 2) === Math.round(-i)
                  ? -50
                  : 0)
                ? 0
                : i) + "px"),
            (r.z = s + "px"),
            (r.scaleX = nt(a)),
            (r.scaleY = nt(o)),
            (r.rotation = nt(u) + "deg"),
            (r.rotationX = nt(l) + "deg"),
            (r.rotationY = nt(c) + "deg"),
            (r.skewX = f + "deg"),
            (r.skewY = h + "deg"),
            (r.transformPerspective = d + "px"),
            (r.zOrigin = parseFloat(B.split(" ")[2]) || 0) && (z[Pr] = Jr(B)),
            (r.xOffset = r.yOffset = 0),
            (r.force3D = p.force3D),
            (r.renderTransform = r.svg ? rn : nr ? en : tn),
            (r.uncache = 0),
            r
          );
        },
        Jr = function (t) {
          return (t = t.split(" "))[0] + " " + t[1];
        },
        Kr = function (t, e, r) {
          var n = zt(e);
          return nt(parseFloat(e) + parseFloat(Br(t, "x", r + "px", n))) + n;
        },
        tn = function (t, e) {
          (e.z = "0px"),
            (e.rotationY = e.rotationX = "0deg"),
            (e.force3D = 0),
            en(t, e);
        },
        en = function (t, e) {
          var r = e || this,
            n = r.xPercent,
            i = r.yPercent,
            s = r.x,
            a = r.y,
            o = r.z,
            u = r.rotation,
            l = r.rotationY,
            c = r.rotationX,
            f = r.skewX,
            h = r.skewY,
            p = r.scaleX,
            d = r.scaleY,
            g = r.transformPerspective,
            m = r.force3D,
            _ = r.target,
            v = r.zOrigin,
            y = "",
            b = ("auto" === m && t && 1 !== t) || !0 === m;
          if (v && ("0deg" !== c || "0deg" !== l)) {
            var x,
              w = parseFloat(l) * ar,
              T = Math.sin(w),
              O = Math.cos(w);
            (w = parseFloat(c) * ar),
              (x = Math.cos(w)),
              (s = Kr(_, s, T * x * -v)),
              (a = Kr(_, a, -Math.sin(w) * -v)),
              (o = Kr(_, o, O * x * -v + v));
          }
          "0px" !== g && (y += "perspective(" + g + ") "),
            (n || i) && (y += "translate(" + n + "%, " + i + "%) "),
            (b || "0px" !== s || "0px" !== a || "0px" !== o) &&
              (y +=
                "0px" !== o || b
                  ? "translate3d(" + s + ", " + a + ", " + o + ") "
                  : "translate(" + s + ", " + a + ") "),
            "0deg" !== u && (y += "rotate(" + u + ") "),
            "0deg" !== l && (y += "rotateY(" + l + ") "),
            "0deg" !== c && (y += "rotateX(" + c + ") "),
            ("0deg" === f && "0deg" === h) ||
              (y += "skew(" + f + ", " + h + ") "),
            (1 === p && 1 === d) || (y += "scale(" + p + ", " + d + ") "),
            (_.style[Or] = y || "translate(0, 0)");
        },
        rn = function (t, e) {
          var r,
            n,
            i,
            s,
            a,
            o = e || this,
            u = o.xPercent,
            l = o.yPercent,
            c = o.x,
            f = o.y,
            h = o.rotation,
            p = o.skewX,
            d = o.skewY,
            g = o.scaleX,
            m = o.scaleY,
            _ = o.target,
            v = o.xOrigin,
            y = o.yOrigin,
            b = o.xOffset,
            x = o.yOffset,
            w = o.forceCSS,
            T = parseFloat(c),
            O = parseFloat(f);
          (h = parseFloat(h)),
            (p = parseFloat(p)),
            (d = parseFloat(d)) && ((p += d = parseFloat(d)), (h += d)),
            h || p
              ? ((h *= ar),
                (p *= ar),
                (r = Math.cos(h) * g),
                (n = Math.sin(h) * g),
                (i = Math.sin(h - p) * -m),
                (s = Math.cos(h - p) * m),
                p &&
                  ((d *= ar),
                  (a = Math.tan(p - d)),
                  (i *= a = Math.sqrt(1 + a * a)),
                  (s *= a),
                  d &&
                    ((a = Math.tan(d)),
                    (r *= a = Math.sqrt(1 + a * a)),
                    (n *= a))),
                (r = nt(r)),
                (n = nt(n)),
                (i = nt(i)),
                (s = nt(s)))
              : ((r = g), (s = m), (n = i = 0)),
            ((T && !~(c + "").indexOf("px")) ||
              (O && !~(f + "").indexOf("px"))) &&
              ((T = Br(_, "x", c, "px")), (O = Br(_, "y", f, "px"))),
            (v || y || b || x) &&
              ((T = nt(T + v - (v * r + y * i) + b)),
              (O = nt(O + y - (v * n + y * s) + x))),
            (u || l) &&
              ((a = _.getBBox()),
              (T = nt(T + (u / 100) * a.width)),
              (O = nt(O + (l / 100) * a.height))),
            (a =
              "matrix(" +
              r +
              "," +
              n +
              "," +
              i +
              "," +
              s +
              "," +
              T +
              "," +
              O +
              ")"),
            _.setAttribute("transform", a),
            w && (_.style[Or] = a);
        },
        nn = function (t, e, r, n, i, s) {
          var a,
            o,
            u = w(i),
            l = parseFloat(i) * (u && ~i.indexOf("rad") ? sr : 1),
            c = s ? l * s : l - n,
            f = n + c + "deg";
          return (
            u &&
              ("short" === (a = i.split("_")[1]) &&
                (c %= 360) !== c % 180 &&
                (c += c < 0 ? 360 : -360),
              "cw" === a && c < 0
                ? (c = ((c + 36e9) % 360) - 360 * ~~(c / 360))
                : "ccw" === a &&
                  c > 0 &&
                  (c = ((c - 36e9) % 360) - 360 * ~~(c / 360))),
            (t._pt = o = new Ve(t._pt, e, r, n, c, pr)),
            (o.e = f),
            (o.u = "deg"),
            t._props.push(r),
            o
          );
        },
        sn = function (t, e, r) {
          var n,
            i,
            s,
            a,
            o,
            u,
            l,
            c = er.style,
            f = r._gsap;
          for (i in ((c.cssText =
            getComputedStyle(r).cssText + ";position:absolute;display:block;"),
          (c[Or] = e),
          $e.body.appendChild(er),
          (n = $r(er, 1)),
          ir))
            (s = f[i]) !== (a = n[i]) &&
              "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
              ((o = zt(s) !== (l = zt(a)) ? Br(r, i, s, l) : parseFloat(s)),
              (u = parseFloat(a)),
              (t._pt = new Ve(t._pt, f, i, o, u - o, hr)),
              (t._pt.u = l || 0),
              t._props.push(i));
          $e.body.removeChild(er);
        };
      rt("padding,margin,Width,Radius", function (t, e) {
        var r = "Top",
          n = "Right",
          i = "Bottom",
          s = "Left",
          a = (e < 3 ? [r, n, i, s] : [r + s, r + n, i + n, i + s]).map(
            function (r) {
              return e < 2 ? t + r : "border" + r + t;
            }
          );
        qr[e > 1 ? "border" + t : t] = function (t, e, r, n, i) {
          var s, o;
          if (arguments.length < 4)
            return (
              (s = a.map(function (e) {
                return Fr(t, e, r);
              })),
              5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o
            );
          (s = (n + "").split(" ")),
            (o = {}),
            a.forEach(function (t, e) {
              return (o[t] = s[e] = s[e] || s[((e - 1) / 2) | 0]);
            }),
            t.init(e, o, i);
        };
      });
      var an = {
        name: "css",
        register: Ar,
        targetTest: function (t) {
          return t.style && t.nodeType;
        },
        init: function (t, e, r, n, i) {
          var s,
            a,
            o,
            u,
            l,
            c,
            f,
            h,
            d,
            g,
            m,
            _,
            v,
            y,
            b,
            x = this._props,
            w = t.style;
          for (f in (Ke || Ar(), e))
            if (
              "autoRound" !== f &&
              ((a = e[f]), !Q[f] || !Me(f, e, r, n, t, i))
            )
              if (
                ((l = typeof a),
                (c = qr[f]),
                "function" === l && (l = typeof (a = a.call(r, n, t, i))),
                "string" === l && ~a.indexOf("random(") && (a = Gt(a)),
                c)
              )
                c(this, t, f, a, r) && (b = 1);
              else if ("--" === f.substr(0, 2))
                this.add(
                  w,
                  "setProperty",
                  getComputedStyle(t).getPropertyValue(f) + "",
                  a + "",
                  n,
                  i,
                  0,
                  0,
                  f
                );
              else {
                if (
                  ((s = Fr(t, f)),
                  (u = parseFloat(s)),
                  (g =
                    "string" === l && "=" === a.charAt(1)
                      ? +(a.charAt(0) + "1")
                      : 0) && (a = a.substr(2)),
                  (o = parseFloat(a)),
                  f in fr &&
                    ("autoAlpha" === f &&
                      (1 === u &&
                        "hidden" === Fr(t, "visibility") &&
                        o &&
                        (u = 0),
                      zr(
                        this,
                        w,
                        "visibility",
                        u ? "inherit" : "hidden",
                        o ? "inherit" : "hidden",
                        !o
                      )),
                    "scale" !== f &&
                      "transform" !== f &&
                      ~(f = fr[f]).indexOf(",") &&
                      (f = f.split(",")[0])),
                  (m = f in ir))
                )
                  if (
                    (_ ||
                      ((v = t._gsap).renderTransform || $r(t),
                      (y = !1 !== e.smoothOrigin && v.smooth),
                      ((_ = this._pt = new Ve(
                        this._pt,
                        w,
                        Or,
                        0,
                        1,
                        v.renderTransform,
                        v,
                        0,
                        -1
                      )).dep = 1)),
                    "scale" === f)
                  )
                    (this._pt = new Ve(
                      this._pt,
                      v,
                      "scaleY",
                      v.scaleY,
                      g ? g * o : o - v.scaleY
                    )),
                      x.push("scaleY", f),
                      (f += "X");
                  else {
                    if ("transformOrigin" === f) {
                      (a = Xr(a)),
                        v.svg
                          ? Zr(t, a, 0, y, 0, this)
                          : ((d = parseFloat(a.split(" ")[2]) || 0) !==
                              v.zOrigin && zr(this, v, "zOrigin", v.zOrigin, d),
                            zr(this, w, f, Jr(s), Jr(a)));
                      continue;
                    }
                    if ("svgOrigin" === f) {
                      Zr(t, a, 1, y, 0, this);
                      continue;
                    }
                    if (f in Wr) {
                      nn(this, v, f, u, a, g);
                      continue;
                    }
                    if ("smoothOrigin" === f) {
                      zr(this, v, "smooth", v.smooth, a);
                      continue;
                    }
                    if ("force3D" === f) {
                      v[f] = a;
                      continue;
                    }
                    if ("transform" === f) {
                      sn(this, a, t);
                      continue;
                    }
                  }
                else f in w || (f = Cr(f) || f);
                if (
                  m ||
                  ((o || 0 === o) && (u || 0 === u) && !cr.test(a) && f in w)
                )
                  o || (o = 0),
                    (h = (s + "").substr((u + "").length)) !==
                      (d =
                        (a + "").substr((o + "").length) ||
                        (f in p.units ? p.units[f] : h)) &&
                      (u = Br(t, f, s, d)),
                    (this._pt = new Ve(
                      this._pt,
                      m ? v : w,
                      f,
                      u,
                      g ? g * o : o - u,
                      "px" !== d || !1 === e.autoRound || m ? hr : gr
                    )),
                    (this._pt.u = d || 0),
                    h !== d && ((this._pt.b = s), (this._pt.r = dr));
                else if (f in w) Ir.call(this, t, f, s, a);
                else {
                  if (!(f in t)) {
                    Y(f, a);
                    continue;
                  }
                  this.add(t, f, t[f], a, n, i);
                }
                x.push(f);
              }
          b && qe(this);
        },
        get: Fr,
        aliases: fr,
        getSetter: function (t, e, r) {
          var n = fr[e];
          return (
            n && n.indexOf(",") < 0 && (e = n),
            e in ir && e !== Pr && (t._gsap.x || Fr(t, "x"))
              ? r && rr === r
                ? "scale" === e
                  ? xr
                  : br
                : (rr = r || {}) && ("scale" === e ? wr : Tr)
              : t.style && !P(t.style[e])
              ? vr
              : ~e.indexOf("-")
              ? yr
              : ze(t, e)
          );
        },
        core: { _removeProperty: Dr, _getMatrix: Hr },
      };
      (He.utils.checkPrefix = Cr),
        (function (t, e, r, n) {
          var i = rt(
            "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," +
              e +
              ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
            function (t) {
              ir[t] = 1;
            }
          );
          rt(e, function (t) {
            (p.units[t] = "deg"), (Wr[t] = 1);
          }),
            (fr[i[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + e),
            rt(
              "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
              function (t) {
                var e = t.split(":");
                fr[e[1]] = i[e[0]];
              }
            );
        })(0, "rotation,rotationX,rotationY,skewX,skewY"),
        rt(
          "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
          function (t) {
            p.units[t] = "px";
          }
        ),
        He.registerPlugin(an);
      var on = He.registerPlugin(an) || He;
      on.core.Tween;
    },
  },
]);
//# sourceMappingURL=c8f7fe3b0e41be846d5687592cf2018ff6e22687.66dff171e19b84f913f6.js.map
