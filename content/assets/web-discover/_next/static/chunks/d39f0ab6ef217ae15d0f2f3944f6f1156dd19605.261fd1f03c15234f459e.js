(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [13],
  {
    "2Idn": function (e, t, r) {
      "use strict";
      function n(e) {
        return (n =
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
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          if (!("string" === typeof e || e instanceof String)) {
            var t;
            throw (
              ((t =
                null === e
                  ? "null"
                  : "object" === (t = n(e)) &&
                    e.constructor &&
                    e.constructor.hasOwnProperty("name")
                  ? e.constructor.name
                  : "a ".concat(t)),
              new TypeError("Expected string but received ".concat(t, ".")))
            );
          }
        }),
        (e.exports = t.default),
        (e.exports.default = t.default);
    },
    "5AlR": function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          for (var r in t) "undefined" === typeof e[r] && (e[r] = t[r]);
          return e;
        }),
        (e.exports = t.default),
        (e.exports.default = t.default);
    },
    "8K+i": function (e, t, r) {
      "use strict";
      var n = r("wx14"),
        i = r("q1tI"),
        o = r.n(i),
        a = r("TSYQ"),
        u = r.n(a),
        c = r("eWa3"),
        s = r.n(c),
        l = (r("40A7"), r("17x9")),
        d = r.n(l);
      function f() {
        return (f =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function p(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      var h = (function (e) {
        var t, r;
        function n() {
          var t;
          return (
            ((t = e.call(this) || this).handleExpired = t.handleExpired.bind(
              p(t)
            )),
            (t.handleErrored = t.handleErrored.bind(p(t))),
            (t.handleChange = t.handleChange.bind(p(t))),
            (t.handleRecaptchaRef = t.handleRecaptchaRef.bind(p(t))),
            t
          );
        }
        (r = e),
          ((t = n).prototype = Object.create(r.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = r);
        var i = n.prototype;
        return (
          (i.getValue = function () {
            return this.props.grecaptcha && void 0 !== this._widgetId
              ? this.props.grecaptcha.getResponse(this._widgetId)
              : null;
          }),
          (i.getWidgetId = function () {
            return this.props.grecaptcha && void 0 !== this._widgetId
              ? this._widgetId
              : null;
          }),
          (i.execute = function () {
            var e = this.props.grecaptcha;
            if (e && void 0 !== this._widgetId)
              return e.execute(this._widgetId);
            this._executeRequested = !0;
          }),
          (i.executeAsync = function () {
            var e = this;
            return new Promise(function (t, r) {
              (e.executionResolve = t), (e.executionReject = r), e.execute();
            });
          }),
          (i.reset = function () {
            this.props.grecaptcha &&
              void 0 !== this._widgetId &&
              this.props.grecaptcha.reset(this._widgetId);
          }),
          (i.handleExpired = function () {
            this.props.onExpired
              ? this.props.onExpired()
              : this.handleChange(null);
          }),
          (i.handleErrored = function () {
            this.props.onErrored && this.props.onErrored(),
              this.executionReject &&
                (this.executionReject(),
                delete this.executionResolve,
                delete this.executionReject);
          }),
          (i.handleChange = function (e) {
            this.props.onChange && this.props.onChange(e),
              this.executionResolve &&
                (this.executionResolve(e),
                delete this.executionReject,
                delete this.executionResolve);
          }),
          (i.explicitRender = function () {
            if (
              this.props.grecaptcha &&
              this.props.grecaptcha.render &&
              void 0 === this._widgetId
            ) {
              var e = document.createElement("div");
              (this._widgetId = this.props.grecaptcha.render(e, {
                sitekey: this.props.sitekey,
                callback: this.handleChange,
                theme: this.props.theme,
                type: this.props.type,
                tabindex: this.props.tabindex,
                "expired-callback": this.handleExpired,
                "error-callback": this.handleErrored,
                size: this.props.size,
                stoken: this.props.stoken,
                hl: this.props.hl,
                badge: this.props.badge,
              })),
                this.captcha.appendChild(e);
            }
            this._executeRequested &&
              this.props.grecaptcha &&
              void 0 !== this._widgetId &&
              ((this._executeRequested = !1), this.execute());
          }),
          (i.componentDidMount = function () {
            this.explicitRender();
          }),
          (i.componentDidUpdate = function () {
            this.explicitRender();
          }),
          (i.componentWillUnmount = function () {
            void 0 !== this._widgetId &&
              (this.delayOfCaptchaIframeRemoving(), this.reset());
          }),
          (i.delayOfCaptchaIframeRemoving = function () {
            var e = document.createElement("div");
            for (
              document.body.appendChild(e), e.style.display = "none";
              this.captcha.firstChild;

            )
              e.appendChild(this.captcha.firstChild);
            setTimeout(function () {
              document.body.removeChild(e);
            }, 5e3);
          }),
          (i.handleRecaptchaRef = function (e) {
            this.captcha = e;
          }),
          (i.render = function () {
            var e = this.props,
              t =
                (e.sitekey,
                e.onChange,
                e.theme,
                e.type,
                e.tabindex,
                e.onExpired,
                e.onErrored,
                e.size,
                e.stoken,
                e.grecaptcha,
                e.badge,
                e.hl,
                (function (e, t) {
                  if (null == e) return {};
                  var r,
                    n,
                    i = {},
                    o = Object.keys(e);
                  for (n = 0; n < o.length; n++)
                    (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                  return i;
                })(e, [
                  "sitekey",
                  "onChange",
                  "theme",
                  "type",
                  "tabindex",
                  "onExpired",
                  "onErrored",
                  "size",
                  "stoken",
                  "grecaptcha",
                  "badge",
                  "hl",
                ]));
            return o.a.createElement(
              "div",
              f({}, t, { ref: this.handleRecaptchaRef })
            );
          }),
          n
        );
      })(o.a.Component);
      (h.displayName = "ReCAPTCHA"),
        (h.propTypes = {
          sitekey: d.a.string.isRequired,
          onChange: d.a.func,
          grecaptcha: d.a.object,
          theme: d.a.oneOf(["dark", "light"]),
          type: d.a.oneOf(["image", "audio"]),
          tabindex: d.a.number,
          onExpired: d.a.func,
          onErrored: d.a.func,
          size: d.a.oneOf(["compact", "normal", "invisible"]),
          stoken: d.a.string,
          hl: d.a.string,
          badge: d.a.oneOf(["bottomright", "bottomleft", "inline"]),
        }),
        (h.defaultProps = {
          onChange: function () {},
          theme: "light",
          type: "image",
          tabindex: 0,
          size: "normal",
          badge: "bottomright",
        });
      var b = r("2mql"),
        g = r.n(b);
      function m() {
        return (m =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      var v = {},
        y = 0;
      var x = "onloadcallback";
      var _,
        w,
        C = ((_ = function () {
          return (
            "https://" +
            ((("undefined" !== typeof window && window.recaptchaOptions) || {})
              .useRecaptchaNet
              ? "recaptcha.net"
              : "www.google.com") +
            "/recaptcha/api.js?onload=" +
            x +
            "&render=explicit"
          );
        }),
        (w = (w = { callbackName: x, globalName: "grecaptcha" }) || {}),
        function (e) {
          var t = e.displayName || e.name || "Component",
            r = (function (t) {
              var r, n;
              function o(e, r) {
                var n;
                return (
                  ((n = t.call(this, e, r) || this).state = {}),
                  (n.__scriptURL = ""),
                  n
                );
              }
              (n = t),
                ((r = o).prototype = Object.create(n.prototype)),
                (r.prototype.constructor = r),
                (r.__proto__ = n);
              var a = o.prototype;
              return (
                (a.asyncScriptLoaderGetScriptLoaderID = function () {
                  return (
                    this.__scriptLoaderID ||
                      (this.__scriptLoaderID = "async-script-loader-" + y++),
                    this.__scriptLoaderID
                  );
                }),
                (a.setupScriptURL = function () {
                  return (
                    (this.__scriptURL = "function" === typeof _ ? _() : _),
                    this.__scriptURL
                  );
                }),
                (a.asyncScriptLoaderHandleLoad = function (e) {
                  var t = this;
                  this.setState(e, function () {
                    return (
                      t.props.asyncScriptOnLoad &&
                      t.props.asyncScriptOnLoad(t.state)
                    );
                  });
                }),
                (a.asyncScriptLoaderTriggerOnScriptLoaded = function () {
                  var e = v[this.__scriptURL];
                  if (!e || !e.loaded) throw new Error("Script is not loaded.");
                  for (var t in e.observers) e.observers[t](e);
                  delete window[w.callbackName];
                }),
                (a.componentDidMount = function () {
                  var e = this,
                    t = this.setupScriptURL(),
                    r = this.asyncScriptLoaderGetScriptLoaderID(),
                    n = w,
                    i = n.globalName,
                    o = n.callbackName,
                    a = n.scriptId;
                  if (
                    (i &&
                      "undefined" !== typeof window[i] &&
                      (v[t] = { loaded: !0, observers: {} }),
                    v[t])
                  ) {
                    var u = v[t];
                    return u && (u.loaded || u.errored)
                      ? void this.asyncScriptLoaderHandleLoad(u)
                      : void (u.observers[r] = function (t) {
                          return e.asyncScriptLoaderHandleLoad(t);
                        });
                  }
                  var c = {};
                  (c[r] = function (t) {
                    return e.asyncScriptLoaderHandleLoad(t);
                  }),
                    (v[t] = { loaded: !1, observers: c });
                  var s = document.createElement("script");
                  for (var l in ((s.src = t), (s.async = !0), w.attributes))
                    s.setAttribute(l, w.attributes[l]);
                  a && (s.id = a);
                  var d = function (e) {
                    if (v[t]) {
                      var r = v[t].observers;
                      for (var n in r) e(r[n]) && delete r[n];
                    }
                  };
                  o &&
                    "undefined" !== typeof window &&
                    (window[o] = function () {
                      return e.asyncScriptLoaderTriggerOnScriptLoaded();
                    }),
                    (s.onload = function () {
                      var e = v[t];
                      e &&
                        ((e.loaded = !0),
                        d(function (t) {
                          return !o && (t(e), !0);
                        }));
                    }),
                    (s.onerror = function () {
                      var e = v[t];
                      e &&
                        ((e.errored = !0),
                        d(function (t) {
                          return t(e), !0;
                        }));
                    }),
                    document.body.appendChild(s);
                }),
                (a.componentWillUnmount = function () {
                  var e = this.__scriptURL;
                  if (!0 === w.removeOnUnmount)
                    for (
                      var t = document.getElementsByTagName("script"), r = 0;
                      r < t.length;
                      r += 1
                    )
                      t[r].src.indexOf(e) > -1 &&
                        t[r].parentNode &&
                        t[r].parentNode.removeChild(t[r]);
                  var n = v[e];
                  n &&
                    (delete n.observers[
                      this.asyncScriptLoaderGetScriptLoaderID()
                    ],
                    !0 === w.removeOnUnmount && delete v[e]);
                }),
                (a.render = function () {
                  var t = w.globalName,
                    r = this.props,
                    n = (r.asyncScriptOnLoad, r.forwardedRef),
                    o = (function (e, t) {
                      if (null == e) return {};
                      var r,
                        n,
                        i = {},
                        o = Object.keys(e);
                      for (n = 0; n < o.length; n++)
                        (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                      return i;
                    })(r, ["asyncScriptOnLoad", "forwardedRef"]);
                  return (
                    t &&
                      "undefined" !== typeof window &&
                      (o[t] =
                        "undefined" !== typeof window[t] ? window[t] : void 0),
                    (o.ref = n),
                    Object(i.createElement)(e, o)
                  );
                }),
                o
              );
            })(i.Component),
            n = Object(i.forwardRef)(function (e, t) {
              return Object(i.createElement)(r, m({}, e, { forwardedRef: t }));
            });
          return (
            (n.displayName = "AsyncScriptLoader(" + t + ")"),
            (n.propTypes = { asyncScriptOnLoad: d.a.func }),
            g()(n, e)
          );
        })(h),
        O = r("sUIV"),
        S = r("UrOR"),
        R = r("mjZG"),
        j = o.a.createElement,
        F = function (e) {
          var t = e.instanceId,
            r = e.isProcessing,
            a = e.errorMessage,
            c = e.displayErrorInline,
            l = e.onValidSubmit,
            d = e.onValidationError,
            f = e.onFocus,
            p = e.onChange,
            h = e.onCheckboxChecked,
            b = e.formClassName,
            g = e.inputClassName,
            m = e.buttonClassName,
            v = e.hideCaptchaBadge,
            y = e.inputLabel,
            x = e.buttonLabel,
            _ = e.buttonVariant,
            w = e.invalidEmailError,
            F = e.buttonLabelProcessing,
            E = e.showCheckbox,
            L = e.checkboxLabel,
            I = o.a.createRef(),
            k = Object(i.useState)(""),
            N = k[0],
            A = k[1],
            D = Object(i.useState)(""),
            P = D[0],
            M = D[1],
            U = Object(i.useState)(!1),
            z = U[0],
            q = U[1],
            $ = Object(i.useState)(!E),
            T = $[0],
            W = $[1];
          return j(
            "form",
            {
              className: u()("fj9lnf5", b, { "hidden-captcha-badge": v }),
              onSubmit: function (e) {
                e.preventDefault(),
                  I.current && I.current.reset(),
                  s()(N) ? (q(!0), I.current.execute()) : (M(w), d(t));
              },
              autoComplete: "off",
            },
            j(
              "div",
              { className: u()("ins7ygp", g) },
              j(
                S.B,
                Object(n.a)(
                  {
                    labelText: y,
                    name: "".concat(t, "-email-signup-input"),
                    value: N,
                    onChange: function (e) {
                      var r = e.target.value;
                      M(""), A(r), p(t, r);
                    },
                    error: a || P,
                    displayErrorInline: c,
                    onFocus: function (e) {
                      f(t);
                    },
                    disabled: r || z,
                  },
                  Object(O.testIdAttribute)("email-input")
                )
              )
            ),
            j(
              "div",
              { className: u()("b6awkwe", m) },
              j(
                S.c,
                Object(n.a)(
                  { type: "submit", disabled: r || z, variant: _ },
                  Object(O.testIdAttribute)("submit-button")
                ),
                r || z ? F : x
              )
            ),
            E
              ? j(
                  "div",
                  Object(n.a)(
                    { className: u()("c13okmgj") },
                    Object(O.testIdAttribute)("checkbox")
                  ),
                  j("input", {
                    type: "checkbox",
                    onChange: function (e) {
                      var r = e.target.checked;
                      W(r), e.target.checked && h(t);
                    },
                    name: "".concat(t, "-signup-checkbox"),
                    id: "".concat(t, "-confirm-subscription"),
                  }),
                  j(
                    "label",
                    { htmlFor: "".concat(t, "-confirm-subscription") },
                    L
                  )
                )
              : null,
            j(
              C,
              Object(n.a)(
                {
                  ref: I,
                  size: "invisible",
                  sitekey: R.f,
                  onChange: function (e) {
                    l(t, N, e, T), q(!1);
                  },
                },
                Object(O.testIdAttribute)("recaptcha")
              )
            )
          );
        };
      F.defaultProps = {
        isProcessing: !1,
        errorMessage: null,
        onValidSubmit: function (e, t, r) {},
        onValidationError: function (e) {},
        onFocus: function (e) {},
        onCheckboxChecked: function (e, t) {},
        onChange: function (e, t) {},
        formClassName: null,
        inputClassName: null,
        buttonClassName: null,
        hideCaptchaBadge: !1,
        inputLabel: "Your email address",
        buttonLabel: "Subscribe",
        buttonVariant: "primary",
        invalidEmailError: "Invalid email address",
        buttonLabelProcessing: "Working on it...",
        showCheckbox: !1,
        checkboxLabel:
          "Stay updated on Pocket news, launches, surveys, and more.",
      };
      t.a = F;
      r("ZCMD");
    },
    "91Rb": function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          var r, n;
          (0, i.default)(e),
            "object" === o(t)
              ? ((r = t.min || 0), (n = t.max))
              : ((r = arguments[1]), (n = arguments[2]));
          var a = encodeURI(e).split(/%..|./).length - 1;
          return a >= r && ("undefined" === typeof n || a <= n);
        });
      var n,
        i = (n = r("2Idn")) && n.__esModule ? n : { default: n };
      function o(e) {
        return (o =
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
      (e.exports = t.default), (e.exports.default = t.default);
    },
    ZCMD: function (e, t, r) {},
    eWa3: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          if (
            ((0, n.default)(e),
            (t = (0, i.default)(t, l)).require_display_name ||
              t.allow_display_name)
          ) {
            var r = e.match(d);
            if (r) {
              var c,
                v = (function (e, t) {
                  return (
                    (function (e) {
                      if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                      if (
                        "undefined" === typeof Symbol ||
                        !(Symbol.iterator in Object(e))
                      )
                        return;
                      var r = [],
                        n = !0,
                        i = !1,
                        o = void 0;
                      try {
                        for (
                          var a, u = e[Symbol.iterator]();
                          !(n = (a = u.next()).done) &&
                          (r.push(a.value), !t || r.length !== t);
                          n = !0
                        );
                      } catch (c) {
                        (i = !0), (o = c);
                      } finally {
                        try {
                          n || null == u.return || u.return();
                        } finally {
                          if (i) throw o;
                        }
                      }
                      return r;
                    })(e, t) ||
                    (function (e, t) {
                      if (!e) return;
                      if ("string" === typeof e) return s(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      "Object" === r &&
                        e.constructor &&
                        (r = e.constructor.name);
                      if ("Map" === r || "Set" === r) return Array.from(e);
                      if (
                        "Arguments" === r ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                      )
                        return s(e, t);
                    })(e, t) ||
                    (function () {
                      throw new TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })()
                  );
                })(r, 3);
              if (
                ((c = v[1]),
                (e = v[2]),
                c.endsWith(" ") && (c = c.substr(0, c.length - 1)),
                !(function (e) {
                  var t = e.match(/^"(.+)"$/i),
                    r = t ? t[1] : e;
                  if (!r.trim()) return !1;
                  if (/[\.";<>]/.test(r)) {
                    if (!t) return !1;
                    if (!(r.split('"').length === r.split('\\"').length))
                      return !1;
                  }
                  return !0;
                })(c))
              )
                return !1;
            } else if (t.require_display_name) return !1;
          }
          if (!t.ignore_max_length && e.length > m) return !1;
          var y = e.split("@"),
            x = y.pop(),
            _ = y.join("@"),
            w = x.toLowerCase();
          if (
            t.domain_specific_validation &&
            ("gmail.com" === w || "googlemail.com" === w)
          ) {
            var C = (_ = _.toLowerCase()).split("+")[0];
            if (!(0, o.default)(C.replace(".", ""), { min: 6, max: 30 }))
              return !1;
            for (var O = C.split("."), S = 0; S < O.length; S++)
              if (!p.test(O[S])) return !1;
          }
          if (
            !(0, o.default)(_, { max: 64 }) ||
            !(0, o.default)(x, { max: 254 })
          )
            return !1;
          if (!(0, a.default)(x, { require_tld: t.require_tld })) {
            if (!t.allow_ip_domain) return !1;
            if (!(0, u.default)(x)) {
              if (!x.startsWith("[") || !x.endsWith("]")) return !1;
              var R = x.substr(1, x.length - 2);
              if (0 === R.length || !(0, u.default)(R)) return !1;
            }
          }
          if ('"' === _[0])
            return (
              (_ = _.slice(1, _.length - 1)),
              t.allow_utf8_local_part ? g.test(_) : h.test(_)
            );
          for (
            var j = t.allow_utf8_local_part ? b : f, F = _.split("."), E = 0;
            E < F.length;
            E++
          )
            if (!j.test(F[E])) return !1;
          return !0;
        });
      var n = c(r("2Idn")),
        i = c(r("5AlR")),
        o = c(r("91Rb")),
        a = c(r("f2Qg")),
        u = c(r("hHZz"));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var l = {
          allow_display_name: !1,
          require_display_name: !1,
          allow_utf8_local_part: !0,
          require_tld: !0,
        },
        d = /^([^\x00-\x1F\x7F-\x9F\cX]+)<(.+)>$/i,
        f = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,
        p = /^[a-z\d]+$/,
        h = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,
        b = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,
        g = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,
        m = 254;
      (e.exports = t.default), (e.exports.default = t.default);
    },
    f2Qg: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          (0, n.default)(e),
            (t = (0, i.default)(t, a)).allow_trailing_dot &&
              "." === e[e.length - 1] &&
              (e = e.substring(0, e.length - 1));
          for (var r = e.split("."), o = 0; o < r.length; o++)
            if (r[o].length > 63) return !1;
          if (t.require_tld) {
            var u = r.pop();
            if (
              !r.length ||
              !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(u)
            )
              return !1;
            if (
              /[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20\u00A9\uFFFD]/.test(
                u
              )
            )
              return !1;
          }
          for (var c, s = 0; s < r.length; s++) {
            if (
              ((c = r[s]),
              t.allow_underscores && (c = c.replace(/_/g, "")),
              !/^[a-z\u00a1-\uffff0-9-]+$/i.test(c))
            )
              return !1;
            if (/[\uff01-\uff5e]/.test(c)) return !1;
            if ("-" === c[0] || "-" === c[c.length - 1]) return !1;
          }
          return !0;
        });
      var n = o(r("2Idn")),
        i = o(r("5AlR"));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var a = {
        require_tld: !0,
        allow_underscores: !1,
        allow_trailing_dot: !1,
      };
      (e.exports = t.default), (e.exports.default = t.default);
    },
    hHZz: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function e(t) {
          var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          if (((0, i.default)(t), !(r = String(r)))) return e(t, 4) || e(t, 6);
          if ("4" === r)
            return (
              !!o.test(t) &&
              t.split(".").sort(function (e, t) {
                return e - t;
              })[3] <= 255
            );
          if ("6" === r) {
            var n = [t];
            if (t.includes("%")) {
              if (2 !== (n = t.split("%")).length) return !1;
              if (!n[0].includes(":")) return !1;
              if ("" === n[1]) return !1;
            }
            var u = n[0].split(":"),
              c = !1,
              s = e(u[u.length - 1], 4),
              l = s ? 7 : 8;
            if (u.length > l) return !1;
            if ("::" === t) return !0;
            "::" === t.substr(0, 2)
              ? (u.shift(), u.shift(), (c = !0))
              : "::" === t.substr(t.length - 2) && (u.pop(), u.pop(), (c = !0));
            for (var d = 0; d < u.length; ++d)
              if ("" === u[d] && d > 0 && d < u.length - 1) {
                if (c) return !1;
                c = !0;
              } else if (s && d === u.length - 1);
              else if (!a.test(u[d])) return !1;
            return c ? u.length >= 1 : u.length === l;
          }
          return !1;
        });
      var n,
        i = (n = r("2Idn")) && n.__esModule ? n : { default: n };
      var o = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/,
        a = /^[0-9A-F]{1,4}$/i;
      (e.exports = t.default), (e.exports.default = t.default);
    },
  },
]);
//# sourceMappingURL=d39f0ab6ef217ae15d0f2f3944f6f1156dd19605.261fd1f03c15234f459e.js.map
