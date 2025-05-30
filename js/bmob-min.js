/*
 * bmob JavaScript SDK
 * http://www.bmob.cn
 * Copyright Bmob, Inc.
 * The Bmob JavaScript SDK is freely distributable under the MIT license.
 *
 * Includes: Underscore.js
 * Copyright 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
 * Released under the MIT license.
 */
(function (a) {
  a.Bmob = a.Bmob || {};
  a.Bmob.VERSION = "js0.0.1"
}(this));
(function () {
  var w = this;
  var k = w._;
  var D = {};
  var C = Array.prototype, f = Object.prototype, r = Function.prototype;
  var G = C.push, o = C.slice, y = C.concat, d = f.toString, j = f.hasOwnProperty;
  var K = C.forEach, q = C.map, E = C.reduce, c = C.reduceRight, b = C.filter, B = C.every, p = C.some, n = C.indexOf,
    l = C.lastIndexOf, u = Array.isArray, e = Object.keys, F = r.bind;
  var L = function (M) {
    if (M instanceof L) {
      return M
    }
    if (!(this instanceof L)) {
      return new L(M)
    }
    this._wrapped = M
  };
  if (typeof exports !== "undefined") {
    if (typeof module !== "undefined" && module.exports) {
      exports = module.exports = L
    }
    exports._ = L
  } else {
    w._ = L
  }
  L.VERSION = "1.4.4";
  var H = L.each = L.forEach = function (R, Q, P) {
    if (R == null) {
      return
    }
    if (K && R.forEach === K) {
      R.forEach(Q, P)
    } else {
      if (R.length === +R.length) {
        for (var O = 0, M = R.length; O < M; O++) {
          if (Q.call(P, R[O], O, R) === D) {
            return
          }
        }
      } else {
        for (var N in R) {
          if (L.has(R, N)) {
            if (Q.call(P, R[N], N, R) === D) {
              return
            }
          }
        }
      }
    }
  };
  L.map = L.collect = function (P, O, N) {
    var M = [];
    if (P == null) {
      return M
    }
    if (q && P.map === q) {
      return P.map(O, N)
    }
    H(P, function (S, Q, R) {
      M[M.length] = O.call(N, S, Q, R)
    });
    return M
  };
  var g = "Reduce of empty array with no initial value";
  L.reduce = L.foldl = L.inject = function (Q, P, M, O) {
    var N = arguments.length > 2;
    if (Q == null) {
      Q = []
    }
    if (E && Q.reduce === E) {
      if (O) {
        P = L.bind(P, O)
      }
      return N ? Q.reduce(P, M) : Q.reduce(P)
    }
    H(Q, function (T, R, S) {
      if (!N) {
        M = T;
        N = true
      } else {
        M = P.call(O, M, T, R, S)
      }
    });
    if (!N) {
      throw new TypeError(g)
    }
    return M
  };
  L.reduceRight = L.foldr = function (S, P, M, O) {
    var N = arguments.length > 2;
    if (S == null) {
      S = []
    }
    if (c && S.reduceRight === c) {
      if (O) {
        P = L.bind(P, O)
      }
      return N ? S.reduceRight(P, M) : S.reduceRight(P)
    }
    var R = S.length;
    if (R !== +R) {
      var Q = L.keys(S);
      R = Q.length
    }
    H(S, function (V, T, U) {
      T = Q ? Q[--R] : --R;
      if (!N) {
        M = S[T];
        N = true
      } else {
        M = P.call(O, M, S[T], T, U)
      }
    });
    if (!N) {
      throw new TypeError(g)
    }
    return M
  };
  L.find = L.detect = function (P, O, N) {
    var M;
    A(P, function (S, Q, R) {
      if (O.call(N, S, Q, R)) {
        M = S;
        return true
      }
    });
    return M
  };
  L.filter = L.select = function (P, O, N) {
    var M = [];
    if (P == null) {
      return M
    }
    if (b && P.filter === b) {
      return P.filter(O, N)
    }
    H(P, function (S, Q, R) {
      if (O.call(N, S, Q, R)) {
        M[M.length] = S
      }
    });
    return M
  };
  L.reject = function (O, N, M) {
    return L.filter(O, function (R, P, Q) {
      return !N.call(M, R, P, Q)
    }, M)
  };
  L.every = L.all = function (P, O, N) {
    O || (O = L.identity);
    var M = true;
    if (P == null) {
      return M
    }
    if (B && P.every === B) {
      return P.every(O, N)
    }
    H(P, function (S, Q, R) {
      if (!(M = M && O.call(N, S, Q, R))) {
        return D
      }
    });
    return !!M
  };
  var A = L.some = L.any = function (P, O, N) {
    O || (O = L.identity);
    var M = false;
    if (P == null) {
      return M
    }
    if (p && P.some === p) {
      return P.some(O, N)
    }
    H(P, function (S, Q, R) {
      if (M || (M = O.call(N, S, Q, R))) {
        return D
      }
    });
    return !!M
  };
  L.contains = L.include = function (N, M) {
    if (N == null) {
      return false
    }
    if (n && N.indexOf === n) {
      return N.indexOf(M) != -1
    }
    return A(N, function (O) {
      return O === M
    })
  };
  L.invoke = function (O, P) {
    var M = o.call(arguments, 2);
    var N = L.isFunction(P);
    return L.map(O, function (Q) {
      return (N ? P : Q[P]).apply(Q, M)
    })
  };
  L.pluck = function (N, M) {
    return L.map(N, function (O) {
      return O[M]
    })
  };
  L.where = function (N, M, O) {
    if (L.isEmpty(M)) {
      return O ? null : []
    }
    return L[O ? "find" : "filter"](N, function (Q) {
      for (var P in M) {
        if (M[P] !== Q[P]) {
          return false
        }
      }
      return true
    })
  };
  L.findWhere = function (N, M) {
    return L.where(N, M, true)
  };
  L.max = function (P, O, N) {
    if (!O && L.isArray(P) && P[0] === +P[0] && P.length < 65535) {
      return Math.max.apply(Math, P)
    }
    if (!O && L.isEmpty(P)) {
      return -Infinity
    }
    var M = {computed: -Infinity, value: -Infinity};
    H(P, function (T, Q, S) {
      var R = O ? O.call(N, T, Q, S) : T;
      R >= M.computed && (M = {value: T, computed: R})
    });
    return M.value
  };
  L.min = function (P, O, N) {
    if (!O && L.isArray(P) && P[0] === +P[0] && P.length < 65535) {
      return Math.min.apply(Math, P)
    }
    if (!O && L.isEmpty(P)) {
      return Infinity
    }
    var M = {computed: Infinity, value: Infinity};
    H(P, function (T, Q, S) {
      var R = O ? O.call(N, T, Q, S) : T;
      R < M.computed && (M = {value: T, computed: R})
    });
    return M.value
  };
  L.shuffle = function (P) {
    var O;
    var N = 0;
    var M = [];
    H(P, function (Q) {
      _request;
      O = L.random(N++);
      M[N - 1] = M[O];
      M[O] = Q
    });
    return M
  };
  var a = function (M) {
    return L.isFunction(M) ? M : function (N) {
      return N[M]
    }
  };
  L.sortBy = function (P, O, M) {
    var N = a(O);
    return L.pluck(L.map(P, function (S, Q, R) {
      return {value: S, index: Q, criteria: N.call(M, S, Q, R)}
    }).sort(function (T, S) {
      var R = T.criteria;
      var Q = S.criteria;
      if (R !== Q) {
        if (R > Q || R === void 0) {
          return 1
        }
        if (R < Q || Q === void 0) {
          return -1
        }
      }
      return T.index < S.index ? -1 : 1
    }), "value")
  };
  var t = function (R, Q, N, P) {
    var M = {};
    var O = a(Q || L.identity);
    H(R, function (U, S) {
      var T = O.call(N, U, S, R);
      P(M, T, U)
    });
    return M
  };
  L.groupBy = function (O, N, M) {
    return t(O, N, M, function (P, Q, R) {
      (L.has(P, Q) ? P[Q] : (P[Q] = [])).push(R)
    })
  };
  L.countBy = function (O, N, M) {
    return t(O, N, M, function (P, Q) {
      if (!L.has(P, Q)) {
        P[Q] = 0
      }
      P[Q]++
    })
  };
  L.sortedIndex = function (T, S, P, O) {
    P = P == null ? L.identity : a(P);
    var R = P.call(O, S);
    var M = 0, Q = T.length;
    while (M < Q) {
      var N = (M + Q) >>> 1;
      P.call(O, T[N]) < R ? M = N + 1 : Q = N
    }
    return M
  };
  L.toArray = function (M) {
    if (!M) {
      return []
    }
    if (L.isArray(M)) {
      return o.call(M)
    }
    if (M.length === +M.length) {
      return L.map(M, L.identity)
    }
    return L.values(M)
  };
  L.size = function (M) {
    if (M == null) {
      return 0
    }
    return (M.length === +M.length) ? M.length : L.keys(M).length
  };
  L.first = L.head = L.take = function (O, N, M) {
    if (O == null) {
      return void 0
    }
    return (N != null) && !M ? o.call(O, 0, N) : O[0]
  };
  L.initial = function (O, N, M) {
    return o.call(O, 0, O.length - ((N == null) || M ? 1 : N))
  };
  L.last = function (O, N, M) {
    if (O == null) {
      return void 0
    }
    if ((N != null) && !M) {
      return o.call(O, Math.max(O.length - N, 0))
    } else {
      return O[O.length - 1]
    }
  };
  L.rest = L.tail = L.drop = function (O, N, M) {
    return o.call(O, (N == null) || M ? 1 : N)
  };
  L.compact = function (M) {
    return L.filter(M, L.identity)
  };
  var x = function (N, O, M) {
    H(N, function (P) {
      if (L.isArray(P)) {
        O ? G.apply(M, P) : x(P, O, M)
      } else {
        M.push(P)
      }
    });
    return M
  };
  L.flatten = function (N, M) {
    return x(N, M, [])
  };
  L.without = function (M) {
    return L.difference(M, o.call(arguments, 1))
  };
  L.uniq = L.unique = function (S, R, Q, P) {
    if (L.isFunction(R)) {
      P = Q;
      Q = R;
      R = false
    }
    var N = Q ? L.map(S, Q, P) : S;
    var O = [];
    var M = [];
    H(N, function (U, T) {
      if (R ? (!T || M[M.length - 1] !== U) : !L.contains(M, U)) {
        M.push(U);
        O.push(S[T])
      }
    });
    return O
  };
  L.union = function () {
    return L.uniq(y.apply(C, arguments))
  };
  L.intersection = function (N) {
    var M = o.call(arguments, 1);
    return L.filter(L.uniq(N), function (O) {
      return L.every(M, function (P) {
        return L.indexOf(P, O) >= 0
      })
    })
  };
  L.difference = function (N) {
    var M = y.apply(C, o.call(arguments, 1));
    return L.filter(N, function (O) {
      return !L.contains(M, O)
    })
  };
  L.zip = function () {
    var M = o.call(arguments);
    var P = L.max(L.pluck(M, "length"));
    var O = new Array(P);
    for (var N = 0; N < P; N++) {
      O[N] = L.pluck(M, "" + N)
    }
    return O
  };
  L.object = function (Q, O) {
    if (Q == null) {
      return {}
    }
    var M = {};
    for (var P = 0, N = Q.length; P < N; P++) {
      if (O) {
        M[Q[P]] = O[P]
      } else {
        M[Q[P][0]] = Q[P][1]
      }
    }
    return M
  };
  L.indexOf = function (Q, O, P) {
    if (Q == null) {
      return -1
    }
    var N = 0, M = Q.length;
    if (P) {
      if (typeof P == "number") {
        N = (P < 0 ? Math.max(0, M + P) : P)
      } else {
        N = L.sortedIndex(Q, O);
        return Q[N] === O ? N : -1
      }
    }
    if (n && Q.indexOf === n) {
      return Q.indexOf(O, P)
    }
    for (; N < M; N++) {
      if (Q[N] === O) {
        return N
      }
    }
    return -1
  };
  L.lastIndexOf = function (Q, O, P) {
    if (Q == null) {
      return -1
    }
    var M = P != null;
    if (l && Q.lastIndexOf === l) {
      return M ? Q.lastIndexOf(O, P) : Q.lastIndexOf(O)
    }
    var N = (M ? P : Q.length);
    while (N--) {
      if (Q[N] === O) {
        return N
      }
    }
    return -1
  };
  L.range = function (R, P, Q) {
    if (arguments.length <= 1) {
      P = R || 0;
      R = 0
    }
    Q = arguments[2] || 1;
    var N = Math.max(Math.ceil((P - R) / Q), 0);
    var M = 0;
    var O = new Array(N);
    while (M < N) {
      O[M++] = R;
      R += Q
    }
    return O
  };
  L.bind = function (O, N) {
    if (O.bind === F && F) {
      return F.apply(O, o.call(arguments, 1))
    }
    var M = o.call(arguments, 2);
    return function () {
      return O.apply(N, M.concat(o.call(arguments)))
    }
  };
  L.partial = function (N) {
    var M = o.call(arguments, 1);
    return function () {
      return N.apply(this, M.concat(o.call(arguments)))
    }
  };
  L.bindAll = function (N) {
    var M = o.call(arguments, 1);
    if (M.length === 0) {
      M = L.functions(N)
    }
    H(M, function (O) {
      N[O] = L.bind(N[O], N)
    });
    return N
  };
  L.memoize = function (O, N) {
    var M = {};
    N || (N = L.identity);
    return function () {
      var P = N.apply(this, arguments);
      return L.has(M, P) ? M[P] : (M[P] = O.apply(this, arguments))
    }
  };
  L.delay = function (N, O) {
    var M = o.call(arguments, 2);
    return setTimeout(function () {
      return N.apply(null, M)
    }, O)
  };
  L.defer = function (M) {
    return L.delay.apply(L, [M, 1].concat(o.call(arguments, 1)))
  };
  L.throttle = function (R, T) {
    var P, O, S, M;
    var Q = 0;
    var N = function () {
      Q = new Date;
      S = null;
      M = R.apply(P, O)
    };
    return function () {
      var U = new Date;
      var V = T - (U - Q);
      P = this;
      O = arguments;
      if (V <= 0) {
        clearTimeout(S);
        S = null;
        Q = U;
        M = R.apply(P, O)
      } else {
        if (!S) {
          S = setTimeout(N, V)
        }
      }
      return M
    }
  };
  L.debounce = function (O, Q, N) {
    var P, M;
    return function () {
      var U = this, T = arguments;
      var S = function () {
        P = null;
        if (!N) {
          M = O.apply(U, T)
        }
      };
      var R = N && !P;
      clearTimeout(P);
      P = setTimeout(S, Q);
      if (R) {
        M = O.apply(U, T)
      }
      return M
    }
  };
  L.once = function (O) {
    var M = false, N;
    return function () {
      if (M) {
        return N
      }
      M = true;
      N = O.apply(this, arguments);
      O = null;
      return N
    }
  };
  L.wrap = function (M, N) {
    return function () {
      var O = [M];
      G.apply(O, arguments);
      return N.apply(this, O)
    }
  };
  L.compose = function () {
    var M = arguments;
    return function () {
      var N = arguments;
      for (var O = M.length - 1; O >= 0; O--) {
        N = [M[O].apply(this, N)]
      }
      return N[0]
    }
  };
  L.after = function (N, M) {
    if (N <= 0) {
      return M()
    }
    return function () {
      if (--N < 1) {
        return M.apply(this, arguments)
      }
    }
  };
  L.keys = e || function (O) {
    if (O !== Object(O)) {
      throw new TypeError("Invalid object")
    }
    var N = [];
    for (var M in O) {
      if (L.has(O, M)) {
        N[N.length] = M
      }
    }
    return N
  };
  L.values = function (O) {
    var M = [];
    for (var N in O) {
      if (L.has(O, N)) {
        M.push(O[N])
      }
    }
    return M
  };
  L.pairs = function (O) {
    var N = [];
    for (var M in O) {
      if (L.has(O, M)) {
        N.push([M, O[M]])
      }
    }
    return N
  };
  L.invert = function (O) {
    var M = {};
    for (var N in O) {
      if (L.has(O, N)) {
        M[O[N]] = N
      }
    }
    return M
  };
  L.functions = L.methods = function (O) {
    var N = [];
    for (var M in O) {
      if (L.isFunction(O[M])) {
        N.push(M)
      }
    }
    return N.sort()
  };
  L.extend = function (M) {
    H(o.call(arguments, 1), function (N) {
      if (N) {
        for (var O in N) {
          M[O] = N[O]
        }
      }
    });
    return M
  };
  L.pick = function (N) {
    var O = {};
    var M = y.apply(C, o.call(arguments, 1));
    H(M, function (P) {
      if (P in N) {
        O[P] = N[P]
      }
    });
    return O
  };
  L.omit = function (O) {
    var P = {};
    var N = y.apply(C, o.call(arguments, 1));
    for (var M in O) {
      if (!L.contains(N, M)) {
        P[M] = O[M]
      }
    }
    return P
  };
  L.defaults = function (M) {
    H(o.call(arguments, 1), function (N) {
      if (N) {
        for (var O in N) {
          if (M[O] == null) {
            M[O] = N[O]
          }
        }
      }
    });
    return M
  };
  L.clone = function (M) {
    if (!L.isObject(M)) {
      return M
    }
    return L.isArray(M) ? M.slice() : L.extend({}, M)
  };
  L.tap = function (N, M) {
    M(N);
    return N
  };
  var I = function (T, S, N, O) {
    if (T === S) {
      return T !== 0 || 1 / T == 1 / S
    }
    if (T == null || S == null) {
      return T === S
    }
    if (T instanceof L) {
      T = T._wrapped
    }
    if (S instanceof L) {
      S = S._wrapped
    }
    var Q = d.call(T);
    if (Q != d.call(S)) {
      return false
    }
    switch (Q) {
      case"[object String]":
        return T == String(S);
      case"[object Number]":
        return T != +T ? S != +S : (T == 0 ? 1 / T == 1 / S : T == +S);
      case"[object Date]":
      case"[object Boolean]":
        return +T == +S;
      case"[object RegExp]":
        return T.source == S.source && T.global == S.global && T.multiline == S.multiline && T.ignoreCase == S.ignoreCase
    }
    if (typeof T != "object" || typeof S != "object") {
      return false
    }
    var M = N.length;
    while (M--) {
      if (N[M] == T) {
        return O[M] == S
      }
    }
    N.push(T);
    O.push(S);
    var V = 0, W = true;
    if (Q == "[object Array]") {
      V = T.length;
      W = V == S.length;
      if (W) {
        while (V--) {
          if (!(W = I(T[V], S[V], N, O))) {
            break
          }
        }
      }
    } else {
      var R = T.constructor, P = S.constructor;
      if (R !== P && !(L.isFunction(R) && (R instanceof R) && L.isFunction(P) && (P instanceof P))) {
        return false
      }
      for (var U in T) {
        if (L.has(T, U)) {
          V++;
          if (!(W = L.has(S, U) && I(T[U], S[U], N, O))) {
            break
          }
        }
      }
      if (W) {
        for (U in S) {
          if (L.has(S, U) && !(V--)) {
            break
          }
        }
        W = !V
      }
    }
    N.pop();
    O.pop();
    return W
  };
  L.isEqual = function (N, M) {
    return I(N, M, [], [])
  };
  L.isEmpty = function (N) {
    if (N == null) {
      return true
    }
    if (L.isArray(N) || L.isString(N)) {
      return N.length === 0
    }
    for (var M in N) {
      if (L.has(N, M)) {
        return false
      }
    }
    return true
  };
  L.isElement = function (M) {
    return !!(M && M.nodeType === 1)
  };
  L.isArray = u || function (M) {
    return d.call(M) == "[object Array]"
  };
  L.isObject = function (M) {
    return M === Object(M)
  };
  H(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (M) {
    L["is" + M] = function (N) {
      return d.call(N) == "[object " + M + "]"
    }
  });
  if (!L.isArguments(arguments)) {
    L.isArguments = function (M) {
      return !!(M && L.has(M, "callee"))
    }
  }
  if (typeof (/./) !== "function") {
    L.isFunction = function (M) {
      return typeof M === "function"
    }
  }
  L.isFinite = function (M) {
    return isFinite(M) && !isNaN(parseFloat(M))
  };
  L.isNaN = function (M) {
    return L.isNumber(M) && M != +M
  };
  L.isBoolean = function (M) {
    return M === true || M === false || d.call(M) == "[object Boolean]"
  };
  L.isNull = function (M) {
    return M === null
  };
  L.isUndefined = function (M) {
    return M === void 0
  };
  L.has = function (N, M) {
    return j.call(N, M)
  };
  L.noConflict = function () {
    w._ = k;
    return this
  };
  L.identity = function (M) {
    return M
  };
  L.times = function (Q, P, O) {
    var M = Array(Q);
    for (var N = 0; N < Q; N++) {
      M[N] = P.call(O, N)
    }
    return M
  };
  L.random = function (N, M) {
    if (M == null) {
      M = N;
      N = 0
    }
    return N + Math.floor(Math.random() * (M - N + 1))
  };
  var m = {escape: {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "/": "&#x2F;"}};
  m.unescape = L.invert(m.escape);
  var J = {
    escape: new RegExp("[" + L.keys(m.escape).join("") + "]", "g"),
    unescape: new RegExp("(" + L.keys(m.unescape).join("|") + ")", "g")
  };
  L.each(["escape", "unescape"], function (M) {
    L[M] = function (N) {
      if (N == null) {
        return ""
      }
      return ("" + N).replace(J[M], function (O) {
        return m[M][O]
      })
    }
  });
  L.result = function (M, O) {
    if (M == null) {
      return null
    }
    var N = M[O];
    return L.isFunction(N) ? N.call(M) : N
  };
  L.mixin = function (M) {
    H(L.functions(M), function (N) {
      var O = L[N] = M[N];
      L.prototype[N] = function () {
        var P = [this._wrapped];
        G.apply(P, arguments);
        return s.call(this, O.apply(L, P))
      }
    })
  };
  var z = 0;
  L.uniqueId = function (M) {
    var N = ++z + "";
    return M ? M + N : N
  };
  L.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
  var v = /(.)^/;
  var h = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", "\t": "t", "\u2028": "u2028", "\u2029": "u2029"};
  var i = /\\|'|\r|\n|\t|\u2028|\u2029/g;
  L.template = function (U, P, O) {
    var N;
    O = L.defaults({}, O, L.templateSettings);
    var Q = new RegExp([(O.escape || v).source, (O.interpolate || v).source, (O.evaluate || v).source].join("|") + "|$", "g");
    var R = 0;
    var M = "__p+='";
    U.replace(Q, function (W, X, V, Z, Y) {
      M += U.slice(R, Y).replace(i, function (aa) {
        return "\\" + h[aa]
      });
      if (X) {
        M += "'+\n((__t=(" + X + "))==null?'':_.escape(__t))+\n'"
      }
      if (V) {
        M += "'+\n((__t=(" + V + "))==null?'':__t)+\n'"
      }
      if (Z) {
        M += "';\n" + Z + "\n__p+='"
      }
      R = Y + W.length;
      return W
    });
    M += "';\n";
    if (!O.variable) {
      M = "with(obj||{}){\n" + M + "}\n"
    }
    M = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + M + "return __p;\n";
    try {
      N = new Function(O.variable || "obj", "_", M)
    } catch (S) {
      S.source = M;
      throw S
    }
    if (P) {
      return N(P, L)
    }
    var T = function (V) {
      return N.call(this, V, L)
    };
    T.source = "function(" + (O.variable || "obj") + "){\n" + M + "}";
    return T
  };
  L.chain = function (M) {
    return L(M).chain()
  };
  var s = function (M) {
    return this._chain ? L(M).chain() : M
  };
  L.mixin(L);
  H(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (M) {
    var N = C[M];
    L.prototype[M] = function () {
      var O = this._wrapped;
      N.apply(O, arguments);
      if ((M == "shift" || M == "splice") && O.length === 0) {
        delete O[0]
      }
      return s.call(this, O)
    }
  });
  H(["concat", "join", "slice"], function (M) {
    var N = C[M];
    L.prototype[M] = function () {
      return s.call(this, N.apply(this._wrapped, arguments))
    }
  });
  L.extend(L.prototype, {
    chain: function () {
      this._chain = true;
      return this
    }, value: function () {
      return this._wrapped
    }
  })
}).call(this);
(function (a) {
  a.Bmob = a.Bmob || {};
  var d = a.Bmob;
/*
  if (typeof (exports) !== "undefined" && exports._) {
    d._ = exports._.noConflict();
    try {
      d.localStorage = require("localStorage")
    } catch (b) {
      d.localStorage = require("./localStorage.js").localStorage
    }
    d.XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    exports.Bmob = d
  } else {
    d._ = _.noConflict();
    if (typeof (localStorage) !== "undefined") {
      d.localStorage = localStorage
    }
    if (typeof (XMLHttpRequest) !== "undefined") {
      d.XMLHttpRequest = XMLHttpRequest
    }
  }
*/
  if (typeof ($) !== "undefined") {
    d.$ = $
  }
  var c = function () {
  };
  var e = function (g, f, h) {
    var i;
    if (f && f.hasOwnProperty("constructor")) {
      i = f.constructor
    } else {
      i = function () {
        g.apply(this, arguments)
      }
    }
    d._.extend(i, g);
    c.prototype = g.prototype;
    i.prototype = new c();
    if (f) {
      d._.extend(i.prototype, f)
    }
    if (h) {
      d._.extend(i, h)
    }
    i.prototype.constructor = i;
    i.__super__ = g.prototype;
    return i
  };
  d.serverURL = "https://api.bmob.cn";
  d.fileURL = "http://file.bmob.cn";
  if (typeof (process) !== "undefined" && process.versions && process.versions.node) {
    d._isNode = true
  }
  d.initialize = function (h, g, f) {
    d._initialize(h, g, f)
  };
  d._initialize = function (h, g, f) {
    d.applicationId = h;
    d.applicationKey = g;
    d.masterKey = f;
    d._useMasterKey = true
  };
  if (d._isNode) {
    d.initialize = d._initialize
  }
  d._getBmobPath = function (f) {
    if (!d.applicationId) {
      throw "You need to call Bmob.initialize before using Bmob."
    }
    if (!f) {
      f = ""
    }
    if (!d._.isString(f)) {
      throw "Tried to get a localStorage path that wasn't a String."
    }
    if (f[0] === "/") {
      f = f.substring(1)
    }
    return "Bmob/" + d.applicationId + "/" + f
  };
  d._installationId = null;
  d._getInstallationId = function () {
    if (d._installationId) {
      return d._installationId
    }
    var g = d._getBmobPath("installationId");
    d._installationId = d.localStorage.getItem(g);
    if (!d._installationId || d._installationId === "") {
      var f = function () {
        return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1)
      };
      d._installationId = (f() + f() + "-" + f() + "-" + f() + "-" + f() + "-" + f() + f() + f());
      d.localStorage.setItem(g, d._installationId)
    }
    return d._installationId
  };
  d._parseDate = function (o) {
    var l = new RegExp("^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})T([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})(.([0-9]+))?Z$");
    var j = l.exec(o);
    if (!j) {
      return null
    }
    var m = j[1] || 0;
    var k = (j[2] || 1) - 1;
    var n = j[3] || 0;
    var h = j[4] || 0;
    var g = j[5] || 0;
    var f = j[6] || 0;
    var i = j[8] || 0;
    return new Date(Date.UTC(m, k, n, h, g, f, i))
  };
  d._ajaxIE8 = function (j, g, h) {
    var i = new d.Promise();
    var f = new XDomainRequest();
    f.onload = function () {
      var k;
      try {
        k = JSON.parse(f.responseText)
      } catch (l) {
        i.reject(l)
      }
      if (k) {
        i.resolve(k)
      }
    };
    f.onerror = f.ontimeout = function () {
      i.reject(f)
    };
    f.onprogress = function () {
    };
    f.open(j, g);
    f.send(h);
    return i
  };
    /*
  d._ajax = function (f, g, h, k, j) {
    var n = {success: k, error: j};
    if (typeof (XDomainRequest) !== "undefined") {
      return d._ajaxIE8(f, g, h)._thenRunCallbacks(n)
    }
    var m = new d.Promise();
    var i = false;

    var l = new d.XMLHttpRequest();
    l.onreadystatechange = function () {
      if (l.readyState === 4) {
        if (i) {
          return
        }
        i = true;
        var p;
        try {
          p = JSON.parse(l.responseText)
        } catch (q) {
        }
        if (l.status == 200 && p && p.code && p.error) {
          l.status = 400;
          m.reject(l)
        } else {
          if (l.status >= 200 && l.status < 300) {
            var o;
            try {
              o = JSON.parse(l.responseText)
            } catch (q) {
              m.reject(q)
            }
            if (o) {
              m.resolve(o, l.status, l)
            }
          }
        }
      }
    };
    l.open(f, g, true);
    l.setRequestHeader("Content-Type", "text/plain");
    if (d._isNode) {
      l.setRequestHeader("User-Agent", "Bmob/" + d.VERSION + " (NodeJS " + process.versions.node + ")")
    }
    l.send(h);
    return m._thenRunCallbacks(n)
  };
  */
  d._extend = function (f, g) {
    var h = e(this, f, g);
    h.extend = this.extend;
    return h
  };
  d._request = function (h, k, g, m, j) {
    if (!d.applicationId) {
      throw "You must specify your applicationId using Bmob.initialize"
    }
    if (!d.applicationKey && !d.masterKey) {
      throw "You must specify a key using Bmob.initialize"
    }
    var i = d.serverURL;
    if (i.charAt(i.length - 1) !== "/") {
      i += "/"
    }
    if (h.indexOf("2/") < 0) {
      i += "1/" + h
    } else {
      i += h
    }
    if (k) {
      i += "/" + k
    }
    if (g) {
      i += "/" + g
    }
    if ((h === "users" || h === "classes") && m === "PUT" && j._fetchWhenSave) {
      delete j._fetchWhenSave;
      i += "?new=true"
    }
    j = d._.clone(j || {});
    if (m !== "POST") {
      j._Method = m;
      m = "POST"
    }
    j._ApplicationId = d.applicationId;
    j._RestKey = d.applicationKey;
    if (d._useMasterKey && d.masterKey != undefined) {
      j._MasterKey = d.masterKey
    }
    j._ClientVersion = d.VERSION;
    j._InstallationId = d._getInstallationId();
    var f = d.User.current();
    if (f && f._sessionToken) {
      j._SessionToken = f._sessionToken
    }
    var l = JSON.stringify(j);
    return d._ajax(m, i, l).then(null, function (n) {
      var p;
      if (n && n.responseText) {
        try {
          var o = JSON.parse(n.responseText);
          if (o) {
            p = new d.Error(o.code, o.error)
          }
        } catch (q) {
        }
      }
      p = p || new d.Error(-1, n.responseText);
      return d.Promise.error(p)
    })
  };
  d._getValue = function (f, g) {
    if (!(f && f[g])) {
      return null
    }
    return d._.isFunction(f[g]) ? f[g]() : f[g]
  };
  d._encode = function (j, i, h) {
    var g = d._;
    if (j instanceof d.Object) {
      if (h) {
        throw "Bmob.Objects not allowed here"
      }
      if (!i || g.include(i, j) || !j._hasData) {
        return j._toPointer()
      }
      if (!j.dirty()) {
        i = i.concat(j);
        return d._encode(j._toFullJSON(i), i, h)
      }
      throw "Tried to save an object with a pointer to a new, unsaved object."
    }
    if (j instanceof d.ACL) {
      return j.toJSON()
    }
    if (g.isDate(j)) {
      return {__type: "Date", iso: j.toJSON()}
    }
    if (j instanceof d.GeoPoint) {
      return j.toJSON()
    }
    if (g.isArray(j)) {
      return g.map(j, function (k) {
        return d._encode(k, i, h)
      })
    }
    if (g.isRegExp(j)) {
      return j.source
    }
    if (j instanceof d.Relation) {
      return j.toJSON()
    }
    if (j instanceof d.Op) {
      return j.toJSON()
    }
    if (j instanceof d.File) {
      if (!j.url()) {
        throw "Tried to save an object containing an unsaved file."
      }
      return {__type: "File", cdn: j.cdn(), filename: j.name(), url: j.url()}
    }
    if (g.isObject(j)) {
      var f = {};
      d._objectEach(j, function (m, l) {
        f[l] = d._encode(m, i, h)
      });
      return f
    }
    return j
  };
  d._decode = function (i, l) {
    var g = d._;
    if (!g.isObject(l)) {
      return l
    }
    if (g.isArray(l)) {
      d._arrayEach(l, function (o, n) {
        l[n] = d._decode(n, o)
      });
      return l
    }
    if (l instanceof d.Object) {
      return l
    }
    if (l instanceof d.File) {
      return l
    }
    if (l instanceof d.Op) {
      return l
    }
    if (l.__op) {
      return d.Op._decode(l)
    }
    if (l.__type === "Pointer") {
      var j = l.className;
      var m = d.Object._create(j);
      if (l.createdAt) {
        delete l.__type;
        delete l.className;
        m._finishFetch(l, true)
      } else {
        m._finishFetch({objectId: l.objectId}, false)
      }
      return m
    }
    if (l.__type === "Object") {
      var j = l.className;
      delete l.__type;
      delete l.className;
      var f = d.Object._create(j);
      f._finishFetch(l, true);
      return f
    }
    if (l.__type === "Date") {
      return l.iso
    }
    if (l.__type === "GeoPoint") {
      return new d.GeoPoint({latitude: l.latitude, longitude: l.longitude})
    }
    if (i === "ACL") {
      if (l instanceof d.ACL) {
        return l
      }
      return new d.ACL(l)
    }
    if (l.__type === "Relation") {
      var k = new d.Relation(null, i);
      k.targetClassName = l.className;
      return k
    }
    if (l.__type === "File") {
      if (l.url != undefined && l.url != null) {
        if (l.url.indexOf("http") >= 0) {
          var h = {_name: l.filename, _url: l.url, _group: l.group}
        } else {
          var h = {_name: l.filename, _url: d.fileURL + "/" + l.url, _group: l.group}
        }
      } else {
        var h = {_name: l.filename, _url: l.url, _group: l.group}
      }
      return h
    }
    d._objectEach(l, function (o, n) {
      l[n] = d._decode(n, o)
    });
    return l
  };
  d._arrayEach = d._.each;
  d._traverse = function (g, h, f) {
    if (g instanceof d.Object) {
      f = f || [];
      if (d._.indexOf(f, g) >= 0) {
        return
      }
      f.push(g);
      d._traverse(g.attributes, h, f);
      return h(g)
    }
    if (g instanceof d.Relation || g instanceof d.File) {
      return h(g)
    }
    if (d._.isArray(g)) {
      d._.each(g, function (k, j) {
        var i = d._traverse(k, h, f);
        if (i) {
          g[j] = i
        }
      });
      return h(g)
    }
    if (d._.isObject(g)) {
      d._each(g, function (k, j) {
        var i = d._traverse(k, h, f);
        if (i) {
          g[j] = i
        }
      });
      return h(g)
    }
    return h(g)
  };
  d._objectEach = d._each = function (g, h) {
    var f = d._;
    if (f.isObject(g)) {
      f.each(f.keys(g), function (i) {
        h(g[i], i)
      })
    } else {
      f.each(g, h)
    }
  };
  d._isNullOrUndefined = function (f) {
    return d._.isNull(f) || d._.isUndefined(f)
  }
}(this));
(function (a) {
  a.Bmob = a.Bmob || {};
  var c = a.Bmob;
  var b = c._;
  c.Error = function (e, d) {
    this.code = e;
    this.message = d
  };
  b.extend(c.Error, {
    OTHER_CAUSE: -1,
    OBJECT_NOT_FOUND: 101,
    INVALID_QUERY: 102,
    INVALID_CLASS_NAME: 103,
    RELATIONDOCNOTEXISTS: 104,
    INVALID_KEY_NAME: 105,
    INVALID_POINTER: 106,
    INVALID_JSON: 107,
    USERNAME_PASSWORD_REQUIRED: 108,
    INCORRECT_TYPE: 111,
    REQUEST_MUST_ARRAY: 112,
    REQUEST_MUST_OBJECT: 113,
    OBJECT_TOO_LARGE: 114,
    GEO_ERROR: 117,
    EMAIL_VERIFY_MUST_OPEN: 120,
    CACHE_MISS: 120,
    INVALID_DEVICE_TOKEN: 131,
    INVALID_INSTALLID: 132,
    INVALID_DEVICE_TYPE: 133,
    DEVICE_TOKEN_EXIST: 134,
    INSTALLID_EXIST: 135,
    DEVICE_TOKEN_NOT_FOR_ANDROID: 136,
    INVALID_INSTALL_OPERATE: 137,
    READ_ONLY: 138,
    INVALID_ROLE_NAME: 139,
    MISS_PUSH_DATA: 141,
    INVALID_PUSH_TIME: 142,
    INVALID_PUSH_EXPIRE: 143,
    PUSH_TIME_MUST_BEFORE_NOW: 144,
    FILE_SIZE_ERROR: 145,
    FILE_NAME_ERROR: 146,
    FILE_NAME_ERROR: 147,
    FILE_LEN_ERROR: 148,
    FILE_UPLOAD_ERROR: 150,
    FILE_DELETE_ERROR: 151,
    IMAGE_ERROR: 160,
    IMAGE_MODE_ERROR: 161,
    IMAGE_WIDTH_ERROR: 162,
    IMAGE_HEIGHT_ERROR: 163,
    IMAGE_LONGEDGE_ERROR: 164,
    IMAGE_SHORTEDGE_ERROR: 165,
    USER_MISSING: 201,
    USER_NAME_TOKEN: 202,
    EMAIL_EXIST: 203,
    NO_EMAIL: 204,
    NOT_FOUND_EMAIL: 205,
    SESSIONTOKEN_ERROR: 206,
    VALID_ERROR: 301
  })
}(this));
(function () {
  var a = this;
  var c = (a.Bmob || (a.Bmob = {}));
  var b = /\s+/;
  var d = Array.prototype.slice;
  c.Events = {
    on: function (h, l, g) {
      var f, j, i, e, k;
      if (!l) {
        return this
      }
      h = h.split(b);
      f = this._callbacks || (this._callbacks = {});
      j = h.shift();
      while (j) {
        k = f[j];
        i = k ? k.tail : {};
        i.next = e = {};
        i.context = g;
        i.callback = l;
        f[j] = {tail: e, next: k ? k.next : i};
        j = h.shift()
      }
      return this
    }, off: function (l, j, f) {
      var e, m, g, i, h, k;
      if (!(m = this._callbacks)) {
        return
      }
      if (!(l || j || f)) {
        delete this._callbacks;
        return this
      }
      l = l ? l.split(b) : _.keys(m);
      e = l.shift();
      while (e) {
        g = m[e];
        delete m[e];
        if (!g || !(j || f)) {
          continue
        }
        i = g.tail;
        g = g.next;
        while (g !== i) {
          h = g.callback;
          k = g.context;
          if ((j && h !== j) || (f && k !== f)) {
            this.on(e, h, k)
          }
          g = g.next
        }
        e = l.shift()
      }
      return this
    }, trigger: function (h) {
      var l, k, g, f, e, j, i;
      if (!(g = this._callbacks)) {
        return this
      }
      j = g.all;
      h = h.split(b);
      i = d.call(arguments, 1);
      l = h.shift();
      while (l) {
        k = g[l];
        if (k) {
          f = k.tail;
          while ((k = k.next) !== f) {
            k.callback.apply(k.context || this, i)
          }
        }
        k = j;
        if (k) {
          f = k.tail;
          e = [l].concat(i);
          while ((k = k.next) !== f) {
            k.callback.apply(k.context || this, e)
          }
        }
        l = h.shift()
      }
      return this
    }
  };
  c.Events.bind = c.Events.on;
  c.Events.unbind = c.Events.off
}.call(this));
(function (a) {
  a.Bmob = a.Bmob || {};
  var c = a.Bmob;
  var b = c._;
  c.GeoPoint = function (f, e) {
    if (b.isArray(f)) {
      c.GeoPoint._validate(f[0], f[1]);
      this.latitude = f[0];
      this.longitude = f[1]
    } else {
      if (b.isObject(f)) {
        c.GeoPoint._validate(f.latitude, f.longitude);
        this.latitude = f.latitude;
        this.longitude = f.longitude
      } else {
        if (b.isNumber(f) && b.isNumber(e)) {
          c.GeoPoint._validate(f, e);
          this.latitude = f;
          this.longitude = e
        } else {
          this.latitude = 0;
          this.longitude = 0
        }
      }
    }
    var d = this;
    if (this.__defineGetter__ && this.__defineSetter__) {
      this._latitude = this.latitude;
      this._longitude = this.longitude;
      this.__defineGetter__("latitude", function () {
        return d._latitude
      });
      this.__defineGetter__("longitude", function () {
        return d._longitude
      });
      this.__defineSetter__("latitude", function (g) {
        c.GeoPoint._validate(g, d.longitude);
        d._latitude = g
      });
      this.__defineSetter__("longitude", function (g) {
        c.GeoPoint._validate(d.latitude, g);
        d._longitude = g
      })
    }
  };
  c.GeoPoint._validate = function (e, d) {
    if (e < -90) {
      throw "Bmob.GeoPoint latitude " + e + " < -90.0."
    }
    if (e > 90) {
      throw "Bmob.GeoPoint latitude " + e + " > 90.0."
    }
    if (d < -180) {
      throw "Bmob.GeoPoint longitude " + d + " < -180.0."
    }
    if (d > 180) {
      throw "Bmob.GeoPoint longitude " + d + " > 180.0."
    }
  };
  c.GeoPoint.current = function (d) {
    var e = new c.Promise();
    navigator.geolocation.getCurrentPosition(function (f) {
      e.resolve(new c.GeoPoint({latitude: f.coords.latitude, longitude: f.coords.longitude}))
    }, function (f) {
      e.reject(f)
    });
    return e._thenRunCallbacks(d)
  };
  c.GeoPoint.prototype = {
    toJSON: function () {
      c.GeoPoint._validate(this.latitude, this.longitude);
      return {__type: "GeoPoint", latitude: this.latitude, longitude: this.longitude}
    }, radiansTo: function (n) {
      var h = Math.PI / 180;
      var d = this.latitude * h;
      var j = this.longitude * h;
      var m = n.latitude * h;
      var g = n.longitude * h;
      var f = d - m;
      var i = j - g;
      var e = Math.sin(f / 2);
      var k = Math.sin(i / 2);
      var l = ((e * e) + (Math.cos(d) * Math.cos(m) * k * k));
      l = Math.min(1, l);
      return 2 * Math.asin(Math.sqrt(l))
    }, kilometersTo: function (d) {
      return this.radiansTo(d) * 6371
    }, milesTo: function (d) {
      return this.radiansTo(d) * 3958.8
    }
  }
}(this));
(function (a) {
  a.Bmob = a.Bmob || {};
  var d = a.Bmob;
  var c = d._;
  var b = "*";
  d.ACL = function (f) {
    var e = this;
    e.permissionsById = {};
    if (c.isObject(f)) {
      if (f instanceof d.User) {
        e.setReadAccess(f, true);
        e.setWriteAccess(f, true)
      } else {
        if (c.isFunction(f)) {
          throw "Bmob.ACL() called with a function.  Did you forget ()?"
        }
        d._objectEach(f, function (h, g) {
          if (!c.isString(g)) {
            throw "Tried to create an ACL with an invalid userId."
          }
          e.permissionsById[g] = {};
          d._objectEach(h, function (j, i) {
            if (i !== "read" && i !== "write") {
              throw "Tried to create an ACL with an invalid permission type."
            }
            if (!c.isBoolean(j)) {
              throw "Tried to create an ACL with an invalid permission value."
            }
            e.permissionsById[g][i] = j
          })
        })
      }
    }
  };
  d.ACL.prototype.toJSON = function () {
    return c.clone(this.permissionsById)
  };
  d.ACL.prototype._setAccess = function (e, f, h) {
    if (f instanceof d.User) {
      f = f.id
    } else {
      if (f instanceof d.Role) {
        f = "role:" + f.getName()
      }
    }
    if (!c.isString(f)) {
      throw "userId must be a string."
    }
    if (!c.isBoolean(h)) {
      throw "allowed must be either true or false."
    }
    var g = this.permissionsById[f];
    if (!g) {
      if (!h) {
        return
      } else {
        g = {};
        this.permissionsById[f] = g
      }
    }
    if (h) {
      this.permissionsById[f][e] = true
    } else {
      delete g[e];
      if (c.isEmpty(g)) {
        delete g[f]
      }
    }
  };
  d.ACL.prototype._getAccess = function (e, f) {
    if (f instanceof d.User) {
      f = f.id
    } else {
      if (f instanceof d.Role) {
        f = "role:" + f.getName()
      }
    }
    var g = this.permissionsById[f];
    if (!g) {
      return false
    }
    return g[e] ? true : false
  };
  d.ACL.prototype.setReadAccess = function (e, f) {
    this._setAccess("read", e, f)
  };
  d.ACL.prototype.getReadAccess = function (e) {
    return this._getAccess("read", e)
  };
  d.ACL.prototype.setWriteAccess = function (e, f) {
    this._setAccess("write", e, f)
  };
  d.ACL.prototype.getWriteAccess = function (e) {
    return this._getAccess("write", e)
  };
  d.ACL.prototype.setPublicReadAccess = function (e) {
    this.setReadAccess(b, e)
  };
  d.ACL.prototype.getPublicReadAccess = function () {
    return this.getReadAccess(b)
  };
  d.ACL.prototype.setPublicWriteAccess = function (e) {
    this.setWriteAccess(b, e)
  };
  d.ACL.prototype.getPublicWriteAccess = function () {
    return this.getWriteAccess(b)
  };
  d.ACL.prototype.getRoleReadAccess = function (e) {
    if (e instanceof d.Role) {
      e = e.getName()
    }
    if (c.isString(e)) {
      return this.getReadAccess("role:" + e)
    }
    throw "role must be a Bmob.Role or a String"
  };
  d.ACL.prototype.getRoleWriteAccess = function (e) {
    if (e instanceof d.Role) {
      e = e.getName()
    }
    if (c.isString(e)) {
      return this.getWriteAccess("role:" + e)
    }
    throw "role must be a Bmob.Role or a String"
  };
  d.ACL.prototype.setRoleReadAccess = function (f, e) {
    if (f instanceof d.Role) {
      f = f.getName()
    }
    if (c.isString(f)) {
      this.setReadAccess("role:" + f, e);
      return
    }
    throw "role must be a Bmob.Role or a String"
  };
  d.ACL.prototype.setRoleWriteAccess = function (f, e) {
    if (f instanceof d.Role) {
      f = f.getName()
    }
    if (c.isString(f)) {
      this.setWriteAccess("role:" + f, e);
      return
    }
    throw "role must be a Bmob.Role or a String"
  }
}(this));
(function (a) {
  a.Bmob = a.Bmob || {};
  var c = a.Bmob;
  var b = c._;
  c.Op = function () {
    this._initialize.apply(this, arguments)
  };
  c.Op.prototype = {
    _initialize: function () {
    }
  };
  b.extend(c.Op, {
    _extend: c._extend, _opDecoderMap: {}, _registerDecoder: function (d, e) {
      c.Op._opDecoderMap[d] = e
    }, _decode: function (d) {
      var e = c.Op._opDecoderMap[d.__op];
      if (e) {
        return e(d)
      } else {
        return undefined
      }
    }
  });
  c.Op._registerDecoder("Batch", function (d) {
    var e = null;
    c._arrayEach(d.ops, function (f) {
      f = c.Op._decode(f);
      e = f._mergeWithPrevious(e)
    });
    return e
  });
  c.Op.Set = c.Op._extend({
    _initialize: function (d) {
      this._value = d
    }, value: function () {
      return this._value
    }, toJSON: function () {
      return c._encode(this.value())
    }, _mergeWithPrevious: function (d) {
      return this
    }, _estimate: function (d) {
      return this.value()
    }
  });
  c.Op._UNSET = {};
  c.Op.Unset = c.Op._extend({
    toJSON: function () {
      return {__op: "Delete"}
    }, _mergeWithPrevious: function (d) {
      return this
    }, _estimate: function (d) {
      return c.Op._UNSET
    }
  });
  c.Op._registerDecoder("Delete", function (d) {
    return new c.Op.Unset()
  });
  c.Op.Increment = c.Op._extend({
    _initialize: function (d) {
      this._amount = d
    }, amount: function () {
      return this._amount
    }, toJSON: function () {
      return {__op: "Increment", amount: this._amount}
    }, _mergeWithPrevious: function (d) {
      if (!d) {
        return this
      } else {
        if (d instanceof c.Op.Unset) {
          return new c.Op.Set(this.amount())
        } else {
          if (d instanceof c.Op.Set) {
            return new c.Op.Set(d.value() + this.amount())
          } else {
            if (d instanceof c.Op.Increment) {
              return new c.Op.Increment(this.amount() + d.amount())
            } else {
              throw "Op is invalid after previous op."
            }
          }
        }
      }
    }, _estimate: function (d) {
      if (!d) {
        return this.amount()
      }
      return d + this.amount()
    }
  });
  c.Op._registerDecoder("Increment", function (d) {
    return new c.Op.Increment(d.amount)
  });
  c.Op.Add = c.Op._extend({
    _initialize: function (d) {
      this._objects = d
    }, objects: function () {
      return this._objects
    }, toJSON: function () {
      return {__op: "Add", objects: c._encode(this.objects())}
    }, _mergeWithPrevious: function (d) {
      if (!d) {
        return this
      } else {
        if (d instanceof c.Op.Unset) {
          return new c.Op.Set(this.objects())
        } else {
          if (d instanceof c.Op.Set) {
            return new c.Op.Set(this._estimate(d.value()))
          } else {
            if (d instanceof c.Op.Add) {
              return new c.Op.Add(d.objects().concat(this.objects()))
            } else {
              throw "Op is invalid after previous op."
            }
          }
        }
      }
    }, _estimate: function (d) {
      if (!d) {
        return b.clone(this.objects())
      } else {
        return d.concat(this.objects())
      }
    }
  });
  c.Op._registerDecoder("Add", function (d) {
    return new c.Op.Add(c._decode(undefined, d.objects))
  });
  c.Op.AddUnique = c.Op._extend({
    _initialize: function (d) {
      this._objects = b.uniq(d)
    }, objects: function () {
      return this._objects
    }, toJSON: function () {
      return {__op: "AddUnique", objects: c._encode(this.objects())}
    }, _mergeWithPrevious: function (d) {
      if (!d) {
        return this
      } else {
        if (d instanceof c.Op.Unset) {
          return new c.Op.Set(this.objects())
        } else {
          if (d instanceof c.Op.Set) {
            return new c.Op.Set(this._estimate(d.value()))
          } else {
            if (d instanceof c.Op.AddUnique) {
              return new c.Op.AddUnique(this._estimate(d.objects()))
            } else {
              throw "Op is invalid after previous op."
            }
          }
        }
      }
    }, _estimate: function (d) {
      if (!d) {
        return b.clone(this.objects())
      } else {
        var e = b.clone(d);
        c._arrayEach(this.objects(), function (h) {
          if (h instanceof c.Object && h.id) {
            var g = b.find(e, function (i) {
              return (i instanceof c.Object) && (i.id === h.id)
            });
            if (!g) {
              e.push(h)
            } else {
              var f = b.indexOf(e, g);
              e[f] = h
            }
          } else {
            if (!b.contains(e, h)) {
              e.push(h)
            }
          }
        });
        return e
      }
    }
  });
  c.Op._registerDecoder("AddUnique", function (d) {
    return new c.Op.AddUnique(c._decode(undefined, d.objects))
  });
  c.Op.Remove = c.Op._extend({
    _initialize: function (d) {
      this._objects = b.uniq(d)
    }, objects: function () {
      return this._objects
    }, toJSON: function () {
      return {__op: "Remove", objects: c._encode(this.objects())}
    }, _mergeWithPrevious: function (d) {
      if (!d) {
        return this
      } else {
        if (d instanceof c.Op.Unset) {
          return d
        } else {
          if (d instanceof c.Op.Set) {
            return new c.Op.Set(this._estimate(d.value()))
          } else {
            if (d instanceof c.Op.Remove) {
              return new c.Op.Remove(b.union(d.objects(), this.objects()))
            } else {
              throw "Op is invalid after previous op."
            }
          }
        }
      }
    }, _estimate: function (d) {
      if (!d) {
        return []
      } else {
        var e = b.difference(d, this.objects());
        c._arrayEach(this.objects(), function (f) {
          if (f instanceof c.Object && f.id) {
            e = b.reject(e, function (g) {
              return (g instanceof c.Object) && (g.id === f.id)
            })
          }
        });
        return e
      }
    }
  });
  c.Op._registerDecoder("Remove", function (d) {
    return new c.Op.Remove(c._decode(undefined, d.objects))
  });
  c.Op.Relation = c.Op._extend({
    _initialize: function (g, e) {
      this._targetClassName = null;
      var d = this;
      var f = function (h) {
        if (h instanceof c.Object) {
          if (!h.id) {
            throw "You can't add an unsaved Bmob.Object to a relation."
          }
          if (!d._targetClassName) {
            d._targetClassName = h.className
          }
          if (d._targetClassName !== h.className) {
            throw "Tried to create a Bmob.Relation with 2 different types: " + d._targetClassName + " and " + h.className + "."
          }
          return h.id
        }
        return h
      };
      this.relationsToAdd = b.uniq(b.map(g, f));
      this.relationsToRemove = b.uniq(b.map(e, f))
    }, added: function () {
      var d = this;
      return b.map(this.relationsToAdd, function (e) {
        var f = c.Object._create(d._targetClassName);
        f.id = e;
        return f
      })
    }, removed: function () {
      var d = this;
      return b.map(this.relationsToRemove, function (e) {
        var f = c.Object._create(d._targetClassName);
        f.id = e;
        return f
      })
    }, toJSON: function () {
      var h = null;
      var f = null;
      var e = this;
      var g = function (i) {
        return {__type: "Pointer", className: e._targetClassName, objectId: i}
      };
      var d = null;
      if (this.relationsToAdd.length > 0) {
        d = b.map(this.relationsToAdd, g);
        h = {__op: "AddRelation", objects: d}
      }
      if (this.relationsToRemove.length > 0) {
        d = b.map(this.relationsToRemove, g);
        f = {__op: "RemoveRelation", objects: d}
      }
      if (h && f) {
        return {__op: "Batch", ops: [h, f]}
      }
      return h || f || {}
    }, _mergeWithPrevious: function (g) {
      if (!g) {
        return this
      } else {
        if (g instanceof c.Op.Unset) {
          throw "You can't modify a relation after deleting it."
        } else {
          if (g instanceof c.Op.Relation) {
            if (g._targetClassName && g._targetClassName !== this._targetClassName) {
              throw "Related object must be of class " + g._targetClassName + ", but " + this._targetClassName + " was passed in."
            }
            var f = b.union(b.difference(g.relationsToAdd, this.relationsToRemove), this.relationsToAdd);
            var e = b.union(b.difference(g.relationsToRemove, this.relationsToAdd), this.relationsToRemove);
            var d = new c.Op.Relation(f, e);
            d._targetClassName = this._targetClassName;
            return d
          } else {
            throw "Op is invalid after previous op."
          }
        }
      }
    }, _estimate: function (e, d, f) {
      if (!e) {
        var g = new c.Relation(d, f);
        g.targetClassName = this._targetClassName
      } else {
        if (e instanceof c.Relation) {
          if (this._targetClassName) {
            if (e.targetClassName) {
              if (e.targetClassName !== this._targetClassName) {
                throw "Related object must be a " + e.targetClassName + ", but a " + this._targetClassName + " was passed in."
              }
            } else {
              e.targetClassName = this._targetClassName
            }
          }
          return e
        } else {
          throw "Op is invalid after previous op."
        }
      }
    }
  });
  c.Op._registerDecoder("AddRelation", function (d) {
    return new c.Op.Relation(c._decode(undefined, d.objects), [])
  });
  c.Op._registerDecoder("RemoveRelation", function (d) {
    return new c.Op.Relation([], c._decode(undefined, d.objects))
  })
}(this));
(function (a) {
  a.Bmob = a.Bmob || {};
  var c = a.Bmob;
  var b = c._;
  c.Relation = function (e, d) {
    this.parent = e;
    this.key = d;
    this.targetClassName = null
  };
  c.Relation.reverseQuery = function (e, g, f) {
    var d = new c.Query(e);
    d.equalTo(g, f._toPointer());
    return d
  };
  c.Relation.prototype = {
    _ensureParentAndKey: function (e, d) {
      this.parent = this.parent || e;
      this.key = this.key || d;
      if (this.parent !== e) {
        throw "Internal Error. Relation retrieved from two different Objects."
      }
      if (this.key !== d) {
        throw "Internal Error. Relation retrieved from two different keys."
      }
    }, add: function (d) {
      if (!b.isArray(d)) {
        d = [d]
      }
      var e = new c.Op.Relation(d, []);
      this.parent.set(this.key, e);
      this.targetClassName = e._targetClassName
    }, remove: function (d) {
      if (!b.isArray(d)) {
        d = [d]
      }
      var e = new c.Op.Relation([], d);
      this.parent.set(this.key, e);
      this.targetClassName = e._targetClassName
    }, toJSON: function () {
      return {__type: "Relation", className: this.targetClassName}
    }, query: function () {
      var d;
      var e;
      if (!this.targetClassName) {
        d = c.Object._getSubclass(this.parent.className);
        e = new c.Query(d);
        e._extraOptions.redirectClassNameForKey = this.key
      } else {
        d = c.Object._getSubclass(this.targetClassName);
        e = new c.Query(d)
      }
      e._addCondition("$relatedTo", "object", this.parent._toPointer());
      e._addCondition("$relatedTo", "key", this.key);
      return e
    }
  }
}(this));
(function (a) {
  a.Bmob = a.Bmob || {};
  var c = a.Bmob;
  var b = c._;
  c.Promise = function () {
    this._resolved = false;
    this._rejected = false;
    this._resolvedCallbacks = [];
    this._rejectedCallbacks = []
  };
  b.extend(c.Promise, {
    is: function (d) {
      return d && d.then && b.isFunction(d.then)
    }, as: function () {
      var d = new c.Promise();
      d.resolve.apply(d, arguments);
      return d
    }, error: function () {
      var d = new c.Promise();
      d.reject.apply(d, arguments);
      return d
    }, when: function (g) {
      var i;
      if (g && c._isNullOrUndefined(g.length)) {
        i = arguments
      } else {
        i = g
      }
      var h = i.length;
      var e = false;
      var f = [];
      var k = [];
      f.length = i.length;
      k.length = i.length;
      if (h === 0) {
        return c.Promise.as.apply(this, f)
      }
      var j = new c.Promise();
      var d = function () {
        h = h - 1;
        if (h === 0) {
          if (e) {
            j.reject(k)
          } else {
            j.resolve.apply(j, f)
          }
        }
      };
      c._arrayEach(i, function (l, m) {
        if (c.Promise.is(l)) {
          l.then(function (n) {
            f[m] = n;
            d()
          }, function (n) {
            k[m] = n;
            e = true;
            d()
          })
        } else {
          f[m] = l;
          d()
        }
      });
      return j
    }, _continueWhile: function (d, e) {
      if (d()) {
        return e().then(function () {
          return c.Promise._continueWhile(d, e)
        })
      }
      return c.Promise.as()
    }
  });
  b.extend(c.Promise.prototype, {
    resolve: function (d) {
      if (this._resolved || this._rejected) {
        throw "A promise was resolved even though it had already been " + (this._resolved ? "resolved" : "rejected") + "."
      }
      this._resolved = true;
      this._result = arguments;
      var e = arguments;
      c._arrayEach(this._resolvedCallbacks, function (f) {
        f.apply(this, e)
      });
      this._resolvedCallbacks = [];
      this._rejectedCallbacks = []
    }, reject: function (d) {
      if (this._resolved || this._rejected) {
        throw "A promise was rejected even though it had already been " + (this._resolved ? "resolved" : "rejected") + "."
      }
      this._rejected = true;
      this._error = d;
      c._arrayEach(this._rejectedCallbacks, function (e) {
        e(d)
      });
      this._resolvedCallbacks = [];
      this._rejectedCallbacks = []
    }, then: function (d, f) {
      var g = new c.Promise();
      var h = function () {
        var i = arguments;
        if (d) {
          i = [d.apply(this, i)]
        }
        if (i.length === 1 && c.Promise.is(i[0])) {
          i[0].then(function () {
            g.resolve.apply(g, arguments)
          }, function (j) {
            g.reject(j)
          })
        } else {
          g.resolve.apply(g, i)
        }
      };
      var e = function (j) {
        var i = [];
        if (f) {
          i = [f(j)];
          if (i.length === 1 && c.Promise.is(i[0])) {
            i[0].then(function () {
              g.resolve.apply(g, arguments)
            }, function (k) {
              g.reject(k)
            })
          } else {
            g.reject(i[0])
          }
        } else {
          g.reject(j)
        }
      };
      if (this._resolved) {
        h.apply(this, this._result)
      } else {
        if (this._rejected) {
          e(this._error)
        } else {
          this._resolvedCallbacks.push(h);
          this._rejectedCallbacks.push(e)
        }
      }
      return g
    }, _thenRunCallbacks: function (f, e) {
      var d;
      if (b.isFunction(f)) {
        var g = f;
        d = {
          success: function (h) {
            g(h, null)
          }, error: function (h) {
            g(null, h)
          }
        }
      } else {
        d = b.clone(f)
      }
      d = d || {};
      return this.then(function (h) {
        if (d.success) {
          d.success.apply(this, arguments)
        } else {
          if (e) {
            e.trigger("sync", e, h, d)
          }
        }
        return c.Promise.as.apply(c.Promise, arguments)
      }, function (h) {
        if (d.error) {
          if (!b.isUndefined(e)) {
            d.error(e, h)
          } else {
            d.error(h)
          }
        } else {
          if (e) {
            e.trigger("error", e, h, d)
          }
        }
        return c.Promise.error(h)
      })
    }, _continueWith: function (d) {
      return this.then(function () {
        return d(arguments, null)
      }, function (e) {
        return d(null, e)
      })
    }
  })
}(this));
(function (b) {
  b.Bmob = b.Bmob || {};
  var h = b.Bmob;
  var d = h._;
  var c = function (i) {
    if (i < 26) {
      return String.fromCharCode(65 + i)
    }
    if (i < 52) {
      return String.fromCharCode(97 + (i - 26))
    }
    if (i < 62) {
      return String.fromCharCode(48 + (i - 52))
    }
    if (i === 62) {
      return "+"
    }
    if (i === 63) {
      return "/"
    }
    throw "Tried to encode large digit " + i + " in base64."
  };
  var a = function (q) {
    var k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var m, o, j;
    var p, n, l;
    j = q.length;
    o = 0;
    m = "";
    while (o < j) {
      p = q.charCodeAt(o++) & 255;
      if (o == j) {
        m += k.charAt(p >> 2);
        m += k.charAt((p & 3) << 4);
        m += "==";
        break
      }
      n = q.charCodeAt(o++);
      if (o == j) {
        m += k.charAt(p >> 2);
        m += k.charAt(((p & 3) << 4) | ((n & 240) >> 4));
        m += k.charAt((n & 15) << 2);
        m += "=";
        break
      }
      l = q.charCodeAt(o++);
      m += k.charAt(p >> 2);
      m += k.charAt(((p & 3) << 4) | ((n & 240) >> 4));
      m += k.charAt(((n & 15) << 2) | ((l & 192) >> 6));
      m += k.charAt(l & 63)
    }
    return m
  };
  var g = function (m) {
    var k, l, j, n;
    k = "";
    j = m.length;
    for (l = 0; l < j; l++) {
      n = m.charCodeAt(l);
      if ((n >= 1) && (n <= 127)) {
        k += m.charAt(l)
      } else {
        if (n > 2047) {
          k += String.fromCharCode(224 | ((n >> 12) & 15));
          k += String.fromCharCode(128 | ((n >> 6) & 63));
          k += String.fromCharCode(128 | ((n >> 0) & 63))
        } else {
          k += String.fromCharCode(192 | ((n >> 6) & 31));
          k += String.fromCharCode(128 | ((n >> 0) & 63))
        }
      }
    }
    return k
  };
  var f = {
    ai: "application/postscript",
    aif: "audio/x-aiff",
    aifc: "audio/x-aiff",
    aiff: "audio/x-aiff",
    asc: "text/plain",
    atom: "application/atom+xml",
    au: "audio/basic",
    avi: "video/x-msvideo",
    bcpio: "application/x-bcpio",
    bin: "application/octet-stream",
    bmp: "image/bmp",
    cdf: "application/x-netcdf",
    cgm: "image/cgm",
    "class": "application/octet-stream",
    cpio: "application/x-cpio",
    cpt: "application/mac-compactpro",
    csh: "application/x-csh",
    css: "text/css",
    dcr: "application/x-director",
    dif: "video/x-dv",
    dir: "application/x-director",
    djv: "image/vnd.djvu",
    djvu: "image/vnd.djvu",
    dll: "application/octet-stream",
    dmg: "application/octet-stream",
    dms: "application/octet-stream",
    doc: "application/msword",
    docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    dotx: "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
    docm: "application/vnd.ms-word.document.macroEnabled.12",
    dotm: "application/vnd.ms-word.template.macroEnabled.12",
    dtd: "application/xml-dtd",
    dv: "video/x-dv",
    dvi: "application/x-dvi",
    dxr: "application/x-director",
    eps: "application/postscript",
    etx: "text/x-setext",
    exe: "application/octet-stream",
    ez: "application/andrew-inset",
    gif: "image/gif",
    gram: "application/srgs",
    grxml: "application/srgs+xml",
    gtar: "application/x-gtar",
    hdf: "application/x-hdf",
    hqx: "application/mac-binhex40",
    htm: "text/html",
    html: "text/html",
    ice: "x-conference/x-cooltalk",
    ico: "image/x-icon",
    ics: "text/calendar",
    ief: "image/ief",
    ifb: "text/calendar",
    iges: "model/iges",
    igs: "model/iges",
    jnlp: "application/x-java-jnlp-file",
    jp2: "image/jp2",
    jpe: "image/jpeg",
    jpeg: "image/jpeg",
    jpg: "image/jpeg",
    js: "application/x-javascript",
    kar: "audio/midi",
    latex: "application/x-latex",
    lha: "application/octet-stream",
    lzh: "application/octet-stream",
    m3u: "audio/x-mpegurl",
    m4a: "audio/mp4a-latm",
    m4b: "audio/mp4a-latm",
    m4p: "audio/mp4a-latm",
    m4u: "video/vnd.mpegurl",
    m4v: "video/x-m4v",
    mac: "image/x-macpaint",
    man: "application/x-troff-man",
    mathml: "application/mathml+xml",
    me: "application/x-troff-me",
    mesh: "model/mesh",
    mid: "audio/midi",
    midi: "audio/midi",
    mif: "application/vnd.mif",
    mov: "video/quicktime",
    movie: "video/x-sgi-movie",
    mp2: "audio/mpeg",
    mp3: "audio/mpeg",
    mp4: "video/mp4",
    mpe: "video/mpeg",
    mpeg: "video/mpeg",
    mpg: "video/mpeg",
    mpga: "audio/mpeg",
    ms: "application/x-troff-ms",
    msh: "model/mesh",
    mxu: "video/vnd.mpegurl",
    nc: "application/x-netcdf",
    oda: "application/oda",
    ogg: "application/ogg",
    pbm: "image/x-portable-bitmap",
    pct: "image/pict",
    pdb: "chemical/x-pdb",
    pdf: "application/pdf",
    pgm: "image/x-portable-graymap",
    pgn: "application/x-chess-pgn",
    pic: "image/pict",
    pict: "image/pict",
    png: "image/png",
    pnm: "image/x-portable-anymap",
    pnt: "image/x-macpaint",
    pntg: "image/x-macpaint",
    ppm: "image/x-portable-pixmap",
    ppt: "application/vnd.ms-powerpoint",
    pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    potx: "application/vnd.openxmlformats-officedocument.presentationml.template",
    ppsx: "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
    ppam: "application/vnd.ms-powerpoint.addin.macroEnabled.12",
    pptm: "application/vnd.ms-powerpoint.presentation.macroEnabled.12",
    potm: "application/vnd.ms-powerpoint.template.macroEnabled.12",
    ppsm: "application/vnd.ms-powerpoint.slideshow.macroEnabled.12",
    ps: "application/postscript",
    qt: "video/quicktime",
    qti: "image/x-quicktime",
    qtif: "image/x-quicktime",
    ra: "audio/x-pn-realaudio",
    ram: "audio/x-pn-realaudio",
    ras: "image/x-cmu-raster",
    rdf: "application/rdf+xml",
    rgb: "image/x-rgb",
    rm: "application/vnd.rn-realmedia",
    roff: "application/x-troff",
    rtf: "text/rtf",
    rtx: "text/richtext",
    sgm: "text/sgml",
    sgml: "text/sgml",
    sh: "application/x-sh",
    shar: "application/x-shar",
    silo: "model/mesh",
    sit: "application/x-stuffit",
    skd: "application/x-koan",
    skm: "application/x-koan",
    skp: "application/x-koan",
    skt: "application/x-koan",
    smi: "application/smil",
    smil: "application/smil",
    snd: "audio/basic",
    so: "application/octet-stream",
    spl: "application/x-futuresplash",
    src: "application/x-wais-source",
    sv4cpio: "application/x-sv4cpio",
    sv4crc: "application/x-sv4crc",
    svg: "image/svg+xml",
    swf: "application/x-shockwave-flash",
    t: "application/x-troff",
    tar: "application/x-tar",
    tcl: "application/x-tcl",
    tex: "application/x-tex",
    texi: "application/x-texinfo",
    texinfo: "application/x-texinfo",
    tif: "image/tiff",
    tiff: "image/tiff",
    tr: "application/x-troff",
    tsv: "text/tab-separated-values",
    txt: "text/plain",
    ustar: "application/x-ustar",
    vcd: "application/x-cdlink",
    vrml: "model/vrml",
    vxml: "application/voicexml+xml",
    wav: "audio/x-wav",
    wbmp: "image/vnd.wap.wbmp",
    wbmxl: "application/vnd.wap.wbxml",
    wml: "text/vnd.wap.wml",
    wmlc: "application/vnd.wap.wmlc",
    wmls: "text/vnd.wap.wmlscript",
    wmlsc: "application/vnd.wap.wmlscriptc",
    wrl: "model/vrml",
    xbm: "image/x-xbitmap",
    xht: "application/xhtml+xml",
    xhtml: "application/xhtml+xml",
    xls: "application/vnd.ms-excel",
    xml: "application/xml",
    xpm: "image/x-xpixmap",
    xsl: "application/xml",
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
    xlsm: "application/vnd.ms-excel.sheet.macroEnabled.12",
    xltm: "application/vnd.ms-excel.template.macroEnabled.12",
    xlam: "application/vnd.ms-excel.addin.macroEnabled.12",
    xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.12",
    xslt: "application/xslt+xml",
    xul: "application/vnd.mozilla.xul+xml",
    xwd: "image/x-xwindowdump",
    xyz: "chemical/x-xyz",
    zip: "application/zip"
  };
  var e = function (j, k) {
    var l = new h.Promise();
    if (typeof (FileReader) === "undefined") {
      return h.Promise.error(new h.Error(-1, "Attempted to use a FileReader on an unsupported browser."))
    }
    var i = new FileReader();
    i.onloadend = function () {
      l.resolve(i.result)
    };
    i.readAsBinaryString(j);
    return l
  };
  h.File = function (j, l, k) {
    this._name = a(g(j));
    var i = h.User.current();
    this._metaData = {owner: (i != null ? i.id : "unknown")};
    var n = /\.([^.]*)$/.exec(j);
    if (n) {
      n = n[1].toLowerCase()
    }
    var m = k || f[n] || "text/plain";
    this._guessedType = m;
    if (typeof (File) !== "undefined" && l instanceof File) {
      this._source = e(l, k)
    } else {
      this._source = h.Promise.as(l, m);
      this._metaData.size = l.length
    }
  };
  h.File.prototype = {
    name: function () {
      return this._name
    }, setName: function (i) {
      this._name = i
    }, url: function () {
      return this._url
    }, setUrl: function (i) {
      this._url = i
    }, cdn: function () {
      return this._cdn
    }, metaData: function (i, j) {
      if (i != null && j != null) {
        this._metaData[i] = j;
        return this
      } else {
        if (i != null) {
          return this._metaData[i]
        } else {
          return this._metaData
        }
      }
    }, destroy: function (i) {
      if (!this._url && !this._cdn) {
        return h.Promise.error("The file url and cdn is not eixsts.")._thenRunCallbacks(i)
      }
      var k = {cdn: this._cdn, _ContentType: "application/json", url: this._url, metaData: self._metaData,};
      var j = h._request("2/files", null, null, "DELETE", k);
      return j._thenRunCallbacks(i)
    }, save: function (j) {
      var i = this;
      if (!i._previousSave) {
        if (i._source) {
          i._previousSave = i._source.then(function (k, l) {
            var m = {base64: a(k), _ContentType: "text/plain", mime_type: "text/plain", metaData: i._metaData,};
            if (!i._metaData.size) {
              i._metaData.size = k.length
            }
            return h._request("2/files", i._name, null, "POST", m)
          }).then(function (k) {
            i._name = k.filename;
            i._url = k.url;
            i._cdn = k.cdn;
            return i
          })
        } else {
          throw "not source file"
        }
      }
      return i._previousSave._thenRunCallbacks(j)
    }
  }
}(this));
(function (a) {
  a.Bmob = a.Bmob || {};
  var c = a.Bmob;
  var b = c._;
  c.Object = function (d, e) {
    if (b.isString(d)) {
      return c.Object._create.apply(this, arguments)
    }
    d = d || {};
    if (e && e.parse) {
      d = this.parse(d)
    }
    var f = c._getValue(this, "defaults");
    if (f) {
      d = b.extend({}, f, d)
    }
    if (e && e.collection) {
      this.collection = e.collection
    }
    this._serverData = {};
    this._opSetQueue = [{}];
    this.attributes = {};
    this._hashedJSON = {};
    this._escapedAttributes = {};
    this.cid = b.uniqueId("c");
    this.changed = {};
    this._silent = {};
    this._pending = {};
    if (!this.set(d, {silent: true})) {
      throw new Error("Can't create an invalid Bmob.Object")
    }
    this.changed = {};
    this._silent = {};
    this._pending = {};
    this._hasData = true;
    this._previousAttributes = b.clone(this.attributes);
    this.initialize.apply(this, arguments)
  };
  c.Object.saveAll = function (e, d) {
    return c.Object._deepSaveAsync(e)._thenRunCallbacks(d)
  };
  b.extend(c.Object.prototype, c.Events, {
    _existed: false, _fetchWhenSave: false, initialize: function () {
    }, fetchWhenSave: function (d) {
      if (typeof d !== "boolean") {
        throw "Expect boolean value for fetchWhenSave"
      }
      this._fetchWhenSave = d
    }, toJSON: function () {
      var d = this._toFullJSON();
      c._arrayEach(["__type", "className"], function (e) {
        delete d[e]
      });
      return d
    }, _toFullJSON: function (e) {
      var d = b.clone(this.attributes);
      c._objectEach(d, function (g, f) {
        d[f] = c._encode(g, e)
      });
      c._objectEach(this._operations, function (g, f) {
        d[f] = g
      });
      if (b.has(this, "id")) {
        d.objectId = this.id
      }
      if (b.has(this, "createdAt")) {
        if (b.isDate(this.createdAt)) {
          d.createdAt = this.createdAt.toJSON()
        } else {
          d.createdAt = this.createdAt
        }
      }
      if (b.has(this, "updatedAt")) {
        if (b.isDate(this.updatedAt)) {
          d.updatedAt = this.updatedAt.toJSON()
        } else {
          d.updatedAt = this.updatedAt
        }
      }
      d.__type = "Object";
      d.className = this.className;
      return d
    }, _refreshCache: function () {
      var d = this;
      if (d._refreshingCache) {
        return
      }
      d._refreshingCache = true;
      c._objectEach(this.attributes, function (f, e) {
        if (f instanceof c.Object) {
          f._refreshCache()
        } else {
          if (b.isObject(f)) {
            if (d._resetCacheForKey(e)) {
              d.set(e, new c.Op.Set(f), {silent: true})
            }
          }
        }
      });
      delete d._refreshingCache
    }, dirty: function (d) {
      this._refreshCache();
      var e = b.last(this._opSetQueue);
      if (d) {
        return (e[d] ? true : false)
      }
      if (!this.id) {
        return true
      }
      if (b.keys(e).length > 0) {
        return true
      }
      return false
    }, _toPointer: function () {
      return {__type: "Pointer", className: this.className, objectId: this.id}
    }, get: function (d) {
      return this.attributes[d]
    }, relation: function (d) {
      var e = this.get(d);
      if (e) {
        if (!(e instanceof c.Relation)) {
          throw "Called relation() on non-relation field " + d
        }
        e._ensureParentAndKey(this, d);
        return e
      } else {
        return new c.Relation(this, d)
      }
    }, escape: function (d) {
      var e = this._escapedAttributes[d];
      if (e) {
        return e
      }
      var g = this.attributes[d];
      var f;
      if (c._isNullOrUndefined(g)) {
        f = ""
      } else {
        f = b.escape(g.toString())
      }
      this._escapedAttributes[d] = f;
      return f
    }, has: function (d) {
      return !c._isNullOrUndefined(this.attributes[d])
    }, _mergeMagicFields: function (e) {
      var d = this;
      var f = ["id", "objectId", "createdAt", "updatedAt"];
      c._arrayEach(f, function (g) {
        if (e[g]) {
          if (g === "objectId") {
            d.id = e[g]
          } else {
            d[g] = e[g]
          }
          delete e[g]
        }
      })
    }, _startSave: function () {
      this._opSetQueue.push({})
    }, _cancelSave: function () {
      var e = this;
      var d = b.first(this._opSetQueue);
      this._opSetQueue = b.rest(this._opSetQueue);
      var f = b.first(this._opSetQueue);
      c._objectEach(d, function (j, h) {
        var i = d[h];
        var g = f[h];
        if (i && g) {
          f[h] = g._mergeWithPrevious(i)
        } else {
          if (i) {
            f[h] = i
          }
        }
      });
      this._saving = this._saving - 1
    }, _finishSave: function (f) {
      var d = {};
      c._traverse(this.attributes, function (h) {
        if (h instanceof c.Object && h.id && h._hasData) {
          d[h.id] = h
        }
      });
      var g = b.first(this._opSetQueue);
      this._opSetQueue = b.rest(this._opSetQueue);
      this._applyOpSet(g, this._serverData);
      this._mergeMagicFields(f);
      var e = this;
      c._objectEach(f, function (i, h) {
        e._serverData[h] = c._decode(h, i);
        var j = c._traverse(e._serverData[h], function (k) {
          if (k instanceof c.Object && d[k.id]) {
            return d[k.id]
          }
        });
        if (j) {
          e._serverData[h] = j
        }
      });
      this._rebuildAllEstimatedData();
      this._saving = this._saving - 1
    }, _finishFetch: function (f, e) {
      this._opSetQueue = [{}];
      this._mergeMagicFields(f);
      var d = this;
      c._objectEach(f, function (h, g) {
        d._serverData[g] = c._decode(g, h)
      });
      this._rebuildAllEstimatedData();
      this._refreshCache();
      this._opSetQueue = [{}];
      this._hasData = e
    }, _applyOpSet: function (e, f) {
      var d = this;
      c._objectEach(e, function (h, g) {
        f[g] = h._estimate(f[g], d, g);
        if (f[g] === c.Op._UNSET) {
          delete f[g]
        }
      })
    }, _resetCacheForKey: function (e) {
      var f = this.attributes[e];
      if (b.isObject(f) && !(f instanceof c.Object) && !(f instanceof c.File)) {
        f = f.toJSON ? f.toJSON() : f;
        var d = JSON.stringify(f);
        if (this._hashedJSON[e] !== d) {
          this._hashedJSON[e] = d;
          return true
        }
      }
      return false
    }, _rebuildEstimatedDataForKey: function (e) {
      var d = this;
      delete this.attributes[e];
      if (this._serverData[e]) {
        this.attributes[e] = this._serverData[e]
      }
      c._arrayEach(this._opSetQueue, function (f) {
        var g = f[e];
        if (g) {
          d.attributes[e] = g._estimate(d.attributes[e], d, e);
          if (d.attributes[e] === c.Op._UNSET) {
            delete d.attributes[e]
          } else {
            d._resetCacheForKey(e)
          }
        }
      })
    }, _rebuildAllEstimatedData: function () {
      var d = this;
      var e = b.clone(this.attributes);
      this.attributes = b.clone(this._serverData);
      c._arrayEach(this._opSetQueue, function (f) {
        d._applyOpSet(f, d.attributes);
        c._objectEach(f, function (h, g) {
          d._resetCacheForKey(g)
        })
      });
      c._objectEach(e, function (f, g) {
        if (d.attributes[g] !== f) {
          d.trigger("change:" + g, d, d.attributes[g], {})
        }
      });
      c._objectEach(this.attributes, function (g, f) {
        if (!b.has(e, f)) {
          d.trigger("change:" + f, d, g, {})
        }
      })
    }, set: function (i, h, l) {
      var j, g;
      if (b.isObject(i) || c._isNullOrUndefined(i)) {
        j = i;
        c._objectEach(j, function (n, m) {
          j[m] = c._decode(m, n)
        });
        l = h
      } else {
        j = {};
        j[i] = c._decode(i, h)
      }
      l = l || {};
      if (!j) {
        return this
      }
      if (j instanceof c.Object) {
        j = j.attributes
      }
      if (l.unset) {
        c._objectEach(j, function (m, n) {
          j[n] = new c.Op.Unset()
        })
      }
      var f = b.clone(j);
      var k = this;
      c._objectEach(f, function (n, m) {
        if (n instanceof c.Op) {
          f[m] = n._estimate(k.attributes[m], k, m);
          if (f[m] === c.Op._UNSET) {
            delete f[m]
          }
        }
      });
      if (!this._validate(j, l)) {
        return false
      }
      this._mergeMagicFields(j);
      l.changes = {};
      var d = this._escapedAttributes;
      var e = this._previousAttributes || {};
      c._arrayEach(b.keys(j), function (n) {
        var p = j[n];
        if (p instanceof c.Relation) {
          p.parent = k
        }
        if (!(p instanceof c.Op)) {
          p = new c.Op.Set(p)
        }
        var m = true;
        if (p instanceof c.Op.Set && b.isEqual(k.attributes[n], p.value)) {
          m = false
        }
        if (m) {
          delete d[n];
          if (l.silent) {
            k._silent[n] = true
          } else {
            l.changes[n] = true
          }
        }
        var o = b.last(k._opSetQueue);
        o[n] = p._mergeWithPrevious(o[n]);
        k._rebuildEstimatedDataForKey(n);
        if (m) {
          k.changed[n] = k.attributes[n];
          if (!l.silent) {
            k._pending[n] = true
          }
        } else {
          delete k.changed[n];
          delete k._pending[n]
        }
      });
      if (!l.silent) {
        this.change(l)
      }
      return this
    }, unset: function (d, e) {
      e = e || {};
      e.unset = true;
      return this.set(d, null, e)
    }, increment: function (d, e) {
      if (b.isUndefined(e) || b.isNull(e)) {
        e = 1
      }
      return this.set(d, new c.Op.Increment(e))
    }, add: function (d, e) {
      return this.set(d, new c.Op.Add([e]))
    }, addUnique: function (d, e) {
      return this.set(d, new c.Op.AddUnique([e]))
    }, remove: function (d, e) {
      return this.set(d, new c.Op.Remove([e]))
    }, op: function (d) {
      return b.last(this._opSetQueue)[d]
    }, clear: function (d) {
      d = d || {};
      d.unset = true;
      var e = b.extend(this.attributes, this._operations);
      return this.set(e, d)
    }, _getSaveJSON: function () {
      var d = b.clone(b.first(this._opSetQueue));
      c._objectEach(d, function (f, e) {
        d[e] = f.toJSON()
      });
      return d
    }, _canBeSerialized: function () {
      return c.Object._canBeSerializedAsValue(this.attributes)
    }, fetch: function (e) {
      var d = this;
      var f = c._request("classes", this.className, this.id, "GET");
      return f.then(function (h, g, i) {
        d._finishFetch(d.parse(h, g, i), true);
        return d
      })._thenRunCallbacks(e, this)
    }, save: function (k, j, g) {
      var f, p, l, s, o;
      if (b.isObject(k) || c._isNullOrUndefined(k)) {
        p = k;
        s = j
      } else {
        p = {};
        p[k] = j;
        s = g
      }
      if (!s && p) {
        var q = b.reject(p, function (t, i) {
          return b.include(["success", "error", "wait"], i)
        });
        if (q.length === 0) {
          var r = true;
          if (b.has(p, "success") && !b.isFunction(p.success)) {
            r = false
          }
          if (b.has(p, "error") && !b.isFunction(p.error)) {
            r = false
          }
          if (r) {
            return this.save(null, p)
          }
        }
      }
      s = b.clone(s) || {};
      if (s.wait) {
        l = b.clone(this.attributes)
      }
      var m = b.clone(s) || {};
      if (m.wait) {
        m.silent = true
      }
      var e;
      m.error = function (t, i) {
        e = i
      };
      if (p && !this.set(p, m)) {
        return c.Promise.error(e)._thenRunCallbacks(s, this)
      }
      var h = this;
      h._refreshCache();
      var n = [];
      var d = [];
      c.Object._findUnsavedChildren(h.attributes, n, d);
      if (n.length + d.length > 0) {
        return c.Object._deepSaveAsync(this.attributes).then(function () {
          return h.save(null, s)
        }, function (i) {
          return c.Promise.error(i)._thenRunCallbacks(s, h)
        })
      }
      this._startSave();
      this._saving = (this._saving || 0) + 1;
      this._allPreviousSaves = this._allPreviousSaves || c.Promise.as();
      this._allPreviousSaves = this._allPreviousSaves._continueWith(function () {
        var w = h.id ? "PUT" : "POST";
        var t = h._getSaveJSON();
        if (w === "PUT" && h._fetchWhenSave) {
          t._fetchWhenSave = true
        }
        var i = "classes";
        var u = h.className;
        if (h.className === "_User" && !h.id) {
          i = "users";
          u = null
        }
        var v = c._request(i, u, h.id, w, t);
        v = v.then(function (A, x, z) {
          var y = h.parse(A, x, z);
          if (s.wait) {
            y = b.extend(p || {}, y)
          }
          h._finishSave(y);
          if (s.wait) {
            h.set(l, m)
          }
          return h
        }, function (x) {
          h._cancelSave();
          return c.Promise.error(x)
        })._thenRunCallbacks(s, h);
        return v
      });
      return this._allPreviousSaves
    }, destroy: function (e) {
      e = e || {};
      var d = this;
      var g = function () {
        d.trigger("destroy", d, d.collection, e)
      };
      if (!this.id) {
        return g()
      }
      if (!e.wait) {
        g()
      }
      var f = c._request("classes", this.className, this.id, "DELETE");
      return f.then(function () {
        if (e.wait) {
          g()
        }
        return d
      })._thenRunCallbacks(e, this)
    }, parse: function (g, d, f) {
      var e = b.clone(g);
      b(["createdAt", "updatedAt"]).each(function (h) {
        if (e[h]) {
          e[h] = e[h]
        }
      });
      if (!e.updatedAt) {
        e.updatedAt = e.createdAt
      }
      if (d) {
        this._existed = (d !== 201)
      }
      return e
    }, clone: function () {
      return new this.constructor(this.attributes)
    }, isNew: function () {
      return !this.id
    }, change: function (f) {
      f = f || {};
      var h = this._changing;
      this._changing = true;
      var e = this;
      c._objectEach(this._silent, function (i) {
        e._pending[i] = true
      });
      var g = b.extend({}, f.changes, this._silent);
      this._silent = {};
      c._objectEach(g, function (j, i) {
        e.trigger("change:" + i, e, e.get(i), f)
      });
      if (h) {
        return this
      }
      var d = function (j, i) {
        if (!e._pending[i] && !e._silent[i]) {
          delete e.changed[i]
        }
      };
      while (!b.isEmpty(this._pending)) {
        this._pending = {};
        this.trigger("change", this, f);
        c._objectEach(this.changed, d);
        e._previousAttributes = b.clone(this.attributes)
      }
      this._changing = false;
      return this
    }, existed: function () {
      return this._existed
    }, hasChanged: function (d) {
      if (!arguments.length) {
        return !b.isEmpty(this.changed)
      }
      return this.changed && b.has(this.changed, d)
    }, changedAttributes: function (e) {
      if (!e) {
        return this.hasChanged() ? b.clone(this.changed) : false
      }
      var f = {};
      var d = this._previousAttributes;
      c._objectEach(e, function (h, g) {
        if (!b.isEqual(d[g], h)) {
          f[g] = h
        }
      });
      return f
    }, previous: function (d) {
      if (!arguments.length || !this._previousAttributes) {
        return null
      }
      return this._previousAttributes[d]
    }, previousAttributes: function () {
      return b.clone(this._previousAttributes)
    }, isValid: function () {
      return !this.validate(this.attributes)
    }, validate: function (e, d) {
      if (b.has(e, "ACL") && !(e.ACL instanceof c.ACL)) {
        return new c.Error(c.Error.OTHER_CAUSE, "ACL must be a Bmob.ACL.")
      }
      return false
    }, _validate: function (f, e) {
      if (e.silent || !this.validate) {
        return true
      }
      f = b.extend({}, this.attributes, f);
      var d = this.validate(f, e);
      if (!d) {
        return true
      }
      if (e && e.error) {
        e.error(this, d, e)
      } else {
        this.trigger("error", this, d, e)
      }
      return false
    }, getACL: function () {
      return this.get("ACL")
    }, setACL: function (e, d) {
      return this.set("ACL", e, d)
    }
  });
  c.Object.createWithoutData = function (f, g, e) {
    var d = new c.Object(f);
    d.id = g;
    d._hasData = e;
    return d
  };
  c.Object.destroyAll = function (h, e) {
    if (h == null || h.length == 0) {
      return c.Promise.as()._thenRunCallbacks(e)
    }
    var f = h[0].className;
    var i = "";
    var d = true;
    h.forEach(function (j) {
      if (j.className != f) {
        throw "Bmob.Object.destroyAll requires the argument object array's classNames must be the same"
      }
      if (!j.id) {
        throw "Could not delete unsaved object"
      }
      if (d) {
        i = j.id;
        d = false
      } else {
        i = i + "," + j.id
      }
    });
    var g = c._request("classes", f, i, "DELETE");
    return g._thenRunCallbacks(e)
  };
  c.Object._getSubclass = function (e) {
    if (!b.isString(e)) {
      throw "Bmob.Object._getSubclass requires a string argument."
    }
    var d = c.Object._classMap[e];
    if (!d) {
      d = c.Object.extend(e);
      c.Object._classMap[e] = d
    }
    return d
  };
  c.Object._create = function (g, d, e) {
    var f = c.Object._getSubclass(g);
    return new f(d, e)
  };
  c.Object._classMap = {};
  c.Object._extend = c._extend;
  c.Object.extend = function (g, f, h) {
    if (!b.isString(g)) {
      if (g && b.has(g, "className")) {
        return c.Object.extend(g.className, g, f)
      } else {
        throw new Error("Bmob.Object.extend's first argument should be the className.")
      }
    }
    if (g === "User") {
      g = "_User"
    }
    var d = null;
    if (b.has(c.Object._classMap, g)) {
      var e = c.Object._classMap[g];
      d = e._extend(f, h)
    } else {
      f = f || {};
      f.className = g;
      d = this._extend(f, h)
    }
    d.extend = function (j) {
      if (b.isString(j) || (j && b.has(j, "className"))) {
        return c.Object.extend.apply(d, arguments)
      }
      var i = [g].concat(c._.toArray(arguments));
      return c.Object.extend.apply(d, i)
    };
    c.Object._classMap[g] = d;
    return d
  };
  c.Object._findUnsavedChildren = function (d, e, f) {
    c._traverse(d, function (g) {
      if (g instanceof c.Object) {
        g._refreshCache();
        if (g.dirty()) {
          e.push(g)
        }
        return
      }
      if (g instanceof c.File) {
        if (!g.url()) {
          f.push(g)
        }
        return
      }
    })
  };
  c.Object._canBeSerializedAsValue = function (d) {
    var e = true;
    if (d instanceof c.Object) {
      e = !!d.id
    } else {
      if (b.isArray(d)) {
        c._arrayEach(d, function (f) {
          if (!c.Object._canBeSerializedAsValue(f)) {
            e = false
          }
        })
      } else {
        if (b.isObject(d)) {
          c._objectEach(d, function (f) {
            if (!c.Object._canBeSerializedAsValue(f)) {
              e = false
            }
          })
        }
      }
    }
    return e
  };
  c.Object._deepSaveAsync = function (e) {
    var d = [];
    var h = [];
    c.Object._findUnsavedChildren(e, d, h);
    var i = c.Promise.as();
    b.each(h, function (j) {
      i = i.then(function () {
        return j.save()
      })
    });
    var g = b.uniq(d);
    var f = b.uniq(g);
    return i.then(function () {
      return c.Promise._continueWhile(function () {
        return f.length > 0
      }, function () {
        var m = [];
        var j = [];
        c._arrayEach(f, function (n) {
          if (m.length > 20) {
            j.push(n);
            return
          }
          if (n._canBeSerialized()) {
            m.push(n)
          } else {
            j.push(n)
          }
        });
        f = j;
        if (m.length === 0) {
          return c.Promise.error(new c.Error(c.Error.OTHER_CAUSE, "Tried to save a batch with a cycle."))
        }
        var k = c.Promise.when(b.map(m, function (n) {
          return n._allPreviousSaves || c.Promise.as()
        }));
        var l = new c.Promise();
        c._arrayEach(m, function (n) {
          n._allPreviousSaves = l
        });
        return k._continueWith(function () {
          return c._request("batch", null, null, "POST", {
            requests: b.map(m, function (n) {
              var o = n._getSaveJSON();
              var q = "POST";
              var p = "/1/classes/" + n.className;
              if (n.id) {
                p = p + "/" + n.id;
                q = "PUT"
              }
              n._startSave();
              return {method: q, path: p, body: o}
            })
          }).then(function (o, n, q) {
            var p;
            c._arrayEach(m, function (r, s) {
              if (o[s].success) {
                r._finishSave(r.parse(o[s].success, n, q))
              } else {
                p = p || o[s].error;
                r._cancelSave()
              }
            });
            if (p) {
              return c.Promise.error(new c.Error(p.code, p.error))
            }
          }).then(function (n) {
            l.resolve(n);
            return n
          }, function (n) {
            l.reject(n);
            return c.Promise.error(n)
          })
        })
      })
    }).then(function () {
      return e
    })
  }
}(this));
(function (a) {
  a.Bmob = a.Bmob || {};
  var c = a.Bmob;
  var b = c._;
  c.Role = c.Object.extend("_Role", {
    constructor: function (d, e) {
      if (b.isString(d) && (e instanceof c.ACL)) {
        c.Object.prototype.constructor.call(this, null, null);
        this.setName(d);
        this.setACL(e)
      } else {
        c.Object.prototype.constructor.call(this, d, e)
      }
    }, getName: function () {
      return this.get("name")
    }, setName: function (e, d) {
      return this.set("name", e, d)
    }, getUsers: function () {
      return this.relation("users")
    }, getRoles: function () {
      return this.relation("roles")
    }, validate: function (f, e) {
      if ("name" in f && f.name !== this.getName()) {
        var d = f.name;
        if (this.id && this.id !== f.objectId) {
          return new c.Error(c.Error.OTHER_CAUSE, "A role's name can only be set before it has been saved.")
        }
        if (!b.isString(d)) {
          return new c.Error(c.Error.OTHER_CAUSE, "A role's name must be a String.")
        }
        if (!(/^[0-9a-zA-Z\-_ ]+$/).test(d)) {
          return new c.Error(c.Error.OTHER_CAUSE, "A role's name can only contain alphanumeric characters, _, -, and spaces.")
        }
      }
      if (c.Object.prototype.validate) {
        return c.Object.prototype.validate.call(this, f, e)
      }
      return false
    }
  })
}(this));
(function (a) {
  a.Bmob = a.Bmob || {};
  var d = a.Bmob;
  var c = d._;
  d.Collection = function (f, e) {
    e = e || {};
    if (e.comparator) {
      this.comparator = e.comparator
    }
    if (e.model) {
      this.model = e.model
    }
    if (e.query) {
      this.query = e.query
    }
    this._reset();
    this.initialize.apply(this, arguments);
    if (f) {
      this.reset(f, {silent: true, parse: e.parse})
    }
  };
  c.extend(d.Collection.prototype, d.Events, {
    model: d.Object, initialize: function () {
    }, toJSON: function () {
      return this.map(function (e) {
        return e.toJSON()
      })
    }, add: function (f, o) {
      var k, m, h, l, n, g, j = {}, e = {};
      o = o || {};
      f = c.isArray(f) ? f.slice() : [f];
      for (k = 0, h = f.length; k < h; k++) {
        f[k] = this._prepareModel(f[k], o);
        l = f[k];
        if (!l) {
          throw new Error("Can't add an invalid model to a collection")
        }
        n = l.cid;
        if (j[n] || this._byCid[n]) {
          throw new Error("Duplicate cid: can't add the same model to a collection twice")
        }
        g = l.id;
        if (!d._isNullOrUndefined(g) && (e[g] || this._byId[g])) {
          throw new Error("Duplicate id: can't add the same model to a collection twice")
        }
        e[g] = l;
        j[n] = l
      }
      for (k = 0; k < h; k++) {
        (l = f[k]).on("all", this._onModelEvent, this);
        this._byCid[l.cid] = l;
        if (l.id) {
          this._byId[l.id] = l
        }
      }
      this.length += h;
      m = d._isNullOrUndefined(o.at) ? this.models.length : o.at;
      this.models.splice.apply(this.models, [m, 0].concat(f));
      if (this.comparator) {
        this.sort({silent: true})
      }
      if (o.silent) {
        return this
      }
      for (k = 0, h = this.models.length; k < h; k++) {
        l = this.models[k];
        if (j[l.cid]) {
          o.index = k;
          l.trigger("add", l, this, o)
        }
      }
      return this
    }, remove: function (k, h) {
      var j, e, g, f;
      h = h || {};
      k = c.isArray(k) ? k.slice() : [k];
      for (j = 0, e = k.length; j < e; j++) {
        f = this.getByCid(k[j]) || this.get(k[j]);
        if (!f) {
          continue
        }
        delete this._byId[f.id];
        delete this._byCid[f.cid];
        g = this.indexOf(f);
        this.models.splice(g, 1);
        this.length--;
        if (!h.silent) {
          h.index = g;
          f.trigger("remove", f, this, h)
        }
        this._removeReference(f)
      }
      return this
    }, get: function (e) {
      return e && this._byId[e.id || e]
    }, getByCid: function (e) {
      return e && this._byCid[e.cid || e]
    }, at: function (e) {
      return this.models[e]
    }, sort: function (f) {
      f = f || {};
      if (!this.comparator) {
        throw new Error("Cannot sort a set without a comparator")
      }
      var e = c.bind(this.comparator, this);
      if (this.comparator.length === 1) {
        this.models = this.sortBy(e)
      } else {
        this.models.sort(e)
      }
      if (!f.silent) {
        this.trigger("reset", this, f)
      }
      return this
    }, pluck: function (e) {
      return c.map(this.models, function (f) {
        return f.get(e)
      })
    }, reset: function (g, f) {
      var e = this;
      g = g || [];
      f = f || {};
      d._arrayEach(this.models, function (h) {
        e._removeReference(h)
      });
      this._reset();
      this.add(g, {silent: true, parse: f.parse});
      if (!f.silent) {
        this.trigger("reset", this, f)
      }
      return this
    }, fetch: function (e) {
      e = c.clone(e) || {};
      if (e.parse === undefined) {
        e.parse = true
      }
      var g = this;
      var f = this.query || new d.Query(this.model);
      return f.find().then(function (h) {
        if (e.add) {
          g.add(h, e)
        } else {
          g.reset(h, e)
        }
        return g
      })._thenRunCallbacks(e, this)
    }, create: function (f, e) {
      var g = this;
      e = e ? c.clone(e) : {};
      f = this._prepareModel(f, e);
      if (!f) {
        return false
      }
      if (!e.wait) {
        g.add(f, e)
      }
      var h = e.success;
      e.success = function (i, k, j) {
        if (e.wait) {
          g.add(i, e)
        }
        if (h) {
          h(i, k)
        } else {
          i.trigger("sync", f, k, e)
        }
      };
      f.save(null, e);
      return f
    }, parse: function (f, e) {
      return f
    }, chain: function () {
      return c(this.models).chain()
    }, _reset: function (e) {
      this.length = 0;
      this.models = [];
      this._byId = {};
      this._byCid = {}
    }, _prepareModel: function (g, f) {
      if (!(g instanceof d.Object)) {
        var e = g;
        f.collection = this;
        g = new this.model(e, f);
        if (!g._validate(g.attributes, f)) {
          g = false
        }
      } else {
        if (!g.collection) {
          g.collection = this
        }
      }
      return g
    }, _removeReference: function (e) {
      if (this === e.collection) {
        delete e.collection
      }
      e.off("all", this._onModelEvent, this)
    }, _onModelEvent: function (g, f, h, e) {
      if ((g === "add" || g === "remove") && h !== this) {
        return
      }
      if (g === "destroy") {
        this.remove(f, e)
      }
      if (f && g === "change:objectId") {
        delete this._byId[f.previous("objectId")];
        this._byId[f.id] = f
      }
      this.trigger.apply(this, arguments)
    }
  });
  var b = ["forEach", "each", "map", "reduce", "reduceRight", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "sortBy", "sortedIndex", "toArray", "size", "first", "initial", "rest", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "groupBy"];
  d._arrayEach(b, function (e) {
    d.Collection.prototype[e] = function () {
      return c[e].apply(c, [this.models].concat(c.toArray(arguments)))
    }
  });
  d.Collection.extend = d._extend
}(this));
(function (a) {
  a.Bmob = a.Bmob || {};
  var e = a.Bmob;
  var d = e._;
  e.View = function (f) {
    this.cid = d.uniqueId("view");
    this._configure(f || {});
    this._ensureElement();
    this.initialize.apply(this, arguments);
    this.delegateEvents()
  };
  var c = /^(\S+)\s*(.*)$/;
  var b = ["model", "collection", "el", "id", "attributes", "className", "tagName"];
  d.extend(e.View.prototype, e.Events, {
    tagName: "div", $: function (f) {
      return this.$el.find(f)
    }, initialize: function () {
    }, render: function () {
      return this
    }, remove: function () {
      this.$el.remove();
      return this
    }, make: function (g, f, i) {
      var h = document.createElement(g);
      if (f) {
        e.$(h).attr(f)
      }
      if (i) {
        e.$(h).html(i)
      }
      return h
    }, setElement: function (f, g) {
      this.$el = e.$(f);
      this.el = this.$el[0];
      if (g !== false) {
        this.delegateEvents()
      }
      return this
    }, delegateEvents: function (g) {
      g = g || e._getValue(this, "events");
      if (!g) {
        return
      }
      this.undelegateEvents();
      var f = this;
      e._objectEach(g, function (l, k) {
        if (!d.isFunction(l)) {
          l = f[g[k]]
        }
        if (!l) {
          throw new Error('Event "' + g[k] + '" does not exist')
        }
        var j = k.match(c);
        var i = j[1], h = j[2];
        l = d.bind(l, f);
        i += ".delegateEvents" + f.cid;
        if (h === "") {
          f.$el.bind(i, l)
        } else {
          f.$el.delegate(h, i, l)
        }
      })
    }, undelegateEvents: function () {
      this.$el.unbind(".delegateEvents" + this.cid)
    }, _configure: function (g) {
      if (this.options) {
        g = d.extend({}, this.options, g)
      }
      var f = this;
      d.each(b, function (h) {
        if (g[h]) {
          f[h] = g[h]
        }
      });
      this.options = g
    }, _ensureElement: function () {
      if (!this.el) {
        var f = e._getValue(this, "attributes") || {};
        if (this.id) {
          f.id = this.id
        }
        if (this.className) {
          f["class"] = this.className
        }
        this.setElement(this.make(this.tagName, f), false)
      } else {
        this.setElement(this.el, false)
      }
    }
  });
  e.View.extend = e._extend
}(this));
(function (a) {
  a.Bmob = a.Bmob || {};
  var c = a.Bmob;
  var b = c._;
  c.User = c.Object.extend("_User", {
    _isCurrentUser: false, _mergeMagicFields: function (d) {
      if (d.sessionToken) {
        this._sessionToken = d.sessionToken;
        delete d.sessionToken
      }
      c.User.__super__._mergeMagicFields.call(this, d)
    }, _cleanupAuthData: function () {
      if (!this.isCurrent()) {
        return
      }
      var d = this.get("authData");
      if (!d) {
        return
      }
      c._objectEach(this.get("authData"), function (f, e) {
        if (!d[e]) {
          delete d[e]
        }
      })
    }, _synchronizeAllAuthData: function () {
      var e = this.get("authData");
      if (!e) {
        return
      }
      var d = this;
      c._objectEach(this.get("authData"), function (g, f) {
        d._synchronizeAuthData(f)
      })
    }, _synchronizeAuthData: function (g) {
      if (!this.isCurrent()) {
        return
      }
      var d;
      if (b.isString(g)) {
        d = g;
        g = c.User._authProviders[d]
      } else {
        d = g.getAuthType()
      }
      var e = this.get("authData");
      if (!e || !g) {
        return
      }
      var f = g.restoreAuthentication(e[d]);
      if (!f) {
        this._unlinkFrom(g)
      }
    }, _handleSaveResult: function (d) {
      if (d) {
        this._isCurrentUser = true
      }
      this._cleanupAuthData();
      this._synchronizeAllAuthData();
      delete this._serverData.password;
      this._rebuildEstimatedDataForKey("password");
      this._refreshCache();
      if (d || this.isCurrent()) {
        c.User._saveCurrentUser(this)
      }
    }, _linkWith: function (j, f) {
      var e;
      if (b.isString(j)) {
        e = j;
        j = c.User._authProviders[j]
      } else {
        e = j.getAuthType()
      }
      if (b.has(f, "authData")) {
        var g = this.get("authData") || {};
        g[e] = f.authData;
        this.set("authData", g);
        var i = b.clone(f) || {};
        i.success = function (k) {
          k._handleSaveResult(true);
          if (f.success) {
            f.success.apply(this, arguments)
          }
        };
        return this.save({authData: g}, i)
      } else {
        var d = this;
        var h = new c.Promise();
        j.authenticate({
          success: function (l, k) {
            d._linkWith(l, {authData: k, success: f.success, error: f.error}).then(function () {
              h.resolve(d)
            })
          }, error: function (l, k) {
            if (f.error) {
              f.error(d, k)
            }
            h.reject(k)
          }
        });
        return h
      }
    }, _unlinkFrom: function (h, f) {
      var e;
      if (b.isString(h)) {
        e = h;
        h = c.User._authProviders[h]
      } else {
        e = h.getAuthType()
      }
      var g = b.clone(f);
      var d = this;
      g.authData = null;
      g.success = function (i) {
        d._synchronizeAuthData(h);
        if (f.success) {
          f.success.apply(this, arguments)
        }
      };
      return this._linkWith(h, g)
    }, _isLinked: function (f) {
      var d;
      if (b.isString(f)) {
        d = f
      } else {
        d = f.getAuthType()
      }
      var e = this.get("authData") || {};
      return !!e[d]
    }, _logOutWithAll: function () {
      var e = this.get("authData");
      if (!e) {
        return
      }
      var d = this;
      c._objectEach(this.get("authData"), function (g, f) {
        d._logOutWith(f)
      })
    }, _logOutWith: function (d) {
      if (!this.isCurrent()) {
        return
      }
      if (b.isString(d)) {
        d = c.User._authProviders[d]
      }
      if (d && d.deauthenticate) {
        d.deauthenticate()
      }
    }, signUp: function (g, f) {
      var e;
      f = f || {};
      var i = (g && g.username) || this.get("username");
      if (!i || (i === "")) {
        e = new c.Error(c.Error.OTHER_CAUSE, "Cannot sign up user with an empty name.");
        if (f && f.error) {
          f.error(this, e)
        }
        return c.Promise.error(e)
      }
      var d = (g && g.password) || this.get("password");
      if (!d || (d === "")) {
        e = new c.Error(c.Error.OTHER_CAUSE, "Cannot sign up user with an empty password.");
        if (f && f.error) {
          f.error(this, e)
        }
        return c.Promise.error(e)
      }
      var h = b.clone(f);
      h.success = function (j) {
        j._handleSaveResult(true);
        if (f.success) {
          f.success.apply(this, arguments)
        }
      };
      return this.save(g, h)
    }, logIn: function (e) {
      var d = this;
      var f = c._request("login", null, null, "GET", this.toJSON());
      return f.then(function (j, g, i) {
        var h = d.parse(j, g, i);
        d._finishFetch(h);
        d._handleSaveResult(true);
        return d
      })._thenRunCallbacks(e, this)
    }, save: function (h, g, f) {
      var e, l, j, m, k;
      if (b.isObject(h) || b.isNull(h) || b.isUndefined(h)) {
        l = h;
        m = g
      } else {
        l = {};
        l[h] = g;
        m = f
      }
      m = m || {};
      var d = b.clone(m);
      d.success = function (i) {
        i._handleSaveResult(false);
        if (m.success) {
          m.success.apply(this, arguments)
        }
      };
      return c.Object.prototype.save.call(this, l, d)
    }, fetch: function (d) {
      var e = d ? b.clone(d) : {};
      e.success = function (f) {
        f._handleSaveResult(false);
        if (d && d.success) {
          d.success.apply(this, arguments)
        }
      };
      return c.Object.prototype.fetch.call(this, e)
    }, isCurrent: function () {
      return this._isCurrentUser
    }, getUsername: function () {
      return this.get("username")
    }, setUsername: function (e, d) {
      return this.set("username", e, d)
    }, setPassword: function (e, d) {
      return this.set("password", e, d)
    }, getEmail: function () {
      return this.get("email")
    }, setEmail: function (e, d) {
      return this.set("email", e, d)
    }, authenticated: function () {
      return !!this._sessionToken && (c.User.current() && c.User.current().id === this.id)
    }
  }, {
    _currentUser: null,
    _currentUserMatchesDisk: false,
    _CURRENT_USER_KEY: "currentUser",
    _authProviders: {},
    signUp: function (h, g, f, e) {
      f = f || {};
      f.username = h;
      f.password = g;
      var d = c.Object._create("_User");
      return d.signUp(f, e)
    },
    logIn: function (g, f, e) {
      var d = c.Object._create("_User");
      d._finishFetch({username: g, password: f});
      return d.logIn(e)
    },
    logOut: function () {
      if (c.User._currentUser !== null) {
        c.User._currentUser._logOutWithAll();
        c.User._currentUser._isCurrentUser = false
      }
      c.User._currentUserMatchesDisk = true;
      c.User._currentUser = null;
      c.localStorage.removeItem(c._getBmobPath(c.User._CURRENT_USER_KEY))
    },
    requestPasswordReset: function (e, d) {
      var f = {email: e};
      var g = c._request("requestPasswordReset", null, null, "POST", f);
      return g._thenRunCallbacks(d)
    },
    requestEmailVerify: function (e, d) {
      var f = {email: e};
      var g = c._request("requestEmailVerify", null, null, "POST", f);
      return g._thenRunCallbacks(d)
    },
    current: function () {
      if (c.User._currentUser) {
        return c.User._currentUser
      }
      if (c.User._currentUserMatchesDisk) {
        return c.User._currentUser
      }
      c.User._currentUserMatchesDisk = true;
      var d = c.localStorage.getItem(c._getBmobPath(c.User._CURRENT_USER_KEY));
      if (!d) {
        return null
      }
      c.User._currentUser = c.Object._create("_User");
      c.User._currentUser._isCurrentUser = true;
      var e = JSON.parse(d);
      c.User._currentUser.id = e._id;
      delete e._id;
      c.User._currentUser._sessionToken = e._sessionToken;
      delete e._sessionToken;
      c.User._currentUser.set(e);
      c.User._currentUser._synchronizeAllAuthData();
      c.User._currentUser._refreshCache();
      c.User._currentUser._opSetQueue = [{}];
      return c.User._currentUser
    },
    _saveCurrentUser: function (d) {
      if (c.User._currentUser !== d) {
        c.User.logOut()
      }
      d._isCurrentUser = true;
      c.User._currentUser = d;
      c.User._currentUserMatchesDisk = true;
      var e = d.toJSON();
      e._id = d.id;
      e._sessionToken = d._sessionToken;
      c.localStorage.setItem(c._getBmobPath(c.User._CURRENT_USER_KEY), JSON.stringify(e))
    },
    _registerAuthenticationProvider: function (d) {
      c.User._authProviders[d.getAuthType()] = d;
      if (c.User.current()) {
        c.User.current()._synchronizeAuthData(d.getAuthType())
      }
    },
    _logInWith: function (f, e) {
      var d = c.Object._create("_User");
      return d._linkWith(f, e)
    }
  })
}(this));
(function (a) {
  a.Bmob = a.Bmob || {};
  var c = a.Bmob;
  var b = c._;
  c.Query = function (d) {
    if (b.isString(d)) {
      d = c.Object._getSubclass(d)
    }
    this.objectClass = d;
    this.className = d.prototype.className;
    this._where = {};
    this._include = [];
    this._limit = -1;
    this._skip = 0;
    this._extraOptions = {}
  };
  c.Query.or = function () {
    var d = b.toArray(arguments);
    var e = null;
    c._arrayEach(d, function (g) {
      if (b.isNull(e)) {
        e = g.className
      }
      if (e !== g.className) {
        throw "All queries must be for the same class"
      }
    });
    var f = new c.Query(e);
    f._orQuery(d);
    return f
  };
  c.Query._extend = c._extend;
  c.Query.prototype = {
    _processResult: function (d) {
      return d
    }, get: function (d, f) {
      var e = this;
      e.equalTo("objectId", d);
      return e.first().then(function (g) {
        if (g) {
          return g
        }
        var h = new c.Error(c.Error.OBJECT_NOT_FOUND, "Object not found.");
        return c.Promise.error(h)
      })._thenRunCallbacks(f, null)
    }, toJSON: function () {
      var d = {where: this._where};
      if (this._include.length > 0) {
        d.include = this._include.join(",")
      }
      if (this._select) {
        d.keys = this._select.join(",")
      }
      if (this._limit >= 0) {
        d.limit = this._limit
      }
      if (this._skip > 0) {
        d.skip = this._skip
      }
      if (this._order !== undefined) {
        d.order = this._order
      }
      c._objectEach(this._extraOptions, function (f, e) {
        d[e] = f
      });
      return d
    }, _newObject: function (d) {
      if (d && d.className) {
        obj = new c.Object(d.className)
      } else {
        obj = new this.objectClass()
      }
      return obj
    }, _createRequest: function (d) {
      return c._request("classes", this.className, null, "GET", d || this.toJSON())
    }, find: function (e) {
      var d = this;
      var f = this._createRequest();
      return f.then(function (g) {
        return b.map(g.results, function (h) {
          var i = d._newObject(g);
          i._finishFetch(d._processResult(h), true);
          return i
        })
      })._thenRunCallbacks(e)
    }, destroyAll: function (e) {
      var d = this;
      return d.find().then(function (f) {
        return c.Object.destroyAll(f)
      })._thenRunCallbacks(e)
    }, count: function (d) {
      var f = this.toJSON();
      f.limit = 0;
      f.count = 1;
      var e = this._createRequest(f);
      return e.then(function (g) {
        return g.count
      })._thenRunCallbacks(d)
    }, first: function (e) {
      var d = this;
      var g = this.toJSON();
      g.limit = 1;
      var f = this._createRequest(g);
      return f.then(function (h) {
        return b.map(h.results, function (i) {
          var j = d._newObject();
          j._finishFetch(d._processResult(i), true);
          return j
        })[0]
      })._thenRunCallbacks(e)
    }, collection: function (d, e) {
      e = e || {};
      return new c.Collection(d, b.extend(e, {model: this._objectClass || this.objectClass, query: this}))
    }, skip: function (d) {
      this._skip = d;
      return this
    }, limit: function (d) {
      this._limit = d;
      return this
    }, equalTo: function (d, e) {
      this._where[d] = c._encode(e);
      return this
    }, _addCondition: function (d, f, e) {
      if (!this._where[d]) {
        this._where[d] = {}
      }
      this._where[d][f] = c._encode(e);
      return this
    }, notEqualTo: function (d, e) {
      this._addCondition(d, "$ne", e);
      return this
    }, lessThan: function (d, e) {
      this._addCondition(d, "$lt", e);
      return this
    }, greaterThan: function (d, e) {
      this._addCondition(d, "$gt", e);
      return this
    }, lessThanOrEqualTo: function (d, e) {
      this._addCondition(d, "$lte", e);
      return this
    }, greaterThanOrEqualTo: function (d, e) {
      this._addCondition(d, "$gte", e);
      return this
    }, containedIn: function (e, d) {
      this._addCondition(e, "$in", d);
      return this
    }, notContainedIn: function (e, d) {
      this._addCondition(e, "$nin", d);
      return this
    }, containsAll: function (e, d) {
      this._addCondition(e, "$all", d);
      return this
    }, exists: function (d) {
      this._addCondition(d, "$exists", true);
      return this
    }, doesNotExist: function (d) {
      this._addCondition(d, "$exists", false);
      return this
    }, matches: function (e, f, d) {
      this._addCondition(e, "$regex", f);
      if (!d) {
        d = ""
      }
      if (f.ignoreCase) {
        d += "i"
      }
      if (f.multiline) {
        d += "m"
      }
      if (d && d.length) {
        this._addCondition(e, "$options", d)
      }
      return this
    }, matchesQuery: function (d, f) {
      var e = f.toJSON();
      e.className = f.className;
      this._addCondition(d, "$inQuery", e);
      return this
    }, doesNotMatchQuery: function (d, f) {
      var e = f.toJSON();
      e.className = f.className;
      this._addCondition(d, "$notInQuery", e);
      return this
    }, matchesKeyInQuery: function (e, d, g) {
      var f = g.toJSON();
      f.className = g.className;
      this._addCondition(e, "$select", {key: d, query: f});
      return this
    }, doesNotMatchKeyInQuery: function (e, d, g) {
      var f = g.toJSON();
      f.className = g.className;
      this._addCondition(e, "$dontSelect", {key: d, query: f});
      return this
    }, _orQuery: function (d) {
      var e = b.map(d, function (f) {
        return f.toJSON().where
      });
      this._where.$or = e;
      return this
    }, _quote: function (d) {
      return "\\Q" + d.replace("\\E", "\\E\\\\E\\Q") + "\\E"
    }, contains: function (d, e) {
      this._addCondition(d, "$regex", this._quote(e));
      return this
    }, startsWith: function (d, e) {
      this._addCondition(d, "$regex", "^" + this._quote(e));
      return this
    }, endsWith: function (d, e) {
      this._addCondition(d, "$regex", this._quote(e) + "$");
      return this
    }, ascending: function (d) {
      if (c._isNullOrUndefined(this._order)) {
        this._order = d
      } else {
        this._order = this._order + "," + d
      }
      return this
    }, cleanOrder: function (d) {
      this._order = null;
      return this
    }, descending: function (d) {
      if (c._isNullOrUndefined(this._order)) {
        this._order = "-" + d
      } else {
        this._order = this._order + ",-" + d
      }
      return this
    }, near: function (e, d) {
      if (!(d instanceof c.GeoPoint)) {
        d = new c.GeoPoint(d)
      }
      this._addCondition(e, "$nearSphere", d);
      return this
    }, withinRadians: function (e, d, f) {
      this.near(e, d);
      this._addCondition(e, "$maxDistance", f);
      return this
    }, withinMiles: function (e, d, f) {
      return this.withinRadians(e, d, f / 3958.8)
    }, withinKilometers: function (e, d, f) {
      return this.withinRadians(e, d, f / 6371)
    }, withinGeoBox: function (d, f, e) {
      if (!(f instanceof c.GeoPoint)) {
        f = new c.GeoPoint(f)
      }
      if (!(e instanceof c.GeoPoint)) {
        e = new c.GeoPoint(e)
      }
      this._addCondition(d, "$within", {"$box": [f, e]});
      return this
    }, include: function () {
      var d = this;
      c._arrayEach(arguments, function (e) {
        if (b.isArray(e)) {
          d._include = d._include.concat(e)
        } else {
          d._include.push(e)
        }
      });
      return this
    }, select: function () {
      var d = this;
      this._select = this._select || [];
      c._arrayEach(arguments, function (e) {
        if (b.isArray(e)) {
          d._select = d._select.concat(e)
        } else {
          d._select.push(e)
        }
      });
      return this
    }, each: function (i, e) {
      e = e || {};
      if (this._order || this._skip || (this._limit >= 0)) {
        var d = "Cannot iterate on a query with sort, skip, or limit.";
        return c.Promise.error(d)._thenRunCallbacks(e)
      }
      var g = new c.Promise();
      var f = new c.Query(this.objectClass);
      f._limit = e.batchSize || 100;
      f._where = b.clone(this._where);
      f._include = b.clone(this._include);
      f.ascending("objectId");
      var h = false;
      return c.Promise._continueWhile(function () {
        return !h
      }, function () {
        return f.find().then(function (j) {
          var k = c.Promise.as();
          c._.each(j, function (l) {
            k = k.then(function () {
              return i(l)
            })
          });
          return k.then(function () {
            if (j.length >= f._limit) {
              f.greaterThan("objectId", j[j.length - 1].id)
            } else {
              h = true
            }
          })
        })
      })._thenRunCallbacks(e)
    }
  };
  c.FriendShipQuery = c.Query._extend({
    _objectClass: c.User, _newObject: function () {
      return new c.User()
    }, _processResult: function (e) {
      var d = e[this._friendshipTag];
      if (d.__type === "Pointer" && d.className === "_User") {
        delete d.__type;
        delete d.className
      }
      return d
    },
  })
}(this));
(function (a) {
  a.Bmob = a.Bmob || {};
  var d = a.Bmob;
  var c = d._;
  d.History = function () {
    this.handlers = [];
    c.bindAll(this, "checkUrl")
  };
  var e = /^[#\/]/;
  var b = /msie [\w.]+/;
  d.History.started = false;
  c.extend(d.History.prototype, d.Events, {
    interval: 50, getHash: function (h) {
      var g = h ? h.location : window.location;
      var f = g.href.match(/#(.*)$/);
      return f ? f[1] : ""
    }, getFragment: function (g, f) {
      if (d._isNullOrUndefined(g)) {
        if (this._hasPushState || f) {
          g = window.location.pathname;
          var h = window.location.search;
          if (h) {
            g += h
          }
        } else {
          g = this.getHash()
        }
      }
      if (!g.indexOf(this.options.root)) {
        g = g.substr(this.options.root.length)
      }
      return g.replace(e, "")
    }, start: function (h) {
      if (d.History.started) {
        throw new Error("Bmob.history has already been started")
      }
      d.History.started = true;
      this.options = c.extend({}, {root: "/"}, this.options, h);
      this._wantsHashChange = this.options.hashChange !== false;
      this._wantsPushState = !!this.options.pushState;
      this._hasPushState = !!(this.options.pushState && window.history && window.history.pushState);
      var g = this.getFragment();
      var f = document.documentMode;
      var j = (b.exec(navigator.userAgent.toLowerCase()) && (!f || f <= 7));
      if (j) {
        this.iframe = d.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;
        this.navigate(g)
      }
      if (this._hasPushState) {
        d.$(window).bind("popstate", this.checkUrl)
      } else {
        if (this._wantsHashChange && ("onhashchange" in window) && !j) {
          d.$(window).bind("hashchange", this.checkUrl)
        } else {
          if (this._wantsHashChange) {
            this._checkUrlInterval = window.setInterval(this.checkUrl, this.interval)
          }
        }
      }
      this.fragment = g;
      var k = window.location;
      var i = k.pathname === this.options.root;
      if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !i) {
        this.fragment = this.getFragment(null, true);
        window.location.replace(this.options.root + "#" + this.fragment);
        return true
      } else {
        if (this._wantsPushState && this._hasPushState && i && k.hash) {
          this.fragment = this.getHash().replace(e, "");
          window.history.replaceState({}, document.title, k.protocol + "//" + k.host + this.options.root + this.fragment)
        }
      }
      if (!this.options.silent) {
        return this.loadUrl()
      }
    }, stop: function () {
      d.$(window).unbind("popstate", this.checkUrl).unbind("hashchange", this.checkUrl);
      window.clearInterval(this._checkUrlInterval);
      d.History.started = false
    }, route: function (f, g) {
      this.handlers.unshift({route: f, callback: g})
    }, checkUrl: function (g) {
      var f = this.getFragment();
      if (f === this.fragment && this.iframe) {
        f = this.getFragment(this.getHash(this.iframe))
      }
      if (f === this.fragment) {
        return false
      }
      if (this.iframe) {
        this.navigate(f)
      }
      if (!this.loadUrl()) {
        this.loadUrl(this.getHash())
      }
    }, loadUrl: function (h) {
      var g = this.fragment = this.getFragment(h);
      var f = c.any(this.handlers, function (i) {
        if (i.route.test(g)) {
          i.callback(g);
          return true
        }
      });
      return f
    }, navigate: function (h, g) {
      if (!d.History.started) {
        return false
      }
      if (!g || g === true) {
        g = {trigger: g}
      }
      var i = (h || "").replace(e, "");
      if (this.fragment === i) {
        return
      }
      if (this._hasPushState) {
        if (i.indexOf(this.options.root) !== 0) {
          i = this.options.root + i
        }
        this.fragment = i;
        var f = g.replace ? "replaceState" : "pushState";
        window.history[f]({}, document.title, i)
      } else {
        if (this._wantsHashChange) {
          this.fragment = i;
          this._updateHash(window.location, i, g.replace);
          if (this.iframe && (i !== this.getFragment(this.getHash(this.iframe)))) {
            if (!g.replace) {
              this.iframe.document.open().close()
            }
            this._updateHash(this.iframe.location, i, g.replace)
          }
        } else {
          window.location.assign(this.options.root + h)
        }
      }
      if (g.trigger) {
        this.loadUrl(h)
      }
    }, _updateHash: function (f, g, h) {
      if (h) {
        var i = f.toString().replace(/(javascript:|#).*$/, "");
        f.replace(i + "#" + g)
      } else {
        f.hash = g
      }
    }
  })
}(this));
(function (b) {
  b.Bmob = b.Bmob || {};
  var d = b.Bmob;
  var c = d._;
  d.Router = function (g) {
    g = g || {};
    if (g.routes) {
      this.routes = g.routes
    }
    this._bindRoutes();
    this.initialize.apply(this, arguments)
  };
  var e = /:\w+/g;
  var f = /\*\w+/g;
  var a = /[\-\[\]{}()+?.,\\\^\$\|#\s]/g;
  c.extend(d.Router.prototype, d.Events, {
    initialize: function () {
    }, route: function (g, h, i) {
      d.history = d.history || new d.History();
      if (!c.isRegExp(g)) {
        g = this._routeToRegExp(g)
      }
      if (!i) {
        i = this[h]
      }
      d.history.route(g, c.bind(function (k) {
        var j = this._extractParameters(g, k);
        if (i) {
          i.apply(this, j)
        }
        this.trigger.apply(this, ["route:" + h].concat(j));
        d.history.trigger("route", this, h, j)
      }, this));
      return this
    }, navigate: function (h, g) {
      d.history.navigate(h, g)
    }, _bindRoutes: function () {
      if (!this.routes) {
        return
      }
      var h = [];
      for (var j in this.routes) {
        if (this.routes.hasOwnProperty(j)) {
          h.unshift([j, this.routes[j]])
        }
      }
      for (var k = 0, g = h.length; k < g; k++) {
        this.route(h[k][0], h[k][1], this[h[k][1]])
      }
    }, _routeToRegExp: function (g) {
      g = g.replace(a, "\\$&").replace(e, "([^/]+)").replace(f, "(.*?)");
      return new RegExp("^" + g + "$")
    }, _extractParameters: function (g, h) {
      return g.exec(h).slice(1)
    }
  });
  d.Router.extend = d._extend
}(this));
(function (a) {
  a.Bmob = a.Bmob || {};
  var c = a.Bmob;
  var b = c._;
  c.Image = c.Image || {};
  b.extend(c.Image, {
    thumbnail: function (f, d) {
      var e = c._request("images/thumbnail", null, null, "POST", c._encode(f, null, true));
      return e.then(function (g) {
        return g
      })
    }, watermark: function (f, d) {
      var e = c._request("images/watermark", null, null, "POST", c._encode(f, null, true));
      return e.then(function (g) {
        return g
      })
    }
  })
}(this));
(function (a) {
  a.Bmob = a.Bmob || {};
  var c = a.Bmob;
  var b = c._;
  c.Sms = c.Sms || {};
  b.extend(c.Sms, {
    requestSms: function (f, d) {
      var e = c._request("requestSms", null, null, "POST", c._encode(f, null, true));
      return e.then(function (g) {
        return c._decode(null, g)
      })._thenRunCallbacks(d)
    }, requestSmsCode: function (f, d) {
      var e = c._request("requestSmsCode", null, null, "POST", c._encode(f, null, true));
      return e.then(function (g) {
        return c._decode(null, g)
      })._thenRunCallbacks(d)
    }, verifySmsCode: function (f, g, d) {
      data = {mobilePhoneNumber: f};
      var e = c._request("verifySmsCode/" + g, null, null, "POST", c._encode(data, null, true));
      return e.then(function (h) {
        return c._decode(null, h)
      })._thenRunCallbacks(d)
    }, querySms: function (e, d) {
      var f = c._request("querySms/" + e, null, null, "GET", null);
      return f.then(function (g) {
        return c._decode(null, g)
      })._thenRunCallbacks(d)
    }
  })
}(this));
(function (a) {
  a.Bmob = a.Bmob || {};
  var c = a.Bmob;
  var b = c._;
  c.Pay = c.Pay || {};
  b.extend(c.Pay, {
    webPay: function (g, i, d, e) {
      var h = {order_price: g, product_name: i, body: d};
      var f = c._request("webpay", null, null, "POST", c._encode(h, null, true));
      return f.then(function (j) {
        return c._decode(null, j)
      })._thenRunCallbacks(e)
    }, queryOrder: function (d, e) {
      var f = c._request("pay/" + d, null, null, "GET", null);
      return f.then(function (g) {
        return c._decode(null, g)
      })._thenRunCallbacks(e)
    }
  })
}(this));
(function (a) {
  a.Bmob = a.Bmob || {};
  var c = a.Bmob;
  var b = c._;
  c.Cloud = c.Cloud || {};
  b.extend(c.Cloud, {
    run: function (e, g, d) {
      var f = c._request("functions", e, null, "POST", c._encode(g, null, true));
      return f.then(function (h) {
        return c._decode(null, h).result
      })._thenRunCallbacks(d)
    }
  })
}(this));
(function (a) {
  a.Bmob = a.Bmob || {};
  var b = a.Bmob;
  b.Installation = b.Object.extend("_Installation");
  b.Push = b.Push || {};
  b.Push.send = function (e, c) {
    if (e.where) {
      e.where = e.where.toJSON().where
    }
    if (e.push_time) {
      e.push_time = e.push_time.toJSON()
    }
    if (e.expiration_time) {
      e.expiration_time = e.expiration_time.toJSON()
    }
    if (e.expiration_time && e.expiration_time_interval) {
      throw "Both expiration_time and expiration_time_interval can't be set"
    }
    var d = b._request("push", null, null, "POST", e);
    return d._thenRunCallbacks(c)
  }
}(this));
