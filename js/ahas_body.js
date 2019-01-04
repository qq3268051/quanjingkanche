var _al_ahas = _al_ahas || [];
if (window._trackPVTrigger) {} else {
    _al_ahas.push(["_trackPageInit"]);
    _al_ahas.push(["_trackPageView"])
}
if (typeof Array.prototype.indexOf !== "function") {
    Array.prototype.indexOf = function(item) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == item)
                return i
        }
        return -1
    }
}
if (typeof JSON !== "object") {
    JSON = {}
}
(function() {
    "use strict";
    var rx_one = /^[\],:{}\s]*$/;
    var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
    var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
    var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
    var rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    var rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    function f(n) {
        return n < 10 ? "0" + n : n
    }
    function this_value() {
        return this.valueOf()
    }
    if (typeof Date.prototype.toJSON !== "function") {
        Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }
        ;
        Boolean.prototype.toJSON = this_value;
        Number.prototype.toJSON = this_value;
        String.prototype.toJSON = this_value
    }
    var gap;
    var indent;
    var meta;
    var rep;
    function quote(string) {
        rx_escapable.lastIndex = 0;
        return rx_escapable.test(string) ? '"' + string.replace(rx_escapable, function(a) {
            var c = meta[a];
            return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + string + '"'
    }
    function str(key, holder) {
        var i;
        var k;
        var v;
        var length;
        var mind = gap;
        var partial;
        var value = holder[key];
        if (value && typeof value === "object" && typeof value.toJSON === "function") {
            value = value.toJSON(key)
        }
        if (typeof rep === "function") {
            value = rep.call(holder, key, value)
        }
        switch (typeof value) {
        case "string":
            return quote(value);
        case "number":
            return isFinite(value) ? String(value) : "null";
        case "boolean":
        case "null":
            return String(value);
        case "object":
            if (!value) {
                return "null"
            }
            gap += indent;
            partial = [];
            if (Object.prototype.toString.apply(value) === "[object Array]") {
                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || "null"
                }
                v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                gap = mind;
                return v
            }
            if (rep && typeof rep === "object") {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === "string") {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ": " : ":") + v)
                        }
                    }
                }
            } else {
                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ": " : ":") + v)
                        }
                    }
                }
            }
            v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
            gap = mind;
            return v
        }
    }
    if (typeof JSON.stringify !== "function") {
        meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        };
        JSON.stringify = function(value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else if (typeof space === "string") {
                indent = space
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {
                "": value
            })
        }
    }
    if (typeof JSON.parse !== "function") {
        JSON.parse = function(text, reviver) {
            var j;
            function walk(holder, key) {
                var k;
                var v;
                var value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }
            text = String(text);
            rx_dangerous.lastIndex = 0;
            if (rx_dangerous.test(text)) {
                text = text.replace(rx_dangerous, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({
                    "": j
                }, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    }
}
)();
(function() {
    var _version_ = "20170612";
    var CreateBinder = function(o) {
        return function(method, func) {
            o[method] = function() {
                return func.apply(o, arguments)
            }
            ;
            return func
        }
    }
      , IsArray = function(o) {
        return Object.prototype["toString"].call(Object(o)) == "[object Array]"
    }
      , IsEmpty = function(o) {
        return undefined == o || "-" == o || "" == o
    }
      , Encode = function(uri, isAll) {
        var _encode = encodeURIComponent;
        if (_encode instanceof Function) {
            return isAll ? encodeURI(uri) : encodeURIComponent(uri)
        } else {
            return escape(uri)
        }
    };
    var Tracker = function(name) {
        var oThis = this
          , bind = CreateBinder(oThis)
          , config = new Config;
        oThis.name = name;
        oThis.client = new Client;
        oThis.ahAjax = new AHAjax;
        oThis.ahCookie = new AHCookie(config);
        oThis.ahUtil = new AHUtil;
        oThis.getSign = function() {
            if (IsEmpty(window.pageLoadId)) {
                return "noloadid"
            }
            return [window.pageLoadId.substring(2, 10) >> 3, Math.random().toString().substring(2, 5)].join("")
        }
        ;
        oThis.getNessInfo = function() {
            return "ahpvers=" + _version_ + "&ahpplid=" + window.pageLoadId + "&ahpprlid=" + window.rPageLoadId + "&ahpsign=" + oThis.getSign()
        }
        ;
        oThis.getPageInfo = function() {
            var scene_type = oThis.ahUtil.parseUri(window.location)["queryKey"]["scene_type"] || "0";
            var show_id = oThis.ahUtil.parseUri(window.location)["queryKey"]["show_id"] || "0";
            return "&ref=" + Encode(document.referrer) + "&cur=" + Encode(document.URL) + "&scene_type=" + scene_type + "&show_id=" + show_id
        }
        ;
        oThis.getRefAndCur = function() {
            return "&ref=" + Encode(document.referrer) + "&cur=" + Encode(document.URL)
        }
        ;
        oThis.getPVTrackerInfo = function() {
            if (!IsEmpty(window.pvTrack)) {
                var t = window.pvTrack;
                var pgvar = {};
                if (t.type != null)
                    pgvar["type"] = t.type;
                if (t.typeid != null)
                    pgvar["typeid"] = t.typeid;
                if (t.abtest != null)
                    pgvar["abtest"] = t.abtest;
                if (t.bcTypeId != null)
                    pgvar["bcTypeId"] = t.bcTypeId;
                if (t.site_ref != null)
                    pgvar["site_ref"] = t.site_ref;
                var _vs = t.pageVars;
                if (_vs != null) {
                    for (var key in _vs) {
                        pgvar[key] = _vs[key]
                    }
                }
                return (t.site != null ? "&site=" + t.site : "") + (t.category != null ? "&category=" + t.category : "") + (t.subcategory != null ? "&subcategory=" + t.subcategory : "") + (t.object != null ? "&object=" + t.object : t.objectid != null ? "&object=" + t.objectid : "") + (t.series != null ? "&series=" + t.series : t.seriesid != null ? "&series=" + t.seriesid : "") + (t.spec != null ? "&spec=" + t.spec : t.specid != null ? "&spec=" + t.specid : "") + (t.level != null ? "&level=" + t.level : "") + (t.dealer != null ? "&dealer=" + t.dealer : "") + "&pgvar=" + Encode(JSON.stringify(pgvar))
            }
            return ""
        }
        ;
        oThis.getSiteInfo = function() {
            if (!IsEmpty(window.pvTrack)) {
                var t = window.pvTrack;
                return (t.site != null ? "&site=" + t.site : "") + (t.category != null ? "&category=" + t.category : "") + (t.subcategory != null ? "&subcategory=" + t.subcategory : "") + (t.object != null ? "&object=" + t.object : t.objectid != null ? "&object=" + t.objectid : "")
            }
            return ""
        }
        ;
        oThis.trackerPageView = bind("_trackPageView", function() {
            var sendPVDelay = function() {
                var fvlid = oThis.ahCookie.readCookie("fvlid");
                var pvDelayPath = config.pvDelayPath + oThis.getNessInfo() + oThis.getPageInfo() + oThis.getPVTrackerInfo() + oThis.client.getClientInfo() + "&fvlid=" + Encode(fvlid);
                oThis.ahAjax.sendByImage(config.alPath + pvDelayPath)
            };
            setTimeout(sendPVDelay, 3e3)
        });
        oThis.trackerPageInit = bind("_trackPageInit", function() {
            var fvlid = oThis.ahCookie.readCookie("fvlid");
            if (IsEmpty(fvlid)) {
                fvlid = window.pageLoadId;
                oThis.ahCookie.setCookie("fvlid", fvlid, 10 * 365 * 24 * 60 * 60)
            }
            var pvInitPath = config.pvInitPath + oThis.getNessInfo() + oThis.getPageInfo() + oThis.getPVTrackerInfo() + oThis.client.getClientInfo() + "&fvlid=" + Encode(fvlid);
            oThis.ahAjax.sendByImage(config.alPath + pvInitPath)
        });
        oThis.trackerEvent = bind("_trackEvent", function() {
            var _arguments = arguments;
            var _category = arguments[0];
            var _params = arguments[1];
            var eventPath = _category + "?" + oThis.getNessInfo() + oThis.getSiteInfo();
            if (!IsEmpty(_params)) {
                for (var _key in _params) {
                    eventPath += "&" + _key + "=" + _params[_key]
                }
            }
            eventPath += oThis.getRefAndCur();
            if (arguments.length > 2 && !IsEmpty(arguments[2])) {
                var _extends = JSON.stringify(arguments[2]);
                eventPath += "&evextends=" + _extends
            }
            oThis.ahAjax.sendByImage(config.alPath + eventPath)
        })
    };
    var AHAjax = function() {
        var oThis = this;
        oThis.sendByImage = function(src) {
            var image = new Image(1,1);
            image.onload = image.onerror = function() {
                image.onload = image.onerror = null;
                image = null
            }
            ;
            image.src = src
        }
    };
    var AHCookie = function(config) {
        var oThis = this
          , _config = config
          , _path = "/";
        oThis.readCookie = function(key) {
            var reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
            var r = document.cookie.match(reg);
            if (r != null) {
                return decodeURIComponent(r[2])
            }
            return ""
        }
        ;
        oThis.setCookie = function(key, value, timeout) {
            var cookie = timeout > 0 ? oThis.getCookieExpires(timeout) : "";
            key = key + "=" + value;
            if (key.length > 256) {
                key = key.substring(0, 256)
            }
            cookie = key + "; path=" + _path + "; " + cookie + "domain=" + _config.domain + ";";
            document.cookie = cookie
        }
        ;
        oThis.getCookieExpires = function(timeout) {
            var date = new Date;
            timeout = new Date(date.getTime() + timeout * 1e3);
            return "expires=" + timeout.toGMTString() + "; "
        }
    };
    var AHUtil = function() {
        var oThis = this;
        oThis.parseUri = function(str) {
            var o = oThis.parseUri.options
              , m = o.parser[o.strictMode ? "strict" : "loose"].exec(str)
              , uri = {}
              , i = 14;
            while (i--)
                uri[o.key[i]] = m[i] || "";
            uri[o.q.name] = {};
            uri[o.key[12]].replace(o.q.parser, function($0, $1, $2) {
                if ($1)
                    uri[o.q.name][$1] = $2
            });
            return uri
        }
        ;
        oThis.parseUri.options = {
            strictMode: true,
            key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
            q: {
                name: "queryKey",
                parser: /(?:^|&)([^&=]*)=?([^&]*)/g
            },
            parser: {
                strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
            }
        };
        oThis.inIFrame = function() {
            return globalEnv && globalEnv.isiFrame
        }
    };
    var Client = function() {
        var oThis = this
          , _empty = "-"
          , screen = window.screen
          , navigator = window.navigator;
        oThis.screen = screen ? screen.width + "x" + screen.height : _empty;
        oThis.colorDepth = screen ? screen.colorDepth + "-bit" : _empty;
        oThis.charset = Encode(document.characterSet ? document.characterSet : document.charset ? document.charset : _empty);
        oThis.language = (navigator && navigator.language ? navigator.language : navigator && navigator.browserLanguage ? navigator.browserLanguage : _empty)["toLowerCase"]();
        oThis.cookieEnabled = navigator && navigator.cookieEnabled ? 1 : 0;
        oThis.docTitle = document.title ? document.title.substring(0, 126) : "";
        oThis.getClientInfo = function() {
            return "&ahp" + ["cs=" + Encode(oThis.charset), "sr=" + oThis.screen, "sc=" + oThis.colorDepth, "ul=" + oThis.language, "ce=" + oThis.cookieEnabled, "dtl=" + Encode(oThis.docTitle)]["join"]("&ahp")
        }
    };
    var Config = function() {
        var oThis = this;
        oThis.domain = ".autohome.com.cn";
        if ("https:" == document.location.protocol)
            oThis.alPath = "https://al.autohome.com.cn/";
        else
            oThis.alPath = "http://al.autohome.com.cn/";
        oThis.pvInitPath = "mda_pv_init?";
        oThis.pvDelayPath = "mda_pv_log?"
    };
    var AsyncTrackerFactory = function() {
        var oThis = this
          , bind = CreateBinder(oThis);
        oThis.defaultTracker = new Tracker("default");
        oThis.push = function(commandArray) {
            for (var _arguments = arguments, err = 0, i = 0; i < _arguments.length; i++) {
                try {
                    if (typeof _arguments[i] === "function") {
                        _arguments[i]()
                    } else {
                        var o = _arguments[i][0]
                          , func = o;
                        var oTracker = oThis.defaultTracker;
                        oTracker[func].apply(oTracker, _arguments[i].slice(1))
                    }
                } catch (ex) {
                    if (console)
                        console.log(ex);
                    err++
                }
            }
            return err
        }
    };
    function getBodyLoadId(len) {
        var randchar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        var i = 0;
        var r = "";
        for (i = 0; i < len; i++) {
            var index = parseInt(Math.random() * Math.pow(10, 6)) % randchar.length;
            r += randchar[index]
        }
        var d = new Date;
        return d.getTime() + r
    }
    if (IsEmpty(window.pageLoadId)) {
        try {
            window.pageLoadId = getBodyLoadId(7) + "_"
        } catch (e) {
            window.pageLoadId = (new Date).getTime() + "_aaaaaa_"
        }
    }
    var _AsyncTrackerFactory = new AsyncTrackerFactory;
    _tracker_: {
        var ahas = window._al_ahas
          , isArray = false;
        if (ahas && typeof ahas["push"] == "function") {
            isArray = IsArray(ahas);
            if (!isArray) {
                break _tracker_
            }
        }
        window._al_ahas = _AsyncTrackerFactory;
        isArray && _AsyncTrackerFactory["push"].apply(_AsyncTrackerFactory, ahas)
    }
}
)();