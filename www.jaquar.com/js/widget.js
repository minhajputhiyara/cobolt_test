var loadOwnjQuery = !0;
loadOwnjQuery && function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, (function(e, t) {
    var n = [],
        i = e.document,
        o = n.slice,
        r = n.concat,
        s = n.push,
        a = n.indexOf,
        l = {},
        c = l.toString,
        u = l.hasOwnProperty,
        d = {},
        f = "2.2.4",
        p = function(e, t) {
            return new p.fn.init(e, t)
        },
        h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        g = /^-ms-/,
        m = /-([\da-z])/gi,
        w = function(e, t) {
            return t.toUpperCase()
        };

    function v(e) {
        var t = !!e && "length" in e && e.length,
            n = p.type(e);
        return "function" !== n && !p.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    p.fn = p.prototype = {
        jquery: f,
        constructor: p,
        selector: "",
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : o.call(this)
        },
        pushStack: function(e) {
            var t = p.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return p.each(this, e)
        },
        map: function(e) {
            return this.pushStack(p.map(this, (function(t, n) {
                return e.call(t, n, t)
            })))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, p.extend = p.fn.extend = function() {
        var e, t, n, i, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || p.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], s !== (i = e[t]) && (c && i && (p.isPlainObject(i) || (o = p.isArray(i))) ? (o ? (o = !1, r = n && p.isArray(n) ? n : []) : r = n && p.isPlainObject(n) ? n : {}, s[t] = p.extend(c, r, i)) : void 0 !== i && (s[t] = i));
        return s
    }, p.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === p.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !p.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(e) {
            var t;
            if ("object" !== p.type(e) || e.nodeType || p.isWindow(e)) return !1;
            if (e.constructor && !u.call(e, "constructor") && !u.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (t in e);
            return void 0 === t || u.call(e, t)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            (e = p.trim(e)) && (1 === e.indexOf("use strict") ? ((t = i.createElement("script")).text = e, i.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(g, "ms-").replace(m, w)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var n, i = 0;
            if (v(e))
                for (n = e.length; n > i && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(h, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (v(Object(e)) ? p.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : a.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; n > i; i++) e[o++] = t[i];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var i = [], o = 0, r = e.length, s = !n; r > o; o++) !t(e[o], o) !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var i, o, s = 0,
                a = [];
            if (v(e))
                for (i = e.length; i > s; s++) null != (o = t(e[s], s, n)) && a.push(o);
            else
                for (s in e) null != (o = t(e[s], s, n)) && a.push(o);
            return r.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            return "string" == typeof t && (n = e[t], t = e, e = n), p.isFunction(e) ? (i = o.call(arguments, 2), (r = function() {
                return e.apply(t || this, i.concat(o.call(arguments)))
            }).guid = e.guid = e.guid || p.guid++, r) : void 0
        },
        now: Date.now,
        support: d
    }), "function" == typeof Symbol && (p.fn[Symbol.iterator] = n[Symbol.iterator]), p.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    }));
    var y = function(e) {
        var t, n, i, o, r, s, a, l, c, u, d, f, p, h, g, m, w, v, y, b = "sizzle" + 1 * new Date,
            x = e.document,
            S = 0,
            k = 0,
            T = oe(),
            _ = oe(),
            C = oe(),
            E = function(e, t) {
                return e === t && (d = !0), 0
            },
            A = {}.hasOwnProperty,
            N = [],
            D = N.pop,
            j = N.push,
            L = N.push,
            W = N.slice,
            F = function(e, t) {
                for (var n = 0, i = e.length; i > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            O = "[\\x20\\t\\r\\n\\f]",
            H = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            R = "\\[" + O + "*(" + H + ")(?:" + O + "*([*^$|!~]?=)" + O + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + O + "*\\]",
            I = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
            B = new RegExp(O + "+", "g"),
            P = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
            M = new RegExp("^" + O + "*," + O + "*"),
            U = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
            $ = new RegExp("=" + O + "*([^\\]'\"]*?)" + O + "*\\]", "g"),
            z = new RegExp(I),
            X = new RegExp("^" + H + "$"),
            V = {
                ID: new RegExp("^#(" + H + ")"),
                CLASS: new RegExp("^\\.(" + H + ")"),
                TAG: new RegExp("^(" + H + "|[*])"),
                ATTR: new RegExp("^" + R),
                PSEUDO: new RegExp("^" + I),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + q + ")$", "i"),
                needsContext: new RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = /'|\\/g,
            ee = new RegExp("\\\\([\\da-f]{1,6}" + O + "?|(" + O + ")|.)", "ig"),
            te = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            ne = function() {
                f()
            };
        try {
            L.apply(N = W.call(x.childNodes), x.childNodes), N[x.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: N.length ? function(e, t) {
                    j.apply(e, W.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function ie(e, t, i, o) {
            var r, a, c, u, d, h, w, v, S = t && t.ownerDocument,
                k = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== k && 9 !== k && 11 !== k) return i;
            if (!o && ((t ? t.ownerDocument || t : x) !== p && f(t), t = t || p, g)) {
                if (11 !== k && (h = Q.exec(e)))
                    if (r = h[1]) {
                        if (9 === k) {
                            if (!(c = t.getElementById(r))) return i;
                            if (c.id === r) return i.push(c), i
                        } else if (S && (c = S.getElementById(r)) && y(t, c) && c.id === r) return i.push(c), i
                    } else {
                        if (h[2]) return L.apply(i, t.getElementsByTagName(e)), i;
                        if ((r = h[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(i, t.getElementsByClassName(r)), i
                    }
                if (n.qsa && !C[e + " "] && (!m || !m.test(e))) {
                    if (1 !== k) S = t, v = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((u = t.getAttribute("id")) ? u = u.replace(Z, "\\$&") : t.setAttribute("id", u = b), a = (w = s(e)).length, d = X.test(u) ? "#" + u : "[id='" + u + "']"; a--;) w[a] = d + " " + he(w[a]);
                        v = w.join(","), S = K.test(e) && fe(t.parentNode) || t
                    }
                    if (v) try {
                        return L.apply(i, S.querySelectorAll(v)), i
                    } catch (e) {} finally {
                        u === b && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(P, "$1"), t, i, o)
        }

        function oe() {
            var e = [];
            return function t(n, o) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = o
            }
        }

        function re(e) {
            return e[b] = !0, e
        }

        function se(e) {
            var t = p.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ae(e, t) {
            for (var n = e.split("|"), o = n.length; o--;) i.attrHandle[n[o]] = t
        }

        function le(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function ce(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function ue(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function de(e) {
            return re((function(t) {
                return t = +t, re((function(n, i) {
                    for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                }))
            }))
        }

        function fe(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = ie.support = {}, r = ie.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, f = ie.setDocument = function(e) {
                var t, o, s = e ? e.ownerDocument || e : x;
                return s !== p && 9 === s.nodeType && s.documentElement ? (h = (p = s).documentElement, g = !r(p), (o = p.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ne, !1) : o.attachEvent && o.attachEvent("onunload", ne)), n.attributes = se((function(e) {
                    return e.className = "i", !e.getAttribute("className")
                })), n.getElementsByTagName = se((function(e) {
                    return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
                })), n.getElementsByClassName = J.test(p.getElementsByClassName), n.getById = se((function(e) {
                    return h.appendChild(e).id = b, !p.getElementsByName || !p.getElementsByName(b).length
                })), n.getById ? (i.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }, i.filter.ID = function(e) {
                    var t = e.replace(ee, te);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete i.find.ID, i.filter.ID = function(e) {
                    var t = e.replace(ee, te);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), i.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, i.find.CLASS = n.getElementsByClassName && function(e, t) {
                    return void 0 !== t.getElementsByClassName && g ? t.getElementsByClassName(e) : void 0
                }, w = [], m = [], (n.qsa = J.test(p.querySelectorAll)) && (se((function(e) {
                    h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + O + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + O + "*(?:value|" + q + ")"), e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]")
                })), se((function(e) {
                    var t = p.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + O + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                }))), (n.matchesSelector = J.test(v = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && se((function(e) {
                    n.disconnectedMatch = v.call(e, "div"), v.call(e, "[s!='']:x"), w.push("!=", I)
                })), m = m.length && new RegExp(m.join("|")), w = w.length && new RegExp(w.join("|")), t = J.test(h.compareDocumentPosition), y = t || J.test(h.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, E = t ? function(e, t) {
                    if (e === t) return d = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === p || e.ownerDocument === x && y(x, e) ? -1 : t === p || t.ownerDocument === x && y(x, t) ? 1 : u ? F(u, e) - F(u, t) : 0 : 4 & i ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return d = !0, 0;
                    var n, i = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!o || !r) return e === p ? -1 : t === p ? 1 : o ? -1 : r ? 1 : u ? F(u, e) - F(u, t) : 0;
                    if (o === r) return le(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? le(s[i], a[i]) : s[i] === x ? -1 : a[i] === x ? 1 : 0
                }, p) : p
            }, ie.matches = function(e, t) {
                return ie(e, null, null, t)
            }, ie.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== p && f(e), t = t.replace($, "='$1']"), n.matchesSelector && g && !C[t + " "] && (!w || !w.test(t)) && (!m || !m.test(t))) try {
                    var i = v.call(e, t);
                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {}
                return ie(t, p, null, [e]).length > 0
            }, ie.contains = function(e, t) {
                return (e.ownerDocument || e) !== p && f(e), y(e, t)
            }, ie.attr = function(e, t) {
                (e.ownerDocument || e) !== p && f(e);
                var o = i.attrHandle[t.toLowerCase()],
                    r = o && A.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
                return void 0 !== r ? r : n.attributes || !g ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, ie.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ie.uniqueSort = function(e) {
                var t, i = [],
                    o = 0,
                    r = 0;
                if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(E), d) {
                    for (; t = e[r++];) t === e[r] && (o = i.push(r));
                    for (; o--;) e.splice(i[o], 1)
                }
                return u = null, e
            }, o = ie.getText = function(e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[i++];) n += o(t);
                return n
            }, (i = ie.selectors = {
                cacheLength: 50,
                createPseudo: re,
                match: V,
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
                    ATTR: function(e) {
                        return e[1] = e[1].replace(ee, te), e[3] = (e[3] || e[4] || e[5] || "").replace(ee, te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && z.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(ee, te).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = T[e + " "];
                        return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && T(e, (function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        }))
                    },
                    ATTR: function(e, t, n) {
                        return function(i) {
                            var o = ie.attr(i, e);
                            return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, o) {
                        var r = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === i && 0 === o ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var c, u, d, f, p, h, g = r !== s ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                w = a && t.nodeName.toLowerCase(),
                                v = !l && !a,
                                y = !1;
                            if (m) {
                                if (r) {
                                    for (; g;) {
                                        for (f = t; f = f[g];)
                                            if (a ? f.nodeName.toLowerCase() === w : 1 === f.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? m.firstChild : m.lastChild], s && v) {
                                    for (y = (p = (c = (u = (d = (f = m)[b] || (f[b] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === S && c[1]) && c[2], f = p && m.childNodes[p]; f = ++p && f && f[g] || (y = p = 0) || h.pop();)
                                        if (1 === f.nodeType && ++y && f === t) {
                                            u[e] = [S, p, y];
                                            break
                                        }
                                } else if (v && (y = p = (c = (u = (d = (f = t)[b] || (f[b] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === S && c[1]), !1 === y)
                                    for (;
                                        (f = ++p && f && f[g] || (y = p = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== w : 1 !== f.nodeType) || !++y || (v && ((u = (d = f[b] || (f[b] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [S, y]), f !== t)););
                                return (y -= o) === i || y % i == 0 && y / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                        return o[b] ? o(t) : o.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? re((function(e, n) {
                            for (var i, r = o(e, t), s = r.length; s--;) e[i = F(e, r[s])] = !(n[i] = r[s])
                        })) : function(e) {
                            return o(e, 0, n)
                        }) : o
                    }
                },
                pseudos: {
                    not: re((function(e) {
                        var t = [],
                            n = [],
                            i = a(e.replace(P, "$1"));
                        return i[b] ? re((function(e, t, n, o) {
                            for (var r, s = i(e, null, o, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                        })) : function(e, o, r) {
                            return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop()
                        }
                    })),
                    has: re((function(e) {
                        return function(t) {
                            return ie(e, t).length > 0
                        }
                    })),
                    contains: re((function(e) {
                        return e = e.replace(ee, te),
                            function(t) {
                                return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                            }
                    })),
                    lang: re((function(e) {
                        return X.test(e || "") || ie.error("unsupported lang: " + e), e = e.replace(ee, te).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    })),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === h
                    },
                    focus: function(e) {
                        return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !i.pseudos.empty(e)
                    },
                    header: function(e) {
                        return G.test(e.nodeName)
                    },
                    input: function(e) {
                        return Y.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: de((function() {
                        return [0]
                    })),
                    last: de((function(e, t) {
                        return [t - 1]
                    })),
                    eq: de((function(e, t, n) {
                        return [0 > n ? n + t : n]
                    })),
                    even: de((function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    })),
                    odd: de((function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    })),
                    lt: de((function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    })),
                    gt: de((function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                        return e
                    }))
                }
            }).pseudos.nth = i.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) i.pseudos[t] = ce(t);
        for (t in {
                submit: !0,
                reset: !0
            }) i.pseudos[t] = ue(t);

        function pe() {}

        function he(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
        }

        function ge(e, t, n) {
            var i = t.dir,
                o = n && "parentNode" === i,
                r = k++;
            return t.first ? function(t, n, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || o) return e(t, n, r)
            } : function(t, n, s) {
                var a, l, c, u = [S, r];
                if (s) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || o) {
                            if ((a = (l = (c = t[b] || (t[b] = {}))[t.uniqueID] || (c[t.uniqueID] = {}))[i]) && a[0] === S && a[1] === r) return u[2] = a[2];
                            if (l[i] = u, u[2] = e(t, n, s)) return !0
                        }
            }
        }

        function me(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function we(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; l > a; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
            return s
        }

        function ve(e, t, n, i, o, r) {
            return i && !i[b] && (i = ve(i)), o && !o[b] && (o = ve(o, r)), re((function(r, s, a, l) {
                var c, u, d, f = [],
                    p = [],
                    h = s.length,
                    g = r || function(e, t, n) {
                        for (var i = 0, o = t.length; o > i; i++) ie(e, t[i], n);
                        return n
                    }(t || "*", a.nodeType ? [a] : a, []),
                    m = !e || !r && t ? g : we(g, f, e, a, l),
                    w = n ? o || (r ? e : h || i) ? [] : s : m;
                if (n && n(m, w, a, l), i)
                    for (c = we(w, p), i(c, [], a, l), u = c.length; u--;)(d = c[u]) && (w[p[u]] = !(m[p[u]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (c = [], u = w.length; u--;)(d = w[u]) && c.push(m[u] = d);
                            o(null, w = [], c, l)
                        }
                        for (u = w.length; u--;)(d = w[u]) && (c = o ? F(r, d) : f[u]) > -1 && (r[c] = !(s[c] = d))
                    }
                } else w = we(w === s ? w.splice(h, w.length) : w), o ? o(null, s, w, l) : L.apply(s, w)
            }))
        }

        function ye(e) {
            for (var t, n, o, r = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = ge((function(e) {
                    return e === t
                }), a, !0), d = ge((function(e) {
                    return F(t, e) > -1
                }), a, !0), f = [function(e, n, i) {
                    var o = !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                    return t = null, o
                }]; r > l; l++)
                if (n = i.relative[e[l].type]) f = [ge(me(f), n)];
                else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[b]) {
                        for (o = ++l; r > o && !i.relative[e[o].type]; o++);
                        return ve(l > 1 && me(f), l > 1 && he(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(P, "$1"), n, o > l && ye(e.slice(l, o)), r > o && ye(e = e.slice(o)), r > o && he(e))
                    }
                    f.push(n)
                }
            return me(f)
        }

        function be(e, t) {
            var n = t.length > 0,
                o = e.length > 0,
                r = function(r, s, a, l, u) {
                    var d, h, m, w = 0,
                        v = "0",
                        y = r && [],
                        b = [],
                        x = c,
                        k = r || o && i.find.TAG("*", u),
                        T = S += null == x ? 1 : Math.random() || .1,
                        _ = k.length;
                    for (u && (c = s === p || s || u); v !== _ && null != (d = k[v]); v++) {
                        if (o && d) {
                            for (h = 0, s || d.ownerDocument === p || (f(d), a = !g); m = e[h++];)
                                if (m(d, s || p, a)) {
                                    l.push(d);
                                    break
                                }
                            u && (S = T)
                        }
                        n && ((d = !m && d) && w--, r && y.push(d))
                    }
                    if (w += v, n && v !== w) {
                        for (h = 0; m = t[h++];) m(y, b, s, a);
                        if (r) {
                            if (w > 0)
                                for (; v--;) y[v] || b[v] || (b[v] = D.call(l));
                            b = we(b)
                        }
                        L.apply(l, b), u && !r && b.length > 0 && w + t.length > 1 && ie.uniqueSort(l)
                    }
                    return u && (S = T, c = x), y
                };
            return n ? re(r) : r
        }
        return pe.prototype = i.filters = i.pseudos, i.setFilters = new pe, s = ie.tokenize = function(e, t) {
            var n, o, r, s, a, l, c, u = _[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (a = e, l = [], c = i.preFilter; a;) {
                for (s in n && !(o = M.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = U.exec(a)) && (n = o.shift(), r.push({
                        value: n,
                        type: o[0].replace(P, " ")
                    }), a = a.slice(n.length)), i.filter) !(o = V[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), r.push({
                    value: n,
                    type: s,
                    matches: o
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? ie.error(e) : _(e, l).slice(0)
        }, a = ie.compile = function(e, t) {
            var n, i = [],
                o = [],
                r = C[e + " "];
            if (!r) {
                for (t || (t = s(e)), n = t.length; n--;)(r = ye(t[n]))[b] ? i.push(r) : o.push(r);
                (r = C(e, be(o, i))).selector = e
            }
            return r
        }, l = ie.select = function(e, t, o, r) {
            var l, c, u, d, f, p = "function" == typeof e && e,
                h = !r && s(e = p.selector || e);
            if (o = o || [], 1 === h.length) {
                if ((c = h[0] = h[0].slice(0)).length > 2 && "ID" === (u = c[0]).type && n.getById && 9 === t.nodeType && g && i.relative[c[1].type]) {
                    if (!(t = (i.find.ID(u.matches[0].replace(ee, te), t) || [])[0])) return o;
                    p && (t = t.parentNode), e = e.slice(c.shift().value.length)
                }
                for (l = V.needsContext.test(e) ? 0 : c.length; l-- && (u = c[l], !i.relative[d = u.type]);)
                    if ((f = i.find[d]) && (r = f(u.matches[0].replace(ee, te), K.test(c[0].type) && fe(t.parentNode) || t))) {
                        if (c.splice(l, 1), !(e = r.length && he(c))) return L.apply(o, r), o;
                        break
                    }
            }
            return (p || a(e, h))(r, t, !g, o, !t || K.test(e) && fe(t.parentNode) || t), o
        }, n.sortStable = b.split("").sort(E).join("") === b, n.detectDuplicates = !!d, f(), n.sortDetached = se((function(e) {
            return 1 & e.compareDocumentPosition(p.createElement("div"))
        })), se((function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        })) || ae("type|href|height|width", (function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        })), n.attributes && se((function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        })) || ae("value", (function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        })), se((function(e) {
            return null == e.getAttribute("disabled")
        })) || ae(q, (function(e, t, n) {
            var i;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        })), ie
    }(e);
    p.find = y, p.expr = y.selectors, p.expr[":"] = p.expr.pseudos, p.uniqueSort = p.unique = y.uniqueSort, p.text = y.getText, p.isXMLDoc = y.isXML, p.contains = y.contains;
    var b = function(e, t, n) {
            for (var i = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && p(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        x = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        S = p.expr.match.needsContext,
        k = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        T = /^.[^:#\[\.,]*$/;

    function _(e, t, n) {
        if (p.isFunction(t)) return p.grep(e, (function(e, i) {
            return !!t.call(e, i, e) !== n
        }));
        if (t.nodeType) return p.grep(e, (function(e) {
            return e === t !== n
        }));
        if ("string" == typeof t) {
            if (T.test(t)) return p.filter(t, e, n);
            t = p.filter(t, e)
        }
        return p.grep(e, (function(e) {
            return a.call(t, e) > -1 !== n
        }))
    }
    p.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? p.find.matchesSelector(i, e) ? [i] : [] : p.find.matches(e, p.grep(t, (function(e) {
            return 1 === e.nodeType
        })))
    }, p.fn.extend({
        find: function(e) {
            var t, n = this.length,
                i = [],
                o = this;
            if ("string" != typeof e) return this.pushStack(p(e).filter((function() {
                for (t = 0; n > t; t++)
                    if (p.contains(o[t], this)) return !0
            })));
            for (t = 0; n > t; t++) p.find(e, o[t], i);
            return (i = this.pushStack(n > 1 ? p.unique(i) : i)).selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function(e) {
            return this.pushStack(_(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(_(this, e || [], !0))
        },
        is: function(e) {
            return !!_(this, "string" == typeof e && S.test(e) ? p(e) : e || [], !1).length
        }
    });
    var C, E = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (p.fn.init = function(e, t, n) {
        var o, r;
        if (!e) return this;
        if (n = n || C, "string" == typeof e) {
            if (!(o = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : E.exec(e)) || !o[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (o[1]) {
                if (t = t instanceof p ? t[0] : t, p.merge(this, p.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), k.test(o[1]) && p.isPlainObject(t))
                    for (o in t) p.isFunction(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                return this
            }
            return (r = i.getElementById(o[2])) && r.parentNode && (this.length = 1, this[0] = r), this.context = i, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : p.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(p) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), p.makeArray(e, this))
    }).prototype = p.fn, C = p(i);
    var A = /^(?:parents|prev(?:Until|All))/,
        N = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function D(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    p.fn.extend({
        has: function(e) {
            var t = p(e, this),
                n = t.length;
            return this.filter((function() {
                for (var e = 0; n > e; e++)
                    if (p.contains(this, t[e])) return !0
            }))
        },
        closest: function(e, t) {
            for (var n, i = 0, o = this.length, r = [], s = S.test(e) || "string" != typeof e ? p(e, t || this.context) : 0; o > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && p.find.matchesSelector(n, e))) {
                        r.push(n);
                        break
                    }
            return this.pushStack(r.length > 1 ? p.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? a.call(p(e), this[0]) : a.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(p.uniqueSort(p.merge(this.get(), p(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), p.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return b(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return b(e, "parentNode", n)
        },
        next: function(e) {
            return D(e, "nextSibling")
        },
        prev: function(e) {
            return D(e, "previousSibling")
        },
        nextAll: function(e) {
            return b(e, "nextSibling")
        },
        prevAll: function(e) {
            return b(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return b(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return b(e, "previousSibling", n)
        },
        siblings: function(e) {
            return x((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return x(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || p.merge([], e.childNodes)
        }
    }, (function(e, t) {
        p.fn[e] = function(n, i) {
            var o = p.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = p.filter(i, o)), this.length > 1 && (N[e] || p.uniqueSort(o), A.test(e) && o.reverse()), this.pushStack(o)
        }
    }));
    var j, L = /\S+/g;

    function W() {
        i.removeEventListener("DOMContentLoaded", W), e.removeEventListener("load", W), p.ready()
    }
    p.Callbacks = function(e) {
        e = "string" == typeof e ? function(e) {
            var t = {};
            return p.each(e.match(L) || [], (function(e, n) {
                t[n] = !0
            })), t
        }(e) : p.extend({}, e);
        var t, n, i, o, r = [],
            s = [],
            a = -1,
            l = function() {
                for (o = e.once, i = t = !0; s.length; a = -1)
                    for (n = s.shift(); ++a < r.length;) !1 === r[a].apply(n[0], n[1]) && e.stopOnFalse && (a = r.length, n = !1);
                e.memory || (n = !1), t = !1, o && (r = n ? [] : "")
            },
            c = {
                add: function() {
                    return r && (n && !t && (a = r.length - 1, s.push(n)), function t(n) {
                        p.each(n, (function(n, i) {
                            p.isFunction(i) ? e.unique && c.has(i) || r.push(i) : i && i.length && "string" !== p.type(i) && t(i)
                        }))
                    }(arguments), n && !t && l()), this
                },
                remove: function() {
                    return p.each(arguments, (function(e, t) {
                        for (var n;
                            (n = p.inArray(t, r, n)) > -1;) r.splice(n, 1), a >= n && a--
                    })), this
                },
                has: function(e) {
                    return e ? p.inArray(e, r) > -1 : r.length > 0
                },
                empty: function() {
                    return r && (r = []), this
                },
                disable: function() {
                    return o = s = [], r = n = "", this
                },
                disabled: function() {
                    return !r
                },
                lock: function() {
                    return o = s = [], n || (r = n = ""), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(e, n) {
                    return o || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return c
    }, p.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", p.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", p.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", p.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return p.Deferred((function(n) {
                            p.each(t, (function(t, r) {
                                var s = p.isFunction(e[t]) && e[t];
                                o[r[1]]((function() {
                                    var e = s && s.apply(this, arguments);
                                    e && p.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                }))
                            })), e = null
                        })).promise()
                    },
                    promise: function(e) {
                        return null != e ? p.extend(e, i) : i
                    }
                },
                o = {};
            return i.pipe = i.then, p.each(t, (function(e, r) {
                var s = r[2],
                    a = r[3];
                i[r[1]] = s.add, a && s.add((function() {
                    n = a
                }), t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function() {
                    return o[r[0] + "With"](this === o ? i : this, arguments), this
                }, o[r[0] + "With"] = s.fireWith
            })), i.promise(o), e && e.call(o, o), o
        },
        when: function(e) {
            var t, n, i, r = 0,
                s = o.call(arguments),
                a = s.length,
                l = 1 !== a || e && p.isFunction(e.promise) ? a : 0,
                c = 1 === l ? e : p.Deferred(),
                u = function(e, n, i) {
                    return function(r) {
                        n[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : r, i === t ? c.notifyWith(n, i) : --l || c.resolveWith(n, i)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) s[r] && p.isFunction(s[r].promise) ? s[r].promise().progress(u(r, n, t)).done(u(r, i, s)).fail(c.reject) : --l;
            return l || c.resolveWith(i, s), c.promise()
        }
    }), p.fn.ready = function(e) {
        return p.ready.promise().done(e), this
    }, p.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? p.readyWait++ : p.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --p.readyWait : p.isReady) || (p.isReady = !0, !0 !== e && --p.readyWait > 0 || (j.resolveWith(i, [p]), p.fn.triggerHandler && (p(i).triggerHandler("ready"), p(i).off("ready"))))
        }
    }), p.ready.promise = function(t) {
        return j || (j = p.Deferred(), "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(p.ready) : (i.addEventListener("DOMContentLoaded", W), e.addEventListener("load", W))), j.promise(t)
    }, p.ready.promise();
    var F = function(e, t, n, i, o, r, s) {
            var a = 0,
                l = e.length,
                c = null == n;
            if ("object" === p.type(n))
                for (a in o = !0, n) F(e, t, a, n[a], !0, r, s);
            else if (void 0 !== i && (o = !0, p.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(p(e), n)
                })), t))
                for (; l > a; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
        },
        q = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

    function O() {
        this.expando = p.expando + O.uid++
    }
    O.uid = 1, O.prototype = {
        register: function(e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        },
        cache: function(e) {
            if (!q(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t) o[t] = n;
            else
                for (i in t) o[i] = t[i];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (i = this.get(e, t)) ? i : this.get(e, p.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i, o, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 === t) this.register(e);
                else {
                    p.isArray(t) ? i = t.concat(t.map(p.camelCase)) : (o = p.camelCase(t), t in r ? i = [t, o] : i = (i = o) in r ? [i] : i.match(L) || []), n = i.length;
                    for (; n--;) delete r[i[n]]
                }(void 0 === t || p.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !p.isEmptyObject(t)
        }
    };
    var H = new O,
        R = new O,
        I = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        B = /[A-Z]/g;

    function P(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(B, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : I.test(n) ? p.parseJSON(n) : n)
                } catch (e) {}
                R.set(e, t, n)
            } else n = void 0;
        return n
    }
    p.extend({
        hasData: function(e) {
            return R.hasData(e) || H.hasData(e)
        },
        data: function(e, t, n) {
            return R.access(e, t, n)
        },
        removeData: function(e, t) {
            R.remove(e, t)
        },
        _data: function(e, t, n) {
            return H.access(e, t, n)
        },
        _removeData: function(e, t) {
            H.remove(e, t)
        }
    }), p.fn.extend({
        data: function(e, t) {
            var n, i, o, r = this[0],
                s = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = R.get(r), 1 === r.nodeType && !H.get(r, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (0 === (i = s[n].name).indexOf("data-") && (i = p.camelCase(i.slice(5)), P(r, i, o[i])));
                    H.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each((function() {
                R.set(this, e)
            })) : F(this, (function(t) {
                var n, i;
                if (r && void 0 === t) {
                    if (void 0 !== (n = R.get(r, e) || R.get(r, e.replace(B, "-$&").toLowerCase()))) return n;
                    if (i = p.camelCase(e), void 0 !== (n = R.get(r, i))) return n;
                    if (void 0 !== (n = P(r, i, void 0))) return n
                } else i = p.camelCase(e), this.each((function() {
                    var n = R.get(this, i);
                    R.set(this, i, t), e.indexOf("-") > -1 && void 0 !== n && R.set(this, e, t)
                }))
            }), null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each((function() {
                R.remove(this, e)
            }))
        }
    }), p.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = H.get(e, t), n && (!i || p.isArray(n) ? i = H.access(e, t, p.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = p.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = p._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, (function() {
                p.dequeue(e, t)
            }), r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return H.get(e, n) || H.access(e, n, {
                empty: p.Callbacks("once memory").add((function() {
                    H.remove(e, [t + "queue", n])
                }))
            })
        }
    }), p.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? p.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                var n = p.queue(this, e, t);
                p._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && p.dequeue(this, e)
            }))
        },
        dequeue: function(e) {
            return this.each((function() {
                p.dequeue(this, e)
            }))
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                o = p.Deferred(),
                r = this,
                s = this.length,
                a = function() {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = H.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var M = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        U = new RegExp("^(?:([+-])=|)(" + M + ")([a-z%]*)$", "i"),
        $ = ["Top", "Right", "Bottom", "Left"],
        z = function(e, t) {
            return e = t || e, "none" === p.css(e, "display") || !p.contains(e.ownerDocument, e)
        };

    function X(e, t, n, i) {
        var o, r = 1,
            s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return p.css(e, t, "")
            },
            l = a(),
            c = n && n[3] || (p.cssNumber[t] ? "" : "px"),
            u = (p.cssNumber[t] || "px" !== c && +l) && U.exec(p.css(e, t));
        if (u && u[3] !== c) {
            c = c || u[3], n = n || [], u = +l || 1;
            do {
                u /= r = r || ".5", p.style(e, t, u + c)
            } while (r !== (r = a() / l) && 1 !== r && --s)
        }
        return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
    }
    var V = /^(?:checkbox|radio)$/i,
        Y = /<([\w:-]+)/,
        G = /^$|\/(?:java|ecma)script/i,
        J = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function Q(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && p.nodeName(e, t) ? p.merge([e], n) : n
    }

    function K(e, t) {
        for (var n = 0, i = e.length; i > n; n++) H.set(e[n], "globalEval", !t || H.get(t[n], "globalEval"))
    }
    J.optgroup = J.option, J.tbody = J.tfoot = J.colgroup = J.caption = J.thead, J.th = J.td;
    var Z = /<|&#?\w+;/;

    function ee(e, t, n, i, o) {
        for (var r, s, a, l, c, u, d = t.createDocumentFragment(), f = [], h = 0, g = e.length; g > h; h++)
            if ((r = e[h]) || 0 === r)
                if ("object" === p.type(r)) p.merge(f, r.nodeType ? [r] : r);
                else if (Z.test(r)) {
            for (s = s || d.appendChild(t.createElement("div")), a = (Y.exec(r) || ["", ""])[1].toLowerCase(), l = J[a] || J._default, s.innerHTML = l[1] + p.htmlPrefilter(r) + l[2], u = l[0]; u--;) s = s.lastChild;
            p.merge(f, s.childNodes), (s = d.firstChild).textContent = ""
        } else f.push(t.createTextNode(r));
        for (d.textContent = "", h = 0; r = f[h++];)
            if (i && p.inArray(r, i) > -1) o && o.push(r);
            else if (c = p.contains(r.ownerDocument, r), s = Q(d.appendChild(r), "script"), c && K(s), n)
            for (u = 0; r = s[u++];) G.test(r.type || "") && n.push(r);
        return d
    }! function() {
        var e = i.createDocumentFragment().appendChild(i.createElement("div")),
            t = i.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), d.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", d.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var te = /^key/,
        ne = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ie = /^([^.]*)(?:\.(.+)|)/;

    function oe() {
        return !0
    }

    function re() {
        return !1
    }

    function se() {
        try {
            return i.activeElement
        } catch (e) {}
    }

    function ae(e, t, n, i, o, r) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) ae(e, a, n, i, t[a], r);
            return e
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = re;
        else if (!o) return e;
        return 1 === r && (s = o, (o = function(e) {
            return p().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = p.guid++)), e.each((function() {
            p.event.add(this, t, o, i, n)
        }))
    }
    p.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var r, s, a, l, c, u, d, f, h, g, m, w = H.get(e);
            if (w)
                for (n.handler && (n = (r = n).handler, o = r.selector), n.guid || (n.guid = p.guid++), (l = w.events) || (l = w.events = {}), (s = w.handle) || (s = w.handle = function(t) {
                        return void 0 !== p && p.event.triggered !== t.type ? p.event.dispatch.apply(e, arguments) : void 0
                    }), c = (t = (t || "").match(L) || [""]).length; c--;) h = m = (a = ie.exec(t[c]) || [])[1], g = (a[2] || "").split(".").sort(), h && (d = p.event.special[h] || {}, h = (o ? d.delegateType : d.bindType) || h, d = p.event.special[h] || {}, u = p.extend({
                    type: h,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && p.expr.match.needsContext.test(o),
                    namespace: g.join(".")
                }, r), (f = l[h]) || ((f = l[h] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, g, s) || e.addEventListener && e.addEventListener(h, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, u) : f.push(u), p.event.global[h] = !0)
        },
        remove: function(e, t, n, i, o) {
            var r, s, a, l, c, u, d, f, h, g, m, w = H.hasData(e) && H.get(e);
            if (w && (l = w.events)) {
                for (c = (t = (t || "").match(L) || [""]).length; c--;)
                    if (h = m = (a = ie.exec(t[c]) || [])[1], g = (a[2] || "").split(".").sort(), h) {
                        for (d = p.event.special[h] || {}, f = l[h = (i ? d.delegateType : d.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = f.length; r--;) u = f[r], !o && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(r, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                        s && !f.length && (d.teardown && !1 !== d.teardown.call(e, g, w.handle) || p.removeEvent(e, h, w.handle), delete l[h])
                    } else
                        for (h in l) p.event.remove(e, h + t[c], n, i, !0);
                p.isEmptyObject(l) && H.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = p.event.fix(e);
            var t, n, i, r, s, a = [],
                l = o.call(arguments),
                c = (H.get(this, "events") || {})[e.type] || [],
                u = p.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                for (a = p.event.handlers.call(this, e, c), t = 0;
                    (r = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, n = 0;
                        (s = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(s.namespace) || (e.handleObj = s, e.data = s.data, void 0 !== (i = ((p.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, l)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, s = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (i = [], n = 0; a > n; n++) void 0 === i[o = (r = t[n]).selector + " "] && (i[o] = r.needsContext ? p(o, this).index(l) > -1 : p.find(o, this, null, [l]).length), i[o] && i.push(r);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, o, r, s = t.button;
                return null == e.pageX && null != t.clientX && (o = (n = e.target.ownerDocument || i).documentElement, r = n.body, e.pageX = t.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[p.expando]) return e;
            var t, n, o, r = e.type,
                s = e,
                a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = ne.test(r) ? this.mouseHooks : te.test(r) ? this.keyHooks : {}), o = a.props ? this.props.concat(a.props) : this.props, e = new p.Event(s), t = o.length; t--;) e[n = o[t]] = s[n];
            return e.target || (e.target = i), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, s) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== se() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === se() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && p.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return p.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, p.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, p.Event = function(e, t) {
        return this instanceof p.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? oe : re) : this.type = e, t && p.extend(this, t), this.timeStamp = e && e.timeStamp || p.now(), void(this[p.expando] = !0)) : new p.Event(e, t)
    }, p.Event.prototype = {
        constructor: p.Event,
        isDefaultPrevented: re,
        isPropagationStopped: re,
        isImmediatePropagationStopped: re,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = oe, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = oe, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = oe, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, p.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function(e, t) {
        p.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    o = e.relatedTarget,
                    r = e.handleObj;
                return o && (o === i || p.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    })), p.fn.extend({
        on: function(e, t, n, i) {
            return ae(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return ae(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, p(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = re), this.each((function() {
                p.event.remove(this, e, n, t)
            }))
        }
    });
    var le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        ce = /<script|<style|<link/i,
        ue = /checked\s*(?:[^=]|=\s*.checked.)/i,
        de = /^true\/(.*)/,
        fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function pe(e, t) {
        return p.nodeName(e, "table") && p.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function he(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function ge(e) {
        var t = de.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function me(e, t) {
        var n, i, o, r, s, a, l, c;
        if (1 === t.nodeType) {
            if (H.hasData(e) && (r = H.access(e), s = H.set(t, r), c = r.events))
                for (o in delete s.handle, s.events = {}, c)
                    for (n = 0, i = c[o].length; i > n; n++) p.event.add(t, o, c[o][n]);
            R.hasData(e) && (a = R.access(e), l = p.extend({}, a), R.set(t, l))
        }
    }

    function we(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && V.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function ve(e, t, n, i) {
        t = r.apply([], t);
        var o, s, a, l, c, u, f = 0,
            h = e.length,
            g = h - 1,
            m = t[0],
            w = p.isFunction(m);
        if (w || h > 1 && "string" == typeof m && !d.checkClone && ue.test(m)) return e.each((function(o) {
            var r = e.eq(o);
            w && (t[0] = m.call(this, o, r.html())), ve(r, t, n, i)
        }));
        if (h && (s = (o = ee(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === o.childNodes.length && (o = s), s || i)) {
            for (l = (a = p.map(Q(o, "script"), he)).length; h > f; f++) c = o, f !== g && (c = p.clone(c, !0, !0), l && p.merge(a, Q(c, "script"))), n.call(e[f], c, f);
            if (l)
                for (u = a[a.length - 1].ownerDocument, p.map(a, ge), f = 0; l > f; f++) c = a[f], G.test(c.type || "") && !H.access(c, "globalEval") && p.contains(u, c) && (c.src ? p._evalUrl && p._evalUrl(c.src) : p.globalEval(c.textContent.replace(fe, "")))
        }
        return e
    }

    function ye(e, t, n) {
        for (var i, o = t ? p.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || p.cleanData(Q(i)), i.parentNode && (n && p.contains(i.ownerDocument, i) && K(Q(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    p.extend({
        htmlPrefilter: function(e) {
            return e.replace(le, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, o, r, s, a = e.cloneNode(!0),
                l = p.contains(e.ownerDocument, e);
            if (!(d.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || p.isXMLDoc(e)))
                for (s = Q(a), i = 0, o = (r = Q(e)).length; o > i; i++) we(r[i], s[i]);
            if (t)
                if (n)
                    for (r = r || Q(e), s = s || Q(a), i = 0, o = r.length; o > i; i++) me(r[i], s[i]);
                else me(e, a);
            return (s = Q(a, "script")).length > 0 && K(s, !l && Q(e, "script")), a
        },
        cleanData: function(e) {
            for (var t, n, i, o = p.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (q(n)) {
                    if (t = n[H.expando]) {
                        if (t.events)
                            for (i in t.events) o[i] ? p.event.remove(n, i) : p.removeEvent(n, i, t.handle);
                        n[H.expando] = void 0
                    }
                    n[R.expando] && (n[R.expando] = void 0)
                }
        }
    }), p.fn.extend({
        domManip: ve,
        detach: function(e) {
            return ye(this, e, !0)
        },
        remove: function(e) {
            return ye(this, e)
        },
        text: function(e) {
            return F(this, (function(e) {
                return void 0 === e ? p.text(this) : this.empty().each((function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                }))
            }), null, e, arguments.length)
        },
        append: function() {
            return ve(this, arguments, (function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || pe(this, e).appendChild(e)
            }))
        },
        prepend: function() {
            return ve(this, arguments, (function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = pe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }))
        },
        before: function() {
            return ve(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }))
        },
        after: function() {
            return ve(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }))
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (p.cleanData(Q(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map((function() {
                return p.clone(this, e, t)
            }))
        },
        html: function(e) {
            return F(this, (function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ce.test(e) && !J[(Y.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = p.htmlPrefilter(e);
                    try {
                        for (; i > n; n++) 1 === (t = this[n] || {}).nodeType && (p.cleanData(Q(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }), null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return ve(this, arguments, (function(t) {
                var n = this.parentNode;
                p.inArray(this, e) < 0 && (p.cleanData(Q(this)), n && n.replaceChild(t, this))
            }), e)
        }
    }), p.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(e, t) {
        p.fn[e] = function(e) {
            for (var n, i = [], o = p(e), r = o.length - 1, a = 0; r >= a; a++) n = a === r ? this : this.clone(!0), p(o[a])[t](n), s.apply(i, n.get());
            return this.pushStack(i)
        }
    }));
    var be, xe = {
        HTML: "block",
        BODY: "block"
    };

    function Se(e, t) {
        var n = p(t.createElement(e)).appendTo(t.body),
            i = p.css(n[0], "display");
        return n.detach(), i
    }

    function ke(e) {
        var t = i,
            n = xe[e];
        return n || ("none" !== (n = Se(e, t)) && n || ((t = (be = (be || p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = Se(e, t), be.detach()), xe[e] = n), n
    }
    var Te = /^margin/,
        _e = new RegExp("^(" + M + ")(?!px)[a-z%]+$", "i"),
        Ce = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Ee = function(e, t, n, i) {
            var o, r, s = {};
            for (r in t) s[r] = e.style[r], e.style[r] = t[r];
            for (r in o = n.apply(e, i || []), t) e.style[r] = s[r];
            return o
        },
        Ae = i.documentElement;

    function Ne(e, t, n) {
        var i, o, r, s, a = e.style;
        return "" !== (s = (n = n || Ce(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== s || p.contains(e.ownerDocument, e) || (s = p.style(e, t)), n && !d.pixelMarginRight() && _e.test(s) && Te.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r), void 0 !== s ? s + "" : s
    }

    function De(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }! function() {
        var t, n, o, r, s = i.createElement("div"),
            a = i.createElement("div");
        if (a.style) {
            function l() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Ae.appendChild(s);
                var i = e.getComputedStyle(a);
                t = "1%" !== i.top, r = "2px" === i.marginLeft, n = "4px" === i.width, a.style.marginRight = "50%", o = "4px" === i.marginRight, Ae.removeChild(s)
            }
            a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", d.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), p.extend(d, {
                pixelPosition: function() {
                    return l(), t
                },
                boxSizingReliable: function() {
                    return null == n && l(), n
                },
                pixelMarginRight: function() {
                    return null == n && l(), o
                },
                reliableMarginLeft: function() {
                    return null == n && l(), r
                },
                reliableMarginRight: function() {
                    var t, n = a.appendChild(i.createElement("div"));
                    return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", Ae.appendChild(s), t = !parseFloat(e.getComputedStyle(n).marginRight), Ae.removeChild(s), a.removeChild(n), t
                }
            })
        }
    }();
    var je = /^(none|table(?!-c[ea]).+)/,
        Le = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        We = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Fe = ["Webkit", "O", "Moz", "ms"],
        qe = i.createElement("div").style;

    function Oe(e) {
        if (e in qe) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = Fe.length; n--;)
            if ((e = Fe[n] + t) in qe) return e
    }

    function He(e, t, n) {
        var i = U.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function Re(e, t, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === n && (s += p.css(e, n + $[r], !0, o)), i ? ("content" === n && (s -= p.css(e, "padding" + $[r], !0, o)), "margin" !== n && (s -= p.css(e, "border" + $[r] + "Width", !0, o))) : (s += p.css(e, "padding" + $[r], !0, o), "padding" !== n && (s += p.css(e, "border" + $[r] + "Width", !0, o)));
        return s
    }

    function Ie(e, t, n) {
        var i = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = Ce(e),
            s = "border-box" === p.css(e, "boxSizing", !1, r);
        if (0 >= o || null == o) {
            if ((0 > (o = Ne(e, t, r)) || null == o) && (o = e.style[t]), _e.test(o)) return o;
            i = s && (d.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + Re(e, t, n || (s ? "border" : "content"), i, r) + "px"
    }

    function Be(e, t) {
        for (var n, i, o, r = [], s = 0, a = e.length; a > s; s++)(i = e[s]).style && (r[s] = H.get(i, "olddisplay"), n = i.style.display, t ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && z(i) && (r[s] = H.access(i, "olddisplay", ke(i.nodeName)))) : (o = z(i), "none" === n && o || H.set(i, "olddisplay", o ? n : p.css(i, "display"))));
        for (s = 0; a > s; s++)(i = e[s]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[s] || "" : "none"));
        return e
    }

    function Pe(e, t, n, i, o) {
        return new Pe.prototype.init(e, t, n, i, o)
    }
    p.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ne(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
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
            float: "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = p.camelCase(t),
                    l = e.style;
                return t = p.cssProps[a] || (p.cssProps[a] = Oe(a) || a), s = p.cssHooks[t] || p.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : l[t] : ("string" === (r = typeof n) && (o = U.exec(n)) && o[1] && (n = X(e, t, o), r = "number"), void(null != n && n == n && ("number" === r && (n += o && o[3] || (p.cssNumber[a] ? "" : "px")), d.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n))))
            }
        },
        css: function(e, t, n, i) {
            var o, r, s, a = p.camelCase(t);
            return t = p.cssProps[a] || (p.cssProps[a] = Oe(a) || a), (s = p.cssHooks[t] || p.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = Ne(e, t, i)), "normal" === o && t in We && (o = We[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }), p.each(["height", "width"], (function(e, t) {
        p.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? je.test(p.css(e, "display")) && 0 === e.offsetWidth ? Ee(e, Le, (function() {
                    return Ie(e, t, i)
                })) : Ie(e, t, i) : void 0
            },
            set: function(e, n, i) {
                var o, r = i && Ce(e),
                    s = i && Re(e, t, i, "border-box" === p.css(e, "boxSizing", !1, r), r);
                return s && (o = U.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = p.css(e, t)), He(0, n, s)
            }
        }
    })), p.cssHooks.marginLeft = De(d.reliableMarginLeft, (function(e, t) {
        return t ? (parseFloat(Ne(e, "marginLeft")) || e.getBoundingClientRect().left - Ee(e, {
            marginLeft: 0
        }, (function() {
            return e.getBoundingClientRect().left
        }))) + "px" : void 0
    })), p.cssHooks.marginRight = De(d.reliableMarginRight, (function(e, t) {
        return t ? Ee(e, {
            display: "inline-block"
        }, Ne, [e, "marginRight"]) : void 0
    })), p.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(e, t) {
        p.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + $[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, Te.test(e) || (p.cssHooks[e + t].set = He)
    })), p.fn.extend({
        css: function(e, t) {
            return F(this, (function(e, t, n) {
                var i, o, r = {},
                    s = 0;
                if (p.isArray(t)) {
                    for (i = Ce(e), o = t.length; o > s; s++) r[t[s]] = p.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? p.style(e, t, n) : p.css(e, t)
            }), e, t, arguments.length > 1)
        },
        show: function() {
            return Be(this, !0)
        },
        hide: function() {
            return Be(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                z(this) ? p(this).show() : p(this).hide()
            }))
        }
    }), p.Tween = Pe, Pe.prototype = {
        constructor: Pe,
        init: function(e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || p.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (p.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Pe.propHooks[this.prop];
            return e && e.get ? e.get(this) : Pe.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Pe.propHooks[this.prop];
            return this.options.duration ? this.pos = t = p.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Pe.propHooks._default.set(this), this
        }
    }, Pe.prototype.init.prototype = Pe.prototype, Pe.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = p.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                p.fx.step[e.prop] ? p.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[p.cssProps[e.prop]] && !p.cssHooks[e.prop] ? e.elem[e.prop] = e.now : p.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, Pe.propHooks.scrollTop = Pe.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, p.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, p.fx = Pe.prototype.init, p.fx.step = {};
    var Me, Ue, $e = /^(?:toggle|show|hide)$/,
        ze = /queueHooks$/;

    function Xe() {
        return e.setTimeout((function() {
            Me = void 0
        })), Me = p.now()
    }

    function Ve(e, t) {
        var n, i = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) o["margin" + (n = $[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function Ye(e, t, n) {
        for (var i, o = (Ge.tweeners[t] || []).concat(Ge.tweeners["*"]), r = 0, s = o.length; s > r; r++)
            if (i = o[r].call(n, t, e)) return i
    }

    function Ge(e, t, n) {
        var i, o, r = 0,
            s = Ge.prefilters.length,
            a = p.Deferred().always((function() {
                delete l.elem
            })),
            l = function() {
                if (o) return !1;
                for (var t = Me || Xe(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; s > r; r++) c.tweens[r].run(i);
                return a.notifyWith(e, [c, i, n]), 1 > i && s ? n : (a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: p.extend({}, t),
                opts: p.extend(!0, {
                    specialEasing: {},
                    easing: p.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Me || Xe(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = p.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i > n; n++) c.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (function(e, t) {
                var n, i, o, r, s;
                for (n in e)
                    if (o = t[i = p.camelCase(n)], r = e[n], p.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = p.cssHooks[i]) && "expand" in s)
                        for (n in r = s.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
                    else t[i] = o
            }(u, c.opts.specialEasing); s > r; r++)
            if (i = Ge.prefilters[r].call(c, e, u, c.opts)) return p.isFunction(i.stop) && (p._queueHooks(c.elem, c.opts.queue).stop = p.proxy(i.stop, i)), i;
        return p.map(u, Ye, c), p.isFunction(c.opts.start) && c.opts.start.call(e, c), p.fx.timer(p.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    p.Animation = p.extend(Ge, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return X(n.elem, e, U.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                p.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(L);
                for (var n, i = 0, o = e.length; o > i; i++) n = e[i], Ge.tweeners[n] = Ge.tweeners[n] || [], Ge.tweeners[n].unshift(t)
            },
            prefilters: [function(e, t, n) {
                var i, o, r, s, a, l, c, u = this,
                    d = {},
                    f = e.style,
                    h = e.nodeType && z(e),
                    g = H.get(e, "fxshow");
                for (i in n.queue || (null == (a = p._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                        a.unqueued || l()
                    }), a.unqueued++, u.always((function() {
                        u.always((function() {
                            a.unqueued--, p.queue(e, "fx").length || a.empty.fire()
                        }))
                    }))), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ("none" === (c = p.css(e, "display")) ? H.get(e, "olddisplay") || ke(e.nodeName) : c) && "none" === p.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", u.always((function() {
                        f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                    }))), t)
                    if (o = t[i], $e.exec(o)) {
                        if (delete t[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
                            if ("show" !== o || !g || void 0 === g[i]) continue;
                            h = !0
                        }
                        d[i] = g && g[i] || p.style(e, i)
                    } else c = void 0;
                if (p.isEmptyObject(d)) "inline" === ("none" === c ? ke(e.nodeName) : c) && (f.display = c);
                else
                    for (i in g ? "hidden" in g && (h = g.hidden) : g = H.access(e, "fxshow", {}), r && (g.hidden = !h), h ? p(e).show() : u.done((function() {
                            p(e).hide()
                        })), u.done((function() {
                            var t;
                            for (t in H.remove(e, "fxshow"), d) p.style(e, t, d[t])
                        })), d) s = Ye(h ? g[i] : 0, i, u), i in g || (g[i] = s.start, h && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
            }],
            prefilter: function(e, t) {
                t ? Ge.prefilters.unshift(e) : Ge.prefilters.push(e)
            }
        }), p.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? p.extend({}, e) : {
                complete: n || !n && t || p.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !p.isFunction(t) && t
            };
            return i.duration = p.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in p.fx.speeds ? p.fx.speeds[i.duration] : p.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                p.isFunction(i.old) && i.old.call(this), i.queue && p.dequeue(this, i.queue)
            }, i
        }, p.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(z).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var o = p.isEmptyObject(e),
                    r = p.speed(t, n, i),
                    s = function() {
                        var t = Ge(this, p.extend({}, e), r);
                        (o || H.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each((function() {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        r = p.timers,
                        s = H.get(this);
                    if (o) s[o] && s[o].stop && i(s[o]);
                    else
                        for (o in s) s[o] && s[o].stop && ze.test(o) && i(s[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                    !t && n || p.dequeue(this, e)
                }))
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each((function() {
                    var t, n = H.get(this),
                        i = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        r = p.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, p.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                }))
            }
        }), p.each(["toggle", "show", "hide"], (function(e, t) {
            var n = p.fn[t];
            p.fn[t] = function(e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(Ve(t, !0), e, i, o)
            }
        })), p.each({
            slideDown: Ve("show"),
            slideUp: Ve("hide"),
            slideToggle: Ve("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, (function(e, t) {
            p.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        })), p.timers = [], p.fx.tick = function() {
            var e, t = 0,
                n = p.timers;
            for (Me = p.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || p.fx.stop(), Me = void 0
        }, p.fx.timer = function(e) {
            p.timers.push(e), e() ? p.fx.start() : p.timers.pop()
        }, p.fx.interval = 13, p.fx.start = function() {
            Ue || (Ue = e.setInterval(p.fx.tick, p.fx.interval))
        }, p.fx.stop = function() {
            e.clearInterval(Ue), Ue = null
        }, p.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, p.fn.delay = function(t, n) {
            return t = p.fx && p.fx.speeds[t] || t, n = n || "fx", this.queue(n, (function(n, i) {
                var o = e.setTimeout(n, t);
                i.stop = function() {
                    e.clearTimeout(o)
                }
            }))
        },
        function() {
            var e = i.createElement("input"),
                t = i.createElement("select"),
                n = t.appendChild(i.createElement("option"));
            e.type = "checkbox", d.checkOn = "" !== e.value, d.optSelected = n.selected, t.disabled = !0, d.optDisabled = !n.disabled, (e = i.createElement("input")).value = "t", e.type = "radio", d.radioValue = "t" === e.value
        }();
    var Je, Qe = p.expr.attrHandle;
    p.fn.extend({
        attr: function(e, t) {
            return F(this, p.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each((function() {
                p.removeAttr(this, e)
            }))
        }
    }), p.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? p.prop(e, t, n) : (1 === r && p.isXMLDoc(e) || (t = t.toLowerCase(), o = p.attrHooks[t] || (p.expr.match.bool.test(t) ? Je : void 0)), void 0 !== n ? null === n ? void p.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = p.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!d.radioValue && "radio" === t && p.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i, o = 0,
                r = t && t.match(L);
            if (r && 1 === e.nodeType)
                for (; n = r[o++];) i = p.propFix[n] || n, p.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
        }
    }), Je = {
        set: function(e, t, n) {
            return !1 === t ? p.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, p.each(p.expr.match.bool.source.match(/\w+/g), (function(e, t) {
        var n = Qe[t] || p.find.attr;
        Qe[t] = function(e, t, i) {
            var o, r;
            return i || (r = Qe[t], Qe[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, Qe[t] = r), o
        }
    }));
    var Ke = /^(?:input|select|textarea|button)$/i,
        Ze = /^(?:a|area)$/i;
    p.fn.extend({
        prop: function(e, t) {
            return F(this, p.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each((function() {
                delete this[p.propFix[e] || e]
            }))
        }
    }), p.extend({
        prop: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && p.isXMLDoc(e) || (t = p.propFix[t] || t, o = p.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = p.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Ke.test(e.nodeName) || Ze.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), d.optSelected || (p.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
        p.propFix[this.toLowerCase()] = this
    }));
    var et = /[\t\r\n\f]/g;

    function tt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    p.fn.extend({
        addClass: function(e) {
            var t, n, i, o, r, s, a, l = 0;
            if (p.isFunction(e)) return this.each((function(t) {
                p(this).addClass(e.call(this, t, tt(this)))
            }));
            if ("string" == typeof e && e)
                for (t = e.match(L) || []; n = this[l++];)
                    if (o = tt(n), i = 1 === n.nodeType && (" " + o + " ").replace(et, " ")) {
                        for (s = 0; r = t[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        o !== (a = p.trim(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, o, r, s, a, l = 0;
            if (p.isFunction(e)) return this.each((function(t) {
                p(this).removeClass(e.call(this, t, tt(this)))
            }));
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(L) || []; n = this[l++];)
                    if (o = tt(n), i = 1 === n.nodeType && (" " + o + " ").replace(et, " ")) {
                        for (s = 0; r = t[s++];)
                            for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                        o !== (a = p.trim(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : p.isFunction(e) ? this.each((function(n) {
                p(this).toggleClass(e.call(this, n, tt(this), t), t)
            })) : this.each((function() {
                var t, i, o, r;
                if ("string" === n)
                    for (i = 0, o = p(this), r = e.match(L) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = tt(this)) && H.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : H.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + tt(n) + " ").replace(et, " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var nt = /\r/g,
        it = /[\x20\t\r\n\f]+/g;
    p.fn.extend({
        val: function(e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = p.isFunction(e), this.each((function(n) {
                var o;
                1 === this.nodeType && (null == (o = i ? e.call(this, n, p(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : p.isArray(o) && (o = p.map(o, (function(e) {
                    return null == e ? "" : e + ""
                }))), (t = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            }))) : o ? (t = p.valHooks[o.type] || p.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(nt, "") : null == n ? "" : n : void 0
        }
    }), p.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = p.find.attr(e, "value");
                    return null != t ? t : p.trim(p.text(e)).replace(it, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                        if (((n = i[l]).selected || l === o) && (d.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !p.nodeName(n.parentNode, "optgroup"))) {
                            if (t = p(n).val(), r) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = p.makeArray(t), s = o.length; s--;)((i = o[s]).selected = p.inArray(p.valHooks.option.get(i), r) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), p.each(["radio", "checkbox"], (function() {
        p.valHooks[this] = {
            set: function(e, t) {
                return p.isArray(t) ? e.checked = p.inArray(p(e).val(), t) > -1 : void 0
            }
        }, d.checkOn || (p.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }));
    var ot = /^(?:focusinfocus|focusoutblur)$/;
    p.extend(p.event, {
        trigger: function(t, n, o, r) {
            var s, a, l, c, d, f, h, g = [o || i],
                m = u.call(t, "type") ? t.type : t,
                w = u.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = l = o = o || i, 3 !== o.nodeType && 8 !== o.nodeType && !ot.test(m + p.event.triggered) && (m.indexOf(".") > -1 && (w = m.split("."), m = w.shift(), w.sort()), d = m.indexOf(":") < 0 && "on" + m, (t = t[p.expando] ? t : new p.Event(m, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = w.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), n = null == n ? [t] : p.makeArray(n, [t]), h = p.event.special[m] || {}, r || !h.trigger || !1 !== h.trigger.apply(o, n))) {
                if (!r && !h.noBubble && !p.isWindow(o)) {
                    for (c = h.delegateType || m, ot.test(c + m) || (a = a.parentNode); a; a = a.parentNode) g.push(a), l = a;
                    l === (o.ownerDocument || i) && g.push(l.defaultView || l.parentWindow || e)
                }
                for (s = 0;
                    (a = g[s++]) && !t.isPropagationStopped();) t.type = s > 1 ? c : h.bindType || m, (f = (H.get(a, "events") || {})[t.type] && H.get(a, "handle")) && f.apply(a, n), (f = d && a[d]) && f.apply && q(a) && (t.result = f.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = m, r || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(g.pop(), n) || !q(o) || d && p.isFunction(o[m]) && !p.isWindow(o) && ((l = o[d]) && (o[d] = null), p.event.triggered = m, o[m](), p.event.triggered = void 0, l && (o[d] = l)), t.result
            }
        },
        simulate: function(e, t, n) {
            var i = p.extend(new p.Event, n, {
                type: e,
                isSimulated: !0
            });
            p.event.trigger(i, null, t)
        }
    }), p.fn.extend({
        trigger: function(e, t) {
            return this.each((function() {
                p.event.trigger(e, t, this)
            }))
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? p.event.trigger(e, t, n, !0) : void 0
        }
    }), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), (function(e, t) {
        p.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    })), p.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), d.focusin = "onfocusin" in e, d.focusin || p.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        var n = function(e) {
            p.event.simulate(t, e.target, p.event.fix(e))
        };
        p.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    o = H.access(i, t);
                o || i.addEventListener(e, n, !0), H.access(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    o = H.access(i, t) - 1;
                o ? H.access(i, t, o) : (i.removeEventListener(e, n, !0), H.remove(i, t))
            }
        }
    }));
    var rt = e.location,
        st = p.now(),
        at = /\?/;
    p.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, p.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || p.error("Invalid XML: " + t), n
    };
    var lt = /#.*$/,
        ct = /([?&])_=[^&]*/,
        ut = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        dt = /^(?:GET|HEAD)$/,
        ft = /^\/\//,
        pt = {},
        ht = {},
        gt = "*/".concat("*"),
        mt = i.createElement("a");

    function wt(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0,
                r = t.toLowerCase().match(L) || [];
            if (p.isFunction(n))
                for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function vt(e, t, n, i) {
        var o = {},
            r = e === ht;

        function s(a) {
            var l;
            return o[a] = !0, p.each(e[a] || [], (function(e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1)
            })), l
        }
        return s(t.dataTypes[0]) || !o["*"] && s("*")
    }

    function yt(e, t) {
        var n, i, o = p.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && p.extend(!0, e, i), e
    }
    mt.href = rt.href, p.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: rt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(rt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": gt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": p.parseJSON,
                "text xml": p.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? yt(yt(e, p.ajaxSettings), t) : yt(p.ajaxSettings, e)
        },
        ajaxPrefilter: wt(pt),
        ajaxTransport: wt(ht),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var o, r, s, a, l, c, u, d, f = p.ajaxSetup({}, n),
                h = f.context || f,
                g = f.context && (h.nodeType || h.jquery) ? p(h) : p.event,
                m = p.Deferred(),
                w = p.Callbacks("once memory"),
                v = f.statusCode || {},
                y = {},
                b = {},
                x = 0,
                S = "canceled",
                k = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!a)
                                for (a = {}; t = ut.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return x || (e = b[n] = b[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return x || (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) v[t] = [v[t], e[t]];
                            else k.always(e[k.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || S;
                        return o && o.abort(t), T(0, t), this
                    }
                };
            if (m.promise(k).complete = w.add, k.success = k.done, k.error = k.fail, f.url = ((t || f.url || rt.href) + "").replace(lt, "").replace(ft, rt.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = p.trim(f.dataType || "*").toLowerCase().match(L) || [""], null == f.crossDomain) {
                c = i.createElement("a");
                try {
                    c.href = f.url, c.href = c.href, f.crossDomain = mt.protocol + "//" + mt.host != c.protocol + "//" + c.host
                } catch (e) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = p.param(f.data, f.traditional)), vt(pt, f, n, k), 2 === x) return k;
            for (d in (u = p.event && f.global) && 0 == p.active++ && p.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !dt.test(f.type), r = f.url, f.hasContent || (f.data && (r = f.url += (at.test(r) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = ct.test(r) ? r.replace(ct, "$1_=" + st++) : r + (at.test(r) ? "&" : "?") + "_=" + st++)), f.ifModified && (p.lastModified[r] && k.setRequestHeader("If-Modified-Since", p.lastModified[r]), p.etag[r] && k.setRequestHeader("If-None-Match", p.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && k.setRequestHeader("Content-Type", f.contentType), k.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + gt + "; q=0.01" : "") : f.accepts["*"]), f.headers) k.setRequestHeader(d, f.headers[d]);
            if (f.beforeSend && (!1 === f.beforeSend.call(h, k, f) || 2 === x)) return k.abort();
            for (d in S = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) k[d](f[d]);
            if (o = vt(ht, f, n, k)) {
                if (k.readyState = 1, u && g.trigger("ajaxSend", [k, f]), 2 === x) return k;
                f.async && f.timeout > 0 && (l = e.setTimeout((function() {
                    k.abort("timeout")
                }), f.timeout));
                try {
                    x = 1, o.send(y, T)
                } catch (e) {
                    if (!(2 > x)) throw e;
                    T(-1, e)
                }
            } else T(-1, "No Transport");

            function T(t, n, i, a) {
                var c, d, y, b, S, T = n;
                2 !== x && (x = 2, l && e.clearTimeout(l), o = void 0, s = a || "", k.readyState = t > 0 ? 4 : 0, c = t >= 200 && 300 > t || 304 === t, i && (b = function(e, t, n) {
                    for (var i, o, r, s, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (o in a)
                            if (a[o] && a[o].test(i)) {
                                l.unshift(o);
                                break
                            }
                    if (l[0] in n) r = l[0];
                    else {
                        for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                r = o;
                                break
                            }
                            s || (s = o)
                        }
                        r = r || s
                    }
                    return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
                }(f, k, i)), b = function(e, t, n, i) {
                    var o, r, s, a, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                    for (r = u.shift(); r;)
                        if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                            if ("*" === r) r = l;
                            else if ("*" !== l && l !== r) {
                        if (!(s = c[l + " " + r] || c["* " + r]))
                            for (o in c)
                                if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                                    break
                                }
                        if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + r
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(f, b, k, c), c ? (f.ifModified && ((S = k.getResponseHeader("Last-Modified")) && (p.lastModified[r] = S), (S = k.getResponseHeader("etag")) && (p.etag[r] = S)), 204 === t || "HEAD" === f.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, d = b.data, c = !(y = b.error))) : (y = T, !t && T || (T = "error", 0 > t && (t = 0))), k.status = t, k.statusText = (n || T) + "", c ? m.resolveWith(h, [d, T, k]) : m.rejectWith(h, [k, T, y]), k.statusCode(v), v = void 0, u && g.trigger(c ? "ajaxSuccess" : "ajaxError", [k, f, c ? d : y]), w.fireWith(h, [k, T]), u && (g.trigger("ajaxComplete", [k, f]), --p.active || p.event.trigger("ajaxStop")))
            }
            return k
        },
        getJSON: function(e, t, n) {
            return p.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return p.get(e, void 0, t, "script")
        }
    }), p.each(["get", "post"], (function(e, t) {
        p[t] = function(e, n, i, o) {
            return p.isFunction(n) && (o = o || i, i = n, n = void 0), p.ajax(p.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            }, p.isPlainObject(e) && e))
        }
    })), p._evalUrl = function(e) {
        return p.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, p.fn.extend({
        wrapAll: function(e) {
            var t;
            return p.isFunction(e) ? this.each((function(t) {
                p(this).wrapAll(e.call(this, t))
            })) : (this[0] && (t = p(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            })).append(this)), this)
        },
        wrapInner: function(e) {
            return p.isFunction(e) ? this.each((function(t) {
                p(this).wrapInner(e.call(this, t))
            })) : this.each((function() {
                var t = p(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }))
        },
        wrap: function(e) {
            var t = p.isFunction(e);
            return this.each((function(n) {
                p(this).wrapAll(t ? e.call(this, n) : e)
            }))
        },
        unwrap: function() {
            return this.parent().each((function() {
                p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
            })).end()
        }
    }), p.expr.filters.hidden = function(e) {
        return !p.expr.filters.visible(e)
    }, p.expr.filters.visible = function(e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    };
    var bt = /%20/g,
        xt = /\[\]$/,
        St = /\r?\n/g,
        kt = /^(?:submit|button|image|reset|file)$/i,
        Tt = /^(?:input|select|textarea|keygen)/i;

    function _t(e, t, n, i) {
        var o;
        if (p.isArray(t)) p.each(t, (function(t, o) {
            n || xt.test(e) ? i(e, o) : _t(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
        }));
        else if (n || "object" !== p.type(t)) i(e, t);
        else
            for (o in t) _t(e + "[" + o + "]", t[o], n, i)
    }
    p.param = function(e, t) {
        var n, i = [],
            o = function(e, t) {
                t = p.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = p.ajaxSettings && p.ajaxSettings.traditional), p.isArray(e) || e.jquery && !p.isPlainObject(e)) p.each(e, (function() {
            o(this.name, this.value)
        }));
        else
            for (n in e) _t(n, e[n], t, o);
        return i.join("&").replace(bt, "+")
    }, p.fn.extend({
        serialize: function() {
            return p.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                var e = p.prop(this, "elements");
                return e ? p.makeArray(e) : this
            })).filter((function() {
                var e = this.type;
                return this.name && !p(this).is(":disabled") && Tt.test(this.nodeName) && !kt.test(e) && (this.checked || !V.test(e))
            })).map((function(e, t) {
                var n = p(this).val();
                return null == n ? null : p.isArray(n) ? p.map(n, (function(e) {
                    return {
                        name: t.name,
                        value: e.replace(St, "\r\n")
                    }
                })) : {
                    name: t.name,
                    value: n.replace(St, "\r\n")
                }
            })).get()
        }
    }), p.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Ct = {
            0: 200,
            1223: 204
        },
        Et = p.ajaxSettings.xhr();
    d.cors = !!Et && "withCredentials" in Et, d.ajax = Et = !!Et, p.ajaxTransport((function(t) {
        var n, i;
        return d.cors || Et && !t.crossDomain ? {
            send: function(o, r) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) a.setRequestHeader(s, o[s]);
                n = function(e) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Ct[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout((function() {
                        n && i()
                    }))
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        } : void 0
    })), p.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return p.globalEval(e), e
            }
        }
    }), p.ajaxPrefilter("script", (function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    })), p.ajaxTransport("script", (function(e) {
        var t, n;
        if (e.crossDomain) return {
            send: function(o, r) {
                t = p("<script>").prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                }), i.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    }));
    var At = [],
        Nt = /(=)\?(?=&|$)|\?\?/;
    p.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = At.pop() || p.expando + "_" + st++;
            return this[e] = !0, e
        }
    }), p.ajaxPrefilter("json jsonp", (function(t, n, i) {
        var o, r, s, a = !1 !== t.jsonp && (Nt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Nt.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = p.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Nt, "$1" + o) : !1 !== t.jsonp && (t.url += (at.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return s || p.error(o + " was not called"), s[0]
        }, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
            s = arguments
        }, i.always((function() {
            void 0 === r ? p(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, At.push(o)), s && p.isFunction(r) && r(s[0]), s = r = void 0
        })), "script") : void 0
    })), p.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || i;
        var o = k.exec(e),
            r = !n && [];
        return o ? [t.createElement(o[1])] : (o = ee([e], t, r), r && r.length && p(r).remove(), p.merge([], o.childNodes))
    };
    var Dt = p.fn.load;

    function jt(e) {
        return p.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    p.fn.load = function(e, t, n) {
        if ("string" != typeof e && Dt) return Dt.apply(this, arguments);
        var i, o, r, s = this,
            a = e.indexOf(" ");
        return a > -1 && (i = p.trim(e.slice(a)), e = e.slice(0, a)), p.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && p.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done((function(e) {
            r = arguments, s.html(i ? p("<div>").append(p.parseHTML(e)).find(i) : e)
        })).always(n && function(e, t) {
            s.each((function() {
                n.apply(this, r || [e.responseText, t, e])
            }))
        }), this
    }, p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
        p.fn[t] = function(e) {
            return this.on(t, e)
        }
    })), p.expr.filters.animated = function(e) {
        return p.grep(p.timers, (function(t) {
            return e === t.elem
        })).length
    }, p.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, s, a, l, c = p.css(e, "position"),
                u = p(e),
                d = {};
            "static" === c && (e.style.position = "relative"), a = u.offset(), r = p.css(e, "top"), l = p.css(e, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (s = (i = u.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), p.isFunction(t) && (t = t.call(e, n, p.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + o), "using" in t ? t.using.call(e, d) : u.css(d)
        }
    }, p.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                p.offset.setOffset(this, e, t)
            }));
            var t, n, i = this[0],
                o = {
                    top: 0,
                    left: 0
                },
                r = i && i.ownerDocument;
            return r ? (t = r.documentElement, p.contains(t, i) ? (o = i.getBoundingClientRect(), n = jt(r), {
                top: o.top + n.pageYOffset - t.clientTop,
                left: o.left + n.pageXOffset - t.clientLeft
            }) : o) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === p.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), p.nodeName(e[0], "html") || (i = e.offset()), i.top += p.css(e[0], "borderTopWidth", !0), i.left += p.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - p.css(n, "marginTop", !0),
                    left: t.left - i.left - p.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map((function() {
                for (var e = this.offsetParent; e && "static" === p.css(e, "position");) e = e.offsetParent;
                return e || Ae
            }))
        }
    }), p.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(e, t) {
        var n = "pageYOffset" === t;
        p.fn[e] = function(i) {
            return F(this, (function(e, i, o) {
                var r = jt(e);
                return void 0 === o ? r ? r[t] : e[i] : void(r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o)
            }), e, i, arguments.length)
        }
    })), p.each(["top", "left"], (function(e, t) {
        p.cssHooks[t] = De(d.pixelPosition, (function(e, n) {
            return n ? (n = Ne(e, t), _e.test(n) ? p(e).position()[t] + "px" : n) : void 0
        }))
    })), p.each({
        Height: "height",
        Width: "width"
    }, (function(e, t) {
        p.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, (function(n, i) {
            p.fn[i] = function(i, o) {
                var r = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return F(this, (function(t, n, i) {
                    var o;
                    return p.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? p.css(t, n, s) : p.style(t, n, i, s)
                }), t, r ? i : void 0, r, null)
            }
        }))
    })), p.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function() {
            return this.length
        }
    }), p.fn.andSelf = p.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], (function() {
        return p
    }));
    var Lt = e.jQuery,
        Wt = e.$;
    return p.noConflict = function(t) {
        return e.$ === p && (e.$ = Wt), t && e.jQuery === p && (e.jQuery = Lt), p
    }, t || (e.jQuery = e.$ = p), p
}));
var tarsWidget = {},
    tars = tars || {},
    $jq = jQuery.noConflict(!0);
! function(e, t, n) {
    ! function(t) {
        "function" == typeof define && define.amd ? define(["$jq"], t) : "object" == typeof exports ? t(require("$jq")) : t(e)
    }((function(e) {
        function t(e) {
            return s.raw ? e : encodeURIComponent(e)
        }

        function n(e) {
            return s.raw ? e : decodeURIComponent(e)
        }

        function i(e) {
            return t(s.json ? JSON.stringify(e) : String(e))
        }

        function o(t, n) {
            var i = s.raw ? t : function(e) {
                0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
                try {
                    return e = decodeURIComponent(e.replace(r, " ")), s.json ? JSON.parse(e) : e
                } catch (e) {}
            }(t);
            return e.isFunction(n) ? n(i) : i
        }
        var r = /\+/g,
            s = e.cookie = function(r, a, l) {
                if (void 0 !== a && !e.isFunction(a)) {
                    if ("number" == typeof(l = e.extend({}, s.defaults, l)).expires) {
                        var c = l.expires,
                            u = l.expires = new Date;
                        u.setTime(+u + 864e5 * c)
                    }
                    return document.cookie = [t(r), "=", i(a), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
                }
                for (var d = r ? void 0 : {}, f = document.cookie ? document.cookie.split("; ") : [], p = 0, h = f.length; h > p; p++) {
                    var g = f[p].split("="),
                        m = n(g.shift()),
                        w = g.join("=");
                    if (r && r === m) {
                        d = o(w, a);
                        break
                    }
                    r || void 0 === (w = o(w)) || (d[m] = w)
                }
                return d
            };
        s.defaults = {}, e.removeCookie = function(t, n) {
            return void 0 !== e.cookie(t) && (e.cookie(t, "", e.extend({}, n, {
                expires: -1
            })), !e.cookie(t))
        }
    }));
    var i = {};
    console.log("Testing");
    var o = !1;
    window.location.href.indexOf("_log_debug_tars") > -1 && (o = !0), window.location.href.indexOf("127.0.0.1") > -1 && (o = !0);
    var r = console.log;
    o || (r = function() {}), i.init = function() {
        var t = navigator.userAgent.toLowerCase().indexOf("mobile"),
            n = navigator.userAgent.toLowerCase().indexOf("windows phone");
        t > -1 || n > -1 ? i.open_mobile = !0 : i.open_desktop = !0, i.existing_fab = e("#tars-widget-fab"), i.loadSettingsVars((function() {
            i.initSettingsVars(), i.preloadStuff(), i.appendWidgetCSS(), i.appendFontFile(), i.appendBotButton(), i.fab = e("#tars-widget-fab"), window.tarsSettings && "whatsapp" == window.tarsSettings.widget_type ? window.tarsSettings.opentype = "newtab" : (i.appendWidget(), i.appendWidgetOverlay()), i.initVars()
        }))
    }, i.loadSettingsVars = function(t) {
        window.tarsSettings || (window.tarsSettings = {
            wasUndefined: !0
        }), r("remote conv_widget.json"), window.tarsSettings.convid = window.tarsSettings.convid ? window.tarsSettings.convid : i.existing_fab.attr("data-convid");
        let n = "https://tars-data.s3.amazonaws.com/";
        window.tarsSettings && window.tarsSettings.cdn_enabled && (n = "https://content.hellotars.com/");
        var o = n + window.tarsSettings.convid + "/conv_widget.json";
        e.ajax({
            type: "GET",
            url: o,
            beforeSend: function() {},
            success: function(e, n, i) {
                window.tarsSettingsRemote = e, t(null, window.tarsSettingsRemote)
            },
            error: function(e, n, i) {
                window.tarsSettingsRemote = {}, t(null, window.tarsSettingsRemote)
            }
        })
    }, i.initSettingsVars = function() {
        window.tarsSettings.wasUndefined && i.existing_fab.length ? (r("old code snippet here"), window.tarsSettings = {}, window.tarsSettings.convid = i.existing_fab.attr("data-convid"), window.tarsSettings.autoopen = i.existing_fab.attr("data-autoopen"), window.tarsSettings.mode = i.existing_fab.attr("data-mode"), window.tarsSettings.opentype = i.existing_fab.attr("data-opentype"), window.tarsSettings.overlay = i.existing_fab.attr("data-overlay"), window.tarsSettings.img = i.existing_fab.find("img").attr("src"), window.tarsSettings.href = i.existing_fab.attr("href"), window.tarsSettings.target = i.existing_fab.attr("target"), window.tarsSettings.bgcolor = i.existing_fab.css("background-color"), window.tarsSettings.fgcolor = i.existing_fab.find("img").attr("convbot-color"), window.tarsSettings.display = i.existing_fab.css("display")) : r("new code snippet"), e.extend(window.tarsSettingsRemote, window.tarsSettings), window.tarsSettings = window.tarsSettingsRemote, r("default widget values"), window.tarsSettings && "whatsapp" == window.tarsSettings.widget_type && (window.tarsSettings.img = window.tarsSettings.img ? window.tarsSettings.img : "https://tars-file-upload.s3.amazonaws.com/VJzIrm/54a5c6fc9f1f7f9ceafb53d54f098dbe--social-whatsapp-circle-512.webp", window.tarsSettings.bgcolor = window.tarsSettings.bgcolor ? window.tarsSettings.bgcolor : "#25D366", window.tarsSettings.href = "https://api.whatsapp.com/send?phone=" + window.tarsSettings.wa_number + "&text=" + window.tarsSettings.wa_initialMessage), window.tarsSettings.img = window.tarsSettings.img ? window.tarsSettings.img : "https://tars-file-upload.s3.amazonaws.com/share/img/baso_300.png", window.tarsSettings.href = window.tarsSettings.href ? window.tarsSettings.href : "https://chatbot.hellotars.com/conv/" + window.tarsSettings.convid + "/", window.tarsSettings.href_orig = window.tarsSettings.href, window.tarsSettings.bgcolor = window.tarsSettings.bgcolor ? window.tarsSettings.bgcolor : "#0084ff";
        var t = window.tarsSettings.bgcolor.substring(1),
            n = parseInt(t, 16),
            o = 1 - (.299 * (n >> 16 & 255) + .587 * (n >> 8 & 255) + .114 * (n >> 0 & 255)) / 255;
        if (window.tarsSettings.fgcolor = o < .5 ? "#000000" : "#ffffff", window.tarsSettings.display = window.tarsSettings.display ? window.tarsSettings.display : "block", window.tarsSettings.callout_message = window.tarsSettings.callout_message ? window.tarsSettings.callout_message.substr(0, 80) : "Hey there! I am an A.I. chatbot, let's talk.", window.tarsSettings.button_radius = window.tarsSettings.button_radius ? window.tarsSettings.button_radius : "5px", window.tarsSettings.widget_shape = window.tarsSettings.widget_shape ? window.tarsSettings.widget_shape : "square", window.tarsSettings.widget_size = window.tarsSettings.widget_size ? window.tarsSettings.widget_size : "medium", window.tarsSettings.widget_bottom = window.tarsSettings.widget_bottom ? window.tarsSettings.widget_bottom : "0", window.tarsSettings.widget_side = window.tarsSettings.widget_side ? window.tarsSettings.widget_side : "0", window.tarsSettings.url_params) {
            if ("parent" == window.tarsSettings.url_params) var s = window.location.search ? window.location.search.slice(1) : "";
            s && (s = -1 == window.tarsSettings.href.indexOf("?") ? "?" + s : "&" + s), window.tarsSettings.href = window.tarsSettings.href + s
        }
        r("window.tarsSettings", window.tarsSettings)
    }, i.preloadStuff = function() {
        i.widget_attention_audio = new Audio("https://tars-file-upload.s3.amazonaws.com/ByNADi/12c2afb05907471d1a3feb6c68a7a5a7--rightanswer.mp3"), i.widget_attention_audio.volume = .4
    }, i.appendWidgetCSS = function() {
        r("inside appendWidgetCSS");
        var t = "#tars-cb-widget{overflow:hidden;z-index:2147483647 !important}#tars-widget-fab{overflow:visible;z-index:2147483644 !important;margin:0;outline:0;position:fixed;width:86px;height:86px;cursor:pointer;bottom:calc(4% - 12px);right:18px;-webkit-transition-property:top,bottom,left,right;-webkit-transition-duration:.5s;transition-property:top,bottom,left,right;transition-duration:.5s;font-family: 'Roboto', sans-serif;}#tars-widget-fab.hide_fab,#tars-widget-fab.hide_fab.pop_right{right:-100px}#tars-widget-fab.hide_fab.pop_left{left:-100px}#tars-widget-fab.pop_right{right:18px}#tars-widget-fab.pop_left{left:18px}#tars-widget-fab .callout-message{display:none;float:left;margin:12px;padding:12px 15px;width:176px;text-align:center;font-size:14px;cursor:pointer;background-color:#fff;-webkit-box-shadow:0 2px 8px 0 rgba(0,0,0,.3);-moz-box-shadow:0 2px 8px 0 rgba(0,0,0,.3);box-shadow:0 2px 8px 0 rgba(0,0,0,.3);-moz-box-sizing:border-box;color:#8c8c8c;border-radius:5px;bottom:0;position:absolute;right:74px;line-height:20px;color:#555;font-weight:400;word-wrap:break-word;}#tars-widget-fab.pop_left .callout-message{left:74px}#tars-widget-fab.show-callout-message{width:86px}#tars-widget-fab.show-callout-message .callout-message,#tars-widget-fab.show-notification-count .notification-count{display:block}#tars-widget-fab.open .callout-message{display:none!important}#tars-widget-fab .callout-message .callout-message-tick{content:\"\";width:1px;height:1px;position:absolute;bottom:14px;border-top:6px solid transparent;border-bottom:6px solid transparent;right:-7px;border-left:7px solid #fff}#tars-widget-fab.pop_left .callout-message .callout-message-tick{left:-7px;border-right:7px solid #fff;border-left:0}#tars-widget-fab .convbot-button{margin:12px;width:62px;height:62px;cursor:pointer;border-radius:" + window.tarsSettings.button_radius + ";overflow:hidden;-webkit-box-shadow:0 2px 18px 0 rgba(0,0,0,.3);-moz-box-shadow:0 2px 18px 0 rgba(0,0,0,.3);box-shadow:0 2px 18px 0 rgba(0,0,0,.3);position:absolute;right:0;bottom:0}#tars-widget-fab.pop_left .convbot-button{left:0}#tars-widget-fab .convbot-button .convbot-open{width:100%;display:inline;margin:0;}#tars-widget-fab .convbot-button .convbot-close{width:50%;height:50%;margin:25%;background:0 0;display:none}#tars-widget-fab .notification-count{display:none;position:absolute;bottom:62px;color:var(--yt-swatch-important-text,#fff);background-color:hsl(3,81.8%,49.6%);width:20px;height:20px;border-radius:50%;line-height:20px;font-size:12px;text-align:center;cursor:pointer;border:1px solid #fff;right:2px}#tars-widget-fab.pop_left .notification-count{left:2px}#tars-widget-fab.open .notification-count{display:none!important}@-webkit-keyframes message-notif-appear{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes message-notif-appear{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes fadein{from{opacity:0}to{opacity:1}}@-moz-keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@-ms-keyframes fadein{from{opacity:0}to{opacity:1}}@-o-keyframes fadein{from{opacity:0}to{opacity:1}}.callout-message,.notification-count{-webkit-animation:message-notif-appear .25s ease!important;animation:message-notif-appear .25s ease!important}#tars-cb-widget{position:fixed;border-radius:5px;box-shadow:0 20px 80px rgba(0,0,0,.6);background-color:#f1f1f1}#tars-cb-widget iframe{border:none;width:100%!important;height:100%!important;}#tars-cb-widget-overlay{display:none;width:100%;height:100%;position:fixed;left:0;top:0;background-color:rgba(0,0,0,.6);z-index:1000000}#tars-cb-widget .close-ontop{display:none;height:30px;right:0;padding:20px;margin:-20px;top:27.2px;width:48px;cursor:pointer;position:absolute;z-index:200;-webkit-box-sizing:content-box;box-sizing:content-box;}#tars-cb-widget .close-ontop .hook{width:100%;height:100%;background-color:rgba(241,241,241,.8);color:#333;box-shadow:0 .4px .2px rgba(0,0,0,.13);border-radius:1.3em 0 0 1.3em}#tars-cb-widget .close-ontop svg{position:absolute;right:38px;top:29px}#tars-cb-widget #close-widget svg path{fill:#333!important}#tars-widget-fab .callout-message .callout-message-close {display:none;background: rgba(0, 0, 0, 0.5);border-radius: 50%;position: absolute;font-weight: bold;color: white;text-align: center;padding: 5px;top: -15px;left: -15px;width: 25px;height: 25px;box-sizing: border-box;background: white;box-shadow: 0 2px 8px 0 rgba(0,0,0,.3);-moz-box-sizing: border-box;transition: 0.1s linear;-webkit-transition: 0.1s linear;}#tars-widget-fab.pop_left .callout-message .callout-message-close {right: -15px;left: auto;}#tars-widget-fab .callout-message .callout-message-close svg path {fill: #555;}#tars-widget-fab .callout-message:hover .callout-message-close {display: block}.callout-message-close:hover {transform: scale(1.15) rotate(90deg);-webkit-transform: scale(1.15) rotate(90deg);}@media (min-width: 481px){#tars-cb-widget{display:none;height:92%;max-height:620px;width:400px;bottom:4%;right:100px;-webkit-animation:fadein .4s;-moz-animation:fadein .4s;-ms-animation:fadein .4s;-o-animation:fadein .4s;animation:fadein .4s}#tars-cb-widget.pop_right{right:calc(110px + " + window.tarsSettings.widget_side + "px)}#tars-cb-widget.pop_left{left:calc(110px + " + window.tarsSettings.widget_side + "px)}#tars-cb-widget.pop_center{top:0;bottom:0;left:0;right:0;margin:auto}#tars-cb-widget.show{display:block}}@media (max-width: 480px){#tars-cb-widget{display:block;height:100%;width:100%;bottom:0;right:-500px;border-radius:0;-webkit-transition-property:top,bottom,left,right;-webkit-transition-duration:.5s;transition-property:top,bottom,left,right;transition-duration:.5s}#tars-cb-widget.pop_left{left:-500px}#tars-cb-widget.pop_right.show,#tars-cb-widget.show{right:0}#tars-cb-widget.pop_left.show{left:0}#tars-cb-widget .close-ontop{display:block!important}#tars-widget-fab .callout-message{display:none}#tars-widget-fab .callout-message .callout-message-close{display:block}} .convbot-button-circle{border-radius : 50% !important} #reset-widget svg path {fill:transparent !important} .convbot-button-small {height : 54px !important ; width : 54px !important} .convbot-button-large {height : 70px !important; width : 70px !important}";
        window.tarsSettings.widget_bottom && (t += "@media (min-width: 481px){#tars-cb-widget{" + `bottom : calc(30px + ${window.tarsSettings.widget_bottom}px);` + "}}");
        var n = e("<style/>", {
            class: "tars-widget-css",
            type: "text/css"
        });
        n.html(t), e("body").append(n)
    }, i.appendFontFile = function() {
        var t = e("<style/>", {
            class: "tars-widget-font-css",
            type: "text/css"
        });
        t.html("/* cyrillic-ext */\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    src: url(https://assets.hellotars.com/assets/cyrillic-ext.woff2) format('woff2');\n    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n\n/* cyrillic */\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    src: url(https://assets.hellotars.com/assets/cyrillic.woff2) format('woff2');\n    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n\n/* greek-ext */\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    src: url(https://assets.hellotars.com/assets/greek-ext.woff2) format('woff2');\n    unicode-range: U+1F00-1FFF;\n}\n\n/* greek */\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    src: url(https://assets.hellotars.com/assets/greek.woff2) format('woff2');\n    unicode-range: U+0370-03FF;\n}\n\n/* vietnamese */\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    src: url(https://assets.hellotars.com/assets/vietnamise.woff2) format('woff2');\n    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n\n/* latin-ext */\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    src: url(https://assets.hellotars.com/assets/latin-ext.woff2) format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n\n/* latin */\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    src: url(https://assets.hellotars.com/assets/latin.woff2) format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}"), e("body").append(t)
    }, i.get_show_widget = function() {
        if (r("inside get_show_widget"), !window.tarsSettings.hide_timings) return !0;
        var e = !0;
        if (window.tarsSettings.hide_timings)
            for (var t = 0; t < window.tarsSettings.hide_timings.length; ++t)
                if (hide_timing = window.tarsSettings.hide_timings[t], hide_timing.start && hide_timing.end) {
                    var n = 60 * hide_timing.start.split(":")[0] + 1 * hide_timing.start.split(":")[1],
                        i = 60 * hide_timing.end.split(":")[0] + 1 * hide_timing.end.split(":")[1],
                        o = 60 * (new Date).getHours() + 1 * (new Date).getMinutes();
                    o > n && o < i && (e = !1)
                }
        return e
    }, i.appendBotButton = function() {
        r("inside appendBotButton");
        var t = "",
            n = "";
        window.tarsSettings.mode && window.tarsSettings.widget_side && (t = "" + ("pop_left" == window.tarsSettings.mode ? `left:calc(18px + ${window.tarsSettings.widget_side}px)` : "pop_right" == window.tarsSettings.mode ? `right:calc(18px + ${window.tarsSettings.widget_side}px)` : ""), n = "" + ("pop_left" == window.tarsSettings.mode ? `left:calc(32px + ${window.tarsSettings.widget_side}px) !important` : "pop_right" == window.tarsSettings.mode ? `right:calc(32px + ${window.tarsSettings.widget_side}px) !important` : ""));
        var o = "",
            s = "";
        if (window.tarsSettings.widget_bottom) {
            o = `bottom : calc(18px + ${window.tarsSettings.widget_bottom}px)`;
            s = `bottom: calc(105px + ${window.tarsSettings.widget_bottom}px) !important`
        }
        var a = e("<a/>", {
                id: "tars-widget-fab",
                class: "tars-fab bounce closed " + window.tarsSettings.mode + " " + (i.existing_fab.length ? "" : "hide_fab"),
                "data-convid": window.tarsSettings.convid,
                href: window.tarsSettings.href,
                target: "_blank",
                rel: "noopener",
                tabIndex: "-1",
                style: `display:${window.tarsSettings.display}; ${t} ; ${o}`
            }),
            l = "";
        window.tarsSettings.widget_shape && (l = "" + ("circle" == window.tarsSettings.widget_shape ? "convbot-button-circle" : ""));
        var c = "";
        window.tarsSettings.widget_size && (c = "" + ("small" == window.tarsSettings.widget_size ? "convbot-button-small" : "large" == window.tarsSettings.widget_size ? "convbot-button-large" : ""));
        var u = e("<div/>", {
                class: `convbot-button ${l} ${c}`,
                style: `background-color : ${window.tarsSettings.bgcolor} ; box-shadow : ${"transparent"==window.tarsSettings.bgcolor?"none":""}`
            }),
            d = e("<div />", {
                id: "tars-widget-frame-reset",
                class: "reset-button convbot-button-circle convbot-button-small",
                style: `display: none; ${n}; ${s}; margin: 0; outline: 0; position: fixed; width: 62px; height: 62px; cursor: pointer; \n            bottom: 110px; right: 29px; font-family: 'Roboto', sans-serif; align-items: center; justify-content: center;\n            overflow: hidden; z-index: 2147483647 !important; box-shadow: 0 2px 18px 0 rgb(0 0 0 / 30%); border-radius: 4px;\n            background-color : white; box-shadow : ${"transparent"==window.tarsSettings.bgcolor?"none":""}\n            `
            }),
            f = e('<svg stroke-width="0" fill="rgb(2,128,246)" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"\n        style="font-size:32px;"><g fill="none"><path d="M0 0h24v24H0z"></path><path d="M0 0h24v24H0z"></path><path d="M0 0h24v24H0z"></path></g><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"></path></svg>');
        d.append(f);
        var p = e("<img/>", {
                class: "convbot convbot-open",
                src: window.tarsSettings.img,
                alt: "Tars-Chatbot"
            }),
            h = e('<svg class="convbot convbot-close" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="512px" version="1.1" height="512px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"><g><path fill="' + window.tarsSettings.fgcolor + '" d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z"></path></g></svg>');
        u.append(p).append(h);
        var g = e("<div/>", {
                style: "margin : " + ("large" == window.tarsSettings.widget_size ? "12px 20px" : "small" == window.tarsSettings.widget_size ? "12px 4px" : "12px"),
                class: "callout-message"
            }),
            m = e("<span/>", {
                class: "callout-message-tick"
            }),
            w = e("<span/>", {
                class: "callout-message-close"
            }).html('<?xml version="1.0" encoding="UTF-8"?><svg width="100%" height="100%" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m74.621 66.312l-16.324-16.316 16.312-16.324c1.8828-1.875 1.8828-4.8906 0.007813-6.7734l-1.5156-1.5195c-0.89062-0.91406-2.1094-1.4102-3.3906-1.4102h-0.007813c-1.2812 0-2.4844 0.50391-3.3828 1.4062l-16.32 16.332-16.324-16.312c-1.8711-1.875-4.8828-1.8828-6.7656-0.007812l-1.5195 1.5039c-0.91406 0.89844-1.4141 2.1172-1.4141 3.3945 0 1.2852 0.50391 2.4922 1.4062 3.3945l16.332 16.32-16.316 16.324c-1.8828 1.875-1.8828 4.8906-0.007813 6.7773l1.5156 1.5156c0.89844 0.91406 2.1133 1.4102 3.3945 1.4102 1.2734 0 2.4922-0.50781 3.3906-1.4062l16.316-16.328 16.32 16.309c0.92578 0.93359 2.1562 1.4062 3.3906 1.4062 1.2227 0 2.4453-0.46484 3.3828-1.3984l1.5156-1.5117c0.91797-0.89062 1.4141-2.1094 1.4141-3.3906 0.007812-1.2812-0.49609-2.4922-1.3984-3.3945z"/></svg>'),
            v = e("<span/>", {
                class: "callout-message-text"
            });
        v.html(window.tarsSettings.callout_message), g.append(m).append(v).append(w);
        var y = e("<div/>", {
            class: "notification-count"
        });
        y.html(1), a.append(u);
        var b = !1;
        if ("hide" == window.tarsSettings.callout_bubble && (b = !0), window.tarsSettings.callout_bubble_reset_days) {
            var x = 24 * window.tarsSettings.callout_bubble_reset_days * 3600 * 1e3,
                S = i.getTWCookie("tars_widget");
            if (S && S.widget_opened && S.widget_opened_ts) {
                var k = (new Date).getTime() - S.widget_opened_ts;
                k > 0 && k < x && (b = !0)
            }
        }
        b || a.append(g), a.append(y), i.existing_fab.length && i.existing_fab.remove(), i.get_show_widget() && (e("body").append(a), "enabled" === window.tarsSettings.reset_chat_btn && e("body").append(d), setTimeout((function() {
            e("#tars-widget-fab").removeClass("hide_fab")
        }), 1e3), i.autoActivity())
    }, i.autoActivity = function(t) {
        var n = "tw_co_" + window.tarsSettings.convid,
            o = i.getTWCookie(n);
        r("tw_co_obj", o);
        var s = !1;
        o || (s = !0), o && i.getWidgetOpenedCookie() || (setTimeout((function() {
            e("#tars-widget-fab").addClass("show-callout-message")
        }), 2400), setTimeout((function() {
            e("#tars-widget-fab").addClass("show-notification-count"), "off" == window.tarsSettings.sound ? r("sound off") : "once" == window.tarsSettings.sound ? r("sound once") : "none" != window.tarsSettings.display && s && i.widget_attention_audio.play()
        }), 2400), setTimeout((function() {
            e(".notification-count").html(2)
        }), 4500), i.setTWCookie(n, 1, {
            widget_opened: !1
        }))
    }, i.appendWidget = function() {
        var t = "";
        t += '<div id="tars-cb-widget" class="' + window.tarsSettings.mode + '">', t += '<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen data-src="' + window.tarsSettings.href + '" src="about:blank" frameborder="0" height="100%" width="100%"></iframe>', t += `<div class="close-ontop" title="Close"><div class="hook" id="close-widget"><svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 4.586l4.24-4.24c.395-.395 1.026-.392 1.416-.002.393.393.39 1.024 0 1.415L7.413 6l4.24 4.24c.395.395.392 1.026.002 1.416-.393.393-1.024.39-1.415 0L6 7.413l-4.24 4.24c-.395.395-1.026.392-1.416.002-.393-.393-.39-1.024 0-1.415L4.587 6 .347 1.76C-.05 1.364-.048.733.342.343c.393-.393 1.024-.39 1.415 0L6 4.587z" fill-rule="evenodd" style="fill: #fff;"></path></svg></div>\n        ${"enabled"===window.tarsSettings.reset_chat_btn?'<div class="hook" id="reset-widget" style="margin-top:12px;"><svg style="top:67px; right:36px;font-size:20px !important;" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M0 0h24v24H0z"></path><path d="M0 0h24v24H0z"></path><path d="M0 0h24v24H0z"></path></g><path style="fill:rgb(2,128,246) !important" d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"></path></svg></div>':""}\n        </div>`, t += "</div>", e("body").append(t)
    }, i.appendWidgetOverlay = function() {
        if (i.overlay = window.tarsSettings.overlay, "off" != i.overlay) {
            e("body").append('<div id="tars-cb-widget-overlay"></div>')
        }
    }, i.initVars = function() {
        i.cb_widget = e("#tars-cb-widget"), i.cb_iframe = e("#tars-cb-widget iframe"), i.cb_overlay = e("#tars-cb-widget-overlay"), i.widget_frame_reset = e("#tars-widget-frame-reset"), e().on ? (e(document).on("click", "#tars-widget-frame-reset", i.reset_chats), e(document).on("click", ".tars-widget-open", i.openWidget), e(document).on("click", "#tars-widget-fab.closed", i.openWidget), e(document).on("click", "#tars-widget-fab.open", i.closeWidget), e(document).on("click", "#tars-cb-widget #close-widget", i.closeWidget), "enabled" === window.tarsSettings.reset_chat_btn && e(document).on("click", "#tars-cb-widget #reset-widget", i.reset_chats), e(document).on("click", "a", i.tarsBotLink), e(document).on("click", ".callout-message-close", i.closeCallout), "overlay_click" == window.tarsSettings.close && e(document).on("click", "#tars-cb-widget-overlay", i.closeWidget)) : e().live ? (e("#tars-widget-frame-reset").live("click", i.reset_chats), e(".tars-widget-open").live("click", i.openWidget), e("#tars-widget-fab.closed").live("click", i.openWidget), e("#tars-widget-fab.open").live("click", i.closeWidget), e("#tars-cb-widget #close-widget").live("click", i.closeWidget), "enabled" === window.tarsSettings.reset_chat_btn && e("#tars-cb-widget #reset-widget").live("click", i.reset_chats), e("a").live("click", i.tarsBotLink), e(".callout-message-close").live("click", i.closeCallout), "overlay_click" == window.tarsSettings.close && e("#tars-cb-widget-overlay").live("click", i.closeWidget)) : (e(document).on("click", ".tars-widget-open", i.openWidget), e(document).on("click", "#tars-widget-frame-reset", i.reset_chats), e(document).on("click", "#tars-widget-fab.closed", i.openWidget), e(document).on("click", "#tars-widget-fab.open", i.closeWidget), e(document).on("click", "#tars-cb-widget #close-widget", i.closeWidget), "enabled" === window.tarsSettings.reset_chat_btn && e(document).on("click", "#tars-cb-widget #reset-widget", i.reset_chats), e(document).on("click", "a", i.tarsBotLink), e(document).on("click", ".callout-message-close", i.closeCallout), "overlay_click" == window.tarsSettings.close && e(document).on("click", "#tars-cb-widget-overlay", i.closeWidget)), i.setupAutoOpen(), i.setupForceOpen()
    }, i.setupAutoOpen = function() {
        var e = window.tarsSettings.autoopen;
        e && (isNaN(e) || !e || i.open_mobile || i.getAutoOpened() || setTimeout((function() {
            i.openWidget(), i.setAutoOpened()
        }), 1e3 * e))
    }, i.setupForceOpen = function() {
        var e = window.tarsSettings.forceopen;
        if (void 0 !== e && -1 != ["mobile", "desktop", "all"].indexOf(e)) {
            var t = window.tarsSettings.forceopen_delay;
            t = t || 0, ("all" == e || "mobile" == e && i.open_mobile || "desktop" == e && i.open_desktop) && setTimeout((function() {
                i.openWidget()
            }), 1e3 * t)
        }
    }, i.getTWCookie = function(t) {
        if (!e.cookie) return null;
        var n = e.cookie(t);
        if (n) {
            try {
                n = JSON.parse(n)
            } catch (e) {}
            return n
        }
        return null
    }, i.setTWCookie = function(t, n, o) {
        if (!e.cookie) return null;
        var r = i.getTWCookie(t);
        r && "object" == typeof r ? e.extend(r, o) : r = o, tw_cookie_str = JSON.stringify(r);
        var s = new Date;
        return s.setTime(s.getTime() + 24 * n * 3600 * 1e3), e.cookie(t, tw_cookie_str, {
            path: "/",
            expires: s
        }), r
    }, i.getAutoOpened = function() {
        r("inside getAutoOpened");
        return "triggered" == i.getTWCookie("tw_ao")
    }, i.setAutoOpened = function() {
        r("inside setAutoOpened");
        return i.setTWCookie("tw_ao", 7, "triggered"), i.getTWCookie("tw_ao")
    }, i.getWidgetOpenedCookie = function() {
        var e = "tw_co_" + window.tarsSettings.convid;
        return i.getTWCookie(e).widget_opened
    }, i.setWidgetOpenedCookie = function() {
        var e = "tw_co_" + window.tarsSettings.convid;
        return i.setTWCookie(e, 1, {
            widget_opened: !0
        }), i.setTWCookie("tars_widget", 1e4, {
            widget_opened: !0,
            widget_opened_ts: (new Date).getTime()
        }), i.getTWCookie(e)
    }, i.openFullWidget = function() {
        window.open(window.tarsSettings.href, "_blank")
    }, i.closeFullWidget = function() {}, i.showButtonImage = function() {
        i.fab.find("svg").hide(), i.fab.find("img.convbot").show()
    }, i.hideButtonImage = function() {
        i.fab.find("img.convbot").hide(), i.fab.find("svg").show()
    }, i.openMobilePopWidget = function() {
        r("inside openMobilePopWidget"), i.cb_widget.addClass("show"), "enabled" === window.tarsSettings.reset_chat_btn && i.widget_frame_reset.css("display", "flex"), "about:blank" == i.cb_iframe.attr("src") && i.cb_iframe.attr("src", window.tarsSettings.href)
    }, i.closeMobilePopWidget = function() {
        i.cb_widget.removeClass("show"), "enabled" === window.tarsSettings.reset_chat_btn && i.widget_frame_reset.css("display", "none")
    }, i.openPopWidget = function() {
        i.cb_widget.addClass("show"), "enabled" === window.tarsSettings.reset_chat_btn && i.widget_frame_reset.css("display", "flex"), i.cb_widget.fadeIn ? i.cb_overlay.fadeIn() : i.cb_overlay.show(), "about:blank" == i.cb_iframe.attr("src") && i.cb_iframe.attr("src", window.tarsSettings.href)
    }, i.closePopWidget = function() {
        i.cb_widget.removeClass("show"), "enabled" === window.tarsSettings.reset_chat_btn && i.widget_frame_reset.css("display", "none"), i.cb_widget.fadeOut ? i.cb_overlay.fadeOut() : i.cb_overlay.hide()
    }, i.checkIframeHierarchy = function() {
        2 == e("#tars-cb-widget").children().length && "IFRAME" == e("#tars-cb-widget").children().prop("tagName") || e("#tars-cb-widget").html(e("#tars-cb-widget iframe"))
    }, i.openWidget = function(e) {
        e && e.preventDefault(), i.setWidgetOpenedCookie(), i.checkIframeHierarchy(), "newtab" == window.tarsSettings.opentype ? i.openFullWidget() : (i.open_mobile ? i.openMobilePopWidget() : i.openPopWidget(), i.hideButtonImage()), i.fab.addClass("open").removeClass("closed").removeClass("show-callout-message").removeClass("show-notification-count")
    }, i.closeWidget = function(t) {
        t && t.preventDefault(), "newtab" == window.tarsSettings.opentype ? i.closeFullWidget() : i.open_mobile ? i.closeMobilePopWidget() : i.closePopWidget(), i.fab.removeClass("open").addClass("closed"), i.showButtonImage(), "hide_button" == window.tarsSettings.onclose && e("#tars-widget-fab").css("right", "-100px")
    }, i.closeCallout = function(t) {
        t.preventDefault(), t.stopPropagation(), e(".callout-message").fadeOut(250, (function() {
            e("#tars-widget-fab.show-callout-message").removeClass("show-callout-message")
        }))
    }, i.tarsBotLink = function(t) {
        if (t && t.currentTarget) {
            var n = e(t.currentTarget).attr("href");
            n && n.match(/#tarsbot/) && (t.preventDefault(), n.match(/hellotars\.com\/conv\//) ? window.tarsSettings.href = n : window.tarsSettings.href = window.tarsSettings.href_orig, i.cb_iframe.attr("src") != window.tarsSettings.href && i.cb_iframe.attr("src", window.tarsSettings.href), i.openWidget())
        }
    }, i.reset_chats = function(e) {
        try {
            if (!(window.document.getElementById("tars-cb-widget") && window.document.getElementById("tars-cb-widget").children.length > 0)) throw new Error("Not able to reload iframe");
            if (window.document.getElementById("tars-cb-widget").children[0].location) console.log("[RESET] Running location on iframe"), window.document.getElementById("tars-cb-widget").children[0].location.reload(!0);
            else {
                if (!window.document.getElementById("tars-cb-widget").children[0].contentWindow || !window.document.getElementById("tars-cb-widget").children[0].contentWindow.location) throw new Error("Not able to reload iframe");
                console.log("[RESET] Running location on contentWindow"), window.document.getElementById("tars-cb-widget").children[0].contentWindow.location.reload(!0)
            }
        } catch (e) {
            console.error("[RESET] Error is:", e), window.document.getElementById("tars-cb-widget").children[0].src ? (console.log("[RESET] Changing SRC of iframe"), window.document.getElementById("tars-cb-widget").children[0].src = window.document.getElementById("tars-cb-widget").children[0].src) : console.error("[RESET] Not able to reload iframe")
        }
    }, e(document).keyup((function(e) {
        27 == e.keyCode && i.closeWidget()
    })), i.setupIframeEventHandlder = function() {
        if (window.addEventListener) var e = window.addEventListener,
            t = "message";
        else {
            if (!window.attachEvent) return;
            e = window.attachEvent, t = "onmessage"
        }
        e(t, (function(e) {
            var t = e.data ? e.data : e.message;
            "close_widget" == window.tarsSettings.onend ? t && "close_widget" == t.msg && setTimeout((function() {
                i.closeWidget()
            }), 2e3) : t && "tawkto_widget_swap" == t.msg && n.tawktoLauncher(t.tawkto)
        }))
    }, i.setupIframeEventHandlder(), t.openWidget = i.openWidget, t.closeWidget = i.closeWidget, i.init(), n.open = i.openWidget, n.close = i.closeWidget, n.hideLauncher = function() {
        e("#tars-widget-fab").hide()
    }, n.showLauncher = function() {
        e("#tars-widget-fab").show()
    }, n.tawktoLauncher = function(e) {
        setTimeout((function() {
            i.closeWidget(), n.hideLauncher()
        }), 2e3), n.tawktoWidget(e)
    }, n.tawktoWidget = function(e) {
        var t, n;
        window.Tawk_API = window.Tawk_API || {}, window.Tawk_LoadStart = new Date, Tawk_API.onLoad = function() {
            Tawk_API.maximize(), Tawk_API.setAttributes({
                name: String(e.name),
                email: String(e.email)
            }, (function(e) {
                console.log("Error setting attributes", e)
            }))
        }, t = document.createElement("script"), n = document.getElementsByTagName("script")[0], t.async = !0, t.src = "https://embed.tawk.to/" + String(e.id) + "/" + String(e.uniqueid), t.charset = "UTF-8", t.setAttribute("crossorigin", "*"), n.parentNode.insertBefore(t, n)
    };
    var s = {},
        a = function() {},
        l = "message";
    window.addEventListener ? (a = window.addEventListener, l = "message") : window.attachEvent && (a = window.attachEvent, l = "onmessage"), a(l, (function(e) {
        var t = e.data ? e.data : e.message;
        t = t || {}, event_callback = s[t.event], event_callback && "function" == typeof event_callback && event_callback(t.data)
    })), n.on = function(e, t) {
        s[e] = t
    }, n.ready && "function" == typeof n.ready && n.ready()
}($jq, tarsWidget, tars);