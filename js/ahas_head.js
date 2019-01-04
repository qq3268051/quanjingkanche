window._al_ahas = window._al_ahas || [];
function trackMdaEvent(action, vars) {
    _al_ahas.push(["_trackEvent", action, vars])
}
function trackCustomEvent(action, vars, exs) {
    _al_ahas.push(["_trackEvent", action, vars, exs])
}
(function () {
    var _config = {
        path: "/",
        domain: ".autohome.com.cn"
    };
    function getLoadId(len) {
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
    function getRLoadId() {
        try {
            var logRLoadId = readCookie("ahrlid") || "";
            if (logRLoadId == "") {
                return ""
            }
            logRLoadId = logRLoadId.split("-");
            if ((new Date).getTime() - parseInt(logRLoadId[1]) > 10 * 1e3) {
                return ""
            }
            return logRLoadId[0] || ""
        } catch (ex) {
            return ""
        }
    }
    function readCookie(key) {
        var reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
        var r = document.cookie.match(reg);
        if (r != null) {
            return decodeURIComponent(r[2])
        }
        return ""
    }
    function removeCookie(key) {
        var expires = (new Date).toUTCString();
        document.cookie = key + "=; path=" + _config.path + "; expires=" + expires + "; domain=" + _config.domain + ";"
    }
    function setCookie(key, value) {
        key = key + "=" + value;
        if (key.length > 256) {
            key = key.substring(0, 256)
        }
        document.cookie = key + "; path=" + _config.path + "; domain=" + _config.domain + ";"
    }
    function setCookieExpire(key, value, timeout) {
        key = key + "=" + value;
        if (key.length > 256) {
            key = key.substring(0, 256)
        }
        var date = new Date;
        timeout = new Date(date.getTime() + timeout * 1e3);
        document.cookie = key + "; path=" + _config.path + "; expires=" + timeout.toGMTString() + "; domain=" + _config.domain + ";"
    }
    if (window.pageLoadId) {
        return
    }
    window.pageLoadId = getLoadId(10);
    window.rPageLoadId = getRLoadId();
    removeCookie("ahrlid");
    function addListener(element, type, listener, useCapture) {
        if (element.addEventListener) {
            element.addEventListener(type, listener, !!useCapture)
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, listener)
        } else {
            element["on" + type] = listener
        }
    }
    addListener(document, "mousedown", function (ev) {
        ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        if (!target) {
            return
        }
        setCookie("ahrlid", window.pageLoadId + "-" + (new Date).getTime())
    });
    addListener(document, "touchend", function (ev) {
        ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        if (!target) {
            return
        }
        setCookie("ahrlid", window.pageLoadId + "-" + (new Date).getTime())
    });
    var pvNum = readCookie("ahpvno");
    pvNum++;
    if (pvNum > 9999)
        pvNum = 1;
    setCookieExpire("ahpvno", pvNum, 86400)
}
)();
