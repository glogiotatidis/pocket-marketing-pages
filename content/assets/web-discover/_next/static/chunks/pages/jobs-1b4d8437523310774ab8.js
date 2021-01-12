_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [27],
  {
    "7qYc": function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("o0o1"),
        o = n.n(a),
        i = n("HaE+"),
        s = n("vcXL"),
        r = n.n(s),
        l = "pocketco";
      function c() {
        return u.apply(this, arguments);
      }
      function u() {
        return (u = Object(i.a)(
          o.a.mark(function e() {
            var t, n;
            return o.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        r()(
                          "https://boards-api.greenhouse.io/v1/boards/".concat(
                            l,
                            "/jobs"
                          )
                        )
                      );
                    case 3:
                      return (t = e.sent), (e.next = 6), t.json();
                    case 6:
                      return (n = e.sent), e.abrupt("return", n);
                    case 10:
                      (e.prev = 10), (e.t0 = e.catch(0)), console.warn(e.t0);
                    case 13:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 10]]
            );
          })
        )).apply(this, arguments);
      }
      var p = n("q1tI"),
        h = n.n(p),
        d = n("Eh6L"),
        f =
          (n("40A7"),
          "https://assets.getpocket.com/web-discover/_next/static/images/jobs-chat.ca38870c9bd66179126a894e21ae1a7e.jpg"),
        m =
          "https://assets.getpocket.com/web-discover/_next/static/images/jobs-chat@2x.383a3f580ad182cb3e95ec6f0f79d5ad.jpg",
        b =
          "https://assets.getpocket.com/web-discover/_next/static/images/jobs-planning.84495cb70cae4605b41467c36aff2a5b.jpg",
        g =
          "https://assets.getpocket.com/web-discover/_next/static/images/jobs-planning@2x.5c8f8db0e5e4ee062c6ad732112fa8cb.jpg",
        v =
          "https://assets.getpocket.com/web-discover/_next/static/images/jobs-team-photo-2020.7b1bf744920c0f37c654db4a66d4ab9f.jpg",
        w =
          "https://assets.getpocket.com/web-discover/_next/static/images/jobs-team-photo-2020@2x.d0ed1777d27b5548881f4f2ee162a428.jpg",
        y = (n("UrOR"), n("wx14")),
        j = n("TSYQ"),
        k = n.n(j),
        x = n("sUIV"),
        P = h.a.createElement,
        _ = function (e) {
          var t = e.jobs,
            n = e.className;
          return P(
            "section",
            null,
            t.length > 0
              ? P(
                  h.a.Fragment,
                  null,
                  P("h5", null, "Current Positions"),
                  P(
                    "ul",
                    Object(y.a)(
                      { className: k()("jia2zb6", n) },
                      Object(x.testIdAttribute)("jobs-list")
                    ),
                    t.map(function (e) {
                      return P(
                        "li",
                        { key: "jobs-list-item-".concat(e.id) },
                        P(
                          "a",
                          {
                            href: e.absolute_url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          e.title
                        )
                      );
                    })
                  )
                )
              : P(
                  "h5",
                  Object(x.testIdAttribute)("jobs-list-empty"),
                  "There are no current openings."
                )
          );
        };
      _.defaultProps = { jobs: [], className: "" };
      var E = _;
      n("5eyi");
      var N = h.a.createElement,
        I = "j1kp5vvh";
      function q(e) {
        var t = e.jobs,
          n = e.jobsRequestError;
        return N(
          d.a,
          { title: "Pocket: Jobs" },
          N(
            "div",
            { className: I },
            N("h1", null, "Join the Pocket Team"),
            N("img", {
              className: "jobs-hero",
              srcSet: "".concat(v, ", ").concat(w, " 2x"),
              src: v,
              alt: "",
            }),
            N("span", { className: "caption hero" }, "Photo by Gaurang Katre"),
            N(
              "p",
              null,
              "We invite you to become a vital part of our small team in San Francisco. We\u2019re building a company that enables people to save and consume content that is worthy of both their time and attention. By doing so, we want to make it easier to spend time with more high-quality content, no matter how noisy it gets."
            ),
            N(
              "p",
              null,
              "If you are passionate about using technology to improve people\u2019s lives, we believe Pocket has challenges in front of us that will excite you. We\u2019re hoping you\u2019ll be ready to jump in and get your hands dirty, too. We\u2019re a small team and that means lots of opportunity to own things from start to finish that have tremendous impact on large numbers of people, across many different devices and platforms."
            ),
            N(
              "p",
              null,
              "Nearly 30 million people have saved more than 3 billion articles and videos to Pocket. Every day, people all over the world are using Pocket to save and read what\u2019s interesting to them, surfacing a unique, human view of what\u2019s actually worth reading and watching on the web."
            ),
            N(
              "p",
              null,
              "In a world where we are buried by content, where it\u2019s become increasingly harder to find signal in the noise, truth from fiction, and even the value of our press and written word is being challenged, we need a platform where high-quality, thoughtful content and free speech can rise above the rest."
            ),
            N(
              "p",
              null,
              "If that sounds compelling, we\u2019d love to meet you."
            ),
            n
              ? null
              : N("div", { className: "jobs-listings" }, N(E, { jobs: t })),
            N(
              "div",
              { className: "figs-wrapper" },
              N(
                "figure",
                null,
                N("img", {
                  srcSet: "".concat(f, ", ").concat(m, " 2x"),
                  src: f,
                  alt: "",
                })
              ),
              N(
                "figure",
                null,
                N("img", {
                  srcSet: "".concat(b, ", ").concat(g, " 2x"),
                  src: b,
                  alt: "",
                })
              )
            ),
            N(
              "span",
              { className: "caption" },
              "Photo by",
              " ",
              N(
                "a",
                { href: "http://www.themogli.com/", target: "_mogli" },
                "Mogli"
              )
            ),
            N("h5", null, "Benefits + Perks"),
            N(
              "p",
              null,
              "In addition to paying competitive salaries and offering equity in a growing company, your health and well-being is an important focus at Pocket, so we offer a variety of benefits, including:"
            ),
            N("h6", null, "Health"),
            N(
              "ul",
              null,
              N(
                "li",
                null,
                "Top-notch Medical, Dental, & Vision Coverage with 100% of premiums paid by Pocket"
              ),
              N("li", null, "Life, AD&D, Disability Insurance paid by Pocket"),
              N("li", null, "Flexible hours"),
              N("li", null, "Ergonomic desk setup"),
              N("li", null, "Catered lunches 3 days a week"),
              N("li", null, "Lots of free snacks and drinks")
            ),
            N("h6", null, "Stuffing Your Pocket"),
            N(
              "ul",
              null,
              N("li", null, "Your ideal computer setup"),
              N("li", null, "401(k) with Employer Contributions"),
              N(
                "li",
                null,
                "Healthcare & Dependent Care Flexible Spending Accounts (FSA)"
              )
            ),
            N("h6", null, "Getting to Pocket"),
            N(
              "ul",
              null,
              N("li", null, "Conveniently located in downtown San Francisco"),
              N("li", null, "Commuter pre-tax benefits"),
              N("li", null, "Bike parking in the office")
            )
          )
        );
      }
      n("yKOv"),
        (q.getInitialProps = Object(i.a)(
          o.a.mark(function e() {
            var t;
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), c();
                  case 2:
                    return (
                      (t = e.sent),
                      e.abrupt("return", {
                        jobs: null === t || void 0 === t ? void 0 : t.jobs,
                        jobsRequestError:
                          null === t || void 0 === t ? void 0 : t.error,
                      })
                    );
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        ));
      t.default = q;
    },
    Eh6L: function (e, t, n) {
      "use strict";
      var a = n("q1tI"),
        o = n.n(a),
        i = n("8Kt/"),
        s = n.n(i),
        r = n("/MKj"),
        l = (n("40A7"), n("UrOR")),
        c = n("Xdly"),
        u = o.a.createElement;
      (t.a = function (e) {
        e.metaData;
        var t = e.children,
          n = e.title,
          a = void 0 === n ? "Pocket" : n,
          o = Object(r.c)(function (e) {
            return !!e.user.auth;
          });
        return u(
          "main",
          { className: "i1613qxo" },
          u(
            s.a,
            null,
            u("title", null, a),
            u("link", {
              rel: "icon",
              type: "image/x-icon",
              href: "/favicon.ico",
            })
          ),
          u(c.a, { isLoggedIn: o }),
          u(l.u, { className: "page-container" }, u("main", null, t)),
          u(l.l, { hasColorBorder: !0 })
        );
      }),
        n("jl8r");
    },
    G86m: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/jobs",
        function () {
          return n("7qYc");
        },
      ]);
    },
    "HaE+": function (e, t, n) {
      "use strict";
      function a(e, t, n, a, o, i, s) {
        try {
          var r = e[i](s),
            l = r.value;
        } catch (c) {
          return void n(c);
        }
        r.done ? t(l) : Promise.resolve(l).then(a, o);
      }
      function o(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (o, i) {
            var s = e.apply(t, n);
            function r(e) {
              a(s, o, i, r, l, "next", e);
            }
            function l(e) {
              a(s, o, i, r, l, "throw", e);
            }
            r(void 0);
          });
        };
      }
      n.d(t, "a", function () {
        return o;
      });
    },
    vcXL: function (e, t, n) {
      "use strict";
      var a = self.fetch.bind(self);
      (e.exports = a), (e.exports.default = e.exports);
    },
  },
  [["G86m", 2, 3, 4, 1, 0]],
]);
//# sourceMappingURL=jobs-1b4d8437523310774ab8.js.map
