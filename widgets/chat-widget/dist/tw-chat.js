var zA = Object.defineProperty;
var aC = (c) => {
  throw TypeError(c);
};
var UA = (c, u, f) => u in c ? zA(c, u, { enumerable: !0, configurable: !0, writable: !0, value: f }) : c[u] = f;
var Zn = (c, u, f) => UA(c, typeof u != "symbol" ? u + "" : u, f), FA = (c, u, f) => u.has(c) || aC("Cannot " + f);
var iC = (c, u, f) => u.has(c) ? aC("Cannot add the same private member more than once") : u instanceof WeakSet ? u.add(c) : u.set(c, f);
var Py = (c, u, f) => (FA(c, u, "access private method"), f);
var Oo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function lE(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var qw = { exports: {} }, Dh = {}, Qw = { exports: {} }, Gt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oC;
function jA() {
  if (oC) return Gt;
  oC = 1;
  var c = Symbol.for("react.element"), u = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), S = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), L = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), A = Symbol.iterator;
  function U(k) {
    return k === null || typeof k != "object" ? null : (k = A && k[A] || k["@@iterator"], typeof k == "function" ? k : null);
  }
  var V = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, j = Object.assign, $ = {};
  function se(k, K, fe) {
    this.props = k, this.context = K, this.refs = $, this.updater = fe || V;
  }
  se.prototype.isReactComponent = {}, se.prototype.setState = function(k, K) {
    if (typeof k != "object" && typeof k != "function" && k != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, k, K, "setState");
  }, se.prototype.forceUpdate = function(k) {
    this.updater.enqueueForceUpdate(this, k, "forceUpdate");
  };
  function Ce() {
  }
  Ce.prototype = se.prototype;
  function Ae(k, K, fe) {
    this.props = k, this.context = K, this.refs = $, this.updater = fe || V;
  }
  var we = Ae.prototype = new Ce();
  we.constructor = Ae, j(we, se.prototype), we.isPureReactComponent = !0;
  var ge = Array.isArray, Ie = Object.prototype.hasOwnProperty, be = { current: null }, De = { key: !0, ref: !0, __self: !0, __source: !0 };
  function We(k, K, fe) {
    var Be, Ye = {}, lt = null, et = null;
    if (K != null) for (Be in K.ref !== void 0 && (et = K.ref), K.key !== void 0 && (lt = "" + K.key), K) Ie.call(K, Be) && !De.hasOwnProperty(Be) && (Ye[Be] = K[Be]);
    var dt = arguments.length - 2;
    if (dt === 1) Ye.children = fe;
    else if (1 < dt) {
      for (var ut = Array(dt), Ft = 0; Ft < dt; Ft++) ut[Ft] = arguments[Ft + 2];
      Ye.children = ut;
    }
    if (k && k.defaultProps) for (Be in dt = k.defaultProps, dt) Ye[Be] === void 0 && (Ye[Be] = dt[Be]);
    return { $$typeof: c, type: k, key: lt, ref: et, props: Ye, _owner: be.current };
  }
  function Ut(k, K) {
    return { $$typeof: c, type: k.type, key: K, ref: k.ref, props: k.props, _owner: k._owner };
  }
  function Dt(k) {
    return typeof k == "object" && k !== null && k.$$typeof === c;
  }
  function B(k) {
    var K = { "=": "=0", ":": "=2" };
    return "$" + k.replace(/[=:]/g, function(fe) {
      return K[fe];
    });
  }
  var ee = /\/+/g;
  function pe(k, K) {
    return typeof k == "object" && k !== null && k.key != null ? B("" + k.key) : K.toString(36);
  }
  function ne(k, K, fe, Be, Ye) {
    var lt = typeof k;
    (lt === "undefined" || lt === "boolean") && (k = null);
    var et = !1;
    if (k === null) et = !0;
    else switch (lt) {
      case "string":
      case "number":
        et = !0;
        break;
      case "object":
        switch (k.$$typeof) {
          case c:
          case u:
            et = !0;
        }
    }
    if (et) return et = k, Ye = Ye(et), k = Be === "" ? "." + pe(et, 0) : Be, ge(Ye) ? (fe = "", k != null && (fe = k.replace(ee, "$&/") + "/"), ne(Ye, K, fe, "", function(Ft) {
      return Ft;
    })) : Ye != null && (Dt(Ye) && (Ye = Ut(Ye, fe + (!Ye.key || et && et.key === Ye.key ? "" : ("" + Ye.key).replace(ee, "$&/") + "/") + k)), K.push(Ye)), 1;
    if (et = 0, Be = Be === "" ? "." : Be + ":", ge(k)) for (var dt = 0; dt < k.length; dt++) {
      lt = k[dt];
      var ut = Be + pe(lt, dt);
      et += ne(lt, K, fe, ut, Ye);
    }
    else if (ut = U(k), typeof ut == "function") for (k = ut.call(k), dt = 0; !(lt = k.next()).done; ) lt = lt.value, ut = Be + pe(lt, dt++), et += ne(lt, K, fe, ut, Ye);
    else if (lt === "object") throw K = String(k), Error("Objects are not valid as a React child (found: " + (K === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : K) + "). If you meant to render a collection of children, use an array instead.");
    return et;
  }
  function me(k, K, fe) {
    if (k == null) return k;
    var Be = [], Ye = 0;
    return ne(k, Be, "", "", function(lt) {
      return K.call(fe, lt, Ye++);
    }), Be;
  }
  function Se(k) {
    if (k._status === -1) {
      var K = k._result;
      K = K(), K.then(function(fe) {
        (k._status === 0 || k._status === -1) && (k._status = 1, k._result = fe);
      }, function(fe) {
        (k._status === 0 || k._status === -1) && (k._status = 2, k._result = fe);
      }), k._status === -1 && (k._status = 0, k._result = K);
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var he = { current: null }, I = { transition: null }, oe = { ReactCurrentDispatcher: he, ReactCurrentBatchConfig: I, ReactCurrentOwner: be };
  return Gt.Children = { map: me, forEach: function(k, K, fe) {
    me(k, function() {
      K.apply(this, arguments);
    }, fe);
  }, count: function(k) {
    var K = 0;
    return me(k, function() {
      K++;
    }), K;
  }, toArray: function(k) {
    return me(k, function(K) {
      return K;
    }) || [];
  }, only: function(k) {
    if (!Dt(k)) throw Error("React.Children.only expected to receive a single React element child.");
    return k;
  } }, Gt.Component = se, Gt.Fragment = f, Gt.Profiler = y, Gt.PureComponent = Ae, Gt.StrictMode = p, Gt.Suspense = _, Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oe, Gt.cloneElement = function(k, K, fe) {
    if (k == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + k + ".");
    var Be = j({}, k.props), Ye = k.key, lt = k.ref, et = k._owner;
    if (K != null) {
      if (K.ref !== void 0 && (lt = K.ref, et = be.current), K.key !== void 0 && (Ye = "" + K.key), k.type && k.type.defaultProps) var dt = k.type.defaultProps;
      for (ut in K) Ie.call(K, ut) && !De.hasOwnProperty(ut) && (Be[ut] = K[ut] === void 0 && dt !== void 0 ? dt[ut] : K[ut]);
    }
    var ut = arguments.length - 2;
    if (ut === 1) Be.children = fe;
    else if (1 < ut) {
      dt = Array(ut);
      for (var Ft = 0; Ft < ut; Ft++) dt[Ft] = arguments[Ft + 2];
      Be.children = dt;
    }
    return { $$typeof: c, type: k.type, key: Ye, ref: lt, props: Be, _owner: et };
  }, Gt.createContext = function(k) {
    return k = { $$typeof: S, _currentValue: k, _currentValue2: k, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, k.Provider = { $$typeof: E, _context: k }, k.Consumer = k;
  }, Gt.createElement = We, Gt.createFactory = function(k) {
    var K = We.bind(null, k);
    return K.type = k, K;
  }, Gt.createRef = function() {
    return { current: null };
  }, Gt.forwardRef = function(k) {
    return { $$typeof: g, render: k };
  }, Gt.isValidElement = Dt, Gt.lazy = function(k) {
    return { $$typeof: O, _payload: { _status: -1, _result: k }, _init: Se };
  }, Gt.memo = function(k, K) {
    return { $$typeof: L, type: k, compare: K === void 0 ? null : K };
  }, Gt.startTransition = function(k) {
    var K = I.transition;
    I.transition = {};
    try {
      k();
    } finally {
      I.transition = K;
    }
  }, Gt.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Gt.useCallback = function(k, K) {
    return he.current.useCallback(k, K);
  }, Gt.useContext = function(k) {
    return he.current.useContext(k);
  }, Gt.useDebugValue = function() {
  }, Gt.useDeferredValue = function(k) {
    return he.current.useDeferredValue(k);
  }, Gt.useEffect = function(k, K) {
    return he.current.useEffect(k, K);
  }, Gt.useId = function() {
    return he.current.useId();
  }, Gt.useImperativeHandle = function(k, K, fe) {
    return he.current.useImperativeHandle(k, K, fe);
  }, Gt.useInsertionEffect = function(k, K) {
    return he.current.useInsertionEffect(k, K);
  }, Gt.useLayoutEffect = function(k, K) {
    return he.current.useLayoutEffect(k, K);
  }, Gt.useMemo = function(k, K) {
    return he.current.useMemo(k, K);
  }, Gt.useReducer = function(k, K, fe) {
    return he.current.useReducer(k, K, fe);
  }, Gt.useRef = function(k) {
    return he.current.useRef(k);
  }, Gt.useState = function(k) {
    return he.current.useState(k);
  }, Gt.useSyncExternalStore = function(k, K, fe) {
    return he.current.useSyncExternalStore(k, K, fe);
  }, Gt.useTransition = function() {
    return he.current.useTransition();
  }, Gt.version = "18.2.0", Gt;
}
var zh = { exports: {} };
zh.exports;
var lC;
function PA() {
  return lC || (lC = 1, function(c, u) {
    var f = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    f.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var p = "18.2.0", y = Symbol.for("react.element"), E = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), L = Symbol.for("react.provider"), O = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), V = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), se = Symbol.for("react.offscreen"), Ce = Symbol.iterator, Ae = "@@iterator";
      function we(x) {
        if (x === null || typeof x != "object")
          return null;
        var M = Ce && x[Ce] || x[Ae];
        return typeof M == "function" ? M : null;
      }
      var ge = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ie = {
        transition: null
      }, be = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, De = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, We = {}, Ut = null;
      function Dt(x) {
        Ut = x;
      }
      We.setExtraStackFrame = function(x) {
        Ut = x;
      }, We.getCurrentStack = null, We.getStackAddendum = function() {
        var x = "";
        Ut && (x += Ut);
        var M = We.getCurrentStack;
        return M && (x += M() || ""), x;
      };
      var B = !1, ee = !1, pe = !1, ne = !1, me = !1, Se = {
        ReactCurrentDispatcher: ge,
        ReactCurrentBatchConfig: Ie,
        ReactCurrentOwner: De
      };
      Se.ReactDebugCurrentFrame = We, Se.ReactCurrentActQueue = be;
      function he(x) {
        {
          for (var M = arguments.length, G = new Array(M > 1 ? M - 1 : 0), te = 1; te < M; te++)
            G[te - 1] = arguments[te];
          oe("warn", x, G);
        }
      }
      function I(x) {
        {
          for (var M = arguments.length, G = new Array(M > 1 ? M - 1 : 0), te = 1; te < M; te++)
            G[te - 1] = arguments[te];
          oe("error", x, G);
        }
      }
      function oe(x, M, G) {
        {
          var te = Se.ReactDebugCurrentFrame, Te = te.getStackAddendum();
          Te !== "" && (M += "%s", G = G.concat([Te]));
          var Xe = G.map(function(Pe) {
            return String(Pe);
          });
          Xe.unshift("Warning: " + M), Function.prototype.apply.call(console[x], console, Xe);
        }
      }
      var k = {};
      function K(x, M) {
        {
          var G = x.constructor, te = G && (G.displayName || G.name) || "ReactClass", Te = te + "." + M;
          if (k[Te])
            return;
          I("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", M, te), k[Te] = !0;
        }
      }
      var fe = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(x) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(x, M, G) {
          K(x, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(x, M, G, te) {
          K(x, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(x, M, G, te) {
          K(x, "setState");
        }
      }, Be = Object.assign, Ye = {};
      Object.freeze(Ye);
      function lt(x, M, G) {
        this.props = x, this.context = M, this.refs = Ye, this.updater = G || fe;
      }
      lt.prototype.isReactComponent = {}, lt.prototype.setState = function(x, M) {
        if (typeof x != "object" && typeof x != "function" && x != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, x, M, "setState");
      }, lt.prototype.forceUpdate = function(x) {
        this.updater.enqueueForceUpdate(this, x, "forceUpdate");
      };
      {
        var et = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, dt = function(x, M) {
          Object.defineProperty(lt.prototype, x, {
            get: function() {
              he("%s(...) is deprecated in plain JavaScript React classes. %s", M[0], M[1]);
            }
          });
        };
        for (var ut in et)
          et.hasOwnProperty(ut) && dt(ut, et[ut]);
      }
      function Ft() {
      }
      Ft.prototype = lt.prototype;
      function jt(x, M, G) {
        this.props = x, this.context = M, this.refs = Ye, this.updater = G || fe;
      }
      var Cn = jt.prototype = new Ft();
      Cn.constructor = jt, Be(Cn, lt.prototype), Cn.isPureReactComponent = !0;
      function Rn() {
        var x = {
          current: null
        };
        return Object.seal(x), x;
      }
      var Pn = Array.isArray;
      function cn(x) {
        return Pn(x);
      }
      function Dn(x) {
        {
          var M = typeof Symbol == "function" && Symbol.toStringTag, G = M && x[Symbol.toStringTag] || x.constructor.name || "Object";
          return G;
        }
      }
      function Hn(x) {
        try {
          return Yt(x), !1;
        } catch {
          return !0;
        }
      }
      function Yt(x) {
        return "" + x;
      }
      function Tn(x) {
        if (Hn(x))
          return I("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Dn(x)), Yt(x);
      }
      function Jn(x, M, G) {
        var te = x.displayName;
        if (te)
          return te;
        var Te = M.displayName || M.name || "";
        return Te !== "" ? G + "(" + Te + ")" : G;
      }
      function An(x) {
        return x.displayName || "Context";
      }
      function Nt(x) {
        if (x == null)
          return null;
        if (typeof x.tag == "number" && I("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
          return x.displayName || x.name || null;
        if (typeof x == "string")
          return x;
        switch (x) {
          case S:
            return "Fragment";
          case E:
            return "Portal";
          case _:
            return "Profiler";
          case g:
            return "StrictMode";
          case U:
            return "Suspense";
          case V:
            return "SuspenseList";
        }
        if (typeof x == "object")
          switch (x.$$typeof) {
            case O:
              var M = x;
              return An(M) + ".Consumer";
            case L:
              var G = x;
              return An(G._context) + ".Provider";
            case A:
              return Jn(x, x.render, "ForwardRef");
            case j:
              var te = x.displayName || null;
              return te !== null ? te : Nt(x.type) || "Memo";
            case $: {
              var Te = x, Xe = Te._payload, Pe = Te._init;
              try {
                return Nt(Pe(Xe));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var vr = Object.prototype.hasOwnProperty, Or = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Bn, Dr, Vn;
      Vn = {};
      function or(x) {
        if (vr.call(x, "ref")) {
          var M = Object.getOwnPropertyDescriptor(x, "ref").get;
          if (M && M.isReactWarning)
            return !1;
        }
        return x.ref !== void 0;
      }
      function Zt(x) {
        if (vr.call(x, "key")) {
          var M = Object.getOwnPropertyDescriptor(x, "key").get;
          if (M && M.isReactWarning)
            return !1;
        }
        return x.key !== void 0;
      }
      function Er(x, M) {
        var G = function() {
          Bn || (Bn = !0, I("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        G.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: G,
          configurable: !0
        });
      }
      function lr(x, M) {
        var G = function() {
          Dr || (Dr = !0, I("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        G.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: G,
          configurable: !0
        });
      }
      function mr(x) {
        if (typeof x.ref == "string" && De.current && x.__self && De.current.stateNode !== x.__self) {
          var M = Nt(De.current.type);
          Vn[M] || (I('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M, x.ref), Vn[M] = !0);
        }
      }
      var Le = function(x, M, G, te, Te, Xe, Pe) {
        var yt = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: y,
          // Built-in properties that belong on the element
          type: x,
          key: M,
          ref: G,
          props: Pe,
          // Record the component responsible for creating this element.
          _owner: Xe
        };
        return yt._store = {}, Object.defineProperty(yt._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(yt, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: te
        }), Object.defineProperty(yt, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Te
        }), Object.freeze && (Object.freeze(yt.props), Object.freeze(yt)), yt;
      };
      function qe(x, M, G) {
        var te, Te = {}, Xe = null, Pe = null, yt = null, Mt = null;
        if (M != null) {
          or(M) && (Pe = M.ref, mr(M)), Zt(M) && (Tn(M.key), Xe = "" + M.key), yt = M.__self === void 0 ? null : M.__self, Mt = M.__source === void 0 ? null : M.__source;
          for (te in M)
            vr.call(M, te) && !Or.hasOwnProperty(te) && (Te[te] = M[te]);
        }
        var un = arguments.length - 2;
        if (un === 1)
          Te.children = G;
        else if (un > 1) {
          for (var vn = Array(un), mn = 0; mn < un; mn++)
            vn[mn] = arguments[mn + 2];
          Object.freeze && Object.freeze(vn), Te.children = vn;
        }
        if (x && x.defaultProps) {
          var yn = x.defaultProps;
          for (te in yn)
            Te[te] === void 0 && (Te[te] = yn[te]);
        }
        if (Xe || Pe) {
          var zn = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          Xe && Er(Te, zn), Pe && lr(Te, zn);
        }
        return Le(x, Xe, Pe, yt, Mt, De.current, Te);
      }
      function gt(x, M) {
        var G = Le(x.type, M, x.ref, x._self, x._source, x._owner, x.props);
        return G;
      }
      function wt(x, M, G) {
        if (x == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + x + ".");
        var te, Te = Be({}, x.props), Xe = x.key, Pe = x.ref, yt = x._self, Mt = x._source, un = x._owner;
        if (M != null) {
          or(M) && (Pe = M.ref, un = De.current), Zt(M) && (Tn(M.key), Xe = "" + M.key);
          var vn;
          x.type && x.type.defaultProps && (vn = x.type.defaultProps);
          for (te in M)
            vr.call(M, te) && !Or.hasOwnProperty(te) && (M[te] === void 0 && vn !== void 0 ? Te[te] = vn[te] : Te[te] = M[te]);
        }
        var mn = arguments.length - 2;
        if (mn === 1)
          Te.children = G;
        else if (mn > 1) {
          for (var yn = Array(mn), zn = 0; zn < mn; zn++)
            yn[zn] = arguments[zn + 2];
          Te.children = yn;
        }
        return Le(x.type, Xe, Pe, yt, Mt, un, Te);
      }
      function Et(x) {
        return typeof x == "object" && x !== null && x.$$typeof === y;
      }
      var wn = ".", fn = ":";
      function In(x) {
        var M = /[=:]/g, G = {
          "=": "=0",
          ":": "=2"
        }, te = x.replace(M, function(Te) {
          return G[Te];
        });
        return "$" + te;
      }
      var Wt = !1, Ln = /\/+/g;
      function Pt(x) {
        return x.replace(Ln, "$&/");
      }
      function Jt(x, M) {
        return typeof x == "object" && x !== null && x.key != null ? (Tn(x.key), In("" + x.key)) : M.toString(36);
      }
      function jr(x, M, G, te, Te) {
        var Xe = typeof x;
        (Xe === "undefined" || Xe === "boolean") && (x = null);
        var Pe = !1;
        if (x === null)
          Pe = !0;
        else
          switch (Xe) {
            case "string":
            case "number":
              Pe = !0;
              break;
            case "object":
              switch (x.$$typeof) {
                case y:
                case E:
                  Pe = !0;
              }
          }
        if (Pe) {
          var yt = x, Mt = Te(yt), un = te === "" ? wn + Jt(yt, 0) : te;
          if (cn(Mt)) {
            var vn = "";
            un != null && (vn = Pt(un) + "/"), jr(Mt, M, vn, "", function(Nd) {
              return Nd;
            });
          } else Mt != null && (Et(Mt) && (Mt.key && (!yt || yt.key !== Mt.key) && Tn(Mt.key), Mt = gt(
            Mt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            G + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Mt.key && (!yt || yt.key !== Mt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Pt("" + Mt.key) + "/"
            ) : "") + un
          )), M.push(Mt));
          return 1;
        }
        var mn, yn, zn = 0, Xt = te === "" ? wn : te + fn;
        if (cn(x))
          for (var jo = 0; jo < x.length; jo++)
            mn = x[jo], yn = Xt + Jt(mn, jo), zn += jr(mn, M, G, yn, Te);
        else {
          var yu = we(x);
          if (typeof yu == "function") {
            var _s = x;
            yu === _s.entries && (Wt || he("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Wt = !0);
            for (var Os = yu.call(_s), no, Ds = 0; !(no = Os.next()).done; )
              mn = no.value, yn = Xt + Jt(mn, Ds++), zn += jr(mn, M, G, yn, Te);
          } else if (Xe === "object") {
            var As = String(x);
            throw new Error("Objects are not valid as a React child (found: " + (As === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : As) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return zn;
      }
      function Pr(x, M, G) {
        if (x == null)
          return x;
        var te = [], Te = 0;
        return jr(x, te, "", "", function(Xe) {
          return M.call(G, Xe, Te++);
        }), te;
      }
      function dn(x) {
        var M = 0;
        return Pr(x, function() {
          M++;
        }), M;
      }
      function Yn(x, M, G) {
        Pr(x, function() {
          M.apply(this, arguments);
        }, G);
      }
      function ot(x) {
        return Pr(x, function(M) {
          return M;
        }) || [];
      }
      function At(x) {
        if (!Et(x))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return x;
      }
      function Nn(x) {
        var M = {
          $$typeof: O,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: x,
          _currentValue2: x,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        M.Provider = {
          $$typeof: L,
          _context: M
        };
        var G = !1, te = !1, Te = !1;
        {
          var Xe = {
            $$typeof: O,
            _context: M
          };
          Object.defineProperties(Xe, {
            Provider: {
              get: function() {
                return te || (te = !0, I("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), M.Provider;
              },
              set: function(Pe) {
                M.Provider = Pe;
              }
            },
            _currentValue: {
              get: function() {
                return M._currentValue;
              },
              set: function(Pe) {
                M._currentValue = Pe;
              }
            },
            _currentValue2: {
              get: function() {
                return M._currentValue2;
              },
              set: function(Pe) {
                M._currentValue2 = Pe;
              }
            },
            _threadCount: {
              get: function() {
                return M._threadCount;
              },
              set: function(Pe) {
                M._threadCount = Pe;
              }
            },
            Consumer: {
              get: function() {
                return G || (G = !0, I("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), M.Consumer;
              }
            },
            displayName: {
              get: function() {
                return M.displayName;
              },
              set: function(Pe) {
                Te || (he("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Pe), Te = !0);
              }
            }
          }), M.Consumer = Xe;
        }
        return M._currentRenderer = null, M._currentRenderer2 = null, M;
      }
      var br = -1, _e = 0, Ze = 1, je = 2;
      function Lt(x) {
        if (x._status === br) {
          var M = x._result, G = M();
          if (G.then(function(Xe) {
            if (x._status === _e || x._status === br) {
              var Pe = x;
              Pe._status = Ze, Pe._result = Xe;
            }
          }, function(Xe) {
            if (x._status === _e || x._status === br) {
              var Pe = x;
              Pe._status = je, Pe._result = Xe;
            }
          }), x._status === br) {
            var te = x;
            te._status = _e, te._result = G;
          }
        }
        if (x._status === Ze) {
          var Te = x._result;
          return Te === void 0 && I(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, Te), "default" in Te || I(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, Te), Te.default;
        } else
          throw x._result;
      }
      function tn(x) {
        var M = {
          // We use these fields to store the result.
          _status: br,
          _result: x
        }, G = {
          $$typeof: $,
          _payload: M,
          _init: Lt
        };
        {
          var te, Te;
          Object.defineProperties(G, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return te;
              },
              set: function(Xe) {
                I("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), te = Xe, Object.defineProperty(G, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return Te;
              },
              set: function(Xe) {
                I("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Te = Xe, Object.defineProperty(G, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return G;
      }
      function yr(x) {
        x != null && x.$$typeof === j ? I("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof x != "function" ? I("forwardRef requires a render function but was given %s.", x === null ? "null" : typeof x) : x.length !== 0 && x.length !== 2 && I("forwardRef render functions accept exactly two parameters: props and ref. %s", x.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), x != null && (x.defaultProps != null || x.propTypes != null) && I("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var M = {
          $$typeof: A,
          render: x
        };
        {
          var G;
          Object.defineProperty(M, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return G;
            },
            set: function(te) {
              G = te, !x.name && !x.displayName && (x.displayName = te);
            }
          });
        }
        return M;
      }
      var N;
      N = Symbol.for("react.module.reference");
      function le(x) {
        return !!(typeof x == "string" || typeof x == "function" || x === S || x === _ || me || x === g || x === U || x === V || ne || x === se || B || ee || pe || typeof x == "object" && x !== null && (x.$$typeof === $ || x.$$typeof === j || x.$$typeof === L || x.$$typeof === O || x.$$typeof === A || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        x.$$typeof === N || x.getModuleId !== void 0));
      }
      function Re(x, M) {
        le(x) || I("memo: The first argument must be a component. Instead received: %s", x === null ? "null" : typeof x);
        var G = {
          $$typeof: j,
          type: x,
          compare: M === void 0 ? null : M
        };
        {
          var te;
          Object.defineProperty(G, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return te;
            },
            set: function(Te) {
              te = Te, !x.name && !x.displayName && (x.displayName = Te);
            }
          });
        }
        return G;
      }
      function ye() {
        var x = ge.current;
        return x === null && I(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), x;
      }
      function Rt(x) {
        var M = ye();
        if (x._context !== void 0) {
          var G = x._context;
          G.Consumer === x ? I("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : G.Provider === x && I("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return M.useContext(x);
      }
      function Ht(x) {
        var M = ye();
        return M.useState(x);
      }
      function _t(x, M, G) {
        var te = ye();
        return te.useReducer(x, M, G);
      }
      function it(x) {
        var M = ye();
        return M.useRef(x);
      }
      function Wn(x, M) {
        var G = ye();
        return G.useEffect(x, M);
      }
      function pn(x, M) {
        var G = ye();
        return G.useInsertionEffect(x, M);
      }
      function hn(x, M) {
        var G = ye();
        return G.useLayoutEffect(x, M);
      }
      function xr(x, M) {
        var G = ye();
        return G.useCallback(x, M);
      }
      function zt(x, M) {
        var G = ye();
        return G.useMemo(x, M);
      }
      function Vt(x, M, G) {
        var te = ye();
        return te.useImperativeHandle(x, M, G);
      }
      function Ar(x, M) {
        {
          var G = ye();
          return G.useDebugValue(x, M);
        }
      }
      function hi() {
        var x = ye();
        return x.useTransition();
      }
      function Ya(x) {
        var M = ye();
        return M.useDeferredValue(x);
      }
      function Tt() {
        var x = ye();
        return x.useId();
      }
      function El(x, M, G) {
        var te = ye();
        return te.useSyncExternalStore(x, M, G);
      }
      var Xi = 0, Lo, ha, gs, na, Ss, ws, Es;
      function bl() {
      }
      bl.__reactDisabledLog = !0;
      function su() {
        {
          if (Xi === 0) {
            Lo = console.log, ha = console.info, gs = console.warn, na = console.error, Ss = console.group, ws = console.groupCollapsed, Es = console.groupEnd;
            var x = {
              configurable: !0,
              enumerable: !0,
              value: bl,
              writable: !0
            };
            Object.defineProperties(console, {
              info: x,
              log: x,
              warn: x,
              error: x,
              group: x,
              groupCollapsed: x,
              groupEnd: x
            });
          }
          Xi++;
        }
      }
      function Zi() {
        {
          if (Xi--, Xi === 0) {
            var x = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: Be({}, x, {
                value: Lo
              }),
              info: Be({}, x, {
                value: ha
              }),
              warn: Be({}, x, {
                value: gs
              }),
              error: Be({}, x, {
                value: na
              }),
              group: Be({}, x, {
                value: Ss
              }),
              groupCollapsed: Be({}, x, {
                value: ws
              }),
              groupEnd: Be({}, x, {
                value: Es
              })
            });
          }
          Xi < 0 && I("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ki = Se.ReactCurrentDispatcher, Wa;
      function No(x, M, G) {
        {
          if (Wa === void 0)
            try {
              throw Error();
            } catch (Te) {
              var te = Te.stack.trim().match(/\n( *(at )?)/);
              Wa = te && te[1] || "";
            }
          return `
` + Wa + x;
        }
      }
      var _i = !1, xl;
      {
        var Cl = typeof WeakMap == "function" ? WeakMap : Map;
        xl = new Cl();
      }
      function Mo(x, M) {
        if (!x || _i)
          return "";
        {
          var G = xl.get(x);
          if (G !== void 0)
            return G;
        }
        var te;
        _i = !0;
        var Te = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Xe;
        Xe = ki.current, ki.current = null, su();
        try {
          if (M) {
            var Pe = function() {
              throw Error();
            };
            if (Object.defineProperty(Pe.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Pe, []);
              } catch (Xt) {
                te = Xt;
              }
              Reflect.construct(x, [], Pe);
            } else {
              try {
                Pe.call();
              } catch (Xt) {
                te = Xt;
              }
              x.call(Pe.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Xt) {
              te = Xt;
            }
            x();
          }
        } catch (Xt) {
          if (Xt && te && typeof Xt.stack == "string") {
            for (var yt = Xt.stack.split(`
`), Mt = te.stack.split(`
`), un = yt.length - 1, vn = Mt.length - 1; un >= 1 && vn >= 0 && yt[un] !== Mt[vn]; )
              vn--;
            for (; un >= 1 && vn >= 0; un--, vn--)
              if (yt[un] !== Mt[vn]) {
                if (un !== 1 || vn !== 1)
                  do
                    if (un--, vn--, vn < 0 || yt[un] !== Mt[vn]) {
                      var mn = `
` + yt[un].replace(" at new ", " at ");
                      return x.displayName && mn.includes("<anonymous>") && (mn = mn.replace("<anonymous>", x.displayName)), typeof x == "function" && xl.set(x, mn), mn;
                    }
                  while (un >= 1 && vn >= 0);
                break;
              }
          }
        } finally {
          _i = !1, ki.current = Xe, Zi(), Error.prepareStackTrace = Te;
        }
        var yn = x ? x.displayName || x.name : "", zn = yn ? No(yn) : "";
        return typeof x == "function" && xl.set(x, zn), zn;
      }
      function bs(x, M, G) {
        return Mo(x, !1);
      }
      function xs(x) {
        var M = x.prototype;
        return !!(M && M.isReactComponent);
      }
      function It(x, M, G) {
        if (x == null)
          return "";
        if (typeof x == "function")
          return Mo(x, xs(x));
        if (typeof x == "string")
          return No(x);
        switch (x) {
          case U:
            return No("Suspense");
          case V:
            return No("SuspenseList");
        }
        if (typeof x == "object")
          switch (x.$$typeof) {
            case A:
              return bs(x.render);
            case j:
              return It(x.type, M, G);
            case $: {
              var te = x, Te = te._payload, Xe = te._init;
              try {
                return It(Xe(Te), M, G);
              } catch {
              }
            }
          }
        return "";
      }
      var Cs = {}, cu = Se.ReactDebugCurrentFrame;
      function zo(x) {
        if (x) {
          var M = x._owner, G = It(x.type, x._source, M ? M.type : null);
          cu.setExtraStackFrame(G);
        } else
          cu.setExtraStackFrame(null);
      }
      function Rs(x, M, G, te, Te) {
        {
          var Xe = Function.call.bind(vr);
          for (var Pe in x)
            if (Xe(x, Pe)) {
              var yt = void 0;
              try {
                if (typeof x[Pe] != "function") {
                  var Mt = Error((te || "React class") + ": " + G + " type `" + Pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[Pe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Mt.name = "Invariant Violation", Mt;
                }
                yt = x[Pe](M, Pe, te, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (un) {
                yt = un;
              }
              yt && !(yt instanceof Error) && (zo(Te), I("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", te || "React class", G, Pe, typeof yt), zo(null)), yt instanceof Error && !(yt.message in Cs) && (Cs[yt.message] = !0, zo(Te), I("Failed %s type: %s", G, yt.message), zo(null));
            }
        }
      }
      function Kt(x) {
        if (x) {
          var M = x._owner, G = It(x.type, x._source, M ? M.type : null);
          Dt(G);
        } else
          Dt(null);
      }
      var fu;
      fu = !1;
      function Rl() {
        if (De.current) {
          var x = Nt(De.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
      function bt(x) {
        if (x !== void 0) {
          var M = x.fileName.replace(/^.*[\\\/]/, ""), G = x.lineNumber;
          return `

Check your code at ` + M + ":" + G + ".";
        }
        return "";
      }
      function vi(x) {
        return x != null ? bt(x.__source) : "";
      }
      var qn = {};
      function va(x) {
        var M = Rl();
        if (!M) {
          var G = typeof x == "string" ? x : x.displayName || x.name;
          G && (M = `

Check the top-level render call using <` + G + ">.");
        }
        return M;
      }
      function qa(x, M) {
        if (!(!x._store || x._store.validated || x.key != null)) {
          x._store.validated = !0;
          var G = va(M);
          if (!qn[G]) {
            qn[G] = !0;
            var te = "";
            x && x._owner && x._owner !== De.current && (te = " It was passed a child from " + Nt(x._owner.type) + "."), Kt(x), I('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, te), Kt(null);
          }
        }
      }
      function Uo(x, M) {
        if (typeof x == "object") {
          if (cn(x))
            for (var G = 0; G < x.length; G++) {
              var te = x[G];
              Et(te) && qa(te, M);
            }
          else if (Et(x))
            x._store && (x._store.validated = !0);
          else if (x) {
            var Te = we(x);
            if (typeof Te == "function" && Te !== x.entries)
              for (var Xe = Te.call(x), Pe; !(Pe = Xe.next()).done; )
                Et(Pe.value) && qa(Pe.value, M);
          }
        }
      }
      function Mn(x) {
        {
          var M = x.type;
          if (M == null || typeof M == "string")
            return;
          var G;
          if (typeof M == "function")
            G = M.propTypes;
          else if (typeof M == "object" && (M.$$typeof === A || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          M.$$typeof === j))
            G = M.propTypes;
          else
            return;
          if (G) {
            var te = Nt(M);
            Rs(G, x.props, "prop", te, x);
          } else if (M.PropTypes !== void 0 && !fu) {
            fu = !0;
            var Te = Nt(M);
            I("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Te || "Unknown");
          }
          typeof M.getDefaultProps == "function" && !M.getDefaultProps.isReactClassApproved && I("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Qn(x) {
        {
          for (var M = Object.keys(x.props), G = 0; G < M.length; G++) {
            var te = M[G];
            if (te !== "children" && te !== "key") {
              Kt(x), I("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", te), Kt(null);
              break;
            }
          }
          x.ref !== null && (Kt(x), I("Invalid attribute `ref` supplied to `React.Fragment`."), Kt(null));
        }
      }
      function Ts(x, M, G) {
        var te = le(x);
        if (!te) {
          var Te = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (Te += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Xe = vi(M);
          Xe ? Te += Xe : Te += Rl();
          var Pe;
          x === null ? Pe = "null" : cn(x) ? Pe = "array" : x !== void 0 && x.$$typeof === y ? (Pe = "<" + (Nt(x.type) || "Unknown") + " />", Te = " Did you accidentally export a JSX literal instead of a component?") : Pe = typeof x, I("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Pe, Te);
        }
        var yt = qe.apply(this, arguments);
        if (yt == null)
          return yt;
        if (te)
          for (var Mt = 2; Mt < arguments.length; Mt++)
            Uo(arguments[Mt], x);
        return x === S ? Qn(yt) : Mn(yt), yt;
      }
      var Hr = !1;
      function ma(x) {
        var M = Ts.bind(null, x);
        return M.type = x, Hr || (Hr = !0, he("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(M, "type", {
          enumerable: !1,
          get: function() {
            return he("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: x
            }), x;
          }
        }), M;
      }
      function mi(x, M, G) {
        for (var te = wt.apply(this, arguments), Te = 2; Te < arguments.length; Te++)
          Uo(arguments[Te], te.type);
        return Mn(te), te;
      }
      function du(x, M) {
        var G = Ie.transition;
        Ie.transition = {};
        var te = Ie.transition;
        Ie.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          x();
        } finally {
          if (Ie.transition = G, G === null && te._updatedFibers) {
            var Te = te._updatedFibers.size;
            Te > 10 && he("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), te._updatedFibers.clear();
          }
        }
      }
      var Tl = !1, kl = null;
      function Fo(x) {
        if (kl === null)
          try {
            var M = ("require" + Math.random()).slice(0, 7), G = c && c[M];
            kl = G.call(c, "timers").setImmediate;
          } catch {
            kl = function(Te) {
              Tl === !1 && (Tl = !0, typeof MessageChannel > "u" && I("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Xe = new MessageChannel();
              Xe.port1.onmessage = Te, Xe.port2.postMessage(void 0);
            };
          }
        return kl(x);
      }
      var Qa = 0, Ji = !1;
      function pu(x) {
        {
          var M = Qa;
          Qa++, be.current === null && (be.current = []);
          var G = be.isBatchingLegacy, te;
          try {
            if (be.isBatchingLegacy = !0, te = x(), !G && be.didScheduleLegacyUpdate) {
              var Te = be.current;
              Te !== null && (be.didScheduleLegacyUpdate = !1, to(Te));
            }
          } catch (yn) {
            throw eo(M), yn;
          } finally {
            be.isBatchingLegacy = G;
          }
          if (te !== null && typeof te == "object" && typeof te.then == "function") {
            var Xe = te, Pe = !1, yt = {
              then: function(yn, zn) {
                Pe = !0, Xe.then(function(Xt) {
                  eo(M), Qa === 0 ? hu(Xt, yn, zn) : yn(Xt);
                }, function(Xt) {
                  eo(M), zn(Xt);
                });
              }
            };
            return !Ji && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Pe || (Ji = !0, I("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), yt;
          } else {
            var Mt = te;
            if (eo(M), Qa === 0) {
              var un = be.current;
              un !== null && (to(un), be.current = null);
              var vn = {
                then: function(yn, zn) {
                  be.current === null ? (be.current = [], hu(Mt, yn, zn)) : yn(Mt);
                }
              };
              return vn;
            } else {
              var mn = {
                then: function(yn, zn) {
                  yn(Mt);
                }
              };
              return mn;
            }
          }
        }
      }
      function eo(x) {
        x !== Qa - 1 && I("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Qa = x;
      }
      function hu(x, M, G) {
        {
          var te = be.current;
          if (te !== null)
            try {
              to(te), Fo(function() {
                te.length === 0 ? (be.current = null, M(x)) : hu(x, M, G);
              });
            } catch (Te) {
              G(Te);
            }
          else
            M(x);
        }
      }
      var Oi = !1;
      function to(x) {
        if (!Oi) {
          Oi = !0;
          var M = 0;
          try {
            for (; M < x.length; M++) {
              var G = x[M];
              do
                G = G(!0);
              while (G !== null);
            }
            x.length = 0;
          } catch (te) {
            throw x = x.slice(M + 1), te;
          } finally {
            Oi = !1;
          }
        }
      }
      var vu = Ts, ks = mi, yi = ma, mu = {
        map: Pr,
        forEach: Yn,
        count: dn,
        toArray: ot,
        only: At
      };
      u.Children = mu, u.Component = lt, u.Fragment = S, u.Profiler = _, u.PureComponent = jt, u.StrictMode = g, u.Suspense = U, u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Se, u.cloneElement = ks, u.createContext = Nn, u.createElement = vu, u.createFactory = yi, u.createRef = Rn, u.forwardRef = yr, u.isValidElement = Et, u.lazy = tn, u.memo = Re, u.startTransition = du, u.unstable_act = pu, u.useCallback = xr, u.useContext = Rt, u.useDebugValue = Ar, u.useDeferredValue = Ya, u.useEffect = Wn, u.useId = Tt, u.useImperativeHandle = Vt, u.useInsertionEffect = pn, u.useLayoutEffect = hn, u.useMemo = zt, u.useReducer = _t, u.useRef = it, u.useState = Ht, u.useSyncExternalStore = El, u.useTransition = hi, u.version = p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(zh, zh.exports)), zh.exports;
}
var HA = {};
HA.NODE_ENV === "production" ? Qw.exports = jA() : Qw.exports = PA();
var Ne = Qw.exports;
const vs = /* @__PURE__ */ lE(Ne);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uC;
function $A() {
  if (uC) return Dh;
  uC = 1;
  var c = Ne, u = Symbol.for("react.element"), f = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, y = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(g, _, L) {
    var O, A = {}, U = null, V = null;
    L !== void 0 && (U = "" + L), _.key !== void 0 && (U = "" + _.key), _.ref !== void 0 && (V = _.ref);
    for (O in _) p.call(_, O) && !E.hasOwnProperty(O) && (A[O] = _[O]);
    if (g && g.defaultProps) for (O in _ = g.defaultProps, _) A[O] === void 0 && (A[O] = _[O]);
    return { $$typeof: u, type: g, key: U, ref: V, props: A, _owner: y.current };
  }
  return Dh.Fragment = f, Dh.jsx = S, Dh.jsxs = S, Dh;
}
var Ah = {}, sC;
function BA() {
  if (sC) return Ah;
  sC = 1;
  var c = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return c.NODE_ENV !== "production" && function() {
    var u = Ne, f = Symbol.for("react.element"), p = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), _ = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), $ = Symbol.iterator, se = "@@iterator";
    function Ce(N) {
      if (N === null || typeof N != "object")
        return null;
      var le = $ && N[$] || N[se];
      return typeof le == "function" ? le : null;
    }
    var Ae = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function we(N) {
      {
        for (var le = arguments.length, Re = new Array(le > 1 ? le - 1 : 0), ye = 1; ye < le; ye++)
          Re[ye - 1] = arguments[ye];
        ge("error", N, Re);
      }
    }
    function ge(N, le, Re) {
      {
        var ye = Ae.ReactDebugCurrentFrame, Rt = ye.getStackAddendum();
        Rt !== "" && (le += "%s", Re = Re.concat([Rt]));
        var Ht = Re.map(function(_t) {
          return String(_t);
        });
        Ht.unshift("Warning: " + le), Function.prototype.apply.call(console[N], console, Ht);
      }
    }
    var Ie = !1, be = !1, De = !1, We = !1, Ut = !1, Dt;
    Dt = Symbol.for("react.module.reference");
    function B(N) {
      return !!(typeof N == "string" || typeof N == "function" || N === y || N === S || Ut || N === E || N === O || N === A || We || N === j || Ie || be || De || typeof N == "object" && N !== null && (N.$$typeof === V || N.$$typeof === U || N.$$typeof === g || N.$$typeof === _ || N.$$typeof === L || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      N.$$typeof === Dt || N.getModuleId !== void 0));
    }
    function ee(N, le, Re) {
      var ye = N.displayName;
      if (ye)
        return ye;
      var Rt = le.displayName || le.name || "";
      return Rt !== "" ? Re + "(" + Rt + ")" : Re;
    }
    function pe(N) {
      return N.displayName || "Context";
    }
    function ne(N) {
      if (N == null)
        return null;
      if (typeof N.tag == "number" && we("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof N == "function")
        return N.displayName || N.name || null;
      if (typeof N == "string")
        return N;
      switch (N) {
        case y:
          return "Fragment";
        case p:
          return "Portal";
        case S:
          return "Profiler";
        case E:
          return "StrictMode";
        case O:
          return "Suspense";
        case A:
          return "SuspenseList";
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case _:
            var le = N;
            return pe(le) + ".Consumer";
          case g:
            var Re = N;
            return pe(Re._context) + ".Provider";
          case L:
            return ee(N, N.render, "ForwardRef");
          case U:
            var ye = N.displayName || null;
            return ye !== null ? ye : ne(N.type) || "Memo";
          case V: {
            var Rt = N, Ht = Rt._payload, _t = Rt._init;
            try {
              return ne(_t(Ht));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var me = Object.assign, Se = 0, he, I, oe, k, K, fe, Be;
    function Ye() {
    }
    Ye.__reactDisabledLog = !0;
    function lt() {
      {
        if (Se === 0) {
          he = console.log, I = console.info, oe = console.warn, k = console.error, K = console.group, fe = console.groupCollapsed, Be = console.groupEnd;
          var N = {
            configurable: !0,
            enumerable: !0,
            value: Ye,
            writable: !0
          };
          Object.defineProperties(console, {
            info: N,
            log: N,
            warn: N,
            error: N,
            group: N,
            groupCollapsed: N,
            groupEnd: N
          });
        }
        Se++;
      }
    }
    function et() {
      {
        if (Se--, Se === 0) {
          var N = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: me({}, N, {
              value: he
            }),
            info: me({}, N, {
              value: I
            }),
            warn: me({}, N, {
              value: oe
            }),
            error: me({}, N, {
              value: k
            }),
            group: me({}, N, {
              value: K
            }),
            groupCollapsed: me({}, N, {
              value: fe
            }),
            groupEnd: me({}, N, {
              value: Be
            })
          });
        }
        Se < 0 && we("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var dt = Ae.ReactCurrentDispatcher, ut;
    function Ft(N, le, Re) {
      {
        if (ut === void 0)
          try {
            throw Error();
          } catch (Rt) {
            var ye = Rt.stack.trim().match(/\n( *(at )?)/);
            ut = ye && ye[1] || "";
          }
        return `
` + ut + N;
      }
    }
    var jt = !1, Cn;
    {
      var Rn = typeof WeakMap == "function" ? WeakMap : Map;
      Cn = new Rn();
    }
    function Pn(N, le) {
      if (!N || jt)
        return "";
      {
        var Re = Cn.get(N);
        if (Re !== void 0)
          return Re;
      }
      var ye;
      jt = !0;
      var Rt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ht;
      Ht = dt.current, dt.current = null, lt();
      try {
        if (le) {
          var _t = function() {
            throw Error();
          };
          if (Object.defineProperty(_t.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_t, []);
            } catch (Ar) {
              ye = Ar;
            }
            Reflect.construct(N, [], _t);
          } else {
            try {
              _t.call();
            } catch (Ar) {
              ye = Ar;
            }
            N.call(_t.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ar) {
            ye = Ar;
          }
          N();
        }
      } catch (Ar) {
        if (Ar && ye && typeof Ar.stack == "string") {
          for (var it = Ar.stack.split(`
`), Wn = ye.stack.split(`
`), pn = it.length - 1, hn = Wn.length - 1; pn >= 1 && hn >= 0 && it[pn] !== Wn[hn]; )
            hn--;
          for (; pn >= 1 && hn >= 0; pn--, hn--)
            if (it[pn] !== Wn[hn]) {
              if (pn !== 1 || hn !== 1)
                do
                  if (pn--, hn--, hn < 0 || it[pn] !== Wn[hn]) {
                    var xr = `
` + it[pn].replace(" at new ", " at ");
                    return N.displayName && xr.includes("<anonymous>") && (xr = xr.replace("<anonymous>", N.displayName)), typeof N == "function" && Cn.set(N, xr), xr;
                  }
                while (pn >= 1 && hn >= 0);
              break;
            }
        }
      } finally {
        jt = !1, dt.current = Ht, et(), Error.prepareStackTrace = Rt;
      }
      var zt = N ? N.displayName || N.name : "", Vt = zt ? Ft(zt) : "";
      return typeof N == "function" && Cn.set(N, Vt), Vt;
    }
    function cn(N, le, Re) {
      return Pn(N, !1);
    }
    function Dn(N) {
      var le = N.prototype;
      return !!(le && le.isReactComponent);
    }
    function Hn(N, le, Re) {
      if (N == null)
        return "";
      if (typeof N == "function")
        return Pn(N, Dn(N));
      if (typeof N == "string")
        return Ft(N);
      switch (N) {
        case O:
          return Ft("Suspense");
        case A:
          return Ft("SuspenseList");
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case L:
            return cn(N.render);
          case U:
            return Hn(N.type, le, Re);
          case V: {
            var ye = N, Rt = ye._payload, Ht = ye._init;
            try {
              return Hn(Ht(Rt), le, Re);
            } catch {
            }
          }
        }
      return "";
    }
    var Yt = Object.prototype.hasOwnProperty, Tn = {}, Jn = Ae.ReactDebugCurrentFrame;
    function An(N) {
      if (N) {
        var le = N._owner, Re = Hn(N.type, N._source, le ? le.type : null);
        Jn.setExtraStackFrame(Re);
      } else
        Jn.setExtraStackFrame(null);
    }
    function Nt(N, le, Re, ye, Rt) {
      {
        var Ht = Function.call.bind(Yt);
        for (var _t in N)
          if (Ht(N, _t)) {
            var it = void 0;
            try {
              if (typeof N[_t] != "function") {
                var Wn = Error((ye || "React class") + ": " + Re + " type `" + _t + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof N[_t] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Wn.name = "Invariant Violation", Wn;
              }
              it = N[_t](le, _t, ye, Re, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (pn) {
              it = pn;
            }
            it && !(it instanceof Error) && (An(Rt), we("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ye || "React class", Re, _t, typeof it), An(null)), it instanceof Error && !(it.message in Tn) && (Tn[it.message] = !0, An(Rt), we("Failed %s type: %s", Re, it.message), An(null));
          }
      }
    }
    var vr = Array.isArray;
    function Or(N) {
      return vr(N);
    }
    function Bn(N) {
      {
        var le = typeof Symbol == "function" && Symbol.toStringTag, Re = le && N[Symbol.toStringTag] || N.constructor.name || "Object";
        return Re;
      }
    }
    function Dr(N) {
      try {
        return Vn(N), !1;
      } catch {
        return !0;
      }
    }
    function Vn(N) {
      return "" + N;
    }
    function or(N) {
      if (Dr(N))
        return we("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Bn(N)), Vn(N);
    }
    var Zt = Ae.ReactCurrentOwner, Er = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, lr, mr, Le;
    Le = {};
    function qe(N) {
      if (Yt.call(N, "ref")) {
        var le = Object.getOwnPropertyDescriptor(N, "ref").get;
        if (le && le.isReactWarning)
          return !1;
      }
      return N.ref !== void 0;
    }
    function gt(N) {
      if (Yt.call(N, "key")) {
        var le = Object.getOwnPropertyDescriptor(N, "key").get;
        if (le && le.isReactWarning)
          return !1;
      }
      return N.key !== void 0;
    }
    function wt(N, le) {
      if (typeof N.ref == "string" && Zt.current && le && Zt.current.stateNode !== le) {
        var Re = ne(Zt.current.type);
        Le[Re] || (we('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ne(Zt.current.type), N.ref), Le[Re] = !0);
      }
    }
    function Et(N, le) {
      {
        var Re = function() {
          lr || (lr = !0, we("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", le));
        };
        Re.isReactWarning = !0, Object.defineProperty(N, "key", {
          get: Re,
          configurable: !0
        });
      }
    }
    function wn(N, le) {
      {
        var Re = function() {
          mr || (mr = !0, we("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", le));
        };
        Re.isReactWarning = !0, Object.defineProperty(N, "ref", {
          get: Re,
          configurable: !0
        });
      }
    }
    var fn = function(N, le, Re, ye, Rt, Ht, _t) {
      var it = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: N,
        key: le,
        ref: Re,
        props: _t,
        // Record the component responsible for creating this element.
        _owner: Ht
      };
      return it._store = {}, Object.defineProperty(it._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(it, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ye
      }), Object.defineProperty(it, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Rt
      }), Object.freeze && (Object.freeze(it.props), Object.freeze(it)), it;
    };
    function In(N, le, Re, ye, Rt) {
      {
        var Ht, _t = {}, it = null, Wn = null;
        Re !== void 0 && (or(Re), it = "" + Re), gt(le) && (or(le.key), it = "" + le.key), qe(le) && (Wn = le.ref, wt(le, Rt));
        for (Ht in le)
          Yt.call(le, Ht) && !Er.hasOwnProperty(Ht) && (_t[Ht] = le[Ht]);
        if (N && N.defaultProps) {
          var pn = N.defaultProps;
          for (Ht in pn)
            _t[Ht] === void 0 && (_t[Ht] = pn[Ht]);
        }
        if (it || Wn) {
          var hn = typeof N == "function" ? N.displayName || N.name || "Unknown" : N;
          it && Et(_t, hn), Wn && wn(_t, hn);
        }
        return fn(N, it, Wn, Rt, ye, Zt.current, _t);
      }
    }
    var Wt = Ae.ReactCurrentOwner, Ln = Ae.ReactDebugCurrentFrame;
    function Pt(N) {
      if (N) {
        var le = N._owner, Re = Hn(N.type, N._source, le ? le.type : null);
        Ln.setExtraStackFrame(Re);
      } else
        Ln.setExtraStackFrame(null);
    }
    var Jt;
    Jt = !1;
    function jr(N) {
      return typeof N == "object" && N !== null && N.$$typeof === f;
    }
    function Pr() {
      {
        if (Wt.current) {
          var N = ne(Wt.current.type);
          if (N)
            return `

Check the render method of \`` + N + "`.";
        }
        return "";
      }
    }
    function dn(N) {
      return "";
    }
    var Yn = {};
    function ot(N) {
      {
        var le = Pr();
        if (!le) {
          var Re = typeof N == "string" ? N : N.displayName || N.name;
          Re && (le = `

Check the top-level render call using <` + Re + ">.");
        }
        return le;
      }
    }
    function At(N, le) {
      {
        if (!N._store || N._store.validated || N.key != null)
          return;
        N._store.validated = !0;
        var Re = ot(le);
        if (Yn[Re])
          return;
        Yn[Re] = !0;
        var ye = "";
        N && N._owner && N._owner !== Wt.current && (ye = " It was passed a child from " + ne(N._owner.type) + "."), Pt(N), we('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Re, ye), Pt(null);
      }
    }
    function Nn(N, le) {
      {
        if (typeof N != "object")
          return;
        if (Or(N))
          for (var Re = 0; Re < N.length; Re++) {
            var ye = N[Re];
            jr(ye) && At(ye, le);
          }
        else if (jr(N))
          N._store && (N._store.validated = !0);
        else if (N) {
          var Rt = Ce(N);
          if (typeof Rt == "function" && Rt !== N.entries)
            for (var Ht = Rt.call(N), _t; !(_t = Ht.next()).done; )
              jr(_t.value) && At(_t.value, le);
        }
      }
    }
    function br(N) {
      {
        var le = N.type;
        if (le == null || typeof le == "string")
          return;
        var Re;
        if (typeof le == "function")
          Re = le.propTypes;
        else if (typeof le == "object" && (le.$$typeof === L || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        le.$$typeof === U))
          Re = le.propTypes;
        else
          return;
        if (Re) {
          var ye = ne(le);
          Nt(Re, N.props, "prop", ye, N);
        } else if (le.PropTypes !== void 0 && !Jt) {
          Jt = !0;
          var Rt = ne(le);
          we("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Rt || "Unknown");
        }
        typeof le.getDefaultProps == "function" && !le.getDefaultProps.isReactClassApproved && we("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _e(N) {
      {
        for (var le = Object.keys(N.props), Re = 0; Re < le.length; Re++) {
          var ye = le[Re];
          if (ye !== "children" && ye !== "key") {
            Pt(N), we("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ye), Pt(null);
            break;
          }
        }
        N.ref !== null && (Pt(N), we("Invalid attribute `ref` supplied to `React.Fragment`."), Pt(null));
      }
    }
    function Ze(N, le, Re, ye, Rt, Ht) {
      {
        var _t = B(N);
        if (!_t) {
          var it = "";
          (N === void 0 || typeof N == "object" && N !== null && Object.keys(N).length === 0) && (it += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Wn = dn();
          Wn ? it += Wn : it += Pr();
          var pn;
          N === null ? pn = "null" : Or(N) ? pn = "array" : N !== void 0 && N.$$typeof === f ? (pn = "<" + (ne(N.type) || "Unknown") + " />", it = " Did you accidentally export a JSX literal instead of a component?") : pn = typeof N, we("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", pn, it);
        }
        var hn = In(N, le, Re, Rt, Ht);
        if (hn == null)
          return hn;
        if (_t) {
          var xr = le.children;
          if (xr !== void 0)
            if (ye)
              if (Or(xr)) {
                for (var zt = 0; zt < xr.length; zt++)
                  Nn(xr[zt], N);
                Object.freeze && Object.freeze(xr);
              } else
                we("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Nn(xr, N);
        }
        return N === y ? _e(hn) : br(hn), hn;
      }
    }
    function je(N, le, Re) {
      return Ze(N, le, Re, !0);
    }
    function Lt(N, le, Re) {
      return Ze(N, le, Re, !1);
    }
    var tn = Lt, yr = je;
    Ah.Fragment = y, Ah.jsx = tn, Ah.jsxs = yr;
  }(), Ah;
}
var VA = {};
VA.NODE_ENV === "production" ? qw.exports = $A() : qw.exports = BA();
var mt = qw.exports, Uh = {}, Gw = { exports: {} }, di = {}, Hy = { exports: {} }, Fw = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cC;
function IA() {
  return cC || (cC = 1, function(c) {
    function u(I, oe) {
      var k = I.length;
      I.push(oe);
      e: for (; 0 < k; ) {
        var K = k - 1 >>> 1, fe = I[K];
        if (0 < y(fe, oe)) I[K] = oe, I[k] = fe, k = K;
        else break e;
      }
    }
    function f(I) {
      return I.length === 0 ? null : I[0];
    }
    function p(I) {
      if (I.length === 0) return null;
      var oe = I[0], k = I.pop();
      if (k !== oe) {
        I[0] = k;
        e: for (var K = 0, fe = I.length, Be = fe >>> 1; K < Be; ) {
          var Ye = 2 * (K + 1) - 1, lt = I[Ye], et = Ye + 1, dt = I[et];
          if (0 > y(lt, k)) et < fe && 0 > y(dt, lt) ? (I[K] = dt, I[et] = k, K = et) : (I[K] = lt, I[Ye] = k, K = Ye);
          else if (et < fe && 0 > y(dt, k)) I[K] = dt, I[et] = k, K = et;
          else break e;
        }
      }
      return oe;
    }
    function y(I, oe) {
      var k = I.sortIndex - oe.sortIndex;
      return k !== 0 ? k : I.id - oe.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var E = performance;
      c.unstable_now = function() {
        return E.now();
      };
    } else {
      var S = Date, g = S.now();
      c.unstable_now = function() {
        return S.now() - g;
      };
    }
    var _ = [], L = [], O = 1, A = null, U = 3, V = !1, j = !1, $ = !1, se = typeof setTimeout == "function" ? setTimeout : null, Ce = typeof clearTimeout == "function" ? clearTimeout : null, Ae = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function we(I) {
      for (var oe = f(L); oe !== null; ) {
        if (oe.callback === null) p(L);
        else if (oe.startTime <= I) p(L), oe.sortIndex = oe.expirationTime, u(_, oe);
        else break;
        oe = f(L);
      }
    }
    function ge(I) {
      if ($ = !1, we(I), !j) if (f(_) !== null) j = !0, Se(Ie);
      else {
        var oe = f(L);
        oe !== null && he(ge, oe.startTime - I);
      }
    }
    function Ie(I, oe) {
      j = !1, $ && ($ = !1, Ce(We), We = -1), V = !0;
      var k = U;
      try {
        for (we(oe), A = f(_); A !== null && (!(A.expirationTime > oe) || I && !B()); ) {
          var K = A.callback;
          if (typeof K == "function") {
            A.callback = null, U = A.priorityLevel;
            var fe = K(A.expirationTime <= oe);
            oe = c.unstable_now(), typeof fe == "function" ? A.callback = fe : A === f(_) && p(_), we(oe);
          } else p(_);
          A = f(_);
        }
        if (A !== null) var Be = !0;
        else {
          var Ye = f(L);
          Ye !== null && he(ge, Ye.startTime - oe), Be = !1;
        }
        return Be;
      } finally {
        A = null, U = k, V = !1;
      }
    }
    var be = !1, De = null, We = -1, Ut = 5, Dt = -1;
    function B() {
      return !(c.unstable_now() - Dt < Ut);
    }
    function ee() {
      if (De !== null) {
        var I = c.unstable_now();
        Dt = I;
        var oe = !0;
        try {
          oe = De(!0, I);
        } finally {
          oe ? pe() : (be = !1, De = null);
        }
      } else be = !1;
    }
    var pe;
    if (typeof Ae == "function") pe = function() {
      Ae(ee);
    };
    else if (typeof MessageChannel < "u") {
      var ne = new MessageChannel(), me = ne.port2;
      ne.port1.onmessage = ee, pe = function() {
        me.postMessage(null);
      };
    } else pe = function() {
      se(ee, 0);
    };
    function Se(I) {
      De = I, be || (be = !0, pe());
    }
    function he(I, oe) {
      We = se(function() {
        I(c.unstable_now());
      }, oe);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(I) {
      I.callback = null;
    }, c.unstable_continueExecution = function() {
      j || V || (j = !0, Se(Ie));
    }, c.unstable_forceFrameRate = function(I) {
      0 > I || 125 < I ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ut = 0 < I ? Math.floor(1e3 / I) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return U;
    }, c.unstable_getFirstCallbackNode = function() {
      return f(_);
    }, c.unstable_next = function(I) {
      switch (U) {
        case 1:
        case 2:
        case 3:
          var oe = 3;
          break;
        default:
          oe = U;
      }
      var k = U;
      U = oe;
      try {
        return I();
      } finally {
        U = k;
      }
    }, c.unstable_pauseExecution = function() {
    }, c.unstable_requestPaint = function() {
    }, c.unstable_runWithPriority = function(I, oe) {
      switch (I) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          I = 3;
      }
      var k = U;
      U = I;
      try {
        return oe();
      } finally {
        U = k;
      }
    }, c.unstable_scheduleCallback = function(I, oe, k) {
      var K = c.unstable_now();
      switch (typeof k == "object" && k !== null ? (k = k.delay, k = typeof k == "number" && 0 < k ? K + k : K) : k = K, I) {
        case 1:
          var fe = -1;
          break;
        case 2:
          fe = 250;
          break;
        case 5:
          fe = 1073741823;
          break;
        case 4:
          fe = 1e4;
          break;
        default:
          fe = 5e3;
      }
      return fe = k + fe, I = { id: O++, callback: oe, priorityLevel: I, startTime: k, expirationTime: fe, sortIndex: -1 }, k > K ? (I.sortIndex = k, u(L, I), f(_) === null && I === f(L) && ($ ? (Ce(We), We = -1) : $ = !0, he(ge, k - K))) : (I.sortIndex = fe, u(_, I), j || V || (j = !0, Se(Ie))), I;
    }, c.unstable_shouldYield = B, c.unstable_wrapCallback = function(I) {
      var oe = U;
      return function() {
        var k = U;
        U = oe;
        try {
          return I.apply(this, arguments);
        } finally {
          U = k;
        }
      };
    };
  }(Fw)), Fw;
}
var jw = {}, fC;
function YA() {
  return fC || (fC = 1, function(c) {
    var u = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    u.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var f = !1, p = !1, y = 5;
      function E(Le, qe) {
        var gt = Le.length;
        Le.push(qe), _(Le, qe, gt);
      }
      function S(Le) {
        return Le.length === 0 ? null : Le[0];
      }
      function g(Le) {
        if (Le.length === 0)
          return null;
        var qe = Le[0], gt = Le.pop();
        return gt !== qe && (Le[0] = gt, L(Le, gt, 0)), qe;
      }
      function _(Le, qe, gt) {
        for (var wt = gt; wt > 0; ) {
          var Et = wt - 1 >>> 1, wn = Le[Et];
          if (O(wn, qe) > 0)
            Le[Et] = qe, Le[wt] = wn, wt = Et;
          else
            return;
        }
      }
      function L(Le, qe, gt) {
        for (var wt = gt, Et = Le.length, wn = Et >>> 1; wt < wn; ) {
          var fn = (wt + 1) * 2 - 1, In = Le[fn], Wt = fn + 1, Ln = Le[Wt];
          if (O(In, qe) < 0)
            Wt < Et && O(Ln, In) < 0 ? (Le[wt] = Ln, Le[Wt] = qe, wt = Wt) : (Le[wt] = In, Le[fn] = qe, wt = fn);
          else if (Wt < Et && O(Ln, qe) < 0)
            Le[wt] = Ln, Le[Wt] = qe, wt = Wt;
          else
            return;
        }
      }
      function O(Le, qe) {
        var gt = Le.sortIndex - qe.sortIndex;
        return gt !== 0 ? gt : Le.id - qe.id;
      }
      var A = 1, U = 2, V = 3, j = 4, $ = 5;
      function se(Le, qe) {
      }
      var Ce = typeof performance == "object" && typeof performance.now == "function";
      if (Ce) {
        var Ae = performance;
        c.unstable_now = function() {
          return Ae.now();
        };
      } else {
        var we = Date, ge = we.now();
        c.unstable_now = function() {
          return we.now() - ge;
        };
      }
      var Ie = 1073741823, be = -1, De = 250, We = 5e3, Ut = 1e4, Dt = Ie, B = [], ee = [], pe = 1, ne = null, me = V, Se = !1, he = !1, I = !1, oe = typeof setTimeout == "function" ? setTimeout : null, k = typeof clearTimeout == "function" ? clearTimeout : null, K = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function fe(Le) {
        for (var qe = S(ee); qe !== null; ) {
          if (qe.callback === null)
            g(ee);
          else if (qe.startTime <= Le)
            g(ee), qe.sortIndex = qe.expirationTime, E(B, qe);
          else
            return;
          qe = S(ee);
        }
      }
      function Be(Le) {
        if (I = !1, fe(Le), !he)
          if (S(B) !== null)
            he = !0, or(Ye);
          else {
            var qe = S(ee);
            qe !== null && Zt(Be, qe.startTime - Le);
          }
      }
      function Ye(Le, qe) {
        he = !1, I && (I = !1, Er()), Se = !0;
        var gt = me;
        try {
          var wt;
          if (!p) return lt(Le, qe);
        } finally {
          ne = null, me = gt, Se = !1;
        }
      }
      function lt(Le, qe) {
        var gt = qe;
        for (fe(gt), ne = S(B); ne !== null && !f && !(ne.expirationTime > gt && (!Le || An())); ) {
          var wt = ne.callback;
          if (typeof wt == "function") {
            ne.callback = null, me = ne.priorityLevel;
            var Et = ne.expirationTime <= gt, wn = wt(Et);
            gt = c.unstable_now(), typeof wn == "function" ? ne.callback = wn : ne === S(B) && g(B), fe(gt);
          } else
            g(B);
          ne = S(B);
        }
        if (ne !== null)
          return !0;
        var fn = S(ee);
        return fn !== null && Zt(Be, fn.startTime - gt), !1;
      }
      function et(Le, qe) {
        switch (Le) {
          case A:
          case U:
          case V:
          case j:
          case $:
            break;
          default:
            Le = V;
        }
        var gt = me;
        me = Le;
        try {
          return qe();
        } finally {
          me = gt;
        }
      }
      function dt(Le) {
        var qe;
        switch (me) {
          case A:
          case U:
          case V:
            qe = V;
            break;
          default:
            qe = me;
            break;
        }
        var gt = me;
        me = qe;
        try {
          return Le();
        } finally {
          me = gt;
        }
      }
      function ut(Le) {
        var qe = me;
        return function() {
          var gt = me;
          me = qe;
          try {
            return Le.apply(this, arguments);
          } finally {
            me = gt;
          }
        };
      }
      function Ft(Le, qe, gt) {
        var wt = c.unstable_now(), Et;
        if (typeof gt == "object" && gt !== null) {
          var wn = gt.delay;
          typeof wn == "number" && wn > 0 ? Et = wt + wn : Et = wt;
        } else
          Et = wt;
        var fn;
        switch (Le) {
          case A:
            fn = be;
            break;
          case U:
            fn = De;
            break;
          case $:
            fn = Dt;
            break;
          case j:
            fn = Ut;
            break;
          case V:
          default:
            fn = We;
            break;
        }
        var In = Et + fn, Wt = {
          id: pe++,
          callback: qe,
          priorityLevel: Le,
          startTime: Et,
          expirationTime: In,
          sortIndex: -1
        };
        return Et > wt ? (Wt.sortIndex = Et, E(ee, Wt), S(B) === null && Wt === S(ee) && (I ? Er() : I = !0, Zt(Be, Et - wt))) : (Wt.sortIndex = In, E(B, Wt), !he && !Se && (he = !0, or(Ye))), Wt;
      }
      function jt() {
      }
      function Cn() {
        !he && !Se && (he = !0, or(Ye));
      }
      function Rn() {
        return S(B);
      }
      function Pn(Le) {
        Le.callback = null;
      }
      function cn() {
        return me;
      }
      var Dn = !1, Hn = null, Yt = -1, Tn = y, Jn = -1;
      function An() {
        var Le = c.unstable_now() - Jn;
        return !(Le < Tn);
      }
      function Nt() {
      }
      function vr(Le) {
        if (Le < 0 || Le > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Le > 0 ? Tn = Math.floor(1e3 / Le) : Tn = y;
      }
      var Or = function() {
        if (Hn !== null) {
          var Le = c.unstable_now();
          Jn = Le;
          var qe = !0, gt = !0;
          try {
            gt = Hn(qe, Le);
          } finally {
            gt ? Bn() : (Dn = !1, Hn = null);
          }
        } else
          Dn = !1;
      }, Bn;
      if (typeof K == "function")
        Bn = function() {
          K(Or);
        };
      else if (typeof MessageChannel < "u") {
        var Dr = new MessageChannel(), Vn = Dr.port2;
        Dr.port1.onmessage = Or, Bn = function() {
          Vn.postMessage(null);
        };
      } else
        Bn = function() {
          oe(Or, 0);
        };
      function or(Le) {
        Hn = Le, Dn || (Dn = !0, Bn());
      }
      function Zt(Le, qe) {
        Yt = oe(function() {
          Le(c.unstable_now());
        }, qe);
      }
      function Er() {
        k(Yt), Yt = -1;
      }
      var lr = Nt, mr = null;
      c.unstable_IdlePriority = $, c.unstable_ImmediatePriority = A, c.unstable_LowPriority = j, c.unstable_NormalPriority = V, c.unstable_Profiling = mr, c.unstable_UserBlockingPriority = U, c.unstable_cancelCallback = Pn, c.unstable_continueExecution = Cn, c.unstable_forceFrameRate = vr, c.unstable_getCurrentPriorityLevel = cn, c.unstable_getFirstCallbackNode = Rn, c.unstable_next = dt, c.unstable_pauseExecution = jt, c.unstable_requestPaint = lr, c.unstable_runWithPriority = et, c.unstable_scheduleCallback = Ft, c.unstable_shouldYield = An, c.unstable_wrapCallback = ut, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(jw)), jw;
}
var dC;
function ZC() {
  if (dC) return Hy.exports;
  dC = 1;
  var c = {};
  return c.NODE_ENV === "production" ? Hy.exports = IA() : Hy.exports = YA(), Hy.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pC;
function WA() {
  if (pC) return di;
  pC = 1;
  var c = Ne, u = ZC();
  function f(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var p = /* @__PURE__ */ new Set(), y = {};
  function E(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (y[n] = r, n = 0; n < r.length; n++) p.add(r[n]);
  }
  var g = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), _ = Object.prototype.hasOwnProperty, L = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, O = {}, A = {};
  function U(n) {
    return _.call(A, n) ? !0 : _.call(O, n) ? !1 : L.test(n) ? A[n] = !0 : (O[n] = !0, !1);
  }
  function V(n, r, o, s) {
    if (o !== null && o.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return s ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function j(n, r, o, s) {
    if (r === null || typeof r > "u" || V(n, r, o, s)) return !0;
    if (s) return !1;
    if (o !== null) switch (o.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function $(n, r, o, s, h, m, C) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = s, this.attributeNamespace = h, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = m, this.removeEmptyString = C;
  }
  var se = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    se[n] = new $(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    se[r] = new $(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    se[n] = new $(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    se[n] = new $(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    se[n] = new $(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    se[n] = new $(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    se[n] = new $(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    se[n] = new $(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    se[n] = new $(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Ce = /[\-:]([a-z])/g;
  function Ae(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Ce,
      Ae
    );
    se[r] = new $(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Ce, Ae);
    se[r] = new $(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Ce, Ae);
    se[r] = new $(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    se[n] = new $(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), se.xlinkHref = new $("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    se[n] = new $(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function we(n, r, o, s) {
    var h = se.hasOwnProperty(r) ? se[r] : null;
    (h !== null ? h.type !== 0 : s || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (j(r, o, h, s) && (o = null), s || h === null ? U(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : h.mustUseProperty ? n[h.propertyName] = o === null ? h.type === 3 ? !1 : "" : o : (r = h.attributeName, s = h.attributeNamespace, o === null ? n.removeAttribute(r) : (h = h.type, o = h === 3 || h === 4 && o === !0 ? "" : "" + o, s ? n.setAttributeNS(s, r, o) : n.setAttribute(r, o))));
  }
  var ge = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ie = Symbol.for("react.element"), be = Symbol.for("react.portal"), De = Symbol.for("react.fragment"), We = Symbol.for("react.strict_mode"), Ut = Symbol.for("react.profiler"), Dt = Symbol.for("react.provider"), B = Symbol.for("react.context"), ee = Symbol.for("react.forward_ref"), pe = Symbol.for("react.suspense"), ne = Symbol.for("react.suspense_list"), me = Symbol.for("react.memo"), Se = Symbol.for("react.lazy"), he = Symbol.for("react.offscreen"), I = Symbol.iterator;
  function oe(n) {
    return n === null || typeof n != "object" ? null : (n = I && n[I] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var k = Object.assign, K;
  function fe(n) {
    if (K === void 0) try {
      throw Error();
    } catch (o) {
      var r = o.stack.trim().match(/\n( *(at )?)/);
      K = r && r[1] || "";
    }
    return `
` + K + n;
  }
  var Be = !1;
  function Ye(n, r) {
    if (!n || Be) return "";
    Be = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (J) {
          var s = J;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (J) {
          s = J;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (J) {
          s = J;
        }
        n();
      }
    } catch (J) {
      if (J && s && typeof J.stack == "string") {
        for (var h = J.stack.split(`
`), m = s.stack.split(`
`), C = h.length - 1, D = m.length - 1; 1 <= C && 0 <= D && h[C] !== m[D]; ) D--;
        for (; 1 <= C && 0 <= D; C--, D--) if (h[C] !== m[D]) {
          if (C !== 1 || D !== 1)
            do
              if (C--, D--, 0 > D || h[C] !== m[D]) {
                var z = `
` + h[C].replace(" at new ", " at ");
                return n.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", n.displayName)), z;
              }
            while (1 <= C && 0 <= D);
          break;
        }
      }
    } finally {
      Be = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? fe(n) : "";
  }
  function lt(n) {
    switch (n.tag) {
      case 5:
        return fe(n.type);
      case 16:
        return fe("Lazy");
      case 13:
        return fe("Suspense");
      case 19:
        return fe("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ye(n.type, !1), n;
      case 11:
        return n = Ye(n.type.render, !1), n;
      case 1:
        return n = Ye(n.type, !0), n;
      default:
        return "";
    }
  }
  function et(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case De:
        return "Fragment";
      case be:
        return "Portal";
      case Ut:
        return "Profiler";
      case We:
        return "StrictMode";
      case pe:
        return "Suspense";
      case ne:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case B:
        return (n.displayName || "Context") + ".Consumer";
      case Dt:
        return (n._context.displayName || "Context") + ".Provider";
      case ee:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case me:
        return r = n.displayName || null, r !== null ? r : et(n.type) || "Memo";
      case Se:
        r = n._payload, n = n._init;
        try {
          return et(n(r));
        } catch {
        }
    }
    return null;
  }
  function dt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return et(r);
      case 8:
        return r === We ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function ut(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Ft(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function jt(n) {
    var r = Ft(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), s = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var h = o.get, m = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return h.call(this);
      }, set: function(C) {
        s = "" + C, m.call(this, C);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return s;
      }, setValue: function(C) {
        s = "" + C;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Cn(n) {
    n._valueTracker || (n._valueTracker = jt(n));
  }
  function Rn(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var o = r.getValue(), s = "";
    return n && (s = Ft(n) ? n.checked ? "true" : "false" : n.value), n = s, n !== o ? (r.setValue(n), !0) : !1;
  }
  function Pn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function cn(n, r) {
    var o = r.checked;
    return k({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function Dn(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, s = r.checked != null ? r.checked : r.defaultChecked;
    o = ut(r.value != null ? r.value : o), n._wrapperState = { initialChecked: s, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Hn(n, r) {
    r = r.checked, r != null && we(n, "checked", r, !1);
  }
  function Yt(n, r) {
    Hn(n, r);
    var o = ut(r.value), s = r.type;
    if (o != null) s === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (s === "submit" || s === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Jn(n, r.type, o) : r.hasOwnProperty("defaultValue") && Jn(n, r.type, ut(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Tn(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var s = r.type;
      if (!(s !== "submit" && s !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function Jn(n, r, o) {
    (r !== "number" || Pn(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var An = Array.isArray;
  function Nt(n, r, o, s) {
    if (n = n.options, r) {
      r = {};
      for (var h = 0; h < o.length; h++) r["$" + o[h]] = !0;
      for (o = 0; o < n.length; o++) h = r.hasOwnProperty("$" + n[o].value), n[o].selected !== h && (n[o].selected = h), h && s && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + ut(o), r = null, h = 0; h < n.length; h++) {
        if (n[h].value === o) {
          n[h].selected = !0, s && (n[h].defaultSelected = !0);
          return;
        }
        r !== null || n[h].disabled || (r = n[h]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function vr(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(f(91));
    return k({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Or(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null) throw Error(f(92));
        if (An(o)) {
          if (1 < o.length) throw Error(f(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: ut(o) };
  }
  function Bn(n, r) {
    var o = ut(r.value), s = ut(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), s != null && (n.defaultValue = "" + s);
  }
  function Dr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Vn(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function or(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Vn(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Zt, Er = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, s, h) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, s, h);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Zt = Zt || document.createElement("div"), Zt.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Zt.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function lr(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var mr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Le = ["Webkit", "ms", "Moz", "O"];
  Object.keys(mr).forEach(function(n) {
    Le.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), mr[r] = mr[n];
    });
  });
  function qe(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || mr.hasOwnProperty(n) && mr[n] ? ("" + r).trim() : r + "px";
  }
  function gt(n, r) {
    n = n.style;
    for (var o in r) if (r.hasOwnProperty(o)) {
      var s = o.indexOf("--") === 0, h = qe(o, r[o], s);
      o === "float" && (o = "cssFloat"), s ? n.setProperty(o, h) : n[o] = h;
    }
  }
  var wt = k({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Et(n, r) {
    if (r) {
      if (wt[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(f(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(f(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(f(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(f(62));
    }
  }
  function wn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var fn = null;
  function In(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Wt = null, Ln = null, Pt = null;
  function Jt(n) {
    if (n = Ai(n)) {
      if (typeof Wt != "function") throw Error(f(280));
      var r = n.stateNode;
      r && (r = Jc(r), Wt(n.stateNode, n.type, r));
    }
  }
  function jr(n) {
    Ln ? Pt ? Pt.push(n) : Pt = [n] : Ln = n;
  }
  function Pr() {
    if (Ln) {
      var n = Ln, r = Pt;
      if (Pt = Ln = null, Jt(n), r) for (n = 0; n < r.length; n++) Jt(r[n]);
    }
  }
  function dn(n, r) {
    return n(r);
  }
  function Yn() {
  }
  var ot = !1;
  function At(n, r, o) {
    if (ot) return n(r, o);
    ot = !0;
    try {
      return dn(n, r, o);
    } finally {
      ot = !1, (Ln !== null || Pt !== null) && (Yn(), Pr());
    }
  }
  function Nn(n, r) {
    var o = n.stateNode;
    if (o === null) return null;
    var s = Jc(o);
    if (s === null) return null;
    o = s[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (s = !s.disabled) || (n = n.type, s = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !s;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (o && typeof o != "function") throw Error(f(231, r, typeof o));
    return o;
  }
  var br = !1;
  if (g) try {
    var _e = {};
    Object.defineProperty(_e, "passive", { get: function() {
      br = !0;
    } }), window.addEventListener("test", _e, _e), window.removeEventListener("test", _e, _e);
  } catch {
    br = !1;
  }
  function Ze(n, r, o, s, h, m, C, D, z) {
    var J = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, J);
    } catch (ve) {
      this.onError(ve);
    }
  }
  var je = !1, Lt = null, tn = !1, yr = null, N = { onError: function(n) {
    je = !0, Lt = n;
  } };
  function le(n, r, o, s, h, m, C, D, z) {
    je = !1, Lt = null, Ze.apply(N, arguments);
  }
  function Re(n, r, o, s, h, m, C, D, z) {
    if (le.apply(this, arguments), je) {
      if (je) {
        var J = Lt;
        je = !1, Lt = null;
      } else throw Error(f(198));
      tn || (tn = !0, yr = J);
    }
  }
  function ye(n) {
    var r = n, o = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (o = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? o : null;
  }
  function Rt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Ht(n) {
    if (ye(n) !== n) throw Error(f(188));
  }
  function _t(n) {
    var r = n.alternate;
    if (!r) {
      if (r = ye(n), r === null) throw Error(f(188));
      return r !== n ? null : n;
    }
    for (var o = n, s = r; ; ) {
      var h = o.return;
      if (h === null) break;
      var m = h.alternate;
      if (m === null) {
        if (s = h.return, s !== null) {
          o = s;
          continue;
        }
        break;
      }
      if (h.child === m.child) {
        for (m = h.child; m; ) {
          if (m === o) return Ht(h), n;
          if (m === s) return Ht(h), r;
          m = m.sibling;
        }
        throw Error(f(188));
      }
      if (o.return !== s.return) o = h, s = m;
      else {
        for (var C = !1, D = h.child; D; ) {
          if (D === o) {
            C = !0, o = h, s = m;
            break;
          }
          if (D === s) {
            C = !0, s = h, o = m;
            break;
          }
          D = D.sibling;
        }
        if (!C) {
          for (D = m.child; D; ) {
            if (D === o) {
              C = !0, o = m, s = h;
              break;
            }
            if (D === s) {
              C = !0, s = m, o = h;
              break;
            }
            D = D.sibling;
          }
          if (!C) throw Error(f(189));
        }
      }
      if (o.alternate !== s) throw Error(f(190));
    }
    if (o.tag !== 3) throw Error(f(188));
    return o.stateNode.current === o ? n : r;
  }
  function it(n) {
    return n = _t(n), n !== null ? Wn(n) : null;
  }
  function Wn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = Wn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var pn = u.unstable_scheduleCallback, hn = u.unstable_cancelCallback, xr = u.unstable_shouldYield, zt = u.unstable_requestPaint, Vt = u.unstable_now, Ar = u.unstable_getCurrentPriorityLevel, hi = u.unstable_ImmediatePriority, Ya = u.unstable_UserBlockingPriority, Tt = u.unstable_NormalPriority, El = u.unstable_LowPriority, Xi = u.unstable_IdlePriority, Lo = null, ha = null;
  function gs(n) {
    if (ha && typeof ha.onCommitFiberRoot == "function") try {
      ha.onCommitFiberRoot(Lo, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var na = Math.clz32 ? Math.clz32 : Es, Ss = Math.log, ws = Math.LN2;
  function Es(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Ss(n) / ws | 0) | 0;
  }
  var bl = 64, su = 4194304;
  function Zi(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function ki(n, r) {
    var o = n.pendingLanes;
    if (o === 0) return 0;
    var s = 0, h = n.suspendedLanes, m = n.pingedLanes, C = o & 268435455;
    if (C !== 0) {
      var D = C & ~h;
      D !== 0 ? s = Zi(D) : (m &= C, m !== 0 && (s = Zi(m)));
    } else C = o & ~h, C !== 0 ? s = Zi(C) : m !== 0 && (s = Zi(m));
    if (s === 0) return 0;
    if (r !== 0 && r !== s && !(r & h) && (h = s & -s, m = r & -r, h >= m || h === 16 && (m & 4194240) !== 0)) return r;
    if (s & 4 && (s |= o & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= s; 0 < r; ) o = 31 - na(r), h = 1 << o, s |= n[o], r &= ~h;
    return s;
  }
  function Wa(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function No(n, r) {
    for (var o = n.suspendedLanes, s = n.pingedLanes, h = n.expirationTimes, m = n.pendingLanes; 0 < m; ) {
      var C = 31 - na(m), D = 1 << C, z = h[C];
      z === -1 ? (!(D & o) || D & s) && (h[C] = Wa(D, r)) : z <= r && (n.expiredLanes |= D), m &= ~D;
    }
  }
  function _i(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function xl() {
    var n = bl;
    return bl <<= 1, !(bl & 4194240) && (bl = 64), n;
  }
  function Cl(n) {
    for (var r = [], o = 0; 31 > o; o++) r.push(n);
    return r;
  }
  function Mo(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - na(r), n[r] = o;
  }
  function bs(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var s = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var h = 31 - na(o), m = 1 << h;
      r[h] = 0, s[h] = -1, n[h] = -1, o &= ~m;
    }
  }
  function xs(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var s = 31 - na(o), h = 1 << s;
      h & r | n[s] & r && (n[s] |= r), o &= ~h;
    }
  }
  var It = 0;
  function Cs(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var cu, zo, Rs, Kt, fu, Rl = !1, bt = [], vi = null, qn = null, va = null, qa = /* @__PURE__ */ new Map(), Uo = /* @__PURE__ */ new Map(), Mn = [], Qn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ts(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        vi = null;
        break;
      case "dragenter":
      case "dragleave":
        qn = null;
        break;
      case "mouseover":
      case "mouseout":
        va = null;
        break;
      case "pointerover":
      case "pointerout":
        qa.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Uo.delete(r.pointerId);
    }
  }
  function Hr(n, r, o, s, h, m) {
    return n === null || n.nativeEvent !== m ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: s, nativeEvent: m, targetContainers: [h] }, r !== null && (r = Ai(r), r !== null && zo(r)), n) : (n.eventSystemFlags |= s, r = n.targetContainers, h !== null && r.indexOf(h) === -1 && r.push(h), n);
  }
  function ma(n, r, o, s, h) {
    switch (r) {
      case "focusin":
        return vi = Hr(vi, n, r, o, s, h), !0;
      case "dragenter":
        return qn = Hr(qn, n, r, o, s, h), !0;
      case "mouseover":
        return va = Hr(va, n, r, o, s, h), !0;
      case "pointerover":
        var m = h.pointerId;
        return qa.set(m, Hr(qa.get(m) || null, n, r, o, s, h)), !0;
      case "gotpointercapture":
        return m = h.pointerId, Uo.set(m, Hr(Uo.get(m) || null, n, r, o, s, h)), !0;
    }
    return !1;
  }
  function mi(n) {
    var r = so(n.target);
    if (r !== null) {
      var o = ye(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = Rt(o), r !== null) {
            n.blockedOn = r, fu(n.priority, function() {
              Rs(o);
            });
            return;
          }
        } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function du(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = vu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var s = new o.constructor(o.type, o);
        fn = s, o.target.dispatchEvent(s), fn = null;
      } else return r = Ai(o), r !== null && zo(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function Tl(n, r, o) {
    du(n) && o.delete(r);
  }
  function kl() {
    Rl = !1, vi !== null && du(vi) && (vi = null), qn !== null && du(qn) && (qn = null), va !== null && du(va) && (va = null), qa.forEach(Tl), Uo.forEach(Tl);
  }
  function Fo(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Rl || (Rl = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, kl)));
  }
  function Qa(n) {
    function r(h) {
      return Fo(h, n);
    }
    if (0 < bt.length) {
      Fo(bt[0], n);
      for (var o = 1; o < bt.length; o++) {
        var s = bt[o];
        s.blockedOn === n && (s.blockedOn = null);
      }
    }
    for (vi !== null && Fo(vi, n), qn !== null && Fo(qn, n), va !== null && Fo(va, n), qa.forEach(r), Uo.forEach(r), o = 0; o < Mn.length; o++) s = Mn[o], s.blockedOn === n && (s.blockedOn = null);
    for (; 0 < Mn.length && (o = Mn[0], o.blockedOn === null); ) mi(o), o.blockedOn === null && Mn.shift();
  }
  var Ji = ge.ReactCurrentBatchConfig, pu = !0;
  function eo(n, r, o, s) {
    var h = It, m = Ji.transition;
    Ji.transition = null;
    try {
      It = 1, Oi(n, r, o, s);
    } finally {
      It = h, Ji.transition = m;
    }
  }
  function hu(n, r, o, s) {
    var h = It, m = Ji.transition;
    Ji.transition = null;
    try {
      It = 4, Oi(n, r, o, s);
    } finally {
      It = h, Ji.transition = m;
    }
  }
  function Oi(n, r, o, s) {
    if (pu) {
      var h = vu(n, r, o, s);
      if (h === null) Yd(n, r, s, to, o), Ts(n, s);
      else if (ma(h, n, r, o, s)) s.stopPropagation();
      else if (Ts(n, s), r & 4 && -1 < Qn.indexOf(n)) {
        for (; h !== null; ) {
          var m = Ai(h);
          if (m !== null && cu(m), m = vu(n, r, o, s), m === null && Yd(n, r, s, to, o), m === h) break;
          h = m;
        }
        h !== null && s.stopPropagation();
      } else Yd(n, r, s, null, o);
    }
  }
  var to = null;
  function vu(n, r, o, s) {
    if (to = null, n = In(s), n = so(n), n !== null) if (r = ye(n), r === null) n = null;
    else if (o = r.tag, o === 13) {
      if (n = Rt(r), n !== null) return n;
      n = null;
    } else if (o === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return to = n, null;
  }
  function ks(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Ar()) {
          case hi:
            return 1;
          case Ya:
            return 4;
          case Tt:
          case El:
            return 16;
          case Xi:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var yi = null, mu = null, x = null;
  function M() {
    if (x) return x;
    var n, r = mu, o = r.length, s, h = "value" in yi ? yi.value : yi.textContent, m = h.length;
    for (n = 0; n < o && r[n] === h[n]; n++) ;
    var C = o - n;
    for (s = 1; s <= C && r[o - s] === h[m - s]; s++) ;
    return x = h.slice(n, 1 < s ? 1 - s : void 0);
  }
  function G(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function te() {
    return !0;
  }
  function Te() {
    return !1;
  }
  function Xe(n) {
    function r(o, s, h, m, C) {
      this._reactName = o, this._targetInst = h, this.type = s, this.nativeEvent = m, this.target = C, this.currentTarget = null;
      for (var D in n) n.hasOwnProperty(D) && (o = n[D], this[D] = o ? o(m) : m[D]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? te : Te, this.isPropagationStopped = Te, this;
    }
    return k(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = te);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = te);
    }, persist: function() {
    }, isPersistent: te }), r;
  }
  var Pe = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, yt = Xe(Pe), Mt = k({}, Pe, { view: 0, detail: 0 }), un = Xe(Mt), vn, mn, yn, zn = k({}, Mt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Vc, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== yn && (yn && n.type === "mousemove" ? (vn = n.screenX - yn.screenX, mn = n.screenY - yn.screenY) : mn = vn = 0, yn = n), vn);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : mn;
  } }), Xt = Xe(zn), jo = k({}, zn, { dataTransfer: 0 }), yu = Xe(jo), _s = k({}, Mt, { relatedTarget: 0 }), Os = Xe(_s), no = k({}, Pe, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ds = Xe(no), As = k({}, Pe, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Nd = Xe(As), dg = k({}, Pe, { data: 0 }), Kh = Xe(dg), Xh = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Md = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Zh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Jh(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Zh[n]) ? !!r[n] : !1;
  }
  function Vc() {
    return Jh;
  }
  var pg = k({}, Mt, { key: function(n) {
    if (n.key) {
      var r = Xh[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = G(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Md[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Vc, charCode: function(n) {
    return n.type === "keypress" ? G(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? G(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), ro = Xe(pg), hg = k({}, zn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ic = Xe(hg), zd = k({}, Mt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Vc }), Ud = Xe(zd), vg = k({}, Pe, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Yc = Xe(vg), ev = k({}, zn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ya = Xe(ev), ao = [9, 13, 27, 32], er = g && "CompositionEvent" in window, Na = null;
  g && "documentMode" in document && (Na = document.documentMode);
  var Fd = g && "TextEvent" in window && !Na, Ls = g && (!er || Na && 8 < Na && 11 >= Na), tv = " ", gu = !1;
  function nv(n, r) {
    switch (n) {
      case "keyup":
        return ao.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function rv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Po = !1;
  function mg(n, r) {
    switch (n) {
      case "compositionend":
        return rv(r);
      case "keypress":
        return r.which !== 32 ? null : (gu = !0, tv);
      case "textInput":
        return n = r.data, n === tv && gu ? null : n;
      default:
        return null;
    }
  }
  function yg(n, r) {
    if (Po) return n === "compositionend" || !er && nv(n, r) ? (n = M(), x = mu = yi = null, Po = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Ls && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var gg = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function jd(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!gg[n.type] : r === "textarea";
  }
  function av(n, r, o, s) {
    jr(s), r = Xc(r, "onChange"), 0 < r.length && (o = new yt("onChange", "change", null, o, s), n.push({ event: o, listeners: r }));
  }
  var Ns = null, Ms = null;
  function iv(n) {
    Ev(n, 0);
  }
  function io(n) {
    var r = bu(n);
    if (Rn(r)) return n;
  }
  function Pd(n, r) {
    if (n === "change") return r;
  }
  var Hd = !1;
  if (g) {
    var Wc;
    if (g) {
      var $d = "oninput" in document;
      if (!$d) {
        var ov = document.createElement("div");
        ov.setAttribute("oninput", "return;"), $d = typeof ov.oninput == "function";
      }
      Wc = $d;
    } else Wc = !1;
    Hd = Wc && (!document.documentMode || 9 < document.documentMode);
  }
  function lv() {
    Ns && (Ns.detachEvent("onpropertychange", uv), Ms = Ns = null);
  }
  function uv(n) {
    if (n.propertyName === "value" && io(Ms)) {
      var r = [];
      av(r, Ms, n, In(n)), At(iv, r);
    }
  }
  function Sg(n, r, o) {
    n === "focusin" ? (lv(), Ns = r, Ms = o, Ns.attachEvent("onpropertychange", uv)) : n === "focusout" && lv();
  }
  function wg(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return io(Ms);
  }
  function Eg(n, r) {
    if (n === "click") return io(r);
  }
  function bg(n, r) {
    if (n === "input" || n === "change") return io(r);
  }
  function sv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var gi = typeof Object.is == "function" ? Object.is : sv;
  function Su(n, r) {
    if (gi(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var o = Object.keys(n), s = Object.keys(r);
    if (o.length !== s.length) return !1;
    for (s = 0; s < o.length; s++) {
      var h = o[s];
      if (!_.call(r, h) || !gi(n[h], r[h])) return !1;
    }
    return !0;
  }
  function cv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function fv(n, r) {
    var o = cv(n);
    n = 0;
    for (var s; o; ) {
      if (o.nodeType === 3) {
        if (s = n + o.textContent.length, n <= r && s >= r) return { node: o, offset: r - n };
        n = s;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = cv(o);
    }
  }
  function dv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? dv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function pv() {
    for (var n = window, r = Pn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o) n = r.contentWindow;
      else break;
      r = Pn(n.document);
    }
    return r;
  }
  function zs(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function _l(n) {
    var r = pv(), o = n.focusedElem, s = n.selectionRange;
    if (r !== o && o && o.ownerDocument && dv(o.ownerDocument.documentElement, o)) {
      if (s !== null && zs(o)) {
        if (r = s.start, n = s.end, n === void 0 && (n = r), "selectionStart" in o) o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var h = o.textContent.length, m = Math.min(s.start, h);
          s = s.end === void 0 ? m : Math.min(s.end, h), !n.extend && m > s && (h = s, s = m, m = h), h = fv(o, m);
          var C = fv(
            o,
            s
          );
          h && C && (n.rangeCount !== 1 || n.anchorNode !== h.node || n.anchorOffset !== h.offset || n.focusNode !== C.node || n.focusOffset !== C.offset) && (r = r.createRange(), r.setStart(h.node, h.offset), n.removeAllRanges(), m > s ? (n.addRange(r), n.extend(C.node, C.offset)) : (r.setEnd(C.node, C.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++) n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var qc = g && "documentMode" in document && 11 >= document.documentMode, Ol = null, Ho = null, Us = null, Bd = !1;
  function hv(n, r, o) {
    var s = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Bd || Ol == null || Ol !== Pn(s) || (s = Ol, "selectionStart" in s && zs(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), Us && Su(Us, s) || (Us = s, s = Xc(Ho, "onSelect"), 0 < s.length && (r = new yt("onSelect", "select", null, r, o), n.push({ event: r, listeners: s }), r.target = Ol)));
  }
  function Qc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var wu = { animationend: Qc("Animation", "AnimationEnd"), animationiteration: Qc("Animation", "AnimationIteration"), animationstart: Qc("Animation", "AnimationStart"), transitionend: Qc("Transition", "TransitionEnd") }, Gc = {}, vv = {};
  g && (vv = document.createElement("div").style, "AnimationEvent" in window || (delete wu.animationend.animation, delete wu.animationiteration.animation, delete wu.animationstart.animation), "TransitionEvent" in window || delete wu.transitionend.transition);
  function Fs(n) {
    if (Gc[n]) return Gc[n];
    if (!wu[n]) return n;
    var r = wu[n], o;
    for (o in r) if (r.hasOwnProperty(o) && o in vv) return Gc[n] = r[o];
    return n;
  }
  var Zr = Fs("animationend"), Vd = Fs("animationiteration"), mv = Fs("animationstart"), yv = Fs("transitionend"), gv = /* @__PURE__ */ new Map(), Sv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function $o(n, r) {
    gv.set(n, r), E(r, [n]);
  }
  for (var Kc = 0; Kc < Sv.length; Kc++) {
    var js = Sv[Kc], Ps = js.toLowerCase(), xg = js[0].toUpperCase() + js.slice(1);
    $o(Ps, "on" + xg);
  }
  $o(Zr, "onAnimationEnd"), $o(Vd, "onAnimationIteration"), $o(mv, "onAnimationStart"), $o("dblclick", "onDoubleClick"), $o("focusin", "onFocus"), $o("focusout", "onBlur"), $o(yv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), E("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), E("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), E("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), E("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), E("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), E("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var oo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Cg = new Set("cancel close invalid load scroll toggle".split(" ").concat(oo));
  function wv(n, r, o) {
    var s = n.type || "unknown-event";
    n.currentTarget = o, Re(s, r, void 0, n), n.currentTarget = null;
  }
  function Ev(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var s = n[o], h = s.event;
      s = s.listeners;
      e: {
        var m = void 0;
        if (r) for (var C = s.length - 1; 0 <= C; C--) {
          var D = s[C], z = D.instance, J = D.currentTarget;
          if (D = D.listener, z !== m && h.isPropagationStopped()) break e;
          wv(h, D, J), m = z;
        }
        else for (C = 0; C < s.length; C++) {
          if (D = s[C], z = D.instance, J = D.currentTarget, D = D.listener, z !== m && h.isPropagationStopped()) break e;
          wv(h, D, J), m = z;
        }
      }
    }
    if (tn) throw n = yr, tn = !1, yr = null, n;
  }
  function En(n, r) {
    var o = r[Jd];
    o === void 0 && (o = r[Jd] = /* @__PURE__ */ new Set());
    var s = n + "__bubble";
    o.has(s) || (Id(r, n, 2, !1), o.add(s));
  }
  function Hs(n, r, o) {
    var s = 0;
    r && (s |= 4), Id(o, n, s, r);
  }
  var lo = "_reactListening" + Math.random().toString(36).slice(2);
  function Di(n) {
    if (!n[lo]) {
      n[lo] = !0, p.forEach(function(o) {
        o !== "selectionchange" && (Cg.has(o) || Hs(o, !1, n), Hs(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[lo] || (r[lo] = !0, Hs("selectionchange", !1, r));
    }
  }
  function Id(n, r, o, s) {
    switch (ks(r)) {
      case 1:
        var h = eo;
        break;
      case 4:
        h = hu;
        break;
      default:
        h = Oi;
    }
    o = h.bind(null, r, o, n), h = void 0, !br || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (h = !0), s ? h !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: h }) : n.addEventListener(r, o, !0) : h !== void 0 ? n.addEventListener(r, o, { passive: h }) : n.addEventListener(r, o, !1);
  }
  function Yd(n, r, o, s, h) {
    var m = s;
    if (!(r & 1) && !(r & 2) && s !== null) e: for (; ; ) {
      if (s === null) return;
      var C = s.tag;
      if (C === 3 || C === 4) {
        var D = s.stateNode.containerInfo;
        if (D === h || D.nodeType === 8 && D.parentNode === h) break;
        if (C === 4) for (C = s.return; C !== null; ) {
          var z = C.tag;
          if ((z === 3 || z === 4) && (z = C.stateNode.containerInfo, z === h || z.nodeType === 8 && z.parentNode === h)) return;
          C = C.return;
        }
        for (; D !== null; ) {
          if (C = so(D), C === null) return;
          if (z = C.tag, z === 5 || z === 6) {
            s = m = C;
            continue e;
          }
          D = D.parentNode;
        }
      }
      s = s.return;
    }
    At(function() {
      var J = m, ve = In(o), Ee = [];
      e: {
        var de = gv.get(n);
        if (de !== void 0) {
          var Ue = yt, Qe = n;
          switch (n) {
            case "keypress":
              if (G(o) === 0) break e;
            case "keydown":
            case "keyup":
              Ue = ro;
              break;
            case "focusin":
              Qe = "focus", Ue = Os;
              break;
            case "focusout":
              Qe = "blur", Ue = Os;
              break;
            case "beforeblur":
            case "afterblur":
              Ue = Os;
              break;
            case "click":
              if (o.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Ue = Xt;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Ue = yu;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Ue = Ud;
              break;
            case Zr:
            case Vd:
            case mv:
              Ue = Ds;
              break;
            case yv:
              Ue = Yc;
              break;
            case "scroll":
              Ue = un;
              break;
            case "wheel":
              Ue = ya;
              break;
            case "copy":
            case "cut":
            case "paste":
              Ue = Nd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Ue = Ic;
          }
          var Je = (r & 4) !== 0, pr = !Je && n === "scroll", Y = Je ? de !== null ? de + "Capture" : null : de;
          Je = [];
          for (var P = J, Q; P !== null; ) {
            Q = P;
            var ke = Q.stateNode;
            if (Q.tag === 5 && ke !== null && (Q = ke, Y !== null && (ke = Nn(P, Y), ke != null && Je.push(Eu(P, ke, Q)))), pr) break;
            P = P.return;
          }
          0 < Je.length && (de = new Ue(de, Qe, null, o, ve), Ee.push({ event: de, listeners: Je }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (de = n === "mouseover" || n === "pointerover", Ue = n === "mouseout" || n === "pointerout", de && o !== fn && (Qe = o.relatedTarget || o.fromElement) && (so(Qe) || Qe[Si])) break e;
          if ((Ue || de) && (de = ve.window === ve ? ve : (de = ve.ownerDocument) ? de.defaultView || de.parentWindow : window, Ue ? (Qe = o.relatedTarget || o.toElement, Ue = J, Qe = Qe ? so(Qe) : null, Qe !== null && (pr = ye(Qe), Qe !== pr || Qe.tag !== 5 && Qe.tag !== 6) && (Qe = null)) : (Ue = null, Qe = J), Ue !== Qe)) {
            if (Je = Xt, ke = "onMouseLeave", Y = "onMouseEnter", P = "mouse", (n === "pointerout" || n === "pointerover") && (Je = Ic, ke = "onPointerLeave", Y = "onPointerEnter", P = "pointer"), pr = Ue == null ? de : bu(Ue), Q = Qe == null ? de : bu(Qe), de = new Je(ke, P + "leave", Ue, o, ve), de.target = pr, de.relatedTarget = Q, ke = null, so(ve) === J && (Je = new Je(Y, P + "enter", Qe, o, ve), Je.target = Q, Je.relatedTarget = pr, ke = Je), pr = ke, Ue && Qe) t: {
              for (Je = Ue, Y = Qe, P = 0, Q = Je; Q; Q = Dl(Q)) P++;
              for (Q = 0, ke = Y; ke; ke = Dl(ke)) Q++;
              for (; 0 < P - Q; ) Je = Dl(Je), P--;
              for (; 0 < Q - P; ) Y = Dl(Y), Q--;
              for (; P--; ) {
                if (Je === Y || Y !== null && Je === Y.alternate) break t;
                Je = Dl(Je), Y = Dl(Y);
              }
              Je = null;
            }
            else Je = null;
            Ue !== null && Wd(Ee, de, Ue, Je, !1), Qe !== null && pr !== null && Wd(Ee, pr, Qe, Je, !0);
          }
        }
        e: {
          if (de = J ? bu(J) : window, Ue = de.nodeName && de.nodeName.toLowerCase(), Ue === "select" || Ue === "input" && de.type === "file") var nt = Pd;
          else if (jd(de)) if (Hd) nt = bg;
          else {
            nt = wg;
            var ht = Sg;
          }
          else (Ue = de.nodeName) && Ue.toLowerCase() === "input" && (de.type === "checkbox" || de.type === "radio") && (nt = Eg);
          if (nt && (nt = nt(n, J))) {
            av(Ee, nt, o, ve);
            break e;
          }
          ht && ht(n, de, J), n === "focusout" && (ht = de._wrapperState) && ht.controlled && de.type === "number" && Jn(de, "number", de.value);
        }
        switch (ht = J ? bu(J) : window, n) {
          case "focusin":
            (jd(ht) || ht.contentEditable === "true") && (Ol = ht, Ho = J, Us = null);
            break;
          case "focusout":
            Us = Ho = Ol = null;
            break;
          case "mousedown":
            Bd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Bd = !1, hv(Ee, o, ve);
            break;
          case "selectionchange":
            if (qc) break;
          case "keydown":
          case "keyup":
            hv(Ee, o, ve);
        }
        var Ge;
        if (er) e: {
          switch (n) {
            case "compositionstart":
              var vt = "onCompositionStart";
              break e;
            case "compositionend":
              vt = "onCompositionEnd";
              break e;
            case "compositionupdate":
              vt = "onCompositionUpdate";
              break e;
          }
          vt = void 0;
        }
        else Po ? nv(n, o) && (vt = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (vt = "onCompositionStart");
        vt && (Ls && o.locale !== "ko" && (Po || vt !== "onCompositionStart" ? vt === "onCompositionEnd" && Po && (Ge = M()) : (yi = ve, mu = "value" in yi ? yi.value : yi.textContent, Po = !0)), ht = Xc(J, vt), 0 < ht.length && (vt = new Kh(vt, n, null, o, ve), Ee.push({ event: vt, listeners: ht }), Ge ? vt.data = Ge : (Ge = rv(o), Ge !== null && (vt.data = Ge)))), (Ge = Fd ? mg(n, o) : yg(n, o)) && (J = Xc(J, "onBeforeInput"), 0 < J.length && (ve = new Kh("onBeforeInput", "beforeinput", null, o, ve), Ee.push({ event: ve, listeners: J }), ve.data = Ge));
      }
      Ev(Ee, r);
    });
  }
  function Eu(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function Xc(n, r) {
    for (var o = r + "Capture", s = []; n !== null; ) {
      var h = n, m = h.stateNode;
      h.tag === 5 && m !== null && (h = m, m = Nn(n, o), m != null && s.unshift(Eu(n, m, h)), m = Nn(n, r), m != null && s.push(Eu(n, m, h))), n = n.return;
    }
    return s;
  }
  function Dl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Wd(n, r, o, s, h) {
    for (var m = r._reactName, C = []; o !== null && o !== s; ) {
      var D = o, z = D.alternate, J = D.stateNode;
      if (z !== null && z === s) break;
      D.tag === 5 && J !== null && (D = J, h ? (z = Nn(o, m), z != null && C.unshift(Eu(o, z, D))) : h || (z = Nn(o, m), z != null && C.push(Eu(o, z, D)))), o = o.return;
    }
    C.length !== 0 && n.push({ event: r, listeners: C });
  }
  var bv = /\r\n?/g, qd = /\u0000|\uFFFD/g;
  function xv(n) {
    return (typeof n == "string" ? n : "" + n).replace(bv, `
`).replace(qd, "");
  }
  function $s(n, r, o) {
    if (r = xv(r), xv(n) !== r && o) throw Error(f(425));
  }
  function Zc() {
  }
  var Qd = null, Gd = null;
  function Al(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Bs = typeof setTimeout == "function" ? setTimeout : void 0, Vs = typeof clearTimeout == "function" ? clearTimeout : void 0, Kd = typeof Promise == "function" ? Promise : void 0, Cv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Kd < "u" ? function(n) {
    return Kd.resolve(null).then(n).catch(Xd);
  } : Bs;
  function Xd(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Zd(n, r) {
    var o = r, s = 0;
    do {
      var h = o.nextSibling;
      if (n.removeChild(o), h && h.nodeType === 8) if (o = h.data, o === "/$") {
        if (s === 0) {
          n.removeChild(h), Qa(r);
          return;
        }
        s--;
      } else o !== "$" && o !== "$?" && o !== "$!" || s++;
      o = h;
    } while (o);
    Qa(r);
  }
  function Ma(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Is(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (r === 0) return n;
          r--;
        } else o === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var uo = Math.random().toString(36).slice(2), Ga = "__reactFiber$" + uo, Ys = "__reactProps$" + uo, Si = "__reactContainer$" + uo, Jd = "__reactEvents$" + uo, Rg = "__reactListeners$" + uo, Tg = "__reactHandles$" + uo;
  function so(n) {
    var r = n[Ga];
    if (r) return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[Si] || o[Ga]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null) for (n = Is(n); n !== null; ) {
          if (o = n[Ga]) return o;
          n = Is(n);
        }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function Ai(n) {
    return n = n[Ga] || n[Si], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function bu(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(f(33));
  }
  function Jc(n) {
    return n[Ys] || null;
  }
  var st = [], wi = -1;
  function bn(n) {
    return { current: n };
  }
  function tt(n) {
    0 > wi || (n.current = st[wi], st[wi] = null, wi--);
  }
  function nn(n, r) {
    wi++, st[wi] = n.current, n.current = r;
  }
  var Ka = {}, Lr = bn(Ka), xt = bn(!1), ra = Ka;
  function za(n, r) {
    var o = n.type.contextTypes;
    if (!o) return Ka;
    var s = n.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === r) return s.__reactInternalMemoizedMaskedChildContext;
    var h = {}, m;
    for (m in o) h[m] = r[m];
    return s && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = h), h;
  }
  function gr(n) {
    return n = n.childContextTypes, n != null;
  }
  function ga() {
    tt(xt), tt(Lr);
  }
  function Li(n, r, o) {
    if (Lr.current !== Ka) throw Error(f(168));
    nn(Lr, r), nn(xt, o);
  }
  function Bo(n, r, o) {
    var s = n.stateNode;
    if (r = r.childContextTypes, typeof s.getChildContext != "function") return o;
    s = s.getChildContext();
    for (var h in s) if (!(h in r)) throw Error(f(108, dt(n) || "Unknown", h));
    return k({}, o, s);
  }
  function Ll(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ka, ra = Lr.current, nn(Lr, n), nn(xt, xt.current), !0;
  }
  function Rv(n, r, o) {
    var s = n.stateNode;
    if (!s) throw Error(f(169));
    o ? (n = Bo(n, r, ra), s.__reactInternalMemoizedMergedChildContext = n, tt(xt), tt(Lr), nn(Lr, n)) : tt(xt), nn(xt, o);
  }
  var co = null, Vo = !1, $r = !1;
  function ef(n) {
    co === null ? co = [n] : co.push(n);
  }
  function Tv(n) {
    Vo = !0, ef(n);
  }
  function Ni() {
    if (!$r && co !== null) {
      $r = !0;
      var n = 0, r = It;
      try {
        var o = co;
        for (It = 1; n < o.length; n++) {
          var s = o[n];
          do
            s = s(!0);
          while (s !== null);
        }
        co = null, Vo = !1;
      } catch (h) {
        throw co !== null && (co = co.slice(n + 1)), pn(hi, Ni), h;
      } finally {
        It = r, $r = !1;
      }
    }
    return null;
  }
  var Xa = [], Io = 0, Za = null, Nl = 0, Sa = [], wa = 0, Ei = null, Ea = 1, Br = "";
  function Ml(n, r) {
    Xa[Io++] = Nl, Xa[Io++] = Za, Za = n, Nl = r;
  }
  function Yo(n, r, o) {
    Sa[wa++] = Ea, Sa[wa++] = Br, Sa[wa++] = Ei, Ei = n;
    var s = Ea;
    n = Br;
    var h = 32 - na(s) - 1;
    s &= ~(1 << h), o += 1;
    var m = 32 - na(r) + h;
    if (30 < m) {
      var C = h - h % 5;
      m = (s & (1 << C) - 1).toString(32), s >>= C, h -= C, Ea = 1 << 32 - na(r) + h | o << h | s, Br = m + n;
    } else Ea = 1 << m | o << h | s, Br = n;
  }
  function tf(n) {
    n.return !== null && (Ml(n, 1), Yo(n, 1, 0));
  }
  function nf(n) {
    for (; n === Za; ) Za = Xa[--Io], Xa[Io] = null, Nl = Xa[--Io], Xa[Io] = null;
    for (; n === Ei; ) Ei = Sa[--wa], Sa[wa] = null, Br = Sa[--wa], Sa[wa] = null, Ea = Sa[--wa], Sa[wa] = null;
  }
  var Ua = null, Fa = null, Un = !1, Ja = null;
  function ep(n, r) {
    var o = oi(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function tp(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Ua = n, Fa = Ma(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Ua = n, Fa = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = Ei !== null ? { id: Ea, overflow: Br } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = oi(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, Ua = n, Fa = null, !0) : !1;
      default:
        return !1;
    }
  }
  function np(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function rf(n) {
    if (Un) {
      var r = Fa;
      if (r) {
        var o = r;
        if (!tp(n, r)) {
          if (np(n)) throw Error(f(418));
          r = Ma(o.nextSibling);
          var s = Ua;
          r && tp(n, r) ? ep(s, o) : (n.flags = n.flags & -4097 | 2, Un = !1, Ua = n);
        }
      } else {
        if (np(n)) throw Error(f(418));
        n.flags = n.flags & -4097 | 2, Un = !1, Ua = n;
      }
    }
  }
  function rp(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Ua = n;
  }
  function af(n) {
    if (n !== Ua) return !1;
    if (!Un) return rp(n), Un = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Al(n.type, n.memoizedProps)), r && (r = Fa)) {
      if (np(n)) throw kv(), Error(f(418));
      for (; r; ) ep(n, r), r = Ma(r.nextSibling);
    }
    if (rp(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(f(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                Fa = Ma(n.nextSibling);
                break e;
              }
              r--;
            } else o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Fa = null;
      }
    } else Fa = Ua ? Ma(n.stateNode.nextSibling) : null;
    return !0;
  }
  function kv() {
    for (var n = Fa; n; ) n = Ma(n.nextSibling);
  }
  function xu() {
    Fa = Ua = null, Un = !1;
  }
  function Sr(n) {
    Ja === null ? Ja = [n] : Ja.push(n);
  }
  var kg = ge.ReactCurrentBatchConfig;
  function ba(n, r) {
    if (n && n.defaultProps) {
      r = k({}, r), n = n.defaultProps;
      for (var o in n) r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  var Cu = bn(null), Mi = null, Ru = null, Ws = null;
  function ap() {
    Ws = Ru = Mi = null;
  }
  function ip(n) {
    var r = Cu.current;
    tt(Cu), n._currentValue = r;
  }
  function Wo(n, r, o) {
    for (; n !== null; ) {
      var s = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, s !== null && (s.childLanes |= r)) : s !== null && (s.childLanes & r) !== r && (s.childLanes |= r), n === o) break;
      n = n.return;
    }
  }
  function ur(n, r) {
    Mi = n, Ws = Ru = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Ra = !0), n.firstContext = null);
  }
  function Oe(n) {
    var r = n._currentValue;
    if (Ws !== n) if (n = { context: n, memoizedValue: r, next: null }, Ru === null) {
      if (Mi === null) throw Error(f(308));
      Ru = n, Mi.dependencies = { lanes: 0, firstContext: n };
    } else Ru = Ru.next = n;
    return r;
  }
  var Jr = null;
  function ja(n) {
    Jr === null ? Jr = [n] : Jr.push(n);
  }
  function _v(n, r, o, s) {
    var h = r.interleaved;
    return h === null ? (o.next = o, ja(r)) : (o.next = h.next, h.next = o), r.interleaved = o, fo(n, s);
  }
  function fo(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; ) n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var qo = !1;
  function op(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Ov(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function kn(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Qo(n, r, o) {
    var s = n.updateQueue;
    if (s === null) return null;
    if (s = s.shared, $t & 2) {
      var h = s.pending;
      return h === null ? r.next = r : (r.next = h.next, h.next = r), s.pending = r, fo(n, o);
    }
    return h = s.interleaved, h === null ? (r.next = r, ja(s)) : (r.next = h.next, h.next = r), s.interleaved = r, fo(n, o);
  }
  function of(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var s = r.lanes;
      s &= n.pendingLanes, o |= s, r.lanes = o, xs(n, o);
    }
  }
  function Dv(n, r) {
    var o = n.updateQueue, s = n.alternate;
    if (s !== null && (s = s.updateQueue, o === s)) {
      var h = null, m = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var C = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          m === null ? h = m = C : m = m.next = C, o = o.next;
        } while (o !== null);
        m === null ? h = m = r : m = m.next = r;
      } else h = m = r;
      o = { baseState: s.baseState, firstBaseUpdate: h, lastBaseUpdate: m, shared: s.shared, effects: s.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function qs(n, r, o, s) {
    var h = n.updateQueue;
    qo = !1;
    var m = h.firstBaseUpdate, C = h.lastBaseUpdate, D = h.shared.pending;
    if (D !== null) {
      h.shared.pending = null;
      var z = D, J = z.next;
      z.next = null, C === null ? m = J : C.next = J, C = z;
      var ve = n.alternate;
      ve !== null && (ve = ve.updateQueue, D = ve.lastBaseUpdate, D !== C && (D === null ? ve.firstBaseUpdate = J : D.next = J, ve.lastBaseUpdate = z));
    }
    if (m !== null) {
      var Ee = h.baseState;
      C = 0, ve = J = z = null, D = m;
      do {
        var de = D.lane, Ue = D.eventTime;
        if ((s & de) === de) {
          ve !== null && (ve = ve.next = {
            eventTime: Ue,
            lane: 0,
            tag: D.tag,
            payload: D.payload,
            callback: D.callback,
            next: null
          });
          e: {
            var Qe = n, Je = D;
            switch (de = r, Ue = o, Je.tag) {
              case 1:
                if (Qe = Je.payload, typeof Qe == "function") {
                  Ee = Qe.call(Ue, Ee, de);
                  break e;
                }
                Ee = Qe;
                break e;
              case 3:
                Qe.flags = Qe.flags & -65537 | 128;
              case 0:
                if (Qe = Je.payload, de = typeof Qe == "function" ? Qe.call(Ue, Ee, de) : Qe, de == null) break e;
                Ee = k({}, Ee, de);
                break e;
              case 2:
                qo = !0;
            }
          }
          D.callback !== null && D.lane !== 0 && (n.flags |= 64, de = h.effects, de === null ? h.effects = [D] : de.push(D));
        } else Ue = { eventTime: Ue, lane: de, tag: D.tag, payload: D.payload, callback: D.callback, next: null }, ve === null ? (J = ve = Ue, z = Ee) : ve = ve.next = Ue, C |= de;
        if (D = D.next, D === null) {
          if (D = h.shared.pending, D === null) break;
          de = D, D = de.next, de.next = null, h.lastBaseUpdate = de, h.shared.pending = null;
        }
      } while (!0);
      if (ve === null && (z = Ee), h.baseState = z, h.firstBaseUpdate = J, h.lastBaseUpdate = ve, r = h.shared.interleaved, r !== null) {
        h = r;
        do
          C |= h.lane, h = h.next;
        while (h !== r);
      } else m === null && (h.shared.lanes = 0);
      Wl |= C, n.lanes = C, n.memoizedState = Ee;
    }
  }
  function Tu(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var s = n[r], h = s.callback;
      if (h !== null) {
        if (s.callback = null, s = o, typeof h != "function") throw Error(f(191, h));
        h.call(s);
      }
    }
  }
  var zl = new c.Component().refs;
  function lp(n, r, o, s) {
    r = n.memoizedState, o = o(s, r), o = o == null ? r : k({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var lf = { isMounted: function(n) {
    return (n = n._reactInternals) ? ye(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var s = zr(), h = mo(n), m = kn(s, h);
    m.payload = r, o != null && (m.callback = o), r = Qo(n, m, h), r !== null && (Kn(r, n, h, s), of(r, n, h));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var s = zr(), h = mo(n), m = kn(s, h);
    m.tag = 1, m.payload = r, o != null && (m.callback = o), r = Qo(n, m, h), r !== null && (Kn(r, n, h, s), of(r, n, h));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = zr(), s = mo(n), h = kn(o, s);
    h.tag = 2, r != null && (h.callback = r), r = Qo(n, h, s), r !== null && (Kn(r, n, s, o), of(r, n, s));
  } };
  function Av(n, r, o, s, h, m, C) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(s, m, C) : r.prototype && r.prototype.isPureReactComponent ? !Su(o, s) || !Su(h, m) : !0;
  }
  function Lv(n, r, o) {
    var s = !1, h = Ka, m = r.contextType;
    return typeof m == "object" && m !== null ? m = Oe(m) : (h = gr(r) ? ra : Lr.current, s = r.contextTypes, m = (s = s != null) ? za(n, h) : Ka), r = new r(o, m), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = lf, n.stateNode = r, r._reactInternals = n, s && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = h, n.__reactInternalMemoizedMaskedChildContext = m), r;
  }
  function Nv(n, r, o, s) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, s), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, s), r.state !== n && lf.enqueueReplaceState(r, r.state, null);
  }
  function up(n, r, o, s) {
    var h = n.stateNode;
    h.props = o, h.state = n.memoizedState, h.refs = zl, op(n);
    var m = r.contextType;
    typeof m == "object" && m !== null ? h.context = Oe(m) : (m = gr(r) ? ra : Lr.current, h.context = za(n, m)), h.state = n.memoizedState, m = r.getDerivedStateFromProps, typeof m == "function" && (lp(n, r, m, o), h.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function" || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (r = h.state, typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), r !== h.state && lf.enqueueReplaceState(h, h.state, null), qs(n, o, h, s), h.state = n.memoizedState), typeof h.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function ku(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1) throw Error(f(309));
          var s = o.stateNode;
        }
        if (!s) throw Error(f(147, n));
        var h = s, m = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === m ? r.ref : (r = function(C) {
          var D = h.refs;
          D === zl && (D = h.refs = {}), C === null ? delete D[m] : D[m] = C;
        }, r._stringRef = m, r);
      }
      if (typeof n != "string") throw Error(f(284));
      if (!o._owner) throw Error(f(290, n));
    }
    return n;
  }
  function Qs(n, r) {
    throw n = Object.prototype.toString.call(r), Error(f(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Mv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function zv(n) {
    function r(Y, P) {
      if (n) {
        var Q = Y.deletions;
        Q === null ? (Y.deletions = [P], Y.flags |= 16) : Q.push(P);
      }
    }
    function o(Y, P) {
      if (!n) return null;
      for (; P !== null; ) r(Y, P), P = P.sibling;
      return null;
    }
    function s(Y, P) {
      for (Y = /* @__PURE__ */ new Map(); P !== null; ) P.key !== null ? Y.set(P.key, P) : Y.set(P.index, P), P = P.sibling;
      return Y;
    }
    function h(Y, P) {
      return Y = nl(Y, P), Y.index = 0, Y.sibling = null, Y;
    }
    function m(Y, P, Q) {
      return Y.index = Q, n ? (Q = Y.alternate, Q !== null ? (Q = Q.index, Q < P ? (Y.flags |= 2, P) : Q) : (Y.flags |= 2, P)) : (Y.flags |= 1048576, P);
    }
    function C(Y) {
      return n && Y.alternate === null && (Y.flags |= 2), Y;
    }
    function D(Y, P, Q, ke) {
      return P === null || P.tag !== 6 ? (P = Bf(Q, Y.mode, ke), P.return = Y, P) : (P = h(P, Q), P.return = Y, P);
    }
    function z(Y, P, Q, ke) {
      var nt = Q.type;
      return nt === De ? ve(Y, P, Q.props.children, ke, Q.key) : P !== null && (P.elementType === nt || typeof nt == "object" && nt !== null && nt.$$typeof === Se && Mv(nt) === P.type) ? (ke = h(P, Q.props), ke.ref = ku(Y, P, Q), ke.return = Y, ke) : (ke = Hf(Q.type, Q.key, Q.props, null, Y.mode, ke), ke.ref = ku(Y, P, Q), ke.return = Y, ke);
    }
    function J(Y, P, Q, ke) {
      return P === null || P.tag !== 4 || P.stateNode.containerInfo !== Q.containerInfo || P.stateNode.implementation !== Q.implementation ? (P = pc(Q, Y.mode, ke), P.return = Y, P) : (P = h(P, Q.children || []), P.return = Y, P);
    }
    function ve(Y, P, Q, ke, nt) {
      return P === null || P.tag !== 7 ? (P = Kl(Q, Y.mode, ke, nt), P.return = Y, P) : (P = h(P, Q), P.return = Y, P);
    }
    function Ee(Y, P, Q) {
      if (typeof P == "string" && P !== "" || typeof P == "number") return P = Bf("" + P, Y.mode, Q), P.return = Y, P;
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case Ie:
            return Q = Hf(P.type, P.key, P.props, null, Y.mode, Q), Q.ref = ku(Y, null, P), Q.return = Y, Q;
          case be:
            return P = pc(P, Y.mode, Q), P.return = Y, P;
          case Se:
            var ke = P._init;
            return Ee(Y, ke(P._payload), Q);
        }
        if (An(P) || oe(P)) return P = Kl(P, Y.mode, Q, null), P.return = Y, P;
        Qs(Y, P);
      }
      return null;
    }
    function de(Y, P, Q, ke) {
      var nt = P !== null ? P.key : null;
      if (typeof Q == "string" && Q !== "" || typeof Q == "number") return nt !== null ? null : D(Y, P, "" + Q, ke);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case Ie:
            return Q.key === nt ? z(Y, P, Q, ke) : null;
          case be:
            return Q.key === nt ? J(Y, P, Q, ke) : null;
          case Se:
            return nt = Q._init, de(
              Y,
              P,
              nt(Q._payload),
              ke
            );
        }
        if (An(Q) || oe(Q)) return nt !== null ? null : ve(Y, P, Q, ke, null);
        Qs(Y, Q);
      }
      return null;
    }
    function Ue(Y, P, Q, ke, nt) {
      if (typeof ke == "string" && ke !== "" || typeof ke == "number") return Y = Y.get(Q) || null, D(P, Y, "" + ke, nt);
      if (typeof ke == "object" && ke !== null) {
        switch (ke.$$typeof) {
          case Ie:
            return Y = Y.get(ke.key === null ? Q : ke.key) || null, z(P, Y, ke, nt);
          case be:
            return Y = Y.get(ke.key === null ? Q : ke.key) || null, J(P, Y, ke, nt);
          case Se:
            var ht = ke._init;
            return Ue(Y, P, Q, ht(ke._payload), nt);
        }
        if (An(ke) || oe(ke)) return Y = Y.get(Q) || null, ve(P, Y, ke, nt, null);
        Qs(P, ke);
      }
      return null;
    }
    function Qe(Y, P, Q, ke) {
      for (var nt = null, ht = null, Ge = P, vt = P = 0, kr = null; Ge !== null && vt < Q.length; vt++) {
        Ge.index > vt ? (kr = Ge, Ge = null) : kr = Ge.sibling;
        var rn = de(Y, Ge, Q[vt], ke);
        if (rn === null) {
          Ge === null && (Ge = kr);
          break;
        }
        n && Ge && rn.alternate === null && r(Y, Ge), P = m(rn, P, vt), ht === null ? nt = rn : ht.sibling = rn, ht = rn, Ge = kr;
      }
      if (vt === Q.length) return o(Y, Ge), Un && Ml(Y, vt), nt;
      if (Ge === null) {
        for (; vt < Q.length; vt++) Ge = Ee(Y, Q[vt], ke), Ge !== null && (P = m(Ge, P, vt), ht === null ? nt = Ge : ht.sibling = Ge, ht = Ge);
        return Un && Ml(Y, vt), nt;
      }
      for (Ge = s(Y, Ge); vt < Q.length; vt++) kr = Ue(Ge, Y, vt, Q[vt], ke), kr !== null && (n && kr.alternate !== null && Ge.delete(kr.key === null ? vt : kr.key), P = m(kr, P, vt), ht === null ? nt = kr : ht.sibling = kr, ht = kr);
      return n && Ge.forEach(function(yo) {
        return r(Y, yo);
      }), Un && Ml(Y, vt), nt;
    }
    function Je(Y, P, Q, ke) {
      var nt = oe(Q);
      if (typeof nt != "function") throw Error(f(150));
      if (Q = nt.call(Q), Q == null) throw Error(f(151));
      for (var ht = nt = null, Ge = P, vt = P = 0, kr = null, rn = Q.next(); Ge !== null && !rn.done; vt++, rn = Q.next()) {
        Ge.index > vt ? (kr = Ge, Ge = null) : kr = Ge.sibling;
        var yo = de(Y, Ge, rn.value, ke);
        if (yo === null) {
          Ge === null && (Ge = kr);
          break;
        }
        n && Ge && yo.alternate === null && r(Y, Ge), P = m(yo, P, vt), ht === null ? nt = yo : ht.sibling = yo, ht = yo, Ge = kr;
      }
      if (rn.done) return o(
        Y,
        Ge
      ), Un && Ml(Y, vt), nt;
      if (Ge === null) {
        for (; !rn.done; vt++, rn = Q.next()) rn = Ee(Y, rn.value, ke), rn !== null && (P = m(rn, P, vt), ht === null ? nt = rn : ht.sibling = rn, ht = rn);
        return Un && Ml(Y, vt), nt;
      }
      for (Ge = s(Y, Ge); !rn.done; vt++, rn = Q.next()) rn = Ue(Ge, Y, vt, rn.value, ke), rn !== null && (n && rn.alternate !== null && Ge.delete(rn.key === null ? vt : rn.key), P = m(rn, P, vt), ht === null ? nt = rn : ht.sibling = rn, ht = rn);
      return n && Ge.forEach(function(Wg) {
        return r(Y, Wg);
      }), Un && Ml(Y, vt), nt;
    }
    function pr(Y, P, Q, ke) {
      if (typeof Q == "object" && Q !== null && Q.type === De && Q.key === null && (Q = Q.props.children), typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case Ie:
            e: {
              for (var nt = Q.key, ht = P; ht !== null; ) {
                if (ht.key === nt) {
                  if (nt = Q.type, nt === De) {
                    if (ht.tag === 7) {
                      o(Y, ht.sibling), P = h(ht, Q.props.children), P.return = Y, Y = P;
                      break e;
                    }
                  } else if (ht.elementType === nt || typeof nt == "object" && nt !== null && nt.$$typeof === Se && Mv(nt) === ht.type) {
                    o(Y, ht.sibling), P = h(ht, Q.props), P.ref = ku(Y, ht, Q), P.return = Y, Y = P;
                    break e;
                  }
                  o(Y, ht);
                  break;
                } else r(Y, ht);
                ht = ht.sibling;
              }
              Q.type === De ? (P = Kl(Q.props.children, Y.mode, ke, Q.key), P.return = Y, Y = P) : (ke = Hf(Q.type, Q.key, Q.props, null, Y.mode, ke), ke.ref = ku(Y, P, Q), ke.return = Y, Y = ke);
            }
            return C(Y);
          case be:
            e: {
              for (ht = Q.key; P !== null; ) {
                if (P.key === ht) if (P.tag === 4 && P.stateNode.containerInfo === Q.containerInfo && P.stateNode.implementation === Q.implementation) {
                  o(Y, P.sibling), P = h(P, Q.children || []), P.return = Y, Y = P;
                  break e;
                } else {
                  o(Y, P);
                  break;
                }
                else r(Y, P);
                P = P.sibling;
              }
              P = pc(Q, Y.mode, ke), P.return = Y, Y = P;
            }
            return C(Y);
          case Se:
            return ht = Q._init, pr(Y, P, ht(Q._payload), ke);
        }
        if (An(Q)) return Qe(Y, P, Q, ke);
        if (oe(Q)) return Je(Y, P, Q, ke);
        Qs(Y, Q);
      }
      return typeof Q == "string" && Q !== "" || typeof Q == "number" ? (Q = "" + Q, P !== null && P.tag === 6 ? (o(Y, P.sibling), P = h(P, Q), P.return = Y, Y = P) : (o(Y, P), P = Bf(Q, Y.mode, ke), P.return = Y, Y = P), C(Y)) : o(Y, P);
    }
    return pr;
  }
  var _u = zv(!0), Uv = zv(!1), Gs = {}, zi = bn(Gs), Ou = bn(Gs), Ks = bn(Gs);
  function Go(n) {
    if (n === Gs) throw Error(f(174));
    return n;
  }
  function sp(n, r) {
    switch (nn(Ks, r), nn(Ou, n), nn(zi, Gs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : or(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = or(r, n);
    }
    tt(zi), nn(zi, r);
  }
  function Du() {
    tt(zi), tt(Ou), tt(Ks);
  }
  function uf(n) {
    Go(Ks.current);
    var r = Go(zi.current), o = or(r, n.type);
    r !== o && (nn(Ou, n), nn(zi, o));
  }
  function ct(n) {
    Ou.current === n && (tt(zi), tt(Ou));
  }
  var rt = bn(0);
  function en(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var tr = [];
  function ei() {
    for (var n = 0; n < tr.length; n++) tr[n]._workInProgressVersionPrimary = null;
    tr.length = 0;
  }
  var Xs = ge.ReactCurrentDispatcher, cp = ge.ReactCurrentBatchConfig, Ul = 0, Gn = null, sr = null, ie = null, cr = !1, pt = !1, Ui = 0, po = 0;
  function nr() {
    throw Error(f(321));
  }
  function ti(n, r) {
    if (r === null) return !1;
    for (var o = 0; o < r.length && o < n.length; o++) if (!gi(n[o], r[o])) return !1;
    return !0;
  }
  function Fl(n, r, o, s, h, m) {
    if (Ul = m, Gn = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Xs.current = n === null || n.memoizedState === null ? _g : Og, n = o(s, h), pt) {
      m = 0;
      do {
        if (pt = !1, Ui = 0, 25 <= m) throw Error(f(301));
        m += 1, ie = sr = null, r.updateQueue = null, Xs.current = Dg, n = o(s, h);
      } while (pt);
    }
    if (Xs.current = bf, r = sr !== null && sr.next !== null, Ul = 0, ie = sr = Gn = null, cr = !1, r) throw Error(f(300));
    return n;
  }
  function Ko() {
    var n = Ui !== 0;
    return Ui = 0, n;
  }
  function xa() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ie === null ? Gn.memoizedState = ie = n : ie = ie.next = n, ie;
  }
  function Ca() {
    if (sr === null) {
      var n = Gn.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = sr.next;
    var r = ie === null ? Gn.memoizedState : ie.next;
    if (r !== null) ie = r, sr = n;
    else {
      if (n === null) throw Error(f(310));
      sr = n, n = { memoizedState: sr.memoizedState, baseState: sr.baseState, baseQueue: sr.baseQueue, queue: sr.queue, next: null }, ie === null ? Gn.memoizedState = ie = n : ie = ie.next = n;
    }
    return ie;
  }
  function jl(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Zs(n) {
    var r = Ca(), o = r.queue;
    if (o === null) throw Error(f(311));
    o.lastRenderedReducer = n;
    var s = sr, h = s.baseQueue, m = o.pending;
    if (m !== null) {
      if (h !== null) {
        var C = h.next;
        h.next = m.next, m.next = C;
      }
      s.baseQueue = h = m, o.pending = null;
    }
    if (h !== null) {
      m = h.next, s = s.baseState;
      var D = C = null, z = null, J = m;
      do {
        var ve = J.lane;
        if ((Ul & ve) === ve) z !== null && (z = z.next = { lane: 0, action: J.action, hasEagerState: J.hasEagerState, eagerState: J.eagerState, next: null }), s = J.hasEagerState ? J.eagerState : n(s, J.action);
        else {
          var Ee = {
            lane: ve,
            action: J.action,
            hasEagerState: J.hasEagerState,
            eagerState: J.eagerState,
            next: null
          };
          z === null ? (D = z = Ee, C = s) : z = z.next = Ee, Gn.lanes |= ve, Wl |= ve;
        }
        J = J.next;
      } while (J !== null && J !== m);
      z === null ? C = s : z.next = D, gi(s, r.memoizedState) || (Ra = !0), r.memoizedState = s, r.baseState = C, r.baseQueue = z, o.lastRenderedState = s;
    }
    if (n = o.interleaved, n !== null) {
      h = n;
      do
        m = h.lane, Gn.lanes |= m, Wl |= m, h = h.next;
      while (h !== n);
    } else h === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function Js(n) {
    var r = Ca(), o = r.queue;
    if (o === null) throw Error(f(311));
    o.lastRenderedReducer = n;
    var s = o.dispatch, h = o.pending, m = r.memoizedState;
    if (h !== null) {
      o.pending = null;
      var C = h = h.next;
      do
        m = n(m, C.action), C = C.next;
      while (C !== h);
      gi(m, r.memoizedState) || (Ra = !0), r.memoizedState = m, r.baseQueue === null && (r.baseState = m), o.lastRenderedState = m;
    }
    return [m, s];
  }
  function sf() {
  }
  function cf(n, r) {
    var o = Gn, s = Ca(), h = r(), m = !gi(s.memoizedState, h);
    if (m && (s.memoizedState = h, Ra = !0), s = s.queue, ec(pf.bind(null, o, s, n), [n]), s.getSnapshot !== r || m || ie !== null && ie.memoizedState.tag & 1) {
      if (o.flags |= 2048, Pl(9, df.bind(null, o, s, h, r), void 0, null), ar === null) throw Error(f(349));
      Ul & 30 || ff(o, r, h);
    }
    return h;
  }
  function ff(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = Gn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Gn.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function df(n, r, o, s) {
    r.value = o, r.getSnapshot = s, hf(r) && vf(n);
  }
  function pf(n, r, o) {
    return o(function() {
      hf(r) && vf(n);
    });
  }
  function hf(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !gi(n, o);
    } catch {
      return !0;
    }
  }
  function vf(n) {
    var r = fo(n, 1);
    r !== null && Kn(r, n, 1, -1);
  }
  function mf(n) {
    var r = xa();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: jl, lastRenderedState: n }, r.queue = n, n = n.dispatch = Ef.bind(null, Gn, n), [r.memoizedState, n];
  }
  function Pl(n, r, o, s) {
    return n = { tag: n, create: r, destroy: o, deps: s, next: null }, r = Gn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Gn.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (s = o.next, o.next = n, n.next = s, r.lastEffect = n)), n;
  }
  function yf() {
    return Ca().memoizedState;
  }
  function Au(n, r, o, s) {
    var h = xa();
    Gn.flags |= n, h.memoizedState = Pl(1 | r, o, void 0, s === void 0 ? null : s);
  }
  function Hl(n, r, o, s) {
    var h = Ca();
    s = s === void 0 ? null : s;
    var m = void 0;
    if (sr !== null) {
      var C = sr.memoizedState;
      if (m = C.destroy, s !== null && ti(s, C.deps)) {
        h.memoizedState = Pl(r, o, m, s);
        return;
      }
    }
    Gn.flags |= n, h.memoizedState = Pl(1 | r, o, m, s);
  }
  function $l(n, r) {
    return Au(8390656, 8, n, r);
  }
  function ec(n, r) {
    return Hl(2048, 8, n, r);
  }
  function gf(n, r) {
    return Hl(4, 2, n, r);
  }
  function Sf(n, r) {
    return Hl(4, 4, n, r);
  }
  function wf(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function fp(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Hl(4, 4, wf.bind(null, r, n), o);
  }
  function Bl() {
  }
  function dp(n, r) {
    var o = Ca();
    r = r === void 0 ? null : r;
    var s = o.memoizedState;
    return s !== null && r !== null && ti(r, s[1]) ? s[0] : (o.memoizedState = [n, r], n);
  }
  function Lu(n, r) {
    var o = Ca();
    r = r === void 0 ? null : r;
    var s = o.memoizedState;
    return s !== null && r !== null && ti(r, s[1]) ? s[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function Xo(n, r, o) {
    return Ul & 21 ? (gi(o, r) || (o = xl(), Gn.lanes |= o, Wl |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Ra = !0), n.memoizedState = o);
  }
  function Pa(n, r) {
    var o = It;
    It = o !== 0 && 4 > o ? o : 4, n(!0);
    var s = cp.transition;
    cp.transition = {};
    try {
      n(!1), r();
    } finally {
      It = o, cp.transition = s;
    }
  }
  function Fv() {
    return Ca().memoizedState;
  }
  function _n(n, r, o) {
    var s = mo(n);
    if (o = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null }, tc(n)) Nu(r, o);
    else if (o = _v(n, r, o, s), o !== null) {
      var h = zr();
      Kn(o, n, s, h), nc(o, r, s);
    }
  }
  function Ef(n, r, o) {
    var s = mo(n), h = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (tc(n)) Nu(r, h);
    else {
      var m = n.alternate;
      if (n.lanes === 0 && (m === null || m.lanes === 0) && (m = r.lastRenderedReducer, m !== null)) try {
        var C = r.lastRenderedState, D = m(C, o);
        if (h.hasEagerState = !0, h.eagerState = D, gi(D, C)) {
          var z = r.interleaved;
          z === null ? (h.next = h, ja(r)) : (h.next = z.next, z.next = h), r.interleaved = h;
          return;
        }
      } catch {
      } finally {
      }
      o = _v(n, r, h, s), o !== null && (h = zr(), Kn(o, n, s, h), nc(o, r, s));
    }
  }
  function tc(n) {
    var r = n.alternate;
    return n === Gn || r !== null && r === Gn;
  }
  function Nu(n, r) {
    pt = cr = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function nc(n, r, o) {
    if (o & 4194240) {
      var s = r.lanes;
      s &= n.pendingLanes, o |= s, r.lanes = o, xs(n, o);
    }
  }
  var bf = { readContext: Oe, useCallback: nr, useContext: nr, useEffect: nr, useImperativeHandle: nr, useInsertionEffect: nr, useLayoutEffect: nr, useMemo: nr, useReducer: nr, useRef: nr, useState: nr, useDebugValue: nr, useDeferredValue: nr, useTransition: nr, useMutableSource: nr, useSyncExternalStore: nr, useId: nr, unstable_isNewReconciler: !1 }, _g = { readContext: Oe, useCallback: function(n, r) {
    return xa().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Oe, useEffect: $l, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Au(
      4194308,
      4,
      wf.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return Au(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Au(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = xa();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var s = xa();
    return r = o !== void 0 ? o(r) : r, s.memoizedState = s.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, s.queue = n, n = n.dispatch = _n.bind(null, Gn, n), [s.memoizedState, n];
  }, useRef: function(n) {
    var r = xa();
    return n = { current: n }, r.memoizedState = n;
  }, useState: mf, useDebugValue: Bl, useDeferredValue: function(n) {
    return xa().memoizedState = n;
  }, useTransition: function() {
    var n = mf(!1), r = n[0];
    return n = Pa.bind(null, n[1]), xa().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var s = Gn, h = xa();
    if (Un) {
      if (o === void 0) throw Error(f(407));
      o = o();
    } else {
      if (o = r(), ar === null) throw Error(f(349));
      Ul & 30 || ff(s, r, o);
    }
    h.memoizedState = o;
    var m = { value: o, getSnapshot: r };
    return h.queue = m, $l(pf.bind(
      null,
      s,
      m,
      n
    ), [n]), s.flags |= 2048, Pl(9, df.bind(null, s, m, o, r), void 0, null), o;
  }, useId: function() {
    var n = xa(), r = ar.identifierPrefix;
    if (Un) {
      var o = Br, s = Ea;
      o = (s & ~(1 << 32 - na(s) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = Ui++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else o = po++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Og = {
    readContext: Oe,
    useCallback: dp,
    useContext: Oe,
    useEffect: ec,
    useImperativeHandle: fp,
    useInsertionEffect: gf,
    useLayoutEffect: Sf,
    useMemo: Lu,
    useReducer: Zs,
    useRef: yf,
    useState: function() {
      return Zs(jl);
    },
    useDebugValue: Bl,
    useDeferredValue: function(n) {
      var r = Ca();
      return Xo(r, sr.memoizedState, n);
    },
    useTransition: function() {
      var n = Zs(jl)[0], r = Ca().memoizedState;
      return [n, r];
    },
    useMutableSource: sf,
    useSyncExternalStore: cf,
    useId: Fv,
    unstable_isNewReconciler: !1
  }, Dg = { readContext: Oe, useCallback: dp, useContext: Oe, useEffect: ec, useImperativeHandle: fp, useInsertionEffect: gf, useLayoutEffect: Sf, useMemo: Lu, useReducer: Js, useRef: yf, useState: function() {
    return Js(jl);
  }, useDebugValue: Bl, useDeferredValue: function(n) {
    var r = Ca();
    return sr === null ? r.memoizedState = n : Xo(r, sr.memoizedState, n);
  }, useTransition: function() {
    var n = Js(jl)[0], r = Ca().memoizedState;
    return [n, r];
  }, useMutableSource: sf, useSyncExternalStore: cf, useId: Fv, unstable_isNewReconciler: !1 };
  function Zo(n, r) {
    try {
      var o = "", s = r;
      do
        o += lt(s), s = s.return;
      while (s);
      var h = o;
    } catch (m) {
      h = `
Error generating stack: ` + m.message + `
` + m.stack;
    }
    return { value: n, source: r, stack: h, digest: null };
  }
  function pp(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function rc(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var jv = typeof WeakMap == "function" ? WeakMap : Map;
  function Pv(n, r, o) {
    o = kn(-1, o), o.tag = 3, o.payload = { element: null };
    var s = r.value;
    return o.callback = function() {
      Mf || (Mf = !0, bp = s), rc(n, r);
    }, o;
  }
  function Hv(n, r, o) {
    o = kn(-1, o), o.tag = 3;
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var h = r.value;
      o.payload = function() {
        return s(h);
      }, o.callback = function() {
        rc(n, r);
      };
    }
    var m = n.stateNode;
    return m !== null && typeof m.componentDidCatch == "function" && (o.callback = function() {
      rc(n, r), typeof s != "function" && (ai === null ? ai = /* @__PURE__ */ new Set([this]) : ai.add(this));
      var C = r.stack;
      this.componentDidCatch(r.value, { componentStack: C !== null ? C : "" });
    }), o;
  }
  function ac(n, r, o) {
    var s = n.pingCache;
    if (s === null) {
      s = n.pingCache = new jv();
      var h = /* @__PURE__ */ new Set();
      s.set(r, h);
    } else h = s.get(r), h === void 0 && (h = /* @__PURE__ */ new Set(), s.set(r, h));
    h.has(o) || (h.add(o), n = Hg.bind(null, n, r, o), r.then(n, n));
  }
  function $v(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function hp(n, r, o, s, h) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = h, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = kn(-1, 1), r.tag = 2, Qo(o, r, 1))), o.lanes |= 1), n);
  }
  var Bv = ge.ReactCurrentOwner, Ra = !1;
  function fr(n, r, o, s) {
    r.child = n === null ? Uv(r, null, o, s) : _u(r, n.child, o, s);
  }
  function Mu(n, r, o, s, h) {
    o = o.render;
    var m = r.ref;
    return ur(r, h), s = Fl(n, r, o, s, m, h), o = Ko(), n !== null && !Ra ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~h, dr(n, r, h)) : (Un && o && tf(r), r.flags |= 1, fr(n, r, s, h), r.child);
  }
  function Jo(n, r, o, s, h) {
    if (n === null) {
      var m = o.type;
      return typeof m == "function" && !kp(m) && m.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = m, xf(n, r, m, s, h)) : (n = Hf(o.type, null, s, r, r.mode, h), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (m = n.child, !(n.lanes & h)) {
      var C = m.memoizedProps;
      if (o = o.compare, o = o !== null ? o : Su, o(C, s) && n.ref === r.ref) return dr(n, r, h);
    }
    return r.flags |= 1, n = nl(m, s), n.ref = r.ref, n.return = r, r.child = n;
  }
  function xf(n, r, o, s, h) {
    if (n !== null) {
      var m = n.memoizedProps;
      if (Su(m, s) && n.ref === r.ref) if (Ra = !1, r.pendingProps = s = m, (n.lanes & h) !== 0) n.flags & 131072 && (Ra = !0);
      else return r.lanes = n.lanes, dr(n, r, h);
    }
    return Ot(n, r, o, s, h);
  }
  function Ta(n, r, o) {
    var s = r.pendingProps, h = s.children, m = n !== null ? n.memoizedState : null;
    if (s.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, nn(Iu, ka), ka |= o;
    else {
      if (!(o & 1073741824)) return n = m !== null ? m.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, nn(Iu, ka), ka |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = m !== null ? m.baseLanes : o, nn(Iu, ka), ka |= s;
    }
    else m !== null ? (s = m.baseLanes | o, r.memoizedState = null) : s = o, nn(Iu, ka), ka |= s;
    return fr(n, r, h, o), r.child;
  }
  function Vl(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Ot(n, r, o, s, h) {
    var m = gr(o) ? ra : Lr.current;
    return m = za(r, m), ur(r, h), o = Fl(n, r, o, s, m, h), s = Ko(), n !== null && !Ra ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~h, dr(n, r, h)) : (Un && s && tf(r), r.flags |= 1, fr(n, r, o, h), r.child);
  }
  function ic(n, r, o, s, h) {
    if (gr(o)) {
      var m = !0;
      Ll(r);
    } else m = !1;
    if (ur(r, h), r.stateNode === null) lc(n, r), Lv(r, o, s), up(r, o, s, h), s = !0;
    else if (n === null) {
      var C = r.stateNode, D = r.memoizedProps;
      C.props = D;
      var z = C.context, J = o.contextType;
      typeof J == "object" && J !== null ? J = Oe(J) : (J = gr(o) ? ra : Lr.current, J = za(r, J));
      var ve = o.getDerivedStateFromProps, Ee = typeof ve == "function" || typeof C.getSnapshotBeforeUpdate == "function";
      Ee || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (D !== s || z !== J) && Nv(r, C, s, J), qo = !1;
      var de = r.memoizedState;
      C.state = de, qs(r, s, C, h), z = r.memoizedState, D !== s || de !== z || xt.current || qo ? (typeof ve == "function" && (lp(r, o, ve, s), z = r.memoizedState), (D = qo || Av(r, o, D, s, de, z, J)) ? (Ee || typeof C.UNSAFE_componentWillMount != "function" && typeof C.componentWillMount != "function" || (typeof C.componentWillMount == "function" && C.componentWillMount(), typeof C.UNSAFE_componentWillMount == "function" && C.UNSAFE_componentWillMount()), typeof C.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = s, r.memoizedState = z), C.props = s, C.state = z, C.context = J, s = D) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), s = !1);
    } else {
      C = r.stateNode, Ov(n, r), D = r.memoizedProps, J = r.type === r.elementType ? D : ba(r.type, D), C.props = J, Ee = r.pendingProps, de = C.context, z = o.contextType, typeof z == "object" && z !== null ? z = Oe(z) : (z = gr(o) ? ra : Lr.current, z = za(r, z));
      var Ue = o.getDerivedStateFromProps;
      (ve = typeof Ue == "function" || typeof C.getSnapshotBeforeUpdate == "function") || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (D !== Ee || de !== z) && Nv(r, C, s, z), qo = !1, de = r.memoizedState, C.state = de, qs(r, s, C, h);
      var Qe = r.memoizedState;
      D !== Ee || de !== Qe || xt.current || qo ? (typeof Ue == "function" && (lp(r, o, Ue, s), Qe = r.memoizedState), (J = qo || Av(r, o, J, s, de, Qe, z) || !1) ? (ve || typeof C.UNSAFE_componentWillUpdate != "function" && typeof C.componentWillUpdate != "function" || (typeof C.componentWillUpdate == "function" && C.componentWillUpdate(s, Qe, z), typeof C.UNSAFE_componentWillUpdate == "function" && C.UNSAFE_componentWillUpdate(s, Qe, z)), typeof C.componentDidUpdate == "function" && (r.flags |= 4), typeof C.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof C.componentDidUpdate != "function" || D === n.memoizedProps && de === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || D === n.memoizedProps && de === n.memoizedState || (r.flags |= 1024), r.memoizedProps = s, r.memoizedState = Qe), C.props = s, C.state = Qe, C.context = z, s = J) : (typeof C.componentDidUpdate != "function" || D === n.memoizedProps && de === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || D === n.memoizedProps && de === n.memoizedState || (r.flags |= 1024), s = !1);
    }
    return Cf(n, r, o, s, m, h);
  }
  function Cf(n, r, o, s, h, m) {
    Vl(n, r);
    var C = (r.flags & 128) !== 0;
    if (!s && !C) return h && Rv(r, o, !1), dr(n, r, m);
    s = r.stateNode, Bv.current = r;
    var D = C && typeof o.getDerivedStateFromError != "function" ? null : s.render();
    return r.flags |= 1, n !== null && C ? (r.child = _u(r, n.child, null, m), r.child = _u(r, null, D, m)) : fr(n, r, D, m), r.memoizedState = s.state, h && Rv(r, o, !0), r.child;
  }
  function Ag(n) {
    var r = n.stateNode;
    r.pendingContext ? Li(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Li(n, r.context, !1), sp(n, r.containerInfo);
  }
  function Vv(n, r, o, s, h) {
    return xu(), Sr(h), r.flags |= 256, fr(n, r, o, s), r.child;
  }
  var oc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Il(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Iv(n, r, o) {
    var s = r.pendingProps, h = rt.current, m = !1, C = (r.flags & 128) !== 0, D;
    if ((D = C) || (D = n !== null && n.memoizedState === null ? !1 : (h & 2) !== 0), D ? (m = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (h |= 1), nn(rt, h & 1), n === null)
      return rf(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (C = s.children, n = s.fallback, m ? (s = r.mode, m = r.child, C = { mode: "hidden", children: C }, !(s & 1) && m !== null ? (m.childLanes = 0, m.pendingProps = C) : m = $f(C, s, 0, null), n = Kl(n, s, o, null), m.return = r, n.return = r, m.sibling = n, r.child = m, r.child.memoizedState = Il(o), r.memoizedState = oc, n) : Rf(r, C));
    if (h = n.memoizedState, h !== null && (D = h.dehydrated, D !== null)) return vp(n, r, C, s, D, h, o);
    if (m) {
      m = s.fallback, C = r.mode, h = n.child, D = h.sibling;
      var z = { mode: "hidden", children: s.children };
      return !(C & 1) && r.child !== h ? (s = r.child, s.childLanes = 0, s.pendingProps = z, r.deletions = null) : (s = nl(h, z), s.subtreeFlags = h.subtreeFlags & 14680064), D !== null ? m = nl(D, m) : (m = Kl(m, C, o, null), m.flags |= 2), m.return = r, s.return = r, s.sibling = m, r.child = s, s = m, m = r.child, C = n.child.memoizedState, C = C === null ? Il(o) : { baseLanes: C.baseLanes | o, cachePool: null, transitions: C.transitions }, m.memoizedState = C, m.childLanes = n.childLanes & ~o, r.memoizedState = oc, s;
    }
    return m = n.child, n = m.sibling, s = nl(m, { mode: "visible", children: s.children }), !(r.mode & 1) && (s.lanes = o), s.return = r, s.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = s, r.memoizedState = null, s;
  }
  function Rf(n, r) {
    return r = $f({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Tf(n, r, o, s) {
    return s !== null && Sr(s), _u(r, n.child, null, o), n = Rf(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function vp(n, r, o, s, h, m, C) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, s = pp(Error(f(422))), Tf(n, r, C, s)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (m = s.fallback, h = r.mode, s = $f({ mode: "visible", children: s.children }, h, 0, null), m = Kl(m, h, C, null), m.flags |= 2, s.return = r, m.return = r, s.sibling = m, r.child = s, r.mode & 1 && _u(r, n.child, null, C), r.child.memoizedState = Il(C), r.memoizedState = oc, m);
    if (!(r.mode & 1)) return Tf(n, r, C, null);
    if (h.data === "$!") {
      if (s = h.nextSibling && h.nextSibling.dataset, s) var D = s.dgst;
      return s = D, m = Error(f(419)), s = pp(m, s, void 0), Tf(n, r, C, s);
    }
    if (D = (C & n.childLanes) !== 0, Ra || D) {
      if (s = ar, s !== null) {
        switch (C & -C) {
          case 4:
            h = 2;
            break;
          case 16:
            h = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            h = 32;
            break;
          case 536870912:
            h = 268435456;
            break;
          default:
            h = 0;
        }
        h = h & (s.suspendedLanes | C) ? 0 : h, h !== 0 && h !== m.retryLane && (m.retryLane = h, fo(n, h), Kn(s, n, h, -1));
      }
      return dc(), s = pp(Error(f(421))), Tf(n, r, C, s);
    }
    return h.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Tp.bind(null, n), h._reactRetry = r, null) : (n = m.treeContext, Fa = Ma(h.nextSibling), Ua = r, Un = !0, Ja = null, n !== null && (Sa[wa++] = Ea, Sa[wa++] = Br, Sa[wa++] = Ei, Ea = n.id, Br = n.overflow, Ei = r), r = Rf(r, s.children), r.flags |= 4096, r);
  }
  function Yv(n, r, o) {
    n.lanes |= r;
    var s = n.alternate;
    s !== null && (s.lanes |= r), Wo(n.return, r, o);
  }
  function kf(n, r, o, s, h) {
    var m = n.memoizedState;
    m === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: s, tail: o, tailMode: h } : (m.isBackwards = r, m.rendering = null, m.renderingStartTime = 0, m.last = s, m.tail = o, m.tailMode = h);
  }
  function mp(n, r, o) {
    var s = r.pendingProps, h = s.revealOrder, m = s.tail;
    if (fr(n, r, s.children, o), s = rt.current, s & 2) s = s & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Yv(n, o, r);
        else if (n.tag === 19) Yv(n, o, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      s &= 1;
    }
    if (nn(rt, s), !(r.mode & 1)) r.memoizedState = null;
    else switch (h) {
      case "forwards":
        for (o = r.child, h = null; o !== null; ) n = o.alternate, n !== null && en(n) === null && (h = o), o = o.sibling;
        o = h, o === null ? (h = r.child, r.child = null) : (h = o.sibling, o.sibling = null), kf(r, !1, h, o, m);
        break;
      case "backwards":
        for (o = null, h = r.child, r.child = null; h !== null; ) {
          if (n = h.alternate, n !== null && en(n) === null) {
            r.child = h;
            break;
          }
          n = h.sibling, h.sibling = o, o = h, h = n;
        }
        kf(r, !0, o, null, m);
        break;
      case "together":
        kf(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function lc(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function dr(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), Wl |= r.lanes, !(o & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(f(153));
    if (r.child !== null) {
      for (n = r.child, o = nl(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; ) n = n.sibling, o = o.sibling = nl(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function ho(n, r, o) {
    switch (r.tag) {
      case 3:
        Ag(r), xu();
        break;
      case 5:
        uf(r);
        break;
      case 1:
        gr(r.type) && Ll(r);
        break;
      case 4:
        sp(r, r.stateNode.containerInfo);
        break;
      case 10:
        var s = r.type._context, h = r.memoizedProps.value;
        nn(Cu, s._currentValue), s._currentValue = h;
        break;
      case 13:
        if (s = r.memoizedState, s !== null)
          return s.dehydrated !== null ? (nn(rt, rt.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? Iv(n, r, o) : (nn(rt, rt.current & 1), n = dr(n, r, o), n !== null ? n.sibling : null);
        nn(rt, rt.current & 1);
        break;
      case 19:
        if (s = (o & r.childLanes) !== 0, n.flags & 128) {
          if (s) return mp(n, r, o);
          r.flags |= 128;
        }
        if (h = r.memoizedState, h !== null && (h.rendering = null, h.tail = null, h.lastEffect = null), nn(rt, rt.current), s) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Ta(n, r, o);
    }
    return dr(n, r, o);
  }
  var Fi, zu, Uu, ni;
  Fi = function(n, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6) n.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === r) break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r) return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, zu = function() {
  }, Uu = function(n, r, o, s) {
    var h = n.memoizedProps;
    if (h !== s) {
      n = r.stateNode, Go(zi.current);
      var m = null;
      switch (o) {
        case "input":
          h = cn(n, h), s = cn(n, s), m = [];
          break;
        case "select":
          h = k({}, h, { value: void 0 }), s = k({}, s, { value: void 0 }), m = [];
          break;
        case "textarea":
          h = vr(n, h), s = vr(n, s), m = [];
          break;
        default:
          typeof h.onClick != "function" && typeof s.onClick == "function" && (n.onclick = Zc);
      }
      Et(o, s);
      var C;
      o = null;
      for (J in h) if (!s.hasOwnProperty(J) && h.hasOwnProperty(J) && h[J] != null) if (J === "style") {
        var D = h[J];
        for (C in D) D.hasOwnProperty(C) && (o || (o = {}), o[C] = "");
      } else J !== "dangerouslySetInnerHTML" && J !== "children" && J !== "suppressContentEditableWarning" && J !== "suppressHydrationWarning" && J !== "autoFocus" && (y.hasOwnProperty(J) ? m || (m = []) : (m = m || []).push(J, null));
      for (J in s) {
        var z = s[J];
        if (D = h != null ? h[J] : void 0, s.hasOwnProperty(J) && z !== D && (z != null || D != null)) if (J === "style") if (D) {
          for (C in D) !D.hasOwnProperty(C) || z && z.hasOwnProperty(C) || (o || (o = {}), o[C] = "");
          for (C in z) z.hasOwnProperty(C) && D[C] !== z[C] && (o || (o = {}), o[C] = z[C]);
        } else o || (m || (m = []), m.push(
          J,
          o
        )), o = z;
        else J === "dangerouslySetInnerHTML" ? (z = z ? z.__html : void 0, D = D ? D.__html : void 0, z != null && D !== z && (m = m || []).push(J, z)) : J === "children" ? typeof z != "string" && typeof z != "number" || (m = m || []).push(J, "" + z) : J !== "suppressContentEditableWarning" && J !== "suppressHydrationWarning" && (y.hasOwnProperty(J) ? (z != null && J === "onScroll" && En("scroll", n), m || D === z || (m = [])) : (m = m || []).push(J, z));
      }
      o && (m = m || []).push("style", o);
      var J = m;
      (r.updateQueue = J) && (r.flags |= 4);
    }
  }, ni = function(n, r, o, s) {
    o !== s && (r.flags |= 4);
  };
  function rr(n, r) {
    if (!Un) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var o = null; r !== null; ) r.alternate !== null && (o = r), r = r.sibling;
        o === null ? n.tail = null : o.sibling = null;
        break;
      case "collapsed":
        o = n.tail;
        for (var s = null; o !== null; ) o.alternate !== null && (s = o), o = o.sibling;
        s === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : s.sibling = null;
    }
  }
  function ea(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, s = 0;
    if (r) for (var h = n.child; h !== null; ) o |= h.lanes | h.childLanes, s |= h.subtreeFlags & 14680064, s |= h.flags & 14680064, h.return = n, h = h.sibling;
    else for (h = n.child; h !== null; ) o |= h.lanes | h.childLanes, s |= h.subtreeFlags, s |= h.flags, h.return = n, h = h.sibling;
    return n.subtreeFlags |= s, n.childLanes = o, r;
  }
  function Lg(n, r, o) {
    var s = r.pendingProps;
    switch (nf(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ea(r), null;
      case 1:
        return gr(r.type) && ga(), ea(r), null;
      case 3:
        return s = r.stateNode, Du(), tt(xt), tt(Lr), ei(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (n === null || n.child === null) && (af(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ja !== null && (xp(Ja), Ja = null))), zu(n, r), ea(r), null;
      case 5:
        ct(r);
        var h = Go(Ks.current);
        if (o = r.type, n !== null && r.stateNode != null) Uu(n, r, o, s, h), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!s) {
            if (r.stateNode === null) throw Error(f(166));
            return ea(r), null;
          }
          if (n = Go(zi.current), af(r)) {
            s = r.stateNode, o = r.type;
            var m = r.memoizedProps;
            switch (s[Ga] = r, s[Ys] = m, n = (r.mode & 1) !== 0, o) {
              case "dialog":
                En("cancel", s), En("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                En("load", s);
                break;
              case "video":
              case "audio":
                for (h = 0; h < oo.length; h++) En(oo[h], s);
                break;
              case "source":
                En("error", s);
                break;
              case "img":
              case "image":
              case "link":
                En(
                  "error",
                  s
                ), En("load", s);
                break;
              case "details":
                En("toggle", s);
                break;
              case "input":
                Dn(s, m), En("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!m.multiple }, En("invalid", s);
                break;
              case "textarea":
                Or(s, m), En("invalid", s);
            }
            Et(o, m), h = null;
            for (var C in m) if (m.hasOwnProperty(C)) {
              var D = m[C];
              C === "children" ? typeof D == "string" ? s.textContent !== D && (m.suppressHydrationWarning !== !0 && $s(s.textContent, D, n), h = ["children", D]) : typeof D == "number" && s.textContent !== "" + D && (m.suppressHydrationWarning !== !0 && $s(
                s.textContent,
                D,
                n
              ), h = ["children", "" + D]) : y.hasOwnProperty(C) && D != null && C === "onScroll" && En("scroll", s);
            }
            switch (o) {
              case "input":
                Cn(s), Tn(s, m, !0);
                break;
              case "textarea":
                Cn(s), Dr(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof m.onClick == "function" && (s.onclick = Zc);
            }
            s = h, r.updateQueue = s, s !== null && (r.flags |= 4);
          } else {
            C = h.nodeType === 9 ? h : h.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Vn(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = C.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof s.is == "string" ? n = C.createElement(o, { is: s.is }) : (n = C.createElement(o), o === "select" && (C = n, s.multiple ? C.multiple = !0 : s.size && (C.size = s.size))) : n = C.createElementNS(n, o), n[Ga] = r, n[Ys] = s, Fi(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (C = wn(o, s), o) {
                case "dialog":
                  En("cancel", n), En("close", n), h = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  En("load", n), h = s;
                  break;
                case "video":
                case "audio":
                  for (h = 0; h < oo.length; h++) En(oo[h], n);
                  h = s;
                  break;
                case "source":
                  En("error", n), h = s;
                  break;
                case "img":
                case "image":
                case "link":
                  En(
                    "error",
                    n
                  ), En("load", n), h = s;
                  break;
                case "details":
                  En("toggle", n), h = s;
                  break;
                case "input":
                  Dn(n, s), h = cn(n, s), En("invalid", n);
                  break;
                case "option":
                  h = s;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!s.multiple }, h = k({}, s, { value: void 0 }), En("invalid", n);
                  break;
                case "textarea":
                  Or(n, s), h = vr(n, s), En("invalid", n);
                  break;
                default:
                  h = s;
              }
              Et(o, h), D = h;
              for (m in D) if (D.hasOwnProperty(m)) {
                var z = D[m];
                m === "style" ? gt(n, z) : m === "dangerouslySetInnerHTML" ? (z = z ? z.__html : void 0, z != null && Er(n, z)) : m === "children" ? typeof z == "string" ? (o !== "textarea" || z !== "") && lr(n, z) : typeof z == "number" && lr(n, "" + z) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (y.hasOwnProperty(m) ? z != null && m === "onScroll" && En("scroll", n) : z != null && we(n, m, z, C));
              }
              switch (o) {
                case "input":
                  Cn(n), Tn(n, s, !1);
                  break;
                case "textarea":
                  Cn(n), Dr(n);
                  break;
                case "option":
                  s.value != null && n.setAttribute("value", "" + ut(s.value));
                  break;
                case "select":
                  n.multiple = !!s.multiple, m = s.value, m != null ? Nt(n, !!s.multiple, m, !1) : s.defaultValue != null && Nt(
                    n,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof h.onClick == "function" && (n.onclick = Zc);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s = !!s.autoFocus;
                  break e;
                case "img":
                  s = !0;
                  break e;
                default:
                  s = !1;
              }
            }
            s && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return ea(r), null;
      case 6:
        if (n && r.stateNode != null) ni(n, r, n.memoizedProps, s);
        else {
          if (typeof s != "string" && r.stateNode === null) throw Error(f(166));
          if (o = Go(Ks.current), Go(zi.current), af(r)) {
            if (s = r.stateNode, o = r.memoizedProps, s[Ga] = r, (m = s.nodeValue !== o) && (n = Ua, n !== null)) switch (n.tag) {
              case 3:
                $s(s.nodeValue, o, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && $s(s.nodeValue, o, (n.mode & 1) !== 0);
            }
            m && (r.flags |= 4);
          } else s = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(s), s[Ga] = r, r.stateNode = s;
        }
        return ea(r), null;
      case 13:
        if (tt(rt), s = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Un && Fa !== null && r.mode & 1 && !(r.flags & 128)) kv(), xu(), r.flags |= 98560, m = !1;
          else if (m = af(r), s !== null && s.dehydrated !== null) {
            if (n === null) {
              if (!m) throw Error(f(318));
              if (m = r.memoizedState, m = m !== null ? m.dehydrated : null, !m) throw Error(f(317));
              m[Ga] = r;
            } else xu(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            ea(r), m = !1;
          } else Ja !== null && (xp(Ja), Ja = null), m = !0;
          if (!m) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (s = s !== null, s !== (n !== null && n.memoizedState !== null) && s && (r.child.flags |= 8192, r.mode & 1 && (n === null || rt.current & 1 ? Rr === 0 && (Rr = 3) : dc())), r.updateQueue !== null && (r.flags |= 4), ea(r), null);
      case 4:
        return Du(), zu(n, r), n === null && Di(r.stateNode.containerInfo), ea(r), null;
      case 10:
        return ip(r.type._context), ea(r), null;
      case 17:
        return gr(r.type) && ga(), ea(r), null;
      case 19:
        if (tt(rt), m = r.memoizedState, m === null) return ea(r), null;
        if (s = (r.flags & 128) !== 0, C = m.rendering, C === null) if (s) rr(m, !1);
        else {
          if (Rr !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (C = en(n), C !== null) {
              for (r.flags |= 128, rr(m, !1), s = C.updateQueue, s !== null && (r.updateQueue = s, r.flags |= 4), r.subtreeFlags = 0, s = o, o = r.child; o !== null; ) m = o, n = s, m.flags &= 14680066, C = m.alternate, C === null ? (m.childLanes = 0, m.lanes = n, m.child = null, m.subtreeFlags = 0, m.memoizedProps = null, m.memoizedState = null, m.updateQueue = null, m.dependencies = null, m.stateNode = null) : (m.childLanes = C.childLanes, m.lanes = C.lanes, m.child = C.child, m.subtreeFlags = 0, m.deletions = null, m.memoizedProps = C.memoizedProps, m.memoizedState = C.memoizedState, m.updateQueue = C.updateQueue, m.type = C.type, n = C.dependencies, m.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
              return nn(rt, rt.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          m.tail !== null && Vt() > Wu && (r.flags |= 128, s = !0, rr(m, !1), r.lanes = 4194304);
        }
        else {
          if (!s) if (n = en(C), n !== null) {
            if (r.flags |= 128, s = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), rr(m, !0), m.tail === null && m.tailMode === "hidden" && !C.alternate && !Un) return ea(r), null;
          } else 2 * Vt() - m.renderingStartTime > Wu && o !== 1073741824 && (r.flags |= 128, s = !0, rr(m, !1), r.lanes = 4194304);
          m.isBackwards ? (C.sibling = r.child, r.child = C) : (o = m.last, o !== null ? o.sibling = C : r.child = C, m.last = C);
        }
        return m.tail !== null ? (r = m.tail, m.rendering = r, m.tail = r.sibling, m.renderingStartTime = Vt(), r.sibling = null, o = rt.current, nn(rt, s ? o & 1 | 2 : o & 1), r) : (ea(r), null);
      case 22:
      case 23:
        return jf(), s = r.memoizedState !== null, n !== null && n.memoizedState !== null !== s && (r.flags |= 8192), s && r.mode & 1 ? ka & 1073741824 && (ea(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : ea(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(f(156, r.tag));
  }
  function Ng(n, r) {
    switch (nf(r), r.tag) {
      case 1:
        return gr(r.type) && ga(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Du(), tt(xt), tt(Lr), ei(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return ct(r), null;
      case 13:
        if (tt(rt), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(f(340));
          xu();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return tt(rt), null;
      case 4:
        return Du(), null;
      case 10:
        return ip(r.type._context), null;
      case 22:
      case 23:
        return jf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Fu = !1, Vr = !1, _f = typeof WeakSet == "function" ? WeakSet : Set, Ve = null;
  function ju(n, r) {
    var o = n.ref;
    if (o !== null) if (typeof o == "function") try {
      o(null);
    } catch (s) {
      ir(n, r, s);
    }
    else o.current = null;
  }
  function yp(n, r, o) {
    try {
      o();
    } catch (s) {
      ir(n, r, s);
    }
  }
  var Of = !1;
  function Mg(n, r) {
    if (Qd = pu, n = pv(), zs(n)) {
      if ("selectionStart" in n) var o = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        o = (o = n.ownerDocument) && o.defaultView || window;
        var s = o.getSelection && o.getSelection();
        if (s && s.rangeCount !== 0) {
          o = s.anchorNode;
          var h = s.anchorOffset, m = s.focusNode;
          s = s.focusOffset;
          try {
            o.nodeType, m.nodeType;
          } catch {
            o = null;
            break e;
          }
          var C = 0, D = -1, z = -1, J = 0, ve = 0, Ee = n, de = null;
          t: for (; ; ) {
            for (var Ue; Ee !== o || h !== 0 && Ee.nodeType !== 3 || (D = C + h), Ee !== m || s !== 0 && Ee.nodeType !== 3 || (z = C + s), Ee.nodeType === 3 && (C += Ee.nodeValue.length), (Ue = Ee.firstChild) !== null; )
              de = Ee, Ee = Ue;
            for (; ; ) {
              if (Ee === n) break t;
              if (de === o && ++J === h && (D = C), de === m && ++ve === s && (z = C), (Ue = Ee.nextSibling) !== null) break;
              Ee = de, de = Ee.parentNode;
            }
            Ee = Ue;
          }
          o = D === -1 || z === -1 ? null : { start: D, end: z };
        } else o = null;
      }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (Gd = { focusedElem: n, selectionRange: o }, pu = !1, Ve = r; Ve !== null; ) if (r = Ve, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Ve = n;
    else for (; Ve !== null; ) {
      r = Ve;
      try {
        var Qe = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Qe !== null) {
              var Je = Qe.memoizedProps, pr = Qe.memoizedState, Y = r.stateNode, P = Y.getSnapshotBeforeUpdate(r.elementType === r.type ? Je : ba(r.type, Je), pr);
              Y.__reactInternalSnapshotBeforeUpdate = P;
            }
            break;
          case 3:
            var Q = r.stateNode.containerInfo;
            Q.nodeType === 1 ? Q.textContent = "" : Q.nodeType === 9 && Q.documentElement && Q.removeChild(Q.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(f(163));
        }
      } catch (ke) {
        ir(r, r.return, ke);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Ve = n;
        break;
      }
      Ve = r.return;
    }
    return Qe = Of, Of = !1, Qe;
  }
  function Pu(n, r, o) {
    var s = r.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var h = s = s.next;
      do {
        if ((h.tag & n) === n) {
          var m = h.destroy;
          h.destroy = void 0, m !== void 0 && yp(r, o, m);
        }
        h = h.next;
      } while (h !== s);
    }
  }
  function Df(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & n) === n) {
          var s = o.create;
          o.destroy = s();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function Af(n) {
    var r = n.ref;
    if (r !== null) {
      var o = n.stateNode;
      switch (n.tag) {
        case 5:
          n = o;
          break;
        default:
          n = o;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Wv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Wv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ga], delete r[Ys], delete r[Jd], delete r[Rg], delete r[Tg])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function gp(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function qv(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || gp(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function uc(n, r, o) {
    var s = n.tag;
    if (s === 5 || s === 6) n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = Zc));
    else if (s !== 4 && (n = n.child, n !== null)) for (uc(n, r, o), n = n.sibling; n !== null; ) uc(n, r, o), n = n.sibling;
  }
  function Hu(n, r, o) {
    var s = n.tag;
    if (s === 5 || s === 6) n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (s !== 4 && (n = n.child, n !== null)) for (Hu(n, r, o), n = n.sibling; n !== null; ) Hu(n, r, o), n = n.sibling;
  }
  var $n = null, Nr = !1;
  function aa(n, r, o) {
    for (o = o.child; o !== null; ) $u(n, r, o), o = o.sibling;
  }
  function $u(n, r, o) {
    if (ha && typeof ha.onCommitFiberUnmount == "function") try {
      ha.onCommitFiberUnmount(Lo, o);
    } catch {
    }
    switch (o.tag) {
      case 5:
        Vr || ju(o, r);
      case 6:
        var s = $n, h = Nr;
        $n = null, aa(n, r, o), $n = s, Nr = h, $n !== null && (Nr ? (n = $n, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : $n.removeChild(o.stateNode));
        break;
      case 18:
        $n !== null && (Nr ? (n = $n, o = o.stateNode, n.nodeType === 8 ? Zd(n.parentNode, o) : n.nodeType === 1 && Zd(n, o), Qa(n)) : Zd($n, o.stateNode));
        break;
      case 4:
        s = $n, h = Nr, $n = o.stateNode.containerInfo, Nr = !0, aa(n, r, o), $n = s, Nr = h;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Vr && (s = o.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          h = s = s.next;
          do {
            var m = h, C = m.destroy;
            m = m.tag, C !== void 0 && (m & 2 || m & 4) && yp(o, r, C), h = h.next;
          } while (h !== s);
        }
        aa(n, r, o);
        break;
      case 1:
        if (!Vr && (ju(o, r), s = o.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = o.memoizedProps, s.state = o.memoizedState, s.componentWillUnmount();
        } catch (D) {
          ir(o, r, D);
        }
        aa(n, r, o);
        break;
      case 21:
        aa(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (Vr = (s = Vr) || o.memoizedState !== null, aa(n, r, o), Vr = s) : aa(n, r, o);
        break;
      default:
        aa(n, r, o);
    }
  }
  function Bu(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new _f()), r.forEach(function(s) {
        var h = $g.bind(null, n, s);
        o.has(s) || (o.add(s), s.then(h, h));
      });
    }
  }
  function Mr(n, r) {
    var o = r.deletions;
    if (o !== null) for (var s = 0; s < o.length; s++) {
      var h = o[s];
      try {
        var m = n, C = r, D = C;
        e: for (; D !== null; ) {
          switch (D.tag) {
            case 5:
              $n = D.stateNode, Nr = !1;
              break e;
            case 3:
              $n = D.stateNode.containerInfo, Nr = !0;
              break e;
            case 4:
              $n = D.stateNode.containerInfo, Nr = !0;
              break e;
          }
          D = D.return;
        }
        if ($n === null) throw Error(f(160));
        $u(m, C, h), $n = null, Nr = !1;
        var z = h.alternate;
        z !== null && (z.return = null), h.return = null;
      } catch (J) {
        ir(h, r, J);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Qv(r, n), r = r.sibling;
  }
  function Qv(n, r) {
    var o = n.alternate, s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Mr(r, n), ji(n), s & 4) {
          try {
            Pu(3, n, n.return), Df(3, n);
          } catch (Je) {
            ir(n, n.return, Je);
          }
          try {
            Pu(5, n, n.return);
          } catch (Je) {
            ir(n, n.return, Je);
          }
        }
        break;
      case 1:
        Mr(r, n), ji(n), s & 512 && o !== null && ju(o, o.return);
        break;
      case 5:
        if (Mr(r, n), ji(n), s & 512 && o !== null && ju(o, o.return), n.flags & 32) {
          var h = n.stateNode;
          try {
            lr(h, "");
          } catch (Je) {
            ir(n, n.return, Je);
          }
        }
        if (s & 4 && (h = n.stateNode, h != null)) {
          var m = n.memoizedProps, C = o !== null ? o.memoizedProps : m, D = n.type, z = n.updateQueue;
          if (n.updateQueue = null, z !== null) try {
            D === "input" && m.type === "radio" && m.name != null && Hn(h, m), wn(D, C);
            var J = wn(D, m);
            for (C = 0; C < z.length; C += 2) {
              var ve = z[C], Ee = z[C + 1];
              ve === "style" ? gt(h, Ee) : ve === "dangerouslySetInnerHTML" ? Er(h, Ee) : ve === "children" ? lr(h, Ee) : we(h, ve, Ee, J);
            }
            switch (D) {
              case "input":
                Yt(h, m);
                break;
              case "textarea":
                Bn(h, m);
                break;
              case "select":
                var de = h._wrapperState.wasMultiple;
                h._wrapperState.wasMultiple = !!m.multiple;
                var Ue = m.value;
                Ue != null ? Nt(h, !!m.multiple, Ue, !1) : de !== !!m.multiple && (m.defaultValue != null ? Nt(
                  h,
                  !!m.multiple,
                  m.defaultValue,
                  !0
                ) : Nt(h, !!m.multiple, m.multiple ? [] : "", !1));
            }
            h[Ys] = m;
          } catch (Je) {
            ir(n, n.return, Je);
          }
        }
        break;
      case 6:
        if (Mr(r, n), ji(n), s & 4) {
          if (n.stateNode === null) throw Error(f(162));
          h = n.stateNode, m = n.memoizedProps;
          try {
            h.nodeValue = m;
          } catch (Je) {
            ir(n, n.return, Je);
          }
        }
        break;
      case 3:
        if (Mr(r, n), ji(n), s & 4 && o !== null && o.memoizedState.isDehydrated) try {
          Qa(r.containerInfo);
        } catch (Je) {
          ir(n, n.return, Je);
        }
        break;
      case 4:
        Mr(r, n), ji(n);
        break;
      case 13:
        Mr(r, n), ji(n), h = n.child, h.flags & 8192 && (m = h.memoizedState !== null, h.stateNode.isHidden = m, !m || h.alternate !== null && h.alternate.memoizedState !== null || (Nf = Vt())), s & 4 && Bu(n);
        break;
      case 22:
        if (ve = o !== null && o.memoizedState !== null, n.mode & 1 ? (Vr = (J = Vr) || ve, Mr(r, n), Vr = J) : Mr(r, n), ji(n), s & 8192) {
          if (J = n.memoizedState !== null, (n.stateNode.isHidden = J) && !ve && n.mode & 1) for (Ve = n, ve = n.child; ve !== null; ) {
            for (Ee = Ve = ve; Ve !== null; ) {
              switch (de = Ve, Ue = de.child, de.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pu(4, de, de.return);
                  break;
                case 1:
                  ju(de, de.return);
                  var Qe = de.stateNode;
                  if (typeof Qe.componentWillUnmount == "function") {
                    s = de, o = de.return;
                    try {
                      r = s, Qe.props = r.memoizedProps, Qe.state = r.memoizedState, Qe.componentWillUnmount();
                    } catch (Je) {
                      ir(s, o, Je);
                    }
                  }
                  break;
                case 5:
                  ju(de, de.return);
                  break;
                case 22:
                  if (de.memoizedState !== null) {
                    Gv(Ee);
                    continue;
                  }
              }
              Ue !== null ? (Ue.return = de, Ve = Ue) : Gv(Ee);
            }
            ve = ve.sibling;
          }
          e: for (ve = null, Ee = n; ; ) {
            if (Ee.tag === 5) {
              if (ve === null) {
                ve = Ee;
                try {
                  h = Ee.stateNode, J ? (m = h.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none") : (D = Ee.stateNode, z = Ee.memoizedProps.style, C = z != null && z.hasOwnProperty("display") ? z.display : null, D.style.display = qe("display", C));
                } catch (Je) {
                  ir(n, n.return, Je);
                }
              }
            } else if (Ee.tag === 6) {
              if (ve === null) try {
                Ee.stateNode.nodeValue = J ? "" : Ee.memoizedProps;
              } catch (Je) {
                ir(n, n.return, Je);
              }
            } else if ((Ee.tag !== 22 && Ee.tag !== 23 || Ee.memoizedState === null || Ee === n) && Ee.child !== null) {
              Ee.child.return = Ee, Ee = Ee.child;
              continue;
            }
            if (Ee === n) break e;
            for (; Ee.sibling === null; ) {
              if (Ee.return === null || Ee.return === n) break e;
              ve === Ee && (ve = null), Ee = Ee.return;
            }
            ve === Ee && (ve = null), Ee.sibling.return = Ee.return, Ee = Ee.sibling;
          }
        }
        break;
      case 19:
        Mr(r, n), ji(n), s & 4 && Bu(n);
        break;
      case 21:
        break;
      default:
        Mr(
          r,
          n
        ), ji(n);
    }
  }
  function ji(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (gp(o)) {
              var s = o;
              break e;
            }
            o = o.return;
          }
          throw Error(f(160));
        }
        switch (s.tag) {
          case 5:
            var h = s.stateNode;
            s.flags & 32 && (lr(h, ""), s.flags &= -33);
            var m = qv(n);
            Hu(n, m, h);
            break;
          case 3:
          case 4:
            var C = s.stateNode.containerInfo, D = qv(n);
            uc(n, D, C);
            break;
          default:
            throw Error(f(161));
        }
      } catch (z) {
        ir(n, n.return, z);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function zg(n, r, o) {
    Ve = n, Sp(n);
  }
  function Sp(n, r, o) {
    for (var s = (n.mode & 1) !== 0; Ve !== null; ) {
      var h = Ve, m = h.child;
      if (h.tag === 22 && s) {
        var C = h.memoizedState !== null || Fu;
        if (!C) {
          var D = h.alternate, z = D !== null && D.memoizedState !== null || Vr;
          D = Fu;
          var J = Vr;
          if (Fu = C, (Vr = z) && !J) for (Ve = h; Ve !== null; ) C = Ve, z = C.child, C.tag === 22 && C.memoizedState !== null ? wp(h) : z !== null ? (z.return = C, Ve = z) : wp(h);
          for (; m !== null; ) Ve = m, Sp(m), m = m.sibling;
          Ve = h, Fu = D, Vr = J;
        }
        Vu(n);
      } else h.subtreeFlags & 8772 && m !== null ? (m.return = h, Ve = m) : Vu(n);
    }
  }
  function Vu(n) {
    for (; Ve !== null; ) {
      var r = Ve;
      if (r.flags & 8772) {
        var o = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Vr || Df(5, r);
              break;
            case 1:
              var s = r.stateNode;
              if (r.flags & 4 && !Vr) if (o === null) s.componentDidMount();
              else {
                var h = r.elementType === r.type ? o.memoizedProps : ba(r.type, o.memoizedProps);
                s.componentDidUpdate(h, o.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
              }
              var m = r.updateQueue;
              m !== null && Tu(r, m, s);
              break;
            case 3:
              var C = r.updateQueue;
              if (C !== null) {
                if (o = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    o = r.child.stateNode;
                    break;
                  case 1:
                    o = r.child.stateNode;
                }
                Tu(r, C, o);
              }
              break;
            case 5:
              var D = r.stateNode;
              if (o === null && r.flags & 4) {
                o = D;
                var z = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    z.autoFocus && o.focus();
                    break;
                  case "img":
                    z.src && (o.src = z.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var J = r.alternate;
                if (J !== null) {
                  var ve = J.memoizedState;
                  if (ve !== null) {
                    var Ee = ve.dehydrated;
                    Ee !== null && Qa(Ee);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(f(163));
          }
          Vr || r.flags & 512 && Af(r);
        } catch (de) {
          ir(r, r.return, de);
        }
      }
      if (r === n) {
        Ve = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, Ve = o;
        break;
      }
      Ve = r.return;
    }
  }
  function Gv(n) {
    for (; Ve !== null; ) {
      var r = Ve;
      if (r === n) {
        Ve = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, Ve = o;
        break;
      }
      Ve = r.return;
    }
  }
  function wp(n) {
    for (; Ve !== null; ) {
      var r = Ve;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              Df(4, r);
            } catch (z) {
              ir(r, o, z);
            }
            break;
          case 1:
            var s = r.stateNode;
            if (typeof s.componentDidMount == "function") {
              var h = r.return;
              try {
                s.componentDidMount();
              } catch (z) {
                ir(r, h, z);
              }
            }
            var m = r.return;
            try {
              Af(r);
            } catch (z) {
              ir(r, m, z);
            }
            break;
          case 5:
            var C = r.return;
            try {
              Af(r);
            } catch (z) {
              ir(r, C, z);
            }
        }
      } catch (z) {
        ir(r, r.return, z);
      }
      if (r === n) {
        Ve = null;
        break;
      }
      var D = r.sibling;
      if (D !== null) {
        D.return = r.return, Ve = D;
        break;
      }
      Ve = r.return;
    }
  }
  var Ug = Math.ceil, Yl = ge.ReactCurrentDispatcher, Lf = ge.ReactCurrentOwner, ri = ge.ReactCurrentBatchConfig, $t = 0, ar = null, Fn = null, Cr = 0, ka = 0, Iu = bn(0), Rr = 0, sc = null, Wl = 0, Yu = 0, Ep = 0, el = null, ta = null, Nf = 0, Wu = 1 / 0, vo = null, Mf = !1, bp = null, ai = null, qu = !1, ii = null, zf = 0, cc = 0, Uf = null, fc = -1, ql = 0;
  function zr() {
    return $t & 6 ? Vt() : fc !== -1 ? fc : fc = Vt();
  }
  function mo(n) {
    return n.mode & 1 ? $t & 2 && Cr !== 0 ? Cr & -Cr : kg.transition !== null ? (ql === 0 && (ql = xl()), ql) : (n = It, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ks(n.type)), n) : 1;
  }
  function Kn(n, r, o, s) {
    if (50 < cc) throw cc = 0, Uf = null, Error(f(185));
    Mo(n, o, s), (!($t & 2) || n !== ar) && (n === ar && (!($t & 2) && (Yu |= o), Rr === 4 && Pi(n, Cr)), Tr(n, s), o === 1 && $t === 0 && !(r.mode & 1) && (Wu = Vt() + 500, Vo && Ni()));
  }
  function Tr(n, r) {
    var o = n.callbackNode;
    No(n, r);
    var s = ki(n, n === ar ? Cr : 0);
    if (s === 0) o !== null && hn(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = s & -s, n.callbackPriority !== r) {
      if (o != null && hn(o), r === 1) n.tag === 0 ? Tv(Qu.bind(null, n)) : ef(Qu.bind(null, n)), Cv(function() {
        !($t & 6) && Ni();
      }), o = null;
      else {
        switch (Cs(s)) {
          case 1:
            o = hi;
            break;
          case 4:
            o = Ya;
            break;
          case 16:
            o = Tt;
            break;
          case 536870912:
            o = Xi;
            break;
          default:
            o = Tt;
        }
        o = rm(o, Ff.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function Ff(n, r) {
    if (fc = -1, ql = 0, $t & 6) throw Error(f(327));
    var o = n.callbackNode;
    if (Gu() && n.callbackNode !== o) return null;
    var s = ki(n, n === ar ? Cr : 0);
    if (s === 0) return null;
    if (s & 30 || s & n.expiredLanes || r) r = Pf(n, s);
    else {
      r = s;
      var h = $t;
      $t |= 2;
      var m = Xv();
      (ar !== n || Cr !== r) && (vo = null, Wu = Vt() + 500, Gl(n, r));
      do
        try {
          jg();
          break;
        } catch (D) {
          Kv(n, D);
        }
      while (!0);
      ap(), Yl.current = m, $t = h, Fn !== null ? r = 0 : (ar = null, Cr = 0, r = Rr);
    }
    if (r !== 0) {
      if (r === 2 && (h = _i(n), h !== 0 && (s = h, r = Ql(n, h))), r === 1) throw o = sc, Gl(n, 0), Pi(n, s), Tr(n, Vt()), o;
      if (r === 6) Pi(n, s);
      else {
        if (h = n.current.alternate, !(s & 30) && !Cp(h) && (r = Pf(n, s), r === 2 && (m = _i(n), m !== 0 && (s = m, r = Ql(n, m))), r === 1)) throw o = sc, Gl(n, 0), Pi(n, s), Tr(n, Vt()), o;
        switch (n.finishedWork = h, n.finishedLanes = s, r) {
          case 0:
          case 1:
            throw Error(f(345));
          case 2:
            tl(n, ta, vo);
            break;
          case 3:
            if (Pi(n, s), (s & 130023424) === s && (r = Nf + 500 - Vt(), 10 < r)) {
              if (ki(n, 0) !== 0) break;
              if (h = n.suspendedLanes, (h & s) !== s) {
                zr(), n.pingedLanes |= n.suspendedLanes & h;
                break;
              }
              n.timeoutHandle = Bs(tl.bind(null, n, ta, vo), r);
              break;
            }
            tl(n, ta, vo);
            break;
          case 4:
            if (Pi(n, s), (s & 4194240) === s) break;
            for (r = n.eventTimes, h = -1; 0 < s; ) {
              var C = 31 - na(s);
              m = 1 << C, C = r[C], C > h && (h = C), s &= ~m;
            }
            if (s = h, s = Vt() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * Ug(s / 1960)) - s, 10 < s) {
              n.timeoutHandle = Bs(tl.bind(null, n, ta, vo), s);
              break;
            }
            tl(n, ta, vo);
            break;
          case 5:
            tl(n, ta, vo);
            break;
          default:
            throw Error(f(329));
        }
      }
    }
    return Tr(n, Vt()), n.callbackNode === o ? Ff.bind(null, n) : null;
  }
  function Ql(n, r) {
    var o = el;
    return n.current.memoizedState.isDehydrated && (Gl(n, r).flags |= 256), n = Pf(n, r), n !== 2 && (r = ta, ta = o, r !== null && xp(r)), n;
  }
  function xp(n) {
    ta === null ? ta = n : ta.push.apply(ta, n);
  }
  function Cp(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null)) for (var s = 0; s < o.length; s++) {
          var h = o[s], m = h.getSnapshot;
          h = h.value;
          try {
            if (!gi(m(), h)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (o = r.child, r.subtreeFlags & 16384 && o !== null) o.return = r, r = o;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Pi(n, r) {
    for (r &= ~Ep, r &= ~Yu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - na(r), s = 1 << o;
      n[o] = -1, r &= ~s;
    }
  }
  function Qu(n) {
    if ($t & 6) throw Error(f(327));
    Gu();
    var r = ki(n, 0);
    if (!(r & 1)) return Tr(n, Vt()), null;
    var o = Pf(n, r);
    if (n.tag !== 0 && o === 2) {
      var s = _i(n);
      s !== 0 && (r = s, o = Ql(n, s));
    }
    if (o === 1) throw o = sc, Gl(n, 0), Pi(n, r), Tr(n, Vt()), o;
    if (o === 6) throw Error(f(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, tl(n, ta, vo), Tr(n, Vt()), null;
  }
  function Rp(n, r) {
    var o = $t;
    $t |= 1;
    try {
      return n(r);
    } finally {
      $t = o, $t === 0 && (Wu = Vt() + 500, Vo && Ni());
    }
  }
  function Hi(n) {
    ii !== null && ii.tag === 0 && !($t & 6) && Gu();
    var r = $t;
    $t |= 1;
    var o = ri.transition, s = It;
    try {
      if (ri.transition = null, It = 1, n) return n();
    } finally {
      It = s, ri.transition = o, $t = r, !($t & 6) && Ni();
    }
  }
  function jf() {
    ka = Iu.current, tt(Iu);
  }
  function Gl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, Vs(o)), Fn !== null) for (o = Fn.return; o !== null; ) {
      var s = o;
      switch (nf(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && ga();
          break;
        case 3:
          Du(), tt(xt), tt(Lr), ei();
          break;
        case 5:
          ct(s);
          break;
        case 4:
          Du();
          break;
        case 13:
          tt(rt);
          break;
        case 19:
          tt(rt);
          break;
        case 10:
          ip(s.type._context);
          break;
        case 22:
        case 23:
          jf();
      }
      o = o.return;
    }
    if (ar = n, Fn = n = nl(n.current, null), Cr = ka = r, Rr = 0, sc = null, Ep = Yu = Wl = 0, ta = el = null, Jr !== null) {
      for (r = 0; r < Jr.length; r++) if (o = Jr[r], s = o.interleaved, s !== null) {
        o.interleaved = null;
        var h = s.next, m = o.pending;
        if (m !== null) {
          var C = m.next;
          m.next = h, s.next = C;
        }
        o.pending = s;
      }
      Jr = null;
    }
    return n;
  }
  function Kv(n, r) {
    do {
      var o = Fn;
      try {
        if (ap(), Xs.current = bf, cr) {
          for (var s = Gn.memoizedState; s !== null; ) {
            var h = s.queue;
            h !== null && (h.pending = null), s = s.next;
          }
          cr = !1;
        }
        if (Ul = 0, ie = sr = Gn = null, pt = !1, Ui = 0, Lf.current = null, o === null || o.return === null) {
          Rr = 1, sc = r, Fn = null;
          break;
        }
        e: {
          var m = n, C = o.return, D = o, z = r;
          if (r = Cr, D.flags |= 32768, z !== null && typeof z == "object" && typeof z.then == "function") {
            var J = z, ve = D, Ee = ve.tag;
            if (!(ve.mode & 1) && (Ee === 0 || Ee === 11 || Ee === 15)) {
              var de = ve.alternate;
              de ? (ve.updateQueue = de.updateQueue, ve.memoizedState = de.memoizedState, ve.lanes = de.lanes) : (ve.updateQueue = null, ve.memoizedState = null);
            }
            var Ue = $v(C);
            if (Ue !== null) {
              Ue.flags &= -257, hp(Ue, C, D, m, r), Ue.mode & 1 && ac(m, J, r), r = Ue, z = J;
              var Qe = r.updateQueue;
              if (Qe === null) {
                var Je = /* @__PURE__ */ new Set();
                Je.add(z), r.updateQueue = Je;
              } else Qe.add(z);
              break e;
            } else {
              if (!(r & 1)) {
                ac(m, J, r), dc();
                break e;
              }
              z = Error(f(426));
            }
          } else if (Un && D.mode & 1) {
            var pr = $v(C);
            if (pr !== null) {
              !(pr.flags & 65536) && (pr.flags |= 256), hp(pr, C, D, m, r), Sr(Zo(z, D));
              break e;
            }
          }
          m = z = Zo(z, D), Rr !== 4 && (Rr = 2), el === null ? el = [m] : el.push(m), m = C;
          do {
            switch (m.tag) {
              case 3:
                m.flags |= 65536, r &= -r, m.lanes |= r;
                var Y = Pv(m, z, r);
                Dv(m, Y);
                break e;
              case 1:
                D = z;
                var P = m.type, Q = m.stateNode;
                if (!(m.flags & 128) && (typeof P.getDerivedStateFromError == "function" || Q !== null && typeof Q.componentDidCatch == "function" && (ai === null || !ai.has(Q)))) {
                  m.flags |= 65536, r &= -r, m.lanes |= r;
                  var ke = Hv(m, D, r);
                  Dv(m, ke);
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        Jv(o);
      } catch (nt) {
        r = nt, Fn === o && o !== null && (Fn = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Xv() {
    var n = Yl.current;
    return Yl.current = bf, n === null ? bf : n;
  }
  function dc() {
    (Rr === 0 || Rr === 3 || Rr === 2) && (Rr = 4), ar === null || !(Wl & 268435455) && !(Yu & 268435455) || Pi(ar, Cr);
  }
  function Pf(n, r) {
    var o = $t;
    $t |= 2;
    var s = Xv();
    (ar !== n || Cr !== r) && (vo = null, Gl(n, r));
    do
      try {
        Fg();
        break;
      } catch (h) {
        Kv(n, h);
      }
    while (!0);
    if (ap(), $t = o, Yl.current = s, Fn !== null) throw Error(f(261));
    return ar = null, Cr = 0, Rr;
  }
  function Fg() {
    for (; Fn !== null; ) Zv(Fn);
  }
  function jg() {
    for (; Fn !== null && !xr(); ) Zv(Fn);
  }
  function Zv(n) {
    var r = nm(n.alternate, n, ka);
    n.memoizedProps = n.pendingProps, r === null ? Jv(n) : Fn = r, Lf.current = null;
  }
  function Jv(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = Ng(o, r), o !== null) {
          o.flags &= 32767, Fn = o;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Rr = 6, Fn = null;
          return;
        }
      } else if (o = Lg(o, r, ka), o !== null) {
        Fn = o;
        return;
      }
      if (r = r.sibling, r !== null) {
        Fn = r;
        return;
      }
      Fn = r = n;
    } while (r !== null);
    Rr === 0 && (Rr = 5);
  }
  function tl(n, r, o) {
    var s = It, h = ri.transition;
    try {
      ri.transition = null, It = 1, Pg(n, r, o, s);
    } finally {
      ri.transition = h, It = s;
    }
    return null;
  }
  function Pg(n, r, o, s) {
    do
      Gu();
    while (ii !== null);
    if ($t & 6) throw Error(f(327));
    o = n.finishedWork;
    var h = n.finishedLanes;
    if (o === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current) throw Error(f(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var m = o.lanes | o.childLanes;
    if (bs(n, m), n === ar && (Fn = ar = null, Cr = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || qu || (qu = !0, rm(Tt, function() {
      return Gu(), null;
    })), m = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || m) {
      m = ri.transition, ri.transition = null;
      var C = It;
      It = 1;
      var D = $t;
      $t |= 4, Lf.current = null, Mg(n, o), Qv(o, n), _l(Gd), pu = !!Qd, Gd = Qd = null, n.current = o, zg(o), zt(), $t = D, It = C, ri.transition = m;
    } else n.current = o;
    if (qu && (qu = !1, ii = n, zf = h), m = n.pendingLanes, m === 0 && (ai = null), gs(o.stateNode), Tr(n, Vt()), r !== null) for (s = n.onRecoverableError, o = 0; o < r.length; o++) h = r[o], s(h.value, { componentStack: h.stack, digest: h.digest });
    if (Mf) throw Mf = !1, n = bp, bp = null, n;
    return zf & 1 && n.tag !== 0 && Gu(), m = n.pendingLanes, m & 1 ? n === Uf ? cc++ : (cc = 0, Uf = n) : cc = 0, Ni(), null;
  }
  function Gu() {
    if (ii !== null) {
      var n = Cs(zf), r = ri.transition, o = It;
      try {
        if (ri.transition = null, It = 16 > n ? 16 : n, ii === null) var s = !1;
        else {
          if (n = ii, ii = null, zf = 0, $t & 6) throw Error(f(331));
          var h = $t;
          for ($t |= 4, Ve = n.current; Ve !== null; ) {
            var m = Ve, C = m.child;
            if (Ve.flags & 16) {
              var D = m.deletions;
              if (D !== null) {
                for (var z = 0; z < D.length; z++) {
                  var J = D[z];
                  for (Ve = J; Ve !== null; ) {
                    var ve = Ve;
                    switch (ve.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Pu(8, ve, m);
                    }
                    var Ee = ve.child;
                    if (Ee !== null) Ee.return = ve, Ve = Ee;
                    else for (; Ve !== null; ) {
                      ve = Ve;
                      var de = ve.sibling, Ue = ve.return;
                      if (Wv(ve), ve === J) {
                        Ve = null;
                        break;
                      }
                      if (de !== null) {
                        de.return = Ue, Ve = de;
                        break;
                      }
                      Ve = Ue;
                    }
                  }
                }
                var Qe = m.alternate;
                if (Qe !== null) {
                  var Je = Qe.child;
                  if (Je !== null) {
                    Qe.child = null;
                    do {
                      var pr = Je.sibling;
                      Je.sibling = null, Je = pr;
                    } while (Je !== null);
                  }
                }
                Ve = m;
              }
            }
            if (m.subtreeFlags & 2064 && C !== null) C.return = m, Ve = C;
            else e: for (; Ve !== null; ) {
              if (m = Ve, m.flags & 2048) switch (m.tag) {
                case 0:
                case 11:
                case 15:
                  Pu(9, m, m.return);
              }
              var Y = m.sibling;
              if (Y !== null) {
                Y.return = m.return, Ve = Y;
                break e;
              }
              Ve = m.return;
            }
          }
          var P = n.current;
          for (Ve = P; Ve !== null; ) {
            C = Ve;
            var Q = C.child;
            if (C.subtreeFlags & 2064 && Q !== null) Q.return = C, Ve = Q;
            else e: for (C = P; Ve !== null; ) {
              if (D = Ve, D.flags & 2048) try {
                switch (D.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Df(9, D);
                }
              } catch (nt) {
                ir(D, D.return, nt);
              }
              if (D === C) {
                Ve = null;
                break e;
              }
              var ke = D.sibling;
              if (ke !== null) {
                ke.return = D.return, Ve = ke;
                break e;
              }
              Ve = D.return;
            }
          }
          if ($t = h, Ni(), ha && typeof ha.onPostCommitFiberRoot == "function") try {
            ha.onPostCommitFiberRoot(Lo, n);
          } catch {
          }
          s = !0;
        }
        return s;
      } finally {
        It = o, ri.transition = r;
      }
    }
    return !1;
  }
  function em(n, r, o) {
    r = Zo(o, r), r = Pv(n, r, 1), n = Qo(n, r, 1), r = zr(), n !== null && (Mo(n, 1, r), Tr(n, r));
  }
  function ir(n, r, o) {
    if (n.tag === 3) em(n, n, o);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        em(r, n, o);
        break;
      } else if (r.tag === 1) {
        var s = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (ai === null || !ai.has(s))) {
          n = Zo(o, n), n = Hv(r, n, 1), r = Qo(r, n, 1), n = zr(), r !== null && (Mo(r, 1, n), Tr(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Hg(n, r, o) {
    var s = n.pingCache;
    s !== null && s.delete(r), r = zr(), n.pingedLanes |= n.suspendedLanes & o, ar === n && (Cr & o) === o && (Rr === 4 || Rr === 3 && (Cr & 130023424) === Cr && 500 > Vt() - Nf ? Gl(n, 0) : Ep |= o), Tr(n, r);
  }
  function tm(n, r) {
    r === 0 && (n.mode & 1 ? (r = su, su <<= 1, !(su & 130023424) && (su = 4194304)) : r = 1);
    var o = zr();
    n = fo(n, r), n !== null && (Mo(n, r, o), Tr(n, o));
  }
  function Tp(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), tm(n, o);
  }
  function $g(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var s = n.stateNode, h = n.memoizedState;
        h !== null && (o = h.retryLane);
        break;
      case 19:
        s = n.stateNode;
        break;
      default:
        throw Error(f(314));
    }
    s !== null && s.delete(r), tm(n, o);
  }
  var nm;
  nm = function(n, r, o) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || xt.current) Ra = !0;
    else {
      if (!(n.lanes & o) && !(r.flags & 128)) return Ra = !1, ho(n, r, o);
      Ra = !!(n.flags & 131072);
    }
    else Ra = !1, Un && r.flags & 1048576 && Yo(r, Nl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var s = r.type;
        lc(n, r), n = r.pendingProps;
        var h = za(r, Lr.current);
        ur(r, o), h = Fl(null, r, s, n, h, o);
        var m = Ko();
        return r.flags |= 1, typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, gr(s) ? (m = !0, Ll(r)) : m = !1, r.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, op(r), h.updater = lf, r.stateNode = h, h._reactInternals = r, up(r, s, n, o), r = Cf(null, r, s, !0, m, o)) : (r.tag = 0, Un && m && tf(r), fr(null, r, h, o), r = r.child), r;
      case 16:
        s = r.elementType;
        e: {
          switch (lc(n, r), n = r.pendingProps, h = s._init, s = h(s._payload), r.type = s, h = r.tag = Bg(s), n = ba(s, n), h) {
            case 0:
              r = Ot(null, r, s, n, o);
              break e;
            case 1:
              r = ic(null, r, s, n, o);
              break e;
            case 11:
              r = Mu(null, r, s, n, o);
              break e;
            case 14:
              r = Jo(null, r, s, ba(s.type, n), o);
              break e;
          }
          throw Error(f(
            306,
            s,
            ""
          ));
        }
        return r;
      case 0:
        return s = r.type, h = r.pendingProps, h = r.elementType === s ? h : ba(s, h), Ot(n, r, s, h, o);
      case 1:
        return s = r.type, h = r.pendingProps, h = r.elementType === s ? h : ba(s, h), ic(n, r, s, h, o);
      case 3:
        e: {
          if (Ag(r), n === null) throw Error(f(387));
          s = r.pendingProps, m = r.memoizedState, h = m.element, Ov(n, r), qs(r, s, null, o);
          var C = r.memoizedState;
          if (s = C.element, m.isDehydrated) if (m = { element: s, isDehydrated: !1, cache: C.cache, pendingSuspenseBoundaries: C.pendingSuspenseBoundaries, transitions: C.transitions }, r.updateQueue.baseState = m, r.memoizedState = m, r.flags & 256) {
            h = Zo(Error(f(423)), r), r = Vv(n, r, s, o, h);
            break e;
          } else if (s !== h) {
            h = Zo(Error(f(424)), r), r = Vv(n, r, s, o, h);
            break e;
          } else for (Fa = Ma(r.stateNode.containerInfo.firstChild), Ua = r, Un = !0, Ja = null, o = Uv(r, null, s, o), r.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (xu(), s === h) {
              r = dr(n, r, o);
              break e;
            }
            fr(n, r, s, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return uf(r), n === null && rf(r), s = r.type, h = r.pendingProps, m = n !== null ? n.memoizedProps : null, C = h.children, Al(s, h) ? C = null : m !== null && Al(s, m) && (r.flags |= 32), Vl(n, r), fr(n, r, C, o), r.child;
      case 6:
        return n === null && rf(r), null;
      case 13:
        return Iv(n, r, o);
      case 4:
        return sp(r, r.stateNode.containerInfo), s = r.pendingProps, n === null ? r.child = _u(r, null, s, o) : fr(n, r, s, o), r.child;
      case 11:
        return s = r.type, h = r.pendingProps, h = r.elementType === s ? h : ba(s, h), Mu(n, r, s, h, o);
      case 7:
        return fr(n, r, r.pendingProps, o), r.child;
      case 8:
        return fr(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return fr(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (s = r.type._context, h = r.pendingProps, m = r.memoizedProps, C = h.value, nn(Cu, s._currentValue), s._currentValue = C, m !== null) if (gi(m.value, C)) {
            if (m.children === h.children && !xt.current) {
              r = dr(n, r, o);
              break e;
            }
          } else for (m = r.child, m !== null && (m.return = r); m !== null; ) {
            var D = m.dependencies;
            if (D !== null) {
              C = m.child;
              for (var z = D.firstContext; z !== null; ) {
                if (z.context === s) {
                  if (m.tag === 1) {
                    z = kn(-1, o & -o), z.tag = 2;
                    var J = m.updateQueue;
                    if (J !== null) {
                      J = J.shared;
                      var ve = J.pending;
                      ve === null ? z.next = z : (z.next = ve.next, ve.next = z), J.pending = z;
                    }
                  }
                  m.lanes |= o, z = m.alternate, z !== null && (z.lanes |= o), Wo(
                    m.return,
                    o,
                    r
                  ), D.lanes |= o;
                  break;
                }
                z = z.next;
              }
            } else if (m.tag === 10) C = m.type === r.type ? null : m.child;
            else if (m.tag === 18) {
              if (C = m.return, C === null) throw Error(f(341));
              C.lanes |= o, D = C.alternate, D !== null && (D.lanes |= o), Wo(C, o, r), C = m.sibling;
            } else C = m.child;
            if (C !== null) C.return = m;
            else for (C = m; C !== null; ) {
              if (C === r) {
                C = null;
                break;
              }
              if (m = C.sibling, m !== null) {
                m.return = C.return, C = m;
                break;
              }
              C = C.return;
            }
            m = C;
          }
          fr(n, r, h.children, o), r = r.child;
        }
        return r;
      case 9:
        return h = r.type, s = r.pendingProps.children, ur(r, o), h = Oe(h), s = s(h), r.flags |= 1, fr(n, r, s, o), r.child;
      case 14:
        return s = r.type, h = ba(s, r.pendingProps), h = ba(s.type, h), Jo(n, r, s, h, o);
      case 15:
        return xf(n, r, r.type, r.pendingProps, o);
      case 17:
        return s = r.type, h = r.pendingProps, h = r.elementType === s ? h : ba(s, h), lc(n, r), r.tag = 1, gr(s) ? (n = !0, Ll(r)) : n = !1, ur(r, o), Lv(r, s, h), up(r, s, h, o), Cf(null, r, s, !0, n, o);
      case 19:
        return mp(n, r, o);
      case 22:
        return Ta(n, r, o);
    }
    throw Error(f(156, r.tag));
  };
  function rm(n, r) {
    return pn(n, r);
  }
  function am(n, r, o, s) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function oi(n, r, o, s) {
    return new am(n, r, o, s);
  }
  function kp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Bg(n) {
    if (typeof n == "function") return kp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === ee) return 11;
      if (n === me) return 14;
    }
    return 2;
  }
  function nl(n, r) {
    var o = n.alternate;
    return o === null ? (o = oi(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function Hf(n, r, o, s, h, m) {
    var C = 2;
    if (s = n, typeof n == "function") kp(n) && (C = 1);
    else if (typeof n == "string") C = 5;
    else e: switch (n) {
      case De:
        return Kl(o.children, h, m, r);
      case We:
        C = 8, h |= 8;
        break;
      case Ut:
        return n = oi(12, o, r, h | 2), n.elementType = Ut, n.lanes = m, n;
      case pe:
        return n = oi(13, o, r, h), n.elementType = pe, n.lanes = m, n;
      case ne:
        return n = oi(19, o, r, h), n.elementType = ne, n.lanes = m, n;
      case he:
        return $f(o, h, m, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Dt:
            C = 10;
            break e;
          case B:
            C = 9;
            break e;
          case ee:
            C = 11;
            break e;
          case me:
            C = 14;
            break e;
          case Se:
            C = 16, s = null;
            break e;
        }
        throw Error(f(130, n == null ? n : typeof n, ""));
    }
    return r = oi(C, o, r, h), r.elementType = n, r.type = s, r.lanes = m, r;
  }
  function Kl(n, r, o, s) {
    return n = oi(7, n, s, r), n.lanes = o, n;
  }
  function $f(n, r, o, s) {
    return n = oi(22, n, s, r), n.elementType = he, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function Bf(n, r, o) {
    return n = oi(6, n, null, r), n.lanes = o, n;
  }
  function pc(n, r, o) {
    return r = oi(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function hc(n, r, o, s, h) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Cl(0), this.expirationTimes = Cl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Cl(0), this.identifierPrefix = s, this.onRecoverableError = h, this.mutableSourceEagerHydrationData = null;
  }
  function _p(n, r, o, s, h, m, C, D, z) {
    return n = new hc(n, r, o, D, z), r === 1 ? (r = 1, m === !0 && (r |= 8)) : r = 0, m = oi(3, null, null, r), n.current = m, m.stateNode = n, m.memoizedState = { element: s, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, op(m), n;
  }
  function im(n, r, o) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: be, key: s == null ? null : "" + s, children: n, containerInfo: r, implementation: o };
  }
  function Op(n) {
    if (!n) return Ka;
    n = n._reactInternals;
    e: {
      if (ye(n) !== n || n.tag !== 1) throw Error(f(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (gr(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(f(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (gr(o)) return Bo(n, o, r);
    }
    return r;
  }
  function Dp(n, r, o, s, h, m, C, D, z) {
    return n = _p(o, s, !0, n, h, m, C, D, z), n.context = Op(null), o = n.current, s = zr(), h = mo(o), m = kn(s, h), m.callback = r ?? null, Qo(o, m, h), n.current.lanes = h, Mo(n, h, s), Tr(n, s), n;
  }
  function Vf(n, r, o, s) {
    var h = r.current, m = zr(), C = mo(h);
    return o = Op(o), r.context === null ? r.context = o : r.pendingContext = o, r = kn(m, C), r.payload = { element: n }, s = s === void 0 ? null : s, s !== null && (r.callback = s), n = Qo(h, r, C), n !== null && (Kn(n, h, C, m), of(n, h, C)), C;
  }
  function vc(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function om(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function Ap(n, r) {
    om(n, r), (n = n.alternate) && om(n, r);
  }
  function Vg() {
    return null;
  }
  var Lp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function If(n) {
    this._internalRoot = n;
  }
  mc.prototype.render = If.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(f(409));
    Vf(n, r, null, null);
  }, mc.prototype.unmount = If.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Hi(function() {
        Vf(null, n, null, null);
      }), r[Si] = null;
    }
  };
  function mc(n) {
    this._internalRoot = n;
  }
  mc.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Kt();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < Mn.length && r !== 0 && r < Mn[o].priority; o++) ;
      Mn.splice(o, 0, n), o === 0 && mi(n);
    }
  };
  function rl(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Yf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function lm() {
  }
  function Ig(n, r, o, s, h) {
    if (h) {
      if (typeof s == "function") {
        var m = s;
        s = function() {
          var J = vc(C);
          m.call(J);
        };
      }
      var C = Dp(r, s, n, 0, null, !1, !1, "", lm);
      return n._reactRootContainer = C, n[Si] = C.current, Di(n.nodeType === 8 ? n.parentNode : n), Hi(), C;
    }
    for (; h = n.lastChild; ) n.removeChild(h);
    if (typeof s == "function") {
      var D = s;
      s = function() {
        var J = vc(z);
        D.call(J);
      };
    }
    var z = _p(n, 0, !1, null, null, !1, !1, "", lm);
    return n._reactRootContainer = z, n[Si] = z.current, Di(n.nodeType === 8 ? n.parentNode : n), Hi(function() {
      Vf(r, z, o, s);
    }), z;
  }
  function Wf(n, r, o, s, h) {
    var m = o._reactRootContainer;
    if (m) {
      var C = m;
      if (typeof h == "function") {
        var D = h;
        h = function() {
          var z = vc(C);
          D.call(z);
        };
      }
      Vf(r, C, n, h);
    } else C = Ig(o, r, n, h, s);
    return vc(C);
  }
  cu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = Zi(r.pendingLanes);
          o !== 0 && (xs(r, o | 1), Tr(r, Vt()), !($t & 6) && (Wu = Vt() + 500, Ni()));
        }
        break;
      case 13:
        Hi(function() {
          var s = fo(n, 1);
          if (s !== null) {
            var h = zr();
            Kn(s, n, 1, h);
          }
        }), Ap(n, 1);
    }
  }, zo = function(n) {
    if (n.tag === 13) {
      var r = fo(n, 134217728);
      if (r !== null) {
        var o = zr();
        Kn(r, n, 134217728, o);
      }
      Ap(n, 134217728);
    }
  }, Rs = function(n) {
    if (n.tag === 13) {
      var r = mo(n), o = fo(n, r);
      if (o !== null) {
        var s = zr();
        Kn(o, n, r, s);
      }
      Ap(n, r);
    }
  }, Kt = function() {
    return It;
  }, fu = function(n, r) {
    var o = It;
    try {
      return It = n, r();
    } finally {
      It = o;
    }
  }, Wt = function(n, r, o) {
    switch (r) {
      case "input":
        if (Yt(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; ) o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var s = o[r];
            if (s !== n && s.form === n.form) {
              var h = Jc(s);
              if (!h) throw Error(f(90));
              Rn(s), Yt(s, h);
            }
          }
        }
        break;
      case "textarea":
        Bn(n, o);
        break;
      case "select":
        r = o.value, r != null && Nt(n, !!o.multiple, r, !1);
    }
  }, dn = Rp, Yn = Hi;
  var Yg = { usingClientEntryPoint: !1, Events: [Ai, bu, Jc, jr, Pr, Rp] }, yc = { findFiberByHostInstance: so, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, um = { bundleType: yc.bundleType, version: yc.version, rendererPackageName: yc.rendererPackageName, rendererConfig: yc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ge.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = it(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: yc.findFiberByHostInstance || Vg, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var qf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!qf.isDisabled && qf.supportsFiber) try {
      Lo = qf.inject(um), ha = qf;
    } catch {
    }
  }
  return di.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yg, di.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!rl(r)) throw Error(f(200));
    return im(n, r, null, o);
  }, di.createRoot = function(n, r) {
    if (!rl(n)) throw Error(f(299));
    var o = !1, s = "", h = Lp;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (s = r.identifierPrefix), r.onRecoverableError !== void 0 && (h = r.onRecoverableError)), r = _p(n, 1, !1, null, null, o, !1, s, h), n[Si] = r.current, Di(n.nodeType === 8 ? n.parentNode : n), new If(r);
  }, di.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(f(188)) : (n = Object.keys(n).join(","), Error(f(268, n)));
    return n = it(r), n = n === null ? null : n.stateNode, n;
  }, di.flushSync = function(n) {
    return Hi(n);
  }, di.hydrate = function(n, r, o) {
    if (!Yf(r)) throw Error(f(200));
    return Wf(null, n, r, !0, o);
  }, di.hydrateRoot = function(n, r, o) {
    if (!rl(n)) throw Error(f(405));
    var s = o != null && o.hydratedSources || null, h = !1, m = "", C = Lp;
    if (o != null && (o.unstable_strictMode === !0 && (h = !0), o.identifierPrefix !== void 0 && (m = o.identifierPrefix), o.onRecoverableError !== void 0 && (C = o.onRecoverableError)), r = Dp(r, null, n, 1, o ?? null, h, !1, m, C), n[Si] = r.current, Di(n), s) for (n = 0; n < s.length; n++) o = s[n], h = o._getVersion, h = h(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, h] : r.mutableSourceEagerHydrationData.push(
      o,
      h
    );
    return new mc(r);
  }, di.render = function(n, r, o) {
    if (!Yf(r)) throw Error(f(200));
    return Wf(null, n, r, !1, o);
  }, di.unmountComponentAtNode = function(n) {
    if (!Yf(n)) throw Error(f(40));
    return n._reactRootContainer ? (Hi(function() {
      Wf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Si] = null;
      });
    }), !0) : !1;
  }, di.unstable_batchedUpdates = Rp, di.unstable_renderSubtreeIntoContainer = function(n, r, o, s) {
    if (!Yf(o)) throw Error(f(200));
    if (n == null || n._reactInternals === void 0) throw Error(f(38));
    return Wf(n, r, o, !1, s);
  }, di.version = "18.2.0-next-9e3b772b8-20220608", di;
}
var pi = {}, hC;
function qA() {
  if (hC) return pi;
  hC = 1;
  var c = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return c.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var u = Ne, f = ZC(), p = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, y = !1;
    function E(e) {
      y = e;
    }
    function S(e) {
      if (!y) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        _("warn", e, a);
      }
    }
    function g(e) {
      if (!y) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        _("error", e, a);
      }
    }
    function _(e, t, a) {
      {
        var i = p.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var d = a.map(function(v) {
          return String(v);
        });
        d.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var L = 0, O = 1, A = 2, U = 3, V = 4, j = 5, $ = 6, se = 7, Ce = 8, Ae = 9, we = 10, ge = 11, Ie = 12, be = 13, De = 14, We = 15, Ut = 16, Dt = 17, B = 18, ee = 19, pe = 21, ne = 22, me = 23, Se = 24, he = 25, I = !0, oe = !1, k = !1, K = !1, fe = !1, Be = !0, Ye = !1, lt = !1, et = !0, dt = !0, ut = !0, Ft = /* @__PURE__ */ new Set(), jt = {}, Cn = {};
    function Rn(e, t) {
      Pn(e, t), Pn(e + "Capture", t);
    }
    function Pn(e, t) {
      jt[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), jt[e] = t;
      {
        var a = e.toLowerCase();
        Cn[a] = e, e === "onDoubleClick" && (Cn.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Ft.add(t[i]);
    }
    var cn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Dn = Object.prototype.hasOwnProperty;
    function Hn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Yt(e) {
      try {
        return Tn(e), !1;
      } catch {
        return !0;
      }
    }
    function Tn(e) {
      return "" + e;
    }
    function Jn(e, t) {
      if (Yt(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), Tn(e);
    }
    function An(e) {
      if (Yt(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Hn(e)), Tn(e);
    }
    function Nt(e, t) {
      if (Yt(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), Tn(e);
    }
    function vr(e, t) {
      if (Yt(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), Tn(e);
    }
    function Or(e) {
      if (Yt(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Hn(e)), Tn(e);
    }
    function Bn(e) {
      if (Yt(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Hn(e)), Tn(e);
    }
    var Dr = 0, Vn = 1, or = 2, Zt = 3, Er = 4, lr = 5, mr = 6, Le = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", qe = Le + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", gt = new RegExp("^[" + Le + "][" + qe + "]*$"), wt = {}, Et = {};
    function wn(e) {
      return Dn.call(Et, e) ? !0 : Dn.call(wt, e) ? !1 : gt.test(e) ? (Et[e] = !0, !0) : (wt[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function fn(e, t, a) {
      return t !== null ? t.type === Dr : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function In(e, t, a, i) {
      if (a !== null && a.type === Dr)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var l = e.toLowerCase().slice(0, 5);
          return l !== "data-" && l !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Wt(e, t, a, i) {
      if (t === null || typeof t > "u" || In(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Zt:
            return !t;
          case Er:
            return t === !1;
          case lr:
            return isNaN(t);
          case mr:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Ln(e) {
      return Jt.hasOwnProperty(e) ? Jt[e] : null;
    }
    function Pt(e, t, a, i, l, d, v) {
      this.acceptsBooleans = t === or || t === Zt || t === Er, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = d, this.removeEmptyString = v;
    }
    var Jt = {}, jr = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    jr.forEach(function(e) {
      Jt[e] = new Pt(
        e,
        Dr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Jt[t] = new Pt(
        t,
        Vn,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Jt[e] = new Pt(
        e,
        or,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Jt[e] = new Pt(
        e,
        or,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Jt[e] = new Pt(
        e,
        Zt,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Jt[e] = new Pt(
        e,
        Zt,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Jt[e] = new Pt(
        e,
        Er,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Jt[e] = new Pt(
        e,
        mr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Jt[e] = new Pt(
        e,
        lr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Pr = /[\-\:]([a-z])/g, dn = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Pr, dn);
      Jt[t] = new Pt(
        t,
        Vn,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Pr, dn);
      Jt[t] = new Pt(
        t,
        Vn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Pr, dn);
      Jt[t] = new Pt(
        t,
        Vn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Jt[e] = new Pt(
        e,
        Vn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Yn = "xlinkHref";
    Jt[Yn] = new Pt(
      "xlinkHref",
      Vn,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Jt[e] = new Pt(
        e,
        Vn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var ot = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, At = !1;
    function Nn(e) {
      !At && ot.test(e) && (At = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function br(e, t, a, i) {
      if (i.mustUseProperty) {
        var l = i.propertyName;
        return e[l];
      } else {
        Jn(a, t), i.sanitizeURL && Nn("" + a);
        var d = i.attributeName, v = null;
        if (i.type === Er) {
          if (e.hasAttribute(d)) {
            var w = e.getAttribute(d);
            return w === "" ? !0 : Wt(t, a, i, !1) ? w : w === "" + a ? a : w;
          }
        } else if (e.hasAttribute(d)) {
          if (Wt(t, a, i, !1))
            return e.getAttribute(d);
          if (i.type === Zt)
            return a;
          v = e.getAttribute(d);
        }
        return Wt(t, a, i, !1) ? v === null ? a : v : v === "" + a ? a : v;
      }
    }
    function _e(e, t, a, i) {
      {
        if (!wn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return Jn(a, t), l === "" + a ? a : l;
      }
    }
    function Ze(e, t, a, i) {
      var l = Ln(t);
      if (!fn(t, l, i)) {
        if (Wt(t, a, l, i) && (a = null), i || l === null) {
          if (wn(t)) {
            var d = t;
            a === null ? e.removeAttribute(d) : (Jn(a, t), e.setAttribute(d, "" + a));
          }
          return;
        }
        var v = l.mustUseProperty;
        if (v) {
          var w = l.propertyName;
          if (a === null) {
            var b = l.type;
            e[w] = b === Zt ? !1 : "";
          } else
            e[w] = a;
          return;
        }
        var R = l.attributeName, T = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(R);
        else {
          var H = l.type, F;
          H === Zt || H === Er && a === !0 ? F = "" : (Jn(a, R), F = "" + a, l.sanitizeURL && Nn(F.toString())), T ? e.setAttributeNS(T, R, F) : e.setAttribute(R, F);
        }
      }
    }
    var je = Symbol.for("react.element"), Lt = Symbol.for("react.portal"), tn = Symbol.for("react.fragment"), yr = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), le = Symbol.for("react.provider"), Re = Symbol.for("react.context"), ye = Symbol.for("react.forward_ref"), Rt = Symbol.for("react.suspense"), Ht = Symbol.for("react.suspense_list"), _t = Symbol.for("react.memo"), it = Symbol.for("react.lazy"), Wn = Symbol.for("react.scope"), pn = Symbol.for("react.debug_trace_mode"), hn = Symbol.for("react.offscreen"), xr = Symbol.for("react.legacy_hidden"), zt = Symbol.for("react.cache"), Vt = Symbol.for("react.tracing_marker"), Ar = Symbol.iterator, hi = "@@iterator";
    function Ya(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ar && e[Ar] || e[hi];
      return typeof t == "function" ? t : null;
    }
    var Tt = Object.assign, El = 0, Xi, Lo, ha, gs, na, Ss, ws;
    function Es() {
    }
    Es.__reactDisabledLog = !0;
    function bl() {
      {
        if (El === 0) {
          Xi = console.log, Lo = console.info, ha = console.warn, gs = console.error, na = console.group, Ss = console.groupCollapsed, ws = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Es,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        El++;
      }
    }
    function su() {
      {
        if (El--, El === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Tt({}, e, {
              value: Xi
            }),
            info: Tt({}, e, {
              value: Lo
            }),
            warn: Tt({}, e, {
              value: ha
            }),
            error: Tt({}, e, {
              value: gs
            }),
            group: Tt({}, e, {
              value: na
            }),
            groupCollapsed: Tt({}, e, {
              value: Ss
            }),
            groupEnd: Tt({}, e, {
              value: ws
            })
          });
        }
        El < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Zi = p.ReactCurrentDispatcher, ki;
    function Wa(e, t, a) {
      {
        if (ki === void 0)
          try {
            throw Error();
          } catch (l) {
            var i = l.stack.trim().match(/\n( *(at )?)/);
            ki = i && i[1] || "";
          }
        return `
` + ki + e;
      }
    }
    var No = !1, _i;
    {
      var xl = typeof WeakMap == "function" ? WeakMap : Map;
      _i = new xl();
    }
    function Cl(e, t) {
      if (!e || No)
        return "";
      {
        var a = _i.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      No = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = Zi.current, Zi.current = null, bl();
      try {
        if (t) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (Z) {
              i = Z;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (Z) {
              i = Z;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Z) {
            i = Z;
          }
          e();
        }
      } catch (Z) {
        if (Z && i && typeof Z.stack == "string") {
          for (var w = Z.stack.split(`
`), b = i.stack.split(`
`), R = w.length - 1, T = b.length - 1; R >= 1 && T >= 0 && w[R] !== b[T]; )
            T--;
          for (; R >= 1 && T >= 0; R--, T--)
            if (w[R] !== b[T]) {
              if (R !== 1 || T !== 1)
                do
                  if (R--, T--, T < 0 || w[R] !== b[T]) {
                    var H = `
` + w[R].replace(" at new ", " at ");
                    return e.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", e.displayName)), typeof e == "function" && _i.set(e, H), H;
                  }
                while (R >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        No = !1, Zi.current = d, su(), Error.prepareStackTrace = l;
      }
      var F = e ? e.displayName || e.name : "", X = F ? Wa(F) : "";
      return typeof e == "function" && _i.set(e, X), X;
    }
    function Mo(e, t, a) {
      return Cl(e, !0);
    }
    function bs(e, t, a) {
      return Cl(e, !1);
    }
    function xs(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function It(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Cl(e, xs(e));
      if (typeof e == "string")
        return Wa(e);
      switch (e) {
        case Rt:
          return Wa("Suspense");
        case Ht:
          return Wa("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ye:
            return bs(e.render);
          case _t:
            return It(e.type, t, a);
          case it: {
            var i = e, l = i._payload, d = i._init;
            try {
              return It(d(l), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Cs(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case j:
          return Wa(e.type);
        case Ut:
          return Wa("Lazy");
        case be:
          return Wa("Suspense");
        case ee:
          return Wa("SuspenseList");
        case L:
        case A:
        case We:
          return bs(e.type);
        case ge:
          return bs(e.type.render);
        case O:
          return Mo(e.type);
        default:
          return "";
      }
    }
    function cu(e) {
      try {
        var t = "", a = e;
        do
          t += Cs(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function zo(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var l = t.displayName || t.name || "";
      return l !== "" ? a + "(" + l + ")" : a;
    }
    function Rs(e) {
      return e.displayName || "Context";
    }
    function Kt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case tn:
          return "Fragment";
        case Lt:
          return "Portal";
        case N:
          return "Profiler";
        case yr:
          return "StrictMode";
        case Rt:
          return "Suspense";
        case Ht:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Re:
            var t = e;
            return Rs(t) + ".Consumer";
          case le:
            var a = e;
            return Rs(a._context) + ".Provider";
          case ye:
            return zo(e, e.render, "ForwardRef");
          case _t:
            var i = e.displayName || null;
            return i !== null ? i : Kt(e.type) || "Memo";
          case it: {
            var l = e, d = l._payload, v = l._init;
            try {
              return Kt(v(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function fu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Rl(e) {
      return e.displayName || "Context";
    }
    function bt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Se:
          return "Cache";
        case Ae:
          var i = a;
          return Rl(i) + ".Consumer";
        case we:
          var l = a;
          return Rl(l._context) + ".Provider";
        case B:
          return "DehydratedFragment";
        case ge:
          return fu(a, a.render, "ForwardRef");
        case se:
          return "Fragment";
        case j:
          return a;
        case V:
          return "Portal";
        case U:
          return "Root";
        case $:
          return "Text";
        case Ut:
          return Kt(a);
        case Ce:
          return a === yr ? "StrictMode" : "Mode";
        case ne:
          return "Offscreen";
        case Ie:
          return "Profiler";
        case pe:
          return "Scope";
        case be:
          return "Suspense";
        case ee:
          return "SuspenseList";
        case he:
          return "TracingMarker";
        case O:
        case L:
        case Dt:
        case A:
        case De:
        case We:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var vi = p.ReactDebugCurrentFrame, qn = null, va = !1;
    function qa() {
      {
        if (qn === null)
          return null;
        var e = qn._debugOwner;
        if (e !== null && typeof e < "u")
          return bt(e);
      }
      return null;
    }
    function Uo() {
      return qn === null ? "" : cu(qn);
    }
    function Mn() {
      vi.getCurrentStack = null, qn = null, va = !1;
    }
    function Qn(e) {
      vi.getCurrentStack = e === null ? null : Uo, qn = e, va = !1;
    }
    function Ts() {
      return qn;
    }
    function Hr(e) {
      va = e;
    }
    function ma(e) {
      return "" + e;
    }
    function mi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Bn(e), e;
        default:
          return "";
      }
    }
    var du = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Tl(e, t) {
      du[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function kl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Fo(e) {
      return e._valueTracker;
    }
    function Qa(e) {
      e._valueTracker = null;
    }
    function Ji(e) {
      var t = "";
      return e && (kl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function pu(e) {
      var t = kl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Bn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var l = a.get, d = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(w) {
            Bn(w), i = "" + w, d.call(this, w);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var v = {
          getValue: function() {
            return i;
          },
          setValue: function(w) {
            Bn(w), i = "" + w;
          },
          stopTracking: function() {
            Qa(e), delete e[t];
          }
        };
        return v;
      }
    }
    function eo(e) {
      Fo(e) || (e._valueTracker = pu(e));
    }
    function hu(e) {
      if (!e)
        return !1;
      var t = Fo(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Ji(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Oi(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var to = !1, vu = !1, ks = !1, yi = !1;
    function mu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function x(e, t) {
      var a = e, i = t.checked, l = Tt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return l;
    }
    function M(e, t) {
      Tl("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !vu && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", qa() || "A component", t.type), vu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !to && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", qa() || "A component", t.type), to = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: mi(t.value != null ? t.value : i),
        controlled: mu(t)
      };
    }
    function G(e, t) {
      var a = e, i = t.checked;
      i != null && Ze(a, "checked", i, !1);
    }
    function te(e, t) {
      var a = e;
      {
        var i = mu(t);
        !a._wrapperState.controlled && i && !yi && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), yi = !0), a._wrapperState.controlled && !i && !ks && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ks = !0);
      }
      G(e, t);
      var l = mi(t.value), d = t.type;
      if (l != null)
        d === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = ma(l)) : a.value !== ma(l) && (a.value = ma(l));
      else if (d === "submit" || d === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? yt(a, t.type, l) : t.hasOwnProperty("defaultValue") && yt(a, t.type, mi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Te(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, d = l === "submit" || l === "reset";
        if (d && (t.value === void 0 || t.value === null))
          return;
        var v = ma(i._wrapperState.initialValue);
        a || v !== i.value && (i.value = v), i.defaultValue = v;
      }
      var w = i.name;
      w !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, w !== "" && (i.name = w);
    }
    function Xe(e, t) {
      var a = e;
      te(a, t), Pe(a, t);
    }
    function Pe(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Jn(a, "name");
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), d = 0; d < l.length; d++) {
          var v = l[d];
          if (!(v === e || v.form !== e.form)) {
            var w = Rm(v);
            if (!w)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            hu(v), te(v, w);
          }
        }
      }
    }
    function yt(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Oi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = ma(e._wrapperState.initialValue) : e.defaultValue !== ma(a) && (e.defaultValue = ma(a)));
    }
    var Mt = !1, un = !1, vn = !1;
    function mn(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? u.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || un || (un = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (vn || (vn = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Mt && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Mt = !0);
    }
    function yn(e, t) {
      t.value != null && e.setAttribute("value", ma(mi(t.value)));
    }
    var zn = Array.isArray;
    function Xt(e) {
      return zn(e);
    }
    var jo;
    jo = !1;
    function yu() {
      var e = qa();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var _s = ["value", "defaultValue"];
    function Os(e) {
      {
        Tl("select", e);
        for (var t = 0; t < _s.length; t++) {
          var a = _s[t];
          if (e[a] != null) {
            var i = Xt(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, yu()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, yu());
          }
        }
      }
    }
    function no(e, t, a, i) {
      var l = e.options;
      if (t) {
        for (var d = a, v = {}, w = 0; w < d.length; w++)
          v["$" + d[w]] = !0;
        for (var b = 0; b < l.length; b++) {
          var R = v.hasOwnProperty("$" + l[b].value);
          l[b].selected !== R && (l[b].selected = R), R && i && (l[b].defaultSelected = !0);
        }
      } else {
        for (var T = ma(mi(a)), H = null, F = 0; F < l.length; F++) {
          if (l[F].value === T) {
            l[F].selected = !0, i && (l[F].defaultSelected = !0);
            return;
          }
          H === null && !l[F].disabled && (H = l[F]);
        }
        H !== null && (H.selected = !0);
      }
    }
    function Ds(e, t) {
      return Tt({}, t, {
        value: void 0
      });
    }
    function As(e, t) {
      var a = e;
      Os(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !jo && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), jo = !0);
    }
    function Nd(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? no(a, !!t.multiple, i, !1) : t.defaultValue != null && no(a, !!t.multiple, t.defaultValue, !0);
    }
    function dg(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? no(a, !!t.multiple, l, !1) : i !== !!t.multiple && (t.defaultValue != null ? no(a, !!t.multiple, t.defaultValue, !0) : no(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Kh(e, t) {
      var a = e, i = t.value;
      i != null && no(a, !!t.multiple, i, !1);
    }
    var Xh = !1;
    function Md(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Tt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: ma(a._wrapperState.initialValue)
      });
      return i;
    }
    function Zh(e, t) {
      var a = e;
      Tl("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Xh && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", qa() || "A component"), Xh = !0);
      var i = t.value;
      if (i == null) {
        var l = t.children, d = t.defaultValue;
        if (l != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (d != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Xt(l)) {
              if (l.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              l = l[0];
            }
            d = l;
          }
        }
        d == null && (d = ""), i = d;
      }
      a._wrapperState = {
        initialValue: mi(i)
      };
    }
    function Jh(e, t) {
      var a = e, i = mi(t.value), l = mi(t.defaultValue);
      if (i != null) {
        var d = ma(i);
        d !== a.value && (a.value = d), t.defaultValue == null && a.defaultValue !== d && (a.defaultValue = d);
      }
      l != null && (a.defaultValue = ma(l));
    }
    function Vc(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function pg(e, t) {
      Jh(e, t);
    }
    var ro = "http://www.w3.org/1999/xhtml", hg = "http://www.w3.org/1998/Math/MathML", Ic = "http://www.w3.org/2000/svg";
    function zd(e) {
      switch (e) {
        case "svg":
          return Ic;
        case "math":
          return hg;
        default:
          return ro;
      }
    }
    function Ud(e, t) {
      return e == null || e === ro ? zd(t) : e === Ic && t === "foreignObject" ? ro : e;
    }
    var vg = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, Yc, ev = vg(function(e, t) {
      if (e.namespaceURI === Ic && !("innerHTML" in e)) {
        Yc = Yc || document.createElement("div"), Yc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Yc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ya = 1, ao = 3, er = 8, Na = 9, Fd = 11, Ls = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === ao) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, tv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, gu = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function nv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var rv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(gu).forEach(function(e) {
      rv.forEach(function(t) {
        gu[nv(t, e)] = gu[e];
      });
    });
    function Po(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(gu.hasOwnProperty(e) && gu[e]) ? t + "px" : (vr(t, e), ("" + t).trim());
    }
    var mg = /([A-Z])/g, yg = /^ms-/;
    function gg(e) {
      return e.replace(mg, "-$1").toLowerCase().replace(yg, "-ms-");
    }
    var jd = function() {
    };
    {
      var av = /^(?:webkit|moz|o)[A-Z]/, Ns = /^-ms-/, Ms = /-(.)/g, iv = /;\s*$/, io = {}, Pd = {}, Hd = !1, Wc = !1, $d = function(e) {
        return e.replace(Ms, function(t, a) {
          return a.toUpperCase();
        });
      }, ov = function(e) {
        io.hasOwnProperty(e) && io[e] || (io[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          $d(e.replace(Ns, "ms-"))
        ));
      }, lv = function(e) {
        io.hasOwnProperty(e) && io[e] || (io[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, uv = function(e, t) {
        Pd.hasOwnProperty(t) && Pd[t] || (Pd[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(iv, "")));
      }, Sg = function(e, t) {
        Hd || (Hd = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, wg = function(e, t) {
        Wc || (Wc = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      jd = function(e, t) {
        e.indexOf("-") > -1 ? ov(e) : av.test(e) ? lv(e) : iv.test(t) && uv(e, t), typeof t == "number" && (isNaN(t) ? Sg(e, t) : isFinite(t) || wg(e, t));
      };
    }
    var Eg = jd;
    function bg(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var d = i.indexOf("--") === 0;
              t += a + (d ? i : gg(i)) + ":", t += Po(i, l, d), a = ";";
            }
          }
        return t || null;
      }
    }
    function sv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || Eg(i, t[i]);
          var d = Po(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, d) : a[i] = d;
        }
    }
    function gi(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Su(e) {
      var t = {};
      for (var a in e)
        for (var i = tv[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function cv(e, t) {
      {
        if (!t)
          return;
        var a = Su(e), i = Su(t), l = {};
        for (var d in a) {
          var v = a[d], w = i[d];
          if (w && v !== w) {
            var b = v + "," + w;
            if (l[b])
              continue;
            l[b] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", gi(e[v]) ? "Removing" : "Updating", v, w);
          }
        }
      }
    }
    var fv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, dv = Tt({
      menuitem: !0
    }, fv), pv = "__html";
    function zs(e, t) {
      if (t) {
        if (dv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(pv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function _l(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var qc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Ol = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Ho = {}, Us = new RegExp("^(aria)-[" + qe + "]*$"), Bd = new RegExp("^(aria)[A-Z][" + qe + "]*$");
    function hv(e, t) {
      {
        if (Dn.call(Ho, t) && Ho[t])
          return !0;
        if (Bd.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Ol.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Ho[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Ho[t] = !0, !0;
        }
        if (Us.test(t)) {
          var l = t.toLowerCase(), d = Ol.hasOwnProperty(l) ? l : null;
          if (d == null)
            return Ho[t] = !0, !1;
          if (t !== d)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, d), Ho[t] = !0, !0;
        }
      }
      return !0;
    }
    function Qc(e, t) {
      {
        var a = [];
        for (var i in t) {
          var l = hv(e, i);
          l || a.push(i);
        }
        var d = a.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e);
      }
    }
    function wu(e, t) {
      _l(e, t) || Qc(e, t);
    }
    var Gc = !1;
    function vv(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Gc && (Gc = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Fs = function() {
    };
    {
      var Zr = {}, Vd = /^on./, mv = /^on[^A-Z]/, yv = new RegExp("^(aria)-[" + qe + "]*$"), gv = new RegExp("^(aria)[A-Z][" + qe + "]*$");
      Fs = function(e, t, a, i) {
        if (Dn.call(Zr, t) && Zr[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Zr[t] = !0, !0;
        if (i != null) {
          var d = i.registrationNameDependencies, v = i.possibleRegistrationNames;
          if (d.hasOwnProperty(t))
            return !0;
          var w = v.hasOwnProperty(l) ? v[l] : null;
          if (w != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, w), Zr[t] = !0, !0;
          if (Vd.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), Zr[t] = !0, !0;
        } else if (Vd.test(t))
          return mv.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Zr[t] = !0, !0;
        if (yv.test(t) || gv.test(t))
          return !0;
        if (l === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Zr[t] = !0, !0;
        if (l === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Zr[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Zr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Zr[t] = !0, !0;
        var b = Ln(t), R = b !== null && b.type === Dr;
        if (qc.hasOwnProperty(l)) {
          var T = qc[l];
          if (T !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, T), Zr[t] = !0, !0;
        } else if (!R && t !== l)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), Zr[t] = !0, !0;
        return typeof a == "boolean" && In(t, a, b, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Zr[t] = !0, !0) : R ? !0 : In(t, a, b, !1) ? (Zr[t] = !0, !1) : ((a === "false" || a === "true") && b !== null && b.type === Zt && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Zr[t] = !0), !0);
      };
    }
    var Sv = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var d = Fs(e, l, t[l], a);
          d || i.push(l);
        }
        var v = i.map(function(w) {
          return "`" + w + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e) : i.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e);
      }
    };
    function $o(e, t, a) {
      _l(e, t) || Sv(e, t, a);
    }
    var Kc = 1, js = 2, Ps = 4, xg = Kc | js | Ps, oo = null;
    function Cg(e) {
      oo !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), oo = e;
    }
    function wv() {
      oo === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), oo = null;
    }
    function Ev(e) {
      return e === oo;
    }
    function En(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === ao ? t.parentNode : t;
    }
    var Hs = null, lo = null, Di = null;
    function Id(e) {
      var t = Zu(e);
      if (t) {
        if (typeof Hs != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Rm(a);
          Hs(t.stateNode, t.type, i);
        }
      }
    }
    function Yd(e) {
      Hs = e;
    }
    function Eu(e) {
      lo ? Di ? Di.push(e) : Di = [e] : lo = e;
    }
    function Xc() {
      return lo !== null || Di !== null;
    }
    function Dl() {
      if (lo) {
        var e = lo, t = Di;
        if (lo = null, Di = null, Id(e), t)
          for (var a = 0; a < t.length; a++)
            Id(t[a]);
      }
    }
    var Wd = function(e, t) {
      return e(t);
    }, bv = function() {
    }, qd = !1;
    function xv() {
      var e = Xc();
      e && (bv(), Dl());
    }
    function $s(e, t, a) {
      if (qd)
        return e(t, a);
      qd = !0;
      try {
        return Wd(e, t, a);
      } finally {
        qd = !1, xv();
      }
    }
    function Zc(e, t, a) {
      Wd = e, bv = a;
    }
    function Qd(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Gd(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && Qd(t));
        default:
          return !1;
      }
    }
    function Al(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Rm(a);
      if (i === null)
        return null;
      var l = i[t];
      if (Gd(t, e.type, i))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var Bs = !1;
    if (cn)
      try {
        var Vs = {};
        Object.defineProperty(Vs, "passive", {
          get: function() {
            Bs = !0;
          }
        }), window.addEventListener("test", Vs, Vs), window.removeEventListener("test", Vs, Vs);
      } catch {
        Bs = !1;
      }
    function Kd(e, t, a, i, l, d, v, w, b) {
      var R = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, R);
      } catch (T) {
        this.onError(T);
      }
    }
    var Cv = Kd;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Xd = document.createElement("react");
      Cv = function(t, a, i, l, d, v, w, b, R) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var T = document.createEvent("Event"), H = !1, F = !0, X = window.event, Z = Object.getOwnPropertyDescriptor(window, "event");
        function re() {
          Xd.removeEventListener(ae, ft, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = X);
        }
        var He = Array.prototype.slice.call(arguments, 3);
        function ft() {
          H = !0, re(), a.apply(i, He), F = !1;
        }
        var at, Qt = !1, Bt = !1;
        function W(q) {
          if (at = q.error, Qt = !0, at === null && q.colno === 0 && q.lineno === 0 && (Bt = !0), q.defaultPrevented && at != null && typeof at == "object")
            try {
              at._suppressLogging = !0;
            } catch {
            }
        }
        var ae = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", W), Xd.addEventListener(ae, ft, !1), T.initEvent(ae, !1, !1), Xd.dispatchEvent(T), Z && Object.defineProperty(window, "event", Z), H && F && (Qt ? Bt && (at = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : at = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(at)), window.removeEventListener("error", W), !H)
          return re(), Kd.apply(this, arguments);
      };
    }
    var Zd = Cv, Ma = !1, Is = null, uo = !1, Ga = null, Ys = {
      onError: function(e) {
        Ma = !0, Is = e;
      }
    };
    function Si(e, t, a, i, l, d, v, w, b) {
      Ma = !1, Is = null, Zd.apply(Ys, arguments);
    }
    function Jd(e, t, a, i, l, d, v, w, b) {
      if (Si.apply(this, arguments), Ma) {
        var R = so();
        uo || (uo = !0, Ga = R);
      }
    }
    function Rg() {
      if (uo) {
        var e = Ga;
        throw uo = !1, Ga = null, e;
      }
    }
    function Tg() {
      return Ma;
    }
    function so() {
      if (Ma) {
        var e = Is;
        return Ma = !1, Is = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ai(e) {
      return e._reactInternals;
    }
    function bu(e) {
      return e._reactInternals !== void 0;
    }
    function Jc(e, t) {
      e._reactInternals = t;
    }
    var st = (
      /*                      */
      0
    ), wi = (
      /*                */
      1
    ), bn = (
      /*                    */
      2
    ), tt = (
      /*                       */
      4
    ), nn = (
      /*                */
      16
    ), Ka = (
      /*                 */
      32
    ), Lr = (
      /*                     */
      64
    ), xt = (
      /*                   */
      128
    ), ra = (
      /*            */
      256
    ), za = (
      /*                          */
      512
    ), gr = (
      /*                     */
      1024
    ), ga = (
      /*                      */
      2048
    ), Li = (
      /*                    */
      4096
    ), Bo = (
      /*                   */
      8192
    ), Ll = (
      /*             */
      16384
    ), Rv = ga | tt | Lr | za | gr | Ll, co = (
      /*               */
      32767
    ), Vo = (
      /*                   */
      32768
    ), $r = (
      /*                */
      65536
    ), ef = (
      /* */
      131072
    ), Tv = (
      /*                       */
      1048576
    ), Ni = (
      /*                    */
      2097152
    ), Xa = (
      /*                 */
      4194304
    ), Io = (
      /*                */
      8388608
    ), Za = (
      /*               */
      16777216
    ), Nl = (
      /*              */
      33554432
    ), Sa = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      tt | gr | 0
    ), wa = bn | tt | nn | Ka | za | Li | Bo, Ei = tt | Lr | za | Bo, Ea = ga | nn, Br = Xa | Io | Ni, Ml = p.ReactCurrentOwner;
    function Yo(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (bn | Li)) !== st && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === U ? a : null;
    }
    function tf(e) {
      if (e.tag === be) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function nf(e) {
      return e.tag === U ? e.stateNode.containerInfo : null;
    }
    function Ua(e) {
      return Yo(e) === e;
    }
    function Fa(e) {
      {
        var t = Ml.current;
        if (t !== null && t.tag === O) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", bt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = Ai(e);
      return l ? Yo(l) === l : !1;
    }
    function Un(e) {
      if (Yo(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Ja(e) {
      var t = e.alternate;
      if (!t) {
        var a = Yo(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, l = t; ; ) {
        var d = i.return;
        if (d === null)
          break;
        var v = d.alternate;
        if (v === null) {
          var w = d.return;
          if (w !== null) {
            i = l = w;
            continue;
          }
          break;
        }
        if (d.child === v.child) {
          for (var b = d.child; b; ) {
            if (b === i)
              return Un(d), e;
            if (b === l)
              return Un(d), t;
            b = b.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== l.return)
          i = d, l = v;
        else {
          for (var R = !1, T = d.child; T; ) {
            if (T === i) {
              R = !0, i = d, l = v;
              break;
            }
            if (T === l) {
              R = !0, l = d, i = v;
              break;
            }
            T = T.sibling;
          }
          if (!R) {
            for (T = v.child; T; ) {
              if (T === i) {
                R = !0, i = v, l = d;
                break;
              }
              if (T === l) {
                R = !0, l = v, i = d;
                break;
              }
              T = T.sibling;
            }
            if (!R)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== l)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== U)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function ep(e) {
      var t = Ja(e);
      return t !== null ? tp(t) : null;
    }
    function tp(e) {
      if (e.tag === j || e.tag === $)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = tp(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function np(e) {
      var t = Ja(e);
      return t !== null ? rf(t) : null;
    }
    function rf(e) {
      if (e.tag === j || e.tag === $)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== V) {
          var a = rf(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var rp = f.unstable_scheduleCallback, af = f.unstable_cancelCallback, kv = f.unstable_shouldYield, xu = f.unstable_requestPaint, Sr = f.unstable_now, kg = f.unstable_getCurrentPriorityLevel, ba = f.unstable_ImmediatePriority, Cu = f.unstable_UserBlockingPriority, Mi = f.unstable_NormalPriority, Ru = f.unstable_LowPriority, Ws = f.unstable_IdlePriority, ap = f.unstable_yieldValue, ip = f.unstable_setDisableYieldValue, Wo = null, ur = null, Oe = null, Jr = !1, ja = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function _v(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        et && (e = Tt({}, e, {
          getLaneLabelMap: of,
          injectProfilingHooks: Qo
        })), Wo = t.inject(e), ur = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function fo(e, t) {
      if (ur && typeof ur.onScheduleFiberRoot == "function")
        try {
          ur.onScheduleFiberRoot(Wo, e, t);
        } catch (a) {
          Jr || (Jr = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function qo(e, t) {
      if (ur && typeof ur.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & xt) === xt;
          if (dt) {
            var i;
            switch (t) {
              case dr:
                i = ba;
                break;
              case ho:
                i = Cu;
                break;
              case Fi:
                i = Mi;
                break;
              case zu:
                i = Ws;
                break;
              default:
                i = Mi;
                break;
            }
            ur.onCommitFiberRoot(Wo, e, i, a);
          }
        } catch (l) {
          Jr || (Jr = !0, g("React instrumentation encountered an error: %s", l));
        }
    }
    function op(e) {
      if (ur && typeof ur.onPostCommitFiberRoot == "function")
        try {
          ur.onPostCommitFiberRoot(Wo, e);
        } catch (t) {
          Jr || (Jr = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Ov(e) {
      if (ur && typeof ur.onCommitFiberUnmount == "function")
        try {
          ur.onCommitFiberUnmount(Wo, e);
        } catch (t) {
          Jr || (Jr = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function kn(e) {
      if (typeof ap == "function" && (ip(e), E(e)), ur && typeof ur.setStrictMode == "function")
        try {
          ur.setStrictMode(Wo, e);
        } catch (t) {
          Jr || (Jr = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Qo(e) {
      Oe = e;
    }
    function of() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < sr; a++) {
          var i = Fv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Dv(e) {
      Oe !== null && typeof Oe.markCommitStarted == "function" && Oe.markCommitStarted(e);
    }
    function qs() {
      Oe !== null && typeof Oe.markCommitStopped == "function" && Oe.markCommitStopped();
    }
    function Tu(e) {
      Oe !== null && typeof Oe.markComponentRenderStarted == "function" && Oe.markComponentRenderStarted(e);
    }
    function zl() {
      Oe !== null && typeof Oe.markComponentRenderStopped == "function" && Oe.markComponentRenderStopped();
    }
    function lp(e) {
      Oe !== null && typeof Oe.markComponentPassiveEffectMountStarted == "function" && Oe.markComponentPassiveEffectMountStarted(e);
    }
    function lf() {
      Oe !== null && typeof Oe.markComponentPassiveEffectMountStopped == "function" && Oe.markComponentPassiveEffectMountStopped();
    }
    function Av(e) {
      Oe !== null && typeof Oe.markComponentPassiveEffectUnmountStarted == "function" && Oe.markComponentPassiveEffectUnmountStarted(e);
    }
    function Lv() {
      Oe !== null && typeof Oe.markComponentPassiveEffectUnmountStopped == "function" && Oe.markComponentPassiveEffectUnmountStopped();
    }
    function Nv(e) {
      Oe !== null && typeof Oe.markComponentLayoutEffectMountStarted == "function" && Oe.markComponentLayoutEffectMountStarted(e);
    }
    function up() {
      Oe !== null && typeof Oe.markComponentLayoutEffectMountStopped == "function" && Oe.markComponentLayoutEffectMountStopped();
    }
    function ku(e) {
      Oe !== null && typeof Oe.markComponentLayoutEffectUnmountStarted == "function" && Oe.markComponentLayoutEffectUnmountStarted(e);
    }
    function Qs() {
      Oe !== null && typeof Oe.markComponentLayoutEffectUnmountStopped == "function" && Oe.markComponentLayoutEffectUnmountStopped();
    }
    function Mv(e, t, a) {
      Oe !== null && typeof Oe.markComponentErrored == "function" && Oe.markComponentErrored(e, t, a);
    }
    function zv(e, t, a) {
      Oe !== null && typeof Oe.markComponentSuspended == "function" && Oe.markComponentSuspended(e, t, a);
    }
    function _u(e) {
      Oe !== null && typeof Oe.markLayoutEffectsStarted == "function" && Oe.markLayoutEffectsStarted(e);
    }
    function Uv() {
      Oe !== null && typeof Oe.markLayoutEffectsStopped == "function" && Oe.markLayoutEffectsStopped();
    }
    function Gs(e) {
      Oe !== null && typeof Oe.markPassiveEffectsStarted == "function" && Oe.markPassiveEffectsStarted(e);
    }
    function zi() {
      Oe !== null && typeof Oe.markPassiveEffectsStopped == "function" && Oe.markPassiveEffectsStopped();
    }
    function Ou(e) {
      Oe !== null && typeof Oe.markRenderStarted == "function" && Oe.markRenderStarted(e);
    }
    function Ks() {
      Oe !== null && typeof Oe.markRenderYielded == "function" && Oe.markRenderYielded();
    }
    function Go() {
      Oe !== null && typeof Oe.markRenderStopped == "function" && Oe.markRenderStopped();
    }
    function sp(e) {
      Oe !== null && typeof Oe.markRenderScheduled == "function" && Oe.markRenderScheduled(e);
    }
    function Du(e, t) {
      Oe !== null && typeof Oe.markForceUpdateScheduled == "function" && Oe.markForceUpdateScheduled(e, t);
    }
    function uf(e, t) {
      Oe !== null && typeof Oe.markStateUpdateScheduled == "function" && Oe.markStateUpdateScheduled(e, t);
    }
    var ct = (
      /*                         */
      0
    ), rt = (
      /*                 */
      1
    ), en = (
      /*                    */
      2
    ), tr = (
      /*               */
      8
    ), ei = (
      /*              */
      16
    ), Xs = Math.clz32 ? Math.clz32 : Gn, cp = Math.log, Ul = Math.LN2;
    function Gn(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (cp(t) / Ul | 0) | 0;
    }
    var sr = 31, ie = (
      /*                        */
      0
    ), cr = (
      /*                          */
      0
    ), pt = (
      /*                        */
      1
    ), Ui = (
      /*    */
      2
    ), po = (
      /*             */
      4
    ), nr = (
      /*            */
      8
    ), ti = (
      /*                     */
      16
    ), Fl = (
      /*                */
      32
    ), Ko = (
      /*                       */
      4194240
    ), xa = (
      /*                        */
      64
    ), Ca = (
      /*                        */
      128
    ), jl = (
      /*                        */
      256
    ), Zs = (
      /*                        */
      512
    ), Js = (
      /*                        */
      1024
    ), sf = (
      /*                        */
      2048
    ), cf = (
      /*                        */
      4096
    ), ff = (
      /*                        */
      8192
    ), df = (
      /*                        */
      16384
    ), pf = (
      /*                       */
      32768
    ), hf = (
      /*                       */
      65536
    ), vf = (
      /*                       */
      131072
    ), mf = (
      /*                       */
      262144
    ), Pl = (
      /*                       */
      524288
    ), yf = (
      /*                       */
      1048576
    ), Au = (
      /*                       */
      2097152
    ), Hl = (
      /*                            */
      130023424
    ), $l = (
      /*                             */
      4194304
    ), ec = (
      /*                             */
      8388608
    ), gf = (
      /*                             */
      16777216
    ), Sf = (
      /*                             */
      33554432
    ), wf = (
      /*                             */
      67108864
    ), fp = $l, Bl = (
      /*          */
      134217728
    ), dp = (
      /*                          */
      268435455
    ), Lu = (
      /*               */
      268435456
    ), Xo = (
      /*                        */
      536870912
    ), Pa = (
      /*                   */
      1073741824
    );
    function Fv(e) {
      {
        if (e & pt)
          return "Sync";
        if (e & Ui)
          return "InputContinuousHydration";
        if (e & po)
          return "InputContinuous";
        if (e & nr)
          return "DefaultHydration";
        if (e & ti)
          return "Default";
        if (e & Fl)
          return "TransitionHydration";
        if (e & Ko)
          return "Transition";
        if (e & Hl)
          return "Retry";
        if (e & Bl)
          return "SelectiveHydration";
        if (e & Lu)
          return "IdleHydration";
        if (e & Xo)
          return "Idle";
        if (e & Pa)
          return "Offscreen";
      }
    }
    var _n = -1, Ef = xa, tc = $l;
    function Nu(e) {
      switch (fr(e)) {
        case pt:
          return pt;
        case Ui:
          return Ui;
        case po:
          return po;
        case nr:
          return nr;
        case ti:
          return ti;
        case Fl:
          return Fl;
        case xa:
        case Ca:
        case jl:
        case Zs:
        case Js:
        case sf:
        case cf:
        case ff:
        case df:
        case pf:
        case hf:
        case vf:
        case mf:
        case Pl:
        case yf:
        case Au:
          return e & Ko;
        case $l:
        case ec:
        case gf:
        case Sf:
        case wf:
          return e & Hl;
        case Bl:
          return Bl;
        case Lu:
          return Lu;
        case Xo:
          return Xo;
        case Pa:
          return Pa;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function nc(e, t) {
      var a = e.pendingLanes;
      if (a === ie)
        return ie;
      var i = ie, l = e.suspendedLanes, d = e.pingedLanes, v = a & dp;
      if (v !== ie) {
        var w = v & ~l;
        if (w !== ie)
          i = Nu(w);
        else {
          var b = v & d;
          b !== ie && (i = Nu(b));
        }
      } else {
        var R = a & ~l;
        R !== ie ? i = Nu(R) : d !== ie && (i = Nu(d));
      }
      if (i === ie)
        return ie;
      if (t !== ie && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === ie) {
        var T = fr(i), H = fr(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          T >= H || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          T === ti && (H & Ko) !== ie
        )
          return t;
      }
      (i & po) !== ie && (i |= a & ti);
      var F = e.entangledLanes;
      if (F !== ie)
        for (var X = e.entanglements, Z = i & F; Z > 0; ) {
          var re = Jo(Z), He = 1 << re;
          i |= X[re], Z &= ~He;
        }
      return i;
    }
    function bf(e, t) {
      for (var a = e.eventTimes, i = _n; t > 0; ) {
        var l = Jo(t), d = 1 << l, v = a[l];
        v > i && (i = v), t &= ~d;
      }
      return i;
    }
    function _g(e, t) {
      switch (e) {
        case pt:
        case Ui:
        case po:
          return t + 250;
        case nr:
        case ti:
        case Fl:
        case xa:
        case Ca:
        case jl:
        case Zs:
        case Js:
        case sf:
        case cf:
        case ff:
        case df:
        case pf:
        case hf:
        case vf:
        case mf:
        case Pl:
        case yf:
        case Au:
          return t + 5e3;
        case $l:
        case ec:
        case gf:
        case Sf:
        case wf:
          return _n;
        case Bl:
        case Lu:
        case Xo:
        case Pa:
          return _n;
        default:
          return g("Should have found matching lanes. This is a bug in React."), _n;
      }
    }
    function Og(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, d = e.expirationTimes, v = a; v > 0; ) {
        var w = Jo(v), b = 1 << w, R = d[w];
        R === _n ? ((b & i) === ie || (b & l) !== ie) && (d[w] = _g(b, t)) : R <= t && (e.expiredLanes |= b), v &= ~b;
      }
    }
    function Dg(e) {
      return Nu(e.pendingLanes);
    }
    function Zo(e) {
      var t = e.pendingLanes & ~Pa;
      return t !== ie ? t : t & Pa ? Pa : ie;
    }
    function pp(e) {
      return (e & pt) !== ie;
    }
    function rc(e) {
      return (e & dp) !== ie;
    }
    function jv(e) {
      return (e & Hl) === e;
    }
    function Pv(e) {
      var t = pt | po | ti;
      return (e & t) === ie;
    }
    function Hv(e) {
      return (e & Ko) === e;
    }
    function ac(e, t) {
      var a = Ui | po | nr | ti;
      return (t & a) !== ie;
    }
    function $v(e, t) {
      return (t & e.expiredLanes) !== ie;
    }
    function hp(e) {
      return (e & Ko) !== ie;
    }
    function Bv() {
      var e = Ef;
      return Ef <<= 1, (Ef & Ko) === ie && (Ef = xa), e;
    }
    function Ra() {
      var e = tc;
      return tc <<= 1, (tc & Hl) === ie && (tc = $l), e;
    }
    function fr(e) {
      return e & -e;
    }
    function Mu(e) {
      return fr(e);
    }
    function Jo(e) {
      return 31 - Xs(e);
    }
    function xf(e) {
      return Jo(e);
    }
    function Ta(e, t) {
      return (e & t) !== ie;
    }
    function Vl(e, t) {
      return (e & t) === t;
    }
    function Ot(e, t) {
      return e | t;
    }
    function ic(e, t) {
      return e & ~t;
    }
    function Cf(e, t) {
      return e & t;
    }
    function Ag(e) {
      return e;
    }
    function Vv(e, t) {
      return e !== cr && e < t ? e : t;
    }
    function oc(e) {
      for (var t = [], a = 0; a < sr; a++)
        t.push(e);
      return t;
    }
    function Il(e, t, a) {
      e.pendingLanes |= t, t !== Xo && (e.suspendedLanes = ie, e.pingedLanes = ie);
      var i = e.eventTimes, l = xf(t);
      i[l] = a;
    }
    function Iv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var l = Jo(i), d = 1 << l;
        a[l] = _n, i &= ~d;
      }
    }
    function Rf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Tf(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ie, e.pingedLanes = ie, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, d = e.expirationTimes, v = a; v > 0; ) {
        var w = Jo(v), b = 1 << w;
        i[w] = ie, l[w] = _n, d[w] = _n, v &= ~b;
      }
    }
    function vp(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, l = a; l; ) {
        var d = Jo(l), v = 1 << d;
        // Is this one of the newly entangled lanes?
        v & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[d] & t && (i[d] |= t), l &= ~v;
      }
    }
    function Yv(e, t) {
      var a = fr(t), i;
      switch (a) {
        case po:
          i = Ui;
          break;
        case ti:
          i = nr;
          break;
        case xa:
        case Ca:
        case jl:
        case Zs:
        case Js:
        case sf:
        case cf:
        case ff:
        case df:
        case pf:
        case hf:
        case vf:
        case mf:
        case Pl:
        case yf:
        case Au:
        case $l:
        case ec:
        case gf:
        case Sf:
        case wf:
          i = Fl;
          break;
        case Xo:
          i = Lu;
          break;
        default:
          i = cr;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== cr ? cr : i;
    }
    function kf(e, t, a) {
      if (ja)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = xf(a), d = 1 << l, v = i[l];
          v.add(t), a &= ~d;
        }
    }
    function mp(e, t) {
      if (ja)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = xf(t), d = 1 << l, v = a[l];
          v.size > 0 && (v.forEach(function(w) {
            var b = w.alternate;
            (b === null || !i.has(b)) && i.add(w);
          }), v.clear()), t &= ~d;
        }
    }
    function lc(e, t) {
      return null;
    }
    var dr = pt, ho = po, Fi = ti, zu = Xo, Uu = cr;
    function ni() {
      return Uu;
    }
    function rr(e) {
      Uu = e;
    }
    function ea(e, t) {
      var a = Uu;
      try {
        return Uu = e, t();
      } finally {
        Uu = a;
      }
    }
    function Lg(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Ng(e, t) {
      return e > t ? e : t;
    }
    function Fu(e, t) {
      return e !== 0 && e < t;
    }
    function Vr(e) {
      var t = fr(e);
      return Fu(dr, t) ? Fu(ho, t) ? rc(t) ? Fi : zu : ho : dr;
    }
    function _f(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ve;
    function ju(e) {
      Ve = e;
    }
    function yp(e) {
      Ve(e);
    }
    var Of;
    function Mg(e) {
      Of = e;
    }
    var Pu;
    function Df(e) {
      Pu = e;
    }
    var Af;
    function Wv(e) {
      Af = e;
    }
    var gp;
    function qv(e) {
      gp = e;
    }
    var uc = !1, Hu = [], $n = null, Nr = null, aa = null, $u = /* @__PURE__ */ new Map(), Bu = /* @__PURE__ */ new Map(), Mr = [], Qv = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function ji(e) {
      return Qv.indexOf(e) > -1;
    }
    function zg(e, t, a, i, l) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: l,
        targetContainers: [i]
      };
    }
    function Sp(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          $n = null;
          break;
        case "dragenter":
        case "dragleave":
          Nr = null;
          break;
        case "mouseover":
        case "mouseout":
          aa = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          $u.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Bu.delete(i);
          break;
        }
      }
    }
    function Vu(e, t, a, i, l, d) {
      if (e === null || e.nativeEvent !== d) {
        var v = zg(t, a, i, l, d);
        if (t !== null) {
          var w = Zu(t);
          w !== null && Of(w);
        }
        return v;
      }
      e.eventSystemFlags |= i;
      var b = e.targetContainers;
      return l !== null && b.indexOf(l) === -1 && b.push(l), e;
    }
    function Gv(e, t, a, i, l) {
      switch (t) {
        case "focusin": {
          var d = l;
          return $n = Vu($n, e, t, a, i, d), !0;
        }
        case "dragenter": {
          var v = l;
          return Nr = Vu(Nr, e, t, a, i, v), !0;
        }
        case "mouseover": {
          var w = l;
          return aa = Vu(aa, e, t, a, i, w), !0;
        }
        case "pointerover": {
          var b = l, R = b.pointerId;
          return $u.set(R, Vu($u.get(R) || null, e, t, a, i, b)), !0;
        }
        case "gotpointercapture": {
          var T = l, H = T.pointerId;
          return Bu.set(H, Vu(Bu.get(H) || null, e, t, a, i, T)), !0;
        }
      }
      return !1;
    }
    function wp(e) {
      var t = wc(e.target);
      if (t !== null) {
        var a = Yo(t);
        if (a !== null) {
          var i = a.tag;
          if (i === be) {
            var l = tf(a);
            if (l !== null) {
              e.blockedOn = l, gp(e.priority, function() {
                Pu(a);
              });
              return;
            }
          } else if (i === U) {
            var d = a.stateNode;
            if (_f(d)) {
              e.blockedOn = nf(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Ug(e) {
      for (var t = Af(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Mr.length && Fu(t, Mr[i].priority); i++)
        ;
      Mr.splice(i, 0, a), i === 0 && wp(a);
    }
    function Yl(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = ta(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, d = new l.constructor(l.type, l);
          Cg(d), l.target.dispatchEvent(d), wv();
        } else {
          var v = Zu(i);
          return v !== null && Of(v), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Lf(e, t, a) {
      Yl(e) && a.delete(t);
    }
    function ri() {
      uc = !1, $n !== null && Yl($n) && ($n = null), Nr !== null && Yl(Nr) && (Nr = null), aa !== null && Yl(aa) && (aa = null), $u.forEach(Lf), Bu.forEach(Lf);
    }
    function $t(e, t) {
      e.blockedOn === t && (e.blockedOn = null, uc || (uc = !0, f.unstable_scheduleCallback(f.unstable_NormalPriority, ri)));
    }
    function ar(e) {
      if (Hu.length > 0) {
        $t(Hu[0], e);
        for (var t = 1; t < Hu.length; t++) {
          var a = Hu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      $n !== null && $t($n, e), Nr !== null && $t(Nr, e), aa !== null && $t(aa, e);
      var i = function(w) {
        return $t(w, e);
      };
      $u.forEach(i), Bu.forEach(i);
      for (var l = 0; l < Mr.length; l++) {
        var d = Mr[l];
        d.blockedOn === e && (d.blockedOn = null);
      }
      for (; Mr.length > 0; ) {
        var v = Mr[0];
        if (v.blockedOn !== null)
          break;
        wp(v), v.blockedOn === null && Mr.shift();
      }
    }
    var Fn = p.ReactCurrentBatchConfig, Cr = !0;
    function ka(e) {
      Cr = !!e;
    }
    function Iu() {
      return Cr;
    }
    function Rr(e, t, a) {
      var i = Nf(t), l;
      switch (i) {
        case dr:
          l = sc;
          break;
        case ho:
          l = Wl;
          break;
        case Fi:
        default:
          l = Yu;
          break;
      }
      return l.bind(null, t, a, e);
    }
    function sc(e, t, a, i) {
      var l = ni(), d = Fn.transition;
      Fn.transition = null;
      try {
        rr(dr), Yu(e, t, a, i);
      } finally {
        rr(l), Fn.transition = d;
      }
    }
    function Wl(e, t, a, i) {
      var l = ni(), d = Fn.transition;
      Fn.transition = null;
      try {
        rr(ho), Yu(e, t, a, i);
      } finally {
        rr(l), Fn.transition = d;
      }
    }
    function Yu(e, t, a, i) {
      Cr && Ep(e, t, a, i);
    }
    function Ep(e, t, a, i) {
      var l = ta(e, t, a, i);
      if (l === null) {
        Jg(e, t, i, el, a), Sp(e, i);
        return;
      }
      if (Gv(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Sp(e, i), t & Ps && ji(e)) {
        for (; l !== null; ) {
          var d = Zu(l);
          d !== null && yp(d);
          var v = ta(e, t, a, i);
          if (v === null && Jg(e, t, i, el, a), v === l)
            break;
          l = v;
        }
        l !== null && i.stopPropagation();
        return;
      }
      Jg(e, t, i, null, a);
    }
    var el = null;
    function ta(e, t, a, i) {
      el = null;
      var l = En(i), d = wc(l);
      if (d !== null) {
        var v = Yo(d);
        if (v === null)
          d = null;
        else {
          var w = v.tag;
          if (w === be) {
            var b = tf(v);
            if (b !== null)
              return b;
            d = null;
          } else if (w === U) {
            var R = v.stateNode;
            if (_f(R))
              return nf(v);
            d = null;
          } else v !== d && (d = null);
        }
      }
      return el = d, null;
    }
    function Nf(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return dr;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return ho;
        case "message": {
          var t = kg();
          switch (t) {
            case ba:
              return dr;
            case Cu:
              return ho;
            case Mi:
            case Ru:
              return Fi;
            case Ws:
              return zu;
            default:
              return Fi;
          }
        }
        default:
          return Fi;
      }
    }
    function Wu(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function vo(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Mf(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function bp(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var ai = null, qu = null, ii = null;
    function zf(e) {
      return ai = e, qu = fc(), !0;
    }
    function cc() {
      ai = null, qu = null, ii = null;
    }
    function Uf() {
      if (ii)
        return ii;
      var e, t = qu, a = t.length, i, l = fc(), d = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var v = a - e;
      for (i = 1; i <= v && t[a - i] === l[d - i]; i++)
        ;
      var w = i > 1 ? 1 - i : void 0;
      return ii = l.slice(e, w), ii;
    }
    function fc() {
      return "value" in ai ? ai.value : ai.textContent;
    }
    function ql(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function zr() {
      return !0;
    }
    function mo() {
      return !1;
    }
    function Kn(e) {
      function t(a, i, l, d, v) {
        this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = d, this.target = v, this.currentTarget = null;
        for (var w in e)
          if (e.hasOwnProperty(w)) {
            var b = e[w];
            b ? this[w] = b(d) : this[w] = d[w];
          }
        var R = d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1;
        return R ? this.isDefaultPrevented = zr : this.isDefaultPrevented = mo, this.isPropagationStopped = mo, this;
      }
      return Tt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = zr);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = zr);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: zr
      }), t;
    }
    var Tr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ff = Kn(Tr), Ql = Tt({}, Tr, {
      view: 0,
      detail: 0
    }), xp = Kn(Ql), Cp, Pi, Qu;
    function Rp(e) {
      e !== Qu && (Qu && e.type === "mousemove" ? (Cp = e.screenX - Qu.screenX, Pi = e.screenY - Qu.screenY) : (Cp = 0, Pi = 0), Qu = e);
    }
    var Hi = Tt({}, Ql, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Tp,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Rp(e), Cp);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Pi;
      }
    }), jf = Kn(Hi), Gl = Tt({}, Hi, {
      dataTransfer: 0
    }), Kv = Kn(Gl), Xv = Tt({}, Ql, {
      relatedTarget: 0
    }), dc = Kn(Xv), Pf = Tt({}, Tr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Fg = Kn(Pf), jg = Tt({}, Tr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Zv = Kn(jg), Jv = Tt({}, Tr, {
      data: 0
    }), tl = Kn(Jv), Pg = tl, Gu = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, em = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function ir(e) {
      if (e.key) {
        var t = Gu[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = ql(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? em[e.keyCode] || "Unidentified" : "";
    }
    var Hg = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function tm(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Hg[e];
      return i ? !!a[i] : !1;
    }
    function Tp(e) {
      return tm;
    }
    var $g = Tt({}, Ql, {
      key: ir,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Tp,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? ql(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? ql(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), nm = Kn($g), rm = Tt({}, Hi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), am = Kn(rm), oi = Tt({}, Ql, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Tp
    }), kp = Kn(oi), Bg = Tt({}, Tr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), nl = Kn(Bg), Hf = Tt({}, Hi, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Kl = Kn(Hf), $f = [9, 13, 27, 32], Bf = 229, pc = cn && "CompositionEvent" in window, hc = null;
    cn && "documentMode" in document && (hc = document.documentMode);
    var _p = cn && "TextEvent" in window && !hc, im = cn && (!pc || hc && hc > 8 && hc <= 11), Op = 32, Dp = String.fromCharCode(Op);
    function Vf() {
      Rn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Rn("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Rn("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Rn("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var vc = !1;
    function om(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Ap(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Vg(e, t) {
      return e === "keydown" && t.keyCode === Bf;
    }
    function Lp(e, t) {
      switch (e) {
        case "keyup":
          return $f.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Bf;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function If(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function mc(e) {
      return e.locale === "ko";
    }
    var rl = !1;
    function Yf(e, t, a, i, l) {
      var d, v;
      if (pc ? d = Ap(t) : rl ? Lp(t, i) && (d = "onCompositionEnd") : Vg(t, i) && (d = "onCompositionStart"), !d)
        return null;
      im && !mc(i) && (!rl && d === "onCompositionStart" ? rl = zf(l) : d === "onCompositionEnd" && rl && (v = Uf()));
      var w = dm(a, d);
      if (w.length > 0) {
        var b = new tl(d, t, null, i, l);
        if (e.push({
          event: b,
          listeners: w
        }), v)
          b.data = v;
        else {
          var R = If(i);
          R !== null && (b.data = R);
        }
      }
    }
    function lm(e, t) {
      switch (e) {
        case "compositionend":
          return If(t);
        case "keypress":
          var a = t.which;
          return a !== Op ? null : (vc = !0, Dp);
        case "textInput":
          var i = t.data;
          return i === Dp && vc ? null : i;
        default:
          return null;
      }
    }
    function Ig(e, t) {
      if (rl) {
        if (e === "compositionend" || !pc && Lp(e, t)) {
          var a = Uf();
          return cc(), rl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!om(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return im && !mc(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Wf(e, t, a, i, l) {
      var d;
      if (_p ? d = lm(t, i) : d = Ig(t, i), !d)
        return null;
      var v = dm(a, "onBeforeInput");
      if (v.length > 0) {
        var w = new Pg("onBeforeInput", "beforeinput", null, i, l);
        e.push({
          event: w,
          listeners: v
        }), w.data = d;
      }
    }
    function Yg(e, t, a, i, l, d, v) {
      Yf(e, t, a, i, l), Wf(e, t, a, i, l);
    }
    var yc = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function um(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!yc[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function qf(e) {
      if (!cn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function n() {
      Rn("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      Eu(i);
      var l = dm(t, "onChange");
      if (l.length > 0) {
        var d = new Ff("onChange", "change", null, a, i);
        e.push({
          event: d,
          listeners: l
        });
      }
    }
    var o = null, s = null;
    function h(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function m(e) {
      var t = [];
      r(t, s, e, En(e)), $s(C, t);
    }
    function C(e) {
      UE(e, 0);
    }
    function D(e) {
      var t = Jf(e);
      if (hu(t))
        return e;
    }
    function z(e, t) {
      if (e === "change")
        return t;
    }
    var J = !1;
    cn && (J = qf("input") && (!document.documentMode || document.documentMode > 9));
    function ve(e, t) {
      o = e, s = t, o.attachEvent("onpropertychange", de);
    }
    function Ee() {
      o && (o.detachEvent("onpropertychange", de), o = null, s = null);
    }
    function de(e) {
      e.propertyName === "value" && D(s) && m(e);
    }
    function Ue(e, t, a) {
      e === "focusin" ? (Ee(), ve(t, a)) : e === "focusout" && Ee();
    }
    function Qe(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return D(s);
    }
    function Je(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function pr(e, t) {
      if (e === "click")
        return D(t);
    }
    function Y(e, t) {
      if (e === "input" || e === "change")
        return D(t);
    }
    function P(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || yt(e, "number", e.value);
    }
    function Q(e, t, a, i, l, d, v) {
      var w = a ? Jf(a) : window, b, R;
      if (h(w) ? b = z : um(w) ? J ? b = Y : (b = Qe, R = Ue) : Je(w) && (b = pr), b) {
        var T = b(t, a);
        if (T) {
          r(e, T, i, l);
          return;
        }
      }
      R && R(t, w, a), t === "focusout" && P(w);
    }
    function ke() {
      Pn("onMouseEnter", ["mouseout", "mouseover"]), Pn("onMouseLeave", ["mouseout", "mouseover"]), Pn("onPointerEnter", ["pointerout", "pointerover"]), Pn("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function nt(e, t, a, i, l, d, v) {
      var w = t === "mouseover" || t === "pointerover", b = t === "mouseout" || t === "pointerout";
      if (w && !Ev(i)) {
        var R = i.relatedTarget || i.fromElement;
        if (R && (wc(R) || Wp(R)))
          return;
      }
      if (!(!b && !w)) {
        var T;
        if (l.window === l)
          T = l;
        else {
          var H = l.ownerDocument;
          H ? T = H.defaultView || H.parentWindow : T = window;
        }
        var F, X;
        if (b) {
          var Z = i.relatedTarget || i.toElement;
          if (F = a, X = Z ? wc(Z) : null, X !== null) {
            var re = Yo(X);
            (X !== re || X.tag !== j && X.tag !== $) && (X = null);
          }
        } else
          F = null, X = a;
        if (F !== X) {
          var He = jf, ft = "onMouseLeave", at = "onMouseEnter", Qt = "mouse";
          (t === "pointerout" || t === "pointerover") && (He = am, ft = "onPointerLeave", at = "onPointerEnter", Qt = "pointer");
          var Bt = F == null ? T : Jf(F), W = X == null ? T : Jf(X), ae = new He(ft, Qt + "leave", F, i, l);
          ae.target = Bt, ae.relatedTarget = W;
          var q = null, xe = wc(l);
          if (xe === a) {
            var $e = new He(at, Qt + "enter", X, i, l);
            $e.target = W, $e.relatedTarget = Bt, q = $e;
          }
          hT(e, ae, q, F, X);
        }
      }
    }
    function ht(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ge = typeof Object.is == "function" ? Object.is : ht;
    function vt(e, t) {
      if (Ge(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var d = a[l];
        if (!Dn.call(t, d) || !Ge(e[d], t[d]))
          return !1;
      }
      return !0;
    }
    function kr(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function rn(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function yo(e, t) {
      for (var a = kr(e), i = 0, l = 0; a; ) {
        if (a.nodeType === ao) {
          if (l = i + a.textContent.length, i <= t && l >= t)
            return {
              node: a,
              offset: t - i
            };
          i = l;
        }
        a = kr(rn(a));
      }
    }
    function Wg(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var l = i.anchorNode, d = i.anchorOffset, v = i.focusNode, w = i.focusOffset;
      try {
        l.nodeType, v.nodeType;
      } catch {
        return null;
      }
      return QR(e, l, d, v, w);
    }
    function QR(e, t, a, i, l) {
      var d = 0, v = -1, w = -1, b = 0, R = 0, T = e, H = null;
      e: for (; ; ) {
        for (var F = null; T === t && (a === 0 || T.nodeType === ao) && (v = d + a), T === i && (l === 0 || T.nodeType === ao) && (w = d + l), T.nodeType === ao && (d += T.nodeValue.length), (F = T.firstChild) !== null; )
          H = T, T = F;
        for (; ; ) {
          if (T === e)
            break e;
          if (H === t && ++b === a && (v = d), H === i && ++R === l && (w = d), (F = T.nextSibling) !== null)
            break;
          T = H, H = T.parentNode;
        }
        T = F;
      }
      return v === -1 || w === -1 ? null : {
        start: v,
        end: w
      };
    }
    function GR(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var l = i.getSelection(), d = e.textContent.length, v = Math.min(t.start, d), w = t.end === void 0 ? v : Math.min(t.end, d);
        if (!l.extend && v > w) {
          var b = w;
          w = v, v = b;
        }
        var R = yo(e, v), T = yo(e, w);
        if (R && T) {
          if (l.rangeCount === 1 && l.anchorNode === R.node && l.anchorOffset === R.offset && l.focusNode === T.node && l.focusOffset === T.offset)
            return;
          var H = a.createRange();
          H.setStart(R.node, R.offset), l.removeAllRanges(), v > w ? (l.addRange(H), l.extend(T.node, T.offset)) : (H.setEnd(T.node, T.offset), l.addRange(H));
        }
      }
    }
    function CE(e) {
      return e && e.nodeType === ao;
    }
    function RE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : CE(e) ? !1 : CE(t) ? RE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function KR(e) {
      return e && e.ownerDocument && RE(e.ownerDocument.documentElement, e);
    }
    function XR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function TE() {
      for (var e = window, t = Oi(); t instanceof e.HTMLIFrameElement; ) {
        if (XR(t))
          e = t.contentWindow;
        else
          return t;
        t = Oi(e.document);
      }
      return t;
    }
    function qg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function ZR() {
      var e = TE();
      return {
        focusedElem: e,
        selectionRange: qg(e) ? eT(e) : null
      };
    }
    function JR(e) {
      var t = TE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && KR(a)) {
        i !== null && qg(a) && tT(a, i);
        for (var l = [], d = a; d = d.parentNode; )
          d.nodeType === ya && l.push({
            element: d,
            left: d.scrollLeft,
            top: d.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var v = 0; v < l.length; v++) {
          var w = l[v];
          w.element.scrollLeft = w.left, w.element.scrollTop = w.top;
        }
      }
    }
    function eT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Wg(e), t || {
        start: 0,
        end: 0
      };
    }
    function tT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : GR(e, t);
    }
    var nT = cn && "documentMode" in document && document.documentMode <= 11;
    function rT() {
      Rn("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Qf = null, Qg = null, Np = null, Gg = !1;
    function aT(e) {
      if ("selectionStart" in e && qg(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function iT(e) {
      return e.window === e ? e.document : e.nodeType === Na ? e : e.ownerDocument;
    }
    function kE(e, t, a) {
      var i = iT(a);
      if (!(Gg || Qf == null || Qf !== Oi(i))) {
        var l = aT(Qf);
        if (!Np || !vt(Np, l)) {
          Np = l;
          var d = dm(Qg, "onSelect");
          if (d.length > 0) {
            var v = new Ff("onSelect", "select", null, t, a);
            e.push({
              event: v,
              listeners: d
            }), v.target = Qf;
          }
        }
      }
    }
    function oT(e, t, a, i, l, d, v) {
      var w = a ? Jf(a) : window;
      switch (t) {
        case "focusin":
          (um(w) || w.contentEditable === "true") && (Qf = w, Qg = a, Np = null);
          break;
        case "focusout":
          Qf = null, Qg = null, Np = null;
          break;
        case "mousedown":
          Gg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Gg = !1, kE(e, i, l);
          break;
        case "selectionchange":
          if (nT)
            break;
        case "keydown":
        case "keyup":
          kE(e, i, l);
      }
    }
    function sm(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Gf = {
      animationend: sm("Animation", "AnimationEnd"),
      animationiteration: sm("Animation", "AnimationIteration"),
      animationstart: sm("Animation", "AnimationStart"),
      transitionend: sm("Transition", "TransitionEnd")
    }, Kg = {}, _E = {};
    cn && (_E = document.createElement("div").style, "AnimationEvent" in window || (delete Gf.animationend.animation, delete Gf.animationiteration.animation, delete Gf.animationstart.animation), "TransitionEvent" in window || delete Gf.transitionend.transition);
    function cm(e) {
      if (Kg[e])
        return Kg[e];
      if (!Gf[e])
        return e;
      var t = Gf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in _E)
          return Kg[e] = t[a];
      return e;
    }
    var OE = cm("animationend"), DE = cm("animationiteration"), AE = cm("animationstart"), LE = cm("transitionend"), NE = /* @__PURE__ */ new Map(), ME = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Ku(e, t) {
      NE.set(e, t), Rn(t, [e]);
    }
    function lT() {
      for (var e = 0; e < ME.length; e++) {
        var t = ME[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Ku(a, "on" + i);
      }
      Ku(OE, "onAnimationEnd"), Ku(DE, "onAnimationIteration"), Ku(AE, "onAnimationStart"), Ku("dblclick", "onDoubleClick"), Ku("focusin", "onFocus"), Ku("focusout", "onBlur"), Ku(LE, "onTransitionEnd");
    }
    function uT(e, t, a, i, l, d, v) {
      var w = NE.get(t);
      if (w !== void 0) {
        var b = Ff, R = t;
        switch (t) {
          case "keypress":
            if (ql(i) === 0)
              return;
          case "keydown":
          case "keyup":
            b = nm;
            break;
          case "focusin":
            R = "focus", b = dc;
            break;
          case "focusout":
            R = "blur", b = dc;
            break;
          case "beforeblur":
          case "afterblur":
            b = dc;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            b = jf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            b = Kv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            b = kp;
            break;
          case OE:
          case DE:
          case AE:
            b = Fg;
            break;
          case LE:
            b = nl;
            break;
          case "scroll":
            b = xp;
            break;
          case "wheel":
            b = Kl;
            break;
          case "copy":
          case "cut":
          case "paste":
            b = Zv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            b = am;
            break;
        }
        var T = (d & Ps) !== 0;
        {
          var H = !T && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", F = dT(a, w, i.type, T, H);
          if (F.length > 0) {
            var X = new b(w, R, null, i, l);
            e.push({
              event: X,
              listeners: F
            });
          }
        }
      }
    }
    lT(), ke(), n(), rT(), Vf();
    function sT(e, t, a, i, l, d, v) {
      uT(e, t, a, i, l, d);
      var w = (d & xg) === 0;
      w && (nt(e, t, a, i, l), Q(e, t, a, i, l), oT(e, t, a, i, l), Yg(e, t, a, i, l));
    }
    var Mp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Xg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Mp));
    function zE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Jd(i, t, void 0, e), e.currentTarget = null;
    }
    function cT(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var d = t[l], v = d.instance, w = d.currentTarget, b = d.listener;
          if (v !== i && e.isPropagationStopped())
            return;
          zE(e, b, w), i = v;
        }
      else
        for (var R = 0; R < t.length; R++) {
          var T = t[R], H = T.instance, F = T.currentTarget, X = T.listener;
          if (H !== i && e.isPropagationStopped())
            return;
          zE(e, X, F), i = H;
        }
    }
    function UE(e, t) {
      for (var a = (t & Ps) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], d = l.event, v = l.listeners;
        cT(d, v, a);
      }
      Rg();
    }
    function fT(e, t, a, i, l) {
      var d = En(a), v = [];
      sT(v, e, i, a, d, t), UE(v, t);
    }
    function Xn(e, t) {
      Xg.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = $k(t), l = vT(e);
      i.has(l) || (FE(t, e, js, a), i.add(l));
    }
    function Zg(e, t, a) {
      Xg.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Ps), FE(a, e, i, t);
    }
    var fm = "_reactListening" + Math.random().toString(36).slice(2);
    function zp(e) {
      if (!e[fm]) {
        e[fm] = !0, Ft.forEach(function(a) {
          a !== "selectionchange" && (Xg.has(a) || Zg(a, !1, e), Zg(a, !0, e));
        });
        var t = e.nodeType === Na ? e : e.ownerDocument;
        t !== null && (t[fm] || (t[fm] = !0, Zg("selectionchange", !1, t)));
      }
    }
    function FE(e, t, a, i, l) {
      var d = Rr(e, t, a), v = void 0;
      Bs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (v = !0), e = e, i ? v !== void 0 ? Mf(e, t, d, v) : vo(e, t, d) : v !== void 0 ? bp(e, t, d, v) : Wu(e, t, d);
    }
    function jE(e, t) {
      return e === t || e.nodeType === er && e.parentNode === t;
    }
    function Jg(e, t, a, i, l) {
      var d = i;
      if (!(t & Kc) && !(t & js)) {
        var v = l;
        if (i !== null) {
          var w = i;
          e: for (; ; ) {
            if (w === null)
              return;
            var b = w.tag;
            if (b === U || b === V) {
              var R = w.stateNode.containerInfo;
              if (jE(R, v))
                break;
              if (b === V)
                for (var T = w.return; T !== null; ) {
                  var H = T.tag;
                  if (H === U || H === V) {
                    var F = T.stateNode.containerInfo;
                    if (jE(F, v))
                      return;
                  }
                  T = T.return;
                }
              for (; R !== null; ) {
                var X = wc(R);
                if (X === null)
                  return;
                var Z = X.tag;
                if (Z === j || Z === $) {
                  w = d = X;
                  continue e;
                }
                R = R.parentNode;
              }
            }
            w = w.return;
          }
        }
      }
      $s(function() {
        return fT(e, t, a, d);
      });
    }
    function Up(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function dT(e, t, a, i, l, d) {
      for (var v = t !== null ? t + "Capture" : null, w = i ? v : t, b = [], R = e, T = null; R !== null; ) {
        var H = R, F = H.stateNode, X = H.tag;
        if (X === j && F !== null && (T = F, w !== null)) {
          var Z = Al(R, w);
          Z != null && b.push(Up(R, Z, T));
        }
        if (l)
          break;
        R = R.return;
      }
      return b;
    }
    function dm(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var d = l, v = d.stateNode, w = d.tag;
        if (w === j && v !== null) {
          var b = v, R = Al(l, a);
          R != null && i.unshift(Up(l, R, b));
          var T = Al(l, t);
          T != null && i.push(Up(l, T, b));
        }
        l = l.return;
      }
      return i;
    }
    function Kf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== j);
      return e || null;
    }
    function pT(e, t) {
      for (var a = e, i = t, l = 0, d = a; d; d = Kf(d))
        l++;
      for (var v = 0, w = i; w; w = Kf(w))
        v++;
      for (; l - v > 0; )
        a = Kf(a), l--;
      for (; v - l > 0; )
        i = Kf(i), v--;
      for (var b = l; b--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Kf(a), i = Kf(i);
      }
      return null;
    }
    function PE(e, t, a, i, l) {
      for (var d = t._reactName, v = [], w = a; w !== null && w !== i; ) {
        var b = w, R = b.alternate, T = b.stateNode, H = b.tag;
        if (R !== null && R === i)
          break;
        if (H === j && T !== null) {
          var F = T;
          if (l) {
            var X = Al(w, d);
            X != null && v.unshift(Up(w, X, F));
          } else if (!l) {
            var Z = Al(w, d);
            Z != null && v.push(Up(w, Z, F));
          }
        }
        w = w.return;
      }
      v.length !== 0 && e.push({
        event: t,
        listeners: v
      });
    }
    function hT(e, t, a, i, l) {
      var d = i && l ? pT(i, l) : null;
      i !== null && PE(e, t, i, d, !1), l !== null && a !== null && PE(e, a, l, d, !0);
    }
    function vT(e, t) {
      return e + "__bubble";
    }
    var li = !1, Fp = "dangerouslySetInnerHTML", pm = "suppressContentEditableWarning", Xu = "suppressHydrationWarning", HE = "autoFocus", gc = "children", Sc = "style", hm = "__html", e0, vm, jp, $E, mm, BE, VE;
    e0 = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, vm = function(e, t) {
      wu(e, t), vv(e, t), $o(e, t, {
        registrationNameDependencies: jt,
        possibleRegistrationNames: Cn
      });
    }, BE = cn && !document.documentMode, jp = function(e, t, a) {
      if (!li) {
        var i = ym(a), l = ym(t);
        l !== i && (li = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, $E = function(e) {
      if (!li) {
        li = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, mm = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, VE = function(e, t) {
      var a = e.namespaceURI === ro ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var mT = /\r\n?/g, yT = /\u0000|\uFFFD/g;
    function ym(e) {
      Or(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(mT, `
`).replace(yT, "");
    }
    function gm(e, t, a, i) {
      var l = ym(t), d = ym(e);
      if (d !== l && (i && (li || (li = !0, g('Text content did not match. Server: "%s" Client: "%s"', d, l))), a && I))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function IE(e) {
      return e.nodeType === Na ? e : e.ownerDocument;
    }
    function gT() {
    }
    function Sm(e) {
      e.onclick = gT;
    }
    function ST(e, t, a, i, l) {
      for (var d in i)
        if (i.hasOwnProperty(d)) {
          var v = i[d];
          if (d === Sc)
            v && Object.freeze(v), sv(t, v);
          else if (d === Fp) {
            var w = v ? v[hm] : void 0;
            w != null && ev(t, w);
          } else if (d === gc)
            if (typeof v == "string") {
              var b = e !== "textarea" || v !== "";
              b && Ls(t, v);
            } else typeof v == "number" && Ls(t, "" + v);
          else d === pm || d === Xu || d === HE || (jt.hasOwnProperty(d) ? v != null && (typeof v != "function" && mm(d, v), d === "onScroll" && Xn("scroll", t)) : v != null && Ze(t, d, v, l));
        }
    }
    function wT(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var d = t[l], v = t[l + 1];
        d === Sc ? sv(e, v) : d === Fp ? ev(e, v) : d === gc ? Ls(e, v) : Ze(e, d, v, i);
      }
    }
    function ET(e, t, a, i) {
      var l, d = IE(a), v, w = i;
      if (w === ro && (w = zd(e)), w === ro) {
        if (l = _l(e, t), !l && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var b = d.createElement("div");
          b.innerHTML = "<script><\/script>";
          var R = b.firstChild;
          v = b.removeChild(R);
        } else if (typeof t.is == "string")
          v = d.createElement(e, {
            is: t.is
          });
        else if (v = d.createElement(e), e === "select") {
          var T = v;
          t.multiple ? T.multiple = !0 : t.size && (T.size = t.size);
        }
      } else
        v = d.createElementNS(w, e);
      return w === ro && !l && Object.prototype.toString.call(v) === "[object HTMLUnknownElement]" && !Dn.call(e0, e) && (e0[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), v;
    }
    function bT(e, t) {
      return IE(t).createTextNode(e);
    }
    function xT(e, t, a, i) {
      var l = _l(t, a);
      vm(t, a);
      var d;
      switch (t) {
        case "dialog":
          Xn("cancel", e), Xn("close", e), d = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Xn("load", e), d = a;
          break;
        case "video":
        case "audio":
          for (var v = 0; v < Mp.length; v++)
            Xn(Mp[v], e);
          d = a;
          break;
        case "source":
          Xn("error", e), d = a;
          break;
        case "img":
        case "image":
        case "link":
          Xn("error", e), Xn("load", e), d = a;
          break;
        case "details":
          Xn("toggle", e), d = a;
          break;
        case "input":
          M(e, a), d = x(e, a), Xn("invalid", e);
          break;
        case "option":
          mn(e, a), d = a;
          break;
        case "select":
          As(e, a), d = Ds(e, a), Xn("invalid", e);
          break;
        case "textarea":
          Zh(e, a), d = Md(e, a), Xn("invalid", e);
          break;
        default:
          d = a;
      }
      switch (zs(t, d), ST(t, e, i, d, l), t) {
        case "input":
          eo(e), Te(e, a, !1);
          break;
        case "textarea":
          eo(e), Vc(e);
          break;
        case "option":
          yn(e, a);
          break;
        case "select":
          Nd(e, a);
          break;
        default:
          typeof d.onClick == "function" && Sm(e);
          break;
      }
    }
    function CT(e, t, a, i, l) {
      vm(t, i);
      var d = null, v, w;
      switch (t) {
        case "input":
          v = x(e, a), w = x(e, i), d = [];
          break;
        case "select":
          v = Ds(e, a), w = Ds(e, i), d = [];
          break;
        case "textarea":
          v = Md(e, a), w = Md(e, i), d = [];
          break;
        default:
          v = a, w = i, typeof v.onClick != "function" && typeof w.onClick == "function" && Sm(e);
          break;
      }
      zs(t, w);
      var b, R, T = null;
      for (b in v)
        if (!(w.hasOwnProperty(b) || !v.hasOwnProperty(b) || v[b] == null))
          if (b === Sc) {
            var H = v[b];
            for (R in H)
              H.hasOwnProperty(R) && (T || (T = {}), T[R] = "");
          } else b === Fp || b === gc || b === pm || b === Xu || b === HE || (jt.hasOwnProperty(b) ? d || (d = []) : (d = d || []).push(b, null));
      for (b in w) {
        var F = w[b], X = v != null ? v[b] : void 0;
        if (!(!w.hasOwnProperty(b) || F === X || F == null && X == null))
          if (b === Sc)
            if (F && Object.freeze(F), X) {
              for (R in X)
                X.hasOwnProperty(R) && (!F || !F.hasOwnProperty(R)) && (T || (T = {}), T[R] = "");
              for (R in F)
                F.hasOwnProperty(R) && X[R] !== F[R] && (T || (T = {}), T[R] = F[R]);
            } else
              T || (d || (d = []), d.push(b, T)), T = F;
          else if (b === Fp) {
            var Z = F ? F[hm] : void 0, re = X ? X[hm] : void 0;
            Z != null && re !== Z && (d = d || []).push(b, Z);
          } else b === gc ? (typeof F == "string" || typeof F == "number") && (d = d || []).push(b, "" + F) : b === pm || b === Xu || (jt.hasOwnProperty(b) ? (F != null && (typeof F != "function" && mm(b, F), b === "onScroll" && Xn("scroll", e)), !d && X !== F && (d = [])) : (d = d || []).push(b, F));
      }
      return T && (cv(T, w[Sc]), (d = d || []).push(Sc, T)), d;
    }
    function RT(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && G(e, l);
      var d = _l(a, i), v = _l(a, l);
      switch (wT(e, t, d, v), a) {
        case "input":
          te(e, l);
          break;
        case "textarea":
          Jh(e, l);
          break;
        case "select":
          dg(e, l);
          break;
      }
    }
    function TT(e) {
      {
        var t = e.toLowerCase();
        return qc.hasOwnProperty(t) && qc[t] || null;
      }
    }
    function kT(e, t, a, i, l, d, v) {
      var w, b;
      switch (w = _l(t, a), vm(t, a), t) {
        case "dialog":
          Xn("cancel", e), Xn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Xn("load", e);
          break;
        case "video":
        case "audio":
          for (var R = 0; R < Mp.length; R++)
            Xn(Mp[R], e);
          break;
        case "source":
          Xn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Xn("error", e), Xn("load", e);
          break;
        case "details":
          Xn("toggle", e);
          break;
        case "input":
          M(e, a), Xn("invalid", e);
          break;
        case "option":
          mn(e, a);
          break;
        case "select":
          As(e, a), Xn("invalid", e);
          break;
        case "textarea":
          Zh(e, a), Xn("invalid", e);
          break;
      }
      zs(t, a);
      {
        b = /* @__PURE__ */ new Set();
        for (var T = e.attributes, H = 0; H < T.length; H++) {
          var F = T[H].name.toLowerCase();
          switch (F) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              b.add(T[H].name);
          }
        }
      }
      var X = null;
      for (var Z in a)
        if (a.hasOwnProperty(Z)) {
          var re = a[Z];
          if (Z === gc)
            typeof re == "string" ? e.textContent !== re && (a[Xu] !== !0 && gm(e.textContent, re, d, v), X = [gc, re]) : typeof re == "number" && e.textContent !== "" + re && (a[Xu] !== !0 && gm(e.textContent, re, d, v), X = [gc, "" + re]);
          else if (jt.hasOwnProperty(Z))
            re != null && (typeof re != "function" && mm(Z, re), Z === "onScroll" && Xn("scroll", e));
          else if (v && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof w == "boolean") {
            var He = void 0, ft = w && Ye ? null : Ln(Z);
            if (a[Xu] !== !0) {
              if (!(Z === pm || Z === Xu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              Z === "value" || Z === "checked" || Z === "selected")) {
                if (Z === Fp) {
                  var at = e.innerHTML, Qt = re ? re[hm] : void 0;
                  if (Qt != null) {
                    var Bt = VE(e, Qt);
                    Bt !== at && jp(Z, at, Bt);
                  }
                } else if (Z === Sc) {
                  if (b.delete(Z), BE) {
                    var W = bg(re);
                    He = e.getAttribute("style"), W !== He && jp(Z, He, W);
                  }
                } else if (w && !Ye)
                  b.delete(Z.toLowerCase()), He = _e(e, Z, re), re !== He && jp(Z, He, re);
                else if (!fn(Z, ft, w) && !Wt(Z, re, ft, w)) {
                  var ae = !1;
                  if (ft !== null)
                    b.delete(ft.attributeName), He = br(e, Z, re, ft);
                  else {
                    var q = i;
                    if (q === ro && (q = zd(t)), q === ro)
                      b.delete(Z.toLowerCase());
                    else {
                      var xe = TT(Z);
                      xe !== null && xe !== Z && (ae = !0, b.delete(xe)), b.delete(Z);
                    }
                    He = _e(e, Z, re);
                  }
                  var $e = Ye;
                  !$e && re !== He && !ae && jp(Z, He, re);
                }
              }
            }
          }
        }
      switch (v && // $FlowFixMe - Should be inferred as not undefined.
      b.size > 0 && a[Xu] !== !0 && $E(b), t) {
        case "input":
          eo(e), Te(e, a, !0);
          break;
        case "textarea":
          eo(e), Vc(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Sm(e);
          break;
      }
      return X;
    }
    function _T(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function t0(e, t) {
      {
        if (li)
          return;
        li = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function n0(e, t) {
      {
        if (li)
          return;
        li = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function r0(e, t, a) {
      {
        if (li)
          return;
        li = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function a0(e, t) {
      {
        if (t === "" || li)
          return;
        li = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function OT(e, t, a) {
      switch (t) {
        case "input":
          Xe(e, a);
          return;
        case "textarea":
          pg(e, a);
          return;
        case "select":
          Kh(e, a);
          return;
      }
    }
    var Pp = function() {
    }, Hp = function() {
    };
    {
      var DT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], YE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], AT = YE.concat(["button"]), LT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], WE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Hp = function(e, t) {
        var a = Tt({}, e || WE), i = {
          tag: t
        };
        return YE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), AT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), DT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var NT = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return LT.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, MT = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, qE = {};
      Pp = function(e, t, a) {
        a = a || WE;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var d = NT(e, l) ? null : i, v = d ? null : MT(e, a), w = d || v;
        if (w) {
          var b = w.tag, R = !!d + "|" + e + "|" + b;
          if (!qE[R]) {
            qE[R] = !0;
            var T = e, H = "";
            if (e === "#text" ? /\S/.test(t) ? T = "Text nodes" : (T = "Whitespace text nodes", H = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : T = "<" + e + ">", d) {
              var F = "";
              b === "table" && e === "tr" && (F += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", T, b, H, F);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", T, b);
          }
        }
      };
    }
    var wm = "suppressHydrationWarning", Em = "$", bm = "/$", $p = "$?", Bp = "$!", zT = "style", i0 = null, o0 = null;
    function UT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Na:
        case Fd: {
          t = i === Na ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : Ud(null, "");
          break;
        }
        default: {
          var d = i === er ? e.parentNode : e, v = d.namespaceURI || null;
          t = d.tagName, a = Ud(v, t);
          break;
        }
      }
      {
        var w = t.toLowerCase(), b = Hp(null, w);
        return {
          namespace: a,
          ancestorInfo: b
        };
      }
    }
    function FT(e, t, a) {
      {
        var i = e, l = Ud(i.namespace, t), d = Hp(i.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: d
        };
      }
    }
    function zz(e) {
      return e;
    }
    function jT(e) {
      i0 = Iu(), o0 = ZR();
      var t = null;
      return ka(!1), t;
    }
    function PT(e) {
      JR(o0), ka(i0), i0 = null, o0 = null;
    }
    function HT(e, t, a, i, l) {
      var d;
      {
        var v = i;
        if (Pp(e, null, v.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var w = "" + t.children, b = Hp(v.ancestorInfo, e);
          Pp(null, w, b);
        }
        d = v.namespace;
      }
      var R = ET(e, t, a, d);
      return Yp(l, R), h0(R, t), R;
    }
    function $T(e, t) {
      e.appendChild(t);
    }
    function BT(e, t, a, i, l) {
      switch (xT(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function VT(e, t, a, i, l, d) {
      {
        var v = d;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var w = "" + i.children, b = Hp(v.ancestorInfo, t);
          Pp(null, w, b);
        }
      }
      return CT(e, t, a, i);
    }
    function l0(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function IT(e, t, a, i) {
      {
        var l = a;
        Pp(null, e, l.ancestorInfo);
      }
      var d = bT(e, t);
      return Yp(i, d), d;
    }
    function YT() {
      var e = window.event;
      return e === void 0 ? Fi : Nf(e.type);
    }
    var u0 = typeof setTimeout == "function" ? setTimeout : void 0, WT = typeof clearTimeout == "function" ? clearTimeout : void 0, s0 = -1, QE = typeof Promise == "function" ? Promise : void 0, qT = typeof queueMicrotask == "function" ? queueMicrotask : typeof QE < "u" ? function(e) {
      return QE.resolve(null).then(e).catch(QT);
    } : u0;
    function QT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function GT(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function KT(e, t, a, i, l, d) {
      RT(e, t, a, i, l), h0(e, l);
    }
    function GE(e) {
      Ls(e, "");
    }
    function XT(e, t, a) {
      e.nodeValue = a;
    }
    function ZT(e, t) {
      e.appendChild(t);
    }
    function JT(e, t) {
      var a;
      e.nodeType === er ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Sm(a);
    }
    function ek(e, t, a) {
      e.insertBefore(t, a);
    }
    function tk(e, t, a) {
      e.nodeType === er ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function nk(e, t) {
      e.removeChild(t);
    }
    function rk(e, t) {
      e.nodeType === er ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function c0(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === er) {
          var d = l.data;
          if (d === bm)
            if (i === 0) {
              e.removeChild(l), ar(t);
              return;
            } else
              i--;
          else (d === Em || d === $p || d === Bp) && i++;
        }
        a = l;
      } while (a);
      ar(t);
    }
    function ak(e, t) {
      e.nodeType === er ? c0(e.parentNode, t) : e.nodeType === ya && c0(e, t), ar(e);
    }
    function ik(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function ok(e) {
      e.nodeValue = "";
    }
    function lk(e, t) {
      e = e;
      var a = t[zT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Po("display", i);
    }
    function uk(e, t) {
      e.nodeValue = t;
    }
    function sk(e) {
      e.nodeType === ya ? e.textContent = "" : e.nodeType === Na && e.documentElement && e.removeChild(e.documentElement);
    }
    function ck(e, t, a) {
      return e.nodeType !== ya || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function fk(e, t) {
      return t === "" || e.nodeType !== ao ? null : e;
    }
    function dk(e) {
      return e.nodeType !== er ? null : e;
    }
    function KE(e) {
      return e.data === $p;
    }
    function f0(e) {
      return e.data === Bp;
    }
    function pk(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), {
        message: i,
        digest: a,
        stack: l
      };
    }
    function hk(e, t) {
      e._reactRetry = t;
    }
    function xm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ya || t === ao)
          break;
        if (t === er) {
          var a = e.data;
          if (a === Em || a === Bp || a === $p)
            break;
          if (a === bm)
            return null;
        }
      }
      return e;
    }
    function Vp(e) {
      return xm(e.nextSibling);
    }
    function vk(e) {
      return xm(e.firstChild);
    }
    function mk(e) {
      return xm(e.firstChild);
    }
    function yk(e) {
      return xm(e.nextSibling);
    }
    function gk(e, t, a, i, l, d, v) {
      Yp(d, e), h0(e, a);
      var w;
      {
        var b = l;
        w = b.namespace;
      }
      var R = (d.mode & rt) !== ct;
      return kT(e, t, a, w, i, R, v);
    }
    function Sk(e, t, a, i) {
      return Yp(a, e), a.mode & rt, _T(e, t);
    }
    function wk(e, t) {
      Yp(t, e);
    }
    function Ek(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === er) {
          var i = t.data;
          if (i === bm) {
            if (a === 0)
              return Vp(t);
            a--;
          } else (i === Em || i === Bp || i === $p) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function XE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === er) {
          var i = t.data;
          if (i === Em || i === Bp || i === $p) {
            if (a === 0)
              return t;
            a--;
          } else i === bm && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function bk(e) {
      ar(e);
    }
    function xk(e) {
      ar(e);
    }
    function Ck(e) {
      return e !== "head" && e !== "body";
    }
    function Rk(e, t, a, i) {
      var l = !0;
      gm(t.nodeValue, a, i, l);
    }
    function Tk(e, t, a, i, l, d) {
      if (t[wm] !== !0) {
        var v = !0;
        gm(i.nodeValue, l, d, v);
      }
    }
    function kk(e, t) {
      t.nodeType === ya ? t0(e, t) : t.nodeType === er || n0(e, t);
    }
    function _k(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === ya ? t0(a, t) : t.nodeType === er || n0(a, t));
      }
    }
    function Ok(e, t, a, i, l) {
      (l || t[wm] !== !0) && (i.nodeType === ya ? t0(a, i) : i.nodeType === er || n0(a, i));
    }
    function Dk(e, t, a) {
      r0(e, t);
    }
    function Ak(e, t) {
      a0(e, t);
    }
    function Lk(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && r0(i, t);
      }
    }
    function Nk(e, t) {
      {
        var a = e.parentNode;
        a !== null && a0(a, t);
      }
    }
    function Mk(e, t, a, i, l, d) {
      (d || t[wm] !== !0) && r0(a, i);
    }
    function zk(e, t, a, i, l) {
      (l || t[wm] !== !0) && a0(a, i);
    }
    function Uk(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Fk(e) {
      zp(e);
    }
    var Xf = Math.random().toString(36).slice(2), Zf = "__reactFiber$" + Xf, d0 = "__reactProps$" + Xf, Ip = "__reactContainer$" + Xf, p0 = "__reactEvents$" + Xf, jk = "__reactListeners$" + Xf, Pk = "__reactHandles$" + Xf;
    function Hk(e) {
      delete e[Zf], delete e[d0], delete e[p0], delete e[jk], delete e[Pk];
    }
    function Yp(e, t) {
      t[Zf] = e;
    }
    function Cm(e, t) {
      t[Ip] = e;
    }
    function ZE(e) {
      e[Ip] = null;
    }
    function Wp(e) {
      return !!e[Ip];
    }
    function wc(e) {
      var t = e[Zf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Ip] || a[Zf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = XE(e); l !== null; ) {
              var d = l[Zf];
              if (d)
                return d;
              l = XE(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Zu(e) {
      var t = e[Zf] || e[Ip];
      return t && (t.tag === j || t.tag === $ || t.tag === be || t.tag === U) ? t : null;
    }
    function Jf(e) {
      if (e.tag === j || e.tag === $)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Rm(e) {
      return e[d0] || null;
    }
    function h0(e, t) {
      e[d0] = t;
    }
    function $k(e) {
      var t = e[p0];
      return t === void 0 && (t = e[p0] = /* @__PURE__ */ new Set()), t;
    }
    var JE = {}, eb = p.ReactDebugCurrentFrame;
    function Tm(e) {
      if (e) {
        var t = e._owner, a = It(e.type, e._source, t ? t.type : null);
        eb.setExtraStackFrame(a);
      } else
        eb.setExtraStackFrame(null);
    }
    function go(e, t, a, i, l) {
      {
        var d = Function.call.bind(Dn);
        for (var v in e)
          if (d(e, v)) {
            var w = void 0;
            try {
              if (typeof e[v] != "function") {
                var b = Error((i || "React class") + ": " + a + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              w = e[v](t, v, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              w = R;
            }
            w && !(w instanceof Error) && (Tm(l), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, v, typeof w), Tm(null)), w instanceof Error && !(w.message in JE) && (JE[w.message] = !0, Tm(l), g("Failed %s type: %s", a, w.message), Tm(null));
          }
      }
    }
    var v0 = [], km;
    km = [];
    var Xl = -1;
    function Ju(e) {
      return {
        current: e
      };
    }
    function _a(e, t) {
      if (Xl < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== km[Xl] && g("Unexpected Fiber popped."), e.current = v0[Xl], v0[Xl] = null, km[Xl] = null, Xl--;
    }
    function Oa(e, t, a) {
      Xl++, v0[Xl] = e.current, km[Xl] = a, e.current = t;
    }
    var m0;
    m0 = {};
    var bi = {};
    Object.freeze(bi);
    var Zl = Ju(bi), al = Ju(!1), y0 = bi;
    function ed(e, t, a) {
      return a && il(t) ? y0 : Zl.current;
    }
    function tb(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function td(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return bi;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var d = {};
        for (var v in i)
          d[v] = t[v];
        {
          var w = bt(e) || "Unknown";
          go(i, d, "context", w);
        }
        return l && tb(e, t, d), d;
      }
    }
    function _m() {
      return al.current;
    }
    function il(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Om(e) {
      _a(al, e), _a(Zl, e);
    }
    function g0(e) {
      _a(al, e), _a(Zl, e);
    }
    function nb(e, t, a) {
      {
        if (Zl.current !== bi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Oa(Zl, t, e), Oa(al, a, e);
      }
    }
    function rb(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var d = bt(e) || "Unknown";
            m0[d] || (m0[d] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", d, d));
          }
          return a;
        }
        var v = i.getChildContext();
        for (var w in v)
          if (!(w in l))
            throw new Error((bt(e) || "Unknown") + '.getChildContext(): key "' + w + '" is not defined in childContextTypes.');
        {
          var b = bt(e) || "Unknown";
          go(l, v, "child context", b);
        }
        return Tt({}, a, v);
      }
    }
    function Dm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || bi;
        return y0 = Zl.current, Oa(Zl, a, e), Oa(al, al.current, e), !0;
      }
    }
    function ab(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = rb(e, t, y0);
          i.__reactInternalMemoizedMergedChildContext = l, _a(al, e), _a(Zl, e), Oa(Zl, l, e), Oa(al, a, e);
        } else
          _a(al, e), Oa(al, a, e);
      }
    }
    function Bk(e) {
      {
        if (!Ua(e) || e.tag !== O)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case U:
              return t.stateNode.context;
            case O: {
              var a = t.type;
              if (il(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var es = 0, Am = 1, Jl = null, S0 = !1, w0 = !1;
    function ib(e) {
      Jl === null ? Jl = [e] : Jl.push(e);
    }
    function Vk(e) {
      S0 = !0, ib(e);
    }
    function ob() {
      S0 && ts();
    }
    function ts() {
      if (!w0 && Jl !== null) {
        w0 = !0;
        var e = 0, t = ni();
        try {
          var a = !0, i = Jl;
          for (rr(dr); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          Jl = null, S0 = !1;
        } catch (d) {
          throw Jl !== null && (Jl = Jl.slice(e + 1)), rp(ba, ts), d;
        } finally {
          rr(t), w0 = !1;
        }
      }
      return null;
    }
    var nd = [], rd = 0, Lm = null, Nm = 0, $i = [], Bi = 0, Ec = null, eu = 1, tu = "";
    function Ik(e) {
      return xc(), (e.flags & Tv) !== st;
    }
    function Yk(e) {
      return xc(), Nm;
    }
    function Wk() {
      var e = tu, t = eu, a = t & ~qk(t);
      return a.toString(32) + e;
    }
    function bc(e, t) {
      xc(), nd[rd++] = Nm, nd[rd++] = Lm, Lm = e, Nm = t;
    }
    function lb(e, t, a) {
      xc(), $i[Bi++] = eu, $i[Bi++] = tu, $i[Bi++] = Ec, Ec = e;
      var i = eu, l = tu, d = Mm(i) - 1, v = i & ~(1 << d), w = a + 1, b = Mm(t) + d;
      if (b > 30) {
        var R = d - d % 5, T = (1 << R) - 1, H = (v & T).toString(32), F = v >> R, X = d - R, Z = Mm(t) + X, re = w << X, He = re | F, ft = H + l;
        eu = 1 << Z | He, tu = ft;
      } else {
        var at = w << d, Qt = at | v, Bt = l;
        eu = 1 << b | Qt, tu = Bt;
      }
    }
    function E0(e) {
      xc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        bc(e, a), lb(e, a, i);
      }
    }
    function Mm(e) {
      return 32 - Xs(e);
    }
    function qk(e) {
      return 1 << Mm(e) - 1;
    }
    function b0(e) {
      for (; e === Lm; )
        Lm = nd[--rd], nd[rd] = null, Nm = nd[--rd], nd[rd] = null;
      for (; e === Ec; )
        Ec = $i[--Bi], $i[Bi] = null, tu = $i[--Bi], $i[Bi] = null, eu = $i[--Bi], $i[Bi] = null;
    }
    function Qk() {
      return xc(), Ec !== null ? {
        id: eu,
        overflow: tu
      } : null;
    }
    function Gk(e, t) {
      xc(), $i[Bi++] = eu, $i[Bi++] = tu, $i[Bi++] = Ec, eu = t.id, tu = t.overflow, Ec = e;
    }
    function xc() {
      oa() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var ia = null, Vi = null, So = !1, Cc = !1, ns = null;
    function Kk() {
      So && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function ub() {
      Cc = !0;
    }
    function Xk() {
      return Cc;
    }
    function Zk(e) {
      var t = e.stateNode.containerInfo;
      return Vi = mk(t), ia = e, So = !0, ns = null, Cc = !1, !0;
    }
    function Jk(e, t, a) {
      return Vi = yk(t), ia = e, So = !0, ns = null, Cc = !1, a !== null && Gk(e, a), !0;
    }
    function sb(e, t) {
      switch (e.tag) {
        case U: {
          kk(e.stateNode.containerInfo, t);
          break;
        }
        case j: {
          var a = (e.mode & rt) !== ct;
          Ok(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case be: {
          var i = e.memoizedState;
          i.dehydrated !== null && _k(i.dehydrated, t);
          break;
        }
      }
    }
    function cb(e, t) {
      sb(e, t);
      var a = nA();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= nn) : i.push(a);
    }
    function x0(e, t) {
      {
        if (Cc)
          return;
        switch (e.tag) {
          case U: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case j:
                var i = t.type;
                t.pendingProps, Dk(a, i);
                break;
              case $:
                var l = t.pendingProps;
                Ak(a, l);
                break;
            }
            break;
          }
          case j: {
            var d = e.type, v = e.memoizedProps, w = e.stateNode;
            switch (t.tag) {
              case j: {
                var b = t.type, R = t.pendingProps, T = (e.mode & rt) !== ct;
                Mk(
                  d,
                  v,
                  w,
                  b,
                  R,
                  // TODO: Delete this argument when we remove the legacy root API.
                  T
                );
                break;
              }
              case $: {
                var H = t.pendingProps, F = (e.mode & rt) !== ct;
                zk(
                  d,
                  v,
                  w,
                  H,
                  // TODO: Delete this argument when we remove the legacy root API.
                  F
                );
                break;
              }
            }
            break;
          }
          case be: {
            var X = e.memoizedState, Z = X.dehydrated;
            if (Z !== null) switch (t.tag) {
              case j:
                var re = t.type;
                t.pendingProps, Lk(Z, re);
                break;
              case $:
                var He = t.pendingProps;
                Nk(Z, He);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function fb(e, t) {
      t.flags = t.flags & ~Li | bn, x0(e, t);
    }
    function db(e, t) {
      switch (e.tag) {
        case j: {
          var a = e.type;
          e.pendingProps;
          var i = ck(t, a);
          return i !== null ? (e.stateNode = i, ia = e, Vi = vk(i), !0) : !1;
        }
        case $: {
          var l = e.pendingProps, d = fk(t, l);
          return d !== null ? (e.stateNode = d, ia = e, Vi = null, !0) : !1;
        }
        case be: {
          var v = dk(t);
          if (v !== null) {
            var w = {
              dehydrated: v,
              treeContext: Qk(),
              retryLane: Pa
            };
            e.memoizedState = w;
            var b = rA(v);
            return b.return = e, e.child = b, ia = e, Vi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function C0(e) {
      return (e.mode & rt) !== ct && (e.flags & xt) === st;
    }
    function R0(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function T0(e) {
      if (So) {
        var t = Vi;
        if (!t) {
          C0(e) && (x0(ia, e), R0()), fb(ia, e), So = !1, ia = e;
          return;
        }
        var a = t;
        if (!db(e, t)) {
          C0(e) && (x0(ia, e), R0()), t = Vp(a);
          var i = ia;
          if (!t || !db(e, t)) {
            fb(ia, e), So = !1, ia = e;
            return;
          }
          cb(i, a);
        }
      }
    }
    function e_(e, t, a) {
      var i = e.stateNode, l = !Cc, d = gk(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = d, d !== null;
    }
    function t_(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Sk(t, a, e);
      if (i) {
        var l = ia;
        if (l !== null)
          switch (l.tag) {
            case U: {
              var d = l.stateNode.containerInfo, v = (l.mode & rt) !== ct;
              Rk(
                d,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                v
              );
              break;
            }
            case j: {
              var w = l.type, b = l.memoizedProps, R = l.stateNode, T = (l.mode & rt) !== ct;
              Tk(
                w,
                b,
                R,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                T
              );
              break;
            }
          }
      }
      return i;
    }
    function n_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      wk(a, e);
    }
    function r_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Ek(a);
    }
    function pb(e) {
      for (var t = e.return; t !== null && t.tag !== j && t.tag !== U && t.tag !== be; )
        t = t.return;
      ia = t;
    }
    function zm(e) {
      if (e !== ia)
        return !1;
      if (!So)
        return pb(e), So = !0, !1;
      if (e.tag !== U && (e.tag !== j || Ck(e.type) && !l0(e.type, e.memoizedProps))) {
        var t = Vi;
        if (t)
          if (C0(e))
            hb(e), R0();
          else
            for (; t; )
              cb(e, t), t = Vp(t);
      }
      return pb(e), e.tag === be ? Vi = r_(e) : Vi = ia ? Vp(e.stateNode) : null, !0;
    }
    function a_() {
      return So && Vi !== null;
    }
    function hb(e) {
      for (var t = Vi; t; )
        sb(e, t), t = Vp(t);
    }
    function ad() {
      ia = null, Vi = null, So = !1, Cc = !1;
    }
    function vb() {
      ns !== null && (s1(ns), ns = null);
    }
    function oa() {
      return So;
    }
    function k0(e) {
      ns === null ? ns = [e] : ns.push(e);
    }
    var i_ = p.ReactCurrentBatchConfig, o_ = null;
    function l_() {
      return i_.transition;
    }
    var wo = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var u_ = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & tr && (t = a), a = a.return;
        return t;
      }, Rc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, qp = [], Qp = [], Gp = [], Kp = [], Xp = [], Zp = [], Tc = /* @__PURE__ */ new Set();
      wo.recordUnsafeLifecycleWarnings = function(e, t) {
        Tc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && qp.push(e), e.mode & tr && typeof t.UNSAFE_componentWillMount == "function" && Qp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Gp.push(e), e.mode & tr && typeof t.UNSAFE_componentWillReceiveProps == "function" && Kp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Xp.push(e), e.mode & tr && typeof t.UNSAFE_componentWillUpdate == "function" && Zp.push(e));
      }, wo.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        qp.length > 0 && (qp.forEach(function(F) {
          e.add(bt(F) || "Component"), Tc.add(F.type);
        }), qp = []);
        var t = /* @__PURE__ */ new Set();
        Qp.length > 0 && (Qp.forEach(function(F) {
          t.add(bt(F) || "Component"), Tc.add(F.type);
        }), Qp = []);
        var a = /* @__PURE__ */ new Set();
        Gp.length > 0 && (Gp.forEach(function(F) {
          a.add(bt(F) || "Component"), Tc.add(F.type);
        }), Gp = []);
        var i = /* @__PURE__ */ new Set();
        Kp.length > 0 && (Kp.forEach(function(F) {
          i.add(bt(F) || "Component"), Tc.add(F.type);
        }), Kp = []);
        var l = /* @__PURE__ */ new Set();
        Xp.length > 0 && (Xp.forEach(function(F) {
          l.add(bt(F) || "Component"), Tc.add(F.type);
        }), Xp = []);
        var d = /* @__PURE__ */ new Set();
        if (Zp.length > 0 && (Zp.forEach(function(F) {
          d.add(bt(F) || "Component"), Tc.add(F.type);
        }), Zp = []), t.size > 0) {
          var v = Rc(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, v);
        }
        if (i.size > 0) {
          var w = Rc(i);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, w);
        }
        if (d.size > 0) {
          var b = Rc(d);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, b);
        }
        if (e.size > 0) {
          var R = Rc(e);
          S(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
        if (a.size > 0) {
          var T = Rc(a);
          S(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (l.size > 0) {
          var H = Rc(l);
          S(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, H);
        }
      };
      var Um = /* @__PURE__ */ new Map(), mb = /* @__PURE__ */ new Set();
      wo.recordLegacyContextWarning = function(e, t) {
        var a = u_(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!mb.has(e.type)) {
          var i = Um.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Um.set(a, i)), i.push(e));
        }
      }, wo.flushLegacyContextWarning = function() {
        Um.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(d) {
              i.add(bt(d) || "Component"), mb.add(d.type);
            });
            var l = Rc(i);
            try {
              Qn(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              Mn();
            }
          }
        });
      }, wo.discardPendingWarnings = function() {
        qp = [], Qp = [], Gp = [], Kp = [], Xp = [], Zp = [], Um = /* @__PURE__ */ new Map();
      };
    }
    function Eo(e, t) {
      if (e && e.defaultProps) {
        var a = Tt({}, t), i = e.defaultProps;
        for (var l in i)
          a[l] === void 0 && (a[l] = i[l]);
        return a;
      }
      return t;
    }
    var _0 = Ju(null), O0;
    O0 = {};
    var Fm = null, id = null, D0 = null, jm = !1;
    function Pm() {
      Fm = null, id = null, D0 = null, jm = !1;
    }
    function yb() {
      jm = !0;
    }
    function gb() {
      jm = !1;
    }
    function Sb(e, t, a) {
      Oa(_0, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== O0 && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = O0;
    }
    function A0(e, t) {
      var a = _0.current;
      _a(_0, t), e._currentValue = a;
    }
    function L0(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (Vl(i.childLanes, t) ? l !== null && !Vl(l.childLanes, t) && (l.childLanes = Ot(l.childLanes, t)) : (i.childLanes = Ot(i.childLanes, t), l !== null && (l.childLanes = Ot(l.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function s_(e, t, a) {
      c_(e, t, a);
    }
    function c_(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, d = i.dependencies;
        if (d !== null) {
          l = i.child;
          for (var v = d.firstContext; v !== null; ) {
            if (v.context === t) {
              if (i.tag === O) {
                var w = Mu(a), b = nu(_n, w);
                b.tag = $m;
                var R = i.updateQueue;
                if (R !== null) {
                  var T = R.shared, H = T.pending;
                  H === null ? b.next = b : (b.next = H.next, H.next = b), T.pending = b;
                }
              }
              i.lanes = Ot(i.lanes, a);
              var F = i.alternate;
              F !== null && (F.lanes = Ot(F.lanes, a)), L0(i.return, a, e), d.lanes = Ot(d.lanes, a);
              break;
            }
            v = v.next;
          }
        } else if (i.tag === we)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === B) {
          var X = i.return;
          if (X === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          X.lanes = Ot(X.lanes, a);
          var Z = X.alternate;
          Z !== null && (Z.lanes = Ot(Z.lanes, a)), L0(X, a, e), l = i.sibling;
        } else
          l = i.child;
        if (l !== null)
          l.return = i;
        else
          for (l = i; l !== null; ) {
            if (l === e) {
              l = null;
              break;
            }
            var re = l.sibling;
            if (re !== null) {
              re.return = l.return, l = re;
              break;
            }
            l = l.return;
          }
        i = l;
      }
    }
    function od(e, t) {
      Fm = e, id = null, D0 = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Ta(a.lanes, t) && dh(), a.firstContext = null);
      }
    }
    function Ur(e) {
      jm && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (D0 !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (id === null) {
          if (Fm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          id = a, Fm.dependencies = {
            lanes: ie,
            firstContext: a
          };
        } else
          id = id.next = a;
      }
      return t;
    }
    var kc = null;
    function N0(e) {
      kc === null ? kc = [e] : kc.push(e);
    }
    function f_() {
      if (kc !== null) {
        for (var e = 0; e < kc.length; e++) {
          var t = kc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, l = t.pending;
            if (l !== null) {
              var d = l.next;
              l.next = i, a.next = d;
            }
            t.pending = a;
          }
        }
        kc = null;
      }
    }
    function wb(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, N0(t)) : (a.next = l.next, l.next = a), t.interleaved = a, Hm(e, i);
    }
    function d_(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, N0(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function p_(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, N0(t)) : (a.next = l.next, l.next = a), t.interleaved = a, Hm(e, i);
    }
    function ui(e, t) {
      return Hm(e, t);
    }
    var h_ = Hm;
    function Hm(e, t) {
      e.lanes = Ot(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ot(a.lanes, t)), a === null && (e.flags & (bn | Li)) !== st && E1(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = Ot(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = Ot(a.childLanes, t) : (l.flags & (bn | Li)) !== st && E1(e), i = l, l = l.return;
      if (i.tag === U) {
        var d = i.stateNode;
        return d;
      } else
        return null;
    }
    var Eb = 0, bb = 1, $m = 2, M0 = 3, Bm = !1, z0, Vm;
    z0 = !1, Vm = null;
    function U0(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: ie
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function xb(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var l = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = l;
      }
    }
    function nu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: Eb,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function rs(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var l = i.shared;
      if (Vm === l && !z0 && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), z0 = !0), hD()) {
        var d = l.pending;
        return d === null ? t.next = t : (t.next = d.next, d.next = t), l.pending = t, h_(e, a);
      } else
        return p_(e, l, t, a);
    }
    function Im(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (hp(a)) {
          var d = l.lanes;
          d = Cf(d, e.pendingLanes);
          var v = Ot(d, a);
          l.lanes = v, vp(e, v);
        }
      }
    }
    function F0(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var l = i.updateQueue;
        if (a === l) {
          var d = null, v = null, w = a.firstBaseUpdate;
          if (w !== null) {
            var b = w;
            do {
              var R = {
                eventTime: b.eventTime,
                lane: b.lane,
                tag: b.tag,
                payload: b.payload,
                callback: b.callback,
                next: null
              };
              v === null ? d = v = R : (v.next = R, v = R), b = b.next;
            } while (b !== null);
            v === null ? d = v = t : (v.next = t, v = t);
          } else
            d = v = t;
          a = {
            baseState: l.baseState,
            firstBaseUpdate: d,
            lastBaseUpdate: v,
            shared: l.shared,
            effects: l.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var T = a.lastBaseUpdate;
      T === null ? a.firstBaseUpdate = t : T.next = t, a.lastBaseUpdate = t;
    }
    function v_(e, t, a, i, l, d) {
      switch (a.tag) {
        case bb: {
          var v = a.payload;
          if (typeof v == "function") {
            yb();
            var w = v.call(d, i, l);
            {
              if (e.mode & tr) {
                kn(!0);
                try {
                  v.call(d, i, l);
                } finally {
                  kn(!1);
                }
              }
              gb();
            }
            return w;
          }
          return v;
        }
        case M0:
          e.flags = e.flags & ~$r | xt;
        case Eb: {
          var b = a.payload, R;
          if (typeof b == "function") {
            yb(), R = b.call(d, i, l);
            {
              if (e.mode & tr) {
                kn(!0);
                try {
                  b.call(d, i, l);
                } finally {
                  kn(!1);
                }
              }
              gb();
            }
          } else
            R = b;
          return R == null ? i : Tt({}, i, R);
        }
        case $m:
          return Bm = !0, i;
      }
      return i;
    }
    function Ym(e, t, a, i) {
      var l = e.updateQueue;
      Bm = !1, Vm = l.shared;
      var d = l.firstBaseUpdate, v = l.lastBaseUpdate, w = l.shared.pending;
      if (w !== null) {
        l.shared.pending = null;
        var b = w, R = b.next;
        b.next = null, v === null ? d = R : v.next = R, v = b;
        var T = e.alternate;
        if (T !== null) {
          var H = T.updateQueue, F = H.lastBaseUpdate;
          F !== v && (F === null ? H.firstBaseUpdate = R : F.next = R, H.lastBaseUpdate = b);
        }
      }
      if (d !== null) {
        var X = l.baseState, Z = ie, re = null, He = null, ft = null, at = d;
        do {
          var Qt = at.lane, Bt = at.eventTime;
          if (Vl(i, Qt)) {
            if (ft !== null) {
              var ae = {
                eventTime: Bt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: cr,
                tag: at.tag,
                payload: at.payload,
                callback: at.callback,
                next: null
              };
              ft = ft.next = ae;
            }
            X = v_(e, l, at, X, t, a);
            var q = at.callback;
            if (q !== null && // If the update was already committed, we should not queue its
            // callback again.
            at.lane !== cr) {
              e.flags |= Lr;
              var xe = l.effects;
              xe === null ? l.effects = [at] : xe.push(at);
            }
          } else {
            var W = {
              eventTime: Bt,
              lane: Qt,
              tag: at.tag,
              payload: at.payload,
              callback: at.callback,
              next: null
            };
            ft === null ? (He = ft = W, re = X) : ft = ft.next = W, Z = Ot(Z, Qt);
          }
          if (at = at.next, at === null) {
            if (w = l.shared.pending, w === null)
              break;
            var $e = w, ze = $e.next;
            $e.next = null, at = ze, l.lastBaseUpdate = $e, l.shared.pending = null;
          }
        } while (!0);
        ft === null && (re = X), l.baseState = re, l.firstBaseUpdate = He, l.lastBaseUpdate = ft;
        var St = l.shared.interleaved;
        if (St !== null) {
          var kt = St;
          do
            Z = Ot(Z, kt.lane), kt = kt.next;
          while (kt !== St);
        } else d === null && (l.shared.lanes = ie);
        Ch(Z), e.lanes = Z, e.memoizedState = X;
      }
      Vm = null;
    }
    function m_(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function Cb() {
      Bm = !1;
    }
    function Wm() {
      return Bm;
    }
    function Rb(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var d = i[l], v = d.callback;
          v !== null && (d.callback = null, m_(v, a));
        }
    }
    var j0 = {}, Tb = new u.Component().refs, P0, H0, $0, B0, V0, kb, qm, I0, Y0, W0;
    {
      P0 = /* @__PURE__ */ new Set(), H0 = /* @__PURE__ */ new Set(), $0 = /* @__PURE__ */ new Set(), B0 = /* @__PURE__ */ new Set(), I0 = /* @__PURE__ */ new Set(), V0 = /* @__PURE__ */ new Set(), Y0 = /* @__PURE__ */ new Set(), W0 = /* @__PURE__ */ new Set();
      var _b = /* @__PURE__ */ new Set();
      qm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          _b.has(a) || (_b.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, kb = function(e, t) {
        if (t === void 0) {
          var a = Kt(e) || "Component";
          V0.has(a) || (V0.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(j0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(j0);
    }
    function q0(e, t, a, i) {
      var l = e.memoizedState, d = a(i, l);
      {
        if (e.mode & tr) {
          kn(!0);
          try {
            d = a(i, l);
          } finally {
            kn(!1);
          }
        }
        kb(t, d);
      }
      var v = d == null ? l : Tt({}, l, d);
      if (e.memoizedState = v, e.lanes === ie) {
        var w = e.updateQueue;
        w.baseState = v;
      }
    }
    var Q0 = {
      isMounted: Fa,
      enqueueSetState: function(e, t, a) {
        var i = Ai(e), l = Ba(), d = fs(i), v = nu(l, d);
        v.payload = t, a != null && (qm(a, "setState"), v.callback = a);
        var w = rs(i, v, d);
        w !== null && (Xr(w, i, d, l), Im(w, i, d)), uf(i, d);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Ai(e), l = Ba(), d = fs(i), v = nu(l, d);
        v.tag = bb, v.payload = t, a != null && (qm(a, "replaceState"), v.callback = a);
        var w = rs(i, v, d);
        w !== null && (Xr(w, i, d, l), Im(w, i, d)), uf(i, d);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Ai(e), i = Ba(), l = fs(a), d = nu(i, l);
        d.tag = $m, t != null && (qm(t, "forceUpdate"), d.callback = t);
        var v = rs(a, d, l);
        v !== null && (Xr(v, a, l, i), Im(v, a, l)), Du(a, l);
      }
    };
    function Ob(e, t, a, i, l, d, v) {
      var w = e.stateNode;
      if (typeof w.shouldComponentUpdate == "function") {
        var b = w.shouldComponentUpdate(i, d, v);
        {
          if (e.mode & tr) {
            kn(!0);
            try {
              b = w.shouldComponentUpdate(i, d, v);
            } finally {
              kn(!1);
            }
          }
          b === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Kt(t) || "Component");
        }
        return b;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !vt(a, i) || !vt(l, d) : !0;
    }
    function y_(e, t, a) {
      var i = e.stateNode;
      {
        var l = Kt(t) || "Component", d = i.render;
        d || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !Y0.has(t) && (Y0.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Kt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var v = i.props !== a;
        i.props !== void 0 && v && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !$0.has(t) && ($0.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Kt(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var w = i.state;
        w && (typeof w != "object" || Xt(w)) && g("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function Db(e, t) {
      t.updater = Q0, e.stateNode = t, Jc(t, e), t._reactInternalInstance = j0;
    }
    function Ab(e, t, a) {
      var i = !1, l = bi, d = bi, v = t.contextType;
      if ("contextType" in t) {
        var w = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === Re && v._context === void 0
        );
        if (!w && !W0.has(t)) {
          W0.add(t);
          var b = "";
          v === void 0 ? b = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? b = " However, it is set to a " + typeof v + "." : v.$$typeof === le ? b = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? b = " Did you accidentally pass the Context.Consumer instead?" : b = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Kt(t) || "Component", b);
        }
      }
      if (typeof v == "object" && v !== null)
        d = Ur(v);
      else {
        l = ed(e, t, !0);
        var R = t.contextTypes;
        i = R != null, d = i ? td(e, l) : bi;
      }
      var T = new t(a, d);
      if (e.mode & tr) {
        kn(!0);
        try {
          T = new t(a, d);
        } finally {
          kn(!1);
        }
      }
      var H = e.memoizedState = T.state !== null && T.state !== void 0 ? T.state : null;
      Db(e, T);
      {
        if (typeof t.getDerivedStateFromProps == "function" && H === null) {
          var F = Kt(t) || "Component";
          H0.has(F) || (H0.add(F), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", F, T.state === null ? "null" : "undefined", F));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof T.getSnapshotBeforeUpdate == "function") {
          var X = null, Z = null, re = null;
          if (typeof T.componentWillMount == "function" && T.componentWillMount.__suppressDeprecationWarning !== !0 ? X = "componentWillMount" : typeof T.UNSAFE_componentWillMount == "function" && (X = "UNSAFE_componentWillMount"), typeof T.componentWillReceiveProps == "function" && T.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Z = "componentWillReceiveProps" : typeof T.UNSAFE_componentWillReceiveProps == "function" && (Z = "UNSAFE_componentWillReceiveProps"), typeof T.componentWillUpdate == "function" && T.componentWillUpdate.__suppressDeprecationWarning !== !0 ? re = "componentWillUpdate" : typeof T.UNSAFE_componentWillUpdate == "function" && (re = "UNSAFE_componentWillUpdate"), X !== null || Z !== null || re !== null) {
            var He = Kt(t) || "Component", ft = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            B0.has(He) || (B0.add(He), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, He, ft, X !== null ? `
  ` + X : "", Z !== null ? `
  ` + Z : "", re !== null ? `
  ` + re : ""));
          }
        }
      }
      return i && tb(e, l, d), T;
    }
    function g_(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", bt(e) || "Component"), Q0.enqueueReplaceState(t, t.state, null));
    }
    function Lb(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var d = bt(e) || "Component";
          P0.has(d) || (P0.add(d), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", d));
        }
        Q0.enqueueReplaceState(t, t.state, null);
      }
    }
    function G0(e, t, a, i) {
      y_(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = Tb, U0(e);
      var d = t.contextType;
      if (typeof d == "object" && d !== null)
        l.context = Ur(d);
      else {
        var v = ed(e, t, !0);
        l.context = td(e, v);
      }
      {
        if (l.state === a) {
          var w = Kt(t) || "Component";
          I0.has(w) || (I0.add(w), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", w));
        }
        e.mode & tr && wo.recordLegacyContextWarning(e, l), wo.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var b = t.getDerivedStateFromProps;
      if (typeof b == "function" && (q0(e, t, b, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (g_(e, l), Ym(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var R = tt;
        R |= Xa, (e.mode & ei) !== ct && (R |= Za), e.flags |= R;
      }
    }
    function S_(e, t, a, i) {
      var l = e.stateNode, d = e.memoizedProps;
      l.props = d;
      var v = l.context, w = t.contextType, b = bi;
      if (typeof w == "object" && w !== null)
        b = Ur(w);
      else {
        var R = ed(e, t, !0);
        b = td(e, R);
      }
      var T = t.getDerivedStateFromProps, H = typeof T == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !H && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (d !== a || v !== b) && Lb(e, l, a, b), Cb();
      var F = e.memoizedState, X = l.state = F;
      if (Ym(e, a, l, i), X = e.memoizedState, d === a && F === X && !_m() && !Wm()) {
        if (typeof l.componentDidMount == "function") {
          var Z = tt;
          Z |= Xa, (e.mode & ei) !== ct && (Z |= Za), e.flags |= Z;
        }
        return !1;
      }
      typeof T == "function" && (q0(e, t, T, a), X = e.memoizedState);
      var re = Wm() || Ob(e, t, d, a, F, X, b);
      if (re) {
        if (!H && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var He = tt;
          He |= Xa, (e.mode & ei) !== ct && (He |= Za), e.flags |= He;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var ft = tt;
          ft |= Xa, (e.mode & ei) !== ct && (ft |= Za), e.flags |= ft;
        }
        e.memoizedProps = a, e.memoizedState = X;
      }
      return l.props = a, l.state = X, l.context = b, re;
    }
    function w_(e, t, a, i, l) {
      var d = t.stateNode;
      xb(e, t);
      var v = t.memoizedProps, w = t.type === t.elementType ? v : Eo(t.type, v);
      d.props = w;
      var b = t.pendingProps, R = d.context, T = a.contextType, H = bi;
      if (typeof T == "object" && T !== null)
        H = Ur(T);
      else {
        var F = ed(t, a, !0);
        H = td(t, F);
      }
      var X = a.getDerivedStateFromProps, Z = typeof X == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      !Z && (typeof d.UNSAFE_componentWillReceiveProps == "function" || typeof d.componentWillReceiveProps == "function") && (v !== b || R !== H) && Lb(t, d, i, H), Cb();
      var re = t.memoizedState, He = d.state = re;
      if (Ym(t, i, d, l), He = t.memoizedState, v === b && re === He && !_m() && !Wm() && !k)
        return typeof d.componentDidUpdate == "function" && (v !== e.memoizedProps || re !== e.memoizedState) && (t.flags |= tt), typeof d.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || re !== e.memoizedState) && (t.flags |= gr), !1;
      typeof X == "function" && (q0(t, a, X, i), He = t.memoizedState);
      var ft = Wm() || Ob(t, a, w, i, re, He, H) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      k;
      return ft ? (!Z && (typeof d.UNSAFE_componentWillUpdate == "function" || typeof d.componentWillUpdate == "function") && (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(i, He, H), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(i, He, H)), typeof d.componentDidUpdate == "function" && (t.flags |= tt), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= gr)) : (typeof d.componentDidUpdate == "function" && (v !== e.memoizedProps || re !== e.memoizedState) && (t.flags |= tt), typeof d.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || re !== e.memoizedState) && (t.flags |= gr), t.memoizedProps = i, t.memoizedState = He), d.props = i, d.state = He, d.context = H, ft;
    }
    var K0, X0, Z0, J0, eS, Nb = function(e, t) {
    };
    K0 = !1, X0 = !1, Z0 = {}, J0 = {}, eS = {}, Nb = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = bt(t) || "Component";
        J0[a] || (J0[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Jp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & tr || lt) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var l = bt(e) || "Component";
          Z0[l] || (g('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), Z0[l] = !0);
        }
        if (a._owner) {
          var d = a._owner, v;
          if (d) {
            var w = d;
            if (w.tag !== O)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            v = w.stateNode;
          }
          if (!v)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var b = v;
          Nt(i, "ref");
          var R = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === R)
            return t.ref;
          var T = function(H) {
            var F = b.refs;
            F === Tb && (F = b.refs = {}), H === null ? delete F[R] : F[R] = H;
          };
          return T._stringRef = R, T;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Qm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Gm(e) {
      {
        var t = bt(e) || "Component";
        if (eS[t])
          return;
        eS[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function Mb(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function zb(e) {
      function t(W, ae) {
        if (e) {
          var q = W.deletions;
          q === null ? (W.deletions = [ae], W.flags |= nn) : q.push(ae);
        }
      }
      function a(W, ae) {
        if (!e)
          return null;
        for (var q = ae; q !== null; )
          t(W, q), q = q.sibling;
        return null;
      }
      function i(W, ae) {
        for (var q = /* @__PURE__ */ new Map(), xe = ae; xe !== null; )
          xe.key !== null ? q.set(xe.key, xe) : q.set(xe.index, xe), xe = xe.sibling;
        return q;
      }
      function l(W, ae) {
        var q = zc(W, ae);
        return q.index = 0, q.sibling = null, q;
      }
      function d(W, ae, q) {
        if (W.index = q, !e)
          return W.flags |= Tv, ae;
        var xe = W.alternate;
        if (xe !== null) {
          var $e = xe.index;
          return $e < ae ? (W.flags |= bn, ae) : $e;
        } else
          return W.flags |= bn, ae;
      }
      function v(W) {
        return e && W.alternate === null && (W.flags |= bn), W;
      }
      function w(W, ae, q, xe) {
        if (ae === null || ae.tag !== $) {
          var $e = kw(q, W.mode, xe);
          return $e.return = W, $e;
        } else {
          var ze = l(ae, q);
          return ze.return = W, ze;
        }
      }
      function b(W, ae, q, xe) {
        var $e = q.type;
        if ($e === tn)
          return T(W, ae, q.props.children, xe, q.key);
        if (ae !== null && (ae.elementType === $e || // Keep this check inline so it only runs on the false path:
        R1(ae, q) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof $e == "object" && $e !== null && $e.$$typeof === it && Mb($e) === ae.type)) {
          var ze = l(ae, q.props);
          return ze.ref = Jp(W, ae, q), ze.return = W, ze._debugSource = q._source, ze._debugOwner = q._owner, ze;
        }
        var St = Tw(q, W.mode, xe);
        return St.ref = Jp(W, ae, q), St.return = W, St;
      }
      function R(W, ae, q, xe) {
        if (ae === null || ae.tag !== V || ae.stateNode.containerInfo !== q.containerInfo || ae.stateNode.implementation !== q.implementation) {
          var $e = _w(q, W.mode, xe);
          return $e.return = W, $e;
        } else {
          var ze = l(ae, q.children || []);
          return ze.return = W, ze;
        }
      }
      function T(W, ae, q, xe, $e) {
        if (ae === null || ae.tag !== se) {
          var ze = ps(q, W.mode, xe, $e);
          return ze.return = W, ze;
        } else {
          var St = l(ae, q);
          return St.return = W, St;
        }
      }
      function H(W, ae, q) {
        if (typeof ae == "string" && ae !== "" || typeof ae == "number") {
          var xe = kw("" + ae, W.mode, q);
          return xe.return = W, xe;
        }
        if (typeof ae == "object" && ae !== null) {
          switch (ae.$$typeof) {
            case je: {
              var $e = Tw(ae, W.mode, q);
              return $e.ref = Jp(W, null, ae), $e.return = W, $e;
            }
            case Lt: {
              var ze = _w(ae, W.mode, q);
              return ze.return = W, ze;
            }
            case it: {
              var St = ae._payload, kt = ae._init;
              return H(W, kt(St), q);
            }
          }
          if (Xt(ae) || Ya(ae)) {
            var Sn = ps(ae, W.mode, q, null);
            return Sn.return = W, Sn;
          }
          Qm(W, ae);
        }
        return typeof ae == "function" && Gm(W), null;
      }
      function F(W, ae, q, xe) {
        var $e = ae !== null ? ae.key : null;
        if (typeof q == "string" && q !== "" || typeof q == "number")
          return $e !== null ? null : w(W, ae, "" + q, xe);
        if (typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case je:
              return q.key === $e ? b(W, ae, q, xe) : null;
            case Lt:
              return q.key === $e ? R(W, ae, q, xe) : null;
            case it: {
              var ze = q._payload, St = q._init;
              return F(W, ae, St(ze), xe);
            }
          }
          if (Xt(q) || Ya(q))
            return $e !== null ? null : T(W, ae, q, xe, null);
          Qm(W, q);
        }
        return typeof q == "function" && Gm(W), null;
      }
      function X(W, ae, q, xe, $e) {
        if (typeof xe == "string" && xe !== "" || typeof xe == "number") {
          var ze = W.get(q) || null;
          return w(ae, ze, "" + xe, $e);
        }
        if (typeof xe == "object" && xe !== null) {
          switch (xe.$$typeof) {
            case je: {
              var St = W.get(xe.key === null ? q : xe.key) || null;
              return b(ae, St, xe, $e);
            }
            case Lt: {
              var kt = W.get(xe.key === null ? q : xe.key) || null;
              return R(ae, kt, xe, $e);
            }
            case it:
              var Sn = xe._payload, an = xe._init;
              return X(W, ae, q, an(Sn), $e);
          }
          if (Xt(xe) || Ya(xe)) {
            var _r = W.get(q) || null;
            return T(ae, _r, xe, $e, null);
          }
          Qm(ae, xe);
        }
        return typeof xe == "function" && Gm(ae), null;
      }
      function Z(W, ae, q) {
        {
          if (typeof W != "object" || W === null)
            return ae;
          switch (W.$$typeof) {
            case je:
            case Lt:
              Nb(W, q);
              var xe = W.key;
              if (typeof xe != "string")
                break;
              if (ae === null) {
                ae = /* @__PURE__ */ new Set(), ae.add(xe);
                break;
              }
              if (!ae.has(xe)) {
                ae.add(xe);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", xe);
              break;
            case it:
              var $e = W._payload, ze = W._init;
              Z(ze($e), ae, q);
              break;
          }
        }
        return ae;
      }
      function re(W, ae, q, xe) {
        for (var $e = null, ze = 0; ze < q.length; ze++) {
          var St = q[ze];
          $e = Z(St, $e, W);
        }
        for (var kt = null, Sn = null, an = ae, _r = 0, on = 0, wr = null; an !== null && on < q.length; on++) {
          an.index > on ? (wr = an, an = null) : wr = an.sibling;
          var Aa = F(W, an, q[on], xe);
          if (Aa === null) {
            an === null && (an = wr);
            break;
          }
          e && an && Aa.alternate === null && t(W, an), _r = d(Aa, _r, on), Sn === null ? kt = Aa : Sn.sibling = Aa, Sn = Aa, an = wr;
        }
        if (on === q.length) {
          if (a(W, an), oa()) {
            var pa = on;
            bc(W, pa);
          }
          return kt;
        }
        if (an === null) {
          for (; on < q.length; on++) {
            var Ci = H(W, q[on], xe);
            Ci !== null && (_r = d(Ci, _r, on), Sn === null ? kt = Ci : Sn.sibling = Ci, Sn = Ci);
          }
          if (oa()) {
            var Va = on;
            bc(W, Va);
          }
          return kt;
        }
        for (var Ia = i(W, an); on < q.length; on++) {
          var La = X(Ia, W, on, q[on], xe);
          La !== null && (e && La.alternate !== null && Ia.delete(La.key === null ? on : La.key), _r = d(La, _r, on), Sn === null ? kt = La : Sn.sibling = La, Sn = La);
        }
        if (e && Ia.forEach(function(xd) {
          return t(W, xd);
        }), oa()) {
          var uu = on;
          bc(W, uu);
        }
        return kt;
      }
      function He(W, ae, q, xe) {
        var $e = Ya(q);
        if (typeof $e != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          q[Symbol.toStringTag] === "Generator" && (X0 || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), X0 = !0), q.entries === $e && (K0 || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), K0 = !0);
          var ze = $e.call(q);
          if (ze)
            for (var St = null, kt = ze.next(); !kt.done; kt = ze.next()) {
              var Sn = kt.value;
              St = Z(Sn, St, W);
            }
        }
        var an = $e.call(q);
        if (an == null)
          throw new Error("An iterable object provided no iterator.");
        for (var _r = null, on = null, wr = ae, Aa = 0, pa = 0, Ci = null, Va = an.next(); wr !== null && !Va.done; pa++, Va = an.next()) {
          wr.index > pa ? (Ci = wr, wr = null) : Ci = wr.sibling;
          var Ia = F(W, wr, Va.value, xe);
          if (Ia === null) {
            wr === null && (wr = Ci);
            break;
          }
          e && wr && Ia.alternate === null && t(W, wr), Aa = d(Ia, Aa, pa), on === null ? _r = Ia : on.sibling = Ia, on = Ia, wr = Ci;
        }
        if (Va.done) {
          if (a(W, wr), oa()) {
            var La = pa;
            bc(W, La);
          }
          return _r;
        }
        if (wr === null) {
          for (; !Va.done; pa++, Va = an.next()) {
            var uu = H(W, Va.value, xe);
            uu !== null && (Aa = d(uu, Aa, pa), on === null ? _r = uu : on.sibling = uu, on = uu);
          }
          if (oa()) {
            var xd = pa;
            bc(W, xd);
          }
          return _r;
        }
        for (var Oh = i(W, wr); !Va.done; pa++, Va = an.next()) {
          var pl = X(Oh, W, pa, Va.value, xe);
          pl !== null && (e && pl.alternate !== null && Oh.delete(pl.key === null ? pa : pl.key), Aa = d(pl, Aa, pa), on === null ? _r = pl : on.sibling = pl, on = pl);
        }
        if (e && Oh.forEach(function(MA) {
          return t(W, MA);
        }), oa()) {
          var NA = pa;
          bc(W, NA);
        }
        return _r;
      }
      function ft(W, ae, q, xe) {
        if (ae !== null && ae.tag === $) {
          a(W, ae.sibling);
          var $e = l(ae, q);
          return $e.return = W, $e;
        }
        a(W, ae);
        var ze = kw(q, W.mode, xe);
        return ze.return = W, ze;
      }
      function at(W, ae, q, xe) {
        for (var $e = q.key, ze = ae; ze !== null; ) {
          if (ze.key === $e) {
            var St = q.type;
            if (St === tn) {
              if (ze.tag === se) {
                a(W, ze.sibling);
                var kt = l(ze, q.props.children);
                return kt.return = W, kt._debugSource = q._source, kt._debugOwner = q._owner, kt;
              }
            } else if (ze.elementType === St || // Keep this check inline so it only runs on the false path:
            R1(ze, q) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof St == "object" && St !== null && St.$$typeof === it && Mb(St) === ze.type) {
              a(W, ze.sibling);
              var Sn = l(ze, q.props);
              return Sn.ref = Jp(W, ze, q), Sn.return = W, Sn._debugSource = q._source, Sn._debugOwner = q._owner, Sn;
            }
            a(W, ze);
            break;
          } else
            t(W, ze);
          ze = ze.sibling;
        }
        if (q.type === tn) {
          var an = ps(q.props.children, W.mode, xe, q.key);
          return an.return = W, an;
        } else {
          var _r = Tw(q, W.mode, xe);
          return _r.ref = Jp(W, ae, q), _r.return = W, _r;
        }
      }
      function Qt(W, ae, q, xe) {
        for (var $e = q.key, ze = ae; ze !== null; ) {
          if (ze.key === $e)
            if (ze.tag === V && ze.stateNode.containerInfo === q.containerInfo && ze.stateNode.implementation === q.implementation) {
              a(W, ze.sibling);
              var St = l(ze, q.children || []);
              return St.return = W, St;
            } else {
              a(W, ze);
              break;
            }
          else
            t(W, ze);
          ze = ze.sibling;
        }
        var kt = _w(q, W.mode, xe);
        return kt.return = W, kt;
      }
      function Bt(W, ae, q, xe) {
        var $e = typeof q == "object" && q !== null && q.type === tn && q.key === null;
        if ($e && (q = q.props.children), typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case je:
              return v(at(W, ae, q, xe));
            case Lt:
              return v(Qt(W, ae, q, xe));
            case it:
              var ze = q._payload, St = q._init;
              return Bt(W, ae, St(ze), xe);
          }
          if (Xt(q))
            return re(W, ae, q, xe);
          if (Ya(q))
            return He(W, ae, q, xe);
          Qm(W, q);
        }
        return typeof q == "string" && q !== "" || typeof q == "number" ? v(ft(W, ae, "" + q, xe)) : (typeof q == "function" && Gm(W), a(W, ae));
      }
      return Bt;
    }
    var ld = zb(!0), Ub = zb(!1);
    function E_(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = zc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = zc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function b_(e, t) {
      for (var a = e.child; a !== null; )
        XD(a, t), a = a.sibling;
    }
    var eh = {}, as = Ju(eh), th = Ju(eh), Km = Ju(eh);
    function Xm(e) {
      if (e === eh)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function Fb() {
      var e = Xm(Km.current);
      return e;
    }
    function tS(e, t) {
      Oa(Km, t, e), Oa(th, e, e), Oa(as, eh, e);
      var a = UT(t);
      _a(as, e), Oa(as, a, e);
    }
    function ud(e) {
      _a(as, e), _a(th, e), _a(Km, e);
    }
    function nS() {
      var e = Xm(as.current);
      return e;
    }
    function jb(e) {
      Xm(Km.current);
      var t = Xm(as.current), a = FT(t, e.type);
      t !== a && (Oa(th, e, e), Oa(as, a, e));
    }
    function rS(e) {
      th.current === e && (_a(as, e), _a(th, e));
    }
    var x_ = 0, Pb = 1, Hb = 1, nh = 2, bo = Ju(x_);
    function aS(e, t) {
      return (e & t) !== 0;
    }
    function sd(e) {
      return e & Pb;
    }
    function iS(e, t) {
      return e & Pb | t;
    }
    function C_(e, t) {
      return e | t;
    }
    function is(e, t) {
      Oa(bo, t, e);
    }
    function cd(e) {
      _a(bo, e);
    }
    function R_(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Zm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === be) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || KE(i) || f0(i))
              return t;
          }
        } else if (t.tag === ee && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & xt) !== st;
          if (l)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var si = (
      /*   */
      0
    ), Ir = (
      /* */
      1
    ), ol = (
      /*  */
      2
    ), Yr = (
      /*    */
      4
    ), la = (
      /*   */
      8
    ), oS = [];
    function lS() {
      for (var e = 0; e < oS.length; e++) {
        var t = oS[e];
        t._workInProgressVersionPrimary = null;
      }
      oS.length = 0;
    }
    function T_(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Fe = p.ReactCurrentDispatcher, rh = p.ReactCurrentBatchConfig, uS, fd;
    uS = /* @__PURE__ */ new Set();
    var _c = ie, gn = null, Wr = null, qr = null, Jm = !1, ah = !1, ih = 0, k_ = 0, __ = 25, ue = null, Ii = null, os = -1, sS = !1;
    function sn() {
      {
        var e = ue;
        Ii === null ? Ii = [e] : Ii.push(e);
      }
    }
    function Me() {
      {
        var e = ue;
        Ii !== null && (os++, Ii[os] !== e && O_(e));
      }
    }
    function dd(e) {
      e != null && !Xt(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ue, typeof e);
    }
    function O_(e) {
      {
        var t = bt(gn);
        if (!uS.has(t) && (uS.add(t), Ii !== null)) {
          for (var a = "", i = 30, l = 0; l <= os; l++) {
            for (var d = Ii[l], v = l === os ? e : d, w = l + 1 + ". " + d; w.length < i; )
              w += " ";
            w += v + `
`, a += w;
          }
          g(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function Da() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function cS(e, t) {
      if (sS)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ue), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ue, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Ge(e[a], t[a]))
          return !1;
      return !0;
    }
    function pd(e, t, a, i, l, d) {
      _c = d, gn = t, Ii = e !== null ? e._debugHookTypes : null, os = -1, sS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ie, e !== null && e.memoizedState !== null ? Fe.current = ux : Ii !== null ? Fe.current = lx : Fe.current = ox;
      var v = a(i, l);
      if (ah) {
        var w = 0;
        do {
          if (ah = !1, ih = 0, w >= __)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          w += 1, sS = !1, Wr = null, qr = null, t.updateQueue = null, os = -1, Fe.current = sx, v = a(i, l);
        } while (ah);
      }
      Fe.current = dy, t._debugHookTypes = Ii;
      var b = Wr !== null && Wr.next !== null;
      if (_c = ie, gn = null, Wr = null, qr = null, ue = null, Ii = null, os = -1, e !== null && (e.flags & Br) !== (t.flags & Br) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & rt) !== ct && g("Internal React error: Expected static flag was missing. Please notify the React team."), Jm = !1, b)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return v;
    }
    function hd() {
      var e = ih !== 0;
      return ih = 0, e;
    }
    function $b(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & ei) !== ct ? t.flags &= ~(Nl | Za | ga | tt) : t.flags &= ~(ga | tt), e.lanes = ic(e.lanes, a);
    }
    function Bb() {
      if (Fe.current = dy, Jm) {
        for (var e = gn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Jm = !1;
      }
      _c = ie, gn = null, Wr = null, qr = null, Ii = null, os = -1, ue = null, tx = !1, ah = !1, ih = 0;
    }
    function ll() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return qr === null ? gn.memoizedState = qr = e : qr = qr.next = e, qr;
    }
    function Yi() {
      var e;
      if (Wr === null) {
        var t = gn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Wr.next;
      var a;
      if (qr === null ? a = gn.memoizedState : a = qr.next, a !== null)
        qr = a, a = qr.next, Wr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Wr = e;
        var i = {
          memoizedState: Wr.memoizedState,
          baseState: Wr.baseState,
          baseQueue: Wr.baseQueue,
          queue: Wr.queue,
          next: null
        };
        qr === null ? gn.memoizedState = qr = i : qr = qr.next = i;
      }
      return qr;
    }
    function Vb() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function fS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function dS(e, t, a) {
      var i = ll(), l;
      a !== void 0 ? l = a(t) : l = t, i.memoizedState = i.baseState = l;
      var d = {
        pending: null,
        interleaved: null,
        lanes: ie,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      i.queue = d;
      var v = d.dispatch = N_.bind(null, gn, d);
      return [i.memoizedState, v];
    }
    function pS(e, t, a) {
      var i = Yi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var d = Wr, v = d.baseQueue, w = l.pending;
      if (w !== null) {
        if (v !== null) {
          var b = v.next, R = w.next;
          v.next = R, w.next = b;
        }
        d.baseQueue !== v && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), d.baseQueue = v = w, l.pending = null;
      }
      if (v !== null) {
        var T = v.next, H = d.baseState, F = null, X = null, Z = null, re = T;
        do {
          var He = re.lane;
          if (Vl(_c, He)) {
            if (Z !== null) {
              var at = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: cr,
                action: re.action,
                hasEagerState: re.hasEagerState,
                eagerState: re.eagerState,
                next: null
              };
              Z = Z.next = at;
            }
            if (re.hasEagerState)
              H = re.eagerState;
            else {
              var Qt = re.action;
              H = e(H, Qt);
            }
          } else {
            var ft = {
              lane: He,
              action: re.action,
              hasEagerState: re.hasEagerState,
              eagerState: re.eagerState,
              next: null
            };
            Z === null ? (X = Z = ft, F = H) : Z = Z.next = ft, gn.lanes = Ot(gn.lanes, He), Ch(He);
          }
          re = re.next;
        } while (re !== null && re !== T);
        Z === null ? F = H : Z.next = X, Ge(H, i.memoizedState) || dh(), i.memoizedState = H, i.baseState = F, i.baseQueue = Z, l.lastRenderedState = H;
      }
      var Bt = l.interleaved;
      if (Bt !== null) {
        var W = Bt;
        do {
          var ae = W.lane;
          gn.lanes = Ot(gn.lanes, ae), Ch(ae), W = W.next;
        } while (W !== Bt);
      } else v === null && (l.lanes = ie);
      var q = l.dispatch;
      return [i.memoizedState, q];
    }
    function hS(e, t, a) {
      var i = Yi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var d = l.dispatch, v = l.pending, w = i.memoizedState;
      if (v !== null) {
        l.pending = null;
        var b = v.next, R = b;
        do {
          var T = R.action;
          w = e(w, T), R = R.next;
        } while (R !== b);
        Ge(w, i.memoizedState) || dh(), i.memoizedState = w, i.baseQueue === null && (i.baseState = w), l.lastRenderedState = w;
      }
      return [w, d];
    }
    function Uz(e, t, a) {
    }
    function Fz(e, t, a) {
    }
    function vS(e, t, a) {
      var i = gn, l = ll(), d, v = oa();
      if (v) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        d = a(), fd || d !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), fd = !0);
      } else {
        if (d = t(), !fd) {
          var w = t();
          Ge(d, w) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), fd = !0);
        }
        var b = Dy();
        if (b === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ac(b, _c) || Ib(i, t, d);
      }
      l.memoizedState = d;
      var R = {
        value: d,
        getSnapshot: t
      };
      return l.queue = R, ay(Wb.bind(null, i, R, e), [e]), i.flags |= ga, oh(Ir | la, Yb.bind(null, i, R, d, t), void 0, null), d;
    }
    function ey(e, t, a) {
      var i = gn, l = Yi(), d = t();
      if (!fd) {
        var v = t();
        Ge(d, v) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), fd = !0);
      }
      var w = l.memoizedState, b = !Ge(w, d);
      b && (l.memoizedState = d, dh());
      var R = l.queue;
      if (uh(Wb.bind(null, i, R, e), [e]), R.getSnapshot !== t || b || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      qr !== null && qr.memoizedState.tag & Ir) {
        i.flags |= ga, oh(Ir | la, Yb.bind(null, i, R, d, t), void 0, null);
        var T = Dy();
        if (T === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ac(T, _c) || Ib(i, t, d);
      }
      return d;
    }
    function Ib(e, t, a) {
      e.flags |= Ll;
      var i = {
        getSnapshot: t,
        value: a
      }, l = gn.updateQueue;
      if (l === null)
        l = Vb(), gn.updateQueue = l, l.stores = [i];
      else {
        var d = l.stores;
        d === null ? l.stores = [i] : d.push(i);
      }
    }
    function Yb(e, t, a, i) {
      t.value = a, t.getSnapshot = i, qb(t) && Qb(e);
    }
    function Wb(e, t, a) {
      var i = function() {
        qb(t) && Qb(e);
      };
      return a(i);
    }
    function qb(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Ge(a, i);
      } catch {
        return !0;
      }
    }
    function Qb(e) {
      var t = ui(e, pt);
      t !== null && Xr(t, e, pt, _n);
    }
    function ty(e) {
      var t = ll();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: ie,
        dispatch: null,
        lastRenderedReducer: fS,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = M_.bind(null, gn, a);
      return [t.memoizedState, i];
    }
    function mS(e) {
      return pS(fS);
    }
    function yS(e) {
      return hS(fS);
    }
    function oh(e, t, a, i) {
      var l = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, d = gn.updateQueue;
      if (d === null)
        d = Vb(), gn.updateQueue = d, d.lastEffect = l.next = l;
      else {
        var v = d.lastEffect;
        if (v === null)
          d.lastEffect = l.next = l;
        else {
          var w = v.next;
          v.next = l, l.next = w, d.lastEffect = l;
        }
      }
      return l;
    }
    function gS(e) {
      var t = ll();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function ny(e) {
      var t = Yi();
      return t.memoizedState;
    }
    function lh(e, t, a, i) {
      var l = ll(), d = i === void 0 ? null : i;
      gn.flags |= e, l.memoizedState = oh(Ir | t, a, void 0, d);
    }
    function ry(e, t, a, i) {
      var l = Yi(), d = i === void 0 ? null : i, v = void 0;
      if (Wr !== null) {
        var w = Wr.memoizedState;
        if (v = w.destroy, d !== null) {
          var b = w.deps;
          if (cS(d, b)) {
            l.memoizedState = oh(t, a, v, d);
            return;
          }
        }
      }
      gn.flags |= e, l.memoizedState = oh(Ir | t, a, v, d);
    }
    function ay(e, t) {
      return (gn.mode & ei) !== ct ? lh(Nl | ga | Io, la, e, t) : lh(ga | Io, la, e, t);
    }
    function uh(e, t) {
      return ry(ga, la, e, t);
    }
    function SS(e, t) {
      return lh(tt, ol, e, t);
    }
    function iy(e, t) {
      return ry(tt, ol, e, t);
    }
    function wS(e, t) {
      var a = tt;
      return a |= Xa, (gn.mode & ei) !== ct && (a |= Za), lh(a, Yr, e, t);
    }
    function oy(e, t) {
      return ry(tt, Yr, e, t);
    }
    function Gb(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var l = t;
        l.hasOwnProperty("current") || g("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
        var d = e();
        return l.current = d, function() {
          l.current = null;
        };
      }
    }
    function ES(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = tt;
      return l |= Xa, (gn.mode & ei) !== ct && (l |= Za), lh(l, Yr, Gb.bind(null, t, e), i);
    }
    function ly(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return ry(tt, Yr, Gb.bind(null, t, e), i);
    }
    function D_(e, t) {
    }
    var uy = D_;
    function bS(e, t) {
      var a = ll(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function sy(e, t) {
      var a = Yi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var d = l[1];
        if (cS(i, d))
          return l[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function xS(e, t) {
      var a = ll(), i = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, i], l;
    }
    function cy(e, t) {
      var a = Yi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var d = l[1];
        if (cS(i, d))
          return l[0];
      }
      var v = e();
      return a.memoizedState = [v, i], v;
    }
    function CS(e) {
      var t = ll();
      return t.memoizedState = e, e;
    }
    function Kb(e) {
      var t = Yi(), a = Wr, i = a.memoizedState;
      return Zb(t, i, e);
    }
    function Xb(e) {
      var t = Yi();
      if (Wr === null)
        return t.memoizedState = e, e;
      var a = Wr.memoizedState;
      return Zb(t, a, e);
    }
    function Zb(e, t, a) {
      var i = !Pv(_c);
      if (i) {
        if (!Ge(a, t)) {
          var l = Bv();
          gn.lanes = Ot(gn.lanes, l), Ch(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, dh()), e.memoizedState = a, a;
    }
    function A_(e, t, a) {
      var i = ni();
      rr(Lg(i, ho)), e(!0);
      var l = rh.transition;
      rh.transition = {};
      var d = rh.transition;
      rh.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (rr(i), rh.transition = l, l === null && d._updatedFibers) {
          var v = d._updatedFibers.size;
          v > 10 && S("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), d._updatedFibers.clear();
        }
      }
    }
    function RS() {
      var e = ty(!1), t = e[0], a = e[1], i = A_.bind(null, a), l = ll();
      return l.memoizedState = i, [t, i];
    }
    function Jb() {
      var e = mS(), t = e[0], a = Yi(), i = a.memoizedState;
      return [t, i];
    }
    function ex() {
      var e = yS(), t = e[0], a = Yi(), i = a.memoizedState;
      return [t, i];
    }
    var tx = !1;
    function L_() {
      return tx;
    }
    function TS() {
      var e = ll(), t = Dy(), a = t.identifierPrefix, i;
      if (oa()) {
        var l = Wk();
        i = ":" + a + "R" + l;
        var d = ih++;
        d > 0 && (i += "H" + d.toString(32)), i += ":";
      } else {
        var v = k_++;
        i = ":" + a + "r" + v.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function fy() {
      var e = Yi(), t = e.memoizedState;
      return t;
    }
    function N_(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = fs(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (nx(e))
        rx(t, l);
      else {
        var d = wb(e, t, l, i);
        if (d !== null) {
          var v = Ba();
          Xr(d, e, i, v), ax(d, t, i);
        }
      }
      ix(e, i);
    }
    function M_(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = fs(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (nx(e))
        rx(t, l);
      else {
        var d = e.alternate;
        if (e.lanes === ie && (d === null || d.lanes === ie)) {
          var v = t.lastRenderedReducer;
          if (v !== null) {
            var w;
            w = Fe.current, Fe.current = xo;
            try {
              var b = t.lastRenderedState, R = v(b, a);
              if (l.hasEagerState = !0, l.eagerState = R, Ge(R, b)) {
                d_(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              Fe.current = w;
            }
          }
        }
        var T = wb(e, t, l, i);
        if (T !== null) {
          var H = Ba();
          Xr(T, e, i, H), ax(T, t, i);
        }
      }
      ix(e, i);
    }
    function nx(e) {
      var t = e.alternate;
      return e === gn || t !== null && t === gn;
    }
    function rx(e, t) {
      ah = Jm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function ax(e, t, a) {
      if (hp(a)) {
        var i = t.lanes;
        i = Cf(i, e.pendingLanes);
        var l = Ot(i, a);
        t.lanes = l, vp(e, l);
      }
    }
    function ix(e, t, a) {
      uf(e, t);
    }
    var dy = {
      readContext: Ur,
      useCallback: Da,
      useContext: Da,
      useEffect: Da,
      useImperativeHandle: Da,
      useInsertionEffect: Da,
      useLayoutEffect: Da,
      useMemo: Da,
      useReducer: Da,
      useRef: Da,
      useState: Da,
      useDebugValue: Da,
      useDeferredValue: Da,
      useTransition: Da,
      useMutableSource: Da,
      useSyncExternalStore: Da,
      useId: Da,
      unstable_isNewReconciler: oe
    }, ox = null, lx = null, ux = null, sx = null, ul = null, xo = null, py = null;
    {
      var kS = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ct = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      ox = {
        readContext: function(e) {
          return Ur(e);
        },
        useCallback: function(e, t) {
          return ue = "useCallback", sn(), dd(t), bS(e, t);
        },
        useContext: function(e) {
          return ue = "useContext", sn(), Ur(e);
        },
        useEffect: function(e, t) {
          return ue = "useEffect", sn(), dd(t), ay(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ue = "useImperativeHandle", sn(), dd(a), ES(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ue = "useInsertionEffect", sn(), dd(t), SS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ue = "useLayoutEffect", sn(), dd(t), wS(e, t);
        },
        useMemo: function(e, t) {
          ue = "useMemo", sn(), dd(t);
          var a = Fe.current;
          Fe.current = ul;
          try {
            return xS(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ue = "useReducer", sn();
          var i = Fe.current;
          Fe.current = ul;
          try {
            return dS(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return ue = "useRef", sn(), gS(e);
        },
        useState: function(e) {
          ue = "useState", sn();
          var t = Fe.current;
          Fe.current = ul;
          try {
            return ty(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ue = "useDebugValue", sn(), void 0;
        },
        useDeferredValue: function(e) {
          return ue = "useDeferredValue", sn(), CS(e);
        },
        useTransition: function() {
          return ue = "useTransition", sn(), RS();
        },
        useMutableSource: function(e, t, a) {
          return ue = "useMutableSource", sn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ue = "useSyncExternalStore", sn(), vS(e, t, a);
        },
        useId: function() {
          return ue = "useId", sn(), TS();
        },
        unstable_isNewReconciler: oe
      }, lx = {
        readContext: function(e) {
          return Ur(e);
        },
        useCallback: function(e, t) {
          return ue = "useCallback", Me(), bS(e, t);
        },
        useContext: function(e) {
          return ue = "useContext", Me(), Ur(e);
        },
        useEffect: function(e, t) {
          return ue = "useEffect", Me(), ay(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ue = "useImperativeHandle", Me(), ES(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ue = "useInsertionEffect", Me(), SS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ue = "useLayoutEffect", Me(), wS(e, t);
        },
        useMemo: function(e, t) {
          ue = "useMemo", Me();
          var a = Fe.current;
          Fe.current = ul;
          try {
            return xS(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ue = "useReducer", Me();
          var i = Fe.current;
          Fe.current = ul;
          try {
            return dS(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return ue = "useRef", Me(), gS(e);
        },
        useState: function(e) {
          ue = "useState", Me();
          var t = Fe.current;
          Fe.current = ul;
          try {
            return ty(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ue = "useDebugValue", Me(), void 0;
        },
        useDeferredValue: function(e) {
          return ue = "useDeferredValue", Me(), CS(e);
        },
        useTransition: function() {
          return ue = "useTransition", Me(), RS();
        },
        useMutableSource: function(e, t, a) {
          return ue = "useMutableSource", Me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ue = "useSyncExternalStore", Me(), vS(e, t, a);
        },
        useId: function() {
          return ue = "useId", Me(), TS();
        },
        unstable_isNewReconciler: oe
      }, ux = {
        readContext: function(e) {
          return Ur(e);
        },
        useCallback: function(e, t) {
          return ue = "useCallback", Me(), sy(e, t);
        },
        useContext: function(e) {
          return ue = "useContext", Me(), Ur(e);
        },
        useEffect: function(e, t) {
          return ue = "useEffect", Me(), uh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ue = "useImperativeHandle", Me(), ly(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ue = "useInsertionEffect", Me(), iy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ue = "useLayoutEffect", Me(), oy(e, t);
        },
        useMemo: function(e, t) {
          ue = "useMemo", Me();
          var a = Fe.current;
          Fe.current = xo;
          try {
            return cy(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ue = "useReducer", Me();
          var i = Fe.current;
          Fe.current = xo;
          try {
            return pS(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return ue = "useRef", Me(), ny();
        },
        useState: function(e) {
          ue = "useState", Me();
          var t = Fe.current;
          Fe.current = xo;
          try {
            return mS(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ue = "useDebugValue", Me(), uy();
        },
        useDeferredValue: function(e) {
          return ue = "useDeferredValue", Me(), Kb(e);
        },
        useTransition: function() {
          return ue = "useTransition", Me(), Jb();
        },
        useMutableSource: function(e, t, a) {
          return ue = "useMutableSource", Me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ue = "useSyncExternalStore", Me(), ey(e, t);
        },
        useId: function() {
          return ue = "useId", Me(), fy();
        },
        unstable_isNewReconciler: oe
      }, sx = {
        readContext: function(e) {
          return Ur(e);
        },
        useCallback: function(e, t) {
          return ue = "useCallback", Me(), sy(e, t);
        },
        useContext: function(e) {
          return ue = "useContext", Me(), Ur(e);
        },
        useEffect: function(e, t) {
          return ue = "useEffect", Me(), uh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ue = "useImperativeHandle", Me(), ly(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ue = "useInsertionEffect", Me(), iy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ue = "useLayoutEffect", Me(), oy(e, t);
        },
        useMemo: function(e, t) {
          ue = "useMemo", Me();
          var a = Fe.current;
          Fe.current = py;
          try {
            return cy(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ue = "useReducer", Me();
          var i = Fe.current;
          Fe.current = py;
          try {
            return hS(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return ue = "useRef", Me(), ny();
        },
        useState: function(e) {
          ue = "useState", Me();
          var t = Fe.current;
          Fe.current = py;
          try {
            return yS(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ue = "useDebugValue", Me(), uy();
        },
        useDeferredValue: function(e) {
          return ue = "useDeferredValue", Me(), Xb(e);
        },
        useTransition: function() {
          return ue = "useTransition", Me(), ex();
        },
        useMutableSource: function(e, t, a) {
          return ue = "useMutableSource", Me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ue = "useSyncExternalStore", Me(), ey(e, t);
        },
        useId: function() {
          return ue = "useId", Me(), fy();
        },
        unstable_isNewReconciler: oe
      }, ul = {
        readContext: function(e) {
          return kS(), Ur(e);
        },
        useCallback: function(e, t) {
          return ue = "useCallback", Ct(), sn(), bS(e, t);
        },
        useContext: function(e) {
          return ue = "useContext", Ct(), sn(), Ur(e);
        },
        useEffect: function(e, t) {
          return ue = "useEffect", Ct(), sn(), ay(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ue = "useImperativeHandle", Ct(), sn(), ES(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ue = "useInsertionEffect", Ct(), sn(), SS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ue = "useLayoutEffect", Ct(), sn(), wS(e, t);
        },
        useMemo: function(e, t) {
          ue = "useMemo", Ct(), sn();
          var a = Fe.current;
          Fe.current = ul;
          try {
            return xS(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ue = "useReducer", Ct(), sn();
          var i = Fe.current;
          Fe.current = ul;
          try {
            return dS(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return ue = "useRef", Ct(), sn(), gS(e);
        },
        useState: function(e) {
          ue = "useState", Ct(), sn();
          var t = Fe.current;
          Fe.current = ul;
          try {
            return ty(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ue = "useDebugValue", Ct(), sn(), void 0;
        },
        useDeferredValue: function(e) {
          return ue = "useDeferredValue", Ct(), sn(), CS(e);
        },
        useTransition: function() {
          return ue = "useTransition", Ct(), sn(), RS();
        },
        useMutableSource: function(e, t, a) {
          return ue = "useMutableSource", Ct(), sn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ue = "useSyncExternalStore", Ct(), sn(), vS(e, t, a);
        },
        useId: function() {
          return ue = "useId", Ct(), sn(), TS();
        },
        unstable_isNewReconciler: oe
      }, xo = {
        readContext: function(e) {
          return kS(), Ur(e);
        },
        useCallback: function(e, t) {
          return ue = "useCallback", Ct(), Me(), sy(e, t);
        },
        useContext: function(e) {
          return ue = "useContext", Ct(), Me(), Ur(e);
        },
        useEffect: function(e, t) {
          return ue = "useEffect", Ct(), Me(), uh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ue = "useImperativeHandle", Ct(), Me(), ly(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ue = "useInsertionEffect", Ct(), Me(), iy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ue = "useLayoutEffect", Ct(), Me(), oy(e, t);
        },
        useMemo: function(e, t) {
          ue = "useMemo", Ct(), Me();
          var a = Fe.current;
          Fe.current = xo;
          try {
            return cy(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ue = "useReducer", Ct(), Me();
          var i = Fe.current;
          Fe.current = xo;
          try {
            return pS(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return ue = "useRef", Ct(), Me(), ny();
        },
        useState: function(e) {
          ue = "useState", Ct(), Me();
          var t = Fe.current;
          Fe.current = xo;
          try {
            return mS(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ue = "useDebugValue", Ct(), Me(), uy();
        },
        useDeferredValue: function(e) {
          return ue = "useDeferredValue", Ct(), Me(), Kb(e);
        },
        useTransition: function() {
          return ue = "useTransition", Ct(), Me(), Jb();
        },
        useMutableSource: function(e, t, a) {
          return ue = "useMutableSource", Ct(), Me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ue = "useSyncExternalStore", Ct(), Me(), ey(e, t);
        },
        useId: function() {
          return ue = "useId", Ct(), Me(), fy();
        },
        unstable_isNewReconciler: oe
      }, py = {
        readContext: function(e) {
          return kS(), Ur(e);
        },
        useCallback: function(e, t) {
          return ue = "useCallback", Ct(), Me(), sy(e, t);
        },
        useContext: function(e) {
          return ue = "useContext", Ct(), Me(), Ur(e);
        },
        useEffect: function(e, t) {
          return ue = "useEffect", Ct(), Me(), uh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ue = "useImperativeHandle", Ct(), Me(), ly(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ue = "useInsertionEffect", Ct(), Me(), iy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ue = "useLayoutEffect", Ct(), Me(), oy(e, t);
        },
        useMemo: function(e, t) {
          ue = "useMemo", Ct(), Me();
          var a = Fe.current;
          Fe.current = xo;
          try {
            return cy(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ue = "useReducer", Ct(), Me();
          var i = Fe.current;
          Fe.current = xo;
          try {
            return hS(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return ue = "useRef", Ct(), Me(), ny();
        },
        useState: function(e) {
          ue = "useState", Ct(), Me();
          var t = Fe.current;
          Fe.current = xo;
          try {
            return yS(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ue = "useDebugValue", Ct(), Me(), uy();
        },
        useDeferredValue: function(e) {
          return ue = "useDeferredValue", Ct(), Me(), Xb(e);
        },
        useTransition: function() {
          return ue = "useTransition", Ct(), Me(), ex();
        },
        useMutableSource: function(e, t, a) {
          return ue = "useMutableSource", Ct(), Me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ue = "useSyncExternalStore", Ct(), Me(), ey(e, t);
        },
        useId: function() {
          return ue = "useId", Ct(), Me(), fy();
        },
        unstable_isNewReconciler: oe
      };
    }
    var ls = f.unstable_now, cx = 0, hy = -1, sh = -1, vy = -1, _S = !1, my = !1;
    function fx() {
      return _S;
    }
    function z_() {
      my = !0;
    }
    function U_() {
      _S = !1, my = !1;
    }
    function F_() {
      _S = my, my = !1;
    }
    function dx() {
      return cx;
    }
    function px() {
      cx = ls();
    }
    function OS(e) {
      sh = ls(), e.actualStartTime < 0 && (e.actualStartTime = ls());
    }
    function hx(e) {
      sh = -1;
    }
    function yy(e, t) {
      if (sh >= 0) {
        var a = ls() - sh;
        e.actualDuration += a, t && (e.selfBaseDuration = a), sh = -1;
      }
    }
    function sl(e) {
      if (hy >= 0) {
        var t = ls() - hy;
        hy = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case U:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Ie:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function DS(e) {
      if (vy >= 0) {
        var t = ls() - vy;
        vy = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case U:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Ie:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function cl() {
      hy = ls();
    }
    function AS() {
      vy = ls();
    }
    function LS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Oc(e, t) {
      return {
        value: e,
        source: t,
        stack: cu(t),
        digest: null
      };
    }
    function NS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function j_(e, t) {
      return !0;
    }
    function MS(e, t) {
      try {
        var a = j_(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, d = t.stack, v = d !== null ? d : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === O)
            return;
          console.error(i);
        }
        var w = l ? bt(l) : null, b = w ? "The above error occurred in the <" + w + "> component:" : "The above error occurred in one of your React components:", R;
        if (e.tag === U)
          R = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var T = bt(e) || "Anonymous";
          R = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + T + ".");
        }
        var H = b + `
` + v + `

` + ("" + R);
        console.error(H);
      } catch (F) {
        setTimeout(function() {
          throw F;
        });
      }
    }
    var P_ = typeof WeakMap == "function" ? WeakMap : Map;
    function vx(e, t, a) {
      var i = nu(_n, a);
      i.tag = M0, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        AD(l), MS(e, t);
      }, i;
    }
    function zS(e, t, a) {
      var i = nu(_n, a);
      i.tag = M0;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var d = t.value;
        i.payload = function() {
          return l(d);
        }, i.callback = function() {
          T1(e), MS(e, t);
        };
      }
      var v = e.stateNode;
      return v !== null && typeof v.componentDidCatch == "function" && (i.callback = function() {
        T1(e), MS(e, t), typeof l != "function" && OD(this);
        var b = t.value, R = t.stack;
        this.componentDidCatch(b, {
          componentStack: R !== null ? R : ""
        }), typeof l != "function" && (Ta(e.lanes, pt) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", bt(e) || "Unknown"));
      }), i;
    }
    function mx(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new P_(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var d = LD.bind(null, e, t, a);
        ja && Rh(e, a), t.then(d, d);
      }
    }
    function H_(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var d = /* @__PURE__ */ new Set();
        d.add(a), e.updateQueue = d;
      } else
        l.add(a);
    }
    function $_(e, t) {
      var a = e.tag;
      if ((e.mode & rt) === ct && (a === L || a === ge || a === We)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function yx(e) {
      var t = e;
      do {
        if (t.tag === be && R_(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function gx(e, t, a, i, l) {
      if ((e.mode & rt) === ct) {
        if (e === t)
          e.flags |= $r;
        else {
          if (e.flags |= xt, a.flags |= ef, a.flags &= ~(Rv | Vo), a.tag === O) {
            var d = a.alternate;
            if (d === null)
              a.tag = Dt;
            else {
              var v = nu(_n, pt);
              v.tag = $m, rs(a, v, pt);
            }
          }
          a.lanes = Ot(a.lanes, pt);
        }
        return e;
      }
      return e.flags |= $r, e.lanes = l, e;
    }
    function B_(e, t, a, i, l) {
      if (a.flags |= Vo, ja && Rh(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var d = i;
        $_(a), oa() && a.mode & rt && ub();
        var v = yx(t);
        if (v !== null) {
          v.flags &= ~ra, gx(v, t, a, e, l), v.mode & rt && mx(e, d, l), H_(v, e, d);
          return;
        } else {
          if (!pp(l)) {
            mx(e, d, l), hw();
            return;
          }
          var w = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = w;
        }
      } else if (oa() && a.mode & rt) {
        ub();
        var b = yx(t);
        if (b !== null) {
          (b.flags & $r) === st && (b.flags |= ra), gx(b, t, a, e, l), k0(Oc(i, a));
          return;
        }
      }
      i = Oc(i, a), ED(i);
      var R = t;
      do {
        switch (R.tag) {
          case U: {
            var T = i;
            R.flags |= $r;
            var H = Mu(l);
            R.lanes = Ot(R.lanes, H);
            var F = vx(R, T, H);
            F0(R, F);
            return;
          }
          case O:
            var X = i, Z = R.type, re = R.stateNode;
            if ((R.flags & xt) === st && (typeof Z.getDerivedStateFromError == "function" || re !== null && typeof re.componentDidCatch == "function" && !y1(re))) {
              R.flags |= $r;
              var He = Mu(l);
              R.lanes = Ot(R.lanes, He);
              var ft = zS(R, X, He);
              F0(R, ft);
              return;
            }
            break;
        }
        R = R.return;
      } while (R !== null);
    }
    function V_() {
      return null;
    }
    var ch = p.ReactCurrentOwner, Co = !1, US, fh, FS, jS, PS, Dc, HS, gy;
    US = {}, fh = {}, FS = {}, jS = {}, PS = {}, Dc = !1, HS = {}, gy = {};
    function Ha(e, t, a, i) {
      e === null ? t.child = Ub(t, null, a, i) : t.child = ld(t, e.child, a, i);
    }
    function I_(e, t, a, i) {
      t.child = ld(t, e.child, null, i), t.child = ld(t, null, a, i);
    }
    function Sx(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var d = a.propTypes;
        d && go(
          d,
          i,
          // Resolved props
          "prop",
          Kt(a)
        );
      }
      var v = a.render, w = t.ref, b, R;
      od(t, l), Tu(t);
      {
        if (ch.current = t, Hr(!0), b = pd(e, t, v, i, w, l), R = hd(), t.mode & tr) {
          kn(!0);
          try {
            b = pd(e, t, v, i, w, l), R = hd();
          } finally {
            kn(!1);
          }
        }
        Hr(!1);
      }
      return zl(), e !== null && !Co ? ($b(e, t, l), ru(e, t, l)) : (oa() && R && E0(t), t.flags |= wi, Ha(e, t, b, l), t.child);
    }
    function wx(e, t, a, i, l) {
      if (e === null) {
        var d = a.type;
        if (GD(d) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var v = d;
          return v = bd(d), t.tag = We, t.type = v, VS(t, d), Ex(e, t, v, i, l);
        }
        {
          var w = d.propTypes;
          w && go(
            w,
            i,
            // Resolved props
            "prop",
            Kt(d)
          );
        }
        var b = Rw(a.type, null, i, t, t.mode, l);
        return b.ref = t.ref, b.return = t, t.child = b, b;
      }
      {
        var R = a.type, T = R.propTypes;
        T && go(
          T,
          i,
          // Resolved props
          "prop",
          Kt(R)
        );
      }
      var H = e.child, F = GS(e, l);
      if (!F) {
        var X = H.memoizedProps, Z = a.compare;
        if (Z = Z !== null ? Z : vt, Z(X, i) && e.ref === t.ref)
          return ru(e, t, l);
      }
      t.flags |= wi;
      var re = zc(H, i);
      return re.ref = t.ref, re.return = t, t.child = re, re;
    }
    function Ex(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var d = t.elementType;
        if (d.$$typeof === it) {
          var v = d, w = v._payload, b = v._init;
          try {
            d = b(w);
          } catch {
            d = null;
          }
          var R = d && d.propTypes;
          R && go(
            R,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Kt(d)
          );
        }
      }
      if (e !== null) {
        var T = e.memoizedProps;
        if (vt(T, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Co = !1, t.pendingProps = i = T, GS(e, l))
            (e.flags & ef) !== st && (Co = !0);
          else return t.lanes = e.lanes, ru(e, t, l);
      }
      return $S(e, t, a, i, l);
    }
    function bx(e, t, a) {
      var i = t.pendingProps, l = i.children, d = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || K)
        if ((t.mode & rt) === ct) {
          var v = {
            baseLanes: ie,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = v, Ay(t, a);
        } else if (Ta(a, Pa)) {
          var H = {
            baseLanes: ie,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = H;
          var F = d !== null ? d.baseLanes : a;
          Ay(t, F);
        } else {
          var w = null, b;
          if (d !== null) {
            var R = d.baseLanes;
            b = Ot(R, a);
          } else
            b = a;
          t.lanes = t.childLanes = Pa;
          var T = {
            baseLanes: b,
            cachePool: w,
            transitions: null
          };
          return t.memoizedState = T, t.updateQueue = null, Ay(t, b), null;
        }
      else {
        var X;
        d !== null ? (X = Ot(d.baseLanes, a), t.memoizedState = null) : X = a, Ay(t, X);
      }
      return Ha(e, t, l, a), t.child;
    }
    function Y_(e, t, a) {
      var i = t.pendingProps;
      return Ha(e, t, i, a), t.child;
    }
    function W_(e, t, a) {
      var i = t.pendingProps.children;
      return Ha(e, t, i, a), t.child;
    }
    function q_(e, t, a) {
      {
        t.flags |= tt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, d = l.children;
      return Ha(e, t, d, a), t.child;
    }
    function xx(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= za, t.flags |= Ni);
    }
    function $S(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var d = a.propTypes;
        d && go(
          d,
          i,
          // Resolved props
          "prop",
          Kt(a)
        );
      }
      var v;
      {
        var w = ed(t, a, !0);
        v = td(t, w);
      }
      var b, R;
      od(t, l), Tu(t);
      {
        if (ch.current = t, Hr(!0), b = pd(e, t, a, i, v, l), R = hd(), t.mode & tr) {
          kn(!0);
          try {
            b = pd(e, t, a, i, v, l), R = hd();
          } finally {
            kn(!1);
          }
        }
        Hr(!1);
      }
      return zl(), e !== null && !Co ? ($b(e, t, l), ru(e, t, l)) : (oa() && R && E0(t), t.flags |= wi, Ha(e, t, b, l), t.child);
    }
    function Cx(e, t, a, i, l) {
      {
        switch (cA(t)) {
          case !1: {
            var d = t.stateNode, v = t.type, w = new v(t.memoizedProps, d.context), b = w.state;
            d.updater.enqueueSetState(d, b, null);
            break;
          }
          case !0: {
            t.flags |= xt, t.flags |= $r;
            var R = new Error("Simulated error coming from DevTools"), T = Mu(l);
            t.lanes = Ot(t.lanes, T);
            var H = zS(t, Oc(R, t), T);
            F0(t, H);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var F = a.propTypes;
          F && go(
            F,
            i,
            // Resolved props
            "prop",
            Kt(a)
          );
        }
      }
      var X;
      il(a) ? (X = !0, Dm(t)) : X = !1, od(t, l);
      var Z = t.stateNode, re;
      Z === null ? (wy(e, t), Ab(t, a, i), G0(t, a, i, l), re = !0) : e === null ? re = S_(t, a, i, l) : re = w_(e, t, a, i, l);
      var He = BS(e, t, a, re, X, l);
      {
        var ft = t.stateNode;
        re && ft.props !== i && (Dc || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", bt(t) || "a component"), Dc = !0);
      }
      return He;
    }
    function BS(e, t, a, i, l, d) {
      xx(e, t);
      var v = (t.flags & xt) !== st;
      if (!i && !v)
        return l && ab(t, a, !1), ru(e, t, d);
      var w = t.stateNode;
      ch.current = t;
      var b;
      if (v && typeof a.getDerivedStateFromError != "function")
        b = null, hx();
      else {
        Tu(t);
        {
          if (Hr(!0), b = w.render(), t.mode & tr) {
            kn(!0);
            try {
              w.render();
            } finally {
              kn(!1);
            }
          }
          Hr(!1);
        }
        zl();
      }
      return t.flags |= wi, e !== null && v ? I_(e, t, b, d) : Ha(e, t, b, d), t.memoizedState = w.state, l && ab(t, a, !0), t.child;
    }
    function Rx(e) {
      var t = e.stateNode;
      t.pendingContext ? nb(e, t.pendingContext, t.pendingContext !== t.context) : t.context && nb(e, t.context, !1), tS(e, t.containerInfo);
    }
    function Q_(e, t, a) {
      if (Rx(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, d = l.element;
      xb(e, t), Ym(t, i, null, a);
      var v = t.memoizedState;
      t.stateNode;
      var w = v.element;
      if (l.isDehydrated) {
        var b = {
          element: w,
          isDehydrated: !1,
          cache: v.cache,
          pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
          transitions: v.transitions
        }, R = t.updateQueue;
        if (R.baseState = b, t.memoizedState = b, t.flags & ra) {
          var T = Oc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return Tx(e, t, w, a, T);
        } else if (w !== d) {
          var H = Oc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return Tx(e, t, w, a, H);
        } else {
          Zk(t);
          var F = Ub(t, null, w, a);
          t.child = F;
          for (var X = F; X; )
            X.flags = X.flags & ~bn | Li, X = X.sibling;
        }
      } else {
        if (ad(), w === d)
          return ru(e, t, a);
        Ha(e, t, w, a);
      }
      return t.child;
    }
    function Tx(e, t, a, i, l) {
      return ad(), k0(l), t.flags |= ra, Ha(e, t, a, i), t.child;
    }
    function G_(e, t, a) {
      jb(t), e === null && T0(t);
      var i = t.type, l = t.pendingProps, d = e !== null ? e.memoizedProps : null, v = l.children, w = l0(i, l);
      return w ? v = null : d !== null && l0(i, d) && (t.flags |= Ka), xx(e, t), Ha(e, t, v, a), t.child;
    }
    function K_(e, t) {
      return e === null && T0(t), null;
    }
    function X_(e, t, a, i) {
      wy(e, t);
      var l = t.pendingProps, d = a, v = d._payload, w = d._init, b = w(v);
      t.type = b;
      var R = t.tag = KD(b), T = Eo(b, l), H;
      switch (R) {
        case L:
          return VS(t, b), t.type = b = bd(b), H = $S(null, t, b, T, i), H;
        case O:
          return t.type = b = Sw(b), H = Cx(null, t, b, T, i), H;
        case ge:
          return t.type = b = ww(b), H = Sx(null, t, b, T, i), H;
        case De: {
          if (t.type !== t.elementType) {
            var F = b.propTypes;
            F && go(
              F,
              T,
              // Resolved for outer only
              "prop",
              Kt(b)
            );
          }
          return H = wx(
            null,
            t,
            b,
            Eo(b.type, T),
            // The inner type can have defaults too
            i
          ), H;
        }
      }
      var X = "";
      throw b !== null && typeof b == "object" && b.$$typeof === it && (X = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + b + ". " + ("Lazy element type must resolve to a class or function." + X));
    }
    function Z_(e, t, a, i, l) {
      wy(e, t), t.tag = O;
      var d;
      return il(a) ? (d = !0, Dm(t)) : d = !1, od(t, l), Ab(t, a, i), G0(t, a, i, l), BS(null, t, a, !0, d, l);
    }
    function J_(e, t, a, i) {
      wy(e, t);
      var l = t.pendingProps, d;
      {
        var v = ed(t, a, !1);
        d = td(t, v);
      }
      od(t, i);
      var w, b;
      Tu(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var R = Kt(a) || "Unknown";
          US[R] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", R, R), US[R] = !0);
        }
        t.mode & tr && wo.recordLegacyContextWarning(t, null), Hr(!0), ch.current = t, w = pd(null, t, a, l, d, i), b = hd(), Hr(!1);
      }
      if (zl(), t.flags |= wi, typeof w == "object" && w !== null && typeof w.render == "function" && w.$$typeof === void 0) {
        var T = Kt(a) || "Unknown";
        fh[T] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", T, T, T), fh[T] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof w == "object" && w !== null && typeof w.render == "function" && w.$$typeof === void 0
      ) {
        {
          var H = Kt(a) || "Unknown";
          fh[H] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", H, H, H), fh[H] = !0);
        }
        t.tag = O, t.memoizedState = null, t.updateQueue = null;
        var F = !1;
        return il(a) ? (F = !0, Dm(t)) : F = !1, t.memoizedState = w.state !== null && w.state !== void 0 ? w.state : null, U0(t), Db(t, w), G0(t, a, l, i), BS(null, t, a, !0, F, i);
      } else {
        if (t.tag = L, t.mode & tr) {
          kn(!0);
          try {
            w = pd(null, t, a, l, d, i), b = hd();
          } finally {
            kn(!1);
          }
        }
        return oa() && b && E0(t), Ha(null, t, w, i), VS(t, a), t.child;
      }
    }
    function VS(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = qa();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", d = e._debugSource;
          d && (l = d.fileName + ":" + d.lineNumber), PS[l] || (PS[l] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var v = Kt(t) || "Unknown";
          jS[v] || (g("%s: Function components do not support getDerivedStateFromProps.", v), jS[v] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var w = Kt(t) || "Unknown";
          FS[w] || (g("%s: Function components do not support contextType.", w), FS[w] = !0);
        }
      }
    }
    var IS = {
      dehydrated: null,
      treeContext: null,
      retryLane: cr
    };
    function YS(e) {
      return {
        baseLanes: e,
        cachePool: V_(),
        transitions: null
      };
    }
    function eO(e, t) {
      var a = null;
      return {
        baseLanes: Ot(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function tO(e, t, a, i) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return aS(e, nh);
    }
    function nO(e, t) {
      return ic(e.childLanes, t);
    }
    function kx(e, t, a) {
      var i = t.pendingProps;
      fA(t) && (t.flags |= xt);
      var l = bo.current, d = !1, v = (t.flags & xt) !== st;
      if (v || tO(l, e) ? (d = !0, t.flags &= ~xt) : (e === null || e.memoizedState !== null) && (l = C_(l, Hb)), l = sd(l), is(t, l), e === null) {
        T0(t);
        var w = t.memoizedState;
        if (w !== null) {
          var b = w.dehydrated;
          if (b !== null)
            return lO(t, b);
        }
        var R = i.children, T = i.fallback;
        if (d) {
          var H = rO(t, R, T, a), F = t.child;
          return F.memoizedState = YS(a), t.memoizedState = IS, H;
        } else
          return WS(t, R);
      } else {
        var X = e.memoizedState;
        if (X !== null) {
          var Z = X.dehydrated;
          if (Z !== null)
            return uO(e, t, v, i, Z, X, a);
        }
        if (d) {
          var re = i.fallback, He = i.children, ft = iO(e, t, He, re, a), at = t.child, Qt = e.child.memoizedState;
          return at.memoizedState = Qt === null ? YS(a) : eO(Qt, a), at.childLanes = nO(e, a), t.memoizedState = IS, ft;
        } else {
          var Bt = i.children, W = aO(e, t, Bt, a);
          return t.memoizedState = null, W;
        }
      }
    }
    function WS(e, t, a) {
      var i = e.mode, l = {
        mode: "visible",
        children: t
      }, d = qS(l, i);
      return d.return = e, e.child = d, d;
    }
    function rO(e, t, a, i) {
      var l = e.mode, d = e.child, v = {
        mode: "hidden",
        children: t
      }, w, b;
      return (l & rt) === ct && d !== null ? (w = d, w.childLanes = ie, w.pendingProps = v, e.mode & en && (w.actualDuration = 0, w.actualStartTime = -1, w.selfBaseDuration = 0, w.treeBaseDuration = 0), b = ps(a, l, i, null)) : (w = qS(v, l), b = ps(a, l, i, null)), w.return = e, b.return = e, w.sibling = b, e.child = w, b;
    }
    function qS(e, t, a) {
      return _1(e, t, ie, null);
    }
    function _x(e, t) {
      return zc(e, t);
    }
    function aO(e, t, a, i) {
      var l = e.child, d = l.sibling, v = _x(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & rt) === ct && (v.lanes = i), v.return = t, v.sibling = null, d !== null) {
        var w = t.deletions;
        w === null ? (t.deletions = [d], t.flags |= nn) : w.push(d);
      }
      return t.child = v, v;
    }
    function iO(e, t, a, i, l) {
      var d = t.mode, v = e.child, w = v.sibling, b = {
        mode: "hidden",
        children: a
      }, R;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (d & rt) === ct && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== v
      ) {
        var T = t.child;
        R = T, R.childLanes = ie, R.pendingProps = b, t.mode & en && (R.actualDuration = 0, R.actualStartTime = -1, R.selfBaseDuration = v.selfBaseDuration, R.treeBaseDuration = v.treeBaseDuration), t.deletions = null;
      } else
        R = _x(v, b), R.subtreeFlags = v.subtreeFlags & Br;
      var H;
      return w !== null ? H = zc(w, i) : (H = ps(i, d, l, null), H.flags |= bn), H.return = t, R.return = t, R.sibling = H, t.child = R, H;
    }
    function Sy(e, t, a, i) {
      i !== null && k0(i), ld(t, e.child, null, a);
      var l = t.pendingProps, d = l.children, v = WS(t, d);
      return v.flags |= bn, t.memoizedState = null, v;
    }
    function oO(e, t, a, i, l) {
      var d = t.mode, v = {
        mode: "visible",
        children: a
      }, w = qS(v, d), b = ps(i, d, l, null);
      return b.flags |= bn, w.return = t, b.return = t, w.sibling = b, t.child = w, (t.mode & rt) !== ct && ld(t, e.child, null, l), b;
    }
    function lO(e, t, a) {
      return (e.mode & rt) === ct ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = pt) : f0(t) ? e.lanes = nr : e.lanes = Pa, null;
    }
    function uO(e, t, a, i, l, d, v) {
      if (a)
        if (t.flags & ra) {
          t.flags &= ~ra;
          var W = NS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Sy(e, t, v, W);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= xt, null;
          var ae = i.children, q = i.fallback, xe = oO(e, t, ae, q, v), $e = t.child;
          return $e.memoizedState = YS(v), t.memoizedState = IS, xe;
        }
      else {
        if (Kk(), (t.mode & rt) === ct)
          return Sy(
            e,
            t,
            v,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (f0(l)) {
          var w, b, R;
          {
            var T = pk(l);
            w = T.digest, b = T.message, R = T.stack;
          }
          var H;
          b ? H = new Error(b) : H = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var F = NS(H, w, R);
          return Sy(e, t, v, F);
        }
        var X = Ta(v, e.childLanes);
        if (Co || X) {
          var Z = Dy();
          if (Z !== null) {
            var re = Yv(Z, v);
            if (re !== cr && re !== d.retryLane) {
              d.retryLane = re;
              var He = _n;
              ui(e, re), Xr(Z, e, re, He);
            }
          }
          hw();
          var ft = NS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Sy(e, t, v, ft);
        } else if (KE(l)) {
          t.flags |= xt, t.child = e.child;
          var at = ND.bind(null, e);
          return hk(l, at), null;
        } else {
          Jk(t, l, d.treeContext);
          var Qt = i.children, Bt = WS(t, Qt);
          return Bt.flags |= Li, Bt;
        }
      }
    }
    function Ox(e, t, a) {
      e.lanes = Ot(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ot(i.lanes, t)), L0(e.return, t, a);
    }
    function sO(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === be) {
          var l = i.memoizedState;
          l !== null && Ox(i, a, e);
        } else if (i.tag === ee)
          Ox(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function cO(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Zm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function fO(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !HS[e])
        if (HS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              g('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          g('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function dO(e, t) {
      e !== void 0 && !gy[e] && (e !== "collapsed" && e !== "hidden" ? (gy[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (gy[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function Dx(e, t) {
      {
        var a = Xt(e), i = !a && typeof Ya(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function pO(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Xt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!Dx(e[a], a))
              return;
        } else {
          var i = Ya(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var d = l.next(), v = 0; !d.done; d = l.next()) {
                if (!Dx(d.value, v))
                  return;
                v++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function QS(e, t, a, i, l) {
      var d = e.memoizedState;
      d === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: l
      } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = i, d.tail = a, d.tailMode = l);
    }
    function Ax(e, t, a) {
      var i = t.pendingProps, l = i.revealOrder, d = i.tail, v = i.children;
      fO(l), dO(d, l), pO(v, l), Ha(e, t, v, a);
      var w = bo.current, b = aS(w, nh);
      if (b)
        w = iS(w, nh), t.flags |= xt;
      else {
        var R = e !== null && (e.flags & xt) !== st;
        R && sO(t, t.child, a), w = sd(w);
      }
      if (is(t, w), (t.mode & rt) === ct)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var T = cO(t.child), H;
            T === null ? (H = t.child, t.child = null) : (H = T.sibling, T.sibling = null), QS(
              t,
              !1,
              // isBackwards
              H,
              T,
              d
            );
            break;
          }
          case "backwards": {
            var F = null, X = t.child;
            for (t.child = null; X !== null; ) {
              var Z = X.alternate;
              if (Z !== null && Zm(Z) === null) {
                t.child = X;
                break;
              }
              var re = X.sibling;
              X.sibling = F, F = X, X = re;
            }
            QS(
              t,
              !0,
              // isBackwards
              F,
              null,
              // last
              d
            );
            break;
          }
          case "together": {
            QS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function hO(e, t, a) {
      tS(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = ld(t, null, i, a) : Ha(e, t, i, a), t.child;
    }
    var Lx = !1;
    function vO(e, t, a) {
      var i = t.type, l = i._context, d = t.pendingProps, v = t.memoizedProps, w = d.value;
      {
        "value" in d || Lx || (Lx = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var b = t.type.propTypes;
        b && go(b, d, "prop", "Context.Provider");
      }
      if (Sb(t, l, w), v !== null) {
        var R = v.value;
        if (Ge(R, w)) {
          if (v.children === d.children && !_m())
            return ru(e, t, a);
        } else
          s_(t, l, a);
      }
      var T = d.children;
      return Ha(e, t, T, a), t.child;
    }
    var Nx = !1;
    function mO(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (Nx || (Nx = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, d = l.children;
      typeof d != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), od(t, a);
      var v = Ur(i);
      Tu(t);
      var w;
      return ch.current = t, Hr(!0), w = d(v), Hr(!1), zl(), t.flags |= wi, Ha(e, t, w, a), t.child;
    }
    function dh() {
      Co = !0;
    }
    function wy(e, t) {
      (t.mode & rt) === ct && e !== null && (e.alternate = null, t.alternate = null, t.flags |= bn);
    }
    function ru(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), hx(), Ch(t.lanes), Ta(a, t.childLanes) ? (E_(e, t), t.child) : null;
    }
    function yO(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var l = i.child;
          if (l === null)
            throw new Error("Expected parent to have a child.");
          for (; l.sibling !== t; )
            if (l = l.sibling, l === null)
              throw new Error("Expected to find the previous sibling.");
          l.sibling = a;
        }
        var d = i.deletions;
        return d === null ? (i.deletions = [e], i.flags |= nn) : d.push(e), a.flags |= bn, a;
      }
    }
    function GS(e, t) {
      var a = e.lanes;
      return !!Ta(a, t);
    }
    function gO(e, t, a) {
      switch (t.tag) {
        case U:
          Rx(t), t.stateNode, ad();
          break;
        case j:
          jb(t);
          break;
        case O: {
          var i = t.type;
          il(i) && Dm(t);
          break;
        }
        case V:
          tS(t, t.stateNode.containerInfo);
          break;
        case we: {
          var l = t.memoizedProps.value, d = t.type._context;
          Sb(t, d, l);
          break;
        }
        case Ie:
          {
            var v = Ta(a, t.childLanes);
            v && (t.flags |= tt);
            {
              var w = t.stateNode;
              w.effectDuration = 0, w.passiveEffectDuration = 0;
            }
          }
          break;
        case be: {
          var b = t.memoizedState;
          if (b !== null) {
            if (b.dehydrated !== null)
              return is(t, sd(bo.current)), t.flags |= xt, null;
            var R = t.child, T = R.childLanes;
            if (Ta(a, T))
              return kx(e, t, a);
            is(t, sd(bo.current));
            var H = ru(e, t, a);
            return H !== null ? H.sibling : null;
          } else
            is(t, sd(bo.current));
          break;
        }
        case ee: {
          var F = (e.flags & xt) !== st, X = Ta(a, t.childLanes);
          if (F) {
            if (X)
              return Ax(e, t, a);
            t.flags |= xt;
          }
          var Z = t.memoizedState;
          if (Z !== null && (Z.rendering = null, Z.tail = null, Z.lastEffect = null), is(t, bo.current), X)
            break;
          return null;
        }
        case ne:
        case me:
          return t.lanes = ie, bx(e, t, a);
      }
      return ru(e, t, a);
    }
    function Mx(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return yO(e, t, Rw(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || _m() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Co = !0;
        else {
          var d = GS(e, a);
          if (!d && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & xt) === st)
            return Co = !1, gO(e, t, a);
          (e.flags & ef) !== st ? Co = !0 : Co = !1;
        }
      } else if (Co = !1, oa() && Ik(t)) {
        var v = t.index, w = Yk();
        lb(t, w, v);
      }
      switch (t.lanes = ie, t.tag) {
        case A:
          return J_(e, t, t.type, a);
        case Ut: {
          var b = t.elementType;
          return X_(e, t, b, a);
        }
        case L: {
          var R = t.type, T = t.pendingProps, H = t.elementType === R ? T : Eo(R, T);
          return $S(e, t, R, H, a);
        }
        case O: {
          var F = t.type, X = t.pendingProps, Z = t.elementType === F ? X : Eo(F, X);
          return Cx(e, t, F, Z, a);
        }
        case U:
          return Q_(e, t, a);
        case j:
          return G_(e, t, a);
        case $:
          return K_(e, t);
        case be:
          return kx(e, t, a);
        case V:
          return hO(e, t, a);
        case ge: {
          var re = t.type, He = t.pendingProps, ft = t.elementType === re ? He : Eo(re, He);
          return Sx(e, t, re, ft, a);
        }
        case se:
          return Y_(e, t, a);
        case Ce:
          return W_(e, t, a);
        case Ie:
          return q_(e, t, a);
        case we:
          return vO(e, t, a);
        case Ae:
          return mO(e, t, a);
        case De: {
          var at = t.type, Qt = t.pendingProps, Bt = Eo(at, Qt);
          if (t.type !== t.elementType) {
            var W = at.propTypes;
            W && go(
              W,
              Bt,
              // Resolved for outer only
              "prop",
              Kt(at)
            );
          }
          return Bt = Eo(at.type, Bt), wx(e, t, at, Bt, a);
        }
        case We:
          return Ex(e, t, t.type, t.pendingProps, a);
        case Dt: {
          var ae = t.type, q = t.pendingProps, xe = t.elementType === ae ? q : Eo(ae, q);
          return Z_(e, t, ae, xe, a);
        }
        case ee:
          return Ax(e, t, a);
        case pe:
          break;
        case ne:
          return bx(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function vd(e) {
      e.flags |= tt;
    }
    function zx(e) {
      e.flags |= za, e.flags |= Ni;
    }
    var Ux, KS, Fx, jx;
    Ux = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === j || l.tag === $)
          $T(e, l.stateNode);
        else if (l.tag !== V) {
          if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
        }
        if (l === t)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            return;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }, KS = function(e, t) {
    }, Fx = function(e, t, a, i, l) {
      var d = e.memoizedProps;
      if (d !== i) {
        var v = t.stateNode, w = nS(), b = VT(v, a, d, i, l, w);
        t.updateQueue = b, b && vd(t);
      }
    }, jx = function(e, t, a, i) {
      a !== i && vd(t);
    };
    function ph(e, t) {
      if (!oa())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var l = e.tail, d = null; l !== null; )
              l.alternate !== null && (d = l), l = l.sibling;
            d === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : d.sibling = null;
            break;
          }
        }
    }
    function ua(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = ie, i = st;
      if (t) {
        if ((e.mode & en) !== ct) {
          for (var b = e.selfBaseDuration, R = e.child; R !== null; )
            a = Ot(a, Ot(R.lanes, R.childLanes)), i |= R.subtreeFlags & Br, i |= R.flags & Br, b += R.treeBaseDuration, R = R.sibling;
          e.treeBaseDuration = b;
        } else
          for (var T = e.child; T !== null; )
            a = Ot(a, Ot(T.lanes, T.childLanes)), i |= T.subtreeFlags & Br, i |= T.flags & Br, T.return = e, T = T.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & en) !== ct) {
          for (var l = e.actualDuration, d = e.selfBaseDuration, v = e.child; v !== null; )
            a = Ot(a, Ot(v.lanes, v.childLanes)), i |= v.subtreeFlags, i |= v.flags, l += v.actualDuration, d += v.treeBaseDuration, v = v.sibling;
          e.actualDuration = l, e.treeBaseDuration = d;
        } else
          for (var w = e.child; w !== null; )
            a = Ot(a, Ot(w.lanes, w.childLanes)), i |= w.subtreeFlags, i |= w.flags, w.return = e, w = w.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function SO(e, t, a) {
      if (a_() && (t.mode & rt) !== ct && (t.flags & xt) === st)
        return hb(t), ad(), t.flags |= ra | Vo | $r, !1;
      var i = zm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (n_(t), ua(t), (t.mode & en) !== ct) {
            var l = a !== null;
            if (l) {
              var d = t.child;
              d !== null && (t.treeBaseDuration -= d.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (ad(), (t.flags & xt) === st && (t.memoizedState = null), t.flags |= tt, ua(t), (t.mode & en) !== ct) {
            var v = a !== null;
            if (v) {
              var w = t.child;
              w !== null && (t.treeBaseDuration -= w.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return vb(), !0;
    }
    function Px(e, t, a) {
      var i = t.pendingProps;
      switch (b0(t), t.tag) {
        case A:
        case Ut:
        case We:
        case L:
        case ge:
        case se:
        case Ce:
        case Ie:
        case Ae:
        case De:
          return ua(t), null;
        case O: {
          var l = t.type;
          return il(l) && Om(t), ua(t), null;
        }
        case U: {
          var d = t.stateNode;
          if (ud(t), g0(t), lS(), d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null), e === null || e.child === null) {
            var v = zm(t);
            if (v)
              vd(t);
            else if (e !== null) {
              var w = e.memoizedState;
              // Check if this is a client root
              (!w.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & ra) !== st) && (t.flags |= gr, vb());
            }
          }
          return KS(e, t), ua(t), null;
        }
        case j: {
          rS(t);
          var b = Fb(), R = t.type;
          if (e !== null && t.stateNode != null)
            Fx(e, t, R, i, b), e.ref !== t.ref && zx(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return ua(t), null;
            }
            var T = nS(), H = zm(t);
            if (H)
              e_(t, b, T) && vd(t);
            else {
              var F = HT(R, i, b, T, t);
              Ux(F, t, !1, !1), t.stateNode = F, BT(F, R, i, b) && vd(t);
            }
            t.ref !== null && zx(t);
          }
          return ua(t), null;
        }
        case $: {
          var X = i;
          if (e && t.stateNode != null) {
            var Z = e.memoizedProps;
            jx(e, t, Z, X);
          } else {
            if (typeof X != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var re = Fb(), He = nS(), ft = zm(t);
            ft ? t_(t) && vd(t) : t.stateNode = IT(X, re, He, t);
          }
          return ua(t), null;
        }
        case be: {
          cd(t);
          var at = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Qt = SO(e, t, at);
            if (!Qt)
              return t.flags & $r ? t : null;
          }
          if ((t.flags & xt) !== st)
            return t.lanes = a, (t.mode & en) !== ct && LS(t), t;
          var Bt = at !== null, W = e !== null && e.memoizedState !== null;
          if (Bt !== W && Bt) {
            var ae = t.child;
            if (ae.flags |= Bo, (t.mode & rt) !== ct) {
              var q = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !fe);
              q || aS(bo.current, Hb) ? wD() : hw();
            }
          }
          var xe = t.updateQueue;
          if (xe !== null && (t.flags |= tt), ua(t), (t.mode & en) !== ct && Bt) {
            var $e = t.child;
            $e !== null && (t.treeBaseDuration -= $e.treeBaseDuration);
          }
          return null;
        }
        case V:
          return ud(t), KS(e, t), e === null && Fk(t.stateNode.containerInfo), ua(t), null;
        case we:
          var ze = t.type._context;
          return A0(ze, t), ua(t), null;
        case Dt: {
          var St = t.type;
          return il(St) && Om(t), ua(t), null;
        }
        case ee: {
          cd(t);
          var kt = t.memoizedState;
          if (kt === null)
            return ua(t), null;
          var Sn = (t.flags & xt) !== st, an = kt.rendering;
          if (an === null)
            if (Sn)
              ph(kt, !1);
            else {
              var _r = bD() && (e === null || (e.flags & xt) === st);
              if (!_r)
                for (var on = t.child; on !== null; ) {
                  var wr = Zm(on);
                  if (wr !== null) {
                    Sn = !0, t.flags |= xt, ph(kt, !1);
                    var Aa = wr.updateQueue;
                    return Aa !== null && (t.updateQueue = Aa, t.flags |= tt), t.subtreeFlags = st, b_(t, a), is(t, iS(bo.current, nh)), t.child;
                  }
                  on = on.sibling;
                }
              kt.tail !== null && Sr() > o1() && (t.flags |= xt, Sn = !0, ph(kt, !1), t.lanes = fp);
            }
          else {
            if (!Sn) {
              var pa = Zm(an);
              if (pa !== null) {
                t.flags |= xt, Sn = !0;
                var Ci = pa.updateQueue;
                if (Ci !== null && (t.updateQueue = Ci, t.flags |= tt), ph(kt, !0), kt.tail === null && kt.tailMode === "hidden" && !an.alternate && !oa())
                  return ua(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Sr() * 2 - kt.renderingStartTime > o1() && a !== Pa && (t.flags |= xt, Sn = !0, ph(kt, !1), t.lanes = fp);
            }
            if (kt.isBackwards)
              an.sibling = t.child, t.child = an;
            else {
              var Va = kt.last;
              Va !== null ? Va.sibling = an : t.child = an, kt.last = an;
            }
          }
          if (kt.tail !== null) {
            var Ia = kt.tail;
            kt.rendering = Ia, kt.tail = Ia.sibling, kt.renderingStartTime = Sr(), Ia.sibling = null;
            var La = bo.current;
            return Sn ? La = iS(La, nh) : La = sd(La), is(t, La), Ia;
          }
          return ua(t), null;
        }
        case pe:
          break;
        case ne:
        case me: {
          pw(t);
          var uu = t.memoizedState, xd = uu !== null;
          if (e !== null) {
            var Oh = e.memoizedState, pl = Oh !== null;
            pl !== xd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !K && (t.flags |= Bo);
          }
          return !xd || (t.mode & rt) === ct ? ua(t) : Ta(dl, Pa) && (ua(t), t.subtreeFlags & (bn | tt) && (t.flags |= Bo)), null;
        }
        case Se:
          return null;
        case he:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function wO(e, t, a) {
      switch (b0(t), t.tag) {
        case O: {
          var i = t.type;
          il(i) && Om(t);
          var l = t.flags;
          return l & $r ? (t.flags = l & ~$r | xt, (t.mode & en) !== ct && LS(t), t) : null;
        }
        case U: {
          t.stateNode, ud(t), g0(t), lS();
          var d = t.flags;
          return (d & $r) !== st && (d & xt) === st ? (t.flags = d & ~$r | xt, t) : null;
        }
        case j:
          return rS(t), null;
        case be: {
          cd(t);
          var v = t.memoizedState;
          if (v !== null && v.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            ad();
          }
          var w = t.flags;
          return w & $r ? (t.flags = w & ~$r | xt, (t.mode & en) !== ct && LS(t), t) : null;
        }
        case ee:
          return cd(t), null;
        case V:
          return ud(t), null;
        case we:
          var b = t.type._context;
          return A0(b, t), null;
        case ne:
        case me:
          return pw(t), null;
        case Se:
          return null;
        default:
          return null;
      }
    }
    function Hx(e, t, a) {
      switch (b0(t), t.tag) {
        case O: {
          var i = t.type.childContextTypes;
          i != null && Om(t);
          break;
        }
        case U: {
          t.stateNode, ud(t), g0(t), lS();
          break;
        }
        case j: {
          rS(t);
          break;
        }
        case V:
          ud(t);
          break;
        case be:
          cd(t);
          break;
        case ee:
          cd(t);
          break;
        case we:
          var l = t.type._context;
          A0(l, t);
          break;
        case ne:
        case me:
          pw(t);
          break;
      }
    }
    var $x = null;
    $x = /* @__PURE__ */ new Set();
    var Ey = !1, sa = !1, EO = typeof WeakSet == "function" ? WeakSet : Set, Ke = null, md = null, yd = null;
    function bO(e) {
      Si(null, function() {
        throw e;
      }), so();
    }
    var xO = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & en)
        try {
          cl(), t.componentWillUnmount();
        } finally {
          sl(e);
        }
      else
        t.componentWillUnmount();
    };
    function Bx(e, t) {
      try {
        us(Yr, e);
      } catch (a) {
        jn(e, t, a);
      }
    }
    function XS(e, t, a) {
      try {
        xO(e, a);
      } catch (i) {
        jn(e, t, i);
      }
    }
    function CO(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        jn(e, t, i);
      }
    }
    function Vx(e, t) {
      try {
        Yx(e);
      } catch (a) {
        jn(e, t, a);
      }
    }
    function gd(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (dt && ut && e.mode & en)
              try {
                cl(), i = a(null);
              } finally {
                sl(e);
              }
            else
              i = a(null);
          } catch (l) {
            jn(e, t, l);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", bt(e));
        } else
          a.current = null;
    }
    function by(e, t, a) {
      try {
        a();
      } catch (i) {
        jn(e, t, i);
      }
    }
    var Ix = !1;
    function RO(e, t) {
      jT(e.containerInfo), Ke = t, TO();
      var a = Ix;
      return Ix = !1, a;
    }
    function TO() {
      for (; Ke !== null; ) {
        var e = Ke, t = e.child;
        (e.subtreeFlags & Sa) !== st && t !== null ? (t.return = e, Ke = t) : kO();
      }
    }
    function kO() {
      for (; Ke !== null; ) {
        var e = Ke;
        Qn(e);
        try {
          _O(e);
        } catch (a) {
          jn(e, e.return, a);
        }
        Mn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ke = t;
          return;
        }
        Ke = e.return;
      }
    }
    function _O(e) {
      var t = e.alternate, a = e.flags;
      if ((a & gr) !== st) {
        switch (Qn(e), e.tag) {
          case L:
          case ge:
          case We:
            break;
          case O: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, d = e.stateNode;
              e.type === e.elementType && !Dc && (d.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", bt(e) || "instance"), d.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", bt(e) || "instance"));
              var v = d.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Eo(e.type, i), l);
              {
                var w = $x;
                v === void 0 && !w.has(e.type) && (w.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", bt(e)));
              }
              d.__reactInternalSnapshotBeforeUpdate = v;
            }
            break;
          }
          case U: {
            {
              var b = e.stateNode;
              sk(b.containerInfo);
            }
            break;
          }
          case j:
          case $:
          case V:
          case Dt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Mn();
      }
    }
    function Ro(e, t, a) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var d = l.next, v = d;
        do {
          if ((v.tag & e) === e) {
            var w = v.destroy;
            v.destroy = void 0, w !== void 0 && ((e & la) !== si ? Av(t) : (e & Yr) !== si && ku(t), (e & ol) !== si && Th(!0), by(t, a, w), (e & ol) !== si && Th(!1), (e & la) !== si ? Lv() : (e & Yr) !== si && Qs());
          }
          v = v.next;
        } while (v !== d);
      }
    }
    function us(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next, d = l;
        do {
          if ((d.tag & e) === e) {
            (e & la) !== si ? lp(t) : (e & Yr) !== si && Nv(t);
            var v = d.create;
            (e & ol) !== si && Th(!0), d.destroy = v(), (e & ol) !== si && Th(!1), (e & la) !== si ? lf() : (e & Yr) !== si && up();
            {
              var w = d.destroy;
              if (w !== void 0 && typeof w != "function") {
                var b = void 0;
                (d.tag & Yr) !== st ? b = "useLayoutEffect" : (d.tag & ol) !== st ? b = "useInsertionEffect" : b = "useEffect";
                var R = void 0;
                w === null ? R = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof w.then == "function" ? R = `

It looks like you wrote ` + b + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + b + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : R = " You returned: " + w, g("%s must not return anything besides a function, which is used for clean-up.%s", b, R);
              }
            }
          }
          d = d.next;
        } while (d !== l);
      }
    }
    function OO(e, t) {
      if ((t.flags & tt) !== st)
        switch (t.tag) {
          case Ie: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, d = i.onPostCommit, v = dx(), w = t.alternate === null ? "mount" : "update";
            fx() && (w = "nested-update"), typeof d == "function" && d(l, w, a, v);
            var b = t.return;
            e: for (; b !== null; ) {
              switch (b.tag) {
                case U:
                  var R = b.stateNode;
                  R.passiveEffectDuration += a;
                  break e;
                case Ie:
                  var T = b.stateNode;
                  T.passiveEffectDuration += a;
                  break e;
              }
              b = b.return;
            }
            break;
          }
        }
    }
    function DO(e, t, a, i) {
      if ((a.flags & Ei) !== st)
        switch (a.tag) {
          case L:
          case ge:
          case We: {
            if (!sa)
              if (a.mode & en)
                try {
                  cl(), us(Yr | Ir, a);
                } finally {
                  sl(a);
                }
              else
                us(Yr | Ir, a);
            break;
          }
          case O: {
            var l = a.stateNode;
            if (a.flags & tt && !sa)
              if (t === null)
                if (a.type === a.elementType && !Dc && (l.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", bt(a) || "instance"), l.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", bt(a) || "instance")), a.mode & en)
                  try {
                    cl(), l.componentDidMount();
                  } finally {
                    sl(a);
                  }
                else
                  l.componentDidMount();
              else {
                var d = a.elementType === a.type ? t.memoizedProps : Eo(a.type, t.memoizedProps), v = t.memoizedState;
                if (a.type === a.elementType && !Dc && (l.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", bt(a) || "instance"), l.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", bt(a) || "instance")), a.mode & en)
                  try {
                    cl(), l.componentDidUpdate(d, v, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    sl(a);
                  }
                else
                  l.componentDidUpdate(d, v, l.__reactInternalSnapshotBeforeUpdate);
              }
            var w = a.updateQueue;
            w !== null && (a.type === a.elementType && !Dc && (l.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", bt(a) || "instance"), l.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", bt(a) || "instance")), Rb(a, w, l));
            break;
          }
          case U: {
            var b = a.updateQueue;
            if (b !== null) {
              var R = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case j:
                    R = a.child.stateNode;
                    break;
                  case O:
                    R = a.child.stateNode;
                    break;
                }
              Rb(a, b, R);
            }
            break;
          }
          case j: {
            var T = a.stateNode;
            if (t === null && a.flags & tt) {
              var H = a.type, F = a.memoizedProps;
              GT(T, H, F);
            }
            break;
          }
          case $:
            break;
          case V:
            break;
          case Ie: {
            {
              var X = a.memoizedProps, Z = X.onCommit, re = X.onRender, He = a.stateNode.effectDuration, ft = dx(), at = t === null ? "mount" : "update";
              fx() && (at = "nested-update"), typeof re == "function" && re(a.memoizedProps.id, at, a.actualDuration, a.treeBaseDuration, a.actualStartTime, ft);
              {
                typeof Z == "function" && Z(a.memoizedProps.id, at, He, ft), kD(a);
                var Qt = a.return;
                e: for (; Qt !== null; ) {
                  switch (Qt.tag) {
                    case U:
                      var Bt = Qt.stateNode;
                      Bt.effectDuration += He;
                      break e;
                    case Ie:
                      var W = Qt.stateNode;
                      W.effectDuration += He;
                      break e;
                  }
                  Qt = Qt.return;
                }
              }
            }
            break;
          }
          case be: {
            jO(e, a);
            break;
          }
          case ee:
          case Dt:
          case pe:
          case ne:
          case me:
          case he:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      sa || a.flags & za && Yx(a);
    }
    function AO(e) {
      switch (e.tag) {
        case L:
        case ge:
        case We: {
          if (e.mode & en)
            try {
              cl(), Bx(e, e.return);
            } finally {
              sl(e);
            }
          else
            Bx(e, e.return);
          break;
        }
        case O: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && CO(e, e.return, t), Vx(e, e.return);
          break;
        }
        case j: {
          Vx(e, e.return);
          break;
        }
      }
    }
    function LO(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === j) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? ik(l) : lk(i.stateNode, i.memoizedProps);
            } catch (v) {
              jn(e, e.return, v);
            }
          }
        } else if (i.tag === $) {
          if (a === null)
            try {
              var d = i.stateNode;
              t ? ok(d) : uk(d, i.memoizedProps);
            } catch (v) {
              jn(e, e.return, v);
            }
        } else if (!((i.tag === ne || i.tag === me) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Yx(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case j:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var l;
          if (e.mode & en)
            try {
              cl(), l = t(i);
            } finally {
              sl(e);
            }
          else
            l = t(i);
          typeof l == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", bt(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", bt(e)), t.current = i;
      }
    }
    function NO(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function Wx(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Wx(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === j) {
          var a = e.stateNode;
          a !== null && Hk(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function MO(e) {
      for (var t = e.return; t !== null; ) {
        if (qx(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function qx(e) {
      return e.tag === j || e.tag === U || e.tag === V;
    }
    function Qx(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || qx(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== j && t.tag !== $ && t.tag !== B; ) {
          if (t.flags & bn || t.child === null || t.tag === V)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & bn))
          return t.stateNode;
      }
    }
    function zO(e) {
      var t = MO(e);
      switch (t.tag) {
        case j: {
          var a = t.stateNode;
          t.flags & Ka && (GE(a), t.flags &= ~Ka);
          var i = Qx(e);
          JS(e, i, a);
          break;
        }
        case U:
        case V: {
          var l = t.stateNode.containerInfo, d = Qx(e);
          ZS(e, d, l);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function ZS(e, t, a) {
      var i = e.tag, l = i === j || i === $;
      if (l) {
        var d = e.stateNode;
        t ? tk(a, d, t) : JT(a, d);
      } else if (i !== V) {
        var v = e.child;
        if (v !== null) {
          ZS(v, t, a);
          for (var w = v.sibling; w !== null; )
            ZS(w, t, a), w = w.sibling;
        }
      }
    }
    function JS(e, t, a) {
      var i = e.tag, l = i === j || i === $;
      if (l) {
        var d = e.stateNode;
        t ? ek(a, d, t) : ZT(a, d);
      } else if (i !== V) {
        var v = e.child;
        if (v !== null) {
          JS(v, t, a);
          for (var w = v.sibling; w !== null; )
            JS(w, t, a), w = w.sibling;
        }
      }
    }
    var ca = null, To = !1;
    function UO(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case j: {
              ca = i.stateNode, To = !1;
              break e;
            }
            case U: {
              ca = i.stateNode.containerInfo, To = !0;
              break e;
            }
            case V: {
              ca = i.stateNode.containerInfo, To = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (ca === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        Gx(e, t, a), ca = null, To = !1;
      }
      NO(a);
    }
    function ss(e, t, a) {
      for (var i = a.child; i !== null; )
        Gx(e, t, i), i = i.sibling;
    }
    function Gx(e, t, a) {
      switch (Ov(a), a.tag) {
        case j:
          sa || gd(a, t);
        case $: {
          {
            var i = ca, l = To;
            ca = null, ss(e, t, a), ca = i, To = l, ca !== null && (To ? rk(ca, a.stateNode) : nk(ca, a.stateNode));
          }
          return;
        }
        case B: {
          ca !== null && (To ? ak(ca, a.stateNode) : c0(ca, a.stateNode));
          return;
        }
        case V: {
          {
            var d = ca, v = To;
            ca = a.stateNode.containerInfo, To = !0, ss(e, t, a), ca = d, To = v;
          }
          return;
        }
        case L:
        case ge:
        case De:
        case We: {
          if (!sa) {
            var w = a.updateQueue;
            if (w !== null) {
              var b = w.lastEffect;
              if (b !== null) {
                var R = b.next, T = R;
                do {
                  var H = T, F = H.destroy, X = H.tag;
                  F !== void 0 && ((X & ol) !== si ? by(a, t, F) : (X & Yr) !== si && (ku(a), a.mode & en ? (cl(), by(a, t, F), sl(a)) : by(a, t, F), Qs())), T = T.next;
                } while (T !== R);
              }
            }
          }
          ss(e, t, a);
          return;
        }
        case O: {
          if (!sa) {
            gd(a, t);
            var Z = a.stateNode;
            typeof Z.componentWillUnmount == "function" && XS(a, t, Z);
          }
          ss(e, t, a);
          return;
        }
        case pe: {
          ss(e, t, a);
          return;
        }
        case ne: {
          if (
            // TODO: Remove this dead flag
            a.mode & rt
          ) {
            var re = sa;
            sa = re || a.memoizedState !== null, ss(e, t, a), sa = re;
          } else
            ss(e, t, a);
          break;
        }
        default: {
          ss(e, t, a);
          return;
        }
      }
    }
    function FO(e) {
      e.memoizedState;
    }
    function jO(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var d = l.dehydrated;
            d !== null && xk(d);
          }
        }
      }
    }
    function Kx(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new EO()), t.forEach(function(i) {
          var l = MD.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), ja)
              if (md !== null && yd !== null)
                Rh(yd, md);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function PO(e, t, a) {
      md = a, yd = e, Qn(t), Xx(t, e), Qn(t), md = null, yd = null;
    }
    function ko(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var d = i[l];
          try {
            UO(e, t, d);
          } catch (b) {
            jn(d, t, b);
          }
        }
      var v = Ts();
      if (t.subtreeFlags & wa)
        for (var w = t.child; w !== null; )
          Qn(w), Xx(w, e), w = w.sibling;
      Qn(v);
    }
    function Xx(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case L:
        case ge:
        case De:
        case We: {
          if (ko(t, e), fl(e), l & tt) {
            try {
              Ro(ol | Ir, e, e.return), us(ol | Ir, e);
            } catch (St) {
              jn(e, e.return, St);
            }
            if (e.mode & en) {
              try {
                cl(), Ro(Yr | Ir, e, e.return);
              } catch (St) {
                jn(e, e.return, St);
              }
              sl(e);
            } else
              try {
                Ro(Yr | Ir, e, e.return);
              } catch (St) {
                jn(e, e.return, St);
              }
          }
          return;
        }
        case O: {
          ko(t, e), fl(e), l & za && i !== null && gd(i, i.return);
          return;
        }
        case j: {
          ko(t, e), fl(e), l & za && i !== null && gd(i, i.return);
          {
            if (e.flags & Ka) {
              var d = e.stateNode;
              try {
                GE(d);
              } catch (St) {
                jn(e, e.return, St);
              }
            }
            if (l & tt) {
              var v = e.stateNode;
              if (v != null) {
                var w = e.memoizedProps, b = i !== null ? i.memoizedProps : w, R = e.type, T = e.updateQueue;
                if (e.updateQueue = null, T !== null)
                  try {
                    KT(v, T, R, b, w, e);
                  } catch (St) {
                    jn(e, e.return, St);
                  }
              }
            }
          }
          return;
        }
        case $: {
          if (ko(t, e), fl(e), l & tt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var H = e.stateNode, F = e.memoizedProps, X = i !== null ? i.memoizedProps : F;
            try {
              XT(H, X, F);
            } catch (St) {
              jn(e, e.return, St);
            }
          }
          return;
        }
        case U: {
          if (ko(t, e), fl(e), l & tt && i !== null) {
            var Z = i.memoizedState;
            if (Z.isDehydrated)
              try {
                bk(t.containerInfo);
              } catch (St) {
                jn(e, e.return, St);
              }
          }
          return;
        }
        case V: {
          ko(t, e), fl(e);
          return;
        }
        case be: {
          ko(t, e), fl(e);
          var re = e.child;
          if (re.flags & Bo) {
            var He = re.stateNode, ft = re.memoizedState, at = ft !== null;
            if (He.isHidden = at, at) {
              var Qt = re.alternate !== null && re.alternate.memoizedState !== null;
              Qt || SD();
            }
          }
          if (l & tt) {
            try {
              FO(e);
            } catch (St) {
              jn(e, e.return, St);
            }
            Kx(e);
          }
          return;
        }
        case ne: {
          var Bt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & rt
          ) {
            var W = sa;
            sa = W || Bt, ko(t, e), sa = W;
          } else
            ko(t, e);
          if (fl(e), l & Bo) {
            var ae = e.stateNode, q = e.memoizedState, xe = q !== null, $e = e;
            if (ae.isHidden = xe, xe && !Bt && ($e.mode & rt) !== ct) {
              Ke = $e;
              for (var ze = $e.child; ze !== null; )
                Ke = ze, $O(ze), ze = ze.sibling;
            }
            LO($e, xe);
          }
          return;
        }
        case ee: {
          ko(t, e), fl(e), l & tt && Kx(e);
          return;
        }
        case pe:
          return;
        default: {
          ko(t, e), fl(e);
          return;
        }
      }
    }
    function fl(e) {
      var t = e.flags;
      if (t & bn) {
        try {
          zO(e);
        } catch (a) {
          jn(e, e.return, a);
        }
        e.flags &= ~bn;
      }
      t & Li && (e.flags &= ~Li);
    }
    function HO(e, t, a) {
      md = a, yd = t, Ke = e, Zx(e, t, a), md = null, yd = null;
    }
    function Zx(e, t, a) {
      for (var i = (e.mode & rt) !== ct; Ke !== null; ) {
        var l = Ke, d = l.child;
        if (l.tag === ne && i) {
          var v = l.memoizedState !== null, w = v || Ey;
          if (w) {
            ew(e, t, a);
            continue;
          } else {
            var b = l.alternate, R = b !== null && b.memoizedState !== null, T = R || sa, H = Ey, F = sa;
            Ey = w, sa = T, sa && !F && (Ke = l, BO(l));
            for (var X = d; X !== null; )
              Ke = X, Zx(
                X,
                // New root; bubble back up to here and stop.
                t,
                a
              ), X = X.sibling;
            Ke = l, Ey = H, sa = F, ew(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & Ei) !== st && d !== null ? (d.return = l, Ke = d) : ew(e, t, a);
      }
    }
    function ew(e, t, a) {
      for (; Ke !== null; ) {
        var i = Ke;
        if ((i.flags & Ei) !== st) {
          var l = i.alternate;
          Qn(i);
          try {
            DO(t, l, i, a);
          } catch (v) {
            jn(i, i.return, v);
          }
          Mn();
        }
        if (i === e) {
          Ke = null;
          return;
        }
        var d = i.sibling;
        if (d !== null) {
          d.return = i.return, Ke = d;
          return;
        }
        Ke = i.return;
      }
    }
    function $O(e) {
      for (; Ke !== null; ) {
        var t = Ke, a = t.child;
        switch (t.tag) {
          case L:
          case ge:
          case De:
          case We: {
            if (t.mode & en)
              try {
                cl(), Ro(Yr, t, t.return);
              } finally {
                sl(t);
              }
            else
              Ro(Yr, t, t.return);
            break;
          }
          case O: {
            gd(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && XS(t, t.return, i);
            break;
          }
          case j: {
            gd(t, t.return);
            break;
          }
          case ne: {
            var l = t.memoizedState !== null;
            if (l) {
              Jx(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ke = a) : Jx(e);
      }
    }
    function Jx(e) {
      for (; Ke !== null; ) {
        var t = Ke;
        if (t === e) {
          Ke = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ke = a;
          return;
        }
        Ke = t.return;
      }
    }
    function BO(e) {
      for (; Ke !== null; ) {
        var t = Ke, a = t.child;
        if (t.tag === ne) {
          var i = t.memoizedState !== null;
          if (i) {
            e1(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ke = a) : e1(e);
      }
    }
    function e1(e) {
      for (; Ke !== null; ) {
        var t = Ke;
        Qn(t);
        try {
          AO(t);
        } catch (i) {
          jn(t, t.return, i);
        }
        if (Mn(), t === e) {
          Ke = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ke = a;
          return;
        }
        Ke = t.return;
      }
    }
    function VO(e, t, a, i) {
      Ke = t, IO(t, e, a, i);
    }
    function IO(e, t, a, i) {
      for (; Ke !== null; ) {
        var l = Ke, d = l.child;
        (l.subtreeFlags & Ea) !== st && d !== null ? (d.return = l, Ke = d) : YO(e, t, a, i);
      }
    }
    function YO(e, t, a, i) {
      for (; Ke !== null; ) {
        var l = Ke;
        if ((l.flags & ga) !== st) {
          Qn(l);
          try {
            WO(t, l, a, i);
          } catch (v) {
            jn(l, l.return, v);
          }
          Mn();
        }
        if (l === e) {
          Ke = null;
          return;
        }
        var d = l.sibling;
        if (d !== null) {
          d.return = l.return, Ke = d;
          return;
        }
        Ke = l.return;
      }
    }
    function WO(e, t, a, i) {
      switch (t.tag) {
        case L:
        case ge:
        case We: {
          if (t.mode & en) {
            AS();
            try {
              us(la | Ir, t);
            } finally {
              DS(t);
            }
          } else
            us(la | Ir, t);
          break;
        }
      }
    }
    function qO(e) {
      Ke = e, QO();
    }
    function QO() {
      for (; Ke !== null; ) {
        var e = Ke, t = e.child;
        if ((Ke.flags & nn) !== st) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              Ke = l, XO(l, e);
            }
            {
              var d = e.alternate;
              if (d !== null) {
                var v = d.child;
                if (v !== null) {
                  d.child = null;
                  do {
                    var w = v.sibling;
                    v.sibling = null, v = w;
                  } while (v !== null);
                }
              }
            }
            Ke = e;
          }
        }
        (e.subtreeFlags & Ea) !== st && t !== null ? (t.return = e, Ke = t) : GO();
      }
    }
    function GO() {
      for (; Ke !== null; ) {
        var e = Ke;
        (e.flags & ga) !== st && (Qn(e), KO(e), Mn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ke = t;
          return;
        }
        Ke = e.return;
      }
    }
    function KO(e) {
      switch (e.tag) {
        case L:
        case ge:
        case We: {
          e.mode & en ? (AS(), Ro(la | Ir, e, e.return), DS(e)) : Ro(la | Ir, e, e.return);
          break;
        }
      }
    }
    function XO(e, t) {
      for (; Ke !== null; ) {
        var a = Ke;
        Qn(a), JO(a, t), Mn();
        var i = a.child;
        i !== null ? (i.return = a, Ke = i) : ZO(e);
      }
    }
    function ZO(e) {
      for (; Ke !== null; ) {
        var t = Ke, a = t.sibling, i = t.return;
        if (Wx(t), t === e) {
          Ke = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ke = a;
          return;
        }
        Ke = i;
      }
    }
    function JO(e, t) {
      switch (e.tag) {
        case L:
        case ge:
        case We: {
          e.mode & en ? (AS(), Ro(la, e, t), DS(e)) : Ro(la, e, t);
          break;
        }
      }
    }
    function eD(e) {
      switch (e.tag) {
        case L:
        case ge:
        case We: {
          try {
            us(Yr | Ir, e);
          } catch (a) {
            jn(e, e.return, a);
          }
          break;
        }
        case O: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            jn(e, e.return, a);
          }
          break;
        }
      }
    }
    function tD(e) {
      switch (e.tag) {
        case L:
        case ge:
        case We: {
          try {
            us(la | Ir, e);
          } catch (t) {
            jn(e, e.return, t);
          }
          break;
        }
      }
    }
    function nD(e) {
      switch (e.tag) {
        case L:
        case ge:
        case We: {
          try {
            Ro(Yr | Ir, e, e.return);
          } catch (a) {
            jn(e, e.return, a);
          }
          break;
        }
        case O: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && XS(e, e.return, t);
          break;
        }
      }
    }
    function rD(e) {
      switch (e.tag) {
        case L:
        case ge:
        case We:
          try {
            Ro(la | Ir, e, e.return);
          } catch (t) {
            jn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var hh = Symbol.for;
      hh("selector.component"), hh("selector.has_pseudo_class"), hh("selector.role"), hh("selector.test_id"), hh("selector.text");
    }
    var aD = [];
    function iD() {
      aD.forEach(function(e) {
        return e();
      });
    }
    var oD = p.ReactCurrentActQueue;
    function lD(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function t1() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && oD.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var uD = Math.ceil, tw = p.ReactCurrentDispatcher, nw = p.ReactCurrentOwner, fa = p.ReactCurrentBatchConfig, _o = p.ReactCurrentActQueue, Qr = (
      /*             */
      0
    ), n1 = (
      /*               */
      1
    ), da = (
      /*                */
      2
    ), Wi = (
      /*                */
      4
    ), au = 0, vh = 1, Ac = 2, xy = 3, mh = 4, r1 = 5, rw = 6, qt = Qr, $a = null, hr = null, Gr = ie, dl = ie, aw = Ju(ie), Kr = au, yh = null, Cy = ie, gh = ie, Ry = ie, Sh = null, ci = null, iw = 0, a1 = 500, i1 = 1 / 0, sD = 500, iu = null;
    function wh() {
      i1 = Sr() + sD;
    }
    function o1() {
      return i1;
    }
    var Ty = !1, ow = null, Sd = null, Lc = !1, cs = null, Eh = ie, lw = [], uw = null, cD = 50, bh = 0, sw = null, cw = !1, ky = !1, fD = 50, wd = 0, _y = null, xh = _n, Oy = ie, l1 = !1;
    function Dy() {
      return $a;
    }
    function Ba() {
      return (qt & (da | Wi)) !== Qr ? Sr() : (xh !== _n || (xh = Sr()), xh);
    }
    function fs(e) {
      var t = e.mode;
      if ((t & rt) === ct)
        return pt;
      if ((qt & da) !== Qr && Gr !== ie)
        return Mu(Gr);
      var a = l_() !== o_;
      if (a) {
        if (fa.transition !== null) {
          var i = fa.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Oy === cr && (Oy = Bv()), Oy;
      }
      var l = ni();
      if (l !== cr)
        return l;
      var d = YT();
      return d;
    }
    function dD(e) {
      var t = e.mode;
      return (t & rt) === ct ? pt : Ra();
    }
    function Xr(e, t, a, i) {
      UD(), l1 && g("useInsertionEffect must not schedule updates."), cw && (ky = !0), Il(e, a, i), (qt & da) !== ie && e === $a ? PD(t) : (ja && kf(e, t, a), HD(t), e === $a && ((qt & da) === Qr && (gh = Ot(gh, a)), Kr === mh && ds(e, Gr)), fi(e, i), a === pt && qt === Qr && (t.mode & rt) === ct && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !_o.isBatchingLegacy && (wh(), ob()));
    }
    function pD(e, t, a) {
      var i = e.current;
      i.lanes = t, Il(e, t, a), fi(e, a);
    }
    function hD(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (qt & da) !== Qr
      );
    }
    function fi(e, t) {
      var a = e.callbackNode;
      Og(e, t);
      var i = nc(e, e === $a ? Gr : ie);
      if (i === ie) {
        a !== null && x1(a), e.callbackNode = null, e.callbackPriority = cr;
        return;
      }
      var l = fr(i), d = e.callbackPriority;
      if (d === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(_o.current !== null && a !== yw)) {
        a == null && d !== pt && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && x1(a);
      var v;
      if (l === pt)
        e.tag === es ? (_o.isBatchingLegacy !== null && (_o.didScheduleLegacyUpdate = !0), Vk(c1.bind(null, e))) : ib(c1.bind(null, e)), _o.current !== null ? _o.current.push(ts) : qT(function() {
          (qt & (da | Wi)) === Qr && ts();
        }), v = null;
      else {
        var w;
        switch (Vr(i)) {
          case dr:
            w = ba;
            break;
          case ho:
            w = Cu;
            break;
          case Fi:
            w = Mi;
            break;
          case zu:
            w = Ws;
            break;
          default:
            w = Mi;
            break;
        }
        v = gw(w, u1.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = v;
    }
    function u1(e, t) {
      if (U_(), xh = _n, Oy = ie, (qt & (da | Wi)) !== Qr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = lu();
      if (i && e.callbackNode !== a)
        return null;
      var l = nc(e, e === $a ? Gr : ie);
      if (l === ie)
        return null;
      var d = !ac(e, l) && !$v(e, l) && !t, v = d ? CD(e, l) : Ly(e, l);
      if (v !== au) {
        if (v === Ac) {
          var w = Zo(e);
          w !== ie && (l = w, v = fw(e, w));
        }
        if (v === vh) {
          var b = yh;
          throw Nc(e, ie), ds(e, l), fi(e, Sr()), b;
        }
        if (v === rw)
          ds(e, l);
        else {
          var R = !ac(e, l), T = e.current.alternate;
          if (R && !mD(T)) {
            if (v = Ly(e, l), v === Ac) {
              var H = Zo(e);
              H !== ie && (l = H, v = fw(e, H));
            }
            if (v === vh) {
              var F = yh;
              throw Nc(e, ie), ds(e, l), fi(e, Sr()), F;
            }
          }
          e.finishedWork = T, e.finishedLanes = l, vD(e, v, l);
        }
      }
      return fi(e, Sr()), e.callbackNode === a ? u1.bind(null, e) : null;
    }
    function fw(e, t) {
      var a = Sh;
      if (_f(e)) {
        var i = Nc(e, t);
        i.flags |= ra, Uk(e.containerInfo);
      }
      var l = Ly(e, t);
      if (l !== Ac) {
        var d = ci;
        ci = a, d !== null && s1(d);
      }
      return l;
    }
    function s1(e) {
      ci === null ? ci = e : ci.push.apply(ci, e);
    }
    function vD(e, t, a) {
      switch (t) {
        case au:
        case vh:
          throw new Error("Root did not complete. This is a bug in React.");
        case Ac: {
          Mc(e, ci, iu);
          break;
        }
        case xy: {
          if (ds(e, a), jv(a) && // do not delay if we're inside an act() scope
          !C1()) {
            var i = iw + a1 - Sr();
            if (i > 10) {
              var l = nc(e, ie);
              if (l !== ie)
                break;
              var d = e.suspendedLanes;
              if (!Vl(d, a)) {
                Ba(), Rf(e, d);
                break;
              }
              e.timeoutHandle = u0(Mc.bind(null, e, ci, iu), i);
              break;
            }
          }
          Mc(e, ci, iu);
          break;
        }
        case mh: {
          if (ds(e, a), Hv(a))
            break;
          if (!C1()) {
            var v = bf(e, a), w = v, b = Sr() - w, R = zD(b) - b;
            if (R > 10) {
              e.timeoutHandle = u0(Mc.bind(null, e, ci, iu), R);
              break;
            }
          }
          Mc(e, ci, iu);
          break;
        }
        case r1: {
          Mc(e, ci, iu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function mD(e) {
      for (var t = e; ; ) {
        if (t.flags & Ll) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var d = i[l], v = d.getSnapshot, w = d.value;
                try {
                  if (!Ge(v(), w))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var b = t.child;
        if (t.subtreeFlags & Ll && b !== null) {
          b.return = t, t = b;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function ds(e, t) {
      t = ic(t, Ry), t = ic(t, gh), Iv(e, t);
    }
    function c1(e) {
      if (F_(), (qt & (da | Wi)) !== Qr)
        throw new Error("Should not already be working.");
      lu();
      var t = nc(e, ie);
      if (!Ta(t, pt))
        return fi(e, Sr()), null;
      var a = Ly(e, t);
      if (e.tag !== es && a === Ac) {
        var i = Zo(e);
        i !== ie && (t = i, a = fw(e, i));
      }
      if (a === vh) {
        var l = yh;
        throw Nc(e, ie), ds(e, t), fi(e, Sr()), l;
      }
      if (a === rw)
        throw new Error("Root did not complete. This is a bug in React.");
      var d = e.current.alternate;
      return e.finishedWork = d, e.finishedLanes = t, Mc(e, ci, iu), fi(e, Sr()), null;
    }
    function yD(e, t) {
      t !== ie && (vp(e, Ot(t, pt)), fi(e, Sr()), (qt & (da | Wi)) === Qr && (wh(), ts()));
    }
    function dw(e, t) {
      var a = qt;
      qt |= n1;
      try {
        return e(t);
      } finally {
        qt = a, qt === Qr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !_o.isBatchingLegacy && (wh(), ob());
      }
    }
    function gD(e, t, a, i, l) {
      var d = ni(), v = fa.transition;
      try {
        return fa.transition = null, rr(dr), e(t, a, i, l);
      } finally {
        rr(d), fa.transition = v, qt === Qr && wh();
      }
    }
    function ou(e) {
      cs !== null && cs.tag === es && (qt & (da | Wi)) === Qr && lu();
      var t = qt;
      qt |= n1;
      var a = fa.transition, i = ni();
      try {
        return fa.transition = null, rr(dr), e ? e() : void 0;
      } finally {
        rr(i), fa.transition = a, qt = t, (qt & (da | Wi)) === Qr && ts();
      }
    }
    function f1() {
      return (qt & (da | Wi)) !== Qr;
    }
    function Ay(e, t) {
      Oa(aw, dl, e), dl = Ot(dl, t);
    }
    function pw(e) {
      dl = aw.current, _a(aw, e);
    }
    function Nc(e, t) {
      e.finishedWork = null, e.finishedLanes = ie;
      var a = e.timeoutHandle;
      if (a !== s0 && (e.timeoutHandle = s0, WT(a)), hr !== null)
        for (var i = hr.return; i !== null; ) {
          var l = i.alternate;
          Hx(l, i), i = i.return;
        }
      $a = e;
      var d = zc(e.current, null);
      return hr = d, Gr = dl = t, Kr = au, yh = null, Cy = ie, gh = ie, Ry = ie, Sh = null, ci = null, f_(), wo.discardPendingWarnings(), d;
    }
    function d1(e, t) {
      do {
        var a = hr;
        try {
          if (Pm(), Bb(), Mn(), nw.current = null, a === null || a.return === null) {
            Kr = vh, yh = t, hr = null;
            return;
          }
          if (dt && a.mode & en && yy(a, !0), et)
            if (zl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              zv(a, i, Gr);
            } else
              Mv(a, t, Gr);
          B_(e, a.return, a, t, Gr), m1(a);
        } catch (l) {
          t = l, hr === a && a !== null ? (a = a.return, hr = a) : a = hr;
          continue;
        }
        return;
      } while (!0);
    }
    function p1() {
      var e = tw.current;
      return tw.current = dy, e === null ? dy : e;
    }
    function h1(e) {
      tw.current = e;
    }
    function SD() {
      iw = Sr();
    }
    function Ch(e) {
      Cy = Ot(e, Cy);
    }
    function wD() {
      Kr === au && (Kr = xy);
    }
    function hw() {
      (Kr === au || Kr === xy || Kr === Ac) && (Kr = mh), $a !== null && (rc(Cy) || rc(gh)) && ds($a, Gr);
    }
    function ED(e) {
      Kr !== mh && (Kr = Ac), Sh === null ? Sh = [e] : Sh.push(e);
    }
    function bD() {
      return Kr === au;
    }
    function Ly(e, t) {
      var a = qt;
      qt |= da;
      var i = p1();
      if ($a !== e || Gr !== t) {
        if (ja) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (Rh(e, Gr), l.clear()), mp(e, t);
        }
        iu = lc(), Nc(e, t);
      }
      Ou(t);
      do
        try {
          xD();
          break;
        } catch (d) {
          d1(e, d);
        }
      while (!0);
      if (Pm(), qt = a, h1(i), hr !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Go(), $a = null, Gr = ie, Kr;
    }
    function xD() {
      for (; hr !== null; )
        v1(hr);
    }
    function CD(e, t) {
      var a = qt;
      qt |= da;
      var i = p1();
      if ($a !== e || Gr !== t) {
        if (ja) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (Rh(e, Gr), l.clear()), mp(e, t);
        }
        iu = lc(), wh(), Nc(e, t);
      }
      Ou(t);
      do
        try {
          RD();
          break;
        } catch (d) {
          d1(e, d);
        }
      while (!0);
      return Pm(), h1(i), qt = a, hr !== null ? (Ks(), au) : (Go(), $a = null, Gr = ie, Kr);
    }
    function RD() {
      for (; hr !== null && !kv(); )
        v1(hr);
    }
    function v1(e) {
      var t = e.alternate;
      Qn(e);
      var a;
      (e.mode & en) !== ct ? (OS(e), a = vw(t, e, dl), yy(e, !0)) : a = vw(t, e, dl), Mn(), e.memoizedProps = e.pendingProps, a === null ? m1(e) : hr = a, nw.current = null;
    }
    function m1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Vo) === st) {
          Qn(t);
          var l = void 0;
          if ((t.mode & en) === ct ? l = Px(a, t, dl) : (OS(t), l = Px(a, t, dl), yy(t, !1)), Mn(), l !== null) {
            hr = l;
            return;
          }
        } else {
          var d = wO(a, t);
          if (d !== null) {
            d.flags &= co, hr = d;
            return;
          }
          if ((t.mode & en) !== ct) {
            yy(t, !1);
            for (var v = t.actualDuration, w = t.child; w !== null; )
              v += w.actualDuration, w = w.sibling;
            t.actualDuration = v;
          }
          if (i !== null)
            i.flags |= Vo, i.subtreeFlags = st, i.deletions = null;
          else {
            Kr = rw, hr = null;
            return;
          }
        }
        var b = t.sibling;
        if (b !== null) {
          hr = b;
          return;
        }
        t = i, hr = t;
      } while (t !== null);
      Kr === au && (Kr = r1);
    }
    function Mc(e, t, a) {
      var i = ni(), l = fa.transition;
      try {
        fa.transition = null, rr(dr), TD(e, t, a, i);
      } finally {
        fa.transition = l, rr(i);
      }
      return null;
    }
    function TD(e, t, a, i) {
      do
        lu();
      while (cs !== null);
      if (FD(), (qt & (da | Wi)) !== Qr)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, d = e.finishedLanes;
      if (Dv(d), l === null)
        return qs(), null;
      if (d === ie && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ie, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = cr;
      var v = Ot(l.lanes, l.childLanes);
      Tf(e, v), e === $a && ($a = null, hr = null, Gr = ie), ((l.subtreeFlags & Ea) !== st || (l.flags & Ea) !== st) && (Lc || (Lc = !0, uw = a, gw(Mi, function() {
        return lu(), null;
      })));
      var w = (l.subtreeFlags & (Sa | wa | Ei | Ea)) !== st, b = (l.flags & (Sa | wa | Ei | Ea)) !== st;
      if (w || b) {
        var R = fa.transition;
        fa.transition = null;
        var T = ni();
        rr(dr);
        var H = qt;
        qt |= Wi, nw.current = null, RO(e, l), px(), PO(e, l, d), PT(e.containerInfo), e.current = l, _u(d), HO(l, e, d), Uv(), xu(), qt = H, rr(T), fa.transition = R;
      } else
        e.current = l, px();
      var F = Lc;
      if (Lc ? (Lc = !1, cs = e, Eh = d) : (wd = 0, _y = null), v = e.pendingLanes, v === ie && (Sd = null), F || w1(e.current, !1), qo(l.stateNode, i), ja && e.memoizedUpdaters.clear(), iD(), fi(e, Sr()), t !== null)
        for (var X = e.onRecoverableError, Z = 0; Z < t.length; Z++) {
          var re = t[Z], He = re.stack, ft = re.digest;
          X(re.value, {
            componentStack: He,
            digest: ft
          });
        }
      if (Ty) {
        Ty = !1;
        var at = ow;
        throw ow = null, at;
      }
      return Ta(Eh, pt) && e.tag !== es && lu(), v = e.pendingLanes, Ta(v, pt) ? (z_(), e === sw ? bh++ : (bh = 0, sw = e)) : bh = 0, ts(), qs(), null;
    }
    function lu() {
      if (cs !== null) {
        var e = Vr(Eh), t = Ng(Fi, e), a = fa.transition, i = ni();
        try {
          return fa.transition = null, rr(t), _D();
        } finally {
          rr(i), fa.transition = a;
        }
      }
      return !1;
    }
    function kD(e) {
      lw.push(e), Lc || (Lc = !0, gw(Mi, function() {
        return lu(), null;
      }));
    }
    function _D() {
      if (cs === null)
        return !1;
      var e = uw;
      uw = null;
      var t = cs, a = Eh;
      if (cs = null, Eh = ie, (qt & (da | Wi)) !== Qr)
        throw new Error("Cannot flush passive effects while already rendering.");
      cw = !0, ky = !1, Gs(a);
      var i = qt;
      qt |= Wi, qO(t.current), VO(t, t.current, a, e);
      {
        var l = lw;
        lw = [];
        for (var d = 0; d < l.length; d++) {
          var v = l[d];
          OO(t, v);
        }
      }
      zi(), w1(t.current, !0), qt = i, ts(), ky ? t === _y ? wd++ : (wd = 0, _y = t) : wd = 0, cw = !1, ky = !1, op(t);
      {
        var w = t.current.stateNode;
        w.effectDuration = 0, w.passiveEffectDuration = 0;
      }
      return !0;
    }
    function y1(e) {
      return Sd !== null && Sd.has(e);
    }
    function OD(e) {
      Sd === null ? Sd = /* @__PURE__ */ new Set([e]) : Sd.add(e);
    }
    function DD(e) {
      Ty || (Ty = !0, ow = e);
    }
    var AD = DD;
    function g1(e, t, a) {
      var i = Oc(a, t), l = vx(e, i, pt), d = rs(e, l, pt), v = Ba();
      d !== null && (Il(d, pt, v), fi(d, v));
    }
    function jn(e, t, a) {
      if (bO(a), Th(!1), e.tag === U) {
        g1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === U) {
          g1(i, e, a);
          return;
        } else if (i.tag === O) {
          var l = i.type, d = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof d.componentDidCatch == "function" && !y1(d)) {
            var v = Oc(a, e), w = zS(i, v, pt), b = rs(i, w, pt), R = Ba();
            b !== null && (Il(b, pt, R), fi(b, R));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function LD(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = Ba();
      Rf(e, a), $D(e), $a === e && Vl(Gr, a) && (Kr === mh || Kr === xy && jv(Gr) && Sr() - iw < a1 ? Nc(e, ie) : Ry = Ot(Ry, a)), fi(e, l);
    }
    function S1(e, t) {
      t === cr && (t = dD(e));
      var a = Ba(), i = ui(e, t);
      i !== null && (Il(i, t, a), fi(i, a));
    }
    function ND(e) {
      var t = e.memoizedState, a = cr;
      t !== null && (a = t.retryLane), S1(e, a);
    }
    function MD(e, t) {
      var a = cr, i;
      switch (e.tag) {
        case be:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case ee:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), S1(e, a);
    }
    function zD(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : uD(e / 1960) * 1960;
    }
    function UD() {
      if (bh > cD)
        throw bh = 0, sw = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      wd > fD && (wd = 0, _y = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function FD() {
      wo.flushLegacyContextWarning(), wo.flushPendingUnsafeLifecycleWarnings();
    }
    function w1(e, t) {
      Qn(e), Ny(e, Za, nD), t && Ny(e, Nl, rD), Ny(e, Za, eD), t && Ny(e, Nl, tD), Mn();
    }
    function Ny(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var d = i.subtreeFlags & t;
        i !== l && i.child !== null && d !== st ? i = i.child : ((i.flags & t) !== st && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var My = null;
    function E1(e) {
      {
        if ((qt & da) !== Qr || !(e.mode & rt))
          return;
        var t = e.tag;
        if (t !== A && t !== U && t !== O && t !== L && t !== ge && t !== De && t !== We)
          return;
        var a = bt(e) || "ReactComponent";
        if (My !== null) {
          if (My.has(a))
            return;
          My.add(a);
        } else
          My = /* @__PURE__ */ new Set([a]);
        var i = qn;
        try {
          Qn(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Qn(e) : Mn();
        }
      }
    }
    var vw;
    {
      var jD = null;
      vw = function(e, t, a) {
        var i = O1(jD, t);
        try {
          return Mx(e, t, a);
        } catch (d) {
          if (Xk() || d !== null && typeof d == "object" && typeof d.then == "function")
            throw d;
          if (Pm(), Bb(), Hx(e, t), O1(t, i), t.mode & en && OS(t), Si(null, Mx, null, e, t, a), Tg()) {
            var l = so();
            typeof l == "object" && l !== null && l._suppressLogging && typeof d == "object" && d !== null && !d._suppressLogging && (d._suppressLogging = !0);
          }
          throw d;
        }
      };
    }
    var b1 = !1, mw;
    mw = /* @__PURE__ */ new Set();
    function PD(e) {
      if (va && !L_())
        switch (e.tag) {
          case L:
          case ge:
          case We: {
            var t = hr && bt(hr) || "Unknown", a = t;
            if (!mw.has(a)) {
              mw.add(a);
              var i = bt(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case O: {
            b1 || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), b1 = !0);
            break;
          }
        }
    }
    function Rh(e, t) {
      if (ja) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          kf(e, i, t);
        });
      }
    }
    var yw = {};
    function gw(e, t) {
      {
        var a = _o.current;
        return a !== null ? (a.push(t), yw) : rp(e, t);
      }
    }
    function x1(e) {
      if (e !== yw)
        return af(e);
    }
    function C1() {
      return _o.current !== null;
    }
    function HD(e) {
      {
        if (e.mode & rt) {
          if (!t1())
            return;
        } else if (!lD() || qt !== Qr || e.tag !== L && e.tag !== ge && e.tag !== We)
          return;
        if (_o.current === null) {
          var t = qn;
          try {
            Qn(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, bt(e));
          } finally {
            t ? Qn(e) : Mn();
          }
        }
      }
    }
    function $D(e) {
      e.tag !== es && t1() && _o.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Th(e) {
      l1 = e;
    }
    var qi = null, Ed = null, BD = function(e) {
      qi = e;
    };
    function bd(e) {
      {
        if (qi === null)
          return e;
        var t = qi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function Sw(e) {
      return bd(e);
    }
    function ww(e) {
      {
        if (qi === null)
          return e;
        var t = qi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = bd(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: ye,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function R1(e, t) {
      {
        if (qi === null)
          return !1;
        var a = e.elementType, i = t.type, l = !1, d = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case O: {
            typeof i == "function" && (l = !0);
            break;
          }
          case L: {
            (typeof i == "function" || d === it) && (l = !0);
            break;
          }
          case ge: {
            (d === ye || d === it) && (l = !0);
            break;
          }
          case De:
          case We: {
            (d === _t || d === it) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var v = qi(a);
          if (v !== void 0 && v === qi(i))
            return !0;
        }
        return !1;
      }
    }
    function T1(e) {
      {
        if (qi === null || typeof WeakSet != "function")
          return;
        Ed === null && (Ed = /* @__PURE__ */ new WeakSet()), Ed.add(e);
      }
    }
    var VD = function(e, t) {
      {
        if (qi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        lu(), ou(function() {
          Ew(e.current, i, a);
        });
      }
    }, ID = function(e, t) {
      {
        if (e.context !== bi)
          return;
        lu(), ou(function() {
          kh(t, e, null, null);
        });
      }
    };
    function Ew(e, t, a) {
      {
        var i = e.alternate, l = e.child, d = e.sibling, v = e.tag, w = e.type, b = null;
        switch (v) {
          case L:
          case We:
          case O:
            b = w;
            break;
          case ge:
            b = w.render;
            break;
        }
        if (qi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var R = !1, T = !1;
        if (b !== null) {
          var H = qi(b);
          H !== void 0 && (a.has(H) ? T = !0 : t.has(H) && (v === O ? T = !0 : R = !0));
        }
        if (Ed !== null && (Ed.has(e) || i !== null && Ed.has(i)) && (T = !0), T && (e._debugNeedsRemount = !0), T || R) {
          var F = ui(e, pt);
          F !== null && Xr(F, e, pt, _n);
        }
        l !== null && !T && Ew(l, t, a), d !== null && Ew(d, t, a);
      }
    }
    var YD = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return bw(e.current, i, a), a;
      }
    };
    function bw(e, t, a) {
      {
        var i = e.child, l = e.sibling, d = e.tag, v = e.type, w = null;
        switch (d) {
          case L:
          case We:
          case O:
            w = v;
            break;
          case ge:
            w = v.render;
            break;
        }
        var b = !1;
        w !== null && t.has(w) && (b = !0), b ? WD(e, a) : i !== null && bw(i, t, a), l !== null && bw(l, t, a);
      }
    }
    function WD(e, t) {
      {
        var a = qD(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case j:
              t.add(i.stateNode);
              return;
            case V:
              t.add(i.stateNode.containerInfo);
              return;
            case U:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function qD(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === j)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var xw;
    {
      xw = !1;
      try {
        var k1 = Object.preventExtensions({});
      } catch {
        xw = !0;
      }
    }
    function QD(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = st, this.subtreeFlags = st, this.deletions = null, this.lanes = ie, this.childLanes = ie, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !xw && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var xi = function(e, t, a, i) {
      return new QD(e, t, a, i);
    };
    function Cw(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function GD(e) {
      return typeof e == "function" && !Cw(e) && e.defaultProps === void 0;
    }
    function KD(e) {
      if (typeof e == "function")
        return Cw(e) ? O : L;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ye)
          return ge;
        if (t === _t)
          return De;
      }
      return A;
    }
    function zc(e, t) {
      var a = e.alternate;
      a === null ? (a = xi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = st, a.subtreeFlags = st, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Br, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case A:
        case L:
        case We:
          a.type = bd(e.type);
          break;
        case O:
          a.type = Sw(e.type);
          break;
        case ge:
          a.type = ww(e.type);
          break;
      }
      return a;
    }
    function XD(e, t) {
      e.flags &= Br | bn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ie, e.lanes = t, e.child = null, e.subtreeFlags = st, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = st, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function ZD(e, t, a) {
      var i;
      return e === Am ? (i = rt, t === !0 && (i |= tr, i |= ei)) : i = ct, ja && (i |= en), xi(U, null, null, i);
    }
    function Rw(e, t, a, i, l, d) {
      var v = A, w = e;
      if (typeof e == "function")
        Cw(e) ? (v = O, w = Sw(w)) : w = bd(w);
      else if (typeof e == "string")
        v = j;
      else
        e: switch (e) {
          case tn:
            return ps(a.children, l, d, t);
          case yr:
            v = Ce, l |= tr, (l & rt) !== ct && (l |= ei);
            break;
          case N:
            return JD(a, l, d, t);
          case Rt:
            return eA(a, l, d, t);
          case Ht:
            return tA(a, l, d, t);
          case hn:
            return _1(a, l, d, t);
          case xr:
          case Wn:
          case zt:
          case Vt:
          case pn:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case le:
                  v = we;
                  break e;
                case Re:
                  v = Ae;
                  break e;
                case ye:
                  v = ge, w = ww(w);
                  break e;
                case _t:
                  v = De;
                  break e;
                case it:
                  v = Ut, w = null;
                  break e;
              }
            var b = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var R = i ? bt(i) : null;
              R && (b += `

Check the render method of \`` + R + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + b));
          }
        }
      var T = xi(v, a, t, l);
      return T.elementType = e, T.type = w, T.lanes = d, T._debugOwner = i, T;
    }
    function Tw(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, d = e.key, v = e.props, w = Rw(l, d, v, i, t, a);
      return w._debugSource = e._source, w._debugOwner = e._owner, w;
    }
    function ps(e, t, a, i) {
      var l = xi(se, e, i, t);
      return l.lanes = a, l;
    }
    function JD(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = xi(Ie, e, i, t | en);
      return l.elementType = N, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function eA(e, t, a, i) {
      var l = xi(be, e, i, t);
      return l.elementType = Rt, l.lanes = a, l;
    }
    function tA(e, t, a, i) {
      var l = xi(ee, e, i, t);
      return l.elementType = Ht, l.lanes = a, l;
    }
    function _1(e, t, a, i) {
      var l = xi(ne, e, i, t);
      l.elementType = hn, l.lanes = a;
      var d = {
        isHidden: !1
      };
      return l.stateNode = d, l;
    }
    function kw(e, t, a) {
      var i = xi($, e, null, t);
      return i.lanes = a, i;
    }
    function nA() {
      var e = xi(j, null, null, ct);
      return e.elementType = "DELETED", e;
    }
    function rA(e) {
      var t = xi(B, null, null, ct);
      return t.stateNode = e, t;
    }
    function _w(e, t, a) {
      var i = e.children !== null ? e.children : [], l = xi(V, i, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function O1(e, t) {
      return e === null && (e = xi(A, null, null, ct)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function aA(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = s0, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = cr, this.eventTimes = oc(ie), this.expirationTimes = oc(_n), this.pendingLanes = ie, this.suspendedLanes = ie, this.pingedLanes = ie, this.expiredLanes = ie, this.mutableReadLanes = ie, this.finishedLanes = ie, this.entangledLanes = ie, this.entanglements = oc(ie), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var d = this.pendingUpdatersLaneMap = [], v = 0; v < sr; v++)
          d.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Am:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case es:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function D1(e, t, a, i, l, d, v, w, b, R) {
      var T = new aA(e, t, a, w, b), H = ZD(t, d);
      T.current = H, H.stateNode = T;
      {
        var F = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        H.memoizedState = F;
      }
      return U0(H), T;
    }
    var Ow = "18.2.0";
    function iA(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return An(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Lt,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var Dw, Aw;
    Dw = !1, Aw = {};
    function A1(e) {
      if (!e)
        return bi;
      var t = Ai(e), a = Bk(t);
      if (t.tag === O) {
        var i = t.type;
        if (il(i))
          return rb(t, i, a);
      }
      return a;
    }
    function oA(e, t) {
      {
        var a = Ai(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var l = ep(a);
        if (l === null)
          return null;
        if (l.mode & tr) {
          var d = bt(a) || "Component";
          if (!Aw[d]) {
            Aw[d] = !0;
            var v = qn;
            try {
              Qn(l), a.mode & tr ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d);
            } finally {
              v ? Qn(v) : Mn();
            }
          }
        }
        return l.stateNode;
      }
    }
    function L1(e, t, a, i, l, d, v, w) {
      var b = !1, R = null;
      return D1(e, t, b, R, a, i, l, d, v);
    }
    function N1(e, t, a, i, l, d, v, w, b, R) {
      var T = !0, H = D1(a, i, T, e, l, d, v, w, b);
      H.context = A1(null);
      var F = H.current, X = Ba(), Z = fs(F), re = nu(X, Z);
      return re.callback = t ?? null, rs(F, re, Z), pD(H, Z, X), H;
    }
    function kh(e, t, a, i) {
      fo(t, e);
      var l = t.current, d = Ba(), v = fs(l);
      sp(v);
      var w = A1(a);
      t.context === null ? t.context = w : t.pendingContext = w, va && qn !== null && !Dw && (Dw = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, bt(qn) || "Unknown"));
      var b = nu(d, v);
      b.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), b.callback = i);
      var R = rs(l, b, v);
      return R !== null && (Xr(R, l, v, d), Im(R, l, v)), v;
    }
    function zy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case j:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function lA(e) {
      switch (e.tag) {
        case U: {
          var t = e.stateNode;
          if (_f(t)) {
            var a = Dg(t);
            yD(t, a);
          }
          break;
        }
        case be: {
          ou(function() {
            var l = ui(e, pt);
            if (l !== null) {
              var d = Ba();
              Xr(l, e, pt, d);
            }
          });
          var i = pt;
          Lw(e, i);
          break;
        }
      }
    }
    function M1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Vv(a.retryLane, t));
    }
    function Lw(e, t) {
      M1(e, t);
      var a = e.alternate;
      a && M1(a, t);
    }
    function uA(e) {
      if (e.tag === be) {
        var t = Bl, a = ui(e, t);
        if (a !== null) {
          var i = Ba();
          Xr(a, e, t, i);
        }
        Lw(e, t);
      }
    }
    function sA(e) {
      if (e.tag === be) {
        var t = fs(e), a = ui(e, t);
        if (a !== null) {
          var i = Ba();
          Xr(a, e, t, i);
        }
        Lw(e, t);
      }
    }
    function z1(e) {
      var t = np(e);
      return t === null ? null : t.stateNode;
    }
    var U1 = function(e) {
      return null;
    };
    function cA(e) {
      return U1(e);
    }
    var F1 = function(e) {
      return !1;
    };
    function fA(e) {
      return F1(e);
    }
    var j1 = null, P1 = null, H1 = null, $1 = null, B1 = null, V1 = null, I1 = null, Y1 = null, W1 = null;
    {
      var q1 = function(e, t, a) {
        var i = t[a], l = Xt(e) ? e.slice() : Tt({}, e);
        return a + 1 === t.length ? (Xt(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = q1(e[i], t, a + 1), l);
      }, Q1 = function(e, t) {
        return q1(e, t, 0);
      }, G1 = function(e, t, a, i) {
        var l = t[i], d = Xt(e) ? e.slice() : Tt({}, e);
        if (i + 1 === t.length) {
          var v = a[i];
          d[v] = d[l], Xt(d) ? d.splice(l, 1) : delete d[l];
        } else
          d[l] = G1(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            a,
            i + 1
          );
        return d;
      }, K1 = function(e, t, a) {
        if (t.length !== a.length) {
          S("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              S("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return G1(e, t, a, 0);
      }, X1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var l = t[a], d = Xt(e) ? e.slice() : Tt({}, e);
        return d[l] = X1(e[l], t, a + 1, i), d;
      }, Z1 = function(e, t, a) {
        return X1(e, t, 0, a);
      }, Nw = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      j1 = function(e, t, a, i) {
        var l = Nw(e, t);
        if (l !== null) {
          var d = Z1(l.memoizedState, a, i);
          l.memoizedState = d, l.baseState = d, e.memoizedProps = Tt({}, e.memoizedProps);
          var v = ui(e, pt);
          v !== null && Xr(v, e, pt, _n);
        }
      }, P1 = function(e, t, a) {
        var i = Nw(e, t);
        if (i !== null) {
          var l = Q1(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = Tt({}, e.memoizedProps);
          var d = ui(e, pt);
          d !== null && Xr(d, e, pt, _n);
        }
      }, H1 = function(e, t, a, i) {
        var l = Nw(e, t);
        if (l !== null) {
          var d = K1(l.memoizedState, a, i);
          l.memoizedState = d, l.baseState = d, e.memoizedProps = Tt({}, e.memoizedProps);
          var v = ui(e, pt);
          v !== null && Xr(v, e, pt, _n);
        }
      }, $1 = function(e, t, a) {
        e.pendingProps = Z1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ui(e, pt);
        i !== null && Xr(i, e, pt, _n);
      }, B1 = function(e, t) {
        e.pendingProps = Q1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ui(e, pt);
        a !== null && Xr(a, e, pt, _n);
      }, V1 = function(e, t, a) {
        e.pendingProps = K1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ui(e, pt);
        i !== null && Xr(i, e, pt, _n);
      }, I1 = function(e) {
        var t = ui(e, pt);
        t !== null && Xr(t, e, pt, _n);
      }, Y1 = function(e) {
        U1 = e;
      }, W1 = function(e) {
        F1 = e;
      };
    }
    function dA(e) {
      var t = ep(e);
      return t === null ? null : t.stateNode;
    }
    function pA(e) {
      return null;
    }
    function hA() {
      return qn;
    }
    function vA(e) {
      var t = e.findFiberByHostInstance, a = p.ReactCurrentDispatcher;
      return _v({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: j1,
        overrideHookStateDeletePath: P1,
        overrideHookStateRenamePath: H1,
        overrideProps: $1,
        overridePropsDeletePath: B1,
        overridePropsRenamePath: V1,
        setErrorHandler: Y1,
        setSuspenseHandler: W1,
        scheduleUpdate: I1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: dA,
        findFiberByHostInstance: t || pA,
        // React Refresh
        findHostInstancesForRefresh: YD,
        scheduleRefresh: VD,
        scheduleRoot: ID,
        setRefreshHandler: BD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: hA,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: Ow
      });
    }
    var J1 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function Mw(e) {
      this._internalRoot = e;
    }
    Uy.prototype.render = Mw.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Fy(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== er) {
          var i = z1(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      kh(e, t, null, null);
    }, Uy.prototype.unmount = Mw.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        f1() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), ou(function() {
          kh(null, e, null, null);
        }), ZE(t);
      }
    };
    function mA(e, t) {
      if (!Fy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      eC(e);
      var a = !1, i = !1, l = "", d = J1;
      t != null && (t.hydrate ? S("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === je && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var v = L1(e, Am, null, a, i, l, d);
      Cm(v.current, e);
      var w = e.nodeType === er ? e.parentNode : e;
      return zp(w), new Mw(v);
    }
    function Uy(e) {
      this._internalRoot = e;
    }
    function yA(e) {
      e && Ug(e);
    }
    Uy.prototype.unstable_scheduleHydration = yA;
    function gA(e, t, a) {
      if (!Fy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      eC(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, d = !1, v = !1, w = "", b = J1;
      a != null && (a.unstable_strictMode === !0 && (d = !0), a.identifierPrefix !== void 0 && (w = a.identifierPrefix), a.onRecoverableError !== void 0 && (b = a.onRecoverableError));
      var R = N1(t, null, e, Am, i, d, v, w, b);
      if (Cm(R.current, e), zp(e), l)
        for (var T = 0; T < l.length; T++) {
          var H = l[T];
          T_(R, H);
        }
      return new Uy(R);
    }
    function Fy(e) {
      return !!(e && (e.nodeType === ya || e.nodeType === Na || e.nodeType === Fd || !Be));
    }
    function _h(e) {
      return !!(e && (e.nodeType === ya || e.nodeType === Na || e.nodeType === Fd || e.nodeType === er && e.nodeValue === " react-mount-point-unstable "));
    }
    function eC(e) {
      e.nodeType === ya && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Wp(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var SA = p.ReactCurrentOwner, tC;
    tC = function(e) {
      if (e._reactRootContainer && e.nodeType !== er) {
        var t = z1(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = zw(e), l = !!(i && Zu(i));
      l && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ya && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function zw(e) {
      return e ? e.nodeType === Na ? e.documentElement : e.firstChild : null;
    }
    function nC() {
    }
    function wA(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var d = i;
          i = function() {
            var F = zy(v);
            d.call(F);
          };
        }
        var v = N1(
          t,
          i,
          e,
          es,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          nC
        );
        e._reactRootContainer = v, Cm(v.current, e);
        var w = e.nodeType === er ? e.parentNode : e;
        return zp(w), ou(), v;
      } else {
        for (var b; b = e.lastChild; )
          e.removeChild(b);
        if (typeof i == "function") {
          var R = i;
          i = function() {
            var F = zy(T);
            R.call(F);
          };
        }
        var T = L1(
          e,
          es,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          nC
        );
        e._reactRootContainer = T, Cm(T.current, e);
        var H = e.nodeType === er ? e.parentNode : e;
        return zp(H), ou(function() {
          kh(t, T, a, i);
        }), T;
      }
    }
    function EA(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function jy(e, t, a, i, l) {
      tC(a), EA(l === void 0 ? null : l, "render");
      var d = a._reactRootContainer, v;
      if (!d)
        v = wA(a, t, e, l, i);
      else {
        if (v = d, typeof l == "function") {
          var w = l;
          l = function() {
            var b = zy(v);
            w.call(b);
          };
        }
        kh(t, v, e, l);
      }
      return zy(v);
    }
    function bA(e) {
      {
        var t = SA.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Kt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ya ? e : oA(e, "findDOMNode");
    }
    function xA(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !_h(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Wp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return jy(null, e, t, !0, a);
    }
    function CA(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !_h(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Wp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return jy(null, e, t, !1, a);
    }
    function RA(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !_h(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !bu(e))
        throw new Error("parentComponent must be a valid React Component");
      return jy(e, t, a, !1, i);
    }
    function TA(e) {
      if (!_h(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Wp(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = zw(e), i = a && !Zu(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return ou(function() {
          jy(null, null, e, !1, function() {
            e._reactRootContainer = null, ZE(e);
          });
        }), !0;
      } else {
        {
          var l = zw(e), d = !!(l && Zu(l)), v = e.nodeType === ya && _h(e.parentNode) && !!e.parentNode._reactRootContainer;
          d && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", v ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    ju(lA), Mg(uA), Df(sA), Wv(ni), qv(ea), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Yd(OT), Zc(dw, gD, ou);
    function kA(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Fy(t))
        throw new Error("Target container is not a DOM element.");
      return iA(e, t, null, a);
    }
    function _A(e, t, a, i) {
      return RA(e, t, a, i);
    }
    var Uw = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Zu, Jf, Rm, Eu, Dl, dw]
    };
    function OA(e, t) {
      return Uw.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), mA(e, t);
    }
    function DA(e, t, a) {
      return Uw.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), gA(e, t, a);
    }
    function AA(e) {
      return f1() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), ou(e);
    }
    var LA = vA({
      findFiberByHostInstance: wc,
      bundleType: 1,
      version: Ow,
      rendererPackageName: "react-dom"
    });
    if (!LA && cn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var rC = window.location.protocol;
      /^(https?|file):$/.test(rC) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (rC === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    pi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uw, pi.createPortal = kA, pi.createRoot = OA, pi.findDOMNode = bA, pi.flushSync = AA, pi.hydrate = xA, pi.hydrateRoot = DA, pi.render = CA, pi.unmountComponentAtNode = TA, pi.unstable_batchedUpdates = dw, pi.unstable_renderSubtreeIntoContainer = _A, pi.version = Ow, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), pi;
}
var JC = {};
function eR() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (JC.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eR);
    } catch (c) {
      console.error(c);
    }
  }
}
JC.NODE_ENV === "production" ? (eR(), Gw.exports = WA()) : Gw.exports = qA();
var QA = Gw.exports, GA = {}, Lh = QA;
if (GA.NODE_ENV === "production")
  Uh.createRoot = Lh.createRoot, Uh.hydrateRoot = Lh.hydrateRoot;
else {
  var $y = Lh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Uh.createRoot = function(c, u) {
    $y.usingClientEntryPoint = !0;
    try {
      return Lh.createRoot(c, u);
    } finally {
      $y.usingClientEntryPoint = !1;
    }
  }, Uh.hydrateRoot = function(c, u, f) {
    $y.usingClientEntryPoint = !0;
    try {
      return Lh.hydrateRoot(c, u, f);
    } finally {
      $y.usingClientEntryPoint = !1;
    }
  };
}
const Td = Math.min, Uc = Math.max, Qy = Math.round, By = Math.floor, yl = (c) => ({
  x: c,
  y: c
}), KA = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, XA = {
  start: "end",
  end: "start"
};
function Kw(c, u, f) {
  return Uc(c, Td(u, f));
}
function Bh(c, u) {
  return typeof c == "function" ? c(u) : c;
}
function jc(c) {
  return c.split("-")[0];
}
function Vh(c) {
  return c.split("-")[1];
}
function tR(c) {
  return c === "x" ? "y" : "x";
}
function uE(c) {
  return c === "y" ? "height" : "width";
}
const ZA = /* @__PURE__ */ new Set(["top", "bottom"]);
function ms(c) {
  return ZA.has(jc(c)) ? "y" : "x";
}
function sE(c) {
  return tR(ms(c));
}
function JA(c, u, f) {
  f === void 0 && (f = !1);
  const p = Vh(c), y = sE(c), E = uE(y);
  let S = y === "x" ? p === (f ? "end" : "start") ? "right" : "left" : p === "start" ? "bottom" : "top";
  return u.reference[E] > u.floating[E] && (S = Gy(S)), [S, Gy(S)];
}
function eL(c) {
  const u = Gy(c);
  return [Xw(c), u, Xw(u)];
}
function Xw(c) {
  return c.replace(/start|end/g, (u) => XA[u]);
}
const vC = ["left", "right"], mC = ["right", "left"], tL = ["top", "bottom"], nL = ["bottom", "top"];
function rL(c, u, f) {
  switch (c) {
    case "top":
    case "bottom":
      return f ? u ? mC : vC : u ? vC : mC;
    case "left":
    case "right":
      return u ? tL : nL;
    default:
      return [];
  }
}
function aL(c, u, f, p) {
  const y = Vh(c);
  let E = rL(jc(c), f === "start", p);
  return y && (E = E.map((S) => S + "-" + y), u && (E = E.concat(E.map(Xw)))), E;
}
function Gy(c) {
  return c.replace(/left|right|bottom|top/g, (u) => KA[u]);
}
function iL(c) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...c
  };
}
function nR(c) {
  return typeof c != "number" ? iL(c) : {
    top: c,
    right: c,
    bottom: c,
    left: c
  };
}
function Ky(c) {
  const {
    x: u,
    y: f,
    width: p,
    height: y
  } = c;
  return {
    width: p,
    height: y,
    top: f,
    left: u,
    right: u + p,
    bottom: f + y,
    x: u,
    y: f
  };
}
function yC(c, u, f) {
  let {
    reference: p,
    floating: y
  } = c;
  const E = ms(u), S = sE(u), g = uE(S), _ = jc(u), L = E === "y", O = p.x + p.width / 2 - y.width / 2, A = p.y + p.height / 2 - y.height / 2, U = p[g] / 2 - y[g] / 2;
  let V;
  switch (_) {
    case "top":
      V = {
        x: O,
        y: p.y - y.height
      };
      break;
    case "bottom":
      V = {
        x: O,
        y: p.y + p.height
      };
      break;
    case "right":
      V = {
        x: p.x + p.width,
        y: A
      };
      break;
    case "left":
      V = {
        x: p.x - y.width,
        y: A
      };
      break;
    default:
      V = {
        x: p.x,
        y: p.y
      };
  }
  switch (Vh(u)) {
    case "start":
      V[S] -= U * (f && L ? -1 : 1);
      break;
    case "end":
      V[S] += U * (f && L ? -1 : 1);
      break;
  }
  return V;
}
async function oL(c, u) {
  var f;
  u === void 0 && (u = {});
  const {
    x: p,
    y,
    platform: E,
    rects: S,
    elements: g,
    strategy: _
  } = c, {
    boundary: L = "clippingAncestors",
    rootBoundary: O = "viewport",
    elementContext: A = "floating",
    altBoundary: U = !1,
    padding: V = 0
  } = Bh(u, c), j = nR(V), se = g[U ? A === "floating" ? "reference" : "floating" : A], Ce = Ky(await E.getClippingRect({
    element: (f = await (E.isElement == null ? void 0 : E.isElement(se))) == null || f ? se : se.contextElement || await (E.getDocumentElement == null ? void 0 : E.getDocumentElement(g.floating)),
    boundary: L,
    rootBoundary: O,
    strategy: _
  })), Ae = A === "floating" ? {
    x: p,
    y,
    width: S.floating.width,
    height: S.floating.height
  } : S.reference, we = await (E.getOffsetParent == null ? void 0 : E.getOffsetParent(g.floating)), ge = await (E.isElement == null ? void 0 : E.isElement(we)) ? await (E.getScale == null ? void 0 : E.getScale(we)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, Ie = Ky(E.convertOffsetParentRelativeRectToViewportRelativeRect ? await E.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: g,
    rect: Ae,
    offsetParent: we,
    strategy: _
  }) : Ae);
  return {
    top: (Ce.top - Ie.top + j.top) / ge.y,
    bottom: (Ie.bottom - Ce.bottom + j.bottom) / ge.y,
    left: (Ce.left - Ie.left + j.left) / ge.x,
    right: (Ie.right - Ce.right + j.right) / ge.x
  };
}
const lL = async (c, u, f) => {
  const {
    placement: p = "bottom",
    strategy: y = "absolute",
    middleware: E = [],
    platform: S
  } = f, g = E.filter(Boolean), _ = await (S.isRTL == null ? void 0 : S.isRTL(u));
  let L = await S.getElementRects({
    reference: c,
    floating: u,
    strategy: y
  }), {
    x: O,
    y: A
  } = yC(L, p, _), U = p, V = {}, j = 0;
  for (let se = 0; se < g.length; se++) {
    var $;
    const {
      name: Ce,
      fn: Ae
    } = g[se], {
      x: we,
      y: ge,
      data: Ie,
      reset: be
    } = await Ae({
      x: O,
      y: A,
      initialPlacement: p,
      placement: U,
      strategy: y,
      middlewareData: V,
      rects: L,
      platform: {
        ...S,
        detectOverflow: ($ = S.detectOverflow) != null ? $ : oL
      },
      elements: {
        reference: c,
        floating: u
      }
    });
    O = we ?? O, A = ge ?? A, V = {
      ...V,
      [Ce]: {
        ...V[Ce],
        ...Ie
      }
    }, be && j <= 50 && (j++, typeof be == "object" && (be.placement && (U = be.placement), be.rects && (L = be.rects === !0 ? await S.getElementRects({
      reference: c,
      floating: u,
      strategy: y
    }) : be.rects), {
      x: O,
      y: A
    } = yC(L, U, _)), se = -1);
  }
  return {
    x: O,
    y: A,
    placement: U,
    strategy: y,
    middlewareData: V
  };
}, uL = (c) => ({
  name: "arrow",
  options: c,
  async fn(u) {
    const {
      x: f,
      y: p,
      placement: y,
      rects: E,
      platform: S,
      elements: g,
      middlewareData: _
    } = u, {
      element: L,
      padding: O = 0
    } = Bh(c, u) || {};
    if (L == null)
      return {};
    const A = nR(O), U = {
      x: f,
      y: p
    }, V = sE(y), j = uE(V), $ = await S.getDimensions(L), se = V === "y", Ce = se ? "top" : "left", Ae = se ? "bottom" : "right", we = se ? "clientHeight" : "clientWidth", ge = E.reference[j] + E.reference[V] - U[V] - E.floating[j], Ie = U[V] - E.reference[V], be = await (S.getOffsetParent == null ? void 0 : S.getOffsetParent(L));
    let De = be ? be[we] : 0;
    (!De || !await (S.isElement == null ? void 0 : S.isElement(be))) && (De = g.floating[we] || E.floating[j]);
    const We = ge / 2 - Ie / 2, Ut = De / 2 - $[j] / 2 - 1, Dt = Td(A[Ce], Ut), B = Td(A[Ae], Ut), ee = Dt, pe = De - $[j] - B, ne = De / 2 - $[j] / 2 + We, me = Kw(ee, ne, pe), Se = !_.arrow && Vh(y) != null && ne !== me && E.reference[j] / 2 - (ne < ee ? Dt : B) - $[j] / 2 < 0, he = Se ? ne < ee ? ne - ee : ne - pe : 0;
    return {
      [V]: U[V] + he,
      data: {
        [V]: me,
        centerOffset: ne - me - he,
        ...Se && {
          alignmentOffset: he
        }
      },
      reset: Se
    };
  }
}), sL = function(c) {
  return c === void 0 && (c = {}), {
    name: "flip",
    options: c,
    async fn(u) {
      var f, p;
      const {
        placement: y,
        middlewareData: E,
        rects: S,
        initialPlacement: g,
        platform: _,
        elements: L
      } = u, {
        mainAxis: O = !0,
        crossAxis: A = !0,
        fallbackPlacements: U,
        fallbackStrategy: V = "bestFit",
        fallbackAxisSideDirection: j = "none",
        flipAlignment: $ = !0,
        ...se
      } = Bh(c, u);
      if ((f = E.arrow) != null && f.alignmentOffset)
        return {};
      const Ce = jc(y), Ae = ms(g), we = jc(g) === g, ge = await (_.isRTL == null ? void 0 : _.isRTL(L.floating)), Ie = U || (we || !$ ? [Gy(g)] : eL(g)), be = j !== "none";
      !U && be && Ie.push(...aL(g, $, j, ge));
      const De = [g, ...Ie], We = await _.detectOverflow(u, se), Ut = [];
      let Dt = ((p = E.flip) == null ? void 0 : p.overflows) || [];
      if (O && Ut.push(We[Ce]), A) {
        const ne = JA(y, S, ge);
        Ut.push(We[ne[0]], We[ne[1]]);
      }
      if (Dt = [...Dt, {
        placement: y,
        overflows: Ut
      }], !Ut.every((ne) => ne <= 0)) {
        var B, ee;
        const ne = (((B = E.flip) == null ? void 0 : B.index) || 0) + 1, me = De[ne];
        if (me && (!(A === "alignment" ? Ae !== ms(me) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        Dt.every((I) => ms(I.placement) === Ae ? I.overflows[0] > 0 : !0)))
          return {
            data: {
              index: ne,
              overflows: Dt
            },
            reset: {
              placement: me
            }
          };
        let Se = (ee = Dt.filter((he) => he.overflows[0] <= 0).sort((he, I) => he.overflows[1] - I.overflows[1])[0]) == null ? void 0 : ee.placement;
        if (!Se)
          switch (V) {
            case "bestFit": {
              var pe;
              const he = (pe = Dt.filter((I) => {
                if (be) {
                  const oe = ms(I.placement);
                  return oe === Ae || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  oe === "y";
                }
                return !0;
              }).map((I) => [I.placement, I.overflows.filter((oe) => oe > 0).reduce((oe, k) => oe + k, 0)]).sort((I, oe) => I[1] - oe[1])[0]) == null ? void 0 : pe[0];
              he && (Se = he);
              break;
            }
            case "initialPlacement":
              Se = g;
              break;
          }
        if (y !== Se)
          return {
            reset: {
              placement: Se
            }
          };
      }
      return {};
    }
  };
}, cL = /* @__PURE__ */ new Set(["left", "top"]);
async function fL(c, u) {
  const {
    placement: f,
    platform: p,
    elements: y
  } = c, E = await (p.isRTL == null ? void 0 : p.isRTL(y.floating)), S = jc(f), g = Vh(f), _ = ms(f) === "y", L = cL.has(S) ? -1 : 1, O = E && _ ? -1 : 1, A = Bh(u, c);
  let {
    mainAxis: U,
    crossAxis: V,
    alignmentAxis: j
  } = typeof A == "number" ? {
    mainAxis: A,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: A.mainAxis || 0,
    crossAxis: A.crossAxis || 0,
    alignmentAxis: A.alignmentAxis
  };
  return g && typeof j == "number" && (V = g === "end" ? j * -1 : j), _ ? {
    x: V * O,
    y: U * L
  } : {
    x: U * L,
    y: V * O
  };
}
const dL = function(c) {
  return c === void 0 && (c = 0), {
    name: "offset",
    options: c,
    async fn(u) {
      var f, p;
      const {
        x: y,
        y: E,
        placement: S,
        middlewareData: g
      } = u, _ = await fL(u, c);
      return S === ((f = g.offset) == null ? void 0 : f.placement) && (p = g.arrow) != null && p.alignmentOffset ? {} : {
        x: y + _.x,
        y: E + _.y,
        data: {
          ..._,
          placement: S
        }
      };
    }
  };
}, pL = function(c) {
  return c === void 0 && (c = {}), {
    name: "shift",
    options: c,
    async fn(u) {
      const {
        x: f,
        y: p,
        placement: y,
        platform: E
      } = u, {
        mainAxis: S = !0,
        crossAxis: g = !1,
        limiter: _ = {
          fn: (Ce) => {
            let {
              x: Ae,
              y: we
            } = Ce;
            return {
              x: Ae,
              y: we
            };
          }
        },
        ...L
      } = Bh(c, u), O = {
        x: f,
        y: p
      }, A = await E.detectOverflow(u, L), U = ms(jc(y)), V = tR(U);
      let j = O[V], $ = O[U];
      if (S) {
        const Ce = V === "y" ? "top" : "left", Ae = V === "y" ? "bottom" : "right", we = j + A[Ce], ge = j - A[Ae];
        j = Kw(we, j, ge);
      }
      if (g) {
        const Ce = U === "y" ? "top" : "left", Ae = U === "y" ? "bottom" : "right", we = $ + A[Ce], ge = $ - A[Ae];
        $ = Kw(we, $, ge);
      }
      const se = _.fn({
        ...u,
        [V]: j,
        [U]: $
      });
      return {
        ...se,
        data: {
          x: se.x - f,
          y: se.y - p,
          enabled: {
            [V]: S,
            [U]: g
          }
        }
      };
    }
  };
};
function ng() {
  return typeof window < "u";
}
function Ad(c) {
  return rR(c) ? (c.nodeName || "").toLowerCase() : "#document";
}
function Ti(c) {
  var u;
  return (c == null || (u = c.ownerDocument) == null ? void 0 : u.defaultView) || window;
}
function Sl(c) {
  var u;
  return (u = (rR(c) ? c.ownerDocument : c.document) || window.document) == null ? void 0 : u.documentElement;
}
function rR(c) {
  return ng() ? c instanceof Node || c instanceof Ti(c).Node : !1;
}
function Do(c) {
  return ng() ? c instanceof Element || c instanceof Ti(c).Element : !1;
}
function gl(c) {
  return ng() ? c instanceof HTMLElement || c instanceof Ti(c).HTMLElement : !1;
}
function gC(c) {
  return !ng() || typeof ShadowRoot > "u" ? !1 : c instanceof ShadowRoot || c instanceof Ti(c).ShadowRoot;
}
const hL = /* @__PURE__ */ new Set(["inline", "contents"]);
function Ih(c) {
  const {
    overflow: u,
    overflowX: f,
    overflowY: p,
    display: y
  } = Ao(c);
  return /auto|scroll|overlay|hidden|clip/.test(u + p + f) && !hL.has(y);
}
const vL = /* @__PURE__ */ new Set(["table", "td", "th"]);
function mL(c) {
  return vL.has(Ad(c));
}
const yL = [":popover-open", ":modal"];
function rg(c) {
  return yL.some((u) => {
    try {
      return c.matches(u);
    } catch {
      return !1;
    }
  });
}
const gL = ["transform", "translate", "scale", "rotate", "perspective"], SL = ["transform", "translate", "scale", "rotate", "perspective", "filter"], wL = ["paint", "layout", "strict", "content"];
function cE(c) {
  const u = fE(), f = Do(c) ? Ao(c) : c;
  return gL.some((p) => f[p] ? f[p] !== "none" : !1) || (f.containerType ? f.containerType !== "normal" : !1) || !u && (f.backdropFilter ? f.backdropFilter !== "none" : !1) || !u && (f.filter ? f.filter !== "none" : !1) || SL.some((p) => (f.willChange || "").includes(p)) || wL.some((p) => (f.contain || "").includes(p));
}
function EL(c) {
  let u = ys(c);
  for (; gl(u) && !kd(u); ) {
    if (cE(u))
      return u;
    if (rg(u))
      return null;
    u = ys(u);
  }
  return null;
}
function fE() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const bL = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function kd(c) {
  return bL.has(Ad(c));
}
function Ao(c) {
  return Ti(c).getComputedStyle(c);
}
function ag(c) {
  return Do(c) ? {
    scrollLeft: c.scrollLeft,
    scrollTop: c.scrollTop
  } : {
    scrollLeft: c.scrollX,
    scrollTop: c.scrollY
  };
}
function ys(c) {
  if (Ad(c) === "html")
    return c;
  const u = (
    // Step into the shadow DOM of the parent of a slotted node.
    c.assignedSlot || // DOM Element detected.
    c.parentNode || // ShadowRoot detected.
    gC(c) && c.host || // Fallback.
    Sl(c)
  );
  return gC(u) ? u.host : u;
}
function aR(c) {
  const u = ys(c);
  return kd(u) ? c.ownerDocument ? c.ownerDocument.body : c.body : gl(u) && Ih(u) ? u : aR(u);
}
function Hh(c, u, f) {
  var p;
  u === void 0 && (u = []), f === void 0 && (f = !0);
  const y = aR(c), E = y === ((p = c.ownerDocument) == null ? void 0 : p.body), S = Ti(y);
  if (E) {
    const g = Zw(S);
    return u.concat(S, S.visualViewport || [], Ih(y) ? y : [], g && f ? Hh(g) : []);
  }
  return u.concat(y, Hh(y, [], f));
}
function Zw(c) {
  return c.parent && Object.getPrototypeOf(c.parent) ? c.frameElement : null;
}
function iR(c) {
  const u = Ao(c);
  let f = parseFloat(u.width) || 0, p = parseFloat(u.height) || 0;
  const y = gl(c), E = y ? c.offsetWidth : f, S = y ? c.offsetHeight : p, g = Qy(f) !== E || Qy(p) !== S;
  return g && (f = E, p = S), {
    width: f,
    height: p,
    $: g
  };
}
function dE(c) {
  return Do(c) ? c : c.contextElement;
}
function Rd(c) {
  const u = dE(c);
  if (!gl(u))
    return yl(1);
  const f = u.getBoundingClientRect(), {
    width: p,
    height: y,
    $: E
  } = iR(u);
  let S = (E ? Qy(f.width) : f.width) / p, g = (E ? Qy(f.height) : f.height) / y;
  return (!S || !Number.isFinite(S)) && (S = 1), (!g || !Number.isFinite(g)) && (g = 1), {
    x: S,
    y: g
  };
}
const xL = /* @__PURE__ */ yl(0);
function oR(c) {
  const u = Ti(c);
  return !fE() || !u.visualViewport ? xL : {
    x: u.visualViewport.offsetLeft,
    y: u.visualViewport.offsetTop
  };
}
function CL(c, u, f) {
  return u === void 0 && (u = !1), !f || u && f !== Ti(c) ? !1 : u;
}
function Pc(c, u, f, p) {
  u === void 0 && (u = !1), f === void 0 && (f = !1);
  const y = c.getBoundingClientRect(), E = dE(c);
  let S = yl(1);
  u && (p ? Do(p) && (S = Rd(p)) : S = Rd(c));
  const g = CL(E, f, p) ? oR(E) : yl(0);
  let _ = (y.left + g.x) / S.x, L = (y.top + g.y) / S.y, O = y.width / S.x, A = y.height / S.y;
  if (E) {
    const U = Ti(E), V = p && Do(p) ? Ti(p) : p;
    let j = U, $ = Zw(j);
    for (; $ && p && V !== j; ) {
      const se = Rd($), Ce = $.getBoundingClientRect(), Ae = Ao($), we = Ce.left + ($.clientLeft + parseFloat(Ae.paddingLeft)) * se.x, ge = Ce.top + ($.clientTop + parseFloat(Ae.paddingTop)) * se.y;
      _ *= se.x, L *= se.y, O *= se.x, A *= se.y, _ += we, L += ge, j = Ti($), $ = Zw(j);
    }
  }
  return Ky({
    width: O,
    height: A,
    x: _,
    y: L
  });
}
function ig(c, u) {
  const f = ag(c).scrollLeft;
  return u ? u.left + f : Pc(Sl(c)).left + f;
}
function lR(c, u) {
  const f = c.getBoundingClientRect(), p = f.left + u.scrollLeft - ig(c, f), y = f.top + u.scrollTop;
  return {
    x: p,
    y
  };
}
function RL(c) {
  let {
    elements: u,
    rect: f,
    offsetParent: p,
    strategy: y
  } = c;
  const E = y === "fixed", S = Sl(p), g = u ? rg(u.floating) : !1;
  if (p === S || g && E)
    return f;
  let _ = {
    scrollLeft: 0,
    scrollTop: 0
  }, L = yl(1);
  const O = yl(0), A = gl(p);
  if ((A || !A && !E) && ((Ad(p) !== "body" || Ih(S)) && (_ = ag(p)), gl(p))) {
    const V = Pc(p);
    L = Rd(p), O.x = V.x + p.clientLeft, O.y = V.y + p.clientTop;
  }
  const U = S && !A && !E ? lR(S, _) : yl(0);
  return {
    width: f.width * L.x,
    height: f.height * L.y,
    x: f.x * L.x - _.scrollLeft * L.x + O.x + U.x,
    y: f.y * L.y - _.scrollTop * L.y + O.y + U.y
  };
}
function TL(c) {
  return Array.from(c.getClientRects());
}
function kL(c) {
  const u = Sl(c), f = ag(c), p = c.ownerDocument.body, y = Uc(u.scrollWidth, u.clientWidth, p.scrollWidth, p.clientWidth), E = Uc(u.scrollHeight, u.clientHeight, p.scrollHeight, p.clientHeight);
  let S = -f.scrollLeft + ig(c);
  const g = -f.scrollTop;
  return Ao(p).direction === "rtl" && (S += Uc(u.clientWidth, p.clientWidth) - y), {
    width: y,
    height: E,
    x: S,
    y: g
  };
}
const SC = 25;
function _L(c, u) {
  const f = Ti(c), p = Sl(c), y = f.visualViewport;
  let E = p.clientWidth, S = p.clientHeight, g = 0, _ = 0;
  if (y) {
    E = y.width, S = y.height;
    const O = fE();
    (!O || O && u === "fixed") && (g = y.offsetLeft, _ = y.offsetTop);
  }
  const L = ig(p);
  if (L <= 0) {
    const O = p.ownerDocument, A = O.body, U = getComputedStyle(A), V = O.compatMode === "CSS1Compat" && parseFloat(U.marginLeft) + parseFloat(U.marginRight) || 0, j = Math.abs(p.clientWidth - A.clientWidth - V);
    j <= SC && (E -= j);
  } else L <= SC && (E += L);
  return {
    width: E,
    height: S,
    x: g,
    y: _
  };
}
const OL = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function DL(c, u) {
  const f = Pc(c, !0, u === "fixed"), p = f.top + c.clientTop, y = f.left + c.clientLeft, E = gl(c) ? Rd(c) : yl(1), S = c.clientWidth * E.x, g = c.clientHeight * E.y, _ = y * E.x, L = p * E.y;
  return {
    width: S,
    height: g,
    x: _,
    y: L
  };
}
function wC(c, u, f) {
  let p;
  if (u === "viewport")
    p = _L(c, f);
  else if (u === "document")
    p = kL(Sl(c));
  else if (Do(u))
    p = DL(u, f);
  else {
    const y = oR(c);
    p = {
      x: u.x - y.x,
      y: u.y - y.y,
      width: u.width,
      height: u.height
    };
  }
  return Ky(p);
}
function uR(c, u) {
  const f = ys(c);
  return f === u || !Do(f) || kd(f) ? !1 : Ao(f).position === "fixed" || uR(f, u);
}
function AL(c, u) {
  const f = u.get(c);
  if (f)
    return f;
  let p = Hh(c, [], !1).filter((g) => Do(g) && Ad(g) !== "body"), y = null;
  const E = Ao(c).position === "fixed";
  let S = E ? ys(c) : c;
  for (; Do(S) && !kd(S); ) {
    const g = Ao(S), _ = cE(S);
    !_ && g.position === "fixed" && (y = null), (E ? !_ && !y : !_ && g.position === "static" && !!y && OL.has(y.position) || Ih(S) && !_ && uR(c, S)) ? p = p.filter((O) => O !== S) : y = g, S = ys(S);
  }
  return u.set(c, p), p;
}
function LL(c) {
  let {
    element: u,
    boundary: f,
    rootBoundary: p,
    strategy: y
  } = c;
  const S = [...f === "clippingAncestors" ? rg(u) ? [] : AL(u, this._c) : [].concat(f), p], g = S[0], _ = S.reduce((L, O) => {
    const A = wC(u, O, y);
    return L.top = Uc(A.top, L.top), L.right = Td(A.right, L.right), L.bottom = Td(A.bottom, L.bottom), L.left = Uc(A.left, L.left), L;
  }, wC(u, g, y));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
function NL(c) {
  const {
    width: u,
    height: f
  } = iR(c);
  return {
    width: u,
    height: f
  };
}
function ML(c, u, f) {
  const p = gl(u), y = Sl(u), E = f === "fixed", S = Pc(c, !0, E, u);
  let g = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const _ = yl(0);
  function L() {
    _.x = ig(y);
  }
  if (p || !p && !E)
    if ((Ad(u) !== "body" || Ih(y)) && (g = ag(u)), p) {
      const V = Pc(u, !0, E, u);
      _.x = V.x + u.clientLeft, _.y = V.y + u.clientTop;
    } else y && L();
  E && !p && y && L();
  const O = y && !p && !E ? lR(y, g) : yl(0), A = S.left + g.scrollLeft - _.x - O.x, U = S.top + g.scrollTop - _.y - O.y;
  return {
    x: A,
    y: U,
    width: S.width,
    height: S.height
  };
}
function Pw(c) {
  return Ao(c).position === "static";
}
function EC(c, u) {
  if (!gl(c) || Ao(c).position === "fixed")
    return null;
  if (u)
    return u(c);
  let f = c.offsetParent;
  return Sl(c) === f && (f = f.ownerDocument.body), f;
}
function sR(c, u) {
  const f = Ti(c);
  if (rg(c))
    return f;
  if (!gl(c)) {
    let y = ys(c);
    for (; y && !kd(y); ) {
      if (Do(y) && !Pw(y))
        return y;
      y = ys(y);
    }
    return f;
  }
  let p = EC(c, u);
  for (; p && mL(p) && Pw(p); )
    p = EC(p, u);
  return p && kd(p) && Pw(p) && !cE(p) ? f : p || EL(c) || f;
}
const zL = async function(c) {
  const u = this.getOffsetParent || sR, f = this.getDimensions, p = await f(c.floating);
  return {
    reference: ML(c.reference, await u(c.floating), c.strategy),
    floating: {
      x: 0,
      y: 0,
      width: p.width,
      height: p.height
    }
  };
};
function UL(c) {
  return Ao(c).direction === "rtl";
}
const FL = {
  convertOffsetParentRelativeRectToViewportRelativeRect: RL,
  getDocumentElement: Sl,
  getClippingRect: LL,
  getOffsetParent: sR,
  getElementRects: zL,
  getClientRects: TL,
  getDimensions: NL,
  getScale: Rd,
  isElement: Do,
  isRTL: UL
};
function cR(c, u) {
  return c.x === u.x && c.y === u.y && c.width === u.width && c.height === u.height;
}
function jL(c, u) {
  let f = null, p;
  const y = Sl(c);
  function E() {
    var g;
    clearTimeout(p), (g = f) == null || g.disconnect(), f = null;
  }
  function S(g, _) {
    g === void 0 && (g = !1), _ === void 0 && (_ = 1), E();
    const L = c.getBoundingClientRect(), {
      left: O,
      top: A,
      width: U,
      height: V
    } = L;
    if (g || u(), !U || !V)
      return;
    const j = By(A), $ = By(y.clientWidth - (O + U)), se = By(y.clientHeight - (A + V)), Ce = By(O), we = {
      rootMargin: -j + "px " + -$ + "px " + -se + "px " + -Ce + "px",
      threshold: Uc(0, Td(1, _)) || 1
    };
    let ge = !0;
    function Ie(be) {
      const De = be[0].intersectionRatio;
      if (De !== _) {
        if (!ge)
          return S();
        De ? S(!1, De) : p = setTimeout(() => {
          S(!1, 1e-7);
        }, 1e3);
      }
      De === 1 && !cR(L, c.getBoundingClientRect()) && S(), ge = !1;
    }
    try {
      f = new IntersectionObserver(Ie, {
        ...we,
        // Handle <iframe>s
        root: y.ownerDocument
      });
    } catch {
      f = new IntersectionObserver(Ie, we);
    }
    f.observe(c);
  }
  return S(!0), E;
}
function PL(c, u, f, p) {
  p === void 0 && (p = {});
  const {
    ancestorScroll: y = !0,
    ancestorResize: E = !0,
    elementResize: S = typeof ResizeObserver == "function",
    layoutShift: g = typeof IntersectionObserver == "function",
    animationFrame: _ = !1
  } = p, L = dE(c), O = y || E ? [...L ? Hh(L) : [], ...Hh(u)] : [];
  O.forEach((Ce) => {
    y && Ce.addEventListener("scroll", f, {
      passive: !0
    }), E && Ce.addEventListener("resize", f);
  });
  const A = L && g ? jL(L, f) : null;
  let U = -1, V = null;
  S && (V = new ResizeObserver((Ce) => {
    let [Ae] = Ce;
    Ae && Ae.target === L && V && (V.unobserve(u), cancelAnimationFrame(U), U = requestAnimationFrame(() => {
      var we;
      (we = V) == null || we.observe(u);
    })), f();
  }), L && !_ && V.observe(L), V.observe(u));
  let j, $ = _ ? Pc(c) : null;
  _ && se();
  function se() {
    const Ce = Pc(c);
    $ && !cR($, Ce) && f(), $ = Ce, j = requestAnimationFrame(se);
  }
  return f(), () => {
    var Ce;
    O.forEach((Ae) => {
      y && Ae.removeEventListener("scroll", f), E && Ae.removeEventListener("resize", f);
    }), A == null || A(), (Ce = V) == null || Ce.disconnect(), V = null, _ && cancelAnimationFrame(j);
  };
}
const HL = dL, $L = pL, BL = sL, VL = uL, bC = (c, u, f) => {
  const p = /* @__PURE__ */ new Map(), y = {
    platform: FL,
    ...f
  }, E = {
    ...y.platform,
    _c: p
  };
  return lL(c, u, {
    ...y,
    platform: E
  });
};
var fR = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(c) {
  (function() {
    var u = {}.hasOwnProperty;
    function f() {
      for (var E = "", S = 0; S < arguments.length; S++) {
        var g = arguments[S];
        g && (E = y(E, p(g)));
      }
      return E;
    }
    function p(E) {
      if (typeof E == "string" || typeof E == "number")
        return E;
      if (typeof E != "object")
        return "";
      if (Array.isArray(E))
        return f.apply(null, E);
      if (E.toString !== Object.prototype.toString && !E.toString.toString().includes("[native code]"))
        return E.toString();
      var S = "";
      for (var g in E)
        u.call(E, g) && E[g] && (S = y(S, g));
      return S;
    }
    function y(E, S) {
      return S ? E ? E + " " + S : E + S : E;
    }
    c.exports ? (f.default = f, c.exports = f) : window.classNames = f;
  })();
})(fR);
var IL = fR.exports;
const Xy = /* @__PURE__ */ lE(IL);
var xC = {};
const YL = "react-tooltip-core-styles", WL = "react-tooltip-base-styles", CC = { core: !1, base: !1 };
function RC({ css: c, id: u = WL, type: f = "base", ref: p }) {
  var y, E;
  if (!c || typeof document > "u" || CC[f] || f === "core" && typeof process < "u" && (!((y = process == null ? void 0 : xC) === null || y === void 0) && y.REACT_TOOLTIP_DISABLE_CORE_STYLES) || f !== "base" && typeof process < "u" && (!((E = process == null ? void 0 : xC) === null || E === void 0) && E.REACT_TOOLTIP_DISABLE_BASE_STYLES)) return;
  f === "core" && (u = YL), p || (p = {});
  const { insertAt: S } = p;
  if (document.getElementById(u)) return;
  const g = document.head || document.getElementsByTagName("head")[0], _ = document.createElement("style");
  _.id = u, _.type = "text/css", S === "top" && g.firstChild ? g.insertBefore(_, g.firstChild) : g.appendChild(_), _.styleSheet ? _.styleSheet.cssText = c : _.appendChild(document.createTextNode(c)), CC[f] = !0;
}
const TC = async ({ elementReference: c = null, tooltipReference: u = null, tooltipArrowReference: f = null, place: p = "top", offset: y = 10, strategy: E = "absolute", middlewares: S = [HL(Number(y)), BL({ fallbackAxisSideDirection: "start" }), $L({ padding: 5 })], border: g, arrowSize: _ = 8 }) => {
  if (!c) return { tooltipStyles: {}, tooltipArrowStyles: {}, place: p };
  if (u === null) return { tooltipStyles: {}, tooltipArrowStyles: {}, place: p };
  const L = S;
  return f ? (L.push(VL({ element: f, padding: 5 })), bC(c, u, { placement: p, strategy: E, middleware: L }).then(({ x: O, y: A, placement: U, middlewareData: V }) => {
    var j, $;
    const se = { left: `${O}px`, top: `${A}px`, border: g }, { x: Ce, y: Ae } = (j = V.arrow) !== null && j !== void 0 ? j : { x: 0, y: 0 }, we = ($ = { top: "bottom", right: "left", bottom: "top", left: "right" }[U.split("-")[0]]) !== null && $ !== void 0 ? $ : "bottom", ge = g && { borderBottom: g, borderRight: g };
    let Ie = 0;
    if (g) {
      const be = `${g}`.match(/(\d+)px/);
      Ie = be != null && be[1] ? Number(be[1]) : 1;
    }
    return { tooltipStyles: se, tooltipArrowStyles: { left: Ce != null ? `${Ce}px` : "", top: Ae != null ? `${Ae}px` : "", right: "", bottom: "", ...ge, [we]: `-${_ / 2 + Ie}px` }, place: U };
  })) : bC(c, u, { placement: "bottom", strategy: E, middleware: L }).then(({ x: O, y: A, placement: U }) => ({ tooltipStyles: { left: `${O}px`, top: `${A}px` }, tooltipArrowStyles: {}, place: U }));
}, kC = (c, u) => !("CSS" in window && "supports" in window.CSS) || window.CSS.supports(c, u), _C = (c, u, f) => {
  let p = null;
  const y = function(...E) {
    const S = () => {
      p = null;
    };
    !p && (c.apply(this, E), p = setTimeout(S, u));
  };
  return y.cancel = () => {
    p && (clearTimeout(p), p = null);
  }, y;
}, OC = (c) => c !== null && !Array.isArray(c) && typeof c == "object", Jw = (c, u) => {
  if (c === u) return !0;
  if (Array.isArray(c) && Array.isArray(u)) return c.length === u.length && c.every((y, E) => Jw(y, u[E]));
  if (Array.isArray(c) !== Array.isArray(u)) return !1;
  if (!OC(c) || !OC(u)) return c === u;
  const f = Object.keys(c), p = Object.keys(u);
  return f.length === p.length && f.every((y) => Jw(c[y], u[y]));
}, qL = (c) => {
  if (!(c instanceof HTMLElement || c instanceof SVGElement)) return !1;
  const u = getComputedStyle(c);
  return ["overflow", "overflow-x", "overflow-y"].some((f) => {
    const p = u.getPropertyValue(f);
    return p === "auto" || p === "scroll";
  });
}, DC = (c) => {
  if (!c) return null;
  let u = c.parentElement;
  for (; u; ) {
    if (qL(u)) return u;
    u = u.parentElement;
  }
  return document.scrollingElement || document.documentElement;
}, QL = typeof window < "u" ? Ne.useLayoutEffect : Ne.useEffect, Qi = (c) => {
  c.current && (clearTimeout(c.current), c.current = null);
}, GL = "DEFAULT_TOOLTIP_ID", KL = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, XL = Ne.createContext({ getTooltipData: () => KL });
function dR(c = GL) {
  return Ne.useContext(XL).getTooltipData(c);
}
var Cd = { tooltip: "core-styles-module_tooltip__3vRRp", fixed: "core-styles-module_fixed__pcSol", arrow: "core-styles-module_arrow__cvMwQ", noArrow: "core-styles-module_noArrow__xock6", clickable: "core-styles-module_clickable__ZuTTB", show: "core-styles-module_show__Nt9eE", closing: "core-styles-module_closing__sGnxF" }, Hw = { tooltip: "styles-module_tooltip__mnnfp", arrow: "styles-module_arrow__K0L3T", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const ZL = ({ forwardRef: c, id: u, className: f, classNameArrow: p, variant: y = "dark", anchorId: E, anchorSelect: S, place: g = "top", offset: _ = 10, events: L = ["hover"], openOnClick: O = !1, positionStrategy: A = "absolute", middlewares: U, wrapper: V, delayShow: j = 0, delayHide: $ = 0, float: se = !1, hidden: Ce = !1, noArrow: Ae = !1, clickable: we = !1, closeOnEsc: ge = !1, closeOnScroll: Ie = !1, closeOnResize: be = !1, openEvents: De, closeEvents: We, globalCloseEvents: Ut, imperativeModeOnly: Dt, style: B, position: ee, afterShow: pe, afterHide: ne, disableTooltip: me, content: Se, contentWrapperRef: he, isOpen: I, defaultIsOpen: oe = !1, setIsOpen: k, previousActiveAnchor: K, activeAnchor: fe, setActiveAnchor: Be, border: Ye, opacity: lt, arrowColor: et, arrowSize: dt = 8, role: ut = "tooltip" }) => {
  var Ft;
  const jt = Ne.useRef(null), Cn = Ne.useRef(null), Rn = Ne.useRef(null), Pn = Ne.useRef(null), cn = Ne.useRef(null), [Dn, Hn] = Ne.useState({ tooltipStyles: {}, tooltipArrowStyles: {}, place: g }), [Yt, Tn] = Ne.useState(!1), [Jn, An] = Ne.useState(!1), [Nt, vr] = Ne.useState(null), Or = Ne.useRef(!1), Bn = Ne.useRef(null), { anchorRefs: Dr, setActiveAnchor: Vn } = dR(u), or = Ne.useRef(!1), [Zt, Er] = Ne.useState([]), lr = Ne.useRef(!1), mr = O || L.includes("click"), Le = mr || (De == null ? void 0 : De.click) || (De == null ? void 0 : De.dblclick) || (De == null ? void 0 : De.mousedown), qe = De ? { ...De } : { mouseover: !0, focus: !0, mouseenter: !1, click: !1, dblclick: !1, mousedown: !1 };
  !De && mr && Object.assign(qe, { mouseenter: !1, focus: !1, mouseover: !1, click: !0 });
  const gt = We ? { ...We } : { mouseout: !0, blur: !0, mouseleave: !1, click: !1, dblclick: !1, mouseup: !1 };
  !We && mr && Object.assign(gt, { mouseleave: !1, blur: !1, mouseout: !1 });
  const wt = Ut ? { ...Ut } : { escape: ge || !1, scroll: Ie || !1, resize: be || !1, clickOutsideAnchor: Le || !1 };
  Dt && (Object.assign(qe, { mouseover: !1, focus: !1, mouseenter: !1, click: !1, dblclick: !1, mousedown: !1 }), Object.assign(gt, { mouseout: !1, blur: !1, mouseleave: !1, click: !1, dblclick: !1, mouseup: !1 }), Object.assign(wt, { escape: !1, scroll: !1, resize: !1, clickOutsideAnchor: !1 })), QL(() => (lr.current = !0, () => {
    lr.current = !1;
  }), []);
  const Et = (_e) => {
    lr.current && (_e && An(!0), setTimeout(() => {
      lr.current && (k == null || k(_e), I === void 0 && Tn(_e));
    }, 10));
  };
  Ne.useEffect(() => {
    if (u) {
      if (Yt) {
        Ze(K);
        const je = _e(fe), Lt = [.../* @__PURE__ */ new Set([...je, u])].filter(Boolean).join(" ");
        fe == null || fe.setAttribute("aria-describedby", Lt);
      } else Ze(fe);
      return () => {
        Ze(fe), Ze(K);
      };
    }
    function _e(je) {
      var Lt;
      return ((Lt = je == null ? void 0 : je.getAttribute("aria-describedby")) === null || Lt === void 0 ? void 0 : Lt.split(" ")) || [];
    }
    function Ze(je) {
      const Lt = _e(je).filter((tn) => tn !== u);
      Lt.length ? je == null || je.setAttribute("aria-describedby", Lt.join(" ")) : je == null || je.removeAttribute("aria-describedby");
    }
  }, [fe, Yt, u, K]), Ne.useEffect(() => {
    if (I === void 0) return () => null;
    I && An(!0);
    const _e = setTimeout(() => {
      Tn(I);
    }, 10);
    return () => {
      clearTimeout(_e);
    };
  }, [I]), Ne.useEffect(() => {
    if (Yt !== Or.current) if (Qi(cn), Or.current = Yt, Yt) pe == null || pe();
    else {
      const _e = ((Ze) => {
        const je = Ze.match(/^([\d.]+)(ms|s)$/);
        if (!je) return 0;
        const [, Lt, tn] = je;
        return Number(Lt) * (tn === "ms" ? 1 : 1e3);
      })(getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay"));
      cn.current = setTimeout(() => {
        An(!1), vr(null), ne == null || ne();
      }, _e + 25);
    }
  }, [Yt]);
  const wn = (_e) => {
    Hn((Ze) => Jw(Ze, _e) ? Ze : _e);
  }, fn = (_e = j) => {
    Qi(Rn), Jn ? Et(!0) : Rn.current = setTimeout(() => {
      Et(!0);
    }, _e);
  }, In = (_e = $) => {
    Qi(Pn), Pn.current = setTimeout(() => {
      or.current || Et(!1);
    }, _e);
  }, Wt = (_e) => {
    var Ze;
    if (!_e) return;
    const je = (Ze = _e.currentTarget) !== null && Ze !== void 0 ? Ze : _e.target;
    if (!(je != null && je.isConnected)) return Be(null), void Vn({ current: null });
    j ? fn() : Et(!0), Be(je), Vn({ current: je }), Qi(Pn);
  }, Ln = () => {
    we ? In($ || 100) : $ ? In() : Et(!1), Qi(Rn);
  }, Pt = ({ x: _e, y: Ze }) => {
    var je;
    const Lt = { getBoundingClientRect: () => ({ x: _e, y: Ze, width: 0, height: 0, top: Ze, left: _e, right: _e, bottom: Ze }) };
    TC({ place: (je = Nt == null ? void 0 : Nt.place) !== null && je !== void 0 ? je : g, offset: _, elementReference: Lt, tooltipReference: jt.current, tooltipArrowReference: Cn.current, strategy: A, middlewares: U, border: Ye, arrowSize: dt }).then((tn) => {
      wn(tn);
    });
  }, Jt = (_e) => {
    if (!_e) return;
    const Ze = _e, je = { x: Ze.clientX, y: Ze.clientY };
    Pt(je), Bn.current = je;
  }, jr = (_e) => {
    var Ze;
    if (!Yt) return;
    const je = _e.target;
    je.isConnected && (!((Ze = jt.current) === null || Ze === void 0) && Ze.contains(je) || [document.querySelector(`[id='${E}']`), ...Zt].some((Lt) => Lt == null ? void 0 : Lt.contains(je)) || (Et(!1), Qi(Rn)));
  }, Pr = _C(Wt, 50), dn = _C(Ln, 50), Yn = (_e) => {
    dn.cancel(), Pr(_e);
  }, ot = () => {
    Pr.cancel(), dn();
  }, At = Ne.useCallback(() => {
    var _e, Ze;
    const je = (_e = Nt == null ? void 0 : Nt.position) !== null && _e !== void 0 ? _e : ee;
    je ? Pt(je) : se ? Bn.current && Pt(Bn.current) : fe != null && fe.isConnected && TC({ place: (Ze = Nt == null ? void 0 : Nt.place) !== null && Ze !== void 0 ? Ze : g, offset: _, elementReference: fe, tooltipReference: jt.current, tooltipArrowReference: Cn.current, strategy: A, middlewares: U, border: Ye, arrowSize: dt }).then((Lt) => {
      lr.current && wn(Lt);
    });
  }, [Yt, fe, Se, B, g, Nt == null ? void 0 : Nt.place, _, A, ee, Nt == null ? void 0 : Nt.position, se, dt]);
  Ne.useEffect(() => {
    var _e, Ze;
    const je = new Set(Dr);
    Zt.forEach((zt) => {
      me != null && me(zt) || je.add({ current: zt });
    });
    const Lt = document.querySelector(`[id='${E}']`);
    Lt && !(me != null && me(Lt)) && je.add({ current: Lt });
    const tn = () => {
      Et(!1);
    }, yr = DC(fe), N = DC(jt.current);
    wt.scroll && (window.addEventListener("scroll", tn), yr == null || yr.addEventListener("scroll", tn), N == null || N.addEventListener("scroll", tn));
    let le = null;
    wt.resize ? window.addEventListener("resize", tn) : fe && jt.current && (le = PL(fe, jt.current, At, { ancestorResize: !0, elementResize: !0, layoutShift: !0 }));
    const Re = (zt) => {
      zt.key === "Escape" && Et(!1);
    };
    wt.escape && window.addEventListener("keydown", Re), wt.clickOutsideAnchor && window.addEventListener("click", jr);
    const ye = [], Rt = (zt) => !!(zt != null && zt.target && (fe != null && fe.contains(zt.target))), Ht = (zt) => {
      Yt && Rt(zt) || Wt(zt);
    }, _t = (zt) => {
      Yt && Rt(zt) && Ln();
    }, it = ["mouseover", "mouseout", "mouseenter", "mouseleave", "focus", "blur"], Wn = ["click", "dblclick", "mousedown", "mouseup"];
    Object.entries(qe).forEach(([zt, Vt]) => {
      Vt && (it.includes(zt) ? ye.push({ event: zt, listener: Yn }) : Wn.includes(zt) && ye.push({ event: zt, listener: Ht }));
    }), Object.entries(gt).forEach(([zt, Vt]) => {
      Vt && (it.includes(zt) ? ye.push({ event: zt, listener: ot }) : Wn.includes(zt) && ye.push({ event: zt, listener: _t }));
    }), se && ye.push({ event: "pointermove", listener: Jt });
    const pn = () => {
      or.current = !0;
    }, hn = () => {
      or.current = !1, Ln();
    }, xr = we && (gt.mouseout || gt.mouseleave);
    return xr && ((_e = jt.current) === null || _e === void 0 || _e.addEventListener("mouseover", pn), (Ze = jt.current) === null || Ze === void 0 || Ze.addEventListener("mouseout", hn)), ye.forEach(({ event: zt, listener: Vt }) => {
      je.forEach((Ar) => {
        var hi;
        (hi = Ar.current) === null || hi === void 0 || hi.addEventListener(zt, Vt);
      });
    }), () => {
      var zt, Vt;
      wt.scroll && (window.removeEventListener("scroll", tn), yr == null || yr.removeEventListener("scroll", tn), N == null || N.removeEventListener("scroll", tn)), wt.resize ? window.removeEventListener("resize", tn) : le == null || le(), wt.clickOutsideAnchor && window.removeEventListener("click", jr), wt.escape && window.removeEventListener("keydown", Re), xr && ((zt = jt.current) === null || zt === void 0 || zt.removeEventListener("mouseover", pn), (Vt = jt.current) === null || Vt === void 0 || Vt.removeEventListener("mouseout", hn)), ye.forEach(({ event: Ar, listener: hi }) => {
        je.forEach((Ya) => {
          var Tt;
          (Tt = Ya.current) === null || Tt === void 0 || Tt.removeEventListener(Ar, hi);
        });
      });
    };
  }, [fe, At, Jn, Dr, Zt, De, We, Ut, mr, j, $]), Ne.useEffect(() => {
    var _e, Ze;
    let je = (Ze = (_e = Nt == null ? void 0 : Nt.anchorSelect) !== null && _e !== void 0 ? _e : S) !== null && Ze !== void 0 ? Ze : "";
    !je && u && (je = `[data-tooltip-id='${u.replace(/'/g, "\\'")}']`);
    const Lt = new MutationObserver((tn) => {
      const yr = [], N = [];
      tn.forEach((le) => {
        if (le.type === "attributes" && le.attributeName === "data-tooltip-id" && (le.target.getAttribute("data-tooltip-id") === u ? yr.push(le.target) : le.oldValue === u && N.push(le.target)), le.type === "childList") {
          if (fe) {
            const Re = [...le.removedNodes].filter((ye) => ye.nodeType === 1);
            if (je) try {
              N.push(...Re.filter((ye) => ye.matches(je))), N.push(...Re.flatMap((ye) => [...ye.querySelectorAll(je)]));
            } catch {
            }
            Re.some((ye) => {
              var Rt;
              return !!(!((Rt = ye == null ? void 0 : ye.contains) === null || Rt === void 0) && Rt.call(ye, fe)) && (An(!1), Et(!1), Be(null), Qi(Rn), Qi(Pn), !0);
            });
          }
          if (je) try {
            const Re = [...le.addedNodes].filter((ye) => ye.nodeType === 1);
            yr.push(...Re.filter((ye) => ye.matches(je))), yr.push(...Re.flatMap((ye) => [...ye.querySelectorAll(je)]));
          } catch {
          }
        }
      }), (yr.length || N.length) && Er((le) => [...le.filter((Re) => !N.includes(Re)), ...yr]);
    });
    return Lt.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"], attributeOldValue: !0 }), () => {
      Lt.disconnect();
    };
  }, [u, S, Nt == null ? void 0 : Nt.anchorSelect, fe]), Ne.useEffect(() => {
    At();
  }, [At]), Ne.useEffect(() => {
    if (!(he != null && he.current)) return () => null;
    const _e = new ResizeObserver(() => {
      setTimeout(() => At());
    });
    return _e.observe(he.current), () => {
      _e.disconnect();
    };
  }, [Se, he == null ? void 0 : he.current]), Ne.useEffect(() => {
    var _e;
    const Ze = document.querySelector(`[id='${E}']`), je = [...Zt, Ze];
    fe && je.includes(fe) || Be((_e = Zt[0]) !== null && _e !== void 0 ? _e : Ze);
  }, [E, Zt, fe]), Ne.useEffect(() => (oe && Et(!0), () => {
    Qi(Rn), Qi(Pn);
  }), []), Ne.useEffect(() => {
    var _e;
    let Ze = (_e = Nt == null ? void 0 : Nt.anchorSelect) !== null && _e !== void 0 ? _e : S;
    if (!Ze && u && (Ze = `[data-tooltip-id='${u.replace(/'/g, "\\'")}']`), Ze) try {
      const je = Array.from(document.querySelectorAll(Ze));
      Er(je);
    } catch {
      Er([]);
    }
  }, [u, S, Nt == null ? void 0 : Nt.anchorSelect]), Ne.useEffect(() => {
    Rn.current && (Qi(Rn), fn(j));
  }, [j]);
  const Nn = (Ft = Nt == null ? void 0 : Nt.content) !== null && Ft !== void 0 ? Ft : Se, br = Yt && Object.keys(Dn.tooltipStyles).length > 0;
  return Ne.useImperativeHandle(c, () => ({ open: (_e) => {
    if (_e != null && _e.anchorSelect) try {
      document.querySelector(_e.anchorSelect);
    } catch {
      return void console.warn(`[react-tooltip] "${_e.anchorSelect}" is not a valid CSS selector`);
    }
    vr(_e ?? null), _e != null && _e.delay ? fn(_e.delay) : Et(!0);
  }, close: (_e) => {
    _e != null && _e.delay ? In(_e.delay) : Et(!1);
  }, activeAnchor: fe, place: Dn.place, isOpen: !!(Jn && !Ce && Nn && br) })), Jn && !Ce && Nn ? vs.createElement(V, { id: u, role: ut, className: Xy("react-tooltip", Cd.tooltip, Hw.tooltip, Hw[y], f, `react-tooltip__place-${Dn.place}`, Cd[br ? "show" : "closing"], br ? "react-tooltip__show" : "react-tooltip__closing", A === "fixed" && Cd.fixed, we && Cd.clickable), onTransitionEnd: (_e) => {
    Qi(cn), Yt || _e.propertyName !== "opacity" || (An(!1), vr(null), ne == null || ne());
  }, style: { ...B, ...Dn.tooltipStyles, opacity: lt !== void 0 && br ? lt : void 0 }, ref: jt }, Nn, vs.createElement(V, { className: Xy("react-tooltip-arrow", Cd.arrow, Hw.arrow, p, Ae && Cd.noArrow), style: { ...Dn.tooltipArrowStyles, background: et ? `linear-gradient(to right bottom, transparent 50%, ${et} 50%)` : void 0, "--rt-arrow-size": `${dt}px` }, ref: Cn })) : null;
}, JL = ({ content: c }) => vs.createElement("span", { dangerouslySetInnerHTML: { __html: c } }), eN = vs.forwardRef(({ id: c, anchorId: u, anchorSelect: f, content: p, html: y, render: E, className: S, classNameArrow: g, variant: _ = "dark", place: L = "top", offset: O = 10, wrapper: A = "div", children: U = null, events: V = ["hover"], openOnClick: j = !1, positionStrategy: $ = "absolute", middlewares: se, delayShow: Ce = 0, delayHide: Ae = 0, float: we = !1, hidden: ge = !1, noArrow: Ie = !1, clickable: be = !1, closeOnEsc: De = !1, closeOnScroll: We = !1, closeOnResize: Ut = !1, openEvents: Dt, closeEvents: B, globalCloseEvents: ee, imperativeModeOnly: pe = !1, style: ne, position: me, isOpen: Se, defaultIsOpen: he = !1, disableStyleInjection: I = !1, border: oe, opacity: k, arrowColor: K, arrowSize: fe, setIsOpen: Be, afterShow: Ye, afterHide: lt, disableTooltip: et, role: dt = "tooltip" }, ut) => {
  const [Ft, jt] = Ne.useState(p), [Cn, Rn] = Ne.useState(y), [Pn, cn] = Ne.useState(L), [Dn, Hn] = Ne.useState(_), [Yt, Tn] = Ne.useState(O), [Jn, An] = Ne.useState(Ce), [Nt, vr] = Ne.useState(Ae), [Or, Bn] = Ne.useState(we), [Dr, Vn] = Ne.useState(ge), [or, Zt] = Ne.useState(A), [Er, lr] = Ne.useState(V), [mr, Le] = Ne.useState($), [qe, gt] = Ne.useState(null), [wt, Et] = Ne.useState(null), wn = Ne.useRef(null), fn = Ne.useRef(I), { anchorRefs: In, activeAnchor: Wt } = dR(c), Ln = (dn) => dn == null ? void 0 : dn.getAttributeNames().reduce((Yn, ot) => {
    var At;
    return ot.startsWith("data-tooltip-") && (Yn[ot.replace(/^data-tooltip-/, "")] = (At = dn == null ? void 0 : dn.getAttribute(ot)) !== null && At !== void 0 ? At : null), Yn;
  }, {}), Pt = (dn) => {
    const Yn = { place: (ot) => {
      var At;
      cn((At = ot) !== null && At !== void 0 ? At : L);
    }, content: (ot) => {
      jt(ot ?? p);
    }, html: (ot) => {
      Rn(ot ?? y);
    }, variant: (ot) => {
      var At;
      Hn((At = ot) !== null && At !== void 0 ? At : _);
    }, offset: (ot) => {
      Tn(ot === null ? O : Number(ot));
    }, wrapper: (ot) => {
      var At;
      Zt((At = ot) !== null && At !== void 0 ? At : A);
    }, events: (ot) => {
      const At = ot == null ? void 0 : ot.split(" ");
      lr(At ?? V);
    }, "position-strategy": (ot) => {
      var At;
      Le((At = ot) !== null && At !== void 0 ? At : $);
    }, "delay-show": (ot) => {
      An(ot === null ? Ce : Number(ot));
    }, "delay-hide": (ot) => {
      vr(ot === null ? Ae : Number(ot));
    }, float: (ot) => {
      Bn(ot === null ? we : ot === "true");
    }, hidden: (ot) => {
      Vn(ot === null ? ge : ot === "true");
    }, "class-name": (ot) => {
      gt(ot);
    } };
    Object.values(Yn).forEach((ot) => ot(null)), Object.entries(dn).forEach(([ot, At]) => {
      var Nn;
      (Nn = Yn[ot]) === null || Nn === void 0 || Nn.call(Yn, At);
    });
  };
  Ne.useEffect(() => {
    jt(p);
  }, [p]), Ne.useEffect(() => {
    Rn(y);
  }, [y]), Ne.useEffect(() => {
    cn(L);
  }, [L]), Ne.useEffect(() => {
    Hn(_);
  }, [_]), Ne.useEffect(() => {
    Tn(O);
  }, [O]), Ne.useEffect(() => {
    An(Ce);
  }, [Ce]), Ne.useEffect(() => {
    vr(Ae);
  }, [Ae]), Ne.useEffect(() => {
    Bn(we);
  }, [we]), Ne.useEffect(() => {
    Vn(ge);
  }, [ge]), Ne.useEffect(() => {
    Le($);
  }, [$]), Ne.useEffect(() => {
    fn.current !== I && console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.");
  }, [I]), Ne.useEffect(() => {
    typeof window < "u" && window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles", { detail: { disableCore: I === "core", disableBase: I } }));
  }, []), Ne.useEffect(() => {
    var dn;
    const Yn = new Set(In);
    let ot = f;
    if (!ot && c && (ot = `[data-tooltip-id='${c.replace(/'/g, "\\'")}']`), ot) try {
      document.querySelectorAll(ot).forEach((Ze) => {
        Yn.add({ current: Ze });
      });
    } catch {
      console.warn(`[react-tooltip] "${ot}" is not a valid CSS selector`);
    }
    const At = document.querySelector(`[id='${u}']`);
    if (At && Yn.add({ current: At }), !Yn.size) return () => null;
    const Nn = (dn = wt ?? At) !== null && dn !== void 0 ? dn : Wt.current, br = new MutationObserver((Ze) => {
      Ze.forEach((je) => {
        var Lt;
        if (!Nn || je.type !== "attributes" || !(!((Lt = je.attributeName) === null || Lt === void 0) && Lt.startsWith("data-tooltip-"))) return;
        const tn = Ln(Nn);
        Pt(tn);
      });
    }), _e = { attributes: !0, childList: !1, subtree: !1 };
    if (Nn) {
      const Ze = Ln(Nn);
      Pt(Ze), br.observe(Nn, _e);
    }
    return () => {
      br.disconnect();
    };
  }, [In, Wt, wt, u, f]), Ne.useEffect(() => {
    ne != null && ne.border && console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."), oe && !kC("border", `${oe}`) && console.warn(`[react-tooltip] "${oe}" is not a valid \`border\`.`), ne != null && ne.opacity && console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."), k && !kC("opacity", `${k}`) && console.warn(`[react-tooltip] "${k}" is not a valid \`opacity\`.`);
  }, []);
  let Jt = U;
  const jr = Ne.useRef(null);
  if (E) {
    const dn = E({ content: (wt == null ? void 0 : wt.getAttribute("data-tooltip-content")) || Ft || null, activeAnchor: wt });
    Jt = dn ? vs.createElement("div", { ref: jr, className: "react-tooltip-content-wrapper" }, dn) : null;
  } else Ft && (Jt = Ft);
  Cn && (Jt = vs.createElement(JL, { content: Cn }));
  const Pr = { forwardRef: ut, id: c, anchorId: u, anchorSelect: f, className: Xy(S, qe), classNameArrow: g, content: Jt, contentWrapperRef: jr, place: Pn, variant: Dn, offset: Yt, wrapper: or, events: Er, openOnClick: j, positionStrategy: mr, middlewares: se, delayShow: Jn, delayHide: Nt, float: Or, hidden: Dr, noArrow: Ie, clickable: be, closeOnEsc: De, closeOnScroll: We, closeOnResize: Ut, openEvents: Dt, closeEvents: B, globalCloseEvents: ee, imperativeModeOnly: pe, style: ne, position: me, isOpen: Se, defaultIsOpen: he, border: oe, opacity: k, arrowColor: K, arrowSize: fe, setIsOpen: Be, afterShow: Ye, afterHide: lt, disableTooltip: et, activeAnchor: wt, previousActiveAnchor: wn.current, setActiveAnchor: (dn) => {
    Et((Yn) => (dn != null && dn.isSameNode(Yn) || (wn.current = Yn), dn));
  }, role: dt };
  return vs.createElement(ZL, { ...Pr });
});
typeof window < "u" && window.addEventListener("react-tooltip-inject-styles", (c) => {
  c.detail.disableCore || RC({ css: ":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s;--rt-arrow-size:8px}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit;z-index:-1}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}", type: "core" }), c.detail.disableBase || RC({ css: `
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:var(--rt-arrow-size);height:var(--rt-arrow-size)}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`, type: "base" });
});
function pR(c, u) {
  return function() {
    return c.apply(u, arguments);
  };
}
const { toString: tN } = Object.prototype, { getPrototypeOf: pE } = Object, og = /* @__PURE__ */ ((c) => (u) => {
  const f = tN.call(u);
  return c[f] || (c[f] = f.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), wl = (c) => (c = c.toLowerCase(), (u) => og(u) === c), lg = (c) => (u) => typeof u === c, { isArray: Ld } = Array, $h = lg("undefined");
function nN(c) {
  return c !== null && !$h(c) && c.constructor !== null && !$h(c.constructor) && Gi(c.constructor.isBuffer) && c.constructor.isBuffer(c);
}
const hR = wl("ArrayBuffer");
function rN(c) {
  let u;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? u = ArrayBuffer.isView(c) : u = c && c.buffer && hR(c.buffer), u;
}
const aN = lg("string"), Gi = lg("function"), vR = lg("number"), ug = (c) => c !== null && typeof c == "object", iN = (c) => c === !0 || c === !1, Wy = (c) => {
  if (og(c) !== "object")
    return !1;
  const u = pE(c);
  return (u === null || u === Object.prototype || Object.getPrototypeOf(u) === null) && !(Symbol.toStringTag in c) && !(Symbol.iterator in c);
}, oN = wl("Date"), lN = wl("File"), uN = wl("Blob"), sN = wl("FileList"), cN = (c) => ug(c) && Gi(c.pipe), fN = (c) => {
  let u;
  return c && (typeof FormData == "function" && c instanceof FormData || Gi(c.append) && ((u = og(c)) === "formdata" || // detect form-data instance
  u === "object" && Gi(c.toString) && c.toString() === "[object FormData]"));
}, dN = wl("URLSearchParams"), pN = (c) => c.trim ? c.trim() : c.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Yh(c, u, { allOwnKeys: f = !1 } = {}) {
  if (c === null || typeof c > "u")
    return;
  let p, y;
  if (typeof c != "object" && (c = [c]), Ld(c))
    for (p = 0, y = c.length; p < y; p++)
      u.call(null, c[p], p, c);
  else {
    const E = f ? Object.getOwnPropertyNames(c) : Object.keys(c), S = E.length;
    let g;
    for (p = 0; p < S; p++)
      g = E[p], u.call(null, c[g], g, c);
  }
}
function mR(c, u) {
  u = u.toLowerCase();
  const f = Object.keys(c);
  let p = f.length, y;
  for (; p-- > 0; )
    if (y = f[p], u === y.toLowerCase())
      return y;
  return null;
}
const yR = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, gR = (c) => !$h(c) && c !== yR;
function eE() {
  const { caseless: c } = gR(this) && this || {}, u = {}, f = (p, y) => {
    const E = c && mR(u, y) || y;
    Wy(u[E]) && Wy(p) ? u[E] = eE(u[E], p) : Wy(p) ? u[E] = eE({}, p) : Ld(p) ? u[E] = p.slice() : u[E] = p;
  };
  for (let p = 0, y = arguments.length; p < y; p++)
    arguments[p] && Yh(arguments[p], f);
  return u;
}
const hN = (c, u, f, { allOwnKeys: p } = {}) => (Yh(u, (y, E) => {
  f && Gi(y) ? c[E] = pR(y, f) : c[E] = y;
}, { allOwnKeys: p }), c), vN = (c) => (c.charCodeAt(0) === 65279 && (c = c.slice(1)), c), mN = (c, u, f, p) => {
  c.prototype = Object.create(u.prototype, p), c.prototype.constructor = c, Object.defineProperty(c, "super", {
    value: u.prototype
  }), f && Object.assign(c.prototype, f);
}, yN = (c, u, f, p) => {
  let y, E, S;
  const g = {};
  if (u = u || {}, c == null) return u;
  do {
    for (y = Object.getOwnPropertyNames(c), E = y.length; E-- > 0; )
      S = y[E], (!p || p(S, c, u)) && !g[S] && (u[S] = c[S], g[S] = !0);
    c = f !== !1 && pE(c);
  } while (c && (!f || f(c, u)) && c !== Object.prototype);
  return u;
}, gN = (c, u, f) => {
  c = String(c), (f === void 0 || f > c.length) && (f = c.length), f -= u.length;
  const p = c.indexOf(u, f);
  return p !== -1 && p === f;
}, SN = (c) => {
  if (!c) return null;
  if (Ld(c)) return c;
  let u = c.length;
  if (!vR(u)) return null;
  const f = new Array(u);
  for (; u-- > 0; )
    f[u] = c[u];
  return f;
}, wN = /* @__PURE__ */ ((c) => (u) => c && u instanceof c)(typeof Uint8Array < "u" && pE(Uint8Array)), EN = (c, u) => {
  const p = (c && c[Symbol.iterator]).call(c);
  let y;
  for (; (y = p.next()) && !y.done; ) {
    const E = y.value;
    u.call(c, E[0], E[1]);
  }
}, bN = (c, u) => {
  let f;
  const p = [];
  for (; (f = c.exec(u)) !== null; )
    p.push(f);
  return p;
}, xN = wl("HTMLFormElement"), CN = (c) => c.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(f, p, y) {
    return p.toUpperCase() + y;
  }
), AC = (({ hasOwnProperty: c }) => (u, f) => c.call(u, f))(Object.prototype), RN = wl("RegExp"), SR = (c, u) => {
  const f = Object.getOwnPropertyDescriptors(c), p = {};
  Yh(f, (y, E) => {
    let S;
    (S = u(y, E, c)) !== !1 && (p[E] = S || y);
  }), Object.defineProperties(c, p);
}, TN = (c) => {
  SR(c, (u, f) => {
    if (Gi(c) && ["arguments", "caller", "callee"].indexOf(f) !== -1)
      return !1;
    const p = c[f];
    if (Gi(p)) {
      if (u.enumerable = !1, "writable" in u) {
        u.writable = !1;
        return;
      }
      u.set || (u.set = () => {
        throw Error("Can not rewrite read-only method '" + f + "'");
      });
    }
  });
}, kN = (c, u) => {
  const f = {}, p = (y) => {
    y.forEach((E) => {
      f[E] = !0;
    });
  };
  return Ld(c) ? p(c) : p(String(c).split(u)), f;
}, _N = () => {
}, ON = (c, u) => (c = +c, Number.isFinite(c) ? c : u), $w = "abcdefghijklmnopqrstuvwxyz", LC = "0123456789", wR = {
  DIGIT: LC,
  ALPHA: $w,
  ALPHA_DIGIT: $w + $w.toUpperCase() + LC
}, DN = (c = 16, u = wR.ALPHA_DIGIT) => {
  let f = "";
  const { length: p } = u;
  for (; c--; )
    f += u[Math.random() * p | 0];
  return f;
};
function AN(c) {
  return !!(c && Gi(c.append) && c[Symbol.toStringTag] === "FormData" && c[Symbol.iterator]);
}
const LN = (c) => {
  const u = new Array(10), f = (p, y) => {
    if (ug(p)) {
      if (u.indexOf(p) >= 0)
        return;
      if (!("toJSON" in p)) {
        u[y] = p;
        const E = Ld(p) ? [] : {};
        return Yh(p, (S, g) => {
          const _ = f(S, y + 1);
          !$h(_) && (E[g] = _);
        }), u[y] = void 0, E;
      }
    }
    return p;
  };
  return f(c, 0);
}, NN = wl("AsyncFunction"), MN = (c) => c && (ug(c) || Gi(c)) && Gi(c.then) && Gi(c.catch), ce = {
  isArray: Ld,
  isArrayBuffer: hR,
  isBuffer: nN,
  isFormData: fN,
  isArrayBufferView: rN,
  isString: aN,
  isNumber: vR,
  isBoolean: iN,
  isObject: ug,
  isPlainObject: Wy,
  isUndefined: $h,
  isDate: oN,
  isFile: lN,
  isBlob: uN,
  isRegExp: RN,
  isFunction: Gi,
  isStream: cN,
  isURLSearchParams: dN,
  isTypedArray: wN,
  isFileList: sN,
  forEach: Yh,
  merge: eE,
  extend: hN,
  trim: pN,
  stripBOM: vN,
  inherits: mN,
  toFlatObject: yN,
  kindOf: og,
  kindOfTest: wl,
  endsWith: gN,
  toArray: SN,
  forEachEntry: EN,
  matchAll: bN,
  isHTMLForm: xN,
  hasOwnProperty: AC,
  hasOwnProp: AC,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: SR,
  freezeMethods: TN,
  toObjectSet: kN,
  toCamelCase: CN,
  noop: _N,
  toFiniteNumber: ON,
  findKey: mR,
  global: yR,
  isContextDefined: gR,
  ALPHABET: wR,
  generateString: DN,
  isSpecCompliantForm: AN,
  toJSONObject: LN,
  isAsyncFn: NN,
  isThenable: MN
};
function ln(c, u, f, p, y) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = c, this.name = "AxiosError", u && (this.code = u), f && (this.config = f), p && (this.request = p), y && (this.response = y);
}
ce.inherits(ln, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: ce.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const ER = ln.prototype, bR = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((c) => {
  bR[c] = { value: c };
});
Object.defineProperties(ln, bR);
Object.defineProperty(ER, "isAxiosError", { value: !0 });
ln.from = (c, u, f, p, y, E) => {
  const S = Object.create(ER);
  return ce.toFlatObject(c, S, function(_) {
    return _ !== Error.prototype;
  }, (g) => g !== "isAxiosError"), ln.call(S, c.message, u, f, p, y), S.cause = c, S.name = c.name, E && Object.assign(S, E), S;
};
const zN = null;
function tE(c) {
  return ce.isPlainObject(c) || ce.isArray(c);
}
function xR(c) {
  return ce.endsWith(c, "[]") ? c.slice(0, -2) : c;
}
function NC(c, u, f) {
  return c ? c.concat(u).map(function(y, E) {
    return y = xR(y), !f && E ? "[" + y + "]" : y;
  }).join(f ? "." : "") : u;
}
function UN(c) {
  return ce.isArray(c) && !c.some(tE);
}
const FN = ce.toFlatObject(ce, {}, null, function(u) {
  return /^is[A-Z]/.test(u);
});
function sg(c, u, f) {
  if (!ce.isObject(c))
    throw new TypeError("target must be an object");
  u = u || new FormData(), f = ce.toFlatObject(f, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function($, se) {
    return !ce.isUndefined(se[$]);
  });
  const p = f.metaTokens, y = f.visitor || O, E = f.dots, S = f.indexes, _ = (f.Blob || typeof Blob < "u" && Blob) && ce.isSpecCompliantForm(u);
  if (!ce.isFunction(y))
    throw new TypeError("visitor must be a function");
  function L(j) {
    if (j === null) return "";
    if (ce.isDate(j))
      return j.toISOString();
    if (!_ && ce.isBlob(j))
      throw new ln("Blob is not supported. Use a Buffer instead.");
    return ce.isArrayBuffer(j) || ce.isTypedArray(j) ? _ && typeof Blob == "function" ? new Blob([j]) : Buffer.from(j) : j;
  }
  function O(j, $, se) {
    let Ce = j;
    if (j && !se && typeof j == "object") {
      if (ce.endsWith($, "{}"))
        $ = p ? $ : $.slice(0, -2), j = JSON.stringify(j);
      else if (ce.isArray(j) && UN(j) || (ce.isFileList(j) || ce.endsWith($, "[]")) && (Ce = ce.toArray(j)))
        return $ = xR($), Ce.forEach(function(we, ge) {
          !(ce.isUndefined(we) || we === null) && u.append(
            // eslint-disable-next-line no-nested-ternary
            S === !0 ? NC([$], ge, E) : S === null ? $ : $ + "[]",
            L(we)
          );
        }), !1;
    }
    return tE(j) ? !0 : (u.append(NC(se, $, E), L(j)), !1);
  }
  const A = [], U = Object.assign(FN, {
    defaultVisitor: O,
    convertValue: L,
    isVisitable: tE
  });
  function V(j, $) {
    if (!ce.isUndefined(j)) {
      if (A.indexOf(j) !== -1)
        throw Error("Circular reference detected in " + $.join("."));
      A.push(j), ce.forEach(j, function(Ce, Ae) {
        (!(ce.isUndefined(Ce) || Ce === null) && y.call(
          u,
          Ce,
          ce.isString(Ae) ? Ae.trim() : Ae,
          $,
          U
        )) === !0 && V(Ce, $ ? $.concat(Ae) : [Ae]);
      }), A.pop();
    }
  }
  if (!ce.isObject(c))
    throw new TypeError("data must be an object");
  return V(c), u;
}
function MC(c) {
  const u = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(c).replace(/[!'()~]|%20|%00/g, function(p) {
    return u[p];
  });
}
function hE(c, u) {
  this._pairs = [], c && sg(c, this, u);
}
const CR = hE.prototype;
CR.append = function(u, f) {
  this._pairs.push([u, f]);
};
CR.toString = function(u) {
  const f = u ? function(p) {
    return u.call(this, p, MC);
  } : MC;
  return this._pairs.map(function(y) {
    return f(y[0]) + "=" + f(y[1]);
  }, "").join("&");
};
function jN(c) {
  return encodeURIComponent(c).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function RR(c, u, f) {
  if (!u)
    return c;
  const p = f && f.encode || jN, y = f && f.serialize;
  let E;
  if (y ? E = y(u, f) : E = ce.isURLSearchParams(u) ? u.toString() : new hE(u, f).toString(p), E) {
    const S = c.indexOf("#");
    S !== -1 && (c = c.slice(0, S)), c += (c.indexOf("?") === -1 ? "?" : "&") + E;
  }
  return c;
}
class zC {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(u, f, p) {
    return this.handlers.push({
      fulfilled: u,
      rejected: f,
      synchronous: p ? p.synchronous : !1,
      runWhen: p ? p.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(u) {
    this.handlers[u] && (this.handlers[u] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(u) {
    ce.forEach(this.handlers, function(p) {
      p !== null && u(p);
    });
  }
}
const TR = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, PN = typeof URLSearchParams < "u" ? URLSearchParams : hE, HN = typeof FormData < "u" ? FormData : null, $N = typeof Blob < "u" ? Blob : null, BN = {
  isBrowser: !0,
  classes: {
    URLSearchParams: PN,
    FormData: HN,
    Blob: $N
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, kR = typeof window < "u" && typeof document < "u", VN = ((c) => kR && ["ReactNative", "NativeScript", "NS"].indexOf(c) < 0)(typeof navigator < "u" && navigator.product), IN = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", YN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: kR,
  hasStandardBrowserEnv: VN,
  hasStandardBrowserWebWorkerEnv: IN
}, Symbol.toStringTag, { value: "Module" })), hl = {
  ...YN,
  ...BN
};
function WN(c, u) {
  return sg(c, new hl.classes.URLSearchParams(), Object.assign({
    visitor: function(f, p, y, E) {
      return hl.isNode && ce.isBuffer(f) ? (this.append(p, f.toString("base64")), !1) : E.defaultVisitor.apply(this, arguments);
    }
  }, u));
}
function qN(c) {
  return ce.matchAll(/\w+|\[(\w*)]/g, c).map((u) => u[0] === "[]" ? "" : u[1] || u[0]);
}
function QN(c) {
  const u = {}, f = Object.keys(c);
  let p;
  const y = f.length;
  let E;
  for (p = 0; p < y; p++)
    E = f[p], u[E] = c[E];
  return u;
}
function _R(c) {
  function u(f, p, y, E) {
    let S = f[E++];
    const g = Number.isFinite(+S), _ = E >= f.length;
    return S = !S && ce.isArray(y) ? y.length : S, _ ? (ce.hasOwnProp(y, S) ? y[S] = [y[S], p] : y[S] = p, !g) : ((!y[S] || !ce.isObject(y[S])) && (y[S] = []), u(f, p, y[S], E) && ce.isArray(y[S]) && (y[S] = QN(y[S])), !g);
  }
  if (ce.isFormData(c) && ce.isFunction(c.entries)) {
    const f = {};
    return ce.forEachEntry(c, (p, y) => {
      u(qN(p), y, f, 0);
    }), f;
  }
  return null;
}
function GN(c, u, f) {
  if (ce.isString(c))
    try {
      return (u || JSON.parse)(c), ce.trim(c);
    } catch (p) {
      if (p.name !== "SyntaxError")
        throw p;
    }
  return (f || JSON.stringify)(c);
}
const Wh = {
  transitional: TR,
  adapter: ["xhr", "http"],
  transformRequest: [function(u, f) {
    const p = f.getContentType() || "", y = p.indexOf("application/json") > -1, E = ce.isObject(u);
    if (E && ce.isHTMLForm(u) && (u = new FormData(u)), ce.isFormData(u))
      return y && y ? JSON.stringify(_R(u)) : u;
    if (ce.isArrayBuffer(u) || ce.isBuffer(u) || ce.isStream(u) || ce.isFile(u) || ce.isBlob(u))
      return u;
    if (ce.isArrayBufferView(u))
      return u.buffer;
    if (ce.isURLSearchParams(u))
      return f.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), u.toString();
    let g;
    if (E) {
      if (p.indexOf("application/x-www-form-urlencoded") > -1)
        return WN(u, this.formSerializer).toString();
      if ((g = ce.isFileList(u)) || p.indexOf("multipart/form-data") > -1) {
        const _ = this.env && this.env.FormData;
        return sg(
          g ? { "files[]": u } : u,
          _ && new _(),
          this.formSerializer
        );
      }
    }
    return E || y ? (f.setContentType("application/json", !1), GN(u)) : u;
  }],
  transformResponse: [function(u) {
    const f = this.transitional || Wh.transitional, p = f && f.forcedJSONParsing, y = this.responseType === "json";
    if (u && ce.isString(u) && (p && !this.responseType || y)) {
      const S = !(f && f.silentJSONParsing) && y;
      try {
        return JSON.parse(u);
      } catch (g) {
        if (S)
          throw g.name === "SyntaxError" ? ln.from(g, ln.ERR_BAD_RESPONSE, this, null, this.response) : g;
      }
    }
    return u;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: hl.classes.FormData,
    Blob: hl.classes.Blob
  },
  validateStatus: function(u) {
    return u >= 200 && u < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
ce.forEach(["delete", "get", "head", "post", "put", "patch"], (c) => {
  Wh.headers[c] = {};
});
const KN = ce.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), XN = (c) => {
  const u = {};
  let f, p, y;
  return c && c.split(`
`).forEach(function(S) {
    y = S.indexOf(":"), f = S.substring(0, y).trim().toLowerCase(), p = S.substring(y + 1).trim(), !(!f || u[f] && KN[f]) && (f === "set-cookie" ? u[f] ? u[f].push(p) : u[f] = [p] : u[f] = u[f] ? u[f] + ", " + p : p);
  }), u;
}, UC = Symbol("internals");
function Nh(c) {
  return c && String(c).trim().toLowerCase();
}
function qy(c) {
  return c === !1 || c == null ? c : ce.isArray(c) ? c.map(qy) : String(c);
}
function ZN(c) {
  const u = /* @__PURE__ */ Object.create(null), f = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let p;
  for (; p = f.exec(c); )
    u[p[1]] = p[2];
  return u;
}
const JN = (c) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(c.trim());
function Bw(c, u, f, p, y) {
  if (ce.isFunction(p))
    return p.call(this, u, f);
  if (y && (u = f), !!ce.isString(u)) {
    if (ce.isString(p))
      return u.indexOf(p) !== -1;
    if (ce.isRegExp(p))
      return p.test(u);
  }
}
function eM(c) {
  return c.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (u, f, p) => f.toUpperCase() + p);
}
function tM(c, u) {
  const f = ce.toCamelCase(" " + u);
  ["get", "set", "has"].forEach((p) => {
    Object.defineProperty(c, p + f, {
      value: function(y, E, S) {
        return this[p].call(this, u, y, E, S);
      },
      configurable: !0
    });
  });
}
class Ki {
  constructor(u) {
    u && this.set(u);
  }
  set(u, f, p) {
    const y = this;
    function E(g, _, L) {
      const O = Nh(_);
      if (!O)
        throw new Error("header name must be a non-empty string");
      const A = ce.findKey(y, O);
      (!A || y[A] === void 0 || L === !0 || L === void 0 && y[A] !== !1) && (y[A || _] = qy(g));
    }
    const S = (g, _) => ce.forEach(g, (L, O) => E(L, O, _));
    return ce.isPlainObject(u) || u instanceof this.constructor ? S(u, f) : ce.isString(u) && (u = u.trim()) && !JN(u) ? S(XN(u), f) : u != null && E(f, u, p), this;
  }
  get(u, f) {
    if (u = Nh(u), u) {
      const p = ce.findKey(this, u);
      if (p) {
        const y = this[p];
        if (!f)
          return y;
        if (f === !0)
          return ZN(y);
        if (ce.isFunction(f))
          return f.call(this, y, p);
        if (ce.isRegExp(f))
          return f.exec(y);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(u, f) {
    if (u = Nh(u), u) {
      const p = ce.findKey(this, u);
      return !!(p && this[p] !== void 0 && (!f || Bw(this, this[p], p, f)));
    }
    return !1;
  }
  delete(u, f) {
    const p = this;
    let y = !1;
    function E(S) {
      if (S = Nh(S), S) {
        const g = ce.findKey(p, S);
        g && (!f || Bw(p, p[g], g, f)) && (delete p[g], y = !0);
      }
    }
    return ce.isArray(u) ? u.forEach(E) : E(u), y;
  }
  clear(u) {
    const f = Object.keys(this);
    let p = f.length, y = !1;
    for (; p--; ) {
      const E = f[p];
      (!u || Bw(this, this[E], E, u, !0)) && (delete this[E], y = !0);
    }
    return y;
  }
  normalize(u) {
    const f = this, p = {};
    return ce.forEach(this, (y, E) => {
      const S = ce.findKey(p, E);
      if (S) {
        f[S] = qy(y), delete f[E];
        return;
      }
      const g = u ? eM(E) : String(E).trim();
      g !== E && delete f[E], f[g] = qy(y), p[g] = !0;
    }), this;
  }
  concat(...u) {
    return this.constructor.concat(this, ...u);
  }
  toJSON(u) {
    const f = /* @__PURE__ */ Object.create(null);
    return ce.forEach(this, (p, y) => {
      p != null && p !== !1 && (f[y] = u && ce.isArray(p) ? p.join(", ") : p);
    }), f;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([u, f]) => u + ": " + f).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(u) {
    return u instanceof this ? u : new this(u);
  }
  static concat(u, ...f) {
    const p = new this(u);
    return f.forEach((y) => p.set(y)), p;
  }
  static accessor(u) {
    const p = (this[UC] = this[UC] = {
      accessors: {}
    }).accessors, y = this.prototype;
    function E(S) {
      const g = Nh(S);
      p[g] || (tM(y, S), p[g] = !0);
    }
    return ce.isArray(u) ? u.forEach(E) : E(u), this;
  }
}
Ki.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
ce.reduceDescriptors(Ki.prototype, ({ value: c }, u) => {
  let f = u[0].toUpperCase() + u.slice(1);
  return {
    get: () => c,
    set(p) {
      this[f] = p;
    }
  };
});
ce.freezeMethods(Ki);
function Vw(c, u) {
  const f = this || Wh, p = u || f, y = Ki.from(p.headers);
  let E = p.data;
  return ce.forEach(c, function(g) {
    E = g.call(f, E, y.normalize(), u ? u.status : void 0);
  }), y.normalize(), E;
}
function OR(c) {
  return !!(c && c.__CANCEL__);
}
function qh(c, u, f) {
  ln.call(this, c ?? "canceled", ln.ERR_CANCELED, u, f), this.name = "CanceledError";
}
ce.inherits(qh, ln, {
  __CANCEL__: !0
});
function nM(c, u, f) {
  const p = f.config.validateStatus;
  !f.status || !p || p(f.status) ? c(f) : u(new ln(
    "Request failed with status code " + f.status,
    [ln.ERR_BAD_REQUEST, ln.ERR_BAD_RESPONSE][Math.floor(f.status / 100) - 4],
    f.config,
    f.request,
    f
  ));
}
const rM = hl.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(c, u, f, p, y, E) {
      const S = [c + "=" + encodeURIComponent(u)];
      ce.isNumber(f) && S.push("expires=" + new Date(f).toGMTString()), ce.isString(p) && S.push("path=" + p), ce.isString(y) && S.push("domain=" + y), E === !0 && S.push("secure"), document.cookie = S.join("; ");
    },
    read(c) {
      const u = document.cookie.match(new RegExp("(^|;\\s*)(" + c + ")=([^;]*)"));
      return u ? decodeURIComponent(u[3]) : null;
    },
    remove(c) {
      this.write(c, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function aM(c) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(c);
}
function iM(c, u) {
  return u ? c.replace(/\/+$/, "") + "/" + u.replace(/^\/+/, "") : c;
}
function DR(c, u) {
  return c && !aM(u) ? iM(c, u) : u;
}
const oM = hl.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const u = /(msie|trident)/i.test(navigator.userAgent), f = document.createElement("a");
    let p;
    function y(E) {
      let S = E;
      return u && (f.setAttribute("href", S), S = f.href), f.setAttribute("href", S), {
        href: f.href,
        protocol: f.protocol ? f.protocol.replace(/:$/, "") : "",
        host: f.host,
        search: f.search ? f.search.replace(/^\?/, "") : "",
        hash: f.hash ? f.hash.replace(/^#/, "") : "",
        hostname: f.hostname,
        port: f.port,
        pathname: f.pathname.charAt(0) === "/" ? f.pathname : "/" + f.pathname
      };
    }
    return p = y(window.location.href), function(S) {
      const g = ce.isString(S) ? y(S) : S;
      return g.protocol === p.protocol && g.host === p.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
);
function lM(c) {
  const u = /^([-+\w]{1,25})(:?\/\/|:)/.exec(c);
  return u && u[1] || "";
}
function uM(c, u) {
  c = c || 10;
  const f = new Array(c), p = new Array(c);
  let y = 0, E = 0, S;
  return u = u !== void 0 ? u : 1e3, function(_) {
    const L = Date.now(), O = p[E];
    S || (S = L), f[y] = _, p[y] = L;
    let A = E, U = 0;
    for (; A !== y; )
      U += f[A++], A = A % c;
    if (y = (y + 1) % c, y === E && (E = (E + 1) % c), L - S < u)
      return;
    const V = O && L - O;
    return V ? Math.round(U * 1e3 / V) : void 0;
  };
}
function FC(c, u) {
  let f = 0;
  const p = uM(50, 250);
  return (y) => {
    const E = y.loaded, S = y.lengthComputable ? y.total : void 0, g = E - f, _ = p(g), L = E <= S;
    f = E;
    const O = {
      loaded: E,
      total: S,
      progress: S ? E / S : void 0,
      bytes: g,
      rate: _ || void 0,
      estimated: _ && S && L ? (S - E) / _ : void 0,
      event: y
    };
    O[u ? "download" : "upload"] = !0, c(O);
  };
}
const sM = typeof XMLHttpRequest < "u", cM = sM && function(c) {
  return new Promise(function(f, p) {
    let y = c.data;
    const E = Ki.from(c.headers).normalize();
    let { responseType: S, withXSRFToken: g } = c, _;
    function L() {
      c.cancelToken && c.cancelToken.unsubscribe(_), c.signal && c.signal.removeEventListener("abort", _);
    }
    let O;
    if (ce.isFormData(y)) {
      if (hl.hasStandardBrowserEnv || hl.hasStandardBrowserWebWorkerEnv)
        E.setContentType(!1);
      else if ((O = E.getContentType()) !== !1) {
        const [$, ...se] = O ? O.split(";").map((Ce) => Ce.trim()).filter(Boolean) : [];
        E.setContentType([$ || "multipart/form-data", ...se].join("; "));
      }
    }
    let A = new XMLHttpRequest();
    if (c.auth) {
      const $ = c.auth.username || "", se = c.auth.password ? unescape(encodeURIComponent(c.auth.password)) : "";
      E.set("Authorization", "Basic " + btoa($ + ":" + se));
    }
    const U = DR(c.baseURL, c.url);
    A.open(c.method.toUpperCase(), RR(U, c.params, c.paramsSerializer), !0), A.timeout = c.timeout;
    function V() {
      if (!A)
        return;
      const $ = Ki.from(
        "getAllResponseHeaders" in A && A.getAllResponseHeaders()
      ), Ce = {
        data: !S || S === "text" || S === "json" ? A.responseText : A.response,
        status: A.status,
        statusText: A.statusText,
        headers: $,
        config: c,
        request: A
      };
      nM(function(we) {
        f(we), L();
      }, function(we) {
        p(we), L();
      }, Ce), A = null;
    }
    if ("onloadend" in A ? A.onloadend = V : A.onreadystatechange = function() {
      !A || A.readyState !== 4 || A.status === 0 && !(A.responseURL && A.responseURL.indexOf("file:") === 0) || setTimeout(V);
    }, A.onabort = function() {
      A && (p(new ln("Request aborted", ln.ECONNABORTED, c, A)), A = null);
    }, A.onerror = function() {
      p(new ln("Network Error", ln.ERR_NETWORK, c, A)), A = null;
    }, A.ontimeout = function() {
      let se = c.timeout ? "timeout of " + c.timeout + "ms exceeded" : "timeout exceeded";
      const Ce = c.transitional || TR;
      c.timeoutErrorMessage && (se = c.timeoutErrorMessage), p(new ln(
        se,
        Ce.clarifyTimeoutError ? ln.ETIMEDOUT : ln.ECONNABORTED,
        c,
        A
      )), A = null;
    }, hl.hasStandardBrowserEnv && (g && ce.isFunction(g) && (g = g(c)), g || g !== !1 && oM(U))) {
      const $ = c.xsrfHeaderName && c.xsrfCookieName && rM.read(c.xsrfCookieName);
      $ && E.set(c.xsrfHeaderName, $);
    }
    y === void 0 && E.setContentType(null), "setRequestHeader" in A && ce.forEach(E.toJSON(), function(se, Ce) {
      A.setRequestHeader(Ce, se);
    }), ce.isUndefined(c.withCredentials) || (A.withCredentials = !!c.withCredentials), S && S !== "json" && (A.responseType = c.responseType), typeof c.onDownloadProgress == "function" && A.addEventListener("progress", FC(c.onDownloadProgress, !0)), typeof c.onUploadProgress == "function" && A.upload && A.upload.addEventListener("progress", FC(c.onUploadProgress)), (c.cancelToken || c.signal) && (_ = ($) => {
      A && (p(!$ || $.type ? new qh(null, c, A) : $), A.abort(), A = null);
    }, c.cancelToken && c.cancelToken.subscribe(_), c.signal && (c.signal.aborted ? _() : c.signal.addEventListener("abort", _)));
    const j = lM(U);
    if (j && hl.protocols.indexOf(j) === -1) {
      p(new ln("Unsupported protocol " + j + ":", ln.ERR_BAD_REQUEST, c));
      return;
    }
    A.send(y || null);
  });
}, nE = {
  http: zN,
  xhr: cM
};
ce.forEach(nE, (c, u) => {
  if (c) {
    try {
      Object.defineProperty(c, "name", { value: u });
    } catch {
    }
    Object.defineProperty(c, "adapterName", { value: u });
  }
});
const jC = (c) => `- ${c}`, fM = (c) => ce.isFunction(c) || c === null || c === !1, AR = {
  getAdapter: (c) => {
    c = ce.isArray(c) ? c : [c];
    const { length: u } = c;
    let f, p;
    const y = {};
    for (let E = 0; E < u; E++) {
      f = c[E];
      let S;
      if (p = f, !fM(f) && (p = nE[(S = String(f)).toLowerCase()], p === void 0))
        throw new ln(`Unknown adapter '${S}'`);
      if (p)
        break;
      y[S || "#" + E] = p;
    }
    if (!p) {
      const E = Object.entries(y).map(
        ([g, _]) => `adapter ${g} ` + (_ === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let S = u ? E.length > 1 ? `since :
` + E.map(jC).join(`
`) : " " + jC(E[0]) : "as no adapter specified";
      throw new ln(
        "There is no suitable adapter to dispatch the request " + S,
        "ERR_NOT_SUPPORT"
      );
    }
    return p;
  },
  adapters: nE
};
function Iw(c) {
  if (c.cancelToken && c.cancelToken.throwIfRequested(), c.signal && c.signal.aborted)
    throw new qh(null, c);
}
function PC(c) {
  return Iw(c), c.headers = Ki.from(c.headers), c.data = Vw.call(
    c,
    c.transformRequest
  ), ["post", "put", "patch"].indexOf(c.method) !== -1 && c.headers.setContentType("application/x-www-form-urlencoded", !1), AR.getAdapter(c.adapter || Wh.adapter)(c).then(function(p) {
    return Iw(c), p.data = Vw.call(
      c,
      c.transformResponse,
      p
    ), p.headers = Ki.from(p.headers), p;
  }, function(p) {
    return OR(p) || (Iw(c), p && p.response && (p.response.data = Vw.call(
      c,
      c.transformResponse,
      p.response
    ), p.response.headers = Ki.from(p.response.headers))), Promise.reject(p);
  });
}
const HC = (c) => c instanceof Ki ? c.toJSON() : c;
function _d(c, u) {
  u = u || {};
  const f = {};
  function p(L, O, A) {
    return ce.isPlainObject(L) && ce.isPlainObject(O) ? ce.merge.call({ caseless: A }, L, O) : ce.isPlainObject(O) ? ce.merge({}, O) : ce.isArray(O) ? O.slice() : O;
  }
  function y(L, O, A) {
    if (ce.isUndefined(O)) {
      if (!ce.isUndefined(L))
        return p(void 0, L, A);
    } else return p(L, O, A);
  }
  function E(L, O) {
    if (!ce.isUndefined(O))
      return p(void 0, O);
  }
  function S(L, O) {
    if (ce.isUndefined(O)) {
      if (!ce.isUndefined(L))
        return p(void 0, L);
    } else return p(void 0, O);
  }
  function g(L, O, A) {
    if (A in u)
      return p(L, O);
    if (A in c)
      return p(void 0, L);
  }
  const _ = {
    url: E,
    method: E,
    data: E,
    baseURL: S,
    transformRequest: S,
    transformResponse: S,
    paramsSerializer: S,
    timeout: S,
    timeoutMessage: S,
    withCredentials: S,
    withXSRFToken: S,
    adapter: S,
    responseType: S,
    xsrfCookieName: S,
    xsrfHeaderName: S,
    onUploadProgress: S,
    onDownloadProgress: S,
    decompress: S,
    maxContentLength: S,
    maxBodyLength: S,
    beforeRedirect: S,
    transport: S,
    httpAgent: S,
    httpsAgent: S,
    cancelToken: S,
    socketPath: S,
    responseEncoding: S,
    validateStatus: g,
    headers: (L, O) => y(HC(L), HC(O), !0)
  };
  return ce.forEach(Object.keys(Object.assign({}, c, u)), function(O) {
    const A = _[O] || y, U = A(c[O], u[O], O);
    ce.isUndefined(U) && A !== g || (f[O] = U);
  }), f;
}
const LR = "1.6.2", vE = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((c, u) => {
  vE[c] = function(p) {
    return typeof p === c || "a" + (u < 1 ? "n " : " ") + c;
  };
});
const $C = {};
vE.transitional = function(u, f, p) {
  function y(E, S) {
    return "[Axios v" + LR + "] Transitional option '" + E + "'" + S + (p ? ". " + p : "");
  }
  return (E, S, g) => {
    if (u === !1)
      throw new ln(
        y(S, " has been removed" + (f ? " in " + f : "")),
        ln.ERR_DEPRECATED
      );
    return f && !$C[S] && ($C[S] = !0, console.warn(
      y(
        S,
        " has been deprecated since v" + f + " and will be removed in the near future"
      )
    )), u ? u(E, S, g) : !0;
  };
};
function dM(c, u, f) {
  if (typeof c != "object")
    throw new ln("options must be an object", ln.ERR_BAD_OPTION_VALUE);
  const p = Object.keys(c);
  let y = p.length;
  for (; y-- > 0; ) {
    const E = p[y], S = u[E];
    if (S) {
      const g = c[E], _ = g === void 0 || S(g, E, c);
      if (_ !== !0)
        throw new ln("option " + E + " must be " + _, ln.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (f !== !0)
      throw new ln("Unknown option " + E, ln.ERR_BAD_OPTION);
  }
}
const rE = {
  assertOptions: dM,
  validators: vE
}, hs = rE.validators;
class Fc {
  constructor(u) {
    this.defaults = u, this.interceptors = {
      request: new zC(),
      response: new zC()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(u, f) {
    typeof u == "string" ? (f = f || {}, f.url = u) : f = u || {}, f = _d(this.defaults, f);
    const { transitional: p, paramsSerializer: y, headers: E } = f;
    p !== void 0 && rE.assertOptions(p, {
      silentJSONParsing: hs.transitional(hs.boolean),
      forcedJSONParsing: hs.transitional(hs.boolean),
      clarifyTimeoutError: hs.transitional(hs.boolean)
    }, !1), y != null && (ce.isFunction(y) ? f.paramsSerializer = {
      serialize: y
    } : rE.assertOptions(y, {
      encode: hs.function,
      serialize: hs.function
    }, !0)), f.method = (f.method || this.defaults.method || "get").toLowerCase();
    let S = E && ce.merge(
      E.common,
      E[f.method]
    );
    E && ce.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (j) => {
        delete E[j];
      }
    ), f.headers = Ki.concat(S, E);
    const g = [];
    let _ = !0;
    this.interceptors.request.forEach(function($) {
      typeof $.runWhen == "function" && $.runWhen(f) === !1 || (_ = _ && $.synchronous, g.unshift($.fulfilled, $.rejected));
    });
    const L = [];
    this.interceptors.response.forEach(function($) {
      L.push($.fulfilled, $.rejected);
    });
    let O, A = 0, U;
    if (!_) {
      const j = [PC.bind(this), void 0];
      for (j.unshift.apply(j, g), j.push.apply(j, L), U = j.length, O = Promise.resolve(f); A < U; )
        O = O.then(j[A++], j[A++]);
      return O;
    }
    U = g.length;
    let V = f;
    for (A = 0; A < U; ) {
      const j = g[A++], $ = g[A++];
      try {
        V = j(V);
      } catch (se) {
        $.call(this, se);
        break;
      }
    }
    try {
      O = PC.call(this, V);
    } catch (j) {
      return Promise.reject(j);
    }
    for (A = 0, U = L.length; A < U; )
      O = O.then(L[A++], L[A++]);
    return O;
  }
  getUri(u) {
    u = _d(this.defaults, u);
    const f = DR(u.baseURL, u.url);
    return RR(f, u.params, u.paramsSerializer);
  }
}
ce.forEach(["delete", "get", "head", "options"], function(u) {
  Fc.prototype[u] = function(f, p) {
    return this.request(_d(p || {}, {
      method: u,
      url: f,
      data: (p || {}).data
    }));
  };
});
ce.forEach(["post", "put", "patch"], function(u) {
  function f(p) {
    return function(E, S, g) {
      return this.request(_d(g || {}, {
        method: u,
        headers: p ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: E,
        data: S
      }));
    };
  }
  Fc.prototype[u] = f(), Fc.prototype[u + "Form"] = f(!0);
});
class mE {
  constructor(u) {
    if (typeof u != "function")
      throw new TypeError("executor must be a function.");
    let f;
    this.promise = new Promise(function(E) {
      f = E;
    });
    const p = this;
    this.promise.then((y) => {
      if (!p._listeners) return;
      let E = p._listeners.length;
      for (; E-- > 0; )
        p._listeners[E](y);
      p._listeners = null;
    }), this.promise.then = (y) => {
      let E;
      const S = new Promise((g) => {
        p.subscribe(g), E = g;
      }).then(y);
      return S.cancel = function() {
        p.unsubscribe(E);
      }, S;
    }, u(function(E, S, g) {
      p.reason || (p.reason = new qh(E, S, g), f(p.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(u) {
    if (this.reason) {
      u(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(u) : this._listeners = [u];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(u) {
    if (!this._listeners)
      return;
    const f = this._listeners.indexOf(u);
    f !== -1 && this._listeners.splice(f, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let u;
    return {
      token: new mE(function(y) {
        u = y;
      }),
      cancel: u
    };
  }
}
function pM(c) {
  return function(f) {
    return c.apply(null, f);
  };
}
function hM(c) {
  return ce.isObject(c) && c.isAxiosError === !0;
}
const aE = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(aE).forEach(([c, u]) => {
  aE[u] = c;
});
function NR(c) {
  const u = new Fc(c), f = pR(Fc.prototype.request, u);
  return ce.extend(f, Fc.prototype, u, { allOwnKeys: !0 }), ce.extend(f, u, null, { allOwnKeys: !0 }), f.create = function(y) {
    return NR(_d(c, y));
  }, f;
}
const Fr = NR(Wh);
Fr.Axios = Fc;
Fr.CanceledError = qh;
Fr.CancelToken = mE;
Fr.isCancel = OR;
Fr.VERSION = LR;
Fr.toFormData = sg;
Fr.AxiosError = ln;
Fr.Cancel = Fr.CanceledError;
Fr.all = function(u) {
  return Promise.all(u);
};
Fr.spread = pM;
Fr.isAxiosError = hM;
Fr.mergeConfig = _d;
Fr.AxiosHeaders = Ki;
Fr.formToJSON = (c) => _R(ce.isHTMLForm(c) ? new FormData(c) : c);
Fr.getAdapter = AR.getAdapter;
Fr.HttpStatusCode = aE;
Fr.default = Fr;
var MR = {}, Od = {};
Object.defineProperty(Od, "__esModule", { value: !0 });
Od.cssValue = Od.parseLengthAndUnit = void 0;
var vM = {
  cm: !0,
  mm: !0,
  in: !0,
  px: !0,
  pt: !0,
  pc: !0,
  em: !0,
  ex: !0,
  ch: !0,
  rem: !0,
  vw: !0,
  vh: !0,
  vmin: !0,
  vmax: !0,
  "%": !0
};
function zR(c) {
  if (typeof c == "number")
    return {
      value: c,
      unit: "px"
    };
  var u, f = (c.match(/^[0-9.]*/) || "").toString();
  f.includes(".") ? u = parseFloat(f) : u = parseInt(f, 10);
  var p = (c.match(/[^0-9]*$/) || "").toString();
  return vM[p] ? {
    value: u,
    unit: p
  } : (console.warn("React Spinners: ".concat(c, " is not a valid css value. Defaulting to ").concat(u, "px.")), {
    value: u,
    unit: "px"
  });
}
Od.parseLengthAndUnit = zR;
function mM(c) {
  var u = zR(c);
  return "".concat(u.value).concat(u.unit);
}
Od.cssValue = mM;
var cg = {};
Object.defineProperty(cg, "__esModule", { value: !0 });
cg.createAnimation = void 0;
var yM = function(c, u, f) {
  var p = "react-spinners-".concat(c, "-").concat(f);
  if (typeof window > "u" || !window.document)
    return p;
  var y = document.createElement("style");
  document.head.appendChild(y);
  var E = y.sheet, S = `
    @keyframes `.concat(p, ` {
      `).concat(u, `
    }
  `);
  return E && E.insertRule(S, 0), p;
};
cg.createAnimation = yM;
var Zy = Oo && Oo.__assign || function() {
  return Zy = Object.assign || function(c) {
    for (var u, f = 1, p = arguments.length; f < p; f++) {
      u = arguments[f];
      for (var y in u) Object.prototype.hasOwnProperty.call(u, y) && (c[y] = u[y]);
    }
    return c;
  }, Zy.apply(this, arguments);
}, gM = Oo && Oo.__createBinding || (Object.create ? function(c, u, f, p) {
  p === void 0 && (p = f);
  var y = Object.getOwnPropertyDescriptor(u, f);
  (!y || ("get" in y ? !u.__esModule : y.writable || y.configurable)) && (y = { enumerable: !0, get: function() {
    return u[f];
  } }), Object.defineProperty(c, p, y);
} : function(c, u, f, p) {
  p === void 0 && (p = f), c[p] = u[f];
}), SM = Oo && Oo.__setModuleDefault || (Object.create ? function(c, u) {
  Object.defineProperty(c, "default", { enumerable: !0, value: u });
} : function(c, u) {
  c.default = u;
}), wM = Oo && Oo.__importStar || function(c) {
  if (c && c.__esModule) return c;
  var u = {};
  if (c != null) for (var f in c) f !== "default" && Object.prototype.hasOwnProperty.call(c, f) && gM(u, c, f);
  return SM(u, c), u;
}, EM = Oo && Oo.__rest || function(c, u) {
  var f = {};
  for (var p in c) Object.prototype.hasOwnProperty.call(c, p) && u.indexOf(p) < 0 && (f[p] = c[p]);
  if (c != null && typeof Object.getOwnPropertySymbols == "function")
    for (var y = 0, p = Object.getOwnPropertySymbols(c); y < p.length; y++)
      u.indexOf(p[y]) < 0 && Object.prototype.propertyIsEnumerable.call(c, p[y]) && (f[p[y]] = c[p[y]]);
  return f;
};
Object.defineProperty(MR, "__esModule", { value: !0 });
var Vy = wM(Ne), Yw = Od, bM = cg, xM = (0, bM.createAnimation)("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse");
function CM(c) {
  var u = c.loading, f = u === void 0 ? !0 : u, p = c.color, y = p === void 0 ? "#000000" : p, E = c.speedMultiplier, S = E === void 0 ? 1 : E, g = c.cssOverride, _ = g === void 0 ? {} : g, L = c.size, O = L === void 0 ? 15 : L, A = c.margin, U = A === void 0 ? 2 : A, V = EM(c, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), j = Zy({ display: "inherit" }, _), $ = function(se) {
    return {
      backgroundColor: y,
      width: (0, Yw.cssValue)(O),
      height: (0, Yw.cssValue)(O),
      margin: (0, Yw.cssValue)(U),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(xM, " ").concat(0.75 / S, "s ").concat(se * 0.12 / S, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
      animationFillMode: "both"
    };
  };
  return f ? Vy.createElement(
    "span",
    Zy({ style: j }, V),
    Vy.createElement("span", { style: $(1) }),
    Vy.createElement("span", { style: $(2) }),
    Vy.createElement("span", { style: $(3) })
  ) : null;
}
var RM = MR.default = CM;
function yE() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null
  };
}
let Bc = yE();
function UR(c) {
  Bc = c;
}
const FR = /[&<>"']/, TM = new RegExp(FR.source, "g"), jR = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, kM = new RegExp(jR.source, "g"), _M = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, BC = (c) => _M[c];
function Ri(c, u) {
  if (u) {
    if (FR.test(c))
      return c.replace(TM, BC);
  } else if (jR.test(c))
    return c.replace(kM, BC);
  return c;
}
const OM = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function DM(c) {
  return c.replace(OM, (u, f) => (f = f.toLowerCase(), f === "colon" ? ":" : f.charAt(0) === "#" ? f.charAt(1) === "x" ? String.fromCharCode(parseInt(f.substring(2), 16)) : String.fromCharCode(+f.substring(1)) : ""));
}
const AM = /(^|[^\[])\^/g;
function On(c, u) {
  let f = typeof c == "string" ? c : c.source;
  u = u || "";
  const p = {
    replace: (y, E) => {
      let S = typeof E == "string" ? E : E.source;
      return S = S.replace(AM, "$1"), f = f.replace(y, S), p;
    },
    getRegex: () => new RegExp(f, u)
  };
  return p;
}
function VC(c) {
  try {
    c = encodeURI(c).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return c;
}
const jh = { exec: () => null };
function IC(c, u) {
  const f = c.replace(/\|/g, (E, S, g) => {
    let _ = !1, L = S;
    for (; --L >= 0 && g[L] === "\\"; )
      _ = !_;
    return _ ? "|" : " |";
  }), p = f.split(/ \|/);
  let y = 0;
  if (p[0].trim() || p.shift(), p.length > 0 && !p[p.length - 1].trim() && p.pop(), u)
    if (p.length > u)
      p.splice(u);
    else
      for (; p.length < u; )
        p.push("");
  for (; y < p.length; y++)
    p[y] = p[y].trim().replace(/\\\|/g, "|");
  return p;
}
function Iy(c, u, f) {
  const p = c.length;
  if (p === 0)
    return "";
  let y = 0;
  for (; y < p; ) {
    const E = c.charAt(p - y - 1);
    if (E === u && !f)
      y++;
    else if (E !== u && f)
      y++;
    else
      break;
  }
  return c.slice(0, p - y);
}
function LM(c, u) {
  if (c.indexOf(u[1]) === -1)
    return -1;
  let f = 0;
  for (let p = 0; p < c.length; p++)
    if (c[p] === "\\")
      p++;
    else if (c[p] === u[0])
      f++;
    else if (c[p] === u[1] && (f--, f < 0))
      return p;
  return -1;
}
function YC(c, u, f, p) {
  const y = u.href, E = u.title ? Ri(u.title) : null, S = c[1].replace(/\\([\[\]])/g, "$1");
  if (c[0].charAt(0) !== "!") {
    p.state.inLink = !0;
    const g = {
      type: "link",
      raw: f,
      href: y,
      title: E,
      text: S,
      tokens: p.inlineTokens(S)
    };
    return p.state.inLink = !1, g;
  }
  return {
    type: "image",
    raw: f,
    href: y,
    title: E,
    text: Ri(S)
  };
}
function NM(c, u) {
  const f = c.match(/^(\s+)(?:```)/);
  if (f === null)
    return u;
  const p = f[1];
  return u.split(`
`).map((y) => {
    const E = y.match(/^\s+/);
    if (E === null)
      return y;
    const [S] = E;
    return S.length >= p.length ? y.slice(p.length) : y;
  }).join(`
`);
}
class Jy {
  // set by the lexer
  constructor(u) {
    Zn(this, "options");
    Zn(this, "rules");
    // set by the lexer
    Zn(this, "lexer");
    this.options = u || Bc;
  }
  space(u) {
    const f = this.rules.block.newline.exec(u);
    if (f && f[0].length > 0)
      return {
        type: "space",
        raw: f[0]
      };
  }
  code(u) {
    const f = this.rules.block.code.exec(u);
    if (f) {
      const p = f[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: f[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? p : Iy(p, `
`)
      };
    }
  }
  fences(u) {
    const f = this.rules.block.fences.exec(u);
    if (f) {
      const p = f[0], y = NM(p, f[3] || "");
      return {
        type: "code",
        raw: p,
        lang: f[2] ? f[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : f[2],
        text: y
      };
    }
  }
  heading(u) {
    const f = this.rules.block.heading.exec(u);
    if (f) {
      let p = f[2].trim();
      if (/#$/.test(p)) {
        const y = Iy(p, "#");
        (this.options.pedantic || !y || / $/.test(y)) && (p = y.trim());
      }
      return {
        type: "heading",
        raw: f[0],
        depth: f[1].length,
        text: p,
        tokens: this.lexer.inline(p)
      };
    }
  }
  hr(u) {
    const f = this.rules.block.hr.exec(u);
    if (f)
      return {
        type: "hr",
        raw: f[0]
      };
  }
  blockquote(u) {
    const f = this.rules.block.blockquote.exec(u);
    if (f) {
      const p = Iy(f[0].replace(/^ *>[ \t]?/gm, ""), `
`), y = this.lexer.state.top;
      this.lexer.state.top = !0;
      const E = this.lexer.blockTokens(p);
      return this.lexer.state.top = y, {
        type: "blockquote",
        raw: f[0],
        tokens: E,
        text: p
      };
    }
  }
  list(u) {
    let f = this.rules.block.list.exec(u);
    if (f) {
      let p = f[1].trim();
      const y = p.length > 1, E = {
        type: "list",
        raw: "",
        ordered: y,
        start: y ? +p.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      p = y ? `\\d{1,9}\\${p.slice(-1)}` : `\\${p}`, this.options.pedantic && (p = y ? p : "[*+-]");
      const S = new RegExp(`^( {0,3}${p})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let g = "", _ = "", L = !1;
      for (; u; ) {
        let O = !1;
        if (!(f = S.exec(u)) || this.rules.block.hr.test(u))
          break;
        g = f[0], u = u.substring(g.length);
        let A = f[2].split(`
`, 1)[0].replace(/^\t+/, (Ce) => " ".repeat(3 * Ce.length)), U = u.split(`
`, 1)[0], V = 0;
        this.options.pedantic ? (V = 2, _ = A.trimStart()) : (V = f[2].search(/[^ ]/), V = V > 4 ? 1 : V, _ = A.slice(V), V += f[1].length);
        let j = !1;
        if (!A && /^ *$/.test(U) && (g += U + `
`, u = u.substring(U.length + 1), O = !0), !O) {
          const Ce = new RegExp(`^ {0,${Math.min(3, V - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), Ae = new RegExp(`^ {0,${Math.min(3, V - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), we = new RegExp(`^ {0,${Math.min(3, V - 1)}}(?:\`\`\`|~~~)`), ge = new RegExp(`^ {0,${Math.min(3, V - 1)}}#`);
          for (; u; ) {
            const Ie = u.split(`
`, 1)[0];
            if (U = Ie, this.options.pedantic && (U = U.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), we.test(U) || ge.test(U) || Ce.test(U) || Ae.test(u))
              break;
            if (U.search(/[^ ]/) >= V || !U.trim())
              _ += `
` + U.slice(V);
            else {
              if (j || A.search(/[^ ]/) >= 4 || we.test(A) || ge.test(A) || Ae.test(A))
                break;
              _ += `
` + U;
            }
            !j && !U.trim() && (j = !0), g += Ie + `
`, u = u.substring(Ie.length + 1), A = U.slice(V);
          }
        }
        E.loose || (L ? E.loose = !0 : /\n *\n *$/.test(g) && (L = !0));
        let $ = null, se;
        this.options.gfm && ($ = /^\[[ xX]\] /.exec(_), $ && (se = $[0] !== "[ ] ", _ = _.replace(/^\[[ xX]\] +/, ""))), E.items.push({
          type: "list_item",
          raw: g,
          task: !!$,
          checked: se,
          loose: !1,
          text: _,
          tokens: []
        }), E.raw += g;
      }
      E.items[E.items.length - 1].raw = g.trimEnd(), E.items[E.items.length - 1].text = _.trimEnd(), E.raw = E.raw.trimEnd();
      for (let O = 0; O < E.items.length; O++)
        if (this.lexer.state.top = !1, E.items[O].tokens = this.lexer.blockTokens(E.items[O].text, []), !E.loose) {
          const A = E.items[O].tokens.filter((V) => V.type === "space"), U = A.length > 0 && A.some((V) => /\n.*\n/.test(V.raw));
          E.loose = U;
        }
      if (E.loose)
        for (let O = 0; O < E.items.length; O++)
          E.items[O].loose = !0;
      return E;
    }
  }
  html(u) {
    const f = this.rules.block.html.exec(u);
    if (f)
      return {
        type: "html",
        block: !0,
        raw: f[0],
        pre: f[1] === "pre" || f[1] === "script" || f[1] === "style",
        text: f[0]
      };
  }
  def(u) {
    const f = this.rules.block.def.exec(u);
    if (f) {
      const p = f[1].toLowerCase().replace(/\s+/g, " "), y = f[2] ? f[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", E = f[3] ? f[3].substring(1, f[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : f[3];
      return {
        type: "def",
        tag: p,
        raw: f[0],
        href: y,
        title: E
      };
    }
  }
  table(u) {
    const f = this.rules.block.table.exec(u);
    if (!f || !/[:|]/.test(f[2]))
      return;
    const p = IC(f[1]), y = f[2].replace(/^\||\| *$/g, "").split("|"), E = f[3] && f[3].trim() ? f[3].replace(/\n[ \t]*$/, "").split(`
`) : [], S = {
      type: "table",
      raw: f[0],
      header: [],
      align: [],
      rows: []
    };
    if (p.length === y.length) {
      for (const g of y)
        /^ *-+: *$/.test(g) ? S.align.push("right") : /^ *:-+: *$/.test(g) ? S.align.push("center") : /^ *:-+ *$/.test(g) ? S.align.push("left") : S.align.push(null);
      for (const g of p)
        S.header.push({
          text: g,
          tokens: this.lexer.inline(g)
        });
      for (const g of E)
        S.rows.push(IC(g, S.header.length).map((_) => ({
          text: _,
          tokens: this.lexer.inline(_)
        })));
      return S;
    }
  }
  lheading(u) {
    const f = this.rules.block.lheading.exec(u);
    if (f)
      return {
        type: "heading",
        raw: f[0],
        depth: f[2].charAt(0) === "=" ? 1 : 2,
        text: f[1],
        tokens: this.lexer.inline(f[1])
      };
  }
  paragraph(u) {
    const f = this.rules.block.paragraph.exec(u);
    if (f) {
      const p = f[1].charAt(f[1].length - 1) === `
` ? f[1].slice(0, -1) : f[1];
      return {
        type: "paragraph",
        raw: f[0],
        text: p,
        tokens: this.lexer.inline(p)
      };
    }
  }
  text(u) {
    const f = this.rules.block.text.exec(u);
    if (f)
      return {
        type: "text",
        raw: f[0],
        text: f[0],
        tokens: this.lexer.inline(f[0])
      };
  }
  escape(u) {
    const f = this.rules.inline.escape.exec(u);
    if (f)
      return {
        type: "escape",
        raw: f[0],
        text: Ri(f[1])
      };
  }
  tag(u) {
    const f = this.rules.inline.tag.exec(u);
    if (f)
      return !this.lexer.state.inLink && /^<a /i.test(f[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(f[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(f[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(f[0]) && (this.lexer.state.inRawBlock = !1), {
        type: "html",
        raw: f[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: f[0]
      };
  }
  link(u) {
    const f = this.rules.inline.link.exec(u);
    if (f) {
      const p = f[2].trim();
      if (!this.options.pedantic && /^</.test(p)) {
        if (!/>$/.test(p))
          return;
        const S = Iy(p.slice(0, -1), "\\");
        if ((p.length - S.length) % 2 === 0)
          return;
      } else {
        const S = LM(f[2], "()");
        if (S > -1) {
          const _ = (f[0].indexOf("!") === 0 ? 5 : 4) + f[1].length + S;
          f[2] = f[2].substring(0, S), f[0] = f[0].substring(0, _).trim(), f[3] = "";
        }
      }
      let y = f[2], E = "";
      if (this.options.pedantic) {
        const S = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(y);
        S && (y = S[1], E = S[3]);
      } else
        E = f[3] ? f[3].slice(1, -1) : "";
      return y = y.trim(), /^</.test(y) && (this.options.pedantic && !/>$/.test(p) ? y = y.slice(1) : y = y.slice(1, -1)), YC(f, {
        href: y && y.replace(this.rules.inline.anyPunctuation, "$1"),
        title: E && E.replace(this.rules.inline.anyPunctuation, "$1")
      }, f[0], this.lexer);
    }
  }
  reflink(u, f) {
    let p;
    if ((p = this.rules.inline.reflink.exec(u)) || (p = this.rules.inline.nolink.exec(u))) {
      const y = (p[2] || p[1]).replace(/\s+/g, " "), E = f[y.toLowerCase()];
      if (!E) {
        const S = p[0].charAt(0);
        return {
          type: "text",
          raw: S,
          text: S
        };
      }
      return YC(p, E, p[0], this.lexer);
    }
  }
  emStrong(u, f, p = "") {
    let y = this.rules.inline.emStrongLDelim.exec(u);
    if (!y || y[3] && p.match(/[\p{L}\p{N}]/u))
      return;
    if (!(y[1] || y[2] || "") || !p || this.rules.inline.punctuation.exec(p)) {
      const S = [...y[0]].length - 1;
      let g, _, L = S, O = 0;
      const A = y[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (A.lastIndex = 0, f = f.slice(-1 * u.length + S); (y = A.exec(f)) != null; ) {
        if (g = y[1] || y[2] || y[3] || y[4] || y[5] || y[6], !g)
          continue;
        if (_ = [...g].length, y[3] || y[4]) {
          L += _;
          continue;
        } else if ((y[5] || y[6]) && S % 3 && !((S + _) % 3)) {
          O += _;
          continue;
        }
        if (L -= _, L > 0)
          continue;
        _ = Math.min(_, _ + L + O);
        const U = [...y[0]][0].length, V = u.slice(0, S + y.index + U + _);
        if (Math.min(S, _) % 2) {
          const $ = V.slice(1, -1);
          return {
            type: "em",
            raw: V,
            text: $,
            tokens: this.lexer.inlineTokens($)
          };
        }
        const j = V.slice(2, -2);
        return {
          type: "strong",
          raw: V,
          text: j,
          tokens: this.lexer.inlineTokens(j)
        };
      }
    }
  }
  codespan(u) {
    const f = this.rules.inline.code.exec(u);
    if (f) {
      let p = f[2].replace(/\n/g, " ");
      const y = /[^ ]/.test(p), E = /^ /.test(p) && / $/.test(p);
      return y && E && (p = p.substring(1, p.length - 1)), p = Ri(p, !0), {
        type: "codespan",
        raw: f[0],
        text: p
      };
    }
  }
  br(u) {
    const f = this.rules.inline.br.exec(u);
    if (f)
      return {
        type: "br",
        raw: f[0]
      };
  }
  del(u) {
    const f = this.rules.inline.del.exec(u);
    if (f)
      return {
        type: "del",
        raw: f[0],
        text: f[2],
        tokens: this.lexer.inlineTokens(f[2])
      };
  }
  autolink(u) {
    const f = this.rules.inline.autolink.exec(u);
    if (f) {
      let p, y;
      return f[2] === "@" ? (p = Ri(f[1]), y = "mailto:" + p) : (p = Ri(f[1]), y = p), {
        type: "link",
        raw: f[0],
        text: p,
        href: y,
        tokens: [
          {
            type: "text",
            raw: p,
            text: p
          }
        ]
      };
    }
  }
  url(u) {
    var p;
    let f;
    if (f = this.rules.inline.url.exec(u)) {
      let y, E;
      if (f[2] === "@")
        y = Ri(f[0]), E = "mailto:" + y;
      else {
        let S;
        do
          S = f[0], f[0] = ((p = this.rules.inline._backpedal.exec(f[0])) == null ? void 0 : p[0]) ?? "";
        while (S !== f[0]);
        y = Ri(f[0]), f[1] === "www." ? E = "http://" + f[0] : E = f[0];
      }
      return {
        type: "link",
        raw: f[0],
        text: y,
        href: E,
        tokens: [
          {
            type: "text",
            raw: y,
            text: y
          }
        ]
      };
    }
  }
  inlineText(u) {
    const f = this.rules.inline.text.exec(u);
    if (f) {
      let p;
      return this.lexer.state.inRawBlock ? p = f[0] : p = Ri(f[0]), {
        type: "text",
        raw: f[0],
        text: p
      };
    }
  }
}
const MM = /^(?: *(?:\n|$))+/, zM = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, UM = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Qh = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, FM = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, PR = /(?:[*+-]|\d{1,9}[.)])/, HR = On(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, PR).getRegex(), gE = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, jM = /^[^\n]+/, SE = /(?!\s*\])(?:\\.|[^\[\]\\])+/, PM = On(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", SE).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), HM = On(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, PR).getRegex(), fg = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", wE = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, $M = On("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", wE).replace("tag", fg).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), $R = On(gE).replace("hr", Qh).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", fg).getRegex(), BM = On(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", $R).getRegex(), EE = {
  blockquote: BM,
  code: zM,
  def: PM,
  fences: UM,
  heading: FM,
  hr: Qh,
  html: $M,
  lheading: HR,
  list: HM,
  newline: MM,
  paragraph: $R,
  table: jh,
  text: jM
}, WC = On("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Qh).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", fg).getRegex(), VM = {
  ...EE,
  table: WC,
  paragraph: On(gE).replace("hr", Qh).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", WC).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", fg).getRegex()
}, IM = {
  ...EE,
  html: On(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", wE).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: jh,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: On(gE).replace("hr", Qh).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", HR).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, BR = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, YM = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, VR = /^( {2,}|\\)\n(?!\s*$)/, WM = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Gh = "\\p{P}\\p{S}", qM = On(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, Gh).getRegex(), QM = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, GM = On(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, Gh).getRegex(), KM = On("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, Gh).getRegex(), XM = On("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, Gh).getRegex(), ZM = On(/\\([punct])/, "gu").replace(/punct/g, Gh).getRegex(), JM = On(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), ez = On(wE).replace("(?:-->|$)", "-->").getRegex(), tz = On("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", ez).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), eg = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, nz = On(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", eg).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), IR = On(/^!?\[(label)\]\[(ref)\]/).replace("label", eg).replace("ref", SE).getRegex(), YR = On(/^!?\[(ref)\](?:\[\])?/).replace("ref", SE).getRegex(), rz = On("reflink|nolink(?!\\()", "g").replace("reflink", IR).replace("nolink", YR).getRegex(), bE = {
  _backpedal: jh,
  // only used for GFM url
  anyPunctuation: ZM,
  autolink: JM,
  blockSkip: QM,
  br: VR,
  code: YM,
  del: jh,
  emStrongLDelim: GM,
  emStrongRDelimAst: KM,
  emStrongRDelimUnd: XM,
  escape: BR,
  link: nz,
  nolink: YR,
  punctuation: qM,
  reflink: IR,
  reflinkSearch: rz,
  tag: tz,
  text: WM,
  url: jh
}, az = {
  ...bE,
  link: On(/^!?\[(label)\]\((.*?)\)/).replace("label", eg).getRegex(),
  reflink: On(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", eg).getRegex()
}, iE = {
  ...bE,
  escape: On(BR).replace("])", "~|])").getRegex(),
  url: On(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, iz = {
  ...iE,
  br: On(VR).replace("{2,}", "*").getRegex(),
  text: On(iE.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Yy = {
  normal: EE,
  gfm: VM,
  pedantic: IM
}, Mh = {
  normal: bE,
  gfm: iE,
  breaks: iz,
  pedantic: az
};
class vl {
  constructor(u) {
    Zn(this, "tokens");
    Zn(this, "options");
    Zn(this, "state");
    Zn(this, "tokenizer");
    Zn(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = u || Bc, this.options.tokenizer = this.options.tokenizer || new Jy(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const f = {
      block: Yy.normal,
      inline: Mh.normal
    };
    this.options.pedantic ? (f.block = Yy.pedantic, f.inline = Mh.pedantic) : this.options.gfm && (f.block = Yy.gfm, this.options.breaks ? f.inline = Mh.breaks : f.inline = Mh.gfm), this.tokenizer.rules = f;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: Yy,
      inline: Mh
    };
  }
  /**
   * Static Lex Method
   */
  static lex(u, f) {
    return new vl(f).lex(u);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(u, f) {
    return new vl(f).inlineTokens(u);
  }
  /**
   * Preprocessing
   */
  lex(u) {
    u = u.replace(/\r\n|\r/g, `
`), this.blockTokens(u, this.tokens);
    for (let f = 0; f < this.inlineQueue.length; f++) {
      const p = this.inlineQueue[f];
      this.inlineTokens(p.src, p.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(u, f = []) {
    this.options.pedantic ? u = u.replace(/\t/g, "    ").replace(/^ +$/gm, "") : u = u.replace(/^( *)(\t+)/gm, (g, _, L) => _ + "    ".repeat(L.length));
    let p, y, E, S;
    for (; u; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((g) => (p = g.call({ lexer: this }, u, f)) ? (u = u.substring(p.raw.length), f.push(p), !0) : !1))) {
        if (p = this.tokenizer.space(u)) {
          u = u.substring(p.raw.length), p.raw.length === 1 && f.length > 0 ? f[f.length - 1].raw += `
` : f.push(p);
          continue;
        }
        if (p = this.tokenizer.code(u)) {
          u = u.substring(p.raw.length), y = f[f.length - 1], y && (y.type === "paragraph" || y.type === "text") ? (y.raw += `
` + p.raw, y.text += `
` + p.text, this.inlineQueue[this.inlineQueue.length - 1].src = y.text) : f.push(p);
          continue;
        }
        if (p = this.tokenizer.fences(u)) {
          u = u.substring(p.raw.length), f.push(p);
          continue;
        }
        if (p = this.tokenizer.heading(u)) {
          u = u.substring(p.raw.length), f.push(p);
          continue;
        }
        if (p = this.tokenizer.hr(u)) {
          u = u.substring(p.raw.length), f.push(p);
          continue;
        }
        if (p = this.tokenizer.blockquote(u)) {
          u = u.substring(p.raw.length), f.push(p);
          continue;
        }
        if (p = this.tokenizer.list(u)) {
          u = u.substring(p.raw.length), f.push(p);
          continue;
        }
        if (p = this.tokenizer.html(u)) {
          u = u.substring(p.raw.length), f.push(p);
          continue;
        }
        if (p = this.tokenizer.def(u)) {
          u = u.substring(p.raw.length), y = f[f.length - 1], y && (y.type === "paragraph" || y.type === "text") ? (y.raw += `
` + p.raw, y.text += `
` + p.raw, this.inlineQueue[this.inlineQueue.length - 1].src = y.text) : this.tokens.links[p.tag] || (this.tokens.links[p.tag] = {
            href: p.href,
            title: p.title
          });
          continue;
        }
        if (p = this.tokenizer.table(u)) {
          u = u.substring(p.raw.length), f.push(p);
          continue;
        }
        if (p = this.tokenizer.lheading(u)) {
          u = u.substring(p.raw.length), f.push(p);
          continue;
        }
        if (E = u, this.options.extensions && this.options.extensions.startBlock) {
          let g = 1 / 0;
          const _ = u.slice(1);
          let L;
          this.options.extensions.startBlock.forEach((O) => {
            L = O.call({ lexer: this }, _), typeof L == "number" && L >= 0 && (g = Math.min(g, L));
          }), g < 1 / 0 && g >= 0 && (E = u.substring(0, g + 1));
        }
        if (this.state.top && (p = this.tokenizer.paragraph(E))) {
          y = f[f.length - 1], S && y.type === "paragraph" ? (y.raw += `
` + p.raw, y.text += `
` + p.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = y.text) : f.push(p), S = E.length !== u.length, u = u.substring(p.raw.length);
          continue;
        }
        if (p = this.tokenizer.text(u)) {
          u = u.substring(p.raw.length), y = f[f.length - 1], y && y.type === "text" ? (y.raw += `
` + p.raw, y.text += `
` + p.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = y.text) : f.push(p);
          continue;
        }
        if (u) {
          const g = "Infinite loop on byte: " + u.charCodeAt(0);
          if (this.options.silent) {
            console.error(g);
            break;
          } else
            throw new Error(g);
        }
      }
    return this.state.top = !0, f;
  }
  inline(u, f = []) {
    return this.inlineQueue.push({ src: u, tokens: f }), f;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(u, f = []) {
    let p, y, E, S = u, g, _, L;
    if (this.tokens.links) {
      const O = Object.keys(this.tokens.links);
      if (O.length > 0)
        for (; (g = this.tokenizer.rules.inline.reflinkSearch.exec(S)) != null; )
          O.includes(g[0].slice(g[0].lastIndexOf("[") + 1, -1)) && (S = S.slice(0, g.index) + "[" + "a".repeat(g[0].length - 2) + "]" + S.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (g = this.tokenizer.rules.inline.blockSkip.exec(S)) != null; )
      S = S.slice(0, g.index) + "[" + "a".repeat(g[0].length - 2) + "]" + S.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (g = this.tokenizer.rules.inline.anyPunctuation.exec(S)) != null; )
      S = S.slice(0, g.index) + "++" + S.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; u; )
      if (_ || (L = ""), _ = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((O) => (p = O.call({ lexer: this }, u, f)) ? (u = u.substring(p.raw.length), f.push(p), !0) : !1))) {
        if (p = this.tokenizer.escape(u)) {
          u = u.substring(p.raw.length), f.push(p);
          continue;
        }
        if (p = this.tokenizer.tag(u)) {
          u = u.substring(p.raw.length), y = f[f.length - 1], y && p.type === "text" && y.type === "text" ? (y.raw += p.raw, y.text += p.text) : f.push(p);
          continue;
        }
        if (p = this.tokenizer.link(u)) {
          u = u.substring(p.raw.length), f.push(p);
          continue;
        }
        if (p = this.tokenizer.reflink(u, this.tokens.links)) {
          u = u.substring(p.raw.length), y = f[f.length - 1], y && p.type === "text" && y.type === "text" ? (y.raw += p.raw, y.text += p.text) : f.push(p);
          continue;
        }
        if (p = this.tokenizer.emStrong(u, S, L)) {
          u = u.substring(p.raw.length), f.push(p);
          continue;
        }
        if (p = this.tokenizer.codespan(u)) {
          u = u.substring(p.raw.length), f.push(p);
          continue;
        }
        if (p = this.tokenizer.br(u)) {
          u = u.substring(p.raw.length), f.push(p);
          continue;
        }
        if (p = this.tokenizer.del(u)) {
          u = u.substring(p.raw.length), f.push(p);
          continue;
        }
        if (p = this.tokenizer.autolink(u)) {
          u = u.substring(p.raw.length), f.push(p);
          continue;
        }
        if (!this.state.inLink && (p = this.tokenizer.url(u))) {
          u = u.substring(p.raw.length), f.push(p);
          continue;
        }
        if (E = u, this.options.extensions && this.options.extensions.startInline) {
          let O = 1 / 0;
          const A = u.slice(1);
          let U;
          this.options.extensions.startInline.forEach((V) => {
            U = V.call({ lexer: this }, A), typeof U == "number" && U >= 0 && (O = Math.min(O, U));
          }), O < 1 / 0 && O >= 0 && (E = u.substring(0, O + 1));
        }
        if (p = this.tokenizer.inlineText(E)) {
          u = u.substring(p.raw.length), p.raw.slice(-1) !== "_" && (L = p.raw.slice(-1)), _ = !0, y = f[f.length - 1], y && y.type === "text" ? (y.raw += p.raw, y.text += p.text) : f.push(p);
          continue;
        }
        if (u) {
          const O = "Infinite loop on byte: " + u.charCodeAt(0);
          if (this.options.silent) {
            console.error(O);
            break;
          } else
            throw new Error(O);
        }
      }
    return f;
  }
}
class tg {
  constructor(u) {
    Zn(this, "options");
    this.options = u || Bc;
  }
  code(u, f, p) {
    var E;
    const y = (E = (f || "").match(/^\S*/)) == null ? void 0 : E[0];
    return u = u.replace(/\n$/, "") + `
`, y ? '<pre><code class="language-' + Ri(y) + '">' + (p ? u : Ri(u, !0)) + `</code></pre>
` : "<pre><code>" + (p ? u : Ri(u, !0)) + `</code></pre>
`;
  }
  blockquote(u) {
    return `<blockquote>
${u}</blockquote>
`;
  }
  html(u, f) {
    return u;
  }
  heading(u, f, p) {
    return `<h${f}>${u}</h${f}>
`;
  }
  hr() {
    return `<hr>
`;
  }
  list(u, f, p) {
    const y = f ? "ol" : "ul", E = f && p !== 1 ? ' start="' + p + '"' : "";
    return "<" + y + E + `>
` + u + "</" + y + `>
`;
  }
  listitem(u, f, p) {
    return `<li>${u}</li>
`;
  }
  checkbox(u) {
    return "<input " + (u ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph(u) {
    return `<p>${u}</p>
`;
  }
  table(u, f) {
    return f && (f = `<tbody>${f}</tbody>`), `<table>
<thead>
` + u + `</thead>
` + f + `</table>
`;
  }
  tablerow(u) {
    return `<tr>
${u}</tr>
`;
  }
  tablecell(u, f) {
    const p = f.header ? "th" : "td";
    return (f.align ? `<${p} align="${f.align}">` : `<${p}>`) + u + `</${p}>
`;
  }
  /**
   * span level renderer
   */
  strong(u) {
    return `<strong>${u}</strong>`;
  }
  em(u) {
    return `<em>${u}</em>`;
  }
  codespan(u) {
    return `<code>${u}</code>`;
  }
  br() {
    return "<br>";
  }
  del(u) {
    return `<del>${u}</del>`;
  }
  link(u, f, p) {
    const y = VC(u);
    if (y === null)
      return p;
    u = y;
    let E = '<a href="' + u + '"';
    return f && (E += ' title="' + f + '"'), E += ">" + p + "</a>", E;
  }
  image(u, f, p) {
    const y = VC(u);
    if (y === null)
      return p;
    u = y;
    let E = `<img src="${u}" alt="${p}"`;
    return f && (E += ` title="${f}"`), E += ">", E;
  }
  text(u) {
    return u;
  }
}
class xE {
  // no need for block level renderers
  strong(u) {
    return u;
  }
  em(u) {
    return u;
  }
  codespan(u) {
    return u;
  }
  del(u) {
    return u;
  }
  html(u) {
    return u;
  }
  text(u) {
    return u;
  }
  link(u, f, p) {
    return "" + p;
  }
  image(u, f, p) {
    return "" + p;
  }
  br() {
    return "";
  }
}
class ml {
  constructor(u) {
    Zn(this, "options");
    Zn(this, "renderer");
    Zn(this, "textRenderer");
    this.options = u || Bc, this.options.renderer = this.options.renderer || new tg(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new xE();
  }
  /**
   * Static Parse Method
   */
  static parse(u, f) {
    return new ml(f).parse(u);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(u, f) {
    return new ml(f).parseInline(u);
  }
  /**
   * Parse Loop
   */
  parse(u, f = !0) {
    let p = "";
    for (let y = 0; y < u.length; y++) {
      const E = u[y];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[E.type]) {
        const S = E, g = this.options.extensions.renderers[S.type].call({ parser: this }, S);
        if (g !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(S.type)) {
          p += g || "";
          continue;
        }
      }
      switch (E.type) {
        case "space":
          continue;
        case "hr": {
          p += this.renderer.hr();
          continue;
        }
        case "heading": {
          const S = E;
          p += this.renderer.heading(this.parseInline(S.tokens), S.depth, DM(this.parseInline(S.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const S = E;
          p += this.renderer.code(S.text, S.lang, !!S.escaped);
          continue;
        }
        case "table": {
          const S = E;
          let g = "", _ = "";
          for (let O = 0; O < S.header.length; O++)
            _ += this.renderer.tablecell(this.parseInline(S.header[O].tokens), { header: !0, align: S.align[O] });
          g += this.renderer.tablerow(_);
          let L = "";
          for (let O = 0; O < S.rows.length; O++) {
            const A = S.rows[O];
            _ = "";
            for (let U = 0; U < A.length; U++)
              _ += this.renderer.tablecell(this.parseInline(A[U].tokens), { header: !1, align: S.align[U] });
            L += this.renderer.tablerow(_);
          }
          p += this.renderer.table(g, L);
          continue;
        }
        case "blockquote": {
          const S = E, g = this.parse(S.tokens);
          p += this.renderer.blockquote(g);
          continue;
        }
        case "list": {
          const S = E, g = S.ordered, _ = S.start, L = S.loose;
          let O = "";
          for (let A = 0; A < S.items.length; A++) {
            const U = S.items[A], V = U.checked, j = U.task;
            let $ = "";
            if (U.task) {
              const se = this.renderer.checkbox(!!V);
              L ? U.tokens.length > 0 && U.tokens[0].type === "paragraph" ? (U.tokens[0].text = se + " " + U.tokens[0].text, U.tokens[0].tokens && U.tokens[0].tokens.length > 0 && U.tokens[0].tokens[0].type === "text" && (U.tokens[0].tokens[0].text = se + " " + U.tokens[0].tokens[0].text)) : U.tokens.unshift({
                type: "text",
                text: se + " "
              }) : $ += se + " ";
            }
            $ += this.parse(U.tokens, L), O += this.renderer.listitem($, j, !!V);
          }
          p += this.renderer.list(O, g, _);
          continue;
        }
        case "html": {
          const S = E;
          p += this.renderer.html(S.text, S.block);
          continue;
        }
        case "paragraph": {
          const S = E;
          p += this.renderer.paragraph(this.parseInline(S.tokens));
          continue;
        }
        case "text": {
          let S = E, g = S.tokens ? this.parseInline(S.tokens) : S.text;
          for (; y + 1 < u.length && u[y + 1].type === "text"; )
            S = u[++y], g += `
` + (S.tokens ? this.parseInline(S.tokens) : S.text);
          p += f ? this.renderer.paragraph(g) : g;
          continue;
        }
        default: {
          const S = 'Token with "' + E.type + '" type was not found.';
          if (this.options.silent)
            return console.error(S), "";
          throw new Error(S);
        }
      }
    }
    return p;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(u, f) {
    f = f || this.renderer;
    let p = "";
    for (let y = 0; y < u.length; y++) {
      const E = u[y];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[E.type]) {
        const S = this.options.extensions.renderers[E.type].call({ parser: this }, E);
        if (S !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(E.type)) {
          p += S || "";
          continue;
        }
      }
      switch (E.type) {
        case "escape": {
          const S = E;
          p += f.text(S.text);
          break;
        }
        case "html": {
          const S = E;
          p += f.html(S.text);
          break;
        }
        case "link": {
          const S = E;
          p += f.link(S.href, S.title, this.parseInline(S.tokens, f));
          break;
        }
        case "image": {
          const S = E;
          p += f.image(S.href, S.title, S.text);
          break;
        }
        case "strong": {
          const S = E;
          p += f.strong(this.parseInline(S.tokens, f));
          break;
        }
        case "em": {
          const S = E;
          p += f.em(this.parseInline(S.tokens, f));
          break;
        }
        case "codespan": {
          const S = E;
          p += f.codespan(S.text);
          break;
        }
        case "br": {
          p += f.br();
          break;
        }
        case "del": {
          const S = E;
          p += f.del(this.parseInline(S.tokens, f));
          break;
        }
        case "text": {
          const S = E;
          p += f.text(S.text);
          break;
        }
        default: {
          const S = 'Token with "' + E.type + '" type was not found.';
          if (this.options.silent)
            return console.error(S), "";
          throw new Error(S);
        }
      }
    }
    return p;
  }
}
class Ph {
  constructor(u) {
    Zn(this, "options");
    this.options = u || Bc;
  }
  /**
   * Process markdown before marked
   */
  preprocess(u) {
    return u;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(u) {
    return u;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(u) {
    return u;
  }
}
Zn(Ph, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
var $c, oE, WR;
class oz {
  constructor(...u) {
    iC(this, $c);
    Zn(this, "defaults", yE());
    Zn(this, "options", this.setOptions);
    Zn(this, "parse", Py(this, $c, oE).call(this, vl.lex, ml.parse));
    Zn(this, "parseInline", Py(this, $c, oE).call(this, vl.lexInline, ml.parseInline));
    Zn(this, "Parser", ml);
    Zn(this, "Renderer", tg);
    Zn(this, "TextRenderer", xE);
    Zn(this, "Lexer", vl);
    Zn(this, "Tokenizer", Jy);
    Zn(this, "Hooks", Ph);
    this.use(...u);
  }
  /**
   * Run callback for every token
   */
  walkTokens(u, f) {
    var y, E;
    let p = [];
    for (const S of u)
      switch (p = p.concat(f.call(this, S)), S.type) {
        case "table": {
          const g = S;
          for (const _ of g.header)
            p = p.concat(this.walkTokens(_.tokens, f));
          for (const _ of g.rows)
            for (const L of _)
              p = p.concat(this.walkTokens(L.tokens, f));
          break;
        }
        case "list": {
          const g = S;
          p = p.concat(this.walkTokens(g.items, f));
          break;
        }
        default: {
          const g = S;
          (E = (y = this.defaults.extensions) == null ? void 0 : y.childTokens) != null && E[g.type] ? this.defaults.extensions.childTokens[g.type].forEach((_) => {
            const L = g[_].flat(1 / 0);
            p = p.concat(this.walkTokens(L, f));
          }) : g.tokens && (p = p.concat(this.walkTokens(g.tokens, f)));
        }
      }
    return p;
  }
  use(...u) {
    const f = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return u.forEach((p) => {
      const y = { ...p };
      if (y.async = this.defaults.async || y.async || !1, p.extensions && (p.extensions.forEach((E) => {
        if (!E.name)
          throw new Error("extension name required");
        if ("renderer" in E) {
          const S = f.renderers[E.name];
          S ? f.renderers[E.name] = function(...g) {
            let _ = E.renderer.apply(this, g);
            return _ === !1 && (_ = S.apply(this, g)), _;
          } : f.renderers[E.name] = E.renderer;
        }
        if ("tokenizer" in E) {
          if (!E.level || E.level !== "block" && E.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const S = f[E.level];
          S ? S.unshift(E.tokenizer) : f[E.level] = [E.tokenizer], E.start && (E.level === "block" ? f.startBlock ? f.startBlock.push(E.start) : f.startBlock = [E.start] : E.level === "inline" && (f.startInline ? f.startInline.push(E.start) : f.startInline = [E.start]));
        }
        "childTokens" in E && E.childTokens && (f.childTokens[E.name] = E.childTokens);
      }), y.extensions = f), p.renderer) {
        const E = this.defaults.renderer || new tg(this.defaults);
        for (const S in p.renderer) {
          if (!(S in E))
            throw new Error(`renderer '${S}' does not exist`);
          if (S === "options")
            continue;
          const g = S, _ = p.renderer[g], L = E[g];
          E[g] = (...O) => {
            let A = _.apply(E, O);
            return A === !1 && (A = L.apply(E, O)), A || "";
          };
        }
        y.renderer = E;
      }
      if (p.tokenizer) {
        const E = this.defaults.tokenizer || new Jy(this.defaults);
        for (const S in p.tokenizer) {
          if (!(S in E))
            throw new Error(`tokenizer '${S}' does not exist`);
          if (["options", "rules", "lexer"].includes(S))
            continue;
          const g = S, _ = p.tokenizer[g], L = E[g];
          E[g] = (...O) => {
            let A = _.apply(E, O);
            return A === !1 && (A = L.apply(E, O)), A;
          };
        }
        y.tokenizer = E;
      }
      if (p.hooks) {
        const E = this.defaults.hooks || new Ph();
        for (const S in p.hooks) {
          if (!(S in E))
            throw new Error(`hook '${S}' does not exist`);
          if (S === "options")
            continue;
          const g = S, _ = p.hooks[g], L = E[g];
          Ph.passThroughHooks.has(S) ? E[g] = (O) => {
            if (this.defaults.async)
              return Promise.resolve(_.call(E, O)).then((U) => L.call(E, U));
            const A = _.call(E, O);
            return L.call(E, A);
          } : E[g] = (...O) => {
            let A = _.apply(E, O);
            return A === !1 && (A = L.apply(E, O)), A;
          };
        }
        y.hooks = E;
      }
      if (p.walkTokens) {
        const E = this.defaults.walkTokens, S = p.walkTokens;
        y.walkTokens = function(g) {
          let _ = [];
          return _.push(S.call(this, g)), E && (_ = _.concat(E.call(this, g))), _;
        };
      }
      this.defaults = { ...this.defaults, ...y };
    }), this;
  }
  setOptions(u) {
    return this.defaults = { ...this.defaults, ...u }, this;
  }
  lexer(u, f) {
    return vl.lex(u, f ?? this.defaults);
  }
  parser(u, f) {
    return ml.parse(u, f ?? this.defaults);
  }
}
$c = new WeakSet(), oE = function(u, f) {
  return (p, y) => {
    const E = { ...y }, S = { ...this.defaults, ...E };
    this.defaults.async === !0 && E.async === !1 && (S.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), S.async = !0);
    const g = Py(this, $c, WR).call(this, !!S.silent, !!S.async);
    if (typeof p > "u" || p === null)
      return g(new Error("marked(): input parameter is undefined or null"));
    if (typeof p != "string")
      return g(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(p) + ", string expected"));
    if (S.hooks && (S.hooks.options = S), S.async)
      return Promise.resolve(S.hooks ? S.hooks.preprocess(p) : p).then((_) => u(_, S)).then((_) => S.hooks ? S.hooks.processAllTokens(_) : _).then((_) => S.walkTokens ? Promise.all(this.walkTokens(_, S.walkTokens)).then(() => _) : _).then((_) => f(_, S)).then((_) => S.hooks ? S.hooks.postprocess(_) : _).catch(g);
    try {
      S.hooks && (p = S.hooks.preprocess(p));
      let _ = u(p, S);
      S.hooks && (_ = S.hooks.processAllTokens(_)), S.walkTokens && this.walkTokens(_, S.walkTokens);
      let L = f(_, S);
      return S.hooks && (L = S.hooks.postprocess(L)), L;
    } catch (_) {
      return g(_);
    }
  };
}, WR = function(u, f) {
  return (p) => {
    if (p.message += `
Please report this to https://github.com/markedjs/marked.`, u) {
      const y = "<p>An error occurred:</p><pre>" + Ri(p.message + "", !0) + "</pre>";
      return f ? Promise.resolve(y) : y;
    }
    if (f)
      return Promise.reject(p);
    throw p;
  };
};
const Hc = new oz();
function xn(c, u) {
  return Hc.parse(c, u);
}
xn.options = xn.setOptions = function(c) {
  return Hc.setOptions(c), xn.defaults = Hc.defaults, UR(xn.defaults), xn;
};
xn.getDefaults = yE;
xn.defaults = Bc;
xn.use = function(...c) {
  return Hc.use(...c), xn.defaults = Hc.defaults, UR(xn.defaults), xn;
};
xn.walkTokens = function(c, u) {
  return Hc.walkTokens(c, u);
};
xn.parseInline = Hc.parseInline;
xn.Parser = ml;
xn.parser = ml.parse;
xn.Renderer = tg;
xn.TextRenderer = xE;
xn.Lexer = vl;
xn.lexer = vl.lex;
xn.Tokenizer = Jy;
xn.Hooks = Ph;
xn.parse = xn;
xn.options;
xn.setOptions;
xn.use;
xn.walkTokens;
xn.parseInline;
ml.parse;
vl.lex;
var qR = { exports: {} };
(function(c) {
  (function(u, f) {
    c.exports ? c.exports = f() : u.moo = f();
  })(Oo, function() {
    var u = Object.prototype.hasOwnProperty, f = Object.prototype.toString, p = typeof new RegExp().sticky == "boolean";
    function y(B) {
      return B && f.call(B) === "[object RegExp]";
    }
    function E(B) {
      return B && typeof B == "object" && !y(B) && !Array.isArray(B);
    }
    function S(B) {
      return B.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    function g(B) {
      var ee = new RegExp("|" + B);
      return ee.exec("").length - 1;
    }
    function _(B) {
      return "(" + B + ")";
    }
    function L(B) {
      if (!B.length) return "(?!)";
      var ee = B.map(function(pe) {
        return "(?:" + pe + ")";
      }).join("|");
      return "(?:" + ee + ")";
    }
    function O(B) {
      if (typeof B == "string")
        return "(?:" + S(B) + ")";
      if (y(B)) {
        if (B.ignoreCase) throw new Error("RegExp /i flag not allowed");
        if (B.global) throw new Error("RegExp /g flag is implied");
        if (B.sticky) throw new Error("RegExp /y flag is implied");
        if (B.multiline) throw new Error("RegExp /m flag is implied");
        return B.source;
      } else
        throw new Error("Not a pattern: " + B);
    }
    function A(B, ee) {
      return B.length > ee ? B : Array(ee - B.length + 1).join(" ") + B;
    }
    function U(B, ee) {
      for (var pe = B.length, ne = 0; ; ) {
        var me = B.lastIndexOf(`
`, pe - 1);
        if (me === -1 || (ne++, pe = me, ne === ee) || pe === 0)
          break;
      }
      var Se = ne < ee ? 0 : pe + 1;
      return B.substring(Se).split(`
`);
    }
    function V(B) {
      for (var ee = Object.getOwnPropertyNames(B), pe = [], ne = 0; ne < ee.length; ne++) {
        var me = ee[ne], Se = B[me], he = [].concat(Se);
        if (me === "include") {
          for (var I = 0; I < he.length; I++)
            pe.push({ include: he[I] });
          continue;
        }
        var oe = [];
        he.forEach(function(k) {
          E(k) ? (oe.length && pe.push($(me, oe)), pe.push($(me, k)), oe = []) : oe.push(k);
        }), oe.length && pe.push($(me, oe));
      }
      return pe;
    }
    function j(B) {
      for (var ee = [], pe = 0; pe < B.length; pe++) {
        var ne = B[pe];
        if (ne.include) {
          for (var me = [].concat(ne.include), Se = 0; Se < me.length; Se++)
            ee.push({ include: me[Se] });
          continue;
        }
        if (!ne.type)
          throw new Error("Rule has no type: " + JSON.stringify(ne));
        ee.push($(ne.type, ne));
      }
      return ee;
    }
    function $(B, ee) {
      if (E(ee) || (ee = { match: ee }), ee.include)
        throw new Error("Matching rules cannot also include states");
      var pe = {
        defaultType: B,
        lineBreaks: !!ee.error || !!ee.fallback,
        pop: !1,
        next: null,
        push: null,
        error: !1,
        fallback: !1,
        value: null,
        type: null,
        shouldThrow: !1
      };
      for (var ne in ee)
        u.call(ee, ne) && (pe[ne] = ee[ne]);
      if (typeof pe.type == "string" && B !== pe.type)
        throw new Error("Type transform cannot be a string (type '" + pe.type + "' for token '" + B + "')");
      var me = pe.match;
      return pe.match = Array.isArray(me) ? me : me ? [me] : [], pe.match.sort(function(Se, he) {
        return y(Se) && y(he) ? 0 : y(he) ? -1 : y(Se) ? 1 : he.length - Se.length;
      }), pe;
    }
    function se(B) {
      return Array.isArray(B) ? j(B) : V(B);
    }
    var Ce = $("error", { lineBreaks: !0, shouldThrow: !0 });
    function Ae(B, ee) {
      for (var pe = null, ne = /* @__PURE__ */ Object.create(null), me = !0, Se = null, he = [], I = [], oe = 0; oe < B.length; oe++)
        B[oe].fallback && (me = !1);
      for (var oe = 0; oe < B.length; oe++) {
        var k = B[oe];
        if (k.include)
          throw new Error("Inheritance is not allowed in stateless lexers");
        if (k.error || k.fallback) {
          if (pe)
            throw !k.fallback == !pe.fallback ? new Error("Multiple " + (k.fallback ? "fallback" : "error") + " rules not allowed (for token '" + k.defaultType + "')") : new Error("fallback and error are mutually exclusive (for token '" + k.defaultType + "')");
          pe = k;
        }
        var K = k.match.slice();
        if (me)
          for (; K.length && typeof K[0] == "string" && K[0].length === 1; ) {
            var fe = K.shift();
            ne[fe.charCodeAt(0)] = k;
          }
        if (k.pop || k.push || k.next) {
          if (!ee)
            throw new Error("State-switching options are not allowed in stateless lexers (for token '" + k.defaultType + "')");
          if (k.fallback)
            throw new Error("State-switching options are not allowed on fallback tokens (for token '" + k.defaultType + "')");
        }
        if (K.length !== 0) {
          me = !1, he.push(k);
          for (var Be = 0; Be < K.length; Be++) {
            var Ye = K[Be];
            if (y(Ye)) {
              if (Se === null)
                Se = Ye.unicode;
              else if (Se !== Ye.unicode && k.fallback === !1)
                throw new Error("If one rule is /u then all must be");
            }
          }
          var lt = L(K.map(O)), et = new RegExp(lt);
          if (et.test(""))
            throw new Error("RegExp matches empty string: " + et);
          var dt = g(lt);
          if (dt > 0)
            throw new Error("RegExp has capture groups: " + et + `
Use (?: … ) instead`);
          if (!k.lineBreaks && et.test(`
`))
            throw new Error("Rule should declare lineBreaks: " + et);
          I.push(_(lt));
        }
      }
      var ut = pe && pe.fallback, Ft = p && !ut ? "ym" : "gm", jt = p || ut ? "" : "|";
      Se === !0 && (Ft += "u");
      var Cn = new RegExp(L(I) + jt, Ft);
      return { regexp: Cn, groups: he, fast: ne, error: pe || Ce };
    }
    function we(B) {
      var ee = Ae(se(B));
      return new De({ start: ee }, "start");
    }
    function ge(B, ee, pe) {
      var ne = B && (B.push || B.next);
      if (ne && !pe[ne])
        throw new Error("Missing state '" + ne + "' (in token '" + B.defaultType + "' of state '" + ee + "')");
      if (B && B.pop && +B.pop != 1)
        throw new Error("pop must be 1 (in token '" + B.defaultType + "' of state '" + ee + "')");
    }
    function Ie(B, ee) {
      var pe = B.$all ? se(B.$all) : [];
      delete B.$all;
      var ne = Object.getOwnPropertyNames(B);
      ee || (ee = ne[0]);
      for (var me = /* @__PURE__ */ Object.create(null), Se = 0; Se < ne.length; Se++) {
        var he = ne[Se];
        me[he] = se(B[he]).concat(pe);
      }
      for (var Se = 0; Se < ne.length; Se++)
        for (var he = ne[Se], I = me[he], oe = /* @__PURE__ */ Object.create(null), k = 0; k < I.length; k++) {
          var K = I[k];
          if (K.include) {
            var fe = [k, 1];
            if (K.include !== he && !oe[K.include]) {
              oe[K.include] = !0;
              var Be = me[K.include];
              if (!Be)
                throw new Error("Cannot include nonexistent state '" + K.include + "' (in state '" + he + "')");
              for (var Ye = 0; Ye < Be.length; Ye++) {
                var lt = Be[Ye];
                I.indexOf(lt) === -1 && fe.push(lt);
              }
            }
            I.splice.apply(I, fe), k--;
          }
        }
      for (var et = /* @__PURE__ */ Object.create(null), Se = 0; Se < ne.length; Se++) {
        var he = ne[Se];
        et[he] = Ae(me[he], !0);
      }
      for (var Se = 0; Se < ne.length; Se++) {
        for (var dt = ne[Se], ut = et[dt], Ft = ut.groups, k = 0; k < Ft.length; k++)
          ge(Ft[k], dt, et);
        for (var jt = Object.getOwnPropertyNames(ut.fast), k = 0; k < jt.length; k++)
          ge(ut.fast[jt[k]], dt, et);
      }
      return new De(et, ee);
    }
    function be(B) {
      for (var ee = typeof Map < "u", pe = ee ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null), ne = Object.getOwnPropertyNames(B), me = 0; me < ne.length; me++) {
        var Se = ne[me], he = B[Se], I = Array.isArray(he) ? he : [he];
        I.forEach(function(oe) {
          if (typeof oe != "string")
            throw new Error("keyword must be string (in keyword '" + Se + "')");
          ee ? pe.set(oe, Se) : pe[oe] = Se;
        });
      }
      return function(oe) {
        return ee ? pe.get(oe) : pe[oe];
      };
    }
    var De = function(B, ee) {
      this.startState = ee, this.states = B, this.buffer = "", this.stack = [], this.reset();
    };
    De.prototype.reset = function(B, ee) {
      return this.buffer = B || "", this.index = 0, this.line = ee ? ee.line : 1, this.col = ee ? ee.col : 1, this.queuedToken = ee ? ee.queuedToken : null, this.queuedText = ee ? ee.queuedText : "", this.queuedThrow = ee ? ee.queuedThrow : null, this.setState(ee ? ee.state : this.startState), this.stack = ee && ee.stack ? ee.stack.slice() : [], this;
    }, De.prototype.save = function() {
      return {
        line: this.line,
        col: this.col,
        state: this.state,
        stack: this.stack.slice(),
        queuedToken: this.queuedToken,
        queuedText: this.queuedText,
        queuedThrow: this.queuedThrow
      };
    }, De.prototype.setState = function(B) {
      if (!(!B || this.state === B)) {
        this.state = B;
        var ee = this.states[B];
        this.groups = ee.groups, this.error = ee.error, this.re = ee.regexp, this.fast = ee.fast;
      }
    }, De.prototype.popState = function() {
      this.setState(this.stack.pop());
    }, De.prototype.pushState = function(B) {
      this.stack.push(this.state), this.setState(B);
    };
    var We = p ? function(B, ee) {
      return B.exec(ee);
    } : function(B, ee) {
      var pe = B.exec(ee);
      return pe[0].length === 0 ? null : pe;
    };
    De.prototype._getGroup = function(B) {
      for (var ee = this.groups.length, pe = 0; pe < ee; pe++)
        if (B[pe + 1] !== void 0)
          return this.groups[pe];
      throw new Error("Cannot find token type for matched text");
    };
    function Ut() {
      return this.value;
    }
    if (De.prototype.next = function() {
      var B = this.index;
      if (this.queuedGroup) {
        var ee = this._token(this.queuedGroup, this.queuedText, B);
        return this.queuedGroup = null, this.queuedText = "", ee;
      }
      var pe = this.buffer;
      if (B !== pe.length) {
        var he = this.fast[pe.charCodeAt(B)];
        if (he)
          return this._token(he, pe.charAt(B), B);
        var ne = this.re;
        ne.lastIndex = B;
        var me = We(ne, pe), Se = this.error;
        if (me == null)
          return this._token(Se, pe.slice(B, pe.length), B);
        var he = this._getGroup(me), I = me[0];
        return Se.fallback && me.index !== B ? (this.queuedGroup = he, this.queuedText = I, this._token(Se, pe.slice(B, me.index), B)) : this._token(he, I, B);
      }
    }, De.prototype._token = function(B, ee, pe) {
      var ne = 0;
      if (B.lineBreaks) {
        var me = /\n/g, Se = 1;
        if (ee === `
`)
          ne = 1;
        else
          for (; me.exec(ee); )
            ne++, Se = me.lastIndex;
      }
      var he = {
        type: typeof B.type == "function" && B.type(ee) || B.defaultType,
        value: typeof B.value == "function" ? B.value(ee) : ee,
        text: ee,
        toString: Ut,
        offset: pe,
        lineBreaks: ne,
        line: this.line,
        col: this.col
      }, I = ee.length;
      if (this.index += I, this.line += ne, ne !== 0 ? this.col = I - Se + 1 : this.col += I, B.shouldThrow) {
        var oe = new Error(this.formatError(he, "invalid syntax"));
        throw oe;
      }
      return B.pop ? this.popState() : B.push ? this.pushState(B.push) : B.next && this.setState(B.next), he;
    }, typeof Symbol < "u" && Symbol.iterator) {
      var Dt = function(B) {
        this.lexer = B;
      };
      Dt.prototype.next = function() {
        var B = this.lexer.next();
        return { value: B, done: !B };
      }, Dt.prototype[Symbol.iterator] = function() {
        return this;
      }, De.prototype[Symbol.iterator] = function() {
        return new Dt(this);
      };
    }
    return De.prototype.formatError = function(B, ee) {
      if (B == null)
        var pe = this.buffer.slice(this.index), B = {
          text: pe,
          offset: this.index,
          lineBreaks: pe.indexOf(`
`) === -1 ? 0 : 1,
          line: this.line,
          col: this.col
        };
      var ne = 2, me = Math.max(B.line - ne, 1), Se = B.line + ne, he = String(Se).length, I = U(
        this.buffer,
        this.line - B.line + ne + 1
      ).slice(0, 5), oe = [];
      oe.push(ee + " at line " + B.line + " col " + B.col + ":"), oe.push("");
      for (var k = 0; k < I.length; k++) {
        var K = I[k], fe = me + k;
        oe.push(A(String(fe), he) + "  " + K), fe === B.line && oe.push(A("", he + B.col + 1) + "^");
      }
      return oe.join(`
`);
    }, De.prototype.clone = function() {
      return new De(this.states, this.state);
    }, De.prototype.has = function(B) {
      return !0;
    }, {
      compile: we,
      states: Ie,
      error: Object.freeze({ error: !0 }),
      fallback: Object.freeze({ fallback: !0 }),
      keywords: be
    };
  });
})(qR);
var lz = qR.exports;
const Dd = /* @__PURE__ */ lE(lz), qC = Dd.compile({
  /**
   * Matches various white space characters, including tab, vertical tab, form
   * feed, zero-width non-breaking space, and Unicode space separators.
   */
  WhiteSpace: { match: /[\t\v\f\ufeff\p{Zs}]+/u, lineBreaks: !0 },
  /**
   * Matches various line break sequences, including carriage return followed by
   * line feed, carriage return, line feed, and Unicode line/paragraph separators.
   */
  Lines: { match: /\r?\n|[\r\u2028\u2029]/u, lineBreaks: !0 },
  /**
   * Matches (literally) identifiers followed by collon (`:`) that may include
   * Unicode characters and escape sequences.
   */
  ObjectKey: /\[?(?:\x23)?(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+\]?(?=:)/u,
  /**
   * Matches various punctuators commonly used in programming languages
   * and regular expressions. It includes operators, delimiters, and special
   * characters.
   */
  Punctuator: /--|\+\+|=>|\.{3}|\??\.(?!\d)|(?:&&|\|\||\?\?|[+\-%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2}|\/(?![\/*]))=?|[?~,:;[\](){}]/u,
  /**
   * Matches boolean literals, allowing for optional single or double quotes.
   */
  BooleanLiteral: /true|false/u,
  /**
   * Matches various forms of numeric literals, including hexadecimal, octal,
   * binary, decimal, and scientific notation.
   */
  NumericLiteral: /(?:0[xX][\da-fA-F](?:_?[\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|0n|[1-9](?:_?\d)*n|(?:(?:0(?!\d)|0\d*[89]\d*|[1-9](?:_?\d)*)(?:\.(?:\d(?:_?\d)*)?)?|\.\d(?:_?\d)*)(?:[eE][+-]?\d(?:_?\d)*)?|0[0-7]+/u,
  /**
   * Matches single-quoted and double-quoted string literals, allowing for
   * escaping of quotes and newlines within the string.
   */
  StringLiteral: {
    match: /(?:'(?:(?!')[^\\\n\r]|\\(?:\r\n|[^]))*')|(?:"(?:(?!")[^\\\n\r]|\\(?:\r\n|[^]))*")/u,
    value: (c) => `"${c.slice(1, -1)}"`
  },
  /**
   * Matches identifiers that may include Unicode characters and escape
   * sequences.
   */
  Identifier: /(?:\x23)?(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+/u
});
function uz(c, u = {}) {
  const f = c.trim().replace(/[\,]+$/, "");
  if (f === "")
    return "{}";
  if (!sz(f))
    throw new TypeError("Unexpected input format");
  let p = "";
  qC.reset(f);
  for (const y of qC)
    if (!(y.type === "WhiteSpace" || y.type === "Lines")) {
      switch (y.type) {
        case "Identifier":
          y.value = `"${u[y.value] || y.value}"`;
          break;
        case "ObjectKey":
          y.value.slice(0, 1) === "[" && y.value.slice(-1) === "]" ? y.value = `"${u[y.value.slice(1, -1)] || y.value.slice(1, -1)}"` : y.value = `"${y.value}"`;
          break;
      }
      p += y.value;
    }
  return p.replace(/\,([\}\]])/g, "$1");
}
function sz(c) {
  return c.startsWith("{") && c.endsWith("}") || c.startsWith("[") && c.endsWith("]");
}
const cz = /[ \t\v\f\ufeff]+/, fz = /(?:(?![\s\x00\x22\x27\x3E\x2F\x3D\x00-\x1F\x7F-\x9F])[^\s\x00-\x1F\x7F-\x9F\x22\x27\x3E\x2F\x3D])+/, dz = /[\.#](?:(?!-?\d)(?:[a-zA-Z0-9\xA0-\uFFFF_-])+)/, pz = new RegExp("(?<==)(?:true|false)"), hz = new RegExp("(?<==)-?(?:(?:0[xX][\\da-fA-F](?:_?[\\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|-?0n|-?[1-9](?:_?\\d)*n|(?:(?:0(?!\\d)|0\\d*[89]\\d*|[1-9](?:_?\\d)*)(?:\\.(?:\\d(?:_?\\d)*)?)?|\\.\\d(?:_?\\d)*)(?:[eE][+-]?\\d(?:_?\\d)*)?|-?0[0-7]+)"), vz = new RegExp(`(?<==)'(?!.*&[0-9a-zA-Z]+;)[^'\\\\]*(?:\\\\.|\\\\n[^"\\\\]*|&[^0-9a-zA-Z;]*)*'`), mz = new RegExp('(?<==)"(?!.*&[0-9a-zA-Z]+;)[^"\\\\]*(?:\\\\.|\\\\n[^"\\\\]*|&[^0-9a-zA-Z;]*)*"'), yz = new RegExp("(?<==)[^\"\\s'`=<>\\x00]+");
function Ww(c) {
  const u = typeof c == "string" && /^(['"]).*?\1$/.test(c) ? (
    // omit quotes
    c.slice(1, -1)
  ) : c;
  return u.startsWith("[") && u.endsWith("]") || u.startsWith("{") && u.endsWith("}") ? JSON.parse(uz(u)) : u;
}
function gz(c) {
  let u = "";
  for (const f in c) {
    const p = c[f];
    switch (typeof p) {
      case "object":
        u += ` ${f}='${JSON.stringify(p)}'`;
        break;
      case "string":
        u += ` ${f}="${p}"`;
        break;
      case "number":
      case "boolean":
        u += ` ${f}=${p}`;
        break;
    }
  }
  return u.slice(1);
}
const QC = Dd.states({
  main: {
    WhiteSpace: cz,
    AttributeShorthand: dz,
    BooleanLiteral: {
      match: pz,
      value(c) {
        return c === "true";
      }
    },
    NumericLiteral: {
      match: hz,
      value(c) {
        const u = Number(c);
        return Number.isNaN(u) ? Number(c.replace(/_|n$/g, "")) : Number(c);
      }
    },
    SingleQuotedValue: {
      match: vz,
      value: Ww,
      type: () => "StringLiteral"
    },
    DoubleQuotedLiteral: {
      match: mz,
      value: Ww,
      type: () => "StringLiteral"
    },
    UnquotedLiteral: {
      match: yz,
      value: Ww,
      type: () => "StringLiteral"
    },
    AttributeName: fz,
    Separator: "="
  }
});
function Sz(c) {
  let u = null;
  const f = QC.reset(c), p = {};
  Object.defineProperties(p, {
    toString: {
      writable: !1,
      enumerable: !1,
      configurable: !1,
      value: () => gz(p)
    },
    getTokens: {
      writable: !1,
      enumerable: !1,
      configurable: !1,
      value: () => Array.from(QC.reset(c))
    }
  });
  const y = [];
  for (const { type: E, value: S } of f)
    switch (E) {
      case "AttributeName":
        u = S, p[u] = u;
        break;
      case "AttributeShorthand":
        const g = S[0];
        g === "." ? y.push(S.slice(1)) : g === "#" && (p.id = S.slice(1));
        break;
      case "BooleanLiteral":
      case "NumericLiteral":
      case "StringLiteral":
        u && (u === "class" && y.push(S), p[u] = S, u = null);
        break;
    }
  return y.length && (p.class = y.join(" ")), p;
}
const GC = (c) => c.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
function wz(c, ...u) {
  if (typeof c == "string")
    return GC(c);
  let f = c[0];
  for (const [p, y] of u.entries())
    f = f + GC(String(y)) + c[p + 1];
  return f;
}
class Ez extends Error {
  constructor(u) {
    super(`Missing a value for ${u ? `the placeholder: ${u}` : "a placeholder"}`, u), this.name = "MissingValueError", this.key = u;
  }
}
function bz(c, u, { ignoreMissing: f = !1, transform: p = ({ value: y }) => y } = {}) {
  if (typeof c != "string")
    throw new TypeError(`Expected a \`string\` in the first argument, got \`${typeof c}\``);
  if (typeof u != "object")
    throw new TypeError(`Expected an \`object\` or \`Array\` in the second argument, got \`${typeof u}\``);
  const y = (_, L) => {
    let O = u;
    for (const U of L.split("."))
      O = O ? O[U] : void 0;
    const A = p({ value: O, key: L });
    if (A === void 0) {
      if (f)
        return _;
      throw new Ez(L);
    }
    return String(A);
  }, E = (_) => (...L) => wz(_(...L)), S = /{{(\d+|[a-z$_][\w\-$]*?(?:\.[\w\-$]*?)*?)}}/gi;
  S.test(c) && (c = c.replace(S, E(y)));
  const g = /{(\d+|[a-z$_][\w\-$]*?(?:\.[\w\-$]*?)*?)}/gi;
  return c.replace(g, y);
}
const xz = `
<figure class='preview'>
  <figcaption>{title}</figcaption>
  <div class='preview-showcase'>
    {preview}
  </div>
  <div class='preview-code'>
    {code}
  </div>
</figure>
`, KC = /[ \t]*preview(?:=([""])?.*?\1)?$|preview(?:=([""])?.*?\1)?[ \t]*/g;
function Cz(c) {
  return Dd.compile({
    placeholder: /\{code\}/,
    text: Dd.fallback
  }).reset(c);
}
function Rz(c) {
  const u = Dd.compile({
    placeholder: {
      match: /{[ \t]*?(?:[a-zA-Z_][\w\d\.]*?|[\d][\w\d\.]+)[ \t]*?}/,
      value(p) {
        return p.replace(/[ \t]+/g, "");
      }
    },
    chunk: Dd.fallback
  }).reset(c);
  let f = "";
  for (const p of u)
    f += p.value;
  return f;
}
function Tz(c, u) {
  return {
    type: "html",
    block: !0,
    pre: !1,
    raw: c,
    text: u
  };
}
function kz(c, u) {
  var f, p, y;
  const {
    data: E,
    attrs: S,
    index: g,
    parent: _,
    template: L = xz,
    transformer: O = (se) => se
  } = u, A = Cz(L), U = (f = c.raw) == null ? void 0 : f.split(`
`)[0].replace(KC, "");
  c.raw = (p = c.raw) == null ? void 0 : p.split(`
`).splice(0, 1, U).join(`
`), c.lang = (y = c.lang) == null ? void 0 : y.replace(KC, "");
  const V = O(c.text, S, E), j = {
    ...E,
    ...S,
    preview: V
  }, $ = [];
  for (const { type: se, text: Ce } of A)
    if (se === "placeholder")
      $.push(c);
    else if (se === "text") {
      const Ae = Rz(Ce), we = bz(Ae, j, {
        ignoreMissing: !0
      });
      $.push(Tz(Ae, we));
    }
  _.splice(g, 1, ...$);
}
function _z(c = {}) {
  return {
    extensions: [
      {
        name: "fences",
        level: "block",
        tokenizer(u, f) {
          const p = {};
          this.lexer.options.hooks && this.lexer.options.hooks !== null && "data" in this.lexer.options.hooks && Object.assign(p, this.lexer.options.hooks.data), f.forEach((y, E) => {
            var S;
            if (y.type !== "code" || !y.lang)
              return;
            const g = (S = y.lang) == null ? void 0 : S.split(" "), { preview: _, ...L } = Sz(y.lang);
            _ && kz(y, {
              index: E,
              parent: f,
              data: p,
              attrs: { lang: g, ...L },
              ...c
            });
          });
        }
      }
    ]
  };
}
function Fh(c, u) {
  return {
    content: c,
    role: u
  };
}
function Oz(c) {
  window.matchMedia("(min-width: 1025px)").matches && document.getElementById(`message-text-${c}`).focus();
}
const Dz = ({ html: c }) => {
  const u = Ne.useRef(null);
  return Ne.useEffect(() => {
    const f = (y) => {
      y.target.tagName === "A" && y.target.href && (y.preventDefault(), window.open(y.target.href, "_blank"));
    }, p = u.current;
    return p && p.addEventListener("click", f), () => {
      p && p.removeEventListener("click", f);
    };
  }, []), // Render the HTML content with dangerouslySetInnerHTML
  /* @__PURE__ */ mt.jsx("span", { ref: u, dangerouslySetInnerHTML: { __html: c } });
};
function Az({ iconColor: c }) {
  return /* @__PURE__ */ mt.jsx("svg", { role: "img", width: "512pt", height: "512pt", version: "1.1", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ mt.jsx("path", { d: "m60.875 276.5 99.766 53.922 174.7-143.03-161.79 206.74v77.512l72.832-96.914 115.88 63.434v0.003906c5.7188 3.1289 12.594 3.3203 18.477 0.51563 5.8828-2.8086 10.059-8.2734 11.219-14.688l69.797-384.68-400.35 201.14c-4.4648 2.2227-7.957 6.0117-9.8047 10.645-1.8477 4.6328-1.9219 9.7852-0.21094 14.469 1.7109 4.6875 5.0859 8.5781 9.4883 10.93z", fill: c }) });
}
function Lz({ iconColor: c }) {
  return /* @__PURE__ */ mt.jsx("svg", { role: "img", width: "512pt", height: "512pt", version: "1.1", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ mt.jsx("path", { d: "m227.5 256-86.512 86.516c-7.8711 7.8594-7.8711 20.637 0 28.496 7.8594 7.8672 20.633 7.8672 28.492 0l86.516-86.516 86.516 86.516c7.8594 7.8672 20.637 7.8672 28.496 0 7.8672-7.8594 7.8672-20.637 0-28.496l-86.516-86.516 86.516-86.516c7.8672-7.8594 7.8672-20.633 0-28.492-7.8594-7.8711-20.637-7.8711-28.496 0l-86.516 86.512-86.516-86.512c-7.8594-7.8711-20.633-7.8711-28.492 0-7.8711 7.8594-7.8711 20.633 0 28.492z", fill: c, fillRule: "evenodd" }) });
}
const Nz = ({ isFullscreen: c, color: u = "#000000" }) => c ? /* @__PURE__ */ mt.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ mt.jsx(
  "path",
  {
    d: "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3",
    stroke: u,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) }) : /* @__PURE__ */ mt.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ mt.jsx(
  "path",
  {
    d: "M3 8V3h5m13 5V3h-5m0 18h5v-5M3 16v5h5",
    stroke: u,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) }), XC = ({ toggleChat: c, widgetID: u, width: f, height: p, sticky: y }) => {
  const [E, S] = Ne.useState(twChatMessages[u]), [g, _] = Ne.useState(""), [L, O] = Ne.useState(!1), [A, U] = Ne.useState(0), [V, j] = Ne.useState([]), [$, se] = Ne.useState(!1), Ce = Ne.useRef(null), Ae = Ne.useRef(null), we = Ne.useRef(null), ge = window.twChatPluginSettings, Ie = window.twChatWidgetSettings[u], be = ge.tw_chat_max_characters, De = ge.tw_chat_send_button_image || null, We = getComputedStyle(document.documentElement), Ut = We.getPropertyValue("--tw-chat-icon-color").trim(), Dt = We.getPropertyValue("--tw-chat-header-button-color").trim(), B = () => {
    se(!$);
  };
  Ne.useEffect(() => {
    window.twChatMessages[u].length <= 1 && Ie.tw_chat_suggested_answers && j(Ie.tw_chat_suggested_answers.split(","));
  }, []), Ne.useEffect(() => {
    Ce.current && Ae.current && E.length > 1 && Ce.current.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  }, [E]), Ne.useEffect(() => {
    L && we.current && we.current.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  }, [L]);
  const ee = (k, K) => {
    if (g.trim() === "" && K.trim() === "")
      return;
    k && k.preventDefault(), O(!0);
    const fe = K || g;
    twChatMessages[u] = [...E, Fh(fe, "user")], S(twChatMessages[u]);
    const Be = {
      widget_id: u,
      messages: twChatMessages[u]
    }, Ye = {
      headers: {
        "X-WP-Nonce": ge.nonce
      }
    };
    Fr.post(
      ge.api_url,
      Be,
      Ye
    ).then((lt) => {
      const et = lt.data.message;
      let dt;
      if (et.length > 0) {
        dt = et;
        const ut = dt.replace(/(?:\r\n|\r|\n)/g, "<br />").replace(/【.*?†source】/g, "");
        S([...twChatMessages[u], Fh(ut, "assistant")]), twChatMessages[u] = [...twChatMessages[u], Fh(ut, "assistant")];
      }
      _(""), U(0), O(!1), y && Oz(u);
    }).catch((lt) => {
      console.error("Error fetching messages:", lt), S([...twChatMessages[u], Fh(ge.tw_chat_error_message, "error")]), O(!1);
    });
  }, pe = (k) => {
    k.key === "Enter" && !k.shiftKey && (k.preventDefault(), ee(k));
  }, ne = (k) => {
    const K = k.target.value;
    let fe = K.length;
    be && fe > be && (k.target.value = K.slice(0, be), fe = be), _(k.target.value), U(fe);
  }, me = (k) => {
    j([]), ee(null, k);
  }, Se = () => E.map((k, K) => {
    const fe = K === E.length - 1;
    return /* @__PURE__ */ mt.jsx(
      "div",
      {
        ref: fe ? Ce : null,
        id: `tw-chat-message-${u}-${K}`,
        className: `message ${k.role}`,
        children: /* @__PURE__ */ mt.jsx(Dz, { html: xn.use(_z).parse(k.content ? k.content : "Something went wrong.") })
      },
      K
    );
  }), he = () => V.length > 0 ? /* @__PURE__ */ mt.jsxs("div", { className: "tw-chat-suggested-answers", children: [
    V.map((k, K) => /* @__PURE__ */ mt.jsx("button", { onClick: () => me(k), children: k }, K)),
    Ie.tw_chat_dismiss_answers == "1" && /* @__PURE__ */ mt.jsx("button", { className: "tw-chat-suggested-answers--clear", onClick: () => j([]), children: Ie.tw_chat_dismiss_answers_text ? Ie.tw_chat_dismiss_answers_text : "Type a different response." })
  ] }) : /* @__PURE__ */ mt.jsxs(
    "form",
    {
      onSubmit: ee,
      className: L ? "tw-chat-form tw-chat-visibility-0" : "tw-chat-form",
      children: [
        /* @__PURE__ */ mt.jsxs("div", { className: "tw-chat-input-container", children: [
          /* @__PURE__ */ mt.jsx("label", { htmlFor: `message-text-${u}`, children: "Send Message" }),
          /* @__PURE__ */ mt.jsx(
            "textarea",
            {
              placeholder: "Enter your message...",
              id: `message-text-${u}`,
              onChange: ne,
              onKeyPress: pe,
              value: g,
              name: "message",
              required: "required",
              rows: "1"
            }
          ),
          be && /* @__PURE__ */ mt.jsx("div", { className: "tw-chat-char-count", children: /* @__PURE__ */ mt.jsxs("span", { className: A == be ? "tw-chat-max-characters" : "", children: [
            A,
            " / ",
            be,
            " characters"
          ] }) })
        ] }),
        /* @__PURE__ */ mt.jsxs("button", { children: [
          De ? /* @__PURE__ */ mt.jsx("img", { src: De, alt: "Send Message", className: "tw-chat-send-button-image" }) : /* @__PURE__ */ mt.jsx(Az, { iconColor: Ut }),
          /* @__PURE__ */ mt.jsx("span", { className: "sr-only", children: "Send Message" })
        ] })
      ]
    }
  ), I = Xy(
    "tw-chat-interface",
    { sticky: y },
    { embedded: !y },
    { "tw-chat-widget-fullscreen": $ }
  );
  let oe = {};
  return f && (oe.width = f), p && (oe.height = p), /* @__PURE__ */ mt.jsxs("div", { className: I, style: oe, children: [
    /* @__PURE__ */ mt.jsxs("div", { className: "tw-chat-header", children: [
      ge.tw_chat_logo_url && /* @__PURE__ */ mt.jsx("img", { className: "logo", src: ge.tw_chat_logo_url, alt: "Chat widget logo" }),
      /* @__PURE__ */ mt.jsx("span", { children: window.twChatWidgetSettings[u].tw_chat_widget_name }),
      /* @__PURE__ */ mt.jsx("div", { className: "tw-chat-header-actions", children: y == 1 && /* @__PURE__ */ mt.jsxs(mt.Fragment, { children: [
        /* @__PURE__ */ mt.jsx(
          "button",
          {
            onClick: B,
            className: "tw-chat-header-fullscreen",
            "aria-label": $ ? "Exit fullscreen" : "Enter fullscreen",
            children: /* @__PURE__ */ mt.jsx(Nz, { isFullscreen: $, color: Dt })
          }
        ),
        /* @__PURE__ */ mt.jsx(
          "button",
          {
            className: "tw-chat-header-close",
            onClick: () => c(),
            "aria-label": "Close chat interface",
            children: /* @__PURE__ */ mt.jsx(Lz, { iconColor: Dt })
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ mt.jsxs("div", { ref: Ae, className: "tw-chat-messages", id: `tw-chat-messages-${u}`, children: [
      Se(),
      L && /* @__PURE__ */ mt.jsx("div", { ref: we, className: "waiting-indicator", children: /* @__PURE__ */ mt.jsx(RM, { color: "#333" }) })
    ] }),
    /* @__PURE__ */ mt.jsxs("div", { className: "tw-chat-form-container", children: [
      he(),
      /* @__PURE__ */ mt.jsx("div", { className: "tw-chat-disclaimer-container", children: ge.tw_chat_disclaimer && /* @__PURE__ */ mt.jsx("div", { dangerouslySetInnerHTML: { __html: ge.tw_chat_disclaimer } }) })
    ] })
  ] });
};
function Mz({ widgetID: c, sticky: u, width: f, height: p }) {
  const [y, E] = Ne.useState(!1), S = window.twChatPluginSettings.tw_chat_button_text || "Chat", g = window.twChatPluginSettings.tw_chat_bubble_image || null, _ = window.twChatPluginSettings.tw_chat_bubble_text_tooltip === "1", L = () => {
    E(!y);
  }, O = () => /* @__PURE__ */ mt.jsxs("div", { className: "tw-chat-container", children: [
    /* @__PURE__ */ mt.jsx("div", { className: y ? "" : "tw-chat-visibility-0", children: /* @__PURE__ */ mt.jsx(XC, { widgetID: c, toggleChat: L, sticky: u }) }),
    /* @__PURE__ */ mt.jsxs(
      "button",
      {
        className: "tw-chat-bubble",
        onClick: L,
        "aria-label": "Open chat interface",
        ..._ ? {
          "data-tooltip-id": "tw-chat-bubble-tooltip",
          "data-tooltip-content": S,
          "data-tooltip-place": "top"
        } : {},
        children: [
          g && /* @__PURE__ */ mt.jsx("img", { src: g, alt: "", className: "tw-chat-bubble-image" }),
          !_ && S
        ]
      }
    ),
    _ && /* @__PURE__ */ mt.jsx(
      eN,
      {
        id: "tw-chat-bubble-tooltip",
        style: {
          backgroundColor: getComputedStyle(document.documentElement).getPropertyValue("--tw-chat-bubble-tooltip-background").trim() || "#333333",
          color: getComputedStyle(document.documentElement).getPropertyValue("--tw-chat-bubble-color").trim() || "#052b43"
        }
      }
    )
  ] });
  return /* @__PURE__ */ mt.jsx(mt.Fragment, { children: u == "1" ? /* @__PURE__ */ mt.jsx(O, {}) : /* @__PURE__ */ mt.jsx(XC, { widgetID: c, toggleChat: L, width: f, height: p, sticky: u }) });
}
window.twChatMessages = window.twChatMessages || {};
window.twChatWidgetSettings = window.twChatWidgetSettings || {};
window.addEventListener("load", function() {
  document.querySelectorAll(".tw-chat-widget-container").forEach((u) => {
    Uh.createRoot(u).render(
      /* @__PURE__ */ mt.jsx(vs.StrictMode, { children: /* @__PURE__ */ mt.jsx(
        Mz,
        {
          widgetID: u.dataset.widgetId,
          height: u.dataset.height,
          width: u.dataset.width,
          sticky: Number(u.dataset.sticky)
        }
      ) })
    );
    const p = window.twChatWidgetSettings[u.dataset.widgetId], y = Fh(p.tw_chat_greeting, "assistant");
    window.twChatMessages[u.dataset.widgetId] = [y];
  });
});
