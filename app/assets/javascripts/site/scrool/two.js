// JavaScript Document
(function(a, b) {
    var c, d, e = typeof b,
    f = a.location,
    g = a.document,
    h = g.documentElement,
    i = a.jQuery,
    j = a.$,
    k = {},
    l = [],
    m = "1.10.2",
    n = l.concat,
    o = l.push,
    p = l.slice,
    q = l.indexOf,
    r = k.toString,
    s = k.hasOwnProperty,
    t = m.trim,
    u = function(a, b) {
        return new u.fn.init(a, b, d)
    },
    v = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    w = /\S+/g,
    x = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    y = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    z = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    A = /^[\],:{}\s]*$/,
    B = /(?:^|:|,)(?:\s*\[)+/g,
    C = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    D = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
    E = /^-ms-/,
    F = /-([\da-z])/gi,
    G = function(a, b) {
        return b.toUpperCase()
    },
    H = function(a) { (g.addEventListener || "load" === a.type || "complete" === g.readyState) && (I(), u.ready())
    },
    I = function() {
        g.addEventListener ? (g.removeEventListener("DOMContentLoaded", H, !1), a.removeEventListener("load", H, !1)) : (g.detachEvent("onreadystatechange", H), a.detachEvent("onload", H))
    };
    u.fn = u.prototype = {
        jquery: m,
        constructor: u,
        init: function(a, c, d) {
            var e, f;
            if (!a) return this;
            if ("string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : y.exec(a), !e || !e[1] && c) return ! c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                if (e[1]) {
                    if (c = c instanceof u ? c[0] : c, u.merge(this, u.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c: g, !0)), z.test(e[1]) && u.isPlainObject(c)) for (e in c) u.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
                    return this
                }
                if (f = g.getElementById(e[2]), f && f.parentNode) {
                    if (f.id !== e[2]) return d.find(a);
                    this.length = 1,
                    this[0] = f
                }
                return this.context = g,
                this.selector = a,
                this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : u.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), u.makeArray(a, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return p.call(this)
        },
        get: function(a) {
            return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
        },
        pushStack: function(a) {
            var b = u.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        each: function(a, b) {
            return u.each(this, a, b)
        },
        ready: function(a) {
            return u.ready.promise().done(a),
            this
        },
        slice: function() {
            return this.pushStack(p.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(a) {
            var b = this.length,
            c = +a + (0 > a ? b: 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        map: function(a) {
            return this.pushStack(u.map(this,
            function(b, c) {
                return a.call(b, c, b)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: o,
        sort: [].sort,
        splice: [].splice
    },
    u.fn.init.prototype = u.fn,
    u.extend = u.fn.extend = function() {
        var a, c, d, e, f, g, h = arguments[0] || {},
        i = 1,
        j = arguments.length,
        k = !1;
        for ("boolean" == typeof h && (k = h, h = arguments[1] || {},
        i = 2), "object" == typeof h || u.isFunction(h) || (h = {}), j === i && (h = this, --i); j > i; i++) if (null != (f = arguments[i])) for (e in f) a = h[e],
        d = f[e],
        h !== d && (k && d && (u.isPlainObject(d) || (c = u.isArray(d))) ? (c ? (c = !1, g = a && u.isArray(a) ? a: []) : g = a && u.isPlainObject(a) ? a: {},
        h[e] = u.extend(k, g, d)) : d !== b && (h[e] = d));
        return h
    },
    u.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        noConflict: function(b) {
            return a.$ === u && (a.$ = j),
            b && a.jQuery === u && (a.jQuery = i),
            u
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? u.readyWait++:u.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? !--u.readyWait: !u.isReady) {
                if (!g.body) return setTimeout(u.ready);
                u.isReady = !0,
                a !== !0 && --u.readyWait > 0 || (c.resolveWith(g, [u]), u.fn.trigger && u(g).trigger("ready").off("ready"))
            }
        },
        isFunction: function(a) {
            return "function" === u.type(a)
        },
        isArray: Array.isArray ||
        function(a) {
            return "array" === u.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return ! isNaN(parseFloat(a)) && isFinite(a)
        },
        type: function(a) {
            return null == a ? a + "": "object" == typeof a || "function" == typeof a ? k[r.call(a)] || "object": typeof a
        },
        isPlainObject: function(a) {
            var c;
            if (!a || "object" !== u.type(a) || a.nodeType || u.isWindow(a)) return ! 1;
            try {
                if (a.constructor && !s.call(a, "constructor") && !s.call(a.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(d) {
                return ! 1
            }
            if (u.support.ownLast) for (c in a) return s.call(a, c);
            for (c in a);
            return c === b || s.call(a, c)
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return ! 1;
            return ! 0
        },
        error: function(a) {
            throw Error(a)
        },
        parseHTML: function(a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1),
            b = b || g;
            var d = z.exec(a),
            e = !c && [];
            return d ? [b.createElement(d[1])] : (d = u.buildFragment([a], b, e), e && u(e).remove(), u.merge([], d.childNodes))
        },
        parseJSON: function(c) {
            return a.JSON && a.JSON.parse ? a.JSON.parse(c) : null === c ? c: "string" == typeof c && (c = u.trim(c), c && A.test(c.replace(C, "@").replace(D, "]").replace(B, ""))) ? Function("return " + c)() : (u.error("Invalid JSON: " + c), b)
        },
        parseXML: function(c) {
            var d, e;
            if (!c || "string" != typeof c) return null;
            try {
                a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
            } catch(f) {
                d = b
            }
            return d && d.documentElement && !d.getElementsByTagName("parsererror").length || u.error("Invalid XML: " + c),
            d
        },
        noop: function() {},
        globalEval: function(b) {
            b && u.trim(b) && (a.execScript ||
            function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(E, "ms-").replace(F, G)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0,
            f = a.length,
            g = J(a);
            if (c) {
                if (g) {
                    for (; f > e; e++) if (d = b.apply(a[e], c), d === !1) break
                } else for (e in a) if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++) if (d = b.call(a[e], e, a[e]), d === !1) break
            } else for (e in a) if (d = b.call(a[e], e, a[e]), d === !1) break;
            return a
        },
        trim: t && !t.call("﻿ ") ?
        function(a) {
            return null == a ? "": t.call(a)
        }: function(a) {
            return null == a ? "": (a + "").replace(x, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (J(Object(a)) ? u.merge(c, "string" == typeof a ? [a] : a) : o.call(c, a)),
            c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (q) return q.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c: 0; d > c; c++) if (c in b && b[c] === a) return c
            }
            return - 1
        },
        merge: function(a, c) {
            var d = c.length,
            e = a.length,
            f = 0;
            if ("number" == typeof d) for (; d > f; f++) a[e++] = c[f];
            else while (c[f] !== b) a[e++] = c[f++];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            var d, e = [],
            f = 0,
            g = a.length;
            for (c = !!c; g > f; f++) d = !!b(a[f], f),
            c !== d && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e = 0,
            f = a.length,
            g = J(a),
            h = [];
            if (g) for (; f > e; e++) d = b(a[e], e, c),
            null != d && (h[h.length] = d);
            else for (e in a) d = b(a[e], e, c),
            null != d && (h[h.length] = d);
            return n.apply([], h)
        },
        guid: 1,
        proxy: function(a, c) {
            var d, e, f;
            return "string" == typeof c && (f = a[c], c = a, a = f),
            u.isFunction(a) ? (d = p.call(arguments, 2), e = function() {
                return a.apply(c || this, d.concat(p.call(arguments)))
            },
            e.guid = a.guid = a.guid || u.guid++, e) : b
        },
        access: function(a, c, d, e, f, g, h) {
            var i = 0,
            j = a.length,
            k = null == d;
            if ("object" === u.type(d)) {
                f = !0;
                for (i in d) u.access(a, c, i, d[i], !0, g, h)
            } else if (e !== b && (f = !0, u.isFunction(e) || (h = !0), k && (h ? (c.call(a, e), c = null) : (k = c, c = function(a, b, c) {
                return k.call(u(a), c)
            })), c)) for (; j > i; i++) c(a[i], d, h ? e: e.call(a[i], i, c(a[i], d)));
            return f ? a: k ? c.call(a) : j ? c(a[0], d) : g
        },
        now: function() {
            return (new Date).getTime()
        },
        swap: function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f],
            a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        }
    }),
    u.ready.promise = function(b) {
        if (!c) if (c = u.Deferred(), "complete" === g.readyState) setTimeout(u.ready);
        else if (g.addEventListener) g.addEventListener("DOMContentLoaded", H, !1),
        a.addEventListener("load", H, !1);
        else {
            g.attachEvent("onreadystatechange", H),
            a.attachEvent("onload", H);
            var d = !1;
            try {
                d = null == a.frameElement && g.documentElement
            } catch(e) {}
            d && d.doScroll &&
            function f() {
                if (!u.isReady) {
                    try {
                        d.doScroll("left")
                    } catch(a) {
                        return setTimeout(f, 50)
                    }
                    I(),
                    u.ready()
                }
            } ()
        }
        return c.promise(b)
    },
    u.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(a, b) {
        k["[object " + b + "]"] = b.toLowerCase()
    });
    function J(a) {
        var b = a.length,
        c = u.type(a);
        return u.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }
    d = u(g),
    function(a, b) {
        var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t = "sizzle" + -new Date,
        v = a.document,
        w = 0,
        x = 0,
        y = hb(),
        z = hb(),
        A = hb(),
        B = !1,
        C = function(a, b) {
            return a === b ? (B = !0, 0) : 0
        },
        D = typeof b,
        E = 1 << 31,
        F = {}.hasOwnProperty,
        G = [],
        H = G.pop,
        I = G.push,
        J = G.push,
        K = G.slice,
        L = G.indexOf ||
        function(a) {
            var b = 0,
            c = this.length;
            for (; c > b; b++) if (this[b] === a) return b;
            return - 1
        },
        M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        N = "[\\x20\\t\\r\\n\\f]",
        O = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        P = O.replace("w", "w#"),
        Q = "\\[" + N + "*(" + O + ")" + N + "*(?:([*^$|!~]?=)" + N + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + P + ")|)|)" + N + "*\\]",
        R = ":(" + O + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + Q.replace(3, 8) + ")*)|.*)\\)|)",
        S = RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g"),
        T = RegExp("^" + N + "*," + N + "*"),
        U = RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
        V = RegExp(N + "*[+~]"),
        W = RegExp("=" + N + "*([^\\]'\"]*)" + N + "*\\]", "g"),
        X = RegExp(R),
        Y = RegExp("^" + P + "$"),
        Z = {
            ID: RegExp("^#(" + O + ")"),
            CLASS: RegExp("^\\.(" + O + ")"),
            TAG: RegExp("^(" + O.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + Q),
            PSEUDO: RegExp("^" + R),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)", "i"),
            bool: RegExp("^(?:" + M + ")$", "i"),
            needsContext: RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)", "i")
        },
        $ = /^[^{]+\{\s*\[native \w/,
        _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ab = /^(?:input|select|textarea|button)$/i,
        bb = /^h\d$/i,
        cb = /'|\\/g,
        db = RegExp("\\\\([\\da-f]{1,6}" + N + "?|(" + N + ")|.)", "ig"),
        eb = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b: 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(55296 | d >> 10, 56320 | 1023 & d)
        };
        try {
            J.apply(G = K.call(v.childNodes), v.childNodes),
            G[v.childNodes.length].nodeType
        } catch(fb) {
            J = {
                apply: G.length ?
                function(a, b) {
                    I.apply(a, K.call(b))
                }: function(a, b) {
                    var c = a.length,
                    d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }
        function gb(a, b, c, e) {
            var f, g, h, i, j, k, n, q, r, u;
            if ((b ? b.ownerDocument || b: v) !== m && l(b), b = b || m, c = c || [], !a || "string" != typeof a) return c;
            if (1 !== (i = b.nodeType) && 9 !== i) return [];
            if (o && !e) {
                if (f = _.exec(a)) if (h = f[1]) {
                    if (9 === i) {
                        if (g = b.getElementById(h), !g || !g.parentNode) return c;
                        if (g.id === h) return c.push(g),
                        c
                    } else if (b.ownerDocument && (g = b.ownerDocument.getElementById(h)) && s(b, g) && g.id === h) return c.push(g),
                    c
                } else {
                    if (f[2]) return J.apply(c, b.getElementsByTagName(a)),
                    c;
                    if ((h = f[3]) && d.getElementsByClassName && b.getElementsByClassName) return J.apply(c, b.getElementsByClassName(h)),
                    c
                }
                if (d.qsa && (!p || !p.test(a))) {
                    if (q = n = t, r = b, u = 9 === i && a, 1 === i && "object" !== b.nodeName.toLowerCase()) {
                        k = qb(a),
                        (n = b.getAttribute("id")) ? q = n.replace(cb, "\\$&") : b.setAttribute("id", q),
                        q = "[id='" + q + "'] ",
                        j = k.length;
                        while (j--) k[j] = q + rb(k[j]);
                        r = V.test(a) && b.parentNode || b,
                        u = k.join(",")
                    }
                    if (u) try {
                        return J.apply(c, r.querySelectorAll(u)),
                        c
                    } catch(w) {} finally {
                        n || b.removeAttribute("id")
                    }
                }
            }
            return zb(a.replace(S, "$1"), b, c, e)
        }
        function hb() {
            var a = [];
            function b(c, d) {
                return a.push(c += " ") > f.cacheLength && delete b[a.shift()],
                b[c] = d
            }
            return b
        }
        function ib(a) {
            return a[t] = !0,
            a
        }
        function jb(a) {
            var b = m.createElement("div");
            try {
                return !! a(b)
            } catch(c) {
                return ! 1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null
            }
        }
        function kb(a, b) {
            var c = a.split("|"),
            d = a.length;
            while (d--) f.attrHandle[c[d]] = b
        }
        function lb(a, b) {
            var c = b && a,
            d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || E) - (~a.sourceIndex || E);
            if (d) return d;
            if (c) while (c = c.nextSibling) if (c === b) return - 1;
            return a ? 1 : -1
        }
        function mb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function nb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function ob(a) {
            return ib(function(b) {
                return b = +b,
                ib(function(c, d) {
                    var e, f = a([], c.length, b),
                    g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        h = gb.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName: !1
        },
        d = gb.support = {},
        l = gb.setDocument = function(a) {
            var c = a ? a.ownerDocument || a: v,
            e = c.defaultView;
            return c !== m && 9 === c.nodeType && c.documentElement ? (m = c, n = c.documentElement, o = !h(c), e && e.attachEvent && e !== e.top && e.attachEvent("onbeforeunload",
            function() {
                l()
            }), d.attributes = jb(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }), d.getElementsByTagName = jb(function(a) {
                return a.appendChild(c.createComment("")),
                !a.getElementsByTagName("*").length
            }), d.getElementsByClassName = jb(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>",
                a.firstChild.className = "i",
                2 === a.getElementsByClassName("i").length
            }), d.getById = jb(function(a) {
                return n.appendChild(a).id = t,
                !c.getElementsByName || !c.getElementsByName(t).length
            }), d.getById ? (f.find.ID = function(a, b) {
                if (typeof b.getElementById !== D && o) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            },
            f.filter.ID = function(a) {
                var b = a.replace(db, eb);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete f.find.ID, f.filter.ID = function(a) {
                var b = a.replace(db, eb);
                return function(a) {
                    var c = typeof a.getAttributeNode !== D && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), f.find.TAG = d.getElementsByTagName ?
            function(a, c) {
                return typeof c.getElementsByTagName !== D ? c.getElementsByTagName(a) : b
            }: function(a, b) {
                var c, d = [],
                e = 0,
                f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            },
            f.find.CLASS = d.getElementsByClassName &&
            function(a, c) {
                return typeof c.getElementsByClassName !== D && o ? c.getElementsByClassName(a) : b
            },
            q = [], p = [], (d.qsa = $.test(c.querySelectorAll)) && (jb(function(a) {
                a.innerHTML = "<select><option selected=''></option></select>",
                a.querySelectorAll("[selected]").length || p.push("\\[" + N + "*(?:value|" + M + ")"),
                a.querySelectorAll(":checked").length || p.push(":checked")
            }), jb(function(a) {
                var b = c.createElement("input");
                b.setAttribute("type", "hidden"),
                a.appendChild(b).setAttribute("t", ""),
                a.querySelectorAll("[t^='']").length && p.push("[*^$]=" + N + "*(?:''|\"\")"),
                a.querySelectorAll(":enabled").length || p.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                p.push(",.*:")
            })), (d.matchesSelector = $.test(r = n.webkitMatchesSelector || n.mozMatchesSelector || n.oMatchesSelector || n.msMatchesSelector)) && jb(function(a) {
                d.disconnectedMatch = r.call(a, "div"),
                r.call(a, "[s!='']:x"),
                q.push("!=", R)
            }), p = p.length && RegExp(p.join("|")), q = q.length && RegExp(q.join("|")), s = $.test(n.contains) || n.compareDocumentPosition ?
            function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement: a,
                d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }: function(a, b) {
                if (b) while (b = b.parentNode) if (b === a) return ! 0;
                return ! 1
            },
            C = n.compareDocumentPosition ?
            function(a, b) {
                if (a === b) return B = !0,
                0;
                var e = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b);
                return e ? 1 & e || !d.sortDetached && b.compareDocumentPosition(a) === e ? a === c || s(v, a) ? -1 : b === c || s(v, b) ? 1 : k ? L.call(k, a) - L.call(k, b) : 0 : 4 & e ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
            }: function(a, b) {
                var d, e = 0,
                f = a.parentNode,
                g = b.parentNode,
                h = [a],
                i = [b];
                if (a === b) return B = !0,
                0;
                if (!f || !g) return a === c ? -1 : b === c ? 1 : f ? -1 : g ? 1 : k ? L.call(k, a) - L.call(k, b) : 0;
                if (f === g) return lb(a, b);
                d = a;
                while (d = d.parentNode) h.unshift(d);
                d = b;
                while (d = d.parentNode) i.unshift(d);
                while (h[e] === i[e]) e++;
                return e ? lb(h[e], i[e]) : h[e] === v ? -1 : i[e] === v ? 1 : 0
            },
            c) : m
        },
        gb.matches = function(a, b) {
            return gb(a, null, null, b)
        },
        gb.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== m && l(a), b = b.replace(W, "='$1']"), !(!d.matchesSelector || !o || q && q.test(b) || p && p.test(b))) try {
                var c = r.call(a, b);
                if (c || d.disconnectedMatch || a.document && 11 !== a.document.nodeType) return c
            } catch(e) {}
            return gb(b, m, null, [a]).length > 0
        },
        gb.contains = function(a, b) {
            return (a.ownerDocument || a) !== m && l(a),
            s(a, b)
        },
        gb.attr = function(a, c) { (a.ownerDocument || a) !== m && l(a);
            var e = f.attrHandle[c.toLowerCase()],
            g = e && F.call(f.attrHandle, c.toLowerCase()) ? e(a, c, !o) : b;
            return g === b ? d.attributes || !o ? a.getAttribute(c) : (g = a.getAttributeNode(c)) && g.specified ? g.value: null: g
        },
        gb.error = function(a) {
            throw Error("Syntax error, unrecognized expression: " + a)
        },
        gb.uniqueSort = function(a) {
            var b, c = [],
            e = 0,
            f = 0;
            if (B = !d.detectDuplicates, k = !d.sortStable && a.slice(0), a.sort(C), B) {
                while (b = a[f++]) b === a[f] && (e = c.push(f));
                while (e--) a.splice(c[e], 1)
            }
            return a
        },
        g = gb.getText = function(a) {
            var b, c = "",
            d = 0,
            e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += g(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else for (; b = a[d]; d++) c += g(b);
            return c
        },
        f = gb.selectors = {
            cacheLength: 50,
            createPseudo: ib,
            match: Z,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(db, eb),
                    a[3] = (a[4] || a[5] || "").replace(db, eb),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || gb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && gb.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var c, d = !a[5] && a[2];
                    return Z.CHILD.test(a[0]) ? null: (a[3] && a[4] !== b ? a[2] = a[4] : d && X.test(d) && (c = qb(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (a[0] = a[0].slice(0, c), a[2] = d.slice(0, c)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(db, eb).toLowerCase();
                    return "*" === a ?
                    function() {
                        return ! 0
                    }: function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = RegExp("(^|" + N + ")" + a + "(" + N + "|$)")) && y(a,
                    function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== D && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = gb.attr(d, a);
                        return null == e ? "!=" === b: b ? (e += "", "=" === b ? e === c: "!=" === b ? e !== c: "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice( - c.length) === c: "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-": !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                    g = "last" !== a.slice( - 4),
                    h = "of-type" === b;
                    return 1 === d && 0 === e ?
                    function(a) {
                        return !! a.parentNode
                    }: function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling": "previousSibling",
                        q = b.parentNode,
                        r = h && b.nodeName.toLowerCase(),
                        s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r: 1 === l.nodeType) return ! 1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return ! 0
                            }
                            if (o = [g ? q.firstChild: q.lastChild], g && s) {
                                k = q[t] || (q[t] = {}),
                                j = k[a] || [],
                                n = j[0] === w && j[1],
                                m = j[0] === w && j[2],
                                l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [w, n, m];
                                    break
                                }
                            } else if (s && (j = (b[t] || (b[t] = {}))[a]) && j[0] === w) m = j[1];
                            else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r: 1 === l.nodeType) && ++m && (s && ((l[t] || (l[t] = {}))[a] = [w, m]), l === b)) break;
                            return m -= e,
                            m === d || 0 === m % d && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, d = f.pseudos[a] || f.setFilters[a.toLowerCase()] || gb.error("unsupported pseudo: " + a);
                    return d[t] ? d(b) : d.length > 1 ? (c = [a, a, "", b], f.setFilters.hasOwnProperty(a.toLowerCase()) ? ib(function(a, c) {
                        var e, f = d(a, b),
                        g = f.length;
                        while (g--) e = L.call(a, f[g]),
                        a[e] = !(c[e] = f[g])
                    }) : function(a) {
                        return d(a, 0, c)
                    }) : d
                }
            },
            pseudos: {
                not: ib(function(a) {
                    var b = [],
                    c = [],
                    d = i(a.replace(S, "$1"));
                    return d[t] ? ib(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                        h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a,
                        d(b, null, f, c),
                        !c.pop()
                    }
                }),
                has: ib(function(a) {
                    return function(b) {
                        return gb(a, b).length > 0
                    }
                }),
                contains: ib(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || g(b)).indexOf(a) > -1
                    }
                }),
                lang: ib(function(a) {
                    return Y.test(a || "") || gb.error("unsupported lang: " + a),
                    a = a.replace(db, eb).toLowerCase(),
                    function(b) {
                        var c;
                        do
                        if (c = o ? b.lang: b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(),
                        c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return ! 1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === n
                },
                focus: function(a) {
                    return a === m.activeElement && (!m.hasFocus || m.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeName > "@" || 3 === a.nodeType || 4 === a.nodeType) return ! 1;
                    return ! 0
                },
                parent: function(a) {
                    return ! f.pseudos.empty(a)
                },
                header: function(a) {
                    return bb.test(a.nodeName)
                },
                input: function(a) {
                    return ab.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type)
                },
                first: ob(function() {
                    return [0]
                }),
                last: ob(function(a, b) {
                    return [b - 1]
                }),
                eq: ob(function(a, b, c) {
                    return [0 > c ? c + b: c]
                }),
                even: ob(function(a, b) {
                    var c = 0;
                    for (; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: ob(function(a, b) {
                    var c = 1;
                    for (; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: ob(function(a, b, c) {
                    var d = 0 > c ? c + b: c;
                    for (; --d >= 0;) a.push(d);
                    return a
                }),
                gt: ob(function(a, b, c) {
                    var d = 0 > c ? c + b: c;
                    for (; b > ++d;) a.push(d);
                    return a
                })
            }
        },
        f.pseudos.nth = f.pseudos.eq;
        for (c in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) f.pseudos[c] = mb(c);
        for (c in {
            submit: !0,
            reset: !0
        }) f.pseudos[c] = nb(c);
        function pb() {}
        pb.prototype = f.filters = f.pseudos,
        f.setFilters = new pb;
        function qb(a, b) {
            var c, d, e, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a,
            i = [],
            j = f.preFilter;
            while (h) { (!c || (d = T.exec(h))) && (d && (h = h.slice(d[0].length) || h), i.push(e = [])),
                c = !1,
                (d = U.exec(h)) && (c = d.shift(), e.push({
                    value: c,
                    type: d[0].replace(S, " ")
                }), h = h.slice(c.length));
                for (g in f.filter) ! (d = Z[g].exec(h)) || j[g] && !(d = j[g](d)) || (c = d.shift(), e.push({
                    value: c,
                    type: g,
                    matches: d
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length: h ? gb.error(a) : z(a, i).slice(0)
        }
        function rb(a) {
            var b = 0,
            c = a.length,
            d = "";
            for (; c > b; b++) d += a[b].value;
            return d
        }
        function sb(a, b, c) {
            var d = b.dir,
            f = c && "parentNode" === d,
            g = x++;
            return b.first ?
            function(b, c, e) {
                while (b = b[d]) if (1 === b.nodeType || f) return a(b, c, e)
            }: function(b, c, h) {
                var i, j, k, l = w + " " + g;
                if (h) {
                    while (b = b[d]) if ((1 === b.nodeType || f) && a(b, c, h)) return ! 0
                } else while (b = b[d]) if (1 === b.nodeType || f) if (k = b[t] || (b[t] = {}), (j = k[d]) && j[0] === l) {
                    if ((i = j[1]) === !0 || i === e) return i === !0
                } else if (j = k[d] = [l], j[1] = a(b, c, h) || e, j[1] === !0) return ! 0
            }
        }
        function tb(a) {
            return a.length > 1 ?
            function(b, c, d) {
                var e = a.length;
                while (e--) if (!a[e](b, c, d)) return ! 1;
                return ! 0
            }: a[0]
        }
        function ub(a, b, c, d, e) {
            var f, g = [],
            h = 0,
            i = a.length,
            j = null != b;
            for (; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }
        function vb(a, b, c, d, e, f) {
            return d && !d[t] && (d = vb(d)),
            e && !e[t] && (e = vb(e, f)),
            ib(function(f, g, h, i) {
                var j, k, l, m = [],
                n = [],
                o = g.length,
                p = f || yb(b || "*", h.nodeType ? [h] : h, []),
                q = !a || !f && b ? p: ub(p, m, a, h, i),
                r = c ? e || (f ? a: o || d) ? [] : g: q;
                if (c && c(q, r, h, i), d) {
                    j = ub(r, n),
                    d(j, [], h, i),
                    k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [],
                            k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? L.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ub(r === g ? r.splice(o, r.length) : r),
                e ? e(null, g, r, i) : J.apply(g, r)
            })
        }



        d.sortStable = t.split("").sort(C).join("") === t,
        d.detectDuplicates = B,
        l(),
        d.sortDetached = jb(function(a) {
            return 1 & a.compareDocumentPosition(m.createElement("div"))
        }),
        jb(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || kb("type|href|height|width",
        function(a, c, d) {
            return d ? b: a.getAttribute(c, "type" === c.toLowerCase() ? 1 : 2)
        }),
        d.attributes && jb(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || kb("value",
        function(a, c, d) {
            return d || "input" !== a.nodeName.toLowerCase() ? b: a.defaultValue
        }),
        jb(function(a) {
            return null == a.getAttribute("disabled")
        }) || kb(M,
        function(a, c, d) {
            var e;
            return d ? b: (e = a.getAttributeNode(c)) && e.specified ? e.value: a[c] === !0 ? c.toLowerCase() : null
        }),
        u.find = gb,
        u.expr = gb.selectors,
        u.expr[":"] = u.expr.pseudos,
        u.unique = gb.uniqueSort,
        u.text = gb.getText,
        u.isXMLDoc = gb.isXML,
        u.contains = gb.contains
    } (a);
    var K = {};
    function L(a) {
        var b = K[a] = {};
        return u.each(a.match(w) || [],
        function(a, c) {
            b[c] = !0
        }),
        b
    }
    u.Callbacks = function(a) {
        a = "string" == typeof a ? K[a] || L(a) : u.extend({},
        a);
        var c, d, e, f, g, h, i = [],
        j = !a.once && [],
        k = function(b) {
            for (d = a.memory && b, e = !0, g = h || 0, h = 0, f = i.length, c = !0; i && f > g; g++) if (i[g].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                d = !1;
                break
            }
            c = !1,
            i && (j ? j.length && k(j.shift()) : d ? i = [] : l.disable())
        },
        l = {
            add: function() {
                if (i) {
                    var b = i.length; (function e(b) {
                        u.each(b,
                        function(b, c) {
                            var d = u.type(c);
                            "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && e(c)
                        })
                    })(arguments),
                    c ? f = i.length: d && (h = b, k(d))
                }
                return this
            },
            remove: function() {
                return i && u.each(arguments,
                function(a, b) {
                    var d;
                    while ((d = u.inArray(b, i, d)) > -1) i.splice(d, 1),
                    c && (f >= d && f--, g >= d && g--)
                }),
                this
            },
            has: function(a) {
                return a ? u.inArray(a, i) > -1 : !(!i || !i.length)
            },
            empty: function() {
                return i = [],
                f = 0,
                this
            },
            disable: function() {
                return i = j = d = b,
                this
            },
            disabled: function() {
                return ! i
            },
            lock: function() {
                return j = b,
                d || l.disable(),
                this
            },
            locked: function() {
                return ! j
            },
            fireWith: function(a, b) {
                return ! i || e && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], c ? j.push(b) : k(b)),
                this
            },
            fire: function() {
                return l.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! e
            }
        };
        return l
    },
    u.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", u.Callbacks("once memory"), "resolved"], ["reject", "fail", u.Callbacks("once memory"), "rejected"], ["notify", "progress", u.Callbacks("memory")]],
            c = "pending",
            d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return u.Deferred(function(c) {
                        u.each(b,
                        function(b, f) {
                            var g = f[0],
                            h = u.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = h && h.apply(this, arguments);
                                a && u.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [a] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? u.extend(a, d) : d
                }
            },
            e = {};
            return d.pipe = d.then,
            u.each(b,
            function(a, f) {
                var g = f[2],
                h = f[3];
                d[f[1]] = g.add,
                h && g.add(function() {
                    c = h
                },
                b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d: this, arguments),
                    this
                },
                e[f[0] + "With"] = g.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b = 0,
            c = p.call(arguments),
            d = c.length,
            e = 1 !== d || a && u.isFunction(a.promise) ? d: 0,
            f = 1 === e ? a: u.Deferred(),
            g = function(a, b, c) {
                return function(d) {
                    b[a] = this,
                    c[a] = arguments.length > 1 ? p.call(arguments) : d,
                    c === h ? f.notifyWith(b, c) : --e || f.resolveWith(b, c)
                }
            },
            h,
            i,
            j;
            if (d > 1) for (h = Array(d), i = Array(d), j = Array(d); d > b; b++) c[b] && u.isFunction(c[b].promise) ? c[b].promise().done(g(b, j, c)).fail(f.reject).progress(g(b, i, h)) : --e;
            return e || f.resolveWith(j, c),
            f.promise()
        }
    }),
    u.support = function(b) {
        var c, d, f, h, i, j, k, l, m, n = g.createElement("div");
        if (n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = n.getElementsByTagName("*") || [], d = n.getElementsByTagName("a")[0], !d || !d.style || !c.length) return b;
        h = g.createElement("select"),
        j = h.appendChild(g.createElement("option")),
        f = n.getElementsByTagName("input")[0],
        d.style.cssText = "top:1px;float:left;opacity:.5",
        b.getSetAttribute = "t" !== n.className,
        b.leadingWhitespace = 3 === n.firstChild.nodeType,
        b.tbody = !n.getElementsByTagName("tbody").length,
        b.htmlSerialize = !!n.getElementsByTagName("link").length,
        b.style = /top/.test(d.getAttribute("style")),
        b.hrefNormalized = "/a" === d.getAttribute("href"),
        b.opacity = /^0.5/.test(d.style.opacity),
        b.cssFloat = !!d.style.cssFloat,
        b.checkOn = !!f.value,
        b.optSelected = j.selected,
        b.enctype = !!g.createElement("form").enctype,
        b.html5Clone = "<:nav></:nav>" !== g.createElement("nav").cloneNode(!0).outerHTML,
        b.inlineBlockNeedsLayout = !1,
        b.shrinkWrapBlocks = !1,
        b.pixelPosition = !1,
        b.deleteExpando = !0,
        b.noCloneEvent = !0,
        b.reliableMarginRight = !0,
        b.boxSizingReliable = !0,
        f.checked = !0,
        b.noCloneChecked = f.cloneNode(!0).checked,
        h.disabled = !0,
        b.optDisabled = !j.disabled;
        try {
            delete n.test
        } catch(o) {
            b.deleteExpando = !1
        }
        f = g.createElement("input"),
        f.setAttribute("value", ""),
        b.input = "" === f.getAttribute("value"),
        f.value = "t",
        f.setAttribute("type", "radio"),
        b.radioValue = "t" === f.value,
        f.setAttribute("checked", "t"),
        f.setAttribute("name", "t"),
        i = g.createDocumentFragment(),
        i.appendChild(f),
        b.appendChecked = f.checked,
        b.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked,
        n.attachEvent && (n.attachEvent("onclick",
        function() {
            b.noCloneEvent = !1
        }), n.cloneNode(!0).click());
        for (m in {
            submit: !0,
            change: !0,
            focusin: !0
        }) n.setAttribute(k = "on" + m, "t"),
        b[m + "Bubbles"] = k in a || n.attributes[k].expando === !1;
        n.style.backgroundClip = "content-box",
        n.cloneNode(!0).style.backgroundClip = "",
        b.clearCloneStyle = "content-box" === n.style.backgroundClip;
        for (m in u(b)) break;
        return b.ownLast = "0" !== m,
        u(function() {
            var c, d, f, h = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
            i = g.getElementsByTagName("body")[0];
            i && (c = g.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", i.appendChild(c).appendChild(n), n.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", f = n.getElementsByTagName("td"), f[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = 0 === f[0].offsetHeight, f[0].style.display = "", f[1].style.display = "none", b.reliableHiddenOffsets = l && 0 === f[0].offsetHeight, n.innerHTML = "", n.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", u.swap(i, null != i.style.zoom ? {
                zoom: 1
            }: {},
            function() {
                b.boxSizing = 4 === n.offsetWidth
            }), a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(n, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(n, null) || {
                width: "4px"
            }).width, d = n.appendChild(g.createElement("div")), d.style.cssText = n.style.cssText = h, d.style.marginRight = d.style.width = "0", n.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight)), typeof n.style.zoom !== e && (n.innerHTML = "", n.style.cssText = h + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = 3 === n.offsetWidth, n.style.display = "block", n.innerHTML = "<div></div>", n.firstChild.style.width = "5px", b.shrinkWrapBlocks = 3 !== n.offsetWidth, b.inlineBlockNeedsLayout && (i.style.zoom = 1)), i.removeChild(c), c = n = f = d = null)
        }),
        c = h = i = j = d = f = null,
        b
    } ({});
    var M = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    N = /([A-Z])/g;
    function O(a, c, d, e) {
        if (u.acceptData(a)) {
            var f, g, h = u.expando,
            i = a.nodeType,
            j = i ? u.cache: a,
            k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || d !== b || "string" != typeof c) return k || (k = i ? a[h] = l.pop() || u.guid++:h),
            j[k] || (j[k] = i ? {}: {
                toJSON: u.noop
            }),
            ("object" == typeof c || "function" == typeof c) && (e ? j[k] = u.extend(j[k], c) : j[k].data = u.extend(j[k].data, c)),
            g = j[k],
            e || (g.data || (g.data = {}), g = g.data),
            d !== b && (g[u.camelCase(c)] = d),
            "string" == typeof c ? (f = g[c], null == f && (f = g[u.camelCase(c)])) : f = g,
            f
        }
    }
    function P(a, b, c) {
        if (u.acceptData(a)) {
            var d, e, f = a.nodeType,
            g = f ? u.cache: a,
            h = f ? a[u.expando] : u.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    u.isArray(b) ? b = b.concat(u.map(b, u.camelCase)) : b in d ? b = [b] : (b = u.camelCase(b), b = b in d ? [b] : b.split(" ")),
                    e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !R(d) : !u.isEmptyObject(d)) return
                } (c || (delete g[h].data, R(g[h]))) && (f ? u.cleanData([a], !0) : u.support.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    u.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? u.cache[a[u.expando]] : a[u.expando],
            !!a && !R(a)
        },
        data: function(a, b, c) {
            return O(a, b, c)
        },
        removeData: function(a, b) {
            return P(a, b)
        },
        _data: function(a, b, c) {
            return O(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return P(a, b, !0)
        },
        acceptData: function(a) {
            if (a.nodeType && 1 !== a.nodeType && 9 !== a.nodeType) return ! 1;
            var b = a.nodeName && u.noData[a.nodeName.toLowerCase()];
            return ! b || b !== !0 && a.getAttribute("classid") === b
        }
    }),
    u.fn.extend({
        data: function(a, c) {
            var d, e, f = null,
            g = 0,
            h = this[0];
            if (a === b) {
                if (this.length && (f = u.data(h), 1 === h.nodeType && !u._data(h, "parsedAttrs"))) {
                    for (d = h.attributes; d.length > g; g++) e = d[g].name,
                    0 === e.indexOf("data-") && (e = u.camelCase(e.slice(5)), Q(h, e, f[e]));
                    u._data(h, "parsedAttrs", !0)
                }
                return f
            }
            return "object" == typeof a ? this.each(function() {
                u.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                u.data(this, a, c)
            }) : h ? Q(h, a, u.data(h, a)) : null
        },
        removeData: function(a) {
            return this.each(function() {
                u.removeData(this, a)
            })
        }
    });
    function Q(a, c, d) {
        if (d === b && 1 === a.nodeType) {
            var e = "data-" + c.replace(N, "-$1").toLowerCase();
            if (d = a.getAttribute(e), "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null: +d + "" === d ? +d: M.test(d) ? u.parseJSON(d) : d
                } catch(f) {}
                u.data(a, c, d)
            } else d = b
        }
        return d
    }
    function R(a) {
        var b;
        for (b in a) if (("data" !== b || !u.isEmptyObject(a[b])) && "toJSON" !== b) return ! 1;
        return ! 0
    }
    u.extend({
        queue: function(a, c, d) {
            var e;
            return a ? (c = (c || "fx") + "queue", e = u._data(a, c), d && (!e || u.isArray(d) ? e = u._data(a, c, u.makeArray(d)) : e.push(d)), e || []) : b
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = u.queue(a, b),
            d = c.length,
            e = c.shift(),
            f = u._queueHooks(a, b),
            g = function() {
                u.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--),
            e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return u._data(a, c) || u._data(a, c, {
                empty: u.Callbacks("once memory").add(function() {
                    u._removeData(a, b + "queue"),
                    u._removeData(a, c)
                })
            })
        }
    }),
    u.fn.extend({
        queue: function(a, c) {
            var d = 2;
            return "string" != typeof a && (c = a, a = "fx", d--),
            d > arguments.length ? u.queue(this[0], a) : c === b ? this: this.each(function() {
                var b = u.queue(this, a, c);
                u._queueHooks(this, a),
                "fx" === a && "inprogress" !== b[0] && u.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                u.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            return a = u.fx ? u.fx.speeds[a] || a: a,
            b = b || "fx",
            this.queue(b,
            function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            var d, e = 1,
            f = u.Deferred(),
            g = this,
            h = this.length,
            i = function() {--e || f.resolveWith(g, [g])
            };
            "string" != typeof a && (c = a, a = b),
            a = a || "fx";
            while (h--) d = u._data(g[h], a + "queueHooks"),
            d && d.empty && (e++, d.empty.add(i));
            return i(),
            f.promise(c)
        }
    });
    var S, T, U = /[\t\r\n\f]/g,
    V = /\r/g,
    W = /^(?:input|select|textarea|button|object)$/i,
    X = /^(?:a|area)$/i,
    Y = /^(?:checked|selected)$/i,
    Z = u.support.getSetAttribute,
    $ = u.support.input;
    u.fn.extend({
        attr: function(a, b) {
            return u.access(this, u.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                u.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return u.access(this, u.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = u.propFix[a] || a,
            this.each(function() {
                try {
                    this[a] = b,
                    delete this[a]
                } catch(c) {}
            })
        },
        addClass: function(a) {
            var b, c, d, e, f, g = 0,
            h = this.length,
            i = "string" == typeof a && a;
            if (u.isFunction(a)) return this.each(function(b) {
                u(this).addClass(a.call(this, b, this.className))
            });
            if (i) for (b = (a || "").match(w) || []; h > g; g++) if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(U, " ") : " ")) {
                f = 0;
                while (e = b[f++]) 0 > d.indexOf(" " + e + " ") && (d += e + " ");
                c.className = u.trim(d)
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g = 0,
            h = this.length,
            i = 0 === arguments.length || "string" == typeof a && a;
            if (u.isFunction(a)) return this.each(function(b) {
                u(this).removeClass(a.call(this, b, this.className))
            });
            if (i) for (b = (a || "").match(w) || []; h > g; g++) if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(U, " ") : "")) {
                f = 0;
                while (e = b[f++]) while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                c.className = a ? u.trim(d) : ""
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : u.isFunction(a) ? this.each(function(c) {
                u(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function() {
                if ("string" === c) {
                    var b, d = 0,
                    f = u(this),
                    g = a.match(w) || [];
                    while (b = g[d++]) f.hasClass(b) ? f.removeClass(b) : f.addClass(b)
                } else(c === e || "boolean" === c) && (this.className && u._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "": u._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            var b = " " + a + " ",
            c = 0,
            d = this.length;
            for (; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(U, " ").indexOf(b) >= 0) return ! 0;
            return ! 1
        },
        val: function(a) {
            var c, d, e, f = this[0]; {
                if (arguments.length) return e = u.isFunction(a),
                this.each(function(c) {
                    var f;
                    1 === this.nodeType && (f = e ? a.call(this, c, u(this).val()) : a, null == f ? f = "": "number" == typeof f ? f += "": u.isArray(f) && (f = u.map(f,
                    function(a) {
                        return null == a ? "": a + ""
                    })), d = u.valHooks[this.type] || u.valHooks[this.nodeName.toLowerCase()], d && "set" in d && d.set(this, f, "value") !== b || (this.value = f))
                });
                if (f) return d = u.valHooks[f.type] || u.valHooks[f.nodeName.toLowerCase()],
                d && "get" in d && (c = d.get(f, "value")) !== b ? c: (c = f.value, "string" == typeof c ? c.replace(V, "") : null == c ? "": c)
            }
        }
    }),
    u.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = u.find.attr(a, "value");
                    return null != b ? b: a.text
                }
            },
            select: {
                get: function(a) {
                    var b, c, d = a.options,
                    e = a.selectedIndex,
                    f = "select-one" === a.type || 0 > e,
                    g = f ? null: [],
                    h = f ? e + 1 : d.length,
                    i = 0 > e ? h: f ? e: 0;
                    for (; h > i; i++) if (c = d[i], !(!c.selected && i !== e || (u.support.optDisabled ? c.disabled: null !== c.getAttribute("disabled")) || c.parentNode.disabled && u.nodeName(c.parentNode, "optgroup"))) {
                        if (b = u(c).val(), f) return b;
                        g.push(b)
                    }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                    f = u.makeArray(b),
                    g = e.length;
                    while (g--) d = e[g],
                    (d.selected = u.inArray(u(d).val(), f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1),
                    f
                }
            }
        },
        attr: function(a, c, d) {
            var f, g, h = a.nodeType;
            if (a && 3 !== h && 8 !== h && 2 !== h) return typeof a.getAttribute === e ? u.prop(a, c, d) : (1 === h && u.isXMLDoc(a) || (c = c.toLowerCase(), f = u.attrHooks[c] || (u.expr.match.bool.test(c) ? T: S)), d === b ? f && "get" in f && null !== (g = f.get(a, c)) ? g: (g = u.find.attr(a, c), null == g ? b: g) : null !== d ? f && "set" in f && (g = f.set(a, d, c)) !== b ? g: (a.setAttribute(c, d + ""), d) : (u.removeAttr(a, c), b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
            f = b && b.match(w);
            if (f && 1 === a.nodeType) while (c = f[e++]) d = u.propFix[c] || c,
            u.expr.match.bool.test(c) ? $ && Z || !Y.test(c) ? a[d] = !1 : a[u.camelCase("default-" + c)] = a[d] = !1 : u.attr(a, c, ""),
            a.removeAttribute(Z ? c: d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!u.support.radioValue && "radio" === b && u.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            if (a && 3 !== h && 8 !== h && 2 !== h) return g = 1 !== h || !u.isXMLDoc(a),
            g && (c = u.propFix[c] || c, f = u.propHooks[c]),
            d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e: a[c] = d: f && "get" in f && null !== (e = f.get(a, c)) ? e: a[c]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = u.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : W.test(a.nodeName) || X.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }),
    T = {
        set: function(a, b, c) {
            return b === !1 ? u.removeAttr(a, c) : $ && Z || !Y.test(c) ? a.setAttribute(!Z && u.propFix[c] || c, c) : a[u.camelCase("default-" + c)] = a[c] = !0,
            c
        }
    },
    u.each(u.expr.match.bool.source.match(/\w+/g),
    function(a, c) {
        var d = u.expr.attrHandle[c] || u.find.attr;
        u.expr.attrHandle[c] = $ && Z || !Y.test(c) ?
        function(a, c, e) {
            var f = u.expr.attrHandle[c],
            g = e ? b: (u.expr.attrHandle[c] = b) != d(a, c, e) ? c.toLowerCase() : null;
            return u.expr.attrHandle[c] = f,
            g
        }: function(a, c, d) {
            return d ? b: a[u.camelCase("default-" + c)] ? c.toLowerCase() : null
        }
    }),
    $ && Z || (u.attrHooks.value = {
        set: function(a, c, d) {
            return u.nodeName(a, "input") ? (a.defaultValue = c, b) : S && S.set(a, c, d)
        }
    }),
    Z || (S = {
        set: function(a, c, d) {
            var e = a.getAttributeNode(d);
            return e || a.setAttributeNode(e = a.ownerDocument.createAttribute(d)),
            e.value = c += "",
            "value" === d || c === a.getAttribute(d) ? c: b
        }
    },
    u.expr.attrHandle.id = u.expr.attrHandle.name = u.expr.attrHandle.coords = function(a, c, d) {
        var e;
        return d ? b: (e = a.getAttributeNode(c)) && "" !== e.value ? e.value: null
    },
    u.valHooks.button = {
        get: function(a, c) {
            var d = a.getAttributeNode(c);
            return d && d.specified ? d.value: b
        },
        set: S.set
    },
    u.attrHooks.contenteditable = {
        set: function(a, b, c) {
            S.set(a, "" === b ? !1 : b, c)
        }
    },
    u.each(["width", "height"],
    function(a, c) {
        u.attrHooks[c] = {
            set: function(a, d) {
                return "" === d ? (a.setAttribute(c, "auto"), d) : b
            }
        }
    })),
    u.support.hrefNormalized || u.each(["href", "src"],
    function(a, b) {
        u.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }),
    u.support.style || (u.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || b
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    }),
    u.support.optSelected || (u.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex),
            null
        }
    }),
    u.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        u.propFix[this.toLowerCase()] = this
    }),
    u.support.enctype || (u.propFix.enctype = "encoding"),
    u.each(["radio", "checkbox"],
    function() {
        u.valHooks[this] = {
            set: function(a, c) {
                return u.isArray(c) ? a.checked = u.inArray(u(a).val(), c) >= 0 : b
            }
        },
        u.support.checkOn || (u.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on": a.value
        })
    });
    var _ = /^(?:input|select|textarea)$/i,
    ab = /^key/,
    bb = /^(?:mouse|contextmenu)|click/,
    cb = /^(?:focusinfocus|focusoutblur)$/,
    db = /^([^.]*)(?:\.(.+)|)$/;
    function eb() {
        return ! 0
    }
    function fb() {
        return ! 1
    }
    function gb() {
        try {
            return g.activeElement
        } catch(a) {}
    }
    u.event = {
        global: {},
        add: function(a, c, d, f, g) {
            var h, i, j, k, l, m, n, o, p, q, r, s = u._data(a);
            if (s) {
                d.handler && (k = d, d = k.handler, g = k.selector),
                d.guid || (d.guid = u.guid++),
                (i = s.events) || (i = s.events = {}),
                (m = s.handle) || (m = s.handle = function(a) {
                    return typeof u === e || a && u.event.triggered === a.type ? b: u.event.dispatch.apply(m.elem, arguments)
                },
                m.elem = a),
                c = (c || "").match(w) || [""],
                j = c.length;
                while (j--) h = db.exec(c[j]) || [],
                p = r = h[1],
                q = (h[2] || "").split(".").sort(),
                p && (l = u.event.special[p] || {},
                p = (g ? l.delegateType: l.bindType) || p, l = u.event.special[p] || {},
                n = u.extend({
                    type: p,
                    origType: r,
                    data: f,
                    handler: d,
                    guid: d.guid,
                    selector: g,
                    needsContext: g && u.expr.match.needsContext.test(g),
                    namespace: q.join(".")
                },
                k), (o = i[p]) || (o = i[p] = [], o.delegateCount = 0, l.setup && l.setup.call(a, f, q, m) !== !1 || (a.addEventListener ? a.addEventListener(p, m, !1) : a.attachEvent && a.attachEvent("on" + p, m))), l.add && (l.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)), g ? o.splice(o.delegateCount++, 0, n) : o.push(n), u.event.global[p] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = u.hasData(a) && u._data(a);
            if (q && (k = q.events)) {
                b = (b || "").match(w) || [""],
                j = b.length;
                while (j--) if (h = db.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    l = u.event.special[n] || {},
                    n = (d ? l.delegateType: l.bindType) || n,
                    m = k[n] || [],
                    h = h[2] && RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                    i = f = m.length;
                    while (f--) g = m[f],
                    !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                    i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || u.removeEvent(a, n, q.handle), delete k[n])
                } else for (n in k) u.event.remove(a, n + b[j], c, d, !0);
                u.isEmptyObject(k) && (delete q.handle, u._removeData(a, "events"))
            }
        },
        trigger: function(c, d, e, f) {
            var h, i, j, k, l, m, n, o = [e || g],
            p = s.call(c, "type") ? c.type: c,
            q = s.call(c, "namespace") ? c.namespace.split(".") : [];
            if (j = m = e = e || g, 3 !== e.nodeType && 8 !== e.nodeType && !cb.test(p + u.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), i = 0 > p.indexOf(":") && "on" + p, c = c[u.expando] ? c: new u.Event(p, "object" == typeof c && c), c.isTrigger = f ? 2 : 3, c.namespace = q.join("."), c.namespace_re = c.namespace ? RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = b, c.target || (c.target = e), d = null == d ? [c] : u.makeArray(d, [c]), l = u.event.special[p] || {},
            f || !l.trigger || l.trigger.apply(e, d) !== !1)) {
                if (!f && !l.noBubble && !u.isWindow(e)) {
                    for (k = l.delegateType || p, cb.test(k + p) || (j = j.parentNode); j; j = j.parentNode) o.push(j),
                    m = j;
                    m === (e.ownerDocument || g) && o.push(m.defaultView || m.parentWindow || a)
                }
                n = 0;
                while ((j = o[n++]) && !c.isPropagationStopped()) c.type = n > 1 ? k: l.bindType || p,
                h = (u._data(j, "events") || {})[c.type] && u._data(j, "handle"),
                h && h.apply(j, d),
                h = i && j[i],
                h && u.acceptData(j) && h.apply && h.apply(j, d) === !1 && c.preventDefault();
                if (c.type = p, !f && !c.isDefaultPrevented() && (!l._default || l._default.apply(o.pop(), d) === !1) && u.acceptData(e) && i && e[p] && !u.isWindow(e)) {
                    m = e[i],
                    m && (e[i] = null),
                    u.event.triggered = p;
                    try {
                        e[p]()
                    } catch(r) {}
                    u.event.triggered = b,
                    m && (e[i] = m)
                }
                return c.result
            }
        },
        dispatch: function(a) {
            a = u.event.fix(a);
            var c, d, e, f, g, h = [],
            i = p.call(arguments),
            j = (u._data(this, "events") || {})[a.type] || [],
            k = u.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = u.event.handlers.call(this, a, j),
                c = 0;
                while ((f = h[c++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem,
                    g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, d = ((u.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), d !== b && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(a, c) {
            var d, e, f, g, h = [],
            i = c.delegateCount,
            j = a.target;
            if (i && j.nodeType && (!a.button || "click" !== a.type)) for (; j != this; j = j.parentNode || this) if (1 === j.nodeType && (j.disabled !== !0 || "click" !== a.type)) {
                for (f = [], g = 0; i > g; g++) e = c[g],
                d = e.selector + " ",
                f[d] === b && (f[d] = e.needsContext ? u(d, this).index(j) >= 0 : u.find(d, this, null, [j]).length),
                f[d] && f.push(e);
                f.length && h.push({
                    elem: j,
                    handlers: f
                })
            }
            return c.length > i && h.push({
                elem: this,
                handlers: c.slice(i)
            }),
            h
        },
        fix: function(a) {
            if (a[u.expando]) return a;
            var b, c, d, e = a.type,
            f = a,
            h = this.fixHooks[e];
            h || (this.fixHooks[e] = h = bb.test(e) ? this.mouseHooks: ab.test(e) ? this.keyHooks: {}),
            d = h.props ? this.props.concat(h.props) : this.props,
            a = new u.Event(f),
            b = d.length;
            while (b--) c = d[b],
            a[c] = f[c];
            return a.target || (a.target = f.srcElement || g),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            a.metaKey = !!a.metaKey,
            h.filter ? h.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode: b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, c) {
                var d, e, f, h = c.button,
                i = c.fromElement;
                return null == a.pageX && null != c.clientX && (e = a.target.ownerDocument || g, f = e.documentElement, d = e.body, a.pageX = c.clientX + (f && f.scrollLeft || d && d.scrollLeft || 0) - (f && f.clientLeft || d && d.clientLeft || 0), a.pageY = c.clientY + (f && f.scrollTop || d && d.scrollTop || 0) - (f && f.clientTop || d && d.clientTop || 0)),
                !a.relatedTarget && i && (a.relatedTarget = i === a.target ? c.toElement: i),
                a.which || h === b || (a.which = 1 & h ? 1 : 2 & h ? 3 : 4 & h ? 2 : 0),
                a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== gb() && this.focus) try {
                        return this.focus(),
                        !1
                    } catch(a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === gb() && this.blur ? (this.blur(), !1) : b
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return u.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : b
                },
                _default: function(a) {
                    return u.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    a.result !== b && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = u.extend(new u.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? u.event.trigger(e, null, b) : u.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    },
    u.removeEvent = g.removeEventListener ?
    function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }: function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === e && (a[d] = null), a.detachEvent(d, c))
    },
    u.Event = function(a, c) {
        return this instanceof u.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? eb: fb) : this.type = a, c && u.extend(this, c), this.timeStamp = a && a.timeStamp || u.now(), this[u.expando] = !0, b) : new u.Event(a, c)
    },
    u.Event.prototype = {
        isDefaultPrevented: fb,
        isPropagationStopped: fb,
        isImmediatePropagationStopped: fb,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = eb,
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = eb,
            a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = eb,
            this.stopPropagation()
        }
    },
    u.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(a, b) {
        u.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                e = a.relatedTarget,
                f = a.handleObj;
                return (!e || e !== d && !u.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b),
                c
            }
        }
    }),
    u.support.submitBubbles || (u.event.special.submit = {
        setup: function() {
            return u.nodeName(this, "form") ? !1 : (u.event.add(this, "click._submit keypress._submit",
            function(a) {
                var c = a.target,
                d = u.nodeName(c, "input") || u.nodeName(c, "button") ? c.form: b;
                d && !u._data(d, "submitBubbles") && (u.event.add(d, "submit._submit",
                function(a) {
                    a._submit_bubble = !0
                }), u._data(d, "submitBubbles", !0))
            }), b)
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && u.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return u.nodeName(this, "form") ? !1 : (u.event.remove(this, "._submit"), b)
        }
    }),
    u.support.changeBubbles || (u.event.special.change = {
        setup: function() {
            return _.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (u.event.add(this, "propertychange._change",
            function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), u.event.add(this, "click._change",
            function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1),
                u.event.simulate("change", this, a, !0)
            })), !1) : (u.event.add(this, "beforeactivate._change",
            function(a) {
                var b = a.target;
                _.test(b.nodeName) && !u._data(b, "changeBubbles") && (u.event.add(b, "change._change",
                function(a) { ! this.parentNode || a.isSimulated || a.isTrigger || u.event.simulate("change", this.parentNode, a, !0)
                }), u._data(b, "changeBubbles", !0))
            }), b)
        },
        handle: function(a) {
            var c = a.target;
            return this !== c || a.isSimulated || a.isTrigger || "radio" !== c.type && "checkbox" !== c.type ? a.handleObj.handler.apply(this, arguments) : b
        },
        teardown: function() {
            return u.event.remove(this, "._change"),
            !_.test(this.nodeName)
        }
    }),
    u.support.focusinBubbles || u.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(a, b) {
        var c = 0,
        d = function(a) {
            u.event.simulate(b, a.target, u.event.fix(a), !0)
        };
        u.event.special[b] = {
            setup: function() {
                0 === c++&&g.addEventListener(a, d, !0)
            },
            teardown: function() {
                0 === --c && g.removeEventListener(a, d, !0)
            }
        }
    }),
    u.fn.extend({
        on: function(a, c, d, e, f) {
            var g, h;
            if ("object" == typeof a) {
                "string" != typeof c && (d = d || c, c = b);
                for (g in a) this.on(g, c, d, a[g], f);
                return this
            }
            if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1) e = fb;
            else if (!e) return this;
            return 1 === f && (h = e, e = function(a) {
                return u().off(a),
                h.apply(this, arguments)
            },
            e.guid = h.guid || (h.guid = u.guid++)),
            this.each(function() {
                u.event.add(this, a, e, d, c)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, c, d) {
            var e, f;
            if (a && a.preventDefault && a.handleObj) return e = a.handleObj,
            u(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace: e.origType, e.selector, e.handler),
            this;
            if ("object" == typeof a) {
                for (f in a) this.off(f, c, a[f]);
                return this
            }
            return (c === !1 || "function" == typeof c) && (d = c, c = b),
            d === !1 && (d = fb),
            this.each(function() {
                u.event.remove(this, a, d, c)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                u.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, c) {
            var d = this[0];
            return d ? u.event.trigger(a, c, d, !0) : b
        }
    });
    var hb = /^.[^:#\[\.,]*$/,
    ib = /^(?:parents|prev(?:Until|All))/,
    jb = u.expr.match.needsContext,
    kb = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    u.fn.extend({
        find: function(a) {
            var b, c = [],
            d = this,
            e = d.length;
            if ("string" != typeof a) return this.pushStack(u(a).filter(function() {
                for (b = 0; e > b; b++) if (u.contains(d[b], this)) return ! 0
            }));
            for (b = 0; e > b; b++) u.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? u.unique(c) : c),
            c.selector = this.selector ? this.selector + " " + a: a,
            c
        },
        has: function(a) {
            var b, c = u(a, this),
            d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++) if (u.contains(this, c[b])) return ! 0
            })
        },
        not: function(a) {
            return this.pushStack(mb(this, a || [], !0))
        },
        filter: function(a) {
            return this.pushStack(mb(this, a || [], !1))
        },
        is: function(a) {
            return !! mb(this, "string" == typeof a && jb.test(a) ? u(a) : a || [], !1).length
        },
        closest: function(a, b) {
            var c, d = 0,
            e = this.length,
            f = [],
            g = jb.test(a) || "string" != typeof a ? u(a, b || this.context) : 0;
            for (; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (11 > c.nodeType && (g ? g.index(c) > -1 : 1 === c.nodeType && u.find.matchesSelector(c, a))) {
                c = f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? u.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? u.inArray(this[0], u(a)) : u.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(a, b) {
            var c = "string" == typeof a ? u(a, b) : u.makeArray(a && a.nodeType ? [a] : a),
            d = u.merge(this.get(), c);
            return this.pushStack(u.unique(d))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject: this.prevObject.filter(a))
        }
    });
    function lb(a, b) {
        do a = a[b];
        while (a && 1 !== a.nodeType);
        return a
    }
    u.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b: null
        },
        parents: function(a) {
            return u.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u.dir(a, "parentNode", c)
        },
        next: function(a) {
            return lb(a, "nextSibling")
        },
        prev: function(a) {
            return lb(a, "previousSibling")
        },
        nextAll: function(a) {
            return u.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return u.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return u.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return u.sibling(a.firstChild)
        },
        contents: function(a) {
            return u.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document: u.merge([], a.childNodes)
        }
    },
    function(a, b) {
        u.fn[a] = function(c, d) {
            var e = u.map(this, b, c);
            return "Until" !== a.slice( - 5) && (d = c),
            d && "string" == typeof d && (e = u.filter(d, e)),
            this.length > 1 && (kb[a] || (e = u.unique(e)), ib.test(a) && (e = e.reverse())),
            this.pushStack(e)
        }
    }),
    u.extend({
        filter: function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"),
            1 === b.length && 1 === d.nodeType ? u.find.matchesSelector(d, a) ? [d] : [] : u.find.matches(a, u.grep(b,
            function(a) {
                return 1 === a.nodeType
            }))
        },
        dir: function(a, c, d) {
            var e = [],
            f = a[c];
            while (f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !u(f).is(d))) 1 === f.nodeType && e.push(f),
            f = f[c];
            return e
        },
        sibling: function(a, b) {
            var c = [];
            for (; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    function mb(a, b, c) {
        if (u.isFunction(b)) return u.grep(a,
        function(a, d) {
            return !! b.call(a, d, a) !== c
        });
        if (b.nodeType) return u.grep(a,
        function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (hb.test(b)) return u.filter(b, a, c);
            b = u.filter(b, a)
        }
        return u.grep(a,
        function(a) {
            return u.inArray(a, b) >= 0 !== c
        })
    }
    function nb(a) {
        var b = ob.split("|"),
        c = a.createDocumentFragment();
        if (c.createElement) while (b.length) c.createElement(b.pop());
        return c
    }
    var ob = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    pb = / jQuery\d+="(?:null|\d+)"/g,
    qb = RegExp("<(?:" + ob + ")[\\s/>]", "i"),
    rb = /^\s+/,
    sb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    tb = /<([\w:]+)/,
    ub = /<tbody/i,
    vb = /<|&#?\w+;/,
    wb = /<(?:script|style|link)/i,
    xb = /^(?:checkbox|radio)$/i,
    yb = /checked\s*(?:[^=]|=\s*.checked.)/i,
    zb = /^$|\/(?:java|ecma)script/i,
    Ab = /^true\/(.*)/,
    Bb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Cb = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: u.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    Db = nb(g),
    Eb = Db.appendChild(g.createElement("div"));
    Cb.optgroup = Cb.option,
    Cb.tbody = Cb.tfoot = Cb.colgroup = Cb.caption = Cb.thead,
    Cb.th = Cb.td,
    u.fn.extend({
        text: function(a) {
            return u.access(this,
            function(a) {
                return a === b ? u.text(this) : this.empty().append((this[0] && this[0].ownerDocument || g).createTextNode(a))
            },
            null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments,
            function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Fb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments,
            function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Fb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments,
            function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments,
            function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            var c, d = a ? u.filter(a, this) : this,
            e = 0;
            for (; null != (c = d[e]); e++) b || 1 !== c.nodeType || u.cleanData(Lb(c)),
            c.parentNode && (b && u.contains(c.ownerDocument, c) && Ib(Lb(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            var a, b = 0;
            for (; null != (a = this[b]); b++) {
                1 === a.nodeType && u.cleanData(Lb(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && u.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a,
            b = null == b ? a: b,
            this.map(function() {
                return u.clone(this, a, b)
            })
        },
        html: function(a) {
            return u.access(this,
            function(a) {
                var c = this[0] || {},
                d = 0,
                e = this.length;
                if (a === b) return 1 === c.nodeType ? c.innerHTML.replace(pb, "") : b;
                if (! ("string" != typeof a || wb.test(a) || !u.support.htmlSerialize && qb.test(a) || !u.support.leadingWhitespace && rb.test(a) || Cb[(tb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(sb, "<$1></$2>");
                    try {
                        for (; e > d; d++) c = this[d] || {},
                        1 === c.nodeType && (u.cleanData(Lb(c, !1)), c.innerHTML = a);
                        c = 0
                    } catch(f) {}
                }
                c && this.empty().append(a)
            },
            null, a, arguments.length)
        },
        replaceWith: function() {
            var a = u.map(this,
            function(a) {
                return [a.nextSibling, a.parentNode]
            }),
            b = 0;
            return this.domManip(arguments,
            function(c) {
                var d = a[b++],
                e = a[b++];
                e && (d && d.parentNode !== e && (d = this.nextSibling), u(this).remove(), e.insertBefore(c, d))
            },
            !0),
            b ? this: this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b, c) {
            a = n.apply([], a);
            var d, e, f, g, h, i, j = 0,
            k = this.length,
            l = this,
            m = k - 1,
            o = a[0],
            p = u.isFunction(o);
            if (p || !(1 >= k || "string" != typeof o || u.support.checkClone) && yb.test(o)) return this.each(function(d) {
                var e = l.eq(d);
                p && (a[0] = o.call(this, d, e.html())),
                e.domManip(a, b, c)
            });
            if (k && (i = u.buildFragment(a, this[0].ownerDocument, !1, !c && this), d = i.firstChild, 1 === i.childNodes.length && (i = d), d)) {
                for (g = u.map(Lb(i, "script"), Gb), f = g.length; k > j; j++) e = i,
                j !== m && (e = u.clone(e, !0, !0), f && u.merge(g, Lb(e, "script"))),
                b.call(this[j], e, j);
                if (f) for (h = g[g.length - 1].ownerDocument, u.map(g, Hb), j = 0; f > j; j++) e = g[j],
                zb.test(e.type || "") && !u._data(e, "globalEval") && u.contains(h, e) && (e.src ? u._evalUrl(e.src) : u.globalEval((e.text || e.textContent || e.innerHTML || "").replace(Bb, "")));
                i = d = null
            }
            return this
        }
    });
    function Fb(a, b) {
        return u.nodeName(a, "table") && u.nodeName(1 === b.nodeType ? b: b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function Gb(a) {
        return a.type = (null !== u.find.attr(a, "type")) + "/" + a.type,
        a
    }
    function Hb(a) {
        var b = Ab.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function Ib(a, b) {
        var c, d = 0;
        for (; null != (c = a[d]); d++) u._data(c, "globalEval", !b || u._data(b[d], "globalEval"))
    }
    function Jb(a, b) {
        if (1 === b.nodeType && u.hasData(a)) {
            var c, d, e, f = u._data(a),
            g = u._data(b, f),
            h = f.events;
            if (h) {
                delete g.handle,
                g.events = {};
                for (c in h) for (d = 0, e = h[c].length; e > d; d++) u.event.add(b, c, h[c][d])
            }
            g.data && (g.data = u.extend({},
            g.data))
        }
    }
    function Kb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !u.support.noCloneEvent && b[u.expando]) {
                e = u._data(b);
                for (d in e.events) u.removeEvent(b, d, e.handle);
                b.removeAttribute(u.expando)
            }
            "script" === c && b.text !== a.text ? (Gb(b).text = a.text, Hb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), u.support.html5Clone && a.innerHTML && !u.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && xb.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected: ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    u.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(a, b) {
        u.fn[a] = function(a) {
            var c, d = 0,
            e = [],
            f = u(a),
            g = f.length - 1;
            for (; g >= d; d++) c = d === g ? this: this.clone(!0),
            u(f[d])[b](c),
            o.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    function Lb(a, c) {
        var d, f, g = 0,
        h = typeof a.getElementsByTagName !== e ? a.getElementsByTagName(c || "*") : typeof a.querySelectorAll !== e ? a.querySelectorAll(c || "*") : b;
        if (!h) for (h = [], d = a.childNodes || a; null != (f = d[g]); g++) ! c || u.nodeName(f, c) ? h.push(f) : u.merge(h, Lb(f, c));
        return c === b || c && u.nodeName(a, c) ? u.merge([a], h) : h
    }
    function Mb(a) {
        xb.test(a.type) && (a.defaultChecked = a.checked)
    }
    u.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = u.contains(a.ownerDocument, a);
            if (u.support.html5Clone || u.isXMLDoc(a) || !qb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Eb.innerHTML = a.outerHTML, Eb.removeChild(f = Eb.firstChild)), !(u.support.noCloneEvent && u.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || u.isXMLDoc(a))) for (d = Lb(f), h = Lb(a), g = 0; null != (e = h[g]); ++g) d[g] && Kb(e, d[g]);
            if (b) if (c) for (h = h || Lb(a), d = d || Lb(f), g = 0; null != (e = h[g]); g++) Jb(e, d[g]);
            else Jb(a, f);
            return d = Lb(f, "script"),
            d.length > 0 && Ib(d, !i && Lb(a, "script")),
            d = h = e = null,
            f
        },
        buildFragment: function(a, b, c, d) {
            var e, f, g, h, i, j, k, l = a.length,
            m = nb(b),
            n = [],
            o = 0;
            for (; l > o; o++) if (f = a[o], f || 0 === f) if ("object" === u.type(f)) u.merge(n, f.nodeType ? [f] : f);
            else if (vb.test(f)) {
                h = h || m.appendChild(b.createElement("div")),
                i = (tb.exec(f) || ["", ""])[1].toLowerCase(),
                k = Cb[i] || Cb._default,
                h.innerHTML = k[1] + f.replace(sb, "<$1></$2>") + k[2],
                e = k[0];
                while (e--) h = h.lastChild;
                if (!u.support.leadingWhitespace && rb.test(f) && n.push(b.createTextNode(rb.exec(f)[0])), !u.support.tbody) {
                    f = "table" !== i || ub.test(f) ? "<table>" !== k[1] || ub.test(f) ? 0 : h: h.firstChild,
                    e = f && f.childNodes.length;
                    while (e--) u.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                }
                u.merge(n, h.childNodes),
                h.textContent = "";
                while (h.firstChild) h.removeChild(h.firstChild);
                h = m.lastChild
            } else n.push(b.createTextNode(f));
            h && m.removeChild(h),
            u.support.appendChecked || u.grep(Lb(n, "input"), Mb),
            o = 0;
            while (f = n[o++]) if ((!d || -1 === u.inArray(f, d)) && (g = u.contains(f.ownerDocument, f), h = Lb(m.appendChild(f), "script"), g && Ib(h), c)) {
                e = 0;
                while (f = h[e++]) zb.test(f.type || "") && c.push(f)
            }
            return h = null,
            m
        },
        cleanData: function(a, b) {
            var c, d, f, g, h = 0,
            i = u.expando,
            j = u.cache,
            k = u.support.deleteExpando,
            m = u.event.special;
            for (; null != (c = a[h]); h++) if ((b || u.acceptData(c)) && (f = c[i], g = f && j[f])) {
                if (g.events) for (d in g.events) m[d] ? u.event.remove(c, d) : u.removeEvent(c, d, g.handle);
                j[f] && (delete j[f], k ? delete c[i] : typeof c.removeAttribute !== e ? c.removeAttribute(i) : c[i] = null, l.push(f))
            }
        },
        _evalUrl: function(a) {
            return u.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }),
    u.fn.extend({
        wrapAll: function(a) {
            if (u.isFunction(a)) return this.each(function(b) {
                u(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = u(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]),
                b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return u.isFunction(a) ? this.each(function(b) {
                u(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = u(this),
                c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = u.isFunction(a);
            return this.each(function(c) {
                u(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                u.nodeName(this, "body") || u(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var Nb, Ob, Pb, Qb = /alpha\([^)]*\)/i,
    Rb = /opacity\s*=\s*([^)]*)/,
    Sb = /^(top|right|bottom|left)$/,
    Tb = /^(none|table(?!-c[ea]).+)/,
    Ub = /^margin/,
    Vb = RegExp("^(" + v + ")(.*)$", "i"),
    Wb = RegExp("^(" + v + ")(?!px)[a-z%]+$", "i"),
    Xb = RegExp("^([+-])=(" + v + ")", "i"),
    Yb = {
        BODY: "block"
    },
    Zb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    $b = {
        letterSpacing: 0,
        fontWeight: 400
    },
    _b = ["Top", "Right", "Bottom", "Left"],
    ac = ["Webkit", "O", "Moz", "ms"];
    function bc(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1),
        d = b,
        e = ac.length;
        while (e--) if (b = ac[e] + c, b in a) return b;
        return d
    }
    function cc(a, b) {
        return a = b || a,
        "none" === u.css(a, "display") || !u.contains(a.ownerDocument, a)
    }
    function dc(a, b) {
        var c, d, e, f = [],
        g = 0,
        h = a.length;
        for (; h > g; g++) d = a[g],
        d.style && (f[g] = u._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && cc(d) && (f[g] = u._data(d, "olddisplay", hc(d.nodeName)))) : f[g] || (e = cc(d), (c && "none" !== c || !e) && u._data(d, "olddisplay", e ? c: u.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g],
        d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "": "none"));
        return a
    }
    u.fn.extend({
        css: function(a, c) {
            return u.access(this,
            function(a, c, d) {
                var e, f, g = {},
                h = 0;
                if (u.isArray(c)) {
                    for (f = Ob(a), e = c.length; e > h; h++) g[c[h]] = u.css(a, c[h], !1, f);
                    return g
                }
                return d !== b ? u.style(a, c, d) : u.css(a, c)
            },
            a, c, arguments.length > 1)
        },
        show: function() {
            return dc(this, !0)
        },
        hide: function() {
            return dc(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                cc(this) ? u(this).show() : u(this).hide()
            })
        }
    }),
    u.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Pb(a, "opacity");
                        return "" === c ? "1": c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": u.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, i = u.camelCase(c),
                j = a.style;
                if (c = u.cssProps[i] || (u.cssProps[i] = bc(j, i)), h = u.cssHooks[c] || u.cssHooks[i], d === b) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f: j[c];
                if (g = typeof d, "string" === g && (f = Xb.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(u.css(a, c)), g = "number"), !(null == d || "number" === g && isNaN(d) || ("number" !== g || u.cssNumber[i] || (d += "px"), u.support.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (j[c] = "inherit"), h && "set" in h && (d = h.set(a, d, e)) === b))) try {
                    j[c] = d
                } catch(k) {}
            }
        },
        css: function(a, c, d, e) {
            var f, g, h, i = u.camelCase(c);
            return c = u.cssProps[i] || (u.cssProps[i] = bc(a.style, i)),
            h = u.cssHooks[c] || u.cssHooks[i],
            h && "get" in h && (g = h.get(a, !0, d)),
            g === b && (g = Pb(a, c, e)),
            "normal" === g && c in $b && (g = $b[c]),
            "" === d || d ? (f = parseFloat(g), d === !0 || u.isNumeric(f) ? f || 0 : g) : g
        }
    }),
    a.getComputedStyle ? (Ob = function(b) {
        return a.getComputedStyle(b, null)
    },
    Pb = function(a, c, d) {
        var e, f, g, h = d || Ob(a),
        i = h ? h.getPropertyValue(c) || h[c] : b,
        j = a.style;
        return h && ("" !== i || u.contains(a.ownerDocument, a) || (i = u.style(a, c)), Wb.test(i) && Ub.test(c) && (e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = i, i = h.width, j.width = e, j.minWidth = f, j.maxWidth = g)),
        i
    }) : g.documentElement.currentStyle && (Ob = function(a) {
        return a.currentStyle
    },
    Pb = function(a, c, d) {
        var e, f, g, h = d || Ob(a),
        i = h ? h[c] : b,
        j = a.style;
        return null == i && j && j[c] && (i = j[c]),
        Wb.test(i) && !Sb.test(c) && (e = j.left, f = a.runtimeStyle, g = f && f.left, g && (f.left = a.currentStyle.left), j.left = "fontSize" === c ? "1em": i, i = j.pixelLeft + "px", j.left = e, g && (f.left = g)),
        "" === i ? "auto": i
    });
    function ec(a, b, c) {
        var d = Vb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function fc(a, b, c, d, e) {
        var f = c === (d ? "border": "content") ? 4 : "width" === b ? 1 : 0,
        g = 0;
        for (; 4 > f; f += 2)"margin" === c && (g += u.css(a, c + _b[f], !0, e)),
        d ? ("content" === c && (g -= u.css(a, "padding" + _b[f], !0, e)), "margin" !== c && (g -= u.css(a, "border" + _b[f] + "Width", !0, e))) : (g += u.css(a, "padding" + _b[f], !0, e), "padding" !== c && (g += u.css(a, "border" + _b[f] + "Width", !0, e)));
        return g
    }
    function gc(a, b, c) {
        var d = !0,
        e = "width" === b ? a.offsetWidth: a.offsetHeight,
        f = Ob(a),
        g = u.support.boxSizing && "border-box" === u.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Pb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Wb.test(e)) return e;
            d = g && (u.support.boxSizingReliable || e === a.style[b]),
            e = parseFloat(e) || 0
        }
        return e + fc(a, b, c || (g ? "border": "content"), d, f) + "px"
    }
    function hc(a) {
        var b = g,
        c = Yb[a];
        return c || (c = ic(a, b), "none" !== c && c || (Nb = (Nb || u("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), b = (Nb[0].contentWindow || Nb[0].contentDocument).document, b.write("<!doctype html><html><body>"), b.close(), c = ic(a, b), Nb.detach()), Yb[a] = c),
        c
    }
    function ic(a, b) {
        var c = u(b.createElement(a)).appendTo(b.body),
        d = u.css(c[0], "display");
        return c.remove(),
        d
    }
    u.each(["height", "width"],
    function(a, c) {
        u.cssHooks[c] = {
            get: function(a, d, e) {
                return d ? 0 === a.offsetWidth && Tb.test(u.css(a, "display")) ? u.swap(a, Zb,
                function() {
                    return gc(a, c, e)
                }) : gc(a, c, e) : b
            },
            set: function(a, b, d) {
                var e = d && Ob(a);
                return ec(a, b, d ? fc(a, c, d, u.support.boxSizing && "border-box" === u.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }),
    u.support.opacity || (u.cssHooks.opacity = {
        get: function(a, b) {
            return Rb.test((b && a.currentStyle ? a.currentStyle.filter: a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": b ? "1": ""
        },
        set: function(a, b) {
            var c = a.style,
            d = a.currentStyle,
            e = u.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")": "",
            f = d && d.filter || c.filter || "";
            c.zoom = 1,
            (b >= 1 || "" === b) && "" === u.trim(f.replace(Qb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Qb.test(f) ? f.replace(Qb, e) : f + " " + e)
        }
    }),
    u(function() {
        u.support.reliableMarginRight || (u.cssHooks.marginRight = {
            get: function(a, c) {
                return c ? u.swap(a, {
                    display: "inline-block"
                },
                Pb, [a, "marginRight"]) : b
            }
        }),
        !u.support.pixelPosition && u.fn.position && u.each(["top", "left"],
        function(a, c) {
            u.cssHooks[c] = {
                get: function(a, d) {
                    return d ? (d = Pb(a, c), Wb.test(d) ? u(a).position()[c] + "px": d) : b
                }
            }
        })
    }),
    u.expr && u.expr.filters && (u.expr.filters.hidden = function(a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight || !u.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || u.css(a, "display"))
    },
    u.expr.filters.visible = function(a) {
        return ! u.expr.filters.hidden(a)
    }),
    u.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(a, b) {
        u.cssHooks[a + b] = {
            expand: function(c) {
                var d = 0,
                e = {},
                f = "string" == typeof c ? c.split(" ") : [c];
                for (; 4 > d; d++) e[a + _b[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        Ub.test(a) || (u.cssHooks[a + b].set = ec)
    });
    var jc = /%20/g,
    kc = /\[\]$/,
    lc = /\r?\n/g,
    mc = /^(?:submit|button|image|reset|file)$/i,
    nc = /^(?:input|select|textarea|keygen)/i;
    u.fn.extend({
        serialize: function() {
            return u.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = u.prop(this, "elements");
                return a ? u.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !u(this).is(":disabled") && nc.test(this.nodeName) && !mc.test(a) && (this.checked || !xb.test(a))
            }).map(function(a, b) {
                var c = u(this).val();
                return null == c ? null: u.isArray(c) ? u.map(c,
                function(a) {
                    return {
                        name: b.name,
                        value: a.replace(lc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(lc, "\r\n")
                }
            }).get()
        }
    }),
    u.param = function(a, c) {
        var d, e = [],
        f = function(a, b) {
            b = u.isFunction(b) ? b() : null == b ? "": b,
            e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (c === b && (c = u.ajaxSettings && u.ajaxSettings.traditional), u.isArray(a) || a.jquery && !u.isPlainObject(a)) u.each(a,
        function() {
            f(this.name, this.value)
        });
        else for (d in a) oc(d, a[d], c, f);
        return e.join("&").replace(jc, "+")
    };
    function oc(a, b, c, d) {
        var e;
        if (u.isArray(b)) u.each(b,
        function(b, e) {
            c || kc.test(a) ? d(a, e) : oc(a + "[" + ("object" == typeof e ? b: "") + "]", e, c, d)
        });
        else if (c || "object" !== u.type(b)) d(a, b);
        else for (e in b) oc(a + "[" + e + "]", b[e], c, d)
    }
    u.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(a, b) {
        u.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }),
    u.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var pc, qc, rc = u.now(),
    sc = /\?/,
    tc = /#.*$/,
    uc = /([?&])_=[^&]*/,
    vc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    wc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    xc = /^(?:GET|HEAD)$/,
    yc = /^\/\//,
    zc = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    Ac = u.fn.load,
    Bc = {},
    Cc = {},
    Dc = "*/".concat("*");
    try {
        qc = f.href
    } catch(Ec) {
        qc = g.createElement("a"),
        qc.href = "",
        qc = qc.href
    }
    pc = zc.exec(qc.toLowerCase()) || [];
    function Fc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
            f = b.toLowerCase().match(w) || [];
            if (u.isFunction(c)) while (d = f[e++])"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function Gc(a, c, d, e) {
        var f = {},
        g = a === Cc;
        function h(i) {
            var j;
            return f[i] = !0,
            u.each(a[i] || [],
            function(a, i) {
                var k = i(c, d, e);
                return "string" != typeof k || g || f[k] ? g ? !(j = k) : b: (c.dataTypes.unshift(k), h(k), !1)
            }),
            j
        }
        return h(c.dataTypes[0]) || !f["*"] && h("*")
    }
    function Hc(a, c) {
        var d, e, f = u.ajaxSettings.flatOptions || {};
        for (e in c) c[e] !== b && ((f[e] ? a: d || (d = {}))[e] = c[e]);
        return d && u.extend(!0, a, d),
        a
    }
    u.fn.load = function(a, c, d) {
        if ("string" != typeof a && Ac) return Ac.apply(this, arguments);
        var e, f, g, h = this,
        i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)),
        u.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (g = "POST"),
        h.length > 0 && u.ajax({
            url: a,
            type: g,
            dataType: "html",
            data: c
        }).done(function(a) {
            f = arguments,
            h.html(e ? u("<div>").append(u.parseHTML(a)).find(e) : a)
        }).complete(d &&
        function(a, b) {
            h.each(d, f || [a.responseText, b, a])
        }),
        this
    },
    u.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(a, b) {
        u.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    u.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: qc,
            type: "GET",
            isLocal: wc.test(pc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": u.parseJSON,
                "text xml": u.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Hc(Hc(a, u.ajaxSettings), b) : Hc(u.ajaxSettings, a)
        },
        ajaxPrefilter: Fc(Bc),
        ajaxTransport: Fc(Cc),
        ajax: function(a, c) {
            "object" == typeof a && (c = a, a = b),
            c = c || {};
            var d, e, f, g, h, i, j, k, l = u.ajaxSetup({},
            c),
            m = l.context || l,
            n = l.context && (m.nodeType || m.jquery) ? u(m) : u.event,
            o = u.Deferred(),
            p = u.Callbacks("once memory"),
            q = l.statusCode || {},
            r = {},
            s = {},
            t = 0,
            v = "canceled",
            x = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!k) {
                            k = {};
                            while (b = vc.exec(g)) k[b[1].toLowerCase()] = b[2]
                        }
                        b = k[a.toLowerCase()]
                    }
                    return null == b ? null: b
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? g: null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return t || (l.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > t) for (b in a) q[b] = [q[b], a[b]];
                    else x.always(a[x.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || v;
                    return j && j.abort(b),
                    z(0, b),
                    this
                }
            };
            if (o.promise(x).complete = p.add, x.success = x.done, x.error = x.fail, l.url = ((a || l.url || qc) + "").replace(tc, "").replace(yc, pc[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = u.trim(l.dataType || "*").toLowerCase().match(w) || [""], null == l.crossDomain && (d = zc.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === pc[1] && d[2] === pc[2] && (d[3] || ("http:" === d[1] ? "80": "443")) === (pc[3] || ("http:" === pc[1] ? "80": "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = u.param(l.data, l.traditional)), Gc(Bc, l, c, x), 2 === t) return x;
            i = l.global,
            i && 0 === u.active++&&u.event.trigger("ajaxStart"),
            l.type = l.type.toUpperCase(),
            l.hasContent = !xc.test(l.type),
            f = l.url,
            l.hasContent || (l.data && (f = l.url += (sc.test(f) ? "&": "?") + l.data, delete l.data), l.cache === !1 && (l.url = uc.test(f) ? f.replace(uc, "$1_=" + rc++) : f + (sc.test(f) ? "&": "?") + "_=" + rc++)),
            l.ifModified && (u.lastModified[f] && x.setRequestHeader("If-Modified-Since", u.lastModified[f]), u.etag[f] && x.setRequestHeader("If-None-Match", u.etag[f])),
            (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", l.contentType),
            x.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Dc + "; q=0.01": "") : l.accepts["*"]);
            for (e in l.headers) x.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (l.beforeSend.call(m, x, l) === !1 || 2 === t)) return x.abort();
            v = "abort";
            for (e in {
                success: 1,
                error: 1,
                complete: 1
            }) x[e](l[e]);
            if (j = Gc(Cc, l, c, x)) {
                x.readyState = 1,
                i && n.trigger("ajaxSend", [x, l]),
                l.async && l.timeout > 0 && (h = setTimeout(function() {
                    x.abort("timeout")
                },
                l.timeout));
                try {
                    t = 1,
                    j.send(r, z)
                } catch(y) {
                    if (! (2 > t)) throw y;
                    z( - 1, y)
                }
            } else z( - 1, "No Transport");
            function z(a, c, d, e) {
                var k, r, s, v, w, y = c;
                2 !== t && (t = 2, h && clearTimeout(h), j = b, g = e || "", x.readyState = a > 0 ? 4 : 0, k = a >= 200 && 300 > a || 304 === a, d && (v = Ic(l, x, d)), v = Jc(l, v, x, k), k ? (l.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (u.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (u.etag[f] = w)), 204 === a || "HEAD" === l.type ? y = "nocontent": 304 === a ? y = "notmodified": (y = v.state, r = v.data, s = v.error, k = !s)) : (s = y, (a || !y) && (y = "error", 0 > a && (a = 0))), x.status = a, x.statusText = (c || y) + "", k ? o.resolveWith(m, [r, y, x]) : o.rejectWith(m, [x, y, s]), x.statusCode(q), q = b, i && n.trigger(k ? "ajaxSuccess": "ajaxError", [x, l, k ? r: s]), p.fireWith(m, [x, y]), i && (n.trigger("ajaxComplete", [x, l]), --u.active || u.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(a, b, c) {
            return u.get(a, b, c, "json")
        },
        getScript: function(a, c) {
            return u.get(a, b, c, "script")
        }
    }),
    u.each(["get", "post"],
    function(a, c) {
        u[c] = function(a, d, e, f) {
            return u.isFunction(d) && (f = f || e, e = d, d = b),
            u.ajax({
                url: a,
                type: c,
                dataType: f,
                data: d,
                success: e
            })
        }
    });
    function Ic(a, c, d) {
        var e, f, g, h, i = a.contents,
        j = a.dataTypes;
        while ("*" === j[0]) j.shift(),
        f === b && (f = a.mimeType || c.getResponseHeader("Content-Type"));
        if (f) for (h in i) if (i[h] && i[h].test(f)) {
            j.unshift(h);
            break
        }
        if (j[0] in d) g = j[0];
        else {
            for (h in d) {
                if (!j[0] || a.converters[h + " " + j[0]]) {
                    g = h;
                    break
                }
                e || (e = h)
            }
            g = g || e
        }
        return g ? (g !== j[0] && j.unshift(g), d[g]) : b
    }
    function Jc(a, b, c, d) {
        var e, f, g, h, i, j = {},
        k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0) if (g && a["throws"]) b = g(b);
            else try {
                b = g(b)
            } catch(l) {
                return {
                    state: "parsererror",
                    error: g ? l: "No conversion from " + i + " to " + f
                }
            }
        }
        return {
            state: "success",
            data: b
        }
    }
    u.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return u.globalEval(a),
                a
            }
        }
    }),
    u.ajaxPrefilter("script",
    function(a) {
        a.cache === b && (a.cache = !1),
        a.crossDomain && (a.type = "GET", a.global = !1)
    }),
    u.ajaxTransport("script",
    function(a) {
        if (a.crossDomain) {
            var c, d = g.head || u("head")[0] || g.documentElement;
            return {
                send: function(b, e) {
                    c = g.createElement("script"),
                    c.async = !0,
                    a.scriptCharset && (c.charset = a.scriptCharset),
                    c.src = a.url,
                    c.onload = c.onreadystatechange = function(a, b) { (b || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, c.parentNode && c.parentNode.removeChild(c), c = null, b || e(200, "success"))
                    },
                    d.insertBefore(c, d.firstChild)
                },
                abort: function() {
                    c && c.onload(b, !0)
                }
            }
        }
    });
    var Kc = [],
    Lc = /(=)\?(?=&|$)|\?\?/;
    u.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Kc.pop() || u.expando + "_" + rc++;
            return this[a] = !0,
            a
        }
    }),
    u.ajaxPrefilter("json jsonp",
    function(c, d, e) {
        var f, g, h, i = c.jsonp !== !1 && (Lc.test(c.url) ? "url": "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Lc.test(c.data) && "data");
        return i || "jsonp" === c.dataTypes[0] ? (f = c.jsonpCallback = u.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, i ? c[i] = c[i].replace(Lc, "$1" + f) : c.jsonp !== !1 && (c.url += (sc.test(c.url) ? "&": "?") + c.jsonp + "=" + f), c.converters["script json"] = function() {
            return h || u.error(f + " was not called"),
            h[0]
        },
        c.dataTypes[0] = "json", g = a[f], a[f] = function() {
            h = arguments
        },
        e.always(function() {
            a[f] = g,
            c[f] && (c.jsonpCallback = d.jsonpCallback, Kc.push(f)),
            h && u.isFunction(g) && g(h[0]),
            h = g = b
        }), "script") : b
    });
    var Mc, Nc, Oc = 0,
    Pc = a.ActiveXObject &&
    function() {
        var a;
        for (a in Mc) Mc[a](b, !0)
    };
    function Qc() {
        try {
            return new a.XMLHttpRequest
        } catch(b) {}
    }
    function Rc() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch(b) {}
    }
    u.ajaxSettings.xhr = a.ActiveXObject ?
    function() {
        return ! this.isLocal && Qc() || Rc()
    }: Qc,
    Nc = u.ajaxSettings.xhr(),
    u.support.cors = !!Nc && "withCredentials" in Nc,
    Nc = u.support.ajax = !!Nc,
    Nc && u.ajaxTransport(function(c) {
        if (!c.crossDomain || u.support.cors) {
            var d;
            return {
                send: function(e, f) {
                    var g, h, i = c.xhr();
                    if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields) for (h in c.xhrFields) i[h] = c.xhrFields[h];
                    c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType),
                    c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in e) i.setRequestHeader(h, e[h])
                    } catch(j) {}
                    i.send(c.hasContent && c.data || null),
                    d = function(a, e) {
                        var h, j, k, l;
                        try {
                            if (d && (e || 4 === i.readyState)) if (d = b, g && (i.onreadystatechange = u.noop, Pc && delete Mc[g]), e) 4 !== i.readyState && i.abort();
                            else {
                                l = {},
                                h = i.status,
                                j = i.getAllResponseHeaders(),
                                "string" == typeof i.responseText && (l.text = i.responseText);
                                try {
                                    k = i.statusText
                                } catch(m) {
                                    k = ""
                                }
                                h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
                            }
                        } catch(n) {
                            e || f( - 1, n)
                        }
                        l && f(h, k, l, j)
                    },
                    c.async ? 4 === i.readyState ? setTimeout(d) : (g = ++Oc, Pc && (Mc || (Mc = {},
                    u(a).unload(Pc)), Mc[g] = d), i.onreadystatechange = d) : d()
                },
                abort: function() {
                    d && d(b, !0)
                }
            }
        }
    });
    var Sc, Tc, Uc = /^(?:toggle|show|hide)$/,
    Vc = RegExp("^(?:([+-])=|)(" + v + ")([a-z%]*)$", "i"),
    Wc = /queueHooks$/,
    Xc = [bd],
    Yc = {
        "*": [function(a, b) {
            var c = this.createTween(a, b),
            d = c.cur(),
            e = Vc.exec(b),
            f = e && e[3] || (u.cssNumber[a] ? "": "px"),
            g = (u.cssNumber[a] || "px" !== f && +d) && Vc.exec(u.css(c.elem, a)),
            h = 1,
            i = 20;
            if (g && g[3] !== f) {
                f = f || g[3],
                e = e || [],
                g = +d || 1;
                do h = h || ".5",
                g /= h,
                u.style(c.elem, a, g + f);
                while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]),
            c
        }]
    };
    function Zc() {
        return setTimeout(function() {
            Sc = b
        }),
        Sc = u.now()
    }
    function $c(a, b, c) {
        var d, e = (Yc[b] || []).concat(Yc["*"]),
        f = 0,
        g = e.length;
        for (; g > f; f++) if (d = e[f].call(c, b, a)) return d
    }
    function _c(a, b, c) {
        var d, e, f = 0,
        g = Xc.length,
        h = u.Deferred().always(function() {
            delete i.elem
        }),
        i = function() {
            if (e) return ! 1;
            var b = Sc || Zc(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
            for (; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            1 > f && i ? c: (h.resolveWith(a, [j]), !1)
        },
        j = h.promise({
            elem: a,
            props: u.extend({},
            b),
            opts: u.extend(!0, {
                specialEasing: {}
            },
            c),
            originalProperties: b,
            originalOptions: c,
            startTime: Sc || Zc(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = u.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function(b) {
                var c = 0,
                d = b ? j.tweens.length: 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
                this
            }
        }),
        k = j.props;
        for (ad(k, j.opts.specialEasing); g > f; f++) if (d = Xc[f].call(j, a, k, j.opts)) return d;
        return u.map(k, $c, j),
        u.isFunction(j.opts.start) && j.opts.start.call(a, j),
        u.fx.timer(u.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    function ad(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = u.camelCase(c), e = b[d], f = a[c], u.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = u.cssHooks[d], g && "expand" in g) {
            f = g.expand(f),
            delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }
    u.Animation = u.extend(_c, {
        tweener: function(a, b) {
            u.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            var c, d = 0,
            e = a.length;
            for (; e > d; d++) c = a[d],
            Yc[c] = Yc[c] || [],
            Yc[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? Xc.unshift(a) : Xc.push(a)
        }
    });
    function bd(a, b, c) {
        var d, e, f, g, h, i, j = this,
        k = {},
        l = a.style,
        m = a.nodeType && cc(a),
        n = u._data(a, "fxshow");
        c.queue || (h = u._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, j.always(function() {
            j.always(function() {
                h.unqueued--,
                u.queue(a, "fx").length || h.empty.fire()
            })
        })),
        1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [l.overflow, l.overflowX, l.overflowY], "inline" === u.css(a, "display") && "none" === u.css(a, "float") && (u.support.inlineBlockNeedsLayout && "inline" !== hc(a.nodeName) ? l.zoom = 1 : l.display = "inline-block")),
        c.overflow && (l.overflow = "hidden", u.support.shrinkWrapBlocks || j.always(function() {
            l.overflow = c.overflow[0],
            l.overflowX = c.overflow[1],
            l.overflowY = c.overflow[2]
        }));
        for (d in b) if (e = b[d], Uc.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (m ? "hide": "show")) continue;
            k[d] = n && n[d] || u.style(a, d)
        }
        if (!u.isEmptyObject(k)) {
            n ? "hidden" in n && (m = n.hidden) : n = u._data(a, "fxshow", {}),
            f && (n.hidden = !m),
            m ? u(a).show() : j.done(function() {
                u(a).hide()
            }),
            j.done(function() {
                var b;
                u._removeData(a, "fxshow");
                for (b in k) u.style(a, b, k[b])
            });
            for (d in k) g = $c(m ? n[d] : 0, d, j),
            d in n || (n[d] = g.start, m && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function cd(a, b, c, d, e) {
        return new cd.prototype.init(a, b, c, d, e)
    }
    u.Tween = cd,
    cd.prototype = {
        constructor: cd,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || "swing",
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (u.cssNumber[c] ? "": "px")
        },
        cur: function() {
            var a = cd.propHooks[this.prop];
            return a && a.get ? a.get(this) : cd.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = cd.propHooks[this.prop];
            return this.pos = b = this.options.duration ? u.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : cd.propHooks._default.set(this),
            this
        }
    },
    cd.prototype.init.prototype = cd.prototype,
    cd.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = u.css(a.elem, a.prop, ""), b && "auto" !== b ? b: 0) : a.elem[a.prop]
            },
            set: function(a) {
                u.fx.step[a.prop] ? u.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[u.cssProps[a.prop]] || u.cssHooks[a.prop]) ? u.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    },
    cd.propHooks.scrollTop = cd.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    u.each(["toggle", "show", "hide"],
    function(a, b) {
        var c = u.fn[b];
        u.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(dd(b, !0), a, d, e)
        }
    }),
    u.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(cc).css("opacity", 0).show().end().animate({
                opacity: b
            },
            a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = u.isEmptyObject(a),
            f = u.speed(b, c, d),
            g = function() {
                var b = _c(this, u.extend({},
                a), f); (e || u._data(this, "finish")) && b.stop(!0)
            };
            return g.finish = g,
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, c, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop,
                b(d)
            };
            return "string" != typeof a && (d = c, c = a, a = b),
            c && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0,
                c = null != a && a + "queueHooks",
                f = u.timers,
                g = u._data(this);
                if (c) g[c] && g[c].stop && e(g[c]);
                else for (c in g) g[c] && g[c].stop && Wc.test(c) && e(g[c]);
                for (c = f.length; c--;) f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), b = !1, f.splice(c, 1)); (b || !d) && u.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function() {
                var b, c = u._data(this),
                d = c[a + "queue"],
                e = c[a + "queueHooks"],
                f = u.timers,
                g = d ? d.length: 0;
                for (c.finish = !0, u.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    });
    function dd(a, b) {
        var c, d = {
            height: a
        },
        e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = _b[e],
        d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a),
        d
    }
    u.each({
        slideDown: dd("show"),
        slideUp: dd("hide"),
        slideToggle: dd("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(a, b) {
        u.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    u.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? u.extend({},
        a) : {
            complete: c || !c && b || u.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !u.isFunction(b) && b
        };
        return d.duration = u.fx.off ? 0 : "number" == typeof d.duration ? d.duration: d.duration in u.fx.speeds ? u.fx.speeds[d.duration] : u.fx.speeds._default,
        (null == d.queue || d.queue === !0) && (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            u.isFunction(d.old) && d.old.call(this),
            d.queue && u.dequeue(this, d.queue)
        },
        d
    },
    u.easing = {
        linear: function(a) {

            return a
        },
        swing: function(a) {
            return.5 - Math.cos(a * Math.PI) / 2
        }
    },
    u.timers = [],
    u.fx = cd.prototype.init,
    u.fx.tick = function() {
        var a, c = u.timers,
        d = 0;
        for (Sc = u.now(); c.length > d; d++) a = c[d],
        a() || c[d] !== a || c.splice(d--, 1);
        c.length || u.fx.stop(),
        Sc = b
    },
    u.fx.timer = function(a) {
        a() && u.timers.push(a) && u.fx.start()
    },
    u.fx.interval = 13,
    u.fx.start = function() {
        Tc || (Tc = setInterval(u.fx.tick, u.fx.interval))
    },
    u.fx.stop = function() {
        clearInterval(Tc),
        Tc = null
    },
    u.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    u.fx.step = {},
    u.expr && u.expr.filters && (u.expr.filters.animated = function(a) {
        return u.grep(u.timers,
        function(b) {
            return a === b.elem
        }).length
    }),
    u.fn.offset = function(a) {
        if (arguments.length) return a === b ? this: this.each(function(b) {
            u.offset.setOffset(this, a, b)
        });
        var c, d, f = {
            top: 0,
            left: 0
        },
        g = this[0],
        h = g && g.ownerDocument;
        if (h) return c = h.documentElement,
        u.contains(c, g) ? (typeof g.getBoundingClientRect !== e && (f = g.getBoundingClientRect()), d = ed(h), {
            top: f.top + (d.pageYOffset || c.scrollTop) - (c.clientTop || 0),
            left: f.left + (d.pageXOffset || c.scrollLeft) - (c.clientLeft || 0)
        }) : f
    },
    u.offset = {
        setOffset: function(a, b, c) {
            var d = u.css(a, "position");
            "static" === d && (a.style.position = "relative");
            var e = u(a),
            f = e.offset(),
            g = u.css(a, "top"),
            h = u.css(a, "left"),
            i = ("absolute" === d || "fixed" === d) && u.inArray("auto", [g, h]) > -1,
            j = {},
            k = {},
            l,
            m;
            i ? (k = e.position(), l = k.top, m = k.left) : (l = parseFloat(g) || 0, m = parseFloat(h) || 0),
            u.isFunction(b) && (b = b.call(a, c, f)),
            null != b.top && (j.top = b.top - f.top + l),
            null != b.left && (j.left = b.left - f.left + m),
            "using" in b ? b.using.call(a, j) : e.css(j)
        }
    },
    u.fn.extend({
        position: function() {
            if (this[0]) {
                var a, b, c = {
                    top: 0,
                    left: 0
                },
                d = this[0];
                return "fixed" === u.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), u.nodeName(a[0], "html") || (c = a.offset()), c.top += u.css(a[0], "borderTopWidth", !0), c.left += u.css(a[0], "borderLeftWidth", !0)),
                {
                    top: b.top - c.top - u.css(d, "marginTop", !0),
                    left: b.left - c.left - u.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || h;
                while (a && !u.nodeName(a, "html") && "static" === u.css(a, "position")) a = a.offsetParent;
                return a || h
            })
        }
    }),
    u.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(a, c) {
        var d = /Y/.test(c);
        u.fn[a] = function(e) {
            return u.access(this,
            function(a, e, f) {
                var g = ed(a);
                return f === b ? g ? c in g ? g[c] : g.document.documentElement[e] : a[e] : (g ? g.scrollTo(d ? u(g).scrollLeft() : f, d ? f: u(g).scrollTop()) : a[e] = f, b)
            },
            a, e, arguments.length, null)
        }
    });
    function ed(a) {
        return u.isWindow(a) ? a: 9 === a.nodeType ? a.defaultView || a.parentWindow: !1
    }
    u.each({
        Height: "height",
        Width: "width"
    },
    function(a, c) {
        u.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        },
        function(d, e) {
            u.fn[e] = function(e, f) {
                var g = arguments.length && (d || "boolean" != typeof e),
                h = d || (e === !0 || f === !0 ? "margin": "border");
                return u.access(this,
                function(c, d, e) {
                    var f;
                    return u.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? u.css(c, d, h) : u.style(c, d, e, h)
                },
                c, g ? e: b, g, null)
            }
        })
    }),
    u.fn.size = function() {
        return this.length
    },
    u.fn.andSelf = u.fn.addBack,
    "object" == typeof module && module && "object" == typeof module.exports ? module.exports = u: (a.jQuery = a.$ = u, "function" == typeof define && define.amd && define("jquery", [],
    function() {
        return u
    }))
})(window); (function(a) {
    function b(b) {
        this.input = b;
        b.attr("type") == "password" && this.handlePassword();
        a(b[0].form).submit(function() {
            if (b.hasClass("placeholder") && b[0].value == b.attr("placeholder")) b[0].value = ""
        })
    }
    b.prototype = {
        show: function(a) {
            if (this.input[0].value === "" || a && this.valueIsPlaceholder()) {
                if (this.isPassword) try {
                    this.input[0].setAttribute("type", "text")
                } catch(b) {
                    this.input.before(this.fakePassword.show()).hide()
                }
                this.input.addClass("placeholder");
                this.input[0].value = this.input.attr("placeholder")
            }
        },
        hide: function() {
            if (this.valueIsPlaceholder() && this.input.hasClass("placeholder") && (this.input.removeClass("placeholder"), this.input[0].value = "", this.isPassword)) {
                try {
                    this.input[0].setAttribute("type", "password")
                } catch(a) {}
                this.input.show();
                this.input[0].focus()
            }
        },
        valueIsPlaceholder: function() {
            return this.input[0].value == this.input.attr("placeholder")
        },
        handlePassword: function() {
            var b = this.input;
            b.attr("realType", "password");
            this.isPassword = !0;
            if (a.browser.msie && b[0].outerHTML) {
                var c = a(b[0].outerHTML.replace(/type=(['"])?password\1/gi, "type=$1text$1"));
                this.fakePassword = c.val(b.attr("placeholder")).addClass("placeholder").focus(function() {
                    b.trigger("focus");
                    a(this).hide()
                });
                a(b[0].form).submit(function() {
                    c.remove();
                    b.show()
                })
            }
        }
    };
    var c = !!("placeholder" in document.createElement("input"));
    a.fn.placeholder = function() {
        return c ? this: this.each(function() {
            var c = a(this),
            d = new b(c);
            d.show(!0);
            c.focus(function() {
                d.hide()
            });
            c.blur(function() {
                d.show(!1)
            });
            a.browser.msie && (a(window).load(function() {
                c.val() && c.removeClass("placeholder");
                d.show(!0)
            }), c.focus(function() {
                if (this.value == "") {
                    var a = this.createTextRange();
                    a.collapse(!0);
                    a.moveStart("character", 0);
                    a.select()
                }
            }))
        })
    }
})(jQuery);
window.Modernizr = function(a, b, c) {
    function d(a) {
        q.cssText = a
    }
    function e(a, b) {
        return d(u.join(a + ";") + (b || ""))
    }
    function f(a, b) {
        return typeof a === b
    }
    function g(a, b) {
        return !! ~ ("" + a).indexOf(b)
    }
    function h(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!g(e, "-") && q[e] !== c) return b == "pfx" ? e: !0
        }
        return ! 1
    }
    function i(a, b, d) {
        for (var e in a) {
            var g = b[a[e]];
            if (g !== c) return d === !1 ? a[e] : f(g, "function") ? g.bind(d || b) : g
        }
        return ! 1
    }
    function j(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1),
        e = (a + " " + w.join(d + " ") + d).split(" ");
        return f(b, "string") || f(b, "undefined") ? h(e, b) : (e = (a + " " + x.join(d + " ") + d).split(" "), i(e, b, c))
    }
    var k = "2.8.3",
    l = {},
    m = !0,
    n = b.documentElement,
    o = "modernizr",
    p = b.createElement(o),
    q = p.style,
    r,
    s = ":)",
    t = {}.toString,
    u = " -webkit- -moz- -o- -ms- ".split(" "),
    v = "Webkit Moz O ms",
    w = v.split(" "),
    x = v.toLowerCase().split(" "),
    y = {
        svg: "http://www.w3.org/2000/svg"
    },
    z = {},
    A = {},
    B = {},
    C = [],
    D = C.slice,
    E,
    F = function(a, c, d, e) {
        var f, g, h, i, j = b.createElement("div"),
        k = b.body,
        l = k || b.createElement("body");
        if (parseInt(d, 10)) while (d--) h = b.createElement("div"),
        h.id = e ? e[d] : o + (d + 1),
        j.appendChild(h);
        return f = ["&#173;", '<style id="s', o, '">', a, "</style>"].join(""),
        j.id = o,
        (k ? j: l).innerHTML += f,
        l.appendChild(j),
        k || (l.style.background = "", l.style.overflow = "hidden", i = n.style.overflow, n.style.overflow = "hidden", n.appendChild(l)),
        g = c(j, a),
        k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), n.style.overflow = i),
        !!g
    },
    G = function() {
        function a(a, e) {
            e = e || b.createElement(d[a] || "div"),
            a = "on" + a;
            var g = a in e;
            return g || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(a, ""), g = f(e[a], "function"), f(e[a], "undefined") || (e[a] = c), e.removeAttribute(a))),
            e = null,
            g
        }
        var d = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return a
    } (),
    H = {}.hasOwnProperty,
    I; ! f(H, "undefined") && !f(H.call, "undefined") ? I = function(a, b) {
        return H.call(a, b)
    }: I = function(a, b) {
        return b in a && f(a.constructor.prototype[b], "undefined")
    },
    Function.prototype.bind || (Function.prototype.bind = function(a) {
        var b = this;
        if (typeof b != "function") throw new TypeError;
        var c = D.call(arguments, 1),
        d = function() {
            if (this instanceof d) {
                var e = function() {};
                e.prototype = b.prototype;
                var f = new e,
                g = b.apply(f, c.concat(D.call(arguments)));
                return Object(g) === g ? g: f
            }
            return b.apply(a, c.concat(D.call(arguments)))
        };
        return d
    }),
    z.flexbox = function() {
        return j("flexWrap")
    },
    z.flexboxlegacy = function() {
        return j("boxDirection")
    },
    z.touch = function() {
        var c;
        return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : F(["@media (", u.join("touch-enabled),("), o, ")", "{#modernizr{top:9px;position:absolute}}"].join(""),
        function(a) {
            c = a.offsetTop === 9
        }),
        c
    },
    z.hashchange = function() {
        return G("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
    },
    z.rgba = function() {
        return d("background-color:rgba(150,255,150,.5)"),
        g(q.backgroundColor, "rgba")
    },
    z.multiplebgs = function() {
        return d("background:url(https://),url(https://),red url(https://)"),
        /(url\s*\(.*?){3}/.test(q.background)
    },
    z.backgroundsize = function() {
        return j("backgroundSize")
    },
    z.borderimage = function() {
        return j("borderImage")
    },
    z.borderradius = function() {
        return j("borderRadius")
    },
    z.boxshadow = function() {
        return j("boxShadow")
    },
    z.textshadow = function() {
        return b.createElement("div").style.textShadow === ""
    },
    z.opacity = function() {
        return e("opacity:.55"),
        /^0.55$/.test(q.opacity)
    },
    z.cssanimations = function() {
        return j("animationName")
    },
    z.cssgradients = function() {
        var a = "background-image:",
        b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
        c = "linear-gradient(left top,#9f9, white);";
        return d((a + "-webkit- ".split(" ").join(b + a) + u.join(c + a)).slice(0, -a.length)),
        g(q.backgroundImage, "gradient")
    },
    z.cssreflections = function() {
        return j("boxReflect")
    },
    z.csstransforms = function() {
        return !! j("transform")
    },
    z.csstransforms3d = function() {
        var a = !!j("perspective");
        return a && "webkitPerspective" in n.style && F("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",
        function(b, c) {
            a = b.offsetLeft === 9 && b.offsetHeight === 3
        }),
        a
    },
    z.csstransitions = function() {
        return j("transition")
    },
    z.generatedcontent = function() {
        var a;
        return F(["#", o, "{font:0/0 a}#", o, ':after{content:"', s, '";visibility:hidden;font:3px/1 a}'].join(""),
        function(b) {
            a = b.offsetHeight >= 3
        }),
        a
    },
    z.video = function() {
        var a = b.createElement("video"),
        c = !1;
        try {
            if (c = !!a.canPlayType) c = new Boolean(c),
            c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""),
            c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""),
            c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
        } catch(d) {}
        return c
    },
    z.audio = function() {
        var a = b.createElement("audio"),
        c = !1;
        try {
            if (c = !!a.canPlayType) c = new Boolean(c),
            c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
            c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "")
        } catch(d) {}
        return c
    },
    z.svg = function() {
        return !! b.createElementNS && !!b.createElementNS(y.svg, "svg").createSVGRect
    },
    z.inlinesvg = function() {
        var a = b.createElement("div");
        return a.innerHTML = "<svg/>",
        (a.firstChild && a.firstChild.namespaceURI) == y.svg
    },
    z.svgclippaths = function() {
        return !! b.createElementNS && /SVGClipPath/.test(t.call(b.createElementNS(y.svg, "clipPath")))
    };
    for (var J in z) I(z, J) && (E = J.toLowerCase(), l[E] = z[J](), C.push((l[E] ? "": "no-") + E));
    return l.addTest = function(a, b) {
        if (typeof a == "object") for (var d in a) I(a, d) && l.addTest(d, a[d]);
        else {
            a = a.toLowerCase();
            if (l[a] !== c) return l;
            b = typeof b == "function" ? b() : b,
            typeof m != "undefined" && m && (n.className += " " + (b ? "": "no-") + a),
            l[a] = b
        }
        return l
    },
    d(""),
    p = r = null,
    function(a, b) {
        function c(a, b) {
            var c = a.createElement("p"),
            d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>",
            d.insertBefore(c.lastChild, d.firstChild)
        }
        function d() {
            var a = s.elements;
            return typeof a == "string" ? a.split(" ") : a
        }
        function e(a) {
            var b = q[a[o]];
            return b || (b = {},
            p++, a[o] = p, q[p] = b),
            b
        }
        function f(a, c, d) {
            c || (c = b);
            if (r) return c.createElement(a);
            d || (d = e(c));
            var f;
            return d.cache[a] ? f = d.cache[a].cloneNode() : m.test(a) ? f = (d.cache[a] = d.createElem(a)).cloneNode() : f = d.createElem(a),
            f.canHaveChildren && !l.test(a) && !f.tagUrn ? d.frag.appendChild(f) : f
        }
        function g(a, c) {
            a || (a = b);
            if (r) return a.createDocumentFragment();
            c = c || e(a);
            var f = c.frag.cloneNode(),
            g = 0,
            h = d(),
            i = h.length;
            for (; g < i; g++) f.createElement(h[g]);
            return f
        }
        function h(a, b) {
            b.cache || (b.cache = {},
            b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()),
            a.createElement = function(c) {
                return s.shivMethods ? f(c, a, b) : b.createElem(c)
            },
            a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/[\w\-]+/g,
            function(a) {
                return b.createElem(a),
                b.frag.createElement(a),
                'c("' + a + '")'
            }) + ");return n}")(s, b.frag)
        }
        function i(a) {
            a || (a = b);
            var d = e(a);
            return s.shivCSS && !n && !d.hasCSS && (d.hasCSS = !!c(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
            r || h(a, d),
            a
        }
        var j = "3.7.0",
        k = a.html5 || {},
        l = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        m = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        n, o = "_html5shiv",
        p = 0,
        q = {},
        r; (function() {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>",
                n = "hidden" in a,
                r = a.childNodes.length == 1 ||
                function() {
                    b.createElement("a");
                    var a = b.createDocumentFragment();
                    return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                } ()
            } catch(c) {
                n = !0,
                r = !0
            }
        })();
        var s = {
            elements: k.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: j,
            shivCSS: k.shivCSS !== !1,
            supportsUnknownElements: r,
            shivMethods: k.shivMethods !== !1,
            type: "default",
            shivDocument: i,
            createElement: f,
            createDocumentFragment: g
        };
        a.html5 = s,
        i(b)
    } (this, b),
    l._version = k,
    l._prefixes = u,
    l._domPrefixes = x,
    l._cssomPrefixes = w,
    l.hasEvent = G,
    l.testProp = function(a) {
        return h([a])
    },
    l.testAllProps = j,
    l.testStyles = F,
    n.className = n.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + C.join(" ") : ""),
    l
} (this, this.document),
function(a, b, c) {
    function d(a) {
        return "[object Function]" == o.call(a)
    }
    function e(a) {
        return "string" == typeof a
    }
    function f() {}
    function g(a) {
        return ! a || "loaded" == a || "complete" == a || "uninitialized" == a
    }
    function h() {
        var a = p.shift();
        q = 1,
        a ? a.t ? m(function() { ("c" == a.t ? B.injectCss: B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        },
        0) : (a(), h()) : q = 0
    }
    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                "img" != a && m(function() {
                    t.removeChild(l)
                },
                50);
                for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
            }
        }
        var j = j || B.errorTimeout,
        l = b.createElement(a),
        o = 0,
        r = 0,
        u = {
            t: d,
            s: c,
            e: f,
            a: i,
            x: j
        };
        1 === y[c] && (r = 1, y[c] = []),
        "object" == a ? l.data = c: (l.src = c, l.type = a),
        l.width = l.height = "0",
        l.onerror = l.onload = l.onreadystatechange = function() {
            k.call(this, r)
        },
        p.splice(e, 0, u),
        "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null: n), m(k, j)) : y[c].push(l))
    }
    function j(a, b, c, d, f) {
        return q = 0,
        b = b || "j",
        e(a) ? i("c" == b ? v: u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()),
        this
    }
    function k() {
        var a = B;
        return a.loader = {
            load: j,
            i: 0
        },
        a
    }
    var l = b.documentElement,
    m = a.setTimeout,
    n = b.getElementsByTagName("script")[0],
    o = {}.toString,
    p = [],
    q = 0,
    r = "MozAppearance" in l.style,
    s = r && !!b.createRange().compareNode,
    t = s ? l: n.parentNode,
    l = a.opera && "[object Opera]" == o.call(a.opera),
    l = !!b.attachEvent && !l,
    u = r ? "object": l ? "script": "img",
    v = l ? "script": u,
    w = Array.isArray ||
    function(a) {
        return "[object Array]" == o.call(a)
    },
    x = [],
    y = {},
    z = {
        timeout: function(a, b) {
            return b.length && (a.timeout = b[0]),
            a
        }
    },
    A,
    B;
    B = function(a) {
        function b(a) {
            var a = a.split("!"),
            b = x.length,
            c = a.pop(),
            d = a.length,
            c = {
                url: c,
                origUrl: c,
                prefixes: a
            },
            e,
            f,
            g;
            for (f = 0; f < d; f++) g = a[f].split("="),
            (e = z[g.shift()]) && (c = e(c, g));
            for (f = 0; f < b; f++) c = x[f](c);
            return c
        }
        function g(a, e, f, g, h) {
            var i = b(a),
            j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(),
            i.bypass || (e && (e = d(e) ? e: e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c": c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                k(),
                e && e(i.origUrl, h, g),
                j && j(i.origUrl, h, g),
                y[i.url] = 2
            })))
        }
        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a)) c || (j = function() {
                        var a = [].slice.call(arguments);
                        k.apply(this, a),
                        l()
                    }),
                    g(a, j, b, 0, h);
                    else if (Object(a) === a) for (n in m = function() {
                        var b = 0,
                        c;
                        for (c in a) a.hasOwnProperty(c) && b++;
                        return b
                    } (), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                        var a = [].slice.call(arguments);
                        k.apply(this, a),
                        l()
                    }: j[n] = function(a) {
                        return function() {
                            var b = [].slice.call(arguments);
                            a && a.apply(this, b),
                            l()
                        }
                    } (k[n])), g(a[n], j, b, n, h))
                } else ! c && l()
            }
            var h = !!a.test,
            i = a.load || a.both,
            j = a.callback || f,
            k = j,
            l = a.complete || f,
            m, n;
            c(h ? a.yep: a.nope, !!i),
            i && c(i)
        }
        var i, j, l = this.yepnope.loader;
        if (e(a)) g(a, 0, l, 0);
        else if (w(a)) for (i = 0; i < a.length; i++) j = a[i],
        e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
        else Object(a) === a && h(a, l)
    },
    B.addPrefix = function(a, b) {
        z[a] = b
    },
    B.addFilter = function(a) {
        x.push(a)
    },
    B.errorTimeout = 1e4,
    null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
        b.removeEventListener("DOMContentLoaded", A, 0),
        b.readyState = "complete"
    },
    0)),
    a.yepnope = k(),
    a.yepnope.executeStack = h,
    a.yepnope.injectJs = function(a, c, d, e, i, j) {
        var k = b.createElement("script"),
        l,
        o,
        e = e || B.errorTimeout;
        k.src = a;
        for (o in d) k.setAttribute(o, d[o]);
        c = j ? h: c || f,
        k.onreadystatechange = k.onload = function() { ! l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
        },
        m(function() {
            l || (l = 1, c(1))
        },
        e),
        i ? k.onload() : n.parentNode.insertBefore(k, n)
    },
    a.yepnope.injectCss = function(a, c, d, e, g, i) {
        var e = b.createElement("link"),
        j,
        c = i ? h: c || f;
        e.href = a,
        e.rel = "stylesheet",
        e.type = "text/css";
        for (j in d) e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n), m(c, 0))
    }
} (this, document),
Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
}; !
function(a) {
    var b = {
        sectionContainer: "section",
        easing: "ease",
        animationTime: 1e3,
        pagination: true,
        updateURL: false,
        keyboard: true,
        beforeMove: null,
        afterMove: null,
        loop: true,
        responsiveFallback: false,
        direction: "vertical"
    };
    a.fn.swipeEvents = function() {
        return this.each(function() {
            function b(a) {
                var b = a.originalEvent.touches;
                if (b && b.length) {
                    d = b[0].pageX;
                    e = b[0].pageY;
                    f.bind("touchmove", c)
                }
            }
            function c(a) {
                var b = a.originalEvent.touches;
                if (b && b.length) {
                    var g = d - b[0].pageX;
                    var h = e - b[0].pageY;
                    if (g >= 50) {
                        f.trigger("swipeLeft")
                    }
                    if (g <= -50) {
                        f.trigger("swipeRight")
                    }
                    if (h >= 50) {
                        f.trigger("swipeUp")
                    }
                    if (h <= -50) {
                        f.trigger("swipeDown")
                    }
                    if (Math.abs(g) >= 50 || Math.abs(h) >= 50) {
                        f.unbind("touchmove", c)
                    }
                }
            }
            var d, e, f = a(this);
            f.bind("touchstart", b)
        })
    };
    a.fn.onepage_scroll = function(c) {
        function d() {
            var b = false;
            var c = typeof f.responsiveFallback;
            if (c == "number") {
                b = a(window).width() < f.responsiveFallback
            }
            if (c == "boolean") {
                b = f.responsiveFallback
            }
            if (c == "function") {
                valFunction = f.responsiveFallback();
                b = valFunction;
                typeOFv = typeof b;
                if (typeOFv == "number") {
                    b = a(window).width() < valFunction
                }
            }
            if (b) {
                a("body").addClass("disabled-onepage-scroll");
                a(document).unbind("mousewheel DOMMouseScroll MozMousePixelScroll");
                g.swipeEvents().unbind("swipeDown swipeUp")
            } else {
                if (a("body").hasClass("disabled-onepage-scroll")) {
                    a("body").removeClass("disabled-onepage-scroll");
                    a("html, body, .wrapper").animate({
                        scrollTop: 0
                    },
                    "fast")
                }
                g.swipeEvents().bind("swipeDown",
                function(b) {
                    if (!a("body").hasClass("disabled-onepage-scroll")) b.preventDefault();
                    g.moveUp()
                }).bind("swipeUp",
                function(b) {
                    if (!a("body").hasClass("disabled-onepage-scroll")) b.preventDefault();
                    g.moveDown()
                });
                a(document).bind("mousewheel DOMMouseScroll MozMousePixelScroll",
                function(a) {
                    a.preventDefault();
                    var b = a.originalEvent.wheelDelta || -a.originalEvent.detail;
                    e(a, b)
                })
            }
        }
        function e(a, b) {
            deltaOfInterest = b;
            var c = (new Date).getTime();
            if (c - lastAnimation < quietPeriod + f.animationTime) {
                a.preventDefault();
                return
            }
            if (deltaOfInterest < 0) {
                g.moveDown()
            } else {
                g.moveUp()
            }
            lastAnimation = c
        }
        var f = a.extend({},
        b, c),
        g = a(this),
        h = a(f.sectionContainer);
        total = h.length,
        status = "off",
        topPos = 0,
        leftPos = 0,
        lastAnimation = 0,
        quietPeriod = 500,
        paginationList = "";
        a.fn.transformPage = function(b, c, d) {
            if (typeof b.beforeMove == "function") b.beforeMove(d);
            if (a("html").hasClass("ie8")) {
                if (b.direction == "horizontal") {
                    var e = g.width() / 100 * c;
                    a(this).animate({
                        left: e + "px"
                    },
                    b.animationTime)
                } else {
                    var e = g.height() / 100 * c;
                    a(this).animate({
                        top: e + "px"
                    },
                    b.animationTime)
                }
            } else {
                a(this).css({
                    "-webkit-transform": b.direction == "horizontal" ? "translate3d(" + c + "%, 0, 0)": "translate3d(0, " + c + "%, 0)",
                    "-webkit-transition": "all " + b.animationTime + "ms " + b.easing,
                    "-moz-transform": b.direction == "horizontal" ? "translate3d(" + c + "%, 0, 0)": "translate3d(0, " + c + "%, 0)",
                    "-moz-transition": "all " + b.animationTime + "ms " + b.easing,
                    "-ms-transform": b.direction == "horizontal" ? "translate3d(" + c + "%, 0, 0)": "translate3d(0, " + c + "%, 0)",
                    "-ms-transition": "all " + b.animationTime + "ms " + b.easing,
                    transform: b.direction == "horizontal" ? "translate3d(" + c + "%, 0, 0)": "translate3d(0, " + c + "%, 0)",
                    transition: "all " + b.animationTime + "ms " + b.easing
                })
            }
            a(this).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
            function(a) {
                if (typeof b.afterMove == "function") b.afterMove(d)
            })
        };
        a.fn.moveDown = function() {
            var b = a(this);
            index = a(f.sectionContainer + ".active").data("index");
            if(!index) return;
            current = a(f.sectionContainer + "[data-index='" + index + "']");
            next = a(f.sectionContainer + "[data-index='" + (index + 1) + "']");
            if (next.length < 1) {
                if (f.loop == true) {
                    pos = 0;
                    next = a(f.sectionContainer + "[data-index='1']")
                } else {
                    if (typeof f.end == "function") f.end(index);
                    return
                }
            } else {
                pos = index * 100 * -1
            }
            if (typeof f.beforeMove == "function") f.beforeMove(next.data("index"));
            current.removeClass("active");
            next.addClass("active");
            if (f.pagination == true) {
                a(".onepage-pagination li a" + "[data-index='" + index + "']").removeClass("active");
                a(".onepage-pagination li a" + "[data-index='" + next.data("index") + "']").addClass("active")
            }
            a("body")[0].className = a("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, "");
            a("body").addClass("viewing-page-" + next.data("index"));
            if (history.replaceState && f.updateURL == true) {
                var c = window.location.href.substr(0, window.location.href.indexOf("#")) + "#" + (index + 1);
            }
            b.transformPage(f, pos, next.data("index"))
        };
        a.fn.moveUp = function() {
            var b = a(this);
            index = a(f.sectionContainer + ".active").data("index");
            current = a(f.sectionContainer + "[data-index='" + index + "']");
            next = a(f.sectionContainer + "[data-index='" + (index - 1) + "']");
            if (next.length < 1) {
                if (f.loop == true) {
                    pos = (total - 1) * 100 * -1;
                    next = a(f.sectionContainer + "[data-index='" + total + "']")
                } else {
                    if (typeof f.end == "function") f.end(index);
                    return
                }
            } else {
                pos = (next.data("index") - 1) * 100 * -1
            }
            if (typeof f.beforeMove == "function") f.beforeMove(next.data("index"));
            current.removeClass("active");
            next.addClass("active");
            if (f.pagination == true) {
                a(".onepage-pagination li a" + "[data-index='" + index + "']").removeClass("active");
                a(".onepage-pagination li a" + "[data-index='" + next.data("index") + "']").addClass("active")
            }
            a("body")[0].className = a("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, "");
            a("body").addClass("viewing-page-" + next.data("index"));
            if (history.replaceState && f.updateURL == true) {
                var c = window.location.href.substr(0, window.location.href.indexOf("#")) + "#" + (index - 1);
            }
            b.transformPage(f, pos, next.data("index"))
        };
        a.fn.moveTo = function(b) {
            current = a(f.sectionContainer + ".active");
            next = a(f.sectionContainer + "[data-index='" + b + "']");
            if (next.length > 0) {
                if (typeof f.beforeMove == "function") f.beforeMove(next.data("index"));
                current.removeClass("active");
                next.addClass("active");
                a(".onepage-pagination li a" + ".active").removeClass("active");
                a(".onepage-pagination li a" + "[data-index='" + b + "']").addClass("active");
                a("body")[0].className = a("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, "");
                a("body").addClass("viewing-page-" + next.data("index"));
                pos = (b - 1) * 100 * -1;
                if (history.replaceState && f.updateURL == true) {
                    var c = window.location.href.substr(0, window.location.href.indexOf("#")) + "#" + (b - 1);
                }
                g.transformPage(f, pos, b)
            }
        };
        g.addClass("onepage-wrapper").css("position", "relative");
        a.each(h,
        function(b) {
            a(this).css({
                position: "absolute",
                top: topPos + "%"
            }).addClass("section").attr("data-index", b + 1);
            a(this).css({
                position: "absolute",
                left: f.direction == "horizontal" ? leftPos + "%": 0,
                top: f.direction == "vertical" || f.direction != "horizontal" ? topPos + "%": 0
            });
            if (f.direction == "horizontal") leftPos = leftPos + 100;
            else topPos = topPos + 100;
            if (f.pagination == true) {
                paginationList += "<li><a data-index='" + (b + 1) + "' href='' onclick='return false;'></a></li>"
            }
        });
        g.swipeEvents().bind("swipeDown",
        function(b) {
            if (!a("body").hasClass("disabled-onepage-scroll")) b.preventDefault();
            g.moveUp()
        }).bind("swipeUp",
        function(b) {
            if (!a("body").hasClass("disabled-onepage-scroll")) b.preventDefault();
            g.moveDown()
        });
        if (f.pagination == true) {
            if (a("ul.onepage-pagination").length < 1) a("<ul class='onepage-pagination'></ul>").prependTo("body");
            if (f.direction == "horizontal") {
                posLeft = g.find(".onepage-pagination").width() / 2 * -1;
                g.find(".onepage-pagination").css("margin-left", posLeft)
            } else {
                posTop = g.find(".onepage-pagination").height() / 2 * -1;
                g.find(".onepage-pagination").css("margin-top", posTop)
            }
            a("ul.onepage-pagination").html(paginationList)
        }
        if (window.location.hash != "" && window.location.hash != "#1") {
            init_index = window.location.hash.replace("#", "");
            if (parseInt(init_index) <= total && parseInt(init_index) > 0) {
                a(f.sectionContainer + "[data-index='" + init_index + "']").addClass("active");
                a("body").addClass("viewing-page-" + init_index);
                if (f.pagination == true) a(".onepage-pagination li a" + "[data-index='" + init_index + "']").addClass("active");
                next = a(f.sectionContainer + "[data-index='" + init_index + "']");
                if (next) {
                    next.addClass("active");
                    if (f.pagination == true) a(".onepage-pagination li a" + "[data-index='" + init_index + "']").addClass("active");
                    a("body")[0].className = a("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, "");
                    a("body").addClass("viewing-page-" + next.data("index"));
                    if (history.replaceState && f.updateURL == true) {
                        var i = window.location.href.substr(0, window.location.href.indexOf("#")) + "#" + init_index;
                    }
                }
                pos = (init_index - 1) * 100 * -1;
                g.transformPage(f, pos, init_index)
            } else {
                a(f.sectionContainer + "[data-index='1']").addClass("active");
                a("body").addClass("viewing-page-1");
                if (f.pagination == true) a(".onepage-pagination li a" + "[data-index='1']").addClass("active")
            }
        } else {
            a(f.sectionContainer + "[data-index='1']").addClass("active");
            a("body").addClass("viewing-page-1");
            if (f.pagination == true) a(".onepage-pagination li a" + "[data-index='1']").addClass("active")
        }
        if (f.pagination == true) {
            a(".onepage-pagination li a").click(function() {
                var b = a(this).data("index");
                g.moveTo(b)
            })
        }
        a(document).bind("mousewheel DOMMouseScroll MozMousePixelScroll",
        function(b) {
            b.preventDefault();
            var c = b.originalEvent.wheelDelta || -b.originalEvent.detail;
            if (!a("body").hasClass("disabled-onepage-scroll")) e(b, c)
        });
        if (f.responsiveFallback != false) {
            a(window).resize(function() {
                d()
            });
            d()
        }
        if (f.keyboard == true) {
            a(document).keydown(function(b) {
                var c = b.target.tagName.toLowerCase();
                if (!a("body").hasClass("disabled-onepage-scroll")) {
                    switch (b.which) {
                    case 38:
                        if (c != "input" && c != "textarea") g.moveUp();
                        break;
                    case 40:
                        if (c != "input" && c != "textarea") g.moveDown();
                        break;
                    case 32:
                        if (c != "input" && c != "textarea") g.moveDown();
                        break;
                    case 33:
                        if (c != "input" && c != "textarea") g.moveUp();
                        break;
                    case 34:
                        if (c != "input" && c != "textarea") g.moveDown();
                        break;
                    case 36:
                        g.moveTo(1);
                        break;
                    case 35:
                        g.moveTo(total);
                        break;
                    default:
                        return
                    }
                }
            })
        }
        return false
    }
} (window.jQuery); (function(a) {
    var b = {};
    var c = {
        mode: "horizontal",
        slideSelector: "",
        infiniteLoop: true,
        hideControlOnEnd: false,
        speed: 500,
        easing: null,
        slideMargin: 0,
        startSlide: 0,
        randomStart: false,
        captions: false,
        ticker: false,
        tickerHover: false,
        adaptiveHeight: false,
        adaptiveHeightSpeed: 500,
        video: false,
        useCSS: true,
        preloadImages: "visible",
        responsive: true,
        slideZIndex: 50,
        wrapperClass: "bx-wrapper",
        touchEnabled: true,
        swipeThreshold: 50,
        oneToOneTouch: true,
        preventDefaultSwipeX: true,
        preventDefaultSwipeY: false,
        pager: true,
        pagerType: "full",
        pagerShortSeparator: " / ",
        pagerSelector: null,
        buildPager: null,
        pagerCustom: null,
        controls: true,
        nextText: "Next",
        prevText: "Prev",
        nextSelector: null,
        prevSelector: null,
        autoControls: false,
        startText: "Start",
        stopText: "Stop",
        autoControlsCombine: false,
        autoControlsSelector: null,
        auto: false,
        pause: 4e3,
        autoStart: true,
        autoDirection: "next",
        autoHover: false,
        autoDelay: 0,
        autoSlideForOnePage: false,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 0,
        slideWidth: 0,
        onSliderLoad: function() {},
        onSlideBefore: function() {},
        onSlideAfter: function() {},
        onSlideNext: function() {},
        onSlidePrev: function() {},
        onSliderResize: function() {}
    };
    a.fn.bxSlider = function(d) {
        if (this.length == 0) return this;
        if (this.length > 1) {
            this.each(function() {
                a(this).bxSlider(d)
            });
            return this
        }
        var e = {};
        var f = this;
        b.el = this;
        var g = a(window).width();
        var h = a(window).height();
        var j = function() {
            e.settings = a.extend({},
            c, d);
            e.settings.slideWidth = parseInt(e.settings.slideWidth);
            e.children = f.children(e.settings.slideSelector);
            if (e.children.length < e.settings.minSlides) e.settings.minSlides = e.children.length;
            if (e.children.length < e.settings.maxSlides) e.settings.maxSlides = e.children.length;
            if (e.settings.randomStart) e.settings.startSlide = Math.floor(Math.random() * e.children.length);
            e.active = {
                index: e.settings.startSlide
            };
            e.carousel = e.settings.minSlides > 1 || e.settings.maxSlides > 1;
            if (e.carousel) e.settings.preloadImages = "all";
            e.minThreshold = e.settings.minSlides * e.settings.slideWidth + (e.settings.minSlides - 1) * e.settings.slideMargin;
            e.maxThreshold = e.settings.maxSlides * e.settings.slideWidth + (e.settings.maxSlides - 1) * e.settings.slideMargin;
            e.working = false;
            e.controls = {};
            e.interval = null;
            e.animProp = e.settings.mode == "vertical" ? "top": "left";
            e.usingCSS = e.settings.useCSS && e.settings.mode != "fade" &&
            function() {
                var a = document.createElement("div");
                var b = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                for (var c in b) {
                    if (a.style[b[c]] !== undefined) {
                        e.cssPrefix = b[c].replace("Perspective", "").toLowerCase();
                        e.animProp = "-" + e.cssPrefix + "-transform";
                        return true
                    }
                }
                return false
            } ();
            if (e.settings.mode == "vertical") e.settings.maxSlides = e.settings.minSlides;
            f.data("origStyle", f.attr("style"));
            f.children(e.settings.slideSelector).each(function() {
                a(this).data("origStyle", a(this).attr("style"))
            });
            k()
        };
        var k = function() {
            f.wrap('<div class="' + e.settings.wrapperClass + '"><div class="bx-viewport"></div></div>');
            e.viewport = f.parent();
            e.loader = a('<div class="bx-loading" />');
            e.viewport.prepend(e.loader);
            f.css({
                width: e.settings.mode == "horizontal" ? e.children.length * 100 + 215 + "%": "auto",
                position: "relative"
            });
            if (e.usingCSS && e.settings.easing) {
                f.css("-" + e.cssPrefix + "-transition-timing-function", e.settings.easing)
            } else if (!e.settings.easing) {
                e.settings.easing = "swing"
            }
            var b = q();
            e.viewport.css({
                width: "100%",
                overflow: "hidden",
                position: "relative"
            });
            e.viewport.parent().css({
                maxWidth: o()
            });
            if (!e.settings.pager) {
                e.viewport.parent().css({
                    marginRight: "auto",
                    marginLeft: "auto"
                })
            }
            e.children.css({
                "float": e.settings.mode == "horizontal" ? "left": "none",
                listStyle: "none",
                position: "relative"
            });
            e.children.css("width", p());
            if (e.settings.mode == "horizontal" && e.settings.slideMargin > 0) e.children.css("marginRight", e.settings.slideMargin);
            if (e.settings.mode == "vertical" && e.settings.slideMargin > 0) e.children.css("marginBottom", e.settings.slideMargin);
            if (e.settings.mode == "fade") {
                e.children.css({
                    position: "absolute",
                    zIndex: 0,
                    display: "none"
                });
                e.children.eq(e.settings.startSlide).css({
                    zIndex: e.settings.slideZIndex,
                    display: "block"
                })
            }
            e.controls.el = a('<div class="bx-controls" />');
            if (e.settings.captions) z();
            e.active.last = e.settings.startSlide == r() - 1;
            if (e.settings.video) f.fitVids();
            var c = e.children.eq(e.settings.startSlide);
            if (e.settings.preloadImages == "all") c = e.children;
            if (!e.settings.ticker) {
                if (e.settings.pager) w();
                if (e.settings.controls) x();
                if (e.settings.auto && e.settings.autoControls) y();
                if (e.settings.controls || e.settings.autoControls || e.settings.pager) e.viewport.after(e.controls.el)
            } else {
                e.settings.pager = false
            }
            l(c, m)
        };
        var l = function(b, c) {
            var d = b.find("img, iframe").length;
            if (d == 0) {
                c();
                return
            }
            var e = 0;
            b.find("img, iframe").each(function() {
                a(this).one("load",
                function() {
                    if (++e == d) c()
                }).each(function() {
                    if (this.complete) a(this).load()
                })
            })
        };
        var m = function() {
            if (e.settings.infiniteLoop && e.settings.mode != "fade" && !e.settings.ticker) {
                var b = e.settings.mode == "vertical" ? e.settings.minSlides: e.settings.maxSlides;
                var c = e.children.slice(0, b).clone().addClass("bx-clone");
                var d = e.children.slice( - b).clone().addClass("bx-clone");
                f.append(c).prepend(d)
            }
            e.loader.remove();
            t();
            if (e.settings.mode == "vertical") e.settings.adaptiveHeight = true;
            e.viewport.height(n());
            f.redrawSlider();
            e.settings.onSliderLoad(e.active.index);
            e.initialized = true;
            if (e.settings.responsive) a(window).bind("resize", Q);
            if (e.settings.auto && e.settings.autoStart && (r() > 1 || e.settings.autoSlideForOnePage)) J();
            if (e.settings.ticker) K();
            if (e.settings.pager) F(e.settings.startSlide);
            if (e.settings.controls) I();
            if (e.settings.touchEnabled && !e.settings.ticker) M()
        };
        var n = function() {
            var b = 0;
            var c = a();
            if (e.settings.mode != "vertical" && !e.settings.adaptiveHeight) {
                c = e.children
            } else {
                if (!e.carousel) {
                    c = e.children.eq(e.active.index)
                } else {
                    var d = e.settings.moveSlides == 1 ? e.active.index: e.active.index * s();
                    c = e.children.eq(d);
                    for (i = 1; i <= e.settings.maxSlides - 1; i++) {
                        if (d + i >= e.children.length) {
                            c = c.add(e.children.eq(i - 1))
                        } else {
                            c = c.add(e.children.eq(d + i))
                        }
                    }
                }
            }
            if (e.settings.mode == "vertical") {
                c.each(function(c) {
                    b += a(this).outerHeight()
                });
                if (e.settings.slideMargin > 0) {
                    b += e.settings.slideMargin * (e.settings.minSlides - 1)
                }
            } else {
                b = Math.max.apply(Math, c.map(function() {
                    return a(this).outerHeight(false)
                }).get())
            }
            if (e.viewport.css("box-sizing") == "border-box") {
                b += parseFloat(e.viewport.css("padding-top")) + parseFloat(e.viewport.css("padding-bottom")) + parseFloat(e.viewport.css("border-top-width")) + parseFloat(e.viewport.css("border-bottom-width"))
            } else if (e.viewport.css("box-sizing") == "padding-box") {
                b += parseFloat(e.viewport.css("padding-top")) + parseFloat(e.viewport.css("padding-bottom"))
            }
            return b
        };
        var o = function() {
            var a = "100%";
            if (e.settings.slideWidth > 0) {
                if (e.settings.mode == "horizontal") {
                    a = e.settings.maxSlides * e.settings.slideWidth + (e.settings.maxSlides - 1) * e.settings.slideMargin
                } else {
                    a = e.settings.slideWidth
                }
            }
            return a
        };
        var p = function() {
            var a = e.settings.slideWidth;
            var b = e.viewport.width();
            if (e.settings.slideWidth == 0 || e.settings.slideWidth > b && !e.carousel || e.settings.mode == "vertical") {
                a = b
            } else if (e.settings.maxSlides > 1 && e.settings.mode == "horizontal") {
                if (b > e.maxThreshold) {} else if (b < e.minThreshold) {
                    a = (b - e.settings.slideMargin * (e.settings.minSlides - 1)) / e.settings.minSlides
                }
            }
            return a
        };
        var q = function() {
            var a = 1;
            if (e.settings.mode == "horizontal" && e.settings.slideWidth > 0) {
                if (e.viewport.width() < e.minThreshold) {
                    a = e.settings.minSlides
                } else if (e.viewport.width() > e.maxThreshold) {
                    a = e.settings.maxSlides
                } else {
                    var b = e.children.first().width() + e.settings.slideMargin;
                    a = Math.floor((e.viewport.width() + e.settings.slideMargin) / b)
                }
            } else if (e.settings.mode == "vertical") {
                a = e.settings.minSlides
            }
            return a
        };
        var r = function() {
            var a = 0;
            if (e.settings.moveSlides > 0) {
                if (e.settings.infiniteLoop) {
                    a = Math.ceil(e.children.length / s())
                } else {
                    var b = 0;
                    var c = 0;
                    while (b < e.children.length) {++a;
                        b = c + q();
                        c += e.settings.moveSlides <= q() ? e.settings.moveSlides: q()
                    }
                }
            } else {
                a = Math.ceil(e.children.length / q())
            }
            return a
        };
        var s = function() {
            if (e.settings.moveSlides > 0 && e.settings.moveSlides <= q()) {
                return e.settings.moveSlides
            }
            return q()
        };
        var t = function() {
            if (e.children.length > e.settings.maxSlides && e.active.last && !e.settings.infiniteLoop) {
                if (e.settings.mode == "horizontal") {
                    var a = e.children.last();
                    var b = a.position();
                    u( - (b.left - (e.viewport.width() - a.outerWidth())), "reset", 0)
                } else if (e.settings.mode == "vertical") {
                    var c = e.children.length - e.settings.minSlides;
                    var b = e.children.eq(c).position();
                    u( - b.top, "reset", 0)
                }
            } else {
                var b = e.children.eq(e.active.index * s()).position();
                if (e.active.index == r() - 1) e.active.last = true;
                if (b != undefined) {
                    if (e.settings.mode == "horizontal") u( - b.left, "reset", 0);
                    else if (e.settings.mode == "vertical") u( - b.top, "reset", 0)
                }
            }
        };
        var u = function(a, b, c, d) {
            if (e.usingCSS) {
                var g = e.settings.mode == "vertical" ? "translate3d(0, " + a + "px, 0)": "translate3d(" + a + "px, 0, 0)";
                f.css("-" + e.cssPrefix + "-transition-duration", c / 1e3 + "s");
                if (b == "slide") {
                    f.css(e.animProp, g);
                    f.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
                    function() {
                        f.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");
                        G()
                    })
                } else if (b == "reset") {
                    f.css(e.animProp, g)
                } else if (b == "ticker") {
                    f.css("-" + e.cssPrefix + "-transition-timing-function", "linear");
                    f.css(e.animProp, g);
                    f.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
                    function() {
                        f.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");
                        u(d["resetValue"], "reset", 0);
                        L()
                    })
                }
            } else {
                var h = {};
                h[e.animProp] = a;
                if (b == "slide") {
                    f.animate(h, c, e.settings.easing,
                    function() {
                        G()
                    })
                } else if (b == "reset") {
                    f.css(e.animProp, a)
                } else if (b == "ticker") {
                    f.animate(h, speed, "linear",
                    function() {
                        u(d["resetValue"], "reset", 0);
                        L()
                    })
                }
            }
        };
        var v = function() {
            var b = "";
            var c = r();
            for (var d = 0; d < c; d++) {
                var f = "";
                if (e.settings.buildPager && a.isFunction(e.settings.buildPager)) {
                    f = e.settings.buildPager(d);
                    e.pagerEl.addClass("bx-custom-pager")
                } else {
                    f = d + 1;
                    e.pagerEl.addClass("bx-default-pager")
                }
                b += '<div class="bx-pager-item"><a href="" data-slide-index="' + d + '" class="bx-pager-link">' + f + "</a></div>"
            }
            e.pagerEl.html(b)
        };
        var w = function() {
            if (!e.settings.pagerCustom) {
                e.pagerEl = a('<div class="bx-pager" />');
                if (e.settings.pagerSelector) {
                    a(e.settings.pagerSelector).html(e.pagerEl)
                } else {
                    e.controls.el.addClass("bx-has-pager").append(e.pagerEl)
                }
                v()
            } else {
                e.pagerEl = a(e.settings.pagerCustom)
            }
            e.pagerEl.on("click", "a", E)
        };
        var x = function() {
            e.controls.next = a('<a class="bx-next" href="">' + e.settings.nextText + "</a>");
            e.controls.prev = a('<a class="bx-prev" href="">' + e.settings.prevText + "</a>");
            e.controls.next.bind("click", A);
            e.controls.prev.bind("click", B);
            if (e.settings.nextSelector) {
                a(e.settings.nextSelector).append(e.controls.next)
            }
            if (e.settings.prevSelector) {
                a(e.settings.prevSelector).append(e.controls.prev)
            }
            if (!e.settings.nextSelector && !e.settings.prevSelector) {
                e.controls.directionEl = a('<div class="bx-controls-direction" />');
                e.controls.directionEl.append(e.controls.prev).append(e.controls.next);
                e.controls.el.addClass("bx-has-controls-direction").append(e.controls.directionEl)
            }
        };
        var y = function() {
            e.controls.start = a('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + e.settings.startText + "</a></div>");
            e.controls.stop = a('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + e.settings.stopText + "</a></div>");
            e.controls.autoEl = a('<div class="bx-controls-auto" />');
            e.controls.autoEl.on("click", ".bx-start", C);
            e.controls.autoEl.on("click", ".bx-stop", D);
            if (e.settings.autoControlsCombine) {
                e.controls.autoEl.append(e.controls.start)
            } else {
                e.controls.autoEl.append(e.controls.start).append(e.controls.stop)
            }
            if (e.settings.autoControlsSelector) {
                a(e.settings.autoControlsSelector).html(e.controls.autoEl)
            } else {
                e.controls.el.addClass("bx-has-controls-auto").append(e.controls.autoEl)
            }
            H(e.settings.autoStart ? "stop": "start")
        };
        var z = function() {
            e.children.each(function(b) {
                var c = a(this).find("img:first").attr("title");
                if (c != undefined && ("" + c).length) {
                    a(this).append('<div class="bx-caption"><span>' + c + "</span></div>")
                }
            })
        };
        var A = function(a) {
            if (e.settings.auto) f.stopAuto();
            f.goToNextSlide();
            a.preventDefault()
        };
        var B = function(a) {
            if (e.settings.auto) f.stopAuto();
            f.goToPrevSlide();
            a.preventDefault()
        };
        var C = function(a) {
            f.startAuto();
            a.preventDefault()
        };
        var D = function(a) {
            f.stopAuto();
            a.preventDefault()
        };
        var E = function(b) {
            if (e.settings.auto) f.stopAuto();
            var c = a(b.currentTarget);
            if (c.attr("data-slide-index") !== undefined) {
                var d = parseInt(c.attr("data-slide-index"));
                if (d != e.active.index) f.goToSlide(d);
                b.preventDefault()
            }
        };
        var F = function(b) {
            var c = e.children.length;
            if (e.settings.pagerType == "short") {
                if (e.settings.maxSlides > 1) {
                    c = Math.ceil(e.children.length / e.settings.maxSlides)
                }
                e.pagerEl.html(b + 1 + e.settings.pagerShortSeparator + c);
                return
            }
            e.pagerEl.find("a").removeClass("active");
            e.pagerEl.each(function(c, d) {
                a(d).find("a").eq(b).addClass("active")
            })
        };
        var G = function() {
            if (e.settings.infiniteLoop) {
                var a = "";
                if (e.active.index == 0) {
                    a = e.children.eq(0).position()
                } else if (e.active.index == r() - 1 && e.carousel) {
                    a = e.children.eq((r() - 1) * s()).position()
                } else if (e.active.index == e.children.length - 1) {
                    a = e.children.eq(e.children.length - 1).position()
                }
                if (a) {
                    if (e.settings.mode == "horizontal") {
                        u( - a.left, "reset", 0)
                    } else if (e.settings.mode == "vertical") {
                        u( - a.top, "reset", 0)
                    }
                }
            }
            e.working = false;
            e.settings.onSlideAfter(e.children.eq(e.active.index), e.oldIndex, e.active.index)
        };
        var H = function(a) {
            if (e.settings.autoControlsCombine) {
                e.controls.autoEl.html(e.controls[a])
            } else {
                e.controls.autoEl.find("a").removeClass("active");
                e.controls.autoEl.find("a:not(.bx-" + a + ")").addClass("active")
            }
        };
        var I = function() {
            if (r() == 1) {
                e.controls.prev.addClass("disabled");
                e.controls.next.addClass("disabled")
            } else if (!e.settings.infiniteLoop && e.settings.hideControlOnEnd) {
                if (e.active.index == 0) {
                    e.controls.prev.addClass("disabled");
                    e.controls.next.removeClass("disabled")
                } else if (e.active.index == r() - 1) {
                    e.controls.next.addClass("disabled");
                    e.controls.prev.removeClass("disabled")
                } else {
                    e.controls.prev.removeClass("disabled");
                    e.controls.next.removeClass("disabled")
                }
            }
        };
        var J = function() {
            if (e.settings.autoDelay > 0) {
                var a = setTimeout(f.startAuto, e.settings.autoDelay)
            } else {
                f.startAuto()
            }
            if (e.settings.autoHover) {
                f.hover(function() {
                    if (e.interval) {
                        f.stopAuto(true);
                        e.autoPaused = true
                    }
                },
                function() {
                    if (e.autoPaused) {
                        f.startAuto(true);
                        e.autoPaused = null
                    }
                })
            }
        };
        var K = function() {
            var b = 0;
            if (e.settings.autoDirection == "next") {
                f.append(e.children.clone().addClass("bx-clone"))
            } else {
                f.prepend(e.children.clone().addClass("bx-clone"));
                var c = e.children.first().position();
                b = e.settings.mode == "horizontal" ? -c.left: -c.top
            }
            u(b, "reset", 0);
            e.settings.pager = false;
            e.settings.controls = false;
            e.settings.autoControls = false;
            if (e.settings.tickerHover && !e.usingCSS) {
                e.viewport.hover(function() {
                    f.stop()
                },
                function() {
                    var b = 0;
                    e.children.each(function(c) {
                        b += e.settings.mode == "horizontal" ? a(this).outerWidth(true) : a(this).outerHeight(true)
                    });
                    var c = e.settings.speed / b;
                    var d = e.settings.mode == "horizontal" ? "left": "top";
                    var g = c * (b - Math.abs(parseInt(f.css(d))));
                    L(g)
                })
            }
            L()
        };
        var L = function(a) {
            speed = a ? a: e.settings.speed;
            var b = {
                left: 0,
                top: 0
            };
            var c = {
                left: 0,
                top: 0
            };
            if (e.settings.autoDirection == "next") {
                b = f.find(".bx-clone").first().position()
            } else {
                c = e.children.first().position()
            }
            var d = e.settings.mode == "horizontal" ? -b.left: -b.top;
            var g = e.settings.mode == "horizontal" ? -c.left: -c.top;
            var h = {
                resetValue: g
            };
            u(d, "ticker", speed, h)
        };
        var M = function() {
            e.touch = {
                start: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: 0,
                    y: 0
                }
            };
            e.viewport.bind("touchstart", N)
        };
        var N = function(a) {
            if (e.working) {
                a.preventDefault()
            } else {
                e.touch.originalPos = f.position();
                var b = a.originalEvent;
                e.touch.start.x = b.changedTouches[0].pageX;
                e.touch.start.y = b.changedTouches[0].pageY;
                e.viewport.bind("touchmove", O);
                e.viewport.bind("touchend", P)
            }
        };
        var O = function(a) {
            var b = a.originalEvent;
            var c = Math.abs(b.changedTouches[0].pageX - e.touch.start.x);
            var d = Math.abs(b.changedTouches[0].pageY - e.touch.start.y);
            if (c * 3 > d && e.settings.preventDefaultSwipeX) {
                a.preventDefault()
            } else if (d * 3 > c && e.settings.preventDefaultSwipeY) {
                a.preventDefault()
            }
            if (e.settings.mode != "fade" && e.settings.oneToOneTouch) {
                var f = 0;
                if (e.settings.mode == "horizontal") {
                    var g = b.changedTouches[0].pageX - e.touch.start.x;
                    f = e.touch.originalPos.left + g
                } else {
                    var g = b.changedTouches[0].pageY - e.touch.start.y;
                    f = e.touch.originalPos.top + g
                }
                u(f, "reset", 0)
            }
        };
        var P = function(a) {
            e.viewport.unbind("touchmove", O);
            var b = a.originalEvent;
            var c = 0;
            e.touch.end.x = b.changedTouches[0].pageX;
            e.touch.end.y = b.changedTouches[0].pageY;
            if (e.settings.mode == "fade") {
                var d = Math.abs(e.touch.start.x - e.touch.end.x);
                if (d >= e.settings.swipeThreshold) {
                    e.touch.start.x > e.touch.end.x ? f.goToNextSlide() : f.goToPrevSlide();
                    f.stopAuto()
                }
            } else {
                var d = 0;
                if (e.settings.mode == "horizontal") {
                    d = e.touch.end.x - e.touch.start.x;
                    c = e.touch.originalPos.left
                } else {
                    d = e.touch.end.y - e.touch.start.y;
                    c = e.touch.originalPos.top
                }
                if (!e.settings.infiniteLoop && (e.active.index == 0 && d > 0 || e.active.last && d < 0)) {
                    u(c, "reset", 200)
                } else {
                    if (Math.abs(d) >= e.settings.swipeThreshold) {
                        d < 0 ? f.goToNextSlide() : f.goToPrevSlide();
                        f.stopAuto()
                    } else {
                        u(c, "reset", 200)
                    }
                }
            }
            e.viewport.unbind("touchend", P)
        };
        var Q = function(b) {
            if (!e.initialized) return;
            var c = a(window).width();
            var d = a(window).height();
            if (g != c || h != d) {
                g = c;
                h = d;
                f.redrawSlider();
                e.settings.onSliderResize.call(f, e.active.index)
            }
        };
        f.goToSlide = function(b, c) {
            if (e.working || e.active.index == b) return;
            e.working = true;
            e.oldIndex = e.active.index;
            if (b < 0) {
                e.active.index = r() - 1
            } else if (b >= r()) {
                e.active.index = 0
            } else {
                e.active.index = b
            }
            e.settings.onSlideBefore(e.children.eq(e.active.index), e.oldIndex, e.active.index);
            if (c == "next") {
                e.settings.onSlideNext(e.children.eq(e.active.index), e.oldIndex, e.active.index)
            } else if (c == "prev") {
                e.settings.onSlidePrev(e.children.eq(e.active.index), e.oldIndex, e.active.index)
            }
            e.active.last = e.active.index >= r() - 1;
            if (e.settings.pager) F(e.active.index);
            if (e.settings.controls) I();
            if (e.settings.mode == "fade") {
                if (e.settings.adaptiveHeight && e.viewport.height() != n()) {
                    e.viewport.animate({
                        height: n()
                    },
                    e.settings.adaptiveHeightSpeed)
                }
                e.children.filter(":visible").fadeOut(e.settings.speed).css({
                    zIndex: 0
                });
                e.children.eq(e.active.index).css("zIndex", e.settings.slideZIndex + 1).fadeIn(e.settings.speed,
                function() {
                    a(this).css("zIndex", e.settings.slideZIndex);
                    G()
                })
            } else {
                if (e.settings.adaptiveHeight && e.viewport.height() != n()) {
                    e.viewport.animate({
                        height: n()
                    },
                    e.settings.adaptiveHeightSpeed)
                }
                var d = 0;
                var g = {
                    left: 0,
                    top: 0
                };
                if (!e.settings.infiniteLoop && e.carousel && e.active.last) {
                    if (e.settings.mode == "horizontal") {
                        var h = e.children.eq(e.children.length - 1);
                        g = h.position();
                        d = e.viewport.width() - h.outerWidth()
                    } else {
                        var i = e.children.length - e.settings.minSlides;
                        g = e.children.eq(i).position()
                    }
                } else if (e.carousel && e.active.last && c == "prev") {
                    var j = e.settings.moveSlides == 1 ? e.settings.maxSlides - s() : (r() - 1) * s() - (e.children.length - e.settings.maxSlides);
                    var h = f.children(".bx-clone").eq(j);
                    g = h.position()
                } else if (c == "next" && e.active.index == 0) {
                    g = f.find("> .bx-clone").eq(e.settings.maxSlides).position();
                    e.active.last = false
                } else if (b >= 0) {
                    var k = b * s();
                    g = e.children.eq(k).position()
                }
                if ("undefined" !== typeof g) {
                    var l = e.settings.mode == "horizontal" ? -(g.left - d) : -g.top;
                    u(l, "slide", e.settings.speed)
                }
            }
        };
        f.goToNextSlide = function() {
            if (!e.settings.infiniteLoop && e.active.last) return;
            var a = parseInt(e.active.index) + 1;
            f.goToSlide(a, "next")
        };
        f.goToPrevSlide = function() {
            if (!e.settings.infiniteLoop && e.active.index == 0) return;
            var a = parseInt(e.active.index) - 1;
            f.goToSlide(a, "prev")
        };
        f.startAuto = function(a) {
            if (e.interval) return;
            e.interval = setInterval(function() {
                e.settings.autoDirection == "next" ? f.goToNextSlide() : f.goToPrevSlide()
            },
            e.settings.pause);
            if (e.settings.autoControls && a != true) H("stop")
        };
        f.stopAuto = function(a) {
            if (!e.interval) return;
            clearInterval(e.interval);
            e.interval = null;
            if (e.settings.autoControls && a != true) H("start")
        };
        f.getCurrentSlide = function() {
            return e.active.index
        };
        f.getCurrentSlideElement = function() {
            return e.children.eq(e.active.index)
        };
        f.getSlideCount = function() {
            return e.children.length
        };
        f.redrawSlider = function() {
            e.children.add(f.find(".bx-clone")).width(p());
            e.viewport.css("height", n());
            if (!e.settings.ticker) t();
            if (e.active.last) e.active.index = r() - 1;
            if (e.active.index >= r()) e.active.last = true;
            if (e.settings.pager && !e.settings.pagerCustom) {
                v();
                F(e.active.index)
            }
        };
        f.destroySlider = function() {
            if (!e.initialized) return;
            e.initialized = false;
            a(".bx-clone", this).remove();
            e.children.each(function() {
                a(this).data("origStyle") != undefined ? a(this).attr("style", a(this).data("origStyle")) : a(this).removeAttr("style")
            });
            a(this).data("origStyle") != undefined ? this.attr("style", a(this).data("origStyle")) : a(this).removeAttr("style");
            a(this).unwrap().unwrap();
            if (e.controls.el) e.controls.el.remove();
            if (e.controls.next) e.controls.next.remove();
            if (e.controls.prev) e.controls.prev.remove();
            if (e.pagerEl && e.settings.controls) e.pagerEl.remove();
            a(".bx-caption", this).remove();
            if (e.controls.autoEl) e.controls.autoEl.remove();
            clearInterval(e.interval);
            if (e.settings.responsive) a(window).unbind("resize", Q)
        };
        f.reloadSlider = function(a) {
            if (a != undefined) d = a;
            f.destroySlider();
            j()
        };
        j();
        return this
    }
})(jQuery); (function(a) {
    function b(b, c, d, e) {
        var f = b.text(),
        g = f.split(c),
        h = "";
        if (g.length) {
            a(g).each(function(a, b) {
                h += '<span class="' + d + (a + 1) + '" aria-hidden="true">' + b + "</span>" + e
            });
            b.attr("aria-label", f).empty().append(h)
        }
    }
    var c = {
        init: function() {
            return this.each(function() {
                b(a(this), "", "char", "")
            })
        },
        words: function() {
            return this.each(function() {
                b(a(this), " ", "word", " ")
            })
        },
        lines: function() {
            return this.each(function() {
                var c = "eefec303079ad17405c889e092e105b0";
                b(a(this).children("br").replaceWith(c).end(), c, "line", "")
            })
        }
    };
    a.fn.lettering = function(b) {
        if (b && c[b]) {
            return c[b].apply(this, [].slice.call(arguments, 1))
        } else if (b === "letters" || !b) {
            return c.init.apply(this, [].slice.call(arguments, 0))
        }
        a.error("Method " + b + " does not exist on jQuery.lettering");
        return this
    }
})(jQuery); (function(a) {
    "use strict";
    function b(b) {
        return /In/.test(b) || a.inArray(b, a.fn.textillate.defaults.inEffects) >= 0
    }
    function c(b) {
        return /Out/.test(b) || a.inArray(b, a.fn.textillate.defaults.outEffects) >= 0
    }
    function d(a) {
        if (a !== "true" && a !== "false") return a;
        return a === "true"
    }
    function e(b) {
        var c = b.attributes || [],
        e = {};
        if (!c.length) return e;
        a.each(c,
        function(a, b) {
            var c = b.nodeName.replace(/delayscale/, "delayScale");
            if (/^data-in-*/.test(c)) {
                e. in =e. in ||{};
                e. in [c.replace(/data-in-/, "")] = d(b.nodeValue)
            } else if (/^data-out-*/.test(c)) {
                e.out = e.out || {};
                e.out[c.replace(/data-out-/, "")] = d(b.nodeValue)
            } else if (/^data-*/.test(c)) {
                e[c.replace(/data-/, "")] = d(b.nodeValue)
            }
        });
        return e
    }
    function f(a) {
        for (var b, c, d = a.length; d; b = parseInt(Math.random() * d), c = a[--d], a[d] = a[b], a[b] = c);
        return a
    }
    function g(a, b, c) {
        a.addClass("animated " + b).css("visibility", "visible").show();
        a.one("animationend webkitAnimationEnd oAnimationEnd",
        function() {
            a.removeClass("animated " + b);
            c && c()
        })
    }
    function h(d, e, h) {
        var i = this,
        j = d.length;
        if (!j) {
            h && h();
            return
        }
        if (e.shuffle) d = f(d);
        if (e.reverse) d = d.toArray().reverse();
        a.each(d,
        function(d, f) {
            var i = a(f);
            function k() {
                if (b(e.effect)) {
                    i.css("visibility", "visible")
                } else if (c(e.effect)) {
                    i.css("visibility", "hidden")
                }
                j -= 1;
                if (!j && h) h()
            }
            var l = e.sync ? e.delay: e.delay * d * e.delayScale;
            i.text() ? setTimeout(function() {
                g(i, e.effect, k)
            },
            l) : k()
        })
    }
    var i = function(d, f) {
        var g = this,
        i = a(d);
        g.init = function() {
            g.$texts = i.find(f.selector);
            if (!g.$texts.length) {
                g.$texts = a('<ul class="texts"><li>' + i.html() + "</li></ul>");
                i.html(g.$texts)
            }
            g.$texts.hide();
            g.$current = a("<span>").text(g.$texts.find(":first-child").html()).prependTo(i);
            if (b(f. in .effect)) {
                g.$current.css("visibility", "hidden")
            } else if (c(f.out.effect)) {
                g.$current.css("visibility", "visible")
            }
            g.setOptions(f);
            g.timeoutRun = null;
            setTimeout(function() {
                g.options.autoStart && g.start()
            },
            g.options.initialDelay)
        };
        g.setOptions = function(a) {
            g.options = a
        };
        g.triggerEvent = function(b) {
            var c = a.Event(b + ".tlt");
            i.trigger(c, g);
            return c
        };
        g. in =function(d, f) {
            d = d || 0;
            var i = g.$texts.find(":nth-child(" + (d + 1) + ")"),
            j = a.extend(true, {},
            g.options, i.length ? e(i[0]) : {}),
            k;
            i.addClass("current");
            g.triggerEvent("inAnimationBegin");
            g.$current.text(i.html()).lettering("words");
            g.$current.find('[class^="word"]').css({
                display: "inline-block",
                "-webkit-transform": "translate3d(0,0,0)",
                "-moz-transform": "translate3d(0,0,0)",
                "-o-transform": "translate3d(0,0,0)",
                transform: "translate3d(0,0,0)"
            }).each(function() {
                a(this).lettering()
            });
            k = g.$current.find('[class^="char"]').css("display", "inline-block");
            if (b(j. in .effect)) {
                k.css("visibility", "hidden")
            } else if (c(j. in .effect)) {
                k.css("visibility", "visible")
            }
            g.currentIndex = d;
            h(k, j. in ,
            function() {
                g.triggerEvent("inAnimationEnd");
                if (j. in .callback) j. in .callback();
                if (f) f(g)
            })
        };
        g.out = function(b) {
            var c = g.$texts.find(":nth-child(" + (g.currentIndex + 1) + ")"),
            d = g.$current.find('[class^="char"]'),
            f = a.extend(true, {},
            g.options, c.length ? e(c[0]) : {});
            g.triggerEvent("outAnimationBegin");
            h(d, f.out,
            function() {
                c.removeClass("current");
                g.triggerEvent("outAnimationEnd");
                if (f.out.callback) f.out.callback();
                if (b) b(g)
            })
        };
        g.start = function(a) {
            g.triggerEvent("start"); (function b(a) {
                g. in (a,
                function() {
                    var c = g.$texts.children().length;
                    a += 1;
                    if (!g.options.loop && a >= c) {
                        if (g.options.callback) g.options.callback();
                        g.triggerEvent("end")
                    } else {
                        a = a % c;
                        g.timeoutRun = setTimeout(function() {
                            g.out(function() {
                                b(a)
                            })
                        },
                        g.options.minDisplayTime)
                    }
                })
            })(a || 0)
        };
        g.stop = function() {
            if (g.timeoutRun) {
                clearInterval(g.timeoutRun);
                g.timeoutRun = null
            }
        };
        g.init()
    };
    a.fn.textillate = function(b, c) {
        return this.each(function() {
            var d = a(this),
            f = d.data("textillate"),
            g = a.extend(true, {},
            a.fn.textillate.defaults, e(this), typeof b == "object" && b);
            if (!f) {
                d.data("textillate", f = new i(this, g))
            } else if (typeof b == "string") {
                f[b].apply(f, [].concat(c))
            } else {
                f.setOptions.call(f, g)
            }
        })
    };
    a.fn.textillate.defaults = {
        selector: ".texts",
        loop: false,
        minDisplayTime: 2e3,
        initialDelay: 0,
        "in": {
            effect: "fadeInLeftBig",
            delayScale: 1.5,
            delay: 50,
            sync: false,
            reverse: false,
            shuffle: false,
            callback: function() {}
        },
        out: {
            effect: "hinge",
            delayScale: 1.5,
            delay: 50,
            sync: false,
            reverse: false,
            shuffle: false,
            callback: function() {}
        },
        autoStart: true,
        inEffects: [],
        outEffects: ["hinge"],
        callback: function() {}
    }
})(jQuery); !
function() {
    var a, b, c, d, e, f = {}.hasOwnProperty,
    g = function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) f.call(b, d) && (a[d] = b[d]);
        return c.prototype = b.prototype,
        a.prototype = new c,
        a.__super__ = b.prototype,
        a
    };
    d = function() {
        function a() {
            this.options_index = 0,
            this.parsed = []
        }
        return a.prototype.add_node = function(a) {
            return "OPTGROUP" === a.nodeName.toUpperCase() ? this.add_group(a) : this.add_option(a)
        },
        a.prototype.add_group = function(a) {
            var b, c, d, e, f, g;
            for (b = this.parsed.length, this.parsed.push({
                array_index: b,
                group: !0,
                label: this.escapeExpression(a.label),
                children: 0,
                disabled: a.disabled
            }), f = a.childNodes, g = [], d = 0, e = f.length; e > d; d++) c = f[d],
            g.push(this.add_option(c, b, a.disabled));
            return g
        },
        a.prototype.add_option = function(a, b, c) {
            return "OPTION" === a.nodeName.toUpperCase() ? ("" !== a.text ? (null != b && (this.parsed[b].children += 1), this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                value: a.value,
                text: a.text,
                html: a.innerHTML,
                selected: a.selected,
                disabled: c === !0 ? c: a.disabled,
                group_array_index: b,
                classes: a.className,
                style: a.style.cssText
            })) : this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                empty: !0
            }), this.options_index += 1) : void 0
        },
        a.prototype.escapeExpression = function(a) {
            var b, c;
            return null == a || a === !1 ? "": /[\&\<\>\"\'\`]/.test(a) ? (b = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            c = /&(?!\w+;)|[\<\>\"\'\`]/g, a.replace(c,
            function(a) {
                return b[a] || "&amp;"
            })) : a
        },
        a
    } (),
    d.select_to_array = function(a) {
        var b, c, e, f, g;
        for (c = new d, g = a.childNodes, e = 0, f = g.length; f > e; e++) b = g[e],
        c.add_node(b);
        return c.parsed
    },
    b = function() {
        function a(b, c) {
            this.form_field = b,
            this.options = null != c ? c: {},
            a.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers())
        }
        return a.prototype.set_default_values = function() {
            var a = this;
            return this.click_test_action = function(b) {
                return a.test_active_click(b)
            },
            this.activate_action = function(b) {
                return a.activate_field(b)
            },
            this.active_field = !1,
            this.mouse_on_container = !1,
            this.results_showing = !1,
            this.result_highlighted = null,
            this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text ? this.options.allow_single_deselect: !1,
            this.disable_search_threshold = this.options.disable_search_threshold || 0,
            this.disable_search = this.options.disable_search || !1,
            this.enable_split_word_search = null != this.options.enable_split_word_search ? this.options.enable_split_word_search: !0,
            this.group_search = null != this.options.group_search ? this.options.group_search: !0,
            this.search_contains = this.options.search_contains || !1,
            this.single_backstroke_delete = null != this.options.single_backstroke_delete ? this.options.single_backstroke_delete: !0,
            this.max_selected_options = this.options.max_selected_options || 1 / 0,
            this.inherit_select_classes = this.options.inherit_select_classes || !1,
            this.display_selected_options = null != this.options.display_selected_options ? this.options.display_selected_options: !0,
            this.display_disabled_options = null != this.options.display_disabled_options ? this.options.display_disabled_options: !0
        },
        a.prototype.set_default_text = function() {
            return this.default_text = this.form_field.getAttribute("data-placeholder") ? this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.options.placeholder_text_multiple || this.options.placeholder_text || a.default_multiple_text: this.options.placeholder_text_single || this.options.placeholder_text || a.default_single_text,
            this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || a.default_no_result_text
        },
        a.prototype.mouse_enter = function() {
            return this.mouse_on_container = !0
        },
        a.prototype.mouse_leave = function() {
            return this.mouse_on_container = !1
        },
        a.prototype.input_focus = function() {
            var a = this;
            if (this.is_multiple) {
                if (!this.active_field) return setTimeout(function() {
                    return a.container_mousedown()
                },
                50)
            } else if (!this.active_field) return this.activate_field()
        },
        a.prototype.input_blur = function() {
            var a = this;
            return this.mouse_on_container ? void 0 : (this.active_field = !1, setTimeout(function() {
                return a.blur_test()
            },
            100))
        },
        a.prototype.results_option_build = function(a) {
            var b, c, d, e, f;
            for (b = "", f = this.results_data, d = 0, e = f.length; e > d; d++) c = f[d],
            b += c.group ? this.result_add_group(c) : this.result_add_option(c),
            (null != a ? a.first: void 0) && (c.selected && this.is_multiple ? this.choice_build(c) : c.selected && !this.is_multiple && this.single_set_selected_text(c.text));
            return b
        },
        a.prototype.result_add_option = function(a) {
            var b, c;
            return a.search_match ? this.include_option_in_results(a) ? (b = [], a.disabled || a.selected && this.is_multiple || b.push("active-result"), !a.disabled || a.selected && this.is_multiple || b.push("disabled-result"), a.selected && b.push("result-selected"), null != a.group_array_index && b.push("group-option"), "" !== a.classes && b.push(a.classes), c = document.createElement("li"), c.className = b.join(" "), c.style.cssText = a.style, c.setAttribute("data-option-array-index", a.array_index), c.innerHTML = a.search_text, this.outerHTML(c)) : "": ""
        },
        a.prototype.result_add_group = function(a) {
            var b;
            return a.search_match || a.group_match ? a.active_options > 0 ? (b = document.createElement("li"), b.className = "group-result", b.innerHTML = a.search_text, this.outerHTML(b)) : "": ""
        },
        a.prototype.results_update_field = function() {
            return this.set_default_text(),
            this.is_multiple || this.results_reset_cleanup(),
            this.result_clear_highlight(),
            this.results_build(),
            this.results_showing ? this.winnow_results() : void 0
        },
        a.prototype.reset_single_select_options = function() {
            var a, b, c, d, e;
            for (d = this.results_data, e = [], b = 0, c = d.length; c > b; b++) a = d[b],
            a.selected ? e.push(a.selected = !1) : e.push(void 0);
            return e
        },
        a.prototype.results_toggle = function() {
            return this.results_showing ? this.results_hide() : this.results_show()
        },
        a.prototype.results_search = function() {
            return this.results_showing ? this.winnow_results() : this.results_show()
        },
        a.prototype.winnow_results = function() {
            var a, b, c, d, e, f, g, h, i, j, k, l, m;
            for (this.no_results_clear(), e = 0, g = this.get_search_text(), a = g.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), d = this.search_contains ? "": "^", c = new RegExp(d + a, "i"), j = new RegExp(a, "i"), m = this.results_data, k = 0, l = m.length; l > k; k++) b = m[k],
            b.search_match = !1,
            f = null,
            this.include_option_in_results(b) && (b.group && (b.group_match = !1, b.active_options = 0), null != b.group_array_index && this.results_data[b.group_array_index] && (f = this.results_data[b.group_array_index], 0 === f.active_options && f.search_match && (e += 1), f.active_options += 1), (!b.group || this.group_search) && (b.search_text = b.group ? b.label: b.html, b.search_match = this.search_string_match(b.search_text, c), b.search_match && !b.group && (e += 1), b.search_match ? (g.length && (h = b.search_text.search(j), i = b.search_text.substr(0, h + g.length) + "</em>" + b.search_text.substr(h + g.length), b.search_text = i.substr(0, h) + "<em>" + i.substr(h)), null != f && (f.group_match = !0)) : null != b.group_array_index && this.results_data[b.group_array_index].search_match && (b.search_match = !0)));
            return this.result_clear_highlight(),
            1 > e && g.length ? (this.update_results_content(""), this.no_results(g)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight())
        },
        a.prototype.search_string_match = function(a, b) {
            var c, d, e, f;
            if (b.test(a)) return ! 0;
            if (this.enable_split_word_search && (a.indexOf(" ") >= 0 || 0 === a.indexOf("[")) && (d = a.replace(/\[|\]/g, "").split(" "), d.length)) for (e = 0, f = d.length; f > e; e++) if (c = d[e], b.test(c)) return ! 0
        },
        a.prototype.choices_count = function() {
            var a, b, c, d;
            if (null != this.selected_option_count) return this.selected_option_count;
            for (this.selected_option_count = 0, d = this.form_field.options, b = 0, c = d.length; c > b; b++) a = d[b],
            a.selected && (this.selected_option_count += 1);
            return this.selected_option_count
        },
        a.prototype.choices_click = function(a) {
            return a.preventDefault(),
            this.results_showing || this.is_disabled ? void 0 : this.results_show()
        },
        a.prototype.keyup_checker = function(a) {
            var b, c;
            switch (b = null != (c = a.which) ? c: a.keyCode, this.search_field_scale(), b) {
            case 8:
                if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) return this.keydown_backstroke();
                if (!this.pending_backstroke) return this.result_clear_highlight(),
                this.results_search();
                break;
            case 13:
                if (a.preventDefault(), this.results_showing) return this.result_select(a);
                break;
            case 27:
                return this.results_showing && this.results_hide(),
                !0;
            case 9:
            case 38:
            case 40:
            case 16:
            case 91:
            case 17:
                break;
            default:
                return this.results_search()
            }
        },
        a.prototype.clipboard_event_checker = function() {
            var a = this;
            return setTimeout(function() {
                return a.results_search()
            },
            50)
        },
        a.prototype.container_width = function() {
            return null != this.options.width ? this.options.width: "" + this.form_field.offsetWidth + "px"
        },
        a.prototype.include_option_in_results = function(a) {
            return this.is_multiple && !this.display_selected_options && a.selected ? !1 : !this.display_disabled_options && a.disabled ? !1 : a.empty ? !1 : !0
        },
        a.prototype.search_results_touchstart = function(a) {
            return this.touch_started = !0,
            this.search_results_mouseover(a)
        },
        a.prototype.search_results_touchmove = function(a) {
            return this.touch_started = !1,
            this.search_results_mouseout(a)
        },
        a.prototype.search_results_touchend = function(a) {
            return this.touch_started ? this.search_results_mouseup(a) : void 0
        },
        a.prototype.outerHTML = function(a) {
            var b;
            return a.outerHTML ? a.outerHTML: (b = document.createElement("div"), b.appendChild(a), b.innerHTML)
        },
        a.browser_is_supported = function() {
            return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : /iP(od|hone)/i.test(window.navigator.userAgent) ? !1 : /Android/i.test(window.navigator.userAgent) && /Mobile/i.test(window.navigator.userAgent) ? !1 : !0
        },
        a.default_multiple_text = "Select Some Options",
        a.default_single_text = "Select an Option",
        a.default_no_result_text = "No results match",
        a
    } (),
    a = jQuery,
    a.fn.extend({
        chosen: function(d) {
            return b.browser_is_supported() ? this.each(function() {
                var b, e;
                b = a(this),
                e = b.data("chosen"),
                "destroy" === d && e ? e.destroy() : e || b.data("chosen", new c(this, d))
            }) : this
        }
    }),
    c = function(b) {
        function c() {
            return e = c.__super__.constructor.apply(this, arguments)
        }
        return g(c, b),
        c.prototype.setup = function() {
            return this.form_field_jq = a(this.form_field),
            this.current_selectedIndex = this.form_field.selectedIndex,
            this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
        },
        c.prototype.set_up_html = function() {
            var b, c;
            return b = ["chosen-container"],
            b.push("chosen-container-" + (this.is_multiple ? "multi": "single")),
            this.inherit_select_classes && this.form_field.className && b.push(this.form_field.className),
            this.is_rtl && b.push("chosen-rtl"),
            c = {
                "class": b.join(" "),
                style: "width: " + this.container_width() + ";",
                title: this.form_field.title
            },
            this.form_field.id.length && (c.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"),
            this.container = a("<div />", c),
            this.is_multiple ? this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>') : this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'),
            this.form_field_jq.hide().after(this.container),
            this.dropdown = this.container.find("div.chosen-drop").first(),
            this.search_field = this.container.find("input").first(),
            this.search_results = this.container.find("ul.chosen-results").first(),
            this.search_field_scale(),
            this.search_no_results = this.container.find("li.no-results").first(),
            this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()),
            this.results_build(),
            this.set_tab_index(),
            this.set_label_behavior(),
            this.form_field_jq.trigger("chosen:ready", {
                chosen: this
            })
        },
        c.prototype.register_observers = function() {
            var a = this;
            return this.container.bind("mousedown.chosen",
            function(b) {
                a.container_mousedown(b)
            }),
            this.container.bind("mouseup.chosen",
            function(b) {
                a.container_mouseup(b)
            }),
            this.container.bind("mouseenter.chosen",
            function(b) {
                a.mouse_enter(b)
            }),
            this.container.bind("mouseleave.chosen",
            function(b) {
                a.mouse_leave(b)
            }),
            this.search_results.bind("mouseup.chosen",
            function(b) {
                a.search_results_mouseup(b)
            }),
            this.search_results.bind("mouseover.chosen",
            function(b) {
                a.search_results_mouseover(b)
            }),
            this.search_results.bind("mouseout.chosen",
            function(b) {
                a.search_results_mouseout(b)
            }),
            this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen",
            function(b) {
                a.search_results_mousewheel(b)
            }),
            this.search_results.bind("touchstart.chosen",
            function(b) {
                a.search_results_touchstart(b)
            }),
            this.search_results.bind("touchmove.chosen",
            function(b) {
                a.search_results_touchmove(b)
            }),
            this.search_results.bind("touchend.chosen",
            function(b) {
                a.search_results_touchend(b)
            }),
            this.form_field_jq.bind("chosen:updated.chosen",
            function(b) {
                a.results_update_field(b)
            }),
            this.form_field_jq.bind("chosen:activate.chosen",
            function(b) {
                a.activate_field(b)
            }),
            this.form_field_jq.bind("chosen:open.chosen",
            function(b) {
                a.container_mousedown(b)
            }),
            this.form_field_jq.bind("chosen:close.chosen",
            function(b) {
                a.input_blur(b)
            }),
            this.search_field.bind("blur.chosen",
            function(b) {
                a.input_blur(b)
            }),
            this.search_field.bind("keyup.chosen",
            function(b) {
                a.keyup_checker(b)
            }),
            this.search_field.bind("keydown.chosen",
            function(b) {
                a.keydown_checker(b)
            }),
            this.search_field.bind("focus.chosen",
            function(b) {
                a.input_focus(b)
            }),
            this.search_field.bind("cut.chosen",
            function(b) {
                a.clipboard_event_checker(b)
            }),
            this.search_field.bind("paste.chosen",
            function(b) {
                a.clipboard_event_checker(b)
            }),
            this.is_multiple ? this.search_choices.bind("click.chosen",
            function(b) {
                a.choices_click(b)
            }) : this.container.bind("click.chosen",
            function(a) {
                a.preventDefault()
            })
        },
        c.prototype.destroy = function() {
            return a(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action),
            this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex),
            this.container.remove(),
            this.form_field_jq.removeData("chosen"),
            this.form_field_jq.show()
        },
        c.prototype.search_field_disabled = function() {
            return this.is_disabled = this.form_field_jq[0].disabled,
            this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action))
        },
        c.prototype.container_mousedown = function(b) {
            return this.is_disabled || (b && "mousedown" === b.type && !this.results_showing && b.preventDefault(), null != b && a(b.target).hasClass("search-choice-close")) ? void 0 : (this.active_field ? this.is_multiple || !b || a(b.target)[0] !== this.selected_item[0] && !a(b.target).parents("a.chosen-single").length || (b.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), a(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field())
        },
        c.prototype.container_mouseup = function(a) {
            return "ABBR" !== a.target.nodeName || this.is_disabled ? void 0 : this.results_reset(a)
        },
        c.prototype.search_results_mousewheel = function(a) {
            var b;
            return a.originalEvent && (b = -a.originalEvent.wheelDelta || a.originalEvent.detail),
            null != b ? (a.preventDefault(), "DOMMouseScroll" === a.type && (b = 40 * b), this.search_results.scrollTop(b + this.search_results.scrollTop())) : void 0
        },
        c.prototype.blur_test = function() {
            return ! this.active_field && this.container.hasClass("chosen-container-active") ? this.close_field() : void 0
        },
        c.prototype.close_field = function() {
            return a(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action),
            this.active_field = !1,
            this.results_hide(),
            this.container.removeClass("chosen-container-active"),
            this.clear_backstroke(),
            this.show_search_field_default(),
            this.search_field_scale()
        },
        c.prototype.activate_field = function() {
            return this.container.addClass("chosen-container-active"),
            this.active_field = !0,
            this.search_field.val(this.search_field.val()),
            this.search_field.focus()
        },
        c.prototype.test_active_click = function(b) {
            var c;
            return c = a(b.target).closest(".chosen-container"),
            c.length && this.container[0] === c[0] ? this.active_field = !0 : this.close_field()
        },
        c.prototype.results_build = function() {
            return this.parsing = !0,
            this.selected_option_count = null,
            this.results_data = d.select_to_array(this.form_field),
            this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))),
            this.update_results_content(this.results_option_build({
                first: !0
            })),
            this.search_field_disabled(),
            this.show_search_field_default(),
            this.search_field_scale(),
            this.parsing = !1
        },
        c.prototype.result_do_highlight = function(a) {
            var b, c, d, e, f;
            if (a.length) {
                if (this.result_clear_highlight(), this.result_highlight = a, this.result_highlight.addClass("highlighted"), d = parseInt(this.search_results.css("maxHeight"), 10), f = this.search_results.scrollTop(), e = d + f, c = this.result_highlight.position().top + this.search_results.scrollTop(), b = c + this.result_highlight.outerHeight(), b >= e) return this.search_results.scrollTop(b - d > 0 ? b - d: 0);
                if (f > c) return this.search_results.scrollTop(c)
            }
        },
        c.prototype.result_clear_highlight = function() {
            return this.result_highlight && this.result_highlight.removeClass("highlighted"),
            this.result_highlight = null
        },
        c.prototype.results_show = function() {
            return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                chosen: this
            }), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {
                chosen: this
            }))
        },
        c.prototype.update_results_content = function(a) {
            return this.search_results.html(a)
        },
        c.prototype.results_hide = function() {
            return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
                chosen: this
            })),
            this.results_showing = !1
        },
        c.prototype.set_tab_index = function() {
            var a;
            return this.form_field.tabIndex ? (a = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = a) : void 0
        },
        c.prototype.set_label_behavior = function() {
            var b = this;
            return this.form_field_label = this.form_field_jq.parents("label"),
            !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = a("label[for='" + this.form_field.id + "']")),
            this.form_field_label.length > 0 ? this.form_field_label.bind("click.chosen",
            function(a) {
                return b.is_multiple ? b.container_mousedown(a) : b.activate_field()
            }) : void 0
        },
        c.prototype.show_search_field_default = function() {
            return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
        },
        c.prototype.search_results_mouseup = function(b) {
            var c;
            return c = a(b.target).hasClass("active-result") ? a(b.target) : a(b.target).parents(".active-result").first(),
            c.length ? (this.result_highlight = c, this.result_select(b), this.search_field.focus()) : void 0
        },
        c.prototype.search_results_mouseover = function(b) {
            var c;
            return c = a(b.target).hasClass("active-result") ? a(b.target) : a(b.target).parents(".active-result").first(),
            c ? this.result_do_highlight(c) : void 0
        },
        c.prototype.search_results_mouseout = function(b) {
            return a(b.target).hasClass("active-result") ? this.result_clear_highlight() : void 0
        },
        c.prototype.choice_build = function(b) {
            var c, d, e = this;
            return c = a("<li />", {
                "class": "search-choice"
            }).html("<span>" + b.html + "</span>"),
            b.disabled ? c.addClass("search-choice-disabled") : (d = a("<a />", {
                "class": "search-choice-close",
                "data-option-array-index": b.array_index
            }), d.bind("click.chosen",
            function(a) {
                return e.choice_destroy_link_click(a)
            }), c.append(d)),
            this.search_container.before(c)
        },
        c.prototype.choice_destroy_link_click = function(b) {
            return b.preventDefault(),
            b.stopPropagation(),
            this.is_disabled ? void 0 : this.choice_destroy(a(b.target))
        },
        c.prototype.choice_destroy = function(a) {
            return this.result_deselect(a[0].getAttribute("data-option-array-index")) ? (this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), a.parents("li").first().remove(), this.search_field_scale()) : void 0
        },
        c.prototype.results_reset = function() {
            return this.reset_single_select_options(),
            this.form_field.options[0].selected = !0,
            this.single_set_selected_text(),
            this.show_search_field_default(),
            this.results_reset_cleanup(),
            this.form_field_jq.trigger("change"),
            this.active_field ? this.results_hide() : void 0
        },
        c.prototype.results_reset_cleanup = function() {
            return this.current_selectedIndex = this.form_field.selectedIndex,
            this.selected_item.find("abbr").remove()
        },
        c.prototype.result_select = function(a) {
            var b, c;
            return this.result_highlight ? (b = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                chosen: this
            }), !1) : (this.is_multiple ? b.removeClass("active-result") : this.reset_single_select_options(), c = this.results_data[b[0].getAttribute("data-option-array-index")], c.selected = !0, this.form_field.options[c.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(c) : this.single_set_selected_text(c.text), (a.metaKey || a.ctrlKey) && this.is_multiple || this.results_hide(), this.search_field.val(""), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {
                selected: this.form_field.options[c.options_index].value
            }), this.current_selectedIndex = this.form_field.selectedIndex, this.search_field_scale())) : void 0
        },
        c.prototype.single_set_selected_text = function(a) {
            return null == a && (a = this.default_text),
            a === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")),
            this.selected_item.find("span").text(a)
        },
        c.prototype.result_deselect = function(a) {
            var b;
            return b = this.results_data[a],
            this.form_field.options[b.options_index].disabled ? !1 : (b.selected = !1, this.form_field.options[b.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {
                deselected: this.form_field.options[b.options_index].value
            }), this.search_field_scale(), !0)
        },
        c.prototype.single_deselect_control_build = function() {
            return this.allow_single_deselect ? (this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")) : void 0
        },
        c.prototype.get_search_text = function() {
            return this.search_field.val() === this.default_text ? "": a("<div/>").text(a.trim(this.search_field.val())).html()
        },
        c.prototype.winnow_results_set_highlight = function() {
            var a, b;
            return b = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"),
            a = b.length ? b.first() : this.search_results.find(".active-result").first(),
            null != a ? this.result_do_highlight(a) : void 0
        },
        c.prototype.no_results = function(b) {
            var c;
            return c = a('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'),
            c.find("span").first().html(b),
            this.search_results.append(c),
            this.form_field_jq.trigger("chosen:no_results", {
                chosen: this
            })
        },
        c.prototype.no_results_clear = function() {
            return this.search_results.find(".no-results").remove()
        },
        c.prototype.keydown_arrow = function() {
            var a;
            return this.results_showing && this.result_highlight ? (a = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(a) : void 0 : this.results_show()
        },
        c.prototype.keyup_arrow = function() {
            var a;
            return this.results_showing || this.is_multiple ? this.result_highlight ? (a = this.result_highlight.prevAll("li.active-result"), a.length ? this.result_do_highlight(a.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight())) : void 0 : this.results_show()
        },
        c.prototype.keydown_backstroke = function() {
            var a;
            return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (a = this.search_container.siblings("li.search-choice").last(), a.length && !a.hasClass("search-choice-disabled") ? (this.pending_backstroke = a, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0)
        },
        c.prototype.clear_backstroke = function() {
            return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"),
            this.pending_backstroke = null
        },
        c.prototype.keydown_checker = function(a) {
            var b, c;
            switch (b = null != (c = a.which) ? c: a.keyCode, this.search_field_scale(), 8 !== b && this.pending_backstroke && this.clear_backstroke(), b) {
            case 8:
                this.backstroke_length = this.search_field.val().length;
                break;
            case 9:
                this.results_showing && !this.is_multiple && this.result_select(a),
                this.mouse_on_container = !1;
                break;
            case 13:
                a.preventDefault();
                break;
            case 38:
                a.preventDefault(),
                this.keyup_arrow();
                break;
            case 40:
                a.preventDefault(),
                this.keydown_arrow()
            }
        },
        c.prototype.search_field_scale = function() {
            var b, c, d, e, f, g, h, i, j;
            if (this.is_multiple) {
                for (d = 0, h = 0, f = "position:absolute; left: -1000px; top: -1000px; display:none;", g = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"], i = 0, j = g.length; j > i; i++) e = g[i],
                f += e + ":" + this.search_field.css(e) + ";";
                return b = a("<div />", {
                    style: f
                }),
                b.text(this.search_field.val()),
                a("body").append(b),
                h = b.width() + 25,
                b.remove(),
                c = this.container.outerWidth(),
                h > c - 10 && (h = c - 10),
                this.search_field.css({
                    width: h + "px"
                })
            }
        },
        c
    } (b)
}.call(this);