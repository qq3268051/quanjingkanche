!function(t) {
    function e(i) {
        if (n[i])
            return n[i].exports;
        var r = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, e),
        r.l = !0,
        r.exports
    }
    var n = {};
    e.m = t,
    e.c = n,
    e.d = function(t, n, i) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }
    ,
    e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return e.d(n, "a", n),
        n
    }
    ,
    e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
   // e.p = "//x.autoimg.cn/vrcar/ext/dist/pc/",
    e(e.s = 63)
}([function(t, e, n) {
    var i = n(37)("wks")
      , r = n(26)
      , o = n(1).Symbol
      , s = "function" == typeof o;
    (t.exports = function(t) {
        return i[t] || (i[t] = s && o[t] || (s ? o : r)("Symbol." + t))
    }
    ).store = i
}
, function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}
, function(t, e) {
    var n = t.exports = {
        version: "2.5.1"
    };
    "number" == typeof __e && (__e = n)
}
, function(t, e, n) {
    var i = n(1)
      , r = n(2)
      , o = n(10)
      , s = n(9)
      , a = function(t, e, n) {
        var c, l, u, d = t & a.F, h = t & a.G, f = t & a.S, p = t & a.P, v = t & a.B, m = t & a.W, g = h ? r : r[e] || (r[e] = {}), y = g.prototype, w = h ? i : f ? i[e] : (i[e] || {}).prototype;
        h && (n = e);
        for (c in n)
            (l = !d && w && void 0 !== w[c]) && c in g || (u = l ? w[c] : n[c],
            g[c] = h && "function" != typeof w[c] ? n[c] : v && l ? o(u, i) : m && w[c] == u ? function(t) {
                var e = function(e, n, i) {
                    if (this instanceof t) {
                        switch (arguments.length) {
                        case 0:
                            return new t;
                        case 1:
                            return new t(e);
                        case 2:
                            return new t(e,n)
                        }
                        return new t(e,n,i)
                    }
                    return t.apply(this, arguments)
                };
                return e.prototype = t.prototype,
                e
            }(u) : p && "function" == typeof u ? o(Function.call, u) : u,
            p && ((g.virtual || (g.virtual = {}))[c] = u,
            t & a.R && y && !y[c] && s(y, c, u)))
    };
    a.F = 1,
    a.G = 2,
    a.S = 4,
    a.P = 8,
    a.B = 16,
    a.W = 32,
    a.U = 64,
    a.R = 128,
    t.exports = a
}
, function(t, e, n) {
    var i = n(5)
      , r = n(49)
      , o = n(33)
      , s = Object.defineProperty;
    e.f = n(7) ? Object.defineProperty : function(t, e, n) {
        if (i(t),
        e = o(e, !0),
        i(n),
        r)
            try {
                return s(t, e, n)
            } catch (t) {}
        if ("get"in n || "set"in n)
            throw TypeError("Accessors not supported!");
        return "value"in n && (t[e] = n.value),
        t
    }
}
, function(t, e, n) {
    var i = n(6);
    t.exports = function(t) {
        if (!i(t))
            throw TypeError(t + " is not an object!");
        return t
    }
}
, function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}
, function(t, e, n) {
    t.exports = !n(14)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function r(t, e, n) {
        n = n || 365;
        var i = new Date;
        i.setDate(i.getDate() + n);
        var r = ";expires=" + i.toGMTString();
        document.cookie = t + "=" + escape(e) + r
    }
    function o(t) {
        var e, n = new RegExp("(^| )" + t + "=([^;]*)(;|$)");
        return (e = document.cookie.match(n)) ? unescape(e[2]) : null
    }
    function s(t) {
        var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)","i")
          , n = window.location.search.substr(1).match(e);
        return null != n ? "basecolor" === t || "cname" === t ? decodeURIComponent(n[2]) : unescape(n[2]) : ""
    }
    function a() {
        return !!/micromessenger/.test(navigator.userAgent.toLowerCase())
    }
    function c(t) {
        return t + "px"
    }
    function l(t, e) {
        return parseInt(getComputedStyle(t).getPropertyValue(e))
    }
    function u(t) {
        for (var e = 0, n = t.parentNode.childNodes, i = 0, r = n.length; i < r; i++)
            if (1 == n[i].nodeType && (e++,
            n[i] === t))
                return e
    }
    function d(t) {
        var e = Object.prototype.toString.call(t);
        if ("[object HTMLCollection]" === e) {
            var n = new A.default
              , i = !0
              , r = !1
              , o = void 0;
            try {
                for (var s, a = (0,
                M.default)(t); !(i = (s = a.next()).done); i = !0) {
                    var c = s.value;
                    n.set(c.parentNode, c)
                }
            } catch (t) {
                r = !0,
                o = t
            } finally {
                try {
                    !i && a.return && a.return()
                } finally {
                    if (r)
                        throw o
                }
            }
            var l = !0
              , u = !1
              , d = void 0;
            try {
                for (var h, f = (0,
                M.default)(n.entries()); !(l = (h = f.next()).done); l = !0) {
                    var p = h.value
                      , v = (0,
                    F.default)(p, 2)
                      , m = v[0]
                      , g = v[1];
                    m.removeChild(g)
                }
            } catch (t) {
                u = !0,
                d = t
            } finally {
                try {
                    !l && f.return && f.return()
                } finally {
                    if (u)
                        throw d
                }
            }
        } else if ("[object NodeList]" === e) {
            var y = !0
              , w = !1
              , b = void 0;
            try {
                for (var _, x = (0,
                M.default)(t); !(y = (_ = x.next()).done); y = !0) {
                    var T = _.value;
                    T.parentNode.removeChild(T)
                }
            } catch (t) {
                w = !0,
                b = t
            } finally {
                try {
                    !y && x.return && x.return()
                } finally {
                    if (w)
                        throw b
                }
            }
        } else
            t.parentNode.removeChild(t)
    }
    function h(t) {
        for (; t.firstChild; )
            t.removeChild(t.firstChild)
    }
    function f(t) {
        return document.getElementById(t)
    }
    function p(t) {
        return document.getElementsByClassName(t)[0]
    }
    function v(t) {
        return document.getElementsByClassName(t)
    }
    function m(t, e) {
        var n = new Event(e);
        t.dispatchEvent(n)
    }
    function g(t) {
        var e = t.method
          , n = t.url
          , i = t.data
          , r = t.success
          , o = t.error
          , s = null;
        try {
            s = new XMLHttpRequest
        } catch (t) {
            s = new ActiveXObject("Microsoft.XMLHTTP")
        }
        var a = "";
        for (var c in i)
            a && (a += "&"),
            a += c + "=" + i[c];
        "get" == e && i && (n += "?" + a),
        s.open(e, n, !0),
        "get" == e ? s.send() : (s.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=UTF-8"),
        s.send(a)),
        s.onreadystatechange = function() {
            4 == s.readyState && (200 == s.status ? r && r(s.responseText) : o && o(s.status))
        }
    }
    function y(t, e) {
        var n = t
          , i = void 0;
        return function() {
            var t = arguments
              , r = this;
            if (i)
                return !1;
            n.apply(r, t),
            i = setTimeout(function() {
                clearTimeout(i),
                i = null
            }, e || 500)
        }
    }
    function w(t) {
        $(".message-div").remove();
        var e = t || "加载中"
          , n = document.createElement("div");
        $(n).addClass("message-div").text(e).appendTo($("#bg-div")),
        setTimeout(function() {
            $(n).remove()
        }, 2e3)
    }
    function b(t, e) {
        $(".colorNameTip").remove(),
        clearTimeout(H),
        H = null;
        var n = e.split("|")
          , i = '<div class="ball0" style="background-color: #' + n[0] + ';"></div>';
        n.length > 1 && (i = '<div class="ball1" style="background-color: #' + n[0] + ';"></div>\n                            <div class="ball2" style="background-color: #' + n[1] + ';"></div>');
        var r = '<div class="colorNameTip">\n                            <div class="content">\n                                <div class="color-img">\n                                    ' + i + '\n                                </div>\n                                <div class="text"><div>' + t + '</div></div>\n                                <div class="clear"></div>\n                            </div>\n                        </div>';
        $("#bg-div").append(r);
        var o = l($(".color-img")[0], "width")
          , s = parseInt($(".colorNameTip .text").css("font-size"))
          , a = t.replace("|", "").length * s + Math.ceil(5 * s / 18);
        $(".colorNameTip .content").width(o + a + 10),
        R && $(".colorNameTip .text div").css("margin-top", "13px"),
        $(".colorNameTip .content .color-img").css({
            transition: "0.3s",
            transform: "scale(1.25)"
        }),
        setTimeout(function() {
            $(".colorNameTip .content .color-img").css("transform", "scale(1.0)")
        }, 300),
        H = setTimeout(function() {
            $(".colorNameTip").remove()
        }, 3e3)
    }
    function _(t, e) {
        $(".colorNameSampleTip").remove(),
        clearTimeout(q),
        q = null;
        var n = '<div class="colorNameSampleTip">\n                            <div class="content">\n                                <div class="text"><div>' + t + '</div></div>\n                                <div class="clear"></div>\n                            </div>\n                        </div>';
        $("#bg-div").append(n);
        var i = parseInt($("#bg-div").css("top"));
        i < 0 && $(".colorNameSampleTip").css("top", 45 - i + "px"),
        R && $(".colorNameSampleTip .text div").css("margin-top", "13px"),
        q = setTimeout(function() {
            $(".colorNameSampleTip").remove()
        }, 2e3)
    }
    function x(t) {
        $(".messageTips").hide(),
        clearTimeout(B),
        B = null,
        setTimeout(function() {
            var e = parseInt($(".messageTips .text").css("font-size"))
              , n = t.replace("|", "").length * e + Math.ceil(5 * e / 18);
            $(".messageTips .content").width(n),
            $(".messageTips .text div").text(t),
            R && $(".messageTips .text div").css("margin-top", "13px"),
            $(".messageTips").show()
        }, 0),
        B = setTimeout(function() {
            $(".messageTips").hide()
        }, 3e3)
    }
    function T(t, e) {
        var n, i, r, o = /^#/.test(t) ? t.slice(1) : t, s = "transparent" === t ? 0 : Math.ceil(e);
        return o = /^[0-9a-f]{3}|[0-9a-f]{6}$/i.test(o) ? o : "fffff",
        3 === o.length && (o = o.replace(/(\w)(\w)(\w)/gi, "$1$1$2$2$3$3")),
        n = o.slice(0, 2),
        i = o.slice(2, 4),
        r = o.slice(4, 6),
        n = parseInt(n, 16),
        i = parseInt(i, 16),
        r = parseInt(r, 16),
        {
            hex: "#" + o,
            alpha: s,
            rgba: "rgba(" + n + ", " + i + ", " + r + ", " + (s / 100).toFixed(2) + ")"
        }
    }
    function C(t, e) {
        var n = void 0
          , i = void 0;
        t.indexOf("|") >= 0 ? (n = t.split("|")[0],
        i = t.split("|")[1]) : n = i = t;
        var r = "to right";
        return e ? (1 === e ? r = "to right" : 2 === e && (r = "to left"),
        "linear-gradient(" + r + "," + T(n, 100).rgba + " 0%," + T(n, 50).rgba + " 50%," + T(i, 50).rgba + " 51%," + T(i, 0).rgba + " 100%)") : "linear-gradient(" + r + "," + T(n, 100).rgba + " 0%," + T(n, 100).rgba + " 50%," + T(i, 100).rgba + " 51%," + T(i, 100).rgba + " 100%)"
    }
    function E(t) {
        if (Array.isArray(t)) {
            var e = !0
              , n = !1
              , i = void 0;
            try {
                for (var r, o = (0,
                M.default)(t); !(e = (r = o.next()).done); e = !0) {
                    S(r.value)
                }
            } catch (t) {
                n = !0,
                i = t
            } finally {
                try {
                    !e && o.return && o.return()
                } finally {
                    if (n)
                        throw i
                }
            }
        } else
            S(t)
    }
    function S(t) {
        var e = $("<div></div>").hide().addClass(t);
        $("body").append(e)
    }
    function k(t) {
        var e = window.onload;
        window.onload = "function" != typeof e ? t : function() {
            e(),
            t()
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var P = n(21)
      , M = i(P)
      , I = n(83)
      , F = i(I)
      , O = n(87)
      , A = i(O)
      , L = n(104)
      , D = i(L)
      , N = "ontouchend"in document ? "touchend" : "click"
      , j = {
        versions: function() {
            var t = navigator.userAgent;
            navigator.appVersion;
            return {
                trident: t.indexOf("Trident") > -1,
                presto: t.indexOf("Presto") > -1,
                webKit: t.indexOf("AppleWebKit") > -1,
                gecko: t.indexOf("Gecko") > -1 && -1 == t.indexOf("KHTML"),
                mobile: !!t.match(/AppleWebKit.*Mobile.*/),
                ios: !!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                android: t.indexOf("Android") > -1 || t.indexOf("Linux") > -1,
                iPhone: t.indexOf("iPhone") > -1,
                iPad: t.indexOf("iPad") > -1,
                webApp: -1 == t.indexOf("Safari")
            }
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    }
      , W = j.versions.mobile || j.versions.ios || j.versions.android || j.versions.iPhone || j.versions.iPad
      , z = j.versions.ios || j.versions.iPhone || j.versions.iPad
      , Y = function() {
        var t = window.localStorage;
        try {
            return t.setItem("test", "1"),
            t.removeItem("test"),
            !0
        } catch (t) {
            return !1
        }
    }()
      , X = function() {
        var t = window.location.hostname;
        return "localhost" === t || /10\.168\.1\.\d+/.test(t) ? t : "x.autoimg.cn"
    }()
      , R = navigator.userAgent.indexOf("Android") > -1 || navigator.userAgent.indexOf("Adr") > -1
      , H = null
      , q = null
      , B = null
      , U = function(t) {
        var e = "";
        "Hori" === t ? e = "vr_ext_horizontal_view" : "Over" === t && (e = "vr_ext_overlook_view"),
        sendClickEvent(e, "click", "", "", "", "", "", 0, 0, 0)
    }
      , V = y(U, 200)
      , G = y(console.log, 200)
      , Q = {
        ajax: g,
        customTrigger: m,
        empty: h,
        remove: d,
        getByClassAll: v,
        getById: f,
        getByClass: p,
        indexInSiblings: u,
        computedStyle: l,
        numToPx: c,
        clickEvent: N,
        isMobile: W,
        isApple: z,
        isAndroid: R,
        setCookie: r,
        getCookie: o,
        getQueryString: s,
        isWeixinBrowser: a,
        notNeedTips: Y ? localStorage.getItem("swipetips") : o("swipetips"),
        isVRQuan: function() {
            var t = s("busi");
            return t && "brand|dealer4s|autoshow".indexOf(t) > -1
        }(),
        btn_scale: function() {
            return W ? .5 : window.innerWidth >= 1536 ? .8 : window.innerWidth < 1536 && window.innerWidth > 960 ? .7 : .5
        }(),
        swipeTips: {
            downEnable: !1,
            downDisable: !1,
            upEnable: !1,
            upDisable: !1
        },
        isPopWindows: !1,
        isLocalStorageNameSupported: Y,
        hostname: X,
        throttle: y,
        loading: w,
        colorNameTip: b,
        colorNameSampleTip: _,
        messageTips: x,
        hexToRgba: T,
        price_src: "",
        log: G,
        sendViewClick: V,
        getBackground: C,
        preload: E,
        addLoadFunc: k
    };
    D.default.extend(Q),
    e.default = Q
}
, function(t, e, n) {
    var i = n(4)
      , r = n(23);
    t.exports = n(7) ? function(t, e, n) {
        return i.f(t, e, r(1, n))
    }
    : function(t, e, n) {
        return t[e] = n,
        t
    }
}
, function(t, e, n) {
    var i = n(17);
    t.exports = function(t, e, n) {
        if (i(t),
        void 0 === e)
            return t;
        switch (n) {
        case 1:
            return function(n) {
                return t.call(e, n)
            }
            ;
        case 2:
            return function(n, i) {
                return t.call(e, n, i)
            }
            ;
        case 3:
            return function(n, i, r) {
                return t.call(e, n, i, r)
            }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}
, function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
}
, function(t, e) {
    t.exports = {}
}
, function(t, e, n) {
    var i = n(29)
      , r = n(30);
    t.exports = function(t) {
        return i(r(t))
    }
}
, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}
, function(t, e, n) {
    n(74);
    for (var i = n(1), r = n(9), o = n(12), s = n(0)("toStringTag"), a = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < a.length; c++) {
        var l = a[c]
          , u = i[l]
          , d = u && u.prototype;
        d && !d[s] && r(d, s, l),
        o[l] = o.Array
    }
}
, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
}
, function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t)
            throw TypeError(t + " is not a function!");
        return t
    }
}
, function(t, e, n) {
    var i = n(4).f
      , r = n(11)
      , o = n(0)("toStringTag");
    t.exports = function(t, e, n) {
        t && !r(t = n ? t : t.prototype, o) && i(t, o, {
            configurable: !0,
            value: e
        })
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(81)(!0);
    n(31)(String, "String", function(t) {
        this._t = String(t),
        this._i = 0
    }, function() {
        var t, e = this._t, n = this._i;
        return n >= e.length ? {
            value: void 0,
            done: !0
        } : (t = i(e, n),
        this._i += t.length,
        {
            value: t,
            done: !1
        })
    })
}
, function(t, e, n) {
    var i = n(10)
      , r = n(91)
      , o = n(92)
      , s = n(5)
      , a = n(34)
      , c = n(53)
      , l = {}
      , u = {}
      , e = t.exports = function(t, e, n, d, h) {
        var f, p, v, m, g = h ? function() {
            return t
        }
        : c(t), y = i(n, d, e ? 2 : 1), w = 0;
        if ("function" != typeof g)
            throw TypeError(t + " is not iterable!");
        if (o(g)) {
            for (f = a(t.length); f > w; w++)
                if ((m = e ? y(s(p = t[w])[0], p[1]) : y(t[w])) === l || m === u)
                    return m
        } else
            for (v = g.call(t); !(p = v.next()).done; )
                if ((m = r(v, y, p.value, e)) === l || m === u)
                    return m
    }
    ;
    e.BREAK = l,
    e.RETURN = u
}
, function(t, e, n) {
    t.exports = {
        default: n(73),
        __esModule: !0
    }
}
, function(t, e) {
    t.exports = !0
}
, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}
, function(t, e, n) {
    var i = n(5)
      , r = n(77)
      , o = n(38)
      , s = n(36)("IE_PROTO")
      , a = function() {}
      , c = function() {
        var t, e = n(32)("iframe"), i = o.length;
        for (e.style.display = "none",
        n(52).appendChild(e),
        e.src = "javascript:",
        t = e.contentWindow.document,
        t.open(),
        t.write("<script>document.F=Object<\/script>"),
        t.close(),
        c = t.F; i--; )
            delete c.prototype[o[i]];
        return c()
    };
    t.exports = Object.create || function(t, e) {
        var n;
        return null !== t ? (a.prototype = i(t),
        n = new a,
        a.prototype = null,
        n[s] = t) : n = c(),
        void 0 === e ? n : r(n, e)
    }
}
, function(t, e, n) {
    var i = n(51)
      , r = n(38);
    t.exports = Object.keys || function(t) {
        return i(t, r)
    }
}
, function(t, e) {
    var n = 0
      , i = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36))
    }
}
, function(t, e, n) {
    var i = n(16)
      , r = n(0)("toStringTag")
      , o = "Arguments" == i(function() {
        return arguments
    }())
      , s = function(t, e) {
        try {
            return t[e]
        } catch (t) {}
    };
    t.exports = function(t) {
        var e, n, a;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = s(e = Object(t), r)) ? n : o ? i(e) : "Object" == (a = i(e)) && "function" == typeof e.callee ? "Arguments" : a
    }
}
, function(t, e) {
    e.f = {}.propertyIsEnumerable
}
, function(t, e, n) {
    var i = n(16);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == i(t) ? t.split("") : Object(t)
    }
}
, function(t, e) {
    t.exports = function(t) {
        if (void 0 == t)
            throw TypeError("Can't call method on  " + t);
        return t
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(22)
      , r = n(3)
      , o = n(50)
      , s = n(9)
      , a = n(11)
      , c = n(12)
      , l = n(76)
      , u = n(18)
      , d = n(80)
      , h = n(0)("iterator")
      , f = !([].keys && "next"in [].keys())
      , p = function() {
        return this
    };
    t.exports = function(t, e, n, v, m, g, y) {
        l(n, e, v);
        var w, b, _, x = function(t) {
            if (!f && t in S)
                return S[t];
            switch (t) {
            case "keys":
            case "values":
                return function() {
                    return new n(this,t)
                }
            }
            return function() {
                return new n(this,t)
            }
        }, T = e + " Iterator", C = "values" == m, E = !1, S = t.prototype, k = S[h] || S["@@iterator"] || m && S[m], P = k || x(m), $ = m ? C ? x("entries") : P : void 0, M = "Array" == e ? S.entries || k : k;
        if (M && (_ = d(M.call(new t))) !== Object.prototype && _.next && (u(_, T, !0),
        i || a(_, h) || s(_, h, p)),
        C && k && "values" !== k.name && (E = !0,
        P = function() {
            return k.call(this)
        }
        ),
        i && !y || !f && !E && S[h] || s(S, h, P),
        c[e] = P,
        c[T] = p,
        m)
            if (w = {
                values: C ? P : x("values"),
                keys: g ? P : x("keys"),
                entries: $
            },
            y)
                for (b in w)
                    b in S || o(S, b, w[b]);
            else
                r(r.P + r.F * (f || E), e, w);
        return w
    }
}
, function(t, e, n) {
    var i = n(6)
      , r = n(1).document
      , o = i(r) && i(r.createElement);
    t.exports = function(t) {
        return o ? r.createElement(t) : {}
    }
}
, function(t, e, n) {
    var i = n(6);
    t.exports = function(t, e) {
        if (!i(t))
            return t;
        var n, r;
        if (e && "function" == typeof (n = t.toString) && !i(r = n.call(t)))
            return r;
        if ("function" == typeof (n = t.valueOf) && !i(r = n.call(t)))
            return r;
        if (!e && "function" == typeof (n = t.toString) && !i(r = n.call(t)))
            return r;
        throw TypeError("Can't convert object to primitive value")
    }
}
, function(t, e, n) {
    var i = n(35)
      , r = Math.min;
    t.exports = function(t) {
        return t > 0 ? r(i(t), 9007199254740991) : 0
    }
}
, function(t, e) {
    var n = Math.ceil
      , i = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? i : n)(t)
    }
}
, function(t, e, n) {
    var i = n(37)("keys")
      , r = n(26);
    t.exports = function(t) {
        return i[t] || (i[t] = r(t))
    }
}
, function(t, e, n) {
    var i = n(1)
      , r = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
    t.exports = function(t) {
        return r[t] || (r[t] = {})
    }
}
, function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}
, function(t, e, n) {
    var i = n(30);
    t.exports = function(t) {
        return Object(i(t))
    }
}
, function(t, e) {}
, function(t, e, n) {
    var i = n(9);
    t.exports = function(t, e, n) {
        for (var r in e)
            n && t[r] ? t[r] = e[r] : i(t, r, e[r]);
        return t
    }
}
, function(t, e) {
    t.exports = function(t, e, n, i) {
        if (!(t instanceof e) || void 0 !== i && i in t)
            throw TypeError(n + ": incorrect invocation!");
        return t
    }
}
, function(t, e, n) {
    var i = n(26)("meta")
      , r = n(6)
      , o = n(11)
      , s = n(4).f
      , a = 0
      , c = Object.isExtensible || function() {
        return !0
    }
      , l = !n(14)(function() {
        return c(Object.preventExtensions({}))
    })
      , u = function(t) {
        s(t, i, {
            value: {
                i: "O" + ++a,
                w: {}
            }
        })
    }
      , d = function(t, e) {
        if (!r(t))
            return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
        if (!o(t, i)) {
            if (!c(t))
                return "F";
            if (!e)
                return "E";
            u(t)
        }
        return t[i].i
    }
      , h = function(t, e) {
        if (!o(t, i)) {
            if (!c(t))
                return !0;
            if (!e)
                return !1;
            u(t)
        }
        return t[i].w
    }
      , f = function(t) {
        return l && p.NEED && c(t) && !o(t, i) && u(t),
        t
    }
      , p = t.exports = {
        KEY: i,
        NEED: !1,
        fastKey: d,
        getWeak: h,
        onFreeze: f
    }
}
, function(t, e, n) {
    e.f = n(0)
}
, function(t, e, n) {
    var i = n(1)
      , r = n(2)
      , o = n(22)
      , s = n(44)
      , a = n(4).f;
    t.exports = function(t) {
        var e = r.Symbol || (r.Symbol = o ? {} : i.Symbol || {});
        "_" == t.charAt(0) || t in e || a(e, t, {
            value: s.f(t)
        })
    }
}
, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        var e, n;
        this.promise = new t(function(t, i) {
            if (void 0 !== e || void 0 !== n)
                throw TypeError("Bad Promise constructor");
            e = t,
            n = i
        }
        ),
        this.resolve = r(e),
        this.reject = r(n)
    }
    var r = n(17);
    t.exports.f = function(t) {
        return new i(t)
    }
}
, function(t, e) {
    t.exports = function(t, e) {
        return {
            value: e,
            done: !!t
        }
    }
}
, function(t, e, n) {
    t.exports = !n(7) && !n(14)(function() {
        return 7 != Object.defineProperty(n(32)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}
, function(t, e, n) {
    t.exports = n(9)
}
, function(t, e, n) {
    var i = n(11)
      , r = n(13)
      , o = n(78)(!1)
      , s = n(36)("IE_PROTO");
    t.exports = function(t, e) {
        var n, a = r(t), c = 0, l = [];
        for (n in a)
            n != s && i(a, n) && l.push(n);
        for (; e.length > c; )
            i(a, n = e[c++]) && (~o(l, n) || l.push(n));
        return l
    }
}
, function(t, e, n) {
    var i = n(1).document;
    t.exports = i && i.documentElement
}
, function(t, e, n) {
    var i = n(27)
      , r = n(0)("iterator")
      , o = n(12);
    t.exports = n(2).getIteratorMethod = function(t) {
        if (void 0 != t)
            return t[r] || t["@@iterator"] || o[i(t)]
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(1)
      , r = n(2)
      , o = n(4)
      , s = n(7)
      , a = n(0)("species");
    t.exports = function(t) {
        var e = "function" == typeof r[t] ? r[t] : i[t];
        s && e && !e[a] && o.f(e, a, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}
, function(t, e, n) {
    var i = n(6);
    t.exports = function(t, e) {
        if (!i(t) || t._t !== e)
            throw TypeError("Incompatible receiver, " + e + " required!");
        return t
    }
}
, function(t, e, n) {
    var i = n(16);
    t.exports = Array.isArray || function(t) {
        return "Array" == i(t)
    }
}
, function(t, e, n) {
    var i = n(51)
      , r = n(38).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
        return i(t, r)
    }
}
, function(t, e, n) {
    var i = n(5)
      , r = n(17)
      , o = n(0)("species");
    t.exports = function(t, e) {
        var n, s = i(t).constructor;
        return void 0 === s || void 0 == (n = i(s)[o]) ? e : r(n)
    }
}
, function(t, e, n) {
    var i, r, o, s = n(10), a = n(120), c = n(52), l = n(32), u = n(1), d = u.process, h = u.setImmediate, f = u.clearImmediate, p = u.MessageChannel, v = u.Dispatch, m = 0, g = {}, y = function() {
        var t = +this;
        if (g.hasOwnProperty(t)) {
            var e = g[t];
            delete g[t],
            e()
        }
    }, w = function(t) {
        y.call(t.data)
    };
    h && f || (h = function(t) {
        for (var e = [], n = 1; arguments.length > n; )
            e.push(arguments[n++]);
        return g[++m] = function() {
            a("function" == typeof t ? t : Function(t), e)
        }
        ,
        i(m),
        m
    }
    ,
    f = function(t) {
        delete g[t]
    }
    ,
    "process" == n(16)(d) ? i = function(t) {
        d.nextTick(s(y, t, 1))
    }
    : v && v.now ? i = function(t) {
        v.now(s(y, t, 1))
    }
    : p ? (r = new p,
    o = r.port2,
    r.port1.onmessage = w,
    i = s(o.postMessage, o, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (i = function(t) {
        u.postMessage(t + "", "*")
    }
    ,
    u.addEventListener("message", w, !1)) : i = "onreadystatechange"in l("script") ? function(t) {
        c.appendChild(l("script")).onreadystatechange = function() {
            c.removeChild(this),
            y.call(t)
        }
    }
    : function(t) {
        setTimeout(s(y, t, 1), 0)
    }
    ),
    t.exports = {
        set: h,
        clear: f
    }
}
, function(t, e) {
    t.exports = function(t) {
        try {
            return {
                e: !1,
                v: t()
            }
        } catch (t) {
            return {
                e: !0,
                v: t
            }
        }
    }
}
, function(t, e, n) {
    var i = n(5)
      , r = n(6)
      , o = n(47);
    t.exports = function(t, e) {
        if (i(t),
        r(e) && e.constructor === t)
            return e;
        var n = o.f(t);
        return (0,
        n.resolve)(e),
        n.promise
    }
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function r() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        M(document.querySelectorAll(".anim")),
        hotspotlookatlist[globalConfig.currentAngle].forEach(function(e) {
            var n = e.Seq;
            e.HotspotList.forEach(function(e) {
                if (!S.interface.hotids || -1 !== S.interface.hotids.indexOf(e.Id)) {
                    var i = E[e.Id].Htype
                      , r = e.Ath * S.interface.scale_rate - S.state.size / 2 + "px"
                      , o = e.Atv * S.interface.scale_rate - S.state.size / 2 + "px"
                      , s = n === t ? "block" : "none"
                      , a = document.createElement("div");
                    a.className = "anim anim_" + i;
                    var c = E[e.Id].ColorValue;
                    if (c) {
                        var l = "url('//x.autoimg.cn/vrcar/common/assets/newui/anim-point-" + c.toLowerCase() + ".png')";
                        console.log(l)
                        a.style.backgroundImage = l
                    }
                    a.style.left = r,
                    a.style.top = o,
                    a.style.display = s,
                    a.style.transform = "scale(" + S.interface.anchorRadio + ")",
                    a.setAttribute("hs_id", e.Id),
                    a.setAttribute("hs_type", i),
                    P("threesixty_images").getElementsByTagName("li")[n].appendChild(a)
                }
            })
        })
    }
    function o(t) {
        var e = requestAnimationFrame(o);
        x.default.update(t) || cancelAnimationFrame(e)
    }
    function s(t, e, n, i) {
        l(n, i, t, "text"),
        $("#text-play-box").removeClass("text-play-box-m"),
        $("#text-layer").css("display", "block"),
        $("#text-layer").attr("hotname", t),
        $("#text-layer").attr("hotid", i);
        var r = new Date;
        $("#text-layer").attr("opentime", r.getTime());
        var o = window.innerHeight
          , s = .75 * o
          , a = 16 / 9 * (s - 46);
        $(".text-play-box").width(a),
        $(".text-play-box").height(s),
        $("#text-title").html(t),
        $("#text-play").html(e)
    }
    function a(t, e, n, i) {
        l(n, i, t, "video");
        var r = AHVP.newPlayer({
            mid: e,
            container: "video-play",
            autostart: 1
        });
        r.addEventListener(AHVP.PLAYER_EVENT.PLAY_FINISH, function(t) {
            r.seek(0)
        }),
        $("#video-play-box").removeClass("video-play-box-m"),
        $("#video-layer").css("display", "block"),
        $("#video-layer").attr("hotname", t),
        $("#video-layer").attr("hotid", i);
        var o = new Date;
        $("#video-layer").attr("opentime", o.getTime());
        var s = window.innerHeight
          , a = .75 * s
          , c = 16 / 9 * (a - 46);
        $(".video-play-box").width(c),
        $(".video-play-box").height(a),
        $("#video-title").html(t)
    }
    function c(t, e, n, i) {
        $(".banner,.mask1,.banner2,.mask2").hide(),
        $(".car-bg-change").hide(),
        $("#cont").show(),
        $("#cont").attr("hotname", t),
        $("#cont").attr("hotid", i);
        var r = new Date;
        $("#cont").attr("opentime", r.getTime()),
        $(".gallery h4").html(t),
        T.removeAllSlides();
        for (var o = 0; o < e.length; o++)
            T.appendSlide("<div class='swiper-slide'><img class='swiper-lazy' data-src='" + e[o] + "' src=''><div class='swiper-lazy-preloader'></div></div>");
        d(),
        setTimeout(function() {
            T.onResize(),
            h()
        }, 100),
        l(n, i, t, "image")
    }
    function l(t, e, n, i) {
        if (b.default.isVRQuan) {
            $("#hide-div").trigger(C);
            var r = b.default.getCookie("isClicked" + e);
            $(document.body).append("<div class='anchor-praise'>\n                                    <div class='img-praise' ></div >\n                                    <div class='count-praise'>" + (r ? t + 1 : t) + "</div>\n                                </div >");
            var o = $(".anchor-praise .img-praise");
            r ? o.css("background-image", "url('//x.autoimg.cn/vrcar/common/assets/skinpng/icon-like2.png')") : (o.css("background-image", "url('//x.autoimg.cn/vrcar/common/assets/skinpng/icon-like.png')"),
            o.on(C, function() {
                sendClickEvent("vr_hotspotlike_click", "click", i, e, n, "", "", 0, 0, 0),
                $(".anchor-praise .count-praise").text(t + 1),
                o.css("background-image", "url('//x.autoimg.cn/vrcar/common/assets/skinpng/icon-like2.png')"),
                o.off(C),
                b.default.setCookie("isClicked" + e, 1),
                $.get("/api/likehotspot?id=" + e + "&type=ext")
            }))
        }
    }
    function u() {
        $("#show-div").trigger(C),
        $(".anchor-praise").remove()
    }
    function d() {
        var t = $("body").width()
          , e = $("body").height()
          , n = void 0
          , i = void 0
          , r = t / e;
        e > t ? (n = Math.round(.7 * t),
        i = Math.round(.7 * t * r)) : (n = Math.round(.7 * e * r),
        i = Math.round(.7 * e)),
        $(".gallery").css({
            top: (e - i) / 2 + "px",
            left: (t - n) / 2 + "px"
        }),
        $(".swiper-slide").eq(T.activeIndex).find("img").css({
            "max-width": n,
            "max-height": i
        }),
        $(".swiper-container").width(n),
        $(".swiper-container").height(i),
        $(".gallery-mask").width(t),
        $(".gallery-mask").height(e),
        $(".close-gallery-layer").css({
            left: t + "px",
            right: "auto",
            transform: "translate(-35px, 0)"
        }),
        T.onResize()
    }
    function h() {
        var t = $(".swiper-slide").eq(T.activeIndex).find("img")
          , e = t.width()
          , n = t.height()
          , i = $(".swiper-container").width()
          , r = $(".swiper-container").height()
          , o = (i - e) / 2 - 37
          , s = (r - n) / 2 - 38;
        $(".swiper-button-prev-box").css("left", o + "px"),
        $(".swiper-button-next-box").css("right", o + "px"),
        $(".swiper-pagination").css("bottom", s + "px"),
        $(".gallery h4").css("top", s + "px")
    }
    function f() {
        T = new Swiper(".swiper-container",{
            effect: "fade",
            fade: {
                crossFade: !0
            },
            pagination: ".swiper-pagination",
            paginationType: "fraction",
            slidesPerView: "1",
            lazyLoading: !0,
            lazyLoadingInPrevNext: !0,
            lazyLoadingInPrevNextAmount: 1,
            roundLengths: !0,
            simulateTouch: !1,
            prevButton: ".swiper-button-prev",
            nextButton: ".swiper-button-next",
            onSlideChangeStart: function() {
                h()
            },
            onLazyImageReady: function() {
                h()
            }
        })
    }
    function p() {
        $("#cont").hide(),
        u(),
        $(".banner,.mask1,.banner2,.mask2").show(),
        $(".car-bg-change").show();
        var t = $("#cont").attr("hotid")
          , e = $("#cont").attr("hotname")
          , n = $("#cont").attr("opentime")
          , i = new Date
          , r = i.getTime() - n;
        sendClickEvent("vr_hotspot_duration", "click", "image", t, e, "", "", 0, 0, r)
    }
    function v() {
        $("#video-layer").css("display", "none"),
        $("#video-play").html(""),
        u();
        var t = $("#video-layer").attr("hotid")
          , e = $("#video-layer").attr("hotname")
          , n = $("#video-layer").attr("opentime")
          , i = new Date
          , r = i.getTime() - n;
        sendClickEvent("vr_hotspot_duration", "click", "video", t, e, "", "", 0, 0, r)
    }
    function m() {
        $("#text-layer").css("display", "none"),
        $("#text-play").html(""),
        u();
        var t = $("#text-layer").attr("hotid")
          , e = $("#text-layer").attr("hotname")
          , n = $("#text-layer").attr("opentime")
          , i = new Date
          , r = i.getTime() - n;
        sendClickEvent("vr_hotspot_duration", "click", "text", t, e, "", "", 0, 0, r)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var g = n(21)
      , y = i(g);
    n(136);
    var w = n(8)
      , b = i(w)
      , _ = n(137)
      , x = i(_)
      , T = null
      , C = b.default.clickEvent
      , E = {};
    hotspotlist.forEach(function(t) {
        E[t.Id.toString()] = t
    });
    var S = {
        state: {
            id: 0,
            size: 100,
            count: 52,
            current: 0,
            scale: 1,
            next: function() {
                var t = this.current++;
                return this.current >= this.count && (this.current = 0),
                100 * t
            }
        },
        info: {
            quadrant: 1,
            transform: "",
            scale: 1,
            width: 260,
            height: 130
        },
        line: {
            scale: 1,
            width: 100,
            height: 35
        },
        interface: {
            hotids: null,
            scale_rate: 1,
            anchorRadio: 1
        },
        parent: null
    }
      , k = b.default.getByClassAll
      , P = b.default.getByClass
      , M = (b.default.getById,
    b.default.remove)
      , I = b.default.numToPx
      , F = k("anim")
      , O = function t() {
        S.state.id = window.requestAnimationFrame(t);
        for (var e = S.state.next() + "px", n = 0, i = F.length; n < i; n++)
            F[n].style.backgroundPositionY = e
    };
    O();
    var A = function(t, e, n, i) {
        return t > e && n < i ? 1 : t <= e && n < i ? 2 : t <= e && n >= i ? 3 : t > e && n >= i ? 4 : void 0
    }
      , L = function(t) {
        switch (t) {
        case 1:
            return "rotateY(180deg) rotateX(180deg)";
        case 2:
            return "rotateX(180deg)";
        case 3:
            return "";
        case 4:
            return "rotateY(180deg)"
        }
    }
      , D = function t() {
        var e = this.offsetLeft
          , n = .8 * window.innerWidth - e
          , i = this.offsetTop
          , r = .5 * window.innerWidth - i;
        S.info.quadrant = A(e, n, i, r),
        S.info.transform = L(S.info.quadrant);
        var s = this.getAttribute("hs_id");
        S.parent = this.parentNode;
        var a = S.parent.getElementsByClassName("anim")
          , c = !0
          , l = !1
          , u = void 0;
        try {
            for (var d, h = (0,
            y.default)(a); !(c = (d = h.next()).done); c = !0) {
                var f = d.value;
                f.getAttribute("hs_id") !== s && (f.style.zIndex = 800)
            }
        } catch (t) {
            l = !0,
            u = t
        } finally {
            try {
                !c && h.return && h.return()
            } finally {
                if (l)
                    throw u
            }
        }
        this.style.transform = "scale(" + S.state.scale + ") " + S.info.transform,
        $("#bg-div").off(C, ".anim", t);
        var p = document.createElement("div");
        p.className = "line";
        var v = E[s].ColorValue;
        if (v) {
            var m = "url('//x.autoimg.cn/vrcar/common/assets/newui/line-" + v.toLowerCase() + ".png')";
            p.style.backgroundImage = m
        }
        this.appendChild(p),
        new x.default.Tween({
            width: 0
        }).to({
            width: 32 * S.line.scale
        }, 160).to({
            width: 100 * S.line.scale
        }, 400).easing(x.default.Easing.Linear.None).onUpdate(function() {
            p.style.width = I(this._object.width)
        }).onComplete(function() {
            setTimeout(function() {
                j()
            }, 0)
        }).start(),
        o(),
        window.cancelAnimationFrame(S.state.id),
        setTimeout(function() {
            $(document).on(C, N)
        }, 0);
        var g = this.getAttribute("hs_type")
          , w = E[s].Title;
        "video" === g && sendClickEvent("vr_video_preview_click", "click", "video", s, w, "", "", 0, 0, 0),
        "text" === g && sendClickEvent("vr_text_preview_click", "click", "text", s, w, "", "", 0, 0, 0),
        "image" === g && sendClickEvent("vr_image_preview_click", "click", "image", s, w, "", "", 0, 0, 0)
    }
      , N = function t() {
        $(".anim").css("z-index", 900),
        $(document).off(C, t),
        $(".anim .line").remove(),
        $(".anim .info").remove(),
        setTimeout(function() {
            $("#bg-div").on(C, ".anim", D),
            O()
        }, 0)
    }
      , j = function() {
        var t = $(".line")
          , e = t.parent().attr("hs_id")
          , n = E[e].Title.replace("$$", "<br>")
          , i = t.parent().attr("hs_type")
          , r = E[e].ShowStyle || "default"
          , s = "default" === r ? "" : "-" + r
          , a = "//x.autoimg.cn/vrcar/common/assets/newui/text" + s + ".png"
          , c = "text" === i ? a : E[e].Preview
          , l = "video" === i ? "<div class='img1'></div>" : "";
        t.parent().append("<div class='info " + r + "'><div class='text'><div class='content'>" + n + "</div></div><div class='img'></div>" + l + "</div>"),
        $(".info .img").css({
            "background-image": "url('" + c + "')"
        });
        var u = {
            scale: 1,
            opacity: 1
        }
          , d = new x.default.Tween(u).to({
            scale: 1.05,
            opacity: .8
        }, 200).easing(x.default.Easing.Linear.None).onUpdate(function() {
            $(".info").css({
                transform: "scale(" + this._object.scale + ") " + S.info.transform,
                opacity: this._object.opacity
            })
        })
          , h = new x.default.Tween(u).to({
            scale: 1,
            opacity: 1
        }, 200).easing(x.default.Easing.Linear.None).onUpdate(function() {
            $(".info").css({
                transform: "scale(" + this._object.scale + ") " + S.info.transform,
                opacity: this._object.opacity
            })
        });
        d.chain(h),
        d.start(),
        o()
    }
      , W = function(t) {
        t.stopPropagation();
        var e = $(this).parent().attr("hs_type")
          , n = $(this).parent().attr("hs_id")
          , i = E[n].Title
          , r = E[n].Hlink
          , o = E[n].LikeCount;
        "video" === e && (sendClickEvent("vr_video_click", "click", "video", n, i, "", "", 0, 0, 0),
        a(i, r, o, n)),
        "text" === e && (sendClickEvent("vr_text_click", "click", "text", n, i, "", "", 0, 0, 0),
        s(i, r, o, n)),
        "image" === e && (sendClickEvent("vr_image_click", "click", "image", n, i, "", "", 0, 0, 0),
        c(i, r.split("|"), o, n))
    };
    $("#bg-div").on(C, ".anim", D),
    $("#bg-div").on(C, ".anim .info", W),
    function() {
        $("<div class='gallery-mask'></div>\n        <i class='close-gallery-layer'></i>\n        <div class='gallery'>\n        <h4></h4>\n        <div class='swiper-container'>\n        <div class='swiper-wrapper'></div>\n        </div>\n        <div class='swiper-pagination'></div>\n        <div class='swiper-button-prev-box'><div class='swiper-button-prev swiper-button-white'></div></div>\n        <div class='swiper-button-next-box'><div class='swiper-button-next swiper-button-white'></div></div>\n        </div>").appendTo($("#cont")),
        f(),
        $(".gallery-mask,.close-gallery-layer").on(C, function(t) {
            t.preventDefault(),
            p()
        })
    }(),
    $("#video-layer").on(C, ".mask, .close-video-layer", function(t) {
        t.preventDefault(),
        v()
    }),
    $("#text-layer").on(C, ".mask, .close-text-layer,#text-play", function(t) {
        t.preventDefault(),
        m()
    }),
    e.default = {
        addAnchor: r,
        interface: S.interface,
        containerSize: d,
        affixSize: h,
        swiper: T
    }
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function r() {
        var t = window.innerWidth / 1920;
        return t > 1 ? 1 : t < .8 ? .8 : t
    }
    function o() {
        var t = document.documentElement.clientWidth
          , e = document.documentElement.clientHeight;
        j.style.width = D(t),
        j.style.height = D(e);
        var n = A("mythreesixty");
        n.style.width = D(.8 * t),
        n.style.height = D(.5 * t),
        n.style.marginTop = D(.8 * (e - .5 * t) / 2),
        E.default.interface.scale_rate = .8 * t / 1200,
        E.default.interface.anchorRadio = r();
        var i = L("current-image");
        if (i) {
            var o = i.parentNode;
            E.default.addAnchor(T.default.indexInSiblings(o))
        }
        "block" === A("cont").style.display && (E.default.containerSize(),
        setTimeout(function() {
            E.default.swiper.onResize(),
            E.default.affixSize()
        }, 100))
    }
    function s() {
        j.style.width = D(P),
        j.style.height = D(M),
        E.default.interface.scale_rate = .8 * P / 1200
    }
    function a() {
        var t = A("title1-div")
          , e = A("title2-div");
        t.innerHTML = globalConfig.title1,
        e.innerHTML = globalConfig.title2;
        var n = N(t, "width")
          , i = N(e, "width")
          , r = 1.2 * Math.max(n, i)
          , o = -10 * r / 382
          , s = A("title-div");
        s.style.width = D(r),
        s.style.opacity = .4;
        var a = k("returnurl");
        if (a && "app" !== globalEnv.src) {
            var c = A("back-div");
            c.style.display = "block",
            c.onclick = function() {
                window.location.href = a
            }
            ,
            s.style.left = "5rem"
        } else
            s.style.left = "1.75rem";
        t.style.width = D(r),
        t.style.marginLeft = D(o),
        t.style.opacity = 1,
        e.style.width = D(r),
        e.style.marginLeft = D(o),
        e.style.opacity = 1
    }
    function c() {
        return "pc" == globalEnv.src ? 3 : "m" == globalEnv.src ? 2 : "app" == globalEnv.src && globalEnv.isAndroid ? 1 : "app" == globalEnv.src && globalEnv.isiPhone ? 0 : void 0
    }
    function l() {
        T.default.ajax({
            method: "get",
            url: "json/visitext.json"
        })
    }
    function u() {
        if (T.default.isVRQuan) {
            var t = k("basecolor");
            colorlist.forEach(function(e, n) {
                t === e.BaseColorName && (globalConfig.defaultColor = n)
            }),
            T.default.ajax({
                method: "get",
                url: "//rcm.autohome.com.cn/rcm/autovr/pavilion",
                data: {
                    user_id: k("user_id"),
                    user_type: k("user_type"),
                    uid: k("uid"),
                    data_ext: 1,
                    data_type: 0,
                    series: globalConfig.seriesId,
                    spec: globalConfig.spec,
                    source: c()
                },
                success: function(t) {
                    console.log("提交锚点推荐请求成功");
                    var e = JSON.parse(t);
                    e.result.list && (F = e.result.list.map(function(t) {
                        return t.biz_id
                    }),
                    E.default.interface.hotids = F)
                },
                error: function() {
                    console.log("提交锚点推荐请求失败")
                }
            })
        }
    }
    function d() {
        S = {
            parentClassName: ".car-bg-group",
            models: "",
            title: globalConfig.title,
            defaultColor: globalConfig.defaultColor || 0,
            hasOver: !0,
            globalConfig: globalConfig,
            colors: [],
            loadingTime: 3e3
        },
        colorlist.forEach(function(t, e) {
            S.colors.push({
                BaseColorName: t.BaseColorName,
                cName: t.ColorName,
                sName: t.BaseColorName,
                eName: e,
                rgb: "#" + t.ColorValue
            })
        }),
        $.fn.VrPlugin(S)
    }
    function h() {
        function t(t) {
            "price-close" === t.data && (A("price-div").style.display = "none",
            b())
        }
        switch (O) {
        case "qxk":
            f();
            break;
        case "2sc":
            p();
            break;
        case "dealer4s":
            v();
            break;
        case "vr_2017guangzhou":
        case "brand":
            m();
            break;
        default:
            g()
        }
        window.addEventListener("message", t, !1)
    }
    function f() {
        var t = k("cityId")
          , e = k("src")
          , n = k("sourcename")
          , i = k("specId");
        T.default.price_src = "//m.che168.com/financial/vr/askprice.html?specid=" + i + "&cityId=" + t + "&src=" + e + "&sourcename=" + n + "#pvareaid=2042314"
    }
    function p() {
        var t = k("dealerId")
          , e = k("infoid")
          , n = k("price")
          , i = k("src");
        T.default.price_src = "//m.che168.com/vr/askprice.html?infoid=" + e + "&dealerid=" + t + "&price=" + n + "&src=" + i
    }
    function v() {
        var t = k("dealerId")
          , e = k("frompvareaid")
          , n = k("siteid")
          , i = e || k("pvareaid");
        T.default.price_src = "//dealer.m.autohome.com.cn/quanjingneishi/order_" + globalConfig.seriesId + "_" + globalConfig.specId + "_1.html?dealerid=" + t + "&eid=2|1211004|72|102|203475|301135&pvareaid=" + i + "&siteid=" + n
    }
    function m() {
        var t = k("sceid")
          , e = k("exhid")
          , n = k("pvareaid");
        T.default.price_src = "//dealer.m.autohome.com.cn/quanjingneishi/order_" + globalConfig.seriesId + "_" + globalConfig.specId + "_1.html?sceid=" + t + "&exhid=" + e + "&pvareaid=" + n
    }
    function g() {
        var t = ""
          , e = "";
        switch (globalEnv.src) {
        case "pc":
            t = "2594425",
            e = "384";
            break;
        case "m":
            t = "2594423",
            e = "382";
            break;
        case "app":
            t = "2594424",
            e = "383";
            break;
        default:
            t = "2594423",
            e = "382"
        }
        T.default.price_src = "//dealer.m.autohome.com.cn/vr/order_" + globalConfig.seriesId + "_" + globalConfig.specId + ".html?pvareaid=" + t + "&siteid=" + e
    }
    function y() {
        var t = A("feedback-post")
          , e = A("feedback-text");
        t.addEventListener(I, function() {
            "" !== e.value && "请在此输入您的问题和建议" !== e.value && (T.default.isPopWindows = !1,
            A("feedback").style.display = "none",
            b(),
            T.default.ajax({
                method: "post",
                url: "/api/feedback",
                data: {
                    alias: globalConfig.id,
                    des: e.value,
                    src: globalEnv.src,
                    category: globalConfig.category,
                    isATHMApp: globalEnv.isATHMApp,
                    isAndroid: globalEnv.isAndroid,
                    isiPhone: globalEnv.isiPhone,
                    isiFrame: globalEnv.isiFrame
                },
                success: function(t) {
                    e.value = "",
                    w()
                },
                error: function() {
                    console.log("feedback error")
                }
            }))
        }),
        A("feedback-cancel").addEventListener(I, function() {
            T.default.isPopWindows = !1,
            A("feedback").style.display = "none",
            b(),
            e.innerHTML = ""
        }),
        L("close-dialog-box").addEventListener(I, function() {
            T.default.isPopWindows = !1,
            A("feedback").style.display = "none",
            b()
        }),
        L("screen-mask").addEventListener(I, function() {
            T.default.isPopWindows = !1,
            A("feedback").style.display = "none",
            b()
        })
    }
    function w() {
        var t = A("toast-success");
        t.style.display = "block",
        setTimeout(function() {
            t.style.display = "none"
        }, 3e3)
    }
    function b() {
        L("banner").style.display = "block",
        L("mask1").style.display = "block"
    }
    function _() {
        s(),
        a(),
        l(),
        u(),
        d(),
        h(),
        y()
    }
    n(64),
    n(65),
    n(66),
    n(67),
    n(68),
    n(69),
    n(70),
    n(71),
    n(72);
    var x = n(8)
      , T = i(x);
    n(105);
    var C = n(62)
      , E = i(C);
    n(139);
    var S = null;
    window.oncontextmenu = function(t) {
        t.preventDefault()
    }
    ,
    T.default.notNeedTips || (T.default.isLocalStorageNameSupported ? localStorage.setItem("swipetips", 1) : T.default.setCookie("swipetips", 1, 360));
    var k = T.default.getQueryString
      , P = window.innerWidth
      , M = window.innerHeight
      , I = T.default.clickEvent
      , F = null
      , O = k("busi")
      , A = T.default.getById
      , L = T.default.getByClass
      , D = T.default.numToPx
      , N = T.default.computedStyle
      , j = A("bg-div");
    globalConfig.currentAngle = "Hori",
    globalConfig.addAnchor = E.default.addAnchor,
    E.default.interface.anchorRadio = r(),
    E.default.interface.scale_rate = 1,
    window.onresize = o,
    "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? _() : document.addEventListener("DOMContentLoaded", _)
}
, function(t, e) {}
, function(t, e) {}
, function(t, e) {}
, function(t, e) {}
, function(t, e) {}
, function(t, e) {}
, function(t, e) {}
, function(t, e) {}
, function(t, e) {}
, function(t, e, n) {
    n(15),
    n(19),
    t.exports = n(82)
}
, function(t, e, n) {
    "use strict";
    var i = n(75)
      , r = n(48)
      , o = n(12)
      , s = n(13);
    t.exports = n(31)(Array, "Array", function(t, e) {
        this._t = s(t),
        this._i = 0,
        this._k = e
    }, function() {
        var t = this._t
          , e = this._k
          , n = this._i++;
        return !t || n >= t.length ? (this._t = void 0,
        r(1)) : "keys" == e ? r(0, n) : "values" == e ? r(0, t[n]) : r(0, [n, t[n]])
    }, "values"),
    o.Arguments = o.Array,
    i("keys"),
    i("values"),
    i("entries")
}
, function(t, e) {
    t.exports = function() {}
}
, function(t, e, n) {
    "use strict";
    var i = n(24)
      , r = n(23)
      , o = n(18)
      , s = {};
    n(9)(s, n(0)("iterator"), function() {
        return this
    }),
    t.exports = function(t, e, n) {
        t.prototype = i(s, {
            next: r(1, n)
        }),
        o(t, e + " Iterator")
    }
}
, function(t, e, n) {
    var i = n(4)
      , r = n(5)
      , o = n(25);
    t.exports = n(7) ? Object.defineProperties : function(t, e) {
        r(t);
        for (var n, s = o(e), a = s.length, c = 0; a > c; )
            i.f(t, n = s[c++], e[n]);
        return t
    }
}
, function(t, e, n) {
    var i = n(13)
      , r = n(34)
      , o = n(79);
    t.exports = function(t) {
        return function(e, n, s) {
            var a, c = i(e), l = r(c.length), u = o(s, l);
            if (t && n != n) {
                for (; l > u; )
                    if ((a = c[u++]) != a)
                        return !0
            } else
                for (; l > u; u++)
                    if ((t || u in c) && c[u] === n)
                        return t || u || 0;
            return !t && -1
        }
    }
}
, function(t, e, n) {
    var i = n(35)
      , r = Math.max
      , o = Math.min;
    t.exports = function(t, e) {
        return t = i(t),
        t < 0 ? r(t + e, 0) : o(t, e)
    }
}
, function(t, e, n) {
    var i = n(11)
      , r = n(39)
      , o = n(36)("IE_PROTO")
      , s = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) {
        return t = r(t),
        i(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
    }
}
, function(t, e, n) {
    var i = n(35)
      , r = n(30);
    t.exports = function(t) {
        return function(e, n) {
            var o, s, a = String(r(e)), c = i(n), l = a.length;
            return c < 0 || c >= l ? t ? "" : void 0 : (o = a.charCodeAt(c),
            o < 55296 || o > 56319 || c + 1 === l || (s = a.charCodeAt(c + 1)) < 56320 || s > 57343 ? t ? a.charAt(c) : o : t ? a.slice(c, c + 2) : s - 56320 + (o - 55296 << 10) + 65536)
        }
    }
}
, function(t, e, n) {
    var i = n(5)
      , r = n(53);
    t.exports = n(2).getIterator = function(t) {
        var e = r(t);
        if ("function" != typeof e)
            throw TypeError(t + " is not iterable!");
        return i(e.call(t))
    }
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0;
    var r = n(84)
      , o = i(r)
      , s = n(21)
      , a = i(s);
    e.default = function() {
        function t(t, e) {
            var n = []
              , i = !0
              , r = !1
              , o = void 0;
            try {
                for (var s, c = (0,
                a.default)(t); !(i = (s = c.next()).done) && (n.push(s.value),
                !e || n.length !== e); i = !0)
                    ;
            } catch (t) {
                r = !0,
                o = t
            } finally {
                try {
                    !i && c.return && c.return()
                } finally {
                    if (r)
                        throw o
                }
            }
            return n
        }
        return function(e, n) {
            if (Array.isArray(e))
                return e;
            if ((0,
            o.default)(Object(e)))
                return t(e, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
}
, function(t, e, n) {
    t.exports = {
        default: n(85),
        __esModule: !0
    }
}
, function(t, e, n) {
    n(15),
    n(19),
    t.exports = n(86)
}
, function(t, e, n) {
    var i = n(27)
      , r = n(0)("iterator")
      , o = n(12);
    t.exports = n(2).isIterable = function(t) {
        var e = Object(t);
        return void 0 !== e[r] || "@@iterator"in e || o.hasOwnProperty(i(e))
    }
}
, function(t, e, n) {
    t.exports = {
        default: n(88),
        __esModule: !0
    }
}
, function(t, e, n) {
    n(40),
    n(19),
    n(15),
    n(89),
    n(97),
    n(100),
    n(102),
    t.exports = n(2).Map
}
, function(t, e, n) {
    "use strict";
    var i = n(90)
      , r = n(55);
    t.exports = n(93)("Map", function(t) {
        return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        get: function(t) {
            var e = i.getEntry(r(this, "Map"), t);
            return e && e.v
        },
        set: function(t, e) {
            return i.def(r(this, "Map"), 0 === t ? 0 : t, e)
        }
    }, i, !0)
}
, function(t, e, n) {
    "use strict";
    var i = n(4).f
      , r = n(24)
      , o = n(41)
      , s = n(10)
      , a = n(42)
      , c = n(20)
      , l = n(31)
      , u = n(48)
      , d = n(54)
      , h = n(7)
      , f = n(43).fastKey
      , p = n(55)
      , v = h ? "_s" : "size"
      , m = function(t, e) {
        var n, i = f(e);
        if ("F" !== i)
            return t._i[i];
        for (n = t._f; n; n = n.n)
            if (n.k == e)
                return n
    };
    t.exports = {
        getConstructor: function(t, e, n, l) {
            var u = t(function(t, i) {
                a(t, u, e, "_i"),
                t._t = e,
                t._i = r(null),
                t._f = void 0,
                t._l = void 0,
                t[v] = 0,
                void 0 != i && c(i, n, t[l], t)
            });
            return o(u.prototype, {
                clear: function() {
                    for (var t = p(this, e), n = t._i, i = t._f; i; i = i.n)
                        i.r = !0,
                        i.p && (i.p = i.p.n = void 0),
                        delete n[i.i];
                    t._f = t._l = void 0,
                    t[v] = 0
                },
                delete: function(t) {
                    var n = p(this, e)
                      , i = m(n, t);
                    if (i) {
                        var r = i.n
                          , o = i.p;
                        delete n._i[i.i],
                        i.r = !0,
                        o && (o.n = r),
                        r && (r.p = o),
                        n._f == i && (n._f = r),
                        n._l == i && (n._l = o),
                        n[v]--
                    }
                    return !!i
                },
                forEach: function(t) {
                    p(this, e);
                    for (var n, i = s(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f; )
                        for (i(n.v, n.k, this); n && n.r; )
                            n = n.p
                },
                has: function(t) {
                    return !!m(p(this, e), t)
                }
            }),
            h && i(u.prototype, "size", {
                get: function() {
                    return p(this, e)[v]
                }
            }),
            u
        },
        def: function(t, e, n) {
            var i, r, o = m(t, e);
            return o ? o.v = n : (t._l = o = {
                i: r = f(e, !0),
                k: e,
                v: n,
                p: i = t._l,
                n: void 0,
                r: !1
            },
            t._f || (t._f = o),
            i && (i.n = o),
            t[v]++,
            "F" !== r && (t._i[r] = o)),
            t
        },
        getEntry: m,
        setStrong: function(t, e, n) {
            l(t, e, function(t, n) {
                this._t = p(t, e),
                this._k = n,
                this._l = void 0
            }, function() {
                for (var t = this, e = t._k, n = t._l; n && n.r; )
                    n = n.p;
                return t._t && (t._l = n = n ? n.n : t._t._f) ? "keys" == e ? u(0, n.k) : "values" == e ? u(0, n.v) : u(0, [n.k, n.v]) : (t._t = void 0,
                u(1))
            }, n ? "entries" : "values", !n, !0),
            d(e)
        }
    }
}
, function(t, e, n) {
    var i = n(5);
    t.exports = function(t, e, n, r) {
        try {
            return r ? e(i(n)[0], n[1]) : e(n)
        } catch (e) {
            var o = t.return;
            throw void 0 !== o && i(o.call(t)),
            e
        }
    }
}
, function(t, e, n) {
    var i = n(12)
      , r = n(0)("iterator")
      , o = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (i.Array === t || o[r] === t)
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(1)
      , r = n(3)
      , o = n(43)
      , s = n(14)
      , a = n(9)
      , c = n(41)
      , l = n(20)
      , u = n(42)
      , d = n(6)
      , h = n(18)
      , f = n(4).f
      , p = n(94)(0)
      , v = n(7);
    t.exports = function(t, e, n, m, g, y) {
        var w = i[t]
          , b = w
          , _ = g ? "set" : "add"
          , x = b && b.prototype
          , T = {};
        return v && "function" == typeof b && (y || x.forEach && !s(function() {
            (new b).entries().next()
        })) ? (b = e(function(e, n) {
            u(e, b, t, "_c"),
            e._c = new w,
            void 0 != n && l(n, g, e[_], e)
        }),
        p("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(t) {
            var e = "add" == t || "set" == t;
            t in x && (!y || "clear" != t) && a(b.prototype, t, function(n, i) {
                if (u(this, b, t),
                !e && y && !d(n))
                    return "get" == t && void 0;
                var r = this._c[t](0 === n ? 0 : n, i);
                return e ? this : r
            })
        }),
        y || f(b.prototype, "size", {
            get: function() {
                return this._c.size
            }
        })) : (b = m.getConstructor(e, t, g, _),
        c(b.prototype, n),
        o.NEED = !0),
        h(b, t),
        T[t] = b,
        r(r.G + r.W + r.F, T),
        y || m.setStrong(b, t, g),
        b
    }
}
, function(t, e, n) {
    var i = n(10)
      , r = n(29)
      , o = n(39)
      , s = n(34)
      , a = n(95);
    t.exports = function(t, e) {
        var n = 1 == t
          , c = 2 == t
          , l = 3 == t
          , u = 4 == t
          , d = 6 == t
          , h = 5 == t || d
          , f = e || a;
        return function(e, a, p) {
            for (var v, m, g = o(e), y = r(g), w = i(a, p, 3), b = s(y.length), _ = 0, x = n ? f(e, b) : c ? f(e, 0) : void 0; b > _; _++)
                if ((h || _ in y) && (v = y[_],
                m = w(v, _, g),
                t))
                    if (n)
                        x[_] = m;
                    else if (m)
                        switch (t) {
                        case 3:
                            return !0;
                        case 5:
                            return v;
                        case 6:
                            return _;
                        case 2:
                            x.push(v)
                        }
                    else if (u)
                        return !1;
            return d ? -1 : l || u ? u : x
        }
    }
}
, function(t, e, n) {
    var i = n(96);
    t.exports = function(t, e) {
        return new (i(t))(e)
    }
}
, function(t, e, n) {
    var i = n(6)
      , r = n(56)
      , o = n(0)("species");
    t.exports = function(t) {
        var e;
        return r(t) && (e = t.constructor,
        "function" != typeof e || e !== Array && !r(e.prototype) || (e = void 0),
        i(e) && null === (e = e[o]) && (e = void 0)),
        void 0 === e ? Array : e
    }
}
, function(t, e, n) {
    var i = n(3);
    i(i.P + i.R, "Map", {
        toJSON: n(98)("Map")
    })
}
, function(t, e, n) {
    var i = n(27)
      , r = n(99);
    t.exports = function(t) {
        return function() {
            if (i(this) != t)
                throw TypeError(t + "#toJSON isn't generic");
            return r(this)
        }
    }
}
, function(t, e, n) {
    var i = n(20);
    t.exports = function(t, e) {
        var n = [];
        return i(t, !1, n.push, n, e),
        n
    }
}
, function(t, e, n) {
    n(101)("Map")
}
, function(t, e, n) {
    "use strict";
    var i = n(3);
    t.exports = function(t) {
        i(i.S, t, {
            of: function() {
                for (var t = arguments.length, e = Array(t); t--; )
                    e[t] = arguments[t];
                return new this(e)
            }
        })
    }
}
, function(t, e, n) {
    n(103)("Map")
}
, function(t, e, n) {
    "use strict";
    var i = n(3)
      , r = n(17)
      , o = n(10)
      , s = n(20);
    t.exports = function(t) {
        i(i.S, t, {
            from: function(t) {
                var e, n, i, a, c = arguments[1];
                return r(this),
                e = void 0 !== c,
                e && r(c),
                void 0 == t ? new this : (n = [],
                e ? (i = 0,
                a = o(c, arguments[2], 2),
                s(t, !1, function(t) {
                    n.push(a(t, i++))
                })) : s(t, !1, n.push, n),
                new this(n))
            }
        })
    }
}
, function(t, e, n) {
    "use strict";
    function i() {
        console.log("invokeNative");
        try {
            AHAPP.invokeNative("send2RN", {
                Event: "Click"
            })
        } catch (t) {
            console.log("AHAPP is not exist")
        }
    }
    function r(t, e, n) {
        console.log("clicktype=", t);
        try {
            AHAPP.invokeNative("send2RN", {
                Event: "Click",
                clicktype: t,
                selectcolor: e,
                colorname: n
            })
        } catch (t) {
            console.log("AHAPP is not exist")
        }
    }
    function o(t, e) {
        var n = /\d+\.\d+\.\d+/;
        if (!n.test(t) || !n.test(e))
            return NaN;
        for (var i = t.split("."), r = e.split("."), o = 0; o < 3; o++) {
            if (parseInt(i[o]) > parseInt(r[o]))
                return 1;
            if (parseInt(i[o]) < parseInt(r[o]))
                return -1
        }
        return 0
    }
    function s(t, e) {
        e = e || this;
        for (var n in e)
            t[n] = e[n]
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && 3 === window.devicePixelRatio && 375 === window.screen.width && 812 === window.screen.height
      , c = /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && 3 === window.devicePixelRatio && 414 === window.screen.width && 896 === window.screen.height
      , l = /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && 2 === window.devicePixelRatio && 414 === window.screen.width && 896 === window.screen.height
      , u = /iphone os 12/gi.test(window.navigator.userAgent)
      , d = /iphone/gi.test(window.navigator.userAgent)
      , h = /iphone/gi.test(window.navigator.userAgent) && window.screen.width <= 320
      , f = {
        show: function() {
            $(".banner,.banner2,#banner,.title-div,#share-div").show(),
            "app" === globalEnv.src && v("9")
        },
        hide: function() {
            $(".banner,.banner2,#banner,.title-div,#share-div").hide(),
            "app" === globalEnv.src && v("8")
        }
    }
      , p = i
      , v = r;
    e.default = {
        mLayerToggler: f,
        isIphone5: h,
        isIPhone: d,
        isIOS12: u,
        isIphoneX: a,
        isIPhoneXR: l,
        isIPhoneXSMax: c,
        compareAppversion: o,
        rncall: p,
        newRNcall: v,
        extend: s
    }
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var r = n(106)
      , o = i(r)
      , s = n(117)
      , a = i(s);
    n(125);
    var c = n(8)
      , l = i(c);
    n(129);
    var u = n(130)
      , d = i(u);
    l.default.clickEvent;
    !function(t, e, n) {
        function i(e) {
            var n = [];
            if (colorlist.forEach(function(t, e) {
                n.push({
                    baseColorName: t.BaseColorName,
                    cName: t.ColorName,
                    eName: e,
                    rgb: "" + t.ColorValue
                })
            }),
            n.length > 1) {
                new d.default(t("#wrapper"),{
                    colors: n,
                    showCount: l.default.getQueryString("showcount") || 7,
                    basicWidth: 50,
                    dataObj: e,
                    defaultColor: globalConfig.defaultColor || 0
                }).init("portrait")
            }
        }
        var r = function(e, n) {
            this.$element = e,
            this.defaults = {
                api: imgroot,
                active: 0,
                isPreload: !0,
                angleCurrent: "Hori",
                imageArray: {},
                models: n.models || "",
                currentColor: n.defaultColor || 0,
                loadMessageSection: {},
                resizeWin: {},
                callback: {
                    after: function() {},
                    before: function() {}
                }
            },
            this.setting = t.extend({}, this.defaults, n)
        };
        r.prototype = {
            init: function() {
                Object.defineProperty(this.setting, "imageArray", {
                    imageWritable: !0,
                    Configurable: !1
                }),
                this.createColorElement(),
                this.car360()
            },
            createColorElement: function() {
                var t = this;
                for (var e in this.setting.colors) {
                    var n = this.setting.colors[e];
                    t.setting.imageArray[e] = this.createResize(n.cName, n.rgb)
                }
            },
            createResize: function(t, e) {
                function n() {
                    return {
                        Preview: {
                            isEnable: !1,
                            width: "Preview|Normal",
                            images: []
                        },
                        Normal: {
                            isEnable: !1,
                            width: "Normal",
                            images: []
                        }
                    }
                }
                return {
                    name: t,
                    rgb: e,
                    Hori: n(),
                    Over: n()
                }
            },
            preLoadImages: function(t, e, n, i) {
                var r = this;
                if (!r.setting.imageArray[e][n][i].isEnable) {
                    for (var o = [], s = 0; s < 30; s++) {
                        var c = r.setting.api + "/" + colorlist[e][n][i][s].Url;
                        o.push(function(t, e) {
                            return new a.default(function(n, i) {
                                var r = new Image;
                                r.src = t,
                                r.ts_index = e,
                                r.onload = function() {
                                    n(r)
                                },
                                r.onerror = function(t) {
                                    i(t)
                                }
                            }
                            )
                        }(c, s))
                    }
                    a.default.all(o).then(function(t) {
                        t.forEach(function(t) {
                            r.setting.imageArray[e][n][i].images[t.ts_index] = t
                        }),
                        r.setting.imageArray[e][n][i].isEnable = !0,
                        r.gradedLoad()
                    })
                }
            },
            gradedLoad: function() {
                var t = this;
                t.setting.imageArray[t.setting.currentColor][t.setting.angleCurrent].Normal.isEnable ? t.changeImage(t.setting.currentColor, t.setting.angleCurrent, "Normal") : t.setting.imageArray[t.setting.currentColor][t.setting.angleCurrent].Preview.isEnable ? (t.changeImage(t.setting.currentColor, t.setting.angleCurrent, "Preview"),
                t.preLoadImages(t.setting.models, t.setting.currentColor, t.setting.angleCurrent, "Normal")) : t.preLoadImages(t.setting.models, t.setting.currentColor, t.setting.angleCurrent, "Preview")
            },
            changeImage: function(e, n, i) {
                l.default.notNeedTips || "Over" !== n || l.default.swipeTips.upDisable || setTimeout(function() {
                    t("#swipe-up").show(),
                    l.default.swipeTips.upEnable = !0,
                    l.default.swipeTips.upDisable = !0
                }, 1e3);
                var r = this;
                t(".threesixty_images li img").each(function(o, s) {
                    t(this).attr("src", r.setting.imageArray[e][n][i].images[o].src)
                }),
                r.setting.globalConfig.currentAngle !== n && (r.setting.globalConfig.currentAngle = n,
                "隐藏" === t(".banner .show .text").text() && r.setting.globalConfig.addAnchor(t(".threesixty_images li img.current-image").parent().index()))
            },
            throttle: function(t, e) {
                var n = t
                  , i = void 0;
                return function() {
                    var t = arguments
                      , r = this;
                    if (i)
                        return !1;
                    n.apply(r, t),
                    i = setTimeout(function() {
                        clearTimeout(i),
                        i = null
                    }, e || 500)
                }
            },
            loading: function(e, n) {
                var i = e || "加载中"
                  , r = document.createElement("div");
                t(r).addClass("message-div").text(i).appendTo(t("#bg-div")),
                setTimeout(function() {
                    t(".colorNameTip").remove()
                }, 3e3)
            },
            car360: function() {
                var n = this
                  , r = colorlist[n.setting.currentColor].Hori.Preview.map(function(t) {
                    return imgroot + "/" + t.Url
                });
                t("#mythreesixty").ThreeSixty({
                    totalFrames: 30,
                    endFrame: 30,
                    currentFrame: 1,
                    framerate: 20,
                    playSpeed: 100,
                    zeroBased: !0,
                    zeroPadding: !0,
                    imgList: ".threesixty_images",
                    progress: ".spinner",
                    imagePath: n.setting.api,
                    imgArray: r,
                    filePrefix: "",
                    ext: ".png",
                    height: .5 * e.innerWidth,
                    width: .8 * e.innerWidth,
                    navigation: !1,
                    disableSpin: !1,
                    direction: 1,
                    onReady: function() {
                        n.setting.isPreload && (t("#qrcode-div").show(),
                        t("#qrcode-img").css("background-image", "url(" + globalConfig.qrcode + ")"),
                        t("#qrcode-txt").text("人气:" + globalConfig.visit),
                        t(".banner,.mask1").show(),
                        n.gradedLoad(),
                        n.setting.isPreload = !1,
                        "block" === t("#tips-div").css("display") && t("#tips-div").fadeOut("fast"),
                        l.default.notNeedTips || (t("#swipe-down").show(),
                        l.default.swipeTips.downEnable = !0,
                        l.default.swipeTips.downDisable = !0),
                        n.setting.globalConfig.addAnchor(),
                        setTimeout(function() {
                            i(n)
                        }, 1e3))
                    }
                })
            }
        },
        t.fn.VrPlugin = function(n) {
            return e.carColor = new r(this,n),
            carColor[n] ? box[n].apply(this, Array.prototype.slice.call(this, arguments)) : "object" === (void 0 === n ? "undefined" : (0,
            o.default)(n)) || n ? carColor.init() : void t.error("Method " + n + " is not exist on jQuery.msgColor")
        }
    }(jQuery, window, document)
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0;
    var r = n(107)
      , o = i(r)
      , s = n(109)
      , a = i(s)
      , c = "function" == typeof a.default && "symbol" == typeof o.default ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof a.default && t.constructor === a.default && t !== a.default.prototype ? "symbol" : typeof t
    }
    ;
    e.default = "function" == typeof a.default && "symbol" === c(o.default) ? function(t) {
        return void 0 === t ? "undefined" : c(t)
    }
    : function(t) {
        return t && "function" == typeof a.default && t.constructor === a.default && t !== a.default.prototype ? "symbol" : void 0 === t ? "undefined" : c(t)
    }
}
, function(t, e, n) {
    t.exports = {
        default: n(108),
        __esModule: !0
    }
}
, function(t, e, n) {
    n(19),
    n(15),
    t.exports = n(44).f("iterator")
}
, function(t, e, n) {
    t.exports = {
        default: n(110),
        __esModule: !0
    }
}
, function(t, e, n) {
    n(111),
    n(40),
    n(115),
    n(116),
    t.exports = n(2).Symbol
}
, function(t, e, n) {
    "use strict";
    var i = n(1)
      , r = n(11)
      , o = n(7)
      , s = n(3)
      , a = n(50)
      , c = n(43).KEY
      , l = n(14)
      , u = n(37)
      , d = n(18)
      , h = n(26)
      , f = n(0)
      , p = n(44)
      , v = n(45)
      , m = n(112)
      , g = n(56)
      , y = n(5)
      , w = n(13)
      , b = n(33)
      , _ = n(23)
      , x = n(24)
      , T = n(113)
      , C = n(114)
      , E = n(4)
      , S = n(25)
      , k = C.f
      , P = E.f
      , $ = T.f
      , M = i.Symbol
      , I = i.JSON
      , F = I && I.stringify
      , O = f("_hidden")
      , A = f("toPrimitive")
      , L = {}.propertyIsEnumerable
      , D = u("symbol-registry")
      , N = u("symbols")
      , j = u("op-symbols")
      , W = Object.prototype
      , z = "function" == typeof M
      , Y = i.QObject
      , X = !Y || !Y.prototype || !Y.prototype.findChild
      , R = o && l(function() {
        return 7 != x(P({}, "a", {
            get: function() {
                return P(this, "a", {
                    value: 7
                }).a
            }
        })).a
    }) ? function(t, e, n) {
        var i = k(W, e);
        i && delete W[e],
        P(t, e, n),
        i && t !== W && P(W, e, i)
    }
    : P
      , H = function(t) {
        var e = N[t] = x(M.prototype);
        return e._k = t,
        e
    }
      , q = z && "symbol" == typeof M.iterator ? function(t) {
        return "symbol" == typeof t
    }
    : function(t) {
        return t instanceof M
    }
      , B = function(t, e, n) {
        return t === W && B(j, e, n),
        y(t),
        e = b(e, !0),
        y(n),
        r(N, e) ? (n.enumerable ? (r(t, O) && t[O][e] && (t[O][e] = !1),
        n = x(n, {
            enumerable: _(0, !1)
        })) : (r(t, O) || P(t, O, _(1, {})),
        t[O][e] = !0),
        R(t, e, n)) : P(t, e, n)
    }
      , U = function(t, e) {
        y(t);
        for (var n, i = m(e = w(e)), r = 0, o = i.length; o > r; )
            B(t, n = i[r++], e[n]);
        return t
    }
      , V = function(t, e) {
        return void 0 === e ? x(t) : U(x(t), e)
    }
      , G = function(t) {
        var e = L.call(this, t = b(t, !0));
        return !(this === W && r(N, t) && !r(j, t)) && (!(e || !r(this, t) || !r(N, t) || r(this, O) && this[O][t]) || e)
    }
      , Q = function(t, e) {
        if (t = w(t),
        e = b(e, !0),
        t !== W || !r(N, e) || r(j, e)) {
            var n = k(t, e);
            return !n || !r(N, e) || r(t, O) && t[O][e] || (n.enumerable = !0),
            n
        }
    }
      , K = function(t) {
        for (var e, n = $(w(t)), i = [], o = 0; n.length > o; )
            r(N, e = n[o++]) || e == O || e == c || i.push(e);
        return i
    }
      , J = function(t) {
        for (var e, n = t === W, i = $(n ? j : w(t)), o = [], s = 0; i.length > s; )
            !r(N, e = i[s++]) || n && !r(W, e) || o.push(N[e]);
        return o
    };
    z || (M = function() {
        if (this instanceof M)
            throw TypeError("Symbol is not a constructor!");
        var t = h(arguments.length > 0 ? arguments[0] : void 0)
          , e = function(n) {
            this === W && e.call(j, n),
            r(this, O) && r(this[O], t) && (this[O][t] = !1),
            R(this, t, _(1, n))
        };
        return o && X && R(W, t, {
            configurable: !0,
            set: e
        }),
        H(t)
    }
    ,
    a(M.prototype, "toString", function() {
        return this._k
    }),
    C.f = Q,
    E.f = B,
    n(57).f = T.f = K,
    n(28).f = G,
    n(46).f = J,
    o && !n(22) && a(W, "propertyIsEnumerable", G, !0),
    p.f = function(t) {
        return H(f(t))
    }
    ),
    s(s.G + s.W + s.F * !z, {
        Symbol: M
    });
    for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; Z.length > tt; )
        f(Z[tt++]);
    for (var et = S(f.store), nt = 0; et.length > nt; )
        v(et[nt++]);
    s(s.S + s.F * !z, "Symbol", {
        for: function(t) {
            return r(D, t += "") ? D[t] : D[t] = M(t)
        },
        keyFor: function(t) {
            if (!q(t))
                throw TypeError(t + " is not a symbol!");
            for (var e in D)
                if (D[e] === t)
                    return e
        },
        useSetter: function() {
            X = !0
        },
        useSimple: function() {
            X = !1
        }
    }),
    s(s.S + s.F * !z, "Object", {
        create: V,
        defineProperty: B,
        defineProperties: U,
        getOwnPropertyDescriptor: Q,
        getOwnPropertyNames: K,
        getOwnPropertySymbols: J
    }),
    I && s(s.S + s.F * (!z || l(function() {
        var t = M();
        return "[null]" != F([t]) || "{}" != F({
            a: t
        }) || "{}" != F(Object(t))
    })), "JSON", {
        stringify: function(t) {
            if (void 0 !== t && !q(t)) {
                for (var e, n, i = [t], r = 1; arguments.length > r; )
                    i.push(arguments[r++]);
                return e = i[1],
                "function" == typeof e && (n = e),
                !n && g(e) || (e = function(t, e) {
                    if (n && (e = n.call(this, t, e)),
                    !q(e))
                        return e
                }
                ),
                i[1] = e,
                F.apply(I, i)
            }
        }
    }),
    M.prototype[A] || n(9)(M.prototype, A, M.prototype.valueOf),
    d(M, "Symbol"),
    d(Math, "Math", !0),
    d(i.JSON, "JSON", !0)
}
, function(t, e, n) {
    var i = n(25)
      , r = n(46)
      , o = n(28);
    t.exports = function(t) {
        var e = i(t)
          , n = r.f;
        if (n)
            for (var s, a = n(t), c = o.f, l = 0; a.length > l; )
                c.call(t, s = a[l++]) && e.push(s);
        return e
    }
}
, function(t, e, n) {
    var i = n(13)
      , r = n(57).f
      , o = {}.toString
      , s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : []
      , a = function(t) {
        try {
            return r(t)
        } catch (t) {
            return s.slice()
        }
    };
    t.exports.f = function(t) {
        return s && "[object Window]" == o.call(t) ? a(t) : r(i(t))
    }
}
, function(t, e, n) {
    var i = n(28)
      , r = n(23)
      , o = n(13)
      , s = n(33)
      , a = n(11)
      , c = n(49)
      , l = Object.getOwnPropertyDescriptor;
    e.f = n(7) ? l : function(t, e) {
        if (t = o(t),
        e = s(e, !0),
        c)
            try {
                return l(t, e)
            } catch (t) {}
        if (a(t, e))
            return r(!i.f.call(t, e), t[e])
    }
}
, function(t, e, n) {
    n(45)("asyncIterator")
}
, function(t, e, n) {
    n(45)("observable")
}
, function(t, e, n) {
    t.exports = {
        default: n(118),
        __esModule: !0
    }
}
, function(t, e, n) {
    n(40),
    n(19),
    n(15),
    n(119),
    n(123),
    n(124),
    t.exports = n(2).Promise
}
, function(t, e, n) {
    "use strict";
    var i, r, o, s, a = n(22), c = n(1), l = n(10), u = n(27), d = n(3), h = n(6), f = n(17), p = n(42), v = n(20), m = n(58), g = n(59).set, y = n(121)(), w = n(47), b = n(60), _ = n(61), x = c.TypeError, T = c.process, C = c.Promise, E = "process" == u(T), S = function() {}, k = r = w.f, P = !!function() {
        try {
            var t = C.resolve(1)
              , e = (t.constructor = {})[n(0)("species")] = function(t) {
                t(S, S)
            }
            ;
            return (E || "function" == typeof PromiseRejectionEvent) && t.then(S)instanceof e
        } catch (t) {}
    }(), $ = function(t) {
        var e;
        return !(!h(t) || "function" != typeof (e = t.then)) && e
    }, M = function(t, e) {
        if (!t._n) {
            t._n = !0;
            var n = t._c;
            y(function() {
                for (var i = t._v, r = 1 == t._s, o = 0; n.length > o; )
                    !function(e) {
                        var n, o, s = r ? e.ok : e.fail, a = e.resolve, c = e.reject, l = e.domain;
                        try {
                            s ? (r || (2 == t._h && O(t),
                            t._h = 1),
                            !0 === s ? n = i : (l && l.enter(),
                            n = s(i),
                            l && l.exit()),
                            n === e.promise ? c(x("Promise-chain cycle")) : (o = $(n)) ? o.call(n, a, c) : a(n)) : c(i)
                        } catch (t) {
                            c(t)
                        }
                    }(n[o++]);
                t._c = [],
                t._n = !1,
                e && !t._h && I(t)
            })
        }
    }, I = function(t) {
        g.call(c, function() {
            var e, n, i, r = t._v, o = F(t);
            if (o && (e = b(function() {
                E ? T.emit("unhandledRejection", r, t) : (n = c.onunhandledrejection) ? n({
                    promise: t,
                    reason: r
                }) : (i = c.console) && i.error && i.error("Unhandled promise rejection", r)
            }),
            t._h = E || F(t) ? 2 : 1),
            t._a = void 0,
            o && e.e)
                throw e.v
        })
    }, F = function(t) {
        if (1 == t._h)
            return !1;
        for (var e, n = t._a || t._c, i = 0; n.length > i; )
            if (e = n[i++],
            e.fail || !F(e.promise))
                return !1;
        return !0
    }, O = function(t) {
        g.call(c, function() {
            var e;
            E ? T.emit("rejectionHandled", t) : (e = c.onrejectionhandled) && e({
                promise: t,
                reason: t._v
            })
        })
    }, A = function(t) {
        var e = this;
        e._d || (e._d = !0,
        e = e._w || e,
        e._v = t,
        e._s = 2,
        e._a || (e._a = e._c.slice()),
        M(e, !0))
    }, L = function(t) {
        var e, n = this;
        if (!n._d) {
            n._d = !0,
            n = n._w || n;
            try {
                if (n === t)
                    throw x("Promise can't be resolved itself");
                (e = $(t)) ? y(function() {
                    var i = {
                        _w: n,
                        _d: !1
                    };
                    try {
                        e.call(t, l(L, i, 1), l(A, i, 1))
                    } catch (t) {
                        A.call(i, t)
                    }
                }) : (n._v = t,
                n._s = 1,
                M(n, !1))
            } catch (t) {
                A.call({
                    _w: n,
                    _d: !1
                }, t)
            }
        }
    };
    P || (C = function(t) {
        p(this, C, "Promise", "_h"),
        f(t),
        i.call(this);
        try {
            t(l(L, this, 1), l(A, this, 1))
        } catch (t) {
            A.call(this, t)
        }
    }
    ,
    i = function(t) {
        this._c = [],
        this._a = void 0,
        this._s = 0,
        this._d = !1,
        this._v = void 0,
        this._h = 0,
        this._n = !1
    }
    ,
    i.prototype = n(41)(C.prototype, {
        then: function(t, e) {
            var n = k(m(this, C));
            return n.ok = "function" != typeof t || t,
            n.fail = "function" == typeof e && e,
            n.domain = E ? T.domain : void 0,
            this._c.push(n),
            this._a && this._a.push(n),
            this._s && M(this, !1),
            n.promise
        },
        catch: function(t) {
            return this.then(void 0, t)
        }
    }),
    o = function() {
        var t = new i;
        this.promise = t,
        this.resolve = l(L, t, 1),
        this.reject = l(A, t, 1)
    }
    ,
    w.f = k = function(t) {
        return t === C || t === s ? new o(t) : r(t)
    }
    ),
    d(d.G + d.W + d.F * !P, {
        Promise: C
    }),
    n(18)(C, "Promise"),
    n(54)("Promise"),
    s = n(2).Promise,
    d(d.S + d.F * !P, "Promise", {
        reject: function(t) {
            var e = k(this);
            return (0,
            e.reject)(t),
            e.promise
        }
    }),
    d(d.S + d.F * (a || !P), "Promise", {
        resolve: function(t) {
            return _(a && this === s ? C : this, t)
        }
    }),
    d(d.S + d.F * !(P && n(122)(function(t) {
        C.all(t).catch(S)
    })), "Promise", {
        all: function(t) {
            var e = this
              , n = k(e)
              , i = n.resolve
              , r = n.reject
              , o = b(function() {
                var n = []
                  , o = 0
                  , s = 1;
                v(t, !1, function(t) {
                    var a = o++
                      , c = !1;
                    n.push(void 0),
                    s++,
                    e.resolve(t).then(function(t) {
                        c || (c = !0,
                        n[a] = t,
                        --s || i(n))
                    }, r)
                }),
                --s || i(n)
            });
            return o.e && r(o.v),
            n.promise
        },
        race: function(t) {
            var e = this
              , n = k(e)
              , i = n.reject
              , r = b(function() {
                v(t, !1, function(t) {
                    e.resolve(t).then(n.resolve, i)
                })
            });
            return r.e && i(r.v),
            n.promise
        }
    })
}
, function(t, e) {
    t.exports = function(t, e, n) {
        var i = void 0 === n;
        switch (e.length) {
        case 0:
            return i ? t() : t.call(n);
        case 1:
            return i ? t(e[0]) : t.call(n, e[0]);
        case 2:
            return i ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
        case 3:
            return i ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
        case 4:
            return i ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
        }
        return t.apply(n, e)
    }
}
, function(t, e, n) {
    var i = n(1)
      , r = n(59).set
      , o = i.MutationObserver || i.WebKitMutationObserver
      , s = i.process
      , a = i.Promise
      , c = "process" == n(16)(s);
    t.exports = function() {
        var t, e, n, l = function() {
            var i, r;
            for (c && (i = s.domain) && i.exit(); t; ) {
                r = t.fn,
                t = t.next;
                try {
                    r()
                } catch (i) {
                    throw t ? n() : e = void 0,
                    i
                }
            }
            e = void 0,
            i && i.enter()
        };
        if (c)
            n = function() {
                s.nextTick(l)
            }
            ;
        else if (o) {
            var u = !0
              , d = document.createTextNode("");
            new o(l).observe(d, {
                characterData: !0
            }),
            n = function() {
                d.data = u = !u
            }
        } else if (a && a.resolve) {
            var h = a.resolve();
            n = function() {
                h.then(l)
            }
        } else
            n = function() {
                r.call(i, l)
            }
            ;
        return function(i) {
            var r = {
                fn: i,
                next: void 0
            };
            e && (e.next = r),
            t || (t = r,
            n()),
            e = r
        }
    }
}
, function(t, e, n) {
    var i = n(0)("iterator")
      , r = !1;
    try {
        var o = [7][i]();
        o.return = function() {
            r = !0
        }
        ,
        Array.from(o, function() {
            throw 2
        })
    } catch (t) {}
    t.exports = function(t, e) {
        if (!e && !r)
            return !1;
        var n = !1;
        try {
            var o = [7]
              , s = o[i]();
            s.next = function() {
                return {
                    done: n = !0
                }
            }
            ,
            o[i] = function() {
                return s
            }
            ,
            t(o)
        } catch (t) {}
        return n
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(3)
      , r = n(2)
      , o = n(1)
      , s = n(58)
      , a = n(61);
    i(i.P + i.R, "Promise", {
        finally: function(t) {
            var e = s(this, r.Promise || o.Promise)
              , n = "function" == typeof t;
            return this.then(n ? function(n) {
                return a(e, t()).then(function() {
                    return n
                })
            }
            : t, n ? function(n) {
                return a(e, t()).then(function() {
                    throw n
                })
            }
            : t)
        }
    })
}
, function(t, e, n) {
    "use strict";
    var i = n(3)
      , r = n(47)
      , o = n(60);
    i(i.S, "Promise", {
        try: function(t) {
            var e = r.f(this)
              , n = o(t);
            return (n.e ? e.reject : e.resolve)(n.v),
            e.promise
        }
    })
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var r = n(126)
      , o = i(r)
      , s = n(8)
      , a = i(s);
    /*!
   * 360 degree Image Slider v2.0.4
   * http://gaurav.jassal.me
   *
   * Copyright 2015, gaurav@jassal.me
   * Dual licensed under the MIT or GPL Version 3 licenses.
   *
   */
    !function(t) {
        t.ThreeSixty = function(e, n) {
            var i, r = this, o = [];
            r.$el = t(e),
            r.el = e,
            r.$el.data("ThreeSixty", r),
            r.init = function() {
                i = t.extend({}, t.ThreeSixty.defaultOptions, n),
                i.disableSpin && (i.currentFrame = 1,
                i.endFrame = 1),
                r.initProgress(),
                r.loadImages()
            }
            ,
            r.resize = function() {}
            ,
            r.initProgress = function() {
                r.$el.css({
                    width: i.width + "px",
                    height: i.height + "px",
                    "background-image": "none !important"
                }),
                i.styles && r.$el.css(i.styles),
                r.responsive(),
                r.$el.find(i.progress).css({
                    marginTop: i.height / 2 - 15 + "px"
                }),
                r.$el.find(i.progress).fadeIn("slow"),
                r.$el.find(i.imgList).hide()
            }
            ,
            r.loadImages = function() {
                var e, n, s, a;
                e = document.createElement("li"),
                a = i.zeroBased ? 0 : 1,
                n = i.imgArray ? i.imgArray[i.loadedImages] : i.domain + i.imagePath + i.filePrefix + r.zeroPad(i.loadedImages + a) + i.ext + (r.browser.isIE() ? "?" + (new Date).getTime() : ""),
                s = t("<img>").attr("src", n).addClass("previous-image").appendTo(e),
                o.push(s),
                r.$el.find(i.imgList).append(e),
                t(s).load(function() {
                    r.imageLoaded()
                })
            }
            ,
            r.imageLoaded = function() {
                i.loadedImages += 1,
                t(i.progress + " span").text(Math.floor(i.loadedImages / i.totalFrames * 100) + "%"),
                i.loadedImages >= i.totalFrames ? (i.disableSpin && s && o[0].removeClass("previous-image").addClass("current-image"),
                t(i.progress).fadeOut("slow", function() {
                    t(this).hide(),
                    r.showImages(),
                    r.showNavigation()
                })) : r.loadImages()
            }
            ,
            r.showImages = function() {
                r.$el.find(".txtC").fadeIn(),
                r.$el.find(i.imgList).fadeIn(),
                r.ready = !0,
                i.ready = !0,
                i.drag && r.initEvents(),
                r.refresh(),
                r.initPlugins(),
                i.onReady(),
                setTimeout(function() {
                    i.framerate = 10,
                    window.clearInterval(i.ticker),
                    i.ticker = setInterval(r.render, Math.round(1e3 / i.framerate))
                }, 1e3 / i.framerate * 30),
                setTimeout(function() {
                    r.responsive()
                }, 50)
            }
            ,
            r.initPlugins = function() {
                t.each(i.plugins, function(e, n) {
                    if ("function" != typeof t[n])
                        throw new Error(n + " not available.");
                    t[n].call(r, r.$el, i)
                })
            }
            ,
            r.showNavigation = function() {
                if (i.navigation && !i.navigation_init) {
                    var e, n, o, s;
                    e = t("<div/>").attr("class", "nav_bar"),
                    n = t("<a/>").attr({
                        href: "#",
                        class: "nav_bar_next"
                    }).html("next"),
                    o = t("<a/>").attr({
                        href: "#",
                        class: "nav_bar_previous"
                    }).html("previous"),
                    s = t("<a/>").attr({
                        href: "#",
                        class: "nav_bar_play"
                    }).html("play"),
                    e.append(o),
                    e.append(s),
                    e.append(n),
                    r.$el.prepend(e),
                    n.bind("mousedown touchstart", r.next),
                    o.bind("mousedown touchstart", r.previous),
                    s.bind("mousedown touchstart", r.play_stop),
                    i.navigation_init = !0
                }
            }
            ,
            r.play_stop = function(e) {
                e.preventDefault(),
                i.autoplay ? (i.autoplay = !1,
                t(e.currentTarget).removeClass("nav_bar_stop").addClass("nav_bar_play"),
                clearInterval(i.play),
                i.play = null) : (i.autoplay = !0,
                i.play = setInterval(r.moveToNextFrame, i.playSpeed),
                t(e.currentTarget).removeClass("nav_bar_play").addClass("nav_bar_stop"))
            }
            ,
            r.next = function(t) {
                t && t.preventDefault(),
                i.endFrame -= 5,
                r.refresh()
            }
            ,
            r.previous = function(t) {
                t && t.preventDefault(),
                i.endFrame += 5,
                r.refresh()
            }
            ,
            r.play = function(t, e) {
                var n = t || i.playSpeed
                  , o = e || i.autoplayDirection;
                i.autoplayDirection = o,
                i.autoplay || (i.autoplay = !0,
                i.play = setInterval(r.moveToNextFrame, n))
            }
            ,
            r.stop = function() {
                i.autoplay && (i.autoplay = !1,
                clearInterval(i.play),
                i.play = null)
            }
            ,
            r.moveToNextFrame = function() {
                1 === i.autoplayDirection ? i.endFrame -= 1 : i.endFrame += 1,
                r.refresh()
            }
            ,
            r.gotoAndPlay = function(t) {
                if (i.disableWrap)
                    i.endFrame = t,
                    r.refresh();
                else {
                    var e = Math.ceil(i.endFrame / i.totalFrames);
                    0 === e && (e = 1);
                    var n = e > 1 ? i.endFrame - (e - 1) * i.totalFrames : i.endFrame
                      , o = i.totalFrames - n
                      , s = 0;
                    s = t - n > 0 ? t - n < n + (i.totalFrames - t) ? i.endFrame + (t - n) : i.endFrame - (n + (i.totalFrames - t)) : n - t < o + t ? i.endFrame - (n - t) : i.endFrame + (o + t),
                    n !== t && (i.endFrame = s,
                    r.refresh())
                }
            }
            ,
            r.initEvents = function() {
                r.$el.parent().bind("mousedown touchstart touchmove touchend mousemove click", function(e) {
                    "ball0,ball1,ball2,color-img,iconfont,topIcon,bottomIcon".indexOf(e.target.className) > -1 || "LI" === e.target.nodeName || (a.default.isPopWindows && "touchmove" !== e.type || e.preventDefault(),
                    a.default.notNeedTips || (a.default.swipeTips.downEnable && a.default.swipeTips.downDisable && (t("#swipe-down").delay(1e3).fadeOut("fast"),
                    a.default.swipeTips.downEnable = !1),
                    a.default.swipeTips.upEnable && a.default.swipeTips.upDisable && (t("#swipe-up").delay(3e3).fadeOut("fast"),
                    a.default.swipeTips.upEnable = !1)),
                    "mousedown" === e.type && 1 === e.which || "touchstart" === e.type ? (i.pointerStartPosX = r.getPointerEvent(e).pageX,
                    i.pointerStartPosY = r.getPointerEvent(e).pageY,
                    i.dragging = !0,
                    i.onDragStart(i.currentFrame)) : "touchmove" === e.type ? "landscape" === window.initOrientation ? r.trackPointer(e) : r.trackPointerPortrait(e) : "touchend" === e.type && (i.dragging = !1,
                    i.onDragStop(i.endFrame)))
                }),
                t(document).bind("mouseup", function(e) {
                    i.dragging = !1,
                    i.onDragStop(i.endFrame),
                    t(this).css("cursor", "none")
                }),
                t(window).bind("resize", function(t) {
                    r.responsive()
                }),
                t(document).bind("mousemove", function(t) {
                    i.dragging ? (t.preventDefault(),
                    !r.browser.isIE && i.showCursor && r.$el.css("cursor", "url(assets/images/hand_closed.png), auto")) : !r.browser.isIE && i.showCursor && r.$el.css("cursor", "url(assets/images/hand_open.png), auto"),
                    r.trackPointer(t)
                }),
                t(window).resize(function() {
                    r.resize()
                })
            }
            ,
            r.getPointerEvent = function(t) {
                return t.originalEvent.targetTouches ? t.originalEvent.targetTouches[0] : t
            }
            ,
            r.trackPointer = function(t) {
                i.ready && i.dragging && (i.pointerEndPosX = r.getPointerEvent(t).pageX,
                i.pointerEndPosY = r.getPointerEvent(t).pageY,
                i.monitorStartTime < (new Date).getTime() - i.monitorInt && (i.pointerDistance = (i.pointerEndPosX - i.pointerStartPosX) * i.direction,
                i.pointerDistance > 0 ? i.endFrame = i.currentFrame + Math.ceil((i.totalFrames - 1) * i.speedMultiplier * (i.pointerDistance / r.$el.width())) : i.endFrame = i.currentFrame + Math.floor((i.totalFrames - 1) * i.speedMultiplier * (i.pointerDistance / r.$el.width())),
                i.pointerDistanceY = i.pointerEndPosY - i.pointerStartPosY,
                i.pointerDistanceY < -10 ? (window.carColor.setting.angleCurrent = "Hori",
                window.carColor.gradedLoad(),
                a.default.sendViewClick("Hori")) : i.pointerDistanceY > 10 && (window.carColor.setting.angleCurrent = "Over",
                window.carColor.gradedLoad(),
                a.default.sendViewClick("Over")),
                i.disableWrap && (i.endFrame = Math.min(i.totalFrames - (i.zeroBased ? 1 : 0), i.endFrame),
                i.endFrame = Math.max(i.zeroBased ? 0 : 1, i.endFrame)),
                r.refresh(),
                i.monitorStartTime = (new Date).getTime(),
                i.pointerStartPosX = r.getPointerEvent(t).pageX,
                i.pointerStartPosY = r.getPointerEvent(t).pageY))
            }
            ,
            r.trackPointerPortrait = function(t) {
                i.ready && i.dragging && (i.pointerEndPosX = r.getPointerEvent(t).pageX,
                i.pointerEndPosY = r.getPointerEvent(t).pageY,
                i.monitorStartTime < (new Date).getTime() - i.monitorInt && (i.pointerDistance = (i.pointerEndPosY - i.pointerStartPosY) * i.direction,
                i.pointerDistance > 0 ? i.endFrame = i.currentFrame + Math.ceil((i.totalFrames - 1) * i.speedMultiplier * (i.pointerDistance / r.$el.width())) : i.endFrame = i.currentFrame + Math.floor((i.totalFrames - 1) * i.speedMultiplier * (i.pointerDistance / r.$el.width())),
                i.pointerDistanceX = i.pointerEndPosX - i.pointerStartPosX,
                i.pointerDistanceX < -10 ? (window.carColor.setting.angleCurrent = "Over",
                window.carColor.gradedLoad(),
                a.default.sendViewClick("Over")) : i.pointerDistanceX > 10 && (window.carColor.setting.angleCurrent = "Hori",
                window.carColor.gradedLoad(),
                a.default.sendViewClick("Hori")),
                i.disableWrap && (i.endFrame = Math.min(i.totalFrames - (i.zeroBased ? 1 : 0), i.endFrame),
                i.endFrame = Math.max(i.zeroBased ? 0 : 1, i.endFrame)),
                r.refresh(),
                i.monitorStartTime = (new Date).getTime(),
                i.pointerStartPosX = r.getPointerEvent(t).pageX,
                i.pointerStartPosY = r.getPointerEvent(t).pageY))
            }
            ,
            r.refresh = function() {
                0 === i.ticker && (i.ticker = setInterval(r.render, Math.round(1e3 / i.framerate)))
            }
            ,
            r.render = function() {
                var t;
                i.currentFrame !== i.endFrame ? (t = i.endFrame < i.currentFrame ? Math.floor(.1 * (i.endFrame - i.currentFrame)) : Math.ceil(.1 * (i.endFrame - i.currentFrame)),
                r.hidePreviousFrame(),
                i.currentFrame += t,
                r.showCurrentFrame(),
                r.$el.trigger("frameIndexChanged", [r.getNormalizedCurrentFrame(), i.totalFrames])) : (window.clearInterval(i.ticker),
                i.ticker = 0)
            }
            ;
            var s = !0;
            r.hidePreviousFrame = function() {
                var t = r.getNormalizedCurrentFrame();
                s && (t = 0,
                s = !1),
                o[t].removeClass("current-image").addClass("previous-image")
            }
            ,
            r.showCurrentFrame = function() {
                o[r.getNormalizedCurrentFrame()].removeClass("previous-image").addClass("current-image"),
                t(".anim").hide(),
                o[r.getNormalizedCurrentFrame()].siblings().show()
            }
            ,
            r.getNormalizedCurrentFrame = function() {
                var t, e;
                return i.disableWrap ? (t = Math.min(i.currentFrame, i.totalFrames - (i.zeroBased ? 1 : 0)),
                e = Math.min(i.endFrame, i.totalFrames - (i.zeroBased ? 1 : 0)),
                t = Math.max(t, i.zeroBased ? 0 : 1),
                e = Math.max(e, i.zeroBased ? 0 : 1),
                i.currentFrame = t,
                i.endFrame = e) : (t = Math.ceil(i.currentFrame % i.totalFrames)) < 0 && (t += i.totalFrames - (i.zeroBased ? 1 : 0)),
                t
            }
            ,
            r.getCurrentFrame = function() {
                return i.currentFrame
            }
            ,
            r.responsive = function() {
                i.responsive && r.$el.css({
                    height: r.$el.find(".current-image").first().css("height"),
                    width: "100%"
                })
            }
            ,
            r.zeroPad = function(t) {
                var e = Math.log(i.totalFrames) / Math.LN10
                  , n = Math.round(1e3 * e) / 1e3
                  , r = Math.floor(n) + 1;
                return function(t, e) {
                    var n = t.toString();
                    if (i.zeroPadding)
                        for (; n.length < e; )
                            n = "0" + n;
                    return n
                }(t, r)
            }
            ,
            r.browser = {},
            r.browser.isIE = function() {
                var t = -1;
                if ("Microsoft Internet Explorer" === navigator.appName) {
                    var e = navigator.userAgent;
                    null !== new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})").exec(e) && (t = parseFloat(RegExp.$1))
                }
                return -1 !== t
            }
            ,
            r.getConfig = function() {
                return i
            }
            ,
            t.ThreeSixty.defaultOptions = {
                dragging: !1,
                ready: !1,
                pointerStartPosX: 0,
                pointerStartPosY: 0,
                pointerEndPosX: 0,
                pointerEndPosY: 0,
                pointerDistance: 0,
                monitorStartTime: 0,
                monitorInt: 10,
                ticker: 0,
                speedMultiplier: 7,
                totalFrames: 180,
                currentFrame: 0,
                endFrame: 0,
                loadedImages: 0,
                framerate: 60,
                domains: null,
                domain: "",
                parallel: !1,
                queueAmount: 8,
                idle: 0,
                filePrefix: "",
                ext: "png",
                height: 300,
                width: 300,
                styles: {},
                navigation: !1,
                autoplay: !1,
                autoplayDirection: 1,
                disableSpin: !1,
                disableWrap: !1,
                responsive: !1,
                zeroPadding: !1,
                zeroBased: !1,
                plugins: [],
                showCursor: !1,
                drag: !0,
                onReady: function() {},
                onDragStart: function() {},
                onDragStop: function() {},
                imgList: ".threesixty_images",
                imgArray: null,
                playSpeed: 100
            },
            r.init()
        }
        ,
        t.fn.ThreeSixty = function(e) {
            return (0,
            o.default)(new t.ThreeSixty(this,e))
        }
    }(jQuery),
    "function" != typeof o.default && (Object.create = function(t) {
        function e() {}
        return e.prototype = t,
        new e
    }
    )
}
, function(t, e, n) {
    t.exports = {
        default: n(127),
        __esModule: !0
    }
}
, function(t, e, n) {
    n(128);
    var i = n(2).Object;
    t.exports = function(t, e) {
        return i.create(t, e)
    }
}
, function(t, e, n) {
    var i = n(3);
    i(i.S, "Object", {
        create: n(24)
    })
}
, function(t, e, n) {
    "use strict";
    var i;
    !function(r) {
        function o(t, e) {
            this.wrapper = "string" == typeof t ? r(t)[0] : t,
            this.options = {
                startX: 0,
                startY: 0,
                scrollY: !0,
                scrollX: !1,
                directionLockThreshold: 5,
                momentum: !0,
                duration: 300,
                bounce: !0,
                bounceTime: 600,
                bounceEasing: "",
                preventDefault: !0,
                eventPassthrough: !0,
                freeScroll: !1,
                bindToWrapper: !0,
                resizePolling: 60,
                disableMouse: !1,
                disableTouch: !1,
                disablePointer: !1,
                tap: !0,
                click: !1,
                preventDefaultException: {
                    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
                },
                HWCompositing: !0,
                useTransition: !0,
                useTransform: !0
            };
            for (var n in e)
                this.options[n] = e[n];
            if (this.options.role || !1 !== this.options.scrollX || (this.options.eventPassthrough = "horizontal"),
            "slider" === this.options.role) {
                if (this.options.scrollX = !0,
                this.options.scrollY = !1,
                this.options.momentum = !1,
                this.scroller = r(".ui-slider-content", this.wrapper)[0],
                r(this.scroller.children[0]).addClass("current"),
                this.currentPage = 0,
                this.count = this.scroller.children.length,
                this.scroller.style.width = this.count + "00%",
                this.itemWidth = this.scroller.children[0].clientWidth,
                this.scrollWidth = this.itemWidth * this.count,
                this.options.indicator) {
                    for (var i = '<ul class="ui-slider-indicators">', n = 1; n <= this.count; n++)
                        i += 1 === n ? '<li class="current">' + n + "</li>" : "<li>" + n + "</li>";
                    i += "</ul>",
                    r(this.wrapper).append(i),
                    this.indicator = r(".ui-slider-indicators", this.wrapper)[0]
                }
            } else
                "tab" === this.options.role ? (this.options.scrollX = !0,
                this.options.scrollY = !1,
                this.options.momentum = !1,
                this.scroller = r(".ui-tab-content", this.wrapper)[0],
                this.nav = r(".ui-tab-nav", this.wrapper)[0],
                r(this.scroller.children[0]).addClass("current"),
                r(this.nav.children[0]).addClass("current"),
                this.currentPage = 0,
                this.count = this.scroller.children.length,
                this.scroller.style.width = this.count + "00%",
                this.itemWidth = this.scroller.children[0].clientWidth,
                this.scrollWidth = this.itemWidth * this.count) : this.scroller = this.wrapper.children[0];
            if (this.scrollerStyle = this.scroller.style,
            this.translateZ = a.hasPerspective && this.options.HWCompositing ? " translateZ(0)" : "",
            this.options.useTransition = a.hasTransition && this.options.useTransition,
            this.options.useTransform = a.hasTransform && this.options.useTransform,
            this.options.eventPassthrough = !0 === this.options.eventPassthrough ? "vertical" : this.options.eventPassthrough,
            this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault,
            this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX,
            this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY,
            this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough,
            this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold,
            this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? a.ease[this.options.bounceEasing] || a.ease.circular : this.options.bounceEasing,
            this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling,
            !0 === this.options.tap && (this.options.tap = "tap"),
            !1 === this.options.useTransform && (this.scroller.style.position = "relative"),
            this.x = 0,
            this.y = 0,
            this.directionX = 0,
            this.directionY = 0,
            this._events = {},
            this._init(),
            this.refresh(),
            this.scrollTo(this.options.startX, this.options.startY),
            this.enable(),
            this.options.autoplay) {
                var o = this;
                this.options.interval = this.options.interval || 2e3,
                this.options.flag = setTimeout(function() {
                    o._autoplay.apply(o)
                }, o.options.interval)
            }
        }
        var s = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
            window.setTimeout(t, 1e3 / 60)
        }
          , a = function() {
            function t(t) {
                return !1 !== i && ("" === i ? t : i + t.charAt(0).toUpperCase() + t.substr(1))
            }
            var e = {}
              , n = document.createElement("div").style
              , i = function() {
                for (var t = ["t", "webkitT", "MozT", "msT", "OT"], e = 0, i = t.length; e < i; e++)
                    if (t[e] + "ransform"in n)
                        return t[e].substr(0, t[e].length - 1);
                return !1
            }();
            e.getTime = Date.now || function() {
                return (new Date).getTime()
            }
            ,
            e.extend = function(t, e) {
                for (var n in e)
                    t[n] = e[n]
            }
            ,
            e.addEvent = function(t, e, n, i) {
                t.addEventListener(e, n, !!i)
            }
            ,
            e.removeEvent = function(t, e, n, i) {
                t.removeEventListener(e, n, !!i)
            }
            ,
            e.prefixPointerEvent = function(t) {
                return window.MSPointerEvent ? "MSPointer" + t.charAt(9).toUpperCase() + t.substr(10) : t
            }
            ,
            e.momentum = function(t, e, n, i, r, o) {
                var s, a, c = t - e, l = Math.abs(c) / n;
                return o = void 0 === o ? 6e-4 : o,
                s = t + l * l / (2 * o) * (c < 0 ? -1 : 1),
                a = l / o,
                s < i ? (s = r ? i - r / 2.5 * (l / 8) : i,
                c = Math.abs(s - t),
                a = c / l) : s > 0 && (s = r ? r / 2.5 * (l / 8) : 0,
                c = Math.abs(t) + s,
                a = c / l),
                {
                    destination: Math.round(s),
                    duration: a
                }
            }
            ;
            var r = t("transform");
            return e.extend(e, {
                hasTransform: !1 !== r,
                hasPerspective: t("perspective")in n,
                hasTouch: "ontouchstart"in window,
                hasPointer: window.PointerEvent || window.MSPointerEvent,
                hasTransition: t("transition")in n
            }),
            e.isBadAndroid = /Android /.test(window.navigator.appVersion) && !/Chrome\/\d/.test(window.navigator.appVersion),
            e.extend(e.style = {}, {
                transform: r,
                transitionTimingFunction: t("transitionTimingFunction"),
                transitionDuration: t("transitionDuration"),
                transitionDelay: t("transitionDelay"),
                transformOrigin: t("transformOrigin"),
                transitionProperty: t("transitionProperty")
            }),
            e.offset = function(t) {
                for (var e = -t.offsetLeft, n = -t.offsetTop; t = t.offsetParent; )
                    e -= t.offsetLeft,
                    n -= t.offsetTop;
                return {
                    left: e,
                    top: n
                }
            }
            ,
            e.preventDefaultException = function(t, e) {
                for (var n in e)
                    if (e[n].test(t[n]))
                        return !0;
                return !1
            }
            ,
            e.extend(e.eventType = {}, {
                touchstart: 1,
                touchmove: 1,
                touchend: 1,
                mousedown: 2,
                mousemove: 2,
                mouseup: 2,
                pointerdown: 3,
                pointermove: 3,
                pointerup: 3,
                MSPointerDown: 3,
                MSPointerMove: 3,
                MSPointerUp: 3
            }),
            e.extend(e.ease = {}, {
                quadratic: {
                    style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    fn: function(t) {
                        return t * (2 - t)
                    }
                },
                circular: {
                    style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                    fn: function(t) {
                        return Math.sqrt(1 - --t * t)
                    }
                },
                back: {
                    style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    fn: function(t) {
                        return (t -= 1) * t * (5 * t + 4) + 1
                    }
                },
                bounce: {
                    style: "",
                    fn: function(t) {
                        return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                    }
                },
                elastic: {
                    style: "",
                    fn: function(t) {
                        return 0 === t ? 0 : 1 == t ? 1 : .4 * Math.pow(2, -10 * t) * Math.sin((t - .055) * (2 * Math.PI) / .22) + 1
                    }
                }
            }),
            e.tap = function(t, e) {
                var n = document.createEvent("Event");
                n.initEvent(e, !0, !0),
                n.pageX = t.pageX,
                n.pageY = t.pageY,
                t.target.dispatchEvent(n)
            }
            ,
            e.click = function(t) {
                var e, n = t.target;
                /(SELECT|INPUT|TEXTAREA)/i.test(n.tagName) || (e = document.createEvent("MouseEvents"),
                e.initMouseEvent("click", !0, !0, t.view, 1, n.screenX, n.screenY, n.clientX, n.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, 0, null),
                e._constructed = !0,
                n.dispatchEvent(e))
            }
            ,
            e
        }();
        o.prototype = {
            _init: function() {
                this._initEvents()
            },
            _initEvents: function(t) {
                var e = t ? a.removeEvent : a.addEvent
                  , n = this.options.bindToWrapper ? this.wrapper : window;
                e(window, "orientationchange", this),
                e(window, "resize", this),
                this.options.click && e(this.wrapper, "click", this, !0),
                this.options.disableMouse || (e(this.wrapper, "mousedown", this),
                e(n, "mousemove", this),
                e(n, "mousecancel", this),
                e(n, "mouseup", this)),
                a.hasPointer && !this.options.disablePointer && (e(this.wrapper, a.prefixPointerEvent("pointerdown"), this),
                e(n, a.prefixPointerEvent("pointermove"), this),
                e(n, a.prefixPointerEvent("pointercancel"), this),
                e(n, a.prefixPointerEvent("pointerup"), this)),
                a.hasTouch && !this.options.disableTouch && (e(this.wrapper, "touchstart", this),
                e(n, "touchmove", this),
                e(n, "touchcancel", this),
                e(n, "touchend", this)),
                e(this.scroller, "transitionend", this),
                e(this.scroller, "webkitTransitionEnd", this),
                e(this.scroller, "oTransitionEnd", this),
                e(this.scroller, "MSTransitionEnd", this),
                "tab" === this.options.role && (e(this.nav, "touchend", this),
                e(this.nav, "mouseup", this),
                e(this.nav, "pointerup", this))
            },
            refresh: function() {
                this.wrapper.offsetHeight;
                this.wrapperWidth = this.wrapper.clientWidth,
                this.wrapperHeight = this.wrapper.clientHeight;
                var t = window.getComputedStyle(this.wrapper, null)
                  , e = t["padding-top"].replace(/[^-\d.]/g, "")
                  , n = t["padding-bottom"].replace(/[^-\d.]/g, "")
                  , i = t["padding-left"].replace(/[^-\d.]/g, "")
                  , r = t["padding-right"].replace(/[^-\d.]/g, "")
                  , o = window.getComputedStyle(this.scroller, null)
                  , s = o["margin-top"].replace(/[^-\d.]/g, "")
                  , c = o["margin-bottom"].replace(/[^-\d.]/g, "")
                  , l = o["margin-left"].replace(/[^-\d.]/g, "")
                  , u = o["margin-right"].replace(/[^-\d.]/g, "");
                this.scrollerWidth = this.scroller.offsetWidth + parseInt(i) + parseInt(r) + parseInt(l) + parseInt(u),
                this.scrollerHeight = this.scroller.offsetHeight + parseInt(e) + parseInt(n) + parseInt(s) + parseInt(c),
                "slider" !== this.options.role && "tab" !== this.options.role || (this.itemWidth = this.scroller.children[0].clientWidth,
                this.scrollWidth = this.itemWidth * this.count,
                this.scrollerWidth = this.scrollWidth),
                this.maxScrollX = this.wrapperWidth - this.scrollerWidth,
                this.maxScrollY = this.wrapperHeight - this.scrollerHeight,
                this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0,
                this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0,
                this.hasHorizontalScroll || (this.maxScrollX = 0,
                this.scrollerWidth = this.wrapperWidth),
                this.hasVerticalScroll || (this.maxScrollY = 0,
                this.scrollerHeight = this.wrapperHeight),
                this.endTime = 0,
                this.directionX = 0,
                this.directionY = 0,
                this.wrapperOffset = a.offset(this.wrapper),
                this.resetPosition()
            },
            handleEvent: function(t) {
                switch (t.type) {
                case "touchstart":
                case "pointerdown":
                case "MSPointerDown":
                case "mousedown":
                    this._start(t);
                    break;
                case "touchmove":
                case "pointermove":
                case "MSPointerMove":
                case "mousemove":
                    this._move(t);
                    break;
                case "touchend":
                case "pointerup":
                case "MSPointerUp":
                case "mouseup":
                case "touchcancel":
                case "pointercancel":
                case "MSPointerCancel":
                case "mousecancel":
                    this._end(t);
                    break;
                case "orientationchange":
                case "resize":
                    this._resize();
                    break;
                case "transitionend":
                case "webkitTransitionEnd":
                case "oTransitionEnd":
                case "MSTransitionEnd":
                    this._transitionEnd(t);
                    break;
                case "wheel":
                case "DOMMouseScroll":
                case "mousewheel":
                    this._wheel(t);
                    break;
                case "keydown":
                    this._key(t);
                    break;
                case "click":
                    t._constructed || (t.preventDefault(),
                    t.stopPropagation())
                }
            },
            _start: function(t) {
                if ((1 == a.eventType[t.type] || 0 === t.button) && this.enabled && (!this.initiated || a.eventType[t.type] === this.initiated)) {
                    !this.options.preventDefault || a.isBadAndroid || a.preventDefaultException(t.target, this.options.preventDefaultException) || t.preventDefault();
                    var e, n = t.touches ? t.touches[0] : t;
                    if (this.initiated = a.eventType[t.type],
                    this.moved = !1,
                    this.distX = 0,
                    this.distY = 0,
                    this.directionX = 0,
                    this.directionY = 0,
                    this.directionLocked = 0,
                    this._transitionTime(),
                    this.startTime = a.getTime(),
                    this.options.useTransition && this.isInTransition && "slider" !== this.options.role && "tab" !== this.options.role ? (this.isInTransition = !1,
                    e = this.getComputedPosition(),
                    this._translate(Math.round(e.x), Math.round(e.y))) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1),
                    this.startX = this.x,
                    this.startY = this.y,
                    this.absStartX = this.x,
                    this.absStartY = this.y,
                    this.pointX = n.pageX,
                    this.pointY = n.pageY,
                    this.options.autoplay) {
                        var i = this;
                        clearTimeout(this.options.flag),
                        this.options.flag = setTimeout(function() {
                            i._autoplay.apply(i)
                        }, i.options.interval)
                    }
                    this.absStartY < 0 ? r(".icon-packup").removeClass("disabled3").addClass("disabled2") : r(".icon-packup").removeClass("disabled2").addClass("disabled3");
                    var o = r(".car-bg-group").find(".car-bg-color ")
                      , s = o.height() * o.length - r(".car-bg-model").height();
                    this.absStartY <= -s ? r(".icon-unfold").removeClass("disabled2").addClass("disabled3") : r(".icon-unfold").removeClass("disabled3").addClass("disabled2"),
                    console.log("Y=" + this.absStartY + "  H=" + s),
                    event.stopPropagation()
                }
            },
            _move: function(t) {
                if (this.enabled && a.eventType[t.type] === this.initiated) {
                    this.options.preventDefault && t.preventDefault();
                    var e, n, i, o, s = t.touches ? t.touches[0] : t, c = 0, l = 0, u = a.getTime();
                    if ("landscape" === window.initOrientation ? (c = s.pageX - this.pointX,
                    l = s.pageY - this.pointY) : (l = -(s.pageX - this.pointX),
                    c = -(s.pageY - this.pointY)),
                    this.pointX = s.pageX,
                    this.pointY = s.pageY,
                    this.distX += c,
                    this.distY += l,
                    i = Math.abs(this.distX),
                    o = Math.abs(this.distY),
                    !(u - this.endTime > 300 && i < 10 && o < 10)) {
                        if (this.directionLocked || this.options.freeScroll || (i > o + this.options.directionLockThreshold ? this.directionLocked = "h" : o >= i + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"),
                        "h" == this.directionLocked) {
                            if ("tab" === this.options.role && r(this.scroller).children("li").height("auto"),
                            "vertical" == this.options.eventPassthrough)
                                t.preventDefault();
                            else if ("horizontal" == this.options.eventPassthrough)
                                return void (this.initiated = !1);
                            l = 0
                        } else if ("v" == this.directionLocked) {
                            if ("horizontal" == this.options.eventPassthrough)
                                t.preventDefault();
                            else if ("vertical" == this.options.eventPassthrough)
                                return void (this.initiated = !1);
                            c = 0
                        }
                        c = this.hasHorizontalScroll ? c : 0,
                        l = this.hasVerticalScroll ? l : 0,
                        e = this.x + c,
                        n = this.y + l,
                        (e > 0 || e < this.maxScrollX) && (e = this.options.bounce ? this.x + c / 3 : e > 0 ? 0 : this.maxScrollX),
                        (n > 0 || n < this.maxScrollY) && (n = this.options.bounce ? this.y + l / 3 : n > 0 ? 0 : this.maxScrollY),
                        this.directionX = c > 0 ? -1 : c < 0 ? 1 : 0,
                        this.directionY = l > 0 ? -1 : l < 0 ? 1 : 0,
                        this.moved = !0,
                        this._translate(e, n),
                        u - this.startTime > 300 && (this.startTime = u,
                        this.startX = this.x,
                        this.startY = this.y)
                    }
                }
            },
            _end: function(t) {
                if (this.enabled && a.eventType[t.type] === this.initiated) {
                    this.options.preventDefault && !a.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault();
                    var e, n, i = (t.changedTouches && t.changedTouches[0],
                    a.getTime() - this.startTime), o = Math.round(this.x), s = Math.round(this.y), c = Math.abs(o - this.startX), l = (Math.abs(s - this.startY),
                    0), u = "";
                    if (this.isInTransition = 0,
                    this.initiated = 0,
                    this.endTime = a.getTime(),
                    this.resetPosition(this.options.bounceTime))
                        return void ("tab" === this.options.role && r(this.scroller.children[this.currentPage]).siblings("li").height(0));
                    if (this.scrollTo(o, s),
                    this.moved || (this.options.tap && 1 === a.eventType[t.type] && a.tap(t, this.options.tap),
                    this.options.click && a.click(t)),
                    this.options.momentum && i < 300 && (e = this.hasHorizontalScroll ? a.momentum(this.x, this.startX, i, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                        destination: o,
                        duration: 0
                    },
                    n = this.hasVerticalScroll ? a.momentum(this.y, this.startY, i, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                        destination: s,
                        duration: 0
                    },
                    o = e.destination,
                    s = n.destination,
                    l = Math.max(e.duration, n.duration),
                    this.isInTransition = 1),
                    o != this.x || s != this.y)
                        return (o > 0 || o < this.maxScrollX || s > 0 || s < this.maxScrollY) && (u = a.ease.quadratic),
                        void this.scrollTo(o, s, l, u);
                    if ("tab" === this.options.role && r(event.target).closest("ul").hasClass("ui-tab-nav")) {
                        r(this.nav).children().removeClass("current"),
                        r(event.target).addClass("current");
                        var d = this.currentPage;
                        this.currentPage = r(event.target).index(),
                        r(this.scroller).children().height("auto"),
                        this._execEvent("beforeScrollStart", d, this.currentPage)
                    }
                    "slider" !== this.options.role && "tab" !== this.options.role || (c < 30 ? this.scrollTo(-this.itemWidth * this.currentPage, 0, this.options.bounceTime, this.options.bounceEasing) : o - this.startX < 0 ? (this._execEvent("beforeScrollStart", this.currentPage, this.currentPage + 1),
                    this.scrollTo(-this.itemWidth * ++this.currentPage, 0, this.options.bounceTime, this.options.bounceEasing)) : o - this.startX >= 0 && (this._execEvent("beforeScrollStart", this.currentPage, this.currentPage - 1),
                    this.scrollTo(-this.itemWidth * --this.currentPage, 0, this.options.bounceTime, this.options.bounceEasing)),
                    "tab" === this.options.role && r(this.scroller.children[this.currentPage]).siblings("li").height(0),
                    this.indicator && c >= 30 ? (r(this.indicator).children().removeClass("current"),
                    r(this.indicator.children[this.currentPage]).addClass("current")) : this.nav && c >= 30 && (r(this.nav).children().removeClass("current"),
                    r(this.nav.children[this.currentPage]).addClass("current")),
                    r(this.scroller).children().removeClass("current"),
                    r(this.scroller.children[this.currentPage]).addClass("current"))
                }
            },
            _resize: function() {
                var t = this;
                clearTimeout(this.resizeTimeout),
                this.resizeTimeout = setTimeout(function() {
                    t.refresh()
                }, this.options.resizePolling)
            },
            _transitionEnd: function(t) {
                t.target == this.scroller && this.isInTransition && (this._transitionTime(),
                this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1,
                this._execEvent("scrollEnd", this.currentPage)))
            },
            destroy: function() {
                this._initEvents(!0)
            },
            resetPosition: function(t) {
                var e = this.x
                  , n = this.y;
                return t = t || 0,
                !this.hasHorizontalScroll || this.x > 0 ? e = 0 : this.x < this.maxScrollX && (e = this.maxScrollX),
                !this.hasVerticalScroll || this.y > 0 ? n = 0 : this.y < this.maxScrollY && (n = this.maxScrollY),
                (e != this.x || n != this.y) && (this.scrollTo(e, n, t, this.options.bounceEasing),
                !0)
            },
            disable: function() {
                this.enabled = !1
            },
            enable: function() {
                this.enabled = !0
            },
            on: function(t, e) {
                this._events[t] || (this._events[t] = []),
                this._events[t].push(e)
            },
            off: function(t, e) {
                if (this._events[t]) {
                    var n = this._events[t].indexOf(e);
                    n > -1 && this._events[t].splice(n, 1)
                }
            },
            _execEvent: function(t) {
                if (this._events[t]) {
                    var e = 0
                      , n = this._events[t].length;
                    if (n)
                        for (; e < n; e++)
                            this._events[t][e].apply(this, [].slice.call(arguments, 1))
                }
            },
            scrollTo: function(t, e, n, i) {
                i = i || a.ease.circular,
                this.isInTransition = this.options.useTransition && n > 0,
                !n || this.options.useTransition && i.style ? ("slider" !== this.options.role && "tab" !== this.options.role || (n = this.options.duration,
                this.scrollerStyle[a.style.transitionProperty] = a.style.transform),
                this.scrollerStyle[a.style.transitionTimingFunction] = i.style,
                this._transitionTime(n),
                this._translate(t, e)) : this._animate(t, e, n, i.fn)
            },
            scrollToElement: function(t, e, n, i, r) {
                if (t = t.nodeType ? t : this.scroller.querySelector(t)) {
                    var o = a.offset(t);
                    o.left -= this.wrapperOffset.left,
                    o.top -= this.wrapperOffset.top,
                    !0 === n && (n = Math.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)),
                    !0 === i && (i = Math.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)),
                    o.left -= n || 0,
                    o.top -= i || 0,
                    o.left = o.left > 0 ? 0 : o.left < this.maxScrollX ? this.maxScrollX : o.left,
                    o.top = o.top > 0 ? 0 : o.top < this.maxScrollY ? this.maxScrollY : o.top,
                    e = void 0 === e || null === e || "auto" === e ? Math.max(Math.abs(this.x - o.left), Math.abs(this.y - o.top)) : e,
                    this.scrollTo(o.left, o.top, e, r)
                }
            },
            _transitionTime: function(t) {
                t = t || 0,
                this.scrollerStyle[a.style.transitionDuration] = t + "ms",
                !t && a.isBadAndroid && (this.scrollerStyle[a.style.transitionDuration] = "0.001s")
            },
            _translate: function(t, e) {
                this.options.useTransform ? this.scrollerStyle[a.style.transform] = "translate(" + t + "px," + e + "px)" + this.translateZ : (t = Math.round(t),
                e = Math.round(e),
                this.scrollerStyle.left = t + "px",
                this.scrollerStyle.top = e + "px"),
                this.x = t,
                this.y = e
            },
            getComputedPosition: function() {
                var t, e, n = window.getComputedStyle(this.scroller, null);
                return this.options.useTransform ? (n = n[a.style.transform].split(")")[0].split(", "),
                t = +(n[12] || n[4]),
                e = +(n[13] || n[5])) : (t = +n.left.replace(/[^-\d.]/g, ""),
                e = +n.top.replace(/[^-\d.]/g, "")),
                {
                    x: t,
                    y: e
                }
            },
            _animate: function(t, e, n, i) {
                function r() {
                    var h, f, p, v = a.getTime();
                    if (v >= d)
                        return o.isAnimating = !1,
                        o._translate(t, e),
                        void (o.resetPosition(o.options.bounceTime) || o._execEvent("scrollEnd", this.currentPage));
                    v = (v - u) / n,
                    p = i(v),
                    h = (t - c) * p + c,
                    f = (e - l) * p + l,
                    o._translate(h, f),
                    o.isAnimating && s(r)
                }
                var o = this
                  , c = this.x
                  , l = this.y
                  , u = a.getTime()
                  , d = u + n;
                this.isAnimating = !0,
                r()
            },
            _autoplay: function() {
                var t = this
                  , e = t.currentPage;
                t.currentPage = t.currentPage >= t.count - 1 ? 0 : ++t.currentPage,
                t._execEvent("beforeScrollStart", e, t.currentPage),
                "tab" === this.options.role && (r(this.scroller).children().height("auto"),
                document.body.scrollTop = 0),
                t.scrollTo(-t.itemWidth * t.currentPage, 0, t.options.bounceTime, t.options.bounceEasing),
                t.indicator ? (r(t.indicator).children().removeClass("current"),
                r(t.indicator.children[t.currentPage]).addClass("current"),
                r(t.scroller).children().removeClass("current"),
                r(t.scroller.children[t.currentPage]).addClass("current")) : t.nav && (r(t.nav).children().removeClass("current"),
                r(t.nav.children[t.currentPage]).addClass("current"),
                r(t.scroller).children().removeClass("current"),
                r(t.scroller.children[t.currentPage]).addClass("current")),
                t.options.flag = setTimeout(function() {
                    t._autoplay.apply(t)
                }, t.options.interval)
            }
        },
        window.ah = window.ah || {},
        window.autohome = window.autohome || {},
        window.ah.Scroll = window.autohome.Scroll = o,
        void 0 !== (i = function(t, e, n) {
            n.exports = o
        }
        .call(e, n, e, t)) && (t.exports = i)
    }(window.jQuery)
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function r(t) {
        return t % 2 == 1 ? t + 1 : t
    }
    function o() {
        var t = document.createElement("ul")
          , e = !0
          , n = !1
          , i = void 0;
        try {
            for (var r, o = (0,
            l.default)(this.setting.colors); !(e = (r = o.next()).done); e = !0) {
                var s = r.value
                  , c = s.rgb.split("|")
                  , u = (f.default.hexToRgba("#" + c[0], 10).rgba,
                '<div class="ball0" style="background-color: #' + c[0] + ';"></div>');
                c.length > 1 && (u = '<div class="ball1" style="background-color: #' + c[0] + ';"></div>\n                        <div class="ball2" style="background-color: #' + c[1] + ';"></div>'),
                t.innerHTML += '<li data-value="' + s.eName + '">\n                            <div class="color-bg" ></div>\n                            <div class="color-img">' + u + "</div>\n                        </li>"
            }
        } catch (t) {
            n = !0,
            i = t
        } finally {
            try {
                !e && o.return && o.return()
            } finally {
                if (n)
                    throw i
            }
        }
        if ($("#scroller").append(t),
        this.setting.colors.length > this._count)
            this.drag = new v.default({
                id: "scroller",
                wrapperWidth: this.setting.basicWidth * this._count,
                scrollerWidth: this.setting.basicWidth * this.setting.colors.length,
                colorClick: a
            }),
            this.drag.init();
        else {
            var d = "ontouchend"in document ? "ontouchstart" : "onmousedown";
            document.getElementById("scroller")[d] = null,
            $("#colorScroll").off(f.default.clickEvent, ".bottomIcon"),
            $("#colorScroll").off(f.default.clickEvent, ".topIcon")
        }
        $("#scroller li").on(m, a)
    }
    function s(t, e) {
        this.drag && this.drag.setOrientation(t);
        var n = this.setting.w
          , i = this.setting.h
          , r = this.setting.ih
          , o = this.setting.colors.length;
        if ($("#scroller").css({
            left: 0,
            top: 0
        }),
        $("#scroller li").css({
            width: n,
            height: n
        }),
        $(".topIcon").css({
            width: n,
            height: r,
            top: 0,
            left: 0
        }),
        $(".bottomIcon").css({
            width: n,
            height: r
        }),
        $("#colorScroll .icon1,.icon2").css({
            width: this.setting.iconWidth,
            height: this.setting.iconHeight,
            left: this.setting.iconLeft,
            top: this.setting.iconTop
        }),
        "landscape" === t ? ($("#colorScroll").css({
            width: i,
            height: n,
            left: "50%",
            bottom: "20px",
            top: "auto",
            transform: "translate(-50%,0)"
        }),
        $("#wrapper").css({
            width: i - 2 * r + "px",
            height: n + "px",
            top: 0,
            left: r + "px"
        }),
        $("#scroller").css({
            width: n * o + "px",
            height: "100%"
        }),
        $("#scroller li").css({
            float: "left"
        }),
        $(".bottomIcon").css({
            left: i - r,
            top: 0
        }),
        $("#colorScroll .icon1,.icon2").css({
            transform: "rotate(-90deg)"
        })) : "portrait" === t && ($("#colorScroll").css({
            width: n,
            height: i,
            left: "30px",
            bottom: "auto",
            top: "50%"
        }),
        g || $("#colorScroll").css({
            transform: "translate(0,-50%)"
        }),
        $("#wrapper").css({
            width: n,
            height: i - 2 * r,
            top: r,
            left: 0
        }),
        $("#scroller").css({
            height: "auto",
            width: "100%"
        }),
        $("#scroller li").css({
            float: "none"
        }),
        $(".bottomIcon").css({
            top: i - r,
            left: 0
        }),
        $("#colorScroll .icon1,.icon2").css({
            transform: "rotate(0deg)"
        })),
        this.setting.colors.length === this._count ? ($("#colorScroll .icon1").removeClass("enable22").addClass("disable22"),
        $("#colorScroll .icon2").removeClass("enable22").addClass("disable22")) : ($("#colorScroll .icon1").removeClass("enable22").addClass("disable22"),
        $("#colorScroll .icon2").removeClass("disable22").addClass("enable22")),
        e) {
            var s = this.setting.defaultColor + 1;
            if ($("#scroller ul li:nth-child(" + s + ")").find(".color-bg").hide(),
            $("#scroller ul li:nth-child(" + s + ")").find(".color-img").addClass("active"),
            s > this.setting.showCount) {
                var a = this.setting.colors.length - this.setting.showCount
                  , c = s > a ? a : s - 1;
                $("#scroller").css("top", -c * this.setting.basicWidth + "px"),
                s > a ? ($("#colorScroll .icon1").removeClass("disable22").addClass("enable22"),
                $("#colorScroll .icon2").removeClass("enable22").addClass("disable22")) : ($("#colorScroll .icon1").removeClass("disable22").addClass("enable22"),
                $("#colorScroll .icon2").removeClass("disable22").addClass("enable22"))
            }
        }
    }
    function a() {
        var t = $(this).attr("data-value")
          , e = null
          , n = !0
          , i = !1
          , r = void 0;
        try {
            for (var o, s = (0,
            l.default)(y); !(n = (o = s.next()).done); n = !0) {
                var a = o.value;
                if (a.eName === parseInt(t)) {
                    e = a;
                    break
                }
            }
        } catch (t) {
            i = !0,
            r = t
        } finally {
            try {
                !n && s.return && s.return()
            } finally {
                if (i)
                    throw r
            }
        }
        $("#scroller li .color-bg").show(),
        $(this).find(".color-bg").hide(),
        $("#scroller li .color-img").removeClass("active"),
        $(this).find(".color-img").addClass("active"),
        w(e.cName, e.rgb);
        var c = $(this).attr("data-value");
        sendColorClickEvent(e.baseColorName, e.cName, e.rgb),
        b.setting.currentColor = c,
        b.gradedLoad()
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var c = n(21)
      , l = i(c)
      , u = n(131)
      , d = i(u)
      , h = n(8)
      , f = i(h)
      , p = n(135)
      , v = i(p)
      , m = f.default.clickEvent
      , g = "ontouchend"in document
      , y = []
      , w = f.default.throttle(f.default.colorNameTip, 200)
      , b = null
      , _ = function(t, e) {
        this.$element = t,
        this._count = e.colors.length > e.showCount ? e.showCount : e.colors.length;
        var n = e.basicWidth
          , i = e.basicWidth;
        this.defaults = {
            w: i,
            h: i * this._count + 2 * n,
            ih: n
        },
        this.setting = (0,
        d.default)({}, this.defaults, e),
        y = this.setting.colors,
        this.setting.iconWidth = r(e.basicWidth / 2),
        this.setting.iconHeight = r(this.setting.iconWidth / 2),
        this.setting.iconLeft = (e.basicWidth - this.setting.iconWidth) / 2,
        this.setting.iconTop = (e.basicWidth - this.setting.iconHeight) / 2,
        this.setting.defaultColor = e.defaultColor,
        b = e.dataObj
    };
    _.prototype = {
        constructor: _,
        createColorElement: o,
        createScroller: s,
        init: function(t) {
            this.createColorElement(),
            this.createScroller(t, !0)
        }
    },
    e.default = _
}
, function(t, e, n) {
    t.exports = {
        default: n(132),
        __esModule: !0
    }
}
, function(t, e, n) {
    n(133),
    t.exports = n(2).Object.assign
}
, function(t, e, n) {
    var i = n(3);
    i(i.S + i.F, "Object", {
        assign: n(134)
    })
}
, function(t, e, n) {
    "use strict";
    var i = n(25)
      , r = n(46)
      , o = n(28)
      , s = n(39)
      , a = n(29)
      , c = Object.assign;
    t.exports = !c || n(14)(function() {
        var t = {}
          , e = {}
          , n = Symbol()
          , i = "abcdefghijklmnopqrst";
        return t[n] = 7,
        i.split("").forEach(function(t) {
            e[t] = t
        }),
        7 != c({}, t)[n] || Object.keys(c({}, e)).join("") != i
    }) ? function(t, e) {
        for (var n = s(t), c = arguments.length, l = 1, u = r.f, d = o.f; c > l; )
            for (var h, f = a(arguments[l++]), p = u ? i(f).concat(u(f)) : i(f), v = p.length, m = 0; v > m; )
                d.call(f, h = p[m++]) && (n[h] = f[h]);
        return n
    }
    : c
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        this.oDiv = document.getElementById(t.id),
        this.disX = 0,
        this.disY = 0,
        this.wrapperWidth = t.wrapperWidth,
        this.scrollerWidth = t.scrollerWidth,
        this.colorClick = t.colorClick,
        this._clickSwitch = !0
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(8)
      , o = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(r)
      , s = "ontouchend"in document
      , a = s ? "ontouchstart" : "onmousedown"
      , c = s ? "ontouchmove" : "onmousemove"
      , l = s ? "ontouchend" : "onmouseup";
    i.prototype.init = function() {
        var t = this;
        this.oDiv[a] = function(e) {
            var n = e || window.event;
            return t.fnDown(n),
            !1
        }
        ;
        var e = document.getElementById("scroller");
        $("#colorScroll").on(o.default.clickEvent, ".bottomIcon", function() {
            if ("landscape" === t.orientation) {
                var n = parseInt(e.style.left) - t.wrapperWidth;
                e.style.left = t.dragClac(n) + "px"
            } else {
                var i = parseInt(e.style.top) - t.wrapperWidth;
                e.style.top = t.dragClac(i) + "px"
            }
        }),
        $("#colorScroll").on(o.default.clickEvent, ".topIcon", function() {
            if ("landscape" === t.orientation) {
                var n = parseInt(e.style.left) + t.wrapperWidth;
                e.style.left = t.dragClac(n) + "px"
            } else {
                var i = parseInt(e.style.top) + t.wrapperWidth;
                e.style.top = t.dragClac(i) + "px"
            }
        })
    }
    ,
    i.prototype.setOrientation = function(t) {
        this.orientation = t
    }
    ,
    i.prototype.fnDown = function(t) {
        var e = document.documentElement.clientWidth
          , n = this;
        s ? (this.disX = t.touches[0].clientX - this.oDiv.offsetLeft,
        this.disY = t.touches[0].clientY - this.oDiv.offsetTop,
        "portrait" === window.initOrientation && (this.disX = e - t.touches[0].clientX - this.oDiv.offsetTop,
        this.disY = t.touches[0].clientY - this.oDiv.offsetLeft)) : (this.disX = t.clientX - this.oDiv.offsetLeft,
        this.disY = t.clientY - this.oDiv.offsetTop),
        document[c] = function(t) {
            var e = t || window.event;
            n.fnMove(e)
        }
        ,
        document[l] = function(t) {
            var e = t || window.event;
            n.fnUp(e)
        }
    }
    ,
    i.prototype.fnMove = function(t) {
        var e = void 0
          , n = void 0
          , i = void 0
          , r = void 0
          , a = document.documentElement.clientWidth;
        s ? (e = t.touches[0].clientX - this.disX,
        n = t.touches[0].clientY - this.disY,
        i = t.touches[0].clientX - this.oDiv.offsetLeft,
        r = t.touches[0].clientY - this.oDiv.offsetTop,
        "portrait" === window.initOrientation && (e = a - t.touches[0].clientX - this.disX,
        i = a - t.touches[0].clientX - this.oDiv.offsetTop,
        r = t.touches[0].clientY - this.oDiv.offsetLeft)) : (e = t.clientX - this.disX,
        n = t.clientY - this.disY,
        i = t.clientX - this.oDiv.offsetLeft,
        r = t.clientY - this.oDiv.offsetTop),
        Math.abs(i - this.disX) < 1 && Math.abs(r - this.disY) < 1 || ("landscape" === this.orientation ? this.oDiv.style.left = this.dragClac(e) + "px" : (this.oDiv.style.top = this.dragClac(n) + "px",
        "portrait" === window.initOrientation && (this.oDiv.style.top = this.dragClac(e) + "px")),
        this._clickSwitch && ($("#scroller li").off(o.default.clickEvent, this.colorClick),
        this._clickSwitch = !1))
    }
    ,
    i.prototype.fnUp = function() {
        var t = this;
        document[c] = null,
        document[l] = null,
        setTimeout(function() {
            t._clickSwitch || ($("#scroller li").on(o.default.clickEvent, t.colorClick),
            t._clickSwitch = !0)
        }, 200)
    }
    ,
    i.prototype.dragClac = function(t) {
        return t <= this.wrapperWidth - this.scrollerWidth ? (t = this.wrapperWidth - this.scrollerWidth,
        this.wrapperWidth === this.scrollerWidth ? ($("#colorScroll .icon1").removeClass("enable22").addClass("disable22"),
        $("#colorScroll .icon2").removeClass("enable22").addClass("disable22")) : ($("#colorScroll .icon1").removeClass("disable22").addClass("enable22"),
        $("#colorScroll .icon2").removeClass("enable22").addClass("disable22"))) : t >= 0 ? (t = 0,
        this.wrapperWidth === this.scrollerWidth ? ($("#colorScroll .icon1").removeClass("enable22").addClass("disable22"),
        $("#colorScroll .icon2").removeClass("enable22").addClass("disable22")) : ($("#colorScroll .icon1").removeClass("enable22").addClass("disable22"),
        $("#colorScroll .icon2").removeClass("disable22").addClass("enable22"))) : ($("#colorScroll .icon1").removeClass("disable22").addClass("enable22"),
        $("#colorScroll .icon2").removeClass("disable22").addClass("enable22")),
        t
    }
    ,
    e.default = i
}
, function(t, e, n) {
    "use strict";
    !function() {
        for (var t = 0, e = ["ms", "moz", "webkit", "o"], n = 0; n < e.length && !window.requestAnimationFrame; ++n)
            window.requestAnimationFrame = window[e[n] + "RequestAnimationFrame"],
            window.cancelAnimationFrame = window[e[n] + "CancelAnimationFrame"] || window[e[n] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e, n) {
            var i = (new Date).getTime()
              , r = Math.max(0, 16 - (i - t))
              , o = window.setTimeout(function() {
                e(i + r)
            }, r);
            return t = i + r,
            o
        }
        ),
        window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
            clearTimeout(t)
        }
        )
    }()
}
, function(t, e, n) {
    (function(n) {
        var i, r, o = function() {
            this._tweens = {},
            this._tweensAddedDuringUpdate = {}
        };
        o.prototype = {
            getAll: function() {
                return Object.keys(this._tweens).map(function(t) {
                    return this._tweens[t]
                }
                .bind(this))
            },
            removeAll: function() {
                this._tweens = {}
            },
            add: function(t) {
                this._tweens[t.getId()] = t,
                this._tweensAddedDuringUpdate[t.getId()] = t
            },
            remove: function(t) {
                delete this._tweens[t.getId()],
                delete this._tweensAddedDuringUpdate[t.getId()]
            },
            update: function(t, e) {
                var n = Object.keys(this._tweens);
                if (0 === n.length)
                    return !1;
                for (t = void 0 !== t ? t : s.now(); n.length > 0; ) {
                    this._tweensAddedDuringUpdate = {};
                    for (var i = 0; i < n.length; i++) {
                        var r = this._tweens[n[i]];
                        r && !1 === r.update(t) && (r._isPlaying = !1,
                        e || delete this._tweens[n[i]])
                    }
                    n = Object.keys(this._tweensAddedDuringUpdate)
                }
                return !0
            }
        };
        var s = new o;
        s.Group = o,
        s._nextId = 0,
        s.nextId = function() {
            return s._nextId++
        }
        ,
        "undefined" == typeof window && void 0 !== n ? s.now = function() {
            var t = n.hrtime();
            return 1e3 * t[0] + t[1] / 1e6
        }
        : "undefined" != typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? s.now = window.performance.now.bind(window.performance) : void 0 !== Date.now ? s.now = Date.now : s.now = function() {
            return (new Date).getTime()
        }
        ,
        s.Tween = function(t, e) {
            this._object = t,
            this._valuesStart = {},
            this._valuesEnd = {},
            this._valuesStartRepeat = {},
            this._duration = 1e3,
            this._repeat = 0,
            this._repeatDelayTime = void 0,
            this._yoyo = !1,
            this._isPlaying = !1,
            this._reversed = !1,
            this._delayTime = 0,
            this._startTime = null,
            this._easingFunction = s.Easing.Linear.None,
            this._interpolationFunction = s.Interpolation.Linear,
            this._chainedTweens = [],
            this._onStartCallback = null,
            this._onStartCallbackFired = !1,
            this._onUpdateCallback = null,
            this._onCompleteCallback = null,
            this._onStopCallback = null,
            this._group = e || s,
            this._id = s.nextId()
        }
        ,
        s.Tween.prototype = {
            getId: function() {
                return this._id
            },
            isPlaying: function() {
                return this._isPlaying
            },
            to: function(t, e) {
                return this._valuesEnd = t,
                void 0 !== e && (this._duration = e),
                this
            },
            start: function(t) {
                this._group.add(this),
                this._isPlaying = !0,
                this._onStartCallbackFired = !1,
                this._startTime = void 0 !== t ? "string" == typeof t ? s.now() + parseFloat(t) : t : s.now(),
                this._startTime += this._delayTime;
                for (var e in this._valuesEnd) {
                    if (this._valuesEnd[e]instanceof Array) {
                        if (0 === this._valuesEnd[e].length)
                            continue;
                        this._valuesEnd[e] = [this._object[e]].concat(this._valuesEnd[e])
                    }
                    void 0 !== this._object[e] && (this._valuesStart[e] = this._object[e],
                    this._valuesStart[e]instanceof Array == !1 && (this._valuesStart[e] *= 1),
                    this._valuesStartRepeat[e] = this._valuesStart[e] || 0)
                }
                return this
            },
            stop: function() {
                return this._isPlaying ? (this._group.remove(this),
                this._isPlaying = !1,
                null !== this._onStopCallback && this._onStopCallback(this._object),
                this.stopChainedTweens(),
                this) : this
            },
            end: function() {
                return this.update(this._startTime + this._duration),
                this
            },
            stopChainedTweens: function() {
                for (var t = 0, e = this._chainedTweens.length; t < e; t++)
                    this._chainedTweens[t].stop()
            },
            delay: function(t) {
                return this._delayTime = t,
                this
            },
            repeat: function(t) {
                return this._repeat = t,
                this
            },
            repeatDelay: function(t) {
                return this._repeatDelayTime = t,
                this
            },
            yoyo: function(t) {
                return this._yoyo = t,
                this
            },
            easing: function(t) {
                return this._easingFunction = t,
                this
            },
            interpolation: function(t) {
                return this._interpolationFunction = t,
                this
            },
            chain: function() {
                return this._chainedTweens = arguments,
                this
            },
            onStart: function(t) {
                return this._onStartCallback = t,
                this
            },
            onUpdate: function(t) {
                return this._onUpdateCallback = t,
                this
            },
            onComplete: function(t) {
                return this._onCompleteCallback = t,
                this
            },
            onStop: function(t) {
                return this._onStopCallback = t,
                this
            },
            update: function(t) {
                var e, n, i;
                if (t < this._startTime)
                    return !0;
                !1 === this._onStartCallbackFired && (null !== this._onStartCallback && this._onStartCallback(this._object),
                this._onStartCallbackFired = !0),
                n = (t - this._startTime) / this._duration,
                n = n > 1 ? 1 : n,
                i = this._easingFunction(n);
                for (e in this._valuesEnd)
                    if (void 0 !== this._valuesStart[e]) {
                        var r = this._valuesStart[e] || 0
                          , o = this._valuesEnd[e];
                        o instanceof Array ? this._object[e] = this._interpolationFunction(o, i) : ("string" == typeof o && (o = "+" === o.charAt(0) || "-" === o.charAt(0) ? r + parseFloat(o) : parseFloat(o)),
                        "number" == typeof o && (this._object[e] = r + (o - r) * i))
                    }
                if (null !== this._onUpdateCallback && this._onUpdateCallback(this._object),
                1 === n) {
                    if (this._repeat > 0) {
                        isFinite(this._repeat) && this._repeat--;
                        for (e in this._valuesStartRepeat) {
                            if ("string" == typeof this._valuesEnd[e] && (this._valuesStartRepeat[e] = this._valuesStartRepeat[e] + parseFloat(this._valuesEnd[e])),
                            this._yoyo) {
                                var s = this._valuesStartRepeat[e];
                                this._valuesStartRepeat[e] = this._valuesEnd[e],
                                this._valuesEnd[e] = s
                            }
                            this._valuesStart[e] = this._valuesStartRepeat[e]
                        }
                        return this._yoyo && (this._reversed = !this._reversed),
                        void 0 !== this._repeatDelayTime ? this._startTime = t + this._repeatDelayTime : this._startTime = t + this._delayTime,
                        !0
                    }
                    null !== this._onCompleteCallback && this._onCompleteCallback(this._object);
                    for (var a = 0, c = this._chainedTweens.length; a < c; a++)
                        this._chainedTweens[a].start(this._startTime + this._duration);
                    return !1
                }
                return !0
            }
        },
        s.Easing = {
            Linear: {
                None: function(t) {
                    return t
                }
            },
            Quadratic: {
                In: function(t) {
                    return t * t
                },
                Out: function(t) {
                    return t * (2 - t)
                },
                InOut: function(t) {
                    return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                }
            },
            Cubic: {
                In: function(t) {
                    return t * t * t
                },
                Out: function(t) {
                    return --t * t * t + 1
                },
                InOut: function(t) {
                    return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                }
            },
            Quartic: {
                In: function(t) {
                    return t * t * t * t
                },
                Out: function(t) {
                    return 1 - --t * t * t * t
                },
                InOut: function(t) {
                    return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                }
            },
            Quintic: {
                In: function(t) {
                    return t * t * t * t * t
                },
                Out: function(t) {
                    return --t * t * t * t * t + 1
                },
                InOut: function(t) {
                    return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                }
            },
            Sinusoidal: {
                In: function(t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                },
                Out: function(t) {
                    return Math.sin(t * Math.PI / 2)
                },
                InOut: function(t) {
                    return .5 * (1 - Math.cos(Math.PI * t))
                }
            },
            Exponential: {
                In: function(t) {
                    return 0 === t ? 0 : Math.pow(1024, t - 1)
                },
                Out: function(t) {
                    return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                },
                InOut: function(t) {
                    return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                }
            },
            Circular: {
                In: function(t) {
                    return 1 - Math.sqrt(1 - t * t)
                },
                Out: function(t) {
                    return Math.sqrt(1 - --t * t)
                },
                InOut: function(t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                }
            },
            Elastic: {
                In: function(t) {
                    return 0 === t ? 0 : 1 === t ? 1 : -Math.pow(2, 10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI)
                },
                Out: function(t) {
                    return 0 === t ? 0 : 1 === t ? 1 : Math.pow(2, -10 * t) * Math.sin(5 * (t - .1) * Math.PI) + 1
                },
                InOut: function(t) {
                    return 0 === t ? 0 : 1 === t ? 1 : (t *= 2,
                    t < 1 ? -.5 * Math.pow(2, 10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI) : .5 * Math.pow(2, -10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI) + 1)
                }
            },
            Back: {
                In: function(t) {
                    var e = 1.70158;
                    return t * t * ((e + 1) * t - e)
                },
                Out: function(t) {
                    var e = 1.70158;
                    return --t * t * ((e + 1) * t + e) + 1
                },
                InOut: function(t) {
                    var e = 2.5949095;
                    return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
                }
            },
            Bounce: {
                In: function(t) {
                    return 1 - s.Easing.Bounce.Out(1 - t)
                },
                Out: function(t) {
                    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                },
                InOut: function(t) {
                    return t < .5 ? .5 * s.Easing.Bounce.In(2 * t) : .5 * s.Easing.Bounce.Out(2 * t - 1) + .5
                }
            }
        },
        s.Interpolation = {
            Linear: function(t, e) {
                var n = t.length - 1
                  , i = n * e
                  , r = Math.floor(i)
                  , o = s.Interpolation.Utils.Linear;
                return e < 0 ? o(t[0], t[1], i) : e > 1 ? o(t[n], t[n - 1], n - i) : o(t[r], t[r + 1 > n ? n : r + 1], i - r)
            },
            Bezier: function(t, e) {
                for (var n = 0, i = t.length - 1, r = Math.pow, o = s.Interpolation.Utils.Bernstein, a = 0; a <= i; a++)
                    n += r(1 - e, i - a) * r(e, a) * t[a] * o(i, a);
                return n
            },
            CatmullRom: function(t, e) {
                var n = t.length - 1
                  , i = n * e
                  , r = Math.floor(i)
                  , o = s.Interpolation.Utils.CatmullRom;
                return t[0] === t[n] ? (e < 0 && (r = Math.floor(i = n * (1 + e))),
                o(t[(r - 1 + n) % n], t[r], t[(r + 1) % n], t[(r + 2) % n], i - r)) : e < 0 ? t[0] - (o(t[0], t[0], t[1], t[1], -i) - t[0]) : e > 1 ? t[n] - (o(t[n], t[n], t[n - 1], t[n - 1], i - n) - t[n]) : o(t[r ? r - 1 : 0], t[r], t[n < r + 1 ? n : r + 1], t[n < r + 2 ? n : r + 2], i - r)
            },
            Utils: {
                Linear: function(t, e, n) {
                    return (e - t) * n + t
                },
                Bernstein: function(t, e) {
                    var n = s.Interpolation.Utils.Factorial;
                    return n(t) / n(e) / n(t - e)
                },
                Factorial: function() {
                    var t = [1];
                    return function(e) {
                        var n = 1;
                        if (t[e])
                            return t[e];
                        for (var i = e; i > 1; i--)
                            n *= i;
                        return t[e] = n,
                        n
                    }
                }(),
                CatmullRom: function(t, e, n, i, r) {
                    var o = .5 * (n - t)
                      , s = .5 * (i - e)
                      , a = r * r;
                    return (2 * e - 2 * n + o + s) * (r * a) + (-3 * e + 3 * n - 2 * o - s) * a + o * r + e
                }
            }
        },
        function(n) {
            i = [],
            void 0 !== (r = function() {
                return s
            }
            .apply(e, i)) && (t.exports = r)
        }()
    }
    ).call(e, n(138))
}
, function(t, e) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }
    function i() {
        throw new Error("clearTimeout has not been defined")
    }
    function r(t) {
        if (u === setTimeout)
            return setTimeout(t, 0);
        if ((u === n || !u) && setTimeout)
            return u = setTimeout,
            setTimeout(t, 0);
        try {
            return u(t, 0)
        } catch (e) {
            try {
                return u.call(null, t, 0)
            } catch (e) {
                return u.call(this, t, 0)
            }
        }
    }
    function o(t) {
        if (d === clearTimeout)
            return clearTimeout(t);
        if ((d === i || !d) && clearTimeout)
            return d = clearTimeout,
            clearTimeout(t);
        try {
            return d(t)
        } catch (e) {
            try {
                return d.call(null, t)
            } catch (e) {
                return d.call(this, t)
            }
        }
    }
    function s() {
        v && f && (v = !1,
        f.length ? p = f.concat(p) : m = -1,
        p.length && a())
    }
    function a() {
        if (!v) {
            var t = r(s);
            v = !0;
            for (var e = p.length; e; ) {
                for (f = p,
                p = []; ++m < e; )
                    f && f[m].run();
                m = -1,
                e = p.length
            }
            f = null,
            v = !1,
            o(t)
        }
    }
    function c(t, e) {
        this.fun = t,
        this.array = e
    }
    function l() {}
    var u, d, h = t.exports = {};
    !function() {
        try {
            u = "function" == typeof setTimeout ? setTimeout : n
        } catch (t) {
            u = n
        }
        try {
            d = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (t) {
            d = i
        }
    }();
    var f, p = [], v = !1, m = -1;
    h.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
        p.push(new c(t,e)),
        1 !== p.length || v || r(a)
    }
    ,
    c.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    h.title = "browser",
    h.browser = !0,
    h.env = {},
    h.argv = [],
    h.version = "",
    h.versions = {},
    h.on = l,
    h.addListener = l,
    h.once = l,
    h.off = l,
    h.removeListener = l,
    h.removeAllListeners = l,
    h.emit = l,
    h.prependListener = l,
    h.prependOnceListener = l,
    h.listeners = function(t) {
        return []
    }
    ,
    h.binding = function(t) {
        throw new Error("process.binding is not supported")
    }
    ,
    h.cwd = function() {
        return "/"
    }
    ,
    h.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }
    ,
    h.umask = function() {
        return 0
    }
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function r(t) {
        $(".message-div").remove();
        var e = document.createElement("div");
        $(e).addClass("message-div").text(t).appendTo($("#bg-div")),
        setTimeout(function() {
            $(e).remove()
        }, 2e3)
    }
    var o = n(8)
      , s = i(o);
    n(140);
    var a = n(62)
      , c = i(a)
      , l = {
        exprand: !1,
        gyto: !1,
        music: !1,
        vr: !1,
        show: !1,
        praise: !1
    }
      , u = s.default.btn_scale
      , d = s.default.getQueryString
      , h = s.default.clickEvent
      , f = document.getElementById("audio");
    f.src = globalConfig.musicurl;
    var p = !0
      , v = 'json/getorderenabled.json';
    $.ajax({
        url: v,
        dataType:"json",
        success: function(t) {
            console.log(t),
            !1 === t.Enabled && (p = !1)
        },
        error: function() {}
    }),
    $(".banner .show").on(h, function() {
        var t = this;
        sendClickEvent("vr_show_hide_click", "click", "", "", "", "", "", 0, 0, 0),
        l.show = !l.show;
        var e = $(".banner .show .img")
          , n = $(".banner .show .text");
        e.css("transition", "0s"),
        l.show ? (e.css("background-position-y", "0"),
        n.text("显示"),
        $(".banner,.mask1").css({
            transform: "translateY(200px)"
        }),
        setTimeout(function() {
            $(t).css({
                transform: "translateY(-200px) scale(" + u + ")"
            }),
            $("#back-div").hide(),
            $("#title-div").hide(),
            $(".car-bg-change").hide(),
            $("#qrcode-div").hide(),
            $(".anim").remove()
        }, 500)) : (e.css("background-position-y", "-70px"),
        n.text("隐藏"),
        $(this).css({
            transform: "translateY(0) scale(" + u + ")"
        }),
        setTimeout(function() {
            $(".banner").css({
                transform: "translateY(0)"
            }),
            $(".mask1").css({
                transform: "translateY(0) scaleY(" + u + ")"
            }),
            d("returnurl") && "app" !== globalEnv.src && $("#back-div").show(),
            $("#title-div").show(),
            $(".car-bg-change").show(),
            $("#qrcode-div").show(),
            c.default.addAnchor($(".threesixty_images li img.current-image").parent().index())
        }, 300)),
        setTimeout(function() {
            e.css("transition", "0.2s")
        }, 0)
    }),
    $(".praise .text").text(globalConfig.like);
    var m = $(".praise .bg2");
    m.on(h, function() {
        sendClickEvent("vr_like", "click", "", "", "", "", "", 0, 0, 0),
        $(".praise .text").text(++globalConfig.like),
        m.css("transition", "0s"),
        m.css({
            "background-position-x": "-360px",
            "pointer-events": "none"
        }),
        m.off(h),
        $.get("/api/likeext?id=" + globalConfig.id)
    }),
    $(".setup").on(h, function() {
        l.exprand = !l.exprand;
        l.exprand ? ($(".setup .screen,.music").show(),
        setTimeout(function() {
            $(".banner .group .setup .btn3").css({
                left: "10px",
                top: "-100px",
                opacity: 1
            }),
            $(".banner .group .setup .music").css({
                left: "60px"
            }),
            $(".banner .group .setup .screen").css({
                left: "-40px"
            })
        }, 0)) : ($(".banner .group .setup .btn3").css({
            left: "10px",
            top: "-100px",
            opacity: 0
        }),
        setTimeout(function() {
            $(".btn3").hide()
        }, 200))
    }),
    $(".swich-scene").on(h, function() {
        sendClickEvent("vr_switch_int_click", "click", "", "", "", "", "", 0, 0, 0),
        "0" != globalConfig.panoid && "" != globalConfig.panourl ? window.location.href = globalConfig.panourl : r("此车暂无全景内饰，敬请期待!")
    }),
    $(".ask-price").on(h, function() {
        setTimeout(function() {
            p ? ($("#price-div").show(),
            $("#price-iframe").attr("src") || $("#price-iframe").attr("src", s.default.price_src),
            $(".banner,.mask1").hide()) : r("询价无数据"),
            sendClickEvent("vr_ext_price_click", "click", "", "", "", "", "", 0, 0, 0)
        }, 100)
    }),
    $(".setup .music").on(h, function(t) {
        t.stopPropagation();
        var e = $(".setup .music .bg3");
        e.css("transition", "0s"),
        l.music = !l.music,
        l.music ? (e.css("background-position-y", "0"),
        f.play()) : (e.css("background-position-y", "-70px"),
        f.pause()),
        setTimeout(function() {
            e.css("transition", "0.2s"),
            $(".setup").trigger(h)
        }, 200)
    }),
    $(".feedback").on(h, function(t) {
        t.stopPropagation(),
        $("#feedback").show(),
        $(".banner,.mask1").hide(),
        s.default.isPopWindows = !0,
        sendClickEvent("vr_feedback_click", "click", "", "", "", "", "", 0, 0, 0)
    })
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        t.stopPropagation(),
        c = !0,
        document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement ? (document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen(),
        s = !1,
        a.css("transition", "0s"),
        setTimeout(function() {
            a.css("background-position-y", "-70px"),
            setTimeout(function() {
                a.css("transition", "0.2s"),
                $(".setup").trigger(o.default.clickEvent)
            }, 200)
        }, 0)) : (document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullscreen ? document.documentElement.webkitRequestFullscreen() : document.documentElement.msRequestFullscreen && document.documentElement.msRequestFullscreen(),
        s = !0,
        sendClickEvent("vr_full_screen_click", "click", "", "", "", "", "", 0, 0, 0),
        a.css("transition", "0s"),
        setTimeout(function() {
            a.css("background-position-y", "0"),
            setTimeout(function() {
                a.css("transition", "0.2s"),
                $(".setup").trigger(o.default.clickEvent)
            }, 200)
        }, 0))
    }
    var r = n(8)
      , o = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(r)
      , s = !1
      , a = $(".setup .screen .bg3");
    ["", "moz", "webkit", "ms"].forEach(function(t) {
        document.addEventListener(t + "fullscreenchange", function(t) {
            c ? c = !1 : (a.css("transition", "0s"),
            setTimeout(function() {
                a.css("background-position-y", "-70px"),
                setTimeout(function() {
                    a.css("transition", "0.2s")
                }, 200)
            }, 0))
        })
    });
    var c = !1;
    $(".setup .screen").on(o.default.clickEvent, i),
    o.default.isMobile && function() {
        document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || (document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullscreen ? document.documentElement.webkitRequestFullscreen() : document.documentElement.msRequestFullscreen && document.documentElement.msRequestFullscreen())
    }()
}
]);
