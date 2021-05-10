﻿/*! Copyright © 2009-2021 Postcode Anywhere (Holdings) Ltd. (http://www.postcodeanywhere.co.uk)
 *
 * CDN_Base v1.00
 * 
 *
 * WEB-2-2 10/05/2021 17:25:42
 */
//1.1.12 - Change to support overriding loadJS and loadCSS, as well as allowing a reload override
// Updated platformsetuptoolkit to 1.81
if (!pca.platform || pca.platform.allowReload) {
//IE7 Polyfills
    if (typeof JSON == "undefined") {
/*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
        (function() {
            function N(p, r) {
                function q(a) {
                    if (q[a] !== w) return q[a];
                    var c;
                    if ("bug-string-char-index" == a) c = "a" != "a"[0];
                    else if ("json" == a) c = q("json-stringify") && q("json-parse");
                    else {
                        var e;
                        if ("json-stringify" == a) {
                            c = r.stringify;
                            var b = "function" == typeof c && s;
                            if (b) {
                                (e = function() {
                                    return 1
                                }).toJSON = e;
                                try {
                                    b = "0" === c(0) && "0" === c(new t) && '""' == c(new A) && c(u) === w && c(w) === w && c() === w && "1" === c(e) && "[1]" == c([e]) && "[null]" == c([w]) && "null" == c(null) && "[null,null,null]" == c([w, u, null]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' ==
                                        c({
                                            a: [e, !0, !1, null, "\x00\b\n\f\r\t"]
                                        }) && "1" === c(null, e) && "[\n 1,\n 2\n]" == c([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == c(new C(-864E13)) && '"+275760-09-13T00:00:00.000Z"' == c(new C(864E13)) && '"-000001-01-01T00:00:00.000Z"' == c(new C(-621987552E5)) && '"1969-12-31T23:59:59.999Z"' == c(new C(-1))
                                } catch (f) {
                                    b = !1
                                }
                            }
                            c = b
                        }
                        if ("json-parse" == a) {
                            c = r.parse;
                            if ("function" == typeof c)
                                try {
                                    if (0 === c("0") && !c(!1)) {
                                        e = c('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                                        var n = 5 == e.a.length && 1 === e.a[0];
                                        if (n) {
                                            try {
                                                n = !c('"\t"')
                                            } catch (d) {
                                            }
                                            if (n)
                                                try {
                                                    n =
                                                        1 !== c("01")
                                                } catch (g) {
                                                }
                                            if (n)
                                                try {
                                                    n = 1 !== c("1.")
                                                } catch (m) {
                                                }
                                        }
                                    }
                                } catch (X) {
                                    n = !1
                                }
                            c = n
                        }
                    }
                    return q[a] = !!c
                }

                p || (p = k.Object());
                r || (r = k.Object());
                var t = p.Number || k.Number,
                    A = p.String || k.String,
                    H = p.Object || k.Object,
                    C = p.Date || k.Date,
                    G = p.SyntaxError || k.SyntaxError,
                    K = p.TypeError || k.TypeError,
                    L = p.Math || k.Math,
                    I = p.JSON || k.JSON;
                "object" == typeof I && I && (r.stringify = I.stringify, r.parse = I.parse);
                var H = H.prototype,
                    u = H.toString,
                    v,
                    B,
                    w,
                    s = new C(-0xc782b5b800cec);
                try {
                    s = -109252 == s.getUTCFullYear() && 0 === s.getUTCMonth() && 1 === s.getUTCDate() &&
                        10 == s.getUTCHours() && 37 == s.getUTCMinutes() && 6 == s.getUTCSeconds() && 708 == s.getUTCMilliseconds()
                } catch (Q) {
                }
                if (!q("json")) {
                    var D = q("bug-string-char-index");
                    if (!s)
                        var x = L.floor,
                            M = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                            E = function(a, c) {
                                return M[c] + 365 * (a - 1970) + x((a - 1969 + (c = +(1 < c))) / 4) - x((a - 1901 + c) / 100) + x((a - 1601 + c) / 400)
                            };
                    (v = H.hasOwnProperty) || (v = function(a) {
                        var c = {}, e;
                        (c.__proto__ = null, c.__proto__ = {
                            toString: 1
                        }, c).toString != u ? v = function(a) {
                            var c = this.__proto__;
                            a = a in (this.__proto__ = null, this);
                            this.__proto__ =
                                c;
                            return a
                        } : (e = c.constructor, v = function(a) {
                            var c = (this.constructor || e).prototype;
                            return a in this && !(a in c && this[a] === c[a])
                        });
                        c = null;
                        return v.call(this, a)
                    });
                    B = function(a, c) {
                        var e = 0,
                            b,
                            f,
                            n;
                        (b = function() {
                            this.valueOf = 0
                        }).prototype.valueOf = 0;
                        f = new b;
                        for (n in f) v.call(f, n) && e++;
                        b = f = null;
                        e ? B = 2 == e ? function(a, c) {
                            var e = {},
                                b = "[object Function]" == u.call(a),
                                f;
                            for (f in a) b && "prototype" == f || v.call(e, f) || !(e[f] = 1) || !v.call(a, f) || c(f)
                        } : function(a, c) {
                            var e = "[object Function]" == u.call(a),
                                b,
                                f;
                            for (b in a)
                                e && "prototype" ==
                                    b || !v.call(a, b) || (f = "constructor" === b) || c(b);
                            (f || v.call(a, b = "constructor")) && c(b)
                        } : (f = "valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "), B = function(a, c) {
                            var e = "[object Function]" == u.call(a),
                                b,
                                h = !e && "function" != typeof a.constructor && F[typeof a.hasOwnProperty] && a.hasOwnProperty || v;
                            for (b in a) e && "prototype" == b || !h.call(a, b) || c(b);
                            for (e = f.length; b = f[--e]; h.call(a, b) && c(b));
                        });
                        return B(a, c)
                    };
                    if (!q("json-stringify")) {
                        var U = {
                                92: "\\\\",
                                34: '\\"',
                                8: "\\b",
                                12: "\\f",
                                10: "\\n",
                                13: "\\r",
                                9: "\\t"
                            },
                            y = function(a, c) {
                                return ("000000" + (c || 0)).slice(-a)
                            },
                            R = function(a) {
                                for (var c = '"', b = 0, h = a.length, f = !D || 10 < h, n = f && (D ? a.split("") : a); b < h; b++) {
                                    var d = a.charCodeAt(b);
                                    switch (d) {
                                    case 8:
                                    case 9:
                                    case 10:
                                    case 12:
                                    case 13:
                                    case 34:
                                    case 92:
                                        c += U[d];
                                        break;
                                    default:
                                        if (32 > d) {
                                            c += "\\u00" + y(2, d.toString(16));
                                            break
                                        }
                                        c += f ? n[b] : a.charAt(b)
                                    }
                                }
                                return c + '"'
                            },
                            O = function(a, c, b, h, f, n, d) {
                                var g, m, k, l, p, r, s, t, q;
                                try {
                                    g = c[a]
                                } catch (z) {
                                }
                                if ("object" == typeof g && g)
                                    if (m = u.call(g), "[object Date]" != m || v.call(g,
                                        "toJSON")) "function" == typeof g.toJSON && ("[object Number]" != m && "[object String]" != m && "[object Array]" != m || v.call(g, "toJSON")) && (g = g.toJSON(a));
                                    else if (g > -1 / 0 && g < 1 / 0) {
                                        if (E) {
                                            l = x(g / 864E5);
                                            for (m = x(l / 365.2425) + 1970 - 1; E(m + 1, 0) <= l; m++);
                                            for (k = x((l - E(m, 0)) / 30.42); E(m, k + 1) <= l; k++);
                                            l = 1 + l - E(m, k);
                                            p = (g % 864E5 + 864E5) % 864E5;
                                            r = x(p / 36E5) % 24;
                                            s = x(p / 6E4) % 60;
                                            t = x(p / 1E3) % 60;
                                            p %= 1E3
                                        } else m = g.getUTCFullYear(), k = g.getUTCMonth(), l = g.getUTCDate(), r = g.getUTCHours(), s = g.getUTCMinutes(), t = g.getUTCSeconds(), p = g.getUTCMilliseconds();
                                        g = (0 >= m || 1E4 <= m ? (0 > m ? "-" : "+") + y(6, 0 > m ? -m : m) : y(4, m)) + "-" + y(2, k + 1) + "-" + y(2, l) + "T" + y(2, r) + ":" + y(2, s) + ":" + y(2, t) + "." + y(3, p) + "Z"
                                    } else g = null;
                                b && (g = b.call(c, a, g));
                                if (null === g) return "null";
                                m = u.call(g);
                                if ("[object Boolean]" == m) return "" + g;
                                if ("[object Number]" == m) return g > -1 / 0 && g < 1 / 0 ? "" + g : "null";
                                if ("[object String]" == m) return R("" + g);
                                if ("object" == typeof g) {
                                    for (a = d.length; a--;)
                                        if (d[a] === g) throw K();
                                    d.push(g);
                                    q = [];
                                    c = n;
                                    n += f;
                                    if ("[object Array]" == m) {
                                        k = 0;
                                        for (a = g.length; k < a; k++)
                                            m = O(k, g, b, h, f, n, d), q.push(m === w ? "null" :
                                                m);
                                        a = q.length ? f ? "[\n" + n + q.join(",\n" + n) + "\n" + c + "]" : "[" + q.join(",") + "]" : "[]"
                                    } else
                                        B(h || g, function(a) {
                                            var c = O(a, g, b, h, f, n, d);
                                            c !== w && q.push(R(a) + ":" + (f ? " " : "") + c)
                                        }), a = q.length ? f ? "{\n" + n + q.join(",\n" + n) + "\n" + c + "}" : "{" + q.join(",") + "}" : "{}";
                                    d.pop();
                                    return a
                                }
                            };
                        r.stringify = function(a, c, b) {
                            var h, f, n, d;
                            if (F[typeof c] && c)
                                if ("[object Function]" == (d = u.call(c))) f = c;
                                else if ("[object Array]" == d) {
                                    n = {};
                                    for (var g = 0, k = c.length, l; g < k; l = c[g++], (d = u.call(l), "[object String]" == d || "[object Number]" == d) && (n[l] = 1));
                                }
                            if (b)
                                if ("[object Number]" ==
                                (d = u.call(b))) {
                                    if (0 < (b -= b % 1))
                                        for (h = "", 10 < b && (b = 10); h.length < b; h += " ");
                                } else "[object String]" == d && (h = 10 >= b.length ? b : b.slice(0, 10));
                            return O("", (l = {}, l[""] = a, l), f, n, h, "", [])
                        }
                    }
                    if (!q("json-parse")) {
                        var V = A.fromCharCode,
                            W = {
                                92: "\\",
                                34: '"',
                                47: "/",
                                98: "\b",
                                116: "\t",
                                110: "\n",
                                102: "\f",
                                114: "\r"
                            },
                            b,
                            J,
                            l = function() {
                                b = J = null;
                                throw G();
                            },
                            z = function() {
                                for (var a = J, c = a.length, e, h, f, k, d; b < c;)
                                    switch (d = a.charCodeAt(b), d) {
                                    case 9:
                                    case 10:
                                    case 13:
                                    case 32:
                                        b++;
                                        break;
                                    case 123:
                                    case 125:
                                    case 91:
                                    case 93:
                                    case 58:
                                    case 44:
                                        return e =
                                            D ? a.charAt(b) : a[b], b++, e;
                                    case 34:
                                        e = "@";
                                        for (b++; b < c;)
                                            if (d = a.charCodeAt(b), 32 > d) l();
                                            else if (92 == d)
                                                switch (d = a.charCodeAt(++b), d) {
                                                case 92:
                                                case 34:
                                                case 47:
                                                case 98:
                                                case 116:
                                                case 110:
                                                case 102:
                                                case 114:
                                                    e += W[d];
                                                    b++;
                                                    break;
                                                case 117:
                                                    h = ++b;
                                                    for (f = b + 4; b < f; b++) d = a.charCodeAt(b), 48 <= d && 57 >= d || 97 <= d && 102 >= d || 65 <= d && 70 >= d || l();
                                                    e += V("0x" + a.slice(h, b));
                                                    break;
                                                default:
                                                    l()
                                                }
                                            else {
                                                if (34 == d) break;
                                                d = a.charCodeAt(b);
                                                for (h = b; 32 <= d && 92 != d && 34 != d;) d = a.charCodeAt(++b);
                                                e += a.slice(h, b)
                                            }
                                        if (34 == a.charCodeAt(b)) return b++, e;
                                        l();
                                    default:
                                        h =
                                            b;
                                        45 == d && (k = !0, d = a.charCodeAt(++b));
                                        if (48 <= d && 57 >= d) {
                                            for (48 == d && (d = a.charCodeAt(b + 1), 48 <= d && 57 >= d) && l(); b < c && (d = a.charCodeAt(b), 48 <= d && 57 >= d); b++);
                                            if (46 == a.charCodeAt(b)) {
                                                for (f = ++b; f < c && (d = a.charCodeAt(f), 48 <= d && 57 >= d); f++);
                                                f == b && l();
                                                b = f
                                            }
                                            d = a.charCodeAt(b);
                                            if (101 == d || 69 == d) {
                                                d = a.charCodeAt(++b);
                                                43 != d && 45 != d || b++;
                                                for (f = b; f < c && (d = a.charCodeAt(f), 48 <= d && 57 >= d); f++);
                                                f == b && l();
                                                b = f
                                            }
                                            return +a.slice(h, b)
                                        }
                                        k && l();
                                        if ("true" == a.slice(b, b + 4)) return b += 4, !0;
                                        if ("false" == a.slice(b, b + 5)) return b += 5, !1;
                                        if ("null" == a.slice(b,
                                            b + 4)) return b += 4, null;
                                        l()
                                    }
                                return "$"
                            },
                            P = function(a) {
                                var c, b;
                                "$" == a && l();
                                if ("string" == typeof a) {
                                    if ("@" == (D ? a.charAt(0) : a[0])) return a.slice(1);
                                    if ("[" == a) {
                                        for (c = [];; b || (b = !0)) {
                                            a = z();
                                            if ("]" == a) break;
                                            b && ("," == a ? (a = z(), "]" == a && l()) : l());
                                            "," == a && l();
                                            c.push(P(a))
                                        }
                                        return c
                                    }
                                    if ("{" == a) {
                                        for (c = {};; b || (b = !0)) {
                                            a = z();
                                            if ("}" == a) break;
                                            b && ("," == a ? (a = z(), "}" == a && l()) : l());
                                            "," != a && "string" == typeof a && "@" == (D ? a.charAt(0) : a[0]) && ":" == z() || l();
                                            c[a.slice(1)] = P(z())
                                        }
                                        return c
                                    }
                                    l()
                                }
                                return a
                            },
                            T = function(a, b, e) {
                                e = S(a, b, e);
                                e ===
                                    w ? delete a[b] : a[b] = e
                            },
                            S = function(a, b, e) {
                                var h = a[b],
                                    f;
                                if ("object" == typeof h && h)
                                    if ("[object Array]" == u.call(h))
                                        for (f = h.length; f--;) T(h, f, e);
                                    else
                                        B(h, function(a) {
                                            T(h, a, e)
                                        });
                                return e.call(a, b, h)
                            };
                        r.parse = function(a, c) {
                            var e, h;
                            b = 0;
                            J = "" + a;
                            e = P(z());
                            "$" != z() && l();
                            b = J = null;
                            return c && "[object Function]" == u.call(c) ? S((h = {}, h[""] = e, h), "", c) : e
                        }
                    }
                }
                r.runInContext = N;
                return r
            }

            var K = typeof define === "function" && define.amd,
                F = {
                    "function": !0,
                    object: !0
                },
                G = F[typeof exports] && exports && !exports.nodeType && exports,
                k = F[typeof window] &&
                    window || this,
                t = G && F[typeof module] && module && !module.nodeType && "object" == typeof global && global;
            !t || t.global !== t && t.window !== t && t.self !== t || (k = t);
            if (G && !K) N(k, G);
            else {
                var L = k.JSON,
                    Q = k.JSON3,
                    M = !1,
                    A = N(k, k.JSON3 = {
                        noConflict: function() {
                            M || (M = !0, k.JSON = L, k.JSON3 = Q, L = Q = null);
                            return A
                        }
                    });
                k.JSON = {
                    parse: A.parse,
                    stringify: A.stringify
                }
            }
            //try {
            //    K && define(function () {
            //        return A
            //    })
            //}catch(ex){}
        }).call(this);
    }


// Production steps of ECMA-262, Edition 5, 15.4.4.14
// Reference: http://es5.github.io/#x15.4.4.14
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function(searchElement, fromIndex) {

            var k;

            // 1. Let o be the result of calling ToObject passing
            //    the this value as the argument.
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }

            var o = Object(this);

            // 2. Let lenValue be the result of calling the Get
            //    internal method of o with the argument "length".
            // 3. Let len be ToUint32(lenValue).
            var len = o.length >>> 0;

            // 4. If len is 0, return -1.
            if (len === 0) {
                return -1;
            }

            // 5. If argument fromIndex was passed let n be
            //    ToInteger(fromIndex); else let n be 0.
            var n = +fromIndex || 0;

            if (Math.abs(n) === Infinity) {
                n = 0;
            }

            // 6. If n >= len, return -1.
            if (n >= len) {
                return -1;
            }

            // 7. If n >= 0, then Let k be n.
            // 8. Else, n<0, Let k be len - abs(n).
            //    If k is less than 0, then let k be 0.
            k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

            // 9. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ToString(k).
                //   This is implicit for LHS operands of the in operator
                // b. Let kPresent be the result of calling the
                //    HasProperty internal method of o with argument Pk.
                //   This step can be combined with c
                // c. If kPresent is true, then
                //    i.  Let elementK be the result of calling the Get
                //        internal method of o with the argument ToString(k).
                //   ii.  Let same be the result of applying the
                //        Strict Equality Comparison Algorithm to
                //        searchElement and elementK.
                //  iii.  If same is true, return k.
                if (k in o && o[k] === searchElement) {
                    return k;
                }
                k++;
            }
            return -1;
        };
    }

//addEventListener polyfill 1.0 / Eirik Backer / MIT Licence
    (function(win, doc) {
        if (win.addEventListener) return; //No need to polyfill

        function docHijack(p) {
            var old = doc[p];
            doc[p] = function(v) { return addListen(old(v)) }
        }

        function addEvent(on, fn, self) {
            return (self = this).attachEvent('on' + on, function(e) {
                var e = e || win.event;
                e.preventDefault = e.preventDefault || function() { e.returnValue = false }
                e.stopPropagation = e.stopPropagation || function() { e.cancelBubble = true }
                fn.call(self, e);
            });
        }

        function addListen(obj, i) {
            if (i = obj.length) while (i--) obj[i].addEventListener = addEvent;
            else obj.addEventListener = addEvent;
            return obj;
        }

        addListen([doc, win]);
        if ('Element' in win) win.Element.prototype.addEventListener = addEvent; //IE8
        else { //IE < 8
            doc.attachEvent('onreadystatechange', function() { addListen(doc.all) }); //Make sure we also init at domReady
            docHijack('getElementsByTagName');
            docHijack('getElementById');
            docHijack('createElement');
            addListen(doc.all);
        }
    })(window, document);

    (function() {
        var productList = {},
            setupOptions = {
  "brand": "PostcodeAnywhere",
  "availableServices": [
    "platform_captureplus",
    "platform_emailvalidation",
    "platform_mobilevalidation"
  ],
  "showPrices": true,
  "serviceHost": "services.postcodeanywhere.co.uk"
},
            setupMode = false,
            loadedServices = [];
        sendMessage("HB|" + pca.initial.accountCode);
        //#region ready function

        var ready = (function() {

            var readyList,
                DOMContentLoaded,
                class2type = {};
            class2type["[object Boolean]"] = "boolean";
            class2type["[object Number]"] = "number";
            class2type["[object String]"] = "string";
            class2type["[object Function]"] = "function";
            class2type["[object Array]"] = "array";
            class2type["[object Date]"] = "date";
            class2type["[object RegExp]"] = "regexp";
            class2type["[object Object]"] = "object";

            var ReadyObj = {
                // Is the DOM ready to be used? Set to true once it occurs.
                isReady: false,
                // A counter to track how many items to wait for before
                // the ready event fires. See #6781
                readyWait: 1,
                // Hold (or release) the ready event
                holdReady: function(hold) {
                    if (hold) {
                        ReadyObj.readyWait++;
                    } else {
                        ReadyObj.ready(true);
                    }
                },
                // Handle when the DOM is ready
                ready: function(wait) {
                    // Either a released hold or an DOMready/load event and not yet ready
                    if ((wait === true && !--ReadyObj.readyWait) || (wait !== true && !ReadyObj.isReady)) {
                        // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
                        if (!document.body) {
                            return setTimeout(ReadyObj.ready, 1);
                        }

                        // Remember that the DOM is ready
                        ReadyObj.isReady = true;
                        // If a normal DOM Ready event fired, decrement, and wait if need be
                        if (wait !== true && --ReadyObj.readyWait > 0) {
                            return;
                        }
                        // If there are functions bound, to execute
                        readyList.resolveWith(document, [ReadyObj]);

                        // Trigger any bound ready events
                        //if ( ReadyObj.fn.trigger ) {
                        //  ReadyObj( document ).trigger( "ready" ).unbind( "ready" );
                        //}
                    }
                },
                bindReady: function() {
                    if (readyList) {
                        return;
                    }
                    readyList = ReadyObj._Deferred();

                    // Catch cases where $(document).ready() is called after the
                    // browser event has already occurred.
                    if (document.readyState === "complete") {
                        // Handle it asynchronously to allow scripts the opportunity to delay ready
                        return setTimeout(ReadyObj.ready, 1);
                    }

                    // Mozilla, Opera and webkit nightlies currently support this event
                    if (document.addEventListener) {
                        // Use the handy event callback
                        document.addEventListener("DOMContentLoaded", DOMContentLoaded, false);
                        // A fallback to window.onload, that will always work
                        window.addEventListener("load", ReadyObj.ready, false);

                        // If IE event model is used
                    } else if (document.attachEvent) {
                        // ensure firing before onload,
                        // maybe late but safe also for iframes
                        document.attachEvent("onreadystatechange", DOMContentLoaded);

                        // A fallback to window.onload, that will always work
                        window.attachEvent("onload", ReadyObj.ready);

                        // If IE and not a frame
                        // continually check to see if the document is ready
                        var toplevel = false;

                        try {
                            toplevel = window.frameElement == null;
                        } catch (e) {
                        }

                        if (document.documentElement.doScroll && toplevel) {
                            doScrollCheck();
                        }
                    }
                },
                _Deferred: function() {
                    var // callbacks list
                        callbacks = [],
                        // stored [ context , args ]
                        fired,
                        // to avoid firing when already doing so
                        firing,
                        // flag to know if the deferred has been cancelled
                        cancelled,
                        // the deferred itself
                        deferred = {

                            // done( f1, f2, ...)
                            done: function() {
                                if (!cancelled) {
                                    var args = arguments,
                                        i,
                                        length,
                                        elem,
                                        type,
                                        _fired;
                                    if (fired) {
                                        _fired = fired;
                                        fired = 0;
                                    }
                                    for (i = 0, length = args.length; i < length; i++) {
                                        elem = args[i];
                                        type = ReadyObj.type(elem);
                                        if (type === "array") {
                                            deferred.done.apply(deferred, elem);
                                        } else if (type === "function") {
                                            callbacks.push(elem);
                                        }
                                    }
                                    if (_fired) {
                                        deferred.resolveWith(_fired[0], _fired[1]);
                                    }
                                }
                                return this;
                            },

                            // resolve with given context and args
                            resolveWith: function(context, args) {
                                if (!cancelled && !fired && !firing) {
                                    // make sure args are available (#8421)
                                    args = args || [];
                                    firing = 1;
                                    try {
                                        while (callbacks[0]) {
                                            callbacks.shift().apply(context, args); //shifts a callback, and applies it to document
                                        }
                                    } finally {
                                        fired = [context, args];
                                        firing = 0;
                                    }
                                }
                                return this;
                            },

                            // resolve with this as context and given arguments
                            resolve: function() {
                                deferred.resolveWith(this, arguments);
                                return this;
                            },

                            // Has this deferred been resolved?
                            isResolved: function() {
                                return !!(firing || fired);
                            },

                            // Cancel
                            cancel: function() {
                                cancelled = 1;
                                callbacks = [];
                                return this;
                            }
                        };

                    return deferred;
                },
                type: function(obj) {
                    return obj == null ?
                        String(obj) :
                        class2type[Object.prototype.toString.call(obj)] || "object";
                }
            }

            // The DOM ready check for Internet Explorer
            function doScrollCheck() {
                if (ReadyObj.isReady) {
                    return;
                }

                try {
                    // If IE is used, use the trick by Diego Perini
                    // http://javascript.nwbox.com/IEContentLoaded/
                    document.documentElement.doScroll("left");
                } catch (e) {
                    setTimeout(doScrollCheck, 1);
                    return;
                }

                // and execute any waiting functions
                ReadyObj.ready();
            }

            // Cleanup functions for the document ready method
            if (document.addEventListener) {
                DOMContentLoaded = function() {
                    document.removeEventListener("DOMContentLoaded", DOMContentLoaded, false);
                    ReadyObj.ready();
                };

            } else if (document.attachEvent) {
                DOMContentLoaded = function() {
                    // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
                    if (document.readyState === "complete") {
                        document.detachEvent("onreadystatechange", DOMContentLoaded);
                        ReadyObj.ready();
                    }
                };
            }

            function ready(fn) {
                // Attach the listeners
                ReadyObj.bindReady();

                var type = ReadyObj.type(fn);

                // Add the callback
                readyList.done(fn); //readyList is result of _Deferred()
            }

            return ready;
        })();


        //#endregion

        //#region cookies
        pca.cookies = function(name, value, expires) {
            if (typeof value !== "undefined") {
                //set cookie
                if (typeof value == "object")
                    value = JSON.stringify(value);
                if (typeof expires == "number") {
                    expires = new Date(new Date().getTime() + (expires * 1000 * 60 * 60 * 24));
                }
                var cookString = [
                    encodeURIComponent(name), "=", encodeURIComponent(value),
                    typeof expires === "undefined" ? "" : "; expires=" + expires.toUTCString(),
                    "; path=/;"
                ].join('');
                document.cookie = cookString;


            }


            var cs = document.cookie ? document.cookie.split('; ') : [];
            for (var i = 0; i < cs.length; i++) {
                var c = cs[i];
                var bits = c.split('=');
                if (name === decodeURIComponent(bits[0])) {
                    try {
                        return utils.parseJSON(decodeURIComponent(bits[1]));
                    } catch (err) {
                        return decodeURIComponent(bits[1]);
                    }
                }
            }
            return "";

        };
        //#endregion

        //#region platform methods
        pca.platform = pca.platform || {};
        pca.platform.productList = productList;
        pca.platform.elementExists = elementExists;
        pca.platform.getBindingsForService = function(s) {
            var bindings = [];
            for (var key in productList) {
                if (productList.hasOwnProperty(key)) {
                    if (productList[key].hasOwnProperty(s) && productList[key][s].hasOwnProperty("bindings")) {
                        if (CheckRestrictions(productList[key][s].restrictions)) {
                            var sBindings = productList[key][s].bindings;
                            for (var i = 0; i < sBindings.length; i++) {
                                bindings.push(sBindings[i]);
                            }
                        }
                    }
                }
            }
            return bindings;
        }
        pca.platform.fire = function(event, args) {
            if (typeof pca.onq !== "undefined") {
                for (var i = 0; i < pca.onq.length; i++) {
                    if (pca.onq[i][0] === event) {
                        var cb = pca.onq[i][pca.onq[i].length - 1];
                        if (typeof cb == "function") {
                            cb.apply(null, args);
                        }
                    }
                }
            }
        };
        pca.platform.getTypeForServiceName = function(name) {
            switch (name) {
            case "PLATFORM_CAPTUREPLUS":
            case "PLATFORM_CAPTUREPLUS_BETA":
                return "capture+";
            case "PLATFORM_EMAILVALIDATION":
                return "emailvalidation";
            case "PLATFORM_MOBILEVALIDATION":
                return "mobilevalidation";
            case "PLATFORM_SENSOR":
                return "sensor";
            }
            return "";
        };
        pca.load = load;
        //#endregion

        ready(function() {
            load();
        });

        pca.platform.continualFieldSearches = {};

        pca.platform.elementStateMonitors = {};

        function monitorFields(key, serviceList) {
            stopMonitoringFields(key);
            var elements = []
            for (var serviceName in serviceList) {
                for (var i = 0; i < serviceList[serviceName].bindings.length; i++) {
                    for (var f = 0; f < serviceList[serviceName].bindings[i].fields.length; f++) {
                        var field = JSON.parse(JSON.stringify(serviceList[serviceName].bindings[i].fields[f]));
                        elements.push({
                            existingElement: elementExists(field.element),
                            query: field.element
                        })
                    }
                }
            }
            pca.platform.elementStateMonitors[key] = setInterval(function () {
                for (var e = 0; e < elements.length; e++) {
                    var element = elements[e];
                    if (element.existingElement !== elementExists(element.query)) {
                        //CHANGE!
                        stopMonitoringFields(key);
                        load(key);
                        break;
                    }
                }
            }, 1000);
        }

        function stopMonitoringFields(key) {
            if (pca.platform.elementStateMonitors.hasOwnProperty(key)) {
                clearInterval(pca.platform.elementStateMonitors[key]);
                delete pca.platform.elementStateMonitors[key];
            }
        }

        function addContinualSearch(key) {
            if (!pca.platform.continualFieldSearches.hasOwnProperty(key)) {
                pca.platform.continualFieldSearches[key] = setInterval(function () {
                    load(key);
                }, 1000);
            }
        }

        function removeContinualSearch(key) {
            if (pca.platform.continualFieldSearches.hasOwnProperty(key)) {
                clearInterval(pca.platform.continualFieldSearches[key]);
                delete pca.platform.continualFieldSearches[key];
            }
        }


        function load(selector) {
            selector = selector || null;
            var servicesToLoad = [];
            var serviceVersions = [];
            var keyToLoadWith = "";
            for (var key in productList) {
                if (productList.hasOwnProperty(key)) {
                    keyToLoadWith = key;
                    if (key === selector || selector == null) {
                        var serviceList = productList[key];
                        for (var service in serviceList) {
                            if (serviceList.hasOwnProperty(service)) {
                                pca.platform.fire("restrictions", [pca.platform.getTypeForServiceName(service), key, serviceList[service]["restrictions"]]);
                                var restrictions = serviceList[service]["restrictions"];
                                //requires default empty object for chrome extension
                                var options = serviceList[service].options || {};
                                var versionNumber = 1.0;
                                if (serviceList[service].hasOwnProperty("version")) {
                                    versionNumber = serviceList[service]["version"];
                                }
                                if (CheckRestrictions(restrictions)) {
                                    removeContinualSearch(key);
                                    if (options.MonitorFieldStates) {
                                        monitorFields(key, serviceList);
                                    }
                                    if (servicesToLoad.indexOf(service) === -1) {
                                        servicesToLoad.push(service);
                                        serviceVersions.push(versionNumber);
                                    }
                                } else {
                                   if (options.ContinualFieldSearch) {
                                       addContinualSearch(key);
                                   }
                                }
                            }
                        }
                    }
                }
            }
            initServices(servicesToLoad, keyToLoadWith, serviceVersions);
        }


        function initServices(services, key, serviceVersions) {

            for (var i = 0; i < services.length; i++) {
                var service = services[i].toUpperCase();
                var serviceVersion = serviceVersions[i].toFixed(2);
                var host = setupOptions.serviceHost;
                if (loadedServices.indexOf(service) === -1) {
                    switch (service) {
                    case "PLATFORM_CAPTUREPLUS":
                        loadCSS(formServiceUrl("/css/platformcaptureplus-" + serviceVersion + ".min.css", [{ key: "key", value: key }]));
                        loadJS(formServiceUrl("/js/platformcaptureplus-" + serviceVersion + ".min.js", [{ key: "key", value: key }]));
                        break;
                    case "PLATFORM_CAPTUREPLUS_BETA":
                        loadCSS(formServiceUrl("/css/platformcaptureplus-" + serviceVersion + ".min.css", [{ key: "key", value: key }]));
                        loadJS(formServiceUrl("/js/platformcaptureplus-" + serviceVersion + ".min.js", [{ key: "key", value: key }]));
                        break;
                    case "PLATFORM_EMAILVALIDATION":
                        loadCSS(formServiceUrl("/css/platformemailvalidation-" + serviceVersion + ".min.css", [{ key: "key", value: key }]));
                        loadJS(formServiceUrl("/js/platformemailvalidation-" + serviceVersion + ".min.js", [{ key: "key", value: key }]));
                        break;
                    case "PLATFORM_MOBILEVALIDATION":
                        loadCSS(formServiceUrl("/css/platformmobilevalidation-" + serviceVersion + ".min.css", [{ key: "key", value: key }]));
                        loadJS(formServiceUrl("/js/platformmobilevalidation-" + serviceVersion + ".min.js", [{ key: "key", value: key }]));
                        break;
                    case "PLATFORM_SENSOR":
                        loadJS(formServiceUrl("/js/platformsensor-" + serviceVersion + ".min.js", [{ key: "key", value: key }]));
                        break;
                    default:
                    }
                    loadedServices.push(service);
                } else {
                    switch (service) {
                    case "PLATFORM_CAPTUREPLUS":
                    case "PLATFORM_CAPTUREPLUS_BETA":
                        if (pca.capturePlus && pca.capturePlus.load) {
                            pca.capturePlus.load();
                        }
                        break;
                    case "PLATFORM_EMAILVALIDATION":
                        if (pca.emailValidation && pca.emailValidation.load) {
                            pca.emailValidation.load();
                        }
                        break;
                    case "PLATFORM_MOBILEVALIDATION":
                        if (pca.mobileValidation && pca.mobileValidation.load) {
                            pca.mobileValidation.load();
                        }
                        break;
                    case "PLATFORM_SENSOR":
                        if (pca.sensor && pca.sensor.load) {
                            pca.sensor.load();
                        }
                        break;
                    }
                }

            }

        }

        //#region Restrictions

        function CheckRestrictions(restrictionsList) {
            if (setupMode)
                return true;
            var urlRestrictions = [], urlGroupingMethod = "MatchAll";
            for (var i = 0; i < restrictionsList.length; i++) {
                var restriction = restrictionsList[i];
                if (restriction && restriction.hasOwnProperty("override") && typeof restriction.override == "function") {
                    return restriction.override(restriction);
                }
                switch (restriction.Key) {
                case "inactive":
                    return false;
                case "fieldPresent":
                    if (!elementExists(restriction.Value))
                        return false;
                    break;
                case "urlRegex":
                    if (!(new RegExp(document.location.href).test(restriction.Value)))
                        return false;
                    break;
                case "urlRestriction":
                    urlRestrictions.push(JSON.parse(restriction.Value));
                    break;
                case "urlGroupingMethod":
                    urlGroupingMethod = restriction.Value;
                    break;

                }
            }

            if (urlRestrictions.length) {
                switch (urlGroupingMethod) {
                case "MatchAny":
                    var onePassed = false;
                    for (var u = 0; u < urlRestrictions.length; u++) {
                        if (checkUrlRestriction(urlRestrictions[u])) {
                            onePassed = true;
                        }
                    }
                    if (!onePassed) {
                        return false;
                    }
                    break;
                default:
                    for (var u = 0; u < urlRestrictions.length; u++) {
                        if (!checkUrlRestriction(urlRestrictions[u])) {
                            return false;
                        }
                    }
                    break;
                }
            }

            return true;
        }

        if (!String.prototype.startsWith) {
            String.prototype.startsWith = function(searchString, position) {
                position = position || 0;
                return this.substr(position, searchString.length) === searchString;
            };
        }

        if (!String.prototype.endsWith) {
            String.prototype.endsWith = function(searchString, position) {
                var subjectString = this.toString();
                if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
                    position = subjectString.length;
                }
                position -= searchString.length;
                var lastIndex = subjectString.indexOf(searchString, position);
                return lastIndex !== -1 && lastIndex === position;
            };
        }

        if (!String.prototype.includes) {
            String.prototype.includes = function(search, start) {
                'use strict';
                if (typeof start !== 'number') {
                    start = 0;
                }

                if (start + search.length > this.length) {
                    return false;
                } else {
                    return this.indexOf(search, start) !== -1;
                }
            };
        }

        var urlComparerMethods = {
            Equals: function(a, b) {
                return a === b;
            },
            StartsWith: function(a, b) {
                return a.startsWith(b);
            },
            EndsWith: function(a, b) {
                return a.endsWith(b);
            },
            Includes: function(a, b) {
                return a.includes(b);
            },
            DoesNotEqual: function(a, b) {
                return a !== b;
            },
            DoesNotStartWith: function(a, b) {
                return !a.startsWith(b);
            },
            DoesNotEndWith: function(a, b) {
                return !a.endsWith(b);
            },
            DoesNotInclude: function(a, b) {
                return !a.includes(b);
            },
            RegexMatches: function(a, b) {
                return a.match(b);
            },
            RegexDoesNotMatch: function(a, b) {
                return !a.match(b);
            }
        };

        function extractVariableFromUrl(variableType) {
            var parser = document.createElement("a");
            parser.href = document.location.href;
            switch (variableType) {
                case "Url":
                    return document.location.href;
                case "HostName":
                    return parser.hostname;
                case "Path":
                    //standardise for ie11
                    var pn = parser.pathname;
                    return pn.length == 0 || pn[0] != '/' ? '/' + pn : pn;
                default:
                    return document.location.href;
            }
        }

        function checkUrlRestriction(restrictionDetails) {
            var url = document.location.href;
            return urlComparerMethods[restrictionDetails.comparerMethod](extractVariableFromUrl(restrictionDetails.variable), restrictionDetails.value);
        }

        var fuzzyTags = ["*"];

        function elementExists(reference, base) {
            if (!reference)
                return null;

            if (typeof reference.nodeType == "number") //Is a HTML DOM Node
                return reference;

            if (typeof reference == 'string') {
                base = elementExists(base) || document;

                var byId = base.getElementById ? base.getElementById(reference) : null;
                if (byId) return byId;

                var byName = base.getElementsByName ? base.getElementsByName(reference) : null;
                if (byName.length) return byName[0];
            }

            //try a regex match if allowed
            return function(regex, base) {
                if (typeof regex == 'string') {
                    try {
                        regex = new RegExp(regex);
                    } catch (e) {
                        return null;
                    }
                }

                //make sure its a RegExp
                if (regex && typeof regex == 'object' && regex.constructor == RegExp) {
                    base = elementExists(base) || document;

                    for (var t = 0; t < fuzzyTags.length; t++) {
                        var elements = base.getElementsByTagName(fuzzyTags[t]);

                        for (var i = 0; i < elements.length; i++) {
                            var elem = elements[i];
                            if (elem.id && regex.test(elem.id))
                                return elem;
                        }
                    }
                }

                return null;
            }(reference, base);
        }

        //#endregion
        //#region Generic Loaders


        var loadJS = pca.platform.loadJS || function (src) {
            var e = document.createElement("script");
            e.async = true;
            e.src = src;
            document.getElementsByTagName("head")[0].appendChild(e);
        };


        var loadCSS = pca.platform.loadCSS || function (href) {
            var e = document.createElement("link");
            e.rel = "stylesheet";
            e.type = "text/css";
            e.href = href;
            document.getElementsByTagName("head")[0].appendChild(e);
        };

        function receiveMessage(event) {

            var allowedOrigins = [
                ".pcapredict.com",
                ".pcapredict.co.uk",
                ".addressy.com"
            ];

            if (allowedOrigins.filter(function(o) {
                return event.origin.substring(event.origin.length - o.length, event.origin.length) === o;
            }).length) {
                var msg = JSON.parse(event.data);
                switch (msg.cmd) {
                    case "PREPARE":
                        setupMode = true;
                        break;
                    case "SETUP":
                        loadSetup(msg.key, msg.token, msg.culture, msg.priceLists, msg.latestVersions);
                        break;
                    case "ECHO":
                        sendMessage(msg.value);
                        break;
                }
            }
        }

        function sendMessage(msg) {
            if (typeof parent !== "undefined" && parent.postMessage) {
                parent.postMessage(JSON.stringify(msg), "*");
            }
        }

        window.addEventListener("message", receiveMessage, false);
        window.addEventListener("unload", function() {
            sendMessage("navigation");
        });


        function getQueryVariable(variable) {
            var query = window.location.search === "" ? (typeof window.location.href.split("?")[1] == "undefined" ? "" : window.location.href.split("?")[1]) : window.location.search.substring(1);
            var vars = query.split('&');
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split('=');
                if (decodeURIComponent(pair[0]) == variable) {
                    return decodeURIComponent(pair[1]);
                }
            }
            return null;
        }

        function formServiceUrl(rel, qs) {
            qs = qs || [];
            qs.push({
                key: "BRAND",
                value: setupOptions.brand
            });
            var url = "//" + setupOptions.serviceHost + rel;
            var qsString = "";
            if (qs.length > 0) {
                for (var i = 0; i < qs.length; i++) {
                    var item = i === 0 ? "?" : "&";
                    item = item + qs[i].key + "=" + qs[i].value;
                    qsString += item;
                }
            }
            url += qsString;
            return url;
        }

        function loadSetup(key, token, culture, priceLists, latestVersions, cb) {
            cb = cb || function() {}
            pca.platform.tempCredentials = {
                key: key,
                token: token,
                culture: culture,
                priceLists: priceLists,
                latestVersions: latestVersions
            };
            pca.on("setupReady", function(setup) {
                setup.tempKey = key;
                setup.token = token;
                sendMessage("setupLoaded");
                cb();
            });
            loadCSS("//" + setupOptions.serviceHost + "/css/platformsetuptoolkit-1.90.min.css");
            loadJS("//" + setupOptions.serviceHost + "/js/platformsetuptoolkit-1.81.js?key=" + key);
        }

        if (getQueryVariable('pca_setup')) {
            var setupObj = JSON.parse(getQueryVariable('pca_setup'));
            loadSetup(setupObj.key, setupObj.token, setupObj.culture, setupObj.priceLists, setupObj.latestVersions, function() {
                pca.on("setupComplete", function() {
                    pca.platform.setup.getCurrentScanner().destroy();
                });
                pca.platform.setup.start(setupOptions);
            });
        }
        //#endregion
        pca.platform.startSetup = loadSetup;
        pca.platform.setProductList = function(pl) {
            productList = pl;
        };
        pca.message = sendMessage;
    })();
}
