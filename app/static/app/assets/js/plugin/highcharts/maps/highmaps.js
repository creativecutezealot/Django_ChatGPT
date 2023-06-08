/*
 Highmaps JS v10.3.2 (2022-11-28)

 (c) 2011-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
(function (Y, H) { "object" === typeof module && module.exports ? (H["default"] = H, module.exports = Y.document ? H(Y) : H) : "function" === typeof define && define.amd ? define("highcharts/highmaps", function () { return H(Y) }) : (Y.Highcharts && Y.Highcharts.error(16, !0), Y.Highcharts = H(Y)) })("undefined" !== typeof window ? window : this, function (Y) {
    function H(b, I, e, C) { b.hasOwnProperty(I) || (b[I] = C.apply(null, e), "function" === typeof CustomEvent && Y.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", { detail: { path: I, module: b[I] } }))) } var e =
        {}; H(e, "Core/Globals.js", [], function () {
            var b; (function (b) {
                b.SVG_NS = "http://www.w3.org/2000/svg"; b.product = "Highcharts"; b.version = "10.3.2"; b.win = "undefined" !== typeof Y ? Y : {}; b.doc = b.win.document; b.svg = b.doc && b.doc.createElementNS && !!b.doc.createElementNS(b.SVG_NS, "svg").createSVGRect; b.userAgent = b.win.navigator && b.win.navigator.userAgent || ""; b.isChrome = -1 !== b.userAgent.indexOf("Chrome"); b.isFirefox = -1 !== b.userAgent.indexOf("Firefox"); b.isMS = /(edge|msie|trident)/i.test(b.userAgent) && !b.win.opera; b.isSafari =
                    !b.isChrome && -1 !== b.userAgent.indexOf("Safari"); b.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(b.userAgent); b.isWebKit = -1 !== b.userAgent.indexOf("AppleWebKit"); b.deg2rad = 2 * Math.PI / 360; b.hasBidiBug = b.isFirefox && 4 > parseInt(b.userAgent.split("Firefox/")[1], 10); b.hasTouch = !!b.win.TouchEvent; b.marginNames = ["plotTop", "marginRight", "marginBottom", "plotLeft"]; b.noop = function () { }; b.supportsPassiveEvents = function () {
                        var e = !1; if (!b.isMS) {
                            var I = Object.defineProperty({}, "passive", { get: function () { e = !0 } });
                            b.win.addEventListener && b.win.removeEventListener && (b.win.addEventListener("testPassive", b.noop, I), b.win.removeEventListener("testPassive", b.noop, I))
                        } return e
                    }(); b.charts = []; b.dateFormats = {}; b.seriesTypes = {}; b.symbolSizes = {}; b.chartCount = 0
            })(b || (b = {})); ""; return b
        }); H(e, "Core/Utilities.js", [e["Core/Globals.js"]], function (b) {
            function e(l, c, g, J) {
                var v = c ? "Highcharts error" : "Highcharts warning"; 32 === l && (l = "" + v + ": Deprecated member"); var a = n(l), d = a ? "" + v + " #" + l + ": www.highcharts.com/errors/" + l + "/" : l.toString();
                if ("undefined" !== typeof J) { var f = ""; a && (d += "?"); x(J, function (l, c) { f += "\n - ".concat(c, ": ").concat(l); a && (d += encodeURI(c) + "=" + encodeURI(l)) }); d += f } q(b, "displayError", { chart: g, code: l, message: d, params: J }, function () { if (c) throw Error(d); m.console && -1 === e.messages.indexOf(d) && console.warn(d) }); e.messages.push(d)
            } function z(l, c) { var v = {}; x(l, function (g, m) { if (G(l[m], !0) && !l.nodeType && c[m]) g = z(l[m], c[m]), Object.keys(g).length && (v[m] = g); else if (G(l[m]) || l[m] !== c[m] || m in l && !(m in c)) v[m] = l[m] }); return v }
            function C(l, c) { return parseInt(l, c || 10) } function w(l) { return "string" === typeof l } function y(l) { l = Object.prototype.toString.call(l); return "[object Array]" === l || "[object Array Iterator]" === l } function G(l, c) { return !!l && "object" === typeof l && (!c || !y(l)) } function t(l) { return G(l) && "number" === typeof l.nodeType } function r(l) { var c = l && l.constructor; return !(!G(l, !0) || t(l) || !c || !c.name || "Object" === c.name) } function n(l) { return "number" === typeof l && !isNaN(l) && Infinity > l && -Infinity < l } function h(l) {
                return "undefined" !==
                    typeof l && null !== l
            } function a(l, c, g) { var v = w(c) && !h(g), m, a = function (c, g) { h(c) ? l.setAttribute(g, c) : v ? (m = l.getAttribute(g)) || "class" !== g || (m = l.getAttribute(g + "Name")) : l.removeAttribute(g) }; w(c) ? a(g, c) : x(c, a); return m } function f(l, c) { var g; l || (l = {}); for (g in c) l[g] = c[g]; return l } function d() { for (var l = arguments, c = l.length, g = 0; g < c; g++) { var m = l[g]; if ("undefined" !== typeof m && null !== m) return m } } function k(l, c) {
                b.isMS && !b.svg && c && h(c.opacity) && (c.filter = "alpha(opacity=".concat(100 * c.opacity, ")")); f(l.style,
                    c)
            } function p(l) { return Math.pow(10, Math.floor(Math.log(l) / Math.LN10)) } function D(l, c) { return 1E14 < l ? l : parseFloat(l.toPrecision(c || 14)) } function A(l, c, g) {
                var v = b.getStyle || A; if ("width" === c) return c = Math.min(l.offsetWidth, l.scrollWidth), g = l.getBoundingClientRect && l.getBoundingClientRect().width, g < c && g >= c - 1 && (c = Math.floor(g)), Math.max(0, c - (v(l, "padding-left", !0) || 0) - (v(l, "padding-right", !0) || 0)); if ("height" === c) return Math.max(0, Math.min(l.offsetHeight, l.scrollHeight) - (v(l, "padding-top", !0) || 0) - (v(l,
                    "padding-bottom", !0) || 0)); m.getComputedStyle || e(27, !0); if (l = m.getComputedStyle(l, void 0)) { var a = l.getPropertyValue(c); d(g, "opacity" !== c) && (a = C(a)) } return a
            } function x(l, c, g) { for (var m in l) Object.hasOwnProperty.call(l, m) && c.call(g || l[m], l[m], m, l) } function E(l, c, g) {
                function m(c, g) { var m = l.removeEventListener || b.removeEventListenerPolyfill; m && m.call(l, c, g, !1) } function v(g) { var v; if (l.nodeName) { if (c) { var J = {}; J[c] = !0 } else J = g; x(J, function (l, c) { if (g[c]) for (v = g[c].length; v--;)m(c, g[c][v].fn) }) } } var a =
                    "function" === typeof l && l.prototype || l; if (Object.hasOwnProperty.call(a, "hcEvents")) { var d = a.hcEvents; c ? (a = d[c] || [], g ? (d[c] = a.filter(function (l) { return g !== l.fn }), m(c, g)) : (v(d), d[c] = [])) : (v(d), delete a.hcEvents) }
            } function q(l, c, g, m) {
                g = g || {}; if (B.createEvent && (l.dispatchEvent || l.fireEvent && l !== b)) { var v = B.createEvent("Events"); v.initEvent(c, !0, !0); g = f(v, g); l.dispatchEvent ? l.dispatchEvent(g) : l.fireEvent(c, g) } else if (l.hcEvents) {
                    g.target || f(g, {
                        preventDefault: function () { g.defaultPrevented = !0 }, target: l,
                        type: c
                    }); v = []; for (var J = l, a = !1; J.hcEvents;)Object.hasOwnProperty.call(J, "hcEvents") && J.hcEvents[c] && (v.length && (a = !0), v.unshift.apply(v, J.hcEvents[c])), J = Object.getPrototypeOf(J); a && v.sort(function (l, c) { return l.order - c.order }); v.forEach(function (c) { !1 === c.fn.call(l, g) && g.preventDefault() })
                } m && !g.defaultPrevented && m.call(l, g)
            } var c = b.charts, B = b.doc, m = b.win; (e || (e = {})).messages = []; Math.easeInOutSine = function (l) { return -.5 * (Math.cos(Math.PI * l) - 1) }; var u = Array.prototype.find ? function (l, c) { return l.find(c) } :
                function (l, c) { var g, m = l.length; for (g = 0; g < m; g++)if (c(l[g], g)) return l[g] }; x({ map: "map", each: "forEach", grep: "filter", reduce: "reduce", some: "some" }, function (l, c) { b[c] = function (g) { var m; e(32, !1, void 0, (m = {}, m["Highcharts.".concat(c)] = "use Array.".concat(l), m)); return Array.prototype[l].apply(g, [].slice.call(arguments, 1)) } }); var g, F = function () { var l = Math.random().toString(36).substring(2, 9) + "-", c = 0; return function () { return "highcharts-" + (g ? "" : l) + c++ } }(); m.jQuery && (m.jQuery.fn.highcharts = function () {
                    var l =
                        [].slice.call(arguments); if (this[0]) return l[0] ? (new (b[w(l[0]) ? l.shift() : "Chart"])(this[0], l[0], l[1]), this) : c[a(this[0], "data-highcharts-chart")]
                }); u = {
                    addEvent: function (l, c, g, m) {
                        void 0 === m && (m = {}); var v = "function" === typeof l && l.prototype || l; Object.hasOwnProperty.call(v, "hcEvents") || (v.hcEvents = {}); v = v.hcEvents; b.Point && l instanceof b.Point && l.series && l.series.chart && (l.series.chart.runTrackerClick = !0); var a = l.addEventListener || b.addEventListenerPolyfill; a && a.call(l, c, g, b.supportsPassiveEvents ? {
                            passive: void 0 ===
                                m.passive ? -1 !== c.indexOf("touch") : m.passive, capture: !1
                        } : !1); v[c] || (v[c] = []); v[c].push({ fn: g, order: "number" === typeof m.order ? m.order : Infinity }); v[c].sort(function (l, c) { return l.order - c.order }); return function () { E(l, c, g) }
                    }, arrayMax: function (l) { for (var c = l.length, g = l[0]; c--;)l[c] > g && (g = l[c]); return g }, arrayMin: function (c) { for (var l = c.length, g = c[0]; l--;)c[l] < g && (g = c[l]); return g }, attr: a, clamp: function (c, g, m) { return c > g ? c < m ? c : m : g }, cleanRecursively: z, clearTimeout: function (c) { h(c) && clearTimeout(c) }, correctFloat: D,
                    createElement: function (c, g, m, a, d) { c = B.createElement(c); g && f(c, g); d && k(c, { padding: "0", border: "none", margin: "0" }); m && k(c, m); a && a.appendChild(c); return c }, css: k, defined: h, destroyObjectProperties: function (c, g) { x(c, function (l, m) { l && l !== g && l.destroy && l.destroy(); delete c[m] }) }, discardElement: function (c) { c && c.parentElement && c.parentElement.removeChild(c) }, erase: function (c, g) { for (var l = c.length; l--;)if (c[l] === g) { c.splice(l, 1); break } }, error: e, extend: f, extendClass: function (c, g) {
                        var l = function () { }; l.prototype =
                            new c; f(l.prototype, g); return l
                    }, find: u, fireEvent: q, getMagnitude: p, getNestedProperty: function (c, g) { for (c = c.split("."); c.length && h(g);) { var l = c.shift(); if ("undefined" === typeof l || "__proto__" === l) return; g = g[l]; if (!h(g) || "function" === typeof g || "number" === typeof g.nodeType || g === m) return } return g }, getStyle: A, inArray: function (c, g, m) { e(32, !1, void 0, { "Highcharts.inArray": "use Array.indexOf" }); return g.indexOf(c, m) }, isArray: y, isClass: r, isDOMElement: t, isFunction: function (c) { return "function" === typeof c }, isNumber: n,
                    isObject: G, isString: w, keys: function (c) { e(32, !1, void 0, { "Highcharts.keys": "use Object.keys" }); return Object.keys(c) }, merge: function () { var c, g = arguments, m = {}, a = function (c, l) { "object" !== typeof c && (c = {}); x(l, function (g, m) { "__proto__" !== m && "constructor" !== m && (!G(g, !0) || r(g) || t(g) ? c[m] = l[m] : c[m] = a(c[m] || {}, g)) }); return c }; !0 === g[0] && (m = g[1], g = Array.prototype.slice.call(g, 2)); var d = g.length; for (c = 0; c < d; c++)m = a(m, g[c]); return m }, normalizeTickInterval: function (c, g, m, a, q) {
                        var l = c; m = d(m, p(c)); var J = c / m; g || (g =
                            q ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === a && (1 === m ? g = g.filter(function (c) { return 0 === c % 1 }) : .1 >= m && (g = [1 / m]))); for (a = 0; a < g.length && !(l = g[a], q && l * m >= c || !q && J <= (g[a] + (g[a + 1] || g[a])) / 2); a++); return l = D(l * m, -Math.round(Math.log(.001) / Math.LN10))
                    }, objectEach: x, offset: function (c) {
                        var g = B.documentElement; c = c.parentElement || c.parentNode ? c.getBoundingClientRect() : { top: 0, left: 0, width: 0, height: 0 }; return {
                            top: c.top + (m.pageYOffset || g.scrollTop) - (g.clientTop || 0), left: c.left + (m.pageXOffset || g.scrollLeft) -
                                (g.clientLeft || 0), width: c.width, height: c.height
                        }
                    }, pad: function (c, g, m) { return Array((g || 2) + 1 - String(c).replace("-", "").length).join(m || "0") + c }, pick: d, pInt: C, relativeLength: function (c, g, m) { return /%$/.test(c) ? g * parseFloat(c) / 100 + (m || 0) : parseFloat(c) }, removeEvent: E, splat: function (c) { return y(c) ? c : [c] }, stableSort: function (c, g) { var l = c.length, m, a; for (a = 0; a < l; a++)c[a].safeI = a; c.sort(function (c, l) { m = g(c, l); return 0 === m ? c.safeI - l.safeI : m }); for (a = 0; a < l; a++)delete c[a].safeI }, syncTimeout: function (c, g, m) {
                        if (0 <
                            g) return setTimeout(c, g, m); c.call(0, m); return -1
                    }, timeUnits: { millisecond: 1, second: 1E3, minute: 6E4, hour: 36E5, day: 864E5, week: 6048E5, month: 24192E5, year: 314496E5 }, uniqueKey: F, useSerialIds: function (c) { return g = d(c, g) }, wrap: function (c, g, m) { var l = c[g]; c[g] = function () { var c = arguments, g = this; return m.apply(this, [function () { return l.apply(g, arguments.length ? arguments : c) }].concat([].slice.call(arguments))) } }
                }; ""; return u
        }); H(e, "Core/Chart/ChartDefaults.js", [], function () {
            return {
                alignThresholds: !1, panning: {
                    enabled: !1,
                    type: "x"
                }, styledMode: !1, borderRadius: 0, colorCount: 10, allowMutatingData: !0, defaultSeriesType: "line", ignoreHiddenSeries: !0, spacing: [10, 10, 15, 10], resetZoomButton: { theme: { zIndex: 6 }, position: { align: "right", x: -10, y: 10 } }, zoomBySingleTouch: !1, zooming: { singleTouch: !1, resetButton: { theme: { zIndex: 6 }, position: { align: "right", x: -10, y: 10 } } }, width: null, height: null, borderColor: "#335cad", backgroundColor: "#ffffff", plotBorderColor: "#cccccc"
            }
        }); H(e, "Core/Color/Color.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function (b,
            e) {
                var I = e.isNumber, C = e.merge, w = e.pInt; e = function () {
                    function e(G) { this.rgba = [NaN, NaN, NaN, NaN]; this.input = G; var t = b.Color; if (t && t !== e) return new t(G); if (!(this instanceof e)) return new e(G); this.init(G) } e.parse = function (b) { return b ? new e(b) : e.None }; e.prototype.init = function (b) {
                        var t; if ("object" === typeof b && "undefined" !== typeof b.stops) this.stops = b.stops.map(function (a) { return new e(a[1]) }); else if ("string" === typeof b) {
                            this.input = b = e.names[b.toLowerCase()] || b; if ("#" === b.charAt(0)) {
                                var r = b.length; var n =
                                    parseInt(b.substr(1), 16); 7 === r ? t = [(n & 16711680) >> 16, (n & 65280) >> 8, n & 255, 1] : 4 === r && (t = [(n & 3840) >> 4 | (n & 3840) >> 8, (n & 240) >> 4 | n & 240, (n & 15) << 4 | n & 15, 1])
                            } if (!t) for (n = e.parsers.length; n-- && !t;) { var h = e.parsers[n]; (r = h.regex.exec(b)) && (t = h.parse(r)) }
                        } t && (this.rgba = t)
                    }; e.prototype.get = function (b) {
                        var t = this.input, r = this.rgba; if ("object" === typeof t && "undefined" !== typeof this.stops) { var n = C(t); n.stops = [].slice.call(n.stops); this.stops.forEach(function (h, a) { n.stops[a] = [n.stops[a][0], h.get(b)] }); return n } return r &&
                            I(r[0]) ? "rgb" === b || !b && 1 === r[3] ? "rgb(" + r[0] + "," + r[1] + "," + r[2] + ")" : "a" === b ? "".concat(r[3]) : "rgba(" + r.join(",") + ")" : t
                    }; e.prototype.brighten = function (b) { var t = this.rgba; if (this.stops) this.stops.forEach(function (n) { n.brighten(b) }); else if (I(b) && 0 !== b) for (var r = 0; 3 > r; r++)t[r] += w(255 * b), 0 > t[r] && (t[r] = 0), 255 < t[r] && (t[r] = 255); return this }; e.prototype.setOpacity = function (b) { this.rgba[3] = b; return this }; e.prototype.tweenTo = function (b, t) {
                        var r = this.rgba, n = b.rgba; if (!I(r[0]) || !I(n[0])) return b.input || "none"; b =
                            1 !== n[3] || 1 !== r[3]; return (b ? "rgba(" : "rgb(") + Math.round(n[0] + (r[0] - n[0]) * (1 - t)) + "," + Math.round(n[1] + (r[1] - n[1]) * (1 - t)) + "," + Math.round(n[2] + (r[2] - n[2]) * (1 - t)) + (b ? "," + (n[3] + (r[3] - n[3]) * (1 - t)) : "") + ")"
                    }; e.names = { white: "#ffffff", black: "#000000" }; e.parsers = [{ regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, parse: function (b) { return [w(b[1]), w(b[2]), w(b[3]), parseFloat(b[4], 10)] } }, {
                        regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, parse: function (b) {
                            return [w(b[1]),
                            w(b[2]), w(b[3]), 1]
                        }
                    }]; e.None = new e(""); return e
                }(); ""; return e
        }); H(e, "Core/Color/Palettes.js", [], function () { return { colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" ") } }); H(e, "Core/Time.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function (b, e) {
            var z = b.win, I = e.defined, w = e.error, y = e.extend, G = e.isObject, t = e.merge, r = e.objectEach, n = e.pad, h = e.pick, a = e.splat, f = e.timeUnits, d = b.isSafari && z.Intl && z.Intl.DateTimeFormat.prototype.formatRange, k = b.isSafari &&
                z.Intl && !z.Intl.DateTimeFormat.prototype.formatRange; e = function () {
                    function p(a) { this.options = {}; this.variableTimezone = this.useUTC = !1; this.Date = z.Date; this.getTimezoneOffset = this.timezoneOffsetFunction(); this.update(a) } p.prototype.get = function (a, d) { if (this.variableTimezone || this.timezoneOffset) { var f = d.getTime(), k = f - this.getTimezoneOffset(d); d.setTime(k); a = d["getUTC" + a](); d.setTime(f); return a } return this.useUTC ? d["getUTC" + a]() : d["get" + a]() }; p.prototype.set = function (a, f, k) {
                        if (this.variableTimezone ||
                            this.timezoneOffset) { if ("Milliseconds" === a || "Seconds" === a || "Minutes" === a && 0 === this.getTimezoneOffset(f) % 36E5) return f["setUTC" + a](k); var p = this.getTimezoneOffset(f); p = f.getTime() - p; f.setTime(p); f["setUTC" + a](k); a = this.getTimezoneOffset(f); p = f.getTime() + a; return f.setTime(p) } return this.useUTC || d && "FullYear" === a ? f["setUTC" + a](k) : f["set" + a](k)
                    }; p.prototype.update = function (a) {
                        void 0 === a && (a = {}); var d = h(a.useUTC, !0); this.options = a = t(!0, this.options, a); this.Date = a.Date || z.Date || Date; this.timezoneOffset =
                            (this.useUTC = d) && a.timezoneOffset || void 0; this.getTimezoneOffset = this.timezoneOffsetFunction(); this.variableTimezone = d && !(!a.getTimezoneOffset && !a.timezone)
                    }; p.prototype.makeTime = function (a, d, f, p, q, c) { if (this.useUTC) { var B = this.Date.UTC.apply(0, arguments); var m = this.getTimezoneOffset(B); B += m; var u = this.getTimezoneOffset(B); m !== u ? B += u - m : m - 36E5 !== this.getTimezoneOffset(B - 36E5) || k || (B -= 36E5) } else B = (new this.Date(a, d, h(f, 1), h(p, 0), h(q, 0), h(c, 0))).getTime(); return B }; p.prototype.timezoneOffsetFunction =
                        function () { var a = this, d = this.options, f = d.getTimezoneOffset, k = d.moment || z.moment; if (!this.useUTC) return function (a) { return 6E4 * (new Date(a.toString())).getTimezoneOffset() }; if (d.timezone) { if (k) return function (a) { return 6E4 * -k.tz(a, d.timezone).utcOffset() }; w(25) } return this.useUTC && f ? function (a) { return 6E4 * f(a.valueOf()) } : function () { return 6E4 * (a.timezoneOffset || 0) } }; p.prototype.dateFormat = function (a, d, f) {
                            if (!I(d) || isNaN(d)) return b.defaultOptions.lang && b.defaultOptions.lang.invalidDate || ""; a = h(a, "%Y-%m-%d %H:%M:%S");
                            var k = this, q = new this.Date(d), c = this.get("Hours", q), B = this.get("Day", q), m = this.get("Date", q), u = this.get("Month", q), g = this.get("FullYear", q), F = b.defaultOptions.lang, l = F && F.weekdays, v = F && F.shortWeekdays; q = y({ a: v ? v[B] : l[B].substr(0, 3), A: l[B], d: n(m), e: n(m, 2, " "), w: B, b: F.shortMonths[u], B: F.months[u], m: n(u + 1), o: u + 1, y: g.toString().substr(2, 2), Y: g, H: n(c), k: c, I: n(c % 12 || 12), l: c % 12 || 12, M: n(this.get("Minutes", q)), p: 12 > c ? "AM" : "PM", P: 12 > c ? "am" : "pm", S: n(q.getSeconds()), L: n(Math.floor(d % 1E3), 3) }, b.dateFormats); r(q,
                                function (c, g) { for (; -1 !== a.indexOf("%" + g);)a = a.replace("%" + g, "function" === typeof c ? c.call(k, d) : c) }); return f ? a.substr(0, 1).toUpperCase() + a.substr(1) : a
                        }; p.prototype.resolveDTLFormat = function (d) { return G(d, !0) ? d : (d = a(d), { main: d[0], from: d[1], to: d[2] }) }; p.prototype.getTimeTicks = function (a, d, k, p) {
                            var q = this, c = [], B = {}, m = new q.Date(d), u = a.unitRange, g = a.count || 1, F; p = h(p, 1); if (I(d)) {
                                q.set("Milliseconds", m, u >= f.second ? 0 : g * Math.floor(q.get("Milliseconds", m) / g)); u >= f.second && q.set("Seconds", m, u >= f.minute ? 0 : g *
                                    Math.floor(q.get("Seconds", m) / g)); u >= f.minute && q.set("Minutes", m, u >= f.hour ? 0 : g * Math.floor(q.get("Minutes", m) / g)); u >= f.hour && q.set("Hours", m, u >= f.day ? 0 : g * Math.floor(q.get("Hours", m) / g)); u >= f.day && q.set("Date", m, u >= f.month ? 1 : Math.max(1, g * Math.floor(q.get("Date", m) / g))); if (u >= f.month) { q.set("Month", m, u >= f.year ? 0 : g * Math.floor(q.get("Month", m) / g)); var l = q.get("FullYear", m) } u >= f.year && q.set("FullYear", m, l - l % g); u === f.week && (l = q.get("Day", m), q.set("Date", m, q.get("Date", m) - l + p + (l < p ? -7 : 0))); l = q.get("FullYear",
                                        m); p = q.get("Month", m); var v = q.get("Date", m), D = q.get("Hours", m); d = m.getTime(); !q.variableTimezone && q.useUTC || !I(k) || (F = k - d > 4 * f.month || q.getTimezoneOffset(d) !== q.getTimezoneOffset(k)); d = m.getTime(); for (m = 1; d < k;)c.push(d), d = u === f.year ? q.makeTime(l + m * g, 0) : u === f.month ? q.makeTime(l, p + m * g) : !F || u !== f.day && u !== f.week ? F && u === f.hour && 1 < g ? q.makeTime(l, p, v, D + m * g) : d + u * g : q.makeTime(l, p, v + m * g * (u === f.day ? 1 : 7)), m++; c.push(d); u <= f.hour && 1E4 > c.length && c.forEach(function (c) {
                                            0 === c % 18E5 && "000000000" === q.dateFormat("%H%M%S%L",
                                                c) && (B[c] = "day")
                                        })
                            } c.info = y(a, { higherRanks: B, totalRange: u * g }); return c
                        }; p.prototype.getDateFormat = function (a, d, k, p) { var q = this.dateFormat("%m-%d %H:%M:%S.%L", d), c = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 }, B = "millisecond"; for (m in f) { if (a === f.week && +this.dateFormat("%w", d) === k && "00:00:00.000" === q.substr(6)) { var m = "week"; break } if (f[m] > a) { m = B; break } if (c[m] && q.substr(c[m]) !== "01-01 00:00:00.000".substr(c[m])) break; "week" !== m && (B = m) } return this.resolveDTLFormat(p[m]).main }; return p
                }(); ""; return e
        });
    H(e, "Core/Defaults.js", [e["Core/Chart/ChartDefaults.js"], e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Color/Palettes.js"], e["Core/Time.js"], e["Core/Utilities.js"]], function (b, e, z, C, w, y) {
        e = e.parse; var I = y.merge, t = {
            colors: C.colors, symbols: ["circle", "diamond", "square", "triangle", "triangle-down"], lang: {
                loading: "Loading...", months: "January February March April May June July August September October November December".split(" "), shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), decimalPoint: ".", numericSymbols: "kMGTPE".split(""), resetZoom: "Reset zoom", resetZoomTitle: "Reset zoom level 1:1", thousandsSep: " "
            }, global: {}, time: { Date: void 0, getTimezoneOffset: void 0, timezone: void 0, timezoneOffset: 0, useUTC: !0 }, chart: b, title: { text: "Chart title", align: "center", margin: 15, widthAdjust: -44 }, subtitle: { text: "", align: "center", widthAdjust: -44 }, caption: { margin: 15, text: "", align: "left", verticalAlign: "bottom" }, plotOptions: {},
            labels: { style: { position: "absolute", color: "#333333" } }, legend: {
                enabled: !0, align: "center", alignColumns: !0, className: "highcharts-no-tooltip", layout: "horizontal", labelFormatter: function () { return this.name }, borderColor: "#999999", borderRadius: 0, navigation: { activeColor: "#003399", inactiveColor: "#cccccc" }, itemStyle: { color: "#333333", cursor: "pointer", fontSize: "12px", fontWeight: "bold", textOverflow: "ellipsis" }, itemHoverStyle: { color: "#000000" }, itemHiddenStyle: { color: "#cccccc" }, shadow: !1, itemCheckboxStyle: {
                    position: "absolute",
                    width: "13px", height: "13px"
                }, squareSymbol: !0, symbolPadding: 5, verticalAlign: "bottom", x: 0, y: 0, title: { style: { fontWeight: "bold" } }
            }, loading: { labelStyle: { fontWeight: "bold", position: "relative", top: "45%" }, style: { position: "absolute", backgroundColor: "#ffffff", opacity: .5, textAlign: "center" } }, tooltip: {
                enabled: !0, animation: z.svg, borderRadius: 3, dateTimeLabelFormats: {
                    millisecond: "%A, %b %e, %H:%M:%S.%L", second: "%A, %b %e, %H:%M:%S", minute: "%A, %b %e, %H:%M", hour: "%A, %b %e, %H:%M", day: "%A, %b %e, %Y", week: "Week from %A, %b %e, %Y",
                    month: "%B %Y", year: "%Y"
                }, footerFormat: "", headerShape: "callout", hideDelay: 500, padding: 8, shape: "callout", shared: !1, snap: z.isTouchDevice ? 25 : 10, headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>', pointFormat: '<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>', backgroundColor: e("#f7f7f7").setOpacity(.85).get(), borderWidth: 1, shadow: !0, stickOnContact: !1, style: { color: "#333333", cursor: "default", fontSize: "12px", whiteSpace: "nowrap" }, useHTML: !1
            }, credits: {
                enabled: !0,
                href: "https://www.highcharts.com?credits", position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 }, style: { cursor: "pointer", color: "#999999", fontSize: "9px" }, text: "Highcharts.com"
            }
        }; t.chart.styledMode = !1; ""; var r = new w(I(t.global, t.time)); b = { defaultOptions: t, defaultTime: r, getOptions: function () { return t }, setOptions: function (n) { I(!0, t, n); if (n.time || n.global) z.time ? z.time.update(I(t.global, t.time, n.global, n.time)) : z.time = r; return t } }; ""; return b
    }); H(e, "Core/Animation/Fx.js", [e["Core/Color/Color.js"],
    e["Core/Globals.js"], e["Core/Utilities.js"]], function (b, e, z) {
        var I = b.parse, w = e.win, y = z.isNumber, G = z.objectEach; return function () {
            function b(b, n, h) { this.pos = NaN; this.options = n; this.elem = b; this.prop = h } b.prototype.dSetter = function () {
                var b = this.paths, n = b && b[0]; b = b && b[1]; var h = this.now || 0, a = []; if (1 !== h && n && b) if (n.length === b.length && 1 > h) for (var f = 0; f < b.length; f++) { for (var d = n[f], k = b[f], p = [], D = 0; D < k.length; D++) { var A = d[D], x = k[D]; y(A) && y(x) && ("A" !== k[0] || 4 !== D && 5 !== D) ? p[D] = A + h * (x - A) : p[D] = x } a.push(p) } else a =
                    b; else a = this.toD || []; this.elem.attr("d", a, void 0, !0)
            }; b.prototype.update = function () { var b = this.elem, n = this.prop, h = this.now, a = this.options.step; if (this[n + "Setter"]) this[n + "Setter"](); else b.attr ? b.element && b.attr(n, h, null, !0) : b.style[n] = h + this.unit; a && a.call(b, h, this) }; b.prototype.run = function (r, n, h) {
                var a = this, f = a.options, d = function (f) { return d.stopped ? !1 : a.step(f) }, k = w.requestAnimationFrame || function (a) { setTimeout(a, 13) }, p = function () {
                    for (var a = 0; a < b.timers.length; a++)b.timers[a]() || b.timers.splice(a--,
                        1); b.timers.length && k(p)
                }; r !== n || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +new Date, this.start = r, this.end = n, this.unit = h, this.now = this.start, this.pos = 0, d.elem = this.elem, d.prop = this.prop, d() && 1 === b.timers.push(d) && k(p)) : (delete f.curAnim[this.prop], f.complete && 0 === Object.keys(f.curAnim).length && f.complete.call(this.elem))
            }; b.prototype.step = function (b) {
                var n = +new Date, h = this.options, a = this.elem, f = h.complete, d = h.duration, k = h.curAnim; if (a.attr && !a.element) b = !1; else if (b || n >= d + this.startTime) {
                    this.now =
                    this.end; this.pos = 1; this.update(); var p = k[this.prop] = !0; G(k, function (a) { !0 !== a && (p = !1) }); p && f && f.call(a); b = !1
                } else this.pos = h.easing((n - this.startTime) / d), this.now = this.start + (this.end - this.start) * this.pos, this.update(), b = !0; return b
            }; b.prototype.initPath = function (b, n, h) {
                function a(a, c) { for (; a.length < E;) { var d = a[0], m = c[E - a.length]; m && "M" === d[0] && (a[0] = "C" === m[0] ? ["C", d[1], d[2], d[1], d[2], d[1], d[2]] : ["L", d[1], d[2]]); a.unshift(d); p && (d = a.pop(), a.push(a[a.length - 1], d)) } } function f(a, c) {
                    for (; a.length <
                        E;)if (c = a[Math.floor(a.length / D) - 1].slice(), "C" === c[0] && (c[1] = c[5], c[2] = c[6]), p) { var d = a[Math.floor(a.length / D)].slice(); a.splice(a.length / 2, 0, c, d) } else a.push(c)
                } var d = b.startX, k = b.endX; h = h.slice(); var p = b.isArea, D = p ? 2 : 1; n = n && n.slice(); if (!n) return [h, h]; if (d && k && k.length) { for (b = 0; b < d.length; b++)if (d[b] === k[0]) { var A = b; break } else if (d[0] === k[k.length - d.length + b]) { A = b; var x = !0; break } else if (d[d.length - 1] === k[k.length - d.length + b]) { A = d.length - b; break } "undefined" === typeof A && (n = []) } if (n.length && y(A)) {
                    var E =
                        h.length + A * D; x ? (a(n, h), f(h, n)) : (a(h, n), f(n, h))
                } return [n, h]
            }; b.prototype.fillSetter = function () { b.prototype.strokeSetter.apply(this, arguments) }; b.prototype.strokeSetter = function () { this.elem.attr(this.prop, I(this.start).tweenTo(I(this.end), this.pos), void 0, !0) }; b.timers = []; return b
        }()
    }); H(e, "Core/Animation/AnimationUtilities.js", [e["Core/Animation/Fx.js"], e["Core/Utilities.js"]], function (b, e) {
        function z(a) { return r(a) ? n({ duration: 500, defer: 0 }, a) : { duration: a ? 500 : 0, defer: 0 } } function I(a, d) {
            for (var f = b.timers.length; f--;)b.timers[f].elem !==
                a || d && d !== b.timers[f].prop || (b.timers[f].stopped = !0)
        } var w = e.defined, y = e.getStyle, G = e.isArray, t = e.isNumber, r = e.isObject, n = e.merge, h = e.objectEach, a = e.pick; return {
            animate: function (a, d, k) {
                var f, D = "", A, x; if (!r(k)) { var E = arguments; k = { duration: E[2], easing: E[3], complete: E[4] } } t(k.duration) || (k.duration = 400); k.easing = "function" === typeof k.easing ? k.easing : Math[k.easing] || Math.easeInOutSine; k.curAnim = n(d); h(d, function (q, c) {
                    I(a, c); x = new b(a, k, c); A = void 0; "d" === c && G(d.d) ? (x.paths = x.initPath(a, a.pathArray, d.d),
                        x.toD = d.d, f = 0, A = 1) : a.attr ? f = a.attr(c) : (f = parseFloat(y(a, c)) || 0, "opacity" !== c && (D = "px")); A || (A = q); "string" === typeof A && A.match("px") && (A = A.replace(/px/g, "")); x.run(f, A, D)
                })
            }, animObject: z, getDeferredAnimation: function (a, d, k) { var f = z(d), h = 0, A = 0; (k ? [k] : a.series).forEach(function (a) { a = z(a.options.animation); h = d && w(d.defer) ? f.defer : Math.max(h, a.duration + a.defer); A = Math.min(f.duration, a.duration) }); a.renderer.forExport && (h = 0); return { defer: Math.max(0, h - A), duration: Math.min(h, A) } }, setAnimation: function (f,
                d) { d.renderer.globalAnimation = a(f, d.options.chart.animation, !0) }, stop: I
        }
    }); H(e, "Core/Renderer/HTML/AST.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function (b, e) {
        var z = b.SVG_NS, I = e.attr, w = e.createElement, y = e.css, G = e.error, t = e.isFunction, r = e.isString, n = e.objectEach, h = e.splat, a = (e = b.win.trustedTypes) && t(e.createPolicy) && e.createPolicy("highcharts", { createHTML: function (a) { return a } }), f = a ? a.createHTML("") : ""; try { var d = !!(new DOMParser).parseFromString(f, "text/html") } catch (k) { d = !1 } t = function () {
            function k(a) {
                this.nodes =
                "string" === typeof a ? this.parseMarkup(a) : a
            } k.filterUserAttributes = function (a) { n(a, function (d, f) { var p = !0; -1 === k.allowedAttributes.indexOf(f) && (p = !1); -1 !== ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(f) && (p = r(d) && k.allowedReferences.some(function (a) { return 0 === d.indexOf(a) })); p || (G(33, !1, void 0, { "Invalid attribute in config": "".concat(f) }), delete a[f]); r(d) && a[f] && (a[f] = d.replace(/</g, "&lt;")) }); return a }; k.parseStyle = function (a) {
                return a.split(";").reduce(function (a, d) {
                    d = d.split(":").map(function (a) { return a.trim() });
                    var f = d.shift(); f && d.length && (a[f.replace(/-([a-z])/g, function (a) { return a[1].toUpperCase() })] = d.join(":")); return a
                }, {})
            }; k.setElementHTML = function (a, d) { a.innerHTML = k.emptyHTML; d && (new k(d)).addToDOM(a) }; k.prototype.addToDOM = function (a) {
                function d(a, f) {
                    var p; h(a).forEach(function (a) {
                        var c = a.tagName, q = a.textContent ? b.doc.createTextNode(a.textContent) : void 0, m = k.bypassHTMLFiltering; if (c) if ("#text" === c) var u = q; else if (-1 !== k.allowedTags.indexOf(c) || m) {
                            c = b.doc.createElementNS("svg" === c ? z : f.namespaceURI ||
                                z, c); var g = a.attributes || {}; n(a, function (c, a) { "tagName" !== a && "attributes" !== a && "children" !== a && "style" !== a && "textContent" !== a && (g[a] = c) }); I(c, m ? g : k.filterUserAttributes(g)); a.style && y(c, a.style); q && c.appendChild(q); d(a.children || [], c); u = c
                        } else G(33, !1, void 0, { "Invalid tagName in config": c }); u && f.appendChild(u); p = u
                    }); return p
                } return d(this.nodes, a)
            }; k.prototype.parseMarkup = function (f) {
                var p = []; f = f.trim().replace(/ style=(["'])/g, " data-style=$1"); if (d) f = (new DOMParser).parseFromString(a ? a.createHTML(f) :
                    f, "text/html"); else { var h = w("div"); h.innerHTML = f; f = { body: h } } var x = function (a, d) { var c = a.nodeName.toLowerCase(), f = { tagName: c }; "#text" === c && (f.textContent = a.textContent || ""); if (c = a.attributes) { var m = {};[].forEach.call(c, function (c) { "data-style" === c.name ? f.style = k.parseStyle(c.value) : m[c.name] = c.value }); f.attributes = m } if (a.childNodes.length) { var u = [];[].forEach.call(a.childNodes, function (c) { x(c, u) }); u.length && (f.children = u) } d.push(f) };[].forEach.call(f.body.childNodes, function (a) { return x(a, p) }); return p
            };
            k.allowedAttributes = "aria-controls aria-describedby aria-expanded aria-haspopup aria-hidden aria-label aria-labelledby aria-live aria-pressed aria-readonly aria-roledescription aria-selected class clip-path color colspan cx cy d dx dy disabled fill height href id in markerHeight markerWidth offset opacity orient padding paddingLeft paddingRight patternUnits r refX refY role scope slope src startOffset stdDeviation stroke stroke-linecap stroke-width style tableValues result rowspan summary target tabindex text-align text-anchor textAnchor textLength title type valign width x x1 x2 xlink:href y y1 y2 zIndex".split(" ");
            k.allowedReferences = "https:// http:// mailto: / ../ ./ #".split(" "); k.allowedTags = "a abbr b br button caption circle clipPath code dd defs div dl dt em feComponentTransfer feFuncA feFuncB feFuncG feFuncR feGaussianBlur feOffset feMerge feMergeNode filter h1 h2 h3 h4 h5 h6 hr i img li linearGradient marker ol p path pattern pre rect small span stop strong style sub sup svg table text textPath thead title tbody tspan td th tr u ul #text".split(" "); k.emptyHTML = f; k.bypassHTMLFiltering = !1; return k
        }();
        ""; return t
    }); H(e, "Core/FormatUtilities.js", [e["Core/Defaults.js"], e["Core/Utilities.js"]], function (b, e) {
        function z(b, h, a, f) {
            b = +b || 0; h = +h; var d = I.lang, k = (b.toString().split(".")[1] || "").split("e")[0].length, p = b.toString().split("e"), D = h; if (-1 === h) h = Math.min(k, 20); else if (!G(h)) h = 2; else if (h && p[1] && 0 > p[1]) { var A = h + +p[1]; 0 <= A ? (p[0] = (+p[0]).toExponential(A).split("e")[0], h = A) : (p[0] = p[0].split(".")[0] || 0, b = 20 > h ? (p[0] * Math.pow(10, p[1])).toFixed(h) : 0, p[1] = 0) } A = (Math.abs(p[1] ? p[0] : b) + Math.pow(10, -Math.max(h,
                k) - 1)).toFixed(h); k = String(r(A)); var x = 3 < k.length ? k.length % 3 : 0; a = t(a, d.decimalPoint); f = t(f, d.thousandsSep); b = (0 > b ? "-" : "") + (x ? k.substr(0, x) + f : ""); b = 0 > +p[1] && !D ? "0" : b + k.substr(x).replace(/(\d{3})(?=\d)/g, "$1" + f); h && (b += a + A.slice(-h)); p[1] && 0 !== +b && (b += "e" + p[1]); return b
        } var I = b.defaultOptions, w = b.defaultTime, y = e.getNestedProperty, G = e.isNumber, t = e.pick, r = e.pInt; return {
            dateFormat: function (b, h, a) { return w.dateFormat(b, h, a) }, format: function (b, h, a) {
                var f = "{", d = !1, k = /f$/, p = /\.([0-9])/, D = I.lang, A = a && a.time ||
                    w; a = a && a.numberFormatter || z; for (var x = []; b;) { var n = b.indexOf(f); if (-1 === n) break; var q = b.slice(0, n); if (d) { q = q.split(":"); f = y(q.shift() || "", h); if (q.length && "number" === typeof f) if (q = q.join(":"), k.test(q)) { var c = parseInt((q.match(p) || ["", "-1"])[1], 10); null !== f && (f = a(f, c, D.decimalPoint, -1 < q.indexOf(",") ? D.thousandsSep : "")) } else f = A.dateFormat(q, f); x.push(f) } else x.push(q); b = b.slice(n + 1); f = (d = !d) ? "}" : "{" } x.push(b); return x.join("")
            }, numberFormat: z
        }
    }); H(e, "Core/Renderer/RendererUtilities.js", [e["Core/Utilities.js"]],
        function (b) {
            var e = b.clamp, z = b.pick, C = b.stableSort, w; (function (b) {
                function y(b, r, n) {
                    var h = b, a = h.reducedLen || r, f = function (a, d) { return (d.rank || 0) - (a.rank || 0) }, d = function (a, d) { return a.target - d.target }, k, p = !0, D = [], A = 0; for (k = b.length; k--;)A += b[k].size; if (A > a) { C(b, f); for (A = k = 0; A <= a;)A += b[k].size, k++; D = b.splice(k - 1, b.length) } C(b, d); for (b = b.map(function (a) { return { size: a.size, targets: [a.target], align: z(a.align, .5) } }); p;) {
                        for (k = b.length; k--;)a = b[k], f = (Math.min.apply(0, a.targets) + Math.max.apply(0, a.targets)) /
                            2, a.pos = e(f - a.size * a.align, 0, r - a.size); k = b.length; for (p = !1; k--;)0 < k && b[k - 1].pos + b[k - 1].size > b[k].pos && (b[k - 1].size += b[k].size, b[k - 1].targets = b[k - 1].targets.concat(b[k].targets), b[k - 1].align = .5, b[k - 1].pos + b[k - 1].size > r && (b[k - 1].pos = r - b[k - 1].size), b.splice(k, 1), p = !0)
                    } h.push.apply(h, D); k = 0; b.some(function (a) {
                        var d = 0; return (a.targets || []).some(function () {
                            h[k].pos = a.pos + d; if ("undefined" !== typeof n && Math.abs(h[k].pos - h[k].target) > n) return h.slice(0, k + 1).forEach(function (a) { return delete a.pos }), h.reducedLen =
                                (h.reducedLen || r) - .1 * r, h.reducedLen > .1 * r && y(h, r, n), !0; d += h[k].size; k++; return !1
                        })
                    }); C(h, d); return h
                } b.distribute = y
            })(w || (w = {})); return w
        }); H(e, "Core/Renderer/SVG/SVGElement.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function (b, e, z, C) {
            var w = b.animate, y = b.animObject, I = b.stop, t = z.deg2rad, r = z.doc, n = z.svg, h = z.SVG_NS, a = z.win, f = C.addEvent, d = C.attr, k = C.createElement, p = C.css, D = C.defined, A = C.erase, x = C.extend, E = C.fireEvent, q = C.isArray,
            c = C.isFunction, B = C.isString, m = C.merge, u = C.objectEach, g = C.pick, F = C.pInt, l = C.syncTimeout, v = C.uniqueKey; b = function () {
                function b() { this.element = void 0; this.onEvents = {}; this.opacity = 1; this.renderer = void 0; this.SVG_NS = h; this.symbolCustomAttribs = "x y width height r start end innerR anchorX anchorY rounded".split(" ") } b.prototype._defaultGetter = function (c) { c = g(this[c + "Value"], this[c], this.element ? this.element.getAttribute(c) : null, 0); /^[\-0-9\.]+$/.test(c) && (c = parseFloat(c)); return c }; b.prototype._defaultSetter =
                    function (c, a, g) { g.setAttribute(a, c) }; b.prototype.add = function (c) { var a = this.renderer, g = this.element; c && (this.parentGroup = c); "undefined" !== typeof this.textStr && "text" === this.element.nodeName && a.buildText(this); this.added = !0; if (!c || c.handleZ || this.zIndex) var l = this.zIndexSetter(); l || (c ? c.element : a.box).appendChild(g); if (this.onAdd) this.onAdd(); return this }; b.prototype.addClass = function (c, a) {
                        var g = a ? "" : this.attr("class") || ""; c = (c || "").split(/ /g).reduce(function (c, a) { -1 === g.indexOf(a) && c.push(a); return c },
                            g ? [g] : []).join(" "); c !== g && this.attr("class", c); return this
                    }; b.prototype.afterSetters = function () { this.doTransform && (this.updateTransform(), this.doTransform = !1) }; b.prototype.align = function (c, a, l) {
                        var m = {}, d = this.renderer, f = d.alignedObjects, v, u, J; if (c) { if (this.alignOptions = c, this.alignByTranslate = a, !l || B(l)) this.alignTo = v = l || "renderer", A(f, this), f.push(this), l = void 0 } else c = this.alignOptions, a = this.alignByTranslate, v = this.alignTo; l = g(l, d[v], "scrollablePlotBox" === v ? d.plotBox : void 0, d); v = c.align; var k =
                            c.verticalAlign; d = (l.x || 0) + (c.x || 0); f = (l.y || 0) + (c.y || 0); "right" === v ? u = 1 : "center" === v && (u = 2); u && (d += (l.width - (c.width || 0)) / u); m[a ? "translateX" : "x"] = Math.round(d); "bottom" === k ? J = 1 : "middle" === k && (J = 2); J && (f += (l.height - (c.height || 0)) / J); m[a ? "translateY" : "y"] = Math.round(f); this[this.placed ? "animate" : "attr"](m); this.placed = !0; this.alignAttr = m; return this
                    }; b.prototype.alignSetter = function (c) {
                        var a = { left: "start", center: "middle", right: "end" }; a[c] && (this.alignValue = c, this.element.setAttribute("text-anchor",
                            a[c]))
                    }; b.prototype.animate = function (c, a, m) { var d = this, f = y(g(a, this.renderer.globalAnimation, !0)); a = f.defer; g(r.hidden, r.msHidden, r.webkitHidden, !1) && (f.duration = 0); 0 !== f.duration ? (m && (f.complete = m), l(function () { d.element && w(d, c, f) }, a)) : (this.attr(c, void 0, m || f.complete), u(c, function (c, a) { f.step && f.step.call(this, c, { prop: a, pos: 1, elem: this }) }, this)); return this }; b.prototype.applyTextOutline = function (c) {
                        var a = this.element; -1 !== c.indexOf("contrast") && (c = c.replace(/contrast/g, this.renderer.getContrast(a.style.fill)));
                        var g = c.split(" "); c = g[g.length - 1]; if ((g = g[0]) && "none" !== g && z.svg) {
                            this.fakeTS = !0; g = g.replace(/(^[\d\.]+)(.*?)$/g, function (c, a, g) { return 2 * Number(a) + g }); this.removeTextOutline(); var l = r.createElementNS(h, "tspan"); d(l, { "class": "highcharts-text-outline", fill: c, stroke: c, "stroke-width": g, "stroke-linejoin": "round" }); c = a.querySelector("textPath") || a;[].forEach.call(c.childNodes, function (c) {
                                var a = c.cloneNode(!0); a.removeAttribute && ["fill", "stroke", "stroke-width", "stroke"].forEach(function (c) { return a.removeAttribute(c) });
                                l.appendChild(a)
                            }); var m = 0;[].forEach.call(c.querySelectorAll("text tspan"), function (c) { m += Number(c.getAttribute("dy")) }); g = r.createElementNS(h, "tspan"); g.textContent = "\u200b"; d(g, { x: Number(a.getAttribute("x")), dy: -m }); l.appendChild(g); c.insertBefore(l, c.firstChild)
                        }
                    }; b.prototype.attr = function (c, a, g, l) {
                        var m = this.element, d = this.symbolCustomAttribs, f, v = this, k, q; if ("string" === typeof c && "undefined" !== typeof a) { var J = c; c = {}; c[J] = a } "string" === typeof c ? v = (this[c + "Getter"] || this._defaultGetter).call(this,
                            c, m) : (u(c, function (a, g) { k = !1; l || I(this, g); this.symbolName && -1 !== d.indexOf(g) && (f || (this.symbolAttr(c), f = !0), k = !0); !this.rotation || "x" !== g && "y" !== g || (this.doTransform = !0); k || (q = this[g + "Setter"] || this._defaultSetter, q.call(this, a, g, m), !this.styledMode && this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(g) && this.updateShadows(g, a, q)) }, this), this.afterSetters()); g && g.call(this); return v
                    }; b.prototype.clip = function (c) {
                        return this.attr("clip-path", c ? "url(" + this.renderer.url + "#" + c.id +
                            ")" : "none")
                    }; b.prototype.crisp = function (c, a) { a = a || c.strokeWidth || 0; var g = Math.round(a) % 2 / 2; c.x = Math.floor(c.x || this.x || 0) + g; c.y = Math.floor(c.y || this.y || 0) + g; c.width = Math.floor((c.width || this.width || 0) - 2 * g); c.height = Math.floor((c.height || this.height || 0) - 2 * g); D(c.strokeWidth) && (c.strokeWidth = a); return c }; b.prototype.complexColor = function (c, a, g) {
                        var l = this.renderer, d, f, k, F, p, B, J, b, h, M, A = [], x; E(this.renderer, "complexColor", { args: arguments }, function () {
                            c.radialGradient ? f = "radialGradient" : c.linearGradient &&
                                (f = "linearGradient"); if (f) {
                                    k = c[f]; p = l.gradients; B = c.stops; h = g.radialReference; q(k) && (c[f] = k = { x1: k[0], y1: k[1], x2: k[2], y2: k[3], gradientUnits: "userSpaceOnUse" }); "radialGradient" === f && h && !D(k.gradientUnits) && (F = k, k = m(k, l.getRadialAttr(h, F), { gradientUnits: "userSpaceOnUse" })); u(k, function (c, a) { "id" !== a && A.push(a, c) }); u(B, function (c) { A.push(c) }); A = A.join(","); if (p[A]) M = p[A].attr("id"); else {
                                        k.id = M = v(); var L = p[A] = l.createElement(f).attr(k).add(l.defs); L.radAttr = F; L.stops = []; B.forEach(function (c) {
                                            0 === c[1].indexOf("rgba") ?
                                            (d = e.parse(c[1]), J = d.get("rgb"), b = d.get("a")) : (J = c[1], b = 1); c = l.createElement("stop").attr({ offset: c[0], "stop-color": J, "stop-opacity": b }).add(L); L.stops.push(c)
                                        })
                                    } x = "url(" + l.url + "#" + M + ")"; g.setAttribute(a, x); g.gradient = A; c.toString = function () { return x }
                                }
                        })
                    }; b.prototype.css = function (c) {
                        var a = this.styles, g = {}, l = this.element, d = !a; c.color && (c.fill = c.color); a && u(c, function (c, l) { a && a[l] !== c && (g[l] = c, d = !0) }); if (d) {
                            a && (c = x(a, g)); if (null === c.width || "auto" === c.width) delete this.textWidth; else if ("text" === l.nodeName.toLowerCase() &&
                                c.width) var f = this.textWidth = F(c.width); this.styles = c; f && !n && this.renderer.forExport && delete c.width; var v = m(c); l.namespaceURI === this.SVG_NS && ["textOutline", "textOverflow", "width"].forEach(function (c) { return v && delete v[c] }); p(l, v); this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), c.textOutline && this.applyTextOutline(c.textOutline))
                        } return this
                    }; b.prototype.dashstyleSetter = function (c) {
                        var a = this["stroke-width"]; "inherit" === a && (a = 1); if (c = c && c.toLowerCase()) {
                            var l = c.replace("shortdashdotdot",
                                "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(","); for (c = l.length; c--;)l[c] = "" + F(l[c]) * g(a, NaN); c = l.join(",").replace(/NaN/g, "none"); this.element.setAttribute("stroke-dasharray", c)
                        }
                    }; b.prototype.destroy = function () {
                        var c = this, a = c.element || {}, g = c.renderer, l = a.ownerSVGElement, m = g.isSVG && "SPAN" === a.nodeName && c.parentGroup || void 0; a.onclick = a.onmouseout =
                            a.onmouseover = a.onmousemove = a.point = null; I(c); if (c.clipPath && l) { var d = c.clipPath;[].forEach.call(l.querySelectorAll("[clip-path],[CLIP-PATH]"), function (c) { -1 < c.getAttribute("clip-path").indexOf(d.element.id) && c.removeAttribute("clip-path") }); c.clipPath = d.destroy() } if (c.stops) { for (l = 0; l < c.stops.length; l++)c.stops[l].destroy(); c.stops.length = 0; c.stops = void 0 } c.safeRemoveChild(a); for (g.styledMode || c.destroyShadows(); m && m.div && 0 === m.div.childNodes.length;)a = m.parentGroup, c.safeRemoveChild(m.div), delete m.div,
                                m = a; c.alignTo && A(g.alignedObjects, c); u(c, function (a, g) { c[g] && c[g].parentGroup === c && c[g].destroy && c[g].destroy(); delete c[g] })
                    }; b.prototype.destroyShadows = function () { (this.shadows || []).forEach(function (c) { this.safeRemoveChild(c) }, this); this.shadows = void 0 }; b.prototype.dSetter = function (c, a, g) {
                        q(c) && ("string" === typeof c[0] && (c = this.renderer.pathToSegments(c)), this.pathArray = c, c = c.reduce(function (c, a, g) { return a && a.join ? (g ? c + " " : "") + a.join(" ") : (a || "").toString() }, "")); /(NaN| {2}|^$)/.test(c) && (c = "M 0 0");
                        this[a] !== c && (g.setAttribute(a, c), this[a] = c)
                    }; b.prototype.fadeOut = function (c) { var a = this; a.animate({ opacity: 0 }, { duration: g(c, 150), complete: function () { a.hide() } }) }; b.prototype.fillSetter = function (c, a, g) { "string" === typeof c ? g.setAttribute(a, c) : c && this.complexColor(c, a, g) }; b.prototype.getBBox = function (a, l) {
                        var m = this.alignValue, d = this.element, f = this.renderer, v = this.styles, k = this.textStr, u = f.cache, q = f.cacheKeys, F = d.namespaceURI === this.SVG_NS; l = g(l, this.rotation, 0); var B = f.styledMode ? d && b.prototype.getStyle.call(d,
                            "font-size") : v && v.fontSize, h; if (D(k)) { var J = k.toString(); -1 === J.indexOf("<") && (J = J.replace(/[0-9]/g, "0")); J += ["", l, B, this.textWidth, m, v && v.textOverflow, v && v.fontWeight].join() } J && !a && (h = u[J]); if (!h) {
                                if (F || f.forExport) { try { var A = this.fakeTS && function (c) { var a = d.querySelector(".highcharts-text-outline"); a && p(a, { display: c }) }; c(A) && A("none"); h = d.getBBox ? x({}, d.getBBox()) : { width: d.offsetWidth, height: d.offsetHeight, x: 0, y: 0 }; c(A) && A("") } catch (P) { "" } if (!h || 0 > h.width) h = { x: 0, y: 0, width: 0, height: 0 } } else h = this.htmlGetBBox();
                                if (f.isSVG && (f = h.width, a = h.height, F && (h.height = a = { "11px,17": 14, "13px,20": 16 }["" + (B || "") + ",".concat(Math.round(a))] || a), l)) { F = Number(d.getAttribute("y") || 0) - h.y; m = { right: 1, center: .5 }[m || 0] || 0; v = l * t; B = (l - 90) * t; var M = f * Math.cos(v); l = f * Math.sin(v); A = Math.cos(B); v = Math.sin(B); f = h.x + m * (f - M) + F * A; B = f + M; A = B - a * A; M = A - M; F = h.y + F - m * l + F * v; m = F + l; a = m - a * v; l = a - l; h.x = Math.min(f, B, A, M); h.y = Math.min(F, m, a, l); h.width = Math.max(f, B, A, M) - h.x; h.height = Math.max(F, m, a, l) - h.y } if (J && ("" === k || 0 < h.height)) {
                                    for (; 250 < q.length;)delete u[q.shift()];
                                    u[J] || q.push(J); u[J] = h
                                }
                            } return h
                    }; b.prototype.getStyle = function (c) { return a.getComputedStyle(this.element || this, "").getPropertyValue(c) }; b.prototype.hasClass = function (c) { return -1 !== ("" + this.attr("class")).split(" ").indexOf(c) }; b.prototype.hide = function () { return this.attr({ visibility: "hidden" }) }; b.prototype.htmlGetBBox = function () { return { height: 0, width: 0, x: 0, y: 0 } }; b.prototype.init = function (c, a) { this.element = "span" === a ? k(a) : r.createElementNS(this.SVG_NS, a); this.renderer = c; E(this, "afterInit") }; b.prototype.on =
                        function (c, a) { var g = this.onEvents; if (g[c]) g[c](); g[c] = f(this.element, c, a); return this }; b.prototype.opacitySetter = function (c, a, g) { this.opacity = c = Number(Number(c).toFixed(3)); g.setAttribute(a, c) }; b.prototype.removeClass = function (c) { return this.attr("class", ("" + this.attr("class")).replace(B(c) ? new RegExp("(^| )".concat(c, "( |$)")) : c, " ").replace(/ +/g, " ").trim()) }; b.prototype.removeTextOutline = function () { var c = this.element.querySelector("tspan.highcharts-text-outline"); c && this.safeRemoveChild(c) }; b.prototype.safeRemoveChild =
                            function (c) { var a = c.parentNode; a && a.removeChild(c) }; b.prototype.setRadialReference = function (c) { var a = this.element.gradient && this.renderer.gradients[this.element.gradient]; this.element.radialReference = c; a && a.radAttr && a.animate(this.renderer.getRadialAttr(c, a.radAttr)); return this }; b.prototype.setTextPath = function (c, a) {
                                var g = this; a = m(!0, { enabled: !0, attributes: { dy: -5, startOffset: "50%", textAnchor: "middle" } }, a); var l = this.renderer.url, d = this.text || this, k = d.textPath, u = a.attributes, q = a.enabled; c = c || k && k.path;
                                k && k.undo(); c && q ? (a = f(d, "afterModifyTree", function (a) { if (c && q) { var m = c.attr("id"); m || c.attr("id", m = v()); var f = { x: 0, y: 0 }; D(u.dx) && (f.dx = u.dx, delete u.dx); D(u.dy) && (f.dy = u.dy, delete u.dy); d.attr(f); g.attr({ transform: "" }); g.box && (g.box = g.box.destroy()); f = a.nodes.slice(0); a.nodes.length = 0; a.nodes[0] = { tagName: "textPath", attributes: x(u, { "text-anchor": u.textAnchor, href: "" + l + "#".concat(m) }), children: f } } }), d.textPath = { path: c, undo: a }) : (d.attr({ dx: 0, dy: 0 }), delete d.textPath); this.added && (d.textCache = "", this.renderer.buildText(d));
                                return this
                            }; b.prototype.shadow = function (c, a, g) {
                                var l = [], m = this.element, f = this.oldShadowOptions, v = this.parentGroup, k = v && 90 === v.rotation; v = { color: "#000000", offsetX: k ? -1 : 1, offsetY: k ? -1 : 1, opacity: .15, width: 3 }; var q = !1, F; !0 === c ? F = v : "object" === typeof c && (F = x(v, c)); F && (F && f && u(F, function (c, a) { c !== f[a] && (q = !0) }), q && this.destroyShadows(), this.oldShadowOptions = F); if (!F) this.destroyShadows(); else if (!this.shadows) {
                                    v = F.opacity / F.width; var B = k ? "translate(".concat(F.offsetY, ", ").concat(F.offsetX, ")") : "translate(".concat(F.offsetX,
                                        ", ").concat(F.offsetY, ")"); for (k = 1; k <= F.width; k++) { var p = m.cloneNode(!1); var h = 2 * F.width + 1 - 2 * k; d(p, { stroke: c.color || "#000000", "stroke-opacity": v * k, "stroke-width": h, transform: B, fill: "none" }); p.setAttribute("class", (p.getAttribute("class") || "") + " highcharts-shadow"); g && (d(p, "height", Math.max(d(p, "height") - h, 0)), p.cutHeight = h); a ? a.element.appendChild(p) : m.parentNode && m.parentNode.insertBefore(p, m); l.push(p) } this.shadows = l
                                } return this
                            }; b.prototype.show = function (c) {
                                void 0 === c && (c = !0); return this.attr({
                                    visibility: c ?
                                        "inherit" : "visible"
                                })
                            }; b.prototype["stroke-widthSetter"] = function (c, a, g) { this[a] = c; g.setAttribute(a, c) }; b.prototype.strokeWidth = function () { if (!this.renderer.styledMode) return this["stroke-width"] || 0; var c = this.getStyle("stroke-width"), a = 0; if (c.indexOf("px") === c.length - 2) a = F(c); else if ("" !== c) { var g = r.createElementNS(h, "rect"); d(g, { width: c, "stroke-width": 0 }); this.element.parentNode.appendChild(g); a = g.getBBox().width; g.parentNode.removeChild(g) } return a }; b.prototype.symbolAttr = function (c) {
                                var a = this;
                                "x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function (l) { a[l] = g(c[l], a[l]) }); a.attr({ d: a.renderer.symbols[a.symbolName](a.x, a.y, a.width, a.height, a) })
                            }; b.prototype.textSetter = function (c) { c !== this.textStr && (delete this.textPxLength, this.textStr = c, this.added && this.renderer.buildText(this)) }; b.prototype.titleSetter = function (c) {
                                var a = this.element, l = a.getElementsByTagName("title")[0] || r.createElementNS(this.SVG_NS, "title"); a.insertBefore ? a.insertBefore(l, a.firstChild) :
                                    a.appendChild(l); l.textContent = String(g(c, "")).replace(/<[^>]*>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
                            }; b.prototype.toFront = function () { var c = this.element; c.parentNode.appendChild(c); return this }; b.prototype.translate = function (c, a) { return this.attr({ translateX: c, translateY: a }) }; b.prototype.updateShadows = function (c, a, g) { var l = this.shadows; if (l) for (var m = l.length; m--;)g.call(l[m], "height" === c ? Math.max(a - (l[m].cutHeight || 0), 0) : "d" === c ? this.d : a, c, l[m]) }; b.prototype.updateTransform = function () {
                                var c =
                                    this.element, a = this.matrix, l = this.rotation; l = void 0 === l ? 0 : l; var m = this.scaleX, d = this.scaleY, f = this.translateX, v = this.translateY; f = ["translate(" + (void 0 === f ? 0 : f) + "," + (void 0 === v ? 0 : v) + ")"]; D(a) && f.push("matrix(" + a.join(",") + ")"); l && f.push("rotate(" + l + " " + g(this.rotationOriginX, c.getAttribute("x"), 0) + " " + g(this.rotationOriginY, c.getAttribute("y") || 0) + ")"); (D(m) || D(d)) && f.push("scale(" + g(m, 1) + " " + g(d, 1) + ")"); f.length && !(this.text || this).textPath && c.setAttribute("transform", f.join(" "))
                            }; b.prototype.visibilitySetter =
                                function (c, a, g) { "inherit" === c ? g.removeAttribute(a) : this[a] !== c && g.setAttribute(a, c); this[a] = c }; b.prototype.xGetter = function (c) { "circle" === this.element.nodeName && ("x" === c ? c = "cx" : "y" === c && (c = "cy")); return this._defaultGetter(c) }; b.prototype.zIndexSetter = function (c, a) {
                                    var g = this.renderer, l = this.parentGroup, m = (l || g).element || g.box, d = this.element; g = m === g.box; var f = !1; var v = this.added; var k; D(c) ? (d.setAttribute("data-z-index", c), c = +c, this[a] === c && (v = !1)) : D(this[a]) && d.removeAttribute("data-z-index"); this[a] =
                                        c; if (v) { (c = this.zIndex) && l && (l.handleZ = !0); a = m.childNodes; for (k = a.length - 1; 0 <= k && !f; k--) { l = a[k]; v = l.getAttribute("data-z-index"); var u = !D(v); if (l !== d) if (0 > c && u && !g && !k) m.insertBefore(d, a[k]), f = !0; else if (F(v) <= c || u && (!D(c) || 0 <= c)) m.insertBefore(d, a[k + 1] || null), f = !0 } f || (m.insertBefore(d, a[g ? 3 : 0] || null), f = !0) } return f
                                }; return b
            }(); b.prototype.strokeSetter = b.prototype.fillSetter; b.prototype.yGetter = b.prototype.xGetter; b.prototype.matrixSetter = b.prototype.rotationOriginXSetter = b.prototype.rotationOriginYSetter =
                b.prototype.rotationSetter = b.prototype.scaleXSetter = b.prototype.scaleYSetter = b.prototype.translateXSetter = b.prototype.translateYSetter = b.prototype.verticalAlignSetter = function (c, a) { this[a] = c; this.doTransform = !0 }; ""; return b
        }); H(e, "Core/Renderer/RendererRegistry.js", [e["Core/Globals.js"]], function (b) {
            var e; (function (e) {
                e.rendererTypes = {}; var z; e.getRendererType = function (b) { void 0 === b && (b = z); return e.rendererTypes[b] || e.rendererTypes[z] }; e.registerRendererType = function (I, y, G) {
                    e.rendererTypes[I] = y; if (!z ||
                        G) z = I, b.Renderer = y
                }
            })(e || (e = {})); return e
        }); H(e, "Core/Renderer/SVG/SVGLabel.js", [e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"]], function (b, e) {
            var z = this && this.__extends || function () {
                var b = function (h, a) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, d) { a.__proto__ = d } || function (a, d) { for (var f in d) d.hasOwnProperty(f) && (a[f] = d[f]) }; return b(h, a) }; return function (h, a) {
                    function f() { this.constructor = h } b(h, a); h.prototype = null === a ? Object.create(a) : (f.prototype = a.prototype,
                        new f)
                }
            }(), I = e.defined, w = e.extend, y = e.isNumber, G = e.merge, t = e.pick, r = e.removeEvent; return function (n) {
                function h(a, f, d, k, p, b, A, x, E, q) {
                    var c = n.call(this) || this; c.paddingLeftSetter = c.paddingSetter; c.paddingRightSetter = c.paddingSetter; c.init(a, "g"); c.textStr = f; c.x = d; c.y = k; c.anchorX = b; c.anchorY = A; c.baseline = E; c.className = q; c.addClass("button" === q ? "highcharts-no-tooltip" : "highcharts-label"); q && c.addClass("highcharts-" + q); c.text = a.text(void 0, 0, 0, x).attr({ zIndex: 1 }); var B; "string" === typeof p && ((B = /^url\((.*?)\)$/.test(p)) ||
                        c.renderer.symbols[p]) && (c.symbolKey = p); c.bBox = h.emptyBBox; c.padding = 3; c.baselineOffset = 0; c.needsBox = a.styledMode || B; c.deferredAttr = {}; c.alignFactor = 0; return c
                } z(h, n); h.prototype.alignSetter = function (a) { a = { left: 0, center: .5, right: 1 }[a]; a !== this.alignFactor && (this.alignFactor = a, this.bBox && y(this.xSetting) && this.attr({ x: this.xSetting })) }; h.prototype.anchorXSetter = function (a, f) { this.anchorX = a; this.boxAttr(f, Math.round(a) - this.getCrispAdjust() - this.xSetting) }; h.prototype.anchorYSetter = function (a, f) {
                    this.anchorY =
                    a; this.boxAttr(f, a - this.ySetting)
                }; h.prototype.boxAttr = function (a, f) { this.box ? this.box.attr(a, f) : this.deferredAttr[a] = f }; h.prototype.css = function (a) { if (a) { var f = {}; a = G(a); h.textProps.forEach(function (d) { "undefined" !== typeof a[d] && (f[d] = a[d], delete a[d]) }); this.text.css(f); var d = "width" in f; "fontSize" in f || "fontWeight" in f ? this.updateTextPadding() : d && this.updateBoxSize() } return b.prototype.css.call(this, a) }; h.prototype.destroy = function () {
                    r(this.element, "mouseenter"); r(this.element, "mouseleave"); this.text &&
                        this.text.destroy(); this.box && (this.box = this.box.destroy()); b.prototype.destroy.call(this)
                }; h.prototype.fillSetter = function (a, f) { a && (this.needsBox = !0); this.fill = a; this.boxAttr(f, a) }; h.prototype.getBBox = function () { this.textStr && 0 === this.bBox.width && 0 === this.bBox.height && this.updateBoxSize(); var a = this.padding, f = t(this.paddingLeft, a); return { width: this.width, height: this.height, x: this.bBox.x - f, y: this.bBox.y - a } }; h.prototype.getCrispAdjust = function () {
                    return this.renderer.styledMode && this.box ? this.box.strokeWidth() %
                        2 / 2 : (this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2
                }; h.prototype.heightSetter = function (a) { this.heightSetting = a }; h.prototype.onAdd = function () { this.text.add(this); this.attr({ text: t(this.textStr, ""), x: this.x || 0, y: this.y || 0 }); this.box && I(this.anchorX) && this.attr({ anchorX: this.anchorX, anchorY: this.anchorY }) }; h.prototype.paddingSetter = function (a, f) { y(a) ? a !== this[f] && (this[f] = a, this.updateTextPadding()) : this[f] = void 0 }; h.prototype.rSetter = function (a, f) { this.boxAttr(f, a) }; h.prototype.shadow =
                    function (a) { a && !this.renderer.styledMode && (this.updateBoxSize(), this.box && this.box.shadow(a)); return this }; h.prototype.strokeSetter = function (a, f) { this.stroke = a; this.boxAttr(f, a) }; h.prototype["stroke-widthSetter"] = function (a, f) { a && (this.needsBox = !0); this["stroke-width"] = a; this.boxAttr(f, a) }; h.prototype["text-alignSetter"] = function (a) { this.textAlign = a }; h.prototype.textSetter = function (a) { "undefined" !== typeof a && this.text.attr({ text: a }); this.updateTextPadding() }; h.prototype.updateBoxSize = function () {
                        var a =
                            this.text, f = a.element.style, d = {}, k = this.padding, p = this.bBox = y(this.widthSetting) && y(this.heightSetting) && !this.textAlign || !I(a.textStr) ? h.emptyBBox : a.getBBox(); this.width = this.getPaddedWidth(); this.height = (this.heightSetting || p.height || 0) + 2 * k; f = this.renderer.fontMetrics(f && f.fontSize, a); this.baselineOffset = k + Math.min((this.text.firstLineMetrics || f).b, p.height || Infinity); this.heightSetting && (this.baselineOffset += (this.heightSetting - f.h) / 2); this.needsBox && !a.textPath && (this.box || (a = this.box = this.symbolKey ?
                                this.renderer.symbol(this.symbolKey) : this.renderer.rect(), a.addClass(("button" === this.className ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), a.add(this)), a = this.getCrispAdjust(), d.x = a, d.y = (this.baseline ? -this.baselineOffset : 0) + a, d.width = Math.round(this.width), d.height = Math.round(this.height), this.box.attr(w(d, this.deferredAttr)), this.deferredAttr = {})
                    }; h.prototype.updateTextPadding = function () {
                        var a = this.text; if (!a.textPath) {
                            this.updateBoxSize(); var f = this.baseline ?
                                0 : this.baselineOffset, d = t(this.paddingLeft, this.padding); I(this.widthSetting) && this.bBox && ("center" === this.textAlign || "right" === this.textAlign) && (d += { center: .5, right: 1 }[this.textAlign] * (this.widthSetting - this.bBox.width)); if (d !== a.x || f !== a.y) a.attr("x", d), a.hasBoxWidthChanged && (this.bBox = a.getBBox(!0)), "undefined" !== typeof f && a.attr("y", f); a.x = d; a.y = f
                        }
                    }; h.prototype.widthSetter = function (a) { this.widthSetting = y(a) ? a : void 0 }; h.prototype.getPaddedWidth = function () {
                        var a = this.padding, f = t(this.paddingLeft,
                            a); a = t(this.paddingRight, a); return (this.widthSetting || this.bBox.width || 0) + f + a
                    }; h.prototype.xSetter = function (a) { this.x = a; this.alignFactor && (a -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = !0); this.xSetting = Math.round(a); this.attr("translateX", this.xSetting) }; h.prototype.ySetter = function (a) { this.ySetting = this.y = Math.round(a); this.attr("translateY", this.ySetting) }; h.emptyBBox = { width: 0, height: 0, x: 0, y: 0 }; h.textProps = "color direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(" ");
                return h
            }(b)
        }); H(e, "Core/Renderer/SVG/Symbols.js", [e["Core/Utilities.js"]], function (b) {
            function e(b, e, n, h, a) {
                var f = []; if (a) {
                    var d = a.start || 0, k = G(a.r, n); n = G(a.r, h || n); var p = (a.end || 0) - .001; h = a.innerR; var D = G(a.open, .001 > Math.abs((a.end || 0) - d - 2 * Math.PI)), A = Math.cos(d), x = Math.sin(d), E = Math.cos(p), q = Math.sin(p); d = G(a.longArc, .001 > p - d - Math.PI ? 0 : 1); f.push(["M", b + k * A, e + n * x], ["A", k, n, 0, d, G(a.clockwise, 1), b + k * E, e + n * q]); w(h) && f.push(D ? ["M", b + h * E, e + h * q] : ["L", b + h * E, e + h * q], ["A", h, h, 0, d, w(a.clockwise) ? 1 - a.clockwise :
                        0, b + h * A, e + h * x]); D || f.push(["Z"])
                } return f
            } function z(b, e, n, h, a) { return a && a.r ? C(b, e, n, h, a) : [["M", b, e], ["L", b + n, e], ["L", b + n, e + h], ["L", b, e + h], ["Z"]] } function C(b, e, n, h, a) { a = a && a.r || 0; return [["M", b + a, e], ["L", b + n - a, e], ["C", b + n, e, b + n, e, b + n, e + a], ["L", b + n, e + h - a], ["C", b + n, e + h, b + n, e + h, b + n - a, e + h], ["L", b + a, e + h], ["C", b, e + h, b, e + h, b, e + h - a], ["L", b, e + a], ["C", b, e, b, e, b + a, e]] } var w = b.defined, y = b.isNumber, G = b.pick; return {
                arc: e, callout: function (b, e, n, h, a) {
                    var f = Math.min(a && a.r || 0, n, h), d = f + 6, k = a && a.anchorX; a = a && a.anchorY ||
                        0; var p = C(b, e, n, h, { r: f }); if (!y(k)) return p; b + k >= n ? a > e + d && a < e + h - d ? p.splice(3, 1, ["L", b + n, a - 6], ["L", b + n + 6, a], ["L", b + n, a + 6], ["L", b + n, e + h - f]) : p.splice(3, 1, ["L", b + n, h / 2], ["L", k, a], ["L", b + n, h / 2], ["L", b + n, e + h - f]) : 0 >= b + k ? a > e + d && a < e + h - d ? p.splice(7, 1, ["L", b, a + 6], ["L", b - 6, a], ["L", b, a - 6], ["L", b, e + f]) : p.splice(7, 1, ["L", b, h / 2], ["L", k, a], ["L", b, h / 2], ["L", b, e + f]) : a && a > h && k > b + d && k < b + n - d ? p.splice(5, 1, ["L", k + 6, e + h], ["L", k, e + h + 6], ["L", k - 6, e + h], ["L", b + f, e + h]) : a && 0 > a && k > b + d && k < b + n - d && p.splice(1, 1, ["L", k - 6, e], ["L", k, e - 6],
                            ["L", k + 6, e], ["L", n - f, e]); return p
                }, circle: function (b, r, n, h) { return e(b + n / 2, r + h / 2, n / 2, h / 2, { start: .5 * Math.PI, end: 2.5 * Math.PI, open: !1 }) }, diamond: function (b, e, n, h) { return [["M", b + n / 2, e], ["L", b + n, e + h / 2], ["L", b + n / 2, e + h], ["L", b, e + h / 2], ["Z"]] }, rect: z, roundedRect: C, square: z, triangle: function (b, e, n, h) { return [["M", b + n / 2, e], ["L", b + n, e + h], ["L", b, e + h], ["Z"]] }, "triangle-down": function (b, e, n, h) { return [["M", b, e], ["L", b + n, e], ["L", b + n / 2, e + h], ["Z"]] }
            }
        }); H(e, "Core/Renderer/SVG/TextBuilder.js", [e["Core/Renderer/HTML/AST.js"],
        e["Core/Globals.js"], e["Core/Utilities.js"]], function (b, e, z) {
            var I = e.doc, w = e.SVG_NS, y = e.win, G = z.attr, t = z.extend, r = z.fireEvent, n = z.isString, h = z.objectEach, a = z.pick; return function () {
                function f(a) { var d = a.styles; this.renderer = a.renderer; this.svgElement = a; this.width = a.textWidth; this.textLineHeight = d && d.lineHeight; this.textOutline = d && d.textOutline; this.ellipsis = !(!d || "ellipsis" !== d.textOverflow); this.noWrap = !(!d || "nowrap" !== d.whiteSpace); this.fontSize = d && d.fontSize } f.prototype.buildSVG = function () {
                    var d =
                        this.svgElement, f = d.element, p = d.renderer, h = a(d.textStr, "").toString(), A = -1 !== h.indexOf("<"), e = f.childNodes; p = this.width && !d.added && p.box; var E = /<br.*?>/g, q = [h, this.ellipsis, this.noWrap, this.textLineHeight, this.textOutline, this.fontSize, this.width].join(); if (q !== d.textCache) {
                            d.textCache = q; delete d.actualWidth; for (q = e.length; q--;)f.removeChild(e[q]); A || this.ellipsis || this.width || d.textPath || -1 !== h.indexOf(" ") && (!this.noWrap || E.test(h)) ? "" !== h && (p && p.appendChild(f), h = new b(h), this.modifyTree(h.nodes),
                                h.addToDOM(f), this.modifyDOM(), this.ellipsis && -1 !== (f.textContent || "").indexOf("\u2026") && d.attr("title", this.unescapeEntities(d.textStr || "", ["&lt;", "&gt;"])), p && p.removeChild(f)) : f.appendChild(I.createTextNode(this.unescapeEntities(h))); n(this.textOutline) && d.applyTextOutline && d.applyTextOutline(this.textOutline)
                        }
                }; f.prototype.modifyDOM = function () {
                    var a = this, f = this.svgElement, b = G(f.element, "x"); f.firstLineMetrics = void 0; for (var h; h = f.element.firstChild;)if (/^[\s\u200B]*$/.test(h.textContent || " ")) f.element.removeChild(h);
                    else break;[].forEach.call(f.element.querySelectorAll("tspan.highcharts-br"), function (d, c) { d.nextSibling && d.previousSibling && (0 === c && 1 === d.previousSibling.nodeType && (f.firstLineMetrics = f.renderer.fontMetrics(void 0, d.previousSibling)), G(d, { dy: a.getLineHeight(d.nextSibling), x: b })) }); var A = this.width || 0; if (A) {
                        var e = function (d, c) {
                            var k = d.textContent || "", m = k.replace(/([^\^])-/g, "$1- ").split(" "), u = !a.noWrap && (1 < m.length || 1 < f.element.childNodes.length), g = a.getLineHeight(c), F = 0, l = f.actualWidth; if (a.ellipsis) k &&
                                a.truncate(d, k, void 0, 0, Math.max(0, A - parseInt(a.fontSize || 12, 10)), function (c, a) { return c.substring(0, a) + "\u2026" }); else if (u) {
                                    k = []; for (u = []; c.firstChild && c.firstChild !== d;)u.push(c.firstChild), c.removeChild(c.firstChild); for (; m.length;)m.length && !a.noWrap && 0 < F && (k.push(d.textContent || ""), d.textContent = m.join(" ").replace(/- /g, "-")), a.truncate(d, void 0, m, 0 === F ? l || 0 : 0, A, function (c, a) { return m.slice(0, a).join(" ").replace(/- /g, "-") }), l = f.actualWidth, F++; u.forEach(function (a) { c.insertBefore(a, d) });
                                    k.forEach(function (a) { c.insertBefore(I.createTextNode(a), d); a = I.createElementNS(w, "tspan"); a.textContent = "\u200b"; G(a, { dy: g, x: b }); c.insertBefore(a, d) })
                                }
                        }, n = function (a) { [].slice.call(a.childNodes).forEach(function (c) { c.nodeType === y.Node.TEXT_NODE ? e(c, a) : (-1 !== c.className.baseVal.indexOf("highcharts-br") && (f.actualWidth = 0), n(c)) }) }; n(f.element)
                    }
                }; f.prototype.getLineHeight = function (a) {
                    var d; a = a.nodeType === y.Node.TEXT_NODE ? a.parentElement : a; this.renderer.styledMode || (d = a && /(px|em)$/.test(a.style.fontSize) ?
                        a.style.fontSize : this.fontSize || this.renderer.style.fontSize || 12); return this.textLineHeight ? parseInt(this.textLineHeight.toString(), 10) : this.renderer.fontMetrics(d, a || this.svgElement.element).h
                }; f.prototype.modifyTree = function (a) {
                    var d = this, f = function (b, k) {
                        var p = b.attributes; p = void 0 === p ? {} : p; var h = b.children, q = b.style; q = void 0 === q ? {} : q; var c = b.tagName, B = d.renderer.styledMode; if ("b" === c || "strong" === c) B ? p["class"] = "highcharts-strong" : q.fontWeight = "bold"; else if ("i" === c || "em" === c) B ? p["class"] = "highcharts-emphasized" :
                            q.fontStyle = "italic"; q && q.color && (q.fill = q.color); "br" === c ? (p["class"] = "highcharts-br", b.textContent = "\u200b", (k = a[k + 1]) && k.textContent && (k.textContent = k.textContent.replace(/^ +/gm, ""))) : "a" === c && h && h.some(function (c) { return "#text" === c.tagName }) && (b.children = [{ children: h, tagName: "tspan" }]); "#text" !== c && "a" !== c && (b.tagName = "tspan"); t(b, { attributes: p, style: q }); h && h.filter(function (c) { return "#text" !== c.tagName }).forEach(f)
                    }; a.forEach(f); r(this.svgElement, "afterModifyTree", { nodes: a })
                }; f.prototype.truncate =
                    function (a, f, b, h, A, e) {
                        var d = this.svgElement, k = d.renderer, c = d.rotation, B = [], m = b ? 1 : 0, u = (f || b || "").length, g = u, F, l = function (c, g) { g = g || c; var l = a.parentNode; if (l && "undefined" === typeof B[g]) if (l.getSubStringLength) try { B[g] = h + l.getSubStringLength(0, b ? g + 1 : g) } catch (S) { "" } else k.getSpanWidth && (a.textContent = e(f || b, c), B[g] = h + k.getSpanWidth(d, a)); return B[g] }; d.rotation = 0; var v = l(a.textContent.length); if (h + v > A) {
                            for (; m <= u;)g = Math.ceil((m + u) / 2), b && (F = e(b, g)), v = l(g, F && F.length - 1), m === u ? m = u + 1 : v > A ? u = g - 1 : m = g; 0 === u ?
                                a.textContent = "" : f && u === f.length - 1 || (a.textContent = F || e(f || b, g))
                        } b && b.splice(0, g); d.actualWidth = v; d.rotation = c
                    }; f.prototype.unescapeEntities = function (a, f) { h(this.renderer.escapes, function (d, b) { f && -1 !== f.indexOf(d) || (a = a.toString().replace(new RegExp(d, "g"), b)) }); return a }; return f
            }()
        }); H(e, "Core/Renderer/SVG/SVGRenderer.js", [e["Core/Renderer/HTML/AST.js"], e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Renderer/RendererRegistry.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Renderer/SVG/SVGLabel.js"],
        e["Core/Renderer/SVG/Symbols.js"], e["Core/Renderer/SVG/TextBuilder.js"], e["Core/Utilities.js"]], function (b, e, z, C, w, y, G, t, r) {
            var n = z.charts, h = z.deg2rad, a = z.doc, f = z.isFirefox, d = z.isMS, k = z.isWebKit, p = z.noop, D = z.SVG_NS, A = z.symbolSizes, x = z.win, E = r.addEvent, q = r.attr, c = r.createElement, B = r.css, m = r.defined, u = r.destroyObjectProperties, g = r.extend, F = r.isArray, l = r.isNumber, v = r.isObject, K = r.isString, J = r.merge, M = r.pick, S = r.pInt, I = r.uniqueKey, Z; z = function () {
                function p(c, a, g, l, m, d, f) {
                    this.width = this.url = this.style =
                        this.isSVG = this.imgCount = this.height = this.gradients = this.globalAnimation = this.defs = this.chartIndex = this.cacheKeys = this.cache = this.boxWrapper = this.box = this.alignedObjects = void 0; this.init(c, a, g, l, m, d, f)
                } p.prototype.init = function (c, g, l, m, d, v, b) {
                    var u = this.createElement("svg").attr({ version: "1.1", "class": "highcharts-root" }), k = u.element; b || u.css(this.getStyle(m)); c.appendChild(k); q(c, "dir", "ltr"); -1 === c.innerHTML.indexOf("xmlns") && q(k, "xmlns", this.SVG_NS); this.isSVG = !0; this.box = k; this.boxWrapper = u; this.alignedObjects =
                        []; this.url = this.getReferenceURL(); this.createElement("desc").add().element.appendChild(a.createTextNode("Created with Highcharts 10.3.2")); this.defs = this.createElement("defs").add(); this.allowHTML = v; this.forExport = d; this.styledMode = b; this.gradients = {}; this.cache = {}; this.cacheKeys = []; this.imgCount = 0; this.setSize(g, l, !1); var F; f && c.getBoundingClientRect && (g = function () { B(c, { left: 0, top: 0 }); F = c.getBoundingClientRect(); B(c, { left: Math.ceil(F.left) - F.left + "px", top: Math.ceil(F.top) - F.top + "px" }) }, g(), this.unSubPixelFix =
                            E(x, "resize", g))
                }; p.prototype.definition = function (c) { return (new b([c])).addToDOM(this.defs.element) }; p.prototype.getReferenceURL = function () {
                    if ((f || k) && a.getElementsByTagName("base").length) {
                        if (!m(Z)) {
                            var c = I(); c = (new b([{ tagName: "svg", attributes: { width: 8, height: 8 }, children: [{ tagName: "defs", children: [{ tagName: "clipPath", attributes: { id: c }, children: [{ tagName: "rect", attributes: { width: 4, height: 4 } }] }] }, { tagName: "rect", attributes: { id: "hitme", width: 8, height: 8, "clip-path": "url(#".concat(c, ")"), fill: "rgba(0,0,0,0.001)" } }] }])).addToDOM(a.body);
                            B(c, { position: "fixed", top: 0, left: 0, zIndex: 9E5 }); var g = a.elementFromPoint(6, 6); Z = "hitme" === (g && g.id); a.body.removeChild(c)
                        } if (Z) return x.location.href.split("#")[0].replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20")
                    } return ""
                }; p.prototype.getStyle = function (c) { return this.style = g({ fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif', fontSize: "12px" }, c) }; p.prototype.setStyle = function (c) { this.boxWrapper.css(this.getStyle(c)) }; p.prototype.isHidden = function () { return !this.boxWrapper.getBBox().width };
                p.prototype.destroy = function () { var c = this.defs; this.box = null; this.boxWrapper = this.boxWrapper.destroy(); u(this.gradients || {}); this.gradients = null; c && (this.defs = c.destroy()); this.unSubPixelFix && this.unSubPixelFix(); return this.alignedObjects = null }; p.prototype.createElement = function (c) { var a = new this.Element; a.init(this, c); return a }; p.prototype.getRadialAttr = function (c, a) { return { cx: c[0] - c[2] / 2 + (a.cx || 0) * c[2], cy: c[1] - c[2] / 2 + (a.cy || 0) * c[2], r: (a.r || 0) * c[2] } }; p.prototype.buildText = function (c) { (new t(c)).buildSVG() };
                p.prototype.getContrast = function (c) { c = e.parse(c).rgba.map(function (c) { c /= 255; return .03928 >= c ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4) }); c = .2126 * c[0] + .7152 * c[1] + .0722 * c[2]; return 1.05 / (c + .05) > (c + .05) / .05 ? "#FFFFFF" : "#000000" }; p.prototype.button = function (c, a, l, m, f, u, k, F, p, q) {
                    void 0 === f && (f = {}); var h = this.label(c, a, l, p, void 0, void 0, q, void 0, "button"), B = this.styledMode; c = f.states || {}; var L = 0; f = J(f); delete f.states; var Q = J({ color: "#333333", cursor: "pointer", fontWeight: "normal" }, f.style); delete f.style; var A =
                        b.filterUserAttributes(f); h.attr(J({ padding: 8, r: 2 }, A)); if (!B) { A = J({ fill: "#f7f7f7", stroke: "#cccccc", "stroke-width": 1 }, A); u = J(A, { fill: "#e6e6e6" }, b.filterUserAttributes(u || c.hover || {})); var e = u.style; delete u.style; k = J(A, { fill: "#e6ebf5", style: { color: "#000000", fontWeight: "bold" } }, b.filterUserAttributes(k || c.select || {})); var D = k.style; delete k.style; F = J(A, { style: { color: "#cccccc" } }, b.filterUserAttributes(F || c.disabled || {})); var x = F.style; delete F.style } E(h.element, d ? "mouseover" : "mouseenter", function () {
                            3 !==
                            L && h.setState(1)
                        }); E(h.element, d ? "mouseout" : "mouseleave", function () { 3 !== L && h.setState(L) }); h.setState = function (c) { 1 !== c && (h.state = L = c); h.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][c || 0]); B || (h.attr([A, u, k, F][c || 0]), c = [Q, e, D, x][c || 0], v(c) && h.css(c)) }; B || (h.attr(A).css(g({ cursor: "default" }, Q)), q && h.text.css({ pointerEvents: "none" })); return h.on("touchstart", function (c) { return c.stopPropagation() }).on("click",
                            function (c) { 3 !== L && m.call(h, c) })
                }; p.prototype.crispLine = function (c, a, g) { void 0 === g && (g = "round"); var l = c[0], d = c[1]; m(l[1]) && l[1] === d[1] && (l[1] = d[1] = Math[g](l[1]) - a % 2 / 2); m(l[2]) && l[2] === d[2] && (l[2] = d[2] = Math[g](l[2]) + a % 2 / 2); return c }; p.prototype.path = function (c) { var a = this.styledMode ? {} : { fill: "none" }; F(c) ? a.d = c : v(c) && g(a, c); return this.createElement("path").attr(a) }; p.prototype.circle = function (c, a, g) {
                    c = v(c) ? c : "undefined" === typeof c ? {} : { x: c, y: a, r: g }; a = this.createElement("circle"); a.xSetter = a.ySetter =
                        function (c, a, g) { g.setAttribute("c" + a, c) }; return a.attr(c)
                }; p.prototype.arc = function (c, a, g, l, m, d) { v(c) ? (l = c, a = l.y, g = l.r, c = l.x) : l = { innerR: l, start: m, end: d }; c = this.symbol("arc", c, a, g, g, l); c.r = g; return c }; p.prototype.rect = function (c, a, g, l, m, d) {
                    m = v(c) ? c.r : m; var f = this.createElement("rect"); c = v(c) ? c : "undefined" === typeof c ? {} : { x: c, y: a, width: Math.max(g, 0), height: Math.max(l, 0) }; this.styledMode || ("undefined" !== typeof d && (c["stroke-width"] = d, c = f.crisp(c)), c.fill = "none"); m && (c.r = m); f.rSetter = function (c, a, g) {
                        f.r =
                        c; q(g, { rx: c, ry: c })
                    }; f.rGetter = function () { return f.r || 0 }; return f.attr(c)
                }; p.prototype.setSize = function (c, a, g) { this.width = c; this.height = a; this.boxWrapper.animate({ width: c, height: a }, { step: function () { this.attr({ viewBox: "0 0 " + this.attr("width") + " " + this.attr("height") }) }, duration: M(g, !0) ? void 0 : 0 }); this.alignElements() }; p.prototype.g = function (c) { var a = this.createElement("g"); return c ? a.attr({ "class": "highcharts-" + c }) : a }; p.prototype.image = function (c, a, g, m, d, f) {
                    var v = { preserveAspectRatio: "none" }, b = function (c,
                        a) { c.setAttributeNS ? c.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : c.setAttribute("hc-svg-href", a) }; l(a) && (v.x = a); l(g) && (v.y = g); l(m) && (v.width = m); l(d) && (v.height = d); var u = this.createElement("image").attr(v); a = function (a) { b(u.element, c); f.call(u, a) }; f ? (b(u.element, "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), g = new x.Image, E(g, "load", a), g.src = c, g.complete && a({})) : b(u.element, c); return u
                }; p.prototype.symbol = function (l, d, f, v, b, u) {
                    var k = this, F = /^url\((.*?)\)$/,
                    p = F.test(l), h = !p && (this.symbols[l] ? l : "circle"), L = h && this.symbols[h], Q; if (L) { "number" === typeof d && (Q = L.call(this.symbols, Math.round(d || 0), Math.round(f || 0), v || 0, b || 0, u)); var e = this.path(Q); k.styledMode || e.attr("fill", "none"); g(e, { symbolName: h || void 0, x: d, y: f, width: v, height: b }); u && g(e, u) } else if (p) {
                        var D = l.match(F)[1]; var x = e = this.image(D); x.imgwidth = M(A[D] && A[D].width, u && u.width); x.imgheight = M(A[D] && A[D].height, u && u.height); var K = function (c) { return c.attr({ width: c.width, height: c.height }) };["width",
                            "height"].forEach(function (c) { x[c + "Setter"] = function (c, a) { this[a] = c; c = this.alignByTranslate; var g = this.element, l = this.width, d = this.height, f = this.imgwidth, v = this.imgheight, b = this["img" + a]; if (m(b)) { var k = 1; u && "within" === u.backgroundSize && l && d ? (k = Math.min(l / f, d / v), b = Math.round(b * k), q(g, { width: Math.round(f * k), height: Math.round(v * k) })) : g && g.setAttribute(a, b); c || this.translate(((l || 0) - b * k) / 2, ((d || 0) - b * k) / 2) } } }); m(d) && x.attr({ x: d, y: f }); x.isImg = !0; m(x.imgwidth) && m(x.imgheight) ? K(x) : (x.attr({ width: 0, height: 0 }),
                                c("img", { onload: function () { var c = n[k.chartIndex]; 0 === this.width && (B(this, { position: "absolute", top: "-999em" }), a.body.appendChild(this)); A[D] = { width: this.width, height: this.height }; x.imgwidth = this.width; x.imgheight = this.height; x.element && K(x); this.parentNode && this.parentNode.removeChild(this); k.imgCount--; if (!k.imgCount && c && !c.hasLoaded) c.onload() }, src: D }), this.imgCount++)
                    } return e
                }; p.prototype.clipRect = function (c, a, g, l) {
                    var m = I() + "-", d = this.createElement("clipPath").attr({ id: m }).add(this.defs); c = this.rect(c,
                        a, g, l, 0).add(d); c.id = m; c.clipPath = d; c.count = 0; return c
                }; p.prototype.text = function (c, a, g, l) { var d = {}; if (l && (this.allowHTML || !this.forExport)) return this.html(c, a, g); d.x = Math.round(a || 0); g && (d.y = Math.round(g)); m(c) && (d.text = c); c = this.createElement("text").attr(d); if (!l || this.forExport && !this.allowHTML) c.xSetter = function (c, a, g) { for (var l = g.getElementsByTagName("tspan"), m = g.getAttribute(a), d = 0, f; d < l.length; d++)f = l[d], f.getAttribute(a) === m && f.setAttribute(a, c); g.setAttribute(a, c) }; return c }; p.prototype.fontMetrics =
                    function (c, a) { c = !this.styledMode && /px/.test(c) || !x.getComputedStyle ? c || a && a.style && a.style.fontSize || this.style && this.style.fontSize : a && w.prototype.getStyle.call(a, "font-size"); c = /px/.test(c) ? S(c) : 12; a = 24 > c ? c + 3 : Math.round(1.2 * c); return { h: a, b: Math.round(.8 * a), f: c } }; p.prototype.rotCorr = function (c, a, g) { var l = c; a && g && (l = Math.max(l * Math.cos(a * h), 4)); return { x: -c / 3 * Math.sin(a * h), y: l } }; p.prototype.pathToSegments = function (c) {
                        for (var a = [], g = [], m = { A: 8, C: 7, H: 2, L: 3, M: 3, Q: 5, S: 5, T: 3, V: 2 }, d = 0; d < c.length; d++)K(g[0]) &&
                            l(c[d]) && g.length === m[g[0].toUpperCase()] && c.splice(d, 0, g[0].replace("M", "L").replace("m", "l")), "string" === typeof c[d] && (g.length && a.push(g.slice(0)), g.length = 0), g.push(c[d]); a.push(g.slice(0)); return a
                    }; p.prototype.label = function (c, a, g, l, m, d, f, v, b) { return new y(this, c, a, g, l, m, d, f, v, b) }; p.prototype.alignElements = function () { this.alignedObjects.forEach(function (c) { return c.align() }) }; return p
            }(); g(z.prototype, {
                Element: w, SVG_NS: D, escapes: { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }, symbols: G,
                draw: p
            }); C.registerRendererType("svg", z, !0); ""; return z
        }); H(e, "Core/Renderer/HTML/HTMLElement.js", [e["Core/Globals.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"]], function (b, e, z) {
            var I = this && this.__extends || function () {
                var a = function (d, f) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, d) { a.__proto__ = d } || function (a, d) { for (var f in d) d.hasOwnProperty(f) && (a[f] = d[f]) }; return a(d, f) }; return function (d, f) {
                    function b() { this.constructor = d } a(d, f); d.prototype = null === f ?
                        Object.create(f) : (b.prototype = f.prototype, new b)
                }
            }(), w = b.isFirefox, y = b.isMS, G = b.isWebKit, t = b.win, r = z.css, n = z.defined, h = z.extend, a = z.pick, f = z.pInt; return function (d) {
                function b() { return null !== d && d.apply(this, arguments) || this } I(b, d); b.compose = function (a) { if (-1 === b.composedClasses.indexOf(a)) { b.composedClasses.push(a); var d = b.prototype, f = a.prototype; f.getSpanCorrection = d.getSpanCorrection; f.htmlCss = d.htmlCss; f.htmlGetBBox = d.htmlGetBBox; f.htmlUpdateTransform = d.htmlUpdateTransform; f.setSpanRotation = d.setSpanRotation } return a };
                b.prototype.getSpanCorrection = function (a, d, f) { this.xCorr = -a * f; this.yCorr = -d }; b.prototype.htmlCss = function (d) { var f = "SPAN" === this.element.tagName && d && "width" in d, b = a(f && d.width, void 0); if (f) { delete d.width; this.textWidth = b; var k = !0 } d && "ellipsis" === d.textOverflow && (d.whiteSpace = "nowrap", d.overflow = "hidden"); this.styles = h(this.styles, d); r(this.element, d); k && this.htmlUpdateTransform(); return this }; b.prototype.htmlGetBBox = function () {
                    var a = this.element; return {
                        x: a.offsetLeft, y: a.offsetTop, width: a.offsetWidth,
                        height: a.offsetHeight
                    }
                }; b.prototype.htmlUpdateTransform = function () {
                    if (this.added) {
                        var a = this.renderer, d = this.element, b = this.translateX || 0, k = this.translateY || 0, h = this.x || 0, q = this.y || 0, c = this.textAlign || "left", B = { left: 0, center: .5, right: 1 }[c], m = this.styles; m = m && m.whiteSpace; r(d, { marginLeft: b, marginTop: k }); !a.styledMode && this.shadows && this.shadows.forEach(function (c) { r(c, { marginLeft: b + 1, marginTop: k + 1 }) }); this.inverted && [].forEach.call(d.childNodes, function (c) { a.invertChild(c, d) }); if ("SPAN" === d.tagName) {
                            var u =
                                this.rotation, g = this.textWidth && f(this.textWidth), F = [u, c, d.innerHTML, this.textWidth, this.textAlign].join(), l = void 0; l = !1; if (g !== this.oldTextWidth) { if (this.textPxLength) var v = this.textPxLength; else r(d, { width: "", whiteSpace: m || "nowrap" }), v = d.offsetWidth; (g > this.oldTextWidth || v > g) && (/[ \-]/.test(d.textContent || d.innerText) || "ellipsis" === d.style.textOverflow) && (r(d, { width: v > g || u ? g + "px" : "auto", display: "block", whiteSpace: m || "normal" }), this.oldTextWidth = g, l = !0) } this.hasBoxWidthChanged = l; F !== this.cTT && (l =
                                    a.fontMetrics(d.style.fontSize, d).b, !n(u) || u === (this.oldRotation || 0) && c === this.oldAlign || this.setSpanRotation(u, B, l), this.getSpanCorrection(!n(u) && this.textPxLength || d.offsetWidth, l, B, u, c)); r(d, { left: h + (this.xCorr || 0) + "px", top: q + (this.yCorr || 0) + "px" }); this.cTT = F; this.oldRotation = u; this.oldAlign = c
                        }
                    } else this.alignOnAdd = !0
                }; b.prototype.setSpanRotation = function (a, d, f) {
                    var b = {}, k = y && !/Edge/.test(t.navigator.userAgent) ? "-ms-transform" : G ? "-webkit-transform" : w ? "MozTransform" : t.opera ? "-o-transform" : void 0;
                    k && (b[k] = b.transform = "rotate(" + a + "deg)", b[k + (w ? "Origin" : "-origin")] = b.transformOrigin = 100 * d + "% " + f + "px", r(this.element, b))
                }; b.composedClasses = []; return b
            }(e)
        }); H(e, "Core/Renderer/HTML/HTMLRenderer.js", [e["Core/Renderer/HTML/AST.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Utilities.js"]], function (b, e, z, C) {
            var I = this && this.__extends || function () {
                var b = function (h, a) {
                    b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, d) { a.__proto__ = d } || function (a,
                        d) { for (var f in d) d.hasOwnProperty(f) && (a[f] = d[f]) }; return b(h, a)
                }; return function (h, a) { function f() { this.constructor = h } b(h, a); h.prototype = null === a ? Object.create(a) : (f.prototype = a.prototype, new f) }
            }(), y = C.attr, G = C.createElement, t = C.extend, r = C.pick; return function (n) {
                function h() { return null !== n && n.apply(this, arguments) || this } I(h, n); h.compose = function (a) { -1 === h.composedClasses.indexOf(a) && (h.composedClasses.push(a), a.prototype.html = h.prototype.html); return a }; h.prototype.html = function (a, f, d) {
                    var k =
                        this.createElement("span"), h = k.element, n = k.renderer, A = n.isSVG, x = function (a, d) { ["opacity", "visibility"].forEach(function (c) { a[c + "Setter"] = function (f, m, b) { var g = a.div ? a.div.style : d; e.prototype[c + "Setter"].call(this, f, m, b); g && (g[m] = f) } }); a.addedSetters = !0 }; k.textSetter = function (a) { a !== this.textStr && (delete this.bBox, delete this.oldTextWidth, b.setElementHTML(this.element, r(a, "")), this.textStr = a, k.doTransform = !0) }; A && x(k, k.element.style); k.xSetter = k.ySetter = k.alignSetter = k.rotationSetter = function (a, d) {
                            "align" ===
                            d ? k.alignValue = k.textAlign = a : k[d] = a; k.doTransform = !0
                        }; k.afterSetters = function () { this.doTransform && (this.htmlUpdateTransform(), this.doTransform = !1) }; k.attr({ text: a, x: Math.round(f), y: Math.round(d) }).css({ position: "absolute" }); n.styledMode || k.css({ fontFamily: this.style.fontFamily, fontSize: this.style.fontSize }); h.style.whiteSpace = "nowrap"; k.css = k.htmlCss; A && (k.add = function (a) {
                            var d = n.box.parentNode, c = []; if (this.parentGroup = a) {
                                var f = a.div; if (!f) {
                                    for (; a;)c.push(a), a = a.parentGroup; c.reverse().forEach(function (a) {
                                        function m(c,
                                            g) { a[g] = c; "translateX" === g ? l.left = c + "px" : l.top = c + "px"; a.doTransform = !0 } var g = y(a.element, "class"), b = a.styles || {}; f = a.div = a.div || G("div", g ? { className: g } : void 0, { position: "absolute", left: (a.translateX || 0) + "px", top: (a.translateY || 0) + "px", display: a.display, opacity: a.opacity, cursor: b.cursor, pointerEvents: b.pointerEvents, visibility: a.visibility }, f || d); var l = f.style; t(a, {
                                                classSetter: function (c) { return function (a) { this.element.setAttribute("class", a); c.className = a } }(f), on: function () {
                                                    c[0].div && k.on.apply({
                                                        element: c[0].div,
                                                        onEvents: a.onEvents
                                                    }, arguments); return a
                                                }, translateXSetter: m, translateYSetter: m
                                            }); a.addedSetters || x(a)
                                    })
                                }
                            } else f = d; f.appendChild(h); k.added = !0; k.alignOnAdd && k.htmlUpdateTransform(); return k
                        }); return k
                }; h.composedClasses = []; return h
            }(z)
        }); H(e, "Core/Axis/AxisDefaults.js", [], function () {
            var b; (function (b) {
                b.defaultXAxisOptions = {
                    alignTicks: !0, allowDecimals: void 0, panningEnabled: !0, zIndex: 2, zoomEnabled: !0, dateTimeLabelFormats: {
                        millisecond: { main: "%H:%M:%S.%L", range: !1 }, second: { main: "%H:%M:%S", range: !1 },
                        minute: { main: "%H:%M", range: !1 }, hour: { main: "%H:%M", range: !1 }, day: { main: "%e. %b" }, week: { main: "%e. %b" }, month: { main: "%b '%y" }, year: { main: "%Y" }
                    }, endOnTick: !1, gridLineDashStyle: "Solid", gridZIndex: 1, labels: { autoRotation: void 0, autoRotationLimit: 80, distance: void 0, enabled: !0, indentation: 10, overflow: "justify", padding: 5, reserveSpace: void 0, rotation: void 0, staggerLines: 0, step: 0, useHTML: !1, x: 0, zIndex: 7, style: { color: "#666666", cursor: "default", fontSize: "11px" } }, maxPadding: .01, minorGridLineDashStyle: "Solid", minorTickLength: 2,
                    minorTickPosition: "outside", minPadding: .01, offset: void 0, opposite: !1, reversed: void 0, reversedStacks: !1, showEmpty: !0, showFirstLabel: !0, showLastLabel: !0, startOfWeek: 1, startOnTick: !1, tickLength: 10, tickPixelInterval: 100, tickmarkPlacement: "between", tickPosition: "outside", title: { align: "middle", rotation: 0, useHTML: !1, x: 0, y: 0, style: { color: "#666666" } }, type: "linear", uniqueNames: !0, visible: !0, minorGridLineColor: "#f2f2f2", minorGridLineWidth: 1, minorTickColor: "#999999", lineColor: "#ccd6eb", lineWidth: 1, gridLineColor: "#e6e6e6",
                    gridLineWidth: void 0, tickColor: "#ccd6eb"
                }; b.defaultYAxisOptions = { reversedStacks: !0, endOnTick: !0, maxPadding: .05, minPadding: .05, tickPixelInterval: 72, showLastLabel: !0, labels: { x: -8 }, startOnTick: !0, title: { rotation: 270, text: "Values" }, stackLabels: { animation: {}, allowOverlap: !1, enabled: !1, crop: !0, overflow: "justify", formatter: function () { var b = this.axis.chart.numberFormatter; return b(this.total || 0, -1) }, style: { color: "#000000", fontSize: "11px", fontWeight: "bold", textOutline: "1px contrast" } }, gridLineWidth: 1, lineWidth: 0 };
                b.defaultLeftAxisOptions = { labels: { x: -15 }, title: { rotation: 270 } }; b.defaultRightAxisOptions = { labels: { x: 15 }, title: { rotation: 90 } }; b.defaultBottomAxisOptions = { labels: { autoRotation: [-45], x: 0 }, margin: 15, title: { rotation: 0 } }; b.defaultTopAxisOptions = { labels: { autoRotation: [-45], x: 0 }, margin: 15, title: { rotation: 0 } }
            })(b || (b = {})); return b
        }); H(e, "Core/Foundation.js", [e["Core/Utilities.js"]], function (b) {
            var e = b.addEvent, z = b.isFunction, C = b.objectEach, w = b.removeEvent, y; (function (b) {
                b.registerEventOptions = function (b, r) {
                    b.eventOptions =
                    b.eventOptions || {}; C(r.events, function (n, h) { b.eventOptions[h] !== n && (b.eventOptions[h] && (w(b, h, b.eventOptions[h]), delete b.eventOptions[h]), z(n) && (b.eventOptions[h] = n, e(b, h, n))) })
                }
            })(y || (y = {})); return y
        }); H(e, "Core/Axis/Tick.js", [e["Core/FormatUtilities.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function (b, e, z) {
            var I = e.deg2rad, w = z.clamp, y = z.correctFloat, G = z.defined, t = z.destroyObjectProperties, r = z.extend, n = z.fireEvent, h = z.isNumber, a = z.merge, f = z.objectEach, d = z.pick; e = function () {
                function k(a, d,
                    f, b, k) { this.isNewLabel = this.isNew = !0; this.axis = a; this.pos = d; this.type = f || ""; this.parameters = k || {}; this.tickmarkOffset = this.parameters.tickmarkOffset; this.options = this.parameters.options; n(this, "init"); f || b || this.addLabel() } k.prototype.addLabel = function () {
                        var a = this, f = a.axis, k = f.options, e = f.chart, E = f.categories, q = f.logarithmic, c = f.names, B = a.pos, m = d(a.options && a.options.labels, k.labels), u = f.tickPositions, g = B === u[0], F = B === u[u.length - 1], l = (!m.step || 1 === m.step) && 1 === f.tickInterval; u = u.info; var v = a.label,
                            K; E = this.parameters.category || (E ? d(E[B], c[B], B) : B); q && h(E) && (E = y(q.lin2log(E))); if (f.dateTime) if (u) { var J = e.time.resolveDTLFormat(k.dateTimeLabelFormats[!k.grid && u.higherRanks[B] || u.unitName]); var M = J.main } else h(E) && (M = f.dateTime.getXDateFormat(E, k.dateTimeLabelFormats || {})); a.isFirst = g; a.isLast = F; var S = { axis: f, chart: e, dateTimeLabelFormat: M, isFirst: g, isLast: F, pos: B, tick: a, tickPositionInfo: u, value: E }; n(this, "labelFormat", S); var t = function (c) {
                                return m.formatter ? m.formatter.call(c, c) : m.format ? (c.text =
                                    f.defaultLabelFormatter.call(c, c), b.format(m.format, c, e)) : f.defaultLabelFormatter.call(c, c)
                            }; k = t.call(S, S); var z = J && J.list; a.shortenLabel = z ? function () { for (K = 0; K < z.length; K++)if (r(S, { dateTimeLabelFormat: z[K] }), v.attr({ text: t.call(S, S) }), v.getBBox().width < f.getSlotWidth(a) - 2 * m.padding) return; v.attr({ text: "" }) } : void 0; l && f._addedPlotLB && a.moveLabel(k, m); G(v) || a.movedLabel ? v && v.textStr !== k && !l && (!v.textWidth || m.style.width || v.styles.width || v.css({ width: null }), v.attr({ text: k }), v.textPxLength = v.getBBox().width) :
                                (a.label = v = a.createLabel({ x: 0, y: 0 }, k, m), a.rotation = 0)
                    }; k.prototype.createLabel = function (d, f, b) { var k = this.axis, h = k.chart; if (d = G(f) && b.enabled ? h.renderer.text(f, d.x, d.y, b.useHTML).add(k.labelGroup) : null) h.styledMode || d.css(a(b.style)), d.textPxLength = d.getBBox().width; return d }; k.prototype.destroy = function () { t(this, this.axis) }; k.prototype.getPosition = function (a, d, f, b) {
                        var k = this.axis, h = k.chart, c = b && h.oldChartHeight || h.chartHeight; a = {
                            x: a ? y(k.translate(d + f, void 0, void 0, b) + k.transB) : k.left + k.offset + (k.opposite ?
                                (b && h.oldChartWidth || h.chartWidth) - k.right - k.left : 0), y: a ? c - k.bottom + k.offset - (k.opposite ? k.height : 0) : y(c - k.translate(d + f, void 0, void 0, b) - k.transB)
                        }; a.y = w(a.y, -1E5, 1E5); n(this, "afterGetPosition", { pos: a }); return a
                    }; k.prototype.getLabelPosition = function (a, d, f, b, k, h, c, B) {
                        var m = this.axis, u = m.transA, g = m.isLinked && m.linkedParent ? m.linkedParent.reversed : m.reversed, F = m.staggerLines, l = m.tickRotCorr || { x: 0, y: 0 }, v = b || m.reserveSpaceDefault ? 0 : -m.labelOffset * ("center" === m.labelAlign ? .5 : 1), q = {}; f = 0 === m.side ? f.rotation ?
                            -8 : -f.getBBox().height : 2 === m.side ? l.y + 8 : Math.cos(f.rotation * I) * (l.y - f.getBBox(!1, 0).height / 2); G(k.y) && (f = 0 === m.side && m.horiz ? k.y + f : k.y); a = a + k.x + v + l.x - (h && b ? h * u * (g ? -1 : 1) : 0); d = d + f - (h && !b ? h * u * (g ? 1 : -1) : 0); F && (b = c / (B || 1) % F, m.opposite && (b = F - b - 1), d += m.labelOffset / F * b); q.x = a; q.y = Math.round(d); n(this, "afterGetLabelPosition", { pos: q, tickmarkOffset: h, index: c }); return q
                    }; k.prototype.getLabelSize = function () { return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0 }; k.prototype.getMarkPath = function (a,
                        d, f, b, k, h) { return h.crispLine([["M", a, d], ["L", a + (k ? 0 : -f), d + (k ? f : 0)]], b) }; k.prototype.handleOverflow = function (a) {
                            var f = this.axis, b = f.options.labels, k = a.x, h = f.chart.chartWidth, q = f.chart.spacing, c = d(f.labelLeft, Math.min(f.pos, q[3])); q = d(f.labelRight, Math.max(f.isRadial ? 0 : f.pos + f.len, h - q[1])); var B = this.label, m = this.rotation, u = { left: 0, center: .5, right: 1 }[f.labelAlign || B.attr("align")], g = B.getBBox().width, F = f.getSlotWidth(this), l = {}, v = F, p = 1, e; if (m || "justify" !== b.overflow) 0 > m && k - u * g < c ? e = Math.round(k / Math.cos(m *
                                I) - c) : 0 < m && k + u * g > q && (e = Math.round((h - k) / Math.cos(m * I))); else if (h = k + (1 - u) * g, k - u * g < c ? v = a.x + v * (1 - u) - c : h > q && (v = q - a.x + v * u, p = -1), v = Math.min(F, v), v < F && "center" === f.labelAlign && (a.x += p * (F - v - u * (F - Math.min(g, v)))), g > v || f.autoRotation && (B.styles || {}).width) e = v; e && (this.shortenLabel ? this.shortenLabel() : (l.width = Math.floor(e) + "px", (b.style || {}).textOverflow || (l.textOverflow = "ellipsis"), B.css(l)))
                        }; k.prototype.moveLabel = function (a, d) {
                            var b = this, k = b.label, h = b.axis, q = h.reversed, c = !1; k && k.textStr === a ? (b.movedLabel =
                                k, c = !0, delete b.label) : f(h.ticks, function (d) { c || d.isNew || d === b || !d.label || d.label.textStr !== a || (b.movedLabel = d.label, c = !0, d.labelPos = b.movedLabel.xy, delete d.label) }); if (!c && (b.labelPos || k)) { var B = b.labelPos || k.xy; k = h.horiz ? q ? 0 : h.width + h.left : B.x; h = h.horiz ? B.y : q ? h.width + h.left : 0; b.movedLabel = b.createLabel({ x: k, y: h }, a, d); b.movedLabel && b.movedLabel.attr({ opacity: 0 }) }
                        }; k.prototype.render = function (a, f, b) {
                            var k = this.axis, h = k.horiz, q = this.pos, c = d(this.tickmarkOffset, k.tickmarkOffset); q = this.getPosition(h,
                                q, c, f); c = q.x; var B = q.y; k = h && c === k.pos + k.len || !h && B === k.pos ? -1 : 1; h = d(b, this.label && this.label.newOpacity, 1); b = d(b, 1); this.isActive = !0; this.renderGridLine(f, b, k); this.renderMark(q, b, k); this.renderLabel(q, f, h, a); this.isNew = !1; n(this, "afterRender")
                        }; k.prototype.renderGridLine = function (a, f, b) {
                            var k = this.axis, h = k.options, q = {}, c = this.pos, B = this.type, m = d(this.tickmarkOffset, k.tickmarkOffset), u = k.chart.renderer, g = this.gridLine, F = h.gridLineWidth, l = h.gridLineColor, v = h.gridLineDashStyle; "minor" === this.type &&
                                (F = h.minorGridLineWidth, l = h.minorGridLineColor, v = h.minorGridLineDashStyle); g || (k.chart.styledMode || (q.stroke = l, q["stroke-width"] = F || 0, q.dashstyle = v), B || (q.zIndex = 1), a && (f = 0), this.gridLine = g = u.path().attr(q).addClass("highcharts-" + (B ? B + "-" : "") + "grid-line").add(k.gridGroup)); if (g && (b = k.getPlotLinePath({ value: c + m, lineWidth: g.strokeWidth() * b, force: "pass", old: a }))) g[a || this.isNew ? "attr" : "animate"]({ d: b, opacity: f })
                        }; k.prototype.renderMark = function (a, f, b) {
                            var k = this.axis, h = k.options, q = k.chart.renderer, c =
                                this.type, B = k.tickSize(c ? c + "Tick" : "tick"), m = a.x; a = a.y; var u = d(h["minor" !== c ? "tickWidth" : "minorTickWidth"], !c && k.isXAxis ? 1 : 0); h = h["minor" !== c ? "tickColor" : "minorTickColor"]; var g = this.mark, F = !g; B && (k.opposite && (B[0] = -B[0]), g || (this.mark = g = q.path().addClass("highcharts-" + (c ? c + "-" : "") + "tick").add(k.axisGroup), k.chart.styledMode || g.attr({ stroke: h, "stroke-width": u })), g[F ? "attr" : "animate"]({ d: this.getMarkPath(m, a, B[0], g.strokeWidth() * b, k.horiz, q), opacity: f }))
                        }; k.prototype.renderLabel = function (a, f, b, k) {
                            var p =
                                this.axis, q = p.horiz, c = p.options, B = this.label, m = c.labels, u = m.step; p = d(this.tickmarkOffset, p.tickmarkOffset); var g = a.x; a = a.y; var F = !0; B && h(g) && (B.xy = a = this.getLabelPosition(g, a, B, q, m, p, k, u), this.isFirst && !this.isLast && !c.showFirstLabel || this.isLast && !this.isFirst && !c.showLastLabel ? F = !1 : !q || m.step || m.rotation || f || 0 === b || this.handleOverflow(a), u && k % u && (F = !1), F && h(a.y) ? (a.opacity = b, B[this.isNewLabel ? "attr" : "animate"](a).show(!0), this.isNewLabel = !1) : (B.hide(), this.isNewLabel = !0))
                        }; k.prototype.replaceMovedLabel =
                            function () { var a = this.label, d = this.axis, f = d.reversed; if (a && !this.isNew) { var b = d.horiz ? f ? d.left : d.width + d.left : a.xy.x; f = d.horiz ? a.xy.y : f ? d.width + d.top : d.top; a.animate({ x: b, y: f, opacity: 0 }, void 0, a.destroy); delete this.label } d.isDirty = !0; this.label = this.movedLabel; delete this.movedLabel }; return k
            }(); ""; return e
        }); H(e, "Core/Axis/Axis.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Axis/AxisDefaults.js"], e["Core/Color/Color.js"], e["Core/Defaults.js"], e["Core/Foundation.js"], e["Core/Globals.js"],
        e["Core/Axis/Tick.js"], e["Core/Utilities.js"]], function (b, e, z, C, w, y, G, t) {
            var r = b.animObject, n = C.defaultOptions, h = w.registerEventOptions, a = y.deg2rad, f = t.arrayMax, d = t.arrayMin, k = t.clamp, p = t.correctFloat, D = t.defined, A = t.destroyObjectProperties, x = t.erase, E = t.error, q = t.extend, c = t.fireEvent, B = t.isArray, m = t.isNumber, u = t.isString, g = t.merge, F = t.normalizeTickInterval, l = t.objectEach, v = t.pick, K = t.relativeLength, J = t.removeEvent, M = t.splat, S = t.syncTimeout, I = function (c, a) {
                return F(a, void 0, void 0, v(c.options.allowDecimals,
                    .5 > a || void 0 !== c.tickAmount), !!c.tickAmount)
            }; b = function () {
                function b(c, a) {
                    this.zoomEnabled = this.width = this.visible = this.userOptions = this.translationSlope = this.transB = this.transA = this.top = this.ticks = this.tickRotCorr = this.tickPositions = this.tickmarkOffset = this.tickInterval = this.tickAmount = this.side = this.series = this.right = this.positiveValuesOnly = this.pos = this.pointRangePadding = this.pointRange = this.plotLinesAndBandsGroups = this.plotLinesAndBands = this.paddedTicks = this.overlap = this.options = this.offset =
                        this.names = this.minPixelPadding = this.minorTicks = this.minorTickInterval = this.min = this.maxLabelLength = this.max = this.len = this.left = this.labelFormatter = this.labelEdge = this.isLinked = this.height = this.hasVisibleSeries = this.hasNames = this.eventOptions = this.coll = this.closestPointRange = this.chart = this.bottom = this.alternateBands = void 0; this.init(c, a)
                } b.prototype.init = function (a, g) {
                    var d = g.isX; this.chart = a; this.horiz = a.inverted && !this.isZAxis ? !d : d; this.isXAxis = d; this.coll = this.coll || (d ? "xAxis" : "yAxis"); c(this,
                        "init", { userOptions: g }); this.opposite = v(g.opposite, this.opposite); this.side = v(g.side, this.side, this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3); this.setOptions(g); var l = this.options, f = l.labels, b = l.type; this.userOptions = g; this.minPixelPadding = 0; this.reversed = v(l.reversed, this.reversed); this.visible = l.visible; this.zoomEnabled = l.zoomEnabled; this.hasNames = "category" === b || !0 === l.categories; this.categories = l.categories || (this.hasNames ? [] : void 0); this.names || (this.names = [], this.names.keys = {}); this.plotLinesAndBandsGroups =
                            {}; this.positiveValuesOnly = !!this.logarithmic; this.isLinked = D(l.linkedTo); this.ticks = {}; this.labelEdge = []; this.minorTicks = {}; this.plotLinesAndBands = []; this.alternateBands = {}; this.len = 0; this.minRange = this.userMinRange = l.minRange || l.maxZoom; this.range = l.range; this.offset = l.offset || 0; this.min = this.max = null; g = v(l.crosshair, M(a.options.tooltip.crosshairs)[d ? 0 : 1]); this.crosshair = !0 === g ? {} : g; -1 === a.axes.indexOf(this) && (d ? a.axes.splice(a.xAxis.length, 0, this) : a.axes.push(this), a[this.coll].push(this)); this.series =
                                this.series || []; a.inverted && !this.isZAxis && d && "undefined" === typeof this.reversed && (this.reversed = !0); this.labelRotation = m(f.rotation) ? f.rotation : void 0; h(this, l); c(this, "afterInit")
                }; b.prototype.setOptions = function (a) { this.options = g(e.defaultXAxisOptions, "yAxis" === this.coll && e.defaultYAxisOptions, [e.defaultTopAxisOptions, e.defaultRightAxisOptions, e.defaultBottomAxisOptions, e.defaultLeftAxisOptions][this.side], g(n[this.coll], a)); c(this, "afterSetOptions", { userOptions: a }) }; b.prototype.defaultLabelFormatter =
                    function (c) {
                        var a = this.axis; c = this.chart.numberFormatter; var g = m(this.value) ? this.value : NaN, l = a.chart.time, d = this.dateTimeLabelFormat, f = n.lang, b = f.numericSymbols; f = f.numericSymbolMagnitude || 1E3; var k = a.logarithmic ? Math.abs(g) : a.tickInterval, v = b && b.length; if (a.categories) var h = "".concat(this.value); else if (d) h = l.dateFormat(d, g); else if (v && 1E3 <= k) for (; v-- && "undefined" === typeof h;)a = Math.pow(f, v + 1), k >= a && 0 === 10 * g % a && null !== b[v] && 0 !== g && (h = c(g / a, -1) + b[v]); "undefined" === typeof h && (h = 1E4 <= Math.abs(g) ? c(g,
                            -1) : c(g, -1, void 0, "")); return h
                    }; b.prototype.getSeriesExtremes = function () {
                        var a = this, g = a.chart, l; c(this, "getSeriesExtremes", null, function () {
                            a.hasVisibleSeries = !1; a.dataMin = a.dataMax = a.threshold = null; a.softThreshold = !a.isXAxis; a.stacking && a.stacking.buildStacks(); a.series.forEach(function (c) {
                                if (c.visible || !g.options.chart.ignoreHiddenSeries) {
                                    var d = c.options, f = d.threshold; a.hasVisibleSeries = !0; a.positiveValuesOnly && 0 >= f && (f = null); if (a.isXAxis) {
                                        if (d = c.xData, d.length) {
                                            d = a.logarithmic ? d.filter(a.validatePositiveValue) :
                                                d; l = c.getXExtremes(d); var b = l.min; var k = l.max; m(b) || b instanceof Date || (d = d.filter(m), l = c.getXExtremes(d), b = l.min, k = l.max); d.length && (a.dataMin = Math.min(v(a.dataMin, b), b), a.dataMax = Math.max(v(a.dataMax, k), k))
                                        }
                                    } else if (c = c.applyExtremes(), m(c.dataMin) && (b = c.dataMin, a.dataMin = Math.min(v(a.dataMin, b), b)), m(c.dataMax) && (k = c.dataMax, a.dataMax = Math.max(v(a.dataMax, k), k)), D(f) && (a.threshold = f), !d.softThreshold || a.positiveValuesOnly) a.softThreshold = !1
                                }
                            })
                        }); c(this, "afterGetSeriesExtremes")
                    }; b.prototype.translate =
                        function (c, a, g, d, l, f) { var b = this.linkedParent || this, k = d && b.old ? b.old.min : b.min; if (!m(k)) return NaN; var v = b.minPixelPadding; l = (b.isOrdinal || b.brokenAxis && b.brokenAxis.hasBreaks || b.logarithmic && l) && b.lin2val; var h = 1, u = 0; d = d && b.old ? b.old.transA : b.transA; d || (d = b.transA); g && (h *= -1, u = b.len); b.reversed && (h *= -1, u -= h * (b.sector || b.len)); a ? (f = (c * h + u - v) / d + k, l && (f = b.lin2val(f))) : (l && (c = b.val2lin(c)), c = h * (c - k) * d, f = (b.isRadial ? c : p(c)) + u + h * v + (m(f) ? d * f : 0)); return f }; b.prototype.toPixels = function (c, a) {
                            return this.translate(c,
                                !1, !this.horiz, void 0, !0) + (a ? 0 : this.pos)
                        }; b.prototype.toValue = function (c, a) { return this.translate(c - (a ? 0 : this.pos), !0, !this.horiz, void 0, !0) }; b.prototype.getPlotLinePath = function (a) {
                            function g(c, a, g) { if ("pass" !== L && c < a || c > g) L ? c = k(c, a, g) : x = !0; return c } var d = this, l = d.chart, f = d.left, b = d.top, h = a.old, u = a.value, F = a.lineWidth, q = h && l.oldChartHeight || l.chartHeight, B = h && l.oldChartWidth || l.chartWidth, p = d.transB, e = a.translatedValue, L = a.force, n, K, J, A, x; a = {
                                value: u, lineWidth: F, old: h, force: L, acrossPanes: a.acrossPanes,
                                translatedValue: e
                            }; c(this, "getPlotLinePath", a, function (c) { e = v(e, d.translate(u, void 0, void 0, h)); e = k(e, -1E5, 1E5); n = J = Math.round(e + p); K = A = Math.round(q - e - p); m(e) ? d.horiz ? (K = b, A = q - d.bottom, n = J = g(n, f, f + d.width)) : (n = f, J = B - d.right, K = A = g(K, b, b + d.height)) : (x = !0, L = !1); c.path = x && !L ? null : l.renderer.crispLine([["M", n, K], ["L", J, A]], F || 1) }); return a.path
                        }; b.prototype.getLinearTickPositions = function (c, a, g) {
                            var d = p(Math.floor(a / c) * c); g = p(Math.ceil(g / c) * c); var l = [], f; p(d + c) === d && (f = 20); if (this.single) return [a]; for (a =
                                d; a <= g;) { l.push(a); a = p(a + c, f); if (a === b) break; var b = a } return l
                        }; b.prototype.getMinorTickInterval = function () { var c = this.options; return !0 === c.minorTicks ? v(c.minorTickInterval, "auto") : !1 === c.minorTicks ? null : c.minorTickInterval }; b.prototype.getMinorTickPositions = function () {
                            var c = this.options, a = this.tickPositions, g = this.minorTickInterval, d = this.pointRangePadding || 0, l = this.min - d; d = this.max + d; var f = d - l, b = []; if (f && f / g < this.len / 3) {
                                var m = this.logarithmic; if (m) this.paddedTicks.forEach(function (c, a, d) {
                                    a && b.push.apply(b,
                                        m.getLogTickPositions(g, d[a - 1], d[a], !0))
                                }); else if (this.dateTime && "auto" === this.getMinorTickInterval()) b = b.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(g), l, d, c.startOfWeek)); else for (c = l + (a[0] - l) % g; c <= d && c !== b[0]; c += g)b.push(c)
                            } 0 !== b.length && this.trimTicks(b); return b
                        }; b.prototype.adjustForMinRange = function () {
                            var c = this.options, a = this.logarithmic, g = this.min, l = this.max, b = 0, m, k, h, u; this.isXAxis && "undefined" === typeof this.minRange && !a && (D(c.min) || D(c.max) || D(c.floor) || D(c.ceiling) ?
                                this.minRange = null : (this.series.forEach(function (c) { h = c.xData; u = c.xIncrement ? 1 : h.length - 1; if (1 < h.length) for (m = u; 0 < m; m--)if (k = h[m] - h[m - 1], !b || k < b) b = k }), this.minRange = Math.min(5 * b, this.dataMax - this.dataMin))); if (l - g < this.minRange) {
                                    var F = this.dataMax - this.dataMin >= this.minRange; var q = this.minRange; var B = (q - l + g) / 2; B = [g - B, v(c.min, g - B)]; F && (B[2] = this.logarithmic ? this.logarithmic.log2lin(this.dataMin) : this.dataMin); g = f(B); l = [g + q, v(c.max, g + q)]; F && (l[2] = a ? a.log2lin(this.dataMax) : this.dataMax); l = d(l); l - g < q &&
                                        (B[0] = l - q, B[1] = v(c.min, l - q), g = f(B))
                                } this.min = g; this.max = l
                        }; b.prototype.getClosest = function () { var c; this.categories ? c = 1 : this.series.forEach(function (a) { var g = a.closestPointRange, d = a.visible || !a.chart.options.chart.ignoreHiddenSeries; !a.noSharedTooltip && D(g) && d && (c = D(c) ? Math.min(c, g) : g) }); return c }; b.prototype.nameToX = function (c) {
                            var a = B(this.options.categories), g = a ? this.categories : this.names, d = c.options.x; c.series.requireSorting = !1; D(d) || (d = this.options.uniqueNames && g ? a ? g.indexOf(c.name) : v(g.keys[c.name],
                                -1) : c.series.autoIncrement()); if (-1 === d) { if (!a && g) var l = g.length } else l = d; "undefined" !== typeof l ? (this.names[l] = c.name, this.names.keys[c.name] = l) : c.x && (l = c.x); return l
                        }; b.prototype.updateNames = function () {
                            var c = this, a = this.names; 0 < a.length && (Object.keys(a.keys).forEach(function (c) { delete a.keys[c] }), a.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach(function (a) {
                                a.xIncrement = null; if (!a.points || a.isDirtyData) c.max = Math.max(c.max, a.xData.length - 1), a.processData(), a.generatePoints();
                                a.data.forEach(function (g, d) { if (g && g.options && "undefined" !== typeof g.name) { var l = c.nameToX(g); "undefined" !== typeof l && l !== g.x && (g.x = l, a.xData[d] = l) } })
                            }))
                        }; b.prototype.setAxisTranslation = function () {
                            var a = this, g = a.max - a.min, d = a.linkedParent, l = !!a.categories, f = a.isXAxis, b = a.axisPointRange || 0, m = 0, k = 0, h = a.transA; if (f || l || b) {
                                var F = a.getClosest(); d ? (m = d.minPointOffset, k = d.pointRangePadding) : a.series.forEach(function (c) {
                                    var g = l ? 1 : f ? v(c.options.pointRange, F, 0) : a.axisPointRange || 0, d = c.options.pointPlacement;
                                    b = Math.max(b, g); if (!a.single || l) c = c.is("xrange") ? !f : f, m = Math.max(m, c && u(d) ? 0 : g / 2), k = Math.max(k, c && "on" === d ? 0 : g)
                                }); d = a.ordinal && a.ordinal.slope && F ? a.ordinal.slope / F : 1; a.minPointOffset = m *= d; a.pointRangePadding = k *= d; a.pointRange = Math.min(b, a.single && l ? 1 : g); f && (a.closestPointRange = F)
                            } a.translationSlope = a.transA = h = a.staticScale || a.len / (g + k || 1); a.transB = a.horiz ? a.left : a.bottom; a.minPixelPadding = h * m; c(this, "afterSetAxisTranslation")
                        }; b.prototype.minFromRange = function () { return this.max - this.range }; b.prototype.setTickInterval =
                            function (a) {
                                var g = this.chart, d = this.logarithmic, l = this.options, f = this.isXAxis, b = this.isLinked, k = l.tickPixelInterval, h = this.categories, u = this.softThreshold, F = l.maxPadding, q = l.minPadding, B = m(l.tickInterval) && 0 <= l.tickInterval ? l.tickInterval : void 0, e = m(this.threshold) ? this.threshold : null; this.dateTime || h || b || this.getTickAmount(); var n = v(this.userMin, l.min); var K = v(this.userMax, l.max); if (b) {
                                    this.linkedParent = g[this.coll][l.linkedTo]; var L = this.linkedParent.getExtremes(); this.min = v(L.min, L.dataMin); this.max =
                                        v(L.max, L.dataMax); l.type !== this.linkedParent.options.type && E(11, 1, g)
                                } else { if (u && D(e)) if (this.dataMin >= e) L = e, q = 0; else if (this.dataMax <= e) { var J = e; F = 0 } this.min = v(n, L, this.dataMin); this.max = v(K, J, this.dataMax) } d && (this.positiveValuesOnly && !a && 0 >= Math.min(this.min, v(this.dataMin, this.min)) && E(10, 1, g), this.min = p(d.log2lin(this.min), 16), this.max = p(d.log2lin(this.max), 16)); this.range && D(this.max) && (this.userMin = this.min = n = Math.max(this.dataMin, this.minFromRange()), this.userMax = K = this.max, this.range = null);
                                c(this, "foundExtremes"); this.beforePadding && this.beforePadding(); this.adjustForMinRange(); !(h || this.axisPointRange || this.stacking && this.stacking.usePercentage || b) && D(this.min) && D(this.max) && (g = this.max - this.min) && (!D(n) && q && (this.min -= g * q), !D(K) && F && (this.max += g * F)); m(this.userMin) || (m(l.softMin) && l.softMin < this.min && (this.min = n = l.softMin), m(l.floor) && (this.min = Math.max(this.min, l.floor))); m(this.userMax) || (m(l.softMax) && l.softMax > this.max && (this.max = K = l.softMax), m(l.ceiling) && (this.max = Math.min(this.max,
                                    l.ceiling))); u && D(this.dataMin) && (e = e || 0, !D(n) && this.min < e && this.dataMin >= e ? this.min = this.options.minRange ? Math.min(e, this.max - this.minRange) : e : !D(K) && this.max > e && this.dataMax <= e && (this.max = this.options.minRange ? Math.max(e, this.min + this.minRange) : e)); m(this.min) && m(this.max) && !this.chart.polar && this.min > this.max && (D(this.options.min) ? this.max = this.min : D(this.options.max) && (this.min = this.max)); this.tickInterval = this.min === this.max || "undefined" === typeof this.min || "undefined" === typeof this.max ? 1 : b &&
                                        this.linkedParent && !B && k === this.linkedParent.options.tickPixelInterval ? B = this.linkedParent.tickInterval : v(B, this.tickAmount ? (this.max - this.min) / Math.max(this.tickAmount - 1, 1) : void 0, h ? 1 : (this.max - this.min) * k / Math.max(this.len, k)); if (f && !a) { var A = this.min !== (this.old && this.old.min) || this.max !== (this.old && this.old.max); this.series.forEach(function (c) { c.forceCrop = c.forceCropping && c.forceCropping(); c.processData(A) }); c(this, "postProcessData", { hasExtremesChanged: A }) } this.setAxisTranslation(); c(this, "initialAxisTranslation");
                                this.pointRange && !B && (this.tickInterval = Math.max(this.pointRange, this.tickInterval)); a = v(l.minTickInterval, this.dateTime && !this.series.some(function (c) { return c.noSharedTooltip }) ? this.closestPointRange : 0); !B && this.tickInterval < a && (this.tickInterval = a); this.dateTime || this.logarithmic || B || (this.tickInterval = I(this, this.tickInterval)); this.tickAmount || (this.tickInterval = this.unsquish()); this.setTickPositions()
                            }; b.prototype.setTickPositions = function () {
                                var a = this.options, g = a.tickPositions, l = a.tickPositioner,
                                d = this.getMinorTickInterval(), f = this.hasVerticalPanning(), b = "colorAxis" === this.coll, k = (b || !f) && a.startOnTick; f = (b || !f) && a.endOnTick; b = []; var h; this.tickmarkOffset = this.categories && "between" === a.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0; this.minorTickInterval = "auto" === d && this.tickInterval ? this.tickInterval / 5 : d; this.single = this.min === this.max && D(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || !1 !== a.allowDecimals); if (g) b = g.slice(); else if (m(this.min) && m(this.max)) {
                                    if (this.ordinal &&
                                        this.ordinal.positions || !((this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200))) if (this.dateTime) b = this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval, a.units), this.min, this.max, a.startOfWeek, this.ordinal && this.ordinal.positions, this.closestPointRange, !0); else if (this.logarithmic) b = this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max); else for (d = a = this.tickInterval; d <= 2 * a;)if (b = this.getLinearTickPositions(this.tickInterval, this.min, this.max), this.tickAmount &&
                                            b.length > this.tickAmount) this.tickInterval = I(this, d *= 1.1); else break; else b = [this.min, this.max], E(19, !1, this.chart); b.length > this.len && (b = [b[0], b[b.length - 1]], b[0] === b[1] && (b.length = 1)); l && (this.tickPositions = b, (h = l.apply(this, [this.min, this.max])) && (b = h))
                                } this.tickPositions = b; this.paddedTicks = b.slice(0); this.trimTicks(b, k, f); !this.isLinked && m(this.min) && m(this.max) && (this.single && 2 > b.length && !this.categories && !this.series.some(function (c) { return c.is("heatmap") && "between" === c.options.pointPlacement }) &&
                                    (this.min -= .5, this.max += .5), g || h || this.adjustTickAmount()); c(this, "afterSetTickPositions")
                            }; b.prototype.trimTicks = function (a, g, l) { var d = a[0], f = a[a.length - 1], b = !this.isOrdinal && this.minPointOffset || 0; c(this, "trimTicks"); if (!this.isLinked) { if (g && -Infinity !== d) this.min = d; else for (; this.min - b > a[0];)a.shift(); if (l) this.max = f; else for (; this.max + b < a[a.length - 1];)a.pop(); 0 === a.length && D(d) && !this.options.tickPositions && a.push((f + d) / 2) } }; b.prototype.alignToOthers = function () {
                                var c = this, a = [this], g = c.options,
                                l = "yAxis" === this.coll && this.chart.options.chart.alignThresholds, d = [], f; c.thresholdAlignment = void 0; if ((!1 !== this.chart.options.chart.alignTicks && g.alignTicks || l) && !1 !== g.startOnTick && !1 !== g.endOnTick && !c.logarithmic) { var b = function (c) { var a = c.options; return [c.horiz ? a.left : a.top, a.width, a.height, a.pane].join() }, k = b(this); this.chart[this.coll].forEach(function (g) { var d = g.series; d.length && d.some(function (c) { return c.visible }) && g !== c && b(g) === k && (f = !0, a.push(g)) }) } if (f && l) {
                                    a.forEach(function (a) {
                                        a = a.getThresholdAlignment(c);
                                        m(a) && d.push(a)
                                    }); var h = 1 < d.length ? d.reduce(function (c, a) { return c + a }, 0) / d.length : void 0; a.forEach(function (c) { c.thresholdAlignment = h })
                                } return f
                            }; b.prototype.getThresholdAlignment = function (c) { (!m(this.dataMin) || this !== c && this.series.some(function (c) { return c.isDirty || c.isDirtyData })) && this.getSeriesExtremes(); if (m(this.threshold)) return c = k((this.threshold - (this.dataMin || 0)) / ((this.dataMax || 0) - (this.dataMin || 0)), 0, 1), this.options.reversed && (c = 1 - c), c }; b.prototype.getTickAmount = function () {
                                var c = this.options,
                                a = c.tickPixelInterval, g = c.tickAmount; !D(c.tickInterval) && !g && this.len < a && !this.isRadial && !this.logarithmic && c.startOnTick && c.endOnTick && (g = 2); !g && this.alignToOthers() && (g = Math.ceil(this.len / a) + 1); 4 > g && (this.finalTickAmt = g, g = 5); this.tickAmount = g
                            }; b.prototype.adjustTickAmount = function () {
                                var c = this, a = c.finalTickAmt, g = c.max, d = c.min, l = c.options, f = c.tickPositions, b = c.tickAmount, k = c.thresholdAlignment, h = f && f.length, u = v(c.threshold, c.softThreshold ? 0 : null); var F = c.tickInterval; if (m(k)) {
                                    var q = .5 > k ? Math.ceil(k *
                                        (b - 1)) : Math.floor(k * (b - 1)); l.reversed && (q = b - 1 - q)
                                } if (c.hasData() && m(d) && m(g)) {
                                    k = function () { c.transA *= (h - 1) / (b - 1); c.min = l.startOnTick ? f[0] : Math.min(d, f[0]); c.max = l.endOnTick ? f[f.length - 1] : Math.max(g, f[f.length - 1]) }; if (m(q) && m(c.threshold)) { for (; f[q] !== u || f.length !== b || f[0] > d || f[f.length - 1] < g;) { f.length = 0; for (f.push(c.threshold); f.length < b;)void 0 === f[q] || f[q] > c.threshold ? f.unshift(p(f[0] - F)) : f.push(p(f[f.length - 1] + F)); if (F > 8 * c.tickInterval) break; F *= 2 } k() } else if (h < b) {
                                        for (; f.length < b;)f.length % 2 || d ===
                                            u ? f.push(p(f[f.length - 1] + F)) : f.unshift(p(f[0] - F)); k()
                                    } if (D(a)) { for (F = u = f.length; F--;)(3 === a && 1 === F % 2 || 2 >= a && 0 < F && F < u - 1) && f.splice(F, 1); c.finalTickAmt = void 0 }
                                }
                            }; b.prototype.setScale = function () {
                                var a = !1, g = !1; this.series.forEach(function (c) { a = a || c.isDirtyData || c.isDirty; g = g || c.xAxis && c.xAxis.isDirty || !1 }); this.setAxisSize(); var d = this.len !== (this.old && this.old.len); d || a || g || this.isLinked || this.forceRedraw || this.userMin !== (this.old && this.old.userMin) || this.userMax !== (this.old && this.old.userMax) || this.alignToOthers() ?
                                    (this.stacking && this.stacking.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.isDirty || (this.isDirty = d || this.min !== (this.old && this.old.min) || this.max !== (this.old && this.old.max))) : this.stacking && this.stacking.cleanStacks(); a && this.panningState && (this.panningState.isDirty = !0); c(this, "afterSetScale")
                            }; b.prototype.setExtremes = function (a, g, d, l, f) {
                                var b = this, m = b.chart; d = v(d, !0); b.series.forEach(function (c) { delete c.kdTree }); f = q(f, { min: a, max: g }); c(b, "setExtremes", f,
                                    function () { b.userMin = a; b.userMax = g; b.eventArgs = f; d && m.redraw(l) })
                            }; b.prototype.zoom = function (a, g) {
                                var d = this, l = this.dataMin, f = this.dataMax, b = this.options, m = Math.min(l, v(b.min, l)), k = Math.max(f, v(b.max, f)); a = { newMin: a, newMax: g }; c(this, "zoom", a, function (c) {
                                    var a = c.newMin, g = c.newMax; if (a !== d.min || g !== d.max) d.allowZoomOutside || (D(l) && (a < m && (a = m), a > k && (a = k)), D(f) && (g < m && (g = m), g > k && (g = k))), d.displayBtn = "undefined" !== typeof a || "undefined" !== typeof g, d.setExtremes(a, g, !1, void 0, { trigger: "zoom" }); c.zoomed =
                                        !0
                                }); return a.zoomed
                            }; b.prototype.setAxisSize = function () {
                                var c = this.chart, a = this.options, g = a.offsets || [0, 0, 0, 0], d = this.horiz, l = this.width = Math.round(K(v(a.width, c.plotWidth - g[3] + g[1]), c.plotWidth)), f = this.height = Math.round(K(v(a.height, c.plotHeight - g[0] + g[2]), c.plotHeight)), b = this.top = Math.round(K(v(a.top, c.plotTop + g[0]), c.plotHeight, c.plotTop)); a = this.left = Math.round(K(v(a.left, c.plotLeft + g[3]), c.plotWidth, c.plotLeft)); this.bottom = c.chartHeight - f - b; this.right = c.chartWidth - l - a; this.len = Math.max(d ?
                                    l : f, 0); this.pos = d ? a : b
                            }; b.prototype.getExtremes = function () { var c = this.logarithmic; return { min: c ? p(c.lin2log(this.min)) : this.min, max: c ? p(c.lin2log(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax } }; b.prototype.getThreshold = function (c) { var a = this.logarithmic, g = a ? a.lin2log(this.min) : this.min; a = a ? a.lin2log(this.max) : this.max; null === c || -Infinity === c ? c = g : Infinity === c ? c = a : g > c ? c = g : a < c && (c = a); return this.translate(c, 0, 1, 0, 1) }; b.prototype.autoLabelAlign =
                                function (a) { var g = (v(a, 0) - 90 * this.side + 720) % 360; a = { align: "center" }; c(this, "autoLabelAlign", a, function (c) { 15 < g && 165 > g ? c.align = "right" : 195 < g && 345 > g && (c.align = "left") }); return a.align }; b.prototype.tickSize = function (a) { var g = this.options, d = v(g["tick" === a ? "tickWidth" : "minorTickWidth"], "tick" === a && this.isXAxis && !this.categories ? 1 : 0), l = g["tick" === a ? "tickLength" : "minorTickLength"]; if (d && l) { "inside" === g[a + "Position"] && (l = -l); var f = [l, d] } a = { tickSize: f }; c(this, "afterTickSize", a); return a.tickSize }; b.prototype.labelMetrics =
                                    function () { var c = this.tickPositions && this.tickPositions[0] || 0; return this.chart.renderer.fontMetrics(this.options.labels.style.fontSize, this.ticks[c] && this.ticks[c].label) }; b.prototype.unsquish = function () {
                                        var c = this.options.labels, g = this.horiz, d = this.tickInterval, l = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / d), f = c.rotation, b = this.labelMetrics(), k = Math.max(this.max - this.min, 0), h = function (c) {
                                            var a = c / (l || 1); a = 1 < a ? Math.ceil(a) : 1; a * d > k && Infinity !== c && Infinity !== l && k && (a = Math.ceil(k / d)); return p(a *
                                                d)
                                        }, u = d, F = Number.MAX_VALUE; if (g) { if (!c.staggerLines) if (m(f)) var q = [f]; else l < c.autoRotationLimit && (q = c.autoRotation); if (q) for (var B = g = void 0, e = 0, n = q; e < n.length; e++) { var K = n[e]; if (K === f || K && -90 <= K && 90 >= K) if (g = h(Math.abs(b.h / Math.sin(a * K))), B = g + Math.abs(K / 360), B < F) { F = B; var J = K; u = g } } } else u = h(b.h); this.autoRotation = q; this.labelRotation = v(J, m(f) ? f : 0); return c.step ? d : u
                                    }; b.prototype.getSlotWidth = function (c) {
                                        var a = this.chart, g = this.horiz, d = this.options.labels, l = Math.max(this.tickPositions.length - (this.categories ?
                                            0 : 1), 1), f = a.margin[3]; if (c && m(c.slotWidth)) return c.slotWidth; if (g && 2 > d.step) return d.rotation ? 0 : (this.staggerLines || 1) * this.len / l; if (!g) { c = d.style.width; if (void 0 !== c) return parseInt(String(c), 10); if (f) return f - a.spacing[3] } return .33 * a.chartWidth
                                    }; b.prototype.renderUnsquish = function () {
                                        var c = this.chart, a = c.renderer, g = this.tickPositions, d = this.ticks, l = this.options.labels, f = l.style, b = this.horiz, m = this.getSlotWidth(), k = Math.max(1, Math.round(m - 2 * l.padding)), h = {}, v = this.labelMetrics(), F = f.textOverflow,
                                        q = 0; u(l.rotation) || (h.rotation = l.rotation || 0); g.forEach(function (c) { c = d[c]; c.movedLabel && c.replaceMovedLabel(); c && c.label && c.label.textPxLength > q && (q = c.label.textPxLength) }); this.maxLabelLength = q; if (this.autoRotation) q > k && q > v.h ? h.rotation = this.labelRotation : this.labelRotation = 0; else if (m) {
                                            var B = k; if (!F) {
                                                var e = "clip"; for (k = g.length; !b && k--;) {
                                                    var p = g[k]; if (p = d[p].label) p.styles && "ellipsis" === p.styles.textOverflow ? p.css({ textOverflow: "clip" }) : p.textPxLength > m && p.css({ width: m + "px" }), p.getBBox().height >
                                                        this.len / g.length - (v.h - v.f) && (p.specificTextOverflow = "ellipsis")
                                                }
                                            }
                                        } h.rotation && (B = q > .5 * c.chartHeight ? .33 * c.chartHeight : q, F || (e = "ellipsis")); if (this.labelAlign = l.align || this.autoLabelAlign(this.labelRotation)) h.align = this.labelAlign; g.forEach(function (c) {
                                            var a = (c = d[c]) && c.label, g = f.width, l = {}; a && (a.attr(h), c.shortenLabel ? c.shortenLabel() : B && !g && "nowrap" !== f.whiteSpace && (B < a.textPxLength || "SPAN" === a.element.tagName) ? (l.width = B + "px", F || (l.textOverflow = a.specificTextOverflow || e), a.css(l)) : a.styles && a.styles.width &&
                                                !l.width && !g && a.css({ width: null }), delete a.specificTextOverflow, c.rotation = h.rotation)
                                        }, this); this.tickRotCorr = a.rotCorr(v.b, this.labelRotation || 0, 0 !== this.side)
                                    }; b.prototype.hasData = function () { return this.series.some(function (c) { return c.hasData() }) || this.options.showEmpty && D(this.min) && D(this.max) }; b.prototype.addTitle = function (c) {
                                        var a = this.chart.renderer, d = this.horiz, l = this.opposite, f = this.options.title, b = this.chart.styledMode, m; this.axisTitle || ((m = f.textAlign) || (m = (d ? {
                                            low: "left", middle: "center",
                                            high: "right"
                                        } : { low: l ? "right" : "left", middle: "center", high: l ? "left" : "right" })[f.align]), this.axisTitle = a.text(f.text || "", 0, 0, f.useHTML).attr({ zIndex: 7, rotation: f.rotation, align: m }).addClass("highcharts-axis-title"), b || this.axisTitle.css(g(f.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = !0); b || f.style.width || this.isRadial || this.axisTitle.css({ width: this.len + "px" }); this.axisTitle[c ? "show" : "hide"](c)
                                    }; b.prototype.generateTick = function (c) {
                                        var a = this.ticks; a[c] ? a[c].addLabel() : a[c] = new G(this,
                                            c)
                                    }; b.prototype.getOffset = function () {
                                        var a = this, g = this, d = g.chart, f = g.horiz, b = g.options, m = g.side, k = g.ticks, h = g.tickPositions, u = g.coll, F = g.axisParent, q = d.renderer, B = d.inverted && !g.isZAxis ? [1, 0, 3, 2][m] : m, e = g.hasData(), p = b.title, n = b.labels, K = d.axisOffset; d = d.clipOffset; var J = [-1, 1, 1, -1][m], A = b.className, x, M = 0, E = 0, r = 0; g.showAxis = x = e || b.showEmpty; g.staggerLines = g.horiz && n.staggerLines || void 0; if (!g.axisGroup) {
                                            var S = function (c, g, d) {
                                                return q.g(c).attr({ zIndex: d }).addClass("highcharts-".concat(u.toLowerCase()).concat(g,
                                                    " ") + (a.isRadial ? "highcharts-radial-axis".concat(g, " ") : "") + (A || "")).add(F)
                                            }; g.gridGroup = S("grid", "-grid", b.gridZIndex); g.axisGroup = S("axis", "", b.zIndex); g.labelGroup = S("axis-labels", "-labels", n.zIndex)
                                        } e || g.isLinked ? (h.forEach(function (c) { g.generateTick(c) }), g.renderUnsquish(), g.reserveSpaceDefault = 0 === m || 2 === m || { 1: "left", 3: "right" }[m] === g.labelAlign, v(n.reserveSpace, "center" === g.labelAlign ? !0 : null, g.reserveSpaceDefault) && h.forEach(function (c) { r = Math.max(k[c].getLabelSize(), r) }), g.staggerLines &&
                                            (r *= g.staggerLines), g.labelOffset = r * (g.opposite ? -1 : 1)) : l(k, function (c, a) { c.destroy(); delete k[a] }); if (p && p.text && !1 !== p.enabled && (g.addTitle(x), x && !1 !== p.reserveSpace)) { g.titleOffset = M = g.axisTitle.getBBox()[f ? "height" : "width"]; var t = p.offset; E = D(t) ? 0 : v(p.margin, f ? 5 : 10) } g.renderLine(); g.offset = J * v(b.offset, K[m] ? K[m] + (b.margin || 0) : 0); g.tickRotCorr = g.tickRotCorr || { x: 0, y: 0 }; p = 0 === m ? -g.labelMetrics().h : 2 === m ? g.tickRotCorr.y : 0; e = Math.abs(r) + E; r && (e = e - p + J * (f ? v(n.y, g.tickRotCorr.y + 8 * J) : n.x)); g.axisTitleMargin =
                                                v(t, e); g.getMaxLabelDimensions && (g.maxLabelDimensions = g.getMaxLabelDimensions(k, h)); "colorAxis" !== u && (f = this.tickSize("tick"), K[m] = Math.max(K[m], (g.axisTitleMargin || 0) + M + J * g.offset, e, h && h.length && f ? f[0] + J * g.offset : 0), b = !g.axisLine || b.offset ? 0 : 2 * Math.floor(g.axisLine.strokeWidth() / 2), d[B] = Math.max(d[B], b)); c(this, "afterGetOffset")
                                    }; b.prototype.getLinePath = function (c) {
                                        var a = this.chart, g = this.opposite, d = this.offset, l = this.horiz, f = this.left + (g ? this.width : 0) + d; d = a.chartHeight - this.bottom - (g ? this.height :
                                            0) + d; g && (c *= -1); return a.renderer.crispLine([["M", l ? this.left : f, l ? d : this.top], ["L", l ? a.chartWidth - this.right : f, l ? d : a.chartHeight - this.bottom]], c)
                                    }; b.prototype.renderLine = function () { this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({ stroke: this.options.lineColor, "stroke-width": this.options.lineWidth, zIndex: 7 })) }; b.prototype.getTitlePosition = function () {
                                        var a = this.horiz, g = this.left, d = this.top, l = this.len,
                                        f = this.options.title, b = a ? g : d, m = this.opposite, k = this.offset, h = f.x, v = f.y, u = this.axisTitle, F = this.chart.renderer.fontMetrics(f.style.fontSize, u); u = u ? Math.max(u.getBBox(!1, 0).height - F.h - 1, 0) : 0; l = { low: b + (a ? 0 : l), middle: b + l / 2, high: b + (a ? l : 0) }[f.align]; g = (a ? d + this.height : g) + (a ? 1 : -1) * (m ? -1 : 1) * (this.axisTitleMargin || 0) + [-u, u, F.f, -u][this.side]; a = { x: a ? l + h : g + (m ? this.width : 0) + k + h, y: a ? g + v - (m ? this.height : 0) + k : l + v }; c(this, "afterGetTitlePosition", { titlePosition: a }); return a
                                    }; b.prototype.renderMinorTick = function (c,
                                        a) { var g = this.minorTicks; g[c] || (g[c] = new G(this, c, "minor")); a && g[c].isNew && g[c].render(null, !0); g[c].render(null, !1, 1) }; b.prototype.renderTick = function (c, a, g) { var d = this.ticks; if (!this.isLinked || c >= this.min && c <= this.max || this.grid && this.grid.isColumn) d[c] || (d[c] = new G(this, c)), g && d[c].isNew && d[c].render(a, !0, -1), d[c].render(a) }; b.prototype.render = function () {
                                            var a = this, g = a.chart, d = a.logarithmic, f = a.options, b = a.isLinked, k = a.tickPositions, h = a.axisTitle, u = a.ticks, v = a.minorTicks, F = a.alternateBands, q = f.stackLabels,
                                            B = f.alternateGridColor, e = a.tickmarkOffset, p = a.axisLine, n = a.showAxis, K = r(g.renderer.globalAnimation), J, A; a.labelEdge.length = 0; a.overlap = !1;[u, v, F].forEach(function (c) { l(c, function (c) { c.isActive = !1 }) }); if (a.hasData() || b) {
                                                var x = a.chart.hasRendered && a.old && m(a.old.min); a.minorTickInterval && !a.categories && a.getMinorTickPositions().forEach(function (c) { a.renderMinorTick(c, x) }); k.length && (k.forEach(function (c, g) { a.renderTick(c, g, x) }), e && (0 === a.min || a.single) && (u[-1] || (u[-1] = new G(a, -1, null, !0)), u[-1].render(-1)));
                                                B && k.forEach(function (c, l) { A = "undefined" !== typeof k[l + 1] ? k[l + 1] + e : a.max - e; 0 === l % 2 && c < a.max && A <= a.max + (g.polar ? -e : e) && (F[c] || (F[c] = new y.PlotLineOrBand(a)), J = c + e, F[c].options = { from: d ? d.lin2log(J) : J, to: d ? d.lin2log(A) : A, color: B, className: "highcharts-alternate-grid" }, F[c].render(), F[c].isActive = !0) }); a._addedPlotLB || (a._addedPlotLB = !0, (f.plotLines || []).concat(f.plotBands || []).forEach(function (c) { a.addPlotBandOrLine(c) }))
                                            } [u, v, F].forEach(function (c) {
                                                var a = [], d = K.duration; l(c, function (c, g) {
                                                    c.isActive ||
                                                    (c.render(g, !1, 0), c.isActive = !1, a.push(g))
                                                }); S(function () { for (var g = a.length; g--;)c[a[g]] && !c[a[g]].isActive && (c[a[g]].destroy(), delete c[a[g]]) }, c !== F && g.hasRendered && d ? d : 0)
                                            }); p && (p[p.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(p.strokeWidth()) }), p.isPlaced = !0, p[n ? "show" : "hide"](n)); h && n && (f = a.getTitlePosition(), h[h.isNew ? "attr" : "animate"](f), h.isNew = !1); q && q.enabled && a.stacking && a.stacking.renderStackTotals(); a.old = { len: a.len, max: a.max, min: a.min, transA: a.transA, userMax: a.userMax, userMin: a.userMin };
                                            a.isDirty = !1; c(this, "afterRender")
                                        }; b.prototype.redraw = function () { this.visible && (this.render(), this.plotLinesAndBands.forEach(function (c) { c.render() })); this.series.forEach(function (c) { c.isDirty = !0 }) }; b.prototype.getKeepProps = function () { return this.keepProps || b.keepProps }; b.prototype.destroy = function (a) {
                                            var g = this, d = g.plotLinesAndBands, f = this.eventOptions; c(this, "destroy", { keepEvents: a }); a || J(g);[g.ticks, g.minorTicks, g.alternateBands].forEach(function (c) { A(c) }); if (d) for (a = d.length; a--;)d[a].destroy();
                                            "axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function (c) { g[c] && (g[c] = g[c].destroy()) }); for (var b in g.plotLinesAndBandsGroups) g.plotLinesAndBandsGroups[b] = g.plotLinesAndBandsGroups[b].destroy(); l(g, function (c, a) { -1 === g.getKeepProps().indexOf(a) && delete g[a] }); this.eventOptions = f
                                        }; b.prototype.drawCrosshair = function (a, g) {
                                            var d = this.crosshair, l = v(d && d.snap, !0), f = this.chart, b, m = this.cross; c(this, "drawCrosshair", { e: a, point: g }); a || (a = this.cross && this.cross.e); if (d &&
                                                !1 !== (D(g) || !l)) {
                                                    l ? D(g) && (b = v("colorAxis" !== this.coll ? g.crosshairPos : null, this.isXAxis ? g.plotX : this.len - g.plotY)) : b = a && (this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos); if (D(b)) { var k = { value: g && (this.isXAxis ? g.x : v(g.stackY, g.y)), translatedValue: b }; f.polar && q(k, { isCrosshair: !0, chartX: a && a.chartX, chartY: a && a.chartY, point: g }); k = this.getPlotLinePath(k) || null } if (!D(k)) { this.hideCrosshair(); return } l = this.categories && !this.isRadial; m || (this.cross = m = f.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" +
                                                        (l ? "category " : "thin ") + (d.className || "")).attr({ zIndex: v(d.zIndex, 2) }).add(), f.styledMode || (m.attr({ stroke: d.color || (l ? z.parse("#ccd6eb").setOpacity(.25).get() : "#cccccc"), "stroke-width": v(d.width, 1) }).css({ "pointer-events": "none" }), d.dashStyle && m.attr({ dashstyle: d.dashStyle }))); m.show().attr({ d: k }); l && !d.width && m.attr({ "stroke-width": this.transA }); this.cross.e = a
                                            } else this.hideCrosshair(); c(this, "afterDrawCrosshair", { e: a, point: g })
                                        }; b.prototype.hideCrosshair = function () {
                                            this.cross && this.cross.hide();
                                            c(this, "afterHideCrosshair")
                                        }; b.prototype.hasVerticalPanning = function () { var c = this.chart.options.chart.panning; return !!(c && c.enabled && /y/.test(c.type)) }; b.prototype.validatePositiveValue = function (c) { return m(c) && 0 < c }; b.prototype.update = function (c, a) { var d = this.chart; c = g(this.userOptions, c); this.destroy(!0); this.init(d, c); d.isDirtyBox = !0; v(a, !0) && d.redraw() }; b.prototype.remove = function (c) {
                                            for (var a = this.chart, g = this.coll, d = this.series, l = d.length; l--;)d[l] && d[l].remove(!1); x(a.axes, this); x(a[g], this);
                                            a[g].forEach(function (c, a) { c.options.index = c.userOptions.index = a }); this.destroy(); a.isDirtyBox = !0; v(c, !0) && a.redraw()
                                        }; b.prototype.setTitle = function (c, a) { this.update({ title: c }, a) }; b.prototype.setCategories = function (c, a) { this.update({ categories: c }, a) }; b.defaultOptions = e.defaultXAxisOptions; b.keepProps = "extKey hcEvents names series userMax userMin".split(" "); return b
            }(); ""; return b
        }); H(e, "Core/Axis/DateTimeAxis.js", [e["Core/Utilities.js"]], function (b) {
            var e = b.addEvent, z = b.getMagnitude, C = b.normalizeTickInterval,
            w = b.timeUnits, y; (function (b) {
                function t() { return this.chart.time.getTimeTicks.apply(this.chart.time, arguments) } function r(a) { "datetime" !== a.userOptions.type ? this.dateTime = void 0 : this.dateTime || (this.dateTime = new h(this)) } var n = []; b.compose = function (a) { -1 === n.indexOf(a) && (n.push(a), a.keepProps.push("dateTime"), a.prototype.getTimeTicks = t, e(a, "init", r)); return a }; var h = function () {
                    function a(a) { this.axis = a } a.prototype.normalizeTimeTickInterval = function (a, d) {
                        var f = d || [["millisecond", [1, 2, 5, 10, 20, 25, 50,
                            100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]]; d = f[f.length - 1]; var b = w[d[0]], h = d[1], e; for (e = 0; e < f.length && !(d = f[e], b = w[d[0]], h = d[1], f[e + 1] && a <= (b * h[h.length - 1] + w[f[e + 1][0]]) / 2); e++); b === w.year && a < 5 * b && (h = [1, 2, 5]); a = C(a / b, h, "year" === d[0] ? Math.max(z(a / b), 1) : 1); return { unitRange: b, count: a, unitName: d[0] }
                    }; a.prototype.getXDateFormat = function (a, d) {
                        var f = this.axis, b = f.chart.time; return f.closestPointRange ?
                            b.getDateFormat(f.closestPointRange, a, f.options.startOfWeek, d) || b.resolveDTLFormat(d.year).main : b.resolveDTLFormat(d.day).main
                    }; return a
                }(); b.Additions = h
            })(y || (y = {})); return y
        }); H(e, "Core/Axis/LogarithmicAxis.js", [e["Core/Utilities.js"]], function (b) {
            var e = b.addEvent, z = b.normalizeTickInterval, C = b.pick, w; (function (b) {
                function y(b) { var a = this.logarithmic; "logarithmic" !== b.userOptions.type ? this.logarithmic = void 0 : a || (this.logarithmic = new n(this)) } function t() {
                    var b = this.logarithmic; b && (this.lin2val = function (a) { return b.lin2log(a) },
                        this.val2lin = function (a) { return b.log2lin(a) })
                } var r = []; b.compose = function (b) { -1 === r.indexOf(b) && (r.push(b), b.keepProps.push("logarithmic"), e(b, "init", y), e(b, "afterInit", t)); return b }; var n = function () {
                    function b(a) { this.axis = a } b.prototype.getLogTickPositions = function (a, f, d, b) {
                        var k = this.axis, h = k.len, e = k.options, n = []; b || (this.minorAutoInterval = void 0); if (.5 <= a) a = Math.round(a), n = k.getLinearTickPositions(a, f, d); else if (.08 <= a) {
                            var E = Math.floor(f), q, c = e = void 0; for (h = .3 < a ? [1, 2, 4] : .15 < a ? [1, 2, 4, 6, 8] : [1,
                                2, 3, 4, 5, 6, 7, 8, 9]; E < d + 1 && !c; E++) { var B = h.length; for (q = 0; q < B && !c; q++) { var m = this.log2lin(this.lin2log(E) * h[q]); m > f && (!b || e <= d) && "undefined" !== typeof e && n.push(e); e > d && (c = !0); e = m } }
                        } else f = this.lin2log(f), d = this.lin2log(d), a = b ? k.getMinorTickInterval() : e.tickInterval, a = C("auto" === a ? null : a, this.minorAutoInterval, e.tickPixelInterval / (b ? 5 : 1) * (d - f) / ((b ? h / k.tickPositions.length : h) || 1)), a = z(a), n = k.getLinearTickPositions(a, f, d).map(this.log2lin), b || (this.minorAutoInterval = a / 5); b || (k.tickInterval = a); return n
                    };
                    b.prototype.lin2log = function (a) { return Math.pow(10, a) }; b.prototype.log2lin = function (a) { return Math.log(a) / Math.LN10 }; return b
                }(); b.Additions = n
            })(w || (w = {})); return w
        }); H(e, "Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js", [e["Core/Utilities.js"]], function (b) {
            var e = b.erase, z = b.extend, C = b.isNumber, w; (function (b) {
                var y = [], t; b.compose = function (b, h) { t || (t = b); -1 === y.indexOf(h) && (y.push(h), z(h.prototype, r.prototype)); return h }; var r = function () {
                    function b() { } b.prototype.getPlotBandPath = function (b, a, f) {
                        void 0 ===
                        f && (f = this.options); var d = this.getPlotLinePath({ value: a, force: !0, acrossPanes: f.acrossPanes }), k = [], h = this.horiz; a = !C(this.min) || !C(this.max) || b < this.min && a < this.min || b > this.max && a > this.max; b = this.getPlotLinePath({ value: b, force: !0, acrossPanes: f.acrossPanes }); f = 1; if (b && d) {
                            if (a) { var e = b.toString() === d.toString(); f = 0 } for (a = 0; a < b.length; a += 2) {
                                var n = b[a], x = b[a + 1], E = d[a], q = d[a + 1]; "M" !== n[0] && "L" !== n[0] || "M" !== x[0] && "L" !== x[0] || "M" !== E[0] && "L" !== E[0] || "M" !== q[0] && "L" !== q[0] || (h && E[1] === n[1] ? (E[1] += f, q[1] +=
                                    f) : h || E[2] !== n[2] || (E[2] += f, q[2] += f), k.push(["M", n[1], n[2]], ["L", x[1], x[2]], ["L", q[1], q[2]], ["L", E[1], E[2]], ["Z"])); k.isFlat = e
                            }
                        } return k
                    }; b.prototype.addPlotBand = function (b) { return this.addPlotBandOrLine(b, "plotBands") }; b.prototype.addPlotLine = function (b) { return this.addPlotBandOrLine(b, "plotLines") }; b.prototype.addPlotBandOrLine = function (b, a) {
                        var f = this, d = this.userOptions, k = new t(this, b); this.visible && (k = k.render()); if (k) {
                            this._addedPlotLB || (this._addedPlotLB = !0, (d.plotLines || []).concat(d.plotBands ||
                                []).forEach(function (a) { f.addPlotBandOrLine(a) })); if (a) { var h = d[a] || []; h.push(b); d[a] = h } this.plotLinesAndBands.push(k)
                        } return k
                    }; b.prototype.removePlotBandOrLine = function (b) { var a = this.plotLinesAndBands, f = this.options, d = this.userOptions; if (a) { for (var k = a.length; k--;)a[k].id === b && a[k].destroy();[f.plotLines || [], d.plotLines || [], f.plotBands || [], d.plotBands || []].forEach(function (a) { for (k = a.length; k--;)(a[k] || {}).id === b && e(a, a[k]) }) } }; b.prototype.removePlotBand = function (b) { this.removePlotBandOrLine(b) };
                    b.prototype.removePlotLine = function (b) { this.removePlotBandOrLine(b) }; return b
                }()
            })(w || (w = {})); return w
        }); H(e, "Core/Axis/PlotLineOrBand/PlotLineOrBand.js", [e["Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js"], e["Core/Utilities.js"]], function (b, e) {
            var z = e.arrayMax, I = e.arrayMin, w = e.defined, y = e.destroyObjectProperties, G = e.erase, t = e.fireEvent, r = e.merge, n = e.objectEach, h = e.pick; e = function () {
                function a(a, d) { this.axis = a; d && (this.options = d, this.id = d.id) } a.compose = function (f) { return b.compose(a, f) }; a.prototype.render =
                    function () {
                        t(this, "render"); var a = this, d = a.axis, b = d.horiz, e = d.logarithmic, D = a.options, A = D.color, x = h(D.zIndex, 0), E = D.events, q = {}, c = d.chart.renderer, B = D.label, m = a.label, u = D.to, g = D.from, F = D.value, l = a.svgElem, v = [], K = w(g) && w(u); v = w(F); var J = !l, M = { "class": "highcharts-plot-" + (K ? "band " : "line ") + (D.className || "") }, S = K ? "bands" : "lines"; e && (g = e.log2lin(g), u = e.log2lin(u), F = e.log2lin(F)); d.chart.styledMode || (v ? (M.stroke = A || "#999999", M["stroke-width"] = h(D.width, 1), D.dashStyle && (M.dashstyle = D.dashStyle)) : K && (M.fill =
                            A || "#e6ebf5", D.borderWidth && (M.stroke = D.borderColor, M["stroke-width"] = D.borderWidth))); q.zIndex = x; S += "-" + x; (e = d.plotLinesAndBandsGroups[S]) || (d.plotLinesAndBandsGroups[S] = e = c.g("plot-" + S).attr(q).add()); J && (a.svgElem = l = c.path().attr(M).add(e)); if (v) v = d.getPlotLinePath({ value: F, lineWidth: l.strokeWidth(), acrossPanes: D.acrossPanes }); else if (K) v = d.getPlotBandPath(g, u, D); else return; !a.eventsAdded && E && (n(E, function (c, g) { l.on(g, function (c) { E[g].apply(a, [c]) }) }), a.eventsAdded = !0); (J || !l.d) && v && v.length ?
                                l.attr({ d: v }) : l && (v ? (l.show(), l.animate({ d: v })) : l.d && (l.hide(), m && (a.label = m = m.destroy()))); B && (w(B.text) || w(B.formatter)) && v && v.length && 0 < d.width && 0 < d.height && !v.isFlat ? (B = r({ align: b && K && "center", x: b ? !K && 4 : 10, verticalAlign: !b && K && "middle", y: b ? K ? 16 : 10 : K ? 6 : -4, rotation: b && !K && 90 }, B), this.renderLabel(B, v, K, x)) : m && m.hide(); return a
                    }; a.prototype.renderLabel = function (a, d, b, h) {
                        var f = this.axis, k = f.chart.renderer, e = this.label; e || (this.label = e = k.text(this.getLabelText(a), 0, 0, a.useHTML).attr({
                            align: a.textAlign ||
                                a.align, rotation: a.rotation, "class": "highcharts-plot-" + (b ? "band" : "line") + "-label " + (a.className || ""), zIndex: h
                        }).add(), f.chart.styledMode || e.css(r({ textOverflow: "ellipsis" }, a.style))); h = d.xBounds || [d[0][1], d[1][1], b ? d[2][1] : d[0][1]]; d = d.yBounds || [d[0][2], d[1][2], b ? d[2][2] : d[0][2]]; b = I(h); k = I(d); e.align(a, !1, { x: b, y: k, width: z(h) - b, height: z(d) - k }); e.alignValue && "left" !== e.alignValue || e.css({ width: (90 === e.rotation ? f.height - (e.alignAttr.y - f.top) : f.width - (e.alignAttr.x - f.left)) + "px" }); e.show(!0)
                    }; a.prototype.getLabelText =
                        function (a) { return w(a.formatter) ? a.formatter.call(this) : a.text }; a.prototype.destroy = function () { G(this.axis.plotLinesAndBands, this); delete this.axis; y(this) }; return a
            }(); ""; ""; return e
        }); H(e, "Core/Tooltip.js", [e["Core/FormatUtilities.js"], e["Core/Globals.js"], e["Core/Renderer/RendererUtilities.js"], e["Core/Renderer/RendererRegistry.js"], e["Core/Utilities.js"]], function (b, e, z, C, w) {
            var y = b.format, G = e.doc, t = z.distribute, r = w.clamp, n = w.css, h = w.discardElement, a = w.extend, f = w.fireEvent, d = w.isArray, k = w.isNumber,
            p = w.isString, D = w.merge, A = w.pick, x = w.splat, E = w.syncTimeout; b = function () {
                function b(c, a) { this.allowShared = !0; this.container = void 0; this.crosshairs = []; this.distance = 0; this.isHidden = !0; this.isSticky = !1; this.now = {}; this.options = {}; this.outside = !1; this.chart = c; this.init(c, a) } b.prototype.applyFilter = function () {
                    var c = this.chart; c.renderer.definition({
                        tagName: "filter", attributes: { id: "drop-shadow-" + c.index, opacity: .5 }, children: [{ tagName: "feGaussianBlur", attributes: { "in": "SourceAlpha", stdDeviation: 1 } }, {
                            tagName: "feOffset",
                            attributes: { dx: 1, dy: 1 }
                        }, { tagName: "feComponentTransfer", children: [{ tagName: "feFuncA", attributes: { type: "linear", slope: .3 } }] }, { tagName: "feMerge", children: [{ tagName: "feMergeNode" }, { tagName: "feMergeNode", attributes: { "in": "SourceGraphic" } }] }]
                    })
                }; b.prototype.bodyFormatter = function (c) { return c.map(function (c) { var a = c.series.tooltipOptions; return (a[(c.point.formatPrefix || "point") + "Formatter"] || c.point.tooltipFormatter).call(c.point, a[(c.point.formatPrefix || "point") + "Format"] || "") }) }; b.prototype.cleanSplit =
                    function (c) { this.chart.series.forEach(function (a) { var d = a && a.tt; d && (!d.isActive || c ? a.tt = d.destroy() : d.isActive = !1) }) }; b.prototype.defaultFormatter = function (c) { var a = this.points || x(this); var d = [c.tooltipFooterHeaderFormatter(a[0])]; d = d.concat(c.bodyFormatter(a)); d.push(c.tooltipFooterHeaderFormatter(a[0], !0)); return d }; b.prototype.destroy = function () {
                        this.label && (this.label = this.label.destroy()); this.split && this.tt && (this.cleanSplit(!0), this.tt = this.tt.destroy()); this.renderer && (this.renderer = this.renderer.destroy(),
                            h(this.container)); w.clearTimeout(this.hideTimer); w.clearTimeout(this.tooltipTimeout)
                    }; b.prototype.getAnchor = function (c, a) {
                        var d = this.chart, b = d.pointer, g = d.inverted, f = d.plotTop, l = d.plotLeft, k, h, q = 0, e = 0; c = x(c); this.followPointer && a ? ("undefined" === typeof a.chartX && (a = b.normalize(a)), b = [a.chartX - l, a.chartY - f]) : c[0].tooltipPos ? b = c[0].tooltipPos : (c.forEach(function (c) {
                            k = c.series.yAxis; h = c.series.xAxis; q += c.plotX || 0; e += c.plotLow ? (c.plotLow + (c.plotHigh || 0)) / 2 : c.plotY || 0; h && k && (g ? (q += f + d.plotHeight - h.len -
                                h.pos, e += l + d.plotWidth - k.len - k.pos) : (q += h.pos - l, e += k.pos - f))
                        }), q /= c.length, e /= c.length, b = [g ? d.plotWidth - e : q, g ? d.plotHeight - q : e], this.shared && 1 < c.length && a && (g ? b[0] = a.chartX - l : b[1] = a.chartY - f)); return b.map(Math.round)
                    }; b.prototype.getClassName = function (c, a, d) { var b = c.series, g = b.options; return [this.options.className, "highcharts-label", d && "highcharts-tooltip-header", a ? "highcharts-tooltip-box" : "highcharts-tooltip", !d && "highcharts-color-" + A(c.colorIndex, b.colorIndex), g && g.className].filter(p).join(" ") };
                b.prototype.getLabel = function () {
                    var c = this, a = this.chart.styledMode, d = this.options, b = this.split && this.allowShared, g = d.style.pointerEvents || (this.shouldStickOnContact() ? "auto" : "none"), f, l = this.chart.renderer; if (c.label) { var k = !c.label.hasClass("highcharts-label"); (b && !k || !b && k) && c.destroy() } if (!this.label) {
                        if (this.outside) {
                            k = this.chart.options.chart.style; var h = C.getRendererType(); this.container = f = e.doc.createElement("div"); f.className = "highcharts-tooltip-container"; n(f, {
                                position: "absolute", top: "1px",
                                pointerEvents: g, zIndex: Math.max(this.options.style.zIndex || 0, (k && k.zIndex || 0) + 3)
                            }); e.doc.body.appendChild(f); this.renderer = l = new h(f, 0, 0, k, void 0, void 0, l.styledMode)
                        } b ? this.label = l.g("tooltip") : (this.label = l.label("", 0, 0, d.shape, void 0, void 0, d.useHTML, void 0, "tooltip").attr({ padding: d.padding, r: d.borderRadius }), a || this.label.attr({ fill: d.backgroundColor, "stroke-width": d.borderWidth }).css(d.style).css({ pointerEvents: g }).shadow(d.shadow)); a && d.shadow && (this.applyFilter(), this.label.attr({
                            filter: "url(#drop-shadow-" +
                                this.chart.index + ")"
                        })); if (c.outside && !c.split) { var q = this.label, p = q.xSetter, A = q.ySetter; q.xSetter = function (a) { p.call(q, c.distance); f.style.left = a + "px" }; q.ySetter = function (a) { A.call(q, c.distance); f.style.top = a + "px" } } this.label.attr({ zIndex: 8 }).add()
                    } return this.label
                }; b.prototype.getPosition = function (c, a, d) {
                    var b = this.chart, g = this.distance, f = {}, l = b.inverted && d.h || 0, m = this.outside, k = m ? G.documentElement.clientWidth - 2 * g : b.chartWidth, h = m ? Math.max(G.body.scrollHeight, G.documentElement.scrollHeight, G.body.offsetHeight,
                        G.documentElement.offsetHeight, G.documentElement.clientHeight) : b.chartHeight, q = b.pointer.getChartPosition(), e = function (l) { var f = "x" === l; return [l, f ? k : h, f ? c : a].concat(m ? [f ? c * q.scaleX : a * q.scaleY, f ? q.left - g + (d.plotX + b.plotLeft) * q.scaleX : q.top - g + (d.plotY + b.plotTop) * q.scaleY, 0, f ? k : h] : [f ? c : a, f ? d.plotX + b.plotLeft : d.plotY + b.plotTop, f ? b.plotLeft : b.plotTop, f ? b.plotLeft + b.plotWidth : b.plotTop + b.plotHeight]) }, B = e("y"), p = e("x"), n; e = !!d.negative; !b.polar && b.hoverSeries && b.hoverSeries.yAxis && b.hoverSeries.yAxis.reversed &&
                            (e = !e); var x = !this.followPointer && A(d.ttBelow, !b.inverted === e), D = function (c, a, d, b, k, h, v) { var u = m ? "y" === c ? g * q.scaleY : g * q.scaleX : g, F = (d - b) / 2, e = b < k - g, B = k + g + b < a, p = k - u - d + F; k = k + u - F; if (x && B) f[c] = k; else if (!x && e) f[c] = p; else if (e) f[c] = Math.min(v - b, 0 > p - l ? p : p - l); else if (B) f[c] = Math.max(h, k + l + d > a ? k : k + l); else return !1 }, E = function (c, a, d, b, l) { var m; l < g || l > a - g ? m = !1 : f[c] = l < d / 2 ? 1 : l > a - b / 2 ? a - b - 2 : l - d / 2; return m }, r = function (c) { var a = B; B = p; p = a; n = c }, Q = function () {
                                !1 !== D.apply(0, B) ? !1 !== E.apply(0, p) || n || (r(!0), Q()) : n ? f.x =
                                    f.y = 0 : (r(!0), Q())
                            }; (b.inverted || 1 < this.len) && r(); Q(); return f
                }; b.prototype.hide = function (c) { var a = this; w.clearTimeout(this.hideTimer); c = A(c, this.options.hideDelay); this.isHidden || (this.hideTimer = E(function () { a.getLabel().fadeOut(c ? void 0 : c); a.isHidden = !0 }, c)) }; b.prototype.init = function (c, a) { this.chart = c; this.options = a; this.crosshairs = []; this.now = { x: 0, y: 0 }; this.isHidden = !0; this.split = a.split && !c.inverted && !c.polar; this.shared = a.shared || this.split; this.outside = A(a.outside, !(!c.scrollablePixelsX && !c.scrollablePixelsY)) };
                b.prototype.shouldStickOnContact = function (c) { return !(this.followPointer || !this.options.stickOnContact || c && !this.chart.pointer.inClass(c.target, "highcharts-tooltip")) }; b.prototype.move = function (c, d, b, f) {
                    var g = this, m = g.now, l = !1 !== g.options.animation && !g.isHidden && (1 < Math.abs(c - m.x) || 1 < Math.abs(d - m.y)), k = g.followPointer || 1 < g.len; a(m, { x: l ? (2 * m.x + c) / 3 : c, y: l ? (m.y + d) / 2 : d, anchorX: k ? void 0 : l ? (2 * m.anchorX + b) / 3 : b, anchorY: k ? void 0 : l ? (m.anchorY + f) / 2 : f }); g.getLabel().attr(m); g.drawTracker(); l && (w.clearTimeout(this.tooltipTimeout),
                        this.tooltipTimeout = setTimeout(function () { g && g.move(c, d, b, f) }, 32))
                }; b.prototype.refresh = function (c, a) {
                    var b = this.chart, k = this.options, g = b.pointer, h = x(c), l = h[0], v = [], q = k.formatter || this.defaultFormatter, e = this.shared, B = b.styledMode, p = {}; if (k.enabled && l.series) {
                        w.clearTimeout(this.hideTimer); this.allowShared = !(!d(c) && c.series && c.series.noSharedTooltip); this.followPointer = !this.split && l.series.tooltipOptions.followPointer; c = this.getAnchor(c, a); var n = c[0], D = c[1]; e && this.allowShared ? (g.applyInactiveState(h),
                            h.forEach(function (c) { c.setState("hover"); v.push(c.getLabelConfig()) }), p = { x: l.category, y: l.y }, p.points = v) : p = l.getLabelConfig(); this.len = v.length; q = q.call(p, this); e = l.series; this.distance = A(e.tooltipOptions.distance, 16); if (!1 === q) this.hide(); else {
                                if (this.split && this.allowShared) this.renderSplit(q, h); else {
                                    var E = n, r = D; a && g.isDirectTouch && (E = a.chartX - b.plotLeft, r = a.chartY - b.plotTop); if (b.polar || !1 === e.options.clip || h.some(function (c) { return g.isDirectTouch || c.series.shouldShowTooltip(E, r) })) a = this.getLabel(),
                                        k.style.width && !B || a.css({ width: b.spacingBox.width + "px" }), a.attr({ text: q && q.join ? q.join("") : q }), a.addClass(this.getClassName(l), !0), B || a.attr({ stroke: k.borderColor || l.color || e.color || "#666666" }), this.updatePosition({ plotX: n, plotY: D, negative: l.negative, ttBelow: l.ttBelow, h: c[2] || 0 }); else { this.hide(); return }
                                } this.isHidden && this.label && this.label.attr({ opacity: 1 }).show(); this.isHidden = !1
                            } f(this, "refresh")
                    }
                }; b.prototype.renderSplit = function (c, d) {
                    function b(c, a, g, d, b) {
                        void 0 === b && (b = !0); g ? (a = U ? 0 : aa, c = r(c -
                            d / 2, T.left, T.right - d - (f.outside ? P : 0))) : (a -= X, c = b ? c - d - w : c + w, c = r(c, b ? c : T.left, T.right)); return { x: c, y: a }
                    } var f = this, g = f.chart, k = f.chart, l = k.chartWidth, h = k.chartHeight, q = k.plotHeight, e = k.plotLeft, B = k.plotTop, n = k.pointer, x = k.scrollablePixelsY; x = void 0 === x ? 0 : x; var D = k.scrollablePixelsX, E = k.scrollingContainer; E = void 0 === E ? { scrollLeft: 0, scrollTop: 0 } : E; var y = E.scrollLeft; E = E.scrollTop; var z = k.styledMode, w = f.distance, I = f.options, Q = f.options.positioner, T = f.outside && "number" !== typeof D ? G.documentElement.getBoundingClientRect() :
                        { left: y, right: y + l, top: E, bottom: E + h }, V = f.getLabel(), C = this.renderer || g.renderer, U = !(!g.xAxis[0] || !g.xAxis[0].opposite); g = n.getChartPosition(); var P = g.left; g = g.top; var X = B + E, O = 0, aa = q - x; p(c) && (c = [!1, c]); c = c.slice(0, d.length + 1).reduce(function (c, a, g) {
                            if (!1 !== a && "" !== a) {
                                g = d[g - 1] || { isHeader: !0, plotX: d[0].plotX, plotY: q, series: {} }; var l = g.isHeader, m = l ? f : g.series; a = a.toString(); var k = m.tt, h = g.isHeader; var v = g.series; k || (k = { padding: I.padding, r: I.borderRadius }, z || (k.fill = I.backgroundColor, k["stroke-width"] =
                                    I.borderWidth), k = C.label("", 0, 0, I[h ? "headerShape" : "shape"], void 0, void 0, I.useHTML).addClass(f.getClassName(g, !0, h)).attr(k).add(V)); k.isActive = !0; k.attr({ text: a }); z || k.css(I.style).shadow(I.shadow).attr({ stroke: I.borderColor || g.color || v.color || "#333333" }); m = m.tt = k; h = m.getBBox(); a = h.width + m.strokeWidth(); l && (O = h.height, aa += O, U && (X -= O)); v = g.plotX; v = void 0 === v ? 0 : v; k = g.plotY; k = void 0 === k ? 0 : k; var u = g.series; if (g.isHeader) { v = e + v; var F = B + q / 2 } else {
                                        var p = u.xAxis, n = u.yAxis; v = p.pos + r(v, -w, p.len + w); u.shouldShowTooltip(0,
                                            n.pos - B + k, { ignoreX: !0 }) && (F = n.pos + k)
                                    } v = r(v, T.left - w, T.right + w); "number" === typeof F ? (h = h.height + 1, k = Q ? Q.call(f, a, h, g) : b(v, F, l, a), c.push({ align: Q ? 0 : void 0, anchorX: v, anchorY: F, boxWidth: a, point: g, rank: A(k.rank, l ? 1 : 0), size: h, target: k.y, tt: m, x: k.x })) : m.isActive = !1
                            } return c
                        }, []); !Q && c.some(function (c) { var a = (f.outside ? P : 0) + c.anchorX; return a < T.left && a + c.boxWidth < T.right ? !0 : a < P - T.left + c.boxWidth && T.right - a > a }) && (c = c.map(function (c) {
                            var g = b(c.anchorX, c.anchorY, c.point.isHeader, c.boxWidth, !1); return a(c, {
                                target: g.y,
                                x: g.x
                            })
                        })); f.cleanSplit(); t(c, aa); var H = P, ca = P; c.forEach(function (c) { var a = c.x, g = c.boxWidth; c = c.isHeader; c || (f.outside && P + a < H && (H = P + a), !c && f.outside && H + g > ca && (ca = P + a)) }); c.forEach(function (c) { var a = c.x, g = c.anchorX, d = c.pos, b = c.point.isHeader; d = { visibility: "undefined" === typeof d ? "hidden" : "inherit", x: a, y: (d || 0) + X, anchorX: g, anchorY: c.anchorY }; if (f.outside && a < g) { var l = P - H; 0 < l && (b || (d.x = a + l, d.anchorX = g + l), b && (d.x = (ca - H) / 2, d.anchorX = g + l)) } c.tt.attr(d) }); c = f.container; x = f.renderer; f.outside && c && x && (k = V.getBBox(),
                            x.setSize(k.width + k.x, k.height + k.y, !1), c.style.left = H + "px", c.style.top = g + "px")
                }; b.prototype.drawTracker = function () {
                    if (this.shouldStickOnContact()) {
                        var c = this.chart, a = this.label, d = this.shared ? c.hoverPoints : c.hoverPoint; if (a && d) {
                            var b = { x: 0, y: 0, width: 0, height: 0 }; d = this.getAnchor(d); var g = a.getBBox(); d[0] += c.plotLeft - a.translateX; d[1] += c.plotTop - a.translateY; b.x = Math.min(0, d[0]); b.y = Math.min(0, d[1]); b.width = 0 > d[0] ? Math.max(Math.abs(d[0]), g.width - d[0]) : Math.max(Math.abs(d[0]), g.width); b.height = 0 > d[1] ?
                                Math.max(Math.abs(d[1]), g.height - Math.abs(d[1])) : Math.max(Math.abs(d[1]), g.height); this.tracker ? this.tracker.attr(b) : (this.tracker = a.renderer.rect(b).addClass("highcharts-tracker").add(a), c.styledMode || this.tracker.attr({ fill: "rgba(0,0,0,0)" }))
                        }
                    } else this.tracker && this.tracker.destroy()
                }; b.prototype.styledModeFormat = function (c) { return c.replace('style="font-size: 10px"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex} {series.options.className} {point.options.className}"') };
                b.prototype.tooltipFooterHeaderFormatter = function (c, a) {
                    var d = c.series, b = d.tooltipOptions, g = d.xAxis, h = g && g.dateTime; g = { isFooter: a, labelConfig: c }; var l = b.xDateFormat, v = b[a ? "footerFormat" : "headerFormat"]; f(this, "headerFormatter", g, function (a) {
                        h && !l && k(c.key) && (l = h.getXDateFormat(c.key, b.dateTimeLabelFormats)); h && l && (c.point && c.point.tooltipDateKeys || ["key"]).forEach(function (c) { v = v.replace("{point." + c + "}", "{point." + c + ":" + l + "}") }); d.chart.styledMode && (v = this.styledModeFormat(v)); a.text = y(v, { point: c, series: d },
                            this.chart)
                    }); return g.text
                }; b.prototype.update = function (c) { this.destroy(); D(!0, this.chart.options.tooltip.userOptions, c); this.init(this.chart, D(!0, this.options, c)) }; b.prototype.updatePosition = function (c) {
                    var a = this.chart, d = this.options, b = a.pointer, g = this.getLabel(); b = b.getChartPosition(); var f = (d.positioner || this.getPosition).call(this, g.width, g.height, c), l = c.plotX + a.plotLeft; c = c.plotY + a.plotTop; if (this.outside) {
                        d = d.borderWidth + 2 * this.distance; this.renderer.setSize(g.width + d, g.height + d, !1); if (1 !==
                            b.scaleX || 1 !== b.scaleY) n(this.container, { transform: "scale(".concat(b.scaleX, ", ").concat(b.scaleY, ")") }), l *= b.scaleX, c *= b.scaleY; l += b.left - f.x; c += b.top - f.y
                    } this.move(Math.round(f.x), Math.round(f.y || 0), l, c)
                }; return b
            }(); ""; return b
        }); H(e, "Core/Series/Point.js", [e["Core/Renderer/HTML/AST.js"], e["Core/Animation/AnimationUtilities.js"], e["Core/Defaults.js"], e["Core/FormatUtilities.js"], e["Core/Utilities.js"]], function (b, e, z, C, w) {
            var y = e.animObject, G = z.defaultOptions, t = C.format, r = w.addEvent, n = w.defined,
            h = w.erase, a = w.extend, f = w.fireEvent, d = w.getNestedProperty, k = w.isArray, p = w.isFunction, D = w.isNumber, A = w.isObject, x = w.merge, E = w.objectEach, q = w.pick, c = w.syncTimeout, B = w.removeEvent, m = w.uniqueKey; e = function () {
                function e() { this.category = void 0; this.formatPrefix = "point"; this.id = void 0; this.isNull = !1; this.percentage = this.options = this.name = void 0; this.selected = !1; this.total = this.shapeArgs = this.series = void 0; this.visible = !0; this.x = void 0 } e.prototype.animateBeforeDestroy = function () {
                    var c = this, d = {
                        x: c.startXPos,
                        opacity: 0
                    }, b = c.getGraphicalProps(); b.singular.forEach(function (a) { c[a] = c[a].animate("dataLabel" === a ? { x: c[a].startXPos, y: c[a].startYPos, opacity: 0 } : d) }); b.plural.forEach(function (g) { c[g].forEach(function (g) { g.element && g.animate(a({ x: c.startXPos }, g.startYPos ? { x: g.startXPos, y: g.startYPos } : {})) }) })
                }; e.prototype.applyOptions = function (c, d) {
                    var g = this.series, b = g.options.pointValKey || g.pointValKey; c = e.prototype.optionsToObject.call(this, c); a(this, c); this.options = this.options ? a(this.options, c) : c; c.group && delete this.group;
                    c.dataLabels && delete this.dataLabels; b && (this.y = e.prototype.getNestedProperty.call(this, b)); this.formatPrefix = (this.isNull = this.isValid && !this.isValid()) ? "null" : "point"; this.selected && (this.state = "select"); "name" in this && "undefined" === typeof d && g.xAxis && g.xAxis.hasNames && (this.x = g.xAxis.nameToX(this)); "undefined" === typeof this.x && g ? this.x = "undefined" === typeof d ? g.autoIncrement() : d : D(c.x) && g.options.relativeXValue && (this.x = g.autoIncrement(c.x)); return this
                }; e.prototype.destroy = function () {
                    function a() {
                        if (d.graphic ||
                            d.graphics || d.dataLabel || d.dataLabels) B(d), d.destroyElements(); for (e in d) d[e] = null
                    } var d = this, b = d.series, f = b.chart; b = b.options.dataSorting; var m = f.hoverPoints, k = y(d.series.chart.renderer.globalAnimation), e; d.legendItem && f.legend.destroyItem(d); m && (d.setState(), h(m, d), m.length || (f.hoverPoints = null)); if (d === f.hoverPoint) d.onMouseOut(); b && b.enabled ? (this.animateBeforeDestroy(), c(a, k.duration)) : a(); f.pointCount--
                }; e.prototype.destroyElements = function (c) {
                    var a = this; c = a.getGraphicalProps(c); c.singular.forEach(function (c) {
                        a[c] =
                        a[c].destroy()
                    }); c.plural.forEach(function (c) { a[c].forEach(function (c) { c.element && c.destroy() }); delete a[c] })
                }; e.prototype.firePointEvent = function (c, a, d) { var g = this, b = this.series.options; (b.point.events[c] || g.options && g.options.events && g.options.events[c]) && g.importEvents(); "click" === c && b.allowPointSelect && (d = function (c) { g.select && g.select(null, c.ctrlKey || c.metaKey || c.shiftKey) }); f(g, c, a, d) }; e.prototype.getClassName = function () {
                    return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") +
                        (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + ("undefined" !== typeof this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "")
                }; e.prototype.getGraphicalProps = function (c) {
                    var a = this, g = [], d = { singular: [], plural: [] }, b; c = c || { graphic: 1, dataLabel: 1 }; c.graphic && g.push("graphic", "shadowGroup"); c.dataLabel && g.push("dataLabel",
                        "dataLabelPath", "dataLabelUpper", "connector"); for (b = g.length; b--;) { var f = g[b]; a[f] && d.singular.push(f) } ["graphic", "dataLabel", "connector"].forEach(function (g) { var b = g + "s"; c[g] && a[b] && d.plural.push(b) }); return d
                }; e.prototype.getLabelConfig = function () { return { x: this.category, y: this.y, color: this.color, colorIndex: this.colorIndex, key: this.name || this.category, series: this.series, point: this, percentage: this.percentage, total: this.total || this.stackTotal } }; e.prototype.getNestedProperty = function (c) {
                    if (c) return 0 ===
                        c.indexOf("custom.") ? d(c, this.options) : this[c]
                }; e.prototype.getZone = function () { var c = this.series, a = c.zones; c = c.zoneAxis || "y"; var d, b = 0; for (d = a[b]; this[c] >= d.value;)d = a[++b]; this.nonZonedColor || (this.nonZonedColor = this.color); this.color = d && d.color && !this.options.color ? d.color : this.nonZonedColor; return d }; e.prototype.hasNewShapeType = function () { return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType }; e.prototype.init = function (c, a, d) {
                    this.series = c; this.applyOptions(a,
                        d); this.id = n(this.id) ? this.id : m(); this.resolveColor(); c.chart.pointCount++; f(this, "afterInit"); return this
                }; e.prototype.isValid = function () { return null !== this.x && D(this.y) }; e.prototype.optionsToObject = function (c) {
                    var a = this.series, g = a.options.keys, d = g || a.pointArrayMap || ["y"], b = d.length, f = {}, m = 0, h = 0; if (D(c) || null === c) f[d[0]] = c; else if (k(c)) for (!g && c.length > b && (a = typeof c[0], "string" === a ? f.name = c[0] : "number" === a && (f.x = c[0]), m++); h < b;)g && "undefined" === typeof c[m] || (0 < d[h].indexOf(".") ? e.prototype.setNestedProperty(f,
                        c[m], d[h]) : f[d[h]] = c[m]), m++, h++; else "object" === typeof c && (f = c, c.dataLabels && (a._hasPointLabels = !0), c.marker && (a._hasPointMarkers = !0)); return f
                }; e.prototype.resolveColor = function () {
                    var c = this.series, a = c.chart.styledMode; var d = c.chart.options.chart.colorCount; delete this.nonZonedColor; if (c.options.colorByPoint) { if (!a) { d = c.options.colors || c.chart.options.colors; var b = d[c.colorCounter]; d = d.length } a = c.colorCounter; c.colorCounter++; c.colorCounter === d && (c.colorCounter = 0) } else a || (b = c.color), a = c.colorIndex;
                    this.colorIndex = q(this.options.colorIndex, a); this.color = q(this.options.color, b)
                }; e.prototype.setNestedProperty = function (c, a, d) { d.split(".").reduce(function (c, d, g, b) { c[d] = b.length - 1 === g ? a : A(c[d], !0) ? c[d] : {}; return c[d] }, c); return c }; e.prototype.shouldDraw = function () { return !this.isNull }; e.prototype.tooltipFormatter = function (c) {
                    var a = this.series, d = a.tooltipOptions, g = q(d.valueDecimals, ""), b = d.valuePrefix || "", f = d.valueSuffix || ""; a.chart.styledMode && (c = a.chart.tooltip.styledModeFormat(c)); (a.pointArrayMap ||
                        ["y"]).forEach(function (a) { a = "{point." + a; if (b || f) c = c.replace(RegExp(a + "}", "g"), b + a + "}" + f); c = c.replace(RegExp(a + "}", "g"), a + ":,." + g + "f}") }); return t(c, { point: this, series: this.series }, a.chart)
                }; e.prototype.update = function (c, a, d, b) {
                    function g() {
                        f.applyOptions(c); var g = m && f.hasMockGraphic; g = null === f.y ? !g : g; m && g && (f.graphic = m.destroy(), delete f.hasMockGraphic); A(c, !0) && (m && m.element && c && c.marker && "undefined" !== typeof c.marker.symbol && (f.graphic = m.destroy()), c && c.dataLabels && f.dataLabel && (f.dataLabel = f.dataLabel.destroy()),
                            f.connector && (f.connector = f.connector.destroy())); e = f.index; l.updateParallelArrays(f, e); h.data[e] = A(h.data[e], !0) || A(c, !0) ? f.options : q(c, h.data[e]); l.isDirty = l.isDirtyData = !0; !l.fixedBox && l.hasCartesianSeries && (k.isDirtyBox = !0); "point" === h.legendType && (k.isDirtyLegend = !0); a && k.redraw(d)
                    } var f = this, l = f.series, m = f.graphic, k = l.chart, h = l.options, e; a = q(a, !0); !1 === b ? g() : f.firePointEvent("update", { options: c }, g)
                }; e.prototype.remove = function (c, a) { this.series.removePoint(this.series.data.indexOf(this), c, a) };
                e.prototype.select = function (c, a) {
                    var d = this, g = d.series, b = g.chart; this.selectedStaging = c = q(c, !d.selected); d.firePointEvent(c ? "select" : "unselect", { accumulate: a }, function () { d.selected = d.options.selected = c; g.options.data[g.data.indexOf(d)] = d.options; d.setState(c && "select"); a || b.getSelectedPoints().forEach(function (c) { var a = c.series; c.selected && c !== d && (c.selected = c.options.selected = !1, a.options.data[a.data.indexOf(c)] = c.options, c.setState(b.hoverPoints && a.options.inactiveOtherPoints ? "inactive" : ""), c.firePointEvent("unselect")) }) });
                    delete this.selectedStaging
                }; e.prototype.onMouseOver = function (c) { var a = this.series.chart, d = a.pointer; c = c ? d.normalize(c) : d.getChartCoordinatesFromPoint(this, a.inverted); d.runPointActions(c, this) }; e.prototype.onMouseOut = function () { var c = this.series.chart; this.firePointEvent("mouseOut"); this.series.options.inactiveOtherPoints || (c.hoverPoints || []).forEach(function (c) { c.setState() }); c.hoverPoints = c.hoverPoint = null }; e.prototype.importEvents = function () {
                    if (!this.hasImportedEvents) {
                        var c = this, a = x(c.series.options.point,
                            c.options).events; c.events = a; E(a, function (a, d) { p(a) && r(c, d, a) }); this.hasImportedEvents = !0
                    }
                }; e.prototype.setState = function (c, d) {
                    var g = this.series, m = this.state, k = g.options.states[c || "normal"] || {}, h = G.plotOptions[g.type].marker && g.options.marker, e = h && !1 === h.enabled, u = h && h.states && h.states[c || "normal"] || {}, B = !1 === u.enabled, F = this.marker || {}, p = g.chart, n = h && g.markerAttribs, A = g.halo, x, E = g.stateMarkerGraphic; c = c || ""; if (!(c === this.state && !d || this.selected && "select" !== c || !1 === k.enabled || c && (B || e && !1 === u.enabled) ||
                        c && F.states && F.states[c] && !1 === F.states[c].enabled)) {
                            this.state = c; n && (x = g.markerAttribs(this, c)); if (this.graphic && !this.hasMockGraphic) {
                                m && this.graphic.removeClass("highcharts-point-" + m); c && this.graphic.addClass("highcharts-point-" + c); if (!p.styledMode) {
                                    m = g.pointAttribs(this, c); var Q = q(p.options.chart.animation, k.animation); var r = m.opacity; g.options.inactiveOtherPoints && D(r) && ((this.dataLabels || []).forEach(function (c) { c && !c.hasClass("highcharts-data-label-hidden") && c.animate({ opacity: r }, Q) }), this.connector &&
                                        this.connector.animate({ opacity: r }, Q)); this.graphic.animate(m, Q)
                                } x && this.graphic.animate(x, q(p.options.chart.animation, u.animation, h.animation)); E && E.hide()
                            } else {
                                if (c && u) { h = F.symbol || g.symbol; E && E.currentSymbol !== h && (E = E.destroy()); if (x) if (E) E[d ? "animate" : "attr"]({ x: x.x, y: x.y }); else h && (g.stateMarkerGraphic = E = p.renderer.symbol(h, x.x, x.y, x.width, x.height).add(g.markerGroup), E.currentSymbol = h); !p.styledMode && E && "inactive" !== this.state && E.attr(g.pointAttribs(this, c)) } E && (E[c && this.isInside ? "show" : "hide"](),
                                    E.element.point = this, E.addClass(this.getClassName(), !0))
                            } k = k.halo; x = (E = this.graphic || E) && E.visibility || "inherit"; k && k.size && E && "hidden" !== x && !this.isCluster ? (A || (g.halo = A = p.renderer.path().add(E.parentGroup)), A.show()[d ? "animate" : "attr"]({ d: this.haloPath(k.size) }), A.attr({ "class": "highcharts-halo highcharts-color-" + q(this.colorIndex, g.colorIndex) + (this.className ? " " + this.className : ""), visibility: x, zIndex: -1 }), A.point = this, p.styledMode || A.attr(a({ fill: this.color || g.color, "fill-opacity": k.opacity },
                                b.filterUserAttributes(k.attributes || {})))) : A && A.point && A.point.haloPath && A.animate({ d: A.point.haloPath(0) }, null, A.hide); f(this, "afterSetState", { state: c })
                    }
                }; e.prototype.haloPath = function (c) { return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - c, this.plotY - c, 2 * c, 2 * c) }; return e
            }(); ""; return e
        }); H(e, "Core/Pointer.js", [e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Tooltip.js"], e["Core/Utilities.js"]], function (b, e, z, C) {
            var w = b.parse, y = e.charts, G = e.noop, t = C.addEvent, r = C.attr,
            n = C.css, h = C.defined, a = C.extend, f = C.find, d = C.fireEvent, k = C.isNumber, p = C.isObject, D = C.objectEach, A = C.offset, x = C.pick, E = C.splat; b = function () {
                function b(c, a) { this.lastValidTouch = {}; this.pinchDown = []; this.runChartClick = !1; this.eventsToUnbind = []; this.chart = c; this.hasDragged = !1; this.options = a; this.init(c, a) } b.prototype.applyInactiveState = function (c) {
                    var a = [], d; (c || []).forEach(function (c) {
                        d = c.series; a.push(d); d.linkedParent && a.push(d.linkedParent); d.linkedSeries && (a = a.concat(d.linkedSeries)); d.navigatorSeries &&
                            a.push(d.navigatorSeries)
                    }); this.chart.series.forEach(function (c) { -1 === a.indexOf(c) ? c.setState("inactive", !0) : c.options.inactiveOtherPoints && c.setAllPointsToState("inactive") })
                }; b.prototype.destroy = function () {
                    var c = this; this.eventsToUnbind.forEach(function (c) { return c() }); this.eventsToUnbind = []; e.chartCount || (b.unbindDocumentMouseUp && (b.unbindDocumentMouseUp = b.unbindDocumentMouseUp()), b.unbindDocumentTouchEnd && (b.unbindDocumentTouchEnd = b.unbindDocumentTouchEnd())); clearInterval(c.tooltipTimeout);
                    D(c, function (a, d) { c[d] = void 0 })
                }; b.prototype.getSelectionMarkerAttrs = function (c, a) { var b = this, f = { args: { chartX: c, chartY: a }, attrs: {}, shapeType: "rect" }; d(this, "getSelectionMarkerAttrs", f, function (d) { var g = b.chart, f = b.mouseDownX; f = void 0 === f ? 0 : f; var m = b.mouseDownY; m = void 0 === m ? 0 : m; var k = b.zoomHor, h = b.zoomVert; d = d.attrs; d.x = g.plotLeft; d.y = g.plotTop; d.width = k ? 1 : g.plotWidth; d.height = h ? 1 : g.plotHeight; k && (g = c - f, d.width = Math.abs(g), d.x = (0 < g ? 0 : g) + f); h && (g = a - m, d.height = Math.abs(g), d.y = (0 < g ? 0 : g) + m) }); return f };
                b.prototype.drag = function (c) {
                    var a = this.chart, d = a.options.chart, b = a.plotLeft, g = a.plotTop, f = a.plotWidth, l = a.plotHeight, k = this.mouseDownX || 0, h = this.mouseDownY || 0, e = p(d.panning) ? d.panning && d.panning.enabled : d.panning, q = d.panKey && c[d.panKey + "Key"], n = c.chartX, A = c.chartY, x = this.selectionMarker; x && x.touch || (n < b ? n = b : n > b + f && (n = b + f), A < g ? A = g : A > g + l && (A = g + l), this.hasDragged = Math.sqrt(Math.pow(k - n, 2) + Math.pow(h - A, 2)), 10 < this.hasDragged && (b = a.isInsidePlot(k - b, h - g, { visiblePlotOnly: !0 }), A = this.getSelectionMarkerAttrs(n,
                        A), n = A.shapeType, A = A.attrs, !a.hasCartesianSeries && !a.mapView || !this.zoomX && !this.zoomY || !b || q || x || (this.selectionMarker = x = a.renderer[n](), x.attr({ "class": "highcharts-selection-marker", zIndex: 7 }).add(), a.styledMode || x.attr({ fill: d.selectionMarkerFill || w("#335cad").setOpacity(.25).get() })), x && x.attr(A), b && !x && e && a.pan(c, d.panning)))
                }; b.prototype.dragStart = function (c) { var a = this.chart; a.mouseIsDown = c.type; a.cancelClick = !1; a.mouseDownX = this.mouseDownX = c.chartX; a.mouseDownY = this.mouseDownY = c.chartY }; b.prototype.getSelectionBox =
                    function (c) { var a = { args: { marker: c }, result: {} }; d(this, "getSelectionBox", a, function (a) { a.result = { x: c.attr ? +c.attr("x") : c.x, y: c.attr ? +c.attr("y") : c.y, width: c.attr ? c.attr("width") : c.width, height: c.attr ? c.attr("height") : c.height } }); return a.result }; b.prototype.drop = function (c) {
                        var b = this, f = this.chart, e = this.hasPinched; if (this.selectionMarker) {
                            var g = this.getSelectionBox(this.selectionMarker), q = g.x, l = g.y, v = g.width, p = g.height, A = { originalEvent: c, xAxis: [], yAxis: [], x: q, y: l, width: v, height: p }, x = !!f.mapView; if (this.hasDragged ||
                                e) f.axes.forEach(function (a) { if (a.zoomEnabled && h(a.min) && (e || b[{ xAxis: "zoomX", yAxis: "zoomY" }[a.coll]]) && k(q) && k(l) && k(v) && k(p)) { var d = a.horiz, g = "touchend" === c.type ? a.minPixelPadding : 0, f = a.toValue((d ? q : l) + g); d = a.toValue((d ? q + v : l + p) - g); A[a.coll].push({ axis: a, min: Math.min(f, d), max: Math.max(f, d) }); x = !0 } }), x && d(f, "selection", A, function (c) { f.zoom(a(c, e ? { animation: !1 } : null)) }); k(f.index) && (this.selectionMarker = this.selectionMarker.destroy()); e && this.scaleGroups()
                        } f && k(f.index) && (n(f.container, { cursor: f._cursor }),
                            f.cancelClick = 10 < this.hasDragged, f.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
                    }; b.prototype.findNearestKDPoint = function (c, a, d) {
                        var b; c.forEach(function (c) {
                            var g = !(c.noSharedTooltip && a) && 0 > c.options.findNearestPointBy.indexOf("y"); c = c.searchPoint(d, g); if ((g = p(c, !0) && c.series) && !(g = !p(b, !0))) { g = b.distX - c.distX; var f = b.dist - c.dist, k = (c.series.group && c.series.group.zIndex) - (b.series.group && b.series.group.zIndex); g = 0 < (0 !== g && a ? g : 0 !== f ? f : 0 !== k ? k : b.series.index > c.series.index ? -1 : 1) } g &&
                                (b = c)
                        }); return b
                    }; b.prototype.getChartCoordinatesFromPoint = function (c, a) { var d = c.series, b = d.xAxis; d = d.yAxis; var g = c.shapeArgs; if (b && d) { var f = x(c.clientX, c.plotX), l = c.plotY || 0; c.isNode && g && k(g.x) && k(g.y) && (f = g.x, l = g.y); return a ? { chartX: d.len + d.pos - l, chartY: b.len + b.pos - f } : { chartX: f + b.pos, chartY: l + d.pos } } if (g && g.x && g.y) return { chartX: g.x, chartY: g.y } }; b.prototype.getChartPosition = function () {
                        if (this.chartPosition) return this.chartPosition; var c = this.chart.container, a = A(c); this.chartPosition = {
                            left: a.left,
                            top: a.top, scaleX: 1, scaleY: 1
                        }; var d = c.offsetWidth; c = c.offsetHeight; 2 < d && 2 < c && (this.chartPosition.scaleX = a.width / d, this.chartPosition.scaleY = a.height / c); return this.chartPosition
                    }; b.prototype.getCoordinates = function (c) { var a = { xAxis: [], yAxis: [] }; this.chart.axes.forEach(function (d) { a[d.isXAxis ? "xAxis" : "yAxis"].push({ axis: d, value: d.toValue(c[d.horiz ? "chartX" : "chartY"]) }) }); return a }; b.prototype.getHoverData = function (c, a, b, k, g, h) {
                        var l = []; k = !(!k || !c); var m = function (c) {
                            return c.visible && !(!g && c.directTouch) &&
                                x(c.options.enableMouseTracking, !0)
                        }, e = { chartX: h ? h.chartX : void 0, chartY: h ? h.chartY : void 0, shared: g }; d(this, "beforeGetHoverData", e); var q = a && !a.stickyTracking ? [a] : b.filter(function (c) { return c.stickyTracking && (e.filter || m)(c) }); var u = k || !h ? c : this.findNearestKDPoint(q, g, h); a = u && u.series; u && (g && !a.noSharedTooltip ? (q = b.filter(function (c) { return e.filter ? e.filter(c) : m(c) && !c.noSharedTooltip }), q.forEach(function (c) {
                            var a = f(c.points, function (c) { return c.x === u.x && !c.isNull }); p(a) && (c.boosted && c.boost && (a =
                                c.boost.getPoint(a)), l.push(a))
                        })) : l.push(u)); e = { hoverPoint: u }; d(this, "afterGetHoverData", e); return { hoverPoint: e.hoverPoint, hoverSeries: a, hoverPoints: l }
                    }; b.prototype.getPointFromEvent = function (c) { c = c.target; for (var a; c && !a;)a = c.point, c = c.parentNode; return a }; b.prototype.onTrackerMouseOut = function (c) {
                        c = c.relatedTarget || c.toElement; var a = this.chart.hoverSeries; this.isDirectTouch = !1; if (!(!a || !c || a.stickyTracking || this.inClass(c, "highcharts-tooltip") || this.inClass(c, "highcharts-series-" + a.index) && this.inClass(c,
                            "highcharts-tracker"))) a.onMouseOut()
                    }; b.prototype.inClass = function (c, a) { for (var d; c;) { if (d = r(c, "class")) { if (-1 !== d.indexOf(a)) return !0; if (-1 !== d.indexOf("highcharts-container")) return !1 } c = c.parentElement } }; b.prototype.init = function (c, a) { this.options = a; this.chart = c; this.runChartClick = !(!a.chart.events || !a.chart.events.click); this.pinchDown = []; this.lastValidTouch = {}; z && (c.tooltip = new z(c, a.tooltip)); this.setDOMEvents() }; b.prototype.normalize = function (c, d) {
                        var b = c.touches, f = b ? b.length ? b.item(0) : x(b.changedTouches,
                            c.changedTouches)[0] : c; d || (d = this.getChartPosition()); b = f.pageX - d.left; f = f.pageY - d.top; b /= d.scaleX; f /= d.scaleY; return a(c, { chartX: Math.round(b), chartY: Math.round(f) })
                    }; b.prototype.onContainerClick = function (c) {
                        var b = this.chart, f = b.hoverPoint; c = this.normalize(c); var k = b.plotLeft, g = b.plotTop; b.cancelClick || (f && this.inClass(c.target, "highcharts-tracker") ? (d(f.series, "click", a(c, { point: f })), b.hoverPoint && f.firePointEvent("click", c)) : (a(c, this.getCoordinates(c)), b.isInsidePlot(c.chartX - k, c.chartY - g, { visiblePlotOnly: !0 }) &&
                            d(b, "click", c)))
                    }; b.prototype.onContainerMouseDown = function (c) { var a = 1 === ((c.buttons || c.button) & 1); c = this.normalize(c); if (e.isFirefox && 0 !== c.button) this.onContainerMouseMove(c); if ("undefined" === typeof c.button || a) this.zoomOption(c), a && c.preventDefault && c.preventDefault(), this.dragStart(c) }; b.prototype.onContainerMouseLeave = function (c) {
                        var a = y[x(b.hoverChartIndex, -1)], d = this.chart.tooltip; c = this.normalize(c); a && (c.relatedTarget || c.toElement) && (a.pointer.reset(), a.pointer.chartPosition = void 0); d && !d.isHidden &&
                            this.reset()
                    }; b.prototype.onContainerMouseEnter = function (c) { delete this.chartPosition }; b.prototype.onContainerMouseMove = function (c) {
                        var a = this.chart, d = a.tooltip; c = this.normalize(c); this.setHoverChartIndex(); c.preventDefault || (c.returnValue = !1); ("mousedown" === a.mouseIsDown || this.touchSelect(c)) && this.drag(c); a.openMenu || !this.inClass(c.target, "highcharts-tracker") && !a.isInsidePlot(c.chartX - a.plotLeft, c.chartY - a.plotTop, { visiblePlotOnly: !0 }) || d && d.shouldStickOnContact(c) || (this.inClass(c.target, "highcharts-no-tooltip") ?
                            this.reset(!1, 0) : this.runPointActions(c))
                    }; b.prototype.onDocumentTouchEnd = function (c) { var a = y[x(b.hoverChartIndex, -1)]; a && a.pointer.drop(c) }; b.prototype.onContainerTouchMove = function (c) { if (this.touchSelect(c)) this.onContainerMouseMove(c); else this.touch(c) }; b.prototype.onContainerTouchStart = function (c) { if (this.touchSelect(c)) this.onContainerMouseDown(c); else this.zoomOption(c), this.touch(c, !0) }; b.prototype.onDocumentMouseMove = function (c) {
                        var a = this.chart, d = a.tooltip, b = this.chartPosition; c = this.normalize(c,
                            b); !b || a.isInsidePlot(c.chartX - a.plotLeft, c.chartY - a.plotTop, { visiblePlotOnly: !0 }) || d && d.shouldStickOnContact(c) || this.inClass(c.target, "highcharts-tracker") || this.reset()
                    }; b.prototype.onDocumentMouseUp = function (c) { var a = y[x(b.hoverChartIndex, -1)]; a && a.pointer.drop(c) }; b.prototype.pinch = function (c) {
                        var b = this, f = b.chart, k = b.pinchDown, g = c.touches || [], h = g.length, l = b.lastValidTouch, e = b.hasZoom, q = {}, p = 1 === h && (b.inClass(c.target, "highcharts-tracker") && f.runTrackerClick || b.runChartClick), n = {}, A = b.chart.tooltip;
                        A = 1 === h && x(A && A.options.followTouchMove, !0); var E = b.selectionMarker; 1 < h ? b.initiated = !0 : A && (b.initiated = !1); e && b.initiated && !p && !1 !== c.cancelable && c.preventDefault();[].map.call(g, function (c) { return b.normalize(c) }); "touchstart" === c.type ? ([].forEach.call(g, function (c, a) { k[a] = { chartX: c.chartX, chartY: c.chartY } }), l.x = [k[0].chartX, k[1] && k[1].chartX], l.y = [k[0].chartY, k[1] && k[1].chartY], f.axes.forEach(function (c) {
                            if (c.zoomEnabled) {
                                var a = f.bounds[c.horiz ? "h" : "v"], d = c.minPixelPadding, b = c.toPixels(Math.min(x(c.options.min,
                                    c.dataMin), c.dataMin)), g = c.toPixels(Math.max(x(c.options.max, c.dataMax), c.dataMax)), l = Math.max(b, g); a.min = Math.min(c.pos, Math.min(b, g) - d); a.max = Math.max(c.pos + c.len, l + d)
                            }
                        }), b.res = !0) : A ? this.runPointActions(b.normalize(c)) : k.length && (d(f, "touchpan", { originalEvent: c }, function () { E || (b.selectionMarker = E = a({ destroy: G, touch: !0 }, f.plotBox)); b.pinchTranslate(k, g, q, E, n, l); b.hasPinched = e; b.scaleGroups(q, n) }), b.res && (b.res = !1, this.reset(!1, 0)))
                    }; b.prototype.pinchTranslate = function (c, a, d, b, g, f) {
                        this.zoomHor &&
                        this.pinchTranslateDirection(!0, c, a, d, b, g, f); this.zoomVert && this.pinchTranslateDirection(!1, c, a, d, b, g, f)
                    }; b.prototype.pinchTranslateDirection = function (c, a, d, b, g, f, l, k) {
                        var h = this.chart, m = c ? "x" : "y", e = c ? "X" : "Y", v = "chart" + e, q = c ? "width" : "height", u = h["plot" + (c ? "Left" : "Top")], p = h.inverted, F = h.bounds[c ? "h" : "v"], n = 1 === a.length, A = a[0][v], B = !n && a[1][v]; a = function () { "number" === typeof t && 20 < Math.abs(A - B) && (D = k || Math.abs(r - t) / Math.abs(A - B)); E = (u - r) / D + A; x = h["plot" + (c ? "Width" : "Height")] / D }; var x, E, D = k || 1, r = d[0][v],
                            t = !n && d[1][v]; a(); d = E; if (d < F.min) { d = F.min; var y = !0 } else d + x > F.max && (d = F.max - x, y = !0); y ? (r -= .8 * (r - l[m][0]), "number" === typeof t && (t -= .8 * (t - l[m][1])), a()) : l[m] = [r, t]; p || (f[m] = E - u, f[q] = x); f = p ? 1 / D : D; g[q] = x; g[m] = d; b[p ? c ? "scaleY" : "scaleX" : "scale" + e] = D; b["translate" + e] = f * u + (r - f * A)
                    }; b.prototype.reset = function (c, a) {
                        var d = this.chart, b = d.hoverSeries, g = d.hoverPoint, f = d.hoverPoints, l = d.tooltip, k = l && l.shared ? f : g; c && k && E(k).forEach(function (a) { a.series.isCartesian && "undefined" === typeof a.plotX && (c = !1) }); if (c) l && k &&
                            E(k).length && (l.refresh(k), l.shared && f ? f.forEach(function (c) { c.setState(c.state, !0); c.series.isCartesian && (c.series.xAxis.crosshair && c.series.xAxis.drawCrosshair(null, c), c.series.yAxis.crosshair && c.series.yAxis.drawCrosshair(null, c)) }) : g && (g.setState(g.state, !0), d.axes.forEach(function (c) { c.crosshair && g.series[c.coll] === c && c.drawCrosshair(null, g) }))); else {
                                if (g) g.onMouseOut(); f && f.forEach(function (c) { c.setState() }); if (b) b.onMouseOut(); l && l.hide(a); this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove());
                            d.axes.forEach(function (c) { c.hideCrosshair() }); this.hoverX = d.hoverPoints = d.hoverPoint = null
                        }
                    }; b.prototype.runPointActions = function (c, a, d) {
                        var k = this.chart, g = k.tooltip && k.tooltip.options.enabled ? k.tooltip : void 0, h = g ? g.shared : !1, l = a || k.hoverPoint, m = l && l.series || k.hoverSeries; a = this.getHoverData(l, m, k.series, (!c || "touchmove" !== c.type) && (!!a || m && m.directTouch && this.isDirectTouch), h, c); l = a.hoverPoint; m = a.hoverSeries; var e = a.hoverPoints; a = m && m.tooltipOptions.followPointer && !m.tooltipOptions.split; var q =
                            h && m && !m.noSharedTooltip; if (l && (d || l !== k.hoverPoint || g && g.isHidden)) { (k.hoverPoints || []).forEach(function (c) { -1 === e.indexOf(c) && c.setState() }); if (k.hoverSeries !== m) m.onMouseOver(); this.applyInactiveState(e); (e || []).forEach(function (c) { c.setState("hover") }); k.hoverPoint && k.hoverPoint.firePointEvent("mouseOut"); if (!l.series) return; k.hoverPoints = e; k.hoverPoint = l; l.firePointEvent("mouseOver", void 0, function () { g && l && g.refresh(q ? e : l, c) }) } else a && g && !g.isHidden && (d = g.getAnchor([{}], c), k.isInsidePlot(d[0],
                                d[1], { visiblePlotOnly: !0 }) && g.updatePosition({ plotX: d[0], plotY: d[1] })); this.unDocMouseMove || (this.unDocMouseMove = t(k.container.ownerDocument, "mousemove", function (c) { var a = y[b.hoverChartIndex]; if (a) a.pointer.onDocumentMouseMove(c) }), this.eventsToUnbind.push(this.unDocMouseMove)); k.axes.forEach(function (a) { var d = x((a.crosshair || {}).snap, !0), b; d && ((b = k.hoverPoint) && b.series[a.coll] === a || (b = f(e, function (c) { return c.series && c.series[a.coll] === a }))); b || !d ? a.drawCrosshair(c, b) : a.hideCrosshair() })
                    }; b.prototype.scaleGroups =
                        function (c, a) { var d = this.chart; d.series.forEach(function (b) { var g = c || b.getPlotBox(); b.group && (b.xAxis && b.xAxis.zoomEnabled || d.mapView) && (b.group.attr(g), b.markerGroup && (b.markerGroup.attr(g), b.markerGroup.clip(a ? d.clipRect : null)), b.dataLabelsGroup && b.dataLabelsGroup.attr(g)) }); d.clipRect.attr(a || d.clipBox) }; b.prototype.setDOMEvents = function () {
                            var c = this, a = this.chart.container, d = a.ownerDocument; a.onmousedown = this.onContainerMouseDown.bind(this); a.onmousemove = this.onContainerMouseMove.bind(this); a.onclick =
                                this.onContainerClick.bind(this); this.eventsToUnbind.push(t(a, "mouseenter", this.onContainerMouseEnter.bind(this))); this.eventsToUnbind.push(t(a, "mouseleave", this.onContainerMouseLeave.bind(this))); b.unbindDocumentMouseUp || (b.unbindDocumentMouseUp = t(d, "mouseup", this.onDocumentMouseUp.bind(this))); for (var f = this.chart.renderTo.parentElement; f && "BODY" !== f.tagName;)this.eventsToUnbind.push(t(f, "scroll", function () { delete c.chartPosition })), f = f.parentElement; e.hasTouch && (this.eventsToUnbind.push(t(a, "touchstart",
                                    this.onContainerTouchStart.bind(this), { passive: !1 })), this.eventsToUnbind.push(t(a, "touchmove", this.onContainerTouchMove.bind(this), { passive: !1 })), b.unbindDocumentTouchEnd || (b.unbindDocumentTouchEnd = t(d, "touchend", this.onDocumentTouchEnd.bind(this), { passive: !1 })))
                        }; b.prototype.setHoverChartIndex = function () { var c = this.chart, a = e.charts[x(b.hoverChartIndex, -1)]; if (a && a !== c) a.pointer.onContainerMouseLeave({ relatedTarget: c.container }); a && a.mouseIsDown || (b.hoverChartIndex = c.index) }; b.prototype.touch = function (c,
                            a) { var d = this.chart, b; this.setHoverChartIndex(); if (1 === c.touches.length) if (c = this.normalize(c), (b = d.isInsidePlot(c.chartX - d.plotLeft, c.chartY - d.plotTop, { visiblePlotOnly: !0 })) && !d.openMenu) { a && this.runPointActions(c); if ("touchmove" === c.type) { a = this.pinchDown; var g = a[0] ? 4 <= Math.sqrt(Math.pow(a[0].chartX - c.chartX, 2) + Math.pow(a[0].chartY - c.chartY, 2)) : !1 } x(g, !0) && this.pinch(c) } else a && this.reset(); else 2 === c.touches.length && this.pinch(c) }; b.prototype.touchSelect = function (c) {
                                return !(!this.chart.options.chart.zooming.singleTouch ||
                                    !c.touches || 1 !== c.touches.length)
                            }; b.prototype.zoomOption = function (c) { var a = this.chart, d = a.options.chart; a = a.inverted; var b = d.zooming.type || ""; /touch/.test(c.type) && (b = x(d.zooming.pinchType, b)); this.zoomX = c = /x/.test(b); this.zoomY = d = /y/.test(b); this.zoomHor = c && !a || d && a; this.zoomVert = d && !a || c && a; this.hasZoom = c || d }; return b
            }(); ""; return b
        }); H(e, "Core/MSPointer.js", [e["Core/Globals.js"], e["Core/Pointer.js"], e["Core/Utilities.js"]], function (b, e, z) {
            function C() {
                var a = []; a.item = function (a) { return this[a] };
                f(p, function (d) { a.push({ pageX: d.pageX, pageY: d.pageY, target: d.target }) }); return a
            } function w(a, d, b, f) { var c = G[e.hoverChartIndex || NaN]; "touch" !== a.pointerType && a.pointerType !== a.MSPOINTER_TYPE_TOUCH || !c || (c = c.pointer, f(a), c[d]({ type: b, target: a.currentTarget, preventDefault: r, touches: C() })) } var y = this && this.__extends || function () {
                var a = function (d, b) {
                    a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, c) { a.__proto__ = c } || function (a, c) { for (var d in c) c.hasOwnProperty(d) && (a[d] = c[d]) }; return a(d,
                        b)
                }; return function (d, b) { function f() { this.constructor = d } a(d, b); d.prototype = null === b ? Object.create(b) : (f.prototype = b.prototype, new f) }
            }(), G = b.charts, t = b.doc, r = b.noop, n = b.win, h = z.addEvent, a = z.css, f = z.objectEach, d = z.pick, k = z.removeEvent, p = {}, D = !!n.PointerEvent; return function (f) {
                function e() { return null !== f && f.apply(this, arguments) || this } y(e, f); e.isRequired = function () { return !(b.hasTouch || !n.PointerEvent && !n.MSPointerEvent) }; e.prototype.batchMSEvents = function (a) {
                    a(this.chart.container, D ? "pointerdown" :
                        "MSPointerDown", this.onContainerPointerDown); a(this.chart.container, D ? "pointermove" : "MSPointerMove", this.onContainerPointerMove); a(t, D ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
                }; e.prototype.destroy = function () { this.batchMSEvents(k); f.prototype.destroy.call(this) }; e.prototype.init = function (d, b) { f.prototype.init.call(this, d, b); this.hasZoom && a(d.container, { "-ms-touch-action": "none", "touch-action": "none" }) }; e.prototype.onContainerPointerDown = function (a) {
                    w(a, "onContainerTouchStart", "touchstart",
                        function (a) { p[a.pointerId] = { pageX: a.pageX, pageY: a.pageY, target: a.currentTarget } })
                }; e.prototype.onContainerPointerMove = function (a) { w(a, "onContainerTouchMove", "touchmove", function (a) { p[a.pointerId] = { pageX: a.pageX, pageY: a.pageY }; p[a.pointerId].target || (p[a.pointerId].target = a.currentTarget) }) }; e.prototype.onDocumentPointerUp = function (a) { w(a, "onDocumentTouchEnd", "touchend", function (a) { delete p[a.pointerId] }) }; e.prototype.setDOMEvents = function () {
                    var a = this.chart.tooltip; f.prototype.setDOMEvents.call(this);
                    (this.hasZoom || d(a && a.options.followTouchMove, !0)) && this.batchMSEvents(h)
                }; return e
            }(e)
        }); H(e, "Core/Legend/Legend.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/FormatUtilities.js"], e["Core/Globals.js"], e["Core/Series/Point.js"], e["Core/Renderer/RendererUtilities.js"], e["Core/Utilities.js"]], function (b, e, z, C, w, y) {
            var G = b.animObject, t = b.setAnimation, r = e.format, n = z.marginNames, h = w.distribute, a = y.addEvent, f = y.createElement, d = y.css, k = y.defined, p = y.discardElement, D = y.find, A = y.fireEvent, x = y.isNumber,
            E = y.merge, q = y.pick, c = y.relativeLength, B = y.stableSort, m = y.syncTimeout; b = function () {
                function b(a, c) {
                    this.allItems = []; this.contentGroup = this.box = void 0; this.display = !1; this.group = void 0; this.offsetWidth = this.maxLegendWidth = this.maxItemWidth = this.legendWidth = this.legendHeight = this.lastLineHeight = this.lastItemY = this.itemY = this.itemX = this.itemMarginTop = this.itemMarginBottom = this.itemHeight = this.initialItemY = 0; this.options = void 0; this.padding = 0; this.pages = []; this.proximate = !1; this.scrollGroup = void 0; this.widthOption =
                        this.totalItemWidth = this.titleHeight = this.symbolWidth = this.symbolHeight = 0; this.chart = a; this.init(a, c)
                } b.prototype.init = function (c, d) { this.chart = c; this.setOptions(d); d.enabled && (this.render(), a(this.chart, "endResize", function () { this.legend.positionCheckboxes() }), this.proximate ? this.unchartrender = a(this.chart, "render", function () { this.legend.proximatePositions(); this.legend.positionItems() }) : this.unchartrender && this.unchartrender()) }; b.prototype.setOptions = function (a) {
                    var c = q(a.padding, 8); this.options =
                        a; this.chart.styledMode || (this.itemStyle = a.itemStyle, this.itemHiddenStyle = E(this.itemStyle, a.itemHiddenStyle)); this.itemMarginTop = a.itemMarginTop || 0; this.itemMarginBottom = a.itemMarginBottom || 0; this.padding = c; this.initialItemY = c - 5; this.symbolWidth = q(a.symbolWidth, 16); this.pages = []; this.proximate = "proximate" === a.layout && !this.chart.inverted; this.baseline = void 0
                }; b.prototype.update = function (a, c) {
                    var d = this.chart; this.setOptions(E(!0, this.options, a)); this.destroy(); d.isDirtyLegend = d.isDirtyBox = !0; q(c,
                        !0) && d.redraw(); A(this, "afterUpdate")
                }; b.prototype.colorizeItem = function (a, c) {
                    var d = a.legendItem || {}, b = d.group, g = d.label, f = d.line; d = d.symbol; if (b) b[c ? "removeClass" : "addClass"]("highcharts-legend-item-hidden"); if (!this.chart.styledMode) { var k = this.options; b = this.itemHiddenStyle.color; k = c ? k.itemStyle.color : b; var h = c ? a.color || b : b, m = a.options && a.options.marker, e = { fill: h }; g && g.css({ fill: k, color: k }); f && f.attr({ stroke: h }); d && (m && d.isMarker && (e = a.pointAttribs(), c || (e.stroke = e.fill = b)), d.attr(e)) } A(this, "afterColorizeItem",
                        { item: a, visible: c })
                }; b.prototype.positionItems = function () { this.allItems.forEach(this.positionItem, this); this.chart.isResizing || this.positionCheckboxes() }; b.prototype.positionItem = function (a) {
                    var c = this, d = a.legendItem || {}, b = d.group, g = d.x; g = void 0 === g ? 0 : g; d = d.y; d = void 0 === d ? 0 : d; var f = this.options, h = f.symbolPadding, m = !f.rtl; f = a.checkbox; b && b.element && (h = { translateX: m ? g : this.legendWidth - g - 2 * h - 4, translateY: d }, b[k(b.translateY) ? "animate" : "attr"](h, void 0, function () { A(c, "afterPositionItem", { item: a }) }));
                    f && (f.x = g, f.y = d)
                }; b.prototype.destroyItem = function (a) { for (var c = a.checkbox, d = a.legendItem || {}, b = 0, g = ["group", "label", "line", "symbol"]; b < g.length; b++) { var f = g[b]; d[f] && (d[f] = d[f].destroy()) } c && p(c); a.legendItem = void 0 }; b.prototype.destroy = function () { for (var a = 0, c = this.getAllItems(); a < c.length; a++)this.destroyItem(c[a]); a = 0; for (c = "clipRect up down pager nav box title group".split(" "); a < c.length; a++) { var d = c[a]; this[d] && (this[d] = this[d].destroy()) } this.display = null }; b.prototype.positionCheckboxes = function () {
                    var a =
                        this.group && this.group.alignAttr, c = this.clipHeight || this.legendHeight, b = this.titleHeight; if (a) { var f = a.translateY; this.allItems.forEach(function (g) { var l = g.checkbox; if (l) { var k = f + b + l.y + (this.scrollOffset || 0) + 3; d(l, { left: a.translateX + g.checkboxOffset + l.x - 20 + "px", top: k + "px", display: this.proximate || k > f - 6 && k < f + c - 6 ? "" : "none" }) } }, this) }
                }; b.prototype.renderTitle = function () {
                    var a = this.options, c = this.padding, d = a.title, b = 0; d.text && (this.title || (this.title = this.chart.renderer.label(d.text, c - 3, c - 4, void 0, void 0,
                        void 0, a.useHTML, void 0, "legend-title").attr({ zIndex: 1 }), this.chart.styledMode || this.title.css(d.style), this.title.add(this.group)), d.width || this.title.css({ width: this.maxLegendWidth + "px" }), a = this.title.getBBox(), b = a.height, this.offsetWidth = a.width, this.contentGroup.attr({ translateY: b })); this.titleHeight = b
                }; b.prototype.setText = function (a) { var c = this.options; a.legendItem.label.attr({ text: c.labelFormat ? r(c.labelFormat, a, this.chart) : c.labelFormatter.call(a) }) }; b.prototype.renderItem = function (a) {
                    var c =
                        a.legendItem = a.legendItem || {}, d = this.chart, b = d.renderer, f = this.options, g = this.symbolWidth, k = f.symbolPadding || 0, h = this.itemStyle, m = this.itemHiddenStyle, e = "horizontal" === f.layout ? q(f.itemDistance, 20) : 0, p = !f.rtl, n = !a.series, u = !n && a.series.drawLegendSymbol ? a.series : a, A = u.options, x = this.createCheckboxForItem && A && A.showCheckbox, B = f.useHTML, D = a.options.className, r = c.label; A = g + k + e + (x ? 20 : 0); r || (c.group = b.g("legend-item").addClass("highcharts-" + u.type + "-series highcharts-color-" + a.colorIndex + (D ? " " + D : "") + (n ?
                            " highcharts-series-" + a.index : "")).attr({ zIndex: 1 }).add(this.scrollGroup), c.label = r = b.text("", p ? g + k : -k, this.baseline || 0, B), d.styledMode || r.css(E(a.visible ? h : m)), r.attr({ align: p ? "left" : "right", zIndex: 2 }).add(c.group), this.baseline || (this.fontMetrics = b.fontMetrics(d.styledMode ? 12 : h.fontSize, r), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, r.attr("y", this.baseline), this.symbolHeight = f.symbolHeight || this.fontMetrics.f, f.squareSymbol && (this.symbolWidth = q(f.symbolWidth, Math.max(this.symbolHeight,
                                16)), A = this.symbolWidth + k + e + (x ? 20 : 0), p && r.attr("x", this.symbolWidth + k))), u.drawLegendSymbol(this, a), this.setItemEvents && this.setItemEvents(a, r, B)); x && !a.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(a); this.colorizeItem(a, a.visible); !d.styledMode && h.width || r.css({ width: (f.itemWidth || this.widthOption || d.spacingBox.width) - A + "px" }); this.setText(a); d = r.getBBox(); b = this.fontMetrics && this.fontMetrics.h || 0; a.itemWidth = a.checkboxOffset = f.itemWidth || c.labelWidth || d.width + A; this.maxItemWidth =
                                    Math.max(this.maxItemWidth, a.itemWidth); this.totalItemWidth += a.itemWidth; this.itemHeight = a.itemHeight = Math.round(c.labelHeight || (d.height > 1.5 * b ? d.height : b))
                }; b.prototype.layoutItem = function (a) {
                    var c = this.options, d = this.padding, b = "horizontal" === c.layout, f = a.itemHeight, g = this.itemMarginBottom, k = this.itemMarginTop, h = b ? q(c.itemDistance, 20) : 0, m = this.maxLegendWidth; c = c.alignColumns && this.totalItemWidth > m ? this.maxItemWidth : a.itemWidth; var e = a.legendItem || {}; b && this.itemX - d + c > m && (this.itemX = d, this.lastLineHeight &&
                        (this.itemY += k + this.lastLineHeight + g), this.lastLineHeight = 0); this.lastItemY = k + this.itemY + g; this.lastLineHeight = Math.max(f, this.lastLineHeight); e.x = this.itemX; e.y = this.itemY; b ? this.itemX += c : (this.itemY += k + f + g, this.lastLineHeight = f); this.offsetWidth = this.widthOption || Math.max((b ? this.itemX - d - (a.checkbox ? 0 : h) : c) + d, this.offsetWidth)
                }; b.prototype.getAllItems = function () {
                    var a = []; this.chart.series.forEach(function (c) {
                        var d = c && c.options; c && q(d.showInLegend, k(d.linkedTo) ? !1 : void 0, !0) && (a = a.concat((c.legendItem ||
                            {}).labels || ("point" === d.legendType ? c.data : c)))
                    }); A(this, "afterGetAllItems", { allItems: a }); return a
                }; b.prototype.getAlignment = function () { var a = this.options; return this.proximate ? a.align.charAt(0) + "tv" : a.floating ? "" : a.align.charAt(0) + a.verticalAlign.charAt(0) + a.layout.charAt(0) }; b.prototype.adjustMargins = function (a, c) {
                    var d = this.chart, b = this.options, f = this.getAlignment(); f && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function (g, l) {
                        g.test(f) && !k(a[l]) && (d[n[l]] = Math.max(d[n[l]],
                            d.legend[(l + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][l] * b[l % 2 ? "x" : "y"] + q(b.margin, 12) + c[l] + (d.titleOffset[l] || 0)))
                    })
                }; b.prototype.proximatePositions = function () {
                    var a = this.chart, c = [], d = "left" === this.options.align; this.allItems.forEach(function (b) {
                        var f; var g = d; if (b.yAxis) {
                            b.xAxis.options.reversed && (g = !g); b.points && (f = D(g ? b.points : b.points.slice(0).reverse(), function (a) { return x(a.plotY) })); g = this.itemMarginTop + b.legendItem.label.getBBox().height + this.itemMarginBottom; var l = b.yAxis.top - a.plotTop;
                            b.visible ? (f = f ? f.plotY : b.yAxis.height, f += l - .3 * g) : f = l + b.yAxis.height; c.push({ target: f, size: g, item: b })
                        }
                    }, this); for (var b, f = 0, k = h(c, a.plotHeight); f < k.length; f++) { var m = k[f]; b = m.item.legendItem || {}; m.pos && (b.y = a.plotTop - a.spacing[0] + m.pos) }
                }; b.prototype.render = function () {
                    var a = this.chart, d = a.renderer, b = this.options, f = this.padding, k = this.getAllItems(), h = this.group, m = this.box; this.itemX = f; this.itemY = this.initialItemY; this.lastItemY = this.offsetWidth = 0; this.widthOption = c(b.width, a.spacingBox.width - f); var e =
                        a.spacingBox.width - 2 * f - b.x; -1 < ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) && (e /= 2); this.maxLegendWidth = this.widthOption || e; h || (this.group = h = d.g("legend").addClass(b.className || "").attr({ zIndex: 7 }).add(), this.contentGroup = d.g().attr({ zIndex: 1 }).add(h), this.scrollGroup = d.g().add(this.contentGroup)); this.renderTitle(); B(k, function (a, c) { return (a.options && a.options.legendIndex || 0) - (c.options && c.options.legendIndex || 0) }); b.reversed && k.reverse(); this.allItems = k; this.display = e = !!k.length; this.itemHeight =
                            this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0; k.forEach(this.renderItem, this); k.forEach(this.layoutItem, this); k = (this.widthOption || this.offsetWidth) + f; var q = this.lastItemY + this.lastLineHeight + this.titleHeight; q = this.handleOverflow(q); q += f; m || (this.box = m = d.rect().addClass("highcharts-legend-box").attr({ r: b.borderRadius }).add(h)); a.styledMode || m.attr({ stroke: b.borderColor, "stroke-width": b.borderWidth || 0, fill: b.backgroundColor || "none" }).shadow(b.shadow); if (0 < k && 0 < q) m[m.placed ? "animate" :
                                "attr"](m.crisp.call({}, { x: 0, y: 0, width: k, height: q }, m.strokeWidth())); h[e ? "show" : "hide"](); a.styledMode && "none" === h.getStyle("display") && (k = q = 0); this.legendWidth = k; this.legendHeight = q; e && this.align(); this.proximate || this.positionItems(); A(this, "afterRender")
                }; b.prototype.align = function (a) {
                    void 0 === a && (a = this.chart.spacingBox); var c = this.chart, d = this.options, b = a.y; /(lth|ct|rth)/.test(this.getAlignment()) && 0 < c.titleOffset[0] ? b += c.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && 0 < c.titleOffset[2] &&
                        (b -= c.titleOffset[2]); b !== a.y && (a = E(a, { y: b })); c.hasRendered || (this.group.placed = !1); this.group.align(E(d, { width: this.legendWidth, height: this.legendHeight, verticalAlign: this.proximate ? "top" : d.verticalAlign }), !0, a)
                }; b.prototype.handleOverflow = function (a) {
                    var c = this, d = this.chart, b = d.renderer, f = this.options, g = f.y, k = "top" === f.verticalAlign, h = this.padding, m = f.maxHeight, e = f.navigation, p = q(e.animation, !0), n = e.arrowSize || 12, u = this.pages, A = this.allItems, x = function (a) {
                        "number" === typeof a ? y.attr({ height: a }) :
                        y && (c.clipRect = y.destroy(), c.contentGroup.clip()); c.contentGroup.div && (c.contentGroup.div.style.clip = a ? "rect(" + h + "px,9999px," + (h + a) + "px,0)" : "auto")
                    }, B = function (a) { c[a] = b.circle(0, 0, 1.3 * n).translate(n / 2, n / 2).add(t); d.styledMode || c[a].attr("fill", "rgba(0,0,0,0.0001)"); return c[a] }, D, r, E; g = d.spacingBox.height + (k ? -g : g) - h; var t = this.nav, y = this.clipRect; "horizontal" !== f.layout || "middle" === f.verticalAlign || f.floating || (g /= 2); m && (g = Math.min(g, m)); u.length = 0; a && 0 < g && a > g && !1 !== e.enabled ? (this.clipHeight = D =
                        Math.max(g - 20 - this.titleHeight - h, 0), this.currentPage = q(this.currentPage, 1), this.fullHeight = a, A.forEach(function (a, c) { E = a.legendItem || {}; a = E.y || 0; var d = Math.round(E.label.getBBox().height), b = u.length; if (!b || a - u[b - 1] > D && (r || a) !== u[b - 1]) u.push(r || a), b++; E.pageIx = b - 1; r && ((A[c - 1].legendItem || {}).pageIx = b - 1); c === A.length - 1 && a + d - u[b - 1] > D && d <= D && (u.push(a), E.pageIx = b); a !== r && (r = a) }), y || (y = c.clipRect = b.clipRect(0, h, 9999, 0), c.contentGroup.clip(y)), x(D), t || (this.nav = t = b.g().attr({ zIndex: 1 }).add(this.group),
                            this.up = b.symbol("triangle", 0, 0, n, n).add(t), B("upTracker").on("click", function () { c.scroll(-1, p) }), this.pager = b.text("", 15, 10).addClass("highcharts-legend-navigation"), !d.styledMode && e.style && this.pager.css(e.style), this.pager.add(t), this.down = b.symbol("triangle-down", 0, 0, n, n).add(t), B("downTracker").on("click", function () { c.scroll(1, p) })), c.scroll(0), a = g) : t && (x(), this.nav = t.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0); return a
                }; b.prototype.scroll = function (a, c) {
                    var d = this, b = this.chart,
                    f = this.pages, g = f.length, k = this.clipHeight, h = this.options.navigation, e = this.pager, p = this.padding, n = this.currentPage + a; n > g && (n = g); 0 < n && ("undefined" !== typeof c && t(c, b), this.nav.attr({ translateX: p, translateY: k + this.padding + 7 + this.titleHeight, visibility: "inherit" }), [this.up, this.upTracker].forEach(function (a) { a.attr({ "class": 1 === n ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" }) }), e.attr({ text: n + "/" + g }), [this.down, this.downTracker].forEach(function (a) {
                        a.attr({
                            x: 18 + this.pager.getBBox().width,
                            "class": n === g ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                        })
                    }, this), b.styledMode || (this.up.attr({ fill: 1 === n ? h.inactiveColor : h.activeColor }), this.upTracker.css({ cursor: 1 === n ? "default" : "pointer" }), this.down.attr({ fill: n === g ? h.inactiveColor : h.activeColor }), this.downTracker.css({ cursor: n === g ? "default" : "pointer" })), this.scrollOffset = -f[n - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: this.scrollOffset }), this.currentPage = n, this.positionCheckboxes(), a = G(q(c, b.renderer.globalAnimation,
                        !0)), m(function () { A(d, "afterScroll", { currentPage: n }) }, a.duration))
                }; b.prototype.setItemEvents = function (a, c, d) {
                    var b = this, f = a.legendItem || {}, g = b.chart.renderer.boxWrapper, l = a instanceof C, k = "highcharts-legend-" + (l ? "point" : "series") + "-active", h = b.chart.styledMode, m = function (c) { b.allItems.forEach(function (d) { a !== d && [d].concat(d.linkedSeries || []).forEach(function (a) { a.setState(c, !l) }) }) }, e = 0; for (d = d ? [c, f.symbol] : [f.group]; e < d.length; e++)if (f = d[e]) f.on("mouseover", function () {
                        a.visible && m("inactive"); a.setState("hover");
                        a.visible && g.addClass(k); h || c.css(b.options.itemHoverStyle)
                    }).on("mouseout", function () { b.chart.styledMode || c.css(E(a.visible ? b.itemStyle : b.itemHiddenStyle)); m(""); g.removeClass(k); a.setState() }).on("click", function (c) { var d = function () { a.setVisible && a.setVisible(); m(a.visible ? "inactive" : "") }; g.removeClass(k); c = { browserEvent: c }; a.firePointEvent ? a.firePointEvent("legendItemClick", c, d) : A(a, "legendItemClick", c, d) })
                }; b.prototype.createCheckboxForItem = function (c) {
                    c.checkbox = f("input", {
                        type: "checkbox", className: "highcharts-legend-checkbox",
                        checked: c.selected, defaultChecked: c.selected
                    }, this.options.itemCheckboxStyle, this.chart.container); a(c.checkbox, "click", function (a) { A(c.series || c, "checkboxClick", { checked: a.target.checked, item: c }, function () { c.select() }) })
                }; return b
            }(); ""; return b
        }); H(e, "Core/Series/SeriesRegistry.js", [e["Core/Globals.js"], e["Core/Defaults.js"], e["Core/Series/Point.js"], e["Core/Utilities.js"]], function (b, e, z, C) {
            var w = e.defaultOptions, y = C.extendClass, G = C.merge, t; (function (e) {
                function n(b, a) {
                    var f = w.plotOptions || {},
                    d = a.defaultOptions, k = a.prototype; k.type = b; k.pointClass || (k.pointClass = z); d && (f[b] = d); e.seriesTypes[b] = a
                } e.seriesTypes = b.seriesTypes; e.registerSeriesType = n; e.seriesType = function (b, a, f, d, k) { var h = w.plotOptions || {}; a = a || ""; h[b] = G(h[a], f); n(b, y(e.seriesTypes[a] || function () { }, d)); e.seriesTypes[b].prototype.type = b; k && (e.seriesTypes[b].prototype.pointClass = y(z, k)); return e.seriesTypes[b] }
            })(t || (t = {})); return t
        }); H(e, "Core/Chart/Chart.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Axis/Axis.js"],
        e["Core/Defaults.js"], e["Core/FormatUtilities.js"], e["Core/Foundation.js"], e["Core/Globals.js"], e["Core/Legend/Legend.js"], e["Core/MSPointer.js"], e["Core/Pointer.js"], e["Core/Renderer/RendererRegistry.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Time.js"], e["Core/Utilities.js"], e["Core/Renderer/HTML/AST.js"]], function (b, e, z, C, w, y, G, t, r, n, h, a, f, d, k) {
            var p = b.animate, D = b.animObject, A = b.setAnimation, x = z.defaultOptions, E = z.defaultTime, q = C.numberFormat, c = w.registerEventOptions,
            B = y.charts, m = y.doc, u = y.marginNames, g = y.svg, F = y.win, l = h.seriesTypes, v = d.addEvent, K = d.attr, J = d.cleanRecursively, M = d.createElement, I = d.css, R = d.defined, Z = d.discardElement, L = d.erase, da = d.error, H = d.extend, ba = d.find, N = d.fireEvent, Q = d.getStyle, T = d.isArray, V = d.isNumber, W = d.isObject, U = d.isString, P = d.merge, X = d.objectEach, O = d.pick, aa = d.pInt, fa = d.relativeLength, ca = d.removeEvent, ea = d.splat, ha = d.syncTimeout, ja = d.uniqueKey; b = function () {
                function b(a, c, b) {
                    this.series = this.renderTo = this.renderer = this.pointer = this.pointCount =
                        this.plotWidth = this.plotTop = this.plotLeft = this.plotHeight = this.plotBox = this.options = this.numberFormatter = this.margin = this.legend = this.labelCollectors = this.isResizing = this.index = this.eventOptions = this.container = this.colorCounter = this.clipBox = this.chartWidth = this.chartHeight = this.bounds = this.axisOffset = this.axes = void 0; this.sharedClips = {}; this.yAxis = this.xAxis = this.userOptions = this.titleOffset = this.time = this.symbolCounter = this.spacingBox = this.spacing = void 0; this.getArgs(a, c, b)
                } b.chart = function (a, c,
                    d) { return new b(a, c, d) }; b.prototype.getArgs = function (a, c, b) { U(a) || a.nodeName ? (this.renderTo = a, this.init(c, b)) : this.init(a, c) }; b.prototype.init = function (a, b) {
                        var d = a.plotOptions || {}; N(this, "init", { args: arguments }, function () {
                            var g = P(x, a), l = g.chart; X(g.plotOptions, function (a, c) { W(a) && (a.tooltip = d[c] && P(d[c].tooltip) || void 0) }); g.tooltip.userOptions = a.chart && a.chart.forExport && a.tooltip.userOptions || a.tooltip; this.userOptions = a; this.margin = []; this.spacing = []; this.bounds = { h: {}, v: {} }; this.labelCollectors =
                                []; this.callback = b; this.isResizing = 0; var k = l.zooming = l.zooming || {}; a.chart && !a.chart.zooming && (k.resetButton = l.resetZoomButton); k.key = O(k.key, l.zoomKey); k.pinchType = O(k.pinchType, l.pinchType); k.singleTouch = O(k.singleTouch, l.zoomBySingleTouch); k.type = O(k.type, l.zoomType); this.options = g; this.axes = []; this.series = []; this.time = a.time && Object.keys(a.time).length ? new f(a.time) : y.time; this.numberFormatter = l.numberFormatter || q; this.styledMode = l.styledMode; this.hasCartesianSeries = l.showAxes; this.index = B.length;
                            B.push(this); y.chartCount++; c(this, l); this.xAxis = []; this.yAxis = []; this.pointCount = this.colorCounter = this.symbolCounter = 0; N(this, "afterInit"); this.firstRender()
                        })
                    }; b.prototype.initSeries = function (a) { var c = this.options.chart; c = a.type || c.type || c.defaultSeriesType; var b = l[c]; b || da(17, !0, this, { missingModuleFor: c }); c = new b; "function" === typeof c.init && c.init(this, a); return c }; b.prototype.setSeriesData = function () {
                        this.getSeriesOrderByLinks().forEach(function (a) {
                            a.points || a.data || !a.enabledDataSorting || a.setData(a.options.data,
                                !1)
                        })
                    }; b.prototype.getSeriesOrderByLinks = function () { return this.series.concat().sort(function (a, c) { return a.linkedSeries.length || c.linkedSeries.length ? c.linkedSeries.length - a.linkedSeries.length : 0 }) }; b.prototype.orderSeries = function (a) { var c = this.series; a = a || 0; for (var b = c.length; a < b; ++a)c[a] && (c[a].index = a, c[a].name = c[a].getName()) }; b.prototype.isInsidePlot = function (a, c, b) {
                        void 0 === b && (b = {}); var d = this.inverted, f = this.plotBox, g = this.plotLeft, l = this.plotTop, k = this.scrollablePlotBox, h = 0; var m = 0; b.visiblePlotOnly &&
                            this.scrollingContainer && (m = this.scrollingContainer, h = m.scrollLeft, m = m.scrollTop); var e = b.series; f = b.visiblePlotOnly && k || f; k = b.inverted ? c : a; c = b.inverted ? a : c; a = { x: k, y: c, isInsidePlot: !0, options: b }; if (!b.ignoreX) { var q = e && (d && !this.polar ? e.yAxis : e.xAxis) || { pos: g, len: Infinity }; k = b.paneCoordinates ? q.pos + k : g + k; k >= Math.max(h + g, q.pos) && k <= Math.min(h + g + f.width, q.pos + q.len) || (a.isInsidePlot = !1) } !b.ignoreY && a.isInsidePlot && (d = b.axis && !b.axis.isXAxis && b.axis || e && (d ? e.xAxis : e.yAxis) || { pos: l, len: Infinity }, b = b.paneCoordinates ?
                                d.pos + c : l + c, b >= Math.max(m + l, d.pos) && b <= Math.min(m + l + f.height, d.pos + d.len) || (a.isInsidePlot = !1)); N(this, "afterIsInsidePlot", a); return a.isInsidePlot
                    }; b.prototype.redraw = function (a) {
                        N(this, "beforeRedraw"); var c = this.hasCartesianSeries ? this.axes : this.colorAxis || [], b = this.series, d = this.pointer, f = this.legend, g = this.userOptions.legend, l = this.renderer, k = l.isHidden(), h = [], m = this.isDirtyBox, e = this.isDirtyLegend; this.setResponsive && this.setResponsive(!1); A(this.hasRendered ? a : !1, this); k && this.temporaryDisplay();
                        this.layOutTitles(); for (a = b.length; a--;) { var q = b[a]; if (q.options.stacking || q.options.centerInCategory) { var p = !0; if (q.isDirty) { var v = !0; break } } } if (v) for (a = b.length; a--;)q = b[a], q.options.stacking && (q.isDirty = !0); b.forEach(function (a) { a.isDirty && ("point" === a.options.legendType ? ("function" === typeof a.updateTotals && a.updateTotals(), e = !0) : g && (g.labelFormatter || g.labelFormat) && (e = !0)); a.isDirtyData && N(a, "updatedData") }); e && f && f.options.enabled && (f.render(), this.isDirtyLegend = !1); p && this.getStacks(); c.forEach(function (a) {
                            a.updateNames();
                            a.setScale()
                        }); this.getMargins(); c.forEach(function (a) { a.isDirty && (m = !0) }); c.forEach(function (a) { var c = a.min + "," + a.max; a.extKey !== c && (a.extKey = c, h.push(function () { N(a, "afterSetExtremes", H(a.eventArgs, a.getExtremes())); delete a.eventArgs })); (m || p) && a.redraw() }); m && this.drawChartBox(); N(this, "predraw"); b.forEach(function (a) { (m || a.isDirty) && a.visible && a.redraw(); a.isDirtyData = !1 }); d && d.reset(!0); l.draw(); N(this, "redraw"); N(this, "render"); k && this.temporaryDisplay(!0); h.forEach(function (a) { a.call() })
                    };
                b.prototype.get = function (a) { function c(c) { return c.id === a || c.options && c.options.id === a } for (var b = this.series, d = ba(this.axes, c) || ba(this.series, c), f = 0; !d && f < b.length; f++)d = ba(b[f].points || [], c); return d }; b.prototype.getAxes = function () { var a = this, c = this.options, b = c.xAxis = ea(c.xAxis || {}); c = c.yAxis = ea(c.yAxis || {}); N(this, "getAxes"); b.forEach(function (a, c) { a.index = c; a.isX = !0 }); c.forEach(function (a, c) { a.index = c }); b.concat(c).forEach(function (c) { new e(a, c) }); N(this, "afterGetAxes") }; b.prototype.getSelectedPoints =
                    function () { return this.series.reduce(function (a, c) { c.getPointsCollection().forEach(function (c) { O(c.selectedStaging, c.selected) && a.push(c) }); return a }, []) }; b.prototype.getSelectedSeries = function () { return this.series.filter(function (a) { return a.selected }) }; b.prototype.setTitle = function (a, c, b) { this.applyDescription("title", a); this.applyDescription("subtitle", c); this.applyDescription("caption", void 0); this.layOutTitles(b) }; b.prototype.applyDescription = function (a, c) {
                        var b = this, d = "title" === a ? {
                            color: "#333333",
                            fontSize: this.options.isStock ? "16px" : "18px"
                        } : { color: "#666666" }; d = this.options[a] = P(!this.styledMode && { style: d }, this.options[a], c); var f = this[a]; f && c && (this[a] = f = f.destroy()); d && !f && (f = this.renderer.text(d.text, 0, 0, d.useHTML).attr({ align: d.align, "class": "highcharts-" + a, zIndex: d.zIndex || 4 }).add(), f.update = function (c) { b[{ title: "setTitle", subtitle: "setSubtitle", caption: "setCaption" }[a]](c) }, this.styledMode || f.css(d.style), this[a] = f)
                    }; b.prototype.layOutTitles = function (a) {
                        var c = [0, 0, 0], b = this.renderer,
                        d = this.spacingBox;["title", "subtitle", "caption"].forEach(function (a) {
                            var f = this[a], g = this.options[a], l = g.verticalAlign || "top"; a = "title" === a ? "top" === l ? -3 : 0 : "top" === l ? c[0] + 2 : 0; var k; if (f) {
                                this.styledMode || (k = g.style && g.style.fontSize); k = b.fontMetrics(k, f).b; f.css({ width: (g.width || d.width + (g.widthAdjust || 0)) + "px" }); var h = Math.round(f.getBBox(g.useHTML).height); f.align(H({ y: "bottom" === l ? k : a + k, height: h }, g), !1, "spacingBox"); g.floating || ("top" === l ? c[0] = Math.ceil(c[0] + h) : "bottom" === l && (c[2] = Math.ceil(c[2] +
                                    h)))
                            }
                        }, this); c[0] && "top" === (this.options.title.verticalAlign || "top") && (c[0] += this.options.title.margin); c[2] && "bottom" === this.options.caption.verticalAlign && (c[2] += this.options.caption.margin); var f = !this.titleOffset || this.titleOffset.join(",") !== c.join(","); this.titleOffset = c; N(this, "afterLayOutTitles"); !this.isDirtyBox && f && (this.isDirtyBox = this.isDirtyLegend = f, this.hasRendered && O(a, !0) && this.isDirtyBox && this.redraw())
                    }; b.prototype.getChartSize = function () {
                        var a = this.options.chart, c = a.width; a = a.height;
                        var b = this.renderTo; R(c) || (this.containerWidth = Q(b, "width")); R(a) || (this.containerHeight = Q(b, "height")); this.chartWidth = Math.max(0, c || this.containerWidth || 600); this.chartHeight = Math.max(0, fa(a, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400))
                    }; b.prototype.temporaryDisplay = function (a) {
                        var c = this.renderTo; if (a) for (; c && c.style;)c.hcOrigStyle && (I(c, c.hcOrigStyle), delete c.hcOrigStyle), c.hcOrigDetached && (m.body.removeChild(c), c.hcOrigDetached = !1), c = c.parentNode; else for (; c && c.style;) {
                            m.body.contains(c) ||
                            c.parentNode || (c.hcOrigDetached = !0, m.body.appendChild(c)); if ("none" === Q(c, "display", !1) || c.hcOricDetached) c.hcOrigStyle = { display: c.style.display, height: c.style.height, overflow: c.style.overflow }, a = { display: "block", overflow: "hidden" }, c !== this.renderTo && (a.height = 0), I(c, a), c.offsetWidth || c.style.setProperty("display", "block", "important"); c = c.parentNode; if (c === m.body) break
                        }
                    }; b.prototype.setClassName = function (a) { this.container.className = "highcharts-container " + (a || "") }; b.prototype.getContainer = function () {
                        var c =
                            this.options, b = c.chart, d = ja(), f, l = this.renderTo; l || (this.renderTo = l = b.renderTo); U(l) && (this.renderTo = l = m.getElementById(l)); l || da(13, !0, this); var h = aa(K(l, "data-highcharts-chart")); V(h) && B[h] && B[h].hasRendered && B[h].destroy(); K(l, "data-highcharts-chart", this.index); l.innerHTML = k.emptyHTML; b.skipClone || l.offsetWidth || this.temporaryDisplay(); this.getChartSize(); h = this.chartWidth; var e = this.chartHeight; I(l, { overflow: "hidden" }); this.styledMode || (f = H({
                                position: "relative", overflow: "hidden", width: h + "px",
                                height: e + "px", textAlign: "left", lineHeight: "normal", zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)", userSelect: "none", "touch-action": "manipulation", outline: "none"
                            }, b.style || {})); this.container = d = M("div", { id: d }, f, l); this._cursor = d.style.cursor; this.renderer = new (b.renderer || !g ? n.getRendererType(b.renderer) : a)(d, h, e, void 0, b.forExport, c.exporting && c.exporting.allowHTML, this.styledMode); A(void 0, this); this.setClassName(b.className); if (this.styledMode) for (var q in c.defs) this.renderer.definition(c.defs[q]);
                        else this.renderer.setStyle(b.style); this.renderer.chartIndex = this.index; N(this, "afterGetContainer")
                    }; b.prototype.getMargins = function (a) { var c = this.spacing, b = this.margin, d = this.titleOffset; this.resetMargins(); d[0] && !R(b[0]) && (this.plotTop = Math.max(this.plotTop, d[0] + c[0])); d[2] && !R(b[2]) && (this.marginBottom = Math.max(this.marginBottom, d[2] + c[2])); this.legend && this.legend.display && this.legend.adjustMargins(b, c); N(this, "getMargins"); a || this.getAxisMargins() }; b.prototype.getAxisMargins = function () {
                        var a =
                            this, c = a.axisOffset = [0, 0, 0, 0], b = a.colorAxis, d = a.margin, f = function (a) { a.forEach(function (a) { a.visible && a.getOffset() }) }; a.hasCartesianSeries ? f(a.axes) : b && b.length && f(b); u.forEach(function (b, f) { R(d[f]) || (a[b] += c[f]) }); a.setChartSize()
                    }; b.prototype.reflow = function (a) {
                        var c = this, b = c.options.chart, f = c.renderTo, g = R(b.width) && R(b.height), l = b.width || Q(f, "width"); b = b.height || Q(f, "height"); f = a ? a.target : F; delete c.pointer.chartPosition; if (!g && !c.isPrinting && l && b && (f === F || f === m)) {
                            if (l !== c.containerWidth || b !==
                                c.containerHeight) d.clearTimeout(c.reflowTimeout), c.reflowTimeout = ha(function () { c.container && c.setSize(void 0, void 0, !1) }, a ? 100 : 0); c.containerWidth = l; c.containerHeight = b
                        }
                    }; b.prototype.setReflow = function (a) { var c = this; !1 === a || this.unbindReflow ? !1 === a && this.unbindReflow && (this.unbindReflow = this.unbindReflow()) : (this.unbindReflow = v(F, "resize", function (a) { c.options && c.reflow(a) }), v(this, "destroy", this.unbindReflow)) }; b.prototype.setSize = function (a, c, b) {
                        var d = this, f = d.renderer; d.isResizing += 1; A(b, d); b =
                            f.globalAnimation; d.oldChartHeight = d.chartHeight; d.oldChartWidth = d.chartWidth; "undefined" !== typeof a && (d.options.chart.width = a); "undefined" !== typeof c && (d.options.chart.height = c); d.getChartSize(); d.styledMode || (b ? p : I)(d.container, { width: d.chartWidth + "px", height: d.chartHeight + "px" }, b); d.setChartSize(!0); f.setSize(d.chartWidth, d.chartHeight, b); d.axes.forEach(function (a) { a.isDirty = !0; a.setScale() }); d.isDirtyLegend = !0; d.isDirtyBox = !0; d.layOutTitles(); d.getMargins(); d.redraw(b); d.oldChartHeight = null; N(d,
                                "resize"); ha(function () { d && N(d, "endResize", null, function () { --d.isResizing }) }, D(b).duration)
                    }; b.prototype.setChartSize = function (a) {
                        var c = this.inverted, b = this.renderer, d = this.chartWidth, f = this.chartHeight, g = this.options.chart, l = this.spacing, k = this.clipOffset, h, m, e, q; this.plotLeft = h = Math.round(this.plotLeft); this.plotTop = m = Math.round(this.plotTop); this.plotWidth = e = Math.max(0, Math.round(d - h - this.marginRight)); this.plotHeight = q = Math.max(0, Math.round(f - m - this.marginBottom)); this.plotSizeX = c ? q : e; this.plotSizeY =
                            c ? e : q; this.plotBorderWidth = g.plotBorderWidth || 0; this.spacingBox = b.spacingBox = { x: l[3], y: l[0], width: d - l[3] - l[1], height: f - l[0] - l[2] }; this.plotBox = b.plotBox = { x: h, y: m, width: e, height: q }; c = 2 * Math.floor(this.plotBorderWidth / 2); d = Math.ceil(Math.max(c, k[3]) / 2); f = Math.ceil(Math.max(c, k[0]) / 2); this.clipBox = { x: d, y: f, width: Math.floor(this.plotSizeX - Math.max(c, k[1]) / 2 - d), height: Math.max(0, Math.floor(this.plotSizeY - Math.max(c, k[2]) / 2 - f)) }; a || (this.axes.forEach(function (a) { a.setAxisSize(); a.setAxisTranslation() }),
                                b.alignElements()); N(this, "afterSetChartSize", { skipAxes: a })
                    }; b.prototype.resetMargins = function () { N(this, "resetMargins"); var a = this, c = a.options.chart;["margin", "spacing"].forEach(function (b) { var d = c[b], f = W(d) ? d : [d, d, d, d];["Top", "Right", "Bottom", "Left"].forEach(function (d, g) { a[b][g] = O(c[b + d], f[g]) }) }); u.forEach(function (c, b) { a[c] = O(a.margin[b], a.spacing[b]) }); a.axisOffset = [0, 0, 0, 0]; a.clipOffset = [0, 0, 0, 0] }; b.prototype.drawChartBox = function () {
                        var a = this.options.chart, c = this.renderer, b = this.chartWidth,
                        d = this.chartHeight, f = this.styledMode, g = this.plotBGImage, l = a.backgroundColor, k = a.plotBackgroundColor, h = a.plotBackgroundImage, m = this.plotLeft, e = this.plotTop, q = this.plotWidth, p = this.plotHeight, v = this.plotBox, n = this.clipRect, u = this.clipBox, A = this.chartBackground, F = this.plotBackground, x = this.plotBorder, B, D = "animate"; A || (this.chartBackground = A = c.rect().addClass("highcharts-background").add(), D = "attr"); if (f) var E = B = A.strokeWidth(); else {
                            E = a.borderWidth || 0; B = E + (a.shadow ? 8 : 0); l = { fill: l || "none" }; if (E || A["stroke-width"]) l.stroke =
                                a.borderColor, l["stroke-width"] = E; A.attr(l).shadow(a.shadow)
                        } A[D]({ x: B / 2, y: B / 2, width: b - B - E % 2, height: d - B - E % 2, r: a.borderRadius }); D = "animate"; F || (D = "attr", this.plotBackground = F = c.rect().addClass("highcharts-plot-background").add()); F[D](v); f || (F.attr({ fill: k || "none" }).shadow(a.plotShadow), h && (g ? (h !== g.attr("href") && g.attr("href", h), g.animate(v)) : this.plotBGImage = c.image(h, m, e, q, p).add())); n ? n.animate({ width: u.width, height: u.height }) : this.clipRect = c.clipRect(u); D = "animate"; x || (D = "attr", this.plotBorder =
                            x = c.rect().addClass("highcharts-plot-border").attr({ zIndex: 1 }).add()); f || x.attr({ stroke: a.plotBorderColor, "stroke-width": a.plotBorderWidth || 0, fill: "none" }); x[D](x.crisp({ x: m, y: e, width: q, height: p }, -x.strokeWidth())); this.isDirtyBox = !1; N(this, "afterDrawChartBox")
                    }; b.prototype.propFromSeries = function () {
                        var a = this, c = a.options.chart, b = a.options.series, d, f, g;["inverted", "angular", "polar"].forEach(function (k) {
                            f = l[c.type || c.defaultSeriesType]; g = c[k] || f && f.prototype[k]; for (d = b && b.length; !g && d--;)(f = l[b[d].type]) &&
                                f.prototype[k] && (g = !0); a[k] = g
                        })
                    }; b.prototype.linkSeries = function () { var a = this, c = a.series; c.forEach(function (a) { a.linkedSeries.length = 0 }); c.forEach(function (c) { var b = c.options.linkedTo; U(b) && (b = ":previous" === b ? a.series[c.index - 1] : a.get(b)) && b.linkedParent !== c && (b.linkedSeries.push(c), c.linkedParent = b, b.enabledDataSorting && c.setDataSortingOptions(), c.visible = O(c.options.visible, b.options.visible, c.visible)) }); N(this, "afterLinkSeries") }; b.prototype.renderSeries = function () {
                        this.series.forEach(function (a) {
                            a.translate();
                            a.render()
                        })
                    }; b.prototype.renderLabels = function () { var a = this, c = a.options.labels; c.items && c.items.forEach(function (b) { var d = H(c.style, b.style), f = aa(d.left) + a.plotLeft, g = aa(d.top) + a.plotTop + 12; delete d.left; delete d.top; a.renderer.text(b.html, f, g).attr({ zIndex: 2 }).css(d).add() }) }; b.prototype.render = function () {
                        var a = this.axes, c = this.colorAxis, b = this.renderer, d = this.options, f = function (a) { a.forEach(function (a) { a.visible && a.render() }) }, g = 0; this.setTitle(); this.legend = new G(this, d.legend); this.getStacks &&
                            this.getStacks(); this.getMargins(!0); this.setChartSize(); d = this.plotWidth; a.some(function (a) { if (a.horiz && a.visible && a.options.labels.enabled && a.series.length) return g = 21, !0 }); var l = this.plotHeight = Math.max(this.plotHeight - g, 0); a.forEach(function (a) { a.setScale() }); this.getAxisMargins(); var k = 1.1 < d / this.plotWidth, h = 1.05 < l / this.plotHeight; if (k || h) a.forEach(function (a) { (a.horiz && k || !a.horiz && h) && a.setTickInterval(!0) }), this.getMargins(); this.drawChartBox(); this.hasCartesianSeries ? f(a) : c && c.length && f(c);
                        this.seriesGroup || (this.seriesGroup = b.g("series-group").attr({ zIndex: 3 }).add()); this.renderSeries(); this.renderLabels(); this.addCredits(); this.setResponsive && this.setResponsive(); this.hasRendered = !0
                    }; b.prototype.addCredits = function (a) {
                        var c = this, b = P(!0, this.options.credits, a); b.enabled && !this.credits && (this.credits = this.renderer.text(b.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function () { b.href && (F.location.href = b.href) }).attr({ align: b.position.align, zIndex: 8 }), c.styledMode ||
                            this.credits.css(b.style), this.credits.add().align(b.position), this.credits.update = function (a) { c.credits = c.credits.destroy(); c.addCredits(a) })
                    }; b.prototype.destroy = function () {
                        var a = this, c = a.axes, b = a.series, d = a.container, f = d && d.parentNode, g; N(a, "destroy"); a.renderer.forExport ? L(B, a) : B[a.index] = void 0; y.chartCount--; a.renderTo.removeAttribute("data-highcharts-chart"); ca(a); for (g = c.length; g--;)c[g] = c[g].destroy(); this.scroller && this.scroller.destroy && this.scroller.destroy(); for (g = b.length; g--;)b[g] =
                            b[g].destroy(); "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function (c) { var b = a[c]; b && b.destroy && (a[c] = b.destroy()) }); d && (d.innerHTML = k.emptyHTML, ca(d), f && Z(d)); X(a, function (c, b) { delete a[b] })
                    }; b.prototype.firstRender = function () {
                        var a = this, c = a.options; if (!a.isReadyToRender || a.isReadyToRender()) {
                            a.getContainer(); a.resetMargins(); a.setChartSize(); a.propFromSeries();
                            a.getAxes(); (T(c.series) ? c.series : []).forEach(function (c) { a.initSeries(c) }); a.linkSeries(); a.setSeriesData(); N(a, "beforeRender"); r && (t.isRequired() ? a.pointer = new t(a, c) : a.pointer = new r(a, c)); a.render(); a.pointer.getChartPosition(); if (!a.renderer.imgCount && !a.hasLoaded) a.onload(); a.temporaryDisplay(!0)
                        }
                    }; b.prototype.onload = function () {
                        this.callbacks.concat([this.callback]).forEach(function (a) { a && "undefined" !== typeof this.index && a.apply(this, [this]) }, this); N(this, "load"); N(this, "render"); R(this.index) &&
                            this.setReflow(this.options.chart.reflow); this.warnIfA11yModuleNotLoaded(); this.hasLoaded = !0
                    }; b.prototype.warnIfA11yModuleNotLoaded = function () {
                        var a = this.options, c = this.title; a && !this.accessibility && (this.renderer.boxWrapper.attr({ role: "img", "aria-label": (c && c.element.textContent || "").replace(/</g, "&lt;") }), a.accessibility && !1 === a.accessibility.enabled || da('Highcharts warning: Consider including the "accessibility.js" module to make your chart more usable for people with disabilities. Set the "accessibility.enabled" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.',
                            !1, this))
                    }; b.prototype.addSeries = function (a, c, b) { var d = this, f; a && (c = O(c, !0), N(d, "addSeries", { options: a }, function () { f = d.initSeries(a); d.isDirtyLegend = !0; d.linkSeries(); f.enabledDataSorting && f.setData(a.data, !1); N(d, "afterAddSeries", { series: f }); c && d.redraw(b) })); return f }; b.prototype.addAxis = function (a, c, b, d) { return this.createAxis(c ? "xAxis" : "yAxis", { axis: a, redraw: b, animation: d }) }; b.prototype.addColorAxis = function (a, c, b) { return this.createAxis("colorAxis", { axis: a, redraw: c, animation: b }) }; b.prototype.createAxis =
                        function (a, c) { a = new e(this, P(c.axis, { index: this[a].length, isX: "xAxis" === a })); O(c.redraw, !0) && this.redraw(c.animation); return a }; b.prototype.showLoading = function (a) {
                            var c = this, b = c.options, d = b.loading, f = function () { g && I(g, { left: c.plotLeft + "px", top: c.plotTop + "px", width: c.plotWidth + "px", height: c.plotHeight + "px" }) }, g = c.loadingDiv, l = c.loadingSpan; g || (c.loadingDiv = g = M("div", { className: "highcharts-loading highcharts-loading-hidden" }, null, c.container)); l || (c.loadingSpan = l = M("span", { className: "highcharts-loading-inner" },
                                null, g), v(c, "redraw", f)); g.className = "highcharts-loading"; k.setElementHTML(l, O(a, b.lang.loading, "")); c.styledMode || (I(g, H(d.style, { zIndex: 10 })), I(l, d.labelStyle), c.loadingShown || (I(g, { opacity: 0, display: "" }), p(g, { opacity: d.style.opacity || .5 }, { duration: d.showDuration || 0 }))); c.loadingShown = !0; f()
                        }; b.prototype.hideLoading = function () {
                            var a = this.options, c = this.loadingDiv; c && (c.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || p(c, { opacity: 0 }, {
                                duration: a.loading.hideDuration || 100,
                                complete: function () { I(c, { display: "none" }) }
                            })); this.loadingShown = !1
                        }; b.prototype.update = function (a, b, d, g) {
                            var l = this, k = { credits: "addCredits", title: "setTitle", subtitle: "setSubtitle", caption: "setCaption" }, h = a.isResponsiveOptions, m = [], e, q; N(l, "update", { options: a }); h || l.setResponsive(!1, !0); a = J(a, l.options); l.userOptions = P(l.userOptions, a); var p = a.chart; if (p) {
                                P(!0, l.options.chart, p); "className" in p && l.setClassName(p.className); "reflow" in p && l.setReflow(p.reflow); if ("inverted" in p || "polar" in p || "type" in
                                    p) { l.propFromSeries(); var v = !0 } "alignTicks" in p && (v = !0); "events" in p && c(this, p); X(p, function (a, c) { -1 !== l.propsRequireUpdateSeries.indexOf("chart." + c) && (e = !0); -1 !== l.propsRequireDirtyBox.indexOf(c) && (l.isDirtyBox = !0); -1 !== l.propsRequireReflow.indexOf(c) && (h ? l.isDirtyBox = !0 : q = !0) }); !l.styledMode && p.style && l.renderer.setStyle(l.options.chart.style || {})
                            } !l.styledMode && a.colors && (this.options.colors = a.colors); a.time && (this.time === E && (this.time = new f(a.time)), P(!0, l.options.time, a.time)); X(a, function (c,
                                b) { if (l[b] && "function" === typeof l[b].update) l[b].update(c, !1); else if ("function" === typeof l[k[b]]) l[k[b]](c); else "colors" !== b && -1 === l.collectionsWithUpdate.indexOf(b) && P(!0, l.options[b], a[b]); "chart" !== b && -1 !== l.propsRequireUpdateSeries.indexOf(b) && (e = !0) }); this.collectionsWithUpdate.forEach(function (c) {
                                    if (a[c]) {
                                        var b = []; l[c].forEach(function (a, c) { a.options.isInternal || b.push(O(a.options.index, c)) }); ea(a[c]).forEach(function (a, f) {
                                            var g = R(a.id), k; g && (k = l.get(a.id)); !k && l[c] && (k = l[c][b ? b[f] : f]) && g &&
                                                R(k.options.id) && (k = void 0); k && k.coll === c && (k.update(a, !1), d && (k.touched = !0)); !k && d && l.collectionsWithInit[c] && (l.collectionsWithInit[c][0].apply(l, [a].concat(l.collectionsWithInit[c][1] || []).concat([!1])).touched = !0)
                                        }); d && l[c].forEach(function (a) { a.touched || a.options.isInternal ? delete a.touched : m.push(a) })
                                    }
                                }); m.forEach(function (a) { a.chart && a.remove && a.remove(!1) }); v && l.axes.forEach(function (a) { a.update({}, !1) }); e && l.getSeriesOrderByLinks().forEach(function (a) { a.chart && a.update({}, !1) }, this); v = p &&
                                    p.width; p = p && (U(p.height) ? fa(p.height, v || l.chartWidth) : p.height); q || V(v) && v !== l.chartWidth || V(p) && p !== l.chartHeight ? l.setSize(v, p, g) : O(b, !0) && l.redraw(g); N(l, "afterUpdate", { options: a, redraw: b, animation: g })
                        }; b.prototype.setSubtitle = function (a, c) { this.applyDescription("subtitle", a); this.layOutTitles(c) }; b.prototype.setCaption = function (a, c) { this.applyDescription("caption", a); this.layOutTitles(c) }; b.prototype.showResetZoom = function () {
                            function a() { c.zoomOut() } var c = this, b = x.lang, d = c.options.chart.zooming.resetButton,
                                f = d.theme, g = "chart" === d.relativeTo || "spacingBox" === d.relativeTo ? null : "scrollablePlotBox"; N(this, "beforeShowResetZoom", null, function () { c.resetZoomButton = c.renderer.button(b.resetZoom, null, null, a, f).attr({ align: d.position.align, title: b.resetZoomTitle }).addClass("highcharts-reset-zoom").add().align(d.position, !1, g) }); N(this, "afterShowResetZoom")
                        }; b.prototype.zoomOut = function () { N(this, "selection", { resetSelection: !0 }, this.zoom) }; b.prototype.zoom = function (a) {
                            var c = this, b = c.pointer, d = !1, f; !a || a.resetSelection ?
                                (c.axes.forEach(function (a) { f = a.zoom() }), b.initiated = !1) : a.xAxis.concat(a.yAxis).forEach(function (a) { var g = a.axis; if (b[g.isXAxis ? "zoomX" : "zoomY"] && R(b.mouseDownX) && R(b.mouseDownY) && c.isInsidePlot(b.mouseDownX - c.plotLeft, b.mouseDownY - c.plotTop, { axis: g }) || !R(c.inverted ? b.mouseDownX : b.mouseDownY)) f = g.zoom(a.min, a.max), g.displayBtn && (d = !0) }); var g = c.resetZoomButton; d && !g ? c.showResetZoom() : !d && W(g) && (c.resetZoomButton = g.destroy()); f && c.redraw(O(c.options.chart.animation, a && a.animation, 100 > c.pointCount))
                        };
                b.prototype.pan = function (a, c) {
                    var b = this, d = b.hoverPoints; c = "object" === typeof c ? c : { enabled: c, type: "x" }; var f = b.options.chart; f && f.panning && (f.panning = c); var g = c.type, l; N(this, "pan", { originalEvent: a }, function () {
                        d && d.forEach(function (a) { a.setState() }); var c = b.xAxis; "xy" === g ? c = c.concat(b.yAxis) : "y" === g && (c = b.yAxis); var f = {}; c.forEach(function (c) {
                            if (c.options.panningEnabled && !c.options.isInternal) {
                                var d = c.horiz, k = a[d ? "chartX" : "chartY"]; d = d ? "mouseDownX" : "mouseDownY"; var h = b[d], m = c.minPointOffset || 0, e = c.reversed &&
                                    !b.inverted || !c.reversed && b.inverted ? -1 : 1, q = c.getExtremes(), p = c.toValue(h - k, !0) + m * e, v = c.toValue(h + c.len - k, !0) - (m * e || c.isXAxis && c.pointRangePadding || 0), n = v < p; e = c.hasVerticalPanning(); h = n ? v : p; p = n ? p : v; var u = c.panningState; !e || c.isXAxis || u && !u.isDirty || c.series.forEach(function (a) {
                                        var c = a.getProcessedData(!0); c = a.getExtremes(c.yData, !0); u || (u = { startMin: Number.MAX_VALUE, startMax: -Number.MAX_VALUE }); V(c.dataMin) && V(c.dataMax) && (u.startMin = Math.min(O(a.options.threshold, Infinity), c.dataMin, u.startMin), u.startMax =
                                            Math.max(O(a.options.threshold, -Infinity), c.dataMax, u.startMax))
                                    }); e = Math.min(O(u && u.startMin, q.dataMin), m ? q.min : c.toValue(c.toPixels(q.min) - c.minPixelPadding)); v = Math.max(O(u && u.startMax, q.dataMax), m ? q.max : c.toValue(c.toPixels(q.max) + c.minPixelPadding)); c.panningState = u; c.isOrdinal || (m = e - h, 0 < m && (p += m, h = e), m = p - v, 0 < m && (p = v, h -= m), c.series.length && h !== q.min && p !== q.max && h >= e && p <= v && (c.setExtremes(h, p, !1, !1, { trigger: "pan" }), !b.resetZoomButton && h !== e && p !== v && g.match("y") && (b.showResetZoom(), c.displayBtn =
                                        !1), l = !0), f[d] = k)
                            }
                        }); X(f, function (a, c) { b[c] = a }); l && b.redraw(!1); I(b.container, { cursor: "move" })
                    })
                }; return b
            }(); H(b.prototype, {
                callbacks: [], collectionsWithInit: { xAxis: [b.prototype.addAxis, [!0]], yAxis: [b.prototype.addAxis, [!1]], series: [b.prototype.addSeries] }, collectionsWithUpdate: ["xAxis", "yAxis", "series"], propsRequireDirtyBox: "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "), propsRequireReflow: "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),
                propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" ")
            }); ""; return b
        }); H(e, "Core/Legend/LegendSymbol.js", [e["Core/Utilities.js"]], function (b) {
            var e = b.merge, z = b.pick, C; (function (b) {
                b.drawLineMarker = function (b) {
                    var y = this.legendItem = this.legendItem || {}, t = this.options, r = b.symbolWidth, n = b.symbolHeight, h = n / 2, a = this.chart.renderer, f = y.group; b = b.baseline - Math.round(.3 * b.fontMetrics.b); var d = {}, k = t.marker; this.chart.styledMode ||
                        (d = { "stroke-width": t.lineWidth || 0 }, t.dashStyle && (d.dashstyle = t.dashStyle)); y.line = a.path([["M", 0, b], ["L", r, b]]).addClass("highcharts-graph").attr(d).add(f); k && !1 !== k.enabled && r && (t = Math.min(z(k.radius, h), h), 0 === this.symbol.indexOf("url") && (k = e(k, { width: n, height: n }), t = 0), y.symbol = y = a.symbol(this.symbol, r / 2 - t, b - t, 2 * t, 2 * t, k).addClass("highcharts-point").add(f), y.isMarker = !0)
                }; b.drawRectangle = function (b, e) {
                    e = e.legendItem || {}; var t = b.symbolHeight, r = b.options.squareSymbol; e.symbol = this.chart.renderer.rect(r ?
                        (b.symbolWidth - t) / 2 : 0, b.baseline - t + 1, r ? t : b.symbolWidth, t, z(b.options.symbolRadius, t / 2)).addClass("highcharts-point").attr({ zIndex: 3 }).add(e.group)
                }
            })(C || (C = {})); return C
        }); H(e, "Core/Series/SeriesDefaults.js", [], function () {
            return {
                lineWidth: 2, allowPointSelect: !1, crisp: !0, showCheckbox: !1, animation: { duration: 1E3 }, events: {}, marker: {
                    enabledThreshold: 2, lineColor: "#ffffff", lineWidth: 0, radius: 4, states: {
                        normal: { animation: !0 }, hover: { animation: { duration: 50 }, enabled: !0, radiusPlus: 2, lineWidthPlus: 1 }, select: {
                            fillColor: "#cccccc",
                            lineColor: "#000000", lineWidth: 2
                        }
                    }
                }, point: { events: {} }, dataLabels: { animation: {}, align: "center", defer: !0, formatter: function () { var b = this.series.chart.numberFormatter; return "number" !== typeof this.y ? "" : b(this.y, -1) }, padding: 5, style: { fontSize: "11px", fontWeight: "bold", color: "contrast", textOutline: "1px contrast" }, verticalAlign: "bottom", x: 0, y: 0 }, cropThreshold: 300, opacity: 1, pointRange: 0, softThreshold: !0, states: {
                    normal: { animation: !0 }, hover: { animation: { duration: 50 }, lineWidthPlus: 1, marker: {}, halo: { size: 10, opacity: .25 } },
                    select: { animation: { duration: 0 } }, inactive: { animation: { duration: 50 }, opacity: .2 }
                }, stickyTracking: !0, turboThreshold: 1E3, findNearestPointBy: "x"
            }
        }); H(e, "Core/Series/Series.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Defaults.js"], e["Core/Foundation.js"], e["Core/Globals.js"], e["Core/Legend/LegendSymbol.js"], e["Core/Series/Point.js"], e["Core/Series/SeriesDefaults.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"]], function (b, e, z, C, w, y, G, t, r, n) {
            var h =
                b.animObject, a = b.setAnimation, f = e.defaultOptions, d = z.registerEventOptions, k = C.hasTouch, p = C.svg, D = C.win, A = t.seriesTypes, x = n.arrayMax, E = n.arrayMin, q = n.clamp, c = n.cleanRecursively, B = n.correctFloat, m = n.defined, u = n.erase, g = n.error, F = n.extend, l = n.find, v = n.fireEvent, K = n.getNestedProperty, J = n.isArray, M = n.isNumber, I = n.isString, R = n.merge, Z = n.objectEach, L = n.pick, H = n.removeEvent, ia = n.splat, ba = n.syncTimeout; b = function () {
                    function b() {
                        this.zones = this.yAxis = this.xAxis = this.userOptions = this.tooltipOptions = this.processedYData =
                            this.processedXData = this.points = this.options = this.linkedSeries = this.index = this.eventsToUnbind = this.eventOptions = this.data = this.chart = this._i = void 0
                    } b.prototype.init = function (a, c) {
                        v(this, "init", { options: c }); var b = this, f = a.series; this.eventsToUnbind = []; b.chart = a; b.options = b.setOptions(c); c = b.options; b.linkedSeries = []; b.bindAxes(); F(b, { name: c.name, state: "", visible: !1 !== c.visible, selected: !0 === c.selected }); d(this, c); var g = c.events; if (g && g.click || c.point && c.point.events && c.point.events.click || c.allowPointSelect) a.runTrackerClick =
                            !0; b.getColor(); b.getSymbol(); b.parallelArrays.forEach(function (a) { b[a + "Data"] || (b[a + "Data"] = []) }); b.isCartesian && (a.hasCartesianSeries = !0); var l; f.length && (l = f[f.length - 1]); b._i = L(l && l._i, -1) + 1; b.opacity = b.options.opacity; a.orderSeries(this.insert(f)); c.dataSorting && c.dataSorting.enabled ? b.setDataSortingOptions() : b.points || b.data || b.setData(c.data, !1); v(this, "afterInit")
                    }; b.prototype.is = function (a) { return A[a] && this instanceof A[a] }; b.prototype.insert = function (a) {
                        var c = this.options.index, b; if (M(c)) {
                            for (b =
                                a.length; b--;)if (c >= L(a[b].options.index, a[b]._i)) { a.splice(b + 1, 0, this); break } -1 === b && a.unshift(this); b += 1
                        } else a.push(this); return L(b, a.length - 1)
                    }; b.prototype.bindAxes = function () {
                        var a = this, c = a.options, b = a.chart, d; v(this, "bindAxes", null, function () {
                            (a.axisTypes || []).forEach(function (f) {
                                var l = 0; b[f].forEach(function (b) { d = b.options; if (c[f] === l && !d.isInternal || "undefined" !== typeof c[f] && c[f] === d.id || "undefined" === typeof c[f] && 0 === d.index) a.insert(b.series), a[f] = b, b.isDirty = !0; d.isInternal || l++ }); a[f] ||
                                    a.optionalAxis === f || g(18, !0, b)
                            })
                        }); v(this, "afterBindAxes")
                    }; b.prototype.updateParallelArrays = function (a, c) { var b = a.series, d = arguments, f = M(c) ? function (d) { var f = "y" === d && b.toYData ? b.toYData(a) : a[d]; b[d + "Data"][c] = f } : function (a) { Array.prototype[c].apply(b[a + "Data"], Array.prototype.slice.call(d, 2)) }; b.parallelArrays.forEach(f) }; b.prototype.hasData = function () { return this.visible && "undefined" !== typeof this.dataMax && "undefined" !== typeof this.dataMin || this.visible && this.yData && 0 < this.yData.length }; b.prototype.autoIncrement =
                        function (a) { var c = this.options, b = c.pointIntervalUnit, d = c.relativeXValue, f = this.chart.time, g = this.xIncrement, l; g = L(g, c.pointStart, 0); this.pointInterval = l = L(this.pointInterval, c.pointInterval, 1); d && M(a) && (l *= a); b && (c = new f.Date(g), "day" === b ? f.set("Date", c, f.get("Date", c) + l) : "month" === b ? f.set("Month", c, f.get("Month", c) + l) : "year" === b && f.set("FullYear", c, f.get("FullYear", c) + l), l = c.getTime() - g); if (d && M(a)) return g + l; this.xIncrement = g + l; return g }; b.prototype.setDataSortingOptions = function () {
                            var a = this.options;
                            F(this, { requireSorting: !1, sorted: !1, enabledDataSorting: !0, allowDG: !1 }); m(a.pointRange) || (a.pointRange = 1)
                        }; b.prototype.setOptions = function (a) {
                            var c = this.chart, b = c.options, d = b.plotOptions, g = c.userOptions || {}; a = R(a); c = c.styledMode; var l = { plotOptions: d, userOptions: a }; v(this, "setOptions", l); var k = l.plotOptions[this.type], h = g.plotOptions || {}; this.userOptions = l.userOptions; g = R(k, d.series, g.plotOptions && g.plotOptions[this.type], a); this.tooltipOptions = R(f.tooltip, f.plotOptions.series && f.plotOptions.series.tooltip,
                                f.plotOptions[this.type].tooltip, b.tooltip.userOptions, d.series && d.series.tooltip, d[this.type].tooltip, a.tooltip); this.stickyTracking = L(a.stickyTracking, h[this.type] && h[this.type].stickyTracking, h.series && h.series.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? !0 : g.stickyTracking); null === k.marker && delete g.marker; this.zoneAxis = g.zoneAxis; d = this.zones = (g.zones || []).slice(); !g.negativeColor && !g.negativeFillColor || g.zones || (b = { value: g[this.zoneAxis + "Threshold"] || g.threshold || 0, className: "highcharts-negative" },
                                    c || (b.color = g.negativeColor, b.fillColor = g.negativeFillColor), d.push(b)); d.length && m(d[d.length - 1].value) && d.push(c ? {} : { color: this.color, fillColor: this.fillColor }); v(this, "afterSetOptions", { options: g }); return g
                        }; b.prototype.getName = function () { return L(this.options.name, "Series " + (this.index + 1)) }; b.prototype.getCyclic = function (a, c, b) {
                            var d = this.chart, f = this.userOptions, g = a + "Index", l = a + "Counter", k = b ? b.length : L(d.options.chart[a + "Count"], d[a + "Count"]); if (!c) {
                                var h = L(f[g], f["_" + g]); m(h) || (d.series.length ||
                                    (d[l] = 0), f["_" + g] = h = d[l] % k, d[l] += 1); b && (c = b[h])
                            } "undefined" !== typeof h && (this[g] = h); this[a] = c
                        }; b.prototype.getColor = function () { this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = "#cccccc" : this.getCyclic("color", this.options.color || f.plotOptions[this.type].color, this.chart.options.colors) }; b.prototype.getPointsCollection = function () { return (this.hasGroupedData ? this.points : this.data) || [] }; b.prototype.getSymbol = function () {
                            this.getCyclic("symbol", this.options.marker.symbol,
                                this.chart.options.symbols)
                        }; b.prototype.findPointIndex = function (a, c) {
                            var b = a.id, d = a.x, f = this.points, g = this.options.dataSorting, k, h; if (b) g = this.chart.get(b), g instanceof y && (k = g); else if (this.linkedParent || this.enabledDataSorting || this.options.relativeXValue) if (k = function (c) { return !c.touched && c.index === a.index }, g && g.matchByName ? k = function (c) { return !c.touched && c.name === a.name } : this.options.relativeXValue && (k = function (c) { return !c.touched && c.options.x === a.x }), k = l(f, k), !k) return; if (k) {
                                var m = k && k.index;
                                "undefined" !== typeof m && (h = !0)
                            } "undefined" === typeof m && M(d) && (m = this.xData.indexOf(d, c)); -1 !== m && "undefined" !== typeof m && this.cropped && (m = m >= this.cropStart ? m - this.cropStart : m); !h && M(m) && f[m] && f[m].touched && (m = void 0); return m
                        }; b.prototype.updateData = function (a, c) {
                            var b = this.options, d = b.dataSorting, f = this.points, g = [], l = this.requireSorting, k = a.length === f.length, h, e, q, p = !0; this.xIncrement = null; a.forEach(function (a, c) {
                                var e = m(a) && this.pointClass.prototype.optionsToObject.call({ series: this }, a) || {}, p = e.x;
                                if (e.id || M(p)) { if (e = this.findPointIndex(e, q), -1 === e || "undefined" === typeof e ? g.push(a) : f[e] && a !== b.data[e] ? (f[e].update(a, !1, null, !1), f[e].touched = !0, l && (q = e + 1)) : f[e] && (f[e].touched = !0), !k || c !== e || d && d.enabled || this.hasDerivedData) h = !0 } else g.push(a)
                            }, this); if (h) for (a = f.length; a--;)(e = f[a]) && !e.touched && e.remove && e.remove(!1, c); else !k || d && d.enabled ? p = !1 : (a.forEach(function (a, c) { a !== f[c].y && f[c].update && f[c].update(a, !1, null, !1) }), g.length = 0); f.forEach(function (a) { a && (a.touched = !1) }); if (!p) return !1;
                            g.forEach(function (a) { this.addPoint(a, !1, null, null, !1) }, this); null === this.xIncrement && this.xData && this.xData.length && (this.xIncrement = x(this.xData), this.autoIncrement()); return !0
                        }; b.prototype.setData = function (a, c, b, d) {
                            void 0 === c && (c = !0); var f = this, l = f.points, k = l && l.length || 0, h = f.options, m = f.chart, e = h.dataSorting, q = f.xAxis, p = h.turboThreshold, v = this.xData, n = this.yData, u = f.pointArrayMap; u = u && u.length; var A = h.keys, F, x = 0, B = 1, D = null; if (!m.options.chart.allowMutatingData) {
                                h.data && delete f.options.data; f.userOptions.data &&
                                    delete f.userOptions.data; var E = R(!0, a)
                            } a = E || a || []; E = a.length; e && e.enabled && (a = this.sortData(a)); m.options.chart.allowMutatingData && !1 !== d && E && k && !f.cropped && !f.hasGroupedData && f.visible && !f.boosted && (F = this.updateData(a, b)); if (!F) {
                                f.xIncrement = null; f.colorCounter = 0; this.parallelArrays.forEach(function (a) { f[a + "Data"].length = 0 }); if (p && E > p) if (D = f.getFirstValidPoint(a), M(D)) for (b = 0; b < E; b++)v[b] = this.autoIncrement(), n[b] = a[b]; else if (J(D)) if (u) if (D.length === u) for (b = 0; b < E; b++)v[b] = this.autoIncrement(),
                                    n[b] = a[b]; else for (b = 0; b < E; b++)d = a[b], v[b] = d[0], n[b] = d.slice(1, u + 1); else if (A && (x = A.indexOf("x"), B = A.indexOf("y"), x = 0 <= x ? x : 0, B = 0 <= B ? B : 1), 1 === D.length && (B = 0), x === B) for (b = 0; b < E; b++)v[b] = this.autoIncrement(), n[b] = a[b][B]; else for (b = 0; b < E; b++)d = a[b], v[b] = d[x], n[b] = d[B]; else g(12, !1, m); else for (b = 0; b < E; b++)"undefined" !== typeof a[b] && (d = { series: f }, f.pointClass.prototype.applyOptions.apply(d, [a[b]]), f.updateParallelArrays(d, b)); n && I(n[0]) && g(14, !0, m); f.data = []; f.options.data = f.userOptions.data = a; for (b = k; b--;)l[b] &&
                                        l[b].destroy && l[b].destroy(); q && (q.minRange = q.userMinRange); f.isDirty = m.isDirtyBox = !0; f.isDirtyData = !!l; b = !1
                            } "point" === h.legendType && (this.processData(), this.generatePoints()); c && m.redraw(b)
                        }; b.prototype.sortData = function (a) {
                            var c = this, b = c.options.dataSorting.sortKey || "y", d = function (a, c) { return m(c) && a.pointClass.prototype.optionsToObject.call({ series: a }, c) || {} }; a.forEach(function (b, f) { a[f] = d(c, b); a[f].index = f }, this); a.concat().sort(function (a, c) { a = K(b, a); c = K(b, c); return c < a ? -1 : c > a ? 1 : 0 }).forEach(function (a,
                                c) { a.x = c }, this); c.linkedSeries && c.linkedSeries.forEach(function (c) { var b = c.options, f = b.data; b.dataSorting && b.dataSorting.enabled || !f || (f.forEach(function (b, g) { f[g] = d(c, b); a[g] && (f[g].x = a[g].x, f[g].index = g) }), c.setData(f, !1)) }); return a
                        }; b.prototype.getProcessedData = function (a) {
                            var c = this.xAxis, b = this.options, d = b.cropThreshold, f = a || this.getExtremesFromAll || b.getExtremesFromAll, l = this.isCartesian; a = c && c.val2lin; b = !(!c || !c.logarithmic); var k = 0, h = this.xData, m = this.yData, e = this.requireSorting; var q = !1;
                            var p = h.length; if (c) { q = c.getExtremes(); var v = q.min; var n = q.max; q = !(!c.categories || c.names.length) } if (l && this.sorted && !f && (!d || p > d || this.forceCrop)) if (h[p - 1] < v || h[0] > n) h = [], m = []; else if (this.yData && (h[0] < v || h[p - 1] > n)) { var u = this.cropData(this.xData, this.yData, v, n); h = u.xData; m = u.yData; k = u.start; u = !0 } for (d = h.length || 1; --d;)if (c = b ? a(h[d]) - a(h[d - 1]) : h[d] - h[d - 1], 0 < c && ("undefined" === typeof A || c < A)) var A = c; else 0 > c && e && !q && (g(15, !1, this.chart), e = !1); return { xData: h, yData: m, cropped: u, cropStart: k, closestPointRange: A }
                        };
                    b.prototype.processData = function (a) { var c = this.xAxis; if (this.isCartesian && !this.isDirty && !c.isDirty && !this.yAxis.isDirty && !a) return !1; a = this.getProcessedData(); this.cropped = a.cropped; this.cropStart = a.cropStart; this.processedXData = a.xData; this.processedYData = a.yData; this.closestPointRange = this.basePointRange = a.closestPointRange; v(this, "afterProcessData") }; b.prototype.cropData = function (a, c, b, d, f) {
                        var g = a.length, l, k = 0, h = g; f = L(f, this.cropShoulder); for (l = 0; l < g; l++)if (a[l] >= b) { k = Math.max(0, l - f); break } for (b =
                            l; b < g; b++)if (a[b] > d) { h = b + f; break } return { xData: a.slice(k, h), yData: c.slice(k, h), start: k, end: h }
                    }; b.prototype.generatePoints = function () {
                        var a = this.options, c = this.processedData || a.data, b = this.processedXData, d = this.processedYData, f = this.pointClass, g = b.length, l = this.cropStart || 0, k = this.hasGroupedData, h = a.keys, m = []; a = a.dataGrouping && a.dataGrouping.groupAll ? l : 0; var e, q, p = this.data; if (!p && !k) { var n = []; n.length = c.length; p = this.data = n } h && k && (this.options.keys = !1); for (q = 0; q < g; q++) {
                            n = l + q; if (k) {
                                var u = (new f).init(this,
                                    [b[q]].concat(ia(d[q]))); u.dataGroup = this.groupMap[a + q]; u.dataGroup.options && (u.options = u.dataGroup.options, F(u, u.dataGroup.options), delete u.dataLabels)
                            } else (u = p[n]) || "undefined" === typeof c[n] || (p[n] = u = (new f).init(this, c[n], b[q])); u && (u.index = k ? a + q : n, m[q] = u)
                        } this.options.keys = h; if (p && (g !== (e = p.length) || k)) for (q = 0; q < e; q++)q !== l || k || (q += g), p[q] && (p[q].destroyElements(), p[q].plotX = void 0); this.data = p; this.points = m; v(this, "afterGeneratePoints")
                    }; b.prototype.getXExtremes = function (a) {
                        return {
                            min: E(a),
                            max: x(a)
                        }
                    }; b.prototype.getExtremes = function (a, c) {
                        var b = this.xAxis, d = this.yAxis, f = this.processedXData || this.xData, g = [], l = this.requireSorting ? this.cropShoulder : 0; d = d ? d.positiveValuesOnly : !1; var k, h = 0, m = 0, e = 0; a = a || this.stackedYData || this.processedYData || []; var q = a.length; if (b) { var p = b.getExtremes(); h = p.min; m = p.max } for (k = 0; k < q; k++) {
                            var n = f[k]; p = a[k]; var u = (M(p) || J(p)) && (p.length || 0 < p || !d); n = c || this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !b || (f[k + l] || n) >= h && (f[k - l] || n) <= m; if (u &&
                                n) if (u = p.length) for (; u--;)M(p[u]) && (g[e++] = p[u]); else g[e++] = p
                        } a = { activeYData: g, dataMin: E(g), dataMax: x(g) }; v(this, "afterGetExtremes", { dataExtremes: a }); return a
                    }; b.prototype.applyExtremes = function () { var a = this.getExtremes(); this.dataMin = a.dataMin; this.dataMax = a.dataMax; return a }; b.prototype.getFirstValidPoint = function (a) { for (var c = a.length, b = 0, d = null; null === d && b < c;)d = a[b], b++; return d }; b.prototype.translate = function () {
                        this.processedXData || this.processData(); this.generatePoints(); var a = this.options,
                            c = a.stacking, b = this.xAxis, d = b.categories, f = this.enabledDataSorting, g = this.yAxis, l = this.points, k = l.length, h = this.pointPlacementToXValue(), e = !!h, p = a.threshold, n = a.startFromThreshold ? p : 0, u = this.zoneAxis || "y", A, F, x = Number.MAX_VALUE; for (A = 0; A < k; A++) {
                                var D = l[A], E = D.x, r = void 0, t = void 0, K = D.y, y = D.low, z = c && g.stacking && g.stacking.stacks[(this.negStacks && K < (n ? 0 : p) ? "-" : "") + this.stackKey]; if (g.positiveValuesOnly && !g.validatePositiveValue(K) || b.positiveValuesOnly && !b.validatePositiveValue(E)) D.isNull = !0; D.plotX =
                                    F = B(q(b.translate(E, 0, 0, 0, 1, h, "flags" === this.type), -1E5, 1E5)); if (c && this.visible && z && z[E]) { var w = this.getStackIndicator(w, E, this.index); D.isNull || (r = z[E], t = r.points[w.key]) } J(t) && (y = t[0], K = t[1], y === n && w.key === z[E].base && (y = L(M(p) && p, g.min)), g.positiveValuesOnly && 0 >= y && (y = null), D.total = D.stackTotal = r.total, D.percentage = r.total && D.y / r.total * 100, D.stackY = K, this.irregularWidths || r.setOffset(this.pointXOffset || 0, this.barW || 0)); D.yBottom = m(y) ? q(g.translate(y, 0, 1, 0, 1), -1E5, 1E5) : null; this.dataModify && (K =
                                        this.dataModify.modifyValue(K, A)); D.plotY = void 0; M(K) && (r = g.translate(K, !1, !0, !1, !0), "undefined" !== typeof r && (D.plotY = q(r, -1E5, 1E5))); D.isInside = this.isPointInside(D); D.clientX = e ? B(b.translate(E, 0, 0, 0, 1, h)) : F; D.negative = D[u] < (a[u + "Threshold"] || p || 0); D.category = L(d && d[D.x], D.x); if (!D.isNull && !1 !== D.visible) { "undefined" !== typeof C && (x = Math.min(x, Math.abs(F - C))); var C = F } D.zone = this.zones.length ? D.getZone() : void 0; !D.graphic && this.group && f && (D.isNew = !0)
                            } this.closestPointRangePx = x; v(this, "afterTranslate")
                    };
                    b.prototype.getValidPoints = function (a, c, b) { var d = this.chart; return (a || this.points || []).filter(function (a) { return c && !d.isInsidePlot(a.plotX, a.plotY, { inverted: d.inverted }) ? !1 : !1 !== a.visible && (b || !a.isNull) }) }; b.prototype.getClipBox = function () { var a = this.chart, c = this.xAxis, b = this.yAxis, d = R(a.clipBox); c && c.len !== a.plotSizeX && (d.width = c.len); b && b.len !== a.plotSizeY && (d.height = b.len); return d }; b.prototype.getSharedClipKey = function () {
                        return this.sharedClipKey = (this.options.xAxis || 0) + "," + (this.options.yAxis ||
                            0)
                    }; b.prototype.setClip = function () { var a = this.chart, c = this.group, b = this.markerGroup, d = a.sharedClips; a = a.renderer; var f = this.getClipBox(), g = this.getSharedClipKey(), l = d[g]; l ? l.animate(f) : d[g] = l = a.clipRect(f); c && c.clip(!1 === this.options.clip ? void 0 : l); b && b.clip() }; b.prototype.animate = function (a) {
                        var c = this.chart, b = this.group, d = this.markerGroup, f = c.inverted, g = h(this.options.animation), l = [this.getSharedClipKey(), g.duration, g.easing, g.defer].join(), k = c.sharedClips[l], m = c.sharedClips[l + "m"]; if (a && b) g = this.getClipBox(),
                            k ? k.attr("height", g.height) : (g.width = 0, f && (g.x = c.plotHeight), k = c.renderer.clipRect(g), c.sharedClips[l] = k, m = c.renderer.clipRect({ x: f ? (c.plotSizeX || 0) + 99 : -99, y: f ? -c.plotLeft : -c.plotTop, width: 99, height: f ? c.chartWidth : c.chartHeight }), c.sharedClips[l + "m"] = m), b.clip(k), d && d.clip(m); else if (k && !k.hasClass("highcharts-animating")) {
                                c = this.getClipBox(); var e = g.step; d && d.element.childNodes.length && (g.step = function (a, c) { e && e.apply(c, arguments); m && m.element && m.attr(c.prop, "width" === c.prop ? a + 99 : a) }); k.addClass("highcharts-animating").animate(c,
                                    g)
                            }
                    }; b.prototype.afterAnimate = function () { var a = this; this.setClip(); Z(this.chart.sharedClips, function (c, b, d) { c && !a.chart.container.querySelector('[clip-path="url(#'.concat(c.id, ')"]')) && (c.destroy(), delete d[b]) }); this.finishedAnimating = !0; v(this, "afterAnimate") }; b.prototype.drawPoints = function (a) {
                        void 0 === a && (a = this.points); var c = this.chart, b = this.options.marker, d = this[this.specialGroup] || this.markerGroup, f = this.xAxis, g = L(b.enabled, !f || f.isRadial ? !0 : null, this.closestPointRangePx >= b.enabledThreshold *
                            b.radius), l, k; if (!1 !== b.enabled || this._hasPointMarkers) for (l = 0; l < a.length; l++) {
                                var h = a[l]; var m = (k = h.graphic) ? "animate" : "attr"; var e = h.marker || {}; var q = !!h.marker; if ((g && "undefined" === typeof e.enabled || e.enabled) && !h.isNull && !1 !== h.visible) {
                                    var p = L(e.symbol, this.symbol, "rect"); var v = this.markerAttribs(h, h.selected && "select"); this.enabledDataSorting && (h.startXPos = f.reversed ? -(v.width || 0) : f.width); var n = !1 !== h.isInside; k ? k[n ? "show" : "hide"](n).animate(v) : n && (0 < (v.width || 0) || h.hasImage) && (h.graphic = k =
                                        c.renderer.symbol(p, v.x, v.y, v.width, v.height, q ? e : b).add(d), this.enabledDataSorting && c.hasRendered && (k.attr({ x: h.startXPos }), m = "animate")); k && "animate" === m && k[n ? "show" : "hide"](n).animate(v); if (k && !c.styledMode) k[m](this.pointAttribs(h, h.selected && "select")); k && k.addClass(h.getClassName(), !0)
                                } else k && (h.graphic = k.destroy())
                            }
                    }; b.prototype.markerAttribs = function (a, c) {
                        var b = this.options, d = b.marker, f = a.marker || {}, g = f.symbol || d.symbol, l = L(f.radius, d && d.radius); c && (d = d.states[c], c = f.states && f.states[c], l =
                            L(c && c.radius, d && d.radius, l && l + (d && d.radiusPlus || 0))); a.hasImage = g && 0 === g.indexOf("url"); a.hasImage && (l = 0); a = M(l) ? { x: b.crisp ? Math.floor(a.plotX - l) : a.plotX - l, y: a.plotY - l } : {}; l && (a.width = a.height = 2 * l); return a
                    }; b.prototype.pointAttribs = function (a, c) {
                        var b = this.options.marker, d = a && a.options, f = d && d.marker || {}, g = d && d.color, l = a && a.color, k = a && a.zone && a.zone.color, h = this.color; a = L(f.lineWidth, b.lineWidth); d = 1; h = g || k || l || h; g = f.fillColor || b.fillColor || h; l = f.lineColor || b.lineColor || h; c = c || "normal"; b = b.states[c] ||
                            {}; c = f.states && f.states[c] || {}; a = L(c.lineWidth, b.lineWidth, a + L(c.lineWidthPlus, b.lineWidthPlus, 0)); g = c.fillColor || b.fillColor || g; l = c.lineColor || b.lineColor || l; d = L(c.opacity, b.opacity, d); return { stroke: l, "stroke-width": a, fill: g, opacity: d }
                    }; b.prototype.destroy = function (a) {
                        var c = this, b = c.chart, d = /AppleWebKit\/533/.test(D.navigator.userAgent), f = c.data || [], g, l, k, h; v(c, "destroy", { keepEventsForUpdate: a }); this.removeEvents(a); (c.axisTypes || []).forEach(function (a) {
                            (h = c[a]) && h.series && (u(h.series, c), h.isDirty =
                                h.forceRedraw = !0)
                        }); c.legendItem && c.chart.legend.destroyItem(c); for (l = f.length; l--;)(k = f[l]) && k.destroy && k.destroy(); c.clips && c.clips.forEach(function (a) { return a.destroy() }); n.clearTimeout(c.animationTimeout); Z(c, function (a, c) { a instanceof r && !a.survive && (g = d && "group" === c ? "hide" : "destroy", a[g]()) }); b.hoverSeries === c && (b.hoverSeries = void 0); u(b.series, c); b.orderSeries(); Z(c, function (b, d) { a && "hcEvents" === d || delete c[d] })
                    }; b.prototype.applyZones = function () {
                        var a = this, c = this.chart, b = c.renderer, d = this.zones,
                        f = this.clips || [], g = this.graph, l = this.area, k = Math.max(c.plotWidth, c.plotHeight), h = this[(this.zoneAxis || "y") + "Axis"], m = c.inverted, e, p, v, n, u, A, F, x, D = !1; if (d.length && (g || l) && h && "undefined" !== typeof h.min) {
                            var B = h.reversed; var E = h.horiz; g && !this.showLine && g.hide(); l && l.hide(); var r = h.getExtremes(); d.forEach(function (d, t) {
                                e = B ? E ? c.plotWidth : 0 : E ? 0 : h.toPixels(r.min) || 0; e = q(L(p, e), 0, k); p = q(Math.round(h.toPixels(L(d.value, r.max), !0) || 0), 0, k); D && (e = p = h.toPixels(r.max)); n = Math.abs(e - p); u = Math.min(e, p); A = Math.max(e,
                                    p); h.isXAxis ? (v = { x: m ? A : u, y: 0, width: n, height: k }, E || (v.x = c.plotHeight - v.x)) : (v = { x: 0, y: m ? A : u, width: k, height: n }, E && (v.y = c.plotWidth - v.y)); m && b.isVML && (v = h.isXAxis ? { x: 0, y: B ? u : A, height: v.width, width: c.chartWidth } : { x: v.y - c.plotLeft - c.spacingBox.x, y: 0, width: v.height, height: c.chartHeight }); f[t] ? f[t].animate(v) : f[t] = b.clipRect(v); F = a["zone-area-" + t]; x = a["zone-graph-" + t]; g && x && x.clip(f[t]); l && F && F.clip(f[t]); D = d.value > r.max; a.resetZones && 0 === p && (p = void 0)
                            }); this.clips = f
                        } else a.visible && (g && g.show(), l && l.show())
                    };
                    b.prototype.plotGroup = function (a, c, b, d, f) {
                        var g = this[a], l = !g; b = { visibility: b, zIndex: d || .1 }; "undefined" === typeof this.opacity || this.chart.styledMode || "inactive" === this.state || (b.opacity = this.opacity); l && (this[a] = g = this.chart.renderer.g().add(f)); g.addClass("highcharts-" + c + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (m(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (g.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0); g.attr(b)[l ?
                            "attr" : "animate"](this.getPlotBox(c)); return g
                    }; b.prototype.getPlotBox = function (a) { var c = this.xAxis, b = this.yAxis, d = this.chart; a = d.inverted && !d.polar && c && !1 !== this.invertible && ("markers" === a || "series" === a); d.inverted && (c = b, b = this.xAxis); return { translateX: c ? c.left : d.plotLeft, translateY: b ? b.top : d.plotTop, rotation: a ? 90 : 0, rotationOriginX: a ? (c.len - b.len) / 2 : 0, rotationOriginY: a ? (c.len + b.len) / 2 : 0, scaleX: a ? -1 : 1, scaleY: 1 } }; b.prototype.removeEvents = function (a) {
                        a || H(this); this.eventsToUnbind.length && (this.eventsToUnbind.forEach(function (a) { a() }),
                            this.eventsToUnbind.length = 0)
                    }; b.prototype.render = function () {
                        var a = this, c = a.chart, b = a.options, d = h(b.animation), f = a.visible ? "inherit" : "hidden", g = b.zIndex, l = a.hasRendered, k = c.seriesGroup; c = !a.finishedAnimating && c.renderer.isSVG ? d.duration : 0; v(this, "render"); a.plotGroup("group", "series", f, g, k); a.markerGroup = a.plotGroup("markerGroup", "markers", f, g, k); !1 !== b.clip && a.setClip(); a.animate && c && a.animate(!0); a.drawGraph && (a.drawGraph(), a.applyZones()); a.visible && a.drawPoints(); a.drawDataLabels && a.drawDataLabels();
                        a.redrawPoints && a.redrawPoints(); a.drawTracker && !1 !== a.options.enableMouseTracking && a.drawTracker(); a.animate && c && a.animate(); l || (c && d.defer && (c += d.defer), a.animationTimeout = ba(function () { a.afterAnimate() }, c || 0)); a.isDirty = !1; a.hasRendered = !0; v(a, "afterRender")
                    }; b.prototype.redraw = function () { var a = this.isDirty || this.isDirtyData; this.translate(); this.render(); a && delete this.kdTree }; b.prototype.searchPoint = function (a, c) {
                        var b = this.xAxis, d = this.yAxis, f = this.chart.inverted; return this.searchKDTree({
                            clientX: f ?
                                b.len - a.chartY + b.pos : a.chartX - b.pos, plotY: f ? d.len - a.chartX + d.pos : a.chartY - d.pos
                        }, c, a)
                    }; b.prototype.buildKDTree = function (a) {
                        function c(a, d, f) { var g = a && a.length; if (g) { var l = b.kdAxisArray[d % f]; a.sort(function (a, c) { return a[l] - c[l] }); g = Math.floor(g / 2); return { point: a[g], left: c(a.slice(0, g), d + 1, f), right: c(a.slice(g + 1), d + 1, f) } } } this.buildingKdTree = !0; var b = this, d = -1 < b.options.findNearestPointBy.indexOf("y") ? 2 : 1; delete b.kdTree; ba(function () {
                            b.kdTree = c(b.getValidPoints(null, !b.directTouch), d, d); b.buildingKdTree =
                                !1
                        }, b.options.kdNow || a && "touchstart" === a.type ? 0 : 1)
                    }; b.prototype.searchKDTree = function (a, c, b) {
                        function d(a, c, b, h) {
                            var e = c.point, q = f.kdAxisArray[b % h], p = e, v = m(a[g]) && m(e[g]) ? Math.pow(a[g] - e[g], 2) : null; var n = m(a[l]) && m(e[l]) ? Math.pow(a[l] - e[l], 2) : null; n = (v || 0) + (n || 0); e.dist = m(n) ? Math.sqrt(n) : Number.MAX_VALUE; e.distX = m(v) ? Math.sqrt(v) : Number.MAX_VALUE; q = a[q] - e[q]; n = 0 > q ? "left" : "right"; v = 0 > q ? "right" : "left"; c[n] && (n = d(a, c[n], b + 1, h), p = n[k] < p[k] ? n : e); c[v] && Math.sqrt(q * q) < p[k] && (a = d(a, c[v], b + 1, h), p = a[k] < p[k] ?
                                a : p); return p
                        } var f = this, g = this.kdAxisArray[0], l = this.kdAxisArray[1], k = c ? "distX" : "dist"; c = -1 < f.options.findNearestPointBy.indexOf("y") ? 2 : 1; this.kdTree || this.buildingKdTree || this.buildKDTree(b); if (this.kdTree) return d(a, this.kdTree, c, c)
                    }; b.prototype.pointPlacementToXValue = function () { var a = this.options, c = a.pointRange, b = this.xAxis; a = a.pointPlacement; "between" === a && (a = b.reversed ? -.5 : .5); return M(a) ? a * (c || b.pointRange) : 0 }; b.prototype.isPointInside = function (a) {
                        var c = this.chart, b = this.xAxis, d = this.yAxis;
                        return "undefined" !== typeof a.plotY && "undefined" !== typeof a.plotX && 0 <= a.plotY && a.plotY <= (d ? d.len : c.plotHeight) && 0 <= a.plotX && a.plotX <= (b ? b.len : c.plotWidth)
                    }; b.prototype.drawTracker = function () {
                        var a = this, c = a.options, b = c.trackByArea, d = [].concat(b ? a.areaPath : a.graphPath), f = a.chart, g = f.pointer, l = f.renderer, h = f.options.tooltip.snap, e = a.tracker, m = function (c) { if (f.hoverSeries !== a) a.onMouseOver() }, q = "rgba(192,192,192," + (p ? .0001 : .002) + ")"; e ? e.attr({ d: d }) : a.graph && (a.tracker = l.path(d).attr({
                            visibility: a.visible ?
                                "inherit" : "hidden", zIndex: 2
                        }).addClass(b ? "highcharts-tracker-area" : "highcharts-tracker-line").add(a.group), f.styledMode || a.tracker.attr({ "stroke-linecap": "round", "stroke-linejoin": "round", stroke: q, fill: b ? q : "none", "stroke-width": a.graph.strokeWidth() + (b ? 0 : 2 * h) }), [a.tracker, a.markerGroup, a.dataLabelsGroup].forEach(function (a) {
                            if (a && (a.addClass("highcharts-tracker").on("mouseover", m).on("mouseout", function (a) { g.onTrackerMouseOut(a) }), c.cursor && !f.styledMode && a.css({ cursor: c.cursor }), k)) a.on("touchstart",
                                m)
                        })); v(this, "afterDrawTracker")
                    }; b.prototype.addPoint = function (a, c, b, d, f) {
                        var g = this.options, l = this.data, k = this.chart, h = this.xAxis; h = h && h.hasNames && h.names; var e = g.data, m = this.xData, q; c = L(c, !0); var p = { series: this }; this.pointClass.prototype.applyOptions.apply(p, [a]); var n = p.x; var u = m.length; if (this.requireSorting && n < m[u - 1]) for (q = !0; u && m[u - 1] > n;)u--; this.updateParallelArrays(p, "splice", u, 0, 0); this.updateParallelArrays(p, u); h && p.name && (h[n] = p.name); e.splice(u, 0, a); if (q || this.processedData) this.data.splice(u,
                            0, null), this.processData(); "point" === g.legendType && this.generatePoints(); b && (l[0] && l[0].remove ? l[0].remove(!1) : (l.shift(), this.updateParallelArrays(p, "shift"), e.shift())); !1 !== f && v(this, "addPoint", { point: p }); this.isDirtyData = this.isDirty = !0; c && k.redraw(d)
                    }; b.prototype.removePoint = function (c, b, d) {
                        var f = this, g = f.data, l = g[c], k = f.points, h = f.chart, e = function () {
                            k && k.length === g.length && k.splice(c, 1); g.splice(c, 1); f.options.data.splice(c, 1); f.updateParallelArrays(l || { series: f }, "splice", c, 1); l && l.destroy();
                            f.isDirty = !0; f.isDirtyData = !0; b && h.redraw()
                        }; a(d, h); b = L(b, !0); l ? l.firePointEvent("remove", null, e) : e()
                    }; b.prototype.remove = function (a, c, b, d) { function f() { g.destroy(d); l.isDirtyLegend = l.isDirtyBox = !0; l.linkSeries(); L(a, !0) && l.redraw(c) } var g = this, l = g.chart; !1 !== b ? v(g, "remove", null, f) : f() }; b.prototype.update = function (a, b) {
                        a = c(a, this.userOptions); v(this, "update", { options: a }); var d = this, f = d.chart, l = d.userOptions, k = d.initialType || d.type, h = f.options.plotOptions, e = A[k].prototype, m = d.finishedAnimating && { animation: !1 },
                            q = {}, p = ["eventOptions", "navigatorSeries", "baseSeries"], n = a.type || l.type || f.options.chart.type, u = !(this.hasDerivedData || n && n !== this.type || "undefined" !== typeof a.pointStart || "undefined" !== typeof a.pointInterval || "undefined" !== typeof a.relativeXValue || a.joinBy || a.mapData || d.hasOptionChanged("dataGrouping") || d.hasOptionChanged("pointStart") || d.hasOptionChanged("pointInterval") || d.hasOptionChanged("pointIntervalUnit") || d.hasOptionChanged("keys")); n = n || k; u && (p.push("data", "isDirtyData", "points", "processedData",
                                "processedXData", "processedYData", "xIncrement", "cropped", "_hasPointMarkers", "_hasPointLabels", "clips", "nodes", "layout", "level", "mapMap", "mapData", "minY", "maxY", "minX", "maxX"), !1 !== a.visible && p.push("area", "graph"), d.parallelArrays.forEach(function (a) { p.push(a + "Data") }), a.data && (a.dataSorting && F(d.options.dataSorting, a.dataSorting), this.setData(a.data, !1))); a = R(l, m, { index: "undefined" === typeof l.index ? d.index : l.index, pointStart: L(h && h.series && h.series.pointStart, l.pointStart, d.xData[0]) }, !u && { data: d.options.data },
                                    a); u && a.data && (a.data = d.options.data); p = ["group", "markerGroup", "dataLabelsGroup", "transformGroup", "shadowGroup"].concat(p); p.forEach(function (a) { p[a] = d[a]; delete d[a] }); h = !1; if (A[n]) { if (h = n !== d.type, d.remove(!1, !1, !1, !0), h) if (Object.setPrototypeOf) Object.setPrototypeOf(d, A[n].prototype); else { m = Object.hasOwnProperty.call(d, "hcEvents") && d.hcEvents; for (x in e) d[x] = void 0; F(d, A[n].prototype); m ? d.hcEvents = m : delete d.hcEvents } } else g(17, !0, f, { missingModuleFor: n }); p.forEach(function (a) { d[a] = p[a] }); d.init(f,
                                        a); if (u && this.points) { a = d.options; if (!1 === a.visible) q.graphic = 1, q.dataLabel = 1; else if (!d._hasPointLabels) { e = a.marker; var x = a.dataLabels; !e || !1 !== e.enabled && (l.marker && l.marker.symbol) === e.symbol || (q.graphic = 1); x && !1 === x.enabled && (q.dataLabel = 1) } l = 0; for (e = this.points; l < e.length; l++)(x = e[l]) && x.series && (x.resolveColor(), Object.keys(q).length && x.destroyElements(q), !1 === a.showInLegend && x.legendItem && f.legend.destroyItem(x)) } d.initialType = k; f.linkSeries(); h && d.linkedSeries.length && (d.isDirtyData = !0); v(this,
                                            "afterUpdate"); L(b, !0) && f.redraw(u ? void 0 : !1)
                    }; b.prototype.setName = function (a) { this.name = this.options.name = this.userOptions.name = a; this.chart.isDirtyLegend = !0 }; b.prototype.hasOptionChanged = function (a) { var c = this.options[a], b = this.chart.options.plotOptions, d = this.userOptions[a]; return d ? c !== d : c !== L(b && b[this.type] && b[this.type][a], b && b.series && b.series[a], c) }; b.prototype.onMouseOver = function () {
                        var a = this.chart, c = a.hoverSeries; a.pointer.setHoverChartIndex(); if (c && c !== this) c.onMouseOut(); this.options.events.mouseOver &&
                            v(this, "mouseOver"); this.setState("hover"); a.hoverSeries = this
                    }; b.prototype.onMouseOut = function () { var a = this.options, c = this.chart, b = c.tooltip, d = c.hoverPoint; c.hoverSeries = null; if (d) d.onMouseOut(); this && a.events.mouseOut && v(this, "mouseOut"); !b || this.stickyTracking || b.shared && !this.noSharedTooltip || b.hide(); c.series.forEach(function (a) { a.setState("", !0) }) }; b.prototype.setState = function (a, c) {
                        var b = this, d = b.options, f = b.graph, g = d.inactiveOtherPoints, l = d.states, k = L(l[a || "normal"] && l[a || "normal"].animation,
                            b.chart.options.chart.animation), h = d.lineWidth, e = 0, m = d.opacity; a = a || ""; if (b.state !== a && ([b.group, b.markerGroup, b.dataLabelsGroup].forEach(function (c) { c && (b.state && c.removeClass("highcharts-series-" + b.state), a && c.addClass("highcharts-series-" + a)) }), b.state = a, !b.chart.styledMode)) {
                                if (l[a] && !1 === l[a].enabled) return; a && (h = l[a].lineWidth || h + (l[a].lineWidthPlus || 0), m = L(l[a].opacity, m)); if (f && !f.dashstyle && M(h)) for (d = { "stroke-width": h }, f.animate(d, k); b["zone-graph-" + e];)b["zone-graph-" + e].animate(d, k), e +=
                                    1; g || [b.group, b.markerGroup, b.dataLabelsGroup, b.labelBySeries].forEach(function (a) { a && a.animate({ opacity: m }, k) })
                            } c && g && b.points && b.setAllPointsToState(a || void 0)
                    }; b.prototype.setAllPointsToState = function (a) { this.points.forEach(function (c) { c.setState && c.setState(a) }) }; b.prototype.setVisible = function (a, c) {
                        var b = this, d = b.chart, f = d.options.chart.ignoreHiddenSeries, g = b.visible, l = (b.visible = a = b.options.visible = b.userOptions.visible = "undefined" === typeof a ? !g : a) ? "show" : "hide";["group", "dataLabelsGroup", "markerGroup",
                            "tracker", "tt"].forEach(function (a) { if (b[a]) b[a][l]() }); if (d.hoverSeries === b || (d.hoverPoint && d.hoverPoint.series) === b) b.onMouseOut(); b.legendItem && d.legend.colorizeItem(b, a); b.isDirty = !0; b.options.stacking && d.series.forEach(function (a) { a.options.stacking && a.visible && (a.isDirty = !0) }); b.linkedSeries.forEach(function (c) { c.setVisible(a, !1) }); f && (d.isDirtyBox = !0); v(b, l); !1 !== c && d.redraw()
                    }; b.prototype.show = function () { this.setVisible(!0) }; b.prototype.hide = function () { this.setVisible(!1) }; b.prototype.select =
                        function (a) { this.selected = a = this.options.selected = "undefined" === typeof a ? !this.selected : a; this.checkbox && (this.checkbox.checked = a); v(this, a ? "select" : "unselect") }; b.prototype.shouldShowTooltip = function (a, c, b) { void 0 === b && (b = {}); b.series = this; b.visiblePlotOnly = !0; return this.chart.isInsidePlot(a, c, b) }; b.defaultOptions = G; b.types = t.seriesTypes; b.registerType = t.registerSeriesType; return b
                }(); F(b.prototype, {
                    axisTypes: ["xAxis", "yAxis"], coll: "series", colorCounter: 0, cropShoulder: 1, directTouch: !1, drawLegendSymbol: w.drawLineMarker,
                    isCartesian: !0, kdAxisArray: ["clientX", "plotY"], parallelArrays: ["x", "y"], pointClass: y, requireSorting: !0, sorted: !0
                }); t.series = b; ""; ""; return b
        }); H(e, "Extensions/ScrollablePlotArea.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Axis/Axis.js"], e["Core/Chart/Chart.js"], e["Core/Series/Series.js"], e["Core/Renderer/RendererRegistry.js"], e["Core/Utilities.js"]], function (b, e, z, C, w, y) {
            var G = b.stop, t = y.addEvent, r = y.createElement, n = y.defined, h = y.merge, a = y.pick; t(z, "afterSetChartSize", function (a) {
                var b =
                    this.options.chart.scrollablePlotArea, f = b && b.minWidth; b = b && b.minHeight; if (!this.renderer.forExport) {
                        if (f) { if (this.scrollablePixelsX = f = Math.max(0, f - this.chartWidth)) { this.scrollablePlotBox = this.renderer.scrollablePlotBox = h(this.plotBox); this.plotBox.width = this.plotWidth += f; this.inverted ? this.clipBox.height += f : this.clipBox.width += f; var p = { 1: { name: "right", value: f } } } } else b && (this.scrollablePixelsY = f = Math.max(0, b - this.chartHeight), n(f) && (this.scrollablePlotBox = this.renderer.scrollablePlotBox = h(this.plotBox),
                            this.plotBox.height = this.plotHeight += f, this.inverted ? this.clipBox.width += f : this.clipBox.height += f, p = { 2: { name: "bottom", value: f } })); p && !a.skipAxes && this.axes.forEach(function (a) { p[a.side] ? a.getPlotLinePath = function () { var b = p[a.side].name, d = this[b]; this[b] = d - p[a.side].value; var f = e.prototype.getPlotLinePath.apply(this, arguments); this[b] = d; return f } : (a.setAxisSize(), a.setAxisTranslation()) })
                    }
            }); t(z, "render", function () {
                this.scrollablePixelsX || this.scrollablePixelsY ? (this.setUpScrolling && this.setUpScrolling(),
                    this.applyFixed()) : this.fixedDiv && this.applyFixed()
            }); z.prototype.setUpScrolling = function () {
                var a = this, b = { WebkitOverflowScrolling: "touch", overflowX: "hidden", overflowY: "hidden" }; this.scrollablePixelsX && (b.overflowX = "auto"); this.scrollablePixelsY && (b.overflowY = "auto"); this.scrollingParent = r("div", { className: "highcharts-scrolling-parent" }, { position: "relative" }, this.renderTo); this.scrollingContainer = r("div", { className: "highcharts-scrolling" }, b, this.scrollingParent); var k; t(this.scrollingContainer, "scroll",
                    function () { a.pointer && (delete a.pointer.chartPosition, a.hoverPoint && (k = a.hoverPoint), a.pointer.runPointActions(void 0, k, !0)) }); this.innerContainer = r("div", { className: "highcharts-inner-container" }, null, this.scrollingContainer); this.innerContainer.appendChild(this.container); this.setUpScrolling = null
            }; z.prototype.moveFixedElements = function () {
                var a = this.container, b = this.fixedRenderer, k = ".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-drillup-button .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" "),
                h; this.scrollablePixelsX && !this.inverted ? h = ".highcharts-yaxis" : this.scrollablePixelsX && this.inverted ? h = ".highcharts-xaxis" : this.scrollablePixelsY && !this.inverted ? h = ".highcharts-xaxis" : this.scrollablePixelsY && this.inverted && (h = ".highcharts-yaxis"); h && k.push("" + h + ":not(.highcharts-radial-axis)", "" + h + "-labels:not(.highcharts-radial-axis-labels)"); k.forEach(function (d) {
                    [].forEach.call(a.querySelectorAll(d), function (a) {
                        (a.namespaceURI === b.SVG_NS ? b.box : b.box.parentNode).appendChild(a); a.style.pointerEvents =
                            "auto"
                    })
                })
            }; z.prototype.applyFixed = function () {
                var b = !this.fixedDiv, d = this.options.chart, k = d.scrollablePlotArea, h = w.getRendererType(); b ? (this.fixedDiv = r("div", { className: "highcharts-fixed" }, { position: "absolute", overflow: "hidden", pointerEvents: "none", zIndex: (d.style && d.style.zIndex || 0) + 2, top: 0 }, null, !0), this.scrollingContainer && this.scrollingContainer.parentNode.insertBefore(this.fixedDiv, this.scrollingContainer), this.renderTo.style.overflow = "visible", this.fixedRenderer = d = new h(this.fixedDiv, this.chartWidth,
                    this.chartHeight, this.options.chart.style), this.scrollableMask = d.path().attr({ fill: this.options.chart.backgroundColor || "#fff", "fill-opacity": a(k.opacity, .85), zIndex: -1 }).addClass("highcharts-scrollable-mask").add(), t(this, "afterShowResetZoom", this.moveFixedElements), t(this, "afterApplyDrilldown", this.moveFixedElements), t(this, "afterLayOutTitles", this.moveFixedElements)) : this.fixedRenderer.setSize(this.chartWidth, this.chartHeight); if (this.scrollableDirty || b) this.scrollableDirty = !1, this.moveFixedElements();
                d = this.chartWidth + (this.scrollablePixelsX || 0); h = this.chartHeight + (this.scrollablePixelsY || 0); G(this.container); this.container.style.width = d + "px"; this.container.style.height = h + "px"; this.renderer.boxWrapper.attr({ width: d, height: h, viewBox: [0, 0, d, h].join(" ") }); this.chartBackground.attr({ width: d, height: h }); this.scrollingContainer.style.height = this.chartHeight + "px"; b && (k.scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixelsX * k.scrollPositionX), k.scrollPositionY && (this.scrollingContainer.scrollTop =
                    this.scrollablePixelsY * k.scrollPositionY)); h = this.axisOffset; b = this.plotTop - h[0] - 1; k = this.plotLeft - h[3] - 1; d = this.plotTop + this.plotHeight + h[2] + 1; h = this.plotLeft + this.plotWidth + h[1] + 1; var e = this.plotLeft + this.plotWidth - (this.scrollablePixelsX || 0), n = this.plotTop + this.plotHeight - (this.scrollablePixelsY || 0); b = this.scrollablePixelsX ? [["M", 0, b], ["L", this.plotLeft - 1, b], ["L", this.plotLeft - 1, d], ["L", 0, d], ["Z"], ["M", e, b], ["L", this.chartWidth, b], ["L", this.chartWidth, d], ["L", e, d], ["Z"]] : this.scrollablePixelsY ?
                        [["M", k, 0], ["L", k, this.plotTop - 1], ["L", h, this.plotTop - 1], ["L", h, 0], ["Z"], ["M", k, n], ["L", k, this.chartHeight], ["L", h, this.chartHeight], ["L", h, n], ["Z"]] : [["M", 0, 0]]; "adjustHeight" !== this.redrawTrigger && this.scrollableMask.attr({ d: b })
            }; t(e, "afterInit", function () { this.chart.scrollableDirty = !0 }); t(C, "show", function () { this.chart.scrollableDirty = !0 }); ""
        }); H(e, "Core/Axis/Stacking/StackItem.js", [e["Core/FormatUtilities.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (b, e, z) {
            var C = b.format,
            w = e.series, y = z.defined, G = z.destroyObjectProperties, t = z.isNumber, r = z.pick; b = function () {
                function b(b, a, f, d, k) { var h = b.chart.inverted; this.axis = b; this.isNegative = f; this.options = a = a || {}; this.x = d; this.cumulative = this.total = null; this.points = {}; this.hasValidPoints = !1; this.stack = k; this.rightCliff = this.leftCliff = 0; this.alignOptions = { align: a.align || (h ? f ? "left" : "right" : "center"), verticalAlign: a.verticalAlign || (h ? "middle" : f ? "bottom" : "top"), y: a.y, x: a.x }; this.textAlign = a.textAlign || (h ? f ? "right" : "left" : "center") }
                b.prototype.destroy = function () { G(this, this.axis) }; b.prototype.render = function (b) {
                    var a = this.axis.chart, f = this.options, d = f.format; d = d ? C(d, this, a) : f.formatter.call(this); this.label ? this.label.attr({ text: d, visibility: "hidden" }) : (this.label = a.renderer.label(d, null, null, f.shape, null, null, f.useHTML, !1, "stack-labels"), d = { r: f.borderRadius || 0, text: d, rotation: f.rotation, padding: r(f.padding, 5), visibility: "hidden" }, a.styledMode || (d.fill = f.backgroundColor, d.stroke = f.borderColor, d["stroke-width"] = f.borderWidth,
                        this.label.css(f.style)), this.label.attr(d), this.label.added || this.label.add(b)); this.label.labelrank = a.plotSizeY
                }; b.prototype.setOffset = function (b, a, f, d, k) {
                    var h = this.axis, e = h.chart; d = h.translate(h.stacking.usePercentage ? 100 : d ? d : this.total, 0, 0, 0, 1); f = h.translate(f ? f : 0); b = r(k, e.xAxis[0].translate(this.x)) + b; h = y(d) && this.getStackBox(e, this, b, d, a, Math.abs(d - f), h); a = this.label; f = this.isNegative; var n = this.textAlign; a && h && (b = a.getBBox(), k = a.padding, d = "justify" === r(this.options.overflow, "justify"), n = "left" ===
                        n ? e.inverted ? -k : k : "right" === n ? b.width : e.inverted && "center" === n ? b.width / 2 : e.inverted ? f ? b.width + k : -k : b.width / 2, f = e.inverted ? b.height / 2 : f ? -k : b.height, this.alignOptions.x = r(this.options.x, 0), this.alignOptions.y = r(this.options.y, 0), h.x -= n, h.y -= f, a.align(this.alignOptions, null, h), e.isInsidePlot(a.alignAttr.x + n - this.alignOptions.x, a.alignAttr.y + f - this.alignOptions.y) ? a.show() : (a.hide(), d = !1), d && w.prototype.justifyDataLabel.call(this.axis, a, this.alignOptions, a.alignAttr, b, h), a.attr({ x: a.alignAttr.x, y: a.alignAttr.y }),
                        r(!d && this.options.crop, !0) && ((e = t(a.x) && t(a.y) && e.isInsidePlot(a.x - k + a.width, a.y) && e.isInsidePlot(a.x + k, a.y)) || a.hide()))
                }; b.prototype.getStackBox = function (b, a, f, d, k, e, n) { var h = a.axis.reversed, p = b.inverted, D = n.height + n.pos - (p ? b.plotLeft : b.plotTop); a = a.isNegative && !h || !a.isNegative && h; return { x: p ? a ? d - n.right : d - e + n.pos - b.plotLeft : f + b.xAxis[0].transB - b.plotLeft, y: p ? n.height - f - k : a ? D - d - e : D - d, width: p ? e : k, height: p ? k : e } }; return b
            }(); ""; return b
        }); H(e, "Core/Axis/Stacking/StackingAxis.js", [e["Core/Animation/AnimationUtilities.js"],
        e["Core/Axis/Axis.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Axis/Stacking/StackItem.js"], e["Core/Utilities.js"]], function (b, e, z, C, w) {
            function y() {
                var a = this, c = a.inverted; a.yAxis.forEach(function (a) { a.stacking && a.stacking.stacks && a.hasVisibleSeries && (a.stacking.oldStacks = a.stacking.stacks) }); a.series.forEach(function (b) {
                    var d = b.xAxis && b.xAxis.options || {}; !b.options.stacking || !0 !== b.visible && !1 !== a.options.chart.ignoreHiddenSeries || (b.stackKey = [b.type, m(b.options.stack, ""), c ? d.top : d.left, c ? d.height :
                        d.width].join())
                })
            } function G() { var a = this.stacking; if (a) { var c = a.stacks; B(c, function (a, b) { x(a); c[b] = null }); a && a.stackTotalGroup && a.stackTotalGroup.destroy() } } function t() { this.stacking || (this.stacking = new u(this)) } function r(a, c, b, d) { !A(a) || a.x !== c || d && a.stackKey !== d ? a = { x: c, index: 0, key: d, stackKey: d } : a.index++; a.key = [b, c, a.index].join(); return a } function n() {
                var a = this, c = a.stackKey, b = a.yAxis.stacking.stacks, d = a.processedXData, f = a[a.options.stacking + "Stacker"], g; f && [c, "-" + c].forEach(function (c) {
                    for (var l =
                        d.length, k, h; l--;)k = d[l], g = a.getStackIndicator(g, k, a.index, c), (h = (k = b[c] && b[c][k]) && k.points[g.key]) && f.call(a, h, k, l)
                })
            } function h(a, c, b) { c = c.total ? 100 / c.total : 0; a[0] = D(a[0] * c); a[1] = D(a[1] * c); this.stackedYData[b] = a[1] } function a() {
                var a = this.yAxis.stacking; this.options.centerInCategory && (this.is("column") || this.is("columnrange")) && !this.options.stacking && 1 < this.chart.series.length ? k.setStackedPoints.call(this, "group") : a && B(a.stacks, function (c, b) {
                    "group" === b.slice(-5) && (B(c, function (a) { return a.destroy() }),
                        delete a.stacks[b])
                })
            } function f(a) {
                var c = this.chart, b = a || this.options.stacking; if (b && (!0 === this.visible || !1 === c.options.chart.ignoreHiddenSeries)) {
                    var d = this.processedXData, f = this.processedYData, g = [], k = f.length, h = this.options, e = h.threshold, p = m(h.startFromThreshold && e, 0); h = h.stack; a = a ? "" + this.type + ",".concat(b) : this.stackKey; var n = "-" + a, u = this.negStacks; c = "group" === b ? c.yAxis[0] : this.yAxis; var x = c.stacking.stacks, B = c.stacking.oldStacks, F, E; c.stacking.stacksTouched += 1; for (E = 0; E < k; E++) {
                        var r = d[E]; var t =
                            f[E]; var y = this.getStackIndicator(y, r, this.index); var z = y.key; var w = (F = u && t < (p ? 0 : e)) ? n : a; x[w] || (x[w] = {}); x[w][r] || (B[w] && B[w][r] ? (x[w][r] = B[w][r], x[w][r].total = null) : x[w][r] = new C(c, c.options.stackLabels, !!F, r, h)); w = x[w][r]; null !== t ? (w.points[z] = w.points[this.index] = [m(w.cumulative, p)], A(w.cumulative) || (w.base = z), w.touched = c.stacking.stacksTouched, 0 < y.index && !1 === this.singleStacks && (w.points[z][0] = w.points[this.index + "," + r + ",0"][0])) : w.points[z] = w.points[this.index] = null; "percent" === b ? (F = F ? a : n, u &&
                                x[F] && x[F][r] ? (F = x[F][r], w.total = F.total = Math.max(F.total, w.total) + Math.abs(t) || 0) : w.total = D(w.total + (Math.abs(t) || 0))) : "group" === b ? (q(t) && (t = t[0]), null !== t && (w.total = (w.total || 0) + 1)) : w.total = D(w.total + (t || 0)); w.cumulative = "group" === b ? (w.total || 1) - 1 : m(w.cumulative, p) + (t || 0); null !== t && (w.points[z].push(w.cumulative), g[E] = w.cumulative, w.hasValidPoints = !0)
                    } "percent" === b && (c.stacking.usePercentage = !0); "group" !== b && (this.stackedYData = g); c.stacking.oldStacks = {}
                }
            } var d = b.getDeferredAnimation, k = z.series.prototype,
                p = w.addEvent, D = w.correctFloat, A = w.defined, x = w.destroyObjectProperties, E = w.fireEvent, q = w.isArray, c = w.isNumber, B = w.objectEach, m = w.pick, u = function () {
                    function a(a) { this.oldStacks = {}; this.stacks = {}; this.stacksTouched = 0; this.axis = a } a.prototype.buildStacks = function () { var a = this.axis, c = a.series, b = a.options.reversedStacks, d = c.length, f; if (!a.isXAxis) { this.usePercentage = !1; for (f = d; f--;) { var g = c[b ? f : d - f - 1]; g.setStackedPoints(); g.setGroupedPoints() } for (f = 0; f < d; f++)c[f].modifyStacks(); E(a, "afterBuildStacks") } };
                    a.prototype.cleanStacks = function () { if (!this.axis.isXAxis) { if (this.oldStacks) var a = this.stacks = this.oldStacks; B(a, function (a) { B(a, function (a) { a.cumulative = a.total }) }) } }; a.prototype.resetStacks = function () { var a = this, b = a.stacks; a.axis.isXAxis || B(b, function (b) { B(b, function (d, f) { c(d.touched) && d.touched < a.stacksTouched ? (d.destroy(), delete b[f]) : (d.total = null, d.cumulative = null) }) }) }; a.prototype.renderStackTotals = function () {
                        var a = this.axis, c = a.chart, b = c.renderer, f = this.stacks; a = d(c, a.options.stackLabels &&
                            a.options.stackLabels.animation || !1); var g = this.stackTotalGroup = this.stackTotalGroup || b.g("stack-labels").attr({ zIndex: 6, opacity: 0 }).add(); g.translate(c.plotLeft, c.plotTop); B(f, function (a) { B(a, function (a) { a.render(g) }) }); g.animate({ opacity: 1 }, a)
                    }; return a
                }(), g; (function (c) {
                    var b = []; c.compose = function (c, d, g) {
                        -1 === b.indexOf(c) && (b.push(c), p(c, "init", t), p(c, "destroy", G)); -1 === b.indexOf(d) && (b.push(d), d.prototype.getStacks = y); -1 === b.indexOf(g) && (b.push(g), c = g.prototype, c.getStackIndicator = r, c.modifyStacks =
                            n, c.percentStacker = h, c.setGroupedPoints = a, c.setStackedPoints = f)
                    }
                })(g || (g = {})); return g
        }); H(e, "Series/Line/LineSeries.js", [e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (b, e, z) {
            var C = this && this.__extends || function () {
                var b = function (e, r) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, h) { b.__proto__ = h } || function (b, h) { for (var a in h) h.hasOwnProperty(a) && (b[a] = h[a]) }; return b(e, r) }; return function (e, r) {
                    function n() { this.constructor = e }
                    b(e, r); e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                }
            }(), w = z.defined, y = z.merge; z = function (e) {
                function t() { var b = null !== e && e.apply(this, arguments) || this; b.data = void 0; b.options = void 0; b.points = void 0; return b } C(t, e); t.prototype.drawGraph = function () {
                    var b = this, e = this.options, h = (this.gappedPath || this.getGraphPath).call(this), a = this.chart.styledMode, f = [["graph", "highcharts-graph"]]; a || f[0].push(e.lineColor || this.color || "#cccccc", e.dashStyle); f = b.getZonesGraphs(f); f.forEach(function (d,
                        f) { var k = d[0], n = b[k], A = n ? "animate" : "attr"; n ? (n.endX = b.preventGraphAnimation ? null : h.xMap, n.animate({ d: h })) : h.length && (b[k] = n = b.chart.renderer.path(h).addClass(d[1]).attr({ zIndex: 1 }).add(b.group)); n && !a && (k = { stroke: d[2], "stroke-width": e.lineWidth || 0, fill: b.fillGraph && b.color || "none" }, d[3] ? k.dashstyle = d[3] : "square" !== e.linecap && (k["stroke-linecap"] = k["stroke-linejoin"] = "round"), n[A](k).shadow(2 > f && e.shadow)); n && (n.startX = h.xMap, n.isArea = h.isArea) })
                }; t.prototype.getGraphPath = function (b, e, h) {
                    var a = this,
                    f = a.options, d = [], k = [], p, n = f.step; b = b || a.points; var A = b.reversed; A && b.reverse(); (n = { right: 1, center: 2 }[n] || n && 3) && A && (n = 4 - n); b = this.getValidPoints(b, !1, !(f.connectNulls && !e && !h)); b.forEach(function (x, A) {
                        var q = x.plotX, c = x.plotY, B = b[A - 1]; (x.leftCliff || B && B.rightCliff) && !h && (p = !0); x.isNull && !w(e) && 0 < A ? p = !f.connectNulls : x.isNull && !e ? p = !0 : (0 === A || p ? A = [["M", x.plotX, x.plotY]] : a.getPointSpline ? A = [a.getPointSpline(b, x, A)] : n ? (A = 1 === n ? [["L", B.plotX, c]] : 2 === n ? [["L", (B.plotX + q) / 2, B.plotY], ["L", (B.plotX + q) / 2, c]] :
                            [["L", q, B.plotY]], A.push(["L", q, c])) : A = [["L", q, c]], k.push(x.x), n && (k.push(x.x), 2 === n && k.push(x.x)), d.push.apply(d, A), p = !1)
                    }); d.xMap = k; return a.graphPath = d
                }; t.prototype.getZonesGraphs = function (b) { this.zones.forEach(function (e, h) { h = ["zone-graph-" + h, "highcharts-graph highcharts-zone-graph-" + h + " " + (e.className || "")]; this.chart.styledMode || h.push(e.color || this.color, e.dashStyle || this.options.dashStyle); b.push(h) }, this); return b }; t.defaultOptions = y(b.defaultOptions, {}); return t
            }(b); e.registerSeriesType("line",
                z); ""; return z
        }); H(e, "Series/Area/AreaSeries.js", [e["Core/Color/Color.js"], e["Core/Legend/LegendSymbol.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (b, e, z, C) {
            var w = this && this.__extends || function () {
                var b = function (a, f) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, b) { a.__proto__ = b } || function (a, b) { for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]) }; return b(a, f) }; return function (a, f) {
                    function d() { this.constructor = a } b(a, f); a.prototype = null === f ? Object.create(f) :
                        (d.prototype = f.prototype, new d)
                }
            }(), y = b.parse, G = z.seriesTypes.line; b = C.extend; var t = C.merge, r = C.objectEach, n = C.pick; C = function (b) {
                function a() { var a = null !== b && b.apply(this, arguments) || this; a.data = void 0; a.options = void 0; a.points = void 0; return a } w(a, b); a.prototype.drawGraph = function () {
                    this.areaPath = []; b.prototype.drawGraph.apply(this); var a = this, d = this.areaPath, k = this.options, h = [["area", "highcharts-area", this.color, k.fillColor]]; this.zones.forEach(function (b, d) {
                        h.push(["zone-area-" + d, "highcharts-area highcharts-zone-area-" +
                            d + " " + b.className, b.color || a.color, b.fillColor || k.fillColor])
                    }); h.forEach(function (b) { var f = b[0], h = {}, e = a[f], q = e ? "animate" : "attr"; e ? (e.endX = a.preventGraphAnimation ? null : d.xMap, e.animate({ d: d })) : (h.zIndex = 0, e = a[f] = a.chart.renderer.path(d).addClass(b[1]).add(a.group), e.isArea = !0); a.chart.styledMode || (h.fill = n(b[3], y(b[2]).setOpacity(n(k.fillOpacity, .75)).get())); e[q](h); e.startX = d.xMap; e.shiftUnit = k.step ? 2 : 1 })
                }; a.prototype.getGraphPath = function (a) {
                    var b = G.prototype.getGraphPath, f = this.options, h = f.stacking,
                    e = this.yAxis, A = [], x = [], E = this.index, q = e.stacking.stacks[this.stackKey], c = f.threshold, B = Math.round(e.getThreshold(f.threshold)); f = n(f.connectNulls, "percent" === h); var m = function (b, d, f) { var g = a[b]; b = h && q[g.x].points[E]; var k = g[f + "Null"] || 0; f = g[f + "Cliff"] || 0; g = !0; if (f || k) { var m = (k ? b[0] : b[1]) + f; var p = b[0] + f; g = !!k } else !h && a[d] && a[d].isNull && (m = p = c); "undefined" !== typeof m && (x.push({ plotX: l, plotY: null === m ? B : e.getThreshold(m), isNull: g, isCliff: !0 }), A.push({ plotX: l, plotY: null === p ? B : e.getThreshold(p), doCurve: !1 })) };
                    a = a || this.points; h && (a = this.getStackPoints(a)); for (var u = 0, g = a.length; u < g; ++u) { h || (a[u].leftCliff = a[u].rightCliff = a[u].leftNull = a[u].rightNull = void 0); var F = a[u].isNull; var l = n(a[u].rectPlotX, a[u].plotX); var v = h ? n(a[u].yBottom, B) : B; if (!F || f) f || m(u, u - 1, "left"), F && !h && f || (x.push(a[u]), A.push({ x: u, plotX: l, plotY: v })), f || m(u, u + 1, "right") } m = b.call(this, x, !0, !0); A.reversed = !0; F = b.call(this, A, !0, !0); (v = F[0]) && "M" === v[0] && (F[0] = ["L", v[1], v[2]]); F = m.concat(F); F.length && F.push(["Z"]); b = b.call(this, x, !1, f); F.xMap =
                        m.xMap; this.areaPath = F; return b
                }; a.prototype.getStackPoints = function (a) {
                    var b = this, f = [], h = [], e = this.xAxis, A = this.yAxis, x = A.stacking.stacks[this.stackKey], E = {}, q = A.series, c = q.length, B = A.options.reversedStacks ? 1 : -1, m = q.indexOf(b); a = a || this.points; if (this.options.stacking) {
                        for (var u = 0; u < a.length; u++)a[u].leftNull = a[u].rightNull = void 0, E[a[u].x] = a[u]; r(x, function (a, c) { null !== a.total && h.push(c) }); h.sort(function (a, c) { return a - c }); var g = q.map(function (a) { return a.visible }); h.forEach(function (a, d) {
                            var l =
                                0, k, p; if (E[a] && !E[a].isNull) f.push(E[a]), [-1, 1].forEach(function (f) { var l = 1 === f ? "rightNull" : "leftNull", e = x[h[d + f]], n = 0; if (e) for (var u = m; 0 <= u && u < c;) { var v = q[u].index; k = e.points[v]; k || (v === b.index ? E[a][l] = !0 : g[u] && (p = x[a].points[v]) && (n -= p[1] - p[0])); u += B } E[a][1 === f ? "rightCliff" : "leftCliff"] = n }); else { for (var u = m; 0 <= u && u < c;) { if (k = x[a].points[q[u].index]) { l = k[1]; break } u += B } l = n(l, 0); l = A.translate(l, 0, 1, 0, 1); f.push({ isNull: !0, plotX: e.translate(a, 0, 0, 0, 1), x: a, plotY: l, yBottom: l }) }
                        })
                    } return f
                }; a.defaultOptions =
                    t(G.defaultOptions, { threshold: 0 }); return a
            }(G); b(C.prototype, { singleStacks: !1, drawLegendSymbol: e.drawRectangle }); z.registerSeriesType("area", C); ""; return C
        }); H(e, "Series/Spline/SplineSeries.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (b, e) {
            var z = this && this.__extends || function () {
                var b = function (e, r) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, h) { b.__proto__ = h } || function (b, h) { for (var a in h) h.hasOwnProperty(a) && (b[a] = h[a]) }; return b(e, r) }; return function (e,
                    r) { function n() { this.constructor = e } b(e, r); e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) }
            }(), C = b.seriesTypes.line, w = e.merge, y = e.pick; e = function (b) {
                function e() { var e = null !== b && b.apply(this, arguments) || this; e.data = void 0; e.options = void 0; e.points = void 0; return e } z(e, b); e.prototype.getPointSpline = function (b, e, h) {
                    var a = e.plotX || 0, f = e.plotY || 0, d = b[h - 1]; h = b[h + 1]; if (d && !d.isNull && !1 !== d.doCurve && !e.isCliff && h && !h.isNull && !1 !== h.doCurve && !e.isCliff) {
                        b = d.plotY || 0; var k = h.plotX || 0; h =
                            h.plotY || 0; var p = 0; var n = (1.5 * a + (d.plotX || 0)) / 2.5; var A = (1.5 * f + b) / 2.5; k = (1.5 * a + k) / 2.5; var x = (1.5 * f + h) / 2.5; k !== n && (p = (x - A) * (k - a) / (k - n) + f - x); A += p; x += p; A > b && A > f ? (A = Math.max(b, f), x = 2 * f - A) : A < b && A < f && (A = Math.min(b, f), x = 2 * f - A); x > h && x > f ? (x = Math.max(h, f), A = 2 * f - x) : x < h && x < f && (x = Math.min(h, f), A = 2 * f - x); e.rightContX = k; e.rightContY = x
                    } e = ["C", y(d.rightContX, d.plotX, 0), y(d.rightContY, d.plotY, 0), y(n, a, 0), y(A, f, 0), a, f]; d.rightContX = d.rightContY = void 0; return e
                }; e.defaultOptions = w(C.defaultOptions); return e
            }(C); b.registerSeriesType("spline",
                e); ""; return e
        }); H(e, "Series/AreaSpline/AreaSplineSeries.js", [e["Series/Spline/SplineSeries.js"], e["Core/Legend/LegendSymbol.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (b, e, z, C) {
            var w = this && this.__extends || function () {
                var b = function (h, a) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, b) { a.__proto__ = b } || function (a, b) { for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]) }; return b(h, a) }; return function (h, a) {
                    function f() { this.constructor = h } b(h, a); h.prototype =
                        null === a ? Object.create(a) : (f.prototype = a.prototype, new f)
                }
            }(), y = z.seriesTypes, G = y.area; y = y.area.prototype; var t = C.extend, r = C.merge; C = function (e) { function h() { var a = null !== e && e.apply(this, arguments) || this; a.data = void 0; a.points = void 0; a.options = void 0; return a } w(h, e); h.defaultOptions = r(b.defaultOptions, G.defaultOptions); return h }(b); t(C.prototype, { getGraphPath: y.getGraphPath, getStackPoints: y.getStackPoints, drawGraph: y.drawGraph, drawLegendSymbol: e.drawRectangle }); z.registerSeriesType("areaspline", C);
            ""; return C
        }); H(e, "Series/Column/ColumnSeriesDefaults.js", [], function () { ""; return { borderRadius: 0, centerInCategory: !1, groupPadding: .2, marker: null, pointPadding: .1, minPointLength: 0, cropThreshold: 50, pointRange: null, states: { hover: { halo: !1, brightness: .1 }, select: { color: "#cccccc", borderColor: "#000000" } }, dataLabels: { align: void 0, verticalAlign: void 0, y: void 0 }, startFromThreshold: !0, stickyTracking: !1, tooltip: { distance: 6 }, threshold: 0, borderColor: "#ffffff" } }); H(e, "Series/Column/ColumnSeries.js", [e["Core/Animation/AnimationUtilities.js"],
        e["Core/Color/Color.js"], e["Series/Column/ColumnSeriesDefaults.js"], e["Core/Globals.js"], e["Core/Legend/LegendSymbol.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (b, e, z, C, w, y, G, t) {
            var r = this && this.__extends || function () {
                var a = function (c, b) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, c) { a.__proto__ = c } || function (a, c) { for (var b in c) c.hasOwnProperty(b) && (a[b] = c[b]) }; return a(c, b) }; return function (c, b) {
                    function d() {
                        this.constructor =
                        c
                    } a(c, b); c.prototype = null === b ? Object.create(b) : (d.prototype = b.prototype, new d)
                }
            }(), n = b.animObject, h = e.parse, a = C.hasTouch; b = C.noop; var f = t.clamp, d = t.defined, k = t.extend, p = t.fireEvent, D = t.isArray, A = t.isNumber, x = t.merge, E = t.pick, q = t.objectEach; t = function (c) {
                function b() { var a = null !== c && c.apply(this, arguments) || this; a.borderWidth = void 0; a.data = void 0; a.group = void 0; a.options = void 0; a.points = void 0; return a } r(b, c); b.prototype.animate = function (a) {
                    var c = this, b = this.yAxis, d = c.options, l = this.chart.inverted,
                    h = {}, e = l ? "translateX" : "translateY"; if (a) h.scaleY = .001, a = f(b.toPixels(d.threshold), b.pos, b.pos + b.len), l ? h.translateX = a - b.len : h.translateY = a, c.clipBox && c.setClip(), c.group.attr(h); else { var m = Number(c.group.attr(e)); c.group.animate({ scaleY: 1 }, k(n(c.options.animation), { step: function (a, d) { c.group && (h[e] = m + d.pos * (b.pos - m), c.group.attr(h)) } })) }
                }; b.prototype.init = function (a, b) {
                    c.prototype.init.apply(this, arguments); var d = this; a = d.chart; a.hasRendered && a.series.forEach(function (a) {
                        a.type === d.type && (a.isDirty =
                            !0)
                    })
                }; b.prototype.getColumnMetrics = function () {
                    var a = this, c = a.options, b = a.xAxis, d = a.yAxis, f = b.options.reversedStacks; f = b.reversed && !f || !b.reversed && f; var k = {}, h, e = 0; !1 === c.grouping ? e = 1 : a.chart.series.forEach(function (c) { var b = c.yAxis, f = c.options; if (c.type === a.type && (c.visible || !a.chart.options.chart.ignoreHiddenSeries) && d.len === b.len && d.pos === b.pos) { if (f.stacking && "group" !== f.stacking) { h = c.stackKey; "undefined" === typeof k[h] && (k[h] = e++); var g = k[h] } else !1 !== f.grouping && (g = e++); c.columnIndex = g } }); var q =
                        Math.min(Math.abs(b.transA) * (b.ordinal && b.ordinal.slope || c.pointRange || b.closestPointRange || b.tickInterval || 1), b.len), p = q * c.groupPadding, n = (q - 2 * p) / (e || 1); c = Math.min(c.maxPointWidth || b.len, E(c.pointWidth, n * (1 - 2 * c.pointPadding))); a.columnMetrics = { width: c, offset: (n - c) / 2 + (p + ((a.columnIndex || 0) + (f ? 1 : 0)) * n - q / 2) * (f ? -1 : 1), paddedWidth: n, columnCount: e }; return a.columnMetrics
                }; b.prototype.crispCol = function (a, c, b, d) {
                    var f = this.chart, g = this.borderWidth, k = -(g % 2 ? .5 : 0); g = g % 2 ? .5 : 1; f.inverted && f.renderer.isVML && (g +=
                        1); this.options.crisp && (b = Math.round(a + b) + k, a = Math.round(a) + k, b -= a); d = Math.round(c + d) + g; k = .5 >= Math.abs(c) && .5 < d; c = Math.round(c) + g; d -= c; k && d && (--c, d += 1); return { x: a, y: c, width: b, height: d }
                }; b.prototype.adjustForMissingColumns = function (a, c, b, d) {
                    var f = this, g = this.options.stacking; if (!b.isNull && 1 < d.columnCount) {
                        var k = this.yAxis.options.reversedStacks, h = 0, e = k ? 0 : -d.columnCount; q(this.yAxis.stacking && this.yAxis.stacking.stacks, function (a) {
                            if ("number" === typeof b.x) {
                                var c = a[b.x.toString()]; c && (a = c.points[f.index],
                                    g ? (a && (h = e), c.hasValidPoints && (k ? e++ : e--)) : D(a) && (a = Object.keys(c.points).filter(function (a) { return !a.match(",") && c.points[a] && 1 < c.points[a].length }).map(parseFloat).sort(function (a, c) { return c - a }), h = a.indexOf(f.index), e = a.length))
                            }
                        }); a = (b.plotX || 0) + ((e - 1) * d.paddedWidth + c) / 2 - c - h * d.paddedWidth
                    } return a
                }; b.prototype.translate = function () {
                    var a = this, c = a.chart, b = a.options, k = a.dense = 2 > a.closestPointRange * a.xAxis.transA; k = a.borderWidth = E(b.borderWidth, k ? 0 : 1); var l = a.xAxis, h = a.yAxis, e = b.threshold, q = a.translatedThreshold =
                        h.getThreshold(e), p = E(b.minPointLength, 5), n = a.getColumnMetrics(), x = n.width, B = a.pointXOffset = n.offset, D = a.dataMin, r = a.dataMax, t = a.barW = Math.max(x, 1 + 2 * k); c.inverted && (q -= .5); b.pointPadding && (t = Math.ceil(t)); y.prototype.translate.apply(a); a.points.forEach(function (g) {
                            var k = E(g.yBottom, q), m = 999 + Math.abs(k), u = g.plotX || 0; m = f(g.plotY, -m, h.len + m); var v = Math.min(m, k), F = Math.max(m, k) - v, y = x, w = u + B, z = t; p && Math.abs(F) < p && (F = p, u = !h.reversed && !g.negative || h.reversed && g.negative, A(e) && A(r) && g.y === e && r <= e && (h.min ||
                                0) < e && (D !== r || (h.max || 0) <= e) && (u = !u), v = Math.abs(v - q) > p ? k - p : q - (u ? p : 0)); d(g.options.pointWidth) && (y = z = Math.ceil(g.options.pointWidth), w -= Math.round((y - x) / 2)); b.centerInCategory && (w = a.adjustForMissingColumns(w, y, g, n)); g.barX = w; g.pointWidth = y; g.tooltipPos = c.inverted ? [f(h.len + h.pos - c.plotLeft - m, h.pos - c.plotLeft, h.len + h.pos - c.plotLeft), l.len + l.pos - c.plotTop - w - z / 2, F] : [l.left - c.plotLeft + w + z / 2, f(m + h.pos - c.plotTop, h.pos - c.plotTop, h.len + h.pos - c.plotTop), F]; g.shapeType = a.pointClass.prototype.shapeType || "rect";
                            g.shapeArgs = a.crispCol.apply(a, g.isNull ? [w, q, z, 0] : [w, v, z, F])
                        })
                }; b.prototype.drawGraph = function () { this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data") }; b.prototype.pointAttribs = function (a, c) {
                    var b = this.options, d = this.pointAttrToOptions || {}, f = d.stroke || "borderColor", k = d["stroke-width"] || "borderWidth", e = a && a.color || this.color, m = a && a[f] || b[f] || e; d = a && a.options.dashStyle || b.dashStyle; var q = a && a[k] || b[k] || this[k] || 0, p = E(a && a.opacity, b.opacity, 1); if (a && this.zones.length) {
                        var n = a.getZone();
                        e = a.options.color || n && (n.color || a.nonZonedColor) || this.color; n && (m = n.borderColor || m, d = n.dashStyle || d, q = n.borderWidth || q)
                    } c && a && (a = x(b.states[c], a.options.states && a.options.states[c] || {}), c = a.brightness, e = a.color || "undefined" !== typeof c && h(e).brighten(a.brightness).get() || e, m = a[f] || m, q = a[k] || q, d = a.dashStyle || d, p = E(a.opacity, p)); f = { fill: e, stroke: m, "stroke-width": q, opacity: p }; d && (f.dashstyle = d); return f
                }; b.prototype.drawPoints = function (a) {
                    void 0 === a && (a = this.points); var c = this, b = this.chart, d = c.options,
                        f = b.renderer, k = d.animationLimit || 250, h; a.forEach(function (a) {
                            var g = a.graphic, l = !!g, e = g && b.pointCount < k ? "animate" : "attr"; if (A(a.plotY) && null !== a.y) {
                                h = a.shapeArgs; g && a.hasNewShapeType() && (g = g.destroy()); c.enabledDataSorting && (a.startXPos = c.xAxis.reversed ? -(h ? h.width || 0 : 0) : c.xAxis.width); g || (a.graphic = g = f[a.shapeType](h).add(a.group || c.group)) && c.enabledDataSorting && b.hasRendered && b.pointCount < k && (g.attr({ x: a.startXPos }), l = !0, e = "animate"); if (g && l) g[e](x(h)); if (d.borderRadius) g[e]({ r: d.borderRadius });
                                b.styledMode || g[e](c.pointAttribs(a, a.selected && "select")).shadow(!1 !== a.allowShadow && d.shadow, null, d.stacking && !d.borderRadius); g && (g.addClass(a.getClassName(), !0), g.attr({ visibility: a.visible ? "inherit" : "hidden" }))
                            } else g && (a.graphic = g.destroy())
                        })
                }; b.prototype.drawTracker = function (c) {
                    void 0 === c && (c = this.points); var b = this, d = b.chart, f = d.pointer, l = function (a) { var c = f.getPointFromEvent(a); "undefined" !== typeof c && (f.isDirectTouch = !0, c.onMouseOver(a)) }, k; c.forEach(function (a) {
                        k = D(a.dataLabels) ? a.dataLabels :
                            a.dataLabel ? [a.dataLabel] : []; a.graphic && (a.graphic.element.point = a); k.forEach(function (c) { c.div ? c.div.point = a : c.element.point = a })
                    }); b._hasTracking || (b.trackerGroups.forEach(function (c) { if (b[c]) { b[c].addClass("highcharts-tracker").on("mouseover", l).on("mouseout", function (a) { f.onTrackerMouseOut(a) }); if (a) b[c].on("touchstart", l); !d.styledMode && b.options.cursor && b[c].css({ cursor: b.options.cursor }) } }), b._hasTracking = !0); p(this, "afterDrawTracker")
                }; b.prototype.remove = function () {
                    var a = this, c = a.chart; c.hasRendered &&
                        c.series.forEach(function (c) { c.type === a.type && (c.isDirty = !0) }); y.prototype.remove.apply(a, arguments)
                }; b.defaultOptions = x(y.defaultOptions, z); return b
            }(y); k(t.prototype, { cropShoulder: 0, directTouch: !0, drawLegendSymbol: w.drawRectangle, getSymbol: b, negStacks: !0, trackerGroups: ["group", "dataLabelsGroup"] }); G.registerSeriesType("column", t); ""; return t
        }); H(e, "Core/Series/DataLabel.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/FormatUtilities.js"], e["Core/Utilities.js"]], function (b, e, z) {
            var C = b.getDeferredAnimation,
            w = e.format, y = z.defined, G = z.extend, t = z.fireEvent, r = z.isArray, n = z.isString, h = z.merge, a = z.objectEach, f = z.pick, d = z.splat, k; (function (b) {
                function k(a, c, b, d, l) {
                    var g = this, k = this.chart, h = this.isCartesian && k.inverted, e = this.enabledDataSorting, m = a.plotX, q = a.plotY, p = b.rotation, n = b.align, u = y(m) && y(q) && k.isInsidePlot(m, Math.round(q), { inverted: h, paneCoordinates: !0, series: g }), x = function (b) { e && g.xAxis && !A && g.setDataLabelStartPos(a, c, l, u, b) }, A = "justify" === f(b.overflow, e ? "none" : "justify"), B = this.visible && !1 !== a.visible &&
                        y(m) && (a.series.forceDL || e && !A || u || f(b.inside, !!this.options.stacking) && d && k.isInsidePlot(m, h ? d.x + 1 : d.y + d.height - 1, { inverted: h, paneCoordinates: !0, series: g })); if (B && y(m) && y(q)) {
                            p && c.attr({ align: n }); n = c.getBBox(!0); var E = [0, 0]; var D = k.renderer.fontMetrics(k.styledMode ? void 0 : b.style.fontSize, c).b; d = G({ x: h ? this.yAxis.len - q : m, y: Math.round(h ? this.xAxis.len - m : q), width: 0, height: 0 }, d); G(b, { width: n.width, height: n.height }); p ? (A = !1, E = k.renderer.rotCorr(D, p), D = {
                                x: d.x + (b.x || 0) + d.width / 2 + E.x, y: d.y + (b.y || 0) + {
                                    top: 0,
                                    middle: .5, bottom: 1
                                }[b.verticalAlign] * d.height
                            }, E = [n.x - Number(c.attr("x")), n.y - Number(c.attr("y"))], x(D), c[l ? "attr" : "animate"](D)) : (x(d), c.align(b, void 0, d), D = c.alignAttr); A && 0 <= d.height ? this.justifyDataLabel(c, b, D, n, d, l) : f(b.crop, !0) && (d = D.x, x = D.y, d += E[0], x += E[1], B = k.isInsidePlot(d, x, { paneCoordinates: !0, series: g }) && k.isInsidePlot(d + n.width, x + n.height, { paneCoordinates: !0, series: g })); if (b.shape && !p) c[l ? "attr" : "animate"]({ anchorX: h ? k.plotWidth - q : m, anchorY: h ? k.plotHeight - m : q })
                        } l && e && (c.placed = !1); B ||
                            e && !A ? c.show() : (c.hide(), c.placed = !1)
                } function e(a, c) { var b = c.filter; return b ? (c = b.operator, a = a[b.property], b = b.value, ">" === c && a > b || "<" === c && a < b || ">=" === c && a >= b || "<=" === c && a <= b || "==" === c && a == b || "===" === c && a === b ? !0 : !1) : !0 } function p(c) {
                    void 0 === c && (c = this.points); var b = this, g = b.chart, k = b.options, l = b.hasRendered || 0, h = g.renderer, m = g.options.chart, p = m.backgroundColor; m = m.plotBackgroundColor; var x = h.getContrast(n(m) && m || n(p) && p || "#000000"), A = k.dataLabels, B; p = A.animation; p = A.defer ? C(g, p, b) : { defer: 0, duration: 0 };
                    A = q(q(g.options.plotOptions && g.options.plotOptions.series && g.options.plotOptions.series.dataLabels, g.options.plotOptions && g.options.plotOptions[b.type] && g.options.plotOptions[b.type].dataLabels), A); t(this, "drawDataLabels"); if (r(A) || A.enabled || b._hasPointLabels) {
                        var E = b.plotGroup("dataLabelsGroup", "data-labels", l ? "inherit" : "hidden", A.zIndex || 6); E.attr({ opacity: +l }); !l && (l = b.dataLabelsGroup) && (b.visible && E.show(), l[k.animation ? "animate" : "attr"]({ opacity: 1 }, p)); c.forEach(function (c) {
                            B = d(q(A, c.dlOptions ||
                                c.options && c.options.dataLabels)); B.forEach(function (d, l) {
                                    var m = d.enabled && (!c.isNull || c.dataLabelOnNull) && e(c, d), q = c.connectors ? c.connectors[l] : c.connector, p = c.dataLabels ? c.dataLabels[l] : c.dataLabel, n = !p, v = f(d.distance, c.labelDistance); if (m) {
                                        var u = c.getLabelConfig(); var A = f(d[c.formatPrefix + "Format"], d.format); u = y(A) ? w(A, u, g) : (d[c.formatPrefix + "Formatter"] || d.formatter).call(u, d); A = d.style; var B = d.rotation; g.styledMode || (A.color = f(d.color, A.color, b.color, "#000000"), "contrast" === A.color ? (c.contrastColor =
                                            h.getContrast(c.color || b.color), A.color = !y(v) && d.inside || 0 > v || k.stacking ? c.contrastColor : x) : delete c.contrastColor, k.cursor && (A.cursor = k.cursor)); var D = { r: d.borderRadius || 0, rotation: B, padding: d.padding, zIndex: 1 }; g.styledMode || (D.fill = d.backgroundColor, D.stroke = d.borderColor, D["stroke-width"] = d.borderWidth); a(D, function (a, c) { "undefined" === typeof a && delete D[c] })
                                    } !p || m && y(u) && !!p.div === !!d.useHTML && (p.rotation && d.rotation || p.rotation === d.rotation) || (n = !0, c.dataLabel = p = c.dataLabel && c.dataLabel.destroy(),
                                        c.dataLabels && (1 === c.dataLabels.length ? delete c.dataLabels : delete c.dataLabels[l]), l || delete c.dataLabel, q && (c.connector = c.connector.destroy(), c.connectors && (1 === c.connectors.length ? delete c.connectors : delete c.connectors[l]))); m && y(u) ? (p ? D.text = u : (c.dataLabels = c.dataLabels || [], p = c.dataLabels[l] = B ? h.text(u, 0, 0, d.useHTML).addClass("highcharts-data-label") : h.label(u, 0, 0, d.shape, null, null, d.useHTML, null, "data-label"), l || (c.dataLabel = p), p.addClass(" highcharts-data-label-color-" + c.colorIndex + " " + (d.className ||
                                            "") + (d.useHTML ? " highcharts-tracker" : ""))), p.options = d, p.attr(D), g.styledMode || p.css(A).shadow(d.shadow), (l = d[c.formatPrefix + "TextPath"] || d.textPath) && !d.useHTML && (p.setTextPath(c.getDataLabelPath && c.getDataLabelPath(p) || c.graphic, l), c.dataLabelPath && !l.enabled && (c.dataLabelPath = c.dataLabelPath.destroy())), p.added || p.add(E), b.alignDataLabel(c, p, d, null, n)) : p && p.hide()
                                })
                        })
                    } t(this, "afterDrawDataLabels")
                } function E(a, c, b, d, f, k) {
                    var g = this.chart, l = c.align, h = c.verticalAlign, e = a.box ? 0 : a.padding || 0, m = c.x;
                    m = void 0 === m ? 0 : m; var q = c.y; q = void 0 === q ? 0 : q; var p = (b.x || 0) + e; if (0 > p) { "right" === l && 0 <= m ? (c.align = "left", c.inside = !0) : m -= p; var n = !0 } p = (b.x || 0) + d.width - e; p > g.plotWidth && ("left" === l && 0 >= m ? (c.align = "right", c.inside = !0) : m += g.plotWidth - p, n = !0); p = b.y + e; 0 > p && ("bottom" === h && 0 <= q ? (c.verticalAlign = "top", c.inside = !0) : q -= p, n = !0); p = (b.y || 0) + d.height - e; p > g.plotHeight && ("top" === h && 0 >= q ? (c.verticalAlign = "bottom", c.inside = !0) : q += g.plotHeight - p, n = !0); n && (c.x = m, c.y = q, a.placed = !k, a.align(c, void 0, f)); return n
                } function q(a,
                    c) { var b = [], d; if (r(a) && !r(c)) b = a.map(function (a) { return h(a, c) }); else if (r(c) && !r(a)) b = c.map(function (c) { return h(a, c) }); else if (r(a) || r(c)) for (d = Math.max(a.length, c.length); d--;)b[d] = h(a[d], c[d]); else b = h(a, c); return b } function c(a, c, b, d, f) {
                        var g = this.chart, l = g.inverted, k = this.xAxis, h = k.reversed, e = l ? c.height / 2 : c.width / 2; a = (a = a.pointWidth) ? a / 2 : 0; c.startXPos = l ? f.x : h ? -e - a : k.width - e + a; c.startYPos = l ? h ? this.yAxis.height - e + a : -e - a : f.y; d ? "hidden" === c.visibility && (c.show(), c.attr({ opacity: 0 }).animate({ opacity: 1 })) :
                            c.attr({ opacity: 1 }).animate({ opacity: 0 }, void 0, c.hide); g.hasRendered && (b && c.attr({ x: c.startXPos, y: c.startYPos }), c.placed = !0)
                    } var B = []; b.compose = function (a) { if (-1 === B.indexOf(a)) { var b = a.prototype; B.push(a); b.alignDataLabel = k; b.drawDataLabels = p; b.justifyDataLabel = E; b.setDataLabelStartPos = c } }
            })(k || (k = {})); ""; return k
        }); H(e, "Series/Column/ColumnDataLabel.js", [e["Core/Series/DataLabel.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (b, e, z) {
            var C = e.series, w = z.merge, y = z.pick, G; (function (e) {
                function r(b,
                    a, f, d, k) {
                        var h = this.chart.inverted, e = b.series, n = (e.xAxis ? e.xAxis.len : this.chart.plotSizeX) || 0; e = (e.yAxis ? e.yAxis.len : this.chart.plotSizeY) || 0; var x = b.dlBox || b.shapeArgs, E = y(b.below, b.plotY > y(this.translatedThreshold, e)), q = y(f.inside, !!this.options.stacking); x && (d = w(x), 0 > d.y && (d.height += d.y, d.y = 0), x = d.y + d.height - e, 0 < x && x < d.height && (d.height -= x), h && (d = { x: e - d.y - d.height, y: n - d.x - d.width, width: d.height, height: d.width }), q || (h ? (d.x += E ? 0 : d.width, d.width = 0) : (d.y += E ? d.height : 0, d.height = 0))); f.align = y(f.align,
                            !h || q ? "center" : E ? "right" : "left"); f.verticalAlign = y(f.verticalAlign, h || q ? "middle" : E ? "top" : "bottom"); C.prototype.alignDataLabel.call(this, b, a, f, d, k); f.inside && b.contrastColor && a.css({ color: b.contrastColor })
                } var n = []; e.compose = function (e) { b.compose(C); -1 === n.indexOf(e) && (n.push(e), e.prototype.alignDataLabel = r) }
            })(G || (G = {})); return G
        }); H(e, "Series/Bar/BarSeries.js", [e["Series/Column/ColumnSeries.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (b, e, z) {
            var C = this && this.__extends ||
                function () { var b = function (e, r) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, e) { b.__proto__ = e } || function (b, e) { for (var a in e) e.hasOwnProperty(a) && (b[a] = e[a]) }; return b(e, r) }; return function (e, r) { function n() { this.constructor = e } b(e, r); e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(), w = z.extend, y = z.merge; z = function (e) {
                    function t() { var b = null !== e && e.apply(this, arguments) || this; b.data = void 0; b.options = void 0; b.points = void 0; return b } C(t, e); t.defaultOptions =
                        y(b.defaultOptions, {}); return t
                }(b); w(z.prototype, { inverted: !0 }); e.registerSeriesType("bar", z); ""; return z
        }); H(e, "Series/Scatter/ScatterSeriesDefaults.js", [], function () { ""; return { lineWidth: 0, findNearestPointBy: "xy", jitter: { x: 0, y: 0 }, marker: { enabled: !0 }, tooltip: { headerFormat: '<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px"> {series.name}</span><br/>', pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>" } } }); H(e, "Series/Scatter/ScatterSeries.js", [e["Series/Scatter/ScatterSeriesDefaults.js"],
        e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (b, e, z) {
            var C = this && this.__extends || function () { var b = function (e, a) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, b) { a.__proto__ = b } || function (a, b) { for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]) }; return b(e, a) }; return function (e, a) { function f() { this.constructor = e } b(e, a); e.prototype = null === a ? Object.create(a) : (f.prototype = a.prototype, new f) } }(), w = e.seriesTypes, y = w.column, G = w.line; w = z.addEvent; var t = z.extend, r = z.merge;
            z = function (e) {
                function h() { var a = null !== e && e.apply(this, arguments) || this; a.data = void 0; a.options = void 0; a.points = void 0; return a } C(h, e); h.prototype.applyJitter = function () {
                    var a = this, b = this.options.jitter, d = this.points.length; b && this.points.forEach(function (f, e) {
                        ["x", "y"].forEach(function (k, h) {
                            var p = "plot" + k.toUpperCase(); if (b[k] && !f.isNull) {
                                var n = a[k + "Axis"]; var q = b[k] * n.transA; if (n && !n.isLog) {
                                    var c = Math.max(0, f[p] - q); n = Math.min(n.len, f[p] + q); h = 1E4 * Math.sin(e + h * d); f[p] = c + (n - c) * (h - Math.floor(h)); "x" ===
                                        k && (f.clientX = f.plotX)
                                }
                            }
                        })
                    })
                }; h.prototype.drawGraph = function () { this.options.lineWidth ? e.prototype.drawGraph.call(this) : this.graph && (this.graph = this.graph.destroy()) }; h.defaultOptions = r(G.defaultOptions, b); return h
            }(G); t(z.prototype, { drawTracker: y.prototype.drawTracker, sorted: !1, requireSorting: !1, noSharedTooltip: !0, trackerGroups: ["group", "markerGroup", "dataLabelsGroup"], takeOrdinalPosition: !1 }); w(z, "afterTranslate", function () { this.applyJitter() }); e.registerSeriesType("scatter", z); return z
        }); H(e, "Series/CenteredUtilities.js",
            [e["Core/Globals.js"], e["Core/Series/Series.js"], e["Core/Utilities.js"]], function (b, e, z) {
                var C = b.deg2rad, w = z.fireEvent, y = z.isNumber, G = z.pick, t = z.relativeLength, r; (function (b) {
                    b.getCenter = function () {
                        var b = this.options, a = this.chart, f = 2 * (b.slicedOffset || 0), d = a.plotWidth - 2 * f, k = a.plotHeight - 2 * f, p = b.center, n = Math.min(d, k), A = b.thickness, x = b.size, E = b.innerSize || 0; "string" === typeof x && (x = parseFloat(x)); "string" === typeof E && (E = parseFloat(E)); b = [G(p[0], "50%"), G(p[1], "50%"), G(x && 0 > x ? void 0 : b.size, "100%"), G(E &&
                            0 > E ? void 0 : b.innerSize || 0, "0%")]; !a.angular || this instanceof e || (b[3] = 0); for (p = 0; 4 > p; ++p)x = b[p], a = 2 > p || 2 === p && /%$/.test(x), b[p] = t(x, [d, k, n, b[2]][p]) + (a ? f : 0); b[3] > b[2] && (b[3] = b[2]); y(A) && 2 * A < b[2] && 0 < A && (b[3] = b[2] - 2 * A); w(this, "afterGetCenter", { positions: b }); return b
                    }; b.getStartAndEndRadians = function (b, a) { b = y(b) ? b : 0; a = y(a) && a > b && 360 > a - b ? a : b + 360; return { start: C * (b + -90), end: C * (a + -90) } }
                })(r || (r = {})); ""; return r
            }); H(e, "Series/Pie/PiePoint.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Series/Point.js"],
            e["Core/Utilities.js"]], function (b, e, z) {
                var C = this && this.__extends || function () { var b = function (a, f) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, b) { a.__proto__ = b } || function (a, b) { for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]) }; return b(a, f) }; return function (a, f) { function d() { this.constructor = a } b(a, f); a.prototype = null === f ? Object.create(f) : (d.prototype = f.prototype, new d) } }(), w = b.setAnimation, y = z.addEvent, G = z.defined; b = z.extend; var t = z.isNumber, r = z.pick, n = z.relativeLength; e = function (b) {
                    function a() {
                        var a =
                            null !== b && b.apply(this, arguments) || this; a.labelDistance = void 0; a.options = void 0; a.series = void 0; return a
                    } C(a, b); a.prototype.getConnectorPath = function () { var a = this.labelPosition, b = this.series.options.dataLabels, k = this.connectorShapes, e = b.connectorShape; k[e] && (e = k[e]); return e.call(this, { x: a.final.x, y: a.final.y, alignment: a.alignment }, a.connectorPosition, b) }; a.prototype.getTranslate = function () { return this.sliced ? this.slicedTranslation : { translateX: 0, translateY: 0 } }; a.prototype.haloPath = function (a) {
                        var b =
                            this.shapeArgs; return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(b.x, b.y, b.r + a, b.r + a, { innerR: b.r - 1, start: b.start, end: b.end })
                    }; a.prototype.init = function () { var a = this; b.prototype.init.apply(this, arguments); this.name = r(this.name, "Slice"); var d = function (b) { a.slice("select" === b.type) }; y(this, "select", d); y(this, "unselect", d); return this }; a.prototype.isValid = function () { return t(this.y) && 0 <= this.y }; a.prototype.setVisible = function (a, b) {
                        var d = this, f = this.series, e = f.chart, h = f.options.ignoreHiddenPoint;
                        b = r(b, h); a !== this.visible && (this.visible = this.options.visible = a = "undefined" === typeof a ? !this.visible : a, f.options.data[f.data.indexOf(this)] = this.options, ["graphic", "dataLabel", "connector", "shadowGroup"].forEach(function (b) { if (d[b]) d[b][a ? "show" : "hide"](a) }), this.legendItem && e.legend.colorizeItem(this, a), a || "hover" !== this.state || this.setState(""), h && (f.isDirty = !0), b && e.redraw())
                    }; a.prototype.slice = function (a, b, k) {
                        var d = this.series; w(k, d.chart); r(b, !0); this.sliced = this.options.sliced = G(a) ? a : !this.sliced;
                        d.options.data[d.data.indexOf(this)] = this.options; this.graphic && this.graphic.animate(this.getTranslate()); this.shadowGroup && this.shadowGroup.animate(this.getTranslate())
                    }; return a
                }(e); b(e.prototype, {
                    connectorShapes: {
                        fixedOffset: function (b, a, f) { var d = a.breakAt; a = a.touchingSliceAt; return [["M", b.x, b.y], f.softConnector ? ["C", b.x + ("left" === b.alignment ? -5 : 5), b.y, 2 * d.x - a.x, 2 * d.y - a.y, d.x, d.y] : ["L", d.x, d.y], ["L", a.x, a.y]] }, straight: function (b, a) { a = a.touchingSliceAt; return [["M", b.x, b.y], ["L", a.x, a.y]] }, crookedLine: function (b,
                            a, f) { a = a.touchingSliceAt; var d = this.series, k = d.center[0], e = d.chart.plotWidth, h = d.chart.plotLeft; d = b.alignment; var A = this.shapeArgs.r; f = n(f.crookDistance, 1); e = "left" === d ? k + A + (e + h - k - A) * (1 - f) : h + (k - A) * f; f = ["L", e, b.y]; k = !0; if ("left" === d ? e > b.x || e < a.x : e < b.x || e > a.x) k = !1; b = [["M", b.x, b.y]]; k && b.push(f); b.push(["L", a.x, a.y]); return b }
                    }
                }); return e
            }); H(e, "Series/Pie/PieSeriesDefaults.js", [], function () {
                ""; return {
                    center: [null, null], clip: !1, colorByPoint: !0, dataLabels: {
                        allowOverlap: !0, connectorPadding: 5, connectorShape: "fixedOffset",
                        crookDistance: "70%", distance: 30, enabled: !0, formatter: function () { return this.point.isNull ? void 0 : this.point.name }, softConnector: !0, x: 0
                    }, fillColor: void 0, ignoreHiddenPoint: !0, inactiveOtherPoints: !0, legendType: "point", marker: null, size: null, showInLegend: !1, slicedOffset: 10, stickyTracking: !1, tooltip: { followPointer: !0 }, borderColor: "#ffffff", borderWidth: 1, lineWidth: void 0, states: { hover: { brightness: .1 } }
                }
            }); H(e, "Series/Pie/PieSeries.js", [e["Series/CenteredUtilities.js"], e["Series/Column/ColumnSeries.js"], e["Core/Globals.js"],
            e["Core/Legend/LegendSymbol.js"], e["Series/Pie/PiePoint.js"], e["Series/Pie/PieSeriesDefaults.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/Symbols.js"], e["Core/Utilities.js"]], function (b, e, z, C, w, y, G, t, r, n) {
                var h = this && this.__extends || function () {
                    var a = function (b, d) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, b) { a.__proto__ = b } || function (a, b) { for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]) }; return a(b, d) }; return function (b, d) {
                        function c() {
                            this.constructor =
                            b
                        } a(b, d); b.prototype = null === d ? Object.create(d) : (c.prototype = d.prototype, new c)
                    }
                }(), a = b.getStartAndEndRadians; z = z.noop; var f = n.clamp, d = n.extend, k = n.fireEvent, p = n.merge, D = n.pick, A = n.relativeLength; n = function (b) {
                    function d() { var a = null !== b && b.apply(this, arguments) || this; a.center = void 0; a.data = void 0; a.maxLabelDistance = void 0; a.options = void 0; a.points = void 0; return a } h(d, b); d.prototype.animate = function (a) {
                        var c = this, b = c.points, d = c.startAngleRad; a || b.forEach(function (a) {
                            var b = a.graphic, f = a.shapeArgs; b &&
                                f && (b.attr({ r: D(a.startR, c.center && c.center[3] / 2), start: d, end: d }), b.animate({ r: f.r, start: f.start, end: f.end }, c.options.animation))
                        })
                    }; d.prototype.drawEmpty = function () {
                        var a = this.startAngleRad, c = this.endAngleRad, b = this.options; if (0 === this.total && this.center) {
                            var d = this.center[0]; var f = this.center[1]; this.graph || (this.graph = this.chart.renderer.arc(d, f, this.center[1] / 2, 0, a, c).addClass("highcharts-empty-series").add(this.group)); this.graph.attr({
                                d: r.arc(d, f, this.center[2] / 2, 0, {
                                    start: a, end: c, innerR: this.center[3] /
                                        2
                                })
                            }); this.chart.styledMode || this.graph.attr({ "stroke-width": b.borderWidth, fill: b.fillColor || "none", stroke: b.color || "#cccccc" })
                        } else this.graph && (this.graph = this.graph.destroy())
                    }; d.prototype.drawPoints = function () { var a = this.chart.renderer; this.points.forEach(function (c) { c.graphic && c.hasNewShapeType() && (c.graphic = c.graphic.destroy()); c.graphic || (c.graphic = a[c.shapeType](c.shapeArgs).add(c.series.group), c.delayedRendering = !0) }) }; d.prototype.generatePoints = function () {
                        b.prototype.generatePoints.call(this);
                        this.updateTotals()
                    }; d.prototype.getX = function (a, c, b) { var d = this.center, e = this.radii ? this.radii[b.index] || 0 : d[2] / 2; a = Math.asin(f((a - d[1]) / (e + b.labelDistance), -1, 1)); return d[0] + (c ? -1 : 1) * Math.cos(a) * (e + b.labelDistance) + (0 < b.labelDistance ? (c ? -1 : 1) * this.options.dataLabels.padding : 0) }; d.prototype.hasData = function () { return !!this.processedXData.length }; d.prototype.redrawPoints = function () {
                        var a = this, c = a.chart, b = c.renderer, d = a.options.shadow, f, g, e, l; this.drawEmpty(); !d || a.shadowGroup || c.styledMode || (a.shadowGroup =
                            b.g("shadow").attr({ zIndex: -1 }).add(a.group)); a.points.forEach(function (k) {
                                var h = {}; g = k.graphic; if (!k.isNull && g) {
                                    var m = void 0; l = k.shapeArgs; f = k.getTranslate(); c.styledMode || (m = k.shadowGroup, d && !m && (m = k.shadowGroup = b.g("shadow").add(a.shadowGroup)), m && m.attr(f), e = a.pointAttribs(k, k.selected && "select")); k.delayedRendering ? (g.setRadialReference(a.center).attr(l).attr(f), c.styledMode || g.attr(e).attr({ "stroke-linejoin": "round" }).shadow(d, m), k.delayedRendering = !1) : (g.setRadialReference(a.center), c.styledMode ||
                                        p(!0, h, e), p(!0, h, l, f), g.animate(h)); g.attr({ visibility: k.visible ? "inherit" : "hidden" }); g.addClass(k.getClassName(), !0)
                                } else g && (k.graphic = g.destroy())
                            })
                    }; d.prototype.sortByAngle = function (a, c) { a.sort(function (a, b) { return "undefined" !== typeof a.angle && (b.angle - a.angle) * c }) }; d.prototype.translate = function (b) {
                        k(this, "translate"); this.generatePoints(); var c = this.options, d = c.slicedOffset, f = d + (c.borderWidth || 0), e = a(c.startAngle, c.endAngle), g = this.startAngleRad = e.start; e = (this.endAngleRad = e.end) - g; var h = this.points,
                            l = c.dataLabels.distance; c = c.ignoreHiddenPoint; var q = h.length, p, n = 0; b || (this.center = b = this.getCenter()); for (p = 0; p < q; p++) {
                                var x = h[p]; var E = g + n * e; !x.isValid() || c && !x.visible || (n += x.percentage / 100); var r = g + n * e; var t = { x: b[0], y: b[1], r: b[2] / 2, innerR: b[3] / 2, start: Math.round(1E3 * E) / 1E3, end: Math.round(1E3 * r) / 1E3 }; x.shapeType = "arc"; x.shapeArgs = t; x.labelDistance = D(x.options.dataLabels && x.options.dataLabels.distance, l); x.labelDistance = A(x.labelDistance, t.r); this.maxLabelDistance = Math.max(this.maxLabelDistance ||
                                    0, x.labelDistance); r = (r + E) / 2; r > 1.5 * Math.PI ? r -= 2 * Math.PI : r < -Math.PI / 2 && (r += 2 * Math.PI); x.slicedTranslation = { translateX: Math.round(Math.cos(r) * d), translateY: Math.round(Math.sin(r) * d) }; t = Math.cos(r) * b[2] / 2; var w = Math.sin(r) * b[2] / 2; x.tooltipPos = [b[0] + .7 * t, b[1] + .7 * w]; x.half = r < -Math.PI / 2 || r > Math.PI / 2 ? 1 : 0; x.angle = r; E = Math.min(f, x.labelDistance / 5); x.labelPosition = {
                                        natural: { x: b[0] + t + Math.cos(r) * x.labelDistance, y: b[1] + w + Math.sin(r) * x.labelDistance }, "final": {}, alignment: 0 > x.labelDistance ? "center" : x.half ? "right" :
                                            "left", connectorPosition: { breakAt: { x: b[0] + t + Math.cos(r) * E, y: b[1] + w + Math.sin(r) * E }, touchingSliceAt: { x: b[0] + t, y: b[1] + w } }
                                    }
                            } k(this, "afterTranslate")
                    }; d.prototype.updateTotals = function () { var a = this.points, c = a.length, b = this.options.ignoreHiddenPoint, d, f = 0; for (d = 0; d < c; d++) { var g = a[d]; !g.isValid() || b && !g.visible || (f += g.y) } this.total = f; for (d = 0; d < c; d++)g = a[d], g.percentage = 0 < f && (g.visible || !b) ? g.y / f * 100 : 0, g.total = f }; d.defaultOptions = p(G.defaultOptions, y); return d
                }(G); d(n.prototype, {
                    axisTypes: [], directTouch: !0,
                    drawGraph: void 0, drawLegendSymbol: C.drawRectangle, drawTracker: e.prototype.drawTracker, getCenter: b.getCenter, getSymbol: z, isCartesian: !1, noSharedTooltip: !0, pointAttribs: e.prototype.pointAttribs, pointClass: w, requireSorting: !1, searchPoint: z, trackerGroups: ["group", "dataLabelsGroup"]
                }); t.registerSeriesType("pie", n); return n
            }); H(e, "Series/Pie/PieDataLabel.js", [e["Core/Series/DataLabel.js"], e["Core/Globals.js"], e["Core/Renderer/RendererUtilities.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]],
                function (b, e, z, C, w) {
                    var y = e.noop, G = z.distribute, t = C.series, r = w.arrayMax, n = w.clamp, h = w.defined, a = w.merge, f = w.pick, d = w.relativeLength, k; (function (e) {
                        function k() {
                            var c = this, b = c.data, d = c.chart, e = c.options.dataLabels || {}, g = e.connectorPadding, k = d.plotWidth, l = d.plotHeight, q = d.plotLeft, p = Math.round(d.chartWidth / 3), n = c.center, x = n[2] / 2, A = n[1], E = [[], []], D = [0, 0, 0, 0], w = c.dataLabelPositioners, y, z, C, I, H, T, V, W, U, P, X, O; c.visible && (e.enabled || c._hasPointLabels) && (b.forEach(function (a) {
                                a.dataLabel && a.visible && a.dataLabel.shortened &&
                                (a.dataLabel.attr({ width: "auto" }).css({ width: "auto", textOverflow: "clip" }), a.dataLabel.shortened = !1)
                            }), t.prototype.drawDataLabels.apply(c), b.forEach(function (a) {
                                a.dataLabel && (a.visible ? (E[a.half].push(a), a.dataLabel._pos = null, !h(e.style.width) && !h(a.options.dataLabels && a.options.dataLabels.style && a.options.dataLabels.style.width) && a.dataLabel.getBBox().width > p && (a.dataLabel.css({ width: Math.round(.7 * p) + "px" }), a.dataLabel.shortened = !0)) : (a.dataLabel = a.dataLabel.destroy(), a.dataLabels && 1 === a.dataLabels.length &&
                                    delete a.dataLabels))
                            }), E.forEach(function (a, b) {
                                var m = a.length, p = [], v; if (m) {
                                    c.sortByAngle(a, b - .5); if (0 < c.maxLabelDistance) {
                                        var u = Math.max(0, A - x - c.maxLabelDistance); var B = Math.min(A + x + c.maxLabelDistance, d.plotHeight); a.forEach(function (a) { 0 < a.labelDistance && a.dataLabel && (a.top = Math.max(0, A - x - a.labelDistance), a.bottom = Math.min(A + x + a.labelDistance, d.plotHeight), v = a.dataLabel.getBBox().height || 21, a.distributeBox = { target: a.labelPosition.natural.y - a.top + v / 2, size: v, rank: a.y }, p.push(a.distributeBox)) }); u =
                                            B + v - u; G(p, u, u / 5)
                                    } for (X = 0; X < m; X++) {
                                        y = a[X]; T = y.labelPosition; I = y.dataLabel; P = !1 === y.visible ? "hidden" : "inherit"; U = u = T.natural.y; p && h(y.distributeBox) && ("undefined" === typeof y.distributeBox.pos ? P = "hidden" : (V = y.distributeBox.size, U = w.radialDistributionY(y))); delete y.positionIndex; if (e.justify) W = w.justify(y, x, n); else switch (e.alignTo) { case "connectors": W = w.alignToConnectors(a, b, k, q); break; case "plotEdges": W = w.alignToPlotEdges(I, b, k, q); break; default: W = w.radialDistributionX(c, y, U, u) }I._attr = {
                                            visibility: P,
                                            align: T.alignment
                                        }; O = y.options.dataLabels || {}; I._pos = { x: W + f(O.x, e.x) + ({ left: g, right: -g }[T.alignment] || 0), y: U + f(O.y, e.y) - 10 }; T.final.x = W; T.final.y = U; f(e.crop, !0) && (H = I.getBBox().width, u = null, W - H < g && 1 === b ? (u = Math.round(H - W + g), D[3] = Math.max(u, D[3])) : W + H > k - g && 0 === b && (u = Math.round(W + H - k + g), D[1] = Math.max(u, D[1])), 0 > U - V / 2 ? D[0] = Math.max(Math.round(-U + V / 2), D[0]) : U + V / 2 > l && (D[2] = Math.max(Math.round(U + V / 2 - l), D[2])), I.sideOverflow = u)
                                    }
                                }
                            }), 0 === r(D) || this.verifyDataLabelOverflow(D)) && (this.placeDataLabels(), this.points.forEach(function (b) {
                                O =
                                a(e, b.options.dataLabels); if (z = f(O.connectorWidth, 1)) {
                                    var g; C = b.connector; if ((I = b.dataLabel) && I._pos && b.visible && 0 < b.labelDistance) { P = I._attr.visibility; if (g = !C) b.connector = C = d.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + b.colorIndex + (b.className ? " " + b.className : "")).add(c.dataLabelsGroup), d.styledMode || C.attr({ "stroke-width": z, stroke: O.connectorColor || b.color || "#666666" }); C[g ? "attr" : "animate"]({ d: b.getConnectorPath() }); C.attr("visibility", P) } else C && (b.connector =
                                        C.destroy())
                                }
                            }))
                        } function p() { this.points.forEach(function (a) { var c = a.dataLabel, b; c && a.visible && ((b = c._pos) ? (c.sideOverflow && (c._attr.width = Math.max(c.getBBox().width - c.sideOverflow, 0), c.css({ width: c._attr.width + "px", textOverflow: (this.options.dataLabels.style || {}).textOverflow || "ellipsis" }), c.shortened = !0), c.attr(c._attr), c[c.moved ? "animate" : "attr"](b), c.moved = !0) : c && c.attr({ y: -9999 })); delete a.distributeBox }, this) } function x(a) {
                            var c = this.center, b = this.options, f = b.center, g = b.minSize || 80, e = null !==
                                b.size; if (!e) { if (null !== f[0]) var l = Math.max(c[2] - Math.max(a[1], a[3]), g); else l = Math.max(c[2] - a[1] - a[3], g), c[0] += (a[3] - a[1]) / 2; null !== f[1] ? l = n(l, g, c[2] - Math.max(a[0], a[2])) : (l = n(l, g, c[2] - a[0] - a[2]), c[1] += (a[0] - a[2]) / 2); l < c[2] ? (c[2] = l, c[3] = Math.min(b.thickness ? Math.max(0, l - 2 * b.thickness) : Math.max(0, d(b.innerSize || 0, l)), l), this.translate(c), this.drawDataLabels && this.drawDataLabels()) : e = !0 } return e
                        } var E = [], q = {
                            radialDistributionY: function (a) { return a.top + a.distributeBox.pos }, radialDistributionX: function (a,
                                b, d, f) { return a.getX(d < b.top + 2 || d > b.bottom - 2 ? f : d, b.half, b) }, justify: function (a, b, d) { return d[0] + (a.half ? -1 : 1) * (b + a.labelDistance) }, alignToPlotEdges: function (a, b, d, f) { a = a.getBBox().width; return b ? a + f : d - a - f }, alignToConnectors: function (a, b, d, f) { var c = 0, e; a.forEach(function (a) { e = a.dataLabel.getBBox().width; e > c && (c = e) }); return b ? c + f : d - c - f }
                        }; e.compose = function (a) {
                            b.compose(t); -1 === E.indexOf(a) && (E.push(a), a = a.prototype, a.dataLabelPositioners = q, a.alignDataLabel = y, a.drawDataLabels = k, a.placeDataLabels = p, a.verifyDataLabelOverflow =
                                x)
                        }
                    })(k || (k = {})); return k
                }); H(e, "Extensions/OverlappingDataLabels.js", [e["Core/Chart/Chart.js"], e["Core/Utilities.js"]], function (b, e) {
                    function z(b, e) { var a = !1; if (b) { var f = b.newOpacity; b.oldOpacity !== f && (b.alignAttr && b.placed ? (b[f ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), a = !0, b.alignAttr.opacity = f, b[b.isOld ? "animate" : "attr"](b.alignAttr, null, function () { e.styledMode || b.css({ pointerEvents: f ? "auto" : "none" }) }), w(e, "afterHideOverlappingLabel")) : b.attr({ opacity: f })); b.isOld = !0 } return a }
                    var C = e.addEvent, w = e.fireEvent, y = e.isArray, G = e.isNumber, t = e.objectEach, r = e.pick; C(b, "render", function () {
                        var b = this, e = []; (this.labelCollectors || []).forEach(function (a) { e = e.concat(a()) }); (this.yAxis || []).forEach(function (a) { a.stacking && a.options.stackLabels && !a.options.stackLabels.allowOverlap && t(a.stacking.stacks, function (a) { t(a, function (a) { a.label && e.push(a.label) }) }) }); (this.series || []).forEach(function (a) {
                            var f = a.options.dataLabels; a.visible && (!1 !== f.enabled || a._hasPointLabels) && (f = function (a) {
                                return a.forEach(function (a) {
                                    a.visible &&
                                    (y(a.dataLabels) ? a.dataLabels : a.dataLabel ? [a.dataLabel] : []).forEach(function (d) { var f = d.options; d.labelrank = r(f.labelrank, a.labelrank, a.shapeArgs && a.shapeArgs.height); f.allowOverlap ? (d.oldOpacity = d.opacity, d.newOpacity = 1, z(d, b)) : e.push(d) })
                                })
                            }, f(a.nodes || []), f(a.points))
                        }); this.hideOverlappingLabels(e)
                    }); b.prototype.hideOverlappingLabels = function (b) {
                        var e = this, a = b.length, f = e.renderer, d, k, p, n = !1; var A = function (a) {
                            var c, b = a.box ? 0 : a.padding || 0, d = c = 0, e; if (a && (!a.alignAttr || a.placed)) {
                                var g = a.alignAttr ||
                                    { x: a.attr("x"), y: a.attr("y") }; var k = a.parentGroup; a.width || (c = a.getBBox(), a.width = c.width, a.height = c.height, c = f.fontMetrics(null, a.element).h); var l = a.width - 2 * b; (e = { left: "0", center: "0.5", right: "1" }[a.alignValue]) ? d = +e * l : G(a.x) && Math.round(a.x) !== a.translateX && (d = a.x - a.translateX); return { x: g.x + (k.translateX || 0) + b - (d || 0), y: g.y + (k.translateY || 0) + b - c, width: a.width - 2 * b, height: a.height - 2 * b }
                            }
                        }; for (k = 0; k < a; k++)if (d = b[k]) d.oldOpacity = d.opacity, d.newOpacity = 1, d.absoluteBox = A(d); b.sort(function (a, c) {
                            return (c.labelrank ||
                                0) - (a.labelrank || 0)
                        }); for (k = 0; k < a; k++) { var x = (A = b[k]) && A.absoluteBox; for (d = k + 1; d < a; ++d) { var E = (p = b[d]) && p.absoluteBox; !x || !E || A === p || 0 === A.newOpacity || 0 === p.newOpacity || "hidden" === A.visibility || "hidden" === p.visibility || E.x >= x.x + x.width || E.x + E.width <= x.x || E.y >= x.y + x.height || E.y + E.height <= x.y || ((A.labelrank < p.labelrank ? A : p).newOpacity = 0) } } b.forEach(function (a) { z(a, e) && (n = !0) }); n && w(e, "afterHideAllOverlappingLabels")
                    }
                }); H(e, "Core/Responsive.js", [e["Core/Utilities.js"]], function (b) {
                    var e = b.extend, z = b.find,
                    C = b.isArray, w = b.isObject, y = b.merge, G = b.objectEach, t = b.pick, r = b.splat, n = b.uniqueKey, h; (function (a) {
                        var b = []; a.compose = function (a) { -1 === b.indexOf(a) && (b.push(a), e(a.prototype, d.prototype)); return a }; var d = function () {
                            function a() { } a.prototype.currentOptions = function (a) {
                                function b(a, f, c, e) {
                                    var k; G(a, function (a, g) {
                                        if (!e && -1 < d.collectionsWithUpdate.indexOf(g) && f[g]) for (a = r(a), c[g] = [], k = 0; k < Math.max(a.length, f[g].length); k++)f[g][k] && (void 0 === a[k] ? c[g][k] = f[g][k] : (c[g][k] = {}, b(a[k], f[g][k], c[g][k], e + 1)));
                                        else w(a) ? (c[g] = C(a) ? [] : {}, b(a, f[g] || {}, c[g], e + 1)) : c[g] = "undefined" === typeof f[g] ? null : f[g]
                                    })
                                } var d = this, f = {}; b(a, this.options, f, 0); return f
                            }; a.prototype.matchResponsiveRule = function (a, b) { var d = a.condition; (d.callback || function () { return this.chartWidth <= t(d.maxWidth, Number.MAX_VALUE) && this.chartHeight <= t(d.maxHeight, Number.MAX_VALUE) && this.chartWidth >= t(d.minWidth, 0) && this.chartHeight >= t(d.minHeight, 0) }).call(this) && b.push(a._id) }; a.prototype.setResponsive = function (a, b) {
                                var d = this, f = this.options.responsive,
                                e = this.currentResponsive, k = []; !b && f && f.rules && f.rules.forEach(function (a) { "undefined" === typeof a._id && (a._id = n()); d.matchResponsiveRule(a, k) }, this); b = y.apply(void 0, k.map(function (a) { return z((f || {}).rules || [], function (c) { return c._id === a }) }).map(function (a) { return a && a.chartOptions })); b.isResponsiveOptions = !0; k = k.toString() || void 0; k !== (e && e.ruleIds) && (e && this.update(e.undoOptions, a, !0), k ? (e = this.currentOptions(b), e.isResponsiveOptions = !0, this.currentResponsive = { ruleIds: k, mergedOptions: b, undoOptions: e },
                                    this.update(b, a, !0)) : this.currentResponsive = void 0)
                            }; return a
                        }()
                    })(h || (h = {})); ""; ""; return h
                }); H(e, "masters/highcharts.src.js", [e["Core/Globals.js"], e["Core/Utilities.js"], e["Core/Defaults.js"], e["Core/Animation/Fx.js"], e["Core/Animation/AnimationUtilities.js"], e["Core/Renderer/HTML/AST.js"], e["Core/FormatUtilities.js"], e["Core/Renderer/RendererUtilities.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Renderer/HTML/HTMLElement.js"], e["Core/Renderer/HTML/HTMLRenderer.js"],
                e["Core/Axis/Axis.js"], e["Core/Axis/DateTimeAxis.js"], e["Core/Axis/LogarithmicAxis.js"], e["Core/Axis/PlotLineOrBand/PlotLineOrBand.js"], e["Core/Axis/Tick.js"], e["Core/Tooltip.js"], e["Core/Series/Point.js"], e["Core/Pointer.js"], e["Core/MSPointer.js"], e["Core/Legend/Legend.js"], e["Core/Chart/Chart.js"], e["Core/Axis/Stacking/StackingAxis.js"], e["Core/Axis/Stacking/StackItem.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Series/Column/ColumnSeries.js"], e["Series/Column/ColumnDataLabel.js"],
                e["Series/Pie/PieSeries.js"], e["Series/Pie/PieDataLabel.js"], e["Core/Series/DataLabel.js"], e["Core/Responsive.js"], e["Core/Color/Color.js"], e["Core/Time.js"]], function (b, e, z, C, w, y, G, t, r, n, h, a, f, d, k, p, D, A, x, E, q, c, B, m, u, g, F, l, v, K, J, M, S, R, H) {
                    b.animate = w.animate; b.animObject = w.animObject; b.getDeferredAnimation = w.getDeferredAnimation; b.setAnimation = w.setAnimation; b.stop = w.stop; b.timers = C.timers; b.AST = y; b.Axis = f; b.Chart = B; b.chart = B.chart; b.Fx = C; b.Legend = c; b.PlotLineOrBand = p; b.Point = x; b.Pointer = q.isRequired() ?
                        q : E; b.Series = g; b.StackItem = u; b.SVGElement = r; b.SVGRenderer = n; b.Tick = D; b.Time = H; b.Tooltip = A; b.Color = R; b.color = R.parse; a.compose(n); h.compose(r); b.defaultOptions = z.defaultOptions; b.getOptions = z.getOptions; b.time = z.defaultTime; b.setOptions = z.setOptions; b.dateFormat = G.dateFormat; b.format = G.format; b.numberFormat = G.numberFormat; b.addEvent = e.addEvent; b.arrayMax = e.arrayMax; b.arrayMin = e.arrayMin; b.attr = e.attr; b.clearTimeout = e.clearTimeout; b.correctFloat = e.correctFloat; b.createElement = e.createElement; b.css =
                            e.css; b.defined = e.defined; b.destroyObjectProperties = e.destroyObjectProperties; b.discardElement = e.discardElement; b.distribute = t.distribute; b.erase = e.erase; b.error = e.error; b.extend = e.extend; b.extendClass = e.extendClass; b.find = e.find; b.fireEvent = e.fireEvent; b.getMagnitude = e.getMagnitude; b.getStyle = e.getStyle; b.inArray = e.inArray; b.isArray = e.isArray; b.isClass = e.isClass; b.isDOMElement = e.isDOMElement; b.isFunction = e.isFunction; b.isNumber = e.isNumber; b.isObject = e.isObject; b.isString = e.isString; b.keys = e.keys;
                    b.merge = e.merge; b.normalizeTickInterval = e.normalizeTickInterval; b.objectEach = e.objectEach; b.offset = e.offset; b.pad = e.pad; b.pick = e.pick; b.pInt = e.pInt; b.relativeLength = e.relativeLength; b.removeEvent = e.removeEvent; b.seriesType = F.seriesType; b.splat = e.splat; b.stableSort = e.stableSort; b.syncTimeout = e.syncTimeout; b.timeUnits = e.timeUnits; b.uniqueKey = e.uniqueKey; b.useSerialIds = e.useSerialIds; b.wrap = e.wrap; v.compose(l); M.compose(g); d.compose(f); k.compose(f); J.compose(K); p.compose(f); S.compose(B); m.compose(f,
                        B, g); return b
                }); H(e, "Core/Axis/Color/ColorAxisComposition.js", [e["Core/Color/Color.js"], e["Core/Utilities.js"]], function (b, e) {
                    var z = b.parse, C = e.addEvent, w = e.extend, y = e.merge, G = e.pick, t = e.splat, r; (function (b) {
                        function e() { var a = this, c = this.options; this.colorAxis = []; c.colorAxis && (c.colorAxis = t(c.colorAxis), c.colorAxis.forEach(function (c, b) { c.index = b; new B(a, c) })) } function a(a) {
                            var c = this, b = function (b) { b = a.allItems.indexOf(b); -1 !== b && (c.destroyItem(a.allItems[b]), a.allItems.splice(b, 1)) }, d = [], f, e; (this.chart.colorAxis ||
                                []).forEach(function (a) { (f = a.options) && f.showInLegend && (f.dataClasses && f.visible ? d = d.concat(a.getDataClassLegendSymbols()) : f.visible && d.push(a), a.series.forEach(function (a) { if (!a.options.showInLegend || f.dataClasses) "point" === a.options.legendType ? a.points.forEach(function (a) { b(a) }) : b(a) })) }); for (e = d.length; e--;)a.allItems.unshift(d[e])
                        } function f(a) { a.visible && a.item.legendColor && a.item.legendItem.symbol.attr({ fill: a.item.legendColor }) } function d() {
                            var a = this.chart.colorAxis; a && a.forEach(function (a,
                                c, b) { a.update({}, b) })
                        } function k() { (this.chart.colorAxis && this.chart.colorAxis.length || this.colorAttribs) && this.translateColors() } function p() { var a = this.axisTypes; a ? -1 === a.indexOf("colorAxis") && a.push("colorAxis") : this.axisTypes = ["colorAxis"] } function n(a) { var c = this, b = a ? "show" : "hide"; c.visible = c.options.visible = !!a;["graphic", "dataLabel"].forEach(function (a) { if (c[a]) c[a][b]() }); this.series.buildKDTree() } function A() {
                            var a = this, c = this.options.nullColor, b = this.colorAxis, d = this.colorKey; (this.data.length ?
                                this.data : this.points).forEach(function (f) { var g = f.getNestedProperty(d); (g = f.options.color || (f.isNull || null === f.value ? c : b && "undefined" !== typeof g ? b.toColor(g, f) : f.color || a.color)) && f.color !== g && (f.color = g, "point" === a.options.legendType && f.legendItem && f.legendItem.label && a.chart.legend.colorizeItem(f, f.visible)) })
                        } function x(a) {
                            var c = a.prototype.createAxis; a.prototype.createAxis = function (a, b) {
                                if ("colorAxis" !== a) return c.apply(this, arguments); var d = new B(this, y(b.axis, { index: this[a].length, isX: !1 }));
                                this.isDirtyLegend = !0; this.axes.forEach(function (a) { a.series = [] }); this.series.forEach(function (a) { a.bindAxes(); a.isDirtyData = !0 }); G(b.redraw, !0) && this.redraw(b.animation); return d
                            }
                        } function r() { this.elem.attr("fill", z(this.start).tweenTo(z(this.end), this.pos), void 0, !0) } function q() { this.elem.attr("stroke", z(this.start).tweenTo(z(this.end), this.pos), void 0, !0) } var c = [], B; b.compose = function (b, h, g, E, l) {
                            B || (B = b); -1 === c.indexOf(h) && (c.push(h), b = h.prototype, b.collectionsWithUpdate.push("colorAxis"), b.collectionsWithInit.colorAxis =
                                [b.addColorAxis], C(h, "afterGetAxes", e), x(h)); -1 === c.indexOf(g) && (c.push(g), h = g.prototype, h.fillSetter = r, h.strokeSetter = q); -1 === c.indexOf(E) && (c.push(E), C(E, "afterGetAllItems", a), C(E, "afterColorizeItem", f), C(E, "afterUpdate", d)); -1 === c.indexOf(l) && (c.push(l), w(l.prototype, { optionalAxis: "colorAxis", translateColors: A }), w(l.prototype.pointClass.prototype, { setVisible: n }), C(l, "afterTranslate", k), C(l, "bindAxes", p))
                        }; b.pointSetVisible = n
                    })(r || (r = {})); return r
                }); H(e, "Core/Axis/Color/ColorAxisDefaults.js", [],
                    function () { return { lineWidth: 0, minPadding: 0, maxPadding: 0, gridLineWidth: 1, tickPixelInterval: 72, startOnTick: !0, endOnTick: !0, offset: 0, marker: { animation: { duration: 50 }, width: .01, color: "#999999" }, labels: { overflow: "justify", rotation: 0 }, minColor: "#e6ebf5", maxColor: "#003399", tickLength: 5, showInLegend: !0 } }); H(e, "Core/Axis/Color/ColorAxis.js", [e["Core/Axis/Axis.js"], e["Core/Color/Color.js"], e["Core/Axis/Color/ColorAxisComposition.js"], e["Core/Axis/Color/ColorAxisDefaults.js"], e["Core/Globals.js"], e["Core/Legend/LegendSymbol.js"],
                    e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (b, e, z, C, w, y, G, t) {
                        var r = this && this.__extends || function () { var a = function (b, d) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, b) { a.__proto__ = b } || function (a, b) { for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]) }; return a(b, d) }; return function (b, d) { function f() { this.constructor = b } a(b, d); b.prototype = null === d ? Object.create(d) : (f.prototype = d.prototype, new f) } }(), n = e.parse, h = G.series, a = t.extend, f = t.isNumber, d = t.merge, k = t.pick;
                        e = function (b) {
                            function e(a, d) { var f = b.call(this, a, d) || this; f.beforePadding = !1; f.chart = void 0; f.coll = "colorAxis"; f.dataClasses = void 0; f.name = ""; f.options = void 0; f.stops = void 0; f.visible = !0; f.init(a, d); return f } r(e, b); e.compose = function (a, b, d, f) { z.compose(e, a, b, d, f) }; e.prototype.init = function (a, f) {
                                var k = a.options.legend || {}, h = f.layout ? "vertical" !== f.layout : "vertical" !== k.layout, c = f.visible; k = d(e.defaultColorAxisOptions, f, { showEmpty: !1, title: null, visible: k.enabled && !1 !== c }); this.coll = "colorAxis"; this.side =
                                    f.side || h ? 2 : 1; this.reversed = f.reversed || !h; this.opposite = !h; b.prototype.init.call(this, a, k); this.userOptions.visible = c; f.dataClasses && this.initDataClasses(f); this.initStops(); this.horiz = h; this.zoomEnabled = !1
                            }; e.prototype.initDataClasses = function (a) {
                                var b = this.chart, f = this.legendItem = this.legendItem || {}, e = a.dataClasses.length, c = this.options, k, h = 0, p = b.options.chart.colorCount; this.dataClasses = k = []; f.labels = []; (a.dataClasses || []).forEach(function (a, f) {
                                    a = d(a); k.push(a); if (b.styledMode || !a.color) "category" ===
                                        c.dataClassColor ? (b.styledMode || (f = b.options.colors, p = f.length, a.color = f[h]), a.colorIndex = h, h++, h === p && (h = 0)) : a.color = n(c.minColor).tweenTo(n(c.maxColor), 2 > e ? .5 : f / (e - 1))
                                })
                            }; e.prototype.hasData = function () { return !!(this.tickPositions || []).length }; e.prototype.setTickPositions = function () { if (!this.dataClasses) return b.prototype.setTickPositions.call(this) }; e.prototype.initStops = function () {
                                this.stops = this.options.stops || [[0, this.options.minColor], [1, this.options.maxColor]]; this.stops.forEach(function (a) {
                                    a.color =
                                    n(a[1])
                                })
                            }; e.prototype.setOptions = function (a) { b.prototype.setOptions.call(this, a); this.options.crosshair = this.options.marker }; e.prototype.setAxisSize = function () {
                                var a = this.legendItem && this.legendItem.symbol, b = this.chart, d = b.options.legend || {}, f, c; a ? (this.left = d = a.attr("x"), this.top = f = a.attr("y"), this.width = c = a.attr("width"), this.height = a = a.attr("height"), this.right = b.chartWidth - d - c, this.bottom = b.chartHeight - f - a, this.len = this.horiz ? c : a, this.pos = this.horiz ? d : f) : this.len = (this.horiz ? d.symbolWidth : d.symbolHeight) ||
                                    e.defaultLegendLength
                            }; e.prototype.normalizedValue = function (a) { this.logarithmic && (a = this.logarithmic.log2lin(a)); return 1 - (this.max - a) / (this.max - this.min || 1) }; e.prototype.toColor = function (a, b) {
                                var d = this.dataClasses, f = this.stops, c; if (d) for (c = d.length; c--;) { var e = d[c]; var k = e.from; f = e.to; if (("undefined" === typeof k || a >= k) && ("undefined" === typeof f || a <= f)) { var h = e.color; b && (b.dataClass = c, b.colorIndex = e.colorIndex); break } } else {
                                    a = this.normalizedValue(a); for (c = f.length; c-- && !(a > f[c][0]);); k = f[c] || f[c + 1];
                                    f = f[c + 1] || k; a = 1 - (f[0] - a) / (f[0] - k[0] || 1); h = k.color.tweenTo(f.color, a)
                                } return h
                            }; e.prototype.getOffset = function () { var a = this.legendItem && this.legendItem.group, d = this.chart.axisOffset[this.side]; if (a) { this.axisParent = a; b.prototype.getOffset.call(this); var f = this.chart.legend; f.allItems.forEach(function (a) { a instanceof e && a.drawLegendSymbol(f, a) }); f.render(); this.chart.getMargins(!0); this.added || (this.added = !0, this.labelLeft = 0, this.labelRight = this.width); this.chart.axisOffset[this.side] = d } }; e.prototype.setLegendColor =
                                function () { var a = this.reversed, b = a ? 1 : 0; a = a ? 0 : 1; b = this.horiz ? [b, 0, a, 0] : [0, a, 0, b]; this.legendColor = { linearGradient: { x1: b[0], y1: b[1], x2: b[2], y2: b[3] }, stops: this.stops } }; e.prototype.drawLegendSymbol = function (a, b) {
                                    b = b.legendItem || {}; var d = a.padding, f = a.options, c = k(f.itemDistance, 10), h = this.horiz, m = k(f.symbolWidth, h ? e.defaultLegendLength : 12), p = k(f.symbolHeight, h ? 12 : e.defaultLegendLength); f = k(f.labelPadding, h ? 16 : 30); this.setLegendColor(); b.symbol || (b.symbol = this.chart.renderer.rect(0, a.baseline - 11, m, p).attr({ zIndex: 1 }).add(b.group));
                                    b.labelWidth = m + d + (h ? c : this.options.labels.x + this.maxLabelLength); b.labelHeight = p + d + (h ? f : 0)
                                }; e.prototype.setState = function (a) { this.series.forEach(function (b) { b.setState(a) }) }; e.prototype.setVisible = function () { }; e.prototype.getSeriesExtremes = function () {
                                    var a = this.series, b = a.length, d; this.dataMin = Infinity; for (this.dataMax = -Infinity; b--;) {
                                        var f = a[b]; var c = f.colorKey = k(f.options.colorKey, f.colorKey, f.pointValKey, f.zoneAxis, "y"); var e = f.pointArrayMap; var m = f[c + "Min"] && f[c + "Max"]; if (f[c + "Data"]) var p = f[c +
                                            "Data"]; else if (e) { p = []; e = e.indexOf(c); var g = f.yData; if (0 <= e && g) for (d = 0; d < g.length; d++)p.push(k(g[d][e], g[d])) } else p = f.yData; m ? (f.minColorValue = f[c + "Min"], f.maxColorValue = f[c + "Max"]) : (p = h.prototype.getExtremes.call(f, p), f.minColorValue = p.dataMin, f.maxColorValue = p.dataMax); "undefined" !== typeof f.minColorValue && (this.dataMin = Math.min(this.dataMin, f.minColorValue), this.dataMax = Math.max(this.dataMax, f.maxColorValue)); m || h.prototype.applyExtremes.call(f)
                                    }
                                }; e.prototype.drawCrosshair = function (a, d) {
                                    var f =
                                        this.legendItem || {}, e = d && d.plotX, c = d && d.plotY, k = this.pos, h = this.len; if (d) { var p = this.toPixels(d.getNestedProperty(d.series.colorKey)); p < k ? p = k - 2 : p > k + h && (p = k + h + 2); d.plotX = p; d.plotY = this.len - p; b.prototype.drawCrosshair.call(this, a, d); d.plotX = e; d.plotY = c; this.cross && !this.cross.addedToColorAxis && f.group && (this.cross.addClass("highcharts-coloraxis-marker").add(f.group), this.cross.addedToColorAxis = !0, this.chart.styledMode || "object" !== typeof this.crosshair || this.cross.attr({ fill: this.crosshair.color })) }
                                };
                            e.prototype.getPlotLinePath = function (a) { var d = this.left, e = a.translatedValue, k = this.top; return f(e) ? this.horiz ? [["M", e - 4, k - 6], ["L", e + 4, k - 6], ["L", e, k], ["Z"]] : [["M", d, e], ["L", d - 6, e + 6], ["L", d - 6, e - 6], ["Z"]] : b.prototype.getPlotLinePath.call(this, a) }; e.prototype.update = function (a, d) {
                                var f = this.chart.legend; this.series.forEach(function (a) { a.isDirtyData = !0 }); (a.dataClasses && f.allItems || this.dataClasses) && this.destroyItems(); b.prototype.update.call(this, a, d); this.legendItem && this.legendItem.label && (this.setLegendColor(),
                                    f.colorizeItem(this, !0))
                            }; e.prototype.destroyItems = function () { var a = this.chart, b = this.legendItem || {}; if (b.label) a.legend.destroyItem(this); else if (b.labels) { var d = 0; for (b = b.labels; d < b.length; d++)a.legend.destroyItem(b[d]) } a.isDirtyLegend = !0 }; e.prototype.destroy = function () { this.chart.isDirtyLegend = !0; this.destroyItems(); b.prototype.destroy.apply(this, [].slice.call(arguments)) }; e.prototype.remove = function (a) { this.destroyItems(); b.prototype.remove.call(this, a) }; e.prototype.getDataClassLegendSymbols =
                                function () {
                                    var b = this, d = b.chart, f = b.legendItem && b.legendItem.labels || [], e = d.options.legend, c = k(e.valueDecimals, -1), h = k(e.valueSuffix, ""), m = function (a) { return b.series.reduce(function (c, b) { c.push.apply(c, b.points.filter(function (c) { return c.dataClass === a })); return c }, []) }, p; f.length || b.dataClasses.forEach(function (g, e) {
                                        var k = g.from, n = g.to, q = d.numberFormatter, x = !0; p = ""; "undefined" === typeof k ? p = "< " : "undefined" === typeof n && (p = "> "); "undefined" !== typeof k && (p += q(k, c) + h); "undefined" !== typeof k && "undefined" !==
                                            typeof n && (p += " - "); "undefined" !== typeof n && (p += q(n, c) + h); f.push(a({ chart: d, name: p, options: {}, drawLegendSymbol: y.drawRectangle, visible: !0, isDataClass: !0, setState: function (a) { for (var c = 0, b = m(e); c < b.length; c++)b[c].setState(a) }, setVisible: function () { this.visible = x = b.visible = !x; for (var a = 0, c = m(e); a < c.length; a++)c[a].setVisible(x); d.legend.colorizeItem(this, x) } }, g))
                                    }); return f
                                }; e.defaultColorAxisOptions = C; e.defaultLegendLength = 200; e.keepProps = ["legendItem"]; return e
                        }(b); Array.prototype.push.apply(b.keepProps,
                            e.keepProps); ""; return e
                    }); H(e, "Maps/MapNavigationDefaults.js", [e["Core/Defaults.js"], e["Core/Utilities.js"]], function (b, e) {
                        e = e.extend; var z = { buttonOptions: { alignTo: "plotBox", align: "left", verticalAlign: "top", x: 0, width: 18, height: 18, padding: 5, style: { fontSize: "15px", fontWeight: "bold" }, theme: { "stroke-width": 1, "text-align": "center" } }, buttons: { zoomIn: { onclick: function () { this.mapZoom(.5) }, text: "+", y: 0 }, zoomOut: { onclick: function () { this.mapZoom(2) }, text: "-", y: 28 } }, mouseWheelSensitivity: 1.1 }; e(b.defaultOptions.lang,
                            { zoomIn: "Zoom in", zoomOut: "Zoom out" }); return b.defaultOptions.mapNavigation = z
                    }); H(e, "Maps/MapNavigation.js", [e["Core/Chart/Chart.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function (b, e, z) {
                        function C(a) { a && (a.preventDefault && a.preventDefault(), a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0) } function w(a) { this.navButtons = []; this.init(a) } var y = e.doc, G = z.addEvent, t = z.extend, r = z.isNumber, n = z.merge, h = z.objectEach, a = z.pick; w.prototype.init = function (a) { this.chart = a }; w.prototype.update = function (b) {
                            var d =
                                this, f = this.chart, e = f.options.mapNavigation, r, A = function (a) { this.handler.call(f, a); C(a) }, x = d.navButtons; b && (e = f.options.mapNavigation = n(f.options.mapNavigation, b)); for (; x.length;)x.pop().destroy(); a(e.enableButtons, e.enabled) && !f.renderer.forExport && (d.navButtonsGroup || (d.navButtonsGroup = f.renderer.g().attr({ zIndex: 4 }).add()), h(e.buttons, function (a, b) {
                                    a = n(e.buttonOptions, a); !f.styledMode && a.theme && (r = a.theme, r.style = n(a.theme.style, a.style)); var c = f.renderer.button(a.text || "", 0, 0, A, r, void 0, void 0,
                                        void 0, "zoomIn" === b ? "topbutton" : "bottombutton").addClass("highcharts-map-navigation highcharts-" + { zoomIn: "zoom-in", zoomOut: "zoom-out" }[b]).attr({ width: a.width, height: a.height, title: f.options.lang[b], padding: a.padding, zIndex: 5 }).add(d.navButtonsGroup); c.handler = a.onclick; G(c.element, "dblclick", C); x.push(c); t(a, { width: c.width, height: 2 * c.height }); if (f.hasLoaded) c.align(a, !1, a.alignTo); else var k = G(f, "load", function () { c.element && c.align(a, !1, a.alignTo); k() })
                                }), b = function () {
                                    var a = f.exportingGroup && f.exportingGroup.getBBox();
                                    if (a) { var b = d.navButtonsGroup.getBBox(); if (!(b.x >= a.x + a.width || b.x + b.width <= a.x || b.y >= a.y + a.height || b.y + b.height <= a.y)) { var c = -b.y - b.height + a.y - 5; a = a.y + a.height - b.y + 5; d.navButtonsGroup.attr({ translateY: "bottom" === (e.buttonOptions && e.buttonOptions.verticalAlign) ? c : a }) } }
                                }, f.hasLoaded || G(f, "render", b)); this.updateEvents(e)
                        }; w.prototype.updateEvents = function (b) {
                            var d = this.chart; a(b.enableDoubleClickZoom, b.enabled) || b.enableDoubleClickZoomTo ? this.unbindDblClick = this.unbindDblClick || G(d.container, "dblclick",
                                function (a) { d.pointer.onContainerDblClick(a) }) : this.unbindDblClick && (this.unbindDblClick = this.unbindDblClick()); a(b.enableMouseWheelZoom, b.enabled) ? this.unbindMouseWheel = this.unbindMouseWheel || G(d.container, void 0 !== y.onwheel ? "wheel" : void 0 !== y.onmousewheel ? "mousewheel" : "DOMMouseScroll", function (a) { d.pointer.inClass(a.target, "highcharts-no-mousewheel") || (d.pointer.onContainerMouseWheel(a), C(a)); return !1 }) : this.unbindMouseWheel && (this.unbindMouseWheel = this.unbindMouseWheel())
                        }; t(b.prototype, {
                            fitToBox: function (a,
                                b) { [["x", "width"], ["y", "height"]].forEach(function (d) { var f = d[0]; d = d[1]; a[f] + a[d] > b[f] + b[d] && (a[d] > b[d] ? (a[d] = b[d], a[f] = b[f]) : a[f] = b[f] + b[d] - a[d]); a[d] > b[d] && (a[d] = b[d]); a[f] < b[f] && (a[f] = b[f]) }); return a }, mapZoom: function (a, b, e, h, n) { this.mapView && (r(a) && (a = Math.log(a) / Math.log(.5)), this.mapView.zoomBy(a, r(b) && r(e) ? this.mapView.projection.inverse([b, e]) : void 0, r(h) && r(n) ? [h, n] : void 0)) }
                        }); G(b, "beforeRender", function () { this.mapNavigation = new w(this); this.mapNavigation.update() }); e.MapNavigation = w
                    });
    H(e, "Maps/MapPointer.js", [e["Core/Pointer.js"], e["Core/Utilities.js"]], function (b, e) {
        var z = e.defined, C = e.extend, w = e.pick; e = e.wrap; var y = b.prototype.normalize, G = 0, t; C(b.prototype, {
            normalize: function (b, e) { var h = this.chart; b = y.call(this, b, e); h && h.mapView && (e = h.mapView.pixelsToLonLat({ x: b.chartX - h.plotLeft, y: b.chartY - h.plotTop })) && C(b, e); return b }, onContainerDblClick: function (b) {
                var e = this.chart; b = this.normalize(b); e.options.mapNavigation.enableDoubleClickZoomTo ? e.pointer.inClass(b.target, "highcharts-tracker") &&
                    e.hoverPoint && e.hoverPoint.zoomTo() : e.isInsidePlot(b.chartX - e.plotLeft, b.chartY - e.plotTop) && e.mapZoom(.5, void 0, void 0, b.chartX, b.chartY)
            }, onContainerMouseWheel: function (b) {
                var e = this.chart; b = this.normalize(b); var h = z(b.wheelDelta) && -b.wheelDelta / 120 || b.deltaY || b.detail; 1 <= Math.abs(h) && (G += Math.abs(h), t && clearTimeout(t), t = setTimeout(function () { G = 0 }, 50)); 10 > G && e.isInsidePlot(b.chartX - e.plotLeft, b.chartY - e.plotTop) && e.mapView && e.mapView.zoomBy((e.options.mapNavigation.mouseWheelSensitivity - 1) * -h, void 0,
                    [b.chartX, b.chartY], 1 > Math.abs(h) ? !1 : void 0)
            }
        }); e(b.prototype, "zoomOption", function (b) { var e = this.chart.options.mapNavigation; w(e.enableTouchZoom, e.enabled) && (this.chart.options.chart.zooming.pinchType = "xy"); b.apply(this, [].slice.call(arguments, 1)) }); e(b.prototype, "pinchTranslate", function (b, e, h, a, f, d, k) { b.call(this, e, h, a, f, d, k); "map" === this.chart.options.chart.type && this.hasZoom && (b = a.scaleX > a.scaleY, this.pinchTranslateDirection(!b, e, h, a, f, d, k, b ? a.scaleX : a.scaleY)) })
    }); H(e, "Series/ColorMapComposition.js",
        [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (b, e) {
            var z = b.seriesTypes.column.prototype, C = e.addEvent, w = e.defined, y; (function (b) {
                function e(b) { this.moveToTopOnHover && this.graphic && this.graphic.attr({ zIndex: b && "hover" === b.state ? 1 : 0 }) } var r = []; b.pointMembers = { dataLabelOnNull: !0, moveToTopOnHover: !0, isValid: function () { return null !== this.value && Infinity !== this.value && -Infinity !== this.value && (void 0 === this.value || !isNaN(this.value)) } }; b.seriesMembers = {
                    colorKey: "value", axisTypes: ["xAxis",
                        "yAxis", "colorAxis"], parallelArrays: ["x", "y", "value"], pointArrayMap: ["value"], trackerGroups: ["group", "markerGroup", "dataLabelsGroup"], colorAttribs: function (b) { var e = {}; !w(b.color) || b.state && "normal" !== b.state || (e[this.colorProp || "fill"] = b.color); return e }, pointAttribs: z.pointAttribs
                }; b.compose = function (b) { var h = b.prototype.pointClass; -1 === r.indexOf(h) && (r.push(h), C(h, "afterSetState", e)); return b }
            })(y || (y = {})); return y
        }); H(e, "Maps/MapSymbols.js", [e["Core/Renderer/SVG/SVGRenderer.js"]], function (b) {
            function e(b,
                e, w, y, G, t, r, n) { return [["M", b + G, e], ["L", b + w - t, e], ["C", b + w - t / 2, e, b + w, e + t / 2, b + w, e + t], ["L", b + w, e + y - r], ["C", b + w, e + y - r / 2, b + w - r / 2, e + y, b + w - r, e + y], ["L", b + n, e + y], ["C", b + n / 2, e + y, b, e + y - n / 2, b, e + y - n], ["L", b, e + G], ["C", b, e + G / 2, b + G / 2, e, b + G, e], ["Z"]] } b = b.prototype.symbols; b.bottombutton = function (b, C, w, y, G) { G = G && G.r || 0; return e(b - 1, C - 1, w, y, 0, 0, G, G) }; b.topbutton = function (b, C, w, y, G) { G = G && G.r || 0; return e(b - 1, C - 1, w, y, G, G, 0, 0) }; return b
        }); H(e, "Core/Chart/MapChart.js", [e["Core/Chart/Chart.js"], e["Core/Defaults.js"], e["Core/Renderer/SVG/SVGRenderer.js"],
        e["Core/Utilities.js"]], function (b, e, z, C) {
            var w = this && this.__extends || function () { var b = function (e, h) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, b) { a.__proto__ = b } || function (a, b) { for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]) }; return b(e, h) }; return function (e, h) { function a() { this.constructor = e } b(e, h); e.prototype = null === h ? Object.create(h) : (a.prototype = h.prototype, new a) } }(), y = e.getOptions, G = C.merge, t = C.pick; b = function (b) {
                function e() {
                    return null !== b && b.apply(this, arguments) ||
                        this
                } w(e, b); e.prototype.init = function (e, a) { var f = y().credits; e = G({ chart: { panning: { enabled: !0, type: "xy" }, type: "map" }, credits: { mapText: t(f.mapText, ' \u00a9 <a href="{geojson.copyrightUrl}">{geojson.copyrightShort}</a>'), mapTextFull: t(f.mapTextFull, "{geojson.copyright}") }, mapView: {}, tooltip: { followTouchMove: !1 } }, e); b.prototype.init.call(this, e, a) }; return e
            }(b); (function (b) {
                b.maps = {}; b.mapChart = function (e, h, a) { return new b(e, h, a) }; b.splitPath = function (b) {
                    "string" === typeof b && (b = b.replace(/([A-Za-z])/g,
                        " $1 ").replace(/^\s*/, "").replace(/\s*$/, ""), b = b.split(/[ ,;]+/).map(function (b) { return /[A-za-z]/.test(b) ? b : parseFloat(b) })); return z.prototype.pathToSegments(b)
                }
            })(b || (b = {})); return b
        }); H(e, "Maps/MapUtilities.js", [], function () {
            return {
                boundsFromPath: function (b) {
                    var e = -Number.MAX_VALUE, z = Number.MAX_VALUE, C = -Number.MAX_VALUE, w = Number.MAX_VALUE, y; b.forEach(function (b) {
                        var t = b[b.length - 2]; b = b[b.length - 1]; "number" === typeof t && "number" === typeof b && (z = Math.min(z, t), e = Math.max(e, t), w = Math.min(w, b), C = Math.max(C,
                            b), y = !0)
                    }); if (y) return { x1: z, y1: w, x2: e, y2: C }
                }, pointInPolygon: function (b, e) { var z, C = !1, w = b.x, y = b.y; b = 0; for (z = e.length - 1; b < e.length; z = b++) { var G = e[b][1] > y; var t = e[z][1] > y; G !== t && w < (e[z][0] - e[b][0]) * (y - e[b][1]) / (e[z][1] - e[b][1]) + e[b][0] && (C = !C) } return C }
            }
        }); H(e, "Series/Map/MapPoint.js", [e["Series/ColorMapComposition.js"], e["Maps/MapUtilities.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (b, e, z, C) {
            var w = this && this.__extends || function () {
                var b = function (e, a) {
                    b = Object.setPrototypeOf ||
                    { __proto__: [] } instanceof Array && function (a, b) { a.__proto__ = b } || function (a, b) { for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]) }; return b(e, a)
                }; return function (e, a) { function f() { this.constructor = e } b(e, a); e.prototype = null === a ? Object.create(a) : (f.prototype = a.prototype, new f) }
            }(), y = e.boundsFromPath, G = C.extend, t = C.isNumber, r = C.pick; e = function (b) {
                function e() { var a = null !== b && b.apply(this, arguments) || this; a.options = void 0; a.path = void 0; a.series = void 0; return a } w(e, b); e.getProjectedPath = function (a, b) {
                    a.projectedPath ||
                    (b && a.geometry ? (b.hasCoordinates = !0, a.projectedPath = b.path(a.geometry)) : a.projectedPath = a.path); return a.projectedPath || []
                }; e.prototype.applyOptions = function (a, f) { var d = this.series; a = b.prototype.applyOptions.call(this, a, f); f = d.joinBy; d.mapData && d.mapMap && (f = b.prototype.getNestedProperty.call(a, f[1]), (f = "undefined" !== typeof f && d.mapMap[f]) ? G(a, f) : -1 !== d.pointArrayMap.indexOf("value") && (a.value = a.value || null)); return a }; e.prototype.getProjectedBounds = function (a) {
                    a = e.getProjectedPath(this, a); a = y(a);
                    var b = this.properties; if (a) { var d = b && b["hc-middle-x"]; b = b && b["hc-middle-y"]; a.midX = a.x1 + (a.x2 - a.x1) * r(this.middleX, t(d) ? d : .5); d = r(this.middleY, t(b) ? b : .5); this.geometry || (d = 1 - d); a.midY = a.y2 - (a.y2 - a.y1) * d; return a }
                }; e.prototype.onMouseOver = function (a) { C.clearTimeout(this.colorInterval); if (!this.isNull && this.visible || this.series.options.nullInteraction) b.prototype.onMouseOver.call(this, a); else this.series.onMouseOut(a) }; e.prototype.setVisible = function (a) {
                    var b = a ? "show" : "hide"; this.visible = this.options.visible =
                        !!a; if (this.dataLabel) this.dataLabel[b](); this.graphic && this.graphic.attr(this.series.pointAttribs(this))
                }; e.prototype.zoomTo = function () {
                    var a = this.series.chart, b = a.mapView, d = this.bounds; if (b && d) {
                        var e = t(this.insetIndex) && b.insets[this.insetIndex]; if (e) { var h = e.projectedUnitsToPixels({ x: d.x1, y: d.y1 }); d = e.projectedUnitsToPixels({ x: d.x2, y: d.y2 }); h = b.pixelsToProjectedUnits({ x: h.x, y: h.y }); d = b.pixelsToProjectedUnits({ x: d.x, y: d.y }); d = { x1: h.x, y1: h.y, x2: d.x, y2: d.y } } b.fitToBounds(d, void 0, !1); this.series.isDirty =
                            !0; a.redraw()
                    }
                }; return e
            }(z.seriesTypes.scatter.prototype.pointClass); G(e.prototype, { dataLabelOnNull: b.pointMembers.dataLabelOnNull, moveToTopOnHover: b.pointMembers.moveToTopOnHover, isValid: b.pointMembers.isValid }); return e
        }); H(e, "Maps/MapViewOptionsDefault.js", [], function () { return { center: [0, 0], maxZoom: void 0, padding: 0, projection: { name: void 0, parallels: void 0, rotation: void 0 }, zoom: void 0 } }); H(e, "Maps/MapViewInsetsOptionsDefault.js", [], function () {
            return {
                borderColor: "#cccccc", borderWidth: 1, center: [0,
                    0], padding: "10%", relativeTo: "mapBoundingBox", units: "percent"
            }
        }); H(e, "Extensions/GeoJSON.js", [e["Core/Chart/Chart.js"], e["Core/FormatUtilities.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function (b, e, z, C) {
            function w(a, b) {
                b || (b = Object.keys(a.objects)[0]); b = a.objects[b]; if (b["hc-decoded-geojson"]) return b["hc-decoded-geojson"]; var d = a.arcs; if (a.transform) {
                    var f = a.transform, e = f.scale, h = f.translate; d = a.arcs.map(function (a) {
                        var b = 0, d = 0; return a.map(function (a) {
                            a = a.slice(); a[0] = (b += a[0]) * e[0] + h[0];
                            a[1] = (d += a[1]) * e[1] + h[1]; return a
                        })
                    })
                } var n = function (a) { return "number" === typeof a[0] ? a.reduce(function (a, b, c) { var f = 0 > b ? d[~b] : d[b]; 0 > b ? (f = f.slice(0, 0 === c ? f.length : f.length - 1), f.reverse()) : c && (f = f.slice(1)); return a.concat(f) }, []) : a.map(n) }; f = b.geometries.map(function (a) { return { type: "Feature", properties: a.properties, geometry: { type: a.type, coordinates: a.coordinates || n(a.arcs) } } }); a = {
                    type: "FeatureCollection", copyright: a.copyright, copyrightShort: a.copyrightShort, copyrightUrl: a.copyrightUrl, features: f,
                    "hc-recommended-mapview": b["hc-recommended-mapview"], bbox: a.bbox, title: a.title
                }; return b["hc-decoded-geojson"] = a
            } function y(a, b, d) {
                void 0 === b && (b = "map"); var f = []; a = "Topology" === a.type ? w(a) : a; a.features.forEach(function (a) {
                    var d = a.geometry || {}, e = d.type; d = d.coordinates; a = a.properties; var k; "map" !== b && "mapbubble" !== b || "Polygon" !== e && "MultiPolygon" !== e ? "mapline" !== b || "LineString" !== e && "MultiLineString" !== e ? "mappoint" === b && "Point" === e && d.length && (k = { geometry: { coordinates: d, type: e } }) : d.length && (k = {
                        geometry: {
                            coordinates: d,
                            type: e
                        }
                    }) : d.length && (k = { geometry: { coordinates: d, type: e } }); if (k) { e = a && (a.name || a.NAME); d = a && a.lon; var h = a && a.lat; f.push(n(k, { lat: "number" === typeof h ? h : void 0, lon: "number" === typeof d ? d : void 0, name: "string" === typeof e ? e : void 0, properties: a })) }
                }); d && a.copyrightShort && (d.chart.mapCredits = G(d.chart.options.credits.mapText, { geojson: a }), d.chart.mapCreditsFull = G(d.chart.options.credits.mapTextFull, { geojson: a })); return f
            } var G = e.format, t = z.win, r = C.error, n = C.extend, h = C.merge; e = C.wrap; ""; b.prototype.transformFromLatLon =
                function (a, b) {
                    var d = this.options.chart.proj4 || t.proj4; if (d) {
                        var f = b.jsonmarginX; f = void 0 === f ? 0 : f; var e = b.jsonmarginY; e = void 0 === e ? 0 : e; var h = b.jsonres; h = void 0 === h ? 1 : h; var n = b.scale; n = void 0 === n ? 1 : n; var x = b.xoffset; x = void 0 === x ? 0 : x; var w = b.xpan; w = void 0 === w ? 0 : w; var q = b.yoffset; q = void 0 === q ? 0 : q; var c = b.ypan; c = void 0 === c ? 0 : c; a = d(b.crs, [a.lon, a.lat]); d = b.cosAngle || b.rotation && Math.cos(b.rotation); var B = b.sinAngle || b.rotation && Math.sin(b.rotation); b = b.rotation ? [a[0] * d + a[1] * B, -a[0] * B + a[1] * d] : a; return {
                            x: ((b[0] -
                                x) * n + w) * h + f, y: -(((q - b[1]) * n + c) * h - e)
                        }
                    } r(21, !1, this)
                }; b.prototype.transformToLatLon = function (a, b) {
                    var d = this.options.chart.proj4 || t.proj4; if (!d) r(21, !1, this); else if (null !== a.y) {
                        var f = b.jsonmarginX, e = b.jsonmarginY, h = b.jsonres; h = void 0 === h ? 1 : h; var n = b.scale; n = void 0 === n ? 1 : n; var x = b.xoffset, w = b.xpan, q = b.yoffset, c = b.ypan; a = { x: ((a.x - (void 0 === f ? 0 : f)) / h - (void 0 === w ? 0 : w)) / n + (void 0 === x ? 0 : x), y: ((a.y - (void 0 === e ? 0 : e)) / h + (void 0 === c ? 0 : c)) / n + (void 0 === q ? 0 : q) }; f = b.cosAngle || b.rotation && Math.cos(b.rotation); e =
                            b.sinAngle || b.rotation && Math.sin(b.rotation); b = d(b.crs, "WGS84", b.rotation ? { x: a.x * f + a.y * -e, y: a.x * e + a.y * f } : a); return { lat: b.y, lon: b.x }
                    }
                }; b.prototype.fromPointToLatLon = function (a) { return this.mapView && this.mapView.projectedUnitsToLonLat(a) }; b.prototype.fromLatLonToPoint = function (a) { return this.mapView && this.mapView.lonLatToProjectedUnits(a) }; e(b.prototype, "addCredits", function (a, b) { b = h(!0, this.options.credits, b); this.mapCredits && (b.href = null); a.call(this, b); this.credits && this.mapCreditsFull && this.credits.attr({ title: this.mapCreditsFull }) });
            z.geojson = y; return { geojson: y, topo2geo: w }
        }); H(e, "Core/Geometry/PolygonClip.js", [], function () {
            var b = function (b, e, y) { return (e[0] - b[0]) * (y[1] - b[1]) > (e[1] - b[1]) * (y[0] - b[0]) }, e = function (b, e, y, z) { var t = [b[0] - e[0], b[1] - e[1]], r = [y[0] - z[0], y[1] - z[1]]; b = b[0] * e[1] - b[1] * e[0]; y = y[0] * z[1] - y[1] * z[0]; z = 1 / (t[0] * r[1] - t[1] * r[0]); t = [(b * r[0] - y * t[0]) * z, (b * r[1] - y * t[1]) * z]; t.isIntersection = !0; return t }, z; (function (z) {
                z.clipLineString = function (b, e) {
                    var w = []; b = z.clipPolygon(b, e, !1); for (e = 1; e < b.length; e++)b[e].isIntersection &&
                        b[e - 1].isIntersection && (w.push(b.splice(0, e)), e = 0), e === b.length - 1 && w.push(b); return w
                }; z.clipPolygon = function (w, y, z) { void 0 === z && (z = !0); for (var t = y[y.length - 1], r, n, h = w, a = 0; a < y.length; a++) { var f = h; w = y[a]; h = []; r = z ? f[f.length - 1] : f[0]; for (var d = 0; d < f.length; d++)n = f[d], b(t, w, n) ? (b(t, w, r) || h.push(e(t, w, r, n)), h.push(n)) : b(t, w, r) && h.push(e(t, w, r, n)), r = n; t = w } return h }
            })(z || (z = {})); return z
        }); H(e, "Maps/Projections/LambertConformalConic.js", [], function () {
            var b = Math.sign || function (b) { return 0 === b ? 0 : 0 < b ? 1 : -1 },
            e = Math.PI / 180, z = Math.PI / 2; return function () {
                function C(w) { var y, C = (w.parallels || []).map(function (b) { return b * e }), t = C[0] || 0; C = null !== (y = C[1]) && void 0 !== y ? y : t; y = Math.cos(t); "object" === typeof w.projectedBounds && (this.projectedBounds = w.projectedBounds); w = t === C ? Math.sin(t) : Math.log(y / Math.cos(C)) / Math.log(Math.tan((z + C) / 2) / Math.tan((z + t) / 2)); 1e-10 > Math.abs(w) && (w = 1e-10 * (b(w) || 1)); this.n = w; this.c = y * Math.pow(Math.tan((z + t) / 2), w) / w } C.prototype.forward = function (b) {
                    var y = b[0] * e, w = this.c, t = this.n, r = this.projectedBounds;
                    b = b[1] * e; 0 < w ? b < -z + .000001 && (b = -z + .000001) : b > z - .000001 && (b = z - .000001); var n = w / Math.pow(Math.tan((z + b) / 2), t); b = n * Math.sin(t * y) * 63.78137; y = 63.78137 * (w - n * Math.cos(t * y)); w = [b, y]; r && (b < r.x1 || b > r.x2 || y < r.y1 || y > r.y2) && (w.outside = !0); return w
                }; C.prototype.inverse = function (w) { var y = w[0] / 63.78137, C = this.c, t = this.n; w = C - w[1] / 63.78137; var r = b(t) * Math.sqrt(y * y + w * w), n = Math.atan2(y, Math.abs(w)) * b(w); 0 > w * t && (n -= Math.PI * b(y) * b(w)); return [n / t / e, (2 * Math.atan(Math.pow(C / r, 1 / t)) - z) / e] }; return C
            }()
        }); H(e, "Maps/Projections/EqualEarth.js",
            [], function () {
                var b = Math.sqrt(3) / 2; return function () {
                    function e() { this.bounds = { x1: -200.37508342789243, x2: 200.37508342789243, y1: -97.52595454902263, y2: 97.52595454902263 } } e.prototype.forward = function (e) { var z = Math.PI / 180, w = Math.asin(b * Math.sin(e[1] * z)), y = w * w, G = y * y * y; return [e[0] * z * Math.cos(w) * 74.03120656864502 / (b * (1.340264 + 3 * -.081106 * y + G * (7 * .000893 + .034164 * y))), 74.03120656864502 * w * (1.340264 + -.081106 * y + G * (.000893 + .003796 * y))] }; e.prototype.inverse = function (e) {
                        var z = e[0] / 74.03120656864502; e = e[1] / 74.03120656864502;
                        var w = 180 / Math.PI, y = e, G; for (G = 0; 12 > G; ++G) { var t = y * y; var r = t * t * t; var n = y * (1.340264 + -.081106 * t + r * (.000893 + .003796 * t)) - e; t = 1.340264 + 3 * -.081106 * t + r * (7 * .000893 + .034164 * t); y -= n /= t; if (1e-9 > Math.abs(n)) break } t = y * y; return [w * b * z * (1.340264 + 3 * -.081106 * t + t * t * t * (7 * .000893 + .034164 * t)) / Math.cos(y), w * Math.asin(Math.sin(y) / b)]
                    }; return e
                }()
            }); H(e, "Maps/Projections/Miller.js", [], function () {
                var b = Math.PI / 4, e = Math.PI / 180; return function () {
                    function z() {
                        this.bounds = {
                            x1: -200.37508342789243, x2: 200.37508342789243, y1: -146.91480769173063,
                            y2: 146.91480769173063
                        }
                    } z.prototype.forward = function (z) { return [z[0] * e * 63.78137, 79.7267125 * Math.log(Math.tan(b + .4 * z[1] * e))] }; z.prototype.inverse = function (z) { return [z[0] / 63.78137 / e, 2.5 * (Math.atan(Math.exp(z[1] / 63.78137 * .8)) - b) / e] }; return z
                }()
            }); H(e, "Maps/Projections/Orthographic.js", [], function () {
                var b = Math.PI / 180; return function () {
                    function e() { this.antimeridianCutting = !1; this.bounds = { x1: -63.78460826781007, x2: 63.78460826781007, y1: -63.78460826781007, y2: 63.78460826781007 } } e.prototype.forward = function (e) {
                        var z =
                            e[0]; e = e[1] * b; e = [Math.cos(e) * Math.sin(z * b) * 63.78460826781007, 63.78460826781007 * Math.sin(e)]; if (-90 > z || 90 < z) e.outside = !0; return e
                    }; e.prototype.inverse = function (e) { var z = e[0] / 63.78460826781007; e = e[1] / 63.78460826781007; var w = Math.sqrt(z * z + e * e), y = Math.asin(w), G = Math.sin(y); return [Math.atan2(z * G, w * Math.cos(y)) / b, Math.asin(w && e * G / w) / b] }; return e
                }()
            }); H(e, "Maps/Projections/WebMercator.js", [], function () {
                var b = Math.PI / 180; return function () {
                    function e() {
                        this.bounds = {
                            x1: -200.37508342789243, x2: 200.37508342789243,
                            y1: -200.3750834278071, y2: 200.3750834278071
                        }; this.maxLatitude = 85.0511287798
                    } e.prototype.forward = function (e) { var z = Math.sin(e[1] * b); z = [63.78137 * e[0] * b, 63.78137 * Math.log((1 + z) / (1 - z)) / 2]; 85.0511287798 < Math.abs(e[1]) && (z.outside = !0); return z }; e.prototype.inverse = function (e) { return [e[0] / (63.78137 * b), (2 * Math.atan(Math.exp(e[1] / 63.78137)) - Math.PI / 2) / b] }; return e
                }()
            }); H(e, "Maps/Projections/ProjectionRegistry.js", [e["Maps/Projections/LambertConformalConic.js"], e["Maps/Projections/EqualEarth.js"], e["Maps/Projections/Miller.js"],
            e["Maps/Projections/Orthographic.js"], e["Maps/Projections/WebMercator.js"]], function (b, e, z, C, w) { return { EqualEarth: e, LambertConformalConic: b, Miller: z, Orthographic: C, WebMercator: w } }); H(e, "Maps/Projection.js", [e["Core/Geometry/PolygonClip.js"], e["Maps/Projections/ProjectionRegistry.js"], e["Core/Utilities.js"]], function (b, e, z) {
                var C = this && this.__spreadArray || function (b, a, f) {
                    if (f || 2 === arguments.length) for (var d = 0, e = a.length, h; d < e; d++)!h && d in a || (h || (h = Array.prototype.slice.call(a, 0, d)), h[d] = a[d]); return b.concat(h ||
                        Array.prototype.slice.call(a))
                }, w = b.clipLineString, y = b.clipPolygon, G = z.clamp, t = z.erase, r = 2 * Math.PI / 360, n = function (b) { -180 > b && (b += 360); 180 < b && (b -= 360); return b }; return function () {
                    function b(a) {
                        void 0 === a && (a = {}); this.hasGeoProjection = this.hasCoordinates = !1; this.maxLatitude = 90; this.options = a; var f = a.name, d = a.projectedBounds, e = a.rotation; this.rotator = e ? this.getRotator(e) : void 0; if (f = f ? b.registry[f] : void 0) this.def = new f(a); var h = this.def, n = this.rotator; h && (this.maxLatitude = h.maxLatitude || 90, this.hasGeoProjection =
                            !0); n && h ? (this.forward = function (a) { return h.forward(n.forward(a)) }, this.inverse = function (a) { return n.inverse(h.inverse(a)) }) : h ? (this.forward = function (a) { return h.forward(a) }, this.inverse = function (a) { return h.inverse(a) }) : n && (this.forward = n.forward, this.inverse = n.inverse); this.bounds = "world" === d ? h && h.bounds : d
                    } b.add = function (a, f) { b.registry[a] = f }; b.greatCircle = function (a, b, d) {
                        var f = Math.atan2, e = Math.cos, h = Math.sin, n = Math.sqrt, x = a[1] * r, t = a[0] * r, q = b[1] * r, c = b[0] * r, B = q - x, m = c - t; B = h(B / 2) * h(B / 2) + e(x) * e(q) *
                            h(m / 2) * h(m / 2); B = 2 * f(n(B), n(1 - B)); var u = Math.round(6371E3 * B / 5E5); m = []; d && m.push(a); if (1 < u) for (u = a = 1 / u; .999 > u; u += a) { var g = h((1 - u) * B) / h(B), y = h(u * B) / h(B), l = g * e(x) * e(t) + y * e(q) * e(c), v = g * e(x) * h(t) + y * e(q) * h(c); g = g * h(x) + y * h(q); g = f(g, n(l * l + v * v)); l = f(v, l); m.push([l / r, g / r]) } d && m.push(b); return m
                    }; b.insertGreatCircles = function (a) { for (var f = a.length - 1; f--;)if (10 < Math.max(Math.abs(a[f][0] - a[f + 1][0]), Math.abs(a[f][1] - a[f + 1][1]))) { var d = b.greatCircle(a[f], a[f + 1]); d.length && a.splice.apply(a, C([f + 1, 0], d, !1)) } }; b.toString =
                        function (a) { a = a || {}; var b = a.rotation; return [a.name, b && b.join(",")].join(";") }; b.prototype.lineIntersectsBounds = function (a) { var b = this.bounds || {}, d = b.x2, e = b.y1, h = b.y2, n = function (a, b, d) { var c = a[0]; a = a[1]; var f = b ? 0 : 1; if ("number" === typeof d && c[b] >= d !== a[b] >= d) return c = c[f] + (d - c[b]) / (a[b] - c[b]) * (a[f] - c[f]), b ? [c, d] : [d, c] }, A = a[0]; if (b = n(a, 0, b.x1)) A = b, a[1] = b; else if (b = n(a, 0, d)) A = b, a[1] = b; if (b = n(a, 1, e)) A = b; else if (b = n(a, 1, h)) A = b; return A }; b.prototype.getRotator = function (a) {
                            var b = a[0] * r, d = (a[1] || 0) * r; a = (a[2] ||
                                0) * r; var e = Math.cos(d), h = Math.sin(d), n = Math.cos(a), A = Math.sin(a); if (0 !== b || 0 !== d || 0 !== a) return { forward: function (a) { var d = a[0] * r + b, f = a[1] * r, c = Math.cos(f); a = Math.cos(d) * c; d = Math.sin(d) * c; f = Math.sin(f); c = f * e + a * h; return [Math.atan2(d * n - c * A, a * e - f * h) / r, Math.asin(c * n + d * A) / r] }, inverse: function (a) { var d = a[0] * r, f = a[1] * r, c = Math.cos(f); a = Math.cos(d) * c; d = Math.sin(d) * c; f = Math.sin(f); c = f * n - d * A; return [(Math.atan2(d * n + f * A, a * e + c * h) - b) / r, Math.asin(c * e - a * h) / r] } }
                        }; b.prototype.forward = function (a) { return a }; b.prototype.inverse =
                            function (a) { return a }; b.prototype.cutOnAntimeridian = function (a, f) {
                                var d = [], e = [a]; a.forEach(function (b, c) { var e = a[c - 1]; if (!c) { if (!f) return; e = a[a.length - 1] } var k = e[0], l = b[0]; (-90 > k || 90 < k) && (-90 > l || 90 < l) && 0 < k !== 0 < l && (l = G((180 - (k + 360) % 360) / ((l + 360) % 360 - (k + 360) % 360), 0, 1), d.push({ i: c, lat: e[1] + l * (b[1] - e[1]), direction: 0 > k ? 1 : -1, previousLonLat: e, lonLat: b })) }); if (d.length) if (f) {
                                    if (1 === d.length % 2) { var h = d.slice().sort(function (a, b) { return Math.abs(b.lat) - Math.abs(a.lat) })[0]; t(d, h) } for (var r = d.length - 2; 0 <= r;) {
                                        var A =
                                            d[r].i, x = n(180 + .000001 * d[r].direction), y = n(180 - .000001 * d[r].direction); A = a.splice.apply(a, C([A, d[r + 1].i - A], b.greatCircle([x, d[r].lat], [x, d[r + 1].lat], !0), !1)); A.push.apply(A, b.greatCircle([y, d[r + 1].lat], [y, d[r].lat], !0)); e.push(A); r -= 2
                                    } if (h) for (x = 0; x < e.length; x++) {
                                        r = h.direction; var q = h.lat; y = e[x]; A = y.indexOf(h.lonLat); if (-1 < A) {
                                            x = (0 > q ? -1 : 1) * this.maxLatitude; var c = n(180 + .000001 * r), B = n(180 - .000001 * r); q = b.greatCircle([c, q], [c, x], !0); for (c += 120 * r; -180 < c && 180 > c; c += 120 * r)q.push([c, x]); q.push.apply(q, b.greatCircle([B,
                                                x], [B, h.lat], !0)); y.splice.apply(y, C([A, 0], q, !1)); break
                                        }
                                    }
                                } else for (r = d.length; r--;)A = d[r].i, A = a.splice(A, a.length, [n(180 + .000001 * d[r].direction), d[r].lat]), A.unshift([n(180 - .000001 * d[r].direction), d[r].lat]), e.push(A); return e
                            }; b.prototype.path = function (a) {
                                var f = this, d = this.bounds, e = this.def, h = this.rotator, n = [], r = "Polygon" === a.type || "MultiPolygon" === a.type, x = this.hasGeoProjection, t = !e || !1 !== e.antimeridianCutting, q = t ? h : void 0, c = t ? e || this : this, B; d && (B = [[d.x1, d.y1], [d.x2, d.y1], [d.x2, d.y2], [d.x1, d.y2]]);
                                var m = function (a) {
                                    a = a.map(function (a) { if (t) { q && (a = q.forward(a)); var b = a[0]; .000001 > Math.abs(b - 180) && (b = 180 > b ? 179.999999 : 180.000001); a = [b, a[1]] } return a }); var e = [a]; x && (b.insertGreatCircles(a), t && (e = f.cutOnAntimeridian(a, r))); e.forEach(function (a) {
                                        if (!(2 > a.length)) {
                                            var f = !1, e = !1, g = function (a) { f ? n.push(["L", a[0], a[1]]) : (n.push(["M", a[0], a[1]]), f = !0) }, k = !1, h = !1, m = a.map(function (a) { a = c.forward(a); a.outside ? k = !0 : h = !0; Infinity === a[1] ? a[1] = 1E10 : -Infinity === a[1] && (a[1] = -1E10); return a }); if (t) {
                                                r && m.push(m[0]);
                                                if (k) { if (!h) return; if (B) if (r) m = y(m, B); else if (d) { w(m, B).forEach(function (a) { f = !1; a.forEach(g) }); return } } m.forEach(g)
                                            } else for (var p = 0; p < m.length; p++) { var q = a[p], u = m[p]; if (u.outside) e = !0; else { if (r && !A) { var A = q; a.push(q); m.push(u) } e && z && (r && x ? b.greatCircle(z, q).forEach(function (a) { return g(c.forward(a)) }) : f = !1); g(u); var z = q; e = !1 } }
                                        }
                                    })
                                }; "LineString" === a.type ? m(a.coordinates) : "MultiLineString" === a.type ? a.coordinates.forEach(function (a) { return m(a) }) : "Polygon" === a.type ? (a.coordinates.forEach(function (a) { return m(a) }),
                                    n.length && n.push(["Z"])) : "MultiPolygon" === a.type && (a.coordinates.forEach(function (a) { a.forEach(function (a) { return m(a) }) }), n.length && n.push(["Z"])); return n
                            }; b.registry = e; return b
                }()
            }); H(e, "Maps/MapView.js", [e["Maps/MapViewOptionsDefault.js"], e["Maps/MapViewInsetsOptionsDefault.js"], e["Extensions/GeoJSON.js"], e["Core/Chart/MapChart.js"], e["Maps/MapUtilities.js"], e["Maps/Projection.js"], e["Core/Utilities.js"]], function (b, e, z, C, w, y, G) {
                var t = this && this.__extends || function () {
                    var a = function (b, c) {
                        a = Object.setPrototypeOf ||
                        { __proto__: [] } instanceof Array && function (a, b) { a.__proto__ = b } || function (a, b) { for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]) }; return a(b, c)
                    }; return function (b, c) { function d() { this.constructor = b } a(b, c); b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d) }
                }(), r = this && this.__spreadArray || function (a, b, c) { if (c || 2 === arguments.length) for (var d = 0, f = b.length, e; d < f; d++)!e && d in b || (e || (e = Array.prototype.slice.call(b, 0, d)), e[d] = b[d]); return a.concat(e || Array.prototype.slice.call(b)) }, n = z.topo2geo,
                h = C.maps, a = w.boundsFromPath, f = w.pointInPolygon, d = G.addEvent, k = G.clamp, p = G.fireEvent, D = G.isArray, A = G.isNumber, x = G.isObject, E = G.isString, q = G.merge, c = G.pick, B = G.relativeLength, m = function (a, b) { return Math.log(400.979322 / Math.max((a.x2 - a.x1) / (b.width / 256), (a.y2 - a.y1) / (b.height / 256))) / Math.log(2) }, u = function () {
                    function a(c, f) {
                        var e = this; this.insets = []; this.padding = [0, 0, 0, 0]; this.eventsToUnbind = []; var k; if (!(this instanceof g)) {
                            var l = r([c.options.chart.map], (c.options.series || []).map(function (a) { return a.mapData }),
                                !0).map(function (a) { return e.getGeoMap(a) }), h = []; l.forEach(function (a) { a && (k || (k = a["hc-recommended-mapview"]), a.bbox && (a = a.bbox, h.push({ x1: a[0], y1: a[1], x2: a[2], y2: a[3] }))) }); var m = h.length && a.compositeBounds(h); if (m) { var n = m.x1; var p = m.y1, v = m.x2; m = m.y2; n = 180 < v - n && 90 < m - p ? { name: "EqualEarth" } : { name: "LambertConformalConic", parallels: [p, m], rotation: [-(n + v) / 2] } } this.geoMap = l[0]
                        } this.userOptions = f || {}; l = q(b, { projection: n }, k, f); m = k && k.insets; f = f && f.insets; m && f && (l.insets = a.mergeInsets(m, f)); this.chart = c;
                        this.center = l.center; this.options = l; this.projection = new y(l.projection); this.playingField = c.plotBox; this.zoom = l.zoom || 0; this.createInsets(); this.eventsToUnbind.push(d(c, "afterSetChartSize", function () { e.playingField = e.getField(); if (void 0 === e.minZoom || e.minZoom === e.zoom) e.fitToBounds(void 0, void 0, !1), !e.chart.hasRendered && A(e.userOptions.zoom) && (e.zoom = e.userOptions.zoom), e.userOptions.center && q(!0, e.center, e.userOptions.center) })); this.setUpEvents()
                    } a.mergeInsets = function (a, b) {
                        var c = function (a) {
                            var b =
                                {}; a.forEach(function (a, c) { b[a && a.id || "i".concat(c)] = a }); return b
                        }, d = q(c(a), c(b)); return Object.keys(d).map(function (a) { return d[a] })
                    }; a.prototype.createInsets = function () { var a = this, b = this.options, c = b.insets; c && c.forEach(function (c) { c = new g(a, q(b.insetOptions, c)); a.insets.push(c) }) }; a.prototype.fitToBounds = function (a, b, d, f) {
                        void 0 === d && (d = !0); var e = a || this.getProjectedBounds(); if (e) {
                            var g = c(b, a ? 0 : this.options.padding); b = this.getField(!1); g = D(g) ? g : [g, g, g, g]; this.padding = [B(g[0], b.height), B(g[1], b.width),
                            B(g[2], b.height), B(g[3], b.width)]; this.playingField = this.getField(); b = m(e, this.playingField); a || (this.minZoom = b); a = this.projection.inverse([(e.x2 + e.x1) / 2, (e.y2 + e.y1) / 2]); this.setView(a, b, d, f)
                        }
                    }; a.prototype.getField = function (a) { void 0 === a && (a = !0); a = a ? this.padding : [0, 0, 0, 0]; return { x: a[3], y: a[0], width: this.chart.plotWidth - a[1] - a[3], height: this.chart.plotHeight - a[0] - a[2] } }; a.prototype.getGeoMap = function (a) { if (E(a)) return h[a]; if (x(a, !0)) { if ("FeatureCollection" === a.type) return a; if ("Topology" === a.type) return n(a) } };
                    a.prototype.getMapBBox = function () { var a = this.getProjectedBounds(), b = this.getScale(); if (a) { var c = this.padding, d = this.projectedUnitsToPixels({ x: a.x1, y: a.y2 }); return { width: (a.x2 - a.x1) * b + c[1] + c[3], height: (a.y2 - a.y1) * b + c[0] + c[2], x: d.x - c[3], y: d.y - c[0] } } }; a.prototype.getProjectedBounds = function () { var b = this.chart.series.reduce(function (a, b) { var c = b.getProjectedBounds && b.getProjectedBounds(); c && !1 !== b.options.affectsMapView && a.push(c); return a }, []); return this.projection.bounds || a.compositeBounds(b) }; a.prototype.getScale =
                        function () { return 256 / 400.979322 * Math.pow(2, this.zoom) }; a.prototype.getSVGTransform = function () { var a = this.playingField, b = a.x, c = a.y, d = a.width; a = a.height; var f = this.projection.forward(this.center), e = this.projection.hasCoordinates ? -1 : 1, g = this.getScale(); e *= g; return { scaleX: g, scaleY: e, translateX: b + d / 2 - f[0] * g, translateY: c + a / 2 - f[1] * e } }; a.prototype.lonLatToPixels = function (a) { if (a = this.lonLatToProjectedUnits(a)) return this.projectedUnitsToPixels(a) }; a.prototype.lonLatToProjectedUnits = function (a) {
                            var b = this.chart,
                            c = b.mapTransforms; if (c) { for (var d in c) if (Object.hasOwnProperty.call(c, d) && c[d].hitZone) { var e = b.transformFromLatLon(a, c[d]); if (e && f(e, c[d].hitZone.coordinates[0])) return e } return b.transformFromLatLon(a, c["default"]) } c = 0; for (d = this.insets; c < d.length; c++)if (b = d[c], b.options.geoBounds && f({ x: a.lon, y: a.lat }, b.options.geoBounds.coordinates[0])) return a = b.projection.forward([a.lon, a.lat]), a = b.projectedUnitsToPixels({ x: a[0], y: a[1] }), this.pixelsToProjectedUnits(a); a = this.projection.forward([a.lon, a.lat]);
                            if (!a.outside) return { x: a[0], y: a[1] }
                        }; a.prototype.projectedUnitsToLonLat = function (a) {
                            var b = this.chart, c = b.mapTransforms; if (c) { for (var d in c) if (Object.hasOwnProperty.call(c, d) && c[d].hitZone && f(a, c[d].hitZone.coordinates[0])) return b.transformToLatLon(a, c[d]); return b.transformToLatLon(a, c["default"]) } c = this.projectedUnitsToPixels(a); d = 0; for (var e = this.insets; d < e.length; d++)if (b = e[d], b.hitZone && f(c, b.hitZone.coordinates[0])) return a = b.pixelsToProjectedUnits(c), a = b.projection.inverse([a.x, a.y]), {
                                lon: a[0],
                                lat: a[1]
                            }; a = this.projection.inverse([a.x, a.y]); return { lon: a[0], lat: a[1] }
                        }; a.prototype.redraw = function (a) { this.chart.series.forEach(function (a) { a.useMapGeometry && (a.isDirty = !0) }); this.chart.redraw(a) }; a.prototype.setView = function (a, b, c, d) {
                            void 0 === c && (c = !0); a && (this.center = a); "number" === typeof b && ("number" === typeof this.minZoom && (b = Math.max(b, this.minZoom)), "number" === typeof this.options.maxZoom && (b = Math.min(b, this.options.maxZoom)), A(b) && (this.zoom = b)); var f = this.getProjectedBounds(); if (f) {
                                a = this.projection.forward(this.center);
                                var e = this.playingField; b = e.x; var g = e.y, k = e.width; e = e.height; var h = this.getScale(), l = this.projectedUnitsToPixels({ x: f.x1, y: f.y1 }), m = this.projectedUnitsToPixels({ x: f.x2, y: f.y2 }); f = [(f.x1 + f.x2) / 2, (f.y1 + f.y2) / 2]; var n = l.x, q = m.y; m = m.x; l = l.y; m - n < k ? a[0] = f[0] : n < b && m < b + k ? a[0] += Math.max(n - b, m - k - b) / h : m > b + k && n > b && (a[0] += Math.min(m - k - b, n - b) / h); l - q < e ? a[1] = f[1] : q < g && l < g + e ? a[1] -= Math.max(q - g, l - e - g) / h : l > g + e && q > g && (a[1] -= Math.min(l - e - g, q - g) / h); this.center = this.projection.inverse(a); this.insets.forEach(function (a) {
                                    a.options.field &&
                                    (a.hitZone = a.getHitZone(), a.playingField = a.getField())
                                }); this.render()
                            } p(this, "afterSetView"); c && this.redraw(d)
                        }; a.prototype.projectedUnitsToPixels = function (a) { var b = this.getScale(), c = this.projection.forward(this.center), d = this.playingField; return { x: d.x + d.width / 2 - b * (c[0] - a.x), y: d.y + d.height / 2 + b * (c[1] - a.y) } }; a.prototype.pixelsToLonLat = function (a) { return this.projectedUnitsToLonLat(this.pixelsToProjectedUnits(a)) }; a.prototype.pixelsToProjectedUnits = function (a) {
                            var b = a.x; a = a.y; var c = this.getScale(),
                                d = this.projection.forward(this.center), f = this.playingField; return { x: d[0] + (b - (f.x + f.width / 2)) / c, y: d[1] - (a - (f.y + f.height / 2)) / c }
                        }; a.prototype.setUpEvents = function () {
                            var a = this, b = this.chart, c, f, e, g = function (d) {
                                var g = b.pointer.pinchDown, h = a.projection, l = b.mouseDownX, n = b.mouseDownY; 1 === g.length && (l = g[0].chartX, n = g[0].chartY); if ("number" === typeof l && "number" === typeof n) {
                                    var p = "" + l + ",".concat(n), q = d.originalEvent; g = q.chartX; q = q.chartY; p !== f && (f = p, c = a.projection.forward(a.center), e = (a.projection.options.rotation ||
                                        [0, 0]).slice()); p = (p = h.def && h.def.bounds) && m(p, a.playingField) || -Infinity; "Orthographic" === h.options.name && (a.minZoom || Infinity) < 1.1 * p ? (h = 440 / (a.getScale() * Math.min(b.plotWidth, b.plotHeight)), e && (l = (l - g) * h - e[0], n = k(-e[1] - (n - q) * h, -80, 80), g = a.zoom, a.update({ projection: { rotation: [-l, -n] } }, !1), a.zoom = g, b.redraw(!1))) : (h = a.getScale(), n = a.projection.inverse([c[0] + (l - g) / h, c[1] - (n - q) / h]), a.setView(n, void 0, !0, !1)); d.preventDefault()
                                }
                            }; d(b, "pan", g); d(b, "touchpan", g); d(b, "selection", function (c) {
                                if (c.resetSelection) a.zoomBy();
                                else { var d = c.x - b.plotLeft, f = c.y - b.plotTop, e = a.pixelsToProjectedUnits({ x: d, y: f }), g = e.y; e = e.x; d = a.pixelsToProjectedUnits({ x: d + c.width, y: f + c.height }); a.fitToBounds({ x1: e, y1: g, x2: d.x, y2: d.y }, void 0, !0, c.originalEvent.touches ? !1 : void 0); /^touch/.test(c.originalEvent.type) || b.showResetZoom(); c.preventDefault() }
                            })
                        }; a.prototype.render = function () { this.group || (this.group = this.chart.renderer.g("map-view").attr({ zIndex: 4 }).add()) }; a.prototype.update = function (a, b, c) {
                            void 0 === b && (b = !0); var d = a.projection; d = d &&
                                y.toString(d) !== y.toString(this.options.projection); var f = !1; q(!0, this.userOptions, a); q(!0, this.options, a); "insets" in a && (this.insets.forEach(function (a) { return a.destroy() }), this.insets.length = 0, f = !0); if (d || f) this.chart.series.forEach(function (a) { var b = a.transformGroups; a.clearBounds && a.clearBounds(); a.isDirty = !0; a.isDirtyData = !0; if (f && b) for (; 1 < b.length;)(a = b.pop()) && a.destroy() }), d && (this.projection = new y(this.options.projection)), f && this.createInsets(), a.center || A(a.zoom) || this.fitToBounds(void 0,
                                    void 0, !1); (a.center || A(a.zoom)) && this.setView(this.options.center, a.zoom, !1); b && this.chart.redraw(c)
                        }; a.prototype.zoomBy = function (a, b, c, d) {
                            var f = this.chart, e = this.projection.forward(this.center); b = b ? this.projection.forward(b) : []; var g = b[0], k = b[1]; "number" === typeof a ? (a = this.zoom + a, b = void 0, c && (g = c[0], k = c[1], c = this.getScale(), g = g - f.plotLeft - f.plotWidth / 2, f = k - f.plotTop - f.plotHeight / 2, g = e[0] + g / c, k = e[1] + f / c), "number" === typeof g && "number" === typeof k && (c = 1 - Math.pow(2, this.zoom) / Math.pow(2, a), g = e[0] - g,
                                f = e[1] - k, e[0] -= g * c, e[1] += f * c, b = this.projection.inverse(e)), this.setView(b, a, void 0, d)) : this.fitToBounds(void 0, void 0, void 0, d)
                        }; a.compositeBounds = function (a) { if (a.length) return a.slice(1).reduce(function (a, b) { a.x1 = Math.min(a.x1, b.x1); a.y1 = Math.min(a.y1, b.y1); a.x2 = Math.max(a.x2, b.x2); a.y2 = Math.max(a.y2, b.y2); return a }, q(a[0])) }; return a
                }(), g = function (b) {
                    function c(c, d) {
                        var f = b.call(this, c.chart, d) || this; f.id = d.id; f.mapView = c; f.options = q(e, d); f.allBounds = []; f.options.geoBounds && (c = c.projection.path(f.options.geoBounds),
                            f.geoBoundsProjectedBox = a(c), f.geoBoundsProjectedPolygon = c.map(function (a) { return [a[1] || 0, a[2] || 0] })); return f
                    } t(c, b); c.prototype.getField = function (a) {
                        void 0 === a && (a = !0); var c = this.hitZone; if (c) { var d = a ? this.padding : [0, 0, 0, 0]; c = c.coordinates[0]; var f = c.map(function (a) { return a[0] }), e = c.map(function (a) { return a[1] }); c = Math.min.apply(0, f) + d[3]; f = Math.max.apply(0, f) - d[1]; var g = Math.min.apply(0, e) + d[0]; d = Math.max.apply(0, e) - d[2]; if (A(c) && A(g)) return { x: c, y: g, width: f - c, height: d - g } } return b.prototype.getField.call(this,
                            a)
                    }; c.prototype.getHitZone = function () { var a = this.chart, b = this.mapView, c = this.options, d = (c.field || {}).coordinates; if (d) { d = d[0]; if ("percent" === c.units) { var f = "mapBoundingBox" === c.relativeTo && b.getMapBBox() || q(a.plotBox, { x: 0, y: 0 }); d = d.map(function (a) { return [B("" + a[0] + "%", f.width, f.x), B("" + a[1] + "%", f.height, f.y)] }) } return { type: "Polygon", coordinates: [d] } } }; c.prototype.getProjectedBounds = function () { return u.compositeBounds(this.allBounds) }; c.prototype.isInside = function (a) {
                        var b = this.geoBoundsProjectedBox,
                        c = this.geoBoundsProjectedPolygon; return !!(b && a.x >= b.x1 && a.x <= b.x2 && a.y >= b.y1 && a.y <= b.y2 && c && f(a, c))
                    }; c.prototype.render = function () {
                        var a = this.chart, b = this.mapView, c = this.options, d = c.borderPath || c.field; if (d && b.group) {
                            var f = !0; this.border || (this.border = a.renderer.path().addClass("highcharts-mapview-inset-border").add(b.group), f = !1); a.styledMode || this.border.attr({ stroke: c.borderColor, "stroke-width": c.borderWidth }); var e = Math.round(this.border.strokeWidth()) % 2 / 2, g = "mapBoundingBox" === c.relativeTo && b.getMapBBox() ||
                                b.playingField; b = (d.coordinates || []).reduce(function (b, d) { return d.reduce(function (b, d, f) { var k = d[0]; d = d[1]; "percent" === c.units && (k = a.plotLeft + B("" + k + "%", g.width, g.x), d = a.plotTop + B("" + d + "%", g.height, g.y)); k = Math.floor(k) + e; d = Math.floor(d) + e; b.push(0 === f ? ["M", k, d] : ["L", k, d]); return b }, b) }, []); this.border[f ? "animate" : "attr"]({ d: b })
                        }
                    }; c.prototype.destroy = function () { this.border && (this.border = this.border.destroy()); this.eventsToUnbind.forEach(function (a) { return a() }) }; c.prototype.setUpEvents = function () { };
                    return c
                }(u); d(C, "afterInit", function () { this.mapView = new u(this, this.options.mapView) }); return u
            }); H(e, "Series/Map/MapSeries.js", [e["Core/Animation/AnimationUtilities.js"], e["Series/ColorMapComposition.js"], e["Series/CenteredUtilities.js"], e["Core/Globals.js"], e["Core/Legend/LegendSymbol.js"], e["Core/Chart/MapChart.js"], e["Series/Map/MapPoint.js"], e["Maps/MapView.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Utilities.js"]], function (b,
                e, z, C, w, y, G, t, r, n, h, a) {
                    var f = this && this.__extends || function () { var a = function (b, c) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, b) { a.__proto__ = b } || function (a, b) { for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]) }; return a(b, c) }; return function (b, c) { function d() { this.constructor = b } a(b, c); b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d) } }(), d = b.animObject; b = C.noop; var k = y.splitPath; y = n.seriesTypes; var p = y.column, D = y.scatter; y = a.extend; var A = a.find, x = a.fireEvent,
                        E = a.getNestedProperty, q = a.isArray, c = a.defined, B = a.isNumber, m = a.isObject, u = a.merge, g = a.objectEach, F = a.pick, l = a.splat; a = function (a) {
                            function b() { var b = null !== a && a.apply(this, arguments) || this; b.chart = void 0; b.data = void 0; b.group = void 0; b.joinBy = void 0; b.options = void 0; b.points = void 0; b.processedData = []; return b } f(b, a); b.prototype.animate = function (a) {
                                var b = this.chart, c = this.group, f = d(this.options.animation); b.renderer.isSVG && (a ? c.attr({
                                    translateX: b.plotLeft + b.plotWidth / 2, translateY: b.plotTop + b.plotHeight /
                                        2, scaleX: .001, scaleY: .001
                                }) : c.animate({ translateX: b.plotLeft, translateY: b.plotTop, scaleX: 1, scaleY: 1 }, f))
                            }; b.prototype.animateDrilldown = function (a) { var b = this.chart, c = this.group; b.renderer.isSVG && (a ? c.attr({ translateX: b.plotLeft + b.plotWidth / 2, translateY: b.plotTop + b.plotHeight / 2, scaleX: .1, scaleY: .1, opacity: .01 }) : (c.animate({ translateX: b.plotLeft, translateY: b.plotTop, scaleX: 1, scaleY: 1, opacity: 1 }, this.chart.options.drilldown.animation), b.drilldown && b.drilldown.fadeInGroup(this.dataLabelsGroup))) }; b.prototype.animateDrillupFrom =
                                function () { var a = this.chart; a.renderer.isSVG && this.group.animate({ translateX: a.plotLeft + a.plotWidth / 2, translateY: a.plotTop + a.plotHeight / 2, scaleX: .1, scaleY: .1, opacity: .01 }) }; b.prototype.animateDrillupTo = function (a) { p.prototype.animateDrillupTo.call(this, a) }; b.prototype.clearBounds = function () { this.points.forEach(function (a) { delete a.bounds; delete a.insetIndex; delete a.projectedPath }); delete this.bounds }; b.prototype.doFullTranslate = function () {
                                    return !(!(this.isDirtyData || this.chart.isResizing || this.chart.renderer.isVML) &&
                                        this.hasRendered)
                                }; b.prototype.drawMapDataLabels = function () { r.prototype.drawDataLabels.call(this); this.dataLabelsGroup && this.dataLabelsGroup.clip(this.chart.clipRect) }; b.prototype.drawPoints = function () {
                                    var a = this, b = this, c = this.chart, d = this.group, f = this.transformGroups, e = void 0 === f ? [] : f, g = c.mapView, k = c.renderer; g && (this.transformGroups = e, e[0] || (e[0] = k.g().add(d)), g.insets.forEach(function (a, b) { e[b + 1] || e.push(k.g().add(d)) }), this.doFullTranslate() && (this.points.forEach(function (b) {
                                        var d = b.graphic, f =
                                            b.shapeArgs; b.group = e["number" === typeof b.insetIndex ? b.insetIndex + 1 : 0]; d && d.parentGroup !== b.group && d.add(b.group); f && c.hasRendered && !c.styledMode && (f.fill = a.pointAttribs(b, b.state).fill)
                                    }), p.prototype.drawPoints.apply(this), this.points.forEach(function (d) {
                                        var f = d.graphic; if (f) {
                                            var e = f.animate, g = ""; d.name && (g += "highcharts-name-" + d.name.replace(/ /g, "-").toLowerCase()); d.properties && d.properties["hc-key"] && (g += " highcharts-key-" + d.properties["hc-key"].toString().toLowerCase()); g && f.addClass(g); c.styledMode &&
                                                f.css(a.pointAttribs(d, d.selected && "select" || void 0)); f.animate = function (a, d, g) { var k = !1; if (a["stroke-width"]) { var h = F(b.getStrokeWidth(b.options), 1) / (c.mapView && c.mapView.getScale() || 1); "inherit" === f["stroke-width"] && (f["stroke-width"] = h); "inherit" === a["stroke-width"] && (a["stroke-width"] = h, k = !0) } return e.call(f, a, d, k ? function () { f.attr({ "stroke-width": "inherit" }); g && g.apply(this, arguments) } : g) }
                                        }
                                    })), e.forEach(function (b, d) {
                                        var f = (0 === d ? g : g.insets[d - 1]).getSVGTransform(), e = F(a.getStrokeWidth(a.options),
                                            1), h = f.scaleX, l = 0 < f.scaleY ? 1 : -1; if (k.globalAnimation && c.hasRendered) { var m = Number(b.attr("translateX")), n = Number(b.attr("translateY")), p = Number(b.attr("scaleX")); b.attr({ animator: 0 }).animate({ animator: 1 }, { step: function (a, c) { a = p + (h - p) * c.pos; b.attr({ translateX: m + (f.translateX - m) * c.pos, translateY: n + (f.translateY - n) * c.pos, scaleX: a, scaleY: a * l }); b.element.setAttribute("stroke-width", e / a) } }) } else b.attr(f), b.element.setAttribute("stroke-width", e / h)
                                    }), this.drawMapDataLabels())
                                }; b.prototype.getProjectedBounds =
                                    function () {
                                        if (!this.bounds && this.chart.mapView) {
                                            var a = this.chart.mapView, b = a.insets, c = a.projection, d = []; (this.points || []).forEach(function (a) {
                                                if (a.path || a.geometry) {
                                                    "string" === typeof a.path ? a.path = k(a.path) : q(a.path) && "M" === a.path[0] && (a.path = h.prototype.pathToSegments(a.path)); if (!a.bounds) {
                                                        var f = a.getProjectedBounds(c); if (f) {
                                                            a.labelrank = F(a.labelrank, (f.x2 - f.x1) * (f.y2 - f.y1)); var e = f.midX, g = f.midY; if (b && B(e) && B(g)) {
                                                                var l = A(b, function (a) { return a.isInside({ x: e, y: g }) }); l && (delete a.projectedPath, (f =
                                                                    a.getProjectedBounds(l.projection)) && l.allBounds.push(f), a.insetIndex = b.indexOf(l))
                                                            } a.bounds = f
                                                        }
                                                    } a.bounds && void 0 === a.insetIndex && d.push(a.bounds)
                                                }
                                            }); this.bounds = t.compositeBounds(d)
                                        } return this.bounds
                                    }; b.prototype.getStrokeWidth = function (a) { var b = this.pointAttrToOptions; return a[b && b["stroke-width"] || "borderWidth"] }; b.prototype.hasData = function () { return !!this.processedXData.length }; b.prototype.pointAttribs = function (a, b) {
                                        var d = a.series.chart, f = d.mapView; d = d.styledMode ? this.colorAttribs(a) : p.prototype.pointAttribs.call(this,
                                            a, b); var e = this.getStrokeWidth(a.options); b && (b = u(this.options.states[b], a.options.states && a.options.states[b] || {}), e = this.getStrokeWidth(b)); e && f && (e /= f.getScale()); b = this.getStrokeWidth(this.options); d.dashstyle && f && B(b) && (e = b / f.getScale()); a.visible || (d.fill = this.options.nullColor); c(e) ? d["stroke-width"] = e : delete d["stroke-width"]; return d
                                    }; b.prototype.updateData = function () { return this.processedData ? !1 : a.prototype.updateData.apply(this, arguments) }; b.prototype.setData = function (b, c, d, f) {
                                        void 0 ===
                                        c && (c = !0); delete this.bounds; a.prototype.setData.call(this, b, !1, void 0, f); this.processData(); this.generatePoints(); c && this.chart.redraw(d)
                                    }; b.prototype.processData = function () {
                                        var a = this.options, b = a.data, c = this.chart.options.chart, d = this.joinBy, f = a.keys || this.pointArrayMap, e = [], k = {}, h = this.chart.mapView; h = h && (m(a.mapData, !0) ? h.getGeoMap(a.mapData) : h.geoMap); var l = this.chart.mapTransforms; (this.chart.mapTransforms = l = c.mapTransforms || h && h["hc-transform"] || l) && g(l, function (a) {
                                            a.rotation && (a.cosAngle =
                                                Math.cos(a.rotation), a.sinAngle = Math.sin(a.rotation))
                                        }); if (q(a.mapData)) var n = a.mapData; else h && "FeatureCollection" === h.type && (this.mapTitle = h.title, n = C.geojson(h, this.type, this)); var p = this.processedData = []; b && b.forEach(function (c, e) {
                                            var g = 0; if (B(c)) p[e] = { value: c }; else if (q(c)) {
                                                p[e] = {}; !a.keys && c.length > f.length && "string" === typeof c[0] && (p[e]["hc-key"] = c[0], ++g); for (var k = 0; k < f.length; ++k, ++g)f[k] && "undefined" !== typeof c[g] && (0 < f[k].indexOf(".") ? G.prototype.setNestedProperty(p[e], c[g], f[k]) : p[e][f[k]] =
                                                    c[g])
                                            } else p[e] = b[e]; d && "_i" === d[0] && (p[e]._i = e)
                                        }); if (n) { this.mapData = n; this.mapMap = {}; for (l = 0; l < n.length; l++)c = n[l], h = c.properties, c._i = l, d[0] && h && h[d[0]] && (c[d[0]] = h[d[0]]), k[c[d[0]]] = c; this.mapMap = k; if (d[1]) { var r = d[1]; p.forEach(function (a) { a = E(r, a); k[a] && e.push(k[a]) }) } if (a.allAreas) { if (d[1]) { var x = d[1]; p.forEach(function (a) { e.push(E(x, a)) }) } var A = "|" + e.map(function (a) { return a && a[d[0]] }).join("|") + "|"; n.forEach(function (a) { d[0] && -1 !== A.indexOf("|" + a[d[0]] + "|") || p.push(u(a, { value: null })) }) } } this.processedXData =
                                            Array(p.length)
                                    }; b.prototype.setOptions = function (a) { a = r.prototype.setOptions.call(this, a); var b = a.joinBy; null === b && (b = "_i"); b = this.joinBy = l(b); b[1] || (b[1] = b[0]); return a }; b.prototype.translate = function () {
                                        var a = this.doFullTranslate(), b = this.chart.mapView, c = b && b.projection; !this.chart.hasRendered || !this.isDirtyData && this.hasRendered || (this.processData(), this.generatePoints(), delete this.bounds, !b || b.userOptions.center || B(b.userOptions.zoom) ? this.getProjectedBounds() : b.fitToBounds(void 0, void 0, !1));
                                        if (b) { var d = b.getSVGTransform(); this.points.forEach(function (f) { var e = B(f.insetIndex) && b.insets[f.insetIndex].getSVGTransform() || d; e && f.bounds && B(f.bounds.midX) && B(f.bounds.midY) && (f.plotX = f.bounds.midX * e.scaleX + e.translateX, f.plotY = f.bounds.midY * e.scaleY + e.translateY); a && (f.shapeType = "path", f.shapeArgs = { d: G.getProjectedPath(f, c) }) }) } x(this, "afterTranslate")
                                    }; b.defaultOptions = u(D.defaultOptions, {
                                        affectsMapView: !0, animation: !1, dataLabels: {
                                            crop: !1, formatter: function () {
                                                var a = this.series.chart.numberFormatter,
                                                b = this.point.value; return B(b) ? a(b, -1) : ""
                                            }, inside: !0, overflow: !1, padding: 0, verticalAlign: "middle"
                                        }, marker: null, nullColor: "#f7f7f7", stickyTracking: !1, tooltip: { followPointer: !0, pointFormat: "{point.name}: {point.value}<br/>" }, turboThreshold: 0, allAreas: !0, borderColor: "#cccccc", borderWidth: 1, joinBy: "hc-key", states: { hover: { halo: null, brightness: .2 }, normal: { animation: !0 }, select: { color: "#cccccc" } }
                                    }); return b
                        }(D); y(a.prototype, {
                            type: "map", axisTypes: e.seriesMembers.axisTypes, colorAttribs: e.seriesMembers.colorAttribs,
                            colorKey: e.seriesMembers.colorKey, directTouch: !0, drawDataLabels: b, drawGraph: b, drawLegendSymbol: w.drawRectangle, forceDL: !0, getCenter: z.getCenter, getExtremesFromAll: !0, getSymbol: b, isCartesian: !1, parallelArrays: e.seriesMembers.parallelArrays, pointArrayMap: e.seriesMembers.pointArrayMap, pointClass: G, preserveAspectRatio: !0, searchPoint: b, trackerGroups: e.seriesMembers.trackerGroups, useMapGeometry: !0
                        }); e.compose(a); n.registerSeriesType("map", a); ""; return a
            }); H(e, "Series/MapLine/MapLineSeries.js", [e["Series/Map/MapSeries.js"],
            e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (b, e, z) {
                var C = this && this.__extends || function () { var b = function (e, n) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, a) { b.__proto__ = a } || function (b, a) { for (var f in a) a.hasOwnProperty(f) && (b[f] = a[f]) }; return b(e, n) }; return function (e, n) { function h() { this.constructor = e } b(e, n); e.prototype = null === n ? Object.create(n) : (h.prototype = n.prototype, new h) } }(), w = e.series, y = z.extend, G = z.merge; z = function (e) {
                    function r() {
                        var b = null !==
                            e && e.apply(this, arguments) || this; b.data = void 0; b.options = void 0; b.points = void 0; return b
                    } C(r, e); r.prototype.pointAttribs = function (e, h) { e = b.prototype.pointAttribs.call(this, e, h); e.fill = this.options.fillColor; return e }; r.defaultOptions = G(b.defaultOptions, { lineWidth: 1, fillColor: "none" }); return r
                }(b); y(z.prototype, { type: "mapline", colorProp: "stroke", drawLegendSymbol: w.prototype.drawLegendSymbol, pointAttrToOptions: { stroke: "color", "stroke-width": "lineWidth" } }); e.registerSeriesType("mapline", z); ""; return z
            });
    H(e, "Series/MapPoint/MapPointPoint.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (b, e) {
        var z = this && this.__extends || function () { var b = function (e, w) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, e) { b.__proto__ = e } || function (b, e) { for (var n in e) e.hasOwnProperty(n) && (b[n] = e[n]) }; return b(e, w) }; return function (e, w) { function t() { this.constructor = e } b(e, w); e.prototype = null === w ? Object.create(w) : (t.prototype = w.prototype, new t) } }(), C = e.isNumber; return function (b) {
            function e() {
                var e =
                    null !== b && b.apply(this, arguments) || this; e.options = void 0; e.series = void 0; return e
            } z(e, b); e.prototype.isValid = function () { return !!(this.options.geometry || C(this.x) && C(this.y) || C(this.options.lon) && C(this.options.lat)) }; return e
        }(b.seriesTypes.scatter.prototype.pointClass)
    }); H(e, "Series/MapPoint/MapPointSeries.js", [e["Core/Globals.js"], e["Series/MapPoint/MapPointPoint.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (b, e, z, C) {
        var w = this && this.__extends || function () {
            var a = function (b,
                d) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, b) { a.__proto__ = b } || function (a, b) { for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]) }; return a(b, d) }; return function (b, d) { function f() { this.constructor = b } a(b, d); b.prototype = null === d ? Object.create(d) : (f.prototype = d.prototype, new f) }
        }(); b = b.noop; var y = z.seriesTypes, G = y.map, t = y.scatter; y = C.extend; var r = C.fireEvent, n = C.isNumber, h = C.merge; C = function (a) {
            function b() {
                var b = null !== a && a.apply(this, arguments) || this; b.chart = void 0; b.data = void 0;
                b.options = void 0; b.points = void 0; b.clearBounds = G.prototype.clearBounds; return b
            } w(b, a); b.prototype.drawDataLabels = function () { a.prototype.drawDataLabels.call(this); this.dataLabelsGroup && this.dataLabelsGroup.clip(this.chart.clipRect) }; b.prototype.projectPoint = function (a) { var b = this.chart.mapView; if (b) { var d = a.geometry, f = a.lon; a = a.lat; d = d && "Point" === d.type && d.coordinates; n(f) && n(a) && (d = [f, a]); if (d) return b.lonLatToProjectedUnits({ lon: d[0], lat: d[1] }) } }; b.prototype.translate = function () {
                var a = this, b = this.chart.mapView;
                this.processedXData || this.processData(); this.generatePoints(); this.getProjectedBounds && this.isDirtyData && (delete this.bounds, this.getProjectedBounds()); if (b) {
                    var f = b.getSVGTransform(), e = b.projection.hasCoordinates; this.points.forEach(function (d) {
                        var k = d.x; k = void 0 === k ? void 0 : k; var h = d.y; h = void 0 === h ? void 0 : h; var p = n(d.insetIndex) && b.insets[d.insetIndex].getSVGTransform() || f, c = a.projectPoint(d.options) || d.properties && a.projectPoint(d.properties); if (c) k = c.x, h = c.y; else if (d.bounds && (k = d.bounds.midX,
                            h = d.bounds.midY, p && n(k) && n(h))) { d.plotX = k * p.scaleX + p.translateX; d.plotY = h * p.scaleY + p.translateY; var r = !0 } n(k) && n(h) ? r || (r = b.projectedUnitsToPixels({ x: k, y: h }), d.plotX = r.x, d.plotY = e ? r.y : a.chart.plotHeight - r.y) : d.y = d.plotX = d.plotY = void 0; d.isInside = a.isPointInside(d); d.zone = a.zones.length ? d.getZone() : void 0
                    })
                } r(this, "afterTranslate")
            }; b.defaultOptions = h(t.defaultOptions, { dataLabels: { crop: !1, defer: !1, enabled: !0, formatter: function () { return this.point.name }, overflow: !1, style: { color: "#000000" } } }); return b
        }(t);
        y(C.prototype, { type: "mappoint", axisTypes: ["colorAxis"], forceDL: !0, isCartesian: !1, pointClass: e, searchPoint: b, useMapGeometry: !0 }); z.registerSeriesType("mappoint", C); ""; return C
    }); H(e, "Series/Bubble/BubbleLegendDefaults.js", [], function () {
        return {
            borderColor: void 0, borderWidth: 2, className: void 0, color: void 0, connectorClassName: void 0, connectorColor: void 0, connectorDistance: 60, connectorWidth: 1, enabled: !1, labels: {
                className: void 0, allowOverlap: !1, format: "", formatter: void 0, align: "right", style: {
                    fontSize: "10px",
                    color: "#000000"
                }, x: 0, y: 0
            }, maxSize: 60, minSize: 10, legendIndex: 0, ranges: { value: void 0, borderColor: void 0, color: void 0, connectorColor: void 0 }, sizeBy: "area", sizeByAbsoluteValue: !1, zIndex: 1, zThreshold: 0
        }
    }); H(e, "Series/Bubble/BubbleLegendItem.js", [e["Core/Color/Color.js"], e["Core/FormatUtilities.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function (b, e, z, C) {
        var w = b.parse, y = z.noop, G = C.arrayMax, t = C.arrayMin, r = C.isNumber, n = C.merge, h = C.pick, a = C.stableSort; b = function () {
            function b(a, b) {
                this.options = this.symbols =
                    this.visible = this.selected = this.ranges = this.movementX = this.maxLabel = this.legend = this.fontMetrics = this.chart = void 0; this.setState = y; this.init(a, b)
            } b.prototype.init = function (a, b) { this.options = a; this.visible = !0; this.chart = b.chart; this.legend = b }; b.prototype.addToLegend = function (a) { a.splice(this.options.legendIndex, 0, this) }; b.prototype.drawLegendSymbol = function (b) {
                var d = this.chart, e = h(b.options.itemDistance, 20), f = this.legendItem || {}, n = this.options, x = n.ranges, t = n.connectorDistance; this.fontMetrics = d.renderer.fontMetrics(n.labels.style.fontSize);
                x && x.length && r(x[0].value) ? (a(x, function (a, b) { return b.value - a.value }), this.ranges = x, this.setOptions(), this.render(), b = this.getMaxLabelSize(), x = this.ranges[0].radius, d = 2 * x, t = t - x + b.width, t = 0 < t ? t : 0, this.maxLabel = b, this.movementX = "left" === n.labels.align ? t : 0, f.labelWidth = d + t + e, f.labelHeight = d + this.fontMetrics.h / 2) : b.options.bubbleLegend.autoRanges = !0
            }; b.prototype.setOptions = function () {
                var a = this.ranges, b = this.options, e = this.chart.series[b.seriesIndex], f = this.legend.baseline, r = { zIndex: b.zIndex, "stroke-width": b.borderWidth },
                x = { zIndex: b.zIndex, "stroke-width": b.connectorWidth }, t = { align: this.legend.options.rtl || "left" === b.labels.align ? "right" : "left", zIndex: b.zIndex }, q = e.options.marker.fillOpacity, c = this.chart.styledMode; a.forEach(function (d, k) {
                    c || (r.stroke = h(d.borderColor, b.borderColor, e.color), r.fill = h(d.color, b.color, 1 !== q ? w(e.color).setOpacity(q).get("rgba") : e.color), x.stroke = h(d.connectorColor, b.connectorColor, e.color)); a[k].radius = this.getRangeRadius(d.value); a[k] = n(a[k], { center: a[0].radius - a[k].radius + f }); c || n(!0,
                        a[k], { bubbleAttribs: n(r), connectorAttribs: n(x), labelAttribs: t })
                }, this)
            }; b.prototype.getRangeRadius = function (a) { var b = this.options; return this.chart.series[this.options.seriesIndex].getRadius.call(this, b.ranges[b.ranges.length - 1].value, b.ranges[0].value, b.minSize, b.maxSize, a) }; b.prototype.render = function () {
                var a = this.legendItem || {}, b = this.chart.renderer, e = this.options.zThreshold; this.symbols || (this.symbols = { connectors: [], bubbleItems: [], labels: [] }); a.symbol = b.g("bubble-legend"); a.label = b.g("bubble-legend-item");
                a.symbol.translateX = 0; b = a.symbol.translateY = 0; for (var f = this.ranges; b < f.length; b++) { var h = f[b]; h.value >= e && this.renderRange(h) } a.symbol.add(a.label); a.label.add(a.group); this.hideOverlappingLabels()
            }; b.prototype.renderRange = function (a) {
                var b = this.options, d = b.labels, e = this.chart, f = e.series[b.seriesIndex], h = e.renderer, n = this.symbols; e = n.labels; var q = a.center, c = Math.abs(a.radius), r = b.connectorDistance || 0, m = d.align, u = b.connectorWidth, g = this.ranges[0].radius || 0, t = q - c - b.borderWidth / 2 + u / 2, l = this.fontMetrics;
                l = l.f / 2 - (l.h - l.f) / 2; var v = h.styledMode; r = this.legend.options.rtl || "left" === m ? -r : r; "center" === m && (r = 0, b.connectorDistance = 0, a.labelAttribs.align = "center"); m = t + b.labels.y; var y = g + r + b.labels.x; n.bubbleItems.push(h.circle(g, q + ((t % 1 ? 1 : .5) - (u % 2 ? 0 : .5)), c).attr(v ? {} : a.bubbleAttribs).addClass((v ? "highcharts-color-" + f.colorIndex + " " : "") + "highcharts-bubble-legend-symbol " + (b.className || "")).add(this.legendItem.symbol)); n.connectors.push(h.path(h.crispLine([["M", g, t], ["L", g + r, t]], b.connectorWidth)).attr(v ? {} :
                    a.connectorAttribs).addClass((v ? "highcharts-color-" + this.options.seriesIndex + " " : "") + "highcharts-bubble-legend-connectors " + (b.connectorClassName || "")).add(this.legendItem.symbol)); a = h.text(this.formatLabel(a), y, m + l).attr(v ? {} : a.labelAttribs).css(v ? {} : d.style).addClass("highcharts-bubble-legend-labels " + (b.labels.className || "")).add(this.legendItem.symbol); e.push(a); a.placed = !0; a.alignAttr = { x: y, y: m + l }
            }; b.prototype.getMaxLabelSize = function () {
                var a, b; this.symbols.labels.forEach(function (d) {
                    b = d.getBBox(!0);
                    a = a ? b.width > a.width ? b : a : b
                }); return a || {}
            }; b.prototype.formatLabel = function (a) { var b = this.options, d = b.labels.formatter; b = b.labels.format; var f = this.chart.numberFormatter; return b ? e.format(b, a) : d ? d.call(a) : f(a.value, 1) }; b.prototype.hideOverlappingLabels = function () { var a = this.chart, b = this.symbols; !this.options.labels.allowOverlap && b && (a.hideOverlappingLabels(b.labels), b.labels.forEach(function (a, d) { a.newOpacity ? a.newOpacity !== a.oldOpacity && b.connectors[d].show() : b.connectors[d].hide() })) }; b.prototype.getRanges =
                function () {
                    var a = this.legend.bubbleLegend, b = a.options.ranges, e, f = Number.MAX_VALUE, A = -Number.MAX_VALUE; a.chart.series.forEach(function (a) { a.isBubble && !a.ignoreSeries && (e = a.zData.filter(r), e.length && (f = h(a.options.zMin, Math.min(f, Math.max(t(e), !1 === a.options.displayNegative ? a.options.zThreshold : -Number.MAX_VALUE))), A = h(a.options.zMax, Math.max(A, G(e))))) }); var x = f === A ? [{ value: A }] : [{ value: f }, { value: (f + A) / 2 }, { value: A, autoRanges: !0 }]; b.length && b[0].radius && x.reverse(); x.forEach(function (a, d) {
                        b && b[d] && (x[d] =
                            n(b[d], a))
                    }); return x
                }; b.prototype.predictBubbleSizes = function () { var a = this.chart, b = this.fontMetrics, e = a.legend.options, f = e.floating, h = (e = "horizontal" === e.layout) ? a.legend.lastLineHeight : 0, n = a.plotSizeX, r = a.plotSizeY, q = a.series[this.options.seriesIndex], c = q.getPxExtremes(); a = Math.ceil(c.minPxSize); c = Math.ceil(c.maxPxSize); var t = Math.min(r, n); q = q.options.maxSize; if (f || !/%$/.test(q)) b = c; else if (q = parseFloat(q), b = (t + h - b.h / 2) * q / 100 / (q / 100 + 1), e && r - b >= n || !e && n - b >= r) b = c; return [a, Math.ceil(b)] }; b.prototype.updateRanges =
                    function (a, b) { var d = this.legend.options.bubbleLegend; d.minSize = a; d.maxSize = b; d.ranges = this.getRanges() }; b.prototype.correctSizes = function () { var a = this.legend, b = this.chart.series[this.options.seriesIndex].getPxExtremes(); 1 < Math.abs(Math.ceil(b.maxPxSize) - this.options.maxSize) && (this.updateRanges(this.options.minSize, b.maxPxSize), a.render()) }; return b
        }(); ""; return b
    }); H(e, "Series/Bubble/BubbleLegendComposition.js", [e["Series/Bubble/BubbleLegendDefaults.js"], e["Series/Bubble/BubbleLegendItem.js"], e["Core/Defaults.js"],
    e["Core/Utilities.js"]], function (b, e, z, C) {
        function w(a, b, d) {
            var e = this.legend, h = 0 <= y(this), k; if (e && e.options.enabled && e.bubbleLegend && e.options.bubbleLegend.autoRanges && h) {
                var c = e.bubbleLegend.options; h = e.bubbleLegend.predictBubbleSizes(); e.bubbleLegend.updateRanges(h[0], h[1]); c.placed || (e.group.placed = !1, e.allItems.forEach(function (a) { k = a.legendItem || {}; k.group && (k.group.translateY = null) })); e.render(); this.getMargins(); this.axes.forEach(function (a) {
                    a.visible && a.render(); c.placed || (a.setScale(), a.updateNames(),
                        f(a.ticks, function (a) { a.isNew = !0; a.isNewLabel = !0 }))
                }); c.placed = !0; this.getMargins(); a.call(this, b, d); e.bubbleLegend.correctSizes(); n(e, G(e))
            } else a.call(this, b, d), e && e.options.enabled && e.bubbleLegend && (e.render(), n(e, G(e)))
        } function y(a) { a = a.series; for (var b = 0; b < a.length;) { if (a[b] && a[b].isBubble && a[b].visible && a[b].zData.length) return b; b++ } return -1 } function G(a) {
            a = a.allItems; var b = [], d = a.length, e, f = 0; for (e = 0; e < d; e++) {
                var h = a[e].legendItem || {}; var c = (a[e + 1] || {}).legendItem || {}; h.labelHeight && (a[e].itemHeight =
                    h.labelHeight); if (a[e] === a[d - 1] || h.y !== c.y) { b.push({ height: 0 }); h = b[b.length - 1]; for (f; f <= e; f++)a[f].itemHeight > h.height && (h.height = a[f].itemHeight); h.step = e }
            } return b
        } function t(a) { var b = this.bubbleLegend, d = this.options, f = d.bubbleLegend, h = y(this.chart); b && b.ranges && b.ranges.length && (f.ranges.length && (f.autoRanges = !!f.ranges[0].autoRanges), this.destroyItem(b)); 0 <= h && d.enabled && f.enabled && (f.seriesIndex = h, this.bubbleLegend = new e(f, this), this.bubbleLegend.addToLegend(a.allItems)) } function r() {
            var a = this.chart,
            b = this.visible, d = this.chart.legend; d && d.bubbleLegend && (this.visible = !b, this.ignoreSeries = b, a = 0 <= y(a), d.bubbleLegend.visible !== a && (d.update({ bubbleLegend: { enabled: a } }), d.bubbleLegend.visible = a), this.visible = b)
        } function n(a, b) {
            var d = a.options.rtl, e, f, h, c, k = 0; a.allItems.forEach(function (a, n) {
                c = a.legendItem || {}; if (c.group) {
                    e = c.group.translateX || 0; f = c.y || 0; if ((h = a.movementX) || d && a.ranges) h = d ? e - a.options.maxSize / 2 : e + h, c.group.attr({ translateX: h }); n > b[k].step && k++; c.group.attr({
                        translateY: Math.round(f + b[k].height /
                            2)
                    }); c.y = f + b[k].height / 2
                }
            })
        } var h = z.setOptions, a = C.addEvent, f = C.objectEach, d = C.wrap, k = []; return { compose: function (e, f, n) { -1 === k.indexOf(e) && (k.push(e), h({ legend: { bubbleLegend: b } }), d(e.prototype, "drawChartBox", w)); -1 === k.indexOf(f) && (k.push(f), a(f, "afterGetAllItems", t)); -1 === k.indexOf(n) && (k.push(n), a(n, "legendItemClick", r)) } }
    }); H(e, "Series/Bubble/BubblePoint.js", [e["Core/Series/Point.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (b, e, z) {
        var C = this && this.__extends || function () {
            var b =
                function (e, w) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, e) { b.__proto__ = e } || function (b, e) { for (var n in e) e.hasOwnProperty(n) && (b[n] = e[n]) }; return b(e, w) }; return function (e, w) { function t() { this.constructor = e } b(e, w); e.prototype = null === w ? Object.create(w) : (t.prototype = w.prototype, new t) }
        }(); z = z.extend; e = function (e) {
            function y() { var b = null !== e && e.apply(this, arguments) || this; b.options = void 0; b.series = void 0; return b } C(y, e); y.prototype.haloPath = function (e) {
                return b.prototype.haloPath.call(this,
                    0 === e ? 0 : (this.marker ? this.marker.radius || 0 : 0) + e)
            }; return y
        }(e.seriesTypes.scatter.prototype.pointClass); z(e.prototype, { ttBelow: !1 }); return e
    }); H(e, "Series/Bubble/BubbleSeries.js", [e["Series/Bubble/BubbleLegendComposition.js"], e["Series/Bubble/BubblePoint.js"], e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (b, e, z, C, w, y) {
        function G() {
            var a = this, b = this.len, d = this.chart, e = this.isXAxis, f = e ? "xData" : "yData", g = this.min, h = this.max - g, k = 0, n = b,
            p = b / h, r; this.series.forEach(function (b) { if (b.bubblePadding && (b.visible || !d.options.chart.ignoreHiddenSeries)) { r = a.allowZoomOutside = !0; var c = b[f]; e && ((b.onPoint || b).getRadii(0, 0, b), b.onPoint && (b.radii = b.onPoint.radii)); if (0 < h) for (var l = c.length; l--;)if (D(c[l]) && a.dataMin <= c[l] && c[l] <= a.max) { var m = b.radii && b.radii[l] || 0; k = Math.min((c[l] - g) * p - m, k); n = Math.max((c[l] - g) * p + m, n) } } }); r && 0 < h && !this.logarithmic && (n -= b, p *= (b + Math.max(0, k) - Math.min(n, b)) / b, [["min", "userMin", k], ["max", "userMax", n]].forEach(function (b) {
                "undefined" ===
                typeof x(a.options[b[0]], a[b[1]]) && (a[b[0]] += b[2] / p)
            }))
        } var t = this && this.__extends || function () { var a = function (b, d) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, b) { a.__proto__ = b } || function (a, b) { for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]) }; return a(b, d) }; return function (b, d) { function c() { this.constructor = b } a(b, d); b.prototype = null === d ? Object.create(d) : (c.prototype = d.prototype, new c) } }(), r = z.parse; z = C.noop; var n = w.series, h = w.seriesTypes; C = h.column.prototype; var a = h.scatter;
        h = y.addEvent; var f = y.arrayMax, d = y.arrayMin, k = y.clamp, p = y.extend, D = y.isNumber, A = y.merge, x = y.pick, E = []; y = function (e) {
            function c() { var a = null !== e && e.apply(this, arguments) || this; a.data = void 0; a.maxPxSize = void 0; a.minPxSize = void 0; a.options = void 0; a.points = void 0; a.radii = void 0; a.yData = void 0; a.zData = void 0; return a } t(c, e); c.compose = function (a, c, d, e) { b.compose(c, d, e); -1 === E.indexOf(a) && (E.push(a), a.prototype.beforePadding = G) }; c.prototype.animate = function (a) {
                !a && this.points.length < this.options.animationLimit &&
                this.points.forEach(function (a) { var b = a.graphic; b && b.width && (this.hasRendered || b.attr({ x: a.plotX, y: a.plotY, width: 1, height: 1 }), b.animate(this.markerAttribs(a), this.options.animation)) }, this)
            }; c.prototype.getRadii = function () {
                var a = this, b = this.zData, c = this.yData, d = [], e = this.chart.bubbleZExtremes; var f = this.getPxExtremes(); var h = f.minPxSize, k = f.maxPxSize; if (!e) {
                    var n = Number.MAX_VALUE, p = -Number.MAX_VALUE, q; this.chart.series.forEach(function (b) {
                        b.bubblePadding && (b.visible || !a.chart.options.chart.ignoreHiddenSeries) &&
                        (b = (b.onPoint || b).getZExtremes()) && (n = Math.min(n || b.zMin, b.zMin), p = Math.max(p || b.zMax, b.zMax), q = !0)
                    }); q ? (e = { zMin: n, zMax: p }, this.chart.bubbleZExtremes = e) : e = { zMin: 0, zMax: 0 }
                } var r = 0; for (f = b.length; r < f; r++) { var t = b[r]; d.push(this.getRadius(e.zMin, e.zMax, h, k, t, c && c[r])) } this.radii = d
            }; c.prototype.getRadius = function (a, b, c, d, e, f) {
                var g = this.options, h = "width" !== g.sizeBy, k = g.zThreshold, l = b - a, m = .5; if (null === f || null === e) return null; if (D(e)) {
                    g.sizeByAbsoluteValue && (e = Math.abs(e - k), l = Math.max(b - k, Math.abs(a - k)),
                        a = 0); if (e < a) return c / 2 - 1; 0 < l && (m = (e - a) / l)
                } h && 0 <= m && (m = Math.sqrt(m)); return Math.ceil(c + m * (d - c)) / 2
            }; c.prototype.hasData = function () { return !!this.processedXData.length }; c.prototype.pointAttribs = function (a, b) { var c = this.options.marker.fillOpacity; a = n.prototype.pointAttribs.call(this, a, b); 1 !== c && (a.fill = r(a.fill).setOpacity(c).get("rgba")); return a }; c.prototype.translate = function () { e.prototype.translate.call(this); this.getRadii(); this.translateBubble() }; c.prototype.translateBubble = function () {
                for (var a =
                    this.data, b = this.radii, c = this.getPxExtremes().minPxSize, d = a.length; d--;) { var e = a[d], f = b ? b[d] : 0; D(f) && f >= c / 2 ? (e.marker = p(e.marker, { radius: f, width: 2 * f, height: 2 * f }), e.dlBox = { x: e.plotX - f, y: e.plotY - f, width: 2 * f, height: 2 * f }) : (e.shapeArgs = e.plotY = e.dlBox = void 0, e.isInside = !1) }
            }; c.prototype.getPxExtremes = function () {
                var a = Math.min(this.chart.plotWidth, this.chart.plotHeight), b = function (b) { if ("string" === typeof b) { var c = /%$/.test(b); b = parseInt(b, 10) } return c ? a * b / 100 : b }, c = b(x(this.options.minSize, 8)); b = Math.max(b(x(this.options.maxSize,
                    "20%")), c); return { minPxSize: c, maxPxSize: b }
            }; c.prototype.getZExtremes = function () { var a = this.options, b = (this.zData || []).filter(D); if (b.length) { var c = x(a.zMin, k(d(b), !1 === a.displayNegative ? a.zThreshold || 0 : -Number.MAX_VALUE, Number.MAX_VALUE)); a = x(a.zMax, f(b)); if (D(c) && D(a)) return { zMin: c, zMax: a } } }; c.defaultOptions = A(a.defaultOptions, {
                dataLabels: { formatter: function () { var a = this.series.chart.numberFormatter, b = this.point.z; return D(b) ? a(b, -1) : "" }, inside: !0, verticalAlign: "middle" }, animationLimit: 250, marker: {
                    lineColor: null,
                    lineWidth: 1, fillOpacity: .5, radius: null, states: { hover: { radiusPlus: 0 } }, symbol: "circle"
                }, minSize: 8, maxSize: "20%", softThreshold: !1, states: { hover: { halo: { size: 5 } } }, tooltip: { pointFormat: "({point.x}, {point.y}), Size: {point.z}" }, turboThreshold: 0, zThreshold: 0, zoneAxis: "z"
            }); return c
        }(a); p(y.prototype, {
            alignDataLabel: C.alignDataLabel, applyZones: z, bubblePadding: !0, buildKDTree: z, directTouch: !0, isBubble: !0, pointArrayMap: ["y", "z"], pointClass: e, parallelArrays: ["x", "y", "z"], trackerGroups: ["group", "dataLabelsGroup"],
            specialGroup: "group", zoneAxis: "z"
        }); h(y, "updatedData", function (a) { delete a.target.chart.bubbleZExtremes }); h(y, "remove", function (a) { delete a.target.chart.bubbleZExtremes }); w.registerSeriesType("bubble", y); ""; ""; return y
    }); H(e, "Series/MapBubble/MapBubblePoint.js", [e["Series/Bubble/BubblePoint.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (b, e, z) {
        var C = this && this.__extends || function () {
            var b = function (e, w) {
                b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, e) {
                    b.__proto__ =
                    e
                } || function (b, e) { for (var n in e) e.hasOwnProperty(n) && (b[n] = e[n]) }; return b(e, w)
            }; return function (e, w) { function t() { this.constructor = e } b(e, w); e.prototype = null === w ? Object.create(w) : (t.prototype = w.prototype, new t) }
        }(); e = e.seriesTypes.map.prototype.pointClass.prototype; z = z.extend; b = function (b) { function e() { return null !== b && b.apply(this, arguments) || this } C(e, b); e.prototype.isValid = function () { return "number" === typeof this.z }; return e }(b); z(b.prototype, { applyOptions: e.applyOptions, getProjectedBounds: e.getProjectedBounds });
        return b
    }); H(e, "Series/MapBubble/MapBubbleSeries.js", [e["Series/Bubble/BubbleSeries.js"], e["Series/MapBubble/MapBubblePoint.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (b, e, z, C) {
        var w = this && this.__extends || function () {
            var b = function (e, a) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, b) { a.__proto__ = b } || function (a, b) { for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]) }; return b(e, a) }; return function (e, a) {
                function f() { this.constructor = e } b(e, a); e.prototype =
                    null === a ? Object.create(a) : (f.prototype = a.prototype, new f)
            }
        }(), y = z.seriesTypes, G = y.map.prototype, t = y.mappoint.prototype; y = C.extend; var r = C.merge; C = function (e) {
            function h() { var a = null !== e && e.apply(this, arguments) || this; a.data = void 0; a.options = void 0; a.points = void 0; a.clearBounds = G.clearBounds; return a } w(h, e); h.prototype.searchPoint = function (a, b) { return this.searchKDTree({ clientX: a.chartX - this.chart.plotLeft, plotY: a.chartY - this.chart.plotTop }, b, a) }; h.prototype.translate = function () {
                t.translate.call(this);
                this.getRadii(); this.translateBubble()
            }; h.defaultOptions = r(b.defaultOptions, { lineWidth: 0, animationLimit: 500, joinBy: "hc-key", tooltip: { pointFormat: "{point.name}: {point.z}" } }); return h
        }(b); y(C.prototype, { type: "mapbubble", axisTypes: ["colorAxis"], getProjectedBounds: G.getProjectedBounds, isCartesian: !1, pointArrayMap: ["z"], pointClass: e, processData: G.processData, projectPoint: t.projectPoint, setData: G.setData, setOptions: G.setOptions, updateData: G.updateData, useMapGeometry: !0, xyFromShape: !0 }); z.registerSeriesType("mapbubble",
            C); ""; return C
    }); H(e, "Series/Heatmap/HeatmapPoint.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (b, e) {
        var z = this && this.__extends || function () { var b = function (e, n) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, a) { b.__proto__ = a } || function (b, a) { for (var e in a) a.hasOwnProperty(e) && (b[e] = a[e]) }; return b(e, n) }; return function (e, n) { function h() { this.constructor = e } b(e, n); e.prototype = null === n ? Object.create(n) : (h.prototype = n.prototype, new h) } }(), C = e.clamp, w = e.defined,
        y = e.extend, G = e.pick; b = function (b) {
            function e() { var e = null !== b && b.apply(this, arguments) || this; e.options = void 0; e.series = void 0; e.value = void 0; e.x = void 0; e.y = void 0; return e } z(e, b); e.prototype.applyOptions = function (e, h) { e = b.prototype.applyOptions.call(this, e, h); e.formatPrefix = e.isNull || null === e.value ? "null" : "point"; return e }; e.prototype.getCellAttributes = function () {
                var b = this.series, e = b.options, a = (e.colsize || 1) / 2, f = (e.rowsize || 1) / 2, d = b.xAxis, k = b.yAxis, p = this.options.marker || b.options.marker; b = b.pointPlacementToXValue();
                var r = G(this.pointPadding, e.pointPadding, 0), t = { x1: C(Math.round(d.len - d.translate(this.x - a, !1, !0, !1, !0, -b)), -d.len, 2 * d.len), x2: C(Math.round(d.len - d.translate(this.x + a, !1, !0, !1, !0, -b)), -d.len, 2 * d.len), y1: C(Math.round(k.translate(this.y - f, !1, !0, !1, !0)), -k.len, 2 * k.len), y2: C(Math.round(k.translate(this.y + f, !1, !0, !1, !0)), -k.len, 2 * k.len) };[["width", "x"], ["height", "y"]].forEach(function (a) {
                    var b = a[0]; a = a[1]; var d = a + "1", c = a + "2", e = Math.abs(t[d] - t[c]), f = p && p.lineWidth || 0, h = Math.abs(t[d] + t[c]) / 2; b = p && p[b]; w(b) &&
                        b < e && (b = b / 2 + f / 2, t[d] = h - b, t[c] = h + b); r && ("y" === a && (d = c, c = a + "1"), t[d] += r, t[c] -= r)
                }); return t
            }; e.prototype.haloPath = function (b) { if (!b) return []; var e = this.shapeArgs; return ["M", e.x - b, e.y - b, "L", e.x - b, e.y + e.height + b, e.x + e.width + b, e.y + e.height + b, e.x + e.width + b, e.y - b, "Z"] }; e.prototype.isValid = function () { return Infinity !== this.value && -Infinity !== this.value }; return e
        }(b.seriesTypes.scatter.prototype.pointClass); y(b.prototype, { dataLabelOnNull: !0, moveToTopOnHover: !0, ttBelow: !1 }); return b
    }); H(e, "Series/Heatmap/HeatmapSeries.js",
        [e["Core/Color/Color.js"], e["Series/ColorMapComposition.js"], e["Series/Heatmap/HeatmapPoint.js"], e["Core/Legend/LegendSymbol.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Utilities.js"]], function (b, e, z, C, w, y, G) {
            var t = this && this.__extends || function () {
                var a = function (b, d) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, b) { a.__proto__ = b } || function (a, b) { for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]) }; return a(b, d) }; return function (b, d) {
                    function c() {
                        this.constructor =
                        b
                    } a(b, d); b.prototype = null === d ? Object.create(d) : (c.prototype = d.prototype, new c)
                }
            }(), r = w.series, n = w.seriesTypes, h = n.column, a = n.scatter, f = y.prototype.symbols, d = G.extend, k = G.fireEvent, p = G.isNumber, D = G.merge, A = G.pick; y = function (e) {
                function h() { var a = null !== e && e.apply(this, arguments) || this; a.colorAxis = void 0; a.data = void 0; a.options = void 0; a.points = void 0; a.valueMax = NaN; a.valueMin = NaN; return a } t(h, e); h.prototype.drawPoints = function () {
                    var a = this; if ((this.options.marker || {}).enabled || this._hasPointMarkers) r.prototype.drawPoints.call(this),
                        this.points.forEach(function (b) { b.graphic && (b.graphic[a.chart.styledMode ? "css" : "animate"](a.colorAttribs(b)), null === b.value && b.graphic.addClass("highcharts-null-point")) })
                }; h.prototype.getExtremes = function () { var a = r.prototype.getExtremes.call(this, this.valueData), b = a.dataMin; a = a.dataMax; p(b) && (this.valueMin = b); p(a) && (this.valueMax = a); return r.prototype.getExtremes.call(this) }; h.prototype.getValidPoints = function (a, b) { return r.prototype.getValidPoints.call(this, a, b, !0) }; h.prototype.hasData = function () { return !!this.processedXData.length };
                h.prototype.init = function () { r.prototype.init.apply(this, arguments); var a = this.options; a.pointRange = A(a.pointRange, a.colsize || 1); this.yAxis.axisPointRange = a.rowsize || 1; f.ellipse = f.circle; a.marker && (a.marker.r = a.borderRadius) }; h.prototype.markerAttribs = function (a, b) {
                    var c = a.marker || {}, d = this.options.marker || {}, e = a.shapeArgs || {}, f = {}; if (a.hasImage) return { x: a.plotX, y: a.plotY }; if (b) {
                        var h = d.states[b] || {}; var k = c.states && c.states[b] || {};[["width", "x"], ["height", "y"]].forEach(function (a) {
                            f[a[0]] = (k[a[0]] ||
                                h[a[0]] || e[a[0]]) + (k[a[0] + "Plus"] || h[a[0] + "Plus"] || 0); f[a[1]] = e[a[1]] + (e[a[0]] - f[a[0]]) / 2
                        })
                    } return b ? f : e
                }; h.prototype.pointAttribs = function (a, c) {
                    var d = r.prototype.pointAttribs.call(this, a, c), e = this.options || {}, f = this.chart.options.plotOptions || {}, g = f.series || {}, h = f.heatmap || {}; f = a && a.options.borderColor || e.borderColor || h.borderColor || g.borderColor; g = a && a.options.borderWidth || e.borderWidth || h.borderWidth || g.borderWidth || d["stroke-width"]; d.stroke = a && a.marker && a.marker.lineColor || e.marker && e.marker.lineColor ||
                        f || this.color; d["stroke-width"] = g; c && (a = D(e.states[c], e.marker && e.marker.states[c], a && a.options.states && a.options.states[c] || {}), c = a.brightness, d.fill = a.color || b.parse(d.fill).brighten(c || 0).get(), d.stroke = a.lineColor); return d
                }; h.prototype.setClip = function (a) { var b = this.chart; r.prototype.setClip.apply(this, arguments); (!1 !== this.options.clip || a) && this.markerGroup.clip((a || this.clipBox) && this.sharedClipKey ? b.sharedClips[this.sharedClipKey] : b.clipRect) }; h.prototype.translate = function () {
                    var a = this.options,
                    b = a.marker && a.marker.symbol || "rect", e = f[b] ? b : "rect", h = -1 !== ["circle", "square"].indexOf(e); this.generatePoints(); this.points.forEach(function (c) {
                        var g = c.getCellAttributes(), k = {}; k.x = Math.min(g.x1, g.x2); k.y = Math.min(g.y1, g.y2); k.width = Math.max(Math.abs(g.x2 - g.x1), 0); k.height = Math.max(Math.abs(g.y2 - g.y1), 0); var l = c.hasImage = 0 === (c.marker && c.marker.symbol || b || "").indexOf("url"); if (h) {
                            var m = Math.abs(k.width - k.height); k.x = Math.min(g.x1, g.x2) + (k.width < k.height ? 0 : m / 2); k.y = Math.min(g.y1, g.y2) + (k.width < k.height ?
                                m / 2 : 0); k.width = k.height = Math.min(k.width, k.height)
                        } m = { plotX: (g.x1 + g.x2) / 2, plotY: (g.y1 + g.y2) / 2, clientX: (g.x1 + g.x2) / 2, shapeType: "path", shapeArgs: D(!0, k, { d: f[e](k.x, k.y, k.width, k.height, { r: a.borderRadius }) }) }; l && (c.marker = { width: k.width, height: k.height }); d(c, m)
                    }); k(this, "afterTranslate")
                }; h.defaultOptions = D(a.defaultOptions, {
                    animation: !1, borderRadius: 0, borderWidth: 0, nullColor: "#f7f7f7", dataLabels: {
                        formatter: function () { var a = this.series.chart.numberFormatter, b = this.point.value; return p(b) ? a(b, -1) : "" },
                        inside: !0, verticalAlign: "middle", crop: !1, overflow: !1, padding: 0
                    }, marker: { symbol: "rect", radius: 0, lineColor: void 0, states: { hover: { lineWidthPlus: 0 }, select: {} } }, clip: !0, pointRange: null, tooltip: { pointFormat: "{point.x}, {point.y}: {point.value}<br/>" }, states: { hover: { halo: !1, brightness: .2 } }
                }); return h
            }(a); d(y.prototype, {
                axisTypes: e.seriesMembers.axisTypes, colorKey: e.seriesMembers.colorKey, directTouch: !0, getExtremesFromAll: !0, parallelArrays: e.seriesMembers.parallelArrays, pointArrayMap: ["y", "value"], pointClass: z,
                trackerGroups: e.seriesMembers.trackerGroups, alignDataLabel: h.prototype.alignDataLabel, colorAttribs: e.seriesMembers.colorAttribs, drawLegendSymbol: C.drawRectangle, getSymbol: r.prototype.getSymbol
            }); e.compose(y); w.registerSeriesType("heatmap", y); ""; ""; return y
        }); H(e, "masters/modules/map.src.js", [e["Core/Globals.js"], e["Core/Axis/Color/ColorAxis.js"], e["Series/MapBubble/MapBubbleSeries.js"], e["Core/Chart/MapChart.js"], e["Maps/MapView.js"], e["Maps/Projection.js"]], function (b, e, z, C, w, y) {
            b.ColorAxis = e; b.MapChart =
                C; b.mapChart = b.Map = C.mapChart; b.MapView = w; b.maps = C.maps; b.Projection = y; e.compose(b.Chart, b.Fx, b.Legend, b.Series); z.compose(b.Axis, b.Chart, b.Legend, b.Series)
        }); H(e, "masters/highmaps.src.js", [e["masters/highcharts.src.js"]], function (b) { b.product = "Highmaps"; return b }); e["masters/highmaps.src.js"]._modules = e; return e["masters/highmaps.src.js"]
});
//# sourceMappingURL=highmaps.js.map