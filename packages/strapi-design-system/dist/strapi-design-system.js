import * as te from "react";
import o, { createContext as Te, useContext as we, useRef as Y, forwardRef as Pe, Children as ce, cloneElement as ye, useState as oe, useEffect as ee, useLayoutEffect as Se, useImperativeHandle as an, useCallback as ri } from "react";
import g, { keyframes as wr, createGlobalStyle as oi, ThemeProvider as ni, useTheme as ai } from "styled-components";
import { Loader as sn, CarretDown as Le, Cross as Fe, CheckCircle as ii, ExclamationMarkCircle as si, Information as li, ChevronRight as Pt, ChevronLeft as Nr, CalendarIcon as ci, ExternalLink as di, Search as ln, Dot as ui, Clock as pi } from "@strapi/icons";
import * as fi from "react-dom";
import { createPortal as gi } from "react-dom";
import { NavLink as Ce } from "react-router-dom";
var r = { exports: {} }, or = { exports: {} }, Z = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var po;
function mi() {
  if (po)
    return Z;
  po = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, a = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, z = e ? Symbol.for("react.scope") : 60119;
  function O(E) {
    if (typeof E == "object" && E !== null) {
      var Q = E.$$typeof;
      switch (Q) {
        case t:
          switch (E = E.type, E) {
            case p:
            case d:
            case a:
            case s:
            case i:
            case u:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case c:
                case f:
                case b:
                case h:
                case l:
                  return E;
                default:
                  return Q;
              }
          }
        case n:
          return Q;
      }
    }
  }
  function $(E) {
    return O(E) === d;
  }
  return Z.AsyncMode = p, Z.ConcurrentMode = d, Z.ContextConsumer = c, Z.ContextProvider = l, Z.Element = t, Z.ForwardRef = f, Z.Fragment = a, Z.Lazy = b, Z.Memo = h, Z.Portal = n, Z.Profiler = s, Z.StrictMode = i, Z.Suspense = u, Z.isAsyncMode = function(E) {
    return $(E) || O(E) === p;
  }, Z.isConcurrentMode = $, Z.isContextConsumer = function(E) {
    return O(E) === c;
  }, Z.isContextProvider = function(E) {
    return O(E) === l;
  }, Z.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === t;
  }, Z.isForwardRef = function(E) {
    return O(E) === f;
  }, Z.isFragment = function(E) {
    return O(E) === a;
  }, Z.isLazy = function(E) {
    return O(E) === b;
  }, Z.isMemo = function(E) {
    return O(E) === h;
  }, Z.isPortal = function(E) {
    return O(E) === n;
  }, Z.isProfiler = function(E) {
    return O(E) === s;
  }, Z.isStrictMode = function(E) {
    return O(E) === i;
  }, Z.isSuspense = function(E) {
    return O(E) === u;
  }, Z.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === a || E === d || E === s || E === i || E === u || E === m || typeof E == "object" && E !== null && (E.$$typeof === b || E.$$typeof === h || E.$$typeof === l || E.$$typeof === c || E.$$typeof === f || E.$$typeof === v || E.$$typeof === T || E.$$typeof === z || E.$$typeof === x);
  }, Z.typeOf = O, Z;
}
var X = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fo;
function bi() {
  return fo || (fo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, a = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, z = e ? Symbol.for("react.scope") : 60119;
    function O(R) {
      return typeof R == "string" || typeof R == "function" || R === a || R === d || R === s || R === i || R === u || R === m || typeof R == "object" && R !== null && (R.$$typeof === b || R.$$typeof === h || R.$$typeof === l || R.$$typeof === c || R.$$typeof === f || R.$$typeof === v || R.$$typeof === T || R.$$typeof === z || R.$$typeof === x);
    }
    function $(R) {
      if (typeof R == "object" && R !== null) {
        var Ue = R.$$typeof;
        switch (Ue) {
          case t:
            var be = R.type;
            switch (be) {
              case p:
              case d:
              case a:
              case s:
              case i:
              case u:
                return be;
              default:
                var $t = be && be.$$typeof;
                switch ($t) {
                  case c:
                  case f:
                  case b:
                  case h:
                  case l:
                    return $t;
                  default:
                    return Ue;
                }
            }
          case n:
            return Ue;
        }
      }
    }
    var E = p, Q = d, N = c, I = l, P = t, G = f, W = a, K = b, _ = h, re = n, U = s, ae = i, pe = u, fe = !1;
    function M(R) {
      return fe || (fe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), k(R) || $(R) === p;
    }
    function k(R) {
      return $(R) === d;
    }
    function D(R) {
      return $(R) === c;
    }
    function j(R) {
      return $(R) === l;
    }
    function A(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function q(R) {
      return $(R) === f;
    }
    function L(R) {
      return $(R) === a;
    }
    function B(R) {
      return $(R) === b;
    }
    function F(R) {
      return $(R) === h;
    }
    function H(R) {
      return $(R) === n;
    }
    function V(R) {
      return $(R) === s;
    }
    function le(R) {
      return $(R) === i;
    }
    function me(R) {
      return $(R) === u;
    }
    X.AsyncMode = E, X.ConcurrentMode = Q, X.ContextConsumer = N, X.ContextProvider = I, X.Element = P, X.ForwardRef = G, X.Fragment = W, X.Lazy = K, X.Memo = _, X.Portal = re, X.Profiler = U, X.StrictMode = ae, X.Suspense = pe, X.isAsyncMode = M, X.isConcurrentMode = k, X.isContextConsumer = D, X.isContextProvider = j, X.isElement = A, X.isForwardRef = q, X.isFragment = L, X.isLazy = B, X.isMemo = F, X.isPortal = H, X.isProfiler = V, X.isStrictMode = le, X.isSuspense = me, X.isValidElementType = O, X.typeOf = $;
  }()), X;
}
var go;
function cn() {
  return go || (go = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = mi() : e.exports = bi();
  }(or)), or.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var nr, mo;
function hi() {
  if (mo)
    return nr;
  mo = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function a(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var l = {}, c = 0; c < 10; c++)
        l["_" + String.fromCharCode(c)] = c;
      var p = Object.getOwnPropertyNames(l).map(function(f) {
        return l[f];
      });
      if (p.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        d[f] = f;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return nr = i() ? Object.assign : function(s, l) {
    for (var c, p = a(s), d, f = 1; f < arguments.length; f++) {
      c = Object(arguments[f]);
      for (var u in c)
        t.call(c, u) && (p[u] = c[u]);
      if (e) {
        d = e(c);
        for (var m = 0; m < d.length; m++)
          n.call(c, d[m]) && (p[d[m]] = c[d[m]]);
      }
    }
    return p;
  }, nr;
}
var ar, bo;
function Dr() {
  if (bo)
    return ar;
  bo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ar = e, ar;
}
var ir, ho;
function xi() {
  if (ho)
    return ir;
  ho = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Dr(), n = {}, a = Function.call.bind(Object.prototype.hasOwnProperty);
    e = function(s) {
      var l = "Warning: " + s;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function i(s, l, c, p, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in s)
        if (a(s, f)) {
          var u;
          try {
            if (typeof s[f] != "function") {
              var m = Error(
                (p || "React class") + ": " + c + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[f] + "`."
              );
              throw m.name = "Invariant Violation", m;
            }
            u = s[f](l, f, p, c, null, t);
          } catch (b) {
            u = b;
          }
          if (u && !(u instanceof Error) && e(
            (p || "React class") + ": type specification of " + c + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), u instanceof Error && !(u.message in n)) {
            n[u.message] = !0;
            var h = d ? d() : "";
            e(
              "Failed " + c + " type: " + u.message + (h != null ? h : "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, ir = i, ir;
}
var sr, xo;
function yi() {
  if (xo)
    return sr;
  xo = 1;
  var e = cn(), t = hi(), n = Dr(), a = xi(), i = Function.call.bind(Object.prototype.hasOwnProperty), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(c) {
    var p = "Warning: " + c;
    typeof console < "u" && console.error(p);
    try {
      throw new Error(p);
    } catch {
    }
  });
  function l() {
    return null;
  }
  return sr = function(c, p) {
    var d = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function u(M) {
      var k = M && (d && M[d] || M[f]);
      if (typeof k == "function")
        return k;
    }
    var m = "<<anonymous>>", h = {
      array: T("array"),
      bool: T("boolean"),
      func: T("function"),
      number: T("number"),
      object: T("object"),
      string: T("string"),
      symbol: T("symbol"),
      any: z(),
      arrayOf: O,
      element: $(),
      elementType: E(),
      instanceOf: Q,
      node: G(),
      objectOf: I,
      oneOf: N,
      oneOfType: P,
      shape: W,
      exact: K
    };
    function b(M, k) {
      return M === k ? M !== 0 || 1 / M === 1 / k : M !== M && k !== k;
    }
    function x(M) {
      this.message = M, this.stack = "";
    }
    x.prototype = Error.prototype;
    function v(M) {
      if (process.env.NODE_ENV !== "production")
        var k = {}, D = 0;
      function j(q, L, B, F, H, V, le) {
        if (F = F || m, V = V || B, le !== n) {
          if (p) {
            var me = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw me.name = "Invariant Violation", me;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var R = F + ":" + B;
            !k[R] && D < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + F + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), k[R] = !0, D++);
          }
        }
        return L[B] == null ? q ? L[B] === null ? new x("The " + H + " `" + V + "` is marked as required " + ("in `" + F + "`, but its value is `null`.")) : new x("The " + H + " `" + V + "` is marked as required in " + ("`" + F + "`, but its value is `undefined`.")) : null : M(L, B, F, H, V);
      }
      var A = j.bind(null, !1);
      return A.isRequired = j.bind(null, !0), A;
    }
    function T(M) {
      function k(D, j, A, q, L, B) {
        var F = D[j], H = U(F);
        if (H !== M) {
          var V = ae(F);
          return new x("Invalid " + q + " `" + L + "` of type " + ("`" + V + "` supplied to `" + A + "`, expected ") + ("`" + M + "`."));
        }
        return null;
      }
      return v(k);
    }
    function z() {
      return v(l);
    }
    function O(M) {
      function k(D, j, A, q, L) {
        if (typeof M != "function")
          return new x("Property `" + L + "` of component `" + A + "` has invalid PropType notation inside arrayOf.");
        var B = D[j];
        if (!Array.isArray(B)) {
          var F = U(B);
          return new x("Invalid " + q + " `" + L + "` of type " + ("`" + F + "` supplied to `" + A + "`, expected an array."));
        }
        for (var H = 0; H < B.length; H++) {
          var V = M(B, H, A, q, L + "[" + H + "]", n);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return v(k);
    }
    function $() {
      function M(k, D, j, A, q) {
        var L = k[D];
        if (!c(L)) {
          var B = U(L);
          return new x("Invalid " + A + " `" + q + "` of type " + ("`" + B + "` supplied to `" + j + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(M);
    }
    function E() {
      function M(k, D, j, A, q) {
        var L = k[D];
        if (!e.isValidElementType(L)) {
          var B = U(L);
          return new x("Invalid " + A + " `" + q + "` of type " + ("`" + B + "` supplied to `" + j + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(M);
    }
    function Q(M) {
      function k(D, j, A, q, L) {
        if (!(D[j] instanceof M)) {
          var B = M.name || m, F = fe(D[j]);
          return new x("Invalid " + q + " `" + L + "` of type " + ("`" + F + "` supplied to `" + A + "`, expected ") + ("instance of `" + B + "`."));
        }
        return null;
      }
      return v(k);
    }
    function N(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), l;
      function k(D, j, A, q, L) {
        for (var B = D[j], F = 0; F < M.length; F++)
          if (b(B, M[F]))
            return null;
        var H = JSON.stringify(M, function(le, me) {
          var R = ae(me);
          return R === "symbol" ? String(me) : me;
        });
        return new x("Invalid " + q + " `" + L + "` of value `" + String(B) + "` " + ("supplied to `" + A + "`, expected one of " + H + "."));
      }
      return v(k);
    }
    function I(M) {
      function k(D, j, A, q, L) {
        if (typeof M != "function")
          return new x("Property `" + L + "` of component `" + A + "` has invalid PropType notation inside objectOf.");
        var B = D[j], F = U(B);
        if (F !== "object")
          return new x("Invalid " + q + " `" + L + "` of type " + ("`" + F + "` supplied to `" + A + "`, expected an object."));
        for (var H in B)
          if (i(B, H)) {
            var V = M(B, H, A, q, L + "." + H, n);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return v(k);
    }
    function P(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var k = 0; k < M.length; k++) {
        var D = M[k];
        if (typeof D != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + pe(D) + " at index " + k + "."
          ), l;
      }
      function j(A, q, L, B, F) {
        for (var H = 0; H < M.length; H++) {
          var V = M[H];
          if (V(A, q, L, B, F, n) == null)
            return null;
        }
        return new x("Invalid " + B + " `" + F + "` supplied to " + ("`" + L + "`."));
      }
      return v(j);
    }
    function G() {
      function M(k, D, j, A, q) {
        return _(k[D]) ? null : new x("Invalid " + A + " `" + q + "` supplied to " + ("`" + j + "`, expected a ReactNode."));
      }
      return v(M);
    }
    function W(M) {
      function k(D, j, A, q, L) {
        var B = D[j], F = U(B);
        if (F !== "object")
          return new x("Invalid " + q + " `" + L + "` of type `" + F + "` " + ("supplied to `" + A + "`, expected `object`."));
        for (var H in M) {
          var V = M[H];
          if (!!V) {
            var le = V(B, H, A, q, L + "." + H, n);
            if (le)
              return le;
          }
        }
        return null;
      }
      return v(k);
    }
    function K(M) {
      function k(D, j, A, q, L) {
        var B = D[j], F = U(B);
        if (F !== "object")
          return new x("Invalid " + q + " `" + L + "` of type `" + F + "` " + ("supplied to `" + A + "`, expected `object`."));
        var H = t({}, D[j], M);
        for (var V in H) {
          var le = M[V];
          if (!le)
            return new x(
              "Invalid " + q + " `" + L + "` key `" + V + "` supplied to `" + A + "`.\nBad object: " + JSON.stringify(D[j], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(M), null, "  ")
            );
          var me = le(B, V, A, q, L + "." + V, n);
          if (me)
            return me;
        }
        return null;
      }
      return v(k);
    }
    function _(M) {
      switch (typeof M) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !M;
        case "object":
          if (Array.isArray(M))
            return M.every(_);
          if (M === null || c(M))
            return !0;
          var k = u(M);
          if (k) {
            var D = k.call(M), j;
            if (k !== M.entries) {
              for (; !(j = D.next()).done; )
                if (!_(j.value))
                  return !1;
            } else
              for (; !(j = D.next()).done; ) {
                var A = j.value;
                if (A && !_(A[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function re(M, k) {
      return M === "symbol" ? !0 : k ? k["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && k instanceof Symbol : !1;
    }
    function U(M) {
      var k = typeof M;
      return Array.isArray(M) ? "array" : M instanceof RegExp ? "object" : re(k, M) ? "symbol" : k;
    }
    function ae(M) {
      if (typeof M > "u" || M === null)
        return "" + M;
      var k = U(M);
      if (k === "object") {
        if (M instanceof Date)
          return "date";
        if (M instanceof RegExp)
          return "regexp";
      }
      return k;
    }
    function pe(M) {
      var k = ae(M);
      switch (k) {
        case "array":
        case "object":
          return "an " + k;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + k;
        default:
          return k;
      }
    }
    function fe(M) {
      return !M.constructor || !M.constructor.name ? m : M.constructor.name;
    }
    return h.checkPropTypes = a, h.resetWarningCache = a.resetWarningCache, h.PropTypes = h, h;
  }, sr;
}
var lr, yo;
function Ei() {
  if (yo)
    return lr;
  yo = 1;
  var e = Dr();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, lr = function() {
    function a(l, c, p, d, f, u) {
      if (u !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    a.isRequired = a;
    function i() {
      return a;
    }
    var s = {
      array: a,
      bool: a,
      func: a,
      number: a,
      object: a,
      string: a,
      symbol: a,
      any: a,
      arrayOf: i,
      element: a,
      elementType: a,
      instanceOf: i,
      node: a,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, lr;
}
if (process.env.NODE_ENV !== "production") {
  var vi = cn(), Mi = !0;
  r.exports = yi()(vi.isElement, Mi);
} else
  r.exports = Ei()();
const dn = "alpha", un = "beta", pn = "delta", fn = "epsilon", Cr = "omega", gn = "pi", mn = "sigma", $i = [dn, un, pn, fn, Cr, gn, mn], Ti = ({ ellipsis: e }) => e && `
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `, wi = ({ variant: e, theme: t }) => {
  switch (e) {
    case dn:
      return `
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[5]};
        line-height: ${t.lineHeights[2]};
      `;
    case un:
      return `
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[4]};
        line-height: ${t.lineHeights[1]};
      `;
    case pn:
      return `
        font-weight: ${t.fontWeights.semiBold};
        font-size: ${t.fontSizes[3]};
        line-height: ${t.lineHeights[2]};
      `;
    case fn:
      return `
        font-size: ${t.fontSizes[3]};
        line-height: ${t.lineHeights[6]};
      `;
    case Cr:
      return `
        font-size: ${t.fontSizes[2]};
        line-height: ${t.lineHeights[4]};
      `;
    case gn:
      return `
        font-size: ${t.fontSizes[1]};
        line-height: ${t.lineHeights[3]};
      `;
    case mn:
      return `
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[0]};
        line-height: ${t.lineHeights[5]};
        text-transform: uppercase;
      `;
    default:
      return `
        font-size: ${t.fontSizes[2]};
      `;
  }
}, Ni = ({ theme: e, textColor: t }) => e.colors[t || "neutral800"], Di = {
  ellipsis: !1,
  fontWeight: void 0,
  fontSize: void 0,
  lineHeight: void 0,
  textColor: void 0,
  textTransform: void 0,
  variant: Cr
}, Ci = {
  ellipsis: r.exports.bool,
  fontSize: r.exports.oneOfType([r.exports.number, r.exports.string]),
  fontWeight: r.exports.string,
  lineHeight: r.exports.oneOfType([r.exports.number, r.exports.string]),
  textColor: r.exports.string,
  textTransform: r.exports.string,
  variant: r.exports.oneOf($i)
}, Ii = {
  fontSize: !0,
  fontWeight: !0
}, w = g.span.withConfig({
  shouldForwardProp: (e, t) => !Ii[e] && t(e)
})`
  font-weight: ${({ theme: e, fontWeight: t }) => e.fontWeights[t]};
  font-size: ${({ theme: e, fontSize: t }) => e.fontSizes[t]};
  line-height: ${({ theme: e, lineHeight: t }) => e.lineHeights[t]};
  color: ${Ni};
  text-transform: ${({ textTransform: e }) => e};
  ${Ti}
  ${wi}
`;
w.defaultProps = Di;
w.propTypes = Ci;
const bn = Te(), hn = () => we(bn);
let ki = 0;
const Oi = () => ++ki, se = (e, t) => Y(t || `${e}-${Oi()}`).current, xe = (e, t, n) => {
  let a = t;
  if (!Array.isArray(t) && typeof t == "object" && (a = [t == null ? void 0 : t.desktop, t == null ? void 0 : t.tablet, t == null ? void 0 : t.mobile]), a === void 0)
    return;
  if (Array.isArray(a)) {
    const [s, l, c] = a;
    let p = `${e}: ${n.spaces[s]};`;
    return l !== void 0 && (p += `${n.mediaQueries.tablet}{
          ${e}: ${n.spaces[l]};
        }`), c !== void 0 && (p += `${n.mediaQueries.mobile}{
          ${e}: ${n.spaces[c]};
        }`), p;
  }
  const i = n.spaces[a] || a;
  return `${e}: ${i};`;
}, Ri = {
  background: void 0,
  borderColor: void 0,
  color: void 0,
  hiddenS: !1,
  hiddenXS: !1,
  padding: void 0,
  paddingTop: void 0,
  paddingRight: void 0,
  paddingBottom: void 0,
  paddingLeft: void 0,
  hasRadius: !1,
  shadow: void 0,
  children: null,
  shrink: void 0,
  grow: void 0,
  basis: void 0,
  flex: void 0,
  _hover: () => {
  }
}, Ai = {
  _hover: r.exports.func,
  background: r.exports.string,
  basis: r.exports.oneOfType([r.exports.string, r.exports.string]),
  borderColor: r.exports.string,
  children: r.exports.oneOfType([r.exports.node, r.exports.string]),
  color: r.exports.string,
  flex: r.exports.oneOfType([r.exports.string, r.exports.string]),
  grow: r.exports.oneOfType([r.exports.string, r.exports.string]),
  hasRadius: r.exports.bool,
  hiddenS: r.exports.bool,
  hiddenXS: r.exports.bool,
  padding: r.exports.oneOfType([r.exports.number, r.exports.arrayOf(r.exports.number)]),
  paddingBottom: r.exports.oneOfType([r.exports.number, r.exports.arrayOf(r.exports.number)]),
  paddingLeft: r.exports.oneOfType([r.exports.number, r.exports.arrayOf(r.exports.number)]),
  paddingRight: r.exports.oneOfType([r.exports.number, r.exports.arrayOf(r.exports.number)]),
  paddingTop: r.exports.oneOfType([r.exports.number, r.exports.arrayOf(r.exports.number)]),
  shadow: r.exports.string,
  shrink: r.exports.oneOfType([r.exports.string, r.exports.string])
}, zi = {
  color: !0
}, y = g.div.withConfig({
  shouldForwardProp: (e, t) => !zi[e] && t(e)
})`
  // Font
  font-size: ${({ fontSize: e, theme: t }) => t.fontSizes[e] || e};

  // Colors
  background: ${({ theme: e, background: t }) => e.colors[t]};
  color: ${({ theme: e, color: t }) => e.colors[t]};

  // Spaces
  ${({ theme: e, padding: t }) => xe("padding", t, e)}
  ${({ theme: e, paddingTop: t }) => xe("padding-top", t, e)}
  ${({ theme: e, paddingRight: t }) => xe("padding-right", t, e)}
  ${({ theme: e, paddingBottom: t }) => xe("padding-bottom", t, e)}
  ${({ theme: e, paddingLeft: t }) => xe("padding-left", t, e)}
  ${({ theme: e, marginLeft: t }) => xe("margin-left", t, e)}
  ${({ theme: e, marginRight: t }) => xe("margin-right", t, e)}
  ${({ theme: e, marginTop: t }) => xe("margin-top", t, e)}
  ${({ theme: e, marginBottom: t }) => xe("margin-bottom", t, e)}

  // Responsive hiding
  ${({ theme: e, hiddenS: t }) => t ? `${e.mediaQueries.tablet} { display: none; }` : void 0}
  ${({ theme: e, hiddenXS: t }) => t ? `${e.mediaQueries.mobile} { display: none; }` : void 0}
  

  // Borders
  border-radius: ${({ theme: e, hasRadius: t, borderRadius: n }) => t ? e.borderRadius : n};
  border-style: ${({ borderStyle: e }) => e};
  border-width: ${({ borderWidth: e }) => e};
  border-color: ${({ borderColor: e, theme: t }) => t.colors[e]};
  border: ${({ theme: e, borderColor: t, borderStyle: n, borderWidth: a }) => {
  if (t && !n && !a)
    return `1px solid ${e.colors[t]}`;
}};

  // Shadows
  box-shadow: ${({ theme: e, shadow: t }) => e.shadows[t]};

  // Handlers
  pointer-events: ${({ pointerEvents: e }) => e};
  &:hover {
    ${({ _hover: e, theme: t }) => e ? e(t) : void 0}
  }

  // Display
  display: ${({ display: e }) => e};

  // Position
  position: ${({ position: e }) => e};
  left: ${({ left: e, theme: t }) => t.spaces[e] || e};
  right: ${({ right: e, theme: t }) => t.spaces[e] || e};
  top: ${({ top: e, theme: t }) => t.spaces[e] || e};
  bottom: ${({ bottom: e, theme: t }) => t.spaces[e] || e};
  z-index: ${({ zIndex: e }) => e};
  overflow: ${({ overflow: e }) => e};
  cursor: ${({ cursor: e }) => e};

  // Size
  width: ${({ width: e, theme: t }) => t.spaces[e] || e};
  max-width: ${({ maxWidth: e, theme: t }) => t.spaces[e] || e};
  min-width: ${({ minWidth: e, theme: t }) => t.spaces[e] || e};
  height: ${({ height: e, theme: t }) => t.spaces[e] || e};
  max-height: ${({ maxHeight: e, theme: t }) => t.spaces[e] || e};
  min-height: ${({ minHeight: e, theme: t }) => t.spaces[e] || e};

  // Animation
  transition: ${({ transition: e }) => e};
  transform: ${({ transform: e }) => e};
  animation: ${({ animation: e }) => e};

  //Flexbox children props
  flex-shrink: ${({ shrink: e }) => e};
  flex-grow: ${({ grow: e }) => e};
  flex-basis: ${({ basis: e }) => e};
  flex: ${({ flex: e }) => e};

  // Text
  text-align: ${({ textAlign: e }) => e};
  text-transform: ${({ textTransform: e }) => e};
  line-height: ${({ lineHeight: e }) => e};

  // Cursor
  cursor: ${({ cursor: e }) => e};
`;
y.defaultProps = Ri;
y.propTypes = Ai;
const Si = {
  alignItems: "center",
  basis: void 0,
  direction: "row",
  gap: void 0,
  inline: !1,
  justifyContent: void 0,
  reverse: !1,
  wrap: void 0
}, Li = {
  alignItems: r.exports.string,
  basis: r.exports.oneOfType([r.exports.string, r.exports.number]),
  direction: r.exports.string,
  gap: r.exports.oneOfType([
    r.exports.shape({
      desktop: r.exports.number,
      mobile: r.exports.number,
      tablet: r.exports.number
    }),
    r.exports.number,
    r.exports.arrayOf(r.exports.number),
    r.exports.string
  ]),
  inline: r.exports.bool,
  justifyContent: r.exports.string,
  reverse: r.exports.bool,
  shrink: r.exports.number,
  wrap: r.exports.string
}, ji = {
  direction: !0
}, C = g(y).withConfig({
  shouldForwardProp: (e, t) => !ji[e] && t(e)
})`
  align-items: ${({ alignItems: e }) => e};
  display: ${({ inline: e }) => e ? "inline-flex" : "flex"};
  flex-direction: ${({ direction: e }) => e};
  flex-shrink: ${({ shrink: e }) => e};
  flex-wrap: ${({ wrap: e }) => e};
  ${({ gap: e, theme: t }) => xe("gap", e, t)}};
  justify-content: ${({ justifyContent: e }) => e};
`;
C.defaultProps = Si;
C.propTypes = Li;
const Pi = ({ theme: e, expanded: t, variant: n, disabled: a, error: i }) => i ? `1px solid ${e.colors.danger600} !important` : a ? `1px solid ${e.colors.neutral150}` : t ? `1px solid ${e.colors.primary600}` : n === "primary" ? `1px solid ${e.colors.neutral0}` : `1px solid ${e.colors.neutral100}`, xn = g(w)``, qi = g(y)`
  border: ${Pi};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({ theme: e }) => e.colors.primary600};

    ${xn} {
      color: ${({ theme: e, expanded: t }) => t ? void 0 : e.colors.primary700};
    }

    ${w} {
      color: ${({ theme: e, expanded: t }) => t ? void 0 : e.colors.primary600};
    }

    & > ${C} {
      background: ${({ theme: e }) => e.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({ theme: e }) => e.colors.primary200};
    }
  }
`, yn = ({
  children: e,
  expanded: t,
  id: n,
  size: a,
  variant: i,
  disabled: s,
  error: l,
  hasErrorMessage: c,
  onToggle: p,
  toggle: d
}) => {
  const f = se("accordion", n);
  return /* @__PURE__ */ o.createElement(bn.Provider, {
    value: { expanded: t, onToggle: p, toggle: d, id: f, size: a, variant: i, disabled: s }
  }, /* @__PURE__ */ o.createElement(qi, {
    "data-strapi-expanded": t,
    disabled: s,
    "aria-disabled": s,
    expanded: t,
    hasRadius: !0,
    variant: i,
    error: l
  }, e), l && c && /* @__PURE__ */ o.createElement(y, {
    paddingTop: 1
  }, /* @__PURE__ */ o.createElement(w, {
    variant: "pi",
    textColor: "danger600"
  }, l)));
};
yn.defaultProps = {
  disabled: !1,
  error: void 0,
  expanded: !1,
  hasErrorMessage: !0,
  id: void 0,
  toggle: !1,
  size: "M",
  variant: "primary",
  onToggle: void 0,
  toggle: void 0
};
yn.propTypes = {
  children: r.exports.node.isRequired,
  disabled: r.exports.bool,
  error: r.exports.string,
  expanded: r.exports.bool,
  hasErrorMessage: r.exports.bool,
  id: r.exports.string,
  onToggle: r.exports.func,
  size: r.exports.oneOf(["S", "M"]),
  toggle: r.exports.func,
  variant: r.exports.oneOf(["primary", "secondary"])
};
const Bi = ({ children: e, ...t }) => {
  const { expanded: n, id: a } = hn();
  if (!n)
    return null;
  const i = `accordion-content-${a}`, s = `accordion-label-${a}`, l = `accordion-desc-${a}`;
  return /* @__PURE__ */ o.createElement(y, {
    role: "region",
    id: i,
    "aria-labelledby": s,
    "aria-describedby": l,
    ...t
  }, e);
};
Bi.propTypes = {
  children: r.exports.node.isRequired
};
const En = (e) => ({ theme: t, size: n }) => t.sizes[e][n], Je = (e = "&") => ({ theme: t, hasError: n }) => `
      outline: none;
      box-shadow: 0;
      transition-property: border-color, box-shadow, fill;
      transition-duration: 0.2s;

      ${e}:focus-within {
        border: 1px solid ${n ? t.colors.danger600 : t.colors.primary600};
        box-shadow: ${n ? t.colors.danger600 : t.colors.primary600} 0px 0px 0px 2px;
      }
    `, st = ({ theme: e }) => `
  position: relative;
  outline: none;
  
  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${e.colors.primary600};
    }
  }
`, Wi = wr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`, Ui = g.div`
  animation: ${Wi} 2s infinite linear;
  will-change: transform;
`, Yi = g(C)`
  background: transparent;
  border: none;

  &[aria-disabled='true'] {
    pointer-events: none;
    svg path {
      fill: ${({ theme: e }) => e.colors.neutral600};
    }
  }

  svg {
    display: flex;
    font-size: ${10 / 16}rem;
  }

  svg path {
    fill: ${({ theme: e }) => e.colors.primary600};
  }

  ${st}
`, lt = o.forwardRef(
  ({ children: e, startIcon: t, endIcon: n, onClick: a, disabled: i, loading: s, ...l }, c) => {
    const p = a && !i ? a : void 0, d = i || s;
    return /* @__PURE__ */ o.createElement(Yi, {
      ref: c,
      "aria-disabled": d,
      onClick: p,
      as: "button",
      type: "button",
      ...l
    }, (t || s) && /* @__PURE__ */ o.createElement(y, {
      as: "span",
      paddingRight: 2,
      "aria-hidden": !0
    }, s ? /* @__PURE__ */ o.createElement(Ui, null, /* @__PURE__ */ o.createElement(sn, null)) : t), /* @__PURE__ */ o.createElement(w, {
      variant: "pi",
      textColor: d ? "neutral600" : "primary600"
    }, e), n && /* @__PURE__ */ o.createElement(y, {
      as: "span",
      paddingLeft: 2,
      "aria-hidden": !0
    }, n));
  }
);
lt.displayName = "TextButton";
lt.defaultProps = {
  disabled: !1,
  startIcon: void 0,
  endIcon: void 0,
  loading: !1,
  onClick: void 0
};
lt.propTypes = {
  children: r.exports.node.isRequired,
  disabled: r.exports.bool,
  endIcon: r.exports.element,
  loading: r.exports.bool,
  onClick: r.exports.func,
  startIcon: r.exports.element
};
const vn = {
  size: !0
}, Qi = g(C).withConfig({
  shouldForwardProp: (e, t) => !vn[e] && t(e)
})`
  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  & > * + * {
    margin-top: ${({ theme: e, spacing: t }) => e.spaces[t]};
  }
`, Fi = g(C).withConfig({
  shouldForwardProp: (e, t) => !vn[e] && t(e)
})`
  & > * {
    margin-left: 0;
    margin-right: 0;
  }

  & > * + * {
    margin-left: ${({ theme: e, spacing: t }) => e.spaces[t]};
  }
`, ne = Pe(({ horizontal: e, spacing: t, size: n, ...a }, i) => (n && console.warn(
  'Deprecation warning: Usage of "size" prop in Stack component is deprecated. This is discouraged and will be removed in the next major release. Please use "spacing" instead'
), e ? /* @__PURE__ */ o.createElement(Fi, {
  ref: i,
  spacing: t || n,
  ...a
}) : /* @__PURE__ */ o.createElement(Qi, {
  direction: "column",
  alignItems: "stretch",
  ref: i,
  spacing: t || n,
  ...a
})));
ne.displayName = "Stack";
ne.defaultProps = {
  horizontal: !1,
  size: void 0,
  spacing: void 0
};
ne.propTypes = {
  horizontal: r.exports.bool,
  size: r.exports.number,
  spacing: r.exports.number
};
const _i = g(y)`
  path {
    fill: ${({ color: e, theme: t }) => t.colors[e]};
  }
  ${({ theme: e, colors: t }) => t(e)}
`, Ie = o.forwardRef((e, t) => /* @__PURE__ */ o.createElement(_i, {
  ref: t,
  ...e
}));
Ie.displayName = "Icon";
Ie.defaultProps = {
  color: "neutral600",
  colors: () => {
  }
};
Ie.propTypes = {
  color: r.exports.string,
  colors: r.exports.func
};
const Hi = ({ expanded: e, disabled: t, variant: n }) => {
  let a;
  return e ? a = "primary100" : t ? a = "neutral150" : n === "primary" ? a = "neutral0" : a = "neutral100", a;
}, Vi = g(lt)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14 / 16}rem;
    height: ${14 / 16}rem;

    path {
      fill: ${({ theme: e, expanded: t }) => t ? e.colors.primary600 : e.colors.neutral500};
    }
  }
`, Gi = g(C)`
  min-height: ${({ theme: e, size: t }) => e.sizes.accordions[t]};
  border-radius: ${({ theme: e, expanded: t }) => t ? `${e.borderRadius} ${e.borderRadius} 0 0` : e.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({ theme: e }) => e.colors.primary600};
      }
    }
  }
`, Mn = ({ title: e, description: t, as: n, togglePosition: a, action: i, ...s }) => {
  const l = Y(null), { onToggle: c, toggle: p, expanded: d, id: f, size: u, variant: m, disabled: h } = hn(), b = `accordion-content-${f}`, x = `accordion-label-${f}`, v = `accordion-desc-${f}`, T = u === "M" ? 6 : 4, z = u === "M" ? T : T - 2, O = Hi({ expanded: d, disabled: h, variant: m }), E = {
    as: n,
    fontWeight: u === "S" ? "bold" : void 0,
    id: x,
    textColor: d ? "primary600" : "neutral700",
    ellipsis: !0,
    variant: u === "M" ? "delta" : void 0
  }, Q = d ? "primary600" : "neutral600", N = d ? "primary200" : "neutral200", I = u === "M" ? `${32 / 16}rem` : `${24 / 16}rem`, P = () => {
    h || (p && !c ? (console.warn(
      'Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'
    ), p()) : c());
  }, G = /* @__PURE__ */ o.createElement(C, {
    justifyContent: "center",
    borderRadius: "50%",
    height: I,
    width: I,
    transform: d ? "rotate(180deg)" : void 0,
    "data-strapi-dropdown": !0,
    disabled: h,
    "aria-hidden": !0,
    as: "span",
    background: N,
    cursor: h ? "not-allowed" : "pointer",
    onClick: () => {
      var W;
      return (W = l == null ? void 0 : l.current) == null ? void 0 : W.click();
    },
    shrink: 0
  }, /* @__PURE__ */ o.createElement(Ie, {
    as: Le,
    width: u === "M" ? `${11 / 16}rem` : `${8 / 16}rem`,
    color: d ? "primary600" : "neutral600"
  }));
  return /* @__PURE__ */ o.createElement(Gi, {
    paddingBottom: z,
    paddingLeft: T,
    paddingRight: T,
    paddingTop: z,
    background: O,
    expanded: d,
    size: u,
    justifyContent: "space-between",
    cursor: h ? "not-allowed" : ""
  }, /* @__PURE__ */ o.createElement(ne, {
    horizontal: !0,
    spacing: 3,
    flex: 1,
    maxWidth: "100%"
  }, a === "left" && G, /* @__PURE__ */ o.createElement(Vi, {
    ref: l,
    onClick: P,
    "aria-disabled": h,
    "aria-expanded": d,
    "aria-controls": b,
    "aria-labelledby": x,
    "data-strapi-accordion-toggle": !0,
    expanded: d,
    type: "button",
    flex: 1,
    minWidth: 0,
    ...s
  }, /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement(xn, {
    ...E
  }, e), t && /* @__PURE__ */ o.createElement(w, {
    as: "p",
    id: v,
    textColor: Q
  }, t))), a === "right" && /* @__PURE__ */ o.createElement(ne, {
    horizontal: !0,
    spacing: 3
  }, G, i), a === "left" && i));
};
Mn.defaultProps = {
  action: void 0,
  as: "span",
  description: void 0,
  variant: "primary",
  togglePosition: "right"
};
Mn.propTypes = {
  action: r.exports.node,
  as: r.exports.string,
  description: r.exports.string,
  title: r.exports.string.isRequired,
  togglePosition: r.exports.oneOf(["right", "left"]),
  variant: r.exports.oneOf(["primary", "secondary"])
};
const S = {
  DOWN: "ArrowDown",
  UP: "ArrowUp",
  RIGHT: "ArrowRight",
  LEFT: "ArrowLeft",
  ESCAPE: "Escape",
  ENTER: "Enter",
  SPACE: " ",
  TAB: "Tab",
  END: "End",
  HOME: "Home",
  DELETE: "Delete",
  PAGE_UP: "PageUp",
  PAGE_DOWN: "PageDown",
  BACKSPACE: "Backspace",
  CLEAR: "Clear"
}, Ir = ({ tagName: e, attributeName: t, ...n }) => {
  const a = () => {
    const l = document.activeElement;
    return e ? l.tagName.toLowerCase() === e : l.hasAttribute(t);
  }, i = (l) => e ? l.querySelectorAll(e) : l.querySelectorAll(`[${t}]`), s = (l) => {
    switch (l.key) {
      case S.RIGHT:
      case S.DOWN: {
        if (a()) {
          l.preventDefault();
          const c = document.activeElement, p = [...i(l.currentTarget)], d = p.findIndex((u) => u === c), f = d + 1 < p.length ? d + 1 : 0;
          p[f].focus();
        }
        break;
      }
      case S.LEFT:
      case S.UP: {
        if (a()) {
          l.preventDefault();
          const c = document.activeElement, p = [...i(l.currentTarget)], d = p.findIndex((u) => u === c), f = d - 1 > -1 ? d - 1 : p.length - 1;
          p[f].focus();
        }
        break;
      }
      case S.HOME: {
        a() && (l.preventDefault(), i(l.currentTarget).item(0).focus());
        break;
      }
      case S.END: {
        if (a()) {
          l.preventDefault();
          const c = i(l.currentTarget);
          c.item(c.length - 1).focus();
        }
        break;
      }
    }
  };
  return /* @__PURE__ */ o.createElement(y, {
    onKeyDown: s,
    ...n
  });
};
Ir.defaultProps = {
  attributeName: void 0,
  tagName: void 0
};
Ir.propTypes = {
  attributeName: r.exports.string,
  tagName: r.exports.string
};
const Ki = g(y)`
  border-bottom: 1px solid ${({ theme: e }) => e.colors.neutral200};
  border-right: 1px solid ${({ theme: e }) => e.colors.neutral200};
  border-left: 1px solid ${({ theme: e }) => e.colors.neutral200};
  border-radius: 0 0 ${({ theme: e }) => e.borderRadius} ${({ theme: e }) => e.borderRadius};
`, Zi = g(y)`
  & > * {
    & > * {
      border-radius: unset;
    }
  }

  & > * {
    border-radius: unset;
    border-right: 1px solid ${({ theme: e }) => e.colors.neutral200};
    border-left: 1px solid ${({ theme: e }) => e.colors.neutral200};
    border-bottom: 1px solid ${({ theme: e }) => e.colors.neutral200};
  }

  & > *:first-of-type {
    border-top: 1px solid ${({ theme: e }) => e.colors.neutral200};
    border-radius: ${({ theme: e }) => e.borderRadius} ${({ theme: e }) => e.borderRadius} 0 0;
    & > * {
      border-radius: ${({ theme: e }) => e.borderRadius} ${({ theme: e }) => e.borderRadius} 0 0;
    }

    &:hover {
      border-top: 1px solid ${({ theme: e }) => e.colors.primary600};
    }
  }

  & [data-strapi-expanded='true'] {
    border: 1px solid ${({ theme: e }) => e.colors.primary600};
  }

  ${({ theme: e, footer: t }) => `
    &:not(${t}) {
      & > *:last-of-type {
        border-radius: 0 0 ${e.borderRadius} ${e.borderRadius};
      }
    }
  `}
`, Xi = g(y)`
  svg path {
    fill: ${({ theme: e }) => e.colors.neutral500};
  }
`, $n = ({ children: e, footer: t, label: n, labelAction: a, error: i }) => {
  const s = ce.toArray(e).map((l) => ye(l, { hasErrorMessage: !1 }));
  return /* @__PURE__ */ o.createElement(Ir, {
    attributeName: "data-strapi-accordion-toggle"
  }, n && /* @__PURE__ */ o.createElement(C, {
    paddingBottom: 1
  }, /* @__PURE__ */ o.createElement(w, {
    variant: "pi",
    as: "label",
    textColor: "neutral800",
    fontWeight: "bold"
  }, n), a && /* @__PURE__ */ o.createElement(Xi, {
    paddingLeft: 1
  }, a)), /* @__PURE__ */ o.createElement(Zi, {
    footer: t
  }, s), t && /* @__PURE__ */ o.createElement(Ki, null, t), i && /* @__PURE__ */ o.createElement(y, {
    paddingTop: 1
  }, /* @__PURE__ */ o.createElement(w, {
    variant: "pi",
    textColor: "danger600"
  }, i)));
};
$n.defaultProps = {
  footer: null,
  error: void 0,
  label: null,
  labelAction: void 0
};
$n.propTypes = {
  children: r.exports.node.isRequired,
  error: r.exports.string,
  footer: r.exports.node,
  label: r.exports.string,
  labelAction: r.exports.node
};
const Ji = ({ theme: e, variant: t }) => t === "danger" ? e.colors.danger100 : t === "success" ? e.colors.success100 : e.colors.primary100, es = ({ theme: e, variant: t }) => t === "danger" ? e.colors.danger200 : t === "success" ? e.colors.success200 : e.colors.primary200, br = ({ theme: e, variant: t }) => t === "danger" ? e.colors.danger700 : t === "success" ? e.colors.success700 : e.colors.primary700, ts = g(y)`
  flex: 1;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
`, rs = g(y)`
  border: 1px solid ${es};
  background: ${Ji};
  box-shadow: ${({ theme: e }) => e.shadows.filterShadow};
`, os = g.button`
  border: none;
  background: transparent;
  font-size: ${12 / 16}rem;
  svg path {
    fill: ${({ theme: e }) => e.colors.neutral700};
  }
  margin-top: ${({ theme: e }) => e.spaces[1]};
  ${st};
`, ns = g(y)`
  font-size: ${20 / 16}rem;
  svg path {
    fill: ${br};
  }
`, Tn = ({ variant: e, ...t }) => e === "success" ? /* @__PURE__ */ o.createElement(ii, {
  ...t
}) : e === "danger" ? /* @__PURE__ */ o.createElement(si, {
  ...t
}) : /* @__PURE__ */ o.createElement(li, {
  ...t
}), as = g(y)`
  // Checked with the designers, validated
  padding-top: 1px;

  & a > span {
    color: ${br};

    svg path {
      fill: ${br};
    }
  }
`, kr = ({ title: e, children: t, variant: n, onClose: a, closeLabel: i, titleAs: s, action: l, ...c }) => /* @__PURE__ */ o.createElement(rs, {
  hasRadius: !0,
  paddingLeft: 5,
  paddingRight: 6,
  paddingTop: 5,
  variant: n,
  ...c
}, /* @__PURE__ */ o.createElement(C, {
  alignItems: "flex-start"
}, /* @__PURE__ */ o.createElement(ns, {
  paddingRight: 3,
  variant: n
}, /* @__PURE__ */ o.createElement(Tn, {
  variant: n,
  "aria-hidden": !0
})), /* @__PURE__ */ o.createElement(ts, {
  role: n === "danger" ? "alert" : "status"
}, /* @__PURE__ */ o.createElement(y, {
  paddingBottom: 2,
  paddingRight: 1
}, /* @__PURE__ */ o.createElement(w, {
  fontWeight: "bold",
  textColor: "neutral800",
  as: s
}, e)), /* @__PURE__ */ o.createElement(y, {
  paddingBottom: l ? 2 : 5,
  paddingRight: 2
}, /* @__PURE__ */ o.createElement(w, {
  as: "p",
  textColor: "neutral800"
}, t)), l && /* @__PURE__ */ o.createElement(as, {
  paddingBottom: 5,
  variant: n
}, l)), /* @__PURE__ */ o.createElement(os, {
  onClick: a,
  "aria-label": i
}, /* @__PURE__ */ o.createElement(Fe, {
  "aria-hidden": !0
}))));
kr.defaultProps = {
  action: void 0,
  variant: "default",
  titleAs: "p"
};
kr.propTypes = {
  action: r.exports.element,
  children: r.exports.node.isRequired,
  closeLabel: r.exports.string.isRequired,
  onClose: r.exports.func.isRequired,
  title: r.exports.string.isRequired,
  titleAs: r.exports.string,
  variant: r.exports.oneOf(["danger", "success", "default"])
};
Tn.propTypes = {
  variant: kr.propTypes.variant
};
const ve = 26, hr = 64, is = g.img`
  border-radius: 50%;
  object-fit: cover;
  display: block;
  position: relative;
`, ss = g.div`
  position: relative;
  width: ${ve / 16}rem;
  height: ${ve / 16}rem;
  z-index: ${({ hovering: e }) => e ? 1 : void 0};
`, ls = g.img`
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  transform: translate(-${(hr - ve) / 2}px, -100%);
  margin-top: -${({ theme: e }) => e.spaces[1]};
`, cs = g.div`
  z-index: 1;
  border-radius: 30%;
  position: absolute;
  width: ${ve / 16}rem;
  height: ${ve / 16}rem;
  background: ${({ theme: e }) => e.colors.neutral0};
  opacity: 0.4;
`, Or = ({ src: e, alt: t, preview: n }) => {
  const [a, i] = oe(!1);
  return /* @__PURE__ */ o.createElement("span", null, n && a ? /* @__PURE__ */ o.createElement(ls, {
    "aria-hidden": !0,
    alt: "",
    width: `${hr}px`,
    height: `${hr}px`,
    src: n === !0 ? e : n
  }) : null, /* @__PURE__ */ o.createElement(ss, {
    hovering: n && a,
    onMouseEnter: () => i(!0),
    onMouseLeave: () => i(!1)
  }, n && a ? /* @__PURE__ */ o.createElement(cs, null) : null, /* @__PURE__ */ o.createElement(is, {
    src: e,
    alt: t,
    width: `${ve}px`,
    height: `${ve}px`
  })));
}, ds = g(C)`
  span {
    line-height: 0;
  }
`, wn = ({ children: e }) => /* @__PURE__ */ o.createElement(ds, {
  borderRadius: "50%",
  width: `${ve}px`,
  height: `${ve}px`,
  background: "primary600",
  justifyContent: "center"
}, /* @__PURE__ */ o.createElement(w, {
  fontWeight: "bold",
  textColor: "buttonNeutral0",
  fontSize: 0,
  textTransform: "uppercase"
}, e));
wn.propTypes = {
  children: r.exports.node.isRequired
};
Or.defaultProps = {
  preview: void 0
};
Or.propTypes = {
  alt: r.exports.string.isRequired,
  preview: r.exports.oneOfType([r.exports.string, r.exports.bool]),
  src: r.exports.string.isRequired
};
const Nu = g(C)`
  & > * + * {
    margin-left: -${ve / 2}px;
  }
`, ct = ({ active: e, textColor: t, backgroundColor: n, children: a, minWidth: i, ...s }) => /* @__PURE__ */ o.createElement(C, {
  inline: !0,
  alignItem: "center",
  justifyContent: "center",
  minWidth: i,
  padding: 1,
  background: e ? "primary100" : n,
  hasRadius: !0,
  ...s
}, /* @__PURE__ */ o.createElement(w, {
  variant: "sigma",
  textColor: e ? "primary600" : t
}, a));
ct.defaultProps = {
  active: !1,
  backgroundColor: "neutral100",
  minWidth: 5,
  textColor: "neutral600"
};
ct.propTypes = {
  active: r.exports.bool,
  backgroundColor: r.exports.string,
  children: r.exports.oneOfType([r.exports.number, r.exports.string]).isRequired,
  minWidth: r.exports.number,
  textColor: r.exports.string
};
const Nn = g.button`
  display: flex;
  cursor: pointer;
  padding: ${({ theme: e }) => e.spaces[2]};
  border-radius: ${({ theme: e }) => e.borderRadius};
  background: ${({ theme: e }) => e.colors.neutral0};
  border: 1px solid ${({ theme: e }) => e.colors.neutral200};
  svg {
    height: ${({ theme: e }) => e.spaces[3]};
    width: ${({ theme: e }) => e.spaces[3]};
  }
  svg {
    > g,
    path {
      fill: ${({ theme: e }) => e.colors.neutral0};
    }
  }
  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${st}
`, dt = o.forwardRef(({ disabled: e, children: t, ...n }, a) => /* @__PURE__ */ o.createElement(Nn, {
  ref: a,
  "aria-disabled": e,
  type: "button",
  disabled: e,
  ...n
}, t));
dt.displayName = "BaseButton";
dt.defaultProps = {
  disabled: !1
};
dt.propTypes = {
  children: r.exports.node.isRequired,
  disabled: r.exports.bool
};
const Eo = ({ size: e }) => e === "M" ? "18px" : "20px", Dn = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik04LjU1MzIzIDAuMzk2OTczQzguNjMxMzUgMC4zMTYzNTUgOC43NjA1MSAwLjMxNTgxMSA4LjgzOTMxIDAuMzk1NzY4TDkuODYyNTYgMS40MzQwN0M5LjkzODkzIDEuNTExNTcgOS45MzkzNSAxLjYzNTkgOS44NjM0OSAxLjcxMzlMNC4wNjQwMSA3LjY3NzI0QzMuOTg1OSA3Ljc1NzU1IDMuODU3MDcgNy43NTgwNSAzLjc3ODM0IDcuNjc4MzRMMC4xMzg2NiAzLjk5MzMzQzAuMDYxNzc5OCAzLjkxNTQ5IDAuMDYxNzEwMiAzLjc5MDMyIDAuMTM4NTA0IDMuNzEyNEwxLjE2MjEzIDIuNjczNzJDMS4yNDAzOCAyLjU5NDMyIDEuMzY4NDMgMi41OTQyMiAxLjQ0NjggMi42NzM0OEwzLjkyMTc0IDUuMTc2NDdMOC41NTMyMyAwLjM5Njk3M1oiCiAgICBmaWxsPSJ3aGl0ZSIKICAvPgo8L3N2Zz4=", us = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik04LjU1MzIzIDAuMzk2OTczQzguNjMxMzUgMC4zMTYzNTUgOC43NjA1MSAwLjMxNTgxMSA4LjgzOTMxIDAuMzk1NzY4TDkuODYyNTYgMS40MzQwN0M5LjkzODkzIDEuNTExNTcgOS45MzkzNSAxLjYzNTkgOS44NjM0OSAxLjcxMzlMNC4wNjQwMSA3LjY3NzI0QzMuOTg1OSA3Ljc1NzU1IDMuODU3MDcgNy43NTgwNSAzLjc3ODM0IDcuNjc4MzRMMC4xMzg2NiAzLjk5MzMzQzAuMDYxNzc5OCAzLjkxNTQ5IDAuMDYxNzEwMiAzLjc5MDMyIDAuMTM4NTA0IDMuNzEyNEwxLjE2MjEzIDIuNjczNzJDMS4yNDAzOCAyLjU5NDMyIDEuMzY4NDMgMi41OTQyMiAxLjQ0NjggMi42NzM0OEwzLjkyMTc0IDUuMTc2NDdMOC41NTMyMyAwLjM5Njk3M1oiCiAgICBmaWxsPSIjOEU4RUE5IgogIC8+Cjwvc3ZnPg==", ps = g.input`
  margin: 0;
  height: ${Eo};
  min-width: ${Eo};
  border-radius: ${({ theme: e }) => e.borderRadius};
  border: 1px solid ${({ theme: e }) => e.colors.neutral300};
  -webkit-appearance: none;
  background-color: ${({ theme: e }) => e.colors.neutral0};
  cursor: pointer;

  &:checked {
    background-color: ${({ theme: e }) => e.colors.primary600};
    border: 1px solid ${({ theme: e }) => e.colors.primary600};

    &:after {
      content: '';
      display: block;
      position: relative;
      background: url(${Dn}) no-repeat no-repeat center center;
      width: 10px;
      height: 10px;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:disabled:after {
      background: url(${us}) no-repeat no-repeat center center;
    }
  }

  &:disabled {
    background-color: ${({ theme: e }) => e.colors.neutral200};
    border: 1px solid ${({ theme: e }) => e.colors.neutral300};
  }

  &:indeterminate {
    background-color: ${({ theme: e }) => e.colors.primary600};
    border: 1px solid ${({ theme: e }) => e.colors.primary600};

    &:after {
      content: '';
      display: block;
      position: relative;
      color: white;
      height: 2px;
      width: 10px;
      background-color: ${({ theme: e }) => e.colors.neutral0};
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:disabled {
      background-color: ${({ theme: e }) => e.colors.neutral200};
      border: 1px solid ${({ theme: e }) => e.colors.neutral300};
      &:after {
        background-color: ${({ theme: e }) => e.colors.neutral500};
      }
    }
  }
`, ut = ({ indeterminate: e, size: t, name: n, value: a, onValueChange: i, ...s }) => {
  const l = Y();
  ee(() => {
    l.current && e ? l.current.indeterminate = e : l.current.indeterminate = !1;
  }, [e]);
  const c = () => {
    i(!a);
  };
  return /* @__PURE__ */ o.createElement(ps, {
    size: t,
    checked: a,
    onChange: c,
    type: "checkbox",
    ref: l,
    name: n,
    ...s
  });
};
ut.displayName = "BaseCheckbox";
ut.defaultProps = {
  indeterminate: !1,
  name: null,
  onValueChange: () => {
  },
  size: "M",
  value: !1
};
ut.propTypes = {
  indeterminate: r.exports.bool,
  name: r.exports.string,
  onValueChange: r.exports.func,
  size: r.exports.oneOf(["M", "L"]),
  value: r.exports.bool
};
const fs = g.a`
  cursor: pointer;
`, Rr = o.forwardRef(({ href: e, rel: t, target: n, disabled: a, isExternal: i, ...s }, l) => /* @__PURE__ */ o.createElement(fs, {
  ref: l,
  target: i ? "_blank" : n,
  rel: i ? t : void 0,
  href: a ? "#" : e,
  disabled: a,
  ...s
}));
Rr.displayName = "BaseLink";
Rr.defaultProps = {
  disabled: !1,
  href: void 0,
  isExternal: !1,
  rel: "noreferrer noopener",
  target: "_self"
};
Rr.propTypes = {
  disabled: r.exports.bool,
  href: r.exports.string,
  isExternal: r.exports.bool,
  rel: r.exports.string,
  target: r.exports.string
};
const Cn = Te({ onChange: () => {
}, name: "", size: "M" }), vo = ({ size: e }) => e === "M" ? "18px" : "20px", Mo = ({ size: e }) => e === "M" ? "10px" : "12px", $o = () => "3px", gs = g.input`
  margin: 0;
  padding: 0;
  background-color: ${({ theme: e }) => e.colors.neutral0};
  border: 1px solid ${({ theme: e }) => e.colors.primary600};
  border-radius: 50%;
  height: ${vo};
  width: ${vo};
  -webkit-appearance: none;

  &:after {
    border-radius: 50%;
    content: '';
    position: relative;
    z-index: 1;
    display: block;
    height: ${Mo};
    width: ${Mo};
    left: ${$o};
    top: ${$o};
  }

  &:checked:after {
    background: ${({ theme: e }) => e.colors.primary600};
  }

  &:disabled {
    border: 1px solid ${({ theme: e }) => e.colors.carbon300};
    background: ${({ theme: e }) => e.colors.neutral200};
  }
`, qt = o.forwardRef(({ value: e, disabled: t, ...n }, a) => {
  const { onChange: i, selected: s, name: l, size: c } = we(Cn), p = s === e;
  return /* @__PURE__ */ o.createElement(gs, {
    ref: a,
    type: "radio",
    name: l,
    value: e,
    tabIndex: p ? 0 : -1,
    "aria-checked": p,
    checked: p,
    disabled: t,
    size: c,
    onChange: i,
    ...n
  });
});
qt.displayName = "Radio";
qt.defaultProps = {
  disabled: !1
};
qt.propTypes = {
  disabled: r.exports.bool,
  value: r.exports.string.isRequired
};
const ms = (e, t) => {
  const n = e.querySelectorAll(t);
  n && n.length > 0 && n.item(0).setAttribute("tabindex", "0");
}, In = ({ children: e, labelledBy: t, onChange: n, value: a, size: i, name: s, ...l }) => {
  const c = Y(null);
  return Se(() => {
    a || ms(c.current, `[name="${s}"]`);
  }, [a]), /* @__PURE__ */ o.createElement(Cn.Provider, {
    value: { onChange: n, selected: a, name: s, size: i }
  }, /* @__PURE__ */ o.createElement("div", {
    ref: c,
    role: "radiogroup",
    "aria-labelledby": t,
    ...l
  }, e));
};
In.defaultProps = {
  value: "",
  size: "M"
};
In.propTypes = {
  children: r.exports.node.isRequired,
  labelledBy: r.exports.string.isRequired,
  name: r.exports.string.isRequired,
  onChange: r.exports.func.isRequired,
  size: r.exports.oneOf(["M", "L"]),
  value: r.exports.string
};
const de = g.div`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`, bs = g(C)`
  svg {
    height: ${10 / 16}rem;
    width: ${10 / 16}rem;
    path {
      fill: ${({ theme: e }) => e.colors.neutral500};
    }
  }
  :last-of-type ${y} {
    display: none;
  }
  :last-of-type ${w} {
    color: ${({ theme: e }) => e.colors.neutral800};
    font-weight: ${({ theme: e }) => e.fontWeights.bold};
  }
`, Ar = ({ children: e }) => /* @__PURE__ */ o.createElement(bs, {
  inline: !0,
  as: "li"
}, /* @__PURE__ */ o.createElement(w, {
  variant: "pi",
  textColor: "neutral600"
}, e), /* @__PURE__ */ o.createElement(y, {
  "aria-hidden": !0,
  paddingLeft: 3,
  paddingRight: 3
}, /* @__PURE__ */ o.createElement(Pt, null)));
Ar.displayName = "Crumb";
Ar.propTypes = {
  children: r.exports.node.isRequired
};
const To = r.exports.shape({ type: r.exports.oneOf([Ar]) }), kn = ({ children: e, label: t, ...n }) => /* @__PURE__ */ o.createElement(C, {
  ...n
}, /* @__PURE__ */ o.createElement(de, null, t), /* @__PURE__ */ o.createElement("ol", {
  "aria-hidden": !0
}, e));
kn.displayName = "Breadcrumbs";
kn.propTypes = {
  children: r.exports.oneOfType([r.exports.arrayOf(To), To]).isRequired,
  label: r.exports.string.isRequired
};
const On = "success-light", Rn = "danger-light", zr = "default", pt = "tertiary", ft = "secondary", An = "danger", zn = "success", Sr = "ghost", Bt = [On, Rn], Lr = [zr, pt, ft, An, zn, Sr, ...Bt], Sn = ["S", "L"], he = (e) => Bt.includes(e) ? e.substring(0, e.lastIndexOf("-")) : e === pt ? "neutral" : [zr, ft].includes(e) || !Lr.includes(e) ? "primary" : e, Dt = ({ theme: e }) => `
    border: 1px solid ${e.colors.neutral200};
    background: ${e.colors.neutral150};
    ${w} {
      color: ${e.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${e.colors.neutral600};
      }
    }
  `, Ln = ({ theme: e, variant: t }) => [...Bt, ft].includes(t) ? `
      background-color: ${e.colors.neutral0};
    ` : t === pt ? `
      background-color: ${e.colors.neutral100};
    ` : t === Sr ? `
      background-color: ${e.colors.neutral100};
    ` : t === zr ? `
      border: 1px solid ${e.colors.buttonPrimary500};
      background: ${e.colors.buttonPrimary500};
    ` : `
    border: 1px solid ${e.colors[`${he(t)}500`]};
    background: ${e.colors[`${he(t)}500`]};
  `, jn = ({ theme: e, variant: t }) => [...Bt, ft].includes(t) ? `
      background-color: ${e.colors.neutral0};
      border: 1px solid ${e.colors[`${he(t)}600`]};
      ${w} {
        color: ${e.colors[`${he(t)}600`]};
      }
      svg {
        > g, path {
          fill: ${e.colors[`${he(t)}600`]};
        }
      }
    ` : t === pt ? `
      background-color: ${e.colors.neutral150};
    ` : `
    border: 1px solid ${e.colors[`${he(t)}600`]};
    background: ${e.colors[`${he(t)}600`]};
  `, Pn = ({ theme: e, variant: t }) => {
  switch (t) {
    case Rn:
    case On:
    case ft:
      return `
          border: 1px solid ${e.colors[`${he(t)}200`]};
          background: ${e.colors[`${he(t)}100`]};
          ${w} {
            color: ${e.colors[`${he(t)}700`]};
          }
          svg {
            > g, path {
              fill: ${e.colors[`${he(t)}700`]};
            }
          }
        `;
    case pt:
      return `
          border: 1px solid ${e.colors.neutral200};
          background: ${e.colors.neutral0};
          ${w} {
            color: ${e.colors.neutral800};
          }
          svg {
            > g, path {
              fill: ${e.colors.neutral800};
            }
          }
        `;
    case Sr:
      return `
        border: 1px solid transparent;
        background: transparent;

        ${w} {
          color: ${e.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${e.colors.neutral500};
          }
        }
      `;
    case zn:
    case An:
      return `
          border: 1px solid ${e.colors[`${he(t)}600`]};
          background: ${e.colors[`${he(t)}600`]};
          ${w} {
            color: ${e.colors.neutral0};
          }
        `;
    default:
      return `
          svg {
            > g, path {
              fill: ${e.colors.buttonNeutral0};
            }
          }
        `;
  }
}, hs = wr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`, xs = g.div`
  animation: ${hs} 2s infinite linear;
  will-change: transform;
`, ys = g(y)`
  height: 100%;
`, Es = g(dt)`
  align-items: center;
  padding: ${({ theme: e, size: t }) => `${t === "S" ? e.spaces[2] : "10px"} ${e.spaces[4]}`};
  background: ${({ theme: e }) => e.colors.buttonPrimary600};
  border: 1px solid ${({ theme: e }) => e.colors.buttonPrimary600};
  ${y} {
    display: flex;
    align-items: center;
  }
  ${w} {
    color: ${({ theme: e }) => e.colors.buttonNeutral0};
  }
  &[aria-disabled='true'] {
    ${Dt}
    &:active {
      ${Dt}
    }
  }
  &:hover {
    ${Ln}
  }
  &:active {
    ${jn}
  }
  ${Pn}
  ${({ fullWidth: e }) => e && `
    display: inline-flex;
    justify-content: center;
    width: 100%;
  `}
`, gt = o.forwardRef(
  ({ variant: e, startIcon: t, endIcon: n, disabled: a, children: i, onClick: s, size: l, loading: c, fullWidth: p, ...d }, f) => {
    const u = a || c, m = (h) => {
      !u && s && s(h);
    };
    return /* @__PURE__ */ o.createElement(Es, {
      ref: f,
      "aria-disabled": u,
      disabled: u,
      size: l,
      variant: e,
      onClick: m,
      fullWidth: p,
      ...d
    }, (t || c) && /* @__PURE__ */ o.createElement(ys, {
      "aria-hidden": !0,
      paddingRight: 2
    }, c ? /* @__PURE__ */ o.createElement(xs, null, /* @__PURE__ */ o.createElement(sn, null)) : t), l === "S" ? /* @__PURE__ */ o.createElement(w, {
      variant: "pi",
      fontWeight: "bold"
    }, i) : /* @__PURE__ */ o.createElement(w, {
      fontWeight: "bold"
    }, i), n && /* @__PURE__ */ o.createElement(y, {
      "aria-hidden": !0,
      paddingLeft: 2
    }, n));
  }
);
gt.displayName = "Button";
gt.defaultProps = {
  disabled: !1,
  endIcon: void 0,
  fullWidth: !1,
  loading: !1,
  onClick: void 0,
  size: "S",
  startIcon: void 0,
  variant: "default"
};
gt.propTypes = {
  children: r.exports.node.isRequired,
  disabled: r.exports.bool,
  endIcon: r.exports.element,
  fullWidth: r.exports.bool,
  loading: r.exports.bool,
  onClick: r.exports.func,
  size: r.exports.oneOf(Sn),
  startIcon: r.exports.element,
  variant: r.exports.oneOf(Lr)
};
const qn = Te(), Bn = () => we(qn), Wn = ({ id: e, ...t }) => {
  const n = se("card", e);
  return /* @__PURE__ */ o.createElement(qn.Provider, {
    value: { id: n }
  }, /* @__PURE__ */ o.createElement(y, {
    id: e,
    tabIndex: 0,
    hasRadius: !0,
    background: "neutral0",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "neutral150",
    shadow: "tableShadow",
    as: "article",
    "aria-labelledby": `${n}-title`,
    ...t
  }));
};
Wn.defaultProps = {
  id: void 0
};
Wn.propTypes = {
  id: r.exports.string
};
const vs = g(ne).attrs({
  horizontal: !0,
  spacing: 2
})`
  position: absolute;
  top: ${({ theme: e }) => e.spaces[3]};
  right: ${({ position: e, theme: t }) => e === "end" ? t.spaces[3] : void 0};
  left: ${({ position: e, theme: t }) => e === "start" ? t.spaces[3] : void 0};
`, Ms = g.img`
  // inline flows is based on typography and displays an extra white space below the image
  // switch to block is required in order to make the img stick the bottom of the container
  // addition infos: https://stackoverflow.com/questions/5804256/image-inside-div-has-extra-space-below-the-image
  margin: 0;
  padding: 0;
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`, $s = {
  S: 88,
  M: 164
}, Ts = g.div`
  display: flex;
  justify-content: center;
  height: ${({ size: e }) => $s[e] / 16}rem;
  width: 100%;
  background: repeating-conic-gradient(${({ theme: e }) => e.colors.neutral100} 0% 25%, transparent 0% 50%) 50% / 20px
    20px;
  border-top-left-radius: ${({ theme: e }) => e.borderRadius};
  border-top-right-radius: ${({ theme: e }) => e.borderRadius};
`, Un = ({ size: e, children: t, ...n }) => /* @__PURE__ */ o.createElement(Ts, {
  size: e
}, t ? /* @__PURE__ */ o.createElement(C, null, t) : /* @__PURE__ */ o.createElement(Ms, {
  ...n,
  "aria-hidden": !0
}));
Un.defaultProps = {
  children: void 0,
  size: "M"
};
Un.propTypes = {
  children: r.exports.node,
  size: r.exports.oneOf(["S", "M"])
};
const ws = g.div`
  margin-left: auto;
  flex-shrink: 0;
`, Ns = g(ct)`
  margin-left: ${({ theme: e }) => e.spaces[1]};
`, Du = (e) => /* @__PURE__ */ o.createElement(ws, null, /* @__PURE__ */ o.createElement(Ns, {
  ...e
})), Cu = (e) => /* @__PURE__ */ o.createElement(y, {
  paddingLeft: 3,
  paddingRight: 3,
  paddingTop: 2,
  paddingBottom: 2
}, /* @__PURE__ */ o.createElement(C, {
  ...e,
  alignItems: "flex-start"
})), Iu = (e) => {
  const { id: t } = Bn();
  return /* @__PURE__ */ o.createElement(vs, {
    position: "start"
  }, /* @__PURE__ */ o.createElement(ut, {
    "aria-labelledby": `${t}-title`,
    ...e
  }));
}, Ds = g(y)`
  word-break: break-all;
`, Cs = ({ children: e, ...t }) => /* @__PURE__ */ o.createElement(Ds, {
  ...t
}, e);
Cs.propTypes = {
  children: r.exports.node.isRequired
};
const Is = g(C)`
  position: relative;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.neutral150};
`, ku = (e) => /* @__PURE__ */ o.createElement(Is, {
  justifyContent: "center",
  ...e
}), ks = g(y)`
  position: absolute;
  bottom: ${({ theme: e }) => e.spaces[1]};
  right: ${({ theme: e }) => e.spaces[1]};
`, Os = ({ children: e, ...t }) => /* @__PURE__ */ o.createElement(ks, {
  padding: 1,
  background: "neutral800",
  color: "neutral0",
  as: "time",
  hasRadius: !0,
  ...t
}, /* @__PURE__ */ o.createElement(w, {
  variant: "pi",
  textColor: "neutral0"
}, e));
Os.propTypes = {
  children: r.exports.node.isRequired
};
const Ou = (e) => {
  const { id: t } = Bn();
  return /* @__PURE__ */ o.createElement(w, {
    variant: "pi",
    id: `${t}-title`,
    textColor: "neutral800",
    fontWeight: "bold",
    as: "div",
    ...e
  });
}, Ru = (e) => /* @__PURE__ */ o.createElement(w, {
  variant: "pi",
  ...e,
  textColor: "neutral600",
  as: "div"
}), Wt = ({ children: e }) => {
  const t = Y(null), [n, a] = oe(!1);
  return Se(() => (t.current = document.createElement("div"), t.current.setAttribute("data-react-portal", "true"), document.body.appendChild(t.current), a(!0), () => {
    var i;
    (i = t.current) == null || i.remove();
  }), []), !n || !t.current ? null : gi(e, t.current);
}, Rs = (e) => {
  const [t, n] = oe(!1), a = Y(), i = () => {
    a.current && clearTimeout(a.current);
  };
  return ee(() => () => {
    i();
  }, []), { visible: t, onFocus: () => {
    n(!0);
  }, onBlur: () => {
    n(!1);
  }, onMouseEnter: () => {
    a.current = setTimeout(() => {
      n(!0);
    }, e);
  }, onMouseLeave: () => {
    i(), n(!1);
  } };
}, ze = 8, As = (e, t) => {
  const n = (e.width - t.width) / 2, a = t.left - n, i = t.top + t.height + ze + window.pageYOffset;
  return {
    left: a,
    top: i
  };
}, zs = (e, t) => {
  const n = (e.height - t.height) / 2, a = t.left + t.width + ze, i = t.top - n + window.pageYOffset;
  return { left: a, top: i };
}, Ss = (e, t) => {
  const n = (e.height - t.height) / 2, a = t.left - e.width - ze, i = t.top - n + window.pageYOffset;
  return { left: a, top: i };
}, Ls = (e, t) => {
  const n = (e.width - t.width) / 2;
  let a = t.left - n, i = t.top - e.height - ze + window.pageYOffset;
  const s = window.innerWidth - t.right;
  return t.left + e.width - s > window.innerWidth ? (a = t.left - e.width - ze, i = t.top + window.scrollY - t.height / 2) : a < 0 ? (a = t.width + t.left + ze, i = t.top + window.scrollY - e.height / 2 + ze) : i < 0 && a > 0 && (i = t.top + t.height + ze), {
    left: a,
    top: i
  };
}, js = (e, t, n) => {
  const a = e.getBoundingClientRect(), i = t.getBoundingClientRect();
  return n === "bottom" ? As(a, i) : n === "right" ? zs(a, i) : n === "left" ? Ss(a, i) : Ls(a, i);
}, Ps = (e, t) => {
  const n = Y(null), a = Y(null);
  return Se(() => {
    if (e) {
      const i = n.current, s = a.current, l = js(i, s, t);
      i.style.left = `${l.left}px`, i.style.top = `${l.top}px`;
    }
  }, [e]), { tooltipWrapperRef: n, toggleSourceRef: a };
}, qs = g(y)`
  position: absolute;
  /* z-index exist because of its position inside Modals */
  z-index: 4;
  display: ${({ visible: e }) => e ? "revert" : "none"};
`, mt = ({ children: e, label: t, description: n, delay: a, position: i, id: s, ...l }) => {
  const c = se("tooltip", s), p = se("description"), { visible: d, ...f } = Rs(a), { tooltipWrapperRef: u, toggleSourceRef: m } = Ps(d, i), h = o.cloneElement(e, {
    tabIndex: 0,
    "aria-labelledby": t ? c : void 0,
    "aria-describedby": n ? c : void 0,
    ...f
  });
  return /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement(Wt, null, /* @__PURE__ */ o.createElement(qs, {
    id: c,
    background: "neutral900",
    hasRadius: !0,
    padding: 2,
    role: "tooltip",
    ref: u,
    visible: d,
    ...l
  }, d && /* @__PURE__ */ o.createElement(de, {
    id: p
  }, n), /* @__PURE__ */ o.createElement(w, {
    as: "p",
    variant: "pi",
    fontWeight: "bold",
    textColor: "neutral0"
  }, t || n))), /* @__PURE__ */ o.createElement("span", {
    ref: m
  }, h));
};
mt.defaultProps = {
  delay: 500,
  id: void 0,
  position: "top",
  label: void 0,
  description: void 0
};
mt.propTypes = {
  children: r.exports.node.isRequired,
  delay: r.exports.number,
  description: r.exports.string,
  id: r.exports.string,
  label: r.exports.string,
  position: r.exports.oneOf(["top", "left", "bottom", "right"])
};
const Bs = g(y)`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas: 'startAction slides endAction';
`, Ws = g(y)`
  grid-area: slides;
`, wo = g.button`
  grid-area: ${({ area: e }) => e};

  &:focus svg path,
  &:hover svg path {
    fill: ${({ theme: e }) => e.colors.neutral900};
  }
`, jr = ({
  actions: e,
  children: t,
  label: n,
  nextLabel: a,
  onNext: i,
  onPrevious: s,
  previousLabel: l,
  secondaryLabel: c,
  selectedSlide: p,
  ...d
}) => {
  const f = Y(null), u = Y(null), m = ce.toArray(t).map(
    (x, v) => ye(x, { selected: v === p })
  ), h = (x) => {
    switch (x.key) {
      case S.RIGHT: {
        x.preventDefault(), u.current.focus(), i();
        break;
      }
      case S.LEFT: {
        x.preventDefault(), f.current.focus(), s();
        break;
      }
    }
  }, b = m.length > 1;
  return /* @__PURE__ */ o.createElement(y, {
    ...d,
    onKeyDown: h
  }, /* @__PURE__ */ o.createElement(y, {
    padding: 2,
    borderColor: "neutral200",
    hasRadius: !0,
    background: "neutral100"
  }, /* @__PURE__ */ o.createElement(Bs, {
    as: "section",
    "aria-roledescription": "carousel",
    "aria-label": n,
    position: "relative"
  }, b && /* @__PURE__ */ o.createElement(wo, {
    onClick: s,
    area: "startAction",
    ref: f,
    "aria-label": l,
    type: "button"
  }, /* @__PURE__ */ o.createElement(Ie, {
    as: Nr,
    "aria-hidden": !0,
    width: "6px",
    height: "10px",
    color: "neutral600"
  })), b && /* @__PURE__ */ o.createElement(wo, {
    onClick: i,
    area: "endAction",
    ref: u,
    "aria-label": a,
    type: "button"
  }, /* @__PURE__ */ o.createElement(Ie, {
    as: Pt,
    "aria-hidden": !0,
    width: "6px",
    height: "10px",
    color: "neutral600"
  })), /* @__PURE__ */ o.createElement(Ws, {
    "aria-live": "polite",
    paddingLeft: 2,
    paddingRight: 2,
    width: "100%"
  }, m), e), c && /* @__PURE__ */ o.createElement(y, {
    paddingTop: 2,
    paddingLeft: 4,
    paddingRight: 4
  }, /* @__PURE__ */ o.createElement(mt, {
    label: c
  }, /* @__PURE__ */ o.createElement(C, {
    justifyContent: "center"
  }, /* @__PURE__ */ o.createElement(w, {
    variant: "pi",
    textColor: "neutral600",
    ellipsis: !0
  }, c))))));
};
jr.defaultProps = {
  actions: void 0,
  error: void 0,
  hint: void 0,
  required: !1,
  secondaryLabel: void 0
};
jr.propTypes = {
  actions: r.exports.node,
  children: r.exports.node.isRequired,
  error: r.exports.string,
  hint: r.exports.oneOfType([r.exports.string, r.exports.node, r.exports.arrayOf(r.exports.node)]),
  label: r.exports.string.isRequired,
  nextLabel: r.exports.string.isRequired,
  onNext: r.exports.func.isRequired,
  onPrevious: r.exports.func.isRequired,
  previousLabel: r.exports.string.isRequired,
  required: r.exports.bool,
  secondaryLabel: r.exports.string,
  selectedSlide: r.exports.number.isRequired
};
const Yn = Te({ error: void 0, hint: void 0, name: "", id: "" }), et = () => we(Yn), Ee = ({ children: e, name: t, error: n, hint: a, id: i, ...s }) => {
  const l = se("field", i);
  return /* @__PURE__ */ o.createElement("div", {
    ...s
  }, /* @__PURE__ */ o.createElement(Yn.Provider, {
    value: { name: t, id: l, error: n, hint: a }
  }, e));
};
Ee.defaultProps = {
  error: void 0,
  hint: void 0,
  id: void 0,
  name: void 0
};
Ee.propTypes = {
  children: r.exports.node.isRequired,
  error: r.exports.string,
  hint: r.exports.oneOfType([r.exports.string, r.exports.node, r.exports.arrayOf(r.exports.node)]),
  id: r.exports.oneOfType([r.exports.string, r.exports.number]),
  name: r.exports.string
};
const Us = g(w)`
  line-height: 0;
`, Ys = g(C)`
  line-height: 0;

  svg path {
    fill: ${({ theme: e }) => e.colors.neutral500};
  }
`, Ne = ({ children: e, required: t, action: n, ...a }) => {
  const { id: i } = et();
  return /* @__PURE__ */ o.createElement(w, {
    variant: "pi",
    textColor: "neutral800",
    htmlFor: i,
    fontWeight: "bold",
    as: "label",
    required: t,
    ...a
  }, /* @__PURE__ */ o.createElement(C, {
    alignItems: "center"
  }, e, t && /* @__PURE__ */ o.createElement(Us, {
    textColor: "danger600"
  }, "*"), n && /* @__PURE__ */ o.createElement(Ys, {
    marginLeft: 1
  }, n)));
};
Ne.defaultProps = {
  required: !1,
  action: void 0
};
Ne.propTypes = {
  action: r.exports.element,
  children: r.exports.node.isRequired,
  required: r.exports.bool
};
const De = {
  input: {
    S: `${32 / 16}rem`,
    M: `${40 / 16}rem`
  },
  accordions: {
    S: `${48 / 16}rem`,
    M: `${88 / 16}rem`
  }
}, No = {
  S: 6.5,
  M: 10.5
}, Qs = g.input`
  border: none;
  border-radius: ${({ theme: e }) => e.borderRadius};
  padding-bottom: ${({ size: e }) => `${No[e] / 16}rem`};
  padding-left: ${({ theme: e, hasLeftAction: t }) => t ? 0 : e.spaces[4]};
  padding-right: ${({ theme: e, hasRightAction: t }) => t ? 0 : e.spaces[4]};
  padding-top: ${({ size: e }) => `${No[e] / 16}rem`};
  cursor: ${(e) => e["aria-disabled"] ? "not-allowed" : void 0};

  color: ${({ theme: e }) => e.colors.neutral800};
  font-weight: 400;
  // TODO: Make sure to use the theme when it's ready
  font-size: ${14 / 16}rem;
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({ theme: e }) => e.colors.neutral500};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }
`, Ct = g(C)`
  border: 1px solid ${({ theme: e, hasError: t }) => t ? e.colors.danger600 : e.colors.neutral200};
  border-radius: ${({ theme: e }) => e.borderRadius};
  background: ${({ theme: e }) => e.colors.neutral0};
  ${Je()}

  ${({ theme: e, disabled: t }) => t ? `
    color: ${e.colors.neutral600};
    background: ${e.colors.neutral150};
  
  ` : void 0}
`, tt = Pe(({ endAction: e, startAction: t, disabled: n, onChange: a, size: i, ...s }, l) => {
  const { id: c, error: p, hint: d, name: f } = et();
  let u;
  p ? u = `${c}-error` : d && (u = `${c}-hint`);
  const m = Boolean(p), h = (b) => {
    n || a(b);
  };
  return /* @__PURE__ */ o.createElement(Ct, {
    size: i,
    justifyContent: "space-between",
    hasError: m,
    disabled: n
  }, t && /* @__PURE__ */ o.createElement(y, {
    paddingLeft: 3,
    paddingRight: 2
  }, t), /* @__PURE__ */ o.createElement(Qs, {
    id: c,
    name: f,
    ref: l,
    "aria-describedby": u,
    "aria-invalid": m,
    "aria-disabled": n,
    hasLeftAction: Boolean(t),
    hasRightAction: Boolean(e),
    onChange: h,
    size: i,
    ...s
  }), e && /* @__PURE__ */ o.createElement(y, {
    paddingLeft: 2,
    paddingRight: 3
  }, e));
});
tt.displayName = "FieldInput";
tt.defaultProps = {
  disabled: !1,
  endAction: void 0,
  size: "M",
  startAction: void 0,
  onChange: () => {
  }
};
tt.propTypes = {
  disabled: r.exports.bool,
  endAction: r.exports.element,
  onChange: r.exports.func,
  size: r.exports.oneOf(Object.keys(De.input)),
  startAction: r.exports.element
};
const qe = () => {
  const { id: e, hint: t, error: n } = et();
  return !t || n ? null : /* @__PURE__ */ o.createElement(w, {
    variant: "pi",
    as: "p",
    id: `${e}-hint`,
    textColor: "neutral600"
  }, t);
}, Be = () => {
  const { id: e, error: t } = et();
  return t ? /* @__PURE__ */ o.createElement(w, {
    variant: "pi",
    as: "p",
    id: `${e}-error`,
    textColor: "danger600",
    "data-strapi-field-error": !0
  }, t) : null;
}, Fs = g.button`
  border: none;
  background: transparent;
  // TODO: Make sure to use the theme when it's ready
  font-size: 1.6rem;
  width: auto;
  padding: 0;
  display: flex;
  align-items: center;
`, Qn = ({ label: e, children: t, ...n }) => /* @__PURE__ */ o.createElement(Fs, {
  "aria-label": e,
  type: "button",
  ...n
}, t);
Qn.propTypes = {
  children: r.exports.node.isRequired,
  label: r.exports.string.isRequired
};
const Fn = ({
  actions: e,
  children: t,
  error: n,
  hint: a,
  label: i,
  labelAction: s,
  nextLabel: l,
  onNext: c,
  onPrevious: p,
  previousLabel: d,
  required: f,
  secondaryLabel: u,
  selectedSlide: m,
  id: h,
  ...b
}) => {
  const x = se("carouselinput", h);
  return /* @__PURE__ */ o.createElement(Ee, {
    hint: a,
    error: n,
    id: x
  }, /* @__PURE__ */ o.createElement(ne, {
    spacing: 1
  }, i && /* @__PURE__ */ o.createElement(Ne, {
    required: f,
    action: s
  }, i), /* @__PURE__ */ o.createElement(jr, {
    actions: e,
    label: i,
    nextLabel: l,
    onNext: c,
    onPrevious: p,
    previousLabel: d,
    secondaryLabel: u,
    selectedSlide: m,
    id: x,
    ...b
  }, t), /* @__PURE__ */ o.createElement(qe, null), /* @__PURE__ */ o.createElement(Be, null)));
};
Fn.defaultProps = {
  actions: void 0,
  error: void 0,
  hint: void 0,
  id: void 0,
  required: !1,
  secondaryLabel: void 0
};
Fn.propTypes = {
  actions: r.exports.node,
  children: r.exports.node.isRequired,
  error: r.exports.string,
  hint: r.exports.oneOfType([r.exports.string, r.exports.node, r.exports.arrayOf(r.exports.node)]),
  id: r.exports.string,
  label: r.exports.string.isRequired,
  labelAction: r.exports.element,
  nextLabel: r.exports.string.isRequired,
  onNext: r.exports.func.isRequired,
  onPrevious: r.exports.func.isRequired,
  previousLabel: r.exports.string.isRequired,
  required: r.exports.bool,
  secondaryLabel: r.exports.string,
  selectedSlide: r.exports.number.isRequired
};
const Au = (e) => /* @__PURE__ */ o.createElement(ne, {
  justifyContent: "center",
  horizontal: !0,
  spacing: 1,
  position: "absolute",
  width: "100%",
  bottom: 1,
  ...e
}), zu = (e) => /* @__PURE__ */ o.createElement(y, {
  as: "img",
  height: "100%",
  ...e
}), _s = g(C)`
  display: ${({ selected: e }) => e ? "flex" : "none"};
`, _n = ({ label: e, children: t, selected: n, ...a }) => /* @__PURE__ */ o.createElement(_s, {
  selected: n,
  role: "group",
  "aria-roledescription": "slide",
  "aria-label": e,
  justifyContent: "center",
  height: "124px",
  ...a
}, t);
_n.defaultProps = {
  selected: !1
};
_n.propTypes = {
  children: r.exports.node.isRequired,
  label: r.exports.string.isRequired,
  selected: r.exports.bool
};
const Hs = g(w)`
  display: flex;
  align-items: flex-start;
  * {
    cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
  }
`, Vs = (e) => {
  const { id: t } = et();
  return /* @__PURE__ */ o.createElement(ut, {
    id: t,
    ...e
  });
}, Hn = ({ children: e, disabled: t, id: n, hint: a, error: i, ...s }) => {
  const l = se("checkbox", n);
  let c;
  return i ? c = `${l}-error` : a && (c = `${l}-hint`), /* @__PURE__ */ o.createElement(Ee, {
    id: l,
    hint: a,
    error: i
  }, /* @__PURE__ */ o.createElement(ne, {
    spacing: 1
  }, /* @__PURE__ */ o.createElement(Hs, {
    as: "label",
    textColor: "neutral800",
    disabled: t
  }, /* @__PURE__ */ o.createElement(Vs, {
    disabled: t,
    "aria-describedby": c,
    ...s
  }), /* @__PURE__ */ o.createElement(y, {
    paddingLeft: 2
  }, e)), /* @__PURE__ */ o.createElement(qe, null), /* @__PURE__ */ o.createElement(Be, null)));
};
Hn.defaultProps = {
  disabled: !1,
  id: void 0,
  error: void 0,
  hint: void 0
};
Hn.propTypes = {
  children: r.exports.node.isRequired,
  disabled: r.exports.bool,
  error: r.exports.string,
  hint: r.exports.oneOfType([r.exports.string, r.exports.node, r.exports.arrayOf(r.exports.node)]),
  id: r.exports.oneOfType([r.exports.string, r.exports.number])
};
function Do(e) {
  return typeof e == "object" && e != null && e.nodeType === 1;
}
function Co(e, t) {
  return (!t || e !== "hidden") && e !== "visible" && e !== "clip";
}
function cr(e, t) {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    var n = getComputedStyle(e, null);
    return Co(n.overflowY, t) || Co(n.overflowX, t) || function(a) {
      var i = function(s) {
        if (!s.ownerDocument || !s.ownerDocument.defaultView)
          return null;
        try {
          return s.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      }(a);
      return !!i && (i.clientHeight < a.scrollHeight || i.clientWidth < a.scrollWidth);
    }(e);
  }
  return !1;
}
function Tt(e, t, n, a, i, s, l, c) {
  return s < e && l > t || s > e && l < t ? 0 : s <= e && c <= n || l >= t && c >= n ? s - e - a : l > t && c < n || s < e && c > n ? l - t + i : 0;
}
function Vn(e, t) {
  var n = window, a = t.scrollMode, i = t.block, s = t.inline, l = t.boundary, c = t.skipOverflowHiddenElements, p = typeof l == "function" ? l : function(le) {
    return le !== l;
  };
  if (!Do(e))
    throw new TypeError("Invalid target");
  for (var d = document.scrollingElement || document.documentElement, f = [], u = e; Do(u) && p(u); ) {
    if ((u = u.parentElement) === d) {
      f.push(u);
      break;
    }
    u != null && u === document.body && cr(u) && !cr(document.documentElement) || u != null && cr(u, c) && f.push(u);
  }
  for (var m = n.visualViewport ? n.visualViewport.width : innerWidth, h = n.visualViewport ? n.visualViewport.height : innerHeight, b = window.scrollX || pageXOffset, x = window.scrollY || pageYOffset, v = e.getBoundingClientRect(), T = v.height, z = v.width, O = v.top, $ = v.right, E = v.bottom, Q = v.left, N = i === "start" || i === "nearest" ? O : i === "end" ? E : O + T / 2, I = s === "center" ? Q + z / 2 : s === "end" ? $ : Q, P = [], G = 0; G < f.length; G++) {
    var W = f[G], K = W.getBoundingClientRect(), _ = K.height, re = K.width, U = K.top, ae = K.right, pe = K.bottom, fe = K.left;
    if (a === "if-needed" && O >= 0 && Q >= 0 && E <= h && $ <= m && O >= U && E <= pe && Q >= fe && $ <= ae)
      return P;
    var M = getComputedStyle(W), k = parseInt(M.borderLeftWidth, 10), D = parseInt(M.borderTopWidth, 10), j = parseInt(M.borderRightWidth, 10), A = parseInt(M.borderBottomWidth, 10), q = 0, L = 0, B = "offsetWidth" in W ? W.offsetWidth - W.clientWidth - k - j : 0, F = "offsetHeight" in W ? W.offsetHeight - W.clientHeight - D - A : 0;
    if (d === W)
      q = i === "start" ? N : i === "end" ? N - h : i === "nearest" ? Tt(x, x + h, h, D, A, x + N, x + N + T, T) : N - h / 2, L = s === "start" ? I : s === "center" ? I - m / 2 : s === "end" ? I - m : Tt(b, b + m, m, k, j, b + I, b + I + z, z), q = Math.max(0, q + x), L = Math.max(0, L + b);
    else {
      q = i === "start" ? N - U - D : i === "end" ? N - pe + A + F : i === "nearest" ? Tt(U, pe, _, D, A + F, N, N + T, T) : N - (U + _ / 2) + F / 2, L = s === "start" ? I - fe - k : s === "center" ? I - (fe + re / 2) + B / 2 : s === "end" ? I - ae + j + B : Tt(fe, ae, re, k, j + B, I, I + z, z);
      var H = W.scrollLeft, V = W.scrollTop;
      N += V - (q = Math.max(0, Math.min(V + q, W.scrollHeight - _ + F))), I += H - (L = Math.max(0, Math.min(H + L, W.scrollWidth - re + B)));
    }
    P.push({ el: W, top: q, left: L });
  }
  return P;
}
const ue = {
  Close: "Close",
  CloseSelect: "CloseSelect",
  First: "First",
  Last: "Last",
  Next: "Next",
  Open: "Open",
  PageDown: "PageDown",
  PageUp: "PageUp",
  Previous: "Previous",
  Select: "Select",
  Space: "Space",
  Type: "Type"
};
function Io(e = [], t, n = []) {
  const a = String(t != null ? t : "").toLowerCase();
  return a ? e.filter((i) => i.props.children.toString().toLowerCase().includes(a) && n.indexOf(i) < 0) : e;
}
function Gs(e, t) {
  if (!t && e === S.DOWN)
    return ue.Open;
  if (e === S.DOWN)
    return ue.Next;
  if (e === S.UP)
    return ue.Previous;
  if (e === S.HOME)
    return ue.First;
  if (e === S.END)
    return ue.Last;
  if (e === S.ESCAPE)
    return ue.Close;
  if (e === S.ENTER)
    return ue.CloseSelect;
  if (e === S.BACKSPACE || e === S.CLEAR || e.length === 1)
    return ue.Type;
}
function dr(e, t, n) {
  switch (n) {
    case ue.First:
      return 0;
    case ue.Last:
      return t;
    case ue.Previous:
      return Math.max(0, e - 1);
    case ue.Next:
      return Math.min(t, e + 1);
    default:
      return e;
  }
}
function Gn(e) {
  Vn(e, {
    scrollMode: "if-needed",
    block: "nearest",
    inline: "nearest"
  }).forEach(({ el: n, top: a, left: i }) => {
    n.scrollTop = a, n.scrollLeft = i;
  });
}
const Ks = g(C)`
  position: relative;
  border: 1px solid ${({ theme: e, hasError: t }) => t ? e.colors.danger600 : e.colors.neutral200};
  padding-right: ${({ theme: e }) => e.spaces[3]};
  border-radius: ${({ theme: e }) => e.borderRadius};
  background: ${({ theme: e }) => e.colors.neutral0};
  overflow: hidden;
  min-height: ${En("input")};

  ${({ theme: e, disabled: t }) => t ? `
    color: ${e.colors.neutral600};
    background: ${e.colors.neutral150};
  ` : void 0}

  ${Je()}
`, Pr = g(y)`
  background: transparent;
  border: none;
  position: relative;
  z-index: 1;

  svg {
    height: ${11 / 16}rem;
    width: ${11 / 16}rem;
  }

  svg path {
    fill: ${({ theme: e }) => e.colors.neutral600};
  }
`, Kn = g(Pr)`
  display: flex;
  background: none;
  border: none;
  cursor: ${({ disabled: e }) => e ? "not-allowed" : void 0};

  svg {
    width: ${6 / 16}rem;
  }
`;
function bt(e) {
  return e.split("-")[0];
}
function qr(e) {
  return e.split("-")[1];
}
function Ut(e) {
  return ["top", "bottom"].includes(bt(e)) ? "x" : "y";
}
function Zn(e) {
  return e === "y" ? "height" : "width";
}
function ko(e, t, n) {
  let {
    reference: a,
    floating: i
  } = e;
  const s = a.x + a.width / 2 - i.width / 2, l = a.y + a.height / 2 - i.height / 2, c = Ut(t), p = Zn(c), d = a[p] / 2 - i[p] / 2, f = bt(t), u = c === "x";
  let m;
  switch (f) {
    case "top":
      m = {
        x: s,
        y: a.y - i.height
      };
      break;
    case "bottom":
      m = {
        x: s,
        y: a.y + a.height
      };
      break;
    case "right":
      m = {
        x: a.x + a.width,
        y: l
      };
      break;
    case "left":
      m = {
        x: a.x - i.width,
        y: l
      };
      break;
    default:
      m = {
        x: a.x,
        y: a.y
      };
  }
  switch (qr(t)) {
    case "start":
      m[c] -= d * (n && u ? -1 : 1);
      break;
    case "end":
      m[c] += d * (n && u ? -1 : 1);
      break;
  }
  return m;
}
const Zs = async (e, t, n) => {
  const {
    placement: a = "bottom",
    strategy: i = "absolute",
    middleware: s = [],
    platform: l
  } = n, c = await (l.isRTL == null ? void 0 : l.isRTL(t));
  if (process.env.NODE_ENV !== "production" && (l == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), s.filter((b) => {
    let {
      name: x
    } = b;
    return x === "autoPlacement" || x === "flip";
  }).length > 1))
    throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement`", "middleware detected. This will lead to an infinite loop. Ensure only", "one of either has been passed to the `middleware` array."].join(" "));
  let p = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: d,
    y: f
  } = ko(p, a, c), u = a, m = {}, h = 0;
  for (let b = 0; b < s.length; b++) {
    const {
      name: x,
      fn: v
    } = s[b], {
      x: T,
      y: z,
      data: O,
      reset: $
    } = await v({
      x: d,
      y: f,
      initialPlacement: a,
      placement: u,
      strategy: i,
      middlewareData: m,
      rects: p,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (d = T != null ? T : d, f = z != null ? z : f, m = {
      ...m,
      [x]: {
        ...m[x],
        ...O
      }
    }, process.env.NODE_ENV !== "production" && h > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), $ && h <= 50) {
      h++, typeof $ == "object" && ($.placement && (u = $.placement), $.rects && (p = $.rects === !0 ? await l.getElementRects({
        reference: e,
        floating: t,
        strategy: i
      }) : $.rects), {
        x: d,
        y: f
      } = ko(p, u, c)), b = -1;
      continue;
    }
  }
  return {
    x: d,
    y: f,
    placement: u,
    strategy: i,
    middlewareData: m
  };
};
function Xs(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Js(e) {
  return typeof e != "number" ? Xs(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function It(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
async function Xn(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: a,
    y: i,
    platform: s,
    rects: l,
    elements: c,
    strategy: p
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: u = "floating",
    altBoundary: m = !1,
    padding: h = 0
  } = t, b = Js(h), v = c[m ? u === "floating" ? "reference" : "floating" : u], T = It(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(v))) == null || n ? v : v.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(c.floating)),
    boundary: d,
    rootBoundary: f,
    strategy: p
  })), z = It(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: u === "floating" ? {
      ...l.floating,
      x: a,
      y: i
    } : l.reference,
    offsetParent: await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c.floating)),
    strategy: p
  }) : l[u]);
  return {
    top: T.top - z.top + b.top,
    bottom: z.bottom - T.bottom + b.bottom,
    left: T.left - z.left + b.left,
    right: z.right - T.right + b.right
  };
}
const el = Math.min, tl = Math.max;
function Oo(e, t, n) {
  return tl(e, el(t, n));
}
const rl = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function kt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => rl[t]);
}
function ol(e, t, n) {
  n === void 0 && (n = !1);
  const a = qr(e), i = Ut(e), s = Zn(i);
  let l = i === "x" ? a === (n ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (l = kt(l)), {
    main: l,
    cross: kt(l)
  };
}
const nl = {
  start: "end",
  end: "start"
};
function Ro(e) {
  return e.replace(/start|end/g, (t) => nl[t]);
}
function al(e) {
  const t = kt(e);
  return [Ro(e), t, Ro(t)];
}
const il = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n;
      const {
        placement: a,
        middlewareData: i,
        rects: s,
        initialPlacement: l,
        platform: c,
        elements: p
      } = t, {
        mainAxis: d = !0,
        crossAxis: f = !0,
        fallbackPlacements: u,
        fallbackStrategy: m = "bestFit",
        flipAlignment: h = !0,
        ...b
      } = e, x = bt(a), T = u || (x === l || !h ? [kt(l)] : al(l)), z = [l, ...T], O = await Xn(t, b), $ = [];
      let E = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (d && $.push(O[x]), f) {
        const {
          main: P,
          cross: G
        } = ol(a, s, await (c.isRTL == null ? void 0 : c.isRTL(p.floating)));
        $.push(O[P], O[G]);
      }
      if (E = [...E, {
        placement: a,
        overflows: $
      }], !$.every((P) => P <= 0)) {
        var Q, N;
        const P = ((Q = (N = i.flip) == null ? void 0 : N.index) != null ? Q : 0) + 1, G = z[P];
        if (G)
          return {
            data: {
              index: P,
              overflows: E
            },
            reset: {
              placement: G
            }
          };
        let W = "bottom";
        switch (m) {
          case "bestFit": {
            var I;
            const K = (I = E.map((_) => [_, _.overflows.filter((re) => re > 0).reduce((re, U) => re + U, 0)]).sort((_, re) => _[1] - re[1])[0]) == null ? void 0 : I[0].placement;
            K && (W = K);
            break;
          }
          case "initialPlacement":
            W = l;
            break;
        }
        if (a !== W)
          return {
            reset: {
              placement: W
            }
          };
      }
      return {};
    }
  };
};
async function sl(e, t) {
  const {
    placement: n,
    platform: a,
    elements: i
  } = e, s = await (a.isRTL == null ? void 0 : a.isRTL(i.floating)), l = bt(n), c = qr(n), p = Ut(n) === "x", d = ["left", "top"].includes(l) ? -1 : 1, f = s && p ? -1 : 1, u = typeof t == "function" ? t(e) : t;
  let {
    mainAxis: m,
    crossAxis: h,
    alignmentAxis: b
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...u
  };
  return c && typeof b == "number" && (h = c === "end" ? b * -1 : b), p ? {
    x: h * f,
    y: m * d
  } : {
    x: m * d,
    y: h * f
  };
}
const ll = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: a
      } = t, i = await sl(t, e);
      return {
        x: n + i.x,
        y: a + i.y,
        data: i
      };
    }
  };
};
function cl(e) {
  return e === "x" ? "y" : "x";
}
const dl = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: a,
        placement: i
      } = t, {
        mainAxis: s = !0,
        crossAxis: l = !1,
        limiter: c = {
          fn: (v) => {
            let {
              x: T,
              y: z
            } = v;
            return {
              x: T,
              y: z
            };
          }
        },
        ...p
      } = e, d = {
        x: n,
        y: a
      }, f = await Xn(t, p), u = Ut(bt(i)), m = cl(u);
      let h = d[u], b = d[m];
      if (s) {
        const v = u === "y" ? "top" : "left", T = u === "y" ? "bottom" : "right", z = h + f[v], O = h - f[T];
        h = Oo(z, h, O);
      }
      if (l) {
        const v = m === "y" ? "top" : "left", T = m === "y" ? "bottom" : "right", z = b + f[v], O = b - f[T];
        b = Oo(z, b, O);
      }
      const x = c.fn({
        ...t,
        [u]: h,
        [m]: b
      });
      return {
        ...x,
        data: {
          x: x.x - n,
          y: x.y - a
        }
      };
    }
  };
};
function Jn(e) {
  return e && e.document && e.location && e.alert && e.setInterval;
}
function Re(e) {
  if (e == null)
    return window;
  if (!Jn(e)) {
    const t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Me(e) {
  return Re(e).getComputedStyle(e);
}
function ke(e) {
  return Jn(e) ? "" : e ? (e.nodeName || "").toLowerCase() : "";
}
function ea() {
  const e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map((t) => t.brand + "/" + t.version).join(" ") : navigator.userAgent;
}
function $e(e) {
  return e instanceof Re(e).HTMLElement;
}
function je(e) {
  return e instanceof Re(e).Element;
}
function ul(e) {
  return e instanceof Re(e).Node;
}
function Ke(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  const t = Re(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Yt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: a
  } = Me(e);
  return /auto|scroll|overlay|hidden/.test(t + a + n);
}
function pl(e) {
  return ["table", "td", "th"].includes(ke(e));
}
function ta(e) {
  const t = /firefox/i.test(ea()), n = Me(e);
  return n.transform !== "none" || n.perspective !== "none" || n.contain === "paint" || ["transform", "perspective"].includes(n.willChange) || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1);
}
function ra() {
  return !/^((?!chrome|android).)*safari/i.test(ea());
}
const Ao = Math.min, nt = Math.max, Ot = Math.round;
function Oe(e, t, n) {
  var a, i, s, l;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const c = e.getBoundingClientRect();
  let p = 1, d = 1;
  t && $e(e) && (p = e.offsetWidth > 0 && Ot(c.width) / e.offsetWidth || 1, d = e.offsetHeight > 0 && Ot(c.height) / e.offsetHeight || 1);
  const f = je(e) ? Re(e) : window, u = !ra() && n, m = (c.left + (u && (a = (i = f.visualViewport) == null ? void 0 : i.offsetLeft) != null ? a : 0)) / p, h = (c.top + (u && (s = (l = f.visualViewport) == null ? void 0 : l.offsetTop) != null ? s : 0)) / d, b = c.width / p, x = c.height / d;
  return {
    width: b,
    height: x,
    top: h,
    right: m + b,
    bottom: h + x,
    left: m,
    x: m,
    y: h
  };
}
function We(e) {
  return ((ul(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Qt(e) {
  return je(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function oa(e) {
  return Oe(We(e)).left + Qt(e).scrollLeft;
}
function fl(e) {
  const t = Oe(e);
  return Ot(t.width) !== e.offsetWidth || Ot(t.height) !== e.offsetHeight;
}
function gl(e, t, n) {
  const a = $e(t), i = We(t), s = Oe(
    e,
    a && fl(t),
    n === "fixed"
  );
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (a || !a && n !== "fixed")
    if ((ke(t) !== "body" || Yt(i)) && (l = Qt(t)), $e(t)) {
      const p = Oe(t, !0);
      c.x = p.x + t.clientLeft, c.y = p.y + t.clientTop;
    } else
      i && (c.x = oa(i));
  return {
    x: s.left + l.scrollLeft - c.x,
    y: s.top + l.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function na(e) {
  return ke(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ke(e) ? e.host : null) || We(e);
}
function zo(e) {
  return !$e(e) || Me(e).position === "fixed" ? null : ml(e);
}
function ml(e) {
  let {
    offsetParent: t
  } = e, n = e, a = !1;
  for (; n && n !== t; ) {
    const {
      assignedSlot: i
    } = n;
    if (i) {
      let s = i.offsetParent;
      if (Me(i).display === "contents") {
        const l = i.hasAttribute("style"), c = i.style.display;
        i.style.display = Me(n).display, s = i.offsetParent, i.style.display = c, l || i.removeAttribute("style");
      }
      n = i, t !== s && (t = s, a = !0);
    } else if (Ke(n) && n.host && a)
      break;
    n = Ke(n) && n.host || n.parentNode;
  }
  return t;
}
function bl(e) {
  let t = na(e);
  for (Ke(t) && (t = t.host); $e(t) && !["html", "body"].includes(ke(t)); ) {
    if (ta(t))
      return t;
    {
      const n = t.parentNode;
      t = Ke(n) ? n.host : n;
    }
  }
  return null;
}
function xr(e) {
  const t = Re(e);
  let n = zo(e);
  for (; n && pl(n) && Me(n).position === "static"; )
    n = zo(n);
  return n && (ke(n) === "html" || ke(n) === "body" && Me(n).position === "static" && !ta(n)) ? t : n || bl(e) || t;
}
function So(e) {
  if ($e(e))
    return {
      width: e.offsetWidth,
      height: e.offsetHeight
    };
  const t = Oe(e);
  return {
    width: t.width,
    height: t.height
  };
}
function hl(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: a
  } = e;
  const i = $e(n), s = We(n);
  if (n === s)
    return t;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if ((i || !i && a !== "fixed") && ((ke(n) !== "body" || Yt(s)) && (l = Qt(n)), $e(n))) {
    const p = Oe(n, !0);
    c.x = p.x + n.clientLeft, c.y = p.y + n.clientTop;
  }
  return {
    ...t,
    x: t.x - l.scrollLeft + c.x,
    y: t.y - l.scrollTop + c.y
  };
}
function xl(e, t) {
  const n = Re(e), a = We(e), i = n.visualViewport;
  let s = a.clientWidth, l = a.clientHeight, c = 0, p = 0;
  if (i) {
    s = i.width, l = i.height;
    const d = ra();
    (d || !d && t === "fixed") && (c = i.offsetLeft, p = i.offsetTop);
  }
  return {
    width: s,
    height: l,
    x: c,
    y: p
  };
}
function yl(e) {
  var t;
  const n = We(e), a = Qt(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, s = nt(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = nt(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let c = -a.scrollLeft + oa(e);
  const p = -a.scrollTop;
  return Me(i || n).direction === "rtl" && (c += nt(n.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: l,
    x: c,
    y: p
  };
}
function aa(e) {
  const t = na(e);
  return ["html", "body", "#document"].includes(ke(t)) ? e.ownerDocument.body : $e(t) && Yt(t) ? t : aa(t);
}
function Rt(e, t) {
  var n;
  t === void 0 && (t = []);
  const a = aa(e), i = a === ((n = e.ownerDocument) == null ? void 0 : n.body), s = Re(a), l = i ? [s].concat(s.visualViewport || [], Yt(a) ? a : []) : a, c = t.concat(l);
  return i ? c : c.concat(Rt(l));
}
function El(e, t) {
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ke(n)) {
    let a = t;
    do {
      if (a && e === a)
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function vl(e, t) {
  const n = Oe(e, !1, t === "fixed"), a = n.top + e.clientTop, i = n.left + e.clientLeft;
  return {
    top: a,
    left: i,
    x: i,
    y: a,
    right: i + e.clientWidth,
    bottom: a + e.clientHeight,
    width: e.clientWidth,
    height: e.clientHeight
  };
}
function Lo(e, t, n) {
  return t === "viewport" ? It(xl(e, n)) : je(t) ? vl(t, n) : It(yl(We(e)));
}
function Ml(e) {
  const t = Rt(e), a = ["absolute", "fixed"].includes(Me(e).position) && $e(e) ? xr(e) : e;
  return je(a) ? t.filter((i) => je(i) && El(i, a) && ke(i) !== "body") : [];
}
function $l(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: a,
    strategy: i
  } = e;
  const l = [...n === "clippingAncestors" ? Ml(t) : [].concat(n), a], c = l[0], p = l.reduce((d, f) => {
    const u = Lo(t, f, i);
    return d.top = nt(u.top, d.top), d.right = Ao(u.right, d.right), d.bottom = Ao(u.bottom, d.bottom), d.left = nt(u.left, d.left), d;
  }, Lo(t, c, i));
  return {
    width: p.right - p.left,
    height: p.bottom - p.top,
    x: p.left,
    y: p.top
  };
}
const Tl = {
  getClippingRect: $l,
  convertOffsetParentRelativeRectToViewportRelativeRect: hl,
  isElement: je,
  getDimensions: So,
  getOffsetParent: xr,
  getDocumentElement: We,
  getElementRects: (e) => {
    let {
      reference: t,
      floating: n,
      strategy: a
    } = e;
    return {
      reference: gl(t, xr(n), a),
      floating: {
        ...So(n),
        x: 0,
        y: 0
      }
    };
  },
  getClientRects: (e) => Array.from(e.getClientRects()),
  isRTL: (e) => Me(e).direction === "rtl"
};
function wl(e, t, n, a) {
  a === void 0 && (a = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: s = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = a, p = i && !c, d = s && !c, f = p || d ? [...je(e) ? Rt(e) : [], ...Rt(t)] : [];
  f.forEach((x) => {
    p && x.addEventListener("scroll", n, {
      passive: !0
    }), d && x.addEventListener("resize", n);
  });
  let u = null;
  if (l) {
    let x = !0;
    u = new ResizeObserver(() => {
      x || n(), x = !1;
    }), je(e) && !c && u.observe(e), u.observe(t);
  }
  let m, h = c ? Oe(e) : null;
  c && b();
  function b() {
    const x = Oe(e);
    h && (x.x !== h.x || x.y !== h.y || x.width !== h.width || x.height !== h.height) && n(), h = x, m = requestAnimationFrame(b);
  }
  return n(), () => {
    var x;
    f.forEach((v) => {
      p && v.removeEventListener("scroll", n), d && v.removeEventListener("resize", n);
    }), (x = u) == null || x.disconnect(), u = null, c && cancelAnimationFrame(m);
  };
}
const Nl = (e, t, n) => Zs(e, t, {
  platform: Tl,
  ...n
});
var yr = typeof document < "u" ? Se : ee;
function At(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, a, i;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length)
        return !1;
      for (a = n; a-- !== 0; )
        if (!At(e[a], t[a]))
          return !1;
      return !0;
    }
    if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length)
      return !1;
    for (a = n; a-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, i[a]))
        return !1;
    for (a = n; a-- !== 0; ) {
      const s = i[a];
      if (!(s === "_owner" && e.$$typeof) && !At(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Dl(e) {
  const t = te.useRef(e);
  return yr(() => {
    t.current = e;
  }), t;
}
function Cl(e) {
  let {
    middleware: t,
    placement: n = "bottom",
    strategy: a = "absolute",
    whileElementsMounted: i
  } = e === void 0 ? {} : e;
  const [s, l] = te.useState({
    x: null,
    y: null,
    strategy: a,
    placement: n,
    middlewareData: {}
  }), [c, p] = te.useState(t);
  At(c == null ? void 0 : c.map(($) => {
    let {
      name: E,
      options: Q
    } = $;
    return {
      name: E,
      options: Q
    };
  }), t == null ? void 0 : t.map(($) => {
    let {
      name: E,
      options: Q
    } = $;
    return {
      name: E,
      options: Q
    };
  })) || p(t);
  const d = te.useRef(null), f = te.useRef(null), u = te.useRef(null), m = te.useRef(s), h = Dl(i), b = te.useCallback(() => {
    !d.current || !f.current || Nl(d.current, f.current, {
      middleware: c,
      placement: n,
      strategy: a
    }).then(($) => {
      x.current && !At(m.current, $) && (m.current = $, fi.flushSync(() => {
        l($);
      }));
    });
  }, [c, n, a]);
  yr(() => {
    x.current && b();
  }, [b]);
  const x = te.useRef(!1);
  yr(() => (x.current = !0, () => {
    x.current = !1;
  }), []);
  const v = te.useCallback(() => {
    if (typeof u.current == "function" && (u.current(), u.current = null), d.current && f.current)
      if (h.current) {
        const $ = h.current(d.current, f.current, b);
        u.current = $;
      } else
        b();
  }, [b, h]), T = te.useCallback(($) => {
    d.current = $, v();
  }, [v]), z = te.useCallback(($) => {
    f.current = $, v();
  }, [v]), O = te.useMemo(() => ({
    reference: d,
    floating: f
  }), []);
  return te.useMemo(() => ({
    ...s,
    update: b,
    refs: O,
    reference: T,
    floating: z
  }), [s, b, O, T, z]);
}
const Il = (e, t, { selectorToWatch: n, skipWhen: a = !1 }) => {
  ee(() => {
    if (a)
      return;
    const i = {
      root: e.current,
      rootMargin: "0px"
    }, s = (p) => {
      p.forEach((d) => {
        d.isIntersecting && e.current.scrollHeight > e.current.clientHeight && t(d);
      });
    }, l = new IntersectionObserver(s, i), c = e.current.querySelector(n);
    return l.observe(c), () => {
      l.disconnect();
    };
  }, [a, t, n]);
}, ia = [
  "top",
  "top-start",
  "top-end",
  "right",
  "right-start",
  "right-end",
  "bottom",
  "bottom-start",
  "bottom-end",
  "left",
  "left-start",
  "left-end"
], kl = g(y)`
  box-shadow: ${({ theme: e }) => e.shadows.filterShadow};
  z-index: 4;
  border: 1px solid ${({ theme: e }) => e.colors.neutral150};
  background: ${({ theme: e }) => e.colors.neutral0};
`, Ol = g(y)`
  // 16 is base base size, 3 is the factor to get closer to 40px and 5 is the number of elements visible in the list
  max-height: ${3 * 5}rem;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme: e }) => e.colors.neutral0};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme: e }) => e.colors.neutral150};
    border-radius: ${({ theme: e }) => e.borderRadius};
    margin-right: 10px;
  }
`, Br = ({
  source: e,
  children: t,
  spacing: n,
  fullWidth: a,
  placement: i,
  onReachEnd: s,
  intersectionId: l,
  centered: c,
  ...p
}) => {
  const d = te.useRef(null), [f, u] = te.useState(void 0), { x: m, y: h, reference: b, floating: x, strategy: v } = Cl({
    strategy: "fixed",
    placement: c ? "bottom" : i,
    middleware: [
      ll({
        mainAxis: n
      }),
      dl(),
      il()
    ],
    whileElementsMounted: wl
  });
  return te.useLayoutEffect(() => {
    b(e.current);
  }, [e]), te.useLayoutEffect(() => {
    a && u(e.current.offsetWidth);
  }, [a]), Il(d, s, {
    selectorToWatch: `#${l}`,
    skipWhen: !l || !s
  }), /* @__PURE__ */ te.createElement(kl, {
    ref: x,
    style: {
      left: m,
      top: h,
      position: v,
      width: f || void 0
    },
    hasRadius: !0,
    background: "neutral0",
    padding: 1
  }, /* @__PURE__ */ te.createElement(Ol, {
    ref: d,
    ...p
  }, t, l && s && /* @__PURE__ */ te.createElement(y, {
    id: l,
    width: "100%",
    height: "1px"
  })));
}, rt = (e) => /* @__PURE__ */ te.createElement(Wt, null, /* @__PURE__ */ te.createElement(Br, {
  ...e
})), sa = {
  fullWidth: !1,
  intersectionId: void 0,
  onReachEnd: void 0,
  centered: !1,
  placement: "bottom-start"
}, la = {
  centered: r.exports.bool,
  children: r.exports.node.isRequired,
  fullWidth: r.exports.bool,
  intersectionId: r.exports.string,
  onReachEnd: r.exports.func,
  placement: r.exports.oneOf(ia),
  source: r.exports.shape({
    current: (typeof Element > "u" ? r.exports.any : r.exports.instanceOf(Element)).isRequired
  }).isRequired,
  spacing: r.exports.number
};
Br.propTypes = la;
Br.defaultProps = sa;
rt.propTypes = la;
rt.defaultProps = sa;
const Rl = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjMiIGhlaWdodD0iNjMiIHZpZXdCb3g9IjAgMCA2MyA2MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQyLjU1NjMgMTEuOTgxNkMzOS40ODQgMTAuMzA3MSAzNS44NTc1IDkuMjkwOTcgMzIuMzM1NCA5LjEzNTIxQzI4LjY0NDMgOC45Mjg4OCAyNC44Mjk1IDkuNzIzMTggMjEuMzMzNiAxMS40MTI5QzIwLjkxMjMgMTEuNTkwMSAyMC41Mzc2IDExLjgxMDEgMjAuMTcyMiAxMi4wMjQ5TDIwLjAxMDggMTIuMTE3OUMxOS44Nzc0IDEyLjE5NTEgMTkuNzQ0MSAxMi4yNzI0IDE5LjYwOCAxMi4zNTM2QzE5LjMyNTMgMTIuNTE0NiAxOS4wNDkyIDEyLjY3NDQgMTguNzU0NCAxMi44NzkyQzE4LjU0NjMgMTMuMDMyOSAxOC4zMzk1IDEzLjE3NTkgMTguMTMwMSAxMy4zMjNDMTcuNTY1OCAxMy43MjA4IDE2Ljk4NjggMTQuMTMxNyAxNi40OTgzIDE0LjU5NzlDMTQuODQ3NiAxNS45NTI0IDEzLjU1NzEgMTcuNjA3NSAxMi42MDcxIDE4LjkyMTRDMTAuNDM2NSAyMi4xNTY2IDkuMDg2MjIgMjUuOTU2NyA4LjgwNzAyIDI5LjYxNDNMOC43NzY0IDMwLjE1ODhDOC43MzMyOCAzMC45MTk2IDguNjg0NzYgMzEuNzA1NyA4Ljc1MzUzIDMyLjQ1NTVDOC43NjY0OCAzMi42MDg0IDguNzY2MSAzMi43NjM4IDguNzc1MDYgMzIuOTE0QzguNzg4OTUgMzMuMjI5IDguODAxNTIgMzMuNTM3MyA4Ljg0NiAzMy44NjcyTDkuMDczOTYgMzUuNDIyMUM5LjA5NzU2IDM1LjU3NjQgOS4xMTk4IDM1Ljc0MTMgOS4xNjMzIDM1LjkyNjNMOS42NTkxOSAzNy45MjcyTDEwLjEzOCAzOS4yODIzQzEwLjI3MjkgMzkuNjY3MyAxMC40MTU4IDQwLjA3NTEgMTAuNiA0MC40M0MxMi4wMjkyIDQzLjYzNyAxNC4xNDI1IDQ2LjQ1NzggMTYuNzA2MyA0OC41ODVDMTkuMDUwOCA1MC41Mjk2IDIxLjgyNCA1Mi4wMDIzIDI0Ljc0OTEgNTIuODQ1MkwyNi4yMzcxIDUzLjIzNzZDMjYuMzc4MSA1My4yNjkzIDI2LjQ5MjYgNTMuMjg4OSAyNi42MDMxIDUzLjMwNThMMjYuNzc3NSA1My4zMzExQzI3LjAwNTIgNTMuMzYzNiAyNy4yMTk1IDUzLjM5ODYgMjcuNDQ0NSA1My40MzVDMjcuODU5OCA1My41MDc2IDI4LjI2NzIgNTMuNTc0OCAyOC43MDc5IDUzLjYxODNMMzAuNTY0MSA1My43MjI5QzMwLjk1MTYgNTMuNzI0OSAzMS4zMzUyIDUzLjcwNjggMzEuNzA4MSA1My42ODc0QzMxLjkwMzkgNTMuNjgxIDMyLjA5ODQgNTMuNjY4MSAzMi4zMjg4IDUzLjY2MkMzNC41MjUzIDUzLjQ3NzIgMzYuNTEwNiA1My4wNjM0IDM4LjA1MTYgNTIuNDY1MkMzOC4xNzY5IDUyLjQxNzEgMzguMzAwOCA1Mi4zNzk2IDM4LjQyMzQgNTIuMzM1NUMzOC42NzI3IDUyLjI0OTkgMzguOTI1OSA1Mi4xNjcgMzkuMTQzMiA1Mi4wNTk5TDQwLjg1OTEgNTEuMjYyNkw0Mi41NzAyIDUwLjI2NkM0Mi45MDA5IDUwLjA2ODIgNDMuMDIwNSA0OS42NDE0IDQyLjgyODIgNDkuMjk4NEM0Mi42MzIgNDguOTUyNiA0Mi4yMDM0IDQ4LjgzMDggNDEuODYzNCA0OS4wMTY2TDQwLjE3OTIgNDkuOTIxOEwzOC40OTk1IDUwLjYyMjRDMzguMzE2OSA1MC42OTUzIDM4LjEyMSA1MC43NTM0IDM3LjkyMjQgNTAuODE1NUMzNy43ODM4IDUwLjg0ODkgMzcuNjUxOCA1MC44OTgzIDM3LjUwMTIgNTAuOTQwOEMzNi4wNzExIDUxLjQzNSAzNC4yNDQ1IDUxLjc0MjUgMzIuMjQ0IDUxLjgzNDZDMzIuMDQ0MiA1MS44MzgzIDMxLjg0NzEgNTEuODM3OSAzMS42NTQgNTEuODQwM0MzMS4zMDUxIDUxLjg0MTQgMzAuOTYwMiA1MS44NDUxIDMwLjYzOTIgNTEuODMwNUwyOC45MTc3IDUxLjY3MjVDMjguNTQ3NiA1MS42MTkgMjguMTY5NSA1MS41NDI3IDI3Ljc4NDggNTEuNDY3OEMyNy41NjM5IDUxLjQxNjcgMjcuMzM3NiA1MS4zNzM3IDI3LjEyOTkgNTEuMzM3NEwyNi45NTI5IDUxLjI5ODdDMjYuODcwNCA1MS4yODM0IDI2Ljc3NzIgNTEuMjY2NyAyNi43MzMzIDUxLjI1NDNMMjUuMzQ2NiA1MC44MzIyQzIyLjc2NTEgNDkuOTc4OSAyMC4zMyA0OC41NzI5IDE4LjI5NDIgNDYuNzU1N0MxNi4xMDU2IDQ0Ljc5NTEgMTQuMzMzOSA0Mi4yMzM1IDEzLjE3NDIgMzkuMzU4MkMxMi4wMjc2IDM2LjYwMTMgMTEuNTk4OCAzMy4yNzkyIDExLjk3MTYgMzAuMDA3NkMxMi4zMTQ1IDI3LjAyMTMgMTMuMzk0OCAyNC4xNjM1IDE1LjE4NTggMjEuNTA4M0MxNS4zMDM0IDIxLjMzMzkgMTUuNDIxIDIxLjE1OTYgMTUuNTIxMiAyMS4wMTk2QzE2LjQzMDkgMTkuODY4OCAxNy41NDA4IDE4LjU1ODkgMTguOTQ4MyAxNy40OTZDMTkuMzM2NyAxNy4xNTI1IDE5Ljc4NjIgMTYuODU2IDIwLjI2MTEgMTYuNTQ3OEMyMC40ODc4IDE2LjQwMDkgMjAuNzA3OSAxNi4yNTUzIDIwLjg5MDcgMTYuMTMwNkMyMS4wOTc0IDE2LjAwNDggMjEuMzE4OCAxNS44ODMxIDIxLjUzNDggMTUuNzY5NEMyMS42NzYxIDE1LjY5NzUgMjEuODE2MiAxNS42MTkgMjEuOTM4OCAxNS41NTc2TDIyLjEwMDIgMTUuNDY0NkMyMi40MDAyIDE1LjMwMzcgMjIuNjc0OSAxNS4xNTQ2IDIyLjk5MDggMTUuMDM5TDI0LjExODYgMTQuNTcxNUMyNC4zMzk5IDE0LjQ4NDQgMjQuNTcxOCAxNC40MTU5IDI0Ljc5OTcgMTQuMzQ0N0MyNC45NTMgMTQuMjk4MiAyNS4wOTgyIDE0LjI2MzUgMjUuMjYzNSAxNC4yMDc4QzI1Ljc4NiAxNC4wMTgyIDI2LjMyODMgMTMuOTExMiAyNi45MTA1IDEzLjc5NjVDMjcuMTE3IDEzLjc1NzEgMjcuMzMwMiAxMy43MTYzIDI3LjU2MDggMTMuNjU4NUMyNy43NTUzIDEzLjYxMSAyNy45NzM3IDEzLjU5NjkgMjguMjA4MiAxMy41NzYyQzI4LjM2NCAxMy41NjAzIDI4LjUxNzIgMTMuNTQ4MyAyOC42MzE4IDEzLjUzMzNDMjguNzg3NiAxMy41MTczIDI4LjkzNDIgMTMuNTA2NiAyOS4wOTI3IDEzLjQ4NjdDMjkuMzI4NSAxMy40NTU1IDI5LjU0NTYgMTMuNDM0NyAyOS43NDk0IDEzLjQzMzdDMzAuMDIzNyAxMy40NCAzMC4yOTk0IDEzLjQzNTcgMzAuNTc3NyAxMy40Mjc0QzMxLjA4MTEgMTMuNDIxIDMxLjU1NzkgMTMuNDE5NyAzMi4wMzE4IDEzLjQ5MTRDMzQuOTY2NCAxMy43MzUyIDM3LjcxNDQgMTQuNjA4NSA0MC4yMDUyIDE2LjA4NjhDNDIuMzQ4OSAxNy4zNjU1IDQ0LjI3MTYgMTkuMTUyNSA0NS43NjA3IDIxLjI2NEM0Ny4wMjU1IDIzLjA2MjggNDcuOTc1NiAyNS4wNTI4IDQ4LjQ5MjggMjcuMDM5M0M0OC41NzIgMjcuMzE3NiA0OC42Mjk5IDI3LjU5MzEgNDguNjgzOSAyNy44NjU5QzQ4LjcxNTQgMjguMDQyOCA0OC43NTYzIDI4LjIxNDUgNDguNzg5MiAyOC4zNjM2QzQ4LjgwMzcgMjguNDU0MSA0OC44MjA4IDI4LjU0MDYgNDguODQ0NSAyOC42MjU4QzQ4Ljg3NDkgMjguNzQ0MyA0OC44OTg2IDI4Ljg2NCA0OC45MTE2IDI4Ljk2NTFMNDguOTc5MyAyOS42MDQ3QzQ4Ljk5MjIgMjkuNzc0OCA0OS4wMTMyIDI5LjkzMzEgNDkuMDMwMSAzMC4wODg3QzQ5LjA2NjggMzAuMzI2OCA0OS4wODg5IDMwLjU2MDggNDkuMDk2NCAzMC43NTYxTDQ5LjEwODMgMzEuOTAwMUM0OS4xMzEyIDMyLjMzMDcgNDkuMDg5IDMyLjcxMTYgNDkuMDUyMiAzMy4wNjczQzQ5LjAzODQgMzMuMjU5OCA0OS4wMTI2IDMzLjQ0NDMgNDkuMDEyMyAzMy41ODI0QzQ4Ljk5NjEgMzMuNjkyNiA0OC45OTE4IDMzLjc5MzUgNDguOTgzNiAzMy44OTE3QzQ4Ljk3NTMgMzQuMDA3MiA0OC45NzI0IDM0LjExNDggNDguOTQxNCAzNC4yNTU0TDQ4LjU0NDkgMzYuMzA1OUM0OC4zMTM0IDM3Ljg2MjMgNDkuMzc5MyAzOS4zMzY1IDUwLjk0ODggMzkuNTgyMkM1Mi4wNDE3IDM5Ljc2MDEgNTMuMTUzNiAzOS4yODE5IDUzLjc3MTEgMzguMzY2NEM1NC4wMDYzIDM4LjAxNzYgNTQuMTYwNCAzNy42MjU3IDU0LjIyMjcgMzcuMjA2NEw1NC41MjE3IDM1LjI1NzRDNTQuNTUxNCAzNS4wNzU2IDU0LjU3MiAzNC44MyA1NC41ODQ2IDM0LjU3OTFMNTQuNjAyOCAzNC4yMzM4QzU0LjYwOTggMzQuMDU5OCA1NC42MjIzIDMzLjg3NzkgNTQuNjM0NyAzMy42Nzg4QzU0LjY3MzQgMzMuMTA1MiA1NC43MTYzIDMyLjQ0NzkgNTQuNjYxOSAzMS44MDU4TDU0LjU4NjcgMzAuNDI4OUM1NC41NjIyIDMwLjA5NTIgNTQuNTA5NyAyOS43NiA1NC40NTU5IDI5LjQxODFDNTQuNDMxIDI5LjI1NzIgNTQuNDA0OCAyOS4wODk2IDU0LjM4MjYgMjguOTA3NEw1NC4yNjg3IDI4LjEwNEM1NC4yMzMyIDI3LjkyNDQgNTQuMTgwNCAyNy43MjczIDU0LjEzMjkgMjcuNTM5Nkw1NC4wNjQzIDI3LjI0NTRDNTQuMDE5NSAyNy4wNzEgNTMuOTc3MyAyNi44OTI3IDUzLjkzMzggMjYuNzA3NkM1My44NDU1IDI2LjMzMDkgNTMuNzQ3OSAyNS45NDIyIDUzLjYxMyAyNS41NTcxQzUyLjg0IDIzLjAyOTIgNTEuNTM4MyAyMC41MTk0IDQ5LjgzMzggMTguMjc5OUM0Ny44NTQ0IDE1LjY4MiA0NS4zMzMzIDEzLjUwODcgNDIuNTU2MyAxMS45ODE2WiIgZmlsbD0iIzQ5NDVGRiIvPgo8L3N2Zz4K", Al = wr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`, zl = g.img`
  animation: ${Al} 1s infinite linear;
  will-change: transform;
  ${({ small: e, theme: t }) => e && `width: ${t.spaces[6]}; height: ${t.spaces[6]};`}
`, Ft = Pe(({ children: e, small: t, ...n }, a) => /* @__PURE__ */ o.createElement("div", {
  role: "alert",
  "aria-live": "assertive",
  ref: a,
  ...n
}, /* @__PURE__ */ o.createElement(de, null, e), /* @__PURE__ */ o.createElement(zl, {
  src: Rl,
  "aria-hidden": !0,
  small: t
})));
Ft.displayName = "Loader";
Ft.defaultProps = {
  small: !1
};
Ft.propTypes = {
  children: r.exports.node.isRequired,
  small: r.exports.bool
};
const Sl = g(C)`
  position: relative;
  border: 1px solid ${({ theme: e, hasError: t }) => t ? e.colors.danger600 : e.colors.neutral200};
  padding-right: ${({ theme: e }) => e.spaces[3]};
  padding-left: ${({ theme: e }) => e.spaces[3]};
  border-radius: ${({ theme: e }) => e.borderRadius};
  background: ${({ theme: e }) => e.colors.neutral0};

  ${({ theme: e, $disabled: t }) => t ? `
    color: ${e.colors.neutral600};
    background: ${e.colors.neutral150};
  ` : void 0}

  ${Je()}
`, Ll = g.div`
  padding: 1px 2px;
  grid-area: 1 / 1 / 2 / 3;
`, jl = g(C)`
  display: grid;
  flex: 1 1 0%;
  position: relative;
`, Pl = g.input`
  display: inline-grid;
  grid-area: 1 / 1 / 2 / 3;
  grid-template-columns: 0px min-content;
  background: transparent;
  min-height: ${40 / 16}rem;
  border: none;
  flex: 1;
  font-size: ${14 / 16}rem;
  color: ${({ theme: e }) => e.colors.neutral800};
  outline: none;
  &:focus-visible {
    outline: none;
    box-shadow: none;
    outline-offset: 0;
  }
  &[aria-disabled='true'] {
    background: inherit;
    color: inherit;
    cursor: not-allowed;
  }
`, ql = g(y)`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  ${({ isSelected: e, theme: t }) => e && `background: ${t.colors.primary100};`}

  &:hover {
    background: ${({ theme: e }) => e.colors.primary100};
  }
`, _t = Pe(({ isSelected: e, children: t, ...n }, a) => /* @__PURE__ */ o.createElement(ql, {
  hasRadius: !0,
  paddingLeft: 4,
  paddingRight: 4,
  paddingTop: 2,
  paddingBottom: 2,
  role: "option",
  background: "neutral0",
  isSelected: e,
  ref: a,
  ...n
}, /* @__PURE__ */ o.createElement(w, {
  textColor: e ? "primary600" : "neutral800",
  fontWeight: e ? "bold" : null
}, t)));
_t.defaultProps = {
  isSelected: !1
};
_t.propTypes = {
  children: r.exports.oneOfType([r.exports.string, r.exports.number]).isRequired,
  isSelected: r.exports.bool
};
_t.displayName = "ComboboxOption";
const Wr = ({ options: e, activeOptionRef: t }) => (ee(() => {
  t.current && Gn(t.current);
}, []), e);
Wr.defaultProps = {
  activeOptionRef: void 0
};
Wr.propTypes = {
  options: r.exports.array.isRequired
};
const Ht = ({
  children: e,
  clearLabel: t,
  creatable: n,
  createMessage: a,
  disabled: i,
  error: s,
  hasMoreItems: l,
  hint: c,
  label: p,
  labelAction: d,
  loading: f,
  loadingMessage: u,
  noOptionsMessage: m,
  onChange: h,
  onClear: b,
  onCreateOption: x,
  onInputChange: v,
  onLoadMore: T,
  placeholder: z,
  required: O,
  value: $,
  ...E
}) => {
  const Q = () => {
    var J;
    return (J = e.find((ie) => {
      var ge;
      return ((ge = ie.props) == null ? void 0 : ge.value.toLowerCase()) === $.toLowerCase();
    }).props) == null ? void 0 : J.children;
  }, [N, I] = oe(0), [P, G] = oe(null), [W, K] = oe(e), [_, re] = oe(!1), [U, ae] = oe(""), pe = Y(), fe = Y(!1), M = Y(), k = Y(), D = Y(), j = Y(!0), A = se("combobox"), q = `${A}-label`;
  if (!p && !E["aria-label"])
    throw new Error('The Combobox component needs a "label" or an "aria-label" props');
  ee(() => {
    K(Io(e, U));
  }, [U, e]), ee(() => {
    _ && pe.current && Gn(pe.current);
  }, [N]), Se(() => {
    if (j.current) {
      j.current = !1;
      return;
    }
  }, [$]);
  const L = _ ? `${A}-${N}` : "", B = () => {
    h(null), ae("");
  }, F = (J) => {
    v && v(J);
    const ie = M.current.value;
    K(Io(e, ie)), I(0), G(null), U !== ie && ae(ie), _ || be(!0, !1);
  }, H = (J) => {
    const { key: ie } = J, ge = n && U ? W.length : W.length - 1, _e = Gs(ie, _);
    switch ($ && !U && ie === S.BACKSPACE && B(), _e) {
      case ue.Next:
        return le(N === ge ? 0 : dr(N, ge, _e));
      case ue.Previous:
        return le(N === 0 ? ge : dr(N, ge, _e));
      case ue.Last:
      case ue.First:
        return le(N === ge ? 0 : dr(N, ge, _e));
      case ue.CloseSelect:
        J.preventDefault(), Ue(N);
        return;
      case ue.Close:
        return J.preventDefault(), be(!1);
      case ue.Open:
        return be(!0);
      default:
        return;
    }
  }, V = (J) => {
    if (J.preventDefault(), $ && !fe.current && ae(""), fe.current) {
      fe.current = !1;
      return;
    }
    be(!1, !1);
  }, le = (J) => {
    I(J);
  }, me = (J) => {
    le(J), Ue(J);
  }, R = () => {
    fe.current = !0;
  }, Ue = (J) => {
    const ie = W[J];
    if (ae(""), ie)
      return h(ie.props.value), be(!1);
    n && (x(U), be(!1));
  }, be = (J, ie = !0) => {
    re(J), ie && M.current.focus();
  }, $t = ce.toArray(W).map((J, ie) => {
    const ge = N === ie;
    return ye(J, {
      id: `${A}-${ie}`,
      "aria-selected": P === ie,
      "aria-posinset": ie + 1,
      "aria-setsize": ce.toArray(W).length,
      ref: (_e) => {
        ge && (pe.current = _e);
      },
      onClick: () => me(ie),
      onMouseDown: R,
      isSelected: ge
    });
  }), Xa = () => {
    M.current.focus(), b && b(), B();
  }, Ja = () => {
    M.current.focus(), be(!0);
  }, ei = () => {
    const J = W.findIndex((ie) => {
      var ge;
      return ((ge = ie.props) == null ? void 0 : ge.children) === U;
    });
    return U && J === -1;
  }, ti = (J) => {
    J.preventDefault(), be(J, !0);
  };
  return /* @__PURE__ */ o.createElement(Ee, {
    hint: c,
    error: s,
    id: A
  }, /* @__PURE__ */ o.createElement(de, {
    "aria-live": "polite",
    "aria-atomic": "false",
    "aria-relevant": "additions text"
  }, $), /* @__PURE__ */ o.createElement(ne, {
    spacing: p || c || s ? 1 : 0
  }, p && /* @__PURE__ */ o.createElement(Ne, {
    action: d,
    required: O,
    id: q
  }, p), /* @__PURE__ */ o.createElement(Sl, {
    ref: k,
    $disabled: i,
    hasError: s
  }, /* @__PURE__ */ o.createElement(jl, {
    wrap: "wrap"
  }, !U && $ && /* @__PURE__ */ o.createElement(Ll, {
    id: `${A}-selected-value`
  }, /* @__PURE__ */ o.createElement(w, null, Q())), /* @__PURE__ */ o.createElement(Pl, {
    "aria-activedescendant": L,
    "aria-autocomplete": "list",
    "aria-controls": `${A}-listbox`,
    "aria-disabled": i,
    "aria-expanded": _,
    "aria-haspopup": "listbox",
    "aria-labelledby": p ? q : void 0,
    id: A,
    onBlur: i ? void 0 : V,
    onClick: i ? void 0 : ti,
    onInput: i ? void 0 : F,
    onKeyDown: i ? void 0 : H,
    placeholder: $ ? "" : z,
    readOnly: i,
    ref: M,
    role: "combobox",
    autoComplete: "off",
    autoCorrect: "off",
    spellCheck: "off",
    type: "text",
    value: U
  })), /* @__PURE__ */ o.createElement(C, null, ($ || U) && /* @__PURE__ */ o.createElement(Pr, {
    id: `${A}-clear`,
    "aria-label": t,
    disabled: i,
    paddingLeft: 3,
    as: "button",
    onClick: Xa,
    type: "button"
  }, /* @__PURE__ */ o.createElement(Fe, null)), /* @__PURE__ */ o.createElement(Kn, {
    disabled: i,
    paddingLeft: 3,
    "aria-hidden": !0,
    as: "button",
    onClick: Ja,
    tabIndex: -1,
    type: "button"
  }, /* @__PURE__ */ o.createElement(Le, null)))), /* @__PURE__ */ o.createElement(qe, null), /* @__PURE__ */ o.createElement(Be, null)), _ && /* @__PURE__ */ o.createElement(rt, {
    id: `${A}-popover`,
    source: k,
    spacing: 4,
    fullWidth: !0,
    intersectionId: `${A}-listbox-popover-intersection`,
    onReachEnd: l && !f ? T : void 0
  }, /* @__PURE__ */ o.createElement("div", {
    role: "listbox",
    ref: D,
    id: `${A}-listbox`,
    "aria-labelledby": p ? q : void 0
  }, (Boolean(W.length) || n) && /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement(Wr, {
    activeOptionRef: pe,
    options: $t
  }), ei() && n && /* @__PURE__ */ o.createElement(_t, {
    isSelected: N === W.length,
    ref: (J) => {
      N === W.length && (pe.current = J);
    },
    onMouseDown: R,
    onClick: () => Ue(),
    taindex: 0
  }, a(U))), !Boolean(W.length) && !n && !f && /* @__PURE__ */ o.createElement(y, {
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 2,
    paddingBottom: 2,
    ref: pe
  }, /* @__PURE__ */ o.createElement(w, {
    textColor: "neutral800"
  }, m(U))), f && /* @__PURE__ */ o.createElement(C, {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 2,
    paddingBottom: 2
  }, /* @__PURE__ */ o.createElement(Ft, {
    small: !0
  }, u)))));
}, ca = (e) => /* @__PURE__ */ o.createElement(Ht, {
  ...e,
  creatable: !0
});
Ht.defaultProps = ca.defaultProps = {
  "aria-label": void 0,
  clearLabel: "clear",
  creatable: !1,
  createMessage: (e) => `Create "${e}"`,
  disabled: !1,
  error: void 0,
  hasMoreItems: !1,
  hint: void 0,
  label: void 0,
  loading: !1,
  loadingMessage: "Loading content...",
  noOptionsMessage: () => "No results found",
  onClear: void 0,
  onCreateOption: void 0,
  onInputChange: void 0,
  onLoadMore: void 0,
  placeholder: "Select or enter a value",
  value: void 0
};
Ht.propTypes = {
  "aria-label": r.exports.string,
  children: r.exports.oneOfType([r.exports.arrayOf(r.exports.node), r.exports.node]),
  clearLabel: r.exports.string,
  creatable: r.exports.bool,
  createMessage: r.exports.func,
  disabled: r.exports.bool,
  error: r.exports.string,
  hasMoreItems: r.exports.bool,
  hint: r.exports.oneOfType([r.exports.string, r.exports.node, r.exports.arrayOf(r.exports.node)]),
  label: r.exports.string,
  labelAction: r.exports.element,
  loading: r.exports.bool,
  loadingMessage: r.exports.string,
  noOptionsMessage: r.exports.func,
  onChange: r.exports.func.isRequired,
  onClear: r.exports.func,
  onCreateOption: r.exports.func,
  onInputChange: r.exports.func,
  onLoadMore: r.exports.func,
  placeholder: r.exports.string,
  value: r.exports.string
};
ca.propTypes = {
  ...Ht.propTypes,
  onCreateOption: r.exports.func.isRequired
};
const He = (e, t) => [
  ...e.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')
].filter((i) => i.hasAttribute("disabled") ? !1 : t ? !0 : i.getAttribute("tabindex") !== "-1"), ur = (e) => e.filter((t) => t.tagName === "INPUT" ? t.type !== "checkbox" && t.type !== "radio" : !1), ht = ({ onEscape: e, restoreFocus: t, ...n }) => {
  const a = Y(null);
  ee(() => {
    if (t) {
      const s = document.activeElement;
      return () => {
        s.focus();
      };
    }
  }, [t]), ee(() => {
    if (!a.current)
      return;
    const s = He(a.current);
    s.length > 0 ? s[0].focus() : console.warn(
      "[FocusTrap]: it seems there are no focusable elements in the focus trap tree. Make sure there s at least one."
    );
  }, []);
  const i = (s) => {
    if (s.key === S.ESCAPE)
      return e();
    if (s.key !== S.TAB)
      return;
    const l = He(a.current);
    if (l.length > 0) {
      const c = l[0], p = l[l.length - 1];
      s.shiftKey ? c === document.activeElement && (s.preventDefault(), p.focus()) : p === document.activeElement && (s.preventDefault(), c.focus());
    }
  };
  return /* @__PURE__ */ o.createElement("div", {
    ref: a,
    onKeyDown: i,
    ...n
  });
};
ht.defaultProps = {
  restoreFocus: !0
};
ht.propTypes = {
  onEscape: r.exports.func.isRequired,
  restoreFocus: r.exports.bool
};
const Bl = (e, t) => `${e}${Math.floor(t * 255).toString(16).padStart(2, 0)}`, Wl = (e) => {
  ee(() => (e && document.body.classList.add("lock-body-scroll"), () => {
    document.body.classList.remove("lock-body-scroll");
  }), [e]);
}, Ul = g.div`
  position: fixed;
  z-index: 4;
  inset: 0;
  background: ${({ theme: e }) => Bl(e.colors.neutral800, 0.2)};
  padding: 0 ${({ theme: e }) => e.spaces[8]};
`, Yl = g(y)`
  max-width: ${412 / 16}rem;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 10%;
`, Ql = g(C)`
  border-bottom: 1px solid ${({ theme: e }) => e.colors.neutral150};
`, Ur = ({ onClose: e, title: t, as: n, isOpen: a, id: i, ...s }) => {
  const l = se("dialog", i);
  if (Wl(a), !a)
    return null;
  const c = `${l}-label`;
  return /* @__PURE__ */ o.createElement(Wt, null, /* @__PURE__ */ o.createElement(Ul, null, /* @__PURE__ */ o.createElement(ht, {
    onEscape: e
  }, /* @__PURE__ */ o.createElement(Yl, {
    "aria-labelledby": c,
    "aria-modal": !0,
    background: "neutral0",
    hasRadius: !0,
    shadow: "popupShadow",
    role: "dialog"
  }, /* @__PURE__ */ o.createElement(Ql, {
    padding: 6,
    justifyContent: "center"
  }, /* @__PURE__ */ o.createElement(w, {
    variant: "beta",
    as: n || "h2",
    id: c
  }, t)), /* @__PURE__ */ o.createElement(y, {
    ...s
  })))));
};
Ur.displayName = "Dialog";
Ur.defaultProps = {
  as: "h2",
  id: void 0
};
Ur.propTypes = {
  as: r.exports.string,
  id: r.exports.oneOfType([r.exports.string, r.exports.number]),
  isOpen: r.exports.bool.isRequired,
  onClose: r.exports.func.isRequired,
  title: r.exports.string.isRequired
};
const Fl = g(y)`
  svg {
    width: ${({ theme: e }) => e.spaces[6]};
    height: ${({ theme: e }) => e.spaces[6]};

    path {
      fill: ${({ theme: e }) => e.colors.danger600};
    }
  }
`, da = ({ children: e, icon: t }) => /* @__PURE__ */ o.createElement(y, {
  paddingTop: 8,
  paddingBottom: 8,
  paddingLeft: 6,
  paddingRight: 6
}, t && /* @__PURE__ */ o.createElement(Fl, {
  paddingBottom: 2
}, /* @__PURE__ */ o.createElement(C, {
  justifyContent: "center"
}, t)), e);
da.displayName = "DialogBody";
da.propTypes = {
  children: r.exports.node.isRequired,
  icon: r.exports.node
};
const _l = g(y)`
  border-top: 1px solid ${({ theme: e }) => e.colors.neutral150};

  button {
    width: 100%;
    display: inline-flex;
    justify-content: center;
  }
`, Yr = ({ startAction: e, endAction: t }) => /* @__PURE__ */ o.createElement(_l, {
  padding: 4
}, /* @__PURE__ */ o.createElement(ne, {
  horizontal: !0,
  spacing: 2
}, e, t));
Yr.displayName = "DialogFooter";
Yr.defaultProps = {
  endAction: void 0,
  startAction: void 0
};
Yr.propTypes = {
  endAction: r.exports.node,
  startAction: r.exports.node
};
const Vt = o.forwardRef(
  ({ size: e, startAction: t, endAction: n, name: a, hint: i, error: s, label: l, labelAction: c, id: p, required: d, ...f }, u) => {
    const m = se("textinput", p), h = Y(null);
    if (!l && !f["aria-label"])
      throw new Error('The TextInput component needs a "label" or an "aria-label" props');
    return an(u, () => ({
      inputWrapperRef: h
    })), /* @__PURE__ */ o.createElement("div", {
      ref: h
    }, /* @__PURE__ */ o.createElement(Ee, {
      name: a,
      hint: i,
      error: s,
      id: m
    }, /* @__PURE__ */ o.createElement(ne, {
      spacing: 1
    }, l && /* @__PURE__ */ o.createElement(Ne, {
      required: d,
      action: c
    }, l), /* @__PURE__ */ o.createElement(tt, {
      size: e,
      ref: u,
      startAction: t,
      endAction: n,
      ...f
    }), /* @__PURE__ */ o.createElement(qe, null), /* @__PURE__ */ o.createElement(Be, null))));
  }
);
Vt.displayName = "TextInput";
Vt.defaultProps = {
  "aria-label": void 0,
  label: void 0,
  labelAction: void 0,
  error: void 0,
  hint: void 0,
  id: void 0,
  startAction: void 0,
  size: "M",
  endAction: void 0,
  required: !1
};
Vt.propTypes = {
  "aria-label": r.exports.string,
  endAction: r.exports.element,
  error: r.exports.string,
  hint: r.exports.oneOfType([r.exports.string, r.exports.node, r.exports.arrayOf(r.exports.node)]),
  id: r.exports.string,
  label: r.exports.string,
  labelAction: r.exports.element,
  name: r.exports.string.isRequired,
  required: r.exports.bool,
  size: r.exports.oneOf(Object.keys(De.input)),
  startAction: r.exports.element
};
const Hl = g(rt)`
  max-height: ${3 * 6}rem;
  overflow: hidden;
`, Vl = g.button`
  border: none;
  background: transparent;
  border-radius: ${({ theme: e }) => e.borderRadius};
  cursor: ${(e) => e["aria-disabled"] ? "not-allowed" : void 0};

  & svg path {
    fill: ${({ theme: e }) => e.colors.neutral500};
  }
`, Gl = g.div`
  ${({ bold: e, theme: t }) => e ? `& ${Ct} {
  border: 1px solid ${t.colors.primary600};
}` : void 0}
`, Kl = g(y)`
  background: transparent;
  border: none;
  position: relative;
  z-index: 1;

  svg {
    height: ${11 / 16}rem;
    width: ${11 / 16}rem;
  }

  svg path {
    fill: ${({ theme: e }) => e.colors.neutral600};
  }
`, ua = ({ theme: e }) => `
    text-align: left;
    width: 100%;
    color: ${e.colors.neutral800};
    border-radius: ${e.borderRadius};
    &:focus {
        background-color: ${e.colors.primary100};
    }
    &:not([aria-disabled]):hover {
        background-color: ${e.colors.primary100};
    }
`, Zl = g.button`
  border: none;
  padding: 0;
  background: transparent;
  cursor: pointer;
  ${ua}
`, Xl = g(Ce)`
  text-decoration: none;
  ${ua}
`, Jl = g.span`
  display: flex;
  align-items: center;
  svg {
    height: 4px;
    width: 6px;
  }
`, ec = g(gt)`
  padding: ${({ theme: e }) => `${e.spaces[1]} ${e.spaces[3]}`};
`, zt = ({ children: e, onClick: t, to: n, isFocused: a, ...i }) => {
  const s = Y();
  ee(() => {
    a && s.current && s.current.focus();
  }, [a]);
  const l = {
    tabIndex: a ? 0 : -1,
    ref: s,
    role: "menuitem",
    ...i
  }, c = (p) => {
    (p.key === S.SPACE || p.key === S.ENTER) && t();
  };
  return n ? /* @__PURE__ */ o.createElement(Xl, {
    to: n,
    ...l
  }, /* @__PURE__ */ o.createElement(y, {
    padding: 2
  }, /* @__PURE__ */ o.createElement(w, null, e))) : /* @__PURE__ */ o.createElement(Zl, {
    onKeyDown: c,
    onMouseDown: t,
    type: "button",
    ...l
  }, /* @__PURE__ */ o.createElement(y, {
    padding: 2
  }, /* @__PURE__ */ o.createElement(w, null, e)));
};
zt.defaultProps = {
  onClick: () => {
  },
  isFocused: !1,
  to: void 0
};
zt.propTypes = {
  as: r.exports.elementType,
  children: r.exports.node.isRequired,
  isFocused: r.exports.bool,
  onClick: r.exports.func,
  to: r.exports.string
};
const Ze = ({
  label: e,
  children: t,
  id: n,
  as: a,
  onOpen: i = () => {
  },
  onClose: s = () => {
  },
  size: l,
  popoverPlacement: c,
  ...p
}) => {
  const d = Y(), f = se("simplemenu", n), u = Y(!1), [m, h] = oe(!1), [b, x] = oe(0), v = ce.toArray(t), z = a || (l === "S" ? ec : gt);
  ee(() => {
    if (["string", "number"].includes(typeof e)) {
      const I = v.findIndex((P) => P.props.children === e);
      I !== -1 && x(I);
    }
  }, [e]), ee(() => {
    u != null && u.current ? m && typeof i == "function" ? i() : typeof s == "function" && s() : u.current = !0;
  }, [u, m]), ee(() => {
    o.isValidElement(e) && b == -1 && d.current.focus();
  }, [e, b]);
  const O = (I) => {
    m && (I.key === S.ESCAPE && (I.stopPropagation(), h(!1), d.current.focus()), I.key === S.DOWN && x((P) => P === v.length - 1 ? 0 : P + 1), I.key === S.UP && x((P) => P === 0 ? v.length - 1 : P - 1));
  }, $ = (I) => {
    (I.key === S.ENTER || I.key === S.SPACE) && h((P) => !P);
  }, E = (I) => {
    I.preventDefault(), I.currentTarget.contains(I.relatedTarget) || h(!1);
  }, Q = (I) => {
    I.preventDefault(), h((P) => !P);
  }, N = v.map((I, P) => /* @__PURE__ */ o.createElement(C, {
    as: "li",
    key: P,
    justifyContent: "center",
    role: "menuitem"
  }, ye(I, {
    onClick: () => {
      I.props.onClick(), h(!1), d.current.focus();
    },
    isFocused: b === P
  })));
  return /* @__PURE__ */ o.createElement("div", {
    onKeyDown: O
  }, /* @__PURE__ */ o.createElement(z, {
    label: o.isValidElement(e) ? null : e,
    "aria-haspopup": !0,
    "aria-expanded": m,
    "aria-controls": f,
    onKeyDown: $,
    onMouseDown: Q,
    ref: d,
    type: "button",
    variant: "ghost",
    endIcon: /* @__PURE__ */ o.createElement(Jl, null, /* @__PURE__ */ o.createElement(Le, {
      "aria-hidden": !0
    })),
    ...p
  }, e), m && /* @__PURE__ */ o.createElement(rt, {
    onBlur: E,
    placement: c,
    source: d,
    spacing: 4
  }, /* @__PURE__ */ o.createElement(y, {
    role: "menu",
    as: "ul",
    padding: 1,
    id: f
  }, N)));
};
Ze.defaultProps = {
  as: void 0
};
Ze.displayName = "SimpleMenu";
Ze.defaultProps = {
  popoverPlacement: "bottom-start",
  size: "M"
};
Ze.propTypes = {
  as: r.exports.any,
  children: r.exports.oneOfType([r.exports.arrayOf(r.exports.node), r.exports.node]).isRequired,
  id: r.exports.string,
  label: r.exports.oneOfType([r.exports.string, r.exports.number, r.exports.element]).isRequired,
  onClose: r.exports.func,
  onOpen: r.exports.func,
  popoverPlacement: r.exports.oneOf(ia),
  size: r.exports.oneOf(["S", "M"])
};
const pa = Te({
  rowIndex: 0,
  colIndex: 0,
  setTableValues: () => {
    throw new Error("setTableValues must be initialized via the RawTableContext.Provider");
  }
}), tc = () => we(pa), rc = (e) => {
  const t = e.querySelector('[tabindex="0"]');
  t && t.focus();
}, Gt = ({ colCount: e, rowCount: t, jumpStep: n, initialCol: a, initialRow: i, ...s }) => {
  const l = Y(null), c = Y(!1), [p, d] = oe(i), [f, u] = oe(a), m = ri(({ colIndex: b, rowIndex: x }) => {
    u(b), d(x);
  }, []);
  ee(() => {
    c.current && rc(l.current), c.current || (c.current = !0);
  }, [f, p]);
  const h = (b) => {
    switch (b.key) {
      case S.RIGHT: {
        b.preventDefault(), u((x) => x < e - 1 ? x + 1 : x);
        break;
      }
      case S.LEFT: {
        b.preventDefault(), u((x) => x > 0 ? x - 1 : x);
        break;
      }
      case S.UP: {
        b.preventDefault(), d((x) => x > 0 ? x - 1 : x);
        break;
      }
      case S.DOWN: {
        b.preventDefault(), d((x) => x < t - 1 ? x + 1 : x);
        break;
      }
      case S.HOME: {
        b.preventDefault(), b.ctrlKey && d(0), u(0);
        break;
      }
      case S.END: {
        b.preventDefault(), b.ctrlKey && d(t - 1), u(e - 1);
        break;
      }
      case S.PAGE_DOWN: {
        b.preventDefault(), d((x) => x + n < t ? x + n : t - 1);
        break;
      }
      case S.PAGE_UP: {
        b.preventDefault(), d((x) => x - n > 0 ? x - n : 0);
        break;
      }
    }
  };
  return /* @__PURE__ */ o.createElement(pa.Provider, {
    value: { rowIndex: p, colIndex: f, setTableValues: m }
  }, /* @__PURE__ */ o.createElement("table", {
    ref: l,
    "aria-rowcount": t,
    "aria-colcount": e,
    onKeyDown: h,
    ...s
  }));
};
Gt.defaultProps = {
  jumpStep: 3,
  initialCol: 0,
  initialRow: 0
};
Gt.propTypes = {
  colCount: r.exports.number.isRequired,
  initialCol: r.exports.number,
  initialRow: r.exports.number,
  jumpStep: r.exports.number,
  rowCount: r.exports.number.isRequired
};
const Kt = (e) => /* @__PURE__ */ o.createElement(xt, {
  ...e,
  as: "th"
}), xt = ({ coords: e, as: t, ...n }) => {
  const a = Y(null), { rowIndex: i, colIndex: s, setTableValues: l } = tc(), [c, p] = oe(!1), d = (u) => {
    const m = He(a.current, !0);
    if (!(m.length === 0 || m.length === 1 && ur(m).length === 0)) {
      if (m.length > 1 && !Boolean(m.find((h) => h.tagName !== "BUTTON"))) {
        u.preventDefault();
        const h = m.findIndex((b) => b === document.activeElement);
        if (u.key === S.RIGHT) {
          const b = m[h + 1];
          b && (u.stopPropagation(), b.focus());
        } else if (u.key === S.LEFT) {
          const b = m[h - 1];
          b && (u.stopPropagation(), b.focus());
        }
        return;
      }
      u.key === S.ENTER && !c ? p(!0) : (u.key === S.ESCAPE || u.key === S.ENTER) && c ? (p(!1), a.current.focus()) : c && u.stopPropagation();
    }
  }, f = i === e.row - 1 && s === e.col - 1;
  return Se(() => {
    const u = He(a.current, !0);
    u.length === 0 || u.length === 1 && ur(u).length !== 0 || u.length > 1 && Boolean(u.find((m) => m.tagName !== "BUTTON")) ? (a.current.setAttribute("tabIndex", !c && f ? 0 : -1), u.forEach((m, h) => {
      m.setAttribute("tabIndex", c ? 0 : -1), c && h === 0 && m.focus();
    })) : u.forEach((m) => {
      m.setAttribute("tabIndex", f ? 0 : -1);
    });
  }, [c, f]), Se(() => {
    const u = He(a.current, !0), m = () => {
      u.length >= 1 && (ur(u).length !== 0 || !Boolean(u.find((h) => h.tagName !== "BUTTON"))) && p(!0), l({ rowIndex: e.row - 1, colIndex: e.col - 1 });
    };
    return u.forEach((h) => {
      h.addEventListener("focus", m);
    }), () => {
      He(a.current, !0).forEach((b) => {
        b.removeEventListener("focus", m);
      });
    };
  }, []), /* @__PURE__ */ o.createElement(y, {
    as: t || "td",
    ref: a,
    onKeyDown: d,
    ...n
  });
};
Kt.defaultProps = {
  coords: {}
};
Kt.propTypes = {
  ["aria-colindex"]: r.exports.number.isRequired,
  children: r.exports.node,
  coords: r.exports.shape({
    col: r.exports.number,
    row: r.exports.number
  })
};
xt.defaultProps = {
  coords: {}
};
xt.propTypes = {
  ["aria-colindex"]: r.exports.number.isRequired,
  as: r.exports.oneOf(["td", "th"]),
  children: r.exports.node,
  coords: r.exports.shape({
    col: r.exports.number,
    row: r.exports.number
  })
};
const Qr = ({ children: e, ...t }) => {
  const n = ce.toArray(e).map((a) => ye(a, { "aria-rowindex": 1 }));
  return /* @__PURE__ */ o.createElement("thead", {
    ...t
  }, n);
};
Qr.propTypes = {
  children: r.exports.node.isRequired
};
const Fr = ({ children: e, ...t }) => {
  const n = ce.toArray(e).map(
    (a, i) => ye(a, { "aria-rowindex": i + 2 })
  );
  return /* @__PURE__ */ o.createElement("tbody", {
    ...t
  }, n);
};
Fr.propTypes = {
  children: r.exports.node.isRequired
};
const St = ({ children: e, ...t }) => {
  const n = ce.toArray(e).map(
    (a, i) => ye(a, { "aria-colindex": i + 1, coords: { col: i + 1, row: t["aria-rowindex"] } })
  );
  return /* @__PURE__ */ o.createElement(y, {
    as: "tr",
    ...t
  }, n);
};
St.propTypes = {
  ["aria-rowindex"]: r.exports.number.isRequired,
  children: r.exports.node.isRequired
};
const oc = g(Kt)`
  // Trick to prevent the outline from overflowing because of the general outline-offset
  outline-offset: -2px;
  border-radius: ${({ theme: e }) => e.borderRadius};
  text-transform: capitalize;
`, nc = g(C)`
  height: ${24 / 16}rem;
  width: ${32 / 16}rem;
`, Ae = ({ children: e, ...t }) => /* @__PURE__ */ o.createElement(oc, {
  ...t
}, /* @__PURE__ */ o.createElement(nc, {
  justifyContent: "center"
}, /* @__PURE__ */ o.createElement(w, {
  variant: "pi",
  fontWeight: "bold",
  color: "neutral800",
  "aria-hidden": !0
}, e.substr(0, 2)), /* @__PURE__ */ o.createElement(de, null, /* @__PURE__ */ o.createElement("span", null, e))));
Ae.propTypes = {
  children: r.exports.string.isRequired
};
const ac = g.button`
  border: none;
  background: ${({ theme: e, isSelected: t }) => t ? e.colors.primary100 : e.colors.neutral0};
  height: ${32 / 16}rem;
  text-align: center;
  width: ${32 / 16}rem;
  border-radius: ${({ theme: e }) => e.borderRadius};

  // Trick to prevent the outline from overflowing because of the general outline-offset
  outline-offset: -2px;

  &:hover {
    background: ${({ theme: e }) => e.colors.primary100};
  }

  &:hover > ${w} {
    color: ${({ theme: e }) => e.colors.primary600};
  }
`, _r = ({ children: e, outsideMonth: t, onSelectDay: n, isSelected: a, ...i }) => {
  const s = a ? "primary600" : t ? "neutral600" : "neutral900";
  return /* @__PURE__ */ o.createElement(xt, {
    ...i
  }, /* @__PURE__ */ o.createElement(ac, {
    tabIndex: -1,
    onClick: n,
    isSelected: a,
    type: "button"
  }, /* @__PURE__ */ o.createElement(w, {
    variant: "pi",
    textColor: s,
    fontWeight: a ? "bold" : null
  }, e)));
};
_r.defaultProps = {
  isSelected: !1,
  outsideMonth: !1
};
_r.propTypes = {
  children: r.exports.node.isRequired,
  isSelected: r.exports.bool,
  onSelectDay: r.exports.func.isRequired,
  outsideMonth: r.exports.bool
};
const ic = () => {
  const e = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format, t = new Date(1970, 0, 1), n = new Date(1970, 0, 2), a = new Date(1970, 0, 3), i = new Date(1970, 0, 4), s = new Date(1970, 0, 5), l = new Date(1970, 0, 6), c = new Date(1970, 0, 7);
  return {
    sun: e(i),
    mon: e(s),
    tue: e(l),
    wed: e(c),
    thu: e(t),
    fri: e(n),
    sat: e(a)
  };
}, sc = () => {
  const e = new Intl.DateTimeFormat(void 0, { month: "long" }).format;
  return Array(12).fill(null).map((t, n) => e(new Date(1970, n, 1)));
}, lc = (e, t) => !e || !t ? !1 : e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate(), cc = 7 * 6, dc = (e, t) => {
  const n = new Date(e.getFullYear(), e.getMonth(), 1), a = new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate(), i = new Date(e.getFullYear(), e.getMonth(), 0).getDate(), s = n.getDay(), l = a + s, c = [];
  let p = 0, d = 0, f = 0, u;
  for (let m = 0; m < cc; m++)
    m > 6 && m % 7 === 0 && f++, c[f] || (c[f] = []), m < s ? u = {
      date: new Date(e.getFullYear(), e.getMonth() - 1, i - s + m + 1),
      outsideMonth: !0
    } : m < l ? u = { date: new Date(e.getFullYear(), e.getMonth(), m - s + 1) } : u = {
      date: new Date(e.getFullYear(), e.getMonth() + 1, m - s - a + 1),
      outsideMonth: !0
    }, lc(t, u.date) && (p = f + 1, d = c[f].length, u.isSelected = !0), c[f].push(u);
  return [c, p, d];
}, uc = 200, pc = 15, fc = (e, t) => {
  var l, c;
  const n = new Date().getFullYear(), a = (l = e == null ? void 0 : e.getFullYear()) != null ? l : parseInt(n, 10) - uc, i = (c = t == null ? void 0 : t.getFullYear()) != null ? c : parseInt(n, 10) + pc, s = [];
  for (let p = a; p <= i; p++)
    s.push(p);
  return s;
}, Er = (e, t) => new Intl.DateTimeFormat(t).format(e), Hr = ({
  selectedDate: e,
  initialDate: t,
  popoverSource: n,
  onChange: a,
  label: i,
  minDate: s,
  maxDate: l,
  onEscape: c
}) => {
  const [p, d] = oe(t), [f, u, m] = dc(p, e), { sun: h, mon: b, tue: x, wed: v, thu: T, fri: z, sat: O } = ic(), $ = sc(), E = fc(s, l);
  ee(() => {
    e && d(e);
  }, [e]);
  const Q = (I) => {
    const P = new Date(p);
    P.setMonth($.indexOf(I)), d(P);
  }, N = (I) => {
    const P = new Date(p);
    P.setFullYear(I), d(P);
  };
  return /* @__PURE__ */ o.createElement(Hl, {
    source: n,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": i,
    spacing: 4
  }, /* @__PURE__ */ o.createElement(ht, {
    onEscape: c
  }, /* @__PURE__ */ o.createElement(y, {
    padding: 4
  }, /* @__PURE__ */ o.createElement(y, {
    paddingBottom: 4,
    paddingLeft: 2,
    paddingRight: 2
  }, /* @__PURE__ */ o.createElement(C, null, /* @__PURE__ */ o.createElement(Ze, {
    label: $[p.getMonth()]
  }, $.map((I) => /* @__PURE__ */ o.createElement(zt, {
    key: I,
    onClick: () => Q(I)
  }, I))), /* @__PURE__ */ o.createElement(y, {
    paddingLeft: 2
  }, /* @__PURE__ */ o.createElement(Ze, {
    label: p.getFullYear()
  }, E.map((I) => /* @__PURE__ */ o.createElement(zt, {
    key: I,
    onClick: () => N(I)
  }, I)))))), /* @__PURE__ */ o.createElement(Gt, {
    colCount: 7,
    rowCount: f.length + 1,
    initialCol: m,
    initialRow: u,
    role: "grid"
  }, /* @__PURE__ */ o.createElement(Qr, null, /* @__PURE__ */ o.createElement(St, null, /* @__PURE__ */ o.createElement(Ae, null, h), /* @__PURE__ */ o.createElement(Ae, null, b), /* @__PURE__ */ o.createElement(Ae, null, x), /* @__PURE__ */ o.createElement(Ae, null, v), /* @__PURE__ */ o.createElement(Ae, null, T), /* @__PURE__ */ o.createElement(Ae, null, z), /* @__PURE__ */ o.createElement(Ae, null, O))), /* @__PURE__ */ o.createElement(Fr, null, f.map((I, P) => /* @__PURE__ */ o.createElement(St, {
    key: `week-${P}`
  }, I.map(({ date: G, outsideMonth: W, isSelected: K }) => /* @__PURE__ */ o.createElement(_r, {
    key: `${G.getFullYear()}-${G.getMonth() + 1}-${G.getDate()}`,
    outsideMonth: W,
    onSelectDay: () => a(G),
    isSelected: K
  }, /* @__PURE__ */ o.createElement("span", {
    "aria-hidden": !0
  }, G.getDate()), /* @__PURE__ */ o.createElement(de, null, /* @__PURE__ */ o.createElement("span", null, Er(G))))))))))));
};
Hr.defaultProps = { selectedDate: void 0, initialDate: new Date() };
Hr.propTypes = {
  initialDate: r.exports.instanceOf(Date),
  label: r.exports.string.isRequired,
  maxDate: r.exports.instanceOf(Date),
  minDate: r.exports.instanceOf(Date),
  onChange: r.exports.func.isRequired,
  onEscape: r.exports.func.isRequired,
  popoverSource: r.exports.shape({
    current: (typeof Element > "u" ? r.exports.any : r.exports.instanceOf(Element)).isRequired
  }).isRequired,
  selectedDate: r.exports.instanceOf(Date)
};
const jo = "en-EN", vr = () => typeof navigator > "u" ? jo : navigator.language ? navigator.language : navigator.userLanguage ? navigator.userLanguage : jo, fa = ({
  ariaLabel: e,
  initialDate: t,
  selectedDate: n,
  onChange: a,
  label: i,
  locale: s,
  selectedDateLabel: l,
  onClear: c,
  clearLabel: p,
  disabled: d,
  id: f,
  ...u
}) => {
  const m = se("datepicker", f), [h, b] = oe(!1), x = Y(null), v = Y(null), T = s || vr(), z = n ? Er(n, T) : "", O = () => {
    d || b((N) => !N);
  }, $ = () => {
    d || (c(), v.current.focus());
  }, E = (N) => {
    a(N), b(!1);
  }, Q = () => {
    b(!1);
  };
  return /* @__PURE__ */ o.createElement(Gl, {
    bold: h
  }, /* @__PURE__ */ o.createElement(Vt, {
    ref: x,
    onClick: O,
    onChange: () => {
    },
    value: z,
    startAction: /* @__PURE__ */ o.createElement(Vl, {
      ref: v,
      onClick: O,
      "aria-label": n ? l(Er(n, T)) : i,
      type: "button",
      "aria-disabled": d
    }, /* @__PURE__ */ o.createElement(ci, {
      "aria-hidden": !0
    })),
    endAction: c && z ? /* @__PURE__ */ o.createElement(Kl, {
      as: "button",
      onClick: $,
      "aria-label": p,
      "aria-disabled": d
    }, /* @__PURE__ */ o.createElement(Fe, null)) : void 0,
    "aria-autocomplete": "none",
    label: i,
    "aria-label": e,
    disabled: d,
    id: m,
    ...u
  }), x.current && x.current.inputWrapperRef && h && /* @__PURE__ */ o.createElement(Hr, {
    selectedDate: n,
    initialDate: t,
    onChange: E,
    onEscape: Q,
    popoverSource: x.current.inputWrapperRef,
    label: i || e
  }));
};
fa.defaultProps = {
  ariaLabel: void 0,
  clearLabel: void 0,
  disabled: !1,
  id: void 0,
  label: void 0,
  initialDate: new Date(),
  onClear: void 0,
  placeholder: void 0,
  selectedDate: void 0,
  size: "M"
};
fa.propTypes = {
  ariaLabel: r.exports.string,
  clearLabel: r.exports.string,
  disabled: r.exports.bool,
  id: r.exports.string,
  initialDate: r.exports.instanceOf(Date),
  label: r.exports.string,
  locale: r.exports.string,
  maxDate: r.exports.instanceOf(Date),
  minDate: r.exports.instanceOf(Date),
  onChange: r.exports.func.isRequired,
  onClear: r.exports.func,
  placeholder: r.exports.string,
  selectedDate: r.exports.instanceOf(Date),
  selectedDateLabel: r.exports.func.isRequired,
  size: r.exports.oneOf(Object.keys(De.input))
};
const gc = g(y)`
  height: 1px;
  border: none;
  ${({ unsetMargin: e }) => e ? "margin: 0;" : ""}
`, yt = ({ unsetMargin: e, ...t }) => /* @__PURE__ */ o.createElement(gc, {
  ...t,
  as: "hr",
  unsetMargin: e
});
yt.defaultProps = {
  background: "neutral150",
  unsetMargin: !0
};
yt.propTypes = {
  background: r.exports.string,
  unsetMargin: r.exports.bool
};
const mc = g(y)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`, bc = g(y)`
  svg {
    height: ${88 / 16}rem;
  }
`, ga = ({ icon: e, content: t, action: n, hasRadius: a, shadow: i }) => /* @__PURE__ */ o.createElement(mc, {
  padding: 11,
  background: "neutral0",
  hasRadius: a,
  shadow: i
}, /* @__PURE__ */ o.createElement(bc, {
  paddingBottom: 6,
  "aria-hidden": !0
}, e), /* @__PURE__ */ o.createElement(y, {
  paddingBottom: 4
}, /* @__PURE__ */ o.createElement(w, {
  variant: "delta",
  as: "p",
  textColor: "neutral600"
}, t)), n);
ga.defaultProps = {
  action: void 0,
  hasRadius: !0,
  shadow: "tableShadow"
};
ga.propTypes = {
  action: r.exports.node,
  content: r.exports.string.isRequired,
  hasRadius: r.exports.bool,
  icon: r.exports.node.isRequired,
  shadow: r.exports.string
};
const ma = Te({ gap: 0, gridCols: 12 }), hc = () => we(ma), xc = g(y)`
  display: grid;
  grid-template-columns: repeat(${({ gridCols: e }) => e}, 1fr);
  ${({ theme: e, gap: t }) => xe("gap", t, e)}
`, Et = ({ gap: e, gridCols: t, ...n }) => /* @__PURE__ */ o.createElement(ma.Provider, {
  value: { gap: e, gridCols: t }
}, /* @__PURE__ */ o.createElement(xc, {
  gap: e,
  gridCols: t,
  ...n
}));
Et.defaultProps = {
  gap: 0,
  gridCols: 12
};
Et.propTypes = {
  gap: r.exports.oneOfType([r.exports.number, r.exports.arrayOf(r.exports.number)]),
  gridCols: r.exports.number
};
const yc = g.div`
  grid-column: span ${({ col: e }) => e};
  max-width: 100%;

  ${({ theme: e }) => e.mediaQueries.tablet} {
    grid-column: span ${({ s: e }) => e};
  }

  ${({ theme: e }) => e.mediaQueries.mobile} {
    grid-column: span ${({ xs: e }) => e};
  }
`, Lt = ({ col: e, xs: t, s: n, ...a }) => {
  const { gap: i, gridCols: s } = hc();
  return /* @__PURE__ */ o.createElement(yc, {
    gap: i,
    gridCols: s,
    col: e,
    xs: t,
    s: n
  }, /* @__PURE__ */ o.createElement(y, {
    ...a
  }));
};
Lt.defaultProps = {
  col: void 0,
  s: void 0,
  xs: void 0
};
Lt.propTypes = {
  col: r.exports.number,
  s: r.exports.number,
  xs: r.exports.number
};
const Mr = g(dt)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${32 / 16}rem;
  width: ${32 / 16}rem;

  svg {
    > g,
    path {
      fill: ${({ theme: e }) => e.colors.neutral500};
    }
  }
  &:hover {
    svg {
      > g,
      path {
        fill: ${({ theme: e }) => e.colors.neutral600};
      }
    }
  }
  &:active {
    svg {
      > g,
      path {
        fill: ${({ theme: e }) => e.colors.neutral400};
      }
    }
  }
  &[aria-disabled='true'] {
    background-color: ${({ theme: e }) => e.colors.neutral150};
    svg {
      path {
        fill: ${({ theme: e }) => e.colors.neutral600};
      }
    }
  }
  ${({ noBorder: e }) => e ? "border: none;" : void 0}
`, Su = g(C)`
  & span:first-child button {
    border-left: 1px solid ${({ theme: e }) => e.colors.neutral200};
    border-radius: ${({ theme: e }) => `${e.borderRadius} 0 0 ${e.borderRadius}`};
  }

  & span:last-child button {
    border-radius: ${({ theme: e }) => `0 ${e.borderRadius} ${e.borderRadius} 0`};
  }

  & ${Mr} {
    border-radius: 0;
    border-left: none;

    svg {
      path {
        fill: ${({ theme: e }) => e.colors.neutral700};
      }
    }

    &:hover {
      background-color: ${({ theme: e }) => e.colors.neutral100};

      svg {
        path {
          fill: ${({ theme: e }) => e.colors.neutral800};
        }
      }
    }

    &:active {
      background-color: ${({ theme: e }) => e.colors.neutral150};
      svg {
        path {
          fill: ${({ theme: e }) => e.colors.neutral900};
        }
      }
    }

    &[aria-disabled='true'] {
      svg {
        path {
          fill: ${({ theme: e }) => e.colors.neutral600};
        }
      }
    }
  }
`, vt = o.forwardRef(({ label: e, noBorder: t, icon: n, disabled: a, onClick: i, ...s }, l) => {
  const c = (p) => {
    !a && i && i(p);
  };
  return e ? /* @__PURE__ */ o.createElement(mt, {
    label: e
  }, /* @__PURE__ */ o.createElement(Mr, {
    ...s,
    ref: l,
    noBorder: t,
    onClick: c,
    "aria-disabled": a
  }, n)) : /* @__PURE__ */ o.createElement(Mr, {
    ...s,
    ref: l,
    noBorder: t,
    onClick: c,
    "aria-disabled": a
  }, n);
});
vt.displayName = "IconButton";
vt.defaultProps = {
  label: void 0,
  noBorder: !1,
  disabled: !1,
  onClick: void 0
};
vt.propTypes = {
  disabled: r.exports.bool,
  icon: r.exports.element.isRequired,
  label: r.exports.string,
  noBorder: r.exports.bool,
  onClick: r.exports.func
};
const Ec = g(y)`
  display: grid;
  grid-template-columns: ${({ hasSideNav: e }) => e ? "auto 1fr" : "1fr"};
`, vc = g(y)`
  overflow-x: hidden;
`, ba = ({ sideNav: e, children: t }) => /* @__PURE__ */ o.createElement(Ec, {
  hasSideNav: Boolean(e)
}, e, /* @__PURE__ */ o.createElement(vc, {
  paddingBottom: 10
}, t));
ba.defaultProps = {
  sideNav: void 0
};
ba.propTypes = {
  children: r.exports.node.isRequired,
  sideNav: r.exports.node
};
const ha = g(C)`
  & > * + * {
    margin-left: ${({ theme: e }) => e.spaces[2]};
  }

  margin-left: ${({ pullRight: e }) => e ? "auto" : void 0};
`, Mc = g(ha)`
  flex-shrink: 0;
`, xa = ({ startActions: e, endActions: t }) => e || t ? /* @__PURE__ */ o.createElement(y, {
  paddingLeft: 10,
  paddingRight: 10
}, /* @__PURE__ */ o.createElement(y, {
  paddingBottom: 4
}, /* @__PURE__ */ o.createElement(C, {
  justifyContent: "space-between",
  alignItems: "flex-start"
}, e && /* @__PURE__ */ o.createElement(ha, {
  wrap: "wrap"
}, e), t && /* @__PURE__ */ o.createElement(Mc, {
  pullRight: !0
}, t)))) : null;
xa.defaultProps = {
  endActions: void 0,
  startActions: void 0
};
xa.propTypes = {
  endActions: r.exports.node,
  startActions: r.exports.node
};
const $c = ({ children: e }) => /* @__PURE__ */ o.createElement(y, {
  paddingLeft: 10,
  paddingRight: 10
}, e);
$c.propTypes = {
  children: r.exports.node.isRequired
};
const Tc = (e) => {
  const t = Y(null), [n, a] = oe(!0), i = ([s]) => {
    a(s.isIntersecting);
  };
  return ee(() => {
    const s = t.current, l = new IntersectionObserver(i, e);
    return s && l.observe(t.current), () => {
      s && l.disconnect();
    };
  }, [t, e]), [t, n];
}, wc = (e, t) => {
  Se(() => {
    const n = new ResizeObserver(t);
    return Array.isArray(e) ? e.map((a) => {
      a.current && n.observe(a.current);
    }) : e.current && n.observe(e.current), () => {
      n.disconnect();
    };
  }, []);
}, Nc = () => {
  const e = Y(null), [t, n] = oe(null), [a, i] = Tc({
    root: null,
    rootMargin: "0px",
    threshold: 0
  });
  return wc(a, () => {
    a.current && n(a.current.getBoundingClientRect());
  }), ee(() => {
    e.current && n(e.current.getBoundingClientRect());
  }, [e]), {
    containerRef: a,
    isVisible: i,
    baseHeaderLayoutRef: e,
    headerSize: t
  };
}, Vr = (e) => {
  const { containerRef: t, isVisible: n, baseHeaderLayoutRef: a, headerSize: i } = Nc();
  return /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement("div", {
    style: { height: i == null ? void 0 : i.height },
    ref: t
  }, n && /* @__PURE__ */ o.createElement(it, {
    ref: a,
    ...e
  })), !n && /* @__PURE__ */ o.createElement(it, {
    ...e,
    sticky: !0,
    width: i == null ? void 0 : i.width
  }));
};
Vr.displayName = "HeaderLayout";
const Dc = g(y)`
  position: fixed;
  top: 0;
  right: 0;
  width: ${(e) => e.width}px;
  z-index: 4;
  box-shadow: ${({ theme: e }) => e.shadows.tableShadow};
`, it = o.forwardRef(
  ({ navigationAction: e, primaryAction: t, secondaryAction: n, subtitle: a, title: i, sticky: s, width: l, ...c }, p) => {
    const d = typeof a == "string";
    return s ? /* @__PURE__ */ o.createElement(Dc, {
      paddingLeft: 6,
      paddingRight: 6,
      paddingTop: 3,
      paddingBottom: 3,
      background: "neutral0",
      width: l,
      "data-strapi-header-sticky": !0
    }, /* @__PURE__ */ o.createElement(C, {
      justifyContent: "space-between"
    }, /* @__PURE__ */ o.createElement(C, null, e && /* @__PURE__ */ o.createElement(y, {
      paddingRight: 3
    }, e), /* @__PURE__ */ o.createElement(y, null, /* @__PURE__ */ o.createElement(w, {
      variant: "beta",
      as: "h1",
      ...c
    }, i), d ? /* @__PURE__ */ o.createElement(w, {
      variant: "pi",
      textColor: "neutral600"
    }, a) : a), n ? /* @__PURE__ */ o.createElement(y, {
      paddingLeft: 4
    }, n) : null), /* @__PURE__ */ o.createElement(C, null, t ? /* @__PURE__ */ o.createElement(y, {
      paddingLeft: 2
    }, t) : void 0))) : /* @__PURE__ */ o.createElement(y, {
      ref: p,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 8,
      paddingTop: e ? 6 : 8,
      background: "neutral100",
      "data-strapi-header": !0
    }, e ? /* @__PURE__ */ o.createElement(y, {
      paddingBottom: 2
    }, e) : null, /* @__PURE__ */ o.createElement(C, {
      justifyContent: "space-between"
    }, /* @__PURE__ */ o.createElement(C, null, /* @__PURE__ */ o.createElement(w, {
      as: "h1",
      variant: "alpha",
      ...c
    }, i), n ? /* @__PURE__ */ o.createElement(y, {
      paddingLeft: 4
    }, n) : null), t), d ? /* @__PURE__ */ o.createElement(w, {
      variant: "epsilon",
      textColor: "neutral600",
      as: "p"
    }, a) : a);
  }
);
it.displayName = "BaseHeaderLayout";
it.defaultProps = {
  navigationAction: void 0,
  primaryAction: void 0,
  secondaryAction: void 0,
  subtitle: void 0,
  sticky: !1,
  width: void 0
};
it.propTypes = {
  navigationAction: r.exports.node,
  primaryAction: r.exports.node,
  secondaryAction: r.exports.node,
  sticky: r.exports.bool,
  subtitle: r.exports.oneOfType([r.exports.string, r.exports.node]),
  title: r.exports.string.isRequired,
  width: r.exports.number
};
Vr.defaultProps = {
  navigationAction: void 0,
  primaryAction: void 0,
  secondaryAction: void 0,
  subtitle: void 0
};
Vr.propTypes = {
  navigationAction: r.exports.node,
  primaryAction: r.exports.node,
  secondaryAction: r.exports.node,
  subtitle: r.exports.oneOfType([r.exports.string, r.exports.node]),
  title: r.exports.string.isRequired
};
const Cc = ({ startCol: e, endCol: t }) => /* @__PURE__ */ o.createElement(Et, {
  gap: 4
}, /* @__PURE__ */ o.createElement(Lt, {
  col: 9,
  s: 12
}, /* @__PURE__ */ o.createElement(y, {
  hasRadius: !0,
  background: "neutral0",
  shadow: "tableShadow"
}, e)), /* @__PURE__ */ o.createElement(Lt, {
  col: 3,
  s: 12
}, /* @__PURE__ */ o.createElement(y, {
  hasRadius: !0,
  background: "neutral0",
  shadow: "tableShadow"
}, t)));
Cc.propTypes = {
  endCol: r.exports.node.isRequired,
  startCol: r.exports.node.isRequired
};
const Ic = g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({ theme: e }) => e.spaces[4]};
`;
Ic.propTypes = {
  children: r.exports.node.isRequired
};
const kc = g.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({ disabled: e }) => e ? "none" : void 0};
  color: ${({ disabled: e, theme: t }) => e ? t.colors.neutral600 : t.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10 / 16}rem;
  }

  ${w} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({ theme: e }) => e.colors.primary500};
  }

  &:active {
    color: ${({ theme: e }) => e.colors.primary700};
  }

  ${st};
`, pr = g(y)`
  display: flex;
`, Gr = ({ href: e, to: t, children: n, disabled: a, startIcon: i, endIcon: s, ...l }) => {
  const c = e ? "_blank" : void 0, p = e ? "noreferrer noopener" : void 0;
  return /* @__PURE__ */ o.createElement(kc, {
    as: t && !a ? Ce : "a",
    target: c,
    rel: p,
    to: a ? void 0 : t,
    href: a ? "#" : e,
    disabled: a,
    ...l
  }, i && /* @__PURE__ */ o.createElement(pr, {
    as: "span",
    "aria-hidden": !0,
    paddingRight: 2
  }, i), /* @__PURE__ */ o.createElement(w, null, n), s && !e && /* @__PURE__ */ o.createElement(pr, {
    as: "span",
    "aria-hidden": !0,
    paddingLeft: 2
  }, s), e && /* @__PURE__ */ o.createElement(pr, {
    as: "span",
    "aria-hidden": !0,
    paddingLeft: 2
  }, /* @__PURE__ */ o.createElement(di, null)));
};
Gr.displayName = "Link";
Gr.defaultProps = {
  href: void 0,
  to: void 0,
  disabled: !1
};
Gr.propTypes = {
  children: r.exports.node.isRequired,
  disabled: r.exports.bool,
  endIcon: r.exports.element,
  href: (e) => {
    if (!e.disabled && !e.to && !e.href)
      return new Error("href must be defined");
  },
  startIcon: r.exports.element,
  to: (e) => {
    if (!e.disabled && !e.href && !e.to)
      return new Error("to must be defined");
  }
};
const Oc = g(Nn)`
  padding: ${({ theme: e, size: t }) => `${t === "S" ? e.spaces[2] : "10px"} ${e.spaces[4]}`};
  background: ${({ theme: e }) => e.colors.buttonPrimary600};
  border: 1px solid ${({ theme: e }) => e.colors.buttonPrimary600};
  border-radius: ${({ theme: e }) => e.borderRadius};
  ${y} {
    display: flex;
    align-items: center;
  }
  ${w} {
    color: ${({ theme: e }) => e.colors.buttonNeutral0};
  }
  &[aria-disabled='true'] {
    ${Dt}
    &:active {
      ${Dt}
    }
  }
  &:hover {
    ${Ln}
  }
  &:active {
    ${jn}
  }
  ${Pn}
  /**
    Link specific properties
  */
  display: inline-flex;
  text-decoration: none;
  pointer-events: ${({ disabled: e }) => e ? "none" : void 0};
`, Kr = o.forwardRef(
  ({ variant: e, startIcon: t, endIcon: n, disabled: a, children: i, size: s, href: l, to: c, ...p }, d) => {
    const f = l ? "_blank" : void 0, u = l ? "noreferrer noopener" : void 0;
    return /* @__PURE__ */ o.createElement(Oc, {
      ref: d,
      "aria-disabled": a,
      size: s,
      variant: e,
      target: f,
      rel: u,
      to: a ? void 0 : c,
      href: a ? "#" : l,
      ...p,
      as: c && !a ? Ce : "a"
    }, t && /* @__PURE__ */ o.createElement(y, {
      "aria-hidden": !0,
      paddingRight: 2
    }, t), s === "S" ? /* @__PURE__ */ o.createElement(w, {
      variant: "pi",
      fontWeight: "bold"
    }, i) : /* @__PURE__ */ o.createElement(w, {
      fontWeight: "bold"
    }, i), n && /* @__PURE__ */ o.createElement(y, {
      "aria-hidden": !0,
      paddingLeft: 2
    }, n));
  }
);
Kr.displayName = "LinkButton";
Kr.defaultProps = {
  disabled: !1,
  startIcon: void 0,
  endIcon: void 0,
  size: "S",
  variant: "default",
  onClick: void 0,
  href: void 0,
  to: void 0
};
Kr.propTypes = {
  children: r.exports.node.isRequired,
  disabled: r.exports.bool,
  endIcon: r.exports.element,
  href: (e) => {
    if (!e.disabled && !e.to && !e.href)
      return new Error("href must be defined");
  },
  onClick: r.exports.func,
  size: r.exports.oneOf(Sn),
  startIcon: r.exports.element,
  to: (e) => {
    if (!e.disabled && !e.href && !e.to)
      return new Error("to must be defined");
  },
  variant: r.exports.oneOf(Lr)
};
const Ve = {
  Log: "live-region-log",
  Status: "live-region-status",
  Alert: "live-region-alert"
}, Po = (e) => {
  const t = document.querySelector(`#${Ve.Log}`);
  t && (t.innerText = e);
}, qo = (e) => {
  const t = document.querySelector(`#${Ve.Status}`);
  t && (t.innerText = e);
}, Bo = (e) => {
  const t = document.querySelector(`#${Ve.Alert}`);
  t && (t.innerText = e);
}, Lu = () => (ee(() => () => {
  Po(""), Bo(""), qo("");
}, []), { notifyLog: Po, notifyAlert: Bo, notifyStatus: qo }), Rc = g.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`, ya = ({ labelledBy: e, ...t }) => {
  const n = e || "main-content-title";
  return /* @__PURE__ */ o.createElement(Rc, {
    "aria-labelledby": n,
    id: "main-content",
    tabIndex: -1,
    ...t
  });
};
ya.defaultProps = {
  labelledBy: void 0
};
ya.propTypes = {
  labelledBy: r.exports.string
};
const Ac = g(y)`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: ${({ theme: e }) => e.spaces[3]};
    top: ${({ theme: e }) => e.spaces[3]};
  }
`, zc = ({ children: e }) => /* @__PURE__ */ o.createElement(Ac, {
  as: "a",
  href: "#main-content",
  background: "primary600",
  color: "neutral0",
  padding: 3,
  hasRadius: !0
}, e);
zc.propTypes = {
  children: r.exports.node.isRequired
};
const Ea = Te(), Mt = () => we(Ea), Sc = g(Et)`
  width: ${({ condensed: e }) => e ? "max-content" : `${224 / 16}rem`};
  background: ${({ theme: e }) => e.colors.neutral0};
  position: sticky;
  top: 0;
  height: 100vh;
  z-index: 2;
  border-right: 1px solid ${({ theme: e }) => e.colors.neutral150};
`, va = ({ condensed: e, ...t }) => /* @__PURE__ */ o.createElement(Ea.Provider, {
  value: e
}, /* @__PURE__ */ o.createElement(Sc, {
  as: "nav",
  condensed: e,
  ...t
}));
va.defaultProps = {
  condensed: !1
};
va.propTypes = {
  condensed: r.exports.bool
};
const Wo = g.div`
  svg,
  img {
    border-radius: ${({ theme: e }) => e.borderRadius};
    object-fit: contain;
    height: ${({ condensed: e }) => e ? `${40 / 16}rem` : `${32 / 16}rem`};
    width: ${({ condensed: e }) => e ? `${40 / 16}rem` : `${32 / 16}rem`};
  }
`, Lc = g(Ce)`
  text-decoration: unset;
  color: inherit;
`, Ma = ({ workplace: e, title: t, icon: n, to: a }) => Mt() ? /* @__PURE__ */ o.createElement(y, {
  paddingLeft: 3,
  paddingRight: 3,
  paddingTop: 4,
  paddingBottom: 4
}, /* @__PURE__ */ o.createElement(Wo, {
  condensed: !0
}, /* @__PURE__ */ o.createElement(Ce, {
  to: a
}, n, /* @__PURE__ */ o.createElement(de, null, /* @__PURE__ */ o.createElement("span", null, t), /* @__PURE__ */ o.createElement("span", null, e))))) : /* @__PURE__ */ o.createElement(y, {
  paddingLeft: 3,
  paddingRight: 3,
  paddingTop: 4,
  paddingBottom: 4
}, /* @__PURE__ */ o.createElement(C, null, /* @__PURE__ */ o.createElement(Wo, {
  as: Ce,
  to: a,
  "aria-hidden": !0,
  tabIndex: -1
}, n), /* @__PURE__ */ o.createElement(y, {
  paddingLeft: 2
}, /* @__PURE__ */ o.createElement(w, {
  fontWeight: "bold",
  textColor: "neutral800",
  as: "span"
}, /* @__PURE__ */ o.createElement(Lc, {
  to: a
}, t, /* @__PURE__ */ o.createElement(de, {
  as: "span"
}, e))), /* @__PURE__ */ o.createElement(w, {
  variant: "pi",
  as: "p",
  textColor: "neutral600",
  "aria-hidden": !0
}, e))));
Ma.defaultProps = {
  to: "/"
};
Ma.propTypes = {
  icon: r.exports.node.isRequired,
  title: r.exports.string.isRequired,
  to: r.exports.string,
  workplace: r.exports.string.isRequired
};
const Uo = g(y)`
  svg {
    width: 1rem;
    height: 1rem;
  }
`, Yo = g(Ce)`
  position: relative;
  text-decoration: none;
  display: block;
  border-radius: ${({ theme: e }) => e.borderRadius};
  background: ${({ theme: e }) => e.colors.neutral0};

  ${w} {
    color: ${({ theme: e }) => e.colors.neutral600};
  }

  svg path {
    fill: ${({ theme: e }) => e.colors.neutral500};
  }

  &:hover {
    background: ${({ theme: e }) => e.colors.neutral100};

    ${w} {
      color: ${({ theme: e }) => e.colors.neutral700};
    }

    svg path {
      fill: ${({ theme: e }) => e.colors.neutral600};
    }
  }

  &.active {
    background: ${({ theme: e }) => e.colors.primary100};

    svg path {
      fill: ${({ theme: e }) => e.colors.primary600};
    }

    ${w} {
      color: ${({ theme: e }) => e.colors.primary600};
      font-weight: 500;
    }
  }
`, Qo = g(C)`
  padding: ${({ theme: e }) => `${e.spaces[2]} ${e.spaces[3]}`};
`, Fo = g(ct)`
  ${({ condensed: e }) => e && `
	  position: absolute;
    transform: translate(35%, -50%);
    top: 0;
    right: 0;
  `}

  ${w} {
    //find a solution to remove !important
    color: ${({ theme: e }) => e.colors.neutral0} !important;
    line-height: 0;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${({ theme: e }) => e.spaces[6]};
  height: ${({ theme: e }) => e.spaces[5]};
  padding: ${({ theme: e }) => `0 ${e.spaces[2]}`};
  border-radius: ${({ theme: e }) => e.spaces[10]};
  background: ${({ theme: e }) => e.colors.primary600};
`, Zr = ({ children: e, icon: t, badgeContent: n, badgeAriaLabel: a, ...i }) => Mt() ? /* @__PURE__ */ o.createElement(mt, {
  position: "right",
  label: e
}, /* @__PURE__ */ o.createElement(Yo, {
  ...i
}, /* @__PURE__ */ o.createElement(Qo, {
  as: "span"
}, /* @__PURE__ */ o.createElement(Uo, {
  "aria-hidden": !0,
  paddingRight: 0,
  as: "span"
}, t), n && /* @__PURE__ */ o.createElement(Fo, {
  condensed: !0,
  "aria-label": a
}, n)))) : /* @__PURE__ */ o.createElement(Yo, {
  ...i
}, /* @__PURE__ */ o.createElement(Qo, {
  as: "span",
  justifyContent: "space-between"
}, /* @__PURE__ */ o.createElement(C, null, /* @__PURE__ */ o.createElement(Uo, {
  "aria-hidden": !0,
  paddingRight: 3,
  as: "span"
}, t), /* @__PURE__ */ o.createElement(w, null, e)), n && /* @__PURE__ */ o.createElement(Fo, {
  justifyContent: "center",
  "aria-label": a
}, n)));
Zr.displayName = "NavLink";
Zr.defaultProps = {
  badgeContent: void 0,
  badgeAriaLabel: void 0
};
Zr.propTypes = {
  badgeAriaLabel: r.exports.string,
  badgeContent: r.exports.oneOfType([r.exports.string, r.exports.number]),
  children: r.exports.node.isRequired,
  icon: r.exports.node.isRequired
};
const jc = ({ label: e, children: t, ...n }) => Mt() ? /* @__PURE__ */ o.createElement(ne, {
  spacing: 2
}, /* @__PURE__ */ o.createElement(y, {
  paddingTop: 1,
  paddingBottom: 1,
  background: "neutral0",
  hasRadius: !0,
  as: "span"
}, /* @__PURE__ */ o.createElement(yt, null), /* @__PURE__ */ o.createElement(de, null, /* @__PURE__ */ o.createElement("span", null, e))), /* @__PURE__ */ o.createElement(ne, {
  as: "ul",
  spacing: 2,
  ...n
}, ce.map(t, (i, s) => /* @__PURE__ */ o.createElement("li", {
  key: s
}, i)))) : /* @__PURE__ */ o.createElement(ne, {
  spacing: 2
}, /* @__PURE__ */ o.createElement(y, {
  paddingTop: 1,
  paddingBottom: 1,
  background: "neutral0",
  paddingRight: 3,
  paddingLeft: 3,
  hasRadius: !0,
  as: "span"
}, /* @__PURE__ */ o.createElement(w, {
  variant: "sigma",
  textColor: "neutral600"
}, e)), /* @__PURE__ */ o.createElement(ne, {
  as: "ul",
  spacing: 2,
  ...n
}, ce.map(t, (i, s) => /* @__PURE__ */ o.createElement("li", {
  key: s
}, i))));
jc.propTypes = {
  children: r.exports.node.isRequired,
  label: r.exports.string.isRequired
};
const Pc = ({ children: e, ...t }) => /* @__PURE__ */ o.createElement(y, {
  paddingLeft: 3,
  paddingRight: 2,
  paddingTop: 3
}, /* @__PURE__ */ o.createElement(ne, {
  as: "ul",
  spacing: 4,
  ...t
}, ce.map(e, (n, a) => /* @__PURE__ */ o.createElement("li", {
  key: a
}, n))));
Pc.propTypes = {
  children: r.exports.node.isRequired
};
const qc = g(y)`
  text-decoration: none;
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top: 1px solid ${({ theme: e }) => e.colors.neutral150};
`, Xr = o.forwardRef(({ src: e, children: t, initials: n, ...a }, i) => {
  const s = Mt();
  return /* @__PURE__ */ o.createElement(qc, {
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 5,
    paddingRight: 5,
    ...a
  }, /* @__PURE__ */ o.createElement(C, {
    as: "button",
    justifyContent: s ? "center" : void 0,
    ref: i
  }, e ? /* @__PURE__ */ o.createElement(Or, {
    src: e,
    alt: "",
    "aria-hidden": !0
  }) : /* @__PURE__ */ o.createElement(wn, null, n), s ? /* @__PURE__ */ o.createElement(de, null, /* @__PURE__ */ o.createElement("span", null, t)) : /* @__PURE__ */ o.createElement(y, {
    width: `${130 / 16}rem`,
    paddingLeft: 2,
    as: "span"
  }, /* @__PURE__ */ o.createElement(w, {
    ellipsis: !0,
    textColor: "neutral600"
  }, t))));
});
Xr.displayName = "NavUser";
Xr.defaultProps = {
  src: void 0,
  initials: void 0
};
Xr.propTypes = {
  children: r.exports.node.isRequired,
  initials: r.exports.node,
  src: r.exports.string
};
const Bc = g.button`
  background: ${({ theme: e }) => e.colors.neutral0};
  border: 1px solid ${({ theme: e }) => e.colors.neutral150};
  border-radius: ${({ theme: e }) => e.borderRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: ${(9 + 4) / 16}rem; // 9 is the height of the svg and 4 is the padding below
  right: ${({ theme: e, condensed: t }) => t ? 0 : e.spaces[5]};
  transform: ${({ condensed: e }) => e ? "translateX(50%)" : void 0};
  z-index: 2;
  width: ${18 / 16}rem;
  height: ${25 / 16}rem;

  svg {
    width: ${6 / 16}rem;
    height: ${9 / 16}rem;
  }
`, Wc = ({ children: e, ...t }) => {
  const n = Mt();
  return /* @__PURE__ */ o.createElement(Bc, {
    as: "button",
    condensed: n,
    ...t
  }, /* @__PURE__ */ o.createElement(Ie, {
    as: n ? Pt : Nr,
    "aria-hidden": !0,
    color: "neutral600"
  }), /* @__PURE__ */ o.createElement(de, null, e));
};
Wc.propTypes = {
  children: r.exports.string.isRequired
};
const $a = Te(), Uc = () => we($a), Yc = g.div`
  position: fixed;
  z-index: 4;
  inset: 0;
  background: ${({ theme: e }) => `${e.colors.neutral800}1F`};
  padding: 0 ${({ theme: e }) => e.spaces[8]};
  display: flex;
  align-items: center;
  justify-content: center;
`, Qc = g(y)`
  width: ${830 / 16}rem;
`, Fc = ({ onClose: e, labelledBy: t, ...n }) => (ee(() => {
  const a = document.body;
  return a.classList.add("lock-body-scroll"), () => {
    a.classList.remove("lock-body-scroll");
  };
}, []), /* @__PURE__ */ o.createElement(Wt, null, /* @__PURE__ */ o.createElement($a.Provider, {
  value: e
}, /* @__PURE__ */ o.createElement(Yc, {
  onClick: e
}, /* @__PURE__ */ o.createElement(ht, {
  onEscape: e
}, /* @__PURE__ */ o.createElement(Qc, {
  "aria-labelledby": t,
  onClick: (a) => a.stopPropagation(),
  background: "neutral0",
  hasRadius: !0,
  shadow: "popupShadow",
  role: "dialog",
  "aria-modal": !0,
  ...n
}))))));
Fc.propTypes = {
  labelledBy: r.exports.string.isRequired,
  onClose: r.exports.func.isRequired
};
const _c = g(y)`
  border-radius: ${({ theme: e }) => e.borderRadius} ${({ theme: e }) => e.borderRadius} 0 0;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.neutral150};
`, Ta = ({ children: e, closeLabel: t }) => {
  const n = Uc();
  return /* @__PURE__ */ o.createElement(_c, {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 5,
    paddingRight: 5,
    background: "neutral100"
  }, /* @__PURE__ */ o.createElement(C, {
    justifyContent: "space-between"
  }, e, /* @__PURE__ */ o.createElement(vt, {
    onClick: n,
    "aria-label": t,
    icon: /* @__PURE__ */ o.createElement(Fe, null)
  })));
};
Ta.defaultProps = {
  closeLabel: "Close the modal"
};
Ta.propTypes = {
  children: r.exports.node.isRequired,
  closeLabel: r.exports.string
};
const Hc = g(y)`
  border-radius: 0 0 ${({ theme: e }) => e.borderRadius} ${({ theme: e }) => e.borderRadius};
  border-top: 1px solid ${({ theme: e }) => e.colors.neutral150};
`, _o = g(C)`
  & > * + * {
    margin-left: ${({ theme: e }) => e.spaces[2]};
  }
`, wa = ({ startActions: e, endActions: t }) => /* @__PURE__ */ o.createElement(Hc, {
  paddingTop: 4,
  paddingBottom: 4,
  paddingLeft: 5,
  paddingRight: 5,
  background: "neutral100"
}, /* @__PURE__ */ o.createElement(C, {
  justifyContent: "space-between"
}, /* @__PURE__ */ o.createElement(_o, null, e), /* @__PURE__ */ o.createElement(_o, null, t)));
wa.defaultProps = {
  endActions: void 0,
  startActions: void 0
};
wa.propTypes = {
  endActions: r.exports.node,
  startActions: r.exports.node
};
const Vc = g(y)`
  overflow: auto;
  max-height: 60vh;
`, ju = (e) => /* @__PURE__ */ o.createElement(Vc, {
  padding: 7,
  ...e
});
let fr = /* @__PURE__ */ new Map(), $r = !1;
try {
  $r = new Intl.NumberFormat("de-DE", {
    signDisplay: "exceptZero"
  }).resolvedOptions().signDisplay === "exceptZero";
} catch {
}
let jt = !1;
try {
  jt = new Intl.NumberFormat("de-DE", {
    style: "unit",
    unit: "degree"
  }).resolvedOptions().style === "unit";
} catch {
}
const Na = {
  degree: {
    narrow: {
      default: "\xB0",
      "ja-JP": " \u5EA6",
      "zh-TW": "\u5EA6",
      "sl-SI": " \xB0"
    }
  }
};
class Gc {
  format(t) {
    let n = "";
    if (!$r && this.options.signDisplay != null ? n = Zc(this.numberFormatter, this.options.signDisplay, t) : n = this.numberFormatter.format(t), this.options.style === "unit" && !jt) {
      var a;
      let { unit: i, unitDisplay: s = "short", locale: l } = this.resolvedOptions(), c = (a = Na[i]) === null || a === void 0 ? void 0 : a[s];
      n += c[l] || c.default;
    }
    return n;
  }
  formatToParts(t) {
    return this.numberFormatter.formatToParts(t);
  }
  formatRange(t, n) {
    if (typeof this.numberFormatter.formatRange == "function")
      return this.numberFormatter.formatRange(t, n);
    if (n < t)
      throw new RangeError("End date must be >= start date");
    return `${this.format(t)} \u2013 ${this.format(n)}`;
  }
  formatRangeToParts(t, n) {
    if (typeof this.numberFormatter.formatRangeToParts == "function")
      return this.numberFormatter.formatRangeToParts(t, n);
    if (n < t)
      throw new RangeError("End date must be >= start date");
    let a = this.numberFormatter.formatToParts(t), i = this.numberFormatter.formatToParts(n);
    return [
      ...a.map(
        (s) => ({
          ...s,
          source: "startRange"
        })
      ),
      {
        type: "literal",
        value: " \u2013 ",
        source: "shared"
      },
      ...i.map(
        (s) => ({
          ...s,
          source: "endRange"
        })
      )
    ];
  }
  resolvedOptions() {
    let t = this.numberFormatter.resolvedOptions();
    return !$r && this.options.signDisplay != null && (t = {
      ...t,
      signDisplay: this.options.signDisplay
    }), !jt && this.options.style === "unit" && (t = {
      ...t,
      style: "unit",
      unit: this.options.unit,
      unitDisplay: this.options.unitDisplay
    }), t;
  }
  constructor(t, n = {}) {
    this.numberFormatter = Kc(t, n), this.options = n;
  }
}
function Kc(e, t = {}) {
  let { numberingSystem: n } = t;
  if (n && e.indexOf("-u-nu-") === -1 && (e = `${e}-u-nu-${n}`), t.style === "unit" && !jt) {
    var a;
    let { unit: l, unitDisplay: c = "short" } = t;
    if (!l)
      throw new Error('unit option must be provided with style: "unit"');
    if (!(!((a = Na[l]) === null || a === void 0) && a[c]))
      throw new Error(`Unsupported unit ${l} with unitDisplay = ${c}`);
    t = {
      ...t,
      style: "decimal"
    };
  }
  let i = e + (t ? Object.entries(t).sort(
    (l, c) => l[0] < c[0] ? -1 : 1
  ).join() : "");
  if (fr.has(i))
    return fr.get(i);
  let s = new Intl.NumberFormat(e, t);
  return fr.set(i, s), s;
}
function Zc(e, t, n) {
  if (t === "auto")
    return e.format(n);
  if (t === "never")
    return e.format(Math.abs(n));
  {
    let a = !1;
    if (t === "always" ? a = n > 0 || Object.is(n, 0) : t === "exceptZero" && (Object.is(n, -0) || Object.is(n, 0) ? n = Math.abs(n) : a = n > 0), a) {
      let i = e.format(-n), s = e.format(n), l = i.replace(s, "").replace(/\u200e|\u061C/, "");
      return [
        ...l
      ].length !== 1 && console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"), i.replace(s, "!!!").replace(l, "+").replace("!!!", s);
    } else
      return e.format(n);
  }
}
const Xc = new RegExp("^.*\\(.*\\).*$"), Jc = [
  "latn",
  "arab",
  "hanidec"
];
class ed {
  parse(t) {
    return gr(this.locale, this.options, t).parse(t);
  }
  isValidPartialNumber(t, n, a) {
    return gr(this.locale, this.options, t).isValidPartialNumber(t, n, a);
  }
  getNumberingSystem(t) {
    return gr(this.locale, this.options, t).options.numberingSystem;
  }
  constructor(t, n = {}) {
    this.locale = t, this.options = n;
  }
}
const Ho = /* @__PURE__ */ new Map();
function gr(e, t, n) {
  let a = Vo(e, t);
  if (!e.includes("-nu-") && !a.isValidPartialNumber(n)) {
    for (let i of Jc)
      if (i !== a.options.numberingSystem) {
        let s = Vo(e + (e.includes("-u-") ? "-nu-" : "-u-nu-") + i, t);
        if (s.isValidPartialNumber(n))
          return s;
      }
  }
  return a;
}
function Vo(e, t) {
  let n = e + (t ? Object.entries(t).sort(
    (i, s) => i[0] < s[0] ? -1 : 1
  ).join() : ""), a = Ho.get(n);
  return a || (a = new td(e, t), Ho.set(n, a)), a;
}
class td {
  parse(t) {
    let n = this.sanitize(t);
    n = wt(n, this.symbols.group, "").replace(this.symbols.decimal, ".").replace(this.symbols.minusSign, "-").replace(this.symbols.numeral, this.symbols.index);
    let a = n ? +n : NaN;
    if (isNaN(a))
      return NaN;
    if (this.options.currencySign === "accounting" && Xc.test(t) && (a = -1 * a), this.options.style === "percent") {
      a /= 100;
      var i;
      a = +a.toFixed(((i = this.options.maximumFractionDigits) !== null && i !== void 0 ? i : 0) + 2);
    }
    return a;
  }
  sanitize(t) {
    return t = t.replace(this.symbols.literals, ""), t = t.replace("-", this.symbols.minusSign), this.options.numberingSystem === "arab" && (t = t.replace(",", this.symbols.decimal), t = t.replace(String.fromCharCode(1548), this.symbols.decimal), t = wt(t, ".", this.symbols.group)), this.options.locale === "fr-FR" && (t = wt(t, ".", String.fromCharCode(8239))), t;
  }
  isValidPartialNumber(t, n = -1 / 0, a = 1 / 0) {
    return t = this.sanitize(t), t.startsWith(this.symbols.minusSign) && n < 0 ? t = t.slice(this.symbols.minusSign.length) : this.symbols.plusSign && t.startsWith(this.symbols.plusSign) && a > 0 && (t = t.slice(this.symbols.plusSign.length)), t.startsWith(this.symbols.group) ? !1 : (t = wt(t, this.symbols.group, "").replace(this.symbols.numeral, "").replace(this.symbols.decimal, ""), t.length === 0);
  }
  constructor(t, n = {}) {
    this.formatter = new Intl.NumberFormat(t, n), this.options = this.formatter.resolvedOptions(), this.symbols = rd(this.formatter, this.options, n);
  }
}
const Go = /* @__PURE__ */ new Set([
  "decimal",
  "fraction",
  "integer",
  "minusSign",
  "plusSign",
  "group"
]);
function rd(e, t, n) {
  var a, i, s, l;
  let c = e.formatToParts(-10000.111), p = e.formatToParts(10000.111), d = e.formatToParts(1);
  var f;
  let u = (f = (a = c.find(
    (N) => N.type === "minusSign"
  )) === null || a === void 0 ? void 0 : a.value) !== null && f !== void 0 ? f : "-", m = (i = p.find(
    (N) => N.type === "plusSign"
  )) === null || i === void 0 ? void 0 : i.value;
  !m && ((n == null ? void 0 : n.signDisplay) === "exceptZero" || (n == null ? void 0 : n.signDisplay) === "always") && (m = "+");
  let h = (s = c.find(
    (N) => N.type === "decimal"
  )) === null || s === void 0 ? void 0 : s.value, b = (l = c.find(
    (N) => N.type === "group"
  )) === null || l === void 0 ? void 0 : l.value, x = c.filter(
    (N) => !Go.has(N.type)
  ).map(
    (N) => Ko(N.value)
  ), v = d.filter(
    (N) => !Go.has(N.type)
  ).map(
    (N) => Ko(N.value)
  ), T = [
    .../* @__PURE__ */ new Set([
      ...v,
      ...x
    ])
  ].sort(
    (N, I) => I.length - N.length
  ), z = T.length === 0 ? new RegExp("[\\p{White_Space}]", "gu") : new RegExp(`${T.join("|")}|[\\p{White_Space}]`, "gu"), O = [
    ...new Intl.NumberFormat(t.locale, {
      useGrouping: !1
    }).format(9876543210)
  ].reverse(), $ = new Map(O.map(
    (N, I) => [
      N,
      I
    ]
  )), E = new RegExp(`[${O.join("")}]`, "g");
  return {
    minusSign: u,
    plusSign: m,
    decimal: h,
    group: b,
    literals: z,
    numeral: E,
    index: (N) => String($.get(N))
  };
}
function wt(e, t, n) {
  return e.replaceAll ? e.replaceAll(t, n) : e.split(t).join(n);
}
function Ko(e) {
  return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
const Zo = g.button`
  display: flex;
  height: 1rem;
  align-items: ${({ reverse: e }) => e ? "flex-end" : "flex-start"};
  transform: translateY(${({ reverse: e }) => e ? "-2px" : "2px"});
  cursor: ${({ disabled: e }) => e ? "not-allowed" : void 0};
  svg {
    display: block;
    height: ${4 / 16}rem;
    transform: ${({ reverse: e }) => e ? "rotateX(180deg)" : void 0};
  }
`, Xo = "", Jr = o.forwardRef(
  ({
    size: e,
    startAction: t,
    name: n,
    hint: a,
    error: i,
    label: s,
    labelAction: l,
    locale: c,
    id: p,
    onValueChange: d,
    value: f,
    step: u,
    required: m,
    disabled: h,
    ...b
  }, x) => {
    const [v, T] = oe(f == null ? Xo : String(f)), z = se("numberinput", p), O = c || vr(), $ = Y(new ed(O)), E = Y(new Gc(vr(), { maximumFractionDigits: 20 })), Q = (K) => {
      const _ = K.target.value;
      if ($.current.isValidPartialNumber(_)) {
        const re = _ === "" ? void 0 : $.current.parse(_);
        re === void 0 || isNaN(re) ? d(void 0) : d(re), T(K.target.value);
      }
    }, N = (K) => {
      if (v === void 0) {
        d(u), T(String(u));
        return;
      }
      if (isNaN(v)) {
        const _ = $.current.parse(v), U = (isNaN(_) ? 0 : _) + u, ae = E.current.format(U);
        d(U), T(K ? String(U) : ae);
        return;
      }
      d(f + u), T(String(f + u));
    }, I = (K) => {
      if (v === void 0) {
        d(-u), T(String(-u));
        return;
      }
      if (isNaN(v)) {
        const _ = $.current.parse(v), U = (isNaN(_) ? 0 : _) - u, ae = E.current.format(U);
        d(U), T(K ? String(U) : ae);
        return;
      }
      d(f - u), T(String(f - u));
    }, P = (K) => {
      if (!h)
        switch (K.key) {
          case S.DOWN: {
            K.preventDefault(), I(!0);
            break;
          }
          case S.UP: {
            K.preventDefault(), N(!0);
            break;
          }
        }
    }, G = () => {
      T(v != null ? v : Xo);
    }, W = () => {
      T(f === void 0 ? void 0 : E.current.format(f));
    };
    return /* @__PURE__ */ o.createElement(Ee, {
      name: n,
      hint: a,
      error: i,
      id: z
    }, /* @__PURE__ */ o.createElement(ne, {
      spacing: 1
    }, s && /* @__PURE__ */ o.createElement(Ne, {
      required: m,
      action: l
    }, s), /* @__PURE__ */ o.createElement(tt, {
      ref: x,
      startAction: t,
      disabled: h,
      type: "text",
      inputmode: "decimal",
      onChange: Q,
      onKeyDown: P,
      onBlur: W,
      onFocus: G,
      value: v != null ? v : "",
      size: e,
      endAction: /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement(Zo, {
        disabled: h,
        "aria-hidden": !0,
        reverse: !0,
        onClick: () => {
          N();
        },
        tabIndex: -1,
        type: "button",
        "data-testid": "ArrowUp"
      }, /* @__PURE__ */ o.createElement(Ie, {
        as: Le,
        color: "neutral500"
      })), /* @__PURE__ */ o.createElement(Zo, {
        disabled: h,
        "aria-hidden": !0,
        onClick: () => {
          I();
        },
        tabIndex: -1,
        type: "button",
        "data-testid": "ArrowDown"
      }, /* @__PURE__ */ o.createElement(Ie, {
        as: Le,
        color: "neutral500"
      }))),
      ...b
    }), /* @__PURE__ */ o.createElement(qe, null), /* @__PURE__ */ o.createElement(Be, null)));
  }
);
Jr.displayName = "NumberInput";
Jr.defaultProps = {
  "aria-label": void 0,
  disabled: !1,
  error: void 0,
  hint: void 0,
  id: void 0,
  label: void 0,
  labelAction: void 0,
  required: !1,
  size: "M",
  startAction: void 0,
  step: 1,
  value: void 0
};
Jr.propTypes = {
  "aria-label": r.exports.string,
  disabled: r.exports.bool,
  error: r.exports.string,
  hint: r.exports.oneOfType([r.exports.string, r.exports.node, r.exports.arrayOf(r.exports.node)]),
  id: r.exports.string,
  label: r.exports.string,
  labelAction: r.exports.element,
  locale: r.exports.string,
  name: r.exports.string.isRequired,
  onValueChange: r.exports.func.isRequired,
  required: r.exports.bool,
  size: r.exports.oneOf(Object.keys(De.input)),
  startAction: r.exports.element,
  step: r.exports.number,
  value: r.exports.number
};
const Da = Te({ activePage: 1, pageCount: 1 }), eo = () => we(Da), od = g.nav``, nd = g(C)`
  & > * + * {
    margin-left: ${({ theme: e }) => e.spaces[1]};
  }
`, Ca = ({ children: e, label: t, activePage: n, pageCount: a }) => /* @__PURE__ */ o.createElement(Da.Provider, {
  value: { activePage: n, pageCount: a }
}, /* @__PURE__ */ o.createElement(od, {
  "aria-label": t
}, /* @__PURE__ */ o.createElement(nd, {
  as: "ul"
}, ce.map(e, (i, s) => /* @__PURE__ */ o.createElement("li", {
  key: s
}, i)))));
Ca.defaultProps = {
  label: "pagination"
};
Ca.propTypes = {
  activePage: r.exports.number.isRequired,
  children: r.exports.node.isRequired,
  label: r.exports.string,
  pageCount: r.exports.number.isRequired
};
const Ia = g(w)`
  line-height: revert;
`, ad = {
  active: !0
}, to = g(Ce).withConfig({
  shouldForwardProp: (e, t) => !ad[e] && t(e)
})`
  padding: ${({ theme: e }) => e.spaces[3]};
  border-radius: ${({ theme: e }) => e.borderRadius};
  box-shadow: ${({ active: e, theme: t }) => e ? t.shadows.filterShadow : void 0};
  text-decoration: none;
  display: flex;

  ${st}
`, id = g(to)`
  color: ${({ theme: e, active: t }) => t ? e.colors.primary700 : e.colors.neutral800};
  background: ${({ theme: e, active: t }) => t ? e.colors.neutral0 : void 0};

  &:hover {
    box-shadow: ${({ theme: e }) => e.shadows.filterShadow};
  }
`, ka = g(to)`
  font-size: 0.7rem;
  svg path {
    fill: ${(e) => e["aria-disabled"] ? e.theme.colors.neutral300 : e.theme.colors.neutral600};
  }

  &:focus,
  &:hover {
    svg path {
      fill: ${(e) => e["aria-disabled"] ? e.theme.colors.neutral300 : e.theme.colors.neutral700};
    }
  }

  ${(e) => e["aria-disabled"] ? `
  pointer-events: none;
    ` : void 0}
`, sd = g(to)`
  color: ${({ theme: e }) => e.colors.neutral800};
`, Oa = ({ children: e, to: t, ...n }) => {
  const { activePage: a } = eo(), i = a === 1;
  return /* @__PURE__ */ o.createElement(ka, {
    to: i ? "#" : t,
    "aria-disabled": i,
    tabIndex: i ? -1 : void 0,
    ...n
  }, /* @__PURE__ */ o.createElement(de, null, e), /* @__PURE__ */ o.createElement(Nr, {
    "aria-hidden": !0
  }));
};
Oa.displayName = "PreviousLink";
const Ra = ({ children: e, to: t, ...n }) => {
  const { activePage: a, pageCount: i } = eo(), s = a === i;
  return /* @__PURE__ */ o.createElement(ka, {
    to: s ? "#" : t,
    "aria-disabled": s,
    tabIndex: s ? -1 : void 0,
    ...n
  }, /* @__PURE__ */ o.createElement(de, null, e), /* @__PURE__ */ o.createElement(Pt, {
    "aria-hidden": !0
  }));
};
Ra.displayName = "NextLink";
const Aa = ({ number: e, children: t, ...n }) => {
  const { activePage: a } = eo(), i = a === e;
  return /* @__PURE__ */ o.createElement(id, {
    ...n,
    active: i
  }, /* @__PURE__ */ o.createElement(de, null, t), /* @__PURE__ */ o.createElement(Ia, {
    "aria-hidden": !0,
    variant: "pi",
    fontWeight: i ? "bold" : null
  }, e));
};
Aa.displayName = "PageLink";
const ld = ({ children: e, ...t }) => /* @__PURE__ */ o.createElement(sd, {
  ...t,
  as: "div"
}, /* @__PURE__ */ o.createElement(de, null, e), /* @__PURE__ */ o.createElement(Ia, {
  "aria-hidden": !0,
  variant: "pi"
}, "\u2026"));
Aa.propTypes = {
  children: r.exports.node.isRequired,
  number: r.exports.number.isRequired
};
const za = {
  children: r.exports.node.isRequired,
  to: r.exports.string.isRequired
};
Ra.propTypes = za;
Oa.propTypes = za;
ld.propTypes = {
  children: r.exports.node.isRequired
};
const Sa = g.div`
  background: ${({ theme: e }) => e.colors.neutral600};
  border-radius: ${({ theme: e }) => e.borderRadius};
  position: relative;

  width: 78px;
  height: ${({ theme: e }) => e.spaces[1]};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    border-radius: ${({ theme: e }) => e.borderRadius};
    width: ${({ value: e }) => `${e}%`};
    background: ${({ theme: e }) => e.colors.neutral150};
  }
`, cd = g(Sa)`
  width: 102px;
  height: ${({ theme: e }) => e.spaces[2]};
`, La = ({ min: e, max: t, value: n, children: a, size: i, ...s }) => {
  const l = {
    role: "progressbar",
    "aria-valuenow": n,
    "aria-valuemin": e,
    "aria-valuemax": t
  };
  return i === "M" ? /* @__PURE__ */ o.createElement(cd, {
    ...l,
    value: n,
    "aria-label": a,
    ...s
  }) : /* @__PURE__ */ o.createElement(Sa, {
    ...l,
    value: n,
    "aria-label": a,
    ...s
  });
};
La.defaultProps = {
  min: 0,
  max: 100,
  value: 0,
  size: "M"
};
La.propTypes = {
  children: r.exports.node.isRequired,
  max: r.exports.number,
  min: r.exports.number,
  size: r.exports.oneOf(["S", "M"]),
  value: r.exports.number
};
const dd = g(w)`
  display: flex;
  align-items: center;
`, ud = ({ children: e, ...t }) => /* @__PURE__ */ o.createElement(dd, {
  as: "label",
  textColor: "neutral800"
}, /* @__PURE__ */ o.createElement(qt, {
  ...t
}), /* @__PURE__ */ o.createElement(y, {
  paddingLeft: 2
}, e));
ud.propTypes = {
  children: r.exports.node.isRequired,
  value: r.exports.any.isRequired
};
const pd = g(C)`
  font-size: 0.5rem;
  svg path {
    fill: ${({ theme: e }) => e.colors.neutral400};
  }
`, ja = g(C)`
  font-size: 0.8rem;

  svg path {
    fill: ${({ theme: e }) => e.colors.neutral800};
  }
`, fd = g.div`
  border-radius: ${({ theme: e }) => e.borderRadius};
  box-shadow: ${({ theme: e }) => e.shadows.filterShadow};

  &:focus-within {
    ${ja} {
      svg path {
        fill: ${({ theme: e }) => e.colors.primary600};
      }
    }
  }

  ${Ct} {
    border: 1px solid transparent;
  }

  ${Je(Ct)}
`, Zt = Pe(({ name: e, size: t, children: n, value: a, onClear: i, clearLabel: s, ...l }, c) => {
  const p = Y(null), d = a.length > 0, f = (m) => {
    i(m), p.current.focus();
  }, u = c || p;
  return /* @__PURE__ */ o.createElement(fd, null, /* @__PURE__ */ o.createElement(Ee, {
    name: e
  }, /* @__PURE__ */ o.createElement(de, null, /* @__PURE__ */ o.createElement(Ne, null, n)), /* @__PURE__ */ o.createElement(tt, {
    ref: u,
    value: a,
    startAction: /* @__PURE__ */ o.createElement(ja, null, /* @__PURE__ */ o.createElement(ln, {
      "aria-hidden": !0
    })),
    size: t,
    endAction: d ? /* @__PURE__ */ o.createElement(Qn, {
      label: s,
      onClick: f
    }, /* @__PURE__ */ o.createElement(pd, null, /* @__PURE__ */ o.createElement(Fe, null))) : void 0,
    ...l
  })));
});
Zt.displayName = "Searchbar";
Zt.defaultProps = {
  value: "",
  size: "M"
};
Zt.propTypes = {
  children: r.exports.node.isRequired,
  clearLabel: r.exports.string.isRequired,
  name: r.exports.string.isRequired,
  onClear: r.exports.func.isRequired,
  size: r.exports.oneOf(Object.keys(De.input)),
  value: r.exports.string
};
const gd = (e) => /* @__PURE__ */ o.createElement("form", {
  ...e,
  role: "search"
}), Ye = {
  Keyboard: "down:keyboard",
  Mouse: "down:mouse"
}, Xe = { Keyboard: "up:keyboard", Mouse: "up:mouse" }, md = g.button`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  background: transparent;
  border: none;

  // The focus state is moved to the parent thanks to :focus-within
  &:focus {
    outline: none;
  }

  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`, Xt = Pe(({ labelledBy: e, expanded: t, onTrigger: n, disabled: a, ...i }, s) => {
  const l = (c) => {
    if (!a)
      switch (c.key) {
        case S.DOWN:
        case S.SPACE:
        case S.ENTER: {
          c.preventDefault(), n(Ye.Keyboard);
          break;
        }
        case S.UP: {
          c.preventDefault(), n(Xe.Keyboard);
          break;
        }
      }
  };
  return /* @__PURE__ */ o.createElement(md, {
    ref: s,
    "aria-labelledby": e,
    "aria-haspopup": "listbox",
    "aria-expanded": t,
    onKeyDown: l,
    "aria-disabled": a,
    type: "button",
    ...i
  });
});
Xt.displayName = "SelectButton";
Xt.defaultProps = {
  expanded: !1,
  disabled: !1
};
Xt.propTypes = {
  disabled: r.exports.bool,
  expanded: r.exports.bool,
  labelledBy: r.exports.string.isRequired,
  onTrigger: r.exports.func.isRequired
};
const ot = (e, t) => {
  e.setAttribute("aria-activedescendant", t.getAttribute("id")), e.querySelectorAll('[role="option"]').forEach((i) => i.classList.remove("is-focused")), t.classList.add("is-focused"), Vn(t, {
    scrollMode: "if-needed",
    block: "nearest",
    inline: "nearest"
  }).forEach(({ el: i, top: s, left: l }) => {
    i.scrollTop = s, i.scrollLeft = l;
  });
}, mr = (e) => {
  const t = e.getAttribute("aria-activedescendant");
  return e.querySelector(`#${t}`);
}, bd = (e) => {
  const t = Y(null);
  return ee(() => {
    t.current.focus();
  }, []), ee(() => {
    if (!t.current)
      return;
    const n = t.current.querySelector('[aria-selected="true"]'), a = t.current.querySelectorAll('[role="option"]');
    let i;
    n ? i = n : e === Xe.Keyboard ? i = a[a.length - 1] : e === Ye.Keyboard && (i = a[0]), i && (e === Xe.Keyboard || e === Ye.Keyboard) && ot(t.current, i);
  }, []), t;
}, ro = ({ labelledBy: e, onSelectItem: t, children: n, multi: a, onEscape: i, expanded: s }) => {
  const l = bd(s), c = (p) => {
    switch (p.key) {
      case S.ESCAPE: {
        p.stopPropagation(), i();
        break;
      }
      case S.DOWN: {
        p.preventDefault();
        const d = mr(l.current);
        if (!d)
          return;
        const f = d.nextSibling;
        if (f)
          ot(l.current, f);
        else {
          const m = l.current.querySelectorAll('[role="option"]')[0];
          ot(l.current, m);
        }
        break;
      }
      case S.UP: {
        p.preventDefault();
        const d = mr(l.current);
        if (!d)
          return;
        const f = d.previousSibling;
        if (f)
          ot(l.current, f);
        else {
          const u = l.current.querySelectorAll('[role="option"]'), m = u[u.length - 1];
          ot(l.current, m);
        }
        break;
      }
      case S.SPACE:
      case S.ENTER: {
        p.preventDefault();
        const d = mr(l.current);
        d.getAttribute("data-opt-group") ? t(
          d.getAttribute("data-opt-group-children").split(","),
          d.getAttribute("data-opt-group")
        ) : t(d.getAttribute("data-strapi-value")), a || i();
        break;
      }
    }
  };
  return /* @__PURE__ */ o.createElement(ne, {
    as: "ul",
    spacing: 1,
    role: "listbox",
    "aria-labelledby": e,
    tabIndex: -1,
    ref: l,
    onKeyDown: c,
    onBlur: i,
    "aria-multiselectable": a
  }, n);
};
ro.defaultProps = {
  labelledBy: void 0,
  multi: !1
};
ro.propTypes = {
  children: r.exports.node.isRequired,
  expanded: r.exports.oneOf([Xe.Keyboard, Xe.Mouse, Ye.Keyboard, Ye.Mouse]).isRequired,
  labelledBy: r.exports.string,
  multi: r.exports.bool,
  onEscape: r.exports.func.isRequired,
  onSelectItem: r.exports.func.isRequired
};
const hd = (e) => {
  const t = Y(null), n = Y(null), a = Y();
  return e && (a.current = e), ee(() => {
    !n.current || e || (a.current === Ye.Keyboard || a.current === Xe.Keyboard) && t.current.focus();
  }, [e]), ee(() => {
    n.current = !0;
  }, []), t;
}, Jo = (e) => e.replace(":", "-"), xd = g(y)`
  svg {
    height: ${8 / 16}rem;
    width: ${8 / 16}rem;
  }

  svg path {
    fill: ${({ theme: e, ...t }) => t["aria-disabled"] ? e.colors.neutral600 : e.colors.primary600};
  }
`, yd = g(w)`
  border-right: 1px solid ${({ theme: e, disabled: t }) => t ? e.colors.neutral300 : e.colors.primary200};
  color: inherit;
  padding-right: ${({ theme: e }) => e.spaces[2]};
`, Jt = ({ children: e, icon: t, disabled: n, onClick: a, ...i }) => {
  const s = (l) => {
    n || a(l);
  };
  return /* @__PURE__ */ o.createElement(xd, {
    as: "button",
    background: n ? "neutral200" : "primary100",
    color: n ? "neutral700" : "primary600",
    paddingLeft: 3,
    paddingRight: 3,
    onClick: s,
    "aria-disabled": n,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: n ? "neutral300" : "primary200",
    hasRadius: !0,
    height: `${32 / 16}rem`,
    ...i
  }, /* @__PURE__ */ o.createElement(C, null, /* @__PURE__ */ o.createElement(yd, {
    disabled: n,
    variant: "pi",
    fontWeight: "bold",
    as: "span"
  }, e), /* @__PURE__ */ o.createElement(y, {
    paddingLeft: 2
  }, /* @__PURE__ */ o.createElement(C, null, t))));
};
Jt.displayName = "Tag";
Jt.defaultProps = {
  disabled: !1,
  onClick: void 0
};
Jt.propTypes = {
  children: r.exports.node.isRequired,
  disabled: r.exports.bool,
  icon: r.exports.element.isRequired,
  onClick: r.exports.func
};
const Ed = g.div`
  margin-bottom: ${({ theme: e }) => e.spaces[1]};
`, vd = g(Jt)`
  position: relative;
  z-index: 1;
  margin-left: ${({ theme: e }) => e.spaces[1]};
  margin-top: ${({ theme: e }) => e.spaces[1]};
`, oo = ({ tags: e, onRemoveTag: t, disabled: n }) => /* @__PURE__ */ o.createElement(Ed, null, /* @__PURE__ */ o.createElement(C, {
  wrap: "wrap"
}, e.map((a) => /* @__PURE__ */ o.createElement(vd, {
  icon: /* @__PURE__ */ o.createElement(Fe, null),
  disabled: n,
  onClick: () => t(a.value),
  tabIndex: -1,
  key: `tag-${a.value}`
}, a.label))));
oo.defaultProps = {
  disabled: !1,
  tags: []
};
oo.propTypes = {
  disabled: r.exports.bool,
  onRemoveTag: r.exports.func.isRequired,
  tags: r.exports.arrayOf(
    r.exports.shape({ label: r.exports.string, value: r.exports.oneOfType([r.exports.string, r.exports.number]) })
  )
};
const Md = g(C)`
  width: 100%;
`, er = ({
  label: e,
  labelAction: t,
  id: n,
  children: a,
  customizeContent: i,
  placeholder: s,
  onChange: l,
  value: c,
  hint: p,
  error: d,
  disabled: f,
  clearLabel: u,
  onClear: m,
  onReachEnd: h,
  multi: b,
  required: x,
  size: v,
  startIcon: T,
  withTags: z,
  ...O
}) => {
  const $ = se("select", n), [E, Q] = oe(void 0), N = hd(E), I = Y(null), P = `${$}-label`, G = `${$}-content`, W = d ? `${$}-error` : p ? `${$}-hint` : void 0;
  if (z && !b)
    throw new Error('The "withTags" props can only be used when the "multi" prop is present');
  const K = () => {
    Q(void 0);
  }, _ = () => {
    f || (m(), N.current.focus());
  }, re = (D) => {
    D.preventDefault(), !f && (D.nativeEvent.which === 3 || D.nativeEvent.button === 2 || Q(Ye.Mouse));
  }, U = (D, j = !0) => {
    b ? l(c.includes(D) ? c.filter((A) => A !== D) : [...c, D]) : (l(D), j && Q(void 0));
  }, ae = (D) => {
    l(
      c.includes(D[0]) ? c.filter(function(j) {
        return this.indexOf(j) < 0;
      }, D) : [...c, ...D]
    );
  };
  let pe, fe = [];
  const M = (D, j) => {
    const A = `${$}-option-${D.props.value}`, q = b ? c.includes(D.props.value) : D.props.value === c;
    return q && (z ? fe.push({ label: D.props.children, value: D.props.value }) : pe = D.props.children), ye(D, {
      id: Jo(A),
      onClick: () => U(D.props.value),
      selected: q,
      multi: b,
      isChild: j
    });
  }, k = ce.toArray(a).map((D) => {
    if (D.type.displayName === "OptGroup") {
      const j = `${$}-option-${D.props.label}`, A = D.props.children.every((L) => c.includes(L.props.value)), q = !A && D.props.children.some((L) => c.includes(L.props.value));
      return ye(D, {
        id: Jo(j),
        onClick: () => ae(D.props.children.map((L) => L.props.value)),
        selected: A,
        indeterminate: q,
        multi: b,
        children: ce.toArray(D.props.children).map((L) => M(L, !0)),
        value: D.props.label
      });
    } else
      return M(D);
  });
  return /* @__PURE__ */ o.createElement(Ee, {
    hint: p,
    error: d,
    id: $
  }, /* @__PURE__ */ o.createElement(ne, {
    spacing: e || p || d ? 1 : 0
  }, e && /* @__PURE__ */ o.createElement(Ne, {
    required: x,
    as: "span",
    id: P,
    action: t
  }, e), /* @__PURE__ */ o.createElement(Ks, {
    size: v,
    hasError: Boolean(d),
    disabled: f,
    ref: I
  }, /* @__PURE__ */ o.createElement(Xt, {
    ref: N,
    labelledBy: `${P} ${G}`,
    "aria-describedby": W,
    expanded: Boolean(E),
    onTrigger: Q,
    id: $,
    hasError: Boolean(d),
    disabled: f,
    onMouseDown: re,
    ...O
  }), /* @__PURE__ */ o.createElement(Md, {
    justifyContent: "space-between"
  }, /* @__PURE__ */ o.createElement(C, null, T && /* @__PURE__ */ o.createElement(y, {
    paddingLeft: 3,
    "aria-hidden": !0
  }, T), z && /* @__PURE__ */ o.createElement(oo, {
    tags: fe,
    onRemoveTag: U,
    disabled: f
  }), /* @__PURE__ */ o.createElement(y, {
    paddingLeft: 4,
    paddingRight: 4
  }, z ? /* @__PURE__ */ o.createElement(o.Fragment, null, !c || c.length === 0 ? /* @__PURE__ */ o.createElement(w, {
    ellipsis: !0,
    id: G,
    textColor: "neutral600"
  }, s) : null, /* @__PURE__ */ o.createElement(de, {
    as: "span",
    id: G
  }, i ? i(c) : pe || s, c.join(", "))) : /* @__PURE__ */ o.createElement(w, {
    ellipsis: !0,
    id: G,
    textColor: c ? "neutral800" : "neutral600"
  }, i ? i(c) : pe || s, b && /* @__PURE__ */ o.createElement(de, {
    as: "span"
  }, c.join(", "))))), /* @__PURE__ */ o.createElement(C, null, (b && c && c.length || !b && c) && m && /* @__PURE__ */ o.createElement(Pr, {
    as: "button",
    type: "button",
    onClick: _,
    "aria-label": u,
    "aria-disabled": f
  }, /* @__PURE__ */ o.createElement(Fe, null)), /* @__PURE__ */ o.createElement(Kn, {
    paddingLeft: 3,
    "aria-hidden": !0,
    as: "button",
    type: "button",
    onMouseDown: re,
    tabIndex: -1,
    disabled: f
  }, /* @__PURE__ */ o.createElement(Le, null))))), /* @__PURE__ */ o.createElement(qe, null), /* @__PURE__ */ o.createElement(Be, null)), E && /* @__PURE__ */ o.createElement(rt, {
    source: I,
    spacing: 4,
    fullWidth: !0,
    intersectionId: `select-list-intersection-${$}`,
    onReachEnd: h
  }, /* @__PURE__ */ o.createElement(ro, {
    selectId: $,
    labelledBy: e ? P : void 0,
    onEscape: K,
    expanded: E,
    onSelectItem: (D, j) => j ? ae(D) : U(D, !1),
    multi: b
  }, k)));
};
er.defaultProps = {
  "aria-label": void 0,
  children: [],
  clearLabel: "Clear",
  customizeContent: void 0,
  disabled: !1,
  id: void 0,
  label: void 0,
  labelAction: void 0,
  multi: !1,
  onChange: () => {
  },
  onClear: void 0,
  onReachEnd: void 0,
  value: void 0,
  hint: void 0,
  error: void 0,
  placeholder: "Select...",
  required: !1,
  size: "M",
  startIcon: void 0,
  withTags: !1
};
er.propTypes = {
  "aria-label": r.exports.string,
  children: r.exports.oneOfType([r.exports.arrayOf(r.exports.node), r.exports.node]),
  clearLabel: r.exports.string,
  customizeContent: r.exports.func,
  disabled: r.exports.bool,
  error: r.exports.string,
  hint: r.exports.oneOfType([r.exports.string, r.exports.node, r.exports.arrayOf(r.exports.node)]),
  id: r.exports.oneOfType([r.exports.string, r.exports.number]),
  label: r.exports.string,
  labelAction: r.exports.element,
  multi: r.exports.bool,
  onChange: r.exports.func,
  onClear: r.exports.func,
  onReachEnd: r.exports.func,
  placeholder: r.exports.string,
  required: r.exports.bool,
  size: r.exports.oneOf(Object.keys(De.input)),
  startIcon: r.exports.element,
  value: r.exports.oneOfType([
    r.exports.arrayOf(r.exports.oneOfType([r.exports.string, r.exports.number])),
    r.exports.string,
    r.exports.number
  ]),
  withTags: r.exports.bool
};
const $d = g.div`
  border: 1px solid
    ${({ theme: e, selected: t, indeterminate: n }) => t || n ? e.colors.primary600 : e.colors.neutral300};
  border-radius: ${({ theme: e }) => e.borderRadius};
  height: 18px;
  width: 18px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  background-color: ${({ theme: e, selected: t, indeterminate: n }) => t || n ? e.colors.primary600 : e.colors.neutral0};

  ${({ theme: e, indeterminate: t }) => t && `&::after {
      content: '';
      display: block;
      position: relative;
      color: white;
      height: 2px;
      width: 10px;
      background-color: ${e.colors.neutral0};
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

  `}

  ${({ selected: e }) => e && `  
    &::after {
      content: '';
      background: url(${Dn}) no-repeat no-repeat center center;
      width: 100%;
      height: 100%;
      position: absolute;
    }

  `}
`, Td = g(y)`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  &.is-focused {
    background: ${({ theme: e }) => e.colors.primary100};
  }

  &:hover {
    background: ${({ theme: e }) => e.colors.primary100};
  }
`, Qe = ({ selected: e, indeterminate: t, children: n, value: a, multi: i, isChild: s, startIcon: l, ...c }) => {
  const p = Y(null);
  return /* @__PURE__ */ o.createElement(Td, {
    as: "li",
    hasRadius: !0,
    paddingLeft: s ? 7 : 4,
    paddingRight: 4,
    paddingTop: 2,
    paddingBottom: 2,
    ref: p,
    role: "option",
    "aria-selected": e,
    background: "neutral0",
    "data-strapi-value": a,
    ...c
  }, /* @__PURE__ */ o.createElement(C, null, l && /* @__PURE__ */ o.createElement(y, {
    paddingRight: 2,
    "aria-hidden": !0
  }, l), i && /* @__PURE__ */ o.createElement(y, {
    paddingRight: 2,
    "aria-hidden": !0
  }, /* @__PURE__ */ o.createElement($d, {
    selected: e,
    indeterminate: t
  })), /* @__PURE__ */ o.createElement(w, {
    textColor: e ? "primary600" : "neutral800",
    fontWeight: e ? "bold" : null
  }, n)));
};
Qe.defaultProps = {
  isChild: !1,
  multi: !1,
  selected: !1,
  startIcon: void 0,
  indeterminate: !1
};
Qe.propTypes = {
  children: r.exports.oneOfType([r.exports.string, r.exports.number]).isRequired,
  indeterminate: r.exports.bool,
  isChild: r.exports.bool,
  multi: r.exports.bool,
  selected: r.exports.bool,
  startIcon: r.exports.node,
  value: r.exports.oneOfType([r.exports.string, r.exports.number]).isRequired
};
Qe.displayName = "Option";
const no = ({ children: e, label: t, ...n }) => {
  const a = e.map((i) => i.props.value);
  return /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement(Qe, {
    "data-opt-group": !0,
    "data-opt-group-children": a,
    "aria-label": `${t}, ${e.length} items`,
    ...n
  }, t), e);
};
no.propTypes = {
  children: r.exports.arrayOf(r.exports.node).isRequired,
  label: r.exports.string.isRequired
};
no.displayName = "OptGroup";
const wd = ({ options: e, ...t }) => /* @__PURE__ */ o.createElement(er, {
  multi: !0,
  ...t
}, e.map(
  ({ label: n, value: a, children: i }) => i ? /* @__PURE__ */ o.createElement(no, {
    key: n,
    label: n
  }, i == null ? void 0 : i.map((s) => /* @__PURE__ */ o.createElement(Qe, {
    key: s.value,
    value: s.value
  }, s.label))) : /* @__PURE__ */ o.createElement(Qe, {
    key: a,
    value: a
  }, n)
));
wd.propTypes = {
  options: r.exports.arrayOf(r.exports.object).isRequired
};
const Nd = g.div`
  margin-right: ${({ theme: e }) => e.spaces[3]};
  width: ${6 / 16}rem;
  height: ${6 / 16}rem;
  border-radius: 50%;
  background: ${({ theme: e, backgroundColor: t }) => e.colors[t]};
`, Dd = g(y)`
  ${w} {
    color: ${({ theme: e, textColor: t }) => e.colors[t]};
  }
`, Pa = ({ variant: e, children: t, ...n }) => {
  const a = `${e}100`, i = `${e}200`, s = `${e}600`, l = `${e}600`;
  return /* @__PURE__ */ o.createElement(Dd, {
    borderColor: i,
    textColor: l,
    background: a,
    hasRadius: !0,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 5,
    paddingRight: 5,
    ...n
  }, /* @__PURE__ */ o.createElement(C, null, /* @__PURE__ */ o.createElement(Nd, {
    backgroundColor: s
  }), t));
};
Pa.defaultProps = {
  variant: "primary"
};
Pa.propTypes = {
  children: r.exports.node.isRequired,
  variant: r.exports.oneOf(["alternative", "danger", "neutral", "primary", "secondary", "success", "warning"])
};
const Cd = `${232 / 16}rem`, Id = g(Et)`
  width: ${Cd};
  background: ${({ theme: e }) => e.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({ theme: e }) => e.colors.neutral200};
  z-index: 1;
`, kd = ({ ariaLabel: e, ...t }) => /* @__PURE__ */ o.createElement(Id, {
  "aria-label": e,
  as: "nav",
  ...t
});
kd.propTypes = {
  ariaLabel: r.exports.string.isRequired
};
const Od = (e) => {
  const t = Y();
  return ee(() => {
    t.current = e;
  }), t.current;
}, en = g(yt)`
  width: ${24 / 16}rem;
  background-color: ${({ theme: e }) => e.colors.neutral200};
`, qa = ({ as: e, label: t, searchLabel: n, searchable: a, onChange: i, value: s, onClear: l, onSubmit: c, id: p }) => {
  const [d, f] = oe(!1), u = Od(d), m = se("subnav-searchbar-clear", p), h = Y(), b = Y();
  ee(() => {
    d && h.current && h.current.focus(), u && !d && b.current && b.current.focus();
  }, [d]);
  const x = () => {
    f((O) => !O);
  }, v = (O) => {
    l(O), h.current.focus();
  }, T = (O) => {
    var $;
    (($ = O.relatedTarget) == null ? void 0 : $.id) !== m && f(!1);
  }, z = (O) => {
    O.key === S.ESCAPE && f(!1);
  };
  return d ? /* @__PURE__ */ o.createElement(y, {
    paddingLeft: 4,
    paddingTop: 5,
    paddingBottom: 2,
    paddingRight: 4
  }, /* @__PURE__ */ o.createElement(gd, null, /* @__PURE__ */ o.createElement(Zt, {
    name: "searchbar",
    value: s,
    onChange: i,
    placeholder: "e.g: strapi-plugin-abcd",
    onKeyDown: z,
    ref: h,
    onBlur: T,
    onClear: v,
    onSubmit: c,
    clearLabel: "Clear",
    size: "S"
  }, n)), /* @__PURE__ */ o.createElement(y, {
    paddingLeft: 2,
    paddingTop: 4
  }, /* @__PURE__ */ o.createElement(en, null))) : /* @__PURE__ */ o.createElement(y, {
    paddingLeft: 6,
    paddingTop: 6,
    paddingBottom: 2,
    paddingRight: 4
  }, /* @__PURE__ */ o.createElement(C, {
    justifyContent: "space-between",
    alignItems: "flex-start"
  }, /* @__PURE__ */ o.createElement(w, {
    variant: "beta",
    as: e
  }, t), a && /* @__PURE__ */ o.createElement(vt, {
    ref: b,
    onClick: x,
    label: n,
    icon: /* @__PURE__ */ o.createElement(ln, null)
  })), /* @__PURE__ */ o.createElement(y, {
    paddingTop: 4
  }, /* @__PURE__ */ o.createElement(en, null)));
};
qa.defaultProps = {
  as: "h2",
  searchable: !1,
  onChange: () => {
  },
  onClear: () => {
  },
  onSubmit: () => {
  },
  value: "",
  searchLabel: "",
  id: void 0
};
qa.propTypes = {
  as: r.exports.string,
  id: r.exports.string,
  label: r.exports.string.isRequired,
  onChange: r.exports.func,
  onClear: r.exports.func,
  onSubmit: r.exports.func,
  searchLabel: r.exports.string,
  searchable: r.exports.bool,
  value: r.exports.string
};
const Rd = g(y)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({ theme: e }) => e.colors.neutral800};
  svg > * {
    fill: ${({ theme: e }) => e.colors.neutral600};
  }

  &.active {
    ${({ theme: e }) => `
      background-color: ${e.colors.primary100};
      border-right: 2px solid ${e.colors.primary600};
      svg > * {
        fill: ${e.colors.primary700};
      }
      ${w} {
        color: ${e.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`, tn = g(ui)`
  width: ${12 / 16}rem;
  height: ${4 / 16}rem;
  * {
    fill: ${({ theme: e, $active: t }) => t ? e.colors.primary600 : e.colors.neutral600};
  }
`, Ad = g.div`
  svg {
    height: ${12 / 16}rem;
    width: ${12 / 16}rem;
  }
`, ao = ({ children: e, icon: t, withBullet: n, isSubSectionChild: a, ...i }) => /* @__PURE__ */ o.createElement(Rd, {
  as: Ce,
  icon: t,
  background: "neutral100",
  paddingLeft: a ? 9 : 7,
  paddingBottom: 2,
  paddingTop: 2,
  ...i
}, /* @__PURE__ */ o.createElement(C, null, t ? /* @__PURE__ */ o.createElement(Ad, null, t) : /* @__PURE__ */ o.createElement(tn, null), /* @__PURE__ */ o.createElement(y, {
  paddingLeft: 2
}, /* @__PURE__ */ o.createElement(w, {
  as: "span"
}, e))), n && /* @__PURE__ */ o.createElement(y, {
  as: C,
  paddingRight: 4
}, /* @__PURE__ */ o.createElement(tn, {
  $active: !0
})));
ao.displayName = "SubNavLink";
ao.defaultProps = {
  icon: null,
  isSubSectionChild: !1,
  withBullet: !1
};
ao.propTypes = {
  children: r.exports.node,
  icon: r.exports.element,
  isSubSectionChild: r.exports.bool,
  link: r.exports.element,
  withBullet: r.exports.bool
};
const zd = g(y)`
  svg {
    height: ${4 / 16}rem;
    path {
      fill: ${({ theme: e }) => e.colors.neutral700};
    }
  }
`, Sd = g.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`, Ld = g.div`
  display: flex;
  align-items: center;
  width: ${12 / 16}rem;
  transform: rotateX(${({ rotated: e }) => e ? "0deg" : "180deg"});
`, Ba = ({ label: e, children: t, id: n }) => {
  const [a, i] = oe(!0), s = se("subnav-list", n), l = () => {
    i((c) => !c);
  };
  return /* @__PURE__ */ o.createElement(y, null, /* @__PURE__ */ o.createElement(zd, {
    paddingLeft: 7,
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 4
  }, /* @__PURE__ */ o.createElement(C, {
    justifyContent: "space-between"
  }, /* @__PURE__ */ o.createElement(Sd, {
    onClick: l,
    "aria-expanded": a,
    "aria-controls": s
  }, /* @__PURE__ */ o.createElement(Ld, {
    rotated: a
  }, /* @__PURE__ */ o.createElement(Le, {
    "aria-hidden": !0
  })), /* @__PURE__ */ o.createElement(y, {
    paddingLeft: 2
  }, /* @__PURE__ */ o.createElement(w, {
    as: "span",
    fontWeight: "semiBold",
    textColor: "neutral800"
  }, e))))), a && /* @__PURE__ */ o.createElement("ul", {
    id: s
  }, ce.map(t, (c, p) => /* @__PURE__ */ o.createElement("li", {
    key: p
  }, c))));
};
Ba.defaultProps = {
  id: void 0
};
Ba.propTypes = {
  children: r.exports.node,
  id: r.exports.string,
  label: r.exports.string.isRequired
};
const rn = g(C)`
  border: none;
  padding: 0;
  background: transparent;
`, jd = g.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({ rotated: e }) => e ? "0deg" : "180deg"});
`, io = ({ collapsable: e, label: t, onClick: n, ariaExpanded: a, ariaControls: i }) => e ? /* @__PURE__ */ o.createElement(rn, {
  as: "button",
  onClick: n,
  "aria-expanded": a,
  "aria-controls": i,
  textAlign: "left"
}, /* @__PURE__ */ o.createElement(y, {
  paddingRight: 1
}, /* @__PURE__ */ o.createElement(w, {
  variant: "sigma",
  textColor: "neutral600"
}, t)), e && /* @__PURE__ */ o.createElement(jd, {
  rotated: a
}, /* @__PURE__ */ o.createElement(Le, {
  "aria-hidden": !0
}))) : /* @__PURE__ */ o.createElement(rn, null, /* @__PURE__ */ o.createElement(y, {
  paddingRight: 1
}, /* @__PURE__ */ o.createElement(w, {
  variant: "sigma",
  textColor: "neutral600"
}, t)));
io.defaultProps = {
  ariaControls: null,
  ariaExpanded: null,
  collapsable: !1,
  onClick: () => {
  }
};
io.propTypes = {
  ariaControls: r.exports.string,
  ariaExpanded: r.exports.bool,
  collapsable: r.exports.bool,
  label: r.exports.string.isRequired,
  onClick: r.exports.func
};
const Pd = g(y)`
  svg {
    height: ${4 / 16}rem;
    path {
      fill: ${({ theme: e }) => e.colors.neutral500};
    }
  }
`, Wa = ({ collapsable: e, label: t, badgeLabel: n, children: a, id: i }) => {
  const [s, l] = oe(!0), c = se("subnav-list", i), p = () => {
    l((d) => !d);
  };
  return /* @__PURE__ */ o.createElement(ne, {
    spacing: 1
  }, /* @__PURE__ */ o.createElement(Pd, {
    paddingLeft: 6,
    paddingTop: 1,
    paddingBottom: 1,
    paddingRight: 4
  }, /* @__PURE__ */ o.createElement(y, {
    position: "relative",
    paddingRight: n ? 6 : 0
  }, /* @__PURE__ */ o.createElement(io, {
    onClick: p,
    ariaExpanded: s,
    ariaControls: c,
    collapsable: e,
    label: t
  }), n && /* @__PURE__ */ o.createElement(ct, {
    backgroundColor: "neutral150",
    textColor: "neutral600",
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)"
  }, n))), (!e || s) && /* @__PURE__ */ o.createElement("ol", {
    id: c
  }, ce.map(a, (d, f) => /* @__PURE__ */ o.createElement("li", {
    key: f
  }, d))));
};
Wa.defaultProps = {
  badgeLabel: null,
  collapsable: !1,
  id: void 0
};
Wa.propTypes = {
  badgeLabel: r.exports.string,
  children: r.exports.node,
  collapsable: r.exports.bool,
  id: r.exports.string,
  label: r.exports.string.isRequired
};
const qd = ({ children: e, ...t }) => /* @__PURE__ */ o.createElement(y, {
  paddingTop: 2,
  paddingBottom: 4
}, /* @__PURE__ */ o.createElement(ne, {
  as: "ol",
  spacing: 2,
  ...t
}, ce.map(e, (n, a) => /* @__PURE__ */ o.createElement("li", {
  key: a
}, n))));
qd.propTypes = {
  children: r.exports.node.isRequired
};
const Tr = g.div`
  background: ${({ theme: e }) => e.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24 / 16}rem;
  width: ${40 / 16}rem;

  & span {
    font-size: ${({ visibleLabels: e }) => e ? "1rem" : 0};
  }

  &:before {
    content: '';
    background: ${({ theme: e }) => e.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({ theme: e }) => e.spaces[1]};
    top: ${({ theme: e }) => e.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`, Bd = g.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${Tr} {
    background: ${({ theme: e }) => e.colors.success500};
  }

  &[aria-checked='true'] ${Tr}:before {
    transform: translateX(1rem);
  }
`, so = o.forwardRef(
  ({ label: e, onChange: t, onLabel: n, offLabel: a, selected: i, visibleLabels: s, ...l }, c) => /* @__PURE__ */ o.createElement(Bd, {
    ref: c,
    role: "switch",
    "aria-checked": i,
    "aria-label": e,
    onClick: t,
    visibleLabels: s,
    type: "button",
    ...l
  }, /* @__PURE__ */ o.createElement(C, null, /* @__PURE__ */ o.createElement(Tr, null, /* @__PURE__ */ o.createElement("span", null, n), /* @__PURE__ */ o.createElement("span", null, a)), s && /* @__PURE__ */ o.createElement(y, {
    as: "span",
    "aria-hidden": !0,
    paddingLeft: 2,
    color: i ? "success600" : "danger600"
  }, i ? n : a)))
);
so.defaultProps = {
  onLabel: "On",
  offLabel: "Off",
  visibleLabels: !1
};
so.propTypes = {
  label: r.exports.string.isRequired,
  offLabel: r.exports.string,
  onChange: r.exports.func.isRequired,
  onLabel: r.exports.string,
  selected: r.exports.bool.isRequired,
  visibleLabels: r.exports.bool
};
so.displayName = "Switch";
const Ua = Te(), Ya = () => we(Ua), Wd = (e, t) => {
  const n = Y(null), a = Y(null);
  return ee(() => {
    if (!!n.current) {
      if (a.current) {
        const i = n.current.querySelector('[tabindex="0"]');
        i && (i.focus(), t(e));
      }
      a.current || (a.current = !0);
    }
  }, [e]), n;
}, Ud = g(y)`
  border-bottom: 2px solid
    ${({ theme: e, selected: t, hasError: n }) => t ? n ? e.colors.danger600 : e.colors.primary600 : "transparent"};
`, Ge = g(y)`
  border-bottom: 1px solid ${({ theme: e, selected: t }) => t ? e.colors.neutral0 : e.colors.neutral150};
`, Nt = g.button`
  border: none;
  background: transparent;
  padding: 0;

  & + & > ${Ge} {
    border-left: 1px solid ${({ theme: e }) => e.colors.neutral150};
  }

  ${Ge} {
    border-right: ${({ theme: e, showRightBorder: t }) => t ? `1px solid ${e.colors.neutral150}` : "none"};
  }

  // Hack preventing the outline from being overflow by the following tab
  outline-offset: -2px;

  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`, Yd = g(C)`
  & > * {
    flex: 1;
  }

  & ${Nt}:first-of-type ${Ge} {
    border-radius: ${({ theme: e }) => `${e.borderRadius} 0 0 0`};
  }

  & ${Nt}:last-of-type ${Ge} {
    border-radius: ${({ theme: e }) => `0 ${e.borderRadius} 0 0`};
  }

  & ${Nt}[aria-selected="true"] ${Ge} {
    border-radius: ${({ theme: e }) => `${e.borderRadius} ${e.borderRadius} 0 0`};
    border-left: none;
    border-right: none;
  }
`, Qd = g.button`
  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`, Fd = ({ children: e, ...t }) => {
  const { id: n, selectedTabIndex: a, selectTabIndex: i, label: s, variant: l, onTabChange: c } = Ya(), p = Wd(a, c), d = ce.toArray(e).map(
    (u, m) => ye(u, {
      id: `${n}-${m}`,
      index: m,
      selectedTabIndex: a,
      onTabClick: () => i(m),
      variant: l
    })
  ), f = (u) => {
    if (!d.every((h) => h.props.disabled))
      switch (u.key) {
        case S.RIGHT: {
          const h = a + 1, b = (v) => d[v].props.disabled ? v === d.length - 1 ? b(0) : b(v + 1) : v, x = b(h >= d.length ? 0 : h);
          i(x);
          break;
        }
        case S.LEFT: {
          const h = a - 1, b = (v) => d[v].props.disabled ? b(v === 0 ? d.length - 1 : v - 1) : v, x = b(h < 0 ? d.length - 1 : h);
          i(x);
          break;
        }
        case S.HOME: {
          const h = d.findIndex((b) => !b.props.disabled);
          i(h);
          break;
        }
        case S.END: {
          const b = d.map((x, v) => ({ isDisabled: x.props.disabled, index: v })).reverse().find(({ isDisabled: x }) => !x);
          b && i(b.index);
          break;
        }
      }
  };
  return l === "simple" ? /* @__PURE__ */ o.createElement("div", {
    ref: p,
    role: "tablist",
    "aria-label": s,
    onKeyDown: f,
    ...t
  }, d) : /* @__PURE__ */ o.createElement(Yd, {
    ref: p,
    role: "tablist",
    alignItems: "flex-end",
    "aria-label": s,
    onKeyDown: f,
    ...t
  }, d);
};
Fd.propTypes = {
  children: r.exports.node.isRequired
};
const Qa = ({ disabled: e, id: t, children: n, variant: a, hasError: i, index: s, selectedTabIndex: l, onTabClick: c, ...p }) => {
  const d = `${t}-tab`, f = `${t}-tabpanel`, u = s === l, m = () => {
    e || c();
  };
  if (a === "simple") {
    let b;
    return i ? b = "danger600" : u ? b = "primary600" : b = "neutral600", /* @__PURE__ */ o.createElement(Qd, {
      id: d,
      role: "tab",
      "aria-controls": u ? f : void 0,
      tabIndex: u ? 0 : -1,
      "aria-selected": u,
      type: "button",
      onClick: m,
      "aria-disabled": e,
      ...p
    }, /* @__PURE__ */ o.createElement(Ud, {
      padding: 4,
      selected: u,
      hasError: i
    }, /* @__PURE__ */ o.createElement(w, {
      variant: "sigma",
      textColor: b
    }, n)));
  }
  i && console.warn('The "hasError" prop is only available for the "simple" variant.');
  const h = l - 1 === s;
  return /* @__PURE__ */ o.createElement(Nt, {
    id: d,
    role: "tab",
    type: "button",
    "aria-controls": u ? f : void 0,
    tabIndex: u ? 0 : -1,
    "aria-selected": u,
    onClick: m,
    "aria-disabled": e,
    showRightBorder: h,
    ...p
  }, /* @__PURE__ */ o.createElement(Ge, {
    padding: u ? 4 : 3,
    background: u ? "neutral0" : "neutral100",
    selected: u
  }, /* @__PURE__ */ o.createElement(w, {
    fontWeight: "bold",
    textColor: u ? "primary700" : "neutral600"
  }, n)));
};
Qa.defaultProps = {
  disabled: !1,
  hasError: !1,
  id: void 0,
  index: void 0,
  onTabClick: void 0,
  selectedTabIndex: void 0,
  variant: void 0
};
Qa.propTypes = {
  children: r.exports.node.isRequired,
  disabled: r.exports.bool,
  hasError: r.exports.bool,
  id: r.exports.string,
  index: r.exports.number,
  onTabClick: r.exports.func,
  selectedTabIndex: r.exports.number,
  variant: r.exports.oneOf(["simple"])
};
const _d = ({ children: e, ...t }) => {
  const { id: n, selectedTabIndex: a } = Ya(), i = ce.toArray(e).map((s, l) => ye(s, { id: `${n}-${l}` })).filter((s, l) => l === a);
  return /* @__PURE__ */ o.createElement("div", {
    ...t
  }, i);
};
_d.propTypes = {
  children: r.exports.node.isRequired
};
const Fa = ({ id: e, ...t }) => {
  const n = `${e}-tab`, a = `${e}-tabpanel`;
  return /* @__PURE__ */ o.createElement("div", {
    id: a,
    role: "tabpanel",
    tabIndex: 0,
    "aria-labelledby": n,
    ...t
  });
};
Fa.defaultProps = {
  id: void 0
};
Fa.propTypes = {
  id: r.exports.string
};
const lo = Pe(({ id: e, initialSelectedTabIndex: t, label: n, onTabChange: a, variant: i, ...s }, l) => {
  const c = se("tabgroup", e), p = ce.toArray(s.children).find((m) => m.type.displayName === "Tabs");
  let d = t || 0;
  p && t === void 0 && (d = p.props.children.findIndex((m) => !m.props.disabled));
  const [f, u] = oe(d === -1 ? 0 : d);
  return an(l, () => ({
    _handlers: { setSelectedTabIndex: u }
  })), /* @__PURE__ */ o.createElement(Ua.Provider, {
    value: { id: c, selectedTabIndex: f, selectTabIndex: u, label: n, variant: i, onTabChange: a }
  }, /* @__PURE__ */ o.createElement("div", {
    ...s
  }));
});
lo.displayName = "TabGroup";
lo.defaultProps = {
  id: void 0,
  initialSelectedTabIndex: void 0,
  onTabChange: () => {
  },
  variant: void 0
};
lo.propTypes = {
  children: r.exports.node.isRequired,
  id: r.exports.string,
  initialSelectedTabIndex: r.exports.number,
  label: r.exports.string.isRequired,
  onTabChange: r.exports.func,
  variant: r.exports.oneOf(["simple"])
};
const Hd = g(y)`
  overflow: hidden;
  border: 1px solid ${({ theme: e }) => e.colors.neutral150};
`, Vd = g(Gt)`
  width: 100%;
  white-space: nowrap;
`, Gd = g(y)`
  position: relative;

  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({ overflowing: e }) => e === "both" || e === "left" ? "''" : void 0};
    box-shadow: ${({ theme: e }) => e.shadows.tableShadow};
    width: ${({ theme: e }) => e.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({ overflowing: e }) => e === "both" || e === "right" ? "''" : void 0};
    box-shadow: ${({ theme: e }) => e.shadows.tableShadow};
    width: ${({ theme: e }) => e.spaces[2]};
    right: 0;
    top: 0;
  }
`, Kd = g(y)`
  overflow-x: auto;
`, _a = ({ colCount: e, rowCount: t, footer: n, ...a }) => {
  const i = Y(null), [s, l] = oe(), c = (p) => {
    const d = p.target.scrollWidth - p.target.clientWidth;
    if (p.target.scrollLeft === 0)
      return l("right");
    if (p.target.scrollLeft === d)
      return l("left");
    if (p.target.scrollLeft > 0)
      return l("both");
  };
  return ee(() => {
    i.current.scrollWidth > i.current.clientWidth && l("right");
  }, []), /* @__PURE__ */ o.createElement(Hd, {
    shadow: "tableShadow",
    hasRadius: !0,
    background: "neutral0"
  }, /* @__PURE__ */ o.createElement(Gd, {
    overflowing: s
  }, /* @__PURE__ */ o.createElement(Kd, {
    ref: i,
    onScroll: c,
    paddingLeft: 6,
    paddingRight: 6
  }, /* @__PURE__ */ o.createElement(Vd, {
    colCount: e,
    rowCount: t,
    ...a
  }))), n);
};
_a.defaultProps = {
  footer: void 0
};
_a.propTypes = {
  colCount: r.exports.number.isRequired,
  footer: r.exports.node,
  rowCount: r.exports.number.isRequired
};
const Zd = g(Fr)`
  & tr:last-of-type {
    border-bottom: none;
  }
`, Pu = (e) => /* @__PURE__ */ o.createElement(Zd, {
  ...e
}), Xd = g(Qr)`
  border-bottom: 1px solid ${({ theme: e }) => e.colors.neutral150};
`, qu = (e) => /* @__PURE__ */ o.createElement(Xd, {
  ...e
}), Jd = g(St)`
  border-bottom: 1px solid ${({ theme: e }) => e.colors.neutral150};

  & td,
  & th {
    padding: ${({ theme: e }) => e.spaces[4]};
  }

  & td:first-of-type,
  & th:first-of-type {
    padding: 0 ${({ theme: e }) => e.spaces[1]};
  }

  // Resetting padding values and fixing a height
  th {
    padding-top: 0;
    padding-bottom: 0;
    height: ${56 / 16}rem;
  }
`, Bu = (e) => /* @__PURE__ */ o.createElement(Jd, {
  ...e
}), Ha = g(xt)`
  vertical-align: middle;
  text-align: left;
  color: ${({ theme: e }) => e.colors.neutral600};
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`, eu = g.span`
  svg {
    height: ${4 / 16}rem;
  }
`, Va = ({ children: e, action: t, ...n }) => /* @__PURE__ */ o.createElement(Ha, {
  as: Kt,
  ...n
}, /* @__PURE__ */ o.createElement(C, null, e, /* @__PURE__ */ o.createElement(eu, null, t)));
Va.defaultProps = {
  action: void 0
};
Va.propTypes = {
  action: r.exports.node,
  children: r.exports.node.isRequired
};
const Wu = (e) => /* @__PURE__ */ o.createElement(Ha, {
  ...e
}), tu = g(y)`
  height: ${24 / 16}rem;
  width: ${24 / 16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10 / 16}rem;
    width: ${10 / 16}rem;
  }

  svg path {
    fill: ${({ theme: e }) => e.colors.primary600};
  }
`, ru = g(y)`
  border-radius: 0 0 ${({ theme: e }) => e.borderRadius} ${({ theme: e }) => e.borderRadius};
  display: block;
  width: 100%;
  border: none;
`, ou = ({ children: e, icon: t, ...n }) => /* @__PURE__ */ o.createElement("div", null, /* @__PURE__ */ o.createElement(yt, null), /* @__PURE__ */ o.createElement(ru, {
  as: "button",
  background: "primary100",
  padding: 5,
  ...n
}, /* @__PURE__ */ o.createElement(C, null, /* @__PURE__ */ o.createElement(tu, {
  "aria-hidden": !0,
  background: "primary200"
}, t), /* @__PURE__ */ o.createElement(y, {
  paddingLeft: 3
}, /* @__PURE__ */ o.createElement(w, {
  variant: "pi",
  fontWeight: "bold",
  textColor: "primary600"
}, e)))));
ou.propTypes = {
  children: r.exports.string.isRequired,
  icon: r.exports.node.isRequired
};
const nu = g.div`
  border: 1px solid ${({ theme: e, hasError: t }) => t ? e.colors.danger600 : e.colors.neutral200};
  border-radius: ${({ theme: e }) => e.borderRadius};

  padding-left: ${({ theme: e, hasLeftAction: t }) => t ? 0 : e.spaces[4]};
  padding-right: ${({ theme: e, hasRightAction: t }) => t ? 0 : e.spaces[4]};
  padding-top: ${({ theme: e }) => `${e.spaces[3]}`};
  padding-bottom: ${({ theme: e }) => `${e.spaces[3]}`};

  background: ${({ theme: e, disabled: t }) => t ? e.colors.neutral150 : e.colors.neutral0};
  ${Je()}
`, au = g.textarea`
  display: block;
  width: 100%;
  font-weight: 400;
  font-size: ${14 / 16}rem;
  border: none;
  color: ${({ theme: e, disabled: t }) => t ? e.colors.neutral600 : e.colors.neutral800};
  resize: none;
  background: inherit;

  ::placeholder {
    color: ${({ theme: e }) => e.colors.neutral500};
    opacity: 1;
  }

  &:focus-within {
    outline: none;
  }
`, tr = Pe(({ disabled: e, ...t }, n) => {
  const { id: a, error: i, hint: s, name: l } = et();
  let c;
  i ? c = `${a}-error` : s && (c = `${a}-hint`);
  const p = Boolean(i);
  return /* @__PURE__ */ o.createElement(nu, {
    hasError: p,
    disabled: e
  }, /* @__PURE__ */ o.createElement(au, {
    id: a,
    name: l,
    ref: n,
    "aria-describedby": c,
    "aria-invalid": p,
    disabled: e,
    hasError: p,
    ...t
  }));
});
tr.displayName = "TextareaInput";
tr.defaultProps = {
  disabled: !1
};
tr.propTypes = {
  disabled: r.exports.bool
};
const iu = g.div`
  & textarea {
    // TODO: remove when we'll have fonts in the theme
    height: ${80 / 16}rem;
    line-height: ${20 / 16}rem;
  }

  & textarea::placeholder {
    font-weight: 400;
    font-size: ${14 / 16}rem;
    line-height: 1.43;
    color: ${({ theme: e }) => e.colors.neutral500};
    opacity: 1;
  }
`, co = o.forwardRef(
  ({ name: e, hint: t, error: n, label: a, children: i, labelAction: s, id: l, required: c, ...p }, d) => {
    const f = se("textarea", l);
    return /* @__PURE__ */ o.createElement(iu, null, /* @__PURE__ */ o.createElement(Ee, {
      name: e,
      hint: t,
      error: n,
      id: f
    }, /* @__PURE__ */ o.createElement(ne, {
      spacing: 1
    }, a && /* @__PURE__ */ o.createElement(C, null, /* @__PURE__ */ o.createElement(Ne, {
      required: c,
      action: s
    }, a)), /* @__PURE__ */ o.createElement(tr, {
      ref: d,
      as: "textarea",
      value: i,
      ...p
    }), /* @__PURE__ */ o.createElement(qe, null), /* @__PURE__ */ o.createElement(Be, null))));
  }
);
co.displayName = "Textarea";
co.defaultProps = {
  "aria-label": void 0,
  label: void 0,
  labelAction: void 0,
  error: void 0,
  hint: void 0,
  id: void 0,
  children: "",
  required: !1
};
co.propTypes = {
  "aria-label": r.exports.string,
  children: r.exports.string,
  error: r.exports.string,
  hint: r.exports.oneOfType([r.exports.string, r.exports.node, r.exports.arrayOf(r.exports.node)]),
  id: r.exports.string,
  label: r.exports.string,
  labelAction: r.exports.element,
  name: r.exports.string.isRequired,
  required: r.exports.bool
};
const su = () => /* @__PURE__ */ o.createElement(de, null, /* @__PURE__ */ o.createElement("p", {
  role: "log",
  "aria-live": "polite",
  id: Ve.Log,
  "aria-relevant": "all"
}), /* @__PURE__ */ o.createElement("p", {
  role: "status",
  "aria-live": "polite",
  id: Ve.Status,
  "aria-relevant": "all"
}), /* @__PURE__ */ o.createElement("p", {
  role: "alert",
  "aria-live": "assertive",
  id: Ve.Alert,
  "aria-relevant": "all"
})), lu = oi`
 /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  /* My styles */
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  *:focus-visible {
    outline: 2px solid ${({ theme: e }) => e.colors.primary600};
    outline-offset: 2px;
  }

  /* Focusing the button with a mouse, touch, or stylus will show a subtle drop shadow. */
  *:focus:not(:focus-visible) {
    outline: none;
  }

  body,html{
    height: 100%;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  button {
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    color: inherit;
    font-size: 100%;
    cursor: pointer;
    font: inherit;
  }

  textarea,input {
    font: inherit;
  }

  .lock-body-scroll {
    height: 100vh;
    overflow-y: hidden;
  }
`, cu = ({ children: e, theme: t }) => /* @__PURE__ */ te.createElement(ni, {
  theme: t
}, /* @__PURE__ */ te.createElement(lu, null), e, /* @__PURE__ */ te.createElement(su, null));
cu.propTypes = {
  children: r.exports.node.isRequired,
  theme: r.exports.object.isRequired
};
const Uu = () => ai(), du = g.div`
  display: flex;
  align-items: center;
  svg {
    height: 1rem;
    width: 1rem;
  }

  svg path {
    fill: ${({ theme: e }) => e.colors.neutral500};
  }
`, Ga = ({
  disabled: e,
  error: t,
  hint: n,
  id: a,
  onClear: i,
  onChange: s,
  value: l,
  clearLabel: c,
  label: p,
  step: d,
  size: f,
  ...u
}) => {
  const m = se("timepicker", a), h = 24, b = [];
  let x = 0;
  for (let T = 0; T < h; T++)
    for (x = 0; x < 60; )
      b.push(`${T < 10 ? "0" + T : T}:${x < 10 ? "0" + x : x}`), x += d;
  const v = () => {
    const T = l.split(":")[0], z = l.split(":")[1], O = b.reduce((E, Q) => {
      const N = Q.split(":")[0];
      return Math.abs(N - T) < Math.abs(E - T) ? N : E;
    }, b[0].split(":")[0]), $ = b.reduce((E, Q) => {
      const N = Q.split(":")[1];
      return Math.abs(N - z) < Math.abs(E - z) ? N : E;
    }, b[0].split(":")[1]);
    return `${O}:${$}`;
  };
  return /* @__PURE__ */ o.createElement(er, {
    id: m,
    label: p,
    placeholder: "--:--",
    hint: n,
    onClear: i,
    clearLabel: c,
    error: t,
    value: l ? v() : null,
    size: f,
    onChange: s,
    disabled: e,
    startIcon: /* @__PURE__ */ o.createElement(du, null, /* @__PURE__ */ o.createElement(pi, null)),
    ...u
  }, b.map((T) => /* @__PURE__ */ o.createElement(Qe, {
    value: T,
    key: T
  }, T)));
};
Ga.defaultProps = {
  disabled: !1,
  error: void 0,
  hint: void 0,
  id: void 0,
  label: void 0,
  onClear: void 0,
  size: "M",
  step: 15,
  value: void 0
};
Ga.propTypes = {
  clearLabel: r.exports.string.isRequired,
  disabled: r.exports.bool,
  error: r.exports.string,
  hint: r.exports.oneOfType([r.exports.string, r.exports.node, r.exports.arrayOf(r.exports.node)]),
  id: r.exports.oneOfType([r.exports.string, r.exports.number]),
  label: r.exports.string,
  onChange: r.exports.func.isRequired,
  onClear: r.exports.func,
  size: r.exports.oneOf(Object.keys(De.input)),
  step: r.exports.number,
  value: r.exports.oneOfType([
    r.exports.arrayOf(r.exports.oneOfType([r.exports.string, r.exports.number])),
    r.exports.string,
    r.exports.number
  ])
};
const uu = g.label`
  position: relative;
  display: inline-block;
`, pu = g(y)`
  height: ${En("input")};
  cursor: ${({ disabled: e }) => e ? "not-allowed" : void 0};
  // Masks the background of each value
  overflow: hidden;

  ${Je()}
`, on = g(C).attrs({
  hasRadius: !0
})`
  background-color: ${({ theme: e, checked: t, disabled: n }) => t ? n ? e.colors.neutral200 : e.colors.neutral0 : "transparent"};
  border: 1px solid
    ${({ theme: e, checked: t, disabled: n }) => t && t !== null ? n ? e.colors.neutral300 : e.colors.neutral200 : n ? e.colors.neutral150 : e.colors.neutral100};
  position: relative;
  user-select: none;
  z-index: 2;
`, fu = g.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
`, rr = o.forwardRef(
  ({ size: e, onLabel: t, offLabel: n, children: a, checked: i, disabled: s, onChange: l, ...c }, p) => {
    const d = "neutral600";
    let f = !i && i !== null ? "danger700" : d, u = i ? "primary600" : d;
    const m = (h) => {
      s || l(h);
    };
    return /* @__PURE__ */ o.createElement(uu, null, /* @__PURE__ */ o.createElement(de, null, a), /* @__PURE__ */ o.createElement(pu, {
      hasRadius: !0,
      size: e,
      disabled: s,
      padding: 1,
      display: "inline-flex",
      background: s ? "neutral150" : "neutral100",
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: "neutral200"
    }, /* @__PURE__ */ o.createElement(on, {
      paddingLeft: 7,
      paddingRight: 7,
      "aria-hidden": !0,
      checked: i === null ? !1 : !i,
      disabled: s
    }, /* @__PURE__ */ o.createElement(w, {
      variant: "pi",
      fontWeight: "bold",
      textTransform: "uppercase",
      textColor: s ? "neutral700" : f
    }, n)), /* @__PURE__ */ o.createElement(on, {
      paddingLeft: 7,
      paddingRight: 7,
      "aria-hidden": !0,
      checked: i === null ? !1 : i,
      disabled: s
    }, /* @__PURE__ */ o.createElement(w, {
      variant: "pi",
      fontWeight: "bold",
      textTransform: "uppercase",
      textColor: s ? "neutral700" : u
    }, t)), /* @__PURE__ */ o.createElement(fu, {
      type: "checkbox",
      "aria-disabled": s,
      onChange: (h) => m(h),
      ref: p,
      ...c,
      checked: !(i === null || !i)
    })));
  }
);
rr.displayName = "ToggleCheckbox";
rr.defaultProps = {
  disabled: !1,
  checked: !1,
  onChange: void 0,
  size: "M"
};
rr.propTypes = {
  checked: r.exports.bool,
  children: r.exports.string.isRequired,
  disabled: r.exports.bool,
  offLabel: r.exports.string.isRequired,
  onChange: r.exports.func,
  onLabel: r.exports.string.isRequired,
  size: r.exports.oneOf(Object.keys(De.input))
};
const gu = g(Ee)`
  width: fit-content;
`, mu = g(lt)`
  align-self: flex-end;
  margin-left: auto;
`, uo = ({
  disabled: e,
  size: t,
  error: n,
  hint: a,
  label: i,
  name: s,
  labelAction: l,
  required: c,
  id: p,
  onClear: d,
  clearLabel: f,
  checked: u,
  ...m
}) => {
  const h = se("toggleinput", p);
  return /* @__PURE__ */ o.createElement(gu, {
    name: s,
    hint: a,
    error: n,
    id: h
  }, /* @__PURE__ */ o.createElement(ne, {
    spacing: 1
  }, /* @__PURE__ */ o.createElement(C, null, /* @__PURE__ */ o.createElement(Ne, {
    required: c,
    action: l
  }, i), f && d && u !== null && !e && /* @__PURE__ */ o.createElement(mu, {
    onClick: d
  }, f)), /* @__PURE__ */ o.createElement(rr, {
    id: h,
    size: t,
    name: s,
    checked: u,
    disabled: e,
    ...m
  }, i), /* @__PURE__ */ o.createElement(qe, null), /* @__PURE__ */ o.createElement(Be, null)));
};
uo.displayName = "ToggleInput";
uo.defaultProps = {
  checked: !1,
  clearLabel: void 0,
  disabled: !1,
  error: void 0,
  hint: void 0,
  id: void 0,
  label: "",
  labelAction: void 0,
  name: "",
  onClear: void 0,
  required: !1,
  size: "M"
};
uo.propTypes = {
  checked: r.exports.bool,
  clearLabel: r.exports.string,
  disabled: r.exports.bool,
  error: r.exports.string,
  hint: r.exports.oneOfType([r.exports.string, r.exports.node, r.exports.arrayOf(r.exports.node)]),
  id: r.exports.string,
  label: r.exports.string,
  labelAction: r.exports.node,
  name: r.exports.string,
  onClear: r.exports.func,
  required: r.exports.bool,
  size: r.exports.oneOf(Object.keys(De.input))
};
const bu = {
  color: {
    alternative100: "#f6ecfc",
    alternative200: "#e0c1f4",
    alternative500: "#ac73e6",
    alternative600: "#9736e8",
    alternative700: "#8312d1",
    buttonNeutral0: "#ffffff",
    buttonPrimary500: "#7b79ff",
    buttonPrimary600: "#4945ff",
    danger100: "#fcecea",
    danger200: "#f5c0b8",
    danger500: "#ee5e52",
    danger600: "#d02b20",
    danger700: "#b72b1a",
    neutral0: "#ffffff",
    neutral100: "#f6f6f9",
    neutral1000: "#181826",
    neutral150: "#eaeaef",
    neutral200: "#dcdce4",
    neutral300: "#c0c0cf",
    neutral400: "#a5a5ba",
    neutral500: "#8e8ea9",
    neutral600: "#666687",
    neutral700: "#4a4a6a",
    neutral800: "#32324d",
    neutral900: "#212134",
    primary100: "#f0f0ff",
    primary200: "#d9d8ff",
    primary500: "#7b79ff",
    primary600: "#4945ff",
    primary700: "#271fe0",
    secondary100: "#eaf5ff",
    secondary200: "#b8e1ff",
    secondary500: "#66b7f1",
    secondary600: "#0c75af",
    secondary700: "#006096",
    success100: "#eafbe7",
    success200: "#c6f0c2",
    success500: "#5cb176",
    success600: "#328048",
    success700: "#2f6846",
    warning100: "#fdf4dc",
    warning200: "#fae7b9",
    warning500: "#f29d41",
    warning600: "#d9822f",
    warning700: "#be5d01"
  }
}, hu = {
  shadow: {
    filterShadow: "0px 1px 4px rgba(33, 33, 52, 0.1)",
    focus: "inset 2px 0px 0px rgb(39, 31, 224), inset 0px 2px 0px rgb(39, 31, 224), inset -2px 0px 0px rgb(39, 31, 224), inset 0px -2px 0px rgb(39, 31, 224)",
    focusShadow: "0px 0px 6px rgba(76, 191, 255, 0.75)",
    popupShadow: "0px 2px 15px rgba(33, 33, 52, 0.1)",
    tableShadow: "0px 1px 4px rgba(33, 33, 52, 0.1)"
  }
}, Ka = {
  sizes: De,
  zIndices: [5, 10, 15, 20],
  spaces: ["0px", "4px", "8px", "12px", "16px", "20px", "24px", "32px", "40px", "48px", "56px", "64px"],
  borderRadius: "4px",
  mediaQueries: {
    tablet: `@media (max-width: ${1100 / 16}rem)`,
    mobile: `@media (max-width: ${550 / 16}rem)`
  },
  fontSizes: [`${11 / 16}rem`, `${12 / 16}rem`, `${14 / 16}rem`, "1rem", `${18 / 16}rem`, `${32 / 16}rem`],
  lineHeights: [1.14, 1.22, 1.25, 1.33, 1.43, 1.45, 1.5],
  fontWeights: {
    regular: 400,
    semiBold: 500,
    bold: 600
  }
}, xu = {
  colors: bu.color,
  shadows: hu.shadow,
  ...Ka
}, yu = {
  color: {
    alternative100: "#181826",
    alternative200: "#4a4a6a",
    alternative500: "#ac73e6",
    alternative600: "#ac73e6",
    alternative700: "#e0c1f4",
    buttonNeutral0: "#ffffff",
    buttonPrimary500: "#7b79ff",
    buttonPrimary600: "#4945ff",
    danger100: "#181826",
    danger200: "#4a4a6a",
    danger500: "#ee5e52",
    danger600: "#ee5e52",
    danger700: "#ee5e52",
    neutral0: "#212134",
    neutral100: "#181826",
    neutral1000: "#ffffff",
    neutral150: "#32324d",
    neutral200: "#4a4a6a",
    neutral300: "#666687",
    neutral400: "#a5a5ba",
    neutral500: "#c0c0cf",
    neutral600: "#a5a5ba",
    neutral700: "#eaeaef",
    neutral800: "#ffffff",
    neutral900: "#ffffff",
    primary100: "#181826",
    primary200: "#4a4a6a",
    primary500: "#4945ff",
    primary600: "#7b79ff",
    primary700: "#7b79ff",
    secondary100: "#181826",
    secondary200: "#4a4a6a",
    secondary500: "#66b7f1",
    secondary600: "#66b7f1",
    secondary700: "#b8e1ff",
    success100: "#181826",
    success200: "#4a4a6a",
    success500: "#5cb176",
    success600: "#5cb176",
    success700: "#c6f0c2",
    warning100: "#181826",
    warning200: "#4a4a6a",
    warning500: "#f29d41",
    warning600: "#f29d41",
    warning700: "#fae7b9"
  }
}, Eu = {
  shadow: {
    filterShadow: "1px 1px 10px rgba(3, 3, 5, 0.35)",
    focus: "inset 2px 0px 0px rgb(39, 31, 224), inset 0px 2px 0px rgb(39, 31, 224), inset -2px 0px 0px rgb(39, 31, 224), inset 0px -2px 0px rgb(39, 31, 224)",
    focusShadow: "0px 0px 6px rgba(76, 191, 255, 0.75)",
    popupShadow: "1px 1px 10px rgba(3, 3, 5, 0.35)",
    tableShadow: "1px 1px 10px rgba(3, 3, 5, 0.2)"
  }
}, Yu = {
  colors: yu.color,
  shadows: Eu.shadow,
  ...Ka
}, nn = (e) => `
${e}

The following is an example:


import { lightTheme, extendTheme } from '@strapi/design-system/themes';

const myCustomTheme = extendTheme(lightTheme, {
    ${Object.keys(xu).map((t) => `${t}: /* put the overrides for the ${t} key */,`).join(`
`)}
})
`, at = (e) => e && typeof e == "object" && !Array.isArray(e), Za = (e, t) => {
  const n = { ...e };
  return at(e) && at(t) && Object.keys(t).forEach((a) => {
    at(t[a]) && e.hasOwnProperty(a) ? n[a] = Za(e[a], t[a]) : n[a] = t[a];
  }), n;
}, Qu = (e, t) => {
  if (!at(e)) {
    const n = nn(
      "The first argument should be an object and corresponds to the theme you want to extend."
    );
    throw new Error(n);
  }
  if (!at(t)) {
    const n = nn(
      "The second argument should be an object and corresponds to the keys of the theme you want to override."
    );
    throw new Error(n);
  }
  return Za(e, t);
};
export {
  yn as Accordion,
  Bi as AccordionContent,
  $n as AccordionGroup,
  Mn as AccordionToggle,
  xn as AccordionTypography,
  xa as ActionLayout,
  kr as Alert,
  Or as Avatar,
  Nu as AvatarGroup,
  ct as Badge,
  dt as BaseButton,
  Nn as BaseButtonWrapper,
  ut as BaseCheckbox,
  it as BaseHeaderLayout,
  Rr as BaseLink,
  qt as BaseRadio,
  y as Box,
  kn as Breadcrumbs,
  gt as Button,
  Es as ButtonWrapper,
  Wn as Card,
  vs as CardAction,
  Un as CardAsset,
  Du as CardBadge,
  Cu as CardBody,
  Iu as CardCheckbox,
  Cs as CardContent,
  ku as CardHeader,
  Ru as CardSubtitle,
  Os as CardTimer,
  Ou as CardTitle,
  jr as Carousel,
  Au as CarouselActions,
  zu as CarouselImage,
  Fn as CarouselInput,
  _n as CarouselSlide,
  Hn as Checkbox,
  Ht as Combobox,
  _t as ComboboxOption,
  $c as ContentLayout,
  ca as CreatableCombobox,
  Ar as Crumb,
  fa as DatePicker,
  Ur as Dialog,
  da as DialogBody,
  Yr as DialogFooter,
  yt as Divider,
  ld as Dots,
  ga as EmptyStateLayout,
  Ee as Field,
  Qn as FieldAction,
  Yn as FieldContext,
  Be as FieldError,
  qe as FieldHint,
  tt as FieldInput,
  Ne as FieldLabel,
  C as Flex,
  ht as FocusTrap,
  Et as Grid,
  Lt as GridItem,
  Ic as GridLayout,
  Vr as HeaderLayout,
  Ie as Icon,
  vt as IconButton,
  Su as IconButtonGroup,
  wn as Initials,
  Ct as InputWrapper,
  Ir as KeyboardNavigable,
  ba as Layout,
  Gr as Link,
  Kr as LinkButton,
  Ft as Loader,
  ya as Main,
  va as MainNav,
  zt as MenuItem,
  ju as ModalBody,
  wa as ModalFooter,
  Ta as ModalHeader,
  Fc as ModalLayout,
  wd as MultiSelectNested,
  Ma as NavBrand,
  Wc as NavCondense,
  Zr as NavLink,
  jc as NavSection,
  Pc as NavSections,
  Xr as NavUser,
  Ra as NextLink,
  Jr as NumberInput,
  no as OptGroup,
  Qe as Option,
  ia as POPOVER_PLACEMENTS,
  Aa as PageLink,
  Ca as Pagination,
  rt as Popover,
  Wt as Portal,
  Oa as PreviousLink,
  La as ProgressBar,
  ud as Radio,
  In as RadioGroup,
  Gt as RawTable,
  Fr as RawTbody,
  xt as RawTd,
  Kt as RawTh,
  Qr as RawThead,
  St as RawTr,
  gd as SearchForm,
  Zt as Searchbar,
  er as Select,
  ro as SelectList,
  Ze as SimpleMenu,
  zc as SkipToContent,
  ne as Stack,
  Pa as Status,
  kd as SubNav,
  qa as SubNavHeader,
  ao as SubNavLink,
  Ba as SubNavLinkSection,
  Wa as SubNavSection,
  qd as SubNavSections,
  so as Switch,
  ou as TFooter,
  Qa as Tab,
  lo as TabGroup,
  Fa as TabPanel,
  _d as TabPanels,
  _a as Table,
  Fd as Tabs,
  Jt as Tag,
  Pu as Tbody,
  Wu as Td,
  lt as TextButton,
  Vt as TextInput,
  co as Textarea,
  Va as Th,
  qu as Thead,
  cu as ThemeProvider,
  Ga as TimePicker,
  rr as ToggleCheckbox,
  uo as ToggleInput,
  mt as Tooltip,
  Bu as Tr,
  Cc as TwoColsLayout,
  w as Typography,
  de as VisuallyHidden,
  st as buttonFocusStyle,
  Yu as darkTheme,
  Qu as extendTheme,
  En as getThemeSize,
  Je as inputFocusStyle,
  xu as lightTheme,
  Cd as subNavWidth,
  et as useField,
  Lu as useNotifyAT,
  Uu as useTheme
};
