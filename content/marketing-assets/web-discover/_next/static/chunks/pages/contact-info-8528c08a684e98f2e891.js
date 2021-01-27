_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [25],
  {
    Eh6L: function (e, t, o) {
      "use strict";
      var n = o("q1tI"),
        r = o.n(n),
        s = o("8Kt/"),
        a = o.n(s),
        i = o("/MKj"),
        l = (o("40A7"), o("UrOR")),
        u = o("Xdly"),
        c = r.a.createElement;
      (t.a = function (e) {
        e.metaData;
        var t = e.children,
          o = e.title,
          n = void 0 === o ? "Pocket" : o,
          r = Object(i.c)(function (e) {
            return !!e.user.auth;
          });
        return c(
          "main",
          { className: "i1613qxo" },
          c(
            a.a,
            null,
            c("title", null, n),
            c("link", {
              rel: "icon",
              type: "image/x-icon",
              href: "/favicon.ico",
            })
          ),
          c(u.a, { isLoggedIn: r }),
          c(l.u, { className: "page-container" }, c("main", null, t)),
          c(l.l, { hasColorBorder: !0 })
        );
      }),
        o("jl8r");
    },
    "HaE+": function (e, t, o) {
      "use strict";
      function n(e, t, o, n, r, s, a) {
        try {
          var i = e[s](a),
            l = i.value;
        } catch (u) {
          return void o(u);
        }
        i.done ? t(l) : Promise.resolve(l).then(n, r);
      }
      function r(e) {
        return function () {
          var t = this,
            o = arguments;
          return new Promise(function (r, s) {
            var a = e.apply(t, o);
            function i(e) {
              n(a, r, s, i, l, "next", e);
            }
            function l(e) {
              n(a, r, s, i, l, "throw", e);
            }
            i(void 0);
          });
        };
      }
      o.d(t, "a", function () {
        return r;
      });
    },
    xbFk: function (e, t, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/contact-info",
        function () {
          return o("xjsO");
        },
      ]);
    },
    xjsO: function (e, t, o) {
      "use strict";
      o.r(t);
      var n = o("o0o1"),
        r = o.n(n),
        s = o("HaE+"),
        a = o("q1tI"),
        i = o.n(a),
        l = o("Eh6L"),
        u = i.a.createElement;
      function c() {
        return u(
          l.a,
          { title: "Pocket: Contact info" },
          u("h1", null, "Contact info"),
          u("h5", null, "Support"),
          u(
            "p",
            null,
            "To get help with Pocket or to request features, please visit our",
            " ",
            u("a", { href: "http://help.getpocket.com" }, "support page"),
            "."
          ),
          u("h5", null, "Press"),
          u(
            "p",
            null,
            "For press inquiries or media assets, please visit our",
            " ",
            u("a", { href: "/press" }, "press page"),
            "."
          ),
          u("h5", null, "Sponsorships/Business"),
          u(
            "p",
            null,
            "For questions related to business, please contact us at",
            " ",
            u(
              "a",
              { href: "mailto:business@getpocket.com" },
              "business@getpocket.com"
            ),
            "."
          ),
          u(
            "p",
            null,
            "For questions related to sponsorships, please contact us at",
            " ",
            u(
              "a",
              { href: "mailto:sponsor@getpocket.com" },
              "sponsor@getpocket.com"
            ),
            "."
          ),
          u("h5", null, "API"),
          u(
            "p",
            null,
            "For questions, problems, and suggestions regarding our API, please contact us at ",
            u("a", { href: "mailto:api@getpocket.com" }, "api@getpocket.com"),
            "."
          ),
          u("h5", null, "Jobs"),
          u(
            "p",
            null,
            "To view all open positions at Pocket, please visit our",
            " ",
            u("a", { href: "/jobs" }, "Jobs Page"),
            "."
          ),
          u("h5", null, "Security"),
          u(
            "p",
            null,
            "If you believe you have discovered a security vulnerability in Pocket, please follow Mozilla\u2019s bug reporting process documented on",
            " ",
            u(
              "a",
              {
                href:
                  "https://www.mozilla.org/en-US/about/governance/policies/security-group/bugs/",
              },
              "Mozilla\u2019s Security page"
            ),
            "."
          ),
          u(
            "p",
            null,
            "For questions related to security, please contact us at",
            " ",
            u(
              "a",
              { href: "mailto:security@getpocket.com" },
              "security@getpocket.com"
            ),
            "."
          ),
          u("h5", null, "Follow Us"),
          u(
            "p",
            null,
            u("a", { href: "https://blog.getpocket.com/" }, "Pocket Blog")
          ),
          u(
            "p",
            null,
            "Twitter (",
            u("a", { href: "https://twitter.com/pocket" }, "@pocket"),
            ",",
            " ",
            u(
              "a",
              { href: "https://twitter.com/pocketsupport" },
              "@pocketsupport"
            ),
            ")"
          ),
          u(
            "p",
            null,
            u("a", { href: "https://www.facebook.com/getpocket" }, "Facebook")
          ),
          u("h5", null, "Pocket HQ"),
          u(
            "p",
            null,
            "Mozilla Corporation/Pocket Business Unit",
            u("br", null),
            "2 Harrison Street, Suite 175",
            u("br", null),
            "San Francisco, CA 94105"
          )
        );
      }
      c.getInitialProps = Object(s.a)(
        r.a.mark(function e() {
          return r.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt("return", {});
                case 1:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
      t.default = c;
    },
  },
  [["xbFk", 2, 3, 4, 1, 0]],
]);
//# sourceMappingURL=contact-info-8528c08a684e98f2e891.js.map
